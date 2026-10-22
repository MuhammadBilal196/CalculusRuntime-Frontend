import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_R2_SPRT_QUIZ } from "../../data/psSequentialQuizzes";

export default function SequentialProbabilityRatioGuide() {
  const { saveQuizScore } = useProgress();
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Sequential Probability Ratio Tests"
    >
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Sequential and Multiple Decisions · Topic 1</div></div>
        <a className="sb-link" href="#ps-sd1-objectives">Objectives</a>
        <a className="sb-link" href="#ps-sd1-defs">Definitions</a>
        <a className="sb-link" href="#ps-sd1-derivation">Key results</a>
        <a className="sb-link" href="#ps-sd1-pitfalls">Limitations</a>
        <a className="sb-link" href="#ps-sd1-examples">Examples</a>
        <a className="sb-link" href="#quiz-ps-sd1-checkpoint">Quiz</a>
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>

      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Sequential and Multiple Decisions · Part 1 of 2</div>
          <h1 className="ch-title">Sequential Probability Ratio Tests</h1>
          <p className="ch-sub">Deciding between two simple hypotheses one observation at a time</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-sd1-objectives">
          <div className="sec-badge">Section 1</div>
          <h2 className="sec-title">Learning objectives and prerequisites</h2>
          <TheoryBox title="By the end you can">
            <ul>
              <li>{"Build the log likelihood ratio for a Bernoulli sequence and update it observation by observation."}</li>
              <li>{"Compute Wald's boundaries $A$ and $B$ from the target error rates $\\alpha$ and $\\beta$."}</li>
              <li>{"Apply the stopping rule and state the decision at each step."}</li>
              <li>{"Explain why the nominal error guarantees are approximate, and compare expected sample sizes with a fixed-sample test."}</li>
            </ul>
          </TheoryBox>
          <TheoryBox title="Prerequisites">
            <p>{"Hypothesis testing (Type I and Type II errors, power), likelihood functions, the Bernoulli distribution, and logarithms. Simulation outputs shown here illustrate typical behaviour and do not guarantee the decision of any single run."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-sd1-defs">
          <div className="sec-badge">Section 2</div>
          <h2 className="sec-title">Definitions and assumptions</h2>
          <TheoryBox title="Likelihood ratio">
            <p>{"Observe independent $X_1,X_2,\\dots$ and test the simple hypotheses $H_0:\\theta=\\theta_0$ versus $H_1:\\theta=\\theta_1$. After $n$ observations"}</p>
            <p>{"$$\\Lambda_n=\\prod_{i=1}^n\\frac{f(X_i;\\theta_1)}{f(X_i;\\theta_0)},\\qquad \\ln\\Lambda_n=\\sum_{i=1}^n z_i,\\quad z_i=\\ln\\frac{f(X_i;\\theta_1)}{f(X_i;\\theta_0)}.$$"}</p>
          </TheoryBox>
          <TheoryBox title="Bernoulli increments">
            <p>{"For $H_0:p=p_0$ versus $H_1:p=p_1$ with $p_1>p_0$, a success adds $\\ln(p_1/p_0)>0$ and a failure adds $\\ln\\dfrac{1-p_1}{1-p_0}<0$."}</p>
          </TheoryBox>
          <TheoryBox title="Wald's SPRT">
            <p>{"For target error rates $\\alpha$ (Type I) and $\\beta$ (Type II) set"}</p>
            <p>{"$$A=\\frac{1-\\beta}{\\alpha},\\qquad B=\\frac{\\beta}{1-\\alpha}.$$"}</p>
            <p>{"At each step: if $\\ln\\Lambda_n\\ge\\ln A$ stop and reject $H_0$; if $\\ln\\Lambda_n\\le\\ln B$ stop and accept $H_0$; otherwise take another observation."}</p>
          </TheoryBox>
          <TheoryBox title="Assumptions">
            <p>{"Independent, identically distributed observations; two simple hypotheses fixed before sampling. Composite alternatives require choosing a specific $p_1$ (an indifference value) or a different method."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-sd1-derivation">
          <div className="sec-badge">Section 3</div>
          <h2 className="sec-title">Key results and proof outline</h2>
          <TheoremBox title="Wald's error bounds and optimality">
            <p>{"The test stops with probability $1$. Its true error rates satisfy $\\alpha'\\le\\alpha/(1-\\beta)$, $\\beta'\\le\\beta/(1-\\alpha)$ and $\\alpha'+\\beta'\\le\\alpha+\\beta$. Among all tests with error rates no larger than $(\\alpha',\\beta')$, the SPRT minimises the expected sample size under both $H_0$ and $H_1$ (Wald-Wolfowitz)."}</p>
          </TheoremBox>
          <TheoryBox title="Proof outline">
            <p>{"Let $\\tau$ be the stopping time and $R_1$ the event that $H_0$ is rejected. At that moment $\\Lambda_\\tau\\ge A$, so $P_1(R_1)\\ge A\\,P_0(R_1)$, i.e. $1-\\beta'\\ge A\\alpha'$. Similarly on acceptance $\\Lambda_\\tau\\le B$, so $\\beta'\\le B(1-\\alpha')$. Rearranging gives the bounds above. Equality would hold only if $\\Lambda_\\tau$ landed exactly on a boundary, but it can overshoot, which is why the guarantees are approximate."}</p>
          </TheoryBox>
          <TheoryBox title="Expected sample size (Wald's approximation)">
            <p>{"By Wald's identity $E[\\ln\\Lambda_\\tau]=E[\\tau]\\,E[z]$. Ignoring overshoot,"}</p>
            <p>{"$$E_1[\\tau]\\approx\\frac{(1-\\beta)\\ln A+\\beta\\ln B}{E_1[z]},\\qquad E_0[\\tau]\\approx\\frac{\\alpha\\ln A+(1-\\alpha)\\ln B}{E_0[z]},$$"}</p>
            <p>{"where $E_1[z]=D(P_1\\Vert P_0)>0$ and $E_0[z]=-D(P_0\\Vert P_1)<0$ (Kullback-Leibler divergences)."}</p>
          </TheoryBox>
          <ProcedureBox
            title="Procedure: run a Bernoulli SPRT"
            steps={[
              "Fix p0, p1 (p1 > p0), alpha and beta before sampling.",
              "Compute ln A = ln((1 - beta)/alpha) and ln B = ln(beta/(1 - alpha)).",
              "Compute the increments ln(p1/p0) for a success and ln((1 - p1)/(1 - p0)) for a failure.",
              "After each observation add the increment to the running log likelihood ratio.",
              "Stop and reject H0 if it reaches ln A, stop and accept H0 if it reaches ln B, otherwise continue.",
            ]}
          />
        </section>

        <section className="section" id="ps-sd1-pitfalls">
          <div className="sec-badge">Section 4</div>
          <h2 className="sec-title">Limitations and common mistakes</h2>
          <TheoryBox title="Watch out for">
            <ul>
              <li>{"Treating the nominal $\\alpha$ and $\\beta$ as exact. Overshoot and discreteness make them approximate."}</li>
              <li>{"Re-running a fixed-sample test after every observation and stopping at the first rejection. This inflates the Type I error."}</li>
              <li>{"Swapping the boundaries: $A$ uses $(1-\\beta)/\\alpha$ and $B$ uses $\\beta/(1-\\alpha)$."}</li>
              <li>{"Applying the classical SPRT to composite hypotheses without choosing $p_1$."}</li>
              <li>{"Forgetting that the sample size is random, so planning and budgeting need the expected size and a truncation rule."}</li>
              <li>{"If the data are not independent or the true $p$ lies between $p_0$ and $p_1$, the stopping time can be long and the guarantees do not apply."}</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="ps-sd1-examples">
          <div className="sec-badge">Section 5</div>
          <h2 className="sec-title">Worked examples</h2>

          <WorkedExample
            number={1}
            title="A Bernoulli SPRT in action"
            setup={"Test $H_0:p=0.5$ against $H_1:p=0.7$ with $\\alpha=0.05$, $\\beta=0.10$. The observations are S S F S S S F S S S S S S S (S = success). When does the test stop?"}
            steps={[
              "ln A = ln 18 = 2.890 and ln B = ln(0.10/0.95) = -2.251.",
              "A success adds ln 1.4 = 0.336 and a failure adds ln 0.6 = -0.511.",
              "After 10 observations (8 S, 2 F) the sum is 8(0.336) - 2(0.511) = 1.67, still inside (-2.251, 2.890).",
              "After 13 observations (11 S, 2 F) the sum is 2.679, still inside. After 14 observations (12 S, 2 F) it is 3.016, above 2.890.",
            ]}
            result={"The test stops at $n=14$ and rejects $H_0$ (accepts $p=0.7$)."}
            check={"$12(0.3365)-2(0.5108)=3.016\\ge 2.890$, while $n=13$ gives $2.679<2.890$."}
          />

          <WorkedExample
            number={2}
            title="Application: expected sample size versus a fixed-sample test"
            setup={"For the test of Example 1, compare Wald's expected sample sizes with the fixed-sample size for the same $\\alpha$ and $\\beta$."}
            steps={[
              "E1[z] = 0.7(0.3365) + 0.3(-0.5108) = 0.0823 and E0[z] = 0.5(0.3365) + 0.5(-0.5108) = -0.0872.",
              "E1[tau] is about (0.90 x 2.890 + 0.10 x (-2.251)) / 0.0823 = 2.376 / 0.0823 = 28.9.",
              "E0[tau] is about (0.05 x 2.890 + 0.95 x (-2.251)) / (-0.0872) = 22.9.",
              "Fixed-sample test (normal approximation, z = 1.645 and 1.282): n = [(1.645 x 0.5 + 1.282 x 0.458) / 0.2]^2 = 49.7, about 50.",
            ]}
            result={"The SPRT needs about $29$ observations on average under $H_1$ and $23$ under $H_0$, compared with about $50$ for the fixed-sample test."}
            check={"Both averages are below $50$, as the Wald-Wolfowitz optimality result predicts. Any single run can still be longer than $50$."}
          />

          <WorkedExample
            number={3}
            title="Counterexample: repeated fixed-sample testing"
            setup={"A researcher checks a fixed-sample level-$0.05$ test after every observation and stops at the first rejection. Why is this not an SPRT?"}
            steps={[
              "A fixed-sample critical value is calibrated for one look at the data.",
              "Each extra look gives another chance for a true null to be rejected by chance.",
              "The overall Type I error therefore exceeds 0.05, and it keeps growing as more looks are allowed.",
              "The SPRT avoids this because its boundaries A and B are built for continuous monitoring.",
            ]}
            result={"Repeated naive testing gives a Type I error above $0.05$. The SPRT's boundaries are designed for stopping at a random time."}
            check={"The SPRT guarantee is $\\alpha'+\\beta'\\le\\alpha+\\beta$ for the stopping rule used, not per look."}
          />
        </section>

        <GuideMcqSection
          id="quiz-ps-sd1-checkpoint"
          badge="Topic checkpoint · 20 questions"
          title="Sequential Probability Ratio Tests"
          scoreId="score-ps-sd1-checkpoint"
          section="ps-sd1-checkpoint"
          questions={PS_R2_SPRT_QUIZ}
          onComplete={(score, total) =>
            saveQuizScore("guide-mcq-ps-sd1-checkpoint", score, total)
          }
        />
      </main>
    </StudyGuideShell>
  );
}
