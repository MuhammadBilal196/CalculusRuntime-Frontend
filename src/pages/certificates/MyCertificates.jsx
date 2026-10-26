import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Check, Lock, Download, Eye, ArrowRight, Pencil, Award } from "lucide-react";
import { useAuth, getDisplayName } from "../../context/AuthContext";
import { useProgress } from "../../context/ProgressContext";
import { useEnrollments } from "../../context/EnrollmentContext";
import useCertificates from "../../hooks/useCertificates";
import {
  getCourseTitle,
  getMinQuizScore,
  getQuizId,
} from "../../data/courseCompletion";
import { getCourseTopics, getCourseProgress, getNextStep, COURSE_META } from "../../data/courseCatalog";
import CourseRegister from "../../components/study/CourseRegister";
import "./MyCertificates.css";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8002";

function formatDate(ts) {
  if (!ts) return "";
  const value = typeof ts === "number" ? (ts < 1e11 ? ts * 1000 : ts) : ts;
  const d = new Date(value);
  return Number.isNaN(d.getTime())
    ? ""
    : d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
}

function examResult(quizScores, courseId) {
  const quizId = getQuizId(courseId);
  const attempt = quizId ? quizScores?.[quizId] : null;
  const pct = attempt?.total ? Math.round((attempt.score / attempt.total) * 100) : null;
  return { pct, passed: pct !== null && pct >= getMinQuizScore(courseId) };
}

function TopicRow({ topic, index, completed }) {
  const done = topic.sectionIds.filter((id) => completed[id]).length;
  const total = topic.sectionIds.length;
  const state = done === total ? "done" : done > 0 ? "partial" : "todo";
  return (
    <li className={`mc-topic mc-topic--${state}`}>
      <span className="mc-topic__num">{index + 1}</span>
      <div className="mc-topic__body">
        <Link to={topic.path} className="mc-topic__title">
          {topic.title}
        </Link>
        <span className="mc-topic__parts" aria-label={`${done} of ${total} parts complete`}>
          {topic.sectionIds.map((id, i) => (
            <span key={id} className={`mc-dot${completed[id] ? " is-done" : ""}`} title={`Part ${i + 1}`} />
          ))}
          <span className="mc-topic__count">
            {done}/{total} part{total === 1 ? "" : "s"}
          </span>
        </span>
      </div>
      <span className="mc-topic__status" aria-hidden="true">
        {state === "done" ? <Check size={15} strokeWidth={3} /> : state === "partial" ? "…" : ""}
      </span>
    </li>
  );
}

function CertificatePanel({ courseId, record, completed, quizScores, name }) {
  const p = getCourseProgress(courseId, completed);
  const exam = examResult(quizScores, courseId);
  const next = getNextStep(courseId, completed);
  const coreDone = p.coreTotal > 0 && p.coreDone === p.coreTotal;
  const state = record ? "earned" : coreDone ? (exam.passed ? "claim" : "exam") : "locked";
  const title = getCourseTitle(courseId);
  const pdfUrl = record?.pdf_url ? (record.pdf_url.startsWith("http") ? record.pdf_url : `${API_URL}${record.pdf_url}`) : null;

  return (
    <section className="mc-panel" aria-label={`${title} certificate`}>
      <div className={`mc-cert mc-cert--${state}`}>
        <div className="mc-cert__inner">
          <span className="mc-cert__seal" aria-hidden="true">
            <Award size={22} />
          </span>
          <span className="mc-cert__kicker">Certificate of Completion</span>
          <span className="mc-cert__small">This certifies that</span>
          <span className="mc-cert__name">{record?.full_name || name}</span>
          <span className="mc-cert__small">has successfully completed</span>
          <span className="mc-cert__course">{title}</span>
          <span className="mc-cert__date">
            {record ? `Issued ${formatDate(record.issued_at)}` : "CalcVoyager"}
          </span>
        </div>
        {state === "locked" ? (
          <span className="mc-cert__lock">
            <Lock size={16} aria-hidden="true" /> Locked
          </span>
        ) : null}
      </div>

      <ol className="mc-steps">
        <li className={coreDone ? "is-done" : "is-current"}>
          <span className="mc-steps__mark">{coreDone ? <Check size={13} strokeWidth={3} /> : "1"}</span>
          <span>
            Complete the core modules
            <small>
              {p.coreDone} of {p.coreTotal} core parts done
            </small>
          </span>
        </li>
        <li className={exam.passed || record ? "is-done" : coreDone ? "is-current" : ""}>
          <span className="mc-steps__mark">{exam.passed || record ? <Check size={13} strokeWidth={3} /> : "2"}</span>
          <span>
            Pass the final exam ({getMinQuizScore(courseId)}%+)
            <small>{exam.pct === null ? "Not attempted yet" : `Best score ${exam.pct}%`}</small>
          </span>
        </li>
        <li className={record ? "is-done" : state === "claim" ? "is-current" : ""}>
          <span className="mc-steps__mark">{record ? <Check size={13} strokeWidth={3} /> : "3"}</span>
          <span>
            Claim your certificate
            <small>{record ? `ID ${String(record.cert_id).slice(0, 8)}…` : "Printed in your full name"}</small>
          </span>
        </li>
      </ol>

      <div className="mc-panel__actions">
        {state === "earned" ? (
          <>
            <Link to={`/certificate/${courseId}`} className="mc-btn mc-btn--primary">
              <Eye size={15} aria-hidden="true" /> View certificate
            </Link>
            {pdfUrl ? (
              <a href={pdfUrl} className="mc-btn" download>
                <Download size={15} aria-hidden="true" /> Download PDF
              </a>
            ) : null}
          </>
        ) : state === "claim" ? (
          <Link to={`/certificate/${courseId}`} className="mc-btn mc-btn--primary">
            Claim certificate <ArrowRight size={15} aria-hidden="true" />
          </Link>
        ) : state === "exam" ? (
          <Link to={`/quiz/${courseId}`} className="mc-btn mc-btn--primary">
            Take the final exam <ArrowRight size={15} aria-hidden="true" />
          </Link>
        ) : (
          <Link to={next?.path || `/courses/${courseId}`} className="mc-btn mc-btn--primary">
            Continue: {next?.topic.title || "course"} <ArrowRight size={15} aria-hidden="true" />
          </Link>
        )}
        <Link to={`/mock-exam/${courseId}`} className="mc-btn">
          Practise with a mock exam
        </Link>
      </div>
    </section>
  );
}

function MyCertificates() {
  const { user, isHydrated } = useAuth();
  const { progress } = useProgress();
  const { courses, loaded } = useEnrollments();
  const { earned, error, reload } = useCertificates();
  const [params, setParams] = useSearchParams();
  const requested = params.get("course");
  const [selected, setSelected] = useState(requested || "");

  // Keep the selection on a registered course.
  useEffect(() => {
    if (!courses.length) return;
    if (!courses.includes(selected)) {
      setSelected(courses.includes(requested) ? requested : courses[0]);
    }
  }, [courses, selected, requested]);

  const completed = progress?.completedSections || {};
  const topics = useMemo(() => (selected ? getCourseTopics(selected) : []), [selected]);
  const core = topics.filter((t) => t.core);
  const optional = topics.filter((t) => !t.core);

  if (!isHydrated) {
    return (
      <main className="mc-page cvx">
        <div className="mc-state">Loading…</div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="mc-page cvx">
        <div className="mc-state">
          <h1>Sign in to see your certificates</h1>
          <p>Your course progress and certificates are saved to your account.</p>
          <Link className="mc-btn mc-btn--primary" to="/login">
            Sign in
          </Link>
        </div>
      </main>
    );
  }

  const choose = (id) => {
    setSelected(id);
    setParams(id ? { course: id } : {}, { replace: true });
  };

  const name = getDisplayName(user);

  return (
    <main className="mc-page cvx">
      <header className="mc-hero">
        <div>
          <h1 className="mc-hero__title">My certificates</h1>
          <p className="mc-hero__sub">
            Certificates are issued to <strong>{name}</strong>.{" "}
            <Link to="/settings" className="mc-hero__edit">
              <Pencil size={13} aria-hidden="true" /> {user.fullName ? "Change name" : "Add your full name"}
            </Link>
          </p>
        </div>
      </header>

      {error ? (
        <div className="mc-alert" role="alert">
          <span>Couldn't reach the server for issued certificates. It may be waking up.</span>
          <button type="button" className="mc-btn" onClick={reload}>
            Try again
          </button>
        </div>
      ) : null}

      {courses.length === 0 ? (
        loaded ? (
          <>
            <div className="mc-state mc-state--inline">
              <h2>You haven't registered for a course yet</h2>
              <p>Register for a course to track its modules and work towards its certificate.</p>
            </div>
            <CourseRegister title="Choose a course" />
          </>
        ) : null
      ) : (
        <>
          {courses.length > 1 ? (
            <div className="mc-courses" role="tablist" aria-label="Registered courses">
              {courses.map((id) => {
                const cp = getCourseProgress(id, completed);
                const isEarned = Boolean(earned?.[id]);
                return (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={selected === id}
                    className={`mc-course mc-tone--${COURSE_META[id].tone}${selected === id ? " is-active" : ""}`}
                    onClick={() => choose(id)}
                  >
                    <span className="mc-course__icon" aria-hidden="true">
                      {COURSE_META[id].icon}
                    </span>
                    <span className="mc-course__text">
                      <span className="mc-course__name">{getCourseTitle(id)}</span>
                      <span className="mc-course__meta">
                        {isEarned ? "Certificate earned" : `Core ${cp.corePct}% complete`}
                      </span>
                    </span>
                    <span className="mc-course__ring" style={{ "--pct": `${isEarned ? 100 : cp.corePct}%` }} aria-hidden="true" />
                  </button>
                );
              })}
            </div>
          ) : null}

          {selected ? (
            <div className="mc-layout">
              <CertificatePanel
                courseId={selected}
                record={earned?.[selected]}
                completed={completed}
                quizScores={progress?.quizScores}
                name={name}
              />

              <section className="mc-modules" aria-label={`${getCourseTitle(selected)} modules`}>
                <div className="mc-modules__head">
                  <h2 className="mc-modules__title">{getCourseTitle(selected)}</h2>
                  <span className="mc-modules__meta">
                    {topics.length} modules · {core.length} core · {optional.length} optional
                  </span>
                </div>

                <h3 className="mc-group">
                  Core modules <span>required for the certificate</span>
                </h3>
                <ol className="mc-topics">
                  {core.map((topic, i) => (
                    <TopicRow key={topic.id} topic={topic} index={i} completed={completed} />
                  ))}
                </ol>

                {optional.length ? (
                  <>
                    <h3 className="mc-group">
                      Optional modules <span>extra depth, points and practice</span>
                    </h3>
                    <ol className="mc-topics mc-topics--optional">
                      {optional.map((topic, i) => (
                        <TopicRow key={topic.id} topic={topic} index={i} completed={completed} />
                      ))}
                    </ol>
                  </>
                ) : null}
              </section>
            </div>
          ) : null}

          <CourseRegister title="Register for another course" compact />
        </>
      )}
    </main>
  );
}

export default MyCertificates;
