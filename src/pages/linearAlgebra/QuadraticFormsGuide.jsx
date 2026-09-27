import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_QUADRATIC_FORMS_QUIZ } from "../../data/laQuizzes";

export default function QuadraticFormsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={"Quadratic Forms & Definiteness (Part " + part + ")"}>
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Quadratic Forms &amp; Definiteness</div></div>
        <a className="sb-link" href="#quadratic-theory">Theory</a>
        <a className="sb-link" href="#quadratic-method">Method</a>
        <a className="sb-link" href="#quadratic-examples">Worked examples</a>
        {advanced && <a className="sb-link" href="#quiz-la-quadratic-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/linear-algebra/overview">Course overview</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra</div>
          <h1 className="ch-title">Quadratic Forms &amp; Definiteness</h1>
          <p className="ch-sub">Matrix forms, sign classification, congruence and second-order tests</p>
          <p><Link to="/linear-algebra/complex-vector-spaces/1">Complex vector spaces</Link> · <Link to="/linear-algebra/eigen/1">Eigenvalues</Link> · <Link to="/linear-algebra/orthogonality/1">Orthogonality</Link></p>
          <p>Part {part} of 2. Part 1 develops matrix representation and sign tests; Part 2 covers congruence, inertia, optimization and the topic checkpoint.</p>
        </header>
        <section className="section" id="quadratic-theory">
          <h2 className="sec-title">{advanced ? "Congruence, inertia and applications" : "Represent and classify quadratic forms"}</h2>
          {advanced ? (
            <>
              <TheoryBox title={"Completing squares and Cholesky factorization"}>
                <p>{"For $ax^2+2bxy+cy^2$ with $a\\ne0$, complete the square: $a(x+(b/a)y)^2+(c-b^2/a)y^2$. If both coefficients are positive, the form is positive definite."}</p>
                <p>{"A positive-definite $S$ has a Cholesky factorization $S=R^TR$ with invertible $R$, hence $x^TSx=\\|Rx\\|_2^2>0$ for every nonzero $x$. A positive-semidefinite form may have a singular factor."}</p>
                <p>{"Completing squares corresponds to symmetric elimination. When leading pivots exist, each is $\\Delta_k/\\Delta_{k-1}$. Positive pivots certify positive definiteness. Never divide by a zero pivot without changing strategy."}</p>
              </TheoryBox>
              <TheoryBox title={"Congruence and Sylvester’s law of inertia"}>
                <p>{"Under an invertible variable change $x=Py$, the matrix of the form becomes $P^TSP$, because $x^TSx=y^T(P^TSP)y$. This is a congruence transformation."}</p>
                <p>{"Sylvester’s law says congruent real symmetric matrices have the same counts of positive, negative and zero squares. Their individual eigenvalues may change; determinants scale by $\\det(P)^2$."}</p>
                <p>{"Similarity $P^{-1}SP$ changes the matrix of a linear operator under a basis change. Congruence $P^TSP$ changes the coordinates of a quadratic form. These coincide for orthogonal $P$, but generally differ."}</p>
              </TheoryBox>
              <TheoryBox title={"Optimization and complex forms"}>
                <p>{"At a stationary point $x_0$, a twice-differentiable function has second-order change $\\tfrac12h^T\\nabla^2f(x_0)h+o(\\|h\\|^2)$. A positive-definite Hessian implies a strict local minimum; a negative-definite one implies a strict local maximum; an indefinite one implies a saddle."}</p>
                <p>{"A singular semidefinite Hessian is inconclusive. Higher-order terms decide: $x^4+y^4$ has a strict minimum at the origin although its Hessian there is zero. In constrained optimization, test curvature along feasible directions."}</p>
                <p>{"For complex variables use $z^*Hz$ with Hermitian $H$. The Hermitian spectral theorem gives real eigenvalues and unitary diagonalization, so the same sign classification applies. The expression $z^THz$ is generally not real."}</p>
              </TheoryBox>
            </>
          ) : (
            <>
              <TheoryBox title={"Quadratic forms and symmetric matrices"}>
                <p>{"A real quadratic form is a homogeneous degree-two expression $q(x)=x^TAx$. The representing matrix is not unique: a skew-symmetric matrix $K$ contributes nothing because $x^TKx=0$. The unique symmetric representative is $S=(A+A^T)/2$."}</p>
                <p>{"For symmetric $S$, each mixed term is $2s_{ij}x_ix_j$. Therefore its coefficient is split equally between the two off-diagonal entries. Over complex vectors, use the Hermitian form $q(z)=z^*Hz$ with $H=H^*$ so its value is real."}</p>
                <p>{"The form obeys $q(tx)=t^2q(x)$ for real $t$. Its sign is determined by direction: positive definite means $q(x)>0$ for every nonzero $x$; positive semidefinite uses $q(x)\\ge0$. Negative definite and semidefinite reverse the sign. Indefinite forms take both positive and negative values."}</p>
              </TheoryBox>
              <TheoryBox title={"Eigenvalue classification"}>
                <p>{"The spectral theorem gives $S=Q\\Lambda Q^T$ with orthogonal $Q$ and real diagonal $\\Lambda$. For $y=Q^Tx$, $q(x)=\\sum_i\\lambda_i y_i^2$. Thus positive eigenvalues mean positive definite, nonnegative eigenvalues mean positive semidefinite, and a mixture of positive and negative eigenvalues means indefinite."}</p>
                <p>{"Negative eigenvalues classify negative definite or negative semidefinite in the analogous strict or non-strict way. Zero eigenvalues give nonzero null directions; they rule out definiteness but not semidefiniteness."}</p>
                <p>{"The positive, negative and zero eigenvalue counts form the inertia. Eigenvectors identify directions of curvature. This eigenvalue test requires a real symmetric or complex Hermitian matrix, not an arbitrary nonsymmetric representative."}</p>
              </TheoryBox>
              <TheoryBox title={"Leading minors and definiteness tests"}>
                <p>{"Sylvester’s criterion states that a real symmetric matrix is positive definite exactly when all leading principal minors $\\Delta_k$ are strictly positive. Negative definiteness requires $(-1)^k\\Delta_k>0$ for each size $k$."}</p>
                <p>{"For semidefiniteness, nonnegative leading principal minors alone are not sufficient. The eigenvalue test or nonnegativity of all principal minors is valid. Positive diagonal entries or a positive determinant alone cannot establish positive definiteness."}</p>
                <p>{"For $\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}$, positive definiteness is equivalent to $a>0$ and $ac-b^2>0$. Its eigenvalues, determinant and trace can also be used together to classify the sign pattern."}</p>
              </TheoryBox>
            </>
          )}
        </section>
        <section className="section" id="quadratic-method">
          <h2 className="sec-title">A reliable classification workflow</h2>
          <ProcedureBox
            title={advanced ? "Use a form in new coordinates or optimization" : "Represent and classify a quadratic form"}
            steps={advanced ? ["Under $x=Py$, form the congruence $P^TAP$; do not substitute the similarity formula.", "Use Sylvester’s law to preserve positive, negative and zero counts.", "At a stationary point, test the Hessian and treat a singular semidefinite Hessian as inconclusive.", "If needed, inspect higher-order terms or feasible directions."] : ["Split every mixed coefficient equally between symmetric off-diagonal entries.", "For a real form replace a nonsymmetric representative by $(A+A^T)/2$.", "Use eigenvalues for full classification, or leading principal minors for strict definiteness.", "For semidefiniteness use eigenvalues or all principal minors; leading minors alone do not suffice."]}
          />
        </section>
        <section className="section" id="quadratic-examples">
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={4}
                title={"Apply Sylvester’s criterion"}
                setup={"Classify $A=\\begin{pmatrix}4&1&0\\\\1&3&1\\\\0&1&3\\end{pmatrix}$."}
                steps={["$\\Delta_1=4>0$.", "$\\Delta_2=12-1=11>0$.", "$\\Delta_3=4(9-1)-3=29>0$."]}
                result={"All leading principal minors are positive, so $A$ is positive definite."}
                check={"The pivots $4$, $11/4$ and $29/11$ are all positive."}
                mistake={"Using a positive determinant alone as a definiteness test."}
              />
              <WorkedExample
                number={5}
                title={"Compare congruent forms"}
                setup={"Let $A=\\operatorname{diag}(1,-1)$ and $P=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$."}
                steps={["$P^TAP=\\begin{pmatrix}1&1\\\\1&0\\end{pmatrix}$.", "The transformed determinant is $-1$, so its eigenvalues have opposite signs."]}
                result={"Both forms have inertia $(1,1,0)$, although their eigenvalues differ."}
                check={"$\\det(P^TAP)=\\det(P)^2\\det(A)=-1$."}
                mistake={"Assuming congruence preserves every eigenvalue."}
              />
              <WorkedExample
                number={6}
                title={"Use the Hessian test carefully"}
                setup={"Classify the stationary point at the origin for $f(x,y)=x^4+y^4$."}
                steps={["The gradient is zero and the Hessian at the origin is the zero matrix.", "The Hessian is semidefinite but singular, so the second-derivative test is inconclusive.", "$f(x,y)>0$ away from the origin and $f(0,0)=0$."]}
                result={"The origin is a strict global minimum, determined from the function rather than the inconclusive Hessian test."}
                check={"The increase along each coordinate direction is fourth order."}
                mistake={"Calling the point a saddle merely because the Hessian has zero eigenvalues."}
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title={"Construct the symmetric matrix"}
                setup={"Write $q(x,y)=4x^2-10xy+7y^2$ as $x^TAx$."}
                steps={["The diagonal entries are $4$ and $7$.", "The cross term is $2a_{12}xy=-10xy$, so $a_{12}=a_{21}=-5$."]}
                result={"$A=\\begin{pmatrix}4&-5\\\\-5&7\\end{pmatrix}$."}
                check={"$x^TAx=4x^2-5xy-5xy+7y^2$."}
                mistake={"Putting the entire mixed coefficient in each off-diagonal entry."}
              />
              <WorkedExample
                number={2}
                title={"Classify from eigenvalues"}
                setup={"Classify $q(x,y)=x^2+4xy+y^2$."}
                steps={["$A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$ has characteristic polynomial $(1-\\lambda)^2-4$.", "The eigenvalues are $3$ and $-1$, so there are directions of both signs."]}
                result={"The form is indefinite."}
                check={"$q(1,1)=6>0$ and $q(1,-1)=-2<0$."}
                mistake={"Inferring definiteness from positive diagonal entries alone."}
              />
              <WorkedExample
                number={3}
                title={"Complete the square"}
                setup={"Classify $q(x,y)=2x^2+4xy+5y^2$."}
                steps={["$2x^2+4xy+5y^2=2(x+y)^2+3y^2$.", "This sum of positive multiples of squares vanishes only at $(0,0)$."]}
                result={"The form is positive definite."}
                check={"The leading minors are $2>0$ and $2\\cdot5-2\\cdot2=6>0$."}
                mistake={"Dropping the remainder after completing the square."}
              />
            </>
          )}
        </section>
        <section className="section">
          <h2 className="sec-title">Check your reasoning</h2>
          <p>{advanced ? "Quadratic forms change by congruence. Inertia is preserved, but eigenvalues generally are not. A singular semidefinite Hessian does not settle local behavior." : "State the strict or non-strict sign test. Positive diagonal entries or a positive determinant alone do not establish positive definiteness."}</p>
        </section>
        {advanced ? (
          <GuideMcqSection
            id="quiz-la-quadratic-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Quadratic Forms & Definiteness"
            scoreId="score-la-quadratic-checkpoint"
            section="la-quadratic-checkpoint"
            questions={LA_QUADRATIC_FORMS_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-la-quadratic-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to congruence and applications</h2>
            <p>The single checkpoint in Part 2 covers both parts. Answer all 20 questions and score at least 80% to unlock Part 2 completion.</p>
            <Link to="/linear-algebra/quadratic-forms-definiteness/2">Continue to Part 2 →</Link>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
