import PsTopicPart from "./PsTopicPart";
import MultipleLinearRegressionGuide from "./MultipleLinearRegressionGuide";

export default function MultipleLinearRegressionPart1() {
  return (
    <PsTopicPart
      sectionId="ps-b-mlr-1"
      title="Multiple Linear Regression — Part 1"
      path="/probability-statistics/multiple-linear-regression/1"
      Guide={MultipleLinearRegressionGuide}
      part={1}
      nextPath="/probability-statistics/multiple-linear-regression/2"
      nextLabel="Part 2 and topic quiz"
    />
  );
}
