import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, PracticalTheory, RealLifeUse, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_B_SOLIDS_REVOLUTION_QUIZ } from "../../data/calcAgDev3Quizzes";

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

export default function SolidsRevolutionGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Solids of Revolution: Shells & Arbitrary Axes (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Solids · Part 2</div></div>
          <a className="sb-link" href="#shells-method">Cylindrical Shells Method</a>
          <a className="sb-link" href="#arbitrary-axes">Arbitrary Axes of Revolution</a>
          <a className="sb-link" href="#pappus-theorem">Pappus's Centroid Theorem</a>
          <a className="sb-link" href="#solids-proc">Method Selection Guide</a>
          <a className="sb-link" href="#solids-ex2">Advanced Worked Examples</a>
          <a className="sb-link" href="#quiz-solids-revolution-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module B: Advanced Volume &amp; Numerical · Part 2 of 2</div>
            <h1 className="ch-title">Cylindrical Shells, Offset Axes &amp; Pappus's Theorem</h1>
            <p className="ch-sub">Circumferential slicing, shifted axis geometry, and centroid trajectory theorems</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-101 / Math-102 Single-Variable Calculus · Module B" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we develop the cylindrical shells method $V = 2\\pi \\int (\\text{radius})(\\text{height}) dx$, enabling volume evaluation without inverting functions. We formulate rotations around arbitrary horizontal ($y = k$) and vertical ($x = h$) lines and leverage Pappus's Centroid Theorem."}
            </p>
          </div>
          <Divider />

          <section className="section" id="shells-method">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">The Cylindrical Shells Method</h2>
            <TheoryBox title="Circumferential Integration">
              <p>
                {"When revolving a region about the $y$-axis, slicing parallel to the axis produces nested cylindrical shells. A thin shell at distance $x$ has radius $r = x$, height $h = f(x)$, and infinitesimal thickness $dx$:"}
              </p>
              <p>
                {"$$dV = 2\\pi (\\text{radius}) (\\text{height}) dx = 2\\pi x f(x) dx$$"}
              </p>
              <p>
                {"$$V = 2\\pi \\int_a^b x [f(x) - g(x)] dx$$"}
              </p>
              <p>
                {"• **Advantage:** Slicing parallel to the axis of revolution avoids the need to express $x$ as a function of $y$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="arbitrary-axes">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">Rotations About Arbitrary Axes</h2>
            <TheoryBox title="Shifted Radii Formulations">
              <p>
                {"When the axis of revolution is shifted to $x = h$ or $y = k$:\n• **Rotation about $x = h$ (Shells):** Radius is $r = |x - h|$. Volume $V = 2\\pi \\int_a^b |x - h| [f(x) - g(x)] dx$.\n• **Rotation about $y = k$ (Washers):** Outer radius is $R = |k - g(x)|$ and inner radius is $r = |k - f(x)|$. Volume $V = \\pi \\int_a^b (R^2 - r^2) dx$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="pappus-theorem">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Pappus's Centroid Theorem for Volume</h2>
            <TheoryBox title="Centroid Trajectory">
              <p>
                {"Let a plane region $R$ with area $A$ be revolved about an external axis in its plane that does not cross the interior of $R$. The volume of the solid is:"}
              </p>
              <p>
                {"$$V = 2\\pi \\bar{d} A$$"}
              </p>
              <p>
                {"where $\\bar{d}$ is the perpendicular distance from the centroid of $R$ to the axis of revolution."}
              </p>
            </TheoryBox>
            <RealLifeUse>
              Pappus's theorem allows rapid calculation of volumes for toroidal tanks, engine gaskets, and aerodynamic nacelles by multiplying 2D cross-sectional area by the centroid orbit distance.
            </RealLifeUse>
          </section>

          <section className="section" id="solids-proc">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Method Selection Decision Tree</h2>
            <ProcedureBox title="Disk/Washer vs. Shells Selection Guide" steps={[
              "Identify the boundary curves and axis of rotation.",
              "If revolving about a horizontal line (x-axis or y = k): Disk/Washer integrates with dx (perpendicular slice); Shells integrates with dy (parallel slice).",
              "If revolving about a vertical line (y-axis or x = h): Disk/Washer integrates with dy (perpendicular slice); Shells integrates with dx (parallel slice).",
              "Choose the method that avoids solving complex non-invertible functions (e.g. y = x³ - 3x).",
              "Sketch the representative slice and determine the explicit radius expressions.",
              "Evaluate the definite integral and verify that the volume is strictly positive.",
            ]} />
          </section>

          <section className="section" id="solids-ex2">
            <h2 className="sec-title">Advanced Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Cylindrical Shells with Shifted Axis"
              setup="Find the volume generated by revolving the region bounded by $y = x^2$ and $y = 2x$ about the vertical line $x = 3$."
              steps={[
                "Find points of intersection: $x^2 = 2x \\implies x(x - 2) = 0 \\implies x = 0$ and $x = 2$.",
                "For $x \\in [0, 2]$, the line $y = 2x$ is above the parabola $y = x^2$, so height $h(x) = 2x - x^2$.",
                "The axis of revolution is $x = 3$. Since $x \\le 2 < 3$, the shell radius is $r(x) = 3 - x$.",
                "Set up the cylindrical shells integral: $V = 2\\pi \\int_0^2 (3 - x)(2x - x^2) dx$.",
                "Expand the integrand: $(3 - x)(2x - x^2) = 6x - 3x^2 - 2x^2 + x^3 = x^3 - 5x^2 + 6x$.",
                "Integrate term-by-term: $\\int_0^2 (x^3 - 5x^2 + 6x) dx = [\\frac{x^4}{4} - \\frac{5x^3}{3} + 3x^2]_0^2$.",
                "Evaluate bounds: $(\\frac{16}{4} - \\frac{40}{3} + 12) - 0 = (4 - \\frac{40}{3} + 12) = 16 - \\frac{40}{3} = \\frac{8}{3}$.",
                "Multiply by $2\\pi$: $V = 2\\pi \\left(\\frac{8}{3}\\right) = \\frac{16\\pi}{3}$."
              ]}
              result="V = \frac{16\pi}{3}"
              check="Check via Washers: x = y/2 (inner) and x = \sqrt{y} (outer). R = 3 - y/2, r = 3 - \sqrt{y}. \pi \int_0^4 [(3 - y/2)² - (3 - \sqrt{y})²] dy = \frac{16\pi}{3}. Exact agreement."
            />
          </section>

          <GuideMcqSection
            id="quiz-solids-revolution-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Solids of Revolution Checkpoint"
            scoreId="score-solids-revolution-checkpoint"
            section="solids-revolution-checkpoint"
            questions={CALC_B_SOLIDS_REVOLUTION_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-solids-revolution-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Solids of Revolution: Disks & Washers (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Solids · Part 1</div></div>
        <a className="sb-link" href="#disk-method">The Disk Method</a>
        <a className="sb-link" href="#washer-method">The Washer Method</a>
        <a className="sb-link" href="#solids-ex1">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module B: Advanced Volume &amp; Numerical · Part 1 of 2</div>
          <h1 className="ch-title">Solids of Revolution: Disks &amp; Washers</h1>
          <p className="ch-sub">Circular cross-sections, annular slices, and axial volume integration</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-101 / Math-102 Single-Variable Calculus · Module B" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"When a planar region is rotated about an axis, it sweeps out a solid of revolution. In this first part, we slice perpendicular to the axis of revolution to generate circular disks and annular washers, deriving the classic integral formulas."}
          </p>
        </div>
        <Divider />

        <section className="section" id="disk-method">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">The Disk Method</h2>
          <TheoryBox title="Perpendicular Circular Slices">
            <p>
              {"Revolving $y = f(x) \\ge 0$ on $[a, b]$ about the $x$-axis generates circular slices of radius $R(x) = f(x)$. The area of each disk is $A(x) = \\pi [f(x)]^2$:"}
            </p>
            <p>
              {"$$V = \\pi \\int_a^b [f(x)]^2 dx$$"}
            </p>
            <p>
              {"Similarly, revolving $x = g(y)$ on $[c, d]$ about the $y$-axis yields $V = \\pi \\int_c^d [g(y)]^2 dy$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="washer-method">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">The Washer Method</h2>
          <TheoryBox title="Hollowed Annular Slices">
            <p>
              {"When revolving a region between an outer curve $f(x)$ and an inner curve $g(x)$ ($0 \\le g(x) \\le f(x)$) about the $x$-axis, each slice is an annulus (washer) of outer radius $R(x) = f(x)$ and inner radius $r(x) = g(x)$:"}
            </p>
            <p>
              {"$$A(x) = \\pi R^2 - \\pi r^2 = \\pi ([f(x)]^2 - [g(x)]^2)$$"}
            </p>
            <p>
              {"$$V = \\pi \\int_a^b ([f(x)]^2 - [g(x)]^2) dx$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="solids-ex1">
          <h2 className="sec-title">Worked Disk & Washer Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Washer Volume Between a Parabola and Line"
            setup="Find the volume of the solid generated by revolving the region enclosed by $y = x^2$ and $y = 2x$ about the x-axis."
            steps={[
              "Determine intersections: $x^2 = 2x \\implies x = 0$ and $x = 2$.",
              "Identify outer and inner radii: For $x \\in [0, 2]$, $2x \\ge x^2$, so $R(x) = 2x$ and $r(x) = x^2$.",
              "Set up washer integral: $V = \\pi \\int_0^2 ([2x]^2 - [x^2]^2) dx = \\pi \\int_0^2 (4x^2 - x^4) dx$.",
              "Evaluate antiderivative: $[\\frac{4x^3}{3} - \\frac{x^5}{5}]_0^2 = (\\frac{32}{3} - \\frac{32}{5}) = 32(\\frac{5 - 3}{15}) = \\frac{64}{15}$.",
              "Multiply by $\\pi$: $V = \\frac{64\\pi}{15}$."
            ]}
            result="V = \frac{64\pi}{15} \approx 13.404"
            check="Verify bounds and non-negativity: 4x² - x⁴ ≥ 0 on [0, 2]. Result is strictly positive."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for cylindrical shells, rotations around shifted axes, Pappus's Centroid Theorem, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/solids-revolution/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
