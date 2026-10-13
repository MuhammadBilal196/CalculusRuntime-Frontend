import StudyGuideShell from "../courses/StudyGuideShell";
import "./PartialDerivativesGuide.css";

import VectorPotentialsGuide from "./VectorPotentialsGuide";
import MultivariableTaylorSeriesGuide from "./MultivariableTaylorSeriesGuide";

function GuideSidebarPart1() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">
          Vector Fields &amp; Approximation Theory
        </div>
      </div>

      <div className="sb-group">PART 1</div>

      <a className="sb-link" href="#vector-potential-opening">
        Vector Potentials
      </a>

      <a className="sb-link" href="#vector-potential-5">
        Worked Examples
      </a>

      <a className="sb-link" href="#mcq-vector-potentials">
        Quiz (20 Questions)
      </a>

      <a className="sb-link" href="#multivariable-taylor-opening">
        Multivariable Taylor Series &amp; Second-Order Approximation
      </a>

      <a className="sb-link" href="#multivariable-taylor-5">
        Worked Examples
      </a>

      <a className="sb-link" href="#mcq-multivariable-taylor">
        Quiz (20 Questions)
      </a>

      <div className="sb-group">PART 2</div>

      <a className="sb-link" href="/vector-fields-approximation/2">
        Implicit Function Theorem
      </a>

      <a className="sb-link" href="/vector-fields-approximation/2">
        Directional Derivatives in n Dimensions
      </a>
    </nav>
  );
}

function GuideHeaderPart1() {
  return (
    <header className="ch-hdr">
      <div className="ch-eye">
        Vector Fields &amp; Approximation Theory · Part 1
      </div>

      <h1 className="ch-title">
        Vector Potentials
      </h1>

      <p className="ch-sub">
        Vector potentials, curl representations, divergence-free fields,
        gauge freedom, surface flux, Stokes' Theorem, construction methods,
        and applications
      </p>

      <span className="ch-orn">
        ✦ &nbsp; ✦ &nbsp; ✦
      </span>
    </header>
  );
}

function TableOfContentsPart1() {
  return (
    <nav className="toc">
      <div className="toc-h">
        Contents — Part 1 of 2
      </div>

      <div className="toc-grid">
        <a className="toc-a" href="#vector-potential-opening">
          Vector Potentials
        </a>
        <a className="toc-a" href="#vector-potential-1">
          The Curl Operator
        </a>
        <a className="toc-a" href="#vector-potential-2">
          The Fundamental Divergence Condition
        </a>
        <a className="toc-a" href="#vector-potential-3">
          Divergence-Free Is Necessary, but Topology Also Matters
        </a>
        <a className="toc-a" href="#vector-potential-4">
          A First Construction Strategy
        </a>
        <a className="toc-a" href="#vector-potential-5">
          Worked Examples
        </a>
        <a className="toc-a" href="#mcq-vector-potentials">
          Vector Potentials — Quiz (20 Questions)
        </a>

        <a className="toc-a" href="#multivariable-taylor-opening">
          Multivariable Taylor Series &amp; Second-Order Approximation
        </a>
        <a className="toc-a" href="#multivariable-taylor-1">
          Why Taylor Approximation Matters
        </a>
        <a className="toc-a" href="#multivariable-taylor-2">
          The Displacement Vector
        </a>
        <a className="toc-a" href="#multivariable-taylor-3">
          First-Order Taylor Approximation
        </a>
        <a className="toc-a" href="#multivariable-taylor-4">
          Geometric Meaning — The Tangent Plane
        </a>
        <a className="toc-a" href="#multivariable-taylor-5">
          Worked Example — First-Order Approximation
        </a>
        <a className="toc-a" href="#multivariable-taylor-6">
          The Hessian Matrix
        </a>
        <a className="toc-a" href="#multivariable-taylor-7">
          Second-Order Taylor Approximation
        </a>
        <a className="toc-a" href="#multivariable-taylor-8">
          Expanded Second-Order Formula
        </a>
        <a className="toc-a" href="#multivariable-taylor-9">
          Worked Example — Quadratic Function
        </a>
        <a className="toc-a" href="#multivariable-taylor-10">
          Taylor Series in More Than Two Variables
        </a>
        <a className="toc-a" href="#multivariable-taylor-11">
          The Role of Curvature
        </a>
        <a className="toc-a" href="#multivariable-taylor-12">
          Mixed Partial Derivatives
        </a>
        <a className="toc-a" href="#multivariable-taylor-13">
          Worked Example — A Nonlinear Approximation
        </a>
        <a className="toc-a" href="#multivariable-taylor-14">
          Error and the Remainder
        </a>
        <a className="toc-a" href="#multivariable-taylor-15">
          Choosing First- or Second-Order Approximation
        </a>
        <a className="toc-a" href="#multivariable-taylor-16">
          Applications
        </a>
        <a className="toc-a" href="#multivariable-taylor-17">
          Common Mistakes
        </a>
        <a className="toc-a" href="#multivariable-taylor-18">
          Complete Taylor Approximation Workflow
        </a>
        <a className="toc-a" href="#mcq-multivariable-taylor">
          Multivariable Taylor — Quiz (20 Questions)
        </a>
      </div>
    </nav>
  );
}

function GuideFooterPart1() {
  return (
    <div className="pg-foot">
      <p>
        Vector Fields &amp; Approximation Theory · Part 1 of 2
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
          href="#vector-potential-opening"
          className="guide-nav-button"
        >
          ↑ Back to Vector Potentials
        </a>

        <a
          href="/vector-fields-approximation/2"
          className="guide-nav-button"
        >
          Next Page: Implicit Function Theorem →
        </a>
      </div>
    </div>
  );
}

function VectorFieldsApproximationPart1Content() {
  return (
    <>
      <GuideSidebarPart1 />

      <main className="main">
        <GuideHeaderPart1 />

        <TableOfContentsPart1 />

        <VectorPotentialsGuide />
        <MultivariableTaylorSeriesGuide />
        <GuideFooterPart1 />
      </main>
    </>
  );
}

export default function VectorFieldsApproximationPart1() {
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Vector Fields & Approximation Theory — Part 1"
    >
      <VectorFieldsApproximationPart1Content />
    </StudyGuideShell>
  );
}