import {
  guideQuizId,
  getQuizAttemptPercent,
  SECTION_QUIZ_PASS_PERCENT,
} from "../data/sectionQuizGates";

/** True once the guide quiz with this `section` key was passed at 80%+. */
export function hasPassedQuiz(quizScores, key) {
  const pct = getQuizAttemptPercent(quizScores?.[guideQuizId(key)]);
  return pct !== null && pct >= SECTION_QUIZ_PASS_PERCENT;
}
