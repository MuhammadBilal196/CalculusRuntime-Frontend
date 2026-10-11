import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, WorkedExample } from "./LaBlocks";
import { LA_DUAL_SPACES_QUIZ } from "../../data/laQuizzes";

export default function DualSpacesGuide({ embedded = false }) {
  const { saveQuizScore } = useProgress();
  const content = (
    <div className={embedded ? "la-topic-content" : "main"}>
      {!embedded && <h1>Dual Spaces &amp; Linear Functionals</h1>}
      <p>Review <Link to="/linear-algebra/vectors/1">vector spaces</Link> and <Link to="/linear-algebra/change-of-basis-similarity">change of basis</Link>. This topic develops scalar-valued measurements, their coordinates, and how they transform.</p>
      <section className="section" id="dual-spaces-section-1">
        <h2 className="sec-title">Linear functionals and the dual space</h2>
        <TheoryBox title={"A scalar-valued linear map"}>
          <p>{"Work over a field $\\mathbb F$, usually $\\mathbb R$ here. A linear functional is a map $\\varphi:V\\to\\mathbb F$ satisfying $\\varphi(au+bv)=a\\varphi(u)+b\\varphi(v)$. It assigns one scalar to a vector; it is not a vector in V unless an additional identification is chosen."}</p>
          <p>{"The dual space $V^*=\\operatorname{Hom}(V,\\mathbb F)$ contains all such functionals. Addition and scalar multiplication are pointwise: $(\\varphi+\\psi)(v)=\\varphi(v)+\\psi(v)$ and $(a\\varphi)(v)=a\\varphi(v)$. Evaluation $\\langle\\varphi,v\\rangle=\\varphi(v)$ is bilinear. No inner product is required."}</p>
        </TheoryBox>
        <TheoryBox title={"Linearity checks and kernels"}>
          <p>{"A necessary condition is $\\varphi(0)=0$, but it is not sufficient: $\\varphi(x)=x^2$ has that property and is not linear. A rule such as $2x-3y$ is linear; $2x-3y+1$ is affine and fails the zero-vector check."}</p>
          <p>{"A nonzero functional has rank 1. If $\\dim V=n<\\infty$, rank-nullity gives $\\dim\\ker\\varphi=n-1$: a hyperplane through the origin. The zero functional instead has the whole space as its kernel."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="dual-spaces-section-2">
        <h2 className="sec-title">Dual bases and coordinates</h2>
        <TheoryBox title={"Extract coordinates with functionals"}>
          <p>{"Given a basis $B=(v_1,\\ldots,v_n)$, its dual basis $(\\varepsilon^1,\\ldots,\\varepsilon^n)$ is defined by $\\varepsilon^i(v_j)=\\delta_{ij}$. If $v=\\sum_jx_jv_j$, linearity gives $\\varepsilon^i(v)=x_i$. These functionals are coordinate extractors, not necessarily dot products with the original basis vectors."}</p>
          <p>{"Every functional has the unique expansion $\\varphi=\\sum_i\\varphi(v_i)\\varepsilon^i$. Existence follows by evaluating that expression on every basis vector; uniqueness follows because a linear map is determined by its values on a basis. Consequently $\\dim V^*=n$."}</p>
        </TheoryBox>
        <TheoryBox title={"Compute the dual basis by solving a matrix equation"}>
          <p>{"Put the basis vectors into an invertible matrix $S=[v_1\\ \\cdots\\ v_n]$ in fixed ambient coordinates. A matrix D whose rows are the desired functionals must satisfy $DS=I$. Therefore the rows of $S^{-1}$ give the dual basis. Verify every pairing, not just the diagonal ones."}</p>
          <p>{"For column coordinates $x_B$ and functional coefficient column $a_B=(\\varphi(v_1),\\ldots,\\varphi(v_n))^T$, the scalar pairing is $a_B^Tx_B$. Over $\\mathbb C$, the algebraic dual still uses a transpose here, not a conjugate transpose. An inner-product representation uses its own conjugation convention."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="dual-spaces-section-3">
        <h2 className="sec-title">Basis changes, dual maps and annihilators</h2>
        <TheoryBox title={"Keep the pairing invariant"}>
          <p>{"If the new basis matrix is $S\\,C$, then $x_{B\\prime}=C^{-1}x_B$. Functional coefficients transform by $a_{B\\prime}=C^Ta_B$, so $a_{B\\prime}^Tx_{B\\prime}=a_B^Tx_B$. Vector and functional coordinates transform differently to preserve the same scalar."}</p>
        </TheoryBox>
        <TheoryBox title={"Pull a functional back along a linear map"}>
          <p>{"For $T:V\\to W$, the dual map $T^*:W^*\\to V^*$ is $T^*(\\psi)=\\psi\\circ T$. Its direction is reversed: first send v into W, then evaluate the W-functional. If A represents T in chosen bases, $A^T$ represents the algebraic dual in the corresponding dual bases."}</p>
          <p>{"For composable maps S and T, $(S\\circ T)^*=T^*\\circ S^*$. Also $\\ker T^*=(\\operatorname{im}T)^\\circ$ and, in finite dimensions, $\\operatorname{rank}T^*=\\operatorname{rank}T$. Do not confuse the algebraic dual with a Hermitian adjoint."}</p>
        </TheoryBox>
        <TheoryBox title={"Functionals that vanish on a subspace"}>
          <p>{"For $U\\subseteq V$, its annihilator is $U^\\circ=\\{\\varphi\\in V^*: \\varphi(u)=0\\text{ for every }u\\in U\\}$. Extend a basis of U to one of V: the coefficients on U must vanish, while the remaining coefficients are free. Thus $\\dim U^\\circ=\\dim V-\\dim U$."}</p>
          <p>{"The annihilator lives in $V^*$, not V. An orthogonal complement can be related to it only after an inner product identifies vectors with functionals. To compute it from spanning columns U, solve $U^Ta=0$ for the functional coefficient column a."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="dual-spaces-section-4">
        <h2 className="sec-title">Double dual and applications</h2>
        <TheoryBox title={"A canonical evaluation map"}>
          <p>{"Each v defines an element $J(v)\\in V^{**}$ by $J(v)(\\varphi)=\\varphi(v)$. In finite dimensions this evaluation map is injective: a nonzero v has a nonzero coordinate detected by some dual-basis functional. Equal dimensions then make J an isomorphism."}</p>
          <p>{"This identification with the double dual does not require a basis choice in its definition. An identification of V with its single dual generally needs extra structure, such as a selected basis or inner product. The finite-dimensional qualification matters."}</p>
        </TheoryBox>
        <TheoryBox title={"Measurements and polynomial data"}>
          <p>{"Weighted measurements, coordinate extraction and polynomial evaluation are linear functionals. On $P_2$, evaluation at a fixed t is linear in the polynomial, even though its value depends quadratically on t. The input being tested for linearity is the polynomial, not the evaluation point."}</p>
          <p>{"Coefficient extraction and derivative evaluation provide useful dual coordinates. Multiple independent measurements can reconstruct a finite-dimensional vector; dependent measurements may leave a nontrivial common kernel."}</p>
        </TheoryBox>
      </section>
      <section className="section" id="dual-spaces-examples">
        <h2 className="sec-title">Worked examples</h2>
        <WorkedExample number={1} title={"A measurement and its kernel"} setup={"Let $\\varphi(x,y,z)=2x-3y+z$."}
          steps={["At $(1,2,4)$ the value is $2-6+4=0$.", "The kernel equation gives $z=-2x+3y$. Every kernel vector is $x(1,0,-2)+y(0,1,3)$.", "The two spanning vectors are independent, so the kernel has dimension 2."]}
          result={"The given vector lies in a two-dimensional kernel plane."} check={"Substitution of either spanning vector gives zero."} mistake={"Adding a constant would destroy linearity and change the kernel geometry."} />
        <WorkedExample number={2} title={"Find a nonstandard dual basis"} setup={"Take $v_1=(1,1)^T$, $v_2=(1,-1)^T$."}
          steps={["$S=\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$ and $S^{-1}=\\frac12\\begin{pmatrix}1&1\\\\1&-1\\end{pmatrix}$.", "The dual functionals are $\\varepsilon^1(x,y)=(x+y)/2$ and $\\varepsilon^2(x,y)=(x-y)/2$.", "For $(5,1)$ they return 3 and 2, so $(5,1)=3v_1+2v_2$."]}
          result={"The coordinate column is $(3,2)^T$."} check={"For $\\varphi(x,y)=3x+y$, the dual coefficients are $(4,2)^T$, and $4\\cdot3+2\\cdot2=16=\\varphi(5,1)$."} mistake={"Using the original basis vectors as row functionals would miss the factors of one half."} />
        <WorkedExample number={3} title={"Pull back a measurement"} setup={"Let $T(x,y,z)=(x+2y,-x+3z)$ and $\\psi(s,t)=2s-t$."}
          steps={["$T^*\\psi(x,y,z)=2(x+2y)-(-x+3z)=3x+4y-3z$.", "The matrix is $A=\\begin{pmatrix}1&2&0\\\\-1&0&3\\end{pmatrix}$; multiplying $A^T(2,-1)^T$ gives $(3,4,-3)^T$.", "At $(1,0,2)$, T gives $(1,5)$ and the measurement gives $2-5=-3$."]}
          result={"The pulled-back functional is $3x+4y-3z$."} check={"Direct evaluation gives $3-6=-3$ as well."} mistake={"The dual map starts in the dual of the target space, not the dual of the source."} />
        <WorkedExample number={4} title={"Annihilate a plane"} setup={"Let $U=\\operatorname{span}\\{(1,1,0),(0,1,1)\\}$ in $\\mathbb R^3$."}
          steps={["Write a functional as $ax+by+cz$. Vanishing on the spanning vectors gives $a+b=0$ and $b+c=0$.", "Thus $(a,b,c)=t(1,-1,1)$.", "The two original spanning vectors are independent, so the annihilator dimension is $3-2=1$."]}
          result={"$U^\\circ=\\operatorname{span}\\{(x,y,z)\\mapsto x-y+z\\}$."} check={"Both spanning vectors evaluate to zero."} mistake={"The answer is a space of functionals, even when rows of numbers are used to represent it."} />
        <WorkedExample number={5} title={"The dual basis of quadratic polynomials"} setup={"Use the basis $(1,t,t^2)$ of $P_2$."}
          steps={["For $p(t)=a+bt+ct^2$, the coefficient functionals are $p(0)=a$, $p\\prime(0)=b$ and $p\\prime\\prime(0)/2=c$.", "These give the identity pairing on the three basis polynomials.", "For $p(t)=2-3t+4t^2$, the dual coordinates are 2, -3, 4 and evaluation at 1 is $2-3+4=3$."]}
          result={"Evaluation at 1 is the sum of the three coefficient functionals."} check={"The second derivative of t squared is 2, so its coefficient extractor must divide by 2."} mistake={"Differentiation-based coefficient extraction includes factorial factors."} />
      </section>
      <GuideMcqSection id="quiz-la-dual-spaces-checkpoint" badge="Topic checkpoint · 20 questions"
        title="Dual Spaces &amp; Linear Functionals" scoreId="score-la-dual-spaces-checkpoint" section="la-dual-spaces-checkpoint"
        questions={LA_DUAL_SPACES_QUIZ} onComplete={(score, total) => saveQuizScore("guide-mcq-la-dual-spaces-checkpoint", score, total)} />
    </div>
  );
  if (embedded) return content;
  return <StudyGuideShell guideClass="partial-derivatives-guide" title="Dual Spaces &amp; Linear Functionals">
    <nav className="sidebar" aria-label="Dual Spaces &amp; Linear Functionals sections">
      <Link className="sb-link" to="/linear-algebra/overview#abstract-linear-algebra">Course overview</Link>
      <a className="sb-link" href="#dual-spaces-section-1">Linear functionals and the dual space</a>
      <a className="sb-link" href="#dual-spaces-section-2">Dual bases and coordinates</a>
      <a className="sb-link" href="#dual-spaces-section-3">Basis changes, dual maps and annihilators</a>
      <a className="sb-link" href="#dual-spaces-section-4">Double dual and applications</a>
      <a className="sb-link" href="#dual-spaces-examples">Worked examples</a>
      <a className="sb-link" href="#quiz-la-dual-spaces-checkpoint">Checkpoint</a>
    </nav>{content}
  </StudyGuideShell>;
}
