/** Distribution maths for the Distribution Explorer (no external libraries). */

const LANCZOS = [
  0.99999999999980993, 676.5203681218851, -1259.1392167224028,
  771.32342877765313, -176.61502916214059, 12.507343278686905,
  -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7,
];

export function lgamma(x) {
  if (x < 0.5) return Math.log(Math.PI / Math.abs(Math.sin(Math.PI * x))) - lgamma(1 - x);
  const z = x - 1;
  let a = LANCZOS[0];
  const t = z + 7.5;
  for (let i = 1; i < 9; i += 1) a += LANCZOS[i] / (z + i);
  return 0.5 * Math.log(2 * Math.PI) + (z + 0.5) * Math.log(t) - t + Math.log(a);
}

/** Regularized lower incomplete gamma P(a, x). */
export function gammaP(a, x) {
  if (x <= 0) return 0;
  const pre = Math.exp(-x + a * Math.log(x) - lgamma(a));
  if (x < a + 1) {
    let sum = 1 / a;
    let del = sum;
    let ap = a;
    for (let n = 0; n < 500; n += 1) {
      ap += 1;
      del *= x / ap;
      sum += del;
      if (Math.abs(del) < Math.abs(sum) * 1e-14) break;
    }
    return sum * pre;
  }
  let b = x + 1 - a;
  let c = 1 / 1e-300;
  let d = 1 / b;
  let h = d;
  for (let i = 1; i < 500; i += 1) {
    const an = -i * (i - a);
    b += 2;
    d = an * d + b;
    if (Math.abs(d) < 1e-300) d = 1e-300;
    c = b + an / c;
    if (Math.abs(c) < 1e-300) c = 1e-300;
    d = 1 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1) < 1e-14) break;
  }
  return 1 - pre * h;
}

function betacf(a, b, x) {
  const FPMIN = 1e-300;
  const qab = a + b;
  const qap = a + 1;
  const qam = a - 1;
  let c = 1;
  let d = 1 - (qab * x) / qap;
  if (Math.abs(d) < FPMIN) d = FPMIN;
  d = 1 / d;
  let h = d;
  for (let m = 1; m <= 300; m += 1) {
    const m2 = 2 * m;
    let aa = (m * (b - m) * x) / ((qam + m2) * (a + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    h *= d * c;
    aa = (-(a + m) * (qab + m) * x) / ((a + m2) * (qap + m2));
    d = 1 + aa * d;
    if (Math.abs(d) < FPMIN) d = FPMIN;
    c = 1 + aa / c;
    if (Math.abs(c) < FPMIN) c = FPMIN;
    d = 1 / d;
    const del = d * c;
    h *= del;
    if (Math.abs(del - 1) < 1e-14) break;
  }
  return h;
}

/** Regularized incomplete beta I_x(a, b). */
export function betaI(x, a, b) {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  const bt = Math.exp(lgamma(a + b) - lgamma(a) - lgamma(b) + a * Math.log(x) + b * Math.log(1 - x));
  if (x < (a + 1) / (a + b + 2)) return (bt * betacf(a, b, x)) / a;
  return 1 - (bt * betacf(b, a, 1 - x)) / b;
}

export function erf(y) {
  return (y < 0 ? -1 : 1) * gammaP(0.5, y * y);
}

const lchoose = (n, k) => lgamma(n + 1) - lgamma(k + 1) - lgamma(n - k + 1);

export const DISTRIBUTIONS = {
  normal: {
    label: "Normal",
    kind: "continuous",
    params: [
      { key: "mu", label: "μ (mean)", min: -5, max: 5, step: 0.1, value: 0 },
      { key: "sigma", label: "σ (std dev)", min: 0.2, max: 4, step: 0.1, value: 1 },
    ],
    pdf: (x, p) => Math.exp(-0.5 * ((x - p.mu) / p.sigma) ** 2) / (p.sigma * Math.sqrt(2 * Math.PI)),
    cdf: (x, p) => 0.5 * (1 + erf((x - p.mu) / (p.sigma * Math.SQRT2))),
    mean: (p) => p.mu,
    variance: (p) => p.sigma ** 2,
    domain: (p) => [p.mu - 4 * p.sigma, p.mu + 4 * p.sigma],
  },
  binomial: {
    label: "Binomial",
    kind: "discrete",
    params: [
      { key: "n", label: "n (trials)", min: 1, max: 50, step: 1, value: 20 },
      { key: "p", label: "p (success prob.)", min: 0.01, max: 0.99, step: 0.01, value: 0.4 },
    ],
    pdf: (k, p) => (k < 0 || k > p.n || k !== Math.floor(k) ? 0 : Math.exp(lchoose(p.n, k) + k * Math.log(p.p) + (p.n - k) * Math.log(1 - p.p))),
    cdf(x, p) {
      let s = 0;
      for (let k = 0; k <= Math.min(Math.floor(x), p.n); k += 1) s += this.pdf(k, p);
      return Math.min(1, s);
    },
    mean: (p) => p.n * p.p,
    variance: (p) => p.n * p.p * (1 - p.p),
    domain: (p) => [0, p.n],
  },
  poisson: {
    label: "Poisson",
    kind: "discrete",
    params: [{ key: "lambda", label: "λ (rate)", min: 0.2, max: 20, step: 0.1, value: 4 }],
    pdf: (k, p) => (k < 0 || k !== Math.floor(k) ? 0 : Math.exp(-p.lambda + k * Math.log(p.lambda) - lgamma(k + 1))),
    cdf(x, p) {
      let s = 0;
      for (let k = 0; k <= Math.floor(x); k += 1) s += this.pdf(k, p);
      return Math.min(1, s);
    },
    mean: (p) => p.lambda,
    variance: (p) => p.lambda,
    domain: (p) => [0, Math.ceil(p.lambda + 5 * Math.sqrt(p.lambda) + 5)],
  },
  exponential: {
    label: "Exponential",
    kind: "continuous",
    params: [{ key: "lambda", label: "λ (rate)", min: 0.1, max: 5, step: 0.1, value: 1 }],
    pdf: (x, p) => (x < 0 ? 0 : p.lambda * Math.exp(-p.lambda * x)),
    cdf: (x, p) => (x < 0 ? 0 : 1 - Math.exp(-p.lambda * x)),
    mean: (p) => 1 / p.lambda,
    variance: (p) => 1 / p.lambda ** 2,
    domain: (p) => [0, 5 / p.lambda],
  },
  t: {
    label: "Student t",
    kind: "continuous",
    params: [{ key: "nu", label: "ν (degrees of freedom)", min: 1, max: 30, step: 1, value: 5 }],
    pdf: (x, p) =>
      Math.exp(lgamma((p.nu + 1) / 2) - lgamma(p.nu / 2)) / Math.sqrt(p.nu * Math.PI) * (1 + (x * x) / p.nu) ** (-(p.nu + 1) / 2),
    cdf: (x, p) => {
      const ib = betaI(p.nu / (p.nu + x * x), p.nu / 2, 0.5);
      return x > 0 ? 1 - 0.5 * ib : 0.5 * ib;
    },
    mean: (p) => (p.nu > 1 ? 0 : NaN),
    variance: (p) => (p.nu > 2 ? p.nu / (p.nu - 2) : p.nu > 1 ? Infinity : NaN),
    domain: () => [-5, 5],
  },
  chisq: {
    label: "Chi-square",
    kind: "continuous",
    params: [{ key: "k", label: "k (degrees of freedom)", min: 1, max: 30, step: 1, value: 4 }],
    pdf: (x, p) =>
      x <= 0 ? (p.k === 2 ? 0.5 : 0) : Math.exp((p.k / 2 - 1) * Math.log(x) - x / 2 - (p.k / 2) * Math.LN2 - lgamma(p.k / 2)),
    cdf: (x, p) => (x <= 0 ? 0 : gammaP(p.k / 2, x / 2)),
    mean: (p) => p.k,
    variance: (p) => 2 * p.k,
    domain: (p) => [0, Math.ceil(p.k + 5 * Math.sqrt(2 * p.k) + 5)],
  },
};

export function defaultParams(key) {
  const out = {};
  DISTRIBUTIONS[key].params.forEach((q) => {
    out[q.key] = q.value;
  });
  return out;
}

/** P(a < X < b) for continuous laws; P(a <= X <= b) for discrete laws. */
export function probBetween(key, params, a, b) {
  const d = DISTRIBUTIONS[key];
  const lo = Math.min(a, b);
  const hi = Math.max(a, b);
  if (d.kind === "discrete") return Math.max(0, d.cdf(hi, params) - d.cdf(Math.ceil(lo) - 1, params));
  return Math.max(0, d.cdf(hi, params) - d.cdf(lo, params));
}

export function fmt(v, digits = 4) {
  if (Number.isNaN(v)) return "undefined";
  if (!Number.isFinite(v)) return "∞";
  return String(Number(v.toFixed(digits)));
}
