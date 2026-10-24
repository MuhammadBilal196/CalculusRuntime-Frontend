import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import useQuizAttempts from "../../hooks/useQuizAttempts";
import { getCourseById } from "../../data/courses";
import {
  MOCK_EXAM_COURSES,
  MOCK_QUESTION_COUNT,
  MOCK_SECONDS_PER_QUESTION,
  answeredCount,
  clearMockAttempt,
  createMockAttempt,
  formatClock,
  gradeMockAttempt,
  hydrateMockAttempt,
  isMockExamCourse,
  loadMockAttempt,
  mockStorageKey,
  presentQuestion,
  remainingSeconds,
  saveMockAttempt,
  selectMockQuestions,
  withAnswer,
  withSubmission,
} from "../../utils/mockExam";
import "./MockExam.css";

/**
 * Timed Mock Exam — /mock-exam/:courseId
 * 30 mixed practice questions under exam timing. Progress survives refreshes,
 * the clock is deadline-based (correct in background tabs), the exam can only
 * be submitted once, it auto-submits at zero, and answers/feedback appear only
 * after submission. Does not affect certificates.
 */

// Practice banks load on demand, exactly like the Practice Arena.
const BANK_LOADERS = {
  calcAg: () => import("../../data/calcAgPracticeBank").then((m) => m.CALC_AG_PRACTICE_BANK),
  mv: () => import("../../data/mvPracticeBank").then((m) => m.MV_PRACTICE_BANK),
  la: () => import("../../data/laPracticeBank").then((m) => m.LA_PRACTICE_BANK),
  ps: () => import("../../data/psPracticeBank").then((m) => m.PS_PRACTICE_BANK),
};

const TICK_MS = 250;
const LOW_TIME_SECONDS = 5 * 60;

function MockExam() {
  const { courseId } = useParams();
  const user = useAuth()?.user;
  const { record: recordAnswer, restart: restartRecording } = useQuizAttempts();

  const bankKey = MOCK_EXAM_COURSES[courseId];
  const courseTitle = getCourseById(courseId)?.title || courseId;
  const storageKey = useMemo(() => mockStorageKey(user?.username, courseId), [user?.username, courseId]);

  const [phase, setPhase] = useState("loading"); // loading | intro | exam | result | error
  const [bank, setBank] = useState(null);
  const [attempt, setAttempt] = useState(null);
  const [presented, setPresented] = useState([]);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [confirmingSubmit, setConfirmingSubmit] = useState(false);
  const [notice, setNotice] = useState("");
  const [reviewIndex, setReviewIndex] = useState(null); // null = score view, number = reviewing that question

  // Refs give the timer and event handlers the latest values without re-subscribing.
  const attemptRef = useRef(null);
  const presentedRef = useRef([]);
  const submittingRef = useRef(false);
  useEffect(() => { attemptRef.current = attempt; }, [attempt]);
  useEffect(() => { presentedRef.current = presented; }, [presented]);

  const persist = useCallback((next) => {
    attemptRef.current = next;
    setAttempt(next);
    saveMockAttempt(storageKey, next);
  }, [storageKey]);

  /** Record every answer once, after submission, so Analytics sees one final answer per question. */
  const recordOnce = useCallback((submitted, shown) => {
    if (!submitted || submitted.recorded) return submitted;
    shown.forEach((q, i) => {
      const selected = submitted.answers?.[i];
      recordAnswer({
        source: "mock",
        courseId,
        quizId: `mock:${courseId}`,
        questionId: q.id,
        responseId: `${submitted.bankKey}:${q.id}`,
        prompt: q.question,
        options: q.options,
        selectedIndex: Number.isInteger(selected) ? selected : null,
        correctIndex: q.correctIndex,
        topic: q.topic,
        difficulty: q.difficulty,
      });
    });
    return { ...submitted, recorded: true };
  }, [courseId, recordAnswer]);

  /** Submit exactly once — guarded in memory, in storage, and across tabs. */
  const submit = useCallback((reason = "manual") => {
    if (submittingRef.current) return;
    submittingRef.current = true;
    try {
      // Another tab may already have submitted this attempt: trust storage first.
      const stored = loadMockAttempt(storageKey);
      const current = attemptRef.current;
      if (stored && current && stored.attemptId === current.attemptId && stored.submitted) {
        persist(stored);
        setPhase("result");
        return;
      }
      if (!current || current.submitted) {
        setPhase("result");
        return;
      }
      const locked = withSubmission(current, reason, Date.now());
      persist(locked); // save the lock before recording, so a crash cannot cause a second submission
      persist(recordOnce(locked, presentedRef.current));
      setConfirmingSubmit(false);
      if (reason === "time") setNotice("Time is up — your exam was submitted automatically.");
      setPhase("result");
    } finally {
      submittingRef.current = false;
    }
  }, [persist, recordOnce, storageKey]);

  /* ── Load the bank, then resume, finish, or show the intro ── */
  useEffect(() => {
    if (!isMockExamCourse(courseId)) {
      setPhase("error");
      return undefined;
    }
    let cancelled = false;
    setPhase("loading");
    setNotice("");
    BANK_LOADERS[bankKey]()
      .then((questions) => {
        if (cancelled) return;
        setBank(questions);
        const saved = loadMockAttempt(storageKey);
        const hydrated = hydrateMockAttempt(saved, questions, { courseId });
        if (!hydrated) {
          if (saved) {
            clearMockAttempt(storageKey);
            setNotice("Your previous mock exam could not be restored because the question bank changed. Please start a new one.");
          }
          setAttempt(null);
          setPresented([]);
          setPhase("intro");
          return;
        }
        attemptRef.current = hydrated.attempt;
        presentedRef.current = hydrated.presented;
        setAttempt(hydrated.attempt);
        setPresented(hydrated.presented);
        if (hydrated.attempt.submitted) {
          // Recover from a crash between locking and recording.
          if (!hydrated.attempt.recorded) persist(recordOnce(hydrated.attempt, hydrated.presented));
          setPhase("result");
        } else if (Date.now() >= hydrated.attempt.deadline) {
          submit("time"); // the deadline passed while the page was closed
        } else {
          setSecondsLeft(remainingSeconds(hydrated.attempt));
          setPhase("exam");
        }
      })
      .catch((error) => {
        console.error("Failed to load the mock exam question bank:", error);
        if (!cancelled) setPhase("error");
      });
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, bankKey, storageKey]);

  /* ── Deadline-based clock: correct even when the tab was in the background ── */
  useEffect(() => {
    if (phase !== "exam" || !attempt || attempt.submitted) return undefined;
    const tick = () => {
      const left = remainingSeconds(attemptRef.current);
      setSecondsLeft(left);
      if (left <= 0) submit("time");
    };
    tick();
    const id = setInterval(tick, TICK_MS);
    const onVisible = () => { if (document.visibilityState === "visible") tick(); };
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      clearInterval(id);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [phase, attempt, submit]);

  /* ── Keep several open tabs in sync (an answer or a submission in one shows in the other) ── */
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== storageKey) return;
      const next = loadMockAttempt(storageKey);
      const current = attemptRef.current;
      if (!next || !current || next.attemptId !== current.attemptId) return;
      attemptRef.current = next;
      setAttempt(next);
      if (next.submitted) setPhase("result");
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [storageKey]);

  const startExam = () => {
    if (!bank) return;
    const questions = selectMockQuestions(bank, { count: MOCK_QUESTION_COUNT });
    if (!questions.length) {
      setPhase("error");
      return;
    }
    const fresh = createMockAttempt({ courseId, bankKey, questions });
    const shown = fresh.items.map((item, i) => presentQuestion(questions[i], item.perm));
    restartRecording();
    presentedRef.current = shown;
    setPresented(shown);
    persist(fresh);
    setNotice("");
    setConfirmingSubmit(false);
    setReviewIndex(null);
    setSecondsLeft(remainingSeconds(fresh));
    setPhase("exam");
  };

  const startOver = () => {
    clearMockAttempt(storageKey);
    setAttempt(null);
    setPresented([]);
    setNotice("");
    setReviewIndex(null);
    setPhase("intro");
  };

  const chooseOption = (optionIndex) => {
    const current = attemptRef.current;
    if (!current) return;
    if (Date.now() >= current.deadline) {
      submit("time");
      return;
    }
    persist(withAnswer(current, current.current, optionIndex));
  };

  const goTo = (index) => {
    const current = attemptRef.current;
    if (!current || current.submitted) return;
    const clamped = Math.max(0, Math.min(index, current.items.length - 1));
    persist({ ...current, current: clamped });
  };

  const result = useMemo(
    () => (attempt?.submitted && presented.length ? gradeMockAttempt(attempt, presented) : null),
    [attempt, presented],
  );

  /* ───────────────────────── render ───────────────────────── */

  if (phase === "error") {
    return (
      <main className="mock-page">
        <div className="mock-panel mock-center">
          <h1 className="mock-title">Mock exam unavailable</h1>
          <p className="mock-muted">
            {isMockExamCourse(courseId)
              ? "The question bank could not be loaded. Check your connection and try again."
              : "There is no mock exam for this course."}
          </p>
          <div className="mock-actions">
            {isMockExamCourse(courseId) && (
              <button type="button" className="mock-btn mock-btn--primary" onClick={() => window.location.reload()}>
                Try again
              </button>
            )}
            <Link className="mock-btn" to="/">Back to home</Link>
          </div>
        </div>
      </main>
    );
  }

  if (phase === "loading") {
    return (
      <main className="mock-page">
        <div className="mock-panel mock-center" role="status">
          <div className="mock-spinner" aria-hidden="true" />
          <p className="mock-muted">Loading mock exam…</p>
        </div>
      </main>
    );
  }

  if (phase === "intro") {
    const minutes = Math.round((MOCK_QUESTION_COUNT * MOCK_SECONDS_PER_QUESTION) / 60);
    return (
      <main className="mock-page">
        <div className="mock-panel">
          <p className="mock-eyebrow">Timed Mock Exam</p>
          <h1 className="mock-title">{courseTitle}</h1>
          {notice && <p className="mock-notice" role="status">{notice}</p>}
          <ul className="mock-rules">
            <li><strong>{MOCK_QUESTION_COUNT} questions</strong>, mixed across topics and Easy / Medium / Hard.</li>
            <li><strong>{minutes} minutes</strong> in total. The clock keeps running if you leave the page.</li>
            <li>Your answers are saved as you go — refreshing or closing the tab will not lose them.</li>
            <li>No right/wrong feedback during the exam. After you submit you see your score, and can check each answer one by one.</li>
            <li>When time runs out the exam submits automatically.</li>
            <li>This is practice only: it does <strong>not</strong> affect your certificate.</li>
          </ul>
          <div className="mock-actions">
            <button type="button" className="mock-btn mock-btn--primary" onClick={startExam}>
              Start mock exam
            </button>
            <Link className="mock-btn" to={`/courses/${courseId}`}>Back to course</Link>
          </div>
        </div>
      </main>
    );
  }

  if (phase === "result" && result) {
    const minutesUsed = Math.max(0, Math.round(((attempt.submittedAt || attempt.deadline) - attempt.createdAt) / 60000));

    // ── Answer review: one question at a time ──
    if (reviewIndex !== null) {
      const i = Math.max(0, Math.min(reviewIndex, presented.length - 1));
      const rq = presented[i];
      const picked = attempt.answers?.[i];
      const isCorrect = Number.isInteger(picked) && picked === rq.correctIndex;
      return (
        <main className="mock-page">
          <header className="mock-exam-bar">
            <div>
              <p className="mock-eyebrow">Answer review · {courseTitle}</p>
              <p className="mock-muted">Question {i + 1} of {presented.length}</p>
            </div>
            <button type="button" className="mock-btn" onClick={() => setReviewIndex(null)}>
              Back to score
            </button>
          </header>

          <nav className="mock-palette" aria-label="Jump to question">
            {presented.map((pq, pi) => {
              const a = attempt.answers?.[pi];
              const ok = Number.isInteger(a) && a === pq.correctIndex;
              return (
                <button
                  key={pi}
                  type="button"
                  className={[
                    "mock-palette-btn",
                    ok ? "mock-palette-btn--right" : "mock-palette-btn--wrong",
                    pi === i ? "mock-palette-btn--current" : "",
                  ].join(" ").trim()}
                  aria-label={`Question ${pi + 1}, ${ok ? "correct" : Number.isInteger(a) ? "incorrect" : "not answered"}`}
                  aria-current={pi === i ? "step" : undefined}
                  onClick={() => setReviewIndex(pi)}
                >
                  {pi + 1}
                </button>
              );
            })}
          </nav>

          <article className={`mock-review-card ${isCorrect ? "mock-review-card--right" : "mock-review-card--wrong"}`}>
            <div className="mock-review-head">
              <span className="mock-qnum">Q{i + 1}</span>
              {rq.difficulty && <span className="mock-tag">{rq.difficulty}</span>}
              <span className="mock-review-verdict">
                {isCorrect ? "Correct" : Number.isInteger(picked) ? "Incorrect" : "Not answered"}
              </span>
            </div>
            <p className="mock-question">{rq.question}</p>
            <ul className="mock-review-options">
              {rq.options.map((option, oi) => (
                <li
                  key={oi}
                  className={[
                    oi === rq.correctIndex ? "mock-opt--correct" : "",
                    oi === picked && oi !== rq.correctIndex ? "mock-opt--wrong" : "",
                  ].join(" ").trim()}
                >
                  <span className="mock-letter">{String.fromCharCode(65 + oi)}</span>
                  <span>{option}</span>
                  {oi === rq.correctIndex && <span className="mock-opt-note">correct answer</span>}
                  {oi === picked && oi !== rq.correctIndex && <span className="mock-opt-note">your answer</span>}
                </li>
              ))}
            </ul>
            {rq.explanation && <p className="mock-explanation"><strong>Explanation:</strong> {rq.explanation}</p>}

            <div className="mock-actions mock-actions--split">
              <button type="button" className="mock-btn" onClick={() => setReviewIndex(i - 1)} disabled={i === 0}>
                ← Previous
              </button>
              {i === presented.length - 1 ? (
                <button type="button" className="mock-btn mock-btn--primary" onClick={() => setReviewIndex(null)}>
                  Finish review
                </button>
              ) : (
                <button type="button" className="mock-btn mock-btn--primary" onClick={() => setReviewIndex(i + 1)}>
                  Next →
                </button>
              )}
            </div>
          </article>
        </main>
      );
    }

    // ── Score summary ──
    return (
      <main className="mock-page">
        <div className="mock-panel">
          <p className="mock-eyebrow">Mock exam result</p>
          <h1 className="mock-title">{courseTitle}</h1>
          {notice && <p className="mock-notice" role="status">{notice}</p>}

          <div className="mock-score">
            <span className="mock-score-num">{result.score} / {result.total}</span>
            <span className="mock-score-pct">{result.pct}%</span>
          </div>
          <p className="mock-muted">
            Answered {result.answered} of {result.total} · about {minutesUsed} min used ·{" "}
            {attempt.submitReason === "time" ? "submitted when time ran out" : "submitted by you"}
          </p>

          <h2 className="mock-h2">By difficulty</h2>
          <table className="mock-table mock-table--narrow">
            <tbody>
              {result.byDifficulty.map((row) => (
                <tr key={row.key}><td>{row.key}</td><td>{row.correct} / {row.total}</td><td>{row.pct}%</td></tr>
              ))}
            </tbody>
          </table>

          <div className="mock-actions">
            <button type="button" className="mock-btn mock-btn--primary" onClick={() => setReviewIndex(0)}>
              Check answers
            </button>
            <button type="button" className="mock-btn" onClick={startOver}>
              Take another mock exam
            </button>
            <Link className="mock-btn" to={`/courses/${courseId}`}>Back to course</Link>
          </div>
        </div>
      </main>
    );
  }

  // ── Exam in progress ──
  if (!attempt || !presented.length) return null;
  const index = attempt.current || 0;
  const q = presented[index];
  const selected = attempt.answers?.[index];
  const done = answeredCount(attempt);
  const unanswered = presented.length - done;
  const lowTime = secondsLeft <= LOW_TIME_SECONDS;
  const isLast = index === presented.length - 1;

  return (
    <main className="mock-page">
      <header className="mock-exam-bar">
        <div>
          <p className="mock-eyebrow">Timed Mock Exam · {courseTitle}</p>
          <p className="mock-muted">Question {index + 1} of {presented.length} · {done} answered</p>
        </div>
        <div className={`mock-timer ${lowTime ? "mock-timer--low" : ""}`} role="timer" aria-label="Time remaining">
          {formatClock(secondsLeft)}
        </div>
      </header>

      <nav className="mock-palette" aria-label="Jump to question">
        {presented.map((_, i) => (
          <button
            key={i}
            type="button"
            className={[
              "mock-palette-btn",
              i === index ? "mock-palette-btn--current" : "",
              Number.isInteger(attempt.answers?.[i]) ? "mock-palette-btn--answered" : "",
            ].join(" ").trim()}
            aria-label={`Question ${i + 1}${Number.isInteger(attempt.answers?.[i]) ? ", answered" : ""}`}
            aria-current={i === index ? "step" : undefined}
            onClick={() => goTo(i)}
          >
            {i + 1}
          </button>
        ))}
      </nav>

      <div className="mock-panel">
        <div className="mock-review-head">
          <span className="mock-qnum">Q{index + 1}</span>
          <span className="mock-tag">{q.topic || "General"}</span>
          {q.difficulty && <span className="mock-tag">{q.difficulty}</span>}
        </div>
        <p className="mock-question">{q.question}</p>
        <div className="mock-options" role="group" aria-label="Answer choices">
          {q.options.map((option, oi) => (
            <button
              key={oi}
              type="button"
              className={`mock-option ${selected === oi ? "mock-option--selected" : ""}`}
              aria-pressed={selected === oi}
              onClick={() => chooseOption(oi)}
            >
              <span className="mock-letter">{String.fromCharCode(65 + oi)}</span>
              <span>{option}</span>
            </button>
          ))}
        </div>

        <div className="mock-actions mock-actions--split">
          <button type="button" className="mock-btn" onClick={() => goTo(index - 1)} disabled={index === 0}>
            ← Previous
          </button>
          {isLast ? (
            <button type="button" className="mock-btn mock-btn--primary" onClick={() => setConfirmingSubmit(true)}>
              Finish exam
            </button>
          ) : (
            <button type="button" className="mock-btn mock-btn--primary" onClick={() => goTo(index + 1)}>
              Next →
            </button>
          )}
        </div>
      </div>

      <div className="mock-submit-row">
        {confirmingSubmit ? (
          <div className="mock-confirm" role="alertdialog" aria-labelledby="mock-confirm-text">
            <p id="mock-confirm-text">
              {unanswered > 0
                ? `You have ${unanswered} unanswered question${unanswered === 1 ? "" : "s"}. Submit anyway?`
                : "Submit your exam? You cannot change answers afterwards."}
            </p>
            <div className="mock-actions">
              <button type="button" className="mock-btn mock-btn--primary" onClick={() => submit("manual")}>
                Submit exam
              </button>
              <button type="button" className="mock-btn" onClick={() => setConfirmingSubmit(false)}>
                Keep working
              </button>
            </div>
          </div>
        ) : (
          <button type="button" className="mock-btn mock-btn--ghost" onClick={() => setConfirmingSubmit(true)}>
            Submit exam now
          </button>
        )}
      </div>
    </main>
  );
}

export default MockExam;
