import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, PracticalTheory, RealLifeUse, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_C_HYPERBOLIC_FUNCTIONS_QUIZ } from "../../data/calcAgDev3Quizzes";

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

export default function HyperbolicFunctionsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Hyperbolic Functions & Inverses (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Hyperbolics · Part 2</div></div>
          <a className="sb-link" href="#inverse-hyperbolics">Inverse Hyperbolic Functions</a>
          <a className="sb-link" href="#hyperbolic-integrals">Standard Integrals &amp; Inverses</a>
          <a className="sb-link" href="#catenary-engineering">Catenary Engineering</a>
          <a className="sb-link" href="#hyp-proc">Hyperbolic Calculus Method</a>
          <a className="sb-link" href="#hyp-ex2">Advanced Worked Examples</a>
          <a className="sb-link" href="#quiz-hyperbolic-functions-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module C: Complex Analysis &amp; Transforms · Part 2 of 2</div>
            <h1 className="ch-title">Inverse Hyperbolics, Standard Integrals &amp; Catenary Modeling</h1>
            <p className="ch-sub">Logarithmic representations, quadratic radical integrals, and suspension geometry</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-101 / Math-102 Single-Variable Calculus · Module C" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we derive the logarithmic formulas for inverse hyperbolic functions, evaluate the classic radical integrals $\\int \\frac{dx}{\\sqrt{x^2 \\pm a^2}}$, and apply $\\cosh$ to the catenary curve governing high-voltage transmission lines and suspension bridges."}
            </p>
          </div>
          <Divider />

          <section className="section" id="inverse-hyperbolics">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Inverse Hyperbolic Functions</h2>
            <TheoryBox title="Logarithmic Formulations">
              <p>
                {"Because hyperbolic functions are defined in terms of exponentials, their inverses are expressible in terms of natural logarithms:"}
              </p>
              <p>
                {"$$\\begin{aligned} \\text{arsinh}(x) &= \\ln(x + \\sqrt{x^2 + 1}), \\quad -\\infty < x < \\infty \\\\ \\text{arcosh}(x) &= \\ln(x + \\sqrt{x^2 - 1}), \\quad x \\ge 1 \\\\ \\text{artanh}(x) &= \\frac{1}{2}\\ln\\left(\\frac{1 + x}{1 - x}\\right), \\quad -1 < x < 1 \\end{aligned}$$"}
              </p>
              <p>
                {"• **Derivatives of Inverses:**\n$$\\frac{d}{dx}[\\text{arsinh } x] = \\frac{1}{\\sqrt{x^2 + 1}}, \\quad \\frac{d}{dx}[\\text{arcosh } x] = \\frac{1}{\\sqrt{x^2 - 1}}, \\quad \\frac{d}{dx}[\\text{artanh } x] = \\frac{1}{1 - x^2}$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="hyperbolic-integrals">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">Standard Integrals via Hyperbolic Substitution</h2>
            <TheoryBox title="Table of Canonical Antiderivatives">
              <p>
                {"$$\\int \\frac{dx}{\\sqrt{x^2 + a^2}} = \\text{arsinh}\\left(\\frac{x}{a}\\right) + C = \\ln\\left(x + \\sqrt{x^2 + a^2}\\right) + C_1$$"}
              </p>
              <p>
                {"$$\\int \\frac{dx}{\\sqrt{x^2 - a^2}} = \\text{arcosh}\\left(\\frac{x}{a}\\right) + C = \\ln\\left(x + \\sqrt{x^2 - a^2}\\right) + C_1 \\quad (x > a)$$"}
              </p>
              <p>
                {"$$\\int \\frac{dx}{a^2 - x^2} = \\frac{1}{a}\\text{artanh}\\left(\\frac{x}{a}\\right) + C = \\frac{1}{2a}\\ln\\left|\\frac{a + x}{a - x}\\right| + C \\quad (|x| < a)$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="catenary-engineering">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">The Catenary in Civil Engineering</h2>
            <TheoryBox title="Suspended Cable Geometry">
              <p>
                {"A uniform flexible cable hanging under its own weight assumes the catenary curve $y = a\\cosh(x/a)$ where $a = T_0 / w$ ($T_0$ is horizontal tension, $w$ is linear weight density):\n• **Arc Length:** $L = a\\sinh(b/a)$;\n• **Surface Area of Revolution:** Revolving the catenary creates the catenoid, the only minimal surface of revolution in $\\mathbb{R}^3$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="hyp-proc">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Hyperbolic Method Checklist</h2>
            <ProcedureBox title="Step-by-Step Hyperbolic Routine" steps={[
              "For integrals containing √(x² + a²), use substitution x = a sinh u with dx = a cosh u du.",
              "For integrals containing √(x² - a²), use substitution x = a cosh u with dx = a sinh u du.",
              "Use identity cosh² u - sinh² u = 1 to eliminate the radical.",
              "To solve equations involving cosh x and sinh x, substitute eˣ = u and solve the resulting polynomial.",
              "Convert inverse hyperbolic results to natural logarithms using the logarithmic formulas.",
            ]} />
          </section>

          <section className="section" id="hyp-ex2">
            <h2 className="sec-title">Advanced Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Arc Length and Surface Area of a Catenary"
              setup="Find the exact arc length of the catenary $y = 3\cosh(x/3)$ from $x = 0$ to $x = 3\ln 2$."
              steps={[
                "Compute derivative: $y' = 3 \\cdot \\frac{1}{3}\\sinh(x/3) = \\sinh(x/3)$.",
                "Form the arc length differential: $1 + (y')^2 = 1 + \\sinh^2(x/3) = \\cosh^2(x/3)$.",
                "Therefore: $\\sqrt{1 + (y')^2} = \\cosh(x/3)$.",
                "Set up arc length integral: $L = \\int_0^{3\\ln 2} \\cosh(x/3) dx$.",
                "Antiderivative: $[3\\sinh(x/3)]_0^{3\\ln 2} = 3\\sinh(\\ln 2) - 3\\sinh(0)$.",
                "Evaluate $\\sinh(\\ln 2)$: $\\frac{e^{\\ln 2} - e^{-\\ln 2}}{2} = \\frac{2 - 1/2}{2} = \\frac{3/2}{2} = \\frac{3}{4}$.",
                "Multiply by 3: $L = 3 \\left(\\frac{3}{4}\\right) = \\frac{9}{4} = 2.25$."
              ]}
              result="L = \frac{9}{4} = 2.25"
              check="Geometric check: Straight line distance from (0, 3) to (3\ln 2, 3\cosh(\ln 2)) = (2.079, 3.75) is \sqrt{2.079² + 0.75²} \approx 2.21 < 2.25. Geometrically authentic."
            />
          </section>

          <GuideMcqSection
            id="quiz-hyperbolic-functions-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Hyperbolic & Inverse Hyperbolics Checkpoint"
            scoreId="score-hyperbolic-functions-checkpoint"
            section="hyperbolic-functions-checkpoint"
            questions={CALC_C_HYPERBOLIC_FUNCTIONS_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-hyperbolic-functions-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Hyperbolic Functions & Inverses (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Hyperbolics · Part 1</div></div>
        <a className="sb-link" href="#hyperbolic-def">Definitions &amp; Geometry</a>
        <a className="sb-link" href="#hyperbolic-identities">Hyperbolic Identities</a>
        <a className="sb-link" href="#hyperbolic-derivatives">Derivatives &amp; Integrals</a>
        <a className="sb-link" href="#hyp-ex1">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module C: Complex Analysis &amp; Transforms · Part 1 of 2</div>
          <h1 className="ch-title">Hyperbolic Functions: Definitions &amp; Identities</h1>
          <p className="ch-sub">Exponential combinations, the unit hyperbola, and differential properties</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-101 / Math-102 Single-Variable Calculus · Module C" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"Hyperbolic functions represent the symmetric (even) and antisymmetric (odd) components of natural exponential growth. While trigonometric functions parameterize the unit circle $x^2 + y^2 = 1$, hyperbolic functions parameterize the unit hyperbola $x^2 - y^2 = 1$."}
          </p>
        </div>
        <Divider />

        <section className="section" id="hyperbolic-def">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Definitions and Geometry</h2>
          <TheoryBox title="Exponential Formulations">
            <p>
              {"$$\\sinh x = \\frac{e^x - e^{-x}}{2}, \\quad \\cosh x = \\frac{e^x + e^{-x}}{2}$$"}
            </p>
            <p>
              {"$$\\tanh x = \\frac{\\sinh x}{\\cosh x} = \\frac{e^x - e^{-x}}{e^x + e^{-x}}, \\quad \\text{sech } x = \\frac{1}{\\cosh x}, \\quad \\text{csch } x = \\frac{1}{\\sinh x}, \\quad \\coth x = \\frac{\\cosh x}{\\sinh x}$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="hyperbolic-identities">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Fundamental Identities</h2>
          <TheoryBox title="Hyperbolic vs. Circular Identities">
            <p>
              {"• **Pythagorean Analogues:** $\\cosh^2 x - \\sinh^2 x = 1$, $1 - \\tanh^2 x = \\text{sech}^2 x$, $\\coth^2 x - 1 = \\text{csch}^2 x$;\n• **Double Argument:** $\\sinh(2x) = 2\\sinh x \\cosh x$, $\\cosh(2x) = \\cosh^2 x + \\sinh^2 x = 2\\cosh^2 x - 1 = 1 + 2\\sinh^2 x$;\n• **Addition Formulas:** $\\sinh(x \\pm y) = \\sinh x \\cosh y \\pm \\cosh x \\sinh y$, $\\cosh(x \\pm y) = \\cosh x \\cosh y \\pm \\sinh x \\sinh y$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="hyperbolic-derivatives">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Derivatives and Basic Antiderivatives</h2>
          <TheoryBox title="Calculus Rules">
            <p>
              {"$$\\frac{d}{dx}[\\sinh x] = \\cosh x, \\quad \\frac{d}{dx}[\\cosh x] = \\sinh x, \\quad \\frac{d}{dx}[\\tanh x] = \\text{sech}^2 x$$"}
            </p>
            <p>
              {"$$\\int \\sinh x dx = \\cosh x + C, \\quad \\int \\cosh x dx = \\sinh x + C, \\quad \\int \\text{sech}^2 x dx = \\tanh x + C$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="hyp-ex1">
          <h2 className="sec-title">Worked Hyperbolic Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Solving an Exponential-Hyperbolic Equation"
            setup="Find all real solutions of the equation $3\sinh x + \cosh x = 1$."
            steps={[
              "Express in terms of $e^x$: $3\\left(\\frac{e^x - e^{-x}}{2}\\right) + \\frac{e^x + e^{-x}}{2} = 1$.",
              "Multiply by 2: $3(e^x - e^{-x}) + e^x + e^{-x} = 2$.",
              "Combine like terms: $4e^x - 2e^{-x} = 2 \\implies 2e^x - e^{-x} = 1$.",
              "Multiply by $e^x$ and set $u = e^x > 0$: $2u^2 - u - 1 = 0$.",
              "Factor quadratic: $(2u + 1)(u - 1) = 0$.",
              "Since $u = e^x > 0$, discard $u = -1/2$.",
              "Thus $u = 1 \\implies e^x = 1 \\implies x = 0$."
            ]}
            result="x = 0"
            check="Substitute x = 0: 3\sinh(0) + \cosh(0) = 3(0) + 1 = 1. Exact match."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for inverse hyperbolic functions, logarithmic formulas, standard radical integrals, catenary mechanics, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/hyperbolic-functions/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
