import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_C_STOCH_QUIZ } from "../../data/psNewModulesQuizzes";

export default function StochasticProcessesGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Stochastic Processes (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Topic</div></div>
        <a className="sb-link" href="#ps-c-stoch-theory">Theory</a>
        {advanced && <a className="sb-link" href="#ps-c-stoch-method">Method</a>}
        <a className="sb-link" href="#ps-c-stoch-examples">Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-c-stoch-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Multivariate & Stochastic Models</div>
          <h1 className="ch-title">Stochastic Processes</h1>
          <p className="ch-sub">Markov chains, Poisson processes, and related models</p>
          <p>Curriculum: University Probability &amp; Statistics · Part {part} of 2</p>
          <p>
            For transition matrices, eigenvectors, and worked steady-state calculations, see{" "}
            <Link to="/linear-algebra/applied-linear-algebra/1#markov-chains-steady-states">Markov Chains &amp; Steady States (Linear Algebra)</Link>.
            That guide uses column probability vectors; transpose a row-stochastic transition matrix when following its calculations.
          </p>
        </header>
        <section className="section" id="ps-c-stoch-theory">
          {advanced ? (
            <TheoryBox title="Deeper theory">
              <p>{"Stationarity, Poisson processes, and Brownian motion are further stochastic-process topics. For finite-state Markov chain calculations, use the linked Linear Algebra guide above."}</p>
            </TheoryBox>
          ) : (
            <TheoryBox title="Core ideas">
              <p>{"Markov: future depends on past only through present. Transition matrices."}</p>
            </TheoryBox>
          )}
        </section>
        {advanced && (
          <section className="section" id="ps-c-stoch-method">
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
        <section className="section" id="ps-c-stoch-examples">
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
            id="quiz-ps-c-stoch-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Stochastic Processes"
            scoreId="score-ps-c-stoch-checkpoint"
            section="ps-c-stoch-checkpoint"
            questions={PS_C_STOCH_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-c-stoch-checkpoint", score, total)}
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
