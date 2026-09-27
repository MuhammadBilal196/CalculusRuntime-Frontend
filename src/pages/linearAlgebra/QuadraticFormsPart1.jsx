import LaTopicPart from "./LaTopicPart";
import QuadraticFormsGuide from "./QuadraticFormsGuide";

export default function QuadraticFormsPart1() {
  return (
    <LaTopicPart
      sectionId="la-quadratic-1"
      title="Quadratic Forms & Definiteness — Part 1"
      path="/linear-algebra/quadratic-forms-definiteness/1"
      Guide={QuadraticFormsGuide}
      part={1}
      nextPath="/linear-algebra/quadratic-forms-definiteness/2"
      nextLabel="Congruence and applications"
    />
  );
}
