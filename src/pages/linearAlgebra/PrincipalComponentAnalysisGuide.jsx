import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_PCA_QUIZ } from "../../data/laQuizzes";

export default function PrincipalComponentAnalysisGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;

  return (
    <StudyGuideShell
      key={part}
      guideClass="partial-derivatives-guide"
      title={"Principal Component Analysis (Part " + part + ")"}
    >
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-title">Principal Component Analysis</div>
        </div>
        <a className="sb-link" href="#pca-theory">Theory</a>
        <a className="sb-link" href="#pca-method">Method</a>
        <a className="sb-link" href="#pca-examples">Worked examples</a>
        {advanced && <a className="sb-link" href="#quiz-la-pca-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/linear-algebra/overview">Course overview</Link>
      </nav>

      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra</div>
          <h1 className="ch-title">Principal Component Analysis (PCA)</h1>
          <p className="ch-sub">Find orthogonal directions that summarize the variance in centered data</p>
          <p>
            <Link to="/linear-algebra/svd/1">Singular value decomposition</Link>
            {" · "}
            <Link to="/linear-algebra/orthogonality/1">Orthogonality and least squares</Link>
            {" · "}
            <Link to="/linear-algebra/vectors/1">Vectors</Link>
          </p>
          <p>
            Part {part} of 2. Part 1 develops centering, covariance, and principal directions;
            Part 2 covers scores, variance explained, reconstruction, and the checkpoint.
          </p>
        </header>

        <section className="section" id="pca-theory">
          <h2 className="sec-title">
            {advanced ? "Scores, dimension reduction, and reconstruction" : "Centering data and finding principal directions"}
          </h2>
          {advanced ? (
            <>
              <TheoryBox title="Scores and variance explained">
                <p>{"Let the centered data matrix be $X_c\\in\\mathbb R^{n\\times p}$ and let the orthonormal eigenvectors of its sample covariance be $v_1,\\ldots,v_p$, ordered so $\\lambda_1\\ge\\cdots\\ge\\lambda_p\\ge0$. The score of observation $x_i$ on component $j$ is $t_{ij}=x_{c,i}^{T}v_j$. In matrix form, the first $k$ score columns are $T_k=X_cV_k$, where $V_k=[v_1\\;\\cdots\\;v_k]$."}</p>
                <p>{"The variance explained by component $j$ is $\\lambda_j$. Its explained-variance ratio is $\\lambda_j/\\sum_{r=1}^{p}\\lambda_r$, and the cumulative ratio through component $k$ is $\\sum_{j=1}^{k}\\lambda_j/\\sum_{r=1}^{p}\\lambda_r$. Choose $k$ using a stated threshold together with the task's accuracy and interpretability needs; a threshold is a summary rule, not proof that discarded directions are useless."}</p>
              </TheoryBox>
              <TheoryBox title="Projection, reconstruction, and SVD">
                <p>{"Project each centered row onto the first $k$ principal directions using $T_k=X_cV_k$. The rank-$k$ reconstruction is $\\widehat X_c=T_kV_k^{T}=X_cV_kV_k^{T}$; add each feature mean back to obtain the original-scale reconstruction. If features were standardized, reverse that scaling after reconstruction."}</p>
                <p>{"For $X_c=U\\Sigma V^{T}$, the columns of $V$ are principal directions and the covariance eigenvalues are $\\sigma_j^2/(n-1)$ under the sample-covariance convention. SVD avoids explicitly forming $X_c^{T}X_c$, which can worsen numerical conditioning. The number of nonzero components is at most $\\min(p,n-1)$ after centering."}</p>
                <p>{"PCA directions are orthogonal and their scores have zero sample covariance. Uncorrelated scores are not generally statistically independent. The sign of each eigenvector is arbitrary, and when eigenvalues tie, the basis inside the tied eigenspace is not unique even though the subspace is."}</p>
              </TheoryBox>
              <TheoryBox title="Practical choices and limitations">
                <p>{"Center features before fitting PCA. Standardize as well when different units or scales should receive comparable influence; do not standardize automatically when the original variance scale carries meaning. Remove or handle zero-variance features before dividing by standard deviations."}</p>
                <p>{"PCA is unsupervised: it uses the feature matrix, not outcome labels, and maximizes retained variance rather than prediction accuracy. Outliers can strongly affect the mean and covariance. For a predictive evaluation, fit the mean, scale, and component directions on the training set only, then apply those same values to validation or test observations."}</p>
              </TheoryBox>
            </>
          ) : (
            <>
              <TheoryBox title="Data rows, centering, and covariance">
                <p>{"Suppose $n$ observations are stored as rows of $X\\in\\mathbb R^{n\\times p}$, with one feature per column. PCA first subtracts each feature's training-set mean: $X_c=X-\\mathbf 1\\mu^{T}$. Centering is essential because PCA describes variation around the mean; without it, the leading direction can point toward the data's offset from the origin."}</p>
                <p>{"Using the sample-covariance convention, $S=X_c^{T}X_c/(n-1)$. The matrix $S$ is symmetric and positive semidefinite, so its eigenvalues are real and nonnegative. Its diagonal entries are feature variances and its off-diagonal entries are covariances. Dividing by $n$ instead of $n-1$ changes eigenvalue magnitudes but not the eigenvectors or explained-variance ratios."}</p>
                <p>{"A covariance matrix depends on feature units. A measurement recorded in thousands rather than single units has a different numerical variance. Standardizing each nonconstant feature to unit sample variance makes PCA equivalent to analyzing the correlation matrix; this is appropriate only when that equal-scale treatment matches the question."}</p>
              </TheoryBox>
              <TheoryBox title="Maximum variance and eigenvectors">
                <p>{"For a unit direction $u$, the sample variance of the centered observations after projection onto $u$ is $u^{T}Su$. The first principal direction solves $\\max_{\\lVert u\\rVert=1}u^{T}Su$. A Lagrange-multiplier calculation gives $Su=\\lambda u$, so a unit eigenvector for the largest eigenvalue maximizes this variance."}</p>
                <p>{"The second direction maximizes the same variance subject to being orthogonal to the first. Continuing this process gives an orthonormal eigenbasis, with eigenvalues ordered from largest to smallest. Each eigenvalue measures variance along its paired direction; each eigenvector gives the feature weights defining that direction."}</p>
                <p>{"PCA rotates the coordinate axes to these principal directions. It does not change the observations themselves. The resulting coordinates are linear combinations of the original features, and components with small eigenvalues may be omitted when a lower-dimensional summary is useful."}</p>
              </TheoryBox>
            </>
          )}
        </section>

        <section className="section" id="pca-method">
          <h2 className="sec-title">A dependable PCA workflow</h2>
          <ProcedureBox
            title={advanced ? "Project observations and assess the reduced representation" : "Fit principal directions from a data matrix"}
            steps={advanced ? [
              "Center each observation with the training-set feature means and apply the training-set scales if standardization was chosen.",
              "Compute scores with $T_k=X_cV_k$; use the same stored means, scales, and loading vectors for future observations.",
              "Compute individual and cumulative explained-variance ratios from the ordered eigenvalues.",
              "Choose $k$ using the variance target and the problem's practical needs; inspect the retained features and downstream performance.",
              "Reconstruct with $T_kV_k^T$ and add the mean back; undo any standardization before interpreting values in the original units."
            ] : [
              "Arrange observations in rows and features in columns; decide whether features with different units should be standardized.",
              "Compute feature means on the training data and subtract them to form $X_c$.",
              "Find eigenpairs of $S=X_c^TX_c/(n-1)$, or use the right singular vectors from an SVD of $X_c$.",
              "Sort eigenvalues in descending order and pair each eigenvector with its eigenvalue.",
              "Check that eigenvalues are nonnegative up to rounding, eigenvectors are orthonormal, and their total matches the covariance trace."
            ]}
          />
        </section>

        <section className="section" id="pca-examples">
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample number={3} title="Choose the number of components" setup={"A centered three-feature data set has sample-covariance eigenvalues $9,4,1$. Retain the smallest number of components that explains at least $90\\%$ of the variance."} steps={[
                "The total variance is $9+4+1=14$.",
                "One component explains $9/14\\approx64.3\\%$, which is below the target.",
                "The first two explain $(9+4)/14=13/14\\approx92.9\\%$."
              ]} result={"Choose $k=2$; the cumulative ratio first reaches $90\\%$ at the second component."} check={"The third component contributes $1/14\\approx7.1\\%$ of the total variance."} mistake={"Rounding the first component's ratio up to the target or choosing $k$ before sorting the eigenvalues."} />
              <WorkedExample number={4} title="Project and reconstruct an observation" setup={"Let the feature mean be $\\mu=(2,1)^T$, the first direction be $v_1=(1,1)^T/\\sqrt2$, and an observation be $x=(4,2)^T$. Use one component."} steps={[
                "Center the observation: $x-\\mu=(2,1)^T$.",
                "Its score is $t=v_1^T(x-\\mu)=3/\\sqrt2$.",
                "Project and restore the mean: $\\widehat x=\\mu+t v_1=(2,1)^T+(3/2,3/2)^T$."
              ]} result={"The one-component reconstruction is $\\widehat x=(3.5,2.5)^T$."} check={"The residual is $(0.5,-0.5)^T$, orthogonal to $v_1$, with squared length $0.5$."} mistake={"Projecting the uncentered $x$, which incorrectly mixes the feature mean into the score."} />
            </>
          ) : (
            <>
              <WorkedExample number={1} title="Find the leading direction from three observations" setup={"Take the two-feature observations $(-1,-2)$, $(0,0)$, and $(1,2)$. Use sample covariance."} steps={[
                "The feature mean is $(0,0)$, so the centered rows are unchanged.",
                "Compute $S=X_c^TX_c/2=\\begin{pmatrix}1&2\\\\2&4\\end{pmatrix}$.",
                "The eigenvalues are $5$ and $0$. A unit eigenvector for $5$ is $v_1=(1,2)^T/\\sqrt5$."
              ]} result={"The first principal direction is the line spanned by $(1,2)^T$; the data have no variation perpendicular to it."} check={"Projecting the observations gives scores $-\\sqrt5,0,\\sqrt5$."} mistake={"Using the eigenvector as a score or forgetting that each observation must be centered first."} />
              <WorkedExample number={2} title="Read variance and direction from a diagonal covariance matrix" setup={"Suppose $S=\\begin{pmatrix}4&0\\\\0&1\\end{pmatrix}$ for two centered features."} steps={[
                "The eigenpairs are $(4,e_1)$ and $(1,e_2)$.",
                "The leading direction is $e_1=(1,0)^T$ because its eigenvalue is largest.",
                "The total variance is $5$, so the first direction explains $4/5=80\\%$."
              ]} result={"The first principal component keeps the first feature direction and captures $80\\%$ of the variance."} check={"The two coordinate directions are orthogonal and the eigenvalues sum to $\\operatorname{tr}(S)=5$."} mistake={"Selecting the eigenvalue $1$ because it is smaller, or confusing a component's direction with its score."} />
            </>
          )}
        </section>

        <section className="section">
          <h2 className="sec-title">Check your reasoning</h2>
          <p>
            {advanced
              ? "Always transform new observations with the training-set preprocessing and loadings. Explained variance describes spread in the input data, not guaranteed predictive value."
              : "Keep the data convention clear: rows are observations, columns are features, and eigenvectors of the centered covariance matrix are the principal directions."}
          </p>
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-la-pca-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Principal Component Analysis"
            scoreId="score-la-pca-checkpoint"
            section="la-pca-checkpoint"
            questions={LA_PCA_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-la-pca-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to scores and dimension reduction</h2>
            <p>
              Part 2 applies the principal directions to observations, compares explained variance,
              and reconstructs data from a selected number of components.
            </p>
            <Link to="/linear-algebra/principal-component-analysis/2">Continue to Part 2 →</Link>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
