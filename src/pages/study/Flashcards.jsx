import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useLearningHistory from "../../hooks/useLearningHistory";
import { FLASHCARDS, FLASHCARD_COURSES, flashcardProgress, dueCounts } from "../../utils/flashcards";
import { newAttemptId } from "../../utils/quizAttempts";
import "./Flashcards.css";

export default function Flashcards() {
  const { user, events, pending, error, append, retry } = useLearningHistory();
  const [course, setCourse] = useState("linear-algebra");
  const [topic, setTopic] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [message, setMessage] = useState("");
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const id = setInterval(() => setNow(Date.now()), 30000); return () => clearInterval(id); }, []);
  const progress = useMemo(() => flashcardProgress(events), [events]);
  const courseCards = FLASHCARDS.filter((c) => c.courseId === course);
  const topics = [...new Set(courseCards.map((c) => c.topic))];
  const cards = courseCards.filter((c) => !topic || c.topic === topic);
  const counts = dueCounts(cards, progress, now);
  const card = cards.find((c) => !progress[c.id] || progress[c.id].dueAt <= now);
  useEffect(() => { setRevealed(false); setMessage(""); }, [card?.id, user?.username]);
  if (!user?.accessToken) return <main className="flashcards-page"><h1>Flashcards</h1><p>Sign in to save your review schedule.</p><Link to="/login">Log in</Link></main>;
  return <main className="flashcards-page"><h1>Flashcards</h1><p>Recall a formula or definition, reveal it, then rate your answer.</p>
    <div className="flashcards-controls"><label>Course<select value={course} onChange={(e) => { setCourse(e.target.value); setTopic(""); setRevealed(false); }}>
      {Object.entries(FLASHCARD_COURSES).map(([name,id]) => <option key={id} value={id}>{name}</option>)}
    </select></label><label>Topic<select value={topic} onChange={(e) => { setTopic(e.target.value); setRevealed(false); }}>
      <option value="">All topics</option>{topics.map((name) => <option key={name}>{name}</option>)}
    </select></label><button onClick={retry}>Sync reviews</button></div>
    <p role="status">{counts.today} due today · {counts.now} ready now · {cards.length} cards. {pending.length ? `${pending.length} changes waiting to sync.` : ""}</p>
    {error && <p role="alert">{error}</p>}
    {card ? <article className="flashcards-card"><p>{card.topic} · Box {progress[card.id]?.box || 1} of 5</p>
      <h2>{card.front}</h2><button aria-expanded={revealed} onClick={() => setRevealed(!revealed)}>{revealed ? "Hide answer" : "Reveal answer"}</button>
      {revealed && <div className="flashcards-answer"><p>{card.back}</p><p>{card.note}</p></div>}
      <div className="flashcards-ratings">{["Again", "Good", "Easy"].map((rating) => <button key={rating} disabled={!revealed} onClick={() => {
        const saved = append({ eventId: newAttemptId(), kind: "flashcard", data: { cardId: card.id, rating, occurredAt: new Date().toISOString() } });
        if (!saved) setMessage("Could not save this review. Check browser storage and retry.");
        else { setRevealed(false); setNow(Date.now()); }
      }}>{rating}</button>)}</div><p role="status">{message}</p>
    </article> : <p>No cards are ready now. Your saved schedule will bring them back when due.</p>}
    <details><summary>How scheduling works</summary><p>Five boxes use 1, 2, 4, 7 and 14 day intervals. Good advances one box; Easy advances two, up to box 5. Again returns a card to box 1 for a retry in 10 minutes. New cards are immediately due. Due today includes overdue cards and reviews scheduled before local midnight.</p></details>
  </main>;
}
