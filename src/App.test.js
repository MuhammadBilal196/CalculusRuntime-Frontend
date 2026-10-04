import React from "react";
import { createRoutesFromChildren, matchRoutes, Navigate, Routes } from "react-router-dom";
import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import App from "./App";
import { COURSES } from "./data/courses";

beforeEach(() => {
  localStorage.clear();
  window.history.replaceState({}, "", "/");
});

afterEach(() => {
  cleanup();
  localStorage.clear();
  window.history.replaceState({}, "", "/");
});

test('renders the main app shell', () => {
  render(<App />);
  expect(screen.getByRole('link', { name: /CalcVoyager/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^Linear Algebra$/i })).toHaveAttribute('href', '/courses/linear-algebra');
});


test.each(COURSES)("$title opens from home and exposes its module links", async (course) => {
  const view = render(<App />);
  const homeCard = view.container.querySelector(`main a[href="${course.path}"]`);
  expect(homeCard).not.toBeNull();
  fireEvent.click(homeCard);
  expect(await screen.findByRole("heading", { level: 1, name: course.title })).toBeInTheDocument();
  expect(window.location.pathname).toBe(course.path);
  const main = screen.getByRole("main");
  const quizPath = `/quiz/${course.id}`;
  for (const module of course.modules) {
    const heading = within(main).getByRole("heading", { level: 3, name: module.title });
    if (module.path === quizPath) {
      expect(heading.closest('[aria-disabled="true"]')).not.toBeNull();
      expect(heading.closest("a")).toBeNull();
    } else {
      expect(heading.closest("a")).toHaveAttribute("href", module.path);
    }
  }
  expect(within(main).getByRole("link", { name: "Start first module →" }))
    .toHaveAttribute("href", course.modules[0].path);
  // A direct visit must render the same hub, independently of the home click.
  view.unmount();
  render(<App />);
  expect(screen.getByRole("heading", { level: 1, name: course.title })).toBeInTheDocument();
});


// JSDOM has no viewport observer. Keep this browser API shim local to this suite.
const originalObserver = global.IntersectionObserver;
const originalMatchMedia = window.matchMedia;
beforeEach(() => {
  window.matchMedia = jest.fn((query) => ({
    matches: false, media: query, onchange: null,
    addListener: jest.fn(), removeListener: jest.fn(),
    addEventListener: jest.fn(), removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
  global.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  };
});
afterAll(() => {
  if (originalObserver === undefined) delete global.IntersectionObserver;
  else global.IntersectionObserver = originalObserver;
  if (originalMatchMedia === undefined) delete window.matchMedia;
  else window.matchMedia = originalMatchMedia;
});

// App currently returns its provider/router tree without hooks. Read the real
// route elements, including mapped routes, rather than duplicate their paths.
function appRoutes() {
  function findRoutes(node) {
    if (!React.isValidElement(node)) return null;
    if (node.type === Routes) return node;
    for (const child of React.Children.toArray(node.props.children)) {
      const found = findRoutes(child);
      if (found) return found;
    }
    return null;
  }
  const tree = findRoutes(App());
  expect(tree).not.toBeNull();
  return createRoutesFromChildren(tree.props.children);
}

function resolveDestination(routes, path) {
  const visited = new Set();
  while (!visited.has(path)) {
    visited.add(path);
    const matches = matchRoutes(routes, new URL(path, "http://localhost").pathname);
    const route = matches?.[matches.length - 1]?.route;
    if (!route || route.path === "*") return `Missing route: ${path}`;
    if (route.element?.type !== Navigate) return null;
    path = route.element.props.to;
  }
  return `Redirect cycle: ${path}`;
}

test("all course cards and module destinations resolve without falling through to 404", () => {
  const routes = appRoutes();
  const failures = [];
  for (const course of COURSES) {
    for (const path of [course.path, ...course.modules.map((module) => module.path)]) {
      const error = resolveDestination(routes, path);
      if (error) failures.push(`${course.title}: ${error}`);
    }
  }
  expect(failures).toEqual([]);
});

test("every declared static redirect terminates at an existing non-redirect route", () => {
  const routes = appRoutes();
  const redirects = routes.filter((route) => route.element?.type === Navigate);
  expect(redirects.length).toBeGreaterThan(0);
  const failures = redirects.map((route) => resolveDestination(routes, route.path)).filter(Boolean);
  expect(failures).toEqual([]);
});

test("representative guide redirects navigate and render across all four courses", async () => {
  const cases = [
    ["/differentiation", "/differentiation/1", "Differentiation & Rules"],
    ["/partial-derivatives", "/partial-derivatives/1", "Partial Derivatives"],
    ["/linear-algebra/vectors", "/linear-algebra/vectors/1", "Vectors & Vector Spaces"],
    ["/probability-statistics/stochastic-processes", "/probability-statistics/stochastic-processes/1", "Stochastic Processes"],
  ];
  for (const [from, to, title] of cases) {
    window.history.replaceState({}, "", from);
    const view = render(<App />);
    await waitFor(() => expect(window.location.pathname).toBe(to));
    expect(await screen.findByRole("heading", { level: 1, name: title })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /something went wrong/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /404/ })).not.toBeInTheDocument();
    view.unmount();
  }
});

test("unknown URLs show a recoverable 404 and unknown course IDs return home", async () => {
  window.history.replaceState({}, "", "/this-route-does-not-exist");
  const view = render(<App />);
  expect(screen.getByRole("heading", { name: "404 — Page not found" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("link", { name: "Return to home" }));
  await waitFor(() => expect(window.location.pathname).toBe("/"));
  expect(screen.queryByRole("heading", { name: /404/ })).not.toBeInTheDocument();
  expect(view.container.querySelector(`main a[href="${COURSES[0].path}"]`)).not.toBeNull();
  view.unmount();
  window.history.replaceState({}, "", "/courses/nonexistent-course");
  render(<App />);
  await waitFor(() => expect(window.location.pathname).toBe("/"));
  expect(screen.queryByRole("heading", { name: /404/ })).not.toBeInTheDocument();
});
