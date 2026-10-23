import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_R2_HAZARD_SURVIVAL_QUIZ } from "../../data/psSurvivalQuizzes";

export default function HazardSurvivalModelsGuide() {
  const { saveQuizScore } = useProgress();
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Hazard Functions and Survival Models"
    >
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Survival and Reliability · Topic 2</div></div>
        <a className="sb-link" href="#ps-sv2-objectives">Objectives</a>
        <a className="sb-link" href="#ps-sv2-defs">Definitions</a>
        <a className="sb-link" href="#ps-sv2-derivation">Key results</a>
        <a className="sb-link" href="#ps-sv2-pitfalls">Limitations</a>
        <a className="sb-link" href="#ps-sv2-examples">Examples</a>
        <a className="sb-link" href="#quiz-ps-sv2-checkpoint">Quiz</a>
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>

      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Survival and Reliability · Part 2 of 2</div>
          <h1 className="ch-title">Hazard Functions and Survival Models</h1>
          <p className="ch-sub">From failure rates to exponential and Weibull lifetimes and system reliability</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-sv2-objectives">
          <div className="sec-badge">Section 1</div>
          <h2 className="sec-title">Learning objectives and prerequisites</h2>
          <TheoryBox title="By the end you can">
            <ul>
              <li>{"Move between $S(t)$, $f(t)$, $h(t)$ and $H(t)$ for a continuous lifetime."}</li>
              <li>{"Compute survival probabilities, hazards, medians and means for exponential and Weibull models."}</li>
              <li>{"Interpret a constant, decreasing or increasing hazard in reliability terms."}</li>
              <li>{"Combine independent components in series and in parallel."}</li>
            </ul>
          </TheoryBox>
          <TheoryBox title="Prerequisites">
            <p>{"Continuous distributions and densities, the survival function and Kaplan-Meier estimation (Part 1), the exponential function, and basic integration."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-sv2-defs">
          <div className="sec-badge">Section 2</div>
          <h2 className="sec-title">Definitions and assumptions</h2>
          <TheoryBox title="Hazard and cumulative hazard">
            <p>{"For a continuous lifetime $T$ with density $f$ and survival function $S$:"}</p>
            <p>{"$$h(t)=\\lim_{\\Delta t\\to 0}\\frac{P(t\\le T<t+\\Delta t\\mid T\\ge t)}{\\Delta t}=\\frac{f(t)}{S(t)},\\qquad H(t)=\\int_0^t h(u)\\,du.$$"}</p>
            <p>{"The hazard is a conditional rate per unit time, not a probability, so it may exceed $1$."}</p>
          </TheoryBox>
          <TheoryBox title="Exponential model">
            <p>{"$h(t)=\\lambda$, $S(t)=e^{-\\lambda t}$, mean $1/\\lambda$, median $\\ln 2/\\lambda$. It is memoryless: $P(T>s+t\\mid T>s)=P(T>t)$."}</p>
          </TheoryBox>
          <TheoryBox title="Weibull model">
            <p>{"With scale $\\eta>0$ and shape $k>0$:"}</p>
            <p>{"$$S(t)=\\exp\\!\\big(-(t/\\eta)^k\\big),\\qquad h(t)=\\frac{k}{\\eta}\\Big(\\frac t\\eta\\Big)^{k-1}.$$"}</p>
            <p>{"$k<1$: decreasing hazard (early failures). $k=1$: constant (exponential). $k>1$: increasing hazard (wear-out). Mean $\\eta\\,\\Gamma(1+1/k)$, median $\\eta(\\ln 2)^{1/k}$."}</p>
          </TheoryBox>
          <TheoryBox title="Reliability of systems">
            <p>{"The reliability is $R(t)=S(t)$. For independent components, a series system has $R=\\prod R_i$ (hazards add), and a parallel system has $R=1-\\prod(1-R_i)$."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-sv2-derivation">
          <div className="sec-badge">Section 3</div>
          <h2 className="sec-title">Key results and proof outline</h2>
          <TheoremBox title="Survival-hazard relationships">
            <p>{"$$S(t)=\\exp(-H(t)),\\qquad f(t)=h(t)\\,S(t),\\qquad E[T]=\\int_0^\\infty S(t)\\,dt.$$"}</p>
          </TheoremBox>
          <TheoryBox title="Proof outline">
            <p>{"Since $f=-S'$, we get $h=f/S=-S'/S=-\\dfrac{d}{dt}\\ln S(t)$. Integrating from $0$ to $t$ with $S(0)=1$ gives $\\ln S(t)=-H(t)$, which is the first identity. The second is the definition of $h$ rearranged. For the mean, write $T=\\int_0^\\infty \\mathbf 1\\{T>t\\}\\,dt$ and take expectations."}</p>
          </TheoryBox>
          <ProcedureBox
            title="Procedure: from a hazard to survival quantities"
            steps={[
              "Write the hazard h(t) and integrate to get H(t) = integral of h from 0 to t.",
              "Set S(t) = exp(-H(t)) and f(t) = h(t) S(t).",
              "Solve S(t) = 0.5 for the median.",
              "Integrate S(t) from 0 to infinity for the mean time to failure.",
              "For systems, combine component reliabilities in series or in parallel.",
            ]}
          />
        </section>

        <section className="section" id="ps-sv2-pitfalls">
          <div className="sec-badge">Section 4</div>
          <h2 className="sec-title">Limitations and common mistakes</h2>
          <TheoryBox title="Watch out for">
            <ul>
              <li>{"Treating $h(t)$ as a probability. For Weibull with $k=0.5$, $\\eta=1$ we get $h(0.04)=0.5/\\sqrt{0.04}=2.5>1$, which is perfectly valid."}</li>
              <li>{"Confusing the density $f(t)$ with the hazard $h(t)=f(t)/S(t)$."}</li>
              <li>{"Mixing up the mean $1/\\lambda$ and the median $\\ln 2/\\lambda$ of the exponential distribution."}</li>
              <li>{"Using a constant hazard for wearing-out units. Real hazards are often bathtub-shaped, which a single Weibull cannot capture."}</li>
              <li>{"Assuming components are independent in system formulas. Shared stresses break the product rules."}</li>
              <li>{"Population hazards can decrease even if every individual hazard is constant, because weaker units fail first (heterogeneity)."}</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="ps-sv2-examples">
          <div className="sec-badge">Section 5</div>
          <h2 className="sec-title">Worked examples</h2>

          <WorkedExample
            number={1}
            title="Exponential lifetime"
            setup={"A device has constant hazard $\\lambda=0.02$ per hour. Find $S(100)$, the median, the mean, and $P(T>150\\mid T>50)$."}
            steps={[
              "S(100) = exp(-0.02 x 100) = exp(-2) = 0.135.",
              "Median = ln 2 / 0.02 = 34.66 hours. Mean = 1 / 0.02 = 50 hours.",
              "By memorylessness, P(T > 150 | T > 50) = P(T > 100) = exp(-2).",
            ]}
            result={"$S(100)\\approx 0.135$, median $\\approx 34.7$ h, mean $=50$ h, and the conditional probability also equals $0.135$."}
            check={"Median $<$ mean, as expected for a right-skewed distribution."}
          />

          <WorkedExample
            number={2}
            title="Weibull wear-out"
            setup={"A bearing has a Weibull lifetime with $\\eta=1000$ hours and $k=2$. Find $S(500)$, $h(500)$ and the mean."}
            steps={[
              "S(500) = exp(-(0.5)^2) = exp(-0.25) = 0.779.",
              "h(500) = (2/1000)(0.5)^(2-1) = 0.001 per hour.",
              "Mean = 1000 x Gamma(1.5) = 1000 x 0.8862 = 886.2 hours.",
            ]}
            result={"$S(500)\\approx 0.779$, $h(500)=0.001$ per hour, mean $\\approx 886$ hours. Since $k>1$ the hazard rises with age."}
            check={"$h(1000)=0.002$ is larger than $h(500)=0.001$, so the hazard is increasing."}
          />

          <WorkedExample
            number={3}
            title="Application: series versus parallel"
            setup={"Two independent components have exponential lifetimes with rates $0.001$ and $0.003$ per hour. Compare the reliability at $250$ hours when they are in series and when they are in parallel."}
            steps={[
              "Series: the hazards add to 0.004, so R(250) = exp(-0.004 x 250) = exp(-1) = 0.368, and the system mean life is 1/0.004 = 250 hours.",
              "Component reliabilities at 250 h: exp(-0.25) = 0.779 and exp(-0.75) = 0.472.",
              "Parallel: R(250) = 1 - (1 - 0.779)(1 - 0.472) = 1 - 0.221 x 0.528 = 0.883.",
            ]}
            result={"Series $R(250)\\approx 0.368$; parallel $R(250)\\approx 0.883$. Redundancy greatly raises reliability."}
            check={"The series value is below the weakest component's $0.472$, and the parallel value is above the best component's $0.779$."}
          />
        </section>

        <GuideMcqSection
          id="quiz-ps-sv2-checkpoint"
          badge="Topic checkpoint · 20 questions"
          title="Hazard Functions and Survival Models"
          scoreId="score-ps-sv2-checkpoint"
          section="ps-sv2-checkpoint"
          questions={PS_R2_HAZARD_SURVIVAL_QUIZ}
          onComplete={(score, total) =>
            saveQuizScore("guide-mcq-ps-sv2-checkpoint", score, total)
          }
        />
      </main>
    </StudyGuideShell>
  );
}
