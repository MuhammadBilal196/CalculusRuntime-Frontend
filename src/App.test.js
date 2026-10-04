import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
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
