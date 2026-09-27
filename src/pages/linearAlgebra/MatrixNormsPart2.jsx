import LaTopicPart from "./LaTopicPart";
import MatrixNormsGuide from "./MatrixNormsGuide";

export default function MatrixNormsPart2() {
  return (
    <LaTopicPart
      sectionId="la-a-norms-2"
      title={"Vector & Matrix Norms, Condition Number — Part 2"}
      path="/linear-algebra/matrix-norms-conditioning/2"
      Guide={MatrixNormsGuide}
      part={2}
      nextPath="/linear-algebra/overview#module-a"
      nextLabel="Review Module A"
    />
  );
}
