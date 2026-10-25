import {
  buildAnalytics,
  buildCatalog,
  firstAnswers,
  practiceLinkFor,
  topicOf,
  questionKey,
  sortTopics,
  topicStatus,
} from "./analytics";

let clock = Date.parse("2026-10-01T10:00:00Z");
function rec(overrides = {}) {
  clock += 1000;
  return {
    schemaVersion: 1,
    attemptId: "a1",
    responseId: "mv:q1",
    source: "practice",
    courseId: "multivariable-calculus",
    quizId: "practice:x",
    questionId: "q1",
    prompt: "Q",
    options: ["A", "B"],
    selectedIndex: 0,
    correctIndex: 0,
    correct: true,
    grading: "client",
    topic: "Partial Derivatives",
    difficulty: "Easy",
    occurredAt: new Date(clock).toISOString(),
    ...overrides,
  };
}

describe("first-answer rule", () => {
  test("only the first answer to a question counts", () => {
    const wrongFirst = rec({ correct: false, selectedIndex: 1, attemptId: "a1" });
    const rightLater = rec({ correct: true, attemptId: "a2" });
    const result = firstAnswers([rightLater, wrongFirst]); // saved out of order on purpose
    expect(result).toHaveLength(1);
    expect(result[0].correct).toBe(false);
  });

  test("the same bank question in practice and in a mock exam is one question", () => {
    const a = rec({ source: "practice", responseId: "mv:q9" });
    const b = rec({ source: "mock", responseId: "mv:q9", quizId: "mock:multivariable-calculus" });
    expect(questionKey(a)).toBe(questionKey(b));
    expect(firstAnswers([a, b])).toHaveLength(1);
  });

  test("topic-quiz answers are keyed by quiz and question, not the per-attempt counter", () => {
    const a = rec({ source: "guide", quizId: "sg-metric", questionId: "3", responseId: "1", attemptId: "x" });
    const b = rec({ source: "guide", quizId: "sg-metric", questionId: "3", responseId: "7", attemptId: "y" });
    const c = rec({ source: "guide", quizId: "sg-metric", questionId: "4", responseId: "1", attemptId: "y" });
    expect(firstAnswers([a, b, c])).toHaveLength(2);
  });
});

describe("analytics", () => {
  const records = [
    rec({ responseId: "mv:1", correct: true }),
    rec({ responseId: "mv:2", correct: true }),
    rec({ responseId: "mv:3", correct: false, selectedIndex: 1, difficulty: "Hard" }),
    rec({ responseId: "mv:3", correct: true, attemptId: "retry" }), // repeat — ignored
    rec({ responseId: "la:1", courseId: "linear-algebra", topic: "Eigenvalues & Eigenvectors", correct: false, selectedIndex: 1 }),
    rec({ source: "guide", responseId: "1", quizId: "sg-metric", questionId: "0", topic: "Surface Metrics", difficulty: null }),
  ];
  const catalog = [
    { topic: "Partial Derivatives", courseId: "multivariable-calculus", module: null },
    { topic: "Lyapunov Stability Methods", courseId: "multivariable-calculus", module: "Nonlinear Dynamical Systems" },
  ];

  test("overall totals use first answers only", () => {
    const data = buildAnalytics(records, {}, catalog);
    expect(data.total).toBe(5);
    expect(data.correct).toBe(3);
    expect(data.rawCount).toBe(6);
  });

  test("topics with no answers are listed as Not started", () => {
    const data = buildAnalytics(records, {}, catalog);
    const lyap = data.topics.find((t) => t.topic === "Lyapunov Stability Methods");
    expect(lyap.answered).toBe(0);
    expect(lyap.status).toBe("not-started");
  });

  test("filters by course, source and difficulty", () => {
    expect(buildAnalytics(records, { courseId: "linear-algebra" }, catalog).total).toBe(1);
    expect(buildAnalytics(records, { source: "guide" }, catalog).total).toBe(1);
    expect(buildAnalytics(records, { difficulty: "Hard" }, catalog).total).toBe(1);
    // the guide-only filter should not invent "Not started" practice topics
    expect(buildAnalytics(records, { source: "guide" }, catalog).topics).toHaveLength(1);
  });

  test("status thresholds", () => {
    expect(topicStatus(0, 0)).toBe("not-started");
    expect(topicStatus(2, 0)).toBe("few");
    expect(topicStatus(3, 80)).toBe("strong");
    expect(topicStatus(3, 67)).toBe("developing");
    expect(topicStatus(3, 33)).toBe("weak");
  });

  test("weakest-first sort keeps not-started topics last", () => {
    const data = buildAnalytics(records, {}, catalog);
    const sorted = sortTopics(data.topics, "weakest");
    expect(sorted[sorted.length - 1].answered).toBe(0);
  });
});

describe("practice links", () => {
  const selections = { "Partial Derivatives": {}, "Nonlinear Dynamical Systems": {} };
  const catalog = buildCatalog({
    "multivariable-calculus": [
      { topic: "Partial Derivatives" },
      { topic: "Lyapunov Stability Methods", module: "Nonlinear Dynamical Systems" },
      { topic: "Some Module Topic", module: "Unlisted Module" },
    ],
  });

  test("links to the topic, else its module, else the course page", () => {
    expect(practiceLinkFor({ topic: "Partial Derivatives", courseId: "multivariable-calculus" }, catalog, selections))
      .toBe("/practice?topic=Partial%20Derivatives");
    expect(practiceLinkFor({ topic: "Lyapunov Stability Methods", courseId: "multivariable-calculus" }, catalog, selections))
      .toBe("/practice?topic=Nonlinear%20Dynamical%20Systems");
    expect(practiceLinkFor({ topic: "Some Module Topic", courseId: "multivariable-calculus" }, catalog, selections))
      .toBe("/courses/multivariable-calculus");
  });
});

test("topic-quiz titles group with the practice topic of the same name", () => {
  expect(topicOf({ topic: "Surface Curvature and Geodesics — Quiz" })).toBe("Surface Curvature and Geodesics");
  expect(topicOf({ topic: "Partial Derivatives Quiz" })).toBe("Partial Derivatives");
  expect(topicOf({ topic: "Quiz" })).toBe("Quiz");
  expect(topicOf({ topic: null })).toBe("Other");
});
