import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_A_MGF_QUIZ } from "../../data/psNewModulesQuizzes";

export default function MomentGeneratingFunctionsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Moment Generating Functions (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-sub">Probability &amp; Statistics</div>
          <div className="sb-title">Moment Generating Functions</div>
        </div>
        <div className="sb-group">Part {part} · Transform Methods</div>
        <a className="sb-link" href="#ps-a-mgf-theory">MGFs, Moments &amp; Cumulants</a>
        <a className="sb-link" href="#ps-a-mgf-method">Transform &amp; Uniqueness Procedure</a>
        <a className="sb-link" href="#ps-a-mgf-examples">Worked Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-a-mgf-checkpoint">Checkpoint Quiz</a>}
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Estimation &amp; Inference Theory · Part {part} of 2</div>
          <h1 className="ch-title">Moment Generating Functions</h1>
          <p className="ch-sub">
            {advanced
              ? "Named MGF catalog, reproductive closure of independent sums, cumulant generating functions, and uniqueness"
              : "Definition M_X(t) = E[e^{tX}], extracting raw and central moments via derivatives at t = 0, and linear transformations"}
          </p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-a-mgf-theory">
          <div className="sec-badge">Section {part}.1 · Formal Foundations</div>
          <h2 className="sec-title">
            {advanced ? "MGF catalog, cumulants & distribution uniqueness" : "Definition, Taylor expansion & moment extraction"}
          </h2>
          {advanced ? (
            <>
              <TheoryBox title="Catalog of standard MGFs and cumulant generating function">
                <p>
                  {"Standard MGFs: Bernoulli$(p)$: $1-p+pe^t$; Binomial$(n,p)$: $(1-p+pe^t)^n$; Poisson$(\\lambda)$: $\\exp(\\lambda(e^t-1))$; Exponential$(\\lambda)$: $\\frac{\\lambda}{\\lambda-t}$ ($t<\\lambda$); Gamma$(\\alpha,\\beta)$: $(1-t/\\beta)^{-\\alpha}$ ($t<\\beta$); Normal$(\\mu,\\sigma^2)$: $\\exp(\\mu t + \\frac{1}{2}\\sigma^2 t^2)$. The Cumulant Generating Function (CGF) is $K_X(t) = \\ln M_X(t)$, whose derivatives at $t=0$ directly give the mean $\\kappa_1 = K_X'(0) = E[X]$, variance $\\kappa_2 = K_X''(0) = \\text{Var}(X)$, and third central moment $\\kappa_3 = K_X'''(0)$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Uniqueness and convergence theorem for MGFs">
                <p>
                  {"1) Uniqueness: If $M_X(t) = M_Y(t)$ for all $t \\in (-h, h)$ with $h > 0$, then $X$ and $Y$ have the exact same probability distribution. 2) Independent Sums: If $X \\perp Y$, then $M_{X+Y}(t) = M_X(t)M_Y(t)$ and $K_{X+Y}(t) = K_X(t) + K_Y(t)$."}
                </p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="Moment Generating Function definition and series expansion">
                <p>
                  {"The Moment Generating Function (MGF) of a random variable $X$ is $M_X(t) = E[e^{tX}]$, provided the expectation is finite on an open neighborhood $(-h,h)$ around $t=0$. Expanding $e^{tX} = \\sum_{k=0}^\\infty \\frac{t^k X^k}{k!}$ yields $M_X(t) = \\sum_{k=0}^\\infty E[X^k]\\frac{t^k}{k!}$, so the $k$-th raw moment is the $k$-th derivative at zero: $E[X^k] = M_X^{(k)}(0)$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Affine transformation rule">
                <p>
                  {"For any constants $a, b \\in \\mathbb{R}$, the MGF of $Y = aX + b$ is $M_{aX+b}(t) = E[e^{t(aX+b)}] = e^{bt} M_X(at)$. In particular, for a standardized variable $Z = (X-\\mu)/\\sigma$, $M_Z(t) = e^{-\\mu t/\\sigma} M_X(t/\\sigma)$."}
                </p>
              </TheoremBox>
            </>
          )}
        </section>

        <section className="section" id="ps-a-mgf-method">
          <div className="sec-badge">Section {part}.2 · Step-by-Step Method</div>
          <h2 className="sec-title">Working procedure</h2>
          <ProcedureBox
            title={advanced ? "Identifying the distribution of an independent sum via MGFs" : "Extracting mean and variance from an MGF"}
            steps={
              advanced
                ? [
                    "Write the MGF $M_{X_i}(t)$ of each independent summand $X_i$.",
                    "Multiply the MGFs: $M_S(t) = \\prod_{i=1}^n M_{X_i}(t)$ (or add CGFs $K_S(t) = \\sum K_{X_i}(t)$).",
                    "Simplify the product and pattern-match against the named MGF catalog.",
                    "Invoke the MGF uniqueness theorem to state the exact distribution of $S$.",
                  ]
                : [
                    "Verify $M_X(0) = 1$ as a sanity check before differentiating.",
                    "Compute $M_X'(t)$ and evaluate at $t=0$ to obtain $\\mu = E[X] = M_X'(0)$.",
                    "Compute $M_X''(t)$ and evaluate at $t=0$ to obtain the second raw moment $E[X^2] = M_X''(0)$.",
                    "Form the variance $\\text{Var}(X) = M_X''(0) - [M_X'(0)]^2$ (or simply compute $K_X''(0)$ where $K_X(t)=\\ln M_X(t)$).",
                  ]
            }
          />
        </section>

        <section className="section" id="ps-a-mgf-examples">
          <div className="sec-badge">Section {part}.3 · Certificate Worked Examples</div>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={1}
                title="Sum of independent Poisson random variables via MGFs"
                setup="Let $X_1 \sim \text{Poisson}(3)$ and $X_2 \sim \text{Poisson}(5)$ be independent. Use MGFs to find the exact distribution of $S = X_1 + X_2$."
                steps={[
                  "Write individual MGFs: $M_{X_1}(t) = \\exp(3(e^t - 1))$ and $M_{X_2}(t) = \\exp(5(e^t - 1))$.",
                  "By independence, $M_S(t) = M_{X_1}(t)M_{X_2}(t) = \\exp((3+5)(e^t - 1)) = \\exp(8(e^t - 1))$.",
                  "Recognize $\\exp(8(e^t - 1))$ as the MGF of $\\text{Poisson}(8)$.",
                ]}
                result="By MGF uniqueness, $S = X_1 + X_2 \sim \text{Poisson}(8)$."
                check="$E[S] = 3 + 5 = 8$ and $\text{Var}(S) = 3 + 5 = 8$."
              />
              <WorkedExample
                number={2}
                title="Identifying a distribution from its MGF and finding P(X > 0)"
                setup="A random variable $X$ has MGF $M_X(t) = \exp(6t + 18t^2)$ for all $t \in \mathbb{R}$. Identify the distribution of $X$ and compute $P(X > 0)$ in terms of $\Phi$."
                steps={[
                  "Compare $M_X(t) = \\exp(6t + 18t^2)$ with the Normal MGF $\\exp\\!\\left(\\mu t + \\frac{1}{2}\\sigma^2 t^2\\right)$.",
                  "Match coefficients: $\\mu = 6$ and $\\frac{1}{2}\\sigma^2 = 18 \\implies \\sigma^2 = 36$ ($\\sigma = 6$).",
                  "Thus $X \\sim \\mathcal{N}(6, 36)$, and $P(X > 0) = P\\!\\left(Z > \\frac{0-6}{6}\\right) = P(Z > -1) = \\Phi(1) \\approx 0.8413$.",
                ]}
                result="$X \sim \mathcal{N}(6, 36)$ and $P(X > 0) = \Phi(1) \approx 0.8413$."
                check="$K_X(t) = 6t + 18t^2 \implies K_X'(0) = 6$ and $K_X''(0) = 36$."
                mistake="Do not forget the factor of $1/2$ in $\frac{1}{2}\sigma^2 t^2$: here $\sigma^2 = 36$, not $18$."
              />
              <WorkedExample
                number={3}
                title="Sum of i.i.d. Exponential lifetimes yields a Gamma distribution"
                setup="If $T_1, T_2, T_3, T_4 \stackrel{\text{iid}}{\sim} \text{Exp}(\lambda=2)$, find the MGF and distribution of total time $S = T_1 + T_2 + T_3 + T_4$."
                steps={[
                  "Each $T_i$ has MGF $M_{T_i}(t) = \\frac{2}{2-t} = (1 - t/2)^{-1}$ for $t < 2$.",
                  "Multiply for $n=4$ independent terms: $M_S(t) = [M_{T_1}(t)]^4 = (1 - t/2)^{-4}$ for $t < 2$.",
                  "Match $(1 - t/\\beta)^{-\\alpha}$ with shape $\\alpha = 4$ and rate $\\beta = 2$.",
                ]}
                result="$S \sim \text{Gamma}(\alpha=4, \beta=2)$ with mean $4/2 = 2$ and variance $4/4 = 1$."
                check="$K_S(t) = -4\ln(1 - t/2) \implies K_S'(0) = 2$ and $K_S''(0) = 1$."
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="Mean and variance of Exponential(λ) from its MGF"
                setup="For $X \sim \text{Exp}(\lambda)$ with density $\lambda e^{-\lambda x}$ ($x \ge 0$), derive $M_X(t)$ and extract $E[X]$ and $\text{Var}(X)$."
                steps={[
                  "Compute $M_X(t) = \\int_0^\\infty e^{tx} \\lambda e^{-\\lambda x}\\,dx = \\lambda \\int_0^\\infty e^{-(\\lambda - t)x}\\,dx = \\frac{\\lambda}{\\lambda - t}$ for $t < \\lambda$.",
                  "First derivative: $M_X'(t) = \\frac{\\lambda}{(\\lambda - t)^2} \\implies E[X] = M_X'(0) = \\frac{1}{\\lambda}$.",
                  "Second derivative: $M_X''(t) = \\frac{2\\lambda}{(\\lambda - t)^3} \\implies E[X^2] = M_X''(0) = \\frac{2}{\\lambda^2}$.",
                  "Variance: $\\text{Var}(X) = E[X^2] - (E[X])^2 = \\frac{2}{\\lambda^2} - \\frac{1}{\\lambda^2} = \\frac{1}{\\lambda^2}$.",
                ]}
                result="$M_X(t) = \frac{\lambda}{\lambda - t}$ ($t < \lambda$), $E[X] = \frac{1}{\lambda}$, and $\text{Var}(X) = \frac{1}{\lambda^2}$."
                check="At $t=0$, $M_X(0) = \lambda/\lambda = 1$."
              />
              <WorkedExample
                number={2}
                title="Extracting moments via the Cumulant Generating Function"
                setup="A random variable $X$ has MGF $M_X(t) = (1 - 3t)^{-5}$ for $t < 1/3$. Find $E[X]$, $\text{Var}(X)$, and $E[X^2]$ using $K_X(t) = \ln M_X(t)$."
                steps={[
                  "Write CGF: $K_X(t) = \\ln M_X(t) = -5 \\ln(1 - 3t)$.",
                  "First derivative: $K_X'(t) = \\frac{15}{1 - 3t} \\implies E[X] = K_X'(0) = 15$.",
                  "Second derivative: $K_X''(t) = \\frac{45}{(1 - 3t)^2} \\implies \\text{Var}(X) = K_X''(0) = 45$.",
                  "Recover $E[X^2] = \\text{Var}(X) + (E[X])^2 = 45 + 15^2 = 270$.",
                ]}
                result="$E[X] = 15$, $\text{Var}(X) = 45$, and $E[X^2] = 270$."
                check="Differentiating $K_X(t)$ avoids product/chain rule algebra on $(1-3t)^{-5}$."
              />
              <WorkedExample
                number={3}
                title="MGF of a linear transformation Y = 2X − 4"
                setup="Suppose $X$ has MGF $M_X(t) = \frac{1}{3} + \frac{2}{3}e^t$. Find the MGF of $Y = 2X - 4$ and determine the possible values and probabilities of $Y$."
                steps={[
                  "Apply $M_{aX+b}(t) = e^{bt}M_X(at)$ with $a=2, b=-4$: $M_Y(t) = e^{-4t}\\left(\\frac{1}{3} + \\frac{2}{3}e^{2t}\\right) = \\frac{1}{3}e^{-4t} + \\frac{2}{3}e^{-2t}$.",
                  "Since $M_Y(t) = \\sum_y P(Y=y)e^{ty}$, read off the support and probabilities: $P(Y = -4) = 1/3$ and $P(Y = -2) = 2/3$.",
                ]}
                result="$M_Y(t) = \frac{1}{3}e^{-4t} + \frac{2}{3}e^{-2t}$, so $Y=-4$ w.p. $1/3$ and $Y=-2$ w.p. $2/3$."
                check="Since $X \in \{0,1\}$, $Y = 2X-4 \in \{-4, -2\}$ with the same probabilities."
              />
            </>
          )}
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-ps-a-mgf-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Moment Generating Functions"
            scoreId="score-ps-a-mgf-checkpoint"
            section="ps-a-mgf-checkpoint"
            questions={PS_A_MGF_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-a-mgf-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Part 2</h2>
            <p>Part 2 covers the standard MGF catalog, cumulant generating functions, reproductive closure of sums, and the 20-question checkpoint (80% to unlock completion).</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
