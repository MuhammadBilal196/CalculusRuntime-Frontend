import PsTopicPart from "./PsTopicPart";
import MultipleLinearRegressionGuide from "./MultipleLinearRegressionGuide";

export default function MultipleLinearRegressionPart2() {
  return (
    <PsTopicPart
      sectionId="ps-b-mlr-2"
      title="Multiple Linear Regression — Part 2"
      path="/probability-statistics/multiple-linear-regression/2"
      Guide={MultipleLinearRegressionGuide}
      part={2}
      nextPath="/probability-statistics/joint-marginal-distributions/1"
      nextLabel="Next: Joint & Marginal"
    />
  );
}
