import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_R2_MULTIPLE_TESTING_QUIZ } from "../../data/psSequentialQuizzes";

export default function MultipleTestingGuide() {
  const { saveQuizScore } = useProgress();
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Multiple Testing and False Discoveries"
    >
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Sequential and Multiple Decisions · Topic 2</div></div>
        <a className="sb-link" href="#ps-sd2-objectives">Objectives</a>
        <a className="sb-link" href="#ps-sd2-defs">Definitions</a>
        <a className="sb-link" href="#ps-sd2-derivation">Key results</a>
        <a className="sb-link" href="#ps-sd2-pitfalls">Limitations</a>
        <a className="sb-link" href="#ps-sd2-examples">Examples</a>
        <a className="sb-link" href="#quiz-ps-sd2-checkpoint">Quiz</a>
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>

      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Sequential and Multiple Decisions · Part 2 of 2</div>
          <h1 className="ch-title">Multiple Testing and False Discoveries</h1>
          <p className="ch-sub">Keeping false positives under control when many hypotheses are tested at once</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-sd2-objectives">
          <div className="sec-badge">Section 1</div>
          <h2 className="sec-title">Learning objectives and prerequisites</h2>
          <TheoryBox title="By the end you can">
            <ul>
              <li>{"Distinguish the family-wise error rate (FWER) from the false discovery rate (FDR)."}</li>
              <li>{"Apply Bonferroni, Holm and Benjamini-Hochberg to a list of p-values by hand."}</li>
              <li>{"Compute adjusted p-values and interpret an adjusted decision correctly."}</li>
              <li>{"State the assumptions behind each procedure and the trade-off between power and error control."}</li>
            </ul>
          </TheoryBox>
          <TheoryBox title="Prerequisites">
            <p>{"Hypothesis testing and p-values, Type I error, the union bound, and independence of events."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-sd2-defs">
          <div className="sec-badge">Section 2</div>
          <h2 className="sec-title">Definitions and assumptions</h2>
          <TheoryBox title="Error rates">
            <p>{"Among $m$ tests let $m_0$ be the number of true nulls, $R$ the number of rejections and $V$ the number of false rejections. Then"}</p>
            <p>{"$$\\text{FWER}=P(V\\ge 1),\\qquad \\text{FDR}=E\\!\\left[\\frac{V}{\\max(R,1)}\\right].$$"}</p>
          </TheoryBox>
          <TheoryBox title="Three procedures at level $\\alpha$">
            <p>{"Sort the p-values $p_{(1)}\\le\\dots\\le p_{(m)}$."}</p>
            <ul>
              <li>{"Bonferroni: reject $H_i$ if $p_i\\le\\alpha/m$. Adjusted p-value $\\min(1,mp_i)$."}</li>
              <li>{"Holm (step-down): find the smallest $k$ with $p_{(k)}>\\alpha/(m-k+1)$ and reject $H_{(1)},\\dots,H_{(k-1)}$."}</li>
              <li>{"Benjamini-Hochberg (step-up): find the largest $k$ with $p_{(k)}\\le k\\alpha/m$ and reject $H_{(1)},\\dots,H_{(k)}$."}</li>
            </ul>
          </TheoryBox>
          <TheoryBox title="Assumptions">
            <p>{"Bonferroni and Holm control the FWER under any dependence between the tests. Benjamini-Hochberg controls the FDR at $\\alpha m_0/m\\le\\alpha$ for independent p-values (and under positive regression dependence). Null p-values are assumed to be uniform on $[0,1]$ (valid tests)."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-sd2-derivation">
          <div className="sec-badge">Section 3</div>
          <h2 className="sec-title">Key results and proof outline</h2>
          <TheoremBox title="Bonferroni controls the FWER">
            <p>{"If every true null is tested at level $\\alpha/m$, then $\\text{FWER}\\le \\alpha\\, m_0/m\\le\\alpha$."}</p>
          </TheoremBox>
          <TheoryBox title="Proof outline">
            <p>{"By the union bound, $P(V\\ge1)=P\\big(\\bigcup_{i\\in\\text{true nulls}}\\{p_i\\le\\alpha/m\\}\\big)\\le\\sum_{i}P(p_i\\le\\alpha/m)=m_0\\,\\alpha/m$. No independence is used. Holm replaces $\\alpha/m$ by larger thresholds but has the same guarantee by a closed-testing argument, so it rejects at least as much as Bonferroni."}</p>
          </TheoryBox>
          <TheoremBox title="Benjamini-Hochberg controls the FDR">
            <p>{"For independent p-values, $\\text{FDR}=\\alpha\\,m_0/m\\le\\alpha$ for the BH rule. If all nulls are true, $V=R$ and the FDR equals the FWER."}</p>
          </TheoremBox>
          <ProcedureBox
            title="Procedure: compare the three methods"
            steps={[
              "Sort the p-values and note m and alpha.",
              "Bonferroni: count the p-values at or below alpha/m.",
              "Holm: walk up the sorted list comparing p(k) with alpha/(m - k + 1) and stop at the first failure.",
              "BH: find the largest k with p(k) <= k alpha / m and reject everything up to it.",
              "Report the adjusted p-values and which error rate each method controls.",
            ]}
          />
        </section>

        <section className="section" id="ps-sd2-pitfalls">
          <div className="sec-badge">Section 4</div>
          <h2 className="sec-title">Limitations and common mistakes</h2>
          <TheoryBox title="Watch out for">
            <ul>
              <li>{"Reading an FDR of $0.05$ as a guarantee that each rejection is $95\\%$ certain. FDR is an expected proportion over repeated experiments."}</li>
              <li>{"Using Benjamini-Hochberg and claiming FWER control. BH does not control the FWER."}</li>
              <li>{"Applying Bonferroni with very large $m$ and missing real effects because the threshold $\\alpha/m$ is tiny."}</li>
              <li>{"Counting only the tests that were reported. All tests that were run belong to the family."}</li>
              <li>{"Using BH when the tests are strongly negatively dependent, where the FDR guarantee can fail."}</li>
              <li>{"Treating an adjusted p-value as the probability that the null is true. It is a threshold-based quantity, not a posterior probability."}</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="ps-sd2-examples">
          <div className="sec-badge">Section 5</div>
          <h2 className="sec-title">Worked examples</h2>

          <WorkedExample
            number={1}
            title="Bonferroni, Holm and Benjamini-Hochberg side by side"
            setup={"Six tests give the p-values $0.001,\\ 0.008,\\ 0.012,\\ 0.030,\\ 0.041,\\ 0.20$. Use $\\alpha=0.05$."}
            steps={[
              "Bonferroni: threshold 0.05/6 = 0.0083, so only 0.001 and 0.008 are rejected (2 rejections).",
              "Holm: thresholds 0.05/6, 0.05/5, 0.05/4, 0.05/3 = 0.0083, 0.010, 0.0125, 0.0167. The first three p-values pass, but 0.030 > 0.0167, so stop (3 rejections).",
              "BH: thresholds k(0.05)/6 = 0.0083, 0.0167, 0.025, 0.0333, 0.0417, 0.05. The largest k with p(k) at or below its threshold is k = 5 (0.041 <= 0.0417), so 5 rejections.",
              "Adjusted p-values: Bonferroni 0.006, 0.048, 0.072, 0.18, 0.246, 1; Holm 0.006, 0.040, 0.048, 0.09, 0.09, 0.20; BH 0.006, 0.024, 0.024, 0.045, 0.049, 0.20.",
            ]}
            result={"Bonferroni rejects $2$, Holm rejects $3$ and BH rejects $5$ hypotheses. The ordering reflects increasing power and weaker error control (FWER, FWER, FDR)."}
            check={"Counting adjusted p-values at or below $0.05$ gives the same numbers: $2,\\ 3,\\ 5$."}
          />

          <WorkedExample
            number={2}
            title="Application: screening 1000 genes"
            setup={"A screen tests $m=1000$ genes, of which $m_0=900$ are truly unaffected. Compare unadjusted testing with Bonferroni at $\\alpha=0.05$."}
            steps={[
              "Unadjusted: expected false positives = 900 x 0.05 = 45.",
              "Bonferroni per-test level: 0.05/1000 = 0.00005.",
              "FWER of Bonferroni is at most 900/1000 x 0.05 = 0.045, so a false positive is unlikely.",
              "The price is power: a real effect needs a p-value below 0.00005 to be detected.",
            ]}
            result={"Unadjusted testing yields about $45$ false positives; Bonferroni keeps the chance of any false positive below $0.05$ but may miss real effects. BH is the usual compromise when a few false leads are acceptable."}
            check={"$m_0\\alpha=45$ false positives at the unadjusted level, and $m_0\\cdot(\\alpha/m)=0.045$ expected false positives under Bonferroni."}
          />

          <WorkedExample
            number={3}
            title="Counterexample: why uncorrected testing misleads"
            setup={"Twenty independent true nulls are each tested at level $0.05$. What is the chance that at least one is declared significant?"}
            steps={[
              "Each test avoids a false positive with probability 0.95.",
              "All 20 avoid it with probability 0.95^20 = 0.358.",
              "So P(at least one false positive) = 1 - 0.358 = 0.642.",
              "With Bonferroni (0.0025 per test) the probability is at most 0.05.",
            ]}
            result={"The naive family-wise error rate is about $0.64$, far above the nominal $0.05$. Finding one significant result among $20$ is expected, not evidence of an effect."}
            check={"$1-0.95^{20}=0.6415$, while $20\\times 0.0025=0.05$."}
          />
        </section>

        <GuideMcqSection
          id="quiz-ps-sd2-checkpoint"
          badge="Topic checkpoint · 20 questions"
          title="Multiple Testing and False Discoveries"
          scoreId="score-ps-sd2-checkpoint"
          section="ps-sd2-checkpoint"
          questions={PS_R2_MULTIPLE_TESTING_QUIZ}
          onComplete={(score, total) =>
            saveQuizScore("guide-mcq-ps-sd2-checkpoint", score, total)
          }
        />
      </main>
    </StudyGuideShell>
  );
}
