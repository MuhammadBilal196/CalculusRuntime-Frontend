import PsTopicPart from "./PsTopicPart";
import HazardSurvivalModelsGuide from "./HazardSurvivalModelsGuide";

export default function SurvivalReliabilityPart2() {
  return (
    <PsTopicPart
      sectionId="ps-sv-2"
      title="Survival and Reliability · Part 2: Hazard Functions and Survival Models"
      path="/probability-statistics/survival-reliability/2"
      Guide={HazardSurvivalModelsGuide}
      part={2}
      nextPath="/probability-statistics/overview"
      nextLabel="Back to all modules"
    />
  );
}
