import { COURSE_QUIZZES } from './courseQuizzes';
import { LA_MODULES, LA_EXPANSION_MODULES, getLaModuleParts } from './laModules';
import { getRequiredSections, getRemainingSections, isCourseComplete, isFinalSectionOfCourse,
  getQuizPercentage, hasPassedQuiz } from './courseCompletion';
const course = 'linear-algebra';
const score = (value, total = 99) => ({ 'quiz-linear-algebra': { score: value, total } });
test('all 24 sections including six expansions are required exactly once', () => {
  const required = getRequiredSections(course);
  expect(required).toHaveLength(24); expect(new Set(required).size).toBe(24);
  for (const module of [...LA_MODULES, ...LA_EXPANSION_MODULES]) {
    for (const part of getLaModuleParts(module)) expect(required).toContain(`la-${module.id}-${part}`);
  }
  expect(isFinalSectionOfCourse(course, 'la-modern-applications-2')).toBe(true);
});
test('legacy completion alone is insufficient; every expansion section gates eligibility', () => {
  const required = getRequiredSections(course), complete = Object.fromEntries(required.map((s) => [s, true]));
  expect(isCourseComplete(course, complete)).toBe(true);
  for (const section of required) {
    expect(isCourseComplete(course, { ...complete, [section]: false })).toBe(false);
    expect(getRemainingSections(course, { ...complete, [section]: false })).toEqual([section]);
  }
  expect(isCourseComplete(course, { ...complete, [required[0]]: 'true' })).toBe(false);
  expect(isCourseComplete('unknown', complete)).toBe(false);
});
test('exact 80 percent threshold agrees with server and display is not rounded to a false pass', () => {
  expect(getQuizPercentage(course, score(79))).toBe(79.8);
  expect(hasPassedQuiz(course, score(79))).toBe(false);
  expect(hasPassedQuiz(course, score(80))).toBe(true);
  expect(hasPassedQuiz(course, score(4, 5))).toBe(true);
  expect(hasPassedQuiz(course, score(53, 66))).toBe(true);
});
test.each([[NaN,99],[1,0],[-1,99],[100,99],['80',99],[1.5,2]])('invalid score %p/%p cannot unlock', (a,b) => {
  expect(hasPassedQuiz(course, score(a,b))).toBe(false);
});
test('reference certificate includes the 33 new server questions across six topics', () => {
  const questions = COURSE_QUIZZES['quiz-linear-algebra'].questions;
  expect(questions).toHaveLength(99);
  const added = questions.slice(66);
  expect(new Set(added.map((q) => q.topic)).size).toBe(6);
  expect(added.filter((q) => q.difficulty === 'Easy')).toHaveLength(21);
  expect(added.filter((q) => q.difficulty === 'Medium')).toHaveLength(6);
  expect(added.filter((q) => q.difficulty === 'Hard')).toHaveLength(6);
  for (const q of added) { expect(q.options).toHaveLength(4); expect(q.options[q.correct]).toBeTruthy(); }
});
