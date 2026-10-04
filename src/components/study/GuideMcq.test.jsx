import React, { useState } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { GuideMcqSection } from "./GuideMcq";
import { hasPassedSectionQuizzes } from "../../data/sectionQuizGates";

jest.setTimeout(15000);

const questions = Array.from({ length: 20 }, (_, i) => ({
  prompt: `Question ${i + 1}: $x^2$`,
  options: ["Right", "Wrong", "Third", "Fourth"],
  answer: "A",
  explanation: "The correct expression is $x^2$.",
}));

beforeEach(() => {
  localStorage.clear();
  global.IntersectionObserver = class {
    observe() {}
    disconnect() {}
  };
});

function Attempt({ onSaved }) {
  const [quizScores, setQuizScores] = useState({});
  return <>
    <GuideMcqSection id="quiz" section="la-a-lu-checkpoint" scoreId="test-score" questions={questions}
      onComplete={(score, total) => {
        onSaved(score, total);
        setQuizScores({ "guide-mcq-la-a-lu-checkpoint": { score, total } });
      }} />
    <output data-testid="gate">{hasPassedSectionQuizzes("la-a-lu-2", quizScores) ? "unlocked" : "locked"}</output>
  </>;
}

function answerAll(wrongCount) {
  for (let i = 0; i < 20; i += 1) {
    fireEvent.click(screen.getByRole("button", { name: i < wrongCount ? "B Wrong" : "A Right" }));
    fireEvent.click(screen.getByRole("button", { name: "Submit Answer" }));
    if (i < 19) fireEvent.click(screen.getByRole("button", { name: /NEXT/ }));
  }
}

test("records all first answers, advances after mistakes, and unlocks only after a full passing attempt", async () => {
  const saved = jest.fn();
  render(<Attempt onSaved={saved} />);
  expect(screen.getByTestId("gate").textContent).toBe("locked");
  expect(document.querySelector(".la-q-prompt .katex")).not.toBeNull();
  answerAll(4);
  await waitFor(() => expect(saved).toHaveBeenCalledWith(16, 20));
  expect(screen.getByTestId("gate").textContent).toBe("unlocked");
  expect(document.querySelector(".la-explanation-text .katex")).not.toBeNull();
  fireEvent.click(screen.getByRole("button", { name: /PREVIOUS/ }));
  expect(screen.queryByRole("button", { name: "Submit Answer" })).toBeNull();
  fireEvent.click(screen.getByRole("button", { name: /NEXT/ }));
  expect(saved).toHaveBeenCalledTimes(1);
});

test("a failed full attempt stays gated and can be retaken without an inflated score", async () => {
  const saved = jest.fn();
  render(<Attempt onSaved={saved} />);
  answerAll(5);
  await waitFor(() => expect(saved).toHaveBeenLastCalledWith(15, 20));
  expect(screen.getByTestId("gate").textContent).toBe("locked");
  fireEvent.click(screen.getByRole("button", { name: "Retake checkpoint" }));
  answerAll(0);
  await waitFor(() => expect(saved).toHaveBeenLastCalledWith(20, 20));
  expect(saved).toHaveBeenCalledTimes(2);
  expect(screen.getByTestId("gate").textContent).toBe("unlocked");
});

test("existing callers without onComplete retain their stored-score behavior", () => {
  render(<GuideMcqSection id="legacy" section="legacy" scoreId="legacy-score" questions={questions} />);
  fireEvent.click(screen.getByRole("button", { name: "A Right" }));
  fireEvent.click(screen.getByRole("button", { name: "Submit Answer" }));
  expect(localStorage.getItem("legacy-score-score")).toBe("1");
  expect(localStorage.getItem("legacy-score-unlocked")).toBe("1");
  expect(screen.queryByRole("button", { name: "Retake checkpoint" })).toBeNull();
});


test("an unanswered checkpoint cannot submit, advance or jump ahead", () => {
  const saved = jest.fn();
  render(<GuideMcqSection id="unanswered" scoreId="unanswered" questions={questions.slice(0, 2)} onComplete={saved} />);
  const submit = screen.getByRole("button", { name: "Submit Answer" });
  expect(submit).toBeDisabled();
  expect(screen.getByRole("button", { name: /NEXT/ })).toBeDisabled();
  expect(screen.getByRole("button", { name: "Go to question 2" })).toBeDisabled();
  fireEvent.click(submit);
  fireEvent.click(screen.getByRole("button", { name: "Go to question 2" }));
  expect(screen.getByText("Question 1 / 2")).toBeInTheDocument();
  expect(screen.queryByText("Correct!")).not.toBeInTheDocument();
  expect(saved).not.toHaveBeenCalled();
});

test("all four answer slots score correctly and submitted choices stay locked", async () => {
  const saved = jest.fn();
  const bank = "ABCD".split("").map((answer, index) => ({ ...questions[index], answer }));
  render(<GuideMcqSection id="slots" scoreId="slots" questions={bank} onComplete={saved} />);
  const labels = ["A Right", "B Wrong", "C Third", "D Fourth"];
  for (let index = 0; index < 4; index += 1) {
    fireEvent.click(screen.getByRole("button", { name: labels[(index + 1) % 4] }));
    fireEvent.click(screen.getByRole("button", { name: labels[index] }));
    fireEvent.click(screen.getByRole("button", { name: "Submit Answer" }));
    expect(screen.getByText("Correct!")).toBeInTheDocument();
    labels.forEach((name) => expect(screen.getByRole("button", { name })).toBeDisabled());
    if (index < 3) {
      expect(saved).not.toHaveBeenCalled();
      fireEvent.click(screen.getByRole("button", { name: /NEXT/ }));
    }
  }
  await waitFor(() => expect(saved).toHaveBeenCalledWith(4, 4));
  expect(saved).toHaveBeenCalledTimes(1);
});

test("assessed checkpoints ignore legacy stored mastery scores", async () => {
  localStorage.setItem("fresh-score", "20");
  localStorage.setItem("fresh-unlocked", "19");
  const saved = jest.fn();
  const { container } = render(<GuideMcqSection id="fresh" scoreId="fresh" questions={questions.slice(0, 2)} onComplete={saved} />);
  expect(container.querySelector(".la-quiz-score")).toHaveTextContent("Score 0 / 2");
  expect(screen.getByRole("button", { name: "Go to question 2" })).toBeDisabled();
  for (let index = 0; index < 2; index += 1) {
    fireEvent.click(screen.getByRole("button", { name: "B Wrong" }));
    fireEvent.click(screen.getByRole("button", { name: "Submit Answer" }));
    if (index === 0) fireEvent.click(screen.getByRole("button", { name: /NEXT/ }));
  }
  await waitFor(() => expect(saved).toHaveBeenCalledWith(0, 2));
  expect(localStorage.getItem("fresh-score")).toBe("20");
  expect(localStorage.getItem("fresh-unlocked")).toBe("19");
});
