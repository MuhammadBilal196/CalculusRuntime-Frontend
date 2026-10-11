import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, WorkedExample } from "./LaBlocks";
import { LA_MATRIX_CALCULUS_QUIZ } from "../../data/laQuizzes";
export default function MatrixCalculusGuide({ embedded = false }) {
  const { saveQuizScore } = useProgress();
  const content = (
    <div className={embedded ? "la-topic-content" : "main"}>
      {!embedded && <h1>Matrix Calculus</h1>}
      <p>Review <Link to="/linear-algebra/matrices/1">matrix operations</Link> and <Link to="/linear-algebra/quadratic-forms-definiteness">quadratic forms</Link>. We differentiate with respect to vectors and matrices using explicitly stated shapes.</p>
      <section className="section" id="matrix-calculus-section-1">
        <h2 className="sec-title">Declare shapes and derivative conventions</h2>
        <TheoryBox title={"Declare shapes and derivative conventions"}>
          <p>{"For a scalar function $f:\\mathbb R^n\\to\\mathbb R$, use a column gradient $\\nabla_x f\\in\\mathbb R^n$ defined by $df=(\\nabla_x f)^Tdx$. For a vector map $g:\\mathbb R^n\\to\\mathbb R^m$, use the output-by-input Jacobian $J_g\\in\\mathbb R^{m\\times n}$ with entries $\\partial g_i/\\partial x_j$, so $dg=J_gdx$."}</p>
          <p>{"For a scalar function of a real matrix $X\\in\\mathbb R^{m\\times n}$, its gradient has the same shape as X and satisfies $df=\\operatorname{tr}((\\nabla_X f)^T dX)$. This Frobenius inner-product convention makes transposes explicit. All formulas below are for real unconstrained variables unless a domain is stated. Complex derivatives require separate conventions."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="matrix-calculus-section-2">
        <h2 className="sec-title">Linear and quadratic vector functions</h2>
        <TheoryBox title={"Linear and quadratic vector functions"}>
          <p>{"If $f(x)=a^Tx$, then $df=a^Tdx$ and $\\nabla f=a$. If $g(x)=Ax+b$, its Jacobian is A, with the same output-by-input shape. A scalar quadratic gives $d(x^TAx)=(dx)^TAx+x^TAdx=x^T(A+A^T)dx$, so $\\nabla_x(x^TAx)=(A+A^T)x$."}</p>
          <p>{"Only when A is symmetric can this be simplified to $2Ax$. The Hessian is $A+A^T$. A skew-symmetric part contributes nothing to $x^TAx$. For a bilinear scalar $x^TAy$ with independent x and y, the gradients are $Ay$ with respect to x and $A^Tx$ with respect to y."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="matrix-calculus-section-3">
        <h2 className="sec-title">Least squares and the chain rule</h2>
        <TheoryBox title={"Least squares and the chain rule"}>
          <p>{"For $f(x)=\\frac12\\|Ax-b\\|_2^2$, set $r=Ax-b$. Then $df=r^TA\\,dx$ and $\\nabla f=A^T(Ax-b)$. The Hessian is $A^TA$, always positive semidefinite and positive definite exactly when A has full column rank. A minimizer satisfies the normal equations, but explicit inversion is not required and is often numerically undesirable."}</p>
          <p>{"Adding $\\frac\\lambda2\\|x\\|_2^2$ adds $\\lambda x$ to the gradient and $\\lambda I$ to the Hessian. For $\\lambda>0$, the ridge Hessian is positive definite even if A is rank deficient."}</p>
          <p>{"If $h(x)=f(g(x))$ and f is scalar-valued, then $\\nabla_x h=J_g(x)^T\\nabla_y f(g(x))$. Check dimensions: an n-by-m transpose multiplies an m-component gradient to produce an n-component gradient. For vector compositions, Jacobians multiply in the forward order $J_{f\\circ g}=J_f(g(x))J_g(x)$."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="matrix-calculus-section-4">
        <h2 className="sec-title">Differentiate with respect to a matrix</h2>
        <TheoryBox title={"Differentiate with respect to a matrix"}>
          <p>{"The identity $d\\operatorname{tr}(A^TX)=\\operatorname{tr}(A^TdX)$ gives gradient A. Also $\\frac12\\|X\\|_F^2=\\frac12\\operatorname{tr}(X^TX)$ has gradient X. Cyclic movement inside a trace is valid for compatible products, but arbitrary reordering is not."}</p>
          <p>{"For $F(X)=\\frac12\\|AX-B\\|_F^2$, write $R=AX-B$. Then $dF=\\operatorname{tr}(R^TA\\,dX)$ and $\\nabla_XF=A^T(AX-B)$. If A is p-by-m and X is m-by-n, the gradient is m-by-n as required."}</p>
          <p>{"Treat the entries of X as independent in these formulas. If X is constrained to be symmetric, orthogonal or otherwise restricted, the allowed perturbations and optimization step must respect that constraint; the unconstrained gradient is not itself a complete constrained optimization method."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="matrix-calculus-section-5">
        <h2 className="sec-title">Inverse, log determinant and numerical verification</h2>
        <TheoryBox title={"Inverse, log determinant and numerical verification"}>
          <p>{"For invertible X, differentiating $XX^{-1}=I$ gives $d(X^{-1})=-X^{-1}(dX)X^{-1}$. The order matters: matrix multiplication is not commutative. This is a linear map acting on a perturbation dX, not elementwise reciprocal differentiation."}</p>
          <p>{"On the positive-definite real symmetric domain, $d\\log\\det X=\\operatorname{tr}(X^{-1}dX)$, giving Frobenius gradient $X^{-T}$, which equals $X^{-1}$ there. More generally the same differential holds where the real log determinant is defined with positive determinant. Do not evaluate it at a singular matrix."}</p>
          <p>{"To check a claimed gradient G at X, choose a perturbation H and compare $[F(X+\\varepsilon H)-F(X-\\varepsilon H)]/(2\\varepsilon)$ with $\\operatorname{tr}(G^TH)$. The error is typically quadratic in epsilon for a sufficiently smooth function until roundoff dominates. Check shapes and domains before trusting a small numerical discrepancy."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="matrix-calculus-examples">
        <h2 className="sec-title">Worked examples</h2>
        <WorkedExample number={1} title={"Gradient and Hessian of a quadratic"} setup={"Let $f(x,y)=3x^2+2xy+4y^2$."}
          steps={["$\\nabla f=(6x+2y,2x+8y)^T$ and $H=\\begin{pmatrix}6&2\\\\2&8\\end{pmatrix}$.", "At $(1,-1)$ the gradient is $(4,-6)^T$.", "The leading principal minors are 6 and 44, so the Hessian is positive definite."]}
          result={"The function is strictly convex with its unique minimizer at the origin."} check={"The Hessian is symmetric because the mixed partial derivatives agree."} mistake={"Differentiating the cross term contributes to both gradient components."} />
        <WorkedExample number={2} title={"A Jacobian and chain rule"} setup={"Let $g(x,y)=(x^2y,x+3y)$ and $f(u,v)=\\frac12(u^2+v^2)$."}
          steps={["$J_g=\\begin{pmatrix}2xy&x^2\\\\1&3\\end{pmatrix}$. At $(1,2)$ it is $\\begin{pmatrix}4&1\\\\1&3\\end{pmatrix}$ and g is $(2,7)^T$.", "The outer gradient is $(u,v)^T$, so $\\nabla(f\\circ g)=J_g^T(2,7)^T=(15,23)^T$.", "Directly differentiating $\\frac12[x^4y^2+(x+3y)^2]$ gives the same two components."]}
          result={"The composed gradient is $(15,23)^T$."} check={"The transpose maps output sensitivities back to the input coordinates."} mistake={"Do not multiply a gradient on the wrong side of the Jacobian."} />
        <WorkedExample number={3} title={"Least-squares gradient"} setup={"Take $A=\\begin{pmatrix}1&0\\\\1&1\\\\0&1\\end{pmatrix}$, $b=(1,2,0)^T$ and $x=(1,1)^T$."}
          steps={["$Ax=(1,2,1)^T$ and the residual is $(0,0,1)^T$.", "$A^T(Ax-b)=(0,1)^T$.", "The Hessian is $A^TA=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$, whose eigenvalues are 1 and 3."]}
          result={"The point is not stationary because its gradient is nonzero."} check={"Both columns of A are independent, explaining the positive-definite Hessian."} mistake={"The one-half factor in the objective removes the extra factor of two."} />
        <WorkedExample number={4} title={"Matrix least squares"} setup={"Let $A=\\operatorname{diag}(2,1)$, $X=\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$ and $B=0$."}
          steps={["$AX=\\begin{pmatrix}2&4\\\\3&4\\end{pmatrix}$.", "$\\nabla_XF=A^TAX=\\begin{pmatrix}4&8\\\\3&4\\end{pmatrix}$.", "For H with only its top-right entry equal to 1, the directional derivative is 8."]}
          result={"The gradient has the same two-by-two shape as X."} check={"The objective contains one-half times (2 times X12) squared, whose derivative at X12=2 is 8."} mistake={"Multiplying by A instead of its transpose is not valid for a general matrix."} />
        <WorkedExample number={5} title={"Log determinant and inverse differential"} setup={"Let $X=\\operatorname{diag}(2,3)$ and $H=\\operatorname{diag}(1,-1)$."}
          steps={["$\\nabla\\log\\det X=\\operatorname{diag}(1/2,1/3)$.", "The directional derivative is $\\operatorname{tr}(X^{-1}H)=1/2-1/3=1/6$.", "The inverse differential in direction H is $-X^{-1}HX^{-1}=\\operatorname{diag}(-1/4,1/9)$."]}
          result={"The two derivatives are a scalar 1/6 and a matrix, respectively."} check={"For small perturbations X+tH remains positive definite, so the log determinant is defined."} mistake={"The inverse differential is not the same object as the gradient of the log determinant."} />
      </section>
      <GuideMcqSection id="quiz-la-matrix-calculus-checkpoint" title="Matrix Calculus" badge="Topic checkpoint · 20 questions"
        scoreId="score-la-matrix-calculus-checkpoint" section="la-matrix-calculus-checkpoint" questions={LA_MATRIX_CALCULUS_QUIZ}
        onComplete={(score, total) => saveQuizScore("guide-mcq-la-matrix-calculus-checkpoint", score, total)} />
    </div>
  );
  if (embedded) return content;
  return <StudyGuideShell guideClass="partial-derivatives-guide" title="Matrix Calculus">
    <nav className="sidebar" aria-label="Matrix Calculus sections">
      <Link className="sb-link" to="/linear-algebra/overview#modern-applications">Course overview</Link>
      <a className="sb-link" href="#matrix-calculus-section-1">Declare shapes and derivative conventions</a>
      <a className="sb-link" href="#matrix-calculus-section-2">Linear and quadratic vector functions</a>
      <a className="sb-link" href="#matrix-calculus-section-3">Least squares and the chain rule</a>
      <a className="sb-link" href="#matrix-calculus-section-4">Differentiate with respect to a matrix</a>
      <a className="sb-link" href="#matrix-calculus-section-5">Inverse, log determinant and numerical verification</a>
      <a className="sb-link" href="#matrix-calculus-examples">Worked examples</a>
      <a className="sb-link" href="#quiz-la-matrix-calculus-checkpoint">Checkpoint</a>
    </nav>{content}
  </StudyGuideShell>;
}
