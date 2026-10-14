import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_A_GAMMA_BETA_QUIZ } from "../../data/calcAgSpecialQuizzes";

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

export default function GammaBetaGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Special Functions: Beta Functions & Advanced Identities (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Gamma &amp; Beta · Part 2</div></div>
          <a className="sb-link" href="#beta-definition">Beta Function Definition</a>
          <a className="sb-link" href="#beta-gamma-relation">Beta-Gamma Relationship</a>
          <a className="sb-link" href="#trig-beta">Trigonometric Integrals</a>
          <a className="sb-link" href="#duplication-stirling">Duplication &amp; Stirling</a>
          <a className="sb-link" href="#beta-worked-examples">Certificate Examples</a>
          <a className="sb-link" href="#quiz-gamma-beta-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module A: Special Functions · Part 2 of 2</div>
            <h1 className="ch-title">Beta Integrals, Trigonometric Reductions &amp; Asymptotics</h1>
            <p className="ch-sub">Euler's first integral, Beta-Gamma synthesis, reflection formulas, and Stirling asymptotics</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-201 / Special Functions · Module A (Part 2)" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we formulate Euler's Beta integral $B(p, q)$, establish its exact equivalence with ratios of Gamma functions, and evaluate difficult definite trigonometric powers and rational fractional integrals with closed-form precision."}
            </p>
          </div>
          <Divider />

          <section className="section" id="beta-definition">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Euler's Beta Integral</h2>
            <TheoryBox title="First Euler Integral of First Kind">
              <p>
                {"For complex arguments with $\\text{Re}(p) > 0$ and $\\text{Re}(q) > 0$, the Beta function is defined by:"}
              </p>
              <p>
                {"$$B(p, q) = \\int_0^1 x^{p-1} (1 - x)^{q-1}\\,dx$$"}
              </p>
              <p>
                {"By substituting $u = 1 - x$, one directly proves the fundamental **symmetry property**:"}
              </p>
              <p>
                {"$$B(p, q) = B(q, p)$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="beta-gamma-relation">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">The Beta-Gamma Connection</h2>
            <TheoryBox title="Synthesis Theorem">
              <p>
                {"The Beta function decomposes into a quotient of Gamma functions:"}
              </p>
              <p>
                {"$$B(p, q) = \\frac{\\Gamma(p)\\Gamma(q)}{\\Gamma(p + q)}$$"}
              </p>
              <p>
                {"**Proof Sketch:** Express $\\Gamma(p)\\Gamma(q) = \\left(2\\int_0^\\infty u^{2p-1}e^{-u^2}\\,du\\right)\\left(2\\int_0^\\infty v^{2q-1}e^{-v^2}\\,dv\\right)$. Converting to polar coordinates $u = r\\cos\\theta, v = r\\sin\\theta$ factors the double integral into a radial Gamma integral and angular Beta integral."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="trig-beta">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Trigonometric &amp; Infinite Domain Forms</h2>
            <TheoryBox title="Trigonometric &amp; Rational Power Integrals">
              <p>
                {"Substituting $x = \\sin^2\\theta$ into $B(p, q)$ yields:"}
              </p>
              <p>
                {"$$\\int_0^{\\pi/2} \\sin^{2p-1}(\\theta) \\cos^{2q-1}(\\theta)\\,d\\theta = \\frac{1}{2} B(p, q) = \\frac{\\Gamma(p)\\Gamma(q)}{2\\Gamma(p + q)}$$"}
              </p>
              <p>
                {"Substituting $x = \\frac{y}{1 + y}$ transforms the finite interval $[0, 1]$ into an infinite half-line $[0, \\infty)$:"}
              </p>
              <p>
                {"$$\\int_0^\\infty \\frac{y^{p-1}}{(1 + y)^{p+q}}\\,dy = B(p, q) = \\frac{\\Gamma(p)\\Gamma(q)}{\\Gamma(p + q)}$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="duplication-stirling">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Legendre Duplication &amp; Stirling's Formula</h2>
            <TheoryBox title="Deep Analytic Properties">
              <p>
                {"• **Legendre's Duplication Formula:** Relates values at $z$ and $z + 1/2$ to $2z$:"}
              </p>
              <p>
                {"$$\\Gamma(z)\\Gamma\\left(z + \\frac{1}{2}\\right) = 2^{1-2z} \\sqrt{\\pi} \\,\\Gamma(2z)$$"}
              </p>
              <p>
                {"• **Stirling's Asymptotic Approximation:** For large $|z|$ with $|\\arg z| < \\pi$:"}
              </p>
              <p>
                {"$$\\Gamma(z+1) \\sim \\sqrt{2\\pi z} \\left(\\frac{z}{e}\\right)^z \\left(1 + \\frac{1}{12z} + \\mathcal{O}\\left(\\frac{1}{z^2}\\right)\\right)$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="beta-worked-examples">
            <h2 className="sec-title">Certificate Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Trigonometric Power Integral Evaluation"
              setup="Evaluate $I = \int_0^{\pi/2} \sqrt{\tan\theta}\,d\theta$ using Euler's Beta and reflection formulas."
              steps={[
                "Rewrite integrand in terms of sine and cosine: $\\sqrt{\\tan\\theta} = \\sin^{1/2}\\theta \\cos^{-1/2}\\theta$.",
                "Match exponents with the trigonometric Beta formula: $2p - 1 = 1/2 \\implies 2p = 3/2 \\implies p = 3/4$.",
                "Match cosine exponent: $2q - 1 = -1/2 \\implies 2q = 1/2 \\implies q = 1/4$.",
                "Apply Beta formula: $I = \\frac{1}{2}B(3/4, 1/4) = \\frac{1}{2}\\frac{\\Gamma(3/4)\\Gamma(1/4)}{\\Gamma(3/4 + 1/4)} = \\frac{1}{2}\\frac{\\Gamma(1/4)\\Gamma(1 - 1/4)}{\\Gamma(1)}$.",
                "Apply Euler's reflection formula $\\Gamma(z)\\Gamma(1-z) = \\frac{\\pi}{\\sin(\\pi z)}$ with $z = 1/4$: $\\Gamma(1/4)\\Gamma(3/4) = \\frac{\\pi}{\\sin(\\pi/4)} = \\frac{\\pi}{1/\\sqrt{2}} = \\pi\\sqrt{2}$.",
                "Combine terms: $I = \\frac{1}{2} \\pi\\sqrt{2} = \\frac{\\pi}{\\sqrt{2}}$."
              ]}
              result="I = \frac{\pi}{\sqrt{2}}"
              check="Numerical evaluation: \int_0^{\pi/2} \sqrt{\tan\theta}\,d\theta \approx 2.221441, and \pi/\sqrt{2} \approx 3.141593 / 1.414214 \approx 2.221441."
            />
          </section>

          <GuideMcqSection
            id="quiz-gamma-beta-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Gamma & Beta Functions Checkpoint"
            scoreId="score-gamma-beta-checkpoint"
            section="gamma-beta-checkpoint"
            questions={CALC_A_GAMMA_BETA_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-gamma-beta-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Special Functions: Euler's Gamma Integral & Factorials (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Gamma &amp; Beta · Part 1</div></div>
        <a className="sb-link" href="#gamma-definition">Euler's Gamma Integral</a>
        <a className="sb-link" href="#recurrence-factorial">Recurrence &amp; Factorials</a>
        <a className="sb-link" href="#half-integers">Half-Integer Values</a>
        <a className="sb-link" href="#reflection-formula">Euler's Reflection Formula</a>
        <a className="sb-link" href="#gamma-examples">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module A: Special Functions · Part 1 of 2</div>
          <h1 className="ch-title">Euler's Gamma Function &amp; Analytic Continuation</h1>
          <p className="ch-sub">Interpolating discrete factorials, improper integral representation, and fundamental functional equations</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-201 / Special Functions · Module A (Part 1)" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"The Euler Gamma function generalizes the discrete factorial $n!$ to complex numbers. In this first part, we establish its improper integral definition, derive its recurrence relation, calculate exact fractional values involving $\\sqrt{\\pi}$, and explore Euler's reflection identity."}
          </p>
        </div>
        <Divider />

        <section className="section" id="gamma-definition">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Euler's Gamma Integral</h2>
          <TheoryBox title="Integral of the Second Kind">
            <p>
              {"For any complex number $z$ with positive real part $\\text{Re}(z) > 0$, the Gamma function is defined by:"}
            </p>
            <p>
              {"$$\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt$$"}
            </p>
            <p>
              {"• **Convergence:** The exponential decay $e^{-t}$ dominates large $t$, ensuring convergence at $\\infty$. Near $t \\to 0^+$, $t^{z-1}$ is integrable if and only if $\\text{Re}(z) > 0$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="recurrence-factorial">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Recurrence Relation &amp; Factorial Extension</h2>
          <TheoryBox title="Functional Equation">
            <p>
              {"Integrating by parts with $u = t^z$ and $dv = e^{-t}\\,dt$:"}
            </p>
            <p>
              {"$$\\Gamma(z+1) = \\left[ -t^z e^{-t} \\right]_0^\\infty + z \\int_0^\\infty t^{z-1} e^{-t}\\,dt = 0 + z \\Gamma(z)$$"}
            </p>
            <p>
              {"$$\\Gamma(z+1) = z \\Gamma(z)$$"}
            </p>
            <p>
              {"Since $\\Gamma(1) = \\int_0^\\infty e^{-t}\\,dt = 1$, setting $z = n$ for positive integer $n$ produces:"}
            </p>
            <p>
              {"$$\\Gamma(n+1) = n! \\iff \\Gamma(n) = (n - 1)!$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="half-integers">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">Half-Integer Values &amp; The Gaussian Connection</h2>
          <TheoryBox title="Exact Evaluation at Half-Integers">
            <p>
              {"Substituting $t = u^2$ ($dt = 2u\\,du$) into $\\Gamma(1/2)$:"}
            </p>
            <p>
              {"$$\\Gamma(1/2) = \\int_0^\\infty u^{-1} e^{-u^2} (2u)\\,du = 2 \\int_0^\\infty e^{-u^2}\\,du = 2 \\left( \\frac{\\sqrt{\\pi}}{2} \\right) = \\sqrt{\\pi}$$"}
            </p>
            <p>
              {"Using the recurrence relation $\\Gamma(z+1) = z\\Gamma(z)$ successively:"}
            </p>
            <p>
              {"$$\\Gamma(3/2) = \\frac{1}{2}\\Gamma(1/2) = \\frac{\\sqrt{\\pi}}{2}, \\quad \\Gamma(5/2) = \\frac{3}{2}\\frac{\\sqrt{\\pi}}{2} = \\frac{3\\sqrt{\\pi}}{4}, \\quad \\Gamma(7/2) = \\frac{15\\sqrt{\\pi}}{8}$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="reflection-formula">
          <div className="sec-badge">Section 1.4</div>
          <h2 className="sec-title">Euler's Reflection Identity</h2>
          <TheoryBox title="Analytic Continuation Across the Imaginary Axis">
            <p>
              {"Euler's reflection formula connects positive and negative arguments:"}
            </p>
            <p>
              {"$$\\Gamma(z) \\Gamma(1 - z) = \\frac{\\pi}{\\sin(\\pi z)} \\quad (z \\notin \\mathbb{Z})$$"}
            </p>
            <p>
              {"This shows that $\\Gamma(z)$ has simple poles at non-positive integers $z = 0, -1, -2, -3, \\dots$, and has **no zeros anywhere in the complex plane**."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="gamma-examples">
          <h2 className="sec-title">Worked Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Gaussian Radial Integral via Gamma Function"
            setup="Evaluate the improper integral $I = \int_0^\infty x^4 e^{-2x^2}\,dx$ using the Gamma function."
            steps={[
              "Make the substitution $u = 2x^2 \\implies x = (u/2)^{1/2} = u^{1/2} / \\sqrt{2}$.",
              "Compute differential: $dx = \\frac{1}{2\\sqrt{2}} u^{-1/2}\\,du$.",
              "Express integrand in terms of $u$: $x^4 = (u/2)^2 = u^2 / 4$.",
              "Substitute into integral: $I = \\int_0^\\infty \\left(\\frac{u^2}{4}\\right) e^{-u} \\left(\\frac{1}{2\\sqrt{2}} u^{-1/2}\\right)\\,du = \\frac{1}{8\\sqrt{2}} \\int_0^\\infty u^{3/2} e^{-u}\\,du$.",
              "Recognize the Gamma integral: $\\int_0^\\infty u^{5/2 - 1} e^{-u}\\,du = \\Gamma(5/2)$.",
              "Calculate value: $\\Gamma(5/2) = \\frac{3\\sqrt{\\pi}}{4}$.",
              "Final computation: $I = \\frac{1}{8\\sqrt{2}} \\cdot \\frac{3\\sqrt{\\pi}}{4} = \\frac{3\\sqrt{\\pi}}{32\\sqrt{2}} = \\frac{3\\sqrt{2\\pi}}{64}$."
            ]}
            result="I = \frac{3\sqrt{2\pi}}{64}"
            check="Dimensional check: scaling $x \to \lambda x$ scales integral by $\lambda^{-5}$, matching the coefficient factor $2^{-5/2}$."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for Euler's Beta function, trigonometric integral reductions, Legendre's duplication formula, Stirling's approximation, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/gamma-beta-functions/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
