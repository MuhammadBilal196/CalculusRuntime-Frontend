import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_COMPLEX_VECTOR_SPACES_QUIZ } from "../../data/laQuizzes";

export default function ComplexVectorSpacesGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`Complex Vector Spaces (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Complex Vector Spaces</div></div>
        <a className="sb-link" href="#complex-theory">Theory</a>
        <a className="sb-link" href="#complex-method">Method</a>
        <a className="sb-link" href="#complex-examples">Worked examples</a>
        {advanced && <a className="sb-link" href="#quiz-la-complex-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/linear-algebra/overview">Course overview</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra</div>
          <h1 className="ch-title">Complex Vector Spaces</h1>
          <p className="ch-sub">Hermitian and unitary matrices: geometry with complex coordinates</p>
          <p><Link to="/linear-algebra/vectors/1">Vector spaces</Link> · <Link to="/linear-algebra/orthogonality/1">Inner products</Link> · <Link to="/linear-algebra/eigen/1">Eigenvalues</Link></p>
          <p>Part {part} of 2. Part 1 develops complex scalars, inner products and projections; Part 2 covers Hermitian and unitary matrices and the 20-question topic checkpoint.</p>
        </header>
        <section className="section" id="complex-theory">
          <h2 className="sec-title">{advanced ? "Hermitian and unitary matrices" : "Complex vector-space foundations"}</h2>
          {advanced ? (
            <>
              <TheoryBox title={"Hermitian matrices and real quadratic values"}>
                <p>{"A square matrix $H$ is Hermitian when $H^*=H$. Equivalently $h_{jk}=\\overline{h_{kj}}$. Its diagonal entries must be real, and off-diagonal entries occur in conjugate pairs. A real Hermitian matrix is symmetric; a complex symmetric matrix with $H^T=H$ need not be Hermitian."}</p>
                <p>{"For every vector $x$, the scalar $x^*Hx$ is real because its conjugate equals $x^*H^*x=x^*Hx$. If $Hv=\\lambda v$ with $v\\ne0$, then $v^*Hv=\\lambda v^*v$. The numerator is real and $v^*v>0$, so $\\lambda$ is real."}</p>
                <p>{"Hermitian does not mean positive definite. For example $\\operatorname{diag}(1,-1)$ is Hermitian but gives both positive and negative quadratic values. For arbitrary $A$, however, $A^*A$ is Hermitian positive semidefinite because $x^*A^*Ax=\\|Ax\\|_2^2\\ge0$. It is positive definite exactly when the columns of $A$ are linearly independent."}</p>
              </TheoryBox>
              <TheoryBox title={"Orthogonal eigenvectors and the spectral theorem"}>
                <p>{"If $Hu=\\lambda u$ and $Hv=\\mu v$ for a Hermitian $H$, then $u^*Hv=\\mu u^*v$ and also $(Hu)^*v=\\overline\\lambda u^*v=\\lambda u^*v$. Since $H^*=H$, these expressions agree, giving $(\\mu-\\lambda)u^*v=0$. Distinct eigenvalues therefore have orthogonal eigenvectors."}</p>
                <p>{"The finite-dimensional Hermitian spectral theorem guarantees $H=Q\\Lambda Q^*$, where $Q$ is unitary and $\\Lambda$ is real diagonal. For repeated eigenvalues, choose an orthonormal basis inside each eigenspace; arbitrary eigenvectors with the same eigenvalue are not automatically orthogonal."}</p>
                <p>{"The columns of $Q$ give coordinates $c=Q^*x$ and $x=Qc$. In these coordinates $x^*Hx=c^*\\Lambda c=\\sum_j\\lambda_j|c_j|^2$. This explains why eigenvalue signs determine definiteness and why the Rayleigh quotient $x^*Hx/(x^*x)$ lies between the smallest and largest eigenvalues for $x\\ne0$."}</p>
              </TheoryBox>
              <TheoryBox title={"Unitary matrices preserve geometry"}>
                <p>{"A square matrix $U\\in\\mathbb C^{n\\times n}$ is unitary when $U^*U=I$, equivalently $U^{-1}=U^*$ and $UU^*=I$. Its columns and rows are orthonormal. The real special case is an orthogonal matrix."}</p>
                <p>{"For any $x,y$, $(Ux)^*(Uy)=x^*U^*Uy=x^*y$. Thus unitary maps preserve inner products, Euclidean lengths, distances, and orthogonality. In particular $\\|Ux-Uy\\|_2=\\|x-y\\|_2$. All singular values equal one, so a square unitary matrix has 2-norm condition number one."}</p>
                <p>{"If $Uv=\\lambda v$ with $v\\ne0$, norm preservation yields $\\|v\\|_2=\\|\\lambda v\\|_2=|\\lambda|\\|v\\|_2$, hence $|\\lambda|=1$. Its determinant also has modulus one. These numbers need not be real: $\\operatorname{diag}(i,1)$ is unitary."}</p>
                <p>{"A rectangular matrix with orthonormal columns satisfies $Q^*Q=I_k$ but is not called a unitary matrix here. When $k<n$, $QQ^*$ is the projection onto its column space, not the identity on all of $\\mathbb C^n$. Square shape is essential to the inverse statement."}</p>
              </TheoryBox>
              <TheoryBox title={"Connecting the two structures"}>
                <p>{"Hermitian and unitary describe different properties. A matrix satisfying both has real eigenvalues of modulus one, so they are $+1$ or $-1$. Equivalently, a Hermitian unitary matrix obeys $H^2=I$. A Hermitian matrix such as $2I$ is generally not unitary."}</p>
                <p>{"Both types are normal: $A^*A=AA^*$. Over $\\mathbb C$, normal matrices admit an orthonormal eigenvector basis, but a general complex matrix may still be defective. Moving from real to complex scalars guarantees roots of the characteristic polynomial, not diagonalizability."}</p>
                <p>{"In signal processing, complex coordinates encode phase as well as magnitude. The normalized discrete Fourier matrix has entries $F_{jk}=n^{-1/2}e^{-2\\pi i jk/n}$ for $j,k=0,\\ldots,n-1$. Its column inner products are finite geometric sums: one for equal columns and zero otherwise, so $F^*F=I$. The transform preserves signal energy and has inverse $F^*$."}</p>
                <p>{"For a complex data vector $z$, the matrix $zz^*$ is Hermitian positive semidefinite; sums of these matrices retain both properties. This structure appears in covariance calculations and complex least squares. In numerical work, verify $H^*\\approx H$ or $U^*U\\approx I$ with a scale-appropriate tolerance instead of demanding exact floating-point equality."}</p>
              </TheoryBox>
            </>
          ) : (
            <>
              <TheoryBox title={"Complex numbers and scalar fields"}>
                <p>{"A complex number has the form $z=a+bi$, where $a,b\\in\\mathbb R$ and $i^2=-1$. Its conjugate is $\\overline z=a-bi$ and its modulus is $|z|=\\sqrt{a^2+b^2}$. Consequently $z\\overline z=|z|^2\\ge0$. Conjugation preserves sums and products: $\\overline{z+w}=\\overline z+\\overline w$ and $\\overline{zw}=\\overline z\\,\\overline w$."}</p>
                <p>{"The space $\\mathbb C^n$ consists of columns with $n$ complex entries. Addition is componentwise and scalar multiplication allows every scalar in $\\mathbb C$. The familiar vector-space axioms, span, basis, rank and nullity still apply, but all coefficients must be interpreted over the chosen field."}</p>
                <p>{"The field matters. The pair $1,i$ is independent over $\\mathbb R$, since $a+bi=0$ with real $a,b$ forces both to vanish. Over $\\mathbb C$ the same pair is dependent: $i\\cdot1-1\\cdot i=0$. Thus $\\dim_{\\mathbb C}\\mathbb C^n=n$, whereas $\\dim_{\\mathbb R}\\mathbb C^n=2n$."}</p>
              </TheoryBox>
              <TheoryBox title={"Subspaces, bases and complex-linear maps"}>
                <p>{"A nonempty subset $W\\subseteq\\mathbb C^n$ is a complex subspace when $\\alpha u+\\beta v\\in W$ for all $u,v\\in W$ and all $\\alpha,\\beta\\in\\mathbb C$. For example, the solutions of a homogeneous complex system $Az=0$ form a complex subspace. Gaussian elimination uses complex arithmetic but the pivot/free-variable reasoning is unchanged."}</p>
                <p>{"The set $\\mathbb R^n$ inside $\\mathbb C^n$ is closed under real scalars, but for $n\\ge1$ it is not a complex subspace: multiplying a nonzero real coordinate by $i$ leaves the set. Always test closure using the actual scalar field."}</p>
                <p>{"A map $T$ is complex-linear if $T(\\alpha x+\\beta y)=\\alpha T(x)+\\beta T(y)$ for complex scalars. Matrix multiplication by a complex matrix is complex-linear. Conjugation $T(z)=\\overline z$ is real-linear but not complex-linear, because $T(iz)=-iT(z)$. A map on complex vectors need not be complex-linear merely because its input is complex."}</p>
              </TheoryBox>
              <TheoryBox title={"Conjugate transpose, length and orthogonality"}>
                <p>{"For $A\\in\\mathbb C^{m\\times n}$, its adjoint or conjugate transpose is $A^*=\\overline A^{\\,T}\\in\\mathbb C^{n\\times m}$. The identities $(A^*)^*=A$, $(AB)^*=B^*A^*$ and $(\\alpha A)^*=\\overline\\alpha A^*$ follow entry by entry. The symbol $A^H$ is another common notation."}</p>
                <p>{"This guide uses $\\langle x,y\\rangle=x^*y=\\sum_j\\overline{x_j}y_j$. It is conjugate-linear in the first argument, linear in the second, and conjugate symmetric: $\\langle y,x\\rangle=\\overline{\\langle x,y\\rangle}$. Some books reverse the convention; the formulas here consistently use the first-argument conjugation convention."}</p>
                <p>{"The Euclidean norm is $\\|x\\|_2=\\sqrt{x^*x}=\\sqrt{\\sum_j|x_j|^2}$. Replacing $x^*$ by $x^T$ fails: for $x=(1,i)^T$, $x^Tx=0$ even though $x\\ne0$, whereas $x^*x=2$. Two vectors are orthogonal precisely when $x^*y=0$."}</p>
              </TheoryBox>
              <TheoryBox title={"Orthonormal bases and projections"}>
                <p>{"The complex Cauchy–Schwarz inequality is $|x^*y|\\le\\|x\\|_2\\|y\\|_2$. An orthonormal family satisfies $q_j^*q_k=\\delta_{jk}$. The inner product itself can be complex, so use its modulus in this inequality rather than treating it as an ordered real number."}</p>
                <p>{"For nonzero $u$, the projection of $v$ onto its complex span is $p=u(u^*v)/(u^*u)$. Indeed $u^*(v-p)=u^*v-(u^*u)(u^*v)/(u^*u)=0$, proving that the residual is orthogonal. For orthonormal columns in $Q\\in\\mathbb C^{n\\times k}$, the projection is $p=QQ^*v$."}</p>
                <p>{"Complex Gram–Schmidt subtracts $q_j(q_j^*v)$ for every previously computed unit vector, then normalizes the residual by its positive real norm. A zero residual means the original vector was dependent. Never replace $q_j^*v$ with $q_j^Tv$ when the entries are complex."}</p>
              </TheoryBox>
            </>
          )}
        </section>
        <section className="section" id="complex-method">
          <h2 className="sec-title">A reliable calculation sequence</h2>
          <ProcedureBox
            title={advanced ? "Classify and use a complex matrix" : "Work with a complex subspace or projection"}
            steps={advanced ? ["Check that the matrix is square before asking whether it is Hermitian or unitary.", "Compute the conjugate transpose carefully. Test $H^*=H$ for Hermitian structure or $U^*U=I$ for unitarity.", "For Hermitian diagonalization, find eigenvalues and eigenvectors, then normalize and orthogonalize within any repeated eigenspace.", "Check $Q^*Q=I$ and $HQ=Q\\Lambda$ before writing $H=Q\\Lambda Q^*$. For a unitary solve, use $x=U^*b$."] : ["State the scalar field. Test subspace closure with complex scalars, especially multiplication by $i$.", "Use conjugate transpose in inner products and compute squared norms as sums of squared moduli.", "For a projection onto a nonzero $u$, compute $p=u(u^*v)/(u^*u)$; for orthonormal columns use $QQ^*v$.", "Verify that the residual is orthogonal to the target subspace and that any claimed unit vectors have norm one."]}
          />
        </section>
        <section className="section" id="complex-examples">
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={4}
                title={"A Hermitian spectral decomposition"}
                setup={"Let $H=\\begin{pmatrix}2&i\\\\-i&2\\end{pmatrix}$."}
                steps={["Transposing and conjugating gives $H^*=H$.", "$\\det(H-\\lambda I)=(2-\\lambda)^2-1$, so the eigenvalues are $3$ and $1$.", "For $\\lambda=3$, choose $q_1=(i,1)^T/\\sqrt2$. For $\\lambda=1$, choose $q_2=(-i,1)^T/\\sqrt2$.", "Both vectors have norm one, and $q_1^*q_2=((-i)(-i)+1)/2=0$. Set $Q=[q_1\\ q_2]$."]}
                result={"$H=Q\\operatorname{diag}(3,1)Q^*$. Both eigenvalues are positive, so this particular Hermitian matrix is positive definite."}
                check={"$Hq_1=3q_1$, $Hq_2=q_2$, and the eigenvalue product $3$ equals $\\det H$."}
                mistake={"Assuming positivity follows from being Hermitian rather than checking eigenvalues."}
              />
              <WorkedExample
                number={5}
                title={"A unitary matrix with complex entries"}
                setup={"Let $U=\\frac1{\\sqrt2}\\begin{pmatrix}1&i\\\\i&1\\end{pmatrix}$."}
                steps={["$U^*=\\frac1{\\sqrt2}\\begin{pmatrix}1&-i\\\\-i&1\\end{pmatrix}$.", "Multiply to obtain $U^*U=\\frac12\\begin{pmatrix}2&0\\\\0&2\\end{pmatrix}=I$.", "For $x=(1,0)^T$, $Ux=(1,i)^T/\\sqrt2$, whose squared norm is $(1+1)/2=1$."]}
                result={"$U^{-1}=U^*$ and $U$ preserves every vector norm. It is not Hermitian because $U^*\\ne U$."}
                check={"Its eigenvalues are $(1+i)/\\sqrt2$ and $(1-i)/\\sqrt2$, both of modulus one."}
                mistake={"Treating $U^T=U$ as proof of Hermitian symmetry; conjugation is missing."}
              />
              <WorkedExample
                number={6}
                title={"Energy preservation in a two-point Fourier transform"}
                setup={"Use $F=\\frac1{\\sqrt2}\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$ on $x=(1,i)^T$."}
                steps={["$F^*F=I$, so $F$ is unitary (and happens to be real).", "$Fx=((1+i)/\\sqrt2,(1-i)/\\sqrt2)^T$.", "The input energy is $x^*x=2$. The output energy is $|1+i|^2/2+|1-i|^2/2=2$."]}
                result={"The transform changes coordinates while preserving energy; applying $F^*=F$ recovers $x$."}
                check={"$F^2=I$ for this two-point case."}
                mistake={"Omitting the $1/\\sqrt2$ normalization: the unnormalized transform scales squared norms by two."}
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title={"One set, two scalar fields"}
                setup={"Compare the vectors $1$ and $i$ in $\\mathbb C$ over the real and complex fields."}
                steps={["Over $\\mathbb R$, write $a+bi=0$ with real $a,b$. Equality of real and imaginary parts forces $a=b=0$.", "Over $\\mathbb C$, choose coefficients $a=i$, $b=-1$. Then $a\\cdot1+b\\cdot i=i-i=0$ with nonzero coefficients."]}
                result={"$\\{1,i\\}$ is a real basis of $\\mathbb C$, but is dependent over $\\mathbb C$. A complex basis is $\\{1\\}$."}
                check={"Every $z=a+bi$ is a real combination of $1,i$ and a complex multiple of $1$."}
                mistake={"Declaring independence without specifying the scalar field."}
              />
              <WorkedExample
                number={2}
                title={"An inner product and a norm"}
                setup={"Let $x=(1,i)^T$ and $y=(i,1)^T$."}
                steps={["Take the adjoint: $x^*=(1,-i)$.", "Compute $x^*y=1\\cdot i+(-i)\\cdot1=0$.", "Compute $x^*x=1+(-i)i=2$ and $y^*y=2$."]}
                result={"The vectors are orthogonal, each has norm $\\sqrt2$, and dividing each by $\\sqrt2$ gives an orthonormal basis."}
                check={"The determinant of $[x\\ y]$ is $1-i^2=2\\ne0$."}
                mistake={"Using $x^Ty=2i$ and incorrectly concluding that the vectors are not orthogonal."}
              />
              <WorkedExample
                number={3}
                title={"Project using the adjoint"}
                setup={"Project $v=(1,0)^T$ onto $q=(1,i)^T/\\sqrt2$."}
                steps={["Confirm $q^*q=1$. Compute the coordinate $q^*v=1/\\sqrt2$.", "Form $p=q(q^*v)=(1/2,i/2)^T$.", "The residual is $r=v-p=(1/2,-i/2)^T$. Then $q^*r=(1/2+(-i)(-i)/2)/\\sqrt2=0$."]}
                result={"$v=p+r$ with orthogonal components and $\\|v\\|_2^2=\\|p\\|_2^2+\\|r\\|_2^2=1/2+1/2$."}
                check={"$q^*p=q^*v$ and $q^*r=0$."}
                mistake={"Conjugating the wrong factor when computing $q^*v$."}
              />
            </>
          )}
        </section>
        <section className="section">
          <h2 className="sec-title">Check your reasoning</h2>
          <p>{advanced ? "Hermitian means self-adjoint, not necessarily positive definite. Unitary means a square matrix with orthonormal columns, not necessarily real entries. Neither property should be inferred from ordinary transpose alone." : "Always name the scalar field and conjugate the first vector in the inner product. A real subspace need not be a complex subspace, and a nonzero complex vector always has positive squared norm."}</p>
        </section>
        {advanced ? (
          <GuideMcqSection
            id="quiz-la-complex-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Complex Vector Spaces, Hermitian and Unitary Matrices"
            scoreId="score-la-complex-checkpoint"
            section="la-complex-checkpoint"
            questions={LA_COMPLEX_VECTOR_SPACES_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-la-complex-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to Hermitian and unitary matrices</h2>
            <p>The checkpoint in Part 2 covers both parts. Answer all 20 questions and score at least 80% to unlock Part 2 completion.</p>
            <Link to="/linear-algebra/complex-vector-spaces/2">Continue to Part 2 →</Link>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
