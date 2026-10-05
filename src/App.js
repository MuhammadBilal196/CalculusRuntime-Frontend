import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProgressProvider } from "./pages/courses/ProgressContext";
import { ThemeProvider } from "./context/ThemeContext";
import Layout from "./components/common/Layout";
import ScrollToTop from "./utils/ScrollToTop";
import ErrorBoundary from "./components/common/ErrorBoundary";
import SiteThemeManager from "./components/common/SiteThemeManager";

import Home from "./pages/home/Home";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import AISolver from "./pages/tools/AISolver";
import NotFound from "./pages/system/NotFound";
import CourseHub from "./pages/courses/CourseHub";
import SimpleConcepts from "./pages/courses/SimpleConcepts";
import ConceptExplore from "./pages/courses/ConceptExplore";

import IntegralsPart1 from "./pages/multivariableCalculus/IntegralsPart1";
import IntegralsPart2 from "./pages/multivariableCalculus/IntegralsPart2";
import PartialPart1 from "./pages/multivariableCalculus/PartialPart1";
import PartialPart2 from "./pages/multivariableCalculus/PartialPart2";
import VectorPart1 from "./pages/multivariableCalculus/VectorPart1";
import VectorPart2 from "./pages/multivariableCalculus/VectorPart2";
import LimitsPart1 from "./pages/multivariableCalculus/LimitsPart1";
import LimitsPart2 from "./pages/multivariableCalculus/LimitsPart2";
import TaylorPart1 from "./pages/multivariableCalculus/TaylorPart1";
import TaylorPart2 from "./pages/multivariableCalculus/TaylorPart2";
import LagrangePart1 from "./pages/multivariableCalculus/LagrangePart1";
import LagrangePart2 from "./pages/multivariableCalculus/LagrangePart2";
import StokesPart1 from "./pages/multivariableCalculus/StokesPart1";
import StokesPart2 from "./pages/multivariableCalculus/StokesPart2";
import DivergencePart1 from "./pages/multivariableCalculus/DivergencePart1";
import DivergencePart2 from "./pages/multivariableCalculus/DivergencePart2";
import Geometry3DPart1 from "./pages/multivariableCalculus/Geometry3DPart1";
import Geometry3DPart2 from "./pages/multivariableCalculus/Geometry3DPart2";
import SpaceCurvesGuide from "./pages/multivariableCalculus/SpaceCurvesGuideNew";
import JacobiansGuide from "./pages/multivariableCalculus/JacobiansGuide";
import CurvilinearCoordinatesGuide from "./pages/multivariableCalculus/CurvilinearCoordinatesGuide";
import ParametrizedSurfaceAreaGuide from "./pages/multivariableCalculus/ParametrizedSurfaceAreaGuide";
import FluxIntegralsGeneralSurfacesGuide from "./pages/multivariableCalculus/FluxIntegralsGeneralSurfacesGuide";
import HessianOptimizationGuide from "./pages/multivariableCalculus/HessianOptimizationGuide";
import ConstrainedOptimizationPart2 from "./pages/multivariableCalculus/ConstrainedOptimizationPart2";
import VectorFieldsApproximationPart1 from "./pages/multivariableCalculus/VectorFieldsApproximationPart1";
import VectorFieldsApproximationPart2 from "./pages/multivariableCalculus/VectorFieldsApproximationPart2";
import PractiseSection from "./pages/courses/PractiseSection";
import PersonalizedStudyPlan from "./pages/courses/PersonalizedStudyPlan";
import ContinuityFinder from "./pages/tools/ContinuityFinder";
import ExtremeValueFunction from "./pages/tools/ExtremeValueFinder";
import VolumeCalculator from "./pages/tools/VolumeCalculator";
import DerivativeTool from "./components/tools/DerivativeTool";
import VectorFieldVisualizer from "./pages/tools/VectorFieldVisualizer";
import AnalyticVectorLab from "./pages/tools/AnalyticVectorLab";

import CheatSheet from "./pages/courses/CheatSheet";
import Leaderboard from "./pages/dashboard/Leaderboard";
import Certificate from "./pages/calculus/Certificate";
import CourseQuiz from "./pages/courses/CourseQuiz";
import MyCertificates from "./pages/certificates/MyCertificates";
import VerifyCertificate from "./pages/certificates/VerifyCertificate";
import SavedForLater from "./pages/dashboard/SavedForLater";
import Chatbot from "./components/Chatbot/Chatbot";
import BackToTop from "./components/common/BackToTop";
import LoadingSpinner from "./components/common/LoadingSpinner";

import {
  LinearEquationsPart1,
  LinearEquationsPart2,
  VectorsPart1,
  VectorsPart2,
  MatricesPart1,
  MatricesPart2,
  SystemsPart1,
  SystemsPart2,
  EigenPart1,
  EigenPart2,
  TransformPart1,
  TransformPart2,
  OrthoPart1,
  OrthoPart2,
  SvdPart1,
  SvdPart2,
} from "./pages/linearAlgebra/LaParts";

import LaModulePart from "./pages/linearAlgebra/LaModulePart";
import {
  LA_MODULES,
  LA_TOPIC_REDIRECTS,
  LA_MODULE_REDIRECTS,
  getLaModulePath,
} from "./data/laModules";

import MatrixSandbox from "./pages/linearAlgebra/MatrixSandbox";
import LinearAlgebraOverview from "./pages/linearAlgebra/LinearAlgebraOverview";
import CalculusOverview from "./pages/calculus/CalculusOverview";
import MultivariableOverview from "./pages/multivariableCalculus/MultivariableOverview";
import ProbabilityStatisticsOverview from "./pages/probabilityStatistics/ProbabilityStatisticsOverview";

import BayesLab from "./pages/probabilityStatistics/BayesLab";

import {
  ProbBasicsPart1,
  ProbBasicsPart2,
  RandomVarsPart1,
  RandomVarsPart2,
  DescriptivePart1,
  DescriptivePart2,
  HypothesisPart1,
  HypothesisPart2,
  RegressionPart1,
  RegressionPart2,
} from "./pages/probabilityStatistics/PsParts";
import BayesianInferencePart1 from "./pages/probabilityStatistics/BayesianInferencePart1";
import BayesianInferencePart2 from "./pages/probabilityStatistics/BayesianInferencePart2";
import MaximumLikelihoodPart1 from "./pages/probabilityStatistics/MaximumLikelihoodPart1";
import MaximumLikelihoodPart2 from "./pages/probabilityStatistics/MaximumLikelihoodPart2";
import ConfidenceIntervalsPart1 from "./pages/probabilityStatistics/ConfidenceIntervalsPart1";
import ConfidenceIntervalsPart2 from "./pages/probabilityStatistics/ConfidenceIntervalsPart2";
import MomentGeneratingFunctionsPart1 from "./pages/probabilityStatistics/MomentGeneratingFunctionsPart1";
import MomentGeneratingFunctionsPart2 from "./pages/probabilityStatistics/MomentGeneratingFunctionsPart2";
import AnovaPart1 from "./pages/probabilityStatistics/AnovaPart1";
import AnovaPart2 from "./pages/probabilityStatistics/AnovaPart2";
import ChiSquareTestsPart1 from "./pages/probabilityStatistics/ChiSquareTestsPart1";
import ChiSquareTestsPart2 from "./pages/probabilityStatistics/ChiSquareTestsPart2";
import NonparametricTestsPart1 from "./pages/probabilityStatistics/NonparametricTestsPart1";
import NonparametricTestsPart2 from "./pages/probabilityStatistics/NonparametricTestsPart2";
import MultipleLinearRegressionPart1 from "./pages/probabilityStatistics/MultipleLinearRegressionPart1";
import MultipleLinearRegressionPart2 from "./pages/probabilityStatistics/MultipleLinearRegressionPart2";
import JointMarginalDistributionsPart1 from "./pages/probabilityStatistics/JointMarginalDistributionsPart1";
import JointMarginalDistributionsPart2 from "./pages/probabilityStatistics/JointMarginalDistributionsPart2";
import MultivariateNormalPart1 from "./pages/probabilityStatistics/MultivariateNormalPart1";
import MultivariateNormalPart2 from "./pages/probabilityStatistics/MultivariateNormalPart2";
import StochasticProcessesPart1 from "./pages/probabilityStatistics/StochasticProcessesPart1";
import StochasticProcessesPart2 from "./pages/probabilityStatistics/StochasticProcessesPart2";
import CentralLimitTheoremPart1 from "./pages/probabilityStatistics/CentralLimitTheoremPart1";
import CentralLimitTheoremPart2 from "./pages/probabilityStatistics/CentralLimitTheoremPart2";

import {
  DiffPart1,
  DiffPart2,
  IntPart1,
  IntPart2,
  SeriesPart1,
  SeriesPart2,
  ConicsPart1,
  ConicsPart2,
  LinesPart1,
  LinesPart2,
  CirclesPart1,
  CirclesPart2,
  AdvCalcPart1,
  AdvCalcPart2,
  OdePart1,
  OdePart2,
} from "./pages/calculus/CalcParts";
import {
  SpaceCurvesPart1,
  SpaceCurvesPart2,
  VectorMotionPart1,
  VectorMotionPart2,
  ParametricSurfacesPart1,
  ParametricSurfacesPart2,
  PolarCalculusPart1,
  PolarCalculusPart2,
  SolidsRevPart1,
  SolidsRevPart2,
  VolumeCrossPart1,
  VolumeCrossPart2,
  NumMethodsPart1,
  NumMethodsPart2,
  ImproperIntegralsPart1,
  ImproperIntegralsPart2,
  ComplexNumbersPart1,
  ComplexNumbersPart2,
  HyperbolicsPart1,
  HyperbolicsPart2,
  LaplacePart1,
  LaplacePart2,
  FourierPart1,
  FourierPart2,
} from "./pages/calculus/CalcDev3Parts";

// three.js is large, so the 3D explorer loads in its own chunk only when visited.
const SurfaceExplorer = lazy(() => import("./pages/tools/SurfaceExplorer"));

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ProgressProvider>
          <BrowserRouter>
            <ErrorBoundary>
              <ScrollToTop />
              <SiteThemeManager />
              <Routes>
                {/* Home */}
                <Route path="/" element={<Layout body={<Home />} />} />

                {/* Auth */}
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/dashboard"
                  element={<Layout body={<Dashboard />} />}
                />
                <Route
                  path="/saved"
                  element={<Layout body={<SavedForLater />} />}
                />

                {/* Course hubs */}
                <Route
                  path="/courses/:courseId"
                  element={<Layout body={<CourseHub />} />}
                />

                {/* Simple Concepts */}
                <Route
                  path="/simple-concepts"
                  element={<Layout body={<SimpleConcepts />} />}
                />
                <Route
                  path="/simple-concepts/:slug"
                  element={<Layout body={<ConceptExplore />} />}
                />

                {/* AI Solver */}
                <Route
                  path="/ai-solver"
                  element={<Layout body={<AISolver />} />}
                />

                {/* Multivariable Calculus Overview */}
                <Route
                  path="/multivariable-calculus/overview"
                  element={<Layout body={<MultivariableOverview />} />}
                />
                <Route
                  path="/courses/multivariable-calculus/overview"
                  element={<Layout body={<MultivariableOverview />} />}
                />

                {/* Partial Derivatives */}
                <Route
                  path="/partial-derivatives"
                  element={<Navigate to="/partial-derivatives/1" replace />}
                />
                <Route
                  path="/partial-derivatives/1"
                  element={<Layout body={<PartialPart1 />} />}
                />
                <Route
                  path="/partial-derivatives/2"
                  element={<Layout body={<PartialPart2 />} />}
                />

                {/* Vector Calculus */}
                <Route
                  path="/vector-calculus"
                  element={<Navigate to="/vector-calculus/1" replace />}
                />
                <Route
                  path="/vector-calculus/1"
                  element={<Layout body={<VectorPart1 />} />}
                />
                <Route
                  path="/vector-calculus/2"
                  element={<Layout body={<VectorPart2 />} />}
                />
                <Route
                  path="/vectorfield"
                  element={<Layout body={<VectorFieldVisualizer />} />}
                />

                {/* Calculus & Analytical Geometry Overview */}
                <Route
                  path="/calculus/overview"
                  element={<Layout body={<CalculusOverview />} />}
                />
                <Route
                  path="/courses/calculus-analytical-geometry/overview"
                  element={<Layout body={<CalculusOverview />} />}
                />

                {/* Space Curves & Advanced Multivariable Mappings */}
                <Route
                  path="/space-curves"
                  element={<Navigate to="/space-curves/1" replace />}
                />

                <Route
                  path="/space-curves/1"
                  element={<Layout body={<SpaceCurvesGuide part={1} />} />}
                />

                <Route
                  path="/space-curves/2"
                  element={<Layout body={<SpaceCurvesGuide part={2} />} />}
                />

                {/* Limits & Continuity */}
                <Route
                  path="/limits-continuity"
                  element={<Navigate to="/limits-continuity/1" replace />}
                />
                <Route
                  path="/limits-continuity/1"
                  element={<Layout body={<LimitsPart1 />} />}
                />
                <Route
                  path="/limits-continuity/2"
                  element={<Layout body={<LimitsPart2 />} />}
                />

                {/* Differentiation (Calculus certificate) */}
                <Route
                  path="/differentiation"
                  element={<Navigate to="/differentiation/1" replace />}
                />
                <Route
                  path="/differentiation/1"
                  element={<Layout body={<DiffPart1 />} />}
                />
                <Route
                  path="/differentiation/2"
                  element={<Layout body={<DiffPart2 />} />}
                />

                {/* Integration (Calculus certificate) */}
                <Route
                  path="/integration"
                  element={<Navigate to="/integration/1" replace />}
                />
                <Route
                  path="/integration/1"
                  element={<Layout body={<IntPart1 />} />}
                />
                <Route
                  path="/integration/2"
                  element={<Layout body={<IntPart2 />} />}
                />

                {/* Sequences & Series */}
                <Route
                  path="/sequences-series"
                  element={<Navigate to="/sequences-series/1" replace />}
                />
                <Route
                  path="/sequences-series/1"
                  element={<Layout body={<SeriesPart1 />} />}
                />
                <Route
                  path="/sequences-series/2"
                  element={<Layout body={<SeriesPart2 />} />}
                />

                {/* Conic Sections */}
                <Route
                  path="/conic-sections"
                  element={<Navigate to="/conic-sections/1" replace />}
                />
                <Route
                  path="/conic-sections/1"
                  element={<Layout body={<ConicsPart1 />} />}
                />
                <Route
                  path="/conic-sections/2"
                  element={<Layout body={<ConicsPart2 />} />}
                />

                {/* Multiple Integrals */}
                <Route
                  path="/multiple-integrals"
                  element={<Navigate to="/multiple-integrals/1" replace />}
                />
                <Route
                  path="/multiple-integrals/1"
                  element={<Layout body={<IntegralsPart1 />} />}
                />
                <Route
                  path="/multiple-integrals/2"
                  element={<Layout body={<IntegralsPart2 />} />}
                />

                {/* <Route
                  path="/jacobians-change-of-variables"
                  element={
                    <Navigate to="/jacobians-change-of-variables/1" replace />
                  }
                /> */}
                <Route
                  path="/jacobians-change-of-variables/1"
                  element={<Layout body={<JacobiansGuide />} />}
                />
                <Route
                  path="/curvilinear-coordinate-systems"
                  element={
                    <Navigate to="/curvilinear-coordinate-systems/1" replace />
                  }
                />

                <Route
                  path="/curvilinear-coordinate-systems/1"
                  element={<Layout body={<CurvilinearCoordinatesGuide />} />}
                />
                <Route
                  path="/parametrized-surface-area"
                  element={
                    <Navigate to="/parametrized-surface-area/2" replace />
                  }
                />

                <Route
                  path="/parametrized-surface-area/2"
                  element={<Layout body={<ParametrizedSurfaceAreaGuide />} />}
                />
                <Route
                  path="/flux-integrals-general-surfaces"
                  element={
                    <Navigate to="/flux-integrals-general-surfaces/2" replace />
                  }
                />

                <Route
                  path="/flux-integrals-general-surfaces/2"
                  element={
                    <Layout body={<FluxIntegralsGeneralSurfacesGuide />} />
                  }
                />
                <Route
                  path="/constrained-unconstrained-optimization"
                  element={
                    <Navigate
                      to="/constrained-unconstrained-optimization/1"
                      replace
                    />
                  }
                />

                <Route
                  path="/constrained-unconstrained-optimization/1"
                  element={<Layout body={<HessianOptimizationGuide />} />}
                />
                <Route
                  path="/constrained-unconstrained-optimization/2"
                  element={<Layout body={<ConstrainedOptimizationPart2 />} />}
                />
                
                {/* Module C: Vector Fields & Approximation Theory */}

                <Route
                  path="/vector-fields-approximation"
                  element={
                    <Navigate to="/vector-fields-approximation/1" replace />
                  }
                />

                <Route
                  path="/vector-fields-approximation/1"
                  element={<Layout body={<VectorFieldsApproximationPart1 />} />}
                />

                <Route
                  path="/vector-fields-approximation/2"
                  element={<Layout body={<VectorFieldsApproximationPart2 />} />}
                />

                {/* Taylor Series */}
                <Route
                  path="/taylor-series"
                  element={<Navigate to="/taylor-series/1" replace />}
                />
                <Route
                  path="/taylor-series/1"
                  element={<Layout body={<TaylorPart1 />} />}
                />
                <Route
                  path="/taylor-series/2"
                  element={<Layout body={<TaylorPart2 />} />}
                />

                {/* Module A: Lines & Analytical Geometry */}
                <Route
                  path="/lines-geometry"
                  element={<Navigate to="/lines-geometry/1" replace />}
                />
                <Route
                  path="/lines-geometry/1"
                  element={<Layout body={<LinesPart1 />} />}
                />
                <Route
                  path="/lines-geometry/2"
                  element={<Layout body={<LinesPart2 />} />}
                />

                {/* Module B: Circle & Conic Tangents */}
                <Route
                  path="/circles-tangents"
                  element={<Navigate to="/circles-tangents/1" replace />}
                />
                <Route
                  path="/circles-tangents/1"
                  element={<Layout body={<CirclesPart1 />} />}
                />
                <Route
                  path="/circles-tangents/2"
                  element={<Layout body={<CirclesPart2 />} />}
                />

                {/* Module C: Advanced Single-Variable Calculus */}
                <Route
                  path="/advanced-calculus"
                  element={<Navigate to="/advanced-calculus/1" replace />}
                />
                <Route
                  path="/advanced-calculus/1"
                  element={<Layout body={<AdvCalcPart1 />} />}
                />
                <Route
                  path="/advanced-calculus/2"
                  element={<Layout body={<AdvCalcPart2 />} />}
                />

                {/* Module D: Ordinary Differential Equations */}
                <Route
                  path="/differential-equations"
                  element={<Navigate to="/differential-equations/1" replace />}
                />
                <Route
                  path="/differential-equations/1"
                  element={<Layout body={<OdePart1 />} />}
                />
                <Route
                  path="/differential-equations/2"
                  element={<Layout body={<OdePart2 />} />}
                />

                {/* Developer 3 — Module A: Space Curves & Motion */}
                <Route
                  path="/space-curves"
                  element={<Navigate to="/space-curves/1" replace />}
                />
                <Route
                  path="/space-curves/1"
                  element={<Layout body={<SpaceCurvesPart1 />} />}
                />
                <Route
                  path="/space-curves/2"
                  element={<Layout body={<SpaceCurvesPart2 />} />}
                />

                <Route
                  path="/vector-motion"
                  element={<Navigate to="/vector-motion/1" replace />}
                />
                <Route
                  path="/vector-motion/1"
                  element={<Layout body={<VectorMotionPart1 />} />}
                />
                <Route
                  path="/vector-motion/2"
                  element={<Layout body={<VectorMotionPart2 />} />}
                />

                <Route
                  path="/parametric-surfaces"
                  element={<Navigate to="/parametric-surfaces/1" replace />}
                />
                <Route
                  path="/parametric-surfaces/1"
                  element={<Layout body={<ParametricSurfacesPart1 />} />}
                />
                <Route
                  path="/parametric-surfaces/2"
                  element={<Layout body={<ParametricSurfacesPart2 />} />}
                />

                <Route
                  path="/polar-calculus"
                  element={<Navigate to="/polar-calculus/1" replace />}
                />
                <Route
                  path="/polar-calculus/1"
                  element={<Layout body={<PolarCalculusPart1 />} />}
                />
                <Route
                  path="/polar-calculus/2"
                  element={<Layout body={<PolarCalculusPart2 />} />}
                />

                {/* Developer 3 — Module B: Advanced Volume & Numerical Techniques */}
                <Route
                  path="/solids-revolution"
                  element={<Navigate to="/solids-revolution/1" replace />}
                />
                <Route
                  path="/solids-revolution/1"
                  element={<Layout body={<SolidsRevPart1 />} />}
                />
                <Route
                  path="/solids-revolution/2"
                  element={<Layout body={<SolidsRevPart2 />} />}
                />

                <Route
                  path="/volume-cross-sections"
                  element={<Navigate to="/volume-cross-sections/1" replace />}
                />
                <Route
                  path="/volume-cross-sections/1"
                  element={<Layout body={<VolumeCrossPart1 />} />}
                />
                <Route
                  path="/volume-cross-sections/2"
                  element={<Layout body={<VolumeCrossPart2 />} />}
                />

                <Route
                  path="/numerical-methods"
                  element={<Navigate to="/numerical-methods/1" replace />}
                />
                <Route
                  path="/numerical-methods/1"
                  element={<Layout body={<NumMethodsPart1 />} />}
                />
                <Route
                  path="/numerical-methods/2"
                  element={<Layout body={<NumMethodsPart2 />} />}
                />

                <Route
                  path="/improper-integrals-advanced"
                  element={
                    <Navigate to="/improper-integrals-advanced/1" replace />
                  }
                />
                <Route
                  path="/improper-integrals-advanced/1"
                  element={<Layout body={<ImproperIntegralsPart1 />} />}
                />
                <Route
                  path="/improper-integrals-advanced/2"
                  element={<Layout body={<ImproperIntegralsPart2 />} />}
                />

                {/* Developer 3 — Module C: Complex Analysis & Transform Methods */}
                <Route
                  path="/complex-numbers"
                  element={<Navigate to="/complex-numbers/1" replace />}
                />
                <Route
                  path="/complex-numbers/1"
                  element={<Layout body={<ComplexNumbersPart1 />} />}
                />
                <Route
                  path="/complex-numbers/2"
                  element={<Layout body={<ComplexNumbersPart2 />} />}
                />

                <Route
                  path="/hyperbolic-functions"
                  element={<Navigate to="/hyperbolic-functions/1" replace />}
                />
                <Route
                  path="/hyperbolic-functions/1"
                  element={<Layout body={<HyperbolicsPart1 />} />}
                />
                <Route
                  path="/hyperbolic-functions/2"
                  element={<Layout body={<HyperbolicsPart2 />} />}
                />

                <Route
                  path="/laplace-transforms"
                  element={<Navigate to="/laplace-transforms/1" replace />}
                />
                <Route
                  path="/laplace-transforms/1"
                  element={<Layout body={<LaplacePart1 />} />}
                />
                <Route
                  path="/laplace-transforms/2"
                  element={<Layout body={<LaplacePart2 />} />}
                />

                <Route
                  path="/fourier-series"
                  element={<Navigate to="/fourier-series/1" replace />}
                />
                <Route
                  path="/fourier-series/1"
                  element={<Layout body={<FourierPart1 />} />}
                />
                <Route
                  path="/fourier-series/2"
                  element={<Layout body={<FourierPart2 />} />}
                />

                <Route
                  path="/certificates"
                  element={<Layout body={<MyCertificates />} />}
                />
                <Route
                  path="/my-certificates"
                  element={<Navigate to="/certificates" replace />}
                />
                <Route
                  path="/verify"
                  element={<Layout body={<VerifyCertificate />} />}
                />
                <Route
                  path="/certificate/:courseId"
                  element={<Layout body={<Certificate />} />}
                />
                <Route
                  path="/quiz/:courseId"
                  element={<Layout body={<CourseQuiz />} />}
                />

                {/* Lagrange Multipliers */}
                <Route
                  path="/lagrange-multipliers"
                  element={<Navigate to="/lagrange-multipliers/1" replace />}
                />
                <Route
                  path="/lagrange-multipliers/1"
                  element={<Layout body={<LagrangePart1 />} />}
                />
                <Route
                  path="/lagrange-multipliers/2"
                  element={<Layout body={<LagrangePart2 />} />}
                />

                {/* 3D Analytical Geometry & Quadric Surfaces */}
                <Route
                  path="/3d-geometry"
                  element={<Navigate to="/3d-geometry/1" replace />}
                />
                <Route
                  path="/3d-geometry/1"
                  element={<Layout body={<Geometry3DPart1 />} />}
                />
                <Route
                  path="/3d-geometry/2"
                  element={<Layout body={<Geometry3DPart2 />} />}
                />

                {/* Stokes Theorem */}
                <Route
                  path="/stokes-theorem"
                  element={<Navigate to="/stokes-theorem/1" replace />}
                />
                <Route
                  path="/stokes-theorem/1"
                  element={<Layout body={<StokesPart1 />} />}
                />
                <Route
                  path="/stokes-theorem/2"
                  element={<Layout body={<StokesPart2 />} />}
                />

                {/* Divergence and Curl */}
                <Route
                  path="/divergence-curl"
                  element={<Navigate to="/divergence-curl/1" replace />}
                />
                <Route
                  path="/divergence-curl/1"
                  element={<Layout body={<DivergencePart1 />} />}
                />
                <Route
                  path="/divergence-curl/2"
                  element={<Layout body={<DivergencePart2 />} />}
                />

                {/* Linear Algebra */}
                <Route
                  path="/linear-algebra/overview"
                  element={<Layout body={<LinearAlgebraOverview />} />}
                />
                <Route
                  path="/courses/linear-algebra/overview"
                  element={<Layout body={<LinearAlgebraOverview />} />}
                />
                <Route
                  path="/linear-algebra/linear-equations"
                  element={
                    <Navigate to="/linear-algebra/linear-equations/1" replace />
                  }
                />
                <Route
                  path="/linear-algebra/linear-equations/1"
                  element={<Layout body={<LinearEquationsPart1 />} />}
                />
                <Route
                  path="/linear-algebra/linear-equations/2"
                  element={<Layout body={<LinearEquationsPart2 />} />}
                />
                <Route
                  path="/linear-algebra/vectors"
                  element={<Navigate to="/linear-algebra/vectors/1" replace />}
                />
                <Route
                  path="/linear-algebra/vectors/1"
                  element={<Layout body={<VectorsPart1 />} />}
                />
                <Route
                  path="/linear-algebra/vectors/2"
                  element={<Layout body={<VectorsPart2 />} />}
                />
                <Route
                  path="/linear-algebra/matrices"
                  element={<Navigate to="/linear-algebra/matrices/1" replace />}
                />
                <Route
                  path="/linear-algebra/matrices/1"
                  element={<Layout body={<MatricesPart1 />} />}
                />
                <Route
                  path="/linear-algebra/matrices/2"
                  element={<Layout body={<MatricesPart2 />} />}
                />
                <Route
                  path="/linear-algebra/systems"
                  element={<Navigate to="/linear-algebra/systems/1" replace />}
                />
                <Route
                  path="/linear-algebra/systems/1"
                  element={<Layout body={<SystemsPart1 />} />}
                />
                <Route
                  path="/linear-algebra/systems/2"
                  element={<Layout body={<SystemsPart2 />} />}
                />
                <Route
                  path="/linear-algebra/eigen"
                  element={<Navigate to="/linear-algebra/eigen/1" replace />}
                />
                <Route
                  path="/linear-algebra/eigen/1"
                  element={<Layout body={<EigenPart1 />} />}
                />
                <Route
                  path="/linear-algebra/eigen/2"
                  element={<Layout body={<EigenPart2 />} />}
                />

                {/* Linear Transformations */}
                <Route
                  path="/linear-algebra/transformations"
                  element={
                    <Navigate to="/linear-algebra/transformations/1" replace />
                  }
                />
                <Route
                  path="/linear-algebra/transformations/1"
                  element={<Layout body={<TransformPart1 />} />}
                />
                <Route
                  path="/linear-algebra/transformations/2"
                  element={<Layout body={<TransformPart2 />} />}
                />

                {/* Orthogonality & Least Squares */}
                <Route
                  path="/linear-algebra/orthogonality"
                  element={
                    <Navigate to="/linear-algebra/orthogonality/1" replace />
                  }
                />
                <Route
                  path="/linear-algebra/orthogonality/1"
                  element={<Layout body={<OrthoPart1 />} />}
                />
                <Route
                  path="/linear-algebra/orthogonality/2"
                  element={<Layout body={<OrthoPart2 />} />}
                />

                {/* Curriculum modules: two parts, two complete topics in each. */}
                {LA_MODULES.flatMap((module) => [
                  <Route
                    key={module.id}
                    path={`/linear-algebra/${module.id}`}
                    element={<Navigate to={getLaModulePath(module)} replace />}
                  />,
                  ...[1, 2].map((part) => (
                    <Route
                      key={`${module.id}-${part}`}
                      path={getLaModulePath(module, part)}
                      element={
                        <Layout
                          body={
                            <LaModulePart moduleId={module.id} part={part} />
                          }
                        />
                      }
                    />
                  )),
                ])}
                {[...LA_TOPIC_REDIRECTS, ...LA_MODULE_REDIRECTS].map(
                  ({ from, to }) => (
                    <Route
                      key={from}
                      path={from}
                      element={<Navigate to={to} replace />}
                    />
                  ),
                )}

                {/* Singular Value Decomposition */}
                <Route
                  path="/linear-algebra/svd"
                  element={<Navigate to="/linear-algebra/svd/1" replace />}
                />
                <Route
                  path="/linear-algebra/svd/1"
                  element={<Layout body={<SvdPart1 />} />}
                />
                <Route
                  path="/linear-algebra/svd/2"
                  element={<Layout body={<SvdPart2 />} />}
                />
                <Route
                  path="/linear-algebra/matrix-sandbox"
                  element={<Layout body={<MatrixSandbox />} />}
                />

                {/* Probability & Statistics */}
                <Route
                  path="/probability-statistics/overview"
                  element={<Layout body={<ProbabilityStatisticsOverview />} />}
                />
                <Route
                  path="/courses/probability-statistics/overview"
                  element={<Layout body={<ProbabilityStatisticsOverview />} />}
                />
                <Route
                  path="/probability-statistics/probability-basics"
                  element={
                    <Navigate
                      to="/probability-statistics/probability-basics/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/probability-basics/1"
                  element={<Layout body={<ProbBasicsPart1 />} />}
                />
                <Route
                  path="/probability-statistics/probability-basics/2"
                  element={<Layout body={<ProbBasicsPart2 />} />}
                />
                <Route
                  path="/probability-statistics/bayes-lab"
                  element={<Layout body={<BayesLab />} />}
                />
                <Route
                  path="/probability-statistics/random-variables"
                  element={
                    <Navigate
                      to="/probability-statistics/random-variables/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/random-variables/1"
                  element={<Layout body={<RandomVarsPart1 />} />}
                />
                <Route
                  path="/probability-statistics/random-variables/2"
                  element={<Layout body={<RandomVarsPart2 />} />}
                />
                <Route
                  path="/probability-statistics/descriptive-statistics"
                  element={
                    <Navigate
                      to="/probability-statistics/descriptive-statistics/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/descriptive-statistics/1"
                  element={<Layout body={<DescriptivePart1 />} />}
                />
                <Route
                  path="/probability-statistics/descriptive-statistics/2"
                  element={<Layout body={<DescriptivePart2 />} />}
                />
                <Route
                  path="/probability-statistics/hypothesis-testing"
                  element={
                    <Navigate
                      to="/probability-statistics/hypothesis-testing/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/hypothesis-testing/1"
                  element={<Layout body={<HypothesisPart1 />} />}
                />
                <Route
                  path="/probability-statistics/hypothesis-testing/2"
                  element={<Layout body={<HypothesisPart2 />} />}
                />
                <Route
                  path="/probability-statistics/regression-correlation"
                  element={
                    <Navigate
                      to="/probability-statistics/regression-correlation/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/regression-correlation/1"
                  element={<Layout body={<RegressionPart1 />} />}
                />
                <Route
                  path="/probability-statistics/regression-correlation/2"
                  element={<Layout body={<RegressionPart2 />} />}
                />

                {/* Dev4 PS new modules */}
                <Route
                  path="/probability-statistics/bayesian-inference"
                  element={
                    <Navigate
                      to="/probability-statistics/bayesian-inference/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/bayesian-inference/1"
                  element={<Layout body={<BayesianInferencePart1 />} />}
                />
                <Route
                  path="/probability-statistics/bayesian-inference/2"
                  element={<Layout body={<BayesianInferencePart2 />} />}
                />
                <Route
                  path="/probability-statistics/maximum-likelihood"
                  element={
                    <Navigate
                      to="/probability-statistics/maximum-likelihood/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/maximum-likelihood/1"
                  element={<Layout body={<MaximumLikelihoodPart1 />} />}
                />
                <Route
                  path="/probability-statistics/maximum-likelihood/2"
                  element={<Layout body={<MaximumLikelihoodPart2 />} />}
                />
                <Route
                  path="/probability-statistics/confidence-intervals"
                  element={
                    <Navigate
                      to="/probability-statistics/confidence-intervals/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/confidence-intervals/1"
                  element={<Layout body={<ConfidenceIntervalsPart1 />} />}
                />
                <Route
                  path="/probability-statistics/confidence-intervals/2"
                  element={<Layout body={<ConfidenceIntervalsPart2 />} />}
                />
                <Route
                  path="/probability-statistics/moment-generating-functions"
                  element={
                    <Navigate
                      to="/probability-statistics/moment-generating-functions/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/moment-generating-functions/1"
                  element={<Layout body={<MomentGeneratingFunctionsPart1 />} />}
                />
                <Route
                  path="/probability-statistics/moment-generating-functions/2"
                  element={<Layout body={<MomentGeneratingFunctionsPart2 />} />}
                />
                <Route
                  path="/probability-statistics/anova"
                  element={
                    <Navigate to="/probability-statistics/anova/1" replace />
                  }
                />
                <Route
                  path="/probability-statistics/anova/1"
                  element={<Layout body={<AnovaPart1 />} />}
                />
                <Route
                  path="/probability-statistics/anova/2"
                  element={<Layout body={<AnovaPart2 />} />}
                />
                <Route
                  path="/probability-statistics/chi-square-tests"
                  element={
                    <Navigate
                      to="/probability-statistics/chi-square-tests/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/chi-square-tests/1"
                  element={<Layout body={<ChiSquareTestsPart1 />} />}
                />
                <Route
                  path="/probability-statistics/chi-square-tests/2"
                  element={<Layout body={<ChiSquareTestsPart2 />} />}
                />
                <Route
                  path="/probability-statistics/nonparametric-tests"
                  element={
                    <Navigate
                      to="/probability-statistics/nonparametric-tests/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/nonparametric-tests/1"
                  element={<Layout body={<NonparametricTestsPart1 />} />}
                />
                <Route
                  path="/probability-statistics/nonparametric-tests/2"
                  element={<Layout body={<NonparametricTestsPart2 />} />}
                />
                <Route
                  path="/probability-statistics/multiple-linear-regression"
                  element={
                    <Navigate
                      to="/probability-statistics/multiple-linear-regression/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/multiple-linear-regression/1"
                  element={<Layout body={<MultipleLinearRegressionPart1 />} />}
                />
                <Route
                  path="/probability-statistics/multiple-linear-regression/2"
                  element={<Layout body={<MultipleLinearRegressionPart2 />} />}
                />
                <Route
                  path="/probability-statistics/joint-marginal-distributions"
                  element={
                    <Navigate
                      to="/probability-statistics/joint-marginal-distributions/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/joint-marginal-distributions/1"
                  element={
                    <Layout body={<JointMarginalDistributionsPart1 />} />
                  }
                />
                <Route
                  path="/probability-statistics/joint-marginal-distributions/2"
                  element={
                    <Layout body={<JointMarginalDistributionsPart2 />} />
                  }
                />
                <Route
                  path="/probability-statistics/multivariate-normal"
                  element={
                    <Navigate
                      to="/probability-statistics/multivariate-normal/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/multivariate-normal/1"
                  element={<Layout body={<MultivariateNormalPart1 />} />}
                />
                <Route
                  path="/probability-statistics/multivariate-normal/2"
                  element={<Layout body={<MultivariateNormalPart2 />} />}
                />
                <Route
                  path="/probability-statistics/stochastic-processes"
                  element={
                    <Navigate
                      to="/probability-statistics/stochastic-processes/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/stochastic-processes/1"
                  element={<Layout body={<StochasticProcessesPart1 />} />}
                />
                <Route
                  path="/probability-statistics/stochastic-processes/2"
                  element={<Layout body={<StochasticProcessesPart2 />} />}
                />
                <Route
                  path="/probability-statistics/central-limit-theorem"
                  element={
                    <Navigate
                      to="/probability-statistics/central-limit-theorem/1"
                      replace
                    />
                  }
                />
                <Route
                  path="/probability-statistics/central-limit-theorem/1"
                  element={<Layout body={<CentralLimitTheoremPart1 />} />}
                />
                <Route
                  path="/probability-statistics/central-limit-theorem/2"
                  element={<Layout body={<CentralLimitTheoremPart2 />} />}
                />
                {/* Tools */}
                <Route
                  path="/test"
                  element={<Layout body={<ContinuityFinder />} />}
                />
                <Route
                  path="/extreme"
                  element={<Layout body={<ExtremeValueFunction />} />}
                />
                <Route
                  path="/volumecalculator"
                  element={<Layout body={<VolumeCalculator />} />}
                />
                <Route
                  path="/analytic-vector-lab"
                  element={<Layout body={<AnalyticVectorLab />} />}
                />
                <Route
                  path="/surface-explorer"
                  element={
                    <Layout
                      body={
                        <Suspense
                          fallback={
                            <LoadingSpinner
                              size="lg"
                              text="Loading 3D view…"
                              fullPage
                            />
                          }
                        >
                          <SurfaceExplorer />
                        </Suspense>
                      }
                    />
                  }
                />
                <Route
                  path="/derivative-visualizer"
                  element={<Navigate to="/taylorx" replace />}
                />

                <Route
                  path="/taylorx"
                  element={<Layout body={<DerivativeTool />} />}
                />
                <Route
                  path="/cheatsheet"
                  element={<Layout body={<CheatSheet />} />}
                />

                {/* Practice Section */}
                <Route
                  path="/practice"
                  element={<Layout body={<PractiseSection />} />}
                />

                {/* AI Personalized Study Plan */}
                <Route
                  path="/study-plan"
                  element={<Layout body={<PersonalizedStudyPlan />} />}
                />

                {/* Peer Leaderboard */}
                <Route
                  path="/leaderboard"
                  element={<Layout body={<Leaderboard />} />}
                />

                {/* Catch-all */}
                <Route path="*" element={<Layout body={<NotFound />} />} />
              </Routes>
              <Chatbot />
              <BackToTop />
            </ErrorBoundary>
          </BrowserRouter>
        </ProgressProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
