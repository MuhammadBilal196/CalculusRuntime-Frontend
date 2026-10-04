import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_C_CLT_QUIZ } from "../../data/psNewModulesQuizzes";

export default function CentralLimitTheoremGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Central Limit Theorem & Sampling Distributions (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Topic</div></div>
        <a className="sb-link" href="#ps-c-clt-theory">Theory</a>
        {advanced && <a className="sb-link" href="#ps-c-clt-method">Method</a>}
        <a className="sb-link" href="#ps-c-clt-examples">Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-c-clt-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Multivariate & Stochastic Models</div>
          <h1 className="ch-title">Central Limit Theorem & Sampling Distributions</h1>
          <p className="ch-sub">Why averages become normal</p>
          <p>Curriculum: University Probability &amp; Statistics · Part {part} of 2</p>
        </header>
        <section className="section" id="ps-c-clt-theory">
          {advanced ? (
            <TheoryBox title="Deeper theory">
              <p>{"Studentization, delta method, bootstrap, practical caveats."}</p>
            </TheoryBox>
          ) : (
            <TheoryBox title="Core ideas">
              <p>{"√n (X̄−μ)/σ ⇒ N(0,1) under finite variance. Sampling distributions."}</p>
            </TheoryBox>
          )}
        </section>
        {advanced && (
          <section className="section" id="ps-c-clt-method">
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
        <section className="section" id="ps-c-clt-examples">
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
            id="quiz-ps-c-clt-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Central Limit Theorem & Sampling Distributions"
            scoreId="score-ps-c-clt-checkpoint"
            section="ps-c-clt-checkpoint"
            questions={PS_C_CLT_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-c-clt-checkpoint", score, total)}
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
