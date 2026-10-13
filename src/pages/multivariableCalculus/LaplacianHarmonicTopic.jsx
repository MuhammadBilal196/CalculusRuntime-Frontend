// src/pages/multivariableCalculus/LaplacianHarmonicTopic.jsx
// Potential Theory · The Laplacian & Harmonic Functions
// Rendered inside PotentialTheoryGuide (shares PartialDerivativesGuide.css).
// Scope: the operator and properties of harmonic functions only —
// solving heat/wave equations belongs to the Calculus PDE module (Dev 3).

import { GuideMcqSection } from "../../components/GuideMcq";
import { RealLifeUse } from "../calculus/CalcBlocks";
import { MV_PT_LAPLACIAN_QUIZ } from "../../data/mvPotentialTheoryQuizzes";

export const LAPLACIAN_QUIZ_KEY = "pt-laplacian";

export const LAPLACIAN_NAV = [
  { id: "lh-operator", label: "The Laplace Operator" },
  { id: "lh-coords", label: "Curvilinear Coordinates" },
  { id: "lh-harmonic", label: "Harmonic Functions" },
  { id: "lh-conjugate", label: "Harmonic Conjugates" },
  { id: "lh-properties", label: "Mean Value & Max Principle" },
  { id: "lh-green", label: "Green's Identities" },
  { id: "lh-fundamental", label: "Fundamental Solutions" },
  { id: "lh-physics", label: "Physical Meaning" },
  { id: "lh-summary", label: "Key Formulas" },
  { id: "mcq-pt-laplacian", label: "Laplacian & Harmonic Functions Quiz" },
];

/* ── Small helpers that emit the exact same markup/classes as the
      Partial Derivatives guide, so the shared CSS applies unchanged. ── */
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
function SectionOperator() {
  return (
    <section className="section" id="lh-operator">
      <SecHead n={1} title="The Laplace Operator" />
      <p>
        {"In single-variable calculus the second derivative $f''$ measures how a curve bends away from its tangent line. In several variables there is no single second derivative but a whole Hessian matrix of them. The "}
        <strong>{"Laplacian"}</strong>
        {" compresses that matrix into one number that does not depend on how the axes are oriented: the sum of the pure second partial derivatives. It is the central second-order operator of mathematical physics, appearing in gravitation, electrostatics, ideal fluid flow, heat conduction and quantum mechanics."}
      </p>

      <Box kind="def" label={"Definition \u2014 The Laplacian"}>
        <p>{"For a twice-differentiable scalar field $f$, the Laplacian is the divergence of the gradient:"}</p>
        <F>{"$$\\Delta f=\\nabla^2 f=\\nabla\\cdot(\\nabla f)$$"}</F>
        <p>{"In Cartesian coordinates this becomes"}</p>
        <F>{"$$\\nabla^2 f=f_{xx}+f_{yy}\\quad(\\mathbb{R}^2),\\qquad \\nabla^2 f=f_{xx}+f_{yy}+f_{zz}\\quad(\\mathbb{R}^3),\\qquad \\nabla^2 f=\\sum_{i=1}^{n}\\frac{\\partial^2 f}{\\partial x_i^2}\\quad(\\mathbb{R}^n)$$"}</F>
        <p>{"The Laplacian takes a scalar field and returns a scalar field. Both symbols $\\Delta$ and $\\nabla^2$ are standard; $\\nabla^2$ is a reminder of $\\nabla\\cdot\\nabla$."}</p>
      </Box>

      <div className="note">
        {"Link to Partial Derivatives: the diagonal of the Hessian $H_f$ holds $f_{xx},f_{yy},f_{zz}$, so $\\nabla^2 f=\\operatorname{tr}(H_f)$, the sum of the Hessian's eigenvalues. The second derivative test uses $\\det(H_f)$; the Laplacian uses the trace."}
      </div>

      <Box kind="thm" label={"Theorem \u2014 Algebraic Properties of $\\nabla^2$"}>
        <ul>
          <li>
            <strong>{"Linearity:"}</strong>
            {" $\\nabla^2(af+bg)=a\\,\\nabla^2 f+b\\,\\nabla^2 g$ for constants $a,b$."}
          </li>
          <li>
            <strong>{"Product rule:"}</strong>
            {" $\\nabla^2(fg)=f\\,\\nabla^2 g+g\\,\\nabla^2 f+2\\,\\nabla f\\cdot\\nabla g$."}
          </li>
          <li>
            <strong>{"Invariance:"}</strong>
            {" $\\nabla^2$ is unchanged by translations and rotations of the coordinate axes, so it describes a genuine geometric property of $f$, not of the coordinates."}
          </li>
        </ul>
      </Box>

      <Example title={"A polynomial in three variables"}>
        <p>{"Compute $\\nabla^2 f$ for $f(x,y,z)=x^3y-xy^3+z^2$."}</p>
        <Solution>
          <F>{"$$f_{xx}=6xy,\\qquad f_{yy}=-6xy,\\qquad f_{zz}=2$$"}</F>
          <p>{"So $\\nabla^2 f=6xy-6xy+2=2$. The $x,y$ part cancels exactly; we will see shortly that $x^3y-xy^3$ is harmonic."}</p>
        </Solution>
      </Example>

      <Example title={"The squared distance $|\\mathbf{x}|^2$"}>
        <p>{"Compute $\\nabla^2(x^2+y^2+z^2)$, then generalise to $\\mathbb{R}^n$."}</p>
        <Solution>
          <p>{"Each pure second partial equals $2$, so $\\nabla^2(x^2+y^2+z^2)=2+2+2=6$. In $\\mathbb{R}^n$ there are $n$ such terms:"}</p>
          <F>{"$$\\nabla^2|\\mathbf{x}|^2=2n$$"}</F>
          <p>{"Equivalently, $\\nabla(\\rho^2)=2\\mathbf{r}$ and $\\nabla\\cdot(2\\mathbf{r})=2\\cdot 3=6$, which matches the definition $\\nabla\\cdot\\nabla f$."}</p>
        </Solution>
      </Example>

      <Example title={"The inverse distance $1/\\rho$ in Cartesian form"}>
        <p>{"Let $\\rho=\\sqrt{x^2+y^2+z^2}$. Show that $\\nabla^2(1/\\rho)=0$ for $\\rho\\neq 0$."}</p>
        <Solution>
          <p>{"Since $\\partial\\rho/\\partial x=x/\\rho$:"}</p>
          <F>{"$$\\frac{\\partial}{\\partial x}\\Big(\\rho^{-1}\\Big)=-\\frac{x}{\\rho^{3}},\\qquad \\frac{\\partial^2}{\\partial x^2}\\Big(\\rho^{-1}\\Big)=-\\frac{1}{\\rho^{3}}+\\frac{3x^2}{\\rho^{5}}$$"}</F>
          <p>{"The $y$ and $z$ terms are identical with $x$ replaced. Adding:"}</p>
          <F>{"$$\\nabla^2\\Big(\\frac1\\rho\\Big)=-\\frac{3}{\\rho^3}+\\frac{3(x^2+y^2+z^2)}{\\rho^5}=-\\frac{3}{\\rho^3}+\\frac{3}{\\rho^3}=0$$"}</F>
          <p>{"This function, the Newtonian or Coulomb potential, is the most important harmonic function in $\\mathbb{R}^3$. It fails to be harmonic only at the origin, where it is undefined (see §7)."}</p>
        </Solution>
      </Example>

      <Example title={"Using the product rule"}>
        <p>{"Let $f=x+y$ and $g=xy$. Compute $\\nabla^2(fg)$ with the product rule and check directly."}</p>
        <Solution>
          <p>{"$\\nabla^2 f=0$ and $\\nabla^2 g=0$, while $\\nabla f\\cdot\\nabla g=\\langle 1,1\\rangle\\cdot\\langle y,x\\rangle=x+y$. Hence"}</p>
          <F>{"$$\\nabla^2(fg)=0+0+2(x+y)=2x+2y$$"}</F>
          <p>{"Direct check: $fg=x^2y+xy^2$, so $(fg)_{xx}+(fg)_{yy}=2y+2x$. \u2713 Note that $f$ and $g$ are each harmonic, but their product is not."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §2 ═════════════════════════════ */
function SectionCoords() {
  return (
    <section className="section" id="lh-coords">
      <SecHead n={2} title="The Laplacian in Curvilinear Coordinates" />
      <p>
        {"Many harmonic functions are naturally described with a distance from a point or an axis. Rewriting $\\nabla^2$ in polar, cylindrical or spherical coordinates turns such problems into ordinary differential equations. The formulas below come from $\\nabla\\cdot\\nabla f$ with the scale factors of each coordinate system."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 Laplacian in Standard Coordinate Systems"}>
        <p><strong>{"Polar $(r,\\theta)$:"}</strong></p>
        <F>{"$$\\nabla^2 f=\\frac{1}{r}\\frac{\\partial}{\\partial r}\\Big(r\\frac{\\partial f}{\\partial r}\\Big)+\\frac{1}{r^2}\\frac{\\partial^2 f}{\\partial\\theta^2}=f_{rr}+\\frac1r f_r+\\frac{1}{r^2}f_{\\theta\\theta}$$"}</F>
        <p><strong>{"Cylindrical $(r,\\theta,z)$:"}</strong></p>
        <F>{"$$\\nabla^2 f=\\frac{1}{r}\\frac{\\partial}{\\partial r}\\Big(r\\frac{\\partial f}{\\partial r}\\Big)+\\frac{1}{r^2}\\frac{\\partial^2 f}{\\partial\\theta^2}+\\frac{\\partial^2 f}{\\partial z^2}$$"}</F>
        <p><strong>{"Spherical $(\\rho,\\theta,\\varphi)$, $\\varphi$ measured from the $+z$-axis:"}</strong></p>
        <F>{"$$\\nabla^2 f=\\frac{1}{\\rho^2}\\frac{\\partial}{\\partial\\rho}\\Big(\\rho^2\\frac{\\partial f}{\\partial\\rho}\\Big)+\\frac{1}{\\rho^2\\sin\\varphi}\\frac{\\partial}{\\partial\\varphi}\\Big(\\sin\\varphi\\,\\frac{\\partial f}{\\partial\\varphi}\\Big)+\\frac{1}{\\rho^2\\sin^2\\varphi}\\frac{\\partial^2 f}{\\partial\\theta^2}$$"}</F>
      </Box>

      <Box kind="warn" label={"Common Mistake"}>
        <p>{"The polar Laplacian is not $f_{rr}+f_{\\theta\\theta}$. The extra first-order term $\\frac1r f_r$ and the factor $\\frac1{r^2}$ come from the fact that the coordinate grid is not uniform. Physics texts often swap the roles of $\\theta$ and $\\varphi$ in spherical coordinates, so always check which angle is the polar one."}</p>
      </Box>

      <Example title={"$r^n\\cos(n\\theta)$ is harmonic"}>
        <p>{"Show that $f(r,\\theta)=r^n\\cos(n\\theta)$ satisfies $\\nabla^2 f=0$ for every integer $n$."}</p>
        <Solution>
          <F>{"$$f_{rr}=n(n-1)r^{n-2}\\cos n\\theta,\\qquad \\frac1r f_r=n\\,r^{n-2}\\cos n\\theta,\\qquad \\frac{1}{r^2}f_{\\theta\\theta}=-n^2r^{n-2}\\cos n\\theta$$"}</F>
          <p>{"Sum: $\\big(n^2-n+n-n^2\\big)r^{n-2}\\cos n\\theta=0$. \u2713 For $n=2$ this is $r^2\\cos 2\\theta=x^2-y^2$; for $n=3$ it is $x^3-3xy^2$. The same works for $r^n\\sin(n\\theta)$."}</p>
        </Solution>
      </Example>

      <Example title={"A cylindrical check"}>
        <p>{"Verify that $f(r,\\theta,z)=r^2\\cos 2\\theta+z$ is harmonic using the cylindrical formula."}</p>
        <Solution>
          <p>{"$f_r=2r\\cos2\\theta$, so $\\frac1r\\partial_r(r f_r)=\\frac1r\\partial_r(2r^2\\cos2\\theta)=4\\cos2\\theta$."}</p>
          <p>{"$\\frac1{r^2}f_{\\theta\\theta}=\\frac1{r^2}(-4r^2\\cos2\\theta)=-4\\cos2\\theta$, and $f_{zz}=0$."}</p>
          <p>{"Total: $4\\cos2\\theta-4\\cos2\\theta+0=0$. \u2713 In Cartesian form $f=x^2-y^2+z$, which is clearly harmonic."}</p>
        </Solution>
      </Example>

      <Example title={"All radial harmonic functions in $\\mathbb{R}^2$ and $\\mathbb{R}^3$"}>
        <p>{"Find every harmonic function that depends only on the distance from the origin."}</p>
        <Solution>
          <p><strong>{"In $\\mathbb{R}^3$:"}</strong>{" with $f=f(\\rho)$ only the first spherical term survives:"}</p>
          <F>{"$$\\frac{1}{\\rho^2}\\big(\\rho^2 f'\\big)'=0\\;\\Longrightarrow\\;\\rho^2 f'=-B\\;\\Longrightarrow\\;f(\\rho)=A+\\frac{B}{\\rho}$$"}</F>
          <p><strong>{"In $\\mathbb{R}^2$:"}</strong>{" with $f=f(r)$:"}</p>
          <F>{"$$\\frac1r\\big(rf'\\big)'=0\\;\\Longrightarrow\\;rf'=B\\;\\Longrightarrow\\;f(r)=A+B\\ln r$$"}</F>
          <p>{"So $1/\\rho$ plays in 3D the role that $\\ln r$ plays in the plane. A quick test: $\\rho^k$ gives $\\nabla^2\\rho^k=k(k+1)\\rho^{k-2}$, which vanishes only for $k=0$ or $k=-1$."}</p>
        </Solution>
      </Example>

      <div className="note">
        {"In $\\mathbb{R}^n$ a radial function satisfies $\\nabla^2 f=f''(r)+\\frac{n-1}{r}f'(r)$. Setting this to zero gives $f=A+Br^{2-n}$ for $n\\ge 3$, matching $A+B/\\rho$ when $n=3$."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ §3 ═════════════════════════════ */
function SectionHarmonic() {
  return (
    <section className="section" id="lh-harmonic">
      <SecHead n={3} title="Harmonic Functions" />
      <p>
        {"Functions whose Laplacian vanishes are so common and so well behaved that they get their own name. They describe equilibrium states: steady temperatures, electrostatic potentials in empty space, and velocity potentials of ideal fluids."}
      </p>

      <Box kind="def" label={"Definition \u2014 Harmonic Function"}>
        <p>{"A function $u$ with continuous second partial derivatives on an open set $\\Omega$ is "}<em>{"harmonic"}</em>{" on $\\Omega$ if it satisfies "}<strong>{"Laplace's equation"}</strong>{":"}</p>
        <F>{"$$\\nabla^2 u=0\\quad\\text{at every point of }\\Omega$$"}</F>
        <p>{"Because $\\nabla^2$ is linear, sums and constant multiples of harmonic functions are harmonic: the harmonic functions on $\\Omega$ form a vector space."}</p>
      </Box>

      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>{"Function"}</th>
              <th>{"Domain"}</th>
              <th>{"Why it is harmonic"}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>{"$ax+by+cz+d$"}</td><td>{"$\\mathbb{R}^3$"}</td><td>{"All second partials are $0$"}</td></tr>
            <tr><td>{"$x^2-y^2$, $\\;xy$"}</td><td>{"$\\mathbb{R}^2$"}</td><td>{"Real and imaginary parts of $z^2/2$ up to scaling"}</td></tr>
            <tr><td>{"$e^x\\cos y$, $\\;e^x\\sin y$"}</td><td>{"$\\mathbb{R}^2$"}</td><td>{"Real and imaginary parts of $e^z$"}</td></tr>
            <tr><td>{"$\\ln(x^2+y^2)$"}</td><td>{"$\\mathbb{R}^2\\setminus\\{\\mathbf 0\\}$"}</td><td>{"Equals $2\\ln r$, a radial solution"}</td></tr>
            <tr><td>{"$1/\\sqrt{x^2+y^2+z^2}$"}</td><td>{"$\\mathbb{R}^3\\setminus\\{\\mathbf 0\\}$"}</td><td>{"Radial solution $B/\\rho$"}</td></tr>
            <tr><td>{"$x^2+y^2-2z^2$"}</td><td>{"$\\mathbb{R}^3$"}</td><td>{"$2+2-4=0$"}</td></tr>
          </tbody>
        </table>
      </div>

      <Example title={"Choosing a coefficient"}>
        <p>{"Find $a$ so that $u(x,y)=x^3+axy^2$ is harmonic."}</p>
        <Solution>
          <p>{"$u_{xx}=6x$ and $u_{yy}=2ax$, so $\\nabla^2 u=(6+2a)x$. This is zero for all $x$ only when $a=-3$, giving $u=x^3-3xy^2=\\operatorname{Re}(z^3)$."}</p>
        </Solution>
      </Example>

      <Example title={"An exponential–trigonometric family"}>
        <p>{"For which real $k$ is $u(x,y)=e^{kx}\\sin(3y)$ harmonic?"}</p>
        <Solution>
          <p>{"$u_{xx}=k^2u$ and $u_{yy}=-9u$, so $\\nabla^2 u=(k^2-9)u$. Since $u\\not\\equiv 0$, we need $k^2=9$, i.e. $k=\\pm 3$."}</p>
          <p>{"The pattern is general: $e^{kx}\\sin(my)$ is harmonic exactly when $k^2=m^2$. The growth rate in one direction must balance the oscillation in the other."}</p>
        </Solution>
      </Example>

      <Example title={"The logarithmic potential in Cartesian form"}>
        <p>{"Verify that $u=\\ln(x^2+y^2)$ is harmonic away from the origin."}</p>
        <Solution>
          <F>{"$$u_x=\\frac{2x}{x^2+y^2},\\qquad u_{xx}=\\frac{2(x^2+y^2)-4x^2}{(x^2+y^2)^2}=\\frac{2y^2-2x^2}{(x^2+y^2)^2}$$"}</F>
          <p>{"By symmetry $u_{yy}=\\dfrac{2x^2-2y^2}{(x^2+y^2)^2}$, so $u_{xx}+u_{yy}=0$. \u2713 This agrees with the polar result $f=A+B\\ln r$ from §2."}</p>
        </Solution>
      </Example>

      <Box kind="warn" label={"Products Are Not Harmonic"}>
        <p>{"If $u$ and $v$ are harmonic, the product rule gives $\\nabla^2(uv)=2\\nabla u\\cdot\\nabla v$, which is usually non-zero. In particular $\\nabla^2(u^2)=2|\\nabla u|^2\\ge 0$, so $u^2$ is harmonic only when $u$ is constant. Example: $x$ is harmonic but $x^2$ is not."}</p>
      </Box>
    </section>
  );
}

/* ═════════════════════════════ §4 ═════════════════════════════ */
function SectionConjugate() {
  return (
    <section className="section" id="lh-conjugate">
      <SecHead n={4} title="Harmonic Conjugates and Complex Functions" />
      <p>
        {"In two dimensions harmonic functions come in pairs. Writing $z=x+iy$, every differentiable complex function $f(z)=u+iv$ hands us two harmonic functions at once, and conversely almost every planar harmonic function arises this way."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 Cauchy\u2013Riemann Implies Harmonic"}>
        <p>{"If $f=u+iv$ is complex differentiable (analytic) on a region, then $u$ and $v$ satisfy the "}<strong>{"Cauchy\u2013Riemann equations"}</strong></p>
        <F>{"$$u_x=v_y,\\qquad u_y=-v_x$$"}</F>
        <p>{"and both are harmonic. Indeed, by Clairaut's theorem $u_{xx}=v_{yx}=v_{xy}=-u_{yy}$, so $u_{xx}+u_{yy}=0$; the argument for $v$ is the same."}</p>
      </Box>

      <Box kind="def" label={"Definition \u2014 Harmonic Conjugate"}>
        <p>{"If $u$ is harmonic and $v$ satisfies the Cauchy\u2013Riemann equations with $u$, then $v$ is a "}<em>{"harmonic conjugate"}</em>{" of $u$. On a simply connected region every harmonic $u$ has a conjugate, unique up to an additive constant."}</p>
      </Box>

      <Example title={"Building a conjugate step by step"}>
        <p>{"Show $u=x^2-y^2+2x$ is harmonic and find a harmonic conjugate $v$."}</p>
        <Solution>
          <p>{"$u_x=2x+2$, $u_y=-2y$, and $u_{xx}+u_{yy}=2-2=0$, so $u$ is harmonic."}</p>
          <p>{"From $v_y=u_x=2x+2$: integrate in $y$ to get $v=2xy+2y+g(x)$."}</p>
          <p>{"From $v_x=-u_y=2y$: $2y+g'(x)=2y$, so $g$ is constant."}</p>
          <F>{"$$v=2xy+2y+C,\\qquad u+iv=(x+iy)^2+2(x+iy)=z^2+2z$$"}</F>
        </Solution>
      </Example>

      <Example title={"The conjugate of $x/(x^2+y^2)$"}>
        <p>{"Recognise $u=\\dfrac{x}{x^2+y^2}$ as the real part of a complex function, and state its conjugate."}</p>
        <Solution>
          <p>{"For $z\\neq 0$:"}</p>
          <F>{"$$\\frac1z=\\frac{\\bar z}{|z|^2}=\\frac{x-iy}{x^2+y^2}$$"}</F>
          <p>{"So $u=\\operatorname{Re}(1/z)$ is harmonic on $\\mathbb{R}^2\\setminus\\{\\mathbf 0\\}$, with conjugate $v=-\\dfrac{y}{x^2+y^2}$. No integration needed once the complex function is spotted."}</p>
        </Solution>
      </Example>

      <div className="note">
        {"Level curves of $u$ and of its conjugate $v$ cross at right angles. Using Cauchy\u2013Riemann, $\\nabla u\\cdot\\nabla v=u_xv_x+u_yv_y=u_x(-u_y)+u_y(u_x)=0$. In fluid flow the curves $u=c$ are equipotentials and $v=c$ are streamlines."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ §5 ═════════════════════════════ */
function SectionProperties() {
  return (
    <section className="section" id="lh-properties">
      <SecHead n={5} title="Mean Value Property and Maximum Principle" />
      <p>
        {"Harmonic functions are rigid: their value at a point is completely tied to their values nearby. This section lists the properties that make Laplace's equation so well behaved."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 Mean Value Property"}>
        <p>{"If $u$ is harmonic on a region containing the closed disk (or ball) of radius $R$ about $\\mathbf{p}$, then $u(\\mathbf p)$ equals the average of $u$ over the boundary circle (sphere):"}</p>
        <F>{"$$u(\\mathbf p)=\\frac{1}{2\\pi}\\int_0^{2\\pi}u(\\mathbf p+R\\langle\\cos t,\\sin t\\rangle)\\,dt\\quad(\\mathbb R^2),\\qquad u(\\mathbf p)=\\frac{1}{4\\pi R^2}\\iint_{|\\mathbf x-\\mathbf p|=R}u\\,dS\\quad(\\mathbb R^3)$$"}</F>
        <p>{"It also equals the average over the solid disk or ball. Conversely, a continuous function with this property on every small circle is harmonic."}</p>
      </Box>

      <Example title={"Checking the mean value property"}>
        <p>{"For $u=x^2-y^2+3$, verify the mean value property at $(1,0)$ on a circle of radius $R$."}</p>
        <Solution>
          <p>{"On the circle, $x=1+R\\cos t$, $y=R\\sin t$:"}</p>
          <F>{"$$u=1+2R\\cos t+R^2\\cos^2 t-R^2\\sin^2 t+3=4+2R\\cos t+R^2\\cos 2t$$"}</F>
          <p>{"Over $[0,2\\pi]$ both $\\cos t$ and $\\cos 2t$ average to $0$, so the average is $4=u(1,0)$. \u2713 The result holds for every $R$."}</p>
        </Solution>
      </Example>

      <Box kind="thm" label={"Theorem \u2014 Maximum Principle"}>
        <p>{"Let $\\Omega$ be a bounded, connected open set and $u$ harmonic on $\\Omega$ and continuous on $\\overline{\\Omega}$."}</p>
        <ul>
          <li><strong>{"Weak form:"}</strong>{" $\\max_{\\overline\\Omega}u$ and $\\min_{\\overline\\Omega}u$ are attained on the boundary $\\partial\\Omega$."}</li>
          <li><strong>{"Strong form:"}</strong>{" if $u$ attains its maximum or minimum at an interior point, then $u$ is constant."}</li>
        </ul>
        <p>{"Reason: an interior maximum would be a point higher than every average around it, contradicting the mean value property."}</p>
      </Box>

      <Example title={"Extremes of $x^2-y^2$ on the unit disk"}>
        <p>{"Find the maximum and minimum of $u=x^2-y^2$ on $x^2+y^2\\le 1$."}</p>
        <Solution>
          <p>{"The only critical point is $(0,0)$, where $u=0$; it is a saddle, consistent with the maximum principle (no interior extremum)."}</p>
          <p>{"On the boundary $x=\\cos t$, $y=\\sin t$: $u=\\cos 2t$, which ranges over $[-1,1]$."}</p>
          <F>{"$$\\max u=1\\text{ at }(\\pm1,0),\\qquad \\min u=-1\\text{ at }(0,\\pm1)$$"}</F>
          <p>{"Every critical point of a non-constant harmonic function in the plane is a saddle: $u_{xx}=-u_{yy}$ forces $D=u_{xx}u_{yy}-u_{xy}^2=-u_{xx}^2-u_{xy}^2\\le 0$."}</p>
        </Solution>
      </Example>

      <Box kind="thm" label={"Theorem \u2014 Uniqueness for the Dirichlet Problem"}>
        <p>{"The problem $\\nabla^2u=0$ in $\\Omega$, $u=g$ on $\\partial\\Omega$ has at most one solution."}</p>
        <p>{"Proof: if $u_1,u_2$ both solve it, then $w=u_1-u_2$ is harmonic with $w=0$ on $\\partial\\Omega$. By the maximum principle $0\\le w\\le 0$ throughout $\\Omega$, so $u_1=u_2$."}</p>
      </Box>

      <Box kind="thm" label={"Further Properties"}>
        <ul>
          <li><strong>{"Smoothness:"}</strong>{" a harmonic function is automatically infinitely differentiable, even though the definition asks only for two derivatives."}</li>
          <li><strong>{"Liouville's theorem:"}</strong>{" a harmonic function on all of $\\mathbb{R}^n$ that is bounded is constant."}</li>
          <li><strong>{"Subharmonic functions:"}</strong>{" if $\\nabla^2 u\\ge 0$, then $u(\\mathbf p)$ is at most the average of $u$ around $\\mathbf p$. Example: $u^2$ for harmonic $u$."}</li>
        </ul>
      </Box>

      <h3 className="subsec">{"What the Laplacian Measures"}</h3>
      <p>{"The mean value property has a quantitative version that explains what $\\nabla^2 f$ means for any smooth $f$, harmonic or not."}</p>
      <Box kind="thm" label={"Theorem \u2014 Laplacian as Average Deviation"}>
        <p>{"For a smooth $f$ on $\\mathbb{R}^n$, the average over the sphere of small radius $r$ about $\\mathbf p$ satisfies"}</p>
        <F>{"$$\\overline{f}_{\\,\\text{sphere}}(\\mathbf p,r)-f(\\mathbf p)\\approx\\frac{r^2}{2n}\\,\\nabla^2 f(\\mathbf p)$$"}</F>
        <p>{"So $\\nabla^2 f>0$ means $f$ is below its surroundings on average (a local \u201cvalley\u201d), $\\nabla^2 f<0$ means above them, and $\\nabla^2 f=0$ means exactly the average: equilibrium."}</p>
      </Box>

      <Example title={"Testing the average-deviation formula"}>
        <p>{"For $f=x^2$ in $\\mathbb{R}^3$, compare the average of $f$ over the sphere of radius $r$ about the origin with the formula."}</p>
        <Solution>
          <p>{"By symmetry the averages of $x^2,y^2,z^2$ over the sphere are equal and sum to $r^2$, so each is $r^2/3$. The formula gives $\\frac{r^2}{2\\cdot 3}\\cdot\\nabla^2(x^2)=\\frac{r^2}{6}\\cdot 2=\\frac{r^2}{3}$. \u2713 (Exact here because $f$ is quadratic.)"}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §6 ═════════════════════════════ */
function SectionGreen() {
  return (
    <section className="section" id="lh-green">
      <SecHead n={6} title="Green's Identities and the Divergence Theorem" />
      <p>
        {"Because $\\nabla^2 f=\\nabla\\cdot\\nabla f$, the Divergence Theorem applies to it directly. This gives integral identities that are the main tool for proving facts about Laplace's equation. (Review the Divergence Theorem in "}
        <a href="/divergence-curl/2" style={{ color: "var(--gold)", fontWeight: 600 }}>{"Divergence & Curl"}</a>
        {".)"}
      </p>

      <Box kind="thm" label={"Theorem \u2014 Gauss's Formula for the Laplacian"}>
        <p>{"Let $E$ be a solid region with closed boundary surface $S$ and outward unit normal $\\mathbf n$. With $\\mathbf F=\\nabla f$:"}</p>
        <F>{"$$\\iiint_E\\nabla^2 f\\,dV=\\iint_S\\nabla f\\cdot\\mathbf n\\,dS=\\iint_S\\frac{\\partial f}{\\partial n}\\,dS$$"}</F>
        <p>{"where $\\partial f/\\partial n=\\nabla f\\cdot\\mathbf n$ is the normal derivative. "}<strong>{"Corollary:"}</strong>{" if $f$ is harmonic in $E$, its total normal flux through $S$ is zero."}</p>
      </Box>

      <Example title={"Both sides of Gauss's formula for $\\rho^2$"}>
        <p>{"Verify the formula for $f=x^2+y^2+z^2$ on the ball $\\rho\\le R$."}</p>
        <Solution>
          <p><strong>{"Volume side:"}</strong>{" $\\nabla^2 f=6$, so $\\iiint_E 6\\,dV=6\\cdot\\frac43\\pi R^3=8\\pi R^3$."}</p>
          <p><strong>{"Surface side:"}</strong>{" $\\nabla f=2\\mathbf r$ and $\\mathbf n=\\mathbf r/R$, so $\\partial f/\\partial n=2R$ on the sphere. Then $\\iint_S 2R\\,dS=2R\\cdot 4\\pi R^2=8\\pi R^3$. \u2713"}</p>
        </Solution>
      </Example>

      <Box kind="thm" label={"Theorem \u2014 Green's First and Second Identities"}>
        <p>{"Applying the Divergence Theorem to $\\mathbf F=u\\nabla v$ and using $\\nabla\\cdot(u\\nabla v)=u\\nabla^2 v+\\nabla u\\cdot\\nabla v$:"}</p>
        <F>{"$$\\text{(I)}\\qquad\\iiint_E\\big(u\\,\\nabla^2 v+\\nabla u\\cdot\\nabla v\\big)\\,dV=\\iint_S u\\,\\frac{\\partial v}{\\partial n}\\,dS$$"}</F>
        <p>{"Writing (I) with $u$ and $v$ swapped and subtracting:"}</p>
        <F>{"$$\\text{(II)}\\qquad\\iiint_E\\big(u\\,\\nabla^2 v-v\\,\\nabla^2 u\\big)\\,dV=\\iint_S\\Big(u\\,\\frac{\\partial v}{\\partial n}-v\\,\\frac{\\partial u}{\\partial n}\\Big)\\,dS$$"}</F>
      </Box>

      <Example title={"Uniqueness by the energy method"}>
        <p>{"Use Green's first identity to give a second proof that the Dirichlet problem has at most one solution."}</p>
        <Solution>
          <p>{"Let $w=u_1-u_2$, so $\\nabla^2 w=0$ in $E$ and $w=0$ on $S$. Take $u=v=w$ in (I):"}</p>
          <F>{"$$\\iiint_E\\big(w\\cdot 0+|\\nabla w|^2\\big)\\,dV=\\iint_S 0\\cdot\\frac{\\partial w}{\\partial n}\\,dS=0$$"}</F>
          <p>{"The integrand $|\\nabla w|^2$ is continuous and non-negative, so $\\nabla w=\\mathbf 0$ and $w$ is constant. Since $w=0$ on $S$, $w\\equiv 0$."}</p>
        </Solution>
      </Example>

      <div className="note">
        {"The same argument for the Neumann problem ($\\nabla^2u=0$ in $E$, $\\partial u/\\partial n=g$ on $S$) shows the solution is unique only up to an additive constant. Gauss's formula also gives a compatibility condition: a solution can exist only if $\\iint_S g\\,dS=0$."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ §7 ═════════════════════════════ */
function SectionFundamental() {
  return (
    <section className="section" id="lh-fundamental">
      <SecHead n={7} title="Fundamental Solutions and Poisson's Equation" />
      <p>
        {"When sources are present, the Laplacian is no longer zero. The equation becomes "}
        <strong>{"Poisson's equation"}</strong>
        {" $\\nabla^2 u=f$, where $f$ describes the source density (mass, charge or heat production). The potentials $\\ln r$ and $1/\\rho$, harmonic everywhere except the origin, are exactly the potentials of a single point source."}
      </p>

      <Example title={"A flux that does not depend on the radius"}>
        <p>{"Compute the outward flux of $\\nabla(1/\\rho)$ through the sphere $\\rho=R$."}</p>
        <Solution>
          <p>{"$\\nabla(1/\\rho)=-\\dfrac{\\mathbf r}{\\rho^3}=-\\dfrac{\\hat{\\mathbf r}}{\\rho^2}$, and on the sphere $\\hat{\\mathbf r}=\\mathbf n$:"}</p>
          <F>{"$$\\iint_{\\rho=R}\\nabla\\Big(\\frac1\\rho\\Big)\\cdot\\mathbf n\\,dS=-\\frac{1}{R^2}\\cdot 4\\pi R^2=-4\\pi$$"}</F>
          <p>{"If $1/\\rho$ were harmonic in the whole ball, Gauss's formula would make this $0$. The answer $-4\\pi$ for every $R$ shows all of the \u201csource\u201d is concentrated at the origin. In the language of distributions, $\\nabla^2(1/\\rho)=-4\\pi\\,\\delta(\\mathbf x)$."}</p>
        </Solution>
      </Example>

      <Box kind="def" label={"Definition \u2014 Fundamental Solutions"}>
        <p>{"The fundamental solution $\\Phi$ of the Laplacian satisfies $\\nabla^2\\Phi=\\delta$ (a unit point source at the origin):"}</p>
        <F>{"$$\\Phi(\\mathbf x)=\\frac{1}{2\\pi}\\ln r\\quad(\\mathbb R^2),\\qquad \\Phi(\\mathbf x)=-\\frac{1}{4\\pi\\rho}\\quad(\\mathbb R^3)$$"}</F>
        <p>{"For a source density $f$, adding up point sources gives a solution of $\\nabla^2u=f$:"}</p>
        <F>{"$$u(\\mathbf x)=\\iiint\\Phi(\\mathbf x-\\mathbf y)\\,f(\\mathbf y)\\,dV_{\\mathbf y}$$"}</F>
      </Box>

      <div className="note">
        {"Preview of Maxwell's Equations & the Continuity Equation: in electrostatics the potential satisfies $\\nabla^2\\phi=-\\rho_q/\\varepsilon_0$, and the point-charge potential $\\phi=\\frac{q}{4\\pi\\varepsilon_0\\rho}$ is just $-\\frac{q}{\\varepsilon_0}\\Phi$. This is Gauss's law in potential form, one of Maxwell's equations."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ §8 ═════════════════════════════ */
function SectionPhysics() {
  return (
    <section className="section" id="lh-physics">
      <SecHead n={8} title="Physical Meaning of Laplace's Equation" />
      <p>
        {"Laplace's equation appears whenever a quantity settles into equilibrium with no sources inside the region. Using the average-deviation picture from §5: equilibrium means every point sits exactly at the average of its neighbours."}
      </p>
      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>{"Setting"}</th>
              <th>{"Harmonic quantity"}</th>
              <th>{"Why $\\nabla^2=0$"}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>{"Steady-state heat"}</td><td>{"Temperature $T$"}</td><td>{"No net heat flow into any small region"}</td></tr>
            <tr><td>{"Electrostatics"}</td><td>{"Potential $\\phi$ where there is no charge"}</td><td>{"$\\nabla\\cdot\\mathbf E=0$ and $\\mathbf E=-\\nabla\\phi$"}</td></tr>
            <tr><td>{"Gravitation"}</td><td>{"Potential outside the masses"}</td><td>{"Same structure as electrostatics"}</td></tr>
            <tr><td>{"Ideal fluid flow"}</td><td>{"Velocity potential $\\varphi$"}</td><td>{"Irrotational: $\\mathbf v=\\nabla\\varphi$; incompressible: $\\nabla\\cdot\\mathbf v=0$"}</td></tr>
          </tbody>
        </table>
      </div>

      <Example title={"Stagnation-point flow"}>
        <p>{"A planar flow has velocity potential $\\varphi=x^2-y^2$. Show the flow is incompressible and irrotational, and describe it."}</p>
        <Solution>
          <p>{"$\\mathbf v=\\nabla\\varphi=\\langle 2x,-2y\\rangle$. Then $\\nabla\\cdot\\mathbf v=2-2=0$ (incompressible), and as a gradient field its curl is $\\mathbf 0$ (irrotational)."}</p>
          <p>{"Fluid comes in along the $y$-axis, slows to rest at the origin, and leaves along the $x$-axis. The streamlines are the level curves of the conjugate $\\psi=2xy$: the hyperbolas $xy=c$, perpendicular to the equipotentials $x^2-y^2=c$."}</p>
        </Solution>
      </Example>

      <div className="note">
        {"For vector fields we use the vector Laplacian, which in Cartesian coordinates acts on each component: $\\nabla^2\\mathbf F=\\langle\\nabla^2F_1,\\nabla^2F_2,\\nabla^2F_3\\rangle$. It obeys $\\nabla^2\\mathbf F=\\nabla(\\nabla\\cdot\\mathbf F)-\\nabla\\times(\\nabla\\times\\mathbf F)$, the identity used in Maxwell's Equations & the Continuity Equation to derive the wave equation from Maxwell's equations."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ Summary ═════════════════════════════ */
function SectionSummary() {
  const cards = [
    ["Laplacian", "$\\nabla^2 f=\\nabla\\cdot\\nabla f=f_{xx}+f_{yy}+f_{zz}=\\operatorname{tr}H_f$"],
    ["Product rule", "$\\nabla^2(fg)=f\\nabla^2g+g\\nabla^2f+2\\nabla f\\cdot\\nabla g$"],
    ["Polar", "$\\nabla^2 f=f_{rr}+\\frac1r f_r+\\frac1{r^2}f_{\\theta\\theta}$"],
    ["Spherical (radial part)", "$\\frac{1}{\\rho^2}\\partial_\\rho(\\rho^2 f_\\rho)$"],
    ["Radial harmonic", "$A+B\\ln r$ in $\\mathbb R^2$; $\\;A+B/\\rho$ in $\\mathbb R^3$"],
    ["Cauchy\u2013Riemann", "$u_x=v_y,\\;u_y=-v_x\\Rightarrow u,v$ harmonic"],
    ["Mean value property", "$u(\\mathbf p)=$ average of $u$ on any circle/sphere about $\\mathbf p$"],
    ["Maximum principle", "Non-constant harmonic $u$: max and min only on $\\partial\\Omega$"],
    ["Gauss's formula", "$\\iiint_E\\nabla^2f\\,dV=\\iint_S\\partial f/\\partial n\\,dS$"],
    ["Fundamental solution (3D)", "$\\nabla^2(1/\\rho)=-4\\pi\\delta$, $\\;\\Phi=-1/(4\\pi\\rho)$"],
  ];
  return (
    <section className="section" id="lh-summary">
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
        {" $\\nabla^2 f$ compares $f$ at a point with its average nearby. Harmonic functions are exactly the functions that always equal their local average, and every property on this page (mean value, maximum principle, uniqueness, smoothness) follows from that."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ Topic export ═════════════════════════════ */
export default function LaplacianHarmonicTopic() {
  return (
    <div id="topic-1">
      <div className="opening-note-box">
        <p className="opening-note">
          <strong>{"The Laplacian & Harmonic Functions."}</strong>{" "}
          {"We define the Laplace operator as the divergence of the gradient, compute it in Cartesian and curvilinear coordinates, and study harmonic functions: the solutions of Laplace's equation. You will learn the mean value property, the maximum principle, uniqueness theorems and Green's identities, and see why $\\ln r$ and $1/\\rho$ are the potentials of point sources. Prerequisites: partial derivatives, gradient, and the Divergence Theorem."}
        </p>
      </div>
      <hr className="divider" />
      <SectionOperator />
      <hr className="divider" />
      <SectionCoords />
      <hr className="divider" />
      <SectionHarmonic />
      <hr className="divider" />
      <SectionConjugate />
      <hr className="divider" />
      <SectionProperties />
      <hr className="divider" />
      <SectionGreen />
      <hr className="divider" />
      <SectionFundamental />
      <hr className="divider" />
      <SectionPhysics />
      <hr className="divider" />
      <SectionSummary />
      <RealLifeUse>
        Harmonic functions are everywhere equilibrium is: the steady temperature inside a CPU heat sink, the electric potential around a capacitor, smooth image inpainting (filling a hole so each pixel equals the average of its neighbours) and the mesh-smoothing step in 3D graphics all solve $\nabla^2 u = 0$.
      </RealLifeUse>
      <hr className="divider" />
      <GuideMcqSection
        id="mcq-pt-laplacian"
        badge="Practice"
        title="The Laplacian & Harmonic Functions — Quiz"
        scoreId="score-pt-laplacian"
        section={LAPLACIAN_QUIZ_KEY}
        questions={MV_PT_LAPLACIAN_QUIZ}
      />
    </div>
  );
}
