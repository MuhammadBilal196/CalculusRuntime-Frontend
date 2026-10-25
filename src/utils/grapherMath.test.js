import {
  derivative,
  findKeyPoints,
  fitYRange,
  formatNumber,
  niceTicks,
  parseExpression,
  sampleCurve,
} from "./grapherMath";

const f = (src) => {
  const r = parseExpression(src);
  if (!r.ok) throw new Error(`could not parse ${src}: ${r.error}`);
  return r.fn;
};
const close = (a, b, eps = 1e-6) => Math.abs(a - b) < eps;

describe("parser", () => {
  test("precedence, powers and unary minus", () => {
    expect(f("1 + 2 * 3")(0)).toBe(7);
    expect(f("2^3^2")(0)).toBe(512); // right-associative
    expect(f("-x^2")(3)).toBe(-9);
    expect(f("2^-1")(0)).toBe(0.5);
    expect(f("(1+2)*3")(0)).toBe(9);
  });

  test("implicit multiplication", () => {
    expect(f("2x")(3)).toBe(6);
    expect(f("3sin(x)")(Math.PI / 2)).toBe(3);
    expect(f("(x+1)(x-1)")(3)).toBe(8);
    expect(close(f("2pi")(0), 2 * Math.PI)).toBe(true);
    expect(f("2x^2")(3)).toBe(18);
  });

  test("functions, constants, abs bars and prefixes", () => {
    expect(close(f("sin(pi/2)")(0), 1)).toBe(true);
    expect(close(f("ln(e)")(0), 1)).toBe(true);
    expect(f("log(100)")(0)).toBe(2);
    expect(f("|x - 5|")(2)).toBe(3);
    expect(f("y = x + 1")(1)).toBe(2);
    expect(f("f(x) = x^2")(4)).toBe(16);
    expect(f("max(x, 2)")(1)).toBe(2);
    expect(f("sqrt x")(9)).toBe(3);
    expect(f("e^x")(0)).toBe(1);
    expect(f("x²")(3)).toBe(9);
  });

  test("odd roots of negatives are real", () => {
    expect(close(f("x^(1/3)")(-8), -2)).toBe(true);
    expect(Number.isNaN(f("x^(1/2)")(-4))).toBe(true);
  });

  test("slider parameter a is detected", () => {
    const r = parseExpression("a*sin(x)");
    expect(r.usesA).toBe(true);
    expect(close(r.fn(Math.PI / 2, 3), 3)).toBe(true);
    expect(parseExpression("sin(x)").usesA).toBe(false);
    expect(parseExpression("asin(x)").usesA).toBe(false); // "asin" is not a·sin
  });

  test("bad input gives a friendly error instead of throwing", () => {
    ["sin(x", "2 +", "x)", "foo(x)", "3 $ 4", "max(x)"].forEach((src) => {
      const r = parseExpression(src);
      expect(r.ok).toBe(false);
      expect(typeof r.error).toBe("string");
    });
    expect(parseExpression("   ").empty).toBe(true);
  });

  test("never runs JavaScript", () => {
    expect(parseExpression("alert(1)").ok).toBe(false);
    expect(parseExpression("constructor").ok).toBe(false);
  });
});

describe("sampling", () => {
  const view = { xMin: -5, xMax: 5, yMin: -5, yMax: 5, samples: 500 };

  test("1/x is split at the asymptote", () => {
    expect(sampleCurve(f("1/x"), view).length).toBe(2);
  });

  test("tan x is split at each asymptote in view", () => {
    // asymptotes at ±π/2 and ±3π/2 inside [-5, 5] → 5 pieces
    expect(sampleCurve(f("tan(x)"), view).length).toBe(5);
  });

  test("a steep but continuous curve stays in one piece", () => {
    expect(sampleCurve(f("x^3"), view).length).toBe(1);
  });

  test("undefined regions are skipped", () => {
    const segs = sampleCurve(f("sqrt(x)"), view);
    expect(segs.length).toBe(1);
    expect(segs[0][0].x >= 0).toBe(true);
  });
});

describe("key points", () => {
  test("roots and extrema of x^3 - 3x", () => {
    const k = findKeyPoints(f("x^3 - 3x"), { xMin: -3, xMax: 3 });
    expect(k.roots.length).toBe(3);
    expect(k.roots.some((r) => close(r, Math.sqrt(3), 1e-4))).toBe(true);
    expect(k.maxima.length).toBe(1);
    expect(close(k.maxima[0].x, -1, 1e-4)).toBe(true);
    expect(close(k.maxima[0].y, 2, 1e-4)).toBe(true);
    expect(close(k.minima[0].x, 1, 1e-4)).toBe(true);
    expect(k.yIntercept).toBe(0);
  });

  test("an asymptote is not reported as a root", () => {
    const k = findKeyPoints(f("1/x"), { xMin: -3, xMax: 3 });
    expect(k.roots.length).toBe(0);
    expect(k.yIntercept).toBe(null);
  });

  test("numerical derivative", () => {
    expect(close(derivative(f("x^2"), 3, 1), 6, 1e-4)).toBe(true);
  });
});

describe("axes", () => {
  test("nice ticks", () => {
    expect(niceTicks(-10, 10).step).toBe(2);
    expect(niceTicks(0, 1).ticks[0]).toBe(0);
    expect(formatNumber(0.30000000000000004, 0.1)).toBe("0.3");
    expect(formatNumber(1e-7)).toBe("1.00e-7");
  });

  test("fit y ignores asymptote spikes", () => {
    const r = fitYRange([f("tan(x)")], { xMin: -5, xMax: 5 });
    expect(r.yMax < 1000).toBe(true);
  });
});
