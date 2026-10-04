import PsTopicPart from "./PsTopicPart";
import AnovaGuide from "./AnovaGuide";

export default function AnovaPart1() {
  return (
    <PsTopicPart
      sectionId="ps-b-anova-1"
      title="Analysis of Variance (ANOVA) — Part 1"
      path="/probability-statistics/anova/1"
      Guide={AnovaGuide}
      part={1}
      nextPath="/probability-statistics/anova/2"
      nextLabel="Part 2 and topic quiz"
    />
  );
}
