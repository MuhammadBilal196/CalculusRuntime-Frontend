import LaTopicPart from "./LaTopicPart";
import AffineTransformationsGuide from "./AffineTransformationsGuide";

export default function AffineTransformationsPart2() {
  return (
    <LaTopicPart
      sectionId="la-affine-2"
      title="Affine Transformations & Homogeneous Coordinates — Part 2"
      path="/linear-algebra/affine-homogeneous/2"
      Guide={AffineTransformationsGuide}
      part={2}
      nextPath="/linear-algebra/overview"
      nextLabel="Course overview"
    />
  );
}
