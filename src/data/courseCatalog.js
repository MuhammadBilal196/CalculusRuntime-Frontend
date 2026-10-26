// Every study module of every course, with the section ids its pages mark
// complete. Core modules are the ones the course certificate requires
// (courseCompletion.js); everything else is optional depth.
//
// Used by the profile, certificates page, course registration and points.

import { COURSES } from "./courses";
import { getRequiredSections } from "./courseCompletion";
import { LA_MODULES, LA_EXPANSION_MODULES, getLaModuleParts, getLaModulePath } from "./laModules";
import { PS_EXPANSION_MODULES, getPsModulePath } from "./psModules";

export const CATALOG_COURSE_IDS = [
  "calculus-analytical-geometry",
  "multivariable-calculus",
  "linear-algebra",
  "probability-statistics",
];

/** Module base path → section id prefix (pages mark `${prefix}-1` / `-2`). */
const TWO_PART_PREFIX = {
  // Calculus & Analytical Geometry
  "/limits-continuity": "limits",
  "/differentiation": "calc-diff",
  "/integration": "calc-int",
  "/sequences-series": "calc-series",
  "/conic-sections": "calc-conics",
  "/taylor-series": "taylor",
  "/lines-geometry": "lines",
  "/circles-tangents": "circles",
  "/advanced-calculus": "advcalc",
  "/differential-equations": "ode",
  "/space-curves": "space-curves",
  "/vector-motion": "vector-motion",
  "/parametric-surfaces": "parametric-surfaces",
  "/polar-calculus": "polar-calculus",
  "/solids-revolution": "solids-revolution",
  "/volume-cross-sections": "volume-cross-sections",
  "/numerical-methods": "numerical-methods",
  "/improper-integrals-advanced": "improper-integrals",
  "/complex-numbers": "complex-numbers",
  "/hyperbolic-functions": "hyperbolic-functions",
  "/laplace-transforms": "laplace-transforms",
  "/fourier-series": "fourier-series",
  "/gamma-beta-functions": "gamma-beta",
  "/leibniz-rule": "leibniz-rule",
  "/fourier-transforms": "fourier-transforms",
  "/z-transforms": "z-transforms",
  "/intro-pdes": "intro-pdes",
  "/orthogonal-polynomials": "orthogonal-polynomials",
  "/pointwise-uniform-convergence": "pointwise-uniform-convergence",
  "/interchanging-limits": "interchanging-limits",
  "/power-series-ode": "power-series-ode",
  "/frobenius-method": "frobenius-method",
  "/analytic-functions": "analytic-functions",
  "/contour-integrals": "contour-integrals",
  // Multivariable Calculus
  "/partial-derivatives": "partial",
  "/vector-calculus": "vector",
  "/multiple-integrals": "integrals",
  "/lagrange-multipliers": "lagrange",
  "/divergence-curl": "divergence",
  "/stokes-theorem": "stokes",
  "/3d-geometry": "geo3d",
  "/coordinate-transformations": "coordinate-transformations",
  "/constrained-unconstrained-optimization": "optimization",
  "/vector-fields-approximation": "vector-fields-approximation",
  // Linear Algebra
  "/linear-algebra/linear-equations": "la-lineq",
  "/linear-algebra/vectors": "la-vectors",
  "/linear-algebra/matrices": "la-matrices",
  "/linear-algebra/systems": "la-systems",
  "/linear-algebra/eigen": "la-eigen",
  "/linear-algebra/transformations": "la-transform",
  "/linear-algebra/orthogonality": "la-ortho",
  "/linear-algebra/svd": "la-svd",
  // Probability & Statistics
  "/probability-statistics/probability-basics": "ps-basics",
  "/probability-statistics/random-variables": "ps-rv",
  "/probability-statistics/descriptive-statistics": "ps-desc",
  "/probability-statistics/hypothesis-testing": "ps-hyp",
  "/probability-statistics/regression-correlation": "ps-reg",
  "/probability-statistics/information-theory": "ps-it",
  "/probability-statistics/survival-reliability": "ps-sv",
  "/probability-statistics/sequential-multiple-decisions": "ps-sd",
};

/** Single-page modules mark one section id. */
const SINGLE_PAGE_SECTION = {
  "/multivariable-calculus/potential-theory": "potential-theory",
  "/multivariable-calculus/differential-forms": "differential-forms",
  "/multivariable-calculus/advanced-integration": "advanced-integration",
  "/multivariable-calculus/surface-geometry": "surface-geometry",
  "/multivariable-calculus/moving-domains": "moving-domains",
  "/multivariable-calculus/nonlinear-dynamics": "nonlinear-dynamics",
};

function basePath(path = "") {
  return path.replace(/#.*$/, "").replace(/\/[12]\/?$/, "");
}

function laSectionIds(path) {
  const module = [...LA_MODULES, ...LA_EXPANSION_MODULES].find(
    (m) => basePath(getLaModulePath(m)) === basePath(path),
  );
  return module ? getLaModuleParts(module).map((part) => `la-${module.id}-${part}`) : null;
}

/** Section ids a module page marks complete, or null for tools/quizzes. */
export function getModuleSectionIds(path) {
  const base = basePath(path);
  if (SINGLE_PAGE_SECTION[base]) return [SINGLE_PAGE_SECTION[base]];
  if (TWO_PART_PREFIX[base]) return [`${TWO_PART_PREFIX[base]}-1`, `${TWO_PART_PREFIX[base]}-2`];
  if (base.startsWith("/linear-algebra/")) return laSectionIds(path);
  const ps = PS_EXPANSION_MODULES.find((m) => basePath(getPsModulePath(m)) === base);
  if (ps && TWO_PART_PREFIX[base]) return [`${TWO_PART_PREFIX[base]}-1`, `${TWO_PART_PREFIX[base]}-2`];
  return null;
}

const topicCache = {};

/**
 * Study modules of a course, in course order:
 *   { id, title, description, path, sectionIds, core }
 */
export function getCourseTopics(courseId) {
  if (topicCache[courseId]) return topicCache[courseId];
  const course = COURSES.find((c) => c.id === courseId);
  const required = new Set(getRequiredSections(courseId));
  const seen = new Set();
  const topics = [];
  for (const module of course?.modules || []) {
    const sectionIds = getModuleSectionIds(module.path);
    if (!sectionIds || seen.has(basePath(module.path))) continue;
    seen.add(basePath(module.path));
    topics.push({
      id: basePath(module.path).replace(/^\//, "").replace(/\//g, "-"),
      title: module.title,
      description: module.description,
      path: module.path,
      sectionIds,
      core: sectionIds.some((id) => required.has(id)),
    });
  }
  topicCache[courseId] = topics;
  return topics;
}

/** Progress of one course: { done, total, pct, coreDone, coreTotal, corePct }. */
export function getCourseProgress(courseId, completedSections = {}) {
  const topics = getCourseTopics(courseId);
  const all = topics.flatMap((t) => t.sectionIds);
  const core = getRequiredSections(courseId);
  const done = all.filter((id) => completedSections[id]).length;
  const coreDone = core.filter((id) => completedSections[id]).length;
  return {
    done,
    total: all.length,
    pct: all.length ? Math.round((done / all.length) * 100) : 0,
    coreDone,
    coreTotal: core.length,
    corePct: core.length ? Math.round((coreDone / core.length) * 100) : 0,
  };
}

/** Course a guide URL belongs to, or null (tools, or a guide shared by two courses). */
export function findCourseForPath(pathname = "") {
  if (!getModuleSectionIds(pathname)) return null;
  const base = basePath(pathname);
  const owners = CATALOG_COURSE_IDS.filter((courseId) =>
    getCourseTopics(courseId).some((t) => basePath(t.path) === base),
  );
  return owners.length === 1 ? owners[0] : null;
}

/** Courses a student has already started (any completed section). */
export function coursesWithProgress(completedSections = {}) {
  return CATALOG_COURSE_IDS.filter((courseId) =>
    getCourseTopics(courseId).some((t) => t.sectionIds.some((id) => completedSections[id])),
  );
}

/** Short metadata for course cards. */
export const COURSE_META = {
  "calculus-analytical-geometry": { short: "Calculus", icon: "∫", tone: "gold" },
  "multivariable-calculus": { short: "Multivariable", icon: "∇", tone: "teal" },
  "linear-algebra": { short: "Linear Algebra", icon: "A", tone: "blue" },
  "probability-statistics": { short: "Prob & Stats", icon: "P", tone: "purple" },
};

/** Page for one section id of a topic (part 1 → /x/1, part 2 → /x/2). */
function sectionPath(topic, sectionId) {
  if (topic.sectionIds.length === 1) return topic.path;
  const part = topic.sectionIds.indexOf(sectionId) + 1;
  return `${basePath(topic.path)}/${part || 1}`;
}

/**
 * Where to continue a course: the first unfinished core module, then the
 * first unfinished optional one. Returns { topic, path } or null when done.
 */
export function getNextStep(courseId, completedSections = {}) {
  const topics = getCourseTopics(courseId);
  const ordered = [...topics.filter((t) => t.core), ...topics.filter((t) => !t.core)];
  for (const topic of ordered) {
    const next = topic.sectionIds.find((id) => !completedSections[id]);
    if (next) return { topic, path: sectionPath(topic, next) };
  }
  return null;
}
