import TopicModulePage from "../courses/TopicModulePage";
import {
  COORDINATE_TRANSFORMATIONS_BASE,
  COORDINATE_TRANSFORMATIONS_TOPICS,
} from "./coordinateTransformationsModule";

export default function CoordinateTransformationsPart2() {
  return (
    <TopicModulePage
      courseTitle="Multivariable Calculus"
      moduleTitle="Coordinate Transformations & Surfaces"
      part={2}
      moduleTopics={COORDINATE_TRANSFORMATIONS_TOPICS}
      basePath={COORDINATE_TRANSFORMATIONS_BASE}
      completion={{
        sectionId: "coordinate-transformations-2",
        nextPath: "/courses/multivariable-calculus",
        nextLabel: "Back to Multivariable Calculus",
        courseId: "multivariable-calculus",
      }}
    />
  );
}
