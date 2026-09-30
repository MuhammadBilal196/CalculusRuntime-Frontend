import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import PractiseSection from './PractiseSection';
import { LA_MODULES } from '../../data/laModules';
jest.mock('../../components/SubmitToLeaderboard', () => () => null);
afterEach(() => { cleanup(); localStorage.clear(); });
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
