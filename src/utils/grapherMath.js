/**
 * Function Grapher — maths helpers (no React, no eval, no external packages).
 *
 *  - parseExpression("2x^2 + sin(x)")  → { ok, fn(x, a), usesA, error }
 *    Safe recursive-descent parser: only numbers, x, the slider parameter a,
 *    + - * / ^, brackets, |abs|, and a fixed list of functions/constants.
 *    Implicit multiplication works: 2x, 3sin(x), (x+1)(x-1), 2pi, x a.
 *  - sampleCurve()   → screen-ready segments, broken at asymptotes / gaps
 *  - findKeyPoints() → roots, local maxima/minima and the y-intercept in view
 *  - niceTicks()     → grid/axis tick positions (1, 2, 5 × 10^k)
 */

/* ───────────────────────── tokenizer ───────────────────────── */

const FUNCTIONS = {
  sin: Math.sin, cos: Math.cos, tan: Math.tan,
  sec: (v) => 1 / Math.cos(v), csc: (v) => 1 / Math.sin(v), cot: (v) => 1 / Math.tan(v),
  asin: Math.asin, acos: Math.acos, atan: Math.atan,
  arcsin: Math.asin, arccos: Math.acos, arctan: Math.atan,
  sinh: Math.sinh, cosh: Math.cosh, tanh: Math.tanh,
  asinh: Math.asinh, acosh: Math.acosh, atanh: Math.atanh,
  sqrt: Math.sqrt, cbrt: Math.cbrt, abs: Math.abs, exp: Math.exp,
  ln: Math.log, log: Math.log10, log10: Math.log10, log2: Math.log2,
  floor: Math.floor, ceil: Math.ceil, round: Math.round, sign: Math.sign,
};
const TWO_ARG = {
  min: Math.min,
  max: Math.max,
  pow: Math.pow,
};
const CONSTANTS = { pi: Math.PI, e: Math.E };
const VARIABLES = ["x", "a"];

// Longest names first so "asinh" wins over "asin" over "a".
const NAMES = [...Object.keys(FUNCTIONS), ...Object.keys(TWO_ARG), ...Object.keys(CONSTANTS), ...VARIABLES]
  .sort((p, q) => q.length - p.length);

export const SUPPORTED_FUNCTIONS = [...Object.keys(FUNCTIONS), ...Object.keys(TWO_ARG)];

function tokenize(source) {
  const text = source
    .replace(/[−–]/g, "-")
    .replace(/[×·⋅]/g, "*")
    .replace(/÷/g, "/")
    .replace(/π/g, "pi")
    .replace(/\*\*/g, "^")
    .replace(/²/g, "^2")
    .replace(/³/g, "^3");
  const tokens = [];
  let i = 0;
  while (i < text.length) {
    const ch = text[i];
    if (/\s/.test(ch)) { i += 1; continue; }
    if (/[0-9.]/.test(ch)) {
      const m = /^(\d+\.?\d*|\.\d+)(e[+-]?\d+)?/i.exec(text.slice(i));
      // "2e" alone means 2·e, so only treat e as an exponent when digits follow.
      const raw = m[2] ? m[0] : m[1];
      if (raw === ".") throw new Error("A lone '.' is not a number.");
      tokens.push({ type: "num", value: parseFloat(raw), pos: i });
      i += raw.length;
      continue;
    }
    if (/[a-z]/i.test(ch)) {
      const rest = text.slice(i).toLowerCase();
      const name = NAMES.find((n) => rest.startsWith(n));
      if (!name) {
        const word = /^[a-z]+/i.exec(text.slice(i))[0];
        throw new Error(`Unknown name "${word}". Use x as the variable, e.g. sin(x).`);
      }
      tokens.push({ type: "name", value: name, pos: i });
      i += name.length;
      continue;
    }
    if ("+-*/^(),|".includes(ch)) {
      tokens.push({ type: ch, pos: i });
      i += 1;
      continue;
    }
    if (ch === "[" || ch === "{") { tokens.push({ type: "(", pos: i }); i += 1; continue; }
    if (ch === "]" || ch === "}") { tokens.push({ type: ")", pos: i }); i += 1; continue; }
    throw new Error(`Unexpected character "${ch}".`);
  }
  return tokens;
}

/* ───────────────────────── parser → closures ───────────────────────── */

function parseTokens(tokens) {
  let pos = 0;
  let usesA = false;
  const peek = () => tokens[pos];
  const take = (type) => {
    const t = tokens[pos];
    if (!t || (type && t.type !== type)) {
      const where = t ? `near "${t.value ?? t.type}"` : "at the end";
      throw new Error(type === ")" ? `Missing ")" ${where}.` : `Unexpected input ${where}.`);
    }
    pos += 1;
    return t;
  };

  // Can the next token start a factor? (used for implicit multiplication)
  const startsFactor = (t) => t && (t.type === "num" || t.type === "name" || t.type === "(");

  function expression(insideAbs = false) {
    let left = term(insideAbs);
    while (peek() && (peek().type === "+" || peek().type === "-")) {
      const op = take().type;
      const right = term(insideAbs);
      const l = left;
      left = op === "+" ? (x, a) => l(x, a) + right(x, a) : (x, a) => l(x, a) - right(x, a);
    }
    return left;
  }

  function term(insideAbs) {
    let left = unary(insideAbs);
    for (;;) {
      const t = peek();
      if (t && (t.type === "*" || t.type === "/")) {
        take();
        const right = unary(insideAbs);
        const l = left;
        left = t.type === "*" ? (x, a) => l(x, a) * right(x, a) : (x, a) => l(x, a) / right(x, a);
      } else if (startsFactor(t)) {
        const right = power(insideAbs); // implicit multiplication: 2x, x(x+1), 3sin(x)
        const l = left;
        left = (x, a) => l(x, a) * right(x, a);
      } else {
        return left;
      }
    }
  }

  function unary(insideAbs) {
    const t = peek();
    if (t && t.type === "-") { take(); const v = unary(insideAbs); return (x, a) => -v(x, a); }
    if (t && t.type === "+") { take(); return unary(insideAbs); }
    return power(insideAbs);
  }

  function power(insideAbs) {
    const base = primary(insideAbs);
    if (peek() && peek().type === "^") {
      take();
      const exp = unary(insideAbs); // right-associative; allows 2^-x
      return (x, a) => {
        const b = base(x, a);
        const e = exp(x, a);
        // Real odd roots of negatives, e.g. x^(1/3) for x < 0
        if (b < 0 && !Number.isInteger(e)) {
          const inv = 1 / e;
          if (Number.isInteger(Math.round(inv)) && Math.abs(inv - Math.round(inv)) < 1e-9 && Math.round(inv) % 2 !== 0) {
            return -Math.pow(-b, e);
          }
        }
        return Math.pow(b, e);
      };
    }
    return base;
  }

  function primary(insideAbs) {
    const t = peek();
    if (!t) throw new Error("The expression ends too early.");

    if (t.type === "num") { take(); const v = t.value; return () => v; }

    if (t.type === "(") {
      take();
      const inner = expression();
      take(")");
      return inner;
    }

    if (t.type === "|" && !insideAbs) {
      take();
      const inner = expression(true);
      take("|");
      return (x, a) => Math.abs(inner(x, a));
    }

    if (t.type === "name") {
      take();
      const name = t.value;
      if (name === "x") return (x) => x;
      if (name === "a") { usesA = true; return (x, a) => a; }
      if (name in CONSTANTS) { const v = CONSTANTS[name]; return () => v; }
      if (name in TWO_ARG) {
        const f = TWO_ARG[name];
        take("(");
        const p = expression();
        if (!peek() || peek().type !== ",") throw new Error(`${name}() needs two values, e.g. ${name}(x, 2).`);
        take(",");
        const q = expression();
        take(")");
        return (x, a) => f(p(x, a), q(x, a));
      }
      if (name in FUNCTIONS) {
        const f = FUNCTIONS[name];
        let arg;
        if (peek() && peek().type === "(") {
          take();
          arg = expression();
          take(")");
        } else if (peek() && (peek().type === "num" || peek().type === "name" || peek().type === "|")) {
          arg = power(insideAbs); // "sin x", "ln 2x" → ln(2)·x is ambiguous, so only one factor
        } else {
          throw new Error(`${name} needs a value, e.g. ${name}(x).`);
        }
        // sin^2(x) style is not supported; sin(x)^2 works through power()
        return (x, a) => f(arg(x, a));
      }
    }

    if (t.type === ")") throw new Error('Unexpected ")".');
    if (t.type === ",") throw new Error('Unexpected ",".');
    throw new Error(`Unexpected "${t.type}".`);
  }

  const fn = expression();
  if (pos < tokens.length) {
    const t = tokens[pos];
    throw new Error(t.type === ")" ? 'Unexpected ")" — check your brackets.' : `Unexpected "${t.value ?? t.type}".`);
  }
  return { fn, usesA };
}

/** Strip "y =", "f(x) =", "g(x)=" prefixes so students can type either form. */
export function stripPrefix(source) {
  return String(source || "").replace(/^\s*(y|[a-z]\s*\(\s*x\s*\))\s*=\s*/i, "");
}

/**
 * Parse an expression. Never throws.
 * @returns {{ok: true, fn: (x:number, a:number)=>number, usesA: boolean} | {ok: false, error: string}}
 */
export function parseExpression(source) {
  const text = stripPrefix(source).trim();
  if (!text) return { ok: false, empty: true, error: "" };
  try {
    const { fn, usesA } = parseTokens(tokenize(text));
    const safe = (x, a = 1) => {
      const v = fn(x, a);
      return typeof v === "number" ? v : NaN;
    };
    return { ok: true, fn: safe, usesA };
  } catch (err) {
    return { ok: false, error: err.message || "Could not read this expression." };
  }
}

/* ───────────────────────── calculus helpers ───────────────────────── */

/** Central-difference derivative. */
export function derivative(fn, x, a) {
  const h = 1e-5 * Math.max(1, Math.abs(x));
  const y1 = fn(x + h, a);
  const y0 = fn(x - h, a);
  if (!Number.isFinite(y1) || !Number.isFinite(y0)) return NaN;
  return (y1 - y0) / (2 * h);
}

/* ───────────────────────── sampling ───────────────────────── */

/**
 * Sample y = fn(x) across [xMin, xMax] and return an array of segments
 * ([{x, y}, ...]). Segments break where the function is undefined or jumps
 * across an asymptote (e.g. tan x, 1/x), so no false vertical lines are drawn.
 */
export function sampleCurve(fn, { xMin, xMax, yMin, yMax, samples = 800, a = 1 }) {
  const segments = [];
  let current = [];
  const span = yMax - yMin;
  const limit = span * 4; // far outside the view
  const dx = (xMax - xMin) / samples;
  let prev = null;

  const close = () => {
    if (current.length > 1) segments.push(current);
    current = [];
  };

  for (let i = 0; i <= samples; i += 1) {
    const x = xMin + i * dx;
    const y = fn(x, a);
    if (!Number.isFinite(y)) { close(); prev = null; continue; }

    if (prev) {
      const jump = Math.abs(y - prev.y);
      if (jump > span * 0.5) {
        // Big jump: is it a steep but continuous climb, or an asymptote?
        const mid = fn((x + prev.x) / 2, a);
        const lo = Math.min(y, prev.y);
        const hi = Math.max(y, prev.y);
        const continuous = Number.isFinite(mid) && mid >= lo - span * 0.01 && mid <= hi + span * 0.01;
        if (!continuous) { close(); }
      }
    }
    // Clamp huge values so the canvas still draws the steep part toward the edge.
    const clampedY = Math.max(yMin - limit, Math.min(yMax + limit, y));
    current.push({ x, y: clampedY });
    prev = { x, y };
  }
  close();
  return segments;
}

/* ───────────────────────── key points ───────────────────────── */

function bisect(g, lo, hi, iterations = 60) {
  let glo = g(lo);
  for (let i = 0; i < iterations; i += 1) {
    const mid = (lo + hi) / 2;
    const gm = g(mid);
    if (!Number.isFinite(gm)) return null;
    if (gm === 0) return mid;
    if (Math.sign(gm) === Math.sign(glo)) { lo = mid; glo = gm; } else { hi = mid; }
  }
  return (lo + hi) / 2;
}

const roundTo = (v, digits = 6) => {
  const r = Number(v.toFixed(digits));
  return Object.is(r, -0) ? 0 : r;
};

/**
 * Roots, local extrema and the y-intercept inside [xMin, xMax].
 * Numerical, so results are approximate (shown to 4 significant figures in the UI).
 */
export function findKeyPoints(fn, { xMin, xMax, a = 1, samples = 1200, maxEach = 8 }) {
  const dx = (xMax - xMin) / samples;
  const xs = [];
  for (let i = 0; i <= samples; i += 1) xs.push(xMin + i * dx);
  const ys = xs.map((x) => fn(x, a));
  const scale = Math.max(1, ...ys.filter(Number.isFinite).map(Math.abs).slice(0, 2000));

  const roots = [];
  for (let i = 1; i < xs.length && roots.length < maxEach; i += 1) {
    const y0 = ys[i - 1];
    const y1 = ys[i];
    if (!Number.isFinite(y0) || !Number.isFinite(y1)) continue;
    if (y0 === 0) { roots.push(xs[i - 1]); continue; }
    if (Math.sign(y0) !== Math.sign(y1)) {
      const r = bisect((x) => fn(x, a), xs[i - 1], xs[i]);
      // Reject sign changes caused by an asymptote (value stays big near the "root").
      if (r !== null && Math.abs(fn(r, a)) < 1e-6 * scale) roots.push(r);
    }
  }

  const d = (x) => derivative(fn, x, a);
  const maxima = [];
  const minima = [];
  let dPrev = d(xs[0]);
  for (let i = 1; i < xs.length; i += 1) {
    const dCur = d(xs[i]);
    if (Number.isFinite(dPrev) && Number.isFinite(dCur) && dPrev !== 0 && Math.sign(dPrev) !== Math.sign(dCur)) {
      const xe = bisect(d, xs[i - 1], xs[i]);
      if (xe !== null) {
        const ye = fn(xe, a);
        const left = fn(xs[i - 1], a);
        const right = fn(xs[i], a);
        // Must be a genuine turning point of a continuous curve, not a jump.
        if (Number.isFinite(ye) && Number.isFinite(left) && Number.isFinite(right)) {
          if (dPrev > 0 && ye >= Math.max(left, right) - 1e-9 * scale) {
            if (maxima.length < maxEach) maxima.push({ x: roundTo(xe), y: roundTo(ye) });
          } else if (dPrev < 0 && ye <= Math.min(left, right) + 1e-9 * scale) {
            if (minima.length < maxEach) minima.push({ x: roundTo(xe), y: roundTo(ye) });
          }
        }
      }
    }
    dPrev = dCur;
  }

  const uniqueRoots = [];
  roots.map((r) => roundTo(r)).forEach((r) => {
    if (!uniqueRoots.some((u) => Math.abs(u - r) < Math.abs(dx))) uniqueRoots.push(r);
  });

  const y0 = xMin <= 0 && xMax >= 0 ? fn(0, a) : NaN;
  return {
    roots: uniqueRoots,
    maxima,
    minima,
    yIntercept: Number.isFinite(y0) ? roundTo(y0) : null,
  };
}

/* ───────────────────────── axes ───────────────────────── */

/** Tick step of 1, 2 or 5 × 10^k giving roughly `target` ticks across the range. */
export function niceStep(range, target = 8) {
  if (!(range > 0)) return 1;
  const raw = range / target;
  const mag = Math.pow(10, Math.floor(Math.log10(raw)));
  const norm = raw / mag;
  const nice = norm < 1.5 ? 1 : norm < 3.5 ? 2 : norm < 7.5 ? 5 : 10;
  return nice * mag;
}

export function niceTicks(min, max, target = 8) {
  const step = niceStep(max - min, target);
  const first = Math.ceil(min / step) * step;
  const ticks = [];
  for (let v = first; v <= max + step * 1e-9 && ticks.length < 200; v += step) {
    ticks.push(Math.abs(v) < step * 1e-9 ? 0 : v);
  }
  return { step, ticks };
}

/** Short label for a number: 0.5, 1e-4, 2.5k-free, no float noise. */
export function formatNumber(v, step) {
  if (!Number.isFinite(v)) return "undefined";
  if (v === 0) return "0";
  const abs = Math.abs(v);
  if (abs >= 1e6 || abs < 1e-4) return v.toExponential(2).replace("e+", "e");
  if (step) {
    const decimals = Math.max(0, Math.min(8, -Math.floor(Math.log10(step))));
    return String(Number(v.toFixed(decimals)));
  }
  return String(Number(v.toPrecision(4)));
}

/** Fit the y-range to the visible curves (ignores extreme spikes near asymptotes). */
export function fitYRange(fns, { xMin, xMax, a = 1, samples = 400 }) {
  const values = [];
  fns.forEach((fn) => {
    for (let i = 0; i <= samples; i += 1) {
      const y = fn(xMin + ((xMax - xMin) * i) / samples, a);
      if (Number.isFinite(y)) values.push(y);
    }
  });
  if (!values.length) return null;
  values.sort((p, q) => p - q);
  const lo = values[Math.floor(values.length * 0.02)];
  const hi = values[Math.ceil(values.length * 0.98) - 1];
  if (hi - lo < 1e-9) return { yMin: lo - 1, yMax: hi + 1 };
  const pad = (hi - lo) * 0.1;
  return { yMin: lo - pad, yMax: hi + pad };
}
