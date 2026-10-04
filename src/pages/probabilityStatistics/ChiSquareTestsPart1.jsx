import PsTopicPart from "./PsTopicPart";
import ChiSquareTestsGuide from "./ChiSquareTestsGuide";

export default function ChiSquareTestsPart1() {
  return (
    <PsTopicPart
      sectionId="ps-b-chisq-1"
      title="Chi-Square Tests — Part 1"
      path="/probability-statistics/chi-square-tests/1"
      Guide={ChiSquareTestsGuide}
      part={1}
      nextPath="/probability-statistics/chi-square-tests/2"
      nextLabel="Part 2 and topic quiz"
    />
  );
}
