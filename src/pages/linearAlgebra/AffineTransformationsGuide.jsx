import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_AFFINE_HOMOGENEOUS_QUIZ } from "../../data/laQuizzes";

export default function AffineTransformationsGuide({ part = 1 }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;

  return (
    <StudyGuideShell
      key={part}
      guideClass="partial-derivatives-guide"
      title={"Affine Transformations (Part " + part + ")"}
    >
      <nav className="sidebar">
        <div className="sb-brand">
          <div className="sb-title">Affine Transformations</div>
        </div>
        <a className="sb-link" href="#affine-theory">Theory</a>
        <a className="sb-link" href="#affine-method">Method</a>
        <a className="sb-link" href="#affine-examples">Worked examples</a>
        {advanced && <a className="sb-link" href="#quiz-la-affine-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/linear-algebra/overview">Course overview</Link>
      </nav>

      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra</div>
          <h1 className="ch-title">Affine Transformations &amp; Homogeneous Coordinates</h1>
          <p className="ch-sub">Model translations and linear maps in one matrix framework</p>
          <p>
            <Link to="/linear-algebra/change-of-basis-similarity/1">Change of basis</Link>
            {" · "}
            <Link to="/linear-algebra/transformations/1">Linear transformations</Link>
          </p>
          <p>Part {part} of 2. Part 1 builds affine and homogeneous-coordinate models; Part 2 covers compositions, inverses, geometry, applications, and the checkpoint.</p>
        </header>

        <section className="section" id="affine-theory">
          <h2 className="sec-title">
            {advanced ? "Composition, inverse, and geometric meaning" : "Affine maps and homogeneous coordinates"}
          </h2>
          {advanced ? (
            <>
              <TheoryBox title="Composition order and inverse">
                <p>{"Write an affine map as $F(x)=A_Fx+b_F$. If $G(x)=A_Gx+b_G$, then $F\\circ G$ applies $G$ first and has linear part $A_FA_G$ and translation $A_Fb_G+b_F$. In homogeneous form this is ordinary multiplication: $H_{F\\circ G}=H_FH_G$. The rightmost matrix acts first."}</p>
                <p>{"The map is invertible exactly when $A$ is invertible. Solving $y=Ax+b$ gives $F^{-1}(y)=A^{-1}y-A^{-1}b$, represented by $H^{-1}=\\begin{pmatrix}A^{-1}&-A^{-1}b\\\\0&1\\end{pmatrix}$. A zero determinant means the map collapses at least one direction and has no global inverse."}</p>
              </TheoryBox>
              <TheoryBox title="What affine maps preserve">
                <p>{"An affine map preserves affine combinations: if $\\sum_i\\lambda_i=1$, then $F(\\sum_i\\lambda_i x_i)=\\sum_i\\lambda_iF(x_i)$. Therefore it preserves collinearity, parallelism, ratios along a line, and barycenters. It maps lines and planes to lines and planes when $A$ is invertible."}</p>
                <p>{"Distances and angles are generally not preserved. They are preserved by the linear part only when $A$ is orthogonal (and the translation then changes location but not shape). Areas scale by $|\\det A|$ in two dimensions and volumes by $|\\det A|$ in three dimensions."}</p>
                <p>{"Homogeneous coordinates for affine geometry use a final coordinate of $1$ for points and $0$ for direction vectors. Projective geometry identifies any nonzero scalar multiples of homogeneous tuples; for an ordinary finite affine point with final coordinate $w\\ne0$, normalize by dividing through by $w$."}</p>
              </TheoryBox>
              <TheoryBox title="Applications and a reliable workflow">
                <p>{"In computer graphics, a 2D or 3D object is transformed by applying a matrix to each vertex. Homogeneous coordinates let translation, rotation, scaling, reflection, and shear share a single matrix representation, so a chain of operations can be multiplied once and reused."}</p>
                <p>{"For a rotation about a point $p$, translate the center to the origin, rotate, then translate back: $F(x)=p+R(x-p)=Rx+(p-Rp)$. For a scale or rotation about the origin, the translation column is zero. For a shear, an off-diagonal entry of $A$ mixes coordinate directions."}</p>
              </TheoryBox>
            </>
          ) : (
            <>
              <TheoryBox title="An affine transformation is linear action plus translation">
                <p>{"A function $F:\\mathbb R^n\\to\\mathbb R^m$ is affine when $F(x)=Ax+b$, with a linear map $A$ and a fixed translation vector $b$. The linear part changes directions and shape; $b$ shifts every output by the same amount. A linear map is the special case $b=0$ and therefore fixes the origin."}</p>
                <p>{"For two points, $F(x)-F(y)=A(x-y)$: translation cancels when comparing displacement vectors. An affine map preserves straightness and parallel directions, but a general $A$ may stretch, compress, rotate, reflect, or shear. If $A$ is singular, dimensions can collapse."}</p>
                <p>{"Affine combinations have coefficients summing to one. In particular, $F((1-t)x+ty)=(1-t)F(x)+tF(y)$, so points on a segment map to the corresponding points on the image segment, including the same parameter $t$."}</p>
              </TheoryBox>
              <TheoryBox title="Homogeneous coordinates turn translation into multiplication">
                <p>{"Represent a point $x\\in\\mathbb R^n$ by the augmented column $\\widetilde{x}=\\begin{pmatrix}x\\\\1\\end{pmatrix}$. Then $F(x)=Ax+b$ is represented by $H=\\begin{pmatrix}A&b\\\\0&1\\end{pmatrix}$ and $\\widetilde{F(x)}=H\\widetilde{x}$. The bottom row has zeros followed by one."}</p>
                <p>{"A displacement vector has homogeneous form $\\begin{pmatrix}v\\\\0\\end{pmatrix}$, not a point with final coordinate one. The final coordinate keeps translations from changing direction vectors: $H\\begin{pmatrix}v\\\\0\\end{pmatrix}=\\begin{pmatrix}Av\\\\0\\end{pmatrix}$."}</p>
                <p>{"In two dimensions, $H=\\begin{pmatrix}a_{11}&a_{12}&b_1\\\\a_{21}&a_{22}&b_2\\\\0&0&1\\end{pmatrix}$. This is a $3\\times3$ matrix acting on $\\begin{pmatrix}x&y&1\\end{pmatrix}^T$. In three dimensions the affine matrix is $4\\times4$."}</p>
              </TheoryBox>
            </>
          )}
        </section>

        <section className="section" id="affine-method">
          <h2 className="sec-title">A dependable transformation workflow</h2>
          <ProcedureBox
            title={advanced ? "Compose or invert affine maps" : "Encode an affine map"}
            steps={advanced
              ? [
                  "Write each map as $F(x)=Ax+b$ or as its homogeneous matrix $H$.",
                  "For $F\\circ G$, multiply $H_FH_G$ in that order; the rightmost map acts first.",
                  "Check invertibility using $\\det A\\ne0$ and use $A^{-1}$ to construct the inverse.",
                  "Test geometry separately: translations preserve distances, while a general linear part may not."
                ]
              : [
                  "Identify the linear part $A$ and translation vector $b$ in $F(x)=Ax+b$.",
                  "Build $H=\\begin{pmatrix}A&b\\\\0&1\\end{pmatrix}$ using the column-vector convention.",
                  "Append $1$ to a point and $0$ to a direction vector.",
                  "Multiply and read the first $n$ entries; verify with a direct substitution into $Ax+b$."
                ]}
          />
        </section>

        <section className="section" id="affine-examples">
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? (
            <>
              <WorkedExample
                number={4}
                title="Rotate about a point other than the origin"
                setup={"Rotate $x=(2,1)$ by $90^\\circ$ counterclockwise about $p=(1,1)$."}
                steps={[
                  "Translate relative to the center: $x-p=(1,0)$.",
                  "Apply $R=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$ to get $(0,1)$.",
                  "Translate back: $p+(0,1)=(1,2)$."
                ]}
                result={"The rotated point is $(1,2)$."}
                check={"The point stays one unit from the center and its relative direction rotates by $90^\\circ$."}
                mistake={"Rotating around the origin without subtracting and restoring the chosen center."}
              />
              <WorkedExample
                number={5}
                title="Compose a translation after a rotation"
                setup={"First rotate by $R=\\begin{pmatrix}0&-1\\\\1&0\\end{pmatrix}$, then translate by $t=(3,-2)$."}
                steps={[
                  "The rotation matrix is $H_R=\\begin{pmatrix}0&-1&0\\\\1&0&0\\\\0&0&1\\end{pmatrix}$.",
                  "The translation matrix is $H_T=\\begin{pmatrix}1&0&3\\\\0&1&-2\\\\0&0&1\\end{pmatrix}$.",
                  "Because translation is applied second, multiply $H_TH_R$."
                ]}
                result={"$H_TH_R=\\begin{pmatrix}0&-1&3\\\\1&0&-2\\\\0&0&1\\end{pmatrix}$."}
                check={"On $(x,y,1)^T$, the output is $(-y+3,x-2,1)^T$."}
                mistake={"Reversing the order and computing $H_RH_T$."}
              />
              <WorkedExample
                number={6}
                title="Find an inverse affine map"
                setup={"Let $F(x,y)=(2x+y+1,x-y-3)$. Find $F^{-1}$."}
                steps={[
                  "The linear part is $A=\\begin{pmatrix}2&1\\\\1&-1\\end{pmatrix}$ with determinant $-3$, so it is invertible.",
                  "$A^{-1}=\\frac{-1}{3}\\begin{pmatrix}-1&-1\\\\-1&2\\end{pmatrix}=\\begin{pmatrix}1/3&1/3\\\\1/3&-2/3\\end{pmatrix}$.",
                  "Use $F^{-1}(y)=A^{-1}(y-b)$ with $b=(1,-3)^T$."
                ]}
                result={"$F^{-1}(u,v)=((u+v+2)/3,(u-2v-7)/3)$."}
                check={"Substitution into $F$ returns $(u,v)$."}
                mistake={"Using $A^{-1}y-b$ instead of $A^{-1}(y-b)$."}
              />
            </>
          ) : (
            <>
              <WorkedExample
                number={1}
                title="Translate a point with a homogeneous matrix"
                setup={"Let $F(x,y)=(x+3,y-2)$ and transform $(2,5)$."}
                steps={[
                  "Write $H=\\begin{pmatrix}1&0&3\\\\0&1&-2\\\\0&0&1\\end{pmatrix}$.",
                  "Augment the point as $(2,5,1)^T$.",
                  "Multiply to obtain $(5,3,1)^T$."
                ]}
                result={"The image point is $(5,3)$."}
                check={"Direct substitution gives $(2+3,5-2)=(5,3)$."}
                mistake={"Appending zero to a point, which would omit the translation."}
              />
              <WorkedExample
                number={2}
                title="Separate point and direction behavior"
                setup={"Let $F(x,y)=(2x+y+4,x-3y+1)$. Find the image of point $(1,2)$ and displacement $(1,2)$."}
                steps={[
                  "For the point, use $A(1,2)^T+b=(8,-4)^T$.",
                  "For the displacement, use only $A(1,2)^T=(4,-5)^T$.",
                  "Their homogeneous columns are $(1,2,1)^T$ and $(1,2,0)^T$."
                ]}
                result={"Translation affects the point but not the displacement."}
                check={"The point image minus $b=(4,1)$ equals the vector image $(4,-5)$."}
                mistake={"Adding the translation vector to a direction."}
              />
              <WorkedExample
                number={3}
                title="Represent a shear"
                setup={"The shear $F(x,y)=(x+2y,y)$ sends $(1,3)$ to which point?"}
                steps={[
                  "Use $A=\\begin{pmatrix}1&2\\\\0&1\\end{pmatrix}$ and $b=0$.",
                  "The homogeneous matrix is $H=\\begin{pmatrix}1&2&0\\\\0&1&0\\\\0&0&1\\end{pmatrix}$.",
                  "Multiply $H(1,3,1)^T=(7,3,1)^T$."
                ]}
                result={"The image is $(7,3)$."}
                check={"The shear changes the horizontal coordinate by twice the vertical coordinate."}
                mistake={"Applying the shear coefficient to the wrong coordinate."}
              />
            </>
          )}
        </section>

        {advanced ? (
          <GuideMcqSection
            id="quiz-la-affine-checkpoint"
            badge="Topic checkpoint · 20 questions"
            title="Affine Transformations & Homogeneous Coordinates"
            scoreId="score-la-affine-checkpoint"
            section="la-affine-checkpoint"
            questions={LA_AFFINE_HOMOGENEOUS_QUIZ}
            onComplete={(score, total) => saveQuizScore("guide-mcq-la-affine-checkpoint", score, total)}
          />
        ) : (
          <section className="section">
            <h2 className="sec-title">Continue to composition and applications</h2>
            <p>Part 2 completes the topic and includes the 20-question checkpoint.</p>
            <Link to="/linear-algebra/affine-homogeneous/2">Continue to Part 2 →</Link>
          </section>
        )}
      </main>
    </StudyGuideShell>
  );
}
