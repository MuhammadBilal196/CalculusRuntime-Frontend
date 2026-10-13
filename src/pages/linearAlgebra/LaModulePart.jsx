import LaTopicPart from "./LaTopicPart";
import LaModuleGuide from "./LaModuleGuide";
import { getLaModule, getLaModuleParts, getLaModulePath } from "../../data/laModules";

export default function LaModulePart({ moduleId, part }) {
  const module = getLaModule(moduleId);
  const hasNextPart = getLaModuleParts(module).includes(part + 1);
  return (
    <LaTopicPart
      sectionId={`la-${moduleId}-${part}`}
      title={`${module.title} — Part ${part}`}
      path={getLaModulePath(module, part)}
      Guide={LaModuleGuide}
      guideProps={{ moduleId }}
      part={part}
      nextPath={hasNextPart ? getLaModulePath(module, part + 1) : `/linear-algebra/overview#${module.overviewAnchor}`}
      nextLabel={hasNextPart ? "Continue to Part 2" : "Return to the course overview"}
    />
  );
}
