import LaTopicPart from "./LaTopicPart";
import MarkovChainsGuide from "./MarkovChainsGuide";

export default function MarkovChainsPart2() {
  return (
    <LaTopicPart
      sectionId="la-markov-2"
      title="Markov Chains & Steady States — Part 2"
      path="/linear-algebra/markov-chains-steady-states/2"
      Guide={MarkovChainsGuide}
      part={2}
      nextPath="/linear-algebra/overview"
      nextLabel="Course overview"
    />
  );
}
