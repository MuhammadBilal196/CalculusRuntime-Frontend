import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_B_MLR_QUIZ } from "../../data/psNewModulesQuizzes";

export default function MultipleLinearRegressionGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Multiple Linear Regression (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Topic</div></div>
        <a className="sb-link" href="#ps-b-mlr-theory">Theory</a>
        {advanced && <a className="sb-link" href="#ps-b-mlr-method">Method</a>}
        <a className="sb-link" href="#ps-b-mlr-examples">Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-b-mlr-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Hypothesis Testing & Regression</div>
          <h1 className="ch-title">Multiple Linear Regression</h1>
          <p className="ch-sub">Several predictors: estimation and diagnostics</p>
          <p>Curriculum: University Probability &amp; Statistics · Part {part} of 2</p>
        </header>
        <section className="section" id="ps-b-mlr-theory">
          {advanced ? (
            <TheoryBox title="Deeper theory">
              <p>{"R², multicollinearity, residual diagnostics, robust SEs."}</p>
            </TheoryBox>
          ) : (
            <TheoryBox title="Core ideas">
              <p>{"OLS minimizes squared residuals. β̂=(XᵀX)⁻¹Xᵀy."}</p>
            </TheoryBox>
          )}
        </section>
        {advanced && (
          <section className="section" id="ps-b-mlr-method">
            <h2 className="sec-title">Working procedure</h2>
            <ProcedureBox title="Checklist" steps={[
              "State the model and assumptions clearly.",
              "Write the key formula or statistic for the problem.",
              "Compute estimates or test quantities from the data.",
              "Report uncertainty (SE, CI, posterior, or p-value as appropriate).",
              "Check assumptions and sensitivity.",
              "State the conclusion in context.",
            ]} />
          </section>
        )}
        <section className="section" id="ps-b-mlr-examples">
          <h2 className="sec-title">Worked example</h2>
          <WorkedExample
            number={1}
            title="Illustrative calculation"
            setup="Apply the main formula for this topic to a small numerical case."
            steps={[
              "Identify the given quantities and the target parameter or hypothesis.",
              "Substitute into the defining formula for this topic.",
              "Simplify and interpret the numerical result.",
            ]}
            result="A concrete numeric answer consistent with the theory above."
            check="Recompute with a second method or special case when possible."
          />
        </section>
        {advanced ? (
          <GuideMcqSection
            id="quiz-ps-b-mlr-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Multiple Linear Regression"
            scoreId="score-ps-b-mlr-checkpoint"
            section="ps-b-mlr-checkpoint"
            questions={PS_B_MLR_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-b-mlr-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Part 2</h2>
            <p>Part 2 deepens the theory and includes the 20-question checkpoint (80% to unlock completion).</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
