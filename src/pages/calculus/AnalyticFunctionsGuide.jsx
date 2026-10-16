import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_C_ANALYTIC_CR_QUIZ } from "../../data/calcAgSequencesComplexQuizzes";

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

export default function AnalyticFunctionsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Complex Analysis: Harmonic Functions & Milne-Thomson (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Analytic · Part 2</div></div>
          <a className="sb-link" href="#harmonic-functions">Harmonic Functions &amp; Laplace</a>
          <a className="sb-link" href="#harmonic-conjugates">Harmonic Conjugates</a>
          <a className="sb-link" href="#milne-thomson">Milne-Thomson Method</a>
          <a className="sb-link" href="#level-curves">Orthogonal Level Trajectories</a>
          <a className="sb-link" href="#worked-examples">Certificate Examples</a>
          <a className="sb-link" href="#quiz-analytic-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>

        <div className="guide-content">
          <CurriculumBadge code="MATH-CAG-CMPLX-01B" />
          <h1 className="guide-title">Harmonic Functions, Conjugates &amp; Milne-Thomson</h1>
          <p className="lead-p">
            Explore the deep geometric relationship between complex analytic functions and 2D potential theory.
            Construct harmonic conjugates and reconstruct entire analytic functions using the Milne-Thomson shortcut.
          </p>

          <section className="section" id="harmonic-functions">
            <div className="sec-badge">Section 1.4</div>
            <h2 className="sec-title">Harmonic Functions and the Laplace Equation</h2>
            <TheoryBox title="Theorem: Real and Imaginary Parts of Analytic Functions are Harmonic">
              <p>
                {"Let $f(z) = u(x, y) + i v(x, y)$ be analytic in an open domain $D$. If $u$ and $v$ have continuous second-order partial derivatives, then both $u$ and $v$ satisfy the 2D Laplace equation:"}
              </p>
              <p>
                {"$$\\nabla^2 u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0, \\qquad \\nabla^2 v = \\frac{\\partial^2 v}{\\partial x^2} + \\frac{\\partial^2 v}{\\partial y^2} = 0$$"}
              </p>
              <p>
                {"Proof via Cauchy-Riemann: By differentiating $u_x = v_y$ with respect to $x$, we have $u_{xx} = v_{yx}$. Differentiating $u_y = -v_x$ with respect to $y$, we have $u_{yy} = -v_{xy}$. By Clairaut's theorem on mixed partials ($v_{xy} = v_{yx}$):"}
              </p>
              <p>
                {"$$u_{xx} + u_{yy} = v_{yx} - v_{xy} = 0$$"}
              </p>
              <p>
                {"Functions satisfying $\\nabla^2 \\phi = 0$ are called \\textbf{harmonic functions} (governing electrostatic potentials, fluid velocity potentials, and steady-state thermal fields)."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="harmonic-conjugates">
            <div className="sec-badge">Section 1.5</div>
            <h2 className="sec-title">Constructing Harmonic Conjugates</h2>
            <TheoryBox title="Definition: Harmonic Conjugate v(x, y)">
              <p>
                {"Given a harmonic function $u(x, y)$ on a simply connected domain $D$, a harmonic function $v(x, y)$ is called the \\textbf{harmonic conjugate} of $u$ if the combined function $f(z) = u(x, y) + i v(x, y)$ is analytic on $D$."}
              </p>
              <p>
                {"Note: Harmonic conjugacy is asymmetric! If $v$ is a conjugate of $u$, then $-u$ is the harmonic conjugate of $v$, because $i(u + iv) = -v + iu$."}
              </p>
            </TheoryBox>

            <ProcedureBox title="Step-by-Step Construction of v(x, y) from u(x, y)">
              <ol>
                <li>
                  <strong>{"Verify u is Harmonic:"}</strong> {"Check that $u_{xx} + u_{yy} = 0$."}
                </li>
                <li>
                  <strong>{"Integrate First CR Equation:"}</strong> {"Set $v_y = u_x$, then integrate with respect to $y$:"}
                  <div style={{ marginTop: "0.35rem" }}>
                    {"$$v(x, y) = \\int u_x(x, y)\\,dy + g(x)$$"}
                  </div>
                  {"where $g(x)$ is an arbitrary integration function of $x$."}
                </li>
                <li>
                  <strong>{"Apply Second CR Equation:"}</strong> {"Differentiate $v(x, y)$ with respect to $x$ and equate to $-u_y$:"}
                  <div style={{ marginTop: "0.35rem" }}>
                    {"$$v_x = \\frac{\\partial}{\\partial x}\\left(\\int u_x\\,dy\\right) + g'(x) = -u_y$$"}
                  </div>
                </li>
                <li>
                  <strong>{"Solve for g(x):"}</strong> {"All $y$-dependent terms cancel identically (guaranteed by $\\nabla^2 u = 0$), leaving $g'(x) = h(x)$. Integrate to find $g(x) = \\int h(x)\\,dx + C$."}
                </li>
              </ol>
            </ProcedureBox>
          </section>

          <section className="section" id="milne-thomson">
            <div className="sec-badge">Section 1.6</div>
            <h2 className="sec-title">The Milne-Thomson Method</h2>
            <TheoryBox title="Direct Construction of f(z) Without Finding v(x, y)">
              <p>
                {"The Milne-Thomson method rapidly yields the entire analytic function $f(z)$ directly in terms of $z = x + iy$ without computing the conjugate $v(x, y)$ explicitly."}
              </p>
              <p>
                {"Since $f(z) = u(x, y) + i v(x, y)$, its complex derivative is $f'(z) = u_x(x, y) + i v_x(x, y) = u_x(x, y) - i u_y(x, y)$."}
              </p>
              <p>
                {"Setting $x = z$ and $y = 0$ gives the fundamental Milne-Thomson relation:"}
              </p>
              <p>
                {"$$f'(z) = u_x(z, 0) - i u_y(z, 0)$$"}
              </p>
              <p>
                {"Integrating with respect to $z$ directly yields:"}
              </p>
              <p>
                {"$$f(z) = \\int \\left[ u_x(z, 0) - i u_y(z, 0) \\right] dz + C$$"}
              </p>
              <p>
                {"If $v(x, y)$ is given instead of $u$, the dual formulation is:"}
              </p>
              <p>
                {"$$f'(z) = v_y(z, 0) + i v_x(z, 0) \\implies f(z) = \\int \\left[ v_y(z, 0) + i v_x(z, 0) \\right] dz + C$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="level-curves">
            <div className="sec-badge">Section 1.7</div>
            <h2 className="sec-title">Orthogonality of Level Curves</h2>
            <TheoryBox title="Geometric Property: Equipotential & Streamlines">
              <p>
                {"Consider the families of level curves $u(x, y) = c_1$ and $v(x, y) = c_2$. The normal gradient vectors are $\\nabla u = (u_x, u_y)$ and $\\nabla v = (v_x, v_y)$."}
              </p>
              <p>
                {"Computing their inner product via the Cauchy-Riemann equations ($v_x = -u_y, v_y = u_x$):"}
              </p>
              <p>
                {"$$\\nabla u \\cdot \\nabla v = u_x v_x + u_y v_y = u_x (-u_y) + u_y (u_x) = -u_x u_y + u_x u_y = 0$$"}
              </p>
              <p>
                {"Whenever $f'(z) \\ne 0$, the gradient vectors are non-zero and orthogonal, which proves that the family of curves $u(x,y) = c_1$ and $v(x,y) = c_2$ intersect at right angles everywhere."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="worked-examples">
            <h2 className="sec-title">Certificate Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Milne-Thomson Reconstruction of Cubic Harmonic Potential"
              problem={"Given $u(x, y) = 2x^3 - 6x y^2 + 3x^2 - 3y^2$, verify that $u$ is harmonic and find the entire analytic function $f(z)$ such that $f(0) = 0$ using the Milne-Thomson method."}
              solution={"Step 1: Compute partial derivatives:\n$u_x = 6x^2 - 6y^2 + 6x$, $u_{xx} = 12x + 6$.\n$u_y = -12xy - 6y$, $u_{yy} = -12x - 6$.\n$u_{xx} + u_{yy} = (12x + 6) + (-12x - 6) = 0$, so $u$ is harmonic on $\\mathbb{R}^2$.\n\nStep 2: Apply Milne-Thomson with $x = z, y = 0$:\n$u_x(z, 0) = 6z^2 + 6z$.\n$u_y(z, 0) = 0$.\nTherefore, $f'(z) = u_x(z, 0) - i u_y(z, 0) = 6z^2 + 6z$.\n\nStep 3: Integrate with respect to $z$:\n$f(z) = \\int (6z^2 + 6z)\\,dz = 2z^3 + 3z^2 + C$.\nApplying condition $f(0) = 0 \\implies C = 0$.\nResult: $f(z) = 2z^3 + 3z^2$."}
            />

            <CertificateExample
              number={2}
              tier="Hard"
              title="Harmonic Conjugate Construction with Exponential and Trigonometric Terms"
              problem={"Given $u(x, y) = e^x \\cos y + x y$, determine whether an analytic function $f(z) = u + iv$ can exist. If not, modify $u$ to a valid harmonic potential and construct its conjugate $v(x, y)$."}
              solution={"Step 1: Test harmonicity:\n$u_x = e^x \\cos y + y$, $u_{xx} = e^x \\cos y$.\n$u_y = -e^x \\sin y + x$, $u_{yy} = -e^x \\cos y$.\n$u_{xx} + u_{yy} = e^x \\cos y - e^x \\cos y = 0$. Remarkably, $u$ is already harmonic!\n\nStep 2: Find conjugate $v(x, y)$ via CR equations:\n$v_y = u_x = e^x \\cos y + y$.\nIntegrating with respect to $y$:\n$v(x, y) = e^x \\sin y + \\frac{1}{2}y^2 + g(x)$.\n\nStep 3: Differentiate with respect to $x$:\n$v_x = e^x \\sin y + g'(x)$.\nEquate to $-u_y = e^x \\sin y - x$:\n$e^x \\sin y + g'(x) = e^x \\sin y - x \\implies g'(x) = -x$.\nIntegrating: $g(x) = -\\frac{1}{2}x^2 + C$.\n\nResult: $v(x, y) = e^x \\sin y + \\frac{1}{2}(y^2 - x^2) + C$.\nCombined function: $f(z) = e^z - \\frac{i}{2} z^2 + iC$."}
            />
          </section>

          <Divider />

          <section className="section" id="quiz-analytic-checkpoint">
            <div className="sec-badge">Section 1.8</div>
            <h2 className="sec-title">Checkpoint Assessment: Analytic Functions &amp; CR Equations</h2>
            <p className="lead-p">
              Verify your mastery of complex differentiability, polar Cauchy-Riemann forms, harmonic conjugates, and Milne-Thomson shortcuts. 80% passing threshold required.
            </p>
            <GuideMcqSection
              id="quiz-analytic-functions-checkpoint"
              scoreId="score-analytic-functions-checkpoint"
              section="analytic-functions-checkpoint"
              questions={CALC_C_ANALYTIC_CR_QUIZ}
              onComplete={(score, total) => saveQuizScore("guide-mcq-analytic-functions-checkpoint", score, total)}
            />
          </section>
        </div>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Complex Analysis: Analytic Functions & Cauchy-Riemann (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Analytic · Part 1</div></div>
        <a className="sb-link" href="#complex-diff">Complex Differentiability</a>
        <a className="sb-link" href="#cr-cartesian">Cauchy-Riemann Equations</a>
        <a className="sb-link" href="#cr-polar">Polar Form of CR Equations</a>
        <a className="sb-link" href="#sufficient-conds">Sufficient Conditions</a>
        <a className="sb-link" href="#procedure-cr">Verification Procedure</a>
        <a className="sb-link" href="#part-summary">Next: Harmonic &amp; Milne-Thomson</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>

      <div className="guide-content">
        <CurriculumBadge code="MATH-CAG-CMPLX-01A" />
        <h1 className="guide-title">Analytic Functions &amp; Cauchy-Riemann Equations</h1>
        <p className="lead-p">
          Master the foundational bedrock of complex function theory: complex differentiability, the necessary
          and sufficient Cauchy-Riemann relations in Cartesian and polar coordinates, and singular behavior.
        </p>

        <section className="section" id="complex-diff">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Complex Differentiability &amp; Analyticity</h2>
          <TheoryBox title="Definition: Complex Derivative and Holomorphic Functions">
            <p>
              {"Let $f: D \\to \\mathbb{C}$ be a complex function defined on an open domain $D \\subseteq \\mathbb{C}$. The function is complex differentiable at $z_0 \\in D$ if the limit:"}
            </p>
            <p>
              {"$$f'(z_0) = \\lim_{\\Delta z \\to 0} \\frac{f(z_0 + \\Delta z) - f(z_0)}{\\Delta z}$$"}
            </p>
            <p>
              {"exists and is independent of the direction in which $\\Delta z = \\Delta x + i \\Delta y$ approaches $0$ in the 2D complex plane."}
            </p>
            <p>
              {"A function $f(z)$ is \\textbf{analytic} (or \\textbf{holomorphic}) at $z_0$ if it is complex differentiable at $z_0$ and in some open neighborhood of $z_0$. If $f$ is analytic on the entire complex plane $\\mathbb{C}$, it is called \\textbf{entire}."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="cr-cartesian">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Cauchy-Riemann Equations in Cartesian Coordinates</h2>
          <TheoryBox title="Theorem: The Cartesian Cauchy-Riemann Equations">
            <p>
              {"Write $f(z) = u(x, y) + i v(x, y)$ with $z = x + iy$. If $f'(z)$ exists at $z = x + iy$, approaching $\\Delta z \\to 0$ along the real axis ($\\Delta y = 0, \\Delta x \\to 0$) gives:"}
            </p>
            <p>
              {"$$f'(z) = \\frac{\\partial u}{\\partial x} + i \\frac{\\partial v}{\\partial x} = u_x + i v_x$$"}
            </p>
            <p>
              {"Approaching along the imaginary axis ($\\Delta x = 0, \\Delta y \\to 0$) gives:"}
            </p>
            <p>
              {"$$f'(z) = \\frac{1}{i}\\left( \\frac{\\partial u}{\\partial y} + i \\frac{\\partial v}{\\partial y} \\right) = -i u_y + v_y = v_y - i u_y$$"}
            </p>
            <p>
              {"Equating real and imaginary parts produces the celebrated \\textbf{Cauchy-Riemann (CR) equations}:"}
            </p>
            <p>
              {"$$u_x = v_y \\qquad \\text{and} \\qquad u_y = -v_x$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="cr-polar">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Cauchy-Riemann Equations in Polar Coordinates</h2>
          <TheoryBox title="Polar Formulation for Radial Coordinates (r, θ)">
            <p>
              {"For $z = r e^{i\\theta} = r(\\cos\\theta + i\\sin\\theta)$, write $f(z) = u(r, \\theta) + i v(r, \\theta)$. Applying the multivariable chain rule to the Cartesian CR equations yields:"}
            </p>
            <p>
              {"$$\\frac{\\partial u}{\\partial r} = \\frac{1}{r} \\frac{\\partial v}{\\partial \\theta} \\qquad \\text{and} \\qquad \\frac{\\partial v}{\\partial r} = -\\frac{1}{r} \\frac{\\partial u}{\\partial \\theta}$$"}
            </p>
            <p>
              {"The derivative in polar form is expressed as:"}
            </p>
            <p>
              {"$$f'(z) = e^{-i\\theta} \\left( \\frac{\\partial u}{\\partial r} + i \\frac{\\partial v}{\\partial r} \\right) = \\frac{e^{-i\\theta}}{r} \\left( \\frac{\\partial v}{\\partial \\theta} - i \\frac{\\partial u}{\\partial \\theta} \\right)$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="sufficient-conds">
          <div className="sec-badge">Section 1.4</div>
          <h2 className="sec-title">Sufficient Conditions for Differentiability</h2>
          <TheoryBox title="Theorem: Continuity of Partial Derivatives">
            <p>
              {"Satisfying the CR equations at a point $(x_0, y_0)$ is necessary but NOT sufficient on its own. For $f(z)$ to be complex differentiable at $z_0$, the four partial derivatives $u_x, u_y, v_x, v_y$ must:"}
            </p>
            <ul>
              <li>{"Satisfy the Cauchy-Riemann equations $u_x = v_y$ and $u_y = -v_x$ at $(x_0, y_0)$."}</li>
              <li>{"Be \\textbf{continuous} in an open neighborhood around $(x_0, y_0)$."}</li>
            </ul>
            <p>
              {"When both conditions are met, $f(z)$ is guaranteed to be complex differentiable at $z_0$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="procedure-cr">
          <div className="sec-badge">Methodology</div>
          <h2 className="sec-title">Systematic Verification Procedure</h2>
          <ProcedureBox title="Algorithm for Testing Analyticity of f(z) = u + iv">
            <ol>
              <li>
                <strong>{"Decompose f(z):"}</strong> {"Split the expression into real component $u(x, y)$ and imaginary component $v(x, y)$."}
              </li>
              <li>
                <strong>{"Compute First Partials:"}</strong> {"Evaluate $u_x, u_y, v_x, v_y$."}
              </li>
              <li>
                <strong>{"Check CR Equations:"}</strong> {"Verify whether $u_x = v_y$ and $u_y = -v_x$ hold identically across domain $D$."}
              </li>
              <li>
                <strong>{"Confirm Continuity:"}</strong> {"Ensure all four partial derivatives are continuous on $D$."}
              </li>
              <li>
                <strong>{"Express Derivative:"}</strong> {"Write $f'(z) = u_x + i v_x = v_y - i u_y$."}
              </li>
            </ol>
          </ProcedureBox>
        </section>

        <section className="section" id="part-summary">
          <div className="sec-badge">Part 1 Review</div>
          <h2 className="sec-title">Key Takeaways &amp; Progression</h2>
          <p>
            Complex differentiability imposes severe rigidity: satisfying the Cauchy-Riemann equations with continuous partials forces $u$ and $v$ to solve Laplace&apos;s equation. In Part 2, we explore harmonic functions, harmonic conjugates, and the Milne-Thomson method.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-primary" to="/analytic-functions/2" style={{ textDecoration: "none", padding: "0.75rem 1.5rem", borderRadius: "8px", background: "var(--teal)", color: "#fff", fontWeight: 600 }}>
              Proceed to Part 2: Harmonic Functions &amp; Milne-Thomson &rarr;
            </Link>
          </div>
        </section>
      </div>
    </StudyGuideShell>
  );
}
