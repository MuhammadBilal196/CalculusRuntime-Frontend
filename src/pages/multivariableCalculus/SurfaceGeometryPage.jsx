import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { SG_METRIC_QUIZ } from "../../data/mvSurfaceGeometryQuizzes";
import {
  getQuizAttemptPercent,
  guideQuizId,
  SECTION_QUIZ_PASS_PERCENT,
} from "../../data/sectionQuizGates";
import "./PartialDerivativesGuide.css";
import "./GuidePart.css";

/**
 * Geometry of Surfaces — module page (Multivariable Calculus).
 * Topic 1: Surface Metrics and the First Fundamental Form  (quiz key "sg-metric")
 * Topic 2: Surface Curvature and Geodesics                  (quiz key "sg-curvature", unlocks after Topic 1 quiz ≥ 80%)
 */

const T = String.raw;
const SECTION_ID = "surface-geometry";
const PAGE_PATH = "/multivariable-calculus/surface-geometry";
const TOPIC1_QUIZ_KEY = "sg-metric";

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
        <div className="sb-title">Geometry of Surfaces</div>
      </div>
      <div className="sb-group">Surface Metrics</div>
      <a className="sb-link" href="#sg-objectives">Objectives &amp; Prerequisites</a>
      <a className="sb-link" href="#sg-regular">Regular Parametrized Surfaces</a>
      <a className="sb-link" href="#sg-fff">The First Fundamental Form</a>
      <a className="sb-link" href="#sg-length-angle">Lengths &amp; Angles</a>
      <a className="sb-link" href="#sg-area">Area from the Metric</a>
      <a className="sb-link" href="#sg-reparam">Reparametrization &amp; Intrinsic Geometry</a>
      <a className="sb-link" href="#sg-catalogue">Metric Catalogue</a>
      <a className="sb-link" href="#sg-examples">Worked Examples</a>
      <a className="sb-link" href="#sg-mistakes">Limitations &amp; Mistakes</a>
      <a className="sb-link" href="#mcq-sg-metric"><span className="sn">✎</span>Surface Metrics Quiz</a>
      <div className="sb-group">Curvature &amp; Geodesics</div>
      <a className="sb-link" href="#sg-curvature"><span className="sn">🔒</span>Surface Curvature &amp; Geodesics</a>
    </nav>
  );
}

function Header() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus · Additional Depth</div>
      <h1 className="ch-title">Geometry of Surfaces</h1>
      <p className="ch-sub">
        Surface Metrics &amp; the First Fundamental Form · Surface Curvature &amp; Geodesics
      </p>
    </header>
  );
}

function TableOfContents() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents</div>
      <div className="toc-grid">
        <a className="toc-a" href="#sg-objectives"><span className="tn">1.0</span>Objectives &amp; Prerequisites</a>
        <a className="toc-a" href="#sg-regular"><span className="tn">1.1</span>Regular Parametrized Surfaces</a>
        <a className="toc-a" href="#sg-fff"><span className="tn">1.2</span>The First Fundamental Form</a>
        <a className="toc-a" href="#sg-length-angle"><span className="tn">1.3</span>Lengths &amp; Angles</a>
        <a className="toc-a" href="#sg-area"><span className="tn">1.4</span>Area from the Metric</a>
        <a className="toc-a" href="#sg-reparam"><span className="tn">1.5</span>Reparametrization &amp; Intrinsic Geometry</a>
        <a className="toc-a" href="#sg-catalogue"><span className="tn">1.6</span>Metric Catalogue</a>
        <a className="toc-a" href="#sg-examples"><span className="tn">1.7</span>Worked Examples</a>
        <a className="toc-a" href="#sg-mistakes"><span className="tn">1.8</span>Limitations &amp; Common Mistakes</a>
        <a className="toc-a" href="#mcq-sg-metric"><span className="tn">✎</span>Surface Metrics Quiz (20)</a>
        <a className="toc-a" href="#sg-curvature"><span className="tn">2</span>Surface Curvature &amp; Geodesics</a>
      </div>
    </nav>
  );
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>How this module works:</strong>{" "}
        {"This module has two topics. Read Surface Metrics and the First Fundamental Form, then pass its 20-question quiz with at least 80% to unlock Surface Curvature and Geodesics. The first topic answers a deceptively simple question — how do you measure lengths, angles and areas on a curved surface using only its parameters? — and the second uses that answer to describe how the surface bends."}
      </p>
    </div>
  );
}

/* ─────────────────────── Topic 1: Surface Metrics ─────────────────────── */

function TopicOneIntro() {
  return (
    <section className="section" id="sg-objectives">
      <div className="sec-badge">Surface Metrics · Start here</div>
      <h2 className="sec-title">Surface Metrics and the First Fundamental Form</h2>
      <p>
        {T`A parametrized surface $\mathbf r(u,v)$ is a map from a flat parameter domain $D\subseteq\mathbb R^2$ into space. Distances in the $(u,v)$-plane are not distances on the surface: one unit of $u$ might be a centimetre near one point and a kilometre near another, and the $u$- and $v$-directions need not be perpendicular on the surface. The `}
        <strong>first fundamental form</strong>
        {T` is the correction factor. It is a small symmetric matrix of three functions, $E$, $F$ and $G$, that converts parameter increments $(du,dv)$ into true lengths, angles and areas on the surface.`}
      </p>

      <div className="box def">
        <div className="box-lbl">Learning objectives</div>
        <p>{"After this topic you should be able to:"}</p>
        <ul>
          <li>{T`check whether a parametrization is regular and identify coordinate singularities;`}</li>
          <li>{T`compute $E$, $F$, $G$ for standard surfaces and write $ds^2=E\,du^2+2F\,du\,dv+G\,dv^2$;`}</li>
          <li>{T`find lengths of curves on a surface and angles between tangent directions;`}</li>
          <li>{T`derive the area element $\sqrt{EG-F^2}\,du\,dv$ and use it to compute surface area;`}</li>
          <li>{T`explain how $E,F,G$ transform under a change of parameters and which quantities are intrinsic.`}</li>
        </ul>
      </div>

      <div className="box tip">
        <div className="box-lbl">Prerequisites</div>
        <ul>
          <li>
            {T`Partial derivatives and the chain rule — `}
            <Link to="/partial-derivatives/1">Partial Derivatives</Link>.
          </li>
          <li>
            {T`Dot and cross products, planes and normals — `}
            <Link to="/3d-geometry/1">3D Analytical Geometry &amp; Quadric Surfaces</Link>.
          </li>
          <li>
            {T`Jacobians and change of variables — `}
            <Link to="/jacobians-change-of-variables/1">Jacobians &amp; Change of Variables</Link>.
          </li>
          <li>
            {T`Surface area $\iint|\mathbf r_u\times\mathbf r_v|\,dA$ — `}
            <Link to="/parametrized-surface-area/2">Parametrized Surface Area</Link>. This topic re-reads that formula through the metric.
          </li>
          <li>
            {T`Arc length of space curves — `}
            <Link to="/space-curves/1">Space Curves</Link>. Curvature of curves already lives there; here we study the geometry of the surface itself.
          </li>
        </ul>
      </div>

      <div className="box warn">
        <div className="box-lbl">Standing assumptions</div>
        {T`Throughout, $D\subseteq\mathbb R^2$ is open (or the closure of an open set for area integrals), $\mathbf r:D\to\mathbb R^3$ has continuous first partial derivatives ($C^1$), and $\mathbf r$ is one-to-one on the interior of $D$ so that no piece of surface is counted twice. Topic 2 will additionally assume $C^2$. We write $\mathbf r_u=\partial\mathbf r/\partial u$, $\mathbf r_v=\partial\mathbf r/\partial v$ and $\langle\cdot,\cdot\rangle$ for the dot product in $\mathbb R^3$.`}
      </div>
    </section>
  );
}

function SectionRegular() {
  return (
    <section className="section" id="sg-regular">
      <div className="sec-badge">Section 1.1</div>
      <h2 className="sec-title">Regular Parametrized Surfaces</h2>
      <p>
        {T`Fixing $v=v_0$ and letting $u$ vary traces a $u$-coordinate curve on the surface; its velocity is $\mathbf r_u$. Fixing $u$ gives a $v$-coordinate curve with velocity $\mathbf r_v$. For these two vectors to span a genuine tangent plane, they must not be parallel.`}
      </p>

      <div className="box def">
        <div className="box-lbl">Definition — Regular point, tangent plane, unit normal</div>
        {T`A point $(u_0,v_0)\in D$ is `}
        <strong>regular</strong>
        {T` for $\mathbf r$ if $\mathbf r_u$ and $\mathbf r_v$ are linearly independent there, equivalently
        $$\mathbf r_u\times\mathbf r_v\neq\mathbf 0.$$
        The parametrization is regular if every point of $D$ is regular. At a regular point $p=\mathbf r(u_0,v_0)$ the `}
        <strong>tangent plane</strong>
        {T` is $T_pS=\operatorname{span}\{\mathbf r_u,\mathbf r_v\}$ and the unit normal is
        $$\mathbf N=\frac{\mathbf r_u\times\mathbf r_v}{|\mathbf r_u\times\mathbf r_v|}.$$`}
      </div>

      <p>
        {T`Every tangent vector at $p$ can be written uniquely as $\mathbf w=a\,\mathbf r_u+b\,\mathbf r_v$. The pair $(a,b)$ lives in the parameter plane; the vector $\mathbf w$ lives in $\mathbb R^3$. The first fundamental form is the bridge between these two descriptions.`}
      </p>

      <div className="box exm">
        <div className="box-lbl">Example — Counterexample</div>
        <div className="exm-title">A non-regular parametrization of a perfectly smooth surface</div>
        <p>{T`Polar coordinates on the plane: $\mathbf r(u,v)=(v\cos u,\,v\sin u,\,0)$ with $u\in\mathbb R$, $v\ge0$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`$\mathbf r_u=(-v\sin u,\,v\cos u,\,0)$ and $\mathbf r_v=(\cos u,\,\sin u,\,0)$, so $\mathbf r_u\times\mathbf r_v=(0,0,-v)$.`}</p>
          <p>
            {T`At $v=0$ the cross product vanishes, so the parametrization is not regular at the origin. Yet the plane is perfectly smooth there — the Cartesian parametrization $(x,y,0)$ is regular everywhere. Failure of regularity can be a `}
            <strong>coordinate singularity</strong>
            {T` (a defect of the chart) rather than a geometric one. Contrast the cone $(v\cos u,\,v\sin u,\,v)$: at its apex no parametrization can be regular, because the cone has no tangent plane there.`}
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionFFF() {
  return (
    <section className="section" id="sg-fff">
      <div className="sec-badge">Section 1.2</div>
      <h2 className="sec-title">The First Fundamental Form</h2>

      <h3 className="subsec">Derivation from arc length</h3>
      <p>
        {T`Let $t\mapsto(u(t),v(t))$ be a $C^1$ curve in $D$. Its image on the surface is $\boldsymbol\alpha(t)=\mathbf r(u(t),v(t))$. By the chain rule,`}
      </p>
      <Fml>{T`$$\boldsymbol\alpha'(t)=\mathbf r_u\,u'(t)+\mathbf r_v\,v'(t).$$`}</Fml>
      <p>{"Squaring the speed and expanding the dot product:"}</p>
      <Fml>{T`$$|\boldsymbol\alpha'|^2=\langle\mathbf r_u,\mathbf r_u\rangle\,u'^2+2\langle\mathbf r_u,\mathbf r_v\rangle\,u'v'+\langle\mathbf r_v,\mathbf r_v\rangle\,v'^2.$$`}</Fml>
      <p>{"The three dot products depend only on the point, not on the curve. They deserve names."}</p>

      <div className="box def">
        <div className="box-lbl">Definition — Coefficients of the first fundamental form</div>
        {T`$$E=\langle\mathbf r_u,\mathbf r_u\rangle,\qquad F=\langle\mathbf r_u,\mathbf r_v\rangle,\qquad G=\langle\mathbf r_v,\mathbf r_v\rangle.$$
        The `}
        <strong>first fundamental form</strong>
        {T` at $p$ is the quadratic form on $T_pS$
        $$\mathrm I_p(a\,\mathbf r_u+b\,\mathbf r_v)=E\,a^2+2F\,ab+G\,b^2,$$
        with matrix (the `}
        <strong>metric tensor</strong>
        {T`)
        $$g=\begin{pmatrix}E&F\\F&G\end{pmatrix}.$$
        In differential notation it is written as the `}
        <strong>line element</strong>
        {T` $\;ds^2=E\,du^2+2F\,du\,dv+G\,dv^2.$`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Theorem — The metric is positive definite at regular points</div>
        {T`At every regular point, $E>0$, $G>0$ and
        $$EG-F^2=|\mathbf r_u\times\mathbf r_v|^2>0.$$
        Hence $\mathrm I_p(\mathbf w)>0$ for every nonzero tangent vector $\mathbf w$.`}
        <div className="sol">
          <div className="sol-lbl">Proof outline</div>
          <p>
            {T`Lagrange's identity states $|\mathbf a\times\mathbf b|^2=|\mathbf a|^2|\mathbf b|^2-\langle\mathbf a,\mathbf b\rangle^2$ for any $\mathbf a,\mathbf b\in\mathbb R^3$. With $\mathbf a=\mathbf r_u$, $\mathbf b=\mathbf r_v$ the right-hand side is $EG-F^2$, and regularity makes the left-hand side positive. Positivity of $E$ and $G$ follows because neither $\mathbf r_u$ nor $\mathbf r_v$ can be zero at a regular point. Finally $\mathrm I_p(\mathbf w)=|\mathbf w|^2$, which is positive for $\mathbf w\neq\mathbf 0$.`}
          </p>
        </div>
      </div>

      <div className="note">
        {T`Read $ds^2=E\,du^2+2F\,du\,dv+G\,dv^2$ as "Pythagoras with corrections": $E$ stretches the $u$-direction, $G$ stretches the $v$-direction, and $F$ accounts for the coordinate directions not being perpendicular. On the flat $(x,y)$-plane, $E=G=1$ and $F=0$, recovering $ds^2=dx^2+dy^2$.`}
      </div>
    </section>
  );
}

function SectionLengthAngle() {
  return (
    <section className="section" id="sg-length-angle">
      <div className="sec-badge">Section 1.3</div>
      <h2 className="sec-title">Lengths and Angles on a Surface</h2>

      <div className="box thm">
        <div className="box-lbl">Theorem — Arc length</div>
        {T`If $\boldsymbol\alpha(t)=\mathbf r(u(t),v(t))$, $a\le t\le b$, is a $C^1$ curve on the surface, then
        $$L=\int_a^b\sqrt{E\,u'(t)^2+2F\,u'(t)v'(t)+G\,v'(t)^2}\;dt,$$
        where $E,F,G$ are evaluated at $(u(t),v(t))$.`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Theorem — Angles between tangent vectors</div>
        {T`For tangent vectors $\mathbf w_1=a_1\mathbf r_u+b_1\mathbf r_v$ and $\mathbf w_2=a_2\mathbf r_u+b_2\mathbf r_v$, polarizing the quadratic form gives
        $$\langle\mathbf w_1,\mathbf w_2\rangle=E\,a_1a_2+F\,(a_1b_2+a_2b_1)+G\,b_1b_2,$$
        and the angle $\theta$ between them satisfies $\cos\theta=\dfrac{\langle\mathbf w_1,\mathbf w_2\rangle}{\sqrt{\mathrm I(\mathbf w_1)}\sqrt{\mathrm I(\mathbf w_2)}}$.`}
        <p>
          {T`In particular the angle $\omega$ between the coordinate curves ($\mathbf w_1=\mathbf r_u$, $\mathbf w_2=\mathbf r_v$) satisfies`}
        </p>
        <Fml>{T`$$\cos\omega=\frac{F}{\sqrt{EG}}.$$`}</Fml>
        {T`The coordinate curves are orthogonal everywhere iff $F\equiv0$; such parametrizations are called `}
        <strong>orthogonal</strong>.
      </div>

      <div className="box exm">
        <div className="box-lbl">Example</div>
        <div className="exm-title">Angle between two tangent directions on the unit sphere</div>
        <p>
          {T`On the unit sphere $\mathbf r(\varphi,\theta)=(\sin\varphi\cos\theta,\sin\varphi\sin\theta,\cos\varphi)$, find the angle between the directions $(d\varphi,d\theta)=(1,1)$ and $(1,-1)$ at $\varphi=\pi/4$.`}
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`For the unit sphere $E=1$, $F=0$, $G=\sin^2\varphi$ (derived in Example 1 below), so at $\varphi=\pi/4$: $E=1$, $F=0$, $G=\tfrac12$.`}</p>
          <Fml>{T`$$\langle\mathbf w_1,\mathbf w_2\rangle=E(1)(1)+G(1)(-1)=1-\tfrac12=\tfrac12,\qquad \mathrm I(\mathbf w_1)=\mathrm I(\mathbf w_2)=1+\tfrac12=\tfrac32.$$`}</Fml>
          <p>
            {T`So $\cos\theta=\tfrac{1/2}{3/2}=\tfrac13$ and $\theta\approx70.5^\circ$. In the parameter plane the directions $(1,1)$ and $(1,-1)$ are perpendicular — the metric shows they are not perpendicular on the sphere.`}
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionArea() {
  return (
    <section className="section" id="sg-area">
      <div className="sec-badge">Section 1.4</div>
      <h2 className="sec-title">Area from the Metric</h2>
      <p>
        {T`A small parameter rectangle $[u,u+\Delta u]\times[v,v+\Delta v]$ maps to an almost-parallelogram on the surface with sides $\mathbf r_u\Delta u$ and $\mathbf r_v\Delta v$. Its area is $|\mathbf r_u\times\mathbf r_v|\,\Delta u\,\Delta v$. By Lagrange's identity this depends only on the metric:`}
      </p>

      <div className="box thm">
        <div className="box-lbl">Theorem — Area element</div>
        {T`$$dA=|\mathbf r_u\times\mathbf r_v|\,du\,dv=\sqrt{EG-F^2}\;du\,dv=\sqrt{\det g}\;du\,dv.$$
        For a region $\mathbf r(R)$ with $R\subseteq D$, $\displaystyle\operatorname{Area}=\iint_R\sqrt{EG-F^2}\;du\,dv.$`}
      </div>

      <p>
        {T`This is the same formula you met in `}
        <Link to="/parametrized-surface-area/2">Parametrized Surface Area</Link>
        {T`, but it is now expressed purely in terms of $E,F,G$. That rewriting matters: it shows that area, like length and angle, can be computed by someone who knows only the metric and never looks at the surface from outside.`}
      </p>

      <div className="box exm">
        <div className="box-lbl">Example</div>
        <div className="exm-title">Area of the paraboloid $z=x^2+y^2$ over the unit disk</div>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            {T`As a graph, $E=1+4x^2$, $F=4xy$, $G=1+4y^2$, so $EG-F^2=1+4x^2+4y^2$. In polar coordinates over $r\le1$:`}
          </p>
          <Fml>{T`$$A=\int_0^{2\pi}\!\!\int_0^1\sqrt{1+4r^2}\;r\,dr\,d\theta=2\pi\cdot\frac{1}{12}\Bigl[(1+4r^2)^{3/2}\Bigr]_0^1=\frac{\pi}{6}\bigl(5\sqrt5-1\bigr)\approx5.33.$$`}</Fml>
          <p>{T`For comparison, the flat disk has area $\pi\approx3.14$: the factor $\sqrt{EG-F^2}\ge1$ records how much the graph is stretched.`}</p>
        </div>
      </div>
    </section>
  );
}

function SectionReparam() {
  return (
    <section className="section" id="sg-reparam">
      <div className="sec-badge">Section 1.5</div>
      <h2 className="sec-title">Reparametrization and Intrinsic Geometry</h2>
      <p>
        {T`The same surface admits many parametrizations, and $E,F,G$ change from one to another. What does not change are the geometric quantities built from them.`}
      </p>

      <div className="box thm">
        <div className="box-lbl">Theorem — Transformation law</div>
        {T`Let $(u,v)=\Phi(s,t)$ be a $C^1$ change of parameters with Jacobian matrix $J=\dfrac{\partial(u,v)}{\partial(s,t)}$ and $\det J\neq0$, and put $\tilde{\mathbf r}=\mathbf r\circ\Phi$. Then
        $$\tilde g=J^{T}g\,J,\qquad\text{so}\qquad\sqrt{\det\tilde g}=\sqrt{\det g}\;|\det J|.$$`}
        <div className="sol">
          <div className="sol-lbl">Derivation outline</div>
          <p>
            {T`By the chain rule $\tilde{\mathbf r}_s=\mathbf r_u u_s+\mathbf r_v v_s$ and $\tilde{\mathbf r}_t=\mathbf r_u u_t+\mathbf r_v v_t$. Each entry of $\tilde g$ is a dot product of two such combinations, which is exactly the matrix product $J^{T}gJ$. Taking determinants gives $\det\tilde g=(\det J)^2\det g$.`}
          </p>
        </div>
      </div>

      <p>
        {T`Combined with the change-of-variables formula $du\,dv=|\det J|\,ds\,dt$ (see `}
        <Link to="/jacobians-change-of-variables/1">Jacobians</Link>
        {T`), this shows $\sqrt{\det\tilde g}\,ds\,dt=\sqrt{\det g}\,du\,dv$: the `}
        <strong>area is independent of the parametrization</strong>
        {T`. Likewise lengths and angles do not change, because they are computed from the actual tangent vectors in $\mathbb R^3$.`}
      </p>

      <div className="box def">
        <div className="box-lbl">Definition — Intrinsic quantity, local isometry</div>
        {T`A quantity is `}
        <strong>intrinsic</strong>
        {T` if it can be computed from $E,F,G$ (and their derivatives) alone. Two surfaces are `}
        <strong>locally isometric</strong>
        {T` if they admit parametrizations on a common domain with identical $E,F,G$; then corresponding curves have equal lengths, meet at equal angles and enclose equal areas.`}
      </div>

      <div className="box exm">
        <div className="box-lbl">Example — Counterexample</div>
        <div className="exm-title">Same metric, different shape: the plane and the cylinder</div>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>
            {T`Plane: $\mathbf r(u,v)=(u,v,0)$ gives $E=1$, $F=0$, $G=1$. Unit cylinder: $\mathbf r(u,v)=(\cos u,\sin u,v)$ gives $\mathbf r_u=(-\sin u,\cos u,0)$, $\mathbf r_v=(0,0,1)$, hence again $E=1$, $F=0$, $G=1$.`}
          </p>
          <p>
            {T`The two surfaces are locally isometric — which is why a sheet of paper rolls into a tube without stretching or tearing. But one is flat and the other is bent in space. So the first fundamental form `}
            <strong>cannot</strong>
            {T` detect how a surface sits in $\mathbb R^3$. Measuring that bending is the job of the second fundamental form in the next topic.`}
          </p>
        </div>
      </div>
    </section>
  );
}

function SectionCatalogue() {
  const rows = [
    [T`Plane (Cartesian)`, T`$(u,v,0)$`, T`$1$`, T`$0$`, T`$1$`, T`$1$`],
    [T`Plane (polar)`, T`$(v\cos u,\,v\sin u,\,0)$`, T`$v^2$`, T`$0$`, T`$1$`, T`$v$`],
    [T`Cylinder, radius $a$`, T`$(a\cos u,\,a\sin u,\,v)$`, T`$a^2$`, T`$0$`, T`$1$`, T`$a$`],
    [T`Sphere, radius $R$`, T`$(R\sin\varphi\cos\theta,\,R\sin\varphi\sin\theta,\,R\cos\varphi)$`, T`$R^2$ ($\varphi$)`, T`$0$`, T`$R^2\sin^2\varphi$ ($\theta$)`, T`$R^2\sin\varphi$`],
    [T`Graph $z=f(x,y)$`, T`$(x,\,y,\,f(x,y))$`, T`$1+f_x^2$`, T`$f_xf_y$`, T`$1+f_y^2$`, T`$\sqrt{1+f_x^2+f_y^2}$`],
    [T`Surface of revolution`, T`$(f(v)\cos u,\,f(v)\sin u,\,g(v))$`, T`$f^2$`, T`$0$`, T`$f'^2+g'^2$`, T`$|f|\sqrt{f'^2+g'^2}$`],
    [T`Cone`, T`$(v\cos u,\,v\sin u,\,v)$`, T`$v^2$`, T`$0$`, T`$2$`, T`$\sqrt2\,|v|$`],
    [T`Helicoid`, T`$(v\cos u,\,v\sin u,\,u)$`, T`$1+v^2$`, T`$0$`, T`$1$`, T`$\sqrt{1+v^2}$`],
  ];
  return (
    <section className="section" id="sg-catalogue">
      <div className="sec-badge">Section 1.6</div>
      <h2 className="sec-title">Metric Catalogue</h2>
      <p>{"Each entry follows from computing the two partial derivatives and three dot products. Verify at least three of them yourself."}</p>
      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>Surface</th>
              <th>{T`$\mathbf r(u,v)$`}</th>
              <th>{T`$E$`}</th>
              <th>{T`$F$`}</th>
              <th>{T`$G$`}</th>
              <th>{T`$\sqrt{EG-F^2}$`}</th>
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
        {T`Notice how often $F=0$: the natural coordinates on cylinders, spheres, surfaces of revolution, cones and helicoids are all orthogonal. Graphs are the exception — on $z=f(x,y)$ the $x$- and $y$-curves are perpendicular only where $f_xf_y=0$.`}
      </div>
    </section>
  );
}

function SectionExamples() {
  return (
    <section className="section" id="sg-examples">
      <div className="sec-badge">Section 1.7</div>
      <h2 className="sec-title">Worked Examples</h2>

      <div className="box exm">
        <div className="box-lbl">Example 1</div>
        <div className="exm-title">The sphere: metric, a latitude circle and a polar cap</div>
        <p>
          {T`For $\mathbf r(\varphi,\theta)=(R\sin\varphi\cos\theta,\,R\sin\varphi\sin\theta,\,R\cos\varphi)$, $0<\varphi<\pi$, compute $E,F,G$; find the length of the latitude $\varphi=\varphi_0$; and find the area of the cap $0\le\varphi\le\alpha$.`}
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <Fml>{T`$$\mathbf r_\varphi=(R\cos\varphi\cos\theta,\;R\cos\varphi\sin\theta,\;-R\sin\varphi),\qquad \mathbf r_\theta=(-R\sin\varphi\sin\theta,\;R\sin\varphi\cos\theta,\;0).$$`}</Fml>
          <Fml>{T`$$E=R^2(\cos^2\varphi+\sin^2\varphi)=R^2,\qquad F=-R^2\sin\varphi\cos\varphi\sin\theta\cos\theta+R^2\sin\varphi\cos\varphi\sin\theta\cos\theta=0,\qquad G=R^2\sin^2\varphi.$$`}</Fml>
          <p>
            {T`So $ds^2=R^2\,d\varphi^2+R^2\sin^2\varphi\,d\theta^2$. On the latitude $\varphi=\varphi_0$ take $\theta=t\in[0,2\pi]$; then $\varphi'=0$, $\theta'=1$ and`}
          </p>
          <Fml>{T`$$L=\int_0^{2\pi}\sqrt{G}\,dt=2\pi R\sin\varphi_0.$$`}</Fml>
          <p>{T`The equator ($\varphi_0=\pi/2$) has length $2\pi R$, and latitudes shrink to zero length at the poles. For the cap, $\sqrt{EG-F^2}=R^2\sin\varphi$ and`}</p>
          <Fml>{T`$$A(\alpha)=\int_0^{2\pi}\!\!\int_0^{\alpha}R^2\sin\varphi\;d\varphi\,d\theta=2\pi R^2(1-\cos\alpha).$$`}</Fml>
          <p>{T`Check: $\alpha=\pi$ gives the whole sphere, $4\pi R^2$. Note $\sqrt{EG-F^2}=0$ at the poles — another coordinate singularity of a smooth surface.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 2 — Application</div>
        <div className="exm-title">A stripe painted on a can</div>
        <p>
          {T`A cylindrical can has radius $a$. A stripe winds once around it while rising a height $h$, following $u=t$, $v=\dfrac{h}{2\pi}t$, $0\le t\le2\pi$, on $\mathbf r(u,v)=(a\cos u,\,a\sin u,\,v)$. How long is the stripe?`}
        </p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`The cylinder has $E=a^2$, $F=0$, $G=1$, and $u'=1$, $v'=h/(2\pi)$:`}</p>
          <Fml>{T`$$L=\int_0^{2\pi}\sqrt{a^2+\frac{h^2}{4\pi^2}}\;dt=\sqrt{4\pi^2a^2+h^2}.$$`}</Fml>
          <p>
            {T`This is the hypotenuse of a right triangle with legs $2\pi a$ (the circumference) and $h$. That is no accident: cutting the label along a vertical line and unrolling it is an isometry onto a flat rectangle, and the stripe becomes the diagonal. Label printers, pipe-wrapping and cable-winding calculations use exactly this fact. For $a=4\text{ cm}$ and $h=12\text{ cm}$, $L=\sqrt{64\pi^2+144}\approx27.8\text{ cm}$.`}
          </p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 3</div>
        <div className="exm-title">Non-orthogonal coordinates on a paraboloid</div>
        <p>{T`On $z=x^2+y^2$, find the angle between the $x$- and $y$-coordinate curves at $(1,1,2)$, and the length of the curve $y=x$ from $(0,0,0)$ to $(1,1,2)$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`From the catalogue, $E=1+4x^2$, $F=4xy$, $G=1+4y^2$. At $(1,1)$: $E=5$, $F=4$, $G=5$, so`}</p>
          <Fml>{T`$$\cos\omega=\frac{F}{\sqrt{EG}}=\frac45,\qquad\omega\approx36.9^\circ.$$`}</Fml>
          <p>{T`For the curve take $x=y=t$, $0\le t\le1$, so $x'=y'=1$ and`}</p>
          <Fml>{T`$$E+2F+G=(1+4t^2)+8t^2+(1+4t^2)=2+16t^2,\qquad L=\int_0^1\sqrt{2+16t^2}\,dt=\sqrt2\int_0^1\sqrt{1+8t^2}\,dt.$$`}</Fml>
          <p>
            {T`With $\int\sqrt{1+k^2t^2}\,dt=\tfrac12\bigl[t\sqrt{1+k^2t^2}+\tfrac1k\operatorname{arsinh}(kt)\bigr]$ and $k=2\sqrt2$:`}
          </p>
          <Fml>{T`$$L=\frac{\sqrt2}{2}\Bigl[3+\frac{1}{2\sqrt2}\operatorname{arsinh}(2\sqrt2)\Bigr]=\frac{3\sqrt2}{2}+\frac{\ln\!\bigl(2\sqrt2+3\bigr)}{4}\approx2.12+0.44=2.56.$$`}</Fml>
          <p>{T`Sanity check: the straight chord from $(0,0,0)$ to $(1,1,2)$ has length $\sqrt6\approx2.45$, slightly shorter, as it must be.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 4</div>
        <div className="exm-title">Surface of revolution: the area of a torus</div>
        <p>{T`The torus with tube radius $b$ and centre-circle radius $a>b$ is $\mathbf r(u,v)=\bigl((a+b\cos v)\cos u,\,(a+b\cos v)\sin u,\,b\sin v\bigr)$, $0\le u,v\le2\pi$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`This is a surface of revolution with $f(v)=a+b\cos v>0$ and $g(v)=b\sin v$. From the catalogue, $E=f^2=(a+b\cos v)^2$, $F=0$, $G=f'^2+g'^2=b^2\sin^2v+b^2\cos^2v=b^2$. Therefore`}</p>
          <Fml>{T`$$A=\int_0^{2\pi}\!\!\int_0^{2\pi}(a+b\cos v)\,b\;dv\,du=2\pi\cdot b\cdot2\pi a=4\pi^2ab.$$`}</Fml>
          <p>{T`This agrees with Pappus's theorem: area $=(\text{length of the generating circle } 2\pi b)\times(\text{distance travelled by its centroid } 2\pi a)$.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 5 — Counterexample</div>
        <div className="exm-title">The coefficients are not geometric invariants</div>
        <p>{T`Reparametrize the unit cylinder by $u=2s$, $v=t$: $\tilde{\mathbf r}(s,t)=(\cos2s,\sin2s,t)$, $0\le s\le\pi$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`$\tilde{\mathbf r}_s=(-2\sin2s,\,2\cos2s,\,0)$, so $\tilde E=4$, $\tilde F=0$, $\tilde G=1$ — different from $E=G=1$. Yet the area of one turn of unit height is`}</p>
          <Fml>{T`$$\int_0^1\!\!\int_0^{\pi}\sqrt{4\cdot1-0}\;ds\,dt=2\pi,$$`}</Fml>
          <p>{T`exactly as before. The lesson: never compare $E,F,G$ from two parametrizations and conclude the surfaces differ. Compare lengths, angles and areas — or the curvatures of the next topic.`}</p>
        </div>
      </div>
    </section>
  );
}

function SectionMistakes() {
  return (
    <section className="section" id="sg-mistakes">
      <div className="sec-badge">Section 1.8</div>
      <h2 className="sec-title">Limitations and Common Mistakes</h2>

      <div className="box warn">
        <div className="box-lbl">Common mistakes</div>
        <ul>
          <li>{T`Dropping the factor $2$ on the middle term: $ds^2=E\,du^2+2F\,du\,dv+G\,dv^2$, not $E\,du^2+F\,du\,dv+G\,dv^2$.`}</li>
          <li>{T`Forgetting the square root in the area element: $dA=\sqrt{EG-F^2}\,du\,dv$, not $(EG-F^2)\,du\,dv$.`}</li>
          <li>{T`Assuming perpendicular parameter directions are perpendicular on the surface. Only $F=0$ guarantees that for the coordinate curves; for other directions use the full inner-product formula.`}</li>
          <li>{T`Treating $E,F,G$ as properties of the surface rather than of the parametrization (Example 5).`}</li>
          <li>{T`Integrating over a domain that covers part of the surface twice, e.g. $0\le\theta\le4\pi$ on a sphere — the injectivity assumption exists for a reason.`}</li>
          <li>{T`Mixing up the order of the sphere's coordinates: with $(\varphi,\theta)$ the metric is $R^2d\varphi^2+R^2\sin^2\varphi\,d\theta^2$; swapping the roles swaps $E$ and $G$.`}</li>
        </ul>
      </div>

      <div className="box def">
        <div className="box-lbl">Limitations of the first fundamental form</div>
        <ul>
          <li>{T`It is blind to the embedding: the plane and the cylinder have the same metric. Normal curvature, principal and mean curvature require the second fundamental form.`}</li>
          <li>{T`It is defined only at regular points. At coordinate singularities (poles of the sphere, origin of polar coordinates) switch to another chart; at genuine singular points (a cone's apex) there is no tangent plane at all.`}</li>
          <li>{T`Closed-form arc lengths are rare. Expect integrals like $\int\sqrt{1+k^2t^2}\,dt$ or elliptic integrals; numerical integration is often the practical answer.`}</li>
        </ul>
      </div>

      <div className="sum-grid">
        <div className="sum-card">
          <div className="sc-lbl">Coefficients</div>
          <p>{T`$E=\mathbf r_u\!\cdot\!\mathbf r_u,\;F=\mathbf r_u\!\cdot\!\mathbf r_v,\;G=\mathbf r_v\!\cdot\!\mathbf r_v$`}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">Line element</div>
          <p>{T`$ds^2=E\,du^2+2F\,du\,dv+G\,dv^2$`}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">Coordinate angle</div>
          <p>{T`$\cos\omega=F/\sqrt{EG}$`}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">Area element</div>
          <p>{T`$dA=\sqrt{EG-F^2}\,du\,dv$`}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">Regularity</div>
          <p>{T`$\mathbf r_u\times\mathbf r_v\neq\mathbf 0\iff EG-F^2>0$`}</p>
        </div>
        <div className="sum-card">
          <div className="sc-lbl">Change of parameters</div>
          <p>{T`$\tilde g=J^{T}gJ$, $\;\sqrt{\det\tilde g}=\sqrt{\det g}\,|\det J|$`}</p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Topic 2: locked until Topic 1 quiz ─────────────────── */

function TopicTwo({ unlocked, topicOnePct }) {
  return (
    <section className="section" id="sg-curvature">
      <div className="sec-badge">Curvature &amp; Geodesics</div>
      <h2 className="sec-title">Surface Curvature and Geodesics</h2>
      {unlocked ? (
        <div className="box tip">
          <div className="box-lbl">Unlocked</div>
          <p>
            {T`You passed the Surface Metrics quiz. This topic — the second fundamental form, principal, Gaussian and mean curvature, and elementary geodesics on planes, cylinders and spheres — is being added next, together with its own 20-question quiz.`}
          </p>
        </div>
      ) : (
        <div className="box warn">
          <div className="box-lbl">🔒 Locked</div>
          <p>
            {`Pass the Surface Metrics and the First Fundamental Form quiz with at least ${SECTION_QUIZ_PASS_PERCENT}% to unlock this topic.`}
            {topicOnePct !== null ? ` Your best score so far: ${topicOnePct}%.` : " You have not attempted it yet."}
          </p>
          <p>
            <a href="#mcq-sg-metric" style={{ color: "var(--gold)", fontWeight: 600 }}>
              Go to the Surface Metrics quiz →
            </a>
          </p>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────── Page ─────────────────────────────── */

function SurfaceGeometryPage() {
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
          <span className="guide-part-title">Geometry of Surfaces — Surface Metrics, Curvature &amp; Geodesics</span>
        </div>
        <BookmarkButton id={SECTION_ID} title="Geometry of Surfaces" path={PAGE_PATH} />
      </div>

      <StudyGuideShell guideClass="partial-derivatives-guide" title="Geometry of Surfaces">
        <Sidebar />
        <main className="main">
          <Header />
          <TableOfContents />
          <OpeningNote />
          <Divider />
          <TopicOneIntro />
          <SectionRegular />
          <SectionFFF />
          <SectionLengthAngle />
          <SectionArea />
          <SectionReparam />
          <SectionCatalogue />
          <SectionExamples />
          <SectionMistakes />
          <Divider />
          <GuideMcqSection
            id="mcq-sg-metric"
            badge="Checkpoint"
            title="Surface Metrics and the First Fundamental Form — Quiz"
            scoreId="score-sg-metric"
            section={TOPIC1_QUIZ_KEY}
            questions={SG_METRIC_QUIZ}
          />
          <Divider />
          <TopicTwo unlocked={topicTwoUnlocked} topicOnePct={topicOnePct} />
          <footer className="pg-foot">Geometry of Surfaces · Rendered with MathJax 3</footer>
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

export default SurfaceGeometryPage;
