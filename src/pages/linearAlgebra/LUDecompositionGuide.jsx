import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_A_LU_QUIZ } from "../../data/laQuizzes";

export default function LUDecompositionGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={`${"LU Decomposition"} (Part ${part})`}>
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Topic 1</div></div>
        <a className="sb-link" href="#la-a-lu-theory">Theory</a>
        {advanced && <a className="sb-link" href="#la-a-lu-method">Method</a>}
        <a className="sb-link" href="#la-a-lu-examples">Worked examples</a>
        {advanced && <a className="sb-link" href="#quiz-la-a-lu-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/linear-algebra/overview#module-a">All four topics</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Matrix Decompositions &amp; Factorizations</div>
          <h1 className="ch-title">LU Decomposition</h1>
          <p className="ch-sub">Elimination as a reusable factorization: from A = LU to pivoted solves</p>
          <p>Curriculum: University Linear Algebra.</p>
          <p><Link to="/linear-algebra/systems/1">Review prerequisites</Link> · Part {part} of 2</p>
        </header>
        <section className="section" id="la-a-lu-theory">
          {advanced ? (
            <>
              <TheoryBox title={"Triangular solves and reuse"}>
                <p>{"Given $PA=LU$, multiply $Ax=b$ by $P$ to obtain $LUx=Pb$. First solve $Ly=Pb$ by forward substitution; then solve $Ux=y$ by back substitution. With no permutation, $P=I$ and the first right-hand side is simply $b$."}</p>
                <p>{"For unit-diagonal $L$, forward substitution is $y_i=(Pb)_i-\\sum_{j<i}l_{ij}y_j$. Back substitution is $x_i=(y_i-\\sum_{j>i}u_{ij}x_j)/u_{ii}$, proceeding from the last equation upward. Each step uses values that have already been computed."}</p>
                <p>{"Dense factorization costs about $2n^3/3$ scalar operations to leading order. Once stored, the pair of triangular solves costs $O(n^2)$ per new right-hand side. This is useful for repeated circuit loads, structural load cases, and time-stepping problems with an unchanged coefficient matrix; forming $A^{-1}$ is generally unnecessary."}</p>
              </TheoryBox>
              <TheoryBox title={"Determinants and verification"}>
                <p>{"Because $\\det L=1$, the determinant follows from the diagonal of $U$ and the swaps. If $s$ row interchanges were made, $\\det A=(-1)^s\\prod_i u_{ii}$. Count swaps, not elimination steps; adding a multiple of one row to another does not change the determinant."}</p>
                <p>{"Check a factorization using $R=PA-LU$. In exact hand calculations $R$ should be zero. In floating point, examine a scaled residual such as $\\|R\\|/\\|A\\|$ for nonzero $A$. Separately check a computed solution with $r=b-A\\hat x$. A small residual alone does not guarantee a small forward error when $A$ is ill-conditioned."}</p>
                <p>{"Common mistakes are storing the negative of the multiplier, forgetting $Pb$, dividing by a zero pivot, swapping uncompleted entries of $L$, and refactorizing for every new $b$. Keep the factorization equation visible beside each calculation and verify the original system at the end."}</p>
              </TheoryBox>
            </>
          ) : (
            <>
              <TheoryBox title={"From elimination to factors"}>
                <p>{"A system $Ax=b$ is often solved by eliminating entries below successive pivots. LU retains the elimination work so the same matrix can be used with many different right-hand sides. In Doolittle form, $A=LU$: $L$ is unit lower triangular and $U$ is upper triangular. The diagonal normalization belongs to $L$; other conventions, such as Crout, normalize a different factor."}</p>
                <p>{"For a pivot $u_{kk}\\ne0$, eliminate entry $a_{ik}$ using $R_i\\leftarrow R_i-m_{ik}R_k$, where $m_{ik}=a_{ik}/u_{kk}$. Store $m_{ik}$, not its negative, in $l_{ik}$. Subtracting the multiple is already part of the row-operation rule. The inverse elementary matrix adds it back, explaining why the stored factor has this sign."}</p>
                <p>{"If no row swaps are needed, the elimination matrices satisfy $E_{n-1}\\cdots E_1A=U$. Reversing their actions gives $A=E_1^{-1}\\cdots E_{n-1}^{-1}U=LU$. Thus the factors describe the same linear map; factorization does not replace the original problem with an approximation in exact arithmetic."}</p>
              </TheoryBox>
              <TheoryBox title={"Existence, normalization, and uniqueness"}>
                <p>{"For a nonsingular square matrix, nonzero leading principal minors guarantee elimination without pivoting. The first $k\\times k$ leading block has determinant equal to the product of its first $k$ pivots. If one pivot vanishes, the ordinary no-swap procedure fails even though $A$ may still be invertible."}</p>
                <p>{"When a nonsingular unit-lower/upper factorization exists, it is unique. If $L_1U_1=L_2U_2$, then $L_2^{-1}L_1=U_2U_1^{-1}$. The left side is unit lower triangular and the right side upper triangular, so both must equal $I$. Without a diagonal convention, scaling can be transferred between the two factors."}</p>
                <p>{"Singular matrices may admit some LU factorization, but the nonsingular existence and unique-solve claims must not be applied to them unchanged. A zero final pivot indicates rank loss; it does not authorize dividing by zero. Return to consistency and rank analysis when solving a singular system."}</p>
              </TheoryBox>
              <TheoryBox title={"Pivoting and the meaning of P"}>
                <p>{"Partial pivoting selects a remaining row with maximal absolute entry in the current column. Record swaps in a permutation matrix $P$. Our convention is $PA=LU$, meaning the rows of $A$ have been reordered before their elimination history is represented by $L$ and $U$. Some software uses another convention, so check its documented equation."}</p>
                <p>{"At a later pivot, also exchange the corresponding rows in the already completed columns of $L$. Do not swap its entire rows indiscriminately: future columns and the unit diagonal are governed by the triangular structure. Keeping the permutation and multipliers consistent is essential to reconstruct $PA$."}</p>
                <p>{"Pivoting usually improves elimination stability by avoiding unnecessarily small pivots and controlling multipliers. It does not make an intrinsically sensitive matrix well-conditioned, and it is not a universal guarantee against all growth in floating-point arithmetic. Conditioning is studied separately in the final topic of this module."}</p>
              </TheoryBox>
            </>
          )}
        </section>
        {advanced && (
          <section className="section" id="la-a-lu-method">
            <h2 className="sec-title">A reliable working procedure</h2>
            <ProcedureBox title="Step by step" steps={["Inspect dimensions and choose the convention $PA=LU$; initialize $P=I$ and the diagonal of $L$ to one.", "At each column choose a nonzero pivot, swap rows when needed, and update completed columns of $L$.", "Record each multiplier and subtract that multiple of the pivot row from the trailing rows.", "After the last elimination, verify $PA=LU$ and check pivots before solving.", "Compute $Pb$, forward-solve $Ly=Pb$, back-solve $Ux=y$, and check $Ax=b$."]} />
          </section>
        )}
        <section className="section" id="la-a-lu-examples">
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={3}
                title={"Use the stored factors for a solve"}
                setup={"For $A=\\begin{pmatrix}4&3\\\\6&3\\end{pmatrix}$, solve $Ax=(10,12)^T$."}
                steps={["With the factors from Part 1, $Ly=b$ gives $y_1=10$ and $y_2=12-(3/2)10=-3$.", "$Ux=y$ gives $(-3/2)x_2=-3$, hence $x_2=2$.", "$4x_1+3(2)=10$, hence $x_1=1$."]}
                result={"$x=(1,2)^T$."}
                check={"$Ax=(4+6,6+6)^T=(10,12)^T$."}
              />
              <WorkedExample
                number={4}
                title={"A solve that requires pivoting"}
                setup={"Solve $Ax=b$ with $A=\\begin{pmatrix}0&1\\\\2&3\\end{pmatrix}$ and $b=(1,5)^T$."}
                steps={["Swap the rows: $P=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$, $L=I$, $U=PA=\\begin{pmatrix}2&3\\\\0&1\\end{pmatrix}$.", "The right-hand side must also change: $Pb=(5,1)^T$. Thus $y=(5,1)^T$.", "Back substitution gives $x_2=1$ and $2x_1+3=5$, so $x_1=1$."]}
                result={"$x=(1,1)^T$ and $\\det A=-2$."}
                check={"$Ax=(1,5)^T$. Solving with the unpermuted $b$ would instead solve the wrong equations."}
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title={"A complete 2 by 2 factorization"}
                setup={"Factor $A=\\begin{pmatrix}4&3\\\\6&3\\end{pmatrix}$."}
                steps={["The multiplier is $m_{21}=6/4=3/2$.", "$R_2\\leftarrow R_2-(3/2)R_1$ gives $(0,-3/2)$.", "Therefore $L=\\begin{pmatrix}1&0\\\\3/2&1\\end{pmatrix}$ and $U=\\begin{pmatrix}4&3\\\\0&-3/2\\end{pmatrix}$."]}
                result={"$A=LU$."}
                check={"The lower-right product entry is $(3/2)3-3/2=3$, not $4.5-6$."}
              />
              <WorkedExample
                number={2}
                title={"A three-dimensional elimination history"}
                setup={"Factor $A=\\begin{pmatrix}2&1&1\\\\4&3&3\\\\8&7&9\\end{pmatrix}$."}
                steps={["Use $m_{21}=2$ and $m_{31}=4$ to obtain trailing rows $(0,1,1)$ and $(0,3,5)$.", "Use $m_{32}=3$ to obtain the last row $(0,0,2)$.", "$L=\\begin{pmatrix}1&0&0\\\\2&1&0\\\\4&3&1\\end{pmatrix}$ and $U=\\begin{pmatrix}2&1&1\\\\0&1&1\\\\0&0&2\\end{pmatrix}$."]}
                result={"$\\det A=2\\cdot1\\cdot2=4$."}
                check={"The third row of $LU$ is four times row one of $U$, plus three times row two, plus row three: $(8,7,9)$."}
              />
            </>
          )}
        </section>
        {advanced ? (
          <GuideMcqSection
            id="quiz-la-a-lu-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title={"LU Decomposition"}
            scoreId="score-la-a-lu-checkpoint"
            section="la-a-lu-checkpoint"
            questions={LA_A_LU_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-la-a-lu-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to the topic checkpoint</h2>
            <p>Part 1 develops the foundations. Part 2 adds applications and the single 20-question checkpoint for this topic. Complete all questions and score at least 80% to unlock Part 2 completion.</p>
            <Link to="/linear-algebra/lu-decomposition/2">Continue to Part 2 →</Link>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
