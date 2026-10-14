import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import "../GuidePart.css";

import GammaBetaGuide from "./GammaBetaGuide";
import LeibnizRuleGuide from "./LeibnizRuleGuide";
import FourierTransformGuide from "./FourierTransformGuide";
import ZTransformGuide from "./ZTransformGuide";
import IntroPdesGuide from "./IntroPdesGuide";
import OrthogonalPolyGuide from "./OrthogonalPolyGuide";

function CalcSpecialTopicPart({
  sectionId,
  title,
  path,
  Guide,
  part,
  nextPath,
  nextLabel,
  courseId = "calculus-analytical-geometry",
}) {
  const { recordVisit } = useProgress();
  useEffect(() => {
    recordVisit(sectionId);
  }, [recordVisit, sectionId]);

  return (
    <div className="guide-part-wrapper">
      <div className="guide-part-topbar">
        <div className="guide-part-info">
          <span className="guide-part-badge">Section {part}</span>
          <span className="guide-part-title">{title}</span>
        </div>
        <BookmarkButton id={sectionId} title={title} path={path} />
      </div>
      <Guide part={part} />
      <SectionCompleteBar
        sectionId={sectionId}
        nextPath={nextPath}
        nextLabel={nextLabel}
        courseId={courseId}
      />
    </div>
  );
}

// Module A: Special Functions
export function GammaBetaPart1() {
  return (
    <CalcSpecialTopicPart
      sectionId="gamma-beta-1"
      title="Gamma & Beta Functions — Section 1"
      path="/gamma-beta-functions/1"
      Guide={GammaBetaGuide}
      part={1}
      nextPath="/gamma-beta-functions/2"
      nextLabel="Euler Beta Integrals & Asymptotics"
    />
  );
}

export function GammaBetaPart2() {
  return (
    <CalcSpecialTopicPart
      sectionId="gamma-beta-2"
      title="Gamma & Beta Functions — Section 2"
      path="/gamma-beta-functions/2"
      Guide={GammaBetaGuide}
      part={2}
      nextPath="/leibniz-rule/1"
      nextLabel="Differentiation Under Integral Sign (Leibniz Rule)"
    />
  );
}

export function LeibnizRulePart1() {
  return (
    <CalcSpecialTopicPart
      sectionId="leibniz-rule-1"
      title="Differentiation Under Integral Sign — Section 1"
      path="/leibniz-rule/1"
      Guide={LeibnizRuleGuide}
      part={1}
      nextPath="/leibniz-rule/2"
      nextLabel="Variable Limits & Feynman's Technique"
    />
  );
}

export function LeibnizRulePart2() {
  return (
    <CalcSpecialTopicPart
      sectionId="leibniz-rule-2"
      title="Differentiation Under Integral Sign — Section 2"
      path="/leibniz-rule/2"
      Guide={LeibnizRuleGuide}
      part={2}
      nextPath="/fourier-transforms/1"
      nextLabel="Fourier Transform & Continuous Spectra"
    />
  );
}

// Module B: Transform Methods
export function FourierTransformPart1() {
  return (
    <CalcSpecialTopicPart
      sectionId="fourier-transforms-1"
      title="Fourier Transform & Convolution — Section 1"
      path="/fourier-transforms/1"
      Guide={FourierTransformGuide}
      part={1}
      nextPath="/fourier-transforms/2"
      nextLabel="Convolution Theorem & Plancherel Energy"
    />
  );
}

export function FourierTransformPart2() {
  return (
    <CalcSpecialTopicPart
      sectionId="fourier-transforms-2"
      title="Fourier Transform & Convolution — Section 2"
      path="/fourier-transforms/2"
      Guide={FourierTransformGuide}
      part={2}
      nextPath="/z-transforms/1"
      nextLabel="Z-Transform & Difference Equations"
    />
  );
}

export function ZTransformPart1() {
  return (
    <CalcSpecialTopicPart
      sectionId="z-transforms-1"
      title="Z-Transform & Difference Equations — Section 1"
      path="/z-transforms/1"
      Guide={ZTransformGuide}
      part={1}
      nextPath="/z-transforms/2"
      nextLabel="Difference Equations & Digital Filter Stability"
    />
  );
}

export function ZTransformPart2() {
  return (
    <CalcSpecialTopicPart
      sectionId="z-transforms-2"
      title="Z-Transform & Difference Equations — Section 2"
      path="/z-transforms/2"
      Guide={ZTransformGuide}
      part={2}
      nextPath="/intro-pdes/1"
      nextLabel="Introduction to PDEs (Heat & Wave)"
    />
  );
}

// Module C: Partial Differential Equations & Polynomial Families
export function IntroPdesPart1() {
  return (
    <CalcSpecialTopicPart
      sectionId="intro-pdes-1"
      title="Introduction to PDEs — Section 1"
      path="/intro-pdes/1"
      Guide={IntroPdesGuide}
      part={1}
      nextPath="/intro-pdes/2"
      nextLabel="Heat & Wave Separation of Variables Solutions"
    />
  );
}

export function IntroPdesPart2() {
  return (
    <CalcSpecialTopicPart
      sectionId="intro-pdes-2"
      title="Introduction to PDEs — Section 2"
      path="/intro-pdes/2"
      Guide={IntroPdesGuide}
      part={2}
      nextPath="/orthogonal-polynomials/1"
      nextLabel="Orthogonal Polynomials (Legendre, Chebyshev, Hermite)"
    />
  );
}

export function OrthogonalPolyPart1() {
  return (
    <CalcSpecialTopicPart
      sectionId="orthogonal-polynomials-1"
      title="Orthogonal Polynomials — Section 1"
      path="/orthogonal-polynomials/1"
      Guide={OrthogonalPolyGuide}
      part={1}
      nextPath="/orthogonal-polynomials/2"
      nextLabel="Legendre, Chebyshev & Hermite Families"
    />
  );
}

export function OrthogonalPolyPart2() {
  return (
    <CalcSpecialTopicPart
      sectionId="orthogonal-polynomials-2"
      title="Orthogonal Polynomials — Section 2"
      path="/orthogonal-polynomials/2"
      Guide={OrthogonalPolyGuide}
      part={2}
      nextPath="/courses/calculus-analytical-geometry"
      nextLabel="Course Overview & Certificate"
    />
  );
}
