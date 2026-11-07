import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_C_STOCH_QUIZ } from "../../data/psNewModulesQuizzes";

export default function StochasticProcessesGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Stochastic Processes (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-sub">Probability &amp; Statistics</div>
          <div className="sb-title">Stochastic Processes</div>
        </div>
        <div className="sb-group">Part {part} Sections</div>
        <a className="sb-link" href="#ps-c-stoch-theory">1 · Theory &amp; Laws</a>
        <a className="sb-link" href="#ps-c-stoch-method">2 · Working Method</a>
        <a className="sb-link" href="#ps-c-stoch-examples">3 · Worked Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-c-stoch-checkpoint">4 · Topic Quiz (20 Q)</a>}
        <Link className="sb-link" to="/probability-statistics/overview">← All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Multivariate &amp; Stochastic Models</div>
          <h1 className="ch-title">Stochastic Processes</h1>
          <p className="ch-sub">
            {advanced
              ? "Homogeneous Poisson processes, exponential interarrival times, Poisson thinning, and standard Brownian motion"
              : "Discrete-time Markov chains, Chapman–Kolmogorov equations, stationary distributions, and first-step absorption analysis"}
          </p>
          <p>Curriculum: University Probability &amp; Statistics · Part {part} of 2</p>
          <p>
            For transition matrices, eigenvectors, and worked steady-state calculations, see{" "}
            <Link to="/linear-algebra/applied-linear-algebra/1#markov-chains-steady-states">Markov Chains &amp; Steady States (Linear Algebra)</Link>.
            That guide uses column probability vectors; transpose a row-stochastic transition matrix when following its calculations.
          </p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-c-stoch-theory">
          <div className="sec-badge">Section {part}.1 · Core Theory</div>
          <h2 className="sec-title">
            {advanced
              ? "Poisson Processes, Exponential Interarrivals & Brownian Motion"
              : "Discrete-Time Markov Chains & Stationary Distributions"}
          </h2>

          {advanced ? (
            <>
              <TheoryBox title="Homogeneous Poisson Process & Interarrival Times">
                <p>
                  {"A counting process $\\{N(t) : t \\ge 0\\}$ with $N(0) = 0$ is a homogeneous Poisson process with rate $\\lambda > 0$ if it has independent increments and $N(t) - N(s) \\sim \\operatorname{Poisson}(\\lambda(t-s))$ for $t > s$. Interarrival times $T_1, T_2, \\dots$ between consecutive events are i.i.d. $\\operatorname{Exponential}(\\lambda)$ with mean $1/\\lambda$, and the $k$-th arrival time $S_k = \\sum_{i=1}^k T_i$ follows $\\operatorname{Gamma}(k, \\lambda)$."}
                </p>
              </TheoryBox>

              <TheoremBox title="Poisson Superposition, Thinning & Standard Brownian Motion">
                <p>
                  {"1) Superposition & Thinning: Independent Poisson processes $N_1(t) \\sim \\operatorname{PP}(\\lambda_1)$ and $N_2(t) \\sim \\operatorname{PP}(\\lambda_2)$ sum to $\\operatorname{PP}(\\lambda_1+\\lambda_2)$. If arrivals of $\\operatorname{PP}(\\lambda)$ are independently retained with probability $p$ and rejected with $1-p$, the retained and rejected streams are independent Poisson processes with rates $\\lambda p$ and $\\lambda(1-p)$. 2) Standard Brownian Motion $\\{B(t):t\\ge 0\\}$ has $B(0)=0$, independent increments $B(t)-B(s)\\sim \\mathcal{N}(0, t-s)$, and covariance $\\operatorname{Cov}(B(s), B(t)) = \\min(s,t)$."}
                </p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="Markov Property and Row-Stochastic Transition Matrices">
                <p>
                  {"A discrete-time process $\\{X_n\\}_{n\\ge 0}$ on state space $S$ is a Markov chain if $P(X_{n+1}=j \\mid X_n=i, \\dots, X_0=i_0) = P(X_{n+1}=j \\mid X_n=i) = P_{ij}$. The transition matrix $P = (P_{ij})$ is row-stochastic ($P_{ij} \\ge 0$, $\\sum_j P_{ij} = 1$). By the Chapman–Kolmogorov equations, the $n$-step transition matrix is the matrix power $P^{(n)} = P^n$, and row distributions evolve via $\\pi^{(n)} = \\pi^{(0)} P^n$."}
                </p>
              </TheoryBox>

              <TheoremBox title="Ergodic Theorem & Stationary Distributions">
                <p>
                  {"A probability row vector $\\pi$ ($\\pi_j \\ge 0, \\sum_j \\pi_j = 1$) is stationary if $\\pi = \\pi P$. For any finite, irreducible, and aperiodic Markov chain, there exists a unique stationary distribution $\\pi$, and $\\lim_{n\\to\\infty} P_{ij}^{(n)} = \\pi_j = 1 / E[T_{jj}]$, where $E[T_{jj}]$ is the mean return time to state $j$."}
                </p>
              </TheoremBox>
            </>
          )}
        </section>

        <section className="section" id="ps-c-stoch-method">
          <div className="sec-badge">Section {part}.2 · Step-by-Step Method</div>
          <h2 className="sec-title">Working procedure</h2>
          <ProcedureBox
            title={advanced ? "Analyzing Poisson & Brownian Processes" : "Solving Finite-State Markov Chain Problems"}
            steps={
              advanced
                ? [
                    "For a Poisson process of rate $\\lambda$ over a window of length $\\tau$, compute the mean count $\\mu = \\lambda\\tau$ and use $\\operatorname{Poisson}(\\lambda\\tau)$.",
                    "Equate the zero-count event $\\{N(t) = 0\\}$ with the first interarrival time exceeding $t$: $P(T_1 > t) = e^{-\\lambda t}$.",
                    "When arrivals are classified into types with probabilities $p$ and $1-p$, treat the thinned streams as independent Poisson processes of rates $\\lambda p$ and $\\lambda(1-p)$.",
                    "For Brownian motion $B(t)$, rewrite linear combinations in terms of disjoint increments $B(t_k) - B(t_{k-1})$ or use $\\operatorname{Cov}(B(s), B(t)) = \\min(s,t)$.",
                  ]
                : [
                    "Construct the row-stochastic transition matrix $P$ and verify every row sums to $1$.",
                    "For $n$-step probabilities, multiply the initial row vector $\\pi^{(0)}$ by $P^n$.",
                    "To find the stationary vector $\\pi$, solve $\\pi P = \\pi$ together with the normalization condition $\\sum_j \\pi_j = 1$.",
                    "For a $2$-state chain $P = \\begin{pmatrix} 1-a & a \\\\ b & 1-b \\end{pmatrix}$, use the shortcut $\\pi = \\big(\\frac{b}{a+b}, \\frac{a}{a+b}\\big)$.",
                    "Take the reciprocal $1/\\pi_j$ to find the expected number of steps to return to state $j$.",
                  ]
            }
          />
        </section>

        <section className="section" id="ps-c-stoch-examples">
          <div className="sec-badge">Section {part}.3 · Concrete Numerical Examples</div>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={1}
                title="Poisson Process Counts and Interarrival Waiting Times"
                setup={"Web server requests arrive as a Poisson process with rate $\\lambda = 3$ per minute. Find (a) the probability of exactly $4$ requests in $2$ minutes, and (b) the probability that the gap between two consecutive requests exceeds $30$ seconds."}
                steps={[
                  "Over $\\tau = 2$ minutes, the count $N(2) \\sim \\operatorname{Poisson}(3 \\times 2 = 6)$.",
                  "Evaluate at $k = 4$: $P(N(2)=4) = \\frac{6^4 e^{-6}}{4!} = 54e^{-6} \\approx 0.1339$.",
                  "For $\\tau = 0.5$ minutes ($30$ seconds), the interarrival time $T \\sim \\operatorname{Exp}(3)$ satisfies $P(T > 0.5) = e^{-3(0.5)} = e^{-1.5} \\approx 0.2231$.",
                ]}
                result={"(a) $P(N(2)=4) \\approx 0.1339$; (b) $P(T > 0.5\\text{ min}) = e^{-1.5} \\approx 0.2231$."}
                check={"By memorylessness, waiting more than $0.5$ min from any instant equals $P(N(0.5)=0) = e^{-1.5}$."}
              />

              <WorkedExample
                number={2}
                title="Independent Poisson Thinning of Customer Arrivals"
                setup={"Customers arrive at rate $\\lambda = 20$ per hour. Each independently buys with probability $p = 0.30$ or just browses with probability $0.70$. Find the probability of $5$ buyers in an hour given that $3$ browsers were observed in that same hour."}
                steps={[
                  "By Poisson thinning, the buyer count $N_B(1) \\sim \\operatorname{Poisson}(20 \\times 0.30 = 6)$ and browser count $N_{NB}(1) \\sim \\operatorname{Poisson}(14)$ are independent.",
                  "Conditioning on $N_{NB}(1) = 3$ leaves the distribution of $N_B(1)$ unchanged.",
                  "Compute $P(N_B(1) = 5) = \\frac{6^5 e^{-6}}{5!} = 64.8 e^{-6} \\approx 0.1606$.",
                ]}
                result={"$P(N_B(1)=5 \\mid N_{NB}(1)=3) = 64.8e^{-6} \\approx 0.1606$."}
                check={"Because total Poisson arrivals are random rather than fixed, thinned subprocesses are independent."}
              />

              <WorkedExample
                number={3}
                title="Brownian Motion Increments and Conditional Distribution"
                setup={"Let $\\{B(t) : t \\ge 0\\}$ be standard Brownian motion. Find (a) $\\operatorname{Var}(2B(1) + B(4))$ and (b) the conditional law of $B(5)$ given $B(2) = 3$."}
                steps={[
                  "Use $\\operatorname{Var}(B(t)) = t$ and $\\operatorname{Cov}(B(1), B(4)) = \\min(1,4) = 1$: $\\operatorname{Var}(2B(1)+B(4)) = 4(1) + 4 + 2(2)(1)(1) = 12$.",
                  "Alternatively, write $2B(1) + B(4) = 3B(1) + (B(4) - B(1))$ to get $3^2(1) + (4-1) = 12$.",
                  "Since $B(5) = B(2) + (B(5)-B(2))$ and $B(5)-B(2) \\sim \\mathcal{N}(0, 3)$ is independent of $B(2)$, $B(5) \\mid (B(2)=3) \\sim \\mathcal{N}(3, 3)$.",
                ]}
                result={"(a) $\\operatorname{Var}(2B(1)+B(4)) = 12$; (b) $B(5) \\mid (B(2)=3) \\sim \\mathcal{N}(3, 3)$."}
                check={"Both the covariance formula and independent-increment decomposition give variance $12$."}
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="Two-Step Transition Probability and Stationary Distribution (2-State Chain)"
                setup={"A server transitions between state $0$ (Up) and state $1$ (Down) with $P = \\begin{pmatrix} 0.9 & 0.1 \\\\ 0.4 & 0.6 \\end{pmatrix}$. Find $P(X_2 = 0 \\mid X_0 = 0)$ and the stationary distribution $\\pi$."}
                steps={[
                  "Compute the $(0,0)$ entry of $P^2$: $P_{00}^{(2)} = (0.9)(0.9) + (0.1)(0.4) = 0.81 + 0.04 = 0.85$.",
                  "Use the 2-state stationary formula with $a = 0.1$ and $b = 0.4$: $\\pi_0 = \\frac{0.4}{0.1+0.4} = 0.80$ and $\\pi_1 = \\frac{0.1}{0.1+0.4} = 0.20$.",
                ]}
                result={"$P(X_2 = 0 \\mid X_0 = 0) = 0.85$ and stationary distribution $\\pi = (0.80, 0.20)$."}
                check={"Check balance: $0.80(0.1) = 0.08 = 0.20(0.4)$."}
              />

              <WorkedExample
                number={2}
                title="Stationary Distribution and Mean Return Time of a 3-State Chain"
                setup={"Find the stationary distribution $\\pi = (\\pi_1, \\pi_2, \\pi_3)$ and mean return time $E[T_{33}]$ for $P = \\begin{pmatrix} 0.5 & 0.5 & 0 \\\\ 0.25 & 0.5 & 0.25 \\\\ 0 & 0.5 & 0.5 \\end{pmatrix}$."}
                steps={[
                  "From $\\pi = \\pi P$, column 1 gives $\\pi_1 = 0.5\\pi_1 + 0.25\\pi_2 \\implies \\pi_2 = 2\\pi_1$.",
                  "Column 3 gives $\\pi_3 = 0.25\\pi_2 + 0.5\\pi_3 \\implies \\pi_3 = 0.5\\pi_2 = \\pi_1$.",
                  "Normalize $\\pi_1 + 2\\pi_1 + \\pi_1 = 1 \\implies \\pi = (0.25, 0.50, 0.25)$.",
                  "Compute mean return time to state $3$: $E[T_{33}] = 1/\\pi_3 = 1/0.25 = 4$ steps.",
                ]}
                result={"$\\pi = (0.25, 0.50, 0.25)$ and $E[T_{33}] = 4$ steps."}
                check={"Multiplying $(0.25, 0.50, 0.25)P$ reproduces $(0.25, 0.50, 0.25)$."}
              />

              <WorkedExample
                number={3}
                title="First-Step Analysis for Absorption Probability"
                setup={"On states $\\{0, 1, 2, 3\\}$ with absorbing boundaries $0$ and $3$, an interior step moves up with $p = 0.6$ and down with $q = 0.4$. Find $h_i = P(\\text{hit } 3 \\text{ before } 0 \\mid X_0 = i)$ for $i = 1, 2$."}
                steps={[
                  "Set boundary conditions $h_0 = 0$ and $h_3 = 1$.",
                  "Write first-step equations: $h_1 = 0.6h_2$ and $h_2 = 0.4h_1 + 0.6$.",
                  "Substitute $h_1$: $h_2 = 0.24h_2 + 0.6 \\implies 0.76h_2 = 0.6 \\implies h_2 = \\frac{15}{19} \\approx 0.7895$.",
                  "Then $h_1 = 0.6 \\times \\frac{15}{19} = \\frac{9}{19} \\approx 0.4737$.",
                ]}
                result={"$h_1 = 9/19 \\approx 0.4737$ and $h_2 = 15/19 \\approx 0.7895$."}
                check={"Matches the gambler's ruin formula $[1 - (q/p)^i]/[1 - (q/p)^3]$ with $q/p = 2/3$."}
              />
            </>
          )}
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
            <p>Part 2 covers continuous-time homogeneous Poisson processes, exponential/Gamma arrival times, Poisson thinning, standard Brownian motion, and the 20-question topic checkpoint.</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
