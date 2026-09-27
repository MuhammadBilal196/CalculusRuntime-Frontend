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

test("each module has metadata",()=>{LINEAR_ALGEBRA_MODULE_GROUPS.forEach((module)=>{expect(module.description).toBeTruthy();expect(module.meta).toBeTruthy();});});

test("each part has metadata",()=>{LINEAR_ALGEBRA_MODULE_GROUPS.forEach((module)=>module.parts.forEach((part)=>{expect(part.title).toBeTruthy();expect(part.description).toBeTruthy();}));});

test("topic paths are unique",()=>{const paths=LINEAR_ALGEBRA_MODULE_GROUPS.flatMap((module)=>module.parts.flatMap((part)=>part.topics.map((topic)=>topic.path)));expect(new Set(paths).size).toBe(paths.length);});

test("module A has two topics per part",()=>{expect(getLinearAlgebraModuleGroup("module-a").parts.map((part)=>part.topics.length)).toEqual([2,2]);});

test("module B has two topics per part",()=>{expect(getLinearAlgebraModuleGroup("module-b").parts.map((part)=>part.topics.length)).toEqual([2,2]);});

test("module C has two topics per part",()=>{expect(getLinearAlgebraModuleGroup("module-c").parts.map((part)=>part.topics.length)).toEqual([2,2]);});

test("module A title is stable",()=>{expect(getLinearAlgebraModuleGroup("module-a").title).toBe("Matrix Decompositions & Factorizations");});

test("module B title is stable",()=>{expect(getLinearAlgebraModuleGroup("module-b").title).toBe("Advanced Vector & Matrix Structure");});

test("module A has the expected first topic",()=>{expect(getLinearAlgebraModuleGroup("module-a").parts[0].topics[0].id).toBe("lu-decomposition");});

test("module A has the expected second topic",()=>{expect(getLinearAlgebraModuleGroup("module-a").parts[0].topics[1].id).toBe("cholesky-decomposition");});

test("module A part two starts with Jordan form",()=>{expect(getLinearAlgebraModuleGroup("module-a").parts[1].topics[0].id).toBe("jordan-normal-form");});

test("module A part two ends with conditioning",()=>{expect(getLinearAlgebraModuleGroup("module-a").parts[1].topics[1].id).toBe("matrix-norms-conditioning");});
