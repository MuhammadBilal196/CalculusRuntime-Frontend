import { LA_MODULES, getLaModuleTopics } from "./laModules";

/**
 * Guide MCQ keys (data-section / LaMcq `section`) required before
 * "Mark as complete" unlocks for a progress sectionId.
 * Scores are stored as quizScores[`guide-mcq-${key}`].
 * Sections with an empty list (or missing entry) stay unlocked.
 */
export const SECTION_GUIDE_QUIZ_KEYS = {
  // Calculus & Analytical Geometry
  "limits-1": ["limits-p1"],
  "limits-2": ["limits-p2"],
  "calc-diff-1": ["diff-rules"],
  "calc-diff-2": ["diff-apps", "diff-adv"],
  "calc-int-1": ["int-fund"],
  "calc-int-2": ["int-tech"],
  "calc-series-1": ["ser-p1"],
  "calc-series-2": ["ser-p2"],
  "calc-conics-1": ["con-p1"],
  "calc-conics-2": ["con-p2"],
  "lines-1": ["lines-p1"],
  "lines-2": ["lines-p2"],
  "circles-1": ["circles-p1"],
  "circles-2": ["circles-p2"],
  "advcalc-1": ["advcalc-p1"],
  "advcalc-2": ["advcalc-p2"],
  "ode-1": ["ode-p1"],
  "ode-2": ["ode-p2"],
  "taylor-1": ["taylor-concept", "taylor-formula", "maclaurin-core"],
  "taylor-2": [
    "taylor-catalog",
    "taylor-convergence",
    "taylor-error",
    "taylor-engineering",
    "taylor-challenge",
  ],

  // Developer 3 — Calculus & Analytical Geometry Modules A, B, C
  "space-curves-1": [],
  "space-curves-2": ["space-curves-checkpoint"],
  "vector-motion-1": [],
  "vector-motion-2": ["vector-motion-checkpoint"],
  "parametric-surfaces-1": [],
  "parametric-surfaces-2": ["parametric-surfaces-checkpoint"],
  "polar-calculus-1": [],
  "polar-calculus-2": ["polar-calculus-checkpoint"],
  "solids-revolution-1": [],
  "solids-revolution-2": ["solids-revolution-checkpoint"],
  "volume-cross-sections-1": [],
  "volume-cross-sections-2": ["volume-cross-sections-checkpoint"],
  "numerical-methods-1": [],
  "numerical-methods-2": ["numerical-methods-checkpoint"],
  "improper-integrals-1": [],
  "improper-integrals-2": ["improper-integrals-checkpoint"],
  "complex-numbers-1": [],
  "complex-numbers-2": ["complex-numbers-checkpoint"],
  "hyperbolic-functions-1": [],
  "hyperbolic-functions-2": ["hyperbolic-functions-checkpoint"],
  "laplace-transforms-1": [],
  "laplace-transforms-2": ["laplace-transforms-checkpoint"],
  "fourier-series-1": [],
  "fourier-series-2": ["fourier-series-checkpoint"],

  // Multivariable Calculus
  "partial-1": ["141", "142", "143"],
  "partial-2": ["144", "145", "146", "147"],
  "jacobians-1": [],
  "jacobians-2": ["jacobians"],
  "curvilinear-1": ["curvilinear"],
  "parametrized-surface-area-2": ["parametrized-surface-area"],
  "flux-integrals-general-surfaces-2": ["flux-integrals-general-surfaces"],
  "hessian-optimization": ["hessian-optimization"],
  "vector-1": ["vector-p1"],
  "vector-2": ["vector-p2"],
  "integrals-1": ["integrals-p1"],
  "integrals-2": ["integrals-p2"],
  "lagrange-1": ["lagrange-geometry", "lagrange-math", "lagrange-fields"],
  "lagrange-2": [
    "lagrange-calc",
    "lagrange-multi",
    "lagrange-verify",
    "lagrange-industry",
    "lagrange-challenge",
  ],
  "divergence-1": ["field-concept", "div-formula", "curl-core"],
  "divergence-2": [
    "vector-catalog",
    "vector-identity",
    "div-theorem",
    "stokes-theorem",
    "divcurl-challenge",
  ],
  "stokes-1": ["stokes-f"],
  "stokes-2": ["stokes-a"],
  "geo3d-1": ["geo-dircos", "geo-angle3d", "geo-plane", "geo-ptplane"],
  "geo3d-2": ["geo-line3d", "geo-skew", "geo-quadric"],

  // Linear Algebra
  ...Object.fromEntries(LA_MODULES.flatMap((module) =>
    [1, 2].map((part) => [
      `la-${module.id}-${part}`,
      getLaModuleTopics(module, part).map((topic) => topic.quizKey),
    ]),
  )),
  "la-lineq-1": ["la-le-forms", "la-le-graph"],
  "la-lineq-2": ["la-le-sys", "la-le-solve"],
  "la-vectors-1": ["la-v-intro", "la-v-ops"],
  "la-vectors-2": ["la-v-span", "la-v-indep"],
  "la-matrices-1": ["la-m-intro", "la-m-ops"],
  "la-matrices-2": ["la-m-det", "la-m-inv", "la-m-rank"],
  "la-systems-1": ["la-s-intro", "la-s-gauss"],
  "la-systems-2": ["la-s-rank", "la-s-geo"],
  "la-eigen-1": ["la-e-intro", "la-e-char"],
  "la-eigen-2": ["la-e-diag", "la-e-apps"],

  "la-quadratic-1": [],
  "la-quadratic-2": ["la-quadratic-checkpoint"],
  "la-change-basis-1": [],
  "la-change-basis-2": ["la-change-basis-checkpoint"],
  "la-affine-1": [],
  "la-affine-2": ["la-affine-checkpoint"],
  "la-pca-1": [],
  "la-pca-2": ["la-pca-checkpoint"],
  "la-markov-1": [],
  "la-markov-2": ["la-markov-checkpoint"],
  "la-linear-programming-1": [],
  "la-linear-programming-2": ["la-linear-programming-checkpoint"],

  "la-complex-1": [],
  "la-complex-2": ["la-complex-checkpoint"],
  // Module A: Part 1 is reading; each Part 2 has one 20-question checkpoint.
  "la-a-lu-1": [],
  "la-a-lu-2": ["la-a-lu-checkpoint"],
  "la-a-cholesky-1": [],
  "la-a-cholesky-2": ["la-a-cholesky-checkpoint"],
  "la-a-jordan-1": [],
  "la-a-jordan-2": ["la-a-jordan-checkpoint"],
  "la-a-norms-1": [],
  "la-a-norms-2": ["la-a-norms-checkpoint"],

  // Probability & Statistics
  "ps-basics-1": ["ps-b-intro", "ps-b-combo"],
  "ps-basics-2": ["ps-b-cond", "ps-b-bayes"],
  "ps-rv-1": ["ps-rv-intro", "ps-rv-moments"],
  "ps-rv-2": ["ps-rv-cont", "ps-rv-named"],
  "ps-desc-1": ["ps-d-center", "ps-d-quant"],
  "ps-desc-2": ["ps-d-spread", "ps-d-plots"],
  "ps-hyp-1": ["ps-h-framework", "ps-h-tests"],
  "ps-hyp-2": ["ps-h-pval", "ps-h-errors"],
  "ps-reg-1": ["ps-r-corr", "ps-r-assoc"],
  "ps-reg-2": ["ps-r-fit", "ps-r-resid"],
  // Dev4 Module A/B/C
  "ps-a-bayes-1": [], "ps-a-bayes-2": ["ps-a-bayes-checkpoint"],
  "ps-a-mle-1": [], "ps-a-mle-2": ["ps-a-mle-checkpoint"],
  "ps-a-ci-1": [], "ps-a-ci-2": ["ps-a-ci-checkpoint"],
  "ps-a-mgf-1": [], "ps-a-mgf-2": ["ps-a-mgf-checkpoint"],
  "ps-b-anova-1": [], "ps-b-anova-2": ["ps-b-anova-checkpoint"],
  "ps-b-chisq-1": [], "ps-b-chisq-2": ["ps-b-chisq-checkpoint"],
  "ps-b-nonparam-1": [], "ps-b-nonparam-2": ["ps-b-nonparam-checkpoint"],
  "ps-b-mlr-1": [], "ps-b-mlr-2": ["ps-b-mlr-checkpoint"],
  "ps-c-joint-1": [], "ps-c-joint-2": ["ps-c-joint-checkpoint"],
  "ps-c-mvn-1": [], "ps-c-mvn-2": ["ps-c-mvn-checkpoint"],
  "ps-c-stoch-1": [], "ps-c-stoch-2": ["ps-c-stoch-checkpoint"],
  "ps-c-clt-1": [], "ps-c-clt-2": ["ps-c-clt-checkpoint"],
};

export const SECTION_QUIZ_PASS_PERCENT = 80;

export function guideQuizId(sectionKey) {
  return `guide-mcq-${sectionKey}`;
}

export function getSectionGuideQuizKeys(sectionId) {
  return SECTION_GUIDE_QUIZ_KEYS[sectionId] || [];
}

export function getQuizAttemptPercent(attempt) {
  if (!attempt || !attempt.total) return null;
  return Math.round((attempt.score / attempt.total) * 100);
}

/** True when every required guide quiz for this section is ≥ 80%. */
export function hasPassedSectionQuizzes(sectionId, quizScores = {}) {
  const keys = getSectionGuideQuizKeys(sectionId);
  if (!keys.length) return true;
  return keys.every((key) => {
    const pct = getQuizAttemptPercent(quizScores[guideQuizId(key)]);
    return pct !== null && pct >= SECTION_QUIZ_PASS_PERCENT;
  });
}

export function getSectionQuizGateStatus(sectionId, quizScores = {}) {
  const keys = getSectionGuideQuizKeys(sectionId);
  if (!keys.length) {
    return { locked: false, required: [], missing: [], failed: [] };
  }
  const missing = [];
  const failed = [];
  keys.forEach((key) => {
    const id = guideQuizId(key);
    const pct = getQuizAttemptPercent(quizScores[id]);
    if (pct === null) missing.push(key);
    else if (pct < SECTION_QUIZ_PASS_PERCENT) failed.push({ key, pct });
  });
  return {
    locked: missing.length > 0 || failed.length > 0,
    required: keys,
    missing,
    failed,
  };
}
