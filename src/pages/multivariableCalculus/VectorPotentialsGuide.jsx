import { GuideMcqSection } from "../../components/GuideMcq";
import { MV_VECTOR_POTENTIALS_QUIZ } from "../../data/mvVectorPotentialsQuiz";
import { RealLifeUse } from "../calculus/CalcBlocks";

function Divider() {
  return <hr className="divider" />;
}

function VectorPotentialsOpening() {
  return (
    <div className="opening-note-box">
      <p className="opening-note">
        <strong>Operational Blueprint:</strong> A vector potential is a vector
        field whose curl produces a given vector field. This representation is
        especially important for divergence-free fields because the divergence
        of every curl is identically zero. The construction is not generally
        unique: adding the gradient of any sufficiently smooth scalar field
        leaves the curl unchanged. This guide develops the existence condition,
        construction techniques, gauge freedom, geometric interpretation,
        worked examples, domain topology, and practical applications of vector
        potentials.
      </p>
    </div>
  );
}

export default function VectorPotentialsGuide() {
  return (
    <>
      <VectorPotentialsOpening />

      <Divider />

      {/* =========================================
          SECTION 1
      ========================================= */}

      <section className="section" id="vector-potential-opening">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          1. What Is a Vector Potential?
        </h2>

        <p>
          Let
          {" "}
          <strong>F</strong>
          {" "}
          be a vector field in three-dimensional space. A vector potential for
          F is another vector field
          {" "}
          <strong>A</strong>
          {" "}
          satisfying
        </p>

        <div className="fml">
          {String.raw`$$
\nabla\times\mathbf A=\mathbf F.
$$`}
        </div>

        <div className="box def">
          <div className="box-lbl">
            Definition — Vector Potential
          </div>

          <p>
            A vector field
            {" "}
            <strong>A</strong>
            {" "}
            is called a vector potential of
            {" "}
            <strong>F</strong>
            {" "}
            if
          </p>

          <div className="fml">
            {String.raw`$$
\boxed{
\nabla\times\mathbf A=\mathbf F
}
$$`}
          </div>
        </div>

        <p>
          This is the vector-field analogue of a scalar potential relation, but
          the operation is different. A scalar potential produces a field
          through a gradient, while a vector potential produces a field through
          a curl.
        </p>

        <div className="box">
          <p>
            <strong>Scalar potential:</strong>
            {" "}
            F = ∇φ
          </p>

          <p>
            <strong>Vector potential:</strong>
            {" "}
            F = ∇×A
          </p>
        </div>
      </section>

      <Divider />

      {/* =========================================
          SECTION 2
      ========================================= */}

      <section className="section" id="vector-potential-1">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          2. The Curl Operator
        </h2>

        <p>
          Write the vector potential as
        </p>

        <div className="fml">
          {String.raw`$$
\mathbf A
=
\langle
P,Q,R
\rangle.
$$`}
        </div>

        <p>
          Then its curl is
        </p>

        <div className="fml">
          {String.raw`$$
\nabla\times\mathbf A
=
\left\langle
R_y-Q_z,\,
P_z-R_x,\,
Q_x-P_y
\right\rangle.
$$`}
        </div>

        <div className="box thm">
          <div className="box-lbl">
            Vector-Potential Equation
          </div>

          <p>
            To find a vector potential for
            {" "}
            <strong>F = ⟨F₁,F₂,F₃⟩</strong>,
            {" "}
            solve
          </p>

          <div className="fml">
            {String.raw`$$
R_y-Q_z=F_1,
\qquad
P_z-R_x=F_2,
\qquad
Q_x-P_y=F_3.
$$`}
          </div>
        </div>
      </section>

      <Divider />

      {/* =========================================
          SECTION 3
      ========================================= */}

      <section className="section" id="vector-potential-2">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          3. The Fundamental Divergence Condition
        </h2>

        <p>
          Every curl has zero divergence. The identity is
        </p>

        <div className="fml">
          {String.raw`$$
\nabla\cdot(\nabla\times\mathbf A)=0.
$$`}
        </div>

        <p>
          Therefore, if
        </p>

        <div className="fml">
          {String.raw`$$
\mathbf F=\nabla\times\mathbf A,
$$`}
        </div>

        <p>
          then necessarily
        </p>

        <div className="fml">
          {String.raw`$$
\boxed{
\nabla\cdot\mathbf F=0
}
$$`}
        </div>

        <div className="box thm">
          <div className="box-lbl">
            Necessary Condition
          </div>

          <p>
            A vector field that possesses a vector potential must be
            divergence-free.
          </p>
        </div>

        <p>
          This condition immediately gives a powerful diagnostic test. Before
          trying to construct a vector potential, compute the divergence.
        </p>
      </section>

      <Divider />

      {/* =========================================
          SECTION 4
      ========================================= */}

      <section className="section" id="vector-potential-3">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          4. Divergence-Free Is Necessary, but Topology Also Matters
        </h2>

        <p>
          The condition
          {" "}
          <strong>∇·F=0</strong>
          {" "}
          is necessary, but global existence can depend on the geometry and
          topology of the domain.
        </p>

        <p>
          A domain with holes can behave differently from a simply connected
          region. Global potential constructions may require additional
          topological assumptions.
        </p>

        <div className="box note">
          <div className="box-lbl">
            Important Distinction
          </div>

          <p>
            Do not confuse a local differential condition with a global
            topological conclusion. Divergence-free behavior is local, while
            existence of a globally defined potential can depend on the domain.
          </p>
        </div>

        <p>
          In many standard multivariable-calculus exercises, the domain is
          simply connected and the construction can proceed directly.
        </p>
      </section>

      <Divider />

      {/* =========================================
          SECTION 5
      ========================================= */}

      <section className="section" id="vector-potential-4">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          5. A First Construction Strategy
        </h2>

        <p>
          To construct a vector potential, write
        </p>

        <div className="fml">
          {String.raw`$$
\mathbf A=\langle P,Q,R\rangle
$$`}
        </div>

        <p>
          and impose the equations
        </p>

        <div className="fml">
          {String.raw`$$
R_y-Q_z=F_1,
\qquad
P_z-R_x=F_2,
\qquad
Q_x-P_y=F_3.
$$`}
        </div>

        <p>
          There is freedom in choosing
          {" "}
          <strong>P,Q,R</strong>.
          {" "}
          That freedom is useful because it allows us to set one component to a
          convenient expression, then integrate the remaining equations.
        </p>

        <div className="box thm">
          <div className="box-lbl">
            Practical Construction
          </div>

          <ol>
            <li>Check that div(F)=0.</li>
            <li>Choose a convenient component of A.</li>
            <li>Use the curl equations to solve for the remaining components.</li>
            <li>Differentiate the resulting field and verify curl(A)=F.</li>
          </ol>
        </div>
      </section>

      <Divider />

      {/* =========================================
          SECTION 6
      ========================================= */}

      <section className="section" id="vector-potential-5">
        <div className="sec-badge">Worked Example</div>

        <h2 className="sec-title">
          6. Worked Example — Constant Vertical Field
        </h2>

        <div className="box exm">
          <div className="box-lbl">
            Example
          </div>

          <div className="exm-title">
            Find a vector potential for F = ⟨0,0,c⟩
          </div>

          <p>
            Let
            {" "}
            <strong>c</strong>
            {" "}
            be a constant.
          </p>

          <div className="sol">
            <div className="sol-lbl">
              Solution
            </div>

            <p>
              First check divergence:
            </p>

            <div className="fml">
              {String.raw`$$
\nabla\cdot\mathbf F
=
0+0+0
=
0.
$$`}
            </div>

            <p>
              So the necessary divergence-free condition is satisfied.
            </p>

            <p>
              Choose
            </p>

            <div className="fml">
              {String.raw`$$
\mathbf A
=
\left\langle
-\frac{cy}{2},
\frac{cx}{2},
0
\right\rangle.
$$`}
            </div>

            <p>
              Now compute the curl:
            </p>

            <div className="fml">
              {String.raw`$$
\nabla\times\mathbf A
=
\left\langle
0,0,
\frac{\partial}{\partial x}\left(\frac{cx}{2}\right)
-
\frac{\partial}{\partial y}\left(-\frac{cy}{2}\right)
\right\rangle.
$$`}
            </div>

            <div className="fml">
              {String.raw`$$
=
\langle 0,0,c/2+c/2\rangle
=
\langle0,0,c\rangle.
$$`}
            </div>

            <p>
              Therefore
            </p>

            <div className="fml">
              {String.raw`$$
\boxed{
\mathbf A
=
\left\langle
-\frac{cy}{2},
\frac{cx}{2},
0
\right\rangle
}
$$`}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* =========================================
          SECTION 7
      ========================================= */}

      <section className="section" id="vector-potential-6">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          7. Worked Example — A Field with Polynomial Components
        </h2>

        <div className="box exm">
          <div className="box-lbl">
            Example
          </div>

          <div className="exm-title">
            Find a vector potential for F = ⟨0,0,2x⟩
          </div>

          <div className="sol">
            <div className="sol-lbl">
              Solution
            </div>

            <p>
              We want
            </p>

            <div className="fml">
              {String.raw`$$
\nabla\times\mathbf A
=
\langle0,0,2x\rangle.
$$`}
            </div>

            <p>
              Choose
            </p>

            <div className="fml">
              {String.raw`$$
\mathbf A
=
\langle0,x^2,0\rangle.
$$`}
            </div>

            <p>
              Then
            </p>

            <div className="fml">
              {String.raw`$$
\nabla\times\mathbf A
=
\left\langle
0,0,
\frac{\partial}{\partial x}(x^2)
\right\rangle
=
\langle0,0,2x\rangle.
$$`}
            </div>

            <p>
              Hence this is a valid vector potential.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* =========================================
          SECTION 8
      ========================================= */}

      <section className="section" id="vector-potential-7">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          8. A Systematic Component-by-Component Construction
        </h2>

        <p>
          Suppose
        </p>

        <div className="fml">
          {String.raw`$$
\mathbf F
=
\langle
F_1,F_2,F_3
\rangle.
$$`}
        </div>

        <p>
          Set
        </p>

        <div className="fml">
          {String.raw`$$
\mathbf A
=
\langle P,Q,R\rangle.
$$`}
        </div>

        <p>
          One useful strategy is to choose one component, such as
          {" "}
          <strong>R=0</strong>,
          {" "}
          when that simplifies the equations.
        </p>

        <p>
          Then the curl equations reduce to
        </p>

        <div className="fml">
          {String.raw`$$
-Q_z=F_1,
\qquad
P_z=F_2,
\qquad
Q_x-P_y=F_3.
$$`}
        </div>

        <p>
          Integrating the first two equations can produce
          {" "}
          <strong>P</strong>
          {" "}
          and
          {" "}
          <strong>Q</strong>.
          {" "}
          The remaining equation then determines any compatibility terms.
        </p>

        <div className="box note">
          <div className="box-lbl">
            Verification Rule
          </div>

          <p>
            Never stop after obtaining a candidate. Compute its curl explicitly
            and verify that the result is exactly the original field.
          </p>
        </div>
      </section>

      <Divider />

      {/* =========================================
          SECTION 9
      ========================================= */}

      <section className="section" id="vector-potential-8">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          9. Gauge Freedom
        </h2>

        <p>
          Suppose
        </p>

        <div className="fml">
          {String.raw`$$
\nabla\times\mathbf A
=
\mathbf F.
$$`}
        </div>

        <p>
          Let
          {" "}
          <strong>φ</strong>
          {" "}
          be any sufficiently smooth scalar field. Define
        </p>

        <div className="fml">
          {String.raw`$$
\widetilde{\mathbf A}
=
\mathbf A+\nabla\phi.
$$`}
        </div>

        <p>
          Then
        </p>

        <div className="fml">
          {String.raw`$$
\nabla\times\widetilde{\mathbf A}
=
\nabla\times\mathbf A
+
\nabla\times(\nabla\phi).
$$`}
        </div>

        <p>
          Because
        </p>

        <div className="fml">
          {String.raw`$$
\nabla\times(\nabla\phi)=0,
$$`}
        </div>

        <p>
          we obtain
        </p>

        <div className="fml">
          {String.raw`$$
\boxed{
\nabla\times\widetilde{\mathbf A}
=
\mathbf F
}.
$$`}
        </div>

        <div className="box thm">
          <div className="box-lbl">
            Gauge Freedom
          </div>

          <p>
            A vector potential is generally not unique. Infinitely many
            different vector potentials can represent the same vector field.
          </p>
        </div>
      </section>

      <Divider />

      {/* =========================================
          SECTION 10
      ========================================= */}

      <section className="section" id="vector-potential-9">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          10. Worked Example — Demonstrating Gauge Freedom
        </h2>

        <div className="box exm">
          <div className="box-lbl">
            Example
          </div>

          <div className="exm-title">
            Produce a second potential from a known one
          </div>

          <p>
            Start with
          </p>

          <div className="fml">
            {String.raw`$$
\mathbf A
=
\langle-y,x,0\rangle.
$$`}
          </div>

          <p>
            Since
          </p>

          <div className="fml">
            {String.raw`$$
\nabla\times\mathbf A
=
\langle0,0,2\rangle,
$$`}
          </div>

          <p>
            choose the scalar field
          </p>

          <div className="fml">
            {String.raw`$$
\phi(x,y,z)=x^2+y^2.
$$`}
          </div>

          <p>
            Then
          </p>

          <div className="fml">
            {String.raw`$$
\nabla\phi
=
\langle2x,2y,0\rangle.
$$`}
          </div>

          <p>
            Therefore another vector potential is
          </p>

          <div className="fml">
            {String.raw`$$
\widetilde{\mathbf A}
=
\langle-y+2x,\,
x+2y,\,
0\rangle.
$$`}
          </div>

          <p>
            Both
            {" "}
            <strong>A</strong>
            {" "}
            and
            {" "}
            <strong>Ã</strong>
            {" "}
            have the same curl.
          </p>
        </div>
      </section>

      <Divider />

      {/* =========================================
          SECTION 11
      ========================================= */}

      <section className="section" id="vector-potential-10">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          11. Vector Potentials and Conservative Fields Are Different Ideas
        </h2>

        <p>
          Two concepts are often confused:
        </p>

        <div className="box">
          <p>
            A field with
            {" "}
            <strong>curl F = 0</strong>
            {" "}
            is associated with a scalar potential under appropriate topological
            assumptions.
          </p>

          <p>
            A field with
            {" "}
            <strong>div F = 0</strong>
            {" "}
            is the natural candidate for a vector-potential representation.
          </p>
        </div>

        <div className="fml">
          {String.raw`$$
\text{Scalar potential: }
\mathbf F=\nabla\phi
$$`}
        </div>

        <div className="fml">
          {String.raw`$$
\text{Vector potential: }
\mathbf F=\nabla\times\mathbf A.
$$`}
        </div>

        <div className="box note">
          <div className="box-lbl">
            Do Not Mix Them Up
          </div>

          <p>
            Curl-free and divergence-free describe different differential
            structures. One points toward gradient representations; the other
            points toward curl representations.
          </p>
        </div>
      </section>

      <Divider />

      {/* =========================================
          SECTION 12
      ========================================= */}

      <section className="section" id="vector-potential-11">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          12. Geometric Meaning of a Vector Potential
        </h2>

        <p>
          The curl measures local circulation. Therefore,
        {" "}
        <strong>F = curl(A)</strong>
        {" "}
        means that F describes the rotational density generated by A.
        The vector potential is not simply a convenient algebraic trick.
      </p>

        <p>
          Geometrically, the line integral
        </p>

        <div className="fml">
          {String.raw`$$
\oint_C \mathbf A\cdot d\mathbf r
$$`}
        </div>

        <p>
          measures circulation of the potential around a closed curve. By
          Stokes' Theorem,
        </p>

        <div className="fml">
          {String.raw`$$
\oint_C\mathbf A\cdot d\mathbf r
=
\iint_S
(\nabla\times\mathbf A)\cdot\mathbf n\,dS.
$$`}
        </div>

        <p>
          Therefore if
          {" "}
          <strong>F = curl(A)</strong>,
          {" "}
          then
        </p>

        <div className="fml">
          {String.raw`$$
\oint_C\mathbf A\cdot d\mathbf r
=
\iint_S
\mathbf F\cdot\mathbf n\,dS.
$$`}
        </div>

        <p>
          This creates a direct bridge between a vector potential and flux of
          the represented field.
        </p>
      </section>

      <Divider />

      {/* =========================================
          SECTION 13
      ========================================= */}

      <section className="section" id="vector-potential-12">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          13. Connection to Surface Flux
        </h2>

        <p>
          If
        {" "}
        <strong>F = curl(A)</strong>,
        {" "}
        Stokes' Theorem gives
        </p>

        <div className="fml">
          {String.raw`$$
\iint_S\mathbf F\cdot\mathbf n\,dS
=
\oint_{\partial S}\mathbf A\cdot d\mathbf r.
$$`}
        </div>

        <div className="box thm">
          <div className="box-lbl">
            Interpretation
          </div>

          <p>
            The flux of a divergence-free field through a surface can be
            represented as circulation of a vector potential around the
            boundary.
          </p>
        </div>

        <p>
          This relation is one reason vector potentials are so useful in vector
          calculus: they can transform a surface-flux problem into a boundary
          line-integral problem.
        </p>
      </section>

      <Divider />

      {/* =========================================
          SECTION 14
      ========================================= */}

      <section className="section" id="vector-potential-13">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          14. Worked Example — Using Stokes' Theorem
        </h2>

        <div className="box exm">
          <div className="box-lbl">
            Example
          </div>

          <div className="exm-title">
            Convert flux using a vector potential
          </div>

          <p>
            Suppose
          </p>

          <div className="fml">
            {String.raw`$$
\mathbf F=\nabla\times\mathbf A.
$$`}
          </div>

          <p>
            For an oriented surface S with boundary
            {" "}
            <strong>∂S</strong>,
          </p>

          <div className="fml">
            {String.raw`$$
\iint_S\mathbf F\cdot\mathbf n\,dS
=
\iint_S
(\nabla\times\mathbf A)\cdot\mathbf n\,dS.
$$`}
          </div>

          <p>
            Stokes' Theorem gives
          </p>

          <div className="fml">
            {String.raw`$$
\boxed{
\iint_S\mathbf F\cdot\mathbf n\,dS
=
\oint_{\partial S}\mathbf A\cdot d\mathbf r
}.
$$`}
          </div>

          <p>
            Thus the problem can be solved on the boundary instead of directly
            across the surface.
          </p>
        </div>
      </section>

      <Divider />

      {/* =========================================
          SECTION 15
      ========================================= */}

      <section className="section" id="vector-potential-14">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          15. Gauge Choices and Simplification
        </h2>

        <p>
          Since infinitely many vector potentials can represent the same field,
          we can sometimes choose the one that makes calculations easiest.
        </p>

        <div className="box">
          <p>
            A convenient gauge may:
          </p>

          <ul>
            <li>Eliminate an inconvenient component.</li>
            <li>Make symmetry visible.</li>
            <li>Simplify differential equations.</li>
            <li>Reduce algebraic complexity.</li>
          </ul>
        </div>

        <p>
          In mathematical and physical applications, a gauge is therefore not
          just an arbitrary decoration. It can be selected strategically.
        </p>
      </section>

      <Divider />

      {/* =========================================
          SECTION 16
      ========================================= */}

      <section className="section" id="vector-potential-15">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          16. Applications of Vector Potentials
        </h2>

        <p>
          Vector potentials appear throughout mathematical physics and applied
          mathematics.
        </p>

        <div className="box">
          <p>
            <strong>Electromagnetism:</strong> magnetic fields can be represented
            using magnetic vector potentials.
          </p>

          <p>
            <strong>Fluid mechanics:</strong> divergence-free velocity fields can
            be represented using vector potentials in suitable settings.
          </p>

          <p>
            <strong>Geometry:</strong> vector potentials connect differential
            operators, circulation, and surface flux.
          </p>

          <p>
            <strong>Computational physics:</strong> potential-based formulations
            can simplify systems with divergence constraints.
          </p>
        </div>

        <RealLifeUse>
          Vector potentials are especially useful in electromagnetism and fluid
          mechanics because many physically important fields are divergence-free.
          A potential representation can encode that structure automatically.
        </RealLifeUse>
      </section>

      <Divider />

      {/* =========================================
          SECTION 17
      ========================================= */}

      <section className="section" id="vector-potential-16">
        <div className="sec-badge">Section</div>

        <h2 className="sec-title">
          17. Common Mistakes and Diagnostic Checks
        </h2>

        <div className="box note">
          <div className="box-lbl">
            Common Mistakes
          </div>

          <p>
            <strong>Mistake 1:</strong> Checking curl(F) instead of div(F) before
            searching for a vector potential.
          </p>

          <p>
            <strong>Mistake 2:</strong> Assuming the vector potential is unique.
          </p>

          <p>
            <strong>Mistake 3:</strong> Forgetting that curl(gradient)=0.
          </p>

          <p>
            <strong>Mistake 4:</strong> Finding a candidate A but never checking
            curl(A).
          </p>

          <p>
            <strong>Mistake 5:</strong> Confusing a vector potential with a
            scalar potential.
          </p>

          <p>
            <strong>Mistake 6:</strong> Ignoring the topology of the domain when
            making a global existence claim.
          </p>

          <p>
            <strong>Mistake 7:</strong> Losing track of orientation when applying
            Stokes' Theorem.
          </p>
        </div>
      </section>

      <Divider />

      {/* =========================================
          SECTION 18
      ========================================= */}

      <section className="section" id="vector-potential-17">
        <div className="sec-badge">Reference</div>

        <h2 className="sec-title">
          18. Complete Vector-Potential Strategy and Key Formulas
        </h2>

        <div className="fml">
          {String.raw`$$
\mathbf F=\nabla\times\mathbf A
$$`}
        </div>

        <div className="fml">
          {String.raw`$$
\nabla\cdot\mathbf F=0
$$`}
        </div>

        <div className="fml">
          {String.raw`$$
\nabla\times(\nabla\phi)=0
$$`}
        </div>

        <div className="fml">
          {String.raw`$$
\widetilde{\mathbf A}
=
\mathbf A+\nabla\phi
$$`}
        </div>

        <div className="fml">
          {String.raw`$$
\nabla\times\widetilde{\mathbf A}
=
\nabla\times\mathbf A
=
\mathbf F
$$`}
        </div>

        <div className="fml">
          {String.raw`$$
\iint_S\mathbf F\cdot\mathbf n\,dS
=
\oint_{\partial S}
\mathbf A\cdot d\mathbf r
$$`}
        </div>

        <div className="box thm">
          <div className="box-lbl">
            Final Workflow
          </div>

          <ol>
            <li>
              Compute div(F).
            </li>

            <li>
              Verify the field is divergence-free.
            </li>

            <li>
              Write A=⟨P,Q,R⟩.
            </li>

            <li>
              Solve curl(A)=F.
            </li>

            <li>
              Use gauge freedom to simplify if useful.
            </li>

            <li>
              Verify the final potential directly.
            </li>

            <li>
              Use Stokes' Theorem when a surface-flux problem can be reduced to
              a boundary circulation.
            </li>
          </ol>
        </div>
      </section>

      <Divider />

      {/* =========================================
          QUIZ
      ========================================= */}

      <GuideMcqSection
        id="mcq-vector-potentials"
        badge="Practice"
        title="Vector Potentials — 20-Question Quiz"
        scoreId="score-vector-potentials"
        section="vector-potentials"
        questions={MV_VECTOR_POTENTIALS_QUIZ}
      />
    </>
  );
}