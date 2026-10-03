import PsTopicPart from "./PsTopicPart";
import MaximumLikelihoodGuide from "./MaximumLikelihoodGuide";

export default function MaximumLikelihoodPart2() {
  return (
    <PsTopicPart
      sectionId="ps-a-mle-2"
      title="Maximum Likelihood Estimation (MLE) — Part 2"
      path="/probability-statistics/maximum-likelihood/2"
      Guide={MaximumLikelihoodGuide}
      part={2}
      nextPath="/probability-statistics/confidence-intervals/1"
      nextLabel="Next: Confidence Intervals"
    />
  );
}
