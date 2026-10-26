import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Trophy, Medal, Search, RefreshCw, Info } from "lucide-react";
import { useAuth, getDisplayName } from "../../context/AuthContext";
import { useProgress } from "../../context/ProgressContext";
import useCertificates from "../../hooks/useCertificates";
import { computePoints, getLevel, POINT_RULES } from "../../utils/points";
import "./LeaderboardPage.css";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8002";

const SORTS = [
  { id: "points", label: "Points" },
  { id: "accuracy", label: "Quiz accuracy" },
  { id: "modules", label: "Modules completed" },
];

function initials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "?";
  return (parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : parts[0].slice(0, 2)).toUpperCase();
}

/** Server entries from an older backend have no points: estimate them. */
function normalizeEntry(entry) {
  const topics = Number(entry.topics) || 0;
  const quizCount = Number(entry.quizCount) || 0;
  const quizPct = Number(entry.quizPct) || 0;
  const hasPoints = typeof entry.points === "number";
  const estimatedQuiz = Math.round((quizPct / 100) * 20 * quizCount);
  return {
    id: `user-${entry.userId}`,
    userId: entry.userId,
    name: entry.fullName || entry.label || entry.username || "Student",
    username: entry.username || (entry.fullName ? "" : entry.label) || "",
    points: hasPoints ? entry.points : topics * 20 + estimatedQuiz,
    quizPoints: hasPoints ? entry.quizPoints || 0 : estimatedQuiz,
    mockPoints: entry.mockPoints || 0,
    examPoints: entry.examPoints || 0,
    modulePoints: hasPoints ? entry.modulePoints || 0 : topics * 20,
    coursePoints: entry.coursePoints || 0,
    topics,
    quizCount,
    quizPct,
    correctAnswers: entry.correctAnswers || 0,
    certificates: entry.certificates || 0,
    estimated: !hasPoints,
    isYou: false,
  };
}

function sortRows(rows, sort) {
  const sorted = [...rows];
  const byName = (a, b) => a.name.localeCompare(b.name);
  if (sort === "accuracy") {
    sorted.sort((a, b) => b.quizPct - a.quizPct || b.quizCount - a.quizCount || byName(a, b));
  } else if (sort === "modules") {
    sorted.sort((a, b) => b.topics - a.topics || b.points - a.points || byName(a, b));
  } else {
    sorted.sort((a, b) => b.points - a.points || b.quizPct - a.quizPct || byName(a, b));
  }
  return sorted.map((row, index) => ({ ...row, rank: index + 1 }));
}

function metricOf(row, sort) {
  if (sort === "accuracy") return { value: `${row.quizPct}%`, label: `${row.quizCount} quizzes` };
  if (sort === "modules") return { value: row.topics, label: "parts done" };
  return { value: row.points.toLocaleString(), label: "points" };
}

function Podium({ rows, sort }) {
  const top = rows.slice(0, 3);
  if (top.length < 2) return null;
  const order = [top[1], top[0], top[2]].filter(Boolean);
  return (
    <div className="lbp-podium" aria-label="Top three">
      {order.map((row) => {
        const metric = metricOf(row, sort);
        return (
          <div key={row.id} className={`lbp-podium__item lbp-podium__item--${row.rank}${row.isYou ? " is-you" : ""}`}>
            <span className="lbp-podium__avatar" aria-hidden="true">
              {initials(row.name)}
              <span className="lbp-podium__rank">{row.rank}</span>
            </span>
            <span className="lbp-podium__name">{row.name}</span>
            <span className="lbp-podium__value">
              {metric.value} <small>{metric.label}</small>
            </span>
            <span className="lbp-podium__step" aria-hidden="true" />
          </div>
        );
      })}
    </div>
  );
}

export default function Leaderboard() {
  const { user } = useAuth();
  const { progress, setLeaderboardOptIn } = useProgress();
  const { earned } = useCertificates();
  const optedIn = Boolean(progress.leaderboardOptIn);
  const [peers, setPeers] = useState(null);
  const [error, setError] = useState("");
  const [sort, setSort] = useState("points");
  const [query, setQuery] = useState("");

  const loadPeers = useCallback(async () => {
    setError("");
    try {
      const response = await fetch(`${API_URL}/api/progress/leaderboard`);
      if (!response.ok) throw new Error(String(response.status));
      const data = await response.json();
      setPeers(Array.isArray(data.entries) ? data.entries : []);
    } catch {
      setError("Couldn't reach the server for rankings. It may be waking up — try again in a moment.");
      setPeers((prev) => prev || []);
    }
  }, []);

  useEffect(() => {
    loadPeers();
  }, [loadPeers, optedIn]);

  const certCount = earned ? Object.keys(earned).length : 0;
  const you = useMemo(() => {
    if (!user) return null;
    const p = computePoints({ ...progress, certificates: certCount });
    return {
      ...p,
      id: "you",
      userId: user.id,
      name: getDisplayName(user),
      username: user.username,
      estimated: false,
      isYou: true,
    };
  }, [user, progress, certCount]);

  const isYou = useCallback(
    (entry) =>
      Boolean(user) &&
      ((user.id != null && entry.userId != null && Number(entry.userId) === Number(user.id)) ||
        (entry.username && entry.username.toLowerCase() === user.username?.toLowerCase())),
    [user],
  );

  const rows = useMemo(() => {
    const others = (peers || []).filter((p) => !isYou(p)).map(normalizeEntry);
    // Your own row uses this device's fresher numbers.
    const all = optedIn && you ? [...others, you] : others;
    return sortRows(all, sort);
  }, [peers, isYou, optedIn, you, sort]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return rows;
    return rows.filter((r) => r.name.toLowerCase().includes(q) || r.username.toLowerCase().includes(q));
  }, [rows, query]);

  const yourRow = rows.find((r) => r.isYou);
  const level = getLevel(you?.points || 0);
  const anyEstimated = rows.some((r) => r.estimated);

  return (
    <main className="lbp-page cvx">
      <header className="lbp-hero">
        <div>
          <p className="lbp-eyebrow">
            <Trophy size={16} aria-hidden="true" /> Leaderboard
          </p>
          <h1 className="lbp-title">Who's learning the most this term</h1>
          <p className="lbp-lead">
            Points come from correct quiz answers, mock exams, completed module parts and certificates. Every
            correct answer counts.
          </p>
        </div>
        {you ? (
          <div className="lbp-you">
            <span className="lbp-you__label">Your standing</span>
            <span className="lbp-you__rank">{optedIn && yourRow ? `#${yourRow.rank}` : "Hidden"}</span>
            <span className="lbp-you__points">
              {you.points.toLocaleString()} pts · {level.name}
            </span>
            <span className="lbp-you__track" aria-hidden="true">
              <span style={{ width: `${level.progress}%` }} />
            </span>
            <span className="lbp-you__next">
              {level.next ? `${level.next.min - you.points} pts to ${level.next.name}` : "Highest level"}
            </span>
          </div>
        ) : (
          <div className="lbp-you">
            <span className="lbp-you__label">Join the board</span>
            <span className="lbp-you__cta">
              <Link to="/signup">Create an account</Link> or <Link to="/login">sign in</Link> to earn points.
            </span>
          </div>
        )}
      </header>

      <div className="lbp-layout">
        <section className="lbp-board" aria-label="Rankings">
          <div className="lbp-toolbar">
            <div className="lbp-tabs" role="tablist" aria-label="Rank by">
              {SORTS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={sort === s.id}
                  className={`lbp-tab${sort === s.id ? " is-active" : ""}`}
                  onClick={() => setSort(s.id)}
                >
                  {s.label}
                </button>
              ))}
            </div>
            <label className="lbp-search">
              <Search size={15} aria-hidden="true" />
              <input
                type="search"
                placeholder="Find a student"
                aria-label="Find a student"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </label>
            <button type="button" className="lbp-icon-btn" onClick={loadPeers} aria-label="Refresh rankings">
              <RefreshCw size={16} />
            </button>
          </div>

          {error ? (
            <p className="lbp-alert" role="alert">
              {error}
            </p>
          ) : null}

          {peers === null ? (
            <div className="lbp-loading" role="status">
              {[0, 1, 2, 3].map((n) => (
                <span key={n} className="lbp-skeleton" />
              ))}
              <span className="lbp-sr">Loading rankings…</span>
            </div>
          ) : rows.length === 0 ? (
            <div className="lbp-empty" role="status">
              <Medal size={28} aria-hidden="true" />
              <h2>No one on the board yet</h2>
              <p>
                {user
                  ? optedIn
                    ? "Finish a quiz or complete a module part and you'll appear here."
                    : "Turn on “Show me on the leaderboard” to be the first."
                  : "Sign in and share your progress to be the first."}
              </p>
            </div>
          ) : (
            <>
              {!query && sort === "points" ? <Podium rows={rows} sort={sort} /> : null}
              <ol className="lbp-list">
                {visible.map((row) => {
                  const metric = metricOf(row, sort);
                  return (
                    <li key={row.id} className={`lbp-row${row.isYou ? " is-you" : ""}${row.rank <= 3 ? ` lbp-row--top${row.rank}` : ""}`}>
                      <span className="lbp-row__rank">{row.rank}</span>
                      <span className="lbp-row__avatar" aria-hidden="true">
                        {initials(row.name)}
                      </span>
                      <span className="lbp-row__who">
                        <span className="lbp-row__name">
                          {row.name}
                          {row.isYou ? <span className="lbp-you-tag">You</span> : null}
                        </span>
                        <span className="lbp-row__meta">
                          {row.username ? `@${row.username} · ` : ""}
                          {getLevel(row.points).name} · {row.topics} parts · {row.quizPct}% accuracy
                        </span>
                      </span>
                      <span className="lbp-row__breakdown" aria-label="Points breakdown">
                        {[
                          ["Quizzes", row.quizPoints],
                          ["Mock", row.mockPoints],
                          ["Exam", row.examPoints],
                          ["Parts", row.modulePoints],
                          ["Certificates", row.coursePoints],
                        ]
                          .filter(([, value]) => value > 0)
                          .map(([label, value]) => (
                            <span key={label}>
                              {label} <strong>{value}</strong>
                            </span>
                          ))}
                      </span>
                      <span className="lbp-row__metric">
                        <strong>{metric.value}</strong>
                        <small>{metric.label}</small>
                      </span>
                    </li>
                  );
                })}
              </ol>
              {visible.length === 0 ? <p className="lbp-muted">No student matches “{query}”.</p> : null}
              {anyEstimated ? (
                <p className="lbp-muted lbp-note">
                  <Info size={14} aria-hidden="true" /> Some points are estimated until the server is updated.
                </p>
              ) : null}
            </>
          )}
        </section>

        <aside className="lbp-side">
          <section className="lbp-card">
            <h2 className="lbp-card__title">Show me on the leaderboard</h2>
            <p className="lbp-card__text">
              {user
                ? `Other students will see ${getDisplayName(user)}, your points and progress.`
                : "Sign in to share your progress."}
            </p>
            <label className="lbp-switch">
              <input
                type="checkbox"
                checked={optedIn}
                disabled={!user}
                onChange={async (e) => {
                  await setLeaderboardOptIn(e.target.checked);
                  setTimeout(loadPeers, 300);
                }}
                aria-label="Opt in to the leaderboard"
              />
              <span className="lbp-switch__track" aria-hidden="true">
                <span />
              </span>
              <span>{optedIn ? "Visible to others" : "Hidden"}</span>
            </label>
            {user && !user.fullName ? (
              <p className="lbp-card__text">
                <Link to="/settings">Add your full name</Link> so classmates recognise you.
              </p>
            ) : null}
          </section>

          <section className="lbp-card">
            <h2 className="lbp-card__title">How points work</h2>
            <ul className="lbp-rules">
              {POINT_RULES.map((rule) => (
                <li key={rule.id}>
                  <span>{rule.label}</span>
                  <strong>
                    +{rule.value} <small>{rule.unit}</small>
                  </strong>
                </li>
              ))}
            </ul>
            <p className="lbp-card__text">Only your best attempt at each quiz counts, so retrying can only raise your score.</p>
          </section>

          {you ? (
            <section className="lbp-card">
              <h2 className="lbp-card__title">Your points</h2>
              <ul className="lbp-rules lbp-rules--mine">
                <li>
                  <span>Quizzes &amp; practice</span>
                  <strong>{you.quizPoints}</strong>
                </li>
                <li>
                  <span>Mock exams</span>
                  <strong>{you.mockPoints}</strong>
                </li>
                <li>
                  <span>Certification exams</span>
                  <strong>{you.examPoints}</strong>
                </li>
                <li>
                  <span>Module parts</span>
                  <strong>{you.modulePoints}</strong>
                </li>
                <li>
                  <span>Certificates</span>
                  <strong>{you.coursePoints}</strong>
                </li>
                <li className="lbp-rules__total">
                  <span>Total</span>
                  <strong>{you.points}</strong>
                </li>
              </ul>
              <div className="lbp-card__actions">
                <Link to="/practice" className="lbp-btn">
                  Practice
                </Link>
                <Link to="/dashboard" className="lbp-btn">
                  My courses
                </Link>
              </div>
            </section>
          ) : null}
        </aside>
      </div>
    </main>
  );
}
