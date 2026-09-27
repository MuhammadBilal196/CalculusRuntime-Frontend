import { parse } from "mathjs";

// Symbols the Surface Explorer supplies to every formula.
export const SURFACE_SYMBOLS = ['x', 'y', 't', 'a', 'k'];

function toReal(value) {
  if (typeof value === 'number') {
    return value;
  }
  if (typeof value === 'boolean') {
    return value ? 1 : 0;
  }
  if (value && typeof value.re === 'number' && Math.abs(value.im) < 1e-12) {
    return value.re;
  }
  if (value && typeof value.toNumber === 'function') {
    return value.toNumber();
  }
  return NaN;
}

/**
 * Compiles a surface formula z = f(x, y) that may also use a, k (sliders) and t (time).
 * Accepts an optional "z =" or "f(x, y) =" prefix.
 * Returns { evaluate(x, y, t, a, k) → number|NaN, symbols, usesT } or { error }.
 */
export function compileSurface(input) {
  const expression = String(input ?? '')
    .replace(/^\s*(z|f\s*\(\s*x\s*,\s*y\s*\))\s*=\s*/i, '')
    .trim();

  if (!expression) {
    return { error: 'Type a formula in x and y, for example sin(x) * cos(y).' };
  }

  try {
    const node = parse(expression);
    const symbols = new Set();
    node.traverse((child) => {
      if (child.isSymbolNode) {
        symbols.add(child.name);
      }
    });

    const compiled = node.compile();
    const scope = new Map(SURFACE_SYMBOLS.map((name) => [name, 0]));
    const evaluate = (x, y, t = 0, a = 1, k = 1) => {
      scope.set('x', x);
      scope.set('y', y);
      scope.set('t', t);
      scope.set('a', a);
      scope.set('k', k);
      try {
        return toReal(compiled.evaluate(scope));
      } catch {
        return NaN;
      }
    };

    // Evaluate once outside the try/catch above so unknown symbols surface as a readable error.
    scope.set('x', 0.37);
    scope.set('y', -0.61);
    compiled.evaluate(scope);

    return { expression, evaluate, symbols, usesT: symbols.has('t'), error: '' };
  } catch (err) {
    return { error: err.message || 'That formula could not be read.' };
  }
}

/** Rounds a raw step to 1, 2 or 5 × 10ⁿ so axis ticks land on friendly numbers. */
export function niceStep(raw) {
  if (!(raw > 0)) {
    return 1;
  }
  const power = 10 ** Math.floor(Math.log10(raw));
  const fraction = raw / power;
  if (fraction < 1.5) return power;
  if (fraction < 3.5) return 2 * power;
  if (fraction < 7.5) return 5 * power;
  return 10 * power;
}

/** Half-length of each axis for a plotting domain of [-range, range]², snapped to 0.5. */
export function axisLength(range) {
  return Math.max(1, Math.ceil((range * 1.25) / 0.5) * 0.5);
}
