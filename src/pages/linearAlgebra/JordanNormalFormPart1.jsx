import LaTopicPart from "./LaTopicPart";
import JordanNormalFormGuide from "./JordanNormalFormGuide";

export default function JordanNormalFormPart1() {
  return (
    <LaTopicPart
      sectionId="la-a-jordan-1"
      title={"Jordan Normal Form — Part 1"}
      path="/linear-algebra/jordan-normal-form/1"
      Guide={JordanNormalFormGuide}
      part={1}
      nextPath="/linear-algebra/jordan-normal-form/2"
      nextLabel="Applications and topic quiz"
    />
  );
}
