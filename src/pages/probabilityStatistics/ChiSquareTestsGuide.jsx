import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_B_CHISQ_QUIZ } from "../../data/psNewModulesQuizzes";

export default function ChiSquareTestsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Chi-Square Tests (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-sub">Probability &amp; Statistics</div>
          <div className="sb-title">Chi-Square Tests</div>
        </div>
        <div className="sb-group">Part {part} · Categorical Inference</div>
        <a className="sb-link" href="#ps-b-chisq-theory">Goodness-of-Fit &amp; Contingency</a>
        <a className="sb-link" href="#ps-b-chisq-method">Testing Procedure</a>
        <a className="sb-link" href="#ps-b-chisq-examples">Worked Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-b-chisq-checkpoint">Checkpoint Quiz</a>}
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Hypothesis Testing &amp; Regression · Part {part} of 2</div>
          <h1 className="ch-title">Chi-Square Tests</h1>
          <p className="ch-sub">
            {advanced
              ? "R × C contingency tables for independence and homogeneity, standardized Pearson residuals, odds ratios, and Cramér's V"
              : "Pearson's χ² goodness-of-fit statistic, expected count conditions, and degrees-of-freedom reduction for estimated parameters"}
          </p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-b-chisq-theory">
          <div className="sec-badge">Section {part}.1 · Formal Foundations</div>
          <h2 className="sec-title">
            {advanced ? "Contingency tables, residuals & association metrics" : "Pearson goodness-of-fit statistic & degrees of freedom"}
          </h2>
          {advanced ? (
            <>
              <TheoryBox title="Chi-square test of independence and homogeneity in R × C tables">
                <p>
                  {"Given an $R \\times C$ table of observed counts $O_{ij}$ with row totals $R_i$, column totals $C_j$, and grand total $N$, under $H_0$ (row and column variables are independent) the MLE expected count in cell $(i,j)$ is $E_{ij} = \\frac{R_i C_j}{N}$. The test statistic $\\chi^2 = \\sum_{i=1}^R \\sum_{j=1}^C \\frac{(O_{ij}-E_{ij})^2}{E_{ij}}$ converges under $H_0$ to $\\chi^2_{(R-1)(C-1)}$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Pearson residuals, 2×2 odds ratio, and Cramér's V">
                <p>
                  {"1) Standardized Pearson residual: $r_{ij} = \\frac{O_{ij}-E_{ij}}{\\sqrt{E_{ij}}}$ pinpoints which cells drive a significant $\\chi^2$ ($|r_{ij}| > 2$ indicates strong departure). 2) For a $2\\times 2$ table $\\binom{a\\;b}{c\\;d}$, the sample odds ratio is $\\widehat{\\text{OR}} = \\frac{ad}{bc}$ ($\\text{OR}=1$ under independence). 3) Cramér's $V = \\sqrt{\\frac{\\chi^2}{N\\min(R-1,C-1)}} \\in [0,1]$ measures association strength."}
                </p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="Pearson's chi-square goodness-of-fit (GOF) test">
                <p>
                  {"Suppose $N$ independent observations are classified into $k$ mutually exclusive categories with null probabilities $p_1^0,\\dots,p_k^0$ ($\\sum p_i^0 = 1$). With observed counts $O_i$ and expected counts $E_i = N p_i^0$, Pearson's statistic is $\\chi^2 = \\sum_{i=1}^k \\frac{(O_i - E_i)^2}{E_i}$. Large values indicate departure from the null model (always an upper-tail test)."}
                </p>
              </TheoryBox>
              <TheoremBox title="Degrees of freedom and the expected-count validity rule">
                <p>
                  {"If $m$ parameters of the null distribution are estimated from the categorized data via MLE, the asymptotic null distribution is $\\chi^2_{k - 1 - m}$ (when $p_i^0$ are fully specified by $H_0$, $m=0$ and $df = k-1$). For the chi-square approximation to be accurate, at least $80\\%$ of cells must have expected counts $E_i \\ge 5$ and every cell must have $E_i \\ge 1$."}
                </p>
              </TheoremBox>
            </>
          )}
        </section>

        <section className="section" id="ps-b-chisq-method">
          <div className="sec-badge">Section {part}.2 · Step-by-Step Method</div>
          <h2 className="sec-title">Working procedure</h2>
          <ProcedureBox
            title={advanced ? "Analyzing an R × C contingency table" : "Conducting a chi-square goodness-of-fit test"}
            steps={
              advanced
                ? [
                    "Compute row totals $R_i$, column totals $C_j$, and grand total $N$.",
                    "Calculate expected counts $E_{ij} = R_i C_j / N$ for each cell and verify $E_{ij} \\ge 5$.",
                    "Sum $(O_{ij} - E_{ij})^2 / E_{ij}$ over all $R \\times C$ cells and compare with $\\chi^2_{\\alpha,\\,(R-1)(C-1)}$.",
                    "Inspect Pearson residuals $(O_{ij}-E_{ij})/\\sqrt{E_{ij}}$ and compute Cramér's $V$ or $\\widehat{\\text{OR}}$.",
                  ]
                : [
                    "State $H_0: p_i = p_i^0$ for $i=1,\\dots,k$ and compute expected counts $E_i = N p_i^0$.",
                    "Verify that expected counts satisfy $E_i \\ge 5$ (combine sparse tail bins if needed).",
                    "Compute $\\chi^2 = \\sum_{i=1}^k (O_i - E_i)^2 / E_i$ and set $df = k - 1 - m$.",
                    "Reject $H_0$ if $\\chi^2 > \\chi^2_{\\alpha,\\,df}$.",
                  ]
            }
          />
        </section>

        <section className="section" id="ps-b-chisq-examples">
          <div className="sec-badge">Section {part}.3 · Certificate Worked Examples</div>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={1}
                title="2 × 2 contingency table test of independence and odds ratio"
                setup="In a study of $N = 200$ patients ($100$ treated, $100$ placebo), $60$ treated patients recover ($40$ do not) while $40$ placebo patients recover ($60$ do not). Compute $\chi^2$, $df$, and the sample odds ratio $\widehat{\text{OR}}$."
                steps={[
                  "Row totals are $R_1 = 100, R_2 = 100$; column totals are $C_1 = 60+40=100$ (recover) and $C_2 = 40+60=100$ (no recovery).",
                  "Every cell has expected count $E_{ij} = (100 \\times 100)/200 = 50$.",
                  "Compute $\\chi^2 = \\frac{(60-50)^2}{50} + \\frac{(40-50)^2}{50} + \\frac{(40-50)^2}{50} + \\frac{(60-50)^2}{50} = 2 + 2 + 2 + 2 = 8.00$.",
                  "With $df = (2-1)(2-1) = 1$ and $\\chi^2_{0.05,1} = 3.841$, we reject independence ($p \\approx 0.0047$).",
                  "Odds ratio: $\\widehat{\\text{OR}} = \\frac{60 \\times 60}{40 \\times 40} = \\frac{3600}{1600} = 2.25$.",
                ]}
                result="$\chi^2 = 8.00$ ($df = 1$, reject $H_0$), and $\widehat{\text{OR}} = 2.25$."
                check="Cramér's $V = \sqrt{8.00 / (200 \times 1)} = \sqrt{0.04} = 0.20$."
              />
              <WorkedExample
                number={2}
                title="Expected count and degrees of freedom in a 3 × 4 table"
                setup="A survey of $N = 300$ voters cross-classifies $R = 3$ age brackets by $C = 4$ policy preferences. Row 2 has total $R_2 = 90$ and Column 3 has total $C_3 = 80$. Find $E_{23}$ and the table's degrees of freedom."
                steps={[
                  "Expected count under independence: $E_{23} = \\frac{R_2 C_3}{N} = \\frac{90 \\times 80}{300} = 24.0$.",
                  "Degrees of freedom: $df = (R - 1)(C - 1) = (3 - 1)(4 - 1) = 6$.",
                ]}
                result="$E_{23} = 24.0$ and $df = 6$."
                check="Knowing $6$ interior cell counts alongside all fixed row and column margins uniquely determines the remaining $6$ cells."
              />
              <WorkedExample
                number={3}
                title="Identifying the driving cell via Pearson residuals"
                setup="In a contingency table cell, the observed count is $O_{12} = 33$ while the expected count under independence is $E_{12} = 25$. Compute the Pearson residual $r_{12}$ and its contribution to $\chi^2$."
                steps={[
                  "Compute Pearson residual: $r_{12} = \\frac{O_{12} - E_{12}}{\\sqrt{E_{12}}} = \\frac{33 - 25}{\\sqrt{25}} = \\frac{8}{5} = +1.60$.",
                  "Contribution to $\\chi^2$: $r_{12}^2 = (1.60)^2 = 2.56$.",
                ]}
                result="$r_{12} = +1.60$ and cell chi-square contribution $= 2.56$."
                check="$(33-25)^2/25 = 64/25 = 2.56$."
                mistake="The denominator of the chi-square contribution is $E_{ij}$, not $O_{ij}$."
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="Testing a die for fairness (uniform GOF)"
                setup="A six-sided die is rolled $N = 120$ times, yielding face counts $O = (14, 22, 18, 26, 16, 24)$. Test fairness at $\alpha = 0.05$ ($\chi^2_{0.05, 5} = 11.070$)."
                steps={[
                  "Under $H_0: p_1 = \\dots = p_6 = 1/6$, each expected count is $E_i = 120 / 6 = 20 \\ge 5$.",
                  "Squared deviations $(O_i - 20)^2$: $(-6)^2 + 2^2 + (-2)^2 + 6^2 + (-4)^2 + 4^2 = 36 + 4 + 4 + 36 + 16 + 16 = 112$.",
                  "Divide by $E_i = 20$: $\\chi^2 = 112 / 20 = 5.60$ with $df = 6 - 1 = 5$.",
                  "Since $5.60 < 11.070$, fail to reject $H_0$: the data are consistent with a fair die.",
                ]}
                result="$\chi^2 = 5.60$ ($df = 5$, $p > 0.05$): do not reject fairness."
                check="Sum of deviations $\sum (O_i - E_i) = -6+2-2+6-4+4 = 0$."
              />
              <WorkedExample
                number={2}
                title="Mendelian 9:3:3:1 genetic ratio goodness-of-fit"
                setup="In $N = 160$ pea plants, Mendel's $9:3:3:1$ model predicts probabilities $(9/16, 3/16, 3/16, 1/16)$. The observed counts are $O = (96, 24, 28, 12)$. Compute $\chi^2$ and $df$."
                steps={[
                  "Compute expected counts: $E = 160 \\times (9/16, 3/16, 3/16, 1/16) = (90, 30, 30, 10)$.",
                  "Compute cell terms: $\\frac{(96-90)^2}{90} = \\frac{36}{90} = 0.40$; $\\frac{(24-30)^2}{30} = \\frac{36}{30} = 1.20$; $\\frac{(28-30)^2}{30} = \\frac{4}{30} \\approx 0.133$; $\\frac{(12-10)^2}{10} = \\frac{4}{10} = 0.40$.",
                  "Sum: $\\chi^2 = 0.40 + 1.20 + 0.133 + 0.40 = 2.133$ with $df = 4 - 1 = 3$.",
                ]}
                result="$\chi^2 \approx 2.133$ on $df = 3$ (well below $\chi^2_{0.05,3} = 7.815$)."
                check="Expected counts sum to $90 + 30 + 30 + 10 = 160 = N$."
              />
              <WorkedExample
                number={3}
                title="Degrees of freedom when fitting a Poisson distribution to count bins"
                setup="Defect counts per wafer are grouped into $k = 6$ bins ($0, 1, 2, 3, 4, \ge 5$). The Poisson rate $\hat{\lambda}$ is estimated from the sample before computing expected bin probabilities. What is the correct degrees of freedom for the GOF test?"
                steps={[
                  "There are $k = 6$ categories and $m = 1$ estimated parameter ($\\hat{\\lambda}$).",
                  "Apply $df = k - 1 - m = 6 - 1 - 1 = 4$.",
                ]}
                result="$df = 4$."
                check="We lose $1$ degree of freedom from $\sum E_i = N$ and $1$ degree of freedom from estimating $\lambda$."
                mistake="Do not use $df = k - 1 = 5$ when parameters of the null distribution are estimated from the sample."
              />
            </>
          )}
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-ps-b-chisq-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Chi-Square Tests"
            scoreId="score-ps-b-chisq-checkpoint"
            section="ps-b-chisq-checkpoint"
            questions={PS_B_CHISQ_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-b-chisq-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Part 2</h2>
            <p>Part 2 covers $R\times C$ contingency tables, standardized Pearson residuals, $2\times 2$ odds ratios, Cramér's $V$, and the 20-question checkpoint (80% to unlock completion).</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
