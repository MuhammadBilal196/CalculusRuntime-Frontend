import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { MV_FLUX_INTEGRALS_GENERAL_SURFACES_QUIZ } from "../../data/mvCoordinateTransformationsQuiz";
import "./PartialDerivativesGuide.css";
import { RealLifeUse } from "../calculus/CalcBlocks";

function Divider() {
  return <hr className="divider" />;
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>Operational Blueprint:</strong> Flux integrals measure how
        strongly a vector field passes through an oriented surface. For a
        general parameterized surface
        {" $\\mathbf r(u,v)$"}, the partial derivatives
        {" $\\mathbf r_u$"} and {" $\\mathbf r_v$"} generate a normal-area
        vector. The dot product of the vector field with that oriented
        normal-area vector produces the flux density in parameter space. The
        complete workflow is therefore: choose a parameterization, determine the
        parameter domain, compute tangent vectors, form the oriented cross
        product, evaluate the vector field on the surface, take the dot product,
        and integrate over the domain.
      </p>

      <div className="guide-navigation">
        <a href="/parametrized-surface-area/2" className="guide-nav-button">
          ← Previous Topic: Parametrized Surface Area
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

      <div className="sb-group">Part 2</div>

      <a className="sb-link" href="/parametrized-surface-area/2">
        Parametrized Surface Area
      </a>

      <a className="sb-link active" href="/flux-integrals-general-surfaces/2">
        Flux Integrals over General Parameterized Surfaces
      </a>
    </nav>
  );
}

function GuideHeader() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">
        Coordinate Transformations &amp; Surfaces · Part 2
      </div>

      <h1 className="ch-title">
        Flux Integrals over General Parameterized Surfaces
      </h1>

      <p className="ch-sub">
        Oriented surfaces, normal vectors, vector-field flux, surface
        parameterizations, graph surfaces, cylinders, and closed-surface
        applications
      </p>

      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

function TableOfContents() {
  return (
    <nav className="toc">
      <div className="toc-h">
        Flux Integrals over General Parameterized Surfaces Contents
      </div>

      <div className="toc-grid">
        <a className="toc-a" href="#flux-definition">
          1. What Is a Flux Integral?
        </a>

        <a className="toc-a" href="#oriented-normal">
          2. Oriented Normal-Area Vectors
        </a>

        <a className="toc-a" href="#parameter-domain">
          3. Parameter Domain and Surface Mapping
        </a>

        <a className="toc-a" href="#general-flux-formula">
          4. General Parameterized Flux Formula
        </a>

        <a className="toc-a" href="#field-evaluation">
          5. Evaluating the Vector Field on the Surface
        </a>

        <a className="toc-a" href="#worked-examples">
          Worked Examples
        </a>

        <a className="toc-a" href="#plane-flux-example">
          6. Plane Patch Flux
        </a>

        <a className="toc-a" href="#graph-flux-example">
          7. Graph Surface Flux
        </a>

        <a className="toc-a" href="#cylinder-flux-example">
          8. Cylindrical Surface Flux
        </a>

        <a className="toc-a" href="#sphere-flux-example">
          9. Spherical Flux
        </a>

        <a className="toc-a" href="#orientation">
          10. Orientation and Sign
        </a>

        <a className="toc-a" href="#regularity">
          11. Regularity and Singular Points
        </a>

        <a className="toc-a" href="#piecewise-surfaces">
          12. Piecewise and Closed Surfaces
        </a>

        <a className="toc-a" href="#divergence-theorem">
          13. Relation to the Divergence Theorem
        </a>

        <a className="toc-a" href="#common-mistakes">
          14. Common Mistakes
        </a>

        <a className="toc-a" href="#efficient-workflow">
          15. Efficient Flux Workflow
        </a>

        <a className="toc-a" href="#key-formulas">
          Key Formulas
        </a>

        <a className="toc-a" href="#flux-quiz">
          20-Question Quiz
        </a>
      </div>
    </nav>
  );
}

function SectionDefinition() {
  return (
    <section className="section" id="flux-definition">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">1. What Is a Flux Integral?</h2>

      <p>
        A vector field assigns a vector to every point in space. A flux integral
        measures the net amount of that vector field passing through an oriented
        surface.
      </p>

      <div className="box def">
        <div className="box-lbl">
          Definition — Flux Through an Oriented Surface
        </div>

        <p>
          Let {"$\\mathbf F$"} be a vector field and let {"$S$"} be an oriented
          surface with unit normal {"$\\mathbf n$"}. The flux of
          {"$\\mathbf F$"} through {"$S$"} is
        </p>

        <div className="fml">
          {String.raw`$$
          \boxed{
          \iint_S
          \mathbf F\cdot\mathbf n\,dS
          }
          $$`}
        </div>

        <p>
          The dot product selects the component of the vector field in the
          chosen normal direction. A positive contribution means the field
          points generally with the chosen orientation, while a negative
          contribution means it points generally against it.
        </p>
      </div>

      <RealLifeUse>
        Flux integrals appear in fluid transport, electric and magnetic fields,
        heat transfer, and any model where the quantity of interest is how a
        vector field crosses a surface.
      </RealLifeUse>
    </section>
  );
}

function SectionOrientedNormal() {
  return (
    <section className="section" id="oriented-normal">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">2. Oriented Normal-Area Vectors</h2>

      <p>
        For a parameterized surface, the two tangent vectors provide a
        convenient normal direction. If
        {" $\\mathbf r(u,v)$"} describes the surface, then
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
        Their cross product is perpendicular to the surface and already contains
        the surface-area scaling:
      </p>

      <div className="fml">
        {String.raw`$$
        \boxed{
        d\mathbf S
        =
        (\mathbf r_u\times\mathbf r_v)\,du\,dv
        }
        $$`}
      </div>

      <p>
        Here {"$d\\mathbf S$"} is an oriented normal-area vector. Its magnitude
        gives the ordinary area element:
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

      <p>Reversing the parameter order reverses orientation:</p>

      <div className="fml">
        {String.raw`$$
        \mathbf r_v\times\mathbf r_u
        =
        -(\mathbf r_u\times\mathbf r_v).
        $$`}
      </div>
    </section>
  );
}

function SectionParameterDomain() {
  return (
    <section className="section" id="parameter-domain">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">3. Parameter Domain and Surface Mapping</h2>

      <p>
        A parameterized surface is defined on a region {"$D$"} in the parameter
        plane. Every point in {"$D$"} maps to a point on the physical surface.
      </p>

      <div className="fml">
        {String.raw`$$
        \mathbf r:
        D\subset\mathbb R^2
        \longrightarrow
        S\subset\mathbb R^3.
        $$`}
      </div>

      <p>
        The parameter limits determine exactly which portion of the surface is
        integrated. A correct flux calculation therefore begins by checking that
        the parameter domain covers the intended surface once, except for
        harmless boundary duplication.
      </p>

      <div className="box tip">
        <div className="box-lbl">Parameter-Domain Check</div>
        <ul className="steps">
          <li>
            <span>Identify every parameter and its geometric meaning.</span>
          </li>
          <li>
            <span>
              Determine the full parameter range needed for the surface patch.
            </span>
          </li>
          <li>
            <span>Check whether the mapping covers the surface once.</span>
          </li>
          <li>
            <span>Check the orientation before evaluating the flux.</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

function SectionGeneralFormula() {
  return (
    <section className="section" id="general-flux-formula">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">4. General Parameterized Flux Formula</h2>

      <p>
        Substitute the parameterization into the vector field and replace the
        unit-normal-area product with the cross product of the tangent vectors.
        This gives the central formula:
      </p>

      <div className="fml">
        {String.raw`$$
        \boxed{
        \iint_S
        \mathbf F\cdot\mathbf n\,dS
        =
        \iint_D
        \mathbf F(\mathbf r(u,v))
        \cdot
        (\mathbf r_u\times\mathbf r_v)
        \,du\,dv
        }
        $$`}
      </div>

      <p>
        The cross product must be consistent with the required orientation. If
        the opposite orientation is needed, use
        {" $\\mathbf r_v\\times\\mathbf r_u$"} instead.
      </p>

      <div className="box def">
        <div className="box-lbl">Flux Workflow</div>
        <ol>
          <li>Write the parameterization.</li>
          <li>Write the parameter domain.</li>
          <li>Compute the two tangent vectors.</li>
          <li>Form the oriented cross product.</li>
          <li>Evaluate the vector field on the surface.</li>
          <li>Take the dot product.</li>
          <li>Integrate over the parameter domain.</li>
        </ol>
      </div>
    </section>
  );
}

function SectionFieldEvaluation() {
  return (
    <section className="section" id="field-evaluation">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">
        5. Evaluating the Vector Field on the Surface
      </h2>

      <p>
        A common source of error is leaving the vector field in terms of
        {" $x,y,z$"} after switching to surface parameters. The vector field
        must be evaluated at the surface point:
      </p>

      <div className="fml">
        {String.raw`$$
        \mathbf F(\mathbf r(u,v))
        =
        \mathbf F
        \left(
        x(u,v),
        y(u,v),
        z(u,v)
        \right).
        $$`}
      </div>

      <p>
        Only after this substitution is the dot product formed with
        {" $\\mathbf r_u\\times\\mathbf r_v$"}. Keeping the composition explicit
        helps prevent mixing parameter variables with Cartesian variables.
      </p>

      <div className="box warn">
        <div className="box-lbl">Warning</div>
        <p>
          Do not integrate {"$\\mathbf F(x,y,z)$"} over {"$du\\,dv$"}
          directly. First replace {"$x,y,z$"} by the parameterized surface.
        </p>
      </div>
    </section>
  );
}

function WorkedExamplesIntro() {
  return (
    <section className="section" id="worked-examples">
      <div className="sec-badge">Practice</div>
      <h2 className="sec-title">Worked Examples</h2>

      <p>
        The examples below apply the full flux workflow to plane patches, graph
        surfaces, cylindrical surfaces, and a sphere.
      </p>

      <p>
        In every example, the decisive step is not just computing a normal
        vector, but making sure the vector field, orientation, parameter domain,
        and integration variables are all consistent.
      </p>
    </section>
  );
}

function PlaneFluxExample() {
  return (
    <section className="section" id="plane-flux-example">
      <div className="sec-badge">Worked Example</div>
      <h2 className="sec-title">6. Flux Through a Plane Patch</h2>

      <p>Let</p>

      <div className="fml">
        {String.raw`$$
        \mathbf r(u,v)
        =
        \langle u,v,u+v\rangle,
        \qquad
        0\le u\le1,\quad0\le v\le1,
        $$`}
      </div>

      <p>and let the vector field be</p>

      <div className="fml">
        {String.raw`$$
        \mathbf F(x,y,z)
        =
        \langle0,0,z\rangle.
        $$`}
      </div>

      <h3>Step 1: Tangent vectors</h3>

      <div className="fml">
        {String.raw`$$
        \mathbf r_u=\langle1,0,1\rangle,
        \qquad
        \mathbf r_v=\langle0,1,1\rangle.
        $$`}
      </div>

      <h3>Step 2: Oriented normal-area vector</h3>

      <div className="fml">
        {String.raw`$$
        \mathbf r_u\times\mathbf r_v
        =
        \langle-1,-1,1\rangle.
        $$`}
      </div>

      <h3>Step 3: Evaluate the field</h3>

      <div className="fml">
        {String.raw`$$
        \mathbf F(\mathbf r(u,v))
        =
        \langle0,0,u+v\rangle.
        $$`}
      </div>

      <h3>Step 4: Dot product</h3>

      <div className="fml">
        {String.raw`$$
        \mathbf F(\mathbf r(u,v))
        \cdot
        (\mathbf r_u\times\mathbf r_v)
        =
        u+v.
        $$`}
      </div>

      <h3>Step 5: Integrate</h3>

      <div className="fml">
        {String.raw`$$
        \Phi
        =
        \int_0^1\int_0^1
        (u+v)\,du\,dv
        =
        1.
        $$`}
      </div>

      <p>
        The upward-oriented flux through this patch is therefore
        <strong>1</strong>.
      </p>
    </section>
  );
}

function GraphFluxExample() {
  return (
    <section className="section" id="graph-flux-example">
      <div className="sec-badge">Worked Example</div>
      <h2 className="sec-title">7. Flux Through a Graph Surface</h2>

      <p>
        Consider the graph
        {" $z=x+y$"} over the square {" $0\\le x\\le1$"},{" $0\\le y\\le1$"},
        with upward orientation. Let
      </p>

      <div className="fml">
        {String.raw`$$
        \mathbf F(x,y,z)=\langle0,0,z\rangle.
        $$`}
      </div>

      <p>Parameterize the graph by</p>

      <div className="fml">
        {String.raw`$$
        \mathbf r(x,y)
        =
        \langle x,y,x+y\rangle.
        $$`}
      </div>

      <h3>Step 1: Normal-area vector</h3>

      <div className="fml">
        {String.raw`$$
        \mathbf r_x\times\mathbf r_y
        =
        \langle-1,-1,1\rangle.
        $$`}
      </div>

      <h3>Step 2: Evaluate the field</h3>

      <div className="fml">
        {String.raw`$$
        \mathbf F(\mathbf r(x,y))
        =
        \langle0,0,x+y\rangle.
        $$`}
      </div>

      <h3>Step 3: Flux integral</h3>

      <div className="fml">
        {String.raw`$$
        \Phi
        =
        \int_0^1\int_0^1
        (x+y)\,dx\,dy
        =
        1.
        $$`}
      </div>

      <p>For an upward-oriented graph, the compact formula</p>

      <div className="fml">
        {String.raw`$$
        d\mathbf S
        =
        \langle-f_x,-f_y,1\rangle\,dA
        $$`}
      </div>

      <p>is often the fastest route.</p>
    </section>
  );
}

function CylinderFluxExample() {
  return (
    <section className="section" id="cylinder-flux-example">
      <div className="sec-badge">Worked Example</div>
      <h2 className="sec-title">8. Flux Through a Cylindrical Surface</h2>

      <p>
        Consider the lateral surface of a cylinder of radius {"$a$"} and height{" "}
        {"$h$"}:
      </p>

      <div className="fml">
        {String.raw`$$
        \mathbf r(\theta,z)
        =
        \langle
        a\cos\theta,
        a\sin\theta,
        z
        \rangle,
        $$`}
      </div>

      <div className="fml">
        {String.raw`$$
        0\le\theta\le2\pi,
        \qquad
        0\le z\le h.
        $$`}
      </div>

      <p>Take the outward-pointing field</p>

      <div className="fml">
        {String.raw`$$
        \mathbf F(x,y,z)
        =
        \langle x,y,0\rangle.
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
        \rangle,
        \qquad
        \mathbf r_z
        =
        \langle0,0,1\rangle.
        $$`}
      </div>

      <h3>Step 2: Outward orientation</h3>

      <div className="fml">
        {String.raw`$$
        \mathbf r_\theta\times\mathbf r_z
        =
        \langle
        a\cos\theta,
        a\sin\theta,
        0
        \rangle.
        $$`}
      </div>

      <h3>Step 3: Dot product</h3>

      <div className="fml">
        {String.raw`$$
        \mathbf F(\mathbf r)
        =
        \langle
        a\cos\theta,
        a\sin\theta,
        0
        \rangle,
        $$`}
      </div>

      <div className="fml">
        {String.raw`$$
        \mathbf F(\mathbf r)
        \cdot
        (\mathbf r_\theta\times\mathbf r_z)
        =
        a^2.
        $$`}
      </div>

      <h3>Step 4: Integrate</h3>

      <div className="fml">
        {String.raw`$$
        \Phi
        =
        \int_0^{2\pi}
        \int_0^h
        a^2\,dz\,d\theta
        =
        2\pi a^2h.
        $$`}
      </div>
    </section>
  );
}

function SphereFluxExample() {
  return (
    <section className="section" id="sphere-flux-example">
      <div className="sec-badge">Worked Example</div>
      <h2 className="sec-title">9. Flux Through a Sphere</h2>

      <p>
        Let {"$S$"} be the sphere of radius {"$a$"} centered at the origin,
        oriented outward, and let
      </p>

      <div className="fml">
        {String.raw`$$
        \mathbf F(x,y,z)
        =
        \langle x,y,z\rangle.
        $$`}
      </div>

      <p>Use the spherical parameterization</p>

      <div className="fml">
        {String.raw`$$
        \mathbf r(\phi,\theta)
        =
        \langle
        a\sin\phi\cos\theta,
        a\sin\phi\sin\theta,
        a\cos\phi
        \rangle.
        $$`}
      </div>

      <p>with</p>

      <div className="fml">
        {String.raw`$$
        0\le\phi\le\pi,
        \qquad
        0\le\theta\le2\pi.
        $$`}
      </div>

      <p>For this outward orientation,</p>

      <div className="fml">
        {String.raw`$$
        \mathbf r_\phi\times\mathbf r_\theta
        =
        a^2\sin\phi\,
        \hat{\mathbf r}.
        $$`}
      </div>

      <p>
        Since {"$\\mathbf F=a\\hat{\\mathbf r}$"} on the sphere, the flux
        density becomes {"$a^3\\sin\\phi$"}. Hence
      </p>

      <div className="fml">
        {String.raw`$$
        \Phi
        =
        \int_0^{2\pi}
        \int_0^\pi
        a^3\sin\phi
        \,d\phi\,d\theta
        =
        4\pi a^3.
        $$`}
      </div>

      <p>
        This direct parameterized calculation agrees with the divergence
        theorem, since {"$\\nabla\\cdot\\mathbf F=3$"}.
      </p>
    </section>
  );
}

function SectionOrientation() {
  return (
    <section className="section" id="orientation">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">10. Orientation and Sign</h2>

      <p>
        Flux depends on orientation. If the surface orientation is reversed, the
        flux changes sign:
      </p>

      <div className="fml">
        {String.raw`$$
        \boxed{
        \Phi_{-\mathbf n}
        =
        -\Phi_{\mathbf n}
        }.
        $$`}
      </div>

      <p>
        Therefore, one of the first decisions in a flux problem is whether the
        surface should use an upward, downward, outward, inward, or otherwise
        prescribed normal direction.
      </p>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Flip the orientation</div>

        <p>
          Suppose an upward-oriented graph gives flux {"$\\Phi=5$"}. What
          happens for the downward orientation?
        </p>

        <div className="sol">
          <div className="sol-lbl">Solution</div>

          <div className="fml">
            {String.raw`$$
            \Phi_{\text{downward}}
            =
            -5.
            $$`}
          </div>

          <p>The magnitude is unchanged, but the sign reverses.</p>
        </div>
      </div>
    </section>
  );
}

function SectionRegularity() {
  return (
    <section className="section" id="regularity">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">11. Regularity and Singular Points</h2>

      <p>
        A parameterized surface is regular at a point when its tangent vectors
        are linearly independent. Equivalently,
      </p>

      <div className="fml">
        {String.raw`$$
        \mathbf r_u\times\mathbf r_v\ne\mathbf0.
        $$`}
      </div>

      <p>
        At a singular point the normal-area vector vanishes, so the ordinary
        parameterized surface formula cannot be used there without further
        analysis.
      </p>

      <div className="box note">
        <div className="box-lbl">Geometric Meaning</div>
        <p>
          The magnitude of {"$\\mathbf r_u\\times\\mathbf r_v$"} measures the
          local area stretching from parameter space to the physical surface. If
          it becomes zero, two parameter directions collapse into the same
          tangent direction.
        </p>
      </div>
    </section>
  );
}

function SectionPiecewiseClosed() {
  return (
    <section className="section" id="piecewise-surfaces">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">12. Piecewise and Closed Surfaces</h2>

      <p>
        A complicated surface is often split into several parameterized patches:
      </p>

      <div className="fml">
        {String.raw`$$
        S=S_1\cup S_2\cup\cdots\cup S_m.
        $$`}
      </div>

      <p>
        The total flux is the sum of the fluxes through all patches, provided
        their orientations are chosen consistently.
      </p>

      <div className="fml">
        {String.raw`$$
        \boxed{
        \iint_S\mathbf F\cdot\mathbf n\,dS
        =
        \sum_{k=1}^m
        \iint_{S_k}
        \mathbf F\cdot\mathbf n_k\,dS
        }.
        $$`}
      </div>

      <p>
        For a closed surface, the conventional orientation is outward. The
        interior-facing orientation is inward.
      </p>

      <div className="box exm">
        <div className="box-lbl">Worked Example</div>
        <div className="exm-title">Closed-surface orientation</div>

        <p>
          A flux problem asks for the flux through the boundary of a solid
          region. Which orientation should be used by default?
        </p>

        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            Use the outward normal unless the problem explicitly requests the
            inward orientation.
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionDivergenceTheorem() {
  return (
    <section className="section" id="divergence-theorem">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">13. Relation to the Divergence Theorem</h2>

      <p>
        For a sufficiently smooth vector field and a closed, outward-oriented
        surface enclosing a volume V, the divergence theorem converts the
        surface flux into a volume integral:
      </p>

      <div className="fml">
        {String.raw`$$
        \boxed{
        \iint_{\partial V}
        \mathbf F\cdot\mathbf n\,dS
        =
        \iiint_V
        \nabla\cdot\mathbf F\,dV
        }.
        $$`}
      </div>

      <p>
        The direct parameterized formula remains essential for open surfaces and
        for problems where the surface is already given by a natural
        parameterization.
      </p>

      <div className="box tip">
        <div className="box-lbl">When to Switch Methods</div>
        <p>
          If the surface is closed and the divergence of the field is simpler to
          integrate over the enclosed volume, the divergence theorem can replace
          a difficult surface calculation. Otherwise, stay with the
          parameterized flux formula.
        </p>
      </div>
    </section>
  );
}

function SectionCommonMistakes() {
  return (
    <section className="section" id="common-mistakes">
      <div className="sec-badge">Section</div>
      <h2 className="sec-title">14. Common Mistakes</h2>

      <ul className="steps">
        <li>
          <span>Using the wrong parameter domain.</span>
        </li>
        <li>
          <span>
            Forgetting to evaluate the field at {"$\\mathbf r(u,v)$"}.
          </span>
        </li>
        <li>
          <span>
            Using {"$\\mathbf r_u\\times\\mathbf r_v$"} when the opposite
            orientation is required.
          </span>
        </li>
        <li>
          <span>
            Replacing the oriented normal-area vector with only its magnitude.
          </span>
        </li>
        <li>
          <span>
            Mixing {"$dS$"} with {"$du\\,dv$"} without the cross-product factor.
          </span>
        </li>
        <li>
          <span>
            Forgetting that reversing orientation changes the sign of flux.
          </span>
        </li>
        <li>
          <span>
            Applying the divergence theorem to an open surface without closing
            it appropriately.
          </span>
        </li>
        <li>
          <span>Ignoring singular parameter points.</span>
        </li>
      </ul>

      <div className="box warn">
        <div className="box-lbl">Fast Verification</div>
        <p>
          Check the direction of the normal, the dimensions of the integrand,
          the parameter limits, and the sign of the final result before
          considering the calculation complete.
        </p>
      </div>
    </section>
  );
}

function SectionEfficientWorkflow() {
  return (
    <section className="section" id="efficient-workflow">
      <div className="sec-badge">Reference</div>
      <h2 className="sec-title">15. Efficient Flux Workflow</h2>

      <ol className="steps">
        <li>
          <span>
            Identify whether the surface is open, closed, or piecewise.
          </span>
        </li>
        <li>
          <span>Choose parameters that match the geometry.</span>
        </li>
        <li>
          <span>Write the exact parameter domain.</span>
        </li>
        <li>
          <span>Compute the tangent vectors and oriented cross product.</span>
        </li>
        <li>
          <span>Evaluate the vector field on the surface.</span>
        </li>
        <li>
          <span>
            Form the dot product with the oriented normal-area vector.
          </span>
        </li>
        <li>
          <span>Integrate over parameter space.</span>
        </li>
        <li>
          <span>Check the orientation and sign of the result.</span>
        </li>
      </ol>

      <p>
        This workflow separates geometry from algebra and makes flux problems
        much easier to audit.
      </p>
    </section>
  );
}

function SectionKeyFormulas() {
  return (
    <section className="section" id="key-formulas">
      <div className="sec-badge">Reference</div>
      <h2 className="sec-title">Key Formulas and Summary</h2>

      <div className="box def">
        <div className="box-lbl">General Parameterization</div>
        <div className="fml">
          {String.raw`$$
          \boxed{
          \mathbf r=\mathbf r(u,v)
          }
          $$`}
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">Tangent Vectors</div>
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
      </div>

      <div className="box def">
        <div className="box-lbl">Oriented Normal-Area Vector</div>
        <div className="fml">
          {String.raw`$$
          \boxed{
          d\mathbf S
          =
          (\mathbf r_u\times\mathbf r_v)\,du\,dv
          }
          $$`}
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">General Flux Integral</div>
        <div className="fml">
          {String.raw`$$
          \boxed{
          \iint_S
          \mathbf F\cdot\mathbf n\,dS
          =
          \iint_D
          \mathbf F(\mathbf r(u,v))
          \cdot
          (\mathbf r_u\times\mathbf r_v)
          \,du\,dv
          }
          $$`}
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">Graph, Upward Orientation</div>
        <div className="fml">
          {String.raw`$$
          \boxed{
          z=f(x,y)
          \Longrightarrow
          d\mathbf S
          =
          \langle-f_x,-f_y,1\rangle\,dA
          }
          $$`}
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">Closed Surface</div>
        <div className="fml">
          {String.raw`$$
          \boxed{
          \iint_{\partial V}
          \mathbf F\cdot\mathbf n\,dS
          =
          \iiint_V
          \nabla\cdot\mathbf F\,dV
          }
          $$`}
        </div>
      </div>

      <div className="box thm">
        <div className="box-lbl">Core Principle</div>
        <p>
          Flux is an oriented quantity. The cross product simultaneously gives
          the normal direction and the local area scaling, which is why it is
          the natural object in general parameterized surface flux.
        </p>
      </div>
    </section>
  );
}

function GuideFooter() {
  return (
    <div className="pg-foot">
      <p>End of Flux Integrals over General Parameterized Surfaces.</p>

      <div className="guide-navigation">
        <a href="/jacobians-change-of-variables/1" className="guide-nav-button">
          ← Back to Part 1 — Page 1
        </a>
      </div>
    </div>
  );
}

function FluxIntegralsGeneralSurfacesContent() {
  return (
    <>
      <GuideSidebar />

      <main className="main">
        <GuideHeader />
        <TableOfContents />
        <OpeningNote />
        <Divider />

        <SectionDefinition />
        <Divider />

        <SectionOrientedNormal />
        <Divider />

        <SectionParameterDomain />
        <Divider />

        <SectionGeneralFormula />
        <Divider />

        <SectionFieldEvaluation />
        <Divider />

        <WorkedExamplesIntro />
        <Divider />

        <PlaneFluxExample />
        <Divider />

        <GraphFluxExample />
        <Divider />

        <CylinderFluxExample />
        <Divider />

        <SphereFluxExample />
        <Divider />

        <SectionOrientation />
        <Divider />

        <SectionRegularity />
        <Divider />

        <SectionPiecewiseClosed />
        <Divider />

        <SectionDivergenceTheorem />
        <Divider />

        <SectionCommonMistakes />
        <Divider />

        <SectionEfficientWorkflow />
        <Divider />

        <SectionKeyFormulas />
        <Divider />

        <section id="flux-quiz" className="section">
          <GuideMcqSection
            id="mcq-flux-integrals-general-surfaces"
            badge="Practice"
            title="Flux Integrals over General Parameterized Surfaces — 20-Question Quiz"
            scoreId="scorefluxintegralsgeneralsurfaces"
            section="flux-integrals-general-surfaces"
            questions={MV_FLUX_INTEGRALS_GENERAL_SURFACES_QUIZ}
          />
        </section>

        <GuideFooter />
      </main>
    </>
  );
}

function FluxIntegralsGeneralSurfacesGuide() {
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Flux Integrals over General Parameterized Surfaces"
    >
      <FluxIntegralsGeneralSurfacesContent />
    </StudyGuideShell>
  );
}

export default FluxIntegralsGeneralSurfacesGuide;
