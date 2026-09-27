import LaTopicPart from "./LaTopicPart";
import ComplexVectorSpacesGuide from "./ComplexVectorSpacesGuide";

export default function ComplexVectorSpacesPart1() {
  return (
    <LaTopicPart
      sectionId="la-complex-1"
      title="Complex Vector Spaces — Part 1"
      path="/linear-algebra/complex-vector-spaces/1"
      Guide={ComplexVectorSpacesGuide}
      part={1}
      nextPath="/linear-algebra/complex-vector-spaces/2"
      nextLabel="Hermitian and unitary matrices"
    />
  );
}
