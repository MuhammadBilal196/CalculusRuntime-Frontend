import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_A_UNIFORM_CONV_QUIZ } from "../../data/calcAgSequencesComplexQuizzes";

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

export default function PointwiseUniformConvGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Sequences of Functions: Uniform Limits & Counterexamples (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Convergence · Part 2</div></div>
          <a className="sb-link" href="#uniform-limit-continuity">Uniform Limit Continuity</a>
          <a className="sb-link" href="#classic-counterexamples">Classic Counterexamples</a>
          <a className="sb-link" href="#series-vs-sequence">Sequence vs Series Tests</a>
          <a className="sb-link" href="#dini-weierstrass">Dini &amp; Weierstrass Criteria</a>
          <a className="sb-link" href="#worked-examples">Certificate Examples</a>
          <a className="sb-link" href="#quiz-uniform-conv">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>

        <div className="guide-content">
          <CurriculumBadge code="MATH-CAG-SEQ-01B" />
          <h1 className="guide-title">Uniform Limit Continuity &amp; Counterexamples</h1>
          <p className="lead-p">
            Explore why uniform convergence is the necessary topology for preserving continuity, and investigate
            famous failure cases where pointwise limits develop discontinuities and escaped mass.
          </p>

          <section className="section" id="uniform-limit-continuity">
            <div className="sec-badge">Section 1.4</div>
            <h2 className="sec-title">The Uniform Limit Theorem (Continuity Preservation)</h2>
            <TheoryBox title="Theorem: Uniform Limit of Continuous Functions is Continuous">
              <p>
                {"Let $(f_n)$ be a sequence of functions defined on $S \\subseteq \\mathbb{R}$. If each $f_n$ is continuous at $x_0 \\in S$, and $f_n \\to f$ uniformly on $S$, then the limit function $f$ is continuous at $x_0$:"}
              </p>
              <p>
                {"$$\\lim_{x \\to x_0} f(x) = \\lim_{x \\to x_0} \\left( \\lim_{n \\to \\infty} f_n(x) \\right) = \\lim_{n \\to \\infty} \\left( \\lim_{x \\to x_0} f_n(x) \\right) = f(x_0)$$"}
              </p>
              <p>
                {"The proof follows the classical $3\\epsilon$-argument: for any $\\epsilon > 0$, choose $N$ such that $\\|f_N - f\\|_\\infty < \\epsilon/3$, then pick $\\delta > 0$ such that $|f_N(x) - f_N(x_0)| < \\epsilon/3$ whenever $|x - x_0| < \\delta$:"}
              </p>
              <p>
                {"$$|f(x) - f(x_0)| \\le |f(x) - f_N(x)| + |f_N(x) - f_N(x_0)| + |f_N(x_0) - f(x_0)| < \\frac{\\epsilon}{3} + \\frac{\\epsilon}{3} + \\frac{\\epsilon}{3} = \\epsilon$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="classic-counterexamples">
            <div className="sec-badge">Section 1.5</div>
            <h2 className="sec-title">Classic Topological Counterexamples</h2>
            <TheoryBox title="The Boundary Jump Discontinuity: f_n(x) = xⁿ on [0, 1]">
              <p>
                {"For each $n \\in \\mathbb{N}$, $f_n(x) = x^n$ is continuous everywhere on $[0, 1]$. Its pointwise limit is:"}
              </p>
              <p>
                {"$$f(x) = \\begin{cases} 0, & 0 \\le x < 1 \\\\ 1, & x = 1 \\end{cases}$$"}
              </p>
              <p>
                {"Because $f(x)$ is discontinuous at $x = 1$, the convergence CANNOT be uniform on $[0, 1]$. Indeed, $\\|f_n - f\\|_\\infty = \\sup_{x \\in [0, 1)} x^n = 1$ for all $n$."}
              </p>
            </TheoryBox>

            <TheoryBox title="The Escaping Spike: f_n(x) = 2nx / (1 + n²x²) on [0, 1]">
              <p>
                {"Here, the pointwise limit is $f(x) = 0$ everywhere on $[0, 1]$ (continuous!). However, calculating the maximum via derivatives reveals a critical peak at $x_n = 1/n$:"}
              </p>
              <p>
                {"$$f_n(1/n) = \\frac{2n(1/n)}{1 + n^2(1/n^2)} = \\frac{2}{1 + 1} = 1$$"}
              </p>
              <p>
                {"Thus $\\|f_n - 0\\|_\\infty = 1 \\not\\to 0$. Although the limit function is continuous, convergence is strictly non-uniform."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="series-vs-sequence">
            <div className="sec-badge">Section 1.6</div>
            <h2 className="sec-title">Separating Function Sequences from Numerical Series</h2>
            <ProcedureBox title="Conceptual Distinction Checklist">
              <ol>
                <li>
                  <strong>{"Numerical Series ($\\sum a_n$):"}</strong> {"Evaluates whether a single sequence of partial sums of real scalars converges to a single numerical value."}
                </li>
                <li>
                  <strong>{"Pointwise Function Sequence ($f_n(x)$):"}</strong> {"Evaluates whether the numerical sequence $(f_n(x_0))$ converges for each independently chosen point $x_0$."}
                </li>
                <li>
                  <strong>{"Uniform Convergence ($f_n \\rightrightarrows f$):"}</strong> {"Measures whether the sequence of functions converges at a globally bounded geometric rate over an entire continuum $S$, governed by the Banach supremum metric."}
                </li>
              </ol>
            </ProcedureBox>
          </section>

          <section className="section" id="worked-examples">
            <h2 className="sec-title">Certificate Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Supremum Norm Convergence of Rational Wave Sequence"
              problem={"Determine whether the sequence $f_n(x) = \\frac{nx}{1 + n^2 x^4}$ converges uniformly on $[0, \\infty)$ and on $[1, \\infty)$."}
              solution={"To find $\\|f_n\\|_\\infty$ on $[0, \\infty)$, set $f_n'(x) = \\frac{n(1 + n^2 x^4) - nx(4n^2 x^3)}{(1 + n^2 x^4)^2} = \\frac{n(1 - 3n^2 x^4)}{(1 + n^2 x^4)^2} = 0$. The peak occurs at $x = (3n^2)^{-1/4}$. The peak value is $f_n(x^*) = \\frac{n (3n^2)^{-1/4}}{1 + 1/3} = \\frac{3}{4} 3^{-1/4} n^{1/2} \\to \\infty$. Hence on $[0, \\infty)$ it does NOT converge uniformly. On $[1, \\infty)$, for $x \\ge 1$, $f_n(x) \\le \\frac{nx}{n^2 x^4} = \\frac{1}{n x^3} \\le \\frac{1}{n} \\to 0$. Thus $\\|f_n\\|_{\\infty, [1, \\infty)} \\le 1/n \\to 0$, proving uniform convergence on $[1, \\infty)$."}
            />

            <CertificateExample
              number={2}
              tier="Hard"
              title="Weierstrass M-Test on Dini Compact Subinterval"
              problem={"Prove that the infinite series of functions $\\sum_{n=1}^\\infty \\frac{x^2}{n^2 + x^4}$ converges uniformly on any compact interval $[-A, A]$."}
              solution={"For any $x \\in [-A, A]$, $|x| \\le A$. Thus $\\frac{x^2}{n^2 + x^4} \\le \\frac{A^2}{n^2}$. Set $M_n = \\frac{A^2}{n^2}$. Since $\\sum_{n=1}^\\infty M_n = A^2 \\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2 A^2}{6} < \\infty$, the Weierstrass M-Test establishes that the series converges uniformly and absolutely on $[-A, A]$."}
            />
          </section>

          <Divider />

          <section className="section" id="quiz-uniform-conv">
            <div className="sec-badge">Section 1.7</div>
            <h2 className="sec-title">Checkpoint Assessment: Uniform Convergence</h2>
            <p className="lead-p">
              Verify your mastery of pointwise convergence, supremum-norm bounds, and topological continuity. 80% passing threshold required.
            </p>
            <GuideMcqSection
              id="quiz-pointwise-uniform-conv-checkpoint"
              scoreId="score-pointwise-uniform-conv-checkpoint"
              section="pointwise-uniform-conv-checkpoint"
              questions={CALC_A_UNIFORM_CONV_QUIZ}
              onComplete={(score, total) => saveQuizScore("guide-mcq-pointwise-uniform-conv-checkpoint", score, total)}
            />
          </section>
        </div>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Sequences of Functions: Pointwise & Uniform Convergence (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Convergence · Part 1</div></div>
        <a className="sb-link" href="#pointwise-def">Pointwise Convergence</a>
        <a className="sb-link" href="#uniform-def">Uniform Convergence</a>
        <a className="sb-link" href="#supremum-norm">Supremum-Norm Testing</a>
        <a className="sb-link" href="#cauchy-criterion">Cauchy Criterion</a>
        <a className="sb-link" href="#part-summary">Module Summary</a>
        <Link className="sb-link" to="/pointwise-uniform-convergence/2">Part 2: Uniform Limits &rarr;</Link>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>

      <div className="guide-content">
        <CurriculumBadge code="MATH-CAG-SEQ-01A" />
        <h1 className="guide-title">Pointwise &amp; Uniform Convergence Foundations</h1>
        <p className="lead-p">
          Transition from numerical series to function spaces. Understand how sequences of functions evolve across a continuum of inputs, and master supremum-norm diagnostics.
        </p>

        <section className="section" id="pointwise-def">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Pointwise Convergence Definition</h2>
          <TheoryBox title="Definition: Pointwise Limit">
            <p>
              {"Let $(f_n)$ be a sequence of real-valued functions defined on a subset $S \\subseteq \\mathbb{R}$. We say that $f_n$ converges pointwise to a function $f: S \\to \\mathbb{R}$ if for every fixed $x \\in S$:"}
            </p>
            <p>
              {"$$\\lim_{n \\to \\infty} f_n(x) = f(x)$$"}
            </p>
            <p>
              {"Formally: $\\forall x \\in S$ and $\\forall \\epsilon > 0$, $\\exists N(\\epsilon, x) \\in \\mathbb{N}$ such that:"}
            </p>
            <p>
              {"$$n > N(\\epsilon, x) \\implies |f_n(x) - f(x)| < \\epsilon$$"}
            </p>
            <p>
              {"Crucially, the threshold index $N$ depends upon BOTH the tolerance $\\epsilon$ and the specific spatial location $x$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="uniform-def">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Uniform Convergence Definition</h2>
          <TheoryBox title="Definition: Uniform Convergence">
            <p>
              {"A sequence $f_n$ converges uniformly to $f$ on $S$ (denoted $f_n \\rightrightarrows f$) if the choice of index $N$ can be made independently of $x$:"}
            </p>
            <p>
              {"$$\\forall \\epsilon > 0, \\quad \\exists N(\\epsilon) \\in \\mathbb{N} \\quad \\text{such that} \\quad n > N(\\epsilon) \\implies |f_n(x) - f(x)| < \\epsilon \\quad \\forall x \\in S$$"}
            </p>
            <p>
              {"Geometrically, for all $n > N(\\epsilon)$, the entire graph of $f_n$ lies inside an $\\epsilon$-tube centered around the limit curve $y = f(x)$:"}
            </p>
            <p>
              {"$$f(x) - \\epsilon < f_n(x) < f(x) + \\epsilon \\quad \\forall x \\in S$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="supremum-norm">
          <div className="sec-badge">Section 1.3</div>
          <h2 className="sec-title">The Supremum-Norm Criterion (Mₙ Diagnostic)</h2>
          <ProcedureBox title="Algorithmic Verification via Supremum Norm">
            <ol>
              <li>
                <strong>{"Compute Pointwise Limit:"}</strong> {"For each fixed $x \\in S$, find $f(x) = \\lim_{n \\to \\infty} f_n(x)$."}
              </li>
              <li>
                <strong>{"Construct Error Function:"}</strong> {"Define $d_n(x) = |f_n(x) - f(x)|$."}
              </li>
              <li>
                <strong>{"Find Global Extremum:"}</strong> {"Compute $M_n = \\|f_n - f\\|_\\infty = \\sup_{x \\in S} |f_n(x) - f(x)|$, typically by differentiating $d_n'(x) = 0$ and checking domain boundaries."}
              </li>
              <li>
                <strong>{"Evaluate Limit of Mₙ:"}</strong> {"If $\\lim_{n \\to \\infty} M_n = 0$, convergence is uniform. If $M_n \\not\\to 0$ or $M_n = \\mathcal{O}(1)$, convergence is strictly pointwise."}
              </li>
            </ol>
          </ProcedureBox>
        </section>

        <section className="section" id="cauchy-criterion">
          <div className="sec-badge">Section 1.4</div>
          <h2 className="sec-title">The Cauchy Criterion for Uniform Convergence</h2>
          <TheoryBox title="Intrinsic Uniform Convergence Without Known Limit">
            <p>
              {"A sequence $f_n: S \\to \\mathbb{R}$ converges uniformly on $S$ if and only if for every $\\epsilon > 0$, there exists an integer $N$ such that:"}
            </p>
            <p>
              {"$$m, n > N \\implies |f_n(x) - f_m(x)| < \\epsilon \\quad \\forall x \\in S$$"}
            </p>
            <p>
              {"Because $(\\mathbb{R}, |\\cdot|)$ is complete, uniform Cauchy sequences are guaranteed to converge to a well-defined limit function $f \\in \\mathcal{B}(S)$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="part-summary">
          <div className="sec-badge">Part 1 Review</div>
          <h2 className="sec-title">Key Takeaways</h2>
          <p>
            Pointwise convergence allows the speed of convergence to fluctuate arbitrarily across space, whereas uniform convergence establishes an equicontinuous global pace. Continue to Part 2 to see the Uniform Limit Theorem and study classic counterexamples.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-primary" to="/pointwise-uniform-convergence/2" style={{ textDecoration: "none", padding: "0.75rem 1.5rem", borderRadius: "8px", background: "var(--teal)", color: "#fff", fontWeight: 600 }}>
              Proceed to Part 2: Uniform Limits &amp; Counterexamples &rarr;
            </Link>
          </div>
        </section>
      </div>
    </StudyGuideShell>
  );
}
