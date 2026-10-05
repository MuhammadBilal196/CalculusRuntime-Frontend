import StudyGuideShell from "../courses/StudyGuideShell";
import "./PartialDerivativesGuide.css";

import ImplicitFunctionTheoremGuide from "./ImplicitFunctionTheoremGuide";

function GuideSidebarPart2() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">
          Vector Fields &amp; Approximation Theory
        </div>
      </div>

      <div className="sb-group">PART 2</div>

      {/* Topic 3 */}
      <a
        className="sb-link"
        href="#implicit-function-opening"
      >
        Implicit Function Theorem
      </a>

      <a
        className="sb-link"
        href="#implicit-function-5"
      >
        Worked Examples
      </a>

      <a
        className="sb-link"
        href="#mcq-implicit-function-theorem"
      >
        Quiz (20 Questions)
      </a>

      {/* Topic 4 — will be added to this same page */}
      <a
        className="sb-link"
        href="/vector-fields-approximation/2"
      >
        Directional Derivatives in n Dimensions
      </a>

      <div className="sb-group">PART 1</div>

      <a
        className="sb-link"
        href="/vector-fields-approximation/1"
      >
        Vector Potentials
      </a>

      <a
        className="sb-link"
        href="/vector-fields-approximation/1"
      >
        Multivariable Taylor Series &amp; Second-Order Approximation
      </a>
    </nav>
  );
}

function GuideHeaderPart2() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">
        Vector Fields &amp; Approximation Theory · Part 2
      </div>

      <h1 className="ch-title">
        Implicit Function Theorem
      </h1>

      <p className="ch-sub">
        Local implicit representations, regular level sets, implicit
        differentiation, multivariable formulations, geometric meaning,
        applications, and key formulas
      </p>

      <span className="ch-orn">
        ✦ &nbsp; ✦ &nbsp; ✦
      </span>
    </header>
  );
}

function TableOfContentsPart2() {
  return (
    <nav className="toc">
      <div className="toc-h">
        Contents — Part 2 of 2
      </div>

      <div className="toc-grid">
        <a className="toc-a" href="#implicit-function-opening">
          Implicit Function Theorem
        </a>

        <a className="toc-a" href="#implicit-function-1">
          Explicit and Implicit Relationships
        </a>

        <a className="toc-a" href="#implicit-function-2">
          The Local Nature of the Theorem
        </a>

        <a className="toc-a" href="#implicit-function-3">
          Why the Partial Derivative Must Be Nonzero
        </a>

        <a className="toc-a" href="#implicit-function-4">
          Deriving the Implicit Derivative Formula
        </a>

        <a className="toc-a" href="#implicit-function-5">
          Worked Example — Circle
        </a>

        <a className="toc-a" href="#implicit-function-6">
          Level Curves and the Gradient
        </a>

        <a className="toc-a" href="#implicit-function-7">
          Regular Level Sets
        </a>

        <a className="toc-a" href="#implicit-function-8">
          Worked Example — Linear Equation
        </a>

        <a className="toc-a" href="#implicit-function-9">
          Solving for z in Three Variables
        </a>

        <a className="toc-a" href="#implicit-function-10">
          Partial Derivatives of an Implicit Function
        </a>

        <a className="toc-a" href="#implicit-function-11">
          Worked Example — Sphere
        </a>

        <a className="toc-a" href="#implicit-function-12">
          The Jacobian Perspective
        </a>

        <a className="toc-a" href="#implicit-function-13">
          What Happens When F_y = 0?
        </a>

        <a className="toc-a" href="#implicit-function-14">
          Worked Example — Choosing the Dependent Variable
        </a>

        <a className="toc-a" href="#implicit-function-15">
          Local Uniqueness
        </a>

        <a className="toc-a" href="#implicit-function-16">
          Applications
        </a>

        <a className="toc-a" href="#implicit-function-17">
          Common Mistakes
        </a>

        <a className="toc-a" href="#implicit-function-18">
          Key Formulas and Complete Workflow
        </a>

        <a
          className="toc-a"
          href="#mcq-implicit-function-theorem"
        >
          Quiz (20 Questions)
        </a>
      </div>
    </nav>
  );
}

function GuideFooterPart2() {
  return (
    <div className="pg-foot">
      <p>
        Vector Fields &amp; Approximation Theory · Part 2 of 2
      </p>

      <div
        className="guide-navigation"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <a
          href="/vector-fields-approximation/1"
          className="guide-nav-button"
        >
          ← Back to Part 1
        </a>

        <a
          href="#implicit-function-opening"
          className="guide-nav-button"
        >
          ↑ Back to Implicit Function Theorem
        </a>
      </div>
    </div>
  );
}

function VectorFieldsApproximationPart2Content() {
  return (
    <>
      <GuideSidebarPart2 />

      <main className="main">
        <GuideHeaderPart2 />
        <TableOfContentsPart2 />
        <ImplicitFunctionTheoremGuide />
        <GuideFooterPart2 />
      </main>
    </>
  );
}

export default function VectorFieldsApproximationPart2() {
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Vector Fields & Approximation Theory — Part 2"
    >
      <VectorFieldsApproximationPart2Content />
    </StudyGuideShell>
  );
}