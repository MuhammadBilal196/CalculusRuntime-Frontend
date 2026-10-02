import PsTopicPart from "./PsTopicPart";
import MultivariateNormalGuide from "./MultivariateNormalGuide";

export default function MultivariateNormalPart2() {
  return (
    <PsTopicPart
      sectionId="ps-c-mvn-2"
      title="Multivariate Normal Distribution — Part 2"
      path="/probability-statistics/multivariate-normal/2"
      Guide={MultivariateNormalGuide}
      part={2}
      nextPath="/probability-statistics/stochastic-processes/1"
      nextLabel="Next: Stochastic Processes"
    />
  );
}
