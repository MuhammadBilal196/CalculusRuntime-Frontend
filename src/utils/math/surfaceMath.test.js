import { axisLength, compileSurface, niceStep } from "./surfaceMath";

describe('compileSurface', () => {
  it('evaluates a formula with the slider symbols a, k and time t', () => {
    const surface = compileSurface('a * sin(k*x) * sin(k*y) * cos(t)');

    expect(surface.error).toBe('');
    expect(surface.usesT).toBe(true);
    expect(surface.evaluate(Math.PI / 2, Math.PI / 2, 0, 2, 1)).toBeCloseTo(2, 6);
    expect(surface.evaluate(Math.PI / 2, Math.PI / 2, Math.PI, 2, 1)).toBeCloseTo(-2, 6);
  });

  it('accepts a "z =" prefix and reports formulas without t', () => {
    const surface = compileSurface('z = x^2 + y^2');

    expect(surface.usesT).toBe(false);
    expect(surface.evaluate(1, 2)).toBeCloseTo(5, 6);
  });

  it('returns NaN outside the real domain instead of throwing', () => {
    const surface = compileSurface('sqrt(1 - x^2 - y^2)');

    expect(surface.evaluate(0, 0)).toBeCloseTo(1, 6);
    expect(surface.evaluate(2, 2)).toBeNaN();
  });

  it('reports unknown symbols and syntax errors', () => {
    expect(compileSurface('x + q').error).toMatch(/q/);
    expect(compileSurface('sin(x').error).not.toBe('');
    expect(compileSurface('   ').error).not.toBe('');
  });
});

describe('axis helpers', () => {
  it('niceStep snaps to 1, 2, 5 multiples', () => {
    expect(niceStep(1)).toBe(1);
    expect(niceStep(0.45)).toBe(0.5);
    expect(niceStep(2.5)).toBe(2);
    expect(niceStep(8)).toBe(10);
  });

  it('axisLength leaves headroom past the domain', () => {
    expect(axisLength(3.2)).toBe(4);
    expect(axisLength(6)).toBe(7.5);
    expect(axisLength(0.2)).toBe(1);
  });
});


test('surface formulas accept function prefixes and keep slider/time values isolated between evaluations', () => {
  const surface = compileSurface(' f(x, y) = a*x + k*y + t ');
  expect(surface.error).toBe('');
  expect(surface.usesT).toBe(true);
  expect(surface.evaluate(2, 3, 4, 5, 6)).toBe(32);
  expect(surface.evaluate(2, 3)).toBe(5);
  expect(surface.evaluate(-1, 2, -3, 0, 4)).toBe(5);
  const independent = compileSurface('x*y');
  expect(independent.evaluate(2, 3)).toBe(6);
  expect(surface.evaluate(2, 3)).toBe(5);
  expect(compileSurface(null).error).not.toBe('');
  expect(compileSurface('x + missing').error).toMatch(/missing/);
  const dome = compileSurface('sqrt(1-x^2-y^2)');
  expect(dome.evaluate(1, 0)).toBeCloseTo(0, 10);
  expect(dome.evaluate(1.01, 0)).toBeNaN();
});

test('axis steps switch at documented thresholds and retain adequate headroom over small and large domains', () => {
  for (const scale of [0.001, 1, 1000]) {
    for (const [raw, expected] of [[1.49, 1], [1.5, 2], [3.49, 2], [3.5, 5], [7.49, 5], [7.5, 10]]) {
      expect(niceStep(raw * scale)).toBeCloseTo(expected * scale, 10);
    }
  }
  for (const invalid of [0, -1, NaN]) expect(niceStep(invalid)).toBe(1);
  for (const range of [0, 0.01, 0.8, 1, 3.2, 6, 100]) {
    const length = axisLength(range);
    expect(length).toBeGreaterThanOrEqual(Math.max(1, range * 1.25));
    expect(length * 2).toBe(Math.round(length * 2));
    expect(length).toBeLessThan(Math.max(1, range * 1.25) + 0.5);
  }
});
