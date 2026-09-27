import LaTopicPart from "./LaTopicPart";
import PrincipalComponentAnalysisGuide from "./PrincipalComponentAnalysisGuide";

export default function PrincipalComponentAnalysisPart1() {
  return (
    <LaTopicPart
      sectionId="la-pca-1"
      title="Principal Component Analysis — Part 1"
      path="/linear-algebra/principal-component-analysis/1"
      Guide={PrincipalComponentAnalysisGuide}
      part={1}
      nextPath="/linear-algebra/principal-component-analysis/2"
      nextLabel="PCA scores and dimension reduction"
    />
  );
}
