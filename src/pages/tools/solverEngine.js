/**
 * solverEngine.js — the AI Solver page's calculus engine.
 *
 * Runs entirely in the browser on top of mathjs. Every operation returns:
 *   { title, result: { tex, text }, steps: [{ text, tex? }], details?: [...],
 *     verified?: boolean, note?: string }
 * and throws an Error with a student-friendly message when it can't help.
 *
 * Symbolic results (derivatives, antiderivatives, series) are exact. Things
 * that have no general closed form here (limits that need numerics, roots,
 * critical points, Lagrange systems, multiple integrals) are solved
 * numerically and the numbers are shown in exact form when they are
 * recognisably "nice" (fractions, √n, multiples of π, e, ln 2…).
 */
import { create, all } from "mathjs";

export const math = create(all, {});

/* ─────────────────────────── input handling ─────────────────────────── */

const CONSTANTS = new Set(["pi", "e", "i", "E", "PI", "Infinity", "phi", "tau"]);
// Single letters that may appear glued together as a product ("2xy" = 2·x·y).
const GLUE_LETTERS = new Set("xyzturvwst".split(""));

/** Accept everyday notation: ln, **, ×, ·, √, π, ∞, "xy" for x·y. */
export function normalizeInput(raw) {
  if (raw == null) return "";
  let s = String(raw).trim();
  s = s
    .replace(/\*\*/g, "^")
    .replace(/[×·⋅]/g, "*")
    .replace(/÷/g, "/")
    .replace(/[−–—]/g, "-")
    .replace(/π/g, "pi")
    .replace(/∞/g, "Infinity")
    .replace(/√\s*\(/g, "sqrt(")
    .replace(/√\s*([A-Za-z0-9.]+)/g, "sqrt($1)")
    .replace(/\barc(sin|cos|tan)\b/g, "a$1")
    .replace(/\bln\s*\(/g, "log(")
    .replace(/\binf(inity)?\b/gi, "Infinity");
  // Split glued single-letter variables: "xy" → "x*y" (but not sin, pi, exp…)
  s = s.replace(/(?<![A-Za-z_])([A-Za-z]{2,4})(?![A-Za-z_0-9]|\s*\()/g, (word) =>
    [...word].every((ch) => GLUE_LETTERS.has(ch)) && !CONSTANTS.has(word) ? [...word].join("*") : word,
  );
  return s;
}

export function parse(raw) {
  const s = normalizeInput(raw);
  if (!s) throw new Error("Enter an expression first.");
  try {
    return math.parse(s);
  } catch (err) {
    throw new Error(`Couldn't read "${raw}". Check brackets and operators (${err.message}).`);
  }
}

/** Parse "lhs = rhs" into the node lhs − rhs (or just the expression). */
export function parseEquation(raw) {
  const s = normalizeInput(raw);
  const parts = s.split(/(?<![<>!=])=(?!=)/);
  if (parts.length === 1) return parse(s);
  if (parts.length !== 2) throw new Error("Use a single = sign in an equation.");
  return parse(`(${parts[0]}) - (${parts[1]})`);
}

/** Free variables of an expression, in a natural order (x, y, z, t, then A–Z). */
export function variablesOf(node) {
  const names = new Set();
  node.traverse((n, path, parent) => {
    if (!n.isSymbolNode) return;
    if (parent && parent.isFunctionNode && path === "fn") return;
    if (CONSTANTS.has(n.name)) return;
    if (typeof math[n.name] === "function") return;
    names.add(n.name);
  });
  const order = ["x", "y", "z", "t", "u", "v", "w"];
  return [...names].sort((a, b) => {
    const ia = order.indexOf(a);
    const ib = order.indexOf(b);
    if (ia !== -1 || ib !== -1) return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    return a.localeCompare(b);
  });
}

/** "x, y" → ["x","y"]; empty → fallback. */
export function parseVarList(raw, fallback = []) {
  const list = String(raw || "")
    .split(/[,\s]+/)
    .map((s) => s.trim())
    .filter(Boolean);
  return list.length ? list : fallback;
}

/** "1, 2" or "(1,2)" → [1, 2]; accepts expressions like pi/2. */
export function parsePoint(raw, expectedLength) {
  const cleaned = String(raw || "").replace(/^[\s([<]+|[\s)\]>]+$/g, "");
  if (!cleaned) return null;
  const values = cleaned.split(",").map((p) => evaluateNumber(p));
  if (expectedLength && values.length !== expectedLength) {
    throw new Error(`Expected ${expectedLength} coordinate${expectedLength > 1 ? "s" : ""}, got ${values.length}.`);
  }
  return values;
}

/** "pi/2" → 1.5707…, "-inf" → -Infinity. */
export function evaluateNumber(raw) {
  const s = normalizeInput(raw);
  if (!s) throw new Error("A number is missing.");
  let v;
  try {
    v = math.evaluate(s);
  } catch {
    throw new Error(`"${raw}" is not a number.`);
  }
  if (typeof v !== "number" || Number.isNaN(v)) throw new Error(`"${raw}" is not a real number.`);
  return v;
}

/* ─────────────────────────── helpers ─────────────────────────── */

const TINY = 1e-9;

export function simplify(node) {
  try {
    return math.simplify(node);
  } catch {
    return node;
  }
}

function dependsOn(node, v) {
  let found = false;
  node.traverse((n) => {
    if (n.isSymbolNode && n.name === v) found = true;
  });
  return found;
}

function C(value) {
  return new math.ConstantNode(value);
}
function S(name) {
  return new math.SymbolNode(name);
}
function op(o, fn, args) {
  return new math.OperatorNode(o, fn, args);
}
function mul(a, b) {
  return op("*", "multiply", [a, b]);
}
function div(a, b) {
  return op("/", "divide", [a, b]);
}
function add(a, b) {
  return op("+", "add", [a, b]);
}
function sub(a, b) {
  return op("-", "subtract", [a, b]);
}
function pow(a, b) {
  return op("^", "pow", [a, b]);
}
function neg(a) {
  return op("-", "unaryMinus", [a]);
}
function fn(name, arg) {
  return new math.FunctionNode(S(name), [arg]);
}

function stripParens(node) {
  let n = node;
  while (n && n.isParenthesisNode) n = n.content;
  return n;
}

/** Evaluate a node numerically; returns NaN (not an exception) on failure. */
export function numeric(node, scope = {}) {
  try {
    const v = node.evaluate({ ...scope });
    if (typeof v === "number") return v;
    if (v && typeof v === "object" && "re" in v) return Math.abs(v.im) < 1e-12 ? v.re : NaN;
    if (typeof v === "boolean") return v ? 1 : 0;
    return Number(v);
  } catch {
    return NaN;
  }
}

/** Replace symbol `name` everywhere in node with the node `withNode`. */
export function substitute(node, name, withNode) {
  return node.transform((n) => (n.isSymbolNode && n.name === name ? new math.ParenthesisNode(withNode.cloneDeep()) : n));
}

export function tex(node) {
  let out;
  try {
    out = node.toTex({ parenthesis: "auto", implicit: "hide" });
  } catch {
    out = node.toString();
  }
  return out.replace(/\+\s*-/g, "-").replace(/-\s*-/g, "+");
}

export function text(node) {
  let out;
  try {
    out = node.toString({ parenthesis: "auto", implicit: "hide" });
  } catch {
    out = String(node);
  }
  return out.replace(/\+ -/g, "- ").replace(/- -/g, "+ ");
}

/** Is node a linear function a·v + b of v? Returns {a, b} or null. */
function linearCoeffs(node, v) {
  if (!dependsOn(node, v)) return null;
  try {
    const d = simplify(math.derivative(node, v));
    if (dependsOn(d, v)) return null;
    const a = numeric(d);
    const b = numeric(substitute(node, v, C(0)));
    if (!Number.isFinite(a) || !Number.isFinite(b) || Math.abs(a) < TINY) return null;
    return { a, b, aNode: d };
  } catch {
    return null;
  }
}

function polynomialDegree(node, v) {
  try {
    const r = math.rationalize(node, {}, true);
    if (!r.denominator || dependsOn(r.denominator, v) === false) {
      const vars = r.variables || [];
      if (vars.length > 1 || (vars.length === 1 && vars[0] !== v)) return -1;
      const coeffs = r.coefficients || [];
      return coeffs.length ? coeffs.length - 1 : 0;
    }
    return -1;
  } catch {
    return -1;
  }
}

/* ───────────────────── nice-number recognition ───────────────────── */

function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
}

function asFraction(x, maxDen = 1000) {
  for (let d = 1; d <= maxDen; d++) {
    const n = Math.round(x * d);
    if (Math.abs(n / d - x) < 1e-9 * Math.max(1, Math.abs(x))) {
      const g = gcd(n, d) || 1;
      return { n: n / g, d: d / g };
    }
  }
  return null;
}

function fracTex({ n, d }, factor = "") {
  const sign = n < 0 ? "-" : "";
  const an = Math.abs(n);
  if (d === 1) {
    if (!factor) return `${n}`;
    return `${sign}${an === 1 ? "" : an}${factor}`;
  }
  return `${sign}\\frac{${an === 1 && factor ? "" : an}${factor}}{${d}}`;
}

/**
 * Recognise a float as an exact constant. Returns { tex, text, exact } where
 * exact=false means "only a decimal".
 */
export function recognize(x) {
  if (x === Infinity) return { tex: "\\infty", text: "∞", exact: true };
  if (x === -Infinity) return { tex: "-\\infty", text: "-∞", exact: true };
  if (!Number.isFinite(x)) return { tex: "\\text{undefined}", text: "undefined", exact: false };
  if (Math.abs(x) < 1e-11) return { tex: "0", text: "0", exact: true };
  const f = asFraction(x, 200);
  if (f) return { tex: fracTex(f), text: f.d === 1 ? `${f.n}` : `${f.n}/${f.d}`, exact: true };
  const candidates = [
    { k: Math.PI, tex: "\\pi", text: "π" },
    { k: Math.E, tex: "e", text: "e" },
    { k: Math.LN2, tex: "\\ln 2", text: "ln 2" },
    { k: Math.log(3), tex: "\\ln 3", text: "ln 3" },
    { k: Math.PI * Math.PI, tex: "\\pi^{2}", text: "π²" },
    { k: 1 / Math.PI, tex: "\\frac{1}{\\pi}", text: "1/π" },
  ];
  for (const c of candidates) {
    const fr = asFraction(x / c.k, 24);
    if (fr) {
      const coef = fr.n === 1 ? "" : fr.n === -1 ? "-" : `${fr.n}`;
      const t = fr.d === 1 ? `${coef}${c.text}` : `${coef}${c.text}/${fr.d}`;
      return { tex: fracTex(fr, c.tex.startsWith("\\frac") ? `\\cdot${c.tex}` : c.tex), text: t, exact: true };
    }
  }
  // (p/q)·√r and p/q + r/s·√m
  for (let r = 2; r <= 50; r++) {
    const sr = Math.sqrt(r);
    if (Number.isInteger(sr)) continue;
    let squareFree = true;
    for (let k = 2; k * k <= r; k++) if (r % (k * k) === 0) squareFree = false;
    if (!squareFree) continue;
    const fr = asFraction(x / sr, 60);
    if (fr) return { tex: fracTex(fr, `\\sqrt{${r}}`), text: `${fr.n === 1 ? "" : fr.n === -1 ? "-" : fr.n}√${r}${fr.d === 1 ? "" : "/" + fr.d}`, exact: true };
    for (let q = 1; q <= 12; q++) {
      for (let p = -24; p <= 24; p++) {
        const rest = x - p / q;
        const fr2 = asFraction(rest / sr, 24);
        if (fr2 && p !== 0) {
          const g = gcd(p, q) || 1;
          const pp = { n: p / g, d: q / g };
          const t2 = fracTex(pp);
          const t3 = fracTex(fr2, `\\sqrt{${r}}`);
          const rational = pp.d === 1 ? `${pp.n}` : `${pp.n}/${pp.d}`;
          const surd = `${Math.abs(fr2.n) === 1 ? "" : Math.abs(fr2.n)}√${r}${fr2.d === 1 ? "" : "/" + fr2.d}`;
          return {
            tex: `${t2} ${t3.startsWith("-") ? "" : "+"} ${t3}`,
            text: `${rational} ${fr2.n < 0 ? "-" : "+"} ${surd}`,
            exact: true,
          };
        }
      }
    }
  }
  return { tex: formatDecimal(x), text: formatDecimal(x), exact: false };
}

export function formatDecimal(x) {
  if (!Number.isFinite(x)) return String(x);
  if (Math.abs(x) < 1e-12) return "0";
  const s = Number(x.toPrecision(10));
  return String(Object.is(s, -0) ? 0 : s);
}

/** "≈ 1.2346" helper used in step text. */
function approx(x) {
  return formatDecimal(x);
}

function niceTex(x) {
  const r = recognize(x);
  return r.exact ? r.tex : `\\approx ${r.tex}`;
}

function niceValueTex(x) {
  const r = recognize(x);
  return r.tex;
}

/* ─────────────────────────── differentiation ─────────────────────────── */

export function derivativeNode(node, v, order = 1) {
  let d = node;
  for (let k = 0; k < order; k++) {
    d = simplify(math.derivative(d, v));
  }
  return d;
}

/** Name the main rule for a first derivative and show its pieces. */
function ruleSteps(node, v) {
  const top = stripParens(node);
  const d = (n) => simplify(math.derivative(n, v));
  if (!dependsOn(top, v)) return [{ text: "The expression does not contain " + v + ", so it is a constant and its derivative is 0." }];
  if (top.isOperatorNode && (top.op === "+" || top.op === "-") && top.args.length === 2) {
    return [
      { text: "Sum rule: differentiate each term separately.", tex: `\\frac{d}{d${v}}\\left[${tex(top.args[0])}\\right] = ${tex(d(top.args[0]))},\\quad \\frac{d}{d${v}}\\left[${tex(top.args[1])}\\right] = ${tex(d(top.args[1]))}` },
    ];
  }
  if (top.isOperatorNode && top.op === "*" && top.args.length === 2) {
    const [u, w] = top.args;
    if (!dependsOn(u, v) || !dependsOn(w, v)) {
      const c = dependsOn(u, v) ? w : u;
      const f = dependsOn(u, v) ? u : w;
      return [{ text: "Constant multiple rule: keep the constant and differentiate the rest.", tex: `${tex(c)}\\cdot\\frac{d}{d${v}}\\left[${tex(f)}\\right] = ${tex(c)}\\cdot ${tex(d(f))}` }];
    }
    return [
      { text: "Product rule: (uv)′ = u′v + uv′ with", tex: `u = ${tex(u)},\\quad v = ${tex(w)}` },
      { text: "Derivatives of the factors:", tex: `u' = ${tex(d(u))},\\quad v' = ${tex(d(w))}` },
    ];
  }
  if (top.isOperatorNode && top.op === "/") {
    const [u, w] = top.args;
    if (!dependsOn(w, v)) return [{ text: "Dividing by a constant: differentiate the numerator and keep the denominator." }];
    return [
      { text: "Quotient rule: (u/v)′ = (u′v − uv′)/v² with", tex: `u = ${tex(u)},\\quad v = ${tex(w)}` },
      { text: "Derivatives of numerator and denominator:", tex: `u' = ${tex(d(u))},\\quad v' = ${tex(d(w))}` },
    ];
  }
  if ((top.isFunctionNode && top.args.length === 1 && !stripParens(top.args[0]).isSymbolNode) ||
      (top.isOperatorNode && top.op === "^" && (!stripParens(top.args[0]).isSymbolNode || dependsOn(top.args[1], v)))) {
    const inner = top.isFunctionNode ? top.args[0] : dependsOn(top.args[1], v) ? top.args[1] : top.args[0];
    return [
      { text: "Chain rule: differentiate the outer function, then multiply by the derivative of the inside.", tex: `u = ${tex(inner)},\\quad u' = ${tex(d(inner))}` },
    ];
  }
  if (top.isOperatorNode && top.op === "^") return [{ text: "Power rule: d/dx xⁿ = n·xⁿ⁻¹." }];
  return [{ text: "Apply the standard derivative of this function." }];
}

export function solveDerivative({ expr, variable, order = 1, point }) {
  const node = parse(expr);
  const vars = variablesOf(node);
  const v = (variable || vars[0] || "x").trim();
  const n = Math.max(1, Math.min(10, Math.trunc(Number(order) || 1)));
  const d = derivativeNode(node, v, n);
  const lhs = n === 1 ? `\\frac{d}{d${v}}` : `\\frac{d^{${n}}}{d${v}^{${n}}}`;
  const steps = n === 1 ? ruleSteps(node, v) : [];
  if (n > 1) {
    let cur = node;
    for (let k = 1; k <= n; k++) {
      cur = simplify(math.derivative(cur, v));
      steps.push({ text: `Derivative ${k}:`, tex: `f^{(${k})}(${v}) = ${tex(cur)}` });
    }
  }
  const result = { tex: `${lhs}\\left[${tex(node)}\\right] = ${tex(d)}`, text: text(d) };
  const out = { title: n === 1 ? "Derivative" : `Derivative of order ${n}`, result, steps };
  if (point && String(point).trim()) {
    const a = evaluateNumber(point);
    const val = numeric(d, { [v]: a });
    out.details = [{ label: `Value at ${v} = ${approx(a)}`, tex: `${niceTex(val)}` }];
  }
  return out;
}

/** Chain rule with the outer/inner decomposition shown. Also the multivariable form. */
export function solveChainRule({ expr, variable, substitutions }) {
  const node = parse(expr);
  const subs = String(substitutions || "").trim();
  if (subs) {
    // z = f(x, y), x = x(t), y = y(t)  →  dz/dt = Σ ∂f/∂xi · dxi/dt
    const pairs = subs.split(/[,;]/).map((p) => p.split("=").map((s) => s.trim()));
    if (pairs.some((p) => p.length !== 2 || !p[0] || !p[1])) {
      throw new Error('Write substitutions like "x = cos(t), y = sin(t)".');
    }
    const t = (variable || "t").trim();
    const terms = [];
    const termTex = [];
    for (const [name, rhs] of pairs) {
      const inner = parse(rhs);
      const fPartial = simplify(math.derivative(node, name));
      const dInner = simplify(math.derivative(inner, t));
      terms.push({ name, fPartial, dInner, inner });
      termTex.push(`\\frac{\\partial f}{\\partial ${name}}\\frac{d${name}}{d${t}}`);
    }
    let substituted = node;
    for (const term of terms) substituted = substitute(substituted, term.name, term.inner);
    const direct = simplify(math.derivative(simplify(substituted), t));
    const steps = [
      { text: "Multivariable chain rule:", tex: `\\frac{df}{d${t}} = ${termTex.join(" + ")}` },
      ...terms.map((tm) => ({
        text: `For ${tm.name}:`,
        tex: `\\frac{\\partial f}{\\partial ${tm.name}} = ${tex(tm.fPartial)},\\quad \\frac{d${tm.name}}{d${t}} = ${tex(tm.dInner)}`,
      })),
      { text: "Substitute and simplify:", tex: `\\frac{df}{d${t}} = ${tex(direct)}` },
    ];
    return { title: "Chain rule (multivariable)", result: { tex: `\\frac{df}{d${t}} = ${tex(direct)}`, text: text(direct) }, steps };
  }

  const v = (variable || variablesOf(node)[0] || "x").trim();
  const top = stripParens(node);
  let outerTex = null;
  let inner = null;
  let outerFn = null;
  if (top.isFunctionNode && top.args.length === 1 && dependsOn(top.args[0], v) && !stripParens(top.args[0]).isSymbolNode) {
    inner = top.args[0];
    outerFn = new math.FunctionNode(top.fn, [S("u")]);
    outerTex = tex(outerFn);
  } else if (top.isOperatorNode && top.op === "^" && dependsOn(top.args[0], v) && !dependsOn(top.args[1], v) && !stripParens(top.args[0]).isSymbolNode) {
    inner = top.args[0];
    outerFn = pow(S("u"), top.args[1]);
    outerTex = tex(outerFn);
  } else if (top.isOperatorNode && top.op === "^" && !dependsOn(top.args[0], v) && dependsOn(top.args[1], v) && !stripParens(top.args[1]).isSymbolNode) {
    inner = top.args[1];
    outerFn = pow(top.args[0], S("u"));
    outerTex = tex(outerFn);
  }
  const d = simplify(math.derivative(node, v));
  if (!inner) {
    return {
      title: "Chain rule",
      result: { tex: `\\frac{d}{d${v}}\\left[${tex(node)}\\right] = ${tex(d)}`, text: text(d) },
      steps: [{ text: "This expression is not a composition f(g(x)) at the top level, so the ordinary rules apply directly." }],
    };
  }
  const outerD = simplify(math.derivative(outerFn, "u"));
  const innerD = simplify(math.derivative(inner, v));
  const steps = [
    { text: "Write the function as an outer function of an inner one:", tex: `y = ${outerTex},\\quad u = ${tex(inner)}` },
    { text: "Differentiate the outer function with respect to u:", tex: `\\frac{dy}{du} = ${tex(outerD)}` },
    { text: "Differentiate the inner function:", tex: `\\frac{du}{d${v}} = ${tex(innerD)}` },
    { text: "Multiply and substitute u back:", tex: `\\frac{dy}{d${v}} = \\frac{dy}{du}\\cdot\\frac{du}{d${v}} = ${tex(d)}` },
  ];
  return { title: "Chain rule", result: { tex: `\\frac{dy}{d${v}} = ${tex(d)}`, text: text(d) }, steps };
}

export function solvePartial({ expr, variables, point }) {
  const node = parse(expr);
  const order = parseVarList(variables, [variablesOf(node)[0] || "x"]);
  let d = node;
  const steps = [];
  for (const v of order) {
    d = simplify(math.derivative(d, v));
    steps.push({ text: `Differentiate with respect to ${v}, treating the other variables as constants:`, tex: tex(d) });
  }
  const den = order.map((v) => `\\partial ${v}`).reverse().join("\\,");
  const lhs = order.length === 1 ? `\\frac{\\partial f}{\\partial ${order[0]}}` : `\\frac{\\partial^{${order.length}} f}{${den}}`;
  const out = { title: "Partial derivative", result: { tex: `${lhs} = ${tex(d)}`, text: text(d) }, steps };
  if (point && String(point).trim()) {
    const vars = variablesOf(node);
    const p = parsePoint(point, vars.length);
    const scope = Object.fromEntries(vars.map((name, i) => [name, p[i]]));
    out.details = [{ label: `At (${p.map(approx).join(", ")})`, tex: niceTex(numeric(d, scope)) }];
  }
  return out;
}

export function solveImplicit({ expr }) {
  // F(x, y) = 0 → dy/dx = −F_x / F_y
  const F = parseEquation(expr);
  const Fx = simplify(math.derivative(F, "x"));
  const Fy = simplify(math.derivative(F, "y"));
  const dydx = simplify(neg(div(Fx, Fy)));
  return {
    title: "Implicit differentiation",
    result: { tex: `\\frac{dy}{dx} = ${tex(dydx)}`, text: text(dydx) },
    steps: [
      { text: "Move everything to one side so the curve is F(x, y) = 0:", tex: `F(x,y) = ${tex(F)}` },
      { text: "Partial derivatives:", tex: `F_x = ${tex(Fx)},\\quad F_y = ${tex(Fy)}` },
      { text: "Implicit function theorem:", tex: `\\frac{dy}{dx} = -\\frac{F_x}{F_y} = ${tex(dydx)}` },
    ],
  };
}

export function gradientNodes(node, vars) {
  return vars.map((v) => simplify(math.derivative(node, v)));
}

export function solveGradient({ expr, variables, point }) {
  const node = parse(expr);
  const vars = parseVarList(variables, variablesOf(node));
  if (!vars.length) throw new Error("The function has no variables to differentiate.");
  const g = gradientNodes(node, vars);
  const vecTex = `\\left\\langle ${g.map(tex).join(",\\ ")} \\right\\rangle`;
  const steps = vars.map((v, i) => ({ text: `∂f/∂${v}:`, tex: `\\frac{\\partial f}{\\partial ${v}} = ${tex(g[i])}` }));
  const out = { title: "Gradient", result: { tex: `\\nabla f = ${vecTex}`, text: `<${g.map(text).join(", ")}>` }, steps };
  if (point && String(point).trim()) {
    const p = parsePoint(point, vars.length);
    const scope = Object.fromEntries(vars.map((v, i) => [v, p[i]]));
    const vals = g.map((gi) => numeric(gi, scope));
    const mag = Math.hypot(...vals);
    out.details = [
      { label: `∇f at (${p.map(approx).join(", ")})`, tex: `\\left\\langle ${vals.map(niceValueTex).join(",\\ ")} \\right\\rangle` },
      { label: "Magnitude (steepest rate of increase)", tex: niceTex(mag) },
    ];
  }
  return out;
}

export function solveDirectional({ expr, variables, point, direction }) {
  const node = parse(expr);
  const vars = parseVarList(variables, variablesOf(node));
  const p = parsePoint(point, vars.length);
  const u = parsePoint(direction, vars.length);
  if (!p) throw new Error("Enter the point, e.g. 1, 2.");
  if (!u) throw new Error("Enter the direction vector, e.g. 3, 4.");
  const len = Math.hypot(...u);
  if (len < TINY) throw new Error("The direction vector can't be zero.");
  const unit = u.map((c) => c / len);
  const g = gradientNodes(node, vars);
  const scope = Object.fromEntries(vars.map((v, i) => [v, p[i]]));
  const gv = g.map((gi) => numeric(gi, scope));
  const value = gv.reduce((s, gi, i) => s + gi * unit[i], 0);
  return {
    title: "Directional derivative",
    result: { tex: `D_{\\mathbf u} f = ${niceTex(value)}`, text: approx(value) },
    steps: [
      { text: "Gradient:", tex: `\\nabla f = \\left\\langle ${g.map(tex).join(",\\ ")} \\right\\rangle` },
      { text: "At the point:", tex: `\\nabla f(${p.map(niceValueTex).join(", ")}) = \\left\\langle ${gv.map(niceValueTex).join(",\\ ")} \\right\\rangle` },
      { text: "Unit direction (divide by its length):", tex: `\\mathbf u = \\frac{1}{${niceValueTex(len)}}\\left\\langle ${u.map(niceValueTex).join(",\\ ")} \\right\\rangle` },
      { text: "Dot product:", tex: `D_{\\mathbf u} f = \\nabla f\\cdot\\mathbf u = ${niceTex(value)}` },
    ],
  };
}

/* ─────────────────────────── integration ─────────────────────────── */

const LOG_ABS = (arg) => fn("log", fn("abs", arg));

/** Antiderivative of single functions of a linear argument a·v + b. */
function integrateFunctionOfLinear(name, arg, v) {
  const lin = linearCoeffs(arg, v);
  if (!lin) return null;
  const k = C(1 / lin.a);
  const withK = (n) => (Math.abs(lin.a - 1) < TINY ? n : mul(k, n));
  switch (name) {
    case "sin":
      return withK(neg(fn("cos", arg)));
    case "cos":
      return withK(fn("sin", arg));
    case "tan":
      return withK(neg(LOG_ABS(fn("cos", arg))));
    case "cot":
      return withK(LOG_ABS(fn("sin", arg)));
    case "sec":
      return withK(LOG_ABS(add(fn("sec", arg), fn("tan", arg))));
    case "csc":
      return withK(neg(LOG_ABS(add(fn("csc", arg), fn("cot", arg)))));
    case "exp":
      return withK(fn("exp", arg));
    case "sinh":
      return withK(fn("cosh", arg));
    case "cosh":
      return withK(fn("sinh", arg));
    case "log":
      return withK(sub(mul(arg, fn("log", arg)), arg));
    case "sqrt":
      return withK(mul(C(2 / 3), pow(arg, C(1.5))));
    case "atan":
      return withK(sub(mul(arg, fn("atan", arg)), mul(C(0.5), fn("log", add(C(1), pow(arg, C(2)))))));
    case "asin":
      return withK(add(mul(arg, fn("asin", arg)), fn("sqrt", sub(C(1), pow(arg, C(2))))));
    case "acos":
      return withK(sub(mul(arg, fn("acos", arg)), fn("sqrt", sub(C(1), pow(arg, C(2))))));
    default:
      return null;
  }
}

/** Antiderivative of the outer function F where the integrand is F(u)·u'. */
function antiderivativeOfOuter(top, u) {
  // top is either FunctionNode f(g) or pow(g, n) / pow(a, g); returns A(u) with A' = outer.
  if (top.isFunctionNode) return integrateFunctionOfLinear(top.fn.name, S(u), u);
  if (top.isOperatorNode && top.op === "^") {
    const [base, ex] = top.args;
    if (!isConstantNode(ex)) {
      // a^g
      const a = numeric(base);
      if (!(a > 0)) return null;
      if (base.isSymbolNode && base.name === "e") return pow(base, S(u));
      return div(pow(base, S(u)), fn("log", base));
    }
    const n = numeric(ex);
    if (Math.abs(n + 1) < TINY) return LOG_ABS(S(u));
    return div(pow(S(u), C(n + 1)), C(n + 1));
  }
  return null;
}

function isConstantNode(node) {
  let hasSymbol = false;
  node.traverse((n, path, parent) => {
    if (n.isSymbolNode && !(parent && parent.isFunctionNode && path === "fn") && !CONSTANTS.has(n.name)) hasSymbol = true;
  });
  return !hasSymbol;
}

/** Flatten a product into its factors (handles division as ·x^-1). */
function factorsOf(node) {
  const n = stripParens(node);
  if (n.isOperatorNode && n.op === "*" && n.args.length >= 2) return n.args.flatMap(factorsOf);
  if (n.isOperatorNode && n.op === "/") return [...factorsOf(n.args[0]), pow(n.args[1], C(-1))];
  if (n.isOperatorNode && n.fn === "unaryMinus") return [C(-1), ...factorsOf(n.args[0])];
  return [n];
}

function allExcept(list, skip) {
  const out = [];
  for (let j = 0; j < list.length; j++) if (j !== skip) out.push(list[j]);
  return out;
}

function productOf(list) {
  if (!list.length) return C(1);
  return list.reduce((acc, f) => mul(acc, f));
}

/** True when two expressions agree at several random points. */
function numericallyEqual(a, b, vars, tolerance = 1e-6) {
  let checked = 0;
  for (let trial = 0; trial < 40 && checked < 6; trial++) {
    const scope = Object.fromEntries(vars.map((v) => [v, 0.3 + Math.random() * 2.2]));
    const x = numeric(a, scope);
    const y = numeric(b, scope);
    if (!Number.isFinite(x) || !Number.isFinite(y)) continue;
    if (Math.abs(x - y) > tolerance * Math.max(1, Math.abs(x), Math.abs(y))) return false;
    checked++;
  }
  return checked >= 3;
}

function isConstantRatio(num, den, v, otherVars) {
  // returns k if num/den is constant in v (numerically), else null
  const ratio = div(num, den);
  const vars = [v, ...otherVars];
  let k = null;
  for (let trial = 0; trial < 30; trial++) {
    const scope = Object.fromEntries(vars.map((name) => [name, 0.2 + Math.random() * 2]));
    const r = numeric(ratio, scope);
    if (!Number.isFinite(r)) continue;
    if (k === null) k = r;
    else if (Math.abs(r - k) > 1e-7 * Math.max(1, Math.abs(k))) return null;
  }
  if (k === null) return null;
  return isConstantNode(simplify(ratio)) || !otherVars.length ? k : null;
}

/** Core recursive integrator. Returns a node or null when no rule applies. */
function integrate(nodeIn, v, depth = 0) {
  if (depth > 8) return null;
  const node = stripParens(nodeIn);
  if (!dependsOn(node, v)) return mul(node, S(v));
  if (node.isSymbolNode) return mul(C(0.5), pow(S(v), C(2)));

  if (node.isOperatorNode) {
    if ((node.op === "+" || node.op === "-") && node.args.length === 2) {
      const a = integrate(node.args[0], v, depth + 1);
      const b = integrate(node.args[1], v, depth + 1);
      if (!a || !b) return null;
      return node.op === "+" ? add(a, b) : sub(a, b);
    }
    if (node.fn === "unaryMinus") {
      const a = integrate(node.args[0], v, depth + 1);
      return a ? neg(a) : null;
    }
    if (node.fn === "unaryPlus") return integrate(node.args[0], v, depth + 1);

    if (node.op === "^") {
      const [base, ex] = node.args;
      const b = stripParens(base);
      if (!dependsOn(ex, v)) {
        const n = numeric(ex);
        const lin = linearCoeffs(b, v);
        if (lin && Number.isFinite(n)) {
          if (Math.abs(n + 1) < TINY) return mul(C(1 / lin.a), LOG_ABS(b));
          return mul(C(1 / (lin.a * (n + 1))), pow(b, C(n + 1)));
        }
        // sin^2, cos^2 (half-angle)
        if (Math.abs(n - 2) < TINY && b.isFunctionNode && linearCoeffs(b.args[0], v)) {
          const arg = b.args[0];
          if (b.fn.name === "sin") return integrate(parse(`(1 - cos(2*(${text(arg)})))/2`), v, depth + 1);
          if (b.fn.name === "cos") return integrate(parse(`(1 + cos(2*(${text(arg)})))/2`), v, depth + 1);
          if (b.fn.name === "sec") {
            const lin2 = linearCoeffs(arg, v);
            return mul(C(1 / lin2.a), fn("tan", arg));
          }
          if (b.fn.name === "csc") {
            const lin2 = linearCoeffs(arg, v);
            return mul(C(-1 / lin2.a), fn("cot", arg));
          }
          if (b.fn.name === "tan") return integrate(parse(`sec(${text(arg)})^2 - 1`), v, depth + 1);
        }
        // integer power of a polynomial → expand
        if (Number.isInteger(n) && n >= 2 && n <= 12 && polynomialDegree(b, v) >= 1) {
          try {
            const expanded = math.rationalize(node);
            if (text(expanded) !== text(node)) return integrate(expanded, v, depth + 1);
          } catch {
            /* fall through */
          }
        }
        if (n < 0) return integrateQuotient(C(1), Number.isInteger(n) && n === -1 ? b : pow(b, C(-n)), v, depth + 1);
      } else if (!dependsOn(base, v)) {
        const a = numeric(base);
        const lin = linearCoeffs(ex, v);
        if (lin && a > 0 && Math.abs(a - 1) > TINY) {
          const isE = base.isSymbolNode && base.name === "e";
          const k = Math.abs(lin.a - 1) < TINY ? null : C(lin.a);
          const lnA = isE ? null : fn("log", base);
          const denom = k && lnA ? mul(k, lnA) : k || lnA;
          return denom ? div(pow(base, ex), denom) : pow(base, ex);
        }
      }
    }

    if (node.op === "/") return integrateQuotient(node.args[0], node.args[1], v, depth);

    if (node.op === "*") return integrateProduct(factorsOf(node), v, depth);
  }

  if (node.isFunctionNode && node.args.length === 1) {
    const direct = integrateFunctionOfLinear(node.fn.name, node.args[0], v);
    if (direct) return direct;
  }

  return integrateBySubstitution([node], v, depth);
}

function integrateQuotient(num, den, v, depth) {
  const d = stripParens(den);
  if (!dependsOn(den, v)) {
    const a = integrate(num, v, depth + 1);
    return a ? div(a, den) : null;
  }
  // u'/u  →  ln|u|
  const dDen = simplify(math.derivative(den, v));
  const k = isConstantRatio(num, dDen, v, []);
  if (k !== null && Number.isFinite(k)) return mul(C(k), LOG_ABS(den));

  // polynomial / polynomial → division + partial fractions (degree ≤ 2 denominator)
  const degDen = polynomialDegree(den, v);
  const degNum = dependsOn(num, v) ? polynomialDegree(num, v) : 0;
  if (degDen >= 1 && degNum >= 0) {
    const pf = rationalIntegral(num, den, v);
    if (pf) return pf;
  }
  // 1/sqrt(a² − x²) → asin, 1/sqrt(x² + a²) → asinh form
  if (!dependsOn(num, v) && d.isFunctionNode && d.fn.name === "sqrt") {
    const inner = d.args[0];
    if (polynomialDegree(inner, v) === 2) {
      const r = math.rationalize(inner, {}, true);
      const [c0, c1, c2] = r.coefficients.map(Number);
      if (Math.abs(c1) < TINY && c0 > 0) {
        const kk = numeric(num);
        if (c2 < 0) {
          const a = Math.sqrt(c0 / -c2);
          return mul(C(kk / Math.sqrt(-c2)), fn("asin", div(S(v), C(a))));
        }
        return mul(C(kk / Math.sqrt(c2)), fn("log", add(S(v), fn("sqrt", add(pow(S(v), C(2)), C(c0 / c2))))));
      }
    }
  }
  const denFactors = factorsOf(den);
  const inverted = denFactors.length > 1 ? denFactors.map((f) => pow(f, C(-1))) : [pow(den, C(-1))];
  return integrateProduct([...factorsOf(num), ...inverted], v, depth + 1);
}

/** ∫ P(v)/Q(v) dv for deg Q ≤ 2 (after polynomial division). */
function rationalIntegral(num, den, v) {
  try {
    const qr = math.rationalize(den, {}, true);
    const nr = dependsOn(num, v) ? math.rationalize(num, {}, true) : null;
    const q = qr.coefficients.map(Number); // ascending
    let p = nr ? nr.coefficients.map(Number) : [numeric(num)];
    if (q.some((c) => !Number.isFinite(c)) || p.some((c) => !Number.isFinite(c))) return null;
    const degQ = q.length - 1;
    if (degQ < 1 || degQ > 2) return null;
    // polynomial long division p / q (ascending coefficient arrays)
    const quotient = [];
    p = p.slice();
    while (p.length - 1 >= degQ) {
      const coef = p[p.length - 1] / q[degQ];
      const shift = p.length - 1 - degQ;
      quotient[shift] = coef;
      for (let i = 0; i <= degQ; i++) p[i + shift] -= coef * q[i];
      p.pop();
    }
    const parts = [];
    // ∫ quotient
    quotient.forEach((c, i) => {
      if (c && Math.abs(c) > TINY) parts.push(mul(C(c / (i + 1)), pow(S(v), C(i + 1))));
    });
    while (p.length && Math.abs(p[p.length - 1]) < TINY) p.pop();
    if (p.length) {
      if (degQ === 1) {
        // r / (q1 v + q0)
        parts.push(mul(C(p[0] / q[1]), LOG_ABS(add(mul(C(q[1]), S(v)), C(q[0])))));
      } else {
        const [c, b, a] = q;
        const r1 = p[1] || 0;
        const r0 = p[0] || 0;
        // (r1 v + r0)/(a v² + b v + c) = (r1/2a)(2a v + b)/Q + (r0 − r1 b/2a)/Q
        const A = r1 / (2 * a);
        const B = r0 - A * b;
        const Q = add(add(mul(C(a), pow(S(v), C(2))), mul(C(b), S(v))), C(c));
        if (Math.abs(A) > TINY) parts.push(mul(C(A), LOG_ABS(Q)));
        if (Math.abs(B) > TINY) {
          const disc = b * b - 4 * a * c;
          if (disc < -TINY) {
            const s = Math.sqrt(-disc);
            parts.push(mul(C((2 * B) / s), fn("atan", div(add(mul(C(2 * a), S(v)), C(b)), C(s)))));
          } else if (disc > TINY) {
            const s = Math.sqrt(disc);
            const x1 = (-b + s) / (2 * a);
            const x2 = (-b - s) / (2 * a);
            // B/(a(v−x1)(v−x2)) = (B/(a(x1−x2))) [1/(v−x1) − 1/(v−x2)]
            const K = B / (a * (x1 - x2));
            parts.push(mul(C(K), sub(LOG_ABS(sub(S(v), C(x1))), LOG_ABS(sub(S(v), C(x2))))));
          } else {
            const x0 = -b / (2 * a);
            parts.push(mul(C(-B / a), pow(sub(S(v), C(x0)), C(-1))));
          }
        }
      }
    }
    if (!parts.length) return C(0);
    return parts.reduce((acc, part) => add(acc, part));
  } catch {
    return null;
  }
}

function integrateProduct(factors, v, depth) {
  const constants = factors.filter((f) => !dependsOn(f, v));
  const dependent = factors.filter((f) => dependsOn(f, v));
  const k = productOf(constants);
  const scale = (n) => (constants.length ? mul(k, n) : n);
  if (dependent.length === 0) return mul(k, S(v));
  if (dependent.length === 1) {
    const inner = integrate(dependent[0], v, depth + 1);
    return inner ? scale(inner) : null;
  }
  const product = productOf(dependent);

  // Polynomial product → expand
  if (polynomialDegree(product, v) >= 0) {
    try {
      const expanded = math.rationalize(product);
      const r = integrate(expanded, v, depth + 1);
      if (r) return scale(r);
    } catch {
      /* continue */
    }
  }

  // e^(ax+b)·sin(cx+d) and e^(ax+b)·cos(cx+d): the cyclic parts formula
  if (dependent.length === 2) {
    const expIdx = dependent.findIndex((f) => {
      const n = stripParens(f);
      return (n.isFunctionNode && n.fn.name === "exp") || (n.isOperatorNode && n.op === "^" && n.args[0].isSymbolNode && n.args[0].name === "e");
    });
    const trig = dependent[1 - expIdx];
    if (expIdx !== -1 && trig && trig.isFunctionNode && ["sin", "cos"].includes(trig.fn.name)) {
      const e = stripParens(dependent[expIdx]);
      const expArg = e.isFunctionNode ? e.args[0] : e.args[1];
      const L1 = linearCoeffs(expArg, v);
      const L2 = linearCoeffs(trig.args[0], v);
      if (L1 && L2) {
        const a = L1.a;
        const c = L2.a;
        const sinN = fn("sin", trig.args[0]);
        const cosN = fn("cos", trig.args[0]);
        const comb =
          trig.fn.name === "cos"
            ? add(mul(C(a), cosN), mul(C(c), sinN))
            : sub(mul(C(a), sinN), mul(C(c), cosN));
        return scale(div(mul(pow(S("e"), expArg), comb), C(a * a + c * c)));
      }
    }
  }

  // sec·tan, csc·cot
  if (dependent.length === 2) {
    const names = dependent.map((f) => (f.isFunctionNode ? f.fn.name : ""));
    const args = dependent.map((f) => (f.isFunctionNode ? text(f.args[0]) : null));
    if (args[0] && args[0] === args[1]) {
      const lin = linearCoeffs(dependent[0].args[0], v);
      if (lin && names.includes("sec") && names.includes("tan")) return scale(mul(C(1 / lin.a), fn("sec", dependent[0].args[0])));
      if (lin && names.includes("csc") && names.includes("cot")) return scale(mul(C(-1 / lin.a), fn("csc", dependent[0].args[0])));
    }
  }

  const viaSubstitution = integrateBySubstitution(dependent, v, depth);
  if (viaSubstitution) return scale(viaSubstitution);

  const parts = integrateByParts(dependent, v, depth);
  if (parts) return scale(parts);
  return null;
}

/** u-substitution: integrand = F(g(v)) · c·g'(v). */
function integrateBySubstitution(factors, v, depth) {
  if (depth > 6) return null;
  for (let i = 0; i < factors.length; i++) {
    const f = stripParens(factors[i]);
    let inner = null;
    if (f.isFunctionNode && f.args.length === 1 && dependsOn(f.args[0], v)) inner = f.args[0];
    else if (f.isOperatorNode && f.op === "^" && dependsOn(f.args[0], v) && !dependsOn(f.args[1], v)) inner = f.args[0];
    else if (f.isOperatorNode && f.op === "^" && !dependsOn(f.args[0], v) && dependsOn(f.args[1], v)) inner = f.args[1];
    if (!inner || linearCoeffs(inner, v)) continue;
    const rest = productOf(allExcept(factors, i));
    const gPrime = simplify(math.derivative(inner, v));
    const k = isConstantRatio(rest, gPrime, v, []);
    if (k === null || !Number.isFinite(k)) continue;
    const outer = antiderivativeOfOuter(f, "__u");
    if (!outer) continue;
    return mul(C(k), substitute(outer, "__u", inner));
  }
  // single factor whose "rest" is 1: e.g. 2x·e^(x²) already handled; also g'·g^n patterns
  if (factors.length >= 2) {
    for (let i = 0; i < factors.length; i++) {
      const g = factors[i];
      const rest = productOf(allExcept(factors, i));
      const gPrime = simplify(math.derivative(g, v));
      const k = isConstantRatio(rest, gPrime, v, []);
      if (k !== null && Number.isFinite(k)) return mul(C(k / 2), pow(g, C(2)));
    }
  }
  return null;
}

/** Integration by parts with LIATE choice (repeated for polynomial degrees). */
function integrateByParts(factors, v, depth) {
  if (depth > 6 || factors.length !== 2) return null;
  const rank = (f) => {
    const n = stripParens(f);
    if (n.isFunctionNode && ["log"].includes(n.fn.name)) return 0;
    if (n.isFunctionNode && ["asin", "acos", "atan"].includes(n.fn.name)) return 1;
    if (polynomialDegree(n, v) >= 0) return 2;
    if (n.isFunctionNode && ["sin", "cos", "tan", "sec", "csc", "cot", "sinh", "cosh"].includes(n.fn.name)) return 3;
    return 4; // exponentials
  };
  const sorted = factors.slice().sort((a, b) => rank(a) - rank(b));
  const [u, dv] = sorted;
  const vInt = integrate(dv, v, depth + 1);
  if (!vInt) return null;
  const du = simplify(math.derivative(u, v));
  const remaining = simplify(mul(vInt, du));
  const restInt = integrate(remaining, v, depth + 2);
  if (!restInt) return null;
  return sub(mul(u, vInt), restInt);
}

/** Antiderivative with numeric verification. Returns a node or null. */
export function antiderivative(node, v) {
  let F = null;
  try {
    F = integrate(node, v, 0);
  } catch {
    F = null;
  }
  if (!F) return null;
  let pretty = simplify(F);
  // simplify() folds constants like ln 2 into 0.693147…; keep the exact form then.
  const longDecimal = /\d\.\d{6,}/;
  if (longDecimal.test(text(pretty)) && !longDecimal.test(text(F))) pretty = F;
  const vars = [...new Set([v, ...variablesOf(node)])];
  try {
    const check = math.derivative(pretty, v);
    if (numericallyEqual(check, node, vars, 1e-6)) return pretty;
    const checkRaw = math.derivative(F, v);
    if (numericallyEqual(checkRaw, node, vars, 1e-6)) return F;
  } catch {
    /* unverifiable */
  }
  return null;
}

export function solveIndefiniteIntegral({ expr, variable }) {
  const node = parse(expr);
  const v = (variable || variablesOf(node)[0] || "x").trim();
  const F = antiderivative(node, v);
  if (!F) {
    throw new Error(
      "No elementary antiderivative found by the built-in engine. Try a definite integral (numeric) or rewrite the integrand.",
    );
  }
  return {
    title: "Indefinite integral",
    result: { tex: `\\int ${tex(node)}\\,d${v} = ${tex(F)} + C`, text: `${text(F)} + C` },
    steps: [
      { text: "Antiderivative found with the standard rules (linearity, power rule, substitution, parts, partial fractions):", tex: `F(${v}) = ${tex(F)}` },
      { text: "Check: differentiating F gives back the integrand, so the answer is verified.", tex: `F'(${v}) = ${tex(node)}` },
    ],
    verified: true,
  };
}

/* numeric quadrature: composite Gauss–Legendre (robust, no endpoint evaluation) */
const GL_X = [
  -0.9739065285171717, -0.8650633666889845, -0.6794095682990244, -0.4333953941292472, -0.1488743389816312,
  0.1488743389816312, 0.4333953941292472, 0.6794095682990244, 0.8650633666889845, 0.9739065285171717,
];
const GL_W = [
  0.0666713443086881, 0.1494513491505806, 0.219086362515982, 0.2692667193099963, 0.2955242247147529,
  0.2955242247147529, 0.2692667193099963, 0.219086362515982, 0.1494513491505806, 0.0666713443086881,
];

function gaussLegendre(f, a, b, panels = 64) {
  const h = (b - a) / panels;
  let total = 0;
  for (let p = 0; p < panels; p++) {
    const lo = a + p * h;
    const mid = lo + h / 2;
    for (let i = 0; i < GL_X.length; i++) {
      const y = f(mid + (h / 2) * GL_X[i]);
      if (!Number.isFinite(y)) return NaN;
      total += GL_W[i] * y * (h / 2);
    }
  }
  return total;
}

function integrateNumeric(f, a, b) {
  if (a === b) return 0;
  if (a > b) return -integrateNumeric(f, b, a);
  // map infinite ranges onto finite ones
  if (a === -Infinity && b === Infinity) return integrateNumeric((t) => f(t / (1 - t * t)) * ((1 + t * t) / (1 - t * t) ** 2), -1, 1);
  if (b === Infinity) return integrateNumeric((t) => f(a + t / (1 - t)) / (1 - t) ** 2, 0, 1);
  if (a === -Infinity) return integrateNumeric((t) => f(b - (1 - t) / t) / (t * t), 0, 1);
  const coarse = gaussLegendre(f, a, b, 64);
  const fine = gaussLegendre(f, a, b, 256);
  if (!Number.isFinite(fine)) return NaN;
  if (Math.abs(fine - coarse) > 1e-6 * Math.max(1, Math.abs(fine))) {
    const finer = gaussLegendre(f, a, b, 1024);
    if (Math.abs(finer - fine) > 1e-4 * Math.max(1, Math.abs(finer))) {
      const err = new Error("The integral does not appear to converge (the integrand may blow up inside the interval).");
      err.code = "DIVERGENT";
      throw err;
    }
    return finer;
  }
  return fine;
}

function hasSingularityOn(f, a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) return true;
  const n = 400;
  for (let i = 0; i <= n; i++) {
    const x = a + ((b - a) * i) / n;
    if (!Number.isFinite(f(x))) return true;
  }
  return false;
}

export function solveDefiniteIntegral({ expr, variable, lower, upper }) {
  const node = parse(expr);
  const v = (variable || variablesOf(node)[0] || "x").trim();
  const a = evaluateNumber(lower);
  const b = evaluateNumber(upper);
  const compiled = node.compile();
  const f = (x) => {
    try {
      const y = compiled.evaluate({ [v]: x });
      return typeof y === "number" ? y : NaN;
    } catch {
      return NaN;
    }
  };
  const F = antiderivative(node, v);
  const steps = [];
  let value;
  let exact = false;
  if (F && !hasSingularityOn(f, a, b)) {
    const Fb = numeric(F, { [v]: b });
    const Fa = numeric(F, { [v]: a });
    if (Number.isFinite(Fa) && Number.isFinite(Fb)) {
      value = Fb - Fa;
      exact = true;
      steps.push({ text: "Antiderivative:", tex: `F(${v}) = ${tex(F)}` });
      steps.push({
        text: "Fundamental theorem of calculus:",
        tex: `\\int_{${niceValueTex(a)}}^{${niceValueTex(b)}} f\\,d${v} = F(${niceValueTex(b)}) - F(${niceValueTex(a)})`,
      });
    }
  }
  const numericValue = integrateNumeric(f, a, b);
  if (!exact) {
    if (!Number.isFinite(numericValue)) throw new Error("The integral could not be evaluated (the integrand is undefined somewhere on the interval).");
    value = numericValue;
    steps.push({ text: "No usable antiderivative on this interval, so the integral was computed numerically (Gauss–Legendre quadrature)." });
  } else if (Number.isFinite(numericValue) && Math.abs(numericValue - value) > 1e-6 * Math.max(1, Math.abs(value))) {
    // antiderivative jumped (e.g. branch of log/atan): trust numerics
    value = numericValue;
    exact = false;
    steps.push({ text: "The antiderivative is not continuous on this interval, so the numeric value is used." });
  }
  return {
    title: "Definite integral",
    result: {
      tex: `\\int_{${niceValueTex(a)}}^{${niceValueTex(b)}} ${tex(node)}\\,d${v} = ${niceTex(value)}`,
      text: recognize(value).text,
    },
    steps,
    details: [{ label: "Decimal value", tex: approx(value) }],
    verified: exact && Number.isFinite(numericValue),
  };
}

/** Double / triple integrals with constant or variable bounds (iterated). */
export function solveMultipleIntegral({ expr, order, bounds }) {
  const node = parse(expr);
  const vars = parseVarList(order, ["y", "x"]); // innermost first, e.g. "y, x" = dy dx
  const lines = String(bounds || "")
    .split(/\n|;/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (lines.length !== vars.length) {
    throw new Error(`Give one bound line per variable (innermost first), e.g. "0, x" then "0, 1". Got ${lines.length} for ${vars.length} variables.`);
  }
  const boundNodes = lines.map((line) => {
    const parts = line.split(",");
    if (parts.length !== 2) throw new Error(`Bounds "${line}" should be "lower, upper".`);
    return parts.map((p) => parse(p));
  });
  // outer bounds may not depend on inner variables
  boundNodes.forEach(([lo, hi], i) => {
    vars.slice(0, i + 1).forEach((inner) => {
      if (dependsOn(lo, inner) || dependsOn(hi, inner)) {
        throw new Error(`The bounds for ${vars[i]} can only use outer variables (${vars.slice(i + 1).join(", ") || "none"}).`);
      }
    });
  });
  const compiled = node.compile();
  const compiledBounds = boundNodes.map(([lo, hi]) => [lo.compile(), hi.compile()]);
  const N = vars.length;
  const panels = N === 2 ? 24 : 10;
  const integrateLevel = (level, scope) => {
    const v = vars[level];
    const lo = compiledBounds[level][0].evaluate(scope);
    const hi = compiledBounds[level][1].evaluate(scope);
    const g = (x) => {
      const s = { ...scope, [v]: x };
      if (level === 0) {
        const y = compiled.evaluate(s);
        return typeof y === "number" ? y : NaN;
      }
      return integrateLevel(level - 1, s);
    };
    return gaussLegendre(g, lo, hi, panels);
  };
  // Try exact iterated integration first
  let exactNode = null;
  try {
    let cur = node;
    for (let i = 0; i < N; i++) {
      const F = antiderivative(cur, vars[i]);
      if (!F) throw new Error("no antiderivative");
      const [lo, hi] = boundNodes[i];
      cur = simplify(sub(substitute(F, vars[i], hi), substitute(F, vars[i], lo)));
    }
    if (isConstantNode(cur)) exactNode = cur;
  } catch {
    exactNode = null;
  }
  const numericValue = integrateLevel(N - 1, {});
  let value = numericValue;
  let verified = false;
  if (exactNode) {
    const ev = numeric(exactNode);
    if (Number.isFinite(ev) && (!Number.isFinite(numericValue) || Math.abs(ev - numericValue) < 1e-5 * Math.max(1, Math.abs(ev)))) {
      value = ev;
      verified = Number.isFinite(numericValue);
    }
  }
  if (!Number.isFinite(value)) throw new Error("The integral could not be evaluated over this region.");
  const sign = N === 2 ? "\\iint" : "\\iiint";
  const dTex = vars.map((v) => `d${v}`).join("\\,");
  const boundsTex = vars
    .map((v, i) => `${tex(boundNodes[i][0])} \\le ${v} \\le ${tex(boundNodes[i][1])}`)
    .reverse()
    .join(",\\quad ");
  return {
    title: N === 2 ? "Double integral" : "Triple integral",
    result: { tex: `${sign}_R ${tex(node)}\\,${dTex} = ${niceTex(value)}`, text: recognize(value).text },
    steps: [
      { text: "Region (outer to inner):", tex: boundsTex },
      {
        text: verified
          ? "Integrated from the inside out with antiderivatives, then confirmed numerically."
          : "Evaluated as an iterated integral numerically (Gauss–Legendre quadrature in each variable).",
      },
    ],
    details: [{ label: "Decimal value", tex: approx(value) }],
    verified,
  };
}

/* ─────────────────────────── limits ─────────────────────────── */

function limitNumeric(f, a, side) {
  const seq = [];
  if (a === Infinity || a === -Infinity) {
    const s = a === Infinity ? 1 : -1;
    for (let k = 1; k <= 9; k++) seq.push(f(s * 10 ** k));
  } else {
    const dir = side === "left" ? -1 : 1;
    for (let k = 2; k <= 9; k++) seq.push(f(a + dir * 10 ** -k * Math.max(1, Math.abs(a))));
  }
  const finite = seq.filter(Number.isFinite);
  if (finite.length < 4) {
    const last = seq[seq.length - 1];
    if (last === Infinity || last === -Infinity) return last;
    return NaN;
  }
  const tail = finite.slice(-4);
  const last = tail[tail.length - 1];
  const growing = tail.every((y, i) => i === 0 || Math.abs(y) > Math.abs(tail[i - 1]) * 3);
  if (growing && Math.abs(last) > 1e6) return last > 0 ? Infinity : -Infinity;
  const spread = Math.max(...tail) - Math.min(...tail);
  if (spread < 1e-4 * Math.max(1, Math.abs(last))) {
    // pick the most stable middle value (very small h loses precision)
    const mid = finite.slice(-5, -1);
    const val = mid.length ? mid[mid.length - 1] : last;
    return Math.abs(val) < 1e-8 ? 0 : val;
  }
  return NaN;
}

/** Exact value through L'Hôpital for 0/0 and ∞/∞ at a finite point. */
function lhopital(node, v, a) {
  const top = stripParens(node);
  if (!(top.isOperatorNode && top.op === "/")) return null;
  let [num, den] = top.args;
  const steps = [];
  for (let k = 0; k < 6; k++) {
    const nv = numeric(num, { [v]: a });
    const dv = numeric(den, { [v]: a });
    const zeroZero = Math.abs(nv) < 1e-12 && Math.abs(dv) < 1e-12;
    if (!zeroZero) {
      if (k === 0) return null;
      if (Number.isFinite(nv) && Number.isFinite(dv) && Math.abs(dv) > 1e-12) return { value: nv / dv, steps };
      return null;
    }
    num = simplify(math.derivative(num, v));
    den = simplify(math.derivative(den, v));
    steps.push({ text: `0/0 form — apply L'Hôpital's rule (${k + 1}):`, tex: `\\lim \\frac{${tex(num)}}{${tex(den)}}` });
  }
  return null;
}

export function solveLimit({ expr, variable, approach, side = "both" }) {
  const node = parse(expr);
  const v = (variable || variablesOf(node)[0] || "x").trim();
  const a = evaluateNumber(approach);
  const compiled = node.compile();
  const f = (x) => {
    try {
      const y = compiled.evaluate({ [v]: x });
      if (typeof y === "number") return y;
      if (y && typeof y === "object" && "re" in y && Math.abs(y.im) < 1e-12) return y.re;
      return NaN;
    } catch {
      return NaN;
    }
  };
  const arrow = side === "left" ? "^-" : side === "right" ? "^+" : "";
  const limTex = `\\lim_{${v} \\to ${niceValueTex(a)}${arrow}} ${tex(node)}`;
  const steps = [];
  let value;

  if (Number.isFinite(a)) {
    const direct = f(a);
    const near = f(a + 1e-7);
    const nearL = f(a - 1e-7);
    if (Number.isFinite(direct) && Math.abs(near - direct) < 1e-4 * Math.max(1, Math.abs(direct)) && Math.abs(nearL - direct) < 1e-4 * Math.max(1, Math.abs(direct))) {
      steps.push({ text: "The function is continuous here, so substitute directly:", tex: `f(${niceValueTex(a)}) = ${niceTex(direct)}` });
      return { title: "Limit", result: { tex: `${limTex} = ${niceTex(direct)}`, text: recognize(direct).text }, steps };
    }
    const lh = lhopital(node, v, a);
    if (lh) {
      steps.push({ text: "Direct substitution gives the indeterminate form 0/0." }, ...lh.steps);
      steps.push({ text: "Now substitute:", tex: `${niceTex(lh.value)}` });
      return { title: "Limit", result: { tex: `${limTex} = ${niceTex(lh.value)}`, text: recognize(lh.value).text }, steps };
    }
    const left = limitNumeric(f, a, "left");
    const right = limitNumeric(f, a, "right");
    if (side === "left") value = left;
    else if (side === "right") value = right;
    else {
      const same =
        (left === right) ||
        (Number.isFinite(left) && Number.isFinite(right) && Math.abs(left - right) < 1e-4 * Math.max(1, Math.abs(left)));
      steps.push({ text: "Approach from both sides numerically:", tex: `\\lim_{${v}\\to ${niceValueTex(a)}^-} = ${niceTex(left)},\\quad \\lim_{${v}\\to ${niceValueTex(a)}^+} = ${niceTex(right)}` });
      if (!same) {
        return {
          title: "Limit",
          result: { tex: `${limTex}\\ \\text{does not exist}`, text: "does not exist" },
          steps: [...steps, { text: "The one-sided limits are different, so the two-sided limit does not exist." }],
        };
      }
      value = right;
    }
  } else {
    value = limitNumeric(f, a, side);
    steps.push({ text: `Let ${v} grow without bound and watch the values settle.` });
  }

  if (Number.isNaN(value)) {
    return {
      title: "Limit",
      result: { tex: `${limTex}\\ \\text{does not exist}`, text: "does not exist" },
      steps: [...steps, { text: "The values keep oscillating instead of settling, so the limit does not exist." }],
    };
  }
  return { title: "Limit", result: { tex: `${limTex} = ${niceTex(value)}`, text: recognize(value).text }, steps };
}

/* ─────────────────────────── series ─────────────────────────── */

export function solveTaylor({ expr, variable, center = "0", order = 5 }) {
  const node = parse(expr);
  const v = (variable || variablesOf(node)[0] || "x").trim();
  const a = evaluateNumber(center || "0");
  const n = Math.max(1, Math.min(12, Math.trunc(Number(order) || 5)));
  let d = node;
  const terms = [];
  const steps = [];
  let factorial = 1;
  for (let k = 0; k <= n; k++) {
    if (k > 0) {
      d = simplify(math.derivative(d, v));
      factorial *= k;
    }
    const val = numeric(d, { [v]: a });
    if (!Number.isFinite(val)) throw new Error(`f^(${k}) is undefined at ${v} = ${approx(a)}, so there is no Taylor series about that point.`);
    const coef = val / factorial;
    if (k <= 4) steps.push({ text: k === 0 ? "Value at the centre:" : `Derivative ${k} at the centre:`, tex: `${k === 0 ? "f" : `f^{(${k})}`}(${niceValueTex(a)}) = ${niceValueTex(val)}` });
    if (Math.abs(coef) > 1e-12) terms.push({ k, coef });
  }
  const base = Math.abs(a) < TINY ? v : `(${v} ${a < 0 ? "+" : "-"} ${niceValueTex(Math.abs(a))})`;
  const termTex = (t, i) => {
    const r = recognize(Math.abs(t.coef));
    const sign = t.coef < 0 ? "-" : i === 0 ? "" : "+";
    const power = t.k === 0 ? "" : t.k === 1 ? base : `${base}^{${t.k}}`;
    const c = t.k > 0 && r.tex === "1" ? "" : r.tex;
    return `${sign} ${c}${c && power ? "\\," : ""}${power}`;
  };
  const poly = terms.length ? terms.map(termTex).join(" ") : "0";
  const baseText = Math.abs(a) < TINY ? v : `(${v} ${a < 0 ? "+" : "-"} ${recognize(Math.abs(a)).text})`;
  const polyText = terms.length
    ? terms
        .map((t, i) => {
          const r = recognize(Math.abs(t.coef)).text;
          const sign = t.coef < 0 ? "- " : i === 0 ? "" : "+ ";
          const power = t.k === 0 ? "" : t.k === 1 ? baseText : `${baseText}^${t.k}`;
          const c = t.k > 0 && r === "1" ? "" : r;
          return `${sign}${c}${c && power ? "·" : ""}${power}`;
        })
        .join(" ")
    : "0";
  return {
    title: Math.abs(a) < TINY ? "Maclaurin series" : "Taylor series",
    result: { tex: `${tex(node)} \\approx ${poly} + O\\!\\left(${base}^{${n + 1}}\\right)`, text: polyText },
    steps: [{ text: `Taylor's formula: Σ f⁽ᵏ⁾(a)/k! · (${v} − a)ᵏ for k = 0…${n}.` }, ...steps],
  };
}

/* ─────────────────────── equations & optimisation ─────────────────────── */

function stepAlong(x, delta, t) {
  const out = new Array(x.length);
  for (let i = 0; i < x.length; i++) out[i] = x[i] + t * delta[i];
  return out;
}

function negated(values) {
  const out = new Array(values.length);
  for (let i = 0; i < values.length; i++) out[i] = [-values[i]];
  return out;
}

function newtonSystem(F, J, start, iterations = 60) {
  let x = start.slice();
  for (let it = 0; it < iterations; it++) {
    const fx = F(x);
    if (fx.some((v) => !Number.isFinite(v))) return null;
    const norm = Math.hypot(...fx);
    if (norm < 1e-11) return x;
    const jx = J(x);
    let delta;
    try {
      const solved = math.lusolve(jx, negated(fx));
      delta = new Array(solved.length);
      for (let i = 0; i < solved.length; i++) delta[i] = Array.isArray(solved[i]) ? solved[i][0] : solved[i];
    } catch {
      return null;
    }
    if (delta.some((v) => !Number.isFinite(v))) return null;
    // damped step (plain loops: no closures over loop-changing variables)
    let t = 1;
    let next = stepAlong(x, delta, t);
    for (let k = 0; k < 10; k++) {
      const fn2 = F(next);
      if (fn2.every(Number.isFinite) && Math.hypot(...fn2) < norm) break;
      t /= 2;
      next = stepAlong(x, delta, t);
    }
    x = next;
    if (Math.hypot(...delta) * t < 1e-13) break;
  }
  const fx = F(x);
  return fx.every(Number.isFinite) && Math.hypot(...fx) < 1e-8 ? x : null;
}

function startingGrid(dim) {
  const values = dim <= 2 ? [-3, -1.7, -0.6, 0.1, 0.9, 2.1, 3.3] : dim === 3 ? [-2.4, -0.7, 0.3, 1.2, 2.6] : [-1.5, 0.2, 1.4];
  let points = [[]];
  for (let d = 0; d < dim; d++) points = points.flatMap((p) => values.map((v) => [...p, v]));
  return points;
}

function dedupe(points, tol = 1e-5) {
  const out = [];
  for (const p of points) {
    if (!out.some((q) => q.every((v, i) => Math.abs(v - p[i]) < tol * Math.max(1, Math.abs(v))))) out.push(p);
  }
  return out;
}

function clean(v) {
  return Math.abs(v) < 1e-9 ? 0 : v;
}

export function solveEquation({ expr, variable }) {
  const F = parseEquation(expr);
  const v = (variable || variablesOf(F)[0] || "x").trim();
  const others = variablesOf(F).filter((n) => n !== v);
  if (others.length) throw new Error(`Only one unknown is allowed here; also found: ${others.join(", ")}.`);
  const compiled = F.compile();
  const f = (x) => {
    try {
      const y = compiled.evaluate({ [v]: x });
      return typeof y === "number" ? y : NaN;
    } catch {
      return NaN;
    }
  };
  const dF = math.derivative(F, v).compile();
  const df = (x) => {
    try {
      return dF.evaluate({ [v]: x });
    } catch {
      return NaN;
    }
  };
  const roots = [];
  const lo = -100;
  const hi = 100;
  const steps = 20000;
  let prevX = lo;
  let prevY = f(lo);
  for (let i = 1; i <= steps; i++) {
    const x = lo + ((hi - lo) * i) / steps;
    const y = f(x);
    if (Number.isFinite(y) && Math.abs(y) < 1e-12) roots.push(x);
    else if (Number.isFinite(prevY) && Number.isFinite(y) && prevY * y < 0) {
      // bisection
      let a = prevX;
      let b = x;
      let fa = prevY;
      for (let k = 0; k < 80; k++) {
        const m = (a + b) / 2;
        const fm = f(m);
        if (!Number.isFinite(fm)) break;
        if (fa * fm <= 0) b = m;
        else {
          a = m;
          fa = fm;
        }
      }
      const r = (a + b) / 2;
      // reject sign changes caused by poles
      if (Math.abs(f(r)) < 1e-6 * Math.max(1, Math.abs(f(r - 1e-3)) + Math.abs(f(r + 1e-3)))) roots.push(r);
    }
    prevX = x;
    prevY = y;
  }
  // touching roots (double roots): Newton from local minima of |f|
  for (let i = 0; i < 400; i++) {
    let x = lo + ((hi - lo) * i) / 400;
    for (let k = 0; k < 50; k++) {
      const y = f(x);
      const dy = df(x);
      if (!Number.isFinite(y) || !Number.isFinite(dy) || Math.abs(dy) < 1e-14) break;
      x -= y / dy;
    }
    if (Number.isFinite(x) && Math.abs(f(x)) < 1e-10 && x >= lo && x <= hi) roots.push(x);
  }
  let unique = dedupe(roots.map((r) => [clean(r)]), 1e-6).map((p) => p[0]).sort((a, b) => a - b);
  let truncatedNote = null;
  if (unique.length > 12) {
    const total = unique.length;
    unique = unique.filter((r) => Math.abs(r) <= 10);
    truncatedNote = `${total} roots were found in [−100, 100] (the equation looks periodic); showing the ${unique.length} with |${v}| ≤ 10.`;
  }
  if (!unique.length) {
    return {
      title: "Solve equation",
      result: { tex: "\\text{No real solutions found in } [-100, 100]", text: "no real solutions in [-100, 100]" },
      steps: [{ text: "Scanned the interval for sign changes and touching roots; none were found." }],
    };
  }
  return {
    title: "Solve equation",
    result: {
      tex: unique.map((r) => `${v} = ${niceTex(r)}`).join(",\\quad "),
      text: unique.map((r) => `${v} = ${recognize(r).text}`).join(", "),
    },
    steps: [
      { text: "Rewrite as f(" + v + ") = 0:", tex: `${tex(F)} = 0` },
      { text: "Real roots located by sign changes on [−100, 100], refined by bisection and Newton's method." },
      ...(truncatedNote ? [{ text: truncatedNote }] : []),
    ],
    details: unique.map((r) => ({ label: `${v} ≈`, tex: approx(r) })),
  };
}

function hessianNodes(node, vars) {
  return vars.map((a) => vars.map((b) => simplify(math.derivative(math.derivative(node, a), b))));
}

function classify(H) {
  try {
    if (H.length === 2) {
      const D = H[0][0] * H[1][1] - H[0][1] * H[1][0];
      if (D > 1e-9) return H[0][0] > 0 ? "local minimum" : "local maximum";
      if (D < -1e-9) return "saddle point";
      return "inconclusive (D = 0)";
    }
    const ev = math.eigs(H, { eigenvectors: false }).values.map((x) => (typeof x === "number" ? x : x.re));
    if (ev.every((x) => x > 1e-9)) return "local minimum";
    if (ev.every((x) => x < -1e-9)) return "local maximum";
    if (ev.some((x) => x > 1e-9) && ev.some((x) => x < -1e-9)) return "saddle point";
    return "inconclusive";
  } catch {
    return "inconclusive";
  }
}

export function solveCriticalPoints({ expr, variables }) {
  const node = parse(expr);
  const vars = parseVarList(variables, variablesOf(node));
  if (!vars.length || vars.length > 3) throw new Error("Critical points work for functions of 1–3 variables.");
  const g = gradientNodes(node, vars).map((n) => n.compile());
  const Hn = hessianNodes(node, vars);
  const Hc = Hn.map((row) => row.map((n) => n.compile()));
  const scopeOf = (x) => Object.fromEntries(vars.map((v, i) => [v, x[i]]));
  const F = (x) => g.map((c) => Number(c.evaluate(scopeOf(x))));
  const J = (x) => Hc.map((row) => row.map((c) => Number(c.evaluate(scopeOf(x)))));
  const found = [];
  for (const start of startingGrid(vars.length)) {
    const r = newtonSystem(F, J, start);
    if (r) found.push(r.map(clean));
  }
  const points = dedupe(found).sort((p, q) => p[0] - q[0] || (p[1] || 0) - (q[1] || 0));
  const f = node.compile();
  const rows = points.map((p) => {
    const H = J(p);
    const kind = vars.length === 1 ? (H[0][0] > 1e-9 ? "local minimum" : H[0][0] < -1e-9 ? "local maximum" : "inconclusive") : classify(H);
    return { point: p, value: Number(f.evaluate(scopeOf(p))), kind };
  });
  const hTex = `\\begin{bmatrix} ${Hn.map((row) => row.map(tex).join(" & ")).join(" \\\\ ")} \\end{bmatrix}`;
  return {
    title: "Critical points",
    result: {
      tex: rows.length
        ? rows.map((r) => `(${r.point.map(niceValueTex).join(", ")})`).join(",\\ ")
        : "\\text{No critical points found}",
      text: rows.map((r) => `(${r.point.map((x) => recognize(x).text).join(", ")}) ${r.kind}`).join("; "),
    },
    steps: [
      { text: "Set every first partial derivative to zero:", tex: gradientNodes(node, vars).map((n, i) => `f_{${vars[i]}} = ${tex(n)} = 0`).join(",\\quad ") },
      { text: "Second-derivative (Hessian) matrix:", tex: `H = ${hTex}` },
      { text: "Each solution is classified with the second-derivative test." },
    ],
    table: {
      columns: [`(${vars.join(", ")})`, "f", "Type"],
      rows: rows.map((r) => [`(${r.point.map(niceValueTex).join(", ")})`, niceValueTex(r.value), r.kind]),
    },
  };
}

export function solveLagrange({ expr, constraints, goal = "both" }) {
  const f = parse(expr);
  const gList = String(constraints || "")
    .split(/;|\n/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => parseEquation(s));
  if (!gList.length) throw new Error('Add a constraint, e.g. "x^2 + y^2 = 1".');
  const vars = [...new Set([...variablesOf(f), ...gList.flatMap(variablesOf)])].filter((v) => !/^lambda|^mu$/.test(v));
  if (vars.length > 3) throw new Error("Lagrange multipliers here support up to 3 variables.");
  const m = gList.length;
  const lambdas = gList.map((_, i) => (m === 1 ? "λ" : ["λ", "μ"][i] || `λ${i + 1}`));
  // Unknowns: vars + multipliers. Equations: ∇f − Σ λi ∇gi = 0, gi = 0
  const gradF = gradientNodes(f, vars);
  const gradG = gList.map((g) => gradientNodes(g, vars));
  const eqNodes = [
    ...vars.map((_, j) => gList.reduce((acc, _g, i) => sub(acc, mul(S(`L${i}`), gradG[i][j])), gradF[j])),
    ...gList,
  ];
  const unknowns = [...vars, ...gList.map((_, i) => `L${i}`)];
  const compiled = eqNodes.map((n) => n.compile());
  const jac = eqNodes.map((n) => unknowns.map((u) => simplify(math.derivative(n, u)).compile()));
  const scopeOf = (x) => Object.fromEntries(unknowns.map((u, i) => [u, x[i]]));
  const F = (x) => compiled.map((c) => Number(c.evaluate(scopeOf(x))));
  const J = (x) => jac.map((row) => row.map((c) => Number(c.evaluate(scopeOf(x)))));
  const found = [];
  const starts = startingGrid(vars.length);
  for (const s of starts) {
    for (const l of [-1.3, 0.7, 2.2]) {
      const r = newtonSystem(F, J, [...s, ...gList.map(() => l)]);
      if (r) found.push(r.map(clean));
    }
  }
  const sols = dedupe(found.map((r) => r.slice(0, vars.length))).map((p) => {
    const full = found.find((r) => r.slice(0, vars.length).every((v, i) => Math.abs(v - p[i]) < 1e-5));
    return { point: p, multipliers: full.slice(vars.length) };
  });
  const fc = f.compile();
  const rows = sols
    .map((s) => ({ ...s, value: Number(fc.evaluate(Object.fromEntries(vars.map((v, i) => [v, s.point[i]])))) }))
    .sort((a, b) => b.value - a.value);
  if (!rows.length) throw new Error("No solutions of the Lagrange system were found. Check the constraint.");
  const maxV = rows[0].value;
  const minV = rows[rows.length - 1].value;
  const label = (val) =>
    Math.abs(val - maxV) < 1e-9 && Math.abs(val - minV) < 1e-9
      ? "constant"
      : Math.abs(val - maxV) < 1e-9
        ? "maximum"
        : Math.abs(val - minV) < 1e-9
          ? "minimum"
          : "—";
  const best = goal === "max" ? rows.filter((r) => label(r.value) === "maximum") : goal === "min" ? rows.filter((r) => label(r.value) === "minimum") : rows;
  const condTex = vars
    .map((v, j) => `${tex(gradF[j])} = ${gList.map((_g, i) => `${lambdas[i]}\\left(${tex(gradG[i][j])}\\right)`).join(" + ")}`)
    .join(",\\quad ");
  return {
    title: "Lagrange multipliers",
    result: {
      tex:
        goal === "max"
          ? `\\max f = ${niceTex(maxV)}`
          : goal === "min"
            ? `\\min f = ${niceTex(minV)}`
            : `\\max f = ${niceTex(maxV)},\\quad \\min f = ${niceTex(minV)}`,
      text: goal === "max" ? `max ${recognize(maxV).text}` : goal === "min" ? `min ${recognize(minV).text}` : `max ${recognize(maxV).text}, min ${recognize(minV).text}`,
    },
    steps: [
      { text: "Solve ∇f = λ∇g together with the constraint:", tex: condTex },
      { text: "Constraint:", tex: gList.map((g) => `${tex(g)} = 0`).join(",\\quad ") },
      { text: "All solutions of the system were found numerically and f was evaluated at each one. On a closed, bounded constraint the largest value is the maximum and the smallest the minimum." },
    ],
    table: {
      columns: [`(${vars.join(", ")})`, lambdas.join(", "), "f", ""],
      rows: best.map((r) => [
        `(${r.point.map(niceValueTex).join(", ")})`,
        r.multipliers.map(niceValueTex).join(", "),
        niceValueTex(r.value),
        label(r.value),
      ]),
    },
  };
}

export function solveTangent({ expr, variables, point }) {
  const node = parse(expr);
  const vars = parseVarList(variables, variablesOf(node));
  if (vars.length < 1 || vars.length > 2) throw new Error("Tangent line needs f(x); tangent plane needs f(x, y).");
  const p = parsePoint(point, vars.length);
  if (!p) throw new Error("Enter the point of tangency.");
  const scope = Object.fromEntries(vars.map((v, i) => [v, p[i]]));
  const f0 = numeric(node, scope);
  const g = gradientNodes(node, vars).map((n) => numeric(n, scope));
  if (![f0, ...g].every(Number.isFinite)) throw new Error("The function is not differentiable at that point.");
  const shift = (v, a) => (Math.abs(a) < TINY ? v : `(${v} ${a < 0 ? "+" : "-"} ${niceValueTex(Math.abs(a))})`);
  const terms = vars.map((v, i) => `${niceValueTex(g[i])}\\,${shift(v, p[i])}`).join(" + ");
  const lhs = vars.length === 1 ? "y" : "z";
  return {
    title: vars.length === 1 ? "Tangent line" : "Tangent plane",
    result: { tex: `${lhs} = ${niceValueTex(f0)} + ${terms}`.replace(/\+ -/g, "- "), text: `${lhs} = ${approx(f0)} + …` },
    steps: [
      { text: "Value at the point:", tex: `f(${p.map(niceValueTex).join(", ")}) = ${niceValueTex(f0)}` },
      {
        text: vars.length === 1 ? "Slope (derivative at the point):" : "Partial derivatives at the point:",
        tex: vars.map((v, i) => `f_{${v}} = ${niceValueTex(g[i])}`).join(",\\quad "),
      },
      { text: "Linear approximation formula:", tex: vars.length === 1 ? "y = f(a) + f'(a)(x - a)" : "z = f(a,b) + f_x(a,b)(x-a) + f_y(a,b)(y-b)" },
    ],
  };
}

/** Ascending coefficients of a polynomial in v, or null. */
function polyCoeffs(node, v) {
  if (!dependsOn(node, v)) {
    const c = numeric(node);
    return Number.isFinite(c) ? [c] : null;
  }
  try {
    const r = math.rationalize(node, {}, true);
    const vars = r.variables || [];
    if (vars.length !== 1 || vars[0] !== v || !r.coefficients) return null;
    const cs = r.coefficients.map(Number);
    return cs.every(Number.isFinite) ? cs : null;
  } catch {
    return null;
  }
}

function polyTrim(p) {
  const out = p.slice();
  while (out.length > 1 && Math.abs(out[out.length - 1]) < 1e-10) out.pop();
  return out;
}

function polyDivide(num, den) {
  const n = num.slice();
  const d = polyTrim(den);
  const q = new Array(Math.max(1, n.length - d.length + 1)).fill(0);
  while (n.length >= d.length && n.length) {
    const coef = n[n.length - 1] / d[d.length - 1];
    const shift = n.length - d.length;
    q[shift] = coef;
    for (let i = 0; i < d.length; i++) n[i + shift] -= coef * d[i];
    n.pop();
  }
  return { q, r: polyTrim(n.length ? n : [0]) };
}

function polyGcd(a, b) {
  let x = polyTrim(a);
  let y = polyTrim(b);
  for (let k = 0; k < 30 && !(y.length === 1 && Math.abs(y[0]) < 1e-9); k++) {
    const { r } = polyDivide(x, y);
    x = y;
    // normalise to avoid drift
    const lead = r[r.length - 1] || 1;
    y = r.map((c) => (Math.abs(c) < 1e-9 * Math.max(1, Math.abs(lead)) ? 0 : c));
    y = polyTrim(y);
  }
  const lead = x[x.length - 1];
  return x.map((c) => c / lead);
}

function polyToNode(cs, v) {
  const terms = [];
  for (let i = cs.length - 1; i >= 0; i--) {
    const c = Math.abs(cs[i] - Math.round(cs[i])) < 1e-9 ? Math.round(cs[i]) : cs[i];
    if (Math.abs(c) < 1e-12) continue;
    const power = i === 0 ? null : i === 1 ? S(v) : pow(S(v), C(i));
    terms.push(power ? (c === 1 ? power : mul(C(c), power)) : C(c));
  }
  if (!terms.length) return C(0);
  return terms.reduce((acc, t) => add(acc, t));
}

/** Cancel common polynomial factors of a one-variable rational expression. */
function cancelRational(node) {
  const vars = variablesOf(node);
  if (vars.length !== 1) return null;
  const v = vars[0];
  let r;
  try {
    r = math.rationalize(node, {}, true);
  } catch {
    return null;
  }
  if (!r.denominator) return null;
  const P = polyCoeffs(r.numerator, v);
  const Q = polyCoeffs(r.denominator, v);
  if (!P || !Q || Q.length < 2) return null;
  const G = polyGcd(P, Q);
  if (G.length < 2) return null;
  const { q: Pn, r: r1 } = polyDivide(P, G);
  const { q: Qn, r: r2 } = polyDivide(Q, G);
  if (Math.abs(r1[0]) > 1e-8 || Math.abs(r2[0]) > 1e-8) return null;
  const qT = polyTrim(Qn);
  if (qT.length === 1) return simplify(div(polyToNode(Pn, v), C(qT[0])));
  return div(polyToNode(Pn, v), polyToNode(qT, v));
}

export function solveSimplify({ expr, mode = "simplify" }) {
  const node = parse(expr);
  let out = simplify(node);
  const steps = [];
  if (mode !== "expand") {
    const cancelled = cancelRational(node);
    if (cancelled) {
      out = simplify(cancelled);
      steps.push({ text: "Factored numerator and denominator and cancelled their common factor (valid where the cancelled factor ≠ 0)." });
    }
  }
  if (mode === "expand") {
    try {
      out = math.rationalize(node);
      steps.push({ text: "Expanded and collected like terms." });
    } catch {
      throw new Error("Expand works for polynomial and rational expressions.");
    }
  } else {
    if (!steps.length) {
      try {
        const r = math.rationalize(node);
        if (text(r).length < text(out).length) out = r;
      } catch {
        /* not rational: keep simplify() */
      }
      steps.push({ text: "Combined like terms and applied algebraic identities." });
    }
  }
  return { title: mode === "expand" ? "Expand" : "Simplify", result: { tex: `${tex(node)} = ${tex(out)}`, text: text(out) }, steps };
}

export function solveEvaluate({ expr, values }) {
  const node = parse(expr);
  const scope = {};
  String(values || "")
    .split(/[,;]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .forEach((pair) => {
      const [name, val] = pair.split("=").map((s) => s.trim());
      if (!name || val === undefined) throw new Error(`Write values like "x = 2, y = 3" (got "${pair}").`);
      scope[name] = evaluateNumber(val);
    });
  const missing = variablesOf(node).filter((v) => !(v in scope));
  if (missing.length) throw new Error(`Give a value for: ${missing.join(", ")}.`);
  const value = numeric(node, scope);
  if (!Number.isFinite(value)) throw new Error("The expression is undefined at those values.");
  return {
    title: "Evaluate",
    result: { tex: `${tex(node)} = ${niceTex(value)}`, text: recognize(value).text },
    steps: Object.keys(scope).length ? [{ text: "Substitute:", tex: Object.entries(scope).map(([k, v]) => `${k} = ${niceValueTex(v)}`).join(",\\ ") }] : [],
    details: [{ label: "Decimal value", tex: approx(value) }],
  };
}

/* ─────────────────────────── catalogue ─────────────────────────── */

/**
 * Operations grouped by topic. `fields` drive the form on the page; each
 * field: { name, label, placeholder, default, type?: "select", options? }.
 */
export const TOPICS = [
  {
    id: "derivatives",
    label: "Derivatives",
    ops: [
      {
        id: "diff",
        label: "Derivative",
        run: solveDerivative,
        fields: [
          { name: "expr", label: "f(x)", default: "x^3 * sin(x)" },
          { name: "variable", label: "Variable", default: "x", short: true },
          { name: "order", label: "Order", default: "1", short: true },
          { name: "point", label: "Evaluate at (optional)", default: "", short: true },
        ],
        examples: ["x^3*sin(x)", "e^(2x)/x", "ln(x^2+1)", "sqrt(1 - x^2)"],
      },
      {
        id: "chain",
        label: "Chain rule",
        run: solveChainRule,
        fields: [
          { name: "expr", label: "f", default: "sin(x^2 + 1)" },
          { name: "variable", label: "Variable", default: "x", short: true },
          { name: "substitutions", label: "Multivariable: substitutions (optional)", default: "", placeholder: "x = cos(t), y = sin(t)" },
        ],
        examples: ["sin(x^2 + 1)", "(3x^2 - 2)^5", "e^(cos(x))"],
      },
      {
        id: "implicit",
        label: "Implicit",
        run: solveImplicit,
        fields: [{ name: "expr", label: "Curve F(x, y) = …", default: "x^2 + y^2 = 25" }],
        examples: ["x^2 + y^2 = 25", "x^3 + y^3 = 6*x*y", "sin(x*y) = x"],
      },
    ],
  },
  {
    id: "partials",
    label: "Partial Derivatives",
    ops: [
      {
        id: "partial",
        label: "Partial",
        run: solvePartial,
        fields: [
          { name: "expr", label: "f(x, y, …)", default: "x^2*y + sin(x*y)" },
          { name: "variables", label: "With respect to (in order)", default: "x", placeholder: "x  or  x, y for ∂²f/∂y∂x", short: true },
          { name: "point", label: "At point (optional)", default: "", placeholder: "1, 2", short: true },
        ],
        examples: ["x^2*y + sin(x*y)", "e^(x*y)*z", "ln(x^2 + y^2)"],
      },
      {
        id: "directional",
        label: "Directional",
        run: solveDirectional,
        fields: [
          { name: "expr", label: "f(x, y, …)", default: "x^2*y + y^3" },
          { name: "point", label: "Point", default: "1, 2", short: true },
          { name: "direction", label: "Direction", default: "3, 4", short: true },
          { name: "variables", label: "Variables (optional)", default: "", placeholder: "x, y", short: true },
        ],
        examples: ["x^2*y + y^3", "x*y*z", "e^x*cos(y)"],
      },
      {
        id: "tangent",
        label: "Tangent line / plane",
        run: solveTangent,
        fields: [
          { name: "expr", label: "f(x) or f(x, y)", default: "x^2 + y^2" },
          { name: "point", label: "Point", default: "1, 2", short: true },
          { name: "variables", label: "Variables (optional)", default: "", placeholder: "x, y", short: true },
        ],
        examples: ["x^2 + y^2", "sqrt(x)", "x*e^y"],
      },
    ],
  },
  {
    id: "gradients",
    label: "Gradients",
    ops: [
      {
        id: "gradient",
        label: "Gradient",
        run: solveGradient,
        fields: [
          { name: "expr", label: "f(x, y, …)", default: "x^2*y + y*z^3" },
          { name: "point", label: "At point (optional)", default: "1, 2, 1", short: true },
          { name: "variables", label: "Variables (optional)", default: "", placeholder: "x, y, z", short: true },
        ],
        examples: ["x^2*y + y*z^3", "sin(x)*cos(y)", "ln(x^2 + y^2)"],
      },
    ],
  },
  {
    id: "integration",
    label: "Integration",
    ops: [
      {
        id: "integrate",
        label: "Indefinite",
        run: solveIndefiniteIntegral,
        fields: [
          { name: "expr", label: "f(x)", default: "x*e^(2x)" },
          { name: "variable", label: "Variable", default: "x", short: true },
        ],
        examples: ["x*e^(2x)", "1/(x^2 + 4)", "sin(x)^2", "x/(x^2 + 1)", "ln(x)", "e^x*cos(x)", "(2x+3)/(x^2-1)"],
      },
      {
        id: "definite",
        label: "Definite",
        run: solveDefiniteIntegral,
        fields: [
          { name: "expr", label: "f(x)", default: "x^2" },
          { name: "lower", label: "From", default: "0", short: true },
          { name: "upper", label: "To", default: "3", short: true },
          { name: "variable", label: "Variable", default: "x", short: true },
        ],
        examples: ["x^2", "sin(x)", "e^(-x^2)", "x*e^(-x)"],
      },
      {
        id: "multiple",
        label: "Double / triple",
        run: solveMultipleIntegral,
        fields: [
          { name: "expr", label: "f(x, y[, z])", default: "x*y" },
          { name: "order", label: "Order (innermost first)", default: "y, x", placeholder: "y, x  =  dy dx", short: true },
          { name: "bounds", label: "Bounds, innermost first (one per line)", default: "0, x\n0, 1", multiline: true },
        ],
        examples: ["x*y", "x^2 + y^2", "x*y*z"],
      },
    ],
  },
  {
    id: "limits",
    label: "Limits",
    ops: [
      {
        id: "limit",
        label: "Limit",
        run: solveLimit,
        fields: [
          { name: "expr", label: "f(x)", default: "sin(x)/x" },
          { name: "approach", label: "x →", default: "0", placeholder: "0, 2, inf", short: true },
          {
            name: "side",
            label: "Side",
            default: "both",
            type: "select",
            options: [
              { value: "both", label: "Both sides" },
              { value: "left", label: "From the left" },
              { value: "right", label: "From the right" },
            ],
            short: true,
          },
          { name: "variable", label: "Variable", default: "x", short: true },
        ],
        examples: ["sin(x)/x", "(x^2 - 4)/(x - 2)", "(1 + 1/x)^x", "abs(x)/x", "(1 - cos(x))/x^2"],
      },
    ],
  },
  {
    id: "series",
    label: "Taylor Series",
    ops: [
      {
        id: "taylor",
        label: "Taylor / Maclaurin",
        run: solveTaylor,
        fields: [
          { name: "expr", label: "f(x)", default: "e^x" },
          { name: "center", label: "About x =", default: "0", short: true },
          { name: "order", label: "Order", default: "5", short: true },
          { name: "variable", label: "Variable", default: "x", short: true },
        ],
        examples: ["e^x", "sin(x)", "ln(1 + x)", "1/(1 - x)", "cos(x)"],
      },
    ],
  },
  {
    id: "optimization",
    label: "Optimization",
    ops: [
      {
        id: "critical",
        label: "Critical points",
        run: solveCriticalPoints,
        fields: [
          { name: "expr", label: "f(x, y, …)", default: "x^3 - 3x + y^2" },
          { name: "variables", label: "Variables (optional)", default: "", placeholder: "x, y", short: true },
        ],
        examples: ["x^3 - 3x + y^2", "x^2 + x*y + y^2 - 3x", "x^4 + y^4 - 4*x*y"],
      },
      {
        id: "lagrange",
        label: "Lagrange multipliers",
        run: solveLagrange,
        fields: [
          { name: "expr", label: "Optimise f", default: "x*y" },
          { name: "constraints", label: "Subject to (one per line)", default: "x^2 + y^2 = 8", multiline: true },
          {
            name: "goal",
            label: "Find",
            default: "both",
            type: "select",
            options: [
              { value: "both", label: "Max and min" },
              { value: "max", label: "Maximum" },
              { value: "min", label: "Minimum" },
            ],
            short: true,
          },
        ],
        examples: ["x*y", "x + 2y", "x^2 + y^2 + z^2"],
      },
    ],
  },
  {
    id: "algebra",
    label: "Algebra",
    ops: [
      {
        id: "simplify",
        label: "Simplify",
        run: (args) => solveSimplify({ ...args, mode: "simplify" }),
        fields: [{ name: "expr", label: "Expression", default: "(x^2 - 1)/(x - 1)" }],
        examples: ["(x^2 - 1)/(x - 1)", "sin(x)^2 + cos(x)^2", "2x + 3x - x"],
      },
      {
        id: "expand",
        label: "Expand",
        run: (args) => solveSimplify({ ...args, mode: "expand" }),
        fields: [{ name: "expr", label: "Expression", default: "(x + 2)^3" }],
        examples: ["(x + 2)^3", "(x - y)*(x + y)", "(2x - 1)^2"],
      },
      {
        id: "solve",
        label: "Solve equation",
        run: solveEquation,
        fields: [
          { name: "expr", label: "Equation", default: "x^3 - 2x = 1" },
          { name: "variable", label: "Unknown", default: "x", short: true },
        ],
        examples: ["x^3 - 2x = 1", "x^2 = 2", "cos(x) = x", "e^x = 3"],
      },
      {
        id: "evaluate",
        label: "Evaluate",
        run: solveEvaluate,
        fields: [
          { name: "expr", label: "Expression", default: "x^2 + y" },
          { name: "values", label: "Values", default: "x = 3, y = 1", short: true },
        ],
        examples: ["x^2 + y", "sin(pi/6)", "sqrt(2)*sqrt(8)"],
      },
    ],
  },
];

export function findOperation(opId) {
  for (const topic of TOPICS) {
    const found = topic.ops.find((o) => o.id === opId);
    if (found) return { topic, op: found };
  }
  return null;
}

/** Run an operation by id with form values. */
export function runOperation(opId, values) {
  const entry = findOperation(opId);
  if (!entry) throw new Error(`Unknown operation: ${opId}`);
  return entry.op.run(values);
}
