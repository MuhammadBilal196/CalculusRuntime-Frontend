import PsTopicPart from "./PsTopicPart";
import JointMarginalDistributionsGuide from "./JointMarginalDistributionsGuide";

export default function JointMarginalDistributionsPart1() {
  return (
    <PsTopicPart
      sectionId="ps-c-joint-1"
      title="Joint & Marginal Distributions — Part 1"
      path="/probability-statistics/joint-marginal-distributions/1"
      Guide={JointMarginalDistributionsGuide}
      part={1}
      nextPath="/probability-statistics/joint-marginal-distributions/2"
      nextLabel="Part 2 and topic quiz"
    />
  );
}
