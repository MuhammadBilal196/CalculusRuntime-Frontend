import LaTopicPart from "./LaTopicPart";
import PrincipalComponentAnalysisGuide from "./PrincipalComponentAnalysisGuide";

export default function PrincipalComponentAnalysisPart2() {
  return (
    <LaTopicPart
      sectionId="la-pca-2"
      title="Principal Component Analysis — Part 2"
      path="/linear-algebra/principal-component-analysis/2"
      Guide={PrincipalComponentAnalysisGuide}
      part={2}
      nextPath="/linear-algebra/overview"
      nextLabel="Course overview"
    />
  );
}
