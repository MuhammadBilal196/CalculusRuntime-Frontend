import { CALC_AG_PRACTICE_BANK } from './calcAgPracticeBank';
import { MV_PRACTICE_BANK } from './mvPracticeBank';
import { PS_PRACTICE_BANK } from './psPracticeBank';
import { LA_MODULES } from './laModules';
import { LA_PRACTICE_BANK, LA_TOPICS } from './laPracticeBank';

const added = LA_PRACTICE_BANK.filter((q) => q.id >= 180000 && q.id < 180900);
test('900 new unique questions integrate without legacy ID or prompt collisions', () => {
  expect(added).toHaveLength(900);
  expect(LA_PRACTICE_BANK).toHaveLength(2577);
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


const allCourseBanks = {
  calculus: CALC_AG_PRACTICE_BANK,
  multivariable: MV_PRACTICE_BANK,
  linearAlgebra: LA_PRACTICE_BANK,
  probability: PS_PRACTICE_BANK,
};

test('every course bank has unique integer or nonempty string question IDs within its own bank', () => {
  for (const [course, bank] of Object.entries(allCourseBanks)) {
    expect(bank.length).toBeGreaterThan(0);
    const seen = new Set();
    for (const q of bank) {
      const validId = Number.isInteger(q.id) || (typeof q.id === 'string' && q.id.trim().length > 0);
      const key = String(q.id);
      expect({ course, id: q.id, validId, duplicate: seen.has(key) })
        .toEqual({ course, id: q.id, validId: true, duplicate: false });
      seen.add(key);
    }
  }
});

test('every practice question has renderable text, a supported difficulty and an in-range answer key', () => {
  for (const [course, bank] of Object.entries(allCourseBanks)) {
    for (const q of bank) {
      const label = `${course}: ${q.id}`;
      for (const field of ['topic', 'question', 'explanation']) {
        expect({ label, field, valid: typeof q[field] === 'string' && q[field].trim().length > 0 })
          .toEqual({ label, field, valid: true });
      }
      expect(['Easy', 'Medium', 'Hard']).toContain(q.difficulty);
      // Legacy questions intentionally have three choices; the UI supports variable option counts.
      expect({ label, options: Array.isArray(q.options) && q.options.length >= 3 })
        .toEqual({ label, options: true });
      expect({ label, key: Number.isInteger(q.correctAnswer) && q.correctAnswer >= 0 && q.correctAnswer < q.options.length })
        .toEqual({ label, key: true });
    }
  }
});

test('all practice choices are nonempty and distinct so identical text cannot be both right and wrong', () => {
  for (const [course, bank] of Object.entries(allCourseBanks)) {
    for (const q of bank) {
      const label = `${course}: ${q.id}`;
      expect({ label, valid: q.options.every((o) => typeof o === 'string' && o.trim().length > 0) })
        .toEqual({ label, valid: true });
      expect({ label, count: new Set(q.options.map((o) => o.trim())).size })
        .toEqual({ label, count: q.options.length });
    }
  }
});

test('six expansion topics have 150 distinct questions with exact difficulty allocation', () => {
  const added = LA_PRACTICE_BANK.filter((q) => Number.isInteger(q.id) && q.id >= 120000 && q.id < 120150);
  expect(added).toHaveLength(150);
  expect(new Set(added.map((q) => q.question)).size).toBe(150);
  for (const difficulty of ['Easy','Medium','Hard']) expect(added.filter((q) => q.difficulty === difficulty)).toHaveLength(50);
  const topics = [...new Set(added.map((q) => q.topic))];
  expect(topics).toHaveLength(6);
  for (const topic of topics) {
    const bank = added.filter((q) => q.topic === topic);
    expect(bank).toHaveLength(25);
    expect(['Easy','Medium','Hard'].map((d) => bank.filter((q) => q.difficulty === d).length).sort()).toEqual([8,8,9]);
  }
  for (const question of added) {
    expect(new Set(question.options).size).toBe(4);
    expect(question.options[question.correctAnswer]).toBeTruthy();
    expect(question.explanation.trim().length).toBeGreaterThan(0);
    expect(LA_PRACTICE_BANK.filter((q) => String(q.id) === String(question.id))).toHaveLength(1);
  }
});
