import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getCourseById } from "../../data/courses";
import { useProgress } from "../../context/ProgressContext";
import { useAuth } from "../../context/AuthContext";
import { CourseRegisterButton } from "../../components/study/CourseRegister";
import { CATALOG_COURSE_IDS, getModuleSectionIds } from "../../data/courseCatalog";
import {
  isCourseCertificateEligible,
  isCourseComplete,
  getRemainingSections,
  getRequiredSections,
} from "../../data/courseCompletion";
import "../linearAlgebra/LinearAlgebraOverview.css";

function CourseHub() {
  const { courseId } = useParams();
  const course = getCourseById(courseId);
  const { progress } = useProgress();
  const { user } = useAuth();
  const [trackFilter, setTrackFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const quizPath = `/quiz/${courseId}`;
  const eligible = isCourseCertificateEligible(courseId);
  const complete = isCourseComplete(courseId, progress.completedSections);
  const remaining = getRemainingSections(courseId, progress.completedSections);
  const requiredSet = new Set(getRequiredSections(courseId));

  const classifyModule = (mod) => {
    const sectionIds = getModuleSectionIds(mod.path);
    const isStudyModule = Array.isArray(sectionIds) && sectionIds.length > 0;
    const isCoreModule = isStudyModule && sectionIds.some((id) => requiredSet.has(id));
    if (isCoreModule) return "core";
    if (isStudyModule) return "optional";
    return "tools";
  };

  const counts = course.modules.reduce(
    (acc, mod) => {
      const kind = classifyModule(mod);
      acc.all += 1;
      acc[kind] = (acc[kind] || 0) + 1;
      return acc;
    },
    { all: 0, core: 0, optional: 0, tools: 0 },
  );

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredModules = course.modules.filter((mod) => {
    const kind = classifyModule(mod);
    if (trackFilter !== "all" && kind !== trackFilter) return false;
    if (!normalizedQuery) return true;
    const haystack = `${mod.title} ${mod.description || ""} ${mod.meta || ""}`.toLowerCase();
    return haystack.includes(normalizedQuery);
  });

  return (
    <main className="home-page">
      <section className="home-hero" style={{ minHeight: "auto" }}>
        <div className="hero-copy">
          <p className="eyebrow">Course path</p>
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <div className="hero-actions">
            <Link className="secondary-action" to="/">
              ← All courses
            </Link>
            {course.modules[0] && (
              <Link className="primary-action" to={course.modules[0].path}>
                Start first module →
              </Link>
            )}
          </div>
          {CATALOG_COURSE_IDS.includes(courseId) ? (
            <div className="hero-register cvx">
              {user ? (
                <CourseRegisterButton courseId={courseId} />
              ) : (
                <Link className="crg-btn" to="/signup">
                  Sign up to register for this course
                </Link>
              )}
            </div>
          ) : null}
        </div>
        {course.heroImage && (
          <div className="hero-image-container course-hero-image-container">
            <img
              src={course.heroImage}
              alt={course.heroImageAlt || `${course.title} visual`}
              className="hero-graph-img course-hero-img"
            />
          </div>
        )}
      </section>

      <section className="guide-section" aria-labelledby="modules-heading">
        <div className="section-kicker">Modules</div>
        <h2 id="modules-heading">Choose a module</h2>

        <div className="course-hub-toolbar" role="region" aria-label="Filter modules">
          <div className="course-hub-filters" role="group" aria-label="Module track filter">
            {[
              { id: "all", label: "All", count: counts.all },
              { id: "core", label: "Core · Certificate", count: counts.core },
              { id: "optional", label: "Optional Depth", count: counts.optional },
              { id: "tools", label: "Tools & Overview", count: counts.tools },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`course-hub-filter-btn${trackFilter === tab.id ? " is-active" : ""}`}
                aria-pressed={trackFilter === tab.id}
                onClick={() => setTrackFilter(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="course-hub-filter-count">{tab.count}</span>
              </button>
            ))}
          </div>
          <input
            type="search"
            className="course-hub-search"
            placeholder="Filter modules by topic..."
            aria-label="Filter modules by topic"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredModules.length === 0 ? (
          <div className="course-hub-empty">
            No modules match your current filter.{" "}
            <button
              type="button"
              className="course-hub-filter-btn"
              onClick={() => {
                setTrackFilter("all");
                setSearchQuery("");
              }}
            >
              Reset filters
            </button>
          </div>
        ) : null}

        <div className="guide-grid">
          {filteredModules.map((mod) => {
            // Certification Quiz is locked until every required study
            // section for this course is complete — everything else
            // (theory modules, tools/calculators) stays open as before.
            const isQuizModule = eligible && mod.path === quizPath;
            const locked = isQuizModule && !complete;

            if (locked) {
              return (
                <div
                  className={`guide-card guide-card--${course.color} guide-card--locked`}
                  key={mod.path}
                  role="group"
                  aria-disabled="true"
                >
                  <div className="guide-card-tile">
                    <div className="guide-card-icon">🔒</div>
                  </div>
                  <div className="guide-card-body">
                    <h3>{mod.title}</h3>
                    <span className="guide-card-meta">Locked</span>
                    <p>
                      Complete the {remaining.length} remaining section
                      {remaining.length === 1 ? "" : "s"} in this course to
                      unlock the certification quiz.
                    </p>
                  </div>
                </div>
              );
            }

            const sectionIds = getModuleSectionIds(mod.path);
            const isStudyModule = Array.isArray(sectionIds) && sectionIds.length > 0;
            const isCoreModule = isStudyModule && sectionIds.some((id) => requiredSet.has(id));
            const trackBadge = isStudyModule
              ? isCoreModule
                ? "Core · Required for Certificate"
                : "Optional · Additional Depth"
              : null;

            return (
              <Link
                className={`guide-card guide-card--${course.color}${mod.start ? " guide-card--start" : ""}`}
                key={mod.path}
                to={mod.path}
              >
                <div className="guide-card-tile">
                  {mod.logo ? (
                    <div className="guide-card-logo">{mod.logo}</div>
                  ) : (
                    <div className="guide-card-icon">{mod.icon || "✦"}</div>
                  )}
                </div>
                <div className="guide-card-body">
                  <h3>{mod.title}</h3>
                  <span className="guide-card-meta">
                    {trackBadge ? `${trackBadge} · ${mod.meta}` : mod.meta}
                  </span>
                  <p>{mod.description}</p>
                </div>
                <span className="guide-card-chevron" aria-hidden="true">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default CourseHub;
