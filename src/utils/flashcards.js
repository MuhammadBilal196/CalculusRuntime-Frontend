import formulaData from "../data/formulaData";
export const FLASHCARD_COURSES = {
  "Calculus & Geometry": "calculus-analytical-geometry",
  "Multivariable Calculus": "multivariable-calculus",
  "Linear Algebra": "linear-algebra",
  "Probability & Stats": "probability-statistics",
};
export const FLASHCARDS = Object.entries(formulaData).flatMap(([topicId, topic]) =>
  topic.formulas.map((formula) => ({
    id: `${topicId}:${formula.name}`, courseId: FLASHCARD_COURSES[topic.category],
    course: topic.category, topic: topic.title, front: formula.name, back: formula.formula, note: formula.note || "",
  })));
export const BOX_DAYS = [1, 2, 4, 7, 14];
export function rateCard(previous, rating, occurredAt) {
  const time = Date.parse(occurredAt);
  if (!["Again", "Good", "Easy"].includes(rating) || !Number.isFinite(time)) throw new Error("Invalid flashcard review.");
  const oldBox = previous?.box || 1;
  const box = rating === "Again" ? 1 : Math.min(5, oldBox + (rating === "Easy" ? 2 : 1));
  const delay = rating === "Again" ? 10 * 60 * 1000 : BOX_DAYS[box - 1] * 86400000;
  return { box, dueAt: time + delay, reviewedAt: time };
}
export function flashcardProgress(events) {
  const result = {};
  const seen = new Set();
  events.filter((e) => e.kind === "flashcard").slice()
    .sort((a,b) => Date.parse(a.data.occurredAt)-Date.parse(b.data.occurredAt) || a.eventId.localeCompare(b.eventId, "en", { numeric: true }))
    .forEach((e) => {
      if (seen.has(e.eventId)) return;
      seen.add(e.eventId); result[e.data.cardId] = rateCard(result[e.data.cardId], e.data.rating, e.data.occurredAt);
    });
  return result;
}
export function dueCounts(cards, progress, now = Date.now()) {
  const end = new Date(now); end.setHours(24,0,0,0);
  return { now: cards.filter((c) => !progress[c.id] || progress[c.id].dueAt <= now).length,
    today: cards.filter((c) => !progress[c.id] || progress[c.id].dueAt < end.getTime()).length };
}
