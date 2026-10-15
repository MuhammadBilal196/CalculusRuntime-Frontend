import PsTopicPart from "./PsTopicPart";
import EntropyMutualInformationGuide from "./EntropyMutualInformationGuide";

export default function InformationTheoryPart1() {
  return (
    <PsTopicPart
      sectionId="ps-it-1"
      title="Information Theory · Part 1: Entropy and Mutual Information"
      path="/probability-statistics/information-theory/1"
      Guide={EntropyMutualInformationGuide}
      part={1}
      nextPath="/probability-statistics/information-theory/2"
      nextLabel="Part 2: Cross-Entropy and KL Divergence"
    />
  );
}
