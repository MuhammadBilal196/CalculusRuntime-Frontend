import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import useLearningHistory from "../../hooks/useLearningHistory";
import { latestNotes, validSectionPath } from "../../utils/studyNotes";
import { newAttemptId } from "../../utils/quizAttempts";
import { NoteEditor } from "./NotesPanel";
import "./StudyNotes.css";
export default function StudyNotes() {
  const {user, events, pending, error, append, retry} = useLearningHistory();
  const [course,setCourse]=useState("");
  const notes=useMemo(()=>latestNotes(events),[events]);
  if(!user?.accessToken) return <main className="notes-page"><h1>Notes & Highlights</h1><p>Sign in to view your saved notes.</p><Link to="/login">Log in</Link></main>;
  const update=(note,text,quote,deleted=false)=>append({eventId:newAttemptId(),kind:"note",data:{...note,text,quote,deleted,occurredAt:new Date().toISOString()}});
  return <main className="notes-page"><h1>Notes & Highlights</h1><p>Save notes from a guide section, then review or edit them here.</p>
    <div className="notes-controls"><label>Course<select value={course} onChange={(e)=>setCourse(e.target.value)}><option value="">All courses</option>{[...new Set(notes.map(n=>n.courseId))].sort().map(id=><option key={id}>{id}</option>)}</select></label><button onClick={retry}>Sync notes</button></div>
    <p role="status">{notes.length} saved notes. {pending.length ? `${pending.length} changes waiting to sync.` : ""}</p>{error&&<p role="alert">{error}</p>}
    {notes.filter(n=>!course||n.courseId===course).map(note=><article className="notes-card" key={`${note.noteId}:${note.occurredAt}:${user.username}`}>
      <h2>{note.title}</h2><p>{note.courseId}</p>{note.quote&&<blockquote><mark>{note.quote}</mark></blockquote>}
      {validSectionPath(note.path)&&<Link to={note.path}>Return to section</Link>}
      <NoteEditor note={note} onSave={(text,quote)=>update(note,text,quote)} onDelete={()=>update(note,"","",true)}/>
    </article>)}
    {!notes.some(n=>!course||n.courseId===course)&&<p>No notes match this selection. Open a guide to add your first note.</p>}
  </main>;
}
