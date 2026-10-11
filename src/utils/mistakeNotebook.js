import { COURSES } from "../data/courses";
export function inferGuideCourse(quizId, pathname) {
  if (quizId?.startsWith("la-") || pathname?.startsWith("/linear-algebra/")) return "linear-algebra";
  if (quizId?.startsWith("ps-") || pathname?.startsWith("/probability-statistics/")) return "probability-statistics";
  const candidates = COURSES.flatMap((course) => (course.modules || []).map((module) => ({
    courseId: course.id, path: module.path?.replace(/\/[12]$/, ""),
  }))).filter((entry) => entry.path && entry.path !== "/" && (pathname === entry.path || pathname?.startsWith(entry.path + "/")));
  return candidates.sort((a,b) => b.path.length-a.path.length)[0]?.courseId || null;
}
export const questionKey = (question) => JSON.stringify([
  question.courseId, question.quizId, question.prompt, [...question.options].sort(),
]);
export function unresolvedMistakes(events) {
  const latest = new Map();
  const ordered = events.filter((event) => event.kind === "question" && event.data?.options)
    .sort((a,b) => Date.parse(a.data.occurredAt)-Date.parse(b.data.occurredAt) || a.eventId.localeCompare(b.eventId, "en", { numeric: true }));
  for (const event of ordered) {
    const question = { ...event.data, courseId: event.data.courseId || inferGuideCourse(event.data.quizId, "") };
    latest.set(questionKey(question), question);
  }
  return [...latest.values()].filter((question) => !question.correct)
    .sort((a,b) => Date.parse(b.occurredAt)-Date.parse(a.occurredAt));
}
