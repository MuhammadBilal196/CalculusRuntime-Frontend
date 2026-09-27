import React, { useState, useEffect, useRef } from "react";
import { mixedMathToHtml } from "../../utils/mixedMath";

export function GuideMcqSection({ id, badge, title, scoreId, section, questions, onComplete }) {
  const count = questions.length;
  // Opt-in assessed attempts: existing callers retain their mastery-style behavior.
  const checkpointMode = typeof onComplete === "function";
  const attemptsRef = useRef({});
  const [saveError, setSaveError] = useState(false);
  const formatText = (text) => checkpointMode ? mixedMathToHtml(text) : text;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [unlockedIndex, setUnlockedIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const containerRef = useRef(null);

  // Load saved progress
  useEffect(() => {
    if (checkpointMode) return;
    const savedUnlocked = localStorage.getItem(`${scoreId}-unlocked`);
    const savedScore = localStorage.getItem(`${scoreId}-score`);
    if (savedUnlocked) setUnlockedIndex(parseInt(savedUnlocked, 10));
    if (savedScore) setScore(parseInt(savedScore, 10));
  }, [scoreId, checkpointMode]);

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
    const previous = checkpointMode ? attemptsRef.current[index] : undefined;
    setSelectedOption(previous?.selected ?? null);
    setIsSubmitted(Boolean(previous));
  };

  const restartAttempt = () => {
    attemptsRef.current = {};
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setUnlockedIndex(0);
    setScore(0);
    setSaveError(false);
  };

  const handleSubmit = () => {
    if (selectedOption === null || isSubmitted) return;
    
    setIsSubmitted(true);
    
    const isCorrect = letterLabels[selectedOption] === currentQ.answer;
    
    if (checkpointMode) {
      if (attemptsRef.current[currentIndex]) return;
      const next = { ...attemptsRef.current, [currentIndex]: { selected: selectedOption, correct: isCorrect } };
      attemptsRef.current = next;
      const result = Object.values(next).filter((answer) => answer.correct).length;
      setScore(result);
      setUnlockedIndex(Math.min(currentIndex + 1, count - 1));
      if (Object.keys(next).length === count) persistAttempt(result);
      return;
    }

    if (isCorrect && currentIndex === unlockedIndex) {
      const newUnlocked = Math.min(unlockedIndex + 1, count - 1);
      const newScore = score + 1;
      
      setUnlockedIndex(newUnlocked);
      setScore(newScore);
      
      localStorage.setItem(`${scoreId}-unlocked`, newUnlocked);
      localStorage.setItem(`${scoreId}-score`, newScore);
    }
  };

  const handleNext = () => {
    if (currentIndex < count - 1 && (currentIndex < unlockedIndex ||
        (isSubmitted && (checkpointMode || letterLabels[selectedOption] === currentQ.answer)))) {
      revisit(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) revisit(currentIndex - 1);
  };

  const jumpToQuestion = (index) => {
    if (index <= unlockedIndex) revisit(index);
  };

  return (
    <section className="la-quiz-container" id={id} data-section={section} ref={containerRef}>
      
      {/* FLOATING SIDE SCORE BAR */}
      {isVisible && (
        <div className="la-floating-score">
          <div className="la-fs-fraction">{score} / {count}</div>
          <div className="la-fs-label">Score: {score}</div>
          <div className="la-fs-percent">{Math.round((score / count) * 100)}%</div>
        </div>
      )}

      {/* Header Area */}
      <div className="la-quiz-header">
        <span style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '0.5rem', display: 'block' }}>
          {badge} · {title}
        </span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="la-quiz-score">
            Score <span>{score}</span> / {count}
          </div>
          <div className="la-quiz-instruction">
            Solve each question to unlock the next
          </div>
        </div>
      </div>

      {/* Circular Pagination */}
      <div className="la-quiz-pagination" role="tablist">
        {questions.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={`la-page-dot ${idx === currentIndex ? "active" : ""} ${idx > unlockedIndex ? "locked" : ""}`}
            onClick={() => jumpToQuestion(idx)}
            disabled={idx > unlockedIndex}
            aria-label={`Go to question ${idx + 1}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>

      <p className="la-quiz-progress-text">
        Quiz progress: question {unlockedIndex + 1} of {count} unlocked — slide through with the dots or Prev / Next below.
      </p>

      {/* Main MCQ Card */}
      <div className="la-quiz-card">
        <div className="la-q-number">{currentIndex + 1}</div>
        <div 
          className="la-q-prompt" 
          dangerouslySetInnerHTML={{ __html: formatText(currentQ.prompt) }}
        />

        <div className="la-options-list">
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            const letter = letterLabels[idx];
            let optionClass = "la-option-card ";
            
            if (isSelected) optionClass += "selected ";
            if (isSubmitted) {
              if (letter === currentQ.answer) optionClass += "correct ";
              else if (isSelected) optionClass += "incorrect ";
            }

            return (
              <button
                key={letter}
                type="button"
                className={optionClass}
                onClick={() => handleSelect(idx)}
                disabled={isSubmitted}
              >
                <span className="la-opt-letter">{letter}</span>
                <span className="la-opt-text" dangerouslySetInnerHTML={{ __html: formatText(opt) }} />
              </button>
            );
          })}
        </div>

        {/* Submit Button & Explanation Guard Logic */}
        {!isSubmitted ? (
          <button
            type="button"
            className="la-submit-btn"
            onClick={handleSubmit}
            disabled={selectedOption === null}
          >
            Submit Answer
          </button>
        ) : (
          <div className={`la-explanation-box ${letterLabels[selectedOption] === currentQ.answer ? "success" : "error"}`}>
            <strong>{letterLabels[selectedOption] === currentQ.answer ? "Correct!" : "Incorrect."}</strong> 
            {" "}Option {currentQ.answer} is the right answer.
            <div className="la-explanation-text" dangerouslySetInnerHTML={{ __html: formatText(currentQ.explanation) }} />
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="la-quiz-footer">
        <button
          type="button"
          className="la-nav-btn"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          &lsaquo; PREVIOUS
        </button>
        <div className="la-footer-tracker">
          Question {currentIndex + 1} / {count}
        </div>
        <button
          type="button"
          className="la-nav-btn"
          onClick={handleNext}
          disabled={currentIndex >= count - 1 || (currentIndex >= unlockedIndex && !(isSubmitted && (checkpointMode || letterLabels[selectedOption] === currentQ.answer)))}
        >
          NEXT &rsaquo;
        </button>
      </div>

      {checkpointMode && Object.keys(attemptsRef.current).length === count && (
        <div>
          <p className="la-quiz-progress-text" role="status">
            Attempt complete: {score}/{count} ({Math.round(score / count * 100)}%).
            {score / count >= 0.8 ? " Checkpoint passed." : " Score at least 80% to pass. Review the explanations and try again."}
          </p>
          {saveError && (
            <p role="alert">Your result could not be saved. <button type="button" className="la-nav-btn" onClick={() => persistAttempt(score)}>Save result again</button></p>
          )}
          <button type="button" className="la-nav-btn" onClick={restartAttempt}>Retake checkpoint</button>
        </div>
      )}

      {/* Linear Algebra Module Style Definitions */}
      <style>{`
        .la-quiz-container {
          background-color: #0f172a;
          color: #e2e8f0;
          border-radius: 12px;
          padding: 2.5rem 2rem;
          font-family: Inter, -apple-system, sans-serif;
          margin: 3rem 0;
          position: relative;
        }
        
        /* Floating Side Score Bar Styles */
        .la-floating-score {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          background-color: #0B1120;
          border: 1px solid #1e293b;
          border-radius: 12px;
          padding: 1.25rem 1rem;
          text-align: center;
          z-index: 50;
          box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          width: 85px;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          animation: slideInRight 0.3s ease-out forwards;
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translate(30px, -50%); }
          to { opacity: 1; transform: translate(0, -50%); }
        }
        .la-fs-fraction {
          font-size: 1.1rem;
          font-weight: bold;
          color: #ffffff;
        }
        .la-fs-label {
          font-size: 0.75rem;
          color: #94a3b8;
        }
        .la-fs-percent {
          font-size: 1.4rem;
          font-weight: 800;
          color: #0ea5e9;
          margin-top: 0.25rem;
        }
        /* Hide floating bar on smaller screens */
        @media (max-width: 1200px) {
          .la-floating-score { display: none; }
        }

        .la-quiz-header {
          margin-bottom: 1.5rem;
        }
        .la-quiz-score {
          font-size: 1.1rem;
          font-weight: 600;
        }
        .la-quiz-score span {
          font-size: 1.4rem;
          color: #ffffff;
        }
        .la-quiz-instruction {
          color: #64748b;
          font-size: 0.9rem;
        }
        .la-quiz-pagination {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }
        .la-page-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background-color: #1e293b;
          color: #94a3b8;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }
        .la-page-dot.active {
          background-color: #0ea5e9;
          color: #ffffff;
        }
        .la-page-dot.locked {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .la-quiz-progress-text {
          font-size: 0.85rem;
          color: #94a3b8;
          margin-bottom: 2rem;
        }
        .la-quiz-card {
          background-color: #0B1120;
          border: 1px solid #1e293b;
          border-radius: 12px;
          padding: 2rem;
        }
        .la-q-number {
          background-color: #0ea5e9;
          color: #ffffff;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 0.85rem;
          margin-bottom: 1rem;
        }
        .la-q-prompt {
          font-size: 1.15rem;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          color: #f8fafc;
        }
        .la-options-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .la-option-card {
          display: flex;
          align-items: center;
          background-color: transparent;
          border: 1px solid #334155;
          border-radius: 8px;
          padding: 1rem 1.25rem;
          color: #cbd5e1;
          font-size: 1rem;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s;
        }
        .la-option-card:hover:not(:disabled) {
          border-color: #64748b;
          background-color: rgba(255,255,255,0.03);
        }
        .la-option-card.selected {
          border-color: #0ea5e9;
          background-color: rgba(14, 165, 233, 0.1);
        }
        .la-option-card.correct {
          border-color: #10b981;
          background-color: rgba(16, 185, 129, 0.1);
        }
        .la-option-card.incorrect {
          border-color: #ef4444;
          background-color: rgba(239, 68, 68, 0.1);
        }
        .la-opt-letter {
          font-weight: bold;
          margin-right: 1rem;
          color: #94a3b8;
        }
        .la-submit-btn {
          background-color: #0ea5e9;
          color: #ffffff;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          font-size: 1rem;
        }
        .la-submit-btn:disabled {
          background-color: #1e293b;
          color: #64748b;
          cursor: not-allowed;
        }
        .la-explanation-box {
          margin-top: 1.5rem;
          padding: 1.25rem;
          border-radius: 8px;
          font-size: 0.95rem;
          line-height: 1.6;
        }
        .la-explanation-box.success {
          background-color: rgba(16, 185, 129, 0.1);
          border: 1px solid #10b981;
          color: #a7f3d0;
        }
        .la-explanation-box.error {
          background-color: rgba(239, 68, 68, 0.1);
          border: 1px solid #ef4444;
          color: #fecaca;
        }
        .la-explanation-text {
          margin-top: 0.5rem;
          color: #e2e8f0;
        }
        .la-quiz-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
        }
        .la-nav-btn {
          background-color: #1e293b;
          color: #cbd5e1;
          border: none;
          padding: 0.6rem 1.25rem;
          border-radius: 6px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
        }
        .la-nav-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .la-footer-tracker {
          font-size: 0.9rem;
          color: #94a3b8;
          font-weight: 600;
        }
      `}</style>
    </section>
  );
}

export default GuideMcqSection;