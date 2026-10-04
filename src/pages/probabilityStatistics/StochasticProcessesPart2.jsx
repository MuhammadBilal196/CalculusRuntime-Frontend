import PsTopicPart from "./PsTopicPart";
import StochasticProcessesGuide from "./StochasticProcessesGuide";

export default function StochasticProcessesPart2() {
  return (
    <PsTopicPart
      sectionId="ps-c-stoch-2"
      title="Stochastic Processes — Part 2"
      path="/probability-statistics/stochastic-processes/2"
      Guide={StochasticProcessesGuide}
      part={2}
      nextPath="/probability-statistics/central-limit-theorem/1"
      nextLabel="Next: CLT"
    />
  );
}
