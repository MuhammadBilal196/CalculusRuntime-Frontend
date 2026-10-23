import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_R2_KAPLAN_MEIER_QUIZ } from "../../data/psSurvivalQuizzes";

export default function CensoringKaplanMeierGuide() {
  const { saveQuizScore } = useProgress();
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Censoring and Kaplan-Meier Estimation"
    >
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Survival and Reliability · Topic 1</div></div>
        <a className="sb-link" href="#ps-sv1-objectives">Objectives</a>
        <a className="sb-link" href="#ps-sv1-defs">Definitions</a>
        <a className="sb-link" href="#ps-sv1-derivation">Key results</a>
        <a className="sb-link" href="#ps-sv1-pitfalls">Limitations</a>
        <a className="sb-link" href="#ps-sv1-examples">Examples</a>
        <a className="sb-link" href="#quiz-ps-sv1-checkpoint">Quiz</a>
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>

      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Survival and Reliability · Part 1 of 2</div>
          <h1 className="ch-title">Censoring and Kaplan-Meier Estimation</h1>
          <p className="ch-sub">Estimating survival when some event times are only partly observed</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-sv1-objectives">
          <div className="sec-badge">Section 1</div>
          <h2 className="sec-title">Learning objectives and prerequisites</h2>
          <TheoryBox title="By the end you can">
            <ul>
              <li>{"Distinguish an observed event from a right-censored observation, and write the data as $(Y_i,\\delta_i)$."}</li>
              <li>{"Build risk sets and compute the Kaplan-Meier estimate $\\hat S(t)$ by hand."}</li>
              <li>{"Read the median survival time from the curve, or recognise when it is not reached."}</li>
              <li>{"State the non-informative censoring assumption and explain what goes wrong without it."}</li>
            </ul>
          </TheoryBox>
          <TheoryBox title="Prerequisites">
            <p>{"Cumulative distribution and survival functions, conditional probability, products of conditional probabilities, and basic ideas of estimation."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-sv1-defs">
          <div className="sec-badge">Section 2</div>
          <h2 className="sec-title">Definitions and assumptions</h2>
          <TheoryBox title="Survival function and right censoring">
            <p>{"Let $T\\ge 0$ be the event time. The survival function is $S(t)=P(T>t)$. Each subject also has a censoring time $C$. We observe"}</p>
            <p>{"$$Y=\\min(T,C),\\qquad \\delta=\\mathbf 1\\{T\\le C\\}.$$"}</p>
            <p>{"If $\\delta=1$ the event was observed at $Y$. If $\\delta=0$ the observation is right-censored: all we know is $T>Y$. A censored subject is not an event."}</p>
          </TheoryBox>
          <TheoryBox title="Risk set and Kaplan-Meier estimator">
            <p>{"Let $t_1<t_2<\\dots$ be the distinct observed event times. Define $n_j=\\#\\{i:Y_i\\ge t_j\\}$ (the risk set size just before $t_j$) and $d_j$ = the number of events at $t_j$."}</p>
            <p>{"$$\\hat S(t)=\\prod_{t_j\\le t}\\left(1-\\frac{d_j}{n_j}\\right)$$"}</p>
            <p>{"Ties between an event and a censoring at the same time: the censored subject is kept in the risk set at that time."}</p>
          </TheoryBox>
          <TheoryBox title="Median survival">
            <p>{"The Kaplan-Meier median is the smallest $t$ with $\\hat S(t)\\le 0.5$. If the curve never falls to $0.5$, the median is not reached."}</p>
          </TheoryBox>
          <TheoryBox title="Key assumption">
            <p>{"Censoring is non-informative: given the model, the reason a subject is censored does not depend on their future event time. Subjects must also be a representative sample of the population of interest."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-sv1-derivation">
          <div className="sec-badge">Section 3</div>
          <h2 className="sec-title">Key results and proof outline</h2>
          <TheoremBox title="Product-limit form">
            <p>{"For a discrete set of event times, $S(t)=\\prod_{t_j\\le t}P(T>t_j\\mid T\\ge t_j)$. Kaplan-Meier replaces each conditional survival probability by $1-d_j/n_j$."}</p>
          </TheoremBox>
          <TheoryBox title="Proof outline">
            <p>{"Surviving past $t$ means surviving each successive interval, so $S(t)$ is a product of conditional survival probabilities. Among the $n_j$ subjects still under observation at $t_j$, a fraction $d_j/n_j$ failed, which estimates $P(T=t_j\\mid T\\ge t_j)$. Censored subjects contribute to every $n_j$ for event times up to their censoring time and then leave without changing the estimate. This product is also the nonparametric maximum likelihood estimator."}</p>
          </TheoryBox>
          <TheoremBox title="Greenwood's formula">
            <p>{"$$\\widehat{\\operatorname{Var}}\\big(\\hat S(t)\\big)=\\hat S(t)^2\\sum_{t_j\\le t}\\frac{d_j}{n_j(n_j-d_j)}.$$"}</p>
          </TheoremBox>
          <ProcedureBox
            title="Procedure: Kaplan-Meier by hand"
            steps={[
              "List the observed times and mark censored ones with +.",
              "Take each distinct event time t_j in order.",
              "Count n_j = subjects with observed time >= t_j (censored subjects at t_j included) and d_j = events at t_j.",
              "Multiply the running estimate by (1 - d_j / n_j).",
              "Read the median as the first time the estimate is <= 0.5, or report 'not reached'.",
            ]}
          />
        </section>

        <section className="section" id="ps-sv1-pitfalls">
          <div className="sec-badge">Section 4</div>
          <h2 className="sec-title">Limitations and common mistakes</h2>
          <TheoryBox title="Watch out for">
            <ul>
              <li>{"Treating a censored time as an event. This understates survival."}</li>
              <li>{"Deleting censored subjects. This discards information and biases the estimate."}</li>
              <li>{"Removing a censored subject from the risk set at the same time as an event, instead of keeping them in $n_j$."}</li>
              <li>{"Informative censoring, for example sicker patients dropping out, which makes the curve look too good."}</li>
              <li>{"If the last time is censored the curve does not reach $0$, so the mean survival time is not estimable. Report a restricted mean instead."}</li>
              <li>{"Estimates become very unstable when the risk set is small, so late parts of the curve deserve wide confidence bands."}</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="ps-sv1-examples">
          <div className="sec-badge">Section 5</div>
          <h2 className="sec-title">Worked examples</h2>

          <WorkedExample
            number={1}
            title="Kaplan-Meier curve and median"
            setup={"Seven patients are followed for these times in months (+ = censored): 3, 5+, 6, 6, 8+, 10, 12+. Find $\\hat S(t)$ and the median survival time."}
            steps={[
              "t = 3: n = 7, d = 1, so S = 1 - 1/7 = 6/7 = 0.857.",
              "The censored 5+ leaves the risk set. t = 6: n = 5 (6, 6, 8+, 10, 12+), d = 2, so S = 0.857 x 3/5 = 18/35 = 0.514.",
              "The censored 8+ leaves. t = 10: n = 2 (10, 12+), d = 1, so S = 0.514 x 1/2 = 9/35 = 0.257.",
              "12+ is censored, so the curve stays at 0.257.",
            ]}
            result={"$\\hat S$ drops below $0.5$ first at $t=10$, so the median survival time is $10$ months."}
            check={"$\\hat S(6)=0.514>0.5$ and $\\hat S(10)=0.257\\le 0.5$."}
          />

          <WorkedExample
            number={2}
            title="Application: why censoring cannot be ignored"
            setup={"Using the data of Example 1, compare Kaplan-Meier with the naive approach that treats every observed time as an event."}
            steps={[
              "Naive approach: times 3, 5, 6, 6, 8, 10, 12 are all treated as deaths.",
              "The empirical survival falls to 3/7 = 0.429 at t = 6, so the naive median is 6 months.",
              "Kaplan-Meier keeps the censored patients at risk until they are lost, giving a median of 10 months.",
            ]}
            result={"The naive median ($6$ months) understates the Kaplan-Meier median ($10$ months) because censored patients are counted as failures."}
            check={"Three of the seven patients were still alive when last seen, so they cannot be counted as deaths."}
          />

          <WorkedExample
            number={3}
            title="Counterexample: median not reached"
            setup={"Observed times (months, + = censored): 2, 4+, 7+, 9+, 11+. Find the median survival time."}
            steps={[
              "t = 2: n = 5, d = 1, so S = 4/5 = 0.8.",
              "All later times are censored, so there are no further drops.",
              "The curve stays at 0.8 and never reaches 0.5.",
            ]}
            result={"The median is not reached. We can only say the median exceeds $11$ months, not that it equals any observed time."}
            check={"No event occurs after $t=2$, so $\\hat S(t)=0.8$ for all $t\\ge 2$."}
          />
        </section>

        <GuideMcqSection
          id="quiz-ps-sv1-checkpoint"
          badge="Topic checkpoint · 20 questions"
          title="Censoring and Kaplan-Meier Estimation"
          scoreId="score-ps-sv1-checkpoint"
          section="ps-sv1-checkpoint"
          questions={PS_R2_KAPLAN_MEIER_QUIZ}
          onComplete={(score, total) =>
            saveQuizScore("guide-mcq-ps-sv1-checkpoint", score, total)
          }
        />
      </main>
    </StudyGuideShell>
  );
}
