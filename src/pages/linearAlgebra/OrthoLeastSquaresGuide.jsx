import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { LaMcqSection } from "./LaMcq";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample, PracticalTheory, RealLifeUse } from "./LaBlocks";

function Divider() {
  return <hr className="divider" />;
}

function OrthoLeastSquaresGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Orthogonality & Least Squares (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Ortho · Part 2</div></div>
          <a className="sb-link" href="#la-o-proj">Orthogonal Projections</a>
          <a className="sb-link" href="#la-o-proc2">Method</a>
          <a className="sb-link" href="#la-o-ex-p2">Examples</a>
          <a className="sb-link" href="#quiz-la-o-proj">Quiz</a>
          <a className="sb-link" href="#la-o-apps">Applications</a>
          <a className="sb-link" href="#quiz-la-o-apps">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Linear Algebra · Part 2 of 2</div>
            <h1 className="ch-title">Orthogonality & Least Squares</h1>
            <p className="ch-sub">Projections, normal equations, and least-squares applications</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="la-o-proj">
            <div className="sec-badge">Section 5.3</div>
            <h2 className="sec-title">Orthogonal Projections — deep theory</h2>
            <p>
              {"The orthogonal projection of a vector b onto a subspace W is the unique closest point in W to b. This single idea powers least squares, Fourier series, and many approximation methods."}
            </p>
            <TheoryBox title="Projection onto a subspace">
              <p>
                {"If the columns of A form a basis for W, the projection of b onto W is $\\hat{b}=A\\hat{x}$ where $\\hat{x}$ solves the normal equations $A^TA\\hat{x}=A^Tb$. The residual $b-\\hat{b}$ is orthogonal to every column of A (and therefore to all of W)."}
              </p>
            </TheoryBox>
            <PracticalTheory title="Workflow that stays organized">
              <p>
                {"Form $A^TA$ and $A^Tb$, solve the square system for $\\hat{x}$, then compute $\\hat{b}=A\\hat{x}$. Always check that the residual is orthogonal to the columns of A."}
              </p>
            </PracticalTheory>
            <TheoremBox title="Best approximation">
              <p>
                {"Among all vectors in W, the orthogonal projection $\\hat{b}$ is the unique closest point to b. This is the geometric heart of least squares."}
              </p>
            </TheoremBox>
            <RealLifeUse>{"GPS receivers and robotics controllers use orthonormal coordinate frames so that measuring along one axis never leaks error into another; least-squares fitting of data, signal denoising, and regression in statistics all rest on orthogonal projection."}</RealLifeUse>
          </section>

          <section className="section" id="la-o-proc2">
            <div className="sec-badge">Procedure</div>
            <h2 className="sec-title">How to compute a least-squares solution</h2>
            <ProcedureBox
              title="How to solve a least-squares problem"
              steps={[
                { text: "Form the normal equations $A^TA\\hat{x}=A^Tb$.", why: "These come from setting the residual orthogonal to Col(A)." },
                { text: "Solve the square system for $\\hat{x}$ (unique when A has independent columns).", why: "AᵀA is invertible precisely when the columns of A are independent." },
                { text: "Compute the projection $\\hat{b}=A\\hat{x}$ and the residual $b-\\hat{b}$.", why: "The residual must be orthogonal to every column of A." },
                { text: "Optionally compute the error $||b-\\hat{b}||$.", why: "This quantifies how well the model fits the data." },
                { text: "For a projection matrix instead of a single vector, compute $P=A(A^TA)^{-1}A^T$.", why: "P sends any b directly to its projection $Ab$ onto Col(A)." },
              ]}
            />
          </section>

          <section className="section" id="la-o-ex-p2">
            <div className="sec-badge">Large examples</div>
            <h2 className="sec-title">Four detailed worked examples</h2>

            <WorkedExample
              number={1}
              title="Least-squares line fit through three points"
              setup={"Find the least-squares line $y=mx+c$ through $(0,1)$, $(1,2)$, $(2,2)$."}
              steps={[
                { text: "Design matrix $A=\\begin{pmatrix}0&1\\\\1&1\\\\2&1\\end{pmatrix}$, $b=(1,2,2)$, unknowns $x=(m,c)$.", why: "Each row encodes one data point's equation $y=mx+c$." },
                { text: "$A^TA=\\begin{pmatrix}5&3\\\\3&3\\end{pmatrix}$, $A^Tb=\\begin{pmatrix}6\\\\5\\end{pmatrix}$.", why: "Compute the normal-equation matrix and right-hand side." },
                { text: "Solving: $m=\\tfrac12$, $c=\\tfrac{7}{6}$.", why: "Eliminate $c$, then back-substitute." },
              ]}
              result={"$y=\\tfrac12x+\\tfrac{7}{6}$."}
              check={"Predicted values are close to the actual $1,2,2$, with small symmetric residuals."}
            />
            <WorkedExample
              number={2}
              title="Projection matrix onto a column space"
              setup={"Find the projection matrix $P$ onto the column space of $A=\\begin{pmatrix}1&0\\\\0&1\\\\1&1\\end{pmatrix}$, and use it to project $b=(1,2,3)$."}
              steps={[
                { text: "$P=A(A^TA)^{-1}A^T$; $A^TA=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$, $(A^TA)^{-1}=\\tfrac13\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}$.", why: "Standard formula for projecting onto $\\operatorname{col}(A)$." },
                { text: "$P=\\tfrac13\\begin{pmatrix}2&-1&1\\\\-1&2&1\\\\1&1&2\\end{pmatrix}$.", why: "Multiply the three factors together." },
                { text: "$Pb=(1,2,3)=b$, since $b$ already lies in $\\operatorname{col}(A)$.", why: "Projecting a vector already in the subspace leaves it unchanged." },
              ]}
              result={"$P=\\tfrac13\\begin{pmatrix}2&-1&1\\\\-1&2&1\\\\1&1&2\\end{pmatrix}$, and $Pb=b$."}
              check={"$b$ equals column 1 plus $2\\times$ column 2 of $A$, so $P$ fixes it, as expected."}
            />
            <WorkedExample
              number={3}
              title="Least squares for an overdetermined line fit"
              setup={"Fit $y=c_0+c_1x$ using least squares to $(1,1),(2,3),(3,4),(4,4)$, then compute the sum of squared residuals."}
              steps={[
                { text: "$A^TA=\\begin{pmatrix}4&10\\\\10&30\\end{pmatrix}$, $A^Tb=\\begin{pmatrix}12\\\\35\\end{pmatrix}$.", why: "Sum of $1$'s, sum of $x_i$, sum of $x_i^2$, and the corresponding $b$-sums." },
                { text: "Solving gives $c_1=1$, $c_0=0.5$: fitted line $y=0.5+x$.", why: "Solve the reduced $2\\times2$ system." },
                { text: "Residuals: $-0.5,\\,0.5,\\,0.5,\\,-0.5$; sum of squares $=4(0.25)=1$.", why: "Actual minus predicted, squared and summed." },
              ]}
              result={"$y=0.5+x$, sum of squared residuals $=1$."}
              check={"Residuals sum to zero, as least squares always makes the residual orthogonal to the constant column."}
            />
            <WorkedExample
              number={4}
              title="Orthogonal complement of a plane in R³"
              setup={"Find the orthogonal complement of the plane $W=\\{(x,y,z):x+2y-z=0\\}$, and decompose $b=(3,1,2)$ into components in $W$ and $W^{\\perp}$."}
              steps={[
                { text: "$W^{\\perp}=\\operatorname{span}(1,2,-1)$, the line along the plane's normal.", why: "The complement of a hyperplane is the line along its normal." },
                { text: "Project $b$ onto $W^{\\perp}$: $\\hat b=\\dfrac{n\\cdot b}{n\\cdot n}n=(0.5,1,-0.5)$.", why: "Same line-projection formula used throughout this unit." },
                { text: "The $W$-component is $b-\\hat b=(2.5,0,2.5)$.", why: "Whatever remains after removing the normal component." },
              ]}
              result={"$W^{\\perp}=\\operatorname{span}(1,2,-1)$; $b=(2.5,0,2.5)+(0.5,1,-0.5)$."}
              check={"$(2.5,0,2.5)\\cdot(1,2,-1)=0$, confirming it lies in $W$."}
            />
          </section>

          <LaMcqSection
            id="quiz-la-o-proj"
            badge="Quiz 5.3"
            title="Orthogonal Projections"
            scoreId="score-la-o-proj"
            section="la-o-proj"
            questions={[
              {
                prompt: "The residual $b-A\\hat{x}$ is always:",
                options: ["Orthogonal to Col(A)", "Zero", "Parallel to b"],
                answer: "A",
                explanation: "This is exactly what the normal equations enforce.",
              },
              {
                prompt: "Normal equations are written as:",
                options: ["$A^TA\\hat{x}=A^Tb$", "$Ax=b$", "$A^{-1}b=x$"],
                answer: "A",
                explanation: "Derived by minimizing ||Ax−b||².",
              },
              {
                prompt: "When columns of A are independent, $A^TA$ is:",
                options: ["Invertible", "Singular", "Zero"],
                answer: "A",
                explanation: "Independent columns guarantee $A^TA$ is invertible.",
              },
              {
                prompt: "A projection matrix $P$ always satisfies:",
                options: ["$P^2=P$", "$P^2=-P$", "$\\det P\\neq0$"],
                answer: "A",
                explanation: "Projecting an already-projected vector changes nothing, so P is idempotent.",
              },
              {
                prompt: "The orthogonal projection of $b$ onto the line spanned by nonzero $a$ is:",
                options: ["$(a^Tb)b$", "$b-a$", "$\\frac{a^Tb}{a^Ta}a$"],
                answer: "C",
                explanation: "The scalar coefficient is the component of $b$ along $a$.",
              },
              {
                prompt: "For unit vector $q$, projection onto $\\operatorname{span}\\{q\\}$ is:",
                options: ["$(q^Tb)q$", "$(b^Tb)q$", "$b-q$"],
                answer: "A",
                explanation: "The denominator $q^Tq$ equals $1$.",
              },
              {
                prompt: "If columns of $Q$ are orthonormal, projection onto $\\operatorname{Col}(Q)$ is:",
                options: ["$Q^TQb$", "$QQ^Tb$", "$Qb$"],
                answer: "B",
                explanation: "$P=QQ^T$ is the orthogonal projector onto the column space.",
              },
              {
                prompt: "An orthogonal projection matrix $P$ is idempotent, meaning:",
                options: ["$P^2=I$", "$P^2=0$", "$P^2=P$"],
                answer: "C",
                explanation: "Projecting twice has the same effect as projecting once.",
              },
              {
                prompt: "An orthogonal projection matrix is also:",
                options: ["Symmetric", "Skew-symmetric", "Never square"],
                answer: "A",
                explanation: "Orthogonal projectors satisfy $P^T=P$.",
              },
              {
                prompt: "If $p$ is the projection of $b$ onto subspace $W$, then residual $b-p$ is:",
                options: ["Parallel to every vector in $W$", "Orthogonal to $W$", "Always zero"],
                answer: "B",
                explanation: "Orthogonal projection splits $b$ into a component in $W$ and a perpendicular residual.",
              },
              {
                prompt: "If $b$ already lies in $W$, its projection onto $W$ is:",
                options: ["$0$", "$-b$", "$b$"],
                answer: "C",
                explanation: "Projectors fix vectors already in the target subspace.",
              },
              {
                prompt: "If $b\\in W^\\perp$, its projection onto $W$ is:",
                options: ["$0$", "$b$", "$2b$"],
                answer: "A",
                explanation: "A vector perpendicular to the subspace has no component inside it.",
              },
              {
                prompt: "For full-column-rank $A$, the projector onto $\\operatorname{Col}(A)$ is:",
                options: ["$(A^TA)A$", "$A(A^TA)^{-1}A^T$", "$A^{-1}A^T$"],
                answer: "B",
                explanation: "This formula maps any $b$ to the least-squares fitted vector $A\\hat{x}$.",
              },
              {
                prompt: "The vector $A\\hat{x}$ in a least-squares problem is:",
                options: ["The projection of $b$ onto $\\operatorname{Nul}(A)$", "Always equal to zero", "The projection of $b$ onto $\\operatorname{Col}(A)$"],
                answer: "C",
                explanation: "Least squares chooses the closest vector in the column space.",
              },
              {
                prompt: "The least-squares residual is $r=b-A\\hat{x}$ and satisfies:",
                options: ["$A^Tr=0$", "$Ar=0$", "$r=A\\hat{x}$"],
                answer: "A",
                explanation: "The residual is orthogonal to every column of $A$.",
              },
              {
                prompt: "The normal equations are:",
                options: ["$AA^T\\hat{x}=b$", "$A^TA\\hat{x}=A^Tb$", "$A\\hat{x}=0$"],
                answer: "B",
                explanation: "They encode the orthogonality condition $A^T(b-A\\hat{x})=0$.",
              },
              {
                prompt: "If $A$ has independent columns, $A^TA$ is:",
                options: ["Always zero", "Rectangular", "Invertible"],
                answer: "C",
                explanation: "For nonzero $x$, $x^TA^TAx=\\|Ax\\|^2>0$.",
              },
              {
                prompt: "If $A$ has orthonormal columns, the least-squares solution simplifies to:",
                options: ["$\\hat{x}=A^Tb$", "$\\hat{x}=Ab$", "$\\hat{x}=0$"],
                answer: "A",
                explanation: "Then $A^TA=I$.",
              },
              {
                prompt: "The distance from $b$ to subspace $W$ equals:",
                options: ["$\\|\\operatorname{proj}_W b\\|$ always", "$\\|b-\\operatorname{proj}_W b\\|$", "$\\|b\\|+\\|W\\|$"],
                answer: "B",
                explanation: "The shortest vector from $b$ to $W$ is the orthogonal residual.",
              },
              {
                prompt: "Projection onto the zero subspace maps every vector to:",
                options: ["Itself", "A unit vector", "$0$"],
                answer: "C",
                explanation: "The only vector in the zero subspace is zero.",
              },
            ]}
          />

          <Divider />

          <section className="section" id="la-o-apps">
            <div className="sec-badge">Section 5.4</div>
            <h2 className="sec-title">Applications of least squares</h2>
            <TheoryBox title="Why least squares matters">
              <p>
                {"Overdetermined systems appear constantly in data fitting, sensor fusion, and scientific computing. The least-squares solution is the standard practical answer when exact consistency is impossible."}
              </p>
            </TheoryBox>
          </section>

          <LaMcqSection
            id="quiz-la-o-apps"
            badge="Quiz 5.4"
            title="Applications"
            scoreId="score-la-o-apps"
            section="la-o-apps"
            questions={[
              {
                prompt: "Least squares is most useful when the system is:",
                options: ["Overdetermined", "Square and invertible", "Underdetermined only"],
                answer: "A",
                explanation: "More equations than unknowns is the classic setting.",
              },
              {
                prompt: "The geometric meaning of the least-squares solution is:",
                options: ["Orthogonal projection of b onto Col(A)", "Any solution of Ax=b", "The zero vector"],
                answer: "A",
                explanation: "It is the closest point in the column space.",
              },
              {
                prompt: "A common application is:",
                options: ["Data fitting / regression", "Only eigenvalue problems", "Only matrix inversion"],
                answer: "A",
                explanation: "Regression is the most frequent use of least squares.",
              },
              {
                prompt: "Least squares is used when $Ax=b$ is:",
                options: ["Inconsistent or overdetermined", "Always exactly solvable and square", "A nonlinear system only"],
                answer: "A",
                explanation: "It finds the vector $Ax$ closest to $b$ when exact equality is unavailable or undesirable.",
              },
              {
                prompt: "Least squares minimizes:",
                options: ["$\\|A+x+b\\|_2$", "$\\|Ax-b\\|_2$", "$\\det(A)$"],
                answer: "B",
                explanation: "The objective is the Euclidean residual norm.",
              },
              {
                prompt: "Linear regression by least squares chooses coefficients that minimize:",
                options: ["The sum of raw residuals only", "The determinant of the design matrix", "The sum of squared residuals"],
                answer: "C",
                explanation: "Squaring residuals gives the standard ordinary least-squares objective.",
              },
              {
                prompt: "In fitting $y=mx+c$, the columns of the design matrix typically represent:",
                options: ["The predictor values and a column of ones", "Only the response values", "Eigenvectors of the covariance matrix"],
                answer: "A",
                explanation: "The slope multiplies the predictor column and the intercept multiplies the ones column.",
              },
              {
                prompt: "A least-squares residual orthogonal to the design columns means:",
                options: ["The residual is necessarily zero", "No first-order improvement is possible by moving within the model column space", "The model is nonlinear"],
                answer: "B",
                explanation: "The fitted vector is the orthogonal projection onto the model space.",
              },
              {
                prompt: "If a data point is an extreme outlier, ordinary least squares can be sensitive because it:",
                options: ["Ignores residuals", "Uses only medians", "Squares residuals"],
                answer: "C",
                explanation: "Large residuals receive disproportionately large weight after squaring.",
              },
              {
                prompt: "QR-based least squares is often preferred to normal equations numerically because it:",
                options: ["Avoids explicitly forming $A^TA$", "Requires squaring the condition number intentionally", "Works only when $A=0$"],
                answer: "A",
                explanation: "Forming $A^TA$ can worsen conditioning; QR is generally more stable.",
              },
              {
                prompt: "If $A=QR$ with full column rank, solving least squares requires:",
                options: ["$Q\\hat{x}=R^Tb$", "$R\\hat{x}=Q^Tb$", "$A^TA=0$"],
                answer: "B",
                explanation: "Orthogonality of $Q$ reduces the problem to an upper-triangular solve.",
              },
              {
                prompt: "The fitted vector in linear regression lies in the:",
                options: ["Null space of the design matrix", "Left null space only", "Column space of the design matrix"],
                answer: "C",
                explanation: "Every fitted response has the form $A\\hat{x}$.",
              },
              {
                prompt: "If the model includes an intercept, a typical design matrix includes:",
                options: ["A column of ones", "A column of zeros", "Only a diagonal matrix"],
                answer: "A",
                explanation: "The coefficient on the ones column is the intercept.",
              },
              {
                prompt: "The coefficient of determination $R^2$ measures:",
                options: ["The matrix rank only", "The fraction of response variation explained by the fitted model", "The number of predictors exactly"],
                answer: "B",
                explanation: "For models with an intercept, $R^2$ compares residual variation with total variation.",
              },
              {
                prompt: "A smaller residual sum of squares indicates:",
                options: ["A necessarily worse fit", "A singular design matrix", "A closer least-squares fit to the observed responses"],
                answer: "C",
                explanation: "The objective being minimized is the sum of squared residuals.",
              },
              {
                prompt: "In calibration problems, least squares can estimate:",
                options: ["Model parameters from noisy measurements", "Only exact integer solutions", "Only eigenvalues"],
                answer: "A",
                explanation: "Noisy data rarely satisfy the model equations exactly, so least squares provides best-fit parameters.",
              },
              {
                prompt: "For multiple observations and predictors, least squares is naturally written as:",
                options: ["$A+b=0$ only", "$A\\hat{x}\\approx b$", "$A^{-1}=b$"],
                answer: "B",
                explanation: "The design matrix collects predictor information and $b$ collects observations.",
              },
              {
                prompt: "If the columns of $A$ are linearly dependent, least-squares minimizers may be:",
                options: ["Impossible to exist", "Always unique", "Nonunique"],
                answer: "C",
                explanation: "Different coefficient vectors can produce the same fitted vector when the null space is nontrivial.",
              },
              {
                prompt: "The pseudoinverse can be used in rank-deficient least squares to select:",
                options: ["A minimum-norm solution", "The solution with maximum norm", "No solution"],
                answer: "A",
                explanation: "The Moore–Penrose pseudoinverse returns the least-squares solution of smallest Euclidean norm.",
              },
              {
                prompt: "A perfect least-squares fit has residual norm:",
                options: ["$1$", "$0$", "Infinity"],
                answer: "B",
                explanation: "A zero residual means the model reproduces every observed response exactly.",
              },
            ]}
          />

          <Divider />
          <section className="section" id="summary">
            <div className="sec-badge">Reference</div>
            <h2 className="sec-title">Module complete</h2>
            <p>
              {"Orthogonal projections and the normal equations give the best approximation of b by vectors in Col(A). This is the foundation of least-squares methods."}
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
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Orthogonality & Least Squares (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Ortho · Part 1</div></div>
        <a className="sb-link" href="#la-o-intro">Orthogonality</a>
        <a className="sb-link" href="#la-o-proc1">Method</a>
        <a className="sb-link" href="#la-o-ex-p1">Examples</a>
        <a className="sb-link" href="#quiz-la-o-intro">Quiz</a>
        <a className="sb-link" href="#la-o-gram">Gram–Schmidt</a>
        <a className="sb-link" href="#quiz-la-o-gram">Quiz</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra · Part 1 of 2</div>
          <h1 className="ch-title">Orthogonality & Least Squares</h1>
          <p className="ch-sub">Orthogonal sets, projections, and orthonormal bases</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="la-o-intro">
          <div className="sec-badge">Section 5.1</div>
          <h2 className="sec-title">Orthogonality — deep theory</h2>
          <p>
            {"Two vectors are orthogonal when their dot product is zero. Orthogonal and orthonormal sets simplify almost every calculation involving lengths, angles, and projections."}
          </p>
          <TheoryBox title="Orthogonal and orthonormal sets">
            <p>
              {"A set of vectors is orthogonal if every pair of distinct vectors has dot product zero. It is orthonormal if, in addition, every vector has length 1. Orthonormal bases make coordinates especially simple: the coefficients are just the corresponding dot products."}
            </p>
          </TheoryBox>
          <TheoremBox title="Pythagorean theorem">
            <p>
              {"If u and v are orthogonal, then $||u+v||^2 = ||u||^2 + ||v||^2$. This extends to any finite orthogonal set."}
            </p>
          </TheoremBox>
          <RealLifeUse>{"GPS receivers and robotics controllers use orthonormal coordinate frames so that measuring along one axis never leaks error into another."}</RealLifeUse>
        </section>

        <section className="section" id="la-o-proc1">
          <div className="sec-badge">Procedure</div>
          <h2 className="sec-title">How to check orthogonality and normalize</h2>
          <ProcedureBox
            title="Working with orthogonal sets"
            steps={[
              { text: "Compute all pairwise dot products; they must be zero for orthogonality.", why: "Definition of an orthogonal set." },
              { text: "To normalize a nonzero vector u, replace it by $u/||u||$.", why: "Produces a unit vector in the same direction." },
              { text: "An orthogonal set of nonzero vectors is automatically linearly independent.", why: "A standard theorem of linear algebra." }
            ]}
          />
        </section>

        <section className="section" id="la-o-ex-p1">
          <div className="sec-badge">Large examples</div>
          <h2 className="sec-title">Four detailed worked examples</h2>

          <WorkedExample
            number={1}
            title="Testing orthogonality and building unit vectors"
            setup={"Check whether $u=(2,-1,2)$ and $v=(1,4,1)$ are orthogonal, then normalize each."}
            steps={[
              { text: "$u\\cdot v=2(1)+(-1)(4)+2(1)=2-4+2=0$, so $u$ and $v$ are orthogonal.", why: "Dot product test for orthogonality." },
              { text: "$\\|u\\|=\\sqrt{4+1+4}=3$; $\\|v\\|=\\sqrt{1+16+1}=3\\sqrt2$.", why: "Length is the square root of the dot product with itself." },
              { text: "Unit vectors: $\\hat u=\\tfrac13(2,-1,2)$, $\\hat v=\\tfrac{1}{3\\sqrt2}(1,4,1)$.", why: "Divide by each vector's own length." },
            ]}
            result={"$u\\perp v$; $\\hat u=\\tfrac13(2,-1,2)$, $\\hat v=\\tfrac{1}{3\\sqrt2}(1,4,1)$."}
            check={"$\\hat u\\cdot\\hat u=1$, confirming unit length."}
          />
          <WorkedExample
            number={2}
            title="Projection of a vector onto a line"
            setup={"Find the orthogonal projection of $b=(4,3)$ onto the line spanned by $a=(1,2)$, and the distance from $b$ to that line."}
            steps={[
              { text: "$\\hat b=\\dfrac{a\\cdot b}{a\\cdot a}a=\\tfrac{10}{5}(1,2)=(2,4)$.", why: "Projection formula onto a line through the origin." },
              { text: "Residual $e=b-\\hat b=(2,-1)$.", why: "Error vector between $b$ and its projection." },
              { text: "Distance $=\\|e\\|=\\sqrt5$.", why: "The shortest distance from $b$ to the line is the length of the perpendicular residual." },
            ]}
            result={"$\\hat b=(2,4)$, distance $\\sqrt5$."}
            check={"$a\\cdot(b-\\hat b)=0$ confirms the projection is correct."}
          />
          <WorkedExample
            number={3}
            title="Gram–Schmidt orthogonalization"
            setup={"Apply Gram–Schmidt to $v_1=(1,1,0)$, $v_2=(1,0,1)$ to get an orthogonal basis for their span."}
            steps={[
              { text: "$u_1=v_1=(1,1,0)$.", why: "First vector is unchanged." },
              { text: "$u_2=v_2-\\dfrac{u_1\\cdot v_2}{u_1\\cdot u_1}u_1=(1,0,1)-\\tfrac12(1,1,0)=(\\tfrac12,-\\tfrac12,1)$.", why: "Subtract the component of $v_2$ along $u_1$." },
              { text: "Check orthogonality: $u_1\\cdot u_2=\\tfrac12-\\tfrac12+0=0$.", why: "Confirms the construction worked." },
            ]}
            result={"$u_1=(1,1,0)$, $u_2=(\\tfrac12,-\\tfrac12,1)$."}
            check={"$u_1\\cdot u_2=0$ and both vectors still span the original plane."}
          />
          <WorkedExample
            number={4}
            title="QR decomposition of a 3×2 matrix"
            setup={"Find the QR decomposition of $A=\\begin{pmatrix}1&1\\\\1&0\\\\0&1\\end{pmatrix}$ using Gram–Schmidt."}
            steps={[
              { text: "Reusing Example 3's Gram–Schmidt: $q_1=\\tfrac{1}{\\sqrt2}(1,1,0)$, $q_2=\\sqrt{\\tfrac23}(\\tfrac12,-\\tfrac12,1)$.", why: "Normalize the orthogonal basis." },
              { text: "$R_{11}=\\|a_1\\|=\\sqrt2$; $R_{12}=q_1\\cdot a_2=\\tfrac{1}{\\sqrt2}$; $R_{22}=\\|u_2\\|=\\sqrt{3/2}$.", why: "$R$ entries are projections of later columns onto earlier $q$'s." },
              { text: "$A=QR$ with $Q=[q_1\\ q_2]$, $R=\\begin{pmatrix}\\sqrt2&1/\\sqrt2\\\\0&\\sqrt{3/2}\\end{pmatrix}$.", why: "Assemble the factorization." },
            ]}
            result={"$A=QR$ with $Q$ orthonormal-columns and $R$ upper triangular."}
            check={"Reconstructing $QR$ column by column returns exactly $A$."}
          />
        </section>

        <LaMcqSection
          id="quiz-la-o-intro"
          badge="Quiz 5.1"
          title="Orthogonality basics"
          scoreId="score-la-o-intro"
          section="la-o-intro"
          questions={[
            {
              prompt: "Two nonzero vectors are orthogonal when their dot product is:",
              options: ["Zero", "One", "Their lengths product"],
              answer: "A",
              explanation: "By definition, u·v = 0.",
            },
            {
              prompt: "An orthonormal set is:",
              options: ["Orthogonal and every vector has length 1", "Only orthogonal", "Only unit vectors"],
              answer: "A",
              explanation: "Both conditions are required.",
            },
            {
              prompt: "If u ⊥ v then ||u+v||² equals:",
              options: ["||u||² + ||v||²", "||u||² − ||v||²", "2||u||||v||"],
              answer: "A",
              explanation: "Pythagorean theorem for orthogonal vectors.",
            },
            {
              prompt: "A set of nonzero orthogonal vectors is always:",
              options: ["Linearly independent", "Linearly dependent", "A basis for $\\mathbb{R}^n$"],
              answer: "A",
              explanation: "Taking the dot product with each vector in a dependence relation forces all coefficients to zero.",
            },
            {
              prompt: "The dot product of $(1,2,2)$ with itself is:",
              options: ["$9$", "$5$", "$3$"],
              answer: "A",
              explanation: "$1^2+2^2+2^2=9$.",
            },
            {
              prompt: "The norm of $(1,2,2)$ is:",
              options: ["$9$", "$3$", "$5$"],
              answer: "B",
              explanation: "$\\sqrt{1^2+2^2+2^2}=3$.",
            },
            {
              prompt: "Vectors $(1,1)$ and $(1,-1)$ are:",
              options: ["Parallel", "Equal", "Orthogonal"],
              answer: "C",
              explanation: "Their dot product is $1-1=0$.",
            },
            {
              prompt: "If $u$ and $v$ are orthogonal, then $u\\cdot v$ equals:",
              options: ["$0$", "$1$", "$\\|u\\|+\\|v\\|$"],
              answer: "A",
              explanation: "Zero inner product defines orthogonality.",
            },
            {
              prompt: "A set of nonzero mutually orthogonal vectors is automatically:",
              options: ["Linearly dependent", "Linearly independent", "A basis for every larger space"],
              answer: "B",
              explanation: "Orthogonality prevents a nontrivial linear dependence.",
            },
            {
              prompt: "An orthonormal set consists of vectors that are:",
              options: ["Parallel and norm $1$", "Only linearly independent", "Mutually orthogonal and each have norm $1$"],
              answer: "C",
              explanation: "Orthonormal means orthogonal plus normalized.",
            },
            {
              prompt: "If $q$ is a unit vector, then $q\\cdot q$ is:",
              options: ["$1$", "$0$", "$-1$"],
              answer: "A",
              explanation: "$q\\cdot q=\\|q\\|^2=1$.",
            },
            {
              prompt: "For a matrix $Q$ with orthonormal columns, $Q^TQ$ equals:",
              options: ["$0$", "$I$", "$Q$"],
              answer: "B",
              explanation: "Column inner products form the identity matrix.",
            },
            {
              prompt: "If square $Q$ is orthogonal, then $Q^{-1}$ equals:",
              options: ["$Q$ always", "$-Q$", "$Q^T$"],
              answer: "C",
              explanation: "$Q^TQ=I$ implies $Q^{-1}=Q^T$.",
            },
            {
              prompt: "Orthogonal matrices preserve:",
              options: ["Euclidean lengths", "Only determinants equal to zero", "Only the zero vector"],
              answer: "A",
              explanation: "$\\|Qx\\|^2=x^TQ^TQx=\\|x\\|^2$.",
            },
            {
              prompt: "Orthogonal matrices also preserve:",
              options: ["Matrix dimensions only", "Dot products and angles", "Every coordinate individually"],
              answer: "B",
              explanation: "Preserving dot products preserves angles.",
            },
            {
              prompt: "If $u\\perp v$, then $\\|u+v\\|^2$ equals:",
              options: ["$\\|u\\|^2-\\|v\\|^2$", "$2\\|u\\|\\|v\\|$", "$\\|u\\|^2+\\|v\\|^2$"],
              answer: "C",
              explanation: "This is the vector form of the Pythagorean theorem.",
            },
            {
              prompt: "Normalizing a nonzero vector $v$ means replacing it by:",
              options: ["$v/\\|v\\|$", "$\\|v\\|v$", "$v^2$"],
              answer: "A",
              explanation: "Dividing by its norm produces a unit vector in the same direction.",
            },
            {
              prompt: "The angle between orthogonal nonzero vectors is:",
              options: ["$0^\\circ$", "$90^\\circ$", "$180^\\circ$"],
              answer: "B",
              explanation: "Orthogonality corresponds to cosine zero.",
            },
            {
              prompt: "If $Q$ is orthogonal, then $|\\det Q|$ is:",
              options: ["$0$", "Always $2$", "$1$"],
              answer: "C",
              explanation: "Taking determinants in $Q^TQ=I$ gives $(\\det Q)^2=1$.",
            },
            {
              prompt: "The columns of an orthogonal $n\\times n$ matrix form:",
              options: ["An orthonormal basis of $\\mathbb{R}^n$", "A dependent set", "The null space only"],
              answer: "A",
              explanation: "There are $n$ orthonormal columns in an $n$-dimensional space.",
            },
          ]}
        />

        <Divider />

        <section className="section" id="la-o-gram">
          <div className="sec-badge">Section 5.2</div>
          <h2 className="sec-title">Gram–Schmidt process</h2>
          <TheoryBox title="Producing an orthonormal basis">
            <p>
              {"Given any basis, the Gram–Schmidt process produces an orthonormal basis for the same span by successive orthogonal projections and normalization."}
            </p>
          </TheoryBox>
        </section>

        <LaMcqSection
          id="quiz-la-o-gram"
          badge="Quiz 5.2"
          title="Gram–Schmidt"
          scoreId="score-la-o-gram"
          section="la-o-gram"
          questions={[
            {
              prompt: "Gram–Schmidt starts by:",
              options: ["Normalizing the first vector", "Taking cross products", "Computing determinants"],
              answer: "A",
              explanation: "The first step is usually to normalize v₁.",
            },
            {
              prompt: "The process produces:",
              options: ["An orthonormal basis for the same span", "A random basis", "Only orthogonal but non-unit vectors"],
              answer: "A",
              explanation: "It yields an orthonormal basis of the original subspace.",
            },
            {
              prompt: "After Gram–Schmidt, the new vectors are:",
              options: ["Orthogonal (and usually normalized)", "Always parallel", "Linearly dependent"],
              answer: "A",
              explanation: "That is the whole point of the algorithm.",
            },
            {
              prompt: "The QR decomposition writes a matrix $A$ (independent columns) as:",
              options: ["$A=QR$ with $Q$ orthonormal-columns and $R$ upper triangular", "$A=QR$ with both $Q,R$ diagonal", "$A=QR$ with $Q$ symmetric and $R$ orthogonal"],
              answer: "A",
              explanation: "QR packages the Gram–Schmidt result: $Q$ holds the orthonormal directions, $R$ the projection coefficients.",
            },
            {
              prompt: "Gram–Schmidt starts from a linearly independent set and produces:",
              options: ["A dependent set", "An orthogonal or orthonormal set spanning the same subspace", "A set spanning a different subspace"],
              answer: "B",
              explanation: "It removes components along previously constructed directions without changing the span.",
            },
            {
              prompt: "In Gram–Schmidt, the first orthogonal vector is usually chosen as:",
              options: ["$u_1=0$", "$u_1=v_1+v_2$ always", "$u_1=v_1$"],
              answer: "C",
              explanation: "No earlier directions need to be removed from the first vector.",
            },
            {
              prompt: "The component of $v$ along nonzero $u$ is:",
              options: ["$\\operatorname{proj}_u v=\\frac{v\\cdot u}{u\\cdot u}u$", "$(v\\cdot u)v$", "$u-v$"],
              answer: "A",
              explanation: "Projection scales $u$ by the dot-product ratio.",
            },
            {
              prompt: "For orthonormal $q$, $\\operatorname{proj}_q v$ simplifies to:",
              options: ["$(v\\cdot q)v$", "$(v\\cdot q)q$", "$v-q$"],
              answer: "B",
              explanation: "Because $q\\cdot q=1$.",
            },
            {
              prompt: "The second Gram–Schmidt vector is formed by:",
              options: ["$u_2=v_2+u_1$", "$u_2=v_1-v_2$", "$u_2=v_2-\\operatorname{proj}_{u_1}v_2$"],
              answer: "C",
              explanation: "Subtract the component of $v_2$ in the first direction.",
            },
            {
              prompt: "After Gram–Schmidt, normalization is done by:",
              options: ["$q_i=u_i/\\|u_i\\|$", "$q_i=\\|u_i\\|u_i$", "$q_i=u_i^2$"],
              answer: "A",
              explanation: "Divide each nonzero orthogonal vector by its norm.",
            },
            {
              prompt: "If the input vectors to Gram–Schmidt are linearly dependent, one constructed $u_i$ may become:",
              options: ["A unit vector automatically", "$0$", "An eigenvalue"],
              answer: "B",
              explanation: "A dependent input can lie entirely in the span of previous vectors, leaving zero after subtraction.",
            },
            {
              prompt: "In QR decomposition from Gram–Schmidt, columns of $Q$ are:",
              options: ["All zero", "Always eigenvectors of $A$", "Orthonormal"],
              answer: "C",
              explanation: "Gram–Schmidt orthonormalizes the columns of $A$.",
            },
            {
              prompt: "In $A=QR$, the matrix $R$ is typically:",
              options: ["Upper triangular", "Lower triangular", "Skew-symmetric"],
              answer: "A",
              explanation: "Its entries are projection coefficients onto earlier orthonormal vectors.",
            },
            {
              prompt: "If $A$ has independent columns, the diagonal entries of $R$ in classical Gram–Schmidt are:",
              options: ["All zero", "Nonzero", "Undefined"],
              answer: "B",
              explanation: "Each new orthogonal component has nonzero norm.",
            },
            {
              prompt: "For a matrix with orthonormal columns, applying Gram–Schmidt will:",
              options: ["Make all columns zero", "Make them dependent", "Leave the directions unchanged up to harmless signs/normalization"],
              answer: "C",
              explanation: "Each later vector already has zero projection onto earlier ones.",
            },
            {
              prompt: "Gram–Schmidt preserves the span of the first $k$ vectors at each stage because:",
              options: ["Each new vector is obtained by subtracting combinations of earlier vectors", "It changes dimensions arbitrarily", "It multiplies by a singular matrix only"],
              answer: "A",
              explanation: "The forward and reverse linear-combination relations keep the partial spans equal.",
            },
            {
              prompt: "If $q_1,q_2$ are orthonormal, then $q_1\\cdot q_2$ is:",
              options: ["$1$", "$0$", "$-1$"],
              answer: "B",
              explanation: "Distinct orthonormal vectors are orthogonal.",
            },
            {
              prompt: "If $q_1,q_2$ are orthonormal, then $\\|q_1+q_2\\|$ is:",
              options: ["$2$", "$0$", "$\\sqrt{2}$"],
              answer: "C",
              explanation: "Pythagoras gives norm squared $1+1=2$.",
            },
            {
              prompt: "QR decomposition is especially useful for solving:",
              options: ["Least-squares problems", "Only nonlinear differential equations", "Only determinant-free geometry"],
              answer: "A",
              explanation: "With orthonormal $Q$, least squares reduces to a triangular solve involving $R$.",
            },
            {
              prompt: "For full-column-rank $A=QR$, the least-squares problem can be reduced to:",
              options: ["$Q\\hat{x}=Rb$", "$R\\hat{x}=Q^Tb$", "$R^TR=0$"],
              answer: "B",
              explanation: "Minimizing $\\|Ax-b\\|$ with $A=QR$ gives the triangular system $R\\hat{x}=Q^Tb$.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="summary1">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">Continue</h2>
          <p>
            {"Orthogonal sets simplify projections and length calculations. Part 2 develops the projection formula and least-squares applications."}
          </p>
          <p>
            Use the gold button: <strong>Next: Part 2 — Projections & Least Squares</strong>.
          </p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default OrthoLeastSquaresGuide;