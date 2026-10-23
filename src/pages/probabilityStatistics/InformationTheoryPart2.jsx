import PsTopicPart from "./PsTopicPart";
import CrossEntropyKlGuide from "./CrossEntropyKlGuide";

export default function InformationTheoryPart2() {
  return (
    <PsTopicPart
      sectionId="ps-it-2"
      title="Information Theory · Part 2: Cross-Entropy and KL Divergence"
      path="/probability-statistics/information-theory/2"
      Guide={CrossEntropyKlGuide}
      part={2}
      nextPath="/probability-statistics/overview"
      nextLabel="Back to all modules"
    />
  );
}