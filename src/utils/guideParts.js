// Finds which course module a two-part guide route belongs to, so every
// guide sidebar can show the same "Part 1 · Part 2" switcher.
import { COURSES } from "../data/courses";

const PART_PATH = /^(.*)\/([12])\/?$/;

export function findGuideModule(pathname = "") {
  const match = pathname.match(PART_PATH);
  if (!match) return null;
  const base = match[1];
  const part = Number(match[2]);
  if (!base) return null;

  for (const course of COURSES) {
    for (const module of course.modules || []) {
      if (module.path === `${base}/1` || module.path === `${base}/2`) {
        return {
          courseId: course.id,
          courseTitle: course.title,
          moduleTitle: module.title,
          base,
          part,
          parts: [1, 2],
        };
      }
    }
  }
  return null;
}
