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
    />
  );
}
