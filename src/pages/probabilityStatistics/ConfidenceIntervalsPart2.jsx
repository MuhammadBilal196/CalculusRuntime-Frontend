import PsTopicPart from "./PsTopicPart";
import ConfidenceIntervalsGuide from "./ConfidenceIntervalsGuide";

export default function ConfidenceIntervalsPart2() {
  return (
    <PsTopicPart
      sectionId="ps-a-ci-2"
      title="Confidence Intervals — Part 2"
      path="/probability-statistics/confidence-intervals/2"
      Guide={ConfidenceIntervalsGuide}
      part={2}
      nextPath="/probability-statistics/moment-generating-functions/1"
      nextLabel="Next: MGFs"
    />
  );
}
