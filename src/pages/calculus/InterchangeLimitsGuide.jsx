import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, CertificateExample } from "./CalcBlocks";
import { CALC_A_INTERCHANGE_LIMITS_QUIZ } from "../../data/calcAgSequencesComplexQuizzes";

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

export default function InterchangeLimitsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Interchanging Limits: Derivatives, Integrals & Failure Modes (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Interchange · Part 2</div></div>
          <a className="sb-link" href="#termwise-differentiation">Termwise Differentiation</a>
          <a className="sb-link" href="#derivative-failure-case">Derivative Failure Case</a>
          <a className="sb-link" href="#dominated-convergence">Dominated Convergence</a>
          <a className="sb-link" href="#worked-examples">Certificate Examples</a>
          <a className="sb-link" href="#quiz-interchange-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>

        <div className="guide-content">
          <CurriculumBadge code="MATH-CAG-SEQ-02B" />
          <h1 className="guide-title">Termwise Differentiation &amp; Dominated Limits</h1>
          <p className="lead-p">
            Discover the rigorous conditions required to differentiate a sequence of functions termwise, examine
            critical counterexamples, and preview Lebesgue dominated convergence.
          </p>

          <section className="section" id="termwise-differentiation">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">The Termwise Differentiation Theorem</h2>
            <TheoryBox title="Theorem: Differentiating Limit Sequences">
              <p>
                {"Let $(f_n)$ be a sequence of differentiable functions on $[a, b]$ such that:"}
              </p>
              <ol>
                <li>
                  <strong>{"Pointwise Seed:"}</strong> {"$(f_n(x_0))$ converges for at least one point $x_0 \\in [a, b]$."}
                </li>
                <li>
                  <strong>{"Uniform Derivative Convergence:"}</strong> {"The sequence of derivatives $(f_n')$ converges UNIFORMLY on $[a, b]$ to a function $g$."}
                </li>
              </ol>
              <p>
                {"Then $(f_n)$ converges uniformly on $[a, b]$ to a differentiable limit function $f$, and:"}
              </p>
              <p>
                {"$$f'(x) = \\frac{d}{dx} \\left( \\lim_{n \\to \\infty} f_n(x) \\right) = \\lim_{n \\to \\infty} f_n'(x) = g(x) \\quad \\forall x \\in [a, b]$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="derivative-failure-case">
            <div className="sec-badge">Section 2.5</div>
            <h2 className="sec-title">Classic Failure Case: The Rapidly Oscillating Wave</h2>
            <TheoryBox title="Example: f_n(x) = sin(nx) / √n on [0, 2π]">
              <p>
                {"Consider $f_n(x) = \\frac{\\sin(nx)}{\\sqrt{n}}$:"}
              </p>
              <p>
                {"$$\\|f_n - 0\\|_\\infty = \\frac{1}{\\sqrt{n}} \\to 0 \\implies f_n \\rightrightarrows 0 \\text{ uniformly!}$$"}
              </p>
              <p>
                {"Its derivative is $f_n'(x) = \\sqrt{n} \\cos(nx)$. At $x = 0$:"}
              </p>
              <p>
                {"$$f_n'(0) = \\sqrt{n} \\to \\infty$$"}
              </p>
              <p>
                {"While the limit function is $f(x) \\equiv 0$ with $f'(0) = 0$, the limit of the derivatives diverges to $\\infty$. Hence uniform convergence of $f_n$ alone is NEVER sufficient for termwise differentiation!"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="dominated-convergence">
            <div className="sec-badge">Section 2.6</div>
            <h2 className="sec-title">Lebesgue's Dominated Convergence Theorem</h2>
            <TheoryBox title="Relaxing Uniform Convergence via Domination">
              <p>
                {"Let $(f_n)$ be a sequence of measurable functions converging pointwise almost everywhere to $f$ on a measure space $E$. If there exists an integrable function $g \\in L^1(E)$ such that:"}
              </p>
              <p>
                {"$$|f_n(x)| \\le g(x) \\quad \\forall n \\in \\mathbb{N}, \\quad \\forall x \\in E$$"}
              </p>
              <p>
                {"Then $f$ is integrable and the limit and integral operators interchange:"}
              </p>
              <p>
                {"$$\\lim_{n \\to \\infty} \\int_E f_n(x)\\,dx = \\int_E \\left( \\lim_{n \\to \\infty} f_n(x) \\right) dx = \\int_E f(x)\\,dx$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="worked-examples">
            <h2 className="sec-title">Certificate Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Termwise Differentiation of Infinite Reciprocal Series"
              problem={"Prove that $f(x) = \\sum_{n=1}^\\infty \\frac{1}{n^3 + x^2}$ defines a continuously differentiable function on $\\mathbb{R}$, and compute $f'(x)$ as an explicit series."}
              solution={"Each term $u_n(x) = (n^3 + x^2)^{-1}$ has derivative $u_n'(x) = \\frac{-2x}{(n^3 + x^2)^2}$. On any compact interval $[-A, A]$, $|u_n'(x)| \\le \\frac{2A}{n^6}$. Since $\\sum_{n=1}^\\infty \\frac{2A}{n^6} < \\infty$, the series of derivatives converges uniformly on $[-A, A]$ by the Weierstrass M-Test. Furthermore, $f(0) = \\sum 1/n^3 < \\infty$. By the Termwise Differentiation Theorem, $f$ is differentiable on $[-A, A]$ (and thus on $\\mathbb{R}$) with $f'(x) = \\sum_{n=1}^\\infty \\frac{-2x}{(n^3 + x^2)^2}$."}
            />

            <CertificateExample
              number={2}
              tier="Hard"
              title="Interchange of Limit with Gaussian Exponential Integral"
              problem={"Evaluate $\\lim_{n \\to \\infty} \\int_0^1 \\left(1 - \\frac{x^2}{n}\\right)^n \\cos(x)\\,dx$ and justify the interchange of limit and integral."}
              solution={"Using the inequality $1 - u \\le e^{-u}$ for $u \\in [0, 1]$, we have $(1 - x^2/n)^n \\le e^{-x^2}$. On $[0, 1]$, $|(1 - x^2/n)^n \\cos(x)| \\le e^{-x^2} \\cdot 1 = e^{-x^2}$, which is bounded and integrable on $[0, 1]$. Since $\\lim_{n \\to \\infty} (1 - x^2/n)^n = e^{-x^2}$ pointwise, the Dominated Convergence Theorem permits pulling the limit inside: $\\lim_{n \\to \\infty} \\int_0^1 f_n(x)\\,dx = \\int_0^1 e^{-x^2} \\cos(x)\\,dx$."}
            />
          </section>

          <Divider />

          <section className="section" id="quiz-interchange-checkpoint">
            <div className="sec-badge">Section 2.7</div>
            <h2 className="sec-title">Checkpoint Assessment: Interchanging Limits</h2>
            <p className="lead-p">
              Evaluate your comprehension of termwise integration, differentiation prerequisites, and non-uniform failure modes. 80% passing threshold required.
            </p>
            <GuideMcqSection
              quizId="calc-a-interchange-limits-checkpoint"
              questions={CALC_A_INTERCHANGE_LIMITS_QUIZ}
              onComplete={(score, total) => saveQuizScore("calc-a-interchange-limits-checkpoint", score, total)}
            />
          </section>
        </div>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Interchanging Limits: Termwise Integration & Foundations (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Interchange · Part 1</div></div>
        <a className="sb-link" href="#termwise-integration">Termwise Integration</a>
        <a className="sb-link" href="#escaping-spike-failure">Failure Case: Escaping Spike</a>
        <a className="sb-link" href="#sliding-pulse-failure">Failure Case: Infinite Domain</a>
        <a className="sb-link" href="#part-summary">Module Summary</a>
        <Link className="sb-link" to="/interchanging-limits/2">Part 2: Derivatives &rarr;</Link>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>

      <div className="guide-content">
        <CurriculumBadge code="MATH-CAG-SEQ-02A" />
        <h1 className="guide-title">Termwise Integration &amp; Boundary Conditions</h1>
        <p className="lead-p">
          Learn when the mathematical operations of limit and integration can be safely swapped, and examine
          rigorous counterexamples where interchange fails completely.
        </p>

        <section className="section" id="termwise-integration">
          <div className="sec-badge">Section 2.1</div>
          <h2 className="sec-title">The Termwise Integration Theorem</h2>
          <TheoryBox title="Theorem: Integral of Uniform Limit on Compact Domains">
            <p>
              {"Let $(f_n)$ be a sequence of Riemann-integrable functions defined on a closed bounded interval $[a, b]$. If $f_n \\to f$ uniformly on $[a, b]$, then $f$ is Riemann-integrable on $[a, b]$ and:"}
            </p>
            <p>
              {"$$\\lim_{n \\to \\infty} \\int_a^b f_n(x)\\,dx = \\int_a^b \\left( \\lim_{n \\to \\infty} f_n(x) \\right) dx = \\int_a^b f(x)\\,dx$$"}
            </p>
            <p>
              {"Proof sketch: By uniform convergence, for any $\\epsilon > 0$, choose $N$ such that $\\|f_n - f\\|_\\infty < \\frac{\\epsilon}{b - a}$ for all $n > N$. Then:"}
            </p>
            <p>
              {"$$\\left| \\int_a^b f_n(x)\\,dx - \\int_a^b f(x)\\,dx \\right| \\le \\int_a^b |f_n(x) - f(x)|\\,dx \\le \\|f_n - f\\|_\\infty (b - a) < \\frac{\\epsilon}{b - a} (b - a) = \\epsilon$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="escaping-spike-failure">
          <div className="sec-badge">Section 2.2</div>
          <h2 className="sec-title">Failure Case: The Concentration Spike</h2>
          <TheoryBox title="Counterexample: f_n(x) = 2n²x e^(-n²x²) on [0, 1]">
            <p>
              {"Consider the sequence $f_n(x) = 2n^2 x e^{-n^2 x^2}$ on $[0, 1]$:"}
            </p>
            <ul>
              <li><strong>{"Pointwise Limit:"}</strong> {"For $x = 0$, $f_n(0) = 0$. For $x > 0$, $n^2 e^{-n^2 x^2} \\to 0$. Thus $f(x) \\equiv 0$, and $\\int_0^1 f(x)\\,dx = 0$."}</li>
              <li><strong>{"Direct Integration:"}</strong> {"Evaluating the integral directly with substitution $u = n^2 x^2$:"}</li>
            </ul>
            <p>
              {"$$\\int_0^1 2n^2 x e^{-n^2 x^2}\\,dx = \\left[ -e^{-n^2 x^2} \\right]_0^1 = 1 - e^{-n^2} \\to 1 \\quad \\text{as } n \\to \\infty$$"}
            </p>
            <p>
              {"Here $\\lim_{n \\to \\infty} \\int_0^1 f_n = 1 \\ne 0 = \\int_0^1 \\lim_{n \\to \\infty} f_n$. The limit and integral operators DO NOT commute!"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="sliding-pulse-failure">
          <div className="sec-badge">Section 2.3</div>
          <h2 className="sec-title">Failure Case: Escaped Mass to Infinity</h2>
          <TheoryBox title="Unbounded Domain Breakdown: f_n(x) = (1/n) χ_[0, n](x)">
            <p>
              {"On the unbounded domain $[0, \\infty)$, uniform convergence on compact sets is insufficient. Consider $f_n(x) = \\frac{1}{n}$ for $0 \\le x \\le n$ and $0$ otherwise:"}
            </p>
            <p>
              {"$$\\|f_n - 0\\|_\\infty = \\frac{1}{n} \\to 0 \\implies f_n \\rightrightarrows 0 \\text{ uniformly on } [0, \\infty)$$"}
            </p>
            <p>
              {"However:"}
            </p>
            <p>
              {"$$\\int_0^\\infty f_n(x)\\,dx = \\frac{1}{n} \\times n = 1 \\quad \\forall n \\implies \\lim_{n \\to \\infty} \\int_0^\\infty f_n = 1 \\ne \\int_0^\\infty 0\\,dx = 0$$"}
            </p>
            <p>
              {"Mass escapes to spatial infinity! For improper integrals, uniform tail decay $\\lim_{R \\to \\infty} \\sup_n \\int_R^\\infty |f_n| = 0$ is essential."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="part-summary">
          <div className="sec-badge">Part 1 Review</div>
          <h2 className="sec-title">Key Takeaways</h2>
          <p>
            Uniform convergence on a compact domain guarantees termwise integration, but fails on unbounded intervals or when non-uniform concentration spikes escape. Proceed to Part 2 to master termwise differentiation and dominated limits.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-primary" to="/interchanging-limits/2" style={{ textDecoration: "none", padding: "0.75rem 1.5rem", borderRadius: "8px", background: "var(--teal)", color: "#fff", fontWeight: 600 }}>
              Proceed to Part 2: Termwise Differentiation &rarr;
            </Link>
          </div>
        </section>
      </div>
    </StudyGuideShell>
  );
}
