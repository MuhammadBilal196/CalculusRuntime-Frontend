import {
  LINEAR_ALGEBRA_MODULE_GROUPS,
  getLinearAlgebraModuleGroup,
  getLinearAlgebraModulePart,
} from "./linearAlgebraModuleGroups";

test("module ids are unique",()=>{const ids=LINEAR_ALGEBRA_MODULE_GROUPS.map((module)=>module.id);expect(new Set(ids).size).toBe(ids.length);});

test("part ids are unique",()=>{const ids=LINEAR_ALGEBRA_MODULE_GROUPS.flatMap((module)=>module.parts.map((part)=>part.id));expect(new Set(ids).size).toBe(ids.length);});

test("topic ids are unique",()=>{const ids=LINEAR_ALGEBRA_MODULE_GROUPS.flatMap((module)=>module.parts.flatMap((part)=>part.topics.map((topic)=>topic.id)));expect(new Set(ids).size).toBe(ids.length);});

test("every topic has a title",()=>{LINEAR_ALGEBRA_MODULE_GROUPS.forEach((module)=>module.parts.forEach((part)=>part.topics.forEach((topic)=>expect(topic.title).toBeTruthy())));});
