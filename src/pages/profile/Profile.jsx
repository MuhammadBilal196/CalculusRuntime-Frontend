import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  NotebookPen,
  Layers,
  CircleAlert,
  Pencil,
  Trophy,
  Flame,
  Target,
  CircleCheck,
  ArrowRight,
  Award,
  Timer,
  BookOpen,
} from "lucide-react";
import { useAuth, getDisplayName, getInitials } from "../../context/AuthContext";
import { useProgress } from "../../context/ProgressContext";
import { useEnrollments } from "../../context/EnrollmentContext";
import useLearningHistory from "../../hooks/useLearningHistory";
import useCertificates from "../../hooks/useCertificates";
import {
  getCourseTopics,
  getCourseProgress,
  getNextStep,
  COURSE_META,
} from "../../data/courseCatalog";
import { getCourseTitle } from "../../data/courseCompletion";
import { computePoints, getLevel } from "../../utils/points";
import { latestNotes } from "../../utils/studyNotes";
import { FLASHCARDS, flashcardProgress, dueCounts } from "../../utils/flashcards";
import { unresolvedMistakes } from "../../utils/mistakeNotebook";
import { formatCompletionDate } from "../../utils/progressUtils";
import { DailyChallengePromo } from "../challenge/DailyChallenge";
import CourseRegister from "../../components/study/CourseRegister";
import "./Profile.css";

const TOOLS = [
  { label: "AI Solver", path: "/ai-solver", icon: "∂" },
  { label: "Function grapher", path: "/grapher", icon: "ƒ" },
  { label: "3D surface explorer", path: "/surface-explorer", icon: "⛰" },
  { label: "Vector fields", path: "/vectorfield", icon: "∇" },
  { label: "Volume calculator", path: "/volumecalculator", icon: "∬" },
  { label: "Matrix sandbox", path: "/linear-algebra/matrix-sandbox", icon: "▦" },
  { label: "Practice arena", path: "/practice", icon: "✎" },
  { label: "Topic analytics", path: "/analytics", icon: "%" },
];

function joinedLabel(createdAt) {
  if (!createdAt) return "";
  const value = Number(createdAt);
  const date = new Date(Number.isFinite(value) ? (value < 1e11 ? value * 1000 : value) : createdAt);
  if (Number.isNaN(date.getTime())) return "";
  return `Joined ${date.toLocaleDateString(undefined, { month: "long", year: "numeric" })}`;
}

function StudyTools() {
  const { events = [] } = useLearningHistory();
  const counts = useMemo(() => {
    const notes = latestNotes(events).length;
    const due = dueCounts(FLASHCARDS, flashcardProgress(events)).today;
    const mistakes = unresolvedMistakes(events).length;
    return { notes, due, mistakes };
  }, [events]);

  const cards = [
    {
      to: "/notes",
      Icon: NotebookPen,
      tone: "blue",
      title: "Notes & highlights",
      text: "Everything you highlighted or wrote while reading the guides.",
      stat: counts.notes,
      statLabel: counts.notes === 1 ? "note" : "notes",
      cta: "Open notes",
    },
    {
      to: "/flashcards",
      Icon: Layers,
      tone: "amber",
      title: "Flashcards",
      text: "Formula and definition cards on a spaced-repetition schedule.",
      stat: counts.due,
      statLabel: "due today",
      cta: "Review cards",
    },
    {
      to: "/mistakes",
      Icon: CircleAlert,
      tone: "rose",
      title: "Mistake notebook",
      text: "Questions you got wrong, ready to retry until you get them right.",
      stat: counts.mistakes,
      statLabel: counts.mistakes === 1 ? "to retry" : "to retry",
      cta: "Retry mistakes",
    },
  ];

  return (
    <section className="pf-section" aria-labelledby="pf-tools-title">
      <div className="pf-section__head">
        <h2 id="pf-tools-title" className="pf-section__title">
          Review tools
        </h2>
      </div>
      <div className="pf-study">
        {cards.map(({ to, Icon, tone, title, text, stat, statLabel, cta }) => (
          <Link key={to} to={to} className={`pf-study__card pf-tone--${tone}`}>
            <span className="pf-study__icon" aria-hidden="true">
              <Icon size={20} strokeWidth={2.2} />
            </span>
            <span className="pf-study__stat">
              <strong>{stat}</strong> {statLabel}
            </span>
            <span className="pf-study__title">{title}</span>
            <span className="pf-study__text">{text}</span>
            <span className="pf-study__cta">
              {cta} <ArrowRight size={15} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CourseCard({ courseId, completedSections, certificate }) {
  const p = getCourseProgress(courseId, completedSections);
  const next = getNextStep(courseId, completedSections);
  const topics = getCourseTopics(courseId);
  const meta = COURSE_META[courseId];
  const coreLeft = p.coreTotal - p.coreDone;

  let status;
  if (certificate) status = { tone: "done", text: "Certificate earned" };
  else if (coreLeft === 0) status = { tone: "ready", text: "Final exam unlocked" };
  else status = { tone: "", text: `${coreLeft} core part${coreLeft === 1 ? "" : "s"} to certificate` };

  return (
    <article className={`pf-course pf-tone--${meta.tone}`}>
      <div className="pf-course__top">
        <span className="pf-course__icon" aria-hidden="true">
          {meta.icon}
        </span>
        <div className="pf-course__heading">
          <h3 className="pf-course__title">
            <Link to={`/courses/${courseId}`}>{getCourseTitle(courseId)}</Link>
          </h3>
          <span className="pf-course__meta">
            {topics.length} modules · {topics.filter((t) => t.core).length} core
          </span>
          <span className={`pf-badge pf-badge--${status.tone || "plain"}`}>{status.text}</span>
        </div>
      </div>

      <div className="pf-course__bars">
        <div className="pf-bar">
          <div className="pf-bar__label">
            <span>Core path</span>
            <strong>{p.corePct}%</strong>
          </div>
          <div className="pf-bar__track">
            <span className="pf-bar__fill" style={{ width: `${p.corePct}%` }} />
          </div>
        </div>
        <div className="pf-bar pf-bar--soft">
          <div className="pf-bar__label">
            <span>All modules</span>
            <strong>
              {p.done}/{p.total}
            </strong>
          </div>
          <div className="pf-bar__track">
            <span className="pf-bar__fill" style={{ width: `${p.pct}%` }} />
          </div>
        </div>
      </div>

      {next ? (
        <p className="pf-course__next">
          Up next: <Link to={next.path}>{next.topic.title}</Link>
          {next.topic.core ? <span className="pf-chip">Core</span> : <span className="pf-chip pf-chip--soft">Optional</span>}
        </p>
      ) : (
        <p className="pf-course__next">Every module is complete. Brilliant work.</p>
      )}

      <div className="pf-course__actions">
        <Link to={next?.path || `/courses/${courseId}`} className="pf-btn pf-btn--primary">
          <BookOpen size={15} aria-hidden="true" /> {p.done ? "Continue" : "Start course"}
        </Link>
        <Link to={`/mock-exam/${courseId}`} className="pf-btn">
          <Timer size={15} aria-hidden="true" /> Mock exam
        </Link>
        <Link to={certificate ? `/certificate/${courseId}` : `/certificates?course=${courseId}`} className="pf-btn">
          <Award size={15} aria-hidden="true" /> Certificate
        </Link>
      </div>
    </article>
  );
}

function BookmarksSection({ bookmarks, removeBookmark }) {
  const [search, setSearch] = useState("");
  const filtered = bookmarks.filter((bm) => bm.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="pf-section" aria-labelledby="pf-bookmarks-title">
      <div className="pf-section__head">
        <h2 id="pf-bookmarks-title" className="pf-section__title">
          Bookmarks
        </h2>
        {bookmarks.length > 0 ? (
          <input
            className="pf-search"
            type="search"
            placeholder="Search bookmarks"
            aria-label="Search bookmarks"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        ) : null}
      </div>
      {bookmarks.length === 0 ? (
        <div className="pf-empty">
          Use the bookmark button at the top of any study guide to save it here.
        </div>
      ) : filtered.length === 0 ? (
        <div className="pf-empty">No bookmarks match “{search}”.</div>
      ) : (
        <ul className="pf-bookmarks">
          {filtered.map((bm) => (
            <li key={bm.id} className="pf-bookmark">
              <Link to={bm.path}>{bm.title}</Link>
              <button
                type="button"
                className="pf-bookmark__remove"
                onClick={() => removeBookmark(bm.id)}
                aria-label={`Remove bookmark: ${bm.title}`}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default function Profile() {
  const { user } = useAuth();
  const { progress, stats, removeBookmark, recordVisit, streak } = useProgress();
  const { courses, loaded } = useEnrollments();
  const { earned } = useCertificates();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  useEffect(() => {
    recordVisit("dashboard");
  }, [recordVisit]);

  const completed = progress.completedSections || {};
  const certCount = earned ? Object.keys(earned).length : 0;
  const points = computePoints({ ...progress, certificates: certCount });
  const level = getLevel(points.points);

  const registeredProgress = courses.map((id) => getCourseProgress(id, completed));
  const partsDone = registeredProgress.reduce((s, p) => s + p.done, 0);
  const partsTotal = registeredProgress.reduce((s, p) => s + p.total, 0);

  const firstNext = courses.map((id) => getNextStep(id, completed)).find(Boolean);

  const reviewTopics = useMemo(() => {
    const meta = progress.completedSectionMetadata || {};
    return courses
      .flatMap((courseId) =>
        getCourseTopics(courseId).flatMap((topic) =>
          topic.sectionIds
            .filter((id) => meta[id]?.needs_review)
            .map((id) => ({
              id,
              courseId,
              title: topic.title,
              path: topic.sectionIds.length > 1 ? topic.path.replace(/\/[12]$/, `/${topic.sectionIds.indexOf(id) + 1}`) : topic.path,
              completedAt: progress.completedSectionTimestamps?.[id],
              days: meta[id].days_since_completion,
            })),
        ),
      )
      .sort((a, b) => b.days - a.days)
      .slice(0, 6);
  }, [courses, progress.completedSectionMetadata, progress.completedSectionTimestamps]);

  if (!user) return null;
  const joined = joinedLabel(user.createdAt);

  return (
    <main className="pf-page cvx">
      {/* ── Profile header ── */}
      <section className="pf-hero">
        <div className="pf-hero__id">
          <span className="pf-avatar" aria-hidden="true">
            {getInitials(user)}
          </span>
          <div className="pf-hero__text">
            <p className="pf-hero__eyebrow">My profile</p>
            <h1 className="pf-hero__name">{getDisplayName(user)}</h1>
            <p className="pf-hero__meta">
              @{user.username}
              {joined ? ` · ${joined}` : ""}
              {!user.fullName ? (
                <>
                  {" · "}
                  <Link to="/settings">Add your full name for certificates</Link>
                </>
              ) : null}
            </p>
          </div>
        </div>
        <div className="pf-hero__level">
          <div className="pf-level">
            <span className="pf-level__name">{level.name}</span>
            <span className="pf-level__points">{points.points} pts</span>
          </div>
          <div className="pf-level__track" aria-hidden="true">
            <span style={{ width: `${level.progress}%` }} />
          </div>
          <span className="pf-level__next">
            {level.next ? `${level.next.min - points.points} pts to ${level.next.name}` : "Highest level reached"}
          </span>
        </div>
        <div className="pf-hero__actions">
          <Link to="/settings" className="pf-btn">
            <Pencil size={15} aria-hidden="true" /> Edit profile
          </Link>
          {firstNext ? (
            <Link to={firstNext.path} className="pf-btn pf-btn--primary">
              Continue: {firstNext.topic.title}
            </Link>
          ) : null}
        </div>
      </section>

      {/* ── Key numbers ── */}
      <section className="pf-stats" aria-label="Your numbers">
        <Link to="/leaderboard" className="pf-stat">
          <span className="pf-stat__icon pf-tone--blue" aria-hidden="true">
            <Trophy size={18} />
          </span>
          <span className="pf-stat__value">{points.points}</span>
          <span className="pf-stat__label">Leaderboard points</span>
        </Link>
        <div className="pf-stat">
          <span className="pf-stat__icon pf-tone--green" aria-hidden="true">
            <CircleCheck size={18} />
          </span>
          <span className="pf-stat__value">
            {partsDone}
            <small>/{partsTotal || 0}</small>
          </span>
          <span className="pf-stat__label">Parts completed</span>
        </div>
        <Link to="/analytics" className="pf-stat">
          <span className="pf-stat__icon pf-tone--amber" aria-hidden="true">
            <Target size={18} />
          </span>
          <span className="pf-stat__value">
            {points.quizPct}
            <small>%</small>
          </span>
          <span className="pf-stat__label">
            Quiz accuracy · {stats.quizzesTaken} quiz{stats.quizzesTaken === 1 ? "" : "zes"}
          </span>
        </Link>
        <div className="pf-stat">
          <span className="pf-stat__icon pf-tone--rose" aria-hidden="true">
            <Flame size={18} />
          </span>
          <span className="pf-stat__value">
            {streak}
            <small> day{streak === 1 ? "" : "s"}</small>
          </span>
          <span className="pf-stat__label">Study streak</span>
        </div>
      </section>

      <StudyTools />

      <DailyChallengePromo compact />

      {/* ── Registered courses ── */}
      <section className="pf-section" aria-labelledby="pf-courses-title">
        <div className="pf-section__head">
          <h2 id="pf-courses-title" className="pf-section__title">
            My courses
          </h2>
          <Link to="/settings" className="pf-section__link">
            Manage courses
          </Link>
        </div>
        {courses.length ? (
          <div className="pf-courses">
            {courses.map((id) => (
              <CourseCard key={id} courseId={id} completedSections={completed} certificate={earned?.[id]} />
            ))}
          </div>
        ) : loaded ? (
          <div className="pf-empty pf-empty--big">
            <strong>Choose your first course.</strong> Register below, or open any study guide and it will be
            added here automatically.
          </div>
        ) : null}
      </section>

      <CourseRegister title={courses.length ? "Register for another course" : "Available courses"} />

      {/* ── Spaced review ── */}
      {reviewTopics.length ? (
        <section className="pf-section" aria-labelledby="pf-review-title">
          <div className="pf-section__head">
            <h2 id="pf-review-title" className="pf-section__title">
              Time to review
            </h2>
          </div>
          <ul className="pf-review">
            {reviewTopics.map((item) => (
              <li key={item.id} className="pf-review__item">
                <div>
                  <Link to={item.path} className="pf-review__title">
                    {item.title}
                  </Link>
                  <span className="pf-review__meta">
                    {getCourseTitle(item.courseId)} · completed {formatCompletionDate(item.completedAt)} ·{" "}
                    {item.days} days ago
                  </span>
                </div>
                <Link to={item.path} className="pf-btn">
                  Review
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <BookmarksSection bookmarks={progress.bookmarks || []} removeBookmark={removeBookmark} />

      <section className="pf-section" aria-labelledby="pf-tools-grid-title">
        <div className="pf-section__head">
          <h2 id="pf-tools-grid-title" className="pf-section__title">
            Tools
          </h2>
          <Link to="/saved" className="pf-section__link">
            Saved examples
          </Link>
        </div>
        <div className="pf-tools">
          {TOOLS.map((t) => (
            <Link key={t.path} to={t.path} className="pf-tool">
              <span className="pf-tool__icon" aria-hidden="true">
                {t.icon}
              </span>
              {t.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
