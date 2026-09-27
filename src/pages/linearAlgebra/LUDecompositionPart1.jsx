import LaTopicPart from "./LaTopicPart";
import LUDecompositionGuide from "./LUDecompositionGuide";

export default function LUDecompositionPart1() {
  return (
    <LaTopicPart
      sectionId="la-a-lu-1"
      title={"LU Decomposition — Part 1"}
      path="/linear-algebra/lu-decomposition/1"
      Guide={LUDecompositionGuide}
      part={1}
      nextPath="/linear-algebra/lu-decomposition/2"
      nextLabel="Applications and topic quiz"
    />
  );
}
