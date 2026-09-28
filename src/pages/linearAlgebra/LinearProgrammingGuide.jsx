import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "./LaBlocks";
import { LA_LINEAR_PROGRAMMING_QUIZ } from "../../data/laQuizzes";

export default function LinearProgrammingGuide({ part = 1, embedded = false }) {
  const { saveQuizScore } = useProgress();
  const advanced = part === 2;
  const content = (
      <div className={embedded ? "la-topic-content" : "main"}>
        {!embedded && (<header className="ch-hdr">
          <div className="ch-eye">Linear Algebra</div>
          <h1 className="ch-title">Linear Programming: The Simplex Method</h1>
          <p className="ch-sub">Model decisions, move between corner points, and certify an optimum with pivots</p>
          <p><Link to="/linear-algebra/systems/1">Linear systems</Link>{" · "}<Link to="/linear-algebra/matrices/1">Matrices</Link></p>
          <p>Part {part} of 2. Part 1 develops LP models, feasible regions, and standard form. Part 2 derives simplex pivots, stopping rules, and special cases.</p>
        </header>)}

        <section className="section" id={embedded ? `lp-model-${part}` : "lp-model"}>
          <h2 className="sec-title">{advanced ? "Canonical form and the simplex viewpoint" : "From a decision problem to a linear model"}</h2>
          {advanced ? (
            <>
              <TheoryBox title="Simplex as a basis search">
                <p>{"A linear program has a linear objective and linear constraints. In standard equality form write $\\max c^Tx$ subject to $Ax=b$ and $x\\geq0$. A basis selects $m$ linearly independent columns of $A$ for $m$ independent equations. Set nonbasic variables to zero and solve $Bx_B=b$, or $x_B=B^{-1}b$. If $x_B\\geq0$, this is a basic feasible solution (BFS), a vertex of the standard-form feasible polyhedron, even when degenerate."}</p>
                <p>{"A simplex pivot exchanges one basic and one nonbasic variable while preserving the equations. The feasible bases correspond to corner points, so simplex searches edges instead of testing every feasible point. Degeneracy can make multiple bases represent the same vertex."}</p>
                <p>{"For tableau convention $z-c^Tx=0$, a negative coefficient of a nonbasic variable in the objective row is an improving direction in a maximization problem. Some texts reverse row signs; identify the convention before applying the optimality rule."}</p>
              </TheoryBox>
              <TheoremBox title="Why searching vertices works">
                <p>{"For a standard-form LP with nonnegative variables, a nonempty feasible region and a finite optimum guarantee that at least one optimum occurs at an extreme point. A bounded feasible polyhedron guarantees a finite optimum, though an unbounded feasible region may still have one. Thus the simplex method can use neighboring BFSs to search for an optimum."}</p>
              </TheoremBox>
            </>
          ) : (
            <>
              <TheoryBox title="Decision variables, objective, and constraints">
                <p>{"An LP optimizes a linear score over choices that obey linear requirements. Let $x_1,\\ldots,x_n$ represent decision quantities. A maximization objective is $z=c^Tx=\\sum_jc_jx_j$; a minimization model uses the same linear structure for cost. Constraints are linear inequalities or equalities, together with bounds such as $x_j\\geq0$."}</p>
                <p>{"Linearity assumes constant per-unit contributions (proportionality), additive contributions without interaction terms (additivity), divisible quantities unless integer restrictions are stated (divisibility), and known coefficients (certainty). Products such as $x_1x_2$ or integer-only decisions are outside the basic continuous LP model."}</p>
              </TheoryBox>
              <TheoryBox title="Feasible region and geometry">
                <p>{"Each inequality defines a half-space and each equality a hyperplane. Intersect these regions with variable bounds to get the feasible set. A point is feasible only if every constraint holds at once; the objective ranks feasible points but does not define feasibility. In two variables, graph the boundary lines and keep the correct side of each one."}</p>
                <p>{"An LP may be infeasible, feasible with an unbounded objective, or have a finite optimum. An unbounded feasible region does not automatically mean an unbounded objective; the direction of improvement matters."}</p>
              </TheoryBox>
            </>
          )}
        </section>

        <section className="section" id={embedded ? `lp-standard-form-${part}` : "lp-standard-form"}>
          <h2 className="sec-title">{advanced ? "Starting bases and two-phase setup" : "Convert constraints to standard form"}</h2>
          {advanced ? (
            <>
              <TheoryBox title="Slack, surplus, and artificial variables">
                <p>{"For $a^Tx\\leq b$ with $b\\geq0$, add slack $s\\geq0$ to get $a^Tx+s=b$; slack measures unused capacity. For $a^Tx\\geq b$, subtract surplus $s\\geq0$ to get $a^Tx-s=b$. Equality rows need no slack."}</p>
                <p>{"Slack columns often form an identity matrix and give a starting basis. A surplus column has a negative entry and usually cannot serve as a basic unit column. For equality or ≥ rows, an artificial variable may supply a temporary basis. Phase I minimizes the sum of artificial variables: a zero optimum means the original constraints are feasible; a positive optimum proves infeasibility. Remove artificial variables before Phase II optimizes the original objective."}</p>
                <p>{"If a right-hand side is negative, multiply the entire row by $-1$ and reverse its inequality first. Preserve the original variable bounds and check each transformed row."}</p>
              </TheoryBox>
              <ProcedureBox title="Simplex pivot cycle" steps={[
                "Find a feasible starting basis and set nonbasic variables to zero.",
                "Choose an improving nonbasic variable. Under $z-c^Tx=0$ for maximization, choose a negative reduced-cost coefficient.",
                "For rows with positive entering-column entries, compute RHS divided by that entry; the smallest nonnegative ratio selects the leaving variable.",
                "Pivot on the intersection, update all rows, and repeat until no improving reduced cost remains."
              ]} />
            </>
          ) : (
            <>
              <TheoryBox title="Reading slack and surplus">
                <p>{"For a capacity row $a^Tx\\leq b$, add slack $s\\geq0$ so $a^Tx+s=b$. For a minimum requirement $a^Tx\\geq b$, subtract surplus $s\\geq0$ so $a^Tx-s=b$. For example, $x_1+2x_2\\leq8$ becomes $x_1+2x_2+s_1=8$, while $x_1+x_2\\geq5$ becomes $x_1+x_2-s_2=5$."}</p>
                <p>{"Simplex standard form has equality constraints and nonnegative variables. Replace a free variable with $x_j=x_j^+-x_j^-$, where both parts are nonnegative. Check signs, right-hand sides, and bounds so the transformed model represents exactly the original feasible set."}</p>
              </TheoryBox>
              <ProcedureBox title="Build and verify an LP model" steps={[
                "Define each decision variable with its units and meaning.",
                "Write the objective from the per-unit contribution or cost.",
                "Translate every resource limit or minimum requirement into a separate linear row.",
                "Add variable bounds and substitute a candidate into every constraint.",
                "After confirming feasibility, compare objective values or use an optimization method."
              ]} />
            </>
          )}
        </section>

        {advanced && <section className="section" id={embedded ? `lp-tableau-${part}` : "lp-tableau"}>
          <h2 className="sec-title">Tableau algebra and pivot rules</h2>
          <TheoryBox title="Pivoting and the ratio test">
            <p>{"Choose an entering column that can improve the objective. The ratio test finds the first basic variable that reaches zero as the entering variable grows; that variable leaves. Divide the pivot row by its pivot entry, then eliminate the entering-column entries from every other constraint row and the objective row. These elementary row operations preserve the equations."}</p>
            <p>{"Only positive entries in the entering column limit an increase. Zero or negative entries do not impose an upper bound. If no constraint row has a positive entry, the improving direction is unbounded. At an optimal tableau, a zero reduced cost for a nonbasic variable may allow another optimum. A zero basic variable is degeneracy; a fixed tie rule such as Bland's rule prevents cycling."}</p>
          </TheoryBox>
          <TheoryBox title="Interpret and certify the answer">
            <p>{"Report original decision quantities, objective value, and units, then verify the point against the original constraints. Slack measures unused capacity and surplus measures excess above a minimum. A dual value (shadow price) estimates the local change in optimum per unit change in a constraint RHS while the current basis remains optimal."}</p>
            <p>{"Under $z-c^Tx=0$ for maximization, no negative reduced cost among nonbasic variables certifies that no adjacent feasible pivot can improve the objective. Other row-sign conventions reverse this sign test, not the underlying optimality idea."}</p>
          </TheoryBox>
        </section>}

        <section className="section" id={embedded ? `lp-examples-${part}` : "lp-examples"}>
          <h2 className="sec-title">Worked examples</h2>
          {advanced ? <>
            <WorkedExample number={2} title="Pivot to the best corner" setup={"Maximize $z=3x+2y$ subject to $x+y\\leq4$, $x\\leq2$, $y\\leq3$, and $x,y\\geq0$. Add slacks $s_1,s_2,s_3$."} steps={[
              "At the initial basis, $x=y=0$ and $(s_1,s_2,s_3)=(4,2,3)$. With objective row $z-3x-2y=0$, let $x$ enter.",
              "Positive entries in the $x$ column give ratios $4/1=4$ and $2/1=2$; the zero in the $y\\leq3$ row is excluded. Thus $s_2$ leaves and $x=2$.",
              "Next let $y$ enter. The limiting ratios are $2/1=2$ and $3/1=3$, so $s_1$ leaves and $y=2$.",
              "The resulting point is $(2,2)$; the remaining slack is $s_3=1$."
            ]} result={"The objective value is $z=3(2)+2(2)=10$."} check={"The constraints give $2+2=4$, $x=2$, and $y=2\\leq3$."} mistake={"Never use zero or negative entering-column values in the ratio test."} />
            <WorkedExample number={3} title="Feasible but unbounded objective" setup={"Maximize $z=x_1+x_2$ subject to $x_1-x_2\\leq1$ and $x_1,x_2\\geq0$."} steps={[
              "The point $(0,0)$ is feasible. Increase $x_2$ while holding $x_1=0$; then $-x_2\\leq1$ remains true.",
              "Along $(0,t)$ for any $t\\geq0$, the objective is $z=t$.",
              "The objective grows without a finite upper bound, even though the feasible set is nonempty."
            ]} result={"The LP is feasible, but its objective is unbounded."} check={"Unboundedness describes the objective over the feasible set, not simply the set's shape."} mistake={"A feasible starting point does not prove that a finite optimum exists."} />
          </> : <>
            <WorkedExample number={1} title="Model a production decision" setup={"A workshop makes items A and B. A earns 3 contribution units and B earns 2. Work time allows at most 4 total items; at most 2 can be A and at most 3 can be B."} steps={[
              "Let $x,y\\geq0$ be quantities of A and B.",
              "The objective is $\\max z=3x+2y$.",
              "Constraints are $x+y\\leq4$, $x\\leq2$, $y\\leq3$, and $x,y\\geq0$.",
              "The point $(2,2)$ is feasible and gives $z=3(2)+2(2)=10$."
            ]} result={"This builds the LP model. To prove $10$ is optimal, compare feasible vertices or use simplex."} check={"The objective coefficients are per-item contributions; RHS values are capacities."} mistake={"Feasibility and optimality are separate: a feasible point's objective value alone does not prove a maximum."} />
            <TheoryBox title="Vertex check for the example">
              <p>{"The feasible vertices are $(0,0)$, $(2,0)$, $(2,2)$, $(1,3)$, and $(0,3)$. Their objective values are $0,6,10,9,6$. Thus $(2,2)$ is optimal with value $10$. Larger models use simplex or another LP solver instead of graphing."}</p>
            </TheoryBox>
          </>}
        </section>

        {advanced ? <GuideMcqSection
          id="quiz-la-linear-programming-checkpoint"
          badge="Topic checkpoint · 20 questions"
          title="Linear Programming: The Simplex Method"
          scoreId="score-la-linear-programming-checkpoint"
          section="la-linear-programming-checkpoint"
          questions={LA_LINEAR_PROGRAMMING_QUIZ}
          onComplete={(score, total) => saveQuizScore("guide-mcq-la-linear-programming-checkpoint", score, total)}
        /> : !embedded && (<section className="section">
          <h2 className="sec-title">Continue to simplex pivots</h2>
          <p>Part 2 constructs a basis, applies ratio tests, and examines optimality and special cases.</p>
          <Link to="/linear-algebra/linear-programming-simplex/2">Continue to Part 2 →</Link>
        </section>)}
      </div>
  );
  if (embedded) return content;
  return (
    <StudyGuideShell key={part} guideClass="partial-derivatives-guide" title={"Linear Programming: The Simplex Method (Part " + part + ")"}>
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Linear Programming</div></div>
        <a className="sb-link" href="#lp-model">Model and feasible region</a>
        <a className="sb-link" href="#lp-standard-form">Standard form</a>
        {advanced && <a className="sb-link" href="#lp-tableau">Tableau and pivots</a>}
        <a className="sb-link" href="#lp-examples">Worked examples</a>
        {advanced && <a className="sb-link" href="#quiz-la-linear-programming-checkpoint">Quiz</a>}
        <Link className="sb-link" to="/linear-algebra/overview">Course overview</Link>
      </nav>
      {content}
    </StudyGuideShell>
  );
}
