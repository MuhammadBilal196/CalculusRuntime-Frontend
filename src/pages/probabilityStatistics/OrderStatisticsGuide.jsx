import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { LaMcqSection } from "../linearAlgebra/LaMcq";
import {
  PS_OS_INTRO_QUIZ,
  PS_OS_DIST_QUIZ,
  PS_OS_EXTREME_QUIZ,
} from "../../data/psNewModuleQuizzes";
import { TheoryBox, TheoremBox, ProcedureBox } from "../linearAlgebra/LaBlocks";

function OrderStatisticsGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Order Statistics and Extremes (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Order Statistics and Extremes · Part 2</div></div>
          <a className="sb-link" href="#ps-os-extreme">Extreme value theory</a>
          <a className="sb-link" href="#quiz-ps-os-extreme">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 2 of 2</div>
            <h1 className="ch-title">Order Statistics and Extremes</h1>
            <p className="ch-sub">Minima, maxima, quantiles and extreme-value laws</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-os-extreme">
            <div className="sec-badge">Section 6.1</div>
            <h2 className="sec-title">Extreme value theory</h2>
            <TheoryBox title="Limit laws">
              <p>
                {"Fisher-Tippett-Gnedenko: a suitably normalised maximum converges to a Generalized Extreme Value law (Gumbel, Frechet or Weibull). For Exponential(1) data, $X_{(n)}-\\ln n$ converges to Gumbel with cdf $e^{-e^{-x}}$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Return period">
              <p>
                {"A level exceeded with probability $p$ per period has return period $T=1/p$. A 100-year flood has annual exceedance probability $0.01$."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Take block maxima (e.g. yearly)." },
                { text: "Fit a GEV law." },
                { text: "Read off the level for the required return period." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-os-extreme"
              badge="Quiz 6.1"
              title="Extreme value theory"
              scoreId="score-ps-os-extreme"
              section="ps-os-extreme"
              questions={PS_OS_EXTREME_QUIZ}
            />
          </section>

        </main>
      </StudyGuideShell>
    );
  }
  return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Order Statistics and Extremes (Part 1)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Order Statistics and Extremes · Part 1</div></div>
          <a className="sb-link" href="#ps-os-intro">Minimum, maximum and the CDF</a>
          <a className="sb-link" href="#quiz-ps-os-intro">Quiz</a>
          <a className="sb-link" href="#ps-os-dist">Distribution of the kth order statistic</a>
          <a className="sb-link" href="#quiz-ps-os-dist">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 1 of 2</div>
            <h1 className="ch-title">Order Statistics and Extremes</h1>
            <p className="ch-sub">Minima, maxima, quantiles and extreme-value laws</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-os-intro">
            <div className="sec-badge">Section 5.1</div>
            <h2 className="sec-title">Minimum, maximum and the CDF</h2>
            <TheoryBox title="Order statistics">
              <p>
                {"Order the sample $X_{(1)}\\le\\dots\\le X_{(n)}$. For i.i.d. data with cdf $F$: $P(X_{(n)}\\le x)=F(x)^n$ and $P(X_{(1)}>x)=\\left(1-F(x)\\right)^n$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Uniform example">
              <p>
                {"For $U(0,1)$ data, $P(X_{(1)}>x)=(1-x)^n$, so $P(X_{(1)}>0.5)=0.5^n$. The maximum has pdf $nx^{n-1}$ on $(0,1)$."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "State the event for the max or min." },
                { text: "Use independence to multiply probabilities." },
                { text: "Differentiate the cdf to get the pdf." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-os-intro"
              badge="Quiz 5.1"
              title="Minimum, maximum and the CDF"
              scoreId="score-ps-os-intro"
              section="ps-os-intro"
              questions={PS_OS_INTRO_QUIZ}
            />
          </section>

          <section className="section" id="ps-os-dist">
            <div className="sec-badge">Section 5.2</div>
            <h2 className="sec-title">Distribution of the kth order statistic</h2>
            <TheoryBox title="General pdf">
              <p>
                {"$f_{(k)}(x)=\\frac{n!}{(k-1)!\\,(n-k)!}\\,F(x)^{k-1}\\left(1-F(x)\\right)^{n-k}f(x)$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Uniform and Beta">
              <p>
                {"For $U(0,1)$, $X_{(k)}\\sim\\mathrm{Beta}(k,\\,n-k+1)$ with mean $\\frac{k}{n+1}$. The $n$ points cut $(0,1)$ into $n+1$ gaps with equal mean $\\frac1{n+1}$."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Identify $k$ and $n$." },
                { text: "Plug $F$ and $f$ into the pdf formula." },
                { text: "For uniform data use the Beta shortcut." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-os-dist"
              badge="Quiz 5.2"
              title="Distribution of the kth order statistic"
              scoreId="score-ps-os-dist"
              section="ps-os-dist"
              questions={PS_OS_DIST_QUIZ}
            />
          </section>

        </main>
      </StudyGuideShell>
  );
}

export default OrderStatisticsGuide;
