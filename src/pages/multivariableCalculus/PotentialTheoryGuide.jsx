// src/pages/multivariableCalculus/PotentialTheoryGuide.jsx
// Potential Theory — one page that imports both topic guides:
//   The Laplacian & Harmonic Functions            ✅ built
//   Maxwell's Equations & the Continuity Equation ⏳ next
// The Maxwell quiz stays locked until the Laplacian quiz is passed (≥ 80%).

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
// Maxwell topic (add when built):
// import MaxwellContinuityTopic, { MAXWELL_NAV } from "./MaxwellContinuityTopic";
import "./PartialDerivativesGuide.css";

const LAPLACIAN_TITLE = "The Laplacian & Harmonic Functions";
const MAXWELL_TITLE = "Maxwell's Equations & the Continuity Equation";

function hasPassed(quizScores, key) {
  const pct = getQuizAttemptPercent(quizScores?.[guideQuizId(key)]);
  return pct !== null && pct >= SECTION_QUIZ_PASS_PERCENT;
}

/* ── Sidebar (same markup/classes as Partial Derivatives) ── */
function GuideSidebar({ laplacianPassed }) {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Potential Theory</div>
      </div>

      <div className="sb-group">{LAPLACIAN_TITLE}</div>
      {LAPLACIAN_NAV.map((s, i) => (
        <a key={s.id} className="sb-link" href={`#${s.id}`}>
          <span className="sn">{s.id.startsWith("mcq") ? "✎" : `${i + 1}`}</span>
          {s.label}
        </a>
      ))}

      <div className="sb-group">{MAXWELL_TITLE}</div>
      <a
        className="sb-link"
        href="#maxwell-continuity"
        style={laplacianPassed ? undefined : { opacity: 0.5 }}
      >
        <span className="sn">—</span>
        {MAXWELL_TITLE}
      </a>
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
      <div className="toc-grid">
        {LAPLACIAN_NAV.map((s, i) => (
          <a key={s.id} className="toc-a" href={`#${s.id}`}>
            <span className="tn">{s.id.startsWith("mcq") ? "✎" : `${i + 1}`}</span>
            {s.label}
          </a>
        ))}
        <a className="toc-a" href="#maxwell-continuity">
          <span className="tn">—</span>
          {MAXWELL_TITLE}
        </a>
      </div>
    </nav>
  );
}

/* ── Shows the locked banner (existing .mcq-section-locked CSS) until the
      Laplacian quiz is passed, then renders its children (the Maxwell quiz). ── */
function QuizGate({ unlocked, children }) {
  if (unlocked) return children;
  return (
    <section
      className="mcq-section mcq-section-locked"
      data-lock-hint={`🔒 Score ${SECTION_QUIZ_PASS_PERCENT}%+ on the ${LAPLACIAN_TITLE} quiz to unlock this quiz.`}
    >
      <div className="mcq-section-head">
        <span className="mcq-section-badge">Locked</span>
        <span className="mcq-section-title">{MAXWELL_TITLE} — Quiz</span>
      </div>
      <p className="mcq-unlock-hint">
        Finish the {LAPLACIAN_TITLE} quiz with at least {SECTION_QUIZ_PASS_PERCENT}% to open this quiz.
      </p>
    </section>
  );
}

function MaxwellPlaceholder({ unlocked }) {
  return (
    <div id="maxwell-continuity">
      <section className="section">
        <div className="sec-badge">Coming next</div>
        <h2 className="sec-title">{MAXWELL_TITLE}</h2>
        <p>
          This guide is being written next. It will cover the four Maxwell equations in
          differential and integral form, the continuity equation for conserved charge,
          and how they follow from the Divergence and Stokes theorems.
        </p>
      </section>
      <QuizGate unlocked={unlocked}>
        {/* When the Maxwell guide is built, its <GuideMcqSection .../> goes here. */}
        <p className="mcq-unlock-hint">{MAXWELL_TITLE} quiz coming soon.</p>
      </QuizGate>
    </div>
  );
}

function PotentialTheoryContent() {
  const { quizScores = {} } = useProgress() || {};
  const laplacianPassed = hasPassed(quizScores, LAPLACIAN_QUIZ_KEY);

  return (
    <>
      <GuideSidebar laplacianPassed={laplacianPassed} />
      <main className="main">
        <GuideHeader />
        <GuideToc />
        <LaplacianHarmonicTopic />
        <hr className="divider" />
        <MaxwellPlaceholder unlocked={laplacianPassed} />
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
