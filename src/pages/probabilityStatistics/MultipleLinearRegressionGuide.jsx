import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_B_MLR_QUIZ } from "../../data/psNewModulesQuizzes";

export default function MultipleLinearRegressionGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Multiple Linear Regression (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-sub">Probability &amp; Statistics</div>
          <div className="sb-title">Multiple Linear Regression</div>
        </div>
        <div className="sb-group">Part {part} · Linear Models</div>
        <a className="sb-link" href="#ps-b-mlr-theory">Matrix OLS &amp; Inference</a>
        <a className="sb-link" href="#ps-b-mlr-method">Estimation &amp; Diagnostics</a>
        <a className="sb-link" href="#ps-b-mlr-examples">Worked Examples</a>
        {advanced && <a className="sb-link" href="#quiz-ps-b-mlr-checkpoint">Checkpoint Quiz</a>}
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Hypothesis Testing &amp; Regression · Part {part} of 2</div>
          <h1 className="ch-title">Multiple Linear Regression</h1>
          <p className="ch-sub">
            {advanced
              ? "R² vs. adjusted R², omnibus F-test, partial F-tests for nested models, Variance Inflation Factor (VIF), and leverage"
              : "Matrix formulation y = Xβ + ε, normal equations, OLS estimator β̂ = (XᵀX)⁻¹Xᵀy, covariance σ²(XᵀX)⁻¹, and partial slopes"}
          </p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-b-mlr-theory">
          <div className="sec-badge">Section {part}.1 · Formal Foundations</div>
          <h2 className="sec-title">
            {advanced ? "Model fit, nested F-tests & multicollinearity diagnostics" : "Matrix OLS, Gauss–Markov theorem & partial slopes"}
          </h2>
          {advanced ? (
            <>
              <TheoryBox title="R², Adjusted R², and omnibus/partial F-tests">
                <p>
                  {"With $\\text{SST} = \\text{SSR} + \\text{SSE}$ on $n$ observations and $p$ predictors ($p+1$ parameters including intercept), $R^2 = 1 - \\frac{\\text{SSE}}{\\text{SST}}$ never decreases when predictors are added, whereas Adjusted $R^2_{\\text{adj}} = 1 - \\frac{\\text{SSE}/(n-p-1)}{\\text{SST}/(n-1)}$ penalizes redundant variables. The omnibus $F = \\frac{\\text{SSR}/p}{\\text{SSE}/(n-p-1)} \\sim F_{p,\\,n-p-1}$ tests $H_0:\\beta_1=\\dots=\\beta_p=0$. To test dropping $q$ predictors (reduced model $R$ vs. full model $F$), use $F = \\frac{(\\text{SSE}_R - \\text{SSE}_F)/q}{\\text{SSE}_F/(n-p-1)} \\sim F_{q,\\,n-p-1}$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Multicollinearity (VIF), hat matrix leverage, and Cook's distance">
                <p>
                  {"1) Variance Inflation Factor: Regressing predictor $X_j$ on the other $p-1$ predictors gives $R_j^2$ and $\\text{VIF}_j = \\frac{1}{1-R_j^2}$; $\\text{VIF}_j > 10$ ($R_j^2 > 0.90$) signals severe multicollinearity. 2) Hat matrix $H = X(X^TX)^{-1}X^T$ maps $\\hat{y} = Hy$ with leverages $h_{ii} = H_{ii}$ satisfying $\\sum_{i=1}^n h_{ii} = p+1$ (average leverage $\\bar{h} = (p+1)/n$)."}
                </p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="Matrix formulation and Ordinary Least Squares (OLS)">
                <p>
                  {"For $n$ observations and $p$ predictors, the linear model is $y = X\\beta + \\varepsilon$, where $X$ is the $n \\times (p+1)$ design matrix (first column all $1$s for the intercept), $\\beta = (\\beta_0,\\beta_1,\\dots,\\beta_p)^T$, and $E[\\varepsilon]=0, \\text{Cov}(\\varepsilon)=\\sigma^2 I_n$. Minimizing $\\|y - X\\beta\\|^2$ yields the normal equations $X^TX\\hat{\\beta} = X^Ty$ and unique solution $\\hat{\\beta} = (X^TX)^{-1}X^Ty$ whenever $X$ has full column rank $p+1$."}
                </p>
              </TheoryBox>
              <TheoremBox title="Sampling properties, unbiased σ̂², and individual t-tests">
                <p>
                  {"Under the Gauss–Markov assumptions, $\\hat{\\beta}$ is BLUE with $E[\\hat{\\beta}]=\\beta$ and $\\text{Cov}(\\hat{\\beta}) = \\sigma^2(X^TX)^{-1}$. The unbiased error variance estimator is $S^2 = \\text{MSE} = \\frac{\\text{SSE}}{n-p-1} = \\frac{e^Te}{n-p-1}$, where residuals $e = y - \\hat{y}$ satisfy $X^Te = 0$. Under normal errors, $t_j = \\frac{\\hat{\\beta}_j - \\beta_{j,0}}{S\\sqrt{[(X^TX)^{-1}]_{jj}}} \\sim t_{n-p-1}$."}
                </p>
              </TheoremBox>
            </>
          )}
        </section>

        <section className="section" id="ps-b-mlr-method">
          <div className="sec-badge">Section {part}.2 · Step-by-Step Method</div>
          <h2 className="sec-title">Working procedure</h2>
          <ProcedureBox
            title={advanced ? "Comparing nested models and diagnosing collinearity" : "Fitting and testing coefficients in multiple regression"}
            steps={
              advanced
                ? [
                    "Compute $R^2 = 1 - \\text{SSE}/\\text{SST}$ and $R^2_{\\text{adj}} = 1 - (1-R^2)\\frac{n-1}{n-p-1}$.",
                    "To test a subset of $q$ predictors, compute $F = \\frac{(\\text{SSE}_R - \\text{SSE}_F)/q}{\\text{MSE}_F}$ with $(q, n-p-1)$ degrees of freedom.",
                    "Check $\\text{VIF}_j = 1/(1-R_j^2)$ for each predictor and flag high-leverage points with $h_{ii} > 2(p+1)/n$.",
                  ]
                : [
                    "Form $X^TX$ and $X^Ty$, solve $\\hat{\\beta} = (X^TX)^{-1}X^Ty$, and interpret $\\hat{\\beta}_j$ as the change in $E[Y]$ per unit increase in $X_j$ holding all other predictors constant.",
                    "Compute $\\text{MSE} = \\text{SSE}/(n-p-1)$ using error degrees of freedom $df_E = n - p - 1$.",
                    "Extract standard errors $\\text{SE}(\\hat{\\beta}_j) = \\sqrt{\\text{MSE}\\cdot [(X^TX)^{-1}]_{jj}}$ and form $t$-statistics or confidence intervals.",
                  ]
            }
          />
        </section>

        <section className="section" id="ps-b-mlr-examples">
          <div className="sec-badge">Section {part}.3 · Certificate Worked Examples</div>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={1}
                title="Computing R², Adjusted R², and the omnibus F-statistic"
                setup="A multiple regression with $p = 4$ predictors and $n = 25$ observations yields $\text{SST} = 500$ and $\text{SSE} = 100$. Find $R^2$, $R^2_{\text{adj}}$, and the omnibus $F$-statistic."
                steps={[
                  "Compute $R^2 = 1 - \\frac{\\text{SSE}}{\\text{SST}} = 1 - \\frac{100}{500} = 0.80$.",
                  "Error degrees of freedom: $df_E = n - p - 1 = 25 - 4 - 1 = 20$; total $df_T = n - 1 = 24$.",
                  "Adjusted $R^2$: $R^2_{\\text{adj}} = 1 - \\frac{100 / 20}{500 / 24} = 1 - \\frac{5}{20.8333} = 1 - 0.24 = 0.76$.",
                  "Regression sum of squares $\\text{SSR} = 500 - 100 = 400$, so $F = \\frac{400 / 4}{100 / 20} = \\frac{100}{5} = 20.0$ on $(4, 20)$ $df$.",
                ]}
                result="$R^2 = 0.80$, $R^2_{\text{adj}} = 0.76$, and omnibus $F = 20.0$ ($df = 4, 20$)."
                check="$R^2_{\text{adj}} < R^2$ whenever $p \ge 1$."
              />
              <WorkedExample
                number={2}
                title="Partial F-test for dropping a subset of predictors"
                setup="In $n = 36$ observations, a full model with $p = 5$ predictors has $\text{SSE}_F = 120$. A reduced model retaining only $3$ predictors ($q = 2$ dropped) has $\text{SSE}_R = 156$. Test $H_0: \beta_4 = \beta_5 = 0$."
                steps={[
                  "Full model error degrees of freedom: $df_F = n - p - 1 = 36 - 5 - 1 = 30$, so $\\text{MSE}_F = 120 / 30 = 4.0$.",
                  "Extra sum of squares from the $q = 2$ predictors: $\\text{SSE}_R - \\text{SSE}_F = 156 - 120 = 36$.",
                  "Partial $F$-statistic: $F = \\frac{36 / 2}{4.0} = \\frac{18}{4.0} = 4.50$ with $(2, 30)$ degrees of freedom.",
                ]}
                result="$F = 4.50$ on $(2, 30)$ degrees of freedom ($p < 0.05$ since $F_{0.05,2,30} = 3.32$)."
                check="Dropping predictors can only increase $\text{SSE}$ ($\text{SSE}_R \ge \text{SSE}_F$)."
              />
              <WorkedExample
                number={3}
                title="Variance Inflation Factor (VIF) and standard error inflation"
                setup="When predictor $X_3$ is regressed on $X_1$ and $X_2$, the coefficient of determination is $R_3^2 = 0.96$. Find $\text{VIF}_3$ and the factor by which $\text{SE}(\hat{\beta}_3)$ is inflated compared to orthogonal predictors."
                steps={[
                  "Compute $\\text{VIF}_3 = \\frac{1}{1 - R_3^2} = \\frac{1}{1 - 0.96} = \\frac{1}{0.04} = 25$.",
                  "Standard error scales with $\\sqrt{\\text{VIF}_3} = \\sqrt{25} = 5.0$.",
                ]}
                result="$\text{VIF}_3 = 25$, inflating $\text{SE}(\hat{\beta}_3)$ by a factor of $5$."
                check="Since $\text{VIF}_3 = 25 > 10$, severe multicollinearity is present."
                mistake="$\text{VIF}$ multiplies the variance of $\hat{\beta}_j$; its square root $\sqrt{\text{VIF}}$ multiplies the standard error."
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="Solving the normal equations for an orthogonal design matrix"
                setup="Suppose $n = 4$ observations have centered orthogonal predictors so that $X^TX = \text{diag}(4, 10, 20)$ and $X^Ty = (24, 30, -40)^T$. Find the OLS estimate $\hat{\beta} = (\hat{\beta}_0, \hat{\beta}_1, \hat{\beta}_2)^T$."
                steps={[
                  "Invert the diagonal matrix: $(X^TX)^{-1} = \\text{diag}(1/4,\\, 1/10,\\, 1/20)$.",
                  "Multiply $(X^TX)^{-1}X^Ty$: $\\hat{\\beta}_0 = 24/4 = 6.0$, $\\hat{\\beta}_1 = 30/10 = 3.0$, and $\\hat{\\beta}_2 = -40/20 = -2.0$.",
                ]}
                result="$\hat{\beta} = (6.0,\, 3.0,\, -2.0)^T$."
                check="$X^TX\hat{\beta} = (4(6), 10(3), 20(-2))^T = (24, 30, -40)^T = X^Ty$."
              />
              <WorkedExample
                number={2}
                title="Standard error and t-test for a partial regression slope"
                setup="In a regression with $n = 28$ observations and $p = 3$ predictors, $\text{SSE} = 96$ and the $(2,2)$ diagonal entry of $(X^TX)^{-1}$ is $0.09$. Given $\hat{\beta}_2 = 1.80$, compute $\text{SE}(\hat{\beta}_2)$ and the $t$-statistic for $H_0:\beta_2 = 0$."
                steps={[
                  "Error degrees of freedom: $df_E = n - p - 1 = 28 - 3 - 1 = 24$.",
                  "Unbiased error variance: $\\text{MSE} = \\text{SSE} / 24 = 96 / 24 = 4.0$.",
                  "Standard error: $\\text{SE}(\\hat{\\beta}_2) = \\sqrt{\\text{MSE} \\times [(X^TX)^{-1}]_{22}} = \\sqrt{4.0 \\times 0.09} = \\sqrt{0.36} = 0.60$.",
                  "t-statistic: $t = \\frac{1.80 - 0}{0.60} = 3.00$ with $df = 24$.",
                ]}
                result="$\text{SE}(\hat{\beta}_2) = 0.60$ and $t = 3.00$ ($df = 24$, reject $H_0$ at $\alpha=0.05$)."
                check="Remember to subtract $p+1 = 4$ parameters (3 slopes + 1 intercept) so $df = 24$, not $25$."
              />
              <WorkedExample
                number={3}
                title="Ceteris paribus interpretation of partial regression coefficients"
                setup="Predicted house price (in $\$1000$s) is $\hat{y} = 80 + 120 x_1 - 15 x_2$, where $x_1$ is area in $1000\text{ sq ft}$ and $x_2$ is distance to city center in miles. Interpret $\hat{\beta}_1 = 120$ and $\hat{\beta}_2 = -15$, and predict price for $x_1 = 2.0, x_2 = 4.0$."
                steps={[
                  "Holding distance $x_2$ constant, each additional $1000\\text{ sq ft}$ ($\\Delta x_1 = 1$) increases expected price by $\\$120{,}000$.",
                  "Holding area $x_1$ constant, each additional mile from center ($\\Delta x_2 = 1$) decreases expected price by $\\$15{,}000$.",
                  "At $(x_1,x_2)=(2.0,4.0)$: $\\hat{y} = 80 + 120(2.0) - 15(4.0) = 80 + 240 - 60 = 260$ ($\\$260{,}000$).",
                ]}
                result="Predicted price is $\$260{,}000$, with partial slopes $+120$ (holding $x_2$ fixed) and $-15$ (holding $x_1$ fixed)."
                check="Partial slopes differ from simple regression slopes whenever $x_1$ and $x_2$ are correlated."
              />
            </>
          )}
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-ps-b-mlr-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Multiple Linear Regression"
            scoreId="score-ps-b-mlr-checkpoint"
            section="ps-b-mlr-checkpoint"
            questions={PS_B_MLR_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-ps-b-mlr-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Part 2</h2>
            <p>{"Part 2 covers $R^2$ vs. Adjusted $R^2$, omnibus and partial $F$-tests, multicollinearity ($\\text{VIF}$), leverage diagnostics, and the 20-question checkpoint (80% to unlock completion)."}</p>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
