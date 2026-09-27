/* ============================================================
   PART 1 — SPACE CURVES
   ============================================================ */
import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";

import {
  MV_SC_201_QUIZ,
  MV_SC_202_QUIZ,
  MV_SC_203_QUIZ,
  MV_SC_204_QUIZ,
  MV_SC_205_QUIZ,
  MV_SC_206_QUIZ,
  MV_SC_207_QUIZ,
} from "../../data/mvSpaceCurvesQuizzes";

import "./PartialDerivativesGuide.css";

function Divider() {
  return <hr className="divider" />;
}
function SectionS201() {
  return (
    <section className="section" id="s201">
      <div className="sec-badge">Topic 1</div>
      <h2 className="sec-title">Vector Position Functions</h2>

      <p>
        A space curve is a curve that lies in three-dimensional space. Unlike a
        plane curve, which can usually be described using two coordinates, a
        space curve requires three coordinates. The natural way to describe such
        a curve is with a vector-valued function.
      </p>

      <div className="box def">
        <div className="box-lbl">Definition — Vector Position Function</div>
        <p>
          A vector-valued function of one variable is a function whose output is
          a vector. For a curve in three-dimensional space, the standard form is
        </p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle x(t),y(t),z(t)\\rangle\\)"}
        </div>

        <p>
          Here, <strong>t</strong> is the parameter and the three component
          functions determine the coordinates of the moving point.
        </p>
      </div>

      <h3 className="subsec">1.1 Geometric Meaning</h3>

      <p>
        For every value of <strong>t</strong>, the vector
        <strong> r(t)</strong> points from the origin to a point on the curve.
        As the parameter changes, the endpoint of the vector moves through space
        and traces the curve.
      </p>

      <div className="box">
        <div className="box-lbl">Component Form</div>

        <p>If</p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle x(t),y(t),z(t)\\rangle\\)"}
        </div>

        <p>then</p>

        <div className="fml">
          {"\\(x=x(t),\\qquad y=y(t),\\qquad z=z(t).\\)"}
        </div>
      </div>

      <h3 className="subsec">1.2 Domain of a Vector Function</h3>

      <p>
        The domain of a vector-valued function consists of all values of
        <strong> t </strong> for which every component function is defined.
        Restrictions from square roots, logarithms, denominators, inverse
        trigonometric functions, and other expressions must all be considered.
      </p>

      <div className="box">
        <div className="box-lbl">Important Rule</div>

        <p>The domain of</p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle f(t),g(t),h(t)\\rangle\\)"}
        </div>

        <p>
          is the intersection of the domains of <strong>f</strong>,
          <strong>g</strong>, and <strong>h</strong>.
        </p>
      </div>

      <h3 className="subsec">1.3 Limits of Vector Functions</h3>

      <p>
        Limits of vector-valued functions are calculated component by component.
      </p>

      <div className="fml">
        {
          "\\(\\lim_{t\\to a}\\mathbf r(t)=\\left\\langle\\lim_{t\\to a}x(t),\\lim_{t\\to a}y(t),\\lim_{t\\to a}z(t)\\right\\rangle\\)"
        }
      </div>

      <p>provided the three component limits exist.</p>

      <h3 className="subsec">1.4 Differentiation of Vector Functions</h3>

      <p>A vector function is differentiated component by component:</p>

      <div className="fml">
        {"\\(\\mathbf r'(t)=\\langle x'(t),y'(t),z'(t)\\rangle\\)"}
      </div>

      <p>
        The derivative has an important geometric interpretation: it gives a
        tangent vector to the curve.
      </p>

      <h3 className="subsec">1.5 Tangent Line to a Space Curve</h3>

      <p>Suppose the curve is</p>

      <div className="fml">{"\\(\\mathbf r(t)\\)"}</div>

      <p>
        and we want the tangent line at the point corresponding to
        <strong> t=t₀</strong>.
      </p>

      <p>First calculate:</p>

      <div className="fml">{"\\(\\mathbf r(t_0)\\)"}</div>

      <p>and</p>

      <div className="fml">{"\\(\\mathbf r'(t_0)\\)"}</div>

      <p>The tangent line is then</p>

      <div className="fml">
        {"\\(\\boxed{\\mathbf L(s)=\\mathbf r(t_0)+s\\mathbf r'(t_0)}\\)"}
      </div>

      <div className="exm">
        <div className="box-lbl">Worked Example 1 — Tangent Line</div>

        <p>Find the tangent line to</p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle t,t^2,t^3\\rangle\\)"}
        </div>

        <p>
          at <strong>t=1</strong>.
        </p>

        <div className="steps">
          <p>
            <strong>Step 1: Find the point.</strong>
          </p>

          <div className="fml">
            {"\\(\\mathbf r(1)=\\langle1,1,1\\rangle\\)"}
          </div>

          <p>
            <strong>Step 2: Differentiate.</strong>
          </p>

          <div className="fml">
            {"\\(\\mathbf r'(t)=\\langle1,2t,3t^2\\rangle\\)"}
          </div>

          <p>Therefore,</p>

          <div className="fml">
            {"\\(\\mathbf r'(1)=\\langle1,2,3\\rangle\\)"}
          </div>

          <p>
            <strong>Step 3: Construct the tangent line.</strong>
          </p>

          <div className="fml">
            {"\\(\\mathbf L(s)=\\langle1,1,1\\rangle+s\\langle1,2,3\\rangle\\)"}
          </div>

          <p>Thus,</p>

          <div className="fml">
            {"\\(\\boxed{\\mathbf L(s)=\\langle1+s,1+2s,1+3s\\rangle}\\)"}
          </div>
        </div>
      </div>

      <div className="exm">
        <div className="box-lbl">
          Worked Example 2 — Eliminating the Parameter
        </div>

        <p>Consider</p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle t,t^2,t^3\\rangle\\)"}
        </div>

        <p>Since</p>

        <div className="fml">{"\\(x=t\\)"}</div>

        <p>we obtain</p>

        <div className="fml">{"\\(y=t^2=x^2\\)"}</div>

        <div className="fml">{"\\(z=t^3=x^3\\)"}</div>

        <p>Therefore the space curve satisfies</p>

        <div className="fml">{"\\(\\boxed{y=x^2,\\qquad z=x^3}\\)"}</div>
      </div>

      <div className="box">
        <div className="box-lbl">Key Ideas</div>

        <ul>
          <li>
            A space curve can be represented by
            {" \\(\\mathbf r(t)=\\langle x(t),y(t),z(t)\\rangle\\)."}
          </li>
          <li>The derivative r'(t) gives a tangent direction.</li>
          <li>The tangent line uses r(t₀) and r'(t₀).</li>
          <li>
            Vector limits and derivatives are computed component by component.
          </li>
        </ul>
      </div>
    </section>
  );
}

function SectionS202() {
  return (
    <section className="section" id="s202">
      <div className="sec-badge">Topic 2</div>
      <h2 className="sec-title">Velocity, Speed &amp; Acceleration</h2>

      <p>
        Vector-valued functions are especially important in mechanics because
        they provide a natural mathematical description of motion in space. If
        the position of a particle is known as a function of time, then
        differentiation gives its velocity and acceleration.
      </p>

      <div className="box def">
        <div className="box-lbl">Position</div>

        <p>
          The position of a particle at time <strong>t</strong> is represented
          by
        </p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle x(t),y(t),z(t)\\rangle\\)"}
        </div>
      </div>

      <h3 className="subsec">2.1 Velocity</h3>

      <p>Velocity is the derivative of the position vector:</p>

      <div className="fml">{"\\(\\boxed{\\mathbf v(t)=\\mathbf r'(t)}\\)"}</div>

      <p>Therefore,</p>

      <div className="fml">
        {"\\(\\mathbf v(t)=\\langle x'(t),y'(t),z'(t)\\rangle\\)"}
      </div>

      <p>
        The velocity vector points in the instantaneous direction of motion.
      </p>

      <h3 className="subsec">2.2 Speed</h3>

      <p>Speed is the magnitude of velocity:</p>

      <div className="fml">
        {"\\(\\boxed{\\text{speed}=|\\mathbf v(t)|}\\)"}
      </div>

      <p>Thus,</p>

      <div className="fml">
        {"\\(\\boxed{|\\mathbf v(t)|=\\sqrt{[x'(t)]^2+[y'(t)]^2+[z'(t)]^2}}\\)"}
      </div>

      <p>
        Velocity is a vector, whereas speed is a scalar. A velocity vector
        contains directional information; speed does not.
      </p>

      <h3 className="subsec">2.3 Acceleration</h3>

      <p>Acceleration is the derivative of velocity:</p>

      <div className="fml">
        {"\\(\\boxed{\\mathbf a(t)=\\mathbf v'(t)=\\mathbf r''(t)}\\)"}
      </div>

      <p>Hence,</p>

      <div className="fml">
        {"\\(\\mathbf a(t)=\\langle x''(t),y''(t),z''(t)\\rangle\\)"}
      </div>

      <h3 className="subsec">2.4 Displacement</h3>

      <p>
        The displacement from time <strong>a</strong> to time <strong>b</strong>
        is the difference between the final and initial position vectors:
      </p>

      <div className="fml">
        {"\\(\\boxed{\\Delta\\mathbf r=\\mathbf r(b)-\\mathbf r(a)}\\)"}
      </div>

      <p>Displacement is a vector and therefore contains direction.</p>

      <h3 className="subsec">2.5 Distance Traveled</h3>

      <p>Distance traveled is the integral of speed:</p>

      <div className="fml">
        {"\\(\\boxed{D=\\int_a^b|\\mathbf r'(t)|\\,dt}\\)"}
      </div>

      <p>
        Distance and displacement should not be confused. A particle can have
        zero displacement while traveling a positive distance.
      </p>

      <div className="exm">
        <div className="box-lbl">
          Worked Example 1 — Velocity, Acceleration and Speed
        </div>

        <p>Given</p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle t^2,2t,3\\rangle\\)"}
        </div>

        <p>find velocity, acceleration, and speed at t=2.</p>

        <div className="steps">
          <p>
            <strong>Step 1: Velocity</strong>
          </p>

          <div className="fml">
            {"\\(\\mathbf v(t)=\\mathbf r'(t)=\\langle2t,2,0\\rangle\\)"}
          </div>

          <p>At t=2:</p>

          <div className="fml">
            {"\\(\\mathbf v(2)=\\langle4,2,0\\rangle\\)"}
          </div>

          <p>
            <strong>Step 2: Acceleration</strong>
          </p>

          <div className="fml">
            {"\\(\\mathbf a(t)=\\mathbf r''(t)=\\langle2,0,0\\rangle\\)"}
          </div>

          <p>Therefore,</p>

          <div className="fml">
            {"\\(\\boxed{\\mathbf a(2)=\\langle2,0,0\\rangle}\\)"}
          </div>

          <p>
            <strong>Step 3: Speed</strong>
          </p>

          <div className="fml">
            {"\\(|\\mathbf v(2)|=\\sqrt{4^2+2^2+0^2}\\)"}
          </div>

          <div className="fml">{"\\(=\\sqrt{20}=2\\sqrt5\\)"}</div>

          <p>Hence,</p>

          <div className="fml">{"\\(\\boxed{\\text{speed}=2\\sqrt5}\\)"}</div>
        </div>
      </div>

      <div className="exm">
        <div className="box-lbl">Worked Example 2 — Distance Traveled</div>

        <p>Find the distance traveled by</p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle3t,4t,0\\rangle\\)"}
        </div>

        <p>from t=0 to t=2.</p>

        <div className="steps">
          <p>Differentiate:</p>

          <div className="fml">
            {"\\(\\mathbf r'(t)=\\langle3,4,0\\rangle\\)"}
          </div>

          <p>Its magnitude is</p>

          <div className="fml">
            {"\\(|\\mathbf r'(t)|=\\sqrt{3^2+4^2}=5\\)"}
          </div>

          <p>Therefore,</p>

          <div className="fml">{"\\(D=\\int_0^2 5\\,dt\\)"}</div>

          <div className="fml">{"\\(D=5[t]_0^2=10\\)"}</div>

          <p>Thus,</p>

          <div className="fml">{"\\(\\boxed{D=10}\\)"}</div>
        </div>
      </div>

      <div className="box">
        <div className="box-lbl">Key Formulas</div>

        <div className="fml">{"\\(\\mathbf v=\\mathbf r'\\)"}</div>

        <div className="fml">{"\\(\\mathbf a=\\mathbf r''\\)"}</div>

        <div className="fml">{"\\(\\text{speed}=|\\mathbf r'|\\)"}</div>

        <div className="fml">{"\\(D=\\int_a^b|\\mathbf r'(t)|dt\\)"}</div>
      </div>
    </section>
  );
}

function SectionS203() {
  return (
    <section className="section" id="s203">
      <div className="sec-badge">Topic 3</div>
      <h2 className="sec-title">TNB / Frenet–Serret Frame</h2>

      <p>
        The tangent vector tells us the direction in which a particle is moving.
        However, for a complete geometric description of a space curve, we need
        more information. The Frenet–Serret frame provides three mutually
        perpendicular unit vectors that describe the local geometry of the
        curve.
      </p>

      <div className="box def">
        <div className="box-lbl">The TNB Frame</div>

        <p>The three vectors are:</p>

        <ul>
          <li>
            <strong>T</strong> — unit tangent vector
          </li>
          <li>
            <strong>N</strong> — principal unit normal vector
          </li>
          <li>
            <strong>B</strong> — binormal vector
          </li>
        </ul>

        <p>
          Together they form the <strong>Frenet–Serret frame</strong>.
        </p>
      </div>

      <h3 className="subsec">3.1 Unit Tangent Vector</h3>

      <p>
        The velocity or derivative vector gives the tangent direction, but it is
        not necessarily a unit vector. We normalize it to obtain the unit
        tangent:
      </p>

      <div className="fml">
        {"\\(\\boxed{\\mathbf T=\\frac{\\mathbf r'}{|\\mathbf r'|}}\\)"}
      </div>

      <p>
        This formula requires
        <strong> |r'(t)| ≠ 0</strong>.
      </p>

      <h3 className="subsec">3.2 Principal Normal Vector</h3>

      <p>
        The principal normal vector describes the direction in which the tangent
        vector is turning.
      </p>

      <div className="fml">
        {"\\(\\boxed{\\mathbf N=\\frac{\\mathbf T'}{|\\mathbf T'|}}\\)"}
      </div>

      <p>Another useful relationship is</p>

      <div className="fml">
        {"\\(\\boxed{\\mathbf N=\\mathbf B\\times\\mathbf T}\\)"}
      </div>

      <p>provided the Frenet frame is defined.</p>

      <h3 className="subsec">3.3 Binormal Vector</h3>

      <p>The binormal vector is defined using the cross product:</p>

      <div className="fml">
        {"\\(\\boxed{\\mathbf B=\\mathbf T\\times\\mathbf N}\\)"}
      </div>

      <p>Because it is a cross product, B is perpendicular to both T and N.</p>

      <h3 className="subsec">3.4 Orthogonality</h3>

      <p>The three vectors satisfy</p>

      <div className="fml">{"\\(\\mathbf T\\cdot\\mathbf N=0\\)"}</div>

      <div className="fml">{"\\(\\mathbf T\\cdot\\mathbf B=0\\)"}</div>

      <div className="fml">{"\\(\\mathbf N\\cdot\\mathbf B=0\\)"}</div>

      <p>and each vector has unit length:</p>

      <div className="fml">
        {"\\(|\\mathbf T|=|\\mathbf N|=|\\mathbf B|=1\\)"}
      </div>

      <h3 className="subsec">3.5 Frenet–Serret Equations</h3>

      <p>
        The derivatives of the frame vectors are related through curvature and
        torsion.
      </p>

      <div className="fml">
        {"\\(\\boxed{\\mathbf T'=\\kappa\\mathbf N}\\)"}
      </div>

      <div className="fml">
        {"\\(\\boxed{\\mathbf N'=-\\kappa\\mathbf T+\\tau\\mathbf B}\\)"}
      </div>

      <div className="fml">{"\\(\\boxed{\\mathbf B'=-\\tau\\mathbf N}\\)"}</div>

      <p>
        These equations describe how the moving coordinate frame changes along
        the curve.
      </p>

      <div className="exm">
        <div className="box-lbl">Worked Example 1 — Find T and B</div>

        <p>Consider the circular curve</p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle\\cos t,\\sin t,0\\rangle\\)"}
        </div>

        <p>
          <strong>Step 1: Find r'(t).</strong>
        </p>

        <div className="fml">
          {"\\(\\mathbf r'(t)=\\langle-\\sin t,\\cos t,0\\rangle\\)"}
        </div>

        <p>Its magnitude is</p>

        <div className="fml">
          {"\\(|\\mathbf r'(t)|=\\sqrt{\\sin^2t+\\cos^2t}=1\\)"}
        </div>

        <p>Therefore,</p>

        <div className="fml">
          {"\\(\\mathbf T=\\langle-\\sin t,\\cos t,0\\rangle\\)"}
        </div>

        <p>
          <strong>Step 2: Find N.</strong>
        </p>

        <div className="fml">
          {"\\(\\mathbf T'=\\langle-\\cos t,-\\sin t,0\\rangle\\)"}
        </div>

        <p>Its magnitude is 1, so</p>

        <div className="fml">
          {"\\(\\mathbf N=\\langle-\\cos t,-\\sin t,0\\rangle\\)"}
        </div>

        <p>
          <strong>Step 3: Find B.</strong>
        </p>

        <div className="fml">
          {"\\(\\mathbf B=\\mathbf T\\times\\mathbf N\\)"}
        </div>

        <p>Computing the cross product gives</p>

        <div className="fml">
          {"\\(\\boxed{\\mathbf B=\\langle0,0,1\\rangle}\\)"}
        </div>
      </div>

      <div className="exm">
        <div className="box-lbl">
          Worked Example 2 — Construct the Frenet Frame
        </div>

        <p>For</p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle t,t^2,0\\rangle\\)"}
        </div>

        <p>we have</p>

        <div className="fml">
          {"\\(\\mathbf r'(t)=\\langle1,2t,0\\rangle\\)"}
        </div>

        <p>and</p>

        <div className="fml">{"\\(|\\mathbf r'(t)|=\\sqrt{1+4t^2}\\)"}</div>

        <p>Therefore,</p>

        <div className="fml">
          {
            "\\(\\boxed{\\mathbf T=\\frac{\\langle1,2t,0\\rangle}{\\sqrt{1+4t^2}}}\\)"
          }
        </div>

        <p>
          Differentiating T and normalizing T' gives the principal normal N.
          Once T and N are known, the binormal is obtained from
        </p>

        <div className="fml">
          {"\\(\\boxed{\\mathbf B=\\mathbf T\\times\\mathbf N}\\)"}
        </div>

        <p>
          The important point is that the TNB frame is determined locally by the
          geometry of the curve.
        </p>
      </div>

      <div className="box">
        <div className="box-lbl">TNB Summary</div>

        <div className="fml">
          {"\\(\\mathbf T=\\frac{\\mathbf r'}{|\\mathbf r'|}\\)"}
        </div>

        <div className="fml">
          {"\\(\\mathbf N=\\frac{\\mathbf T'}{|\\mathbf T'|}\\)"}
        </div>

        <div className="fml">
          {"\\(\\mathbf B=\\mathbf T\\times\\mathbf N\\)"}
        </div>

        <p>
          The vectors T, N, and B form a mutually perpendicular orthonormal
          frame whenever the Frenet frame is defined.
        </p>
      </div>
    </section>
  );
}

function SectionS204() {
  return (
    <section className="section" id="s204">
      <div className="sec-badge">Topic 4</div>
      <h2 className="sec-title">Curvature &amp; Torsion</h2>

      <p>
        A space curve can change direction in two fundamentally different ways.
        It can bend within a plane, and it can twist out of that plane.
        Curvature measures bending, while torsion measures twisting.
      </p>

      <h3 className="subsec">4.1 Curvature</h3>

      <p>
        Curvature measures how rapidly the unit tangent vector changes as we
        move along the curve.
      </p>

      <div className="fml">
        {"\\(\\boxed{\\kappa=\\left|\\frac{d\\mathbf T}{ds}\\right|}\\)"}
      </div>

      <p>
        Here <strong>s</strong> represents arc length.
      </p>

      <p>For a general parameter t, the most useful formula is</p>

      <div className="fml">
        {
          "\\(\\boxed{\\kappa(t)=\\frac{|\\mathbf r'(t)\\times\\mathbf r''(t)|}{|\\mathbf r'(t)|^3}}\\)"
        }
      </div>

      <p>
        This formula avoids having to explicitly calculate arc length first.
      </p>

      <h3 className="subsec">4.2 Geometric Meaning of Curvature</h3>

      <p>
        Large curvature means the curve bends sharply. Small curvature means the
        curve is relatively straight.
      </p>

      <p>For a straight line,</p>

      <div className="fml">{"\\(\\boxed{\\kappa=0}\\)"}</div>

      <p>For a circle of radius R,</p>

      <div className="fml">{"\\(\\boxed{\\kappa=\\frac1R}\\)"}</div>

      <h3 className="subsec">4.3 Osculating Circle</h3>

      <p>
        At a point on a sufficiently smooth curve, the osculating circle is the
        circle that best approximates the curve locally.
      </p>

      <p>Its radius is called the radius of curvature:</p>

      <div className="fml">{"\\(\\boxed{\\rho=\\frac1\\kappa}\\)"}</div>

      <p>
        Therefore, high curvature corresponds to a small radius of curvature,
        while low curvature corresponds to a large radius.
      </p>

      <h3 className="subsec">4.4 Torsion</h3>

      <p>
        Curvature measures bending, but it does not completely describe a
        three-dimensional curve. A curve can have nonzero curvature while
        remaining entirely within a plane.
      </p>

      <p>
        Torsion measures the rate at which the curve twists out of its
        osculating plane.
      </p>

      <div className="fml">
        {
          "\\(\\boxed{\\tau(t)=\\frac{(\\mathbf r'\\times\\mathbf r'')\\cdot\\mathbf r'''}{|\\mathbf r'\\times\\mathbf r''|^2}}\\)"
        }
      </div>

      <p>The denominator must be nonzero for this formula to be defined.</p>

      <h3 className="subsec">4.5 Interpretation of Torsion</h3>

      <p>If</p>

      <div className="fml">{"\\(\\tau=0\\)"}</div>

      <p>
        throughout an interval where the Frenet frame is defined, the curve has
        no instantaneous twisting in the Frenet sense and lies in a plane under
        the usual regularity assumptions.
      </p>

      <p>
        A straight line has
        <strong> κ=0</strong>, so the standard torsion formula is not defined
        there because its denominator vanishes.
      </p>

      <h3 className="subsec">4.6 Relationship Between Curvature and Torsion</h3>

      <p>Curvature and torsion describe different geometric properties:</p>

      <div className="box">
        <div className="box-lbl">Geometric Interpretation</div>

        <ul>
          <li>
            <strong>Curvature κ:</strong> measures bending.
          </li>
          <li>
            <strong>Torsion τ:</strong> measures twisting.
          </li>
          <li>
            <strong>κ = 0:</strong> the curve is locally straight.
          </li>
          <li>
            <strong>τ = 0:</strong> indicates no Frenet twisting and, under
            standard regularity conditions, a planar curve.
          </li>
        </ul>
      </div>

      <div className="exm">
        <div className="box-lbl">Worked Example 1 — Curvature of a Circle</div>

        <p>Consider the circle</p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle R\\cos t,R\\sin t,0\\rangle\\)"}
        </div>

        <p>Differentiate:</p>

        <div className="fml">
          {"\\(\\mathbf r'(t)=\\langle-R\\sin t,R\\cos t,0\\rangle\\)"}
        </div>

        <div className="fml">
          {"\\(\\mathbf r''(t)=\\langle-R\\cos t,-R\\sin t,0\\rangle\\)"}
        </div>

        <p>The cross product has magnitude</p>

        <div className="fml">
          {"\\(|\\mathbf r'\\times\\mathbf r''|=R^2\\)"}
        </div>

        <p>while</p>

        <div className="fml">{"\\(|\\mathbf r'|=R\\)"}</div>

        <p>Therefore,</p>

        <div className="fml">{"\\(\\kappa=\\frac{R^2}{R^3}=\\frac1R\\)"}</div>

        <p>Hence,</p>

        <div className="fml">{"\\(\\boxed{\\kappa=\\frac1R}\\)"}</div>
      </div>

      <div className="exm">
        <div className="box-lbl">
          Worked Example 2 — Curvature of a Space Curve
        </div>

        <p>Find the curvature of</p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle t,t^2,t^3\\rangle\\)"}
        </div>

        <p>
          <strong>Step 1: Calculate derivatives.</strong>
        </p>

        <div className="fml">
          {"\\(\\mathbf r'(t)=\\langle1,2t,3t^2\\rangle\\)"}
        </div>

        <div className="fml">
          {"\\(\\mathbf r''(t)=\\langle0,2,6t\\rangle\\)"}
        </div>

        <p>
          <strong>Step 2: Calculate the cross product.</strong>
        </p>

        <div className="fml">
          {"\\(\\mathbf r'\\times\\mathbf r''=\\langle6t^2,-6t,2\\rangle\\)"}
        </div>

        <p>Therefore,</p>

        <div className="fml">
          {"\\(|\\mathbf r'\\times\\mathbf r''|=\\sqrt{36t^4+36t^2+4}\\)"}
        </div>

        <p>Factor:</p>

        <div className="fml">
          {"\\(|\\mathbf r'\\times\\mathbf r''|=2\\sqrt{9t^4+9t^2+1}\\)"}
        </div>

        <p>Also,</p>

        <div className="fml">{"\\(|\\mathbf r'|=\\sqrt{1+4t^2+9t^4}\\)"}</div>

        <p>Hence,</p>

        <div className="fml">
          {
            "\\(\\boxed{\\kappa(t)=\\frac{2\\sqrt{9t^4+9t^2+1}}{(1+4t^2+9t^4)^{3/2}}}\\)"
          }
        </div>
      </div>

      <div className="exm">
        <div className="box-lbl">Worked Example 3 — Torsion</div>

        <p>Consider</p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle t,t^2,t^3\\rangle\\)"}
        </div>

        <p>We already have</p>

        <div className="fml">
          {"\\(\\mathbf r'=\\langle1,2t,3t^2\\rangle\\)"}
        </div>

        <div className="fml">{"\\(\\mathbf r''=\\langle0,2,6t\\rangle\\)"}</div>

        <p>and</p>

        <div className="fml">{"\\(\\mathbf r'''=\\langle0,0,6\\rangle\\)"}</div>

        <p>The cross product is</p>

        <div className="fml">
          {"\\(\\mathbf r'\\times\\mathbf r''=\\langle6t^2,-6t,2\\rangle\\)"}
        </div>

        <p>Now calculate the scalar triple product:</p>

        <div className="fml">
          {"\\((\\mathbf r'\\times\\mathbf r'')\\cdot\\mathbf r'''=36\\)"}
        </div>

        <p>The denominator is</p>

        <div className="fml">
          {"\\(|\\mathbf r'\\times\\mathbf r''|^2=36t^4+36t^2+4\\)"}
        </div>

        <p>Therefore,</p>

        <div className="fml">
          {"\\(\\boxed{\\tau(t)=\\frac{36}{36t^4+36t^2+4}}\\)"}
        </div>

        <p>which can be simplified to</p>

        <div className="fml">
          {"\\(\\boxed{\\tau(t)=\\frac9{9t^4+9t^2+1}}\\)"}
        </div>
      </div>

      <div className="exm">
        <div className="box-lbl">Worked Example 4 — Torsion at a Point</div>

        <p>For</p>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle t,t^2,t^3\\rangle\\)"}
        </div>

        <p>find the torsion at t=0.</p>

        <p>At t=0:</p>

        <div className="fml">
          {"\\(\\mathbf r'(0)=\\langle1,0,0\\rangle\\)"}
        </div>

        <div className="fml">
          {"\\(\\mathbf r''(0)=\\langle0,2,0\\rangle\\)"}
        </div>

        <div className="fml">
          {"\\(\\mathbf r'''(0)=\\langle0,0,6\\rangle\\)"}
        </div>

        <p>Then</p>

        <div className="fml">
          {"\\(\\mathbf r'(0)\\times\\mathbf r''(0)=\\langle0,0,2\\rangle\\)"}
        </div>

        <p>and</p>

        <div className="fml">
          {"\\((\\mathbf r'\\times\\mathbf r'')\\cdot\\mathbf r'''=12\\)"}
        </div>

        <p>Also,</p>

        <div className="fml">
          {"\\(|\\mathbf r'\\times\\mathbf r''|^2=4\\)"}
        </div>

        <p>Therefore,</p>

        <div className="fml">{"\\(\\tau(0)=\\frac{12}{4}=3\\)"}</div>

        <p>Hence,</p>

        <div className="fml">{"\\(\\boxed{\\tau(0)=3}\\)"}</div>
      </div>

      <div className="box">
        <div className="box-lbl">Part 1 Formula Sheet</div>

        <div className="fml">
          {"\\(\\mathbf r(t)=\\langle x(t),y(t),z(t)\\rangle\\)"}
        </div>

        <div className="fml">{"\\(\\mathbf v=\\mathbf r'\\)"}</div>

        <div className="fml">{"\\(\\mathbf a=\\mathbf r''\\)"}</div>

        <div className="fml">{"\\(\\text{speed}=|\\mathbf r'|\\)"}</div>

        <div className="fml">
          {"\\(\\mathbf T=\\frac{\\mathbf r'}{|\\mathbf r'|}\\)"}
        </div>

        <div className="fml">
          {"\\(\\mathbf N=\\frac{\\mathbf T'}{|\\mathbf T'|}\\)"}
        </div>

        <div className="fml">
          {"\\(\\mathbf B=\\mathbf T\\times\\mathbf N\\)"}
        </div>

        <div className="fml">
          {
            "\\(\\kappa=\\frac{|\\mathbf r'\\times\\mathbf r''|}{|\\mathbf r'|^3}\\)"
          }
        </div>

        <div className="fml">{"\\(\\rho=\\frac1\\kappa\\)"}</div>

        <div className="fml">
          {
            "\\(\\tau=\\frac{(\\mathbf r'\\times\\mathbf r'')\\cdot\\mathbf r'''}{|\\mathbf r'\\times\\mathbf r''|^2}\\)"
          }
        </div>

        <div className="fml">{"\\(\\mathbf T'=\\kappa\\mathbf N\\)"}</div>

        <div className="fml">
          {"\\(\\mathbf N'=-\\kappa\\mathbf T+\\tau\\mathbf B\\)"}
        </div>

        <div className="fml">{"\\(\\mathbf B'=-\\tau\\mathbf N\\)"}</div>
      </div>
    </section>
  );
}
/* =========================================================
   PART 2 — ADVANCED MULTIVARIABLE MAPPINGS
   ========================================================= */

/* =========================================================
   TOPIC 5 — JACOBIAN & CHANGE OF VARIABLES
   ========================================================= */

function SectionS205() {
  return (
    <section className="section" id="s205">
      <div className="sec-badge">Topic 5</div>

      <h2 className="sec-title">Jacobian &amp; Change of Variables</h2>

      <p>
        A change of variables replaces one coordinate system with another. In
        multivariable calculus, this is useful when a complicated region or
        integrand becomes simpler after introducing new variables.
      </p>

      <div className="box def">
        <div className="box-lbl">Definition — Jacobian</div>

        <p>Suppose</p>

        <div className="fml">{"x = x(u,v),   y = y(u,v)"}</div>

        <p>
          The Jacobian of the transformation from
          <strong> (u,v) </strong>
          to
          <strong> (x,y) </strong>
          is
        </p>

        <div className="fml">
          {"∂(x,y)/∂(u,v) = | xᵤ  xᵥ |"}
          <br />
          {"                 | yᵤ  yᵥ |"}
        </div>

        <p>Therefore,</p>

        <div className="fml">{"J = xᵤyᵥ − xᵥyᵤ"}</div>
      </div>

      <div className="box note">
        <div className="box-lbl">Important Interpretation</div>

        <p>
          The absolute value of the Jacobian measures the local area scaling
          produced by the transformation.
        </p>

        <div className="fml">{"dA = |∂(x,y)/∂(u,v)| du dv"}</div>

        <p>
          If the transformation stretches a small region by a factor of 5, then
          its Jacobian magnitude is locally 5.
        </p>
      </div>

      <div className="box def">
        <div className="box-lbl">Change of Variables in Double Integrals</div>

        <p>
          If a transformation maps a region R in the uv-plane to a region D in
          the xy-plane, then
        </p>

        <div className="fml">
          {"∬ᴰ f(x,y) dA"}
          <br />
          {"= ∬ᴿ f(x(u,v),y(u,v)) |J| du dv"}
        </div>
      </div>

      <div className="box note">
        <div className="box-lbl">Why the Absolute Value?</div>

        <p>
          The Jacobian can be negative when the transformation reverses
          orientation. Area itself must remain positive, so we use
        </p>

        <div className="fml">{"|J|"}</div>

        <p>in ordinary area integrals.</p>
      </div>

      <div className="box def">
        <div className="box-lbl">
          Polar Coordinates as a Change of Variables
        </div>

        <p>The standard polar transformation is</p>

        <div className="fml">
          {"x = r cos θ"}
          <br />
          {"y = r sin θ"}
        </div>

        <p>Its Jacobian is</p>

        <div className="fml">{"∂(x,y)/∂(r,θ) = r"}</div>

        <p>Therefore,</p>

        <div className="fml">{"dA = r dr dθ"}</div>
      </div>

      <div className="exm">
        <div className="box-lbl">Worked Example 1 — Finding a Jacobian</div>

        <p>Find the Jacobian for</p>

        <div className="fml">{"x = u² − v²,     y = 2uv"}</div>

        <div className="steps">
          <div className="subsec">
            <strong>Step 1: Find the partial derivatives</strong>

            <div className="fml">
              {"xᵤ = 2u"}
              <br />
              {"xᵥ = −2v"}
              <br />
              {"yᵤ = 2v"}
              <br />
              {"yᵥ = 2u"}
            </div>
          </div>

          <div className="subsec">
            <strong>Step 2: Use the determinant</strong>

            <div className="fml">{"J = xᵤyᵥ − xᵥyᵤ"}</div>

            <div className="fml">{"J = (2u)(2u) − (−2v)(2v)"}</div>
          </div>

          <div className="subsec">
            <strong>Step 3: Simplify</strong>

            <div className="fml">{"J = 4u² + 4v²"}</div>

            <div className="fml">{"J = 4(u² + v²)"}</div>
          </div>
        </div>

        <p>Therefore,</p>

        <div className="fml">{"∂(x,y)/∂(u,v) = 4(u² + v²)"}</div>
      </div>

      <div className="exm">
        <div className="box-lbl">Worked Example 2 — Polar Coordinates</div>

        <p>Evaluate</p>

        <div className="fml">{"∬ᴰ (x² + y²) dA"}</div>

        <p>over the unit disk</p>

        <div className="fml">{"x² + y² ≤ 1"}</div>

        <div className="steps">
          <div className="subsec">
            <strong>Step 1: Convert the integrand</strong>

            <div className="fml">{"x² + y² = r²"}</div>
          </div>

          <div className="subsec">
            <strong>Step 2: Convert the area element</strong>

            <div className="fml">{"dA = r dr dθ"}</div>
          </div>

          <div className="subsec">
            <strong>Step 3: Convert the region</strong>

            <div className="fml">
              {"0 ≤ r ≤ 1"}
              <br />
              {"0 ≤ θ ≤ 2π"}
            </div>
          </div>

          <div className="subsec">
            <strong>Step 4: Set up the integral</strong>

            <div className="fml">{"∫₀²π ∫₀¹ r² · r dr dθ"}</div>

            <div className="fml">{"= ∫₀²π ∫₀¹ r³ dr dθ"}</div>
          </div>

          <div className="subsec">
            <strong>Step 5: Integrate</strong>

            <div className="fml">{"∫₀¹ r³ dr = 1/4"}</div>

            <div className="fml">{"∫₀²π 1/4 dθ = π/2"}</div>
          </div>
        </div>

        <div className="fml">{"Answer = π/2"}</div>
      </div>

      <div className="box note">
        <div className="box-lbl">Common Mistakes</div>

        <ul>
          <li>Forgetting the absolute value of the Jacobian.</li>
          <li>Using the wrong order in the determinant.</li>
          <li>Changing x and y but forgetting to change dA.</li>
          <li>Using incorrect bounds after transformation.</li>
          <li>Confusing the forward and inverse Jacobians.</li>
        </ul>
      </div>
    </section>
  );
}

/* =========================================================
   TOPIC 6 — SURFACE / FLUX INTEGRALS
   ========================================================= */

function SectionS206() {
  return (
    <section className="section" id="s206">
      <div className="sec-badge">Topic 6</div>

      <h2 className="sec-title">Surface / Flux Integrals</h2>

      <p>
        Surface integrals extend ordinary double integration to curved surfaces
        in three-dimensional space. They are used to calculate quantities such
        as surface area, mass distributed over a surface, and flux through a
        surface.
      </p>

      <div className="box def">
        <div className="box-lbl">Definition — Parametric Surface</div>

        <p>A surface can be described parametrically by</p>

        <div className="fml">{"r(u,v) = ⟨x(u,v), y(u,v), z(u,v)⟩"}</div>

        <p>The two tangent vectors are</p>

        <div className="fml">
          {"rᵤ = ∂r/∂u"}
          <br />
          {"rᵥ = ∂r/∂v"}
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">Surface Area Element</div>

        <p>
          The cross product of the tangent vectors gives a vector normal to the
          surface:
        </p>

        <div className="fml">{"rᵤ × rᵥ"}</div>

        <p>Therefore the surface area element is</p>

        <div className="fml">{"dS = |rᵤ × rᵥ| du dv"}</div>
      </div>

      <div className="box def">
        <div className="box-lbl">Scalar Surface Integral</div>

        <p>If f is a scalar function defined on a surface S, then</p>

        <div className="fml">{"∬ₛ f dS"}</div>

        <p>becomes</p>

        <div className="fml">{"∬ᴿ f(r(u,v)) |rᵤ × rᵥ| du dv"}</div>
      </div>

      <div className="box def">
        <div className="box-lbl">Flux Integral</div>

        <p>
          Let F be a vector field. The flux of F through an oriented surface S
          is
        </p>

        <div className="fml">{"∬ₛ F · n dS"}</div>

        <p>For a parametrized surface, this can be written as</p>

        <div className="fml">{"∬ᴿ F(r(u,v)) · (rᵤ × rᵥ) du dv"}</div>

        <p>The direction of the normal depends on the chosen orientation.</p>
      </div>

      <div className="box note">
        <div className="box-lbl">Orientation</div>

        <p>Reversing the order of the cross product changes the direction:</p>

        <div className="fml">{"rᵥ × rᵤ = −(rᵤ × rᵥ)"}</div>

        <p>
          Consequently, the sign of a flux integral changes when the surface
          orientation is reversed.
        </p>
      </div>

      <div className="exm">
        <div className="box-lbl">Worked Example 1 — Surface Area</div>

        <p>Find the area of the plane</p>

        <div className="fml">{"z = x + y"}</div>

        <p>over the square</p>

        <div className="fml">{"0 ≤ x ≤ 1,     0 ≤ y ≤ 1"}</div>

        <div className="steps">
          <div className="subsec">
            <strong>Step 1: Parametrize the surface</strong>

            <div className="fml">{"r(x,y) = ⟨x, y, x+y⟩"}</div>
          </div>

          <div className="subsec">
            <strong>Step 2: Find tangent vectors</strong>

            <div className="fml">
              {"rₓ = ⟨1,0,1⟩"}
              <br />
              {"rᵧ = ⟨0,1,1⟩"}
            </div>
          </div>

          <div className="subsec">
            <strong>Step 3: Compute the cross product</strong>

            <div className="fml">{"rₓ × rᵧ = ⟨−1,−1,1⟩"}</div>
          </div>

          <div className="subsec">
            <strong>Step 4: Find its magnitude</strong>

            <div className="fml">{"|rₓ × rᵧ| = √(1+1+1) = √3"}</div>
          </div>

          <div className="subsec">
            <strong>Step 5: Integrate</strong>

            <div className="fml">{"Area = ∫₀¹∫₀¹ √3 dx dy"}</div>

            <div className="fml">{"Area = √3"}</div>
          </div>
        </div>
      </div>

      <div className="exm">
        <div className="box-lbl">Worked Example 2 — Flux Through a Plane</div>

        <p>Let</p>

        <div className="fml">{"F = ⟨x,y,z⟩"}</div>

        <p>and let the surface be</p>

        <div className="fml">{"r(u,v) = ⟨u,v,u+v⟩"}</div>

        <p>for</p>

        <div className="fml">{"0 ≤ u ≤ 1,     0 ≤ v ≤ 1"}</div>

        <div className="steps">
          <div className="subsec">
            <strong>Step 1: Find tangent vectors</strong>

            <div className="fml">
              {"rᵤ = ⟨1,0,1⟩"}
              <br />
              {"rᵥ = ⟨0,1,1⟩"}
            </div>
          </div>

          <div className="subsec">
            <strong>Step 2: Find the oriented normal vector</strong>

            <div className="fml">{"rᵤ × rᵥ = ⟨−1,−1,1⟩"}</div>
          </div>

          <div className="subsec">
            <strong>Step 3: Substitute the surface into F</strong>

            <div className="fml">{"F(r(u,v)) = ⟨u,v,u+v⟩"}</div>
          </div>

          <div className="subsec">
            <strong>Step 4: Take the dot product</strong>

            <div className="fml">{"⟨u,v,u+v⟩ · ⟨−1,−1,1⟩"}</div>

            <div className="fml">{"= −u − v + u + v"}</div>

            <div className="fml">{"= 0"}</div>
          </div>

          <div className="subsec">
            <strong>Step 5: Integrate</strong>

            <div className="fml">{"Flux = ∫₀¹∫₀¹ 0 du dv"}</div>

            <div className="fml">{"Flux = 0"}</div>
          </div>
        </div>
      </div>

      <div className="box note">
        <div className="box-lbl">Surface Integral Checklist</div>

        <ol>
          <li>Parametrize the surface.</li>
          <li>Calculate both tangent vectors.</li>
          <li>Compute the cross product.</li>
          <li>Check the required orientation.</li>
          <li>Substitute the parametrization into the integrand.</li>
          <li>Convert the bounds.</li>
          <li>Evaluate the resulting double integral.</li>
        </ol>
      </div>
    </section>
  );
}

/* =========================================================
   TOPIC 7 — GLOBAL EXTREMA ON BOUNDED DOMAINS
   ========================================================= */

function SectionS207() {
  return (
    <section className="section" id="s207">
      <div className="sec-badge">Topic 7</div>

      <h2 className="sec-title">Global Extrema on Bounded Domains</h2>

      <p>
        Global extrema problems ask for the absolute maximum and minimum values
        of a function over an entire region. Unlike local extrema, global
        extrema require us to examine both interior critical points and the
        boundary of the domain.
      </p>

      <div className="box def">
        <div className="box-lbl">Definition — Global Maximum</div>

        <p>
          A function f has a global maximum at a point
          <strong> (a,b) </strong>
          in a domain D if
        </p>

        <div className="fml">{"f(a,b) ≥ f(x,y)"}</div>

        <p>
          for every point
          <strong> (x,y) </strong>
          in D.
        </p>
      </div>

      <div className="box def">
        <div className="box-lbl">Definition — Global Minimum</div>

        <p>
          A function f has a global minimum at
          <strong> (a,b) </strong>
          if
        </p>

        <div className="fml">{"f(a,b) ≤ f(x,y)"}</div>

        <p>for every point in the domain.</p>
      </div>

      <div className="box def">
        <div className="box-lbl">Extreme Value Theorem</div>

        <p>
          If f is continuous on a closed and bounded region D, then f must
          attain both a global maximum and a global minimum on D.
        </p>

        <p>
          This is one of the most important facts for global optimization on
          compact regions.
        </p>
      </div>

      <div className="box note">
        <div className="box-lbl">Critical Points</div>

        <p>Interior critical points occur where</p>

        <div className="fml">
          {"fₓ = 0"}
          <br />
          {"fᵧ = 0"}
        </div>

        <p>or where one or both partial derivatives fail to exist.</p>
      </div>

      <div className="box def">
        <div className="box-lbl">Global Extrema Procedure</div>

        <ol>
          <li>Find all interior critical points.</li>
          <li>Describe the boundary of the region.</li>
          <li>Restrict f to each boundary piece.</li>
          <li>Find critical points along the boundary.</li>
          <li>Evaluate f at every candidate point.</li>
          <li>Compare all resulting values.</li>
        </ol>
      </div>

      <div className="box note">
        <div className="box-lbl">Interior vs Boundary</div>

        <p>A common mistake is to solve only</p>

        <div className="fml">{"fₓ = fᵧ = 0"}</div>

        <p>
          and stop. This finds only interior candidates. A global maximum or
          minimum can occur on the boundary even when there are no interior
          critical points.
        </p>
      </div>

      <div className="exm">
        <div className="box-lbl">
          Worked Example 1 — Global Extrema on a Rectangle
        </div>

        <p>Find the global maximum and minimum of</p>

        <div className="fml">{"f(x,y) = x² + y² − 2x − 4y"}</div>

        <p>on</p>

        <div className="fml">{"0 ≤ x ≤ 2,     0 ≤ y ≤ 3"}</div>

        <div className="steps">
          <div className="subsec">
            <strong>Step 1: Find interior critical points</strong>

            <div className="fml">
              {"fₓ = 2x − 2"}
              <br />
              {"fᵧ = 2y − 4"}
            </div>
          </div>

          <div className="subsec">
            <strong>Step 2: Set both equal to zero</strong>

            <div className="fml">
              {"2x − 2 = 0  →  x = 1"}
              <br />
              {"2y − 4 = 0  →  y = 2"}
            </div>

            <p>Therefore the interior critical point is</p>

            <div className="fml">{"(1,2)"}</div>
          </div>

          <div className="subsec">
            <strong>Step 3: Evaluate the interior point</strong>

            <div className="fml">{"f(1,2) = 1 + 4 − 2 − 8 = −5"}</div>
          </div>

          <div className="subsec">
            <strong>Step 4: Check the boundary</strong>

            <p>The rectangle has four boundary edges.</p>

            <p>
              <strong>Edge 1: x = 0</strong>
            </p>

            <div className="fml">{"f(0,y) = y² − 4y"}</div>

            <p>Its derivative is</p>

            <div className="fml">{"2y − 4 = 0  →  y = 2"}</div>

            <p>So</p>

            <div className="fml">{"f(0,2) = −4"}</div>

            <p>
              <strong>Edge 2: x = 2</strong>
            </p>

            <div className="fml">{"f(2,y) = y² − 4y"}</div>

            <p>The critical point is again y = 2:</p>

            <div className="fml">{"f(2,2) = −4"}</div>

            <p>
              <strong>Edge 3: y = 0</strong>
            </p>

            <div className="fml">{"f(x,0) = x² − 2x"}</div>

            <p>Its derivative gives</p>

            <div className="fml">{"2x − 2 = 0  →  x = 1"}</div>

            <div className="fml">{"f(1,0) = −1"}</div>

            <p>
              <strong>Edge 4: y = 3</strong>
            </p>

            <div className="fml">{"f(x,3) = x² − 2x − 3"}</div>

            <p>Again x = 1:</p>

            <div className="fml">{"f(1,3) = −4"}</div>
          </div>

          <div className="subsec">
            <strong>Step 5: Check the corners</strong>

            <div className="fml">
              {"f(0,0) = 0"}
              <br />
              {"f(2,0) = 0"}
              <br />
              {"f(0,3) = −3"}
              <br />
              {"f(2,3) = −3"}
            </div>
          </div>

          <div className="subsec">
            <strong>Step 6: Compare all values</strong>

            <p>The smallest value is</p>

            <div className="fml">{"−5"}</div>

            <p>occurring at</p>

            <div className="fml">{"(1,2)"}</div>

            <p>The largest value is</p>

            <div className="fml">{"0"}</div>

            <p>occurring at the corners</p>

            <div className="fml">{"(0,0) and (2,0)"}</div>
          </div>
        </div>
      </div>

      <div className="exm">
        <div className="box-lbl">
          Worked Example 2 — Global Extrema on a Disk
        </div>

        <p>Find the global maximum and minimum of</p>

        <div className="fml">{"f(x,y) = x² + y² − 2x"}</div>

        <p>on the unit disk</p>

        <div className="fml">{"x² + y² ≤ 1"}</div>

        <div className="steps">
          <div className="subsec">
            <strong>Step 1: Find interior critical points</strong>

            <div className="fml">
              {"fₓ = 2x − 2"}
              <br />
              {"fᵧ = 2y"}
            </div>

            <p>Set both equal to zero:</p>

            <div className="fml">
              {"2x − 2 = 0  →  x = 1"}
              <br />
              {"2y = 0  →  y = 0"}
            </div>

            <p>Thus the interior candidate is</p>

            <div className="fml">{"(1,0)"}</div>

            <p>Its function value is</p>

            <div className="fml">{"f(1,0) = 1 − 2 = −1"}</div>
          </div>

          <div className="subsec">
            <strong>Step 2: Check the boundary</strong>

            <p>On the boundary,</p>

            <div className="fml">{"x² + y² = 1"}</div>

            <p>Therefore,</p>

            <div className="fml">{"f(x,y) = 1 − 2x"}</div>
          </div>

          <div className="subsec">
            <strong>
              Step 3: Determine the largest and smallest boundary values
            </strong>

            <p>On the unit circle,</p>

            <div className="fml">{"−1 ≤ x ≤ 1"}</div>

            <p>Therefore,</p>

            <div className="fml">
              {"1 − 2(1) = −1"}
              <br />
              {"1 − 2(−1) = 3"}
            </div>
          </div>

          <div className="subsec">
            <strong>Step 4: Compare candidates</strong>

            <p>The minimum value is</p>

            <div className="fml">{"−1"}</div>

            <p>at</p>

            <div className="fml">{"(1,0)"}</div>

            <p>The maximum value is</p>

            <div className="fml">{"3"}</div>

            <p>at</p>

            <div className="fml">{"(−1,0)"}</div>
          </div>
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">Quick Decision Rule</div>

        <p>For a continuous function on a closed and bounded region:</p>

        <div className="fml">
          {"Global candidates = interior critical points + boundary candidates"}
        </div>

        <p>Evaluate the function at every candidate and compare the values.</p>
      </div>

      <div className="box note">
        <div className="box-lbl">Common Mistakes</div>

        <ul>
          <li>Checking only interior critical points.</li>
          <li>Forgetting the corners of a rectangular region.</li>
          <li>Failing to analyze every boundary component.</li>
          <li>Comparing coordinates instead of function values.</li>
          <li>
            Calling a local extremum a global extremum without checking the
            entire domain.
          </li>
        </ul>
      </div>
    </section>
  );
}

/* =========================================================
   PART 1 TABLE OF CONTENTS
   ========================================================= */
function GuideSidebarPart1() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Space Curves · Part 1</div>
      </div>

      <div className="sb-group">Sections</div>

      <a className="sb-link" href="#s201">
        Vector Position Functions
      </a>

      <a className="sb-link" href="#s202">
        Velocity, Speed &amp; Acceleration
      </a>

      <a className="sb-link" href="#s203">
        TNB / Frenet–Serret Frame
      </a>

      <a className="sb-link" href="#s204">
        Curvature &amp; Torsion
      </a>

      <div className="sb-group">Reference</div>

      <a className="sb-link" href="#summary1">
        <span className="sn">—</span>
        Key Formulas
      </a>
      <div className="sb-group">Guide Parts</div>

      <a className="sb-link" href="/space-curves/2">
        Part 2 — Advanced Multivariable Mappings
      </a>
    </nav>
  );
}
function GuideSidebarPart2() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Space Curves · Part 2</div>
      </div>

      <div className="sb-group">Sections</div>

      <a className="sb-link" href="#s205">
        Jacobian &amp; Change of Variables
      </a>

      <a className="sb-link" href="#s206">
        Surface / Flux Integrals
      </a>

      <a className="sb-link" href="#s207">
        Global Extrema on Bounded Domains
      </a>

      <div className="sb-group">Reference</div>

      <a className="sb-link" href="#summary2">
        <span className="sn">—</span>
        Key Formulas
      </a>
      <div className="sb-group">Guide Parts</div>

      <a className="sb-link" href="/space-curves/1">
        Part 1 — Space Curves
      </a>
    </nav>
  );
}
function GuideHeaderPart1() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">
        Multivariable Calculus Study Guide · Part 1 of 2
      </div>

      <h1 className="ch-title">
        Space Curves &amp; Advanced Multivariable Mappings
      </h1>

      <p className="ch-sub">
        Vector Position Functions, Velocity, TNB / Frenet–Serret Frame,
        Curvature &amp; Torsion
      </p>

      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart1() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 1 of 2</div>

      <div className="toc-grid">
        <a className="toc-a" href="#s201">
          Vector Position Functions
        </a>

        <a className="toc-a" href="#s202">
          Velocity, Speed &amp; Acceleration
        </a>

        <a className="toc-a" href="#s203">
          TNB / Frenet–Serret Frame
        </a>

        <a className="toc-a" href="#s204">
          Curvature &amp; Torsion
        </a>

        <a className="toc-a" href="#summary1">
          <span className="tn">—</span>
          Key Formulas
        </a>
      </div>
    </nav>
  );
}

/* =========================================================
   PART 1 SUMMARY
   ========================================================= */

function SectionSummaryPart1() {
  return (
    <section id="summary1" className="section">
      <div className="sec-badge">Reference</div>

      <h2 className="sec-title">Part 1 Key Formulas</h2>

      <div className="box def">
        <div className="box-lbl">Position, Velocity &amp; Acceleration</div>

        <div className="fml">
          {"r(t) = ⟨x(t), y(t), z(t)⟩"}
          <br />
          {"v(t) = r'(t)"}
          <br />
          {"a(t) = r''(t)"}
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">Speed</div>

        <div className="fml">{"speed = |v(t)| = |r'(t)|"}</div>
      </div>

      <div className="box def">
        <div className="box-lbl">Unit Tangent Vector</div>

        <div className="fml">{"T = r'(t) / |r'(t)|"}</div>
      </div>

      <div className="box def">
        <div className="box-lbl">Principal Normal Vector</div>

        <div className="fml">{"N = T'(t) / |T'(t)|"}</div>
      </div>

      <div className="box def">
        <div className="box-lbl">Binormal Vector</div>

        <div className="fml">{"B = T × N"}</div>
      </div>

      <div className="box def">
        <div className="box-lbl">Curvature</div>

        <div className="fml">{"κ = |r'(t) × r''(t)| / |r'(t)|³"}</div>
      </div>

      <div className="box def">
        <div className="box-lbl">Torsion</div>

        <div className="fml">
          {"τ = ((r'(t) × r''(t)) · r'''(t)) / |r'(t) × r''(t)|²"}
        </div>
      </div>

      <div className="box note">
        <div className="box-lbl">Frenet–Serret Formulas</div>

        <div className="fml">
          {"T' = κ |r'| N"}
          <br />
          {"N' = −κ |r'| T + τ |r'| B"}
          <br />
          {"B' = −τ |r'| N"}
        </div>
      </div>
    </section>
  );
}
/* =========================================================
   PART 2 TABLE OF CONTENTS
   ========================================================= */

function GuideHeaderPart2() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">
        Multivariable Calculus Study Guide · Part 2 of 2
      </div>

      <h1 className="ch-title">
        Space Curves &amp; Advanced Multivariable Mappings
      </h1>

      <p className="ch-sub">
        Jacobian &amp; Change of Variables, Surface / Flux Integrals, and Global
        Extrema on Bounded Domains
      </p>

      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContentsPart2() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents — Part 2 of 2</div>

      <div className="toc-grid">
        <a className="toc-a" href="#s205">
          Jacobian &amp; Change of Variables
        </a>

        <a className="toc-a" href="#s206">
          Surface / Flux Integrals
        </a>

        <a className="toc-a" href="#s207">
          Global Extrema on Bounded Domains
        </a>

        <a className="toc-a" href="#summary2">
          <span className="tn">—</span>
          Key Formulas
        </a>
      </div>
    </nav>
  );
}

/* =========================================================
   PART 2 SUMMARY
   ========================================================= */

function SectionSummaryPart2() {
  return (
    <section id="summary2" className="section">
      <div className="sec-badge">Reference</div>

      <h2 className="sec-title">Part 2 Key Formulas</h2>

      <div className="box def">
        <div className="box-lbl">Jacobian</div>

        <div className="fml">{"J = ∂(x,y)/∂(u,v) = xᵤyᵥ − xᵥyᵤ"}</div>

        <div className="fml">{"dA = |J| du dv"}</div>
      </div>

      <div className="box def">
        <div className="box-lbl">Polar Coordinates</div>

        <div className="fml">
          {"x = r cos θ"}
          <br />
          {"y = r sin θ"}
          <br />
          {"dA = r dr dθ"}
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">Surface Area</div>

        <div className="fml">{"dS = |rᵤ × rᵥ| du dv"}</div>
      </div>

      <div className="box def">
        <div className="box-lbl">Scalar Surface Integral</div>

        <div className="fml">
          {"∬ₛ f dS"}
          <br />
          {"= ∬ᴿ f(r(u,v)) |rᵤ × rᵥ| du dv"}
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">Flux Integral</div>

        <div className="fml">
          {"∬ₛ F · n dS"}
          <br />
          {"= ∬ᴿ F(r(u,v)) · (rᵤ × rᵥ) du dv"}
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">Global Extrema</div>

        <p>For a continuous function on a closed and bounded domain:</p>

        <div className="fml">
          {"Global candidates = interior critical points + boundary candidates"}
        </div>

        <p>
          Always evaluate the function at every candidate and compare the
          resulting values.
        </p>
      </div>
    </section>
  );
}
function SpaceCurvesContent({ part = 1 }) {
  if (part === 1) {
    return (
      <>
        <GuideSidebarPart1 />
        <main className="main">
          <GuideHeaderPart1 />

          <TableOfContentsPart1 />

          <Divider />

          <SectionS201 />

          <GuideMcqSection
            id="mcq201"
            badge="Practice"
            title="Vector Position Functions — Quiz"
            scoreId="score201"
            section="201"
            questions={MV_SC_201_QUIZ}
          />

          <Divider />

          <SectionS202 />

          <GuideMcqSection
            id="mcq202"
            badge="Practice"
            title="Velocity, Speed & Acceleration — Quiz"
            scoreId="score202"
            section="202"
            questions={MV_SC_202_QUIZ}
          />

          <Divider />

          <SectionS203 />

          <GuideMcqSection
            id="mcq203"
            badge="Practice"
            title="TNB / Frenet–Serret Frame — Quiz"
            scoreId="score203"
            section="203"
            questions={MV_SC_203_QUIZ}
          />

          <Divider />

          <SectionS204 />

          <GuideMcqSection
            id="mcq204"
            badge="Practice"
            title="Curvature & Torsion — Quiz"
            scoreId="score204"
            section="204"
            questions={MV_SC_204_QUIZ}
          />

          <Divider />

          <SectionSummaryPart1 />
        </main>
      </>
    );
  }

  return (
    <>
      <GuideSidebarPart2 />
      <main className="main">
        <GuideHeaderPart2 />

        <TableOfContentsPart2 />

        <Divider />

        <SectionS205 />

        <GuideMcqSection
          id="mcq205"
          badge="Practice"
          title="Jacobian & Change of Variables — Quiz"
          scoreId="score205"
          section="205"
          questions={MV_SC_205_QUIZ}
        />

        <Divider />

        <SectionS206 />

        <GuideMcqSection
          id="mcq206"
          badge="Practice"
          title="Surface / Flux Integrals — Quiz"
          scoreId="score206"
          section="206"
          questions={MV_SC_206_QUIZ}
        />

        <Divider />

        <SectionS207 />

        <GuideMcqSection
          id="mcq207"
          badge="Practice"
          title="Global Extrema on Bounded Domains — Quiz"
          scoreId="score207"
          section="207"
          questions={MV_SC_207_QUIZ}
        />

        <Divider />

        <SectionSummaryPart2 />
      </main>
    </>
  );
}
function SpaceCurvesGuide({ part = 1 }) {
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title={`Space Curves & Advanced Multivariable Mappings — Part ${part}`}
    >
      <SpaceCurvesContent part={part} />
    </StudyGuideShell>
  );
}

export default SpaceCurvesGuide;
