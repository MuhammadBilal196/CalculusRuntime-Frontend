// src/pages/multivariableCalculus/CalculusOfVariationsTopic.jsx
// Advanced Integration & Variational Methods · Calculus of Variations (Euler–Lagrange Equation)
// Rendered inside AdvancedIntegrationGuide (shares PartialDerivativesGuide.css).

import { GuideMcqSection } from "../../components/GuideMcq";
import { RealLifeUse } from "../calculus/CalcBlocks";
import { MV_AI_VARIATIONS_QUIZ } from "../../data/mvAdvancedIntegrationQuizzes";

export const AI_VARIATIONS_QUIZ_KEY = "ai-variations";

export const VARIATIONS_NAV = [
  { id: "cov-functionals", label: "Functionals" },
  { id: "cov-euler-lagrange", label: "The Euler–Lagrange Equation" },
  { id: "cov-solving", label: "Solving Euler–Lagrange" },
  { id: "cov-first-integrals", label: "First Integrals & Beltrami" },
  { id: "cov-classics", label: "Brachistochrone & Catenary" },
  { id: "cov-mechanics", label: "Several Functions & Variables" },
  { id: "cov-constraints", label: "Constraints & Multipliers" },
  { id: "cov-boundary", label: "Free Ends & Minimum Tests" },
  { id: "cov-summary", label: "Key Formulas" },
  { id: "mcq-ai-variations", label: "Calculus of Variations Quiz" },
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
function SectionFunctionals() {
  return (
    <section className="section" id="cov-functionals">
      <SecHead n={1} title="Functionals: Optimizing over Curves" />
      <p>
        {"Ordinary optimization finds the "}
        <em>{"point"}</em>
        {" that makes a function smallest. The calculus of variations finds the "}
        <em>{"function"}</em>
        {" (a curve, a shape, a path through time) that makes an integral smallest. What is the shortest path between two points? Which slide gets a bead down fastest? Which soap film spans a wire loop with least area? Each question asks us to minimize a "}
        <strong>{"functional"}</strong>
        {"."}
      </p>

      <Box kind="def" label={"Definition \u2014 Functional"}>
        <p>{"A functional assigns a number to each admissible function. The basic type is"}</p>
        <F>{"$$J[y]=\\int_a^bF\\big(x,\\,y(x),\\,y'(x)\\big)\\,dx$$"}</F>
        <p>{"over smooth functions $y$ on $[a,b]$ with fixed endpoint values $y(a)=A$, $y(b)=B$. The function $F(x,y,p)$ is the "}<strong>{"Lagrangian"}</strong>{" (or integrand); we treat $x$, $y$ and $p=y'$ as three independent variables when taking partial derivatives."}</p>
      </Box>

      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>{"Problem"}</th>
              <th>{"Functional to minimize"}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>{"Shortest curve"}</td><td>{"$\\displaystyle\\int_a^b\\sqrt{1+y'^2}\\,dx$"}</td></tr>
            <tr><td>{"Fastest descent (brachistochrone)"}</td><td>{"$\\displaystyle\\int_0^{b}\\frac{\\sqrt{1+y'^2}}{\\sqrt{2gy}}\\,dx$ ($y$ measured downward)"}</td></tr>
            <tr><td>{"Least-area surface of revolution"}</td><td>{"$\\displaystyle2\\pi\\int_a^b y\\sqrt{1+y'^2}\\,dx$"}</td></tr>
            <tr><td>{"Motion of a particle"}</td><td>{"$\\displaystyle\\int_{t_0}^{t_1}\\big(T-V\\big)\\,dt$ (the action)"}</td></tr>
          </tbody>
        </table>
      </div>

      <Example title={"Evaluating a functional on two curves"}>
        <p>{"For the arc-length functional $J[y]=\\int_0^1\\sqrt{1+y'^2}\\,dx$, compare $y_1=x$ and $y_2=x^2$ (both join $(0,0)$ to $(1,1)$)."}</p>
        <Solution>
          <p>{"$J[y_1]=\\int_0^1\\sqrt2\\,dx=\\sqrt2\\approx1.414$."}</p>
          <F>{"$$J[y_2]=\\int_0^1\\sqrt{1+4x^2}\\,dx=\\Big[\\tfrac x2\\sqrt{1+4x^2}+\\tfrac14\\ln\\big(2x+\\sqrt{1+4x^2}\\big)\\Big]_0^1=\\tfrac{\\sqrt5}{2}+\\tfrac14\\ln(2+\\sqrt5)\\approx1.479$$"}</F>
          <p>{"The straight line is shorter, as expected. The calculus of variations will prove it beats every other curve."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §2 ═════════════════════════════ */
function SectionEulerLagrange() {
  return (
    <section className="section" id="cov-euler-lagrange">
      <SecHead n={2} title="The Euler–Lagrange Equation" />
      <p>
        {"At a minimum of an ordinary function $f$, every directional derivative is zero, which gives $\\nabla f=\\mathbf 0$. We copy this idea: nudge the curve $y$ in a direction $\\eta$ and require the rate of change of $J$ to be zero for every admissible direction."}
      </p>

      <Box kind="def" label={"Definition \u2014 First Variation"}>
        <p>{"Let $\\eta$ be smooth with $\\eta(a)=\\eta(b)=0$, so $y+\\varepsilon\\eta$ still satisfies the boundary conditions. The first variation of $J$ at $y$ in the direction $\\eta$ is"}</p>
        <F>{"$$\\delta J[y;\\eta]=\\frac{d}{d\\varepsilon}J[y+\\varepsilon\\eta]\\Big|_{\\varepsilon=0}$$"}</F>
        <p>{"If $y$ minimizes $J$, then $\\varepsilon\\mapsto J[y+\\varepsilon\\eta]$ has a minimum at $\\varepsilon=0$, so $\\delta J[y;\\eta]=0$ for every such $\\eta$."}</p>
      </Box>

      <Box kind="thm" label={"Derivation"}>
        <p>{"Differentiate under the integral sign using the chain rule:"}</p>
        <F>{"$$\\delta J=\\int_a^b\\Big(F_y\\,\\eta+F_{y'}\\,\\eta'\\Big)dx$$"}</F>
        <p>{"Integrate the second term by parts. The boundary term vanishes because $\\eta(a)=\\eta(b)=0$:"}</p>
        <F>{"$$\\delta J=\\Big[F_{y'}\\,\\eta\\Big]_a^b+\\int_a^b\\Big(F_y-\\frac{d}{dx}F_{y'}\\Big)\\eta\\,dx=\\int_a^b\\Big(F_y-\\frac{d}{dx}F_{y'}\\Big)\\eta\\,dx$$"}</F>
      </Box>

      <Box kind="thm" label={"Fundamental Lemma of the Calculus of Variations"}>
        <p>{"If $g$ is continuous on $[a,b]$ and $\\int_a^bg\\,\\eta\\,dx=0$ for every smooth $\\eta$ vanishing at $a$ and $b$, then $g\\equiv0$."}</p>
        <p>{"Reason: if $g(x_0)>0$, pick a smooth bump $\\eta\\ge0$ supported in a small interval around $x_0$ where $g>0$. Then $\\int g\\eta>0$, a contradiction."}</p>
      </Box>

      <Box kind="thm" label={"Theorem \u2014 Euler–Lagrange Equation"}>
        <p>{"If a twice-differentiable $y$ makes $J[y]=\\int_a^bF(x,y,y')\\,dx$ stationary among curves with the same endpoints, then"}</p>
        <F>{"$$\\boxed{\\frac{\\partial F}{\\partial y}-\\frac{d}{dx}\\Big(\\frac{\\partial F}{\\partial y'}\\Big)=0}$$"}</F>
        <p>{"Solutions are called "}<strong>{"extremals"}</strong>{". The equation is usually a second-order ODE for $y$, and the two boundary conditions pick out the solution."}</p>
      </Box>

      <div className="note">
        {"In $\\frac{d}{dx}F_{y'}$ the derivative is total: first compute the partial $\\partial F/\\partial y'$ treating $x,y,y'$ as independent, then substitute $y=y(x)$ and differentiate with respect to $x$ using the chain rule."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ §3 ═════════════════════════════ */
function SectionSolving() {
  return (
    <section className="section" id="cov-solving">
      <SecHead n={3} title="Solving the Euler–Lagrange Equation" />
      <p>{"The routine: compute $F_y$ and $F_{y'}$, differentiate $F_{y'}$ in $x$, solve the resulting ODE, and apply the boundary conditions."}</p>

      <Example title={"A hyperbolic extremal"}>
        <p>{"Find the extremal of $J[y]=\\int_0^1\\big(y'^2+y^2\\big)dx$ with $y(0)=0$, $y(1)=1$."}</p>
        <Solution>
          <p>{"$F_y=2y$ and $F_{y'}=2y'$, so the equation is $2y-2y''=0$, i.e. $y''=y$. The general solution is $y=A\\cosh x+B\\sinh x$."}</p>
          <p>{"$y(0)=0$ gives $A=0$; $y(1)=1$ gives $B=1/\\sinh1$:"}</p>
          <F>{"$$y(x)=\\frac{\\sinh x}{\\sinh1}$$"}</F>
        </Solution>
      </Example>

      <Example title={"An oscillating extremal"}>
        <p>{"Find the extremal of $J[y]=\\int_0^{\\pi/2}\\big(y'^2-y^2\\big)dx$ with $y(0)=0$, $y(\\pi/2)=1$."}</p>
        <Solution>
          <p>{"$F_y=-2y$, $F_{y'}=2y'$, so $-2y-2y''=0$, i.e. $y''+y=0$, giving $y=A\\cos x+B\\sin x$. Then $A=0$ and $B=1$:"}</p>
          <F>{"$$y(x)=\\sin x$$"}</F>
          <p>{"A single sign change in $F$ turned exponential behaviour into oscillation."}</p>
        </Solution>
      </Example>

      <Example title={"A forcing term"}>
        <p>{"Find the extremal of $J[y]=\\int_0^1\\big(y'^2+2xy\\big)dx$ with $y(0)=0$, $y(1)=1$."}</p>
        <Solution>
          <p>{"$F_y=2x$ and $\\frac{d}{dx}F_{y'}=2y''$, so $y''=x$ and $y=\\dfrac{x^3}{6}+Cx+D$."}</p>
          <p>{"$y(0)=0\\Rightarrow D=0$; $y(1)=1\\Rightarrow\\tfrac16+C=1\\Rightarrow C=\\tfrac56$:"}</p>
          <F>{"$$y(x)=\\frac{x^3}{6}+\\frac{5x}{6}$$"}</F>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §4 ═════════════════════════════ */
function SectionFirstIntegrals() {
  return (
    <section className="section" id="cov-first-integrals">
      <SecHead n={4} title="First Integrals and the Beltrami Identity" />
      <p>{"When $F$ is missing a variable, the second-order Euler–Lagrange equation can be integrated once immediately. These shortcuts handle almost all the classical problems."}</p>

      <Box kind="thm" label={"Case 1 \u2014 $F$ Does Not Depend on $y$"}>
        <p>{"If $F=F(x,y')$, then $F_y=0$ and the equation becomes $\\frac{d}{dx}F_{y'}=0$:"}</p>
        <F>{"$$\\frac{\\partial F}{\\partial y'}=C$$"}</F>
      </Box>

      <Box kind="thm" label={"Case 2 \u2014 $F$ Does Not Depend on $x$ (Beltrami Identity)"}>
        <p>{"If $F=F(y,y')$, every extremal satisfies"}</p>
        <F>{"$$F-y'\\,\\frac{\\partial F}{\\partial y'}=C$$"}</F>
        <p>{"Proof: by the chain rule $\\dfrac{d}{dx}\\big(F-y'F_{y'}\\big)=F_x+F_yy'+F_{y'}y''-y''F_{y'}-y'\\dfrac{d}{dx}F_{y'}=F_x-y'\\Big(\\dfrac{d}{dx}F_{y'}-F_y\\Big)$, which is $0$ when $F_x=0$ and Euler–Lagrange holds."}</p>
      </Box>

      <Example title={"The shortest path is a straight line"}>
        <p>{"Find the extremals of $J[y]=\\int_a^b\\sqrt{1+y'^2}\\,dx$."}</p>
        <Solution>
          <p>{"$F$ does not depend on $y$, so by Case 1:"}</p>
          <F>{"$$\\frac{y'}{\\sqrt{1+y'^2}}=C\\;\\Longrightarrow\\;y'^2=\\frac{C^2}{1-C^2}\\;\\Longrightarrow\\;y'=m\\ \\text{(constant)}$$"}</F>
          <p>{"So $y=mx+k$: straight lines. The endpoints fix $m$ and $k$."}</p>
        </Solution>
      </Example>

      <Example title={"Beltrami on a simple Lagrangian"}>
        <p>{"Use Beltrami to solve $J[y]=\\int(y'^2+y^2)\\,dx$ and compare with §3."}</p>
        <Solution>
          <p>{"$F-y'F_{y'}=y'^2+y^2-2y'^2=y^2-y'^2=C$."}</p>
          <p>{"Check with $y=A\\cosh x+B\\sinh x$: $y^2-y'^2=(A\\cosh x+B\\sinh x)^2-(A\\sinh x+B\\cosh x)^2=A^2-B^2$, a constant. \u2713"}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §5 ═════════════════════════════ */
function SectionClassics() {
  return (
    <section className="section" id="cov-classics">
      <SecHead n={5} title="Two Classic Problems" />

      <h3 className="subsec">{"The Brachistochrone"}</h3>
      <p>{"A bead slides without friction from rest at the origin to a lower point $(b,B)$. Measure $y$ downward. Energy conservation gives speed $v=\\sqrt{2gy}$, and time is $\\int ds/v$:"}</p>
      <F>{"$$T[y]=\\int_0^b\\frac{\\sqrt{1+y'^2}}{\\sqrt{2gy}}\\,dx$$"}</F>

      <Example title={"The fastest slide is a cycloid"}>
        <p>{"Find the extremals of $T[y]$."}</p>
        <Solution>
          <p>{"Drop the constant $1/\\sqrt{2g}$; $F=\\dfrac{\\sqrt{1+y'^2}}{\\sqrt y}$ has no $x$, so use Beltrami:"}</p>
          <F>{"$$\\frac{\\sqrt{1+y'^2}}{\\sqrt y}-\\frac{y'^2}{\\sqrt y\\sqrt{1+y'^2}}=\\frac{1}{\\sqrt y\\sqrt{1+y'^2}}=C\\;\\Longrightarrow\\;y\\big(1+y'^2\\big)=k$$"}</F>
          <p>{"Verify that the cycloid $x=r(\\theta-\\sin\\theta)$, $y=r(1-\\cos\\theta)$ solves this with $k=2r$:"}</p>
          <F>{"$$y'=\\frac{dy/d\\theta}{dx/d\\theta}=\\frac{\\sin\\theta}{1-\\cos\\theta},\\qquad 1+y'^2=\\frac{(1-\\cos\\theta)^2+\\sin^2\\theta}{(1-\\cos\\theta)^2}=\\frac{2}{1-\\cos\\theta}$$"}</F>
          <p>{"So $y(1+y'^2)=r(1-\\cos\\theta)\\cdot\\dfrac{2}{1-\\cos\\theta}=2r$. \u2713 The fastest path is a cycloid, the curve traced by a point on a rolling wheel, not the straight line."}</p>
        </Solution>
      </Example>

      <h3 className="subsec">{"The Minimal Surface of Revolution"}</h3>
      <p>{"Rotate the graph of $y>0$ about the $x$-axis. The surface area is $2\\pi\\int_a^by\\sqrt{1+y'^2}\\,dx$."}</p>

      <Example title={"The catenary"}>
        <p>{"Find the extremals of $J[y]=\\int_a^by\\sqrt{1+y'^2}\\,dx$."}</p>
        <Solution>
          <p>{"No explicit $x$, so Beltrami gives"}</p>
          <F>{"$$y\\sqrt{1+y'^2}-\\frac{y\\,y'^2}{\\sqrt{1+y'^2}}=\\frac{y}{\\sqrt{1+y'^2}}=c$$"}</F>
          <p>{"Try $y=c\\cosh\\big(\\tfrac{x-x_0}{c}\\big)$: then $y'=\\sinh\\big(\\tfrac{x-x_0}{c}\\big)$, $\\sqrt{1+y'^2}=\\cosh\\big(\\tfrac{x-x_0}{c}\\big)$, and $y/\\sqrt{1+y'^2}=c$. \u2713"}</p>
          <p>{"The profile is a "}<strong>{"catenary"}</strong>{" and the surface is a "}<strong>{"catenoid"}</strong>{": the shape of a soap film stretched between two coaxial rings."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §6 ═════════════════════════════ */
function SectionMechanics() {
  return (
    <section className="section" id="cov-mechanics">
      <SecHead n={6} title="Several Functions and Several Variables" />

      <Box kind="thm" label={"Several Unknown Functions"}>
        <p>{"For $J[q_1,\\dots,q_n]=\\int L(t,q_1,\\dots,q_n,\\dot q_1,\\dots,\\dot q_n)\\,dt$, vary each $q_i$ separately to get one equation per function:"}</p>
        <F>{"$$\\frac{\\partial L}{\\partial q_i}-\\frac{d}{dt}\\frac{\\partial L}{\\partial\\dot q_i}=0,\\qquad i=1,\\dots,n$$"}</F>
        <p>{"With $L=T-V$ (kinetic minus potential energy) these are Lagrange's equations of motion. Nature moves along paths that make the "}<strong>{"action"}</strong>{" $\\int L\\,dt$ stationary."}</p>
      </Box>

      <Example title={"The harmonic oscillator"}>
        <p>{"Derive the equation of motion from $L=\\tfrac12m\\dot x^2-\\tfrac12kx^2$."}</p>
        <Solution>
          <p>{"$L_x=-kx$ and $\\frac{d}{dt}L_{\\dot x}=m\\ddot x$, so $m\\ddot x=-kx$: Hooke's law with Newton's second law, solved by $x=A\\cos\\big(\\sqrt{k/m}\\,t\\big)+B\\sin\\big(\\sqrt{k/m}\\,t\\big)$."}</p>
        </Solution>
      </Example>

      <Example title={"A projectile"}>
        <p>{"Derive the equations of motion from $L=\\tfrac12m(\\dot x^2+\\dot y^2)-mgy$."}</p>
        <Solution>
          <p>{"For $x$: $0-m\\ddot x=0\\Rightarrow\\ddot x=0$. For $y$: $-mg-m\\ddot y=0\\Rightarrow\\ddot y=-g$. Constant horizontal velocity and constant downward acceleration: a parabola."}</p>
        </Solution>
      </Example>

      <Box kind="thm" label={"Functions of Several Variables"}>
        <p>{"For $J[u]=\\iint_DF(x,y,u,u_x,u_y)\\,dA$ with $u$ fixed on $\\partial D$, the same argument (now using the Divergence Theorem instead of integration by parts) gives"}</p>
        <F>{"$$\\frac{\\partial F}{\\partial u}-\\frac{\\partial}{\\partial x}\\frac{\\partial F}{\\partial u_x}-\\frac{\\partial}{\\partial y}\\frac{\\partial F}{\\partial u_y}=0$$"}</F>
      </Box>

      <Example title={"Harmonic functions minimize energy"}>
        <p>{"Find the Euler–Lagrange equation for the Dirichlet energy $J[u]=\\iint_D\\tfrac12\\big(u_x^2+u_y^2\\big)\\,dA$."}</p>
        <Solution>
          <p>{"$F_u=0$, $F_{u_x}=u_x$, $F_{u_y}=u_y$, so"}</p>
          <F>{"$$-u_{xx}-u_{yy}=0\\;\\Longleftrightarrow\\;\\nabla^2u=0$$"}</F>
          <p>{"Among all functions with given boundary values, the harmonic one has the least energy. This is "}<strong>{"Dirichlet's principle"}</strong>{", the variational side of the Laplacian guide in "}<a href="/multivariable-calculus/potential-theory" style={LINK_STYLE}>{"Potential Theory"}</a>{"."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §7 ═════════════════════════════ */
function SectionConstraints() {
  return (
    <section className="section" id="cov-constraints">
      <SecHead n={7} title="Constraints and Lagrange Multipliers" />
      <p>
        {"Many problems fix the value of a second integral, such as a given length or a given total amount. Exactly as in "}
        <a href="/lagrange-multipliers/1" style={LINK_STYLE}>{"Lagrange Multipliers"}</a>
        {", we add the constraint with a multiplier."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 Isoperimetric Problems"}>
        <p>{"To make $J[y]=\\int_a^bF\\,dx$ stationary subject to $K[y]=\\int_a^bG\\,dx=\\ell$, apply the Euler–Lagrange equation to"}</p>
        <F>{"$$F^*=F+\\lambda G$$"}</F>
        <p>{"then use the constraint to determine $\\lambda$."}</p>
      </Box>

      <Example title={"Least bending with a fixed area"}>
        <p>{"Minimize $\\int_0^1y'^2\\,dx$ subject to $\\int_0^1y\\,dx=1$, $y(0)=y(1)=0$."}</p>
        <Solution>
          <p>{"$F^*=y'^2+\\lambda y$, so $\\lambda-2y''=0$: $y''=\\lambda/2$ and $y$ is a parabola. Vanishing at $0$ and $1$ forces $y=c\\,x(1-x)$."}</p>
          <p>{"Constraint: $c\\int_0^1x(1-x)\\,dx=c\\Big(\\tfrac12-\\tfrac13\\Big)=\\tfrac c6=1$, so $c=6$:"}</p>
          <F>{"$$y(x)=6x(1-x),\\qquad \\lambda=2y''=-24$$"}</F>
        </Solution>
      </Example>

      <Example title={"Dido's problem: the isoperimetric curve"}>
        <p>{"Among curves of fixed length, which encloses the most area $\\int y\\,dx$ above the $x$-axis?"}</p>
        <Solution>
          <p>{"Take $F^*=y+\\lambda\\sqrt{1+y'^2}$. It has no $x$, so Beltrami gives"}</p>
          <F>{"$$y+\\lambda\\sqrt{1+y'^2}-\\frac{\\lambda y'^2}{\\sqrt{1+y'^2}}=y+\\frac{\\lambda}{\\sqrt{1+y'^2}}=C$$"}</F>
          <p>{"Rearranging: $(y-C)^2(1+y'^2)=\\lambda^2$. Differentiating $(x-x_0)^2+(y-C)^2=\\lambda^2$ shows every circle of radius $|\\lambda|$ satisfies this. The optimal curves are circular arcs."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §8 ═════════════════════════════ */
function SectionBoundary() {
  return (
    <section className="section" id="cov-boundary">
      <SecHead n={8} title="Free Endpoints and Minimum Tests" />

      <Box kind="thm" label={"Natural Boundary Condition"}>
        <p>{"If $y(a)$ is fixed but $y(b)$ is free, then $\\eta(b)$ need not vanish, and the boundary term in §2 must vanish on its own:"}</p>
        <F>{"$$\\frac{\\partial F}{\\partial y'}\\Big|_{x=b}=0$$"}</F>
      </Box>

      <Example title={"A free right endpoint"}>
        <p>{"Minimize $J[y]=\\int_0^1\\big(y'^2+2y\\big)dx$ with $y(0)=0$ and $y(1)$ free."}</p>
        <Solution>
          <p>{"Euler–Lagrange: $2-2y''=0$, so $y=\\tfrac{x^2}{2}+Cx+D$, and $y(0)=0$ gives $D=0$."}</p>
          <p>{"Natural condition: $F_{y'}=2y'$ must vanish at $x=1$, so $1+C=0$ and $C=-1$:"}</p>
          <F>{"$$y(x)=\\frac{x^2}{2}-x$$"}</F>
        </Solution>
      </Example>

      <Box kind="thm" label={"Legendre's Necessary Condition"}>
        <p>{"The Euler–Lagrange equation finds stationary curves, not necessarily minima (like a critical point of $f$). If $y$ is a minimum, then along $y$"}</p>
        <F>{"$$\\frac{\\partial^2F}{\\partial y'^2}\\ge0$$"}</F>
        <p>{"This is the analogue of $f''\\ge0$ in one variable."}</p>
      </Box>

      <Example title={"Checking Legendre's condition"}>
        <p>{"Check Legendre's condition for arc length and for $F=y'^2-y^2$."}</p>
        <Solution>
          <p>{"Arc length: $F_{y'y'}=\\dfrac{1}{(1+y'^2)^{3/2}}>0$. Consistent with straight lines being minima."}</p>
          <p>{"For $F=y'^2-y^2$: $F_{y'y'}=2>0$, so the condition holds. It is necessary but not sufficient: on intervals longer than $\\pi$ the extremal $y=\\sin x$ is no longer a minimum (a \u201cconjugate point\u201d appears), so a full test also needs Jacobi's condition."}</p>
        </Solution>
      </Example>

      <div className="note">
        {"For convex Lagrangians (when $F$ is convex in $(y,y')$ jointly, as for $y'^2+y^2$), every extremal satisfying the boundary conditions is a global minimum. This covers most of the examples on this page."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ Summary ═════════════════════════════ */
function SectionSummary() {
  const cards = [
    ["Functional", "$J[y]=\\int_a^bF(x,y,y')\\,dx$"],
    ["First variation", "$\\delta J=\\frac{d}{d\\varepsilon}J[y+\\varepsilon\\eta]\\big|_{\\varepsilon=0}$"],
    ["Euler–Lagrange", "$F_y-\\dfrac{d}{dx}F_{y'}=0$"],
    ["No $y$ in $F$", "$F_{y'}=C$"],
    ["No $x$ in $F$ (Beltrami)", "$F-y'F_{y'}=C$"],
    ["Classic extremals", "Line (length), cycloid (fastest), catenary (least area), circle (isoperimetric)"],
    ["Lagrange's equations", "$L_{q_i}-\\frac{d}{dt}L_{\\dot q_i}=0$, $\\;L=T-V$"],
    ["Several variables", "$F_u-\\partial_xF_{u_x}-\\partial_yF_{u_y}=0$"],
    ["Constraint", "Use $F^*=F+\\lambda G$"],
    ["Free end / Legendre", "$F_{y'}\\big|_{x=b}=0$; $\\;F_{y'y'}\\ge0$ for a minimum"],
  ];
  return (
    <section className="section" id="cov-summary">
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
        {" a minimizing curve has zero directional derivative in every admissible direction. Integration by parts and the fundamental lemma turn that infinite family of conditions into one differential equation, the Euler–Lagrange equation."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ Topic export ═════════════════════════════ */
// quizUnlocked: false → shows the locked banner (existing .mcq-section-locked CSS)
// lockHint: text shown in that banner
export default function CalculusOfVariationsTopic({ quizUnlocked = true, lockHint = "" }) {
  return (
    <div id="calculus-of-variations">
      <div className="opening-note-box">
        <p className="opening-note">
          <strong>{"Calculus of Variations (Euler–Lagrange Equation)."}</strong>{" "}
          {"We optimize over whole functions instead of points. Starting from the first variation, we derive the Euler–Lagrange equation $F_y-\\frac{d}{dx}F_{y'}=0$, learn the first-integral shortcuts, and solve the classic problems: the shortest path, the brachistochrone, the minimal surface of revolution and Dido's isoperimetric problem. We extend the method to mechanics, to functions of several variables, to constraints with multipliers and to free endpoints. Prerequisites: partial derivatives, the chain rule, integration by parts, and second-order ODEs."}
        </p>
      </div>
      <hr className="divider" />
      <SectionFunctionals />
      <hr className="divider" />
      <SectionEulerLagrange />
      <hr className="divider" />
      <SectionSolving />
      <hr className="divider" />
      <SectionFirstIntegrals />
      <hr className="divider" />
      <SectionClassics />
      <hr className="divider" />
      <SectionMechanics />
      <hr className="divider" />
      <SectionConstraints />
      <hr className="divider" />
      <SectionBoundary />
      <hr className="divider" />
      <SectionSummary />
      <RealLifeUse>
        {"Variational principles are everywhere: Lagrangian mechanics drives robot-arm and spacecraft trajectory planning, optimal control picks the cheapest path for rockets and self-driving cars, image denoising minimizes energies like $\\iint|\\nabla u|$, soap-film and tensile-roof designs follow minimal surfaces, and the finite element method solves engineering problems by minimizing energy functionals."}
      </RealLifeUse>
      <hr className="divider" />
      {quizUnlocked ? (
        <GuideMcqSection
          id="mcq-ai-variations"
          badge="Practice"
          title="Calculus of Variations (Euler–Lagrange Equation) — Quiz"
          scoreId="score-ai-variations"
          section={AI_VARIATIONS_QUIZ_KEY}
          questions={MV_AI_VARIATIONS_QUIZ}
        />
      ) : (
        <section id="mcq-ai-variations" className="mcq-section mcq-section-locked" data-lock-hint={lockHint}>
          <div className="mcq-section-head">
            <span className="mcq-section-badge">Locked</span>
            <span className="mcq-section-title">{"Calculus of Variations (Euler–Lagrange Equation) — Quiz"}</span>
          </div>
          <p className="mcq-unlock-hint">{lockHint}</p>
        </section>
      )}
    </div>
  );
}
