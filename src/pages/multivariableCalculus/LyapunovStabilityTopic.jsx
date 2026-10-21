import { Link } from "react-router-dom";
import { GuideMcqSection } from "../../components/GuideMcq";
import { ND_LYAPUNOV_QUIZ } from "../../data/mvNonlinearDynamicsQuizzes";

/**
 * Nonlinear Dynamical Systems — second topic: Lyapunov Stability Methods.
 * The theory is always visible. The quiz is shown but locked (greyed out, not clickable)
 * until the Phase Planes quiz is passed — pass quizLocked from NonlinearDynamicsPage.
 * Quiz key: "nd-lyapunov" (stored as guide-mcq-nd-lyapunov).
 */

const T = String.raw;

function Fml({ children }) {
  return <div className="fml">{children}</div>;
}

function Intro() {
  return (
    <section className="section" id="nd-lyapunov">
      <div className="sec-badge">Lyapunov Methods · Start here</div>
      <h2 className="sec-title">Lyapunov Stability Methods</h2>
      <p>
        {T`A ball rolling inside a bowl with friction ends up at the bottom, and we know this without solving any equation: its energy is lowest at the bottom and can only decrease. Lyapunov's `}
        <strong>direct method</strong>
        {T` turns this idea into a theorem. Find a function $V$ shaped like a bowl around the equilibrium, check that $V$ decreases along trajectories, and stability follows — even when linearization is inconclusive.`}
      </p>

      <div className="box def">
        <div className="box-lbl">Learning objectives</div>
        <ul>
          <li>{T`test whether a function is positive definite, including quadratic forms;`}</li>
          <li>{T`compute the derivative of $V$ along trajectories without solving the system;`}</li>
          <li>{T`apply Lyapunov's stability, asymptotic-stability and instability theorems;`}</li>
          <li>{T`distinguish local from global stability and estimate regions of attraction from sublevel sets;`}</li>
          <li>{T`use invariant sets and LaSalle's principle when $\dot V$ is only negative semi-definite;`}</li>
          <li>{T`choose candidate functions: energies, weighted quadratics and cost functions of gradient flows.`}</li>
        </ul>
      </div>

      <div className="box tip">
        <div className="box-lbl">Prerequisites</div>
        <ul>
          <li>{T`Phase Planes and Local Stability (above): equilibria, stability definitions, and the inconclusive cases.`}</li>
          <li>
            {T`Gradients and the chain rule along curves — `}
            <Link to="/partial-derivatives/2">Partial Derivatives</Link>.
          </li>
          <li>
            {T`Positive-definite matrices, the Hessian, and gradient descent — `}
            <Link to="/constrained-unconstrained-optimization/1">Constrained &amp; Unconstrained Optimization</Link>.
          </li>
          <li>
            {T`Level sets and sublevel sets — `}
            <Link to="/multivariable-calculus/moving-domains">Integration on Moving Domains</Link>{T` (Coarea topic).`}
          </li>
        </ul>
      </div>

      <div className="box warn">
        <div className="box-lbl">Standing assumptions</div>
        {T`$\mathbf x'=\mathbf F(\mathbf x)$ with $\mathbf F$ of class $C^1$ on an open set $U\subseteq\mathbb R^n$ containing an equilibrium, which we move to the origin: $\mathbf F(\mathbf 0)=\mathbf 0$. Candidate functions $V:U\to\mathbb R$ are $C^1$. Solutions are assumed to exist for all $t\ge0$ while they remain in $U$.`}
      </div>
    </section>
  );
}

function Definite() {
  return (
    <section className="section" id="nd2-definite">
      <div className="sec-badge">Section 2.1</div>
      <h2 className="sec-title">Positive-Definite Functions and the Orbital Derivative</h2>

      <div className="box def">
        <div className="box-lbl">Definition — Definiteness</div>
        {T`On a neighbourhood $U$ of $\mathbf 0$, a function $V$ with $V(\mathbf 0)=0$ is`}
        <ul>
          <li>{T`positive definite if $V(\mathbf x)>0$ for all $\mathbf x\neq\mathbf 0$ in $U$;`}</li>
          <li>{T`positive semi-definite if $V(\mathbf x)\ge0$ on $U$;`}</li>
          <li>{T`negative (semi-)definite if $-V$ is positive (semi-)definite.`}</li>
        </ul>
        {T`A quadratic form $V=\mathbf x^{T}P\mathbf x$ with $P$ symmetric is positive definite iff all eigenvalues of $P$ are positive; for $2\times2$ matrices, iff $p_{11}>0$ and $\det P>0$. This is the same test as for a local minimum with the `}
        <Link to="/constrained-unconstrained-optimization/1">Hessian</Link>
        {T`.`}
      </div>

      <div className="box def">
        <div className="box-lbl">Definition — Derivative along trajectories</div>
        {T`If $\mathbf x(t)$ solves $\mathbf x'=\mathbf F(\mathbf x)$, the chain rule gives
        $$\frac{d}{dt}V(\mathbf x(t))=\nabla V(\mathbf x)\cdot\mathbf x'(t)=\nabla V(\mathbf x)\cdot\mathbf F(\mathbf x)=:\dot V(\mathbf x).$$
        The `}
        <strong>orbital derivative</strong>
        {T` $\dot V=\nabla V\cdot\mathbf F$ is a function of position only, so we can compute it without solving the system. Geometrically, $\dot V<0$ means the vector field crosses each level set of $V$ inward, towards smaller values.`}
      </div>
    </section>
  );
}

function Theorems() {
  return (
    <section className="section" id="nd2-theorems">
      <div className="sec-badge">Section 2.2</div>
      <h2 className="sec-title">Lyapunov's Theorems</h2>

      <div className="box thm">
        <div className="box-lbl">Theorem — Lyapunov's direct method</div>
        {T`Let $V$ be positive definite on a neighbourhood $U$ of $\mathbf 0$.`}
        <ol>
          <li>{T`If $\dot V\le0$ on $U$, then $\mathbf 0$ is `}<strong>stable</strong>{T`.`}</li>
          <li>{T`If $\dot V$ is negative definite on $U$, then $\mathbf 0$ is `}<strong>asymptotically stable</strong>{T`.`}</li>
        </ol>
        {T`Such a $V$ is called a `}
        <strong>Lyapunov function</strong>
        {T` (a strict one in case 2).`}
        <div className="sol">
          <div className="sol-lbl">Proof outline</div>
          <p>{T`(1) Given $\varepsilon>0$ with the closed ball $\overline B_\varepsilon\subseteq U$, let $m>0$ be the minimum of $V$ on the sphere $|\mathbf x|=\varepsilon$ (positive because $V$ is positive definite and the sphere is compact). By continuity choose $\delta$ with $V<m$ on $B_\delta$. A trajectory starting in $B_\delta$ has $V<m$ forever, because $V$ cannot increase, so it can never reach the sphere where $V\ge m$. It stays in $B_\varepsilon$.`}</p>
          <p>{T`(2) Along such a trajectory $V(\mathbf x(t))$ decreases to some limit $c\ge0$. If $c>0$, the trajectory stays in the compact shell $\{c\le V\}\cap\overline B_\varepsilon$, which avoids $\mathbf 0$. On that shell $\dot V\le-k<0$ for some $k$, so $V$ would decrease without bound — a contradiction. Hence $c=0$ and $\mathbf x(t)\to\mathbf 0$.`}</p>
        </div>
      </div>

      <div className="box thm">
        <div className="box-lbl">Theorem — Instability (stated without proof)</div>
        {T`Let $V(\mathbf 0)=0$, and suppose $V$ takes positive values at points arbitrarily close to $\mathbf 0$. If $\dot V$ is positive definite near $\mathbf 0$, then $\mathbf 0$ is unstable: trajectories starting where $V>0$ are pushed to larger $V$ and leave every small neighbourhood.`}
      </div>

      <div className="note">
        {T`These are sufficient conditions. Failing to find a Lyapunov function proves nothing about the equilibrium; it only means the candidates tried did not work.`}
      </div>
    </section>
  );
}

function Global() {
  return (
    <section className="section" id="nd2-global">
      <div className="sec-badge">Section 2.3</div>
      <h2 className="sec-title">Local versus Global Stability</h2>

      <div className="box def">
        <div className="box-lbl">Definition — Region of attraction</div>
        {T`The `}
        <strong>region of attraction</strong>
        {T` (basin) of an asymptotically stable equilibrium is the set of initial points whose trajectories converge to it. The equilibrium is `}
        <strong>globally asymptotically stable</strong>
        {T` if its basin is all of $\mathbb R^n$.`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Theorem — Estimating the basin with sublevel sets</div>
        {T`Suppose $V$ is positive definite and $\dot V<0$ on $D\setminus\{\mathbf 0\}$. If the sublevel set $\Omega_c=\{V\le c\}$ (the connected component containing $\mathbf 0$) is bounded and contained in $D$, then $\Omega_c$ is positively invariant and lies inside the region of attraction.`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Theorem — Global asymptotic stability</div>
        {T`If $V$ is positive definite on all of $\mathbb R^n$, $\dot V<0$ for every $\mathbf x\neq\mathbf 0$, and $V$ is `}
        <strong>radially unbounded</strong>
        {T` ($V(\mathbf x)\to\infty$ as $|\mathbf x|\to\infty$), then $\mathbf 0$ is globally asymptotically stable.`}
        <div className="sol">
          <div className="sol-lbl">Why radial unboundedness matters</div>
          <p>{T`It makes every sublevel set $\{V\le c\}$ bounded, so the previous theorem applies with arbitrarily large $c$. Without it, a sublevel set can be unbounded — for instance $V=\dfrac{x^2}{1+x^2}+y^2$ never exceeds $1+y^2$ along horizontal lines — and a trajectory could slide off to infinity while $V$ still decreases.`}</p>
        </div>
      </div>
    </section>
  );
}

function LaSalle() {
  return (
    <section className="section" id="nd2-lasalle">
      <div className="sec-badge">Section 2.4</div>
      <h2 className="sec-title">Invariant Sets and LaSalle's Principle</h2>
      <p>
        {T`Physical energy functions often give only $\dot V\le0$: friction removes energy only while something moves. LaSalle's principle recovers asymptotic stability in many such cases.`}
      </p>

      <div className="box def">
        <div className="box-lbl">Definition — Invariant set</div>
        {T`A set $M$ is `}
        <strong>invariant</strong>
        {T` if every trajectory that starts in $M$ stays in $M$ for all time (forward and backward); `}
        <strong>positively invariant</strong>
        {T` if it stays in $M$ for all $t\ge0$. Equilibria, periodic orbits and bounded sublevel sets of a Lyapunov function are standard examples.`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Theorem — LaSalle's invariance principle (stated without proof)</div>
        {T`Let $K$ be a compact, positively invariant set and $V$ a $C^1$ function with $\dot V\le0$ on $K$. Let $E=\{\mathbf x\in K:\dot V(\mathbf x)=0\}$ and let $M$ be the largest invariant set contained in $E$. Then every trajectory starting in $K$ approaches $M$ as $t\to\infty$. In particular, if $M=\{\mathbf 0\}$, then $\mathbf 0$ attracts every point of $K$.`}
      </div>

      <h3 className="subsec">How to use it</h3>
      <ol className="steps">
        <li>{T`Compute $\dot V$ and find the set $E$ where it vanishes.`}</li>
        <li>{T`Ask which trajectories can stay inside $E$ forever: substitute the equations of $E$ into the system.`}</li>
        <li>{T`If only the equilibrium survives, conclude convergence on every compact positively invariant set (e.g. a bounded sublevel set of $V$).`}</li>
      </ol>
    </section>
  );
}

function Choosing() {
  return (
    <section className="section" id="nd2-choosing">
      <div className="sec-badge">Section 2.5</div>
      <h2 className="sec-title">Choosing a Lyapunov Function</h2>
      <p>{T`There is no general recipe, but the following candidates cover most textbook and many practical systems.`}</p>
      <div className="tbl-wrap">
        <table>
          <thead><tr><th>Candidate</th><th>When to try it</th><th>Typical $\dot V$</th></tr></thead>
          <tbody>
            <tr><td>{T`$x^2+y^2$`}</td><td>Rotationally symmetric or "odd power" systems</td><td>{T`$2x\,x'+2y\,y'$`}</td></tr>
            <tr><td>{T`$ax^2+by^2$`}</td><td>When cross terms in $\dot V$ need to cancel</td><td>Choose $a,b$ to kill $xy$ terms</td></tr>
            <tr><td>{T`$\mathbf x^{T}P\mathbf x$`}</td><td>{T`Linear(ized) systems: solve $A^{T}P+PA=-Q$`}</td><td>{T`$-\mathbf x^{T}Q\mathbf x$`}</td></tr>
            <tr><td>Mechanical energy</td><td>Pendulums, springs, oscillators</td><td>{T`$-(\text{friction})\le0$`}</td></tr>
            <tr><td>{T`$h(\mathbf x)-h(\mathbf x^*)$`}</td><td>{T`Gradient flows $\mathbf x'=-\nabla h$`}</td><td>{T`$-|\nabla h|^2$`}</td></tr>
          </tbody>
        </table>
      </div>

      <div className="box thm">
        <div className="box-lbl">The Lyapunov equation for linear systems</div>
        {T`For $\mathbf x'=A\mathbf x$ and $V=\mathbf x^{T}P\mathbf x$, we get $\dot V=\mathbf x^{T}(A^{T}P+PA)\mathbf x$. If every eigenvalue of $A$ has negative real part, then for each positive-definite $Q$ the equation
        $$A^{T}P+PA=-Q$$
        has a unique positive-definite solution $P$ (stated without proof). The same $V$ then works locally for any nonlinear system whose linearization is $A$, which is a second proof of the linearized stability theorem.`}
      </div>
    </section>
  );
}

function Examples() {
  return (
    <section className="section" id="nd2-examples">
      <div className="sec-badge">Section 2.6</div>
      <h2 className="sec-title">Worked Examples</h2>

      <div className="box exm">
        <div className="box-lbl">Example 1</div>
        <div className="exm-title">Settling a case linearization could not</div>
        <p>{T`Determine the stability of the origin for $x'=-x^3$, $y'=-y^3$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`The Jacobian at the origin is the zero matrix, so linearization says nothing. Try $V=x^2+y^2$, which is positive definite and radially unbounded:`}</p>
          <Fml>{T`$$\dot V=2x(-x^3)+2y(-y^3)=-2(x^4+y^4),$$`}</Fml>
          <p>{T`which is negative for every $(x,y)\neq\mathbf 0$. So the origin is globally asymptotically stable.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 2</div>
        <div className="exm-title">The linear-centre family, settled</div>
        <p>{T`Return to $x'=-y+a\,x(x^2+y^2)$, $y'=x+a\,y(x^2+y^2)$ from Phase Planes, Section 1.5.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`With $V=x^2+y^2$: the rotation terms cancel ($2x(-y)+2y(x)=0$), leaving`}</p>
          <Fml>{T`$$\dot V=2a\,(x^2+y^2)^2.$$`}</Fml>
          <ul>
            <li>{T`$a<0$: $\dot V$ is negative definite, so the origin is (globally) asymptotically stable.`}</li>
            <li>{T`$a=0$: $\dot V\equiv0$, so it is stable, but trajectories stay on circles and nothing converges.`}</li>
            <li>{T`$a>0$: $\dot V$ is positive definite, so the origin is unstable by the instability theorem.`}</li>
          </ul>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 3 — Counterexample</div>
        <div className="exm-title">A failed candidate proves nothing</div>
        <p>{T`Study $x'=-x+4y$, $y'=-x-y$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`With $V=x^2+y^2$: $\dot V=2x(-x+4y)+2y(-x-y)=-2x^2+6xy-2y^2$. At $x=y=1$ this equals $2>0$, so this $V$ fails. Does that mean instability? No. Weight the terms so the cross terms cancel: with $V=x^2+4y^2$,`}</p>
          <Fml>{T`$$\dot V=2x(-x+4y)+8y(-x-y)=-2x^2-8y^2<0\quad(\mathbf x\neq\mathbf 0),$$`}</Fml>
          <p>{T`so the origin is globally asymptotically stable (consistent with $\tau=-2$, $\Delta=5$). The choice of $V$ is part of the problem.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 4</div>
        <div className="exm-title">The damped pendulum via energy and LaSalle</div>
        <p>{T`$x'=y$, $y'=-\sin x-cy$ with $c>0$. Use the energy $V=\tfrac12y^2+(1-\cos x)$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`On the strip $|x|<2\pi$, $V$ is positive definite near the origin ($1-\cos x>0$ for $0<|x|<2\pi$). Then`}</p>
          <Fml>{T`$$\dot V=y\,(-\sin x-cy)+\sin x\cdot y=-c\,y^2\le0.$$`}</Fml>
          <p>{T`Lyapunov's theorem gives stability. But $\dot V=0$ on the whole axis $y=0$, so it does not immediately give convergence. Apply LaSalle on $K=\{V\le c_0\}$ near the origin with $c_0<2$ (so $K$ is a small closed loop around $\mathbf 0$ that excludes $(\pm\pi,0)$). On $E=\{y=0\}$, a trajectory that stays there has $y'=0$, so $\sin x=0$, so $x=0$ inside $K$. Hence $M=\{\mathbf 0\}$, and the hanging equilibrium is asymptotically stable. The linearization agreed, but this argument also gives an explicit region $K$ of guaranteed convergence.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 5</div>
        <div className="exm-title">Local, not global: estimating the basin</div>
        <p>{T`Consider $x'=-x+x^3$, $y'=-y$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`The linearization at the origin, $\operatorname{diag}(-1,-1)$, shows asymptotic stability, but not how far it reaches. With $V=x^2+y^2$,`}</p>
          <Fml>{T`$$\dot V=2x(-x+x^3)-2y^2=-2x^2(1-x^2)-2y^2,$$`}</Fml>
          <p>{T`negative whenever $|x|<1$ and $(x,y)\neq\mathbf 0$. The largest disk $\{V<c\}$ inside the strip $|x|<1$ has $c=1$, so the unit disk lies in the region of attraction. The estimate is honest: $(\pm1,0)$ are equilibria, and for $|x|>1$ we have $x\to\pm\infty$. The origin is locally but not globally asymptotically stable.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 6 — Application</div>
        <div className="exm-title">Why gradient descent converges</div>
        <p>{T`Minimise $h(x,y)=(x-1)^2+2(y+1)^2$ by following the gradient flow $\mathbf x'=-\nabla h$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`The flow is $x'=-2(x-1)$, $y'=-4(y+1)$, with equilibrium $\mathbf x^*=(1,-1)$, the minimiser. Take the cost itself as Lyapunov function: $V=h-h(\mathbf x^*)=h$, which is positive definite about $\mathbf x^*$ and radially unbounded. Then`}</p>
          <Fml>{T`$$\dot V=\nabla h\cdot\mathbf x'=-|\nabla h|^2=-4(x-1)^2-16(y+1)^2<0\quad(\mathbf x\neq\mathbf x^*).$$`}</Fml>
          <p>{T`So every starting point converges to the minimiser. The same argument, $\dot h=-|\nabla h|^2$, is the continuous-time backbone of `}<Link to="/constrained-unconstrained-optimization/2">gradient descent</Link>{T` in optimisation and machine learning: the loss is a Lyapunov function for its own gradient flow.`}</p>
        </div>
      </div>
    </section>
  );
}

function Mistakes() {
  return (
    <section className="section" id="nd2-mistakes">
      <div className="sec-badge">Section 2.7</div>
      <h2 className="sec-title">Limitations and Common Mistakes</h2>

      <div className="box warn">
        <div className="box-lbl">Common mistakes</div>
        <ul>
          <li>{T`Using a semi-definite $V$ such as $x^2$ in two variables: its small sublevel sets are strips, not neighbourhoods of the origin.`}</li>
          <li>{T`Writing $\partial V/\partial t$ instead of the orbital derivative $\nabla V\cdot\mathbf F$ (for $V$ independent of $t$, $\partial V/\partial t=0$).`}</li>
          <li>{T`Claiming asymptotic stability from $\dot V\le0$ alone; it gives stability, and LaSalle may or may not upgrade it.`}</li>
          <li>{T`Concluding instability because one candidate $V$ failed (Example 3).`}</li>
          <li>{T`Claiming global stability when $\dot V<0$ only near the origin, or when $V$ is not radially unbounded.`}</li>
          <li>{T`Forgetting to shift the equilibrium to the origin before testing positive definiteness.`}</li>
        </ul>
      </div>

      <div className="box def">
        <div className="box-lbl">Limitations</div>
        <ul>
          <li>{T`Finding a Lyapunov function can be hard; for general nonlinear systems it is an art, and numerical searches (e.g. sum-of-squares methods) are used in practice.`}</li>
          <li>{T`Basin estimates from sublevel sets are usually conservative: the true region of attraction can be much larger.`}</li>
          <li>{T`The theorems here are for autonomous systems; time-dependent systems need uniform versions of the conditions.`}</li>
        </ul>
      </div>

      <div className="sum-grid">
        <div className="sum-card"><div className="sc-lbl">Orbital derivative</div><p>{T`$\dot V=\nabla V\cdot\mathbf F$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Stable</div><p>{T`$V>0$, $\dot V\le0$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Asymptotically stable</div><p>{T`$V>0$, $\dot V<0$ (away from $\mathbf 0$)`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Global</div><p>{T`plus $\dot V<0$ on $\mathbb R^n\setminus\{\mathbf 0\}$ and $V\to\infty$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">LaSalle</div><p>{T`$\dot V\le0$: converge to largest invariant set in $\{\dot V=0\}$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Unstable</div><p>{T`$V>0$ somewhere near $\mathbf 0$, $\dot V$ positive definite`}</p></div>
      </div>
    </section>
  );
}

function LyapunovStabilityTopic({ quizLocked = false, topicOnePct = null, passPercent = 80 }) {
  const lockHint = `🔒 Locked — pass the Phase Planes and Local Stability quiz with at least ${passPercent}% to unlock this quiz.`;

  return (
    <>
      <Intro />
      <Definite />
      <Theorems />
      <Global />
      <LaSalle />
      <Choosing />
      <Examples />
      <Mistakes />
      <hr className="divider" />

      {quizLocked && (
        <p className="mcq-unlock-hint">
          {topicOnePct !== null
            ? `Your best Phase Planes score so far: ${topicOnePct}%. `
            : "You have not attempted the Phase Planes quiz yet. "}
          <a href="#mcq-nd-phase" style={{ color: "var(--gold)", fontWeight: 600 }}>
            Go to the Phase Planes quiz →
          </a>
        </p>
      )}

      <div
        className={quizLocked ? "mcq-section mcq-section-locked" : undefined}
        data-lock-hint={quizLocked ? lockHint : undefined}
        aria-disabled={quizLocked || undefined}
      >
        <GuideMcqSection
          id="mcq-nd-lyapunov"
          badge="Checkpoint"
          title="Lyapunov Stability Methods — Quiz"
          scoreId="score-nd-lyapunov"
          section="nd-lyapunov"
          questions={ND_LYAPUNOV_QUIZ}
        />
      </div>
    </>
  );
}

export default LyapunovStabilityTopic;
