import StudyGuideShell from "../courses/StudyGuideShell";
import "./PartialDerivativesGuide.css";

import VectorPotentialsGuide from "./VectorPotentialsGuide";

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

      {/* Topic 1 */}
      <a
        className="sb-link"
        href="#vector-potential-opening"
      >
        Vector Potentials
      </a>

      <a
        className="sb-link"
        href="#vector-potential-5"
      >
        Worked Examples
      </a>

      <a
        className="sb-link"
        href="#mcq-vector-potentials"
      >
        Quiz (20 Questions)
      </a>

      <div className="sb-group">PART 2</div>

      <a
        className="sb-link"
        href="/vector-fields-approximation/2"
      >
        Implicit Function Theorem
      </a>

      <a
        className="sb-link"
        href="/vector-fields-approximation/2"
      >
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
        <a
          className="toc-a"
          href="#vector-potential-opening"
        >
          Vector Potentials
        </a>

        <a
          className="toc-a"
          href="#vector-potential-1"
        >
          The Curl Operator
        </a>

        <a
          className="toc-a"
          href="#vector-potential-2"
        >
          The Fundamental Divergence Condition
        </a>

        <a
          className="toc-a"
          href="#vector-potential-3"
        >
          Divergence-Free Is Necessary, but Topology Also Matters
        </a>

        <a
          className="toc-a"
          href="#vector-potential-4"
        >
          A First Construction Strategy
        </a>

        <a
          className="toc-a"
          href="#vector-potential-5"
        >
          Worked Example — Constant Vertical Field
        </a>

        <a
          className="toc-a"
          href="#vector-potential-6"
        >
          Worked Example — A Field with Polynomial Components
        </a>

        <a
          className="toc-a"
          href="#vector-potential-7"
        >
          A Systematic Component-by-Component Construction
        </a>

        <a
          className="toc-a"
          href="#vector-potential-8"
        >
          Gauge Freedom
        </a>

        <a
          className="toc-a"
          href="#vector-potential-9"
        >
          Worked Example — Demonstrating Gauge Freedom
        </a>

        <a
          className="toc-a"
          href="#vector-potential-10"
        >
          Vector Potentials and Conservative Fields Are Different Ideas
        </a>

        <a
          className="toc-a"
          href="#vector-potential-11"
        >
          Geometric Meaning of a Vector Potential
        </a>

        <a
          className="toc-a"
          href="#vector-potential-12"
        >
          Connection to Surface Flux
        </a>

        <a
          className="toc-a"
          href="#vector-potential-13"
        >
          Worked Example — Using Stokes' Theorem
        </a>

        <a
          className="toc-a"
          href="#vector-potential-14"
        >
          Gauge Choices and Simplification
        </a>

        <a
          className="toc-a"
          href="#vector-potential-15"
        >
          Applications of Vector Potentials
        </a>

        <a
          className="toc-a"
          href="#vector-potential-16"
        >
          Common Mistakes and Diagnostic Checks
        </a>

        <a
          className="toc-a"
          href="#vector-potential-17"
        >
          Complete Vector-Potential Strategy and Key Formulas
        </a>

        <a
          className="toc-a"
          href="#mcq-vector-potentials"
        >
          Quiz (20 Questions)
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