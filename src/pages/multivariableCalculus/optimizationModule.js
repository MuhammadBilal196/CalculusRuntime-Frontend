// Constrained & Unconstrained Optimization — 4 topics on 2 pages (2 topics each).
import HessianOptimizationTopic, { HESSIAN_NAV, HESSIAN_QUIZ_KEY } from "./HessianOptimizationGuide";
import KKTConditionsGuide, { KKT_NAV, KKT_QUIZ_KEY } from "./KKTConditionsGuide";
import GlobalExtremaBoundedDomainsGuide, {
  GLOBAL_EXTREMA_NAV,
  GLOBAL_EXTREMA_QUIZ_KEY,
} from "./GlobalExtremaBoundedDomainsGuide";
import {
  GradientDescentNumericalOptimizationGuide,
  GRADIENT_DESCENT_NAV,
  GRADIENT_DESCENT_QUIZ_KEY,
} from "./GradientDescentNumericalOptimizationGuide";

export const OPTIMIZATION_BASE = "/constrained-unconstrained-optimization";

export const OPTIMIZATION_TOPICS = [
  {
    part: 1,
    title: "The Hessian Matrix & Optimization",
    quizKey: HESSIAN_QUIZ_KEY,
    nav: HESSIAN_NAV,
    Component: HessianOptimizationTopic,
  },
  {
    part: 1,
    title: "Inequality Constraints (KKT Conditions)",
    quizKey: KKT_QUIZ_KEY,
    nav: KKT_NAV,
    Component: KKTConditionsGuide,
  },
  {
    part: 2,
    title: "Global Extrema on Bounded Domains",
    quizKey: GLOBAL_EXTREMA_QUIZ_KEY,
    nav: GLOBAL_EXTREMA_NAV,
    Component: GlobalExtremaBoundedDomainsGuide,
  },
  {
    part: 2,
    title: "Gradient Descent & Numerical Optimization",
    quizKey: GRADIENT_DESCENT_QUIZ_KEY,
    nav: GRADIENT_DESCENT_NAV,
    Component: GradientDescentNumericalOptimizationGuide,
  },
];
