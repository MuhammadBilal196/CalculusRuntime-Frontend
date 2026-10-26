// Leaderboard points — same rules as the backend (core/points.py).

export const POINT_RULES = [
  { id: "quiz", label: "Topic quiz or practice drill", value: 1, unit: "per correct answer" },
  { id: "mock", label: "Timed mock exam", value: 2, unit: "per correct answer" },
  { id: "exam", label: "Certification exam", value: 2, unit: "per correct answer" },
  { id: "module", label: "Module part completed", value: 20, unit: "per part" },
  { id: "course", label: "Course certificate earned", value: 200, unit: "per course" },
];

const RULE = Object.fromEntries(POINT_RULES.map((r) => [r.id, r.value]));

export function quizKind(quizId = "") {
  if (quizId.startsWith("mock-") || quizId.startsWith("mock:")) return "mock";
  if (quizId.startsWith("quiz-")) return "exam";
  return "quiz";
}

/** Points breakdown from best quiz scores, completed sections and certificates. */
export function computePoints({ quizScores = {}, completedSections = {}, certificates = 0 }) {
  let quizPoints = 0;
  let mockPoints = 0;
  let examPoints = 0;
  let correctAnswers = 0;
  let questionsAnswered = 0;
  let pctSum = 0;
  let quizCount = 0;

  for (const [quizId, entry] of Object.entries(quizScores || {})) {
    const total = Math.max(0, Number(entry?.total) || 0);
    const score = Math.min(Math.max(0, Number(entry?.score) || 0), total || Infinity);
    if (total) {
      pctSum += (score / total) * 100;
      quizCount += 1;
    }
    correctAnswers += score;
    questionsAnswered += total;
    const kind = quizKind(quizId);
    if (kind === "mock") mockPoints += score * RULE.mock;
    else if (kind === "exam") examPoints += score * RULE.exam;
    else quizPoints += score * RULE.quiz;
  }

  const topics = Object.values(completedSections || {}).filter(Boolean).length;
  const modulePoints = topics * RULE.module;
  const coursePoints = Math.max(0, Number(certificates) || 0) * RULE.course;

  return {
    points: quizPoints + mockPoints + examPoints + modulePoints + coursePoints,
    quizPoints,
    mockPoints,
    examPoints,
    modulePoints,
    coursePoints,
    correctAnswers,
    questionsAnswered,
    quizCount,
    quizPct: quizCount ? Math.round(pctSum / quizCount) : 0,
    topics,
    certificates: Math.max(0, Number(certificates) || 0),
  };
}

/** Level badge for a points total. */
export const LEVELS = [
  { min: 0, name: "Starter" },
  { min: 100, name: "Learner" },
  { min: 400, name: "Scholar" },
  { min: 1000, name: "Expert" },
  { min: 2500, name: "Master" },
];

export function getLevel(points = 0) {
  let index = 0;
  LEVELS.forEach((level, i) => {
    if (points >= level.min) index = i;
  });
  const current = LEVELS[index];
  const next = LEVELS[index + 1] || null;
  const progress = next
    ? Math.round(((points - current.min) / (next.min - current.min)) * 100)
    : 100;
  return { ...current, index, next, progress };
}
