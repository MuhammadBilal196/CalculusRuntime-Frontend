import { useState, useMemo, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Flame, Clock, Target, Trophy, ArrowRight, CalendarDays } from "lucide-react";
import { mixedMathToHtml } from "../../utils/mixedMath";
import { recordActivityDay } from "../../utils/progressUtils";
import { useAuth } from "../../context/AuthContext";
import {
  CALC_A_GAMMA_BETA_QUIZ,
  CALC_A_LEIBNIZ_RULE_QUIZ,
  CALC_B_FOURIER_TRANSFORM_QUIZ,
  CALC_B_Z_TRANSFORM_QUIZ,
  CALC_C_INTRO_PDES_QUIZ,
  CALC_C_ORTHOGONAL_POLY_QUIZ,
} from "../../data/calcAgSpecialQuizzes";
import {
  CALC_A_UNIFORM_CONV_QUIZ,
  CALC_A_INTERCHANGE_LIMITS_QUIZ,
  CALC_B_POWER_SERIES_ODE_QUIZ,
  CALC_B_FROBENIUS_METHOD_QUIZ,
  CALC_C_ANALYTIC_CR_QUIZ,
  CALC_C_CONTOUR_RESIDUES_QUIZ,
} from "../../data/calcAgSequencesComplexQuizzes";
import "./DailyChallenge.css";

const SOURCES = [
  [CALC_A_GAMMA_BETA_QUIZ, "Gamma & Beta Functions", "/gamma-beta-functions/1"],
  [CALC_A_LEIBNIZ_RULE_QUIZ, "Leibniz Integral Rule", "/leibniz-rule/1"],
  [CALC_B_FOURIER_TRANSFORM_QUIZ, "Fourier Transform & Convolution", "/fourier-transforms/1"],
  [CALC_B_Z_TRANSFORM_QUIZ, "Z-Transform & Difference Equations", "/z-transforms/1"],
  [CALC_C_INTRO_PDES_QUIZ, "Introduction to PDEs (Heat & Wave)", "/intro-pdes/1"],
  [CALC_C_ORTHOGONAL_POLY_QUIZ, "Orthogonal Polynomials", "/orthogonal-polynomials/1"],
  [CALC_A_UNIFORM_CONV_QUIZ, "Pointwise & Uniform Convergence", "/pointwise-uniform-convergence/1"],
  [CALC_A_INTERCHANGE_LIMITS_QUIZ, "Interchanging Limits & Integrals", "/interchanging-limits/1"],
  [CALC_B_POWER_SERIES_ODE_QUIZ, "Power-Series Solutions of ODEs", "/power-series-ode/1"],
  [CALC_B_FROBENIUS_METHOD_QUIZ, "Frobenius Method for Singular ODEs", "/frobenius-method/1"],
  [CALC_C_ANALYTIC_CR_QUIZ, "Analytic Functions & Cauchy-Riemann", "/analytic-functions/1"],
  [CALC_C_CONTOUR_RESIDUES_QUIZ, "Contour Integrals & Residues", "/contour-integrals/1"],
];

// Every curated question, tagged with its topic and the guide that teaches it.
const CHALLENGE_POOL = SOURCES.flatMap(([quiz, topic, path]) =>
  (quiz || []).map((q) => ({ ...q, topic, path })),
).filter((q) => q.prompt && Array.isArray(q.options) && q.answer);

const LETTERS = ["A", "B", "C", "D"];
const LEGACY_KEY = "calculus-daily-challenges";

const STREAK_MILESTONES = [
  { days: 3, label: "Spark", icon: "🔥" },
  { days: 7, label: "Nova", icon: "⚡" },
  { days: 14, label: "Pulsar", icon: "🌟" },
  { days: 30, label: "Supernova", icon: "👑" },
];

/** UTC day key, e.g. 2026-10-26 (offset in days). */
export function getUtcTodayKey(offsetDays = 0) {
  const now = new Date();
  now.setUTCDate(now.getUTCDate() + offsetDays);
  return now.toISOString().slice(0, 10);
}

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/** Same question for everyone on a given UTC day. */
function questionFor(dayKey) {
  const index = hashString(`calcvoyager:${dayKey}`) % CHALLENGE_POOL.length;
  return { index, question: CHALLENGE_POOL[index] };
}

function storageKey(username) {
  return username ? `calcvoyager_daily_${String(username).toLowerCase()}` : LEGACY_KEY;
}

/** Each account keeps its own record; older device-wide answers are carried over once. */
function loadChallenges(username) {
  try {
    const own = localStorage.getItem(storageKey(username));
    if (own) return JSON.parse(own) || {};
    if (username) {
      const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) || "{}") || {};
      if (Object.keys(legacy).length) localStorage.setItem(storageKey(username), JSON.stringify(legacy));
      return legacy;
    }
  } catch {}
  return {};
}

function saveChallenges(username, records) {
  try {
    localStorage.setItem(storageKey(username), JSON.stringify(records));
  } catch {}
}

/** Streak of consecutive challenge days (today, or up to yesterday if today is still open). */
export function challengeStats(records, todayKey = getUtcTodayKey()) {
  const days = new Set(Object.keys(records || {}));
  const shift = (key, n) => {
    const d = new Date(`${key}T00:00:00Z`);
    d.setUTCDate(d.getUTCDate() + n);
    return d.toISOString().slice(0, 10);
  };

  let cursor = days.has(todayKey) ? todayKey : shift(todayKey, -1);
  let current = 0;
  while (days.has(cursor)) {
    current += 1;
    cursor = shift(cursor, -1);
  }

  let best = 0;
  let run = 0;
  let previous = null;
  [...days].sort().forEach((key) => {
    run = previous && shift(previous, 1) === key ? run + 1 : 1;
    best = Math.max(best, run);
    previous = key;
  });

  const values = Object.values(records || {});
  const correct = values.filter((r) => r?.isCorrect).length;
  return {
    current,
    best,
    solved: values.length,
    correct,
    accuracy: values.length ? Math.round((correct / values.length) * 100) : 0,
  };
}

function useCountdown(onRollover) {
  const [left, setLeft] = useState("");
  useEffect(() => {
    let day = getUtcTodayKey();
    const tick = () => {
      const now = new Date();
      const next = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1);
      const diff = Math.max(0, next - now.getTime());
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      setLeft([h, m, s].map((v) => String(v).padStart(2, "0")).join(":"));
      const fresh = getUtcTodayKey();
      if (fresh !== day) {
        day = fresh;
        onRollover(fresh);
      }
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [onRollover]);
  return left;
}

export default function DailyChallenge() {
  const { user } = useAuth() || {};
  const username = user?.username;
  const [todayKey, setTodayKey] = useState(getUtcTodayKey);
  const [records, setRecords] = useState(() => loadChallenges(username));
  const [selectedIdx, setSelectedIdx] = useState(null);

  useEffect(() => {
    setRecords(loadChallenges(username));
  }, [username]);

  // Another tab answered: pick it up.
  useEffect(() => {
    const onStorage = (e) => {
      if (e.key === storageKey(username)) setRecords(loadChallenges(username));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [username]);

  const timeLeft = useCountdown(useCallback((fresh) => setTodayKey(fresh), []));
  const { index: questionIndex, question } = useMemo(() => questionFor(todayKey), [todayKey]);
  const todayRecord = records[todayKey];
  const isSubmitted = Boolean(todayRecord);
  const chosen = isSubmitted ? LETTERS.indexOf(todayRecord.selected) : selectedIdx;

  useEffect(() => {
    setSelectedIdx(null);
  }, [todayKey]);

  const stats = useMemo(() => challengeStats(records, todayKey), [records, todayKey]);
  const nextMilestone = STREAK_MILESTONES.find((m) => stats.current < m.days);
  const tier = [...STREAK_MILESTONES].reverse().find((m) => stats.current >= m.days);

  const handleSubmit = useCallback(() => {
    if (selectedIdx === null || records[todayKey]) return;
    const letter = LETTERS[selectedIdx];
    const next = {
      ...records,
      [todayKey]: {
        questionIndex,
        selected: letter,
        isCorrect: letter === question.answer,
        timestamp: Date.now(),
        utcDate: todayKey,
      },
    };
    recordActivityDay();
    setRecords(next);
    saveChallenges(username, next);
  }, [selectedIdx, records, todayKey, questionIndex, question, username]);

  // The last 30 UTC days, oldest first, in one row.
  const last30 = useMemo(() => {
    let studyDays = [];
    try {
      studyDays = JSON.parse(localStorage.getItem("calculus-study-days") || "[]");
    } catch {}
    return Array.from({ length: 30 }, (_, i) => {
      const key = getUtcTodayKey(i - 29);
      const date = new Date(`${key}T00:00:00Z`);
      const record = records[key];
      const studied = studyDays.includes(new Date(date.getTime() + date.getTimezoneOffset() * 60000).toDateString());
      const state = record ? (record.isCorrect ? "correct" : "wrong") : studied ? "studied" : "none";
      return {
        key,
        state,
        isToday: i === 29,
        day: date.getUTCDate(),
        weekday: date.toLocaleDateString(undefined, { weekday: "short", timeZone: "UTC" }),
        month: date.toLocaleDateString(undefined, { month: "short", timeZone: "UTC" }),
        newMonth: i === 0 || date.getUTCDate() === 1,
      };
    });
  }, [records]);

  const stateLabel = { correct: "Solved correctly", wrong: "Answered, not correct", studied: "Studied", none: "No activity" };

  return (
    <main className="dc-page cvx">
      <header className="dc-hero">
        <div className="dc-hero__copy">
          <p className="dc-eyebrow">
            <Flame size={16} aria-hidden="true" /> Daily challenge
          </p>
          <h1 className="dc-title">One problem a day keeps the exam stress away</h1>
          <p className="dc-subtitle">
            Everyone gets the same problem each day. Answer it, read the worked explanation, and keep your
            streak alive.
          </p>
        </div>
        <div className="dc-hero__stats">
          <div className="dc-kpi">
            <Flame size={18} aria-hidden="true" />
            <strong>{stats.current}</strong>
            <span>day streak</span>
          </div>
          <div className="dc-kpi">
            <Trophy size={18} aria-hidden="true" />
            <strong>{stats.best}</strong>
            <span>best streak</span>
          </div>
          <div className="dc-kpi">
            <Target size={18} aria-hidden="true" />
            <strong>{stats.accuracy}%</strong>
            <span>
              {stats.correct}/{stats.solved} correct
            </span>
          </div>
          <div className="dc-kpi">
            <Clock size={18} aria-hidden="true" />
            <strong className="dc-mono">{timeLeft || "--:--:--"}</strong>
            <span>until the next problem</span>
          </div>
        </div>
      </header>

      {/* 30-day activity in one row */}
      <section className="dc-strip" aria-label="Last 30 days">
        <div className="dc-strip__head">
          <h2 className="dc-strip__title">
            <CalendarDays size={16} aria-hidden="true" /> Last 30 days
          </h2>
          <ul className="dc-legend">
            <li>
              <i className="dc-cell--correct" /> Correct
            </li>
            <li>
              <i className="dc-cell--wrong" /> Answered
            </li>
            <li>
              <i className="dc-cell--studied" /> Studied
            </li>
            <li>
              <i className="dc-cell--none" /> None
            </li>
          </ul>
        </div>
        <ol className="dc-strip__days">
          {last30.map((d) => (
            <li
              key={d.key}
              className={`dc-cell dc-cell--${d.state}${d.isToday ? " is-today" : ""}`}
              title={`${d.weekday} ${d.day} ${d.month} — ${stateLabel[d.state]}`}
            >
              {d.newMonth ? <span className="dc-cell__month">{d.month}</span> : null}
              <span className="dc-cell__day">{d.day}</span>
              <span className="dc-sr">{stateLabel[d.state]}</span>
            </li>
          ))}
        </ol>
      </section>

      <div className="dc-layout">
        <article className="dc-card">
          <div className="dc-card__head">
            <span className="dc-topic">{question.topic}</span>
            <span className="dc-date">
              {new Date(`${todayKey}T00:00:00Z`).toLocaleDateString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "long",
                timeZone: "UTC",
              })}
            </span>
          </div>

          <h2 className="dc-question" dangerouslySetInnerHTML={{ __html: mixedMathToHtml(question.prompt) }} />

          <div className="dc-options" role="radiogroup" aria-label="Answer options">
            {question.options.map((opt, idx) => {
              const letter = LETTERS[idx];
              let state = "";
              if (isSubmitted) {
                if (letter === question.answer) state = "correct";
                else if (chosen === idx) state = "incorrect";
              } else if (chosen === idx) state = "selected";
              return (
                <button
                  key={idx}
                  type="button"
                  role="radio"
                  aria-checked={chosen === idx}
                  disabled={isSubmitted}
                  className={`dc-option${state ? ` is-${state}` : ""}`}
                  onClick={() => setSelectedIdx(idx)}
                >
                  <span className="dc-option__letter">{letter}</span>
                  <span className="dc-option__text" dangerouslySetInnerHTML={{ __html: mixedMathToHtml(opt) }} />
                </button>
              );
            })}
          </div>

          {!isSubmitted ? (
            <div className="dc-actions">
              <span className="dc-hint">
                {selectedIdx === null ? "Pick an answer to submit." : "You get one try per day."}
              </span>
              <button type="button" className="dc-btn dc-btn--primary" disabled={selectedIdx === null} onClick={handleSubmit}>
                Submit answer
              </button>
            </div>
          ) : (
            <div className={`dc-result ${todayRecord.isCorrect ? "is-correct" : "is-incorrect"}`} role="status">
              <p className="dc-result__title">
                {todayRecord.isCorrect
                  ? "Correct — well done."
                  : `Not quite. The correct answer is ${question.answer}.`}
              </p>
              <div className="dc-result__body" dangerouslySetInnerHTML={{ __html: mixedMathToHtml(question.explanation || "") }} />
              <Link to={question.path} className="dc-btn">
                Study {question.topic} <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          )}
        </article>

        <aside className="dc-side">
          <section className="dc-panel">
            <h2 className="dc-panel__title">Streak rewards</h2>
            <ul className="dc-milestones">
              {STREAK_MILESTONES.map((m) => {
                const unlocked = stats.best >= m.days;
                const progress = Math.min(100, Math.round((stats.current / m.days) * 100));
                return (
                  <li key={m.days} className={`dc-milestone${unlocked ? " is-unlocked" : ""}`}>
                    <span className="dc-milestone__icon" aria-hidden="true">
                      {m.icon}
                    </span>
                    <span className="dc-milestone__text">
                      <strong>{m.label}</strong>
                      <span>{m.days}-day streak</span>
                      {!unlocked ? (
                        <span className="dc-milestone__track" aria-hidden="true">
                          <span style={{ width: `${progress}%` }} />
                        </span>
                      ) : null}
                    </span>
                    <span className="dc-milestone__state">{unlocked ? "Unlocked" : `${stats.current}/${m.days}`}</span>
                  </li>
                );
              })}
            </ul>
            <p className="dc-panel__note">
              {nextMilestone
                ? `${nextMilestone.days - stats.current} more day${nextMilestone.days - stats.current === 1 ? "" : "s"} to ${nextMilestone.label}.`
                : `Top tier reached: ${tier?.label}.`}
            </p>
          </section>

          {!user ? (
            <section className="dc-panel">
              <h2 className="dc-panel__title">Keep your streak safe</h2>
              <p className="dc-panel__note">
                <Link to="/signup">Create an account</Link> to keep your daily record with your profile.
              </p>
            </section>
          ) : null}
        </aside>
      </div>
    </main>
  );
}

/** Daily challenge card for the home page and profile. */
export function DailyChallengePromo({ compact = false }) {
  const { user } = useAuth() || {};
  const records = loadChallenges(user?.username);
  const todayKey = getUtcTodayKey();
  const done = Boolean(records[todayKey]);
  const { current } = challengeStats(records, todayKey);
  const { question } = questionFor(todayKey);

  return (
    <div className={`dc-promo-card cvx${compact ? " dc-promo-card--compact" : ""}`}>
      <div className="dc-promo-content">
        <span className="dc-promo-icon" aria-hidden="true">
          {done ? "✅" : "🔥"}
        </span>
        <div className="dc-promo-text">
          <h3>Daily challenge</h3>
          <p>
            {done
              ? `Today's problem is done. Streak: ${current} day${current === 1 ? "" : "s"}.`
              : `Today: ${question.topic}. ${current ? `Keep your ${current}-day streak going.` : "Start a streak today."}`}
          </p>
        </div>
      </div>
      <Link to="/daily-challenge" className="dc-promo-btn">
        {done ? "See the answer" : "Solve today's problem"}
      </Link>
    </div>
  );
}
