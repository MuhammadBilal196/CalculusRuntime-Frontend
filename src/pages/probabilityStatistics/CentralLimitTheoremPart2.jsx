import PsTopicPart from "./PsTopicPart";
import CentralLimitTheoremGuide from "./CentralLimitTheoremGuide";

export default function CentralLimitTheoremPart2() {
  return (
    <PsTopicPart
      sectionId="ps-c-clt-2"
      title="Central Limit Theorem & Sampling Distributions — Part 2"
      path="/probability-statistics/central-limit-theorem/2"
      Guide={CentralLimitTheoremGuide}
      part={2}
      nextPath="/probability-statistics/overview"
      nextLabel="Return to overview"
    />
  );
}
