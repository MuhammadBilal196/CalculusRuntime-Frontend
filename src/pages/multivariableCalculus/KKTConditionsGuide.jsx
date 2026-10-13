import React from "react";
import { GuideMcqSection } from "../../components/GuideMcq";
import { MV_KKT_CONDITIONS_QUIZ } from "../../data/mvKKTOptimizationQuiz";

/**
 * Module B — Topic 2
 * Inequality Constraints (KKT Conditions)
 *
 * Content-only topic component.
 * It is rendered directly after the Hessian topic on the same
 * Constrained & Unconstrained Optimization — Part 1 page.
 *
 * Existing site CSS classes are intentionally reused:
 * section, sec-badge, sec-title, box, def, thm, note,
 * fml, exm, box-lbl, exm-title, sol, sol-lbl, divider.
 */

function Divider() {
  return <hr className="divider" />;
}

function TopicOpening() {
  return (
    <section className="section" id="kkt-opening">
      <div className="sec-badge">Topic 2</div>

      <h2 className="sec-title">
        Inequality Constraints (KKT Conditions)
      </h2>

      <p>
        Many optimization problems do not allow the decision variables to move
        freely. Instead, the feasible set is restricted by inequalities such as
        {" $x\\ge0$ "},
        {" $x+y\\ge1$ "},
        {" $x^2+y^2\\le1$ "}, or
        {" $g_i(\\mathbf{x})\\le0$ "}.
        In these problems, the optimum may occur in the interior of the
        feasible region or on one or more boundaries.
      </p>

      <p>
        The Karush–Kuhn–Tucker conditions, usually called the
        <strong> KKT conditions</strong>, provide a systematic first-order
        framework for identifying candidate optima in constrained problems.
        They extend the ideas of unconstrained optimization and classical
        Lagrange multipliers to inequality constraints.
      </p>

      <div className="box def">
        <div className="box-lbl">Core Idea</div>

        <p>
          For unconstrained optimization, a differentiable interior optimum
          commonly satisfies
          {" $\\nabla f(\\mathbf{x}^*)=0$ "}.
          With inequality constraints, a boundary optimum may have a nonzero
          objective gradient. The active constraints supply additional normal
          directions that balance that gradient.
        </p>

        <div className="fml">
          {String.raw`$$\nabla f(\mathbf{x}^*)+\sum_{i=1}^{m}\lambda_i^*
          \nabla g_i(\mathbf{x}^*)=0.$$`}
        </div>

        <p>
          The multipliers
          {" $\\lambda_i^* $"}
          quantify the influence of active constraints at the candidate point.
        </p>
      </div>

      <div className="box note">
        <div className="box-lbl">Standard Convention Used in This Guide</div>

        <p>
          Unless stated otherwise, minimization problems are written with every
          inequality in the form
          {" $g_i(\\mathbf{x})\\le0$ "}.
          This convention determines the sign restriction
          {" $\\lambda_i\\ge0$ "}.
        </p>
      </div>
    </section>
  );
}

function KKTSection1() {
  return (
    <section className="section" id="kkt-1">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        1. Why Inequality Constraints Need a New Tool
      </h2>

      <p>
        Equality-constrained optimization typically has the form
        {" $\\min f(\\mathbf{x})$ "}
        subject to
        {" $h_j(\\mathbf{x})=0$ "}.
        Lagrange multipliers handle the equality boundaries because the
        feasible set is restricted to the level surfaces
        {" $h_j(\\mathbf{x})=0$ "}.
      </p>

      <p>
        Inequality constraints are different. A condition such as
        {" $g(\\mathbf{x})\\le0$ "}
        describes an entire region, not only a single surface. The optimizer
        therefore has two qualitatively different possibilities:
      </p>

      <div className="box def">
        <div className="box-lbl">Interior Versus Boundary</div>

        <ul>
          <li>
            <strong>Interior optimum:</strong> all inequalities are strict, so
            the optimizer is not touching any boundary.
          </li>

          <li>
            <strong>Boundary optimum:</strong> one or more inequalities hold
            with equality, so the optimizer lies on a feasible boundary.
          </li>
        </ul>
      </div>

      <p>
        At an interior optimum, the inequality constraints do not directly
        affect the local first-order balance. At a boundary optimum, however,
        the active constraints contribute their own normal directions. KKT
        combines these cases into one framework.
      </p>

      <div className="box thm">
        <div className="box-lbl">Standard Minimization Problem</div>

        <div className="fml">
          {String.raw`$$
          \begin{aligned}
          \min_{\mathbf{x}}\quad &f(\mathbf{x})\\
          \text{subject to}\quad
          &g_i(\mathbf{x})\le0,\qquad i=1,\ldots,m.
          \end{aligned}
          $$`}
        </div>

        <p>
          The KKT conditions describe the first-order balance between the
          objective and the boundaries of the feasible region.
        </p>
      </div>
    </section>
  );
}

function KKTSection2() {
  return (
    <section className="section" id="kkt-2">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        2. Feasible Points, Active Constraints, and Slack
      </h2>

      <p>
        Before solving a constrained optimization problem, it is essential to
        understand whether a point satisfies all inequalities.
      </p>

      <div className="box def">
        <div className="box-lbl">Feasibility</div>

        <p>
          A point
          {" $\\mathbf{x}$ "}
          is <strong>feasible</strong> when
          {" $g_i(\\mathbf{x})\\le0$ "}
          for every constraint.
        </p>
      </div>

      <p>
        A constraint is called <strong>active</strong> when it is exactly
        satisfied:
      </p>

      <div className="fml">
        {String.raw`$$g_i(\mathbf{x}^*)=0.$$`}
      </div>

      <p>
        If the inequality is strict, the constraint is inactive:
      </p>

      <div className="fml">
        {String.raw`$$g_i(\mathbf{x}^*)<0.$$`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Three-Way Constraint Check</div>

        <ul>
          <li>
            {"$g_i(\\mathbf{x})<0$"} — inactive, positive slack.
          </li>

          <li>
            {"$g_i(\\mathbf{x})=0$"} — active, on the boundary.
          </li>

          <li>
            {"$g_i(\\mathbf{x})>0$"} — infeasible.
          </li>
        </ul>
      </div>

      <p>
        The quantity
        {" $-g_i(\\mathbf{x})$ "}
        can be viewed as the available slack under the
        {" $g_i\\le0$ "}
        convention. A large negative value means the point is comfortably
        inside the feasible region, while a value close to zero means the
        point is close to the corresponding boundary.
      </p>

      <div className="box note">
        <div className="box-lbl">Practical Habit</div>

        <p>
          Never solve the stationarity equations and stop. A candidate must
          always be checked against every original inequality.
        </p>
      </div>
    </section>
  );
}

function KKTSection3() {
  return (
    <section className="section" id="kkt-3">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        3. The Four KKT Conditions
      </h2>

      <p>
        For a differentiable minimization problem written with
        {" $g_i(\\mathbf{x})\\le0$ "},
        the KKT conditions at a candidate point
        {" $\\mathbf{x}^*$ "}
        are the following four requirements.
      </p>

      <div className="box def">
        <div className="box-lbl">1. Stationarity</div>

        <div className="fml">
          {String.raw`$$
          \nabla f(\mathbf{x}^*)+
          \sum_{i=1}^{m}\lambda_i^*
          \nabla g_i(\mathbf{x}^*)=0.
          $$`}
        </div>

        <p>
          This says that the objective gradient is balanced by a weighted
          combination of the gradients of the active constraints.
        </p>
      </div>

      <div className="box def">
        <div className="box-lbl">2. Primal Feasibility</div>

        <div className="fml">
          {String.raw`$$g_i(\mathbf{x}^*)\le0,
          \qquad i=1,\ldots,m.$$`}
        </div>

        <p>
          The candidate must actually belong to the feasible set.
        </p>
      </div>

      <div className="box def">
        <div className="box-lbl">3. Dual Feasibility</div>

        <div className="fml">
          {String.raw`$$\lambda_i^*\ge0,
          \qquad i=1,\ldots,m.$$`}
        </div>

        <p>
          Under the standard minimization convention
          {" $g_i\\le0$ "},
          each multiplier must be nonnegative.
        </p>
      </div>

      <div className="box def">
        <div className="box-lbl">4. Complementary Slackness</div>

        <div className="fml">
          {String.raw`$$
          \lambda_i^*g_i(\mathbf{x}^*)=0,
          \qquad i=1,\ldots,m.
          $$`}
        </div>

        <p>
          This condition couples the constraint value and its multiplier:
          either the constraint is inactive and its multiplier is zero, or the
          constraint is active and it may have a positive multiplier.
        </p>
      </div>

      <div className="box thm">
        <div className="box-lbl">Memory Pattern</div>

        <p>
          A useful way to remember KKT is:
        </p>

        <div className="fml">
          {String.raw`$$
          \boxed{
          \text{Stationarity}
          +\text{Primal}
          +\text{Dual}
          +\text{Complementary Slackness}
          }
          $$
          `}
        </div>
      </div>
    </section>
  );
}

function KKTSection4() {
  return (
    <section className="section" id="kkt-4">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        4. The Lagrangian
      </h2>

      <p>
        KKT equations are naturally derived from the Lagrangian. For the
        standard minimization convention:
      </p>

      <div className="box thm">
        <div className="box-lbl">KKT Lagrangian</div>

        <div className="fml">
          {String.raw`$$
          \mathcal{L}(\mathbf{x},\boldsymbol{\lambda})
          =
          f(\mathbf{x})
          +
          \sum_{i=1}^{m}
          \lambda_i g_i(\mathbf{x}).
          $$`}
        </div>
      </div>

      <p>
        Differentiating the Lagrangian with respect to the decision variables
        gives the stationarity equation:
      </p>

      <div className="fml">
        {String.raw`$$
        \nabla_{\mathbf{x}}\mathcal{L}
        =
        \nabla f
        +
        \sum_i\lambda_i\nabla g_i
        =
        0.
        $$`}
      </div>

      <p>
        The multipliers do not represent additional physical coordinates.
        They are auxiliary variables that encode the influence of the
        constraints on the optimum.
      </p>

      <div className="box note">
        <div className="box-lbl">Sign Convention Warning</div>

        <p>
          If a constraint is originally written as
          {" $h(\\mathbf{x})\\ge0$ "},
          do not insert it into the Lagrangian using the same sign rule without
          thinking. Convert it first:
        </p>

        <div className="fml">
          {String.raw`$$
          h(\mathbf{x})\ge0
          \quad\Longleftrightarrow\quad
          -h(\mathbf{x})\le0.
          $$`}
        </div>

        <p>
          Then use the corresponding nonnegative multiplier under the
          standard convention.
        </p>
      </div>
    </section>
  );
}

function KKTSection5() {
  return (
    <section className="section" id="kkt-5">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        5. Complementary Slackness in Detail
      </h2>

      <p>
        Complementary slackness is the feature that most clearly distinguishes
        KKT from unconstrained optimization.
      </p>

      <div className="fml">
        {String.raw`$$
        \lambda_i g_i(\mathbf{x}^*)=0.
        $$`}
      </div>

      <p>
        Since the two factors multiply to zero, at least one must vanish.
      </p>

      <div className="box def">
        <div className="box-lbl">Inactive Constraint</div>

        <p>
          If
          {" $g_i(\\mathbf{x}^*)<0$ "},
          then the constraint is inactive. Therefore:
        </p>

        <div className="fml">
          {String.raw`$$\lambda_i^*=0.$$`}
        </div>

        <p>
          The inactive boundary has no first-order contribution to
          stationarity.
        </p>
      </div>

      <div className="box def">
        <div className="box-lbl">Positive Multiplier</div>

        <p>
          If
          {" $\\lambda_i^*>0$ "},
          then:
        </p>

        <div className="fml">
          {String.raw`$$g_i(\mathbf{x}^*)=0.$$`}
        </div>

        <p>
          Therefore a positive multiplier can only correspond to an active
          constraint.
        </p>
      </div>

      <div className="box note">
        <div className="box-lbl">Important Distinction</div>

        <p>
          An active constraint does not necessarily require a strictly positive
          multiplier. It is possible to have
          {" $g_i(\\mathbf{x}^*)=0$ "}
          and
          {" $\\lambda_i^*=0$ "}.
          The boundary can be active geometrically without contributing a
          nonzero first-order multiplier.
        </p>
      </div>
    </section>
  );
}

function KKTSection6() {
  return (
    <section className="section" id="kkt-6">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        6. Interior Optima Versus Boundary Optima
      </h2>

      <p>
        KKT unifies two cases that are often treated separately in introductory
        optimization.
      </p>

      <div className="box thm">
        <div className="box-lbl">Interior Case</div>

        <p>
          Suppose every constraint is strict:
        </p>

        <div className="fml">
          {String.raw`$$g_i(\mathbf{x}^*)<0
          \qquad\forall i.$$`}
        </div>

        <p>
          Complementary slackness forces every multiplier to vanish:
        </p>

        <div className="fml">
          {String.raw`$$
          \lambda_1^*=\cdots=\lambda_m^*=0.
          $$`}
        </div>

        <p>
          Therefore stationarity reduces to:
        </p>

        <div className="fml">
          {String.raw`$$
          \nabla f(\mathbf{x}^*)=0.
          $$`}
        </div>
      </div>

      <div className="box thm">
        <div className="box-lbl">Boundary Case</div>

        <p>
          If at least one constraint is active:
        </p>

        <div className="fml">
          {String.raw`$$
          g_j(\mathbf{x}^*)=0
          $$
          `}
        </div>

        <p>
          then the corresponding multiplier may be positive and the objective
          gradient does not have to vanish by itself.
        </p>
      </div>

      <p>
        This explains why simply solving
        {" $\\nabla f=0$ "}
        is not enough for a constrained problem. A true constrained optimum
        can occur at a point where the unconstrained first-order condition
        fails.
      </p>
    </section>
  );
}

function KKTSection7() {
  return (
    <section className="section" id="kkt-7">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        7. Geometric Meaning of KKT Stationarity
      </h2>

      <p>
        The gradient
        {" $\\nabla g_i$ "}
        is normal to the boundary surface
        {" $g_i=0$ "}.
        Consequently, the KKT stationarity equation has a clear geometric
        interpretation.
      </p>

      <div className="fml">
        {String.raw`$$
        \nabla f(\mathbf{x}^*)
        =
        -\sum_{i=1}^{m}
        \lambda_i^*
        \nabla g_i(\mathbf{x}^*).
        $$`}
      </div>

      <p>
        The objective gradient must therefore belong to the cone generated by
        the normals of the active constraints, with nonnegative coefficients.
      </p>

      <div className="box def">
        <div className="box-lbl">One Active Constraint</div>

        <p>
          If only one constraint is active, then:
        </p>

        <div className="fml">
          {String.raw`$$
          \nabla f(\mathbf{x}^*)
          =
          -\lambda^*
          \nabla g(\mathbf{x}^*).
          $$`}
        </div>

        <p>
          So the two vectors are parallel up to sign and scale.
        </p>
      </div>

      <div className="box def">
        <div className="box-lbl">Several Active Constraints</div>

        <p>
          With multiple active boundaries, the objective gradient can be
          balanced by a nonnegative linear combination:
        </p>

        <div className="fml">
          {String.raw`$$
          \nabla f
          =
          -\lambda_1\nabla g_1
          -\lambda_2\nabla g_2
          -\cdots.
          $$`}
        </div>
      </div>

      <p>
        This is the inequality-constrained analogue of the classical Lagrange
        multiplier condition.
      </p>
    </section>
  );
}

function KKTSection8() {
  return (
    <section className="section" id="kkt-8">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        8. Worked Example — Minimum with a Linear Inequality
      </h2>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>

        <div className="exm-title">
          Minimize distance subject to x + y ≥ 1
        </div>

        <p>
          Find the minimum of
          {" $f(x,y)=x^2+y^2$ "}
          subject to
          {" $x+y\\ge1$ "}.
        </p>

        <div className="sol">
          <div className="sol-lbl">Solution</div>

          <p>
            First convert the inequality into the standard form:
          </p>

          <div className="fml">
            {String.raw`$$
            g(x,y)=1-x-y\le0.
            $$`}
          </div>

          <p>
            The Lagrangian becomes:
          </p>

          <div className="fml">
            {String.raw`$$
            \mathcal{L}
            =
            x^2+y^2+\lambda(1-x-y).
            $$`}
          </div>

          <p>
            Stationarity gives:
          </p>

          <div className="fml">
            {String.raw`$$
            \frac{\partial\mathcal{L}}{\partial x}
            =
            2x-\lambda=0,
            \qquad
            \frac{\partial\mathcal{L}}{\partial y}
            =
            2y-\lambda=0.
            $$`}
          </div>

          <p>
            Therefore:
          </p>

          <div className="fml">
            {String.raw`$$x=y.$$`}
          </div>

          <p>
            The unconstrained minimum of
            {" $x^2+y^2$ "}
            is
            {" $(0,0)$ "},
            but this point is infeasible because
            {" $0+0<1$ "}.
            Therefore the optimum must occur on the active boundary.
          </p>

          <div className="fml">
            {String.raw`$$
            x+y=1.
            $$`}
          </div>

          <p>
            Combining this with
            {" $x=y$ "}
            gives:
          </p>

          <div className="fml">
            {String.raw`$$
            x=y=\frac12.
            $$`}
          </div>

          <p>
            Substitute into stationarity:
          </p>

          <div className="fml">
            {String.raw`$$
            2\left(\frac12\right)-\lambda=0
            \quad\Rightarrow\quad
            \lambda=1.
            $$`}
          </div>

          <p>
            The objective value is:
          </p>

          <div className="fml">
            {String.raw`$$
            f\left(\frac12,\frac12\right)
            =
            \frac14+\frac14
            =
            \frac12.
            $$`}
          </div>

          <p>
            Therefore:
          </p>

          <div className="fml">
            {String.raw`$$
            \boxed{
            (x^*,y^*)=
            \left(\frac12,\frac12\right),
            \qquad
            f_{\min}=\frac12.
            }
            $$`}
          </div>

          <p>
            The multiplier is positive, which is consistent with the active
            boundary constraint.
          </p>
        </div>
      </div>
    </section>
  );
}

function KKTSection9() {
  return (
    <section className="section" id="kkt-9">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        9. Worked Example — Active Disk Constraint
      </h2>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>

        <div className="exm-title">
          Minimize a linear function on a unit disk
        </div>

        <p>
          Minimize
          {" $f(x,y)=-x-y$ "}
          subject to
          {" $x^2+y^2\\le1$ "}.
        </p>

        <div className="sol">
          <div className="sol-lbl">Solution</div>

          <p>
            Write the constraint as:
          </p>

          <div className="fml">
            {String.raw`$$
            g(x,y)=x^2+y^2-1\le0.
            $$`}
          </div>

          <p>
            The Lagrangian is:
          </p>

          <div className="fml">
            {String.raw`$$
            \mathcal{L}
            =
            -x-y+
            \lambda(x^2+y^2-1).
            $$`}
          </div>

          <p>
            Stationarity:
          </p>

          <div className="fml">
            {String.raw`$$
            -1+2\lambda x=0,
            \qquad
            -1+2\lambda y=0.
            $$`}
          </div>

          <p>
            Subtracting the equations gives:
          </p>

          <div className="fml">
            {String.raw`$$x=y.$$`}
          </div>

          <p>
            An interior optimum would require
            {" $\\lambda=0$ "},
            but stationarity would then become
            {" $-1=0$ "},
            which is impossible. Therefore the constraint must be active:
          </p>

          <div className="fml">
            {String.raw`$$
            x^2+y^2=1.
            $$`}
          </div>

          <p>
            Since
            {" $x=y$ "},
            we get:
          </p>

          <div className="fml">
            {String.raw`$$
            2x^2=1
            \quad\Rightarrow\quad
            x=y=\pm\frac1{\sqrt2}.
            $$`}
          </div>

          <p>
            Evaluate the objective at both candidates:
          </p>

          <div className="fml">
            {String.raw`$$
            f\left(\frac1{\sqrt2},\frac1{\sqrt2}\right)
            =
            -\sqrt2,
            $$`}
          </div>

          <div className="fml">
            {String.raw`$$
            f\left(-\frac1{\sqrt2},-\frac1{\sqrt2}\right)
            =
            \sqrt2.
            $$`}
          </div>

          <p>
            Therefore the minimum occurs at
            {" $(1/\\sqrt2,1/\\sqrt2)$ "}
            with value
            {" $-\\sqrt2$ "}.
          </p>

          <p>
            This is a useful reminder that solving the KKT equations can
            generate multiple candidates. The final classification requires
            checking all candidates and comparing objective values when a
            global conclusion is needed.
          </p>
        </div>
      </div>
    </section>
  );
}

function KKTSection10() {
  return (
    <section className="section" id="kkt-10">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        10. Worked Example — Two Inequality Constraints
      </h2>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>

        <div className="exm-title">
          A problem whose unconstrained optimum is already feasible
        </div>

        <p>
          Minimize
          {" $f(x,y)=(x-2)^2+(y-1)^2$ "}
          subject to
          {" $x\\ge0$ "}
          and
          {" $y\\ge0$ "}.
        </p>

        <div className="sol">
          <div className="sol-lbl">Solution</div>

          <p>
            Convert both inequalities:
          </p>

          <div className="fml">
            {String.raw`$$
            g_1(x,y)=-x\le0,
            \qquad
            g_2(x,y)=-y\le0.
            $$`}
          </div>

          <p>
            The unconstrained minimum is immediately visible:
          </p>

          <div className="fml">
            {String.raw`$$
            (x,y)=(2,1).
            $$`}
          </div>

          <p>
            Check feasibility:
          </p>

          <div className="fml">
            {String.raw`$$
            g_1(2,1)=-2<0,
            \qquad
            g_2(2,1)=-1<0.
            $$`}
          </div>

          <p>
            Both constraints are inactive. Therefore complementary slackness
            gives:
          </p>

          <div className="fml">
            {String.raw`$$
            \lambda_1=\lambda_2=0.
            $$`}
          </div>

          <p>
            Thus the constrained optimum is the same as the unconstrained
            optimum:
          </p>

          <div className="fml">
            {String.raw`$$
            \boxed{
            (x^*,y^*)=(2,1),
            \qquad
            f_{\min}=0.
            }
            $$`}
          </div>

          <p>
            The important lesson is that KKT does not force the solution onto a
            boundary. It only provides a unified framework for deciding whether
            boundaries are active.
          </p>
        </div>
      </div>
    </section>
  );
}

function KKTSection11() {
  return (
    <section className="section" id="kkt-11">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        11. Multiple Inequalities and the Active-Set Strategy
      </h2>

      <p>
        When several inequalities are present, solving every KKT equation
        directly can be difficult. A common strategy is to reason about which
        constraints are active.
      </p>

      <div className="box def">
        <div className="box-lbl">Active-Set Workflow</div>

        <ol>
          <li>
            Rewrite every inequality in the standard
            {" $g_i\\le0$ "}
            convention.
          </li>

          <li>
            Identify plausible active constraints.
          </li>

          <li>
            Set every active constraint equal to zero.
          </li>

          <li>
            Set the multiplier of every assumed inactive constraint equal to
            zero.
          </li>

          <li>
            Solve the resulting stationarity system.
          </li>

          <li>
            Check primal feasibility.
          </li>

          <li>
            Check dual feasibility.
          </li>

          <li>
            Check complementary slackness.
          </li>
        </ol>
      </div>

      <p>
        Suppose there are three inequalities. Different active sets may be:
      </p>

      <div className="fml">
        {String.raw`$$
        \{1\},\qquad
        \{2\},\qquad
        \{3\},\qquad
        \{1,2\},\qquad
        \{1,3\},\qquad
        \{2,3\},\qquad
        \{1,2,3\}.
        $$`}
      </div>

      <p>
        Not every possible active set produces a valid solution. A negative
        multiplier, an infeasible point, or an incorrectly assumed inactive
        constraint eliminates that candidate.
      </p>

      <div className="box note">
        <div className="box-lbl">Practical Interpretation</div>

        <p>
          Active-set reasoning is essentially a structured way of asking:
          "Which boundaries are actually touching the optimizer?"
        </p>
      </div>
    </section>
  );
}

function KKTSection12() {
  return (
    <section className="section" id="kkt-12">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        12. Constraint Qualifications
      </h2>

      <p>
        KKT conditions do not become necessary at every feasible point under
        every conceivable set of constraints. Some regularity assumptions are
        needed to ensure that pathological constraint geometry does not break
        the usual multiplier representation.
      </p>

      <div className="box def">
        <div className="box-lbl">
          Constraint Qualification Idea
        </div>

        <p>
          A constraint qualification is a regularity condition that prevents
          the active constraint gradients from behaving in a degenerate way.
          Under an appropriate qualification, a local optimum can be expected
          to satisfy the KKT conditions.
        </p>
      </div>

      <p>
        One common family of assumptions requires a suitable independence or
        positivity property among the gradients of active constraints. In
        standard textbook problems, these conditions are frequently satisfied
        automatically.
      </p>

      <div className="box note">
        <div className="box-lbl">Why This Matters</div>

        <p>
          A rigorous solution should distinguish between:
        </p>

        <ul>
          <li>
            "This point satisfies KKT," and
          </li>
          <li>
            "Every local optimum must satisfy KKT."
          </li>
        </ul>

        <p>
          The second statement requires appropriate hypotheses.
        </p>
      </div>
    </section>
  );
}

function KKTSection13() {
  return (
    <section className="section" id="kkt-13">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        13. When KKT Conditions Are Sufficient
      </h2>

      <p>
        KKT conditions are often introduced as necessary conditions. In convex
        optimization, however, they become much more powerful.
      </p>

      <div className="box thm">
        <div className="box-lbl">Convex Optimization Principle</div>

        <p>
          Suppose the objective is convex, the inequality constraint functions
          are convex, and an appropriate constraint qualification holds. Then
          a point satisfying the KKT conditions is a global minimizer.
        </p>
      </div>

      <div className="fml">
        {String.raw`$$
        \boxed{
        \text{convex problem}
        +
        \text{KKT}
        \Longrightarrow
        \text{global minimizer}
        }
        $$`}
      </div>

      <p>
        If the objective is strictly convex over a convex feasible set, the
        global minimizer is unique.
      </p>

      <div className="box note">
        <div className="box-lbl">Nonconvex Warning</div>

        <p>
          In a nonconvex problem, satisfying KKT generally identifies a
          candidate rather than automatically certifying a global minimum.
          A KKT point may still require additional analysis.
        </p>
      </div>
    </section>
  );
}

function KKTSection14() {
  return (
    <section className="section" id="kkt-14">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        14. KKT and the Hessian: First-Order Versus Second-Order Information
      </h2>

      <p>
        The Hessian topic preceding KKT focuses on second-order information for
        unconstrained optimization. KKT operates primarily at the first-order
        level for constrained problems.
      </p>

      <div className="box def">
        <div className="box-lbl">First-Order Role</div>

        <p>
          KKT determines whether the gradient balance and constraint geometry
          are compatible with a constrained stationary point.
        </p>
      </div>

      <div className="box def">
        <div className="box-lbl">Second-Order Role</div>

        <p>
          Once a KKT candidate is found, second-order conditions can be used to
          investigate local minimality, maximality, or saddle-type behavior
          along feasible directions.
        </p>
      </div>

      <p>
        Therefore KKT and the Hessian should not be viewed as competing tools.
        They answer different questions and are often used together.
      </p>

      <div className="fml">
        {String.raw`$$
        \text{KKT}
        \longrightarrow
        \text{candidate}
        \longrightarrow
        \text{second-order analysis}
        \longrightarrow
        \text{classification}.
        $$`}
      </div>
    </section>
  );
}

function KKTSection15() {
  return (
    <section className="section" id="kkt-15">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        15. Sensitivity and the Shadow-Price Interpretation
      </h2>

      <p>
        In many applications, the KKT multipliers carry an interpretation
        beyond algebra. A multiplier associated with an active constraint can
        measure how strongly the optimal objective responds to a small change
        in the corresponding constraint bound.
      </p>

      <div className="box def">
        <div className="box-lbl">Sensitivity Idea</div>

        <p>
          A large multiplier often indicates that the corresponding constraint
          is strongly influencing the optimum. A zero multiplier indicates no
          first-order effect from that inactive constraint under the current
          solution.
        </p>
      </div>

      <p>
        Depending on how the constraint is parameterized, an envelope or
        sensitivity calculation may produce a relationship of the form
      </p>

      <div className="fml">
        {String.raw`$$
        \frac{\partial f^*}{\partial b_i}
        \approx
        -\lambda_i^*
        $$
        `}
      </div>

      <p>
        where
        {" $b_i$ "}
        represents a constraint parameter. The exact sign depends on the
        chosen formulation, so the convention must always be checked.
      </p>

      <div className="box note">
        <div className="box-lbl">Application Meaning</div>

        <p>
          In economics, this interpretation is often described as a
          <strong> shadow price</strong>: the marginal value of relaxing an
          active resource constraint.
        </p>
      </div>
    </section>
  );
}

function KKTSection16() {
  return (
    <section className="section" id="kkt-16">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        16. Numerical Optimization and KKT
      </h2>

      <p>
        KKT conditions are also central to numerical optimization. Practical
        algorithms often try to maintain or approximately satisfy feasibility,
        stationarity, and multiplier conditions while approaching the
        solution.
      </p>

      <div className="box def">
        <div className="box-lbl">Typical Numerical Pipeline</div>

        <ol>
          <li>Start with an initial estimate.</li>
          <li>Evaluate objective and constraint information.</li>
          <li>Identify or estimate active constraints.</li>
          <li>Update the decision variables.</li>
          <li>Update multiplier estimates.</li>
          <li>Measure residuals in the KKT conditions.</li>
          <li>Stop when feasibility and stationarity errors are sufficiently small.</li>
        </ol>
      </div>

      <p>
        Different algorithms emphasize different aspects, including active-set
        methods, sequential quadratic programming, interior-point methods, and
        primal-dual strategies.
      </p>

      <div className="box thm">
        <div className="box-lbl">KKT Residual View</div>

        <p>
          Numerically, a solution is often judged by how small the stationarity,
          feasibility, and complementary-slackness residuals become.
        </p>
      </div>
    </section>
  );
}

function KKTSection17() {
  return (
    <section className="section" id="kkt-17">
      <div className="sec-badge">Section</div>

      <h2 className="sec-title">
        17. Applications of Inequality-Constrained Optimization
      </h2>

      <p>
        Inequality constraints appear whenever a system has limits, capacities,
        safety conditions, or minimum requirements.
      </p>

      <div className="box def">
        <div className="box-lbl">Examples</div>

        <ul>
          <li>
            <strong>Engineering:</strong> minimize weight subject to stress and
            displacement limits.
          </li>

          <li>
            <strong>Finance:</strong> optimize a portfolio subject to budget,
            exposure, or risk constraints.
          </li>

          <li>
            <strong>Machine learning:</strong> optimize model parameters under
            regularity or feasibility restrictions.
          </li>

          <li>
            <strong>Operations research:</strong> minimize cost subject to
            capacity and resource inequalities.
          </li>

          <li>
            <strong>Energy systems:</strong> optimize generation while respecting
            physical operating limits.
          </li>

          <li>
            <strong>Logistics:</strong> minimize transportation cost subject to
            demand, capacity, and nonnegativity constraints.
          </li>
        </ul>
      </div>

      <p>
        The mathematical pattern remains the same: objective function, feasible
        region, active boundaries, multipliers, and first-order optimality.
      </p>
    </section>
  );
}

function KKTSection18() {
  return (
    <section className="section" id="kkt-18">
      <div className="sec-badge">Reference</div>

      <h2 className="sec-title">
        18. Common Mistakes and Diagnostic Checks
      </h2>

      <div className="box note">
        <div className="box-lbl">Common Mistakes</div>

        <ul>
          <li>
            Writing some inequalities as
            {" $g_i\\le0$ "}
            and others as
            {" $g_i\\ge0$ "}
            without changing the multiplier sign convention.
          </li>

          <li>
            Forgetting primal feasibility.
          </li>

          <li>
            Forgetting dual feasibility
            {" $\\lambda_i\\ge0$ "}.
          </li>

          <li>
            Ignoring complementary slackness.
          </li>

          <li>
            Assuming every constraint must be active.
          </li>

          <li>
            Assuming every active constraint must have a strictly positive
            multiplier.
          </li>

          <li>
            Solving stationarity but not checking the original inequalities.
          </li>

          <li>
            Claiming a global optimum in a nonconvex problem without additional
            justification.
          </li>

          <li>
            Treating KKT as necessary without considering the required regularity
            assumptions in a theoretical problem.
          </li>
        </ul>
      </div>

      <div className="box thm">
        <div className="box-lbl">Diagnostic Checklist</div>

        <ol>
          <li>
            Did I rewrite all inequalities consistently?
          </li>

          <li>
            Did I build the correct Lagrangian?
          </li>

          <li>
            Did I solve stationarity?
          </li>

          <li>
            Did I check primal feasibility?
          </li>

          <li>
            Did I check nonnegative multipliers?
          </li>

          <li>
            Did I check complementary slackness?
          </li>

          <li>
            Did I compare candidate objective values when a global conclusion is
            required?
          </li>
        </ol>
      </div>
    </section>
  );
}

function KKTSection19() {
  return (
    <section className="section" id="kkt-19">
      <div className="sec-badge">Reference</div>

      <h2 className="sec-title">
        19. Complete KKT Solution Strategy
      </h2>

      <div className="box thm">
        <div className="box-lbl">Recommended Workflow</div>

        <ol>
          <li>
            <strong>State the optimization problem clearly.</strong>
          </li>

          <li>
            <strong>Convert every inequality to the standard convention.</strong>
          </li>

          <li>
            <strong>Construct the Lagrangian.</strong>
          </li>

          <li>
            <strong>Write stationarity equations.</strong>
          </li>

          <li>
            <strong>Write primal feasibility.</strong>
          </li>

          <li>
            <strong>Write dual feasibility.</strong>
          </li>

          <li>
            <strong>Write complementary slackness.</strong>
          </li>

          <li>
            <strong>Solve for candidate points and multipliers.</strong>
          </li>

          <li>
            <strong>Discard infeasible or sign-inconsistent candidates.</strong>
          </li>

          <li>
            <strong>Use convexity or second-order information when classification is needed.</strong>
          </li>

          <li>
            <strong>Compare objective values when a global conclusion requires it.</strong>
          </li>
        </ol>
      </div>

      <div className="box def">
        <div className="box-lbl">Compact Formula Set</div>

        <div className="fml">
          {String.raw`$$
          \boxed{
          \nabla f+
          \sum_i\lambda_i\nabla g_i=0
          }
          $$`}
        </div>

        <div className="fml">
          {String.raw`$$
          \boxed{
          g_i\le0
          }
          $$`}
        </div>

        <div className="fml">
          {String.raw`$$
          \boxed{
          \lambda_i\ge0
          }
          $$`}
        </div>

        <div className="fml">
          {String.raw`$$
          \boxed{
          \lambda_i g_i=0
          }
          $$`}
        </div>
      </div>
    </section>
  );
}

function KKTSection20() {
  return (
    <section className="section" id="kkt-20">
      <div className="sec-badge">Reference</div>

      <h2 className="sec-title">
        20. Final Concept Map
      </h2>

      <p>
        KKT is best understood as a bridge between geometry, calculus, and
        optimization.
      </p>

      <div className="box thm">
        <div className="box-lbl">Concept Map</div>

        <div className="fml">
          {String.raw`$$
          \text{Objective}
          \longrightarrow
          \nabla f
          $$`}
        </div>

        <div className="fml">
          {String.raw`$$
          \text{Constraints}
          \longrightarrow
          \nabla g_i
          $$`}
        </div>

        <div className="fml">
          {String.raw`$$
          \text{Active boundaries}
          \longrightarrow
          \lambda_i>0
          \text{ is possible}
          $$`}
        </div>

        <div className="fml">
          {String.raw`$$
          \text{KKT}
          \longrightarrow
          \text{candidate constrained optimum}.
          $$`}
        </div>
      </div>

      <p>
        The essential intuition is simple: an unconstrained optimum has no
        feasible direction in which the objective can immediately decrease,
        while a constrained boundary optimum achieves the same idea through a
        balance between the objective gradient and the normals of the active
        constraints.
      </p>

      <div className="box note">
        <div className="box-lbl">Remember</div>

        <p>
          KKT gives a disciplined way to answer three questions:
        </p>

        <ol>
          <li>
            Is the point feasible?
          </li>

          <li>
            Do the objective and active boundaries satisfy first-order
            stationarity?
          </li>

          <li>
            Does additional convexity or second-order information establish the
            type of optimum?
          </li>
        </ol>
      </div>
    </section>
  );
}

function KKTQuizIntro() {
  return (
    <>
      <Divider />

      <section className="section" id="kkt-quiz-intro">
        <div className="sec-badge">Practice</div>

        <h2 className="sec-title">
          Inequality Constraints (KKT Conditions) — Checkpoint
        </h2>

        <p>
          Use this 20-question checkpoint to test whether you can identify the
          correct KKT convention, construct the Lagrangian, interpret active
          constraints, apply complementary slackness, solve basic constrained
          optimization problems, and distinguish necessary conditions from
          sufficient conditions.
        </p>

        <div className="box note">
          <div className="box-lbl">Before Starting</div>

          <p>
            Keep the standard minimization convention in mind:
            {" $g_i\\le0$ "}
            and
            {" $\\lambda_i\\ge0$ "}.
            Pay particular attention to complementary slackness.
          </p>
        </div>
      </section>
    </>
  );
}

function KKTQuiz() {
  return (
    <GuideMcqSection
      id="mcq-kkt-conditions"
      badge="Practice"
      title="Inequality Constraints (KKT Conditions) — Quiz"
      scoreId="score-kkt-conditions"
      section="kkt-conditions"
      questions={MV_KKT_CONDITIONS_QUIZ}
    />
  );
}

export default function KKTConditionsGuide() {
  return (
    <>
      <TopicOpening />

      <Divider />
      <KKTSection1 />

      <Divider />
      <KKTSection2 />

      <Divider />
      <KKTSection3 />

      <Divider />
      <KKTSection4 />

      <Divider />
      <KKTSection5 />

      <Divider />
      <KKTSection6 />

      <Divider />
      <KKTSection7 />

      <Divider />
      <KKTSection8 />

      <Divider />
      <KKTSection9 />

      <Divider />
      <KKTSection10 />

      <Divider />
      <KKTSection11 />

      <Divider />
      <KKTSection12 />

      <Divider />
      <KKTSection13 />

      <Divider />
      <KKTSection14 />

      <Divider />
      <KKTSection15 />

      <Divider />
      <KKTSection16 />

      <Divider />
      <KKTSection17 />

      <Divider />
      <KKTSection18 />

      <Divider />
      <KKTSection19 />

      <Divider />
      <KKTSection20 />

      <KKTQuizIntro />

      <KKTQuiz />
    </>
  );
}