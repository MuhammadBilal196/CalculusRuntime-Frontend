import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_MARKOV_QUIZ } from "../../data/laQuizzes";

export default function MarkovChainsGuide({ part = 1, embedded = false }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;

  const content = (
      <div className={embedded ? "la-topic-content" : "main"}>
        {!embedded && (<header className="ch-hdr">
          <div className="ch-eye">Linear Algebra</div>
          <h1 className="ch-title">Markov Chains &amp; Steady States</h1>
          <p className="ch-sub">Represent state changes with stochastic matrices and find long-run distributions as fixed vectors</p>
          <p>
            <Link to="/linear-algebra/eigen/1">Eigenvalues and eigenvectors</Link>
            {" · "}
            <Link to="/linear-algebra/systems/1">Linear systems</Link>
            {" · "}
            <Link to="/probability-statistics/stochastic-processes/1">Stochastic Processes (Probability &amp; Statistics)</Link>
          </p>
          <p>
            Part {part} of 2. Part 1 builds the transition-matrix model and advances a distribution;
            Part 2 solves for stationary states and interprets when the iterates converge.
          </p>
          <p>
            This guide focuses on the linear-algebra view: matrix conventions, fixed vectors,
            eigenvalue 1, and matrix powers. The linked Stochastic Processes guide covers the
            broader probability model and process-level framing.
          </p>
        </header>)}

        <section className="section" id={embedded ? `markov-model-${part}` : "markov-model"}>
          <h2 className="sec-title">
            {advanced ? "Stationary states as eigenvectors" : "A finite-state model as a matrix"}
          </h2>
          {advanced ? (
            <>
              <TheoryBox title="The fixed-vector equation">
                <p>{"A stationary distribution is unchanged by one transition. With column probability vectors and a column-stochastic matrix, it satisfies $P\\pi=\\pi$, together with $\\pi_i\\ge0$ and $\\mathbf{1}^{T}\\pi=1$. Thus $\\pi$ is an eigenvector of $P$ for eigenvalue $1$, scaled so its entries form a probability distribution."}</p>
                <p>{"Equivalently, solve $(P-I)\\pi=0$ and impose the normalization equation. The rows of $P-I$ are dependent because $1$ is an eigenvalue, so a practical system replaces one of those equations with $\\mathbf{1}^{T}\\pi=1$. Check the final vector for nonnegative entries, unit sum, and a small residual $\\lVert P\\pi-\\pi\\rVert$."}</p>
                <p>{"For a row-stochastic matrix $Q$ and row probability vector $r^{T}$, the matching equations are $r_{n+1}^{T}=r_n^{T}Q$ and $r^{T}Q=r^{T}$. The column convention used in this guide is obtained by taking $P=Q^{T}$. Transpose the matrix when changing conventions; do not mix a row vector with a column-stochastic update."}</p>
              </TheoryBox>
              <TheoryBox title="Existence, uniqueness, and convergence">
                <p>{"Every finite stochastic matrix has at least one stationary distribution. It need not be unique: if the chain has multiple closed classes, different stationary distributions can be supported on different classes. Irreducibility is a standard condition that guarantees a unique stationary distribution."}</p>
                <p>{"Uniqueness alone does not guarantee that $P^{n}p_0$ converges for every starting distribution. For a finite irreducible chain, aperiodicity also guarantees convergence to its unique stationary distribution. A strictly positive transition matrix is a sufficient condition for both properties. In spectral terms, convergence requires the eigenvalue $1$ to be the only eigenvalue on the unit circle that affects the iteration."}</p>
                <p>{"A periodic chain can have a stationary distribution while its step-by-step distributions oscillate. A reducible chain can have many stationary distributions. These cases distinguish solving the fixed-vector equation from proving that repeated transitions converge to that vector."}</p>
              </TheoryBox>
            </>
          ) : (
            <>
              <TheoryBox title="States, distributions, and transition matrices">
                <p>{"A finite-state Markov chain has states $s_1,\\ldots,s_m$. At step $n$, collect the probabilities of the states into a column vector $p_n\\in\\mathbb{R}^{m}$. Its entries satisfy $p_{n,i}\\ge0$ and $\\mathbf{1}^{T}p_n=1$; the set of such vectors is the probability simplex."}</p>
                <p>{"Use the column-stochastic convention $p_{n+1}=Pp_n$, where $P_{ij}$ is the probability of moving from state $j$ to state $i$ in one step. Every entry of $P$ is nonnegative and each column sums to one. Therefore $\\mathbf{1}^{T}P=\\mathbf{1}^{T}$, so multiplying a probability vector by $P$ keeps its total mass equal to one."}</p>
                <p>{"Some books instead store states as row vectors and use a row-stochastic matrix whose rows sum to one. Both conventions describe the same transitions after transposing the matrix. In calculations, state the convention first and keep the vector, matrix, and multiplication order consistent."}</p>
              </TheoryBox>
              <TheoryBox title="One step and many steps">
                <p>{"One transition is $p_1=Pp_0$. Repeating the same transition gives $p_n=P^{n}p_0$. The columns of $P^{n}$ contain the state distributions reached after $n$ steps from each corresponding starting state. Matrix powers therefore encode repeated transitions without listing every intermediate step."}</p>
                <p>{"A distribution is stationary when a transition leaves it unchanged. This is the fixed-vector equation $P\\pi=\\pi$. It already hints at an eigenvalue problem: stationary distributions lie in the eigenspace of $P$ for $\\lambda=1$. Part 2 develops the normalization and convergence conditions needed to interpret that vector."}</p>
              </TheoryBox>
            </>
          )}
        </section>

        <section className="section" id={embedded ? `markov-evolution-${part}` : "markov-evolution"}>
          <h2 className="sec-title">{advanced ? "Reading repeated transitions" : "A dependable matrix workflow"}</h2>
          <ProcedureBox
            title={advanced ? "Compute and interpret a steady state" : "Advance a state distribution"}
            steps={advanced ? [
              "Write the transition convention and form the stationary equation $P\\pi=\\pi$ for column vectors.",
              "Solve $(P-I)\\pi=0$ together with $\\mathbf{1}^{T}\\pi=1$; replace one dependent equation with the normalization condition.",
              "Check that every entry is nonnegative, the entries sum to one, and $P\\pi$ equals $\\pi$ within rounding.",
              "Check the chain's structure before claiming convergence: irreducibility gives uniqueness, while irreducibility plus aperiodicity gives convergence for every initial distribution.",
              "If convergence is established, interpret $\\pi_i$ as the limiting fraction of steps in state $s_i$; otherwise report the stationary vector separately from the iterates."
            ] : [
              "List the states in a fixed order and write the initial distribution as a nonnegative column vector with entries summing to one.",
              "Build $P$ so column $j$ describes transitions out of state $s_j$ into all possible destination states.",
              "Check that entries are nonnegative and each column sums to one.",
              "Calculate the next distribution with $p_{n+1}=Pp_n$ and verify its entries still sum to one.",
              "For multiple steps use $p_n=P^np_0$; do not infer convergence until Part 2's structural conditions are checked."
            ]}
          />
        </section>

        {advanced && (
          <section className="section" id={embedded ? `markov-stationary-${part}` : "markov-stationary"}>
            <h2 className="sec-title">The spectral picture</h2>
            <TheoryBox title="Why the eigenvalue 1 matters">
              <p>{"The identity $\\mathbf{1}^{T}P=\\mathbf{1}^{T}$ makes $\\mathbf{1}^{T}$ a left eigenvector of $P$ for eigenvalue $1$. Since $P$ and $P^{T}$ have the same eigenvalues, $P$ also has a right eigenvector for $1$; the finite-dimensional Perron–Frobenius theorem guarantees a nonnegative one that can be normalized as a stationary distribution."}</p>
              <p>{"All eigenvalues of a stochastic matrix have magnitude at most one. When the chain is irreducible and aperiodic, the stationary direction is the only non-decaying mode, and the other modes shrink under repeated multiplication. An eigenvalue such as $-1$ can instead preserve an alternating mode, explaining oscillation in a periodic chain."}</p>
            </TheoryBox>
          </section>
        )}

        <section className="section" id={embedded ? `markov-examples-${part}` : "markov-examples"}>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample number={3} title="Solve a two-state steady state" setup={"Let $P=\\begin{pmatrix}0.8&0.3\\\\0.2&0.7\\end{pmatrix}$ be column-stochastic. Find its stationary distribution."} steps={[
                "Set $\\pi=(x,y)^T$ and solve $P\\pi=\\pi$ with $x+y=1$.",
                "The first coordinate gives $0.8x+0.3y=x$, so $0.2x=0.3y$ and $x=1.5y$.",
                "Normalize: $1.5y+y=1$, hence $y=0.4$ and $x=0.6$."
              ]} result={"The stationary distribution is $\\pi=(0.6,0.4)^T$."} check={"Multiplication gives $P\\pi=(0.8(0.6)+0.3(0.4),\\;0.2(0.6)+0.7(0.4))^T=(0.6,0.4)^T$."} mistake={"Solving only the eigenvector equation without imposing a unit sum, or using the row convention with this column-stochastic matrix."} />
              <WorkedExample number={4} title="A stationary vector does not always mean convergence" setup={"Consider the deterministic switching matrix $P=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$ and start at $p_0=(1,0)^T$."} steps={[
                "Solving $P\\pi=\\pi$ with entries summing to one gives $\\pi=(1/2,1/2)^T$.",
                "But $Pp_0=(0,1)^T$, and $P^2p_0=(1,0)^T$.",
                "The iterates alternate between the two states instead of converging to $\\pi$."
              ]} result={"The chain has a stationary distribution, but its step-by-step distributions from $p_0$ do not converge."} check={"The chain has period two; its eigenvalues are $1$ and $-1$, so the alternating mode does not decay."} mistake={"Assuming that existence of a stationary distribution alone proves convergence."} />
            </>
          ) : (
            <>
              <WorkedExample number={1} title="Advance a two-state distribution" setup={"Use $P=\\begin{pmatrix}0.8&0.3\\\\0.2&0.7\\end{pmatrix}$ and begin in state 1 with $p_0=(1,0)^T$."} steps={[
                "The columns of $P$ sum to one, so it matches the column-vector convention.",
                "Compute $p_1=Pp_0=(0.8,0.2)^T$.",
                "Apply one more step: $p_2=Pp_1=(0.8(0.8)+0.3(0.2),\\;0.2(0.8)+0.7(0.2))^T=(0.70,0.30)^T$."
              ]} result={"After two transitions, the state probabilities are $p_2=(0.70,0.30)^T$."} check={"Each vector is nonnegative and sums to one."} mistake={"Multiplying on the wrong side or treating columns as rows without transposing the transition matrix."} />
              <WorkedExample number={2} title="Check whether a vector is stationary" setup={"For the same $P$, test $q=(0.5,0.5)^T$."} steps={[
                "Multiply $Pq=(0.8(0.5)+0.3(0.5),\\;0.2(0.5)+0.7(0.5))^T$.",
                "This gives $Pq=(0.55,0.45)^T$.",
                "Compare the result with $q$; the vectors are different."
              ]} result={"$q$ is a valid probability distribution but is not stationary."} check={"A probability vector is stationary only when one transition leaves it unchanged."} mistake={"Checking only that the entries are nonnegative and sum to one; those conditions make a distribution, not a stationary distribution."} />
            </>
          )}
        </section>

        <section className="section">
          <h2 className="sec-title">Keep the two questions separate</h2>
          <p>
            {advanced
              ? "First solve and verify the fixed-vector equation. Then use irreducibility and aperiodicity to decide whether the iterates converge to that vector."
              : "The transition matrix advances distributions by multiplication. Its stationary distribution is a separate fixed-vector problem; existence does not by itself establish convergence."}
          </p>
          <p>
            For the broader random-process framework and probability interpretation, continue to{" "}
            <Link to="/probability-statistics/stochastic-processes/1">Stochastic Processes</Link>.
          </p>
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-la-markov-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Markov Chains & Steady States"
            scoreId="score-la-markov-checkpoint"
            section="la-markov-checkpoint"
            questions={LA_MARKOV_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-la-markov-checkpoint", score, total)}
          />
        ) : (
          !embedded && (<section className="section">
            <h2 className="sec-title">Continue to stationary distributions</h2>
            <p>
              Part 2 solves $P\\pi=\\pi$, normalizes the eigenvector, and distinguishes
              a stationary state from convergence of $P^np_0$.
            </p>
            <Link to="/linear-algebra/markov-chains-steady-states/2">Continue to Part 2 →</Link>
          </section>)
        )}
      </div>
  );
  if (embedded) return content;
  return (
    <StudyGuideShell
      key={part}
      guideClass="partial-derivatives-guide"
      title={"Markov Chains & Steady States (Part " + part + ")"}
    >
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-title">Markov Chains &amp; Steady States</div>
        </div>
        <a className="sb-link" href="#markov-model">Transition matrices</a>
        <a className="sb-link" href="#markov-evolution">State evolution</a>
        {advanced && <a className="sb-link" href="#markov-stationary">Stationary states</a>}
        <a className="sb-link" href="#markov-examples">Worked examples</a>
        {advanced && <a className="sb-link" href="#quiz-la-markov-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/linear-algebra/overview">Course overview</Link>
      </nav>

      {content}
    </StudyGuideShell>
  );
}
