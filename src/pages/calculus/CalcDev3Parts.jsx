import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import "../GuidePart.css";

import SpaceCurvesGuide from "./SpaceCurvesGuide";
import VectorMotionGuide from "./VectorMotionGuide";
import ParametricSurfacesGuide from "./ParametricSurfacesGuide";
import PolarCalculusGuide from "./PolarCalculusGuide";

import SolidsRevolutionGuide from "./SolidsRevolutionGuide";
import VolumeCrossSectionsGuide from "./VolumeCrossSectionsGuide";
import NumericalMethodsGuide from "./NumericalMethodsGuide";
import ImproperIntegralsGuide from "./ImproperIntegralsGuide";

import ComplexNumbersGuide from "./ComplexNumbersGuide";
import HyperbolicFunctionsGuide from "./HyperbolicFunctionsGuide";
import LaplaceTransformsGuide from "./LaplaceTransformsGuide";
import FourierSeriesGuide from "./FourierSeriesGuide";

function CalcTopicPart({ sectionId, title, path, Guide, part, nextPath, nextLabel, courseId = "calculus-analytical-geometry" }) {
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

// Module A: Space Curves & Motion
export function SpaceCurvesPart1() {
  return (
    <CalcTopicPart
      sectionId="space-curves-1"
      title="Space Curves (Frenet-Serret) — Section 1"
      path="/space-curves/1"
      Guide={SpaceCurvesGuide}
      part={1}
      nextPath="/space-curves/2"
      nextLabel="Frenet-Serret formulas & torsion"
    />
  );
}

export function SpaceCurvesPart2() {
  return (
    <CalcTopicPart
      sectionId="space-curves-2"
      title="Space Curves (Frenet-Serret) — Section 2"
      path="/space-curves/2"
      Guide={SpaceCurvesGuide}
      part={2}
      nextPath="/vector-motion/1"
      nextLabel="Vector-Valued Functions & Motion"
    />
  );
}

export function VectorMotionPart1() {
  return (
    <CalcTopicPart
      sectionId="vector-motion-1"
      title="Vector-Valued Functions & Motion — Section 1"
      path="/vector-motion/1"
      Guide={VectorMotionGuide}
      part={1}
      nextPath="/vector-motion/2"
      nextLabel="Acceleration & ballistic orbits"
    />
  );
}

export function VectorMotionPart2() {
  return (
    <CalcTopicPart
      sectionId="vector-motion-2"
      title="Vector-Valued Functions & Motion — Section 2"
      path="/vector-motion/2"
      Guide={VectorMotionGuide}
      part={2}
      nextPath="/parametric-surfaces/1"
      nextLabel="Parametric Surfaces"
    />
  );
}

export function ParametricSurfacesPart1() {
  return (
    <CalcTopicPart
      sectionId="parametric-surfaces-1"
      title="Parametric Surfaces — Section 1"
      path="/parametric-surfaces/1"
      Guide={ParametricSurfacesGuide}
      part={1}
      nextPath="/parametric-surfaces/2"
      nextLabel="Surface area & revolution manifolds"
    />
  );
}

export function ParametricSurfacesPart2() {
  return (
    <CalcTopicPart
      sectionId="parametric-surfaces-2"
      title="Parametric Surfaces — Section 2"
      path="/parametric-surfaces/2"
      Guide={ParametricSurfacesGuide}
      part={2}
      nextPath="/polar-calculus/1"
      nextLabel="Polar Coordinate Calculus"
    />
  );
}

export function PolarCalculusPart1() {
  return (
    <CalcTopicPart
      sectionId="polar-calculus-1"
      title="Polar Coordinate Calculus — Section 1"
      path="/polar-calculus/1"
      Guide={PolarCalculusGuide}
      part={1}
      nextPath="/polar-calculus/2"
      nextLabel="Polar arc length & curvature"
    />
  );
}

export function PolarCalculusPart2() {
  return (
    <CalcTopicPart
      sectionId="polar-calculus-2"
      title="Polar Coordinate Calculus — Section 2"
      path="/polar-calculus/2"
      Guide={PolarCalculusGuide}
      part={2}
      nextPath="/solids-revolution/1"
      nextLabel="Solids of Revolution"
    />
  );
}

// Module B: Advanced Volume & Numerical Techniques
export function SolidsRevPart1() {
  return (
    <CalcTopicPart
      sectionId="solids-revolution-1"
      title="Solids of Revolution — Section 1"
      path="/solids-revolution/1"
      Guide={SolidsRevolutionGuide}
      part={1}
      nextPath="/solids-revolution/2"
      nextLabel="Cylindrical shells & arbitrary axes"
    />
  );
}

export function SolidsRevPart2() {
  return (
    <CalcTopicPart
      sectionId="solids-revolution-2"
      title="Solids of Revolution — Section 2"
      path="/solids-revolution/2"
      Guide={SolidsRevolutionGuide}
      part={2}
      nextPath="/volume-cross-sections/1"
      nextLabel="Volume by Cross-Sections"
    />
  );
}

export function VolumeCrossPart1() {
  return (
    <CalcTopicPart
      sectionId="volume-cross-sections-1"
      title="Volume by Cross-Sections — Section 1"
      path="/volume-cross-sections/1"
      Guide={VolumeCrossSectionsGuide}
      part={1}
      nextPath="/volume-cross-sections/2"
      nextLabel="Non-revolution solids & bicylinders"
    />
  );
}

export function VolumeCrossPart2() {
  return (
    <CalcTopicPart
      sectionId="volume-cross-sections-2"
      title="Volume by Cross-Sections — Section 2"
      path="/volume-cross-sections/2"
      Guide={VolumeCrossSectionsGuide}
      part={2}
      nextPath="/numerical-methods/1"
      nextLabel="Numerical Methods"
    />
  );
}

export function NumMethodsPart1() {
  return (
    <CalcTopicPart
      sectionId="numerical-methods-1"
      title="Numerical Methods — Section 1"
      path="/numerical-methods/1"
      Guide={NumericalMethodsGuide}
      part={1}
      nextPath="/numerical-methods/2"
      nextLabel="Simpson's rule & Romberg integration"
    />
  );
}

export function NumMethodsPart2() {
  return (
    <CalcTopicPart
      sectionId="numerical-methods-2"
      title="Numerical Methods — Section 2"
      path="/numerical-methods/2"
      Guide={NumericalMethodsGuide}
      part={2}
      nextPath="/improper-integrals-advanced/1"
      nextLabel="Improper Integrals"
    />
  );
}

export function ImproperIntegralsPart1() {
  return (
    <CalcTopicPart
      sectionId="improper-integrals-1"
      title="Improper Integrals — Section 1"
      path="/improper-integrals-advanced/1"
      Guide={ImproperIntegralsGuide}
      part={1}
      nextPath="/improper-integrals-advanced/2"
      nextLabel="Cauchy principal values & Gamma functions"
    />
  );
}

export function ImproperIntegralsPart2() {
  return (
    <CalcTopicPart
      sectionId="improper-integrals-2"
      title="Improper Integrals — Section 2"
      path="/improper-integrals-advanced/2"
      Guide={ImproperIntegralsGuide}
      part={2}
      nextPath="/complex-numbers/1"
      nextLabel="Complex Numbers & De Moivre"
    />
  );
}

// Module C: Complex Analysis & Transform Methods
export function ComplexNumbersPart1() {
  return (
    <CalcTopicPart
      sectionId="complex-numbers-1"
      title="Complex Numbers & De Moivre — Section 1"
      path="/complex-numbers/1"
      Guide={ComplexNumbersGuide}
      part={1}
      nextPath="/complex-numbers/2"
      nextLabel="De Moivre's theorem & roots of unity"
    />
  );
}

export function ComplexNumbersPart2() {
  return (
    <CalcTopicPart
      sectionId="complex-numbers-2"
      title="Complex Numbers & De Moivre — Section 2"
      path="/complex-numbers/2"
      Guide={ComplexNumbersGuide}
      part={2}
      nextPath="/hyperbolic-functions/1"
      nextLabel="Hyperbolic Functions"
    />
  );
}

export function HyperbolicsPart1() {
  return (
    <CalcTopicPart
      sectionId="hyperbolic-functions-1"
      title="Hyperbolic Functions — Section 1"
      path="/hyperbolic-functions/1"
      Guide={HyperbolicFunctionsGuide}
      part={1}
      nextPath="/hyperbolic-functions/2"
      nextLabel="Inverse hyperbolics & catenaries"
    />
  );
}

export function HyperbolicsPart2() {
  return (
    <CalcTopicPart
      sectionId="hyperbolic-functions-2"
      title="Hyperbolic Functions — Section 2"
      path="/hyperbolic-functions/2"
      Guide={HyperbolicFunctionsGuide}
      part={2}
      nextPath="/laplace-transforms/1"
      nextLabel="Laplace Transforms"
    />
  );
}

export function LaplacePart1() {
  return (
    <CalcTopicPart
      sectionId="laplace-transforms-1"
      title="Laplace Transforms — Section 1"
      path="/laplace-transforms/1"
      Guide={LaplaceTransformsGuide}
      part={1}
      nextPath="/laplace-transforms/2"
      nextLabel="Operational theorems & IVP solutions"
    />
  );
}

export function LaplacePart2() {
  return (
    <CalcTopicPart
      sectionId="laplace-transforms-2"
      title="Laplace Transforms — Section 2"
      path="/laplace-transforms/2"
      Guide={LaplaceTransformsGuide}
      part={2}
      nextPath="/fourier-series/1"
      nextLabel="Fourier Series"
    />
  );
}

export function FourierPart1() {
  return (
    <CalcTopicPart
      sectionId="fourier-series-1"
      title="Fourier Series — Section 1"
      path="/fourier-series/1"
      Guide={FourierSeriesGuide}
      part={1}
      nextPath="/fourier-series/2"
      nextLabel="Half-range series & Parseval's identity"
    />
  );
}

export function FourierPart2() {
  return (
    <CalcTopicPart
      sectionId="fourier-series-2"
      title="Fourier Series — Section 2"
      path="/fourier-series/2"
      Guide={FourierSeriesGuide}
      part={2}
      nextPath="/courses/calculus-analytical-geometry"
      nextLabel="Course Overview & Certificate"
    />
  );
}
