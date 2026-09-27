import LaTopicPart from "./LaTopicPart";
import AffineTransformationsGuide from "./AffineTransformationsGuide";

export default function AffineTransformationsPart1() {
  return (
    <LaTopicPart
      sectionId="la-affine-1"
      title="Affine Transformations & Homogeneous Coordinates — Part 1"
      path="/linear-algebra/affine-homogeneous/1"
      Guide={AffineTransformationsGuide}
      part={1}
      nextPath="/linear-algebra/affine-homogeneous/2"
      nextLabel="Compositions and applications"
    />
  );
}
