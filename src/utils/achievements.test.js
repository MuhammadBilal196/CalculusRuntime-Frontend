import {
  BADGES, flattenIds, countFinishedModules, countPerfectQuizzes, parsePracticeCount,
  countCertificates, computeStats, isUnlocked, mergeUnlocked,
} from "./achievements";

const fakeStorage = (obj) => {
  const keys = Object.keys(obj);
  return { length: keys.length, key: (i) => keys[i], getItem: (k) => obj[k] };
};

describe("achievements", () => {
  test("flattenIds handles flat, nested and array shapes", () => {
    expect([...flattenIds({ a: true, b: false })]).toEqual(["a"]);
    expect([...flattenIds({ ps: { x: true } })]).toEqual(["x"]);
    expect([...flattenIds(["a", "b"])]).toEqual(["a", "b"]);
  });
  test("a module needs both parts completed", () => {
    expect(countFinishedModules({ "ps-queueing-1": true })).toBe(0);
    expect(countFinishedModules({ "ps-queueing-1": true, "ps-queueing-2": true })).toBe(1);
    expect(countFinishedModules({ "a-1": true, "a-2": true, "b-1": true, "b-2": true })).toBe(2);
  });
  test("perfect quizzes", () => {
    expect(countPerfectQuizzes({ q1: { score: 3, total: 3 }, q2: { score: 2, total: 3 }, q3: { score: 0, total: 0 } })).toBe(1);
  });
  test("parsePracticeCount reads several shapes", () => {
    expect(parsePracticeCount("120")).toBe(120);
    expect(parsePracticeCount('{"total":40}')).toBe(40);
    expect(parsePracticeCount('{"correct":30,"wrong":12}')).toBe(42);
    expect(parsePracticeCount("not json")).toBe(0);
    expect(parsePracticeCount(null)).toBe(0);
  });
  test("countCertificates only counts the user's certificate keys", () => {
    const s = fakeStorage({
      calcvoyager_certificates_ali: JSON.stringify([{ id: 1 }, { id: 2 }]),
      calcvoyager_certificates_sam: JSON.stringify([{ id: 9 }]),
      other: "[]",
    });
    expect(countCertificates(s, "ali")).toBe(2);
  });
  test("badge thresholds", () => {
    const s = computeStats({ completedSections: {}, quizScores: {}, streak: 7, practiceCount: 99, certificateCount: 0 });
    const by = Object.fromEntries(BADGES.map((b) => [b.id, isUnlocked(b, s)]));
    expect(by["streak-7"]).toBe(true);
    expect(by["practice-100"]).toBe(false);
    expect(by["first-module"]).toBe(false);
  });
  test("mergeUnlocked keeps old unlocks and reports new ones once", () => {
    const stats = computeStats({ completedSections: {}, quizScores: { q: { score: 1, total: 1 } }, streak: 0, practiceCount: 0, certificateCount: 0 });
    const first = mergeUnlocked({}, stats, "2026-10-11T00:00:00Z");
    expect(first.newly.map((b) => b.id)).toEqual(["perfect-quiz"]);
    const second = mergeUnlocked(first.unlocked, stats, "2026-10-12T00:00:00Z");
    expect(second.newly).toEqual([]);
    expect(second.unlocked["perfect-quiz"]).toBe("2026-10-11T00:00:00Z");
    const dropped = mergeUnlocked(first.unlocked, computeStats({}), "2026-10-13T00:00:00Z");
    expect(dropped.unlocked["perfect-quiz"]).toBe("2026-10-11T00:00:00Z");
  });
});
