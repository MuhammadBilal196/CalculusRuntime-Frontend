import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { mixedMathToHtml } from "../../utils/mixedMath";

import { inferGuideCourse } from "../../utils/mistakeNotebook";
import useQuizAttempts from "../../hooks/useQuizAttempts";
import QuizGate from "./QuizGate";
import "./GuideMcq.css";

/**
 * Optional quiz locks for a whole page: { [section]: "unlock hint" }.
 * A quiz whose `section` is listed shows a locked card instead of questions.
 */
export const QuizLockContext = createContext(null);

function GuideMcqSectionInner({ id, badge, title, scoreId, section, questions, onComplete }) {
  const { record: recordAnswer, restart: restartRecording } = useQuizAttempts();
  const responseNumber = useRef(0);
  const count = questions.length;
  // Opt-in assessed attempts: existing callers retain their mastery-style behavior.
  const checkpointMode = typeof onComplete === "function";
  const attemptsRef = useRef({});
  const [saveError, setSaveError] = useState(false);
  // Render formulas in React's HTML output, not by mutating the live quiz DOM.
  const formatText = mixedMathToHtml;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [unlockedIndex, setUnlockedIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const containerRef = useRef(null);

  const [answeredCount, setAnsweredCount] = useState(0);
  const [storageError, setStorageError] = useState(false);
  const [restoreNotice, setRestoreNotice] = useState("");
  const bankSignature = JSON.stringify(questions.map(({ prompt, options, answer }) => [prompt, options, answer]));
  const progressKey = `${scoreId || section || id}-progress-v2`;

  const saveProgress = (answers, index) => {
    if (checkpointMode) return;
    try {
      localStorage.setItem(progressKey, JSON.stringify({ signature: bankSignature, answers, index }));
      // Keep aggregate keys for existing consumers; never infer answers from them.
      localStorage.setItem(`${scoreId}-score`, Object.values(answers).filter(a => a.correct).length);
      localStorage.setItem(`${scoreId}-unlocked`, Math.min(Object.keys(answers).length, count - 1));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  };

  useEffect(() => {
    let answers = {};
    let index = 0;
    let notice = "";
    setStorageError(false);
    if (!checkpointMode) {
      try {
        const raw = localStorage.getItem(progressKey);
        if (raw) {
          const saved = JSON.parse(raw);
          if (saved.signature !== bankSignature) {
            notice = "This quiz has changed. Start a fresh attempt with the updated questions.";
          } else {
            const bank = JSON.parse(bankSignature);
            if (!saved.answers || typeof saved.answers !== "object" || Array.isArray(saved.answers)) throw new Error("Invalid answers");
            for (let i = 0; i < Object.keys(saved.answers).length; i += 1) {
              const selected = saved.answers[i]?.selected;
              if (!bank[i] || !Number.isInteger(selected) || selected < 0 || selected >= bank[i][1].length) throw new Error("Invalid answer");
              answers[i] = { selected, correct: "ABCD"[selected] === bank[i][2] };
            }
            const unlocked = Math.min(Object.keys(answers).length, count - 1);
            index = Number.isInteger(saved.index) ? Math.max(0, Math.min(saved.index, unlocked)) : 0;
          }
        } else if (localStorage.getItem(`${scoreId}-score`) !== null || localStorage.getItem(`${scoreId}-unlocked`) !== null) {
          notice = "Older progress did not store individual answers. Start a fresh attempt for accurate scoring.";
        }
      } catch {
        answers = {};
        notice = "Saved progress could not be restored. You can start a fresh attempt.";
      }
    }
    attemptsRef.current = answers;
    setCurrentIndex(index);
    setSelectedOption(answers[index]?.selected ?? null);
    setIsSubmitted(Boolean(answers[index]));
    setAnsweredCount(Object.keys(answers).length);
    setUnlockedIndex(Math.min(Object.keys(answers).length, count - 1));
    setScore(Object.values(answers).filter(a => a.correct).length);
    setRestoreNotice(notice);
    setSaveError(false);
  }, [progressKey, bankSignature, checkpointMode, count, scoreId]);

  // Observer to show/hide the floating side bar when quiz is on screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Triggers when at least 10% of the quiz is visible
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const currentQ = questions[currentIndex];
  const letterLabels = ["A", "B", "C", "D"];

  const handleSelect = (idx) => {
    if (!isSubmitted) setSelectedOption(idx);
  };

  const persistAttempt = (result) => {
    setSaveError(false);
    Promise.resolve().then(() => onComplete(result, count)).catch(() => setSaveError(true));
  };

  const revisit = (index) => {
    setCurrentIndex(index);
    const previous = attemptsRef.current[index];
    saveProgress(attemptsRef.current, index);
    setSelectedOption(previous?.selected ?? null);
    setIsSubmitted(Boolean(previous));
  };

  const restartAttempt = () => {
    restartRecording();
    responseNumber.current = 0;
    attemptsRef.current = {};
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setUnlockedIndex(0);
    setScore(0);
    setSaveError(false);
    setAnsweredCount(0);
    setRestoreNotice("");
    saveProgress({}, 0);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted) return;
    
    setIsSubmitted(true);
    
    const isCorrect = letterLabels[selectedOption] === currentQ.answer;
    
    if (attemptsRef.current[currentIndex]) return;
    recordAnswer({ source: "guide", quizId: section || scoreId || id,
      courseId: inferGuideCourse(section || scoreId || id, window.location.pathname),
      questionId: currentQ.id ?? currentIndex, responseId: String(++responseNumber.current),
      prompt: currentQ.prompt, options: currentQ.options, selectedIndex: selectedOption,
      correctIndex: letterLabels.indexOf(currentQ.answer), topic: title || badge || null });
    const next = { ...attemptsRef.current, [currentIndex]: { selected: selectedOption, correct: isCorrect } };
    attemptsRef.current = next;
    const completed = Object.keys(next).length;
    const result = Object.values(next).filter(answer => answer.correct).length;
    setScore(result);
    setAnsweredCount(completed);
    setUnlockedIndex(Math.min(completed, count - 1));
    setRestoreNotice("");
    if (checkpointMode) {
      if (completed === count) persistAttempt(result);
    } else {
      saveProgress(next, currentIndex);
    }
  };

  const handleNext = () => {
    if (
      currentIndex < count - 1 &&
      (currentIndex < unlockedIndex || isSubmitted)
    ) {
      revisit(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) revisit(currentIndex - 1);
  };

  const jumpToQuestion = (index) => {
    if (index <= unlockedIndex) revisit(index);
  };

  // Per-question status for the progress bar and the number buttons.
  const statusOf = (idx) => {
    const a = attemptsRef.current[idx];
    if (!a) return "todo";
    return a.correct ? "right" : "wrong";
  };
  const wrongCount = answeredCount - score;
  const answeredPct = count ? Math.round((answeredCount / count) * 100) : 0;
  const scorePct = count ? Math.round((score / count) * 100) : 0;
  const isAttemptDone = answeredCount === count;
  const answerIsRight = isSubmitted && letterLabels[selectedOption] === currentQ.answer;

  return (
    <section className="gmq la-quiz-container" id={id} data-section={section} ref={containerRef}>
      {/* Floating score card (wide screens, while the quiz is on screen) */}
      {isVisible && (
        <aside className="gmq-float" aria-hidden="true">
          <span className="gmq-float__label">Score</span>
          <span className="gmq-float__fraction">{score} / {count}</span>
          <span className="gmq-float__pct">{scorePct}%</span>
          <span className="gmq-float__track">
            <span className="gmq-float__fill gmq-float__fill--right" style={{ height: `${count ? (score / count) * 100 : 0}%` }} />
            <span
              className="gmq-float__fill gmq-float__fill--wrong"
              style={{ height: `${count ? (wrongCount / count) * 100 : 0}%`, bottom: `${count ? (score / count) * 100 : 0}%` }}
            />
          </span>
          <span className="gmq-float__answered">{answeredCount}/{count} done</span>
        </aside>
      )}

      {/* Header */}
      <header className="gmq-head">
        <p className="gmq-kicker">{[badge, title].filter(Boolean).join(" · ")}</p>
        <div className="gmq-head__row">
          <p className="gmq-score">
            Score <strong>{score}</strong> / {count}
          </p>
          <p className="gmq-hint">Submit each answer to unlock the next question</p>
        </div>
      </header>

      {/* Progress bar: one segment per question — green correct, red wrong */}
      <div className="gmq-progress">
        <div className="gmq-progress__meta">
          <span>
            <strong>{answeredCount}</strong> of {count} answered
          </span>
          <span className="gmq-progress__legend">
            <span className="gmq-legend gmq-legend--right">{score} correct</span>
            <span className="gmq-legend gmq-legend--wrong">{wrongCount} wrong</span>
            <span className="gmq-progress__pct">{answeredPct}%</span>
          </span>
        </div>
        <div
          className="gmq-progress__bar"
          role="progressbar"
          aria-label="Quiz completion"
          aria-valuemin={0}
          aria-valuemax={count}
          aria-valuenow={answeredCount}
          aria-valuetext={`${answeredCount} of ${count} answered, ${score} correct, ${wrongCount} wrong`}
          style={{ "--gmq-count": count }}
        >
          {questions.map((_, idx) => (
            <span
              key={idx}
              className={`gmq-seg gmq-seg--${statusOf(idx)}${idx === currentIndex ? " gmq-seg--current" : ""}`}
            />
          ))}
        </div>
      </div>

      {/* Spoken progress for screen readers (same wording as before) */}
      <p className="gmq-sr" aria-live="polite">
        Progress: {answeredCount} of {count} answered ({answeredPct}%). Score: {score} correct out of {count}.
      </p>

      {/* Question number buttons */}
      <nav className="gmq-dots" aria-label="Questions">
        {questions.map((_, idx) => {
          const status = statusOf(idx);
          const locked = idx > unlockedIndex;
          return (
            <button
              key={idx}
              type="button"
              className={`gmq-dot gmq-dot--${status}${idx === currentIndex ? " gmq-dot--current" : ""}`}
              onClick={() => jumpToQuestion(idx)}
              disabled={locked}
              aria-current={idx === currentIndex ? "step" : undefined}
              aria-label={`Question ${idx + 1}${status === "right" ? ", correct" : status === "wrong" ? ", wrong" : ""}${locked ? ", locked" : ""}`}
            >
              {idx + 1}
            </button>
          );
        })}
      </nav>

      {restoreNotice && <p className="gmq-notice" role="status">{restoreNotice}</p>}
      {storageError && (
        <p className="gmq-notice gmq-notice--error" role="alert">
          Progress could not be saved on this device. Keep this page open to continue.
        </p>
      )}
      {!checkpointMode && isAttemptDone && (
        <div className="gmq-done" role="status">
          <span>
            Attempt complete: <strong>{score}/{count}</strong> ({scorePct}%). Review your answers or start again.
          </span>
          <button type="button" className="gmq-btn" onClick={restartAttempt}>Retake quiz</button>
        </div>
      )}

      {/* Question card */}
      <article className="gmq-card">
        <div className="gmq-card__top">
          <span className="gmq-qnum">{currentIndex + 1}</span>
          <span className="gmq-qof">Question {currentIndex + 1} of {count}</span>
        </div>
        <div className="gmq-prompt" dangerouslySetInnerHTML={{ __html: formatText(currentQ.prompt) }} />

        <div className="gmq-options" role="group" aria-label="Answer choices">
          {currentQ.options.map((opt, idx) => {
            const letter = letterLabels[idx];
            const isSelected = selectedOption === idx;
            let state = "";
            if (isSubmitted) {
              if (letter === currentQ.answer) state = " gmq-opt--right";
              else if (isSelected) state = " gmq-opt--wrong";
              else state = " gmq-opt--dim";
            } else if (isSelected) {
              state = " gmq-opt--selected";
            }
            return (
              <button
                key={letter}
                type="button"
                className={`gmq-opt${state}`}
                onClick={() => handleSelect(idx)}
                disabled={isSubmitted}
                aria-pressed={isSelected}
              >
                <span className="gmq-opt__letter">{letter}</span>
                <span className="gmq-opt__text" dangerouslySetInnerHTML={{ __html: formatText(opt) }} />
              </button>
            );
          })}
        </div>

        {!isSubmitted ? (
          <button
            type="button"
            className="gmq-btn gmq-btn--primary"
            onClick={handleSubmit}
            disabled={selectedOption === null}
          >
            Submit Answer
          </button>
        ) : (
          <div className={`gmq-feedback ${answerIsRight ? "gmq-feedback--right" : "gmq-feedback--wrong"}`}>
            <p className="gmq-feedback__verdict">
              <span aria-hidden="true">{answerIsRight ? "✓ " : "✗ "}</span>
              <strong>{answerIsRight ? "Correct!" : "Incorrect."}</strong> Option {currentQ.answer} is the right answer.
            </p>
            <div className="gmq-feedback__text" dangerouslySetInnerHTML={{ __html: formatText(currentQ.explanation) }} />
          </div>
        )}
      </article>

      {/* Previous / Next */}
      <div className="gmq-nav">
        <button type="button" className="gmq-btn" onClick={handlePrev} disabled={currentIndex === 0}>
          ← Previous
        </button>
        <span className="gmq-nav__pos">{currentIndex + 1} / {count}</span>
        <button
          type="button"
          className="gmq-btn"
          onClick={handleNext}
          disabled={currentIndex >= count - 1 || (currentIndex >= unlockedIndex && !isSubmitted)}
        >
          Next →
        </button>
      </div>

      {checkpointMode && Object.keys(attemptsRef.current).length === count && (
        <div className={`gmq-done ${score / count >= 0.8 ? "gmq-done--pass" : "gmq-done--fail"}`} role="status">
          <span>
            Attempt complete: <strong>{score}/{count}</strong> ({scorePct}%).
            {score / count >= 0.8 ? " Checkpoint passed." : " Score at least 80% to pass. Review the explanations and try again."}
          </span>
          {saveError && (
            <span role="alert">
              Your result could not be saved.{" "}
              <button type="button" className="gmq-btn" onClick={() => persistAttempt(score)}>Save result again</button>
            </span>
          )}
          <button type="button" className="gmq-btn" onClick={restartAttempt}>Retake checkpoint</button>
        </div>
      )}
    </section>
  );
}

export function GuideMcqSection(props) {
  const locks = useContext(QuizLockContext);
  const hint = locks?.[props.section];
  if (hint) {
    return (
      <QuizGate unlocked={false} id={props.id} title={String(props.title || "Quiz").replace(/&amp;/g, "&")} hint={hint} />
    );
  }
  return <GuideMcqSectionInner {...props} />;
}

export default GuideMcqSection;
