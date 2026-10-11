import { queueLearningEvents } from "./learningEvents";
// Proposed shared v1 contract. Dev 2 sign-off is required before consumers ship.
export const ATTEMPT_SCHEMA_VERSION = 1;
const PREFIX = "calcvoyager_question_attempts_v1:";
let sequence = 0;
export const newAttemptId = () => `attempt-${Date.now()}-${++sequence}-${Math.random().toString(36).slice(2)}`;
const accountKey = (user) => user?.accessToken && typeof user.username === "string" && user.username.trim()
  ? PREFIX + encodeURIComponent(user.username) : null;
const nonempty = (s) => typeof s === "string" && s.trim().length > 0;
export function validAttempt(record) {
  const index = (i) => Number.isInteger(i) && i >= 0 && i < record.options.length;
  return record?.schemaVersion === 1 && nonempty(record.attemptId) && nonempty(record.responseId)
    && ["guide", "practice", "certificate"].includes(record.source)
    && nonempty(record.quizId) && nonempty(record.questionId) && nonempty(record.prompt)
    && Array.isArray(record.options) && record.options.length >= 2 && record.options.every(nonempty)
    && (record.selectedIndex === null || index(record.selectedIndex)) && index(record.correctIndex)
    && record.correct === (record.selectedIndex === record.correctIndex)
    && ["client", "server-review"].includes(record.grading)
    && (record.courseId === null || nonempty(record.courseId))
    && typeof record.occurredAt === "string" && Number.isFinite(Date.parse(record.occurredAt));
}
export function readQuizAttempts(user) {
  const key = accountKey(user);
  if (!key) return [];
  try {
    const records = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(records) ? records.filter(validAttempt) : [];
  } catch { return []; }
}
export function recordQuizAttempt(user, input = {}) {
  const key = accountKey(user);
  if (!key) return { saved: false, reason: "signed-out" };
  // Explicit allowlist: never persist user tokens, attempt tokens or arbitrary fields.
  const record = {
    schemaVersion: ATTEMPT_SCHEMA_VERSION, attemptId: input.attemptId, responseId: input.responseId,
    source: input.source, courseId: input.courseId ?? null, quizId: input.quizId,
    questionId: String(input.questionId), prompt: input.prompt, options: Array.isArray(input.options) ? input.options.slice() : [],
    selectedIndex: input.selectedIndex, correctIndex: input.correctIndex,
    correct: input.selectedIndex === input.correctIndex, grading: input.grading || "client",
    topic: typeof input.topic === "string" ? input.topic : null,
    difficulty: ["Easy", "Medium", "Hard"].includes(input.difficulty) ? input.difficulty : null,
    occurredAt: input.occurredAt || new Date().toISOString(),
  };
  if (!validAttempt(record) || input.questionId == null) return { saved: false, reason: "invalid" };
  try {
    const raw = localStorage.getItem(key);
    const records = raw ? JSON.parse(raw) : [];
    // Preserve damaged or future-format data rather than overwriting it silently.
    if (!Array.isArray(records) || !records.every(validAttempt)) return { saved: false, reason: "invalid-cache" };
    if (records.some((r) => r.attemptId === record.attemptId && r.responseId === record.responseId)) {
      return { saved: true, duplicate: true };
    }
    localStorage.setItem(key, JSON.stringify([...records, record]));
    queueLearningEvents(user, [{ eventId: `${record.attemptId}:${record.responseId}`, kind: "question", data: record }]);
    return { saved: true, duplicate: false };
  } catch { return { saved: false, reason: "storage-unavailable" }; }
}
export function clearQuizAttempts(user) {
  const key = accountKey(user);
  if (!key) return false;
  try { localStorage.removeItem(key); return true; } catch { return false; }
}
