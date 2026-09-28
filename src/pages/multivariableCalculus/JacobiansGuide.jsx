import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { MV_JACOBIANS_QUIZ } from "../../data/mvCoordinateTransformationsQuiz";
import "./PartialDerivativesGuide.css";
import { RealLifeUse } from "../calculus/CalcBlocks";

function Divider() {
  return <hr className="divider" />;
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>Operational Blueprint:</strong>{" "}
        {"Jacobians provide the precise scaling rule needed when multivariable calculus is expressed in a new coordinate system. A change of variables can turn a complicated region into a simple rectangle, disk, cylinder, or box, but the area or volume element must change with it. This guide develops the Jacobian determinant from first principles, explains its geometric meaning, shows how to transform regions and integrands, and applies the method to two- and three-dimensional integrals. The emphasis is on a repeatable workflow: define the transformation, compute the determinant, map the region, transform the integrand, and include the absolute Jacobian factor."}
      </p>
    </div>
  );
}

function SectionJ1() {
  return (
    <section className="section" id="jac-1">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">1. Why Change Variables?</h2>
      <p>
        {"In a single-variable integral, a substitution replaces one variable with another and introduces a derivative factor. Multivariable change of variables is the same idea in higher dimensions: several old coordinates are replaced by new coordinates, and the Jacobian determinant supplies the corresponding area or volume scaling factor."}
      </p>

      <div className="box def">
        <div className="box-lbl">Definition — Change of Variables</div>
        <p>
          {"A change of variables replaces the original coordinates $(x,y)$ by new coordinates $(u,v)$ through a transformation"}
        </p>
        <div className="fml">
          {"$$x=x(u,v),\\qquad y=y(u,v).$$"}
        </div>
        <p>
          {"The transformation maps a region $S$ in the $(u,v)$-plane to a region $R$ in the $(x,y)$-plane. The integral over $R$ can then be expressed as an integral over $S$."}
        </p>
      </div>

      <RealLifeUse>
        {"Coordinate changes are used whenever the geometry of a problem has a natural coordinate system: circular objects suggest polar coordinates, pipes suggest cylindrical coordinates, and spheres suggest spherical coordinates."}
      </RealLifeUse>

      <h3 className="subsec">When a Transformation Helps</h3>
      <ul className="steps">
        <li><span>A complicated boundary becomes a simple rectangle or box.</span></li>
        <li><span>The integrand becomes simpler in the new variables.</span></li>
        <li><span>Symmetry becomes visible and can reduce computation.</span></li>
        <li><span>Radial or rotational geometry is represented naturally.</span></li>
      </ul>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Recognizing a useful transformation</div>
        <p>
          {"Suppose an integral is taken over the ellipse $\\frac{x^2}{4}+\\frac{y^2}{9}\\le 1$. Find a transformation that converts the ellipse into a unit disk."}
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{"Use the scaling transformation"}</p>
          <div className="fml">{"$$x=2u,\\qquad y=3v.$$"}</div>
          <p>{"Then"}</p>
          <div className="fml">{"$$\\frac{x^2}{4}+\\frac{y^2}{9}=u^2+v^2.$$"}</div>
          <p>
            {"Therefore the ellipse maps to the unit disk $u^2+v^2\\le1$. The region is simpler, and the Jacobian will account for the stretching by factors 2 and 3."}
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionJ2() {
  return (
    <section className="section" id="jac-2">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">2. The Jacobian Determinant</h2>
      <p>
        {"For a transformation from $(u,v)$ to $(x,y)$, the Jacobian measures the local scaling of oriented area."}
      </p>

      <div className="box def">
        <div className="box-lbl">Definition — Two-Dimensional Jacobian</div>
        <p>{"If $x=x(u,v)$ and $y=y(u,v)$, the Jacobian is"}</p>
        <div className="fml">
  {
    "$$\\frac{\\partial(x,y)}{\\partial(u,v)}="
    + "\\begin{vmatrix}"
    + "\\frac{\\partial x}{\\partial u} & \\frac{\\partial x}{\\partial v}\\\\"
    + "\\frac{\\partial y}{\\partial u} & \\frac{\\partial y}{\\partial v}"
    + "\\end{vmatrix}"
    + "=\\frac{\\partial x}{\\partial u}\\frac{\\partial y}{\\partial v}"
    + "-\\frac{\\partial x}{\\partial v}\\frac{\\partial y}{\\partial u}.$$"
  }
</div>
      </div>

      <h3 className="subsec">Forward and Inverse Jacobians</h3>
      <p>
        {"The Jacobian written as $\\partial(x,y)/\\partial(u,v)$ describes the forward map. When the transformation is locally invertible, the inverse Jacobian satisfies"}
      </p>
      <div className="fml">
        {"$$\\frac{\\partial(x,y)}{\\partial(u,v)}\n        \\frac{\\partial(u,v)}{\\partial(x,y)}=1,$$"}
      </div>
      <p>
        {"so, wherever the inverse exists and the determinant is nonzero,"}
      </p>
      <div className="fml">
        {"$$\\frac{\\partial(u,v)}{\\partial(x,y)}\n        =\\frac{1}{\\frac{\\partial(x,y)}{\\partial(u,v)}}.$$"}
      </div>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Compute a linear Jacobian</div>
        <p>{"Let $x=2u+v$ and $y=u-3v$. Compute $\\partial(x,y)/\\partial(u,v)$."}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            {"The derivative matrix is"}
          </p>
          <div className="fml">
            {"$$\n            \\begin{pmatrix}\n            2 & 1\\\\\n            1 & -3\n            \\end{pmatrix}.\n            $$"}
          </div>
          <p>{"Therefore"}</p>
          <div className="fml">
            {"$$J=(2)(-3)-(1)(1)=-7.$$"}
          </div>
          <p>
            {"The negative sign indicates orientation reversal. For area in an integral, we use $|J|=7$."}
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionJ3() {
  return (
    <section className="section" id="jac-3">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">3. Geometric Meaning of the Jacobian</h2>
      <p>
        {"At a small scale, a smooth transformation behaves approximately like its derivative matrix. A tiny rectangle in $(u,v)$ becomes an approximately parallelogram-shaped patch in $(x,y)$. The determinant of the derivative matrix gives the signed area scale factor."}
      </p>

      <div className="box thm">
        <div className="box-lbl">Theorem — Local Area Scaling</div>
        <p>
          {"If $T(u,v)=(x(u,v),y(u,v))$ has Jacobian $J$ at a point, then sufficiently small area elements satisfy approximately"}
        </p>
        <div className="fml">{"$$dA\\approx |J|\\,du\\,dv.$$"}</div>
        <p>
          {"In the exact change-of-variables theorem, this local factor becomes the factor used throughout the transformed integral."}
        </p>
      </div>

      <h3 className="subsec">Why the Absolute Value Appears</h3>
      <p>
        {"A determinant can be positive or negative because it records orientation as well as scale. Physical area cannot be negative, so the change-of-variables formula uses the absolute value $|J|$."}
      </p>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Constant area scaling</div>
        <p>{"For $x=4u$ and $y=5v$, determine how a small area changes."}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            {"The Jacobian matrix is $\\begin{pmatrix}4&0\\\\0&5\\end{pmatrix}$, so"}
          </p>
          <div className="fml">{"$$J=4\\cdot5=20.$$"}</div>
          <p>
            {"Thus every sufficiently small area element is scaled by a factor of 20: $dA=20\\,du\\,dv$."}
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionJ4() {
  return (
    <section className="section" id="jac-4">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">4. The Change-of-Variables Formula</h2>
      <p>
        {"Let $T:S\\to R$ be a suitable one-to-one transformation with a nonzero Jacobian on the relevant region. Then a double integral over $R$ can be transformed to $S$."}
      </p>

      <div className="box thm">
        <div className="box-lbl">Theorem — Double-Integral Change of Variables</div>
        <div className="fml">
          {"$$\\iint_R f(x,y)\\,dA\n          =\\iint_S f\\bigl(x(u,v),y(u,v)\\bigr)\n          \\left|\\frac{\\partial(x,y)}{\\partial(u,v)}\\right|\\,du\\,dv.$$"}
        </div>
      </div>

      <h3 className="subsec">The Five-Step Workflow</h3>
      <ol className="steps">
        <li><span>Choose a transformation that simplifies the region or integrand.</span></li>
        <li><span>Rewrite $x$ and $y$ in terms of the new variables.</span></li>
        <li><span>Compute the Jacobian determinant and use its absolute value.</span></li>
        <li><span>Transform the region and determine the new limits.</span></li>
        <li><span>Rewrite the entire integral and evaluate in the new variables.</span></li>
      </ol>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Area of an ellipse by scaling</div>
        <p>
          {"Find the area of $R:\\frac{x^2}{4}+\\frac{y^2}{9}\\le1$ using $x=2u$, $y=3v$."}
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{"The ellipse becomes the unit disk $S:u^2+v^2\\le1$."}</p>
          <p>{"The Jacobian is"}</p>
          <div className="fml">{"$$J=\n          \\begin{vmatrix}\n          2&0\\\\0&3\n          \\end{vmatrix}=6.$$"}</div>
          <p>{"Hence"}</p>
          <div className="fml">
            {"$$\\text{Area}(R)=\\iint_S 1\\cdot6\\,du\\,dv\n            =6\\,\\pi=6\\pi.$$"}
          </div>
          <p>
            {"This agrees with the ellipse area formula $\\pi ab=\\pi(2)(3)=6\\pi$."}
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionJ5() {
  return (
    <section className="section" id="jac-5">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">5. Mapping Regions Correctly</h2>
      <p>
        {"Computing the Jacobian is only half of a change-of-variables problem. The original region must also be translated into the new variables. The boundary equations are often the main clue for choosing the transformation."}
      </p>

      <div className="box def">
        <div className="box-lbl">Region-Mapping Principle</div>
        <p>
          {"If $R=T(S)$, then every boundary and inequality describing $R$ must be rewritten using $x=x(u,v)$ and $y=y(u,v)$. The transformed region $S$ is the set of new-coordinate points whose images lie in $R$."}
        </p>
      </div>

      <h3 className="subsec">A Useful Linear Example</h3>
      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Transforming diagonal boundaries</div>
        <p>
          {"Consider $R$ bounded by the four lines $x+y=0$, $x+y=2$, $x-y=1$, and $x-y=3$. Choose $u=x+y$ and $v=x-y$."}
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            {"The four boundaries become simply $u=0$, $u=2$, $v=1$, and $v=3$. Thus the transformed region is the rectangle"}
          </p>
          <div className="fml">{"$$0\\le u\\le2,\\qquad1\\le v\\le3.$$"}</div>
          <p>
            {"Solve for $x,y$:"}
          </p>
          <div className="fml">{"$$x=\\frac{u+v}{2},\\qquad y=\\frac{u-v}{2}.$$"}</div>
          <p>{"The Jacobian is"}</p>
          <div className="fml">{"$$\n          \\frac{\\partial(x,y)}{\\partial(u,v)}\n          =\n          \\begin{vmatrix}\n          \\tfrac12&\\tfrac12\\\\\n          \\tfrac12&-\\tfrac12\n          \\end{vmatrix}\n          =-\\frac12,\n          \\qquad |J|=\\frac12.\n          $$"}</div>
          <p>
            {"The transformation converts a slanted quadrilateral into a rectangle, while the factor $\\tfrac12$ preserves its area."}
          </p>
        </div>
      </div>

      <div className="box note">
        <div className="box-lbl">Important Check</div>
        <p>
          {"Always test the transformed boundaries. If the original region has four independent boundary curves and your transformed description unexpectedly contains only one or two constraints, re-check the mapping."}
        </p>
      </div>
    </section>
  );
}

function SectionJ6() {
  return (
    <section className="section" id="jac-6">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">6. Polar Coordinates as a Jacobian Transformation</h2>
      <p>
        {"Polar coordinates are the standard example of a nonlinear change of variables. They replace Cartesian coordinates with radius $r$ and angle $\\theta$."}
      </p>

      <div className="box def">
        <div className="box-lbl">Polar Transformation</div>
        <div className="fml">
          {"$$x=r\\cos\\theta,\\qquad y=r\\sin\\theta.$$"}
        </div>
        <p>{"The Jacobian matrix is"}</p>
        <div className="fml">
          {"$$\n          \\begin{pmatrix}\n          \\cos\\theta&-r\\sin\\theta\\\\\n          \\sin\\theta&r\\cos\\theta\n          \\end{pmatrix}.\n          $$"}
        </div>
        <p>{"Its determinant is"}</p>
        <div className="fml">
          {"$$J=r(\\cos^2\\theta+\\sin^2\\theta)=r.$$"}
        </div>
        <p>{"Therefore"}</p>
        <div className="fml">{"$$dA=r\\,dr\\,d\\theta.$$"}</div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Integrate over the unit disk</div>
        <p>{"Evaluate $\\iint_D (x^2+y^2)\\,dA$ where $D:x^2+y^2\\le1$."}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{"The disk becomes $0\\le r\\le1$, $0\\le\\theta\\le2\\pi$, and $x^2+y^2=r^2$."}</p>
          <div className="fml">
            {"$$\\iint_D(x^2+y^2)\\,dA\n            =\\int_0^{2\\pi}\\int_0^1 r^2\\,r\\,dr\\,d\\theta.$$"}
          </div>
          <p>
            {"Evaluate the radial integral: $\\int_0^1r^3dr=\\tfrac14$. Then"}
          </p>
          <div className="fml">{"$$2\\pi\\cdot\\frac14=\\frac\\pi2.$$"}</div>
        </div>
      </div>
    </section>
  );
}

function SectionJ7() {
  return (
    <section className="section" id="jac-7">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">7. General Nonlinear Transformations</h2>
      <p>
        {"Not every useful transformation is a standard named coordinate system. We can design $u=u(x,y)$ and $v=v(x,y)$ to match the algebraic structure of a problem."}
      </p>

      <div className="box def">
        <div className="box-lbl">Local Invertibility</div>
        <p>
          {"A nonzero Jacobian at a point is the local signal that the transformation has an invertible first-order behavior there. When the Jacobian vanishes, the transformation may collapse area locally and the usual inverse-Jacobian reasoning can fail."}
        </p>
      </div>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Transformation matched to a product</div>
        <p>
          {"Let $u=x+y$ and $v=x-y$. Compute the Jacobian and inverse formulas."}
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            {"The inverse is $x=(u+v)/2$ and $y=(u-v)/2$. Hence"}
          </p>
          <div className="fml">
            {"$$\\frac{\\partial(x,y)}{\\partial(u,v)}=-\\frac12,$$"}
          </div>
          <p>
            {"so $dA=\\tfrac12\\,du\\,dv$. Also, products simplify because"}
          </p>
          <div className="fml">{"$$xy=\\frac{(u+v)(u-v)}4=\\frac{u^2-v^2}{4}.$$"}</div>
          <p>
            {"Thus the transformation can simultaneously simplify diagonal boundaries and rewrite the product $xy$ as a difference of squares."}
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionJ8() {
  return (
    <section className="section" id="jac-8">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">8. Three-Dimensional Jacobians</h2>
      <p>
        {"The same determinant idea extends to volume. If $x=x(u,v,w)$, $y=y(u,v,w)$, and $z=z(u,v,w)$, then the $3\\times3$ Jacobian determines local volume scaling."}
      </p>

      <div className="box def">
        <div className="box-lbl">Definition — Three-Dimensional Jacobian</div>
        <div className="fml">
          {"$$\n          \\frac{\\partial(x,y,z)}{\\partial(u,v,w)}\n          =\n          \\begin{vmatrix}\n          x_u&x_v&x_w\\\\\n          y_u&y_v&y_w\\\\\n          z_u&z_v&z_w\n          \\end{vmatrix}.\n          $$"}
        </div>
        <p>{"For volume elements,"}</p>
        <div className="fml">{"$$dV=\\left|\\frac{\\partial(x,y,z)}{\\partial(u,v,w)}\\right|du\\,dv\\,dw.$$"}</div>
      </div>

      <h3 className="subsec">Cylindrical Coordinates</h3>
      <div className="fml">
        {"$$x=r\\cos\\theta,\\qquad y=r\\sin\\theta,\\qquad z=z,$$"}
      </div>
      <p>{"with"}</p>
      <div className="fml">{"$$dV=r\\,dr\\,d\\theta\\,dz.$$"}</div>

      <h3 className="subsec">Spherical Coordinates</h3>
      <div className="fml">
        {"$$x=\\rho\\sin\\phi\\cos\\theta,\\quad\n        y=\\rho\\sin\\phi\\sin\\theta,\\quad\n        z=\\rho\\cos\\phi,$$"}
      </div>
      <p>{"and the Jacobian magnitude is"}</p>
      <div className="fml">{"$$\\left|\\frac{\\partial(x,y,z)}{\\partial(\\rho,\\phi,\\theta)}\\right|\n        =\\rho^2\\sin\\phi.$$"}</div>
      <div className="fml">{"$$dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta.$$"}</div>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Volume of a ball using spherical coordinates</div>
        <p>{"Compute the volume of the ball $x^2+y^2+z^2\\le a^2$."}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            {"Use $0\\le\\rho\\le a$, $0\\le\\phi\\le\\pi$, and $0\\le\\theta\\le2\\pi$."}
          </p>
          <div className="fml">
            {"$$V=\\int_0^{2\\pi}\\int_0^\\pi\\int_0^a\n            \\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta.$$"}
          </div>
          <p>
            {"The three factors separate:"}
          </p>
          <div className="fml">
            {"$$V=\n            \\left(\\int_0^{2\\pi}d\\theta\\right)\n            \\left(\\int_0^\\pi\\sin\\phi\\,d\\phi\\right)\n            \\left(\\int_0^a\\rho^2d\\rho\\right)\n            =2\\pi\\cdot2\\cdot\\frac{a^3}{3}\n            =\\frac{4}{3}\\pi a^3.$$"}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionJ9() {
  return (
    <section className="section" id="jac-9">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">9. Worked Applications</h2>

      <div className="box exm">
        <div className="box-lbl">Worked Example A</div>
        <div className="exm-title">A Gaussian-type integral over the plane</div>
        <p>
          {"Evaluate $\\iint_{\\mathbb R^2}e^{-(x^2+y^2)}\\,dA$ using polar coordinates."}
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            {"Because $x^2+y^2=r^2$ and $dA=r\\,dr\\,d\\theta$,"}
          </p>
          <div className="fml">{"$$\\int_0^{2\\pi}\\int_0^\\infty e^{-r^2}r\\,dr\\,d\\theta.$$"}</div>
          <p>
            {"Let $t=r^2$, so $dt=2r\\,dr$."}
          </p>
          <div className="fml">{"$$\\int_0^\\infty e^{-r^2}r\\,dr=\\frac12.$$"}</div>
          <p>{"Therefore the full integral is $2\\pi(\\tfrac12)=\\pi$."}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Worked Example B</div>
        <div className="exm-title">Integral over a parallelogram</div>
        <p>
          {"Let $R$ be the image of $0\\le u\\le1$, $0\\le v\\le2$ under $x=u+v$, $y=u-v$. Find the area of $R$."}
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            {"The Jacobian is"}
          </p>
          <div className="fml">{"$$J=\n            \\begin{vmatrix}1&1\\\\1&-1\\end{vmatrix}=-2,\n            \\qquad |J|=2.$$"}</div>
          <p>{"The source rectangle has area $1\\cdot2=2$, so"}</p>
          <div className="fml">{"$$\\text{Area}(R)=2\\cdot2=4.$$"}</div>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Worked Example C</div>
        <div className="exm-title">Transforming a radial integral</div>
        <p>
          {"Evaluate $\\iint_D \\sqrt{x^2+y^2}\\,dA$ over the annulus $1\\le x^2+y^2\\le4$."}
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            {"In polar coordinates, $1\\le r\\le2$, $0\\le\\theta\\le2\\pi$, the integrand is $r$, and $dA=r\\,dr\\,d\\theta$."}
          </p>
          <div className="fml">
            {"$$\\int_0^{2\\pi}\\int_1^2 r^2\\,dr\\,d\\theta\n            =2\\pi\\left[\\frac{r^3}{3}\\right]_1^2\n            =\\frac{14\\pi}{3}.$$"}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionJ10() {
  return (
    <section className="section" id="jac-10">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">10. Common Mistakes and Verification</h2>
      <ul className="steps">
        <li><span><strong>Forgetting $|J|$:</strong> a negative determinant does not make area negative.</span></li>
        <li><span><strong>Transforming only the integrand:</strong> the region and differential must also change.</span></li>
        <li><span><strong>Using the wrong direction:</strong> distinguish $\\partial(x,y)/\\partial(u,v)$ from its inverse.</span></li>
        <li><span><strong>Skipping the region map:</strong> new limits must describe exactly the image/preimage region.</span></li>
        <li><span><strong>Ignoring degeneracy:</strong> if $J=0$, the transformation can collapse dimension locally.</span></li>
        <li><span><strong>Mixing angular conventions:</strong> state the ranges of $\\theta$ and $\\phi$ explicitly.</span></li>
      </ul>

      <div className="box note">
        <div className="box-lbl">Verification Checklist</div>
        <p>
          {"Before evaluating, check: (1) the transformation is stated clearly, (2) the Jacobian direction matches the formulas, (3) the absolute value is present, (4) every boundary has been transformed, (5) the integrand has been rewritten completely, and (6) the new region has the correct dimension."}
        </p>
      </div>

      <div className="box exm">
        <div className="box-lbl">Mini Verification Example</div>
        <div className="exm-title">Check the Jacobian without recomputing everything</div>
        <p>
          {"For $x=3u+2v$, $y=u-v$, a student obtains $J=-5$. Verify the result using the determinant formula."}
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <div className="fml">
            {"$$J=\n            \\begin{vmatrix}3&2\\\\1&-1\\end{vmatrix}\n            =3(-1)-2(1)=-5.$$"}
          </div>
          <p>{"The result is correct, and the area scale factor is $|J|=5$."}</p>
        </div>
      </div>
    </section>
  );
}

function KeyFormulas() {
  return (
    <section className="section" id="jac-summary-2">
      <div className="sec-badge">Reference</div>
      <h2 className="sec-title">Key Formulas</h2>
      <div className="box def">
        <div className="box-lbl">Coordinate Systems</div>
        <div className="fml">{"$$\\text{Polar: }dA=r\\,dr\\,d\\theta.$$"}</div>
        <div className="fml">{"$$\\text{Cylindrical: }dV=r\\,dr\\,d\\theta\\,dz.$$"}</div>
        <div className="fml">{"$$\\text{Spherical: }dV=\\rho^2\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta.$$"}</div>
      </div>
      <p>
        {"The next topic in Module A is Curvilinear Coordinate Systems, which develops coordinate geometry and scale factors beyond the Jacobian foundation established here."}
      </p>
    </section>
  );
}


function GuideSidebar() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-title">Coordinate Transformations &amp; Surfaces</div>
      </div>

      <div className="sb-group">Topics</div>

      <a className="sb-link" href="#jac-1">
        Jacobians &amp; Change of Variables
      </a>

      <a className="sb-link" href="/curvilinear-coordinate-systems/1">
        Curvilinear Coordinate Systems
      </a>
    </nav>
  );
}

function GuideHeader() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Coordinate Transformations &amp; Surfaces</div>
      <h1 className="ch-title">Jacobians &amp; Change of Variables</h1>
      <p className="ch-sub">
        Jacobian determinants, geometric scaling, transformed regions, and coordinate changes
      </p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContents() {
  return (
    <nav className="toc">
      <div className="toc-h">Topics</div>
      <div className="toc-grid">
        <a className="toc-a" href="#jac-1">
          Jacobians &amp; Change of Variables
        </a>
        <a className="toc-a" href="#jac-worked-examples">
          Jacobians — Worked Examples
        </a>
        <a className="toc-a" href="#jac-quiz">
          Jacobians — Quiz (20 Questions)
        </a>

        <a className="toc-a" href="/curvilinear-coordinate-systems/1">
          Curvilinear Coordinate Systems
        </a>
        <a
          className="toc-a"
          href="/curvilinear-coordinate-systems/1#curvilinear-worked-examples"
        >
          Curvilinear Coordinate Systems — Worked Examples
        </a>
        <a
          className="toc-a"
          href="/curvilinear-coordinate-systems/1#curvilinear-quiz"
        >
          Curvilinear Coordinate Systems — Quiz (20 Questions)
        </a>
      </div>
    </nav>
  );
}

function JacobiansContent() {
  return (
    <>
      <GuideSidebar />
      <main className="main">
        <GuideHeader />
        <TableOfContents />
        <OpeningNote />
        <Divider />
        <SectionJ1 />
        <Divider />
        <SectionJ2 />
        <Divider />
        <SectionJ3 />
        <Divider />
        <SectionJ4 />
        <Divider />
        <SectionJ5 />
        <Divider />
        <SectionJ6 />
        <Divider />
        <SectionJ7 />
        <Divider />
        <SectionJ8 />
        <Divider />
        <section id="jac-worked-examples" className="section">
          <div className="sec-badge">Practice</div>
          <h2 className="sec-title">Worked Examples</h2>
          <p>
            The worked applications below bring together the Jacobian, transformed region,
            transformed integrand, and the correct area or volume element.
          </p>
          <p>
            Continue through the examples in this topic before attempting the 20-question quiz.
          </p>
        </section>
        <Divider />
        <SectionJ9 />
        <Divider />
        <SectionJ10 />
        <Divider />
        <KeyFormulas />
        <Divider />
        <section id="jac-quiz" className="section">
          <GuideMcqSection
            id="mcq-jacobians"
            badge="Practice"
            title="Jacobians &amp; Change of Variables — 20-Question Quiz"
            scoreId="scorejacobians"
            section="jacobians"
            questions={MV_JACOBIANS_QUIZ}
          />
        </section>
        <GuideFooter />
      </main>
    </>
  );
}

function GuideFooter() {
  return (
    <div className="pg-foot">
      <p>End of Jacobians &amp; Change of Variables.</p>
      <div className="guide-navigation">
  <a
    href="/curvilinear-coordinate-systems/1"
    className="guide-nav-button"
  >
    Next Topic: Curvilinear Coordinate Systems →
  </a>
</div>
    </div>
    
  );
}

function JacobiansGuide() {
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Jacobians & Change of Variables"
    >
      <JacobiansContent />
    </StudyGuideShell>
  );
}

export default JacobiansGuide;
