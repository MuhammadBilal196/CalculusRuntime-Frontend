import React, { useState } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { GuideMcqSection } from "./GuideMcq";
import { hasPassedSectionQuizzes } from "../../data/sectionQuizGates";

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
