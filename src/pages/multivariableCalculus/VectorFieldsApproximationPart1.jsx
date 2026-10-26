import TopicModulePage from "../courses/TopicModulePage";
import { VECTOR_FIELDS_BASE, VECTOR_FIELDS_TOPICS } from "./vectorFieldsApproximationModule";

export default function VectorFieldsApproximationPart1() {
  return (
    <TopicModulePage
      courseTitle="Multivariable Calculus"
      moduleTitle="Vector Fields & Approximation Theory"
      part={1}
      moduleTopics={VECTOR_FIELDS_TOPICS}
      basePath={VECTOR_FIELDS_BASE}
      completion={{
        sectionId: "vector-fields-approximation-1",
        nextPath: "/vector-fields-approximation/2",
        nextLabel: "Continue to Part 2",
        courseId: "multivariable-calculus",
      }}
    />
  );
}
