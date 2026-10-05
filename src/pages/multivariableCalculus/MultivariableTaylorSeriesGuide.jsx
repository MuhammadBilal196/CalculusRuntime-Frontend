import { GuideMcqSection } from "../../components/GuideMcq";
import { MV_MULTIVARIABLE_TAYLOR_QUIZ } from "../../data/mvMultivariableTaylorQuiz";
import { RealLifeUse } from "../calculus/CalcBlocks";

export default function MultivariableTaylorSeriesGuide() {
  return (
    <>
      <section className="section" id="multivariable-taylor-opening">
        <div className="sec-badge">Topic 2</div>
        <h2 className="sec-title">
          Multivariable Taylor Series &amp; Second-Order Approximation
        </h2>

        <div className="box def">
          <div className="box-lbl">Core Idea</div>
          <p>
            A multivariable Taylor expansion approximates a function near a
            chosen point by a polynomial. The first-order approximation uses
            the gradient, while the second-order approximation adds curvature
            information through the Hessian matrix.
          </p>
        </div>

        <div className="opening-note-box">
          <p className="opening-note">
            The central strategy is simple:
            {" "}
            <strong>
              value → gradient → Hessian → Taylor polynomial → error estimate
            </strong>.
          </p>
        </div>

        <RealLifeUse>
          Taylor approximations are useful whenever a complicated nonlinear
          model is easier to study locally with a polynomial. They appear in
          numerical computation, optimization, engineering models, physics,
          error analysis, and local sensitivity calculations.
        </RealLifeUse>
      </section>

      <section className="section" id="multivariable-taylor-1">
        <div className="sec-badge">Theory</div>
        <h2 className="sec-title">
          1. Why Multivariable Taylor Approximation Matters
        </h2>

        <div className="box thm">
          <div className="box-lbl">Local Polynomial Model</div>
          <p>
            Suppose f is sufficiently smooth near a point
            {" "}
            {"$(a,b)$"}.
            Instead of evaluating the full nonlinear function directly, we can
            approximate it with a polynomial in the local displacements
            {" "}
            {"$x-a$"} and {"$y-b$"}.
          </p>
          <div className="fml">
            {"$$f(x,y)\\approx P_n(x,y)$$"}
          </div>
          <p>
            The approximation becomes increasingly accurate near the expansion
            point as higher-order terms are included.
          </p>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-2">
        <div className="sec-badge">Theory</div>
        <h2 className="sec-title">2. The Displacement Vector</h2>

        <div className="box def">
          <div className="box-lbl">Define h</div>
          <p>
            Let the expansion point be {"$(a,b)$"}. Define the displacement
            vector by
          </p>

          <div className="fml">
            {"$$h=\\begin{pmatrix}x-a\\\\y-b\\end{pmatrix}$$"}
          </div>

          <p>
            Using {"$h$"} keeps the Taylor formula compact and makes the
            geometric structure easier to see.
          </p>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-3">
        <div className="sec-badge">Theory</div>
        <h2 className="sec-title">3. First-Order Taylor Approximation</h2>

        <div className="box thm">
          <div className="box-lbl">Formula</div>

          <div className="fml">
            {"$$f(x,y)\\approx f(a,b)+\\nabla f(a,b)\\cdot h$$"}
          </div>

          <p>
            Written directly in coordinates,
          </p>

          <div className="fml">
            {"$$f(x,y)\\approx f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)$$"}
          </div>

          <p>
            This is the multivariable linear approximation and geometrically
            corresponds to the tangent plane.
          </p>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-4">
        <div className="sec-badge">Theory</div>
        <h2 className="sec-title">4. Geometric Meaning — The Tangent Plane</h2>

        <div className="box geom">
          <div className="box-lbl">Tangent-Plane Interpretation</div>

          <p>
            For the surface {"$z=f(x,y)$"}, the first-order Taylor
            approximation gives the tangent plane at {"$(a,b,f(a,b))$"}:
          </p>

          <div className="fml">
            {"$$z=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)$$"}
          </div>

          <p>
            Thus the gradient controls the local tilt of the surface, while
            the function value determines the height of the tangent plane.
          </p>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-5">
        <div className="sec-badge">Worked Example</div>
        <h2 className="sec-title">
          5. Worked Example — First-Order Approximation
        </h2>

        <div className="box exm">
          <div className="box-lbl">Example</div>
          <div className="exm-title">
            Approximate {"$e^{x+y}$"} near {"$(0,0)$"}
          </div>

          <p>
            Let {"$f(x,y)=e^{x+y}$"}. Find the first-order Taylor approximation
            about the origin.
          </p>

          <div className="sol">
            <div className="sol-lbl">Solution</div>

            <p>
              First compute the value:
            </p>

            <div className="fml">
              {"$$f(0,0)=1$$"}
            </div>

            <p>
              The gradient is
            </p>

            <div className="fml">
              {"$$\\nabla f=\\langle e^{x+y},e^{x+y}\\rangle$$"}
            </div>

            <p>
              so
            </p>

            <div className="fml">
              {"$$\\nabla f(0,0)=\\langle1,1\\rangle$$"}
            </div>

            <p>
              Therefore
            </p>

            <div className="fml">
              {"$$T_1(x,y)=1+x+y$$"}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-6">
        <div className="sec-badge">Theory</div>
        <h2 className="sec-title">6. The Hessian Matrix</h2>

        <div className="box def">
          <div className="box-lbl">Second-Derivative Matrix</div>

          <p>
            For a function of two variables, the Hessian matrix is
          </p>

          <div className="fml">
            {"$$H_f(a,b)=\\begin{pmatrix}f_{xx}&f_{xy}\\\\f_{yx}&f_{yy}\\end{pmatrix}_{(a,b)}$$"}
          </div>

          <p>
            Under the standard smoothness assumptions, the mixed partials
            satisfy {"$f_{xy}=f_{yx}$"}, so the Hessian is symmetric.
          </p>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-7">
        <div className="sec-badge">Theory</div>
        <h2 className="sec-title">
          7. Second-Order Taylor Approximation
        </h2>

        <div className="box thm">
          <div className="box-lbl">Second-Order Formula</div>

          <div className="fml">
            {"$$f(x,y)\\approx f(a,b)+\\nabla f(a,b)\\cdot h+\\frac12h^TH_f(a,b)h$$"}
          </div>

          <p>
            The quadratic term captures local curvature that the tangent plane
            cannot represent.
          </p>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-8">
        <div className="sec-badge">Theory</div>
        <h2 className="sec-title">
          8. Expanded Second-Order Formula
        </h2>

        <div className="box">
          <div className="box-lbl">Coordinate Form</div>

          <div className="fml">
            {
              "$$\\begin{aligned}T_2(x,y)=&\\ f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)\\\\&+\\frac12f_{xx}(a,b)(x-a)^2\\\\&+f_{xy}(a,b)(x-a)(y-b)\\\\&+\\frac12f_{yy}(a,b)(y-b)^2\\end{aligned}$$"
            }
          </div>

          <p>
            Notice that the mixed term appears without an additional
            one-half because the two symmetric mixed-derivative contributions
            combine.
          </p>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-9">
        <div className="sec-badge">Worked Example</div>
        <h2 className="sec-title">
          9. Worked Example — Quadratic Function
        </h2>

        <div className="box exm">
          <div className="box-lbl">Example</div>
          <div className="exm-title">
            {"$f(x,y)=x^2+3xy+y^2$"} about {"$(0,0)$"}
          </div>

          <p>
            Find the second-order Taylor polynomial.
          </p>

          <div className="sol">
            <div className="sol-lbl">Solution</div>

            <p>
              Since the function is already quadratic,
              its Taylor polynomial through second order reproduces the
              function exactly.
            </p>

            <div className="fml">
              {"$$T_2(x,y)=x^2+3xy+y^2$$"}
            </div>

            <p>
              This also illustrates an important point: a Taylor polynomial is
              exact whenever the original function is already a polynomial of
              degree no larger than the truncation order.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-10">
        <div className="sec-badge">Theory</div>
        <h2 className="sec-title">
          10. Taylor Series in More Than Two Variables
        </h2>

        <div className="box def">
          <div className="box-lbl">n-Dimensional Form</div>

          <p>
            For {"$f:\\mathbb{R}^n\\to\\mathbb{R}$"}, let {"$a$"} be the
            expansion point and {"$h=x-a$"}. Then the second-order form is
          </p>

          <div className="fml">
            {"$$f(a+h)\\approx f(a)+\\nabla f(a)^Th+\\frac12h^TH_f(a)h$$"}
          </div>

          <p>
            The same value-gradient-Hessian pattern works in any dimension.
          </p>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-11">
        <div className="sec-badge">Theory</div>
        <h2 className="sec-title">11. The Role of Curvature</h2>

        <div className="box geom">
          <div className="box-lbl">Why the Hessian Matters</div>

          <p>
            The gradient describes first-order change, while the Hessian
            describes how those first derivatives themselves change.
          </p>

          <p>
            In a direction represented by a vector {"$h$"}, the scalar
          </p>

          <div className="fml">
            {"$$h^TH_f(a)h$$"}
          </div>

          <p>
            measures the corresponding quadratic curvature contribution.
          </p>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-12">
        <div className="sec-badge">Theory</div>
        <h2 className="sec-title">12. Mixed Partial Derivatives</h2>

        <div className="box thm">
          <div className="box-lbl">Mixed-Term Structure</div>

          <p>
            When the mixed partials are continuous near the expansion point,
            {"$f_{xy}=f_{yx}$"}. This symmetry is reflected in the Hessian and
            simplifies the second-order formula.
          </p>

          <div className="fml">
            {"$$f_{xy}(a,b)(x-a)(y-b)$$"}
          </div>

          <p>
            is therefore the combined mixed contribution in the two-variable
            second-order polynomial.
          </p>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-13">
        <div className="sec-badge">Worked Example</div>
        <h2 className="sec-title">
          13. Worked Example — A Nonlinear Approximation
        </h2>

        <div className="box exm">
          <div className="box-lbl">Example</div>
          <div className="exm-title">
            Approximate {"$\\ln(1+x+y)$"} near {"$(0,0)$"}
          </div>

          <div className="sol">
            <div className="sol-lbl">Solution</div>

            <p>
              At the origin,
            </p>

            <div className="fml">
              {"$$f(0,0)=0$$"}
            </div>

            <p>
              First derivatives:
            </p>

            <div className="fml">
              {"$$f_x=f_y=\\frac{1}{1+x+y}$$"}
            </div>

            <p>
              Hence
            </p>

            <div className="fml">
              {"$$\\nabla f(0,0)=\\langle1,1\\rangle$$"}
            </div>

            <p>
              Second derivatives:
            </p>

            <div className="fml">
              {"$$f_{xx}=f_{xy}=f_{yx}=f_{yy}=-\\frac{1}{(1+x+y)^2}$$"}
            </div>

            <p>
              so all four second derivatives equal {"$-1$"} at the origin.
              Therefore
            </p>

            <div className="fml">
              {"$$T_2(x,y)=x+y-\\frac12(x+y)^2$$"}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-14">
        <div className="sec-badge">Theory</div>
        <h2 className="sec-title">
          14. Error and the Remainder
        </h2>

        <div className="box note">
          <div className="box-lbl">Local Error</div>

          <p>
            A Taylor approximation is local. The closer {"$x$"} is to the
            expansion point, the more useful the truncated polynomial usually
            becomes.
          </p>

          <p>
            For a sufficiently smooth function, omitting terms after the
            second order gives a remainder whose leading scale is commonly
            described as
          </p>

          <div className="fml">
            {"$$R_2(h)=O(\\|h\\|^3)$$"}
          </div>

          <p>
            as {"$\\|h\\|\\to0$"}.
          </p>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-15">
        <div className="sec-badge">Theory</div>
        <h2 className="sec-title">
          15. Choosing First- or Second-Order Approximation
        </h2>

        <div className="box thm">
          <div className="box-lbl">Practical Rule</div>

          <ul>
            <li>
              Use first order when a tangent-plane or local linear model is
              sufficient.
            </li>
            <li>
              Use second order when curvature materially affects the estimate.
            </li>
            <li>
              Higher-order terms can be included when greater local accuracy is
              required.
            </li>
            <li>
              Always check that the evaluation point is reasonably close to the
              expansion point.
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-16">
        <div className="sec-badge">Applications</div>
        <h2 className="sec-title">
          16. Applications of Second-Order Approximation
        </h2>

        <div className="box">
          <div className="box-lbl">Where It Appears</div>

          <ul>
            <li>Local optimization and Hessian-based methods</li>
            <li>Numerical approximation of nonlinear models</li>
            <li>Error and sensitivity analysis</li>
            <li>Engineering and physical modeling</li>
            <li>Approximation of complicated functions near known states</li>
            <li>Quadratic models used in numerical optimization</li>
          </ul>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-17">
        <div className="sec-badge">Diagnostic</div>
        <h2 className="sec-title">
          17. Common Mistakes
        </h2>

        <div className="box note">
          <div className="box-lbl">Watch For These Errors</div>

          <ul>
            <li>Expanding around the wrong point.</li>
            <li>Forgetting to evaluate derivatives at the expansion point.</li>
            <li>Using the gradient where the Hessian is required.</li>
            <li>Dropping the factor {"$\\frac12$"} in the quadratic form.</li>
            <li>Using the wrong sign on a mixed derivative.</li>
            <li>Treating a local Taylor approximation as a global identity.</li>
            <li>Ignoring the size of the displacement {"$\\|h\\|$"}.</li>
          </ul>
        </div>
      </section>

      <section className="section" id="multivariable-taylor-18">
        <div className="sec-badge">Reference</div>
        <h2 className="sec-title">
          18. Complete Taylor Approximation Workflow
        </h2>

        <div className="box thm">
          <div className="box-lbl">Five-Step Method</div>

          <ol>
            <li>
              Choose the expansion point {"$a$"}.
            </li>
            <li>
              Compute {"$f(a)$"} and the gradient {"$\\nabla f(a)$"}.
            </li>
            <li>
              Compute the Hessian {"$H_f(a)$"} when second order is required.
            </li>
            <li>
              Define the displacement vector {"$h=x-a$"}.
            </li>
            <li>
              Assemble
              {" "}
              {"$f(a)+\\nabla f(a)^Th+\\frac12h^TH_f(a)h$"}.
            </li>
          </ol>

          <div className="fml">
            {"$$T_2(a+h)=f(a)+\\nabla f(a)^Th+\\frac12h^TH_f(a)h$$"}
          </div>
        </div>
      </section>

      <GuideMcqSection
        id="mcq-multivariable-taylor"
        badge="Practice"
        title="Multivariable Taylor Series & Second-Order Approximation — Quiz"
        scoreId="score-multivariable-taylor"
        section="multivariable-taylor"
        questions={MV_MULTIVARIABLE_TAYLOR_QUIZ}
      />
    </>
  );
}