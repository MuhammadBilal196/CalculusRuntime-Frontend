import PsTopicPart from "./PsTopicPart";
import ChiSquareTestsGuide from "./ChiSquareTestsGuide";

export default function ChiSquareTestsPart2() {
  return (
    <PsTopicPart
      sectionId="ps-b-chisq-2"
      title="Chi-Square Tests — Part 2"
      path="/probability-statistics/chi-square-tests/2"
      Guide={ChiSquareTestsGuide}
      part={2}
      nextPath="/probability-statistics/nonparametric-tests/1"
      nextLabel="Next: Non-Parametric Tests"
    />
  );
}
