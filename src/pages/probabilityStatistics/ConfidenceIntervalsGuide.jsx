import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_A_CI_QUIZ } from "../../data/psNewModulesQuizzes";

export default function ConfidenceIntervalsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Confidence Intervals (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-sub">Probability &amp; Statistics</div>
          <div className="sb-title">Confidence Intervals</div>
        </div>
        <div className="sb-group">Part {part} · Interval Estimation</div>
        <a className="sb-link" href="#ps-a-ci-theory">Pivotal Quantities &amp; Coverage</a>
        <a className="sb-link" href="#ps-a-ci-method">Interval Construction</a>
        <a className="sb-link" href="#ps-a-ci-examples">Worked Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-a-ci-checkpoint">Checkpoint Quiz</a>}
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Estimation &amp; Inference Theory · Part {part} of 2</div>
          <h1 className="ch-title">Confidence Intervals</h1>
          <p className="ch-sub">
            {advanced
              ? "Proportions (Wald vs. Wilson), chi-square variance intervals, sample-size planning, and test duality"
              : "Frequentist coverage interpretation, pivotal quantities, z-intervals, and Student's t-intervals"}
          </p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-a-ci-theory">
          <div className="sec-badge">Section {part}.1 · Formal Foundations</div>
          <h2 className="sec-title">
            {advanced ? "Proportions, variance intervals & hypothesis test duality" : "Coverage probability, pivots, z and t intervals"}
          </h2>
          {advanced ? (
            <>
              <TheoryBox title="Confidence intervals for proportions and normal variance">
                <p>
                  {"1) Binomial Proportion: Given $\\hat{p}=X/n$, the Wald $100(1-\\alpha)\\%$ interval is $\\hat{p} \\pm z_{\\alpha/2}\\sqrt{\\hat{p}(1-\\hat{p})/n}$. To plan sample size for margin of error $\\le E$, use $n = \\lceil z_{\\alpha/2}^2 p^*(1-p^*)/E^2 \\rceil$ (with conservative $p^*=0.5$ when unknown). 2) Normal Variance: Using the pivot $\\frac{(n-1)S^2}{\\sigma^2} \\sim \\chi^2_{n-1}$, the exact $100(1-\\alpha)\\%$ CI for $\\sigma^2$ is $\\left[\\frac{(n-1)S^2}{\\chi^2_{\\alpha/2,\\,n-1}},\\; \\frac{(n-1)S^2}{\\chi^2_{1-\\alpha/2,\\,n-1}}\\right]$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Exact duality between confidence intervals and hypothesis tests">
                <p>
                  {"A $100(1-\\alpha)\\%$ confidence set $C(X)$ is dual to a size-$\\alpha$ two-sided test of $H_0:\\theta = \\theta_0$: we fail to reject $H_0$ at level $\\alpha$ if and only if $\\theta_0 \\in C(X)$. Consequently, any value outside a $95\\%$ CI would be rejected by the corresponding two-sided test at $\\alpha = 0.05$."}
                </p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="Frequentist coverage and pivotal quantities">
                <p>
                  {"A random interval $[L(X), U(X)]$ has confidence level $1-\\alpha$ if $P_\\theta(L(X) \\le \\theta \\le U(X)) = 1-\\alpha$ for all $\\theta$. Once data are observed, $\\theta$ is fixed and the realized interval either covers $\\theta$ or does not; $1-\\alpha$ is the long-run proportion of repeated samples whose intervals cover $\\theta$. Intervals are built from a pivotal quantity $Q(X,\\theta)$ whose distribution does not depend on unknown parameters."}
                </p>
              </TheoryBox>
              <TheoremBox title="Z-interval (known σ) vs. Student's t-interval (unknown σ)">
                <p>
                  {"For $X_1,\\dots,X_n \\stackrel{\\text{iid}}{\\sim} \\mathcal{N}(\\mu,\\sigma^2)$: if $\\sigma$ is known, $Z = \\frac{\\bar{X}-\\mu}{\\sigma/\\sqrt{n}} \\sim \\mathcal{N}(0,1)$ yields $\\bar{X} \\pm z_{\\alpha/2}\\frac{\\sigma}{\\sqrt{n}}$. If $\\sigma$ is unknown and estimated by $S$, $T = \\frac{\\bar{X}-\\mu}{S/\\sqrt{n}} \\sim t_{n-1}$ yields $\\bar{X} \\pm t_{\\alpha/2,\\,n-1}\\frac{S}{\\sqrt{n}}$."}
                </p>
              </TheoremBox>
            </>
          )}
        </section>

        <section className="section" id="ps-a-ci-method">
          <div className="sec-badge">Section {part}.2 · Step-by-Step Method</div>
          <h2 className="sec-title">Working procedure</h2>
          <ProcedureBox
            title={advanced ? "Sample-size planning and variance interval workflow" : "Constructing a confidence interval for a mean"}
            steps={
              advanced
                ? [
                    "For margin of error $E$ on a mean, compute $n = \\lceil (z_{\\alpha/2}\\sigma / E)^2 \\rceil$; for a proportion, use $n = \\lceil z_{\\alpha/2}^2 p^*(1-p^*)/E^2 \\rceil$.",
                    "Always round $n$ UP to the next integer so the margin of error does not exceed $E$.",
                    "For $\\sigma^2$, find upper and lower chi-square quantiles $\\chi^2_{\\alpha/2,\\,df}$ and $\\chi^2_{1-\\alpha/2,\\,df}$ with $df = n-1$ and divide $(n-1)S^2$ by each.",
                  ]
                : [
                    "Identify the target parameter $\\mu$, confidence level $1-\\alpha$, and whether $\\sigma$ is known or estimated by $s$.",
                    "Select the critical value: $z_{\\alpha/2}$ if $\\sigma$ is known, or $t_{\\alpha/2,\\,n-1}$ with $df = n-1$ if $\\sigma$ is unknown.",
                    "Compute the standard error $\\text{SE} = \\sigma/\\sqrt{n}$ or $s/\\sqrt{n}$ and margin of error $\\text{ME} = \\text{crit} \\times \\text{SE}$.",
                    "Report $[\\bar{x} - \\text{ME},\\, \\bar{x} + \\text{ME}]$ and interpret in context.",
                  ]
            }
          />
        </section>

        <section className="section" id="ps-a-ci-examples">
          <div className="sec-badge">Section {part}.3 · Certificate Worked Examples</div>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={1}
                title="Conservative sample size for a political poll"
                setup="How many voters $n$ must be sampled so a $95\%$ confidence interval for support proportion $p$ has margin of error at most $E = 0.03$ ($\pm 3\%$) with no prior estimate of $p$?"
                steps={[
                  "With $95\\%$ confidence, $z_{0.025} = 1.96$. Use worst-case $p^* = 0.5$ since $p(1-p) \\le 0.25$.",
                  "Compute $n = \\frac{(1.96)^2 (0.5)(0.5)}{(0.03)^2} = \\frac{3.8416 \\times 0.25}{0.0009} = \\frac{0.9604}{0.0009} \\approx 1067.11$.",
                  "Round up to the next whole person: $n = 1068$.",
                ]}
                result="$n = 1068$ voters."
                check="At $n=1068$, $\text{ME} = 1.96\sqrt{0.25/1068} = 0.029987 \le 0.03$."
                mistake="Never round sample size down ($1067$ gives $\text{ME} = 0.030001 > 0.03$)."
              />
              <WorkedExample
                number={2}
                title="Chi-square 95% confidence interval for normal variance σ²"
                setup="A sample of $n = 10$ precision resistors has sample variance $s^2 = 4.5\,\Omega^2$. Using $\chi^2_{0.975, 9} = 2.700$ and $\chi^2_{0.025, 9} = 19.023$, find the $95\%$ CI for $\sigma^2$ and $\sigma$."
                steps={[
                  "Compute $(n-1)s^2 = 9 \\times 4.5 = 40.5$ with $df = 9$.",
                  "Lower bound for $\\sigma^2$: $40.5 / 19.023 \\approx 2.129\\,\\Omega^2$.",
                  "Upper bound for $\\sigma^2$: $40.5 / 2.700 = 15.000\\,\\Omega^2$.",
                  "Take square roots for $\\sigma$: $[\\sqrt{2.129},\\, \\sqrt{15.000}] = [1.46,\\, 3.87]\\,\\Omega$.",
                ]}
                result="$95\%$ CI for $\sigma^2$ is $[2.13, 15.00]\,\Omega^2$; for $\sigma$ it is $[1.46, 3.87]\,\Omega$."
                check="The larger $\chi^2$ quantile goes in the denominator of the lower bound, and $s^2 = 4.5 \in [2.13, 15.00]$."
              />
              <WorkedExample
                number={3}
                title="Using CI–test duality to decide a two-sided hypothesis test"
                setup="A $95\%$ confidence interval for mean treatment difference $\mu_1 - \mu_2$ is $[1.4, 5.8]\text{ mmHg}$. Without computing a $t$-statistic, state the conclusion of testing $H_0: \mu_1 - \mu_2 = 0$ vs. $H_1: \mu_1 - \mu_2 \ne 0$ at $\alpha = 0.05$."
                steps={[
                  "By CI–test duality, the $95\\%$ CI contains all null values $\\Delta_0$ that are not rejected at $\\alpha = 0.05$ (two-sided).",
                  "Because $\\Delta_0 = 0 \\notin [1.4, 5.8]$, we reject $H_0$ at $\\alpha = 0.05$ and conclude $p < 0.05$.",
                ]}
                result="Reject $H_0: \mu_1 - \mu_2 = 0$ at $\alpha = 0.05$ since $0 \notin [1.4, 5.8]$."
                check="Both endpoints are positive, so the entire plausible range lies above $0$."
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="95% z-interval with known population standard deviation"
                setup="A filling machine has known standard deviation $\sigma = 12\text{ mL}$. A random sample of $n = 36$ bottles gives $\bar{x} = 503\text{ mL}$. Construct the $95\%$ confidence interval for $\mu$."
                steps={[
                  "Compute standard error: $\\text{SE} = \\sigma/\\sqrt{n} = 12 / \\sqrt{36} = 2.0\\text{ mL}$.",
                  "For $95\\%$ confidence, $z_{0.025} = 1.96$, so $\\text{ME} = 1.96 \\times 2.0 = 3.92\\text{ mL}$.",
                  "Form endpoints: $503 \\pm 3.92 = [499.08,\\, 506.92]\\text{ mL}$.",
                ]}
                result="$[499.08, 506.92]\text{ mL}$."
                check="Interval width is $2 \times 3.92 = 7.84\text{ mL}$ centered at $\bar{x}=503$."
              />
              <WorkedExample
                number={2}
                title="95% Student's t-interval with unknown σ"
                setup="A sample of $n = 16$ battery lifetimes has $\bar{x} = 42.0\text{ hr}$ and sample SD $s = 6.0\text{ hr}$. Given $t_{0.025, 15} = 2.131$, find the $95\%$ confidence interval for $\mu$."
                steps={[
                  "Degrees of freedom: $df = n - 1 = 15$, critical value $t_{0.025,15} = 2.131$.",
                  "Standard error: $\\text{SE} = s/\\sqrt{n} = 6.0 / 4 = 1.5\\text{ hr}$.",
                  "Margin of error: $\\text{ME} = 2.131 \\times 1.5 = 3.1965 \\approx 3.20\\text{ hr}$.",
                  "Interval: $42.0 \\pm 3.20 = [38.80,\\, 45.20]\\text{ hr}$.",
                ]}
                result="$[38.80, 45.20]\text{ hr}$."
                check="Because $t_{0.025,15} = 2.131 > 1.96$, the $t$-interval is wider than a $z$-interval to account for estimating $\sigma$."
                mistake="Do not use $z=1.96$ when $\sigma$ is estimated from a small sample $s$."
              />
              <WorkedExample
                number={3}
                title="Effect of quadrupling sample size on interval width"
                setup="A $99\%$ z-interval based on $n = 25$ observations has width $W = 8.0$. What sample size $n'$ is required to cut the width to $W' = 2.0$ at the same confidence level?"
                steps={[
                  "Interval width $W = 2 z_{\\alpha/2}\\sigma / \\sqrt{n}$ scales as $1/\\sqrt{n}$.",
                  "To reduce width by a factor of $8.0 / 2.0 = 4$, $\\sqrt{n'}$ must increase by a factor of $4$.",
                  "Thus $n' = 4^2 \\times n = 16 \\times 25 = 400$.",
                ]}
                result="$n' = 400$ observations."
                check="$\sqrt{400}/\sqrt{25} = 20/5 = 4$, so width shrinks from $8.0$ to $8.0/4 = 2.0$."
              />
            </>
          )}
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-ps-a-ci-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Confidence Intervals"
            scoreId="score-ps-a-ci-checkpoint"
            section="ps-a-ci-checkpoint"
            questions={PS_A_CI_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-a-ci-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Part 2</h2>
            <p>Part 2 covers binomial proportion intervals, sample-size planning, chi-square intervals for $\sigma^2$, CI–test duality, and the 20-question checkpoint (80% to unlock completion).</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
