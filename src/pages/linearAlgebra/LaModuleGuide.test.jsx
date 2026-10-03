import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LaModuleGuide from "./LaModuleGuide";
import LaModulePart from "./LaModulePart";
import LinearAlgebraOverview from "./LinearAlgebraOverview";
import StochasticProcessesGuide from "../probabilityStatistics/StochasticProcessesGuide";
import { getRequiredSections, isCourseComplete, getMinQuizScore, hasPassedQuiz } from "../../data/courseCompletion";
import { LA_MODULES, LA_TOPIC_REDIRECTS, LA_MODULE_REDIRECTS, getLaModulePath, getLaModuleTopics } from "../../data/laModules";
import { getCourseById } from "../../data/courses";
import { hasPassedSectionQuizzes } from "../../data/sectionQuizGates";
import * as quizzes from "../../data/laQuizzes";

const mockSaveQuizScore = jest.fn();
jest.mock("../../context/ProgressContext", () => ({ useProgress: () => ({ saveQuizScore: mockSaveQuizScore, recordVisit: jest.fn() }) }));
jest.mock("react-router-dom", () => ({ useLocation: () => ({ hash: "" }), Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a> }));
jest.mock("../courses/StudyGuideShell", () => ({ __esModule: true, default: ({ children }) => <div data-testid="guide-shell">{children}</div> }));
jest.mock("../../components/GuideMcq", () => ({
  GuideMcqSection: ({ id, section, questions, onComplete }) => (
    <section id={id} data-testid="checkpoint" data-count={questions.length}>
      <button onClick={() => onComplete(16, 20)}>Pass {section}</button>
    </section>
  ),
}));

beforeEach(() => mockSaveQuizScore.mockReset());

test("the course has the three curriculum modules and no separate cards for their topics", () => {
  const cards = getCourseById("linear-algebra").modules;
  expect(LA_MODULES.map((module) => module.title)).toEqual([
    "Matrix Decompositions & Factorizations", "Advanced Vector Space Theory", "Applied Linear Algebra",
  ]);
  for (const module of LA_MODULES) {
    expect(module.topics).toHaveLength(4);
    expect(cards.filter((card) => card.path === getLaModulePath(module))).toHaveLength(1);
  }
  const oldPaths = new Set(LA_TOPIC_REDIRECTS.map((route) => route.from));
  expect(cards.filter((card) => oldPaths.has(card.path))).toHaveLength(0);
  expect(cards.some((card) => card.path === "/linear-algebra/vectors/1")).toBe(true);
});

describe.each(LA_MODULES)("$title", (module) => {
  test.each([1, 2])("part %i contains two full topics, unique anchors, and two independent quiz gates", (part) => {
    const scores = {};
    mockSaveQuizScore.mockImplementation((id, score, total) => { scores[id] = { score, total }; });
    const { container } = render(<LaModuleGuide moduleId={module.id} part={part} />);
    expect(screen.getAllByTestId("guide-shell")).toHaveLength(1);
    expect(container.querySelectorAll(".la-module-topic")).toHaveLength(2);
    expect(screen.getAllByTestId("checkpoint")).toHaveLength(2);
    screen.getAllByTestId("checkpoint").forEach((quiz) => expect(quiz.getAttribute("data-count")).toBe("20"));
    const ids = Array.from(container.querySelectorAll("[id]"), (element) => element.id);
    expect(new Set(ids).size).toBe(ids.length);
    const topics = getLaModuleTopics(module, part);
    for (const topic of topics) {
      const article = container.querySelector(`#${topic.id}`);
      expect(article).not.toBeNull();
      expect(article.querySelectorAll(".box.exm").length).toBeGreaterThanOrEqual(3);
      expect(article.querySelectorAll('[data-testid="checkpoint"]')).toHaveLength(1);
    }
    expect(container.querySelector(".main .ch-hdr .ch-title").textContent).toBe(module.title);
    const sectionId = `la-${module.id}-${part}`;
    expect(hasPassedSectionQuizzes(sectionId, scores)).toBe(false);
    fireEvent.click(screen.getByRole("button", { name: `Pass ${topics[0].quizKey}` }));
    expect(hasPassedSectionQuizzes(sectionId, scores)).toBe(false);
    fireEvent.click(screen.getByRole("button", { name: `Pass ${topics[1].quizKey}` }));
    expect(hasPassedSectionQuizzes(sectionId, scores)).toBe(true);
    scores[`guide-mcq-${topics[1].quizKey}`] = { score: 15, total: 20 };
    expect(hasPassedSectionQuizzes(sectionId, scores)).toBe(false);
  });
});

test("all legacy topic URLs land on the correct module part and topic anchor", () => {
  expect(LA_TOPIC_REDIRECTS).toHaveLength(36);
  expect(new Set(LA_TOPIC_REDIRECTS.map((route) => route.from)).size).toBe(36);
  for (const module of LA_MODULES) {
    module.topics.forEach((topic, index) => {
      for (const suffix of ["", "/1", "/2"]) {
        const route = LA_TOPIC_REDIRECTS.find((item) => item.from === `/linear-algebra/${topic.id}${suffix}`);
        expect(route.to).toBe(`${getLaModulePath(module, index < 2 ? 1 : 2)}#${topic.id}`);
      }
    });
  }
});

test("all twelve checkpoints contain twenty questions with four distinct options and valid answers", () => {
  const banks = Object.values(quizzes);
  expect(banks).toHaveLength(12);
  for (const bank of banks) {
    expect(bank).toHaveLength(20);
    expect(new Set(bank.map((question) => question.prompt)).size).toBe(20);
    bank.forEach((question) => {
      expect(new Set(question.options).size).toBe(4);
      expect("ABCD").toContain(question.answer);
      expect(question.explanation.length).toBeGreaterThan(10);
    });
  }
});


jest.mock("../../components/BookmarkButton", () => ({ __esModule: true, default: ({ path }) => <a data-testid="bookmark" href={path}>Bookmark</a> }));
jest.mock("../../components/SectionCompleteBar", () => ({ __esModule: true, default: ({ sectionId }) => <div data-testid="completion" data-section={sectionId} /> }));

test.each(LA_MODULES)("$title bookmarks its current part and uses the matching quiz gate", (module) => {
  for (const part of [1, 2]) {
    const view = render(<LaModulePart moduleId={module.id} part={part} />);
    expect(screen.getByTestId("bookmark")).toHaveAttribute("href", getLaModulePath(module, part));
    expect(screen.getByTestId("completion")).toHaveAttribute("data-section", `la-${module.id}-${part}`);
    view.unmount();
  }
});

test("all nine earlier grouped URLs redirect to the corresponding curriculum part", () => {
  expect(LA_MODULE_REDIRECTS).toHaveLength(9);
  LA_MODULES.forEach((module) => ["", "/1", "/2"].forEach((suffix) => {
    expect(LA_MODULE_REDIRECTS.find((route) => route.from === `/linear-algebra/${module.overviewAnchor}${suffix}`).to)
      .toBe(getLaModulePath(module, suffix === "/2" ? 2 : 1));
  }));
});


test("certificate completion requires all 18 parts including each advanced part", () => {
  const required = getRequiredSections("linear-algebra");
  expect(required).toHaveLength(18);
  expect(new Set(required).size).toBe(18);
  const complete = Object.fromEntries(required.map((id) => [id, true]));
  expect(isCourseComplete("linear-algebra", complete)).toBe(true);
  for (const module of LA_MODULES) for (const part of [1, 2]) {
    const id = `la-${module.id}-${part}`;
    expect(required).toContain(id);
    expect(isCourseComplete("linear-algebra", { ...complete, [id]: false })).toBe(false);
  }
  const legacyOnly = Object.fromEntries(required.slice(0, 12).map((id) => [id, true]));
  expect(isCourseComplete("linear-algebra", legacyOnly)).toBe(false);
  expect(getMinQuizScore("linear-algebra")).toBe(80);
  expect(hasPassedQuiz("linear-algebra", { "quiz-linear-algebra": { score: 52, total: 66 } })).toBe(false);
  expect(hasPassedQuiz("linear-algebra", { "quiz-linear-algebra": { score: 53, total: 66 } })).toBe(true);
});

test("certificate card and rendered overview agree on 66 questions and 18 parts", () => {
  const card = getCourseById("linear-algebra").modules.find((item) => item.path === "/quiz/linear-algebra");
  expect(card.description).toContain("66 MCQs");
  expect(card.meta).toBe("66 questions · 80% to pass");
  const { container } = render(<LinearAlgebraOverview />);
  expect(container.textContent).toContain("Complete all 18 required parts");
  expect(container.textContent).toContain("66-question certification quiz");
  expect(screen.getAllByText("Required for certificate")).toHaveLength(9);
  expect(screen.getAllByText("Extra depth")).toHaveLength(2);
  expect(container.textContent).not.toContain("30-question");
});

test.each([1, 2])("Stochastic Processes part %s links to the grouped Markov topic", (part) => {
  render(<StochasticProcessesGuide part={part} />);
  expect(screen.getByRole("link", { name: "Markov Chains & Steady States (Linear Algebra)" }))
    .toHaveAttribute("href", "/linear-algebra/applied-linear-algebra/1#markov-chains-steady-states");
});

test("the grouped Markov topic links back to the existing Stochastic Processes route", () => {
  render(<LaModuleGuide moduleId="applied-linear-algebra" part={1} />);
  const links = screen.getAllByRole("link", { name: /Stochastic Processes/ });
  expect(links.length).toBeGreaterThan(0);
  links.forEach((link) => expect(link).toHaveAttribute("href", "/probability-statistics/stochastic-processes/1"));
});
