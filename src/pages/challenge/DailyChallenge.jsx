import { useState, useMemo, useEffect } from "react";
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
import "./DailyChallenge.css";

// Combine the 120 curated questions with topic tags
const CHALLENGE_POOL = [
  ...CALC_A_GAMMA_BETA_QUIZ.map((q) => ({ ...q, topic: "Gamma & Beta Functions" })),
  ...CALC_A_LEIBNIZ_RULE_QUIZ.map((q) => ({ ...q, topic: "Leibniz Integral Rule" })),
  ...CALC_B_FOURIER_TRANSFORM_QUIZ.map((q) => ({ ...q, topic: "Fourier Transform & Convolution" })),
  ...CALC_B_Z_TRANSFORM_QUIZ.map((q) => ({ ...q, topic: "Z-Transform & Difference Equations" })),
  ...CALC_C_INTRO_PDES_QUIZ.map((q) => ({ ...q, topic: "Introduction to PDEs (Heat & Wave)" })),
  ...CALC_C_ORTHOGONAL_POLY_QUIZ.map((q) => ({ ...q, topic: "Orthogonal Polynomials" })),
];

function getTodayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
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

export default function DailyChallenge() {
  const todayKey = useMemo(() => getTodayKey(), []);

  // Deterministically select today's question
  const { questionIndex, question } = useMemo(() => {
    const hash = hashString(todayKey);
    const idx = hash % CHALLENGE_POOL.length;
    return { questionIndex: idx, question: CHALLENGE_POOL[idx] };
  }, [todayKey]);

  // Load saved completions from localStorage
  const [completedChallenges, setCompletedChallenges] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("calculus-daily-challenges") || "{}");
    } catch {
      return {};
    }
  });

  const todayRecord = completedChallenges[todayKey];
  const [selectedIdx, setSelectedIdx] = useState(
    todayRecord !== undefined ? ["A", "B", "C", "D"].indexOf(todayRecord.selected) : null
  );
  const [isSubmitted, setIsSubmitted] = useState(todayRecord !== undefined);
  const [streakCount, setStreakCount] = useState(getStreak());

  // Countdown timer to next challenge (midnight)
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const diffMs = tomorrow - now;
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
  }, []);

  const handleSubmit = () => {
    if (selectedIdx === null || isSubmitted) return;

    const chosenLetter = formatOptionLetter(selectedIdx);
    const isCorrect = chosenLetter === question.answer;

    // Record activity in general study days streak
    recordActivityDay();

    // Record challenge completion
    const newRecord = {
      questionIndex,
      selected: chosenLetter,
      isCorrect,
      timestamp: Date.now(),
    };

    const updated = { ...completedChallenges, [todayKey]: newRecord };
    setCompletedChallenges(updated);
    try {
      localStorage.setItem("calculus-daily-challenges", JSON.stringify(updated));
    } catch {}

    setIsSubmitted(true);
    setStreakCount(getStreak());
  };

  // Generate 30-day activity array
  const last30Days = useMemo(() => {
    const days = [];
    const now = new Date();
    let studyDays = [];
    try {
      studyDays = JSON.parse(localStorage.getItem("calculus-study-days") || "[]");
    } catch {}

    for (let i = 29; i >= 0; i--) {
      const d = new Date(now);
      d.setDate(now.getDate() - i);
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, "0");
      const dayNum = String(d.getDate()).padStart(2, "0");
      const key = `${y}-${m}-${dayNum}`;
      const isToday = i === 0;
      const isCompleted = completedChallenges[key] || studyDays.includes(d.toDateString());

      days.push({
        key,
        dayNum: d.getDate(),
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
          <span>🔥</span> Daily Calculus Challenge
        </span>
        <h1 className="dc-title">Mastery One Problem at a Time</h1>
        <p className="dc-subtitle">
          Sharpen your mathematical intuition with one curated, high-yield calculus problem every day.
          Maintain your daily streak and build lasting problem-solving fluency.
        </p>
      </header>

      <div className="dc-layout">
        {/* Main Problem Card */}
        <div className="dc-card">
          <div className="dc-card-hdr">
            <span className="dc-topic-tag">📚 {question.topic}</span>
            <span className="dc-date-tag">
              Today: {new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
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
                } else if (isSelected) {
                  statusClass = "incorrect";
                }
              } else if (isSelected) {
                statusClass = "selected";
              }

              return (
                <button
                  key={idx}
                  className={`dc-option ${statusClass}`}
                  onClick={() => !isSubmitted && setSelectedIdx(idx)}
                  disabled={isSubmitted}
                >
                  <span className="dc-option-badge">{letter}</span>
                  <span
                    dangerouslySetInnerHTML={{ __html: mixedMathToHtml(opt) }}
                  />
                </button>
              );
            })}
          </div>

          <div className="dc-action-bar">
            {!isSubmitted ? (
              <button
                className="dc-submit-btn"
                disabled={selectedIdx === null}
                onClick={handleSubmit}
              >
                Submit &amp; Record Streak →
              </button>
            ) : (
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.4rem" }}>
                  {formatOptionLetter(selectedIdx) === question.answer ? "🎉" : "💡"}
                </span>
                <strong style={{ color: formatOptionLetter(selectedIdx) === question.answer ? "#10b981" : "#f59e0b" }}>
                  {formatOptionLetter(selectedIdx) === question.answer
                    ? "Correct! Daily streak maintained."
                    : "Not quite, but reviewing the solution keeps you learning!"}
                </strong>
              </div>
            )}
          </div>

          {/* Explanation Box */}
          {isSubmitted && (
            <div className="dc-explanation-box">
              <div className="dc-exp-hdr">
                <span>📘 Mathematical Solution &amp; Derivation</span>
              </div>
              <p
                className="dc-exp-text"
                dangerouslySetInnerHTML={{ __html: mixedMathToHtml(question.explanation) }}
              />
            </div>
          )}
        </div>

        {/* Sidebar: Streak Counter & 30-Day Activity Grid */}
        <aside className="dc-sidebar">
          {/* Streak Widget */}
          <div className="dc-streak-widget">
            <span className="dc-streak-icon">🔥</span>
            <div className="dc-streak-count">{streakCount}</div>
            <div className="dc-streak-lbl">Day Streak Active</div>
            <p className="dc-streak-msg">
              {streakCount === 0
                ? "Answer today's challenge to ignite your streak!"
                : streakCount >= 7
                ? "Exceptional dedication! 7+ days of mathematical momentum."
                : "Great consistency! Keep coming back every day."}
            </p>
          </div>

          {/* 30-Day Activity Calendar */}
          <div className="dc-calendar-card">
            <div className="dc-cal-hdr">
              <span className="dc-cal-title">30-Day Challenge Activity</span>
              <span style={{ fontSize: "0.75rem", color: "#10b981", fontWeight: 700 }}>
                {last30Days.filter((d) => d.isCompleted).length} / 30 Days
              </span>
            </div>

            <div className="dc-grid">
              {last30Days.map((d) => (
                <div
                  key={d.key}
                  className={`dc-day-cell ${d.isToday ? "today" : ""} ${d.isCompleted ? "completed" : ""}`}
                  title={`${d.key}${d.isCompleted ? " (Completed)" : ""}`}
                >
                  <span>{d.dayNum}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Countdown to Next Challenge */}
          <div className="dc-countdown-box">
            <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "#94a3b8", fontWeight: 700 }}>
              Next Challenge In
            </span>
            <div className="dc-countdown-val">{timeLeft}</div>
          </div>
        </aside>
      </div>
    </div>
  );
}

/**
 * Reusable Promo Card for Home and Dashboard
 */
export function DailyChallengePromo({ compact = false }) {
  const streak = getStreak();
  const todayKey = getTodayKey();
  let isDoneToday = false;
  try {
    const completed = JSON.parse(localStorage.getItem("calculus-daily-challenges") || "{}");
    isDoneToday = Boolean(completed[todayKey]);
  } catch {}

  return (
    <div className="dc-promo-card" style={compact ? { padding: "1.2rem", margin: "1rem 0" } : {}}>
      <div className="dc-promo-content">
        <span className="dc-promo-icon">{isDoneToday ? "✅" : "🔥"}</span>
        <div className="dc-promo-text">
          <h3>Daily Calculus Challenge</h3>
          <p>
            {isDoneToday
              ? `You solved today's problem! Current streak: ${streak} day${streak === 1 ? "" : "s"}.`
              : `Solve today's challenge to maintain your ${streak}-day streak!`}
          </p>
        </div>
      </div>
      <Link to="/daily-challenge" className="dc-promo-btn">
        {isDoneToday ? "Review Challenge →" : "Play Today's Problem →"}
      </Link>
    </div>
  );
}
