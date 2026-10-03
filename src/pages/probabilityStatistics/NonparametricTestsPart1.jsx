import PsTopicPart from "./PsTopicPart";
import NonparametricTestsGuide from "./NonparametricTestsGuide";

export default function NonparametricTestsPart1() {
  return (
    <PsTopicPart
      sectionId="ps-b-nonparam-1"
      title="Non-Parametric Tests — Part 1"
      path="/probability-statistics/nonparametric-tests/1"
      Guide={NonparametricTestsGuide}
      part={1}
      nextPath="/probability-statistics/nonparametric-tests/2"
      nextLabel="Part 2 and topic quiz"
    />
  );
}
