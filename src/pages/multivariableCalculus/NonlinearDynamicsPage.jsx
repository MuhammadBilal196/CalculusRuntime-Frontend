import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { ND_PHASE_QUIZ } from "../../data/mvNonlinearDynamicsQuizzes";
import LyapunovStabilityTopic from "./LyapunovStabilityTopic";
import {
  getQuizAttemptPercent,
  guideQuizId,
  SECTION_QUIZ_PASS_PERCENT,
} from "../../data/sectionQuizGates";
import "./PartialDerivativesGuide.css";
import "./GuidePart.css";

/**
 * Nonlinear Dynamical Systems — module page (Multivariable Calculus).
 * Topic 1: Phase Planes and Local Stability  (quiz key "nd-phase")
 * Topic 2: Lyapunov Stability Methods        (quiz key "nd-lyapunov"; theory always open,
 *          quiz unlocks after the Topic 1 quiz is passed at 80%)
 */

const T = String.raw;
const SECTION_ID = "nonlinear-dynamics";
const PAGE_PATH = "/multivariable-calculus/nonlinear-dynamics";
const TOPIC1_QUIZ_KEY = "nd-phase";

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
        <div className="sb-title">Nonlinear Dynamical Systems</div>
      </div>
      <div className="sb-group">Phase Planes</div>
      <a className="sb-link" href="#nd-objectives">Objectives &amp; Prerequisites</a>
      <a className="sb-link" href="#nd-phase-plane">Autonomous Systems &amp; Phase Planes</a>
      <a className="sb-link" href="#nd-nullclines">Equilibria &amp; Nullclines</a>
      <a className="sb-link" href="#nd-linearization">Jacobian Linearization</a>
      <a className="sb-link" href="#nd-classification">Classifying Equilibria</a>
      <a className="sb-link" href="#nd-inconclusive">When Linearization Fails</a>
      <a className="sb-link" href="#nd-examples">Worked Examples</a>
      <a className="sb-link" href="#nd-mistakes">Limitations &amp; Mistakes</a>
      <a className="sb-link" href="#mcq-nd-phase"><span className="sn">✎</span>Phase Planes Quiz</a>
      <div className="sb-group">Lyapunov Methods</div>
      <a className="sb-link" href="#nd-lyapunov">Lyapunov Stability Methods</a>
      <a className="sb-link" href="#nd2-definite">Positive-Definite Functions</a>
      <a className="sb-link" href="#nd2-theorems">Lyapunov's Theorems</a>
      <a className="sb-link" href="#nd2-global">Local vs Global Stability</a>
      <a className="sb-link" href="#nd2-lasalle">Invariant Sets &amp; LaSalle</a>
      <a className="sb-link" href="#nd2-choosing">Choosing a Lyapunov Function</a>
      <a className="sb-link" href="#nd2-examples">Worked Examples</a>
      <a className="sb-link" href="#nd2-mistakes">Limitations &amp; Mistakes</a>
      <a className="sb-link" href="#mcq-nd-lyapunov"><span className="sn">✎</span>Lyapunov Methods Quiz</a>
    </nav>
  );
}

function Header() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">Multivariable Calculus · Additional Depth</div>
      <h1 className="ch-title">Nonlinear Dynamical Systems</h1>
      <p className="ch-sub">Phase Planes &amp; Local Stability · Lyapunov Stability Methods</p>
    </header>
  );
}

function TableOfContents() {
  return (
    <nav className="toc">
      <div className="toc-h">Contents</div>
      <div className="toc-grid">
        <a className="toc-a" href="#nd-objectives"><span className="tn">1.0</span>Objectives &amp; Prerequisites</a>
        <a className="toc-a" href="#nd-phase-plane"><span className="tn">1.1</span>Autonomous Systems &amp; Phase Planes</a>
        <a className="toc-a" href="#nd-nullclines"><span className="tn">1.2</span>Equilibria &amp; Nullclines</a>
        <a className="toc-a" href="#nd-linearization"><span className="tn">1.3</span>Jacobian Linearization</a>
        <a className="toc-a" href="#nd-classification"><span className="tn">1.4</span>Classifying Equilibria</a>
        <a className="toc-a" href="#nd-inconclusive"><span className="tn">1.5</span>When Linearization Fails</a>
        <a className="toc-a" href="#nd-examples"><span className="tn">1.6</span>Worked Examples</a>
        <a className="toc-a" href="#nd-mistakes"><span className="tn">1.7</span>Limitations &amp; Common Mistakes</a>
        <a className="toc-a" href="#mcq-nd-phase"><span className="tn">✎</span>Phase Planes Quiz (20)</a>
        <a className="toc-a" href="#nd-lyapunov"><span className="tn">2</span>Lyapunov Stability Methods</a>
        <a className="toc-a" href="#mcq-nd-lyapunov"><span className="tn">✎</span>Lyapunov Methods Quiz (20)</a>
      </div>
    </nav>
  );
}

function OpeningNote() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>How this module works:</strong>{" "}
        {"This module has two topics. Read Phase Planes and Local Stability and pass its 20-question quiz with at least 80%. You can read Lyapunov Stability Methods at any time, but its quiz unlocks only after you pass the first one. The first topic studies equilibria by linearizing; the second settles the cases linearization cannot, using energy-like functions."}
      </p>
    </div>
  );
}

/* ─────────────────────── Topic 1: Phase Planes ─────────────────────── */

function TopicOneIntro() {
  return (
    <section className="section" id="nd-objectives">
      <div className="sec-badge">Phase Planes · Start here</div>
      <h2 className="sec-title">Phase Planes and Local Stability</h2>
      <p>
        {T`Most nonlinear differential equations cannot be solved in closed form, yet we can still say a great deal about them. Instead of formulas for $x(t)$ and $y(t)$, we draw the `}
        <strong>phase portrait</strong>
        {T`: the family of curves traced in the $(x,y)$-plane. Its skeleton is the set of equilibria, and near each equilibrium the Jacobian matrix — a purely multivariable-calculus object — usually tells us what happens.`}
      </p>

      <div className="box def">
        <div className="box-lbl">Learning objectives</div>
        <ul>
          <li>{T`find equilibria and nullclines of a planar autonomous system and sketch the direction of flow;`}</li>
          <li>{T`compute the Jacobian at an equilibrium and derive the linearized system;`}</li>
          <li>{T`classify equilibria as nodes, saddles, spirals or centres using eigenvalues, or trace and determinant;`}</li>
          <li>{T`state when linearization is reliable (hyperbolic equilibria) and recognise the cases where it is inconclusive;`}</li>
          <li>{T`interpret phase portraits in models such as pendulums and competing species.`}</li>
        </ul>
      </div>

      <div className="box tip">
        <div className="box-lbl">Prerequisites</div>
        <ul>
          <li>
            {T`Partial derivatives and the Jacobian matrix — `}
            <Link to="/partial-derivatives/1">Partial Derivatives</Link>.
          </li>
          <li>
            {T`First-order Taylor approximation in several variables — `}
            <Link to="/vector-fields-approximation">Vector Fields &amp; Approximation Theory</Link>.
          </li>
          <li>
            {T`Eigenvalues and eigenvectors of $2\times2$ matrices — `}
            <Link to="/linear-algebra/eigen/1">Eigenvalues &amp; Eigenvectors</Link>. Linear systems $\mathbf x'=A\mathbf x$ belong to Linear Algebra; this module is about nonlinear stability.
          </li>
          <li>
            {T`First-order ODEs and exponential solutions — `}
            <Link to="/differential-equations/1">Ordinary Differential Equations</Link>.
          </li>
        </ul>
      </div>

      <div className="box warn">
        <div className="box-lbl">Standing assumptions</div>
        {T`We study planar autonomous systems $x'=f(x,y)$, $y'=g(x,y)$ (no explicit $t$ on the right), with $f$ and $g$ of class $C^1$ on an open set $U\subseteq\mathbb R^2$. Then through every point of $U$ passes exactly one solution (existence and uniqueness, stated without proof). We write $\mathbf x=(x,y)$, $\mathbf F=(f,g)$ and $\mathbf x'=\mathbf F(\mathbf x)$.`}
      </div>
    </section>
  );
}

function SectionPhasePlane() {
  return (
    <section className="section" id="nd-phase-plane">
      <div className="sec-badge">Section 1.1</div>
      <h2 className="sec-title">Autonomous Systems and the Phase Plane</h2>
      <p>
        {T`A solution $t\mapsto(x(t),y(t))$ traces a curve in the plane called a `}
        <strong>trajectory</strong>
        {T` (or orbit). At each point the velocity of the trajectory is the vector $\mathbf F(x,y)$, so the system is literally a vector field and trajectories are its flow lines — exactly the pictures from the `}
        <Link to="/vectorfield">Vector Field Visualizer</Link>
        {T`.`}
      </p>

      <div className="box thm">
        <div className="box-lbl">Facts about trajectories</div>
        <ul>
          <li>{T`Trajectories never cross: two crossing trajectories would give two solutions with the same initial point, contradicting uniqueness.`}</li>
          <li>{T`Because the system is autonomous, shifting time does not change the trajectory: if $\mathbf x(t)$ is a solution, so is $\mathbf x(t+c)$.`}</li>
          <li>{T`Each trajectory is one of: a single point (an equilibrium), a closed curve (a periodic orbit), or a curve that never repeats.`}</li>
        </ul>
      </div>

      <div className="box def">
        <div className="box-lbl">Definition — Stability of an equilibrium</div>
        {T`An equilibrium $\mathbf p$ is `}
        <strong>stable</strong>
        {T` if for every $\varepsilon>0$ there is $\delta>0$ such that solutions starting within $\delta$ of $\mathbf p$ stay within $\varepsilon$ of $\mathbf p$ for all $t\ge0$. It is `}
        <strong>asymptotically stable</strong>
        {T` if, in addition, nearby solutions satisfy $\mathbf x(t)\to\mathbf p$ as $t\to\infty$. It is `}
        <strong>unstable</strong>
        {T` if it is not stable.`}
      </div>
    </section>
  );
}

function SectionNullclines() {
  return (
    <section className="section" id="nd-nullclines">
      <div className="sec-badge">Section 1.2</div>
      <h2 className="sec-title">Equilibria and Nullclines</h2>

      <div className="box def">
        <div className="box-lbl">Definition</div>
        {T`An `}
        <strong>equilibrium</strong>
        {T` is a point $\mathbf p$ with $\mathbf F(\mathbf p)=\mathbf 0$, i.e. $f(\mathbf p)=g(\mathbf p)=0$. The `}
        <strong>$x$-nullcline</strong>
        {T` is the curve $f=0$, where the flow is vertical; the `}
        <strong>$y$-nullcline</strong>
        {T` is $g=0$, where the flow is horizontal. Equilibria are exactly the intersections of the two nullclines.`}
      </div>

      <h3 className="subsec">Sketching a phase portrait from nullclines</h3>
      <ol className="steps">
        <li>{T`Draw both nullclines and mark their intersections (the equilibria).`}</li>
        <li>{T`The nullclines cut the plane into regions. In each region $f$ and $g$ have constant signs, so the flow points into one quadrant: up-right, up-left, down-right or down-left. Test one point per region.`}</li>
        <li>{T`On the $x$-nullcline draw short vertical arrows (sign of $g$); on the $y$-nullcline short horizontal arrows (sign of $f$).`}</li>
        <li>{T`Classify each equilibrium by linearization (next sections) and join the pieces into trajectories that never cross.`}</li>
      </ol>
    </section>
  );
}

function SectionLinearization() {
  return (
    <section className="section" id="nd-linearization">
      <div className="sec-badge">Section 1.3</div>
      <h2 className="sec-title">Jacobian Linearization</h2>
      <p>{T`Let $\mathbf p$ be an equilibrium and write $\mathbf x=\mathbf p+\mathbf h$ with $\mathbf h$ small. By the multivariable Taylor theorem,`}</p>
      <Fml>{T`$$\mathbf F(\mathbf p+\mathbf h)=\underbrace{\mathbf F(\mathbf p)}_{=\mathbf 0}+J(\mathbf p)\,\mathbf h+o(|\mathbf h|),\qquad J(\mathbf p)=\begin{pmatrix}f_x&f_y\\g_x&g_y\end{pmatrix}_{\mathbf p}.$$`}</Fml>
      <p>{T`Since $\mathbf h'=\mathbf x'=\mathbf F(\mathbf p+\mathbf h)$, dropping the small remainder gives the `}<strong>linearized system</strong></p>
      <Fml>{T`$$\mathbf h'=J(\mathbf p)\,\mathbf h.$$`}</Fml>
      <p>
        {T`Its solutions are combinations of $e^{\lambda t}\mathbf v$, where $\lambda$ are the eigenvalues and $\mathbf v$ the eigenvectors of $J(\mathbf p)$. For a $2\times2$ matrix the eigenvalues are determined by the trace $\tau=\operatorname{tr}J$ and determinant $\Delta=\det J$:`}
      </p>
      <Fml>{T`$$\lambda^2-\tau\lambda+\Delta=0,\qquad \lambda_{1,2}=\frac{\tau\pm\sqrt{\tau^2-4\Delta}}{2},\qquad \lambda_1+\lambda_2=\tau,\quad\lambda_1\lambda_2=\Delta.$$`}</Fml>
    </section>
  );
}

function SectionClassification() {
  return (
    <section className="section" id="nd-classification">
      <div className="sec-badge">Section 1.4</div>
      <h2 className="sec-title">Classifying Equilibria</h2>

      <div className="tbl-wrap">
        <table>
          <thead>
            <tr><th>Condition</th><th>Eigenvalues</th><th>Type</th><th>Stability</th></tr>
          </thead>
          <tbody>
            <tr><td>{T`$\Delta<0$`}</td><td>real, opposite signs</td><td>Saddle</td><td>Unstable</td></tr>
            <tr><td>{T`$\Delta>0,\ \tau^2>4\Delta$`}</td><td>real, same sign</td><td>Node</td><td>{T`Stable if $\tau<0$, unstable if $\tau>0$`}</td></tr>
            <tr><td>{T`$\Delta>0,\ \tau^2=4\Delta$`}</td><td>real, repeated</td><td>Degenerate or star node</td><td>{T`Stable if $\tau<0$, unstable if $\tau>0$`}</td></tr>
            <tr><td>{T`$\Delta>0,\ \tau^2<4\Delta,\ \tau\neq0$`}</td><td>complex, $\operatorname{Re}\lambda=\tau/2$</td><td>Spiral (focus)</td><td>{T`Stable if $\tau<0$, unstable if $\tau>0$`}</td></tr>
            <tr><td>{T`$\Delta>0,\ \tau=0$`}</td><td>purely imaginary</td><td>Centre (for the linear system)</td><td>Inconclusive for nonlinear systems</td></tr>
            <tr><td>{T`$\Delta=0$`}</td><td>at least one zero</td><td>Non-isolated (linear)</td><td>Inconclusive for nonlinear systems</td></tr>
          </tbody>
        </table>
      </div>

      <div className="box def">
        <div className="box-lbl">Definition — Hyperbolic equilibrium</div>
        {T`An equilibrium is `}
        <strong>hyperbolic</strong>
        {T` if no eigenvalue of $J(\mathbf p)$ has zero real part. In the table, these are saddles, nodes and spirals — everything except the last two rows.`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Theorem — Linearized stability and Hartman–Grobman (stated without proof)</div>
        <ul>
          <li>{T`If every eigenvalue of $J(\mathbf p)$ has negative real part, $\mathbf p$ is asymptotically stable.`}</li>
          <li>{T`If some eigenvalue has positive real part, $\mathbf p$ is unstable.`}</li>
          <li>{T`If $\mathbf p$ is hyperbolic, then near $\mathbf p$ the nonlinear phase portrait is a continuous deformation of the linear one: saddles stay saddles, nodes stay nodes, spirals stay spirals.`}</li>
        </ul>
      </div>

      <div className="note">
        {T`For a saddle, the eigenvectors give the directions of the stable manifold (trajectories that enter the saddle) and the unstable manifold (trajectories that leave it). For nonlinear systems these become curves tangent to the eigenvectors at $\mathbf p$. They are the separatrices that divide the phase plane into basins.`}
      </div>
    </section>
  );
}

function SectionInconclusive() {
  return (
    <section className="section" id="nd-inconclusive">
      <div className="sec-badge">Section 1.5</div>
      <h2 className="sec-title">When Linearization Is Inconclusive</h2>
      <p>
        {T`At a non-hyperbolic equilibrium, the linear part is balanced on a knife edge, and the neglected higher-order terms decide the outcome. Two standard families show this.`}
      </p>

      <div className="box exm">
        <div className="box-lbl">Counterexample family 1 — Linear centre, three possible outcomes</div>
        <p>{T`Consider $x'=-y+a\,x(x^2+y^2)$, $y'=x+a\,y(x^2+y^2)$ for a constant $a$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Analysis</div>
          <p>{T`At the origin $J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, with $\tau=0$, $\Delta=1$: a linear centre for every $a$. In polar coordinates ($rr'=xx'+yy'$ and $r^2\theta'=xy'-yx'$),`}</p>
          <Fml>{T`$$r'=a\,r^3,\qquad\theta'=1.$$`}</Fml>
          <ul>
            <li>{T`$a<0$: $r$ decreases, so the origin is an asymptotically stable spiral.`}</li>
            <li>{T`$a=0$: $r$ is constant, so the origin is a true centre (stable, not asymptotically).`}</li>
            <li>{T`$a>0$: $r$ increases, so the origin is an unstable spiral.`}</li>
          </ul>
          <p>{T`Same linearization, three different answers.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Counterexample family 2 — A zero eigenvalue</div>
        <p>{T`Compare $x'=x^2,\;y'=-y$ with $x'=-x^3,\;y'=-y$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Analysis</div>
          <p>{T`Both have $J(\mathbf 0)=\begin{pmatrix}0&0\\0&-1\end{pmatrix}$, eigenvalues $0$ and $-1$. In the first system, points with $x>0$ move away, since $x'=x^2>0$: the origin is unstable. In the second, $x'=-x^3$ pushes every $x$ towards $0$: the origin is asymptotically stable. Again the linearization cannot tell them apart.`}</p>
        </div>
      </div>

      <p>
        {T`To settle such cases we need tools that see the whole nonlinear vector field, not just its derivative at one point. Lyapunov functions, the second topic of this module, are exactly such a tool.`}
      </p>
    </section>
  );
}

function SectionExamples() {
  return (
    <section className="section" id="nd-examples">
      <div className="sec-badge">Section 1.6</div>
      <h2 className="sec-title">Worked Examples</h2>

      <div className="box exm">
        <div className="box-lbl">Example 1</div>
        <div className="exm-title">A stable node and its slow direction</div>
        <p>{T`Classify the origin of $x'=-2x+y$, $y'=x-2y$ and describe how trajectories approach it.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`$J=\begin{pmatrix}-2&1\\1&-2\end{pmatrix}$, $\tau=-4$, $\Delta=3$, $\tau^2-4\Delta=4>0$. The eigenvalues are $\lambda=-1$ with eigenvector $(1,1)$ and $\lambda=-3$ with eigenvector $(1,-1)$: a stable node. The general solution is`}</p>
          <Fml>{T`$$\mathbf x(t)=c_1e^{-t}\begin{pmatrix}1\\1\end{pmatrix}+c_2e^{-3t}\begin{pmatrix}1\\-1\end{pmatrix}.$$`}</Fml>
          <p>{T`The $e^{-3t}$ part dies out first, so a typical trajectory approaches the origin tangent to the slow eigenvector $(1,1)$, unless it starts exactly on the line $y=-x$.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 2</div>
        <div className="exm-title">The pendulum, with and without friction</div>
        <p>{T`A pendulum with angle $x$ and angular velocity $y$ satisfies $x'=y$, $y'=-\sin x-cy$ with friction coefficient $c\ge0$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`Equilibria: $y=0$, $\sin x=0$, i.e. $(k\pi,0)$. The Jacobian is $J=\begin{pmatrix}0&1\\-\cos x&-c\end{pmatrix}$.`}</p>
          <ul>
            <li>{T`Hanging down, $(0,0)$: $\tau=-c$, $\Delta=1$. For $0<c<2$, $\tau^2-4\Delta=c^2-4<0$: a stable spiral, so the pendulum swings with decaying amplitude. For $c>2$ it is a stable node (overdamped: no swinging).`}</li>
            <li>{T`Upright, $(\pi,0)$: $\Delta=\cos\pi\cdot1=-1<0$, a saddle, unstable for every $c$. Its stable manifold consists of the special motions that come to rest exactly upright.`}</li>
            <li>{T`Without friction ($c=0$) the hanging equilibrium is a linear centre — inconclusive. The energy $E=\tfrac12y^2+1-\cos x$ is conserved (check: $E'=y\,y'+\sin x\,x'=0$), so trajectories lie on closed level curves of $E$ and the origin is a true centre. This is a first glimpse of a Lyapunov argument.`}</li>
          </ul>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 3 — Application</div>
        <div className="exm-title">Two competing species</div>
        <p>{T`Populations $x,y\ge0$ compete for food: $x'=x(3-x-2y)$, $y'=y(2-x-y)$. Find and classify all equilibria and interpret.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`Nullclines: $x'=0$ on $x=0$ or $x+2y=3$; $y'=0$ on $y=0$ or $x+y=2$. Equilibria: $(0,0)$, $(3,0)$, $(0,2)$, and the intersection of $x+2y=3$ with $x+y=2$, which is $(1,1)$. The Jacobian is`}</p>
          <Fml>{T`$$J(x,y)=\begin{pmatrix}3-2x-2y&-2x\\-y&2-x-2y\end{pmatrix}.$$`}</Fml>
          <div className="tbl-wrap">
            <table>
              <thead><tr><th>Equilibrium</th><th>{T`$J$`}</th><th>Eigenvalues</th><th>Type</th></tr></thead>
              <tbody>
                <tr><td>{T`$(0,0)$`}</td><td>{T`$\begin{pmatrix}3&0\\0&2\end{pmatrix}$`}</td><td>{T`$3,\;2$`}</td><td>Unstable node</td></tr>
                <tr><td>{T`$(3,0)$`}</td><td>{T`$\begin{pmatrix}-3&-6\\0&-1\end{pmatrix}$`}</td><td>{T`$-3,\;-1$`}</td><td>Stable node</td></tr>
                <tr><td>{T`$(0,2)$`}</td><td>{T`$\begin{pmatrix}-1&0\\-2&-2\end{pmatrix}$`}</td><td>{T`$-1,\;-2$`}</td><td>Stable node</td></tr>
                <tr><td>{T`$(1,1)$`}</td><td>{T`$\begin{pmatrix}-1&-2\\-1&-1\end{pmatrix}$`}</td><td>{T`$-1\pm\sqrt2$`}</td><td>Saddle</td></tr>
              </tbody>
            </table>
          </div>
          <p>{T`All four are hyperbolic, so linearization is reliable. Coexistence $(1,1)$ is a saddle: its stable manifold is a separatrix dividing the quadrant into two basins. Starting on one side, species $y$ dies out and $x\to3$; on the other, $x$ dies out and $y\to2$. This is the competitive exclusion principle of ecology, read straight off a phase portrait.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 4</div>
        <div className="exm-title">A double-well system</div>
        <p>{T`Classify the equilibria of $x'=y$, $y'=x-x^3$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`Equilibria: $y=0$ and $x(1-x^2)=0$, i.e. $(0,0)$ and $(\pm1,0)$. $J=\begin{pmatrix}0&1\\1-3x^2&0\end{pmatrix}$.`}</p>
          <ul>
            <li>{T`$(0,0)$: $\Delta=-1$, a saddle.`}</li>
            <li>{T`$(\pm1,0)$: $J=\begin{pmatrix}0&1\\-2&0\end{pmatrix}$, $\tau=0$, $\Delta=2$: a linear centre, so linearization alone is inconclusive.`}</li>
          </ul>
          <p>{T`The function $E=\tfrac12y^2-\tfrac12x^2+\tfrac14x^4$ satisfies $E'=y(x-x^3)+(-x+x^3)y=0$, so it is conserved. Near $(\pm1,0)$ its level curves are closed loops, so those points are true centres. The saddle's stable and unstable manifolds form two "homoclinic" loops enclosing the wells.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 5 — Counterexample</div>
        <div className="exm-title">An unstable spiral surrounded by a stable cycle</div>
        <p>{T`In polar coordinates let $r'=r(1-r^2)$, $\theta'=1$; in Cartesian form $x'=x-y-x(x^2+y^2)$, $y'=x+y-y(x^2+y^2)$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`At the origin $J=\begin{pmatrix}1&-1\\1&1\end{pmatrix}$, with $\tau=2$ and $\Delta=2$: an unstable spiral, and since it is hyperbolic this is reliable. But trajectories do not escape to infinity: for $0<r<1$, $r'>0$; for $r>1$, $r'<0$. Every nonzero trajectory approaches the circle $r=1$, a stable `}<strong>limit cycle</strong>{T`.`}</p>
          <p>{T`Lesson: local stability analysis describes behaviour only near each equilibrium. Global features such as limit cycles are invisible to the Jacobian.`}</p>
        </div>
      </div>
    </section>
  );
}

function SectionMistakes() {
  return (
    <section className="section" id="nd-mistakes">
      <div className="sec-badge">Section 1.7</div>
      <h2 className="sec-title">Limitations and Common Mistakes</h2>

      <div className="box warn">
        <div className="box-lbl">Common mistakes</div>
        <ul>
          <li>{T`Evaluating the Jacobian at a point that is not an equilibrium, or forgetting to evaluate it at all.`}</li>
          <li>{T`Missing equilibria: solve $f=0$ and $g=0$ together, including every factor (e.g. $x=0$ or $3-x-2y=0$).`}</li>
          <li>{T`Declaring a linear centre to be a nonlinear centre. Purely imaginary eigenvalues are inconclusive.`}</li>
          <li>{T`Concluding stability from $\Delta>0$ alone; the sign of $\tau$ matters too.`}</li>
          <li>{T`Mixing up the nullclines: on $f=0$ the motion is vertical, not horizontal.`}</li>
          <li>{T`Drawing trajectories that cross, or that pass through an equilibrium in finite time.`}</li>
        </ul>
      </div>

      <div className="box def">
        <div className="box-lbl">Limitations</div>
        <ul>
          <li>{T`Linearization is local: it says nothing about how big the basin of attraction is, or about limit cycles far from equilibria.`}</li>
          <li>{T`Non-hyperbolic equilibria (zero real part) need higher-order terms, conserved quantities, or Lyapunov functions.`}</li>
          <li>{T`The phase-plane picture is special to two dimensions; in three or more, trajectories can behave chaotically.`}</li>
        </ul>
      </div>

      <div className="sum-grid">
        <div className="sum-card"><div className="sc-lbl">Equilibria</div><p>{T`$f=g=0$; intersections of nullclines`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Linearization</div><p>{T`$\mathbf h'=J(\mathbf p)\mathbf h$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Saddle</div><p>{T`$\Delta<0$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Node vs spiral</div><p>{T`$\Delta>0$: node if $\tau^2\ge4\Delta$, spiral if $\tau^2<4\Delta$; stable iff $\tau<0$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Hyperbolic</div><p>{T`$\operatorname{Re}\lambda\neq0$ for all eigenvalues: linearization is reliable`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Inconclusive</div><p>{T`$\tau=0<\Delta$ (linear centre) or $\Delta=0$`}</p></div>
      </div>
    </section>
  );
}

/* ──────── Topic 2: theory always open, quiz locked until Topic 1 quiz ──────── */

function TopicTwo({ unlocked, topicOnePct }) {
  return (
    <LyapunovStabilityTopic
      quizLocked={!unlocked}
      topicOnePct={topicOnePct}
      passPercent={SECTION_QUIZ_PASS_PERCENT}
    />
  );
}

/* ─────────────────────────────── Page ─────────────────────────────── */

function NonlinearDynamicsPage() {
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
          <span className="guide-part-title">Nonlinear Dynamical Systems — Phase Planes &amp; Lyapunov Stability</span>
        </div>
        <BookmarkButton id={SECTION_ID} title="Nonlinear Dynamical Systems" path={PAGE_PATH} />
      </div>

      <StudyGuideShell guideClass="partial-derivatives-guide" title="Nonlinear Dynamical Systems">
        <Sidebar />
        <main className="main">
          <Header />
          <TableOfContents />
          <OpeningNote />
          <Divider />
          <TopicOneIntro />
          <SectionPhasePlane />
          <SectionNullclines />
          <SectionLinearization />
          <SectionClassification />
          <SectionInconclusive />
          <SectionExamples />
          <SectionMistakes />
          <Divider />
          <GuideMcqSection
            id="mcq-nd-phase"
            badge="Checkpoint"
            title="Phase Planes and Local Stability — Quiz"
            scoreId="score-nd-phase"
            section={TOPIC1_QUIZ_KEY}
            questions={ND_PHASE_QUIZ}
          />
          <Divider />
          <TopicTwo unlocked={topicTwoUnlocked} topicOnePct={topicOnePct} />
          <footer className="pg-foot">Nonlinear Dynamical Systems · Rendered with MathJax 3</footer>
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

export default NonlinearDynamicsPage;
