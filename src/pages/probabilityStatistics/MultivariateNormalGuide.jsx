import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_C_MVN_QUIZ } from "../../data/psNewModulesQuizzes";

export default function MultivariateNormalGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Multivariate Normal Distribution (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-sub">Probability &amp; Statistics</div>
          <div className="sb-title">Multivariate Normal</div>
        </div>
        <div className="sb-group">Part {part} Sections</div>
        <a className="sb-link" href="#ps-c-mvn-theory">1 · Theory &amp; Laws</a>
        <a className="sb-link" href="#ps-c-mvn-method">2 · Working Method</a>
        <a className="sb-link" href="#ps-c-mvn-examples">3 · Worked Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-c-mvn-checkpoint">4 · Topic Quiz (20 Q)</a>}
        <Link className="sb-link" to="/probability-statistics/overview">← All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Multivariate &amp; Stochastic Models</div>
          <h1 className="ch-title">Multivariate Normal Distribution</h1>
          <p className="ch-sub">
            {advanced
              ? "Partitioned Gaussian conditioning, Schur-complement covariance, equivalence of zero covariance and independence, and precision matrices"
              : "Joint Gaussian density, Mahalanobis distance, affine transformation closure, and marginal subvectors"}
          </p>
          <p>Curriculum: University Probability &amp; Statistics · Part {part} of 2</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-c-mvn-theory">
          <div className="sec-badge">Section {part}.1 · Core Theory</div>
          <h2 className="sec-title">
            {advanced
              ? "Conditional Gaussian Laws, Schur Complements & Precision Matrices"
              : "Joint Gaussian Density, Mahalanobis Distance & Affine Closure"}
          </h2>

          {advanced ? (
            <>
              <TheoryBox title="Partitioned Gaussian Vectors and Conditional Distributions">
                <p>
                  {"Partition $X = (X_1, X_2)^T \\sim \\mathcal{N}_d(\\mu, \\Sigma)$ into blocks with mean $(\\mu_1, \\mu_2)^T$ and covariance blocks $\\Sigma_{11}, \\Sigma_{12}, \\Sigma_{21}, \\Sigma_{22}$. Given $X_2 = x_2$, the conditional distribution is normal: $X_1 \\mid (X_2=x_2) \\sim \\mathcal{N}(\\mu_{1\\mid 2}, \\Sigma_{1\\mid 2})$ with conditional mean $\\mu_{1\\mid 2} = \\mu_1 + \\Sigma_{12}\\Sigma_{22}^{-1}(x_2 - \\mu_2)$ and Schur-complement covariance $\\Sigma_{1\\mid 2} = \\Sigma_{11} - \\Sigma_{12}\\Sigma_{22}^{-1}\\Sigma_{21}$. In 2D with correlation $\\rho$, $E[Y\\mid X=x] = \\mu_Y + \\rho\\frac{\\sigma_Y}{\\sigma_X}(x - \\mu_X)$ and $\\operatorname{Var}(Y\\mid X=x) = \\sigma_Y^2(1 - \\rho^2)$."}
                </p>
              </TheoryBox>

              <TheoremBox title="Uncorrelated Implies Independent & Precision Matrix Structure">
                <p>
                  {"For a jointly normal vector $X \\sim \\mathcal{N}_d(\\mu, \\Sigma)$, subvectors $X_1$ and $X_2$ are independent if and only if $\\Sigma_{12} = 0$. Furthermore, let $\\Omega = \\Sigma^{-1}$ be the precision matrix; then $X_i$ and $X_j$ are conditionally independent given all other variables $X_{-ij}$ if and only if $\\Omega_{ij} = 0$."}
                </p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="Multivariate Normal Density and Mahalanobis Distance">
                <p>
                  {"A random vector $X \\in \\mathbb{R}^d$ is multivariate normal $X \\sim \\mathcal{N}_d(\\mu, \\Sigma)$ if every linear combination $a^T X$ is univariate normal. When $\\Sigma$ is positive-definite ($|\\Sigma| > 0$), $X$ has density $f_X(x) = (2\\pi)^{-d/2}|\\Sigma|^{-1/2}\\exp\\big(-\\frac{1}{2}(x-\\mu)^T\\Sigma^{-1}(x-\\mu)\\big)$. The quadratic form $D_M^2(x) = (x-\\mu)^T\\Sigma^{-1}(x-\\mu)$ is the squared Mahalanobis distance and satisfies $D_M^2(X) \\sim \\chi^2_d$."}
                </p>
              </TheoryBox>

              <TheoremBox title="Affine Closure & Marginal Extraction">
                <p>
                  {"If $X \\sim \\mathcal{N}_d(\\mu, \\Sigma)$, then for any matrix $A \\in \\mathbb{R}^{k\\times d}$ and vector $b \\in \\mathbb{R}^k$, the affine transformation $Y = AX + b$ is multivariate normal: $Y \\sim \\mathcal{N}_k(A\\mu + b,\\, A\\Sigma A^T)$. In particular, any subset of coordinates $X_S$ is marginally normal with mean $\\mu_S$ and covariance submatrix $\\Sigma_{SS}$."}
                </p>
              </TheoremBox>
            </>
          )}
        </section>

        <section className="section" id="ps-c-mvn-method">
          <div className="sec-badge">Section {part}.2 · Step-by-Step Method</div>
          <h2 className="sec-title">Working procedure</h2>
          <ProcedureBox
            title={advanced ? "Conditioning & Independence in Gaussian Vectors" : "Working with Marginal & Affine Gaussian Transformations"}
            steps={
              advanced
                ? [
                    "Partition the vector into target coordinates $X_1$ and conditioning coordinates $X_2 = x_2$.",
                    "Extract $\\mu_1, \\mu_2$ and covariance blocks $\\Sigma_{11}, \\Sigma_{12}, \\Sigma_{21}, \\Sigma_{22}$.",
                    "Compute the regression gain matrix $B = \\Sigma_{12}\\Sigma_{22}^{-1}$.",
                    "Evaluate $\\mu_{1\\mid 2} = \\mu_1 + B(x_2 - \\mu_2)$ and $\\Sigma_{1\\mid 2} = \\Sigma_{11} - B\\Sigma_{21}$ (which is constant in $x_2$).",
                    "Inspect zeros of $\\Sigma$ for marginal independence and zeros of $\\Omega = \\Sigma^{-1}$ for conditional independence.",
                  ]
                : [
                    "Read marginal means and variances directly from $\\mu$ and the diagonal entries of $\\Sigma$.",
                    "For a scalar linear combination $Y = a^T X + b$, compute $E[Y] = a^T\\mu + b$ and $\\operatorname{Var}(Y) = a^T\\Sigma a$.",
                    "For a vector transformation $Y = AX + b$, compute the transformed covariance matrix $A\\Sigma A^T$.",
                    "Verify valid covariance matrices by checking symmetry, positive variances, and $|\\Sigma| > 0$.",
                    "Compute $D_M^2(x) = (x-\\mu)^T\\Sigma^{-1}(x-\\mu)$ and compare with $\\chi^2_d$ quantiles for probability ellipses.",
                  ]
            }
          />
        </section>

        <section className="section" id="ps-c-mvn-examples">
          <div className="sec-badge">Section {part}.3 · Concrete Numerical Examples</div>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={1}
                title="Bivariate Normal Conditional Distribution and Probability"
                setup={"Let $(X_1, X_2)^T \\sim \\mathcal{N}_2$ with $\\mu = (10, 20)^T$ and $\\Sigma = \\begin{pmatrix} 4 & 3 \\\\ 3 & 9 \\end{pmatrix}$. Find the conditional distribution of $X_1$ given $X_2 = 26$, and compute $P(X_1 > 13.5 \\mid X_2 = 26)$."}
                steps={[
                  "Read blocks: $\\mu_1 = 10$, $\\mu_2 = 20$, $\\Sigma_{11} = 4$, $\\Sigma_{12} = 3$, $\\Sigma_{22} = 9$ (correlation $\\rho = 3/6 = 0.5$).",
                  "Compute conditional mean: $\\mu_{1\\mid 2} = 10 + \\frac{3}{9}(26 - 20) = 10 + 2 = 12$.",
                  "Compute conditional variance: $\\Sigma_{1\\mid 2} = 4 - \\frac{3^2}{9} = 3 \\implies \\sigma_{1\\mid 2} = \\sqrt{3} \\approx 1.732$.",
                  "Standardize $X_1 > 13.5$: $z = \\frac{13.5 - 12}{\\sqrt{3}} \\approx 0.866 \\implies P(Z > 0.866) \\approx 0.193$.",
                ]}
                result={"$X_1 \\mid (X_2 = 26) \\sim \\mathcal{N}(12, 3)$ and $P(X_1 > 13.5 \\mid X_2 = 26) \\approx 0.193$."}
                check={"Conditioning reduces the variance of $X_1$ by $1 - \\rho^2 = 1 - 0.25 = 0.75$, giving $4 \\times 0.75 = 3$."}
              />

              <WorkedExample
                number={2}
                title="Block Conditioning in a 3D Gaussian Vector"
                setup={"Let $(X_1, X_2, X_3)^T \\sim \\mathcal{N}_3(0, \\Sigma)$ with $\\Sigma = \\begin{pmatrix} 5 & 2 & 1 \\\\ 2 & 2 & 1 \\\\ 1 & 1 & 1 \\end{pmatrix}$. Find the conditional law of $X_1$ given $(X_2, X_3)^T = (3, 1)^T$."}
                steps={[
                  "Partition $\\Sigma_{11} = 5$, $\\Sigma_{12} = (2, 1)$, and $\\Sigma_{22} = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$ with $\\Sigma_{22}^{-1} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$.",
                  "Compute gain vector $B = \\Sigma_{12}\\Sigma_{22}^{-1} = (2, 1)\\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix} = (1, 0)$.",
                  "Conditional mean: $\\mu_{1\\mid 2,3} = (1, 0)(3, 1)^T = 3$.",
                  "Conditional variance: $\\Sigma_{1\\mid 2,3} = 5 - (1, 0)(2, 1)^T = 5 - 2 = 3$.",
                ]}
                result={"$X_1 \\mid (X_2 = 3, X_3 = 1) \\sim \\mathcal{N}(3, 3)$."}
                check={"The zero weight on $X_3$ shows $X_1 \\perp X_3 \\mid X_2$: once $X_2$ is known, $X_3$ adds no information about $X_1$."}
              />

              <WorkedExample
                number={3}
                title="Reading Conditional Independence from the Precision Matrix"
                setup={"A 3D zero-mean normal vector has precision matrix $\\Omega = \\Sigma^{-1} = \\begin{pmatrix} 2 & -1 & 0 \\\\ -1 & 2 & -1 \\\\ 0 & -1 & 2 \\end{pmatrix}$. Identify which pair is conditionally independent and find $X_1 \\mid (X_2 = x_2, X_3 = x_3)$."}
                steps={[
                  "Since $\\Omega_{13} = \\Omega_{31} = 0$, $X_1$ and $X_3$ are conditionally independent given $X_2$ ($X_1 \\perp X_3 \\mid X_2$).",
                  "Use the precision conditional formula $X_1 \\mid X_{-1} \\sim \\mathcal{N}\\big(-\\sum_{j\\ne 1} \\frac{\\Omega_{1j}}{\\Omega_{11}}x_j,\\, \\frac{1}{\\Omega_{11}}\\big)$.",
                  "Substitute $\\Omega_{11} = 2$, $\\Omega_{12} = -1$, $\\Omega_{13} = 0$: $X_1 \\mid (x_2, x_3) \\sim \\mathcal{N}(0.5x_2,\\, 0.5)$.",
                ]}
                result={"$X_1 \\perp X_3 \\mid X_2$, and $X_1 \\mid (X_2=x_2, X_3=x_3) \\sim \\mathcal{N}(0.5x_2, 0.5)$."}
                check={"Even though $\\Sigma_{13} > 0$ marginally, the zero entry in $\\Omega_{13}$ immediately reveals conditional independence."}
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="Distribution of a Linear Contrast of Correlated Normal Variables"
                setup={"Let $X = (X_1, X_2)^T \\sim \\mathcal{N}_2$ with $\\mu = (5, 2)^T$ and $\\Sigma = \\begin{pmatrix} 9 & -2 \\\\ -2 & 4 \\end{pmatrix}$. Find the exact distribution of $Y = 2X_1 - 3X_2 + 1$."}
                steps={[
                  "Write $Y = a^T X + b$ with $a = (2, -3)^T$ and $b = 1$.",
                  "Compute the mean: $E[Y] = 2(5) - 3(2) + 1 = 5$.",
                  "Compute the variance: $a^T \\Sigma a = 4(9) + 9(4) + 2(2)(-3)(-2) = 36 + 36 + 24 = 96$.",
                  "By affine closure, $Y \\sim \\mathcal{N}(5, 96)$.",
                ]}
                result={"$Y = 2X_1 - 3X_2 + 1 \\sim \\mathcal{N}(5, 96)$ ($\\operatorname{SD} = \\sqrt{96} \\approx 9.798$)."}
                check={"Negative covariance ($-2$) increases the variance of the difference $2X_1 - 3X_2$ by $+24$."}
              />

              <WorkedExample
                number={2}
                title="Joint Distribution of Sum and Difference (Orthogonal Transformation)"
                setup={"Let $X_1, X_2 \\stackrel{\\text{iid}}{\\sim} \\mathcal{N}(\\mu, \\sigma^2)$. Find the joint distribution of $U = X_1 + X_2$ and $V = X_1 - X_2$."}
                steps={[
                  "Write $(U, V)^T = AX$ with $A = \\begin{pmatrix} 1 & 1 \\\\ 1 & -1 \\end{pmatrix}$ and $\\Sigma_X = \\sigma^2 I_2$.",
                  "Compute the mean vector $A(\\mu, \\mu)^T = (2\\mu, 0)^T$.",
                  "Compute the covariance matrix $A(\\sigma^2 I_2)A^T = \\begin{pmatrix} 2\\sigma^2 & 0 \\\\ 0 & 2\\sigma^2 \\end{pmatrix}$.",
                  "Because the off-diagonal covariance is $0$ and $(U,V)^T$ is jointly normal, $U$ and $V$ are independent.",
                ]}
                result={"$(U, V)^T \\sim \\mathcal{N}_2\\big((2\\mu, 0)^T, \\operatorname{diag}(2\\sigma^2, 2\\sigma^2)\\big)$, so $X_1+X_2$ and $X_1-X_2$ are independent."}
                check={"This orthogonal property underpins Cochran's Theorem and the independence of $\\bar{X}$ and $S^2$."}
              />

              <WorkedExample
                number={3}
                title="Mahalanobis Distance and 95% Probability Ellipse"
                setup={"Let $X \\sim \\mathcal{N}_2\\big((0,0)^T, \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}\\big)$. Compute the squared Mahalanobis distance of $x = (3, 0)^T$ and test whether it lies inside the $95\\%$ contour ($\\chi^2_{2, 0.95} = 5.991$)."}
                steps={[
                  "Invert $\\Sigma$: $|\\Sigma| = 4 - 1 = 3$, so $\\Sigma^{-1} = \\frac{1}{3}\\begin{pmatrix} 2 & -1 \\\\ -1 & 2 \\end{pmatrix}$.",
                  "Evaluate $D_M^2(3,0) = \\frac{1}{3}(3, 0)\\begin{pmatrix} 2 & -1 \\\\ -1 & 2 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 0 \\end{pmatrix} = \\frac{18}{3} = 6$.",
                  "Since $D_M^2 = 6 > 5.991$, the point $(3,0)^T$ lies just outside the $95\\%$ probability ellipse.",
                ]}
                result={"$D_M^2(3,0) = 6 > 5.991$, so $(3,0)^T$ falls just outside the $95\\%$ contour."}
                check={"Since $\\chi^2_2 = \\operatorname{Exp}(1/2)$, the exact tail area beyond $D_M^2 = 6$ is $e^{-6/2} = e^{-3} \\approx 0.0498 < 0.05$."}
              />
            </>
          )}
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-ps-c-mvn-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Multivariate Normal Distribution"
            scoreId="score-ps-c-mvn-checkpoint"
            section="ps-c-mvn-checkpoint"
            questions={PS_C_MVN_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-c-mvn-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Part 2</h2>
            <p>Part 2 covers partitioned conditional Gaussian distributions, Schur complements, precision matrices, conditional independence, and the 20-question topic checkpoint.</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
