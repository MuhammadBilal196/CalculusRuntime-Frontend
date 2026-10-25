import { Link } from "react-router-dom";
import { GuideMcqSection } from "../../components/GuideMcq";
import { MD_REYNOLDS_QUIZ } from "../../data/mvMovingDomainsQuizzes";

/**
 * Integration on Moving Domains — second topic: Reynolds Transport Theorem.
 * The theory is always visible. The quiz is shown but locked (greyed out, not clickable)
 * until the Coarea Formula quiz is passed — pass quizLocked from MovingDomainsPage.
 * Quiz key: "md-reynolds" (stored as guide-mcq-md-reynolds).
 */

const T = String.raw;

function Fml({ children }) {
  return <div className="fml">{children}</div>;
}

function Intro() {
  return (
    <section className="section" id="md-reynolds">
      <div className="sec-badge">Reynolds Transport · Start here</div>
      <h2 className="sec-title">Reynolds Transport Theorem</h2>
      <p>
        {T`How fast does the mass of a balloon change as it inflates? How fast does the heat inside a melting ice region change? Both questions differentiate an integral whose `}
        <em>region</em>
        {T` is moving. The answer has two parts: the integrand changes in time, and the boundary sweeps new material in or out. The `}
        <strong>Reynolds Transport Theorem</strong>
        {T` makes this precise, and it is the bridge between "laws for a fixed lump of matter" and "equations at a point" in fluid mechanics, heat transfer and continuum physics.`}
      </p>

      <div className="box def">
        <div className="box-lbl">Learning objectives</div>
        <ul>
          <li>{T`differentiate one-dimensional integrals with moving endpoints (the Leibniz rule);`}</li>
          <li>{T`describe a moving region by its flow map and boundary velocity, and explain why only the normal velocity matters;`}</li>
          <li>{T`state and use the Reynolds Transport Theorem in volume and boundary-flux form;`}</li>
          <li>{T`distinguish fixed, material and general moving control volumes and write the correct flux for each;`}</li>
          <li>{T`derive conservation statements such as the continuity equation and mass balances for tanks.`}</li>
        </ul>
      </div>

      <div className="box tip">
        <div className="box-lbl">Prerequisites</div>
        <ul>
          <li>
            {T`Differentiation under the integral sign — `}
            <Link to="/leibniz-rule/1">Differentiation Under Integral Sign</Link>.
          </li>
          <li>
            {T`The divergence theorem and $\nabla\cdot\mathbf F$ — `}
            <Link to="/divergence-curl/1">Divergence &amp; Curl</Link>.
          </li>
          <li>
            {T`Jacobians and change of variables — `}
            <Link to="/coordinate-transformations/1">Jacobians &amp; Change of Variables</Link>.
          </li>
          <li>
            {T`Flux integrals $\iint\mathbf F\cdot\mathbf n\,dS$ — `}
            <Link to="/coordinate-transformations/2">Flux Integrals over General Surfaces</Link>.
          </li>
          <li>{T`The sublevel-set derivative from the Coarea topic above, which this theorem generalises.`}</li>
        </ul>
      </div>

      <div className="box warn">
        <div className="box-lbl">Standing assumptions</div>
        {T`$\Omega_0\subseteq\mathbb R^n$ ($n=2$ or $3$) is a bounded region with piecewise smooth boundary. The moving region is $\Omega_t=\boldsymbol\varphi_t(\Omega_0)$, where the `}
        <strong>flow map</strong>
        {T` $(\mathbf X,t)\mapsto\boldsymbol\varphi_t(\mathbf X)$ is $C^1$, each $\boldsymbol\varphi_t$ is one-to-one with $C^1$ inverse, $\boldsymbol\varphi_0$ is the identity, and the Jacobian $J(\mathbf X,t)=\det D\boldsymbol\varphi_t(\mathbf X)$ is positive. The integrand $f(\mathbf x,t)$ and $\partial f/\partial t$ are continuous. Topology changes (regions splitting or merging) and discontinuous integrands (shocks) are excluded.`}
      </div>
    </section>
  );
}

function Leibniz() {
  return (
    <section className="section" id="md2-leibniz">
      <div className="sec-badge">Section 2.1</div>
      <h2 className="sec-title">Warm-up: Moving Endpoints in One Dimension</h2>

      <div className="box thm">
        <div className="box-lbl">Theorem — Leibniz rule</div>
        {T`If $a(t),b(t)$ are $C^1$ and $f,f_t$ are continuous, then
        $$\frac{d}{dt}\int_{a(t)}^{b(t)}f(x,t)\,dx=\int_{a(t)}^{b(t)}\frac{\partial f}{\partial t}\,dx\;+\;f(b,t)\,b'(t)\;-\;f(a,t)\,a'(t).$$`}
        <div className="sol">
          <div className="sol-lbl">Proof outline</div>
          <p>{T`Let $\Phi(\alpha,\beta,t)=\int_\alpha^\beta f(x,t)\,dx$. Then $\Phi_\beta=f(\beta,t)$ and $\Phi_\alpha=-f(\alpha,t)$ by the Fundamental Theorem of Calculus, and $\Phi_t=\int_\alpha^\beta f_t\,dx$ by differentiation under the integral sign on a fixed interval. The chain rule applied to $\Phi(a(t),b(t),t)$ gives the formula.`}</p>
        </div>
      </div>

      <p>
        {T`Read the boundary terms as flux. At the right end the outward normal is $+1$ and the endpoint moves with velocity $b'$, so new material $f\,b'\,dt$ is swept in. At the left end the outward normal is $-1$, so the contribution is $f\cdot(-a')$. In both cases it is $f\times(\text{velocity}\cdot\text{outward normal})$ — exactly the structure of the multivariable theorem.`}
      </p>
    </section>
  );
}

function FlowMap() {
  return (
    <section className="section" id="md2-flow">
      <div className="sec-badge">Section 2.2</div>
      <h2 className="sec-title">Moving Regions, Velocity and Expansion</h2>

      <div className="box def">
        <div className="box-lbl">Definition — Velocity of a moving region</div>
        {T`A point that starts at $\mathbf X\in\Omega_0$ is at $\mathbf x=\boldsymbol\varphi_t(\mathbf X)$ at time $t$. Its velocity, written as a function of current position, is
        $$\mathbf v(\mathbf x,t)=\frac{\partial}{\partial t}\boldsymbol\varphi_t(\mathbf X),\qquad \mathbf x=\boldsymbol\varphi_t(\mathbf X).$$
        On the boundary, $\mathbf v\cdot\mathbf n$ (with $\mathbf n$ the outward unit normal) is the `}
        <strong>normal speed</strong>
        {T` of the boundary.`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Lemma — Euler's expansion formula</div>
        {T`$$\frac{\partial J}{\partial t}(\mathbf X,t)=\bigl(\nabla\cdot\mathbf v\bigr)(\boldsymbol\varphi_t(\mathbf X),t)\;J(\mathbf X,t).$$
        So $\nabla\cdot\mathbf v$ is the relative rate at which small volumes grow.`}
        <div className="sol">
          <div className="sol-lbl">Proof outline</div>
          <p>
            {T`Let $A=D\boldsymbol\varphi_t$. Differentiating $\partial_t\boldsymbol\varphi_t=\mathbf v\circ\boldsymbol\varphi_t$ in $\mathbf X$ gives $\partial_tA=(D\mathbf v)\,A$ by the chain rule. Jacobi's formula for the derivative of a determinant, $\partial_t\det A=\det A\cdot\operatorname{tr}(A^{-1}\partial_tA)$, then gives $\partial_tJ=J\operatorname{tr}(A^{-1}(D\mathbf v)A)=J\operatorname{tr}(D\mathbf v)=J\,\nabla\cdot\mathbf v$.`}
          </p>
        </div>
      </div>

      <div className="note">
        {T`Only the boundary motion changes the region, and only its normal part: a point sliding along the boundary does not add or remove anything. That is why two different velocity fields with the same $\mathbf v\cdot\mathbf n$ on $\partial\Omega_t$ give the same answer in the boundary form of the theorem below.`}
      </div>
    </section>
  );
}

function Theorem() {
  return (
    <section className="section" id="md2-theorem">
      <div className="sec-badge">Section 2.3</div>
      <h2 className="sec-title">The Reynolds Transport Theorem</h2>

      <div className="box thm">
        <div className="box-lbl">Theorem — Reynolds Transport Theorem</div>
        {T`Under the standing assumptions,
        $$\frac{d}{dt}\iiint_{\Omega_t}f\,dV=\iiint_{\Omega_t}\Bigl(\frac{\partial f}{\partial t}+\nabla\cdot(f\mathbf v)\Bigr)dV=\iiint_{\Omega_t}\frac{\partial f}{\partial t}\,dV+\iint_{\partial\Omega_t}f\,(\mathbf v\cdot\mathbf n)\,dS.$$
        In the plane, replace $dV$ by $dA$ and $dS$ by arc length $ds$.`}
        <div className="sol">
          <div className="sol-lbl">Proof outline</div>
          <ol className="steps">
            <li>{T`Pull back to the fixed region. By change of variables $\mathbf x=\boldsymbol\varphi_t(\mathbf X)$, $dV=J\,dV_{\mathbf X}$:
            $$\iiint_{\Omega_t}f\,dV=\iiint_{\Omega_0}f(\boldsymbol\varphi_t(\mathbf X),t)\,J(\mathbf X,t)\,dV_{\mathbf X}.$$`}</li>
            <li>{T`Differentiate under the integral sign — now legitimate, because $\Omega_0$ does not move. By the chain rule, $\partial_t\bigl[f(\boldsymbol\varphi_t(\mathbf X),t)\bigr]=f_t+\mathbf v\cdot\nabla f$, and by Euler's formula $\partial_tJ=(\nabla\cdot\mathbf v)J$:
            $$\frac{d}{dt}\iiint_{\Omega_t}f\,dV=\iiint_{\Omega_0}\bigl(f_t+\mathbf v\cdot\nabla f+f\,\nabla\cdot\mathbf v\bigr)J\,dV_{\mathbf X}.$$`}</li>
            <li>{T`Push forward. Since $\mathbf v\cdot\nabla f+f\,\nabla\cdot\mathbf v=\nabla\cdot(f\mathbf v)$, changing variables back gives the volume form.`}</li>
            <li>{T`Apply the divergence theorem to $\iiint\nabla\cdot(f\mathbf v)\,dV$ to obtain the boundary form.`}</li>
          </ol>
        </div>
      </div>

      <div className="box def">
        <div className="box-lbl">Two terms, two causes</div>
        <ul>
          <li>{T`$\displaystyle\iiint\frac{\partial f}{\partial t}\,dV$: the integrand changes at fixed points of space.`}</li>
          <li>{T`$\displaystyle\iint f\,(\mathbf v\cdot\mathbf n)\,dS$: the boundary sweeps in ($\mathbf v\cdot\mathbf n>0$) or gives up ($\mathbf v\cdot\mathbf n<0$) the quantity $f$ at the rate of its normal speed.`}</li>
        </ul>
        {T`Special cases: $f\equiv1$ gives $V'(t)=\iint\mathbf v\cdot\mathbf n\,dS$; a fixed region gives $\frac{d}{dt}\iiint f=\iiint f_t$; and with $\Omega_t=\{u<t\}$, $\mathbf v\cdot\mathbf n=1/|\nabla u|$ and $f$ independent of $t$, we recover the Coarea sublevel derivative.`}
      </div>
    </section>
  );
}

function ControlVolumes() {
  return (
    <section className="section" id="md2-control">
      <div className="sec-badge">Section 2.4</div>
      <h2 className="sec-title">Fixed versus Moving Control Volumes</h2>
      <p>
        {T`In a fluid with velocity field $\mathbf u$ and density $\rho$, the region we integrate over (the control volume) may be fixed, may move with the fluid, or may move in some other prescribed way with velocity $\mathbf w$ on its boundary. Reynolds' theorem applies to all three; what changes is which velocity appears.`}
      </p>

      <div className="tbl-wrap">
        <table>
          <thead>
            <tr><th>Control volume</th><th>Boundary velocity</th><th>Does fluid cross the boundary?</th><th>Rate of change of mass</th></tr>
          </thead>
          <tbody>
            <tr><td>Fixed</td><td>{T`$\mathbf 0$`}</td><td>Yes</td><td>{T`$\displaystyle-\iint\rho\,\mathbf u\cdot\mathbf n\,dS$`}</td></tr>
            <tr><td>Material (moves with fluid)</td><td>{T`$\mathbf u$`}</td><td>No</td><td>{T`$0$`}</td></tr>
            <tr><td>General moving</td><td>{T`$\mathbf w$`}</td><td>{T`Yes, at relative velocity $\mathbf u-\mathbf w$`}</td><td>{T`$\displaystyle-\iint\rho\,(\mathbf u-\mathbf w)\cdot\mathbf n\,dS$`}</td></tr>
          </tbody>
        </table>
      </div>

      <div className="box thm">
        <div className="box-lbl">Mass conservation and the general control-volume balance</div>
        {T`(i) If every material volume keeps its mass, Reynolds with $\mathbf v=\mathbf u$ gives $\iiint(\rho_t+\nabla\cdot(\rho\mathbf u))\,dV=0$ for every region, so
        $$\frac{\partial\rho}{\partial t}+\nabla\cdot(\rho\mathbf u)=0,$$
        the continuity equation you met in `}
        <Link to="/multivariable-calculus/potential-theory">Potential Theory</Link>
        {T`. (ii) For a control volume whose boundary moves with velocity $\mathbf w$, Reynolds with $\mathbf v=\mathbf w$ and then the continuity equation give
        $$\frac{d}{dt}\iiint_{\Omega_t}\rho\,dV=\iiint\rho_t\,dV+\iint\rho\,\mathbf w\cdot\mathbf n\,dS=-\iint_{\partial\Omega_t}\rho\,(\mathbf u-\mathbf w)\cdot\mathbf n\,dS.$$
        Mass changes only by fluid crossing the boundary relative to it.`}
      </div>
    </section>
  );
}

function Examples() {
  return (
    <section className="section" id="md2-examples">
      <div className="sec-badge">Section 2.5</div>
      <h2 className="sec-title">Worked Examples</h2>

      <div className="box exm">
        <div className="box-lbl">Example 1</div>
        <div className="exm-title">Leibniz rule with both endpoints moving</div>
        <p>{T`Find $F'(t)$ for $F(t)=\displaystyle\int_t^{2t}\frac{\sin(xt)}{x}\,dx$, $t>0$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`Here $f_t=\cos(xt)$, $b=2t$, $a=t$:`}</p>
          <Fml>{T`$$F'(t)=\int_t^{2t}\cos(xt)\,dx+\frac{\sin(2t^2)}{2t}\cdot2-\frac{\sin(t^2)}{t}\cdot1=\frac{\sin2t^2-\sin t^2}{t}+\frac{\sin2t^2-\sin t^2}{t}=\frac{2(\sin2t^2-\sin t^2)}{t}.$$`}</Fml>
          <p>{T`Check: substituting $x=ty$ gives $F(t)=\int_1^2\frac{\sin(t^2y)}{y}\,dy$ on a fixed interval, so $F'(t)=\int_1^22t\cos(t^2y)\,dy=\frac{2}{t}\bigl(\sin2t^2-\sin t^2\bigr)$. The two methods agree.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 2</div>
        <div className="exm-title">A growing disk with a cooling temperature field</div>
        <p>{T`The temperature is $f(x,y,t)=e^{-t}(x^2+y^2)$ on the disk $D_t$ of radius $R(t)=1+t$. Find the rate of change of the total heat $H(t)=\iint_{D_t}f\,dA$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`Volume term: $\iint f_t\,dA=-e^{-t}\iint r^2\,dA=-e^{-t}\dfrac{\pi R^4}{2}$. Boundary term: on $r=R$, $f=e^{-t}R^2$, $\mathbf v\cdot\mathbf n=R'=1$ and the length is $2\pi R$, so it equals $2\pi e^{-t}R^3$.`}</p>
          <Fml>{T`$$H'(t)=e^{-t}\Bigl(2\pi R^3-\frac{\pi R^4}{2}\Bigr),\qquad R=1+t.$$`}</Fml>
          <p>{T`Check: $H(t)=e^{-t}\pi R^4/2$ directly, whose derivative is the same. The heat grows while $R<4$ (the disk gains warm material faster than it cools, i.e. $t<3$) and then decays.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 3</div>
        <div className="exm-title">A fixed control volume: what flows in flows out</div>
        <p>{T`Fluid of constant density $\rho=1$ moves with the incompressible velocity $\mathbf u=(x,-y)$. Compute the net flux out of the fixed square $[0,1]^2$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <ul>
            <li>{T`$x=1$, $\mathbf n=(1,0)$: $\mathbf u\cdot\mathbf n=1$, outflow $\int_0^11\,dy=1$.`}</li>
            <li>{T`$y=1$, $\mathbf n=(0,1)$: $\mathbf u\cdot\mathbf n=-1$, inflow $-1$.`}</li>
            <li>{T`$x=0$: $\mathbf u\cdot\mathbf n=-x=0$. $\;y=0$: $\mathbf u\cdot\mathbf n=y=0$. No flux.`}</li>
          </ul>
          <p>{T`Net outflow $=0$, so $\dfrac{d}{dt}\iint\rho\,dA=0$, consistent with $\nabla\cdot\mathbf u=0$. Fluid enters through the top and leaves through the right side, but the mass inside never changes.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 4</div>
        <div className="exm-title">An expanding balloon as a material volume</div>
        <p>{T`Gas fills a ball of radius $R(t)=1+t$ and moves with velocity $\mathbf u(\mathbf x,t)=\dfrac{\mathbf x}{1+t}$, with uniform density $\rho(t)=(1+t)^{-3}$. Show that the mass is constant and that $\rho$ satisfies the continuity equation.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`On $|\mathbf x|=R$, $\mathbf u\cdot\mathbf n=\dfrac{R}{1+t}=1=R'$, so the boundary moves with the gas: a material volume. By Reynolds,`}</p>
          <Fml>{T`$$M'(t)=\underbrace{\tfrac43\pi R^3\rho'}_{=-\frac{4\pi}{1+t}}+\underbrace{\rho\,R'\cdot4\pi R^2}_{=+\frac{4\pi}{1+t}}=0.$$`}</Fml>
          <p>{T`Pointwise, $\nabla\cdot\mathbf u=\dfrac{3}{1+t}$, so $\rho_t+\nabla\cdot(\rho\mathbf u)=-3(1+t)^{-4}+(1+t)^{-3}\cdot\dfrac{3}{1+t}=0$. The gas expands ($\nabla\cdot\mathbf u>0$), it thins out, and its mass stays the same.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 5 — Application</div>
        <div className="exm-title">Filling a tank: a moving control volume</div>
        <p>{T`A tank has constant cross-sectional area $A=2\text{ m}^2$. Water ($\rho$ constant) enters through a pipe at $Q_{\text{in}}=0.05\text{ m}^3/\text{s}$ and leaves through a drain at $Q_{\text{out}}=0.03\text{ m}^3/\text{s}$. How fast does the water level $h(t)$ rise?`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`Take the control volume to be the water itself, from the floor up to the free surface. Its top moves with the surface ($\mathbf w\cdot\mathbf n=h'$) and water does not cross it, so $(\mathbf u-\mathbf w)\cdot\mathbf n=0$ there. The walls and floor are fixed, and fluid crosses only at the two pipe openings, contributing $-\rho Q_{\text{in}}$ (inflow) and $+\rho Q_{\text{out}}$ (outflow) to $\iint\rho(\mathbf u-\mathbf w)\cdot\mathbf n\,dS$. The general balance gives`}</p>
          <Fml>{T`$$\frac{d}{dt}(\rho A h)=\rho\,(Q_{\text{in}}-Q_{\text{out}})\qquad\Longrightarrow\qquad h'=\frac{Q_{\text{in}}-Q_{\text{out}}}{A}=\frac{0.02}{2}=0.01\text{ m/s}.$$`}</Fml>
          <p>{T`The level rises 1 cm per second, or 0.6 m per minute. The same bookkeeping, with momentum and energy in place of mass, is how engineers analyse pumps, jet engines and rockets.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 6 — Counterexample</div>
        <div className="exm-title">Points move, but the region does not</div>
        <p>{T`The unit disk rotates about the origin: $\mathbf v=\omega(-y,x)$. A student argues that because every boundary point moves, there must be a boundary term. Is that right?`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`On the unit circle $\mathbf n=(x,y)$, so $\mathbf v\cdot\mathbf n=\omega(-xy+xy)=0$. The boundary term vanishes and`}</p>
          <Fml>{T`$$\frac{d}{dt}\iint_{D_t}f\,dA=\iint_{D}\frac{\partial f}{\partial t}\,dA,$$`}</Fml>
          <p>{T`exactly as for a fixed disk. Rotation slides points along the circle without changing the set $D_t=D$. Motion of points is not the same as motion of the region: only the normal velocity counts.`}</p>
        </div>
      </div>
    </section>
  );
}

function Mistakes() {
  return (
    <section className="section" id="md2-mistakes">
      <div className="sec-badge">Section 2.6</div>
      <h2 className="sec-title">Limitations and Common Mistakes</h2>

      <div className="box warn">
        <div className="box-lbl">Common mistakes</div>
        <ul>
          <li>{T`Moving $\frac{d}{dt}$ inside the integral when the region moves, and forgetting the boundary term.`}</li>
          <li>{T`Using the total speed $|\mathbf v|$ instead of the normal speed $\mathbf v\cdot\mathbf n$ (Example 6).`}</li>
          <li>{T`Using the wrong velocity: the boundary velocity $\mathbf w$ moves the region, the fluid velocity $\mathbf u$ carries the material. In a fixed control volume the flux uses $\mathbf u$; in Reynolds' theorem itself $\mathbf v$ is the boundary velocity.`}</li>
          <li>{T`Getting the sign of the normal wrong: $\mathbf n$ is outward, so a growing region has $\mathbf v\cdot\mathbf n>0$.`}</li>
          <li>{T`Forgetting the $\partial f/\partial t$ term when the integrand itself depends on time (Example 2).`}</li>
          <li>{T`Concluding $\nabla\cdot\mathbf u=0$ from constant mass; constant mass of every material volume gives the continuity equation, while constant volume gives $\nabla\cdot\mathbf u=0$.`}</li>
        </ul>
      </div>

      <div className="box def">
        <div className="box-lbl">Limitations</div>
        <ul>
          <li>{T`The flow must be smooth and invertible. Regions that split, merge or develop corners (e.g. drops pinching off) need separate treatment.`}</li>
          <li>{T`If $f$ jumps across a moving surface inside the region (a shock or phase front), an extra jump term appears (Rankine–Hugoniot conditions); this guide assumes $f$ continuous.`}</li>
          <li>{T`Unbounded regions need decay conditions on $f$ for the integrals and their derivatives to exist.`}</li>
        </ul>
      </div>

      <div className="sum-grid">
        <div className="sum-card"><div className="sc-lbl">Leibniz rule</div><p>{T`$\frac{d}{dt}\int_a^bf=\int_a^bf_t+f(b)b'-f(a)a'$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Reynolds (boundary form)</div><p>{T`$\frac{d}{dt}\iiint_{\Omega_t}f=\iiint f_t+\iint f\,\mathbf v\cdot\mathbf n\,dS$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Reynolds (volume form)</div><p>{T`$\frac{d}{dt}\iiint_{\Omega_t}f=\iiint\bigl(f_t+\nabla\cdot(f\mathbf v)\bigr)$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Euler's expansion</div><p>{T`$\partial_tJ=(\nabla\cdot\mathbf v)\,J$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Continuity equation</div><p>{T`$\rho_t+\nabla\cdot(\rho\mathbf u)=0$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Moving control volume</div><p>{T`$\frac{d}{dt}\iiint\rho=-\iint\rho(\mathbf u-\mathbf w)\cdot\mathbf n\,dS$`}</p></div>
      </div>
    </section>
  );
}

function ReynoldsTransportTopic({ quizLocked = false, topicOnePct = null, passPercent = 80 }) {
  const lockHint = `🔒 Locked — pass the Coarea Formula and Level-Set Integration quiz with at least ${passPercent}% to unlock this quiz.`;

  return (
    <>
      <Intro />
      <Leibniz />
      <FlowMap />
      <Theorem />
      <ControlVolumes />
      <Examples />
      <Mistakes />
      <hr className="divider" />

      {quizLocked && (
        <p className="mcq-unlock-hint">
          {topicOnePct !== null
            ? `Your best Coarea Formula score so far: ${topicOnePct}%. `
            : "You have not attempted the Coarea Formula quiz yet. "}
          <a href="#mcq-md-coarea" style={{ color: "var(--gold)", fontWeight: 600 }}>
            Go to the Coarea Formula quiz →
          </a>
        </p>
      )}

      <div
        className={quizLocked ? "mcq-section mcq-section-locked" : undefined}
        data-lock-hint={quizLocked ? lockHint : undefined}
        aria-disabled={quizLocked || undefined}
      >
        <GuideMcqSection
          id="mcq-md-reynolds"
          badge="Checkpoint"
          title="Reynolds Transport Theorem — Quiz"
          scoreId="score-md-reynolds"
          section="md-reynolds"
          questions={MD_REYNOLDS_QUIZ}
        />
      </div>
    </>
  );
}

export default ReynoldsTransportTopic;
