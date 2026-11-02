import {
  math,
  parse,
  numeric,
  normalizeInput,
  recognize,
  solveDerivative,
  solveChainRule,
  solveImplicit,
  solvePartial,
  solveGradient,
  solveDirectional,
  solveTangent,
  solveIndefiniteIntegral,
  solveDefiniteIntegral,
  solveMultipleIntegral,
  solveLimit,
  solveTaylor,
  solveCriticalPoints,
  solveLagrange,
  solveEquation,
  solveSimplify,
  solveEvaluate,
  TOPICS,
} from "./solverEngine";

const close = (a, b, tol = 1e-6) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(b));
const valueOf = (text) =>
  math.evaluate(String(text).replace(/π/g, "pi").replace(/√(\d+)/g, "sqrt($1)"));

/** f and g agree at a few points. */
function sameFunction(fText, gText, v = "x", points = [0.37, 0.61, 0.83]) {
  const f = parse(fText);
  const g = parse(gText);
  return points.every((x) => close(numeric(f, { [v]: x, y: 0.7, z: 1.1 }), numeric(g, { [v]: x, y: 0.7, z: 1.1 })));
}

/** d/dv of the antiderivative gives back the integrand. */
function differentiatesBack(resultText, integrand, v = "x") {
  const F = parse(resultText.replace(/\s*\+ C$/, ""));
  const d = math.derivative(F, v);
  const f = parse(integrand);
  return [0.37, 0.61, 0.83].every((x) => close(numeric(d, { [v]: x }), numeric(f, { [v]: x })));
}

describe("input handling", () => {
  test("accepts everyday notation", () => {
    expect(normalizeInput("ln(x) ** 2 · π")).toBe("log(x) ^ 2 * pi");
    expect(normalizeInput("2xy")).toBe("2x*y");
    expect(normalizeInput("sin(x)")).toBe("sin(x)");
  });

  test("recognises exact constants", () => {
    expect(recognize(0.5).text).toBe("1/2");
    expect(recognize(Math.PI / 4).text).toBe("π/4");
    expect(recognize(Math.SQRT2).text).toBe("√2");
  });

  test("explains unreadable input", () => {
    expect(() => solveDerivative({ expr: "sin(x" })).toThrow(/Couldn't read/);
  });
});

describe("derivatives", () => {
  test.each([
    ["x^3*sin(x)", "3x^2*sin(x) + x^3*cos(x)"],
    ["ln(x^2+1)", "2x/(x^2+1)"],
    ["e^(2x)/x", "(2x*e^(2x) - e^(2x))/x^2"],
  ])("d/dx %s", (f, expected) => {
    expect(sameFunction(solveDerivative({ expr: f, variable: "x" }).result.text, expected)).toBe(true);
  });

  test("names the product rule", () => {
    expect(solveDerivative({ expr: "x^3*sin(x)" }).steps[0].text).toMatch(/Product rule/);
  });

  test("higher order", () => {
    expect(sameFunction(solveDerivative({ expr: "e^(2x)", order: 2 }).result.text, "4e^(2x)")).toBe(true);
  });

  test("chain rule, single and multivariable", () => {
    expect(sameFunction(solveChainRule({ expr: "(3x^2 - 2)^5" }).result.text, "30x*(3x^2-2)^4")).toBe(true);
    const multi = solveChainRule({ expr: "x^2*y", variable: "t", substitutions: "x = cos(t), y = sin(t)" });
    expect(sameFunction(multi.result.text, "-2cos(t)sin(t)^2 + cos(t)^3", "t")).toBe(true);
  });

  test("implicit differentiation", () => {
    expect(sameFunction(solveImplicit({ expr: "x^2 + y^2 = 25" }).result.text, "-x/y")).toBe(true);
  });
});

describe("partial derivatives and gradients", () => {
  test("mixed partial", () => {
    expect(sameFunction(solvePartial({ expr: "x^2*y^3", variables: "x, y" }).result.text, "6x*y^2")).toBe(true);
  });

  test("directional derivative", () => {
    const out = solveDirectional({ expr: "x^2*y + y^3", point: "1, 2", direction: "3, 4" });
    expect(close(valueOf(out.result.text), (4 * 3 + 13 * 4) / 5)).toBe(true);
  });

  test("gradient at a point", () => {
    const out = solveGradient({ expr: "x^2*y + y*z^3", point: "1, 2, 1" });
    expect(out.details[0].tex).toMatch(/4.*2.*6/);
  });

  test("tangent plane", () => {
    expect(solveTangent({ expr: "x^2 + y^2", point: "1, 2" }).result.tex).toMatch(/^z = 5/);
  });
});

describe("integration", () => {
  test.each([
    "x*e^(2x)",
    "1/(x^2 + 4)",
    "sin(x)^2",
    "x/(x^2 + 1)",
    "ln(x)",
    "e^x*cos(x)",
    "(2x+3)/(x^2-1)",
    "x^2*sin(x)",
    "2x*e^(x^2)",
    "1/(x*ln(x))",
    "x/(x^2+2x+5)",
    "2^x",
  ])("∫ %s dx is verified", (f) => {
    const out = solveIndefiniteIntegral({ expr: f, variable: "x" });
    expect(out.verified).toBe(true);
    expect(differentiatesBack(out.result.text, f)).toBe(true);
  });

  test("definite integrals, including improper ones", () => {
    expect(solveDefiniteIntegral({ expr: "x^2", lower: "0", upper: "3" }).result.text).toBe("9");
    expect(solveDefiniteIntegral({ expr: "1/(1+x^2)", lower: "0", upper: "1" }).result.text).toBe("π/4");
    const gauss = solveDefiniteIntegral({ expr: "e^(-x^2)", lower: "-inf", upper: "inf" });
    expect(close(valueOf(gauss.result.text), Math.sqrt(Math.PI), 1e-5)).toBe(true);
  });

  test("divergent integral is reported, not given a fake number", () => {
    expect(() => solveDefiniteIntegral({ expr: "1/x^2", lower: "-1", upper: "1" })).toThrow(/converge/);
  });

  test("double and triple integrals with variable bounds", () => {
    expect(solveMultipleIntegral({ expr: "x*y", order: "y, x", bounds: "0, x\n0, 1" }).result.text).toBe("1/8");
    expect(solveMultipleIntegral({ expr: "x*y*z", order: "z, y, x", bounds: "0,1\n0,1\n0,1" }).result.text).toBe("1/8");
  });
});

describe("limits", () => {
  test.each([
    ["sin(x)/x", "0", "both", "1"],
    ["(x^2 - 4)/(x - 2)", "2", "both", "4"],
    ["(1 - cos(x))/x^2", "0", "both", "1/2"],
    ["abs(x)/x", "0", "both", "does not exist"],
    ["abs(x)/x", "0", "right", "1"],
    ["1/x^2", "0", "both", "∞"],
    ["(2x^2+1)/(x^2-3)", "inf", "both", "2"],
  ])("lim %s as x → %s (%s)", (expr, approach, side, expected) => {
    expect(solveLimit({ expr, approach, side }).result.text).toBe(expected);
  });

  test("(1 + 1/x)^x → e", () => {
    expect(close(valueOf(solveLimit({ expr: "(1 + 1/x)^x", approach: "inf" }).result.text), Math.E, 1e-4)).toBe(true);
  });
});

describe("series, optimisation and algebra", () => {
  test("Maclaurin series of e^x", () => {
    expect(solveTaylor({ expr: "e^x", order: 3 }).result.text).toBe("1 + x + 1/2·x^2 + 1/6·x^3");
  });

  test("critical points are classified", () => {
    const kinds = solveCriticalPoints({ expr: "x^3 - 3x + y^2" }).table.rows.map((r) => r[2]);
    expect(kinds.sort()).toEqual(["local minimum", "saddle point"]);
  });

  test("Lagrange multipliers", () => {
    expect(solveLagrange({ expr: "x*y", constraints: "x^2 + y^2 = 8" }).result.text).toBe("max 4, min -4");
    expect(solveLagrange({ expr: "x^2 + y^2 + z^2", constraints: "x + y + z = 3", goal: "min" }).result.text).toBe("min 3");
  });

  test("equations", () => {
    expect(solveEquation({ expr: "x^2 = 2" }).result.text).toBe("x = -√2, x = √2");
    expect(solveEquation({ expr: "(x-1)^2 = 0" }).result.text).toBe("x = 1");
  });

  test("simplify cancels common factors; expand multiplies out", () => {
    expect(solveSimplify({ expr: "(x^2 - 1)/(x - 1)" }).result.text.replace(/\s/g, "")).toBe("x+1");
    expect(solveSimplify({ expr: "(x + 2)^3", mode: "expand" }).result.text.replace(/\s/g, "")).toBe("x^3+6*x^2+12*x+8");
  });

  test("evaluate", () => {
    expect(solveEvaluate({ expr: "x^2 + y", values: "x = 3, y = 1" }).result.text).toBe("10");
  });
});

test("every operation's default problem solves", () => {
  for (const topic of TOPICS) {
    for (const op of topic.ops) {
      const values = Object.fromEntries(op.fields.map((f) => [f.name, f.default]));
      expect(() => op.run(values)).not.toThrow();
    }
  }
});
