import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_A_LEIBNIZ_RULE_QUIZ } from "../../data/calcAgSpecialQuizzes";

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

export default function LeibnizRuleGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Differentiation Under the Integral Sign: Feynman's Technique (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Leibniz Rule · Part 2</div></div>
          <a className="sb-link" href="#feynman-trick">Feynman's Integration Trick</a>
          <a className="sb-link" href="#dirichlet-integral">The Dirichlet Integral</a>
          <a className="sb-link" href="#frullani-integrals">Frullani Integrals</a>
          <a className="sb-link" href="#gaussian-derivatives">Gaussian Moments</a>
          <a className="sb-link" href="#feynman-worked-examples">Certificate Examples</a>
          <a className="sb-link" href="#quiz-leibniz-rule-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module A: Special Functions · Part 2 of 2</div>
            <h1 className="ch-title">Feynman's Technique &amp; Parametric Definite Integrals</h1>
            <p className="ch-sub">Differentiation under the integral sign as a powerhouse method for non-elementary definite integration</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-201 / Advanced Calculus · Module A (Part 2)" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we deploy Feynman's technique of differentiating under the integral sign. By embedding a difficult definite integral inside an auxiliary parametric family $I(\\alpha)$, differentiating with respect to $\\alpha$, and solving the resulting differential equation, we evaluate non-elementary integrals without complex contour analysis."}
            </p>
          </div>
          <Divider />

          <section className="section" id="feynman-trick">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Feynman's Integration Technique</h2>
            <ProcedureBox
              title="The 4-Step Parametric Integration Method"
              steps={[
                "Identify an intractable definite integral $I = \\int_a^b g(t)\\,dt$.",
                "Introduce an auxiliary parameter $\\alpha$ to form a parametric integral $I(\\alpha) = \\int_a^b f(\\alpha, t)\\,dt$ such that $I(\\alpha_0) = I$ and $I(\\alpha_1)$ is trivial (often 0).",
                "Differentiate under the integral sign with respect to $\\alpha$: $I'(\\alpha) = \\int_a^b \\frac{\\partial f}{\\partial \\alpha}(\\alpha, t)\\,dt$, evaluating the simplified integral analytically.",
                "Integrate the derivative $I'(\\alpha)$ back with respect to $\\alpha$, applying the boundary condition $I(\\alpha_1)$ to determine the constant of integration and evaluate $I(\\alpha_0)$."
              ]}
            />
          </section>

          <section className="section" id="dirichlet-integral">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">The Dirichlet Integral</h2>
            <TheoryBox title="Evaluation of \int_0^\infty \frac{\sin x}{x}\,dx">
              <p>
                {"Define the damped parametric family for $\\alpha \\ge 0$:"}
              </p>
              <p>
                {"$$I(\\alpha) = \\int_0^\\infty e^{-\\alpha x} \\frac{\\sin x}{x}\\,dx$$"}
              </p>
              <p>
                {"Differentiating under the integral sign eliminates the troublesome denominator $x$:"}
              </p>
              <p>
                {"$$I'(\\alpha) = \\int_0^\\infty \\frac{\\partial}{\\partial \\alpha}\\left[ e^{-\\alpha x} \\frac{\\sin x}{x} \\right] dx = -\\int_0^\\infty e^{-\\alpha x} \\sin x\\,dx = -\\frac{1}{\\alpha^2 + 1}$$"}
              </p>
              <p>
                {"Integrating $I'(\\alpha)$ yields $I(\\alpha) = -\\arctan(\\alpha) + C$. Because $\\lim_{\\alpha \\to \\infty} I(\\alpha) = 0$, we find $-\\frac{\\pi}{2} + C = 0 \\implies C = \\frac{\\pi}{2}$. Setting $\\alpha = 0$ gives:"}
              </p>
              <p>
                {"$$\\int_0^\\infty \\frac{\\sin x}{x}\\,dx = I(0) = \\frac{\\pi}{2}$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="frullani-integrals">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Frullani Integrals &amp; Logarithmic Ratios</h2>
            <TheoryBox title="Frullani's General Formula">
              <p>
                {"For any continuous function $f(t)$ such that $f(0)$ and $f(\\infty) = \\lim_{t \\to \\infty} f(t)$ exist, and $a, b > 0$:"}
              </p>
              <p>
                {"$$\\int_0^\\infty \\frac{f(ax) - f(bx)}{x}\\,dx = [f(0) - f(\\infty)] \\ln\\left(\\frac{b}{a}\\right)$$"}
              </p>
              <p>
                {"**Classic Special Case:** For $f(t) = e^{-t}$ with $f(0) = 1$ and $f(\\infty) = 0$:"}
              </p>
              <p>
                {"$$\\int_0^\\infty \\frac{e^{-ax} - e^{-bx}}{x}\\,dx = \\ln\\left(\\frac{b}{a}\\right)$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="gaussian-derivatives">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Higher-Order Gaussian Moments</h2>
            <TheoryBox title="Parametric Gaussian Differentiation">
              <p>
                {"Starting from the fundamental Gaussian integral $\\int_{-\\infty}^\\infty e^{-\\alpha x^2}\\,dx = \\sqrt{\\frac{\\pi}{\\alpha}} = \\pi^{1/2} \\alpha^{-1/2}$ ($a > 0$), differentiating repeatedly with respect to $\\alpha$ generates all even polynomial moments:"}
              </p>
              <p>
                {"$$\\int_{-\\infty}^\\infty x^2 e^{-\\alpha x^2}\\,dx = -\\frac{d}{d\\alpha}\\left[\\pi^{1/2}\\alpha^{-1/2}\\right] = \\frac{1}{2}\\sqrt{\\frac{\\pi}{\\alpha^3}}$$"}
              </p>
              <p>
                {"$$\\int_{-\\infty}^\\infty x^4 e^{-\\alpha x^2}\\,dx = \\frac{d^2}{d\\alpha^2}\\left[\\pi^{1/2}\\alpha^{-1/2}\\right] = \\frac{3}{4}\\sqrt{\\frac{\\pi}{\\alpha^5}}$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="feynman-worked-examples">
            <h2 className="sec-title">Certificate Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Evaluating \int_0^1 \frac{x^a - 1}{\ln x}\,dx via Differentiation Under Integral"
              setup="Evaluate the non-elementary integral $F(a) = \int_0^1 \frac{x^a - 1}{\ln x}\,dx$ for $a > -1$."
              steps={[
                "Notice that the denominator $\\ln x$ causes difficulty, but $\\frac{\\partial}{\\partial a}[x^a] = x^a \\ln x$.",
                "Differentiate under the integral sign with respect to parameter $a$:",
                "$$F'(a) = \\frac{d}{da} \\int_0^1 \\frac{x^a - 1}{\\ln x}\\,dx = \\int_0^1 \\frac{\\partial}{\\partial a}\\left(\\frac{x^a - 1}{\\ln x}\\right) dx = \\int_0^1 \\frac{x^a \\ln x}{\\ln x}\\,dx = \\int_0^1 x^a\\,dx$$",
                "Evaluate the elementary integral: $F'(a) = \\left[ \\frac{x^{a+1}}{a + 1} \\right]_0^1 = \\frac{1}{a + 1}$ for $a > -1$.",
                "Integrate $F'(a)$ with respect to $a$: $F(a) = \\int \\frac{1}{a + 1}\\,da = \\ln(a + 1) + C$.",
                "Apply the initial condition at $a = 0$: $F(0) = \\int_0^1 \\frac{x^0 - 1}{\\ln x}\\,dx = \\int_0^1 0\\,dx = 0$.",
                "Therefore, $\\ln(0 + 1) + C = 0 \\implies C = 0$, giving $F(a) = \\ln(a + 1)$."
              ]}
              result="F(a) = \ln(a + 1)"
              check="For $a = 1$: $\int_0^1 \frac{x - 1}{\ln x}\,dx = \ln 2 \approx 0.693147$, which matches standard numerical quadrature."
            />
          </section>

          <GuideMcqSection
            id="quiz-leibniz-rule-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Leibniz Integral Rule Checkpoint"
            scoreId="score-leibniz-rule-checkpoint"
            section="leibniz-rule-checkpoint"
            questions={CALC_A_LEIBNIZ_RULE_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-leibniz-rule-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Differentiation Under the Integral Sign: Leibniz Rule (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Leibniz Rule · Part 1</div></div>
        <a className="sb-link" href="#constant-limits">Constant Limits Formula</a>
        <a className="sb-link" href="#variable-limits">Variable Limits Formula</a>
        <a className="sb-link" href="#chain-rule-derivation">Multivariable Chain Rule</a>
        <a className="sb-link" href="#regularity-conditions">Regularity Conditions</a>
        <a className="sb-link" href="#leibniz-examples">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module A: Special Functions · Part 1 of 2</div>
          <h1 className="ch-title">The Leibniz Integral Rule &amp; Variable Boundaries</h1>
          <p className="ch-sub">Interchanging differentiation and integration, boundary rate terms, and the multivariable chain rule</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-201 / Advanced Calculus · Module A (Part 1)" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"The Leibniz Integral Rule describes how a definite integral changes when the integrand, the integration boundaries, or both depend on an independent parameter $x$. In this first part, we formalize the general formula with moving boundaries and analyze its mathematical regularity requirements."}
          </p>
        </div>
        <Divider />

        <section className="section" id="constant-limits">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Leibniz Rule for Constant Limits</h2>
          <TheoryBox title="Interchanging Derivative and Integral">
            <p>
              {"Let $f(x, t)$ be continuous and have a continuous partial derivative $\\frac{\\partial f}{\\partial x}(x, t)$ on $[c, d] \\times [a, b]$. Then:"}
            </p>
            <p>
              {"$$\\frac{d}{dx} \\int_a^b f(x, t)\\,dt = \\int_a^b \\frac{\\partial f}{\\partial x}(x, t)\\,dt$$"}
            </p>
            <p>
              {"This allows differentiation with respect to $x$ to pass directly past the integral sign into the integrand."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="variable-limits">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">The General Leibniz Rule with Variable Limits</h2>
          <TheoryBox title="Full Leibniz Integral Theorem">
            <p>
              {"If both limits $a(x)$ and $b(x)$ are differentiable functions of $x$, the total derivative contains both boundary velocity terms and the interior rate:"}
            </p>
            <p>
              {"$$\\frac{d}{dx} \\int_{a(x)}^{b(x)} f(x, t)\\,dt = f(x, b(x)) \\cdot b'(x) - f(x, a(x)) \\cdot a'(x) + \\int_{a(x)}^{b(x)} \\frac{\\partial f}{\\partial x}(x, t)\\,dt$$"}
            </p>
            <p>
              {"• **Term 1 ($f(x, b(x))b'(x)$):** Rate of area accumulation added by the moving upper boundary.\n• **Term 2 ($-f(x, a(x))a'(x)$):** Rate of area subtracted by the moving lower boundary.\n• **Term 3 ($\\int \\frac{\\partial f}{\\partial x}\\,dt$):** Net change caused by the vertical deformation of the curve itself."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="chain-rule-derivation">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Multivariable Chain Rule Derivation</h2>
          <TheoryBox title="Rigorous Mathematical Justification">
            <p>
              {"Define the three-variable auxiliary function $F(u, v, x) = \\int_u^v f(x, t)\\,dt$. The integral of interest is $I(x) = F(a(x), b(x), x)$. By the multivariable chain rule:"}
            </p>
            <p>
              {"$$\\frac{dI}{dx} = \\frac{\\partial F}{\\partial v} \\frac{dv}{dx} + \\frac{\\partial F}{\\partial u} \\frac{du}{dx} + \\frac{\\partial F}{\\partial x}$$"}
            </p>
            <p>
              {"By the Fundamental Theorem of Calculus, $\\frac{\\partial F}{\\partial v} = f(x, v)$ and $\\frac{\\partial F}{\\partial u} = -f(x, u)$. Substituting $u = a(x)$ and $v = b(x)$ yields the general Leibniz formula."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="regularity-conditions">
          <div className="sec-badge">Section 1.4</div>
          <h2 className="sec-title">Regularity &amp; Dominance Conditions</h2>
          <TheoryBox title="When Does Differentiation Under Integral Fail?">
            <p>
              {"For finite limits, continuity of $f$ and $\\frac{\\partial f}{\\partial x}$ is sufficient. For improper integrals $\\int_0^\\infty f(x, t)\\,dt$, uniform convergence is required."}
            </p>
            <p>
              {"By Lebesgue's **Dominated Convergence Theorem**, differentiation under an improper integral is guaranteed valid if there exists an integrable function $g(t)$ such that:"}
            </p>
            <p>
              {"$$\\left| \\frac{\\partial f}{\\partial x}(x, t) \\right| \\le g(t) \\quad \\text{with} \\quad \\int_0^\\infty g(t)\\,dt < \\infty$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="leibniz-examples">
          <h2 className="sec-title">Worked Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Differentiating an Integral with Nonlinear Variable Boundaries"
            setup="Compute $\frac{d}{dx} \int_x^{x^2} \sqrt{1 + t^3}\,dt$ for $x > 0$."
            steps={[
              "Identify components: $f(x, t) = \\sqrt{1 + t^3}$, upper limit $b(x) = x^2$, lower limit $a(x) = x$.",
              "Compute boundary derivatives: $b'(x) = 2x$, $a'(x) = 1$.",
              "Check for explicit $x$-dependence in the integrand: $\\frac{\\partial f}{\\partial x} = 0$.",
              "Apply Leibniz rule: $\\frac{d}{dx} \\int_{a(x)}^{b(x)} f(t)\\,dt = f(b(x))b'(x) - f(a(x))a'(x)$.",
              "Evaluate at upper boundary: $f(x^2) = \\sqrt{1 + (x^2)^3} = \\sqrt{1 + x^6}$.",
              "Evaluate at lower boundary: $f(x) = \\sqrt{1 + x^3}$.",
              "Combine with boundary derivatives: $\\frac{d}{dx} = 2x \\sqrt{1 + x^6} - \\sqrt{1 + x^3}$."
            ]}
            result="\frac{d}{dx}\int_x^{x^2} \sqrt{1 + t^3}\,dt = 2x\sqrt{1 + x^6} - \sqrt{1 + x^3}"
            check="For $x = 1$, limits collapse from 1 to 1: the rate of change is $2(1)\\sqrt{2} - \\sqrt{2} = \\sqrt{2} > 0$."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for Feynman's integration trick, the Dirichlet integral, Frullani ratios, Gaussian moments, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/leibniz-integral-rule/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
