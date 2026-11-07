import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_B_NONPARAM_QUIZ } from "../../data/psNewModulesQuizzes";

export default function NonparametricTestsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Non-Parametric Tests (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-sub">Probability &amp; Statistics</div>
          <div className="sb-title">Non-Parametric Tests</div>
        </div>
        <div className="sb-group">Part {part} · Distribution-Free Inference</div>
        <a className="sb-link" href="#ps-b-nonparam-theory">Rank Statistics &amp; Medians</a>
        <a className="sb-link" href="#ps-b-nonparam-method">Ranking &amp; Tie Procedure</a>
        <a className="sb-link" href="#ps-b-nonparam-examples">Worked Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-b-nonparam-checkpoint">Checkpoint Quiz</a>}
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Hypothesis Testing &amp; Regression · Part {part} of 2</div>
          <h1 className="ch-title">Non-Parametric Tests</h1>
          <p className="ch-sub">
            {advanced
              ? "Mann–Whitney U (Wilcoxon rank-sum), Kruskal–Wallis one-way rank ANOVA, and Spearman rank correlation ρ_s"
              : "Distribution-free inference for heavy-tailed or ordinal data, the Binomial sign test, and Wilcoxon signed-rank test"}
          </p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-b-nonparam-theory">
          <div className="sec-badge">Section {part}.1 · Formal Foundations</div>
          <h2 className="sec-title">
            {advanced ? "Two-sample, k-sample & rank correlation tests" : "Sign test, Wilcoxon signed-rank & mid-ranks for ties"}
          </h2>
          {advanced ? (
            <>
              <TheoryBox title="Mann–Whitney U test and Kruskal–Wallis H test">
                <p>
                  {"1) Mann–Whitney $U$ (Wilcoxon Rank-Sum): Pool $n_1 + n_2$ independent observations and sum the ranks $R_1$ in sample 1. Then $U_1 = R_1 - \\frac{n_1(n_1+1)}{2}$, $U_2 = n_1 n_2 - U_1$, with null mean $\\mu_U = \\frac{n_1 n_2}{2}$ and variance $\\sigma_U^2 = \\frac{n_1 n_2(n_1+n_2+1)}{12}$. 2) Kruskal–Wallis: For $k$ groups of sizes $n_i$ ($N=\\sum n_i$) and rank sums $R_i$, $H = \\frac{12}{N(N+1)}\\sum_{i=1}^k \\frac{R_i^2}{n_i} - 3(N+1) \\xrightarrow{d} \\chi^2_{k-1}$ under $H_0$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Spearman's rank correlation coefficient ρ_s">
                <p>
                  {"Given $n$ paired observations $(X_i,Y_i)$ with rank differences $d_i = \\text{rank}(X_i) - \\text{rank}(Y_i)$ (and no ties), Spearman's rank correlation is $\\rho_s = 1 - \\frac{6\\sum_{i=1}^n d_i^2}{n(n^2-1)} \\in [-1,1]$. It measures any monotonic relationship, even when the relationship is strongly nonlinear."}
                </p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="Sign test and Wilcoxon signed-rank test for paired/one-sample data">
                <p>
                  {"1) Sign Test: To test $H_0: m = m_0$ for a population median, discard exact zeros ($X_i = m_0$) and count $S^+ = \\#\\{X_i > m_0\\}$ among the $n^*$ non-zero differences. Under $H_0$, $S^+ \\sim \\text{Binomial}(n^*, 0.5)$. 2) Wilcoxon Signed-Rank Test: Under symmetry around $m_0$, rank the absolute differences $|D_i| = |X_i - m_0|$ from $1$ to $n^*$ and sum the ranks of positive differences $W^+ = \\sum_{D_i > 0} \\text{rank}(|D_i|)$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Null moments of W⁺ and handling tied ranks">
                <p>
                  {"Under $H_0$ for $n^*$ non-zero differences, $E[W^+] = \\frac{n^*(n^*+1)}{4}$ and $\\text{Var}(W^+) = \\frac{n^*(n^*+1)(2n^*+1)}{24}$. When two or more observations are tied, assign each tied observation the average (mid-rank) of the rank positions they span."}
                </p>
              </TheoremBox>
            </>
          )}
        </section>

        <section className="section" id="ps-b-nonparam-method">
          <div className="sec-badge">Section {part}.2 · Step-by-Step Method</div>
          <h2 className="sec-title">Working procedure</h2>
          <ProcedureBox
            title={advanced ? "Running Mann–Whitney U and Spearman ρ_s" : "Computing Wilcoxon signed-rank W⁺"}
            steps={
              advanced
                ? [
                    "For Mann–Whitney, sort all $N = n_1 + n_2$ observations together, assign ranks $1,\\dots,N$ (averaging ties), and sum $R_1$.",
                    "Compute $U_1 = R_1 - n_1(n_1+1)/2$ and $U_2 = n_1 n_2 - U_1$; check against $\\mu_U = n_1 n_2/2$.",
                    "For Spearman's $\\rho_s$, rank $X$ and $Y$ separately from $1$ to $n$, compute $d_i = r_{X,i}-r_{Y,i}$, and evaluate $1 - 6\\sum d_i^2 / [n(n^2-1)]$.",
                  ]
                : [
                    "Compute differences $d_i = x_i - m_0$ and drop any $d_i = 0$ to obtain $n^*$.",
                    "Sort $|d_i|$ in ascending order and assign ranks $1,\\dots,n^*$ (using mid-ranks for ties).",
                    "Sum the ranks of positive differences to get $W^+$ and negative differences to get $W^-$.",
                    "Verify $W^+ + W^- = n^*(n^*+1)/2$.",
                  ]
            }
          />
        </section>

        <section className="section" id="ps-b-nonparam-examples">
          <div className="sec-badge">Section {part}.3 · Certificate Worked Examples</div>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={1}
                title="Mann–Whitney U statistic for two independent samples"
                setup="Sample A has values $(12, 15, 19)$ ($n_1=3$) and Sample B has values $(10, 14, 18, 22)$ ($n_2=4$). Compute the rank sum $R_1$, $U_1$, $U_2$, and null mean $\mu_U$."
                steps={[
                  "Pool and sort all $7$ values: $10\\text{(B:1)},\\; 12\\text{(A:2)},\\; 14\\text{(B:3)},\\; 15\\text{(A:4)},\\; 18\\text{(B:5)},\\; 19\\text{(A:6)},\\; 22\\text{(B:7)}$.",
                  "Sum ranks for Sample A: $R_1 = 2 + 4 + 6 = 12$.",
                  "Compute $U_1 = R_1 - \\frac{3(4)}{2} = 12 - 6 = 6$, and $U_2 = (3)(4) - 6 = 6$.",
                  "Null mean: $\\mu_U = \\frac{n_1 n_2}{2} = \\frac{12}{2} = 6$.",
                ]}
                result="$R_1 = 12$, $U_1 = U_2 = 6$, which equals the exact null expectation $\mu_U = 6$."
                check="$U_1 + U_2 = 6 + 6 = 12 = n_1 n_2$."
              />
              <WorkedExample
                number={2}
                title="Spearman's rank correlation ρ_s for paired rankings"
                setup="Five applicants are ranked by two interviewers: $r_X = (1, 2, 3, 4, 5)$ and $r_Y = (2, 1, 4, 3, 5)$. Compute Spearman's $\rho_s$."
                steps={[
                  "Compute rank differences $d_i = r_{X,i} - r_{Y,i} = (-1, 1, -1, 1, 0)$.",
                  "Sum squared differences: $\\sum d_i^2 = 1 + 1 + 1 + 1 + 0 = 4$.",
                  "Substitute $n = 5$ into $\\rho_s = 1 - \\frac{6\\sum d_i^2}{n(n^2-1)} = 1 - \\frac{6(4)}{5(24)} = 1 - \\frac{24}{120} = 0.80$.",
                ]}
                result="$\rho_s = 0.80$."
                check="Since $\sum d_i = -1+1-1+1+0 = 0$, the rank differences are properly centered."
              />
              <WorkedExample
                number={3}
                title="Kruskal–Wallis H statistic for three groups"
                setup="Three treatments of size $n_1 = n_2 = n_3 = 4$ ($N = 12$) yield group rank sums $R_1 = 14$, $R_2 = 26$, and $R_3 = 38$. Compute the Kruskal–Wallis statistic $H$."
                steps={[
                  "Verify total rank sum: $R_1 + R_2 + R_3 = 14 + 26 + 38 = 78 = 12(13)/2$.",
                  "Compute $\\sum \\frac{R_i^2}{n_i} = \\frac{196 + 676 + 1444}{4} = \\frac{2316}{4} = 579$.",
                  "Evaluate $H = \\frac{12}{12(13)}(579) - 3(13) = \\frac{579}{13} - 39 \\approx 44.538 - 39 = 5.538$ ($df = k - 1 = 2$).",
                ]}
                result="$H \approx 5.54$ on $df = 2$."
                check="Under $H_0$, each $R_i = 26$, which gives $\frac{12}{156}(3 \times 676/4) - 39 = 39 - 39 = 0$."
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="Exact two-sided Binomial sign test"
                setup="In $n = 10$ paired before/after measurements, $8$ patients improve ($+$), $1$ worsens ($-$), and $1$ shows zero change ($0$). Find the exact two-sided sign-test $p$-value."
                steps={[
                  "Discard the $1$ tied zero difference, leaving $n^* = 9$ non-zero pairs with $S^+ = 8$.",
                  "Under $H_0: p = 0.5$, $P(S^+ \\ge 8) = \\binom{9}{8}(0.5)^9 + \\binom{9}{9}(0.5)^9 = \\frac{9 + 1}{512} = \\frac{10}{512}$.",
                  "Two-sided $p$-value: $p = 2 \\times \\frac{10}{512} = \\frac{20}{512} \\approx 0.0391$.",
                ]}
                result="$n^* = 9$, $S^+ = 8$, and exact two-sided $p = 20/512 \approx 0.0391 < 0.05$."
                check="Using $n=10$ without dropping the zero would give an incorrect denominator of $2^{10}=1024$."
                mistake="Always discard exact zero differences ($d_i = 0$) and reduce $n$ to $n^*$ before computing the sign test."
              />
              <WorkedExample
                number={2}
                title="Wilcoxon signed-rank statistic W⁺ with tied absolute differences"
                setup="Six paired differences from $H_0: m = 0$ are $d = (-2, +3, -3, +5, +8, -10)$. Compute the Wilcoxon signed-rank sums $W^+$ and $W^-$."
                steps={[
                  "Absolute values $|d| = (2, 3, 3, 5, 8, 10)$. Positions $2$ and $3$ are tied at $|d|=3$, so each gets mid-rank $(2+3)/2 = 2.5$.",
                  "Signed ranks: $-2 \\to -1$; $+3 \\to +2.5$; $-3 \\to -2.5$; $+5 \\to +4$; $+8 \\to +5$; $-10 \\to -6$.",
                  "Sum positive ranks: $W^+ = 2.5 + 4 + 5 = 11.5$. Sum negative ranks: $W^- = 1 + 2.5 + 6 = 9.5$.",
                ]}
                result="$W^+ = 11.5$ and $W^- = 9.5$."
                check="$W^+ + W^- = 11.5 + 9.5 = 21 = 6(7)/2$, and $E[W^+] = 6(7)/4 = 10.5$."
              />
              <WorkedExample
                number={3}
                title="Normal approximation for Wilcoxon signed-rank at n = 15"
                setup="For $n^* = 15$ non-zero untied differences, we observe $W^+ = 95$. Compute the null mean, standard deviation, and $z$-score of $W^+$."
                steps={[
                  "Null mean: $E[W^+] = \\frac{15(16)}{4} = 60$.",
                  "Null variance: $\\text{Var}(W^+) = \\frac{15(16)(31)}{24} = 310 \\implies \\text{SD}(W^+) = \\sqrt{310} \\approx 17.607$.",
                  "Standardized statistic: $z = \\frac{95 - 60}{17.607} \\approx 1.988$.",
                ]}
                result="$E[W^+] = 60$, $\text{SD}(W^+) \approx 17.61$, and $z \approx 1.99$ (significant at $\alpha = 0.05$)."
                check="Maximum possible $W^+$ is $15(16)/2 = 120$, and $60$ is the exact midpoint."
              />
            </>
          )}
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-ps-b-nonparam-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Non-Parametric Tests"
            scoreId="score-ps-b-nonparam-checkpoint"
            section="ps-b-nonparam-checkpoint"
            questions={PS_B_NONPARAM_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-b-nonparam-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Part 2</h2>
            <p>Part 2 covers the two-sample Mann–Whitney $U$ test, Kruskal–Wallis rank ANOVA, Spearman's rank correlation $\rho_s$, and the 20-question checkpoint (80% to unlock completion).</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
