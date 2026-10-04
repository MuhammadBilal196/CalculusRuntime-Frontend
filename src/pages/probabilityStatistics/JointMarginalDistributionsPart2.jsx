import PsTopicPart from "./PsTopicPart";
import JointMarginalDistributionsGuide from "./JointMarginalDistributionsGuide";

export default function JointMarginalDistributionsPart2() {
  return (
    <PsTopicPart
      sectionId="ps-c-joint-2"
      title="Joint & Marginal Distributions — Part 2"
      path="/probability-statistics/joint-marginal-distributions/2"
      Guide={JointMarginalDistributionsGuide}
      part={2}
      nextPath="/probability-statistics/multivariate-normal/1"
      nextLabel="Next: Multivariate Normal"
    />
  );
}
