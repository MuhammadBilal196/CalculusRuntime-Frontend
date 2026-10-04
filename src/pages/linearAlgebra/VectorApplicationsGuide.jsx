import { Link } from "react-router-dom";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { LA_VECTOR_APPLICATIONS_QUIZ } from "../../data/laQuizzes";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";

export default function VectorApplicationsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  return (
    <div className="la-topic-content">
      {part === 1 ? (
        <>
          <section className="section" id="vector-applications-graphics">
            <h2 className="sec-title">Vectors and coordinate frames in graphics</h2>
            <TheoryBox title="A scene as vectors and matrices">
              <p>{"A mesh with $n$ vertices can be stored as $V\\in\\mathbb R^{3\\times n}$ when every column is a position vector in the same coordinate frame. A linear transformation $A\\in\\mathbb R^{3\\times3}$ transforms the complete mesh by $V'=AV$. A row-vector convention is also possible, but the multiplication order and transposes must change consistently."}</p>
              <p>{"A position describes a point relative to an origin; a displacement describes the difference between two positions. Translation changes positions but leaves displacements unchanged. Use homogeneous vectors $(x,y,z,1)^T$ for points and $(v_x,v_y,v_z,0)^T$ for directions. The last coordinate distinguishes these roles."}</p>
              <p>{"The affine matrix $H=\\begin{pmatrix}A&t\\\\0&1\\end{pmatrix}$ sends a point to $Ax+t$ and a direction to $Av$. Applying $H_1$ followed by $H_2$ gives $H_2H_1$. Translation and rotation generally do not commute, so label each matrix with its source and destination coordinate frames."}</p>
              <p><Link to="/linear-algebra/affine-homogeneous">Review affine transformations and homogeneous coordinates</Link> before building a scene transformation chain.</p>
            </TheoryBox>
            <TheoryBox title="Preserving geometry and transforming normals">
              <p>{"An orthogonal matrix satisfies $Q^TQ=I$, so $(Qx)^T(Qy)=x^Ty$. Rotations and reflections preserve distances and angles. Nonuniform scaling changes angles in general; a matrix can be invertible without preserving geometry."}</p>
              <p>{"A surface normal $n$ is perpendicular to tangent vectors $v$, so $n^Tv=0$. If an invertible linear map sends $v$ to $Av$, choose $n'=A^{-T}n$: then $(n')^TAv=n^Tv=0$. Normalize $n'$ before using it in lighting calculations. Applying $A$ directly to a normal fails under general nonuniform scaling."}</p>
              <p>{"This normal formula requires an invertible $A$. A singular transformation can collapse a surface and may destroy a unique normal direction. Translation never enters the normal calculation because normals describe directions, not points."}</p>
            </TheoryBox>
            <TheoryBox title="Projection, cameras, and interpolation">
              <p>{"For orthonormal columns of $Q$, $P=QQ^T$ projects onto their span. It obeys $P^T=P$ and $P^2=P$, and the residual $x-Px$ is perpendicular to the subspace. Orthographic projection can discard a depth coordinate, but it cannot recover that discarded information."}</p>
              <p>{"An ideal pinhole camera can be written in homogeneous form as $\\widetilde p=K[R\\mid t]\\widetilde X$. Convert to finite image coordinates by dividing by the third image coordinate. With identity orientation, zero translation, and focal length $f$, this gives $(u,v)=(fX/Z,fY/Z)$ for $Z\\ne0$. The final division makes perspective projection nonlinear in ordinary Cartesian coordinates."}</p>
              <p>{"Barycentric interpolation writes $p=\\alpha a+\\beta b+\\gamma c$, where $\\alpha+\\beta+\\gamma=1$. Nonnegative weights place $p$ inside or on the triangle. The sum-to-one condition makes the result independent of the chosen origin and allows the same weights to interpolate vertex attributes."}</p>
            </TheoryBox>
            <ProcedureBox title="Check a graphics calculation" steps={["Choose row or column coordinates and label the coordinate frames.", "Use last coordinate 1 for points and 0 for directions; compose matrices in the intended order.", "Transform normals with the inverse transpose when the linear part is invertible.", "Perform perspective division only when the denominator is nonzero.", "Check a known point, a direction, and a preserved geometric property before transforming a complete mesh."]} />
          </section>
          <section className="section" id="vector-applications-graphics-examples">
            <h2 className="sec-title">Worked graphics examples</h2>
            <WorkedExample number={1} title="Rotate a point, then translate it"
              setup={"Use column coordinates. Rotate $(1,0)$ counterclockwise through $90^\\circ$, then translate by $(2,3)$."}
              steps={["$R=\\begin{pmatrix}0&-1&0\\\\1&0&0\\\\0&0&1\\end{pmatrix}$ and $T=\\begin{pmatrix}1&0&2\\\\0&1&3\\\\0&0&1\\end{pmatrix}$.", "$TR=\\begin{pmatrix}0&-1&2\\\\1&0&3\\\\0&0&1\\end{pmatrix}$, so $TR(1,0,1)^T=(2,4,1)^T$.", "The direction $(1,0,0)^T$ becomes $(0,1,0)^T$; translation does not affect it."]}
              result={"The point becomes $(2,4)$."}
              check={"Reversing the order gives $RT(1,0,1)^T=(-3,3,1)^T$, demonstrating that the order matters."} />
            <WorkedExample number={2} title="A normal under nonuniform scaling"
              setup={"Let $A=\\operatorname{diag}(2,1,1)$, tangent $v=(1,-1,0)^T$, and normal $n=(1,1,0)^T$."}
              steps={["Initially $n^Tv=1-1=0$.", "The transformed tangent is $Av=(2,-1,0)^T$.", "$A^{-T}n=(1/2,1,0)^T$, whose dot product with $Av$ is $1-1=0$."]}
              result={"A unit transformed normal is $(1,2,0)^T/\\sqrt5$."}
              check={"Using $An=(2,1,0)^T$ would give dot product $4-1=3$, so it would not be perpendicular."} />
          </section>
        </>
      ) : (
        <>
          <section className="section" id="vector-applications-learning">
            <h2 className="sec-title">Vector spaces in data and machine learning</h2>
            <TheoryBox title="Feature matrices and least squares">
              <p>{"For $m$ observations and $d$ features, store one observation per row of $X\\in\\mathbb R^{m\\times d}$. Weights $w\\in\\mathbb R^d$ produce predictions $Xw\\in\\mathbb R^m$. Add a column of ones when an intercept is needed. Unlike the earlier mesh convention, observations are rows here; dimensions identify the intended multiplication."}</p>
              <p>{"Least squares minimizes $\\|Xw-y\\|_2^2$. Its normal equations are $X^TXw=X^Ty$, equivalently $X^T(y-Xw)=0$. Thus the fitted vector is the orthogonal projection of $y$ onto the column space of $X$. The residual is orthogonal to every feature column."}</p>
              <p>{"With independent columns, the weights are unique. With dependent columns, different weights can give the same predictions because $X(w+z)=Xw$ for $z\\in\\ker X$. The pseudoinverse gives a minimum-norm least-squares solution. QR or SVD solves avoid explicitly forming a matrix inverse; the normal equations can worsen numerical conditioning."}</p>
              <p>{"Ridge regression minimizes $\\|Xw-y\\|_2^2+\\lambda\\|w\\|_2^2$. When every weight is penalized and $\\lambda>0$, its matrix $X^TX+\\lambda I$ is positive definite: $z^T(X^TX+\\lambda I)z=\\|Xz\\|_2^2+\\lambda\\|z\\|_2^2>0$ for nonzero $z$. This gives a unique solution even when $X$ is rank deficient."}</p>
            </TheoryBox>
            <TheoryBox title="Low-rank images and feature representations">
              <p>{"Write a grayscale image or data matrix as $A=U\\Sigma V^T$. Keeping the $k$ largest singular values gives $A_k=\\sum_{j=1}^k\\sigma_j u_jv_j^T$. Among matrices of rank at most $k$, this minimizes Frobenius reconstruction error. The squared error is $\\|A-A_k\\|_F^2=\\sum_{j>k}\\sigma_j^2$."}</p>
              <p>{"For an $m\\times n$ image, storing $U_k$, the $k$ singular values, and $V_k$ uses $k(m+n+1)$ numbers instead of $mn$. Storage is reduced only when the first quantity is smaller. A low-rank approximation is most useful when the singular values decay rapidly; choosing $k$ trades detail for compactness."}</p>
              <p><Link to="/linear-algebra/principal-component-analysis">PCA</Link> uses related singular vectors to obtain variance-ranked coordinates. Estimate centering and scaling from the training data, then apply those same values to validation or test data.</p>
            </TheoryBox>
            <TheoryBox title="Neural-network layers and vector similarity">
              <p>{"A dense layer computes $z=Wx+b$ before applying an activation. With no nonlinear activation, two layers collapse to one affine map: $W_2(W_1x+b_1)+b_2=(W_2W_1)x+(W_2b_1+b_2)$. A nonlinear activation such as $\\operatorname{ReLU}(z)_j=\\max(0,z_j)$ changes this behavior."}</p>
              <p>{"A narrow linear layer limits the rank of a composite map: $\\operatorname{rank}(W_2W_1)\\le\\min(\\operatorname{rank}W_1,\\operatorname{rank}W_2)$. Input changes in its nullspace are invisible to the output. This explains both useful compression and possible loss of information."}</p>
              <p>{"For nonzero feature vectors, cosine similarity is $x^Ty/(\\|x\\|_2\\|y\\|_2)$. It compares directions and is unchanged by positive rescaling of either vector. Orthogonal changes of coordinates preserve it, but arbitrary learned linear maps need not. Similarity in an embedding is a modeling choice, not a proof that two objects have the same meaning."}</p>
            </TheoryBox>
          </section>
          <section className="section" id="vector-applications-learning-examples">
            <h2 className="sec-title">Worked data examples</h2>
            <WorkedExample number={3} title="Fit a line and check its residual"
              setup={"Fit $y\\approx a+bt$ to $(t,y)=(0,1),(1,2),(2,2)$."}
              steps={["$X=\\begin{pmatrix}1&0\\\\1&1\\\\1&2\\end{pmatrix}$, $y=(1,2,2)^T$, $X^TX=\\begin{pmatrix}3&3\\\\3&5\\end{pmatrix}$, and $X^Ty=(5,6)^T$.", "Solve $3a+3b=5$ and $3a+5b=6$ to obtain $b=1/2$ and $a=7/6$.", "Predictions are $(7/6,5/3,13/6)^T$ and the residual is $(-1/6,1/3,-1/6)^T$."]}
              result={"The fitted line is $\\widehat y=7/6+t/2$, with squared residual norm $1/6$."}
              check={"The residual entries sum to zero, and $0(-1/6)+1(1/3)+2(-1/6)=0$, verifying $X^Tr=0$."} />
            <WorkedExample number={4} title="Measure a low-rank approximation"
              setup={"An $8\\times6$ matrix has nonzero singular values $4,3,1$. Keep its first two singular terms."}
              steps={["The retained squared energy is $4^2+3^2=25$; the total is $26$.", "The squared Frobenius error is the discarded $1^2=1$, so the error norm is $1$.", "The factors require $2(8+6+1)=30$ numbers, compared with $48$ matrix entries."]}
              result={"The rank-two approximation retains $25/26$ of the squared Frobenius norm and uses fewer stored numbers."}
              check={"Keeping only one singular term would give error $\\sqrt{3^2+1^2}=\\sqrt{10}$."} />
            <WorkedExample number={5} title="Apply a dense layer and its activation"
              setup={"Use $W=\\begin{pmatrix}1&-1\\\\2&1\\end{pmatrix}$, $x=(1,2)^T$, and $b=(0,-1)^T$."}
              steps={["$Wx=(-1,4)^T$.", "Adding the bias gives $z=(-1,3)^T$.", "Apply the activation componentwise: $\\operatorname{ReLU}(z)=(0,3)^T$."]}
              result={"The layer output is $(0,3)^T$."}
              check={"A zeroed coordinate illustrates why ReLU is not an invertible change of basis."} />
          </section>
          <GuideMcqSection
            id="quiz-la-vector-applications-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Vector Space Applications in Graphics & ML"
            scoreId="score-la-vector-applications-checkpoint"
            section="la-vector-applications-checkpoint"
            questions={LA_VECTOR_APPLICATIONS_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-la-vector-applications-checkpoint", score, total)}
          />
        </>
      )}
    </div>
  );
}
