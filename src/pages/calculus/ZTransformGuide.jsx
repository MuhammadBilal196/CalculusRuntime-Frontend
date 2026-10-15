import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_B_Z_TRANSFORM_QUIZ } from "../../data/calcAgSpecialQuizzes";

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

export default function ZTransformGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Transform Methods: Difference Equations & Digital Filter Stability (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Z-Transform · Part 2</div></div>
          <a className="sb-link" href="#inverse-z">Inverse Z-Transform Methods</a>
          <a className="sb-link" href="#convolution-discrete">Discrete Convolution &amp; LTI</a>
          <a className="sb-link" href="#difference-equations">Solving Difference Equations</a>
          <a className="sb-link" href="#filter-stability">BIBO Stability &amp; Pole Criteria</a>
          <a className="sb-link" href="#z-worked-examples">Certificate Examples</a>
          <a className="sb-link" href="#quiz-z-transform-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module B: Transform Methods · Part 2 of 2</div>
            <h1 className="ch-title">Difference Equations, Inversion &amp; Discrete Stability</h1>
            <p className="ch-sub">Inverse Z-transforms via partial fractions and residues, solving recurrent systems, and unit circle stability analysis</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-202 / Transform Methods · Module B (Part 2)" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this section, we apply the Z-transform to solve discrete dynamic systems: turning high-order recurrence relations into rational algebraic polynomials, inverting via partial fractions, and determining bounded-input bounded-output (BIBO) stability from pole geometries."}
            </p>
          </div>
          <Divider />

          <section className="section" id="inverse-z">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Inversion of the Z-Transform</h2>
            <TheoryBox title="Core Methods of Reconstruction">
              <ul>
                <li>
                  <strong>{"Partial Fraction Expansion (Standard Engineering Practice):"}</strong> {"Expand $X(z)/z$ into partial fractions $\\frac{X(z)}{z} = \\sum \\frac{A_k}{z - p_k}$, then multiply through by $z$ to obtain term-by-term inverses $A_k p_k^n u[n]$."}
                </li>
                <li>
                  <strong>Cauchy Residue Inversion Integral:</strong>{" "}
                  {"$x[n] = \\frac{1}{2\\pi i} \\oint_C X(z) z^{n-1}\\,dz = \\sum \\text{Res}\\left( X(z) z^{n-1}, p_k \\right)$ inside contour $C$ enclosing all poles."}
                </li>
                <li>
                  <strong>{"Power Series (Long Division):"}</strong> {"Divide numerator by denominator in descending powers of $z^{-1}$ to directly read off sequence coefficients $x[0], x[1], x[2], \\dots$."}
                </li>
              </ul>
            </TheoryBox>
          </section>

          <section className="section" id="convolution-discrete">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">Discrete Convolution &amp; LTI Transfer Function</h2>
            <TheoryBox title="Time-Domain Summation ⟷ Z-Domain Product">
              <p>
                {"The discrete convolution of sequences $x[n]$ and $h[n]$ is defined by:"}
              </p>
              <p>
                {"$$y[n] = (x * h)[n] = \\sum_{k=-\\infty}^\\infty x[k] h[n - k]$$"}
              </p>
              <p>
                {"Under the Z-transform, convolution maps to algebraic multiplication:"}
              </p>
              <p>
                {"$$\\mathcal{Z}\\{(x * h)[n]\\} = X(z) \\cdot H(z)$$"}
              </p>
              <p>
                {"where $H(z) = \\mathcal{Z}\\{h[n]\\}$ is the **System Transfer Function**, with ROC containing at least the intersection $\\text{ROC}_x \\cap \\text{ROC}_h$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="difference-equations">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Solving Linear Constant-Coefficient Difference Equations</h2>
            <ProcedureBox title="Algorithmic Solution of Initial Value Problems">
              <ol>
                <li>
                  <strong>{"Shift Property with Initial Conditions:"}</strong> {"For causal systems, use $\\mathcal{Z}\\{y[n-1]\\} = z^{-1}Y(z) + y[-1]$ and $\\mathcal{Z}\\{y[n-2]\\} = z^{-2}Y(z) + z^{-1}y[-1] + y[-2]$."}
                </li>
                <li>
                  <strong>{"Apply Z-Transform:"}</strong> {"Transform both sides of the recurrence equation $\\sum_{k=0}^N a_k y[n-k] = \\sum_{m=0}^M b_m x[n-m]$."}
                </li>
                <li>
                  <strong>{"Algebraic Isolation:"}</strong> {"Solve explicitly for the rational function $Y(z)$."}
                </li>
                <li>
                  <strong>{"Invert to Time Domain:"}</strong> {"Expand $Y(z)/z$ in partial fractions and match with known pairs to find the closed-form sequence $y[n]$."}
                </li>
              </ol>
            </ProcedureBox>
          </section>

          <section className="section" id="filter-stability">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">BIBO Stability &amp; Unit Circle Geometry</h2>
            <TheoryBox title="Bounded-Input Bounded-Output (BIBO) Stability">
              <p>
                {"A discrete-time linear time-invariant system is BIBO stable if and only if its impulse response is absolutely summable:"}
              </p>
              <p>
                {"$$\\sum_{n=-\\infty}^\\infty |h[n]| < \\infty$$"}
              </p>
              <p>
                {"In terms of the Z-domain, this requires that the **Region of Convergence includes the unit circle** $|z| = 1$."}
              </p>
              <p>
                {"For a **causal** discrete system, BIBO stability requires that **all system poles lie strictly inside the open unit disc**: $|p_k| < 1$ for all poles $p_k$ of $H(z)$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="z-worked-examples">
            <h2 className="sec-title">Certificate Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Solving Second-Order Fibonacci-Type Recurrence via Z-Transform"
              setup="Solve the initial value difference equation $y[n] - 5y[n-1] + 6y[n-2] = 0$ for $n \ge 0$, subject to initial states $y[-1] = 1, y[-2] = 1$."
              steps={[
                "Apply the unilateral shift theorem: $\\mathcal{Z}\\{y[n-1]\\} = z^{-1}Y(z) + y[-1] = z^{-1}Y(z) + 1$.",
                "Apply the two-step shift: $\\mathcal{Z}\\{y[n-2]\\} = z^{-2}Y(z) + z^{-1}y[-1] + y[-2] = z^{-2}Y(z) + z^{-1} + 1$.",
                "Substitute into equation: $Y(z) - 5\\left(z^{-1}Y(z) + 1\\right) + 6\\left(z^{-2}Y(z) + z^{-1} + 1\\right) = 0$.",
                "Group terms: $Y(z)\\left(1 - 5z^{-1} + 6z^{-2}\\right) - 5 + 6z^{-1} + 6 = 0 \\implies Y(z)(1 - 5z^{-1} + 6z^{-2}) = -(1 + 6z^{-1})$.",
                "Multiply by $z^2$: $Y(z)(z^2 - 5z + 6) = -(z^2 + 6z) \\implies Y(z) = \\frac{-z(z + 6)}{(z - 2)(z - 3)}$.",
                "Set up partial fractions for $Y(z)/z$: $\\frac{Y(z)}{z} = \\frac{-(z + 6)}{(z - 2)(z - 3)} = \\frac{A}{z - 2} + \\frac{B}{z - 3}$.",
                "Compute residues: $A = \\left. \\frac{-(z+6)}{z-3} \\right|_{z=2} = \\frac{-8}{-1} = 8$, and $B = \\left. \\frac{-(z+6)}{z-2} \\right|_{z=3} = \\frac{-9}{1} = -9$.",
                "Multiply by $z$: $Y(z) = \\frac{8z}{z - 2} - \\frac{9z}{z - 3}$.",
                "Invert term-by-term: $y[n] = 8(2^n)u[n] - 9(3^n)u[n] = \\left( 8 \\cdot 2^n - 9 \\cdot 3^n \\right) u[n]$."
              ]}
              result="y[n] = 8(2^n) - 9(3^n) \quad (n \ge 0)"
              check="Verification for $n=0$: $y[0] = 5y[-1] - 6y[-2] = 5(1) - 6(1) = -1$. Formula gives $8(1) - 9(1) = -1$. Consistent."
            />
          </section>

          <GuideMcqSection
            id="quiz-z-transform-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Z-Transform & Difference Equations Checkpoint"
            scoreId="score-z-transform-checkpoint"
            section="z-transform-checkpoint"
            questions={CALC_B_Z_TRANSFORM_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-z-transform-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Transform Methods: Z-Transform Definitions & Region of Convergence (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Z-Transform · Part 1</div></div>
        <a className="sb-link" href="#z-definition">Z-Transform Definition</a>
        <a className="sb-link" href="#s-to-z-mapping">Mapping from s-Plane (z = eˢᵀ)</a>
        <a className="sb-link" href="#roc-topology">ROC Geometry &amp; Properties</a>
        <a className="sb-link" href="#elementary-pairs">Elementary Z-Transform Pairs</a>
        <a className="sb-link" href="#z-p1-examples">Certificate Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module B: Transform Methods · Part 1 of 2</div>
          <h1 className="ch-title">The Discrete Z-Transform &amp; Complex Pole Topology</h1>
          <p className="ch-sub">From continuous Laplace poles to discrete complex rings, sampling mappings, and region of convergence analysis</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-202 / Transform Methods · Module B (Part 1)" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Operational Blueprint:</strong>{" "}
            {"The Z-transform represents the discrete-time counterpart of the continuous Laplace transform. It maps digital sequences into analytic functions over the complex $z$-plane, where exponential growth or decay translates into radial geometric convergence."}
          </p>
        </div>
        <Divider />

        <section className="section" id="z-definition">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Definition of the Z-Transform</h2>
          <TheoryBox title="Bilateral and Unilateral Formulations">
            <p>
              {"The bilateral Z-transform of a discrete-time sequence $x[n]$ is defined as the Laurent series:"}
            </p>
            <p>
              {"$$X(z) = \\mathcal{Z}\\{x[n]\\} = \\sum_{n=-\\infty}^\\infty x[n] z^{-n}$$"}
            </p>
            <p>
              {"For causal systems where $x[n] = 0$ for all $n < 0$, we utilize the **unilateral Z-transform**:"}
            </p>
            <p>
              {"$$\\mathcal{Z}_u\\{x[n]\\} = \\sum_{n=0}^\\infty x[n] z^{-n}$$"}
            </p>
            <p>
              {"Here $z = r e^{i\\omega}$ is a complex variable, decomposing $z^{-n} = r^{-n} e^{-i\\omega n}$ into an exponential damping factor $r^{-n}$ and discrete harmonic basis $e^{-i\\omega n}$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="s-to-z-mapping">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Mapping from the Continuous s-Plane</h2>
          <TheoryBox title="Conformal Geometric Transformation">
            <p>
              {"Under periodic sampling with sampling interval $T_s$, the continuous Laplace variable $s = \\sigma + i\\omega$ maps into the discrete Z-domain via:"}
            </p>
            <p>
              {"$$z = e^{s T_s} = e^{(\\sigma + i\\omega) T_s} = e^{\\sigma T_s} e^{i\\omega T_s}$$"}
            </p>
            <ul>
              <li><strong>{"Left-Half s-Plane ($\\sigma < 0$):"}</strong> {"Maps into the **interior of the unit disc** ($|z| = e^{\\sigma T_s} < 1$)."}</li>
              <li><strong>{"Imaginary Axis ($\\sigma = 0$):"}</strong> {"Maps onto the **unit circle boundary** ($|z| = 1$), representing the discrete-time Fourier transform (DTFT)."}</li>
              <li><strong>{"Right-Half s-Plane ($\\sigma > 0$):"}</strong> {"Maps into the **exterior of the unit disc** ($|z| > 1$)."}</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="roc-topology">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Region of Convergence (ROC) Geometry</h2>
          <TheoryBox title="Geometric Invariants of Convergence">
            <p>
              {"Because $X(z)$ is a power series in $z^{-1}$, its Region of Convergence consists of concentric annular rings centered at the origin $z = 0$:"}
            </p>
            <ul>
              <li><strong>{"Right-Sided (Causal) Sequences:"}</strong> {"ROC is the exterior of a circle: $|z| > R_{\\max}$."}</li>
              <li><strong>{"Left-Sided (Anti-causal) Sequences:"}</strong> {"ROC is the interior of a circle: $|z| < R_{\\min}$."}</li>
              <li><strong>{"Two-Sided (Non-causal) Sequences:"}</strong> {"ROC is an open annular strip: $R_{\\min} < |z| < R_{\\max}$."}</li>
              <li><strong>{"Finite-Duration Sequences:"}</strong> {"ROC is the entire complex plane, except possibly $z = 0$ and/or $z = \\infty$."}</li>
              <li><strong>{"Pole Invariance:"}</strong> {"The ROC **never contains any poles** of $X(z)$."}</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="elementary-pairs">
          <div className="sec-badge">Section 1.4</div>
          <h2 className="sec-title">Canonical Elementary Z-Transform Pairs</h2>
          <TheoryBox title="Standard Dictionary">
            <ul>
              <li><strong>Kronecker Delta:</strong> {"$\\mathcal{Z}\\{\\delta[n]\\} = 1, \\quad \\text{ROC: all } z$"}</li>
              <li><strong>Unit Step Function:</strong> {"$\\mathcal{Z}\\{u[n]\\} = \\frac{1}{1 - z^{-1}} = \\frac{z}{z - 1}, \\quad \\text{ROC: } |z| > 1$"}</li>
              <li><strong>Geometric Sequence:</strong> {"$\\mathcal{Z}\\{a^n u[n]\\} = \\frac{1}{1 - az^{-1}} = \\frac{z}{z - a}, \\quad \\text{ROC: } |z| > |a|$"}</li>
              <li><strong>Ramp Sequence:</strong> {"$\\mathcal{Z}\\{n a^n u[n]\\} = \\frac{a z^{-1}}{(1 - az^{-1})^2} = \\frac{az}{(z - a)^2}, \\quad \\text{ROC: } |z| > |a|$"}</li>
              <li><strong>Causal Cosine:</strong> {"$\\mathcal{Z}\\{\\cos(\\omega_0 n)u[n]\\} = \\frac{1 - z^{-1}\\cos\\omega_0}{1 - 2z^{-1}\\cos\\omega_0 + z^{-2}}, \\quad \\text{ROC: } |z| > 1$"}</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="z-p1-examples">
          <h2 className="sec-title">Worked Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Deriving the Z-Transform of a Damped Discrete Exponential"
            setup="Derive the bilateral Z-transform and Region of Convergence for the causal sequence $x[n] = 0.5^n u[n]$."
            steps={[
              "Write the definition of the unilateral Z-transform: $X(z) = \\sum_{n=0}^\\infty (0.5^n) z^{-n} = \\sum_{n=0}^\\infty (0.5 z^{-1})^n$.",
              "Recognize an infinite geometric series $\\sum_{n=0}^\\infty r^n$ with common ratio $r = 0.5 z^{-1}$.",
              "The geometric series converges if and only if $|r| < 1$, which gives $|0.5 z^{-1}| < 1 \\implies |z| > 0.5$.",
              "Apply sum of infinite geometric progression $S = \\frac{1}{1 - r}$: $X(z) = \\frac{1}{1 - 0.5 z^{-1}}$.",
              "Multiply numerator and denominator by $z$: $X(z) = \\frac{z}{z - 0.5}$.",
              "Identify pole and zero: Zero at $z = 0$, simple pole at $z = 0.5$.",
              "Specify exact ROC: Exterior disc $|z| > 0.5$."
            ]}
            result="X(z) = \frac{z}{z - 0.5}, \quad \text{ROC: } |z| > 0.5"
            check="Stability check: Since the ROC $|z| > 0.5$ contains the unit circle $|z| = 1$, the sequence $x[n]$ is BIBO stable."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for inverse Z-transforms, difference equation initial value problems, digital filter transfer functions, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/z-transforms/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
