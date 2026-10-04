import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_A_BAYES_QUIZ } from "../../data/psNewModulesQuizzes";

export default function BayesianInferenceGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Bayesian Inference (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Topic</div></div>
        <a className="sb-link" href="#ps-a-bayes-theory">Theory</a>
        {advanced && <a className="sb-link" href="#ps-a-bayes-method">Method</a>}
        <a className="sb-link" href="#ps-a-bayes-examples">Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-a-bayes-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Estimation & Inference Theory</div>
          <h1 className="ch-title">Bayesian Inference</h1>
          <p className="ch-sub">Prior → likelihood → posterior</p>
          <p>Curriculum: University Probability &amp; Statistics · Part {part} of 2</p>
        </header>
        <section className="section" id="ps-a-bayes-theory">
          {advanced ? (
            <TheoryBox title="Deeper theory">
              <p>{"Conjugate families keep updates closed-form. MAP, credible intervals, posterior predictive."}</p>
            </TheoryBox>
          ) : (
            <TheoryBox title="Core ideas">
              <p>{"Bayes theorem updates beliefs with data. Posterior ∝ likelihood × prior."}</p>
            </TheoryBox>
          )}
        </section>
        {advanced && (
          <section className="section" id="ps-a-bayes-method">
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
        <section className="section" id="ps-a-bayes-examples">
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
            id="quiz-ps-a-bayes-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Bayesian Inference"
            scoreId="score-ps-a-bayes-checkpoint"
            section="ps-a-bayes-checkpoint"
            questions={PS_A_BAYES_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-a-bayes-checkpoint", score, total)}
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
