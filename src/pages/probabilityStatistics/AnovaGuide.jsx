import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_B_ANOVA_QUIZ } from "../../data/psNewModulesQuizzes";

export default function AnovaGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Analysis of Variance (ANOVA) (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-sub">Probability &amp; Statistics</div>
          <div className="sb-title">Analysis of Variance (ANOVA)</div>
        </div>
        <div className="sb-group">Part {part} · Variance Partitioning</div>
        <a className="sb-link" href="#ps-b-anova-theory">ANOVA Decomposition &amp; F-Test</a>
        <a className="sb-link" href="#ps-b-anova-method">ANOVA Table Procedure</a>
        <a className="sb-link" href="#ps-b-anova-examples">Worked Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-b-anova-checkpoint">Checkpoint Quiz</a>}
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Hypothesis Testing &amp; Regression · Part {part} of 2</div>
          <h1 className="ch-title">Analysis of Variance (ANOVA)</h1>
          <p className="ch-sub">
            {advanced
              ? "Effect size η² and ω², Tukey HSD & Bonferroni post-hoc comparisons, two-way factorial ANOVA, and assumptions"
              : "Partitioning total sum of squares SST = SSB + SSW, degrees of freedom, mean squares, and the omnibus F-test"}
          </p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-b-anova-theory">
          <div className="sec-badge">Section {part}.1 · Formal Foundations</div>
          <h2 className="sec-title">
            {advanced ? "Effect sizes, post-hoc comparisons & two-way designs" : "One-way model, sum of squares identity & F-ratio"}
          </h2>
          {advanced ? (
            <>
              <TheoryBox title="Proportion of variance explained (η²) and post-hoc multiple comparisons">
                <p>
                  {"1) Effect Size: Eta-squared $\\eta^2 = \\frac{\\text{SSB}}{\\text{SST}} = 1 - \\frac{\\text{SSW}}{\\text{SST}}$ measures the fraction of total sample variation explained by group membership. 2) Post-Hoc Comparisons: Rejecting $H_0$ in one-way ANOVA only shows that at least two means differ. To control family-wise error across all $m = \\binom{k}{2}$ pairwise tests, Bonferroni uses significance level $\\alpha/m$ per pair, while Tukey's Honestly Significant Difference (HSD) declares $|\\bar{Y}_{i\\cdot}-\\bar{Y}_{j\\cdot}|$ significant when it exceeds $q_{\\alpha,\\,k,\\,N-k}\\sqrt{\\text{MSW}/n}$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Two-way factorial ANOVA and interaction effects">
                <p>
                  {"With Factor A ($a$ levels), Factor B ($b$ levels), and $r$ replicates per cell ($N=abr$), the total sum of squares decomposes into $\\text{SST} = \\text{SS}_A + \\text{SS}_B + \\text{SS}_{AB} + \\text{SSE}$ with degrees of freedom $N-1 = (a-1) + (b-1) + (a-1)(b-1) + ab(r-1)$. Always test the interaction $F_{AB} = \\text{MS}_{AB}/\\text{MSE}$ before interpreting main effects."}
                </p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="One-way ANOVA model and sum-of-squares decomposition">
                <p>
                  {"To test $H_0:\\mu_1 = \\mu_2 = \\dots = \\mu_k$ across $k$ independent normal populations with common variance $\\sigma^2$, write $Y_{ij} = \\mu_i + \\varepsilon_{ij}$ with $\\varepsilon_{ij} \\stackrel{\\text{iid}}{\\sim} \\mathcal{N}(0,\\sigma^2)$. For total sample size $N = \\sum_{i=1}^k n_i$, the fundamental ANOVA identity partitions total variation around the grand mean $\\bar{Y}_{\\cdot\\cdot}$ into between-group and within-group components: $\\text{SST} = \\text{SSB} + \\text{SSW}$, where $\\text{SSB} = \\sum_{i=1}^k n_i(\\bar{Y}_{i\\cdot}-\\bar{Y}_{\\cdot\\cdot})^2$ and $\\text{SSW} = \\sum_{i=1}^k \\sum_{j=1}^{n_i}(Y_{ij}-\\bar{Y}_{i\\cdot})^2$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Degrees of freedom, mean squares, and the F-statistic">
                <p>
                  {"Degrees of freedom partition additively: $N - 1 = (k - 1) + (N - k)$. Define Mean Square Between $\\text{MSB} = \\frac{\\text{SSB}}{k-1}$ and Mean Square Within $\\text{MSW} = \\frac{\\text{SSW}}{N-k}$. Regardless of $H_0$, $E[\\text{MSW}] = \\sigma^2$. Under $H_0$, $E[\\text{MSB}] = \\sigma^2$ as well, and $F = \\frac{\\text{MSB}}{\\text{MSW}} \\sim F_{k-1,\\,N-k}$. Large values of $F$ reject $H_0$."}
                </p>
              </TheoremBox>
            </>
          )}
        </section>

        <section className="section" id="ps-b-anova-method">
          <div className="sec-badge">Section {part}.2 · Step-by-Step Method</div>
          <h2 className="sec-title">Working procedure</h2>
          <ProcedureBox
            title={advanced ? "Post-hoc pairwise testing and two-way ANOVA workflow" : "Completing a one-way ANOVA table"}
            steps={
              advanced
                ? [
                    "Compute $\\eta^2 = \\text{SSB}/\\text{SST}$ to quantify the practical magnitude of group differences.",
                    "Count pairwise comparisons $m = k(k-1)/2$ and compute the pooled standard error $\\sqrt{\\text{MSW}(1/n_i + 1/n_j)}$ for any pair $(i,j)$.",
                    "In two-way ANOVA, compute $F_{AB} = \\text{MS}_{AB}/\\text{MSE}$ first; if significant, compare cell means within each factor level rather than marginal means.",
                  ]
                : [
                    "Compute group means $\\bar{y}_{i\\cdot}$, grand mean $\\bar{y}_{\\cdot\\cdot}$, $\\text{SSB} = \\sum n_i(\\bar{y}_{i\\cdot}-\\bar{y}_{\\cdot\\cdot})^2$, and $\\text{SSW} = \\sum (n_i-1)s_i^2$.",
                    "Set degrees of freedom $df_B = k - 1$, $df_W = N - k$, and check $df_B + df_W = N - 1$.",
                    "Divide by degrees of freedom: $\\text{MSB} = \\text{SSB}/(k-1)$ and $\\text{MSW} = \\text{SSW}/(N-k)$.",
                    "Compute $F = \\text{MSB}/\\text{MSW}$ and compare with $F_{\\alpha,\\,k-1,\\,N-k}$ (upper-tail test).",
                  ]
            }
          />
        </section>

        <section className="section" id="ps-b-anova-examples">
          <div className="sec-badge">Section {part}.3 · Certificate Worked Examples</div>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={1}
                title="Computing η² and Bonferroni-adjusted pairwise threshold"
                setup="A one-way ANOVA across $k = 4$ teaching methods ($N = 40$) yields $\text{SSB} = 180$ and $\text{SSW} = 220$. Find $\eta^2$, the number of pairwise comparisons $m$, and the Bonferroni per-comparison $\alpha^*$ for family-wise $\alpha = 0.05$."
                steps={[
                  "Total sum of squares: $\\text{SST} = \\text{SSB} + \\text{SSW} = 180 + 220 = 400$.",
                  "Effect size: $\\eta^2 = \\text{SSB}/\\text{SST} = 180 / 400 = 0.45$ ($45\\%$ of total variance explained).",
                  "Number of pairs: $m = \\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$.",
                  "Bonferroni per-test level: $\\alpha^* = 0.05 / 6 \\approx 0.00833$.",
                ]}
                result="$\eta^2 = 0.45$, $m = 6$ pairs, and Bonferroni threshold $\alpha^* = 0.00833$."
                check="Running $6$ unadjusted tests at $0.05$ inflates family-wise Type I error to $1 - 0.95^6 \approx 26.5\%$."
              />
              <WorkedExample
                number={2}
                title="Tukey HSD minimum significant difference"
                setup="In a balanced one-way ANOVA with $k = 3$ groups of size $n = 9$ each ($N = 27$), $\text{MSW} = 18.0$. Given studentized range critical value $q_{0.05, 3, 24} = 3.53$, find the Tukey HSD cutoff and test whether $\bar{y}_1 = 50$ and $\bar{y}_2 = 44$ differ significantly."
                steps={[
                  "Compute standard error of a group mean: $\\sqrt{\\text{MSW}/n} = \\sqrt{18.0 / 9} = \\sqrt{2} \\approx 1.4142$.",
                  "Multiply by $q_{0.05,3,24}$: $\\text{HSD} = 3.53 \\times 1.4142 \\approx 4.992$.",
                  "Compare observed gap $|\\bar{y}_1 - \\bar{y}_2| = |50 - 44| = 6.0 > 4.992$, so the difference is statistically significant at $\\alpha = 0.05$.",
                ]}
                result="$\text{HSD} \approx 4.99$; since $|50 - 44| = 6.0 > 4.99$, Groups 1 and 2 differ significantly."
                check="Tukey HSD uses $\sqrt{\text{MSW}/n}$ (not $\sqrt{2\,\text{MSW}/n}$) because the $\sqrt{2}$ factor is built into the $q$ table."
                mistake="Do not multiply by $\sqrt{2}$ when using the studentized range statistic $q$."
              />
              <WorkedExample
                number={3}
                title="Two-way factorial ANOVA degrees of freedom and F-ratios"
                setup="An experiment studies $a = 2$ catalysts and $b = 3$ temperatures with $r = 4$ replicates per cell ($N = 24$). Given $\text{SS}_A = 20$, $\text{SS}_B = 60$, $\text{SS}_{AB} = 36$, and $\text{SSE} = 72$, compute all degrees of freedom and the three $F$-statistics."
                steps={[
                  "Degrees of freedom: $df_A = 2-1 = 1$, $df_B = 3-1 = 2$, $df_{AB} = (1)(2) = 2$, and $df_E = 2 \\times 3 \\times (4-1) = 18$.",
                  "Mean squares: $\\text{MS}_A = 20/1 = 20$, $\\text{MS}_B = 60/2 = 30$, $\\text{MS}_{AB} = 36/2 = 18$, and $\\text{MSE} = 72/18 = 4$.",
                  "F-ratios: $F_{AB} = 18/4 = 4.50$, $F_A = 20/4 = 5.00$, and $F_B = 30/4 = 7.50$.",
                ]}
                result="$F_{AB} = 4.50$ ($df=2,18$), $F_A = 5.00$ ($df=1,18$), and $F_B = 7.50$ ($df=2,18$)."
                check="Total $df = 1 + 2 + 2 + 18 = 23 = N - 1$."
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="Completing a one-way ANOVA table from summary sums of squares"
                setup="A study compares $k = 3$ fertilizer treatments across $N = 18$ plots ($n_i = 6$ per group). You are given $\text{SSB} = 84$ and $\text{SST} = 144$. Find $\text{SSW}$, $df_B$, $df_W$, $\text{MSB}$, $\text{MSW}$, and $F$."
                steps={[
                  "By the sum-of-squares identity, $\\text{SSW} = \\text{SST} - \\text{SSB} = 144 - 84 = 60$.",
                  "Degrees of freedom: $df_B = k - 1 = 3 - 1 = 2$ and $df_W = N - k = 18 - 3 = 15$.",
                  "Mean squares: $\\text{MSB} = 84 / 2 = 42$ and $\\text{MSW} = 60 / 15 = 4$.",
                  "Test statistic: $F = \\text{MSB} / \\text{MSW} = 42 / 4 = 10.50$.",
                ]}
                result="$\text{SSW} = 60$, $df = (2, 15)$, $\text{MSB} = 42$, $\text{MSW} = 4$, and $F = 10.50$."
                check="Since $F_{0.05, 2, 15} = 3.68 < 10.50$, we reject $H_0:\mu_1=\mu_2=\mu_3$ at $\alpha = 0.05$."
              />
              <WorkedExample
                number={2}
                title="Computing SSB, SSW, and F directly from group means and variances"
                setup="Three balanced groups of size $n = 5$ ($N = 15$) have sample means $\bar{y}_1 = 10, \bar{y}_2 = 13, \bar{y}_3 = 16$ and sample variances $s_1^2 = 4, s_2^2 = 5, s_3^2 = 6$. Compute the ANOVA $F$-statistic."
                steps={[
                  "Grand mean for equal group sizes: $\\bar{y}_{\\cdot\\cdot} = (10 + 13 + 16)/3 = 13$.",
                  "Between-group SS: $\\text{SSB} = 5[(10-13)^2 + (13-13)^2 + (16-13)^2] = 5(9 + 0 + 9) = 90$, so $\\text{MSB} = 90/(3-1) = 45$.",
                  "Within-group SS: $\\text{SSW} = (5-1)(4 + 5 + 6) = 4(15) = 60$, so $\\text{MSW} = 60/(15-3) = 5$.",
                  "F-ratio: $F = \\text{MSB}/\\text{MSW} = 45 / 5 = 9.0$.",
                ]}
                result="$\text{SSB} = 90$, $\text{SSW} = 60$, and $F = 9.0$ on $(2, 12)$ degrees of freedom."
                check="For balanced designs, $\text{MSW}$ is simply the average of the group sample variances: $(4+5+6)/3 = 5$."
              />
              <WorkedExample
                number={3}
                title="Equivalence of two-group ANOVA and the two-sample pooled t-test ($F = t^2$)"
                setup="A two-sample pooled $t$-test comparing $k = 2$ groups ($N = 22$) yields $t = -2.60$. What is the exact $F$-statistic and denominator degrees of freedom if the same data are analyzed with one-way ANOVA?"
                steps={[
                  "For $k = 2$ groups, an $F_{1, N-2}$ ratio is the exact square of the pooled two-sample $t_{N-2}$ statistic: $F = t^2$.",
                  "Compute $F = (-2.60)^2 = 6.76$ with $(k-1, N-k) = (1, 20)$ degrees of freedom.",
                ]}
                result="$F = 6.76$ with $(1, 20)$ degrees of freedom, giving the exact same two-sided $p$-value."
                check="$t^2_{20} \equiv F_{1,20}$ in distribution."
              />
            </>
          )}
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-ps-b-anova-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Analysis of Variance (ANOVA)"
            scoreId="score-ps-b-anova-checkpoint"
            section="ps-b-anova-checkpoint"
            questions={PS_B_ANOVA_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-b-anova-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Part 2</h2>
            <p>Part 2 covers $\eta^2$ effect sizes, Tukey HSD and Bonferroni post-hoc tests, two-way factorial ANOVA, and the 20-question checkpoint (80% to unlock completion).</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
