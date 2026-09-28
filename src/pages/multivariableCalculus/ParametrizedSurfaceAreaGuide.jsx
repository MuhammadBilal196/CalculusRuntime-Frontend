import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { MV_PARAMETRIZED_SURFACE_AREA_QUIZ } from "../../data/mvCoordinateTransformationsQuiz";
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
        Parametrized surface area extends the idea of parametrized curves into
        three dimensions. A surface is described by two parameters, and the
        partial derivatives with respect to those parameters produce tangent
        vectors. Their cross product gives a normal direction and, more
        importantly for area, its magnitude measures the local stretching from
        parameter space to the physical surface. This guide develops the full
        workflow: choose a parameterization, identify the parameter domain,
        compute tangent vectors, form the cross product, take its magnitude,
        and integrate over the domain.
      </p>

      <div className="guide-navigation">
        <a
          href="/jacobians-change-of-variables/1"
          className="guide-nav-button"
        >
          ← Back to Part 1 — Page 1
        </a>
      </div>
    </div>
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

      <div className="sb-group"> Part 2</div>

      <a
        className="sb-link active"
        href="/parametrized-surface-area/2"
      >
        Parametrized Surface Area
      </a>

      <a
        className="sb-link"
        href="/flux-integrals-general-surfaces/2"
      >
        Flux Integrals over General Parameterized Surfaces
      </a>
    </nav>
  );
}

function GuideHeader() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">
        Coordinate Transformations &amp; Surfaces · Module A · Part 2
      </div>
      <h1 className="ch-title">Parametrized Surface Area</h1>
      <p className="ch-sub">
        Surface parameterizations, tangent vectors, normal vectors, surface
        area elements, and worked area calculations
      </p>
      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContents() {
  return (
    <nav className="toc">
      <div className="toc-h">Topic 3 Contents</div>

      <div className="toc-grid">
        <a className="toc-a" href="#surface-parameterization">
          1. What Is a Parametrized Surface?
        </a>

        <a className="toc-a" href="#parameter-domain">
          2. The Parameter Domain
        </a>

        <a className="toc-a" href="#tangent-vectors">
          3. Tangent Vectors
        </a>

        <a className="toc-a" href="#normal-vector">
          4. Constructing a Normal Vector
        </a>

        <a className="toc-a" href="#surface-area-element">
          5. The Surface Area Element
        </a>

        <a className="toc-a" href="#surface-worked-examples">
          Worked Examples
        </a>

        <a className="toc-a" href="#worked-example-1">
          6. Plane Patch Example
        </a>

        <a className="toc-a" href="#graph-surfaces">
          7. Graphs z=f(x,y)
        </a>

        <a className="toc-a" href="#worked-example-2">
          8. Graph Surface Example
        </a>

        <a className="toc-a" href="#surface-area-cylinder">
          9. Cylindrical Surface Example
        </a>

        <a className="toc-a" href="#regularity">
          10. Regular Parametrizations
        </a>

        <a className="toc-a" href="#orientation">
          11. Orientation and Surface Normals
        </a>

        <a className="toc-a" href="#common-mistakes">
          12. Common Mistakes
        </a>

        <a className="toc-a" href="#choosing-parameterization">
          13. Choosing a Useful Parameterization
        </a>

        <a className="toc-a" href="#key-formulas">
          14. Key Formulas
        </a>

        <a className="toc-a" href="#mcq-parametrized-surface-area">
          20-Question Quiz
        </a>
      </div>
    </nav>
  );
}

function GuideFooter() {
  return (
    <div className="pg-foot">
      <p>End of Parametrized Surface Area.</p>

      <div className="guide-navigation">
        <a
          href="/flux-integrals-general-surfaces/2"
          className="guide-nav-button"
        >
          Next Topic: Flux Integrals over General Parameterized Surfaces →
        </a>
      </div>
    </div>
  );
}

function ParametrizedSurfaceAreaContent() {
  return (
    <>
      <GuideSidebar />

      <main className="main">
        <GuideHeader />
        <TableOfContents />
        <OpeningNote />

        <Divider />

        <section className="section" id="surface-parameterization">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">1. What Is a Parametrized Surface?</h2>

          

          <p>
            A parametrized surface is represented by a vector-valued function of
            two variables:
          </p>

          <div className="fml">
            {String.raw`$$
\mathbf r(u,v)
=
\langle x(u,v),y(u,v),z(u,v)\rangle.
$$`}
          </div>

          <p>
            The parameters <strong>u</strong> and <strong>v</strong> vary over
            some region D in the uv-plane. Each point (u,v) in D corresponds to
            a point on the surface in three-dimensional space.
          </p>

          <div className="fml">
            {String.raw`$$
(u,v)\in D
\quad\longrightarrow\quad
\mathbf r(u,v)\in\mathbb R^3.
$$`}
          </div>

          <p>
            This gives us a systematic way to describe surfaces that may be
            difficult to express as a single equation such as z=f(x,y).
          </p>

          <RealLifeUse>
            Parametrized surfaces are useful in computer graphics, geometry,
            fluid mechanics, electromagnetism, engineering, and physics because
            complicated three-dimensional surfaces can be described using two
            manageable parameters.
          </RealLifeUse>
        
    </section>

        <Divider />
<section className="section" id="parameter-domain">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">2. The Parameter Domain</h2>

          

          <p>
            The parameter domain D determines which portion of the surface is
            generated. For example:
          </p>

          <div className="fml">
            {String.raw`$$
0\le u\le 2,
\qquad
0\le v\le \pi
$$`}
          </div>

          <p>
            describes a rectangular region in the uv-plane. Mapping this region
            through r(u,v) creates a corresponding patch of the surface.
          </p>

          <p>
            Choosing the correct parameter domain is essential. The same
            parameterization can describe either a complete surface or only a
            portion of it depending on the parameter ranges.
          </p>
        
    </section>

        <Divider />
<section className="section" id="tangent-vectors">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">3. Tangent Vectors</h2>

          

          <p>
            The two fundamental tangent vectors of a parametrized surface are
            obtained by differentiating with respect to the parameters:
          </p>

          <div className="fml">
            {String.raw`$$
\mathbf r_u
=
\frac{\partial\mathbf r}{\partial u},
\qquad
\mathbf r_v
=
\frac{\partial\mathbf r}{\partial v}.
$$`}
          </div>

          <p>
            Explicitly, if
            <strong> r(u,v)=⟨x(u,v),y(u,v),z(u,v)⟩</strong>, then
          </p>

          <div className="fml">
            {String.raw`$$
\mathbf r_u
=
\left\langle
\frac{\partial x}{\partial u},
\frac{\partial y}{\partial u},
\frac{\partial z}{\partial u}
\right\rangle
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
\mathbf r_v
=
\left\langle
\frac{\partial x}{\partial v},
\frac{\partial y}{\partial v},
\frac{\partial z}{\partial v}
\right\rangle.
$$`}
          </div>

          <p>
            The vector r_u is tangent to the surface in the direction in which u
            changes while v is held fixed. Similarly, r_v is tangent to the
            surface in the direction in which v changes while u is held fixed.
          </p>
        
    </section>

        <Divider />
<section className="section" id="normal-vector">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">4. Constructing a Normal Vector</h2>

          

          <p>
            Since r_u and r_v are tangent to the surface, their cross product is
            perpendicular to both:
          </p>

          <div className="fml">
            {String.raw`$$
\mathbf r_u\times\mathbf r_v
$$`}
          </div>

          <p>Therefore, a normal vector to the surface is</p>

          <div className="fml">
            {String.raw`$$
\mathbf n
=
\mathbf r_u\times\mathbf r_v.
$$`}
          </div>

          <p>Reversing the order changes the orientation:</p>

          <div className="fml">
            {String.raw`$$
\mathbf r_v\times\mathbf r_u
=
-\left(\mathbf r_u\times\mathbf r_v\right).
$$`}
          </div>

          <p>
            For ordinary surface area, the direction of the normal does not
            affect the final positive area. For oriented surface integrals,
            however, the direction matters.
          </p>
        
    </section>

        <Divider />
<section className="section" id="surface-area-element">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">5. The Surface Area Element</h2>

          

          <p>
            A small rectangle du dv in parameter space generally maps to a small
            parallelogram on the surface. Its approximate area is the magnitude
            of the cross product of the tangent vectors:
          </p>

          <div className="fml">
            {String.raw`$$
dS
=
\left|
\mathbf r_u\times\mathbf r_v
\right|
\,du\,dv.
$$`}
          </div>

          <p>Therefore, the total area of a parametrized surface S is</p>

          <div className="fml">
            {String.raw`$$
\boxed{
A(S)
=
\iint_D
\left|
\mathbf r_u\times\mathbf r_v
\right|
\,du\,dv
}
$$`}
          </div>

          <p>This is the central formula for parametrized surface area.</p>
        
    </section>

        <Divider />
<section id="surface-worked-examples" className="section">
      <div className="sec-badge">Practice</div>
      <h2 className="sec-title">Worked Examples</h2>
      <p>
        The worked examples below apply the parametrization, tangent-vector,
        cross-product, and surface-area formulas to plane patches, graph
        surfaces, and cylindrical surfaces.
      </p>
      <p>
        Before attempting the checkpoint, make sure you can identify the
        parameter domain and compute the magnitude of
        <strong> r_u × r_v</strong>.
      </p>
    </section>

        <Divider />
<section className="section" id="worked-example-1">
      <div className="sec-badge">Worked Example</div>
      <h2 className="sec-title">6. Worked Example — Plane Patch</h2>

          

          <p>Find the area of the surface</p>

          <div className="fml">
            {String.raw`$$
\mathbf r(u,v)
=
\langle u,v,u+v\rangle,
\qquad
0\le u\le1,\quad0\le v\le1.
$$`}
          </div>

          <h3>Step 1: Find the tangent vectors</h3>

          <div className="fml">
            {String.raw`$$
\mathbf r_u
=
\langle1,0,1\rangle
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
\mathbf r_v
=
\langle0,1,1\rangle.
$$`}
          </div>

          <h3>Step 2: Compute the cross product</h3>

          <div className="fml">
            {String.raw`$$
\mathbf r_u\times\mathbf r_v
=
\begin{vmatrix}
\mathbf i&\mathbf j&\mathbf k\\
1&0&1\\
0&1&1
\end{vmatrix}
=
\langle-1,-1,1\rangle.
$$`}
          </div>

          <h3>Step 3: Find its magnitude</h3>

          <div className="fml">
            {String.raw`$$
\left|
\mathbf r_u\times\mathbf r_v
\right|
=
\sqrt{(-1)^2+(-1)^2+1^2}
=
\sqrt3.
$$`}
          </div>

          <h3>Step 4: Integrate over D</h3>

          <div className="fml">
            {String.raw`$$
A
=
\int_0^1\int_0^1
\sqrt3\,du\,dv
=
\sqrt3.
$$`}
          </div>

          <p>
            Therefore, the area of the surface patch is
            <strong> √3 square units</strong>.
          </p>
        
    </section>

        <Divider />
<section className="section" id="graph-surfaces">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">7. Graphs z=f(x,y) as Parametrized Surfaces</h2>

          

          <p>
            A graph of a function z=f(x,y) has a particularly simple
            parameterization:
          </p>

          <div className="fml">
            {String.raw`$$
\mathbf r(x,y)
=
\langle x,y,f(x,y)\rangle.
$$`}
          </div>

          <p>The tangent vectors are</p>

          <div className="fml">
            {String.raw`$$
\mathbf r_x
=
\langle1,0,f_x\rangle,
\qquad
\mathbf r_y
=
\langle0,1,f_y\rangle.
$$`}
          </div>

          <p>Their cross product is</p>

          <div className="fml">
            {String.raw`$$
\mathbf r_x\times\mathbf r_y
=
\langle-f_x,-f_y,1\rangle.
$$`}
          </div>

          <p>Its magnitude is</p>

          <div className="fml">
            {String.raw`$$
\left|
\mathbf r_x\times\mathbf r_y
\right|
=
\sqrt{1+f_x^2+f_y^2}.
$$`}
          </div>

          <p>Therefore, the surface area of z=f(x,y) over a region R is</p>

          <div className="fml">
            {String.raw`$$
\boxed{
A
=
\iint_R
\sqrt{1+f_x^2+f_y^2}
\,dA
}
$$`}
          </div>
        
    </section>

        <Divider />
<section className="section" id="worked-example-2">
      <div className="sec-badge">Worked Example</div>
      <h2 className="sec-title">8. Worked Example — Surface Given as a Graph</h2>

          

          <p>Find the area of the surface</p>

          <div className="fml">
            {String.raw`$$
z=x^2+y^2
$$`}
          </div>

          <p>over the unit disk</p>

          <div className="fml">
            {String.raw`$$
x^2+y^2\le1.
$$`}
          </div>

          <h3>Step 1: Compute the partial derivatives</h3>

          <div className="fml">
            {String.raw`$$
f_x=2x,
\qquad
f_y=2y.
$$`}
          </div>

          <h3>Step 2: Substitute into the surface-area formula</h3>

          <div className="fml">
            {String.raw`$$
A
=
\iint_R
\sqrt{1+4x^2+4y^2}\,dA.
$$`}
          </div>

          <p>
            Because the region is a disk and the integrand depends on x²+y²,
            polar coordinates are convenient:
          </p>

          <div className="fml">
            {String.raw`$$
x=r\cos\theta,
\qquad
y=r\sin\theta,
\qquad
dA=r\,dr\,d\theta.
$$`}
          </div>

          <p>Therefore,</p>

          <div className="fml">
            {String.raw`$$
A
=
\int_0^{2\pi}
\int_0^1
r\sqrt{1+4r^2}
\,dr\,d\theta.
$$`}
          </div>

          <p>
            The important step is recognizing the geometry of the region and
            choosing coordinates that simplify the resulting integral.
          </p>
        
    </section>

        <Divider />
<section className="section" id="surface-area-cylinder">
      <div className="sec-badge">Worked Example</div>
      <h2 className="sec-title">9. Worked Example — Cylindrical Surface</h2>

          

          <p>Consider a cylindrical surface of radius a:</p>

          <div className="fml">
            {String.raw`$$
\mathbf r(\theta,z)
=
\langle
a\cos\theta,
a\sin\theta,
z
\rangle.
$$`}
          </div>

          <p>Let</p>

          <div className="fml">
            {String.raw`$$
0\le\theta\le2\pi,
\qquad
0\le z\le h.
$$`}
          </div>

          <h3>Step 1: Tangent vectors</h3>

          <div className="fml">
            {String.raw`$$
\mathbf r_\theta
=
\langle
-a\sin\theta,
a\cos\theta,
0
\rangle
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
\mathbf r_z
=
\langle0,0,1\rangle.
$$`}
          </div>

          <h3>Step 2: Cross product magnitude</h3>

          <div className="fml">
            {String.raw`$$
\left|
\mathbf r_\theta\times\mathbf r_z
\right|
=
a.
$$`}
          </div>

          <h3>Step 3: Surface area</h3>

          <div className="fml">
            {String.raw`$$
A
=
\int_0^{2\pi}
\int_0^h
a\,dz\,d\theta
=
2\pi ah.
$$`}
          </div>

          <p>
            This agrees with the familiar lateral surface area of a cylinder.
          </p>
        
    </section>

        <Divider />
<section className="section" id="regularity">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">10. Regular Parametrizations</h2>

          

          <p>
            A parametrization is regular at a point when the two tangent vectors
            are linearly independent:
          </p>

          <div className="fml">
            {String.raw`$$
\mathbf r_u\times\mathbf r_v\ne\mathbf0.
$$`}
          </div>

          <p>
            If the cross product is zero, the parameterization may fail to
            describe a smooth surface at that point, or the chosen coordinates
            may become singular.
          </p>

          <p>
            This condition is important because the surface-area formula depends
            directly on the magnitude of the cross product.
          </p>
        
    </section>

        <Divider />
<section className="section" id="orientation">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">11. Orientation and Surface Normals</h2>

          

          <p>
            A parametrized surface can have two opposite normal directions. The
            two possibilities are
          </p>

          <div className="fml">
            {String.raw`$$
            \mathbf r_u\times\mathbf r_v
            \qquad\text{and}\qquad
            \mathbf r_v\times\mathbf r_u.
            $$`}
            </div>

          <p>
            They differ only by a negative sign. For ordinary area, orientation
            does not matter because
          </p>

          <div className="fml">
            {String.raw`$$
|\mathbf r_v\times\mathbf r_u|
=
|\mathbf r_u\times\mathbf r_v|.
$$`}
          </div>

          <p>
            Orientation becomes important in flux integrals, which are studied
            in the next topic.
          </p>
        
    </section>

        <Divider />
<section className="section" id="common-mistakes">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">12. Common Mistakes</h2>

          

          <ul>
            <li>
              Forgetting that a surface parameterization requires two
              parameters.
            </li>

            <li>Computing r_u and r_v incorrectly.</li>

            <li>
              Using a dot product instead of a cross product to construct a
              normal vector.
            </li>

            <li>
              Forgetting the magnitude of the cross product when calculating
              ordinary surface area.
            </li>

            <li>Using incorrect parameter limits.</li>

            <li>
              Confusing the surface-area element dS with the parameter-domain
              element du dv.
            </li>

            <li>
              Forgetting that reversing the cross-product order reverses the
              normal direction.
            </li>
          </ul>
        
    </section>

        <Divider />
<section className="section" id="choosing-parameterization">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">13. Choosing a Useful Parameterization</h2>

          

          <p>
            A good parameterization should match the geometry of the surface.
            Common choices include:
          </p>

          <ul>
            <li>Planes: use two Cartesian parameters.</li>

            <li>Graphs z=f(x,y): use x and y directly.</li>

            <li>Cylinders: use an angular parameter and height.</li>

            <li>Spheres: use two angular parameters.</li>

            <li>
              Surfaces with radial symmetry: polar, cylindrical, or spherical
              coordinates may simplify the parameterization.
            </li>
          </ul>
        
    </section>

        <Divider />
<section className="section" id="key-formulas">
      <div className="sec-badge">Reference</div>
      <h2 className="sec-title">14. Key Formulas and Summary</h2>

          

          <div className="fml">
            {String.raw`$$
\boxed{
\mathbf r(u,v)
=
\langle x(u,v),y(u,v),z(u,v)\rangle
}
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
\boxed{
\mathbf r_u
=
\frac{\partial\mathbf r}{\partial u},
\qquad
\mathbf r_v
=
\frac{\partial\mathbf r}{\partial v}
}
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
\boxed{
\mathbf n
=
\mathbf r_u\times\mathbf r_v
}
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
\boxed{
dS
=
|\mathbf r_u\times\mathbf r_v|
\,du\,dv
}
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
\boxed{
A(S)
=
\iint_D
|\mathbf r_u\times\mathbf r_v|
\,du\,dv
}
$$`}
          </div>

          <div className="fml">
            {String.raw`$$
\boxed{
z=f(x,y)
\quad\Longrightarrow\quad
dS
=
\sqrt{1+f_x^2+f_y^2}\,dA
}
$$`}
          </div>

          <p>
            The central idea is simple: parameterize the surface, differentiate
            with respect to both parameters, use their cross product to measure
            the local area scaling, and integrate over the parameter domain.
          </p>
        
    </section>

        <Divider />

        <section id="mcq-parametrized-surface-area" className="section">
          <GuideMcqSection
            id="mcq-parametrized-surface-area"
            badge="Practice"
            title="Parametrized Surface Area — 20-Question Quiz"
            scoreId="scoreparametrizedsurfacearea"
            section="parametrized-surface-area"
            questions={MV_PARAMETRIZED_SURFACE_AREA_QUIZ}
          />
        </section>

        <GuideFooter />
      </main>
    </>
  );
}

export default function ParametrizedSurfaceAreaGuide() {
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Parametrized Surface Area"
    >
      <ParametrizedSurfaceAreaContent />
    </StudyGuideShell>
  );
}
