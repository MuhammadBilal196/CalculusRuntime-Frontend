import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useLearningHistory from "../../hooks/useLearningHistory";
import { unresolvedMistakes, questionKey } from "../../utils/mistakeNotebook";
import { newAttemptId } from "../../utils/quizAttempts";
import "./MistakeNotebook.css";
import { mixedMathToHtml } from "../../utils/mixedMath";
import "katex/dist/katex.min.css";

function RetryQuestion({ question, onAnswer }) {
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState("");
  return <article className="mistakes-card">
    <p className="mistakes-meta">{question.topic || "Other topic"} · {question.source}</p>
    <h2 dangerouslySetInnerHTML={{ __html: mixedMathToHtml(question.prompt) }} />
    <fieldset><legend>Choose your answer</legend>{question.options.map((option,index) =>
      <label key={index}><input type="radio" name={encodeURIComponent(questionKey(question))} checked={selected === index}
        onChange={() => setSelected(index)} /><span dangerouslySetInnerHTML={{ __html: mixedMathToHtml(option) }} /></label>)}</fieldset>
    <button disabled={selected === null} onClick={() => {
      const saved = onAnswer(question, selected);
      setMessage(!saved ? "Could not save this answer. Check browser storage and retry."
        : selected === question.correctIndex ? "Correct. Removed from your notebook." : "Not quite. Try again.");
    }}>Check answer</button>
    <p role="status">{message}</p>
  </article>;
}
export default function MistakeNotebook() {
  const { user, events, pending, error, append, retry } = useLearningHistory();
  const [course, setCourse] = useState("");
  const [topic, setTopic] = useState("");
  const [feedback, setFeedback] = useState("");
  const mistakes = useMemo(() => unresolvedMistakes(events), [events]);
  const courses = [...new Set(mistakes.map((q) => q.courseId || "Unclassified"))].sort();
  const topics = [...new Set(mistakes.filter((q) => !course || (q.courseId || "Unclassified") === course).map((q) => q.topic || "Other topic"))].sort();
  const visible = mistakes.filter((q) => (!course || (q.courseId || "Unclassified") === course) && (!topic || (q.topic || "Other topic") === topic));
  if (!user?.accessToken) return <main className="mistakes-page"><h1>Mistake Notebook</h1><p>Sign in to save and review your mistakes.</p><Link to="/login">Log in</Link></main>;
  return <main className="mistakes-page"><header><p className="mistakes-meta">YOUR STUDY HISTORY</p><h1>Mistake Notebook</h1>
    <p>Retry missed questions from guides, practice and course quizzes. Correct answers remove them from this list.</p></header>
    <div className="mistakes-controls"><label>Course<select value={course} onChange={(e) => { setCourse(e.target.value); setTopic(""); }}><option value="">All courses</option>{courses.map((id) => <option key={id}>{id}</option>)}</select></label>
    <label>Topic<select value={topic} onChange={(e) => setTopic(e.target.value)}><option value="">All topics</option>{topics.map((id) => <option key={id}>{id}</option>)}</select></label>
    <button onClick={retry}>Sync history</button></div>
    <p role="status">{feedback || `${visible.length} questions to review.`} {pending.length > 0 ? `${pending.length} changes waiting to sync.` : ""}</p>
    {error && <p role="alert">{error}</p>}
    {visible.length === 0 && <p>No missed questions match this selection. Answer a quiz while signed in to build your notebook.</p>}
    {visible.map((question) => <RetryQuestion key={questionKey(question)} question={question} onAnswer={(q,selectedIndex) => {
      const attemptId = newAttemptId();
      const record = { ...q, attemptId, responseId: "retry", selectedIndex,
        correct: selectedIndex === q.correctIndex, grading: "client", occurredAt: new Date().toISOString() };
      const saved = append({ eventId: `${attemptId}:retry`, kind: "question", data: record });
      if (saved && record.correct) setFeedback("Correct. The question was removed from your notebook.");
      return saved;
    }} />)}
  </main>;
}
