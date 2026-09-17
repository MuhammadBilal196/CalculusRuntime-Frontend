import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useProgress } from "../../context/ProgressContext";
import {
  COURSE_CERTIFICATE_REQUIREMENTS,
  getCourseTitle,
  getRemainingSections,
  getRequiredSections,
} from "../../data/courseCompletion";
import { COURSES } from "../../data/courses";
import { CURRICULUM } from "../dashboard/Dashboard";
import "./MyCertificates.css";
import { fetchWithTimeout } from "../../utils/fetchWithTimeout";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8002";
const COURSE_IDS = Object.keys(COURSE_CERTIFICATE_REQUIREMENTS);

function formatDate(ts) {
  if (!ts) return "";
  let d;
  if (typeof ts === "number") {
    d = new Date(ts < 10000000000 ? ts * 1000 : ts);
  } else {
    d = new Date(ts);
  }
  return isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
}

function MyCertificates() {
  const { user, isHydrated } = useAuth();
  const { progress } = useProgress();
  const [earned, setEarned] = useState(null); // null = loading, else map courseId -> record
  const [loadError, setLoadError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [selectedCourseId, setSelectedCourseId] = useState(COURSE_IDS[0]);

  useEffect(() => {
    if (!isHydrated || !user) return;
    let cancelled = false;
    setLoadError(false);

    (async () => {
      try {
        const res = await fetchWithTimeout(`${API_URL}/api/certificates/mine`, {
          headers: { Authorization: `Bearer ${user.accessToken}` },
        });
        if (!res.ok) throw new Error();
        const list = await res.json();
        if (cancelled) return;
        const byCourseId = {};
        list.forEach((c) => {
          byCourseId[c.course_id] = c;
        });
        setEarned(byCourseId);
      } catch {
        if (!cancelled) setLoadError(true);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isHydrated, user, retryCount]);

  if (!isHydrated) {
    return (
      <main className="mycerts-page">
        <div className="mycerts-state">Loading…</div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="mycerts-page">
        <div className="mycerts-state">
          <h2>Sign in required</h2>
          <p>Sign in to see your course progress and certificates.</p>
          <Link className="mycerts-btn mycerts-btn--primary" to="/login">
            Sign in
          </Link>
        </div>
      </main>
    );
  }

  // Selected course data & curriculum topics
  const selectedCourseTitle = getCourseTitle(selectedCourseId);
  const selectedCourseTopics = CURRICULUM.filter(
    (topic) => topic.courseId === selectedCourseId
  );
  const selectedCourseParts = selectedCourseTopics.flatMap((t) => t.parts);
  const selectedDonePartsCount = selectedCourseParts.filter(
    (p) => progress?.completedSections?.[p.id]
  ).length;
  const selectedCoursePct =
    selectedCourseParts.length > 0
      ? Math.round((selectedDonePartsCount / selectedCourseParts.length) * 100)
      : 0;

  return (
    <main className="mycerts-page">
      {loadError && (
        <div className="mycerts-error-banner">
          <span>
            Couldn't reach the server (it may be waking up from sleep — this can take up to a minute).
          </span>
          <button
            type="button"
            className="mycerts-btn mycerts-btn--primary"
            onClick={() => setRetryCount((n) => n + 1)}
          >
            Try again
          </button>
        </div>
      )}

      <div className="mycerts-layout">
        {/* Left Column: Course Progress & Content Checklist */}
        <div className="mycerts-col-main">
          <section className="mycerts-section">
            <h2 className="mycerts-section-title">In Progress Courses:</h2>
            <div className="mycerts-in-progress-list">
              {COURSE_IDS.map((courseId) => {
                const courseTitle = getCourseTitle(courseId);
                const courseObj = COURSES.find((c) => c.id === courseId);
                const reqs = getRequiredSections(courseId);
                const totalSecs = reqs.length || 1;
                const completedCount = reqs.filter(
                  (s) => progress?.completedSections?.[s]
                ).length;
                const pct = Math.round((completedCount / totalSecs) * 100);
                const isEarned = !!(earned && earned[courseId]);
                const nextRemaining = getRemainingSections(
                  courseId,
                  progress?.completedSections || {}
                );
                const isSelected = selectedCourseId === courseId;

                return (
                  <div
                    className={`mycerts-course-card ${isSelected ? "mycerts-course-card--selected" : ""}`}
                    key={courseId}
                    onClick={() => setSelectedCourseId(courseId)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedCourseId(courseId);
                      }
                    }}
                  >
                    <div className={`mycerts-course-icon-wrap mycerts-course-icon-wrap--${courseId}`}>
                      {courseObj?.logo ? (
                        <div className="mycerts-math-logo">{courseObj.logo}</div>
                      ) : (
                        <span className="mycerts-math-glyph">{courseObj?.icon || "∫"}</span>
                      )}
                    </div>

                    <div className="mycerts-course-body">
                      <div className="mycerts-course-title-row">
                        <h3 className="mycerts-course-title">{courseTitle}</h3>
                        {isSelected && (
                          <span className="mycerts-active-badge">Active View</span>
                        )}
                      </div>

                      <div className="mycerts-progress-row">
                        <div className="mycerts-progress-track">
                          <div
                            className="mycerts-progress-fill"
                            style={{ width: `${isEarned ? 100 : pct}%` }}
                          />
                        </div>
                        <span className="mycerts-pct-label">
                          {isEarned ? "100" : pct}% Complete
                        </span>
                      </div>
                    </div>

                    <div className="mycerts-course-action" onClick={(e) => e.stopPropagation()}>
                      {isEarned ? (
                        <Link
                          to={`/certificate/${courseId}`}
                          className="mycerts-btn mycerts-btn--continue"
                        >
                          View Certificate
                        </Link>
                      ) : nextRemaining.length === 0 ? (
                        <Link
                          to={`/quiz/${courseId}`}
                          className="mycerts-btn mycerts-btn--continue"
                        >
                          Take Quiz
                        </Link>
                      ) : (
                        <Link
                          to={`/courses/${courseId}`}
                          className="mycerts-btn mycerts-btn--continue"
                        >
                          Continue
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Dynamic Course Content Checklist for Selected Course */}
          <section className="mycerts-section">
            <div className="mycerts-content-header">
              <div>
                <h2 className="mycerts-section-title">Course Content: {selectedCourseTitle}</h2>
                <p className="mycerts-content-subtitle">
                  {selectedDonePartsCount} of {selectedCourseParts.length} parts completed ({selectedCoursePct}%)
                </p>
              </div>
              <div className="mycerts-course-switcher">
                {COURSE_IDS.map((cId) => {
                  const cObj = COURSES.find((c) => c.id === cId);
                  return (
                    <button
                      key={cId}
                      type="button"
                      className={`mycerts-tab-pill ${selectedCourseId === cId ? "mycerts-tab-pill--active" : ""}`}
                      onClick={() => setSelectedCourseId(cId)}
                    >
                      {cObj?.icon || "✦"} {cObj?.title.split(" ")[0]}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mycerts-content-checklist">
              {selectedCourseTopics.map((topic, i) => {
                const topicParts = topic.parts || [];
                const doneParts = topicParts.filter(
                  (p) => !!progress?.completedSections?.[p.id]
                ).length;
                const isAllDone = topicParts.length > 0 && doneParts === topicParts.length;
                const firstPart = topicParts[0];

                return (
                  <div className="mycerts-checklist-item" key={topic.id}>
                    <div className="mycerts-checklist-info">
                      <span className="mycerts-checklist-num">
                        {i + 1}
                      </span>
                      <div>
                        <div className="mycerts-checklist-title">
                          {firstPart ? (
                            <Link to={firstPart.path} className="mycerts-topic-link">
                              {topic.title}
                            </Link>
                          ) : (
                            topic.title
                          )}
                        </div>
                        <div className="mycerts-checklist-sub">
                          {topicParts.map((p) => p.label.split("—")[1]?.trim() || p.label).join(" · ")}
                        </div>
                      </div>
                    </div>
                    <div className="mycerts-checklist-status">
                      {isAllDone ? (
                        <span className="mycerts-check-icon" title="All parts completed">✓</span>
                      ) : doneParts > 0 ? (
                        <span className="mycerts-partial-badge">{doneParts}/{topicParts.length}</span>
                      ) : (
                        <span className="mycerts-pending-dash" title="Not yet completed">−</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right Column: Earned Certificates */}
        <div className="mycerts-col-side">
          <section className="mycerts-section">
            <h2 className="mycerts-section-title">Earned Certificates:</h2>
            <div className="mycerts-certs-grid">
              {COURSE_IDS.map((courseId) => {
                const courseTitle = getCourseTitle(courseId);
                const record = earned ? earned[courseId] : undefined;
                const reqs = getRequiredSections(courseId);
                const completedCount = reqs.filter(
                  (s) => progress?.completedSections?.[s]
                ).length;
                const isComplete = reqs.length > 0 && completedCount === reqs.length;

                const isSelected = selectedCourseId === courseId;

                return (
                  <div
                    className={`mycerts-cert-card ${isSelected ? "mycerts-cert-card--selected" : ""}`}
                    key={courseId}
                    onClick={() => setSelectedCourseId(courseId)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        setSelectedCourseId(courseId);
                      }
                    }}
                  >
                    {/* Realistic Certificate Thumbnail */}
                    <div className="mycerts-cert-thumb">
                      <div className="mycerts-cert-thumb-inner">
                        <div className="mycerts-cert-thumb-badge">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          >
                            <circle cx="12" cy="12" r="9" />
                            <path d="M12 7v5l3 3" />
                          </svg>
                        </div>
                        <div className="mycerts-cert-thumb-ribbon">
                          <span className="ribbon-tail" />
                        </div>
                        <div className="mycerts-cert-thumb-header">
                          Certificate of Completion
                        </div>
                        <div className="mycerts-cert-thumb-line" />
                        <div className="mycerts-cert-thumb-name">
                          {user?.username || user?.displayName || user?.email?.split("@")[0] || "Student"}
                        </div>
                        <div className="mycerts-cert-thumb-sub">
                          {courseTitle}
                        </div>
                      </div>
                    </div>

                    <div className="mycerts-cert-card-meta">
                      <h4 className="mycerts-cert-card-title">
                        Certificate of Completion – {courseTitle}
                      </h4>
                      {record ? (
                        <>
                          {record.issued_at ? (
                            <div className="mycerts-cert-sub" style={{ marginBottom: "0.35rem" }}>
                              Issued {formatDate(record.issued_at)}
                            </div>
                          ) : null}
                          <div className="mycerts-cert-links">
                            <a
                              href={record.pdf_url?.startsWith("http") ? record.pdf_url : `${API_URL}${record.pdf_url}`}
                              className="mycerts-download-link"
                              download
                            >
                              Download
                            </a>
                            <span className="mycerts-link-sep">·</span>
                            <Link
                              to={`/certificate/${courseId}`}
                              className="mycerts-view-link"
                            >
                              View
                            </Link>
                          </div>
                        </>
                      ) : isComplete ? (
                        <Link
                          to={`/quiz/${courseId}`}
                          className="mycerts-download-link"
                        >
                          Pass final quiz to unlock →
                        </Link>
                      ) : (
                        <Link
                          to={`/courses/${courseId}`}
                          className="mycerts-download-link mycerts-download-link--locked"
                        >
                          {reqs.length - completedCount} modules left to unlock
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default MyCertificates;