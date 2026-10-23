import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_R2_ENTROPY_MI_QUIZ } from "../../data/psInfoTheoryQuizzes";

export default function EntropyMutualInformationGuide() {
  const { saveQuizScore } = useProgress();
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Entropy and Mutual Information"
    >
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Information Theory · Topic 1</div></div>
        <a className="sb-link" href="#ps-it1-objectives">Objectives</a>
        <a className="sb-link" href="#ps-it1-defs">Definitions</a>
        <a className="sb-link" href="#ps-it1-derivation">Key results</a>
        <a className="sb-link" href="#ps-it1-pitfalls">Limitations</a>
        <a className="sb-link" href="#ps-it1-examples">Examples</a>
        <a className="sb-link" href="#quiz-ps-it1-checkpoint">Quiz</a>
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>

      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Information Theory · Part 1 of 2</div>
          <h1 className="ch-title">Entropy and Mutual Information</h1>
          <p className="ch-sub">Measuring uncertainty, and how much one variable tells us about another</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-it1-objectives">
          <div className="sec-badge">Section 1</div>
          <h2 className="sec-title">Learning objectives and prerequisites</h2>
          <TheoryBox title="By the end you can">
            <ul>
              <li>{"Compute $H(X)$, $H(X,Y)$, $H(Y\\mid X)$ and $I(X;Y)$ for discrete distributions."}</li>
              <li>{"State the log base, the unit (bits or nats) and the convention $0\\log 0=0$ every time."}</li>
              <li>{"Explain why $I(X;Y)=0$ is equivalent to independence, and why zero covariance is not."}</li>
              <li>{"Interpret information gain as a reduction in uncertainty."}</li>
            </ul>
          </TheoryBox>
          <TheoryBox title="Prerequisites">
            <p>{"Discrete random variables, joint and marginal distributions, conditional probability, independence, and logarithm rules."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-it1-defs">
          <div className="sec-badge">Section 2</div>
          <h2 className="sec-title">Definitions and assumptions</h2>
          <TheoryBox title="Entropy">
            <p>{"For a discrete random variable $X$ with pmf $p(x)$ on a finite or countable support:"}</p>
            <p>{"$$H(X)=-\\sum_{x} p(x)\\log p(x)$$"}</p>
            <p>{"Base 2 gives bits, base $e$ gives nats. Terms with $p(x)=0$ contribute $0$ (convention $0\\log 0=0$, justified by $p\\log p\\to 0$). Always $H(X)\\ge 0$, and $H(X)\\le \\log n$ for $n$ outcomes, with equality only for the uniform distribution."}</p>
          </TheoryBox>
          <TheoryBox title="Joint and conditional entropy">
            <p>{"$$H(X,Y)=-\\sum_{x,y} p(x,y)\\log p(x,y),\\qquad H(Y\\mid X)=\\sum_x p(x)\\,H(Y\\mid X=x)$$"}</p>
            <p>{"Chain rule: $H(X,Y)=H(X)+H(Y\\mid X)$. Conditioning never increases entropy on average: $H(Y\\mid X)\\le H(Y)$."}</p>
          </TheoryBox>
          <TheoryBox title="Mutual information (information gain)">
            <p>{"$$I(X;Y)=\\sum_{x,y}p(x,y)\\log\\frac{p(x,y)}{p(x)p(y)}=H(X)-H(X\\mid Y)=H(X)+H(Y)-H(X,Y)$$"}</p>
            <p>{"Assumptions: discrete variables with a known joint pmf, and the sum is taken over pairs with $p(x,y)>0$."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-it1-derivation">
          <div className="sec-badge">Section 3</div>
          <h2 className="sec-title">Key results and proof outline</h2>
          <TheoremBox title="Nonnegativity and independence">
            <p>{"$I(X;Y)\\ge 0$, with equality if and only if $X$ and $Y$ are independent."}</p>
          </TheoremBox>
          <TheoryBox title="Proof outline">
            <p>{"Write $-I(X;Y)=\\sum p(x,y)\\log\\frac{p(x)p(y)}{p(x,y)}$ over the support of $p(x,y)$. Since $\\log$ is concave, Jensen's inequality gives"}</p>
            <p>{"$$-I(X;Y)\\le \\log\\sum_{p(x,y)>0} p(x)p(y)\\le \\log 1=0.$$"}</p>
            <p>{"Equality in Jensen requires $p(x,y)/(p(x)p(y))$ constant on the support, and that constant is $1$, which is exactly independence."}</p>
          </TheoryBox>
          <TheoremBox title="Data-processing inequality">
            <p>{"If $X\\to Y\\to Z$ is a Markov chain, then $I(X;Z)\\le I(X;Y)$. Post-processing cannot create information."}</p>
          </TheoremBox>
          <ProcedureBox
            title="Procedure: compute I(X;Y) from a joint table"
            steps={[
              "Sum rows and columns to get the marginals p(x) and p(y).",
              "Compute H(X), H(Y) and H(X,Y) with one fixed log base.",
              "Use I(X;Y) = H(X) + H(Y) - H(X,Y).",
              "Sanity check: 0 <= I(X;Y) <= min(H(X), H(Y)).",
              "Report the unit (bits or nats).",
            ]}
          />
        </section>

        <section className="section" id="ps-it1-pitfalls">
          <div className="sec-badge">Section 4</div>
          <h2 className="sec-title">Limitations and common mistakes</h2>
          <TheoryBox title="Watch out for">
            <ul>
              <li>{"Mixing bits and nats in one calculation."}</li>
              <li>{"Forgetting $0\\log 0=0$ and getting an undefined result."}</li>
              <li>{"Believing $H(X,Y)=H(X)+H(Y)$ always. It holds only under independence."}</li>
              <li>{"Treating $I(X;Y)=0$ as the same as zero correlation. It means full independence, which is stronger."}</li>
              <li>{"Plug-in estimates of entropy from small samples are biased downward. This guide assumes the pmf is known."}</li>
              <li>{"Differential entropy of continuous variables is a different object (it can be negative). Only the discrete case is covered here."}</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="ps-it1-examples">
          <div className="sec-badge">Section 5</div>
          <h2 className="sec-title">Worked examples</h2>

          <WorkedExample
            number={1}
            title="Entropy of a skewed distribution"
            setup={"A source emits symbols with probabilities $(1/2,\\,1/4,\\,1/8,\\,1/16,\\,1/16)$. Find $H(X)$ in bits."}
            steps={[
              "Each term is p log2(1/p): 1/2 gives 0.5, 1/4 gives 0.5, 1/8 gives 0.375, 1/16 gives 0.25, and the last 1/16 gives 0.25.",
              "Add the five terms: 0.5 + 0.5 + 0.375 + 0.25 + 0.25.",
            ]}
            result={"$H(X)=1.875$ bits, below the maximum $\\log_2 5\\approx 2.32$ bits for 5 outcomes."}
            check={"Probabilities sum to 1, and $H$ lies between $0$ and $\\log_2 5$."}
          />

          <WorkedExample
            number={2}
            title="Application: information gain from a noisy sensor"
            setup={"A sensor reading Y agrees with a true binary state X with probability 0.8. Joint pmf: p(0,0)=0.4, p(0,1)=0.1, p(1,0)=0.1, p(1,1)=0.4. Find I(X;Y)."}
            steps={[
              "Both marginals are uniform: p(x)=p(y)=1/2, so H(X)=1 bit.",
              "Given Y=0, X has distribution (0.8, 0.2), so H(X|Y=0) = 0.722 bits. By symmetry the same holds for Y=1, so H(X|Y) = 0.722 bits.",
              "Information gain: I(X;Y) = H(X) - H(X|Y) = 1 - 0.722.",
            ]}
            result={"$I(X;Y)\\approx 0.278$ bits. The sensor removes about 28% of the uncertainty about $X$."}
            check={"Cross-check with H(X,Y) = 1.722 bits: I = 1 + 1 - 1.722 = 0.278 bits."}
          />

          <WorkedExample
            number={3}
            title="Counterexample: uncorrelated but dependent"
            setup={"X is uniform on {-1, 0, 1} and Y = X^2. Show that Cov(X,Y)=0 although X and Y are dependent, and compute I(X;Y)."}
            steps={[
              "E[X] = 0 and E[XY] = E[X^3] = 0, so Cov(X,Y) = 0.",
              "Y is a function of X, so H(Y|X) = 0 and I(X;Y) = H(Y).",
              "Y = 0 with probability 1/3 and Y = 1 with probability 2/3, so H(Y) = (1/3)log2 3 + (2/3)log2(3/2).",
            ]}
            result={"$I(X;Y)\\approx 0.918$ bits $>0$, so $X$ and $Y$ are strongly dependent even though they are uncorrelated."}
            check={"Check P(Y=1 | X=1) = 1 but P(Y=1) = 2/3, so the variables are not independent."}
          />
        </section>

        <GuideMcqSection
          id="quiz-ps-it1-checkpoint"
          badge="Topic checkpoint · 20 questions"
          title="Entropy and Mutual Information"
          scoreId="score-ps-it1-checkpoint"
          section="ps-it1-checkpoint"
          questions={PS_R2_ENTROPY_MI_QUIZ}
          onComplete={(score, total) =>
            saveQuizScore("guide-mcq-ps-it1-checkpoint", score, total)
          }
        />
      </main>
    </StudyGuideShell>
  );
}