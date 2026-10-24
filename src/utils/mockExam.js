/**
 * Timed Mock Exam — pure helpers (no React), so they can be unit-tested.
 *
 * Questions come from the course's PRACTICE bank (never the certificate bank:
 * the mock exam shows answers after submission, which would leak the real key).
 *
 * An attempt is saved to localStorage after every change, so a refresh or a
 * closed tab resumes exactly where the student left off. Time is tracked as an
 * absolute deadline timestamp, so background tabs (whose timers are throttled)
 * still show the right remaining time.
 */

export const MOCK_QUESTION_COUNT = 30;
export const MOCK_SECONDS_PER_QUESTION = 90; // same pace as the certification quiz
export const MOCK_STORAGE_VERSION = 1;
export const DIFFICULTIES = ["Easy", "Medium", "Hard"];

/** Course id → practice bank key (keys match BANK_LOADERS in the Practice Arena). */
export const MOCK_EXAM_COURSES = {
  "calculus-analytical-geometry": "calcAg",
  "multivariable-calculus": "mv",
  "linear-algebra": "la",
  "probability-statistics": "ps",
};

export function isMockExamCourse(courseId) {
  return Object.prototype.hasOwnProperty.call(MOCK_EXAM_COURSES, courseId);
}

/* ───────────────────────── selection ───────────────────────── */

export function shuffled(list, rng = Math.random) {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function normalisePrompt(text) {
  return String(text || "").toLowerCase().replace(/\s+/g, " ").trim();
}

/**
 * Banks from different courses are written slightly differently (e.g. "easy" vs "Easy",
 * `correct` instead of `correctAnswer`, or the answer given as option text).
 * Bring every question to one shape so the mock exam works for every course.
 */
export function normalizeQuestion(q) {
  if (!q || typeof q !== "object") return q;
  const options = Array.isArray(q.options) ? q.options : q.choices;
  let answer = q.correctAnswer ?? q.correct ?? q.answer ?? q.correctIndex;
  if (typeof answer === "string" && Array.isArray(options)) {
    const byText = options.findIndex((o) => String(o).trim() === answer.trim());
    answer = byText >= 0 ? byText : (/^[A-Da-d]$/.test(answer) ? answer.toUpperCase().charCodeAt(0) - 65 : Number(answer));
  }
  const rawDifficulty = String(q.difficulty || q.level || "").trim().toLowerCase();
  const difficulty = DIFFICULTIES.find((d) => d.toLowerCase() === rawDifficulty) || q.difficulty;
  return {
    ...q,
    question: q.question ?? q.prompt ?? q.q,
    options,
    correctAnswer: answer,
    difficulty,
    topic: q.topic || q.module || "General",
  };
}

/** A question is usable if it has an id, a prompt, ≥2 distinct options and a valid answer index. */
export function isUsableQuestion(q) {
  if (!q || q.id === undefined || q.id === null) return false;
  if (typeof q.question !== "string" || !q.question.trim()) return false;
  if (!Array.isArray(q.options) || q.options.length < 2) return false;
  if (new Set(q.options.map(String)).size !== q.options.length) return false;
  return Number.isInteger(q.correctAnswer) && q.correctAnswer >= 0 && q.correctAnswer < q.options.length;
}

/** Remove unusable items and duplicates (same id, or the same prompt text). */
export function usableUniqueQuestions(bank) {
  const seenIds = new Set();
  const seenPrompts = new Set();
  const out = [];
  (bank || []).map(normalizeQuestion).forEach((q) => {
    if (!isUsableQuestion(q)) return;
    const idKey = String(q.id);
    const promptKey = normalisePrompt(q.question);
    if (seenIds.has(idKey) || seenPrompts.has(promptKey)) return;
    seenIds.add(idKey);
    seenPrompts.add(promptKey);
    out.push(q);
  });
  return out;
}

/** Pick up to `target` questions, spreading the picks across topics (round-robin). */
function pickSpreadAcrossTopics(pool, target, rng) {
  const byTopic = new Map();
  shuffled(pool, rng).forEach((q) => {
    const topic = q.topic || "General";
    if (!byTopic.has(topic)) byTopic.set(topic, []);
    byTopic.get(topic).push(q);
  });
  const queues = shuffled([...byTopic.values()], rng);
  const picked = [];
  while (picked.length < target && queues.some((queue) => queue.length)) {
    queues.forEach((queue) => {
      if (picked.length < target && queue.length) picked.push(queue.shift());
    });
  }
  return picked;
}

/**
 * Choose `count` distinct questions: an even split across Easy/Medium/Hard
 * (10/10/10 for 30), spread across topics inside each difficulty. If a
 * difficulty is short, the gap is filled from the remaining questions.
 */
export function selectMockQuestions(bank, { count = MOCK_QUESTION_COUNT, rng = Math.random } = {}) {
  const usable = usableUniqueQuestions(bank);
  const target = Math.min(count, usable.length);
  const base = Math.floor(target / DIFFICULTIES.length);
  const extra = target % DIFFICULTIES.length;

  const chosen = [];
  const chosenIds = new Set();
  DIFFICULTIES.forEach((difficulty, i) => {
    const want = base + (i < extra ? 1 : 0);
    const pool = usable.filter((q) => q.difficulty === difficulty);
    pickSpreadAcrossTopics(pool, want, rng).forEach((q) => {
      chosen.push(q);
      chosenIds.add(String(q.id));
    });
  });

  if (chosen.length < target) {
    const rest = usable.filter((q) => !chosenIds.has(String(q.id)));
    pickSpreadAcrossTopics(rest, target - chosen.length, rng).forEach((q) => chosen.push(q));
  }

  return shuffled(chosen, rng);
}

/* ───────────────────────── attempts ───────────────────────── */

export function newMockAttemptId(rng = Math.random) {
  return `mock-${Date.now().toString(36)}-${Math.floor(rng() * 1e9).toString(36)}`;
}

/** Create a fresh attempt. Each question stores its option order so a resume shows the same layout. */
export function createMockAttempt({
  courseId,
  bankKey,
  questions,
  now = Date.now(),
  rng = Math.random,
  secondsPerQuestion = MOCK_SECONDS_PER_QUESTION,
}) {
  return {
    version: MOCK_STORAGE_VERSION,
    attemptId: newMockAttemptId(rng),
    courseId,
    bankKey,
    createdAt: now,
    deadline: now + questions.length * secondsPerQuestion * 1000,
    items: questions.map((q) => ({
      id: q.id,
      perm: shuffled(q.options.map((_, i) => i), rng),
    })),
    answers: {},
    current: 0,
    submitted: false,
    submittedAt: null,
    submitReason: null,
    recorded: false,
  };
}

/** Question as shown to the student: options in the attempt's order, correct index remapped. */
export function presentQuestion(question, perm) {
  return {
    ...question,
    options: perm.map((i) => question.options[i]),
    correctIndex: perm.indexOf(question.correctAnswer),
  };
}

/**
 * Rebuild a saved attempt against the current bank. Returns null if the
 * attempt is malformed or any question no longer exists (bank was edited).
 */
export function hydrateMockAttempt(saved, bank, { courseId } = {}) {
  if (!saved || saved.version !== MOCK_STORAGE_VERSION) return null;
  if (courseId && saved.courseId !== courseId) return null;
  if (!Array.isArray(saved.items) || !saved.items.length || !Number.isFinite(saved.deadline)) return null;

  const byId = new Map((bank || []).map(normalizeQuestion).filter(Boolean).map((q) => [String(q.id), q]));
  const presented = [];
  for (const item of saved.items) {
    const q = byId.get(String(item.id));
    if (!q || !isUsableQuestion(q)) return null;
    const perm = item.perm;
    const validPerm = Array.isArray(perm)
      && perm.length === q.options.length
      && [...perm].sort((a, b) => a - b).every((v, i) => v === i);
    if (!validPerm) return null;
    presented.push(presentQuestion(q, perm));
  }
  return { attempt: saved, presented };
}

export function remainingSeconds(attempt, now = Date.now()) {
  if (!attempt) return 0;
  return Math.max(0, (attempt.deadline - now) / 1000);
}

export function isTimeUp(attempt, now = Date.now()) {
  return !!attempt && !attempt.submitted && now >= attempt.deadline;
}

export function answeredCount(attempt) {
  return Object.values(attempt?.answers || {}).filter((v) => Number.isInteger(v)).length;
}

/** Return a copy with the answer stored — refused once submitted or out of time. */
export function withAnswer(attempt, index, optionIndex, now = Date.now()) {
  if (!attempt || attempt.submitted || now >= attempt.deadline) return attempt;
  return { ...attempt, answers: { ...attempt.answers, [index]: optionIndex } };
}

/** Return a submitted copy. Submitting twice is a no-op (keeps the first submission). */
export function withSubmission(attempt, reason = "manual", now = Date.now()) {
  if (!attempt || attempt.submitted) return attempt;
  // Never later than the deadline: a page reopened after time ran out still counts as submitted on time-up.
  return { ...attempt, submitted: true, submittedAt: Math.min(now, attempt.deadline), submitReason: reason };
}

/** Score an attempt: overall, per topic and per difficulty. Unanswered counts as wrong. */
export function gradeMockAttempt(attempt, presented) {
  const byTopic = new Map();
  const byDifficulty = new Map();
  let score = 0;

  presented.forEach((q, i) => {
    const selected = attempt.answers?.[i];
    const correct = Number.isInteger(selected) && selected === q.correctIndex;
    if (correct) score += 1;
    [[byTopic, q.topic || "General"], [byDifficulty, q.difficulty || "Unrated"]].forEach(([map, key]) => {
      const row = map.get(key) || { key, correct: 0, total: 0 };
      row.total += 1;
      if (correct) row.correct += 1;
      map.set(key, row);
    });
  });

  const total = presented.length;
  const toRows = (map) => [...map.values()].map((r) => ({ ...r, pct: Math.round((r.correct / r.total) * 100) }));
  return {
    score,
    total,
    pct: total ? Math.round((score / total) * 100) : 0,
    answered: answeredCount(attempt),
    byTopic: toRows(byTopic).sort((a, b) => a.pct - b.pct || b.total - a.total),
    byDifficulty: DIFFICULTIES.map((d) => toRows(byDifficulty).find((r) => r.key === d)).filter(Boolean),
  };
}

/* ───────────────────────── storage ───────────────────────── */

export function mockStorageKey(username, courseId) {
  return `calcvoyager:mock-exam:v${MOCK_STORAGE_VERSION}:${username || "guest"}:${courseId}`;
}

/** The browser's localStorage, or null when unavailable (private mode, blocked, tests). */
function browserStorage() {
  try {
    return typeof window !== "undefined" ? window.localStorage : null;
  } catch {
    return null;
  }
}

export function loadMockAttempt(key, storage) {
  try {
    const raw = (storage || browserStorage())?.getItem(key);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveMockAttempt(key, attempt, storage) {
  try {
    (storage || browserStorage())?.setItem(key, JSON.stringify(attempt));
    return true;
  } catch {
    return false;
  }
}

export function clearMockAttempt(key, storage) {
  try {
    (storage || browserStorage())?.removeItem(key);
  } catch {
    /* storage unavailable — nothing to clear */
  }
}

export function formatClock(seconds) {
  const s = Math.max(0, Math.ceil(seconds));
  const m = Math.floor(s / 60);
  return `${String(m).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
}
