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
