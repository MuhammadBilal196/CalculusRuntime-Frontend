import { GuideMcqSection } from "../../components/GuideMcq";
import { MV_IMPLICIT_FUNCTION_THEOREM_QUIZ } from "../../data/mvImplicitFunctionTheoremQuiz";
import { RealLifeUse } from "../calculus/CalcBlocks";

export default function ImplicitFunctionTheoremGuide() {
  return (
    <>
      <section className="section" id="implicit-function-opening">
        <div className="sec-badge">Topic 3</div>

        <h2 className="sec-title">
          Implicit Function Theorem
        </h2>

        <div className="box def">
          <div className="box-lbl">Core Idea</div>

          <p>
            The Implicit Function Theorem gives conditions under which an
            equation involving several variables can be solved locally for one
            variable as a differentiable function of the others.
          </p>

          <p>
            Instead of explicitly solving
            {" "}
            {"$F(x,y)=0$"}
            {" "}
            for {"$y$"} everywhere, the theorem tells us when a local
            representation {"$y=g(x)$"} exists near a particular point.
          </p>
        </div>

        <div className="opening-note-box">
          <p className="opening-note">
            The central workflow is:
            {" "}
            <strong>
              verify the point → choose the dependent variable → check the
              relevant partial derivative → obtain the local function →
              differentiate
            </strong>.
          </p>
        </div>

        <RealLifeUse>
          The Implicit Function Theorem is useful in geometry, constrained
          optimization, nonlinear equations, equilibrium models, mechanics,
          economics, and any setting where variables are linked by equations
          rather than explicit formulas.
        </RealLifeUse>
      </section>

      <section className="section" id="implicit-function-1">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          1. Explicit and Implicit Relationships
        </h2>

        <div className="box">
          <div className="box-lbl">Two Ways to Describe a Relationship</div>

          <p>
            An explicit equation has the dependent variable already isolated,
            such as
            {" "}
            {"$y=x^2$"}.
          </p>

          <p>
            An implicit relationship keeps the variables together:
          </p>

          <div className="fml">
            {"$$F(x,y)=0$$"}
          </div>

          <p>
            Examples include circles, ellipses, and many nonlinear constraint
            equations.
          </p>
        </div>
      </section>

      <section className="section" id="implicit-function-2">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          2. The Local Nature of the Theorem
        </h2>

        <div className="box thm">
          <div className="box-lbl">Local Representation</div>

          <p>
            Suppose
            {" "}
            {"$F(a,b)=0$"}
            {" "}
            and
            {" "}
            {"$F_y(a,b)\\ne0$"}.
            Under suitable differentiability assumptions, there exists a
            neighborhood of {"$(a,b)$"} in which the equation
          </p>

          <div className="fml">
            {"$$F(x,y)=0$$"}
          </div>

          <p>
            can be represented uniquely as
            {" "}
            {"$y=g(x)$"}
            {" "}
            with {"$g(a)=b$"}.
          </p>
        </div>
      </section>

      <section className="section" id="implicit-function-3">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          3. Why the Partial Derivative Must Be Nonzero
        </h2>

        <div className="box def">
          <div className="box-lbl">Nondegeneracy Condition</div>

          <p>
            The condition {"$F_y(a,b)\\ne0$"} means the equation changes
            nontrivially in the y-direction near the point.
          </p>

          <p>
            This prevents the level set from becoming locally degenerate with
            respect to the variable we want to solve for.
          </p>

          <div className="fml">
            {"$$F_y(a,b)\\ne0\\quad\\Longrightarrow\\quad y=g(x)\\text{ locally}$$"}
          </div>
        </div>
      </section>

      <section className="section" id="implicit-function-4">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          4. Deriving the Implicit Derivative Formula
        </h2>

        <div className="box thm">
          <div className="box-lbl">Differentiate F(x,g(x))=0</div>

          <p>
            If {"$y=g(x)$"} satisfies
            {" "}
            {"$F(x,g(x))=0$"},
            differentiate with respect to {"$x$"}:
          </p>

          <div className="fml">
            {"$$F_x+F_y g'(x)=0$$"}
          </div>

          <p>
            Therefore,
          </p>

          <div className="fml">
            {"$$\\boxed{g'(x)=-\\frac{F_x}{F_y}}$$"}
          </div>
        </div>
      </section>

      <section className="section" id="implicit-function-5">
        <div className="sec-badge">Worked Example</div>

        <h2 className="sec-title">
          5. Worked Example — Circle
        </h2>

        <div className="box exm">
          <div className="box-lbl">Example</div>

          <div className="exm-title">
            Find the slope of the circle at {"$(0,2)$"}
          </div>

          <p>
            Let
            {" "}
            {"$F(x,y)=x^2+y^2-4$"}.
            Find {"$dy/dx$"} at {"$(0,2)$"}.
          </p>

          <div className="sol">
            <div className="sol-lbl">Solution</div>

            <p>
              Compute:
            </p>

            <div className="fml">
              {"$$F_x=2x,\\qquad F_y=2y$$"}
            </div>

            <p>
              At {"$(0,2)$"},
            </p>

            <div className="fml">
              {"$$F_x=0,\\qquad F_y=4$$"}
            </div>

            <p>
              Therefore,
            </p>

            <div className="fml">
              {"$$\\frac{dy}{dx}=-\\frac{0}{4}=0$$"}
            </div>

            <p>
              The tangent is horizontal at the top of the circle.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="implicit-function-6">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          6. Level Curves and the Gradient
        </h2>

        <div className="box geom">
          <div className="box-lbl">Geometric Meaning</div>

          <p>
            A level curve is described by
            {" "}
            {"$F(x,y)=c$"}.
            Its gradient is normal to the curve:
          </p>

          <div className="fml">
            {"$$\\nabla F=\\langle F_x,F_y\\rangle$$"}
          </div>

          <p>
            Thus the gradient provides a natural geometric description of the
            direction perpendicular to the implicit curve.
          </p>
        </div>
      </section>

      <section className="section" id="implicit-function-7">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          7. Regular Level Sets
        </h2>

        <div className="box thm">
          <div className="box-lbl">Regularity</div>

          <p>
            If
            {" "}
            {"$\\nabla F(a,b)\\ne0$"},
            then the level set
            {" "}
            {"$F(x,y)=F(a,b)$"}
            {" "}
            is locally a smooth curve through the point.
          </p>

          <div className="fml">
            {"$$\\nabla F(a,b)\\ne0$$"}
          </div>

          <p>
            At least one of {"$F_x$"} or {"$F_y$"} must therefore be nonzero.
          </p>
        </div>
      </section>

      <section className="section" id="implicit-function-8">
        <div className="sec-badge">Worked Example</div>

        <h2 className="sec-title">
          8. Worked Example — Linear Implicit Equation
        </h2>

        <div className="box exm">
          <div className="box-lbl">Example</div>

          <p>
            For
            {" "}
            {"$F(x,y)=x+y-3$"},
            find the derivative along the curve.
          </p>

          <div className="sol">
            <div className="sol-lbl">Solution</div>

            <div className="fml">
              {"$$F_x=1,\\qquad F_y=1$$"}
            </div>

            <div className="fml">
              {"$$\\frac{dy}{dx}=-\\frac{F_x}{F_y}=-1$$"}
            </div>

            <p>
              This agrees with the explicit equation {"$y=3-x$"}.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="implicit-function-9">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          9. Solving for z in Three Variables
        </h2>

        <div className="box def">
          <div className="box-lbl">Three-Variable Version</div>

          <p>
            Suppose
            {" "}
            {"$F(x,y,z)=0$"}.
            If
            {" "}
            {"$F_z(a,b,c)\\ne0$"},
            then the equation can locally be solved as
          </p>

          <div className="fml">
            {"$$z=g(x,y)$$"}
          </div>

          <p>
            near the point {"$(a,b,c)$"}.
          </p>
        </div>
      </section>

      <section className="section" id="implicit-function-10">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          10. Partial Derivatives of an Implicit Function
        </h2>

        <div className="box thm">
          <div className="box-lbl">Derivative Formulas</div>

          <p>
            If {"$z=g(x,y)$"} satisfies
            {" "}
            {"$F(x,y,g(x,y))=0$"},
            then
          </p>

          <div className="fml">
            {"$$\\boxed{g_x=-\\frac{F_x}{F_z}}$$"}
          </div>

          <div className="fml">
            {"$$\\boxed{g_y=-\\frac{F_y}{F_z}}$$"}
          </div>
        </div>
      </section>

      <section className="section" id="implicit-function-11">
        <div className="sec-badge">Worked Example</div>

        <h2 className="sec-title">
          11. Worked Example — Sphere
        </h2>

        <div className="box exm">
          <div className="box-lbl">Example</div>

          <p>
            Let
            {" "}
            {"$F(x,y,z)=x^2+y^2+z^2-9$"}.
            Find {"$g_x$"} at {"$(0,0,3)$"} when {"$z=g(x,y)$"} locally.
          </p>

          <div className="sol">
            <div className="sol-lbl">Solution</div>

            <div className="fml">
              {"$$F_x=2x,\\qquad F_z=2z$$"}
            </div>

            <p>
              At {"$(0,0,3)$"},
            </p>

            <div className="fml">
              {"$$F_x=0,\\qquad F_z=6$$"}
            </div>

            <p>
              Hence
            </p>

            <div className="fml">
              {"$$g_x=-\\frac{0}{6}=0$$"}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="implicit-function-12">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          12. The Jacobian Perspective
        </h2>

        <div className="box">
          <div className="box-lbl">Derivative Matrix</div>

          <p>
            In several variables, the theorem is naturally expressed using a
            Jacobian matrix. The important requirement is that the derivative
            with respect to the variables being solved for be invertible.
          </p>

          <p>
            In the scalar equation
            {" "}
            {"$F(x,y)=0$"},
            the one-by-one Jacobian with respect to {"$y$"} is simply
            {"$F_y$"}.
          </p>

          <div className="fml">
            {"$$F_y(a,b)\\ne0$$"}
          </div>
        </div>
      </section>

      <section className="section" id="implicit-function-13">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          13. What Happens When the Condition F_y = 0?
        </h2>

        <div className="box note">
          <div className="box-lbl">Do Not Overclaim</div>

          <p>
            If {"$F_y(a,b)=0$"}, the standard theorem does not guarantee a local
            representation {"$y=g(x)$"} at that point.
          </p>

          <p>
            This does <strong>not</strong> automatically mean that no local
            representation exists. It means that the theorem's standard
            hypothesis has failed, so another argument may be required.
          </p>
        </div>
      </section>

      <section className="section" id="implicit-function-14">
        <div className="sec-badge">Worked Example</div>

        <h2 className="sec-title">
          14. Worked Example — Choosing the Correct Dependent Variable
        </h2>

        <div className="box exm">
          <div className="box-lbl">Example</div>

          <p>
            Consider
            {" "}
            {"$F(x,y)=x^2+y^2-1$"}
            {" "}
            at {"$(1,0)$"}.
            Which variable is better suited for local solving?
          </p>

          <div className="sol">
            <div className="sol-lbl">Solution</div>

            <p>
              Compute:
            </p>

            <div className="fml">
              {"$$F_x=2x,\\qquad F_y=2y$$"}
            </div>

            <p>
              At {"$(1,0)$"},
            </p>

            <div className="fml">
              {"$$F_x=2,\\qquad F_y=0$$"}
            </div>

            <p>
              So the standard theorem supports solving for
              {" "}
              {"$x$"}
              {" "}
              as a function of {"$y$"}, rather than solving for {"$y$"} as a
              function of {"$x$"} at that point.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="implicit-function-15">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          15. Local Uniqueness
        </h2>

        <div className="box thm">
          <div className="box-lbl">Uniqueness Near the Base Point</div>

          <p>
            Under the theorem's hypotheses, the resulting implicit function is
            locally unique near the chosen point.
          </p>

          <p>
            This is a local statement and should not be confused with a claim
            that a single explicit formula describes the entire level set.
          </p>
        </div>
      </section>

      <section className="section" id="implicit-function-16">
        <div className="sec-badge">Applications</div>

        <h2 className="sec-title">
          16. Applications of the Implicit Function Theorem
        </h2>

        <div className="box">
          <div className="box-lbl">Where It Appears</div>

          <ul>
            <li>Implicit curves and surfaces</li>
            <li>Constrained optimization</li>
            <li>Nonlinear equilibrium equations</li>
            <li>Mechanical and physical constraints</li>
            <li>Comparative statics in economics</li>
            <li>Local analysis of nonlinear systems</li>
          </ul>
        </div>
      </section>

      <section className="section" id="implicit-function-17">
        <div className="sec-badge">Diagnostic</div>

        <h2 className="sec-title">
          17. Common Mistakes
        </h2>

        <div className="box note">
          <div className="box-lbl">Watch For These Errors</div>

          <ul>
            <li>Forgetting to verify that the point satisfies F=0.</li>
            <li>
              Checking the wrong partial derivative for the chosen dependent
              variable.
            </li>
            <li>
              Losing the negative sign in
              {" "}
              {"$-F_x/F_y$"}.
            </li>
            <li>
              Treating the theorem as a global result.
            </li>
            <li>
              Assuming F_y=0 automatically means no implicit function exists.
            </li>
            <li>
              Forgetting that regularity is a local condition.
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="implicit-function-18">
        <div className="sec-badge">Reference</div>

        <h2 className="sec-title">
          18. Key Formulas and Complete Workflow
        </h2>

        <div className="box thm">
          <div className="box-lbl">Key Formulas</div>

          <div className="fml">
            {"$$F(a,b)=0,\\quad F_y(a,b)\\ne0\\quad\\Longrightarrow\\quad y=g(x)\\text{ locally}$$"}
          </div>

          <div className="fml">
            {"$$\\boxed{\\frac{dy}{dx}=-\\frac{F_x}{F_y}}$$"}
          </div>

          <div className="fml">
            {"$$F(a,b,c)=0,\\quad F_z(a,b,c)\\ne0\\quad\\Longrightarrow\\quad z=g(x,y)$$"}
          </div>

          <div className="fml">
            {"$$\\boxed{g_x=-\\frac{F_x}{F_z},\\qquad g_y=-\\frac{F_y}{F_z}}$$"}
          </div>

          <p>
            The standard workflow is:
          </p>

          <ol>
            <li>Verify the base point lies on the level set.</li>
            <li>Choose the variable to solve for.</li>
            <li>Check the corresponding partial derivative is nonzero.</li>
            <li>Use the theorem to obtain the local representation.</li>
            <li>Differentiate implicitly when derivatives are required.</li>
          </ol>
        </div>
      </section>

      <GuideMcqSection
        id="mcq-implicit-function-theorem"
        badge="Practice"
        title="Implicit Function Theorem — Quiz"
        scoreId="score-implicit-function-theorem"
        section="implicit-function-theorem"
        questions={MV_IMPLICIT_FUNCTION_THEOREM_QUIZ}
      />
    </>
  );
}