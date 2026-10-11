/** Badge definitions and unlock logic for Badges & Achievements (pure functions). */

export const BADGES = [
  {
    id: "first-module",
    title: "First Module Finished",
    description: "Complete both parts of any module.",
    icon: "🎓",
    progress: (s) => [Math.min(s.finishedModules, 1), 1],
  },
  {
    id: "streak-7",
    title: "7-Day Streak",
    description: "Study on seven days in a row.",
    icon: "🔥",
    progress: (s) => [Math.min(s.streak, 7), 7],
  },
  {
    id: "perfect-quiz",
    title: "Perfect Quiz",
    description: "Score 100% on any quiz.",
    icon: "💯",
    progress: (s) => [Math.min(s.perfectQuizzes, 1), 1],
  },
  {
    id: "certificate",
    title: "Certificate Earned",
    description: "Earn a course certificate.",
    icon: "📜",
    progress: (s) => [Math.min(s.certificateCount, 1), 1],
  },
  {
    id: "practice-100",
    title: "100 Practice Questions",
    description: "Answer 100 questions in the Practice Arena.",
    icon: "🏋️",
    progress: (s) => [Math.min(s.practiceCount, 100), 100],
  },
];

/** Collect truthy section ids from a flat, nested or array-based completedSections value. */
export function flattenIds(value, out = new Set()) {
  if (!value) return out;
  if (Array.isArray(value)) {
    value.forEach((v) => {
      if (typeof v === "string") out.add(v);
    });
    return out;
  }
  if (typeof value === "object") {
    Object.entries(value).forEach(([k, v]) => {
      if (v && typeof v === "object") flattenIds(v, out);
      else if (v) out.add(k);
    });
  }
  return out;
}

/** A module is finished when both its "-1" and "-2" sections are completed. */
export function countFinishedModules(completedSections) {
  const ids = flattenIds(completedSections);
  const bases = new Set();
  ids.forEach((id) => {
    const m = /^(.+)-([12])$/.exec(id);
    if (m) bases.add(m[1]);
  });
  let n = 0;
  bases.forEach((b) => {
    if (ids.has(`${b}-1`) && ids.has(`${b}-2`)) n += 1;
  });
  return n;
}

export function countPerfectQuizzes(quizScores) {
  return Object.values(quizScores || {}).filter(
    (q) => q && Number(q.total) > 0 && Number(q.score) >= Number(q.total),
  ).length;
}

/** Reads the Practice Arena tracker JSON and returns how many questions were answered. */
export function parsePracticeCount(raw) {
  if (raw == null) return 0;
  try {
    const v = typeof raw === "string" ? JSON.parse(raw) : raw;
    if (typeof v === "number") return v;
    if (v && typeof v === "object") {
      for (const key of ["total", "attempted", "answered", "count", "questions"]) {
        if (Number.isFinite(Number(v[key]))) return Number(v[key]);
      }
      const c = Number(v.correct);
      const w = Number(v.wrong ?? v.incorrect);
      if (Number.isFinite(c) && Number.isFinite(w)) return c + w;
    }
  } catch {
    /* ignore malformed data */
  }
  return 0;
}

/** Counts saved certificates for a user in a Storage-like object. */
export function countCertificates(storage, username) {
  let count = 0;
  for (let i = 0; i < storage.length; i += 1) {
    const key = storage.key(i);
    if (!/certificate/i.test(key) || (username && !key.includes(username))) continue;
    try {
      const v = JSON.parse(storage.getItem(key));
      if (Array.isArray(v)) count += v.length;
      else if (v && typeof v === "object") count += Object.keys(v).length;
    } catch {
      /* ignore */
    }
  }
  return count;
}

export function computeStats({ completedSections, quizScores, streak, practiceCount, certificateCount }) {
  return {
    finishedModules: countFinishedModules(completedSections),
    perfectQuizzes: countPerfectQuizzes(quizScores),
    streak: Number(streak) || 0,
    practiceCount: Number(practiceCount) || 0,
    certificateCount: Number(certificateCount) || 0,
  };
}

export function isUnlocked(badge, stats) {
  const [current, target] = badge.progress(stats);
  return current >= target;
}

/** Keeps earlier unlocks forever and reports the badges that unlocked just now. */
export function mergeUnlocked(previous, stats, nowIso) {
  const unlocked = { ...(previous || {}) };
  const newly = [];
  BADGES.forEach((b) => {
    if (isUnlocked(b, stats) && !unlocked[b.id]) {
      unlocked[b.id] = nowIso;
      newly.push(b);
    }
  });
  return { unlocked, newly };
}
