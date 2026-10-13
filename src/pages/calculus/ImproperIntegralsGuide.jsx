import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_B_IMPROPER_INTEGRALS_QUIZ } from "../../data/calcAgDev3Quizzes";

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

export default function ImproperIntegralsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Improper Integrals: Advanced Convergence & Special Functions (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Improper · Part 2</div></div>
          <a className="sb-link" href="#cauchy-pv">Cauchy Principal Value</a>
          <a className="sb-link" href="#dirichlet-test">Dirichlet's Convergence Test</a>
          <a className="sb-link" href="#gamma-beta">Gamma &amp; Beta Functions</a>
          <a className="sb-link" href="#improper-proc">Advanced Convergence Routine</a>
          <a className="sb-link" href="#imp-ex2">Advanced Worked Examples</a>
          <a className="sb-link" href="#quiz-improper-integrals-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module B: Advanced Volume &amp; Numerical · Part 2 of 2</div>
            <h1 className="ch-title">Cauchy Principal Values, Dirichlet's Test &amp; Special Functions</h1>
            <p className="ch-sub">Singular integrations, conditional convergence, and the Euler Gamma-Beta toolkit</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-101 / Math-102 Single-Variable Calculus · Module B" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we evaluate conditionally convergent improper integrals using Dirichlet's Test, define the Cauchy Principal Value for divergent symmetric integrals, and develop Euler's Gamma and Beta transcendental functions."}
            </p>
          </div>
          <Divider />

          <section className="section" id="cauchy-pv">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">The Cauchy Principal Value (P.V.)</h2>
            <TheoryBox title="Symmetric Asymptotic Limits">
              <p>
                {"When an improper integral $\\int_{-\\infty}^\\infty f(x) dx$ diverges because the left and right infinite tails diverge separately to $\\pm\\infty$, the **Cauchy Principal Value** captures the symmetric cancellation:"}
              </p>
              <p>
                {"$$\\text{P.V.} \\int_{-\\infty}^\\infty f(x) dx = \\lim_{R \\to \\infty} \\int_{-R}^R f(x) dx$$"}
              </p>
              <p>
                {"Similarly, for an interior singularity at $c \\in (a, b)$:\n$$\\text{P.V.} \\int_a^b f(x) dx = \\lim_{\\epsilon \\to 0^+} \\left[ \\int_a^{c - \\epsilon} f(x) dx + \\int_{c + \\epsilon}^b f(x) dx \\right]$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="dirichlet-test">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">Dirichlet's Test for Improper Integrals</h2>
            <TheoryBox title="Continuous Analogue of the Alternating Series Test">
              <p>
                {"The improper integral $\\int_a^\\infty f(x) g(x) dx$ converges if:\n1. The primitive $F(x) = \\int_a^x f(t) dt$ is uniformly bounded for all $x \\ge a$: $|F(x)| \\le M$;\n2. The function $g(x)$ is monotonically decreasing to $0$ as $x \\to \\infty$."}
              </p>
              <p>
                {"• **Classic Application:** $\\int_0^\\infty \\frac{\\sin x}{x} dx = \\frac{\\pi}{2}$ converges conditionally by Dirichlet's test, while $\\int_0^\\infty \\left|\\frac{\\sin x}{x}\\right| dx = \\infty$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="gamma-beta">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Euler's Gamma and Beta Functions</h2>
            <TheoryBox title="Factorials and Binomial Integrals Generalized">
              <p>
                {"• **The Gamma Function:** Defined for $\\text{Re}(z) > 0$ by:\n$$\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t} dt, \\quad \\Gamma(z+1) = z\\Gamma(z), \\quad \\Gamma(n) = (n-1)!, \\quad \\Gamma(1/2) = \\sqrt{\\pi}$$\n• **The Beta Function:** Defined for $p, q > 0$ by:\n$$B(p, q) = \\int_0^1 t^{p-1} (1 - t)^{q-1} dt = \\frac{\\Gamma(p)\\Gamma(q)}{\\Gamma(p + q)}$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="improper-proc">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Advanced Convergence Testing Routine</h2>
            <ProcedureBox title="Step-by-Step Convergence Decision Checklist" steps={[
              "Identify all singularities: infinite boundaries (±∞) and vertical asymptotes in the integrand domain.",
              "Split the integral into separate single-singularity integrals at intermediate points.",
              "For non-negative integrands, identify dominant terms as x → ∞ (or x → c) to select comparison benchmark 1/xᵖ.",
              "Apply Direct Comparison if 0 ≤ f(x) ≤ g(x) holds with a known convergent g(x).",
              "Apply Limit Comparison if lim [f(x)/g(x)] = L ∈ (0, ∞).",
              "For oscillating integrands (e.g. sin x, cos x), apply Dirichlet's Test or integration by parts.",
            ]} />
          </section>

          <section className="section" id="imp-ex2">
            <h2 className="sec-title">Advanced Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Cauchy Principal Value of a Rational Singular Function"
              setup="Evaluate the Cauchy Principal Value $\text{P.V.} \int_{-1}^2 \frac{1}{x} dx$ and compare it with the standard improper integral."
              steps={[
                "The integrand has a non-integrable vertical asymptote at $x = 0 \\in (-1, 2)$.",
                "Standard improper definition: $\\int_{-1}^0 \\frac{1}{x} dx + \\int_0^2 \\frac{1}{x} dx = [\\ln|x|]_{-1}^0 + [\\ln|x|]_0^2 = -\\infty + \\infty$, which diverges.",
                "Cauchy Principal Value definition with symmetric exclusion $[-\\epsilon, \\epsilon]$:",
                "$$\\text{P.V.} \\int_{-1}^2 \\frac{1}{x} dx = \\lim_{\\epsilon \\to 0^+} \\left[ \\int_{-1}^{-\\epsilon} \\frac{1}{x} dx + \\int_\\epsilon^2 \\frac{1}{x} dx \\right]$$",
                "Evaluate: $[\\ln|x|]_{-1}^{-\\epsilon} + [\\ln|x|]_\\epsilon^2 = (\\ln\\epsilon - \\ln 1) + (\\ln 2 - \\ln\\epsilon)$.",
                "The singular terms $\\ln\\epsilon$ cancel identically: $\\ln\\epsilon - 0 + \\ln 2 - \\ln\\epsilon = \\ln 2$."
              ]}
              result="\text{P.V.} = \ln 2 \approx 0.69315, \quad \text{Standard Integral: Diverges}"
              check="Check symmetric cancellation: \int_{-\epsilon}^\epsilon (1/x) dx = 0 by odd function symmetry, leaving \int_1^2 (1/x) dx = \ln 2. Exact match."
            />
          </section>

          <GuideMcqSection
            id="quiz-improper-integrals-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Improper Integrals Checkpoint"
            scoreId="score-improper-integrals-checkpoint"
            section="improper-integrals-checkpoint"
            questions={CALC_B_IMPROPER_INTEGRALS_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-improper-integrals-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Improper Integrals: Types & Comparison Tests (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Improper · Part 1</div></div>
        <a className="sb-link" href="#improper-types">Type I &amp; Type II Integrals</a>
        <a className="sb-link" href="#p-test">The p-Integral Benchmarks</a>
        <a className="sb-link" href="#comparison-tests">Direct &amp; Limit Comparison</a>
        <a className="sb-link" href="#imp-ex1">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module B: Advanced Volume &amp; Numerical · Part 1 of 2</div>
          <h1 className="ch-title">Improper Integrals: Types &amp; Comparison Tests</h1>
          <p className="ch-sub">Infinite integration horizons, singular vertical asymptotes, and comparison criteria</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-101 / Math-102 Single-Variable Calculus · Module B" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"Standard Riemann integration requires bounded intervals and bounded integrands. Improper integrals extend calculus to infinite intervals (Type I) and functions with vertical asymptotes (Type II) via rigorous limit formulations."}
          </p>
        </div>
        <Divider />

        <section className="section" id="improper-types">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Classification: Type I and Type II</h2>
          <TheoryBox title="Limit Definitions">
            <p>
              {"• **Type I (Infinite Interval):** $\\int_a^\\infty f(x) dx = \\lim_{b \\to \\infty} \\int_a^b f(x) dx$.\n• **Type II (Unbounded Integrand):** If $f(x) \\to \\pm\\infty$ as $x \\to b^-$, then $\\int_a^b f(x) dx = \\lim_{t \\to b^-} \\int_a^t f(x) dx$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="p-test">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">The Fundamental $p$-Integral Tests</h2>
          <TheoryBox title="Standard Power Benchmarks">
            <p>
              {"• **Infinite Interval $[1, \\infty)$:**\n$$\\int_1^\\infty \\frac{1}{x^p} dx \\text{ converges } \\iff p > 1$$\n• **Bounded Interval with Singularity at Zero $(0, 1]$:**\n$$\\int_0^1 \\frac{1}{x^p} dx \\text{ converges } \\iff p < 1$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="comparison-tests">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Direct and Limit Comparison Tests</h2>
          <TheoryBox title="Dominance and Asymptotic Growth">
            <p>
              {"• **Direct Comparison Test:** For $0 \\le f(x) \\le g(x)$, if $\\int g(x)dx$ converges, then $\\int f(x)dx$ converges. If $\\int f(x)dx$ diverges, then $\\int g(x)dx$ diverges.\n• **Limit Comparison Test:** If $\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)} = L \\in (0, \\infty)$, then $\\int f(x)dx$ and $\\int g(x)dx$ both converge or both diverge."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="imp-ex1">
          <h2 className="sec-title">Worked Comparison Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Limit Comparison Test on an Algebraic Tail"
            setup="Determine whether $\int_1^\infty \frac{\sqrt{x} + 2}{x^2 + 5x + 1} dx$ converges or diverges."
            steps={[
              "Analyze the leading powers as $x \\to \\infty$: $\\frac{\\sqrt{x} + 2}{x^2 + 5x + 1} \\approx \\frac{x^{1/2}}{x^2} = \\frac{1}{x^{3/2}}$.",
              "Select benchmark test function: $g(x) = \\frac{1}{x^{3/2}}$.",
              "Evaluate the comparison limit $L = \\lim_{x \\to \\infty} \\frac{f(x)}{g(x)}$:",
              "$$L = \\lim_{x \\to \\infty} \\frac{\\frac{\\sqrt{x} + 2}{x^2 + 5x + 1}}{x^{-3/2}} = \\lim_{x \\to \\infty} \\frac{x^2 + 2x^{3/2}}{x^2 + 5x + 1} = 1$$",
              "Since $L = 1 \\in (0, \\infty)$, both integrals share the same convergence status.",
              "Because $\\int_1^\\infty \\frac{1}{x^{3/2}} dx$ converges ($p = 3/2 > 1$), the original integral converges."
            ]}
            result="\text{Converges by Limit Comparison with } p = 3/2 > 1"
            check="Direct bound: \frac{\sqrt{x}+2}{x²+5x+1} \le \frac{3\sqrt{x}}{x²} = \frac{3}{x^{3/2}} for large x. Direct comparison also confirms convergence."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for Cauchy Principal Value, Dirichlet's Test, the Gamma and Beta functions, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/improper-integrals-advanced/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
