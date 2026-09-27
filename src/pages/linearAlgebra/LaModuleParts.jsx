import LaModulePart from "./LaModulePart";

export function LinearAlgebraModuleAPart1() {
  return <LaModulePart partId="module-a-1" nextPath="/linear-algebra/module-a/2" nextLabel="Module A · Part 2" />;
}
export function LinearAlgebraModuleAPart2() {
  return <LaModulePart partId="module-a-2" nextPath="/linear-algebra/module-b/1" nextLabel="Module B · Part 1" />;
}
export function LinearAlgebraModuleBPart1() {
  return <LaModulePart partId="module-b-1" nextPath="/linear-algebra/module-b/2" nextLabel="Module B · Part 2" />;
}
export function LinearAlgebraModuleBPart2() {
  return <LaModulePart partId="module-b-2" nextPath="/linear-algebra/module-c/1" nextLabel="Module C · Part 1" />;
}
export function LinearAlgebraModuleCPart1() {
  return <LaModulePart partId="module-c-1" nextPath="/linear-algebra/module-c/2" nextLabel="Module C · Part 2" />;
}
export function LinearAlgebraModuleCPart2() {
  return <LaModulePart partId="module-c-2" nextPath="/courses/linear-algebra" nextLabel="Back to Linear Algebra course overview" />;
}
