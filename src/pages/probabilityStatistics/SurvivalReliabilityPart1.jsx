import PsTopicPart from "./PsTopicPart";
import CensoringKaplanMeierGuide from "./CensoringKaplanMeierGuide";

export default function SurvivalReliabilityPart1() {
  return (
    <PsTopicPart
      sectionId="ps-sv-1"
      title="Survival and Reliability · Part 1: Censoring and Kaplan-Meier Estimation"
      path="/probability-statistics/survival-reliability/1"
      Guide={CensoringKaplanMeierGuide}
      part={1}
      nextPath="/probability-statistics/survival-reliability/2"
      nextLabel="Part 2: Hazard Functions and Survival Models"
    />
  );
}
