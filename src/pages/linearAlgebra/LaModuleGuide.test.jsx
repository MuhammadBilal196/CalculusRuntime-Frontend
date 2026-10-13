import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import LaModuleGuide from "./LaModuleGuide";
import LaModulePart from "./LaModulePart";
import LinearAlgebraOverview from "./LinearAlgebraOverview";
import StochasticProcessesGuide from "../probabilityStatistics/StochasticProcessesGuide";
import { COURSE_CERTIFICATE_REQUIREMENTS, getRequiredSections, isCourseComplete, getMinQuizScore, hasPassedQuiz } from "../../data/courseCompletion";
import { LA_MODULES, LA_EXPANSION_MODULES, getLaModuleParts, getLaTopicPath, LA_TOPIC_REDIRECTS, LA_MODULE_REDIRECTS, getLaModulePath, getLaModuleTopics } from "../../data/laModules";
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

test("all eighteen checkpoints contain twenty questions with four distinct options and valid answers", () => {
  const banks = Object.values(quizzes);
  expect(banks).toHaveLength(18);
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


test("certificate completion requires all 24 parts including each advanced part", () => {
  const required = getRequiredSections("linear-algebra");
  expect(required).toHaveLength(24);
  expect(new Set(required).size).toBe(24);
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

test("certificate card retains its question reference and overview reports required parts", () => {
  const card = getCourseById("linear-algebra").modules.find((item) => item.path === "/quiz/linear-algebra");
  expect(card.description).toContain("99 MCQs");
  expect(card.meta).toBe("99 questions · 80% to pass");
  const { container } = render(<LinearAlgebraOverview />);
  expect(container.textContent).toContain("Complete all 24 required parts");
  expect(container.textContent).toContain("pass the certification quiz with a score of at least 80%");
  expect(screen.getAllByText("Required for certificate")).toHaveLength(12);
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


test("Numerical Linear Algebra publishes two parts with one complete topic each", () => {
  const module = LA_EXPANSION_MODULES[0];
  expect(getLaModuleParts(module)).toEqual([1, 2]);
  expect(getLaModuleTopics(module, 1)).toHaveLength(1);
  expect(getLaModuleTopics(module, 2)).toHaveLength(1);
  expect(getLaTopicPath(module, module.topics[1])).toBe("/linear-algebra/numerical-linear-algebra/2#eigenvalue-algorithms");
  expect(getLaTopicPath(module, module.topics[0])).toBe("/linear-algebra/numerical-linear-algebra/1#iterative-solvers");
  const cards = getCourseById("linear-algebra").modules;
  expect(cards.filter((card) => card.path === getLaModulePath(module))).toHaveLength(1);
  const { container } = render(<LaModulePart moduleId={module.id} part={1} />);
  expect(screen.getAllByTestId("checkpoint")).toHaveLength(1);
  expect(screen.getByTestId("checkpoint").getAttribute("data-count")).toBe("20");
  expect(container.querySelectorAll(".box.exm")).toHaveLength(5);
  expect(container.querySelector('a[href="/linear-algebra/numerical-linear-algebra/2"]')).not.toBeNull();
  expect(screen.getByTestId("bookmark").getAttribute("href")).toBe(getLaModulePath(module));
  expect(screen.getByTestId("completion").getAttribute("data-section")).toBe("la-numerical-linear-algebra-1");
  const ids = Array.from(container.querySelectorAll("[id]"), (element) => element.id);
  expect(new Set(ids).size).toBe(ids.length);
});

test("the iterative checkpoint requires 16 of 20 and saves the matching score", () => {
  const section = "la-numerical-linear-algebra-1";
  const key = "guide-mcq-la-iterative-solvers-checkpoint";
  expect(hasPassedSectionQuizzes(section, {})).toBe(false);
  expect(hasPassedSectionQuizzes(section, { [key]: { score: 15, total: 20 } })).toBe(false);
  expect(hasPassedSectionQuizzes(section, { [key]: { score: 16, total: 20 } })).toBe(true);
  render(<LaModuleGuide moduleId="numerical-linear-algebra" part={1} />);
  fireEvent.click(screen.getByRole("button", { name: "Pass la-iterative-solvers-checkpoint" }));
  expect(mockSaveQuizScore).toHaveBeenCalledWith(key, 16, 20);
});

test("the overview links the available expansion topic as required for certificate eligibility", () => {
  const { container } = render(<LinearAlgebraOverview />);
  expect(screen.queryByText("New topics")).not.toBeInTheDocument();
  expect(container.querySelector('#numerical-linear-algebra a').getAttribute("href")).toBe("/linear-algebra/numerical-linear-algebra/1");
  expect(container.querySelector('a[href="/linear-algebra/numerical-linear-algebra/2"]')).not.toBeNull();
  expect(getRequiredSections("linear-algebra")).toContain("la-numerical-linear-algebra-1");
});


test("the eigenvalue part renders once with independent completion and a return link", () => {
  const key = "guide-mcq-la-eigenvalue-algorithms-checkpoint";
  const section = "la-numerical-linear-algebra-2";
  const scores = { "guide-mcq-la-iterative-solvers-checkpoint": { score: 20, total: 20 } };
  expect(hasPassedSectionQuizzes(section, scores)).toBe(false);
  scores[key] = { score: 15, total: 20 };
  expect(hasPassedSectionQuizzes(section, scores)).toBe(false);
  mockSaveQuizScore.mockImplementation((id, score, total) => { scores[id] = { score, total }; });
  const { container } = render(<LaModulePart moduleId="numerical-linear-algebra" part={2} />);
  expect(container.querySelectorAll(".la-module-topic")).toHaveLength(1);
  expect(container.querySelectorAll(".box.exm")).toHaveLength(5);
  expect(screen.getAllByTestId("checkpoint")).toHaveLength(1);
  expect(screen.getByTestId("checkpoint")).toHaveAttribute("data-count", "20");
  expect(screen.getByTestId("completion")).toHaveAttribute("data-section", section);
  expect(screen.getByTestId("bookmark")).toHaveAttribute("href", "/linear-algebra/numerical-linear-algebra/2");
  expect(screen.getByRole("link", { name: "Open Part 1" })).toHaveAttribute("href", "/linear-algebra/numerical-linear-algebra/1");
  expect(container.textContent).not.toContain("Part 2 planned");
  const ids = Array.from(container.querySelectorAll("[id]"), (element) => element.id);
  expect(new Set(ids).size).toBe(ids.length);
  fireEvent.click(screen.getByRole("button", { name: "Pass la-eigenvalue-algorithms-checkpoint" }));
  expect(mockSaveQuizScore).toHaveBeenCalledWith(key, 16, 20);
  expect(hasPassedSectionQuizzes(section, scores)).toBe(true);
  expect(getRequiredSections("linear-algebra")).toContain(section);
});


test("Abstract Linear Algebra publishes a complete dual-spaces part and independent gate", () => {
  const module = LA_EXPANSION_MODULES.find((item) => item.id === "abstract-linear-algebra");
  expect(getLaModuleParts(module)).toEqual([1, 2]);
  expect(getLaModuleTopics(module, 1)).toHaveLength(1);
  expect(getLaModuleTopics(module, 2)).toHaveLength(1);
  const cards = getCourseById("linear-algebra").modules;
  expect(cards.filter((card) => card.path === getLaModulePath(module))).toHaveLength(1);
  expect(cards.find((card) => card.path === getLaModulePath(module)).meta).toContain("40 checkpoint MCQs");
  const scores = { "guide-mcq-la-eigenvalue-algorithms-checkpoint": { score: 20, total: 20 } };
  const section = "la-abstract-linear-algebra-1";
  const key = "guide-mcq-la-dual-spaces-checkpoint";
  expect(hasPassedSectionQuizzes(section, scores)).toBe(false);
  scores[key] = { score: 15, total: 20 };
  expect(hasPassedSectionQuizzes(section, scores)).toBe(false);
  mockSaveQuizScore.mockImplementation((id, score, total) => { scores[id] = { score, total }; });
  const { container } = render(<LaModulePart moduleId={module.id} part={1} />);
  expect(container.querySelectorAll(".la-module-topic")).toHaveLength(1);
  expect(container.querySelectorAll(".box.exm")).toHaveLength(5);
  expect(screen.getAllByTestId("checkpoint")).toHaveLength(1);
  expect(screen.getByTestId("checkpoint")).toHaveAttribute("data-count", "20");
  expect(screen.getByTestId("completion")).toHaveAttribute("data-section", section);
  expect(screen.getByTestId("bookmark")).toHaveAttribute("href", getLaModulePath(module));
  expect(container.querySelector('a[href="/linear-algebra/abstract-linear-algebra/2"]')).not.toBeNull();
  const ids = Array.from(container.querySelectorAll("[id]"), (element) => element.id);
  expect(new Set(ids).size).toBe(ids.length);
  fireEvent.click(screen.getByRole("button", { name: "Pass la-dual-spaces-checkpoint" }));
  expect(mockSaveQuizScore).toHaveBeenCalledWith(key, 16, 20);
  expect(hasPassedSectionQuizzes(section, scores)).toBe(true);
  expect(getRequiredSections("linear-algebra")).toContain(section);
});

test("the overview links both complete Abstract Linear Algebra parts", () => {
  const { container } = render(<LinearAlgebraOverview />);
  const moduleSection = container.querySelector("#abstract-linear-algebra");
  expect(moduleSection.querySelector('a').getAttribute("href")).toBe("/linear-algebra/abstract-linear-algebra/1");
  expect(moduleSection.querySelector('a[href="/linear-algebra/abstract-linear-algebra/2"]')).not.toBeNull();
  expect(moduleSection.textContent).not.toContain("Part 2 planned");
});


test("the tensor-products part renders once and requires its own checkpoint", () => {
  const section = "la-abstract-linear-algebra-2";
  const key = "guide-mcq-la-tensor-products-checkpoint";
  const scores = { "guide-mcq-la-dual-spaces-checkpoint": { score: 20, total: 20 } };
  expect(hasPassedSectionQuizzes(section, scores)).toBe(false);
  scores[key] = { score: 15, total: 20 };
  expect(hasPassedSectionQuizzes(section, scores)).toBe(false);
  mockSaveQuizScore.mockImplementation((id, score, total) => { scores[id] = { score, total }; });
  const { container } = render(<LaModulePart moduleId="abstract-linear-algebra" part={2} />);
  expect(container.querySelectorAll(".la-module-topic")).toHaveLength(1);
  expect(container.querySelectorAll(".box.exm")).toHaveLength(5);
  expect(screen.getAllByTestId("checkpoint")).toHaveLength(1);
  expect(screen.getByTestId("checkpoint")).toHaveAttribute("data-count", "20");
  expect(screen.getByTestId("completion")).toHaveAttribute("data-section", section);
  expect(screen.getByTestId("bookmark")).toHaveAttribute("href", "/linear-algebra/abstract-linear-algebra/2");
  expect(screen.getByRole("link", { name: "Open Part 1" })).toHaveAttribute("href", "/linear-algebra/abstract-linear-algebra/1");
  expect(container.textContent).not.toContain("Part 2 planned");
  const ids = Array.from(container.querySelectorAll("[id]"), (element) => element.id);
  expect(new Set(ids).size).toBe(ids.length);
  fireEvent.click(screen.getByRole("button", { name: "Pass la-tensor-products-checkpoint" }));
  expect(mockSaveQuizScore).toHaveBeenCalledWith(key, 16, 20);
  expect(hasPassedSectionQuizzes(section, scores)).toBe(true);
  expect(getRequiredSections("linear-algebra")).toContain(section);
});


test("Modern Applications publishes Spectral Graph Theory with its own gate", () => {
  const module = LA_EXPANSION_MODULES.find((item) => item.id === "modern-applications");
  expect(getLaModuleParts(module)).toEqual([1, 2]);
  expect(getLaModuleTopics(module, 1)).toHaveLength(1);
  const cards = getCourseById("linear-algebra").modules;
  expect(cards.filter((card) => card.path === getLaModulePath(module))).toHaveLength(1);
  const scores = {};
  const section = "la-modern-applications-1";
  const key = "guide-mcq-la-spectral-graph-checkpoint";
  expect(hasPassedSectionQuizzes(section, scores)).toBe(false);
  scores[key] = { score: 15, total: 20 };
  expect(hasPassedSectionQuizzes(section, scores)).toBe(false);
  mockSaveQuizScore.mockImplementation((id, score, total) => { scores[id] = { score, total }; });
  const { container } = render(<LaModulePart moduleId={module.id} part={1} />);
  expect(container.querySelectorAll(".la-module-topic")).toHaveLength(1);
  expect(container.querySelectorAll(".box.exm")).toHaveLength(5);
  expect(screen.getAllByTestId("checkpoint")).toHaveLength(1);
  expect(screen.getByTestId("checkpoint")).toHaveAttribute("data-count", "20");
  expect(screen.getByTestId("completion")).toHaveAttribute("data-section", section);
  const ids = Array.from(container.querySelectorAll("[id]"), (element) => element.id);
  expect(new Set(ids).size).toBe(ids.length);
  fireEvent.click(screen.getByRole("button", { name: "Pass la-spectral-graph-checkpoint" }));
  expect(mockSaveQuizScore).toHaveBeenCalledWith(key, 16, 20);
  expect(hasPassedSectionQuizzes(section, scores)).toBe(true);
});

test("Modern Applications publishes Matrix Calculus with its own gate", () => {
  const module = LA_EXPANSION_MODULES.find((item) => item.id === "modern-applications");
  expect(getLaModuleParts(module)).toEqual([1, 2]);
  expect(getLaModuleTopics(module, 2)).toHaveLength(1);
  const cards = getCourseById("linear-algebra").modules;
  expect(cards.filter((card) => card.path === getLaModulePath(module))).toHaveLength(1);
  const scores = {};
  const section = "la-modern-applications-2";
  const key = "guide-mcq-la-matrix-calculus-checkpoint";
  expect(hasPassedSectionQuizzes(section, scores)).toBe(false);
  scores[key] = { score: 15, total: 20 };
  expect(hasPassedSectionQuizzes(section, scores)).toBe(false);
  mockSaveQuizScore.mockImplementation((id, score, total) => { scores[id] = { score, total }; });
  const { container } = render(<LaModulePart moduleId={module.id} part={2} />);
  expect(container.querySelectorAll(".la-module-topic")).toHaveLength(1);
  expect(container.querySelectorAll(".box.exm")).toHaveLength(5);
  expect(screen.getAllByTestId("checkpoint")).toHaveLength(1);
  expect(screen.getByTestId("checkpoint")).toHaveAttribute("data-count", "20");
  expect(screen.getByTestId("completion")).toHaveAttribute("data-section", section);
  const ids = Array.from(container.querySelectorAll("[id]"), (element) => element.id);
  expect(new Set(ids).size).toBe(ids.length);
  fireEvent.click(screen.getByRole("button", { name: "Pass la-matrix-calculus-checkpoint" }));
  expect(mockSaveQuizScore).toHaveBeenCalledWith(key, 16, 20);
  expect(hasPassedSectionQuizzes(section, scores)).toBe(true);
});


test("overview certificate count and pass mark follow the eligibility configuration", () => {
  const requirement = COURSE_CERTIFICATE_REQUIREMENTS["linear-algebra"];
  const original = { ...requirement };
  try {
    requirement.requiredSections = [...original.requiredSections, "test-required-section"];
    requirement.minQuizScore = 85;
    const { container } = render(<LinearAlgebraOverview />);
    const text = container.querySelector('[aria-labelledby="structure-heading"]').textContent;
    expect(text).toContain(`Complete all ${requirement.requiredSections.length} required parts`);
    expect(text).toContain("at least 85%");
    expect(text).not.toContain("99-question");
  } finally {
    Object.assign(requirement, original);
  }
});
