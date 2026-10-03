import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_A_PARAMETRIC_SURFACES_QUIZ } from "../../data/calcAgDev3Quizzes";

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

export default function ParametricSurfacesGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Parametric Surfaces & Differential Geometry (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Parametric Surfaces · Part 2</div></div>
          <a className="sb-link" href="#surface-area-theory">Surface Area Formulation</a>
          <a className="sb-link" href="#surfaces-revolution">Surfaces of Revolution &amp; Tori</a>
          <a className="sb-link" href="#ruled-minimal">Ruled &amp; Minimal Surfaces</a>
          <a className="sb-link" href="#surface-proc">Computational Procedure</a>
          <a className="sb-link" href="#surface-ex2">Advanced Worked Examples</a>
          <a className="sb-link" href="#quiz-parametric-surfaces-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module A: Space Curves &amp; Motion · Part 2 of 2</div>
            <h1 className="ch-title">Surface Area, Revolution Geometries &amp; Ruled Surfaces</h1>
            <p className="ch-sub">Surface integration, First Fundamental Form, and non-trivial 3D manifolds</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-101 / Math-201 Calculus & Analytical Geometry · Module A" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we evaluate the differential area element $dS = \\|\\mathbf{r}_u \\times \\mathbf{r}_v\\| dudv$, derive surface areas for spheres, cylinders, and tori, examine the First Fundamental Form coefficients $E, F, G$, and investigate ruled and minimal surfaces."}
            </p>
          </div>
          <Divider />

          <section className="section" id="surface-area-theory">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Surface Area Calculation</h2>
            <TheoryBox title="Fundamental Area Integral">
              <p>
                {"Let $S$ be a smooth parametric surface $\\mathbf{r}(u, v)$ over a parameter domain $D \\subset \\mathbb{R}^2$. The surface area is given by:"}
              </p>
              <p>
                {"$$A(S) = \\iint_D \\|\\mathbf{r}_u \\times \\mathbf{r}_v\\| dA = \\iint_D \\sqrt{EG - F^2} du dv$$"}
              </p>
              <p>
                {"where $E = \\mathbf{r}_u \\cdot \\mathbf{r}_u$, $F = \\mathbf{r}_u \\cdot \\mathbf{r}_v$, and $G = \\mathbf{r}_v \\cdot \\mathbf{r}_v$ are the coefficients of the First Fundamental Form $I = E du^2 + 2F dudv + G dv^2$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="surfaces-revolution">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">Surfaces of Revolution and the Torus</h2>
            <TheoryBox title="Canonical Ensembles">
              <p>
                {"• **Surface of Revolution:** Revolving $y = f(x) \\ge 0$ ($a \\le x \\le b$) about the x-axis:\n$$\\mathbf{r}(x, \\theta) = \\langle x, f(x)\\cos\\theta, f(x)\\sin\\theta \\rangle, \\quad \\|\\mathbf{r}_x \\times \\mathbf{r}_\\theta\\| = f(x)\\sqrt{1 + [f'(x)]^2}$$\n• **Torus:** Revolving a circle of radius $r$ centered at distance $R > r$ from the z-axis:\n$$\\mathbf{r}(u, v) = \\langle (R + r\\cos v)\\cos u, (R + r\\cos v)\\sin u, r\\sin v \\rangle$$\nArea element: $\\|\\mathbf{r}_u \\times \\mathbf{r}_v\\| = r(R + r\\cos v)$. Total area: $A = 4\\pi^2 R r$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="ruled-minimal">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Ruled and Minimal Surfaces</h2>
            <TheoryBox title="Linear Generators and Soap Films">
              <p>
                {"• **Ruled Surface:** A surface that can be parameterized as $\\mathbf{r}(u, v) = \\mathbf{c}(u) + v \\mathbf{d}(u)$, swept out by straight lines (called rulings). Examples include cylinders, cones, the helicoid, and the hyperboloid of one sheet.\n• **Minimal Surface:** A surface with zero mean curvature $H = 0$ everywhere, minimizing surface area for a given boundary (such as the catenoid and helicoid)."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="surface-proc">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Surface Analysis Routine</h2>
            <ProcedureBox title="Step-by-Step Surface Calculus Procedure" steps={[
              "Identify the parameterization r(u, v) and parameter domain D.",
              "Compute tangent vectors r_u = ∂r/∂u and r_v = ∂r/∂v.",
              "Compute the cross product normal vector n = r_u × r_v.",
              "Calculate the magnitude ||r_u × r_v|| = √(EG - F²).",
              "Set up and evaluate the double integral ∬_D ||r_u × r_v|| du dv to determine total surface area.",
              "For tangent planes at (u₀, v₀), evaluate n₀ and construct n₀ · (R - r(u₀, v₀)) = 0.",
            ]} />
          </section>

          <section className="section" id="surface-ex2">
            <h2 className="sec-title">Advanced Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Surface Area of a Parametric Paraboloid Cap"
              setup="Find the surface area of the paraboloid $z = x^2 + y^2$ below the plane $z = 4$ using parametric coordinates."
              steps={[
                "Parameterize in polar-cylindrical parameters: $x = u\\cos v$, $y = u\\sin v$, $z = u^2$ for $0 \\le u \\le 2$ (since $z = u^2 \\le 4$) and $0 \\le v \\le 2\\pi$.",
                "Tangent vectors: $\\mathbf{r}_u = \\langle \\cos v, \\sin v, 2u \\rangle$, $\\mathbf{r}_v = \\langle -u\\sin v, u\\cos v, 0 \\rangle$.",
                "Cross product: $\\mathbf{r}_u \\times \\mathbf{r}_v = \\langle -2u^2\\cos v, -2u^2\\sin v, u \\rangle$.",
                "Norm: $\\|\\mathbf{r}_u \\times \\mathbf{r}_v\\| = \\sqrt{4u^4\\cos^2 v + 4u^4\\sin^2 v + u^2} = \\sqrt{4u^4 + u^2} = u\\sqrt{4u^2 + 1}$.",
                "Surface area integral: $A = \\int_0^{2\\pi} \\int_0^2 u\\sqrt{4u^2 + 1} du dv = 2\\pi \\int_0^2 u(4u^2 + 1)^{1/2} du$.",
                "Substitute $w = 4u^2 + 1$, $dw = 8u du$. For $u = 0, w = 1$; for $u = 2, w = 17$:",
                "Integral: $A = 2\\pi \\cdot \\frac{1}{8} \\int_1^{17} w^{1/2} dw = \\frac{\\pi}{4} [\\frac{2}{3}w^{3/2}]_1^{17} = \\frac{\\pi}{6}(17\\sqrt{17} - 1)$."
              ]}
              result="A = \frac{\pi}{6}(17\sqrt{17} - 1) \approx 36.177"
              check="Cartesian formula \iint \sqrt{1 + 4x² + 4y²} dxdy converts directly to polar \int_0^{2\pi}\int_0^2 \sqrt{1 + 4r²} r dr d\theta, yielding identical \frac{\pi}{6}(17\sqrt{17} - 1)."
            />
          </section>

          <GuideMcqSection
            id="quiz-parametric-surfaces-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Parametric Surfaces Checkpoint"
            scoreId="score-parametric-surfaces-checkpoint"
            section="parametric-surfaces-checkpoint"
            questions={CALC_A_PARAMETRIC_SURFACES_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-parametric-surfaces-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Parametric Surfaces & Differential Geometry (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Parametric Surfaces · Part 1</div></div>
        <a className="sb-link" href="#parametric-def">Parameterization &amp; Grid Curves</a>
        <a className="sb-link" href="#tangent-planes">Tangent Planes &amp; Normal Vectors</a>
        <a className="sb-link" href="#smoothness-criterion">Smoothness &amp; Regularity</a>
        <a className="sb-link" href="#surface-ex1">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module A: Space Curves &amp; Motion · Part 1 of 2</div>
          <h1 className="ch-title">Parametric Surfaces &amp; Tangent Geometry</h1>
          <p className="ch-sub">Surface coordinates, coordinate tangent vectors, and spatial normal fields</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-101 / Math-201 Calculus & Analytical Geometry · Module A" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"Surfaces in three-dimensional space are parameterized by two independent variables: $\\mathbf{r}(u, v) = \\langle x(u,v), y(u,v), z(u,v) \\rangle$. This section examines grid curves, tangent vectors $\\mathbf{r}_u$ and $\\mathbf{r}_v$, surface normal fields, and tangent plane equations."}
          </p>
        </div>
        <Divider />

        <section className="section" id="parametric-def">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Surface Parameterization and Grid Curves</h2>
          <TheoryBox title="Mapping $\mathbb{R}^2 \to \mathbb{R}^3$">
            <p>
              {"A vector function $\\mathbf{r}(u, v) = x(u,v)\\mathbf{i} + y(u,v)\\mathbf{j} + z(u,v)\\mathbf{k}$ defined on domain $D \\subset \\mathbb{R}^2$ traces out a two-dimensional surface $S$ in space."}
            </p>
            <p>
              {"• **Grid Curves:** Holding $v = v_0$ constant produces the curve $\\mathbf{r}(u, v_0)$ with tangent vector $\\mathbf{r}_u = \\frac{\\partial \\mathbf{r}}{\\partial u}$. Holding $u = u_0$ constant produces $\\mathbf{r}(u_0, v)$ with tangent vector $\\mathbf{r}_v = \\frac{\\partial \\mathbf{r}}{\\partial v}$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="tangent-planes">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Tangent Planes and Surface Normal Vectors</h2>
          <TheoryBox title="The Local Linear Approximation">
            <p>
              {"If $\\mathbf{r}_u \\times \\mathbf{r}_v \\neq \\mathbf{0}$, the surface is smooth and has a well-defined tangent plane at $P_0 = \\mathbf{r}(u_0, v_0)$."}
            </p>
            <p>
              {"The **normal vector** to the surface is:"}
            </p>
            <p>
              {"$$\\mathbf{n} = \\mathbf{r}_u \\times \\mathbf{r}_v = \\det \\begin{bmatrix} \\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ x_u & y_u & z_u \\\\ x_v & y_v & z_v \\end{bmatrix}$$"}
            </p>
            <p>
              {"The scalar equation of the tangent plane through $\\mathbf{r}(u_0, v_0) = \\langle x_0, y_0, z_0 \\rangle$ is $\\mathbf{n} \\cdot (\\mathbf{R} - \\mathbf{r}_0) = 0$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="smoothness-criterion">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Explicit Surfaces as Parametric Surfaces</h2>
          <TheoryBox title="Standard Monge Patch">
            <p>
              {"Any explicit graph $z = f(x, y)$ can be viewed as a parametric surface with $u = x$ and $v = y$:"}
            </p>
            <p>
              {"$$\\mathbf{r}(x, y) = \\langle x, y, f(x, y) \\rangle, \\quad \\mathbf{r}_x = \\langle 1, 0, f_x \\rangle, \\quad \\mathbf{r}_y = \\langle 0, 1, f_y \\rangle$$"}
            </p>
            <p>
              {"$$\\mathbf{r}_x \\times \\mathbf{r}_y = \\langle -f_x, -f_y, 1 \\rangle, \\quad \\|\\mathbf{r}_x \\times \\mathbf{r}_y\\| = \\sqrt{1 + f_x^2 + f_y^2}$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="surface-ex1">
          <h2 className="sec-title">Worked Tangent Plane Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Tangent Plane to a Helicoid"
            setup="Find an equation of the tangent plane to the helicoid $\mathbf{r}(u, v) = \langle u\cos v, u\sin v, v \rangle$ at $(u, v) = (2, \pi/4)$."
            steps={[
              "Point on surface: $\\mathbf{r}(2, \\pi/4) = \\langle 2\\cos(\\pi/4), 2\\sin(\\pi/4), \\pi/4 \\rangle = \\langle \\sqrt{2}, \\sqrt{2}, \\pi/4 \\rangle$.",
              "Compute partial derivatives: $\\mathbf{r}_u = \\langle \\cos v, \\sin v, 0 \\rangle$ and $\\mathbf{r}_v = \\langle -u\\sin v, u\\cos v, 1 \\rangle$.",
              "At $(2, \\pi/4)$: $\\mathbf{r}_u = \\langle \\sqrt{2}/2, \\sqrt{2}/2, 0 \\rangle$ and $\\mathbf{r}_v = \\langle -\\sqrt{2}, \\sqrt{2}, 1 \\rangle$.",
              "Normal vector $\\mathbf{n} = \\mathbf{r}_u \\times \\mathbf{r}_v = \\langle \\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2}, 2 \\cdot \\frac{2}{4} + \\dots \\rangle = \\langle \\frac{\\sqrt{2}}{2}, -\\frac{\\sqrt{2}}{2}, 1 \\rangle$.",
              "Scale normal vector by $\\sqrt{2}$: $\\mathbf{n}' = \\langle 1, -1, \\sqrt{2} \\rangle$.",
              "Plane equation: $1(x - \\sqrt{2}) - 1(y - \\sqrt{2}) + \\sqrt{2}(z - \\pi/4) = 0 \\implies x - y + \\sqrt{2}z = \\frac{\\pi\\sqrt{2}}{4}$."
            ]}
            result="x - y + \sqrt{2}z = \frac{\pi\sqrt{2}}{4}"
            check="Verify r(2, \pi/4) = (\sqrt{2}, \sqrt{2}, \pi/4) satisfies equation: \sqrt{2} - \sqrt{2} + \sqrt{2}(\pi/4) = \frac{\pi\sqrt{2}}{4}. Exact match."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Proceed to Section 2 for surface area integration, surfaces of revolution, the torus, minimal surfaces, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/parametric-surfaces/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
