import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, PracticalTheory, RealLifeUse, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_A_SPACE_CURVES_QUIZ } from "../../data/calcAgDev3Quizzes";

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

export default function SpaceCurvesGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Space Curves & Frenet-Serret Apparatus (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Space Curves · Part 2</div></div>
          <a className="sb-link" href="#frenet-formulas">Frenet-Serret Formulas</a>
          <a className="sb-link" href="#torsion-theory">Torsion &amp; Osculating Plane</a>
          <a className="sb-link" href="#space-curve-planes">The Triad of Planes</a>
          <a className="sb-link" href="#space-curves-proc">Step-by-Step Procedure</a>
          <a className="sb-link" href="#space-curves-ex2">Advanced Worked Examples</a>
          <a className="sb-link" href="#quiz-space-curves-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module A: Space Curves &amp; Motion · Part 2 of 2</div>
            <h1 className="ch-title">Frenet-Serret Apparatus, Torsion &amp; Osculating Geometry</h1>
            <p className="ch-sub">TNB moving trihedron, rate of twisting out of planes, and osculating circle mechanics</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-101 / Math-201 Calculus & Analytical Geometry · Module A" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we formalize the complete local geometry of 3D curves via the Frenet-Serret moving frame $\{\\mathbf{T}, \\mathbf{N}, \\mathbf{B}\}$. We examine how torsion $\\tau$ governs non-planarity, construct the osculating, normal, and rectifying planes, and calculate the radius and center of curvature."}
            </p>
          </div>
          <Divider />

          <section className="section" id="frenet-formulas">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">The Frenet-Serret Formulas</h2>
            <TheoryBox title="Fundamental System of Differential Equations for Space Curves">
              <p>
                {"Let $\\mathbf{r}(s)$ be a smooth curve parameterized by arc length $s$, with unit tangent $\\mathbf{T} = \\mathbf{r}'(s)$, principal unit normal $\\mathbf{N} = \\mathbf{T}'(s)/\\kappa$, and unit binormal $\\mathbf{B} = \\mathbf{T} \\times \\mathbf{N}$. The derivatives with respect to arc length satisfy the famous Frenet-Serret system:"}
              </p>
              <p>
                {"$$\\begin{aligned} \\frac{d\\mathbf{T}}{ds} &= \\kappa \\mathbf{N} \\\\ \\frac{d\\mathbf{N}}{ds} &= -\\kappa \\mathbf{T} + \\tau \\mathbf{B} \\\\ \\frac{d\\mathbf{B}}{ds} &= -\\tau \\mathbf{N} \\end{aligned}$$"}
              </p>
              <p>
                {"In matrix form, with the orthonormal basis column vector $\\mathbf{\\Phi} = [\\mathbf{T}, \\mathbf{N}, \\mathbf{B}]^T$:"}
              </p>
              <p>
                {"$$\\frac{d}{ds} \\begin{bmatrix} \\mathbf{T} \\\\ \\mathbf{N} \\\\ \\mathbf{B} \\end{bmatrix} = \\begin{bmatrix} 0 & \\kappa & 0 \\\\ -\\kappa & 0 & \\tau \\\\ 0 & -\\tau & 0 \\end{bmatrix} \\begin{bmatrix} \\mathbf{T} \\\\ \\mathbf{N} \\\\ \\mathbf{B} \\end{bmatrix}$$"}
              </p>
              <p>
                {"The skew-symmetric coefficient matrix guarantees that the trihedron preserves orthonormality at every point along the trajectory."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="torsion-theory">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">Torsion and Non-Planarity</h2>
            <TheoryBox title="Measuring the Twist">
              <p>
                {"Torsion $\\tau$ measures how rapidly a curve twists out of its osculating plane. For an arbitrary parameterization $\\mathbf{r}(t)$:"}
              </p>
              <p>
                {"$$\\tau(t) = \\frac{(\\mathbf{r}'(t) \\times \\mathbf{r}''(t)) \\cdot \\mathbf{r}'''(t)}{\\|\\mathbf{r}'(t) \\times \\mathbf{r}''(t)\\|^2}$$"}
              </p>
              <p>
                {"• **Planar Curve Criterion:** $\\tau(t) = 0$ for all $t \\iff$ the curve lies completely within a single fixed two-dimensional plane.\n• **Circular Helix Characterization:** $\\kappa > 0$ constant and $\\tau \\neq 0$ constant $\\iff$ the curve is a circular helix (Lancret's Theorem)."}
              </p>
            </TheoryBox>
            <PracticalTheory title="Torsion Sign Convention">
              <p>
                {"A right-handed helix (screwing forward clockwise) has positive torsion $\\tau > 0$, while a left-handed helix has negative torsion $\\tau < 0$."}
              </p>
            </PracticalTheory>
          </section>

          <section className="section" id="space-curve-planes">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">The Three Fundamental Planes</h2>
            <TheoryBox title="Osculating, Normal, and Rectifying Planes">
              <p>
                {"At each point $P_0 = \\mathbf{r}(t_0)$ on a space curve, the TNB vectors define three mutually perpendicular reference planes:"}
              </p>
              <p>
                {"1. **Osculating Plane:** Spanned by $\\mathbf{T}$ and $\\mathbf{N}$. Normal vector is $\\mathbf{B}$. Equation: $\\mathbf{B} \\cdot (\\mathbf{R} - \\mathbf{r}_0) = 0$.\n2. **Normal Plane:** Spanned by $\\mathbf{N}$ and $\\mathbf{B}$. Normal vector is $\\mathbf{T}$. Equation: $\\mathbf{T} \\cdot (\\mathbf{R} - \\mathbf{r}_0) = 0$.\n3. **Rectifying Plane:** Spanned by $\\mathbf{T}$ and $\\mathbf{B}$. Normal vector is $\\mathbf{N}$. Equation: $\\mathbf{N} \\cdot (\\mathbf{R} - \\mathbf{r}_0) = 0$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="space-curves-proc">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Comprehensive Method Checklist</h2>
            <ProcedureBox title="Frenet-Serret Complete Solution Routine" steps={[
              "Compute derivatives r'(t), r''(t), and r'''(t).",
              "Evaluate the cross product r'(t) × r''(t) and its norm ||r'(t) × r''(t)||.",
              "Compute speed v(t) = ||r'(t)|| and unit tangent T(t) = r'(t) / v(t).",
              "Compute curvature κ(t) = ||r' × r''|| / v³.",
              "Compute binormal vector B(t) = (r' × r'') / ||r' × r''||.",
              "Compute principal normal N(t) = B(t) × T(t) or N(t) = T'(t) / ||T'(t)||.",
              "Compute torsion τ(t) = [(r' × r'') · r'''] / ||r' × r''||².",
              "Establish the plane equations through point r(t₀) using normal vectors B, T, and N.",
            ]} />
          </section>

          <section className="section" id="space-curves-ex2">
            <h2 className="sec-title">Advanced Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Full Frenet-Serret Analysis of a Circular Helix"
              setup="Analyze the circular helix $\mathbf{r}(t) = \langle 3\cos t, 3\sin t, 4t \rangle$ at $t = \pi$. Determine the TNB frame, curvature $\kappa$, torsion $\tau$, and the osculating plane equation."
              steps={[
                "First derivative: $\\mathbf{r}'(t) = \\langle -3\\sin t, 3\\cos t, 4 \\rangle$. At $t = \\pi$, $\\mathbf{r}'(\\pi) = \\langle 0, -3, 4 \\rangle$. Speed $v = \\sqrt{0 + 9 + 16} = 5$.",
                "Unit tangent vector: $\\mathbf{T}(\\pi) = \\frac{1}{5}\\langle 0, -3, 4 \\rangle = \\langle 0, -3/5, 4/5 \\rangle$.",
                "Second derivative: $\\mathbf{r}''(t) = \\langle -3\\cos t, -3\\sin t, 0 \\rangle$. At $t = \\pi$, $\\mathbf{r}''(\\pi) = \\langle 3, 0, 0 \\rangle$.",
                "Cross product: $\\mathbf{r}' \\times \\mathbf{r}'' = \\langle 0, 12, 9 \\rangle$. Norm: $\\|\\mathbf{r}' \\times \\mathbf{r}''\\| = \\sqrt{144 + 81} = 15$.",
                "Curvature: $\\kappa = \\frac{\\|\\mathbf{r}' \\times \\mathbf{r}''\\|}{v^3} = \\frac{15}{125} = \\frac{3}{25}$.",
                "Binormal vector: $\\mathbf{B}(\\pi) = \\frac{\\langle 0, 12, 9 \\rangle}{15} = \\langle 0, 4/5, 3/5 \\rangle$.",
                "Principal normal: $\\mathbf{N}(\\pi) = \\mathbf{B} \\times \\mathbf{T} = \\langle 0, 4/5, 3/5 \\rangle \\times \\langle 0, -3/5, 4/5 \\rangle = \\langle 1, 0, 0 \\rangle$.",
                "Third derivative: $\\mathbf{r}'''(t) = \\langle 3\\sin t, -3\\cos t, 0 \\rangle$. At $t = \\pi$, $\\mathbf{r}'''(\\pi) = \\langle 0, 3, 0 \\rangle$.",
                "Torsion: $(\\mathbf{r}' \\times \\mathbf{r}'') \\cdot \\mathbf{r}''' = 0(0) + 12(3) + 9(0) = 36$. Thus $\\tau = \\frac{36}{15^2} = \\frac{36}{225} = \\frac{4}{25}$.",
                "Position at $t = \\pi$: $\\mathbf{r}(\\pi) = \\langle -3, 0, 4\\pi \\rangle$. Osculating plane normal is $\\mathbf{B} = \\langle 0, 4/5, 3/5 \\rangle$, giving $0(x + 3) + 4(y - 0) + 3(z - 4\\pi) = 0 \\implies 4y + 3z = 12\\pi$."
              ]}
              result="T = \langle 0, -3/5, 4/5 \rangle, N = \langle 1, 0, 0 \rangle, B = \langle 0, 4/5, 3/5 \rangle, \kappa = 3/25, \tau = 4/25, \text{Osculating Plane: } 4y + 3z = 12\pi"
              check="Verify Lancret's formula: \kappa = a/(a²+c²) = 3/(9+16) = 3/25 and \tau = c/(a²+c²) = 4/(9+16) = 4/25. Exact match."
            />
          </section>

          <GuideMcqSection
            id="quiz-space-curves-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Space Curves (Frenet-Serret) Mastery Checkpoint"
            scoreId="score-space-curves-checkpoint"
            section="space-curves-checkpoint"
            questions={CALC_A_SPACE_CURVES_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-space-curves-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Space Curves (Frenet-Serret) (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Space Curves · Part 1</div></div>
        <a className="sb-link" href="#arc-length-param">Arc Length Parameterization</a>
        <a className="sb-link" href="#curvature-foundations">Curvature Foundations</a>
        <a className="sb-link" href="#tangent-normal">Tangent &amp; Normal Vectors</a>
        <a className="sb-link" href="#osculating-circle">Osculating Circle &amp; Center</a>
        <a className="sb-link" href="#space-curves-ex1">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module A: Space Curves &amp; Motion · Part 1 of 2</div>
          <h1 className="ch-title">Space Curves &amp; Differential Geometry Foundations</h1>
          <p className="ch-sub">Arc length scaling, the unit tangent vector, and first principles of curvature</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-101 / Math-201 Calculus & Analytical Geometry · Module A" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"Space curves in $\\mathbb{R}^3$ represent trajectories of moving objects, dynamic trajectories, and geometric boundaries. In this first part, we define natural arc length parameterization $s$, establish the unit tangent vector $\\mathbf{T}(t)$, and derive the curvature $\\kappa$ measuring turning rate per unit distance."}
          </p>
        </div>
        <Divider />

        <section className="section" id="arc-length-param">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Arc Length as Natural Parameter</h2>
          <TheoryBox title="The Intrinsic Metric of a Curve">
            <p>
              {"For a smooth curve $\\mathbf{r}(t) = \\langle x(t), y(t), z(t) \\rangle$ with $a \\le t \\le b$, the arc length accumulated from $t = a$ is:"}
            </p>
            <p>
              {"$$s(t) = \\int_a^t \\|\\mathbf{r}'(u)\\| du = \\int_a^t \\sqrt{x'(u)^2 + y'(u)^2 + z'(u)^2} du$$"}
            </p>
            <p>
              {"By the Fundamental Theorem of Calculus, $\\frac{ds}{dt} = \\|\\mathbf{r}'(t)\\| = v(t)$. When a curve is parameterized by arc length $s$, the speed is identically unity: $\\|\\frac{d\\mathbf{r}}{ds}\\| = 1$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="curvature-foundations">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Curvature Formulation</h2>
          <TheoryBox title="Geometric Definition of Curvature">
            <p>
              {"Curvature $\\kappa$ measures how rapidly the curve changes direction per unit distance along the curve:"}
            </p>
            <p>
              {"$$\\kappa = \\left\\|\\frac{d\\mathbf{T}}{ds}\\right\\| = \\frac{\\|\\mathbf{T}'(t)\\|}{\\|\\mathbf{r}'(t)\\|} = \\frac{\\|\\mathbf{r}'(t) \\times \\mathbf{r}''(t)\\|}{\\|\\mathbf{r}'(t)\\|^3}$$"}
            </p>
            <p>
              {"For a straight line, $\\mathbf{T}$ is constant, so $\\kappa = 0$. For a circle of radius $R$, $\\kappa = 1/R$ everywhere."}
            </p>
          </TheoryBox>
          <RealLifeUse>
            High-speed railway tracks and highway interchange ramps (clothoids / Euler spirals) are designed with continuously varying curvature to prevent sudden spikes in passenger lateral g-force.
          </RealLifeUse>
        </section>

        <section className="section" id="tangent-normal">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Tangent and Principal Normal Vectors</h2>
          <TheoryBox title="The Moving Orthonormal Frame">
            <p>
              {"The unit tangent vector $\\mathbf{T}(t) = \\frac{\\mathbf{r}'(t)}{\\|\\mathbf{r}'(t)\\|}$ indicates the direction of motion. Because $\\|\\mathbf{T}(t)\\|^2 = 1$, differentiation reveals $\\mathbf{T}(t) \\cdot \\mathbf{T}'(t) = 0$."}
            </p>
            <p>
              {"The **principal unit normal vector** $\\mathbf{N}(t) = \\frac{\\mathbf{T}'(t)}{\\|\\mathbf{T}'(t)\\|}$ points directly toward the center of curvature, perpendicular to $\\mathbf{T}(t)$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="osculating-circle">
          <div className="sec-badge">Section 1.4</div>
          <h2 className="sec-title">Osculating Circle and Center of Curvature</h2>
          <TheoryBox title="Second-Order Contact">
            <p>
              {"The **osculating circle** (circle of curvature) is the unique circle that shares the position, tangent, and curvature of the curve at a point. It lies in the osculating plane, with radius $\\rho = 1/\\kappa$ and center of curvature:"}
            </p>
            <p>
              {"$$\\mathbf{C} = \\mathbf{r}(t) + \\frac{1}{\\kappa} \\mathbf{N}(t)$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="space-curves-ex1">
          <h2 className="sec-title">Foundational Worked Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Curvature and Normal Vector for a Twisted Cubic"
            setup="Consider the twisted cubic $\mathbf{r}(t) = \langle t, t^2, t^3 \rangle$ at $t = 0$. Determine the curvature $\kappa(0)$ and principal normal $\mathbf{N}(0)$."
            steps={[
              "Compute derivatives: $\\mathbf{r}'(t) = \\langle 1, 2t, 3t^2 \\rangle$ and $\\mathbf{r}''(t) = \\langle 0, 2, 6t \\rangle$.",
              "At $t = 0$: $\\mathbf{r}'(0) = \\langle 1, 0, 0 \\rangle$ and $\\mathbf{r}''(0) = \\langle 0, 2, 0 \\rangle$.",
              "Cross product: $\\mathbf{r}'(0) \\times \\mathbf{r}''(0) = \\langle 0, 0, 2 \\rangle$. Norm $\\|\\mathbf{r}'(0) \\times \\mathbf{r}''(0)\\| = 2$.",
              "Speed at $t = 0$: $\\|\\mathbf{r}'(0)\\| = 1$.",
              "Curvature: $\\kappa(0) = \\frac{\\|\\mathbf{r}' \\times \\mathbf{r}''\\|}{\\|\\mathbf{r}'\\|^3} = \\frac{2}{1^3} = 2$.",
              "Principal normal: At $t = 0$, $\\mathbf{T}(t) = \\frac{\\langle 1, 2t, 3t^2 \\rangle}{\\sqrt{1 + 4t^2 + 9t^4}}$. Differentiating yields $\\mathbf{T}'(0) = \\langle 0, 2, 0 \\rangle$. Normalizing gives $\\mathbf{N}(0) = \\langle 0, 1, 0 \\rangle$."
            ]}
            result="\kappa(0) = 2, \quad \mathbf{N}(0) = \langle 0, 1, 0 \rangle, \quad \rho = 1/2"
            check="Center of curvature C = r(0) + (1/2)N(0) = \langle 0, 1/2, 0 \rangle. Verify distance to r(0) is \rho = 1/2."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Proceed to Section 2 for the complete Frenet-Serret differential equations, torsion calculation, the trihedron of planes, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/space-curves/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
