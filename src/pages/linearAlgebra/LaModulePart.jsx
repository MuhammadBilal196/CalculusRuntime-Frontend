import LaTopicPart from "./LaTopicPart";
import LaModuleGuide from "./LaModuleGuide";
import { getLaModule, getLaModulePath } from "../../data/laModules";

export default function LaModulePart({ moduleId, part }) {
  const module = getLaModule(moduleId);
  return (
    <LaTopicPart
      sectionId={`la-${moduleId}-${part}`}
      title={`${module.title} — Part ${part}`}
      path={getLaModulePath(module, part)}
      Guide={LaModuleGuide}
      guideProps={{ moduleId }}
      part={part}
      nextPath={part === 1 ? getLaModulePath(module, 2) : `/linear-algebra/overview#${module.overviewAnchor}`}
      nextLabel={part === 1 ? "Continue to topics 3 and 4" : "Return to the course overview"}
    />
  );
}
