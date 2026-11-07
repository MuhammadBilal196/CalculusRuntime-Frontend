import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_C_JOINT_QUIZ } from "../../data/psNewModulesQuizzes";

export default function JointMarginalDistributionsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Joint & Marginal Distributions (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-sub">Probability &amp; Statistics</div>
          <div className="sb-title">Joint &amp; Marginal Laws</div>
        </div>
        <div className="sb-group">Part {part} Sections</div>
        <a className="sb-link" href="#ps-c-joint-theory">1 · Theory &amp; Laws</a>
        <a className="sb-link" href="#ps-c-joint-method">2 · Working Method</a>
        <a className="sb-link" href="#ps-c-joint-examples">3 · Worked Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-c-joint-checkpoint">4 · Topic Quiz (20 Q)</a>}
        <Link className="sb-link" to="/probability-statistics/overview">← All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Multivariate &amp; Stochastic Models</div>
          <h1 className="ch-title">Joint &amp; Marginal Distributions</h1>
          <p className="ch-sub">
            {advanced
              ? "Covariance, Pearson correlation, variance of linear combinations, and laws of total expectation and variance"
              : "Joint PMFs and PDFs, marginalization over 2D regions, conditional distributions, and factorization for independence"}
          </p>
          <p>Curriculum: University Probability &amp; Statistics · Part {part} of 2</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-c-joint-theory">
          <div className="sec-badge">Section {part}.1 · Core Theory</div>
          <h2 className="sec-title">
            {advanced
              ? "Covariance, Correlation & Laws of Total Expectation / Variance"
              : "Joint, Marginal & Conditional Distributions"}
          </h2>

          {advanced ? (
            <>
              <TheoryBox title="Covariance and Pearson Correlation">
                <p>
                  {"When two random variables $X$ and $Y$ are defined on the same probability space, their linear co-movement is measured by the covariance $\\operatorname{Cov}(X,Y) = E[(X - \\mu_X)(Y - \\mu_Y)] = E[XY] - E[X]E[Y]$. Dividing by the product of standard deviations yields the dimensionless Pearson correlation $\\rho_{X,Y} = \\frac{\\operatorname{Cov}(X,Y)}{\\sigma_X \\sigma_Y} \\in [-1, 1]$. Independence implies $\\operatorname{Cov}(X,Y) = 0$, though zero covariance alone does not guarantee independence."}
                </p>
              </TheoryBox>

              <TheoremBox title="Variance of Linear Combinations & Iterated Laws">
                <p>
                  {"For constants $a, b \\in \\mathbb{R}$, $\\operatorname{Var}(aX + bY) = a^2\\operatorname{Var}(X) + b^2\\operatorname{Var}(Y) + 2ab\\operatorname{Cov}(X,Y)$. Furthermore, the Law of Total Expectation (Adam's Law) and Law of Total Variance (Eve's Law) decompose unconditional moments via conditioning: $E[Y] = E[E[Y \\mid X]]$ and $\\operatorname{Var}(Y) = E[\\operatorname{Var}(Y \\mid X)] + \\operatorname{Var}(E[Y \\mid X])$."}
                </p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="Joint and Marginal PMFs / PDFs">
                <p>
                  {"For discrete $(X,Y)$, the joint PMF $p_{X,Y}(x,y) = P(X=x, Y=y)$ sums to $1$. For continuous $(X,Y)$, the joint PDF $f_{X,Y}(x,y) \\ge 0$ satisfies $P((X,Y)\\in A) = \\iint_A f_{X,Y}(x,y)\\,dx\\,dy$. Marginal distributions integrate or sum out the nuisance variable over its entire support: $f_X(x) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x,y)\\,dy$ and $f_Y(y) = \\int_{-\\infty}^{\\infty} f_{X,Y}(x,y)\\,dx$."}
                </p>
              </TheoryBox>

              <TheoremBox title="Conditional Distributions & Factorization Criterion for Independence">
                <p>
                  {"Whenever $f_X(x) > 0$, the conditional density of $Y$ given $X=x$ is $f_{Y\\mid X}(y\\mid x) = \\frac{f_{X,Y}(x,y)}{f_X(x)}$. Random variables $X$ and $Y$ are statistically independent if and only if their joint support is a Cartesian product $S_X \\times S_Y$ and $f_{X,Y}(x,y) = f_X(x)f_Y(y)$ everywhere."}
                </p>
              </TheoremBox>
            </>
          )}
        </section>

        <section className="section" id="ps-c-joint-method">
          <div className="sec-badge">Section {part}.2 · Step-by-Step Method</div>
          <h2 className="sec-title">Working procedure</h2>
          <ProcedureBox
            title={advanced ? "Computing Covariance & Iterated Expectations" : "Analyzing Joint, Marginal & Conditional Laws"}
            steps={
              advanced
                ? [
                    "Compute marginal expectations $E[X]$ and $E[Y]$, then evaluate the product moment $E[XY]$ over the joint distribution.",
                    "Form $\\operatorname{Cov}(X,Y) = E[XY] - E[X]E[Y]$ and normalize by $\\sigma_X \\sigma_Y$ to get $\\rho_{X,Y}$.",
                    "For linear combinations $W = aX + bY$, include the cross-term $2ab\\operatorname{Cov}(X,Y)$ in $\\operatorname{Var}(W)$.",
                    "In two-stage models where $Y \\mid X$ has a known law, write $E[Y \\mid X]$ and $\\operatorname{Var}(Y \\mid X)$ as functions of $X$.",
                    "Apply $E[Y] = E[E[Y \\mid X]]$ and $\\operatorname{Var}(Y) = E[\\operatorname{Var}(Y \\mid X)] + \\operatorname{Var}(E[Y \\mid X])$.",
                  ]
                : [
                    "Sketch the 2D support region $S = \\{(x,y) : f(x,y) > 0\\}$; non-rectangular supports immediately imply $X$ and $Y$ are dependent.",
                    "Normalize the joint PMF/PDF by setting the double sum or double integral over $S$ equal to $1$.",
                    "To obtain $f_X(x)$, hold $x$ fixed and integrate $f(x,y)$ with respect to $y$ between the boundary curves of $S$ at that $x$.",
                    "Form the conditional density $f_{Y\\mid X}(y\\mid x) = f(x,y)/f_X(x)$ and state its $x$-dependent support.",
                    "Integrate $f_{Y\\mid X}(y\\mid x)$ over $y \\in [a,b]$ to evaluate conditional probabilities $P(a \\le Y \\le b \\mid X=x)$.",
                  ]
            }
          />
        </section>

        <section className="section" id="ps-c-joint-examples">
          <div className="sec-badge">Section {part}.3 · Concrete Numerical Examples</div>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={1}
                title="Covariance and Correlation from a Discrete Joint Table"
                setup={"Let $(X,Y) \\in \\{0,1\\}^2$ have joint probabilities $p(0,0) = 0.30$, $p(0,1) = 0.10$, $p(1,0) = 0.20$, and $p(1,1) = 0.40$. Find $\\operatorname{Cov}(X,Y)$ and $\\rho_{X,Y}$."}
                steps={[
                  "Compute marginal Bernoulli probabilities: $P(X=1) = 0.20 + 0.40 = 0.60$ and $P(Y=1) = 0.10 + 0.40 = 0.50$.",
                  "Find marginal means and variances: $E[X]=0.60$, $\\operatorname{Var}(X)=0.60(0.40)=0.24$, and $E[Y]=0.50$, $\\operatorname{Var}(Y)=0.50(0.50)=0.25$.",
                  "Since $XY=1$ only when $X=1$ and $Y=1$, $E[XY] = p(1,1) = 0.40$.",
                  "Compute $\\operatorname{Cov}(X,Y) = 0.40 - (0.60)(0.50) = 0.10$ and $\\rho_{X,Y} = \\frac{0.10}{\\sqrt{0.24 \\times 0.25}} = \\frac{0.10}{\\sqrt{0.06}} \\approx 0.4082$.",
                ]}
                result={"$\\operatorname{Cov}(X,Y) = 0.10$ and $\\rho_{X,Y} = 1/\\sqrt{6} \\approx 0.4082$."}
                check={"Under independence $p(1,1)$ would be $0.60 \\times 0.50 = 0.30$; the $+0.10$ excess probability equals $\\operatorname{Cov}(X,Y)$."}
              />

              <WorkedExample
                number={2}
                title="Portfolio Variance of Two Correlated Assets"
                setup={"Asset $X$ has mean return $8\\%$ and SD $\\sigma_X = 10\\%$. Asset $Y$ has mean return $12\\%$ and SD $\\sigma_Y = 20\\%$. Their correlation is $\\rho = -0.25$. Find the mean and SD of $W = 0.6X + 0.4Y$."}
                steps={[
                  "Expected return by linearity: $E[W] = 0.6(8\\%) + 0.4(12\\%) = 9.6\\%$.",
                  "Convert correlation to covariance: $\\operatorname{Cov}(X,Y) = (-0.25)(10)(20) = -50$.",
                  "Apply the linear combination variance formula: $\\operatorname{Var}(W) = (0.6)^2(10^2) + (0.4)^2(20^2) + 2(0.6)(0.4)(-50) = 36 + 64 - 24 = 76$.",
                  "Take the square root: $\\sigma_W = \\sqrt{76} \\approx 8.72\\%$.",
                ]}
                result={"Expected return $E[W] = 9.6\\%$ and standard deviation $\\sigma_W \\approx 8.72\\%$."}
                check={"Negative correlation reduces portfolio risk below the safer asset's standalone volatility ($8.72\\% < 10\\%$)."}
              />

              <WorkedExample
                number={3}
                title="Compound Poisson Claims via Laws of Total Expectation & Variance"
                setup={"Daily claim count is $N \\sim \\operatorname{Poisson}(4)$. Given $N=n$, total cost is $Y = \\sum_{i=1}^n C_i$ where each claim $C_i$ has mean $500$ and SD $200$ independently. Find $E[Y]$ and $\\operatorname{Var}(Y)$."}
                steps={[
                  "Condition on $N$: $E[Y \\mid N] = 500N$ and $\\operatorname{Var}(Y \\mid N) = 200^2 N = 40{,}000N$.",
                  "By Total Expectation with $E[N]=4$: $E[Y] = E[500N] = 500(4) = 2{,}000$.",
                  "Compute the two terms of Total Variance using $E[N]=\\operatorname{Var}(N)=4$: $E[\\operatorname{Var}(Y\\mid N)] = 40{,}000(4) = 160{,}000$ and $\\operatorname{Var}(E[Y\\mid N]) = 500^2(4) = 1{,}000{,}000$.",
                  "Add the components: $\\operatorname{Var}(Y) = 160{,}000 + 1{,}000{,}000 = 1{,}160{,}000$ ($\\operatorname{SD} \\approx 1{,}077.03$).",
                ]}
                result={"$E[Y] = 2{,}000$ and $\\operatorname{Var}(Y) = 1{,}160{,}000$ ($\\operatorname{SD}(Y) \\approx 1{,}077.03$)."}
                check={"Matches the compound Poisson identity $\\operatorname{Var}(Y) = \\lambda E[C^2] = 4(500^2 + 200^2) = 1{,}160{,}000$."}
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="Normalizing a Joint Density on a Triangular Support"
                setup={"Let $(X,Y)$ have joint PDF $f(x,y) = cxy$ on the triangle $0 \\le y \\le x \\le 1$, and $0$ otherwise. Find $c$, $f_X(x)$, and $f_Y(y)$."}
                steps={[
                  "Integrate over $0 \\le x \\le 1$ and $0 \\le y \\le x$: $\\int_0^1 (\\int_0^x cxy\\,dy)\\,dx = \\frac{c}{2}\\int_0^1 x^3\\,dx = \\frac{c}{8} = 1 \\implies c = 8$.",
                  "For fixed $x \\in [0,1]$, integrate $y \\in [0,x]$: $f_X(x) = \\int_0^x 8xy\\,dy = 4x^3$.",
                  "For fixed $y \\in [0,1]$, integrate $x \\in [y,1]$: $f_Y(y) = \\int_y^1 8xy\\,dx = 4y(1 - y^2)$.",
                ]}
                result={"$c = 8$, $f_X(x) = 4x^3$ on $[0,1]$, and $f_Y(y) = 4y(1-y^2)$ on $[0,1]$."}
                check={"Both marginals integrate to $1$: $\\int_0^1 4x^3\\,dx = 1$ and $\\int_0^1 (4y - 4y^3)\\,dy = 2 - 1 = 1$."}
              />

              <WorkedExample
                number={2}
                title="Conditional Density and Conditional Probability"
                setup={"Using $f(x,y) = 8xy$ on $0 \\le y \\le x \\le 1$ from Example 1, find $f_{Y\\mid X}(y\\mid x)$, $E[Y\\mid X=x]$, and $P(Y \\le 0.3 \\mid X = 0.6)$."}
                steps={[
                  "Divide the joint PDF by $f_X(x) = 4x^3$: $f_{Y\\mid X}(y\\mid x) = \\frac{8xy}{4x^3} = \\frac{2y}{x^2}$ for $0 \\le y \\le x$.",
                  "Compute the conditional mean: $E[Y\\mid X=x] = \\int_0^x y \\cdot \\frac{2y}{x^2}\\,dy = \\frac{2}{3}x$.",
                  "At $x = 0.6$, evaluate $P(Y \\le 0.3 \\mid X=0.6) = \\int_0^{0.3} \\frac{2y}{0.36}\\,dy = \\frac{0.09}{0.36} = 0.25$.",
                ]}
                result={"$f_{Y\\mid X}(y\\mid x) = 2y/x^2$ on $[0,x]$, $E[Y\\mid X=x] = \\frac{2}{3}x$, and $P(Y \\le 0.3 \\mid X=0.6) = 0.25$."}
                check={"Iterated expectation gives $E[Y] = E[\\frac{2}{3}X] = \\frac{2}{3}\\int_0^1 4x^4\\,dx = \\frac{8}{15}$, matching $\\int_0^1 4y^2(1-y^2)\\,dy = \\frac{8}{15}$."}
              />

              <WorkedExample
                number={3}
                title="Testing Independence via Support and Factorization"
                setup={"Test whether $(X,Y)$ are independent for (a) $f(x,y) = 6e^{-2x-3y}$ on $x>0, y>0$, and (b) $f(x,y) = 2$ on $x \\ge 0, y \\ge 0, x+y \\le 1$."}
                steps={[
                  "In (a), the support $(0,\\infty) \\times (0,\\infty)$ is a Cartesian product and $f(x,y) = (2e^{-2x})(3e^{-3y}) = f_X(x)f_Y(y)$, so $X \\sim \\operatorname{Exp}(2)$ and $Y \\sim \\operatorname{Exp}(3)$ are independent.",
                  "In (b), the support is the triangle $x+y \\le 1$, which is not a Cartesian product.",
                  "Specifically, $f_X(0.8) > 0$ and $f_Y(0.8) > 0$, but $f(0.8, 0.8) = 0 \\ne f_X(0.8)f_Y(0.8)$, so $X$ and $Y$ are dependent.",
                ]}
                result={"(a) Independent; (b) Dependent because the triangular support violates rectangular factorization."}
                check={"In (b), knowing $X = 0.8$ forces $Y \\le 0.2$, proving strong negative dependence."}
              />
            </>
          )}
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-ps-c-joint-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Joint & Marginal Distributions"
            scoreId="score-ps-c-joint-checkpoint"
            section="ps-c-joint-checkpoint"
            questions={PS_C_JOINT_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-c-joint-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Part 2</h2>
            <p>Part 2 covers covariance, Pearson correlation, linear combinations of correlated variables, the laws of total expectation and variance, and the 20-question topic checkpoint.</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
