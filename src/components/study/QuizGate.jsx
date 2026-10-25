/**
 * Shows a topic quiz only after the previous topic's quiz is passed.
 * Locked: a placeholder card; the hint shows through data-lock-hint
 * (same look as the Potential Theory page). Unlocked: the quiz itself.
 */
export default function QuizGate({ unlocked = true, id, title, hint, children }) {
  if (unlocked) return children;
  return (
    <section id={id} className="mcq-section mcq-section-locked" data-lock-hint={hint}>
      <div className="mcq-section-head">
        <span className="mcq-section-badge">Locked</span>
        <span className="mcq-section-title">{title}</span>
      </div>
    </section>
  );
}
