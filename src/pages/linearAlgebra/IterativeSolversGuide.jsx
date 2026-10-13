import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_ITERATIVE_SOLVERS_QUIZ } from "../../data/laQuizzes";

export default function IterativeSolversGuide({ embedded = false }) {
  const { saveQuizScore } = useProgress();
  const content = (
    <div className={embedded ? "la-topic-content" : "main"}>
      {!embedded && <h1>Iterative Solvers: Jacobi, Gauss–Seidel, and SOR</h1>}
      <section className="section" id="iterative-foundations">
        <h2 className="sec-title">From a linear system to repeated updates</h2>
        <p>Large sparse systems often make repeated inexpensive updates more practical than storing a dense factorization. An iterative solver starts with an estimate, performs sweeps through the equations, and checks whether the residual is sufficiently small. Convergence depends on the matrix and method; iteration alone is not a guarantee of accuracy.</p>
        <p>Review <Link to="/linear-algebra/systems/1">linear systems</Link>, <Link to="/linear-algebra/eigen/1">eigenvalues</Link>, and <Link to="/linear-algebra/matrix-norms-conditioning">norms and conditioning</Link> before starting.</p>
        <TheoryBox title="Stationary iteration and the error equation">
          <p>{"For $Ax=b$, a stationary method has $x^{(k+1)}=Bx^{(k)}+c$, with the same iteration matrix $B$ at each step. If the exact solution is $x^*$ and $e^{(k)}=x^{(k)}-x^*$, subtracting the fixed-point equation gives $e^{(k+1)}=Be^{(k)}$, hence $e^{(k)}=B^ke^{(0)}$."}</p>
          <p>{"Convergence to the solution for every starting vector is equivalent to $\\rho(B)<1$, where the spectral radius is the largest eigenvalue magnitude. A compatible matrix norm satisfying $\\|B\\|<1$ is sufficient, but not necessary. A particular initial vector may converge even when the method is not convergent for all starts."}</p>
        </TheoryBox>
        <TheoryBox title="Use one consistent splitting convention">
          <p>{"Write $A=D+L+U$: $D$ is the diagonal, $L$ the strictly lower triangular part, and $U$ the strictly upper triangular part, with their original signs. The coordinate formulas below require every $a_{ii}\\ne0$. A zero diagonal may require a valid reordering (including the same row permutation of $b$) or another solver; reordering does not itself guarantee convergence."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="iterative-methods">
        <h2 className="sec-title">Three update rules</h2>
        <TheoryBox title="Jacobi: use the previous sweep everywhere">
          <p>{"Isolate each diagonal variable: $x_i^{(k+1)}=(b_i-\\sum_{j\\ne i}a_{ij}x_j^{(k)})/a_{ii}$. Thus $B_J=-D^{-1}(L+U)$ and $c_J=D^{-1}b$. Every component reads the old vector, so updates can run in parallel. Keep separate old and new vectors; overwriting the old vector changes the method."}</p>
        </TheoryBox>
        <TheoryBox title="Gauss–Seidel: use newly computed components immediately">
          <p>{"In index order, $x_i^{(k+1)}=(b_i-\\sum_{j<i}a_{ij}x_j^{(k+1)}-\\sum_{j>i}a_{ij}x_j^{(k)})/a_{ii}$. Equivalently, solve $(D+L)x^{(k+1)}=b-Ux^{(k)}$ by forward substitution. Hence $B_{GS}=-(D+L)^{-1}U$. Do not explicitly form that inverse in an implementation."}</p>
          <p>Later coordinates depend on earlier updates, so a sweep is sequential in this ordering. Reordering equations and variables can change convergence speed. Gauss–Seidel is often faster than Jacobi on suitable systems, but it is not universally faster or universally convergent.</p>
        </TheoryBox>
        <TheoryBox title="SOR: relax each Gauss–Seidel coordinate update">
          <p>{"With relaxation parameter $\\omega$, use $x_i^{(k+1)}=(1-\\omega)x_i^{(k)}+\\frac{\\omega}{a_{ii}}(b_i-\\sum_{j<i}a_{ij}x_j^{(k+1)}-\\sum_{j>i}a_{ij}x_j^{(k)})$. Earlier coordinates in the sum are the relaxed values already computed in this sweep."}</p>
          <p>{"The matrix equation is $(D+\\omega L)x^{(k+1)}=[(1-\\omega)D-\\omega U]x^{(k)}+\\omega b$. At $\\omega=1$ this is Gauss–Seidel; $0<\\omega<1$ is under-relaxation and $1<\\omega<2$ is over-relaxation. There is no single optimal $\\omega$ for every matrix."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="iterative-convergence">
        <h2 className="sec-title">Convergence and a trustworthy stopping rule</h2>
        <TheoryBox title="Sufficient conditions, not universal promises">
          <p>{"Strict row diagonal dominance, $|a_{ii}|>\\sum_{j\\ne i}|a_{ij}|$ for every row, guarantees convergence of Jacobi and Gauss–Seidel. For Jacobi, this makes $\\|B_J\\|_\\infty<1$. These conditions are sufficient; failure of the inequality is not proof of divergence."}</p>
          <p>{"For a real symmetric positive definite matrix, Gauss–Seidel converges and SOR converges for $0<\\omega<2$. Positive definiteness alone does not guarantee Jacobi convergence. Nor does this SOR interval guarantee convergence for arbitrary nonsymmetric matrices."}</p>
        </TheoryBox>
        <TheoryBox title="Residual, error, and conditioning">
          <p>{"Compute $r^{(k)}=b-Ax^{(k)}$. The solution error satisfies $x^*-x^{(k)}=A^{-1}r^{(k)}$, so $\\|x^*-x^{(k)}\\|\\leq\\|A^{-1}\\|\\,\\|r^{(k)}\\|$. For nonzero $b$ and $x^*$, the relative error is bounded by $\\kappa(A)\\|r^{(k)}\\|/\\|b\\|$. A small residual need not imply a small forward error for an ill-conditioned system."}</p>
          <p>{"A practical residual test is $\\|r^{(k)}\\|_\\infty\\leq\\mathrm{atol}+\\mathrm{rtol}\\|b\\|_\\infty$, with tolerances chosen for the application's scale. The absolute tolerance handles $b=0$. Small successive changes alone can mean stagnation rather than an accurate solution."}</p>
        </TheoryBox>
        <ProcedureBox title="A safe solver loop" steps={[
          "Validate matrix/vector dimensions, finite entries, nonzero diagonal, initial vector, positive iteration limit, and nonnegative tolerances. For SOR choose a justified relaxation parameter.",
          "Check the starting residual first; the initial guess might already meet the tolerance.",
          "Perform one full Jacobi, Gauss–Seidel, or SOR sweep using the correct old/new coordinate convention.",
          "Recompute the residual from the original system. Reject nonfinite values; stop with an explicit failure status if the iteration limit is reached without convergence.",
          "Return the estimate, iteration count, final residual, and convergence status. Do not silently label the last iterate a solution."
        ]} />
        <p>{"A dense sweep costs $O(n^2)$ arithmetic; a sparse implementation can cost $O(\\mathrm{nnz}(A))$ per sweep, plus vector operations. The total cost also depends on the number of sweeps. Jacobi's parallelism and Gauss–Seidel's dependency chain matter as much as a comparison of iteration counts."}</p>
      </section>
      <section className="section" id="iterative-examples">
        <h2 className="sec-title">Worked examples</h2>
        <WorkedExample number={1} title="Two Jacobi sweeps" setup={"Solve $4x+y=1$, $x+3y=2$, starting from $(0,0)$."} steps={[
          "Rearrange to $x^{(k+1)}=(1-y^{(k)})/4$ and $y^{(k+1)}=(2-x^{(k)})/3$.",
          "The first sweep gives $(x^{(1)},y^{(1)})=(1/4,2/3)$.",
          "The second sweep uses only that first vector: $x^{(2)}=(1-2/3)/4=1/12$ and $y^{(2)}=(2-1/4)/3=7/12$."
        ]} result={"After two sweeps, $(x,y)=(1/12,7/12)$."} check={"The exact solution is $(1/11,7/11)$; substitution gives both right-hand sides. Both rows are strictly diagonally dominant."} mistake="Do not use the new x when computing y in a Jacobi sweep." />
        <WorkedExample number={2} title="Gauss–Seidel on the same system" setup="Use the same equations and zero start, updating x before y." steps={[
          "First $x^{(1)}=1/4$. Immediately use it: $y^{(1)}=(2-1/4)/3=7/12$.",
          "Next $x^{(2)}=(1-7/12)/4=5/48$ and $y^{(2)}=(2-5/48)/3=91/144$.",
          "Here the Jacobi iteration matrix has eigenvalues $\\pm1/\\sqrt{12}$, while the Gauss–Seidel matrix has eigenvalues $0$ and $1/12$. Both converge; the latter has a smaller asymptotic error factor."
        ]} result={"The second Gauss–Seidel iterate is $(5/48,91/144)$."} check={"The first new y is $7/12$, not Jacobi's $2/3$, because it uses the updated x."} mistake="An asymptotic rate does not guarantee that every individual error component decreases on every step." />
        <WorkedExample number={3} title="One SOR sweep" setup={"Use the same system, zero start, and $\\omega=6/5$."} steps={[
          "$x^{(1)}=(1-6/5)0+(6/5)(1/4)=3/10$.",
          "$y^{(1)}=(1-6/5)0+(6/5)(2-3/10)/3=17/25$.",
          "The system matrix is symmetric positive definite: its leading principal minors are $4$ and $11$. Thus this parameter lies in the guaranteed convergence interval."
        ]} result={"The first SOR iterate is $(3/10,17/25)$."} check={"Setting the parameter to 1 instead recovers the first Gauss–Seidel iterate."} mistake="Do not blend an entire separately computed Gauss–Seidel vector afterwards; SOR uses relaxed earlier coordinates within the sweep." />
        <WorkedExample number={4} title="Check a residual explicitly" setup={"Use the first Jacobi iterate $(1/4,2/3)$."} steps={[
          "$A x^{(1)}=(5/3,9/4)$, so $r^{(1)}=(1,2)-(5/3,9/4)=(-2/3,-1/4)$.",
          "$\\|r^{(1)}\\|_\\infty=2/3$ and $\\|b\\|_\\infty=2$.",
          "With $\\mathrm{atol}=10^{-8}$ and $\\mathrm{rtol}=10^{-6}$, the threshold is $2.01\\times10^{-6}$. The iterate does not pass."
        ]} result="Continue iterating; the residual is well above tolerance." check="The residual uses the original equations, not the rearranged update values." mistake="A computed iterate is not automatically a converged solution." />
        <WorkedExample number={5} title="Positive definite does not guarantee Jacobi" setup={"Let $A$ be the $3\\times3$ matrix with diagonal entries 1 and all off-diagonal entries $3/5$."} steps={[
          "Write $A=(2/5)I+(3/5)\\mathbf{1}\\mathbf{1}^T$. Its eigenvalues are $11/5,2/5,2/5$, all positive.",
          "Since $D=I$, the Jacobi matrix is $B_J=I-A$ with eigenvalues $-6/5,3/5,3/5$.",
          "Its spectral radius is $6/5>1$. Errors with a component in the all-ones direction grow rather than vanish."
        ]} result="Jacobi does not converge for every starting vector, although Gauss–Seidel converges for this SPD matrix." check="The off-diagonal absolute row sum is 6/5, so strict diagonal dominance does not hold." mistake="Do not transfer the SPD convergence guarantee from Gauss–Seidel to Jacobi." />
      </section>
      <GuideMcqSection id="quiz-la-iterative-solvers-checkpoint" badge="Topic checkpoint · 20 questions"
        title="Iterative Solvers" scoreId="score-la-iterative-solvers-checkpoint" section="la-iterative-solvers-checkpoint"
        questions={LA_ITERATIVE_SOLVERS_QUIZ}
        onComplete={(score, total) => saveQuizScore("guide-mcq-la-iterative-solvers-checkpoint", score, total)} />
    </div>
  );
  if (embedded) return content;
  return <StudyGuideShell guideClass="partial-derivatives-guide" title="Iterative Solvers">
    <nav className="sidebar" aria-label="Iterative solvers sections">
      <Link className="sb-link" to="/linear-algebra/overview#numerical-linear-algebra">Course overview</Link>
      <a className="sb-link" href="#iterative-foundations">Foundations</a>
      <a className="sb-link" href="#iterative-methods">Update rules</a>
      <a className="sb-link" href="#iterative-convergence">Convergence</a>
      <a className="sb-link" href="#iterative-examples">Worked examples</a>
      <a className="sb-link" href="#quiz-la-iterative-solvers-checkpoint">Checkpoint</a>
    </nav>{content}
  </StudyGuideShell>;
}
