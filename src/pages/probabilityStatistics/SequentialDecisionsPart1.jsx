import PsTopicPart from "./PsTopicPart";
import SequentialProbabilityRatioGuide from "./SequentialProbabilityRatioGuide";

export default function SequentialDecisionsPart1() {
  return (
    <PsTopicPart
      sectionId="ps-sd-1"
      title="Sequential and Multiple Decisions · Part 1: Sequential Probability Ratio Tests"
      path="/probability-statistics/sequential-multiple-decisions/1"
      Guide={SequentialProbabilityRatioGuide}
      part={1}
      nextPath="/probability-statistics/sequential-multiple-decisions/2"
      nextLabel="Part 2: Multiple Testing and False Discoveries"
    />
  );
}
