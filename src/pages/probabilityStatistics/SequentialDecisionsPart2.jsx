import PsTopicPart from "./PsTopicPart";
import MultipleTestingGuide from "./MultipleTestingGuide";

export default function SequentialDecisionsPart2() {
  return (
    <PsTopicPart
      sectionId="ps-sd-2"
      title="Sequential and Multiple Decisions · Part 2: Multiple Testing and False Discoveries"
      path="/probability-statistics/sequential-multiple-decisions/2"
      Guide={MultipleTestingGuide}
      part={2}
      nextPath="/probability-statistics/overview"
      nextLabel="Back to all modules"
    />
  );
}
