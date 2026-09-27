import LaTopicPart from "./LaTopicPart";
import ChangeOfBasisGuide from "./ChangeOfBasisGuide";

export default function ChangeOfBasisPart2() {
  return (
    <LaTopicPart
      sectionId="la-change-basis-2"
      title="Change of Basis & Similarity — Part 2"
      path="/linear-algebra/change-of-basis-similarity/2"
      Guide={ChangeOfBasisGuide}
      part={2}
      nextPath="/linear-algebra/overview"
      nextLabel="Course overview"
    />
  );
}
