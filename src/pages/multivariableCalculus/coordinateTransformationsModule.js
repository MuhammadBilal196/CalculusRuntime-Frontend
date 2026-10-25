// Coordinate Transformations & Surfaces — 4 topics on 2 pages (2 topics each).
import JacobiansTopic, { JACOBIANS_NAV, JACOBIANS_QUIZ_KEY } from "./JacobiansGuide";
import CurvilinearCoordinatesTopic, {
  CURVILINEAR_NAV,
  CURVILINEAR_QUIZ_KEY,
} from "./CurvilinearCoordinatesGuide";
import ParametrizedSurfaceAreaTopic, {
  PARAMETRIZED_SURFACE_AREA_NAV,
  PARAMETRIZED_SURFACE_AREA_QUIZ_KEY,
} from "./ParametrizedSurfaceAreaGuide";
import FluxIntegralsGeneralSurfacesTopic, {
  FLUX_NAV,
  FLUX_QUIZ_KEY,
} from "./FluxIntegralsGeneralSurfacesGuide";

export const COORDINATE_TRANSFORMATIONS_BASE = "/coordinate-transformations";

export const COORDINATE_TRANSFORMATIONS_TOPICS = [
  {
    part: 1,
    title: "Jacobians & Change of Variables",
    quizKey: JACOBIANS_QUIZ_KEY,
    nav: JACOBIANS_NAV,
    Component: JacobiansTopic,
  },
  {
    part: 1,
    title: "Curvilinear Coordinate Systems",
    quizKey: CURVILINEAR_QUIZ_KEY,
    nav: CURVILINEAR_NAV,
    Component: CurvilinearCoordinatesTopic,
  },
  {
    part: 2,
    title: "Parametrized Surface Area",
    quizKey: PARAMETRIZED_SURFACE_AREA_QUIZ_KEY,
    nav: PARAMETRIZED_SURFACE_AREA_NAV,
    Component: ParametrizedSurfaceAreaTopic,
  },
  {
    part: 2,
    title: "Flux Integrals over General Surfaces",
    quizKey: FLUX_QUIZ_KEY,
    nav: FLUX_NAV,
    Component: FluxIntegralsGeneralSurfacesTopic,
  },
];
