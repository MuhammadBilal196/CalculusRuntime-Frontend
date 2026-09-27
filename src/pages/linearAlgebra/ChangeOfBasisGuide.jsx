import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_CHANGE_BASIS_SIMILARITY_QUIZ } from "../../data/laQuizzes";

export default function ChangeOfBasisGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={"Change of Basis & Similarity (Part " + part + ")"}>
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Change of Basis &amp; Similarity</div></div>
        <a className="sb-link" href="#basis-theory">Theory</a>
        <a className="sb-link" href="#basis-method">Method</a>
        <a className="sb-link" href="#basis-examples">Worked examples</a>
        {advanced && <a className="sb-link" href="#quiz-la-change-basis-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/linear-algebra/overview">Course overview</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra</div>
          <h1 className="ch-title">Change of Basis &amp; Similarity Transformations</h1>
          <p className="ch-sub">Coordinate systems, transition matrices and operator representations</p>
          <p><Link to="/linear-algebra/transformations/1">Linear transformations</Link> · <Link to="/linear-algebra/eigen/1">Eigenvalues and eigenvectors</Link> · <Link to="/linear-algebra/quadratic-forms-definiteness/1">Quadratic forms</Link></p>
          <p>Part {part} of 2. Part 1 develops coordinates and transition matrices; Part 2 derives similarity, diagonalization and the checkpoint.</p>
        </header>
        <section className="section" id="basis-theory">
          <h2 className="sec-title">{advanced ? "Similarity and operator representations" : "Coordinates and transition matrices"}</h2>
          {advanced ? (
            <>
              <TheoryBox title="Changing the representation of one operator">
                <p>{"Let $T:V\\to V$ and let $A_B=[T]_B$. If $P=P_{B\\leftarrow C}$ converts $C$-coordinates to $B$-coordinates, then $[x]_B=P[x]_C$. Applying $T$ and converting the output back gives $[T]_C=P^{-1}A_BP$. The two matrices describe the same map in different coordinates."}</p>
                <p>{"Matrices related by $A_C=P^{-1}A_BP$ are similar. Similarity is an equivalence relation: identity gives reflexivity, $P^{-1}$ gives symmetry, and products of change matrices give transitivity. The transform requires $P$ invertible."}</p>
                <p>{"For different domain and codomain bases, $T:V\\to W$, the representation changes as $A_{C\\leftarrow B}=P_C^{-1}A P_B$. This left-right change is not generally a similarity because the two coordinate spaces may use different bases."}</p>
              </TheoryBox>
              <TheoryBox title="Invariants and what similarity does not preserve">
                <p>{"Similarity preserves the characteristic polynomial and therefore eigenvalues with algebraic multiplicities. It also preserves trace, determinant, rank, invertibility, minimal polynomial and Jordan block sizes. These invariants can rule out similarity when they disagree."}</p>
                <p>{"Matching eigenvalues alone is not enough. For example, $I_2$ and $\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ both have only eigenvalue $1$, but the first has a two-dimensional eigenspace while the second has a one-dimensional eigenspace. They are not similar."}</p>
                <p>{"Individual entries, eigenvectors as coordinate columns, lengths and orthogonality of coordinate vectors need not be preserved by general similarity. Similarity expresses one fixed operator; it does not assert that two arbitrary matrices have the same action on the same coordinate columns."}</p>
              </TheoryBox>
              <TheoryBox title="Diagonalization as a useful change of basis">
                <p>{"If $A=PDP^{-1}$ with diagonal $D$, the columns of $P$ are a basis of eigenvectors and the corresponding eigenvalues appear in the same order on the diagonal. Then $A^k=PD^kP^{-1}$ and polynomial or exponential actions can be computed through the diagonal entries."}</p>
                <p>{"An $n\\times n$ matrix is diagonalizable exactly when its eigenspaces together supply $n$ linearly independent eigenvectors. Distinct eigenvalues guarantee this, but repeated eigenvalues require checking geometric multiplicities. A real symmetric matrix is orthogonally diagonalizable; general diagonalizable matrices need not have an orthonormal eigenbasis."}</p>
                <p>{"If $P_{C\\leftarrow B}$ converts $B$-coordinates to $C$-coordinates, then $[T]_C=P_{C\\leftarrow B}[T]_B P_{B\\leftarrow C}$. This is $P^{-1}AP$ with $P=P_{B\\leftarrow C}$."}</p>
              </TheoryBox>
            </>
          ) : (
            <>
              <TheoryBox title="A vector and its coordinate column">
                <p>{"A vector $x\\in V$ is independent of coordinates. Relative to an ordered basis $B=(b_1,\\ldots,b_n)$, its unique coordinate column $[x]_B$ is defined by $x=\\sum_j c_jb_j$, where $[x]_B=(c_1,\\ldots,c_n)^T$. Changing basis changes the column, not the vector."}</p>
                <p>{"In $\\mathbb R^n$ with standard coordinates, assemble the basis vectors as columns in $P_B=[b_1\\;\\cdots\\;b_n]$. Then $x=P_B[x]_B$ and $[x]_B=P_B^{-1}x$. The matrix is invertible exactly because the columns form a basis."}</p>
                <p>{"For example, with $B=((1,1),(1,-1))$, the basis matrix maps $(c_1,c_2)^T$ to $(c_1+c_2,c_1-c_2)^T$. Solving this system recovers the coordinates of a given vector. Always state which basis the input column uses."}</p>
              </TheoryBox>
              <TheoryBox title="Transition matrices between two bases">
                <p>{"Let $P_B$ and $P_C$ contain the two bases in a common standard coordinate system. Since $x=P_B[x]_B=P_C[x]_C$, the transition matrix from $B$ to $C$ is $P_{C\\leftarrow B}=P_C^{-1}P_B$, so $[x]_C=P_{C\\leftarrow B}[x]_B$. The arrow names the direction of coordinate travel."}</p>
                <p>{"The reverse matrix is the inverse: $P_{B\\leftarrow C}=P_{C\\leftarrow B}^{-1}$. Transitions compose in reading order from right to left: $P_{D\\leftarrow C}P_{C\\leftarrow B}=P_{D\\leftarrow B}$. Reconstruct the vector to check a computed transition."}</p>
                <p>{"A transition matrix is not usually orthogonal. Its inverse need not be its transpose, and a general coordinate conversion need not preserve lengths of coordinate columns. The geometric vector remains unchanged."}</p>
              </TheoryBox>
              <TheoryBox title="Representing a map with different input and output bases">
                <p>{"For $T:V\\to W$, choose basis $B$ for the input space and $C$ for the output space. The $j$th column of $[T]_{C\\leftarrow B}$ is $[T(b_j)]_C$. Thus $[T(x)]_C=[T]_{C\\leftarrow B}[x]_B$."}</p>
                <p>{"If $A$ is the standard matrix of $T$ and $P_B,P_C$ convert the chosen bases to standard coordinates, then $[T]_{C\\leftarrow B}=P_C^{-1}AP_B$. The right factor converts the input; the left factor converts the output."}</p>
                <p>{"When $V=W$ and the same basis is used in both places, this reduces to $P^{-1}AP$. This special case produces similar matrices."}</p>
              </TheoryBox>
            </>
          )}
        </section>
        <section className="section" id="basis-method">
          <h2 className="sec-title">A dependable coordinate workflow</h2>
          <ProcedureBox title={advanced ? "Change an operator matrix or test diagonalization" : "Convert coordinates without reversing the arrow"}
            steps={advanced ? ["Write old and new basis matrices and define the transition direction.", "For one operator in two bases, use $[T]_C=P_{C\\leftarrow B}[T]_B P_{B\\leftarrow C}$.", "Check trace, determinant, characteristic polynomial, rank and eigenspace structure when testing similarity.", "For diagonalization, pair each eigenvector column with the eigenvalue in the same position."] : ["Write ordered basis vectors as columns of $P_B$ and $P_C$.", "Use $P_{C\\leftarrow B}=P_C^{-1}P_B$ to convert $B$-coordinates to $C$-coordinates.", "For a map $V\\to W$, use $P_C^{-1}AP_B$; use similarity only for one operator represented in two bases.", "Check by reconstructing the vector in the original basis."]} />
        </section>
        <section className="section" id="basis-examples">
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample number={4} title="Represent a diagonal operator in a swapped basis" setup={"Let $A=\\operatorname{diag}(2,3)$ and use $C=(e_2,e_1)$. Find $[A]_C$."} steps={["$P=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$ and $P^{-1}=P$.","Compute $P^{-1}AP=\\operatorname{diag}(3,2)$."]} result={"The same operator has matrix $\\operatorname{diag}(3,2)$ in the swapped coordinates."} check={"Its trace remains $5$ and determinant remains $6$."} mistake={"Treating the changed diagonal entries as a different operator."} />
              <WorkedExample number={5} title="Diagonalize using eigenvectors" setup={"For $A=\\begin{pmatrix}4&1\\\\0&2\\end{pmatrix}$, use eigenvectors $v_1=(1,0)^T$ for $4$ and $v_2=(1,-2)^T$ for $2$."} steps={["Set $P=[v_1\\;v_2]=\\begin{pmatrix}1&1\\\\0&-2\\end{pmatrix}$ and $D=\\operatorname{diag}(4,2)$.","The columns are independent and $AP=PD$."]} result={"$A=PDP^{-1}$, hence $A^k=PD^kP^{-1}$."} check={"Both sides have trace $6$ and determinant $8$."} mistake={"Pairing an eigenvalue with the wrong eigenvector column."} />
              <WorkedExample number={6} title="Use eigenspace dimension to reject similarity" setup={"Compare $I_2$ with $J=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$."} steps={["Both have characteristic polynomial $(\\lambda-1)^2$.","$I_2$ has a two-dimensional eigenspace for $1$; solving $(J-I)v=0$ gives dimension one."]} result={"They are not similar because similarity preserves eigenspace dimensions and Jordan structure."} check={"Their minimal polynomials differ: $\\lambda-1$ versus $(\\lambda-1)^2$."} mistake={"Concluding similarity from matching eigenvalues alone."} />
            </>
          ) : (
            <>
              <WorkedExample number={1} title="Find coordinates of a vector" setup={"For $B=((1,1),(1,-1))$ and $x=(5,1)$, find $[x]_B$."} steps={["Solve $c_1+c_2=5$ and $c_1-c_2=1$.","Adding gives $2c_1=6$, so $c_1=3,c_2=2$."]} result={"$[x]_B=(3,2)^T$."} check={"$3(1,1)+2(1,-1)=(5,1)$."} mistake={"Reading standard coordinates as though they were already $B$-coordinates."} />
              <WorkedExample number={2} title="Build the transition matrix" setup={"Let $B=((1,0),(1,1))$ and $C=((1,1),(0,1))$. Find $P_{C\\leftarrow B}$."} steps={["$P_B=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$ and $P_C=\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}$.","$P_C^{-1}=\\begin{pmatrix}1&0\\\\-1&1\\end{pmatrix}$, so $P_{C\\leftarrow B}=\\begin{pmatrix}1&1\\\\-1&0\\end{pmatrix}$."]} result={"Multiply a $B$-coordinate column by this matrix to obtain its $C$-coordinates."} check={"For $[x]_B=(1,0)^T$, the vector is $(1,0)$ and its $C$-coordinates are $(1,-1)^T$."} mistake={"Using $P_B^{-1}P_C$, which travels in the opposite direction."} />
              <WorkedExample number={3} title="Change both bases for a linear map" setup={"Let $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$, $P_B=\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}$ and $P_C=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$. Find $[T]_{C\\leftarrow B}$."} steps={["$P_C^{-1}=\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}$.","Compute $P_C^{-1}AP_B=\\begin{pmatrix}2&1\\\\1&1\\end{pmatrix}$."]} result={"This maps $B$-coordinates of inputs to $C$-coordinates of outputs."} check={"For the first $B$ basis vector $(1,1)$, the standard output is $(3,1)$; in basis $C$ its coordinates are $(2,1)$, matching column one."} mistake={"Using the same basis-change matrix on both sides when the input and output bases differ."} />
            </>
          )}
        </section>
        <section className="section">
          <h2 className="sec-title">Check your reasoning</h2>
          <p>{advanced ? "Similarity changes coordinates for one operator and preserves operator invariants. Matching eigenvalues alone is not enough to establish similarity." : "Name the direction on each transition matrix. Distinguish a vector from its coordinate column and distinguish a same-space similarity from a map with different domain and codomain bases."}</p>
        </section>
        {advanced ? (
          <GuideMcqSection id="quiz-la-change-basis-checkpoint" badge="Topic checkpoint · 20 questions" title="Change of Basis & Similarity Transformations" scoreId="score-la-change-basis-checkpoint" section="la-change-basis-checkpoint" questions={LA_CHANGE_BASIS_SIMILARITY_QUIZ} onComplete={(score, total) => saveQuizScore("guide-mcq-la-change-basis-checkpoint", score, total)} />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to similarity transformations</h2>
            <p>The Part 2 checkpoint covers both parts. Answer all 20 questions and score at least 80% to unlock Part 2 completion.</p>
            <Link to="/linear-algebra/change-of-basis-similarity/2">Continue to Part 2 →</Link>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
