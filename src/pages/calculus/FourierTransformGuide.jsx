import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_B_FOURIER_TRANSFORM_QUIZ } from "../../data/calcAgSpecialQuizzes";

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

function CrossLinkCard({ title, path, description, badge }) {
  return (
    <div
      style={{
        background: "rgba(99, 102, 241, 0.08)",
        border: "1px solid rgba(99, 102, 241, 0.25)",
        borderRadius: "12px",
        padding: "1.25rem 1.5rem",
        margin: "1.25rem 0",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
        <span style={{ fontWeight: 700, color: "var(--indigo-400, #818cf8)", fontSize: "1rem" }}>
          🔗 Prerequisite Reference: {title}
        </span>
        <span style={{ fontSize: "0.75rem", padding: "0.2rem 0.6rem", borderRadius: "999px", background: "rgba(99, 102, 241, 0.2)", color: "#c7d2fe" }}>
          {badge}
        </span>
      </div>
      <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted, #94a3b8)" }}>
        {description}
      </p>
      <Link
        to={path}
        style={{
          alignSelf: "flex-start",
          marginTop: "0.5rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.4rem",
          fontSize: "0.88rem",
          fontWeight: 600,
          color: "#a5b4fc",
          textDecoration: "underline",
        }}
      >
        Open Guide ({title}) →
      </Link>
    </div>
  );
}

export default function FourierTransformGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Transform Methods: Fourier Convolution & Energy Spectral Theorems (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Fourier Transform · Part 2</div></div>
          <a className="sb-link" href="#crosslink-foundations">Cross-Link Foundations</a>
          <a className="sb-link" href="#convolution-theorem">Convolution Theorem</a>
          <a className="sb-link" href="#lti-systems">LTI Impulse Response &amp; Transfer</a>
          <a className="sb-link" href="#parseval-plancherel">Parseval-Plancherel Theorem</a>
          <a className="sb-link" href="#modulation-scaling">Modulation &amp; Scaling Rules</a>
          <a className="sb-link" href="#fourier-worked-examples">Certificate Examples</a>
          <a className="sb-link" href="#quiz-fourier-transform-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module B: Transform Methods · Part 2 of 2</div>
            <h1 className="ch-title">Convolution Operators, Plancherel Energy &amp; System Transfer</h1>
            <p className="ch-sub">Time-domain convolution, frequency multiplication, spectral energy conservation, and filter transfer functions</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-202 / Transform Methods · Module B (Part 2)" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this section, we unlock the computational power of the Fourier Transform: turning time-domain convolution integrals into algebraic frequency products, establishing unitary energy conservation via Plancherel's theorem, and formulating system transfer responses."}
            </p>
          </div>
          <Divider />

          <section className="section" id="crosslink-foundations">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Core Cross-Links to Series &amp; Laplace Foundations</h2>
            <p>
              {"The continuous Fourier Transform directly extends the discrete orthogonal harmonics developed in our Fourier Series guide and evaluates the bilateral Laplace transform along the imaginary frequency line:"}
            </p>
            <CrossLinkCard
              title="Fourier Series & Parseval Identity"
              path="/fourier-series/1"
              badge="Module C Topic 4"
              description="Review trigonometric expansions over compact intervals [-L, L], harmonic coefficients aₙ and bₙ, and discrete energy convergence before moving into continuous spectra."
            />
            <CrossLinkCard
              title="Laplace Transforms & Operational Theorems"
              path="/laplace-transforms/1"
              badge="Module C Topic 3"
              description="Review complex s-plane convergence strips, causal initial value problems, and operational derivative pairs connected via s = σ + iω with σ = 0."
            />
          </section>

          <section className="section" id="convolution-theorem">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">The Continuous Convolution Theorem</h2>
            <TheoryBox title="Time Convolution ⟷ Frequency Multiplication">
              <p>
                {"The continuous convolution of two integrable functions $f(t)$ and $g(t)$ is defined as:"}
              </p>
              <p>
                {"$$(f * g)(t) = \\int_{-\\infty}^\\infty f(\\tau) g(t - \\tau)\\,d\\tau$$"}
              </p>
              <p>
                {"Applying the Fourier transform yields the fundamental algebraic property:"}
              </p>
              <p>
                {"$$\\mathcal{F}\\{(f * g)(t)\\} = F(\\omega) \\cdot G(\\omega)$$"}
              </p>
              <p>
                {"Dually, multiplication in the time domain corresponds to normalized convolution in the frequency spectrum:"}
              </p>
              <p>
                {"$$\\mathcal{F}\\{f(t) \\cdot g(t)\\} = \\frac{1}{2\\pi} (F * G)(\\omega) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty F(\\xi) G(\\omega - \\xi)\\,d\\xi$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="lti-systems">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Linear Time-Invariant (LTI) Systems &amp; Frequency Response</h2>
            <ProcedureBox title="Input-Output Spectral Synthesis">
              <ol>
                <li>
                  <strong>Impulse Response $h(t)$:</strong> An LTI system is completely characterized by its response to Dirac impulse $\delta(t)$.
                </li>
                <li>
                  <strong>Output Convolution:</strong> For any arbitrary driving input $x(t)$, system output is $y(t) = (x * h)(t)$.
                </li>
                <li>
                  <strong>Transfer Function $H(\\omega)$:</strong> Taking transforms yields $Y(\\omega) = X(\\omega) H(\\omega)$, where $H(\\omega) = \\mathcal{F}\\{h(t)\\}$.
                </li>
                <li>
                  <strong>Inverse Reconstruction:</strong> Recover output time history via $y(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty X(\\omega) H(\\omega) e^{i\\omega t}\\,d\\omega$.
                </li>
              </ol>
            </ProcedureBox>
          </section>

          <section className="section" id="parseval-plancherel">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Parseval-Plancherel Energy Conservation Theorem</h2>
            <TheoryBox title="Unitary Isometry of Fourier Space">
              <p>
                {"If $f(t), g(t) \\in L^2(\\mathbb{R})$, the inner product and $L^2$-energy norm are preserved under the Fourier transform:"}
              </p>
              <p>
                {"$$\\int_{-\\infty}^\\infty f(t) \\overline{g(t)}\\,dt = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty F(\\omega) \\overline{G(\\omega)}\\,d\\omega$$"}
              </p>
              <p>
                {"In particular, setting $g(t) = f(t)$ yields Plancherel's energy conservation formula:"}
              </p>
              <p>
                {"$$\\int_{-\\infty}^\\infty |f(t)|^2\\,dt = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty |F(\\omega)|^2\\,d\\omega$$"}
              </p>
              <p>
                {"The quantity $|F(\\omega)|^2$ represents the **Energy Spectral Density (ESD)** of the signal."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="modulation-scaling">
            <div className="sec-badge">Section 2.5</div>
            <h2 className="sec-title">Operational Transform Properties</h2>
            <TheoryBox title="Core Symmetries & Operational Rules">
              <ul>
                <li><strong>Time Shifting:</strong> {"$\\mathcal{F}\\{f(t - t_0)\\} = e^{-i\\omega t_0} F(\\omega)$"}</li>
                <li><strong>Frequency Shifting (Modulation):</strong> {"$\\mathcal{F}\\{e^{i\\omega_0 t} f(t)\\} = F(\\omega - \\omega_0)$"}</li>
                <li><strong>Time Scaling:</strong> {"$\\mathcal{F}\\{f(at)\\} = \\frac{1}{|a|} F\\left(\\frac{\\omega}{a}\\right) \\quad (a \\ne 0)$"}</li>
                <li><strong>Differentiation in Time:</strong> {"$\\mathcal{F}\\{f^{(n)}(t)\\} = (i\\omega)^n F(\\omega)$"}</li>
                <li><strong>Differentiation in Frequency:</strong> {"$\\mathcal{F}\\{(-it)^n f(t)\\} = \\frac{d^n F}{d\\omega^n}$"}</li>
              </ul>
            </TheoryBox>
          </section>

          <section className="section" id="fourier-worked-examples">
            <h2 className="sec-title">Certificate Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Laplace Density Spectral Convolution & Sinc² Integral via Plancherel"
              setup="Use the Fourier transform of the rectangular pulse $\Pi(t) = 1$ for $|t| \le 1/2$ and Plancherel's theorem to evaluate $\int_{-\infty}^\infty \frac{\sin^2(x)}{x^2}\,dx$."
              steps={[
                "Recall the Fourier transform of $\\Pi(t)$: $F(\\omega) = \\int_{-1/2}^{1/2} e^{-i\\omega t}\\,dt = \\frac{2\\sin(\\omega/2)}{\\omega}$.",
                "Compute time-domain signal energy: $\\int_{-\\infty}^\\infty |\\Pi(t)|^2\\,dt = \\int_{-1/2}^{1/2} 1^2\\,dt = 1$.",
                "Apply Plancherel's identity: $\\int_{-\\infty}^\\infty |f(t)|^2\\,dt = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty |F(\\omega)|^2\\,d\\omega \\implies 1 = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty \\frac{4\\sin^2(\\omega/2)}{\\omega^2}\\,d\\omega$.",
                "Substitute $x = \\omega / 2 \\implies \\omega = 2x, \\, d\\omega = 2\\,dx$:",
                "$\\int_{-\\infty}^\\infty \\frac{4\\sin^2(x)}{(2x)^2} (2\\,dx) = 2 \\int_{-\\infty}^\\infty \\frac{\\sin^2(x)}{x^2}\\,dx$.",
                "Equate both sides: $1 = \\frac{1}{2\\pi} \\cdot 2 \\int_{-\\infty}^\\infty \\frac{\\sin^2(x)}{x^2}\\,dx = \\frac{1}{\\pi} \\int_{-\\infty}^\\infty \\frac{\\sin^2(x)}{x^2}\\,dx$.",
                "Conclude: $\\int_{-\\infty}^\\infty \\frac{\\sin^2(x)}{x^2}\\,dx = \\pi$."
              ]}
              result="\int_{-\infty}^\infty \frac{\sin^2(x)}{x^2}\,dx = \pi"
              check="Consistency verified: Matches Dirichlet sinc integral via contour residue integration."
            />
          </section>

          <GuideMcqSection
            id="quiz-fourier-transform-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Fourier Transform & Convolution Checkpoint"
            scoreId="score-fourier-transform-checkpoint"
            section="fourier-transform-checkpoint"
            questions={CALC_B_FOURIER_TRANSFORM_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-fourier-transform-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Transform Methods: Continuous Fourier Transform & Spectral Pairs (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Fourier Transform · Part 1</div></div>
        <a className="sb-link" href="#fourier-integral">Fourier Integral Limit</a>
        <a className="sb-link" href="#transform-pairs">Forward &amp; Inverse Pairs</a>
        <a className="sb-link" href="#bilateral-laplace">Connection to Laplace (s = iω)</a>
        <a className="sb-link" href="#canonical-pairs">Canonical Transform Pairs</a>
        <a className="sb-link" href="#fourier-p1-examples">Certificate Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module B: Transform Methods · Part 1 of 2</div>
          <h1 className="ch-title">The Continuous Fourier Transform &amp; Dual Space</h1>
          <p className="ch-sub">From discrete Fourier series to continuous spectral representations, bilateral Laplace duality, and basic transform pairs</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-202 / Transform Methods · Module B (Part 1)" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Operational Blueprint:</strong>{" "}
            {"We bridge the gap from periodic signals to arbitrary transient waveforms by expanding the fundamental period $T \\to \\infty$. This replaces discrete harmonic coefficients with continuous spectral distributions, enabling direct frequency-domain analysis."}
          </p>
        </div>
        <Divider />

        <section className="section" id="fourier-integral">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">The Fourier Integral as a Continuum Limit</h2>
          <TheoryBox title="From Periodic Series to Continuum Spectrum">
            <p>
              {"Consider a periodic signal with fundamental period $T_0 = 2L$ and harmonic frequency spacing $\\Delta\\omega = \\frac{2\\pi}{T_0}$. As $T_0 \\to \\infty$, the frequency spacing shrinks to an infinitesimal differential $d\\omega$, converting discrete summation into Riemann integration:"}
            </p>
            <p>
              {"$$f(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty \\left[ \\int_{-\\infty}^\\infty f(\\tau) e^{-i\\omega\\tau}\\,d\\tau \\right] e^{i\\omega t}\\,d\\omega$$"}
            </p>
            <p>
              {"This decomposition is valid whenever $f(t)$ satisfies Dirichlet's conditions: absolute integrability $\\int_{-\\infty}^\\infty |f(t)|\\,dt < \\infty$, bounded variation, and finite discontinuities in every finite interval."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="transform-pairs">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Continuous Fourier Transform Pairs</h2>
          <TheoryBox title="Forward and Inverse Definitions">
            <p>
              {"The forward continuous Fourier transform $\\mathcal{F}\\{f(t)\\} = F(\\omega)$ maps a time-domain signal $f(t)$ into its continuous angular frequency spectrum:"}
            </p>
            <p>
              {"$$F(\\omega) = \\int_{-\\infty}^\\infty f(t) e^{-i\\omega t}\\,dt$$"}
            </p>
            <p>
              {"The inverse Fourier transform reconstructs $f(t)$ across all continuous harmonic frequencies:"}
            </p>
            <p>
              {"$$f(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty F(\\omega) e^{i\\omega t}\\,d\\omega$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="bilateral-laplace">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Connection to Bilateral Laplace Transform</h2>
          <TheoryBox title="Evaluation on the Imaginary Frequency Axis">
            <p>
              {"Recall the bilateral Laplace transform defined over the complex plane $s = \\sigma + i\\omega$:"}
            </p>
            <p>
              {"$$\\mathcal{L}_b\\{f(t)\\} = \\int_{-\\infty}^\\infty f(t) e^{-st}\\,dt$$"}
            </p>
            <p>
              {"Setting the real damping parameter $\\sigma = 0$ yields $s = i\\omega$. Provided the region of convergence (ROC) of $\\mathcal{L}_b\\{f(t)\\}$ contains the imaginary axis $\\text{Re}(s) = 0$, the continuous Fourier transform is simply the Laplace transform evaluated along the imaginary axis:"}
            </p>
            <p>
              {"$$F(\\omega) = \\left. \\mathcal{L}_b\\{f(t)\\} \\right|_{s = i\\omega}$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="canonical-pairs">
          <div className="sec-badge">Section 1.4</div>
          <h2 className="sec-title">Canonical Elementary Transform Pairs</h2>
          <TheoryBox title="Standard Waveform Spectra">
            <ul>
              <li><strong>Dirac Impulse:</strong> {"$\\mathcal{F}\\{\\delta(t)\\} = 1$ (white spectrum with equal power at all frequencies)"}</li>
              <li><strong>Rectangular Pulse:</strong> {"$\\mathcal{F}\\{\\Pi_T(t)\\} = T \\,\\text{sinc}\\left(\\frac{\\omega T}{2\\pi}\\right) = \\frac{2\\sin(\\omega T/2)}{\\omega}$"}</li>
              <li><strong>One-Sided Damped Exponential:</strong> {"$\\mathcal{F}\\{e^{-at} u(t)\\} = \\frac{1}{a + i\\omega} \\quad (a > 0)$"}</li>
              <li><strong>Two-Sided Symmetrical Exponential:</strong> {"$\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2} \\quad (a > 0)$"}</li>
              <li><strong>Gaussian Wavepacket:</strong> {"$\\mathcal{F}\\{e^{-at^2}\\} = \\sqrt{\\frac{\\pi}{a}} e^{-\\frac{\\omega^2}{4a}} \\quad (a > 0)$"}</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="fourier-p1-examples">
          <h2 className="sec-title">Worked Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Fourier Transform of Two-Sided Damped Exponential"
            setup="Derive the continuous Fourier transform of the symmetric exponential signal $f(t) = e^{-a|t|}$ where $a > 0$."
            steps={[
              "Split the integral into negative and positive time domains: $F(\\omega) = \\int_{-\\infty}^0 e^{at} e^{-i\\omega t}\\,dt + \\int_0^\\infty e^{-at} e^{-i\\omega t}\\,dt$.",
              "Combine exponents in each integral: $F(\\omega) = \\int_{-\\infty}^0 e^{(a - i\\omega)t}\\,dt + \\int_0^\\infty e^{-(a + i\\omega)t}\\,dt$.",
              "Evaluate the negative domain integral: $\\left[ \\frac{e^{(a - i\\omega)t}}{a - i\\omega} \\right]_{-\\infty}^0 = \\frac{1}{a - i\\omega} - 0 = \\frac{1}{a - i\\omega}$.",
              "Evaluate the positive domain integral: $\\left[ \\frac{e^{-(a + i\\omega)t}}{-(a + i\\omega)} \\right]_0^\\infty = 0 - \\left(-\\frac{1}{a + i\\omega}\\right) = \\frac{1}{a + i\\omega}$.",
              "Sum both partial fractions: $F(\\omega) = \\frac{1}{a - i\\omega} + \\frac{1}{a + i\\omega} = \\frac{(a + i\\omega) + (a - i\\omega)}{(a - i\\omega)(a + i\\omega)} = \\frac{2a}{a^2 + \\omega^2}$."
            ]}
            result="F(\omega) = \frac{2a}{a^2 + \omega^2}"
            check="Symmetry check: Since $f(t)$ is real and even, its spectrum $F(\omega)$ is purely real and even, with zero imaginary component."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for the convolution theorem, LTI system transfer functions, Parseval-Plancherel energy conservation, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/fourier-transforms/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
