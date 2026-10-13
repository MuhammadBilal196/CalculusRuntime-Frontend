// src/pages/multivariableCalculus/ImproperMultipleIntegralsTopic.jsx
// Advanced Integration & Variational Methods · Improper Multiple Integrals & the Gaussian Integral
// Rendered inside AdvancedIntegrationGuide (shares PartialDerivativesGuide.css).

import { GuideMcqSection } from "../../components/GuideMcq";
import { RealLifeUse } from "../calculus/CalcBlocks";
import { MV_AI_IMPROPER_QUIZ } from "../../data/mvAdvancedIntegrationQuizzes";

export const AI_IMPROPER_QUIZ_KEY = "ai-improper";

export const AI_IMPROPER_NAV = [
  { id: "aim-definition", label: "What Makes It Improper" },
  { id: "aim-unbounded-region", label: "Unbounded Regions" },
  { id: "aim-tests", label: "Convergence Tests" },
  { id: "aim-singular", label: "Unbounded Integrands" },
  { id: "aim-fubini", label: "Fubini, Tonelli & a Warning" },
  { id: "aim-gaussian", label: "The Gaussian Integral" },
  { id: "aim-family", label: "The Gaussian Family" },
  { id: "aim-higher", label: "Gaussians in n Dimensions" },
  { id: "aim-summary", label: "Key Formulas" },
  { id: "mcq-ai-improper", label: "Improper Integrals Quiz" },
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
function SectionDefinition() {
  return (
    <section className="section" id="aim-definition">
      <SecHead n={1} title="What Makes a Multiple Integral Improper" />
      <p>
        {"The double and triple integrals in the "}
        <a href="/multiple-integrals/1" style={LINK_STYLE}>{"Multiple Integrals"}</a>
        {" guide were taken over bounded regions of bounded functions. Many of the most important integrals in probability and physics break one of these assumptions: they run over all of $\\mathbb R^2$ or $\\mathbb R^3$, or the integrand blows up at a point. Such integrals are "}
        <strong>{"improper"}</strong>
        {", and they are defined as limits of ordinary integrals."}
      </p>

      <Box kind="def" label={"Definition \u2014 Improper Integral by Exhaustion"}>
        <p>{"Let $D_1\\subset D_2\\subset\\cdots$ be bounded regions that avoid the trouble spots and fill up $D$ (an "}<em>{"exhaustion"}</em>{" of $D$). For $f\\ge0$ define"}</p>
        <F>{"$$\\iint_D f\\,dA=\\lim_{n\\to\\infty}\\iint_{D_n}f\\,dA$$"}</F>
        <p>{"The integral "}<strong>{"converges"}</strong>{" if this limit is finite and "}<strong>{"diverges"}</strong>{" if it is $+\\infty$. For $f\\ge0$ the limit does not depend on which exhaustion is used, so we may pick whatever shape is convenient: squares, disks or balls."}</p>
      </Box>

      <Box kind="warn" label={"Sign-Changing Integrands"}>
        <p>{"If $f$ takes both signs, different exhaustions can give different limits. We call $f$ "}<strong>{"absolutely integrable"}</strong>{" on $D$ when $\\iint_D|f|\\,dA<\\infty$; then every exhaustion gives the same finite value. All the theorems below assume either $f\\ge0$ or absolute integrability."}</p>
      </Box>

      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>{"Type"}</th>
              <th>{"Example"}</th>
              <th>{"Natural exhaustion"}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>{"Unbounded region"}</td><td>{"$\\iint_{\\mathbb R^2}e^{-(x^2+y^2)}\\,dA$"}</td><td>{"Disks $r\\le n$ or squares $[-n,n]^2$"}</td></tr>
            <tr><td>{"Unbounded integrand"}</td><td>{"$\\iint_{r\\le1}r^{-1}\\,dA$"}</td><td>{"Annuli $\\tfrac1n\\le r\\le1$"}</td></tr>
            <tr><td>{"Both"}</td><td>{"$\\iiint_{\\mathbb R^3}\\dfrac{e^{-\\rho}}{\\rho}\\,dV$"}</td><td>{"Shells $\\tfrac1n\\le\\rho\\le n$"}</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ═════════════════════════════ §2 ═════════════════════════════ */
function SectionUnboundedRegion() {
  return (
    <section className="section" id="aim-unbounded-region">
      <SecHead n={2} title="Integrals over Unbounded Regions" />
      <p>{"Two techniques do almost all the work: separating the variables when the integrand factors, and switching to polar or spherical coordinates when it depends only on the distance from the origin."}</p>

      <Example title={"A product over a quarter-plane"}>
        <p>{"Evaluate $\\displaystyle\\iint_{[1,\\infty)^2}\\frac{dA}{x^2y^2}$."}</p>
        <Solution>
          <p>{"The integrand is positive and factors, so the integral is the product of two one-variable improper integrals:"}</p>
          <F>{"$$\\int_1^\\infty\\frac{dx}{x^2}\\cdot\\int_1^\\infty\\frac{dy}{y^2}=1\\cdot1=1$$"}</F>
        </Solution>
      </Example>

      <Example title={"An exponential over the first quadrant"}>
        <p>{"Evaluate $\\displaystyle\\iint_{x\\ge0,\\,y\\ge0}e^{-(2x+3y)}\\,dA$."}</p>
        <Solution>
          <F>{"$$\\int_0^\\infty e^{-2x}dx\\cdot\\int_0^\\infty e^{-3y}dy=\\frac12\\cdot\\frac13=\\frac16$$"}</F>
          <p>{"In probability this says that two independent exponential random variables with rates $2$ and $3$ have a joint density $6e^{-(2x+3y)}$ that integrates to $1$."}</p>
        </Solution>
      </Example>

      <Example title={"A radial integrand over the whole plane"}>
        <p>{"Evaluate $\\displaystyle\\iint_{\\mathbb R^2}\\frac{dA}{(1+x^2+y^2)^2}$."}</p>
        <Solution>
          <p>{"Exhaust by disks $r\\le R$ and use $dA=r\\,dr\\,d\\theta$:"}</p>
          <F>{"$$\\int_0^{2\\pi}\\!\\!\\int_0^R\\frac{r\\,dr\\,d\\theta}{(1+r^2)^2}=2\\pi\\Big[-\\frac{1}{2(1+r^2)}\\Big]_0^R=\\pi\\Big(1-\\frac{1}{1+R^2}\\Big)\\xrightarrow{R\\to\\infty}\\pi$$"}</F>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §3 ═════════════════════════════ */
function SectionTests() {
  return (
    <section className="section" id="aim-tests">
      <SecHead n={3} title="Convergence Tests" />
      <p>{"Often we only need to know whether an integral is finite. As in one variable, we compare against a family of model integrals: powers of the distance $r=|\\mathbf x|$."}</p>

      <Box kind="thm" label={"Theorem \u2014 The p-Test in $\\mathbb R^2$ and $\\mathbb R^3$"}>
        <p>{"In $\\mathbb R^n$, polar or spherical coordinates give a factor $r^{n-1}$, so"}</p>
        <F>{"$$\\int_{|\\mathbf x|\\ge1}\\frac{dV}{|\\mathbf x|^p}<\\infty\\iff p>n,\\qquad \\int_{0<|\\mathbf x|\\le1}\\frac{dV}{|\\mathbf x|^p}<\\infty\\iff p<n$$"}</F>
        <p>{"In the plane ($n=2$) the threshold is $p=2$; in space ($n=3$) it is $p=3$. At $p=n$ both integrals diverge (logarithmically)."}</p>
      </Box>

      <Box kind="thm" label={"Theorem \u2014 Comparison Test"}>
        <p>{"If $0\\le f\\le g$ on $D$, then $\\iint_Dg<\\infty$ implies $\\iint_Df<\\infty$, and $\\iint_Df=\\infty$ implies $\\iint_Dg=\\infty$."}</p>
      </Box>

      <Example title={"Deciding convergence by comparison"}>
        <p>{"Does $\\displaystyle\\iint_{\\mathbb R^2}\\frac{dA}{1+x^4+y^4}$ converge?"}</p>
        <Solution>
          <p>{"For any $(x,y)$, $x^4+y^4\\ge\\tfrac12(x^2+y^2)^2=\\tfrac12r^4$ (by $2(a^2+b^2)\\ge(a+b)^2$ with $a=x^2$, $b=y^2$). So for $r\\ge1$:"}</p>
          <F>{"$$0<\\frac{1}{1+x^4+y^4}\\le\\frac{2}{r^4}$$"}</F>
          <p>{"With $p=4>2$ the integral over $r\\ge1$ converges, and the disk $r\\le1$ contributes a finite amount. So the whole integral converges."}</p>
        </Solution>
      </Example>

      <Example title={"An exact value at a convergent power"}>
        <p>{"Evaluate $\\displaystyle\\iint_{\\mathbb R^2}\\frac{dA}{(1+x^2+y^2)^{3/2}}$."}</p>
        <Solution>
          <p>{"For large $r$ the integrand behaves like $r^{-3}$, so it converges ($3>2$). Exactly:"}</p>
          <F>{"$$2\\pi\\int_0^\\infty\\frac{r\\,dr}{(1+r^2)^{3/2}}=2\\pi\\Big[-\\frac{1}{\\sqrt{1+r^2}}\\Big]_0^\\infty=2\\pi$$"}</F>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §4 ═════════════════════════════ */
function SectionSingular() {
  return (
    <section className="section" id="aim-singular">
      <SecHead n={4} title="Unbounded Integrands" />
      <p>{"When the integrand blows up at a point, cut out a small disk or ball around it and let the radius shrink to zero. The p-test from §3 says a singularity like $1/r^p$ is integrable exactly when $p$ is less than the dimension."}</p>

      <Example title={"An integrable singularity in the plane"}>
        <p>{"Evaluate $\\displaystyle\\iint_{D}\\frac{dA}{\\sqrt{x^2+y^2}}$ over the unit disk $D$."}</p>
        <Solution>
          <F>{"$$\\lim_{\\varepsilon\\to0^+}\\int_0^{2\\pi}\\!\\!\\int_\\varepsilon^1\\frac1r\\,r\\,dr\\,d\\theta=\\lim_{\\varepsilon\\to0^+}2\\pi(1-\\varepsilon)=2\\pi$$"}</F>
          <p>{"Here $p=1<2$: the area element $r\\,dr$ cancels the singularity completely."}</p>
        </Solution>
      </Example>

      <Example title={"A divergent borderline case"}>
        <p>{"Show that $\\displaystyle\\iint_D\\frac{dA}{x^2+y^2}$ diverges over the unit disk."}</p>
        <Solution>
          <F>{"$$\\int_0^{2\\pi}\\!\\!\\int_\\varepsilon^1\\frac{r\\,dr\\,d\\theta}{r^2}=2\\pi\\ln\\frac1\\varepsilon\\xrightarrow{\\varepsilon\\to0^+}\\infty$$"}</F>
          <p>{"This is the borderline $p=n=2$, which always diverges."}</p>
        </Solution>
      </Example>

      <Example title={"A Coulomb-type singularity in space"}>
        <p>{"Evaluate $\\displaystyle\\iiint_B\\frac{dV}{x^2+y^2+z^2}$ over the unit ball $B$."}</p>
        <Solution>
          <p>{"In spherical coordinates, $dV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$:"}</p>
          <F>{"$$\\int_0^{2\\pi}\\!\\!\\int_0^{\\pi}\\!\\!\\int_0^1\\frac{\\rho^2\\sin\\varphi}{\\rho^2}\\,d\\rho\\,d\\varphi\\,d\\theta=2\\pi\\cdot2\\cdot1=4\\pi$$"}</F>
          <p>{"Here $p=2<3$. The same integrand in the plane ($p=n=2$) diverged: the extra dimension supplies an extra power of $\\rho$."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §5 ═════════════════════════════ */
function SectionFubini() {
  return (
    <section className="section" id="aim-fubini">
      <SecHead n={5} title="Fubini, Tonelli and a Warning" />
      <p>{"For ordinary integrals, Fubini's theorem lets us compute a double integral as an iterated integral in either order. For improper integrals this needs a hypothesis."}</p>

      <Box kind="thm" label={"Theorem \u2014 Tonelli and Fubini"}>
        <ul>
          <li><strong>{"Tonelli:"}</strong>{" if $f\\ge0$, then $\\iint f\\,dA=\\int\\!\\big(\\int f\\,dy\\big)dx=\\int\\!\\big(\\int f\\,dx\\big)dy$, whether the common value is finite or $+\\infty$."}</li>
          <li><strong>{"Fubini:"}</strong>{" if $\\iint|f|\\,dA<\\infty$, the same equalities hold for sign-changing $f$."}</li>
        </ul>
        <p>{"In practice: check absolute convergence (using Tonelli on $|f|$), then integrate in whichever order is easier."}</p>
      </Box>

      <Example title={"Iterated integrals that disagree"}>
        <p>{"Let $f(x,y)=\\dfrac{x^2-y^2}{(x^2+y^2)^2}$ on $(0,1]^2$. Compute both iterated integrals."}</p>
        <Solution>
          <p>{"Since $\\dfrac{\\partial}{\\partial y}\\dfrac{y}{x^2+y^2}=\\dfrac{x^2-y^2}{(x^2+y^2)^2}$:"}</p>
          <F>{"$$\\int_0^1f\\,dy=\\Big[\\frac{y}{x^2+y^2}\\Big]_0^1=\\frac{1}{1+x^2},\\qquad \\int_0^1\\!\\!\\int_0^1f\\,dy\\,dx=\\int_0^1\\frac{dx}{1+x^2}=\\frac\\pi4$$"}</F>
          <p>{"Because $f(y,x)=-f(x,y)$, the other order gives $-\\dfrac\\pi4$."}</p>
          <p>{"No mistake was made: in polar form $|f|=\\dfrac{|\\cos2\\theta|}{r^2}$, which is not integrable near the origin ($p=2$). Fubini's hypothesis fails, so the orders are allowed to disagree."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §6 ═════════════════════════════ */
function SectionGaussian() {
  return (
    <section className="section" id="aim-gaussian">
      <SecHead n={6} title="The Gaussian Integral" />
      <p>
        {"The function $e^{-x^2}$ has no elementary antiderivative, yet its integral over the whole line has an exact value. The proof is the most famous use of a double integral: square the integral, turn it into an integral over the plane, and switch to polar coordinates."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 The Gaussian Integral"}>
        <F>{"$$\\boxed{\\int_{-\\infty}^{\\infty}e^{-x^2}\\,dx=\\sqrt\\pi}$$"}</F>
      </Box>

      <Box kind="def" label={"Proof"}>
        <p>{"Let $I=\\int_{-\\infty}^{\\infty}e^{-x^2}dx$, which converges by comparison with $e^{-|x|+1}$. The integrand $e^{-x^2}e^{-y^2}$ is positive, so by Tonelli"}</p>
        <F>{"$$I^2=\\int_{-\\infty}^{\\infty}e^{-x^2}dx\\int_{-\\infty}^{\\infty}e^{-y^2}dy=\\iint_{\\mathbb R^2}e^{-(x^2+y^2)}\\,dA$$"}</F>
        <p>{"Exhaust the plane by disks and use polar coordinates. The Jacobian $r$ is exactly what makes the inner integral elementary:"}</p>
        <F>{"$$I^2=\\int_0^{2\\pi}\\!\\!\\int_0^\\infty e^{-r^2}\\,r\\,dr\\,d\\theta=2\\pi\\Big[-\\tfrac12e^{-r^2}\\Big]_0^\\infty=2\\pi\\cdot\\tfrac12=\\pi$$"}</F>
        <p>{"Since $I>0$, $I=\\sqrt\\pi$. \u220e"}</p>
      </Box>

      <div className="note">
        {"Why squares and disks give the same answer: for $f\\ge0$ the improper integral is independent of the exhaustion. Concretely, the disk of radius $R$ sits inside the square $[-R,R]^2$, which sits inside the disk of radius $R\\sqrt2$. Both disk integrals tend to $\\pi$, so the square integrals $\\big(\\int_{-R}^Re^{-x^2}dx\\big)^2$ are squeezed to $\\pi$ as well."}
      </div>

      <Example title={"Half of the Gaussian"}>
        <p>{"Evaluate $\\displaystyle\\int_0^\\infty e^{-x^2}dx$ and $\\displaystyle\\iint_{x\\ge0,\\,y\\ge0}e^{-(x^2+y^2)}dA$."}</p>
        <Solution>
          <p>{"$e^{-x^2}$ is even, so $\\int_0^\\infty e^{-x^2}dx=\\tfrac{\\sqrt\\pi}{2}$."}</p>
          <p>{"The first quadrant is a quarter of the plane: $\\tfrac14\\pi$. Check: $\\big(\\tfrac{\\sqrt\\pi}{2}\\big)^2=\\tfrac\\pi4$. \u2713"}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §7 ═════════════════════════════ */
function SectionFamily() {
  return (
    <section className="section" id="aim-family">
      <SecHead n={7} title="The Gaussian Family" />
      <p>{"Substitutions, completing the square and integration by parts turn the single value $\\sqrt\\pi$ into a whole table of integrals."}</p>

      <Box kind="thm" label={"Theorem \u2014 Standard Gaussian Integrals ($a>0$)"}>
        <F>{"$$\\int_{-\\infty}^{\\infty}e^{-ax^2}dx=\\sqrt{\\frac\\pi a},\\qquad \\int_{-\\infty}^{\\infty}e^{-ax^2+bx}dx=\\sqrt{\\frac\\pi a}\\,e^{b^2/(4a)},\\qquad \\int_{-\\infty}^{\\infty}x^2e^{-ax^2}dx=\\frac{1}{2a}\\sqrt{\\frac\\pi a}$$"}</F>
        <p>{"Odd moments vanish: $\\int x^{2k+1}e^{-ax^2}dx=0$."}</p>
      </Box>

      <Example title={"Scaling"}>
        <p>{"Evaluate $\\displaystyle\\int_{-\\infty}^{\\infty}e^{-3x^2}dx$."}</p>
        <Solution>
          <p>{"Substitute $u=\\sqrt3\\,x$, $dx=du/\\sqrt3$: the integral is $\\dfrac{1}{\\sqrt3}\\sqrt\\pi=\\sqrt{\\pi/3}$."}</p>
        </Solution>
      </Example>

      <Example title={"Completing the square"}>
        <p>{"Evaluate $\\displaystyle\\int_{-\\infty}^{\\infty}e^{-x^2+2x}dx$."}</p>
        <Solution>
          <p>{"$-x^2+2x=-(x-1)^2+1$. With $u=x-1$:"}</p>
          <F>{"$$\\int_{-\\infty}^{\\infty}e^{-(x-1)^2}e^{1}dx=e\\sqrt\\pi$$"}</F>
          <p>{"This agrees with the formula: $a=1$, $b=2$ gives $\\sqrt\\pi\\,e^{4/4}$."}</p>
        </Solution>
      </Example>

      <Example title={"The second moment"}>
        <p>{"Evaluate $\\displaystyle\\int_{-\\infty}^{\\infty}x^2e^{-x^2}dx$."}</p>
        <Solution>
          <p>{"Integrate by parts with $u=x$ and $dv=xe^{-x^2}dx$, so $v=-\\tfrac12e^{-x^2}$:"}</p>
          <F>{"$$\\int x^2e^{-x^2}dx=\\Big[-\\tfrac x2e^{-x^2}\\Big]_{-\\infty}^{\\infty}+\\frac12\\int e^{-x^2}dx=0+\\frac{\\sqrt\\pi}{2}$$"}</F>
        </Solution>
      </Example>

      <Example title={"Normalizing the normal distribution"}>
        <p>{"Show that $\\varphi(x)=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x-\\mu)^2/(2\\sigma^2)}$ integrates to $1$, and that its variance is $\\sigma^2$."}</p>
        <Solution>
          <p>{"With $a=\\dfrac{1}{2\\sigma^2}$ and a shift by $\\mu$: $\\int e^{-a(x-\\mu)^2}dx=\\sqrt{\\pi/a}=\\sigma\\sqrt{2\\pi}$, which cancels the prefactor. \u2713"}</p>
          <p>{"Variance: $\\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\int(x-\\mu)^2e^{-a(x-\\mu)^2}dx=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\cdot\\dfrac{1}{2a}\\sqrt{\\dfrac\\pi a}=\\dfrac{1}{\\sigma\\sqrt{2\\pi}}\\cdot\\sigma^2\\cdot\\sigma\\sqrt{2\\pi}=\\sigma^2$. \u2713"}</p>
        </Solution>
      </Example>

      <Example title={"A value of the Gamma function"}>
        <p>{"With $\\Gamma(s)=\\int_0^\\infty t^{s-1}e^{-t}dt$, show $\\Gamma\\big(\\tfrac12\\big)=\\sqrt\\pi$."}</p>
        <Solution>
          <p>{"Substitute $t=x^2$, $dt=2x\\,dx$:"}</p>
          <F>{"$$\\Gamma\\big(\\tfrac12\\big)=\\int_0^\\infty\\frac{e^{-x^2}}{x}\\,2x\\,dx=2\\int_0^\\infty e^{-x^2}dx=\\sqrt\\pi$$"}</F>
          <p>{"The Gamma function itself is studied in the Calculus & Analytical Geometry course; here it appears only as a consequence of the Gaussian integral."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §8 ═════════════════════════════ */
function SectionHigher() {
  return (
    <section className="section" id="aim-higher">
      <SecHead n={8} title="Gaussians in Higher Dimensions" />
      <p>{"Because $e^{-|\\mathbf x|^2}=e^{-x_1^2}\\cdots e^{-x_n^2}$ factors, the Gaussian integral in $n$ dimensions is a product of one-dimensional ones. Comparing with spherical coordinates then produces geometric facts for free."}</p>

      <Box kind="thm" label={"Theorem \u2014 Gaussian Integral in $\\mathbb R^n$"}>
        <F>{"$$\\int_{\\mathbb R^n}e^{-|\\mathbf x|^2}\\,dV=\\pi^{n/2},\\qquad \\int_{\\mathbb R^n}e^{-\\mathbf x^{T}A\\mathbf x}\\,dV=\\frac{\\pi^{n/2}}{\\sqrt{\\det A}}$$"}</F>
        <p>{"The second formula holds for any symmetric positive definite matrix $A$: diagonalize $A$ with a rotation (Jacobian $1$) and scale each axis."}</p>
      </Box>

      <Example title={"The three-dimensional Gaussian two ways"}>
        <p>{"Evaluate $\\displaystyle\\iiint_{\\mathbb R^3}e^{-(x^2+y^2+z^2)}dV$ by factoring and by spherical coordinates."}</p>
        <Solution>
          <p><strong>{"Factoring:"}</strong>{" $(\\sqrt\\pi)^3=\\pi^{3/2}$."}</p>
          <p><strong>{"Spherical:"}</strong>{" $4\\pi\\int_0^\\infty\\rho^2e^{-\\rho^2}d\\rho$. By §7 with $a=1$, $\\int_{-\\infty}^\\infty\\rho^2e^{-\\rho^2}d\\rho=\\tfrac{\\sqrt\\pi}{2}$, so the half-line integral is $\\tfrac{\\sqrt\\pi}{4}$ and the total is $4\\pi\\cdot\\tfrac{\\sqrt\\pi}{4}=\\pi^{3/2}$. \u2713"}</p>
        </Solution>
      </Example>

      <Example title={"An elliptical Gaussian"}>
        <p>{"Evaluate $\\displaystyle\\iint_{\\mathbb R^2}e^{-(x^2+4y^2)}dA$."}</p>
        <Solution>
          <p>{"It factors: $\\sqrt\\pi\\cdot\\sqrt{\\pi/4}=\\tfrac\\pi2$. With the matrix formula, $A=\\begin{pmatrix}1&0\\\\0&4\\end{pmatrix}$ and $\\pi/\\sqrt{\\det A}=\\pi/2$. \u2713"}</p>
        </Solution>
      </Example>

      <Example title={"A Gaussian with a cross term"}>
        <p>{"Evaluate $\\displaystyle\\iint_{\\mathbb R^2}e^{-(2x^2+2xy+2y^2)}dA$."}</p>
        <Solution>
          <p>{"Write the exponent as $\\mathbf x^TA\\mathbf x$ with $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$, which is positive definite ($\\det A=3>0$, trace $4>0$). So the integral is $\\dfrac{\\pi}{\\sqrt3}$."}</p>
        </Solution>
      </Example>

      <Example title={"Surface area of the unit sphere from a Gaussian"}>
        <p>{"Let $\\omega_{n-1}$ be the surface area of the unit sphere in $\\mathbb R^n$. Use $\\int_{\\mathbb R^n}e^{-|\\mathbf x|^2}dV=\\pi^{n/2}$ to find $\\omega_{n-1}$, and check $n=3$."}</p>
        <Solution>
          <p>{"In spherical coordinates $dV=r^{n-1}\\,dr\\,dS$, so"}</p>
          <F>{"$$\\pi^{n/2}=\\omega_{n-1}\\int_0^\\infty r^{n-1}e^{-r^2}dr=\\omega_{n-1}\\cdot\\tfrac12\\Gamma\\big(\\tfrac n2\\big)\\;\\Longrightarrow\\;\\omega_{n-1}=\\frac{2\\pi^{n/2}}{\\Gamma(n/2)}$$"}</F>
          <p>{"For $n=3$: $\\Gamma(\\tfrac32)=\\tfrac12\\Gamma(\\tfrac12)=\\tfrac{\\sqrt\\pi}{2}$, so $\\omega_2=\\dfrac{2\\pi^{3/2}}{\\sqrt\\pi/2}=4\\pi$, the familiar area of the unit sphere. \u2713"}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ Summary ═════════════════════════════ */
function SectionSummary() {
  const cards = [
    ["Exhaustion", "$\\iint_Df=\\lim_n\\iint_{D_n}f$ for $D_n\\uparrow D$"],
    ["p-test, far away", "$\\int_{|\\mathbf x|\\ge1}|\\mathbf x|^{-p}<\\infty\\iff p>n$"],
    ["p-test, near 0", "$\\int_{|\\mathbf x|\\le1}|\\mathbf x|^{-p}<\\infty\\iff p<n$"],
    ["Tonelli / Fubini", "Any order if $f\\ge0$ or $\\iint|f|<\\infty$"],
    ["Gaussian integral", "$\\int_{-\\infty}^{\\infty}e^{-x^2}dx=\\sqrt\\pi$"],
    ["Scaled Gaussian", "$\\int e^{-ax^2}dx=\\sqrt{\\pi/a}$"],
    ["Shifted Gaussian", "$\\int e^{-ax^2+bx}dx=\\sqrt{\\pi/a}\\,e^{b^2/(4a)}$"],
    ["Second moment", "$\\int x^2e^{-ax^2}dx=\\dfrac{1}{2a}\\sqrt{\\pi/a}$"],
    ["n dimensions", "$\\int_{\\mathbb R^n}e^{-\\mathbf x^TA\\mathbf x}dV=\\pi^{n/2}/\\sqrt{\\det A}$"],
    ["Sphere area", "$\\omega_{n-1}=2\\pi^{n/2}/\\Gamma(n/2)$"],
  ];
  return (
    <section className="section" id="aim-summary">
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
        {" an improper integral is a limit of ordinary integrals, and for non-negative integrands the shape of the approximating regions does not matter. That freedom is exactly what lets us trade a square for a disk and evaluate $\\int e^{-x^2}dx$ exactly."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ Topic export ═════════════════════════════ */
export default function ImproperMultipleIntegralsTopic() {
  return (
    <div id="improper-multiple-integrals">
      <div className="opening-note-box">
        <p className="opening-note">
          <strong>{"Improper Multiple Integrals & the Gaussian Integral."}</strong>{" "}
          {"We extend double and triple integrals to unbounded regions and unbounded integrands, using exhaustions, the p-test and comparison. We see when the order of integration may be swapped and when it may not. Then we evaluate $\\int_{-\\infty}^{\\infty}e^{-x^2}dx=\\sqrt\\pi$ with a double integral in polar coordinates, and build the whole Gaussian family from it, up to Gaussians in $n$ dimensions. Prerequisites: double and triple integrals, polar and spherical coordinates, one-variable improper integrals."}
        </p>
      </div>
      <hr className="divider" />
      <SectionDefinition />
      <hr className="divider" />
      <SectionUnboundedRegion />
      <hr className="divider" />
      <SectionTests />
      <hr className="divider" />
      <SectionSingular />
      <hr className="divider" />
      <SectionFubini />
      <hr className="divider" />
      <SectionGaussian />
      <hr className="divider" />
      <SectionFamily />
      <hr className="divider" />
      <SectionHigher />
      <hr className="divider" />
      <SectionSummary />
      <RealLifeUse>
        {"The Gaussian integral sits under the bell curve: every z-table, confidence interval and machine-learning model with Gaussian noise relies on $\\int e^{-x^2}dx=\\sqrt\\pi$. Image-blurring filters, the heat kernel in diffusion models, and quantum-mechanical ground states are Gaussians too, and improper multiple integrals compute the total charge, mass or probability spread over all of space."}
      </RealLifeUse>
      <hr className="divider" />
      <GuideMcqSection
        id="mcq-ai-improper"
        badge="Practice"
        title="Improper Multiple Integrals & the Gaussian Integral — Quiz"
        scoreId="score-ai-improper"
        section={AI_IMPROPER_QUIZ_KEY}
        questions={MV_AI_IMPROPER_QUIZ}
      />
    </div>
  );
}
