import LaTopicPart from "./LaTopicPart";
import MatrixNormsGuide from "./MatrixNormsGuide";

export default function MatrixNormsPart1() {
  return (
    <LaTopicPart
      sectionId="la-a-norms-1"
      title={"Vector & Matrix Norms, Condition Number — Part 1"}
      path="/linear-algebra/matrix-norms-conditioning/1"
      Guide={MatrixNormsGuide}
      part={1}
      nextPath="/linear-algebra/matrix-norms-conditioning/2"
      nextLabel="Applications and topic quiz"
    />
  );
}
