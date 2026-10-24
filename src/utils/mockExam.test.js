import {
  MOCK_QUESTION_COUNT,
  MOCK_SECONDS_PER_QUESTION,
  createMockAttempt,
  formatClock,
  gradeMockAttempt,
  hydrateMockAttempt,
  isTimeUp,
  loadMockAttempt,
  mockStorageKey,
  presentQuestion,
  remainingSeconds,
  saveMockAttempt,
  selectMockQuestions,
  usableUniqueQuestions,
  withAnswer,
  withSubmission,
} from "./mockExam";

// Deterministic random numbers so every run picks the same questions.
function seeded(seed = 42) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

const TOPICS = ["Limits", "Derivatives", "Integrals", "Series"];
function makeBank(perDifficulty = 20) {
  const bank = [];
  ["Easy", "Medium", "Hard"].forEach((difficulty) => {
    for (let i = 0; i < perDifficulty; i += 1) {
      bank.push({
        id: `${difficulty}-${i}`,
        topic: TOPICS[i % TOPICS.length],
        difficulty,
        question: `${difficulty} question ${i}`,
        options: ["A", "B", "C", "D"],
        correctAnswer: i % 4,
        explanation: "because",
      });
    }
  });
  return bank;
}

function memoryStorage() {
  const data = {};
  return {
    getItem: (k) => (k in data ? data[k] : null),
    setItem: (k, v) => { data[k] = String(v); },
    removeItem: (k) => { delete data[k]; },
  };
}

describe("question selection", () => {
  test("picks 30 distinct questions, 10 per difficulty, across topics", () => {
    const picked = selectMockQuestions(makeBank(), { rng: seeded() });
    expect(picked).toHaveLength(MOCK_QUESTION_COUNT);
    expect(new Set(picked.map((q) => q.id)).size).toBe(MOCK_QUESTION_COUNT);
    ["Easy", "Medium", "Hard"].forEach((d) => {
      expect(picked.filter((q) => q.difficulty === d)).toHaveLength(10);
    });
    expect(new Set(picked.map((q) => q.topic)).size).toBe(TOPICS.length);
  });

  test("fills a short difficulty from the others and never exceeds the bank", () => {
    const bank = makeBank(20).filter((q) => q.difficulty !== "Hard" || q.id === "Hard-0");
    const picked = selectMockQuestions(bank, { rng: seeded() });
    expect(picked).toHaveLength(30);
    expect(picked.filter((q) => q.difficulty === "Hard")).toHaveLength(1);
    expect(selectMockQuestions(makeBank(3), { rng: seeded() })).toHaveLength(9);
  });

  test("skips broken items and duplicate ids or prompts", () => {
    const good = makeBank(2);
    const bad = [
      { ...good[0] },                                   // duplicate id
      { ...good[1], id: "copy", question: good[1].question }, // duplicate prompt
      { id: "x1", question: "", options: ["A", "B"], correctAnswer: 0 },
      { id: "x2", question: "Q", options: ["A"], correctAnswer: 0 },
      { id: "x3", question: "Q3", options: ["A", "A"], correctAnswer: 0 },
      { id: "x4", question: "Q4", options: ["A", "B"], correctAnswer: 5 },
    ];
    expect(usableUniqueQuestions([...good, ...bad])).toHaveLength(good.length);
  });
});

describe("attempt lifecycle", () => {
  const now = 1_000_000;
  const questions = selectMockQuestions(makeBank(), { rng: seeded() });
  const attempt = createMockAttempt({ courseId: "c", bankKey: "b", questions, now, rng: seeded(7) });

  test("deadline is 90 s per question from the start", () => {
    expect(attempt.deadline).toBe(now + questions.length * MOCK_SECONDS_PER_QUESTION * 1000);
    expect(remainingSeconds(attempt, now + 60_000)).toBe(questions.length * MOCK_SECONDS_PER_QUESTION - 60);
  });

  test("timer is based on the deadline, so a throttled background tab still shows the right time", () => {
    const tenMinutesLater = now + 10 * 60_000; // no ticks happened in between
    expect(remainingSeconds(attempt, tenMinutesLater)).toBe(questions.length * MOCK_SECONDS_PER_QUESTION - 600);
  });

  test("answers persist and the attempt resumes identically after a refresh", () => {
    const storage = memoryStorage();
    const key = mockStorageKey("alice", "c");
    const answered = withAnswer(attempt, 3, 2, now + 1000);
    saveMockAttempt(key, answered, storage);
    const restored = hydrateMockAttempt(loadMockAttempt(key, storage), makeBank(), { courseId: "c" });
    expect(restored.attempt.answers).toEqual({ 3: 2 });
    expect(restored.presented.map((q) => q.id)).toEqual(questions.map((q) => q.id));
    expect(restored.presented[0].options).toEqual(presentQuestion(questions[0], attempt.items[0].perm).options);
  });

  test("an attempt from a different course or a changed bank is not restored", () => {
    expect(hydrateMockAttempt(attempt, makeBank(), { courseId: "other" })).toBeNull();
    expect(hydrateMockAttempt(attempt, makeBank().slice(0, 5), { courseId: "c" })).toBeNull();
  });

  test("submitting twice keeps the first submission", () => {
    const first = withSubmission(attempt, "manual", now + 5000);
    const second = withSubmission(first, "time", now + 9000);
    expect(second).toBe(first);
    expect(second.submitReason).toBe("manual");
  });

  test("time up is detected and late answers are refused", () => {
    const late = attempt.deadline + 1;
    expect(isTimeUp(attempt, late)).toBe(true);
    expect(withAnswer(attempt, 0, 1, late)).toBe(attempt);
    const auto = withSubmission(attempt, "time", late + 60_000);
    expect(auto.submittedAt).toBe(attempt.deadline);
    expect(isTimeUp(auto, late)).toBe(false);
  });

  test("answers cannot change after submission", () => {
    const submitted = withSubmission(withAnswer(attempt, 0, 1, now), "manual", now + 1);
    expect(withAnswer(submitted, 0, 2, now + 2)).toBe(submitted);
  });
});

describe("grading", () => {
  test("scores against the shuffled option order and treats blanks as wrong", () => {
    const questions = selectMockQuestions(makeBank(), { rng: seeded() });
    const attempt = createMockAttempt({ courseId: "c", bankKey: "b", questions, rng: seeded(3) });
    const presented = attempt.items.map((item, i) => presentQuestion(questions[i], item.perm));
    let a = attempt;
    a = withAnswer(a, 0, presented[0].correctIndex, attempt.createdAt);
    a = withAnswer(a, 1, (presented[1].correctIndex + 1) % 4, attempt.createdAt);
    const result = gradeMockAttempt(withSubmission(a, "manual", attempt.createdAt + 1), presented);
    expect(result.score).toBe(1);
    expect(result.total).toBe(30);
    expect(result.answered).toBe(2);
    expect(result.byDifficulty.reduce((s, r) => s + r.total, 0)).toBe(30);
    expect(result.byTopic.reduce((s, r) => s + r.total, 0)).toBe(30);
  });

  test("presented question keeps the right answer after shuffling options", () => {
    const q = { id: 1, question: "Q", options: ["w", "x", "y", "z"], correctAnswer: 2 };
    const shown = presentQuestion(q, [3, 2, 1, 0]);
    expect(shown.options).toEqual(["z", "y", "x", "w"]);
    expect(shown.options[shown.correctIndex]).toBe("y");
  });
});

test("clock formatting", () => {
  expect(formatClock(2700)).toBe("45:00");
  expect(formatClock(59.2)).toBe("01:00");
  expect(formatClock(-5)).toBe("00:00");
});

test("banks written in other shapes are normalised (lowercase difficulty, `correct`, answer as text)", () => {
  const odd = [
    { id: "a", question: "Q1", options: ["1", "2", "3", "4"], correct: 2, difficulty: "easy", topic: "T" },
    { id: "b", question: "Q2", options: ["x", "y"], answer: "y", difficulty: "HARD" },
    { id: "c", question: "Q3", options: ["p", "q", "r"], correctAnswer: "C", difficulty: "medium" },
  ];
  const clean = usableUniqueQuestions(odd);
  expect(clean.map((q) => q.correctAnswer)).toEqual([2, 1, 2]);
  expect(clean.map((q) => q.difficulty)).toEqual(["Easy", "Hard", "Medium"]);
  expect(selectMockQuestions(odd, { rng: seeded() })).toHaveLength(3);
});
