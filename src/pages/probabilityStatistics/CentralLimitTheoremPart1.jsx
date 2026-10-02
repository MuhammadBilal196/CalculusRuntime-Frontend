import PsTopicPart from "./PsTopicPart";
import CentralLimitTheoremGuide from "./CentralLimitTheoremGuide";

export default function CentralLimitTheoremPart1() {
  return (
    <PsTopicPart
      sectionId="ps-c-clt-1"
      title="Central Limit Theorem & Sampling Distributions — Part 1"
      path="/probability-statistics/central-limit-theorem/1"
      Guide={CentralLimitTheoremGuide}
      part={1}
      nextPath="/probability-statistics/central-limit-theorem/2"
      nextLabel="Part 2 and topic quiz"
    />
  );
}
