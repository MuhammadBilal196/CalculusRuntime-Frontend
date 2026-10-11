import { clearQuizAttempts, newAttemptId, readQuizAttempts, recordQuizAttempt, validAttempt } from './quizAttempts';
const user = { username: 'alice', accessToken: 'secret' };
const other = { username: 'bob', accessToken: 'other-secret' };
const answer = { attemptId: 'a1', responseId: 'q1', source: 'practice', quizId: 'quiz',
  questionId: 7, prompt: 'Which value?', options: ['wrong', 'right', 'third', 'fourth'],
  selectedIndex: 1, correctIndex: 1, courseId: 'linear-algebra', topic: 'Vectors', difficulty: 'Easy' };
beforeEach(() => localStorage.clear());
test('guests cannot persist answers', () => {
  expect(recordQuizAttempt(null, answer).reason).toBe('signed-out');
  expect(recordQuizAttempt({ username: 'alice' }, answer).saved).toBe(false);
  expect(localStorage.length).toBe(0);
});
test('displayed option order and grading are preserved without credentials', () => {
  expect(recordQuizAttempt(user, { ...answer, attempt_token: 'private', accessToken: 'private' }).saved).toBe(true);
  const [stored] = readQuizAttempts(user);
  expect(stored).toMatchObject({ schemaVersion: 1, options: answer.options, selectedIndex: 1, correct: true });
  expect(JSON.stringify(stored)).not.toMatch(/private|secret|accessToken|attempt_token/);
  expect(readQuizAttempts(other)).toEqual([]);
});
test('duplicate writes are idempotent, retakes and legacy retries remain separate', () => {
  recordQuizAttempt(user, answer);
  expect(recordQuizAttempt(user, answer).duplicate).toBe(true);
  recordQuizAttempt(user, { ...answer, responseId: 'q1-retry', selectedIndex: 0 });
  recordQuizAttempt(user, { ...answer, attemptId: 'a2' });
  expect(readQuizAttempts(user).map((r) => r.correct)).toEqual([true, false, true]);
});
test.each([null, -1, 4, true, '1'])('invalid answer index %p is rejected except unanswered null', (selectedIndex) => {
  expect(recordQuizAttempt(user, { ...answer, selectedIndex }).saved).toBe(selectedIndex === null);
});
test('unanswered server review is incorrect and marked with its grading source', () => {
  recordQuizAttempt(user, { ...answer, source: 'certificate', selectedIndex: null, grading: 'server-review' });
  expect(readQuizAttempts(user)[0]).toMatchObject({ correct: false, selectedIndex: null, grading: 'server-review' });
});
test('invalid record and malformed cache never overwrite existing content', () => {
  expect(validAttempt(null)).toBe(false);
  expect(recordQuizAttempt(user, { ...answer, questionId: undefined }).saved).toBe(false);
  recordQuizAttempt(user, answer);
  const key = localStorage.key(0);
  localStorage.setItem(key, '{bad');
  expect(readQuizAttempts(user)).toEqual([]);
  expect(recordQuizAttempt(user, answer).saved).toBe(false);
  expect(localStorage.getItem(key)).toBe('{bad');
});
test('quota errors do not crash quizzes or erase existing history', () => {
  recordQuizAttempt(user, answer);
  const spy = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('quota'); });
  expect(recordQuizAttempt(user, { ...answer, attemptId: 'a2' }).reason).toBe('storage-unavailable');
  spy.mockRestore();
  expect(readQuizAttempts(user)).toHaveLength(1);
});
test('clear only affects the current account; session IDs differ', () => {
  recordQuizAttempt(user, answer); recordQuizAttempt(other, answer);
  expect(clearQuizAttempts(user)).toBe(true);
  expect(readQuizAttempts(user)).toHaveLength(0);
  expect(readQuizAttempts(other)).toHaveLength(1);
  expect(newAttemptId()).not.toBe(newAttemptId());
});
