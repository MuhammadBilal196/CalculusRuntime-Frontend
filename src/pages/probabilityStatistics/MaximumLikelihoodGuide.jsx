import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_A_MLE_QUIZ } from "../../data/psNewModulesQuizzes";

export default function MaximumLikelihoodGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Maximum Likelihood Estimation (MLE) (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-sub">Probability &amp; Statistics</div>
          <div className="sb-title">Maximum Likelihood Estimation</div>
        </div>
        <div className="sb-group">Part {part} · Likelihood Inference</div>
        <a className="sb-link" href="#ps-a-mle-theory">Likelihood &amp; Fisher Information</a>
        <a className="sb-link" href="#ps-a-mle-method">MLE Derivation Procedure</a>
        <a className="sb-link" href="#ps-a-mle-examples">Worked Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-a-mle-checkpoint">Checkpoint Quiz</a>}
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Estimation &amp; Inference Theory · Part {part} of 2</div>
          <h1 className="ch-title">Maximum Likelihood Estimation (MLE)</h1>
          <p className="ch-sub">
            {advanced
              ? "Functional invariance, Fisher information, Cramér–Rao Lower Bound (CRLB), and asymptotic normality"
              : "Likelihood and log-likelihood functions, score equations, second-derivative checks, and boundary MLEs"}
          </p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-a-mle-theory">
          <div className="sec-badge">Section {part}.1 · Formal Foundations</div>
          <h2 className="sec-title">
            {advanced ? "Invariance, Fisher information & Cramér–Rao bound" : "Likelihood, log-likelihood & score equations"}
          </h2>
          {advanced ? (
            <>
              <TheoryBox title="Invariance property and Fisher information">
                <p>
                  {"1) Functional Invariance: If $\\hat{\\theta}$ is the MLE of $\\theta$, then for any function $\\tau(\\theta)$, the MLE of $\\tau(\\theta)$ is $\\tau(\\hat{\\theta})$. 2) Fisher Information: For a single observation with log-density $\\ell(\\theta;X) = \\ln f(X;\\theta)$, the Fisher information is $I_1(\\theta) = E\\!\\left[\\left(\\frac{\\partial \\ell}{\\partial \\theta}\\right)^2\\right] = -E\\!\\left[\\frac{\\partial^2 \\ell}{\\partial \\theta^2}\\right]$ under regularity conditions. For an i.i.d. sample of size $n$, $I_n(\\theta) = n\\,I_1(\\theta)$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Cramér–Rao Lower Bound (CRLB) and asymptotic normality">
                <p>
                  {"For any unbiased estimator $T$ of $\\theta$, $\\text{Var}(T) \\ge \\frac{1}{I_n(\\theta)} = \\frac{1}{n I_1(\\theta)}$. An unbiased estimator that achieves this lower bound is efficient (UMVUE). Moreover, as $n \\to \\infty$, the MLE is asymptotically normal and efficient: $\\sqrt{n}(\\hat{\\theta}_n - \\theta) \\xrightarrow{d} \\mathcal{N}\\!\\left(0, I_1(\\theta)^{-1}\\right)$, giving approximate standard error $\\text{SE}(\\hat{\\theta}) \\approx 1/\\sqrt{I_n(\\hat{\\theta})}$."}
                </p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="Likelihood and log-likelihood">
                <p>
                  {"Given independent observations $x_1,\\dots,x_n$ from density or PMF $f(x;\\theta)$, the likelihood function is $L(\\theta) = \\prod_{i=1}^n f(x_i;\\theta)$ viewed as a function of $\\theta$. Because $\\ln(\cdot)$ is strictly increasing, maximizing $L(\\theta)$ is equivalent to maximizing the log-likelihood $\\ell(\\theta) = \\ln L(\\theta) = \\sum_{i=1}^n \\ln f(x_i;\\theta)$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Score equation and boundary maxima">
                <p>
                  {"On the interior of the parameter space $\\Theta$, a differentiable log-likelihood attains its maximum at a root of the score equation $U(\\theta) = \\frac{\\partial \\ell(\\theta)}{\\partial \\theta} = 0$ with negative curvature $\\frac{\\partial^2 \\ell(\\theta)}{\\partial \\theta^2} < 0$. When the support of $f(x;\\theta)$ depends on $\\theta$ (such as $\\text{Uniform}(0,\\theta)$), the derivative never vanishes and the MLE lies on the boundary of the support."}
                </p>
              </TheoremBox>
            </>
          )}
        </section>

        <section className="section" id="ps-a-mle-method">
          <div className="sec-badge">Section {part}.2 · Step-by-Step Method</div>
          <h2 className="sec-title">Working procedure</h2>
          <ProcedureBox
            title={advanced ? "Computing Fisher information, CRLB, and Wald SE" : "Finding and verifying the Maximum Likelihood Estimator"}
            steps={
              advanced
                ? [
                    "Write the single-observation log-likelihood $\\ell_1(\\theta;X) = \\ln f(X;\\theta)$.",
                    "Differentiate twice with respect to $\\theta$ to get $\\ell_1''(\\theta;X)$.",
                    "Take the negative expectation $I_1(\\theta) = -E[\\ell_1''(\\theta;X)]$ and multiply by $n$ to obtain $I_n(\\theta) = n I_1(\\theta)$.",
                    "Invert $I_n(\\theta)$ for the Cramér–Rao Lower Bound $\\text{CRLB} = 1/I_n(\\theta)$ and plug in $\\hat{\\theta}$ for $\\text{SE}(\\hat{\\theta}) = 1/\\sqrt{I_n(\\hat{\\theta})}$.",
                  ]
                : [
                    "Write the joint likelihood $L(\\theta) = \\prod_{i=1}^n f(x_i;\\theta)$ including indicator constraints if support depends on $\\theta$.",
                    "Take the natural logarithm $\\ell(\\theta) = \\sum_{i=1}^n \\ln f(x_i;\\theta)$.",
                    "Set the score $\\partial \\ell / \\partial \\theta = 0$ and solve for candidate $\\hat{\\theta}$ (or inspect monotonicity on boundary constraints).",
                    "Check $\\partial^2 \\ell / \\partial \\theta^2 \\big|_{\\hat{\\theta}} < 0$ to confirm a true maximum.",
                  ]
            }
          />
        </section>

        <section className="section" id="ps-a-mle-examples">
          <div className="sec-badge">Section {part}.3 · Certificate Worked Examples</div>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={1}
                title="Fisher information and CRLB for Poisson(λ)"
                setup="Let $X_1,\dots,X_n \stackrel{\text{iid}}{\sim} \text{Poisson}(\lambda)$. Find $I_n(\lambda)$, the Cramér–Rao Lower Bound for unbiased estimators of $\lambda$, and check whether $\hat{\lambda} = \bar{X}$ achieves it."
                steps={[
                  "For one observation, $f(x;\\lambda) = e^{-\\lambda}\\lambda^x / x!$, so $\\ell_1(\\lambda;X) = -\\lambda + X\\ln\\lambda - \\ln(X!)$.",
                  "Differentiate twice: $\\ell_1'(\\lambda) = -1 + X/\\lambda$ and $\\ell_1''(\\lambda) = -X/\\lambda^2$.",
                  "Compute $I_1(\\lambda) = -E[-X/\\lambda^2] = \\frac{E[X]}{\\lambda^2} = \\frac{\\lambda}{\\lambda^2} = \\frac{1}{\\lambda}$.",
                  "For $n$ i.i.d. observations, $I_n(\\lambda) = \\frac{n}{\\lambda}$ and $\\text{CRLB} = \\frac{\\lambda}{n}$.",
                  "Since $E[\\bar{X}] = \\lambda$ and $\\text{Var}(\\bar{X}) = \\lambda/n = \\text{CRLB}$, $\\bar{X}$ is an efficient UMVUE.",
                ]}
                result="$I_n(\lambda) = n/\lambda$, $\text{CRLB} = \lambda/n$, and $\hat{\lambda}=\bar{X}$ achieves the bound."
                check="Using the first-derivative form: $E[(\\ell_1')^2] = E[(X-\\lambda)^2]/\\lambda^2 = \\lambda/\\lambda^2 = 1/\\lambda$."
                mistake="Do not forget to multiply single-observation Fisher information $I_1(\theta)$ by $n$ for a sample of size $n$."
              />
              <WorkedExample
                number={2}
                title="MLE functional invariance for Exponential survival probability"
                setup="Component lifetimes follow $\text{Exp}(\lambda)$ with density $\lambda e^{-\lambda x}$. In $n=10$ tests, the total lifetime is $\sum x_i = 50\text{ hours}$. Find the MLE of the probability $S(4) = P(X > 4) = e^{-4\lambda}$."
                steps={[
                  "The MLE of the rate $\\lambda$ is $\\hat{\\lambda} = 1/\\bar{x} = 10/50 = 0.20\\text{ hr}^{-1}$.",
                  "By functional invariance, the MLE of $\\tau(\\lambda) = e^{-4\\lambda}$ is $\\tau(\\hat{\\lambda}) = e^{-4(0.20)} = e^{-0.8} \\approx 0.4493$.",
                ]}
                result="$\widehat{S(4)} = e^{-0.8} \approx 0.4493$."
                check="At $\hat{\lambda}=0.20$, the mean lifetime is $5\text{ hours}$, so surviving past $4\text{ hours}$ is slightly below $e^{-1}\approx 0.368$? No, $4 < 5 \implies e^{-0.8} \approx 0.449 > 0.368$."
              />
              <WorkedExample
                number={3}
                title="Asymptotic standard error and Wald CI for a Bernoulli proportion"
                setup="In $n = 100$ trials we observe $k = 60$ successes ($\hat{p} = 0.60$). Use Fisher information to find the asymptotic standard error $\text{SE}(\hat{p})$ and a $95\%$ Wald confidence interval."
                steps={[
                  "For $X \\sim \\text{Bernoulli}(p)$, $\\ell_1(p) = X\\ln p + (1-X)\\ln(1-p)$ and $\\ell_1''(p) = -\\frac{X}{p^2} - \\frac{1-X}{(1-p)^2}$.",
                  "Taking $-E[\\ell_1''(p)]$ gives $I_1(p) = \\frac{1}{p(1-p)}$ and $I_n(p) = \\frac{n}{p(1-p)}$.",
                  "Plug in $\\hat{p} = 0.60, n = 100$: $\\text{SE}(\\hat{p}) = \\sqrt{\\frac{\\hat{p}(1-\\hat{p})}{n}} = \\sqrt{\\frac{0.24}{100}} \\approx 0.04899$.",
                  "$95\\%$ Wald CI: $0.60 \\pm 1.96(0.04899) = [0.504,\\, 0.696]$.",
                ]}
                result="$\text{SE}(\hat{p}) \approx 0.0490$ and $95\%$ Wald CI is $[0.504, 0.696]$."
                check="Matches the standard binomial proportion SE formula $\sqrt{\hat{p}(1-\hat{p})/n}$."
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="MLE of rate λ for an Exponential sample"
                setup="Given $n = 5$ independent lifetimes $x = (2, 4, 3, 6, 5)$ from $f(x;\lambda) = \lambda e^{-\lambda x}$ ($\lambda > 0$), derive the MLE $\hat{\lambda}$ and evaluate it."
                steps={[
                  "Write the likelihood: $L(\\lambda) = \\prod_{i=1}^n \\lambda e^{-\\lambda x_i} = \\lambda^n \\exp\\!\\left(-\\lambda \\sum_{i=1}^n x_i\\right)$.",
                  "Log-likelihood: $\\ell(\\lambda) = n \\ln \\lambda - \\lambda \\sum_{i=1}^n x_i$.",
                  "Score equation: $\\frac{d\\ell}{d\\lambda} = \\frac{n}{\\lambda} - \\sum_{i=1}^n x_i = 0 \\implies \\hat{\\lambda} = \\frac{n}{\\sum x_i} = \\frac{1}{\\bar{x}}$.",
                  "Second derivative: $\\ell''(\\lambda) = -n/\\lambda^2 < 0$, confirming a strict global maximum.",
                  "With $\\sum x_i = 2+4+3+6+5 = 20$ and $n=5$, $\\hat{\\lambda} = 5/20 = 0.25$.",
                ]}
                result="$\hat{\lambda} = 1/\bar{x} = 0.25$."
                check="Since $E[X] = 1/\lambda$ and $\bar{x} = 4$, matching sample mean to population mean gives $\hat{\lambda} = 1/4 = 0.25$."
              />
              <WorkedExample
                number={2}
                title="Joint MLE of (μ, σ²) for a Normal sample (biased variance)"
                setup="For $x = (10, 12, 14, 16)$ from $\mathcal{N}(\mu, \sigma^2)$, compute the MLEs $\hat{\mu}$ and $\hat{\sigma}^2_{\text{MLE}}$ and compare $\hat{\sigma}^2_{\text{MLE}}$ with the unbiased sample variance $S^2$."
                steps={[
                  "From $\\ell(\\mu,\\sigma^2) = -\\frac{n}{2}\\ln(2\\pi\\sigma^2) - \\frac{1}{2\\sigma^2}\\sum (x_i-\\mu)^2$, setting $\\partial \\ell/\\partial \\mu = 0$ yields $\\hat{\\mu} = \\bar{x} = 13$.",
                  "Setting $\\partial \\ell/\\partial(\\sigma^2) = -\\frac{n}{2\\sigma^2} + \\frac{\\sum(x_i-\\hat{\\mu})^2}{2(\\sigma^2)^2} = 0$ gives $\\hat{\\sigma}^2_{\\text{MLE}} = \\frac{1}{n}\\sum_{i=1}^n (x_i - \\bar{x})^2$.",
                  "Compute $\\sum(x_i - 13)^2 = (-3)^2 + (-1)^2 + 1^2 + 3^2 = 20$.",
                  "Thus $\\hat{\\sigma}^2_{\\text{MLE}} = 20/4 = 5.0$, whereas unbiased $S^2 = 20/(4-1) = 6.67$.",
                ]}
                result="$\hat{\mu} = 13$ and $\hat{\sigma}^2_{\text{MLE}} = 5.0$ (dividing by $n=4$, not $n-1=3$)."
                check="$E[\hat{\sigma}^2_{\text{MLE}}] = \frac{n-1}{n}\sigma^2 = \frac{3}{4}\sigma^2$, which is biased downward in finite samples but asymptotically unbiased."
                mistake="The Normal variance MLE divides by $n$, whereas the unbiased sample variance $S^2$ divides by $n-1$."
              />
              <WorkedExample
                number={3}
                title="Boundary MLE for Uniform(0, θ)"
                setup="Observations $x = (1.8, 4.2, 3.1, 2.9)$ are drawn i.i.d. from $\text{Uniform}(0, \theta)$. Find the MLE $\hat{\theta}$."
                steps={[
                  "The joint density is $L(\\theta) = \\theta^{-n}$ if $\\theta \\ge \\max_i x_i = x_{(n)}$, and $L(\\theta) = 0$ if $\\theta < x_{(n)}$.",
                  "For $\\theta \\ge x_{(n)}$, $L(\\theta) = \\theta^{-n}$ is strictly decreasing because $L'(\\theta) = -n\\theta^{-(n+1)} < 0$.",
                  "Therefore $L(\\theta)$ is maximized at the smallest admissible boundary value $\\hat{\\theta} = x_{(n)} = \\max(1.8, 4.2, 3.1, 2.9) = 4.2$.",
                ]}
                result="$\hat{\theta} = X_{(n)} = 4.2$."
                check="Any $\theta < 4.2$ assigns probability $0$ to observing $x_2 = 4.2$, and any $\theta > 4.2$ reduces $\theta^{-4}$."
              />
            </>
          )}
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-ps-a-mle-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Maximum Likelihood Estimation (MLE)"
            scoreId="score-ps-a-mle-checkpoint"
            section="ps-a-mle-checkpoint"
            questions={PS_A_MLE_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-a-mle-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Part 2</h2>
            <p>Part 2 covers MLE invariance, Fisher information, the Cramér–Rao Lower Bound, asymptotic normality, and the 20-question checkpoint (80% to unlock completion).</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
