// src/pages/multivariableCalculus/DifferentialFormsTopic.jsx
// Differential Forms · Differential Forms & the Exterior Derivative
// Rendered inside DifferentialFormsGuide (shares PartialDerivativesGuide.css).

import { GuideMcqSection } from "../../components/GuideMcq";
import { RealLifeUse } from "../calculus/CalcBlocks";
import { MV_DF_FORMS_QUIZ } from "../../data/mvDifferentialFormsQuizzes";

export const DF_FORMS_QUIZ_KEY = "df-forms";

export const DF_FORMS_NAV = [
  { id: "dfm-why", label: "Why Differential Forms?" },
  { id: "dfm-one-forms", label: "0-Forms and 1-Forms" },
  { id: "dfm-wedge", label: "The Wedge Product" },
  { id: "dfm-d", label: "The Exterior Derivative" },
  { id: "dfm-d2", label: "The Rule d² = 0" },
  { id: "dfm-dictionary", label: "Grad, Curl & Div as d" },
  { id: "dfm-closed-exact", label: "Closed & Exact Forms" },
  { id: "dfm-pullback", label: "Pullbacks & Integration" },
  { id: "dfm-summary", label: "Key Formulas" },
  { id: "mcq-df-forms", label: "Differential Forms Quiz" },
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
function SectionWhy() {
  return (
    <section className="section" id="dfm-why">
      <SecHead n={1} title="Why Differential Forms?" />
      <p>
        {"Vector calculus has three derivatives (gradient, curl, divergence) and three integral theorems (the Fundamental Theorem for line integrals, Stokes' Theorem, the Divergence Theorem). They look different, but they are one idea in disguise. "}
        <strong>{"Differential forms"}</strong>
        {" are the objects that make this visible: a single derivative $d$ replaces grad, curl and div, and a single theorem $\\int_M d\\omega=\\int_{\\partial M}\\omega$ (the next topic) replaces all three integral theorems."}
      </p>
      <p>
        {"Informally, a $k$-form is \u201csomething you integrate over a $k$-dimensional object\u201d: a 0-form is evaluated at points, a 1-form is integrated along curves, a 2-form over surfaces, and a 3-form over solid regions. Forms carry their own orientation and change-of-variables rules, so the integrals take care of themselves."}
      </p>

      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>{"Degree"}</th>
              <th>{"General form on $\\mathbb R^3$"}</th>
              <th>{"Integrated over"}</th>
              <th>{"Vector-calculus partner"}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>{"0-form"}</td><td>{"$f(x,y,z)$"}</td><td>{"Points"}</td><td>{"Scalar field $f$"}</td></tr>
            <tr><td>{"1-form"}</td><td>{"$P\\,dx+Q\\,dy+R\\,dz$"}</td><td>{"Curves"}</td><td>{"Vector field $\\langle P,Q,R\\rangle$ (work)"}</td></tr>
            <tr><td>{"2-form"}</td><td>{"$P\\,dy\\wedge dz+Q\\,dz\\wedge dx+R\\,dx\\wedge dy$"}</td><td>{"Surfaces"}</td><td>{"Vector field $\\langle P,Q,R\\rangle$ (flux)"}</td></tr>
            <tr><td>{"3-form"}</td><td>{"$f\\,dx\\wedge dy\\wedge dz$"}</td><td>{"Solid regions"}</td><td>{"Scalar density $f$"}</td></tr>
          </tbody>
        </table>
      </div>

      <div className="note">
        {"Prerequisites: partial derivatives, Clairaut's theorem, determinants, line and surface integrals. Everything here is done in $\\mathbb R^2$ and $\\mathbb R^3$, but every definition works unchanged in $\\mathbb R^n$."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ §2 ═════════════════════════════ */
function SectionOneForms() {
  return (
    <section className="section" id="dfm-one-forms">
      <SecHead n={2} title="0-Forms and 1-Forms" />
      <p>
        {"A 0-form is just a smooth function. A 1-form is a field of "}
        <em>{"linear measuring devices"}</em>
        {": at each point it eats a vector and returns a number. The basic 1-forms $dx$, $dy$, $dz$ read off the components of a vector."}
      </p>

      <Box kind="def" label={"Definition \u2014 Basic 1-Forms"}>
        <p>{"For a vector $\\mathbf v=\\langle v_1,v_2,v_3\\rangle$:"}</p>
        <F>{"$$dx(\\mathbf v)=v_1,\\qquad dy(\\mathbf v)=v_2,\\qquad dz(\\mathbf v)=v_3$$"}</F>
        <p>{"A general 1-form on $\\mathbb R^3$ is $\\omega=P\\,dx+Q\\,dy+R\\,dz$, where $P,Q,R$ are functions. At a point $\\mathbf p$:"}</p>
        <F>{"$$\\omega_{\\mathbf p}(\\mathbf v)=P(\\mathbf p)\\,v_1+Q(\\mathbf p)\\,v_2+R(\\mathbf p)\\,v_3=\\langle P,Q,R\\rangle\\cdot\\mathbf v$$"}</F>
      </Box>

      <Example title={"Evaluating a 1-form on a vector"}>
        <p>{"Let $\\omega=y\\,dx+x\\,dy$. Evaluate $\\omega$ at $\\mathbf p=(1,1)$ on $\\mathbf v=\\langle2,3\\rangle$, and at $\\mathbf p=(2,-1)$ on the same vector."}</p>
        <Solution>
          <p>{"At $(1,1)$: $\\omega(\\mathbf v)=1\\cdot2+1\\cdot3=5$."}</p>
          <p>{"At $(2,-1)$: $\\omega(\\mathbf v)=(-1)\\cdot2+2\\cdot3=4$."}</p>
          <p>{"The same vector gets a different number at a different point: the coefficients of a form are functions."}</p>
        </Solution>
      </Example>

      <Box kind="def" label={"Definition \u2014 Integral of a 1-Form Along a Curve"}>
        <p>{"If $C$ is parametrized by $\\mathbf r(t)=\\langle x(t),y(t),z(t)\\rangle$, $a\\le t\\le b$, then"}</p>
        <F>{"$$\\int_C\\omega=\\int_a^b\\omega_{\\mathbf r(t)}\\big(\\mathbf r'(t)\\big)\\,dt=\\int_a^b\\Big(P\\,x'(t)+Q\\,y'(t)+R\\,z'(t)\\Big)dt$$"}</F>
        <p>{"This is exactly the work integral $\\int_C\\mathbf F\\cdot d\\mathbf r$ for $\\mathbf F=\\langle P,Q,R\\rangle$. Reversing the direction of $C$ changes the sign."}</p>
      </Box>

      <Example title={"A line integral around the unit circle"}>
        <p>{"Evaluate $\\displaystyle\\oint_C(y\\,dx-x\\,dy)$ for the unit circle traversed counterclockwise."}</p>
        <Solution>
          <p>{"Use $x=\\cos t$, $y=\\sin t$, so $dx=-\\sin t\\,dt$ and $dy=\\cos t\\,dt$:"}</p>
          <F>{"$$y\\,dx-x\\,dy=\\big(-\\sin^2t-\\cos^2t\\big)\\,dt=-dt,\\qquad \\oint_C(y\\,dx-x\\,dy)=\\int_0^{2\\pi}(-1)\\,dt=-2\\pi$$"}</F>
          <p>{"The field $\\langle y,-x\\rangle$ points clockwise, against the direction of travel, so the work is negative."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §3 ═════════════════════════════ */
function SectionWedge() {
  return (
    <section className="section" id="dfm-wedge">
      <SecHead n={3} title="The Wedge Product" />
      <p>
        {"To integrate over surfaces we need objects that eat "}
        <em>{"two"}</em>
        {" vectors (the edges of a small parallelogram) and return a signed area. The "}
        <strong>{"wedge product"}</strong>
        {" $\\wedge$ builds these from 1-forms."}
      </p>

      <Box kind="def" label={"Definition \u2014 Wedge of Two 1-Forms"}>
        <F>{"$$(\\alpha\\wedge\\beta)(\\mathbf u,\\mathbf v)=\\det\\begin{pmatrix}\\alpha(\\mathbf u)&\\alpha(\\mathbf v)\\\\\\beta(\\mathbf u)&\\beta(\\mathbf v)\\end{pmatrix}=\\alpha(\\mathbf u)\\beta(\\mathbf v)-\\alpha(\\mathbf v)\\beta(\\mathbf u)$$"}</F>
        <p>{"In particular $(dx\\wedge dy)(\\mathbf u,\\mathbf v)=u_1v_2-u_2v_1$: the signed area of the parallelogram spanned by $\\mathbf u,\\mathbf v$ after projecting onto the $xy$-plane."}</p>
      </Box>

      <Box kind="thm" label={"Theorem \u2014 Rules of the Wedge Product"}>
        <ul>
          <li><strong>{"Anticommutative on 1-forms:"}</strong>{" $\\alpha\\wedge\\beta=-\\beta\\wedge\\alpha$, so $dy\\wedge dx=-dx\\wedge dy$."}</li>
          <li><strong>{"Alternating:"}</strong>{" $\\alpha\\wedge\\alpha=0$, so $dx\\wedge dx=dy\\wedge dy=dz\\wedge dz=0$."}</li>
          <li><strong>{"Distributive and associative:"}</strong>{" $(\\alpha+\\beta)\\wedge\\gamma=\\alpha\\wedge\\gamma+\\beta\\wedge\\gamma$, and $(f\\alpha)\\wedge\\beta=f(\\alpha\\wedge\\beta)$ for functions $f$."}</li>
          <li><strong>{"Graded commutativity:"}</strong>{" for a $k$-form $\\alpha$ and an $l$-form $\\beta$, $\\alpha\\wedge\\beta=(-1)^{kl}\\,\\beta\\wedge\\alpha$."}</li>
        </ul>
      </Box>

      <Box kind="def" label={"Definition \u2014 2-Forms and 3-Forms on $\\mathbb R^3$"}>
        <F>{"$$\\eta=P\\,dy\\wedge dz+Q\\,dz\\wedge dx+R\\,dx\\wedge dy,\\qquad \\mu=f\\,dx\\wedge dy\\wedge dz$$"}</F>
        <p>{"On $\\mathbb R^n$ there are $\\binom nk$ basic $k$-forms $dx_{i_1}\\wedge\\cdots\\wedge dx_{i_k}$ with $i_1<\\cdots<i_k$. On $\\mathbb R^3$: $1,3,3,1$ for $k=0,1,2,3$, and nothing above degree 3."}</p>
      </Box>

      <Example title={"Multiplying two 1-forms in the plane"}>
        <p>{"Simplify $(2\\,dx+dy)\\wedge(dx-3\\,dy)$."}</p>
        <Solution>
          <F>{"$$2\\,dx\\wedge dx-6\\,dx\\wedge dy+dy\\wedge dx-3\\,dy\\wedge dy=0-6\\,dx\\wedge dy-dx\\wedge dy-0=-7\\,dx\\wedge dy$$"}</F>
          <p>{"The coefficient is the determinant of the coefficient matrix: $\\det\\begin{pmatrix}2&1\\\\1&-3\\end{pmatrix}=-6-1=-7$. \u2713"}</p>
        </Solution>
      </Example>

      <Example title={"A product in three variables"}>
        <p>{"Expand $(dx+dz)\\wedge(dy+dz)$ and write it in the standard basis $dy\\wedge dz,\\;dz\\wedge dx,\\;dx\\wedge dy$."}</p>
        <Solution>
          <F>{"$$dx\\wedge dy+dx\\wedge dz+dz\\wedge dy+dz\\wedge dz=dx\\wedge dy-dz\\wedge dx-dy\\wedge dz$$"}</F>
          <p>{"So the coefficients are $\\langle-1,-1,1\\rangle$, which is $\\langle1,0,1\\rangle\\times\\langle0,1,1\\rangle$: wedging two 1-forms on $\\mathbb R^3$ is the cross product in disguise."}</p>
        </Solution>
      </Example>

      <Example title={"Evaluating a 2-form on two vectors"}>
        <p>{"Evaluate $dx\\wedge dy$ and $dy\\wedge dz$ on $\\mathbf u=\\langle1,2,0\\rangle$, $\\mathbf v=\\langle3,1,5\\rangle$."}</p>
        <Solution>
          <F>{"$$(dx\\wedge dy)(\\mathbf u,\\mathbf v)=1\\cdot1-2\\cdot3=-5,\\qquad (dy\\wedge dz)(\\mathbf u,\\mathbf v)=2\\cdot5-0\\cdot1=10$$"}</F>
          <p>{"These are the $z$- and $x$-components of $\\mathbf u\\times\\mathbf v=\\langle10,-5,-5\\rangle$. Each basic 2-form measures the area of the projection onto one coordinate plane."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §4 ═════════════════════════════ */
function SectionD() {
  return (
    <section className="section" id="dfm-d">
      <SecHead n={4} title="The Exterior Derivative" />
      <p>
        {"The exterior derivative $d$ turns a $k$-form into a $(k+1)$-form. On functions it is the total differential from the Partial Derivatives guide; on higher forms it is defined by differentiating the coefficients and wedging."}
      </p>

      <Box kind="def" label={"Definition \u2014 Exterior Derivative"}>
        <p><strong>{"On 0-forms:"}</strong></p>
        <F>{"$$df=\\frac{\\partial f}{\\partial x}dx+\\frac{\\partial f}{\\partial y}dy+\\frac{\\partial f}{\\partial z}dz$$"}</F>
        <p><strong>{"On $k$-forms:"}</strong>{" for $\\omega=f\\,dx_{i_1}\\wedge\\cdots\\wedge dx_{i_k}$, set $d\\omega=df\\wedge dx_{i_1}\\wedge\\cdots\\wedge dx_{i_k}$, and extend by linearity."}</p>
      </Box>

      <Box kind="thm" label={"Theorem \u2014 Properties of $d$"}>
        <ul>
          <li><strong>{"Linear:"}</strong>{" $d(a\\omega+b\\eta)=a\\,d\\omega+b\\,d\\eta$ for constants $a,b$."}</li>
          <li><strong>{"Leibniz rule:"}</strong>{" for a $k$-form $\\alpha$, $d(\\alpha\\wedge\\beta)=d\\alpha\\wedge\\beta+(-1)^k\\,\\alpha\\wedge d\\beta$."}</li>
          <li><strong>{"Nilpotent:"}</strong>{" $d(d\\omega)=0$ for every form (§5)."}</li>
        </ul>
      </Box>

      <Example title={"Exterior derivative of a function"}>
        <p>{"Find $df$ for $f(x,y,z)=x^2y+z^3$."}</p>
        <Solution>
          <F>{"$$df=2xy\\,dx+x^2\\,dy+3z^2\\,dz$$"}</F>
          <p>{"Its coefficients are the gradient $\\nabla f=\\langle2xy,\\,x^2,\\,3z^2\\rangle$, and $df(\\mathbf v)=\\nabla f\\cdot\\mathbf v=D_{\\mathbf v}f$ is the directional derivative."}</p>
        </Solution>
      </Example>

      <Example title={"Exterior derivative of a 1-form in the plane"}>
        <p>{"Compute $d\\omega$ for $\\omega=-y\\,dx+x\\,dy$."}</p>
        <Solution>
          <F>{"$$d\\omega=d(-y)\\wedge dx+d(x)\\wedge dy=-dy\\wedge dx+dx\\wedge dy=2\\,dx\\wedge dy$$"}</F>
          <p>{"In general, for $\\omega=P\\,dx+Q\\,dy$:"}</p>
          <F>{"$$d\\omega=\\Big(\\frac{\\partial Q}{\\partial x}-\\frac{\\partial P}{\\partial y}\\Big)dx\\wedge dy$$"}</F>
          <p>{"This is the integrand of Green's Theorem."}</p>
        </Solution>
      </Example>

      <Example title={"Exterior derivative of a 1-form in space"}>
        <p>{"Compute $d\\omega$ for $\\omega=xy\\,dz$."}</p>
        <Solution>
          <F>{"$$d\\omega=(y\\,dx+x\\,dy)\\wedge dz=y\\,dx\\wedge dz+x\\,dy\\wedge dz=x\\,dy\\wedge dz-y\\,dz\\wedge dx$$"}</F>
          <p>{"In the standard basis the coefficients are $\\langle x,-y,0\\rangle$, which is $\\operatorname{curl}\\langle0,0,xy\\rangle$."}</p>
        </Solution>
      </Example>

      <Example title={"Exterior derivative of a 2-form"}>
        <p>{"Compute $d\\eta$ for $\\eta=x\\,dy\\wedge dz+y\\,dz\\wedge dx+z\\,dx\\wedge dy$."}</p>
        <Solution>
          <F>{"$$d\\eta=dx\\wedge dy\\wedge dz+dy\\wedge dz\\wedge dx+dz\\wedge dx\\wedge dy$$"}</F>
          <p>{"Each cyclic reordering of $dx\\wedge dy\\wedge dz$ is an even permutation (two swaps), so all three terms equal $dx\\wedge dy\\wedge dz$:"}</p>
          <F>{"$$d\\eta=3\\,dx\\wedge dy\\wedge dz$$"}</F>
          <p>{"This matches $\\nabla\\cdot\\langle x,y,z\\rangle=3$."}</p>
        </Solution>
      </Example>

      <Example title={"Using the Leibniz rule"}>
        <p>{"Let $f=x^2$ and $\\alpha=y\\,dz$. Compute $d(f\\alpha)$ directly and with the Leibniz rule."}</p>
        <Solution>
          <p>{"Directly: $f\\alpha=x^2y\\,dz$, so $d(f\\alpha)=(2xy\\,dx+x^2\\,dy)\\wedge dz=2xy\\,dx\\wedge dz+x^2\\,dy\\wedge dz$."}</p>
          <p>{"Leibniz with $k=0$: $d(f\\alpha)=df\\wedge\\alpha+f\\,d\\alpha=2x\\,dx\\wedge y\\,dz+x^2\\,dy\\wedge dz$. \u2713 Same result."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §5 ═════════════════════════════ */
function SectionD2() {
  return (
    <section className="section" id="dfm-d2">
      <SecHead n={5} title="The Fundamental Rule $d^2=0$" />
      <p>
        {"Applying $d$ twice always gives zero. This one rule packages Clairaut's theorem on mixed partials together with the two classic identities of vector calculus."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 $d\\circ d=0$"}>
        <p>{"For every smooth form $\\omega$, $d(d\\omega)=0$."}</p>
        <p>{"Proof for a function on $\\mathbb R^2$:"}</p>
        <F>{"$$d(df)=d(f_x\\,dx+f_y\\,dy)=(f_{xy}\\,dy)\\wedge dx+(f_{yx}\\,dx)\\wedge dy=(f_{yx}-f_{xy})\\,dx\\wedge dy=0$$"}</F>
        <p>{"by Clairaut's theorem. The same cancellation of mixed partials happens in every degree and dimension."}</p>
      </Box>

      <Example title={"Verifying $d^2=0$ on a function"}>
        <p>{"Check $d(df)=0$ for $f=xyz$."}</p>
        <Solution>
          <F>{"$$df=yz\\,dx+xz\\,dy+xy\\,dz$$"}</F>
          <F>{"$$d(df)=(z\\,dy+y\\,dz)\\wedge dx+(z\\,dx+x\\,dz)\\wedge dy+(y\\,dx+x\\,dy)\\wedge dz$$"}</F>
          <p>{"Collect: the $dx\\wedge dy$ terms are $z\\,dy\\wedge dx+z\\,dx\\wedge dy=0$; similarly the $dy\\wedge dz$ and $dz\\wedge dx$ terms cancel. So $d(df)=0$. \u2713"}</p>
        </Solution>
      </Example>

      <Example title={"Verifying $d^2=0$ on a 1-form"}>
        <p>{"Let $\\omega=xy\\,dz$ (from §4), with $d\\omega=x\\,dy\\wedge dz-y\\,dz\\wedge dx$. Show $d(d\\omega)=0$."}</p>
        <Solution>
          <F>{"$$d(d\\omega)=dx\\wedge dy\\wedge dz-dy\\wedge dz\\wedge dx=dx\\wedge dy\\wedge dz-dx\\wedge dy\\wedge dz=0$$"}</F>
          <p>{"In vector language: $\\nabla\\cdot\\langle x,-y,0\\rangle=1-1=0$."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §6 ═════════════════════════════ */
function SectionDictionary() {
  return (
    <section className="section" id="dfm-dictionary">
      <SecHead n={6} title="Gradient, Curl and Divergence as $d$" />
      <p>
        {"Match a vector field $\\mathbf F=\\langle P,Q,R\\rangle$ with two forms: its "}
        <strong>{"work 1-form"}</strong>
        {" $\\omega_{\\mathbf F}=P\\,dx+Q\\,dy+R\\,dz$ and its "}
        <strong>{"flux 2-form"}</strong>
        {" $\\Phi_{\\mathbf F}=P\\,dy\\wedge dz+Q\\,dz\\wedge dx+R\\,dx\\wedge dy$. Then the single operator $d$ becomes the three vector derivatives (compare "}
        <a href="/divergence-curl/1" style={LINK_STYLE}>{"Divergence & Curl"}</a>
        {")."}
      </p>

      <Box kind="thm" label={"Theorem \u2014 The Dictionary on $\\mathbb R^3$"}>
        <F>{"$$df=\\omega_{\\nabla f},\\qquad d\\,\\omega_{\\mathbf F}=\\Phi_{\\nabla\\times\\mathbf F},\\qquad d\\,\\Phi_{\\mathbf F}=(\\nabla\\cdot\\mathbf F)\\,dx\\wedge dy\\wedge dz$$"}</F>
        <p>{"Written out, the middle one is"}</p>
        <F>{"$$d\\omega_{\\mathbf F}=(R_y-Q_z)\\,dy\\wedge dz+(P_z-R_x)\\,dz\\wedge dx+(Q_x-P_y)\\,dx\\wedge dy$$"}</F>
      </Box>

      <div className="tbl-wrap">
        <table>
          <thead>
            <tr>
              <th>{"Forms"}</th>
              <th>{"Vector calculus"}</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>{"$d$ on 0-forms"}</td><td>{"Gradient $\\nabla f$"}</td></tr>
            <tr><td>{"$d$ on 1-forms"}</td><td>{"Curl $\\nabla\\times\\mathbf F$"}</td></tr>
            <tr><td>{"$d$ on 2-forms"}</td><td>{"Divergence $\\nabla\\cdot\\mathbf F$"}</td></tr>
            <tr><td>{"$d(df)=0$"}</td><td>{"$\\nabla\\times(\\nabla f)=\\mathbf 0$"}</td></tr>
            <tr><td>{"$d(d\\omega_{\\mathbf F})=0$"}</td><td>{"$\\nabla\\cdot(\\nabla\\times\\mathbf F)=0$"}</td></tr>
          </tbody>
        </table>
      </div>

      <Example title={"Computing curl with forms"}>
        <p>{"Use forms to find $\\nabla\\times\\mathbf F$ for $\\mathbf F=\\langle z,\\;x,\\;y\\rangle$."}</p>
        <Solution>
          <p>{"$\\omega_{\\mathbf F}=z\\,dx+x\\,dy+y\\,dz$, so"}</p>
          <F>{"$$d\\omega_{\\mathbf F}=dz\\wedge dx+dx\\wedge dy+dy\\wedge dz$$"}</F>
          <p>{"Reading the coefficients of $dy\\wedge dz,\\;dz\\wedge dx,\\;dx\\wedge dy$: $\\nabla\\times\\mathbf F=\\langle1,1,1\\rangle$. Check with the determinant formula: $\\langle R_y-Q_z,\\;P_z-R_x,\\;Q_x-P_y\\rangle=\\langle1-0,\\;1-0,\\;1-0\\rangle$. \u2713"}</p>
        </Solution>
      </Example>

      <Example title={"Computing divergence with forms"}>
        <p>{"Find $d\\Phi_{\\mathbf F}$ for $\\mathbf F=\\langle x^2,\\;xy,\\;-3xz\\rangle$."}</p>
        <Solution>
          <p>{"Only the matching variable survives in each term, because the other two $dx_i$ already appear:"}</p>
          <F>{"$$d\\Phi_{\\mathbf F}=\\Big(\\frac{\\partial}{\\partial x}x^2+\\frac{\\partial}{\\partial y}xy+\\frac{\\partial}{\\partial z}(-3xz)\\Big)dx\\wedge dy\\wedge dz=(2x+x-3x)\\,dV=0$$"}</F>
          <p>{"$\\mathbf F$ is divergence-free, so $\\Phi_{\\mathbf F}$ is a closed 2-form."}</p>
        </Solution>
      </Example>

      <div className="note">
        {"In the plane, $d(P\\,dx+Q\\,dy)=(Q_x-P_y)\\,dx\\wedge dy$ is the scalar curl that appears in Green's Theorem. Forms make Green, Stokes and Gauss three cases of one statement, which is the subject of Generalized Stokes' Theorem."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ §7 ═════════════════════════════ */
function SectionClosedExact() {
  return (
    <section className="section" id="dfm-closed-exact">
      <SecHead n={7} title="Closed and Exact Forms" />
      <p>
        {"Asking whether a vector field is conservative is asking whether a 1-form is the $d$ of a function. Forms give this question a clean general shape."}
      </p>

      <Box kind="def" label={"Definition \u2014 Closed and Exact"}>
        <p>{"A form $\\omega$ is "}<strong>{"closed"}</strong>{" if $d\\omega=0$, and "}<strong>{"exact"}</strong>{" if $\\omega=d\\alpha$ for some form $\\alpha$ of one lower degree."}</p>
        <p>{"Every exact form is closed, because $d\\omega=d(d\\alpha)=0$."}</p>
      </Box>

      <Box kind="thm" label={"Theorem \u2014 Poincaré Lemma"}>
        <p>{"On a star-shaped open set (for example $\\mathbb R^n$, a ball, or any convex set), every closed $k$-form with $k\\ge1$ is exact."}</p>
        <p>{"For 1-forms on $\\mathbb R^3$ this is the familiar statement: $\\nabla\\times\\mathbf F=\\mathbf 0$ on all of $\\mathbb R^3$ implies $\\mathbf F=\\nabla f$."}</p>
      </Box>

      <Example title={"Finding a potential"}>
        <p>{"Show $\\omega=(2xy+z)\\,dx+x^2\\,dy+x\\,dz$ is closed on $\\mathbb R^3$, and find $f$ with $df=\\omega$."}</p>
        <Solution>
          <p>{"With $P=2xy+z$, $Q=x^2$, $R=x$: $Q_x-P_y=2x-2x=0$, $P_z-R_x=1-1=0$, $R_y-Q_z=0-0=0$. So $d\\omega=0$."}</p>
          <p>{"$\\mathbb R^3$ is star-shaped, so $\\omega$ is exact. Integrate $f_x=2xy+z$: $f=x^2y+xz+g(y,z)$. Then $f_y=x^2+g_y=x^2$ and $f_z=x+g_z=x$, so $g$ is constant:"}</p>
          <F>{"$$f(x,y,z)=x^2y+xz+C$$"}</F>
        </Solution>
      </Example>

      <Example title={"Closed but not exact: the angle form"}>
        <p>{"On $\\mathbb R^2\\setminus\\{\\mathbf 0\\}$ let $\\omega=\\dfrac{-y\\,dx+x\\,dy}{x^2+y^2}$. Show $\\omega$ is closed but not exact."}</p>
        <Solution>
          <p>{"With $P=\\dfrac{-y}{x^2+y^2}$ and $Q=\\dfrac{x}{x^2+y^2}$:"}</p>
          <F>{"$$Q_x=\\frac{(x^2+y^2)-2x^2}{(x^2+y^2)^2}=\\frac{y^2-x^2}{(x^2+y^2)^2},\\qquad P_y=-\\frac{(x^2+y^2)-2y^2}{(x^2+y^2)^2}=\\frac{y^2-x^2}{(x^2+y^2)^2}$$"}</F>
          <p>{"So $d\\omega=(Q_x-P_y)\\,dx\\wedge dy=0$: closed."}</p>
          <p>{"On the unit circle ($x=\\cos t$, $y=\\sin t$) the form becomes $(\\sin^2t+\\cos^2t)\\,dt=dt$, so $\\oint\\omega=2\\pi$. If $\\omega=df$, the integral around a closed curve would be $f(\\text{end})-f(\\text{start})=0$. Hence $\\omega$ is not exact."}</p>
          <p>{"Locally $\\omega=d\\theta$ (the polar angle), but $\\theta$ cannot be defined continuously all the way around the origin. The punctured plane is not star-shaped, so the Poincaré lemma does not apply."}</p>
        </Solution>
      </Example>
    </section>
  );
}

/* ═════════════════════════════ §8 ═════════════════════════════ */
function SectionPullback() {
  return (
    <section className="section" id="dfm-pullback">
      <SecHead n={8} title="Pullbacks and Integrating Forms" />
      <p>
        {"To integrate a form over a parametrized curve or surface, we "}
        <strong>{"pull it back"}</strong>
        {" to the parameter domain: substitute the parametrization into the coefficients and into every $dx_i$. The wedge product then produces the Jacobian automatically (compare "}
        <a href="/coordinate-transformations/1" style={LINK_STYLE}>{"Jacobians & Change of Variables"}</a>
        {")."}
      </p>

      <Box kind="def" label={"Definition \u2014 Pullback"}>
        <p>{"If $\\Phi(u,v)=\\langle x(u,v),y(u,v),z(u,v)\\rangle$, the pullback $\\Phi^*\\omega$ replaces each $x,y,z$ by its formula in $u,v$ and each $dx$ by $dx=x_u\\,du+x_v\\,dv$ (and similarly $dy$, $dz$). Two key facts:"}</p>
        <F>{"$$\\Phi^*(\\alpha\\wedge\\beta)=\\Phi^*\\alpha\\wedge\\Phi^*\\beta,\\qquad \\Phi^*(d\\omega)=d(\\Phi^*\\omega)$$"}</F>
      </Box>

      <Example title={"Polar coordinates and the Jacobian"}>
        <p>{"Pull back $dx\\wedge dy$ under $x=r\\cos\\theta$, $y=r\\sin\\theta$."}</p>
        <Solution>
          <F>{"$$dx=\\cos\\theta\\,dr-r\\sin\\theta\\,d\\theta,\\qquad dy=\\sin\\theta\\,dr+r\\cos\\theta\\,d\\theta$$"}</F>
          <F>{"$$dx\\wedge dy=r\\cos^2\\theta\\,dr\\wedge d\\theta-r\\sin^2\\theta\\,d\\theta\\wedge dr=r(\\cos^2\\theta+\\sin^2\\theta)\\,dr\\wedge d\\theta=r\\,dr\\wedge d\\theta$$"}</F>
          <p>{"The factor $r$ is exactly the polar Jacobian $\\dfrac{\\partial(x,y)}{\\partial(r,\\theta)}$. In general, $dx\\wedge dy=\\det\\dfrac{\\partial(x,y)}{\\partial(u,v)}\\,du\\wedge dv$."}</p>
        </Solution>
      </Example>

      <Box kind="def" label={"Definition \u2014 Integral of a 2-Form over a Surface"}>
        <p>{"For an oriented surface $S$ parametrized by $\\Phi:D\\to\\mathbb R^3$ (orientation given by $\\Phi_u\\times\\Phi_v$):"}</p>
        <F>{"$$\\iint_S\\eta=\\iint_D\\Phi^*\\eta=\\iint_D\\eta\\big(\\Phi_u,\\Phi_v\\big)\\,du\\,dv$$"}</F>
        <p>{"For the flux 2-form, $\\iint_S\\Phi_{\\mathbf F}=\\iint_S\\mathbf F\\cdot\\mathbf n\\,dS$: the flux integral."}</p>
      </Box>

      <Example title={"Integrating a 2-form over a parametrized surface"}>
        <p>{"Evaluate $\\displaystyle\\iint_S z\\,dx\\wedge dy$ where $S$ is the graph $z=x^2+y^2$ over the unit square $0\\le x,y\\le1$, oriented upward."}</p>
        <Solution>
          <p>{"Parametrize by $\\Phi(x,y)=\\langle x,y,x^2+y^2\\rangle$. Then $\\Phi^*(dx\\wedge dy)=dx\\wedge dy$ and $z=x^2+y^2$:"}</p>
          <F>{"$$\\iint_S z\\,dx\\wedge dy=\\int_0^1\\!\\!\\int_0^1(x^2+y^2)\\,dx\\,dy=\\frac13+\\frac13=\\frac23$$"}</F>
          <p>{"This is the flux of $\\mathbf F=\\langle0,0,z\\rangle$ upward through the surface."}</p>
        </Solution>
      </Example>

      <div className="note">
        {"The fact $\\Phi^*(d\\omega)=d(\\Phi^*\\omega)$ is what lets the next topic prove $\\int_M d\\omega=\\int_{\\partial M}\\omega$ once, on a simple parameter domain, and then transport it to any surface or region."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ Summary ═════════════════════════════ */
function SectionSummary() {
  const cards = [
    ["Basic 1-forms", "$dx(\\mathbf v)=v_1,\\;dy(\\mathbf v)=v_2,\\;dz(\\mathbf v)=v_3$"],
    ["Wedge rules", "$dy\\wedge dx=-dx\\wedge dy$, $\\;dx\\wedge dx=0$"],
    ["Graded commutativity", "$\\alpha\\wedge\\beta=(-1)^{kl}\\beta\\wedge\\alpha$"],
    ["2-form on two vectors", "$(dx\\wedge dy)(\\mathbf u,\\mathbf v)=u_1v_2-u_2v_1$"],
    ["Exterior derivative", "$df=f_x\\,dx+f_y\\,dy+f_z\\,dz$; $\\;d(f\\,dx_I)=df\\wedge dx_I$"],
    ["Leibniz rule", "$d(\\alpha\\wedge\\beta)=d\\alpha\\wedge\\beta+(-1)^k\\alpha\\wedge d\\beta$"],
    ["Nilpotence", "$d^2=0$: $\\;\\nabla\\times\\nabla f=\\mathbf 0$, $\\;\\nabla\\cdot(\\nabla\\times\\mathbf F)=0$"],
    ["Dictionary", "$d\\leftrightarrow\\nabla$, $\\;\\nabla\\times$, $\\;\\nabla\\cdot$ on 0-, 1-, 2-forms"],
    ["Closed / exact", "$d\\omega=0$ / $\\omega=d\\alpha$; Poincaré: closed $\\Rightarrow$ exact on star-shaped sets"],
    ["Pullback", "$dx\\wedge dy=\\det\\dfrac{\\partial(x,y)}{\\partial(u,v)}\\,du\\wedge dv$"],
  ];
  return (
    <section className="section" id="dfm-summary">
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
        {" one operator $d$ does the work of grad, curl and div, and one rule $d^2=0$ replaces both classic identities. Wedge products handle orientation and Jacobians automatically, so integrals of forms behave correctly under any change of variables."}
      </div>
    </section>
  );
}

/* ═════════════════════════════ Topic export ═════════════════════════════ */
export default function DifferentialFormsTopic() {
  return (
    <div id="differential-forms-exterior-derivative">
      <div className="opening-note-box">
        <p className="opening-note">
          <strong>{"Differential Forms & the Exterior Derivative."}</strong>{" "}
          {"We build $k$-forms from the basic 1-forms $dx,dy,dz$ using the wedge product, define the exterior derivative $d$, prove $d^2=0$, and show that $d$ is gradient, curl and divergence in one operator. We finish with closed and exact forms, the Poincaré lemma, and how forms are integrated using pullbacks. Prerequisites: partial derivatives, determinants, line and surface integrals."}
        </p>
      </div>
      <hr className="divider" />
      <SectionWhy />
      <hr className="divider" />
      <SectionOneForms />
      <hr className="divider" />
      <SectionWedge />
      <hr className="divider" />
      <SectionD />
      <hr className="divider" />
      <SectionD2 />
      <hr className="divider" />
      <SectionDictionary />
      <hr className="divider" />
      <SectionClosedExact />
      <hr className="divider" />
      <SectionPullback />
      <hr className="divider" />
      <SectionSummary />
      <RealLifeUse>
        Differential forms are the working language of modern physics and computation: Maxwell's equations collapse to $dF = 0$ and $d\star F = J$, finite-element solvers for electromagnetics use "Whitney forms" on meshes, computer-graphics tools compute mesh smoothing and vector-field design with discrete exterior calculus, and thermodynamics uses closed and exact 1-forms to separate state functions from path-dependent heat and work.
      </RealLifeUse>
      <hr className="divider" />
      <GuideMcqSection
        id="mcq-df-forms"
        badge="Practice"
        title="Differential Forms & the Exterior Derivative — Quiz"
        scoreId="score-df-forms"
        section={DF_FORMS_QUIZ_KEY}
        questions={MV_DF_FORMS_QUIZ}
      />
    </div>
  );
}
