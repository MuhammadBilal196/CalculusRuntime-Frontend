import {
  LINEAR_ALGEBRA_MODULE_GROUPS,
  getLinearAlgebraModuleGroup,
  getLinearAlgebraModulePart,
} from "./linearAlgebraModuleGroups";

test("module ids are unique",()=>{const ids=LINEAR_ALGEBRA_MODULE_GROUPS.map((module)=>module.id);expect(new Set(ids).size).toBe(ids.length);});

test("part ids are unique",()=>{const ids=LINEAR_ALGEBRA_MODULE_GROUPS.flatMap((module)=>module.parts.map((part)=>part.id));expect(new Set(ids).size).toBe(ids.length);});
