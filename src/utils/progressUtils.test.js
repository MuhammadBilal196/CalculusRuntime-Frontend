import React from "react";
import { act, cleanup, render, waitFor } from "@testing-library/react";
import { AuthProvider, useAuth } from "../context/AuthContext";
import { ProgressProvider, useProgress } from "../context/ProgressContext";
import {
  normalizeTimestamp,
  formatRelativeCompletion,
  formatCompletionDate,
  isOverdueForReview,
  recordActivityDay,
  getStreak,
} from "./progressUtils";

test("normalizeTimestamp returns null for null",()=>{expect(normalizeTimestamp(null)).toBeNull();});


test("formatCompletionDate formats a known date",()=>{const value=new Date("2024-01-15T00:00:00.000Z").getTime();expect(formatCompletionDate(value)).toMatch(/Jan|15|2024/);});

test("isOverdueForReview returns false for null",()=>{expect(isOverdueForReview(null)).toBe(false);});

test("normalizeTimestamp accepts numeric strings",()=>{expect(normalizeTimestamp("1700000000")).toBe(1700000000000);});

test("normalizeTimestamp accepts numeric millisecond strings",()=>{expect(normalizeTimestamp("1700000000000")).toBe(1700000000000);});

test("normalizeTimestamp accepts Date parseable strings",()=>{expect(normalizeTimestamp("2024-02-01")).toBe(Date.parse("2024-02-01"));});

test("formatRelativeCompletion handles null",()=>{expect(formatRelativeCompletion(null)).toBe("Completed recently");});

test("formatCompletionDate handles null",()=>{expect(formatCompletionDate(null)).toBe("Unknown completion date");});

test("getStreak returns zero with no stored days",()=>{localStorage.clear();expect(getStreak()).toBe(0);});

test("getStreak counts consecutive days",()=>{localStorage.clear();const today=new Date();const yesterday=new Date(today);yesterday.setDate(today.getDate()-1);localStorage.setItem("calculus-study-days",JSON.stringify([today.toDateString(),yesterday.toDateString()]));expect(getStreak()).toBe(2);});

test("getStreak stops after a missed day",()=>{localStorage.clear();const today=new Date();const old=new Date(today);old.setDate(today.getDate()-2);localStorage.setItem("calculus-study-days",JSON.stringify([today.toDateString(),old.toDateString()]));expect(getStreak()).toBe(1);});

test("recordActivityDay stores an ISO-independent date string",()=>{localStorage.clear();recordActivityDay();const [value]=JSON.parse(localStorage.getItem("calculus-study-days"));expect(value).toBe(new Date().toDateString());});

test("formatRelativeCompletion uses the singular day label",()=>{jest.useFakeTimers();jest.setSystemTime(new Date(2026,8,27,12));expect(formatRelativeCompletion(new Date(2026,8,26,12).getTime())).toBe("Completed 1 day ago");jest.useRealTimers();});

test("formatRelativeCompletion uses the plural day label",()=>{jest.useFakeTimers();jest.setSystemTime(new Date(2026,8,27,12));expect(formatRelativeCompletion(new Date(2026,8,25,12).getTime())).toBe("Completed 2 days ago");jest.useRealTimers();});

test("isOverdueForReview treats the exact cutoff as overdue",()=>{jest.useFakeTimers();jest.setSystemTime(new Date(2026,8,27,12));const cutoff=new Date(2026,8,13,12).getTime();expect(isOverdueForReview(cutoff,14)).toBe(true);jest.useRealTimers();});


describe("progress persistence with real providers", () => {
  const originalFetch = global.fetch;
  let auth;
  let state;
  function Probe() {
    auth = useAuth();
    state = useProgress();
    return null;
  }
  const mount = () => render(<AuthProvider><ProgressProvider><Probe /></ProgressProvider></AuthProvider>);
  const reply = (body) => Promise.resolve({ ok: true, status: 200, json: async () => body });
  beforeEach(() => { localStorage.clear(); });
  afterEach(() => { cleanup(); localStorage.clear(); global.fetch = originalFetch; });

  test("offline completion and best quiz percentage survive remount without duplicate bookmarks", async () => {
    localStorage.setItem('calcvoyager_user', JSON.stringify({ username: 'alice', accessToken: 'alice-token' }));
    global.fetch = jest.fn(() => Promise.reject(new Error('offline')));
    let view = mount();
    await waitFor(() => expect(state.isHydrated).toBe(true));
    await act(async () => { await state.markSectionComplete('la-vectors-1'); });
    await act(async () => { await state.saveQuizScore('checkpoint', 8, 10); });
    await act(async () => { await state.saveQuizScore('checkpoint', 9, 20); });
    expect(state.progress.quizScores.checkpoint).toEqual({ score: 8, total: 10 });
    await act(async () => { await state.saveQuizScore('checkpoint', 9, 10); });
    act(() => {
      state.addBookmark({ id: 'guide-one', title: 'First guide' });
      state.addBookmark({ id: 'guide-one', title: 'Duplicate' });
      state.recordVisit('guide-one');
    });
    expect(state.progress.bookmarks).toHaveLength(1);
    expect(state.progress.completedSections['la-vectors-1']).toBe(true);
    expect(state.progress.completedSectionTimestamps['la-vectors-1']).toEqual(expect.any(Number));
    view.unmount();
    view = mount();
    await waitFor(() => expect(state.isHydrated).toBe(true));
    expect(state.progress.quizScores.checkpoint).toEqual({ score: 9, total: 10 });
    expect(state.progress.completedSections['la-vectors-1']).toBe(true);
    expect(state.progress.lastVisited['guide-one']).toEqual(expect.any(Number));
    expect(state.isBookmarked('guide-one')).toBe(true);
    act(() => state.removeBookmark('guide-one'));
    expect(state.isBookmarked('guide-one')).toBe(false);
    expect(JSON.parse(localStorage.getItem('calcvoyager_progress_alice')).bookmarks).toEqual([]);
    expect(global.fetch.mock.calls.some(([url, options]) => url.endsWith('/api/quiz/') &&
      options.headers.Authorization === 'Bearer alice-token')).toBe(true);
  });

  test("signing out and changing accounts never exposes the previous user's local progress", async () => {
    global.fetch = jest.fn((url, options = {}) => {
      if (url.endsWith('/api/auth/login')) {
        const { username } = JSON.parse(options.body);
        return reply({ user: { username }, access_token: `${username}-token`, token_type: 'bearer' });
      }
      if (url.endsWith('/api/auth/me') || url.endsWith('/api/progress/') || url.endsWith('/api/progress/section/complete')) return reply({});
      throw new Error(`Unexpected request: ${url}`);
    });
    mount();
    await act(async () => { await auth.login('alice', 'test'); });
    await waitFor(() => expect(state.isHydrated).toBe(true));
    await act(async () => { await state.markSectionComplete('alice-section'); });
    act(() => auth.logout());
    await waitFor(() => expect(state.progress.completedSections).toEqual({}));
    expect(localStorage.getItem('calcvoyager_user')).toBeNull();
    await act(async () => { await auth.login('bob', 'test'); });
    await waitFor(() => expect(state.isHydrated).toBe(true));
    expect(state.progress.completedSections).toEqual({});
    await act(async () => { await state.markSectionComplete('bob-section'); });
    expect(JSON.parse(localStorage.getItem('calcvoyager_progress_bob')).completedSections).toEqual({ 'bob-section': true });
    expect(JSON.parse(localStorage.getItem('calcvoyager_progress_alice')).completedSections).toEqual({ 'alice-section': true });
    expect(state.progress.completedSections['alice-section']).toBeUndefined();
  });
});
