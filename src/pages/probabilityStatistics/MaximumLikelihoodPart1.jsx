import PsTopicPart from "./PsTopicPart";
import MaximumLikelihoodGuide from "./MaximumLikelihoodGuide";

export default function MaximumLikelihoodPart1() {
  return (
    <PsTopicPart
      sectionId="ps-a-mle-1"
      title="Maximum Likelihood Estimation (MLE) — Part 1"
      path="/probability-statistics/maximum-likelihood/1"
      Guide={MaximumLikelihoodGuide}
      part={1}
      nextPath="/probability-statistics/maximum-likelihood/2"
      nextLabel="Part 2 and topic quiz"
    />
  );
}
