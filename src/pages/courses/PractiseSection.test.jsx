jest.mock("../../utils/learningEvents", () => ({ queueLearningEvents: jest.fn(() => true) }));
import { useAuth } from '../../context/AuthContext';
import { readQuizAttempts } from '../../utils/quizAttempts';
import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import PractiseSection from './PractiseSection';
import { CALC_AG_PRACTICE_BANK } from '../../data/calcAgPracticeBank';
import { MV_PRACTICE_BANK } from '../../data/mvPracticeBank';
import { LA_PRACTICE_BANK } from '../../data/laPracticeBank';
import { PS_PRACTICE_BANK } from '../../data/psPracticeBank';
import { LA_MODULES, LA_EXPANSION_MODULES } from '../../data/laModules';
jest.mock('../../components/SubmitToLeaderboard', () => () => null);
jest.mock('../../context/AuthContext', () => ({ useAuth: jest.fn(() => null) }));
beforeEach(() => useAuth.mockReturnValue(null));
afterEach(() => { cleanup(); localStorage.clear(); jest.restoreAllMocks(); });
const cases = LA_MODULES.flatMap((module) => module.topics.flatMap((topic) => ['Easy','Medium','Hard'].map((difficulty) => [topic.title,difficulty])));
test.each(cases)('%s / %s loads 25 real questions through individual topic buttons', async (topic,difficulty) => {
  const { container } = render(<PractiseSection />);
  fireEvent.click(screen.getByRole('button', {name: `${difficulty} Mode`}));
  expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {name: topic, exact: true}));
  await screen.findByText('Question 1 of 25');
  const options = container.querySelectorAll('.practice-option');
  expect(options).toHaveLength(4);
  fireEvent.click(options[0]);
  expect(screen.getByRole('button',{name:/Next Question/})).toBeInTheDocument();
});

test('existing topics and every new topic share the original button grid', () => {
  render(<PractiseSection />);
  fireEvent.click(screen.getByRole('button', {name: 'Easy Mode'}));
  const existing = ['Vectors & Vector Spaces', 'Matrices & Determinants', 'Systems of Linear Equations',
    'Fundamental Subspaces & Rank-Nullity', 'Eigenvalues & Eigenvectors', 'Linear Transformations',
    'Orthogonality & Least Squares', 'Singular Value Decomposition', 'Probability Basics',
    'Limits and Continuity', 'Partial Derivatives'];
  const added = LA_MODULES.flatMap((module) => module.topics.map((topic) => topic.title));
  for (const topic of [...existing, ...added]) {
    expect(screen.getAllByRole('button', {name: topic, exact: true})).toHaveLength(1);
  }
  for (const module of LA_MODULES) expect(screen.queryByText(module.title)).not.toBeInTheDocument();
  expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
});


const courseBanks = [
  ['Limits and Continuity', CALC_AG_PRACTICE_BANK],
  ['Partial Derivatives', MV_PRACTICE_BANK],
  ['Vectors & Vector Spaces', LA_PRACTICE_BANK],
  ['Probability Basics', PS_PRACTICE_BANK],
];

async function openPractice(topic, difficulty) {
  fireEvent.click(screen.getByRole('button', { name: `${difficulty} Mode` }));
  fireEvent.click(screen.getByRole('button', { name: topic, exact: true }));
  await screen.findByText(/^Question 1 of \d+$/);
}

function displayedQuestion(bank, container) {
  const prompt = container.querySelector('.practice-question').textContent;
  const displayedOptions = [...container.querySelectorAll('.practice-option__text')]
    .map((node) => node.textContent).sort();
  return bank.find((q) =>
    q.question === prompt &&
    JSON.stringify([...q.options].sort()) === JSON.stringify(displayedOptions)
  );
}

function chooseText(container, text) {
  const choice = [...container.querySelectorAll('.practice-option')]
    .find((button) => button.querySelector('.practice-option__text').textContent === text);
  expect(choice).toBeDefined();
  fireEvent.click(choice);
}

test('all four course loaders filter real questions by topic and each difficulty', async () => {
  const { container } = render(<PractiseSection />);
  for (const [topic, bank] of courseBanks) {
    for (const difficulty of ['Easy', 'Medium', 'Hard']) {
      await openPractice(topic, difficulty);
      const expected = bank.filter((q) => q.topic === topic && q.difficulty === difficulty);
      expect(expected.length).toBeGreaterThan(0);
      expect(screen.getByText(`Question 1 of ${expected.length}`)).toBeInTheDocument();
      const question = displayedQuestion(expected, container);
      expect(question).toBeDefined();
      expect([...container.querySelectorAll('.practice-option__text')].map((n) => n.textContent).sort())
        .toEqual([...question.options].sort());
      fireEvent.click(screen.getByRole('button', { name: 'Change Topic' }));
    }
  }
});

test('Taylor aliases load the same populated bank at every difficulty', async () => {
  render(<PractiseSection />);
  const aliases = ['Taylor & Maclaurin Series', 'Maclaurin Series', 'Taylor Series for Multivariable Functions'];
  for (const difficulty of ['Easy', 'Medium', 'Hard']) {
    const count = CALC_AG_PRACTICE_BANK.filter((q) => aliases.includes(q.topic) && q.difficulty === difficulty).length;
    expect(count).toBeGreaterThan(0);
    for (const topic of aliases) {
      await openPractice(topic, difficulty);
      expect(screen.getByText(`Question 1 of ${count}`)).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: 'Change Topic' }));
    }
  }
});

test('shuffled answer keys score once, explain mistakes and persist across topic changes and remounts', async () => {
  jest.spyOn(Math, 'random').mockReturnValue(0);
  const { container, unmount } = render(<PractiseSection />);
  await openPractice('Limits and Continuity', 'Easy');
  const first = displayedQuestion(CALC_AG_PRACTICE_BANK, container);
  expect(screen.getByRole('button', { name: 'Submit Verification' })).toBeDisabled();
  chooseText(container, first.options[first.correctAnswer]);
  expect(JSON.parse(localStorage.getItem('arena_score_tracker'))).toEqual({ correct: 1, total: 1 });
  const choices = screen.getAllByRole('option');
  choices.forEach((choice) => expect(choice).toBeDisabled());
  fireEvent.click(choices[0]);
  expect(JSON.parse(localStorage.getItem('arena_score_tracker'))).toEqual({ correct: 1, total: 1 });
  fireEvent.click(screen.getByRole('button', { name: /Next Question/ }));
  expect(screen.getByText(/^Question 2 of/)).toBeInTheDocument();
  const second = displayedQuestion(CALC_AG_PRACTICE_BANK, container);
  chooseText(container, second.options[(second.correctAnswer + 1) % second.options.length]);
  expect(container.querySelector('.practice-insight p').textContent).toBe(second.explanation);
  expect(JSON.parse(localStorage.getItem('arena_score_tracker'))).toEqual({ correct: 1, total: 2 });
  fireEvent.click(screen.getByRole('button', { name: 'Change Topic' }));
  await openPractice('Probability Basics', 'Hard');
  expect(screen.getByRole('button', { name: 'Submit Verification' })).toBeDisabled();
  unmount();
  render(<PractiseSection />);
  expect(JSON.parse(localStorage.getItem('arena_score_tracker'))).toEqual({ correct: 1, total: 2 });
  expect(screen.getByRole('button', { name: 'Easy Mode' })).toBeInTheDocument();
});


test('signed-in practice records the displayed shuffled option and course', async () => {
  const user = { username: 'practice-tester', accessToken: 'token' };
  useAuth.mockReturnValue({ user });
  const { container } = render(<PractiseSection />);
  await openPractice('Vectors & Vector Spaces', 'Easy');
  const question = displayedQuestion(LA_PRACTICE_BANK, container);
  const displayed = [...container.querySelectorAll('.practice-option__text')].map((node) => node.textContent);
  chooseText(container, question.options[question.correctAnswer]);
  const [record] = readQuizAttempts(user);
  expect(record).toMatchObject({ source: 'practice', courseId: 'linear-algebra',
    prompt: question.question, options: displayed, correct: true,
    selectedIndex: displayed.indexOf(question.options[question.correctAnswer]) });
});


test.each(LA_EXPANSION_MODULES.flatMap((module) => module.topics.flatMap((topic) =>
  ['Easy', 'Medium', 'Hard'].map((difficulty) => [topic.title, difficulty]))))(
  'expansion topic %s / %s loads only its allocated questions', async (topic, difficulty) => {
    const expected = LA_PRACTICE_BANK.filter((q) => q.topic === topic && q.difficulty === difficulty);
    expect([8,9]).toContain(expected.length);
    const { container } = render(<PractiseSection />);
    await openPractice(topic, difficulty);
    expect(screen.getByText(`Question 1 of ${expected.length}`)).toBeInTheDocument();
    expect(displayedQuestion(expected, container)).toBeDefined();
    expect(screen.queryByRole('combobox')).not.toBeInTheDocument();
  });


test('course and text filters retain individual topic selection and question loading', async () => {
  render(<PractiseSection />);
  fireEvent.click(screen.getByRole('button', { name: 'Easy Mode' }));
  fireEvent.click(screen.getByRole('button', { name: 'Linear Algebra', exact: true }));
  expect(screen.queryByRole('button', { name: 'Limits and Continuity', exact: true })).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Cholesky Decomposition', exact: true })).toBeInTheDocument();
  fireEvent.change(screen.getByRole('searchbox', { name: 'Search practice topics' }), { target: { value: ' pCa ' } });
  expect(screen.getByRole('status')).toHaveTextContent('1 topics available');
  fireEvent.click(screen.getByRole('button', { name: 'Principal Component Analysis (PCA)', exact: true }));
  await screen.findByText('Question 1 of 25');
  fireEvent.click(screen.getByRole('button', { name: 'Change Topic' }));
  fireEvent.click(screen.getByRole('button', { name: 'Medium Mode' }));
  expect(screen.getByRole('searchbox')).toHaveValue('');
  expect(screen.getByRole('button', { name: 'All courses' })).toHaveAttribute('aria-pressed', 'true');
});

test('empty topic filters recover without changing scores or hiding topics permanently', () => {
  render(<PractiseSection />);
  fireEvent.click(screen.getByRole('button', { name: 'Hard Mode' }));
  fireEvent.change(screen.getByRole('searchbox'), { target: { value: 'no-such-topic-xyz' } });
  expect(screen.getByText(/No topics match/)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Clear topic filters' }));
  expect(screen.getByRole('button', { name: 'Vectors & Vector Spaces', exact: true })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Probability Basics', exact: true })).toBeInTheDocument();
});
