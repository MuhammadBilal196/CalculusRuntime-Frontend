import TopicModulePage from "../courses/TopicModulePage";
import { OPTIMIZATION_BASE, OPTIMIZATION_TOPICS } from "./optimizationModule";

export default function ConstrainedOptimizationPart2() {
  return (
    <TopicModulePage
      courseTitle="Multivariable Calculus"
      moduleTitle="Constrained & Unconstrained Optimization"
      part={2}
      moduleTopics={OPTIMIZATION_TOPICS}
      basePath={OPTIMIZATION_BASE}
      completion={{
        sectionId: "optimization-2",
        nextPath: "/vector-fields-approximation/1",
        nextLabel: "Next module",
        courseId: "multivariable-calculus",
      }}
    />
  );
}
