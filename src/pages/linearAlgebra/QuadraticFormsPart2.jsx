import LaTopicPart from "./LaTopicPart";
import QuadraticFormsGuide from "./QuadraticFormsGuide";

export default function QuadraticFormsPart2() {
  return (
    <LaTopicPart
      sectionId="la-quadratic-2"
      title="Quadratic Forms & Definiteness — Part 2"
      path="/linear-algebra/quadratic-forms-definiteness/2"
      Guide={QuadraticFormsGuide}
      part={2}
      nextPath="/linear-algebra/overview"
      nextLabel="Course overview"
    />
  );
}
