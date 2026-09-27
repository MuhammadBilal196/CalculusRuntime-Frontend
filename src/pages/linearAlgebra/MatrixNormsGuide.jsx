import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_A_NORMS_QUIZ } from "../../data/laQuizzes";

export default function MatrixNormsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`${"Vector & Matrix Norms, Condition Number"} (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Topic 4</div></div>
        <a className="sb-link" href="#la-a-norms-theory">Theory</a>
        {advanced && <a className="sb-link" href="#la-a-norms-method">Method</a>}
        <a className="sb-link" href="#la-a-norms-examples">Worked examples</a>
        {advanced && <a className="sb-link" href="#quiz-la-a-norms-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/linear-algebra/overview#module-a">All four topics</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Matrix Decompositions &amp; Factorizations</div>
          <h1 className="ch-title">Vector &amp; Matrix Norms, Condition Number</h1>
          <p className="ch-sub">Measuring size, maximum stretch, and the sensitivity of a linear solve</p>
          <p>Curriculum: University Linear Algebra.</p>
          <p><Link to="/linear-algebra/svd/1">Review prerequisites</Link> · Part {part} of 2</p>
        </header>
        <section className="section" id="la-a-norms-theory">
          {advanced ? (
            <>
              <TheoryBox title={"Deriving the right-hand-side perturbation bound"}>
                <p>{"Keep nonsingular $A$ fixed and let $A(x+\\delta x)=b+\\delta b$, with $b\\ne0$. Subtracting $Ax=b$ gives $\\delta x=A^{-1}\\delta b$, so $\\|\\delta x\\|\\le\\|A^{-1}\\|\\|\\delta b\\|$. Also $\\|b\\|=\\|Ax\\|\\le\\|A\\|\\|x\\|$. Combining yields $\\|\\delta x\\|/\\|x\\|\\le\\kappa(A)\\|\\delta b\\|/\\|b\\|$."}</p>
                <p>{"This is a worst-case bound, not a prediction that every perturbation reaches equality. Direction matters: a perturbation along a strongly amplified singular direction can be much worse than one in another direction. The same norm must be used consistently in the bound."}</p>
                <p>{"If the matrix is also perturbed, a useful bound requires $\\kappa(A)\\|\\delta A\\|/\\|A\\|<1$. Under that condition, relative solution error is at most $\\frac{\\kappa(A)}{1-\\kappa(A)\\|\\delta A\\|/\\|A\\|}\\left(\\frac{\\|\\delta A\\|}{\\|A\\|}+\\frac{\\|\\delta b\\|}{\\|b\\|}\\right)$. The denominator explains why sufficiently large perturbations near singularity can invalidate a simple linear estimate."}</p>
              </TheoryBox>
              <TheoryBox title={"Residuals, error bounds, and choosing a solver"}>
                <p>{"For an approximate solution $\\hat x$, the residual is $r=b-A\\hat x$. The actual error is $e=x-\\hat x=A^{-1}r$. Therefore $\\|e\\|/\\|x\\|\\le\\kappa(A)\\|r\\|/\\|b\\|$ when $b\\ne0$. Reporting only the residual omits the amplification from $A^{-1}$."}</p>
                <p>{"For full-column-rank $B$, forming normal equations squares the 2-norm condition number: $\\kappa_2(B^*B)=\\kappa_2(B)^2$. This is a reason to prefer QR or SVD for sensitive least-squares work. Cholesky remains efficient when the SPD system is suitable; factorization choice and model sensitivity must be considered together."}</p>
                <p>{"In practice, report a residual with its scale, use a condition estimator rather than explicitly forming an inverse merely to estimate sensitivity, and examine units or scaling. Rough digit-loss rules based on $\\log_{10}\\kappa$ are heuristics, not exact guarantees. Model error, data noise, precision, and the algorithm all affect the final accuracy."}</p>
              </TheoryBox>
            </>
          ) : (
            <>
              <TheoryBox title={"What a norm measures"}>
                <p>{"A vector norm is a size function satisfying positivity, absolute homogeneity $\\|cx\\|=|c|\\|x\\|$, and the triangle inequality $\\|x+y\\|\\le\\|x\\|+\\|y\\|$. Positivity includes $\\|x\\|=0$ only for $x=0$. A squared Euclidean length is not itself a norm because it scales by $|c|^2$."}</p>
                <p>{"For $1\\le p<\\infty$, $\\|x\\|_p=(\\sum_i|x_i|^p)^{1/p}$. Important cases are the 1-norm (sum of absolute components), 2-norm (Euclidean length), and infinity norm $\\max_i|x_i|$. For complex components, use their moduli. Expressions with $0<p<1$ generally fail the norm triangle inequality."}</p>
                <p>{"All norms on a fixed finite-dimensional space are equivalent up to constants, but they do not usually give the same number. For instance $\\|x\\|_\\infty\\le\\|x\\|_2\\le\\sqrt n\\|x\\|_\\infty$ and $\\|x\\|_2\\le\\|x\\|_1\\le\\sqrt n\\|x\\|_2$. The constants depend on dimension; select a norm that matches the error or geometry you want to measure."}</p>
              </TheoryBox>
              <TheoryBox title={"Induced matrix norms and Frobenius norm"}>
                <p>{"The induced matrix norm measures maximum stretch: $\\|A\\|=\\max_{x\\ne0}\\|Ax\\|/\\|x\\|$. In a consistent choice of vector norms, $\\|Ax\\|\\le\\|A\\|\\|x\\|$. Applying this twice proves $\\|AB\\|\\le\\|A\\|\\|B\\|$, known as submultiplicativity."}</p>
                <p>{"The induced 1-norm is the largest absolute column sum, and the induced infinity norm is the largest absolute row sum. The induced 2-norm is $\\sigma_{\\max}(A)=\\sqrt{\\lambda_{\\max}(A^*A)}$. Column sums, row sums, and singular values answer different questions; do not interchange the formulas."}</p>
                <p>{"The Frobenius norm is $\\|A\\|_F=(\\sum_{ij}|a_{ij}|^2)^{1/2}=(\\sum_i\\sigma_i^2)^{1/2}$. It treats the entries as one vector and is also submultiplicative, but for square matrices of dimension greater than one it is not an induced operator norm: $\\|I\\|_F=\\sqrt n$, while every induced norm has $\\|I\\|=1$. For rank $r>0$, $\\|A\\|_2\\le\\|A\\|_F\\le\\sqrt r\\|A\\|_2$."}</p>
              </TheoryBox>
              <TheoryBox title={"Condition number as relative sensitivity"}>
                <p>{"For invertible square $A$ and an induced norm, $\\kappa(A)=\\|A\\|\\|A^{-1}\\|\\ge1$. In the 2-norm, $\\kappa_2(A)=\\sigma_{\\max}/\\sigma_{\\min}$. A singular square matrix has infinite condition number under this convention. A large value warns that some relative perturbations can be strongly amplified."}</p>
                <p>{"Conditioning describes the mathematical problem, whereas stability describes an algorithm. A stable method can produce a small backward error on an ill-conditioned problem and still have substantial forward error. Conversely, a poorly implemented algorithm can lose accuracy even on a well-conditioned problem."}</p>
                <p>{"Nonzero scalar scaling leaves an induced condition number unchanged: $\\kappa(cA)=\\kappa(A)$. A tiny determinant is not a scale-invariant diagnosis of ill-conditioning; $A=10^{-6}I$ has a tiny determinant yet $\\kappa_2(A)=1$. Orthogonal or unitary square matrices also have 2-norm condition number one."}</p>
              </TheoryBox>
            </>
          )}
        </section>
        {advanced && (
          <section className="section" id="la-a-norms-method">
            <h2 className="sec-title">A reliable working procedure</h2>
            <ProcedureBox title="Step by step" steps={["State the vector norm, the corresponding induced matrix norm, and whether the matrix is invertible.", "Use column sums for the 1-norm, row sums for the infinity norm, singular values for the 2-norm, and entry squares for Frobenius norm.", "Compute or estimate the condition number using a compatible norm; avoid confusing it with the determinant.", "Calculate a relative input perturbation or residual and apply the appropriate error bound with its assumptions.", "Interpret the bound as worst-case sensitivity, then choose scaling, precision, or a solver appropriate to the problem."]} />
          </section>
        )}
        <section className="section" id="la-a-norms-examples">
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={3}
                title={"A small data change with a large effect"}
                setup={"Let $A=\\operatorname{diag}(1,10^{-4})$, $b=(1,0)^T$, and $\\delta b=(0,10^{-4})^T$."}
                steps={["$x=A^{-1}b=(1,0)^T$ and $\\kappa_2(A)=10^4$.", "$\\delta x=A^{-1}\\delta b=(0,1)^T$.", "The relative data error is $10^{-4}$ and the relative solution error is $1$."]}
                result={"The bound is attained: $1=10^4\\cdot10^{-4}$."}
                check={"$A(x+\\delta x)=(1,10^{-4})^T=b+\\delta b$."}
              />
              <WorkedExample
                number={4}
                title={"Interpret a residual and a scale change"}
                setup={"A nonsingular system has $\\kappa_2(A)=200$ and relative residual $\\|r\\|_2/\\|b\\|_2=10^{-6}$."}
                steps={["The relative solution error is bounded by $200\\cdot10^{-6}=2\\times10^{-4}$.", "This is an upper bound: it does not assert the actual error equals that number.", "Scaling both sides by $10^3$ leaves the exact solution and $\\kappa_2(A)$ unchanged."]}
                result={"The guaranteed bound from these data is $2\\times10^{-4}$."}
                check={"The scaled residual and right-hand side both gain the same factor, so their ratio is unchanged."}
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title={"One vector, three sizes"}
                setup={"For $x=(3,-4)^T$, compute the 1-, 2-, and infinity norms."}
                steps={["$\\|x\\|_1=|3|+|-4|=7$.", "$\\|x\\|_2=\\sqrt{9+16}=5$.", "$\\|x\\|_\\infty=\\max(3,4)=4$."]}
                result={"The three sizes are $7,5,4$."}
                check={"$4\\le5\\le7$, consistent with the norm inequalities."}
              />
              <WorkedExample
                number={2}
                title={"Column, row, and entry calculations"}
                setup={"For $A=\\begin{pmatrix}1&-2\\\\3&4\\end{pmatrix}$, compute $\\|A\\|_1$, $\\|A\\|_\\infty$, and $\\|A\\|_F$."}
                steps={["Absolute column sums are $4$ and $6$, so $\\|A\\|_1=6$.", "Absolute row sums are $3$ and $7$, so $\\|A\\|_\\infty=7$.", "The sum of squared entries is $1+4+9+16=30$, so $\\|A\\|_F=\\sqrt{30}$."]}
                result={"Column maximum $6$, row maximum $7$, Frobenius norm $\\sqrt{30}$."}
                check={"$A^TA=\\begin{pmatrix}10&10\\\\10&20\\end{pmatrix}$ has trace $30$, matching $\\|A\\|_F^2$."}
              />
            </>
          )}
        </section>
        {advanced ? (
          <GuideMcqSection
            id="quiz-la-a-norms-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title={"Vector & Matrix Norms, Condition Number"}
            scoreId="score-la-a-norms-checkpoint"
            section="la-a-norms-checkpoint"
            questions={LA_A_NORMS_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-la-a-norms-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to the topic checkpoint</h2>
            <p>Part 1 develops the foundations. Part 2 adds applications and the single 20-question checkpoint for this topic. Complete all questions and score at least 80% to unlock Part 2 completion.</p>
            <Link to="/linear-algebra/matrix-norms-conditioning/2">Continue to Part 2 →</Link>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
