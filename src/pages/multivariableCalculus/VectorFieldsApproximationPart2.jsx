import TopicModulePage from "../courses/TopicModulePage";
import { VECTOR_FIELDS_BASE, VECTOR_FIELDS_TOPICS } from "./vectorFieldsApproximationModule";

export default function VectorFieldsApproximationPart2() {
  return (
    <TopicModulePage
      courseTitle="Multivariable Calculus"
      moduleTitle="Vector Fields & Approximation Theory"
      part={2}
      moduleTopics={VECTOR_FIELDS_TOPICS}
      basePath={VECTOR_FIELDS_BASE}
      completion={{
        sectionId: "vector-fields-approximation-2",
        nextPath: "/multivariable-calculus/potential-theory",
        nextLabel: "Next module",
        courseId: "multivariable-calculus",
      }}
    />
  );
}
