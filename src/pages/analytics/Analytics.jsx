import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { readQuizAttempts } from "../../utils/quizAttempts";
import { MOCK_EXAM_COURSES } from "../../utils/mockExam";
import { PRACTICE_SELECTIONS } from "../courses/PractiseSection";
import {
  COURSE_LABELS,
  DIFFICULTIES,
  MIN_ANSWERS_FOR_STATUS,
  SOURCE_LABELS,
  STATUS_LABELS,
  buildAnalytics,
  buildCatalog,
  formatWhen,
  practiceLinkFor,
  sortTopics,
} from "../../utils/analytics";
import "./Analytics.css";

/**
 * Topic-wise Analytics — /analytics
 * Reads the answers saved on this device for the signed-in student and shows
 * accuracy per topic. Read-only: it never changes scores, certificates or the leaderboard.
 */

// Same lazy loaders as the Practice Arena — used to find each topic's module for the "Practise" links.
const BANK_LOADERS = {
  calcAg: () => import("../../data/calcAgPracticeBank").then((m) => m.CALC_AG_PRACTICE_BANK),
  mv: () => import("../../data/mvPracticeBank").then((m) => m.MV_PRACTICE_BANK),
  la: () => import("../../data/laPracticeBank").then((m) => m.LA_PRACTICE_BANK),
  ps: () => import("../../data/psPracticeBank").then((m) => m.PS_PRACTICE_BANK),
};

function loadCatalog() {
  const entries = Object.entries(MOCK_EXAM_COURSES); // [courseId, bankKey]
  return Promise.all(entries.map(([courseId, bankKey]) =>
    BANK_LOADERS[bankKey]().then((bank) => [courseId, bank]).catch(() => [courseId, []])))
    .then((pairs) => buildCatalog(Object.fromEntries(pairs)));
}

const STATUS_FILTERS = ["all", "weak", "developing", "strong", "few"];

function Bar({ pct, status }) {
  return (
    <span className="an-bar" aria-hidden="true">
      <span className={`an-bar-fill an-bar-fill--${status}`} style={{ width: `${Math.max(0, Math.min(100, pct))}%` }} />
    </span>
  );
}

function Analytics() {
  const user = useAuth()?.user;
  const [records, setRecords] = useState(() => readQuizAttempts(user));
  const [catalog, setCatalog] = useState([]);

  const [courseId, setCourseId] = useState("all");
  const [source, setSource] = useState("all");
  const [difficulty, setDifficulty] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [sortBy, setSortBy] = useState("weakest");
  const [query, setQuery] = useState("");

  // Re-read when the user changes, and when another tab saves new answers.
  useEffect(() => {
    setRecords(readQuizAttempts(user));
    const onStorage = (event) => {
      if (!event.key || event.key.startsWith("calcvoyager_question_attempts_v1:")) setRecords(readQuizAttempts(user));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [user]);

  useEffect(() => {
    let cancelled = false;
    loadCatalog()
      .then((list) => { if (!cancelled) setCatalog(list); })
      .catch(() => { /* links fall back to the course page */ });
    return () => { cancelled = true; };
  }, []);

  const data = useMemo(
    // No catalogue here: only topics the student has actually answered are shown.
    // (The catalogue is still used to build working "Practise" links.)
    () => buildAnalytics(records, { courseId, source, difficulty }),
    [records, courseId, source, difficulty],
  );

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortTopics(data.topics, sortBy).filter((t) =>
      (statusFilter === "all" || t.status === statusFilter)
      && (!q || t.topic.toLowerCase().includes(q)));
  }, [data.topics, sortBy, statusFilter, query]);

  const filtersActive = courseId !== "all" || source !== "all" || difficulty !== "all"
    || statusFilter !== "all" || query;
  const clearFilters = () => {
    setCourseId("all"); setSource("all"); setDifficulty("all"); setStatusFilter("all"); setQuery("");
  };

  if (!user?.accessToken) {
    return (
      <main className="an-page">
        <div className="an-panel an-center">
          <h1 className="an-title">Topic-wise Analytics</h1>
          <p className="an-muted">Sign in to see how you are doing in every topic.</p>
          <div className="an-actions an-actions--center">
            <Link className="an-btn an-btn--primary" to="/login">Sign in</Link>
            <Link className="an-btn" to="/signup">Create an account</Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="an-page">
      <header className="an-head">
        <p className="an-eyebrow">Your progress</p>
        <h1 className="an-title">Topic-wise Analytics</h1>
        <p className="an-muted">
          Accuracy per topic from your topic quizzes, Practice Arena and mock exams.
          Only your <strong>first answer</strong> to each question counts.
        </p>
      </header>

      {/* ── Filters ── */}
      <section className="an-panel an-filters" aria-label="Filters">
        <label className="an-field">
          <span>Course</span>
          <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
            <option value="all">All courses</option>
            {Object.entries(COURSE_LABELS).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
          </select>
        </label>
        <label className="an-field">
          <span>Source</span>
          <select value={source} onChange={(e) => setSource(e.target.value)}>
            <option value="all">All sources</option>
            {Object.entries(SOURCE_LABELS).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
          </select>
        </label>
        <label className="an-field">
          <span>Difficulty</span>
          <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
            <option value="all">All difficulties</option>
            {DIFFICULTIES.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </label>
        {filtersActive && (
          <button type="button" className="an-btn an-btn--small" onClick={clearFilters}>Clear filters</button>
        )}
        {difficulty !== "all" && (
          <p className="an-hint">Topic-quiz answers have no difficulty, so they are hidden while a difficulty is selected.</p>
        )}
      </section>

      {/* ── Summary ── */}
      <section className="an-stats" aria-label="Summary">
        <div className="an-stat">
          <span className="an-stat-num">{data.total}</span>
          <span className="an-stat-label">Questions answered</span>
        </div>
        <div className="an-stat">
          <span className="an-stat-num">{data.total ? `${data.pct}%` : "—"}</span>
          <span className="an-stat-label">Overall accuracy</span>
        </div>
        <div className="an-stat">
          <span className="an-stat-num an-good">{data.statusCounts.strong || 0}</span>
          <span className="an-stat-label">Strong topics</span>
        </div>
        <div className="an-stat">
          <span className="an-stat-num an-bad">{data.statusCounts.weak || 0}</span>
          <span className="an-stat-label">Need work</span>
        </div>
        <div className="an-stat">
          <span className="an-stat-num">{data.topics.length}</span>
          <span className="an-stat-label">Topics practised</span>
        </div>
      </section>

      {data.total === 0 ? (
        <section className="an-panel an-center">
          <h2 className="an-h2">No answers yet{filtersActive ? " for these filters" : ""}</h2>
          <p className="an-muted">
            {filtersActive
              ? "Try clearing the filters."
              : "Answer a topic quiz, a Practice Arena question or a mock exam and your results will appear here."}
          </p>
          <div className="an-actions an-actions--center">
            {filtersActive
              ? <button type="button" className="an-btn an-btn--primary" onClick={clearFilters}>Clear filters</button>
              : <Link className="an-btn an-btn--primary" to="/practice">Go to the Practice Arena</Link>}
          </div>
        </section>
      ) : (
        <div className="an-grid">
          {/* ── Focus next ── */}
          <section className="an-panel">
            <h2 className="an-h2">Focus next</h2>
            {data.weakest.length ? (
              <ul className="an-focus">
                {data.weakest.map((t) => (
                  <li key={t.key}>
                    <div>
                      <strong>{t.topic}</strong>
                      <span className="an-muted an-small"> · {t.correct}/{t.answered} correct ({t.pct}%)</span>
                    </div>
                    <Link className="an-btn an-btn--small" to={practiceLinkFor(t, catalog, PRACTICE_SELECTIONS)}>
                      Practise →
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="an-muted">
                No weak topics right now. Topics are rated after {MIN_ANSWERS_FOR_STATUS} answers.
              </p>
            )}
          </section>

          {/* ── By difficulty & source ── */}
          <section className="an-panel">
            <h2 className="an-h2">By difficulty</h2>
            <table className="an-mini">
              <tbody>
                {data.byDifficulty.map((row) => (
                  <tr key={row.key}>
                    <td>{row.key}</td>
                    <td>{row.total ? `${row.correct} / ${row.total}` : "—"}</td>
                    <td>{row.total ? `${row.pct}%` : ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {data.bySource.length > 1 && (
              <>
                <h2 className="an-h2">By source</h2>
                <table className="an-mini">
                  <tbody>
                    {data.bySource.map((row) => (
                      <tr key={row.key}><td>{row.label}</td><td>{row.correct} / {row.total}</td><td>{row.pct}%</td></tr>
                    ))}
                  </tbody>
                </table>
              </>
            )}
          </section>
        </div>
      )}

      {/* ── Topic table ── */}
      <section className="an-panel" aria-labelledby="an-topics-heading">
        <div className="an-table-head">
          <h2 id="an-topics-heading" className="an-h2">Topics</h2>
          <div className="an-table-tools">
            <input
              type="search"
              className="an-search"
              placeholder="Search topics"
              aria-label="Search topics"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <select aria-label="Show" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              {STATUS_FILTERS.map((s) => (
                <option key={s} value={s}>
                  {s === "all" ? "All topics" : STATUS_LABELS[s]}
                  {s !== "all" ? ` (${data.statusCounts[s] || 0})` : ""}
                </option>
              ))}
            </select>
            <select aria-label="Sort by" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="weakest">Weakest first</option>
              <option value="most">Most answered</option>
              <option value="recent">Most recent</option>
              <option value="name">A–Z</option>
            </select>
          </div>
        </div>

        {rows.length === 0 ? (
          <p className="an-muted">
            {data.topics.length ? "No topics match." : "Topics appear here once you answer questions in them."}
          </p>
        ) : (
          <div className="an-table-wrap">
            <table className="an-table">
              <thead>
                <tr>
                  <th scope="col">Topic</th>
                  <th scope="col">Answered</th>
                  <th scope="col">Accuracy</th>
                  <th scope="col">Status</th>
                  <th scope="col">Last activity</th>
                  <th scope="col"><span className="an-sr">Action</span></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((t) => (
                  <tr key={t.key}>
                    <td>
                      <div className="an-topic">{t.topic}</div>
                      {courseId === "all" && (
                        <div className="an-muted an-small">{COURSE_LABELS[t.courseId] || "Other"}</div>
                      )}
                    </td>
                    <td>{t.answered}</td>
                    <td>
                      <span className="an-acc">
                        <Bar pct={t.pct} status={t.status} />
                        <span>{t.pct}%</span>
                      </span>
                    </td>
                    <td><span className={`an-pill an-pill--${t.status}`}>{STATUS_LABELS[t.status]}</span></td>
                    <td className="an-muted">{formatWhen(t.lastAt)}</td>
                    <td>
                      <Link className="an-link" to={practiceLinkFor(t, catalog, PRACTICE_SELECTIONS)}>
                        Practise
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <p className="an-muted an-small an-foot">
          Saved on this device. {data.rawCount > data.total
            ? `${data.rawCount - data.total} repeat answers are not counted (first-answer rule).`
            : ""}
        </p>
      </section>
    </main>
  );
}

export default Analytics;
