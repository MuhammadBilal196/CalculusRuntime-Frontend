import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useAuth } from '../context/AuthContext';
import useQuizAttempts from './useQuizAttempts';
import { readQuizAttempts } from '../utils/quizAttempts';
import { GuideMcqSection } from '../components/study/GuideMcq';
jest.mock('../context/AuthContext', () => ({ useAuth: jest.fn() }));
const alice = { username: 'alice', accessToken: 'token' };
const bob = { username: 'bob', accessToken: 'token2' };
beforeEach(() => {
  localStorage.clear(); useAuth.mockReturnValue({ user: alice });
  global.IntersectionObserver = class { observe() {} disconnect() {} };
});
function Harness() {
  const { record, restart } = useQuizAttempts();
  return <><button onClick={() => record({ source: 'practice', quizId: 'q', questionId: 1,
    responseId: '1', prompt: 'P', options: ['A', 'B'], selectedIndex: 0, correctIndex: 1 })}>Answer</button>
    <button onClick={restart}>Retake</button></>;
}
test('retakes, account changes and logout isolate records', () => {
  const { rerender } = render(<Harness />);
  fireEvent.click(screen.getByText('Answer'));
  fireEvent.click(screen.getByText('Retake')); fireEvent.click(screen.getByText('Answer'));
  expect(readQuizAttempts(alice)).toHaveLength(2);
  useAuth.mockReturnValue({ user: bob }); rerender(<Harness />);
  fireEvent.click(screen.getByText('Answer')); expect(readQuizAttempts(bob)).toHaveLength(1);
  useAuth.mockReturnValue({ user: null }); rerender(<Harness />);
  fireEvent.click(screen.getByText('Answer')); expect(readQuizAttempts(bob)).toHaveLength(1);
});
test('shared guide records actual selected answer without altering completion score', () => {
  const complete = jest.fn();
  render(<GuideMcqSection id="check" section="test" scoreId="test" onComplete={complete}
    questions={[{ prompt: 'Pick B', options: ['Wrong', 'Right'], answer: 'B' }]} />);
  fireEvent.click(screen.getByRole('button', { name: 'A Wrong' }));
  fireEvent.click(screen.getByRole('button', { name: 'Submit Answer' }));
  expect(readQuizAttempts(alice)[0]).toMatchObject({ source: 'guide', selectedIndex: 0, correctIndex: 1, correct: false });
});
