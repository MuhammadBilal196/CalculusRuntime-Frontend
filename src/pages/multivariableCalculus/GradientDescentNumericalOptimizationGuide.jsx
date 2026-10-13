import { GuideMcqSection } from "../../components/GuideMcq";
import { MV_GRADIENT_DESCENT_QUIZ } from "../../data/mvGradientDescentQuiz";
import { RealLifeUse } from "../calculus/CalcBlocks";

function Divider() {
  return <hr className="divider" />;
}

function GradientDescentOpening() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>Operational Blueprint:</strong> Gradient Descent &amp;
        Numerical Optimization turns multivariable optimization into an
        iterative computational process. Instead of solving
        {" "}
        <strong>∇f = 0</strong>
        {" "}
        symbolically and classifying every candidate exactly, we repeatedly
        move through the domain using local derivative information. The
        negative gradient supplies the steepest-descent direction, the step
        size controls how far we move, and convergence criteria determine when
        the numerical process should stop. This guide develops gradient
        descent, step-size selection, convergence, momentum, line search,
        Newton-type methods, conditioning, stochastic optimization, and a
        complete numerical workflow.
      </p>
    </div>
  );
}

export function GradientDescentNumericalOptimizationGuide() {
  return (
    <>
      <GradientDescentOpening />

      <Divider />

      <section className="section" id="gradient-opening">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">
          1. Why Numerical Optimization Is Needed
        </h2>

        <p>
          In an ideal symbolic optimization problem, we solve the first-order
          condition exactly, identify all candidate points, classify them, and
          compare their values. Real optimization problems are often much
          harder.
        </p>

        <p>
          The objective may involve thousands or millions of variables, a
          complicated nonlinear structure, a very large data set, or derivatives
          that are expensive to manipulate symbolically. In these settings,
          numerical optimization produces a sequence of approximations.
        </p>

        <div className="box def">
          <div className="box-lbl">Definition — Numerical Optimization</div>
          <p>
            Numerical optimization is the computational search for approximate
            minimizers or maximizers of an objective function using finite
            arithmetic, iterative updates, and stopping criteria.
          </p>
        </div>

        <p>
          The most important idea is that we trade an exact symbolic solution
          for a controlled sequence of increasingly useful approximations.
        </p>
      </section>

      <Divider />

      <section className="section" id="gradient-1">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">
          2. The Gradient as the Local Direction of Steepest Increase
        </h2>

        <p>
          Let
          {" "}
          <strong>f : ℝⁿ → ℝ</strong>
          {" "}
          be differentiable. Its gradient is
        </p>

        <div className="fml">
          {String.raw`$$
\nabla f(x)
=
\begin{pmatrix}
\frac{\partial f}{\partial x_1}\\
\frac{\partial f}{\partial x_2}\\
\vdots\\
\frac{\partial f}{\partial x_n}
\end{pmatrix}.
$$`}
        </div>

        <p>
          The gradient points in the direction of greatest instantaneous
          increase of the function.
        </p>

        <div className="box thm">
          <div className="box-lbl">Steepest-Descent Direction</div>
          <p>
            The direction of steepest local decrease is the negative gradient:
          </p>

          <div className="fml">
            {String.raw`$$
-\nabla f(x).
$$`}
          </div>
        </div>

        <p>
          Gradient descent builds its entire search direction from this local
          geometric fact.
        </p>
      </section>

      <Divider />

      <section className="section" id="gradient-2">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">3. Deriving the Gradient-Descent Update</h2>

        <p>
          Suppose the current iterate is
          {" "}
          <strong>xₖ</strong>
          {" "}
          and we choose a small positive step size
          {" "}
          <strong>α</strong>.
          {" "}
          Moving in a direction
          {" "}
          <strong>d</strong>
          {" "}
          gives the first-order approximation
        </p>

        <div className="fml">
          {String.raw`$$
f(x_k+\alpha d)
\approx
f(x_k)
+
\alpha \nabla f(x_k)^T d.
$$`}
        </div>

        <p>
          To decrease the objective, we want the directional term to be
          negative. Choosing
          {" "}
          <strong>d = −∇f(xₖ)</strong>
          {" "}
          gives
        </p>

        <div className="fml">
          {String.raw`$$
f(x_k-\alpha\nabla f(x_k))
\approx
f(x_k)
-
\alpha\|\nabla f(x_k)\|^2.
$$`}
        </div>

        <div className="box thm">
          <div className="box-lbl">Gradient-Descent Rule</div>

          <div className="fml">
            {String.raw`$$
x_{k+1}
=
x_k
-
\alpha_k\nabla f(x_k),
\qquad
\alpha_k>0.
$$`}
          </div>
        </div>
      </section>

      <Divider />

      <section className="section" id="gradient-3">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">4. Choosing the Step Size</h2>

        <p>
          The step size determines how aggressively the algorithm moves. There
          is a fundamental trade-off.
        </p>

        <div className="box">
          <p>
            <strong>Too large:</strong> the algorithm may overshoot the
            minimizer, oscillate, or diverge.
          </p>

          <p>
            <strong>Too small:</strong> the method may remain stable but move
            extremely slowly.
          </p>

          <p>
            <strong>Well chosen:</strong> the iterates make useful progress
            without excessive instability.
          </p>
        </div>

        <p>
          In simple problems, a fixed step size may work well. In harder
          problems, the step size may be changed during the iteration.
        </p>

        <div className="fml">
          {String.raw`$$
x_{k+1}
=
x_k-\alpha_k\nabla f(x_k).
$$`}
        </div>

        <p>
          The subscript on
          {" "}
          <strong>αₖ</strong>
          {" "}
          emphasizes that the step length can vary from iteration to
          iteration.
        </p>
      </section>

      <Divider />

      <section className="section" id="gradient-4">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">5. Worked Example — One-Dimensional Descent</h2>

        <div className="box exm">
          <div className="box-lbl">Example</div>

          <div className="exm-title">
            Minimize f(x)=x² by gradient descent
          </div>

          <p>
            Take
            {" "}
            <strong>x₀=4</strong>
            {" "}
            and
            {" "}
            <strong>α=0.1</strong>.
          </p>

          <div className="sol">
            <div className="sol-lbl">Solution</div>

            <p>
              First compute the derivative:
            </p>

            <div className="fml">
              {String.raw`$$
f'(x)=2x.
$$`}
            </div>

            <p>
              At
              {" "}
              <strong>x₀=4</strong>,
            </p>

            <div className="fml">
              {String.raw`$$
f'(4)=8.
$$`}
            </div>

            <p>
              Therefore
            </p>

            <div className="fml">
              {String.raw`$$
x_1
=
4-0.1(8)
=
3.2.
$$`}
            </div>

            <p>
              The next step is
            </p>

            <div className="fml">
              {String.raw`$$
x_2
=
3.2-0.1(6.4)
=
2.56.
$$`}
            </div>

            <p>
              The iterates move toward
              {" "}
              <strong>x=0</strong>,
              {" "}
              the global minimizer.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="section" id="gradient-5">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">
          6. Worked Example — Two-Variable Gradient Descent
        </h2>

        <div className="box exm">
          <div className="box-lbl">Example</div>

          <div className="exm-title">
            Minimize f(x,y)=x²+2y²
          </div>

          <p>
            Compute the gradient.
          </p>

          <div className="fml">
            {String.raw`$$
\nabla f(x,y)
=
\left\langle
2x,4y
\right\rangle.
$$`}
          </div>

          <p>
            With step size
            {" "}
            <strong>α</strong>,
            {" "}
            the update becomes
          </p>

          <div className="fml">
            {String.raw`$$
x_{k+1}=x_k-2\alpha x_k,
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
y_{k+1}=y_k-4\alpha y_k.
$$`}
          </div>

          <p>
            The two coordinates contract at different rates because the
            objective has different curvature in the two coordinate directions.
          </p>

          <p>
            This difference in curvature leads directly to the issue of
            conditioning discussed later.
          </p>
        </div>
      </section>

      <Divider />

      <section className="section" id="gradient-6">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">7. Gradient Norm and Stopping Criteria</h2>

        <p>
          An optimization algorithm needs a principled way to decide when the
          current iterate is sufficiently close to a solution.
        </p>

        <div className="box thm">
          <div className="box-lbl">Stationarity Criterion</div>

          <div className="fml">
            {String.raw`$$
\|\nabla f(x_k)\|
<
\varepsilon.
$$`}
          </div>

          <p>
            Here
            {" "}
            <strong>ε&gt;0</strong>
            {" "}
            is a small tolerance.
          </p>
        </div>

        <p>
          Other useful stopping conditions compare successive iterates or
          objective values:
        </p>

        <div className="fml">
          {String.raw`$$
\|x_{k+1}-x_k\|<\varepsilon_x
$$`}
        </div>

        <div className="fml">
          {String.raw`$$
|f(x_{k+1})-f(x_k)|<\varepsilon_f.
$$`}
        </div>

        <p>
          In a robust implementation, several criteria may be combined with a
          maximum iteration count.
        </p>
      </section>

      <Divider />

      <section className="section" id="gradient-7">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">8. Convexity and Global Convergence</h2>

        <p>
          Convexity is one of the most important structural ideas in numerical
          optimization.
        </p>

        <div className="box def">
          <div className="box-lbl">Convex Function</div>

          <p>
            A differentiable function is convex when its graph bends in a way
            that prevents spurious local minima below the global minimum.
          </p>
        </div>

        <p>
          For a differentiable convex function, any stationary point satisfies
        </p>

        <div className="fml">
          {String.raw`$$
\nabla f(x^*)=0
$$`}
        </div>

        <p>
          and is a global minimizer.
        </p>

        <div className="box thm">
          <div className="box-lbl">Why This Matters</div>
          <p>
            Numerical optimization is much easier to interpret when the
            objective is convex because a converged stationary point is also a
            global solution.
          </p>
        </div>
      </section>

      <Divider />

      <section className="section" id="gradient-8">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">
          9. Strong Convexity and Rates of Progress
        </h2>

        <p>
          Strong convexity provides even more structure. For a twice
          differentiable function, a typical sufficient condition is
        </p>

        <div className="fml">
          {String.raw`$$
H_f(x)\succeq mI
\qquad
\text{for some }m>0.
$$`}
        </div>

        <p>
          This means the Hessian is bounded below by a positive multiple of the
          identity matrix.
        </p>

        <p>
          Strong convexity implies a unique global minimizer and gives stronger
          theoretical control over optimization behavior.
        </p>

        <div className="box note">
          <div className="box-lbl">Important Distinction</div>
          <p>
            Convexity gives global structure. Strong convexity gives global
            structure plus a positive amount of curvature.
          </p>
        </div>
      </section>

      <Divider />

      <section className="section" id="gradient-9">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">10. Momentum Methods</h2>

        <p>
          Plain gradient descent can become inefficient when successive
          gradients point in related directions or when the geometry causes
          zig-zag motion.
        </p>

        <p>
          Momentum introduces a memory of previous updates. One common form is
        </p>

        <div className="fml">
          {String.raw`$$
v_{k+1}
=
\beta v_k
+
\nabla f(x_k),
$$`}
        </div>

        <div className="fml">
          {String.raw`$$
x_{k+1}
=
x_k
-
\alpha v_{k+1}.
$$`}
        </div>

        <p>
          The parameter
          {" "}
          <strong>β</strong>
          {" "}
          controls how much previous motion influences the current update.
        </p>

        <div className="box">
          <p>
            Momentum can accelerate movement through directions with consistent
            descent information.
          </p>

          <p>
            It can also reduce some of the inefficient oscillation that occurs
            in narrow valleys.
          </p>
        </div>
      </section>

      <Divider />

      <section className="section" id="gradient-10">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">11. Line Search</h2>

        <p>
          A search direction alone does not tell us how far to move. Line
          search addresses this missing piece.
        </p>

        <p>
          Given a direction
          {" "}
          <strong>dₖ</strong>,
          {" "}
          define the one-variable function
        </p>

        <div className="fml">
          {String.raw`$$
\phi(\alpha)
=
f(x_k+\alpha d_k).
$$`}
        </div>

        <p>
          We then choose a step length α that produces adequate decrease.
        </p>

        <div className="box thm">
          <div className="box-lbl">Concept</div>
          <p>
            Gradient descent chooses a direction using the gradient. A line
            search determines a useful distance to travel in that direction.
          </p>
        </div>

        <p>
          This often provides more control than blindly fixing a single global
          step size.
        </p>
      </section>

      <Divider />

      <section className="section" id="gradient-11">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">12. Newton's Method for Optimization</h2>

        <p>
          Gradient descent uses first-order information. Newton's method also
          uses second-order curvature.
        </p>

        <div className="fml">
          {String.raw`$$
x_{k+1}
=
x_k
-
H_f(x_k)^{-1}
\nabla f(x_k).
$$`}
        </div>

        <p>
          The method comes from approximating the objective locally by a
          quadratic function.
        </p>

        <div className="box thm">
          <div className="box-lbl">Curvature-Aware Update</div>

          <p>
            Gradient descent treats the local geometry through the gradient.
            Newton's method adjusts the step using the inverse Hessian, so
            directions with different curvature are scaled differently.
          </p>
        </div>
      </section>

      <Divider />

      <section className="section" id="gradient-12">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">
          13. Quasi-Newton Ideas and Hessian Approximation
        </h2>

        <p>
          Computing and inverting the exact Hessian can be expensive in
          high-dimensional problems.
        </p>

        <p>
          Quasi-Newton methods therefore construct an approximation to curvature
          information rather than explicitly forming the exact Hessian at every
          iteration.
        </p>

        <div className="box">
          <p>
            <strong>Gradient descent:</strong> first-order information.
          </p>

          <p>
            <strong>Newton:</strong> exact second-order information.
          </p>

          <p>
            <strong>Quasi-Newton:</strong> iteratively updated approximation to
            second-order information.
          </p>
        </div>

        <p>
          This creates a useful middle ground between computational cost and
          curvature awareness.
        </p>
      </section>

      <Divider />

      <section className="section" id="gradient-13">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">14. Conditioning and Zig-Zag Behavior</h2>

        <p>
          Consider a quadratic objective whose Hessian has eigenvalues with very
          different magnitudes.
        </p>

        <div className="fml">
          {String.raw`$$
0<\lambda_{\min}\ll\lambda_{\max}.
$$`}
        </div>

        <p>
          The objective then contains directions of very different curvature.
          A step size that is safe for the steep direction may be inefficient
          for the shallow direction.
        </p>

        <div className="box note">
          <div className="box-lbl">Geometric Effect</div>
          <p>
            The level sets may form long, narrow ellipses. Gradient descent can
            bounce from one side of the valley toward the other rather than
            moving directly toward the minimizer.
          </p>
        </div>

        <p>
          This is one reason preconditioning and curvature-aware methods are
          important.
        </p>
      </section>

      <Divider />

      <section className="section" id="gradient-14">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">15. Stochastic and Mini-Batch Optimization</h2>

        <p>
          In data-driven optimization, the objective may be an average over many
          observations:
        </p>

        <div className="fml">
          {String.raw`$$
F(w)
=
\frac{1}{N}
\sum_{i=1}^{N}
\ell_i(w).
$$`}
        </div>

        <p>
          Full-batch gradient descent computes the gradient using all
          observations.
        </p>

        <p>
          Stochastic gradient methods use one observation at a time, while
          mini-batch methods use a small subset.
        </p>

        <div className="box thm">
          <div className="box-lbl">Trade-Off</div>
          <p>
            Smaller batches make each iteration cheaper but introduce more
            variation into the gradient estimate.
          </p>
        </div>

        <p>
          This is one of the central numerical ideas behind modern large-scale
          machine-learning optimization.
        </p>

        <RealLifeUse>
          Gradient-based numerical optimization is used to fit machine-learning
          models, estimate physical parameters, calibrate engineering systems,
          tune economic models, and solve large inverse problems where an exact
          symbolic solution is impractical.
        </RealLifeUse>
      </section>

      <Divider />

      <section className="section" id="gradient-15">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">
          16. Constraints in Numerical Optimization
        </h2>

        <p>
          Gradient descent in its simplest form assumes an unconstrained
          parameter space.
        </p>

        <p>
          When constraints are present, the update may have to be modified.
        </p>

        <div className="box">
          <p>
            <strong>Projection:</strong> take a gradient step and project the
            result back into the feasible set.
          </p>

          <p>
            <strong>Penalty methods:</strong> add a penalty term for violating
            constraints.
          </p>

          <p>
            <strong>Barrier methods:</strong> discourage movement toward
            forbidden regions through a barrier term.
          </p>
        </div>

        <p>
          These numerical ideas connect naturally to the inequality constraints
          and KKT conditions developed earlier in this module.
        </p>
      </section>

      <Divider />

      <section className="section" id="gradient-16">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">17. Gradient Descent Versus Newton's Method</h2>

        <div className="tbl-wrap">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Gradient Descent</th>
                <th>Newton's Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Information used</td>
                <td>Gradient</td>
                <td>Gradient + Hessian</td>
              </tr>
              <tr>
                <td>Per-step cost</td>
                <td>Usually lower</td>
                <td>Usually higher</td>
              </tr>
              <tr>
                <td>Curvature awareness</td>
                <td>Indirect</td>
                <td>Direct</td>
              </tr>
              <tr>
                <td>High-dimensional use</td>
                <td>Very common</td>
                <td>Can be expensive</td>
              </tr>
              <tr>
                <td>Typical issue</td>
                <td>Slow convergence or zig-zagging</td>
                <td>Hessian computation / solution cost</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          There is no universally best method. The correct method depends on the
          geometry, scale, derivatives, data size, and computational budget of
          the problem.
        </p>
      </section>

      <Divider />

      <section className="section" id="gradient-17">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">18. Common Numerical Failure Modes</h2>

        <div className="box note">
          <div className="box-lbl">Diagnostic Checklist</div>

          <p>
            <strong>Failure 1:</strong> The objective increases instead of
            decreasing. Check the sign of the gradient and the step size.
          </p>

          <p>
            <strong>Failure 2:</strong> Iterates oscillate. The step may be too
            large or the problem may be badly conditioned.
          </p>

          <p>
            <strong>Failure 3:</strong> Progress is extremely slow. The step may
            be too small or the geometry may be poorly conditioned.
          </p>

          <p>
            <strong>Failure 4:</strong> The method stops far from a useful
            solution. Check the stopping criterion and initialization.
          </p>

          <p>
            <strong>Failure 5:</strong> The method converges to an undesirable
            stationary point. The problem may be nonconvex.
          </p>
        </div>
      </section>

      <Divider />

      <section className="section" id="gradient-18">
        <div className="sec-badge">Section</div>
        <h2 className="sec-title">
          19. Complete Numerical Optimization Workflow
        </h2>

        <div className="box thm">
          <div className="box-lbl">Practical Workflow</div>

          <ol>
            <li>
              Define the objective function and identify the variables.
            </li>

            <li>
              Determine whether the problem is unconstrained or constrained.
            </li>

            <li>
              Compute the gradient, and the Hessian when a second-order method
              is appropriate.
            </li>

            <li>
              Choose an initial point.
            </li>

            <li>
              Choose a numerical method such as gradient descent, a momentum
              method, Newton's method, or a quasi-Newton method.
            </li>

            <li>
              Choose or adapt the step size.
            </li>

            <li>
              Iterate until the gradient norm, step size, objective change, or
              iteration limit triggers a stopping condition.
            </li>

            <li>
              Check the final point and objective value for plausibility.
            </li>
          </ol>
        </div>

        <p>
          A numerical answer should always be interpreted together with the
          algorithm, initialization, tolerances, and convergence behavior that
          produced it.
        </p>
      </section>

      <Divider />

      <section className="section" id="gradient-19">
        <div className="sec-badge">Reference</div>
        <h2 className="sec-title">
          20. Key Formulas and Final Strategy
        </h2>

        <div className="fml">
          {String.raw`$$
\nabla f
=
\left\langle
\frac{\partial f}{\partial x_1},
\dots,
\frac{\partial f}{\partial x_n}
\right\rangle
$$`}
        </div>

        <div className="fml">
          {String.raw`$$
x_{k+1}
=
x_k
-
\alpha_k\nabla f(x_k).
$$`}
        </div>

        <div className="fml">
          {String.raw`$$
\|\nabla f(x_k)\|<\varepsilon
\qquad
\Longrightarrow
\qquad
\text{approximate stationarity}.
$$`}
        </div>

        <div className="fml">
          {String.raw`$$
x_{k+1}
=
x_k
-
H_f(x_k)^{-1}\nabla f(x_k)
\qquad
\text{(Newton)}.
$$`}
        </div>

        <div className="box thm">
          <div className="box-lbl">Final Strategy</div>

          <p>
            Use the gradient to choose a descent direction, use the step size
            to control how far to move, monitor convergence numerically, and
            choose a more advanced method when the geometry or problem scale
            makes plain gradient descent inefficient.
          </p>

          <p>
            For convex problems, a stationary point provides a global
            minimization guarantee. For nonconvex problems, a numerical method
            may find only a local minimum or another stationary point, so the
            final result must be interpreted with the problem's geometry in
            mind.
          </p>
        </div>
      </section>

      <Divider />

      <GuideMcqSection
        id="mcq-gradient-descent"
        badge="Practice"
        title="Gradient Descent & Numerical Optimization — Quiz"
        scoreId="score-gradient-descent"
        section="gradient-descent"
        questions={MV_GRADIENT_DESCENT_QUIZ}
      />
    </>
  );
}