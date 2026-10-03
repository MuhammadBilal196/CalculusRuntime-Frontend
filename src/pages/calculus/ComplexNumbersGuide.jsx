import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_C_COMPLEX_NUMBERS_QUIZ } from "../../data/calcAgDev3Quizzes";

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

export default function ComplexNumbersGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Complex Numbers & De Moivre's Theorem (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Complex · Part 2</div></div>
          <a className="sb-link" href="#demoivre-theorem">De Moivre's Theorem</a>
          <a className="sb-link" href="#roots-unity">Roots of Unity &amp; Geometry</a>
          <a className="sb-link" href="#trig-powers">Multiple Angles &amp; Power Expansion</a>
          <a className="sb-link" href="#complex-proc">Complex Calculation Routine</a>
          <a className="sb-link" href="#complex-ex2">Advanced Worked Examples</a>
          <a className="sb-link" href="#quiz-complex-numbers-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Module C: Complex Analysis &amp; Transforms · Part 2 of 2</div>
            <h1 className="ch-title">De Moivre's Theorem, Roots of Unity &amp; Trigonometric Powers</h1>
            <p className="ch-sub">Exponential powers, cyclotomic roots on the unit circle, and trigonometric derivations</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <CurriculumBadge code="Math-101 / Math-102 Single-Variable Calculus · Module C" />

          <div className="opening-note-box">
            <p className="opening-note">
              <strong>Operational Blueprint:</strong>{" "}
              {"In this second section, we harness De Moivre's theorem $[\\cos\\theta + i\\sin\\theta]^n = \\cos(n\\theta) + i\\sin(n\\theta)$, construct all $n$-th roots of unity distributed as regular polygons on the unit circle, and expand multiple-angle trigonometric identities."}
            </p>
          </div>
          <Divider />

          <section className="section" id="demoivre-theorem">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">De Moivre's Theorem</h2>
            <TheoryBox title="Exponentiation of Complex Numbers">
              <p>
                {"For any real number $\\theta$ and any integer $n$:"}
              </p>
              <p>
                {"$$[r(\\cos\\theta + i\\sin\\theta)]^n = r^n [\\cos(n\\theta) + i\\sin(n\\theta)] = r^n e^{i n\\theta}$$"}
              </p>
              <p>
                {"By Euler's formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$, this is simply $(e^{i\\theta})^n = e^{i n\\theta}$, confirming that complex exponentiation multiplies angles while raising moduli to powers."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="roots-unity">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">The $n$-th Roots of Unity</h2>
            <TheoryBox title="Cyclotomic Distribution">
              <p>
                {"The solutions of $z^n = 1 = e^{i 2k\\pi}$ are the $n$ distinct roots of unity:"}
              </p>
              <p>
                {"$$\\omega_k = e^{i \\frac{2k\\pi}{n}} = \\cos\\left(\\frac{2k\\pi}{n}\\right) + i\\sin\\left(\\frac{2k\\pi}{n}\\right), \\quad k = 0, 1, 2, \\dots, n - 1$$"}
              </p>
              <p>
                {"• **Regular Polygon:** The roots form vertices of a regular $n$-gon inscribed in the unit circle $|z| = 1$.\n• **Zero Sum Property:** $\\sum_{k=0}^{n-1} \\omega_k = 0$ for all $n \\ge 2$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="trig-powers">
            <div className="sec-badge">Section 2.3</div>
            <h2 className="sec-title">Trigonometric Multiple Angles and Powers</h2>
            <TheoryBox title="Binomial Bridge">
              <p>
                {"• **Multiple Angles:** Expand $(\\cos\\theta + i\\sin\\theta)^n$ by the Binomial Theorem and equate real and imaginary parts to derive formulas for $\\cos(n\\theta)$ and $\\sin(n\\theta)$;\n• **Powers of Sines and Cosines:** Substitute $\\cos\\theta = \\frac{e^{i\\theta} + e^{-i\\theta}}{2}$ and $\\sin\\theta = \\frac{e^{i\\theta} - e^{-i\\theta}}{2i}$ to convert powers $\\cos^n\\theta$ into linear combinations of $\\cos(k\\theta)$ for elementary antidifferentiation."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="complex-proc">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Complex Roots Routine</h2>
            <ProcedureBox title="Step-by-Step Root Finding Procedure" steps={[
              "Express the target complex number in polar exponential form z = r e^(i θ) with θ ∈ (-π, π].",
              "Compute the principal modulus of the root: R = r^(1/n).",
              "Form the argument sequence θ_k = (θ + 2kπ) / n for k = 0, 1, ..., n - 1.",
              "Write each root w_k = R [cos θ_k + i sin θ_k] in Cartesian form.",
              "Verify that all roots lie symmetrically on the circle of radius R with equal angular spacing 2π/n.",
            ]} />
          </section>

          <section className="section" id="complex-ex2">
            <h2 className="sec-title">Advanced Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="All Fourth Roots of a Negative Real Number"
              setup="Find all complex solutions of $z^4 + 16 = 0$ in Cartesian form and plot their geometric placement."
              steps={[
                "Write equation as $z^4 = -16$.",
                "Convert $-16$ to polar form: modulus $r = 16$, principal argument $\\theta = \\pi$. So $-16 = 16 e^{i\\pi}$.",
                "Apply the $n$-th root formula for $n = 4$: $R = 16^{1/4} = 2$.",
                "The arguments are $\\theta_k = \\frac{\\pi + 2k\\pi}{4}$ for $k = 0, 1, 2, 3$:",
                "• For $k = 0$: $\\theta_0 = \\pi/4 \\implies z_0 = 2(\\cos(\\pi/4) + i\\sin(\\pi/4)) = 2(\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}) = \\sqrt{2} + i\\sqrt{2}$.",
                "• For $k = 1$: $\\theta_1 = 3\\pi/4 \\implies z_1 = 2(-\\frac{\\sqrt{2}}{2} + i\\frac{\\sqrt{2}}{2}) = -\\sqrt{2} + i\\sqrt{2}$.",
                "• For $k = 2$: $\\theta_2 = 5\\pi/4 \\implies z_2 = 2(-\\frac{\\sqrt{2}}{2} - i\\frac{\\sqrt{2}}{2}) = -\\sqrt{2} - i\\sqrt{2}$.",
                "• For $k = 3$: $\\theta_3 = 7\\pi/4 \\implies z_3 = 2(\\frac{\\sqrt{2}}{2} - i\\frac{\\sqrt{2}}{2}) = \\sqrt{2} - i\\sqrt{2}$."
              ]}
              result="z = \pm\sqrt{2} \pm i\sqrt{2} \quad (\text{4 roots forming a square of radius 2})"
              check="Verify: (\sqrt{2} + i\sqrt{2})² = 2 + 4i - 2 = 4i. (4i)² = -16. Exact match."
            />
          </section>

          <GuideMcqSection
            id="quiz-complex-numbers-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Complex Numbers & De Moivre Checkpoint"
            scoreId="score-complex-numbers-checkpoint"
            section="complex-numbers-checkpoint"
            questions={CALC_C_COMPLEX_NUMBERS_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-complex-numbers-checkpoint", score, total)}
          />
        </main>
      </StudyGuideShell>
    );
  }

  // Part 1
  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Complex Numbers & De Moivre's Theorem (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Complex · Part 1</div></div>
        <a className="sb-link" href="#complex-algebra">Complex Arithmetic &amp; Modulus</a>
        <a className="sb-link" href="#polar-euler">Polar Form &amp; Euler's Formula</a>
        <a className="sb-link" href="#complex-ex1">Worked Examples</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Module C: Complex Analysis &amp; Transforms · Part 1 of 2</div>
          <h1 className="ch-title">Complex Arithmetic, Polar Coordinates &amp; Euler's Formula</h1>
          <p className="ch-sub">Imaginary units, Cartesian-polar equivalence, and the exponential form</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <CurriculumBadge code="Math-101 / Math-102 Single-Variable Calculus · Module C" />

        <div className="opening-note-box">
          <p className="opening-note">
            <strong>Foundational Blueprint:</strong>{" "}
            {"Complex numbers $\\mathbb{C}$ resolve polynomial roots and unify geometry with trigonometry. In this first part, we examine Cartesian and polar representations, complex conjugates, moduli, and Euler's formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$."}
          </p>
        </div>
        <Divider />

        <section className="section" id="complex-algebra">
          <div className="sec-badge">Section 1.1</div>
          <h2 className="sec-title">Complex Arithmetic and Conjugation</h2>
          <TheoryBox title="Algebraic Foundations">
            <p>
              {"With $i^2 = -1$, every complex number $z = x + iy$ has real part $\\text{Re}(z) = x$, imaginary part $\\text{Im}(z) = y$, and complex conjugate $\\bar{z} = x - iy$:"}
            </p>
            <p>
              {"$$z \\bar{z} = (x + iy)(x - iy) = x^2 + y^2 = |z|^2$$"}
            </p>
            <p>
              {"Division is evaluated by rationalizing the denominator: $\\frac{z_1}{z_2} = \\frac{z_1 \\bar{z}_2}{|z_2|^2}$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="polar-euler">
          <div className="sec-badge">Section 1.2</div>
          <h2 className="sec-title">Polar Representation and Euler's Formula</h2>
          <TheoryBox title="The Polar Metric">
            <p>
              {"In terms of modulus $r = \\sqrt{x^2 + y^2}$ and argument $\\theta = \\arg(z)$:"}
            </p>
            <p>
              {"$$z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}$$"}
            </p>
            <p>
              {"Multiplication of complex numbers multiplies their moduli and adds their arguments: $z_1 z_2 = r_1 r_2 e^{i(\\theta_1 + \\theta_2)}$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="complex-ex1">
          <h2 className="sec-title">Worked Complex Examples</h2>
          <CertificateExample
            number={1}
            tier="Medium"
            title="Converting to Polar Form and Multiplication"
            setup="Convert $z_1 = 1 + i\\sqrt{3}$ and $z_2 = -1 + i$ to polar form and compute their product $z_1 z_2$."
            steps={[
              "For $z_1 = 1 + i\\sqrt{3}$: Modulus $r_1 = \\sqrt{1 + 3} = 2$. Argument $\\theta_1 = \\arctan(\\sqrt{3}/1) = \\pi/3$. Polar form: $z_1 = 2 e^{i\\pi/3}$.",
              "For $z_2 = -1 + i$: Modulus $r_2 = \\sqrt{1 + 1} = \\sqrt{2}$. Since $x < 0, y > 0$, $\\theta_2 = \\pi - \\arctan(1) = 3\\pi/4$. Polar form: $z_2 = \\sqrt{2} e^{i 3\\pi/4}$.",
              "Product in polar form: $z_1 z_2 = (2\\sqrt{2}) e^{i(\\pi/3 + 3\\pi/4)} = 2\\sqrt{2} e^{i(4\\pi/12 + 9\\pi/12)} = 2\\sqrt{2} e^{i 13\\pi/12} = 2\\sqrt{2} e^{-i 11\\pi/12}$."
            ]}
            result="z_1 = 2 e^{i\pi/3}, \quad z_2 = \sqrt{2} e^{i 3\pi/4}, \quad z_1 z_2 = 2\sqrt{2} e^{i 13\pi/12}"
            check="Cartesian product: (1 + i\sqrt{3})(-1 + i) = -1 + i - i\sqrt{3} - \sqrt{3} = -(1+\sqrt{3}) + i(1-\sqrt{3}). |-(1+\sqrt{3}) + i(1-\sqrt{3})|² = (1+\sqrt{3})² + (1-\sqrt{3})² = 8 = (2\sqrt{2})². Exact agreement."
          />
        </section>

        <section className="section">
          <h2 className="sec-title">Continue to Part 2</h2>
          <p>
            Advance to Section 2 for De Moivre's Theorem, roots of unity, multiple-angle expansions, and the 20-question checkpoint quiz.
          </p>
          <Link className="primary-action" to="/complex-numbers/2" style={{ display: "inline-block", marginTop: "1rem" }}>
            Proceed to Section 2 →
          </Link>
        </section>
      </main>
    </StudyGuideShell>
  );
}
