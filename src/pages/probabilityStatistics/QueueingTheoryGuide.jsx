import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { LaMcqSection } from "../linearAlgebra/LaMcq";
import {
  PS_Q_INTRO_QUIZ,
  PS_Q_MM1_QUIZ,
  PS_Q_MMC_QUIZ,
} from "../../data/psNewModuleQuizzes";
import { TheoryBox, TheoremBox, ProcedureBox } from "../linearAlgebra/LaBlocks";

function QueueingTheoryGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Queueing Theory: M/M/1 and M/M/c (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Queueing Theory: M/M/1 and M/M/c · Part 2</div></div>
          <a className="sb-link" href="#ps-q-mmc">M/M/c and Erlang C</a>
          <a className="sb-link" href="#quiz-ps-q-mmc">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 2 of 2</div>
            <h1 className="ch-title">Queueing Theory: M/M/1 and M/M/c</h1>
            <p className="ch-sub">Waiting lines with Poisson arrivals and exponential service</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-q-mmc">
            <div className="sec-badge">Section 7.1</div>
            <h2 className="sec-title">M/M/c and Erlang C</h2>
            <TheoryBox title="Multiple servers">
              <p>
                {"With $c$ servers the utilisation is $\\rho=\\frac{\\lambda}{c\\mu}<1$. The Erlang C probability that an arrival must wait is $P_W=\\frac{\\frac{(c\\rho)^c}{c!\\,(1-\\rho)}}{\\sum_{k=0}^{c-1}\\frac{(c\\rho)^k}{k!}+\\frac{(c\\rho)^c}{c!\\,(1-\\rho)}}$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Waiting measures">
              <p>
                {"$L_q=P_W\\,\\frac{\\rho}{1-\\rho}$ and $W_q=\\frac{L_q}{\\lambda}$, then $W=W_q+\\frac1\\mu$. Adding a server lowers $\\rho$ and sharply reduces waiting."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Compute $\\rho=\\lambda/(c\\mu)$ and check it is below 1." },
                { text: "Evaluate Erlang C for $P_W$." },
                { text: "Get $L_q$, $W_q$, then $W$." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-q-mmc"
              badge="Quiz 7.1"
              title="M/M/c and Erlang C"
              scoreId="score-ps-q-mmc"
              section="ps-q-mmc"
              questions={PS_Q_MMC_QUIZ}
            />
          </section>

        </main>
      </StudyGuideShell>
    );
  }
  return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Queueing Theory: M/M/1 and M/M/c (Part 1)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Queueing Theory: M/M/1 and M/M/c · Part 1</div></div>
          <a className="sb-link" href="#ps-q-intro">Queues and Little's law</a>
          <a className="sb-link" href="#quiz-ps-q-intro">Quiz</a>
          <a className="sb-link" href="#ps-q-mm1">M/M/1 formulas</a>
          <a className="sb-link" href="#quiz-ps-q-mm1">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 1 of 2</div>
            <h1 className="ch-title">Queueing Theory: M/M/1 and M/M/c</h1>
            <p className="ch-sub">Waiting lines with Poisson arrivals and exponential service</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-q-intro">
            <div className="sec-badge">Section 6.1</div>
            <h2 className="sec-title">Queues and Little's law</h2>
            <TheoryBox title="Notation and stability">
              <p>
                {"Kendall notation A/S/c: M/M/1 means Poisson (Markovian) arrivals at rate $\\lambda$, exponential service at rate $\\mu$, one server. Utilisation is $\\rho=\\lambda/\\mu$ and the queue is stable only if $\\rho<1$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Little's law">
              <p>
                {"$L=\\lambda W$: mean number in the system equals arrival rate times mean time in the system. It holds for any stable queue, and $L_q=\\lambda W_q$ for the waiting line."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Identify $\\lambda$ and $\\mu$." },
                { text: "Check $\\rho=\\lambda/\\mu<1$." },
                { text: "Use $L=\\lambda W$ to move between counts and times." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-q-intro"
              badge="Quiz 6.1"
              title="Queues and Little's law"
              scoreId="score-ps-q-intro"
              section="ps-q-intro"
              questions={PS_Q_INTRO_QUIZ}
            />
          </section>

          <section className="section" id="ps-q-mm1">
            <div className="sec-badge">Section 6.2</div>
            <h2 className="sec-title">M/M/1 formulas</h2>
            <TheoryBox title="Steady state">
              <p>
                {"$P(N=n)=(1-\\rho)\\rho^n$, $L=\\frac{\\rho}{1-\\rho}$, $W=\\frac1{\\mu-\\lambda}$, $L_q=\\frac{\\rho^2}{1-\\rho}$, $W_q=\\frac{\\rho}{\\mu-\\lambda}$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Quick check">
              <p>
                {"With $\\lambda=2$ and $\\mu=4$: $\\rho=0.5$, $L=1$, $W=0.5$, $P(N=0)=0.5$. As $\\rho\\to1$, $L$ and $W$ blow up."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Compute $\\rho=\\lambda/\\mu$." },
                { text: "Get $L$ and $W$ from the formulas." },
                { text: "Verify with $L=\\lambda W$." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-q-mm1"
              badge="Quiz 6.2"
              title="M/M/1 formulas"
              scoreId="score-ps-q-mm1"
              section="ps-q-mm1"
              questions={PS_Q_MM1_QUIZ}
            />
          </section>

        </main>
      </StudyGuideShell>
  );
}

export default QueueingTheoryGuide;
