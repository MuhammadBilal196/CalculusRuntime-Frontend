import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_C_INTRO_PDES_QUIZ } from "../../data/calcAgSpecialQuizzes";

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

export default function IntroPdesGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="PDEs: Heat & Wave Separation of Variables Solutions (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Intro to PDEs · Part 2</div></div>
          <a className="sb-link" href="#heat-solution">1D Heat Solution &amp; Decay</a>
          <a className="sb-link" href="#wave-solution">1D Wave Solution &amp; Modes</a>
          <a className="sb-link" href="#energy-conservation">Energy Conservation &amp; Physics</a>
          <a className="sb-link" href="#pde-worked-examples">Certificate Examples</a>
          <a className="sb-link" href="#quiz-intro-pdes-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module C: PDEs &amp; Polynomials · Part 2 of 2</div>
            <h1 className="ch-title">Heat Diffusion &amp; Wave Vibrations via Separation of Variables</h1>
            <p className="ch-sub">Eigenfunction expansions, Fourier modal matching, thermal decay rates, and standing acoustic wave harmonics</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-203 / PDEs & Polynomials · Module C (Part 2)" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this section, we solve the two fundamental linear partial differential equations of mathematical physics—the 1D Heat Conduction Equation and the 1D Wave Equation—matching initial spatial profiles to infinite Fourier series."}
            </p>
          </div>
          <Divider />

          <section className="section" id="heat-solution">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">The 1D Heat Diffusion Solution</h2>
            <TheoryBox title="Parabolic Thermal Decay Expansion">
              <p>
                {"For a uniform rod of length $L$ with fixed zero-temperature boundaries $u(0, t) = u(L, t) = 0$ and initial profile $u(x, 0) = f(x)$, the separated solution is:"}
              </p>
              <p>
                {"$$u(x, t) = \\sum_{n=1}^\\infty c_n \\sin\\left(\\frac{n\\pi x}{L}\\right) e^{-\\alpha^2 \\left(\\frac{n\\pi}{L}\\right)^2 t}$$"}
              </p>
              <p>
                {"where the Fourier sine coefficients $c_n$ are computed from the initial temperature distribution:"}
              </p>
              <p>
                {"$$c_n = \\frac{2}{L} \\int_0^L f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx$$"}
              </p>
              <p>
                {"**Physical insight:** Higher spatial frequencies ($n \\ge 2$) decay exponentially at rates proportional to $n^2$, rapidly smoothing out sharp localized temperature variations."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="wave-solution">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">The 1D Wave Equation Solution</h2>
            <TheoryBox title="Hyperbolic Harmonic Superposition">
              <p>
                {"For a taut flexible string of length $L$ fixed at both ends ($u(0, t) = u(L, t) = 0$), released with initial displacement $u(x, 0) = f(x)$ and velocity $u_t(x, 0) = g(x)$, the general solution is:"}
              </p>
              <p>
                {"$$u(x, t) = \\sum_{n=1}^\\infty \\sin\\left(\\frac{n\\pi x}{L}\\right) \\left[ A_n \\cos\\left(\\frac{n\\pi c}{L} t\\right) + B_n \\sin\\left(\\frac{n\\pi c}{L} t\\right) \\right]$$"}
              </p>
              <p>
                {"where the modal modal amplitudes are determined by:"}
              </p>
              <p>
                {"$$A_n = \\frac{2}{L} \\int_0^L f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx, \\quad B_n = \\frac{2}{n\\pi c} \\int_0^L g(x) \\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="energy-conservation">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Energy Conservation &amp; Physical Comparison</h2>
            <ProcedureBox title="Heat Dissipation vs Wave Oscillation">
              <ol>
                <li>
                  <strong>Wave Energy Conservation:</strong> Total mechanical energy $E(t) = \frac{1}{2} \int_0^L \left[ \rho u_t^2 + T_0 u_x^2 \right] dx$ is strictly invariant ($dE/dt = 0$). Modes vibrate perpetually without dissipation.
                </li>
                <li>
                  <strong>Heat Dissipation:</strong> The $L^2$-norm $\int_0^L u^2(x, t)\,dx$ strictly decreases over time ($d/dt \int u^2 dx = -2\alpha^2 \int u_x^2 dx \le 0$), proving that thermal energy irreversibly diffuses into equilibrium.
                </li>
                <li>
                  <strong>Maximum Principle:</strong> Heat solutions cannot attain interior extrema for $t > 0$, guaranteeing numerical stability and physical realism.
                </li>
              </ol>
            </ProcedureBox>
          </section>

          <section className="section" id="pde-worked-examples">
            <h2 className="sec-title">Certificate Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Separation of Variables for Plucked String with Triangular Initial Displacement"
              setup="Find the displacement $u(x, t)$ of a string of length $L = \pi$, wave speed $c = 1$, fixed at both ends, released from rest ($u_t(x, 0) = 0$) from a triangular profile $f(x) = x$ for $0 \le x \le \pi/2$ and $f(x) = \pi - x$ for $\pi/2 \le x \le \pi$."
              steps={[
                "Identify boundary conditions: Fixed ends give $u(0, t) = u(\\pi, t) = 0$, so spatial modes are $X_n(x) = \\sin(n x)$ since $L = \\pi$.",
                "Identify velocity condition: String released from rest implies $g(x) = 0 \\implies B_n = 0$ for all $n$.",
                "Set up Fourier sine integral for $A_n$: $A_n = \\frac{2}{\\pi} \\int_0^\\pi f(x) \\sin(n x)\\,dx = \\frac{2}{\\pi} \\left[ \\int_0^{\\pi/2} x\\sin(n x)\\,dx + \\int_{\\pi/2}^\\pi (\\pi - x)\\sin(n x)\\,dx \\right]$.",
                "Integrate by parts on the first segment: $\\int_0^{\\pi/2} x\\sin(nx)\\,dx = \\left[ -\\frac{x\\cos(nx)}{n} \\right]_0^{\\pi/2} + \\frac{1}{n} \\int_0^{\\pi/2} \\cos(nx)\\,dx = -\\frac{\\pi\\cos(n\\pi/2)}{2n} + \\frac{\\sin(n\\pi/2)}{n^2}$.",
                "Integrate by parts on the second segment: Similarly gives $\\frac{\\pi\\cos(n\\pi/2)}{2n} + \\frac{\\sin(n\\pi/2)}{n^2}$.",
                "Sum both segments: $A_n = \\frac{2}{\\pi} \\left[ \\frac{2\\sin(n\\pi/2)}{n^2} \\right] = \\frac{4\\sin(n\\pi/2)}{\\pi n^2}$.",
                "Evaluate for odd and even harmonics: For even $n = 2k$, $\\sin(k\\pi) = 0 \\implies A_{2k} = 0$. For odd $n = 2k - 1$, $\\sin((2k-1)\\pi/2) = (-1)^{k-1}$.",
                "Combine into series: $u(x, t) = \\sum_{k=1}^\\infty \\frac{4(-1)^{k-1}}{\\pi (2k - 1)^2} \\sin((2k - 1)x) \\cos((2k - 1)t)$."
              ]}
              result="u(x, t) = \frac{4}{\pi} \sum_{k=1}^\infty \frac{(-1)^{k-1}}{(2k-1)^2} \sin((2k-1)x) \cos((2k-1)t)"
              check="At $t = 0$: $u(\pi/2, 0) = \frac{4}{\pi} \sum_{k=1}^\infty \frac{1}{(2k-1)^2} = \frac{4}{\pi} \left(\frac{\pi^2}{8}\right) = \frac{\pi}{2}$, which perfectly matches the peak of the triangular displacement."
            />
          </section>

          <GuideMcqSection
            id="quiz-intro-pdes-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Introduction to PDEs Checkpoint"
            scoreId="score-intro-pdes-checkpoint"
            section="intro-pdes-checkpoint"
            questions={CALC_C_INTRO_PDES_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-intro-pdes-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="PDEs: Classifications & Separation of Variables Principles (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Intro to PDEs · Part 1</div></div>
        <a className="sb-link" href="#pde-classification">PDE Classifications</a>
        <a className="sb-link" href="#separation-ansatz">Separation of Variables Ansatz</a>
        <a className="sb-link" href="#sturm-liouville">Spatial Eigenvalue Problems</a>
        <a className="sb-link" href="#boundary-conditions">Boundary &amp; Initial States</a>
        <a className="sb-link" href="#pde-p1-examples">Certificate Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module C: PDEs &amp; Polynomials · Part 1 of 2</div>
          <h1 className="ch-title">Introduction to Linear PDEs &amp; Separation of Variables</h1>
          <p className="ch-sub">Classification of second-order equations, product separation ansatz, boundary value problems, and modal eigenvalues</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-203 / PDEs & Polynomials · Module C (Part 1)" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Operational Blueprint:</strong>{" "}
            {"We establish the mathematical framework for solving partial differential equations involving two independent variables (space $x$ and time $t$). By assuming a product solution $u(x, t) = X(x)T(t)$, we decouple the PDE into two ordinary differential equations linked by a shared separation constant."}
          </p>
        </div>
        <Divider />

        <section className="section" id="pde-classification">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Classification of Second-Order Linear PDEs</h2>
          <TheoryBox title="Discriminant Criterion: B² - 4AC">
            <p>
              {"A general second-order linear PDE in two variables has the canonical form:"}
            </p>
            <p>
              {"$$A u_{xx} + B u_{xt} + C u_{tt} + D u_x + E u_t + F u = G$$"}
            </p>
            <ul>
              <li><strong>Parabolic ($B^2 - 4AC = 0$):</strong> Governs diffusion, conduction, and dissipative transport. Canonical prototype: the **1D Heat Equation** $\frac{\partial u}{\partial t} = \alpha^2 \frac{\partial^2 u}{\partial x^2}$.</li>
              <li><strong>Hyperbolic ($B^2 - 4AC > 0$):</strong> Governs propagation, acoustics, and electrodynamics. Canonical prototype: the **1D Wave Equation** $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$.</li>
              <li><strong>Elliptic ($B^2 - 4AC < 0$):</strong> Governs static equilibrium and gravitational/electrostatic potentials (Laplace and Poisson equations).</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="separation-ansatz">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">The Separation of Variables Ansatz</h2>
          <TheoryBox title="Decoupling into Independent Coordinate ODEs">
            <p>
              {"Assume a product solution of the form $u(x, t) = X(x) T(t)$ with non-zero $X$ and $T$."}
            </p>
            <p>
              {"Substituting into the Heat Equation $u_t = \\alpha^2 u_{xx}$:"}
            </p>
            <p>
              {"$$X(x) T'(t) = \\alpha^2 X''(x) T(t) \\implies \\frac{T'(t)}{\\alpha^2 T(t)} = \\frac{X''(x)}{X(x)} = -\\lambda$$"}
            </p>
            <p>
              {"Because the left side depends solely on $t$ and the right side solely on $x$, both expressions must equal an identical constant $-\\lambda$, known as the **separation constant**."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="sturm-liouville">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Spatial Sturm-Liouville Eigenvalue Problems</h2>
          <TheoryBox title="Determination of Allowed Spatial Modes">
            <p>
              {"The spatial ODE $X''(x) + \\lambda X(x) = 0$ must satisfy homogeneous boundary conditions on $0 \\le x \\le L$:"}
            </p>
            <ul>
              <li><strong>Case $\lambda < 0$ ($\lambda = -\mu^2$):</strong> $X(x) = c_1 \cosh(\mu x) + c_2 \sinh(\mu x)$. Boundary conditions $X(0) = X(L) = 0$ force $c_1 = c_2 = 0$ (trivial solution only).</li>
              <li><strong>Case $\lambda = 0$:</strong> $X(x) = c_1 x + c_2$. Zero boundary values force $c_1 = c_2 = 0$ (trivial solution).</li>
              <li><strong>Case $\lambda > 0$ ($\lambda = \beta^2$):</strong> $X(x) = c_1 \cos(\beta x) + c_2 \sin(\beta x)$. $X(0) = 0 \implies c_1 = 0$, and $X(L) = c_2 \sin(\beta L) = 0$ yields non-trivial solutions whenever $\beta L = n\pi$."</li>
            </ul>
            <p>
              {"Thus, the discrete eigenvalues and eigenfunctions are:"}
            </p>
            <p>
              {"$$\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2, \\quad X_n(x) = \\sin\\left(\\frac{n\\pi x}{L}\\right), \\quad n = 1, 2, 3, \\dots$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="boundary-conditions">
          <div className="sec-badge">Section 1.4</div>
          <h2 className="sec-title">Boundary &amp; Initial Condition Types</h2>
          <TheoryBox title="Physically Well-Posed Formulations">
            <ul>
              <li><strong>Dirichlet (Fixed Value):</strong> $u(0, t) = u(L, t) = 0$ (e.g., ends held at constant ice bath temperature, or clamped violin string).</li>
              <li><strong>Neumann (Insulated / Free):</strong> $u_x(0, t) = u_x(L, t) = 0$ (e.g., thermally insulated ends with zero heat flux, or frictionless free string ring).</li>
              <li><strong>Robin (Convective Radiation):</strong> $u_x(0, t) - h u(0, t) = 0$ (Newton's cooling law at the boundary).</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="pde-p1-examples">
          <h2 className="sec-title">Worked Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Separation of Variables for 1D Wave Equation"
            setup="Derive the decoupled spatial and temporal ordinary differential equations for the 1D wave equation $u_{tt} = c^2 u_{xx}$ with separation constant $-\lambda$."
            steps={[
              "Substitute product ansatz $u(x, t) = X(x) T(t)$ into $u_{tt} = c^2 u_{xx}$:",
              "$X(x) T''(t) = c^2 X''(x) T(t)$.",
              "Divide both sides by $c^2 X(x) T(t)$ to isolate variable dependencies:",
              "$\\frac{T''(t)}{c^2 T(t)} = \\frac{X''(x)}{X(x)}$.",
              "Since $x$ and $t$ vary independently, both quotients must equal a shared invariant constant $-\\lambda$:",
              "$\\frac{X''(x)}{X(x)} = -\\lambda \\implies X''(x) + \\lambda X(x) = 0$.",
              "$\\frac{T''(t)}{c^2 T(t)} = -\\lambda \\implies T''(t) + c^2 \\lambda T(t) = 0$."
            ]}
            result="X''(x) + \lambda X(x) = 0 \quad \text{and} \quad T''(t) + c^2 \lambda T(t) = 0"
            check="Dimensional check: If $[x] = \text{m}$ and $[t] = \text{s}$, then $[\lambda] = \text{m}^{-2}$ and $[c^2 \lambda] = (\text{m/s})^2 \cdot \text{m}^{-2} = \text{s}^{-2}$, matching the dimension of $d^2/dt^2$."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for full Fourier modal series solutions to the heat and wave equations, energy conservation theorems, worked certificate examples, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/intro-pdes/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
