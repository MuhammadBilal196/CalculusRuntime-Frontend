import { Link } from "react-router-dom";
import { Plus, Check } from "lucide-react";
import { useEnrollments } from "../../context/EnrollmentContext";
import { CATALOG_COURSE_IDS, COURSE_META, getCourseTopics } from "../../data/courseCatalog";
import { getCourseById } from "../../data/courses";
import "./CourseRegister.css";

/**
 * Cards for the courses a student hasn't registered for yet, each with a
 * Register button. Renders nothing once every course is registered.
 */
export default function CourseRegister({ title = "Register for another course", compact = false, onRegistered }) {
  const { courses, register } = useEnrollments();
  const available = CATALOG_COURSE_IDS.filter((id) => !courses.includes(id));
  if (!available.length) return null;

  return (
    <section className={`crg${compact ? " crg--compact" : ""}`} aria-label={title}>
      <h2 className="crg-title">{title}</h2>
      <div className="crg-grid">
        {available.map((id) => {
          const course = getCourseById(id);
          const topics = getCourseTopics(id);
          const core = topics.filter((t) => t.core).length;
          return (
            <article key={id} className={`crg-card crg-card--${COURSE_META[id].tone}`}>
              <span className="crg-icon" aria-hidden="true">
                {COURSE_META[id].icon}
              </span>
              <div className="crg-body">
                <h3 className="crg-name">{course?.title || id}</h3>
                {!compact ? <p className="crg-desc">{course?.description}</p> : null}
                <p className="crg-meta">
                  {topics.length} modules · {core} core
                </p>
              </div>
              <div className="crg-actions">
                <button
                  type="button"
                  className="crg-btn"
                  onClick={() => {
                    register(id);
                    onRegistered?.(id);
                  }}
                >
                  <Plus size={15} strokeWidth={2.5} aria-hidden="true" /> Register
                </button>
                {!compact ? (
                  <Link to={`/courses/${id}`} className="crg-link">
                    Preview
                  </Link>
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

/** Small "Registered" / "Register" control for a course page header. */
export function CourseRegisterButton({ courseId }) {
  const { isRegistered, register } = useEnrollments();
  if (isRegistered(courseId)) {
    return (
      <span className="crg-pill">
        <Check size={14} strokeWidth={3} aria-hidden="true" /> Registered
      </span>
    );
  }
  return (
    <button type="button" className="crg-btn" onClick={() => register(courseId)}>
      <Plus size={15} strokeWidth={2.5} aria-hidden="true" /> Register for this course
    </button>
  );
}
