import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_C_CLT_QUIZ } from "../../data/psNewModulesQuizzes";

export default function CentralLimitTheoremGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Central Limit Theorem & Sampling Distributions (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-sub">Probability &amp; Statistics</div>
          <div className="sb-title">CLT &amp; Sampling Laws</div>
        </div>
        <div className="sb-group">Part {part} Sections</div>
        <a className="sb-link" href="#ps-c-clt-theory">1 · Theory &amp; Laws</a>
        <a className="sb-link" href="#ps-c-clt-method">2 · Working Method</a>
        <a className="sb-link" href="#ps-c-clt-examples">3 · Worked Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-c-clt-checkpoint">4 · Topic Quiz (20 Q)</a>}
        <Link className="sb-link" to="/probability-statistics/overview">← All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Multivariate &amp; Stochastic Models</div>
          <h1 className="ch-title">Central Limit Theorem &amp; Sampling Distributions</h1>
          <p className="ch-sub">
            {advanced
              ? "Exact normal sampling distributions (Chi-square, Student's t, Fisher's F), Slutsky's theorem, and the univariate Delta Method"
              : "Mean and standard error of the sample mean, Lindeberg–Lévy CLT, and De Moivre–Laplace continuity correction"}
          </p>
          <p>Curriculum: University Probability &amp; Statistics · Part {part} of 2</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-c-clt-theory">
          <div className="sec-badge">Section {part}.1 · Core Theory</div>
          <h2 className="sec-title">
            {advanced
              ? "Exact Normal Sampling Distributions (χ², t, F) & The Delta Method"
              : "Sampling Distribution of the Mean & The Central Limit Theorem"}
          </h2>

          {advanced ? (
            <>
              <TheoryBox title="Exact Sampling Distributions under Normality (χ², Student's t, Fisher's F)">
                <p>
                  {"When $X_1, \\dots, X_n \\stackrel{\\text{iid}}{\\sim} \\mathcal{N}(\\mu, \\sigma^2)$, Cochran's Theorem states that the sample mean $\\bar{X}$ and sample variance $S^2 = \\frac{1}{n-1}\\sum_{i=1}^n (X_i - \\bar{X})^2$ are independent, with $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$ and $T = \\frac{\\bar{X}-\\mu}{S/\\sqrt{n}} \\sim t_{n-1}$. Moreover, if $U \\sim \\chi^2_{d_1}$ and $V \\sim \\chi^2_{d_2}$ are independent, then $F = \\frac{U/d_1}{V/d_2} \\sim F_{d_1, d_2}$."}
                </p>
              </TheoryBox>

              <TheoremBox title="Slutsky's Theorem & The Univariate Delta Method">
                <p>
                  {"By Slutsky's Theorem, replacing $\\sigma$ with a consistent estimator $S \\xrightarrow{p} \\sigma$ preserves asymptotic normality: $\\frac{\\bar{X}-\\mu}{S/\\sqrt{n}} \\xrightarrow{d} \\mathcal{N}(0,1)$. If $\\sqrt{n}(\\hat{\\theta}_n - \\theta) \\xrightarrow{d} \\mathcal{N}(0, \\sigma^2)$ and $g'(\\theta) \\ne 0$, the Delta Method yields $\\sqrt{n}(g(\\hat{\\theta}_n) - g(\\theta)) \\xrightarrow{d} \\mathcal{N}(0, [g'(\\theta)]^2\\sigma^2)$, so $\\operatorname{SE}(g(\\hat{\\theta}_n)) \\approx |g'(\\hat{\\theta}_n)|\\operatorname{SE}(\\hat{\\theta}_n)$."}
                </p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="Mean and Standard Error of the Sample Mean">
                <p>
                  {"For any i.i.d. sample $X_1, \\dots, X_n$ with mean $\\mu$ and finite variance $\\sigma^2$, the sample sum $S_n = \\sum_{i=1}^n X_i$ has $E[S_n] = n\\mu$ and $\\operatorname{Var}(S_n) = n\\sigma^2$, while the sample mean $\\bar{X}_n = S_n / n$ has $E[\\bar{X}_n] = \\mu$ and standard error $\\operatorname{SD}(\\bar{X}_n) = \\sigma / \\sqrt{n}$. Quadrupling $n$ halves the standard error."}
                </p>
              </TheoryBox>

              <TheoremBox title="Lindeberg–Lévy Central Limit Theorem & Continuity Correction">
                <p>
                  {"As $n \\to \\infty$, the standardized sample mean converges in distribution to a standard normal: $Z_n = \\frac{\\bar{X}_n - \\mu}{\\sigma/\\sqrt{n}} = \\frac{S_n - n\\mu}{\\sqrt{n}\\sigma} \\xrightarrow{d} \\mathcal{N}(0,1)$. When approximating integer-valued sums such as $S_n \\sim \\operatorname{Binomial}(n,p)$, expanding each integer $k$ to $[k-0.5, k+0.5]$ gives the De Moivre–Laplace continuity correction."}
                </p>
              </TheoremBox>
            </>
          )}
        </section>

        <section className="section" id="ps-c-clt-method">
          <div className="sec-badge">Section {part}.2 · Step-by-Step Method</div>
          <h2 className="sec-title">Working procedure</h2>
          <ProcedureBox
            title={advanced ? "Applying Exact Sampling Laws & The Delta Method" : "Normal Approximations via the Central Limit Theorem"}
            steps={
              advanced
                ? [
                    "For normal samples with unknown $\\sigma$, use the Student's $t$ pivot $T = (\\bar{X}-\\mu)/(S/\\sqrt{n}) \\sim t_{n-1}$.",
                    "For inference on sample variance $S^2$, form the chi-square pivot $W = (n-1)S^2/\\sigma^2 \\sim \\chi^2_{n-1}$.",
                    "For a smooth nonlinear function $g(\\bar{X})$, differentiate $g$ at $\\mu$ and verify $g'(\\mu) \\ne 0$.",
                    "Compute the Delta Method standard error $\\operatorname{SE}(g(\\bar{X})) = |g'(\\bar{X})| \\cdot (S/\\sqrt{n})$.",
                  ]
                : [
                    "Identify whether the target event involves the sample mean $\\bar{X} \\approx \\mathcal{N}(\\mu, \\sigma^2/n)$ or total $S_n \\approx \\mathcal{N}(n\\mu, n\\sigma^2)$.",
                    "Compute $\\operatorname{SE}(\\bar{X}) = \\sigma/\\sqrt{n}$ or $\\operatorname{SD}(S_n) = \\sqrt{n}\\sigma$.",
                    "For discrete counts, apply the $\\pm 0.5$ continuity correction to the interval endpoints before standardizing.",
                    "Convert the threshold to $z = (\\text{value} - \\text{mean})/\\text{SD}$ and evaluate with the standard normal CDF $\\Phi(z)$.",
                  ]
            }
          />
        </section>

        <section className="section" id="ps-c-clt-examples">
          <div className="sec-badge">Section {part}.3 · Concrete Numerical Examples</div>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={1}
                title="Chi-Square Sampling Probability for Sample Variance"
                setup={"A random sample of $n = 16$ resistors from a normal process with true variance $\\sigma^2 = 10$ yields sample variance $S^2$. Find $P(S^2 > 16.66)$ given $\\chi^2_{15, 0.95} = 24.996$."}
                steps={[
                  "With $df = n - 1 = 15$, form the pivot $W = \\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{15}$.",
                  "Substitute $S^2 = 16.66$: $W = \\frac{15(16.66)}{10} = 24.99 \\approx 25.0$.",
                  "Read the upper-tail probability: $P(\\chi^2_{15} > 24.996) = 1 - 0.95 = 0.05$.",
                ]}
                result={"$P(S^2 > 16.66) = 0.05$."}
                check={"Here $E[S^2] = 10$ and $\\operatorname{SD}(S^2) = \\sqrt{2(100)/15} \\approx 3.65$."}
              />

              <WorkedExample
                number={2}
                title="Delta Method Standard Error for Log-Odds"
                setup={"In $n = 400$ patients, $\\hat{p} = 0.20$ experienced side effects. Use the Delta Method to find the SE and $95\\%$ CI for the log-odds $\\eta = \\ln\\big(\\frac{p}{1-p}\\big)$."}
                steps={[
                  "Compute $\\operatorname{SE}(\\hat{p}) = \\sqrt{\\frac{0.20(0.80)}{400}} = 0.02$.",
                  "Differentiate $g(p) = \\ln(p/(1-p))$: $g'(p) = \\frac{1}{p(1-p)}$.",
                  "Evaluate $\\operatorname{SE}(\\hat{\\eta}) = \\frac{1}{0.20(0.80)} \\times 0.02 = 6.25 \\times 0.02 = 0.125$.",
                  "With $\\hat{\\eta} = \\ln(0.25) \\approx -1.386$, the $95\\%$ CI is $-1.386 \\pm 1.96(0.125) = [-1.631, -1.141]$.",
                ]}
                result={"$\\operatorname{SE}(\\hat{\\eta}) = 0.125$ and $95\\%$ CI $[-1.631, -1.141]$."}
                check={"Matches $\\sqrt{\\frac{1}{80} + \\frac{1}{320}} = \\sqrt{\\frac{5}{320}} = \\frac{1}{8} = 0.125$."}
              />

              <WorkedExample
                number={3}
                title="Delta Method for the Exponential Rate Estimator"
                setup={"For $n = 100$ i.i.d. $\\operatorname{Exponential}(\\lambda)$ observations with sample mean $\\bar{X} = 2.5$, find the point estimate and Delta Method SE of $\\hat{\\lambda} = 1/\\bar{X}$."}
                steps={[
                  "For $\\operatorname{Exp}(\\lambda)$, $\\mu = 1/\\lambda$ and $\\sigma = 1/\\lambda$, so $\\operatorname{SE}(\\bar{X}) = \\mu / \\sqrt{n}$.",
                  "For $g(\\mu) = 1/\\mu$, $|g'(\\mu)| = 1/\\mu^2 = \\lambda^2$, giving $\\operatorname{SE}(\\hat{\\lambda}) \\approx \\lambda^2 (\\frac{1}{\\lambda\\sqrt{n}}) = \\frac{\\lambda}{\\sqrt{n}}$.",
                  "At $\\bar{x} = 2.5$, $\\hat{\\lambda} = 1/2.5 = 0.40$ and $\\operatorname{SE}(\\hat{\\lambda}) = 0.40 / \\sqrt{100} = 0.04$.",
                ]}
                result={"$\\hat{\\lambda} = 0.40$ with $\\operatorname{SE}(\\hat{\\lambda}) = 0.04$."}
                check={"Matches the inverse Fisher information standard error $\\hat{\\lambda}/\\sqrt{n}$."}
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="CLT Probability for a Sample Mean from a Skewed Population"
                setup={"Server response times have mean $\\mu = 50\\text{ ms}$ and SD $\\sigma = 20\\text{ ms}$. For $n = 64$ requests, approximate $P(\\bar{X} > 55\\text{ ms})$."}
                steps={[
                  "Compute $\\operatorname{SE}(\\bar{X}) = \\frac{20}{\\sqrt{64}} = 2.5\\text{ ms}$.",
                  "Standardize $55\\text{ ms}$: $z = \\frac{55 - 50}{2.5} = 2.00$.",
                  "From the standard normal table, $P(Z > 2.00) = 1 - 0.9772 = 0.0228$.",
                ]}
                result={"$P(\\bar{X} > 55\\text{ ms}) \\approx 0.0228$."}
                check={"Averaging $64$ requests shrinks the standard deviation by a factor of $8$."}
              />

              <WorkedExample
                number={2}
                title="CLT for Total Weight Capacity (Elevator Overload Risk)"
                setup={"Passenger weights have mean $\\mu = 78\\text{ kg}$ and SD $\\sigma = 15\\text{ kg}$. Find the probability that $n = 25$ passengers exceed a total weight limit of $2{,}100\\text{ kg}$."}
                steps={[
                  "For the sum $S_{25}$, $E[S_{25}] = 25(78) = 1{,}950\\text{ kg}$ and $\\operatorname{SD}(S_{25}) = \\sqrt{25}(15) = 75\\text{ kg}$.",
                  "Standardize $2{,}100$: $z = \\frac{2{,}100 - 1{,}950}{75} = 2.00$.",
                  "Evaluate $P(Z > 2.00) = 0.0228$.",
                ]}
                result={"$P(S_{25} > 2{,}100\\text{ kg}) \\approx 0.0228$."}
                check={"Equivalently, $\\bar{X} > 84\\text{ kg}$ has $z = (84-78)/(15/5) = 2.00$."}
              />

              <WorkedExample
                number={3}
                title="Normal Approximation to Binomial with Continuity Correction"
                setup={"A fair coin ($p = 0.5$) is flipped $n = 100$ times. Approximate $P(45 \\le S_{100} \\le 55)$ using the continuity correction."}
                steps={[
                  "Compute Binomial mean $\\mu = 50$ and SD $\\sigma = \\sqrt{100(0.25)} = 5$.",
                  "Widen $[45, 55]$ by $\\pm 0.5$ to $[44.5, 55.5]$.",
                  "Standardize endpoints: $z = \\frac{44.5 - 50}{5} = -1.10$ and $z = \\frac{55.5 - 50}{5} = +1.10$.",
                  "Compute $P(-1.10 \\le Z \\le 1.10) = 2\\Phi(1.10) - 1 = 2(0.8643) - 1 = 0.7286$.",
                ]}
                result={"$P(45 \\le S_{100} \\le 55) \\approx 0.7286$ (exact Binomial is $0.72875$)."}
                check={"Without the $\\pm 0.5$ correction, $z = \\pm 1.00$ would give $0.6827$, underestimating by $0.046$."}
              />
            </>
          )}
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-ps-c-clt-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Central Limit Theorem & Sampling Distributions"
            scoreId="score-ps-c-clt-checkpoint"
            section="ps-c-clt-checkpoint"
            questions={PS_C_CLT_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-c-clt-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Part 2</h2>
            <p>Part 2 covers exact normal sampling distributions ($\chi^2$, Student's $t$, Fisher's $F$), Slutsky's theorem, the Delta Method, and the 20-question topic checkpoint.</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
