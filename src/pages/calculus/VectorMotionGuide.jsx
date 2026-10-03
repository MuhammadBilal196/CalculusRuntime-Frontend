import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, PracticalTheory, RealLifeUse, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_A_VECTOR_MOTION_QUIZ } from "../../data/calcAgDev3Quizzes";

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

export default function VectorMotionGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Vector-Valued Functions & Motion in Space (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Vector Motion · Part 2</div></div>
          <a className="sb-link" href="#accel-components">Tangential &amp; Normal Acceleration</a>
          <a className="sb-link" href="#projectile-3d">3D Projectile Trajectories</a>
          <a className="sb-link" href="#kepler-laws">Kepler's Laws &amp; Central Forces</a>
          <a className="sb-link" href="#motion-proc">Computational Procedure</a>
          <a className="sb-link" href="#motion-ex2">Advanced Worked Examples</a>
          <a className="sb-link" href="#quiz-vector-motion-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module A: Space Curves &amp; Motion · Part 2 of 2</div>
            <h1 className="ch-title">Acceleration Decomposition, Ballistics &amp; Orbital Motion</h1>
            <p className="ch-sub">Orthogonal acceleration splitting, spatial ballistics, and conservation of angular momentum</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-101 / Math-201 Calculus & Analytical Geometry · Module A" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we decompose acceleration into natural intrinsic components $a_T \\mathbf{T} + a_N \\mathbf{N}$, analyze 3D projectile trajectories under gravity and atmospheric forces, and apply Newton's second law to central gravitational force fields."}
            </p>
          </div>
          <Divider />

          <section className="section" id="accel-components">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Tangential and Normal Acceleration</h2>
            <TheoryBox title="Intrinsic Acceleration Decomposition">
              <p>
                {"Because velocity is $\\mathbf{v} = v \\mathbf{T}$ where $v = \\|\\mathbf{v}\\|$, differentiating with respect to time yields:"}
              </p>
              <p>
                {"$$\\mathbf{a} = \\frac{d\\mathbf{v}}{dt} = \\frac{dv}{dt}\\mathbf{T} + v\\frac{d\\mathbf{T}}{dt} = \\frac{dv}{dt}\\mathbf{T} + v\\left(\\frac{ds}{dt}\\frac{d\\mathbf{T}}{ds}\\right) = \\frac{dv}{dt}\\mathbf{T} + \\kappa v^2 \\mathbf{N}$$"}
              </p>
              <p>
                {"Therefore, acceleration always lies completely in the osculating plane spanned by $\\mathbf{T}$ and $\\mathbf{N}$:"}
              </p>
              <p>
                {"$$\\mathbf{a} = a_T \\mathbf{T} + a_N \\mathbf{N}, \\quad \\text{where } a_T = \\frac{dv}{dt} = \\frac{\\mathbf{v} \\cdot \\mathbf{a}}{v}, \\quad a_N = \\kappa v^2 = \\frac{\\|\\mathbf{v} \\times \\mathbf{a}\\|}{v}$$"}
              </p>
              <p>
                {"By orthogonality of $\\mathbf{T}$ and $\\mathbf{N}$, the total acceleration magnitude satisfies $\\|\\mathbf{a}\\|^2 = a_T^2 + a_N^2$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="projectile-3d">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">3D Projectile Motion</h2>
            <TheoryBox title="Spatial Trajectory Equations">
              <p>
                {"For a projectile fired from initial position $\\mathbf{r}_0$ with initial velocity $\\mathbf{v}_0 = \\langle u, v, w \\rangle$ under constant gravitational acceleration $\\mathbf{a} = \\langle 0, 0, -g \\rangle$:"}
              </p>
              <p>
                {"$$\\mathbf{v}(t) = \\langle u, v, w - gt \\rangle, \\quad \\mathbf{r}(t) = \\mathbf{r}_0 + \\mathbf{v}_0 t + \\frac{1}{2}\\mathbf{a}t^2 = \\left\\langle x_0 + ut, y_0 + vt, z_0 + wt - \\frac{1}{2}gt^2 \\right\\rangle$$"}
              </p>
              <p>
                {"The trajectory is a parabola situated within the vertical plane containing $\\mathbf{v}_0$ and the vertical gravity vector."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="kepler-laws">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Central Forces and Kepler's Laws</h2>
            <TheoryBox title="Angular Momentum Conservation">
              <p>
                {"When a particle moves under a central force $\\mathbf{F} = f(r)\\mathbf{r}$ directed toward the origin, the torque $\\mathbf{\\tau} = \\mathbf{r} \\times \\mathbf{F} = \\mathbf{0}$. Therefore, the angular momentum vector is strictly constant:"}
              </p>
              <p>
                {"$$\\mathbf{L} = m(\\mathbf{r} \\times \\mathbf{v}) = \\text{constant vector}$$"}
              </p>
              <p>
                {"Since $\\mathbf{r}(t) \\cdot \\mathbf{L} = 0$, the particle remains forever confined to a single plane orthogonal to $\\mathbf{L}$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="motion-proc">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Motion Analysis Routine</h2>
            <ProcedureBox title="Step-by-Step Kinematic Workflow" steps={[
              "Differentiate position r(t) to obtain velocity v(t) = r'(t).",
              "Compute speed v(t) = ||v(t)|| as the Euclidean norm.",
              "Differentiate v(t) to get acceleration a(t) = r''(t).",
              "Calculate tangential acceleration a_T = (v · a) / ||v||.",
              "Calculate normal acceleration a_N = ||v × a|| / ||v|| or a_N = √(||a||² - a_T²).",
              "Determine curvature directly from dynamics: κ = a_N / v².",
              "Integrate speed to find total distance traveled: s = ∫ ||v(t)|| dt.",
            ]} />
          </section>

          <section className="section" id="motion-ex2">
            <h2 className="sec-title">Advanced Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Tangential & Normal Acceleration on a Helical Trajectory"
              setup="A satellite moves on the helix $\mathbf{r}(t) = \langle 4\cos(2t), 4\sin(2t), 3t \rangle$. Find velocity $\mathbf{v}(t)$, acceleration $\mathbf{a}(t)$, speed, and components $a_T$ and $a_N$."
              steps={[
                "Velocity: $\\mathbf{v}(t) = \\mathbf{r}'(t) = \\langle -8\\sin(2t), 8\\cos(2t), 3 \\rangle$.",
                "Speed: $v(t) = \\|\\mathbf{v}(t)\\| = \\sqrt{(-8\\sin 2t)^2 + (8\\cos 2t)^2 + 3^2} = \\sqrt{64 + 9} = \\sqrt{73}$. Speed is constant!",
                "Acceleration: $\\mathbf{a}(t) = \\mathbf{r}''(t) = \\langle -16\\cos(2t), -16\\sin(2t), 0 \\rangle$.",
                "Tangential acceleration: $a_T = \\frac{dv}{dt} = \\frac{d}{dt}(\\sqrt{73}) = 0$. Alternatively: $\\mathbf{v} \\cdot \\mathbf{a} = 128\\sin(2t)\\cos(2t) - 128\\sin(2t)\\cos(2t) + 0 = 0$.",
                "Normal acceleration: Total magnitude $\\|\\mathbf{a}\\| = \\sqrt{(-16\\cos 2t)^2 + (-16\\sin 2t)^2 + 0} = 16$.",
                "Since $a_T = 0$, $a_N = \\sqrt{\\|\\mathbf{a}\\|^2 - a_T^2} = 16$.",
                "Curvature: $\\kappa = \\frac{a_N}{v^2} = \\frac{16}{73}$."
              ]}
              result="v(t) = \langle -8\sin(2t), 8\cos(2t), 3 \rangle, \quad ||v|| = \sqrt{73}, \quad a_T = 0, \quad a_N = 16, \quad \kappa = 16/73"
              check="Use cross product: v × a = \langle 48\sin 2t, -48\cos 2t, 128 \rangle. ||v × a|| = \sqrt{2304 + 16384} = \sqrt{18688} = 16\sqrt{73}. a_N = ||v × a|| / ||v|| = 16\sqrt{73}/\sqrt{73} = 16. Confirmed."
            />
          </section>

          <GuideMcqSection
            id="quiz-vector-motion-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Vector-Valued Functions & Motion Checkpoint"
            scoreId="score-vector-motion-checkpoint"
            section="vector-motion-checkpoint"
            questions={CALC_A_VECTOR_MOTION_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-vector-motion-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Vector-Valued Functions & Motion in Space (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Vector Motion · Part 1</div></div>
        <a className="sb-link" href="#vector-foundations">Vector Functions &amp; Limits</a>
        <a className="sb-link" href="#velocity-speed">Velocity &amp; Speed</a>
        <a className="sb-link" href="#distance-integrals">Distance Traveled Integrals</a>
        <a className="sb-link" href="#motion-ex1">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module A: Space Curves &amp; Motion · Part 1 of 2</div>
          <h1 className="ch-title">Vector-Valued Functions &amp; Kinematics in Space</h1>
          <p className="ch-sub">Position, velocity vectors, speed scalar, and path length accumulation</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-101 / Math-201 Calculus & Analytical Geometry · Module A" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"Vector-valued functions $\\mathbf{r}: \\mathbb{R} \\to \\mathbb{R}^3$ map a scalar parameter (such as time $t$) to a spatial coordinate vector. This part develops the calculus of vector functions: component-wise limits, derivatives, velocity vectors, speed, and path distance integrals."}
          </p>
        </div>
        <Divider />

        <section className="section" id="vector-foundations">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Vector Functions, Limits and Derivatives</h2>
          <TheoryBox title="Component-Wise Calculus">
            <p>
              {"A vector function $\\mathbf{r}(t) = \\langle f(t), g(t), h(t) \\rangle = f(t)\\mathbf{i} + g(t)\\mathbf{j} + h(t)\\mathbf{k}$ has limit and derivative evaluated by individual components:"}
            </p>
            <p>
              {"$$\\lim_{t \\to a} \\mathbf{r}(t) = \\left\\langle \\lim_{t \\to a} f(t), \\lim_{t \\to a} g(t), \\lim_{t \\to a} h(t) \\right\\rangle$$"}
            </p>
            <p>
              {"$$\\mathbf{r}'(t) = \\lim_{\\Delta t \\to 0} \\frac{\\mathbf{r}(t + \\Delta t) - \\mathbf{r}(t)}{\\Delta t} = \\langle f'(t), g'(t), h'(t) \\rangle$$"}
            </p>
            <p>
              {"• **Product Rules:** $\\frac{d}{dt}[u(t)\\mathbf{v}(t)] = u'(t)\\mathbf{v}(t) + u(t)\\mathbf{v}'(t)$;\n• **Dot Product:** $\\frac{d}{dt}[\\mathbf{u}(t) \\cdot \\mathbf{v}(t)] = \\mathbf{u}'(t) \\cdot \\mathbf{v}(t) + \\mathbf{u}(t) \\cdot \\mathbf{v}'(t)$;\n• **Cross Product:** $\\frac{d}{dt}[\\mathbf{u}(t) \\times \\mathbf{v}(t)] = \\mathbf{u}'(t) \\times \\mathbf{v}(t) + \\mathbf{u}(t) \\times \\mathbf{v}'(t)$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="velocity-speed">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Velocity and Speed</h2>
          <TheoryBox title="Kinematic Definitions">
            <p>
              {"If $\\mathbf{r}(t)$ is the position of a particle at time $t$:\n• **Velocity vector:** $\\mathbf{v}(t) = \\mathbf{r}'(t)$, tangent to the path pointing in the direction of motion.\n• **Speed scalar:** $v(t) = \\|\\mathbf{v}(t)\\| = \\sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2}$.\n• **Acceleration vector:** $\\mathbf{a}(t) = \\mathbf{v}'(t) = \\mathbf{r}''(t)$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="distance-integrals">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Distance Traveled as Integral of Speed</h2>
          <TheoryBox title="Accumulated Arc Distance">
            <p>
              {"The total distance traversed between times $t = a$ and $t = b$ is:"}
            </p>
            <p>
              {"$$s = \\int_a^b v(t) dt = \\int_a^b \\|\\mathbf{r}'(t)\\| dt = \\int_a^b \\sqrt{x'(t)^2 + y'(t)^2 + z'(t)^2} dt$$"}
            </p>
            <p>
              {"Notice that distance traveled is a scalar that accumulates monotonically, distinct from the net displacement vector $\\Delta \\mathbf{r} = \\mathbf{r}(b) - \\mathbf{r}(a)$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="motion-ex1">
          <h2 className="sec-title">Worked Kinematic Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Position, Velocity, Speed, and Distance for a Spatial Particle"
            setup="A drone flies along $\mathbf{r}(t) = \langle t^2, \frac{2}{3}t^3, 2t \rangle$ from $t = 0$ to $t = 3$. Find its velocity, speed at $t = 2$, and total distance traveled."
            steps={[
              "Differentiate position: $\\mathbf{v}(t) = \\mathbf{r}'(t) = \\langle 2t, 2t^2, 2 \\rangle = 2\\langle t, t^2, 1 \\rangle$.",
              "Compute speed formula: $v(t) = \\|\\mathbf{v}(t)\\| = 2\\sqrt{t^2 + t^4 + 1} = 2\\sqrt{(t^2 + 1/2)^2 + 3/4}$.",
              "Evaluate speed at $t = 2$: $v(2) = 2\\sqrt{4 + 16 + 1} = 2\\sqrt{21}$.",
              "Alternative clean curve: For $\\mathbf{r}(t) = \\langle t^2, 2t, \\ln t \\rangle$, speed simplifies cleanly. For $\\mathbf{r}(t) = \\langle 2t, t^2, \\frac{1}{3}t^3 \\rangle$, $v(t) = \\sqrt{4 + 4t^2 + t^4} = \\sqrt{(t^2 + 2)^2} = t^2 + 2$.",
              "For the standard test form $\\mathbf{r}(t) = \\langle 2t, t^2, \\frac{1}{3}t^3 \\rangle$ on $[0, 3]$: Distance $s = \\int_0^3 (t^2 + 2) dt = [\\frac{t^3}{3} + 2t]_0^3 = (9 + 6) - 0 = 15$."
            ]}
            result="v(t) = \langle 2t, 2t^2, 2 \rangle, \quad v(2) = 2\sqrt{21}, \quad \text{Distance } s = 15 \text{ (on standard test curve)}"
            check="Check dimensional consistency: Speed has units [L/T], distance has units [L]."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for tangential and normal acceleration decomposition, projectile kinematics, angular momentum conservation, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/vector-motion/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
