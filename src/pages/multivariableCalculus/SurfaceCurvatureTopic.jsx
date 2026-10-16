import { Link } from "react-router-dom";
import { GuideMcqSection } from "../../components/GuideMcq";
import { SG_CURVATURE_QUIZ } from "../../data/mvSurfaceGeometryQuizzes";

/**
 * Geometry of Surfaces — second topic: Surface Curvature and Geodesics.
 * Rendered by SurfaceGeometryPage once the Surface Metrics quiz is passed.
 * Quiz key: "sg-curvature" (stored as guide-mcq-sg-curvature).
 */

const T = String.raw;

function Fml({ children }) {
  return <div className="fml">{children}</div>;
}

function Intro() {
  return (
    <section className="section" id="sg-curvature">
      <div className="sec-badge">Curvature &amp; Geodesics · Start here</div>
      <h2 className="sec-title">Surface Curvature and Geodesics</h2>
      <p>
        {T`The first fundamental form measures lengths, angles and areas, but it cannot tell a flat sheet from a rolled-up cylinder. To see how a surface bends in space we watch how its unit normal $\mathbf n$ turns as we move. That information is packaged in the `}
        <strong>second fundamental form</strong>
        {T`, whose coefficients $L,M,N$ produce the principal, Gaussian and mean curvatures. We finish with `}
        <strong>geodesics</strong>
        {T` — the "straightest possible" curves on a surface — on planes, cylinders and spheres.`}
      </p>

      <div className="box def">
        <div className="box-lbl">Learning objectives</div>
        <ul>
          <li>{T`compute $L,M,N$ and the normal curvature of a surface in a given direction;`}</li>
          <li>{T`find principal curvatures from the shape operator and use Euler's formula;`}</li>
          <li>{T`compute Gaussian and mean curvature, classify points as elliptic, hyperbolic, parabolic or planar;`}</li>
          <li>{T`distinguish intrinsic quantities ($K$) from extrinsic ones ($H$, $k_1$, $k_2$);`}</li>
          <li>{T`recognise and verify geodesics on planes, cylinders and spheres, and explain why geodesics need not be shortest paths.`}</li>
        </ul>
      </div>

      <div className="box tip">
        <div className="box-lbl">Prerequisites</div>
        <ul>
          <li>{T`Surface Metrics and the First Fundamental Form (above): $E,F,G$, regularity, isometry.`}</li>
          <li>
            {T`The Hessian and the second-derivative test — `}
            <Link to="/constrained-unconstrained-optimization/1">Constrained &amp; Unconstrained Optimization</Link>.
          </li>
          <li>
            {T`Curvature of space curves and the Frenet frame — `}
            <Link to="/space-curves/1">Space Curves</Link>.
          </li>
          <li>{T`Eigenvalues of a $2\times2$ matrix, determinant and trace.`}</li>
        </ul>
      </div>

      <div className="box warn">
        <div className="box-lbl">Standing assumptions and notation</div>
        {T`From now on $\mathbf r$ is $C^2$ and regular, so second derivatives exist and are continuous. We write the unit normal as $\mathbf n=\dfrac{\mathbf r_u\times\mathbf r_v}{|\mathbf r_u\times\mathbf r_v|}$ (bold lowercase), freeing the letter $N$ for a coefficient. Every sign below refers to this choice of $\mathbf n$; replacing $\mathbf n$ by $-\mathbf n$ flips the signs of $L,M,N,k_1,k_2$ and $H$.`}
      </div>
    </section>
  );
}

function SecondForm() {
  return (
    <section className="section" id="sg2-second-form">
      <div className="sec-badge">Section 2.1</div>
      <h2 className="sec-title">The Second Fundamental Form and Normal Curvature</h2>

      <h3 className="subsec">Derivation</h3>
      <p>
        {T`Let $\boldsymbol\alpha(s)=\mathbf r(u(s),v(s))$ be a unit-speed curve on the surface. Its acceleration splits into a part tangent to the surface and a part along $\mathbf n$. Differentiating $\boldsymbol\alpha'=\mathbf r_uu'+\mathbf r_vv'$ once more,`}
      </p>
      <Fml>{T`$$\boldsymbol\alpha''=\mathbf r_{uu}u'^2+2\mathbf r_{uv}u'v'+\mathbf r_{vv}v'^2+\mathbf r_uu''+\mathbf r_vv''.$$`}</Fml>
      <p>{T`The last two terms are tangent, so they vanish when we dot with $\mathbf n$:`}</p>
      <Fml>{T`$$\kappa_n:=\boldsymbol\alpha''\cdot\mathbf n=(\mathbf r_{uu}\cdot\mathbf n)\,u'^2+2(\mathbf r_{uv}\cdot\mathbf n)\,u'v'+(\mathbf r_{vv}\cdot\mathbf n)\,v'^2.$$`}</Fml>
      <p>{T`Only the direction $(u',v')$ matters — every curve through the point with the same tangent has the same normal component of acceleration.`}</p>

      <div className="box def">
        <div className="box-lbl">Definition — Second fundamental form</div>
        {T`$$L=\mathbf r_{uu}\cdot\mathbf n,\qquad M=\mathbf r_{uv}\cdot\mathbf n,\qquad N=\mathbf r_{vv}\cdot\mathbf n,$$
        $$\mathrm{II}_p(a\,\mathbf r_u+b\,\mathbf r_v)=L\,a^2+2M\,ab+N\,b^2,\qquad h=\begin{pmatrix}L&M\\M&N\end{pmatrix}.$$
        Because $\mathbf r_u\cdot\mathbf n=0$, differentiating gives the equivalent forms $L=-\mathbf r_u\cdot\mathbf n_u$, $M=-\mathbf r_u\cdot\mathbf n_v=-\mathbf r_v\cdot\mathbf n_u$, $N=-\mathbf r_v\cdot\mathbf n_v$: the second fundamental form measures how fast the normal turns.`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Theorem — Normal curvature</div>
        {T`For a nonzero tangent vector $\mathbf w$ at $p$, every curve through $p$ with tangent direction $\mathbf w$ has normal curvature
        $$\kappa_n(\mathbf w)=\frac{\mathrm{II}_p(\mathbf w)}{\mathrm I_p(\mathbf w)}=\frac{L\,a^2+2M\,ab+N\,b^2}{E\,a^2+2F\,ab+G\,b^2}.$$
        If the curve has curvature $\kappa$ and its principal normal makes angle $\phi$ with $\mathbf n$, then $\kappa_n=\kappa\cos\phi$ (Meusnier's theorem).`}
        <div className="sol">
          <div className="sol-lbl">Proof outline</div>
          <p>{T`For a curve with arbitrary speed, rescale to unit speed: $(u',v')$ is divided by $|\boldsymbol\alpha'|=\sqrt{\mathrm I(\mathbf w)}$, so the quadratic $\mathrm{II}$ is divided by $\mathrm I$. Meusnier's theorem follows from $\boldsymbol\alpha''=\kappa\,\mathbf N_{\text{curve}}$ and $\mathbf N_{\text{curve}}\cdot\mathbf n=\cos\phi$.`}</p>
        </div>
      </div>

      <div className="note">
        {T`Geometrically, $\kappa_n(\mathbf w)$ is the signed curvature of the `}
        <em>normal section</em>
        {T` — the curve cut from the surface by the plane through $p$ containing $\mathbf w$ and $\mathbf n$. Positive means the section bends towards $\mathbf n$.`}
      </div>
    </section>
  );
}

function Principal() {
  return (
    <section className="section" id="sg2-principal">
      <div className="sec-badge">Section 2.2</div>
      <h2 className="sec-title">Principal, Gaussian and Mean Curvature</h2>
      <p>
        {T`As the direction $\mathbf w$ rotates, $\kappa_n(\mathbf w)$ is a ratio of two quadratic forms. Its maximum and minimum are found by a generalised eigenvalue problem.`}
      </p>

      <div className="box def">
        <div className="box-lbl">Definition — Shape operator and principal curvatures</div>
        {T`The `}
        <strong>shape operator</strong>
        {T` (Weingarten map) in the basis $\mathbf r_u,\mathbf r_v$ has matrix
        $$S=g^{-1}h=\begin{pmatrix}E&F\\F&G\end{pmatrix}^{-1}\begin{pmatrix}L&M\\M&N\end{pmatrix}.$$
        Its eigenvalues $k_1\ge k_2$ are the `}
        <strong>principal curvatures</strong>
        {T`; the eigenvectors are the `}
        <strong>principal directions</strong>
        {T`. Then
        $$K=k_1k_2=\det S=\frac{LN-M^2}{EG-F^2},\qquad H=\frac{k_1+k_2}{2}=\tfrac12\operatorname{tr}S=\frac{EN-2FM+GL}{2(EG-F^2)},$$
        and $k_{1,2}=H\pm\sqrt{H^2-K}$.`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Theorem — Euler's formula</div>
        {T`$k_1$ and $k_2$ are the largest and smallest normal curvatures at $p$. If $k_1\neq k_2$ the principal directions are orthogonal, and the direction at angle $\theta$ from the first one has
        $$\kappa_n(\theta)=k_1\cos^2\theta+k_2\sin^2\theta.$$`}
        <div className="sol">
          <div className="sol-lbl">Proof outline</div>
          <p>{T`Extremising $\mathrm{II}(\mathbf w)$ subject to $\mathrm I(\mathbf w)=1$ with a Lagrange multiplier gives $h\mathbf a=\lambda g\mathbf a$, i.e. $S\mathbf a=\lambda\mathbf a$, and then $\kappa_n=\lambda$. $S$ is self-adjoint for the inner product $g$, so its eigenvectors are $g$-orthogonal; expanding a unit vector as $\cos\theta\,\mathbf e_1+\sin\theta\,\mathbf e_2$ gives Euler's formula.`}</p>
        </div>
      </div>

      <h3 className="subsec">Classifying points</h3>
      <div className="tbl-wrap">
        <table>
          <thead>
            <tr><th>Type</th><th>Condition</th><th>Local shape</th><th>Example</th></tr>
          </thead>
          <tbody>
            <tr><td>Elliptic</td><td>{T`$K>0$`}</td><td>Bowl or dome; surface on one side of its tangent plane</td><td>Sphere, top of a paraboloid</td></tr>
            <tr><td>Hyperbolic</td><td>{T`$K<0$`}</td><td>Saddle; surface crosses its tangent plane</td><td>{T`$z=xy$ at the origin`}</td></tr>
            <tr><td>Parabolic</td><td>{T`$K=0$, $H\neq0$`}</td><td>Bent in one direction only</td><td>Cylinder</td></tr>
            <tr><td>Planar</td><td>{T`$k_1=k_2=0$`}</td><td>Flat to second order</td><td>{T`Plane; $z=x^4+y^4$ at the origin`}</td></tr>
          </tbody>
        </table>
      </div>
      <p>{T`A point with $k_1=k_2$ is an `}<strong>umbilic</strong>{T`: every direction is principal. All points of a sphere and of a plane are umbilics.`}</p>

      <div className="box thm">
        <div className="box-lbl">Theorem — Gauss's Theorema Egregium (stated without proof)</div>
        {T`The Gaussian curvature $K$ can be computed from $E,F,G$ and their first and second derivatives alone. Hence $K$ is intrinsic: locally isometric surfaces have the same $K$ at corresponding points. The mean curvature $H$ is `}
        <em>not</em>
        {T` intrinsic.`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Graphs — link to the second-derivative test</div>
        {T`For $z=f(x,y)$ with upward normal,
        $$K=\frac{f_{xx}f_{yy}-f_{xy}^2}{(1+f_x^2+f_y^2)^2}.$$
        At a critical point ($f_x=f_y=0$) this is exactly the Hessian discriminant $D$, and $L=f_{xx}$, $M=f_{xy}$, $N=f_{yy}$. So the second-derivative test is a curvature test: $D>0$ means elliptic (max or min), $D<0$ means hyperbolic (saddle).`}
      </div>
    </section>
  );
}

function Geodesics() {
  return (
    <section className="section" id="sg2-geodesics">
      <div className="sec-badge">Section 2.3</div>
      <h2 className="sec-title">Geodesics</h2>
      <p>
        {T`A curve on a surface can curve for two reasons: because the surface itself bends (that part is $\kappa_n$), or because the curve turns within the surface. For a unit-speed curve,`}
      </p>
      <Fml>{T`$$\boldsymbol\alpha''=\kappa_g\,(\mathbf n\times\boldsymbol\alpha')+\kappa_n\,\mathbf n,\qquad \kappa^2=\kappa_g^2+\kappa_n^2,$$`}</Fml>
      <p>{T`where $\kappa_g$ is the `}<strong>geodesic curvature</strong>{T` — the curving an ant walking on the surface would feel.`}</p>

      <div className="box def">
        <div className="box-lbl">Definition — Geodesic</div>
        {T`A curve $\boldsymbol\alpha$ on a surface is a `}
        <strong>geodesic</strong>
        {T` if its acceleration is everywhere normal to the surface: $\boldsymbol\alpha''(t)\parallel\mathbf n$, i.e. the tangential part of $\boldsymbol\alpha''$ is zero. Geodesics automatically have constant speed (since $\tfrac{d}{dt}|\boldsymbol\alpha'|^2=2\boldsymbol\alpha'\cdot\boldsymbol\alpha''=0$) and zero geodesic curvature.`}
      </div>

      <div className="box thm">
        <div className="box-lbl">Theorem — Geodesics and shortest paths (stated without proof)</div>
        <ul>
          <li>{T`Through each point and in each tangent direction there is exactly one geodesic (locally).`}</li>
          <li>{T`If a curve is the shortest path on the surface between its endpoints and has constant speed, it is a geodesic.`}</li>
          <li>{T`Conversely, a geodesic is shortest only `}<em>locally</em>{T`: sufficiently short arcs minimise length, long ones need not.`}</li>
          <li>{T`Geodesics are intrinsic: an isometry maps geodesics to geodesics.`}</li>
        </ul>
      </div>

      <p>
        {T`In coordinates, the condition "tangential acceleration $=0$" becomes a pair of second-order ODEs for $u(t),v(t)$ whose coefficients (Christoffel symbols) are built from $E,F,G$; they are also the Euler–Lagrange equations of the length functional from `}
        <Link to="/multivariable-calculus/advanced-integration">Advanced Integration &amp; Variational Methods</Link>
        {T`. For the three surfaces below, the direct check $\boldsymbol\alpha''\parallel\mathbf n$ is all we need.`}
      </p>

      <h3 className="subsec">Geodesics on planes, cylinders and spheres</h3>
      <div className="tbl-wrap">
        <table>
          <thead>
            <tr><th>Surface</th><th>Geodesics</th><th>Reason</th></tr>
          </thead>
          <tbody>
            <tr><td>Plane</td><td>Straight lines</td><td>{T`$\boldsymbol\alpha''$ lies in the plane and must be normal to it, so $\boldsymbol\alpha''=\mathbf 0$`}</td></tr>
            <tr><td>Cylinder</td><td>Helices, circles $v=$ const, rulings $u=$ const</td><td>Unrolling is an isometry to the plane, which maps geodesics to straight lines</td></tr>
            <tr><td>Sphere</td><td>Great circles</td><td>{T`$\boldsymbol\alpha''=-\boldsymbol\alpha$ points to the centre, i.e. along the normal`}</td></tr>
          </tbody>
        </table>
      </div>

      <div className="box thm">
        <div className="box-lbl">Clairaut's relation (surfaces of revolution, stated without proof)</div>
        {T`On a surface of revolution, let $\rho$ be the distance from the axis and $\psi$ the angle a geodesic makes with the parallel through the point. Then along the geodesic
        $$\rho\cos\psi=\text{constant}.$$
        On a cylinder $\rho=a$ is constant, so $\psi$ is constant: geodesics are helices, as the table says.`}
      </div>
    </section>
  );
}

function Examples() {
  return (
    <section className="section" id="sg2-examples">
      <div className="sec-badge">Section 2.4</div>
      <h2 className="sec-title">Worked Examples</h2>

      <div className="box exm">
        <div className="box-lbl">Example 1</div>
        <div className="exm-title">Curvature of the sphere</div>
        <p>{T`Use $\mathbf r(\varphi,\theta)=(R\sin\varphi\cos\theta,\,R\sin\varphi\sin\theta,\,R\cos\varphi)$ with $E=R^2$, $F=0$, $G=R^2\sin^2\varphi$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`A direct computation gives $\mathbf r_\varphi\times\mathbf r_\theta=R\sin\varphi\,\mathbf r$, so $\mathbf n=\mathbf r/R$ (outward). The second derivatives:`}</p>
          <Fml>{T`$$\mathbf r_{\varphi\varphi}=-\mathbf r,\qquad \mathbf r_{\varphi\theta}=(-R\cos\varphi\sin\theta,\;R\cos\varphi\cos\theta,\;0),\qquad \mathbf r_{\theta\theta}=(-R\sin\varphi\cos\theta,\;-R\sin\varphi\sin\theta,\;0).$$`}</Fml>
          <Fml>{T`$$L=-R,\qquad M=0,\qquad N=-R\sin^2\varphi.$$`}</Fml>
          <Fml>{T`$$K=\frac{LN-M^2}{EG-F^2}=\frac{R^2\sin^2\varphi}{R^4\sin^2\varphi}=\frac1{R^2},\qquad H=\frac{EN+GL}{2EG}=\frac{-2R^3\sin^2\varphi}{2R^4\sin^2\varphi}=-\frac1R.$$`}</Fml>
          <p>{T`So $k_1=k_2=-1/R$ at every point: the sphere is totally umbilic. The minus sign only records that the sphere bends away from the outward normal; with the inward normal $H=+1/R$, while $K=1/R^2$ either way.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 2 — Counterexample</div>
        <div className="exm-title">Plane versus cylinder: same metric, different bending</div>
        <p>{T`Cylinder $\mathbf r(u,v)=(a\cos u,\,a\sin u,\,v)$, $E=a^2$, $F=0$, $G=1$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`$\mathbf r_u\times\mathbf r_v=(a\cos u,a\sin u,0)$, so $\mathbf n=(\cos u,\sin u,0)$. Then $\mathbf r_{uu}=(-a\cos u,-a\sin u,0)$ gives $L=-a$, while $\mathbf r_{uv}=\mathbf r_{vv}=\mathbf 0$ give $M=N=0$.`}</p>
          <Fml>{T`$$S=\begin{pmatrix}a^2&0\\0&1\end{pmatrix}^{-1}\begin{pmatrix}-a&0\\0&0\end{pmatrix}=\begin{pmatrix}-1/a&0\\0&0\end{pmatrix},\qquad K=0,\qquad H=-\frac1{2a}.$$`}</Fml>
          <p>{T`The plane has $K=0$ and $H=0$. The two surfaces are locally isometric, and as the Theorema Egregium predicts they agree on $K$ — but $H$ tells them apart. Mean curvature is extrinsic.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 3</div>
        <div className="exm-title">Saddle and bowl: curvature of graphs</div>
        <p>{T`Find $K$ and $H$ at the origin for (a) $z=xy$ and (b) $z=x^2+y^2$, and $K$ at a general point of (b).`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`At the origin both have $f_x=f_y=0$, so $E=G=1$, $F=0$, $\mathbf n=(0,0,1)$ and $(L,M,N)=(f_{xx},f_{xy},f_{yy})$.`}</p>
          <p>{T`(a) $(L,M,N)=(0,1,0)$: $K=-1$, $H=0$, $k_{1,2}=\pm1$. A hyperbolic point; the principal directions are the diagonals $y=\pm x$, along which $z=\pm x^2$.`}</p>
          <p>{T`(b) $(L,M,N)=(2,0,2)$: $K=4$, $H=2$, $k_1=k_2=2$. An elliptic umbilic.`}</p>
          <p>{T`At a general point of (b): $f_{xx}=f_{yy}=2$, $f_{xy}=0$, so`}</p>
          <Fml>{T`$$K(x,y)=\frac{4}{(1+4x^2+4y^2)^2},$$`}</Fml>
          <p>{T`which is positive everywhere and decreases away from the vertex — the bowl flattens out as it widens.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 4</div>
        <div className="exm-title">The torus: all three point types on one surface</div>
        <p>{T`$\mathbf r(u,v)=\bigl((a+b\cos v)\cos u,\,(a+b\cos v)\sin u,\,b\sin v\bigr)$, $a>b>0$, with $E=(a+b\cos v)^2$, $F=0$, $G=b^2$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`The outward normal is $\mathbf n=(\cos v\cos u,\,\cos v\sin u,\,\sin v)$. Dotting the second derivatives with it gives`}</p>
          <Fml>{T`$$L=-(a+b\cos v)\cos v,\qquad M=0,\qquad N=-b,$$`}</Fml>
          <Fml>{T`$$K=\frac{LN}{EG}=\frac{b(a+b\cos v)\cos v}{b^2(a+b\cos v)^2}=\frac{\cos v}{b\,(a+b\cos v)}.$$`}</Fml>
          <ul>
            <li>{T`Outer half ($\cos v>0$): $K>0$, elliptic. On the outer equator $K=\dfrac{1}{b(a+b)}$.`}</li>
            <li>{T`Inner half ($\cos v<0$): $K<0$, hyperbolic. On the inner equator $K=-\dfrac{1}{b(a-b)}$.`}</li>
            <li>{T`Top and bottom circles ($v=\pm\pi/2$): $K=0$, parabolic.`}</li>
          </ul>
          <p>{T`Check: $\displaystyle\iint K\,dA=\int_0^{2\pi}\!\!\int_0^{2\pi}\frac{\cos v}{b(a+b\cos v)}\,(a+b\cos v)\,b\;dv\,du=\int_0^{2\pi}\!\!\int_0^{2\pi}\cos v\;dv\,du=0,$ the positive and negative curvature cancel exactly, as the Gauss–Bonnet theorem predicts for a torus.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 5 — Counterexample</div>
        <div className="exm-title">Latitude circles are not geodesics</div>
        <p>{T`On the sphere of radius $R$, take the latitude $\boldsymbol\alpha(t)=\mathbf r(\varphi_0,t)=(R\sin\varphi_0\cos t,\,R\sin\varphi_0\sin t,\,R\cos\varphi_0)$.`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`$\boldsymbol\alpha''=(-R\sin\varphi_0\cos t,\,-R\sin\varphi_0\sin t,\,0)$ points to the axis, not to the centre. Its tangential component along $\mathbf r_\varphi$ is`}</p>
          <Fml>{T`$$\boldsymbol\alpha''\cdot\mathbf r_\varphi=-R^2\sin\varphi_0\cos\varphi_0,$$`}</Fml>
          <p>{T`which is nonzero unless $\varphi_0=\pi/2$. So only the equator is a geodesic. Every latitude circle is a perfectly smooth curve with constant speed — what disqualifies it is that it keeps turning `}<em>within</em>{T` the surface.`}</p>
        </div>
      </div>

      <div className="box exm">
        <div className="box-lbl">Example 6 — Application</div>
        <div className="exm-title">Great-circle flight routes</div>
        <p>{T`Two cities lie at latitude $60^\circ$N with longitudes $180^\circ$ apart. Compare flying along the latitude with flying along a great circle ($R\approx6371$ km).`}</p>
        <div className="sol">
          <div className="sol-lbl">Solution</div>
          <p>{T`The latitude circle has radius $R\cos60^\circ=R/2$, and the cities are half a turn apart, so that route is $\pi R/2\approx10\,007$ km.`}</p>
          <p>{T`The great circle through both cities passes over the North Pole: $30^\circ$ up to the pole and $30^\circ$ down, a central angle of $60^\circ=\pi/3$. Its length is $\pi R/3\approx6\,672$ km.`}</p>
          <p>{T`The geodesic saves about a third of the distance. This is why long-haul routes between northern cities curve towards the Arctic on a flat map: the map distorts, the great circle does not.`}</p>
        </div>
      </div>
    </section>
  );
}

function Mistakes() {
  return (
    <section className="section" id="sg2-mistakes">
      <div className="sec-badge">Section 2.5</div>
      <h2 className="sec-title">Limitations and Common Mistakes</h2>

      <div className="box warn">
        <div className="box-lbl">Common mistakes</div>
        <ul>
          <li>{T`Using the unnormalised $\mathbf r_u\times\mathbf r_v$ instead of the unit normal $\mathbf n$ when computing $L,M,N$.`}</li>
          <li>{T`Writing $K=LN-M^2$ and forgetting to divide by $EG-F^2$ (only correct when $EG-F^2=1$).`}</li>
          <li>{T`Taking the eigenvalues of $h$ instead of $S=g^{-1}h$ when the parametrization is not orthonormal.`}</li>
          <li>{T`Quoting the sign of $H$ or $k_i$ without stating the normal; only $K$ is independent of that choice.`}</li>
          <li>{T`Confusing the curvature $\kappa$ of a curve with the normal curvature $\kappa_n$ of the surface in its direction — they agree only when the curve's principal normal is $\pm\mathbf n$.`}</li>
          <li>{T`Assuming every circle on a sphere is a geodesic, or that every geodesic is the shortest path.`}</li>
        </ul>
      </div>

      <div className="box def">
        <div className="box-lbl">Limitations</div>
        <ul>
          <li>{T`All formulas need a $C^2$ regular parametrization; at cone apexes or edges curvature is undefined (or concentrated), and coordinate singularities such as the poles need another chart.`}</li>
          <li>{T`Curvature is local. Global results — the Theorema Egregium proof, Gauss–Bonnet, existence of shortest geodesics — were only stated here.`}</li>
          <li>{T`Geodesics on general surfaces rarely have closed forms; in practice the geodesic ODEs are solved numerically.`}</li>
        </ul>
      </div>

      <div className="sum-grid">
        <div className="sum-card"><div className="sc-lbl">Second fundamental form</div><p>{T`$L=\mathbf r_{uu}\!\cdot\!\mathbf n,\;M=\mathbf r_{uv}\!\cdot\!\mathbf n,\;N=\mathbf r_{vv}\!\cdot\!\mathbf n$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Normal curvature</div><p>{T`$\kappa_n=\mathrm{II}(\mathbf w)/\mathrm I(\mathbf w)$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Gaussian curvature</div><p>{T`$K=k_1k_2=\dfrac{LN-M^2}{EG-F^2}$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Mean curvature</div><p>{T`$H=\dfrac{k_1+k_2}{2}=\dfrac{EN-2FM+GL}{2(EG-F^2)}$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Euler's formula</div><p>{T`$\kappa_n=k_1\cos^2\theta+k_2\sin^2\theta$`}</p></div>
        <div className="sum-card"><div className="sc-lbl">Geodesic</div><p>{T`$\boldsymbol\alpha''\parallel\mathbf n$; great circles, helices, lines`}</p></div>
      </div>
    </section>
  );
}

function SurfaceCurvatureTopic() {
  return (
    <>
      <Intro />
      <SecondForm />
      <Principal />
      <Geodesics />
      <Examples />
      <Mistakes />
      <hr className="divider" />
      <GuideMcqSection
        id="mcq-sg-curvature"
        badge="Checkpoint"
        title="Surface Curvature and Geodesics — Quiz"
        scoreId="score-sg-curvature"
        section="sg-curvature"
        questions={SG_CURVATURE_QUIZ}
      />
    </>
  );
}

export default SurfaceCurvatureTopic;
