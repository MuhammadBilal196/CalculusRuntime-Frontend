import PsTopicPart from "./PsTopicPart";
import MomentGeneratingFunctionsGuide from "./MomentGeneratingFunctionsGuide";

export default function MomentGeneratingFunctionsPart1() {
  return (
    <PsTopicPart
      sectionId="ps-a-mgf-1"
      title="Moment Generating Functions — Part 1"
      path="/probability-statistics/moment-generating-functions/1"
      Guide={MomentGeneratingFunctionsGuide}
      part={1}
      nextPath="/probability-statistics/moment-generating-functions/2"
      nextLabel="Part 2 and topic quiz"
    />
  );
}
