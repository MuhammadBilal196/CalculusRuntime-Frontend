import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, PracticalTheory, RealLifeUse, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_C_FOURIER_SERIES_QUIZ } from "../../data/calcAgDev3Quizzes";

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

export default function FourierSeriesGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Fourier Series: Symmetries, Parseval & Extensions (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Fourier · Part 2</div></div>
          <a className="sb-link" href="#even-odd-series">Even &amp; Odd Symmetries</a>
          <a className="sb-link" href="#half-range">Half-Range Expansions</a>
          <a className="sb-link" href="#parseval-identity">Parseval's Identity &amp; Basel Sum</a>
          <a className="sb-link" href="#gibbs-phenom">The Gibbs Phenomenon</a>
          <a className="sb-link" href="#fourier-proc">Fourier Analysis Routine</a>
          <a className="sb-link" href="#fourier-ex2">Advanced Worked Examples</a>
          <a className="sb-link" href="#quiz-fourier-series-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module C: Complex Analysis &amp; Transforms · Part 2 of 2</div>
            <h1 className="ch-title">Half-Range Expansions, Parseval Energy &amp; Gibbs Overshoot</h1>
            <p className="ch-sub">Trigonometric symmetries, infinite series evaluations, and boundary discontinuity behavior</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-101 / Math-201 Advanced Engineering Mathematics · Module C" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we leverage parity to construct pure cosine and sine series, formulate half-range expansions on $[0, L]$, apply Parseval's identity to evaluate classic infinite series like $\\sum \\frac{1}{n^2} = \\frac{\\pi^2}{6}$, and examine the ~9% Gibbs phenomenon overshoot."}
            </p>
          </div>
          <Divider />

          <section className="section" id="even-odd-series">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Even and Odd Function Symmetries</h2>
            <TheoryBox title="Parity Simplifications on $[-L, L]$">
              <p>
                {"• **Even Functions ($f(-x) = f(x)$):** The sine coefficients vanish identically ($b_n = 0$). The series is a pure **Fourier Cosine Series**:\n$$a_0 = \\frac{2}{L}\\int_0^L f(x) dx, \\quad a_n = \\frac{2}{L}\\int_0^L f(x)\\cos\\left(\\frac{n\\pi x}{L}\\right) dx$$\n• **Odd Functions ($f(-x) = -f(x)$):** The cosine coefficients vanish identically ($a_0 = 0, a_n = 0$). The series is a pure **Fourier Sine Series**:\n$$b_n = \\frac{2}{L}\\int_0^L f(x)\\sin\\left(\\frac{n\\pi x}{L}\\right) dx$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="half-range">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">Half-Range Expansions on $[0, L]$</h2>
            <TheoryBox title="Boundary-Condition Driven Extensions">
              <p>
                {"A function $f(x)$ defined only on $[0, L]$ can be expanded into either:\n1. **Half-Range Cosine Expansion:** Extend $f(x)$ evenly to $[-L, L]$ (used for Neumann zero-flux boundaries $\\frac{\\partial u}{\\partial x} = 0$);\n2. **Half-Range Sine Expansion:** Extend $f(x)$ oddly to $[-L, L]$ (used for Dirichlet fixed-zero boundaries $u = 0$)." }
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="parseval-identity">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Parseval's Identity &amp; Series Summation</h2>
            <TheoryBox title="Energy Conservation in Function Space">
              <p>
                {"Parseval's Identity is the Pythagorean Theorem for function spaces, equating the average signal power to the sum of harmonic power components:"}
              </p>
              <p>
                {"$$\\frac{1}{L} \\int_{-L}^L [f(x)]^2 dx = \\frac{a_0^2}{2} + \\sum_{n=1}^\\infty (a_n^2 + b_n^2)$$"}
              </p>
              <p>
                {"• **Basel Problem:** Applying Parseval's identity to $f(x) = x$ on $(-\\pi, \\pi)$ yields $\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="gibbs-phenom">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">The Gibbs Phenomenon</h2>
            <TheoryBox title="Persistent Discontinuity Overshoot">
              <p>
                {"Near any jump discontinuity, the partial sums $S_N(x)$ exhibit ringing oscillations that do not disappear as $N \\to \\infty$. The overshoot remains fixed at approximately:"}
              </p>
              <p>
                {"$$\\frac{1}{\\pi} \\int_0^\\pi \\frac{\\sin t}{t} dt - \\frac{1}{2} \\approx 0.089490 \\quad (\\approx 8.95\\% \\text{ of the jump height})$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="fourier-proc">
            <div className="sec-badge">Section 2.5</div>
            <h2 className="sec-title">Fourier Calculation Routine</h2>
            <ProcedureBox title="Step-by-Step Fourier Solution Procedure" steps={[
              "Identify the period 2L and fundamental half-period L.",
              "Check for even or odd symmetry on [-L, L] to eliminate either sine or cosine terms immediately.",
              "Compute a₀ as twice the average value over [0, L] (or full average over [-L, L]).",
              "Compute aₙ and bₙ using integration by parts or trigonometric product identities.",
              "Assemble the Fourier series: f(x) ~ a₀/2 + ∑ [aₙ cos(nπx/L) + bₙ sin(nπx/L)].",
              "Evaluate at special points (e.g. x = 0, π, π/2) to determine the sums of famous numerical series.",
            ]} />
          </section>

          <section className="section" id="fourier-ex2">
            <h2 className="sec-title">Advanced Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Fourier Series of x² and Solution to the Basel Problem"
              setup="Find the Fourier series of the even function $f(x) = x^2$ on $[-\pi, \pi]$ and use it to evaluate $\sum_{n=1}^\infty \frac{1}{n^2}$ and $\sum_{n=1}^\infty \frac{(-1)^{n+1}}{n^2}$."
              steps={[
                "Since $f(x) = x^2$ is an even function, $b_n = 0$ for all $n$.",
                "Compute $a_0$: $a_0 = \\frac{2}{\\pi}\\int_0^\\pi x^2 dx = \\frac{2}{\\pi} [\\frac{x^3}{3}]_0^\\pi = \\frac{2\\pi^2}{3}$.",
                "Compute $a_n$ for $n \\ge 1$: $a_n = \\frac{2}{\\pi}\\int_0^\\pi x^2 \\cos(nx) dx$.",
                "Integrate by parts twice: $\\int x^2 \\cos(nx) dx = \\frac{x^2 \\sin(nx)}{n} + \\frac{2x\\cos(nx)}{n^2} - \\frac{2\\sin(nx)}{n^3}$.",
                "Evaluate from $0$ to $\\pi$: $[ \\frac{2x\\cos(nx)}{n^2} ]_0^\\pi = \\frac{2\\pi\\cos(n\\pi)}{n^2} = \\frac{2\\pi(-1)^n}{n^2}$.",
                "Multiply by $\\frac{2}{\\pi}$: $a_n = \\frac{4(-1)^n}{n^2}$.",
                "Fourier series: $x^2 = \\frac{a_0}{2} + \\sum_{n=1}^\\infty a_n \\cos(nx) = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2}\\cos(nx)$.",
                "Evaluate at $x = \\pi$: $\\pi^2 = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{(-1)^n(-1)^n}{n^2} = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{1}{n^2}$.",
                "Rearrange: $\\frac{2\\pi^2}{3} = 4\\sum_{n=1}^\\infty \\frac{1}{n^2} \\implies \\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$ (Basel Problem!).",
                "Evaluate at $x = 0$: $0 = \\frac{\\pi^2}{3} + 4\\sum_{n=1}^\\infty \\frac{(-1)^n}{n^2} \\implies \\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n^2} = \\frac{\\pi^2}{12}$."
              ]}
              result="x^2 = \frac{\pi^2}{3} + 4\sum_{n=1}^\infty \frac{(-1)^n}{n^2}\cos(nx), \quad \sum_{n=1}^\infty \frac{1}{n^2} = \frac{\pi^2}{6}"
              check="Parseval's identity confirms: (1/\pi)\int_{-\pi}^\pi x⁴ dx = 2\pi⁴/5 = a₀²/2 + \sum aₙ² = 2\pi⁴/9 + 16\sum 1/n⁴. This proves \sum 1/n⁴ = \pi⁴/90. Complete analytical verification."
            />
          </section>

          <GuideMcqSection
            id="quiz-fourier-series-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Fourier Series Checkpoint"
            scoreId="score-fourier-series-checkpoint"
            section="fourier-series-checkpoint"
            questions={CALC_C_FOURIER_SERIES_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-fourier-series-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Fourier Series: Foundations & Euler Formulas (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Fourier · Part 1</div></div>
        <a className="sb-link" href="#periodic-functions">Periodic Functions &amp; Dirichlet</a>
        <a className="sb-link" href="#fourier-formulas">Euler-Fourier Coefficients</a>
        <a className="sb-link" href="#orthogonality-trig">Orthogonality of Sin / Cos</a>
        <a className="sb-link" href="#fourier-ex1">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module C: Complex Analysis &amp; Transforms · Part 1 of 2</div>
          <h1 className="ch-title">Fourier Series: Orthogonality &amp; Euler Formulas</h1>
          <p className="ch-sub">Periodic signal decomposition, trigonometric basis functions, and harmonic projections</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-101 / Math-201 Advanced Engineering Mathematics · Module C" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"Fourier series decompose arbitrary periodic waveforms into infinite sums of orthogonal harmonic sines and cosines. In this first part, we examine periodicity, Dirichlet convergence conditions, orthogonality of the trigonometric system, and the Euler-Fourier coefficient formulas."}
          </p>
        </div>
        <Divider />

        <section className="section" id="periodic-functions">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Periodicity and Dirichlet Conditions</h2>
          <TheoryBox title="Convergence Criteria">
            <p>
              {"A function $f(x)$ with period $2L$ satisfies $f(x + 2L) = f(x)$. **Dirichlet's Conditions** guarantee convergence of the Fourier series if on $[-L, L]$:\n1. $f(x)$ is single-valued and piecewise continuous;\n2. $f(x)$ has a finite number of finite extrema;\n3. $f(x)$ has a finite number of jump discontinuities."}
            </p>
            <p>
              {"At any jump discontinuity $x_0$, the Fourier series converges to the midpoint $\\frac{f(x_0^+) + f(x_0^-)}{2}$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="fourier-formulas">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">The Euler-Fourier Coefficient Formulas</h2>
          <TheoryBox title="Harmonic Projection Quotients">
            <p>
              {"$$f(x) \\sim \\frac{a_0}{2} + \\sum_{n=1}^\\infty \\left[ a_n \\cos\\left(\\frac{n\\pi x}{L}\\right) + b_n \\sin\\left(\\frac{n\\pi x}{L}\\right) \\right]$$"}
            </p>
            <p>
              {"$$a_0 = \\frac{1}{L} \\int_{-L}^L f(x) dx$$"}
            </p>
            <p>
              {"$$a_n = \\frac{1}{L} \\int_{-L}^L f(x) \\cos\\left(\\frac{n\\pi x}{L}\\right) dx, \\quad b_n = \\frac{1}{L} \\int_{-L}^L f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right) dx$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="orthogonality-trig">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Orthogonality of the Trigonometric System</h2>
          <TheoryBox title="Inner Products in $L^2[-L, L]$">
            <p>
              {"The foundation of Fourier analysis is the mutual orthogonality of sines and cosines on $[-L, L]$:\n• $\\int_{-L}^L \\cos(\\frac{m\\pi x}{L}) \\cos(\\frac{n\\pi x}{L}) dx = L \\delta_{mn}$ for $m, n \\ge 1$;\n• $\\int_{-L}^L \\sin(\\frac{m\\pi x}{L}) \\sin(\\frac{n\\pi x}{L}) dx = L \\delta_{mn}$ for $m, n \\ge 1$;\n• $\\int_{-L}^L \\cos(\\frac{m\\pi x}{L}) \\sin(\\frac{n\\pi x}{L}) dx = 0$ for all $m, n$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="fourier-ex1">
          <h2 className="sec-title">Worked Fourier Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Fourier Series of a Square Wave"
            setup="Find the Fourier series of the $2\pi$-periodic square wave $f(x) = -1$ on $(-\\pi, 0)$ and $f(x) = 1$ on $(0, \\pi)$."
            steps={[
              "Recognize symmetry: $f(-x) = -f(x)$, so $f(x)$ is an odd function. Thus $a_0 = 0$ and $a_n = 0$ for all $n$.",
              "Compute sine coefficients with $L = \\pi$: $b_n = \\frac{2}{\\pi}\\int_0^\\pi (1)\\sin(nx) dx$.",
              "Antiderivative: $b_n = \\frac{2}{\\pi} [-\\frac{\\cos(nx)}{n}]_0^\\pi = \\frac{2}{n\\pi}(1 - \\cos(n\\pi)) = \\frac{2}{n\\pi}(1 - (-1)^n)$.",
              "For even $n$: $b_n = 0$. For odd $n = 2k - 1$: $b_{2k-1} = \\frac{4}{(2k - 1)\\pi}$.",
              "Assemble the Fourier series: $f(x) = \\frac{4}{\\pi}\\sum_{k=1}^\\infty \\frac{\\sin((2k - 1)x)}{2k - 1} = \\frac{4}{\\pi}\\left(\\sin x + \\frac{\\sin 3x}{3} + \\frac{\\sin 5x}{5} + \\dots\\right)$."
            ]}
            result="f(x) = \frac{4}{\\pi} \sum_{k=1}^\infty \frac{\sin((2k-1)x)}{2k-1}"
            check="Evaluate at x = \pi/2: f(\pi/2) = 1. (4/\pi)(1 - 1/3 + 1/5 - 1/7 + ...) = (4/\pi)(\pi/4) = 1. Exact match with Leibniz's series."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for even/odd symmetries, half-range expansions, Parseval's identity, the Basel sum, Gibbs phenomenon, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/fourier-series/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
