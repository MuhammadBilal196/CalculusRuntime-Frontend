import LaTopicPart from "./LaTopicPart";
import CholeskyDecompositionGuide from "./CholeskyDecompositionGuide";

export default function CholeskyDecompositionPart1() {
  return (
    <LaTopicPart
      sectionId="la-a-cholesky-1"
      title={"Cholesky Decomposition — Part 1"}
      path="/linear-algebra/cholesky-decomposition/1"
      Guide={CholeskyDecompositionGuide}
      part={1}
      nextPath="/linear-algebra/cholesky-decomposition/2"
      nextLabel="Applications and topic quiz"
    />
  );
}
