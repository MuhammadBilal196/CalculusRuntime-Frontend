/**
 * Topic-wise Analytics — pure helpers (no React), so they can be unit-tested.
 *
 * Input: the answer records saved by recordQuizAttempt (utils/quizAttempts.js),
 * from topic quizzes ("guide"), the Practice Arena ("practice"), mock exams
 * ("mock") and the certificate exam ("certificate").
 *
 * Rules:
 *  - First-answer rule: if the same question was answered several times, only the
 *    FIRST answer counts, so retrying until correct does not inflate accuracy.
 *  - The same practice-bank question seen in the Practice Arena and in a mock exam
 *    counts as one question.
 *  - A topic needs MIN_ANSWERS_FOR_STATUS answers before it is called Strong / Weak.
 *  - Topics in the catalogue with no answers are shown as "Not started".
 */

export const MIN_ANSWERS_FOR_STATUS = 3;
export const STRONG_PCT = 80;
export const WEAK_PCT = 60;
export const DIFFICULTIES = ["Easy", "Medium", "Hard"];

export const COURSE_LABELS = {
  "calculus-analytical-geometry": "Calculus & Analytical Geometry",
  "multivariable-calculus": "Multivariable Calculus",
  "linear-algebra": "Linear Algebra",
  "probability-statistics": "Probability & Statistics",
};

export const SOURCE_LABELS = {
  guide: "Topic quizzes",
  practice: "Practice Arena",
  mock: "Mock exams",
  certificate: "Certificate exam",
};

export const STATUS_LABELS = {
  strong: "Strong",
  developing: "Developing",
  weak: "Needs work",
  few: "Too few answers",
  "not-started": "Not started",
};

const time = (record) => {
  const t = Date.parse(record?.occurredAt);
  return Number.isFinite(t) ? t : 0;
};

/**
 * Identity of a question across attempts. Practice and mock answers carry
 * responseId "<bank>:<questionId>", so the same bank question matches in both.
 * Topic quizzes use a per-attempt counter as responseId, so they are keyed by quiz + question.
 */
export function questionKey(record) {
  if ((record.source === "practice" || record.source === "mock") && record.responseId) {
    return `bank:${record.responseId}`;
  }
  return `${record.source}:${record.quizId}:${record.questionId}`;
}

/** Keep only the first answer for each question (by time, then by saved order). */
export function firstAnswers(records) {
  const ordered = (records || [])
    .map((record, order) => ({ record, order }))
    .sort((a, b) => time(a.record) - time(b.record) || a.order - b.order);
  const seen = new Set();
  const out = [];
  ordered.forEach(({ record }) => {
    const key = questionKey(record);
    if (seen.has(key)) return;
    seen.add(key);
    out.push(record);
  });
  return out;
}

/**
 * Topic name for grouping. Topic quizzes are saved with their quiz title
 * (e.g. "Surface Curvature and Geodesics — Quiz"), so the "— Quiz" ending is
 * removed and they group with the same topic from the Practice Arena.
 */
export function topicOf(record) {
  const topic = typeof record.topic === "string" ? record.topic.trim() : "";
  const cleaned = topic
    .replace(/\s*[—–:-]\s*(topic\s+)?(quiz|checkpoint|mcqs?)\s*$/i, "")
    .replace(/\s+(quiz|checkpoint)$/i, "")
    .trim();
  return cleaned || topic || "Other";
}

export function courseOf(record) {
  return record.courseId && COURSE_LABELS[record.courseId] ? record.courseId : "other";
}

/** Apply the page filters. "all" (or empty) means no filter. */
export function filterAttempts(records, { courseId = "all", source = "all", difficulty = "all" } = {}) {
  return (records || []).filter((r) =>
    (courseId === "all" || courseOf(r) === courseId)
    && (source === "all" || r.source === source)
    && (difficulty === "all" || r.difficulty === difficulty));
}

export function topicStatus(answered, pct) {
  if (!answered) return "not-started";
  if (answered < MIN_ANSWERS_FOR_STATUS) return "few";
  if (pct >= STRONG_PCT) return "strong";
  if (pct >= WEAK_PCT) return "developing";
  return "weak";
}

const pctOf = (correct, total) => (total ? Math.round((correct / total) * 100) : 0);

/**
 * Build the analytics view.
 * @param records  raw saved records (all sources)
 * @param filters  { courseId, source, difficulty }
 * @param catalog  [{ topic, courseId }] — every topic that exists, for "Not started" rows
 */
export function buildAnalytics(records, filters = {}, catalog = []) {
  const counted = firstAnswers(filterAttempts(records, filters));
  const rows = new Map();
  const rowKey = (courseId, topic) => `${courseId}::${topic}`;

  counted.forEach((r) => {
    const courseId = courseOf(r);
    const topic = topicOf(r);
    const key = rowKey(courseId, topic);
    const row = rows.get(key) || {
      key, topic, courseId, answered: 0, correct: 0, lastAt: 0,
      sources: new Set(), byDifficulty: {},
    };
    row.answered += 1;
    if (r.correct) row.correct += 1;
    row.lastAt = Math.max(row.lastAt, time(r));
    row.sources.add(r.source);
    if (r.difficulty) {
      const d = row.byDifficulty[r.difficulty] || { correct: 0, total: 0 };
      d.total += 1;
      if (r.correct) d.correct += 1;
      row.byDifficulty[r.difficulty] = d;
    }
    rows.set(key, row);
  });

  // Topics nobody has answered yet — only when the source filter could include them.
  const { courseId = "all", difficulty = "all", source = "all" } = filters;
  if (source === "all" || source === "practice" || source === "mock") {
    (catalog || []).forEach(({ topic, courseId: c }) => {
      if (!topic || (courseId !== "all" && c !== courseId)) return;
      const key = rowKey(c, topic);
      if (!rows.has(key)) {
        rows.set(key, {
          key, topic, courseId: c, answered: 0, correct: 0, lastAt: 0,
          sources: new Set(), byDifficulty: {},
        });
      }
    });
  }

  const topics = [...rows.values()].map((row) => {
    const pct = pctOf(row.correct, row.answered);
    return {
      ...row,
      sources: [...row.sources],
      pct,
      status: topicStatus(row.answered, pct),
    };
  });

  const total = counted.length;
  const correct = counted.filter((r) => r.correct).length;
  const statusCounts = topics.reduce((acc, t) => ({ ...acc, [t.status]: (acc[t.status] || 0) + 1 }), {});

  const byDifficulty = DIFFICULTIES.map((d) => {
    const list = counted.filter((r) => r.difficulty === d);
    const c = list.filter((r) => r.correct).length;
    return { key: d, correct: c, total: list.length, pct: pctOf(c, list.length) };
  });

  const bySource = Object.keys(SOURCE_LABELS).map((s) => {
    const list = counted.filter((r) => r.source === s);
    const c = list.filter((r) => r.correct).length;
    return { key: s, label: SOURCE_LABELS[s], correct: c, total: list.length, pct: pctOf(c, list.length) };
  }).filter((row) => row.total > 0);

  const weakest = topics
    .filter((t) => t.status === "weak" || t.status === "developing")
    .sort((a, b) => a.pct - b.pct || b.answered - a.answered)
    .slice(0, 5);

  return {
    total,
    correct,
    pct: pctOf(correct, total),
    rawCount: filterAttempts(records, filters).length,
    topics,
    statusCounts,
    byDifficulty,
    bySource,
    weakest,
    difficultyFilter: difficulty,
  };
}

/** Sort topic rows for the table. */
export function sortTopics(topics, sortBy = "weakest") {
  const list = [...topics];
  const started = (t) => (t.answered ? 0 : 1); // not-started rows always go last
  const byName = (a, b) => a.topic.localeCompare(b.topic);
  if (sortBy === "name") return list.sort(byName);
  if (sortBy === "most") return list.sort((a, b) => started(a) - started(b) || b.answered - a.answered || byName(a, b));
  if (sortBy === "recent") return list.sort((a, b) => started(a) - started(b) || b.lastAt - a.lastAt || byName(a, b));
  // weakest first; "too few answers" after rated topics
  const rated = (t) => (t.status === "few" ? 1 : 0);
  return list.sort((a, b) => started(a) - started(b) || rated(a) - rated(b) || a.pct - b.pct || byName(a, b));
}

/**
 * Topic catalogue from the practice banks: every distinct (course, topic) pair,
 * plus the module each topic belongs to (used to build practice links).
 * @param banksByCourse { [courseId]: question[] }
 */
export function buildCatalog(banksByCourse) {
  const seen = new Map();
  Object.entries(banksByCourse || {}).forEach(([courseId, bank]) => {
    (bank || []).forEach((q) => {
      const topic = typeof q?.topic === "string" ? q.topic.trim() : "";
      if (!topic) return;
      const key = `${courseId}::${topic}`;
      if (!seen.has(key)) seen.set(key, { topic, courseId, module: q.module || null });
    });
  });
  return [...seen.values()];
}

/**
 * Where "Practise this topic" should go. Uses the topic itself if the Practice
 * Arena offers it, otherwise its module, otherwise the course page.
 * @param selections  the Practice Arena's PRACTICE_SELECTIONS object
 */
export function practiceLinkFor(row, catalog, selections) {
  const has = (name) => !!name && !!selections && Object.prototype.hasOwnProperty.call(selections, name);
  if (has(row.topic)) return `/practice?topic=${encodeURIComponent(row.topic)}`;
  const entry = (catalog || []).find((c) => c.topic === row.topic && c.courseId === row.courseId);
  if (entry && has(entry.module)) return `/practice?topic=${encodeURIComponent(entry.module)}`;
  if (COURSE_LABELS[row.courseId]) return `/courses/${row.courseId}`;
  return "/practice";
}

export function formatWhen(ms, now = Date.now()) {
  if (!ms) return "—";
  const days = Math.floor((now - ms) / 86400000);
  if (days <= 0) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days} days ago`;
  return new Date(ms).toLocaleDateString();
}
