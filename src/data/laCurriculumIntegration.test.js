import { LA_MODULES } from './laModules';
import { LA_PRACTICE_BANK, LA_TOPICS } from './laPracticeBank';

const added = LA_PRACTICE_BANK.filter((q) => q.id >= 180000 && q.id < 180900);
test('900 new unique questions integrate without legacy ID or prompt collisions', () => {
  expect(added).toHaveLength(900);
  expect(LA_PRACTICE_BANK).toHaveLength(2427);
  const ids = LA_PRACTICE_BANK.map((q) => q.id);
  expect(new Set(ids).size).toBe(ids.length);
  const legacyPrompts = new Set(LA_PRACTICE_BANK.filter((q) => q.id < 180000).map((q) => q.question));
  expect(new Set(added.map((q) => q.question)).size).toBe(900);
  added.forEach((q) => {
    expect(legacyPrompts.has(q.question)).toBe(false);
    expect(new Set(q.options).size).toBe(4);
    expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
    expect(q.correctAnswer).toBeLessThan(4);
    expect(q.explanation.length).toBeGreaterThan(10);
  });
  for (let slot = 0; slot < 4; slot += 1) expect(added.filter((q) => q.correctAnswer === slot)).toHaveLength(225);
});

test.each(LA_MODULES)('$title has 300 questions and 25 per topic per difficulty', (module) => {
  const topics = module.topics.map((t) => t.title);
  expect(added.filter((q) => topics.includes(q.topic))).toHaveLength(300);
  for (const topic of topics) {
    expect(LA_TOPICS).toContain(topic);
    for (const difficulty of ['Easy', 'Medium', 'Hard']) {
      expect(added.filter((q) => q.topic === topic && q.difficulty === difficulty)).toHaveLength(25);
    }
  }
});
