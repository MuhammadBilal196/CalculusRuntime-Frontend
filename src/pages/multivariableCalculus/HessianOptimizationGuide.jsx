import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { MV_HESSIAN_OPTIMIZATION_QUIZ } from "../../data/mvOptimizationQuiz";
import "./PartialDerivativesGuide.css";
import { RealLifeUse } from "../calculus/CalcBlocks";
import KKTConditionsGuide from "./KKTConditionsGuide";

function Divider() {
  return <hr className="divider" />;
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>Operational Blueprint:</strong> The Hessian Matrix &amp;
        Optimization extends the first-derivative critical-point test into
        several variables. The gradient identifies stationary points, while the
        Hessian matrix records the second-order curvature information needed to
        determine whether a critical point is a local minimum, local maximum, or
        saddle point. This guide develops the Hessian systematically, explains
        the two-variable determinant test, extends the classification idea to
        higher dimensions, and connects second-order information to practical
        optimization.
      </p>
    </div>
  );
}

function GuideSidebarPart1() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">
          Constrained &amp; Unconstrained Optimization
        </div>
      </div>

      <div className="sb-group">PART 1</div>

      {/* Topic 1 */}
      <a className="sb-link" href="#hessian-optimization">
        The Hessian Matrix &amp; Optimization
      </a>

      <a className="sb-link" href="#optimization-worked-examples">
        Worked Examples
      </a>

      <a className="sb-link" href="#mcq-hessian-optimization">
        Quiz (20 Questions)
      </a>

      {/* Topic 2 */}
      <a className="sb-link" href="#kkt-opening">
        Inequality Constraints (KKT Conditions)
      </a>

      <a className="sb-link" href="#kkt-7">
        Worked Examples
      </a>

      <a className="sb-link" href="#mcq-kkt-conditions">
        Quiz (20 Questions)
      </a>

      <a className="sb-link" href="#kkt-12">
        Key Concepts
      </a>

      <div className="sb-group">PART 2</div>

      <a
        className="sb-link"
        href="/constrained-unconstrained-optimization/2"
      >
        Global Extrema on Bounded Domains
      </a>

      <a
        className="sb-link"
        href="/constrained-unconstrained-optimization/2"
      >
        Gradient Descent &amp; Numerical Optimization
      </a>
    </nav>
  );
}

function GuideHeader() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">
        Constrained &amp; Unconstrained Optimization · Part 1
      </div>

      <h1 className="ch-title">The Hessian Matrix &amp; Optimization</h1>

      <p className="ch-sub">
        Hessian matrices, second-order curvature, critical-point classification,
        positive and negative definiteness, and multivariable optimization
      </p>

      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart1() {
  return (
    <nav className="toc">
      <div className="toc-h">
        Contents — Part 1 of 2
      </div>

      <div className="toc-grid">
        {/* =========================
            TOPIC 1
        ========================== */}

        <a className="toc-a" href="#hessian-optimization">
          The Hessian Matrix &amp; Optimization
        </a>

        <a className="toc-a" href="#critical-points">
          Critical Points in Several Variables
        </a>

        <a className="toc-a" href="#second-order">
          Why Second-Order Information Matters
        </a>

        <a className="toc-a" href="#hessian-two-variable">
          The Hessian in Two Variables
        </a>

        <a className="toc-a" href="#determinant-test">
          The Two-Variable Hessian Test
        </a>

        <a className="toc-a" href="#positive-definite">
          Positive Definiteness
        </a>

        <a className="toc-a" href="#negative-definite">
          Negative Definiteness
        </a>

        <a className="toc-a" href="#indefinite">
          Indefinite Hessians and Saddle Points
        </a>

        <a className="toc-a" href="#higher-dimensional">
          Hessian Classification in Higher Dimensions
        </a>

        <a className="toc-a" href="#degenerate">
          Degenerate Critical Points
        </a>

        <a className="toc-a" href="#optimization-worked-examples">
          Worked Examples
        </a>

        <a className="toc-a" href="#mcq-hessian-optimization">
          Quiz (20 Questions)
        </a>

        {/* =========================
            TOPIC 2
        ========================== */}

        <a className="toc-a" href="#kkt-opening">
          Inequality Constraints (KKT Conditions)
        </a>

        <a className="toc-a" href="#kkt-1">
          Why Inequality Constraints Need a New Tool
        </a>

        <a className="toc-a" href="#kkt-2">
          Feasible Points, Active Constraints, and Slack
        </a>

        <a className="toc-a" href="#kkt-3">
          The KKT Conditions
        </a>

        <a className="toc-a" href="#kkt-4">
          The Lagrangian
        </a>

        <a className="toc-a" href="#kkt-5">
          Complementary Slackness
        </a>

        <a className="toc-a" href="#kkt-6">
          Interior Optima Versus Boundary Optima
        </a>

        <a className="toc-a" href="#kkt-7">
          Worked Example — Minimum with a Linear Inequality
        </a>

        <a className="toc-a" href="#kkt-8">
          Worked Example — Active Disk Constraint
        </a>

        <a className="toc-a" href="#kkt-9">
          Multiple Inequality Constraints and Active Sets
        </a>

        <a className="toc-a" href="#kkt-10">
          When KKT Conditions Are Sufficient
        </a>

        <a className="toc-a" href="#kkt-11">
          Constraint Qualifications and Common Mistakes
        </a>

        <a className="toc-a" href="#kkt-12">
          KKT Checklist
        </a>

        <a className="toc-a" href="#mcq-kkt-conditions">
          Quiz (20 Questions)
        </a>
      </div>
    </nav>
  );
}

function GuideFooter() {
  return (
    <div className="pg-foot">
      <p>
        Constrained &amp; Unconstrained Optimization · Part 1 of 2
      </p>

      <div className="guide-navigation" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <a
          href="#hessian-optimization"
          className="guide-nav-button"
        >
          ↑ Back to The Hessian Matrix &amp; Optimization
        </a>

        <a
          href="/constrained-unconstrained-optimization/2"
          className="guide-nav-button"
        >
          Next Page: Global Extrema on Bounded Domains →
        </a>
      </div>
    </div>
  );
}

function HessianOptimizationContent() {
  return (
    <>
      <GuideSidebarPart1 />

      <main className="main">
        <GuideHeader />
        <TableOfContentsPart1 />
        <OpeningNote />

        <Divider />

        <section className="section" id="hessian-optimization">
          <div className="sec-badge">Section</div>
          <h2 className="sec-title">1. What Is the Hessian Matrix?</h2>

          <p>
            For a scalar-valued function of several variables, the Hessian
            matrix collects all second-order partial derivatives into one
            matrix. For
            <strong> f(x,y) </strong>
            we define
          </p>

          <div className="fml">
            {String.raw`$$
H_f(x,y)
=
\begin{pmatrix}
f_{xx}(x,y) & f_{xy}(x,y)\\
f_{yx}(x,y) & f_{yy}(x,y)
\end{pmatrix}.
$$`}
          </div>

          <p>
            When the mixed partial derivatives are continuous, Clairaut's
            theorem gives
          </p>

          <div className="fml">
            {String.raw`$$
f_{xy}=f_{yx}.
$$`}
          </div>

          <p>so the Hessian is symmetric.</p>

          <p>
            The Hessian is the multivariable analogue of the second derivative
            from single-variable calculus. It describes how the gradient changes
            from point to point and captures local curvature.
          </p>

          <RealLifeUse>
            In machine learning, the Hessian describes the local curvature of a
            loss function. In engineering design, it helps determine whether a
            stationary configuration is locally stable. In economics, it can
            classify local profit and cost optima.
          </RealLifeUse>
        </section>

        <Divider />

        <section className="section" id="critical-points">
          <div className="sec-badge">Section</div>
          <h2 className="sec-title">2. Critical Points in Several Variables</h2>

          <p>
            The Hessian test is applied after finding the critical points. For a
            differentiable function
            <strong> f(x,y) </strong>, the gradient is
          </p>

          <div className="fml">
            {String.raw`$$
\nabla f
=
\left\langle
f_x,
f_y
\right\rangle.
$$`}
          </div>

          <p>
            A point
            <strong> (a,b) </strong>
            is a critical point when
          </p>

          <div className="fml">
            {String.raw`$$
f_x(a,b)=0,
\qquad
f_y(a,b)=0.
$$`}
          </div>

          <p>
            The first step in an unconstrained optimization problem is therefore
            to solve the system
          </p>

          <div className="fml">
            {String.raw`$$
\nabla f(x,y)=\mathbf 0.
$$`}
          </div>

          <p>
            Only after the critical points are found do we evaluate the Hessian
            at those points.
          </p>
        </section>

        <Divider />

        <section className="section" id="second-order">
          <div className="sec-badge">Section</div>
          <h2 className="sec-title">3. Why Second-Order Information Matters</h2>

          <p>
            A point where the gradient is zero tells us that the first-order
            change has vanished. That alone does not identify the local
            geometry.
          </p>

          <p>Consider the one-variable analogy:</p>

          <div className="fml">
            {String.raw`$$
f'(a)=0.
$$`}
          </div>

          <p>If</p>

          <div className="fml">
            {String.raw`$$
f''(a)>0,
$$`}
          </div>

          <p>the point behaves locally like a minimum. If</p>

          <div className="fml">
            {String.raw`$$
f''(a)<0,
$$`}
          </div>

          <p>it behaves locally like a maximum.</p>

          <p>
            In several variables there are infinitely many directions in which
            the function can change. The Hessian captures those directional
            second-order effects simultaneously.
          </p>

          <div className="fml">
            {String.raw`$$
f(a+h)
\approx
f(a)
+
\nabla f(a)^T h
+
\frac12 h^T H_f(a)h.
$$`}
          </div>

          <p>
            At a critical point, the linear term vanishes, leaving the quadratic
            expression
          </p>

          <div className="fml">
            {String.raw`$$
\frac12 h^T H_f(a)h.
$$`}
          </div>

          <p>This quadratic form determines the local second-order geometry.</p>
        </section>

        <Divider />

        <section className="section" id="hessian-two-variable">
          <div className="sec-badge">Section</div>
          <h2 className="sec-title">4. The Hessian in Two Variables</h2>

          <p>
            For
            <strong> f(x,y) </strong>, write
          </p>

          <div className="fml">
            {String.raw`$$
H_f
=
\begin{pmatrix}
f_{xx} & f_{xy}\\
f_{yx} & f_{yy}
\end{pmatrix}.
$$`}
          </div>

          <p>Define the Hessian determinant</p>

          <div className="fml">
            {String.raw`$$
D
=
\det(H_f)
=
f_{xx}f_{yy}
-
(f_{xy})^2
$$`}
          </div>

          <p>when the mixed partials agree.</p>

          <p>
            At a critical point, the pair
            <strong> D </strong>
            and
            <strong>{"f_{xx}"}</strong>
            gives the standard two-variable second-order test.
          </p>
        </section>

        <Divider />

        <section className="section" id="determinant-test">
          <div className="sec-badge">Section</div>
          <h2 className="sec-title">5. The Two-Variable Hessian Test</h2>

          <p>
            Let
            <strong> (a,b) </strong>
            be a critical point and define
          </p>

          <div className="fml">
            {String.raw`$$
D
=
f_{xx}(a,b)f_{yy}(a,b)
-
\left[f_{xy}(a,b)\right]^2.
$$`}
          </div>

          <p>The classification is:</p>

          <div className="box">
            <p>
              <strong>If D &gt; 0 and fxx(a,b) &gt; 0:</strong> local minimum.
            </p>

            <p>
              <strong>If D &gt; 0 and fxx(a,b) &lt; 0:</strong> local maximum.
            </p>

            <p>
              <strong>If D &lt; 0:</strong> saddle point.
            </p>

            <p>
              <strong>If D = 0:</strong> the test is inconclusive.
            </p>
          </div>

          <p>
            Notice that
            <strong> D &gt; 0 </strong>
            alone is not enough to distinguish a minimum from a maximum. The
            sign of
            <strong> fxx </strong>
            is also required.
          </p>
        </section>

        <Divider />

        <section className="section" id="positive-definite">
          <div className="sec-badge">Section</div>
          <h2 className="sec-title">6. Positive Definiteness</h2>

          <p>A symmetric matrix H is positive definite if</p>

          <div className="fml">
            {String.raw`$$
v^T H v>0
\qquad
\text{for every nonzero }v.
$$`}
          </div>

          <p>
            When the Hessian is positive definite at a critical point, the
            quadratic term is positive in every nonzero direction. This gives a
            strict local minimum.
          </p>

          <p>For a symmetric two-by-two Hessian,</p>

          <div className="fml">
            {String.raw`$$
H=
\begin{pmatrix}
a&b\\
b&c
\end{pmatrix},
$$`}
          </div>

          <p>positive definiteness is equivalent to</p>

          <div className="fml">
            {String.raw`$$
a>0,
\qquad
ac-b^2>0.
$$`}
          </div>

          <p>
            These are the leading-principal-minor conditions for the
            two-dimensional case.
          </p>
        </section>

        <Divider />

        <section className="section" id="negative-definite">
          <div className="sec-badge">Section</div>
          <h2 className="sec-title">7. Negative Definiteness</h2>

          <p>A symmetric matrix H is negative definite when</p>

          <div className="fml">
            {String.raw`$$
v^T H v<0
\qquad
\text{for every nonzero }v.
$$`}
          </div>

          <p>
            At a critical point, a negative-definite Hessian therefore implies a
            strict local maximum.
          </p>

          <p>
            For
            <strong> H = [[a,b],[b,c]]</strong>, the two-dimensional conditions
            become
          </p>

          <div className="fml">
            {String.raw`$$
a<0,
\qquad
ac-b^2>0.
$$`}
          </div>

          <p>
            Equivalently, the first leading principal minor is negative while
            the determinant remains positive.
          </p>
        </section>

        <Divider />

        <section className="section" id="indefinite">
          <div className="sec-badge">Section</div>
          <h2 className="sec-title">
            8. Indefinite Hessians and Saddle Points
          </h2>

          <p>
            An indefinite Hessian produces both positive and negative values of
            the quadratic form
          </p>

          <div className="fml">
            {String.raw`$$
v^T H v.
$$`}
          </div>

          <p>
            That means the function curves upward in some directions and
            downward in others. The corresponding critical point is a saddle
            point.
          </p>

          <p>In the two-variable test, the simplest signal is</p>

          <div className="fml">
            {String.raw`$$
D<0.
$$`}
          </div>

          <p>
            The negative determinant means the Hessian has eigenvalues of
            opposite signs.
          </p>
        </section>

        <Divider />

        <section className="section" id="higher-dimensional">
          <div className="sec-badge">Section</div>
          <h2 className="sec-title">
            9. Hessian Classification in Higher Dimensions
          </h2>

          <p>
            For a function
            <strong> f(x1,\ldots,xn) </strong>
            the Hessian is the n×n matrix
          </p>

          <div className="fml">
            {String.raw`$$
H_f(x)
=
\left[
\frac{\partial^2 f}
{\partial x_i\partial x_j}
\right]_{i,j=1}^{n}.
$$`}
          </div>

          <p>At a critical point:</p>

          <div className="box">
            <p>Positive-definite Hessian → strict local minimum.</p>

            <p>Negative-definite Hessian → strict local maximum.</p>

            <p>Indefinite Hessian → saddle point.</p>

            <p>
              Semidefinite or singular Hessian → second-order test may be
              inconclusive.
            </p>
          </div>

          <p>
            Eigenvalues provide a particularly useful classification tool. If
            every eigenvalue is positive, the Hessian is positive definite. If
            every eigenvalue is negative, it is negative definite. If the
            eigenvalues have mixed signs, the Hessian is indefinite.
          </p>
        </section>

        <Divider />

        <section className="section" id="degenerate">
          <div className="sec-badge">Section</div>
          <h2 className="sec-title">10. Degenerate Critical Points</h2>

          <p>When the Hessian determinant is zero in the two-variable test,</p>

          <div className="fml">
            {String.raw`$$
D=0,
$$`}
          </div>

          <p>
            the Hessian does not provide enough second-order information to
            classify the critical point.
          </p>

          <p>
            This does not mean the point is neither a maximum nor a minimum. It
            means only that the standard second-order test has failed to decide
            the classification.
          </p>

          <p>
            In such cases we may need higher-order terms, direct comparison of
            nearby values, or an alternative argument based on the structure of
            the function.
          </p>
        </section>

        <Divider />

        <section className="section" id="optimization-worked-examples">
          <div className="sec-badge">Practice</div>
          <h2 className="sec-title">Worked Examples</h2>

          <p>The examples below follow the full optimization workflow:</p>

          <div className="box">
            <p>1. Compute the first partial derivatives.</p>
            <p>2. Solve ∇f = 0 for the critical points.</p>
            <p>3. Compute the Hessian entries.</p>
            <p>4. Evaluate the Hessian at each critical point.</p>
            <p>5. Apply the appropriate classification test.</p>
          </div>

          <p>
            This order prevents a common mistake: attempting to classify a point
            before checking that it is actually critical.
          </p>
        </section>

        <Divider />

        <section className="section" id="worked-example-1">
          <div className="sec-badge">Worked Example</div>
          <h2 className="sec-title">11. Worked Example — Local Minimum</h2>

          <p>Consider</p>

          <div className="fml">
            {String.raw`$$
f(x,y)=x^2+y^2.
$$`}
          </div>

          <h3>Step 1: Find the critical point</h3>

          <div className="fml">
            {String.raw`$$
f_x=2x,
\qquad
f_y=2y.
$$`}
          </div>

          <p>Setting both equal to zero gives</p>

          <div className="fml">
            {String.raw`$$
x=0,
\qquad
y=0.
$$`}
          </div>

          <p>
            Thus
            <strong> (0,0) </strong>
            is the only critical point.
          </p>

          <h3>Step 2: Compute the Hessian</h3>

          <div className="fml">
            {String.raw`$$
H_f
=
\begin{pmatrix}
2&0\\
0&2
\end{pmatrix}.
$$`}
          </div>

          <h3>Step 3: Apply the test</h3>

          <div className="fml">
            {String.raw`$$
D=2\cdot2-0^2=4>0,
\qquad
f_{xx}=2>0.
$$`}
          </div>

          <p>
            Therefore,
            <strong> (0,0) </strong>
            is a local minimum.
          </p>

          <p>
            In fact,
            <strong> f(x,y)\ge0 </strong>
            everywhere, so this minimum is also global.
          </p>
        </section>

        <Divider />

        <section className="section" id="worked-example-2">
          <div className="sec-badge">Worked Example</div>
          <h2 className="sec-title">12. Worked Example — Local Maximum</h2>

          <p>Consider</p>

          <div className="fml">
            {String.raw`$$
f(x,y)=4-x^2-y^2.
$$`}
          </div>

          <h3>Step 1: Find the critical point</h3>

          <div className="fml">
            {String.raw`$$
f_x=-2x,
\qquad
f_y=-2y.
$$`}
          </div>

          <p>
            Hence the only critical point is
            <strong> (0,0) </strong>.
          </p>

          <h3>Step 2: Hessian</h3>

          <div className="fml">
            {String.raw`$$
H_f
=
\begin{pmatrix}
-2&0\\
0&-2
\end{pmatrix}.
$$`}
          </div>

          <h3>Step 3: Test</h3>

          <div className="fml">
            {String.raw`$$
D=(-2)(-2)-0^2=4>0,
\qquad
f_{xx}=-2<0.
$$`}
          </div>

          <p>
            Therefore,
            <strong> (0,0) </strong>
            is a local maximum.
          </p>

          <p>
            Since
            <strong> f(x,y)\le4 </strong>
            everywhere, it is also the global maximum.
          </p>
        </section>

        <Divider />

        <section className="section" id="worked-example-3">
          <div className="sec-badge">Worked Example</div>
          <h2 className="sec-title">13. Worked Example — Saddle Point</h2>

          <p>Consider</p>

          <div className="fml">
            {String.raw`$$
f(x,y)=x^2-y^2.
$$`}
          </div>

          <h3>Step 1: Critical point</h3>

          <div className="fml">
            {String.raw`$$
f_x=2x,
\qquad
f_y=-2y.
$$`}
          </div>

          <p>
            Therefore,
            <strong> (0,0) </strong>
            is the only critical point.
          </p>

          <h3>Step 2: Hessian</h3>

          <div className="fml">
            {String.raw`$$
H_f
=
\begin{pmatrix}
2&0\\
0&-2
\end{pmatrix}.
$$`}
          </div>

          <h3>Step 3: Test</h3>

          <div className="fml">
            {String.raw`$$
D=(2)(-2)-0^2=-4<0.
$$`}
          </div>

          <p>
            Therefore,
            <strong> (0,0) </strong>
            is a saddle point.
          </p>

          <p>
            Indeed, along the x-axis the function is positive, while along the
            y-axis it is negative.
          </p>

          <div className="fml">
            {String.raw`$$
f(x,0)=x^2\ge0,
\qquad
f(0,y)=-y^2\le0.
$$`}
          </div>
        </section>

        <Divider />

        <section className="section" id="worked-example-4">
          <div className="sec-badge">Worked Example</div>
          <h2 className="sec-title">14. Worked Example — Degenerate Hessian</h2>

          <p>Consider</p>

          <div className="fml">
            {String.raw`$$
f(x,y)=x^4+y^4.
$$`}
          </div>

          <h3>Step 1: Critical point</h3>

          <div className="fml">
            {String.raw`$$
f_x=4x^3,
\qquad
f_y=4y^3.
$$`}
          </div>

          <p>
            The only critical point is
            <strong> (0,0) </strong>.
          </p>

          <h3>Step 2: Hessian</h3>

          <div className="fml">
            {String.raw`$$
H_f
=
\begin{pmatrix}
12x^2&0\\
0&12y^2
\end{pmatrix}.
$$`}
          </div>

          <p>At the critical point,</p>

          <div className="fml">
            {String.raw`$$
H_f(0,0)
=
\begin{pmatrix}
0&0\\
0&0
\end{pmatrix}.
$$`}
          </div>

          <p>Hence</p>

          <div className="fml">
            {String.raw`$$
D=0.
$$`}
          </div>

          <p>The Hessian test is inconclusive.</p>

          <h3>Step 3: Use another argument</h3>

          <p>Since</p>

          <div className="fml">
            {String.raw`$$
x^4+y^4\ge0
$$`}
          </div>

          <p>
            with equality only at
            <strong> (0,0) </strong>, the point is nevertheless a strict global
            minimum.
          </p>

          <p>
            This example shows why
            <strong> D=0 </strong>
            does not mean "no minimum." It means the Hessian test alone cannot
            decide.
          </p>
        </section>

        <Divider />

        <section className="section" id="applications">
          <div className="sec-badge">Section</div>
          <h2 className="sec-title">15. Optimization Applications</h2>

          <p>
            The Hessian is important whenever a model is optimized near a
            stationary point.
          </p>

          <div className="box">
            <p>
              <strong>Machine learning:</strong> curvature of a loss landscape
              influences optimization speed and local behavior.
            </p>

            <p>
              <strong>Engineering:</strong> positive-definite curvature often
              indicates local stability of a design objective.
            </p>

            <p>
              <strong>Economics:</strong> Hessian signs help distinguish local
              profit maxima from local cost or utility minima.
            </p>

            <p>
              <strong>Physics:</strong> the second-order behavior near an
              equilibrium can reveal whether perturbations are locally stable.
            </p>
          </div>

          <p>
            In numerical optimization, Hessian information also appears in
            second-order methods such as Newton-type algorithms.
          </p>
        </section>

        <Divider />

        <section className="section" id="common-mistakes">
          <div className="sec-badge">Section</div>
          <h2 className="sec-title">16. Common Mistakes</h2>

          <div className="box">
            <p>
              <strong>Mistake 1:</strong> Classifying a point without first
              checking that it is critical.
            </p>

            <p>
              <strong>Mistake 2:</strong> Using only the determinant D and
              forgetting the sign of fxx when D&gt;0.
            </p>

            <p>
              <strong>Mistake 3:</strong> Treating D=0 as automatically meaning
              "saddle."
            </p>

            <p>
              <strong>Mistake 4:</strong> Forgetting that the Hessian should be
              evaluated at the critical point.
            </p>

            <p>
              <strong>Mistake 5:</strong> Applying the two-variable determinant
              test directly to a higher-dimensional problem without checking
              definiteness.
            </p>

            <p>
              <strong>Mistake 6:</strong> Confusing positive semidefinite with
              positive definite behavior.
            </p>
          </div>
        </section>

        <Divider />

        <section className="section" id="key-formulas">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">17. Key Formulas</h2>

          <div className="fml">
            {String.raw`$$
\nabla f
=
\left\langle
f_x,f_y
\right\rangle
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
H_f
=
\begin{pmatrix}
f_{xx}&f_{xy}\\
f_{yx}&f_{yy}
\end{pmatrix}
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
D
=
f_{xx}f_{yy}-(f_{xy})^2
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
D>0,\ f_{xx}>0
\Longrightarrow
\text{local minimum}
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
D>0,\ f_{xx}<0
\Longrightarrow
\text{local maximum}
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
D<0
\Longrightarrow
\text{saddle point}
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
D=0
\Longrightarrow
\text{test inconclusive}
$$`}
          </div>

          <p>
            For higher dimensions, classify the Hessian by its definiteness or
            eigenvalue signs.
          </p>
        </section>

        <Divider />

        <GuideMcqSection
          id="mcq-hessian-optimization"
          badge="Practice"
          title="The Hessian Matrix & Optimization — 20-Question Quiz"
          scoreId="scorehessianoptimization"
          section="hessian-optimization"
          questions={MV_HESSIAN_OPTIMIZATION_QUIZ}
        />

        <Divider />
        <KKTConditionsGuide />

        <GuideFooter />
      </main>
    </>
  );
}

export default function HessianOptimizationGuide() {
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="The Hessian Matrix & Optimization"
    >
      <HessianOptimizationContent />
    </StudyGuideShell>
  );
}
