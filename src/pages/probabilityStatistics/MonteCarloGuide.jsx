import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { LaMcqSection } from "../linearAlgebra/LaMcq";
import {
  PS_MC_INTRO_QUIZ,
  PS_MC_SIM_QUIZ,
  PS_MC_VARIATE_QUIZ,
} from "../../data/psNewModuleQuizzes";
import { TheoryBox, TheoremBox, ProcedureBox } from "../linearAlgebra/LaBlocks";

function MonteCarloGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Monte Carlo and Random Variates (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Monte Carlo and Random Variates · Part 2</div></div>
          <a className="sb-link" href="#ps-mc-variate">Random variate generation</a>
          <a className="sb-link" href="#quiz-ps-mc-variate">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 2 of 2</div>
            <h1 className="ch-title">Monte Carlo and Random Variates</h1>
            <p className="ch-sub">Estimate by simulation and generate random numbers</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-mc-variate">
            <div className="sec-badge">Section 4.1</div>
            <h2 className="sec-title">Random variate generation</h2>
            <TheoryBox title="Inverse transform">
              <p>
                {"If $U\\sim U(0,1)$ then $X=F^{-1}(U)$ has cdf $F$. For Exponential($\\lambda$), $X=-\\ln(1-U)/\\lambda$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Acceptance-rejection">
              <p>
                {"If $f(y)\\le c\\,g(y)$ for an easy proposal density $g$, draw $Y\\sim g$, $U\\sim U(0,1)$ and accept $Y$ when $U\\le f(Y)/(c\\,g(Y))$. The acceptance probability is $1/c$, so choose $c$ as small as possible."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Invert the cdf when $F^{-1}$ is available." },
                { text: "Otherwise find $g$ and $c$ with $f\\le c\\,g$." },
                { text: "Accept with probability $f(Y)/(c\\,g(Y))$." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-mc-variate"
              badge="Quiz 4.1"
              title="Random variate generation"
              scoreId="score-ps-mc-variate"
              section="ps-mc-variate"
              questions={PS_MC_VARIATE_QUIZ}
            />
          </section>

        </main>
      </StudyGuideShell>
    );
  }
  return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Monte Carlo and Random Variates (Part 1)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Monte Carlo and Random Variates · Part 1</div></div>
          <a className="sb-link" href="#ps-mc-intro">Monte Carlo estimation</a>
          <a className="sb-link" href="#quiz-ps-mc-intro">Quiz</a>
          <a className="sb-link" href="#ps-mc-sim">Accuracy and variance reduction</a>
          <a className="sb-link" href="#quiz-ps-mc-sim">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 1 of 2</div>
            <h1 className="ch-title">Monte Carlo and Random Variates</h1>
            <p className="ch-sub">Estimate by simulation and generate random numbers</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-mc-intro">
            <div className="sec-badge">Section 3.1</div>
            <h2 className="sec-title">Monte Carlo estimation</h2>
            <TheoryBox title="Averaging draws">
              <p>
                {"To estimate $\\theta=E[g(X)]$, draw $X_1,\\dots,X_n$ and use $\\hat\\theta=\\frac1n\\sum g(X_i)$. Its standard error is $\\sigma/\\sqrt n$, so halving the error needs four times as many draws."}
              </p>
            </TheoryBox>
            <TheoremBox title="Estimating pi">
              <p>
                {"Throw $n$ uniform points in the unit square. The fraction inside the quarter circle $x^2+y^2\\le1$ estimates $\\pi/4$, so $\\hat\\pi=4\\times$ fraction."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Express the target as $E[g(X)]$." },
                { text: "Simulate $n$ draws and average $g(X_i)$." },
                { text: "Report the standard error $s/\\sqrt n$." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-mc-intro"
              badge="Quiz 3.1"
              title="Monte Carlo estimation"
              scoreId="score-ps-mc-intro"
              section="ps-mc-intro"
              questions={PS_MC_INTRO_QUIZ}
            />
          </section>

          <section className="section" id="ps-mc-sim">
            <div className="sec-badge">Section 3.2</div>
            <h2 className="sec-title">Accuracy and variance reduction</h2>
            <TheoryBox title="Law of large numbers">
              <p>
                {"By the law of large numbers $\\hat\\theta\\to\\theta$. An approximate 95% interval is $\\hat\\theta\\pm1.96\\,s/\\sqrt n$, with $s$ the sample standard deviation of the $g(X_i)$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Variance reduction">
              <p>
                {"Antithetic variates use negatively correlated pairs such as $U$ and $1-U$ to cut variance; control variates subtract a correlated quantity with known mean. Both reduce $\\sigma$ without more draws."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Compute $\\hat\\theta$ and $s$." },
                { text: "Form $\\hat\\theta\\pm1.96\\,s/\\sqrt n$." },
                { text: "If the interval is too wide, try antithetic or control variates before raising $n$." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-mc-sim"
              badge="Quiz 3.2"
              title="Accuracy and variance reduction"
              scoreId="score-ps-mc-sim"
              section="ps-mc-sim"
              questions={PS_MC_SIM_QUIZ}
            />
          </section>

        </main>
      </StudyGuideShell>
  );
}

export default MonteCarloGuide;
