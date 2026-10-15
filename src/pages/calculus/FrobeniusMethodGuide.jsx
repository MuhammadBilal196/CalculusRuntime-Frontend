import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_B_FROBENIUS_METHOD_QUIZ } from "../../data/calcAgSequencesComplexQuizzes";

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

export default function FrobeniusMethodGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Series Solutions of ODEs: Frobenius Root Cases & Bessel Solutions (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Frobenius Method · Part 2</div></div>
          <a className="sb-link" href="#three-root-cases">The Three Indicial Root Cases</a>
          <a className="sb-link" href="#case1-nonresonant">Case 1: Nonresonant Roots</a>
          <a className="sb-link" href="#case2-repeated">Case 2: Repeated Roots</a>
          <a className="sb-link" href="#case3-integer-diff">Case 3: Integer Difference</a>
          <a className="sb-link" href="#worked-examples">Certificate Examples</a>
          <a className="sb-link" href="#quiz-frobenius-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>

        <div className="guide-content">
          <CurriculumBadge code="MATH-CAG-ODE-02B" />
          <h1 className="guide-title">Indicial Root Cases &amp; Bessel Solutions</h1>
          <p className="lead-p">
            Analyze the three canonical cases of indicial roots in the Frobenius method, master logarithmic solutions,
            and solve Bessel-type radial differential equations.
          </p>

          <section className="section" id="three-root-cases">
            <div className="sec-badge">Section 4.4</div>
            <h2 className="sec-title">Classification of Indicial Roots</h2>
            <TheoryBox title="Taxonomy of Frobenius Solutions">
              <p>
                {"Let $r_1, r_2$ be the roots of the indicial polynomial $F(r) = r(r-1) + p_0 r + q_0 = 0$, with $\\text{Re}(r_1) \\ge \\text{Re}(r_2)$."}
              </p>
              <ul>
                <li>
                  <strong>{"Case 1: $r_1 - r_2 \\notin \\mathbb{Z}$ (Nonresonant):"}</strong>
                  <br />
                  {"Two distinct linearly independent Frobenius series exist:"}
                  <br />
                  {"$$y_1(x) = x^{r_1}\\sum_{n=0}^\\infty a_n x^n, \\quad y_2(x) = x^{r_2}\\sum_{n=0}^\\infty b_n x^n$$"}
                </li>
                <li>
                  <strong>{"Case 2: $r_1 = r_2 = r$ (Repeated Roots):"}</strong>
                  <br />
                  {"The second solution is fundamentally logarithmic:"}
                  <br />
                  {"$$y_1(x) = x^r \\sum_{n=0}^\\infty a_n x^n, \\quad y_2(x) = y_1(x) \\ln x + x^r \\sum_{n=1}^\\infty b_n x^n$$"}
                </li>
                <li>
                  <strong>{"Case 3: $r_1 - r_2 = N \\in \\mathbb{Z}^+$ (Integer Difference):"}</strong>
                  <br />
                  {"The larger root $r_1$ always yields a Frobenius series. The smaller root $r_2$ may require a logarithm:"}
                  <br />
                  {"$$y_2(x) = C y_1(x) \\ln x + x^{r_2}\\sum_{n=0}^\\infty b_n x^n$$"}
                  {"where $C$ may be zero if the resonance numerator also vanishes."}
                </li>
              </ul>
            </TheoryBox>
          </section>

          <section className="section" id="case1-nonresonant">
            <div className="sec-badge">Section 4.5</div>
            <h2 className="sec-title">Case 1 Worked Nonresonant Solution</h2>
            <ProcedureBox title="Algorithmic Construction for r₁ - r₂ ∉ ℤ">
              <ol>
                <li>
                  <strong>{"Solve for Larger Root $r_1$:"}</strong> {"Substitute $r_1$ into the general recurrence relation to compute coefficients $a_n(r_1)$ normalized with $a_0 = 1$."}
                </li>
                <li>
                  <strong>{"Solve for Smaller Root $r_2$:"}</strong> {"Repeat independently with $r_2$. Because $r_2 + n \\ne r_1$ for any integer $n$, the recurrence denominator $F(r_2 + n)$ never vanishes!"}
                </li>
                <li>
                  <strong>{"Form General Solution:"}</strong> {"Assemble the basis $y(x) = c_1 y_1(x) + c_2 y_2(x)$."}
                </li>
              </ol>
            </ProcedureBox>
          </section>

          <section className="section" id="case2-repeated">
            <div className="sec-badge">Section 4.6</div>
            <h2 className="sec-title">Case 2: Repeated Indicial Roots (Logarithmic Solutions)</h2>
            <ProcedureBox title="Algorithmic Construction for r₁ = r₂">
              <ol>
                <li>
                  <strong>{"Construct First Solution $y_1(x)$:"}</strong> {"Obtain $y_1(x) = x^r \\sum_{n=0}^\\infty a_n(r) x^n$ evaluated at repeated root $r$."}
                </li>
                <li>
                  <strong>{"Differentiate with Respect to Parameter $r$:"}</strong> {"Form the second solution via parameter differentiation:"}
                  <br />
                  {"$$y_2(x) = \\left. \\frac{\\partial}{\\partial r} y(x, r) \\right|_{r=r_1} = y_1(x) \\ln x + x^r \\sum_{n=1}^\\infty a_n'(r_1) x^n$$"}
                </li>
              </ol>
            </ProcedureBox>
          </section>

          <section className="section" id="case3-integer-diff">
            <div className="sec-badge">Section 4.7</div>
            <h2 className="sec-title">Case 3: Indicial Roots Differing by an Integer (r₁ - r₂ = N)</h2>
            <ProcedureBox title="Algorithmic Construction for r₁ - r₂ = N ∈ ℕ">
              <ol>
                <li>
                  <strong>{"Larger Root $r_1$:"}</strong> {"Always produces the first valid Frobenius series $y_1(x) = x^{r_1}\\sum_{n=0}^\\infty a_n x^n$ with $a_0 \\ne 0$."}
                </li>
                <li>
                  <strong>{"Smaller Root $r_2$:"}</strong> {"At step $n = N$, the recurrence denominator $F(r_2 + N) = F(r_1) = 0$. If the numerator also vanishes, $a_N$ is arbitrary and no logarithm is needed. Otherwise, the second solution takes the logarithmic form $y_2(x) = C y_1(x) \\ln x + x^{r_2}\\sum b_n x^n$."}
                </li>
              </ol>
            </ProcedureBox>
          </section>

          <section className="section" id="worked-examples">
            <h2 className="sec-title">Certificate Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Frobenius Solution of 2x²y'' - xy' + (x - 5)y = 0"
              problem={"Find the indicial roots and the first two non-zero terms of the solution corresponding to the larger root for $2x^2 y'' - x y' + (x - 5)y = 0$ at $x_0 = 0$."}
              solution={"Dividing by $2x^2$: $p_0 = -1/2, q_0 = -5/2$. Indicial equation: $r(r-1) - r/2 - 5/2 = 0 \\implies 2r^2 - 3r - 5 = (2r - 5)(r + 1) = 0$. Roots are $r_1 = 5/2$ and $r_2 = -1$. Difference is $5/2 - (-1) = 7/2 \\notin \\mathbb{Z}$ (Case 1). Substituting $y = \\sum a_n x^{n+5/2}$: $\\sum [(2(n+5/2)(n+3/2) - (n+5/2) - 5)a_n x^{n+5/2} + a_n x^{n+7/2}] = 0$. For $n \\ge 1$, $F(n+5/2)a_n + a_{n-1} = 0$, where $F(r) = (2r-5)(r+1)$. At $r = n+5/2$, $F(n+5/2) = (2n)(n+7/2) = n(2n+7)$. Hence $a_n = -\\frac{a_{n-1}}{n(2n+7)}$. With $a_0 = 1$, $a_1 = -1/(1 \\cdot 9) = -1/9$. Thus $y_1(x) = x^{5/2} \\left(1 - \\frac{x}{9} + \\dots\\right)$."}
            />

            <CertificateExample
              number={2}
              tier="Hard"
              title="Bessel Equation Order Zero Logarithmic Singularity"
              problem={"Demonstrate why Bessel's equation of order zero $x^2 y'' + x y' + x^2 y = 0$ requires a logarithmic solution $Y_0(x)$."}
              solution={"Normalized coefficients are $p(x) = 1/x$ and $q(x) = 1$. Then $p_0 = 1, q_0 = 0$. The indicial equation is $r(r-1) + r = r^2 = 0$, which possesses double roots $r_1 = r_2 = 0$ (Case 2). The first Frobenius solution is $J_0(x) = \\sum_{m=0}^\\infty \\frac{(-1)^m}{(m!)^2} (x/2)^{2m}$. By the repeated-root theorem, differentiating $y(x, r) = x^r \\sum a_n(r)x^n$ with respect to parameter $r$ at $r = 0$ yields $y_2(x) = \\left. \\frac{\\partial y}{\\partial r} \\right|_{r=0} = J_0(x) \\ln x + \\sum_{n=1}^\\infty b_n x^n$, forming the classical Neumann function $Y_0(x)$ with a logarithmic singularity at the origin."}
            />
          </section>

          <Divider />

          <section className="section" id="quiz-frobenius-checkpoint">
            <div className="sec-badge">Section 4.6</div>
            <h2 className="sec-title">Checkpoint Assessment: Frobenius Method</h2>
            <p className="lead-p">
              Evaluate your proficiency in indicial root classification, recurrence derivations, and singular Frobenius solutions. 80% passing threshold required.
            </p>
            <GuideMcqSection
              id="quiz-frobenius-method-checkpoint"
              scoreId="score-frobenius-method-checkpoint"
              section="frobenius-method-checkpoint"
              questions={CALC_B_FROBENIUS_METHOD_QUIZ}
              onComplete={(score, total) => saveQuizScore("guide-mcq-frobenius-method-checkpoint", score, total)}
            />
          </section>
        </div>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Series Solutions of ODEs: Regular Singular Points & Frobenius Ansatz (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Frobenius Method · Part 1</div></div>
        <a className="sb-link" href="#regular-singular-test">Regular Singular Point Test</a>
        <a className="sb-link" href="#frobenius-ansatz">The Frobenius Ansatz</a>
        <a className="sb-link" href="#indicial-equation">The Indicial Equation</a>
        <a className="sb-link" href="#euler-cauchy-prototype">Euler-Cauchy Prototype</a>
        <a className="sb-link" href="#part-summary">Module Summary</a>
        <Link className="sb-link" to="/frobenius-method/2">Part 2: Root Cases &rarr;</Link>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>

      <div className="guide-content">
        <CurriculumBadge code="MATH-CAG-ODE-02A" />
        <h1 className="guide-title">Regular Singular Points &amp; Frobenius Foundations</h1>
        <p className="lead-p">
          Extend power-series analysis to singular points. Learn how the Frobenius method balances singular
          asymptotes using fractional indicial powers.
        </p>

        <section className="section" id="regular-singular-test">
          <div className="sec-badge">Section 4.1</div>
          <h2 className="sec-title">The Regular Singular Point Test</h2>
          <TheoryBox title="Definition: Regular Singular Point">
            <p>
              {"Consider $P(x)y'' + Q(x)y' + R(x)y = 0$, where $x_0$ is a singular point ($P(x_0) = 0$). We classify $x_0$ as a **regular singular point** if both limits exist and are finite:"}
            </p>
            <p>
              {"$$p_0 = \\lim_{x \\to x_0} (x - x_0) \\frac{Q(x)}{P(x)}, \\quad q_0 = \\lim_{x \\to x_0} (x - x_0)^2 \\frac{R(x)}{P(x)}$$"}
            </p>
            <p>
              {"Equivalently, $(x - x_0)p(x)$ and $(x - x_0)^2 q(x)$ must be analytic at $x_0$. If either limit fails to exist, $x_0$ is an **irregular singular point**."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="frobenius-ansatz">
          <div className="sec-badge">Section 4.2</div>
          <h2 className="sec-title">The Frobenius Generalized Series Ansatz</h2>
          <TheoryBox title="Series Representation with Indicial Exponent">
            <p>
              {"At a regular singular point $x_0 = 0$, ordinary Taylor series fail. Ferdinand Georg Frobenius introduced the generalized series:"}
            </p>
            <p>
              {"$$y(x) = x^r \\sum_{n=0}^\\infty a_n x^n = \\sum_{n=0}^\\infty a_n x^{n+r}, \\quad (a_0 \\ne 0, \\; x > 0)$$"}
            </p>
            <p>
              {"where $r$ is an algebraic parameter (the **indicial exponent**) to be determined from the differential equation."}
            </p>
            <p>
              {"Term-by-term derivatives:"}
            </p>
            <p>
              {"$$y'(x) = \\sum_{n=0}^\\infty (n+r) a_n x^{n+r-1}, \\quad y''(x) = \\sum_{n=0}^\\infty (n+r)(n+r-1) a_n x^{n+r-2}$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="indicial-equation">
          <div className="sec-badge">Section 4.3</div>
          <h2 className="sec-title">Deriving the Indicial Equation</h2>
          <ProcedureBox title="Algorithmic Indicial Derivation">
            <ol>
              <li>
                <strong>{"Substitute Ansatz into ODE:"}</strong> {"Substitute $y, y', y''$ into $x^2 y'' + x(x p(x))y' + (x^2 q(x))y = 0$."}
              </li>
              <li>
                <strong>{"Isolate Lowest Power of x:"}</strong> {"The lowest power of $x$ is $x^r$, originating from the $n = 0$ term of the leading order expressions."}
              </li>
              <li>
                <strong>{"Set Coefficient to Zero:"}</strong> {"The coefficient of $x^r$ is $[r(r-1) + p_0 r + q_0] a_0 = 0$."}
              </li>
              <li>
                <strong>{"Solve Quadratic Polynomial:"}</strong> {"Since $a_0 \\ne 0$ by definition, we obtain the **indicial equation**:"}
                <br />
                {"$$F(r) = r(r-1) + p_0 r + q_0 = r^2 + (p_0 - 1)r + q_0 = 0$$"}
              </li>
            </ol>
          </ProcedureBox>
        </section>

        <section className="section" id="euler-cauchy-prototype">
          <div className="sec-badge">Section 4.4</div>
          <h2 className="sec-title">The Euler-Cauchy Limiting Prototype</h2>
          <TheoryBox title="Canonical Model: x²y'' + ax y' + by = 0">
            <p>
              {"Near $x = 0$, every regular singular ODE is asymptotically governed by the Euler-Cauchy equation:"}
            </p>
            <p>
              {"$$x^2 y'' + p_0 x y' + q_0 y = 0$$"}
            </p>
            <p>
              {"Substituting $y = x^r$ immediately reproduces the identical indicial equation $r(r-1) + p_0 r + q_0 = 0$. The roots $r_1, r_2$ govern the dominant asymptotic behavior as $x \\to 0^+$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="part-summary">
          <div className="sec-badge">Part 1 Review</div>
          <h2 className="sec-title">Key Takeaways</h2>
          <p>
            Regular singular points require an algebraic shift $x^r$ determined by the roots of the quadratic indicial polynomial. Continue to Part 2 to investigate the three root cases, resonance, and logarithmic solutions.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-primary" to="/frobenius-method/2" style={{ textDecoration: "none", padding: "0.75rem 1.5rem", borderRadius: "8px", background: "var(--teal)", color: "#fff", fontWeight: 600 }}>
              Proceed to Part 2: Indicial Root Cases &rarr;
            </Link>
          </div>
        </section>
      </div>
    </StudyGuideShell>
  );
}
