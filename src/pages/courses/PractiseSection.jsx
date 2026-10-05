import React, { useState, useEffect, useRef } from "react";
import { LA_MODULES } from "../../data/laModules";
import SubmitToLeaderboard from "../../components/SubmitToLeaderboard";
import "../dashboard/Leaderboard.css";
import "./PractiseSection.css";

// Practice banks are fetched on demand so the full question library does not ship
// in the main bundle. Different selections may search one or more banks.
const BANK_LOADERS = {
  calcAg: () =>
    import("../../data/calcAgPracticeBank").then(
      (m) => m.CALC_AG_PRACTICE_BANK
    ),

  mv: () =>
    import("../../data/mvPracticeBank").then(
      (m) => m.MV_PRACTICE_BANK
    ),

  la: () =>
    import("../../data/laPracticeBank").then(
      (m) => m.LA_PRACTICE_BANK
    ),

  ps: () =>
    import("../../data/psPracticeBank").then(
      (m) => m.PS_PRACTICE_BANK
    ),
};

const DIFFICULTIES = ["Easy", "Medium", "Hard"];

const TOPICS = [
  "Lagrange Multipliers",
  "Divergence & Curl",
  "Stokes' Theorem",
  "Green's Theorem",
  "Taylor & Maclaurin Series",
  "Maclaurin Series",
  "Taylor Series for Multivariable Functions",
  "Partial Derivatives",
  "Vector Calculus",
  "Limits and Continuity",
  "Differentiation",
  "Integration",
  "Sequences and Infinite Series",
  "Conic Sections and Analytic Geometry",
  "3D Analytic Geometry & Vectors",
  "Space Curves & Advanced Multivariable Mappings",
  "Coordinate Transformations & Surfaces",
  "2D Lines & Systems of Lines",
  "Circles & Conic Tangents",
  "Advanced Single-Variable Calculus",
  "Ordinary Differential Equations (ODEs)",
  "Space Curves (Frenet-Serret)",
  "Vector-Valued Functions & Motion in Space",
  "Parametric Surfaces",
  "Polar Coordinate Calculus",
  "Solids of Revolution",
  "Volume by Cross-Sections",
  "Numerical Methods",
  "Improper Integrals — Advanced Convergence Tests",
  "Complex Numbers & De Moivre's Theorem",
  "Hyperbolic Functions",
  "Laplace Transforms",
  "Fourier Series",
  "Multiple Integrals",
  "Vectors & Vector Spaces",
  "Matrices & Determinants",
  "Systems of Linear Equations",
  "Fundamental Subspaces & Rank-Nullity",
  "Eigenvalues & Eigenvectors",
  "Linear Transformations",
  "Orthogonality & Least Squares",
  "Singular Value Decomposition",
  ...LA_MODULES.flatMap((module) =>
    module.topics.map((topic) => topic.title)
  ),
  "Probability Basics",
  "Random Variables & Distributions",
  "Descriptive Statistics",
  "Hypothesis Testing",
  "Regression & Correlation",
  "Probability Theory & Random Variables",
  "Mathematical Statistics & Inference",
];

/*
 * Unified Practice Arena selection rules.
 *
 * type: "topic"
 *   → filters by question.topic
 *
 * type: "topicAlias"
 *   → filters by canonicalTopic
 *
 * type: "module"
 *   → filters by question.module
 *
 * banks:
 *   → one or more practice banks are searched
 */
const PRACTICE_SELECTIONS = {
  // ============================================================
  // LINEAR ALGEBRA — preserve dynamic existing modules
  // ============================================================

  ...Object.fromEntries(
    LA_MODULES.flatMap((module) =>
      module.topics.map((topic) => [
        topic.title,
        {
          type: "topic",
          banks: ["la"],
        },
      ])
    )
  ),

  // ============================================================
  // CALCULUS / ANALYTICAL GEOMETRY
  // ============================================================

  "Limits and Continuity": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Limits & Continuity": {
    type: "topicAlias",
    canonicalTopic: "Limits and Continuity",
    banks: ["calcAg"],
  },

  Differentiation: {
    type: "topic",
    banks: ["calcAg"],
  },

  "Differentiation & Applications": {
    type: "topicAlias",
    canonicalTopic: "Differentiation",
    banks: ["calcAg"],
  },

  Integration: {
    type: "topic",
    banks: ["calcAg"],
  },

  "Integration & Techniques": {
    type: "topicAlias",
    canonicalTopic: "Integration",
    banks: ["calcAg"],
  },

  "Sequences and Infinite Series": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Sequences, Series & Taylor": {
    type: "topicAlias",
    canonicalTopic: "Sequences and Infinite Series",
    banks: ["calcAg"],
  },

  "Conic Sections and Analytic Geometry": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Conics & 2D Analytic Geometry": {
    type: "topicAlias",
    canonicalTopic: "Conic Sections and Analytic Geometry",
    banks: ["calcAg"],
  },

  "3D Analytic Geometry & Vectors": {
    type: "topic",
    banks: ["calcAg", "mv"],
  },

  "2D Lines & Systems of Lines": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Circles & Conic Tangents": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Advanced Single-Variable Calculus": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Ordinary Differential Equations (ODEs)": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Space Curves (Frenet-Serret)": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Vector-Valued Functions & Motion in Space": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Parametric Surfaces": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Polar Coordinate Calculus": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Solids of Revolution": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Volume by Cross-Sections": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Numerical Methods": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Improper Integrals — Advanced Convergence Tests": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Complex Numbers & De Moivre's Theorem": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Hyperbolic Functions": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Laplace Transforms": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Fourier Series": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Taylor Series for Multivariable Functions": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Taylor & Maclaurin Series": {
    type: "topic",
    banks: ["calcAg"],
  },

  "Maclaurin Series": {
    type: "topic",
    banks: ["calcAg"],
  },

  // ============================================================
  // MULTIVARIABLE CALCULUS — EXISTING TOPICS
  // ============================================================

  "Partial Derivatives": {
    type: "topic",
    banks: ["mv"],
  },

  "Vector Calculus": {
    type: "topic",
    banks: ["mv"],
  },

  "Multiple Integrals": {
    type: "topic",
    banks: ["mv"],
  },

  "Lagrange Multipliers": {
    type: "topic",
    banks: ["mv"],
  },

  "Divergence & Curl": {
    type: "topic",
    banks: ["mv"],
  },

  "Stokes' Theorem": {
    type: "topic",
    banks: ["mv"],
  },

  /*
   * Green's Theorem is allowed to search both banks.
   * This preserves old questions and also finds any new
   * Green's Theorem questions added to the MVC bank.
   */
  "Green's Theorem": {
    type: "topic",
    banks: ["calcAg", "mv"],
  },

  "Space Curves & Advanced Multivariable Mappings": {
    type: "topic",
    banks: ["mv"],
  },

  // ============================================================
  // NEW MVC MODULE A
  // ============================================================

  "Coordinate Transformations & Surfaces": {
    type: "module",
    banks: ["mv"],
    moduleName: "Coordinate Transformations & Surfaces",
  },

  // ============================================================
  // FUTURE NEW MVC MODULES
  // Uncomment these when their practice banks are created.
  // ============================================================

  // "Constrained & Unconstrained Optimization": {
  //   type: "module",
  //   banks: ["mv"],
  //   moduleName: "Constrained & Unconstrained Optimization",
  // },

  // "Vector Fields & Approximation Theory": {
  //   type: "module",
  //   banks: ["mv"],
  //   moduleName: "Vector Fields & Approximation Theory",
  // },

  // ============================================================
  // PROBABILITY & STATISTICS
  // ============================================================

  "Probability Basics": {
    type: "topic",
    banks: ["ps"],
  },

  "Random Variables & Distributions": {
    type: "topic",
    banks: ["ps"],
  },

  "Descriptive Statistics": {
    type: "topic",
    banks: ["ps"],
  },

  "Hypothesis Testing": {
    type: "topic",
    banks: ["ps"],
  },

  "Regression & Correlation": {
    type: "topic",
    banks: ["ps"],
  },

  "Probability Theory & Random Variables": {
    type: "topic",
    banks: ["ps"],
  },

  "Mathematical Statistics & Inference": {
    type: "topic",
    banks: ["ps"],
  },
};

function shuffled(list) {
  const out = [...list];

  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }

  return out;
}

function shuffleQuestionOptions(question) {
  const choices = question.options.map((option, originalIndex) => ({
    option,
    originalIndex,
  }));

  const randomizedChoices = shuffled(choices);

  return {
    ...question,
    options: randomizedChoices.map((choice) => choice.option),
    correctAnswer: randomizedChoices.findIndex(
      (choice) => choice.originalIndex === question.correctAnswer
    ),
  };
}

export default function PractiseSection() {
  // ============================================================
  // LAYER 1: DIFFICULTY SELECTION
  // ============================================================

  const [chosenDifficulty, setChosenDifficulty] = useState(null);

  // ============================================================
  // LAYER 2: TOPIC / MODULE SELECTION
  // ============================================================

  const [chosenTopic, setChosenTopic] = useState(null);

  // ============================================================
  // CORE GAMEPLAY STATE
  // ============================================================

  const [poolProblems, setPoolProblems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);

  // ============================================================
  // RUNNING SCORE PERSISTENCE
  // ============================================================

  const [score, setScore] = useState(() => {
    const saved = localStorage.getItem("arena_score_tracker");
    return saved
      ? JSON.parse(saved)
      : {
          correct: 0,
          total: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem("arena_score_tracker", JSON.stringify(score));
  }, [score]);

  const [isLoadingBank, setIsLoadingBank] = useState(false);

  // ============================================================
  // QUIZ BANK LOADING / FILTERING
  // ============================================================

  useEffect(() => {
    if (!chosenDifficulty || !chosenTopic) {
      return undefined;
    }

    let cancelled = false;

    const selection =
      PRACTICE_SELECTIONS[chosenTopic] || {
        type: "topic",
        banks: [],
      };

    setIsLoadingBank(true);
    setPoolProblems([]);
    setCurrentIndex(0);
    setIsQuizCompleted(false);
    resetQuizTurn();

    const selectedLoaders = (selection.banks || [])
      .map((bankName) => BANK_LOADERS[bankName])
      .filter(Boolean);

    Promise.all(selectedLoaders.map((loader) => loader()))
      .then((banks) => {
        if (cancelled) {
          return;
        }

        // Combine all requested banks.
        const combinedBank = banks.flat();

        let filtered = [];

        // ========================================================
        // MODULE-BASED QUESTIONS
        // ========================================================

        if (selection.type === "module") {
          filtered = combinedBank.filter((question) => {
            return (
              question.difficulty === chosenDifficulty &&
              question.module === selection.moduleName
            );
          });
        } else {
          // ======================================================
          // TOPIC-BASED QUESTIONS
          // ======================================================

          const targetTopic =
            selection.type === "topicAlias"
              ? selection.canonicalTopic
              : chosenTopic;

          filtered = combinedBank.filter((question) => {
            if (question.difficulty !== chosenDifficulty) {
              return false;
            }

            return question.topic === targetTopic;
          });
        }

        // ========================================================
        // REMOVE DUPLICATES BY QUESTION ID
        // ========================================================

        const uniqueQuestions = Array.from(
          new Map(
            filtered.map((question) => [question.id, question])
          ).values()
        );

        // ========================================================
        // SHUFFLE QUESTIONS + OPTIONS
        // ========================================================

        setPoolProblems(
          shuffled(uniqueQuestions).map(shuffleQuestionOptions)
        );
      })
      .catch((error) => {
        console.error(
          "Failed to load practice question bank:",
          error
        );

        if (!cancelled) {
          setPoolProblems([]);
        }
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoadingBank(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [chosenDifficulty, chosenTopic]);

  // ============================================================
  // AUTO-ADVANCE TIMER
  // ============================================================

  const autoAdvanceTimerRef = useRef(null);

  const resetQuizTurn = () => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }

    setSelectedAnswer(null);
    setIsSubmitted(false);
  };

  useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
      }
    };
  }, []);

  // ============================================================
  // RESET SELECTION
  // ============================================================

  const handleSelectionReset = () => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }

    setChosenDifficulty(null);
    setChosenTopic(null);
    setPoolProblems([]);
    setCurrentIndex(0);
    setIsQuizCompleted(false);
    resetQuizTurn();
  };

  // ============================================================
  // NEXT QUESTION
  // ============================================================

  const handleNextQuestion = () => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }

    if (currentIndex < poolProblems.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      resetQuizTurn();
    } else {
      setIsQuizCompleted(true);
    }
  };

  // ============================================================
  // OPTION CLICK
  // ============================================================

  const handleAnswerClick = (index) => {
    if (isSubmitted) {
      return;
    }

    setSelectedAnswer(index);

    const currentProblem = poolProblems[currentIndex];

    if (!currentProblem) {
      return;
    }

    const correct =
      index === currentProblem.correctAnswer;

    setScore((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }));

    setIsSubmitted(true);

    // Correct answer automatically advances after confirmation delay.
    if (correct) {
      autoAdvanceTimerRef.current = setTimeout(() => {
        if (currentIndex < poolProblems.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          resetQuizTurn();
        } else {
          setIsQuizCompleted(true);
        }
      }, 750);
    }
  };

  // ============================================================
  // SUBMIT BUTTON
  // ============================================================

  const handleSubmit = () => {
    if (selectedAnswer === null || isSubmitted) {
      return;
    }

    const currentProblem = poolProblems[currentIndex];

    if (!currentProblem) {
      return;
    }

    const correct =
      selectedAnswer === currentProblem.correctAnswer;

    setScore((prev) => ({
      correct: prev.correct + (correct ? 1 : 0),
      total: prev.total + 1,
    }));

    setIsSubmitted(true);

    if (correct) {
      autoAdvanceTimerRef.current = setTimeout(() => {
        if (currentIndex < poolProblems.length - 1) {
          setCurrentIndex((prev) => prev + 1);
          resetQuizTurn();
        } else {
          setIsQuizCompleted(true);
        }
      }, 750);
    }
  };

  const currentProblem =
    poolProblems[currentIndex] || null;

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <div className="practice-page">
      <div className="practice-hud">
        <div>
          <h1>Focused Practice Arena</h1>

          <p>
            Comprehensive testing workspace for Advanced
            Calculus and Mathematics modules.
          </p>
        </div>

        <div className="practice-score">
          <div>
            <span className="practice-score-label">
              Total Score
            </span>

            <div className="practice-score-value">
              {score.correct} <span>/</span> {score.total}
            </div>
          </div>

          <button
            type="button"
            className="practice-reset"
            onClick={() =>
              setScore({
                correct: 0,
                total: 0,
              })
            }
          >
            Reset
          </button>
        </div>
      </div>

      {/* ======================================================
          DIFFICULTY SELECTION
      ====================================================== */}

      {!chosenDifficulty && (
        <div className="practice-panel">
          <h2>Select Targeted Practice Tier</h2>

          <p
            style={{
              margin: 0,
              color: "var(--muted)",
              fontSize: "0.9rem",
            }}
          >
            Choose a difficulty tier to unlock the specific
            topic modules.
          </p>

          <div className="practice-tier-grid">
            {DIFFICULTIES.map((level) => (
              <button
                key={level}
                type="button"
                onClick={() =>
                  setChosenDifficulty(level)
                }
                className={`practice-tier-btn practice-tier-btn--${level.toLowerCase()}`}
              >
                {level} Mode
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================
          TOPIC / MODULE SELECTION
      ====================================================== */}

      {chosenDifficulty && !chosenTopic && (
        <div className="practice-panel">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <span className="practice-crumb">
              Difficulty Tier:{" "}
              <span className="practice-crumb-pill">
                {chosenDifficulty}
              </span>
            </span>

            <button
              type="button"
              className="practice-back"
              onClick={handleSelectionReset}
            >
              ← Back to Tiers
            </button>
          </div>

          <h3>Select Practice Topic</h3>

          <div className="practice-topic-grid">
            {TOPICS.map((topic) => (
              <button
                key={topic}
                type="button"
                className="practice-topic-btn"
                onClick={() => setChosenTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ======================================================
          QUIZ WORKSPACE
      ====================================================== */}

      {chosenDifficulty && chosenTopic && (
        <div>
          <div className="practice-toolbar">
            <div className="practice-crumb">
              <span className="practice-crumb-pill">
                {chosenDifficulty}
              </span>

              <span>/</span>

              <span
                style={{
                  color: "var(--ink)",
                }}
              >
                {chosenTopic}
              </span>
            </div>

            <div className="practice-toolbar-actions">
              <button
                type="button"
                className="practice-tool-btn"
                onClick={handleSelectionReset}
              >
                Change Topic
              </button>
            </div>
          </div>

          <div className="practice-panel">
            {!isQuizCompleted && currentProblem ? (
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <p
                    className="practice-kicker"
                    style={{ margin: 0 }}
                  >
                    Question Workspace
                  </p>

                  <span
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                      color: "var(--accent)",
                    }}
                  >
                    Question {currentIndex + 1} of{" "}
                    {poolProblems.length}
                  </span>
                </div>

                <h2 className="practice-question">
                  {currentProblem.question}
                </h2>

                <div
                  className="practice-options"
                  role="listbox"
                  aria-label="Answer choices"
                >
                  {currentProblem.options.map(
                    (option, idx) => {
                      let stateClass = "";

                      if (
                        selectedAnswer === idx &&
                        !isSubmitted
                      ) {
                        stateClass =
                          "practice-option--selected";
                      }

                      if (isSubmitted) {
                        if (
                          idx ===
                          currentProblem.correctAnswer
                        ) {
                          stateClass =
                            "practice-option--correct";
                        } else if (
                          selectedAnswer === idx
                        ) {
                          stateClass =
                            "practice-option--wrong";
                        } else {
                          stateClass =
                            "practice-option--muted";
                        }
                      }

                      return (
                        <button
                          key={idx}
                          type="button"
                          role="option"
                          aria-selected={
                            selectedAnswer === idx
                          }
                          disabled={isSubmitted}
                          onClick={() =>
                            handleAnswerClick(idx)
                          }
                          className={`practice-option ${stateClass}`.trim()}
                        >
                          <span className="practice-option__letter">
                            {String.fromCharCode(
                              65 + idx
                            )}
                          </span>

                          <span className="practice-option__text">
                            {option}
                          </span>
                        </button>
                      );
                    }
                  )}
                </div>

                <div className="practice-actions">
                  {!isSubmitted ? (
                    <button
                      type="button"
                      className="practice-submit"
                      onClick={handleSubmit}
                      disabled={
                        selectedAnswer === null
                      }
                    >
                      Submit Verification
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="practice-next"
                      onClick={handleNextQuestion}
                    >
                      {currentIndex <
                      poolProblems.length - 1
                        ? "Next Question →"
                        : "Finish Quiz & View Score"}
                    </button>
                  )}
                </div>

                {isSubmitted && (
                  <div className="practice-insight">
                    <h4>Solution Insight</h4>

                    <p>
                      {currentProblem.explanation}
                    </p>
                  </div>
                )}
              </div>
            ) : isQuizCompleted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "1rem 0",
                }}
              >
                <h2>Quiz Complete!</h2>

                <p>
                  You have finished all questions for{" "}
                  <strong>{chosenTopic}</strong> (
                  {chosenDifficulty}).
                </p>

                <div
                  style={{
                    margin: "1.5rem 0",
                  }}
                >
                  <SubmitToLeaderboard
                    quizId={`practice-${chosenTopic}-${chosenDifficulty}`}
                    score={score.correct}
                    total={Math.max(
                      score.total,
                      1
                    )}
                  />
                </div>

                <button
                  type="button"
                  className="practice-tool-btn practice-tool-btn--accent"
                  onClick={handleSelectionReset}
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  Choose Another Topic
                </button>
              </div>
            ) : isLoadingBank ? (
              <div className="practice-empty">
                Loading question bank…
              </div>
            ) : (
              <div className="practice-empty">
                No questions populated matching this
                configuration choice.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}