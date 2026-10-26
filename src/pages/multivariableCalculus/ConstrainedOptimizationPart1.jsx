import TopicModulePage from "../courses/TopicModulePage";
import { OPTIMIZATION_BASE, OPTIMIZATION_TOPICS } from "./optimizationModule";

export default function ConstrainedOptimizationPart1() {
  return (
    <TopicModulePage
      courseTitle="Multivariable Calculus"
      moduleTitle="Constrained & Unconstrained Optimization"
      part={1}
      moduleTopics={OPTIMIZATION_TOPICS}
      basePath={OPTIMIZATION_BASE}
      completion={{
        sectionId: "optimization-1",
        nextPath: "/constrained-unconstrained-optimization/2",
        nextLabel: "Continue to Part 2",
        courseId: "multivariable-calculus",
      }}
    />
  );
}
