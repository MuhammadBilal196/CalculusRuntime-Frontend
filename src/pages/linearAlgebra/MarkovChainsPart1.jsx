import LaTopicPart from "./LaTopicPart";
import MarkovChainsGuide from "./MarkovChainsGuide";

export default function MarkovChainsPart1() {
  return (
    <LaTopicPart
      sectionId="la-markov-1"
      title="Markov Chains & Steady States — Part 1"
      path="/linear-algebra/markov-chains-steady-states/1"
      Guide={MarkovChainsGuide}
      part={1}
      nextPath="/linear-algebra/markov-chains-steady-states/2"
      nextLabel="Stationary distributions and long-run behavior"
    />
  );
}
