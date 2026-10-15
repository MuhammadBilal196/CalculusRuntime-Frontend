import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import "../GuidePart.css";

import PointwiseUniformConvGuide from "./PointwiseUniformConvGuide";
import InterchangeLimitsGuide from "./InterchangeLimitsGuide";
import PowerSeriesOdeGuide from "./PowerSeriesOdeGuide";
import FrobeniusMethodGuide from "./FrobeniusMethodGuide";
import AnalyticFunctionsGuide from "./AnalyticFunctionsGuide";
import ContourIntegralsGuide from "./ContourIntegralsGuide";

function CalcSeriesComplexPart({
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

// Module A: Sequences of Functions
export function PointwiseUniformConvPart1() {
  return (
    <CalcSeriesComplexPart
      sectionId="pointwise-uniform-convergence-1"
      title="Pointwise & Uniform Convergence — Section 1"
      path="/pointwise-uniform-convergence/1"
      Guide={PointwiseUniformConvGuide}
      part={1}
      nextPath="/pointwise-uniform-convergence/2"
      nextLabel="Uniform Limit Continuity & Counterexamples"
    />
  );
}

export function PointwiseUniformConvPart2() {
  return (
    <CalcSeriesComplexPart
      sectionId="pointwise-uniform-convergence-2"
      title="Pointwise & Uniform Convergence — Section 2"
      path="/pointwise-uniform-convergence/2"
      Guide={PointwiseUniformConvGuide}
      part={2}
      nextPath="/interchanging-limits/1"
      nextLabel="Interchanging Limits, Derivatives & Integrals"
    />
  );
}

export function InterchangeLimitsPart1() {
  return (
    <CalcSeriesComplexPart
      sectionId="interchanging-limits-1"
      title="Interchanging Limits, Derivatives & Integrals — Section 1"
      path="/interchanging-limits/1"
      Guide={InterchangeLimitsGuide}
      part={1}
      nextPath="/interchanging-limits/2"
      nextLabel="Termwise Differentiation & Dominated Limits"
    />
  );
}

export function InterchangeLimitsPart2() {
  return (
    <CalcSeriesComplexPart
      sectionId="interchanging-limits-2"
      title="Interchanging Limits, Derivatives & Integrals — Section 2"
      path="/interchanging-limits/2"
      Guide={InterchangeLimitsGuide}
      part={2}
      nextPath="/power-series-ode/1"
      nextLabel="Power-Series Solutions of ODEs"
    />
  );
}

// Module B: Series Solutions of ODEs
export function PowerSeriesOdePart1() {
  return (
    <CalcSeriesComplexPart
      sectionId="power-series-ode-1"
      title="Power-Series Solutions of ODEs — Section 1"
      path="/power-series-ode/1"
      Guide={PowerSeriesOdeGuide}
      part={1}
      nextPath="/power-series-ode/2"
      nextLabel="Linear Recurrence Solutions & Convergence"
    />
  );
}

export function PowerSeriesOdePart2() {
  return (
    <CalcSeriesComplexPart
      sectionId="power-series-ode-2"
      title="Power-Series Solutions of ODEs — Section 2"
      path="/power-series-ode/2"
      Guide={PowerSeriesOdeGuide}
      part={2}
      nextPath="/frobenius-method/1"
      nextLabel="Frobenius Method (Singular ODEs)"
    />
  );
}

export function FrobeniusMethodPart1() {
  return (
    <CalcSeriesComplexPart
      sectionId="frobenius-method-1"
      title="Frobenius Method — Section 1"
      path="/frobenius-method/1"
      Guide={FrobeniusMethodGuide}
      part={1}
      nextPath="/frobenius-method/2"
      nextLabel="Distinct Roots, Repeated Roots & Logarithmic Solutions"
    />
  );
}

export function FrobeniusMethodPart2() {
  return (
    <CalcSeriesComplexPart
      sectionId="frobenius-method-2"
      title="Frobenius Method — Section 2"
      path="/frobenius-method/2"
      Guide={FrobeniusMethodGuide}
      part={2}
      nextPath="/analytic-functions/1"
      nextLabel="Analytic Functions & Cauchy-Riemann"
    />
  );
}

// Module C: Introductory Complex Analysis
export function AnalyticFunctionsPart1() {
  return (
    <CalcSeriesComplexPart
      sectionId="analytic-functions-1"
      title="Analytic Functions & Cauchy-Riemann — Section 1"
      path="/analytic-functions/1"
      Guide={AnalyticFunctionsGuide}
      part={1}
      nextPath="/analytic-functions/2"
      nextLabel="Harmonic Functions, Conjugates & Milne-Thomson"
    />
  );
}

export function AnalyticFunctionsPart2() {
  return (
    <CalcSeriesComplexPart
      sectionId="analytic-functions-2"
      title="Analytic Functions & Cauchy-Riemann — Section 2"
      path="/analytic-functions/2"
      Guide={AnalyticFunctionsGuide}
      part={2}
      nextPath="/contour-integrals/1"
      nextLabel="Contour Integrals & Residues"
    />
  );
}

export function ContourIntegralsPart1() {
  return (
    <CalcSeriesComplexPart
      sectionId="contour-integrals-1"
      title="Contour Integrals & Residues — Section 1"
      path="/contour-integrals/1"
      Guide={ContourIntegralsGuide}
      part={1}
      nextPath="/contour-integrals/2"
      nextLabel="Laurent Series, Residue Calculus & Real Integrals"
    />
  );
}

export function ContourIntegralsPart2() {
  return (
    <CalcSeriesComplexPart
      sectionId="contour-integrals-2"
      title="Contour Integrals & Residues — Section 2"
      path="/contour-integrals/2"
      Guide={ContourIntegralsGuide}
      part={2}
      nextPath="/courses/calculus-analytical-geometry"
      nextLabel="Return to Calculus Curriculum"
    />
  );
}
