import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { LaMcqSection } from "./LaMcq";
import LaCertificateBoost from "./LaCertificateBoost";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample, PracticalTheory, RealLifeUse } from "./LaBlocks";

function Divider() {
  return <hr className="divider" />;
}

function SvdGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Singular Value Decomposition (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">SVD · Part 2</div></div>
          <a className="sb-link" href="#la-s-apps">Applications</a>
          <a className="sb-link" href="#la-s-proc2">Method</a>
          <a className="sb-link" href="#la-s-ex-p2">Examples</a>
          <a className="sb-link" href="#quiz-la-s-apps">Quiz</a>
          <a className="sb-link" href="#la-s-lowrank">Low-rank & pseudoinverse</a>
          <a className="sb-link" href="#quiz-la-s-lowrank">Quiz</a>
          <a className="sb-link" href="#la-cert-svd">Certificate Examples</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Linear Algebra · Part 2 of 2</div>
            <h1 className="ch-title">Singular Value Decomposition</h1>
            <p className="ch-sub">Conditioning, optimal low-rank approximation, and the Moore–Penrose pseudoinverse</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="la-s-apps">
            <div className="sec-badge">Section 6.3</div>
            <h2 className="sec-title">Why SVD matters</h2>
            <p>
              {"SVD is one of the most useful matrix factorizations in applied mathematics. It reveals the geometry of a linear map, gives the best low-rank approximations, and produces the Moore–Penrose pseudoinverse."}
            </p>
            <TheoryBox title="Geometric picture">
              <p>
                {"Any matrix A maps the unit sphere to an ellipsoid. The singular values are the lengths of the semi-axes of that ellipsoid; the right singular vectors point to the directions that are stretched the most (and least)."}
              </p>
            </TheoryBox>
            <PracticalTheory title="Reading a condition number">
              <p>
                {"A huge gap between the largest and smallest singular value (a large condition number) is a warning sign: small errors or noise in the input get amplified enormously in the corresponding output direction, which matters for numerical solving and for deciding how many singular values are safe to keep."}
              </p>
            </PracticalTheory>
            <RealLifeUse>{"Image compression, principal component analysis (PCA), recommender systems, noise reduction, and solving rank-deficient least-squares problems all rely on SVD."}</RealLifeUse>
          </section>

          <section className="section" id="la-s-proc2">
            <div className="sec-badge">Procedure</div>
            <h2 className="sec-title">Computing a truncated SVD</h2>
            <ProcedureBox
              title="Low-rank approximation via SVD"
              steps={[
                { text: "Compute (or obtain) the full SVD $A = U\\Sigma V^T$.", why: "This is the starting point for truncation." },
                { text: "Keep only the largest $k$ singular values and the corresponding columns of $U$ and $V$.", why: "Eckart–Young theorem says this gives the best rank-$k$ approximation." },
                { text: "Form $A_k = U_k \\Sigma_k V_k^T$.", why: "This is the rank-$k$ matrix closest to A in both Frobenius and spectral norms." },
                { text: "To build the pseudoinverse instead, reciprocate every nonzero singular value and swap the roles of $U$ and $V$: $A^+=V\\Sigma^+U^T$.", why: "Zero singular values cannot be inverted, so they stay zero in $\\Sigma^+$." },
              ]}
            />
          </section>

          <section className="section" id="la-s-ex-p2">
            <div className="sec-badge">Large examples</div>
            <h2 className="sec-title">Five detailed worked examples</h2>

            <WorkedExample
              number={1}
              title="Pseudoinverse of a non-square matrix"
              setup={"Find the Moore–Penrose pseudoinverse of $A=\\begin{pmatrix}2&0\\\\0&0\\\\0&3\\end{pmatrix}$."}
              steps={[
                { text: "$A$ is already in rectangular-diagonal form, so its nonzero entries $2,3$ are the singular values.", why: "Convenient special case." },
                { text: "$\\Sigma^{+}$ replaces each nonzero singular value by its reciprocal and transposes the shape.", why: "Definition of the pseudoinverse of a diagonal matrix." },
                { text: "$A^{+}=\\begin{pmatrix}0.5&0&0\\\\0&0&1/3\\end{pmatrix}$.", why: "Invert the nonzero entries; leave the zero row/column collapsed." },
                { text: "Check: $AA^{+}A=A$, a defining property of the pseudoinverse.", why: "Verification identity." },
              ]}
              result={"$A^{+}=\\begin{pmatrix}0.5&0&0\\\\0&0&1/3\\end{pmatrix}$."}
              check={"$AA^{+}A=A$ holds by direct multiplication."}
            />
            <WorkedExample
              number={2}
              title="SVD reveals the condition number"
              setup={"For $A=\\begin{pmatrix}100&0\\\\0&0.01\\end{pmatrix}$, find the condition number and explain its practical meaning."}
              steps={[
                { text: "$A$ is diagonal, so $\\sigma_1=100$, $\\sigma_2=0.01$.", why: "Already in SVD form with $U=V=I$." },
                { text: "Condition number $\\kappa(A)=\\sigma_{\\max}/\\sigma_{\\min}=100/0.01=10{,}000$.", why: "Standard definition in the 2-norm." },
                { text: "A large $\\kappa$ means $A$ is nearly singular in one direction: tiny input errors get amplified $10{,}000\\times$ relative to the other direction.", why: "Interpretation of condition number." },
              ]}
              result={"$\\kappa(A)=10{,}000$ — the matrix is ill-conditioned."}
              check={"The huge gap between $\\sigma_1=100$ and $\\sigma_2=0.01$ directly explains the sensitivity."}
            />
            <WorkedExample
              number={3}
              title="SVD of a symmetric positive-definite matrix"
              setup={"For symmetric $A=\\begin{pmatrix}5&2\\\\2&2\\end{pmatrix}$ (eigenvalues $6,1$, eigenvectors $(2,1),(1,-2)$), relate its SVD to its eigendecomposition."}
              steps={[
                { text: "Since $A$ is symmetric with positive eigenvalues, $A^TA=A^2$ has eigenvalues $\\lambda_i^2$, so $\\sigma_i=\\lambda_i$: $\\sigma_1=6$, $\\sigma_2=1$.", why: "$A^T=A$ makes $A^TA=A^2$." },
                { text: "The right singular vectors $V$ equal the orthonormal eigenvectors, and because eigenvalues are positive, $U=V$ too.", why: "Left and right singular vectors coincide for symmetric positive-definite matrices." },
                { text: "So $A=U\\Sigma V^T$ becomes exactly $A=Q\\Lambda Q^T$, the spectral decomposition.", why: "SVD reduces to eigendecomposition in this special case." },
              ]}
              result={"For symmetric positive-definite $A$, $\\sigma_i=\\lambda_i$ and $U=V=Q$."}
              check={"$\\sigma_1\\sigma_2=6=\\det A=\\lambda_1\\lambda_2$."}
            />
            <WorkedExample
              number={4}
              title="How much data a truncated SVD keeps"
              setup={"A $100\\times100$ image matrix has $\\sum\\sigma_i^2=5000$ overall, and the top $10$ singular values contribute $4750$ of that. Evaluate the rank-$10$ approximation's quality and storage savings."}
              steps={[
                { text: "Fraction of energy kept: $4750/5000=0.95$, i.e. $95\\%$.", why: "$\\|A\\|_F^2=\\sum\\sigma_i^2$, so this ratio measures retained information." },
                { text: "Relative approximation error $=\\sqrt{1-0.95}=\\sqrt{0.05}\\approx22\\%$.", why: "Frobenius error uses the dropped singular values' energy." },
                { text: "Storage for rank-$10$: $100(10)+10+10(100)=2010$ numbers, versus $10{,}000$ for the full matrix — about $20\\%$ of the original size.", why: "Only the top $10$ triplets are kept." },
              ]}
              result={"Rank-$10$ approximation keeps $95\\%$ of the image energy using only about $20\\%$ of the original storage."}
              check={"$22\\%$ relative error is consistent with dropping $5\\%$ of squared energy ($\\sqrt{0.05}\\approx0.224$)."}
            />
          
            <WorkedExample
              number={5}
              title="Minimum-norm solution from the pseudoinverse"
              setup={"Solve $Ax=b$ with minimum norm for $A=\\begin{pmatrix}1&1\\end{pmatrix}$ and $b=2$."}
              steps={[
                { text: "$A^+=A^T(AA^T)^{-1}=\\tfrac12(1,1)^T$ because A has full row rank.", why: "This is the full-row-rank pseudoinverse formula." },
                { text: "$x^+=A^+b=(1,1)^T$.", why: "The pseudoinverse selects one solution among infinitely many." },
                { text: "Every exact solution can be written $x=(1,1)^T+t(1,-1)^T$.", why: "$(1,-1)^T$ spans the null space of A." },
                { text: "$\\|x\\|_2^2=2+2t^2$, minimized at $t=0$.", why: "The pseudoinverse solution is orthogonal to the null-space direction." },
              ]}
              result={"$x^+=(1,1)^T$ is the unique minimum-norm exact solution."}
              check={"$Ax^+=2=b$ and any nonzero null-space component increases the norm."}
            />
          </section>

          <LaMcqSection
            id="quiz-la-s-apps"
            badge="Quiz 6.3"
            title="SVD Applications"
            scoreId="score-la-s-apps"
            section="la-s-apps"
            questions={[
              {
                prompt: "The best rank-k approximation of A is obtained by:",
                options: ["Keeping the top k singular values/vectors", "Keeping the smallest singular values", "Setting all singular values to 1"],
                answer: "A",
                explanation: "This is the content of the Eckart–Young theorem.",
              },
              {
                prompt: "SVD can be used to compute:",
                options: ["The Moore–Penrose pseudoinverse", "Only eigenvalues of A", "Only the determinant"],
                answer: "A",
                explanation: "The pseudoinverse is formed by inverting the nonzero singular values.",
              },
              {
                prompt: "A common use of truncated SVD is:",
                options: ["Image / data compression", "Only solving Ax=b when A is square", "Computing the trace"],
                answer: "A",
                explanation: "Keeping the largest singular components gives a compact approximation.",
              },
              {
                prompt: "Principal Component Analysis (PCA) is closely related to SVD because:",
                options: ["The right singular vectors of the centered data matrix are the principal directions", "PCA requires computing a matrix inverse only", "PCA and SVD apply only to square matrices"],
                answer: "A",
                explanation: "PCA's principal components are eigenvectors of the covariance matrix, which SVD of the centered data matrix directly provides.",
              },
              {
                prompt: "SVD is widely used in principal component analysis because it identifies:",
                options: ["Only exact duplicates", "Only scalar means", "Dominant orthogonal directions in the data"],
                answer: "C",
                explanation: "Large singular directions capture the strongest variance/energy patterns.",
              },
              {
                prompt: "In image compression, truncated SVD keeps:",
                options: ["The largest singular values and associated singular vectors", "Only zero singular values", "Every pixel unchanged"],
                answer: "A",
                explanation: "Dominant singular components preserve most structure with fewer parameters.",
              },
              {
                prompt: "In noise reduction, small singular components are often discarded because they can represent:",
                options: ["Only exact signal components", "Weak/noisy directions", "The matrix dimensions"],
                answer: "B",
                explanation: "Small-energy directions are often more susceptible to noise.",
              },
              {
                prompt: "SVD can solve least-squares problems through the:",
                options: ["Determinant alone", "Trace alone", "Moore–Penrose pseudoinverse"],
                answer: "C",
                explanation: "The pseudoinverse is naturally built by reciprocating nonzero singular values.",
              },
              {
                prompt: "SVD is useful for rank estimation because:",
                options: ["Small or zero singular values reveal nearly dependent directions", "Rank equals the matrix trace", "All singular values are identical"],
                answer: "A",
                explanation: "The number of significant singular values indicates effective dimensionality.",
              },
              {
                prompt: "Latent semantic analysis applies truncated SVD to:",
                options: ["Only scalar time series", "Term-document matrices", "Only identity matrices"],
                answer: "B",
                explanation: "Low-rank structure reveals latent relationships among terms and documents.",
              },
              {
                prompt: "Recommendation systems can use low-rank SVD-like models to capture:",
                options: ["Only exact row labels", "Only matrix dimensions", "Latent user-item factors"],
                answer: "C",
                explanation: "Low-rank factors represent hidden preference patterns.",
              },
              {
                prompt: "In control and inverse problems, tiny singular values can cause:",
                options: ["Noise amplification when inverted", "Guaranteed stability", "No numerical effect"],
                answer: "A",
                explanation: "Reciprocating a tiny singular value creates a large gain.",
              },
              {
                prompt: "Regularization methods often reduce the effect of:",
                options: ["Only the largest singular value", "Small singular values", "Matrix dimensions"],
                answer: "B",
                explanation: "Damping unstable small-singular-value directions improves robustness.",
              },
              {
                prompt: "SVD can be applied to rectangular matrices, which makes it especially useful for:",
                options: ["Only square systems", "Only diagonal matrices", "Data matrices with different numbers of observations and features"],
                answer: "C",
                explanation: "Most real data matrices are rectangular.",
              },
              {
                prompt: "The leading left singular vectors of a data matrix describe dominant directions in the:",
                options: ["Observation/output space", "Null space of every matrix", "Scalar field only"],
                answer: "A",
                explanation: "Left singular vectors live in the row-count/output dimension.",
              },
              {
                prompt: "The leading right singular vectors describe dominant directions in the:",
                options: ["Only output space", "Feature/input space", "Set of singular values"],
                answer: "B",
                explanation: "Right singular vectors live in the column-count/input dimension.",
              },
              {
                prompt: "Keeping $k$ singular components reduces a matrix representation to effective rank:",
                options: ["At least the original full rank", "Always zero", "At most $k$"],
                answer: "C",
                explanation: "The truncated sum contains at most $k$ rank-one terms.",
              },
              {
                prompt: "SVD-based compression trades reconstruction accuracy for:",
                options: ["Lower storage and computation", "Higher exact rank", "More singular vectors than the original"],
                answer: "A",
                explanation: "Using fewer components reduces representation cost.",
              },
              {
                prompt: "In system identification, singular values can help detect:",
                options: ["Only matrix labels", "Weakly observable or weakly excited directions", "Only integer solutions"],
                answer: "B",
                explanation: "Small singular directions indicate weak information or gain.",
              },
              {
                prompt: "A key advantage of SVD over eigendecomposition is that SVD:",
                options: ["Requires every matrix to be symmetric", "Uses only complex numbers", "Exists for every matrix, including rectangular matrices"],
                answer: "C",
                explanation: "SVD has no square or diagonalizability requirement.",
              },
            ]}
          />

          <Divider />

          <section className="section" id="la-s-lowrank">
            <div className="sec-badge">Section 6.4</div>
            <h2 className="sec-title">Low-rank approximation & pseudoinverse</h2>
            <TheoryBox title="Eckart–Young and the pseudoinverse">
              <p>
                {"The truncated SVD gives the optimal low-rank approximation. The pseudoinverse $A^+$ is obtained by taking the reciprocal of every nonzero singular value and transposing the factors appropriately. It yields the minimum-norm least-squares solution."}
              </p>
            </TheoryBox>
            <TheoremBox title="Eckart–Young–Mirsky theorem">
              <p>
                {"If $A_k=\\sum_{i=1}^{k}\\sigma_i u_iv_i^T$, then among all matrices B with $\\operatorname{rank}(B)\\le k$, $A_k$ minimizes both the spectral and Frobenius errors. Precisely, $\\|A-A_k\\|_2=\\sigma_{k+1}$ and $\\|A-A_k\\|_F=\\sqrt{\\sum_{i>k}\\sigma_i^2}$."}
              </p>
            </TheoremBox>
            <TheoryBox title="The four Moore–Penrose conditions">
              <p>
                {"The pseudoinverse is the unique matrix $A^+$ satisfying $AA^+A=A$, $A^+AA^+=A^+$, $(AA^+)^T=AA^+$, and $(A^+A)^T=A^+A$. From the SVD, $A^+=V\\Sigma^+U^T$, where every nonzero singular value is reciprocated and every zero remains zero."}
              </p>
            </TheoryBox>
            <PracticalTheory title="Minimum-norm least squares and useful special cases">
              <p>
                {"For every b, $x^+=A^+b$ is a least-squares solution with minimum Euclidean norm. If A has full column rank, $A^+=(A^TA)^{-1}A^T$. If A has full row rank, $A^+=A^T(AA^T)^{-1}$. The SVD formula remains valid even when A is rank deficient."}
              </p>
            </PracticalTheory>
          </section>

          <LaMcqSection
            id="quiz-la-s-lowrank"
            badge="Quiz 6.4"
            title="Low-rank & Pseudoinverse"
            scoreId="score-la-s-lowrank"
            section="la-s-lowrank"
            questions={[
              {
                prompt: "The number of nonzero singular values equals:",
                options: ["The rank of A", "The number of rows always", "The condition number"],
                answer: "A",
                explanation: "Rank is defined as the number of nonzero singular values.",
              },
              {
                prompt: "In the pseudoinverse, zero singular values are:",
                options: ["Left as zero (not inverted)", "Inverted to infinity", "Set to 1"],
                answer: "A",
                explanation: "Only nonzero singular values are inverted.",
              },
              {
                prompt: "Condition number $\\kappa_2(A)$ is:",
                options: ["$\\sigma_{\\max}/\\sigma_{\\min}$", "$\\sigma_{\\max}+\\sigma_{\\min}$", "$\\det(A)$"],
                answer: "A",
                explanation: "It is the ratio of the largest to the smallest singular value.",
              },
              {
                prompt: "The best rank-$k$ approximation in the 2-norm is obtained by:",
                options: ["Keeping the $k$ largest singular values", "Keeping the $k$ smallest singular values", "Replacing all singular values by one"],
                answer: "A",
                explanation: "The Eckart–Young–Mirsky theorem establishes optimal truncated SVD.",
              },
              {
                prompt: "For truncated SVD $A_k$, the 2-norm error $\\|A-A_k\\|_2$ equals:",
                options: ["$\\sigma_1$", "$\\sigma_{k+1}$", "$0$ always"],
                answer: "B",
                explanation: "The first omitted singular value controls the spectral-norm error.",
              },
              {
                prompt: "The Frobenius error of the best rank-$k$ approximation satisfies:",
                options: ["$\\sum_{i\\le k}\\sigma_i^2$", "$\\sigma_1^2$ only", "$\\|A-A_k\\|_F^2=\\sum_{i>k}\\sigma_i^2$"],
                answer: "C",
                explanation: "The discarded singular energies add in squares.",
              },
              {
                prompt: "The Moore–Penrose pseudoinverse of $A=U\\Sigma V^T$ is:",
                options: ["$A^+=V\\Sigma^+U^T$", "$U\\Sigma^+V^T$", "$A^T$ always"],
                answer: "A",
                explanation: "The orthogonal factors reverse order and nonzero singular values are reciprocated.",
              },
              {
                prompt: "To form $\\Sigma^+$, each nonzero singular value $\\sigma_i$ is replaced by:",
                options: ["$-\\sigma_i$", "$1/\\sigma_i$", "$\\sigma_i^2$"],
                answer: "B",
                explanation: "The pseudoinverse inverts only nonzero singular directions.",
              },
              {
                prompt: "A zero singular value in $\\Sigma$ becomes what in $\\Sigma^+$?",
                options: ["Infinity", "$1$", "$0$"],
                answer: "C",
                explanation: "Zero directions are not inverted.",
              },
              {
                prompt: "If $A$ is invertible, its pseudoinverse equals:",
                options: ["$A^{-1}$", "$A^T$ always", "$0$"],
                answer: "A",
                explanation: "For full-rank square matrices, Moore–Penrose inversion reduces to ordinary inversion.",
              },
              {
                prompt: "For an underdetermined consistent system, $A^+b$ gives the solution with:",
                options: ["Maximum Euclidean norm", "Minimum Euclidean norm", "Maximum residual"],
                answer: "B",
                explanation: "The pseudoinverse selects the minimum-norm solution among all exact solutions.",
              },
              {
                prompt: "For an inconsistent system, $A^+b$ gives:",
                options: ["No vector", "Only an eigenvector", "A least-squares solution"],
                answer: "C",
                explanation: "The pseudoinverse minimizes the residual norm.",
              },
              {
                prompt: "The pseudoinverse exists for:",
                options: ["Every matrix", "Only invertible square matrices", "Only diagonal matrices"],
                answer: "A",
                explanation: "Moore–Penrose pseudoinverses are defined for arbitrary rectangular and rank-deficient matrices.",
              },
              {
                prompt: "One Moore–Penrose condition is:",
                options: ["$AA^+=0$", "$AA^+A=A$", "$A^+=A$ for every matrix"],
                answer: "B",
                explanation: "The pseudoinverse acts as a generalized inverse on the range of $A$.",
              },
              {
                prompt: "Another Moore–Penrose condition is:",
                options: ["$A^+A=0$", "$A^+=-A$", "$A^+AA^+=A^+$"],
                answer: "C",
                explanation: "This is the companion generalized-inverse identity.",
              },
              {
                prompt: "The matrix $AA^+$ is the orthogonal projector onto:",
                options: ["$\\operatorname{Col}(A)$", "$\\operatorname{Nul}(A)$", "$\\operatorname{Row}(A)$ only"],
                answer: "A",
                explanation: "It projects vectors in the codomain onto the column space.",
              },
              {
                prompt: "The matrix $A^+A$ is the orthogonal projector onto:",
                options: ["$\\operatorname{Nul}(A^T)$", "$\\operatorname{Row}(A)$", "$\\operatorname{Col}(A)$"],
                answer: "B",
                explanation: "It projects input-space vectors onto the row space.",
              },
              {
                prompt: "A rank-$k$ approximation constructed from SVD is a sum of:",
                options: ["One full-rank matrix only", "$k$ zero matrices", "$k$ rank-one matrices"],
                answer: "C",
                explanation: "$A_k=\\sum_{i=1}^k\\sigma_i u_i v_i^T$.",
              },
              {
                prompt: "If $k$ equals the rank of $A$, then the compact truncated reconstruction gives:",
                options: ["$A_k=A$", "$A_k=0$", "Only an approximation with nonzero error"],
                answer: "A",
                explanation: "All nonzero singular components have been retained.",
              },
              {
                prompt: "Discarding a singular component removes the rank-one term:",
                options: ["$u_i+v_i$", "$\\sigma_i u_i v_i^T$", "$\\sigma_i I$"],
                answer: "B",
                explanation: "Each SVD component is a singular value times an outer product of singular vectors.",
              },
            ]}
          />

          <Divider />
          <LaCertificateBoost topic="svd" part={2} />

          <Divider />
          <section className="section" id="summary">
            <div className="sec-badge">Reference</div>
            <h2 className="sec-title">Module complete</h2>
            <p>
              {"SVD reveals the fundamental geometry of any matrix and supplies the optimal tools for low-rank approximation and the pseudoinverse."}
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
    <StudyGuideShell guideClass="partial-derivatives-guide" title="Singular Value Decomposition (Part 1)">
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">SVD · Part 1</div></div>
        <a className="sb-link" href="#la-s-intro">Definition & dimensions</a>
        <a className="sb-link" href="#la-s-proc1">Method</a>
        <a className="sb-link" href="#la-s-ex-p1">Examples</a>
        <a className="sb-link" href="#quiz-la-s-intro">Quiz</a>
        <a className="sb-link" href="#la-s-geom">Geometry</a>
        <a className="sb-link" href="#quiz-la-s-geom">Quiz</a>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra · Part 1 of 2</div>
          <h1 className="ch-title">Singular Value Decomposition</h1>
          <p className="ch-sub">Full and compact SVD, singular vectors, subspaces, norms, and geometry</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="la-s-intro">
          <div className="sec-badge">Section 6.1</div>
          <h2 className="sec-title">Definition of the SVD</h2>
          <p>
            {"Every $m\\times n$ matrix A (real or complex) admits a factorization $A = U\\Sigma V^T$ where U and V are orthogonal (or unitary) and $\\Sigma$ is diagonal with nonnegative entries — the singular values."}
          </p>
          <TheoryBox title="A = UΣVᵀ">
            <p>
              {"The diagonal entries of $\\Sigma$ are the singular values $\\sigma_1 \\ge \\sigma_2 \\ge \\cdots \\ge 0$. The columns of V are the right singular vectors; the columns of U are the left singular vectors. Singular values are the square roots of the eigenvalues of $A^TA$ (or $AA^T$)."}
            </p>
          </TheoryBox>
          <TheoryBox title="Full SVD versus compact SVD">
            <p>
              {"For $A\\in\\mathbb{R}^{m\\times n}$, the full SVD uses $U\\in\\mathbb{R}^{m\\times m}$, $\\Sigma\\in\\mathbb{R}^{m\\times n}$, and $V\\in\\mathbb{R}^{n\\times n}$, with U and V orthogonal. If $\\operatorname{rank}(A)=r$, the compact SVD keeps only the nonzero singular triplets: $A=U_r\\Sigma_rV_r^T$, where $U_r$ is $m\\times r$, $\\Sigma_r$ is $r\\times r$, and $V_r$ is $n\\times r$."}
            </p>
          </TheoryBox>
          <TheoryBox title="SVD reveals the four fundamental subspaces">
            <p>
              {"If $\\sigma_1\\ge\\cdots\\ge\\sigma_r>0$ are the nonzero singular values, then $u_1,\\ldots,u_r$ form an orthonormal basis for $\\operatorname{Col}(A)$ and $v_1,\\ldots,v_r$ form an orthonormal basis for $\\operatorname{Row}(A)$. The remaining right singular vectors span $\\operatorname{Nul}(A)$, and the remaining left singular vectors span $\\operatorname{Nul}(A^T)$."}
            </p>
          </TheoryBox>
          <TheoremBox title="Existence">
            <p>
              {"Unlike the eigenvalue decomposition, the SVD exists for every matrix, square or rectangular, singular or full-rank."}
            </p>
          </TheoremBox>
          <RealLifeUse>{"Netflix and Spotify recommendation engines run SVD on a giant user-by-item ratings matrix to compress millions of preferences into a handful of underlying 'taste' dimensions."}</RealLifeUse>
        </section>

        <section className="section" id="la-s-proc1">
          <div className="sec-badge">Procedure</div>
          <h2 className="sec-title">How to find singular values</h2>
          <ProcedureBox
            title="Computing singular values (small cases)"
            steps={[
              { text: "Form $A^TA$ (or $AA^T$, whichever is smaller).", why: "Singular values are square roots of its eigenvalues." },
              { text: "Find the eigenvalues of that symmetric positive-semidefinite matrix.", why: "They are real and nonnegative." },
              { text: "Take square roots to obtain the singular values.", why: "By definition $\\sigma_i = \\sqrt{\\lambda_i(A^TA)}$." },
              { text: "Choose orthonormal eigenvectors $v_i$ of $A^TA$; these are the right singular vectors.", why: "The V factor diagonalizes $A^TA$." },
              { text: "For each nonzero $\\sigma_i$, compute $u_i=Av_i/\\sigma_i$.", why: "These unit vectors form the corresponding left singular directions." },
              { text: "For a full SVD, complete the nonzero singular vectors to orthonormal bases of the domain and codomain.", why: "Zero-singular-value directions supply the null-space and left-null-space components." }
            ]}
          />
        </section>

        <section className="section" id="la-s-ex-p1">
          <div className="sec-badge">Large examples</div>
          <h2 className="sec-title">Five detailed worked examples</h2>

          <WorkedExample
            number={1}
            title="Singular values of a diagonal matrix"
            setup={"Find the SVD of $A=\\begin{pmatrix}4&0\\\\0&-3\\end{pmatrix}$."}
            steps={[
              { text: "$A^TA=\\begin{pmatrix}16&0\\\\0&9\\end{pmatrix}$, already diagonal, so its eigenvalues are $16,9$.", why: "Needed to find singular values." },
              { text: "Singular values: $\\sigma_1=\\sqrt{16}=4$, $\\sigma_2=\\sqrt9=3$.", why: "Singular values are square roots of $A^TA$'s eigenvalues." },
              { text: "$V=I$ (eigenvectors already standard basis); $U$'s columns are $Av_i/\\sigma_i=(1,0),(0,-1)$.", why: "Definition of the left singular vectors." },
              { text: "Check: $U\\Sigma V^T=\\begin{pmatrix}1&0\\\\0&-1\\end{pmatrix}\\begin{pmatrix}4&0\\\\0&3\\end{pmatrix}=A$.", why: "Reconstructs the original matrix." },
            ]}
            result={"$\\sigma_1=4,\\ \\sigma_2=3$; $U=\\operatorname{diag}(1,-1)$, $V=I$."}
            check={"Multiplying $U\\Sigma V^T$ back out reproduces $A$ exactly."}
          />
          <WorkedExample
            number={2}
            title="Singular values from A^TA for a rank-deficient matrix"
            setup={"Find the singular values of $A=\\begin{pmatrix}3&0\\\\4&0\\end{pmatrix}$."}
            steps={[
              { text: "$A^TA=\\begin{pmatrix}25&0\\\\0&0\\end{pmatrix}$.", why: "$(3)(3)+(4)(4)=25$; column 2 of $A$ is zero." },
              { text: "Singular values: $\\sigma_1=5$, $\\sigma_2=0$.", why: "Square roots of the eigenvalues $25,0$." },
              { text: "Since $\\sigma_2=0$, $\\operatorname{rank}(A)=1$.", why: "Only one nonzero singular value." },
            ]}
            result={"$\\sigma_1=5,\\ \\sigma_2=0$; $\\operatorname{rank}(A)=1$."}
            check={"$A$'s second column is zero, consistent with a zero singular value and rank $1$."}
          />
          <WorkedExample
            number={3}
            title="Full SVD of a rank-2 matrix"
            setup={"Find the SVD of $A=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$."}
            steps={[
              { text: "$A^TA=\\begin{pmatrix}1&1\\\\1&2\\end{pmatrix}$; characteristic polynomial $\\lambda^2-3\\lambda+1=0$.", why: "Trace $=3$, determinant $=1$." },
              { text: "$\\sigma_1=\\sqrt{\\tfrac{3+\\sqrt5}{2}}\\approx1.618$, $\\sigma_2=\\sqrt{\\tfrac{3-\\sqrt5}{2}}\\approx0.618$.", why: "Square roots of the two eigenvalues." },
              { text: "$U$'s columns come from $u_i=Av_i/\\sigma_i$, using the eigenvectors of $A^TA$ as $v_i$.", why: "Definition of left singular vectors." },
              { text: "Check: $\\sigma_1\\sigma_2=\\sqrt{\\lambda_1\\lambda_2}=1=|\\det A|$.", why: "Product of singular values equals $|\\det A|$ for a square matrix." },
            ]}
            result={"$\\sigma_1\\approx1.618,\\ \\sigma_2\\approx0.618$, with $\\sigma_1\\sigma_2=1=|\\det A|$."}
            check={"$\\det A=1(1)-1(0)=1$, matching $\\sigma_1\\sigma_2$."}
          />
          <WorkedExample
            number={4}
            title="Rank-1 approximation via truncated SVD"
            setup={"Given $A=\\begin{pmatrix}2&0\\\\0&1\\end{pmatrix}$ (already in SVD form), find the best rank-1 approximation."}
            steps={[
              { text: "$\\sigma_1=2$, $\\sigma_2=1$, with $U=V=I$.", why: "Diagonal entries are the singular values here." },
              { text: "Eckart–Young: keep only $\\sigma_1$ with its vectors for a rank-1 fit.", why: "The theorem's statement." },
              { text: "$A_1=\\sigma_1u_1v_1^T=\\begin{pmatrix}2&0\\\\0&0\\end{pmatrix}$.", why: "Outer product scaled by the singular value." },
              { text: "Approximation error $\\|A-A_1\\|_F=\\sigma_2=1$.", why: "The Frobenius-norm error equals the largest dropped singular value." },
            ]}
            result={"$A_1=\\begin{pmatrix}2&0\\\\0&0\\end{pmatrix}$, with approximation error $1$."}
            check={"Direct subtraction confirms $\\|A-A_1\\|_F=1=\\sigma_2$."}
          />
        
          <WorkedExample
            number={5}
            title="Read all four fundamental subspaces from an SVD"
            setup={"Let $A=\\begin{pmatrix}3&0&0\\\\0&2&0\\end{pmatrix}$. Use its singular vectors to identify the four fundamental subspaces."}
            steps={[
              { text: "$\\sigma_1=3$, $\\sigma_2=2$, so $r=2$. The nonzero left singular vectors are $e_1,e_2$ in $\\mathbb{R}^2$.", why: "Nonzero left singular vectors span the column space." },
              { text: "The corresponding right singular vectors are $e_1,e_2$ in $\\mathbb{R}^3$.", why: "They span the row space." },
              { text: "The remaining right singular vector $e_3$ corresponds to singular value 0, so $\\operatorname{Nul}(A)=\\operatorname{span}(e_3)$.", why: "$Ae_3=0$." },
              { text: "Because rank(A)=2 equals the number of rows, $\\operatorname{Nul}(A^T)=\\{0\\}$.", why: "The left-nullity is $m-r=2-2=0$." },
            ]}
            result={"$\\operatorname{Col}(A)=\\mathbb{R}^2$, $\\operatorname{Row}(A)=\\operatorname{span}(e_1,e_2)$, $\\operatorname{Nul}(A)=\\operatorname{span}(e_3)$, and $\\operatorname{Nul}(A^T)=\\{0\\}$."}
            check={"Dimensions are 2, 2, 1, and 0, matching rank-nullity in the domain and codomain."}
          />
        </section>

        <LaMcqSection
          id="quiz-la-s-intro"
          badge="Quiz 6.1"
          title="SVD basics"
          scoreId="score-la-s-intro"
          section="la-s-intro"
          questions={[
            {
              prompt: "In $A=U\\Sigma V^T$, the matrix $\\Sigma$ is:",
              options: ["Diagonal with nonnegative entries", "Always the identity", "Skew-symmetric"],
              answer: "A",
              explanation: "Singular values sit on the diagonal and are ≥ 0.",
            },
            {
              prompt: "Singular values are the square roots of the eigenvalues of:",
              options: ["$A^TA$", "$A$ itself", "$A^{-1}$"],
              answer: "A",
              explanation: "This is the standard computational definition.",
            },
            {
              prompt: "SVD exists for:",
              options: ["Every m×n matrix", "Only square invertible matrices", "Only symmetric matrices"],
              answer: "A",
              explanation: "Unlike eigendecomposition, SVD is universal.",
            },
            {
              prompt: "The columns of $V$ in $A=U\\Sigma V^T$ are:",
              options: ["Eigenvectors of $A^TA$", "Eigenvectors of $A$", "The rows of $\\Sigma$"],
              answer: "A",
              explanation: "$V$ diagonalizes $A^TA=V\\Sigma^2V^T$.",
            },
            {
              prompt: "Every real $m\\times n$ matrix has:",
              options: ["A singular value decomposition", "An eigendecomposition with $n$ real eigenvalues", "An inverse"],
              answer: "A",
              explanation: "SVD exists for every real rectangular or square matrix.",
            },
            {
              prompt: "In $A=U\\Sigma V^T$, columns of $U$ are called:",
              options: ["Right singular vectors", "Left singular vectors", "Pivot vectors"],
              answer: "B",
              explanation: "Left singular vectors live in the output space.",
            },
            {
              prompt: "In $A=U\\Sigma V^T$, columns of $V$ are called:",
              options: ["Left singular vectors", "Row pivots", "Right singular vectors"],
              answer: "C",
              explanation: "Right singular vectors live in the input space.",
            },
            {
              prompt: "Singular values are conventionally ordered:",
              options: ["$\\sigma_1\\ge\\sigma_2\\ge\\cdots\\ge0$", "$\\sigma_1<\\sigma_2<\\cdots<0$", "In arbitrary signed order only"],
              answer: "A",
              explanation: "Singular values are nonnegative and are usually sorted from largest to smallest.",
            },
            {
              prompt: "The squared singular values are eigenvalues of:",
              options: ["$A+A^T$", "$A^TA$", "$A-A^T$"],
              answer: "B",
              explanation: "$A^TA v_i=\\sigma_i^2v_i$.",
            },
            {
              prompt: "Nonzero singular values of $A$ and $A^T$ are:",
              options: ["Reciprocals", "Unrelated", "The same"],
              answer: "C",
              explanation: "Transposition swaps left and right singular vectors but preserves singular values.",
            },
            {
              prompt: "The rank of $A$ equals:",
              options: ["The number of positive singular values", "The number of zero singular values", "Always the number of columns"],
              answer: "A",
              explanation: "Each nonzero singular value corresponds to an independent mapped direction.",
            },
            {
              prompt: "If $A=0$, all of its singular values are:",
              options: ["$1$", "$0$", "Undefined"],
              answer: "B",
              explanation: "$A^TA=0$, so every eigenvalue and singular value is zero.",
            },
            {
              prompt: "For the identity matrix $I_n$, all singular values are:",
              options: ["$0$", "$n$", "$1$"],
              answer: "C",
              explanation: "$I_n^TI_n=I_n$.",
            },
            {
              prompt: "The spectral norm $\\|A\\|_2$ equals:",
              options: ["$\\sigma_1$", "The smallest singular value always", "$\\sum_i\\sigma_i$"],
              answer: "A",
              explanation: "The largest singular value is the maximum stretch factor.",
            },
            {
              prompt: "The Frobenius norm satisfies:",
              options: ["$\\|A\\|_F=\\sigma_1$ always", "$\\|A\\|_F^2=\\sum_i\\sigma_i^2$", "$\\|A\\|_F^2=\\prod_i\\sigma_i$"],
              answer: "B",
              explanation: "The sum of squared singular values equals the sum of squared matrix entries.",
            },
            {
              prompt: "If $A$ is square and invertible, its smallest singular value is:",
              options: ["$0$", "Negative", "Positive"],
              answer: "C",
              explanation: "Invertibility means full rank, so no singular value is zero.",
            },
            {
              prompt: "For a rank-one nonzero matrix, the number of nonzero singular values is:",
              options: ["$1$", "$0$", "Equal to both dimensions"],
              answer: "A",
              explanation: "Rank equals the number of positive singular values.",
            },
            {
              prompt: "The compact SVD retains:",
              options: ["Only zero singular values", "Only singular vectors associated with nonzero singular values", "Only the largest matrix entry"],
              answer: "B",
              explanation: "Compact SVD removes redundant zero-singular-value directions.",
            },
            {
              prompt: "In a full SVD of an $m\\times n$ matrix, $U$ is:",
              options: ["$n\\times n$ always", "Triangular", "$m\\times m$ orthogonal"],
              answer: "C",
              explanation: "Full $U$ provides an orthonormal basis of the output space.",
            },
            {
              prompt: "In a full SVD of an $m\\times n$ matrix, $V$ is:",
              options: ["$n\\times n$ orthogonal", "$m\\times m$ always", "Diagonal"],
              answer: "A",
              explanation: "Full $V$ provides an orthonormal basis of the input space.",
            },
          ]}
        />

        <Divider />

        <section className="section" id="la-s-geom">
          <div className="sec-badge">Section 6.2</div>
          <h2 className="sec-title">Geometry of the SVD</h2>
          <TheoryBox title="Stretching the unit sphere">
            <p>
              {"The right singular vectors tell you which directions in the domain are stretched the most. The corresponding singular values are the stretch factors. The left singular vectors give the directions of those stretched axes in the codomain."}
            </p>
          </TheoryBox>
          <TheoremBox title="Matrix 2-norm, Frobenius norm, and conditioning">
            <p>
              {"The induced matrix 2-norm is the maximum stretch, so $\\|A\\|_2=\\sigma_1$. The Frobenius norm satisfies $\\|A\\|_F^2=\\sum_i\\sigma_i^2$. For a nonsingular square matrix, $\\kappa_2(A)=\\|A\\|_2\\|A^{-1}\\|_2=\\sigma_{\\max}/\\sigma_{\\min}$. A zero smallest singular value means the matrix is singular and its 2-norm condition number is infinite."}
            </p>
          </TheoremBox>
        </section>

        <LaMcqSection
          id="quiz-la-s-geom"
          badge="Quiz 6.2"
          title="Geometry"
          scoreId="score-la-s-geom"
          section="la-s-geom"
          questions={[
            {
              prompt: "The largest singular value measures:",
              options: ["The maximum stretch of the unit sphere", "The determinant", "The trace"],
              answer: "A",
              explanation: "It is the operator 2-norm of A.",
            },
            {
              prompt: "Right singular vectors are eigenvectors of:",
              options: ["$A^TA$", "$AA^T$", "$A+A^T$"],
              answer: "A",
              explanation: "They come from the domain side.",
            },
            {
              prompt: "Left singular vectors are eigenvectors of:",
              options: ["$AA^T$", "$A^TA$", "$A^{-1}$"],
              answer: "A",
              explanation: "$U$ diagonalizes $AA^T=U\\Sigma^2U^T$.",
            },
            {
              prompt: "If all singular values are positive, a square matrix A is:",
              options: ["Invertible", "Singular", "Nilpotent"],
              answer: "A",
              explanation: "Full set of positive singular values means full rank.",
            },
            {
              prompt: "Geometrically, SVD decomposes a linear map into:",
              options: ["Only a translation", "A rotation/reflection, axis scaling, then another rotation/reflection", "Only row swaps"],
              answer: "B",
              explanation: "Orthogonal factors change coordinates without distorting lengths; $\\Sigma$ scales orthogonal axes.",
            },
            {
              prompt: "A right singular vector $v_i$ is mapped by $A$ to:",
              options: ["$u_i/\\sigma_i$", "$0$ for every $i$", "$\\sigma_i u_i$"],
              answer: "C",
              explanation: "The defining relation is $Av_i=\\sigma_i u_i$.",
            },
            {
              prompt: "If $\\sigma_i=0$, the corresponding right singular vector lies in:",
              options: ["$\\operatorname{Nul}(A)$", "$\\operatorname{Col}(A)$", "$\\operatorname{Row}(A^T)$"],
              answer: "A",
              explanation: "$Av_i=0u_i=0$.",
            },
            {
              prompt: "Right singular vectors for positive singular values span the:",
              options: ["$\\operatorname{Nul}(A^T)$", "$\\operatorname{Row}(A)$", "Codomain only"],
              answer: "B",
              explanation: "They form an orthonormal basis for the row space.",
            },
            {
              prompt: "Left singular vectors for positive singular values span the:",
              options: ["$\\operatorname{Nul}(A)$", "Input space only", "$\\operatorname{Col}(A)$"],
              answer: "C",
              explanation: "Nonzero left singular directions are the output directions reached by $A$.",
            },
            {
              prompt: "Right singular vectors corresponding to zero singular values span:",
              options: ["$\\operatorname{Nul}(A)$", "$\\operatorname{Col}(A)$", "$\\operatorname{Nul}(A^T)$"],
              answer: "A",
              explanation: "They are exactly the input directions annihilated by $A$.",
            },
            {
              prompt: "Extra left singular vectors corresponding to zero singular values span:",
              options: ["$\\operatorname{Nul}(A)$", "$\\operatorname{Nul}(A^T)$", "$\\operatorname{Row}(A)$"],
              answer: "B",
              explanation: "They complete the column-space basis to an orthonormal basis of the codomain.",
            },
            {
              prompt: "The image of the unit sphere under $A$ is an ellipsoid whose semiaxis lengths are:",
              options: ["The eigenvalues of $A$ even when rectangular", "All equal to one", "The singular values"],
              answer: "C",
              explanation: "SVD maps orthogonal input axes to orthogonal output axes scaled by $\\sigma_i$.",
            },
            {
              prompt: "The largest singular value gives the:",
              options: ["Maximum stretch factor", "Minimum stretch factor always", "Matrix trace"],
              answer: "A",
              explanation: "$\\sigma_1=\\max_{\\|x\\|=1}\\|Ax\\|$.",
            },
            {
              prompt: "For invertible square $A$, the smallest singular value gives the:",
              options: ["Maximum stretch factor", "Minimum stretch factor over unit vectors", "Trace"],
              answer: "B",
              explanation: "$\\sigma_{\\min}=\\min_{\\|x\\|=1}\\|Ax\\|$.",
            },
            {
              prompt: "Orthogonal matrices have singular values:",
              options: ["All equal to $0$", "Equal to their diagonal entries only", "All equal to $1$"],
              answer: "C",
              explanation: "$Q^TQ=I$.",
            },
            {
              prompt: "A very small nonzero singular value indicates a direction that is:",
              options: ["Strongly compressed", "Strongly expanded", "Unaffected"],
              answer: "A",
              explanation: "The corresponding input direction is scaled by a small factor.",
            },
            {
              prompt: "If all singular values of a square matrix are equal to the same positive $c$, the transformation is:",
              options: ["Necessarily the zero map", "A uniform scaling by $c$ combined with an orthogonal transformation", "Necessarily a translation"],
              answer: "B",
              explanation: "Equal axis stretches mean isotropic scaling up to orthogonal coordinate changes.",
            },
            {
              prompt: "The condition number $\\kappa_2(A)$ for invertible $A$ compares:",
              options: ["First and last matrix entries", "Rows and columns counts only", "Largest and smallest singular values"],
              answer: "C",
              explanation: "$\\kappa_2=\\sigma_{\\max}/\\sigma_{\\min}$.",
            },
            {
              prompt: "A large 2-norm condition number signals:",
              options: ["Sensitivity to perturbations", "Perfect numerical conditioning", "All singular values equal"],
              answer: "A",
              explanation: "A wide ratio between largest and smallest stretches amplifies relative errors.",
            },
            {
              prompt: "SVD exposes all four fundamental subspaces through:",
              options: ["Only the diagonal of $A$", "Singular vectors associated with positive and zero singular values", "Only row swaps"],
              answer: "B",
              explanation: "Right singular vectors split row/null spaces; left singular vectors split column/left-null spaces.",
            },
          ]}
        />

        <Divider />
        <section className="section" id="summary1">
          <div className="sec-badge">Reference</div>
          <h2 className="sec-title">Continue</h2>
          <p>
            {"The SVD factors every matrix into orthogonal maps and a simple diagonal stretch. Part 2 develops the major applications."}
          </p>
          <p>
            Use the gold button: <strong>Next: Part 2 — Applications & Low-rank Approximation</strong>.
          </p>
        </section>
      </main>
    </StudyGuideShell>
  );
}

export default SvdGuide;
