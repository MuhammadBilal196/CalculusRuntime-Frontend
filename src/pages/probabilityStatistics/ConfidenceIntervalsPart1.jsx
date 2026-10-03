import PsTopicPart from "./PsTopicPart";
import ConfidenceIntervalsGuide from "./ConfidenceIntervalsGuide";

export default function ConfidenceIntervalsPart1() {
  return (
    <PsTopicPart
      sectionId="ps-a-ci-1"
      title="Confidence Intervals — Part 1"
      path="/probability-statistics/confidence-intervals/1"
      Guide={ConfidenceIntervalsGuide}
      part={1}
      nextPath="/probability-statistics/confidence-intervals/2"
      nextLabel="Part 2 and topic quiz"
    />
  );
}
