import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_A_CHOLESKY_QUIZ } from "../../data/laQuizzes";

export default function CholeskyDecompositionGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`${"Cholesky Decomposition"} (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Topic 2</div></div>
        <a className="sb-link" href="#la-a-cholesky-theory">Theory</a>
        {advanced && <a className="sb-link" href="#la-a-cholesky-method">Method</a>}
        <a className="sb-link" href="#la-a-cholesky-examples">Worked examples</a>
        {advanced && <a className="sb-link" href="#quiz-la-a-cholesky-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/linear-algebra/overview#module-a">All four topics</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Matrix Decompositions &amp; Factorizations</div>
          <h1 className="ch-title">Cholesky Decomposition</h1>
          <p className="ch-sub">Positive-definite structure, square-root factors, and efficient symmetric solves</p>
          <p>Curriculum: University Linear Algebra.</p>
          <p><Link to="/linear-algebra/matrices/1">Review prerequisites</Link> · Part {part} of 2</p>
        </header>
        <section className="section" id="la-a-cholesky-theory">
          {advanced ? (
            <>
              <TheoryBox title={"Solves, cost, and determinants"}>
                <p>{"To solve $Ax=b$ with $A=LL^T$, solve $Ly=b$, followed by $L^Tx=y$. Forward substitution uses the lower factor and back substitution its transpose. Store only one triangular factor; for repeated right-hand sides, reuse it."}</p>
                <p>{"Dense Cholesky uses about $n^3/3$ operations, roughly half the leading work of general LU, and stores about $n(n+1)/2$ entries. These savings come from symmetry, not from ignoring mathematical conditions. Standard SPD Cholesky does not require row pivoting in exact arithmetic."}</p>
                <p>{"Because $\\det A=\\prod_i l_{ii}^2$, a robust way to evaluate large or small determinants is $\\log\\det A=2\\sum_i\\log l_{ii}$. This avoids explicitly multiplying many magnitudes that may overflow or underflow. It is useful in Gaussian likelihood calculations and covariance models."}</p>
              </TheoryBox>
              <TheoryBox title={"Applications and responsible numerical use"}>
                <p>{"Positive-definite matrices arise in quadratic energy models, some stiffness matrices after appropriate constraints, and positive-definite covariance models. If $z$ has covariance $I$, then $Lz$ has covariance $LL^T=A$; this provides a constructive way to generate correlated variables."}</p>
                <p>{"For full-column-rank $B$, the normal matrix $B^TB$ is SPD, so Cholesky can solve least-squares normal equations. However, $\\kappa_2(B^TB)=\\kappa_2(B)^2$. Forming the normal matrix may lose accuracy for ill-conditioned data. QR or SVD avoids this particular squaring of sensitivity."}</p>
                <p>{"Verify both structure and arithmetic: check $A=A^T$, confirm positive pivots, compute $A-LL^T$, and substitute the solution into $Ax=b$. A small scaled factorization residual supports arithmetic correctness; it is not proof that an ill-conditioned downstream estimate is accurate."}</p>
              </TheoryBox>
            </>
          ) : (
            <>
              <TheoryBox title={"The factorization and its assumptions"}>
                <p>{"A real symmetric matrix $A$ is positive definite when $x^TAx>0$ for every nonzero $x$. Cholesky states that such a matrix has a unique lower-triangular factor $L$ with positive diagonal entries for which $A=LL^T$. The positive diagonal fixes the otherwise possible sign choices."}</p>
                <p>{"In a complex vector space the corresponding condition is Hermitian positive definiteness: $A=A^*$ and $x^*Ax>0$ for nonzero $x$. The factorization becomes $A=LL^*$, where star means conjugate transpose. Do not use the real transpose formula for general complex data."}</p>
                <p>{"Symmetry alone is insufficient. For example, $\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$ is symmetric but has eigenvalues $3$ and $-1$. Positive trace, positive diagonal entries, or positive determinant alone are also insufficient tests in general dimensions. For a symmetric matrix, Sylvester’s criterion requires every leading principal minor to be positive."}</p>
              </TheoryBox>
              <TheoryBox title={"Deriving the recurrence"}>
                <p>{"Compare entries in $A=LL^T$. At a diagonal entry, $a_{jj}=\\sum_{k<j}l_{jk}^2+l_{jj}^2$, so $l_{jj}=\\sqrt{a_{jj}-\\sum_{k<j}l_{jk}^2}$. For $i>j$, $a_{ij}=\\sum_{k<j}l_{ik}l_{jk}+l_{ij}l_{jj}$, hence $l_{ij}=(a_{ij}-\\sum_{k<j}l_{ik}l_{jk})/l_{jj}$."}</p>
                <p>{"Process one column at a time. The square root is taken only after previously computed columns have been subtracted. A useful interpretation is that each pivot measures remaining energy after earlier directions have been removed. Positive definiteness guarantees this remaining energy is strictly positive in exact arithmetic."}</p>
                <p>{"For the block matrix $A=\\begin{pmatrix}a&r^T\\\\r&B\\end{pmatrix}$ with $a>0$, the remaining matrix is the Schur complement $S=B-rr^T/a$. If $A$ is SPD, then $S$ is SPD: evaluate the quadratic form at $(-r^Ty/a,y)^T$ to obtain $y^TSy>0$. Recursing on $S$ proves existence; the positive square-root choice and recurrence prove uniqueness."}</p>
              </TheoryBox>
              <TheoryBox title={"Semidefinite and indefinite boundaries"}>
                <p>{"A positive-semidefinite matrix allows $x^TAx=0$ for some nonzero $x$. A square-root factor may still exist, but the strictly positive-diagonal algorithm can encounter zero pivots and division by zero. Do not silently apply the SPD algorithm unchanged. Rank-revealing or pivoted variants and an eigenvalue factorization may be appropriate."}</p>
                <p>{"Indefinite symmetric matrices require another approach, often a pivoted $LDL^T$ factorization whose diagonal factor may contain $2\\times2$ blocks. In the positive-definite case, $LDL^T$ with unit-diagonal $L$ separates positive diagonal pivots and avoids explicit square roots until a Cholesky factor is desired."}</p>
                <p>{"In finite precision, near-singularity can cause a theoretically positive pivot to be computed as zero or negative. Check symmetry, scaling, and conditioning instead of replacing a negative radicand by its absolute value; that replacement would factor a different matrix without explaining the change."}</p>
              </TheoryBox>
            </>
          )}
        </section>
        {advanced && (
          <section className="section" id="la-a-cholesky-method">
            <h2 className="sec-title">A reliable working procedure</h2>
            <ProcedureBox title="Step by step" steps={["Confirm symmetry (or Hermitian symmetry) and establish positive definiteness for the problem.", "For column $j$, subtract previous squared entries from $a_{jj}$ and take the positive square root.", "Compute entries below the pivot from the recurrence; never divide by a zero pivot.", "Check $LL^T=A$ for real data, or $LL^*=A$ for complex data.", "Forward-solve with $L$, then back-solve with its transpose or adjoint, and check the original residual."]} />
          </section>
        )}
        <section className="section" id="la-a-cholesky-examples">
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={3}
                title={"Solve with one stored triangle"}
                setup={"Use $A=\\begin{pmatrix}4&2\\\\2&3\\end{pmatrix}$ to solve $Ax=(6,5)^T$."}
                steps={["For $L=\\begin{pmatrix}2&0\\\\1&\\sqrt2\\end{pmatrix}$, solve $Ly=b$: $y_1=3$, $y_2=(5-3)/\\sqrt2=\\sqrt2$.", "Solve $L^Tx=y$: $\\sqrt2x_2=\\sqrt2$, so $x_2=1$.", "$2x_1+x_2=3$ gives $x_1=1$."]}
                result={"$x=(1,1)^T$."}
                check={"$Ax=(6,5)^T$."}
              />
              <WorkedExample
                number={4}
                title={"Recognize why an algorithm stops"}
                setup={"Compare $A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$ and $B=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$."}
                steps={["For $A$, the first column would be $(1,2)^T$, leaving second radicand $1-4=-3$.", "For $B$, it would be $(1,1)^T$, leaving second radicand zero.", "The first matrix is indefinite; the second is rank-one positive semidefinite. Neither has the required strictly positive pivots."]}
                result={"Use an algorithm suited to the matrix class rather than forcing the SPD recurrence."}
                check={"For $A$, $(1,-1)A(1,-1)^T=-2$. For $B$, that quadratic form is zero."}
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title={"A two-dimensional SPD factor"}
                setup={"Factor $A=\\begin{pmatrix}4&2\\\\2&3\\end{pmatrix}$."}
                steps={["The leading principal minors are $4>0$ and $12-4=8>0$, so $A$ is SPD.", "$l_{11}=2$ and $l_{21}=2/2=1$.", "$l_{22}=\\sqrt{3-1}=\\sqrt2$."]}
                result={"$L=\\begin{pmatrix}2&0\\\\1&\\sqrt2\\end{pmatrix}$."}
                check={"$LL^T=\\begin{pmatrix}4&2\\\\2&1+2\\end{pmatrix}=A$."}
              />
              <WorkedExample
                number={2}
                title={"A three-dimensional recurrence"}
                setup={"Factor $A=\\begin{pmatrix}4&2&2\\\\2&5&1\\\\2&1&2\\end{pmatrix}$."}
                steps={["Column one is $(2,1,1)^T$.", "$l_{22}=\\sqrt{5-1}=2$ and $l_{32}=(1-1\\cdot1)/2=0$.", "$l_{33}=\\sqrt{2-1^2-0^2}=1$."]}
                result={"$L=\\begin{pmatrix}2&0&0\\\\1&2&0\\\\1&0&1\\end{pmatrix}$."}
                check={"The row inner products of $L$ give all entries of $A$; $\\det A=(2\\cdot2\\cdot1)^2=16$."}
              />
            </>
          )}
        </section>
        {advanced ? (
          <GuideMcqSection
            id="quiz-la-a-cholesky-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title={"Cholesky Decomposition"}
            scoreId="score-la-a-cholesky-checkpoint"
            section="la-a-cholesky-checkpoint"
            questions={LA_A_CHOLESKY_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-la-a-cholesky-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to the topic checkpoint</h2>
            <p>Part 1 develops the foundations. Part 2 adds applications and the single 20-question checkpoint for this topic. Complete all questions and score at least 80% to unlock Part 2 completion.</p>
            <Link to="/linear-algebra/cholesky-decomposition/2">Continue to Part 2 →</Link>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
