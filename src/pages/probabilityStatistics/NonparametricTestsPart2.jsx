import PsTopicPart from "./PsTopicPart";
import NonparametricTestsGuide from "./NonparametricTestsGuide";

export default function NonparametricTestsPart2() {
  return (
    <PsTopicPart
      sectionId="ps-b-nonparam-2"
      title="Non-Parametric Tests — Part 2"
      path="/probability-statistics/nonparametric-tests/2"
      Guide={NonparametricTestsGuide}
      part={2}
      nextPath="/probability-statistics/multiple-linear-regression/1"
      nextLabel="Next: Multiple Linear Regression"
    />
  );
}
