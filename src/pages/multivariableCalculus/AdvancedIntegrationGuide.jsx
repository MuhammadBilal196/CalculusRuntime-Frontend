// src/pages/multivariableCalculus/AdvancedIntegrationGuide.jsx
// Advanced Integration & Variational Methods — one page that imports both topic guides:
//   Improper Multiple Integrals & the Gaussian Integral
//   Calculus of Variations (Euler–Lagrange Equation)
// The Calculus of Variations quiz stays locked until the first quiz is passed (≥ 80%).

import { Fragment } from "react";
import StudyGuideShell from "../courses/StudyGuideShell";
import { useProgress } from "../../context/ProgressContext";
import {
  guideQuizId,
  getQuizAttemptPercent,
  SECTION_QUIZ_PASS_PERCENT,
} from "../../data/sectionQuizGates";
import ImproperMultipleIntegralsTopic, {
  AI_IMPROPER_NAV,
  AI_IMPROPER_QUIZ_KEY,
} from "./ImproperMultipleIntegralsTopic";
import CalculusOfVariationsTopic, { VARIATIONS_NAV } from "./CalculusOfVariationsTopic";
import "./PartialDerivativesGuide.css";
import "./AdvancedIntegrationGuide.css";

const IMPROPER_TITLE = "Improper Multiple Integrals & the Gaussian Integral";
const VARIATIONS_TITLE = "Calculus of Variations (Euler–Lagrange Equation)";

const TOPICS = [
  { title: IMPROPER_TITLE, nav: AI_IMPROPER_NAV },
  { title: VARIATIONS_TITLE, nav: VARIATIONS_NAV },
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
        <div className="sb-title">Advanced Integration &amp; Variational Methods</div>
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
      <h1 className="ch-title">Advanced Integration &amp; Variational Methods</h1>
      <p className="ch-sub">
        Improper Multiple Integrals &amp; the Gaussian Integral · Calculus of Variations
      </p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function GuideToc() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Advanced Integration &amp; Variational Methods</div>
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

function AdvancedIntegrationContent() {
  const { quizScores = {} } = useProgress() || {};
  const improperPassed = hasPassed(quizScores, AI_IMPROPER_QUIZ_KEY);

  return (
    <>
      <GuideSidebar />
      <main className="main ai-main">
        <GuideHeader />
        <GuideToc />
        <ImproperMultipleIntegralsTopic />
        <hr className="divider" />
        <CalculusOfVariationsTopic
          quizUnlocked={improperPassed}
          lockHint={`🔒 Score ${SECTION_QUIZ_PASS_PERCENT}%+ on the ${IMPROPER_TITLE} quiz to unlock this quiz.`}
        />
        <footer className="pg-foot">Advanced Integration &amp; Variational Methods · Rendered with MathJax 3</footer>
      </main>
    </>
  );
}

function AdvancedIntegrationGuide() {
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Advanced Integration & Variational Methods">
      <AdvancedIntegrationContent />
    </StudyGuideShell>
  );
}

export default AdvancedIntegrationGuide;
