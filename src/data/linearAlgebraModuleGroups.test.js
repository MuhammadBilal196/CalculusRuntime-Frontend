import {
  LINEAR_ALGEBRA_MODULE_GROUPS,
  getLinearAlgebraModuleGroup,
  getLinearAlgebraModulePart,
} from "./linearAlgebraModuleGroups";

test("module ids are unique",()=>{const ids=LINEAR_ALGEBRA_MODULE_GROUPS.map((module)=>module.id);expect(new Set(ids).size).toBe(ids.length);});

test("part ids are unique",()=>{const ids=LINEAR_ALGEBRA_MODULE_GROUPS.flatMap((module)=>module.parts.map((part)=>part.id));expect(new Set(ids).size).toBe(ids.length);});

test("topic ids are unique",()=>{const ids=LINEAR_ALGEBRA_MODULE_GROUPS.flatMap((module)=>module.parts.flatMap((part)=>part.topics.map((topic)=>topic.id)));expect(new Set(ids).size).toBe(ids.length);});

test("every topic has a title",()=>{LINEAR_ALGEBRA_MODULE_GROUPS.forEach((module)=>module.parts.forEach((part)=>part.topics.forEach((topic)=>expect(topic.title).toBeTruthy())));});

test("every topic has a route",()=>{LINEAR_ALGEBRA_MODULE_GROUPS.forEach((module)=>module.parts.forEach((part)=>part.topics.forEach((topic)=>expect(topic.path).toMatch(/^\/linear-algebra\//))));});

test("module A contains four topics",()=>{expect(getLinearAlgebraModuleGroup("module-a").parts.flatMap((part)=>part.topics)).toHaveLength(4);});

test("module B contains four topics",()=>{expect(getLinearAlgebraModuleGroup("module-b").parts.flatMap((part)=>part.topics)).toHaveLength(4);});

test("module C contains four topics",()=>{expect(getLinearAlgebraModuleGroup("module-c").parts.flatMap((part)=>part.topics)).toHaveLength(4);});

test("unknown module lookup returns null",()=>{expect(getLinearAlgebraModuleGroup("missing")).toBeNull();});

test("unknown part lookup returns null",()=>{expect(getLinearAlgebraModulePart("missing")).toBeNull();});

test("part lookup returns parent module",()=>{expect(getLinearAlgebraModulePart("module-a-1").module.id).toBe("module-a");});

test("part lookup returns requested part",()=>{expect(getLinearAlgebraModulePart("module-b-2").part.id).toBe("module-b-2");});
