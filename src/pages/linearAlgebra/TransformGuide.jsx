import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { LaMcqSection } from "./LaMcq";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample, PracticalTheory, RealLifeUse } from "./LaBlocks";

function Divider() {
  return <hr className="divider" />;
}

function TransformGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Linear Transformations (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Transform · Part 2</div></div>
          <a className="sb-link" href="#la-t-matrix">Matrix Representation</a>
          <a className="sb-link" href="#la-t-proc2">Method</a>
          <a className="sb-link" href="#la-t-ex-p2">Examples</a>
          <a className="sb-link" href="#quiz-la-t-matrix">Quiz</a>
          <a className="sb-link" href="#la-t-apps">Applications</a>
          <a className="sb-link" href="#quiz-la-t-apps">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Linear Algebra · Part 2 of 2</div>
            <h1 className="ch-title">Linear Transformations</h1>
            <p className="ch-sub">Matrix representation, composition, invertibility, and applications</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="la-t-matrix">
            <div className="sec-badge">Section 4.3</div>
            <h2 className="sec-title">Matrix representation — deep theory</h2>
            <p>
              {"Every linear transformation between finite-dimensional spaces can be captured by a single matrix: once you know where the transformation sends a basis, you know where it sends every vector. Composition, invertibility, and area/volume scaling all become questions about that matrix."}
            </p>
            <TheoryBox title="Standard matrix from basis images">
              <p>
                {"For $T:\\mathbb{R}^n\\to\\mathbb{R}^m$, the standard matrix $A$ has $T(e_1),\\ldots,T(e_n)$ as its columns, in order. Then $T(x)=Ax$ for every $x$, because $x=\\sum x_ie_i$ and linearity distributes $T$ across the sum."}
              </p>
              <p>
                {"Relative to a non-standard basis $B=\\{b_1,\\ldots,b_n\\}$, the matrix $[T]_B$ instead has the $B$-coordinates of $T(b_i)$ as its columns. If $B$ happens to be an eigenbasis of the standard matrix, $[T]_B$ comes out diagonal."}
              </p>
            </TheoryBox>
            <PracticalTheory title="Composition and inversion stay matrix operations">
              <p>
                {"Composing transformations corresponds exactly to multiplying their matrices in the same order: $[S\\circ T]=[S][T]$. A transformation is invertible exactly when its matrix is invertible, and $[T^{-1}]=[T]^{-1}$."}
              </p>
            </PracticalTheory>
            <TheoremBox title="Determinant scales area and volume">
              <p>
                {"For $T:\\mathbb{R}^2\\to\\mathbb{R}^2$ or $\\mathbb{R}^3\\to\\mathbb{R}^3$, the absolute value of the determinant of the standard matrix is exactly the factor by which $T$ scales area or volume. A negative determinant additionally signals an orientation flip (a reflection is mixed in)."}
              </p>
            </TheoremBox>
            <RealLifeUse>{"Every rotation, scale, or skew you see in a graphics engine, CAD tool, or game physics update is a standard matrix applied to each vertex; composing camera, model, and projection matrices is exactly composing linear transformations."}</RealLifeUse>
            <TheoryBox title="Change of basis bonus">
              <p>
                {"If $P$'s columns are the basis $B$ written in standard coordinates, then $[T]_B=P^{-1}AP$ where $A$ is the standard matrix. This is the same similarity relationship used in diagonalization — a transformation's matrix looks different in different bases, but the transformation itself does not change."}
              </p>
            </TheoryBox>
          </section>

          <section className="section" id="la-t-proc2">
            <div className="sec-badge">Procedure</div>
            <h2 className="sec-title">How to compose and invert transformations</h2>
            <ProcedureBox
              title="Composing and inverting linear transformations"
              steps={[
                { text: "Write down the standard matrices $[S]$ and $[T]$ for each transformation.", why: "Every linear map is fully described by its standard matrix." },
                { text: "For $S\\circ T$ (apply $T$ first, then $S$), multiply the matrices in that order: $[S][T]$.", why: "Composition order matches matrix multiplication order." },
                { text: "To invert $T$, check $\\det([T])\\neq0$ first.", why: "A zero determinant means the matrix — and the transformation — is not invertible." },
                { text: "If invertible, compute $[T]^{-1}$ using the standard inverse formula (or row reduction for larger matrices).", why: "The inverse matrix represents the inverse transformation." },
                { text: "Verify by checking $[T][T]^{-1}=I$ on at least one nontrivial vector.", why: "A quick numeric check catches arithmetic slips." },
                { text: "For area/volume scaling, compute $|\\det([T])|$ directly from the standard matrix.", why: "The determinant's absolute value is the geometric scaling factor." },
              ]}
            />
          </section>

          <section className="section" id="la-t-ex-p2">
            <div className="sec-badge">Large examples</div>
            <h2 className="sec-title">Four detailed worked examples</h2>

            <WorkedExample
              number={1}
              title="Reflection matrix across a line through the origin"
              setup={"Find the matrix of reflection across the line $y=x$, and use it to reflect $(3,5)$."}
              steps={[
                { text: "Reflection across $y=x$ swaps coordinates: $T(x,y)=(y,x)$.", why: "Geometric definition of this reflection." },
                { text: "$T(1,0)=(0,1)$ and $T(0,1)=(1,0)$.", why: "Apply to standard basis vectors." },
                { text: "Standard matrix: $A=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$.", why: "Images become columns." },
                { text: "Apply to $(3,5)$: $\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}\\begin{pmatrix}3\\\\5\\end{pmatrix}=\\begin{pmatrix}5\\\\3\\end{pmatrix}$.", why: "Direct multiplication." },
                { text: "Check $A^2=I$, since reflecting twice returns the original point.", why: "Reflections are self-inverse." },
              ]}
              result={"$A=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$, and the reflection of $(3,5)$ is $(5,3)$."}
              check={"$A^2=I$, as expected for any reflection."}
            />
            <WorkedExample
              number={2}
              title="Matrix of a transformation in a non-standard basis"
              setup={"$T(x,y)=(2x+y,\\,x+2y)$. Find the matrix of $T$ relative to the basis $B=\\{(1,1),(1,-1)\\}$."}
              steps={[
                { text: "$T(1,1)=(3,3)=3(1,1)+0(1,-1)$, so the first column of $[T]_B$ is $(3,0)$.", why: "Convert the output back into $B$-coordinates, not standard coordinates." },
                { text: "$T(1,-1)=(1,-1)=0(1,1)+1(1,-1)$, so the second column is $(0,1)$.", why: "Same conversion for the second basis vector." },
                { text: "$[T]_B=\\begin{pmatrix}3&0\\\\0&1\\end{pmatrix}$, diagonal in this basis.", why: "Assemble the two columns." },
                { text: "This works because $(1,1)$ and $(1,-1)$ are eigenvectors of $T$'s standard matrix, with eigenvalues $3,1$.", why: "Diagonal representation happens exactly in an eigenbasis." },
              ]}
              result={"$[T]_B=\\begin{pmatrix}3&0\\\\0&1\\end{pmatrix}$."}
              check={"The standard matrix $\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ has eigenvalues $3,1$, matching the diagonal entries."}
            />
            <WorkedExample
              number={3}
              title="Inverse of a linear transformation"
              setup={"$T(x,y)=(2x+3y,\\,x+2y)$. Determine whether $T$ is invertible, and if so, find $T^{-1}$."}
              steps={[
                { text: "Standard matrix $A=\\begin{pmatrix}2&3\\\\1&2\\end{pmatrix}$; $\\det A=2(2)-3(1)=1\\neq0$.", why: "Nonzero determinant means $A$ is invertible." },
                { text: "$A^{-1}=\\dfrac{1}{\\det A}\\begin{pmatrix}2&-3\\\\-1&2\\end{pmatrix}=\\begin{pmatrix}2&-3\\\\-1&2\\end{pmatrix}$.", why: "$2\\times2$ inverse formula, with $\\det A=1$." },
                { text: "So $T^{-1}(x,y)=(2x-3y,\\,-x+2y)$.", why: "Translate the inverse matrix back into a formula." },
                { text: "Check: $T(T^{-1}(x,y))=(x,y)$ after expanding both components.", why: "Composition with the inverse must return the identity." },
              ]}
              result={"$T$ is invertible; $T^{-1}(x,y)=(2x-3y,\\,-x+2y)$."}
              check={"$T(T^{-1}(x,y))=(x,y)$ for all $x,y$."}
            />
            <WorkedExample
              number={4}
              title="Area scaling of the unit square"
              setup={"Find how the linear transformation with matrix $A=\\begin{pmatrix}3&1\\\\1&2\\end{pmatrix}$ scales area."}
              steps={[
                { text: "$T(0,0)=(0,0)$, $T(1,0)=(3,1)$, $T(0,1)=(1,2)$, $T(1,1)=(4,3)$.", why: "Apply $A$ to each corner of the unit square." },
                { text: "The image is a parallelogram with sides along $(3,1)$ and $(1,2)$.", why: "Linear maps send the unit square to a parallelogram." },
                { text: "$\\det A=3(2)-1(1)=5$.", why: "$2\\times2$ determinant formula." },
                { text: "So the unit square (area $1$) maps to a parallelogram of area $5$.", why: "Area scaling factor equals $|\\det A|$." },
              ]}
              result={"Area scaling factor is $|\\det A|=5$."}
              check={"The shoelace formula on the transformed vertices independently gives area $5$."}
            />
          </section>

          <LaMcqSection
            id="quiz-la-t-matrix"
            badge="Quiz 4.3"
            title="Matrix representation"
            scoreId="score-la-t-matrix"
            section="la-t-matrix"
            questions={[
              {
                prompt: "If $T:\\mathbb{R}^2\\to\\mathbb{R}^2$ sends $e_1=(1,0)\\mapsto(2,3)$ and $e_2=(0,1)\\mapsto(-1,4)$, the standard matrix of $T$ is:",
                options: ["$\\begin{pmatrix}2&-1\\\\3&4\\end{pmatrix}$", "$\\begin{pmatrix}2&3\\\\-1&4\\end{pmatrix}$", "$\\begin{pmatrix}3&4\\\\2&-1\\end{pmatrix}$"],
                answer: "A",
                explanation: "Images of the standard basis vectors become the columns of the matrix, in order.",
              },
              {
                prompt: "Composing two linear transformations $S\\circ T$ corresponds to matrix operation:",
                options: ["Matrix multiplication $[S][T]$", "Matrix addition $[S]+[T]$", "Entrywise product of $[S]$ and $[T]$"],
                answer: "A",
                explanation: "Applying $T$ then $S$ matches multiplying the standard matrices in that order.",
              },
              {
                prompt: "A linear transformation $T:\\mathbb{R}^n\\to\\mathbb{R}^n$ is invertible iff:",
                options: ["Its standard matrix is invertible (nonzero determinant)", "It fixes the origin", "It is a rotation"],
                answer: "A",
                explanation: "Invertibility of $T$ matches invertibility of its matrix representation.",
              },
              {
                prompt: "Two linear transformations with the same matrix relative to a fixed basis must:",
                options: ["Act identically on every vector", "Only agree on the basis vectors", "Have different kernels"],
                answer: "A",
                explanation: "A transformation is completely determined by where it sends a basis.",
              },            
              {
                prompt: "The columns of the standard matrix of $T$ are:",
                options: ["The rows of the domain matrix", "The eigenvalues only", "The images of the standard basis vectors"],
                answer: "C",
                explanation: "Column $j$ is $T(e_j)$.",
              },
              {
                prompt: "If $T(e_1)=(1,2)$ and $T(e_2)=(3,4)$, the standard matrix is:",
                options: ["$\\begin{pmatrix}1&3\\\\2&4\\end{pmatrix}$", "$\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$", "$\\begin{pmatrix}4&3\\\\2&1\\end{pmatrix}$"],
                answer: "A",
                explanation: "Images of $e_1,e_2$ form the first and second columns.",
              },
              {
                prompt: "For $T(x)=Ax$, the number of columns of $A$ equals the dimension of the:",
                options: ["Codomain", "Domain", "Kernel only"],
                answer: "B",
                explanation: "Each domain basis vector contributes one column.",
              },
              {
                prompt: "For $T:\\mathbb{R}^3\\to\\mathbb{R}^2$, the standard matrix has size:",
                options: ["$3\\times2$", "$3\\times3$", "$2\\times3$"],
                answer: "C",
                explanation: "Rows match codomain dimension and columns match domain dimension.",
              },
              {
                prompt: "If $S(x)=Bx$ and $T(x)=Ax$, then $(T\\circ S)(x)$ has matrix:",
                options: ["$AB$", "$BA$", "$A+B$"],
                answer: "A",
                explanation: "$T(S(x))=A(Bx)=(AB)x$.",
              },
              {
                prompt: "The standard matrix of the identity map on $\\mathbb{R}^n$ is:",
                options: ["$0$", "$I_n$", "$-I_n$"],
                answer: "B",
                explanation: "Each standard basis vector is fixed.",
              },
              {
                prompt: "The standard matrix of the zero transformation $\\mathbb{R}^n\\to\\mathbb{R}^m$ is:",
                options: ["$I_n$", "A matrix of ones", "The $m\\times n$ zero matrix"],
                answer: "C",
                explanation: "Every basis vector maps to zero.",
              },
              {
                prompt: "If the standard matrix of $T$ is invertible, then $T$ has:",
                options: ["An inverse linear transformation", "No inverse", "A nontrivial kernel"],
                answer: "A",
                explanation: "An invertible matrix represents a bijective linear map.",
              },
              {
                prompt: "The matrix of the inverse transformation $T^{-1}$ is:",
                options: ["$A^T$ always", "$A^{-1}$", "$-A$"],
                answer: "B",
                explanation: "If $T(x)=Ax$, then $T^{-1}(y)=A^{-1}y$.",
              },
              {
                prompt: "A change of basis replaces a matrix representation but leaves the underlying:",
                options: ["Domain dimension changed", "Linearity destroyed", "Linear transformation unchanged"],
                answer: "C",
                explanation: "Different bases give different coordinate matrices for the same map.",
              },
              {
                prompt: "If $T(x,y)=(2x,3y)$, its standard matrix is:",
                options: ["$\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$", "$\\begin{pmatrix}2&3\\\\0&0\\end{pmatrix}$", "$\\begin{pmatrix}0&2\\\\3&0\\end{pmatrix}$"],
                answer: "A",
                explanation: "The images of $e_1,e_2$ are $(2,0)$ and $(0,3)$.",
              },
              {
                prompt: "If $T(x,y)=(y,x)$, its standard matrix is:",
                options: ["$I_2$", "$\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$", "$\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}$"],
                answer: "B",
                explanation: "The columns are $T(e_1)=(0,1)$ and $T(e_2)=(1,0)$.",
              },
              {
                prompt: "If $T(x,y)=(x+y,x-y)$, the first column of its matrix is:",
                options: ["$(1,-1)^T$", "$(0,1)^T$", "$(1,1)^T$"],
                answer: "C",
                explanation: "$T(e_1)=T(1,0)=(1,1)$.",
              },
              {
                prompt: "If $A$ is $m\\times n$, the associated matrix transformation maps:",
                options: ["$\\mathbb{R}^n$ to $\\mathbb{R}^m$", "$\\mathbb{R}^m$ to $\\mathbb{R}^n$", "$\\mathbb{R}^{mn}$ to $\\mathbb{R}$"],
                answer: "A",
                explanation: "Input length matches columns; output length matches rows.",
              },
              {
                prompt: "The matrix product $AB$ represents doing which transformation first?",
                options: ["The transformation represented by $A$", "The transformation represented by $B$", "Both simultaneously with no order"],
                answer: "B",
                explanation: "Matrix multiplication composes right-to-left: $ABx=A(Bx)$.",
              },
              {
                prompt: "If two linear transformations have the same standard matrix, then they are:",
                options: ["Necessarily inverses", "Unrelated", "The same transformation"],
                answer: "C",
                explanation: "A linear map is uniquely determined by its action on the standard basis.",
              },
            ]}
          />

          <Divider />

          <section className="section" id="la-t-apps">
            <div className="sec-badge">Section 4.4</div>
            <h2 className="sec-title">Applications — deep theory</h2>
            <TheoryBox title="Rotations, reflections, projections, shears">
              <p>
                {"Rotation by $\\theta$: $\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$. Reflection across the $x$-axis negates $y$ only. Projection onto the $x$-axis keeps $x$ and zeroes $y$. A shear $\\begin{pmatrix}1&k\\\\0&1\\end{pmatrix}$ slants shapes while always preserving area, since $\\det=1$ for every $k$."}
              </p>
              <p>
                {"A linear map $T:\\mathbb{R}^2\\to\\mathbb{R}^2$ is onto exactly when its matrix has rank $2$ — its columns span the whole plane. A map $\\mathbb{R}^2\\to\\mathbb{R}^3$ can never be onto $\\mathbb{R}^3$, since the image can have dimension at most $2$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Graphics pipelines are composed transformations">
              <p>
                {"A 3D object rendered on screen typically passes through a model matrix, a view (camera) matrix, and a projection matrix, applied in sequence — exactly a composition of linear (or affine) transformations, computed once per frame as a single combined matrix for speed."}
              </p>
            </TheoremBox>
          </section>

          <LaMcqSection
            id="quiz-la-t-apps"
            badge="Quiz 4.4"
            title="Applications"
            scoreId="score-la-t-apps"
            section="la-t-apps"
            questions={[
              {
                prompt: "The matrix $\\begin{pmatrix}\\cos\\theta&-\\sin\\theta\\\\\\sin\\theta&\\cos\\theta\\end{pmatrix}$ represents:",
                options: ["A rotation by angle $\\theta$", "A reflection across the $x$-axis", "A projection onto the $x$-axis"],
                answer: "A",
                explanation: "This is the standard counterclockwise rotation matrix.",
              },
              {
                prompt: "The matrix $\\begin{pmatrix}1&0\\\\0&0\\end{pmatrix}$ represents:",
                options: ["Projection onto the $x$-axis", "Reflection across the $y$-axis", "A $90^\\circ$ rotation"],
                answer: "A",
                explanation: "It keeps the $x$-component and zeroes the $y$-component.",
              },
              {
                prompt: "If $T$ is a shear transformation given by $\\begin{pmatrix}1&k\\\\0&1\\end{pmatrix}$, then $\\det(T)$ is:",
                options: ["$1$", "$k$", "$0$"],
                answer: "A",
                explanation: "Shear matrices always have determinant $1$, so they preserve area.",
              },
              {
                prompt: "If $T:\\mathbb{R}^2\\to\\mathbb{R}^2$ is onto (surjective), then its standard matrix must have:",
                options: ["Rank $2$", "Rank $0$", "A zero row"],
                answer: "A",
                explanation: "Surjectivity onto $\\mathbb{R}^2$ requires the columns to span $\\mathbb{R}^2$, i.e. full rank $2$.",
              },
              {
                prompt: "A rotation about the origin in $\\mathbb{R}^2$ is a:",
                options: ["Linear transformation", "Translation", "Nonlinear transformation"],
                answer: "A",
                explanation: "Rotations about the origin preserve addition and scalar multiplication.",
              },
              {
                prompt: "Translation by a fixed nonzero vector is:",
                options: ["Linear", "Not linear", "An orthogonal projection"],
                answer: "B",
                explanation: "A nonzero translation sends $0$ to a nonzero vector.",
              },
              {
                prompt: "Reflection across the x-axis maps $(x,y)$ to:",
                options: ["$(-x,y)$", "$(y,x)$", "$(x,-y)$"],
                answer: "C",
                explanation: "The x-coordinate is unchanged and the y-coordinate changes sign.",
              },
              {
                prompt: "Reflection across the y-axis maps $(x,y)$ to:",
                options: ["$(-x,y)$", "$(x,-y)$", "$(y,x)$"],
                answer: "A",
                explanation: "The y-coordinate is unchanged and the x-coordinate changes sign.",
              },
              {
                prompt: "Uniform scaling by factor $c$ has matrix:",
                options: ["$I+c$", "$cI$", "$0$ for every $c$"],
                answer: "B",
                explanation: "Every coordinate is multiplied by the same factor.",
              },
              {
                prompt: "Projection onto the x-axis maps $(x,y)$ to:",
                options: ["$(0,y)$", "$(y,x)$", "$(x,0)$"],
                answer: "C",
                explanation: "The x-component is retained and the y-component is removed.",
              },
              {
                prompt: "A shear $T(x,y)=(x+ky,y)$ is linear because:",
                options: ["Its outputs are linear combinations of $x$ and $y$ with no constant term", "Every shear fixes all vectors", "It has determinant zero for every $k$"],
                answer: "A",
                explanation: "The coordinate formulas are homogeneous linear expressions.",
              },
              {
                prompt: "A $90^\\circ$ counterclockwise rotation maps $(1,0)$ to:",
                options: ["$(0,-1)$", "$(0,1)$", "$(1,0)$"],
                answer: "B",
                explanation: "The positive x-axis rotates to the positive y-axis.",
              },
              {
                prompt: "A $180^\\circ$ rotation about the origin maps $v$ to:",
                options: ["$v$", "$0$", "$-v$"],
                answer: "C",
                explanation: "Every direction reverses under a half-turn.",
              },
              {
                prompt: "An orthogonal projection matrix $P$ satisfies:",
                options: ["$P^2=P$", "$P^2=0$", "$P^2=-P$"],
                answer: "A",
                explanation: "Projecting a vector that is already projected changes nothing.",
              },
              {
                prompt: "A reflection matrix across a line through the origin is:",
                options: ["Always a translation", "A linear transformation", "Never invertible"],
                answer: "B",
                explanation: "Reflections through subspaces through the origin are linear.",
              },
              {
                prompt: "The determinant magnitude of a planar rotation matrix is:",
                options: ["$0$", "$2$", "$1$"],
                answer: "C",
                explanation: "Rotations preserve area and orientation, giving determinant $1$.",
              },
              {
                prompt: "A projection onto a proper subspace is generally:",
                options: ["Not one-to-one", "Always invertible", "A translation"],
                answer: "A",
                explanation: "Vectors in the orthogonal complement collapse to zero.",
              },
              {
                prompt: "Linear transformations are used in computer graphics to implement:",
                options: ["Only text formatting", "Rotations, scalings, reflections, and shears", "Only random number generation"],
                answer: "B",
                explanation: "These geometric operations are naturally represented by matrices.",
              },
              {
                prompt: "Applying a scaling by $2$ and then a scaling by $3$ is equivalent to scaling by:",
                options: ["$5$", "$1$", "$6$"],
                answer: "C",
                explanation: "Composition multiplies the scale factors.",
              },
              {
                prompt: "A transformation represented by an invertible matrix preserves:",
                options: ["Distinctness of input vectors", "Every vector's length necessarily", "Every vector's direction necessarily"],
                answer: "A",
                explanation: "Invertibility makes the map one-to-one, though general invertible maps need not preserve lengths or directions.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="summary">
            <div className="sec-badge">Reference</div>
            <h2 className="sec-title">Module complete</h2>
            <p>
              {"Every linear transformation reduces to a matrix: composition becomes multiplication, invertibility becomes a determinant check, and geometric scaling reads straight off that determinant."}
            </p>
            <p>
              Drill in the{" "}
              <Link to="/practice" style={{ color: "var(--gold)", fontWeight: 600 }}>
                Practice Arena
              </Link>{" "}
              or return via the gold bar to the course hub.
            </p>
          </section>
        </main>
      </StudyGuideShell>
    );
  }

  return (
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Linear Transformations (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Transform · Part 1</div></div>
        <a className="sb-link" href="#la-t-intro">Definition & Properties</a>
        <a className="sb-link" href="#la-t-proc1">Method</a>
        <a className="sb-link" href="#la-t-ex-p1">Examples</a>
        <a className="sb-link" href="#quiz-la-t-intro">Quiz</a>
        <a className="sb-link" href="#la-t-kernel">Kernel & Range</a>
        <a className="sb-link" href="#quiz-la-t-kernel">Quiz</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra · Part 1 of 2</div>
          <h1 className="ch-title">Linear Transformations</h1>
          <p className="ch-sub">Maps that preserve addition and scaling — theory and calculations</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="la-t-intro">
          <div className="sec-badge">Section 4.1</div>
          <h2 className="sec-title">Definition & properties — deep theory</h2>
          <p>
            {"A transformation $T$ is linear when it plays nicely with the two basic vector operations: adding vectors and scaling them. That single requirement is powerful enough to force $T$ to be completely determined by a matrix."}
          </p>
          <TheoryBox title="T(u+v) = T(u)+T(v), T(cu) = cT(u)">
            <p>
              {"$T$ is linear iff for all vectors $u,v$ and scalars $c$: $T(u+v)=T(u)+T(v)$ (additivity) and $T(cu)=cT(u)$ (homogeneity). Together these force $T(0)=0$ — a translation like $T(x,y)=(x+1,y)$ is never linear."}
            </p>
            <p>
              {"Because any vector $x$ in $\\mathbb{R}^n$ is a combination $x=\\sum x_ie_i$ of the standard basis, linearity means $T(x)=\\sum x_iT(e_i)$. So $T$ is completely pinned down once you know where it sends each basis vector."}
            </p>
          </TheoryBox>
          <TheoremBox title="Determined by a basis">
            <p>
              {"If two linear transformations agree on every vector of a basis, they agree everywhere — there is no freedom left. This is why the standard matrix (built from images of the standard basis) captures $T$ completely."}
            </p>
          </TheoremBox>
          <RealLifeUse>{"Computer graphics engines store every rotation, scale, or skew of a 2D/3D object as exactly this kind of standard matrix, applied to each vertex — nothing more than linearity in action."}</RealLifeUse>
        </section>

        <section className="section" id="la-t-proc1">
          <div className="sec-badge">Procedure</div>
          <h2 className="sec-title">How to find the standard matrix of a transformation</h2>
          <ProcedureBox
            title="How to build the standard matrix of T"
            steps={[
              { text: "Apply $T$ to each standard basis vector $e_1,\\ldots,e_n$ in turn.", why: "Linearity means the images of the basis vectors determine T everywhere." },
              { text: "Place $T(e_1),\\ldots,T(e_n)$ as the columns of a matrix $A$, in order.", why: "This is exactly how the standard matrix is defined." },
              { text: "For any input $x$, compute $T(x)=Ax$ by ordinary matrix-vector multiplication.", why: "Linearity guarantees this reproduces T exactly." },
              { text: "Double-check on a vector that is not a basis vector, by comparing $Ax$ to a direct application of the transformation's rule.", why: "A quick numeric check catches sign or ordering slips." },
              { text: "If $T$ is described geometrically (rotation, reflection, projection, shear), recall or derive the standard matrix pattern for that geometric map.", why: "Common geometric transformations have well-known standard matrices." },
            ]}
          />
        </section>

        <section className="section" id="la-t-ex-p1">
          <div className="sec-badge">Large examples</div>
          <h2 className="sec-title">Four detailed worked examples</h2>

          <WorkedExample
            number={1}
            title="Standard matrix from images of basis vectors"
            setup={"$T:\\mathbb{R}^2\\to\\mathbb{R}^2$ sends $(1,0)\\mapsto(3,1)$ and $(0,1)\\mapsto(-2,4)$. Find the standard matrix and $T(5,2)$."}
            steps={[
              { text: "The standard matrix has $T(e_1)$ and $T(e_2)$ as its columns.", why: "Every linear map is determined by where it sends the standard basis." },
              { text: "$A=\\begin{pmatrix}3&-2\\\\1&4\\end{pmatrix}$.", why: "Place the images side by side in order." },
              { text: "$T(5,2)=A\\begin{pmatrix}5\\\\2\\end{pmatrix}=\\begin{pmatrix}15-4\\\\5+8\\end{pmatrix}=\\begin{pmatrix}11\\\\13\\end{pmatrix}$.", why: "Multiply row by column." },
              { text: "Check by linearity directly: $5(3,1)+2(-2,4)=(15,5)+(-4,8)=(11,13)$.", why: "Independent verification using linearity directly." },
            ]}
            result={"$A=\\begin{pmatrix}3&-2\\\\1&4\\end{pmatrix}$, $T(5,2)=(11,13)$."}
            check={"Both the matrix method and direct linearity give $(11,13)$."}
          />
          <WorkedExample
            number={2}
            title="Kernel and image of a projection"
            setup={"Find the kernel and image of $T(x,y,z)=(x,y,0)$, the projection onto the $xy$-plane."}
            steps={[
              { text: "Standard matrix: $A=\\begin{pmatrix}1&0&0\\\\0&1&0\\\\0&0&0\\end{pmatrix}$.", why: "Read off coefficients of $x,y,z$ in each output component." },
              { text: "Kernel: solve $Av=0$, i.e. $x=0,\\,y=0$, $z$ free — the $z$-axis.", why: "Definition of the null space." },
              { text: "Image: all outputs $(x,y,0)$ — the $xy$-plane itself.", why: "Third coordinate is always killed." },
              { text: "Rank $=2$, nullity $=1$; check rank–nullity: $2+1=3=\\dim(\\mathbb{R}^3)$.", why: "Domain dimension confirmed." },
            ]}
            result={"$\\ker T=$ the $z$-axis; $\\operatorname{im}T=$ the $xy$-plane; rank $2$, nullity $1$."}
            check={"Rank + nullity $=3$, matching the domain $\\mathbb{R}^3$."}
          />
          <WorkedExample
            number={3}
            title="Composition of two transformations"
            setup={"$T$ rotates by $90^\\circ$ and $S$ scales by $2$ in $x$ and $3$ in $y$. Find the matrix of $S\\circ T$ and apply it to $(1,1)$."}
            steps={[
              { text: "$[T]=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$, $[S]=\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$.", why: "Standard matrices for rotation and scaling." },
              { text: "$S\\circ T$ means apply $T$ first, so its matrix is $[S][T]=\\begin{pmatrix}0&-2\\\\3&0\\end{pmatrix}$.", why: "Composition order matches matrix multiplication order." },
              { text: "Apply to $(1,1)$: $\\begin{pmatrix}0&-2\\\\3&0\\end{pmatrix}\\begin{pmatrix}1\\\\1\\end{pmatrix}=\\begin{pmatrix}-2\\\\3\\end{pmatrix}$.", why: "Direct multiplication." },
              { text: "Verify step by step: $T(1,1)=(-1,1)$, then $S(-1,1)=(-2,3)$ — matches.", why: "Applying the two maps one at a time should agree." },
            ]}
            result={"$[S\\circ T]=\\begin{pmatrix}0&-2\\\\3&0\\end{pmatrix}$, and $(S\\circ T)(1,1)=(-2,3)$."}
            check={"Applying $T$ then $S$ separately reproduces the same output."}
          />
          <WorkedExample
            number={4}
            title="Determining injectivity and surjectivity"
            setup={"For $T:\\mathbb{R}^3\\to\\mathbb{R}^2$ with matrix $A=\\begin{pmatrix}1&2&1\\\\0&1&1\\end{pmatrix}$, decide whether $T$ is one-to-one and/or onto."}
            steps={[
              { text: "Row reduce $A$: two pivots, so $\\operatorname{rank}(A)=2$.", why: "Find the rank via echelon form." },
              { text: "Nullity $=3-2=1\\neq0$, so $T$ is not one-to-one.", why: "Injectivity requires $\\ker T=\\{0\\}$." },
              { text: "Rank $=2=$ dimension of the codomain, so $T$ is onto.", why: "Full rank means the columns span the codomain." },
              { text: "Concretely, $(1,-1,1)$ solves $Av=0$, confirming a nonzero kernel vector.", why: "Exhibits a specific nonzero kernel vector." },
            ]}
            result={"$T$ is onto but not one-to-one."}
            check={"$A(1,-1,1)^T=(0,0)$, confirming a nonzero kernel vector."}
          />
        </section>

        <LaMcqSection
          id="quiz-la-t-intro"
          badge="Quiz 4.1"
          title="Definition & properties"
          scoreId="score-la-t-intro"
          section="la-t-intro"
          questions={[
            {
              prompt: "A transformation $T$ is linear iff for all vectors $u,v$ and scalars $c$:",
              options: ["$T(u+v)=T(u)+T(v)$ and $T(cu)=cT(u)$", "$T(u+v)=T(u)T(v)$", "$T(0)\\neq 0$ is allowed as long as it is one-to-one"],
              answer: "A",
              explanation: "Additivity and homogeneity define linearity; together they force $T(0)=0$.",
            },
            {
              prompt: "Which map is linear?",
              options: ["$T(x,y)=(x+y,\\,2x)$", "$T(x,y)=(xy,\\,x)$", "$T(x,y)=(x+1,\\,y)$"],
              answer: "A",
              explanation: "Only $T(x,y)=(x+y,2x)$ has no products or added constants.",
            },
            {
              prompt: "The identity transformation $T(v)=v$ has standard matrix:",
              options: ["$I$, the identity matrix", "The zero matrix", "Any orthogonal matrix"],
              answer: "A",
              explanation: "Every basis vector maps to itself, giving the identity matrix's columns.",
            },
            {
              prompt: "A linear map must send the zero vector to:",
              options: ["$0$", "$1$", "An arbitrary vector"],
              answer: "A",
              explanation: "Linearity gives $T(0)=T(0+0)=T(0)+T(0)$, hence $T(0)=0$.",
            },
            {
              prompt: "If $T$ is linear and $T(v)=w$, then $T(5v)$ equals:",
              options: ["$w+5$", "$5w$", "$25w$"],
              answer: "B",
              explanation: "Homogeneity gives $T(cv)=cT(v)$.",
            },
            {
              prompt: "If $T$ is linear, then $T(u-v)$ equals:",
              options: ["$T(u)T(v)$", "$T(u)+v$", "$T(u)-T(v)$"],
              answer: "C",
              explanation: "Use additivity and $T(-v)=-T(v)$.",
            },
            {
              prompt: "Which map $T:\\mathbb{R}\\to\\mathbb{R}$ is linear?",
              options: ["$T(x)=-4x$", "$T(x)=x+4$", "$T(x)=x^2$"],
              answer: "A",
              explanation: "Multiplication by a constant is linear; translation and squaring are not.",
            },
            {
              prompt: "Which map is not linear because of a constant translation?",
              options: ["$T(x,y)=(2x,y)$", "$T(x,y)=(x+2,y)$", "$T(x,y)=(x-y,x+y)$"],
              answer: "B",
              explanation: "A nonzero constant makes $T(0)\\neq0$.",
            },
            {
              prompt: "The composition of two linear transformations is:",
              options: ["Never linear", "Linear only when both are identity maps", "Linear"],
              answer: "C",
              explanation: "Composition preserves additivity and homogeneity.",
            },
            {
              prompt: "The sum of two linear transformations with the same domain and codomain is:",
              options: ["Linear", "Always nonlinear", "Undefined"],
              answer: "A",
              explanation: "Additivity and homogeneity are preserved under pointwise addition.",
            },
            {
              prompt: "If $T$ is linear and $T(e_1)=0$, then $e_1$ belongs to:",
              options: ["$\\operatorname{im} T$ only", "$\\ker T$", "No subspace"],
              answer: "B",
              explanation: "The kernel consists of vectors mapped to zero.",
            },
            {
              prompt: "For linear $T$, $T(2u+3v)$ equals:",
              options: ["$5T(u+v)$", "$T(u)T(v)$", "$2T(u)+3T(v)$"],
              answer: "C",
              explanation: "Linearity distributes over linear combinations.",
            },
            {
              prompt: "Which property alone is not sufficient to prove linearity?",
              options: ["$T(0)=0$", "Additivity together with homogeneity", "$T(cu+dv)=cT(u)+dT(v)$ for all scalars"],
              answer: "A",
              explanation: "Many nonlinear maps, such as $T(x)=x^2$, still send zero to zero.",
            },
            {
              prompt: "If $T(x)=7x$ on $\\mathbb{R}$, then $T(-3)$ is:",
              options: ["$21$", "$-21$", "$4$"],
              answer: "B",
              explanation: "Substitute $x=-3$.",
            },
            {
              prompt: "The map $T(x,y)=(x,0)$ is:",
              options: ["Nonlinear because one output is zero", "Nonlinear because it reduces information", "Linear"],
              answer: "C",
              explanation: "Coordinate projection satisfies additivity and homogeneity.",
            },
            {
              prompt: "The map $T(x,y)=(|x|,y)$ is:",
              options: ["Not linear", "Linear", "Linear only in $\\mathbb{R}^3$"],
              answer: "A",
              explanation: "Absolute value fails homogeneity for negative scalars.",
            },
            {
              prompt: "If $T$ and $S$ are linear, then $(T-S)(v)$ is defined as:",
              options: ["$T(v)/S(v)$", "$T(v)-S(v)$", "$T(v-S)$"],
              answer: "B",
              explanation: "Linear transformations form a vector space under pointwise operations.",
            },
            {
              prompt: "A linear transformation is completely determined by its action on:",
              options: ["Only the zero vector", "One arbitrary nonzero vector in every dimension", "A basis of the domain"],
              answer: "C",
              explanation: "Every vector is a linear combination of basis vectors.",
            },
            {
              prompt: "If a basis vector is doubled before applying a linear map, its image is:",
              options: ["Doubled", "Unchanged", "Squared"],
              answer: "A",
              explanation: "Homogeneity gives $T(2v)=2T(v)$.",
            },
            {
              prompt: "The map $T(x,y)=(0,0)$ is:",
              options: ["Nonlinear because all information is lost", "Linear", "Linear only at the origin"],
              answer: "B",
              explanation: "The zero transformation satisfies both linearity axioms.",
            },
          ]}
        />

        <Divider />

        <section className="section" id="la-t-kernel">
          <div className="sec-badge">Section 4.2</div>
          <h2 className="sec-title">Kernel, range & rank–nullity — deep theory</h2>
          <TheoryBox title="Kernel and image">
            <p>
              {"The kernel (null space) of $T$ is $\\ker(T)=\\{v:T(v)=0\\}$ — every input that collapses to zero. The image (range) is the set of all outputs, $\\operatorname{im}(T)=\\{T(v):v\\in\\text{domain}\\}$. Both are always subspaces, of the domain and codomain respectively."}
            </p>
            <p>
              {"$T$ is one-to-one (injective) exactly when $\\ker(T)=\\{0\\}$: no nonzero vector is lost. $T$ is onto (surjective) exactly when $\\operatorname{im}(T)$ fills the entire codomain."}
            </p>
          </TheoryBox>
          <TheoremBox title="Rank–nullity theorem">
            <p>
              {"For $T:\\mathbb{R}^n\\to\\mathbb{R}^m$, $\\operatorname{rank}(T)+\\operatorname{nullity}(T)=n$, where rank is $\\dim(\\operatorname{im} T)$ and nullity is $\\dim(\\ker T)$. This single identity explains why a map from a smaller space to a larger one can never be onto, and why a map from a larger space to a smaller one can never be one-to-one."}
            </p>
          </TheoremBox>
        </section>

        <LaMcqSection
          id="quiz-la-t-kernel"
          badge="Quiz 4.2"
          title="Kernel, range & rank–nullity"
          scoreId="score-la-t-kernel"
          section="la-t-kernel"
          questions={[
            {
              prompt: "The kernel (null space) of a linear transformation $T$ is:",
              options: ["$\\{v: T(v)=0\\}$", "The set of all outputs of $T$", "The set of eigenvectors of $T$"],
              answer: "A",
              explanation: "Kernel is the set of inputs mapped to the zero vector.",
            },
            {
              prompt: "By the rank–nullity theorem, for $T:\\mathbb{R}^n\\to\\mathbb{R}^m$:",
              options: ["$\\operatorname{rank}(T)+\\operatorname{nullity}(T)=n$", "$\\operatorname{rank}(T)-\\operatorname{nullity}(T)=m$", "$\\operatorname{rank}(T)\\cdot\\operatorname{nullity}(T)=n$"],
              answer: "A",
              explanation: "Dimension of the domain splits between the image's dimension and the kernel's dimension.",
            },
            {
              prompt: "A linear transformation $T$ is one-to-one (injective) exactly when:",
              options: ["$\\ker(T)=\\{0\\}$", "$T$ is represented by a square matrix", "The image of $T$ is all of $\\mathbb{R}^m$"],
              answer: "A",
              explanation: "Only the zero vector maps to zero, so distinct inputs give distinct outputs.",
            },
            {
              prompt: "For $T:\\mathbb{R}^3\\to\\mathbb{R}^2$ with a $2\\times3$ standard matrix of rank $2$, the nullity is:",
              options: ["$1$", "$0$", "$2$"],
              answer: "A",
              explanation: "Rank–nullity: $3=\\operatorname{rank}+\\operatorname{nullity}=2+\\operatorname{nullity}$.",
            },
            {
              prompt: "If $\\ker T=\\{0\\}$, then $T$ is:",
              options: ["Onto for every codomain", "One-to-one", "The zero map"],
              answer: "B",
              explanation: "A linear map is injective exactly when its kernel is trivial.",
            },
            {
              prompt: "If $T:\\mathbb{R}^4\\to\\mathbb{R}^3$ has rank $3$, its nullity is:",
              options: ["$3$", "$4$", "$1$"],
              answer: "C",
              explanation: "Rank-nullity gives $4=3+1$.",
            },
            {
              prompt: "If $T:\\mathbb{R}^3\\to\\mathbb{R}^5$ has rank $3$, then $T$ is:",
              options: ["One-to-one", "Onto", "Neither one-to-one nor onto"],
              answer: "A",
              explanation: "Nullity is $3-3=0$, but rank $3<5$ so it is not onto.",
            },
            {
              prompt: "A linear map from $\\mathbb{R}^5$ to $\\mathbb{R}^3$ can never be:",
              options: ["Onto", "One-to-one", "Linear"],
              answer: "B",
              explanation: "Rank is at most $3$, so nullity is at least $2$.",
            },
            {
              prompt: "A linear map from $\\mathbb{R}^2$ to $\\mathbb{R}^4$ can never be:",
              options: ["One-to-one", "Linear", "Onto"],
              answer: "C",
              explanation: "Its rank is at most $2$, smaller than the codomain dimension $4$.",
            },
            {
              prompt: "The range of a linear transformation is always a:",
              options: ["Subspace of the codomain", "Subset that never contains zero", "Subspace of the domain only"],
              answer: "A",
              explanation: "Images are closed under addition and scalar multiplication and contain zero.",
            },
            {
              prompt: "The kernel of a linear transformation is always a:",
              options: ["Subspace of the codomain", "Subspace of the domain", "Set with no zero vector"],
              answer: "B",
              explanation: "Kernels satisfy the subspace conditions.",
            },
            {
              prompt: "For $T:\\mathbb{R}^6\\to\\mathbb{R}^4$ with nullity $2$, rank is:",
              options: ["$2$", "$6$", "$4$"],
              answer: "C",
              explanation: "Rank-nullity gives $6=\\operatorname{rank}(T)+2$.",
            },
            {
              prompt: "If $T$ is onto $\\mathbb{R}^m$, then its rank is:",
              options: ["$m$", "$0$", "The nullity"],
              answer: "A",
              explanation: "Onto means the image equals the entire $m$-dimensional codomain.",
            },
            {
              prompt: "If $T:\\mathbb{R}^n\\to\\mathbb{R}^n$ is one-to-one, then it is also:",
              options: ["The zero map", "Onto", "Necessarily noninvertible"],
              answer: "B",
              explanation: "For equal finite dimensions, injectivity and surjectivity are equivalent.",
            },
            {
              prompt: "If $T:\\mathbb{R}^n\\to\\mathbb{R}^n$ is onto, then its kernel is:",
              options: ["All of $\\mathbb{R}^n$", "A line", "$\\{0\\}$"],
              answer: "C",
              explanation: "Onto gives rank $n$, so nullity is zero.",
            },
            {
              prompt: "Nullity measures the dimension of the:",
              options: ["$\\ker T$", "$\\operatorname{im}T$", "Codomain"],
              answer: "A",
              explanation: "Nullity is defined as the kernel's dimension.",
            },
            {
              prompt: "Rank measures the dimension of the:",
              options: ["$\\ker T$", "$\\operatorname{im}T$", "Domain only"],
              answer: "B",
              explanation: "Rank is the dimension of the range/image.",
            },
            {
              prompt: "If $T(v)=T(w)$ for a linear map, then:",
              options: ["$v+w\\in\\ker T$ always", "$v=w$ even if $T$ is not injective", "$v-w\\in\\ker T$"],
              answer: "C",
              explanation: "$T(v-w)=T(v)-T(w)=0$.",
            },
            {
              prompt: "For a matrix transformation $T(x)=Ax$, $\\ker T$ equals:",
              options: ["$\\operatorname{Nul}(A)$", "$\\operatorname{Col}(A)$", "$\\operatorname{Row}(A)$"],
              answer: "A",
              explanation: "The kernel solves $Ax=0$.",
            },
            {
              prompt: "For $T(x)=Ax$, the range of $T$ equals:",
              options: ["$\\operatorname{Nul}(A)$", "$\\operatorname{Col}(A)$", "$\\operatorname{Nul}(A^T)$"],
              answer: "B",
              explanation: "All outputs are linear combinations of the columns of $A$.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="summary1">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">Continue</h2>
          <p>
            {"Linearity pins a transformation down to its action on a basis; the kernel and image reveal how much information survives the map. Part 2 assembles all of this into matrix representation, composition, and applications."}
          </p>
          <p>
            Use the gold button: <strong>Next: Part 2 — Matrix representation & invertibility</strong>.
          </p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default TransformGuide;
