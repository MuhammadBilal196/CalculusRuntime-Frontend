import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_B_POWER_SERIES_ODE_QUIZ } from "../../data/calcAgSequencesComplexQuizzes";

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

export default function PowerSeriesOdeGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Series Solutions of ODEs: Fundamental Bases & Truncation (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Power Series ODE · Part 2</div></div>
          <a className="sb-link" href="#fundamental-solutions">Fundamental Solution Bases</a>
          <a className="sb-link" href="#radius-of-convergence">Radius of Convergence</a>
          <a className="sb-link" href="#truncation-error">Truncation &amp; Approximation</a>
          <a className="sb-link" href="#worked-examples">Certificate Examples</a>
          <a className="sb-link" href="#quiz-power-series-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>

        <div className="guide-content">
          <CurriculumBadge code="MATH-CAG-ODE-01B" />
          <h1 className="guide-title">Fundamental Solution Bases &amp; Convergence Radius</h1>
          <p className="lead-p">
            Deconstruct linear second-order ODEs into independent even and odd series bases, establish minimum guaranteed
            convergence radii via complex singularities, and analyze polynomial truncation errors.
          </p>

          <section className="section" id="fundamental-solutions">
            <div className="sec-badge">Section 3.4</div>
            <h2 className="sec-title">Decomposition into Fundamental Solutions</h2>
            <TheoryBox title="Linear Independence of Even and Odd Series">
              <p>
                {"Because a second-order linear ODE requires two arbitrary constants, the general solution takes the form:"}
              </p>
              <p>
                {"$$y(x) = a_0 y_1(x) + a_1 y_2(x)$$"}
              </p>
              <p>
                {"The two fundamental solutions satisfy the canonical initial conditions at $x = x_0$:"}
              </p>
              <ul>
                <li><strong>{"Solution $y_1(x)$:"}</strong> {"$y_1(x_0) = 1, \\quad y_1'(x_0) = 0$ (Even-parity series about $x_0$)"}</li>
                <li><strong>{"Solution $y_2(x)$:"}</strong> {"$y_2(x_0) = 0, \\quad y_2'(x_0) = 1$ (Odd-parity series about $x_0$)"}</li>
              </ul>
              <p>
                {"Their Wronskian at $x = x_0$ is $W(y_1, y_2)(x_0) = (1)(1) - (0)(0) = 1 \\ne 0$, rigorously establishing linear independence."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="radius-of-convergence">
            <div className="sec-badge">Section 3.5</div>
            <h2 className="sec-title">Fuchs's Theorem on Convergence Radii</h2>
            <TheoryBox title="Theorem: Distance to Nearest Complex Singularity">
              <p>
                {"Let $x_0$ be an ordinary point of $P(x)y'' + Q(x)y' + R(x)y = 0$. The radius of convergence $R$ of each series solution centered at $x_0$ is AT LEAST equal to the distance from $x_0$ to the nearest singular point of the ODE in the complex plane:"}
              </p>
              <p>
                {"$$R \\ge \\min \\{ |z_s - x_0| : P(z_s) = 0, \\; z_s \\in \\mathbb{C} \\}$$"}
              </p>
              <p>
                {"For example, for $(x^2 + 4)y'' + xy' - y = 0$ centered at $x_0 = 1$, the roots of $P(x)$ are $z_s = \\pm 2i$. The distance is $|1 - (\\pm 2i)| = \\sqrt{1^2 + (\\pm 2)^2} = \\sqrt{5}$. Hence $R \\ge \\sqrt{5}$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="truncation-error">
            <div className="sec-badge">Section 3.6</div>
            <h2 className="sec-title">Polynomial Truncation and Numerical Simulation</h2>
            <ProcedureBox title="Truncation Strategy for Practical Computation">
              <ol>
                <li>
                  <strong>{"N-th Degree Taylor Approximant:"}</strong> {"Truncate the infinite series at order $N$: $y_N(x) = \\sum_{n=0}^N a_n(x-x_0)^n$."}
                </li>
                <li>
                  <strong>{"Remainder Estimation:"}</strong> {"For $|x - x_0| \\le \\rho < R$, the truncation error satisfies $|y(x) - y_N(x)| \\le \\frac{M}{1 - \\rho/R} \\left( \\frac{\\rho}{R} \\right)^{N+1}$."}
                </li>
                <li>
                  <strong>{"Symbolic Differentiation:"}</strong> {"The truncated polynomial $y_N(x)$ provides an analytic approximation that can be directly evaluated and differentiated without discretization drift."}
                </li>
              </ol>
            </ProcedureBox>
          </section>

          <section className="section" id="worked-examples">
            <h2 className="sec-title">Certificate Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Airy Equation Fundamental Series Solutions"
              problem={"Find the first three non-zero terms of the two linearly independent solutions to Airy's equation $y'' - xy = 0$ centered at $x_0 = 0$."}
              solution={"Substituting $y = \\sum a_n x^n$ gives recurrence $(n+2)(n+1)a_{n+2} = a_{n-1}$ for $n \\ge 1$, with $a_2 = 0$. For $y_1$ ($a_0 = 1, a_1 = 0$): $a_3 = a_0/6 = 1/6$, $a_6 = a_3/(6 \\cdot 5) = 1/180$. Thus $y_1(x) = 1 + \\frac{x^3}{6} + \\frac{x^6}{180} + \\mathcal{O}(x^9)$. For $y_2$ ($a_0 = 0, a_1 = 1$): $a_4 = a_1/(4 \\cdot 3) = 1/12$, $a_7 = a_4/(7 \\cdot 6) = 1/504$. Thus $y_2(x) = x + \\frac{x^4}{12} + \\frac{x^7}{504} + \\mathcal{O}(x^{10})$. Both solutions converge on all of $\\mathbb{R}$ because $P(x) = 1$ has no finite singularities."}
            />

            <CertificateExample
              number={2}
              tier="Hard"
              title="Singularity Bound on Radius of Convergence"
              problem={"Determine the minimum guaranteed radius of convergence for power-series solutions of $(x^2 - 2x + 10)y'' + (x+1)y' - 3y = 0$ centered at $x_0 = 2$."}
              solution={"Singularities occur where $P(x) = x^2 - 2x + 10 = 0$. By the quadratic formula: $x = \\frac{2 \\pm \\sqrt{4 - 40}}{2} = 1 \\pm 3i$. The distance from the expansion center $x_0 = 2$ to these complex singularities is $|(1 \\pm 3i) - 2| = |-1 \\pm 3i| = \\sqrt{(-1)^2 + (\\pm 3)^2} = \\sqrt{1 + 9} = \\sqrt{10}$. By Fuchs's theorem, the series solutions are guaranteed to converge for all $|x - 2| < \\sqrt{10}$."}
            />
          </section>

          <Divider />

          <section className="section" id="quiz-power-series-checkpoint">
            <div className="sec-badge">Section 3.7</div>
            <h2 className="sec-title">Checkpoint Assessment: Power-Series ODEs</h2>
            <p className="lead-p">
              Validate your ability to derive recurrence relations, find fundamental bases, and establish convergence bounds. 80% passing threshold required.
            </p>
            <GuideMcqSection
              id="quiz-power-series-ode-checkpoint"
              scoreId="score-power-series-ode-checkpoint"
              section="power-series-ode-checkpoint"
              questions={CALC_B_POWER_SERIES_ODE_QUIZ}
              onComplete={(score, total) => saveQuizScore("guide-mcq-power-series-ode-checkpoint", score, total)}
            />
          </section>
        </div>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Series Solutions of ODEs: Ordinary Points & Recurrences (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Power Series ODE · Part 1</div></div>
        <a className="sb-link" href="#ordinary-points">Ordinary Points Definition</a>
        <a className="sb-link" href="#series-ansatz">Power Series Ansatz</a>
        <a className="sb-link" href="#shifting-indices">Index Shifting &amp; Algebra</a>
        <a className="sb-link" href="#recurrence-relations">Recurrence Relations</a>
        <a className="sb-link" href="#part-summary">Module Summary</a>
        <Link className="sb-link" to="/power-series-ode/2">Part 2: Fundamental Bases &rarr;</Link>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>

      <div className="guide-content">
        <CurriculumBadge code="MATH-CAG-ODE-01A" />
        <h1 className="guide-title">Power-Series Solutions at Ordinary Points</h1>
        <p className="lead-p">
          Transform variable-coefficient differential equations into algebraic recurrence relations. Master the
          power-series method for linear second-order ODEs.
        </p>

        <section className="section" id="ordinary-points">
          <div className="sec-badge">Section 3.1</div>
          <h2 className="sec-title">Classification of Ordinary Points</h2>
          <TheoryBox title="Criterion for Ordinary Points">
            <p>
              {"Consider the general linear second-order homogeneous ODE:"}
            </p>
            <p>
              {"$$P(x)y'' + Q(x)y' + R(x)y = 0 \\iff y'' + p(x)y' + q(x)y = 0$$"}
            </p>
            <p>
              {"where $p(x) = Q(x)/P(x)$ and $q(x) = R(x)/P(x)$."}
            </p>
            <ul>
              <li><strong>{"Ordinary Point:"}</strong> {"A point $x_0$ is called an **ordinary point** if both coefficient functions $p(x)$ and $q(x)$ are analytic at $x_0$ (i.e. possess convergent Taylor series in a neighborhood of $x_0$)."}</li>
              <li><strong>{"Singular Point:"}</strong> {"If either $p(x)$ or $q(x)$ fails to be analytic at $x_0$ (typically where $P(x_0) = 0$), $x_0$ is called a **singular point**."}</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="series-ansatz">
          <div className="sec-badge">Section 3.2</div>
          <h2 className="sec-title">The Power Series Ansatz &amp; Derivatives</h2>
          <TheoryBox title="Series Representation of Solution">
            <p>
              {"At an ordinary point $x_0$ (conventionally taken as $x_0 = 0$), we assume an analytic solution of the form:"}
            </p>
            <p>
              {"$$y(x) = \\sum_{n=0}^\\infty a_n x^n = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \\dots$$"}
            </p>
            <p>
              {"Differentiating term-by-term yields:"}
            </p>
            <p>
              {"$$y'(x) = \\sum_{n=1}^\\infty n a_n x^{n-1} = a_1 + 2a_2 x + 3a_3 x^2 + \\dots$$"}
            </p>
            <p>
              {"$$y''(x) = \\sum_{n=2}^\\infty n(n-1) a_n x^{n-2} = 2a_2 + 6a_3 x + 12a_4 x^2 + \\dots$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="shifting-indices">
          <div className="sec-badge">Section 3.3</div>
          <h2 className="sec-title">Index Shifting &amp; Power Alignment</h2>
          <ProcedureBox title="Algorithmic Index Shifting Steps">
            <ol>
              <li>
                <strong>{"Align Exponents to $x^k$:"}</strong> {"In $\\sum_{n=2}^\\infty n(n-1)a_n x^{n-2}$, let $k = n - 2$. Then $n = k + 2$. When $n = 2$, $k = 0$, giving $\\sum_{k=0}^\\infty (k+2)(k+1)a_{k+2} x^k$."}
              </li>
              <li>
                <strong>{"Shift First Derivative:"}</strong> {"In $\\sum_{n=1}^\\infty n a_n x^{n-1}$, let $k = n - 1$. When $n = 1$, $k = 0$, giving $\\sum_{k=0}^\\infty (k+1)a_{k+1} x^k$."}
              </li>
              <li>
                <strong>{"Collect Like Powers:"}</strong> {"Combine all summations into a single master series $\\sum_{k=0}^\\infty [\\dots] x^k = 0$."}
              </li>
              <li>
                <strong>{"Equate Coefficients to Zero:"}</strong> {"By uniqueness of power series, the bracketed coefficient of every power $x^k$ must vanish identically."}
              </li>
            </ol>
          </ProcedureBox>
        </section>

        <section className="section" id="recurrence-relations">
          <div className="sec-badge">Section 3.4</div>
          <h2 className="sec-title">Deriving Recurrence Relations</h2>
          <TheoryBox title="Example: Harmonic Oscillator y'' + ω²y = 0">
            <p>
              {"Substituting shifted series:"}
            </p>
            <p>
              {"$$\\sum_{k=0}^\\infty \\left[ (k+2)(k+1)a_{k+2} + \\omega^2 a_k \\right] x^k = 0$$"}
            </p>
            <p>
              {"Setting the bracketed expression to zero produces the two-step recurrence relation:"}
            </p>
            <p>
              {"$$a_{k+2} = -\\frac{\\omega^2}{(k+2)(k+1)} a_k \\quad \\forall k \\ge 0$$"}
            </p>
            <p>
              {"Even coefficients ($a_0, a_2, a_4, \\dots$) reconstruct the Taylor series for $a_0 \\cos(\\omega x)$, while odd coefficients ($a_1, a_3, a_5, \\dots$) reconstruct $(a_1/\\omega) \\sin(\\omega x)$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="part-summary">
          <div className="sec-badge">Part 1 Review</div>
          <h2 className="sec-title">Key Takeaways</h2>
          <p>
            Ordinary points permit direct Taylor series expansions where index shifting systematically converts differential constraints into linear recurrence relations. Proceed to Part 2 to construct fundamental solution bases and analyze convergence bounds.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-primary" to="/power-series-ode/2" style={{ textDecoration: "none", padding: "0.75rem 1.5rem", borderRadius: "8px", background: "var(--teal)", color: "#fff", fontWeight: 600 }}>
              Proceed to Part 2: Fundamental Bases &rarr;
            </Link>
          </div>
        </section>
      </div>
    </StudyGuideShell>
  );
}
