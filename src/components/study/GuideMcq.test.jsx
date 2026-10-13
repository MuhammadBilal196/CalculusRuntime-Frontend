import React, { useState } from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { GuideMcqSection } from "./GuideMcq";
import { SECTION_GUIDE_QUIZ_KEYS, getSectionQuizGateStatus, hasPassedSectionQuizzes } from "../../data/sectionQuizGates";

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


test("a rejected result save can retry the same score without answering again", async () => {
  const saved = jest.fn().mockRejectedValueOnce(new Error("offline")).mockResolvedValueOnce(undefined);
  render(<GuideMcqSection id="save-retry" scoreId="save-retry" questions={questions.slice(0, 1)} onComplete={saved} />);
  fireEvent.click(screen.getByRole("button", { name: "A Right" }));
  fireEvent.click(screen.getByRole("button", { name: "Submit Answer" }));
  expect(await screen.findByRole("alert")).toHaveTextContent("Your result could not be saved");
  expect(screen.getByRole("status")).toHaveTextContent("Attempt complete: 1/1 (100%)");
  fireEvent.click(screen.getByRole("button", { name: "Save result again" }));
  await waitFor(() => expect(saved).toHaveBeenCalledTimes(2));
  expect(saved.mock.calls).toEqual([[1, 1], [1, 1]]);
  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  expect(screen.getByRole("button", { name: "A Right" })).toBeDisabled();
});

test("retaking after a save failure clears the error, answers and navigation locks", async () => {
  const saved = jest.fn().mockRejectedValueOnce(new Error("offline")).mockResolvedValueOnce(undefined);
  const { container } = render(<GuideMcqSection id="reset" scoreId="reset" questions={questions.slice(0, 2)} onComplete={saved} />);
  for (let index = 0; index < 2; index += 1) {
    fireEvent.click(screen.getByRole("button", { name: "A Right" }));
    fireEvent.click(screen.getByRole("button", { name: "Submit Answer" }));
    if (index === 0) fireEvent.click(screen.getByRole("button", { name: /NEXT/ }));
  }
  await screen.findByRole("alert");
  fireEvent.click(screen.getByRole("button", { name: "Retake checkpoint" }));
  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  expect(screen.queryByRole("status")).not.toBeInTheDocument();
  expect(screen.getByText("Question 1 / 2")).toBeInTheDocument();
  expect(container.querySelector(".la-quiz-score")).toHaveTextContent("Score 0 / 2");
  expect(screen.getByRole("button", { name: "Submit Answer" })).toBeDisabled();
  expect(screen.getByRole("button", { name: "Go to question 2" })).toBeDisabled();
  for (let index = 0; index < 2; index += 1) {
    fireEvent.click(screen.getByRole("button", { name: "B Wrong" }));
    fireEvent.click(screen.getByRole("button", { name: "Submit Answer" }));
    if (index === 0) {
      expect(saved).toHaveBeenCalledTimes(1);
      fireEvent.click(screen.getByRole("button", { name: /NEXT/ }));
    }
  }
  await waitFor(() => expect(saved).toHaveBeenCalledTimes(2));
  expect(saved.mock.calls).toEqual([[2, 2], [0, 2]]);
  expect(screen.getByRole("status")).toHaveTextContent("Attempt complete: 0/2 (0%)");
});

test("every registered section gate requires all its checkpoints to reach 80 percent", () => {
  const entries = Object.entries(SECTION_GUIDE_QUIZ_KEYS);
  expect(entries.length).toBeGreaterThan(0);
  for (const [section, keys] of entries) {
    const passed = Object.fromEntries(keys.map((key) => [`guide-mcq-${key}`, { score: 16, total: 20 }]));
    expect({ section, passed: hasPassedSectionQuizzes(section, passed) }).toEqual({ section, passed: true });
    expect(getSectionQuizGateStatus(section, passed)).toEqual({ locked: false, required: keys, missing: [], failed: [] });
    for (const key of keys) {
      const incomplete = { ...passed };
      delete incomplete[`guide-mcq-${key}`];
      expect({ section, key, passed: hasPassedSectionQuizzes(section, incomplete) }).toEqual({ section, key, passed: false });
      expect(getSectionQuizGateStatus(section, incomplete)).toEqual({ locked: true, required: keys, missing: [key], failed: [] });
      const failed = { ...passed, [`guide-mcq-${key}`]: { score: 15, total: 20 } };
      expect(hasPassedSectionQuizzes(section, failed)).toBe(false);
      expect(getSectionQuizGateStatus(section, failed)).toEqual({ locked: true, required: keys, missing: [], failed: [{ key, pct: 75 }] });
    }
  }
});

describe('saved quiz progress regressions', () => {
  function mount() {
    return render(<GuideMcqSection id="audit" section="vector-16-4" scoreId="audit" questions={questions.slice(0, 3)} />);
  }
  function answer(right) {
    fireEvent.click(screen.getByRole('button', {name:right?'A Right':'B Wrong'}));
    fireEvent.click(screen.getByRole('button', {name:'Submit Answer'}));
  }
  test('wrong first answer then correct second answer increments score and completion', () => {
    const {container}=mount(); answer(false);
    fireEvent.click(screen.getByRole('button',{name:/NEXT/}));
    answer(true);
    expect(screen.getByText('Correct!')).toBeInTheDocument();
    expect(container.querySelector('.la-quiz-score')).toHaveTextContent('Score 1 / 3');
    expect(container.querySelector('.la-quiz-progress-text')).toHaveTextContent('Progress: 2 of 3 answered (67%)');
  });
  test('revisiting a final answer cannot award duplicate points', () => {
    const {container}=mount();
    for(let i=0;i<3;i++){answer(true);if(i<2)fireEvent.click(screen.getByRole('button',{name:/NEXT/}));}
    fireEvent.click(screen.getByRole('button',{name:/PREVIOUS/}));
    fireEvent.click(screen.getByRole('button',{name:/NEXT/}));
    expect(screen.queryByRole('button',{name:'Submit Answer'})).toBeNull();
    expect(container.querySelector('.la-quiz-score')).toHaveTextContent('Score 3 / 3');
  });
  test('refresh restores the current question and locks submitted answers', () => {
    const view=mount();answer(true);
    fireEvent.click(screen.getByRole('button',{name:/NEXT/}));answer(true);
    view.unmount();const {container}=mount();
    expect(container.querySelector('.la-quiz-score')).toHaveTextContent('Score 2 / 3');
    expect(screen.getByText('Question 2 / 3')).toBeInTheDocument();
    expect(screen.queryByRole('button',{name:'Submit Answer'})).toBeNull();
    expect(container.querySelector('.la-quiz-score')).toHaveTextContent('Score 2 / 3');
  });
});


test("completed ordinary quiz can retake and the reset survives remount", () => {
  const props = { id: 'retake-ordinary', scoreId: 'retake-ordinary', questions: questions.slice(0, 1) };
  const view = render(<GuideMcqSection {...props} />);
  fireEvent.click(screen.getByRole('button', { name: 'B Wrong' }));
  fireEvent.click(screen.getByRole('button', { name: 'Submit Answer' }));
  expect(screen.getByRole('progressbar', { name: 'Quiz completion' })).toHaveAttribute('value', '1');
  fireEvent.click(screen.getByRole('button', { name: 'Retake quiz' }));
  view.unmount();
  const { container } = render(<GuideMcqSection {...props} />);
  expect(container.querySelector('.la-quiz-score')).toHaveTextContent('Score 0 / 1');
  expect(screen.getByRole('progressbar')).toHaveAttribute('value', '0');
  expect(screen.getByRole('button', { name: 'Submit Answer' })).toBeDisabled();
});

test.each(['old', 'malformed', 'changed'])("%s saved progress starts safely with an explanation", (kind) => {
  if (kind === 'old') localStorage.setItem('restore-score', '99');
  if (kind === 'malformed') localStorage.setItem('restore-progress-v2', '{');
  if (kind === 'changed') localStorage.setItem('restore-progress-v2', JSON.stringify({signature: 'old bank', answers: {0: {selected: 0}}}));
  const { container } = render(<GuideMcqSection id="restore" scoreId="restore" questions={questions.slice(0, 2)} />);
  expect(container.querySelector('.la-quiz-score')).toHaveTextContent('Score 0 / 2');
  expect(screen.getByRole('status')).toHaveTextContent(/fresh attempt/);
  expect(screen.getByRole('progressbar')).toHaveAttribute('value', '0');
});

test("storage failure does not prevent scoring and reports unsaved progress", () => {
  const write = jest.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('quota'); });
  try {
    const { container } = render(<GuideMcqSection id="quota" scoreId="quota" questions={questions.slice(0, 2)} />);
    fireEvent.click(screen.getByRole('button', { name: 'A Right' }));
    fireEvent.click(screen.getByRole('button', { name: 'Submit Answer' }));
    expect(container.querySelector('.la-quiz-score')).toHaveTextContent('Score 1 / 2');
    expect(screen.getByRole('progressbar')).toHaveAttribute('value', '1');
    expect(screen.getByRole('alert')).toHaveTextContent('Progress could not be saved');
  } finally { write.mockRestore(); }
});

test("restored correctness is recalculated rather than trusting a saved score flag", () => {
  const bank = questions.slice(0, 2);
  localStorage.setItem('tampered-progress-v2', JSON.stringify({
    signature: JSON.stringify(bank.map(({prompt, options, answer}) => [prompt, options, answer])),
    answers: {0: {selected: 1, correct: true}}, index: 1,
  }));
  const { container } = render(<GuideMcqSection id="tampered" scoreId="tampered" questions={bank} />);
  expect(container.querySelector('.la-quiz-score')).toHaveTextContent('Score 0 / 2');
  expect(screen.getByRole('progressbar')).toHaveAttribute('value', '1');
});
