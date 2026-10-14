/** Calculation logic for the Statistics Calculator (every result returns its working). */
import { DISTRIBUTIONS, fmt } from "./distributions";

const tcdf = (x, nu) => DISTRIBUTIONS.t.cdf(x, { nu });

export function parseNumbers(text) {
  const values = [];
  let invalid = 0;
  String(text)
    .split(/[\s,;]+/)
    .filter(Boolean)
    .forEach((p) => {
      const v = Number(p);
      if (Number.isFinite(v)) values.push(v);
      else invalid += 1;
    });
  return { values, invalid };
}

export function parsePairs(text) {
  const xs = [];
  const ys = [];
  let invalid = 0;
  String(text)
    .split(/\n+/)
    .forEach((line) => {
      const t = line.trim();
      if (!t) return;
      const parts = t.split(/[\s,;]+/).filter(Boolean);
      const x = Number(parts[0]);
      const y = Number(parts[1]);
      if (parts.length >= 2 && Number.isFinite(x) && Number.isFinite(y)) {
        xs.push(x);
        ys.push(y);
      } else invalid += 1;
    });
  return { xs, ys, invalid };
}

export const sum = (a) => a.reduce((s, v) => s + v, 0);
export const mean = (a) => sum(a) / a.length;
export function variance(a) {
  const m = mean(a);
  return sum(a.map((v) => (v - m) ** 2)) / (a.length - 1);
}
export function quantile(sorted, p) {
  const h = (sorted.length - 1) * p;
  const lo = Math.floor(h);
  const hi = Math.ceil(h);
  return sorted[lo] + (h - lo) * (sorted[hi] - sorted[lo]);
}

export function tQuantile(p, nu) {
  let lo = -1e4;
  let hi = 1e4;
  for (let i = 0; i < 200; i += 1) {
    const mid = (lo + hi) / 2;
    if (tcdf(mid, nu) < p) lo = mid;
    else hi = mid;
  }
  return (lo + hi) / 2;
}

export function pValue(t, df, tail) {
  if (tail === "greater") return 1 - tcdf(t, df);
  if (tail === "less") return tcdf(t, df);
  return Math.min(1, 2 * (1 - tcdf(Math.abs(t), df)));
}

const tailText = { two: "two-sided", greater: "right-tailed", less: "left-tailed" };

export function describe(data) {
  const n = data.length;
  if (n < 2) return { error: "Enter at least 2 numbers." };
  const sorted = [...data].sort((a, b) => a - b);
  const total = sum(data);
  const m = total / n;
  const ss = sum(data.map((v) => (v - m) ** 2));
  const v = ss / (n - 1);
  const sd = Math.sqrt(v);
  const q1 = quantile(sorted, 0.25);
  const q3 = quantile(sorted, 0.75);
  const median = quantile(sorted, 0.5);
  const result = {
    n, sum: total, mean: m, variance: v, sd, median, q1, q3, iqr: q3 - q1,
    min: sorted[0], max: sorted[n - 1], range: sorted[n - 1] - sorted[0],
  };
  result.working = [
    `n = ${n}, Σx = ${fmt(total)}`,
    `Mean x̄ = Σx / n = ${fmt(total)} / ${n} = ${fmt(m)}`,
    `Σ(x − x̄)² = ${fmt(ss)}`,
    `Sample variance s² = Σ(x − x̄)² / (n − 1) = ${fmt(ss)} / ${n - 1} = ${fmt(v)}`,
    `Standard deviation s = √s² = ${fmt(sd)}`,
    `Sorted data: ${sorted.slice(0, 12).map((x) => fmt(x, 3)).join(", ")}${n > 12 ? ", …" : ""}`,
    `Median = value at position (n + 1)/2 = ${fmt(median)}`,
    `Q1 = ${fmt(q1)}, Q3 = ${fmt(q3)}, IQR = Q3 − Q1 = ${fmt(q3 - q1)} (linear interpolation)`,
    `Min = ${fmt(result.min)}, Max = ${fmt(result.max)}, Range = ${fmt(result.range)}`,
  ];
  return result;
}

export function histogram(data, bins) {
  const n = data.length;
  const k = bins || Math.max(3, Math.ceil(Math.log2(n)) + 1);
  const lo = Math.min(...data);
  const hi = Math.max(...data);
  const w = (hi - lo) / k || 1;
  const out = Array.from({ length: k }, (_, i) => ({ lo: lo + i * w, hi: lo + (i + 1) * w, count: 0 }));
  data.forEach((v) => {
    const i = Math.min(k - 1, Math.floor((v - lo) / w));
    out[i].count += 1;
  });
  return out;
}

export function oneSampleT(data, mu0, tail = "two", alpha = 0.05) {
  const n = data.length;
  if (n < 2) return { error: "Enter at least 2 numbers." };
  const m = mean(data);
  const v = variance(data);
  const s = Math.sqrt(v);
  if (s === 0) return { error: "All values are equal, so the standard deviation is 0." };
  const se = s / Math.sqrt(n);
  const t = (m - mu0) / se;
  const df = n - 1;
  const p = pValue(t, df, tail);
  const tcrit = tQuantile(1 - alpha / 2, df);
  const ci = [m - tcrit * se, m + tcrit * se];
  const reject = p < alpha;
  return {
    n, mean: m, sd: s, se, t, df, p, ci, reject, tcrit,
    working: [
      `H₀: μ = ${fmt(mu0)}, H₁ is ${tailText[tail]}, α = ${alpha}`,
      `x̄ = ${fmt(m)}, s = ${fmt(s)}, n = ${n}`,
      `Standard error = s / √n = ${fmt(s)} / ${fmt(Math.sqrt(n))} = ${fmt(se)}`,
      `t = (x̄ − μ₀) / SE = (${fmt(m)} − ${fmt(mu0)}) / ${fmt(se)} = ${fmt(t)}`,
      `Degrees of freedom = n − 1 = ${df}`,
      `p-value (${tailText[tail]}) = ${fmt(p)}`,
      `${100 * (1 - alpha)}% CI for μ: x̄ ± t* · SE = ${fmt(m)} ± ${fmt(tcrit)} × ${fmt(se)} = (${fmt(ci[0])}, ${fmt(ci[1])})`,
      reject ? `p < α, so reject H₀.` : `p ≥ α, so do not reject H₀.`,
    ],
  };
}

export function twoSampleT(a, b, equalVar = false, tail = "two", alpha = 0.05) {
  const n1 = a.length;
  const n2 = b.length;
  if (n1 < 2 || n2 < 2) return { error: "Each sample needs at least 2 numbers." };
  const m1 = mean(a);
  const m2 = mean(b);
  const v1 = variance(a);
  const v2 = variance(b);
  let se;
  let df;
  const lines = [`H₀: μ₁ = μ₂, H₁ is ${tailText[tail]}, α = ${alpha}`,
    `Sample 1: n = ${n1}, x̄ = ${fmt(m1)}, s² = ${fmt(v1)}`,
    `Sample 2: n = ${n2}, x̄ = ${fmt(m2)}, s² = ${fmt(v2)}`];
  if (equalVar) {
    const sp2 = ((n1 - 1) * v1 + (n2 - 1) * v2) / (n1 + n2 - 2);
    se = Math.sqrt(sp2 * (1 / n1 + 1 / n2));
    df = n1 + n2 - 2;
    lines.push(`Pooled variance sₚ² = ((n₁−1)s₁² + (n₂−1)s₂²) / (n₁+n₂−2) = ${fmt(sp2)}`);
    lines.push(`SE = √(sₚ²(1/n₁ + 1/n₂)) = ${fmt(se)}, df = n₁ + n₂ − 2 = ${df}`);
  } else {
    const a1 = v1 / n1;
    const a2 = v2 / n2;
    se = Math.sqrt(a1 + a2);
    df = (a1 + a2) ** 2 / (a1 ** 2 / (n1 - 1) + a2 ** 2 / (n2 - 1));
    lines.push(`Welch SE = √(s₁²/n₁ + s₂²/n₂) = ${fmt(se)}`);
    lines.push(`Welch df = (s₁²/n₁ + s₂²/n₂)² / [(s₁²/n₁)²/(n₁−1) + (s₂²/n₂)²/(n₂−1)] = ${fmt(df)}`);
  }
  if (se === 0) return { error: "Both samples have zero spread, so the test is undefined." };
  const diff = m1 - m2;
  const t = diff / se;
  const p = pValue(t, df, tail);
  const tcrit = tQuantile(1 - alpha / 2, df);
  const ci = [diff - tcrit * se, diff + tcrit * se];
  const reject = p < alpha;
  lines.push(`t = (x̄₁ − x̄₂) / SE = ${fmt(diff)} / ${fmt(se)} = ${fmt(t)}`);
  lines.push(`p-value (${tailText[tail]}) = ${fmt(p)}`);
  lines.push(`${100 * (1 - alpha)}% CI for μ₁ − μ₂ = (${fmt(ci[0])}, ${fmt(ci[1])})`);
  lines.push(reject ? "p < α, so reject H₀." : "p ≥ α, so do not reject H₀.");
  return { diff, se, df, t, p, ci, reject, working: lines };
}

export function linearRegression(xs, ys) {
  const n = xs.length;
  if (n < 3) return { error: "Enter at least 3 (x, y) pairs." };
  const mx = mean(xs);
  const my = mean(ys);
  const sxx = sum(xs.map((x) => (x - mx) ** 2));
  const syy = sum(ys.map((y) => (y - my) ** 2));
  const sxy = sum(xs.map((x, i) => (x - mx) * (ys[i] - my)));
  if (sxx === 0) return { error: "All x values are equal, so no line can be fitted." };
  if (syy === 0) return { error: "All y values are equal, so r is undefined." };
  const b1 = sxy / sxx;
  const b0 = my - b1 * mx;
  const r = sxy / Math.sqrt(sxx * syy);
  const sse = sum(xs.map((x, i) => (ys[i] - (b0 + b1 * x)) ** 2));
  const df = n - 2;
  const s2 = sse / df;
  const seB1 = Math.sqrt(s2 / sxx);
  const t = seB1 === 0 ? Infinity : b1 / seB1;
  const p = seB1 === 0 ? 0 : pValue(t, df, "two");
  return {
    n, b0, b1, r, r2: r * r, sse, seB1, t, df, p, mx, my,
    predict: (x) => b0 + b1 * x,
    working: [
      `x̄ = ${fmt(mx)}, ȳ = ${fmt(my)}, n = ${n}`,
      `Sxx = Σ(x − x̄)² = ${fmt(sxx)}, Syy = Σ(y − ȳ)² = ${fmt(syy)}, Sxy = Σ(x − x̄)(y − ȳ) = ${fmt(sxy)}`,
      `Slope b₁ = Sxy / Sxx = ${fmt(sxy)} / ${fmt(sxx)} = ${fmt(b1)}`,
      `Intercept b₀ = ȳ − b₁x̄ = ${fmt(my)} − ${fmt(b1)} × ${fmt(mx)} = ${fmt(b0)}`,
      `Fitted line: ŷ = ${fmt(b0)} + ${fmt(b1)}x`,
      `Correlation r = Sxy / √(Sxx · Syy) = ${fmt(r)}, R² = ${fmt(r * r)}`,
      `SSE = Σ(y − ŷ)² = ${fmt(sse)}, s² = SSE / (n − 2) = ${fmt(s2)}`,
      `SE(b₁) = √(s² / Sxx) = ${fmt(seB1)}, t = b₁ / SE(b₁) = ${fmt(t)}, df = ${df}, p = ${fmt(p)}`,
    ],
  };
}
