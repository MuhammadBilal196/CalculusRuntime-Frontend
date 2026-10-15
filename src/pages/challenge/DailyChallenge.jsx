import { useState, useMemo, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { mixedMathToHtml } from "../../utils/mixedMath";
import { getStreak, recordActivityDay } from "../../utils/progressUtils";
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

// Combine all 240 curated questions with topic tags across all calculus modules
const CHALLENGE_POOL = [
  ...CALC_A_GAMMA_BETA_QUIZ.map((q) => ({ ...q, topic: "Gamma & Beta Functions" })),
  ...CALC_A_LEIBNIZ_RULE_QUIZ.map((q) => ({ ...q, topic: "Leibniz Integral Rule" })),
  ...CALC_B_FOURIER_TRANSFORM_QUIZ.map((q) => ({ ...q, topic: "Fourier Transform & Convolution" })),
  ...CALC_B_Z_TRANSFORM_QUIZ.map((q) => ({ ...q, topic: "Z-Transform & Difference Equations" })),
  ...CALC_C_INTRO_PDES_QUIZ.map((q) => ({ ...q, topic: "Introduction to PDEs (Heat & Wave)" })),
  ...CALC_C_ORTHOGONAL_POLY_QUIZ.map((q) => ({ ...q, topic: "Orthogonal Polynomials" })),
  ...CALC_A_UNIFORM_CONV_QUIZ.map((q) => ({ ...q, topic: "Pointwise & Uniform Convergence" })),
  ...CALC_A_INTERCHANGE_LIMITS_QUIZ.map((q) => ({ ...q, topic: "Interchanging Limits & Integrals" })),
  ...CALC_B_POWER_SERIES_ODE_QUIZ.map((q) => ({ ...q, topic: "Power-Series Solutions of ODEs" })),
  ...CALC_B_FROBENIUS_METHOD_QUIZ.map((q) => ({ ...q, topic: "Frobenius Method for Singular ODEs" })),
  ...CALC_C_ANALYTIC_CR_QUIZ.map((q) => ({ ...q, topic: "Analytic Functions & Cauchy-Riemann" })),
  ...CALC_C_CONTOUR_RESIDUES_QUIZ.map((q) => ({ ...q, topic: "Contour Integrals & Residues" })),
];

// Deterministic UTC day key
function getUtcTodayKey(offsetDays = 0) {
  const now = new Date();
  if (offsetDays !== 0) {
    now.setUTCDate(now.getUTCDate() + offsetDays);
  }
  const y = now.getUTCFullYear();
  const m = String(now.getUTCMonth() + 1).padStart(2, "0");
  const d = String(now.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = (h << 5) - h + str.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function formatOptionLetter(idx) {
  return ["A", "B", "C", "D"][idx] || "";
}

// Milestone definitions
const STREAK_MILESTONES = [
  { days: 3, label: "Spark", icon: "🔥", badgeColor: "#f97316" },
  { days: 7, label: "Nova", icon: "⚡", badgeColor: "#eab308" },
  { days: 14, label: "Pulsar", icon: "🌟", badgeColor: "#38bdf8" },
  { days: 30, label: "Supernova", icon: "👑", badgeColor: "#a855f7" },
];

export default function DailyChallenge() {
  const [currentUtcKey, setCurrentUtcKey] = useState(getUtcTodayKey());

  // Deterministically select today's question using UTC date key
  const { questionIndex, question } = useMemo(() => {
    const hash = hashString(currentUtcKey);
    const idx = hash % CHALLENGE_POOL.length;
    return { questionIndex: idx, question: CHALLENGE_POOL[idx] };
  }, [currentUtcKey]);

  // Load saved completions from localStorage
  const [completedChallenges, setCompletedChallenges] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("calculus-daily-challenges") || "{}");
    } catch {
      return {};
    }
  });

  const todayRecord = completedChallenges[currentUtcKey];
  const [selectedIdx, setSelectedIdx] = useState(
    todayRecord !== undefined ? ["A", "B", "C", "D"].indexOf(todayRecord.selected) : null
  );
  const [isSubmitted, setIsSubmitted] = useState(todayRecord !== undefined);
  const [streakCount, setStreakCount] = useState(getStreak());

  // Synchronize state when todayRecord changes
  useEffect(() => {
    if (todayRecord) {
      setSelectedIdx(["A", "B", "C", "D"].indexOf(todayRecord.selected));
      setIsSubmitted(true);
    } else {
      setSelectedIdx(null);
      setIsSubmitted(false);
    }
  }, [todayRecord]);

  // Multi-tab storage synchronization via window 'storage' event listener
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "calculus-daily-challenges") {
        try {
          const updated = JSON.parse(e.newValue || "{}");
          setCompletedChallenges(updated);
        } catch {}
      } else if (e.key === "calculus-study-days" || e.key === "calcvoyager_activity_days") {
        setStreakCount(getStreak());
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Countdown timer to next UTC midnight with automatic rollover
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      // Next midnight in UTC
      const nextUtcMidnight = new Date(
        Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 1, 0, 0, 0, 0)
      );
      const diffMs = nextUtcMidnight.getTime() - now.getTime();

      // Check if UTC day rolled over
      const freshUtcKey = getUtcTodayKey();
      if (freshUtcKey !== currentUtcKey) {
        setCurrentUtcKey(freshUtcKey);
        setStreakCount(getStreak());
      }

      const hours = Math.floor(diffMs / (1000 * 60 * 60));
      const mins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diffMs % (1000 * 60)) / 1000);
      setTimeLeft(
        `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`
      );
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [currentUtcKey]);

  // Submission handler with duplicate-credit protection
  const handleSubmit = useCallback(() => {
    // Prevent duplicate submission if already submitted today
    if (selectedIdx === null || isSubmitted || completedChallenges[currentUtcKey]) {
      return;
    }

    const chosenLetter = formatOptionLetter(selectedIdx);
    const isCorrect = chosenLetter === question.answer;

    // Record activity in general study days streak (single credit)
    recordActivityDay();

    // Record challenge completion under UTC date key
    const newRecord = {
      questionIndex,
      selected: chosenLetter,
      isCorrect,
      timestamp: Date.now(),
      utcDate: currentUtcKey,
    };

    const updated = { ...completedChallenges, [currentUtcKey]: newRecord };
    setCompletedChallenges(updated);
    try {
      localStorage.setItem("calculus-daily-challenges", JSON.stringify(updated));
    } catch {}

    setIsSubmitted(true);
    setStreakCount(getStreak());
  }, [selectedIdx, isSubmitted, completedChallenges, currentUtcKey, questionIndex, question]);

  // Compute active and upcoming milestone badges
  const activeBadges = useMemo(() => {
    return STREAK_MILESTONES.filter((m) => streakCount >= m.days);
  }, [streakCount]);

  const nextMilestone = useMemo(() => {
    return STREAK_MILESTONES.find((m) => streakCount < m.days) || STREAK_MILESTONES[STREAK_MILESTONES.length - 1];
  }, [streakCount]);

  // Generate 30-day activity array in UTC
  const last30Days = useMemo(() => {
    const days = [];
    let studyDays = [];
    try {
      studyDays = JSON.parse(localStorage.getItem("calculus-study-days") || "[]");
    } catch {}

    for (let i = 29; i >= 0; i--) {
      const utcDate = new Date();
      utcDate.setUTCDate(utcDate.getUTCDate() - i);
      const y = utcDate.getUTCFullYear();
      const m = String(utcDate.getUTCMonth() + 1).padStart(2, "0");
      const dayNum = String(utcDate.getUTCDate()).padStart(2, "0");
      const key = `${y}-${m}-${dayNum}`;
      const isToday = i === 0;
      const isCompleted = completedChallenges[key] || studyDays.includes(utcDate.toDateString());

      days.push({
        key,
        dayNum: utcDate.getUTCDate(),
        isToday,
        isCompleted: Boolean(isCompleted),
      });
    }
    return days;
  }, [completedChallenges]);

  return (
    <div className="dc-container">
      <header className="dc-header">
        <span className="dc-eyebrow">
          <span>🔥</span> Daily Calculus Challenge (UTC Synchronized)
        </span>
        <h1 className="dc-title">Mastery One Problem at a Time</h1>
        <p className="dc-subtitle">
          Sharpen your mathematical intuition with one curated, high-yield calculus problem every day.
          Deterministic UTC rollover ensures synchronized challenges worldwide.
        </p>
      </header>

      {/* Streak Milestones & Badges Ribbon */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
          background: "rgba(15, 23, 42, 0.6)",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          borderRadius: "12px",
          padding: "0.85rem 1.25rem",
          marginBottom: "1.5rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#f8fafc" }}>
            Streak Milestones:
          </span>
          {STREAK_MILESTONES.map((m) => {
            const unlocked = streakCount >= m.days;
            return (
              <span
                key={m.days}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "999px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  background: unlocked ? "rgba(56, 189, 248, 0.15)" : "rgba(30, 41, 59, 0.6)",
                  border: `1px solid ${unlocked ? m.badgeColor : "rgba(71, 85, 105, 0.4)"}`,
                  color: unlocked ? "#f8fafc" : "#64748b",
                  opacity: unlocked ? 1 : 0.65,
                }}
              >
                <span>{m.icon}</span>
                <span>{m.label} ({m.days}d)</span>
              </span>
            );
          })}
        </div>
        <div style={{ fontSize: "0.82rem", color: "#94a3b8" }}>
          {streakCount >= 30 ? (
            <span style={{ color: "#a855f7", fontWeight: 700 }}>👑 Max Tier: Supernova Achieved!</span>
          ) : (
            <span>
              Next: <strong>{nextMilestone.label}</strong> in {nextMilestone.days - streakCount} days
            </span>
          )}
        </div>
      </div>

      <div className="dc-layout">
        {/* Main Problem Card */}
        <div className="dc-card">
          <div className="dc-card-hdr">
            <span className="dc-topic-tag">📚 {question.topic}</span>
            <span className="dc-date-tag">
              UTC Date: {currentUtcKey}
            </span>
          </div>

          <h2
            className="dc-question-prompt"
            dangerouslySetInnerHTML={{ __html: mixedMathToHtml(question.prompt) }}
          />

          <div className="dc-options-grid">
            {question.options.map((opt, idx) => {
              const letter = formatOptionLetter(idx);
              const isSelected = selectedIdx === idx;
              let statusClass = "";

              if (isSubmitted) {
                if (letter === question.answer) {
                  statusClass = "correct";
                } else if (isSelected && letter !== question.answer) {
                  statusClass = "incorrect";
                }
              } else if (isSelected) {
                statusClass = "selected";
              }

              return (
                <button
                  key={idx}
                  type="button"
                  disabled={isSubmitted}
                  className={`dc-option-btn ${statusClass}`}
                  onClick={() => !isSubmitted && setSelectedIdx(idx)}
                >
                  <span className="dc-opt-letter">{letter}</span>
                  <span
                    className="dc-opt-text"
                    dangerouslySetInnerHTML={{ __html: mixedMathToHtml(opt) }}
                  />
                </button>
              );
            })}
          </div>

          {!isSubmitted ? (
            <div className="dc-actions">
              <button
                type="button"
                className="dc-submit-btn"
                disabled={selectedIdx === null}
                onClick={handleSubmit}
              >
                Submit Answer
              </button>
            </div>
          ) : (
            <div className={`dc-result-box ${todayRecord?.isCorrect ? "result-correct" : "result-incorrect"}`}>
              <div className="dc-result-hdr">
                {todayRecord?.isCorrect ? (
                  <span>🎉 Excellent! That is correct.</span>
                ) : (
                  <span>❌ Not quite. The correct answer is Option {question.answer}.</span>
                )}
              </div>
              <div
                className="dc-explanation"
                dangerouslySetInnerHTML={{ __html: mixedMathToHtml(question.explanation) }}
              />
            </div>
          )}
        </div>

        {/* Sidebar: Streak Counter & UTC Countdown */}
        <div className="dc-sidebar">
          {/* Streak Card */}
          <div className="dc-stat-card">
            <div className="dc-streak-display">
              <span className="dc-streak-fire">🔥</span>
              <div className="dc-streak-num">{streakCount}</div>
            </div>
            <div className="dc-streak-label">Day Challenge Streak</div>
            <p className="dc-streak-desc">
              {streakCount === 0
                ? "Complete today's problem to initiate your streak!"
                : `Keep the momentum going! Current tier: ${activeBadges[activeBadges.length - 1]?.label || "Novice"}.`}
            </p>
          </div>

          {/* UTC Midnight Rollover Countdown */}
          <div className="dc-timer-card">
            <span className="dc-timer-title">Next Problem In (UTC)</span>
            <div className="dc-countdown">{timeLeft || "--:--:--"}</div>
            <span className="dc-timer-desc">Resets at 00:00:00 UTC daily</span>
          </div>

          {/* 30-Day Activity History */}
          <div className="dc-calendar-card">
            <span className="dc-calendar-title">Last 30 Days Activity</span>
            <div className="dc-calendar-grid">
              {last30Days.map((d) => (
                <div
                  key={d.key}
                  className={`dc-day-cell ${d.isCompleted ? "completed" : ""} ${d.isToday ? "today" : ""}`}
                  title={`${d.key}${d.isCompleted ? " — Completed" : ""}`}
                >
                  {d.dayNum}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Community Callout */}
      <div className="viz-callout" style={{ marginTop: "2rem" }}>
        <div className="viz-callout-hdr">
          <span>🧠 Build Lasting Fluency Through Spaced Repetition</span>
        </div>
        <p>
          Consistent daily practice compounds exponential mathematical problem-solving skills.
          Every challenge is drawn from our verified university curriculum covering sequences,
          series solutions of ODEs, complex analysis, special functions, and transforms.
        </p>
        <Link
          to="/courses/calculus-analytical-geometry"
          style={{ color: "#38bdf8", fontWeight: 600, fontSize: "0.9rem", textDecoration: "underline", alignSelf: "flex-start", marginTop: "0.5rem" }}
        >
          Explore All Calculus Modules &amp; Earn Your Certificate →
        </Link>
      </div>
    </div>
  );
}
