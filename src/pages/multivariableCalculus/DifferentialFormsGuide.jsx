// src/pages/multivariableCalculus/DifferentialFormsGuide.jsx
// Differential Forms — one page that imports both topic guides:
//   Differential Forms & the Exterior Derivative
//   Generalized Stokes' Theorem   (added next; its quiz will stay locked
//                                  until the first quiz is passed, ≥ 80%)

import { Fragment } from "react";
import StudyGuideShell from "../courses/StudyGuideShell";
import { useProgress } from "../../context/ProgressContext";
import {
  guideQuizId,
  getQuizAttemptPercent,
  SECTION_QUIZ_PASS_PERCENT,
} from "../../data/sectionQuizGates";
import DifferentialFormsTopic, {
  DF_FORMS_NAV,
  DF_FORMS_QUIZ_KEY,
} from "./DifferentialFormsTopic";
// Generalized Stokes' Theorem (add when built):
// import GeneralizedStokesTopic, { GEN_STOKES_NAV } from "./GeneralizedStokesTopic";
import "./PartialDerivativesGuide.css";
import "./DifferentialFormsGuide.css";

const FORMS_TITLE = "Differential Forms & the Exterior Derivative";
// const GEN_STOKES_TITLE = "Generalized Stokes' Theorem";

const TOPICS = [
  { title: FORMS_TITLE, nav: DF_FORMS_NAV },
  // { title: GEN_STOKES_TITLE, nav: GEN_STOKES_NAV },
];

function hasPassed(quizScores, key) {
  const pct = getQuizAttemptPercent(quizScores?.[guideQuizId(key)]);
  return pct !== null && pct >= SECTION_QUIZ_PASS_PERCENT;
}

function navNumber(item, index) {
  return item.id.startsWith("mcq") ? "✎" : `${index + 1}`;
}

/* ── Sidebar (same markup/classes as Partial Derivatives) ── */
function GuideSidebar() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Differential Forms</div>
      </div>
      {TOPICS.map((topic) => (
        <Fragment key={topic.title}>
          <div className="sb-group">{topic.title}</div>
          {topic.nav.map((s, i) => (
            <a key={s.id} className="sb-link" href={`#${s.id}`}>
              <span className="sn">{navNumber(s, i)}</span>
              {s.label}
            </a>
          ))}
        </Fragment>
      ))}
    </nav>
  );
}

function GuideHeader() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus Study Guide</div>
      <h1 className="ch-title">Differential Forms</h1>
      <p className="ch-sub">
        Differential Forms &amp; the Exterior Derivative · Generalized Stokes&apos; Theorem
      </p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function GuideToc() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Differential Forms</div>
      {TOPICS.map((topic) => (
        <div key={topic.title} style={{ marginBottom: "1rem" }}>
          <div className="toc-h" style={{ textAlign: "left", marginBottom: "0.5rem" }}>
            {topic.title}
          </div>
          <div className="toc-grid">
            {topic.nav.map((s, i) => (
              <a key={s.id} className="toc-a" href={`#${s.id}`}>
                <span className="tn">{navNumber(s, i)}</span>
                {s.label}
              </a>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );
}

function DifferentialFormsContent() {
  const { quizScores = {} } = useProgress() || {};
  // Used to unlock the Generalized Stokes' Theorem quiz once that topic is added.
  // eslint-disable-next-line no-unused-vars
  const formsPassed = hasPassed(quizScores, DF_FORMS_QUIZ_KEY);

  return (
    <>
      <GuideSidebar />
      <main className="main df-main">
        <GuideHeader />
        <GuideToc />
        <DifferentialFormsTopic />
        {/*
        <hr className="divider" />
        <GeneralizedStokesTopic
          quizUnlocked={formsPassed}
          lockHint={`🔒 Score ${SECTION_QUIZ_PASS_PERCENT}%+ on the ${FORMS_TITLE} quiz to unlock this quiz.`}
        />
        */}
        <footer className="pg-foot">Differential Forms · Rendered with MathJax 3</footer>
      </main>
    </>
  );
}

function DifferentialFormsGuide() {
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Differential Forms">
      <DifferentialFormsContent />
    </StudyGuideShell>
  );
}

export default DifferentialFormsGuide;
