import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_B_VOLUME_CROSS_SECTIONS_QUIZ } from "../../data/calcAgDev3Quizzes";

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

export default function VolumeCrossSectionsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Volume by Cross-Sections: Advanced Geometries (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Cross-Sections · Part 2</div></div>
          <a className="sb-link" href="#elliptical-wedge">Elliptical Bases &amp; Wedges</a>
          <a className="sb-link" href="#steinmetz-solid">The Steinmetz Bicylinder</a>
          <a className="sb-link" href="#cavalieri-deep">Cavalieri's Principle Applied</a>
          <a className="sb-link" href="#cross-proc">Cross-Section Method</a>
          <a className="sb-link" href="#cross-ex2">Advanced Worked Examples</a>
          <a className="sb-link" href="#quiz-volume-cross-sections-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module B: Advanced Volume &amp; Numerical · Part 2 of 2</div>
            <h1 className="ch-title">Non-Revolution Manifolds, Wedges &amp; Bicylinders</h1>
            <p className="ch-sub">Arbitrary polygonal cross-sections, cylindrical wedges, and intersecting pipe manifolds</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-101 / Math-102 Single-Variable Calculus · Module B" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we generalize slicing to non-circular 3D geometries. We calculate volumes for solids with elliptical and parabolic bases, solve the classic cylindrical wedge problem, analyze intersecting perpendicular cylinders (Steinmetz solids), and apply Cavalieri's Principle."}
            </p>
          </div>
          <Divider />

          <section className="section" id="elliptical-wedge">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Cylindrical Wedges and Elliptical Bases</h2>
            <TheoryBox title="General Slicing Formulations">
              <p>
                {"• **Cylindrical Wedge:** A cylinder of radius $R$ cut by a plane at angle $\\alpha$ through a diameter of the base has cross-sections that are right triangles of base $y(x) = \\sqrt{R^2 - x^2}$ and height $h(x) = y(x)\\tan\\alpha$. Slicing gives:\n$$A(x) = \\frac{1}{2}(R^2 - x^2)\\tan\\alpha \\implies V = 2 \\int_0^R \\frac{1}{2}(R^2 - x^2)\\tan\\alpha dx = \\frac{2}{3} R^3 \\tan\\alpha$$\n• **Elliptical Base with Triangles:** Base $x^2/a^2 + y^2/b^2 = 1$ with isosceles right triangles (hypotenuse on base) has hypotenuse $2y = 2b\\sqrt{1 - x^2/a^2}$, area $A(x) = b^2(1 - x^2/a^2)$, and volume $V = \\frac{4}{3}ab^2$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="steinmetz-solid">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">The Steinmetz Solid (Bicylinder)</h2>
            <TheoryBox title="Intersection of Two Perpendicular Cylinders">
              <p>
                {"Consider the solid of intersection of $x^2 + z^2 \\le R^2$ and $y^2 + z^2 \\le R^2$. At any height $z \\in [-R, R]$:\n• The $x$-extent is $-\\sqrt{R^2 - z^2} \\le x \\le \\sqrt{R^2 - z^2}$;\n• The $y$-extent is $-\\sqrt{R^2 - z^2} \\le y \\le \\sqrt{R^2 - z^2}$."}
              </p>
              <p>
                {"Thus each horizontal slice at height $z$ is an exact **square** of side $s(z) = 2\\sqrt{R^2 - z^2}$. Area $A(z) = 4(R^2 - z^2)$:"}
              </p>
              <p>
                {"$$V = \\int_{-R}^R 4(R^2 - z^2) dz = 8\\left[R^2 z - \\frac{z^3}{3}\\right]_0^R = \\frac{16}{3} R^3$$"}
              </p>
              <p>
                {"Notice that this volume contains no factor of $\\pi$, despite being the intersection of two circular pipes!"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="cavalieri-deep">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Cavalieri's Principle in Three Dimensions</h2>
            <TheoryBox title="Geometric Equivalence Theorem">
              <p>
                {"If in two solids of equal altitude, the sections made by planes parallel to and at the same distance from the respective bases are always in a given ratio, then the volumes of the two solids are also in that same ratio."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="cross-proc">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Cross-Section Slicing Method</h2>
            <ProcedureBox title="Step-by-Step Cross-Section Analysis" steps={[
              "Determine the 2D base region in the xy-plane and sketch the boundary curves.",
              "Identify the direction of slicing: perpendicular to x-axis (integrate dx) or y-axis (integrate dy).",
              "Find the chord length s(x) across the base as a function of the independent variable.",
              "Use the specified cross-section geometry to express A(x): Square (s²), Equilateral triangle ((√3/4)s²), Semicircle ((π/8)s²), Isosceles right triangle ((1/4)s² or (1/2)s²).",
              "Integrate V = ∫ₐᵇ A(x) dx over the full span of the base.",
            ]} />
          </section>

          <section className="section" id="cross-ex2">
            <h2 className="sec-title">Advanced Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Equilateral Triangle Cross-Sections on a Parabolic Base"
              setup="A solid has its base bounded by the parabola $y = 4 - x^2$ and the x-axis. Cross-sections perpendicular to the y-axis are equilateral triangles. Find the total volume."
              steps={[
                "The base is bounded by $y = 0$ to $y = 4$. For a given $y$, $x^2 = 4 - y \\implies x = \\pm \\sqrt{4 - y}$.",
                "The side length of the equilateral triangle at height $y$ is $s(y) = 2\\sqrt{4 - y}$.",
                "The area of an equilateral triangle with side $s$ is $A(y) = \\frac{\\sqrt{3}}{4} s(y)^2$.",
                "Substitute $s(y)$: $A(y) = \\frac{\\sqrt{3}}{4} [4(4 - y)] = \\sqrt{3}(4 - y)$.",
                "Integrate with respect to $y$ from $0$ to $4$:",
                "$$V = \\int_0^4 \\sqrt{3}(4 - y) dy = \\sqrt{3} \\left[ 4y - \\frac{y^2}{2} \\right]_0^4 = \\sqrt{3} (16 - 8) = 8\\sqrt{3}$$"
              ]}
              result="V = 8\sqrt{3} \approx 13.856"
              check="Check units and magnitude: Average side length is roughly 2.3, height of solid is 4, producing expected magnitude ~14."
            />
          </section>

          <GuideMcqSection
            id="quiz-volume-cross-sections-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Volume by Cross-Sections Checkpoint"
            scoreId="score-volume-cross-sections-checkpoint"
            section="volume-cross-sections-checkpoint"
            questions={CALC_B_VOLUME_CROSS_SECTIONS_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-volume-cross-sections-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Volume by Cross-Sections: Foundations (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Cross-Sections · Part 1</div></div>
        <a className="sb-link" href="#slicing-concept">The Slicing Principle</a>
        <a className="sb-link" href="#geometric-shapes">Standard Cross-Section Geometries</a>
        <a className="sb-link" href="#cross-ex1">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module B: Advanced Volume &amp; Numerical · Part 1 of 2</div>
          <h1 className="ch-title">Volume by Cross-Sections: Known Slices</h1>
          <p className="ch-sub">Cavalieri's foundation, square slices, equilateral profiles, and semicircular vaults</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-101 / Math-102 Single-Variable Calculus · Module B" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"Unlike solids of revolution which always feature circular symmetry, solids with known cross-sections can feature squares, triangles, rectangles, or semicircles built upon arbitrary 2D base regions. In this first part, we establish the general slicing formula $V = \\int_a^b A(x) dx$."}
          </p>
        </div>
        <Divider />

        <section className="section" id="slicing-concept">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">The General Slicing Principle</h2>
          <TheoryBox title="Riemann Integration of Volume Slices">
            <p>
              {"Let a solid be bounded by planes perpendicular to the $x$-axis at $x = a$ and $x = b$. If the cross-sectional area perpendicular to the $x$-axis is $A(x)$, the volume is:"}
            </p>
            <p>
              {"$$V = \\int_a^b A(x) dx$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="geometric-shapes">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Catalog of Standard Cross-Section Areas</h2>
          <TheoryBox title="Formulas in terms of Base Width $s(x)$">
            <p>
              {"Let $s(x)$ be the chord length across the base region at position $x$:\n• **Square:** $A(x) = s(x)^2$;\n• **Equilateral Triangle:** $A(x) = \\frac{\\sqrt{3}}{4} s(x)^2$;\n• **Semicircle (diameter $s$):** $A(x) = \\frac{1}{2}\\pi \\left(\\frac{s}{2}\\right)^2 = \\frac{\\pi}{8} s(x)^2$;\n• **Isosceles Right Triangle (hypotenuse on base):** $A(x) = \\frac{1}{4} s(x)^2$;\n• **Isosceles Right Triangle (leg on base):** $A(x) = \\frac{1}{2} s(x)^2$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="cross-ex1">
          <h2 className="sec-title">Worked Slicing Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Square Cross-Sections on a Circular Base"
            setup="A solid has a circular base of radius $R$ defined by $x^2 + y^2 \le R^2$. Cross-sections perpendicular to the x-axis are squares. Calculate its volume."
            steps={[
              "At each $x \\in [-R, R]$, the circle extends from $y = -\\sqrt{R^2 - x^2}$ to $y = \\sqrt{R^2 - x^2}$.",
              "The side length of the square is $s(x) = 2\\sqrt{R^2 - x^2}$.",
              "The area of the square cross-section is $A(x) = [s(x)]^2 = 4(R^2 - x^2)$.",
              "Integrate along the diameter $[-R, R]$ using symmetry:",
              "$$V = \\int_{-R}^R 4(R^2 - x^2) dx = 8 \\int_0^R (R^2 - x^2) dx = 8 \\left[ R^2 x - \\frac{x^3}{3} \\right]_0^R = 8 \\left( R^3 - \\frac{R^3}{3} \\right) = \\frac{16}{3} R^3$$"
            ]}
            result="V = \frac{16}{3} R^3"
            check="Compare with sphere of radius R: V_{sphere} = (4/3)\pi R³ \approx 4.19 R³, while V_{squares} = 5.33 R³. Since squares circumscribe the circular disks of the sphere, 5.33 R³ > 4.19 R³ is geometrically exact."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for non-revolution manifolds, cylindrical wedges, the Steinmetz bicylinder, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/volume-cross-sections/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
