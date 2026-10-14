import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { LaMcqSection } from "../linearAlgebra/LaMcq";
import {
  PS_BOOT_INTRO_QUIZ,
  PS_BOOT_METHOD_QUIZ,
  PS_BOOT_CI_QUIZ,
} from "../../data/psNewModuleQuizzes";
import { TheoryBox, TheoremBox, ProcedureBox } from "../linearAlgebra/LaBlocks";

function BootstrapGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Bootstrap and Resampling (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Bootstrap and Resampling · Part 2</div></div>
          <a className="sb-link" href="#ps-boot-ci">Bootstrap confidence intervals</a>
          <a className="sb-link" href="#quiz-ps-boot-ci">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 2 of 2</div>
            <h1 className="ch-title">Bootstrap and Resampling</h1>
            <p className="ch-sub">Estimate uncertainty by resampling the data</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-boot-ci">
            <div className="sec-badge">Section 5.1</div>
            <h2 className="sec-title">Bootstrap confidence intervals</h2>
            <TheoryBox title="Percentile and basic intervals">
              <p>
                {"Percentile: $\\left[\\hat\\theta^*_{(\\alpha/2)},\\ \\hat\\theta^*_{(1-\\alpha/2)}\\right]$, the $\\alpha/2$ and $1-\\alpha/2$ quantiles of the replicates. Basic: $\\left[2\\hat\\theta-\\hat\\theta^*_{(1-\\alpha/2)},\\ 2\\hat\\theta-\\hat\\theta^*_{(\\alpha/2)}\\right]$."}
              </p>
            </TheoryBox>
            <TheoremBox title="When it fails">
              <p>
                {"The bootstrap is unreliable for extreme statistics such as the sample maximum and for very small $n$. Increasing $B$ only reduces simulation error, not the sampling error from having $n$ observations."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Sort the $B$ replicates." },
                { text: "Take the 2.5th and 97.5th percentiles for a 95% interval." },
                { text: "Sanity-check against the basic interval." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-boot-ci"
              badge="Quiz 5.1"
              title="Bootstrap confidence intervals"
              scoreId="score-ps-boot-ci"
              section="ps-boot-ci"
              questions={PS_BOOT_CI_QUIZ}
            />
          </section>

        </main>
      </StudyGuideShell>
    );
  }
  return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Bootstrap and Resampling (Part 1)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Bootstrap and Resampling · Part 1</div></div>
          <a className="sb-link" href="#ps-boot-intro">The bootstrap idea</a>
          <a className="sb-link" href="#quiz-ps-boot-intro">Quiz</a>
          <a className="sb-link" href="#ps-boot-method">Bootstrap standard error and bias</a>
          <a className="sb-link" href="#quiz-ps-boot-method">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 1 of 2</div>
            <h1 className="ch-title">Bootstrap and Resampling</h1>
            <p className="ch-sub">Estimate uncertainty by resampling the data</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-boot-intro">
            <div className="sec-badge">Section 4.1</div>
            <h2 className="sec-title">The bootstrap idea</h2>
            <TheoryBox title="Resample the sample">
              <p>
                {"Treat the sample as the population. Draw $n$ observations with replacement to get a bootstrap sample, compute the statistic $\\hat\\theta^*$, and repeat $B$ times. The spread of $\\hat\\theta^*_b$ approximates the sampling distribution of $\\hat\\theta$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Plug-in principle">
              <p>
                {"The unknown distribution $F$ is replaced by the empirical distribution $\\hat F_n$ (mass $1/n$ on each point). Resampling must be with replacement and each resample has size $n$."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Draw $n$ points with replacement from the data." },
                { text: "Compute $\\hat\\theta^*$ on the resample." },
                { text: "Repeat $B$ times (e.g. $B=1000$)." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-boot-intro"
              badge="Quiz 4.1"
              title="The bootstrap idea"
              scoreId="score-ps-boot-intro"
              section="ps-boot-intro"
              questions={PS_BOOT_INTRO_QUIZ}
            />
          </section>

          <section className="section" id="ps-boot-method">
            <div className="sec-badge">Section 4.2</div>
            <h2 className="sec-title">Bootstrap standard error and bias</h2>
            <TheoryBox title="Standard error and bias">
              <p>
                {"$\\widehat{SE}_{boot}=\\sqrt{\\frac1{B-1}\\sum_b(\\hat\\theta^*_b-\\bar\\theta^*)^2}$ and $\\widehat{\\text{bias}}=\\bar\\theta^*-\\hat\\theta$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Jackknife">
              <p>
                {"The jackknife recomputes the statistic leaving out one observation at a time ($n$ pseudo-samples). It is deterministic and cheap, but the bootstrap handles more statistics, such as the median."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Generate the $B$ replicates $\\hat\\theta^*_b$." },
                { text: "SE is their standard deviation." },
                { text: "Bias is their mean minus $\\hat\\theta$." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-boot-method"
              badge="Quiz 4.2"
              title="Bootstrap standard error and bias"
              scoreId="score-ps-boot-method"
              section="ps-boot-method"
              questions={PS_BOOT_METHOD_QUIZ}
            />
          </section>

        </main>
      </StudyGuideShell>
  );
}

export default BootstrapGuide;
