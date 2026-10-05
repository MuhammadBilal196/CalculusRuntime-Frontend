import { GuideMcqSection } from "../../components/GuideMcq";
import { MV_DIRECTIONAL_DERIVATIVES_QUIZ } from "../../data/mvDirectionalDerivativesQuiz";
import { RealLifeUse } from "../calculus/CalcBlocks";

export default function DirectionalDerivativesGuide() {
  return (
    <>
      <section className="section" id="directional-derivatives-opening">
        <div className="sec-badge">Topic 4</div>

        <h2 className="sec-title">
          Directional Derivatives in n Dimensions
        </h2>

        <div className="box def">
          <div className="box-lbl">Core Idea</div>

          <p>
            A directional derivative measures the instantaneous rate of change
            of a scalar-valued function when moving from a point in a specified
            direction.
          </p>

          <p>
            In n dimensions, the same gradient-dot-direction idea used in two
            and three variables extends naturally to
            {" "}
            {"$\\mathbb{R}^n$"}.
          </p>
        </div>

        <div className="opening-note-box">
          <p className="opening-note">
            The central workflow is:
            {" "}
            <strong>
              compute the gradient → choose a direction → normalize the
              direction → take the dot product
            </strong>.
          </p>
        </div>

        <RealLifeUse>
          Directional derivatives are used in optimization, machine learning,
          engineering, physics, sensitivity analysis, and numerical modeling
          to determine how a quantity changes along a chosen direction in a
          high-dimensional space.
        </RealLifeUse>
      </section>

      <section className="section" id="directional-derivatives-1">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          1. Why a Directional Derivative Is Needed
        </h2>

        <div className="box">
          <div className="box-lbl">Beyond Coordinate Directions</div>

          <p>
            Partial derivatives measure change along coordinate axes. But many
            applications require movement in an arbitrary direction.
          </p>

          <p>
            For example, in
            {" "}
            {"$\\mathbb{R}^n$"},
            a system may move simultaneously in several variables. A
            directional derivative measures the resulting first-order rate of
            change along that combined motion.
          </p>
        </div>
      </section>

      <section className="section" id="directional-derivatives-2">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          2. The Gradient in n Dimensions
        </h2>

        <div className="box def">
          <div className="box-lbl">Definition</div>

          <p>
            For
            {" "}
            {"$f:\\mathbb{R}^n\\to\\mathbb{R}$"},
            the gradient is
          </p>

          <div className="fml">
            {"$$\\nabla f(x)=\\left\\langle \\frac{\\partial f}{\\partial x_1},\\frac{\\partial f}{\\partial x_2},\\ldots,\\frac{\\partial f}{\\partial x_n}\\right\\rangle$$"}
          </div>

          <p>
            It is an n-dimensional vector containing all first partial
            derivatives.
          </p>
        </div>
      </section>

      <section className="section" id="directional-derivatives-3">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          3. Direction Vectors and Unit Directions
        </h2>

        <div className="box thm">
          <div className="box-lbl">Normalize the Direction</div>

          <p>
            Suppose a problem gives a nonzero direction vector
            {" "}
            {"$v$"}.
            The corresponding unit direction is
          </p>

          <div className="fml">
            {"$$\\boxed{u=\\frac{v}{\\|v\\|}}$$"}
          </div>

          <p>
            Normalization is important because the directional derivative
            measures rate of change per unit distance.
          </p>
        </div>
      </section>

      <section className="section" id="directional-derivatives-4">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          4. Definition of the Directional Derivative
        </h2>

        <div className="box thm">
          <div className="box-lbl">Gradient Formula</div>

          <p>
            If {"$u$"} is a unit vector, the directional derivative of {"$f$"}
            at {"$a$"} in the direction {"$u$"} is
          </p>

          <div className="fml">
            {"$$\\boxed{D_uf(a)=\\nabla f(a)\\cdot u}$$"}
          </div>

          <p>
            This is the fundamental formula for directional derivatives in any
            dimension.
          </p>
        </div>
      </section>

      <section className="section" id="directional-derivatives-5">
        <div className="sec-badge">Worked Example</div>

        <h2 className="sec-title">
          5. Worked Example — Two-Dimensional Direction
        </h2>

        <div className="box exm">
          <div className="box-lbl">Example</div>

          <p>
            Let
            {" "}
            {"$f(x,y)=x^2+y^2$"}.
            Find the directional derivative at {"$(1,2)$"} in the direction
            {" "}
            {"$v=\\langle3,4\\rangle$"}.
          </p>

          <div className="sol">
            <div className="sol-lbl">Solution</div>

            <p>
              First compute the gradient:
            </p>

            <div className="fml">
              {"$$\\nabla f=\\langle2x,2y\\rangle$$"}
            </div>

            <p>
              At {"$(1,2)$"},
            </p>

            <div className="fml">
              {"$$\\nabla f(1,2)=\\langle2,4\\rangle$$"}
            </div>

            <p>
              Normalize the direction:
            </p>

            <div className="fml">
              {"$$u=\\frac{\\langle3,4\\rangle}{5}=\\left\\langle\\frac35,\\frac45\\right\\rangle$$"}
            </div>

            <p>
              Therefore,
            </p>

            <div className="fml">
              {"$$D_uf(1,2)=\\langle2,4\\rangle\\cdot\\left\\langle\\frac35,\\frac45\\right\\rangle=\\frac{22}{5}$$"}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="directional-derivatives-6">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          6. Geometric Meaning of the Gradient
        </h2>

        <div className="box geom">
          <div className="box-lbl">Direction of Fastest Increase</div>

          <p>
            The gradient points in the direction in which the function
            increases most rapidly.
          </p>

          <div className="fml">
            {"$$\\boxed{u_{\\max}=\\frac{\\nabla f}{\\|\\nabla f\\|}}$$"}
          </div>

          <p>
            This follows from the Cauchy-Schwarz inequality applied to
            {"$\\nabla f\\cdot u$"}.
          </p>
        </div>
      </section>

      <section className="section" id="directional-derivatives-7">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          7. Maximum and Minimum Directional Derivatives
        </h2>

        <div className="box thm">
          <div className="box-lbl">Extremal Rates</div>

          <p>
            Among all unit directions,
          </p>

          <div className="fml">
            {"$$\\boxed{\\max_{\\|u\\|=1}D_uf=\\|\\nabla f\\|}$$"}
          </div>

          <div className="fml">
            {"$$\\boxed{\\min_{\\|u\\|=1}D_uf=-\\|\\nabla f\\|}$$"}
          </div>

          <p>
            The maximum occurs along the gradient and the minimum occurs in
            the opposite direction.
          </p>
        </div>
      </section>

      <section className="section" id="directional-derivatives-8">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          8. Orthogonal Directions and Zero Change
        </h2>

        <div className="box def">
          <div className="box-lbl">Zero Directional Derivative</div>

          <p>
            If {"$u$"} is perpendicular to {"$\\nabla f$"}, then
          </p>

          <div className="fml">
            {"$$\\nabla f\\cdot u=0$$"}
          </div>

          <p>
            Therefore the first-order rate of change in that direction is zero.
          </p>
        </div>
      </section>

      <section className="section" id="directional-derivatives-9">
        <div className="sec-badge">Worked Example</div>

        <h2 className="sec-title">
          9. Worked Example — Three Variables
        </h2>

        <div className="box exm">
          <div className="box-lbl">Example</div>

          <p>
            Let
            {" "}
            {"$f(x,y,z)=x+y+z$"}.
            Find the directional derivative in the direction
            {" "}
            {"$v=\\langle1,1,1\\rangle$"}.
          </p>

          <div className="sol">
            <div className="sol-lbl">Solution</div>

            <div className="fml">
              {"$$\\nabla f=\\langle1,1,1\\rangle$$"}
            </div>

            <p>
              Normalize the direction:
            </p>

            <div className="fml">
              {"$$u=\\frac{1}{\\sqrt3}\\langle1,1,1\\rangle$$"}
            </div>

            <p>
              Then
            </p>

            <div className="fml">
              {"$$D_uf=\\langle1,1,1\\rangle\\cdot\\frac{1}{\\sqrt3}\\langle1,1,1\\rangle=\\sqrt3$$"}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="directional-derivatives-10">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          10. Directional Derivatives and the Differential
        </h2>

        <div className="box">
          <div className="box-lbl">First-Order Change</div>

          <p>
            For a small displacement {"$h$"}, the differential gives the local
            change
          </p>

          <div className="fml">
            {"$$df\\approx\\nabla f(a)\\cdot h$$"}
          </div>

          <p>
            If {"$h=tu$"} with {"$u$"} a unit vector, this becomes
          </p>

          <div className="fml">
            {"$$df\\approx t\\,D_uf(a)$$"}
          </div>

          <p>
            So the directional derivative is the first-order rate associated
            with movement along a chosen direction.
          </p>
        </div>
      </section>

      <section className="section" id="directional-derivatives-11">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          11. Connection with the Tangent Hyperplane
        </h2>

        <div className="box geom">
          <div className="box-lbl">n-Dimensional Linearization</div>

          <p>
            For
            {" "}
            {"$f:\\mathbb{R}^n\\to\\mathbb{R}$"},
            the first-order approximation at {"$a$"} is
          </p>

          <div className="fml">
            {"$$f(a+h)\\approx f(a)+\\nabla f(a)^Th$$"}
          </div>

          <p>
            Every directional derivative is therefore a component of the
            function's local linear behavior.
          </p>
        </div>
      </section>

      <section className="section" id="directional-derivatives-12">
        <div className="sec-badge">Worked Example</div>

        <h2 className="sec-title">
          12. Worked Example — Maximum Rate of Increase
        </h2>

        <div className="box exm">
          <div className="box-lbl">Example</div>

          <p>
            Suppose
            {" "}
            {"$\\nabla f(a)=\\langle2,-1,2\\rangle$"}.
            Find the maximum directional derivative at {"$a$"}.
          </p>

          <div className="sol">
            <div className="sol-lbl">Solution</div>

            <div className="fml">
              {"$$\\|\\nabla f(a)\\|=\\sqrt{2^2+(-1)^2+2^2}=3$$"}
            </div>

            <p>
              Thus the maximum directional derivative is
              {" "}
              <strong>3</strong>.
            </p>

            <p>
              It occurs in the unit direction
            </p>

            <div className="fml">
              {"$$u=\\frac13\\langle2,-1,2\\rangle$$"}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="directional-derivatives-13">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          13. Directional Derivatives Along Coordinate Directions
        </h2>

        <div className="box">
          <div className="box-lbl">Partial Derivatives as Special Cases</div>

          <p>
            Partial derivatives are directional derivatives in the standard
            coordinate directions.
          </p>

          <div className="fml">
            {"$$\\frac{\\partial f}{\\partial x_i}=D_{e_i}f$$"}
          </div>

          <p>
            where {"$e_i$"} is the ith standard basis vector.
          </p>
        </div>
      </section>

      <section className="section" id="directional-derivatives-14">
        <div className="sec-badge">Theory</div>

        <h2 className="sec-title">
          14. When the Gradient Is Zero
        </h2>

        <div className="box thm">
          <div className="box-lbl">Stationary Point</div>

          <p>
            If {"$\\nabla f(a)=0$"}, then
          </p>

          <div className="fml">
            {"$$D_uf(a)=0$$"}
          </div>

          <p>
            for every unit direction {"$u$"}.
          </p>

          <p>
            This is an important connection between directional derivatives
            and stationary points in optimization.
          </p>
        </div>
      </section>

      <section className="section" id="directional-derivatives-15">
        <div className="sec-badge">Applications</div>

        <h2 className="sec-title">
          15. Applications in High-Dimensional Problems
        </h2>

        <div className="box">
          <div className="box-lbl">Practical Uses</div>

          <ul>
            <li>Gradient-based optimization</li>
            <li>Machine-learning loss functions</li>
            <li>Engineering sensitivity analysis</li>
            <li>Physical field variation</li>
            <li>Economic parameter sensitivity</li>
            <li>Numerical algorithms in high-dimensional spaces</li>
          </ul>
        </div>
      </section>

      <section className="section" id="directional-derivatives-16">
        <div className="sec-badge">Diagnostic</div>

        <h2 className="sec-title">
          16. Common Mistakes
        </h2>

        <div className="box note">
          <div className="box-lbl">Watch For These Errors</div>

          <ul>
            <li>Using the raw direction vector without normalizing it.</li>
            <li>Computing only one partial derivative.</li>
            <li>
              Forgetting to evaluate the gradient at the specified point.
            </li>
            <li>
              Confusing the direction of maximum increase with maximum
              directional derivative value.
            </li>
            <li>Using the negative gradient when maximum increase is requested.</li>
            <li>
              Forgetting that the gradient has n components in {"$\\mathbb{R}^n$"}.
            </li>
          </ul>
        </div>
      </section>

      <section className="section" id="directional-derivatives-17">
        <div className="sec-badge">Reference</div>

        <h2 className="sec-title">
          17. Key Formulas and Complete Workflow
        </h2>

        <div className="box thm">
          <div className="box-lbl">Key Formulas</div>

          <div className="fml">
            {"$$\\boxed{\\nabla f=\\left\\langle f_{x_1},f_{x_2},\\ldots,f_{x_n}\\right\\rangle}$$"}
          </div>

          <div className="fml">
            {"$$\\boxed{u=\\frac{v}{\\|v\\|}}$$"}
          </div>

          <div className="fml">
            {"$$\\boxed{D_uf(a)=\\nabla f(a)\\cdot u}$$"}
          </div>

          <div className="fml">
            {"$$\\boxed{\\max_{\\|u\\|=1}D_uf(a)=\\|\\nabla f(a)\\|}$$"}
          </div>

          <div className="fml">
            {"$$\\boxed{\\min_{\\|u\\|=1}D_uf(a)=-\\|\\nabla f(a)\\|}$$"}
          </div>

          <p>
            Complete workflow:
          </p>

          <ol>
            <li>Compute the n-dimensional gradient.</li>
            <li>Evaluate it at the required point.</li>
            <li>Write down the requested direction vector.</li>
            <li>Normalize the direction vector.</li>
            <li>Take the dot product with the gradient.</li>
          </ol>
        </div>
      </section>

      <GuideMcqSection
        id="mcq-directional-derivatives"
        badge="Practice"
        title="Directional Derivatives in n Dimensions — Quiz"
        scoreId="score-directional-derivatives"
        section="directional-derivatives"
        questions={MV_DIRECTIONAL_DERIVATIVES_QUIZ}
      />
    </>
  );
}