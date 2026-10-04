import PsTopicPart from "./PsTopicPart";
import AnovaGuide from "./AnovaGuide";

export default function AnovaPart2() {
  return (
    <PsTopicPart
      sectionId="ps-b-anova-2"
      title="Analysis of Variance (ANOVA) — Part 2"
      path="/probability-statistics/anova/2"
      Guide={AnovaGuide}
      part={2}
      nextPath="/probability-statistics/chi-square-tests/1"
      nextLabel="Next: Chi-Square Tests"
    />
  );
}
