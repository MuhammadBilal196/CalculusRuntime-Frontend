import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_A_JORDAN_QUIZ } from "../../data/laQuizzes";

export default function JordanNormalFormGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`${"Jordan Normal Form"} (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Topic 3</div></div>
        <a className="sb-link" href="#la-a-jordan-theory">Theory</a>
        {advanced && <a className="sb-link" href="#la-a-jordan-method">Method</a>}
        <a className="sb-link" href="#la-a-jordan-examples">Worked examples</a>
        {advanced && <a className="sb-link" href="#quiz-la-a-jordan-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/linear-algebra/overview#module-a">All four topics</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Matrix Decompositions &amp; Factorizations</div>
          <h1 className="ch-title">Jordan Normal Form</h1>
          <p className="ch-sub">Generalized eigenvectors, chain structure, matrix powers, and exact canonical form</p>
          <p>Curriculum: University Linear Algebra.</p>
          <p><Link to="/linear-algebra/eigen/2">Review prerequisites</Link> · Part {part} of 2</p>
        </header>
        <section className="section" id="la-a-jordan-theory">
          {advanced ? (
            <>
              <TheoryBox title={"Powers of a Jordan block"}>
                <p>{"Write $J_m(\\lambda)=\\lambda I+N$, where $N^m=0$. Since the two terms commute, for nonnegative integer $k$, $J_m(\\lambda)^k=\\sum_{r=0}^{\\min(k,m-1)}\\binom{k}{r}\\lambda^{k-r}N^r$. The truncation reflects nilpotence, not an approximation. When $k-r=0$, the scalar factor is one, including at $\\lambda=0$."}</p>
                <p>{"For a size-two block with nonzero $\\lambda$, $J^k=\\lambda^kI+k\\lambda^{k-1}N$. Repeated eigenvalues therefore allow polynomial factors in $k$ as well as exponential factors. If $A=PJP^{-1}$, then $A^k=PJ^kP^{-1}$; keep the change-of-basis matrices on the correct sides."}</p>
                <p>{"For differential equations, $e^{tJ}=e^{\\lambda t}\\sum_{r=0}^{m-1}t^rN^r/r!$. A size-two chain produces $te^{\\lambda t}$ as well as $e^{\\lambda t}$. The same structure explains why repeated roots lead to polynomial-times-exponential terms in linear ODE solutions."}</p>
              </TheoryBox>
              <TheoryBox title={"Exact algebra versus numerical computation"}>
                <p>{"Jordan form is valuable for proofs and exact symbolic examples. It is sensitive to perturbations: changing a tiny entry can split a repeated eigenvalue or change block sizes. An apparent zero computed by rounding is not enough evidence for an exact chain or rank defect."}</p>
                <p>{"For floating-point computations, a Schur decomposition is usually preferable to constructing an exact Jordan structure. It uses a unitary similarity to triangular form, avoiding the demand to classify unstable block sizes. Use exact arithmetic in the worked Jordan examples, and distinguish exact nullspaces from numerical rank decisions."}</p>
                <p>{"Common mistakes include equating algebraic multiplicity with the number of blocks, using $\\ker(A)$ instead of $\\ker(A-\\lambda I)$, reversing chain order, and treating $P$ as orthogonal without proof. The check $AP=PJ$, together with $\\det P\\ne0$, catches many of these errors."}</p>
              </TheoryBox>
            </>
          ) : (
            <>
              <TheoryBox title={"When diagonalization runs out of eigenvectors"}>
                <p>{"Diagonalization $A=PDP^{-1}$ requires a basis of ordinary eigenvectors. A repeated eigenvalue need not prevent diagonalization; failure occurs when its eigenspace has dimension smaller than its algebraic multiplicity. Jordan form fills the missing directions with generalized eigenvectors rather than pretending additional ordinary eigenvectors exist."}</p>
                <p>{"Over $\\mathbb C$, every square matrix is similar to a block-diagonal Jordan matrix $J$. A block $J_m(\\lambda)$ has $\\lambda$ on the diagonal, ones immediately above it, and zeros elsewhere. Its size measures how long a generalized-eigenvector chain is needed. The blocks are unique up to ordering, but the vectors forming a Jordan basis need not be unique."}</p>
                <p>{"Over another field, the characteristic polynomial must split into linear factors for this scalar-block statement. A real matrix with nonreal eigenvalues can be handled over $\\mathbb C$; a real canonical description instead uses different real blocks. Specify the field before claiming a real Jordan basis."}</p>
              </TheoryBox>
              <TheoryBox title={"Chains and the equation AP = PJ"}>
                <p>{"For an eigenvalue $\\lambda$, a generalized eigenvector is annihilated by some power of $N=A-\\lambda I$. A length-$m$ chain satisfies $Nv_1=0$, $Nv_2=v_1$, ..., $Nv_m=v_{m-1}$. The first vector must be nonzero. This implies $Av_j=\\lambda v_j+v_{j-1}$ for $j>1$."}</p>
                <p>{"Place a chain in the columns of $P$ in the order $v_1,v_2,\\ldots,v_m$. The preceding equations become $AP=PJ$ for a block with superdiagonal ones. Reversing the columns changes the displayed convention. After assembling all chains, check that $P$ is invertible before writing $A=PJP^{-1}$."}</p>
                <p>{"Chain vectors are independent: if a linear combination of a single chain were zero, applying the highest useful power of $N$ isolates the coefficient of its last nonzero term. For several chains, their selection must jointly span the generalized eigenspace; arbitrary solutions chosen independently can create dependent columns."}</p>
              </TheoryBox>
              <TheoryBox title={"Reading block sizes from nullities"}>
                <p>{"The number of Jordan blocks for $\\lambda$ equals $d_1=\\dim\\ker(A-\\lambda I)$, its geometric multiplicity. Their sizes sum to its algebraic multiplicity. Let $d_k=\\dim\\ker(A-\\lambda I)^k$ and $d_0=0$. Then $d_k-d_{k-1}$ counts the blocks of size at least $k$."}</p>
                <p>{"A block of size $m$ contributes $\\min(k,m)$ to $d_k$, which proves the increment rule. Consequently the increments are nonincreasing, and $2d_k-d_{k-1}-d_{k+1}$ counts blocks of size exactly $k$. Compute nullities until they stabilize at the algebraic multiplicity."}</p>
                <p>{"The largest block size for $\\lambda$ is the exponent of $(t-\\lambda)$ in the minimal polynomial. The characteristic polynomial counts the total size instead. A matrix is diagonalizable exactly when every Jordan block has size one, equivalently when its minimal polynomial splits with no repeated linear factors."}</p>
              </TheoryBox>
            </>
          )}
        </section>
        {advanced && (
          <section className="section" id="la-a-jordan-method">
            <h2 className="sec-title">A reliable working procedure</h2>
            <ProcedureBox title="Step by step" steps={["Choose the field, factor the characteristic polynomial, and find algebraic multiplicities.", "Compute nullities of successive powers of $A-\\lambda I$ to infer block sizes for each eigenvalue.", "Choose top-level generalized vectors and apply $A-\\lambda I$ repeatedly to build independent chains.", "Place chain vectors from eigenvector to highest generalized vector into $P$.", "Construct $J$ with matching blocks; verify $AP=PJ$ and invertibility of $P$ before computing powers."]} />
          </section>
        )}
        <section className="section" id="la-a-jordan-examples">
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={3}
                title={"Compute a matrix power without repeated multiplication"}
                setup={"For $A=\\begin{pmatrix}2&3\\\\0&2\\end{pmatrix}$, find $A^4$."}
                steps={["Write $A=2I+K$ with $K=\\begin{pmatrix}0&3\\\\0&0\\end{pmatrix}$ and $K^2=0$.", "The binomial expansion reduces to $A^4=2^4I+4\\cdot2^3K$.", "The off-diagonal entry is $32\\cdot3=96$."]}
                result={"$A^4=\\begin{pmatrix}16&96\\\\0&16\\end{pmatrix}$."}
                check={"$A^2=\\begin{pmatrix}4&12\\\\0&4\\end{pmatrix}$; squaring this gives the same result."}
              />
              <WorkedExample
                number={4}
                title={"An exponential from a length-two chain"}
                setup={"Find $e^{tJ}$ for $J=\\begin{pmatrix}-1&1\\\\0&-1\\end{pmatrix}$."}
                steps={["Write $J=-I+N$, where $N^2=0$ and $-I$ commutes with $N$.", "$e^{tJ}=e^{-t}e^{tN}=e^{-t}(I+tN)$.", "The columns give fundamental solutions of $x\\prime=Jx$."]}
                result={"$e^{tJ}=e^{-t}\\begin{pmatrix}1&t\\\\0&1\\end{pmatrix}$."}
                check={"At $t=0$ it equals $I$; differentiation gives $J e^{tJ}$."}
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title={"A defective 2 by 2 matrix"}
                setup={"Find a Jordan basis for $A=\\begin{pmatrix}2&3\\\\0&2\\end{pmatrix}$."}
                steps={["The only eigenvalue is $2$, with algebraic multiplicity two. $A-2I$ has rank one, so geometric multiplicity is one.", "Choose $v_1=(1,0)^T$. Solve $(A-2I)v_2=v_1$ to obtain $v_2=(0,1/3)^T$.", "$P=\\operatorname{diag}(1,1/3)$ gives $J=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$."]}
                result={"$A=PJP^{-1}$."}
                check={"$AP=PJ=\\begin{pmatrix}2&1\\\\0&2/3\\end{pmatrix}$ and $\\det P=1/3$."}
              />
              <WorkedExample
                number={2}
                title={"Infer a partition from kernels"}
                setup={"A nilpotent $5\\times5$ matrix has $d_1=2$, $d_2=4$, $d_3=5$. Find its Jordan block sizes."}
                steps={["The increments are $2,2,1$, so there are two blocks, both at least size two, and only one at least size three.", "The sizes are therefore $3$ and $2$, summing to five.", "The minimal polynomial is $t^3$ and the rank is $5-d_1=3$."]}
                result={"$J=\\operatorname{diag}(J_3(0),J_2(0))$ up to block order."}
                check={"Block contributions to nullity are $1+1=2$, $2+2=4$, and $3+2=5$."}
              />
            </>
          )}
        </section>
        {advanced ? (
          <GuideMcqSection
            id="quiz-la-a-jordan-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title={"Jordan Normal Form"}
            scoreId="score-la-a-jordan-checkpoint"
            section="la-a-jordan-checkpoint"
            questions={LA_A_JORDAN_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-la-a-jordan-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to the topic checkpoint</h2>
            <p>Part 1 develops the foundations. Part 2 adds applications and the single 20-question checkpoint for this topic. Complete all questions and score at least 80% to unlock Part 2 completion.</p>
            <Link to="/linear-algebra/jordan-normal-form/2">Continue to Part 2 →</Link>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
