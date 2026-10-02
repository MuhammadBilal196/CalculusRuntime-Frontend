import PsTopicPart from "./PsTopicPart";
import BayesianInferenceGuide from "./BayesianInferenceGuide";

export default function BayesianInferencePart1() {
  return (
    <PsTopicPart
      sectionId="ps-a-bayes-1"
      title="Bayesian Inference — Part 1"
      path="/probability-statistics/bayesian-inference/1"
      Guide={BayesianInferenceGuide}
      part={1}
      nextPath="/probability-statistics/bayesian-inference/2"
      nextLabel="Part 2 and topic quiz"
    />
  );
}
