import { COURSES } from "./courses";
import { LA_MODULES, LA_EXPANSION_MODULES, getLaModuleParts } from "./laModules";

/**
 * Certificate requirements per course:
 *   - requiredSections: section IDs that must be marked complete
 *     (must match the `sectionId` prop on <SectionCompleteBar />)
 *   - quizId: id of this course's certification quiz (see courseQuizzes.js)
 *   - minQuizScore: minimum quiz percentage (0-100) required
 *
 * Only courses listed here are certificate-eligible.
 */
export const COURSE_CERTIFICATE_REQUIREMENTS = {
  "calculus-analytical-geometry": {
    requiredSections: [
      "limits-1",
      "limits-2",
      "calc-diff-1",
      "calc-diff-2",
      "calc-int-1",
      "calc-int-2",
      "calc-series-1",
      "calc-series-2",
      "calc-conics-1",
      "calc-conics-2",
      "taylor-1",
      "taylor-2",
      "lines-1",
      "lines-2",
      "circles-1",
      "circles-2",
      "advcalc-1",
      "advcalc-2",
      "ode-1",
      "ode-2",
      "space-curves-1",
      "space-curves-2",
      "vector-motion-1",
      "vector-motion-2",
      "polar-calculus-1",
      "polar-calculus-2",
      "solids-revolution-1",
      "solids-revolution-2",
      "volume-cross-sections-1",
      "volume-cross-sections-2",
      "numerical-methods-1",
      "numerical-methods-2",
      "improper-integrals-1",
      "improper-integrals-2",
      "complex-numbers-1",
      "complex-numbers-2",
      "hyperbolic-functions-1",
      "hyperbolic-functions-2",
      "laplace-transforms-1",
      "laplace-transforms-2",
      "fourier-series-1",
      "fourier-series-2",
    ],
    quizId: "quiz-calculus-analytical-geometry",
    minQuizScore: 80,
  },
  "multivariable-calculus": {
    requiredSections: [
      // Core multivariable calculus & 3D geometry modules
      "geo3d-1",
      "geo3d-2",
      "partial-1",
      "partial-2",
      "integrals-1",
      "integrals-2",
      "coordinate-transformations-1",
      "coordinate-transformations-2",
      "lagrange-1",
      "lagrange-2",
      "optimization-1",
      "optimization-2",
      "vector-1",
      "vector-2",
      "divergence-1",
      "divergence-2",
      "stokes-1",
      "stokes-2",
      "space-curves-1",
      "space-curves-2",
      "vector-fields-approximation-1",
      "vector-fields-approximation-2",
    ],
    quizId: "quiz-multivariable-calculus",
    minQuizScore: 80,
  },
  "linear-algebra": {
    requiredSections: [
      "la-vectors-1",
      "la-vectors-2",
      "la-matrices-1",
      "la-matrices-2",
      "la-systems-1",
      "la-systems-2",
      "la-eigen-1",
      "la-eigen-2",
      "la-ortho-1",
      "la-ortho-2",
      "la-svd-1",
      "la-svd-2",
      ...[...LA_MODULES, ...LA_EXPANSION_MODULES].flatMap((module) => getLaModuleParts(module).map((part) => `la-${module.id}-${part}`)),
    ],
    quizId: "quiz-linear-algebra",
    minQuizScore: 80,
  },
  "probability-statistics": {
    requiredSections: [
      "ps-basics-1",
      "ps-basics-2",
      "ps-rv-1",
      "ps-rv-2",
      "ps-c-joint-1",
      "ps-c-joint-2",
      "ps-a-mgf-1",
      "ps-a-mgf-2",
      "ps-c-clt-1",
      "ps-c-clt-2",
      "ps-desc-1",
      "ps-desc-2",
      "ps-a-ci-1",
      "ps-a-ci-2",
      "ps-a-mle-1",
      "ps-a-mle-2",
      "ps-a-bayes-1",
      "ps-a-bayes-2",
      "ps-hyp-1",
      "ps-hyp-2",
      "ps-b-anova-1",
      "ps-b-anova-2",
      "ps-b-chisq-1",
      "ps-b-chisq-2",
      "ps-reg-1",
      "ps-reg-2",
      "ps-b-mlr-1",
      "ps-b-mlr-2",
    ],
    quizId: "quiz-probability-statistics",
    minQuizScore: 80,
  },
};

// Back-compat: some existing code only needs the plain section-id list.
export const COURSE_CERTIFICATE_SECTIONS = Object.fromEntries(
  Object.entries(COURSE_CERTIFICATE_REQUIREMENTS).map(([id, req]) => [
    id,
    req.requiredSections,
  ])
);

export function getCourseTitle(courseId) {
  return COURSES.find((c) => c.id === courseId)?.title || courseId;
}

export function isCourseCertificateEligible(courseId) {
  return Object.prototype.hasOwnProperty.call(COURSE_CERTIFICATE_REQUIREMENTS, courseId);
}

export function getRequiredSections(courseId) {
  return COURSE_CERTIFICATE_REQUIREMENTS[courseId]?.requiredSections || [];
}

export function getRemainingSections(courseId, completedSections = {}) {
  return getRequiredSections(courseId).filter((id) => completedSections[id] !== true);
}

export function isCourseComplete(courseId, completedSections = {}) {
  if (!isCourseCertificateEligible(courseId)) return false;
  return getRemainingSections(courseId, completedSections).length === 0;
}

/** True only when sectionId is the last required section for courseId. */
export function isFinalSectionOfCourse(courseId, sectionId) {
  const required = getRequiredSections(courseId);
  return required.length > 0 && required[required.length - 1] === sectionId;
}

export function getQuizId(courseId) {
  return COURSE_CERTIFICATE_REQUIREMENTS[courseId]?.quizId || null;
}

export function getMinQuizScore(courseId) {
  return COURSE_CERTIFICATE_REQUIREMENTS[courseId]?.minQuizScore ?? 80;
}

/** Percentage (0-100) the user currently has on a course's quiz, or null if not attempted. */
export function getQuizPercentage(courseId, quizScores = {}) {
  const quizId = getQuizId(courseId);
  if (!quizId) return null;
  const attempt = quizScores[quizId];
  if (!attempt || !Number.isInteger(attempt.score) || !Number.isInteger(attempt.total)
      || attempt.total <= 0 || attempt.score < 0 || attempt.score > attempt.total) return null;
  return Math.round((attempt.score / attempt.total) * 10000) / 100;
}

export function hasPassedQuiz(courseId, quizScores = {}) {
  const pct = getQuizPercentage(courseId, quizScores);
  const attempt = quizScores[getQuizId(courseId)];
  return pct !== null && attempt.score * 100 >= getMinQuizScore(courseId) * attempt.total;
}