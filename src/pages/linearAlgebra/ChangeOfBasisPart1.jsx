import LaTopicPart from "./LaTopicPart";
import ChangeOfBasisGuide from "./ChangeOfBasisGuide";

export default function ChangeOfBasisPart1() {
  return (
    <LaTopicPart
      sectionId="la-change-basis-1"
      title="Change of Basis & Similarity — Part 1"
      path="/linear-algebra/change-of-basis-similarity/1"
      Guide={ChangeOfBasisGuide}
      part={1}
      nextPath="/linear-algebra/change-of-basis-similarity/2"
      nextLabel="Similarity transformations"
    />
  );
}
