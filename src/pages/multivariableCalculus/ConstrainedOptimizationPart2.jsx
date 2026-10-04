import StudyGuideShell from "../courses/StudyGuideShell";
import GlobalExtremaBoundedDomainsGuide from "./GlobalExtremaBoundedDomainsGuide";
import "./PartialDerivativesGuide.css";

function GuideSidebarPart2() {
  return (
    <nav className="sidebar">
      <div className="sb-brand">
        <div className="sb-sub">Multivariable Calculus</div>
        <div className="sb-title">
          Constrained &amp; Unconstrained Optimization
        </div>
      </div>

      <div className="sb-group">PART 1</div>

      <a
        className="sb-link"
        href="/constrained-unconstrained-optimization/1"
      >
        The Hessian Matrix &amp; Optimization
      </a>

      <a
        className="sb-link"
        href="/constrained-unconstrained-optimization/1#mcq-hessian-optimization"
      >
        Quiz (20 Questions)
      </a>

      <a
        className="sb-link"
        href="/constrained-unconstrained-optimization/1#kkt-opening"
      >
        Inequality Constraints (KKT Conditions)
      </a>

      <a
        className="sb-link"
        href="/constrained-unconstrained-optimization/1#mcq-kkt-conditions"
      >
        Quiz (20 Questions)
      </a>

      <div className="sb-group">PART 2</div>

      <a className="sb-link" href="#global-opening">
        Global Extrema on Bounded Domains
      </a>

      <a className="sb-link" href="#global-10">
        Worked Examples
      </a>

      <a className="sb-link" href="#mcq-global-extrema">
        Quiz (20 Questions)
      </a>

      <a
        className="sb-link"
        href="#global-20"
      >
        Key Concepts
      </a>

      <a
        className="sb-link"
        href="#"
      >
        Gradient Descent &amp; Numerical Optimization
      </a>
    </nav>
  );
}

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
        enumeration, Lagrange multipliers, convexity, and global optimization
      </p>

      <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
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
        <a className="toc-a" href="#global-opening">
          Global Extrema on Bounded Domains
        </a>

        <a className="toc-a" href="#global-1">
          Local Versus Global Extrema
        </a>

        <a className="toc-a" href="#global-2">
          The Extreme Value Theorem
        </a>

        <a className="toc-a" href="#global-3">
          Closed, Bounded, and Compact Sets
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
          Corners, Vertices, and Nonsmooth Boundary Points
        </a>

        <a className="toc-a" href="#global-9">
          Complete Candidate-Enumeration Method
        </a>

        <a className="toc-a" href="#global-10">
          Worked Example — Closed Disk
        </a>

        <a className="toc-a" href="#global-11">
          Worked Example — Rectangle
        </a>

        <a className="toc-a" href="#global-12">
          Worked Example — Triangle
        </a>

        <a className="toc-a" href="#global-13">
          Boundary Parameterization
        </a>

        <a className="toc-a" href="#global-14">
          Nondifferentiable Points and Singularities
        </a>

        <a className="toc-a" href="#global-15">
          Global Extrema and KKT
        </a>

        <a className="toc-a" href="#global-16">
          Uniqueness and Multiple Extrema
        </a>

        <a className="toc-a" href="#global-17">
          Convexity and Global Optimization
        </a>

        <a className="toc-a" href="#global-18">
          Why Boundedness Matters
        </a>

        <a className="toc-a" href="#global-19">
          Complete Global-Extrema Checklist
        </a>

        <a className="toc-a" href="#global-20">
          Key Formulas and Final Strategy
        </a>

        <a className="toc-a" href="#mcq-global-extrema">
          Quiz (20 Questions)
        </a>
      </div>
    </nav>
  );
}

function GuideFooter() {
  return (
    <footer className="pg-foot">
      <p>
        Multivariable Calculus · Constrained &amp; Unconstrained Optimization ·
        Part 2
      </p>

      <div className="guide-navigation">
        <a
          href="/constrained-unconstrained-optimization/1"
          className="guide-nav-button"
        >
          ← Back to Part 1
        </a>
      </div>
    </footer>
  );
}

export default function ConstrainedOptimizationPart2() {
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Constrained & Unconstrained Optimization — Part 2"
    >
      <GuideSidebarPart2 />

      <main className="main">
        <GuideHeaderPart2 />
        <TableOfContentsPart2 />

        <GlobalExtremaBoundedDomainsGuide />

        <GuideFooter />
      </main>
    </StudyGuideShell>
  );
}