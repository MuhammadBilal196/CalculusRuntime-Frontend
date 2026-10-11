import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_EIGENVALUE_ALGORITHMS_QUIZ } from "../../data/laQuizzes";

export default function EigenvalueAlgorithmsGuide({ embedded = false }) {
  const { saveQuizScore } = useProgress();
  const content = (
    <div className={embedded ? "la-topic-content" : "main"}>
      {!embedded && <h1>Eigenvalue Algorithms: Power Iteration and QR</h1>}
      <section className="section" id="eigen-algorithms-goal">
        <h2 className="sec-title">Choose an algorithm for the numerical task</h2>
        <p>This topic studies how to compute eigenpairs without expanding a large characteristic polynomial. Power iteration seeks one dominant eigenpair using matrix-vector products. QR iteration transforms the matrix toward a form from which the full spectrum can be read. Matrix size, sparsity, symmetry and the desired part of the spectrum determine which approach is useful.</p>
        <p>Review <Link to="/linear-algebra/eigen/1">eigenvalues and eigenvectors</Link> for the underlying theory, <Link to="/linear-algebra/orthogonality/1">orthogonality</Link> for QR factorization, and <Link to="/linear-algebra/numerical-linear-algebra/1">Iterative Solvers</Link> for residual-based stopping. Here the focus is numerical algorithms.</p>
      </section>
      <section className="section" id="eigen-algorithms-power">
        <h2 className="sec-title">Power iteration</h2>
        <TheoryBox title="Multiply, normalize, estimate, check">
          <p>{"Start with $x_0\\ne0$. At each step form $y_{k+1}=Ax_k$ and, if it is nonzero, set $x_{k+1}=y_{k+1}/\\|y_{k+1}\\|_2$. Estimate the eigenvalue by the Rayleigh quotient $\\mu_{k+1}=x_{k+1}^TAx_{k+1}/(x_{k+1}^Tx_{k+1})$. Normalization controls scale, not convergence; the quotient recovers the sign that a norm alone would lose."}</p>
          <p>{"For complex vectors use the conjugate transpose $x^*$ instead of $x^T$. For real symmetric matrices, the Rayleigh quotient is real. Do not use the norm of $Ax$ as a signed eigenvalue estimate."}</p>
        </TheoryBox>
        <TheoryBox title="What makes the dominant direction emerge?">
          <p>{"Assume $A$ is diagonalizable with eigenvalues ordered so $|\\lambda_1|>|\\lambda_2|\\geq\\cdots$, and write $x_0=\\sum_i c_iv_i$ with $c_1\\ne0$. Then $A^kx_0=\\lambda_1^k[c_1v_1+\\sum_{i>1}c_i(\\lambda_i/\\lambda_1)^kv_i]$. The subdominant components shrink relative to the first, giving a typical asymptotic directional factor $|\\lambda_2/\\lambda_1|$."}</p>
          <p>{"A ratio near 1 means slow convergence. If the initial dominant coefficient is zero, the missing direction is not created in exact arithmetic. Equal dominant magnitudes can prevent convergence to one line. A negative dominant eigenvalue can make normalized vectors alternate signs even when their eigenvector line and Rayleigh estimate converge."}</p>
        </TheoryBox>
        <ProcedureBox title="Power iteration with explicit stopping and failure handling" steps={[
          "Validate dimensions, finite data, a nonzero starting vector, tolerances and an iteration limit; normalize the starting vector.",
          "Evaluate the Rayleigh quotient and residual of the current estimate. A starting eigenvector may already pass.",
          "Compute the next matrix-vector product. If it is zero, do not divide by its norm: the current nonzero vector is a zero eigenvector, which may not be dominant. Report this outcome or restart with another vector.",
          "Normalize the nonzero product, compute the Rayleigh quotient, and evaluate the eigenpair residual using the original matrix.",
          "Stop on an acceptable scaled residual. Otherwise repeat up to the iteration limit; report nonfinite values or nonconvergence instead of silently returning a successful result."
        ]} />
      </section>
      <section className="section" id="eigen-algorithms-residual">
        <h2 className="sec-title">Measure accuracy with the eigenpair residual</h2>
        <TheoryBox title="Residual accuracy and eigenvector accuracy are different">
          <p>{"For an approximate pair $(\\mu,x)$, define $r=Ax-\\mu x$. A scale-aware test is $\\|r\\|_2\\leq\\mathrm{atol}+\\mathrm{rtol}(\\|A\\|_F+|\\mu|)\\|x\\|_2$. The Frobenius norm is convenient to compute; the absolute tolerance handles small scales. Choose tolerances appropriate to the application and arithmetic precision."}</p>
          <p>{"For symmetric $A$, some eigenvalue is within $\\|r\\|_2/\\|x\\|_2$ of $\\mu$. To see this, expand $x$ in an orthonormal eigenbasis: $\\|r\\|_2^2=\\sum_i|c_i|^2|\\lambda_i-\\mu|^2$. Closeness to a particular eigenvector additionally depends on the spectral gap. For a nonnormal matrix, do not assume the same eigenvalue-error bound."}</p>
          <p>Small changes in successive eigenvalue estimates alone are not enough: estimates can stagnate. Check the residual and iteration limit. Comparing vectors directly can also mistake harmless sign changes for failure.</p>
        </TheoryBox>
      </section>
      <section className="section" id="eigen-algorithms-qr">
        <h2 className="sec-title">QR iteration and similarity</h2>
        <TheoryBox title="Reverse the factors">
          <p>{"For a real square matrix, factor $A_k=Q_kR_k$ with orthogonal $Q_k$ and upper triangular $R_k$, then form $A_{k+1}=R_kQ_k$. Since $Q_k^TA_kQ_k=R_kQ_k$, each step is an orthogonal similarity: it preserves eigenvalues, trace and determinant in exact arithmetic. Recomputing $Q_kR_k$ would only reconstruct $A_k$."}</p>
          <p>{"If $Z_k=Q_0Q_1\\cdots Q_{k-1}$, then $A_k=Z_k^TA_0Z_k$. When a symmetric problem converges to diagonal form, the columns of $Z_k$ approximate eigenvectors. For general nonsymmetric matrices these are Schur vectors, not necessarily individual eigenvectors."}</p>
        </TheoryBox>
        <TheoryBox title="Shifts accelerate separation">
          <p>{"Choose a shift $\\mu_k$, factor $A_k-\\mu_kI=Q_kR_k$, and set $A_{k+1}=R_kQ_k+\\mu_kI$. Adding the shift back restores $A_{k+1}=Q_k^TA_kQ_k$. The shift changes the progress of the iteration without changing the original spectrum."}</p>
          <p>A basic shift uses the trailing diagonal entry. For symmetric tridiagonal matrices, a Wilkinson shift chooses the eigenvalue of the trailing two-by-two block nearest the bottom-right entry. Shift selection can greatly improve convergence, but a simple unshifted QR iteration is not guaranteed to diagonalize every matrix. For example, real complex-conjugate pairs cannot appear on a purely real diagonal.</p>
        </TheoryBox>
        <TheoryBox title="Deflation and practical matrix forms">
          <p>{"In symmetric tridiagonal form, when $|a_{i+1,i}|\\leq\\mathrm{atol}+\\mathrm{rtol}(|a_{ii}|+|a_{i+1,i+1}|)$, the coupling may be treated as zero at the selected tolerance. The problem then splits into independent blocks: this is numerical deflation. Report the tolerance; setting a small entry to zero is a controlled perturbation, not an exact identity."}</p>
          <p>Practical QR eigensolvers first reduce a real symmetric matrix to tridiagonal form, or a real nonsymmetric matrix to upper Hessenberg form, using orthogonal transformations. Real nonsymmetric output is generally a quasi-triangular Schur form with one-by-one and two-by-two diagonal blocks. The latter can encode complex-conjugate pairs.</p>
        </TheoryBox>
        <ProcedureBox title="An educational QR workflow" steps={[
          "Validate a finite square matrix and record whether symmetry is expected. Keep the original matrix for later residual checks.",
          "Use a numerically stable QR factorization, such as Householder transformations, rather than explicitly inverting a matrix.",
          "Apply the shifted or unshifted RQ update. Accumulate orthogonal factors only if the vectors are needed.",
          "Monitor the relevant subdiagonal couplings and deflate converged blocks using a scale-aware tolerance. Preserve real two-by-two Schur blocks when they represent complex pairs.",
          "Enforce an iteration limit and verify computed eigenpairs against the original matrix. Trace and determinant checks are useful but cannot certify individual eigenpairs."
        ]} />
        <p>{"A dense matrix-vector product costs $O(n^2)$, or roughly $O(\\mathrm{nnz}(A))$ for a sparse matrix. A naive dense QR factorization costs $O(n^3)$ per step; structured implicit QR after reduction avoids repeating that full factorization. Use a tested numerical library for production eigensolvers; the small computations below explain the mechanism."}</p>
      </section>
      <section className="section" id="eigen-algorithms-examples">
        <h2 className="sec-title">Worked examples</h2>
        <WorkedExample number={1} title="Power iteration with a visible spectral gap" setup={"Take $A=\\operatorname{diag}(5,2)$ and $x_0=(1,1)^T$."} steps={[
          "$Ax_0=(5,2)^T$, so $x_1=(5,2)^T/\\sqrt{29}$.",
          "The Rayleigh quotient is $(5\\cdot25+2\\cdot4)/(25+4)=133/29\\approx4.5862$.",
          "The next direction is $(25,4)^T$, giving $x_2=(25,4)^T/\\sqrt{641}$ and $\\mu_2=(5\\cdot625+2\\cdot16)/641=3157/641\\approx4.9251$."
        ]} result={"The estimates approach 5 and the direction approaches $(1,0)^T$."} check={"The component ratio falls from $1$ to $2/5$ to $(2/5)^2$."} mistake="The largest eigenvalue magnitude is targeted, not necessarily the largest algebraic eigenvalue." />
        <WorkedExample number={2} title="Negative dominant eigenvalue" setup={"Take $A=\\operatorname{diag}(-4,1)$ with starting direction $(1,1)^T$."} steps={[
          "The first two unnormalized directions are $(-4,1)^T$ and $(16,1)^T$.",
          "The Rayleigh estimates are $(-4\\cdot16+1)/17=-63/17$ and $(-4\\cdot256+1)/257=-1023/257$.",
          "The first component changes sign each step; the ratio of the second component to its magnitude shrinks by $1/4$."
        ]} result={"The eigenvalue estimates approach $-4$ while the dominant line approaches the horizontal axis."} check="A norm-based estimate would lose the negative sign." mistake="Do not require successive normalized vectors to have the same orientation." />
        <WorkedExample number={3} title="One complete unshifted QR step" setup={"Let $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$."} steps={[
          "Normalize the first column: $q_1=(2,1)^T/\\sqrt5$. Subtract its projection from the second column to obtain $q_2=(-1,2)^T/\\sqrt5$.",
          "$Q=\\frac1{\\sqrt5}\\begin{pmatrix}2&-1\\\\1&2\\end{pmatrix}$ and $R=\\begin{pmatrix}\\sqrt5&4/\\sqrt5\\\\0&3/\\sqrt5\\end{pmatrix}$ satisfy $A=QR$.",
          "Reverse the factors: $RQ=\\begin{pmatrix}14/5&3/5\\\\3/5&6/5\\end{pmatrix}$."
        ]} result={"The off-diagonal magnitude drops from 1 to 3/5 in this step."} check={"The new trace is 4 and determinant is $(84-9)/25=3$, matching eigenvalues 3 and 1."} mistake="Reading the new diagonal as exact eigenvalues after one step would be premature." />
        <WorkedExample number={4} title="An exact shift in a small example" setup={"Use the same matrix and shift $\\mu=1$. Then $A-I=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$."} steps={[
          "Choose $Q=\\frac1{\\sqrt2}\\begin{pmatrix}1&-1\\\\1&1\\end{pmatrix}$ and $R=\\begin{pmatrix}\\sqrt2&\\sqrt2\\\\0&0\\end{pmatrix}$.",
          "The shifted matrix is rank deficient, but this QR factorization is still valid; no inverse is needed.",
          "$RQ=\\operatorname{diag}(2,0)$, so adding the shift back gives $RQ+I=\\operatorname{diag}(3,1)$."
        ]} result="This exact shift diagonalizes this particular two-by-two example in one step." check="The shift was already an exact eigenvalue; this example is not a general one-step convergence promise." mistake="Forgetting to add the shift back would report 2 and 0 instead of 3 and 1." />
        <WorkedExample number={5} title="A deflation decision and residual check" setup={"Consider $T=\\begin{pmatrix}3&10^{-13}\\\\10^{-13}&1\\end{pmatrix}$ with relative tolerance $10^{-10}$ and zero absolute tolerance."} steps={[
          "The local deflation threshold is $10^{-10}(|3|+|1|)=4\\times10^{-10}$.",
          "The coupling $10^{-13}$ is below that threshold, so treating it as zero splits the matrix into scalar blocks.",
          "For the approximate pair $(3,e_1)$, $Te_1-3e_1=(0,10^{-13})^T$, whose norm is $10^{-13}$."
        ]} result="Deflation is acceptable at this tolerance; the approximate eigenpair has a small residual." check="The residual was evaluated with the original nonzero coupling, not the deflated matrix." mistake="Small residuals certify an approximate relation; they do not mean floating-point answers are exact." />
      </section>
      <GuideMcqSection id="quiz-la-eigenvalue-algorithms-checkpoint" badge="Topic checkpoint · 20 questions"
        title="Eigenvalue Algorithms" scoreId="score-la-eigenvalue-algorithms-checkpoint" section="la-eigenvalue-algorithms-checkpoint"
        questions={LA_EIGENVALUE_ALGORITHMS_QUIZ}
        onComplete={(score, total) => saveQuizScore("guide-mcq-la-eigenvalue-algorithms-checkpoint", score, total)} />
    </div>
  );
  if (embedded) return content;
  return <StudyGuideShell guideClass="partial-derivatives-guide" title="Eigenvalue Algorithms">
    <nav className="sidebar" aria-label="Eigenvalue algorithms sections">
      <Link className="sb-link" to="/linear-algebra/overview#numerical-linear-algebra">Course overview</Link>
      <a className="sb-link" href="#eigen-algorithms-power">Power iteration</a>
      <a className="sb-link" href="#eigen-algorithms-residual">Residual checks</a>
      <a className="sb-link" href="#eigen-algorithms-qr">QR iteration</a>
      <a className="sb-link" href="#eigen-algorithms-examples">Worked examples</a>
      <a className="sb-link" href="#quiz-la-eigenvalue-algorithms-checkpoint">Checkpoint</a>
    </nav>{content}
  </StudyGuideShell>;
}
