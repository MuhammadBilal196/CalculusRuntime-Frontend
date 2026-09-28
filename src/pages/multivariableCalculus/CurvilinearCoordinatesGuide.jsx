import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { MV_CURVILINEAR_QUIZ } from "../../data/mvCoordinateTransformationsQuiz";
import "./PartialDerivativesGuide.css";
import { RealLifeUse } from "../calculus/CalcBlocks";

function Divider() {
  return <hr className="divider" />;
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>Operational Blueprint:</strong> Curvilinear coordinate systems
        reorganize space so that coordinates follow the geometry of a problem
        rather than forcing every boundary into Cartesian planes. Polar
        coordinates are natural for planar radial geometry, cylindrical
        coordinates extend that idea around an axis, and spherical coordinates
        describe distance and angles around a point. The key idea is that
        coordinate changes also change physical distances, areas, and volumes.
        Scale factors, basis vectors, and Jacobians encode that geometry and
        make differential operators and integrals work correctly.
      </p>
      <div className="opening-note">
        <p>
          Curvilinear coordinates provide a natural way to describe geometry...
        </p>
      </div>

      <div className="guide-navigation">
        <a href="/jacobians-change-of-variables/1" className="guide-nav-button">
          ← Previous Topic: Jacobians & Change of Variables
        </a>
      </div>
    </div>
  );
}

function SectionC1() {
  return (
    <section className="section" id="curvilinear-1">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">1. What Are Curvilinear Coordinates?</h2>
      <p>
        Cartesian coordinates describe a point by its signed distances along
        fixed perpendicular axes. A curvilinear coordinate system instead labels
        a point using coordinates whose coordinate curves or surfaces may be
        curved. The system is useful when the geometry of a physical problem is
        naturally circular, cylindrical, spherical, or otherwise non-Cartesian.
      </p>

      <div className="box def">
        <div className="box-lbl">Definition — Coordinate Map</div>
        <p>
          A three-dimensional coordinate system can be represented by a map from
          coordinates {"$(u^1,u^2,u^3)$"} to Cartesian position:
        </p>
        <div className="fml">
          {String.raw`$$
          \mathbf r(u^1,u^2,u^3)
          =
          x(u^1,u^2,u^3)\mathbf i
          +y(u^1,u^2,u^3)\mathbf j
          +z(u^1,u^2,u^3)\mathbf k.
          $$`}
        </div>
        <p>
          Holding one coordinate constant produces a coordinate surface.
          Intersections of two coordinate surfaces give coordinate curves.
        </p>
      </div>

      <RealLifeUse>
        {
          "A circular pipe, a rotating disk, and a spherical planet all have geometry that is easier to describe when the coordinates follow the object. Curvilinear coordinates are therefore common in electromagnetism, fluid mechanics, heat transfer, and wave problems."
        }
      </RealLifeUse>

      <h3 className="subsec">Coordinate Surfaces</h3>
      <ul className="steps">
        <li>
          <span>A coordinate is fixed while the other coordinates vary.</span>
        </li>
        <li>
          <span>The resulting set is a coordinate surface.</span>
        </li>
        <li>
          <span>
            Three families of coordinate surfaces intersect to locate a point.
          </span>
        </li>
        <li>
          <span>
            In an orthogonal system, the coordinate surfaces intersect at right
            angles.
          </span>
        </li>
      </ul>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Recognizing coordinate surfaces</div>
        <p>
          In cylindrical coordinates, what geometric surface is described by
          {" $r=2$"}?
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            The coordinate {"$r$"} measures distance from the z-axis. Fixing it
            at 2 therefore gives all points whose distance from the z-axis is 2:
          </p>
          <div className="fml">{String.raw`$$x^2+y^2=4.$$`}</div>
          <p>This is a vertical circular cylinder of radius 2.</p>
        </div>
      </div>
    </section>
  );
}

function SectionC2() {
  return (
    <section className="section" id="curvilinear-2">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">2. Polar Coordinates in Two Dimensions</h2>
      <p>
        Polar coordinates replace the Cartesian pair {"$(x,y)$"} by radius
        {" $r$"} and angle {"$\\theta$"}. They are especially effective when
        boundaries or integrands depend on {"$x^2+y^2$"}.
      </p>

      <div className="box def">
        <div className="box-lbl">Polar Transformation</div>
        <div className="fml">
          {String.raw`$$
          x=r\cos\theta,\qquad
          y=r\sin\theta.
          $$`}
        </div>
        <p>The inverse relations, away from the usual angular ambiguity, are</p>
        <div className="fml">
          {String.raw`$$
          r=\sqrt{x^2+y^2},\qquad
          \theta=\operatorname{atan2}(y,x).
          $$`}
        </div>
      </div>

      <h3 className="subsec">Geometry of an Infinitesimal Polar Patch</h3>
      <p>
        A small polar patch has radial width {"$dr$"} and angular arc length
        approximately {"$r\\,d\\theta$"}. Therefore
      </p>
      <div className="fml">{String.raw`$$dA=r\,dr\,d\theta.$$`}</div>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Convert a circular region</div>
        <p>Convert the disk {"$x^2+y^2\\le 9$"} into polar coordinates.</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>Since {"$x^2+y^2=r^2$"}, the inequality becomes</p>
          <div className="fml">{String.raw`$$0\le r\le3.$$`}</div>
          <p>A complete revolution is</p>
          <div className="fml">{String.raw`$$0\le\theta\le2\pi.$$`}</div>
          <p>
            Thus the disk is the rectangle-like parameter region
            {" $0\\le r\\le3$, $0\\le\\theta\\le2\\pi$"} in the polar coordinate
            plane.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionC3() {
  return (
    <section className="section" id="curvilinear-3">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">3. Polar Basis Vectors and Scale Factors</h2>
      <p>
        Unlike Cartesian unit vectors, the polar basis vectors rotate as the
        point moves around the origin. Let {"$\\mathbf e_r$"} point outward
        radially and {"$\\mathbf e_\\theta$"} point in the direction of
        increasing angle.
      </p>

      <div className="box def">
        <div className="box-lbl">Polar Unit Vectors</div>
        <div className="fml">
          {String.raw`$$
          \mathbf e_r
          =\cos\theta\,\mathbf i+\sin\theta\,\mathbf j,
          \qquad
          \mathbf e_\theta
          =-\sin\theta\,\mathbf i+\cos\theta\,\mathbf j.
          $$`}
        </div>
        <p>The two vectors are perpendicular and both have unit length:</p>
        <div className="fml">
          {String.raw`$$
          \mathbf e_r\cdot\mathbf e_\theta=0,
          \qquad
          |\mathbf e_r|=|\mathbf e_\theta|=1.
          $$`}
        </div>
      </div>

      <h3 className="subsec">Scale Factors</h3>
      <p>
        The physical distance corresponding to a small coordinate change is
        controlled by scale factors. In polar coordinates,
      </p>
      <div className="fml">{String.raw`$$h_r=1,\qquad h_\theta=r.$$`}</div>
      <p>Hence a small displacement can be written as</p>
      <div className="fml">
        {String.raw`$$
        d\mathbf r
        =
        dr\,\mathbf e_r
        +
        r\,d\theta\,\mathbf e_\theta.
        $$`}
      </div>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Distance from an angular change</div>
        <p>
          At radius {"$r=5$"}, what physical arc length corresponds to an
          angular change of {"$d\\theta=0.02$"} radians?
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>The angular scale factor is {"$h_\\theta=r$"}, so</p>
          <div className="fml">
            {String.raw`$$ds_\theta=r\,d\theta=5(0.02)=0.1.$$`}
          </div>
          <p>The small arc length is 0.1 length units.</p>
        </div>
      </div>
    </section>
  );
}

function SectionC4() {
  return (
    <section className="section" id="curvilinear-4">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">4. Cylindrical Coordinates</h2>
      <p>
        Cylindrical coordinates extend polar coordinates into three dimensions
        by adding the Cartesian height {"$z$"}. They are natural for cylinders,
        circular pipes, rotating shafts, and fields with axial symmetry.
      </p>

      <div className="box def">
        <div className="box-lbl">Cylindrical Transformation</div>
        <div className="fml">
          {String.raw`$$
          x=r\cos\theta,\qquad
          y=r\sin\theta,\qquad
          z=z.
          $$`}
        </div>
        <p>The scale factors are</p>
        <div className="fml">
          {String.raw`$$h_r=1,\qquad h_\theta=r,\qquad h_z=1.$$`}
        </div>
        <p>Therefore the volume element is</p>
        <div className="fml">{String.raw`$$dV=r\,dr\,d\theta\,dz.$$`}</div>
      </div>

      <h3 className="subsec">Coordinate Surfaces</h3>
      <ul className="steps">
        <li>
          <span>{"$r=c$"} gives a vertical circular cylinder.</span>
        </li>
        <li>
          <span>
            {"$\\theta=c$"} gives a vertical half-plane through the z-axis.
          </span>
        </li>
        <li>
          <span>{"$z=c$"} gives a horizontal plane.</span>
        </li>
      </ul>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Volume of a cylinder</div>
        <p>
          Find the volume of {"$x^2+y^2\\le4$, $0\\le z\\le3$"} using
          cylindrical coordinates.
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            The bounds are {"$0\\le r\\le2$, $0\\le\\theta\\le2\\pi$"}, and{" "}
            {"$0\\le z\\le3$"}. Thus
          </p>
          <div className="fml">
            {String.raw`$$
            V=
            \int_0^3\int_0^{2\pi}\int_0^2
            r\,dr\,d\theta\,dz.
            $$`}
          </div>
          <p>Evaluating gives</p>
          <div className="fml">
            {String.raw`$$V=3(2\pi)\left[\frac{r^2}{2}\right]_0^2=12\pi.$$`}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionC5() {
  return (
    <section className="section" id="curvilinear-5">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">5. Spherical Coordinates</h2>
      <p>
        Spherical coordinates describe a point using its distance from the
        origin and two angles. We use the convention {"$(\\rho,\\phi,\\theta)$"}
        where {"$\\phi$"} is measured down from the positive z-axis and
        {"$\\theta$"} is the azimuthal angle in the xy-plane.
      </p>

      <div className="box def">
        <div className="box-lbl">Spherical Transformation</div>
        <div className="fml">
          {String.raw`$$
          x=\rho\sin\phi\cos\theta,\qquad
          y=\rho\sin\phi\sin\theta,\qquad
          z=\rho\cos\phi.
          $$`}
        </div>
        <p>The standard ranges for a full sphere are</p>
        <div className="fml">
          {String.raw`$$
          \rho\ge0,\qquad
          0\le\phi\le\pi,\qquad
          0\le\theta<2\pi.
          $$`}
        </div>
      </div>

      <h3 className="subsec">Spherical Scale Factors</h3>
      <div className="fml">
        {String.raw`$$
        h_\rho=1,\qquad
        h_\phi=\rho,\qquad
        h_\theta=\rho\sin\phi.
        $$`}
      </div>
      <p>Multiplying them gives</p>
      <div className="fml">
        {String.raw`$$
        dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta.
        $$`}
      </div>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Recognizing spherical surfaces</div>
        <p>
          Describe the surfaces {"$\\rho=a$"} and {"$\\phi=\\phi_0$"}.
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            {"$\\rho=a$"} fixes the distance from the origin, so it is the
            sphere
          </p>
          <div className="fml">{String.raw`$$x^2+y^2+z^2=a^2.$$`}</div>
          <p>
            {"$\\phi=\\phi_0$"} fixes the angle from the positive z-axis, so it
            describes a cone with vertex at the origin.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionC6() {
  return (
    <section className="section" id="curvilinear-6">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">6. Orthogonal Curvilinear Coordinates</h2>
      <p>
        A coordinate system is orthogonal when its coordinate directions are
        mutually perpendicular at each regular point. Orthogonality makes metric
        calculations and vector-calculus formulas especially clean.
      </p>

      <div className="box def">
        <div className="box-lbl">Scale-Factor Framework</div>
        <p>
          If {"$(u^1,u^2,u^3)$"} is an orthogonal coordinate system with scale
          factors {"$h_1,h_2,h_3$"}, then the infinitesimal displacement has the
          form
        </p>
        <div className="fml">
          {String.raw`$$
          d\mathbf r
          =
          h_1\,du^1\,\mathbf e_1
          +
          h_2\,du^2\,\mathbf e_2
          +
          h_3\,du^3\,\mathbf e_3.
          $$`}
        </div>
        <p>The corresponding volume element is</p>
        <div className="fml">
          {String.raw`$$
          dV=h_1h_2h_3\,du^1\,du^2\,du^3.
          $$`}
        </div>
      </div>

      <h3 className="subsec">Why the Product Appears</h3>
      <p>
        An infinitesimal coordinate box has three physical edge lengths:
        {" $h_1du^1$, $h_2du^2$, and $h_3du^3$"}. Multiplying them gives its
        leading-order volume.
      </p>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">
          Recover cylindrical volume from scale factors
        </div>
        <p>Use the cylindrical scale factors to recover {"$dV$"}.</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            For cylindrical coordinates,
            {" $h_r=1$, $h_\\theta=r$, and $h_z=1$"}. Hence
          </p>
          <div className="fml">
            {String.raw`$$
            dV=(1)(r)(1)\,dr\,d\theta\,dz
            =r\,dr\,d\theta\,dz.
            $$`}
          </div>
          <p>
            This matches the Jacobian magnitude of the cylindrical
            transformation.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionC7() {
  return (
    <section className="section" id="curvilinear-7">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">7. Basis Vectors and Coordinate Dependence</h2>
      <p>
        In Cartesian coordinates, {"$\\mathbf i,\\mathbf j,\\mathbf k$"} are
        fixed. In curvilinear coordinates, the local unit vectors can depend on
        position. This is why differentiating a vector field requires attention
        to both its components and its changing basis.
      </p>

      <div className="box def">
        <div className="box-lbl">Position-Dependent Basis</div>
        <p>In polar coordinates, for example,</p>
        <div className="fml">
          {String.raw`$$
          \frac{\partial\mathbf e_r}{\partial\theta}
          =\mathbf e_\theta,
          \qquad
          \frac{\partial\mathbf e_\theta}{\partial\theta}
          =-\mathbf e_r.
          $$`}
        </div>
        <p>
          The basis therefore rotates even when the magnitude of the unit
          vectors remains 1.
        </p>
      </div>

      <h3 className="subsec">Gradient in Orthogonal Coordinates</h3>
      <p>
        For an orthogonal system with coordinates {"$q_1,q_2,q_3$"} and scale
        factors {"$h_1,h_2,h_3$"}, the gradient of a scalar field is written
      </p>
      <div className="fml">
        {String.raw`$$
        \nabla f
        =
        \mathbf e_1\frac{1}{h_1}\frac{\partial f}{\partial q_1}
        +
        \mathbf e_2\frac{1}{h_2}\frac{\partial f}{\partial q_2}
        +
        \mathbf e_3\frac{1}{h_3}\frac{\partial f}{\partial q_3}.
        $$`}
      </div>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Radial gradient</div>
        <p>
          Let {"$f(r,\\theta)=r^2$"}. Find {"$\\nabla f$"} in polar coordinates.
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            Since {"$h_r=1$"} and {"$h_\\theta=r$"},
          </p>
          <div className="fml">
            {String.raw`$$
            \nabla f
            =
            \mathbf e_r\frac{\partial f}{\partial r}
            +
            \mathbf e_\theta\frac1r\frac{\partial f}{\partial\theta}.
            $$`}
          </div>
          <p>
            Here {"$f_r=2r$"} and {"$f_\\theta=0$"}, so
          </p>
          <div className="fml">{String.raw`$$\nabla f=2r\,\mathbf e_r.$$`}</div>
        </div>
      </div>
    </section>
  );
}

function SectionC8() {
  return (
    <section className="section" id="curvilinear-8">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">8. Choosing the Right Coordinate System</h2>
      <p>
        The most important practical skill is recognizing geometry. A useful
        coordinate system makes boundaries simple, reduces repeated algebra, and
        often turns the integral or differential equation into a separable form.
      </p>

      <div className="box def">
        <div className="box-lbl">Geometry-to-Coordinates Guide</div>
        <ul className="steps">
          <li>
            <span>Circles or disks in the xy-plane → polar coordinates.</span>
          </li>
          <li>
            <span>Solids around the z-axis → cylindrical coordinates.</span>
          </li>
          <li>
            <span>
              Spheres or radial fields centered at a point → spherical
              coordinates.
            </span>
          </li>
          <li>
            <span>
              Diagonal or algebraic boundaries → consider a custom
              transformation.
            </span>
          </li>
        </ul>
      </div>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Choose coordinates before calculating</div>
        <p>
          Which standard coordinate system is natural for the solid
          {" $x^2+y^2\\le4$, $0\\le z\\le5$"}?
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            The base is a disk centered on the z-axis and the height is given
            directly in z. Cylindrical coordinates make the boundary
            {" $0\\le r\\le2$"} immediate.
          </p>
          <div className="fml">
            {String.raw`$$0\le r\le2,\quad0\le\theta\le2\pi,\quad0\le z\le5.$$`}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionC9() {
  return (
    <section className="section" id="curvilinear-9">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">9. Common Mistakes and Verification</h2>
      <ul className="steps">
        <li>
          <span>
            <strong>Mixing spherical conventions:</strong> always state what φ
            and θ mean.
          </span>
        </li>
        <li>
          <span>
            <strong>Forgetting a scale factor:</strong> an angular change is not
            itself a physical length.
          </span>
        </li>
        <li>
          <span>
            <strong>Using Cartesian basis vectors:</strong> polar and spherical
            bases generally depend on position.
          </span>
        </li>
        <li>
          <span>
            <strong>Dropping the Jacobian:</strong> coordinate changes require
            the correct area or volume element.
          </span>
        </li>
        <li>
          <span>
            <strong>Using incorrect ranges:</strong> verify that the chosen
            coordinate ranges cover the intended region exactly once, except for
            harmless boundary duplication.
          </span>
        </li>
        <li>
          <span>
            <strong>Ignoring singular points:</strong> polar coordinates are
            singular at r=0, and spherical angular coordinates have singular
            behavior on the axis.
          </span>
        </li>
      </ul>

      <div className="box note">
        <div className="box-lbl">Verification Checklist</div>
        <p>
          Check the coordinate convention, identify every coordinate surface,
          write the scale factors, derive the area or volume element, verify the
          coordinate ranges, and test the result against the geometry or a known
          special case.
        </p>
      </div>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Check a spherical volume element</div>
        <p>
          A student writes {"$dV=\\rho\\sin\\phi\\,d\\rho\\,d\\phi\\,d\\theta$"}
          . Is this correct?
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            No. The three spherical scale factors are
            {" $1$, $\\rho$, and $\\rho\\sin\\phi$"}. Their product is
          </p>
          <div className="fml">
            {String.raw`$$
            h_\rho h_\phi h_\theta
            =1\cdot\rho\cdot(\rho\sin\phi)
            =\rho^2\sin\phi.
            $$`}
          </div>
          <p>Therefore the correct element is</p>
          <div className="fml">
            {String.raw`$$
            dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta.
            $$`}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionC10() {
  return (
    <section className="section" id="curvilinear-10">
      <div className="sec-badge">Reference</div>
      <h2 className="sec-title">10. Key Formulas and Summary</h2>

      <div className="box def">
        <div className="box-lbl">Polar</div>
        <div className="fml">
          {String.raw`$$
          x=r\cos\theta,\quad
          y=r\sin\theta,\quad
          dA=r\,dr\,d\theta.
          $$`}
        </div>
        <div className="fml">{String.raw`$$h_r=1,\qquad h_\theta=r.$$`}</div>
      </div>

      <div className="box def">
        <div className="box-lbl">Cylindrical</div>
        <div className="fml">
          {String.raw`$$
          x=r\cos\theta,\quad
          y=r\sin\theta,\quad
          z=z,\quad
          dV=r\,dr\,d\theta\,dz.
          $$`}
        </div>
        <div className="fml">
          {String.raw`$$h_r=1,\qquad h_\theta=r,\qquad h_z=1.$$`}
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">Spherical</div>
        <div className="fml">
          {String.raw`$$
          x=\rho\sin\phi\cos\theta,\quad
          y=\rho\sin\phi\sin\theta,\quad
          z=\rho\cos\phi.
          $$`}
        </div>
        <div className="fml">
          {String.raw`$$
          h_\rho=1,\quad
          h_\phi=\rho,\quad
          h_\theta=\rho\sin\phi,
          \quad
          dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta.
          $$`}
        </div>
      </div>

      <div className="box thm">
        <div className="box-lbl">Core Principle</div>
        <p>
          Coordinate changes are not merely substitutions of symbols. The scale
          factors tell you how coordinate increments become physical lengths,
          and their product gives the local volume scale in an orthogonal
          system.
        </p>
      </div>
    </section>
  );
}

function GuideSidebar() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-title">
          Coordinate Transformations &amp; Surfaces
        </div>
      </div>

      <div className="sb-group">Module A · Part 1</div>

      <a className="sb-link" href="/jacobians-change-of-variables/1">
        Jacobians &amp; Change of Variables
      </a>
      <a className="sb-link" href="#curvilinear-1">
        Curvilinear Coordinate Systems
      </a>
    </nav>
  );
}

function GuideHeader() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">
        Coordinate Transformations &amp; Surfaces · Module A · Part 1
      </div>
      <h1 className="ch-title">Curvilinear Coordinate Systems</h1>
      <p className="ch-sub">
        Polar, cylindrical, and spherical coordinates, scale factors, basis
        vectors, and geometric reasoning
      </p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContents() {
  return (
    <nav className="toc">
      <div className="toc-h">Topic 2 Contents</div>
      <div className="toc-grid">
        <a className="toc-a" href="#curvilinear-1">
          What Are Curvilinear Coordinates?
        </a>
        <a className="toc-a" href="#curvilinear-2">
          Polar Coordinates
        </a>
        <a className="toc-a" href="#curvilinear-3">
          Basis Vectors &amp; Scale Factors
        </a>
        <a className="toc-a" href="#curvilinear-4">
          Cylindrical Coordinates
        </a>
        <a className="toc-a" href="#curvilinear-5">
          Spherical Coordinates
        </a>
        <a className="toc-a" href="#curvilinear-6">
          Orthogonal Coordinates
        </a>
        <a className="toc-a" href="#curvilinear-7">
          Basis Vectors &amp; Coordinate Dependence
        </a>
        <a className="toc-a" href="#curvilinear-8">
          Choosing a Coordinate System
        </a>
        <a className="toc-a" href="#curvilinear-9">
          Common Mistakes
        </a>
        <a className="toc-a" href="#curvilinear-10">
          Key Formulas
        </a>
        <a className="toc-a" href="#curvilinear-worked-examples">
          Worked Examples
        </a>
        <a className="toc-a" href="#curvilinear-quiz">
          20-Question Quiz
        </a>
      </div>
    </nav>
  );
}

function GuideFooter() {
  return (
    <div className="pg-foot">
      <p>End of Curvilinear Coordinate Systems.</p>
      <div className="guide-navigation">
        <a href="/parametrized-surface-area/2" className="guide-nav-button">
          Next Part: Parametrized Surface Area →
        </a>
      </div>
    </div>
  );
}

function CurvilinearCoordinatesGuide() {
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Curvilinear Coordinate Systems"
    >
      <GuideSidebar />
      <main className="main">
        <GuideHeader />
        <TableOfContents />
        <OpeningNote />
        <Divider />
        <SectionC1 />
        <Divider />
        <SectionC2 />
        <Divider />
        <SectionC3 />
        <Divider />
        <SectionC4 />
        <Divider />
        <SectionC5 />
        <Divider />
        <SectionC6 />
        <Divider />
        <SectionC7 />
        <Divider />
        <SectionC8 />
        <Divider />
        <section id="curvilinear-worked-examples" className="section">
          <div className="sec-badge">Practice</div>
          <h2 className="sec-title">Worked Examples</h2>
          <p>
            The examples above are distributed through the topic so each new
            coordinate idea is immediately followed by a calculation or
            geometric interpretation.
          </p>
          <p>
            Before the checkpoint, review the scale factors and the
            polar/cylindrical/spherical conventions.
          </p>
        </section>
        <Divider />
        <SectionC9 />
        <Divider />
        <SectionC10 />
        <Divider />
        <section id="curvilinear-quiz" className="section">
          <GuideMcqSection
            id="mcq-curvilinear"
            badge="Practice"
            title="Curvilinear Coordinate Systems — 20-Question Quiz"
            scoreId="scorecurvilinear"
            section="curvilinear"
            questions={MV_CURVILINEAR_QUIZ}
          />
        </section>
        <GuideFooter />
      </main>
    </StudyGuideShell>
  );
}

export default CurvilinearCoordinatesGuide;
