import { useState } from "react";
import { Link } from "react-router-dom";
import { newAttemptId } from "../../utils/quizAttempts";
import { selectedQuote } from "../../utils/studyNotes";
import "./StudyNotes.css";

export function NoteEditor({ note, onSave, onDelete, section }) {
  const [text, setText] = useState(note?.text || "");
  const [quote, setQuote] = useState(note?.quote || "");
  const [message, setMessage] = useState("");
  return <form className="notes-editor" onSubmit={(e) => {
    e.preventDefault();
    if (!text.trim() && !quote.trim()) { setMessage("Write a note or add a highlight first."); return; }
    const saved = onSave(text.trim(), quote.trim());
    setMessage(saved ? "Saved on this device; sync status is shown above." : "Could not save. Check browser storage and retry.");
    if (saved && !note?.noteId) { setText(""); setQuote(""); }
  }}>
    {section && <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => {
      const selected = selectedQuote(section);
      if (!selected) { setMessage("Select text inside this guide section first."); return; }
      setQuote(selected); setMessage("Highlight captured. Save it with your note.");
    }}>Capture highlight</button>}
    <label>Your note<textarea maxLength={10000} value={text} onChange={(e) => setText(e.target.value)} /></label>
    <label>Highlighted excerpt<textarea maxLength={2000} value={quote} onChange={(e) => setQuote(e.target.value)} /></label>
    <div className="notes-actions"><button type="submit">Save note</button>{onDelete && <button type="button" onClick={() => setMessage(onDelete() ? "Deleted." : "Could not delete. Please retry.")}>Delete note</button>}</div>
    <p role="status">{message}</p>
  </form>;
}
export default function NotesPanel({ metadata, section, history }) {
  const {user, append, error, pending} = history;
  if (!user?.accessToken) return <aside className="notes-panel"><p><Link to="/login">Sign in</Link> to save notes for this section.</p></aside>;
  return <aside className="notes-panel" aria-label={`Notes for ${metadata.title}`}>
    <details><summary>Notes & highlights for this section</summary>
      <p>Select text in this section, then choose “Capture highlight”, or write your own note below.</p>
      <p>{window.CSS?.highlights && typeof window.Highlight === "function"
        ? "Saved excerpts are highlighted wherever the same text appears in this section. Edit or delete them in Notes & Highlights."
        : "This browser can save excerpts, but cannot display coloured lesson highlights. Use a browser with CSS Custom Highlight support."}</p>
      <p role="status">{pending.length ? `${pending.length} changes waiting to sync.` : ""}</p>
      {error && <p role="alert">{error}</p>}
      <NoteEditor section={section} onSave={(text, excerpt) => {
        const id=newAttemptId();
        return append({eventId:id,kind:"note",data:{...metadata,noteId:id,text,quote:excerpt,deleted:false,occurredAt:new Date().toISOString()}});
      }} />
      <Link to="/notes">View and edit all notes</Link>
    </details>
  </aside>;
}
