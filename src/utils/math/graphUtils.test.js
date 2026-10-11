import { evaluate } from "mathjs";
import { computeDerivative, parseFunction, normalizeExpression, getExpressionVariables } from "./derivativeEngine";
import { generateTaylorSeries } from "./taylorSeries";
import { buildCrossSectionData, buildSurfaceData, sampleExpression } from "./graphUtils";

describe('graphUtils multi-variable helpers', () => {
  it('buildSurfaceData returns a 2D grid for a surface expression', () => {
    const result = buildSurfaceData('sin(x) * cos(y)', [-1, 1], [-1, 1], 5, {});

    expect(result.xValues).toHaveLength(5);
    expect(result.yValues).toHaveLength(5);
    expect(result.zValues).toHaveLength(5);
    expect(result.zValues[0]).toHaveLength(5);
    expect(result.zValues[2][2]).toBeCloseTo(0, 5);
  });

  it('buildCrossSectionData returns a one-dimensional slice for a fixed value', () => {
    const result = buildCrossSectionData('x^2 + y^2', { orientation: 'y', fixedValue: 1, range: [-2, 2], points: 5, scope: {} });

    expect(result.xValues).toHaveLength(5);
    expect(result.yValues).toHaveLength(5);
    expect(result.yValues[1]).toBeCloseTo(2, 5);
  });
});


test('sampling preserves endpoints, custom variables and cross-section orientation while marking non-real values as gaps', () => {
  expect(sampleExpression('u^2 + a', [-2, 2], 5, 'u', { a: 3 })).toEqual({
    xValues: [-2, -1, 0, 1, 2], yValues: [7, 4, 3, 4, 7],
  });
  expect(sampleExpression('1/x', [-1, 1], 3).yValues).toEqual([-1, null, 1]);
  expect(sampleExpression('sqrt(x)', [-1, 1], 3).yValues).toEqual([null, 0, 1]);
  expect(sampleExpression('unknown + x', [0, 1], 2).yValues).toEqual([null, null]);
  expect(() => sampleExpression('sin(', [-1, 1], 3)).toThrow();
  const surface = buildSurfaceData('u + 10*v + a', [1, 3], [4, 6], 3, { a: 2 }, 'u', 'v');
  expect(surface.zValues).toEqual([[43, 44, 45], [53, 54, 55], [63, 64, 65]]);
  for (const orientation of ['x', 'y']) {
    const slice = buildCrossSectionData('u + 10*v + a', {
      orientation, fixedValue: 2, range: [1, 3], points: 3, scope: { a: 2 }, xVar: 'u', yVar: 'v',
    });
    expect(slice.yValues).toEqual(orientation === 'x' ? [14, 24, 34] : [23, 24, 25]);
  }
  expect(sampleExpression('x^2', [2, 9], 1)).toEqual({ xValues: [2], yValues: [4] });
});

test('derivative engine validates input and computes polynomial, chain, product and partial derivatives numerically', () => {
  expect(normalizeExpression('f(x) = SIN(x) + COS(x)')).toBe('sin(x) + cos(x)');
  expect(getExpressionVariables('x*y + sin(z) + pi')).toEqual(['x', 'y', 'z']);
  for (const [expression, variable, scope, expected] of [
    ['x^3 - 2*x', 'x', { x: 2 }, 10],
    ['sin(x^2)', 'x', { x: 0.7 }, 1.4 * Math.cos(0.49)],
    ['x*exp(x)', 'x', { x: 1 }, 2 * Math.E],
    ['x^2*y + sin(y)', 'y', { x: 3, y: 0 }, 10],
    ['y = cos(t)', 't', { t: Math.PI / 2 }, -1],
  ]) {
    expect(parseFunction(expression, variable)).toBeDefined();
    expect(evaluate(computeDerivative(expression, variable), scope)).toBeCloseTo(expected, 10);
  }
  expect(() => parseFunction('x + unknown')).toThrow(/Unknown symbol/);
  expect(() => parseFunction('y^2', 'x')).toThrow(/selected/);
  expect(() => parseFunction('5')).toThrow(/at least one variable/);
  expect(() => parseFunction('sin(')).toThrow(/Invalid expression/);
});

test('Taylor engine matches independent coefficients, handles shifted centers and rejects invalid degree or center', () => {
  const exponential = generateTaylorSeries('exp(x)', 0, 4);
  const sine = generateTaylorSeries('sin(x)', 0, 5);
  const shifted = generateTaylorSeries('x^3', 2, 3);
  const custom = generateTaylorSeries('a*u^2', 1, 2, 'u', { a: 3 });
  for (const x of [-0.5, 0, 0.25, 1]) {
    expect(evaluate(exponential, { x })).toBeCloseTo(1 + x + x*x/2 + x**3/6 + x**4/24, 10);
    expect(evaluate(sine, { x })).toBeCloseTo(x - x**3/6 + x**5/120, 10);
    expect(evaluate(shifted, { x })).toBeCloseTo(x**3, 10);
    expect(evaluate(custom, { u: x })).toBeCloseTo(3*x*x, 10);
  }
  expect(evaluate(generateTaylorSeries('x^2', 3, 0))).toBe(9);
  for (const degree of [-1, 1.5, NaN]) expect(() => generateTaylorSeries('exp(x)', 0, degree)).toThrow(/degree/);
  for (const center of [Infinity, NaN, 'not-a-number']) expect(() => generateTaylorSeries('exp(x)', center, 2)).toThrow(/finite/);
});
