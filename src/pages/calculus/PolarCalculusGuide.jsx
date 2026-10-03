import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, PracticalTheory, RealLifeUse, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_A_POLAR_CALCULUS_QUIZ } from "../../data/calcAgDev3Quizzes";

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

export default function PolarCalculusGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Polar Coordinate Calculus (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Polar Calculus · Part 2</div></div>
          <a className="sb-link" href="#polar-arc-length">Arc Length in Polar Coordinates</a>
          <a className="sb-link" href="#polar-surface-rev">Surfaces of Revolution</a>
          <a className="sb-link" href="#polar-curvature">Curvature &amp; Radial Angles</a>
          <a className="sb-link" href="#polar-proc">Polar Calculus Method</a>
          <a className="sb-link" href="#polar-ex2">Advanced Worked Examples</a>
          <a className="sb-link" href="#quiz-polar-calculus-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module A: Space Curves &amp; Motion · Part 2 of 2</div>
            <h1 className="ch-title">Arc Length, Revolution Areas &amp; Polar Curvature</h1>
            <p className="ch-sub">Differential metrics, cardioid perimeters, and intrinsic curvature formulations</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-101 / Math-201 Calculus & Analytical Geometry · Module A" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we evaluate the polar arc length differential $ds = \\sqrt{r^2 + (dr/d\\theta)^2} d\\theta$, calculate surface areas of revolution, derive the angle $\\psi$ between radial and tangent directions, and compute curvature $\\kappa$ directly from polar expressions."}
            </p>
          </div>
          <Divider />

          <section className="section" id="polar-arc-length">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Arc Length in Polar Coordinates</h2>
            <TheoryBox title="Derivation of Arc Differential">
              <p>
                {"Since $x = r\\cos\\theta$ and $y = r\\sin\\theta$, differentiating gives $dx = (r'\\cos\\theta - r\\sin\\theta)d\\theta$ and $dy = (r'\\sin\\theta + r\\cos\\theta)d\\theta$. Adding squares:"}
              </p>
              <p>
                {"$$dx^2 + dy^2 = (r^2 + (r')^2) d\\theta^2 \\implies ds = \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} d\\theta$$"}
              </p>
              <p>
                {"The total perimeter or arc length from $\\theta = \\alpha$ to $\\theta = \\beta$ is:"}
              </p>
              <p>
                {"$$L = \\int_\\alpha^\\beta \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} d\\theta$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="polar-surface-rev">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">Surfaces of Revolution in Polar Coordinates</h2>
            <TheoryBox title="Revolving Around Axes">
              <p>
                {"Revolving the polar arc $r = f(\\theta)$ produces surfaces of revolution:\n• **About the Polar Axis ($x$-axis):** Radius is $y = r\\sin\\theta$:\n$$S = 2\\pi \\int_\\alpha^\\beta r\\sin\\theta \\sqrt{r^2 + (r')^2} d\\theta$$\n• **About the Line $\\theta = \\pi/2$ ($y$-axis):** Radius is $x = r\\cos\\theta$:\n$$S = 2\\pi \\int_\\alpha^\\beta r\\cos\\theta \\sqrt{r^2 + (r')^2} d\\theta$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="polar-curvature">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Curvature and Radial Tangent Angle</h2>
            <TheoryBox title="Intrinsic Geometric Angles">
              <p>
                {"• **Angle $\\psi$ between radial vector and tangent line:**\n$$\\tan\\psi = \\frac{r}{dr/d\\theta} = \\frac{r}{r'}$$\n• **Polar Curvature Formula:**\n$$\\kappa = \\frac{|r^2 + 2(r')^2 - r r''|}{(r^2 + (r')^2)^{3/2}}$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="polar-proc">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Polar Calculus Procedure</h2>
            <ProcedureBox title="Step-by-Step Polar Analysis Checklist" steps={[
              "Identify the curve r = f(θ) and find its derivative dr/dθ = r'.",
              "Compute the metric term r² + (r')² and factor or simplify using trigonometric identities.",
              "For arc length, integrate √(r² + (r')²) dθ over the symmetric domain.",
              "For area bounded by two curves, identify intersection angles and evaluate (1/2) ∫ (r_outer² - r_inner²) dθ.",
              "For slopes dy/dx, evaluate (r' sin θ + r cos θ) / (r' cos θ - r sin θ).",
              "For curvature, compute r'' and substitute into the polar curvature quotient.",
            ]} />
          </section>

          <section className="section" id="polar-ex2">
            <h2 className="sec-title">Advanced Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Total Perimeter (Arc Length) of a Cardioid"
              setup="Calculate the complete perimeter of the cardioid $r = a(1 - \cos\theta)$ with $a > 0$."
              steps={[
                "Compute derivative: $\\frac{dr}{d\\theta} = a\\sin\\theta$.",
                "Form the arc metric: $r^2 + (r')^2 = a^2(1 - \\cos\\theta)^2 + a^2\\sin^2\\theta = a^2(1 - 2\\cos\\theta + \\cos^2\\theta + \\sin^2\\theta) = a^2(2 - 2\\cos\\theta) = 2a^2(1 - \\cos\\theta)$.",
                "Apply half-angle identity $1 - \\cos\\theta = 2\\sin^2(\\theta/2)$:",
                "$$r^2 + (r')^2 = 4a^2\\sin^2(\\theta/2) \\implies \\sqrt{r^2 + (r')^2} = 2a\\sin(\\theta/2) \\quad \\text{for } 0 \\le \\theta \\le 2\\pi$$",
                "Evaluate the arc length integral: $L = \\int_0^{2\\pi} 2a\\sin(\\theta/2) d\\theta$.",
                "Antiderivative: $2a [-2\\cos(\\theta/2)]_0^{2\\pi} = -4a [\\cos\\pi - \\cos 0] = -4a [-1 - 1] = 8a$."
              ]}
              result="L = 8a"
              check="The cardioid fits inside a circle of diameter 2a; its perimeter 8a ≈ 2.55 × (diameter), which is geometrically consistent with an indented circle."
            />
          </section>

          <GuideMcqSection
            id="quiz-polar-calculus-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Polar Coordinate Calculus Checkpoint"
            scoreId="score-polar-calculus-checkpoint"
            section="polar-calculus-checkpoint"
            questions={CALC_A_POLAR_CALCULUS_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-polar-calculus-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Polar Coordinate Calculus (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Polar Calculus · Part 1</div></div>
        <a className="sb-link" href="#polar-derivatives">Tangent Slopes in Polar</a>
        <a className="sb-link" href="#tangents-pole">Tangents at the Pole</a>
        <a className="sb-link" href="#polar-area">Area Enclosed by Polar Curves</a>
        <a className="sb-link" href="#polar-ex1">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module A: Space Curves &amp; Motion · Part 1 of 2</div>
          <h1 className="ch-title">Polar Coordinates, Slopes &amp; Sector Areas</h1>
          <p className="ch-sub">Parametric slope formulas, pole tangents, and differential sector integration</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-101 / Math-201 Calculus & Analytical Geometry · Module A" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"Polar coordinates $(r, \\theta)$ represent points via radial distance and direction angle. In this first part, we construct the chain-rule slope formula $\\frac{dy}{dx}$, identify horizontal and vertical tangents, evaluate tangents at the pole, and derive the sector area formula $A = \\frac{1}{2}\\int r^2 d\\theta$."}
          </p>
        </div>
        <Divider />

        <section className="section" id="polar-derivatives">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Slopes and Tangent Lines</h2>
          <TheoryBox title="Chain Rule Slope Formula">
            <p>
              {"For a curve $r = f(\\theta)$, we view $\\theta$ as a parameter with $x = f(\\theta)\\cos\\theta$ and $y = f(\\theta)\\sin\\theta$. The tangent slope is:"}
            </p>
            <p>
              {"$$\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta} = \\frac{\\frac{dr}{d\\theta}\\sin\\theta + r\\cos\\theta}{\\frac{dr}{d\\theta}\\cos\\theta - r\\sin\\theta} = \\frac{r'\\sin\\theta + r\\cos\\theta}{r'\\cos\\theta - r\\sin\\theta}$$"}
            </p>
            <p>
              {"• **Horizontal tangents:** $\\frac{dy}{d\\theta} = 0$ while $\\frac{dx}{d\\theta} \\neq 0$.\n• **Vertical tangents:** $\\frac{dx}{d\\theta} = 0$ while $\\frac{dy}{d\\theta} \\neq 0$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="tangents-pole">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Tangents at the Pole (Origin)</h2>
          <TheoryBox title="Pole Geometry">
            <p>
              {"When a curve passes through the pole, $r = 0$. If $f(\\alpha) = 0$ and $f'(\\alpha) \\neq 0$, the slope formula simplifies beautifully:"}
            </p>
            <p>
              {"$$\\frac{dy}{dx} = \\frac{r'\\sin\\alpha + 0}{r'\\cos\\alpha - 0} = \\tan\\alpha$$"}
            </p>
            <p>
              {"Thus, the tangent line to the curve at the origin is simply the radial line $\\theta = \\alpha$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="polar-area">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Area Enclosed by a Polar Curve</h2>
          <TheoryBox title="Differential Sector Area">
            <p>
              {"An infinitesimal sector with angle $d\\theta$ has circular arc length $r d\\theta$, forming a triangle of base $r d\\theta$ and height $r$. Its area is $dA = \\frac{1}{2} r(r d\\theta) = \\frac{1}{2} r^2 d\\theta$."}
            </p>
            <p>
              {"$$A = \\frac{1}{2}\\int_\\alpha^\\beta [f(\\theta)]^2 d\\theta$$"}
            </p>
            <p>
              {"Between two curves $r_1(\\theta) \\le r_2(\\theta)$, the area is $A = \\frac{1}{2}\\int_\\alpha^\\beta (r_2^2 - r_1^2) d\\theta$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="polar-ex1">
          <h2 className="sec-title">Worked Area Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Area of One Petal of a Rose Curve"
            setup="Find the area enclosed by one petal of the three-leaved rose $r = \cos(3\theta)$."
            steps={[
              "Find the petal boundaries where $r = 0$: $\\cos(3\\theta) = 0 \\implies 3\\theta = -\\pi/2, \\pi/2 \\implies \\theta = -\\pi/6, \\pi/6$.",
              "Set up the sector area integral: $A = \\frac{1}{2} \\int_{-\\pi/6}^{\\pi/6} \\cos^2(3\\theta) d\\theta$.",
              "Use symmetry about the polar axis: $A = \\int_0^{\\pi/6} \\cos^2(3\\theta) d\\theta$.",
              "Apply the double-angle identity $\\cos^2(3\\theta) = \\frac{1 + \\cos(6\\theta)}{2}$:",
              "$$A = \\frac{1}{2} \\int_0^{\\pi/6} (1 + \\cos 6\\theta) d\\theta = \\frac{1}{2} \\left[ \\theta + \\frac{\\sin(6\\theta)}{6} \\right]_0^{\\pi/6} = \\frac{1}{2} \\left( \\frac{\\pi}{6} + 0 - 0 \\right) = \\frac{\\pi}{12}$$"
            ]}
            result="A = \frac{\pi}{12}"
            check="Since the rose has 3 symmetric petals, total area of all petals is 3 × (\pi/12) = \pi/4. The curve is bounded inside circle r = 1 with area \pi, consistent with \pi/4 < \pi."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for polar arc length, surfaces of revolution, angle between radius and tangent, polar curvature, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/polar-calculus/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
