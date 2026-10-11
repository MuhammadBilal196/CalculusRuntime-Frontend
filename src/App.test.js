import React from "react";
import ErrorBoundary from "./components/common/ErrorBoundary";
import { MemoryRouter, createRoutesFromChildren, matchRoutes, Navigate, Routes } from "react-router-dom";
import { cleanup, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import App from "./App";
import StudyGuideShell from "./pages/courses/StudyGuideShell";
import { setupReadableAnchors, guideAnchors, shortAnchorName } from "./utils/ScrollToTop";
import { GuideMcqSection } from "./components/study/GuideMcq";
import { ProgressProvider } from "./context/ProgressContext";
import { COURSES } from "./data/courses";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { getRequiredSections, getQuizId } from "./data/courseCompletion";

// JSDOM has no scrolling implementation; anchor navigation is verified by URL.
beforeAll(() => { Element.prototype.scrollIntoView = jest.fn(); });

beforeEach(() => {
  localStorage.clear();
  window.history.replaceState({}, "", "/");
});

afterEach(() => {
  cleanup();
  localStorage.clear();
  window.history.replaceState({}, "", "/");
});

describe("shared interface regressions", () => {
  afterEach(() => {
    document.documentElement.removeAttribute('data-theme');
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('dark');
  });

  test("theme toggles update the document and survive navigation and remount", async () => {
    localStorage.setItem('calculus-dark', 'false');
    let view = render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Switch to dark mode' }));
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    expect(document.documentElement).toHaveClass('dark');
    expect(document.body).toHaveClass('dark');
    expect(localStorage.getItem('calculus-dark')).toBe('true');
    fireEvent.click(screen.getByRole('link', { name: /^Linear Algebra$/ }));
    expect(await screen.findByRole('heading', { level: 1, name: 'Linear Algebra' })).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');
    view.unmount();
    view = render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Switch to light mode' }));
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
    expect(document.documentElement).not.toHaveClass('dark');
    expect(document.body).not.toHaveClass('dark');
    expect(localStorage.getItem('calculus-dark')).toBe('false');
  });

  test("mobile navigation exposes its state and closes on Escape, outside click and route selection", async () => {
    render(<App />);
    const toggle = screen.getByRole('button', { name: 'Toggle navigation' });
    const menu = document.getElementById(toggle.getAttribute('aria-controls'));
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(menu).toHaveAttribute('aria-hidden', 'true');
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(menu).toHaveAttribute('aria-hidden', 'false');
    fireEvent.keyDown(document, { key: 'Escape' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggle);
    fireEvent.mouseDown(document.body);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggle);
    fireEvent.click(within(menu).getByRole('link', { name: 'Linear Algebra' }));
    expect(await screen.findByRole('heading', { level: 1, name: 'Linear Algebra' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle navigation' })).toHaveAttribute('aria-expanded', 'false');
    expect(document.getElementById('mobile-nav')).toHaveAttribute('aria-hidden', 'true');
  });

  test("render failures show error details and recovery actions instead of a blank page", () => {
    function BrokenPage() { throw new Error('Intentional test render failure'); }
    const errors = jest.spyOn(console, 'error').mockImplementation(() => {});
    try {
      render(<MemoryRouter><ErrorBoundary><BrokenPage /></ErrorBoundary></MemoryRouter>);
      expect(screen.getByRole('heading', { name: 'Oops — something went wrong' })).toBeInTheDocument();
      expect(screen.getByText('Error: Intentional test render failure')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Reload page' })).toBeEnabled();
      expect(screen.getByRole('link', { name: 'Go home' })).toHaveAttribute('href', '/');
      expect(errors).toHaveBeenCalled();
    } finally {
      errors.mockRestore();
    }
  });
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
    ["/linear-algebra/numerical-linear-algebra", "/linear-algebra/numerical-linear-algebra/1", "Numerical Linear Algebra"],
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


describe("authentication and certificate quiz integration", () => {
  const originalFetch = global.fetch;
  const session = { id: 73, username: "test-learner", accessToken: "test-token" };
  const response = (body, status = 200) => Promise.resolve({
    ok: status >= 200 && status < 300, status, json: async () => body,
  });
  afterEach(() => { global.fetch = originalFetch; });

  function SessionProbe() {
    const { user, isHydrated, logout } = useAuth();
    return <><output data-testid="session">{isHydrated ? user?.username || "guest" : "loading"}</output>
      <button onClick={logout}>End session</button></>;
  }

  test("session hydration rejects malformed and expired storage but retains an offline session", async () => {
    for (const raw of ['{invalid', JSON.stringify({ username: 'no-token' })]) {
      localStorage.setItem("calcvoyager_user", raw);
      const view = render(<AuthProvider><SessionProbe /></AuthProvider>);
      expect(screen.getByTestId("session")).toHaveTextContent("guest");
      view.unmount();
    }
    for (const status of [401, 404]) {
      localStorage.setItem("calcvoyager_user", JSON.stringify(session));
      global.fetch = jest.fn(() => response({}, status));
      const view = render(<AuthProvider><SessionProbe /></AuthProvider>);
      await waitFor(() => expect(screen.getByTestId("session")).toHaveTextContent("guest"));
      expect(localStorage.getItem("calcvoyager_user")).toBeNull();
      expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/auth/me'),
        expect.objectContaining({ headers: { Authorization: 'Bearer test-token' } }));
      view.unmount();
    }
    localStorage.setItem("calcvoyager_user", JSON.stringify(session));
    global.fetch = jest.fn(() => Promise.reject(new Error("offline")));
    render(<AuthProvider><SessionProbe /></AuthProvider>);
    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    expect(screen.getByTestId("session")).toHaveTextContent(session.username);
    fireEvent.click(screen.getByRole('button', { name: 'End session' }));
    expect(screen.getByTestId("session")).toHaveTextContent("guest");
    expect(localStorage.getItem("calcvoyager_user")).toBeNull();
  });

  test("login validates empty fields, reports rejection and persists a successful session until sign-out", async () => {
    let accept = false;
    global.fetch = jest.fn((url) => {
      if (url.endsWith('/api/auth/login')) return accept
        ? response({ user: { id: session.id, username: session.username }, access_token: session.accessToken, token_type: 'bearer' })
        : response({ detail: 'Invalid credentials' }, 401);
      if (url.endsWith('/api/auth/me') || url.endsWith('/api/progress/')) return response({});
      throw new Error(`Unexpected request: ${url}`);
    });
    window.history.replaceState({}, '', '/login');
    const { container } = render(<App />);
    fireEvent.submit(container.querySelector('.auth-form'));
    expect(screen.getByRole('alert')).toHaveTextContent('Please fill in all fields.');
    expect(global.fetch).not.toHaveBeenCalled();
    fireEvent.change(screen.getByLabelText('Username'), { target: { value: `  ${session.username}  ` } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'test-password' } });
    fireEvent.submit(container.querySelector('.auth-form'));
    expect(await screen.findByRole('alert')).toHaveTextContent('Invalid credentials');
    expect(localStorage.getItem('calcvoyager_user')).toBeNull();
    expect(JSON.parse(global.fetch.mock.calls[0][1].body)).toEqual({ username: session.username, password: 'test-password' });
    accept = true;
    fireEvent.submit(container.querySelector('.auth-form'));
    await waitFor(() => expect(window.location.pathname).toBe('/dashboard'));
    expect(JSON.parse(localStorage.getItem('calcvoyager_user'))).toMatchObject(session);
    fireEvent.click(await screen.findByRole('button', { name: 'Toggle navigation' }));
    fireEvent.click(within(screen.getByRole('navigation', { name: 'Mobile navigation' })).getByRole('button', { name: 'Sign out' }));
    await waitFor(() => expect(localStorage.getItem('calcvoyager_user')).toBeNull());
    expect(await screen.findByRole('heading', { name: 'Welcome back' })).toBeInTheDocument();
    expect(window.location.pathname).toBe('/login');
  });

  test("all four certificate quizzes block guests and signed-in learners missing required sections", async () => {
    for (const course of COURSES) {
      localStorage.clear();
      global.fetch = jest.fn((url) => {
        if (url.endsWith('/api/auth/me') || url.endsWith('/api/progress/')) return response({});
        throw new Error(`Unexpected request: ${url}`);
      });
      window.history.replaceState({}, '', `/quiz/${course.id}`);
      let view = render(<App />);
      expect(await screen.findByRole('heading', { name: 'Sign in required' })).toBeInTheDocument();
      expect(global.fetch).not.toHaveBeenCalled();
      view.unmount();
      localStorage.setItem('calcvoyager_user', JSON.stringify(session));
      view = render(<App />);
      expect(await screen.findByRole('heading', { name: 'Finish the course first' })).toBeInTheDocument();
      await waitFor(() => expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/api/progress/'), expect.anything()));
      expect(global.fetch.mock.calls.some(([url]) => url.endsWith('/start'))).toBe(false);
      view.unmount();
    }
  });

  test("all courses retry failed starts and submit positional answers using server results", async () => {
    for (const course of COURSES) {
      localStorage.clear();
      localStorage.setItem('calcvoyager_user', JSON.stringify(session));
      const completedSections = Object.fromEntries(getRequiredSections(course.id).map((id) => [id, true]));
      const quizId = getQuizId(course.id);
      let starts = 0;
      let submissions = 0;
      global.fetch = jest.fn((url, options = {}) => {
        if (url.endsWith('/api/auth/me')) return response({});
        if (url.endsWith('/api/progress/')) return response({ completedSections });
        if (url.endsWith(`/api/quiz/${quizId}/start`)) {
          starts += 1;
          if (starts === 1) return response({ detail: 'Please retry the quiz' }, 503);
          return response({ attempt_token: `attempt-${starts}`, seconds_per_question: 90,
            questions: [{ q: 'Server question one', options: ['One', 'Two'] }, { q: 'Server question two', options: ['Three', 'Four'] }] });
        }
        if (url.endsWith(`/api/quiz/${quizId}/submit`)) {
          submissions += 1;
          expect(options.headers.Authorization).toBe('Bearer test-token');
          expect(JSON.parse(options.body)).toEqual({ attempt_token: `attempt-${starts}`,
            answers: submissions === 1 ? [null, 1] : [1, 1] });
          return response({ score: submissions === 1 ? 1 : 2, total: 2,
            pct: submissions === 1 ? 50 : 100, passed: submissions > 1, min_pass_percent: 80 });
        }
        if (url.endsWith('/api/quiz/')) return response({});
        throw new Error(`Unexpected request: ${url}`);
      });
      window.history.replaceState({}, '', `/quiz/${course.id}`);
      const view = render(<App />);
      expect(await screen.findByRole('heading', { name: "Couldn't start the quiz" })).toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: 'Try again' }));
      await screen.findByText('Server question one');
      fireEvent.click(screen.getByRole('button', { name: /Skip →/ }));
      fireEvent.click(screen.getByRole('button', { name: /Four/ }));
      fireEvent.click(screen.getByRole('button', { name: /Submit Quiz/ }));
      expect(await screen.findByRole('heading', { name: 'Not quite there yet' })).toBeInTheDocument();
      expect(screen.queryByRole('link', { name: /Get your certificate/ })).not.toBeInTheDocument();
      fireEvent.click(screen.getByRole('button', { name: 'Retry quiz' }));
      await screen.findByText('Server question one');
      fireEvent.click(screen.getByRole('button', { name: /Two/ }));
      fireEvent.click(screen.getByRole('button', { name: /Submit Answer/ }));
      fireEvent.click(screen.getByRole('button', { name: /Four/ }));
      fireEvent.click(screen.getByRole('button', { name: /Submit Quiz/ }));
      expect(await screen.findByRole('heading', { name: /You passed!/ })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Get your certificate/ })).toHaveAttribute('href', `/certificate/${course.id}`);
      expect(submissions).toBe(2);
      view.unmount();
    }
  });
});


test("Numerical Linear Algebra Part 2 loads directly and links back to Part 1", async () => {
  window.history.replaceState({}, "", "/linear-algebra/numerical-linear-algebra/2");
  const view = render(<App />);
  expect(await screen.findByRole("heading", { level: 2, name: "Eigenvalue Algorithms (Power Iteration & QR)" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Open Part 1" })).toHaveAttribute("href", "/linear-algebra/numerical-linear-algebra/1");
  expect(view.container.querySelector(".katex-error")).toBeNull();
  fireEvent.click(screen.getByRole("link", { name: "Open Part 1" }));
  await waitFor(() => expect(window.location.pathname).toBe("/linear-algebra/numerical-linear-algebra/1"));
  expect(await screen.findByRole("heading", { level: 2, name: "Iterative Solvers (Jacobi, Gauss–Seidel, SOR)" })).toBeInTheDocument();
});


test("Abstract Linear Algebra redirects to the dual-spaces guide", async () => {
  window.history.replaceState({}, "", "/linear-algebra/abstract-linear-algebra");
  const view = render(<App />);
  await waitFor(() => expect(window.location.pathname).toBe("/linear-algebra/abstract-linear-algebra/1"));
  expect(await screen.findByRole("heading", { level: 2, name: "Dual Spaces & Linear Functionals" })).toBeInTheDocument();
  expect(view.container.querySelector(".katex-error")).toBeNull();
});


test("Abstract Linear Algebra Part 2 loads directly and returns to dual spaces", async () => {
  window.history.replaceState({}, "", "/linear-algebra/abstract-linear-algebra/2");
  const view = render(<App />);
  expect(await screen.findByRole("heading", { level: 2, name: "Tensor Products & Kronecker Products" })).toBeInTheDocument();
  expect(view.container.querySelector(".katex-error")).toBeNull();
  fireEvent.click(screen.getByRole("link", { name: "Open Part 1" }));
  await waitFor(() => expect(window.location.pathname).toBe("/linear-algebra/abstract-linear-algebra/1"));
  expect(await screen.findByRole("heading", { level: 2, name: "Dual Spaces & Linear Functionals" })).toBeInTheDocument();
});


test("Modern Applications opens the spectral graph guide", async () => {
  window.history.replaceState({}, "", "/linear-algebra/modern-applications");
  const view = render(<App />);
  await waitFor(() => expect(window.location.pathname).toBe("/linear-algebra/modern-applications/1"));
  expect(await screen.findByRole("heading", { level: 2, name: "Spectral Graph Theory" })).toBeInTheDocument();
  expect(view.container.querySelector(".katex-error")).toBeNull();
});


test("Modern Applications Part 2 loads Matrix Calculus and returns to spectral graphs", async () => {
  window.history.replaceState({}, "", "/linear-algebra/modern-applications/2");
  const view = render(<App />);
  expect(await screen.findByRole("heading", { level: 2, name: "Matrix Calculus" })).toBeInTheDocument();
  expect(view.container.querySelector(".katex-error")).toBeNull();
  fireEvent.click(screen.getByRole("link", { name: "Open Part 1" }));
  await waitFor(() => expect(window.location.pathname).toBe("/linear-algebra/modern-applications/1"));
  expect(await screen.findByRole("heading", { level: 2, name: "Spectral Graph Theory" })).toBeInTheDocument();
});

describe("Green's theorem completion", () => {
  test("Part 2 exposes the proof, exceptional cases, worked applications and existing checkpoint", async () => {
    window.history.replaceState({}, "", "/vector-calculus/2");
    const { container } = render(<App />);
    expect(await screen.findByText("Green's Theorem in the Plane", { selector: 'h2' })).toBeInTheDocument();
    for (const title of [
      'Why the theorem works: a proof for a rectangle',
      'Regions with holes: add the oriented boundaries',
      'How to choose and check your method',
    ]) expect(screen.getByText(title, { selector: 'h3' })).toBeInTheDocument();
    const lesson = container.querySelector('#ch16-4');
    expect(lesson).toHaveTextContent('piecewise-smooth');
    expect(lesson).toHaveTextContent('open set containing');
    expect(lesson).toHaveTextContent('Variable curl over a triangle');
    expect(lesson).toHaveTextContent('A singularity: when zero curl is not enough');
    expect(lesson).toHaveTextContent('Outward flux with a nonconstant divergence');
    expect(lesson).not.toHaveTextContent('spinning energy');
    expect(container.querySelector('#quiz-ch16-4')).toHaveTextContent('Question 1 / 20');
  });

  test("the revised checkpoint accepts all twenty reviewed answers and advances to the end", async () => {
    window.history.replaceState({}, "", "/vector-calculus/2");
    const { container } = render(<App />);
    await screen.findByText("Green's Theorem in the Plane", { selector: 'h2' });
    const quiz = within(container.querySelector('#quiz-ch16-4'));
    const reviewedAnswers = 'ABCABCABCABCABCABCAB';
    for (let i = 0; i < reviewedAnswers.length; i += 1) {
      expect(container.querySelector('#quiz-ch16-4 .la-footer-tracker')).toHaveTextContent(`Question ${i + 1} / 20`);
      fireEvent.click(container.querySelectorAll('#quiz-ch16-4 .la-option-card')['ABC'.indexOf(reviewedAnswers[i])]);
      fireEvent.click(quiz.getByText('Submit Answer', { selector: 'button' }));
      expect(quiz.getByText('Correct!')).toBeInTheDocument();
      if (i < 19) fireEvent.click(quiz.getByText(/NEXT/, { selector: 'button' }));
    }
    expect(container.querySelector('#quiz-ch16-4')).toHaveTextContent('Score 20 / 20');
    expect(quiz.getByText(/NEXT/, { selector: 'button' })).toBeDisabled();
  });
});


test.each([false, true])("quiz counters survive the real math shell (checkpoint=%s)", (checkpoint) => {
  const questions = Array.from({ length: 3 }, (_, i) => ({
    prompt: `Item ${i + 1}: $x^2$`, options: ["$1$", "$2$", "$3$", "$4$"],
    answer: "A", explanation: "Because $x=1$.",
  }));
  const saved = jest.fn();
  const page = (title) => <MemoryRouter><AuthProvider><ProgressProvider>
    <StudyGuideShell title={title}>
      <p data-testid="lesson-math">{"Theory: $x^2$"}</p>
      <GuideMcqSection id="shell-quiz" section="shell-quiz" questions={questions}
        onComplete={checkpoint ? saved : undefined} />
    </StudyGuideShell>
  </ProgressProvider></AuthProvider></MemoryRouter>;
  const view = render(page("Initial"));
  const quiz = within(view.container.querySelector('#shell-quiz'));
  expect(screen.getByTestId('lesson-math').querySelector('.katex')).not.toBeNull();
  for (let i = 0; i < 3; i += 1) {
    expect(view.container.querySelector('.la-footer-tracker')).toHaveTextContent(`Question ${i + 1} / 3`);
    expect(view.container.querySelector('.la-q-prompt .katex')).not.toBeNull();
    fireEvent.click(view.container.querySelectorAll('.la-option-card')[i === 0 ? 1 : 0]);
    fireEvent.click(quiz.getByText('Submit Answer', { selector: 'button' }));
    expect(view.container.querySelector('progress')).toHaveAttribute('value', String(i + 1));
    expect(view.container.querySelector('.la-quiz-score')).toHaveTextContent(`Score ${i} / 3`);
    expect(view.container.querySelector('.la-explanation-text .katex')).not.toBeNull();
    view.rerender(page(`Updated ${i}`));
    if (i < 2) fireEvent.click(quiz.getByText(/NEXT/, { selector: 'button' }));
  }
  fireEvent.click(quiz.getByText(/PREVIOUS/, { selector: 'button' }));
  expect(view.container.querySelector('.la-footer-tracker')).toHaveTextContent('Question 2 / 3');
  expect(view.container.querySelector('progress')).toHaveAttribute('value', '3');
  expect(view.container.querySelector('.la-quiz-score')).toHaveTextContent('Score 2 / 3');
  expect(quiz.queryByText('Submit Answer', { selector: 'button' })).toBeNull();
  fireEvent.click(quiz.getByText(/NEXT/, { selector: 'button' }));
  expect(view.container.querySelector('.la-footer-tracker')).toHaveTextContent('Question 3 / 3');
});


describe("homepage topic discovery", () => {
  test.each([
    ["PCA", "Principal Component Analysis (PCA)", "/linear-algebra/applied-linear-algebra/1#principal-component-analysis"],
    ["Cholesky", "Cholesky Decomposition", "/linear-algebra/matrix-decompositions/1#cholesky-decomposition"],
  ])("searching %s opens the existing topic anchor", async (query, title, path) => {
    render(<App />);
    fireEvent.change(screen.getByRole("combobox", { name: "Search topics and tools" }), { target: { value: query } });
    const results = screen.getByRole("listbox", { name: "Search results" });
    const option = within(results).getAllByRole("option").find((item) => item.getAttribute("href") === path);
    expect(option).toHaveTextContent(title);
    expect(option).toHaveAttribute("href", path);
    fireEvent.click(option);
    await waitFor(() => expect(window.location.pathname + window.location.hash).toBe(path));
  });

  test("search can be cleared after an unmatched query without hiding course navigation", () => {
    render(<App />);
    fireEvent.change(screen.getByRole("combobox", { name: "Search topics and tools" }), { target: { value: "no-such-topic-xyz" } });
    expect(screen.getByText(/No topics or tools match/)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Choose a path" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Clear search" }));
    expect(screen.getByRole("combobox", { name: "Search topics and tools" })).toHaveValue("");
    expect(screen.queryByRole("listbox", { name: "Search results" })).not.toBeInTheDocument();
  });
});


test("page titles update when leaving a guide and navigating public pages", async () => {
  render(<App />);
  expect(document.title).toBe("Calculus, Linear Algebra & Statistics · CalcVoyager");
  fireEvent.click(screen.getByRole('link', { name: /^Linear Algebra$/ }));
  await waitFor(() => expect(document.title).toBe("Linear Algebra · CalcVoyager"));
  fireEvent.click(screen.getByRole('link', { name: /A = LU Matrix Decompositions/ }));
  await waitFor(() => expect(document.title).toBe("Matrix Decompositions & Factorizations (Part 1) · CalcVoyager"));
  fireEvent.click(within(screen.getByRole('navigation', { name: 'Footer navigation' })).getByRole('link', { name: 'Practice', exact: true }));
  await waitFor(() => expect(document.title).toBe("Practice Arena · CalcVoyager"));
  fireEvent.click(screen.getByRole('link', { name: 'Certificates', exact: true }));
  await waitFor(() => expect(document.title).toBe("My Certificates · CalcVoyager"));
  fireEvent.click(screen.getByRole('link', { name: 'Home', exact: true }));
  await waitFor(() => expect(document.title).toBe("Calculus, Linear Algebra & Statistics · CalcVoyager"));
});


test("homepage counts match its published course paths and resource links", () => {
  const { container } = render(<App />);
  const courseStat = screen.getByText('Course paths').closest('.stat-item');
  const resourceStat = screen.getByText('Tools & resources', { selector: '.stat-label' }).closest('.stat-item');
  expect(courseStat.querySelector('.stat-num')).toHaveTextContent(String(COURSES.length));
  const resources = container.querySelectorAll('.tool-links a');
  expect(resourceStat.querySelector('.stat-num')).toHaveTextContent(String(resources.length));
  expect(screen.queryByText('∞')).not.toBeInTheDocument();
  expect(screen.getByText('Practice difficulty levels').closest('.stat-item')).toHaveTextContent('3');
});


describe("readable lesson anchors across all courses", () => {
  test.each([
    ["la-m-ops", "Matrix Operations", "la-ops"],
    ["ps-b-cond", "Conditional Probability", "ps-cond"],
    ["diff-theory", "Differentiation Rules", "differentiation-rules"],
    ["ch16-4", "Green’s Theorem", "greens-theorem"],
  ])("%s has readable topic and quiz links without changing saved IDs", (id, title, name) => {
    const root = document.createElement("div");
    root.innerHTML = `<a href="#${id}">Topic</a><a href="#quiz-${id}">Quiz</a>
      <section class="section" id="${id}"><h2>${title}</h2></section>
      <section class="mcq-section" id="quiz-${id}"><h2>${title}</h2></section>`;
    document.body.appendChild(root);
    const stop = setupReadableAnchors(root);
    expect(root.querySelector('a')).toHaveAttribute('href', `#${name}`);
    expect(root.querySelectorAll('a')[1]).toHaveAttribute('href', `#${name}-quiz`);
    fireEvent.click(root.querySelectorAll('a')[1]);
    expect(window.location.hash).toBe(`#${name}-quiz`);
    expect(root.querySelector('.section').id).toBe(id);
    expect(root.querySelector('.mcq-section').id).toBe(`quiz-${id}`);
    window.history.replaceState({ preserved: true }, "", `/lesson/1?mode=study#${id}`);
    fireEvent(window, new Event('hashchange'));
    expect(window.location.hash).toBe(`#${name}`);
    expect(window.location.search).toBe('?mode=study');
    expect(window.history.state).toEqual({ preserved: true });
    window.history.replaceState({}, "", `/lesson/1#${name}-quiz`);
    fireEvent(window, new Event('popstate'));
    expect(window.location.hash).toBe(`#${name}-quiz`);
    stop();
    expect(root.querySelector('a')).toHaveAttribute('href', `#${id}`);
    root.remove();
  });

  test("legacy table-of-contents targets also get readable names", () => {
    const root = document.createElement('div');
    root.innerHTML = '<a class="toc-a" href="#s141">Definition</a><div id="s141"><h2>Partial Derivatives</h2></div>';
    const stop = setupReadableAnchors(root);
    expect(root.querySelector('a')).toHaveAttribute('href', '#partial-derivatives');
    expect(root.querySelector('#s141')).not.toBeNull();
    stop();
  });

  test("repeated headings cannot shadow existing IDs or each other", () => {
    const root = document.createElement('div');
    root.innerHTML = '<div id="examples"></div><section class="section" id="old-one"><h2>Examples</h2></section><section class="section" id="old-two"><h2>Examples</h2></section><a href="#old-one">One</a><a href="#old-two">Two</a>';
    const stop = setupReadableAnchors(root);
    expect([...root.querySelectorAll('a')].map(link => link.hash)).toEqual(['#examples-2', '#examples-3']);
    stop();
    const stopAgain = setupReadableAnchors(root);
    expect(root.querySelector('a').hash).toBe('#examples-2');
    stopAgain();
  });
});

beforeAll(() => { Element.prototype.scrollTo = jest.fn(); });

test.each([
  ['/linear-algebra/matrices/1', 'la-m-ops', 'la-ops'],
  ['/probability-statistics/probability-basics/2', 'ps-b-cond', 'ps-cond'],
  ['/differentiation/1', 'diff-theory', null],
  ['/vector-calculus/2', 'ch16-4', null],
])('real lesson %s supports old bookmarks and readable sidebar links', async (path, old, expected) => {
  window.history.replaceState({}, '', `${path}#${old}`);
  const view = render(<App />);
  await waitFor(() => {
    expect(view.container.querySelector(`[id="${old}"]`)).not.toBeNull();
    expect(window.location.hash).not.toBe(`#${old}`);
  });
  if (expected) expect(window.location.hash).toBe(`#${expected}`);
  const canonical = window.location.hash;
  expect(view.container.querySelector(`a[href="${canonical}"]`)).not.toBeNull();
  fireEvent.click(view.container.querySelector(`a[href="${canonical}"]`));
  expect(window.location.hash).toBe(canonical);
});

test.each([
  ['The Formal Definition of a Limit (Epsilon-Delta)', 'limit-definition'],
  ['Principal Component Analysis (PCA)', 'pca'],
  ['Worked Examples', 'examples'],
  ['Singular Value Decomposition', 'svd'],
  ['Frequently Asked Questions', 'faq'],
])('short public name for %s', (heading, expected) => {
  expect(shortAnchorName(heading)).toBe(expected);
});

test('the long Limits bookmark becomes limit-definition without changing its part or target ID', async () => {
  window.history.replaceState({}, '', '/limits-continuity/1#the-formal-definition-of-a-limit-epsilon-delta');
  const view = render(<App />);
  await waitFor(() => expect(window.location.hash).toBe('#limit-definition'));
  expect(window.location.pathname).toBe('/limits-continuity/1');
  expect(view.container.querySelector('#lc-basic-1')).not.toBeNull();
});

test('public overview anchors resolve and scroll outside lesson shells', async () => {
  window.history.replaceState({}, '', '/linear-algebra/overview');
  const view = render(<App />);
  await waitFor(() => expect(view.container.querySelector('main #structure-heading')).not.toBeNull());
  const root = view.container.querySelector('main');
  await waitFor(() => expect(guideAnchors.get(root)).toBeDefined());
  const target = root.querySelector('#structure-heading');
  target.scrollIntoView = jest.fn();
  window.history.replaceState({ preserved: true }, '', '/linear-algebra/overview#structure-heading');
  fireEvent(window, new Event('hashchange'));
  expect(window.location.hash).toBe(`#${guideAnchors.get(root).byTarget.get(target)}`);
  expect(window.history.state).toEqual({ preserved: true });
  expect(target.scrollIntoView).toHaveBeenCalled();
});

const studyPartPaths = [...new Set(COURSES.flatMap(course => course.modules
  .filter(module => /\/1$/.test(module.path))
  .flatMap(module => [module.path, module.path.replace(/\/1$/, '/2')])))]
  .filter(path => /\/1$/.test(path) || !resolveDestination(appRoutes(), path));

test.each(studyPartPaths)('all topic and quiz links stay compact on %s', async (path) => {
  window.history.replaceState({}, '', path);
  const view = render(<App />);
  await waitFor(() => expect(view.container.querySelector('.study-guide-page')).not.toBeNull());
  const root = view.container.querySelector('.study-guide-page').lastElementChild;
  await waitFor(() => expect(guideAnchors.get(root)).toBeDefined());
  const registry = guideAnchors.get(root);
  const links = [...root.querySelectorAll('a[href^="#"]')].filter(link => link.hash.length > 1);
  expect(links.length).toBeGreaterThan(0);
  for (const link of links) {
    const target = registry.byName.get(link.hash.slice(1));
    expect(target).toBeDefined();
    expect(link.hash).toBe(`#${registry.byTarget.get(target)}`);
    expect(link.hash.length).toBeLessThanOrEqual(40);
  }
  if (path === '/constrained-unconstrained-optimization/2') {
    for (const label of ['Why Numerical Optimization Is Needed', 'Key Formulas and Final Strategy']) {
      const link = links.find(item => item.textContent.trim() === label);
      const target = registry.byName.get(link.hash.slice(1));
      expect(target.querySelector('h2,h3').textContent).toContain(label);
    }
  }
});
