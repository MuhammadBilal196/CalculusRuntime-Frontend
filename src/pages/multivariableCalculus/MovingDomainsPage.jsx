import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { MD_COAREA_QUIZ } from "../../data/mvMovingDomainsQuizzes";
import ReynoldsTransportTopic from "./ReynoldsTransportTopic";
import {
  getQuizAttemptPercent,
  guideQuizId,
  SECTION_QUIZ_PASS_PERCENT,
} from "../../data/sectionQuizGates";
import "./PartialDerivativesGuide.css";
import "./GuidePart.css";

/**
 * Integration on Moving Domains — module page (Multivariable Calculus).
 * Topic 1: Coarea Formula and Level-Set Integration  (quiz key "md-coarea")
 * Topic 2: Reynolds Transport Theorem                 (quiz key "md-reynolds"; theory always open,
 *          quiz unlocks after the Topic 1 quiz is passed at 80%)
 */

const T = String.raw;
const SECTION_ID = "moving-domains";
const PAGE_PATH = "/multivariable-calculus/moving-domains";
const TOPIC1_QUIZ_KEY = "md-coarea";

function Fml({ children }) {
  return <div className="fml">{children}</div>;
}

function Divider() {
  return <hr className="divider" />;
}

/* ─────────────────────────────── Chrome ─────────────────────────────── */

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">Integration on Moving Domains</div>
      </div>
      <div className="sb-group">Coarea Formula</div>
      <a className="sb-link" href="#md-objectives">Objectives &amp; Prerequisites</a>
      <a className="sb-link" href="#md-levelsets">Level Sets &amp; Gradient Spacing</a>
      <a className="sb-link" href="#md-formula">The Coarea Formula</a>
      <a className="sb-link" href="#md-derivation">Derivation Outline</a>
      <a className="sb-link" href="#md-sublevel">Sublevel Sets &amp; Their Rate of Change</a>
      <a className="sb-link" href="#md-catalogue">Level-Set Catalogue</a>
      <a className="sb-link" href="#md-examples">Worked Examples</a>
      <a className="sb-link" href="#md-mistakes">Limitations &amp; Mistakes</a>
      <a className="sb-link" href="#mcq-md-coarea"><span className="sn">✎</span>Coarea Formula Quiz</a>
      <div className="sb-group">Reynolds Transport</div>
      <a className="sb-link" href="#md-reynolds">Reynolds Transport Theorem</a>
      <a className="sb-link" href="#md2-leibniz">Moving Endpoints in 1D</a>
      <a className="sb-link" href="#md2-flow">Moving Regions &amp; Expansion</a>
      <a className="sb-link" href="#md2-theorem">The Transport Theorem</a>
      <a className="sb-link" href="#md2-control">Fixed vs Moving Control Volumes</a>
      <a className="sb-link" href="#md2-examples">Worked Examples</a>
      <a className="sb-link" href="#md2-mistakes">Limitations &amp; Mistakes</a>
      <a className="sb-link" href="#mcq-md-reynolds"><span className="sn">✎</span>Reynolds Transport Quiz</a>
    </nav>
  );
}

function Header() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus · Additional Depth</div>
      <h1 className="ch-title">Integration on Moving Domains</h1>
      <p className="ch-sub">
        Coarea Formula &amp; Level-Set Integration · Reynolds Transport Theorem
      </p>
    </header>
  );
}

function TableOfContents() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents</div>
      <div className="toc-grid">
        <a className="toc-a" href="#md-objectives"><span className="tn">1.0</span>Objectives &amp; Prerequisites</a>
        <a className="toc-a" href="#md-levelsets"><span className="tn">1.1</span>Level Sets &amp; Gradient Spacing</a>
        <a className="toc-a" href="#md-formula"><span className="tn">1.2</span>The Coarea Formula</a>
        <a className="toc-a" href="#md-derivation"><span className="tn">1.3</span>Derivation Outline</a>
        <a className="toc-a" href="#md-sublevel"><span className="tn">1.4</span>Sublevel Sets &amp; Their Rate of Change</a>
        <a className="toc-a" href="#md-catalogue"><span className="tn">1.5</span>Level-Set Catalogue</a>
        <a className="toc-a" href="#md-examples"><span className="tn">1.6</span>Worked Examples</a>
        <a className="toc-a" href="#md-mistakes"><span className="tn">1.7</span>Limitations &amp; Common Mistakes</a>
        <a className="toc-a" href="#mcq-md-coarea"><span className="tn">✎</span>Coarea Formula Quiz (20)</a>
        <a className="toc-a" href="#md-reynolds"><span className="tn">2</span>Reynolds Transport Theorem</a>
      </div>
    </nav>
  );
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>How this module works:</strong>{" "}
        {"This module has two topics. Read Coarea Formula and Level-Set Integration and pass its 20-question quiz with at least 80%. You can read Reynolds Transport Theorem at any time, but its quiz unlocks only after you pass the first one. The first topic slices a region along the level sets of a function; the second lets the region itself move and asks how integrals over it change."}
      </p>
    </div>
  );
}

/* ─────────────────────── Topic 1: Coarea Formula ─────────────────────── */

function TopicOneIntro() {
  return (
    <section className="section" id="md-objectives">
      <div className="sec-badge">Coarea Formula · Start here</div>
      <h2 className="sec-title">Coarea Formula and Level-Set Integration</h2>
      <p>
        {T`Fubini's theorem slices a region into vertical lines; polar coordinates slice it into circles. The `}
        <strong>coarea formula</strong>
        {T` slices it into the level sets $\{u=t\}$ of `}
        <em>any</em>
        {T` smooth function $u$ with nonvanishing gradient. The price is a weight: level curves are packed tightly where $u$ changes fast and spread out where it changes slowly, and the factor $|\nabla u|$ accounts for exactly that.`}
      </p>

      <div className="box def">
        <div className="box-lbl">Learning objectives</div>
        <p>{"After this topic you should be able to:"}</p>
        <ul>
          <li>{T`explain why the spacing between level sets $\{u=t\}$ and $\{u=t+dt\}$ is $dt/|\nabla u|$;`}</li>
          <li>{T`state the scalar coarea formula in both its weighted and unweighted forms, with the hypotheses each needs;`}</li>
          <li>{T`recover Fubini's theorem, polar and spherical coordinates as special cases;`}</li>
          <li>{T`compute rates of change of areas and integrals over sublevel sets $\{u<t\}$;`}</li>
          <li>{T`use level-set integration to find the distribution of a function of a random point;`}</li>
          <li>{T`recognise when the formula fails because $\nabla u$ vanishes.`}</li>
        </ul>
      </div>

      <div className="box tip">
        <div className="box-lbl">Prerequisites</div>
        <ul>
          <li>
            {T`Gradients, level curves and the fact that $\nabla u$ is normal to level sets — `}
            <Link to="/partial-derivatives/2">Partial Derivatives</Link>.
          </li>
          <li>
            {T`Double integrals, Fubini's theorem and polar coordinates — `}
            <Link to="/multiple-integrals/1">Multiple Integrals</Link>.
          </li>
          <li>
            {T`Change of variables and the Jacobian determinant — `}
            <Link to="/coordinate-transformations/1">Jacobians &amp; Change of Variables</Link>.
          </li>
          <li>
            {T`The Implicit Function Theorem (level sets are smooth curves where $\nabla u\neq\mathbf 0$) — `}
            <Link to="/vector-fields-approximation">Vector Fields &amp; Approximation Theory</Link>.
          </li>
          <li>
            {T`Line integrals $\int_C f\,ds$ with respect to arc length — `}
            <Link to="/vector-calculus/1">Vector Calculus</Link>.
          </li>
        </ul>
      </div>

      <div className="box warn">
        <div className="box-lbl">Standing assumptions</div>
        {T`Throughout, $\Omega\subseteq\mathbb R^2$ is a bounded open region whose boundary consists of finitely many smooth curves, $u:\Omega\to\mathbb R$ is $C^1$, and $f,g:\Omega\to\mathbb R$ are continuous and bounded. We write $ds$ for arc length along a level curve. The same statements hold in $\mathbb R^3$ (and $\mathbb R^n$) with $ds$ replaced by surface area $dS$. We deliberately stay in this smooth setting: no measure theory is needed, and every integral below is an ordinary Riemann integral.`}
      </div>
    </section>
  );
}

function SectionLevelSets() {
  return (
    <section className="section" id="md-levelsets">
      <div className="sec-badge">Section 1.1</div>
      <h2 className="sec-title">Level Sets and Gradient Spacing</h2>
      <p>
        {T`For each value $t$, the `}
        <strong>level set</strong>
        {T` $\{u=t\}=\{\mathbf x\in\Omega:u(\mathbf x)=t\}$ is where $u$ takes the value $t$, and the `}
        <strong>sublevel set</strong>
        {T` $\{u<t\}$ is the part of $\Omega$ where $u$ is smaller.`}
      </p>

      <div className="box thm">
        <div className="box-lbl">Fact — Level sets near regular points</div>
        {T`If $\nabla u(\mathbf p)\neq\mathbf 0$, the Implicit Function Theorem says that near $\mathbf p$ the level set through $\mathbf p$ is a $C^1$ curve. The gradient is perpendicular to it, and
        $$\mathbf n=\frac{\nabla u}{|\nabla u|}$$
        is the unit normal pointing towards larger values of $u$.`}
      </div>

      <h3 className="subsec">How far apart are two nearby level curves?</h3>
      <p>
        {T`Start on $\{u=t\}$ and step a small distance $h$ along $\mathbf n$. By the linear approximation,`}
      </p>
      <Fml>{T`$$u(\mathbf x+h\,\mathbf n)\approx u(\mathbf x)+h\,\nabla u\cdot\mathbf n=t+h\,|\nabla u|.$$`}</Fml>
      <p>
        {T`To reach the level $t+dt$ we need $h|\nabla u|=dt$, so the `}
        <strong>normal spacing</strong>
        {T` between the two level curves is`}
      </p>
      <Fml>{T`$$h\approx\frac{dt}{|\nabla u(\mathbf x)|}.$$`}</Fml>
      <p>
        {T`The thin strip between $\{u=t\}$ and $\{u=t+dt\}$ therefore has local width $dt/|\nabla u|$. A piece of it of length $ds$ has area approximately $ds\,dt/|\nabla u|$. That single picture is the whole coarea formula.`}
      </p>

      <div className="note">
        {T`Think of a contour map. Where the contour lines crowd together the slope $|\nabla u|$ is large and each strip is thin; where they spread out the slope is small and each strip is wide. Integrating over contour lines without the $1/|\nabla u|$ correction would overweight the steep parts.`}
      </div>
    </section>
  );
}

function SectionFormula() {
  return (
    <section className="section" id="md-formula">
      <div className="sec-badge">Section 1.2</div>
      <h2 className="sec-title">The Coarea Formula</h2>

      <div className="box thm">
        <div className="box-lbl">Theorem — Scalar coarea formula (weighted form)</div>
        {T`Let $u\in C^1(\Omega)$ and suppose $\nabla u\neq\mathbf 0$ on $\Omega$, except possibly at finitely many points. For every continuous bounded $f$,
        $$\iint_\Omega f\,|\nabla u|\;dA=\int_{-\infty}^{\infty}\Bigl(\int_{\{u=t\}\cap\Omega}f\;ds\Bigr)dt.$$
        In $\mathbb R^3$: $\displaystyle\iiint_\Omega f\,|\nabla u|\,dV=\int_{-\infty}^{\infty}\Bigl(\iint_{\{u=t\}\cap\Omega}f\,dS\Bigr)dt.$`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Corollary — Unweighted form</div>
        {T`If $\nabla u\neq\mathbf 0$ on $\Omega$ (again except possibly at finitely many points), apply the theorem to $f=g/|\nabla u|$:
        $$\iint_\Omega g\;dA=\int_{-\infty}^{\infty}\Bigl(\int_{\{u=t\}\cap\Omega}\frac{g}{|\nabla u|}\;ds\Bigr)dt.$$
        This is the form used to `}
        <em>compute</em>
        {T` an area integral by slicing along level sets. It needs $1/|\nabla u|$ to be integrable along the level curves; near isolated critical points this has to be checked (it holds in every example on this page).`}
      </div>

      <h3 className="subsec">Two familiar special cases</h3>
      <div className="box exm">
        <div className="box-lbl">Special case — Fubini</div>
        <p>
          {T`Take $u(x,y)=x$. Then $\nabla u=(1,0)$, $|\nabla u|=1$, and $\{u=t\}$ is the vertical line $x=t$ with $ds=dy$:
          $$\iint_\Omega f\,dA=\int\Bigl(\int f(t,y)\,dy\Bigr)dt.$$`}
        </p>
      </div>
      <div className="box exm">
        <div className="box-lbl">Special case — Polar coordinates</div>
        <p>
          {T`Take $u(x,y)=r=\sqrt{x^2+y^2}$ on $\Omega$ with the origin removed. Then $\nabla u=(x,y)/r$ is a unit vector, and $\{u=t\}$ is the circle of radius $t$, with $ds=t\,d\theta$:
          $$\iint f\,dA=\int_0^\infty\Bigl(\int_{r=t}f\,ds\Bigr)dt=\int_0^\infty\!\!\int_0^{2\pi}f(t\cos\theta,t\sin\theta)\,t\,d\theta\,dt.$$
          The familiar factor $r$ in $dA=r\,dr\,d\theta$ is just the arc-length element of the circle.`}
        </p>
      </div>
    </section>
  );
}

function SectionDerivation() {
  return (
    <section className="section" id="md-derivation">
      <div className="sec-badge">Section 1.3</div>
      <h2 className="sec-title">Derivation Outline</h2>
      <p>
        {T`We prove the unweighted form locally in $\mathbb R^2$; the weighted form follows by substituting $g=f|\nabla u|$.`}
      </p>

      <div className="box thm">
        <div className="box-lbl">Proof outline</div>
        <ol className="steps">
          <li>
            {T`Level-set coordinates. Near a point where $\nabla u\neq\mathbf 0$, the Implicit Function Theorem lets us build $C^1$ coordinates $(t,s)\mapsto\mathbf x(t,s)$ with $u(\mathbf x(t,s))=t$ and $s$ the arc length along the level curve $\{u=t\}$. So $\mathbf x_s$ is the unit tangent to that curve.`}
          </li>
          <li>
            {T`The $t$-derivative. Differentiate $u(\mathbf x(t,s))=t$ with respect to $t$:
            $$\nabla u\cdot\mathbf x_t=1\quad\Longrightarrow\quad\mathbf x_t\cdot\mathbf n=\frac{1}{|\nabla u|}.$$
            Moving one unit of $t$ moves the point a normal distance $1/|\nabla u|$ — the spacing from Section 1.1.`}
          </li>
          <li>
            {T`The Jacobian. $|\det(\mathbf x_t,\mathbf x_s)|$ is the area of the parallelogram spanned by $\mathbf x_t$ and $\mathbf x_s$. Since $\mathbf x_s$ is a unit vector along the curve, that area is $|\mathbf x_s|$ times the normal component of $\mathbf x_t$:
            $$\Bigl|\det\frac{\partial(x,y)}{\partial(t,s)}\Bigr|=(\mathbf x_t\cdot\mathbf n)\,|\mathbf x_s|=\frac{1}{|\nabla u|}.$$`}
          </li>
          <li>
            {T`Change of variables. On such a patch $P$,
            $$\iint_P g\,dA=\iint g(\mathbf x(t,s))\,\frac{1}{|\nabla u|}\,ds\,dt=\int\Bigl(\int_{\{u=t\}\cap P}\frac{g}{|\nabla u|}\,ds\Bigr)dt.$$`}
          </li>
          <li>
            {T`Assembly. Cut $\Omega$ into finitely many such patches; their shared edges, and any finitely many critical points, have zero area and do not affect either side. Adding up the patches gives the formula on $\Omega$.`}
          </li>
        </ol>
      </div>

      <div className="note">
        {T`In $\mathbb R^3$ the argument is identical: $\mathbf x(t,s_1,s_2)$ puts area coordinates $(s_1,s_2)$ on each level surface, and the volume of the parallelepiped spanned by $\mathbf x_t,\mathbf x_{s_1},\mathbf x_{s_2}$ is (area element of the surface) $\times\,1/|\nabla u|$.`}
      </div>
    </section>
  );
}

function SectionSublevel() {
  return (
    <section className="section" id="md-sublevel">
      <div className="sec-badge">Section 1.4</div>
      <h2 className="sec-title">Sublevel Sets and Their Rate of Change</h2>
      <p>
        {T`Applying the unweighted form to the region $\{u<t\}$ gives integrals that depend on the parameter $t$. Differentiating them is our first example of an integral over a `}
        <strong>moving domain</strong>
        {T`.`}
      </p>

      <div className="box thm">
        <div className="box-lbl">Theorem — Derivative of a sublevel integral</div>
        {T`Let $\Omega$ be bounded, $u\in C^1(\overline\Omega)$, $g$ continuous, and suppose $\nabla u\neq\mathbf 0$ on the level set $\{u=t_0\}$, which lies inside $\Omega$. Then
        $$\frac{d}{dt}\iint_{\{u<t\}}g\,dA\;\Bigg|_{t=t_0}=\int_{\{u=t_0\}}\frac{g}{|\nabla u|}\,ds.$$
        In particular the area $V(t)$ of $\{u<t\}$ satisfies $\displaystyle V'(t)=\int_{\{u=t\}}\frac{ds}{|\nabla u|}$.`}
        <div className="sol">
          <div className="sol-lbl">Proof outline</div>
          <p>
            {T`By the corollary, $\displaystyle\iint_{\{u<t\}}g\,dA=\int_{-\infty}^{t}\Phi(\tau)\,d\tau$ with $\displaystyle\Phi(\tau)=\int_{\{u=\tau\}}\frac{g}{|\nabla u|}\,ds$. Because $\nabla u\neq\mathbf 0$ near the compact curve $\{u=t_0\}$, nearby level curves vary continuously and $\Phi$ is continuous at $t_0$. The Fundamental Theorem of Calculus gives the result.`}
          </p>
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">Preview — the boundary moves with normal speed $1/|\nabla u|$</div>
        {T`Treat $t$ as time. The region $\Omega_t=\{u<t\}$ grows, and its boundary $\{u=t\}$ moves outward with normal speed $v_n=1/|\nabla u|$ (Section 1.1). The theorem then reads
        $$\frac{d}{dt}\iint_{\Omega_t}g\,dA=\int_{\partial\Omega_t}g\,v_n\,ds:$$
        the integral changes because new area is swept in at the boundary at rate $v_n$ per unit length. The Reynolds Transport Theorem in the next topic is the general version of this statement, for regions moving with an arbitrary velocity field and integrands that also depend on time.`}
      </div>
    </section>
  );
}

function SectionCatalogue() {
  const rows = [
    [T`$x$`, T`$1$`, T`vertical lines $x=t$`, T`Fubini's theorem`],
    [T`$ax+by$`, T`$\sqrt{a^2+b^2}$`, T`parallel lines`, T`strips of width $dt/\sqrt{a^2+b^2}$`],
    [T`$r=\sqrt{x^2+y^2}$`, T`$1$`, T`circles of radius $t$`, T`polar coordinates`],
    [T`$x^2+y^2$`, T`$2r$`, T`circles of radius $\sqrt t$`, T`$\int\frac{ds}{|\nabla u|}=\pi$`],
    [T`$\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}$`, T`$2\sqrt{\dfrac{x^2}{a^4}+\dfrac{y^2}{b^4}}$`, T`ellipses`, T`$\int\frac{ds}{|\nabla u|}=\pi ab$`],
    [T`$|\mathbf x|$ in $\mathbb R^3$`, T`$1$`, T`spheres of radius $t$`, T`spherical shells, area $4\pi t^2$`],
    [T`$x+y$ on $[0,1]^2$`, T`$\sqrt2$`, T`diagonal segments`, T`triangular density of $X+Y$`],
  ];
  return (
    <section className="section" id="md-catalogue">
      <div className="sec-badge">Section 1.5</div>
      <h2 className="sec-title">Level-Set Catalogue</h2>
      <p>{"Choosing a level-set function adapted to the problem is the whole skill. These are the ones used on this page."}</p>
      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>{T`$u$`}</th>
              <th>{T`$|\nabla u|$`}</th>
              <th>Level sets</th>
              <th>What coarea gives</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                {r.map((c, i) => (
                  <td key={i}>{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="note">
        {T`When $|\nabla u|$ is constant on each level set (rows with $1$, $\sqrt{a^2+b^2}$, $2r$), the weight simply comes out of the inner integral. When it is not constant (the ellipse), the weight often cancels the awkward part of the arc-length element — see Example 3.`}
      </div>
    </section>
  );
}

function SectionExamples() {
  return (
    <section className="section" id="md-examples">
      <div className="sec-badge">Section 1.6</div>
      <h2 className="sec-title">Worked Examples</h2>

      <div className="box exm">
        <div className="box-lbl">Example 1</div>
        <div className="exm-title">Disks, the Gaussian, and a check of the weighted form</div>
        <p>{T`Use $u=x^2+y^2$, so $|\nabla u|=2r$ and $\{u=t\}$ is the circle of radius $\sqrt t$ for $t>0$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`On that circle $|\nabla u|=2\sqrt t$ and its length is $2\pi\sqrt t$, so`}</p>
          <Fml>{T`$$\int_{\{u=t\}}\frac{ds}{|\nabla u|}=\frac{2\pi\sqrt t}{2\sqrt t}=\pi\qquad\text{for every }t>0.$$`}</Fml>
          <p>{T`(a) Area: $V(t)=\int_0^t\pi\,d\tau=\pi t$, the area of the disk of radius $\sqrt t$. The origin is the only critical point, and $1/|\nabla u|$ stays integrable near it because the weighted lengths stay bounded.`}</p>
          <p>{T`(b) A Gaussian integral, with $g=e^{-u}$ constant on each level set:`}</p>
          <Fml>{T`$$\iint_{\mathbb R^2}e^{-(x^2+y^2)}\,dA=\int_0^\infty e^{-t}\Bigl(\int_{\{u=t\}}\frac{ds}{|\nabla u|}\Bigr)dt=\int_0^\infty\pi e^{-t}\,dt=\pi.$$`}</Fml>
          <p>{T`(c) The weighted form on the unit disk $D$ with $f=1$: the right side is $\int_0^1(\text{length of }\{u=t\})\,dt=\int_0^1 2\pi\sqrt t\,dt=\tfrac{4\pi}{3}$, and directly $\iint_D|\nabla u|\,dA=\int_0^{2\pi}\!\int_0^1 2r\cdot r\,dr\,d\theta=\tfrac{4\pi}{3}$. The two agree.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 2</div>
        <div className="exm-title">Balls in space and radial integrals</div>
        <p>{T`In $\mathbb R^3$ take $u=|\mathbf x|$, so $|\nabla u|=1$ and $\{u=r\}$ is the sphere of radius $r$, of area $4\pi r^2$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <Fml>{T`$$\iiint f\,dV=\int_0^\infty\Bigl(\iint_{|\mathbf x|=r}f\,dS\Bigr)dr.$$`}</Fml>
          <p>{T`With $f=1$ on the ball of radius $R$: $\displaystyle\int_0^R4\pi r^2\,dr=\tfrac43\pi R^3$, and differentiating volume gives back surface area. For a radial function $f=\varphi(|\mathbf x|)$, the inner integral is $4\pi r^2\varphi(r)$. For example, the total mass of a ball of radius $R$ with density $\rho=e^{-|\mathbf x|}$ is`}</p>
          <Fml>{T`$$M=\int_0^R4\pi r^2e^{-r}\,dr=4\pi\Bigl[2-e^{-R}(R^2+2R+2)\Bigr]\;\xrightarrow{R\to\infty}\;8\pi.$$`}</Fml>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 3</div>
        <div className="exm-title">Ellipses: the weight cancels an elliptic integral</div>
        <p>{T`Let $u=\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}$ with $a,b>0$. Compute $\displaystyle\int_{\{u=t\}}\frac{ds}{|\nabla u|}$ for $t>0$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`Parametrize the level ellipse by $x=a\sqrt t\cos\theta$, $y=b\sqrt t\sin\theta$. Then`}</p>
          <Fml>{T`$$ds=\sqrt t\,\sqrt{a^2\sin^2\theta+b^2\cos^2\theta}\;d\theta,\qquad |\nabla u|=2\sqrt{\frac{x^2}{a^4}+\frac{y^2}{b^4}}=\frac{2\sqrt t}{ab}\sqrt{b^2\cos^2\theta+a^2\sin^2\theta}.$$`}</Fml>
          <p>{T`The square roots are identical and cancel:`}</p>
          <Fml>{T`$$\frac{ds}{|\nabla u|}=\frac{ab}{2}\,d\theta\qquad\Longrightarrow\qquad\int_{\{u=t\}}\frac{ds}{|\nabla u|}=\int_0^{2\pi}\frac{ab}{2}\,d\theta=\pi ab.$$`}</Fml>
          <p>{T`So the area of $\{u<t\}$ is $\pi ab\,t$, as it must be for an ellipse with semi-axes $a\sqrt t,b\sqrt t$. The perimeter itself, $\int ds$, is an elliptic integral with no elementary formula. The gradient weighting is not a nuisance; it is what makes level-set integrals computable.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 4 — Application</div>
        <div className="exm-title">The distribution of a function of a random point</div>
        <p>
          {T`A point $(X,Y)$ is chosen uniformly in a region $\Omega$ of area $|\Omega|$. For $U=u(X,Y)$, the coarea formula gives $P(U\le t)=\dfrac{1}{|\Omega|}\displaystyle\int_{-\infty}^{t}\Bigl(\int_{\{u=\tau\}\cap\Omega}\frac{ds}{|\nabla u|}\Bigr)d\tau$, so $U$ has density`}
        </p>
        <Fml>{T`$$p_U(t)=\frac{1}{|\Omega|}\int_{\{u=t\}\cap\Omega}\frac{ds}{|\nabla u|}.$$`}</Fml>
        <p>{T`Find the density of $U=X+Y$ when $(X,Y)$ is uniform on $[0,1]^2$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`Here $|\Omega|=1$ and $|\nabla u|=\sqrt2$. For $0\le t\le1$ the level set is the segment from $(t,0)$ to $(0,t)$, of length $\sqrt2\,t$; for $1\le t\le2$ it runs from $(1,t-1)$ to $(t-1,1)$, of length $\sqrt2\,(2-t)$. Dividing by $\sqrt2$:`}</p>
          <Fml>{T`$$p_U(t)=\begin{cases}t,&0\le t\le1,\\2-t,&1\le t\le2,\\0,&\text{otherwise},\end{cases}$$`}</Fml>
          <p>{T`the triangular distribution. It integrates to $1$, and for instance $P(U\le\tfrac12)=\int_0^{1/2}t\,dt=\tfrac18$, the area of the triangle $\{x+y\le\tfrac12\}$. The same recipe gives the distribution of a measurement $u$ (distance, energy, temperature) of a uniformly sampled point, which is how coarea is used in statistics, physics and image processing.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 5 — Counterexample</div>
        <div className="exm-title">A plateau is invisible to level curves</div>
        <p>
          {T`On the unit disk let $u=0$ for $r\le\tfrac12$ and $u=(r-\tfrac12)^2$ for $\tfrac12<r<1$. This $u$ is $C^1$ (its radial derivative $2(r-\tfrac12)$ tends to $0$ at $r=\tfrac12$), and $\nabla u\neq\mathbf 0$ for $r>\tfrac12$, but $\nabla u=\mathbf 0$ on the whole plateau $r\le\tfrac12$.`}
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`For $0<t<\tfrac14$ the level set is the circle $r=\tfrac12+\sqrt t$, where $|\nabla u|=2\sqrt t$. The unweighted right-hand side with $g=1$ is`}</p>
          <Fml>{T`$$\int_0^{1/4}\frac{2\pi\bigl(\tfrac12+\sqrt t\bigr)}{2\sqrt t}\,dt=\pi\int_0^{1/4}\Bigl(\frac{1}{2\sqrt t}+1\Bigr)dt=\pi\Bigl(\frac12+\frac14\Bigr)=\frac{3\pi}{4}.$$`}</Fml>
          <p>{T`But the disk has area $\pi$. The missing $\tfrac{\pi}{4}$ is exactly the plateau: the single level $t=0$ is the whole plateau, which is a region, not a curve, and a single value of $t$ contributes nothing to a $dt$-integral. So the unweighted form fails here.`}</p>
          <p>{T`The weighted form survives, because the plateau contributes nothing to either side: $\iint|\nabla u|\,dA=2\pi\int_{1/2}^{1}2(r-\tfrac12)\,r\,dr=\tfrac{5\pi}{12}$, and $\int_0^{1/4}2\pi(\tfrac12+\sqrt t)\,dt=\tfrac{5\pi}{12}$ as well. The lesson: before dividing by $|\nabla u|$, check that $\nabla u$ does not vanish on a region.`}</p>
        </div>
      </div>
    </section>
  );
}

function SectionMistakes() {
  return (
    <section className="section" id="md-mistakes">
      <div className="sec-badge">Section 1.7</div>
      <h2 className="sec-title">Limitations and Common Mistakes</h2>

      <div className="box warn">
        <div className="box-lbl">Common mistakes</div>
        <ul>
          <li>{T`Forgetting the weight altogether: $\iint_\Omega g\,dA\neq\int\bigl(\int_{u=t}g\,ds\bigr)dt$ unless $|\nabla u|\equiv1$.`}</li>
          <li>{T`Putting the weight on the wrong side: $|\nabla u|$ multiplies the area integrand, while $1/|\nabla u|$ divides the level-set integrand.`}</li>
          <li>{T`Using the unweighted form where $\nabla u$ vanishes on a region (Example 5); the plateau's contribution is lost.`}</li>
          <li>{T`Confusing $V'(t)=\int_{u=t}ds/|\nabla u|$ with the length of the level curve. They agree only when $|\nabla u|=1$ on that curve.`}</li>
          <li>{T`Forgetting to intersect level sets with $\Omega$, e.g. using the full line $x+y=t$ instead of the segment inside the square.`}</li>
          <li>{T`Treating a level set through a critical point as a smooth curve; at a saddle of $u$ the level set crosses itself, and the local coordinates of Section 1.3 break down there.`}</li>
        </ul>
      </div>

      <div className="box def">
        <div className="box-lbl">Limitations of this treatment</div>
        <ul>
          <li>{T`We assumed $u\in C^1$ with $\nabla u\neq\mathbf 0$ except at finitely many points. The fully general coarea formula, for Lipschitz $u$ and arbitrary critical sets, needs measure theory and is beyond this course.`}</li>
          <li>{T`Near critical points the unweighted integrand $g/|\nabla u|$ can blow up; integrability must be checked case by case.`}</li>
          <li>{T`Level sets with infinitely many components, or that are not compact, need care with the inner integral.`}</li>
        </ul>
      </div>

      <div className="sum-grid">
        <div className="sum-card">
          <div className="sc-lbl">Weighted form</div>
          <p>{T`$\iint_\Omega f|\nabla u|\,dA=\int\bigl(\int_{u=t}f\,ds\bigr)dt$`}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">Unweighted form ($\nabla u\neq\mathbf 0$)</div>
          <p>{T`$\iint_\Omega g\,dA=\int\bigl(\int_{u=t}\tfrac{g}{|\nabla u|}\,ds\bigr)dt$`}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">Level spacing</div>
          <p>{T`$dn=dt/|\nabla u|$`}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">Sublevel derivative</div>
          <p>{T`$\tfrac{d}{dt}\iint_{u<t}g\,dA=\int_{u=t}\tfrac{g}{|\nabla u|}\,ds$`}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">Special cases</div>
          <p>{T`$u=x$: Fubini; $\;u=r$: polar coordinates`}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">Density of $u(X)$</div>
          <p>{T`$p_U(t)=\frac{1}{|\Omega|}\int_{u=t}\frac{ds}{|\nabla u|}$`}</p>
        </div>
      </div>
    </section>
  );
}

/* ──────── Topic 2: theory always open, quiz locked until Topic 1 quiz ──────── */

function TopicTwo({ unlocked, topicOnePct }) {
  return (
    <ReynoldsTransportTopic
      quizLocked={!unlocked}
      topicOnePct={topicOnePct}
      passPercent={SECTION_QUIZ_PASS_PERCENT}
    />
  );
}

/* ─────────────────────────────── Page ─────────────────────────────── */

function MovingDomainsPage() {
  const progress = useProgress();
  const recordVisit = progress?.recordVisit;
  const quizScores = progress?.quizScores || {};

  useEffect(() => {
    if (recordVisit) recordVisit(SECTION_ID);
  }, [recordVisit]);

  const topicOnePct = getQuizAttemptPercent(quizScores[guideQuizId(TOPIC1_QUIZ_KEY)]);
  const topicTwoUnlocked = topicOnePct !== null && topicOnePct >= SECTION_QUIZ_PASS_PERCENT;

  return (
    <div className="guide-part-wrapper">
      <div className="guide-part-topbar">
        <div className="guide-part-info">
          <span className="guide-part-badge">Module</span>
          <span className="guide-part-title">Integration on Moving Domains — Coarea Formula &amp; Reynolds Transport</span>
        </div>
        <BookmarkButton id={SECTION_ID} title="Integration on Moving Domains" path={PAGE_PATH} />
      </div>

      <StudyGuideShell guideClass="partial-derivatives-guide" title="Integration on Moving Domains">
        <Sidebar />
        <main className="main">
          <Header />
          <TableOfContents />
          <OpeningNote />
          <Divider />
          <TopicOneIntro />
          <SectionLevelSets />
          <SectionFormula />
          <SectionDerivation />
          <SectionSublevel />
          <SectionCatalogue />
          <SectionExamples />
          <SectionMistakes />
          <Divider />
          <GuideMcqSection
            id="mcq-md-coarea"
            badge="Checkpoint"
            title="Coarea Formula and Level-Set Integration — Quiz"
            scoreId="score-md-coarea"
            section={TOPIC1_QUIZ_KEY}
            questions={MD_COAREA_QUIZ}
          />
          <Divider />
          <TopicTwo unlocked={topicTwoUnlocked} topicOnePct={topicOnePct} />
          <footer className="pg-foot">Integration on Moving Domains · Rendered with MathJax 3</footer>
        </main>
      </StudyGuideShell>

      <SectionCompleteBar
        sectionId={SECTION_ID}
        nextPath="/quiz/multivariable-calculus"
        nextLabel="Certification Quiz"
      />
    </div>
  );
}

export default MovingDomainsPage;
