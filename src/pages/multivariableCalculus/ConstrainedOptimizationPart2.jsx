import StudyGuideShell from "../courses/StudyGuideShell";
import "./PartialDerivativesGuide.css";

import GlobalExtremaBoundedDomainsGuide from "./GlobalExtremaBoundedDomainsGuide";
import { GradientDescentNumericalOptimizationGuide } from "./GradientDescentNumericalOptimizationGuide";

function Divider() {
  return <hr className="divider" />;
}

/* =========================
   PART 2 SIDEBAR
========================= */

function GuideSidebarPart2() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>

        <div className="sb-title">
          Constrained &amp; Unconstrained Optimization
        </div>
      </div>

      <div className="sb-group">PART 2</div>

      {/* Topic 3 */}
      <a className="sb-link" href="#global-opening">
        Global Extrema on Bounded Domains
      </a>

      <a className="sb-link" href="#global-10">
        Worked Examples
      </a>

      <a className="sb-link" href="#mcq-global-extrema">
        Quiz (20 Questions)
      </a>

      {/* Topic 4 */}
      <a className="sb-link" href="#gradient-opening">
        Gradient Descent &amp; Numerical Optimization
      </a>

      <a className="sb-link" href="#gradient-5">
        Worked Examples
      </a>

      <a className="sb-link" href="#mcq-gradient-descent">
        Quiz (20 Questions)
      </a>

      <div className="sb-group">PART 1</div>

      <a
        className="sb-link"
        href="/constrained-unconstrained-optimization/1"
      >
        ← Back to Part 1
      </a>
    </nav>
  );
}

/* =========================
   PART 2 HEADER
========================= */

function GuideHeaderPart2() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">
        Constrained &amp; Unconstrained Optimization · Part 2
      </div>

      <h1 className="ch-title">
        Global Extrema on Bounded Domains
      </h1>

      <p className="ch-sub">
        Absolute extrema, compact domains, boundary analysis, candidate
        enumeration, numerical optimization, gradient descent, and
        computational methods
      </p>

      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
    </header>
  );
}

/* =========================
   PART 2 TABLE OF CONTENTS
========================= */

function TableOfContentsPart2() {
  return (
    <nav className="toc">
      <div className="toc-h">
        Contents — Part 2 of 2
      </div>

      <div className="toc-grid">
        {/* ==================================
            TOPIC 3
            GLOBAL EXTREMA
        ================================== */}

        <a className="toc-a" href="#global-opening">
          Global Extrema on Bounded Domains
        </a>

        <a className="toc-a" href="#global-1">
          Local Versus Global Extrema
        </a>

        <a className="toc-a" href="#global-2">
          Extreme Value Theorem
        </a>

        <a className="toc-a" href="#global-3">
          Closed, Bounded, Compact Sets
        </a>

        <a className="toc-a" href="#global-4">
          Where Global Extrema Can Occur
        </a>

        <a className="toc-a" href="#global-5">
          Interior Critical Points
        </a>

        <a className="toc-a" href="#global-6">
          Boundary Analysis by Parameterization
        </a>

        <a className="toc-a" href="#global-7">
          Boundary Analysis with Lagrange Multipliers
        </a>

        <a className="toc-a" href="#global-8">
          Corners, Vertices, Nonsmooth Boundary Points
        </a>

        <a className="toc-a" href="#global-9">
          Complete Candidate-Enumeration Method
        </a>

        <a className="toc-a" href="#global-10">
          Worked Examples
        </a>

        <a className="toc-a" href="#global-11">
          Worked Example — Quadratic on Closed Disk
        </a>

        <a className="toc-a" href="#global-12">
          Worked Example — Rectangle with Interior and Boundary Candidates
        </a>

        <a className="toc-a" href="#global-13">
          Worked Example — Triangle Domain
        </a>

        <a className="toc-a" href="#global-14">
          Boundary Parameterization in Detail
        </a>

        <a className="toc-a" href="#global-15">
          Nondifferentiable Points and Singularities
        </a>

        <a className="toc-a" href="#global-16">
          Global Extrema and KKT Conditions
        </a>

        <a className="toc-a" href="#global-17">
          Uniqueness, Multiple Extrema, and Ties
        </a>

        <a className="toc-a" href="#global-18">
          Convexity and Global Optimization
        </a>

        <a className="toc-a" href="#global-19">
          Why Boundedness Matters
        </a>

        <a className="toc-a" href="#global-20">
          Global-Extrema Checklist and Key Strategy
        </a>

        <a className="toc-a" href="#mcq-global-extrema">
          Quiz (20 Questions)
        </a>

        {/* ==================================
            TOPIC 4
            GRADIENT DESCENT
        ================================== */}

        <a className="toc-a" href="#gradient-opening">
          Gradient Descent &amp; Numerical Optimization
        </a>

        <a className="toc-a" href="#gradient-1">
          Why Numerical Optimization Is Needed
        </a>

        <a className="toc-a" href="#gradient-2">
          The Gradient as the Local Direction of Steepest Increase
        </a>

        <a className="toc-a" href="#gradient-3">
          Deriving the Gradient-Descent Update
        </a>

        <a className="toc-a" href="#gradient-4">
          Choosing the Step Size
        </a>

        <a className="toc-a" href="#gradient-5">
          Worked Example — One-Dimensional Descent
        </a>

        <a className="toc-a" href="#gradient-6">
          Worked Example — Two-Variable Gradient Descent
        </a>

        <a className="toc-a" href="#gradient-7">
          Gradient Norm and Stopping Criteria
        </a>

        <a className="toc-a" href="#gradient-8">
          Convexity and Global Convergence
        </a>

        <a className="toc-a" href="#gradient-9">
          Strong Convexity and Rates of Progress
        </a>

        <a className="toc-a" href="#gradient-10">
          Momentum Methods
        </a>

        <a className="toc-a" href="#gradient-11">
          Line Search
        </a>

        <a className="toc-a" href="#gradient-12">
          Newton's Method for Optimization
        </a>

        <a className="toc-a" href="#gradient-13">
          Quasi-Newton Ideas and Hessian Approximation
        </a>

        <a className="toc-a" href="#gradient-14">
          Conditioning and Zig-Zag Behavior
        </a>

        <a className="toc-a" href="#gradient-15">
          Stochastic and Mini-Batch Optimization
        </a>

        <a className="toc-a" href="#gradient-16">
          Constraints in Numerical Optimization
        </a>

        <a className="toc-a" href="#gradient-17">
          Gradient Descent Versus Newton's Method
        </a>

        <a className="toc-a" href="#gradient-18">
          Common Numerical Failure Modes
        </a>

        <a className="toc-a" href="#gradient-19">
          Complete Numerical Optimization Workflow
        </a>

        <a className="toc-a" href="#gradient-20">
          Key Formulas and Final Strategy
        </a>

        <a className="toc-a" href="#mcq-gradient-descent">
          Quiz (20 Questions)
        </a>
      </div>
    </nav>
  );
}

/* =========================
   PART 2 FOOTER
========================= */

function GuideFooterPart2() {
  return (
    <div className="pg-foot">
      <p>
        Constrained &amp; Unconstrained Optimization · Part 2 of 2
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
          href="/constrained-unconstrained-optimization/1"
          className="guide-nav-button"
        >
          ← Back to Part 1
        </a>

        <a
          href="#gradient-opening"
          className="guide-nav-button"
        >
          ↑ Back to Gradient Descent &amp; Numerical Optimization
        </a>
      </div>
    </div>
  );
}

/* =========================
   PART 2 CONTENT
========================= */

function ConstrainedOptimizationPart2Content() {
  return (
    <>
      <GuideSidebarPart2 />

      <main className="main">
        <GuideHeaderPart2 />

        <TableOfContentsPart2 />

        {/* ==================================
            TOPIC 3 RENDER
        ================================== */}

        <GlobalExtremaBoundedDomainsGuide />

        <Divider />

        {/* ==================================
            TOPIC 4 RENDER
        ================================== */}

        <GradientDescentNumericalOptimizationGuide />

        <GuideFooterPart2 />
      </main>
    </>
  );
}

/* =========================
   FINAL PAGE COMPONENT
========================= */

export default function ConstrainedOptimizationPart2() {
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Constrained & Unconstrained Optimization — Part 2"
    >
      <ConstrainedOptimizationPart2Content />
    </StudyGuideShell>
  );
}