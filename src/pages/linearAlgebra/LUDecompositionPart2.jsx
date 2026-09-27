import LaTopicPart from "./LaTopicPart";
import LUDecompositionGuide from "./LUDecompositionGuide";

export default function LUDecompositionPart2() {
  return (
    <LaTopicPart
      sectionId="la-a-lu-2"
      title={"LU Decomposition — Part 2"}
      path="/linear-algebra/lu-decomposition/2"
      Guide={LUDecompositionGuide}
      part={2}
      nextPath="/linear-algebra/cholesky-decomposition/1"
      nextLabel="Next topic"
    />
  );
}
