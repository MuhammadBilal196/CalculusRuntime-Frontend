import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, WorkedExample } from "./LaBlocks";
import { LA_SPECTRAL_GRAPH_QUIZ } from "../../data/laQuizzes";
export default function SpectralGraphTheoryGuide({ embedded = false }) {
  const { saveQuizScore } = useProgress();
  const content = (
    <div className={embedded ? "la-topic-content" : "main"}>
      {!embedded && <h1>Spectral Graph Theory</h1>}
      <p>Review <Link to="/linear-algebra/eigen/1">eigenvalues</Link> and <Link to="/linear-algebra/quadratic-forms-definiteness">quadratic forms</Link>. We use undirected graph Laplacians to study connectivity and graph signals.</p>
      <section className="section" id="spectral-graph-section-1">
        <h2 className="sec-title">Encode an undirected graph with matrices</h2>
        <TheoryBox title={"Encode an undirected graph with matrices"}>
          <p>{"Consider a finite undirected graph without self-loops, with nonnegative symmetric edge weights $w_{ij}=w_{ji}$. Missing edges have weight zero. Its adjacency matrix is $A=(w_{ij})$; weighted degree is $d_i=\\sum_jw_{ij}$ and $D=\\operatorname{diag}(d_1,\\ldots,d_n)$. The combinatorial Laplacian is $L=D-A$."}</p>
          <p>{"Each diagonal entry of L is a weighted degree; each off-diagonal entry is the negative edge weight. Every row sums to zero, so $L\\mathbf1=0$. Symmetry guarantees real eigenvalues and an orthonormal eigenbasis. The conclusions here depend on undirected nonnegative weights; do not transfer them unchanged to signed or directed graphs."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="spectral-graph-section-2">
        <h2 className="sec-title">Energy and positive semidefiniteness</h2>
        <TheoryBox title={"Energy and positive semidefiniteness"}>
          <p>{"For a real vector x assigning a value to every vertex, $x^TLx=\\frac12\\sum_{i,j}w_{ij}(x_i-x_j)^2=\\sum_{i<j}w_{ij}(x_i-x_j)^2$. Expand the squares and use symmetry to obtain $\\sum_i d_ix_i^2-\\sum_{i,j}w_{ij}x_ix_j$. The factor one half is required if both orientations are counted."}</p>
          <p>{"Every energy term is nonnegative, so L is positive semidefinite. A signal has small energy when adjacent vertices carry similar values, particularly across heavily weighted edges. Constant signals have zero energy. The quadratic form measures variation across edges rather than the size of the signal itself."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="spectral-graph-section-3">
        <h2 className="sec-title">Connectivity is the dimension of the kernel</h2>
        <TheoryBox title={"Connectivity is the dimension of the kernel"}>
          <p>{"Zero energy forces $x_i=x_j$ across each positive-weight edge, hence along every path. Therefore kernel vectors are exactly those constant on each connected component. Component indicator vectors form a basis of the kernel, including indicators of isolated vertices."}</p>
          <p>{"If the graph has c connected components, $\\dim\\ker L=c$ and $\\operatorname{rank}L=n-c$. With eigenvalues ordered $0=\\lambda_1\\leq\\lambda_2\\leq\\cdots\\leq\\lambda_n$, a graph with at least two vertices is connected exactly when $\\lambda_2>0$. This second eigenvalue is the algebraic connectivity."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="spectral-graph-section-4">
        <h2 className="sec-title">The Fiedler vector and relaxed partitions</h2>
        <TheoryBox title={"The Fiedler vector and relaxed partitions"}>
          <p>{"For n at least two, $\\lambda_2=\\min_{x\\ne0,\\ x^T\\mathbf1=0}(x^TLx)/(x^Tx)$. An eigenvector for it is a Fiedler vector. The orthogonality condition excludes the constant zero-energy direction. Minimizing this quotient favors slowly varying, nonconstant signals."}</p>
          <p>{"For a cut indicator $\\mathbf1_S$, its Laplacian energy equals the total weight of edges crossing from S to its complement. Thresholding a Fiedler vector provides a relaxed partition heuristic. Signs or a median threshold can be used, but repeated eigenvalues, zero coordinates and ties need a stated rule. This is not a universal exact minimum-cut algorithm."}</p>
          <p>{"Adding an undirected edge of weight w between i and j adds $w(e_i-e_j)(e_i-e_j)^T$ to L. This is positive semidefinite, so the variational characterization shows algebraic connectivity cannot decrease. The amount of increase depends on the graph, not just the new weight."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="spectral-graph-section-5">
        <h2 className="sec-title">Normalized Laplacians and numerical checks</h2>
        <TheoryBox title={"Normalized Laplacians and numerical checks"}>
          <p>{"On vertices of positive degree define $\\mathcal L=D^{-1/2}LD^{-1/2}$. For isolated vertices, use zero in $D^{-1/2}$; the resulting isolated row and column are zero. Under this convention the formula $I-D^{-1/2}AD^{-1/2}$ applies only to the positive-degree block, not blindly to isolated diagonal entries."}</p>
          <p>{"On a connected graph with no isolated vertices, $D^{1/2}\\mathbf1$ is a null vector of the normalized Laplacian; the constant vector generally is not. Its spectrum lies in $[0,2]$. Distinguish normalized eigenvectors and eigenvalues from those of the combinatorial Laplacian."}</p>
          <p>{"For computation, check symmetry, nonnegative weights, row sums and eigenpair residuals. Roundoff can create tiny signed values near zero; choose a scale-aware tolerance instead of testing equality to zero. Sparse matrices and a few smallest eigenpairs suffice for many clustering or connectivity tasks. This topic concerns graph Laplacians, not Markov-chain transition models."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="spectral-graph-examples">
        <h2 className="sec-title">Worked examples</h2>
        <WorkedExample number={1} title={"A three-vertex path"} setup={"For edges 1–2 and 2–3 of weight 1, find L."}
          steps={["$D=\\operatorname{diag}(1,2,1)$, so $L=\\begin{pmatrix}1&-1&0\\\\-1&2&-1\\\\0&-1&1\\end{pmatrix}$.", "The vectors $(1,1,1)^T$, $(1,0,-1)^T$ and $(1,-2,1)^T$ are eigenvectors with eigenvalues 0, 1 and 3.", "The second eigenvalue is 1, so the graph is connected."]}
          result={"Its spectrum is $0,1,3$."} check={"Multiplication verifies all three eigenpairs and their eigenvalues sum to trace 4."} mistake={"Adjacency eigenvalues and Laplacian eigenvalues are different."} />
        <WorkedExample number={2} title={"Disconnected edge and isolated vertex"} setup={"Take only edge 1–2 and let vertex 3 be isolated."}
          steps={["$L=\\begin{pmatrix}1&-1&0\\\\-1&1&0\\\\0&0&0\\end{pmatrix}$.", "Independent kernel vectors are $(1,1,0)^T$ and $(0,0,1)^T$.", "The remaining eigenvalue is 2, giving spectrum 0,0,2 and rank 1."]}
          result={"Two zero eigenvalues identify two connected components."} check={"Rank equals 3 minus 2."} mistake={"An isolated vertex counts as a connected component."} />
        <WorkedExample number={3} title={"Weighted edge energy"} setup={"Two vertices have one edge of weight 3; assign $x=(2,-1)^T$."}
          steps={["$L=\\begin{pmatrix}3&-3\\\\-3&3\\end{pmatrix}$ has eigenvalues 0 and 6.", "The edge energy is $3(2-(-1))^2=27$.", "$Lx=(9,-9)^T$ and $x^TLx=18+9=27$."]}
          result={"The energy is 27 and the algebraic connectivity is 6."} check={"The undirected edge was counted once."} mistake={"Counting both orientations without a one-half factor doubles the answer."} />
        <WorkedExample number={4} title={"Normalize the path"} setup={"Use the three-vertex path with degrees 1,2,1."}
          steps={["$\\mathcal L=\\begin{pmatrix}1&-1/\\sqrt2&0\\\\-1/\\sqrt2&1&-1/\\sqrt2\\\\0&-1/\\sqrt2&1\\end{pmatrix}$.", "The null vector is $(1,\\sqrt2,1)^T$. Vectors $(1,0,-1)^T$ and $(1,-\\sqrt2,1)^T$ give eigenvalues 1 and 2.", "The normalized spectrum is 0,1,2, different from the combinatorial spectrum 0,1,3."]}
          result={"Normalization changes the spectrum and its zero eigenvector."} check={"All normalized eigenvalues lie between zero and two."} mistake={"Do not assume the all-ones vector is a normalized-Laplacian null vector on an irregular graph."} />
        <WorkedExample number={5} title={"Add the missing edge"} setup={"Add edge 1–3 to the three-vertex path, forming a unit-weight triangle."}
          steps={["The new Laplacian is $\\begin{pmatrix}2&-1&-1\\\\-1&2&-1\\\\-1&-1&2\\end{pmatrix}=3I-\\mathbf1\\mathbf1^T$.", "It has eigenvalue 0 on the constant vector and eigenvalue 3 on the two-dimensional perpendicular subspace.", "Algebraic connectivity increases from 1 to 3."]}
          result={"The triangle has spectrum 0,3,3."} check={"The added edge contributes the positive semidefinite matrix (e1-e3)(e1-e3)^T."} mistake={"A repeated Fiedler eigenvalue means the Fiedler vector is not unique up to sign alone."} />
      </section>
      <GuideMcqSection id="quiz-la-spectral-graph-checkpoint" title="Spectral Graph Theory" badge="Topic checkpoint · 20 questions"
        scoreId="score-la-spectral-graph-checkpoint" section="la-spectral-graph-checkpoint" questions={LA_SPECTRAL_GRAPH_QUIZ}
        onComplete={(score, total) => saveQuizScore("guide-mcq-la-spectral-graph-checkpoint", score, total)} />
    </div>
  );
  if (embedded) return content;
  return <StudyGuideShell guideClass="partial-derivatives-guide" title="Spectral Graph Theory">
    <nav className="sidebar" aria-label="Spectral Graph Theory sections">
      <Link className="sb-link" to="/linear-algebra/overview#modern-applications">Course overview</Link>
      <a className="sb-link" href="#spectral-graph-section-1">Encode an undirected graph with matrices</a>
      <a className="sb-link" href="#spectral-graph-section-2">Energy and positive semidefiniteness</a>
      <a className="sb-link" href="#spectral-graph-section-3">Connectivity is the dimension of the kernel</a>
      <a className="sb-link" href="#spectral-graph-section-4">The Fiedler vector and relaxed partitions</a>
      <a className="sb-link" href="#spectral-graph-section-5">Normalized Laplacians and numerical checks</a>
      <a className="sb-link" href="#spectral-graph-examples">Worked examples</a>
      <a className="sb-link" href="#quiz-la-spectral-graph-checkpoint">Checkpoint</a>
    </nav>{content}
  </StudyGuideShell>;
}
