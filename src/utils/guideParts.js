// Finds which course module a guide route belongs to, so every
// guide sidebar and header can show course back-navigation and Part 1 / Part 2 tabs.
import { COURSES } from "../data/courses";

const PART_PATH = /^(.*)\/([12])\/?$/;

function isStudyModuleCard(module) {
  const meta = (module?.meta || "").toLowerCase();
  if (!module?.path) return false;
  if (module.path.endsWith("/overview") || module.path === "/practice" || module.path.startsWith("/quiz/")) {
    return false;
  }
  if (meta.includes("tool") || meta.includes("interactive")) {
    return false;
  }
  return true;
}

export function findGuideModule(pathname = "") {
  const cleanPath = (pathname || "").replace(/#.*$/, "").replace(/\/+$/, "") || "/";
  const match = cleanPath.match(PART_PATH);
  const base = match ? match[1] : cleanPath;
  const part = match ? Number(match[2]) : null;
  if (!base) return null;

  for (const course of COURSES) {
    const modules = course.modules || [];
    const studyModules = modules.filter(isStudyModuleCard);
    for (let i = 0; i < modules.length; i += 1) {
      const module = modules[i];
      const matchesTwoPart = match && (module.path === `${base}/1` || module.path === `${base}/2`);
      const matchesSinglePage = !match && module.path === cleanPath && isStudyModuleCard(module);
      if (matchesTwoPart || matchesSinglePage) {
        const studyIdx = studyModules.findIndex((m) => m.path === module.path);
        const prevModule = studyIdx > 0 ? studyModules[studyIdx - 1] : null;
        const nextModule = studyIdx >= 0 && studyIdx < studyModules.length - 1 ? studyModules[studyIdx + 1] : null;
        return {
          courseId: course.id,
          courseTitle: course.title,
          coursePath: `/courses/${course.id}`,
          overviewPath: modules.find((m) => m.path.endsWith("/overview"))?.path || `/courses/${course.id}`,
          moduleTitle: module.title,
          base,
          part: matchesTwoPart ? part : 1,
          parts: matchesTwoPart ? [1, 2] : [1],
          isTwoPart: Boolean(matchesTwoPart),
          prevPartPath: matchesTwoPart && part === 2 ? `${base}/1` : null,
          nextPartPath: matchesTwoPart && part === 1 ? `${base}/2` : null,
          prevModule,
          nextModule,
        };
      }
    }
  }
  return null;
}
