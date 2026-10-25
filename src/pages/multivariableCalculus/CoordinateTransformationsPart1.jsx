import TopicModulePage from "../courses/TopicModulePage";
import {
  COORDINATE_TRANSFORMATIONS_BASE,
  COORDINATE_TRANSFORMATIONS_TOPICS,
} from "./coordinateTransformationsModule";

export default function CoordinateTransformationsPart1() {
  return (
    <TopicModulePage
      courseTitle="Multivariable Calculus"
      moduleTitle="Coordinate Transformations & Surfaces"
      part={1}
      moduleTopics={COORDINATE_TRANSFORMATIONS_TOPICS}
      basePath={COORDINATE_TRANSFORMATIONS_BASE}
      completion={{
        sectionId: "coordinate-transformations-1",
        nextPath: "/coordinate-transformations/2",
        nextLabel: "Part 2: Surface Area & Flux",
        courseId: "multivariable-calculus",
      }}
    />
  );
}
