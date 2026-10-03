import PsTopicPart from "./PsTopicPart";
import StochasticProcessesGuide from "./StochasticProcessesGuide";

export default function StochasticProcessesPart1() {
  return (
    <PsTopicPart
      sectionId="ps-c-stoch-1"
      title="Stochastic Processes — Part 1"
      path="/probability-statistics/stochastic-processes/1"
      Guide={StochasticProcessesGuide}
      part={1}
      nextPath="/probability-statistics/stochastic-processes/2"
      nextLabel="Part 2 and topic quiz"
    />
  );
}
