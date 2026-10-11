import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import CourseQuiz from './CourseQuiz';
import { fetchWithTimeout } from '../../utils/fetchWithTimeout';
import { readQuizAttempts } from '../../utils/quizAttempts';
jest.mock('../../utils/fetchWithTimeout', () => ({ fetchWithTimeout: jest.fn() }));
jest.mock('../../context/AuthContext', () => ({ useAuth: () => ({ isHydrated: true,
  user: { username: 'cert-tester', accessToken: 'token' } }) }));
jest.mock('../../context/ProgressContext', () => ({ useProgress: () => ({
  progress: { completedSections: {} }, saveQuizScore: jest.fn().mockResolvedValue() }) }));
jest.mock('../../data/courseCompletion', () => ({ getCourseTitle: () => 'Linear Algebra',
  getQuizId: () => 'quiz-linear-algebra', getRequiredSections: () => [], isCourseCertificateEligible: () => true }));
afterEach(() => { localStorage.clear(); jest.clearAllMocks(); });
test('certificate records authoritative review only after successful submission', async () => {
  fetchWithTimeout.mockResolvedValueOnce({ ok: true, json: async () => ({
    attempt_token: 'private-token', questions: [{ index: 0, q: 'Pick right', options: ['Wrong', 'Right'] }],
    seconds_per_question: 90, total_seconds: 90 }) });
  fetchWithTimeout.mockResolvedValueOnce({ ok: true, json: async () => ({ score: 1, total: 1,
    pct: 100, passed: true, min_pass_percent: 80,
    review: [{ index: 0, correct: true, correct_option: 1, your_answer: 1 }] }) });
  render(<MemoryRouter initialEntries={['/quiz/linear-algebra']}><Routes>
    <Route path="/quiz/:courseId" element={<CourseQuiz />} /></Routes></MemoryRouter>);
  await screen.findByText('Pick right');
  expect(readQuizAttempts({ username: 'cert-tester', accessToken: 'token' })).toEqual([]);
  fireEvent.click(screen.getByRole('button', { name: /Right/ }));
  await waitFor(() => expect(readQuizAttempts({ username: 'cert-tester', accessToken: 'token' })).toHaveLength(1), { timeout: 3000 });
  expect(readQuizAttempts({ username: 'cert-tester', accessToken: 'token' })[0]).toMatchObject({
    source: 'certificate', grading: 'server-review', selectedIndex: 1, correctIndex: 1, correct: true });
  expect(JSON.stringify(readQuizAttempts({ username: 'cert-tester', accessToken: 'token' }))).not.toContain('private-token');
});
