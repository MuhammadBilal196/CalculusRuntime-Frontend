import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, PracticalTheory, RealLifeUse, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_C_LAPLACE_TRANSFORMS_QUIZ } from "../../data/calcAgDev3Quizzes";

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

export default function LaplaceTransformsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Laplace Transforms: Operational Theorems & ODEs (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Laplace · Part 2</div></div>
          <a className="sb-link" href="#shifting-theorems">Shifting Theorems &amp; Heaviside</a>
          <a className="sb-link" href="#derivative-transforms">Transforms of Derivatives</a>
          <a className="sb-link" href="#convolution-theorem">Convolution Theorem</a>
          <a className="sb-link" href="#ivp-procedure">Solving Initial Value Problems</a>
          <a className="sb-link" href="#laplace-ex2">Advanced Worked Examples</a>
          <a className="sb-link" href="#quiz-laplace-transforms-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module C: Complex Analysis &amp; Transforms · Part 2 of 2</div>
            <h1 className="ch-title">Operational Theorems, Convolutions &amp; IVP Solutions</h1>
            <p className="ch-sub">Derivative transformations, step functions, and algebraic differential equations</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-101 / Math-201 Differential Equations & Transforms · Module C" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we harness the operational power of Laplace transforms. We transform derivatives into simple algebraic factors $\\mathcal{L}\\{f'\\} = sF(s) - f(0)$, handle discontinuous signals using Heaviside step functions, compute convolutions, and solve second-order initial value problems."}
            </p>
          </div>
          <Divider />

          <section className="section" id="shifting-theorems">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">The First and Second Shifting Theorems</h2>
            <TheoryBox title="Frequency and Time Translations">
              <p>
                {"• **First Shifting Theorem (Frequency Shift):**\n$$\\mathcal{L}\\{e^{at} f(t)\\} = F(s - a)$$\n• **Second Shifting Theorem (Time Shift / Delay):**\n$$\\mathcal{L}\\{f(t - c) u(t - c)\\} = e^{-cs} F(s), \\quad \\text{where } u(t - c) = \\begin{cases} 0 & t < c \\\\ 1 & t \\ge c \\end{cases}$$\n• **Dirac Delta Impulse:** $\\mathcal{L}\\{\\delta(t - c)\\} = e^{-cs}$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="derivative-transforms">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">Transforms of Derivatives and Integrals</h2>
            <TheoryBox title="Converting Calculus to Algebra">
              <p>
                {"$$\\mathcal{L}\\{f'(t)\\} = s F(s) - f(0)$$"}
              </p>
              <p>
                {"$$\\mathcal{L}\\{f''(t)\\} = s^2 F(s) - s f(0) - f'(0)$$"}
              </p>
              <p>
                {"$$\\mathcal{L}\\left\\{\\int_0^t f(\\tau) d\\tau\\right\\} = \\frac{F(s)}{s}, \\quad \\mathcal{L}\\{t f(t)\\} = -F'(s) = -\\frac{d}{ds}[F(s)]$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="convolution-theorem">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">The Convolution Theorem</h2>
            <TheoryBox title="Time-Domain Filtering">
              <p>
                {"The convolution of two functions is $(f * g)(t) = \\int_0^t f(\\tau) g(t - \\tau) d\\tau$. Under the Laplace transform:"}
              </p>
              <p>
                {"$$\\mathcal{L}\\{(f * g)(t)\\} = F(s) G(s) \\iff \\mathcal{L}^{-1}\\{F(s) G(s)\\} = (f * g)(t)$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="ivp-procedure">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Solving IVPs via Laplace Transforms</h2>
            <ProcedureBox title="Laplace ODE Solution Routine" steps={[
              "Apply the Laplace transform to both sides of the differential equation.",
              "Substitute the given initial conditions f(0), f'(0), etc.",
              "Algebraically solve for the Laplace-domain function Y(s).",
              "Decompose Y(s) into partial fractions with standard denominator terms (s - a, s² + ω², (s - a)² + ω²).",
              "Apply the inverse Laplace transform table to obtain the exact time-domain solution y(t).",
            ]} />
          </section>

          <section className="section" id="laplace-ex2">
            <h2 className="sec-title">Advanced Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Solving a Second-Order Harmonic Oscillator IVP"
              setup="Solve the initial value problem $y'' + 4y = 8e^{2t}$ with $y(0) = 0$ and $y'(0) = 2$ using Laplace transforms."
              steps={[
                "Apply Laplace transform: $\\mathcal{L}\\{y'' + 4y\\} = \\mathcal{L}\\{8e^{2t}\\}$.",
                "Expand derivative terms: $s^2 Y(s) - s y(0) - y'(0) + 4 Y(s) = \\frac{8}{s - 2}$.",
                "Insert initial conditions $y(0) = 0, y'(0) = 2$:",
                "$$s^2 Y(s) - 2 + 4 Y(s) = \\frac{8}{s - 2} \\implies (s^2 + 4)Y(s) = 2 + \\frac{8}{s - 2} = \\frac{2(s - 2) + 8}{s - 2} = \\frac{2s + 4}{s - 2}$$",
                "Solve for $Y(s)$: $Y(s) = \\frac{2s + 4}{(s - 2)(s^2 + 4)}$.",
                "Partial fraction decomposition: $\\frac{2s + 4}{(s - 2)(s^2 + 4)} = \\frac{A}{s - 2} + \\frac{Bs + C}{s^2 + 4}$.",
                "Cover-up for $A$: $A = \\frac{2(2) + 4}{2^2 + 4} = \\frac{8}{8} = 1$.",
                "Cross-multiply: $2s + 4 = 1(s^2 + 4) + (Bs + C)(s - 2) = s^2 + 4 + Bs^2 - 2Bs + Cs - 2C$.",
                "Equate coefficients: $s^2: 1 + B = 0 \\implies B = -1$. Constants: $4 - 2C = 4 \\implies C = 0$.",
                "Therefore: $Y(s) = \\frac{1}{s - 2} - \\frac{s}{s^2 + 4}$.",
                "Take inverse Laplace transform: $y(t) = \\mathcal{L}^{-1}\\left\\{\\frac{1}{s - 2}\\right\\} - \\mathcal{L}^{-1}\\left\\{\\frac{s}{s^2 + 4}\\right\\} = e^{2t} - \\cos(2t)$."
              ]}
              result="y(t) = e^{2t} - \cos(2t)"
              check="Verify initial conditions: y(0) = 1 - 1 = 0; y'(t) = 2e^{2t} + 2\sin(2t) \implies y'(0) = 2 + 0 = 2. Verify ODE: y'' + 4y = (4e^{2t} + 4\cos 2t) + 4(e^{2t} - \cos 2t) = 8e^{2t}. Completely verified."
            />
          </section>

          <GuideMcqSection
            id="quiz-laplace-transforms-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Laplace Transforms Checkpoint"
            scoreId="score-laplace-transforms-checkpoint"
            section="laplace-transforms-checkpoint"
            questions={CALC_C_LAPLACE_TRANSFORMS_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-laplace-transforms-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Laplace Transforms: Foundations & Catalog (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Laplace · Part 1</div></div>
        <a className="sb-link" href="#laplace-def">Definition &amp; Convergence</a>
        <a className="sb-link" href="#transform-catalog">Catalog of Elementary Transforms</a>
        <a className="sb-link" href="#linearity-property">Linearity &amp; Inversion</a>
        <a className="sb-link" href="#laplace-ex1">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module C: Complex Analysis &amp; Transforms · Part 1 of 2</div>
          <h1 className="ch-title">Laplace Transforms: Definitions &amp; Elementary Catalog</h1>
          <p className="ch-sub">Integral kernel mappings, frequency domain $s$, and transform tables</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-101 / Math-201 Differential Equations & Transforms · Module C" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"The Laplace transform maps continuous time-domain functions $f(t)$ into complex frequency-domain functions $F(s)$. This converts linear differential equations into simple algebraic equations. In this first part, we define the integral kernel and build the standard transformation catalog."}
          </p>
        </div>
        <Divider />

        <section className="section" id="laplace-def">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Definition and Region of Convergence</h2>
          <TheoryBox title="The Unilateral Laplace Integral">
            <p>
              {"For a piecewise continuous function $f(t)$ of exponential order (i.e. $|f(t)| \\le M e^{\\alpha t}$), its Laplace transform is:"}
            </p>
            <p>
              {"$$\\mathcal{L}\\{f(t)\\} = F(s) = \\int_0^\\infty e^{-st} f(t) dt, \\quad \\text{Re}(s) > \\alpha$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="transform-catalog">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Catalog of Elementary Transforms</h2>
          <TheoryBox title="Standard Transformation Pairs">
            <p>
              {"$$\\begin{aligned} \\mathcal{L}\\{1\\} &= \\frac{1}{s}, \\quad s > 0 \\\\ \\mathcal{L}\\{t^n\\} &= \\frac{n!}{s^{n+1}}, \\quad s > 0 \\\\ \\mathcal{L}\\{e^{at}\\} &= \\frac{1}{s - a}, \\quad s > a \\\\ \\mathcal{L}\\{\\cos\\omega t\\} &= \\frac{s}{s^2 + \\omega^2}, \\quad \\mathcal{L}\\{\\sin\\omega t\\} = \\frac{\\omega}{s^2 + \\omega^2} \\\\ \\mathcal{L}\\{\\cosh at\\} &= \\frac{s}{s^2 - a^2}, \\quad \\mathcal{L}\\{\\sinh at\\} = \\frac{a}{s^2 - a^2} \\end{aligned}$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="linearity-property">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Linearity and Inverse Transforms</h2>
          <TheoryBox title="Linear Operator Rules">
            <p>
              {"$$\\mathcal{L}\\{c_1 f_1(t) + c_2 f_2(t)\\} = c_1 F_1(s) + c_2 F_2(s)$$"}
            </p>
            <p>
              {"The inverse transform $\\mathcal{L}^{-1}\\{F(s)\\} = f(t)$ recovers the unique continuous time signal from its frequency-domain representation."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="laplace-ex1">
          <h2 className="sec-title">Worked Transform Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Transform of a Polynomial-Trigonometric Combination"
            setup="Compute the Laplace transform of $f(t) = 3t^3 - 4e^{-2t} + 5\sin(4t)$."
            steps={[
              "Apply linearity: $\\mathcal{L}\\{f(t)\\} = 3\\mathcal{L}\\{t^3\\} - 4\\mathcal{L}\\{e^{-2t}\\} + 5\\mathcal{L}\\{\\sin(4t)\\}$.",
              "Compute individual transforms from catalog:",
              "• $\\mathcal{L}\\{t^3\\} = \\frac{3!}{s^4} = \\frac{6}{s^4}$",
              "• $\\mathcal{L}\\{e^{-2t}\\} = \\frac{1}{s - (-2)} = \\frac{1}{s + 2}$",
              "• $\\mathcal{L}\\{\\sin(4t)\\} = \\frac{4}{s^2 + 16}$",
              "Multiply by coefficients: $3\\left(\\frac{6}{s^4}\\right) - 4\\left(\\frac{1}{s + 2}\\right) + 5\\left(\\frac{4}{s^2 + 16}\\right) = \\frac{18}{s^4} - \\frac{4}{s + 2} + \\frac{20}{s^2 + 16}$."
            ]}
            result="F(s) = \frac{18}{s^4} - \frac{4}{s + 2} + \frac{20}{s^2 + 16} \quad (s > 0)"
            check="Verify poles: s = 0 (multiplicity 4), s = -2, s = \pm 4i. All poles lie in Re(s) \le 0, so F(s) converges for all s > 0."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for shifting theorems, transforms of derivatives, Heaviside step functions, convolutions, ODE solving, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/laplace-transforms/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
