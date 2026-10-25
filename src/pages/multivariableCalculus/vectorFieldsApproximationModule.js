// Vector Fields & Approximation Theory — 4 topics on 2 pages (2 topics each).
import VectorPotentialsGuide, {
  VECTOR_POTENTIALS_NAV,
  VECTOR_POTENTIALS_QUIZ_KEY,
} from "./VectorPotentialsGuide";
import MultivariableTaylorSeriesGuide, {
  MULTIVARIABLE_TAYLOR_NAV,
  MULTIVARIABLE_TAYLOR_QUIZ_KEY,
} from "./MultivariableTaylorSeriesGuide";
import ImplicitFunctionTheoremGuide, {
  IMPLICIT_FUNCTION_NAV,
  IMPLICIT_FUNCTION_QUIZ_KEY,
} from "./ImplicitFunctionTheoremGuide";
import DirectionalDerivativesGuide, {
  DIRECTIONAL_DERIVATIVES_NAV,
  DIRECTIONAL_DERIVATIVES_QUIZ_KEY,
} from "./DirectionalDerivativesGuide";

export const VECTOR_FIELDS_BASE = "/vector-fields-approximation";

export const VECTOR_FIELDS_TOPICS = [
  {
    part: 1,
    title: "Vector Potentials",
    quizKey: VECTOR_POTENTIALS_QUIZ_KEY,
    nav: VECTOR_POTENTIALS_NAV,
    Component: VectorPotentialsGuide,
  },
  {
    part: 1,
    title: "Multivariable Taylor Series",
    quizKey: MULTIVARIABLE_TAYLOR_QUIZ_KEY,
    nav: MULTIVARIABLE_TAYLOR_NAV,
    Component: MultivariableTaylorSeriesGuide,
  },
  {
    part: 2,
    title: "Implicit Function Theorem",
    quizKey: IMPLICIT_FUNCTION_QUIZ_KEY,
    nav: IMPLICIT_FUNCTION_NAV,
    Component: ImplicitFunctionTheoremGuide,
  },
  {
    part: 2,
    title: "Directional Derivatives in n Dimensions",
    quizKey: DIRECTIONAL_DERIVATIVES_QUIZ_KEY,
    nav: DIRECTIONAL_DERIVATIVES_NAV,
    Component: DirectionalDerivativesGuide,
  },
];
