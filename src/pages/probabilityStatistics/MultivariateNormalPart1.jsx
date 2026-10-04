import PsTopicPart from "./PsTopicPart";
import MultivariateNormalGuide from "./MultivariateNormalGuide";

export default function MultivariateNormalPart1() {
  return (
    <PsTopicPart
      sectionId="ps-c-mvn-1"
      title="Multivariate Normal Distribution — Part 1"
      path="/probability-statistics/multivariate-normal/1"
      Guide={MultivariateNormalGuide}
      part={1}
      nextPath="/probability-statistics/multivariate-normal/2"
      nextLabel="Part 2 and topic quiz"
    />
  );
}
