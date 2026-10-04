import React from "react";
import { GuideMcqSection } from "../../components/GuideMcq";
import { MV_GLOBAL_EXTREMA_QUIZ } from "../../data/mvGlobalExtremaQuiz";

/**
 * Module B — Topic 3
 * Global Extrema on Bounded Domains
 *
 * Content-only component.
 * Rendered on Constrained & Unconstrained Optimization — Part 2.
 */

function Divider() {
  return <hr className="divider" />;
}

function TopicOpening() {
  return (
    <section className="section" id="global-opening">
      <div className="sec-badge">Topic 3</div>

      <h2 className="sec-title">
        Global Extrema on Bounded Domains
      </h2>

      <p>
        Local optimization asks what happens near a point. Global optimization
        asks a stronger question: among <strong>all feasible points</strong>,
        where does a function attain its absolute largest and smallest values?
      </p>

      <p>
        For multivariable functions, global extrema can occur at interior
        critical points, on smooth boundary curves or surfaces, at corners,
        at endpoints, or at other points where differentiability fails. A
        complete solution therefore requires a systematic search of every
        possible source of an extremum.
      </p>

      <div className="box def">
        <div className="box-lbl">Central Principle</div>

        <p>
          On a compact domain, a continuous function must attain both an
          absolute maximum and an absolute minimum.
        </p>

        <div className="fml">
          {String.raw`$$
          \boxed{
          \text{continuous function}
          +
          \text{compact domain}
          \Longrightarrow
          \text{absolute max and min exist}
          }
          $$`}
        </div>
      </div>

      <div className="box note">
        <div className="box-lbl">What This Topic Adds</div>

        <p>
          The Hessian helps classify interior critical points. KKT handles
          inequality constraints. Global-extrema analysis combines those ideas
          with domain geometry and boundary analysis so that candidate points
          can be compared globally.
        </p>
      </div>
    </section>
  );
}

function Section1() {
  return (
    <section className="section" id="global-1">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        1. Local Versus Global Extrema
      </h2>

      <p>
        A point is a <strong>local minimum</strong> if the function value is no
        larger than nearby feasible values. A <strong>global minimum</strong>
        must be no larger than the function value at every feasible point in
        the entire domain.
      </p>

      <div className="box def">
        <div className="box-lbl">Definitions</div>

        <p>
          A point {"$\\mathbf{x}^*$"} is a global minimum on a set {"$D$"} if
        </p>

        <div className="fml">
          {String.raw`$$
          f(\mathbf{x}^*)
          \le
          f(\mathbf{x})
          \qquad
          \text{for every }\mathbf{x}\in D.
          $$`}
        </div>

        <p>
          It is a global maximum if
        </p>

        <div className="fml">
          {String.raw`$$
          f(\mathbf{x}^*)
          \ge
          f(\mathbf{x})
          \qquad
          \text{for every }\mathbf{x}\in D.
          $$`}
        </div>
      </div>

      <p>
        Every global minimum is automatically local, but a local minimum need
        not be global. A function may have several local minima with only one
        of them achieving the smallest value over the entire feasible set.
      </p>
    </section>
  );
}

function Section2() {
  return (
    <section className="section" id="global-2">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        2. The Extreme Value Theorem
      </h2>

      <p>
        The most important existence theorem for global extrema is the
        Extreme Value Theorem.
      </p>

      <div className="box thm">
        <div className="box-lbl">Extreme Value Theorem</div>

        <p>
          If {"$f$"} is continuous on a compact set {"$D\\subseteq\\mathbb{R}^n$"},
          then there exist points
          {" $\\mathbf{x}_{\\min},\\mathbf{x}_{\\max}\\in D$ "}
          such that
        </p>

        <div className="fml">
          {String.raw`$$
          f(\mathbf{x}_{\min})
          \le f(\mathbf{x})
          \le
          f(\mathbf{x}_{\max})
          \qquad
          \forall\mathbf{x}\in D.
          $$`}
        </div>
      </div>

      <p>
        The theorem has two important parts: continuity of the function and
        compactness of the domain. Without both conditions, the extrema may
        fail to exist.
      </p>

      <div className="box note">
        <div className="box-lbl">Existence Versus Location</div>

        <p>
          The Extreme Value Theorem tells us that extrema <strong>exist</strong>.
          It does not tell us where they occur. Calculus is then used to find
          the candidate points and compare their values.
        </p>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section className="section" id="global-3">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        3. Closed, Bounded, and Compact Sets
      </h2>

      <p>
        In Euclidean space, a set is compact exactly when it is both
        <strong> closed</strong> and <strong>bounded</strong>.
      </p>

      <div className="box def">
        <div className="box-lbl">Definitions</div>

        <ul>
          <li>
            <strong>Closed:</strong> the set contains all of its limit points
            and, in common geometric examples, includes its boundary.
          </li>

          <li>
            <strong>Bounded:</strong> the set fits inside some sufficiently
            large ball.
          </li>

          <li>
            <strong>Compact:</strong> closed and bounded in {"$\\mathbb{R}^n$"}.
          </li>
        </ul>
      </div>

      <p>
        Examples of compact sets include a closed rectangle
        {" $[a,b]\\times[c,d]$ "},
        a closed disk
        {" $x^2+y^2\\le R^2$ "},
        and a closed ball in
        {" $\\mathbb{R}^3$ "}.
      </p>

      <p>
        By contrast, an open disk
        {" $x^2+y^2<1$ "}
        is bounded but not closed, so it is not compact.
      </p>
    </section>
  );
}

function Section4() {
  return (
    <section className="section" id="global-4">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        4. Where Global Extrema Can Occur
      </h2>

      <p>
        A global-extrema problem should be treated as a finite candidate-search
        problem whenever the hypotheses permit it.
      </p>

      <div className="box thm">
        <div className="box-lbl">Candidate Sources</div>

        <ol>
          <li>
            Interior critical points where
            {" $\\nabla f=0$ "}.
          </li>

          <li>
            Boundary points of the domain.
          </li>

          <li>
            Corners and vertices.
          </li>

          <li>
            Endpoints of one-dimensional boundary pieces.
          </li>

          <li>
            Points where the function is not differentiable.
          </li>
        </ol>
      </div>

      <p>
        The key mistake is to find only interior critical points. A function
        can achieve its global maximum or minimum entirely on the boundary.
      </p>
    </section>
  );
}

function Section5() {
  return (
    <section className="section" id="global-5">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        5. Interior Critical Points
      </h2>

      <p>
        If an extremum occurs at a differentiable interior point of the domain,
        then every feasible direction is locally available. Therefore the
        first-order derivative must vanish in every coordinate direction.
      </p>

      <div className="fml">
        {String.raw`$$
        \nabla f(\mathbf{x}^*)=\mathbf{0}.
        $$`}
      </div>

      <p>
        For two variables:
      </p>

      <div className="fml">
        {String.raw`$$
        f_x(x^*,y^*)=0,
        \qquad
        f_y(x^*,y^*)=0.
        $$`}
      </div>

      <div className="box note">
        <div className="box-lbl">Connection to Topic 1</div>

        <p>
          The Hessian test from the previous topic can classify these interior
          critical points locally. For a global claim, however, we still need
          to compare them against every relevant boundary candidate.
        </p>
      </div>
    </section>
  );
}

function Section6() {
  return (
    <section className="section" id="global-6">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        6. Boundary Analysis by Parameterization
      </h2>

      <p>
        Suppose the boundary of a two-dimensional domain is represented by
        {" $\\mathbf{r}(t)=\\langle x(t),y(t)\\rangle$ "}.
        Restrict the objective to the boundary:
      </p>

      <div className="fml">
        {String.raw`$$
        F(t)=f(x(t),y(t)).
        $$`}
      </div>

      <p>
        Then the multivariable boundary problem becomes an ordinary
        one-variable optimization problem.
      </p>

      <div className="box thm">
        <div className="box-lbl">Boundary Reduction</div>

        <div className="fml">
          {String.raw`$$
          \text{boundary curve}
          \quad\Longrightarrow\quad
          F(t)=f(\mathbf{r}(t)).
          $$`}
        </div>

        <p>
          Find critical parameter values from
        </p>

        <div className="fml">
          {String.raw`$$F'(t)=0,$$`}
        </div>

        <p>
          and include the parameter endpoints when the boundary segment has
          endpoints.
        </p>
      </div>
    </section>
  );
}

function Section7() {
  return (
    <section className="section" id="global-7">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        7. Boundary Analysis with Lagrange Multipliers
      </h2>

      <p>
        When a smooth boundary is described implicitly by
        {" $g(x,y)=0$ "},
        Lagrange multipliers provide an efficient boundary-search method.
      </p>

      <div className="fml">
        {String.raw`$$
        \nabla f
        =
        \lambda\nabla g,
        \qquad
        g(x,y)=0.
        $$`}
      </div>

      <p>
        This works because the gradient of the constraint is normal to the
        boundary, while the objective gradient must also be normal to the
        level set at a constrained extremum.
      </p>

      <div className="box note">
        <div className="box-lbl">Important</div>

        <p>
          Lagrange multipliers generate <strong>boundary candidates</strong>.
          You must still evaluate the objective at every candidate and compare
          the resulting values with interior candidates and other boundary
          pieces.
        </p>
      </div>
    </section>
  );
}

function Section8() {
  return (
    <section className="section" id="global-8">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        8. Corners, Vertices, and Nonsmooth Boundary Points
      </h2>

      <p>
        Lagrange multipliers assume a smooth constraint surface. A corner of a
        polygonal domain is not a smooth single boundary curve, so it must be
        handled separately.
      </p>

      <div className="box def">
        <div className="box-lbl">Do Not Forget Corners</div>

        <p>
          For a rectangle, every corner is a candidate source of a global
          maximum or minimum. The same is true for the vertices of a polygon
          or polyhedron.
        </p>
      </div>

      <p>
        A complete candidate list therefore consists of interior critical
        points, smooth boundary critical points, and all corner or endpoint
        candidates.
      </p>
    </section>
  );
}

function Section9() {
  return (
    <section className="section" id="global-9">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        9. The Complete Candidate-Enumeration Method
      </h2>

      <div className="box thm">
        <div className="box-lbl">Global-Extrema Algorithm</div>

        <ol>
          <li>
            Verify the domain and the regularity of the objective.
          </li>

          <li>
            Determine whether the domain is closed and bounded.
          </li>

          <li>
            Find all interior critical points.
          </li>

          <li>
            Analyze every smooth boundary component.
          </li>

          <li>
            Analyze corners, vertices, and endpoints.
          </li>

          <li>
            Include any nondifferentiable candidate points.
          </li>

          <li>
            Evaluate the original function at every candidate.
          </li>

          <li>
            Compare all values.
          </li>

          <li>
            State the absolute maximum, absolute minimum, and their locations.
          </li>
        </ol>
      </div>

      <p>
        This is the central practical method for bounded-domain global
        optimization.
      </p>
    </section>
  );
}

function Section10() {
  return (
    <section className="section" id="global-10">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        10. Worked Example — Quadratic on a Closed Disk
      </h2>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>

        <div className="exm-title">
          Find the global extrema of f(x,y) = x² + y² − 2x
        </div>

        <p>
          Find the absolute maximum and minimum of
          {" $f(x,y)=x^2+y^2-2x$ "}
          on the closed disk
          {" $x^2+y^2\\le4$ "}.
        </p>

        <div className="sol">
          <div className="sol-lbl">Solution</div>

          <p>
            <strong>Step 1 — Interior critical point.</strong>
          </p>

          <div className="fml">
            {String.raw`$$
            f_x=2x-2,
            \qquad
            f_y=2y.
            $$`}
          </div>

          <p>
            Set both equal to zero:
          </p>

          <div className="fml">
            {String.raw`$$
            (x,y)=(1,0).
            $$`}
          </div>

          <p>
            This point lies inside the disk because
            {" $1^2+0^2<4$ "}.
          </p>

          <p>
            <strong>Step 2 — Boundary.</strong>
            The boundary is
            {" $x^2+y^2=4$ "}.
            Use Lagrange multipliers:
          </p>

          <div className="fml">
            {String.raw`$$
            \nabla f
            =
            \lambda\nabla g,
            \qquad
            g=x^2+y^2-4.
            $$`}
          </div>

          <div className="fml">
            {String.raw`$$
            (2x-2,2y)
            =
            \lambda(2x,2y).
            $$`}
          </div>

          <p>
            Solving produces boundary candidates at the points where the
            radius aligns with the objective's linear term:
          </p>

          <div className="fml">
            {String.raw`$$
            (2,0),
            \qquad
            (-2,0).
            $$`}
          </div>

          <p>
            <strong>Step 3 — Compare values.</strong>
          </p>

          <div className="fml">
            {String.raw`$$
            f(1,0)=-1,
            \qquad
            f(2,0)=0,
            \qquad
            f(-2,0)=8.
            $$`}
          </div>

          <p>
            Therefore:
          </p>

          <div className="fml">
            {String.raw`$$
            \boxed{
            f_{\min}=-1
            \text{ at }(1,0)
            }
            $$`}
          </div>

          <div className="fml">
            {String.raw`$$
            \boxed{
            f_{\max}=8
            \text{ at }(-2,0)
            }
            $$`}
          </div>
        </div>
      </div>
    </section>
  );
}

function Section11() {
  return (
    <section className="section" id="global-11">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        11. Worked Example — Rectangle with Interior and Boundary Candidates
      </h2>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>

        <div className="exm-title">
          Optimize f(x,y) = x² + y² − 4x − 2y
        </div>

        <p>
          Find the global extrema on
          {" $0\\le x\\le3$ "}
          and
          {" $0\\le y\\le2$ "}.
        </p>

        <div className="sol">
          <div className="sol-lbl">Solution</div>

          <p>
            <strong>Interior:</strong>
          </p>

          <div className="fml">
            {String.raw`$$
            f_x=2x-4,
            \qquad
            f_y=2y-2.
            $$`}
          </div>

          <div className="fml">
            {String.raw`$$
            (x,y)=(2,1).
            $$`}
          </div>

          <p>
            This point lies inside the rectangle.
          </p>

          <p>
            Next examine all four edges. Each edge reduces the problem to one
            variable.
          </p>

          <div className="fml">
            {String.raw`$$
            y=0,\quad
            y=2,\quad
            x=0,\quad
            x=3.
            $$`}
          </div>

          <p>
            For each edge, differentiate the restricted function and include
            the edge endpoints.
          </p>

          <p>
            Finally compare every candidate. Because the rectangle is compact
            and the objective is continuous, the global maximum and minimum
            must occur among this finite candidate collection.
          </p>

          <div className="box note">
            <div className="box-lbl">Main Lesson</div>

            <p>
              On polygonal domains, "boundary analysis" means analyzing each
              boundary segment plus all corners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section12() {
  return (
    <section className="section" id="global-12">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        12. Worked Example — Triangle Domain
      </h2>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>

        <div className="exm-title">
          Why every edge and vertex matters
        </div>

        <p>
          Consider a continuous function on the triangular region
        </p>

        <div className="fml">
          {String.raw`$$
          x\ge0,\qquad
          y\ge0,\qquad
          x+y\le1.
          $$`}
        </div>

        <p>
          The boundary consists of three line segments:
        </p>

        <div className="fml">
          {String.raw`$$
          x=0,
          \qquad
          y=0,
          \qquad
          x+y=1.
          $$`}
        </div>

        <p>
          There are also three vertices:
        </p>

        <div className="fml">
          {String.raw`$$
          (0,0),\qquad
          (1,0),\qquad
          (0,1).
          $$`}
        </div>

        <p>
          A global-extrema analysis therefore consists of interior critical
          points, critical points along each edge, and the three vertices.
        </p>

        <p>
          The important lesson is structural rather than computational:
          <strong>
            {" "}every component of the boundary must be searched.
          </strong>
        </p>
      </div>
    </section>
  );
}

function Section13() {
  return (
    <section className="section" id="global-13">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        13. Boundary Parameterization in Detail
      </h2>

      <p>
        For a circle of radius {"$R$"}, a convenient parameterization is:
      </p>

      <div className="fml">
        {String.raw`$$
        x=R\cos t,
        \qquad
        y=R\sin t,
        \qquad
        0\le t\le2\pi.
        $$`}
      </div>

      <p>
        If the objective is
        {" $f(x,y)$ "},
        the boundary restriction is
      </p>

      <div className="fml">
        {String.raw`$$
        F(t)
        =
        f(R\cos t,R\sin t).
        $$`}
      </div>

      <p>
        Then the boundary search becomes ordinary one-variable calculus.
        Trigonometric simplification often reveals the extremal values quickly.
      </p>

      <div className="box note">
        <div className="box-lbl">Parameter Intervals</div>

        <p>
          For a complete closed curve, the parameter interval should cover the
          entire curve. For an individual boundary arc, use the correct
          endpoints and include them in the candidate set.
        </p>
      </div>
    </section>
  );
}

function Section14() {
  return (
    <section className="section" id="global-14">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        14. Nondifferentiable Points and Singularities
      </h2>

      <p>
        The equation
        {" $\\nabla f=0$ "}
        applies only where the function is differentiable. A global extremum
        can occur at a point where a derivative does not exist.
      </p>

      <div className="box def">
        <div className="box-lbl">Include These Candidates</div>

        <ul>
          <li>
            Absolute-value corners such as {" $|x|$ "}.
          </li>

          <li>
            Cusps or other nonsmooth points.
          </li>

          <li>
            Boundary intersections.
          </li>

          <li>
            Piecewise-defined transition points.
          </li>
        </ul>
      </div>

      <p>
        Such points must be added directly to the candidate list rather than
        being expected to appear from solving the gradient equations.
      </p>
    </section>
  );
}

function Section15() {
  return (
    <section className="section" id="global-15">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        15. Global Extrema and KKT Conditions
      </h2>

      <p>
        The KKT conditions from Topic 2 provide a powerful way to generate
        candidates when the feasible set is described by inequalities:
      </p>

      <div className="fml">
        {String.raw`$$
        g_i(\mathbf{x})\le0.
        $$`}
      </div>

      <p>
        Instead of manually parameterizing every smooth boundary, KKT can
        represent active boundaries through multipliers and complementary
        slackness.
      </p>

      <div className="box thm">
        <div className="box-lbl">Relationship Between Topics</div>

        <p>
          A useful mental model is:
        </p>

        <div className="fml">
          {String.raw`$$
          \text{Hessian}
          \longrightarrow
          \text{local interior classification},
          $$`}
        </div>

        <div className="fml">
          {String.raw`$$
          \text{KKT}
          \longrightarrow
          \text{constrained candidates},
          $$`}
        </div>

        <div className="fml">
          {String.raw`$$
          \text{Global-extrema search}
          \longrightarrow
          \text{compare every candidate}.
          $$`}
        </div>
      </div>
    </section>
  );
}

function Section16() {
  return (
    <section className="section" id="global-16">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        16. Uniqueness, Multiple Extrema, and Ties
      </h2>

      <p>
        A global maximum or minimum need not be unique.
      </p>

      <div className="box def">
        <div className="box-lbl">Multiple Global Extrema</div>

        <p>
          A function can attain the same absolute minimum at several different
          points. Likewise, several points can share the same global maximum.
        </p>
      </div>

      <p>
        For example, a rotationally symmetric function on a circle may attain
        equal values at every point on a particular ring. A correct solution
        should report the entire set of maximizing or minimizing points rather
        than arbitrarily selecting one.
      </p>

      <div className="box note">
        <div className="box-lbl">Uniqueness</div>

        <p>
          Strict convexity can guarantee a unique global minimum on a convex
          domain. Similar uniqueness conclusions for maxima require concavity
          or another appropriate structural property.
        </p>
      </div>
    </section>
  );
}

function Section17() {
  return (
    <section className="section" id="global-17">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        17. Convexity and Global Optimization
      </h2>

      <p>
        Convexity can turn a difficult candidate-comparison problem into a
        stronger global conclusion.
      </p>

      <div className="box thm">
        <div className="box-lbl">Convex Minimization</div>

        <p>
          If {"$f$"} is convex and the feasible domain is convex, every local
          minimum is global.
        </p>
      </div>

      <p>
        If {"$f$"} is strictly convex on a convex feasible set, the global
        minimizer is unique whenever it exists.
      </p>

      <p>
        For smooth twice-differentiable functions, a positive-semidefinite
        Hessian throughout a convex domain is one common route to establishing
        convexity.
      </p>
    </section>
  );
}

function Section18() {
  return (
    <section className="section" id="global-18">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        18. Why Boundedness Matters
      </h2>

      <p>
        Boundedness prevents the optimizer from escaping indefinitely in search
        of smaller or larger values.
      </p>

      <div className="box note">
        <div className="box-lbl">Counterexample Without Boundedness</div>

        <p>
          Consider
          {" $f(x,y)=x^2+y^2$ "}
          on all of
          {" $\\mathbb{R}^2$ "}.
          A global minimum exists at the origin, but a different function such
          as
          {" $f(x,y)=x$ "}
          has no global minimum on the unbounded plane because
          {" $x\\to-\\infty$ "}
          makes the function arbitrarily small.
        </p>
      </div>

      <p>
        Thus bounded-domain theorems should not be applied blindly to arbitrary
        unbounded feasible sets.
      </p>
    </section>
  );
}

function Section19() {
  return (
    <section className="section" id="global-19">
      <div className="sec-badge">Reference</div>

      <h2 className="sec-title">
        19. Complete Global-Extrema Checklist
      </h2>

      <div className="box thm">
        <div className="box-lbl">Before You State the Answer</div>

        <ol>
          <li>
            Is the function continuous on the domain?
          </li>

          <li>
            Is the domain closed?
          </li>

          <li>
            Is the domain bounded?
          </li>

          <li>
            Did you find all interior critical points?
          </li>

          <li>
            Did you analyze every smooth boundary component?
          </li>

          <li>
            Did you check every corner, vertex, and endpoint?
          </li>

          <li>
            Did you include nondifferentiable candidates?
          </li>

          <li>
            Did you evaluate the original function at every candidate?
          </li>

          <li>
            Did you compare all candidate values?
          </li>

          <li>
            Did you report both the value and location of the global extrema?
          </li>
        </ol>
      </div>
    </section>
  );
}

function Section20() {
  return (
    <section className="section" id="global-20">
      <div className="sec-badge">Reference</div>

      <h2 className="sec-title">
        20. Key Formulas and Final Strategy
      </h2>

      <div className="box def">
        <div className="box-lbl">Core Formulas</div>

        <div className="fml">
          {String.raw`$$
          \nabla f(\mathbf{x}^*)=\mathbf0
          \qquad
          \text{(interior candidate)}
          $$`}
        </div>

        <div className="fml">
          {String.raw`$$
          \nabla f
          =
          \lambda\nabla g,
          \qquad
          g=0
          \qquad
          \text{(smooth boundary candidate)}
          $$`}
        </div>

        <div className="fml">
          {String.raw`$$
          \text{continuous}
          +
          \text{compact}
          \Longrightarrow
          \text{absolute maximum and minimum exist}.
          $$`}
        </div>
      </div>

      <div className="box thm">
        <div className="box-lbl">Final Strategy</div>

        <p>
          <strong>Find → Boundary-check → Compare → Conclude.</strong>
        </p>

        <p>
          Finding candidates is only half of global optimization. The decisive
          final step is comparing the objective values across the complete
          candidate set.
        </p>
      </div>
    </section>
  );
}

function QuizIntro() {
  return (
    <>
      <Divider />

      <section className="section" id="global-quiz-intro">
        <div className="sec-badge">Practice</div>

        <h2 className="sec-title">
          Global Extrema on Bounded Domains — Checkpoint
        </h2>

        <p>
          This 20-question checkpoint tests the Extreme Value Theorem,
          compactness, interior critical points, boundary optimization,
          Lagrange multipliers, corners and endpoints, candidate comparison,
          convexity, and the complete global-extrema workflow.
        </p>

        <div className="box note">
          <div className="box-lbl">Exam Habit</div>

          <p>
            Do not stop after finding an interior critical point. Ask:
            "What happens on the boundary?"
          </p>
        </div>
      </section>
    </>
  );
}

function Quiz() {
  return (
    <GuideMcqSection
      id="mcq-global-extrema"
      badge="Practice"
      title="Global Extrema on Bounded Domains — 20-Question Quiz"
      scoreId="scoreglobalextrema"
      section="global-extrema"
      questions={MV_GLOBAL_EXTREMA_QUIZ}
    />
  );
}

export default function GlobalExtremaBoundedDomainsGuide() {
  return (
    <>
      <TopicOpening />

      <Divider />
      <Section1 />

      <Divider />
      <Section2 />

      <Divider />
      <Section3 />

      <Divider />
      <Section4 />

      <Divider />
      <Section5 />

      <Divider />
      <Section6 />

      <Divider />
      <Section7 />

      <Divider />
      <Section8 />

      <Divider />
      <Section9 />

      <Divider />
      <Section10 />

      <Divider />
      <Section11 />

      <Divider />
      <Section12 />

      <Divider />
      <Section13 />

      <Divider />
      <Section14 />

      <Divider />
      <Section15 />

      <Divider />
      <Section16 />

      <Divider />
      <Section17 />

      <Divider />
      <Section18 />

      <Divider />
      <Section19 />

      <Divider />
      <Section20 />

      <QuizIntro />
      <Quiz />
    </>
  );
}