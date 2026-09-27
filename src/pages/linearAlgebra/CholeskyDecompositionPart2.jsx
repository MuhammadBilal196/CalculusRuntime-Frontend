import LaTopicPart from "./LaTopicPart";
import CholeskyDecompositionGuide from "./CholeskyDecompositionGuide";

export default function CholeskyDecompositionPart2() {
  return (
    <LaTopicPart
      sectionId="la-a-cholesky-2"
      title={"Cholesky Decomposition — Part 2"}
      path="/linear-algebra/cholesky-decomposition/2"
      Guide={CholeskyDecompositionGuide}
      part={2}
      nextPath="/linear-algebra/jordan-normal-form/1"
      nextLabel="Next topic"
    />
  );
}
