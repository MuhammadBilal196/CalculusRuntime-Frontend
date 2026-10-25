import { Link } from "react-router-dom";

/**
 * Shown at the top of every two-part guide sidebar (injected by
 * StudyGuideShell): a link back to the course and Part 1 / Part 2 tabs.
 */
export default function GuidePartSwitch({ info }) {
  if (!info) return null;
  const { courseId, courseTitle, base, part, parts } = info;

  return (
    <div className="sb-parts">
      <Link className="sb-parts__course" to={`/courses/${courseId}`}>
        <span aria-hidden="true">‹</span> {courseTitle}
      </Link>
      <div className="sb-parts__tabs" aria-label="Module parts">
        {parts.map((n) => (
          <Link
            key={n}
            to={`${base}/${n}`}
            className={`sb-parts__tab${n === part ? " is-current" : ""}`}
            aria-current={n === part ? "page" : undefined}
          >
            Part {n}
          </Link>
        ))}
      </div>
    </div>
  );
}
