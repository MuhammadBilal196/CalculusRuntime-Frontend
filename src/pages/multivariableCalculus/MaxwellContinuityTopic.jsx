// src/pages/multivariableCalculus/MaxwellContinuityTopic.jsx
// Potential Theory · Maxwell's Equations & the Continuity Equation
// Rendered inside PotentialTheoryGuide (shares PartialDerivativesGuide.css).
// Scope: builds on the Divergence Theorem and Stokes' Theorem by cross-link
// instead of re-deriving them.

import { GuideMcqSection } from "../../components/GuideMcq";
import { RealLifeUse } from "../calculus/CalcBlocks";
import { MV_PT_MAXWELL_QUIZ } from "../../data/mvPotentialTheoryQuizzes";

export const MAXWELL_QUIZ_KEY = "pt-maxwell";

export const MAXWELL_NAV = [
  { id: "mx-fields", label: "Fields, Flux & Circulation" },
  { id: "mx-continuity", label: "The Continuity Equation" },
  { id: "mx-gauss-e", label: "Gauss's Law for E" },
  { id: "mx-gauss-b", label: "Gauss's Law for B" },
  { id: "mx-faraday", label: "Faraday's Law" },
  { id: "mx-ampere", label: "Ampère–Maxwell Law" },
  { id: "mx-system", label: "The Four Equations Together" },
  { id: "mx-waves", label: "Electromagnetic Waves" },
  { id: "mx-summary", label: "Key Formulas" },
  { id: "mcq-pt-maxwell", label: "Maxwell & Continuity Quiz" },
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
function SectionFields() {
  return (
    <section className="section" id="mx-fields">
      <SecHead n={1} title="Fields, Flux and Circulation" />
      <p>
        {"Maxwell's equations are four statements about two vector fields: the electric field $\\mathbf E(x,y,z,t)$ and the magnetic field $\\mathbf B(x,y,z,t)$. Each equation exists in two equivalent forms. The "}
        <strong>{"integral form"}</strong>
        {" talks about flux through surfaces and circulation around curves; the "}
        <strong>{"differential form"}</strong>
        {" talks about divergence and curl at a point. The bridge between them is exactly the pair of theorems from earlier guides: the "}
        <a href="/divergence-curl/2" style={LINK_STYLE}>{"Divergence Theorem"}</a>
        {" and "}
        <a href="/stokes-theorem/1" style={LINK_STYLE}>{"Stokes' Theorem"}</a>
        {"."}
      </p>

      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>{"Symbol"}</th>
              <th>{"Meaning"}</th>
              <th>{"SI units"}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>{"$\\mathbf E$"}</td><td>{"Electric field"}</td><td>{"V/m"}</td></tr>
            <tr><td>{"$\\mathbf B$"}</td><td>{"Magnetic field"}</td><td>{"T (tesla)"}</td></tr>
            <tr><td>{"$\\rho$"}</td><td>{"Charge density (charge per volume)"}</td><td>{"C/m$^3$"}</td></tr>
            <tr><td>{"$\\mathbf J$"}</td><td>{"Current density (current per area)"}</td><td>{"A/m$^2$"}</td></tr>
            <tr><td>{"$\\varepsilon_0$"}</td><td>{"Permittivity of free space"}</td><td>{"$\\approx 8.854\\times10^{-12}$ F/m"}</td></tr>
            <tr><td>{"$\\mu_0$"}</td><td>{"Permeability of free space"}</td><td>{"$4\\pi\\times10^{-7}$ T·m/A"}</td></tr>
          </tbody>
        </table>
      </div>

      <Box kind="def" label={"Definition \u2014 Flux and Circulation"}>
        <p>{"For a vector field $\\mathbf F$, an oriented surface $S$ with unit normal $\\mathbf n$, and an oriented closed curve $C$:"}</p>
        <F>{"$$\\Phi_{\\mathbf F}=\\iint_S\\mathbf F\\cdot\\mathbf n\\,dS\\quad\\text{(flux)},\\qquad \\Gamma_{\\mathbf F}=\\oint_C\\mathbf F\\cdot d\\mathbf r\\quad\\text{(circulation)}$$"}</F>
        <p>{"Flux measures how much of the field passes through a surface; circulation measures how much the field pushes along a loop."}</p>
      </Box>

      <Box kind="thm" label={"Theorem \u2014 The Two Bridges"}>
        <p><strong>{"Divergence Theorem"}</strong>{" ($E$ a solid region, $S=\\partial E$ with outward normal):"}</p>
        <F>{"$$\\iint_{S}\\mathbf F\\cdot\\mathbf n\\,dS=\\iiint_E\\nabla\\cdot\\mathbf F\\,dV$$"}</F>
        <p><strong>{"Stokes' Theorem"}</strong>{" ($S$ a surface with boundary curve $C=\\partial S$, oriented by the right-hand rule):"}</p>
        <F>{"$$\\oint_C\\mathbf F\\cdot d\\mathbf r=\\iint_S(\\nabla\\times\\mathbf F)\\cdot\\mathbf n\\,dS$$"}</F>
      </Box>

      <Box kind="thm" label={"The Localization Principle"}>
        <p>{"If $g$ is continuous and $\\iiint_E g\\,dV=0$ for "}<em>{"every"}</em>{" small region $E$, then $g\\equiv 0$. Likewise, if $\\iint_S\\mathbf G\\cdot\\mathbf n\\,dS=0$ for every small surface $S$, then $\\mathbf G\\equiv\\mathbf 0$. This is how every integral law in this guide becomes a pointwise differential law."}</p>
      </Box>

      <Example title={"Flux and divergence for the same field"}>
        <p>{"Let $\\mathbf F=\\langle x,\\,y,\\,z\\rangle$ and $S$ the sphere of radius $R$. Compute the outward flux directly and with the Divergence Theorem."}</p>
        <Solution>
          <p>{"On the sphere $\\mathbf n=\\mathbf r/R$, so $\\mathbf F\\cdot\\mathbf n=|\\mathbf r|^2/R=R$. Directly: $\\iint_S R\\,dS=R\\cdot4\\pi R^2=4\\pi R^3$."}</p>
          <p>{"With the theorem: $\\nabla\\cdot\\mathbf F=3$, so $\\iiint_E 3\\,dV=3\\cdot\\tfrac43\\pi R^3=4\\pi R^3$. \u2713"}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §2 ═════════════════════════════ */
function SectionContinuity() {
  return (
    <section className="section" id="mx-continuity">
      <SecHead n={2} title="Charge Conservation and the Continuity Equation" />
      <p>
        {"Electric charge is neither created nor destroyed. If the charge inside a region goes down, it is because current carried it out through the boundary. Writing that sentence as an equation and applying the Divergence Theorem produces the "}
        <strong>{"continuity equation"}</strong>
        {", the template for every conservation law in physics."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 Continuity Equation"}>
        <p>{"Integral form, for any fixed region $E$ with boundary $S$:"}</p>
        <F>{"$$\\frac{d}{dt}\\iiint_E\\rho\\,dV=-\\iint_S\\mathbf J\\cdot\\mathbf n\\,dS$$"}</F>
        <p>{"Moving $d/dt$ inside and using the Divergence Theorem on the right:"}</p>
        <F>{"$$\\iiint_E\\Big(\\frac{\\partial\\rho}{\\partial t}+\\nabla\\cdot\\mathbf J\\Big)dV=0\\quad\\text{for every }E\\;\\Longrightarrow\\;\\boxed{\\frac{\\partial\\rho}{\\partial t}+\\nabla\\cdot\\mathbf J=0}$$"}</F>
        <p>{"When charge of density $\\rho$ moves with velocity $\\mathbf v$, the current density is $\\mathbf J=\\rho\\,\\mathbf v$."}</p>
      </Box>

      <Example title={"Reading the continuity equation"}>
        <p>{"A current density is $\\mathbf J=\\langle x^2,\\,y^2,\\,z^2\\rangle$ A/m$^2$. Find $\\partial\\rho/\\partial t$ and say where charge is building up or draining away."}</p>
        <Solution>
          <F>{"$$\\nabla\\cdot\\mathbf J=2x+2y+2z,\\qquad \\frac{\\partial\\rho}{\\partial t}=-(2x+2y+2z)$$"}</F>
          <p>{"At $(1,1,1)$: $\\partial_t\\rho=-6$ C/(m$^3$·s), so charge is draining (current diverges outward). Where $x+y+z<0$ the divergence is negative and charge accumulates. On the plane $x+y+z=0$ the density is momentarily steady."}</p>
        </Solution>
      </Example>

      <Example title={"Checking that a charge distribution is conserved"}>
        <p>{"A cloud has $\\rho=\\rho_0e^{-t}$ and $\\mathbf J=\\dfrac{\\rho_0e^{-t}}{3}\\langle x,y,z\\rangle$. Verify the continuity equation."}</p>
        <Solution>
          <p>{"$\\partial_t\\rho=-\\rho_0e^{-t}$. $\\nabla\\cdot\\mathbf J=\\dfrac{\\rho_0e^{-t}}{3}(1+1+1)=\\rho_0e^{-t}$."}</p>
          <p>{"Sum: $-\\rho_0e^{-t}+\\rho_0e^{-t}=0$. \u2713 The uniform cloud thins out because charge streams radially outward."}</p>
        </Solution>
      </Example>

      <Example title={"Charge relaxation in a conductor"}>
        <p>{"In an ohmic conductor $\\mathbf J=\\sigma\\mathbf E$. Using Gauss's law $\\nabla\\cdot\\mathbf E=\\rho/\\varepsilon_0$ (§3), show that any interior charge decays, and find the time constant for copper ($\\sigma\\approx5.8\\times10^{7}$ S/m)."}</p>
        <Solution>
          <F>{"$$\\frac{\\partial\\rho}{\\partial t}=-\\nabla\\cdot(\\sigma\\mathbf E)=-\\frac{\\sigma}{\\varepsilon_0}\\rho\\;\\Longrightarrow\\;\\rho(t)=\\rho_0\\,e^{-t/\\tau},\\qquad \\tau=\\frac{\\varepsilon_0}{\\sigma}$$"}</F>
          <p>{"For copper $\\tau\\approx\\dfrac{8.854\\times10^{-12}}{5.8\\times10^{7}}\\approx1.5\\times10^{-19}$ s. Free charge essentially vanishes from the interior instantly and sits on the surface."}</p>
        </Solution>
      </Example>

      <Box kind="thm" label={"Steady Currents"}>
        <p>{"If $\\partial_t\\rho=0$, then $\\nabla\\cdot\\mathbf J=0$: steady current is divergence-free. Integrated over a junction, this is Kirchhoff's current law — the total current in equals the total current out."}</p>
      </Box>

      <div className="note">
        {"The same argument works for any conserved quantity with density $q$ and flux $\\mathbf F$: $\\partial_t q+\\nabla\\cdot\\mathbf F=0$. For fluid mass, $\\partial_t\\rho+\\nabla\\cdot(\\rho\\mathbf v)=0$; if the density is constant this becomes $\\nabla\\cdot\\mathbf v=0$, and with $\\mathbf v=\\nabla\\varphi$ we recover Laplace's equation $\\nabla^2\\varphi=0$ from the Laplacian guide."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ §3 ═════════════════════════════ */
function SectionGaussE() {
  return (
    <section className="section" id="mx-gauss-e">
      <SecHead n={3} title="Gauss's Law for the Electric Field" />
      <p>
        {"Electric field lines begin on positive charge and end on negative charge. Gauss's law makes this precise: the net flux of $\\mathbf E$ out of any closed surface is proportional to the charge inside."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 Gauss's Law"}>
        <F>{"$$\\iint_S\\mathbf E\\cdot\\mathbf n\\,dS=\\frac{Q_{\\text{enc}}}{\\varepsilon_0}=\\frac{1}{\\varepsilon_0}\\iiint_E\\rho\\,dV\\qquad\\Longleftrightarrow\\qquad\\nabla\\cdot\\mathbf E=\\frac{\\rho}{\\varepsilon_0}$$"}</F>
        <p>{"The differential form follows by writing the left side as $\\iiint_E\\nabla\\cdot\\mathbf E\\,dV$ and localizing."}</p>
      </Box>

      <Example title={"Flux from a point charge"}>
        <p>{"A point charge $q$ at the origin has field $\\mathbf E=\\dfrac{q}{4\\pi\\varepsilon_0}\\dfrac{\\hat{\\mathbf r}}{\\rho^2}$. Find the flux through the sphere of radius $R$, and evaluate it for $q=2$ nC."}</p>
        <Solution>
          <F>{"$$\\iint\\mathbf E\\cdot\\mathbf n\\,dS=\\frac{q}{4\\pi\\varepsilon_0R^2}\\cdot4\\pi R^2=\\frac{q}{\\varepsilon_0}$$"}</F>
          <p>{"Independent of $R$, as Gauss's law predicts. For $q=2\\times10^{-9}$ C: $\\Phi_E=\\dfrac{2\\times10^{-9}}{8.854\\times10^{-12}}\\approx226$ N·m$^2$/C."}</p>
          <p>{"This is the same calculation as the flux of $\\nabla(1/\\rho)$ in the Laplacian guide: $\\mathbf E=-\\nabla\\phi$ with $\\phi=\\dfrac{q}{4\\pi\\varepsilon_0\\rho}$."}</p>
        </Solution>
      </Example>

      <Example title={"Field of a uniformly charged ball"}>
        <p>{"A ball of radius $R$ carries uniform charge density $\\rho_0$ (total charge $Q=\\tfrac43\\pi R^3\\rho_0$). Find $\\mathbf E$ inside and outside."}</p>
        <Solution>
          <p>{"By symmetry $\\mathbf E=E(r)\\hat{\\mathbf r}$. Apply Gauss's law on a sphere of radius $r$:"}</p>
          <F>{"$$E(r)\\cdot4\\pi r^2=\\frac{Q_{\\text{enc}}}{\\varepsilon_0}\\;\\Longrightarrow\\;E(r)=\\begin{cases}\\dfrac{\\rho_0\\,r}{3\\varepsilon_0}, & r\\le R\\\\[2mm]\\dfrac{Q}{4\\pi\\varepsilon_0r^2}, & r\\ge R\\end{cases}$$"}</F>
          <p>{"Check the inside with the differential form: in Cartesian coordinates $\\mathbf E=\\dfrac{\\rho_0}{3\\varepsilon_0}\\langle x,y,z\\rangle$, so $\\nabla\\cdot\\mathbf E=\\dfrac{\\rho_0}{3\\varepsilon_0}\\cdot3=\\dfrac{\\rho_0}{\\varepsilon_0}$. \u2713"}</p>
        </Solution>
      </Example>

      <Example title={"Finding the charge from the field"}>
        <p>{"In a region, $\\mathbf E=\\langle 2xy,\\;x^2-z^2,\\;-2yz\\rangle$ V/m. Find $\\rho$."}</p>
        <Solution>
          <F>{"$$\\nabla\\cdot\\mathbf E=\\frac{\\partial}{\\partial x}(2xy)+\\frac{\\partial}{\\partial y}(x^2-z^2)+\\frac{\\partial}{\\partial z}(-2yz)=2y+0-2y=0$$"}</F>
          <p>{"So $\\rho=\\varepsilon_0\\nabla\\cdot\\mathbf E=0$: the region is charge-free. (This field is $-\\nabla\\phi$ with $\\phi=yz^2-x^2y$, and $\\phi$ is harmonic.)"}</p>
        </Solution>
      </Example>

      <Box kind="thm" label={"Poisson's Equation for the Potential"}>
        <p>{"In electrostatics $\\mathbf E=-\\nabla\\phi$ (see §5). Substituting into Gauss's law:"}</p>
        <F>{"$$\\nabla\\cdot(-\\nabla\\phi)=\\frac{\\rho}{\\varepsilon_0}\\;\\Longrightarrow\\;\\nabla^2\\phi=-\\frac{\\rho}{\\varepsilon_0}$$"}</F>
        <p>{"In charge-free regions this is Laplace's equation, so the electrostatic potential is harmonic there and obeys the mean value property and maximum principle from the Laplacian guide."}</p>
      </Box>
    </section>
  );
}

/* ═════════════════════════════ §4 ═════════════════════════════ */
function SectionGaussB() {
  return (
    <section className="section" id="mx-gauss-b">
      <SecHead n={4} title="Gauss's Law for Magnetism" />
      <p>
        {"No experiment has ever found an isolated north or south pole. Magnetic field lines never start or stop; they form closed loops. In the language of vector calculus, $\\mathbf B$ has no sources."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 No Magnetic Monopoles"}>
        <F>{"$$\\iint_S\\mathbf B\\cdot\\mathbf n\\,dS=0\\qquad\\Longleftrightarrow\\qquad\\nabla\\cdot\\mathbf B=0$$"}</F>
        <p>{"Consequence: on a suitable region, $\\mathbf B=\\nabla\\times\\mathbf A$ for a "}<strong>{"vector potential"}</strong>{" $\\mathbf A$, because $\\nabla\\cdot(\\nabla\\times\\mathbf A)=0$ for every smooth $\\mathbf A$."}</p>
      </Box>

      <Example title={"Testing candidate magnetic fields"}>
        <p>{"Which of $\\mathbf F_1=\\langle yz,\\,xz,\\,xy\\rangle$, $\\mathbf F_2=\\langle x^2,\\,y,\\,-2xz\\rangle$ and $\\mathbf F_3=\\langle -y,\\,x,\\,0\\rangle$ could be magnetic fields?"}</p>
        <Solution>
          <F>{"$$\\nabla\\cdot\\mathbf F_1=0+0+0=0,\\qquad\\nabla\\cdot\\mathbf F_2=2x+1-2x=1,\\qquad\\nabla\\cdot\\mathbf F_3=0$$"}</F>
          <p>{"$\\mathbf F_1$ and $\\mathbf F_3$ are possible magnetic fields; $\\mathbf F_2$ is not, since it has a source of strength $1$ everywhere."}</p>
        </Solution>
      </Example>

      <Example title={"Surface independence of magnetic flux"}>
        <p>{"Let $\\mathbf B=B_0\\mathbf k$. Find the upward flux through the upper hemisphere $x^2+y^2+z^2=R^2$, $z\\ge0$, without parametrizing it."}</p>
        <Solution>
          <p>{"The hemisphere $H$ and the flat disk $D$ ($z=0$, $x^2+y^2\\le R^2$) together bound a half-ball. Since $\\nabla\\cdot\\mathbf B=0$, the net outward flux through $H\\cup D$ is $0$, so the upward flux through $H$ equals the upward flux through $D$:"}</p>
          <F>{"$$\\iint_H\\mathbf B\\cdot\\mathbf n\\,dS=\\iint_D B_0\\,dA=\\pi R^2B_0$$"}</F>
          <p>{"Magnetic flux through a surface depends only on its boundary curve. That is why \u201cflux through a loop\u201d in Faraday's law is well defined."}</p>
        </Solution>
      </Example>

      <Example title={"A field from a vector potential"}>
        <p>{"Let $\\mathbf A=\\tfrac12B_0\\langle -y,\\,x,\\,0\\rangle$. Compute $\\mathbf B=\\nabla\\times\\mathbf A$ and confirm $\\nabla\\cdot\\mathbf B=0$."}</p>
        <Solution>
          <F>{"$$\\nabla\\times\\mathbf A=\\Big\\langle 0-0,\\;0-0,\\;\\tfrac12B_0-\\big(-\\tfrac12B_0\\big)\\Big\\rangle=\\langle0,0,B_0\\rangle$$"}</F>
          <p>{"A uniform field, with $\\nabla\\cdot\\mathbf B=0$ trivially. (Compare the Vector Potentials topic in Vector Fields & Approximation Theory.)"}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §5 ═════════════════════════════ */
function SectionFaraday() {
  return (
    <section className="section" id="mx-faraday">
      <SecHead n={5} title="Faraday's Law of Induction" />
      <p>
        {"A changing magnetic flux through a loop drives a current around it. This is how generators, transformers and induction cooktops work. The induced electromotive force (emf) is the circulation of $\\mathbf E$ around the loop."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 Faraday's Law"}>
        <F>{"$$\\mathcal E=\\oint_C\\mathbf E\\cdot d\\mathbf r=-\\frac{d}{dt}\\iint_S\\mathbf B\\cdot\\mathbf n\\,dS=-\\frac{d\\Phi_B}{dt}$$"}</F>
        <p>{"For a fixed surface, Stokes' Theorem rewrites the left side as $\\iint_S(\\nabla\\times\\mathbf E)\\cdot\\mathbf n\\,dS$. Localizing:"}</p>
        <F>{"$$\\nabla\\times\\mathbf E=-\\frac{\\partial\\mathbf B}{\\partial t}$$"}</F>
        <p>{"The minus sign is "}<strong>{"Lenz's law"}</strong>{": the induced current flows so as to oppose the change in flux."}</p>
      </Box>

      <Example title={"Emf in a loop from an oscillating field"}>
        <p>{"A circular loop of radius $0.1$ m lies in the $xy$-plane in the field $\\mathbf B=0.5\\sin(100t)\\,\\mathbf k$ T. Find the emf."}</p>
        <Solution>
          <F>{"$$\\Phi_B=\\pi(0.1)^2\\cdot0.5\\sin(100t)=0.005\\pi\\sin(100t)$$"}</F>
          <F>{"$$\\mathcal E=-\\frac{d\\Phi_B}{dt}=-0.5\\pi\\cos(100t)\\approx-1.57\\cos(100t)\\ \\text{V}$$"}</F>
          <p>{"The emf peaks at about $1.57$ V when the flux is changing fastest, i.e. when $\\sin(100t)=0$."}</p>
        </Solution>
      </Example>

      <Example title={"Finding an induced electric field"}>
        <p>{"A uniform field grows linearly, $\\mathbf B=\\langle0,0,\\beta t\\rangle$. Show that $\\mathbf E=\\tfrac{\\beta}{2}\\langle y,\\,-x,\\,0\\rangle$ satisfies Faraday's law, and find the circulation around a circle of radius $a$."}</p>
        <Solution>
          <p>{"$\\nabla\\times\\mathbf E$ has only a $z$-component: $\\dfrac{\\partial}{\\partial x}\\Big(-\\dfrac{\\beta x}{2}\\Big)-\\dfrac{\\partial}{\\partial y}\\Big(\\dfrac{\\beta y}{2}\\Big)=-\\dfrac{\\beta}{2}-\\dfrac{\\beta}{2}=-\\beta$."}</p>
          <p>{"And $-\\partial_t\\mathbf B=\\langle0,0,-\\beta\\rangle$. \u2713"}</p>
          <F>{"$$\\oint_C\\mathbf E\\cdot d\\mathbf r=\\iint_D(\\nabla\\times\\mathbf E)\\cdot\\mathbf k\\,dA=-\\beta\\cdot\\pi a^2=-\\frac{d}{dt}\\big(\\beta t\\cdot\\pi a^2\\big)$$"}</F>
          <p>{"The induced field circulates clockwise (viewed from $+z$), opposing the growing upward flux."}</p>
        </Solution>
      </Example>

      <Box kind="thm" label={"Electrostatics: E Is Conservative"}>
        <p>{"If $\\partial_t\\mathbf B=\\mathbf 0$, then $\\nabla\\times\\mathbf E=\\mathbf 0$. On a simply connected region, $\\mathbf E$ is conservative, so $\\mathbf E=-\\nabla\\phi$ for an electric potential $\\phi$, and the work done moving a charge between two points is independent of the path."}</p>
      </Box>

      <div className="note">
        {"When $\\mathbf B$ changes in time, $\\nabla\\times\\mathbf E\\neq\\mathbf 0$ and $\\mathbf E$ is no longer the gradient of a potential. A single electric potential $\\phi$ is a purely electrostatic idea."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ §6 ═════════════════════════════ */
function SectionAmpere() {
  return (
    <section className="section" id="mx-ampere">
      <SecHead n={6} title="The Ampère–Maxwell Law" />
      <p>
        {"Electric currents produce circulating magnetic fields (Ampère's law). Maxwell noticed that Ampère's original law contradicts charge conservation whenever charge is building up, and repaired it by adding a "}
        <strong>{"displacement current"}</strong>
        {" term. That single term is what predicts electromagnetic waves."}
      </p>

      <Box kind="warn" label={"Why Ampère's Original Law Fails"}>
        <p>{"Original law: $\\nabla\\times\\mathbf B=\\mu_0\\mathbf J$. Take the divergence of both sides. The divergence of a curl is always zero, so"}</p>
        <F>{"$$0=\\nabla\\cdot(\\nabla\\times\\mathbf B)=\\mu_0\\nabla\\cdot\\mathbf J$$"}</F>
        <p>{"This forces $\\nabla\\cdot\\mathbf J=0$, i.e. $\\partial_t\\rho=0$ everywhere — false for a charging capacitor."}</p>
      </Box>

      <Box kind="thm" label={"Theorem \u2014 Ampère–Maxwell Law"}>
        <F>{"$$\\oint_C\\mathbf B\\cdot d\\mathbf r=\\mu_0I_{\\text{enc}}+\\mu_0\\varepsilon_0\\frac{d}{dt}\\iint_S\\mathbf E\\cdot\\mathbf n\\,dS\\qquad\\Longleftrightarrow\\qquad\\nabla\\times\\mathbf B=\\mu_0\\mathbf J+\\mu_0\\varepsilon_0\\frac{\\partial\\mathbf E}{\\partial t}$$"}</F>
        <p>{"Now the divergence of the right side is $\\mu_0\\big(\\nabla\\cdot\\mathbf J+\\varepsilon_0\\partial_t\\nabla\\cdot\\mathbf E\\big)=\\mu_0\\big(\\nabla\\cdot\\mathbf J+\\partial_t\\rho\\big)$, which is zero exactly by the continuity equation. Maxwell's term makes the system consistent with charge conservation."}</p>
      </Box>

      <Example title={"Magnetic field of a long straight wire"}>
        <p>{"A long straight wire carries steady current $I$. Find $\\mathbf B$ at distance $r$, and evaluate for $I=10$ A, $r=5$ cm."}</p>
        <Solution>
          <p>{"By symmetry $\\mathbf B=B(r)\\,\\hat{\\boldsymbol\\theta}$. For a steady current $\\partial_t\\mathbf E=\\mathbf 0$. Take $C$ a circle of radius $r$:"}</p>
          <F>{"$$B(r)\\cdot2\\pi r=\\mu_0I\\;\\Longrightarrow\\;B(r)=\\frac{\\mu_0I}{2\\pi r}$$"}</F>
          <p>{"Numerically: $B=\\dfrac{4\\pi\\times10^{-7}\\cdot10}{2\\pi\\cdot0.05}=4\\times10^{-5}$ T, about the strength of Earth's magnetic field."}</p>
        </Solution>
      </Example>

      <Example title={"Field inside a wire: checking the differential form"}>
        <p>{"Inside a wire of radius $a$ with uniform current density $J\\mathbf k$, Ampère's law gives $B_\\theta=\\tfrac12\\mu_0Jr$. Verify $\\nabla\\times\\mathbf B=\\mu_0\\mathbf J$."}</p>
        <Solution>
          <p>{"In cylindrical coordinates, a field $B_\\theta(r)\\hat{\\boldsymbol\\theta}$ has curl $\\dfrac1r\\dfrac{d}{dr}\\big(rB_\\theta\\big)\\mathbf k$:"}</p>
          <F>{"$$\\frac1r\\frac{d}{dr}\\Big(\\tfrac12\\mu_0Jr^2\\Big)=\\frac1r\\cdot\\mu_0Jr=\\mu_0J\\quad\\checkmark$$"}</F>
          <p>{"In Cartesian form $\\mathbf B=\\tfrac12\\mu_0J\\langle -y,\\,x,\\,0\\rangle$, whose curl is $\\langle0,0,\\mu_0J\\rangle$, giving the same result."}</p>
        </Solution>
      </Example>

      <Example title={"Displacement current in a charging capacitor"}>
        <p>{"Circular plates of radius $R$ carry charge $Q(t)$, with current $I=dQ/dt$ in the wires. Show the displacement current between the plates equals $I$, and find $B$ at radius $r<R$ in the gap."}</p>
        <Solution>
          <p>{"Between the plates $E=\\dfrac{Q}{\\varepsilon_0\\pi R^2}$, uniform. Through the whole plate area $\\Phi_E=Q/\\varepsilon_0$, so $\\varepsilon_0\\,d\\Phi_E/dt=dQ/dt=I$. \u2713"}</p>
          <p>{"For a circle of radius $r$ in the gap there is no conduction current, only displacement current through area $\\pi r^2$:"}</p>
          <F>{"$$B\\cdot2\\pi r=\\mu_0\\varepsilon_0\\frac{d}{dt}\\Big(E\\,\\pi r^2\\Big)=\\mu_0I\\frac{r^2}{R^2}\\;\\Longrightarrow\\;B=\\frac{\\mu_0I\\,r}{2\\pi R^2}$$"}</F>
          <p>{"A magnetic field circulates in the gap even though no charge crosses it."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §7 ═════════════════════════════ */
function SectionSystem() {
  return (
    <section className="section" id="mx-system">
      <SecHead n={7} title="The Four Equations Together" />
      <p>{"Together with the continuity equation, these four laws describe all classical electromagnetic phenomena."}</p>

      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>{"Law"}</th>
              <th>{"Differential form"}</th>
              <th>{"Integral form"}</th>
              <th>{"Bridge"}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{"Gauss (E)"}</td>
              <td>{"$\\nabla\\cdot\\mathbf E=\\rho/\\varepsilon_0$"}</td>
              <td>{"$\\iint_S\\mathbf E\\cdot d\\mathbf S=Q_{\\text{enc}}/\\varepsilon_0$"}</td>
              <td>{"Divergence"}</td>
            </tr>
            <tr>
              <td>{"Gauss (B)"}</td>
              <td>{"$\\nabla\\cdot\\mathbf B=0$"}</td>
              <td>{"$\\iint_S\\mathbf B\\cdot d\\mathbf S=0$"}</td>
              <td>{"Divergence"}</td>
            </tr>
            <tr>
              <td>{"Faraday"}</td>
              <td>{"$\\nabla\\times\\mathbf E=-\\partial_t\\mathbf B$"}</td>
              <td>{"$\\oint_C\\mathbf E\\cdot d\\mathbf r=-\\dfrac{d\\Phi_B}{dt}$"}</td>
              <td>{"Stokes"}</td>
            </tr>
            <tr>
              <td>{"Ampère–Maxwell"}</td>
              <td>{"$\\nabla\\times\\mathbf B=\\mu_0\\mathbf J+\\mu_0\\varepsilon_0\\partial_t\\mathbf E$"}</td>
              <td>{"$\\oint_C\\mathbf B\\cdot d\\mathbf r=\\mu_0I_{\\text{enc}}+\\mu_0\\varepsilon_0\\dfrac{d\\Phi_E}{dt}$"}</td>
              <td>{"Stokes"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <Box kind="thm" label={"Internal Consistency"}>
        <ul>
          <li><strong>{"Faraday preserves $\\nabla\\cdot\\mathbf B=0$:"}</strong>{" taking the divergence of Faraday's law gives $\\partial_t(\\nabla\\cdot\\mathbf B)=-\\nabla\\cdot(\\nabla\\times\\mathbf E)=0$, so if $\\mathbf B$ is divergence-free once, it stays so."}</li>
          <li><strong>{"Ampère–Maxwell implies charge conservation:"}</strong>{" as shown in §6, its divergence is the continuity equation."}</li>
        </ul>
      </Box>

      <Example title={"Is this pair of fields physically possible?"}>
        <p>{"In empty space ($\\rho=0$, $\\mathbf J=\\mathbf 0$), do $\\mathbf E=\\langle 0,\\,0,\\,x\\rangle$ and $\\mathbf B=\\langle 0,\\,t,\\,0\\rangle$ satisfy all four equations?"}</p>
        <Solution>
          <p>{"$\\nabla\\cdot\\mathbf E=0$ \u2713 and $\\nabla\\cdot\\mathbf B=0$ \u2713."}</p>
          <p>{"Faraday: $\\nabla\\times\\mathbf E=\\langle 0-0,\\;0-1,\\;0\\rangle=\\langle0,-1,0\\rangle$ and $-\\partial_t\\mathbf B=\\langle0,-1,0\\rangle$ \u2713."}</p>
          <p>{"Ampère–Maxwell: $\\nabla\\times\\mathbf B=\\mathbf 0$ (since $B_y=t$ has no spatial dependence) and $\\mu_0\\varepsilon_0\\partial_t\\mathbf E=\\mathbf 0$ \u2713."}</p>
          <p>{"All four hold, so the pair is consistent with Maxwell's equations."}</p>
        </Solution>
      </Example>

      <div className="note">
        {"Energy also obeys a continuity equation. With energy density $u=\\tfrac{\\varepsilon_0}{2}|\\mathbf E|^2+\\tfrac{1}{2\\mu_0}|\\mathbf B|^2$ and Poynting vector $\\mathbf S=\\tfrac{1}{\\mu_0}\\mathbf E\\times\\mathbf B$, Maxwell's equations give Poynting's theorem $\\partial_t u+\\nabla\\cdot\\mathbf S=-\\mathbf J\\cdot\\mathbf E$: field energy changes by flowing out through $\\mathbf S$ or by doing work on charges."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ §8 ═════════════════════════════ */
function SectionWaves() {
  return (
    <section className="section" id="mx-waves">
      <SecHead n={8} title="Electromagnetic Waves" />
      <p>
        {"In empty space the four equations couple $\\mathbf E$ and $\\mathbf B$ so tightly that each one satisfies a wave equation. Here we derive that wave equation and check a plane-wave solution; methods for solving wave equations in general belong to the PDE guide in Calculus & Analytical Geometry."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 Wave Equation in Vacuum"}>
        <p>{"With $\\rho=0$ and $\\mathbf J=\\mathbf 0$, take the curl of Faraday's law and use the vector identity $\\nabla\\times(\\nabla\\times\\mathbf E)=\\nabla(\\nabla\\cdot\\mathbf E)-\\nabla^2\\mathbf E$ from the Laplacian guide:"}</p>
        <F>{"$$\\nabla(\\underbrace{\\nabla\\cdot\\mathbf E}_{=0})-\\nabla^2\\mathbf E=-\\frac{\\partial}{\\partial t}(\\nabla\\times\\mathbf B)=-\\mu_0\\varepsilon_0\\frac{\\partial^2\\mathbf E}{\\partial t^2}$$"}</F>
        <F>{"$$\\boxed{\\nabla^2\\mathbf E=\\mu_0\\varepsilon_0\\frac{\\partial^2\\mathbf E}{\\partial t^2}},\\qquad c=\\frac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$$"}</F>
        <p>{"The same argument starting from the Ampère–Maxwell law gives $\\nabla^2\\mathbf B=\\mu_0\\varepsilon_0\\,\\partial_t^2\\mathbf B$."}</p>
      </Box>

      <Example title={"Computing the speed of light"}>
        <p>{"Evaluate $c=1/\\sqrt{\\mu_0\\varepsilon_0}$."}</p>
        <Solution>
          <F>{"$$\\mu_0\\varepsilon_0=(4\\pi\\times10^{-7})(8.854\\times10^{-12})\\approx1.113\\times10^{-17}\\ \\text{s}^2/\\text{m}^2,\\qquad c\\approx\\frac{1}{3.336\\times10^{-9}}\\approx3.00\\times10^{8}\\ \\text{m/s}$$"}</F>
          <p>{"Two constants measured with capacitors and current-carrying wires predict the speed of light: this is how Maxwell identified light as an electromagnetic wave."}</p>
        </Solution>
      </Example>

      <Example title={"Verifying a plane wave"}>
        <p>{"Show that $\\mathbf E=E_0\\cos(kz-\\omega t)\\,\\mathbf i$ and $\\mathbf B=\\dfrac{E_0}{c}\\cos(kz-\\omega t)\\,\\mathbf j$ satisfy Faraday's law exactly when $\\omega=ck$."}</p>
        <Solution>
          <p>{"Only $\\partial E_x/\\partial z$ is non-zero, so $\\nabla\\times\\mathbf E=\\dfrac{\\partial E_x}{\\partial z}\\mathbf j=-kE_0\\sin(kz-\\omega t)\\,\\mathbf j$."}</p>
          <p>{"And $-\\partial_t\\mathbf B=-\\dfrac{E_0}{c}\\,\\omega\\sin(kz-\\omega t)\\,\\mathbf j$."}</p>
          <p>{"These agree when $k=\\omega/c$. Also $\\nabla\\cdot\\mathbf E=\\partial_xE_x=0$ and $\\nabla\\cdot\\mathbf B=0$, so the wave is transverse: $\\mathbf E\\perp\\mathbf B\\perp$ direction of travel $\\mathbf k$."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ Summary ═════════════════════════════ */
function SectionSummary() {
  const cards = [
    ["Continuity equation", "$\\partial_t\\rho+\\nabla\\cdot\\mathbf J=0$, $\\;\\mathbf J=\\rho\\mathbf v$"],
    ["Gauss's law (E)", "$\\nabla\\cdot\\mathbf E=\\rho/\\varepsilon_0$; $\\;\\iint\\mathbf E\\cdot d\\mathbf S=Q_{\\text{enc}}/\\varepsilon_0$"],
    ["Gauss's law (B)", "$\\nabla\\cdot\\mathbf B=0$; $\\;\\mathbf B=\\nabla\\times\\mathbf A$"],
    ["Faraday's law", "$\\nabla\\times\\mathbf E=-\\partial_t\\mathbf B$; $\\;\\mathcal E=-d\\Phi_B/dt$"],
    ["Ampère–Maxwell law", "$\\nabla\\times\\mathbf B=\\mu_0\\mathbf J+\\mu_0\\varepsilon_0\\partial_t\\mathbf E$"],
    ["Poisson's equation", "$\\mathbf E=-\\nabla\\phi\\Rightarrow\\nabla^2\\phi=-\\rho/\\varepsilon_0$"],
    ["Straight wire", "$B=\\dfrac{\\mu_0I}{2\\pi r}$"],
    ["Charge relaxation", "$\\rho=\\rho_0e^{-\\sigma t/\\varepsilon_0}$"],
    ["Wave equation", "$\\nabla^2\\mathbf E=\\mu_0\\varepsilon_0\\,\\partial_t^2\\mathbf E$, $\\;c=1/\\sqrt{\\mu_0\\varepsilon_0}$"],
    ["Poynting's theorem", "$\\partial_tu+\\nabla\\cdot\\mathbf S=-\\mathbf J\\cdot\\mathbf E$"],
  ];
  return (
    <section className="section" id="mx-summary">
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
        {" every law on this page is a statement about flux or circulation, turned into a statement about divergence or curl by the Divergence Theorem or Stokes' Theorem. The divergence laws (Gauss for E and B, continuity) count sources; the curl laws (Faraday, Ampère–Maxwell) describe how changing fields make each other circulate."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ Topic export ═════════════════════════════ */
// quizUnlocked: false → shows the locked banner (existing .mcq-section-locked CSS)
// lockHint: text shown in that banner
export default function MaxwellContinuityTopic({ quizUnlocked = true, lockHint = "" }) {
  return (
    <div id="maxwell-continuity">
      <div className="opening-note-box">
        <p className="opening-note">
          <strong>{"Maxwell's Equations & the Continuity Equation."}</strong>{" "}
          {"We turn the Divergence Theorem and Stokes' Theorem into the four laws of electromagnetism. Starting from conservation of charge, we derive the continuity equation, then Gauss's laws for $\\mathbf E$ and $\\mathbf B$, Faraday's law and the Ampère–Maxwell law in both integral and differential form, and finish by deriving the electromagnetic wave equation. Prerequisites: divergence, curl, the Divergence Theorem, Stokes' Theorem, and the Laplacian."}
        </p>
      </div>
      <hr className="divider" />
      <SectionFields />
      <hr className="divider" />
      <SectionContinuity />
      <hr className="divider" />
      <SectionGaussE />
      <hr className="divider" />
      <SectionGaussB />
      <hr className="divider" />
      <SectionFaraday />
      <hr className="divider" />
      <SectionAmpere />
      <hr className="divider" />
      <SectionSystem />
      <hr className="divider" />
      <SectionWaves />
      <hr className="divider" />
      <SectionSummary />
      <RealLifeUse>
        Maxwell's equations run the modern world: wireless charging and transformers use Faraday's law, MRI scanners and electric motors rely on Ampère's law, Wi-Fi and 5G antennas are designed by solving the wave equation $\nabla^2\mathbf E = \mu_0\varepsilon_0\,\partial_t^2\mathbf E$, and circuit simulators enforce the continuity equation at every node as Kirchhoff's current law.
      </RealLifeUse>
      <hr className="divider" />
      {quizUnlocked ? (
        <GuideMcqSection
          id="mcq-pt-maxwell"
          badge="Practice"
          title="Maxwell's Equations & the Continuity Equation — Quiz"
          scoreId="score-pt-maxwell"
          section={MAXWELL_QUIZ_KEY}
          questions={MV_PT_MAXWELL_QUIZ}
        />
      ) : (
        <section id="mcq-pt-maxwell" className="mcq-section mcq-section-locked" data-lock-hint={lockHint}>
          <div className="mcq-section-head">
            <span className="mcq-section-badge">Locked</span>
            <span className="mcq-section-title">{"Maxwell's Equations & the Continuity Equation — Quiz"}</span>
          </div>
          <p className="mcq-unlock-hint">{lockHint}</p>
        </section>
      )}
    </div>
  );
}
