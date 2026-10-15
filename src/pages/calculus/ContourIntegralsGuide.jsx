import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, CertificateExample } from "./CalcBlocks";
import { CALC_C_CONTOUR_RESIDUES_QUIZ } from "../../data/calcAgSequencesComplexQuizzes";

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

export default function ContourIntegralsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();

  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Complex Analysis: Laurent Series, Singularities & Residues (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Residues · Part 2</div></div>
          <a className="sb-link" href="#laurent-series">Laurent Series Expansions</a>
          <a className="sb-link" href="#singularity-classification">Singularity Classification</a>
          <a className="sb-link" href="#residue-formulas">Residue Calculus Formulas</a>
          <a className="sb-link" href="#residue-theorem">Cauchy Residue Theorem</a>
          <a className="sb-link" href="#real-integrals">Real Definite Integrals</a>
          <a className="sb-link" href="#worked-examples">Certificate Examples</a>
          <a className="sb-link" href="#quiz-contour-checkpoint">Interactive Quiz · 20 Qs</a>
          <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
        </nav>

        <div className="guide-content">
          <CurriculumBadge code="MATH-CAG-CMPLX-02B" />
          <h1 className="guide-title">Laurent Series, Residue Calculus &amp; Real Integrals</h1>
          <p className="lead-p">
            Unify the theory of isolated complex singularities through Laurent expansions. Evaluate complex
            contour integrals and evaluate previously intractable real improper and trigonometric integrals via Cauchy&apos;s Residue Theorem.
          </p>

          <section className="section" id="laurent-series">
            <div className="sec-badge">Section 2.4</div>
            <h2 className="sec-title">Laurent Series Expansions in Annuli</h2>
            <TheoryBox title="Theorem: Laurent Series Representation">
              <p>
                {"Let $f(z)$ be analytic in an annulus $r < |z - z_0| < R$. Then $f(z)$ can be expanded uniquely into a two-sided power series:"}
              </p>
              <p>
                {"$$f(z) = \\sum_{n=-\\infty}^{\\infty} a_n (z - z_0)^n = \\underbrace{\\sum_{n=0}^{\\infty} a_n (z - z_0)^n}_{\\text{Analytic / Regular Part}} + \\underbrace{\\sum_{k=1}^{\\infty} \\frac{b_k}{(z - z_0)^k}}_{\\text{Principal Part}}$$"}
              </p>
              <p>
                {"where $b_1 = a_{-1}$ is the crucial coefficient known as the \\textbf{residue} of $f(z)$ at $z_0$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="singularity-classification">
            <div className="sec-badge">Section 2.5</div>
            <h2 className="sec-title">Classification of Isolated Singularities</h2>
            <TheoryBox title="Three Canonical Types of Isolated Singularities">
              <p>
                {"The structure of the principal part $\\sum_{k=1}^\\infty b_k (z - z_0)^{-k}$ determines the topological nature of the isolated singularity at $z_0$:"}
              </p>
              <ul>
                <li>
                  <strong>{"Removable Singularity:"}</strong> {"No negative power terms ($b_k = 0$ for all $k \\ge 1$). The limit $\\lim_{z \\to z_0} f(z)$ exists and is finite. (Example: $\\frac{\\sin z}{z}$ at $z = 0$)."}
                </li>
                <li>
                  <strong>{"Pole of Order m:"}</strong> {"The principal part has finitely many terms terminating at $b_m (z - z_0)^{-m}$ with $b_m \\ne 0$. Here $\\lim_{z \\to z_0} |f(z)| = \\infty$. (Example: $\\frac{1}{(z-1)^2}$ is a double pole at $z = 1$)."}
                </li>
                <li>
                  <strong>{"Essential Singularity:"}</strong> {"The principal part has infinitely many non-zero negative terms. By Picard's Great Theorem, in every punctured neighborhood of an essential singularity, $f(z)$ assumes every complex value infinitely often, with at most one exception. (Example: $e^{1/z}$ at $z = 0$)."}
                </li>
              </ul>
            </TheoryBox>
          </section>

          <section className="section" id="residue-formulas">
            <div className="sec-badge">Section 2.6</div>
            <h2 className="sec-title">Formulas for Computing Residues</h2>
            <TheoryBox title="Operational Formulas for Isolated Residues">
              <p>
                {"Depending on the order of the singularity, residues are computed via the following exact rules:"}
              </p>
              <p>
                <strong>{"Simple Pole (Order 1):"}</strong>
                {"$$\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$$"}
                {"If $f(z) = \\frac{P(z)}{Q(z)}$ where $P(z_0) \\ne 0$, $Q(z_0) = 0$, and $Q'(z_0) \\ne 0$, then:"}
                {"$$\\text{Res}\\left(\\frac{P}{Q}, z_0\\right) = \\frac{P(z_0)}{Q'(z_0)}$$"}
              </p>
              <p>
                <strong>{"Pole of Order m:"}</strong>
                {"$$\\text{Res}(f, z_0) = \\frac{1}{(m - 1)!} \\lim_{z \\to z_0} \\frac{d^{m-1}}{dz^{m-1}} \\left[ (z - z_0)^m f(z) \\right]$$"}
              </p>
              <p>
                <strong>{"Essential Singularity:"}</strong>
                {" Expand $f(z)$ into its Laurent series and directly read the coefficient $a_{-1}$ of $\\frac{1}{z - z_0}$."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="residue-theorem">
            <div className="sec-badge">Section 2.7</div>
            <h2 className="sec-title">Cauchy&apos;s Residue Theorem</h2>
            <TheoryBox title="Theorem: The Residue Calculus Master Formula">
              <p>
                {"Let $\\gamma$ be a simple closed positively oriented contour. If $f(z)$ is analytic inside and on $\\gamma$, except for a finite number of isolated singularities $z_1, z_2, \\dots, z_N$ enclosed inside $\\gamma$, then:"}
              </p>
              <p>
                {"$$\\oint_\\gamma f(z)\\,dz = 2\\pi i \\sum_{k=1}^N \\text{Res}(f, z_k)$$"}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="real-integrals">
            <div className="sec-badge">Section 2.8</div>
            <h2 className="sec-title">Evaluation of Real Integrals via Residues</h2>
            <ProcedureBox title="Technique 1: Definite Trigonometric Integrals ∫₀²ᵝ R(cos θ, sin θ) dθ">
              <ol>
                <li>
                  <strong>{"Substitute Complex Variable:"}</strong> {"Set $z = e^{i\\theta}$, which transforms the real interval $[0, 2\\pi]$ into the unit circle $|z| = 1$."}
                </li>
                <li>
                  <strong>{"Convert Trigonometric Terms:"}</strong>
                  <div style={{ marginTop: "0.25rem" }}>
                    {"$$\\cos\\theta = \\frac{z + z^{-1}}{2}, \\qquad \\sin\\theta = \\frac{z - z^{-1}}{2i}, \\qquad d\\theta = \\frac{dz}{i z}$$"}
                  </div>
                </li>
                <li>
                  <strong>{"Identify Poles Inside Unit Circle:"}</strong> {"Find all poles $z_k$ satisfying $|z_k| < 1$."}
                </li>
                <li>
                  <strong>{"Apply Residue Theorem:"}</strong> {"$\\int_0^{2\\pi} R\\,d\\theta = 2\\pi i \\sum_{|z_k| < 1} \\text{Res}(\\tilde{f}, z_k)$."}
                </li>
              </ol>
            </ProcedureBox>

            <ProcedureBox title="Technique 2: Improper Real Integrals ∫₋∞^∞ [P(x)/Q(x)] dx">
              <ol>
                <li>
                  <strong>{"Form Semicircular Contour:"}</strong> {"Close the real line $[-R, R]$ with a semicircular arc $C_R$ in the upper half-plane ($\\text{Im}(z) > 0$)."}
                </li>
                <li>
                  <strong>{"Degree Condition:"}</strong> {"Ensure $\\deg(Q) \\ge \\deg(P) + 2$ so that $\\int_{C_R} f(z)\\,dz \\to 0$ as $R \\to \\infty$."}
                </li>
                <li>
                  <strong>{"Sum Upper Half-Plane Residues:"}</strong>
                  <div style={{ marginTop: "0.25rem" }}>
                    {"$$\\int_{-\\infty}^\\infty \\frac{P(x)}{Q(x)}\\,dx = 2\\pi i \\sum_{\\text{Im}(z_k) > 0} \\text{Res}\\left(\\frac{P}{Q}, z_k\\right)$$"}
                  </div>
                </li>
              </ol>
            </ProcedureBox>
          </section>

          <section className="section" id="worked-examples">
            <h2 className="sec-title">Certificate Worked Examples</h2>
            <CertificateExample
              number={1}
              tier="Hard"
              title="Residue Evaluation of Definite Trigonometric Integral"
              problem={"Evaluate the real definite integral $I = \\int_0^{2\\pi} \\frac{d\\theta}{5 - 4\\cos\\theta}$ using contour integration around the unit circle."}
              solution={"Step 1: Substitute $z = e^{i\\theta}$, so $\\cos\\theta = \\frac{z + z^{-1}}{2}$ and $d\\theta = \\frac{dz}{iz}$:\n$5 - 4\\cos\\theta = 5 - 2(z + z^{-1}) = \\frac{5z - 2z^2 - 2}{z} = -\\frac{2z^2 - 5z + 2}{z}$.\n\nStep 2: Rewrite integral along $|z| = 1$:\n$I = \\oint_{|z|=1} \\frac{1}{-(2z^2 - 5z + 2)/z} \\frac{dz}{iz} = \\oint_{|z|=1} \\frac{dz}{-i(2z - 1)(z - 2)} = \\frac{1}{i} \\oint_{|z|=1} \\frac{dz}{(2z - 1)(2 - z)}$.\n\nStep 3: Locate poles:\nPoles occur at $z = 1/2$ and $z = 2$. Only $z = 1/2$ lies inside the unit circle $|z| < 1$.\n\nStep 4: Compute residue at simple pole $z = 1/2$:\n$\\text{Res}\\left( \\frac{1}{(2z - 1)(2 - z)}, \\frac{1}{2} \\right) = \\lim_{z \\to 1/2} \\frac{z - 1/2}{(2z - 1)(2 - z)} = \\lim_{z \\to 1/2} \\frac{1/2}{2 - z} = \\frac{1/2}{3/2} = \\frac{1}{3}$.\n\nStep 5: Apply Residue Theorem:\n$I = \\frac{1}{i} \\cdot 2\\pi i \\left(\\frac{1}{3}\\right) = \\frac{2\\pi}{3}$."}
            />

            <CertificateExample
              number={2}
              tier="Hard"
              title="Improper Rational Integral via Semicircular Upper Half-Plane Contour"
              problem={"Compute the exact value of $I = \\int_{-\\infty}^\\infty \\frac{x^2}{(x^2 + 1)(x^2 + 9)}\\,dx$ using complex residue calculus."}
              solution={"Step 1: Set $f(z) = \\frac{z^2}{(z^2 + 1)(z^2 + 9)} = \\frac{z^2}{(z - i)(z + i)(z - 3i)(z + 3i)}$.\nDegree of denominator is $4$, degree of numerator is $2$. Since $4 \\ge 2 + 2$, the integral along semicircle $C_R$ vanishes as $R \\to \\infty$.\n\nStep 2: Identify poles in upper half-plane ($\\text{Im}(z) > 0$):\n$z_1 = i$ and $z_2 = 3i$ (both simple poles).\n\nStep 3: Compute residues:\nAt $z = i$:\n$\\text{Res}(f, i) = \\left. \\frac{z^2}{(z + i)(z^2 + 9)} \\right|_{z=i} = \\frac{-1}{(2i)(8)} = \\frac{-1}{16i} = \\frac{i}{16}$.\n\nAt $z = 3i$:\n$\\text{Res}(f, 3i) = \\left. \\frac{z^2}{(z^2 + 1)(z + 3i)} \\right|_{z=3i} = \\frac{-9}{(-8)(6i)} = \\frac{-9}{-48i} = \\frac{3}{16i} = -\\frac{3i}{16}$.\n\nStep 4: Sum of residues:\n$\\sum \\text{Res} = \\frac{i}{16} - \\frac{3i}{16} = -\\frac{2i}{16} = -\\frac{i}{8}$.\n\nStep 5: Multiply by $2\\pi i$:\n$I = 2\\pi i \\left(-\\frac{i}{8}\\right) = 2\\pi \\left(\\frac{1}{8}\\right) = \\frac{\\pi}{4}$."}
            />
          </section>

          <Divider />

          <section className="section" id="quiz-contour-checkpoint">
            <div className="sec-badge">Section 2.9</div>
            <h2 className="sec-title">Checkpoint Assessment: Contour Integrals &amp; Residues</h2>
            <p className="lead-p">
              Evaluate your understanding of Cauchy&apos;s theorem, Cauchy integral formulas, Laurent expansions, and residue evaluations of real integrals. 80% passing threshold required.
            </p>
            <GuideMcqSection
              quizId="calc-c-contour-residues-checkpoint"
              questions={CALC_C_CONTOUR_RESIDUES_QUIZ}
              onComplete={(score, total) => saveQuizScore("calc-c-contour-residues-checkpoint", score, total)}
            />
          </section>
        </div>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Complex Analysis: Contour Integrals & Cauchy's Theorem (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Contour · Part 1</div></div>
        <a className="sb-link" href="#complex-integration">Complex Line Integrals</a>
        <a className="sb-link" href="#ml-inequality">The ML-Inequality</a>
        <a className="sb-link" href="#cauchy-goursat">Cauchy-Goursat Theorem</a>
        <a className="sb-link" href="#deformation">Deformation of Path</a>
        <a className="sb-link" href="#cif-basic">Cauchy Integral Formula</a>
        <a className="sb-link" href="#cif-derivatives">Higher Derivatives CIF</a>
        <a className="sb-link" href="#part-summary">Next: Laurent &amp; Residues</a>
        <Link className="sb-link" to="/courses/calculus-analytical-geometry">All modules</Link>
      </nav>

      <div className="guide-content">
        <CurriculumBadge code="MATH-CAG-CMPLX-02A" />
        <h1 className="guide-title">Contour Integrals &amp; Cauchy Integral Formulas</h1>
        <p className="lead-p">
          Discover the profound global rigidity of holomorphic functions: how values along a closed boundary contour
          completely determine the function and all of its derivatives everywhere inside the domain.
        </p>

        <section className="section" id="complex-integration">
          <div className="sec-badge">Section 2.1</div>
          <h2 className="sec-title">Parametric Complex Line Integrals</h2>
          <TheoryBox title="Definition: Integration Along Smooth Paths">
            <p>
              {"Let $\\gamma: [a, b] \\to \\mathbb{C}$ be a piecewise smooth oriented curve, and let $f(z)$ be continuous on $\\gamma$. The complex line integral is defined by:"}
            </p>
            <p>
              {"$$\\int_\\gamma f(z)\\,dz = \\int_a^b f(\\gamma(t)) \\gamma'(t)\\,dt$$"}
            </p>
            <p>
              {"Writing $f(z) = u + iv$ and $dz = dx + i dy$, the complex integral decomposes into two real line integrals:"}
            </p>
            <p>
              {"$$\\int_\\gamma f(z)\\,dz = \\int_\\gamma (u\\,dx - v\\,dy) + i \\int_\\gamma (v\\,dx + u\\,dy)$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="ml-inequality">
          <div className="sec-badge">Section 2.2</div>
          <h2 className="sec-title">The ML-Inequality (Darboux Inequality)</h2>
          <TheoryBox title="Theorem: Bounding Contour Integrals">
            <p>
              {"If $\\gamma$ is a contour of total arc length $L = \\int_\\gamma |dz|$, and $|f(z)| \\le M$ for all $z$ on $\\gamma$, then:"}
            </p>
            <p>
              {"$$\\left| \\int_\\gamma f(z)\\,dz \\right| \\le M \\cdot L$$"}
            </p>
            <p>
              {"The ML-inequality is the primary analytical tool for proving that integrals along expanding circular arcs vanish as $R \\to \\infty$."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="cauchy-goursat">
          <div className="sec-badge">Section 2.3</div>
          <h2 className="sec-title">The Cauchy-Goursat Theorem</h2>
          <TheoryBox title="Theorem: Closed Loop Integrals of Analytic Functions Vanish">
            <p>
              {"If a function $f(z)$ is analytic in a simply connected domain $D$, then for every simple closed contour $\\gamma$ in $D$:"}
            </p>
            <p>
              {"$$\\oint_\\gamma f(z)\\,dz = 0$$"}
            </p>
            <p>
              {"Remark: Edouard Goursat proved that this holds without assuming the continuity of $f'(z)$, relying only on the existence of the complex derivative."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="deformation">
          <div className="sec-badge">Section 2.4</div>
          <h2 className="sec-title">Principle of Contour Deformation</h2>
          <TheoryBox title="Homotopy and Invariance Under Deformation">
            <p>
              {"If $f(z)$ is analytic throughout the region bounded between two simple closed contours $\\gamma_1$ and $\\gamma_2$ (with $\\gamma_2$ enclosed within $\\gamma_1$), then:"}
            </p>
            <p>
              {"$$\\oint_{\\gamma_1} f(z)\\,dz = \\oint_{\\gamma_2} f(z)\\,dz$$"}
            </p>
            <p>
              {"This principle allows complex, irregular integration contours to be deformed into tiny, convenient circles centered directly on isolated singularities."}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="cif-basic">
          <div className="sec-badge">Section 2.5</div>
          <h2 className="sec-title">Cauchy&apos;s Integral Formula</h2>
          <TheoryBox title="Theorem: Boundary Values Dictate Interior Values">
            <p>
              {"Let $f(z)$ be analytic inside and on a simple closed positively oriented contour $\\gamma$. For any interior point $z_0$ enclosed by $\\gamma$:"}
            </p>
            <p>
              {"$$f(z_0) = \\frac{1}{2\\pi i} \\oint_\\gamma \\frac{f(z)}{z - z_0}\\,dz$$"}
            </p>
            <p>
              {"Equivalently, for integrating rational expressions with a simple pole at $z_0$:"}
            </p>
            <p>
              {"$$\\oint_\\gamma \\frac{f(z)}{z - z_0}\\,dz = 2\\pi i f(z_0)$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="cif-derivatives">
          <div className="sec-badge">Section 2.6</div>
          <h2 className="sec-title">Generalized CIF for Higher Derivatives</h2>
          <TheoryBox title="Theorem: Infinite Differentiability of Holomorphic Functions">
            <p>
              {"If $f(z)$ is analytic inside and on $\\gamma$, it possesses derivatives of all orders at any interior point $z_0$, given by:"}
            </p>
            <p>
              {"$$f^{(n)}(z_0) = \\frac{n!}{2\\pi i} \\oint_\\gamma \\frac{f(z)}{(z - z_0)^{n+1}}\\,dz$$"}
            </p>
            <p>
              {"Consequently, we can evaluate closed contour integrals with higher-order denominator poles via:"}
            </p>
            <p>
              {"$$\\oint_\\gamma \\frac{f(z)}{(z - z_0)^{n+1}}\\,dz = \\frac{2\\pi i}{n!} f^{(n)}(z_0)$$"}
            </p>
          </TheoryBox>
        </section>

        <section className="section" id="part-summary">
          <div className="sec-badge">Part 1 Review</div>
          <h2 className="sec-title">Key Takeaways &amp; Progression</h2>
          <p>
            Cauchy&apos;s integral formulas provide the machinery to evaluate singular closed-loop integrals. In Part 2, we introduce Laurent expansions to classify isolated singularities and unleash Cauchy&apos;s Residue Theorem.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-primary" to="/contour-integrals/2" style={{ textDecoration: "none", padding: "0.75rem 1.5rem", borderRadius: "8px", background: "var(--teal)", color: "#fff", fontWeight: 600 }}>
              Proceed to Part 2: Laurent Series &amp; Residues &rarr;
            </Link>
          </div>
        </section>
      </div>
    </StudyGuideShell>
  );
}
