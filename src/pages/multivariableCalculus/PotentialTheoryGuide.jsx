// src/pages/multivariableCalculus/PotentialTheoryGuide.jsx
// Potential Theory — one page that imports both topic guides:
//   The Laplacian & Harmonic Functions
//   Maxwell's Equations & the Continuity Equation
// The Maxwell quiz stays locked until the Laplacian quiz is passed (≥ 80%).

import { Fragment } from "react";
import StudyGuideShell from "../courses/StudyGuideShell";
import { useProgress } from "../../context/ProgressContext";
import {
  guideQuizId,
  getQuizAttemptPercent,
  SECTION_QUIZ_PASS_PERCENT,
} from "../../data/sectionQuizGates";
import LaplacianHarmonicTopic, {
  LAPLACIAN_NAV,
  LAPLACIAN_QUIZ_KEY,
} from "./LaplacianHarmonicTopic";
import MaxwellContinuityTopic, { MAXWELL_NAV } from "./MaxwellContinuityTopic";
import "./PartialDerivativesGuide.css";
import "./PotentialTheoryGuide.css";

const LAPLACIAN_TITLE = "The Laplacian & Harmonic Functions";
const MAXWELL_TITLE = "Maxwell's Equations & the Continuity Equation";

const TOPICS = [
  { title: LAPLACIAN_TITLE, nav: LAPLACIAN_NAV },
  { title: MAXWELL_TITLE, nav: MAXWELL_NAV },
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
        <div className="sb-title">Potential Theory</div>
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
      <h1 className="ch-title">Potential Theory</h1>
      <p className="ch-sub">
        The Laplacian &amp; Harmonic Functions · Maxwell&apos;s Equations &amp; the Continuity Equation
      </p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function GuideToc() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Potential Theory</div>
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

function PotentialTheoryContent() {
  const { quizScores = {} } = useProgress() || {};
  const laplacianPassed = hasPassed(quizScores, LAPLACIAN_QUIZ_KEY);

  return (
    <>
      <GuideSidebar />
      <main className="main pt-main">
        <GuideHeader />
        <GuideToc />
        <LaplacianHarmonicTopic />
        <hr className="divider" />
        <MaxwellContinuityTopic
          quizUnlocked={laplacianPassed}
          lockHint={`🔒 Score ${SECTION_QUIZ_PASS_PERCENT}%+ on the ${LAPLACIAN_TITLE} quiz to unlock this quiz.`}
        />
        <footer className="pg-foot">Potential Theory · Rendered with MathJax 3</footer>
      </main>
    </>
  );
}

function PotentialTheoryGuide() {
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Potential Theory">
      <PotentialTheoryContent />
    </StudyGuideShell>
  );
}

export default PotentialTheoryGuide;
