import PsTopicPart from "./PsTopicPart";
import BayesianInferenceGuide from "./BayesianInferenceGuide";

export default function BayesianInferencePart2() {
  return (
    <PsTopicPart
      sectionId="ps-a-bayes-2"
      title="Bayesian Inference — Part 2"
      path="/probability-statistics/bayesian-inference/2"
      Guide={BayesianInferenceGuide}
      part={2}
      nextPath="/probability-statistics/maximum-likelihood/1"
      nextLabel="Next: MLE"
    />
  );
}
