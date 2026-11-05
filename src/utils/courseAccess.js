// Which pages are course content (study guides, course hubs, quizzes, exams).
// Guests are sent to sign up before these open; tools, the home page and
// the leaderboard stay public.

import { getModuleSectionIds } from "../data/courseCatalog";

// Quiz and certificate pages have their own sign-in screen, so they aren't listed.
const COURSE_PREFIXES = [
  "/courses/",
  "/mock-exam/",
  "/calculus/",
  "/multivariable-calculus/",
  "/linear-algebra/",
  "/probability-statistics/",
];

// Interactive tools that live under a course URL but stay open to everyone.
const PUBLIC_TOOLS = new Set(["/linear-algebra/matrix-sandbox", "/probability-statistics/bayes-lab"]);

export function isCourseContentPath(pathname = "") {
  const path = String(pathname || "").replace(/[?#].*$/, "").replace(/\/+$/, "") || "/";
  if (PUBLIC_TOOLS.has(path)) return false;
  if (COURSE_PREFIXES.some((prefix) => `${path}/`.startsWith(prefix))) return true;
  // Two-part guides such as /differentiation/1 (and their /differentiation redirect).
  return Boolean(getModuleSectionIds(path));
}

/**
 * Email verification gate is commented out until the main backend is deployed.
 * Uncomment the line below when ready to re-enable email verification.
 */
export function needsEmailVerification(/* user */) {
  // return Boolean(user && user.verificationRequired && !user.emailVerified);
  return false;
}

/** Only same-site paths are allowed as the page to return to after signing in. */
export function safeNextPath(value, fallback = "/dashboard") {
  const next = String(value || "");
  if (!next.startsWith("/") || next.startsWith("//")) return fallback;
  if (/^\/(login|signup|verify-email)(\/|\?|$)/.test(next)) return fallback;
  return next;
}
