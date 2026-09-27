import LaTopicPart from "./LaTopicPart";
import JordanNormalFormGuide from "./JordanNormalFormGuide";

export default function JordanNormalFormPart2() {
  return (
    <LaTopicPart
      sectionId="la-a-jordan-2"
      title={"Jordan Normal Form — Part 2"}
      path="/linear-algebra/jordan-normal-form/2"
      Guide={JordanNormalFormGuide}
      part={2}
      nextPath="/linear-algebra/matrix-norms-conditioning/1"
      nextLabel="Next topic"
    />
  );
}
