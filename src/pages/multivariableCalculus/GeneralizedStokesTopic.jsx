// src/pages/multivariableCalculus/GeneralizedStokesTopic.jsx
// Differential Forms · Generalized Stokes' Theorem
// Rendered inside DifferentialFormsGuide (shares PartialDerivativesGuide.css).
// Scope: links back to the Stokes' Theorem and Divergence & Curl guides
// instead of re-deriving the classical theorems.

import { GuideMcqSection } from "../../components/GuideMcq";
import { RealLifeUse } from "../calculus/CalcBlocks";
import { MV_DF_STOKES_QUIZ } from "../../data/mvDifferentialFormsQuizzes";

export const GEN_STOKES_QUIZ_KEY = "df-stokes";

export const GEN_STOKES_NAV = [
  { id: "gs-boundary", label: "Boundaries & Orientation" },
  { id: "gs-theorem", label: "The Theorem" },
  { id: "gs-ftc", label: "Curves: Line Integrals" },
  { id: "gs-green", label: "Plane Regions: Green" },
  { id: "gs-stokes", label: "Surfaces: Classical Stokes" },
  { id: "gs-divergence", label: "Solids: Divergence Theorem" },
  { id: "gs-consequences", label: "Consequences" },
  { id: "gs-applications", label: "Applications" },
  { id: "gs-summary", label: "Key Formulas" },
  { id: "mcq-df-stokes", label: "Generalized Stokes Quiz" },
];

const LINK_STYLE = { color: "var(--gold)", fontWeight: 600 };

/* ── Helpers: same markup/classes as the Partial Derivatives guide ── */
function Box({ kind, label, children }) {
  return (
    <div className={`box ${kind}`}>
      <div className="box-lbl">{label}</div>
      {children}
    </div>
  );
}

function Example({ title, children }) {
  return (
    <div className="box exm">
      <div className="box-lbl">{"Example"}</div>
      <div className="exm-title">{title}</div>
      {children}
    </div>
  );
}

function Solution({ children }) {
  return (
    <div className="sol">
      <div className="sol-lbl">{"Solution"}</div>
      {children}
    </div>
  );
}

function F({ children }) {
  return <div className="fml">{children}</div>;
}

function SecHead({ n, title }) {
  return (
    <>
      <div className="sec-badge">{`Section ${n}`}</div>
      <h2 className="sec-title">{title}</h2>
    </>
  );
}

/* ═════════════════════════════ §1 ═════════════════════════════ */
function SectionBoundary() {
  return (
    <section className="section" id="gs-boundary">
      <SecHead n={1} title="Boundaries and Induced Orientation" />
      <p>
        {"The theorem relates an integral over a region $M$ to an integral over its edge $\\partial M$. Before stating it we need to say what the edge is and which way it is oriented. Throughout, $M$ is a smooth $k$-dimensional piece of $\\mathbb R^n$ (a curve, surface or solid) that is "}
        <strong>{"compact"}</strong>
        {" (closed and bounded) and "}
        <strong>{"oriented"}</strong>
        {"."}
      </p>

      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>{"$M$ (dimension $k$)"}</th>
              <th>{"Boundary $\\partial M$ (dimension $k-1$)"}</th>
              <th>{"Induced orientation"}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>{"Curve from $A$ to $B$"}</td><td>{"Two points $\\{B\\}-\\{A\\}$"}</td><td>{"$+$ at the end, $-$ at the start"}</td></tr>
            <tr><td>{"Plane region $D$"}</td><td>{"Closed curve(s)"}</td><td>{"Counterclockwise outer edge, region on the left"}</td></tr>
            <tr><td>{"Surface $S$ with normal $\\mathbf n$"}</td><td>{"Edge curve(s)"}</td><td>{"Right-hand rule: thumb along $\\mathbf n$"}</td></tr>
            <tr><td>{"Solid region $E$"}</td><td>{"Closed surface(s)"}</td><td>{"Outward unit normal"}</td></tr>
          </tbody>
        </table>
      </div>

      <Box kind="def" label={"Definition \u2014 Outward-First Rule"}>
        <p>{"An ordered basis $(\\mathbf v_1,\\dots,\\mathbf v_{k-1})$ of tangent vectors to $\\partial M$ is positively oriented if $(\\mathbf n_{\\text{out}},\\mathbf v_1,\\dots,\\mathbf v_{k-1})$ is positively oriented for $M$, where $\\mathbf n_{\\text{out}}$ points out of $M$. Every row of the table above is this one rule in a particular dimension."}</p>
      </Box>

      <Box kind="thm" label={"Theorem \u2014 A Boundary Has No Boundary"}>
        <F>{"$$\\partial(\\partial M)=\\varnothing$$"}</F>
        <p>{"A circle has no endpoints; a sphere has no edge. This is the geometric twin of the algebraic rule $d^2=0$."}</p>
      </Box>

      <Example title={"Orienting the edge of a hemisphere"}>
        <p>{"Let $S$ be the upper hemisphere $x^2+y^2+z^2=1$, $z\\ge0$, with upward normal. Which way does $\\partial S$ run?"}</p>
        <Solution>
          <p>{"$\\partial S$ is the equator $x^2+y^2=1$, $z=0$. Point your thumb up along $\\mathbf n$; your fingers curl counterclockwise as seen from above. So $\\partial S$ is parametrized by $\\mathbf r(t)=\\langle\\cos t,\\sin t,0\\rangle$, $0\\le t\\le2\\pi$."}</p>
          <p>{"Check with the outward-first rule at $(1,0,0)$: the outward direction along the surface is $-\\mathbf k$ (down toward the edge, away from the cap), the tangent is $\\mathbf j$, and $(-\\mathbf k)\\times\\mathbf j=\\mathbf i$ points out of the sphere, agreeing with the upward/outward normal there. \u2713"}</p>
        </Solution>
      </Example>

      <Example title={"An annulus has two boundary circles"}>
        <p>{"Describe $\\partial D$ for the annulus $D=\\{1\\le x^2+y^2\\le4\\}$ with the standard orientation of the plane."}</p>
        <Solution>
          <p>{"$\\partial D$ consists of two circles. Keeping $D$ on the left: the outer circle $r=2$ runs counterclockwise, and the inner circle $r=1$ runs "}<strong>{"clockwise"}</strong>{"."}</p>
          <F>{"$$\\partial D=C_2^{\\circlearrowleft}-C_1^{\\circlearrowleft}$$"}</F>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §2 ═════════════════════════════ */
function SectionTheorem() {
  return (
    <section className="section" id="gs-theorem">
      <SecHead n={2} title="The Generalized Stokes' Theorem" />
      <p>
        {"With forms, boundaries and orientations in place, one statement covers every integral theorem of vector calculus."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 Generalized Stokes' Theorem"}>
        <p>{"Let $M$ be a compact oriented $k$-manifold with boundary in $\\mathbb R^n$, with $\\partial M$ carrying the induced orientation, and let $\\omega$ be a smooth $(k-1)$-form defined on an open set containing $M$. Then"}</p>
        <F>{"$$\\boxed{\\int_M d\\omega=\\int_{\\partial M}\\omega}$$"}</F>
        <p>{"If $\\partial M=\\varnothing$, the right side is $0$."}</p>
      </Box>

      <h3 className="subsec">{"Why It Is True: The Unit Square"}</h3>
      <p>{"Every case reduces, through pullbacks and a partition of the region into small pieces, to the one-variable Fundamental Theorem of Calculus. Here is the core computation for a 1-form $\\omega=Q\\,dy$ on $M=[0,1]^2$."}</p>
      <Box kind="thm" label={"Proof Sketch on $[0,1]^2$"}>
        <F>{"$$\\iint_M d(Q\\,dy)=\\iint_M Q_x\\,dx\\wedge dy=\\int_0^1\\!\\Big(\\int_0^1Q_x\\,dx\\Big)dy=\\int_0^1\\big(Q(1,y)-Q(0,y)\\big)\\,dy$$"}</F>
        <p>{"On the boundary, $dy=0$ along the horizontal edges, the right edge $x=1$ runs upward and the left edge $x=0$ runs downward, so $\\oint_{\\partial M}Q\\,dy=\\int_0^1Q(1,y)\\,dy-\\int_0^1Q(0,y)\\,dy$. The two sides agree. The term $P\\,dx$ is handled the same way."}</p>
      </Box>

      <Example title={"Checking the theorem on the unit square"}>
        <p>{"Verify $\\iint_M d\\omega=\\oint_{\\partial M}\\omega$ for $\\omega=xy\\,dy$ on $M=[0,1]^2$."}</p>
        <Solution>
          <p><strong>{"Inside:"}</strong>{" $d\\omega=y\\,dx\\wedge dy$, so $\\displaystyle\\iint_M y\\,dA=\\int_0^1\\!\\!\\int_0^1y\\,dx\\,dy=\\tfrac12$."}</p>
          <p><strong>{"Boundary:"}</strong>{" bottom and top have $dy=0$; the left edge has $x=0$; only the right edge $x=1$, $y:0\\to1$ contributes $\\int_0^1y\\,dy=\\tfrac12$. \u2713"}</p>
        </Solution>
      </Example>

      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>{"$k$"}</th>
              <th>{"$M$"}</th>
              <th>{"$\\omega$"}</th>
              <th>{"Classical theorem"}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>{"$1$"}</td><td>{"Curve"}</td><td>{"0-form $f$"}</td><td>{"Fundamental Theorem for line integrals"}</td></tr>
            <tr><td>{"$2$"}</td><td>{"Plane region"}</td><td>{"1-form $P\\,dx+Q\\,dy$"}</td><td>{"Green's Theorem"}</td></tr>
            <tr><td>{"$2$"}</td><td>{"Surface in $\\mathbb R^3$"}</td><td>{"Work 1-form $\\omega_{\\mathbf F}$"}</td><td>{"Stokes' Theorem"}</td></tr>
            <tr><td>{"$3$"}</td><td>{"Solid in $\\mathbb R^3$"}</td><td>{"Flux 2-form $\\Phi_{\\mathbf F}$"}</td><td>{"Divergence Theorem"}</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ═════════════════════════════ §3 ═════════════════════════════ */
function SectionFtc() {
  return (
    <section className="section" id="gs-ftc">
      <SecHead n={3} title="Curves: the Fundamental Theorem for Line Integrals" />
      <p>{"Take $k=1$: $M=C$ is an oriented curve from $A$ to $B$ and $\\omega=f$ is a function. Then $\\partial C=\\{B\\}-\\{A\\}$ and integrating a 0-form over points means evaluating it."}</p>

      <Box kind="thm" label={"Case $k=1$"}>
        <F>{"$$\\int_C df=\\int_C\\nabla f\\cdot d\\mathbf r=f(B)-f(A)$$"}</F>
        <p>{"On $M=[a,b]\\subset\\mathbb R$ this is the ordinary Fundamental Theorem of Calculus $\\int_a^bf'(x)\\,dx=f(b)-f(a)$."}</p>
      </Box>

      <Example title={"Path independence"}>
        <p>{"Evaluate $\\displaystyle\\int_C(2xy\\,dx+x^2\\,dy+dz)$ along any smooth curve from $(0,0,0)$ to $(1,2,3)$."}</p>
        <Solution>
          <p>{"The integrand is $df$ for $f=x^2y+z$ (check: $f_x=2xy$, $f_y=x^2$, $f_z=1$). So"}</p>
          <F>{"$$\\int_C df=f(1,2,3)-f(0,0,0)=(2+3)-0=5$$"}</F>
          <p>{"No parametrization is needed, and every path gives $5$."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §4 ═════════════════════════════ */
function SectionGreen() {
  return (
    <section className="section" id="gs-green">
      <SecHead n={4} title="Plane Regions: Green's Theorem" />
      <p>{"Take $k=2$ in the plane: $M=D$ is a region and $\\omega=P\\,dx+Q\\,dy$. From the previous topic, $d\\omega=(Q_x-P_y)\\,dx\\wedge dy$."}</p>

      <Box kind="thm" label={"Case $k=2$ in $\\mathbb R^2$"}>
        <F>{"$$\\iint_D\\Big(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\Big)dA=\\oint_{\\partial D}P\\,dx+Q\\,dy$$"}</F>
      </Box>

      <Example title={"Area from a boundary integral"}>
        <p>{"Use $\\omega=\\tfrac12(x\\,dy-y\\,dx)$ to find the area inside the ellipse $x=a\\cos t$, $y=b\\sin t$."}</p>
        <Solution>
          <p>{"$d\\omega=\\tfrac12(dx\\wedge dy-dy\\wedge dx)=dx\\wedge dy$, so $\\iint_D d\\omega$ is the area. By the theorem it equals the boundary integral:"}</p>
          <F>{"$$x\\,dy-y\\,dx=\\big(ab\\cos^2t+ab\\sin^2t\\big)\\,dt=ab\\,dt,\\qquad A=\\frac12\\int_0^{2\\pi}ab\\,dt=\\pi ab$$"}</F>
          <p>{"For $a=3$, $b=2$ the area is $6\\pi$. Mechanical planimeters measure area this way, by tracing only the boundary."}</p>
        </Solution>
      </Example>

      <Example title={"Circulation from an area integral"}>
        <p>{"Evaluate $\\oint_C(-y\\,dx+x\\,dy)$ around the circle of radius $R$, counterclockwise."}</p>
        <Solution>
          <p>{"$d(-y\\,dx+x\\,dy)=2\\,dx\\wedge dy$, so the integral is $2\\times\\pi R^2=2\\pi R^2$. Direct check with $x=R\\cos t$, $y=R\\sin t$: the integrand is $R^2\\,dt$, giving $2\\pi R^2$. \u2713"}</p>
        </Solution>
      </Example>

      <Example title={"A region with a hole"}>
        <p>{"On the annulus $D=\\{1\\le x^2+y^2\\le4\\}$, evaluate $\\oint_{\\partial D}(-y\\,dx+x\\,dy)$ with the induced orientation."}</p>
        <Solution>
          <p>{"By the theorem: $\\iint_D2\\,dA=2(4\\pi-\\pi)=6\\pi$."}</p>
          <p>{"From the boundary: the outer circle (counterclockwise) gives $2\\pi\\cdot4=8\\pi$ and the inner circle (clockwise) gives $-2\\pi\\cdot1=-2\\pi$. Total $6\\pi$. \u2713"}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §5 ═════════════════════════════ */
function SectionStokes() {
  return (
    <section className="section" id="gs-stokes">
      <SecHead n={5} title="Surfaces: Classical Stokes' Theorem" />
      <p>
        {"Take $k=2$ in $\\mathbb R^3$: $M=S$ is an oriented surface and $\\omega=\\omega_{\\mathbf F}$ is the work 1-form of a field $\\mathbf F$. Since $d\\omega_{\\mathbf F}$ is the flux 2-form of $\\nabla\\times\\mathbf F$, the general theorem reads exactly as in the "}
        <a href="/stokes-theorem/1" style={LINK_STYLE}>{"Stokes' Theorem"}</a>
        {" guide."}
      </p>

      <Box kind="thm" label={"Case $k=2$ in $\\mathbb R^3$"}>
        <F>{"$$\\iint_S(\\nabla\\times\\mathbf F)\\cdot\\mathbf n\\,dS=\\oint_{\\partial S}\\mathbf F\\cdot d\\mathbf r$$"}</F>
      </Box>

      <Example title={"A hemisphere through its edge"}>
        <p>{"Let $S$ be the upper hemisphere of radius $R$ with upward normal and $\\omega=-y\\,dx+x\\,dy+z\\,dz$. Find $\\iint_S d\\omega$."}</p>
        <Solution>
          <p>{"$d\\omega=2\\,dx\\wedge dy$ (the $z\\,dz$ term has $d(z\\,dz)=dz\\wedge dz=0$). Rather than parametrize the hemisphere, use the boundary: $\\partial S$ is the counterclockwise circle of radius $R$ in $z=0$, where $dz=0$:"}</p>
          <F>{"$$\\iint_S d\\omega=\\oint_{\\partial S}(-y\\,dx+x\\,dy)=2\\pi R^2$$"}</F>
          <p>{"Cross-check: $2\\,dx\\wedge dy$ only sees the projection onto the $xy$-plane, a disk of area $\\pi R^2$, giving $2\\pi R^2$. \u2713"}</p>
        </Solution>
      </Example>

      <Example title={"Swapping to an easier surface"}>
        <p>{"For $\\mathbf F=\\langle yz,\\;-xz,\\;z^2\\rangle$, find the upward flux of $\\nabla\\times\\mathbf F$ through the paraboloid $z=4-x^2-y^2$, $z\\ge0$."}</p>
        <Solution>
          <p>{"Both the paraboloid $S$ and the flat disk $D$ ($z=0$, $x^2+y^2\\le4$) have the same boundary circle. By the theorem both fluxes equal $\\oint_{\\partial S}\\omega_{\\mathbf F}$, so use $D$."}</p>
          <p>{"On $z=0$: $\\nabla\\times\\mathbf F=\\langle R_y-Q_z,\\;P_z-R_x,\\;Q_x-P_y\\rangle=\\langle x,\\;y,\\;-z-z\\rangle=\\langle x,y,-2z\\rangle$, whose $\\mathbf k$-component vanishes at $z=0$."}</p>
          <F>{"$$\\iint_S(\\nabla\\times\\mathbf F)\\cdot\\mathbf n\\,dS=\\iint_D(-2z)\\big|_{z=0}\\,dA=0$$"}</F>
          <p>{"Confirm on the boundary: on the circle $z=0$, so $\\mathbf F=\\langle0,0,0\\rangle$ and the circulation is $0$. \u2713"}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §6 ═════════════════════════════ */
function SectionDivergence() {
  return (
    <section className="section" id="gs-divergence">
      <SecHead n={6} title="Solids: the Divergence Theorem" />
      <p>
        {"Take $k=3$: $M=E$ is a solid region with outward-oriented boundary surface and $\\omega=\\Phi_{\\mathbf F}$ is the flux 2-form, with $d\\Phi_{\\mathbf F}=(\\nabla\\cdot\\mathbf F)\\,dV$. This is the Divergence Theorem from "}
        <a href="/divergence-curl/2" style={LINK_STYLE}>{"Divergence & Curl"}</a>
        {"."}
      </p>

      <Box kind="thm" label={"Case $k=3$ in $\\mathbb R^3$"}>
        <F>{"$$\\iiint_E\\nabla\\cdot\\mathbf F\\,dV=\\iint_{\\partial E}\\mathbf F\\cdot\\mathbf n\\,dS$$"}</F>
      </Box>

      <Example title={"Flux of the position field out of a ball"}>
        <p>{"Let $\\eta=x\\,dy\\wedge dz+y\\,dz\\wedge dx+z\\,dx\\wedge dy$. Evaluate $\\iint_{\\partial E}\\eta$ for the ball of radius $R$."}</p>
        <Solution>
          <p>{"$d\\eta=3\\,dx\\wedge dy\\wedge dz$, so $\\iint_{\\partial E}\\eta=3\\cdot\\tfrac43\\pi R^3=4\\pi R^3$."}</p>
          <p>{"Direct check: $\\eta$ is the flux form of $\\mathbf r$, and on the sphere $\\mathbf r\\cdot\\mathbf n=R$, so the flux is $R\\cdot4\\pi R^2=4\\pi R^3$. \u2713 For $R=2$ this is $32\\pi$."}</p>
        </Solution>
      </Example>

      <Example title={"A cube, face by face"}>
        <p>{"For $E=[0,1]^3$ and $\\eta=x^2\\,dy\\wedge dz$, verify the theorem."}</p>
        <Solution>
          <p><strong>{"Inside:"}</strong>{" $d\\eta=2x\\,dx\\wedge dy\\wedge dz$, and $\\iiint_E2x\\,dV=\\int_0^12x\\,dx=1$."}</p>
          <p><strong>{"Boundary:"}</strong>{" $dy\\wedge dz$ vanishes on the four faces where $y$ or $z$ is constant. On $x=1$ (outward normal $+\\mathbf i$) the integral is $1\\cdot\\text{area}=1$; on $x=0$ the coefficient is $0$. Total $1$. \u2713"}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §7 ═════════════════════════════ */
function SectionConsequences() {
  return (
    <section className="section" id="gs-consequences">
      <SecHead n={7} title="Consequences of the Theorem" />

      <Box kind="thm" label={"Corollary 1 \u2014 Exact Forms Vanish on Closed Manifolds"}>
        <p>{"If $\\partial M=\\varnothing$ (a closed curve, a sphere, a torus) and $\\omega=d\\alpha$, then"}</p>
        <F>{"$$\\int_M d\\alpha=\\int_{\\varnothing}\\alpha=0$$"}</F>
        <p>{"Examples: $\\oint_C\\nabla f\\cdot d\\mathbf r=0$ around every closed curve, and $\\iint_S(\\nabla\\times\\mathbf F)\\cdot\\mathbf n\\,dS=0$ over every closed surface."}</p>
      </Box>

      <Box kind="thm" label={"Corollary 2 \u2014 Integrals of d\u03c9 Depend Only on the Boundary"}>
        <p>{"If $M_1$ and $M_2$ have the same oriented boundary, then $\\int_{M_1}d\\omega=\\int_{M_2}d\\omega$, since both equal $\\int_{\\partial M}\\omega$. This is why the paraboloid example in §5 could be replaced by a disk."}</p>
      </Box>

      <Box kind="thm" label={"Corollary 3 \u2014 Detecting Holes"}>
        <p>{"If a closed form $\\omega$ has $\\oint_C\\omega\\neq0$ for some closed curve $C$, then $\\omega$ is not exact on that domain, and the domain cannot be star-shaped. Integrals of closed forms measure the holes of a region."}</p>
      </Box>

      <Example title={"The angle form counts windings"}>
        <p>{"On $\\mathbb R^2\\setminus\\{\\mathbf 0\\}$, $\\omega=\\dfrac{-y\\,dx+x\\,dy}{x^2+y^2}$ is closed. Evaluate $\\oint_C\\omega$ for the unit circle traversed counterclockwise twice, and for a circle that does not enclose the origin."}</p>
        <Solution>
          <p>{"Each counterclockwise loop around the origin contributes $2\\pi$, so going around twice gives $4\\pi$. The "}<strong>{"winding number"}</strong>{" is $\\dfrac{1}{2\\pi}\\oint_C\\omega=2$."}</p>
          <p>{"A circle $C$ not enclosing the origin bounds a disk $D$ inside the domain, so $\\oint_C\\omega=\\iint_D d\\omega=0$."}</p>
        </Solution>
      </Example>

      <Example title={"Flux of a curl through a closed surface"}>
        <p>{"For $\\mathbf F=\\langle x^2y,\\;e^{z},\\;\\sin x\\rangle$, find the outward flux of $\\nabla\\times\\mathbf F$ through the sphere $x^2+y^2+z^2=9$."}</p>
        <Solution>
          <p>{"The flux form of $\\nabla\\times\\mathbf F$ is $d\\omega_{\\mathbf F}$, exact, and the sphere has no boundary. By Corollary 1 the flux is $0$, without computing the curl."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §8 ═════════════════════════════ */
function SectionApplications() {
  return (
    <section className="section" id="gs-applications">
      <SecHead n={8} title="Applications" />

      <Example title={"Gauss's law from the differential form"}>
        <p>{"Electrostatics gives $\\nabla\\cdot\\mathbf E=\\rho/\\varepsilon_0$. Derive the integral form for a region $E$ with boundary $S$."}</p>
        <Solution>
          <p>{"Apply the $k=3$ case to the flux 2-form $\\Phi_{\\mathbf E}$:"}</p>
          <F>{"$$\\iint_S\\mathbf E\\cdot\\mathbf n\\,dS=\\iiint_E\\nabla\\cdot\\mathbf E\\,dV=\\frac{1}{\\varepsilon_0}\\iiint_E\\rho\\,dV=\\frac{Q_{\\text{enc}}}{\\varepsilon_0}$$"}</F>
          <p>{"Every integral form of Maxwell's equations in the "}<a href="/multivariable-calculus/potential-theory" style={LINK_STYLE}>{"Potential Theory"}</a>{" guide comes from this theorem."}</p>
        </Solution>
      </Example>

      <Example title={"Volume from a boundary integral"}>
        <p>{"Show that the volume of a solid $E$ is $V=\\tfrac13\\iint_{\\partial E}\\big(x\\,dy\\wedge dz+y\\,dz\\wedge dx+z\\,dx\\wedge dy\\big)$, and use it for a ball of radius $R$."}</p>
        <Solution>
          <p>{"The integrand $\\eta$ has $d\\eta=3\\,dV$, so $\\tfrac13\\iint_{\\partial E}\\eta=\\tfrac13\\iiint_E3\\,dV=V$."}</p>
          <p>{"For the ball: $\\tfrac13\\cdot4\\pi R^3=\\tfrac43\\pi R^3$. \u2713 3D scanners and CAD software compute volumes of closed meshes exactly this way, summing over boundary triangles only."}</p>
        </Solution>
      </Example>

      <div className="note">
        {"The theorem holds in every dimension. On $\\mathbb R^4$ (space-time) Maxwell's equations become $dF=0$ and $d{\\star}F=J$ for a 2-form $F$, and Generalized Stokes turns them into the integral laws without any new theorems."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ Summary ═════════════════════════════ */
function SectionSummary() {
  const cards = [
    ["Generalized Stokes", "$\\int_M d\\omega=\\int_{\\partial M}\\omega$"],
    ["Boundary of a boundary", "$\\partial(\\partial M)=\\varnothing$ \u2194 $d^2=0$"],
    ["Curves (k = 1)", "$\\int_C df=f(B)-f(A)$"],
    ["Green (k = 2, plane)", "$\\iint_D(Q_x-P_y)\\,dA=\\oint_{\\partial D}P\\,dx+Q\\,dy$"],
    ["Stokes (k = 2, space)", "$\\iint_S(\\nabla\\times\\mathbf F)\\cdot d\\mathbf S=\\oint_{\\partial S}\\mathbf F\\cdot d\\mathbf r$"],
    ["Divergence (k = 3)", "$\\iiint_E\\nabla\\cdot\\mathbf F\\,dV=\\iint_{\\partial E}\\mathbf F\\cdot d\\mathbf S$"],
    ["Area formula", "$A=\\tfrac12\\oint_{\\partial D}(x\\,dy-y\\,dx)$"],
    ["Volume formula", "$V=\\tfrac13\\iint_{\\partial E}\\mathbf r\\cdot\\mathbf n\\,dS$"],
    ["Closed manifolds", "$\\partial M=\\varnothing\\Rightarrow\\int_M d\\alpha=0$"],
    ["Winding number", "$\\dfrac{1}{2\\pi}\\oint_C\\dfrac{-y\\,dx+x\\,dy}{x^2+y^2}$"],
  ];
  return (
    <section className="section" id="gs-summary">
      <div className="sec-badge">{"Summary"}</div>
      <h2 className="sec-title">{"Key Formulas at a Glance"}</h2>
      <div className="sum-grid">
        {cards.map(([lbl, tex]) => (
          <div className="sum-card" key={lbl}>
            <div className="sc-lbl">{lbl}</div>
            <p>{tex}</p>
          </div>
        ))}
      </div>
      <div className="note">
        <strong>{"The unifying idea:"}</strong>
        {" the total change inside a region equals what flows across its edge. The Fundamental Theorem of Calculus, the Fundamental Theorem for line integrals, Green, Stokes and Gauss are all the single statement $\\int_M d\\omega=\\int_{\\partial M}\\omega$ in different dimensions."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ Topic export ═════════════════════════════ */
// quizUnlocked: false → shows the locked banner (existing .mcq-section-locked CSS)
// lockHint: text shown in that banner
export default function GeneralizedStokesTopic({ quizUnlocked = true, lockHint = "" }) {
  return (
    <div id="generalized-stokes-theorem">
      <div className="opening-note-box">
        <p className="opening-note">
          <strong>{"Generalized Stokes' Theorem."}</strong>{" "}
          {"We define boundaries and induced orientations, state the theorem $\\int_M d\\omega=\\int_{\\partial M}\\omega$, and see why it reduces to the one-variable Fundamental Theorem of Calculus. Then we recover the Fundamental Theorem for line integrals, Green's Theorem, Stokes' Theorem and the Divergence Theorem as special cases, and use the theorem to detect holes, swap surfaces and compute areas and volumes. Prerequisites: Differential Forms & the Exterior Derivative, line and surface integrals."}
        </p>
      </div>
      <hr className="divider" />
      <SectionBoundary />
      <hr className="divider" />
      <SectionTheorem />
      <hr className="divider" />
      <SectionFtc />
      <hr className="divider" />
      <SectionGreen />
      <hr className="divider" />
      <SectionStokes />
      <hr className="divider" />
      <SectionDivergence />
      <hr className="divider" />
      <SectionConsequences />
      <hr className="divider" />
      <SectionApplications />
      <hr className="divider" />
      <SectionSummary />
      <RealLifeUse>
        Generalized Stokes is behind everyday tools: planimeters and GIS software compute land areas from boundary coordinates (the shoelace formula is Green's Theorem), CAD and 3D-printing software compute volumes of closed meshes from their surface triangles, and electrical engineers switch between the integral and differential forms of Maxwell's equations to design antennas and shielding.
      </RealLifeUse>
      <hr className="divider" />
      {quizUnlocked ? (
        <GuideMcqSection
          id="mcq-df-stokes"
          badge="Practice"
          title="Generalized Stokes' Theorem — Quiz"
          scoreId="score-df-stokes"
          section={GEN_STOKES_QUIZ_KEY}
          questions={MV_DF_STOKES_QUIZ}
        />
      ) : (
        <section id="mcq-df-stokes" className="mcq-section mcq-section-locked" data-lock-hint={lockHint}>
          <div className="mcq-section-head">
            <span className="mcq-section-badge">Locked</span>
            <span className="mcq-section-title">{"Generalized Stokes' Theorem — Quiz"}</span>
          </div>
          <p className="mcq-unlock-hint">{lockHint}</p>
        </section>
      )}
    </div>
  );
}
