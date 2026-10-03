import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, PracticalTheory, RealLifeUse, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_B_NUMERICAL_METHODS_QUIZ } from "../../data/calcAgDev3Quizzes";

function Divider() {
  return <hr className="divider" />;
}

function CurriculumBadge({ code }) {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.4rem 0.85rem",
        borderRadius: "999px",
        background: "rgba(13, 148, 136, 0.12)",
        border: "1px solid rgba(13, 148, 136, 0.3)",
        color: "var(--teal)",
        fontSize: "0.85rem",
        fontWeight: 600,
        marginBottom: "1.25rem",
      }}
    >
      <span>📚 Curriculum Ref:</span>
      <span>{code}</span>
    </div>
  );
}

export default function NumericalMethodsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Numerical Methods: Quadrature & Error Bounds (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Numerical · Part 2</div></div>
          <a className="sb-link" href="#simpsons-rule">Simpson's 1/3 Rule</a>
          <a className="sb-link" href="#error-bounds">Theoretical Error Bounds</a>
          <a className="sb-link" href="#richardson-romberg">Richardson &amp; Romberg</a>
          <a className="sb-link" href="#numerical-proc">Numerical Computation Routine</a>
          <a className="sb-link" href="#num-ex2">Advanced Worked Examples</a>
          <a className="sb-link" href="#quiz-numerical-methods-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module B: Advanced Volume &amp; Numerical · Part 2 of 2</div>
            <h1 className="ch-title">Simpson's Rule, Error Bounds &amp; Romberg Integration</h1>
            <p className="ch-sub">Parabolic quadrature, fourth-order accuracy, and asymptotic error extrapolation</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-101 / Math-102 Single-Variable Calculus · Module B" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we evaluate Simpson's 1/3 Rule, establishing its $O(h^4)$ convergence and exact integration of cubics. We formulate rigorous error bounds for both Trapezoidal and Simpson rules and develop Richardson extrapolation into Romberg integration."}
            </p>
          </div>
          <Divider />

          <section className="section" id="simpsons-rule">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Simpson's 1/3 Rule</h2>
            <TheoryBox title="Parabolic Interpolation Formula">
              <p>
                {"Simpson's 1/3 Rule fits parabolic segments across pairs of adjacent subintervals. It requires an **even number of subintervals** $n$ with step size $h = \\frac{b - a}{n}$:"}
              </p>
              <p>
                {"$$S_n = \\frac{h}{3} \\left[ f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + 2f(x_4) + \\dots + 4f(x_{n-1}) + f(x_n) \\right]$$"}
              </p>
              <p>
                {"The alternating weights follow the pattern $1, 4, 2, 4, 2, \\dots, 4, 1$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="error-bounds">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">Theoretical Error Bounds</h2>
            <TheoryBox title="Truncation Error Formulas">
              <p>
                {"• **Trapezoidal Rule Error:**\n$$|E_T| \\le \\frac{K (b - a)^3}{12 n^2}, \\quad \\text{where } K = \\max_{x \\in [a, b]} |f''(x)|$$\n• **Simpson's Rule Error:**\n$$|E_S| \\le \\frac{M (b - a)^5}{180 n^4}, \\quad \\text{where } M = \\max_{x \\in [a, b]} |f^{(4)}(x)|$$"}
              </p>
              <p>
                {"Because $E_S$ depends on the fourth derivative $f^{(4)}(x)$, Simpson's Rule is **exact with zero error** for all polynomials of degree $\\le 3$ (constants, linears, quadratics, and cubics)!"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="richardson-romberg">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Richardson Extrapolation and Romberg Integration</h2>
            <TheoryBox title="Accelerating Convergence">
              <p>
                {"Combining the Trapezoidal approximations with step sizes $h$ and $h/2$ eliminates the leading $O(h^2)$ error term:"}
              </p>
              <p>
                {"$$R = \\frac{4 T_{2n} - T_n}{3}$$"}
              </p>
              <p>
                {"This extrapolated value matches the Simpson's estimate and provides $O(h^4)$ accuracy with zero additional function evaluations."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="numerical-proc">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Numerical Quadrature Routine</h2>
            <ProcedureBox title="Step-by-Step Quadrature Procedure" steps={[
              "Determine the interval [a, b] and verify that the number of subintervals n is even for Simpson's rule.",
              "Compute step size h = (b - a) / n and generate the node grid x_i = a + i·h.",
              "Evaluate function ordinates y_i = f(x_i) to appropriate precision.",
              "For Trapezoidal rule: apply weights [1, 2, 2, ..., 2, 1] scaled by h/2.",
              "For Simpson's rule: apply weights [1, 4, 2, 4, ..., 4, 1] scaled by h/3.",
              "Compute upper bound on derivatives |f''(x)| or |f⁴(x)| to establish guaranteed error bounds.",
            ]} />
          </section>

          <section className="section" id="num-ex2">
            <h2 className="sec-title">Advanced Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Simpson's Rule Approximation and Error Bound for 1/x"
              setup="Approximate $\int_1^2 \frac{1}{x} dx$ using Simpson's Rule with $n = 4$, and find the theoretical upper bound on error."
              steps={[
                "Step size: $h = \\frac{2 - 1}{4} = 0.25$. Nodes: $x_0 = 1.0, x_1 = 1.25, x_2 = 1.5, x_3 = 1.75, x_4 = 2.0$.",
                "Function values: $y_0 = 1, y_1 = 0.8, y_2 = 2/3 \\approx 0.6667, y_3 = 4/7 \\approx 0.5714, y_4 = 0.5$.",
                "Apply Simpson's 1/3 formula: $S_4 = \\frac{0.25}{3} [1 + 4(0.8) + 2(2/3) + 4(4/7) + 0.5]$.",
                "Sum terms: $1 + 3.2 + 1.3333 + 2.2857 + 0.5 = 8.3190$.",
                "Multiply: $S_4 = \\frac{0.25}{3} \\times 8.319047 \\approx 0.693254$.",
                "Exact value is $\\ln 2 \\approx 0.693147$. Actual error is $|0.693254 - 0.693147| = 0.000107$.",
                "Theoretical error bound: $f(x) = x^{-1} \\implies f^{(4)}(x) = 24 x^{-5}$. On $[1, 2]$, maximum occurs at $x = 1$: $M = 24$.",
                "Error bound: $|E_S| \\le \\frac{24 (2 - 1)^5}{180 (4)^4} = \\frac{24}{180 \\times 256} = \\frac{24}{46080} \\approx 0.000521$. Actual error $(0.000107) < 0.000521$."
              ]}
              result="S_4 \approx 0.693254, \quad \text{Actual Error } = 1.07 \times 10^{-4}, \quad \text{Error Bound } \le 5.21 \times 10^{-4}"
              check="Actual error is strictly below theoretical bound. Confirms 4th-order convergence."
            />
          </section>

          <GuideMcqSection
            id="quiz-numerical-methods-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Numerical Methods Checkpoint"
            scoreId="score-numerical-methods-checkpoint"
            section="numerical-methods-checkpoint"
            questions={CALC_B_NUMERICAL_METHODS_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-numerical-methods-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Numerical Methods: Newton-Raphson & Trapezoidal (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Numerical · Part 1</div></div>
        <a className="sb-link" href="#newton-raphson">Newton-Raphson Method</a>
        <a className="sb-link" href="#trapezoidal-rule">The Trapezoidal Rule</a>
        <a className="sb-link" href="#numerical-ex1">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module B: Advanced Volume &amp; Numerical · Part 1 of 2</div>
          <h1 className="ch-title">Root Finding &amp; Trapezoidal Quadrature</h1>
          <p className="ch-sub">Linear approximations, quadratic root convergence, and piecewise-linear numerical integration</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-101 / Math-102 Single-Variable Calculus · Module B" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"Analytical antidifferentiation and root isolation are often impossible for transcendental functions. In this first part, we formulate the Newton-Raphson root-finding algorithm and the composite Trapezoidal Rule."}
          </p>
        </div>
        <Divider />

        <section className="section" id="newton-raphson">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">The Newton-Raphson Method</h2>
          <TheoryBox title="Iterative Tangent Linearization">
            <p>
              {"To solve $f(x) = 0$, replace $f(x)$ with its tangent line approximation at current iterate $x_n$:"}
            </p>
            <p>
              {"$$y - f(x_n) = f'(x_n)(x - x_n) \\implies x_{n+1} = x_n - \\frac{f(x_n)}{f'(x_n)}$$"}
            </p>
            <p>
              {"• **Quadratic Convergence:** Near a simple root where $f'(r) \\neq 0$, the error satisfies $|e_{n+1}| \\approx M |e_n|^2$.\n• **Failure Modes:** Fails if $f'(x_n) = 0$ (division by zero), if iterates cycle infinitely, or if the starting value $x_0$ is far from the basin of attraction."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="trapezoidal-rule">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">The Composite Trapezoidal Rule</h2>
          <TheoryBox title="Piecewise Linear Quadrature">
            <p>
              {"Dividing $[a, b]$ into $n$ subintervals of equal width $h = \\frac{b - a}{n}$:"}
            </p>
            <p>
              {"$$T_n = \\frac{h}{2} \\left[ f(x_0) + 2f(x_1) + 2f(x_2) + \\dots + 2f(x_{n-1}) + f(x_n) \\right]$$"}
            </p>
            <p>
              {"The error satisfies $|E_T| \\le \\frac{K(b - a)^3}{12n^2}$ with $K = \\max |f''(x)|$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="numerical-ex1">
          <h2 className="sec-title">Worked Numerical Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Newton-Raphson Iteration for a Transcendental Root"
            setup="Find the root of $f(x) = x^3 - x - 1 = 0$ accurate to 4 decimal places starting from $x_0 = 1.5$."
            steps={[
              "Compute derivative: $f'(x) = 3x^2 - 1$.",
              "Iteration 1: $f(1.5) = (1.5)^3 - 1.5 - 1 = 3.375 - 2.5 = 0.875$. $f'(1.5) = 3(2.25) - 1 = 5.75$.",
              "$$x_1 = 1.5 - \\frac{0.875}{5.75} = 1.5 - 0.152174 = 1.347826$$",
              "Iteration 2: $f(1.347826) = 0.100682$, $f'(1.347826) = 3(1.816635) - 1 = 4.449905$.",
              "$$x_2 = 1.347826 - \\frac{0.100682}{4.449905} = 1.347826 - 0.022626 = 1.325200$$",
              "Iteration 3: $f(1.325200) = 0.002058$, $f'(1.325200) = 4.268468$.",
              "$$x_3 = 1.325200 - \\frac{0.002058}{4.268468} = 1.324718$$"
            ]}
            result="x \approx 1.3247 \text{ (The plastic number)}"
            check="Verify f(1.324718) = 1.324718³ - 1.324718 - 1 = 2.324718 - 2.324718 = 0.000000."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for Simpson's 1/3 Rule, theoretical error bounds, Romberg integration, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/numerical-methods/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
