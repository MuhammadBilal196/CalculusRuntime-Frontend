import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_A_BAYES_QUIZ } from "../../data/psNewModulesQuizzes";

export default function BayesianInferenceGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Bayesian Inference (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-sub">Probability &amp; Statistics</div>
          <div className="sb-title">Bayesian Inference</div>
        </div>
        <div className="sb-group">Part {part} · Bayesian Updating</div>
        <a className="sb-link" href="#ps-a-bayes-theory">Theory &amp; Conjugate Priors</a>
        <a className="sb-link" href="#ps-a-bayes-method">Updating Procedure</a>
        <a className="sb-link" href="#ps-a-bayes-examples">Worked Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-a-bayes-checkpoint">Checkpoint Quiz</a>}
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Estimation &amp; Inference Theory · Part {part} of 2</div>
          <h1 className="ch-title">Bayesian Inference</h1>
          <p className="ch-sub">
            {advanced
              ? "Normal-Normal updating, MAP vs. posterior mean, credible intervals, and posterior predictive distributions"
              : "Bayes' rule for continuous parameters, Beta-Binomial & Gamma-Poisson conjugate families, and sequential updating"}
          </p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-a-bayes-theory">
          <div className="sec-badge">Section {part}.1 · Formal Foundations</div>
          <h2 className="sec-title">
            {advanced ? "Posterior summaries, credible intervals & prediction" : "Priors, likelihoods & conjugate families"}
          </h2>
          {advanced ? (
            <>
              <TheoryBox title="Normal–Normal conjugate updating (precision addition)">
                <p>
                  {"Suppose $X_1,\\dots,X_n \\mid \\theta \\stackrel{\\text{iid}}{\\sim} \\mathcal{N}(\\theta,\\sigma^2)$ with known variance $\\sigma^2$, and prior $\\theta \\sim \\mathcal{N}(\\mu_0,\\tau_0^2)$. Define prior precision $\\lambda_0 = 1/\\tau_0^2$ and data precision $\\lambda_d = n/\\sigma^2$. Then $\\theta \\mid x_{1:n} \\sim \\mathcal{N}(\\mu_n, \\tau_n^2)$ where $\\tau_n^{-2} = \\lambda_0 + \\lambda_d$ and $\\mu_n = \\frac{\\lambda_0 \\mu_0 + \\lambda_d \\bar{x}}{\\lambda_0 + \\lambda_d}$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Point estimators, credible intervals, and posterior predictive law">
                <p>
                  {"Under squared-error loss $L(\\theta,\\hat{\\theta})=(\\theta-\\hat{\\theta})^2$, the Bayes optimal estimator is the posterior mean $E[\\theta\\mid x]$. Under absolute-error loss it is the posterior median, and under $0$-$1$ loss it is the Maximum A Posteriori (MAP) mode $\\arg\\max_\\theta \\pi(\\theta\\mid x)$. A $100(1-\\alpha)\\%$ credible interval $[a,b]$ satisfies $P(a \\le \\theta \\le b \\mid x) = 1-\\alpha$ directly on $\\theta$. The posterior predictive density for a future observation $\\tilde{x}$ is $p(\\tilde{x}\\mid x)=\\int f(\\tilde{x}\\mid\\theta)\\pi(\\theta\\mid x)\\,d\\theta$."}
                </p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="Bayes' Theorem for parameters">
                <p>
                  {"In Bayesian inference, the unknown parameter $\\theta$ is treated as a random variable with prior density $\\pi(\\theta)$. Given observed data $x$ with likelihood $L(\\theta;x)=f(x\\mid\\theta)$, the posterior density is $\\pi(\\theta\\mid x) = \\frac{f(x\\mid\\theta)\\pi(\\theta)}{\\int f(x\\mid\\theta')\\pi(\\theta')\\,d\\theta'} \\propto L(\\theta;x)\\,\\pi(\\theta)$. Constants that do not depend on $\\theta$ can be dropped until normalization."}
                </p>
              </TheoryBox>
              <TheoremBox title="Beta–Binomial and Gamma–Poisson conjugacy">
                <p>
                  {"1) Beta–Binomial: If $p \\sim \\text{Beta}(\\alpha,\\beta)$ with prior mean $\\frac{\\alpha}{\\alpha+\\beta}$ and $X\\mid p \\sim \\text{Binomial}(n,p)$ observes $k$ successes, the posterior is $p\\mid X=k \\sim \\text{Beta}(\\alpha+k,\\, \\beta+n-k)$. 2) Gamma–Poisson: If $\\lambda \\sim \\text{Gamma}(\\alpha,\\beta)$ (rate $\\beta$) and $X_1,\\dots,X_n \\stackrel{\\text{iid}}{\\sim} \\text{Poisson}(\\lambda)$ with sum $S=\\sum X_i$, then $\\lambda\\mid x \\sim \\text{Gamma}(\\alpha+S,\\, \\beta+n)$."}
                </p>
              </TheoremBox>
            </>
          )}
        </section>

        <section className="section" id="ps-a-bayes-method">
          <div className="sec-badge">Section {part}.2 · Step-by-Step Method</div>
          <h2 className="sec-title">Working procedure</h2>
          <ProcedureBox
            title={advanced ? "Computing posterior summaries and credible intervals" : "Conjugate kernel recognition workflow"}
            steps={
              advanced
                ? [
                    "Convert prior and sampling variances into precisions $\\lambda_0 = 1/\\tau_0^2$ and $\\lambda_d = n/\\sigma^2$.",
                    "Add precisions $\\lambda_n = \\lambda_0 + \\lambda_d$ to obtain posterior variance $\\tau_n^2 = 1/\\lambda_n$.",
                    "Compute the precision-weighted posterior mean $\\mu_n = (\\lambda_0\\mu_0 + \\lambda_d\\bar{x})/\\lambda_n$.",
                    "For a $95\\%$ equal-tailed Normal credible interval, form $\\mu_n \\pm 1.96\\,\\tau_n$.",
                    "For a new observation $\\tilde{X} \\sim \\mathcal{N}(\\theta,\\sigma^2)$, add variances: $\\tilde{X}\\mid x \\sim \\mathcal{N}(\\mu_n,\\, \\tau_n^2 + \\sigma^2)$.",
                  ]
                : [
                    "Write the prior kernel $\\pi(\\theta)$ and sampling likelihood $f(x\\mid\\theta)$, dropping multiplicative constants free of $\\theta$.",
                    "Multiply $\\pi(\\theta)f(x\\mid\\theta)$ and combine powers/exponents of $\\theta$.",
                    "Match the resulting expression to a known distribution family (Beta, Gamma, or Normal) to read off updated hyperparameters.",
                    "Compute the posterior mean as a convex combination of the prior mean and the sample MLE.",
                  ]
            }
          />
        </section>

        <section className="section" id="ps-a-bayes-examples">
          <div className="sec-badge">Section {part}.3 · Certificate Worked Examples</div>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={1}
                title="Normal–Normal posterior mean and 95% credible interval"
                setup="A sensor measures a true voltage $\theta$ with known noise $\sigma = 4\text{ V}$. The prior is $\theta \sim \mathcal{N}(100, 2^2)$. We observe $n = 16$ readings with sample mean $\bar{x} = 106\text{ V}$. Find the posterior distribution and a $95\%$ credible interval for $\theta$."
                steps={[
                  "Compute prior precision: $\\lambda_0 = 1/\\tau_0^2 = 1/4 = 0.25$.",
                  "Compute data precision: $\\lambda_d = n/\\sigma^2 = 16/16 = 1.00$.",
                  "Posterior precision is $\\lambda_n = 0.25 + 1.00 = 1.25$, so posterior variance is $\\tau_n^2 = 1/1.25 = 0.80$ ($\\tau_n = \\sqrt{0.80} \\approx 0.8944$).",
                  "Posterior mean: $\\mu_n = \\frac{0.25(100) + 1.00(106)}{1.25} = \\frac{131}{1.25} = 104.8\\text{ V}$.",
                  "The $95\\%$ credible interval is $104.8 \\pm 1.96(0.8944) = 104.8 \\pm 1.753 = [103.05,\\, 106.55]\\text{ V}$.",
                ]}
                result="$\theta \mid x \sim \mathcal{N}(104.8,\, 0.80)$ with $95\%$ credible interval $[103.05, 106.55]\text{ V}$."
                check="Since $\lambda_d = 4\lambda_0$, $\mu_n$ lies $4/5$ of the way from $100$ to $106$: $100 + 0.8(6) = 104.8$."
                mistake="Do not average standard deviations; always add precisions $\tau_n^{-2} = \tau_0^{-2} + n/\sigma^2$."
              />
              <WorkedExample
                number={2}
                title="MAP vs. posterior mean for a skewed Beta posterior"
                setup="After observing $k = 2$ successes in $n = 10$ trials with a $\text{Beta}(2, 2)$ prior, the posterior is $p \mid x \sim \text{Beta}(4, 10)$. Compare the posterior mean and MAP estimate."
                steps={[
                  "With $\\alpha' = 4$ and $\\beta' = 10$, the posterior mean is $E[p\\mid x] = \\frac{\\alpha'}{\\alpha'+\\beta'} = \\frac{4}{14} \\approx 0.2857$.",
                  "For $\\alpha',\\beta' > 1$, the Beta mode (MAP) is $\\hat{p}_{\\text{MAP}} = \\frac{\\alpha'-1}{\\alpha'+\\beta'-2} = \\frac{3}{12} = 0.25$.",
                ]}
                result="Posterior mean $= 2/7 \approx 0.2857$; MAP estimate $= 0.25$."
                check="Because $\beta' > \alpha'$, the Beta$(4,10)$ density is right-skewed, so mean $>$ mode ($0.2857 > 0.25$)."
              />
              <WorkedExample
                number={3}
                title="Posterior predictive variance for a future Normal observation"
                setup="Using the posterior $\theta \mid x \sim \mathcal{N}(104.8, 0.80)$ and measurement noise $\sigma^2 = 16$ from Example 1, find the predictive distribution of a single new reading $\tilde{X}$."
                steps={[
                  "Write $\\tilde{X} = \\theta + \\varepsilon$ where $\\theta \\mid x \\sim \\mathcal{N}(104.8, 0.80)$ and $\\varepsilon \\sim \\mathcal{N}(0, 16)$ independently.",
                  "Predictive mean: $E[\\tilde{X}\\mid x] = 104.8$.",
                  "Predictive variance combines parameter uncertainty and sampling noise: $\\text{Var}(\\tilde{X}\\mid x) = 0.80 + 16 = 16.80$.",
                ]}
                result="$\tilde{X} \mid x \sim \mathcal{N}(104.8,\, 16.80)$ with predictive SD $\sqrt{16.80} \approx 4.099\text{ V}$."
                check="Predictive variance must always exceed $\sigma^2 = 16$ because $\theta$ is not known exactly."
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="Beta–Binomial updating for conversion rate"
                setup="A click-through rate $p$ has prior $p \sim \text{Beta}(3, 7)$. In a test of $n = 40$ visitors, $k = 12$ click. Find the posterior distribution, posterior mean, and posterior variance."
                steps={[
                  "Identify prior parameters $\\alpha = 3, \\beta = 7$ (prior mean $3/10 = 0.30$) and data $k = 12$, $n - k = 28$.",
                  "Update hyperparameters: $\\alpha' = 3 + 12 = 15$ and $\\beta' = 7 + 28 = 35$.",
                  "Posterior mean: $E[p\\mid x] = \\frac{15}{15 + 35} = \\frac{15}{50} = 0.30$.",
                  "Posterior variance: $\\text{Var}(p\\mid x) = \\frac{15 \\times 35}{50^2 \\times 51} = \\frac{525}{127500} \\approx 0.00412$.",
                ]}
                result="$p \mid x \sim \text{Beta}(15, 35)$ with mean $0.30$ and SD $\approx 0.0642$."
                check="Both the prior mean ($3/10$) and sample proportion ($12/40$) equal $0.30$, so the posterior mean must also be $0.30$."
                mistake="Remember that the second Beta parameter adds failures $(n-k)$, not total trials $n$."
              />
              <WorkedExample
                number={2}
                title="Gamma–Poisson updating for server arrival rate"
                setup="Server error counts per hour follow $\text{Poisson}(\lambda)$ with prior $\lambda \sim \text{Gamma}(\alpha=4, \beta=2)$ (mean $\alpha/\beta = 2$). Over $n = 5$ hours we observe counts $3, 1, 4, 2, 5$. Find the posterior distribution and posterior mean of $\lambda$."
                steps={[
                  "Sum the observed counts: $S = 3 + 1 + 4 + 2 + 5 = 15$ over $n = 5$ hours.",
                  "Update shape and rate: $\\alpha' = \\alpha + S = 4 + 15 = 19$ and $\\beta' = \\beta + n = 2 + 5 = 7$.",
                  "Posterior mean: $E[\\lambda\\mid x] = \\frac{\\alpha'}{\\beta'} = \\frac{19}{7} \\approx 2.714$ errors/hour.",
                ]}
                result="$\lambda \mid x \sim \text{Gamma}(19, 7)$ with posterior mean $19/7 \approx 2.714$."
                check="The posterior mean $19/7$ lies strictly between the prior mean $4/2 = 2.0$ and the sample mean $15/5 = 3.0$."
              />
              <WorkedExample
                number={3}
                title="Sequential Bayesian updating equals batch updating"
                setup="Starting from a uniform prior $p \sim \text{Beta}(1,1)$, batch A has $3$ successes in $5$ trials and batch B has $4$ successes in $5$ trials. Verify that updating in two steps matches updating on all $10$ trials at once."
                steps={[
                  "After batch A ($k_1=3, n_1-k_1=2$): $p \\mid A \\sim \\text{Beta}(1+3, 1+2) = \\text{Beta}(4, 3)$.",
                  "Using $\\text{Beta}(4,3)$ as the prior for batch B ($k_2=4, n_2-k_2=1$): $p \\mid A,B \\sim \\text{Beta}(4+4, 3+1) = \\text{Beta}(8, 4)$.",
                  "Combined batch ($k=7, n-k=3$) from $\\text{Beta}(1,1)$ gives $\\text{Beta}(1+7, 1+3) = \\text{Beta}(8, 4)$.",
                ]}
                result="Both sequential and combined updates yield $\text{Beta}(8, 4)$ with posterior mean $8/12 = 2/3$."
                check="Independent likelihoods multiply: $L(p;A)L(p;B) = L(p;A,B)$, so order of conditioning never changes the final posterior."
              />
            </>
          )}
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-ps-a-bayes-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Bayesian Inference"
            scoreId="score-ps-a-bayes-checkpoint"
            section="ps-a-bayes-checkpoint"
            questions={PS_A_BAYES_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-a-bayes-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Part 2</h2>
            <p>Part 2 covers Normal–Normal precision updating, MAP vs. posterior mean under different loss functions, credible intervals, and the 20-question checkpoint (80% to unlock completion).</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
