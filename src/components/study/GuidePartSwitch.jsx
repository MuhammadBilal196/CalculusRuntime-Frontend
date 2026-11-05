import { Link } from "react-router-dom";

/**
 * Shown at the top of every guide sidebar (injected by StudyGuideShell):
 * a back link to the course / previous part and Part 1 / Part 2 tabs.
 */
export default function GuidePartSwitch({ info }) {
  if (!info) return null;
  const { courseId, courseTitle, base, part, parts = [1, 2], isTwoPart = parts.length > 1 } = info;

  return (
    <div className="sb-parts">
      <div className="sb-parts__nav-row">
        <Link className="sb-parts__course" to={`/courses/${courseId}`}>
          <span aria-hidden="true">←</span> {courseTitle}
        </Link>
        {isTwoPart && part === 2 ? (
          <Link className="sb-parts__prev" to={`${base}/1`}>
            ← Part 1
          </Link>
        ) : null}
      </div>
      {isTwoPart ? (
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
      ) : null}
    </div>
  );
}
