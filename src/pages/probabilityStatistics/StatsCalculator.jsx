import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { fmt } from "../../utils/distributions";
import {
  parseNumbers, parsePairs, describe, histogram, oneSampleT, twoSampleT, linearRegression,
} from "../../utils/statsCalc";
import "./StatsCalculatorStyles.css";

const W = 640;
const H = 230;
const P = { l: 44, r: 12, t: 12, b: 30 };

function Working({ lines }) {
  return (
    <details className="sc-work" open>
      <summary>Working</summary>
      <ol>{lines.map((l, i) => <li key={i}>{l}</li>)}</ol>
    </details>
  );
}

function Stat({ label, value }) {
  return <div className="sc-stat"><small>{label}</small><strong>{value}</strong></div>;
}

function Histogram({ data }) {
  const bins = histogram(data);
  const maxC = Math.max(...bins.map((b) => b.count), 1);
  const bw = (W - P.l - P.r) / bins.length;
  const base = H - P.b;
  return (
    <svg className="sc-svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Histogram">
      <line className="sc-axis" x1={P.l} y1={base} x2={W - P.r} y2={base} />
      <line className="sc-axis" x1={P.l} y1={P.t} x2={P.l} y2={base} />
      {bins.map((b, i) => {
        const h = (b.count / maxC) * (base - P.t - 6);
        return (
          <g key={i}>
            <rect className="sc-bar" x={P.l + i * bw + 1} y={base - h} width={Math.max(1, bw - 2)} height={h} />
            <text className="sc-tick" x={P.l + i * bw + bw / 2} y={base - h - 4} textAnchor="middle">{b.count}</text>
            <text className="sc-tick" x={P.l + i * bw} y={H - 10} textAnchor="middle">{fmt(b.lo, 2)}</text>
          </g>
        );
      })}
      <text className="sc-tick" x={W - P.r} y={H - 10} textAnchor="end">{fmt(bins[bins.length - 1].hi, 2)}</text>
    </svg>
  );
}

function Scatter({ xs, ys, fit }) {
  const x0 = Math.min(...xs);
  const x1 = Math.max(...xs);
  const y0 = Math.min(...ys, fit.predict(x0), fit.predict(x1));
  const y1 = Math.max(...ys, fit.predict(x0), fit.predict(x1));
  const sx = (x) => P.l + ((x - x0) / (x1 - x0 || 1)) * (W - P.l - P.r);
  const sy = (y) => P.t + (1 - (y - y0) / (y1 - y0 || 1)) * (H - P.t - P.b);
  return (
    <svg className="sc-svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Scatter plot with fitted line">
      <line className="sc-axis" x1={P.l} y1={H - P.b} x2={W - P.r} y2={H - P.b} />
      <line className="sc-axis" x1={P.l} y1={P.t} x2={P.l} y2={H - P.b} />
      <line className="sc-line" x1={sx(x0)} y1={sy(fit.predict(x0))} x2={sx(x1)} y2={sy(fit.predict(x1))} />
      {xs.map((x, i) => <circle key={i} className="sc-dot" cx={sx(x)} cy={sy(ys[i])} r="4" />)}
      <text className="sc-tick" x={P.l} y={H - 10} textAnchor="middle">{fmt(x0, 2)}</text>
      <text className="sc-tick" x={W - P.r} y={H - 10} textAnchor="end">{fmt(x1, 2)}</text>
      <text className="sc-tick" x={P.l - 6} y={H - P.b} textAnchor="end">{fmt(y0, 2)}</text>
      <text className="sc-tick" x={P.l - 6} y={P.t + 8} textAnchor="end">{fmt(y1, 2)}</text>
    </svg>
  );
}

function Warn({ n }) {
  return n ? <p className="sc-warn">{n} value(s) could not be read and were ignored.</p> : null;
}

const TABS = [["desc", "Descriptive"], ["t1", "One-sample t-test"], ["t2", "Two-sample t-test"], ["reg", "Regression"]];

export default function StatsCalculator() {
  const [tab, setTab] = useState("desc");
  const [text, setText] = useState("12 15 11 18 14 16 13 17 15 19");
  const [mu0, setMu0] = useState("14");
  const [tail, setTail] = useState("two");
  const [alpha, setAlpha] = useState("0.05");
  const [textB, setTextB] = useState("10 12 9 14 11 13 10 12");
  const [equalVar, setEqualVar] = useState(false);
  const [pairs, setPairs] = useState("1 2\n2 4\n3 5\n4 4\n5 5\n6 7");
  const [predictX, setPredictX] = useState("7");

  const A = useMemo(() => parseNumbers(text), [text]);
  const B = useMemo(() => parseNumbers(textB), [textB]);
  const PR = useMemo(() => parsePairs(pairs), [pairs]);
  const a = Number(alpha);

  const dRes = useMemo(() => (tab === "desc" ? describe(A.values) : null), [tab, A]);
  const t1 = useMemo(() => (tab === "t1" ? (Number.isFinite(Number(mu0)) && mu0 !== "" ? oneSampleT(A.values, Number(mu0), tail, a) : { error: "Enter a number for μ₀." }) : null), [tab, A, mu0, tail, a]);
  const t2 = useMemo(() => (tab === "t2" ? twoSampleT(A.values, B.values, equalVar, tail, a) : null), [tab, A, B, equalVar, tail, a]);
  const reg = useMemo(() => (tab === "reg" ? linearRegression(PR.xs, PR.ys) : null), [tab, PR]);

  const tailSelect = (
    <div>
      <label className="sc-label" htmlFor="sc-tail">Alternative</label>
      <select id="sc-tail" className="sc-select" value={tail} onChange={(e) => setTail(e.target.value)}>
        <option value="two">Two-sided (≠)</option>
        <option value="greater">Right-tailed (&gt;)</option>
        <option value="less">Left-tailed (&lt;)</option>
      </select>
    </div>
  );
  const alphaSelect = (
    <div>
      <label className="sc-label" htmlFor="sc-alpha">Significance level α</label>
      <select id="sc-alpha" className="sc-select" value={alpha} onChange={(e) => setAlpha(e.target.value)}>
        <option value="0.1">0.10</option>
        <option value="0.05">0.05</option>
        <option value="0.01">0.01</option>
      </select>
    </div>
  );

  return (
    <div className="sc-page">
      <header className="sc-hdr">
        <p className="sc-eye">Probability &amp; Statistics · Interactive tool</p>
        <h1>Statistics Calculator</h1>
        <p className="sc-sub">Paste your data and get descriptive statistics, t-tests and a regression line, each with its working.</p>
        <Link className="sc-back" to="/courses/probability-statistics">← Back to Probability &amp; Statistics</Link>
      </header>

      <div className="sc-tabs" role="tablist">
        {TABS.map(([k, label]) => (
          <button key={k} type="button" role="tab" aria-selected={tab === k} className={`sc-tab${tab === k ? " on" : ""}`} onClick={() => setTab(k)}>{label}</button>
        ))}
      </div>

      {tab !== "reg" && (
        <section className="sc-card">
          <h2>{tab === "t2" ? "Sample 1" : "Data"}</h2>
          <label className="sc-label" htmlFor="sc-data">Numbers separated by spaces, commas or new lines</label>
          <textarea id="sc-data" className="sc-area" value={text} onChange={(e) => setText(e.target.value)} />
          <Warn n={A.invalid} />
          {tab === "t2" && (
            <>
              <label className="sc-label" htmlFor="sc-data2">Sample 2</label>
              <textarea id="sc-data2" className="sc-area" value={textB} onChange={(e) => setTextB(e.target.value)} />
              <Warn n={B.invalid} />
            </>
          )}
          {tab === "t1" && (
            <div className="sc-row">
              <div>
                <label className="sc-label" htmlFor="sc-mu0">Hypothesised mean μ₀</label>
                <input id="sc-mu0" className="sc-input" value={mu0} onChange={(e) => setMu0(e.target.value)} />
              </div>
              {tailSelect}
              {alphaSelect}
            </div>
          )}
          {tab === "t2" && (
            <>
              <div className="sc-row">{tailSelect}{alphaSelect}</div>
              <label className="sc-check">
                <input type="checkbox" checked={equalVar} onChange={(e) => setEqualVar(e.target.checked)} />
                Assume equal variances (pooled t-test). Unticked uses Welch's test.
              </label>
            </>
          )}
        </section>
      )}

      {tab === "reg" && (
        <section className="sc-card">
          <h2>Data pairs</h2>
          <label className="sc-label" htmlFor="sc-pairs">One pair per line: x y</label>
          <textarea id="sc-pairs" className="sc-area" value={pairs} onChange={(e) => setPairs(e.target.value)} />
          <Warn n={PR.invalid} />
          <label className="sc-label" htmlFor="sc-px">Predict ŷ at x =</label>
          <input id="sc-px" className="sc-input" value={predictX} onChange={(e) => setPredictX(e.target.value)} />
        </section>
      )}

      <section className="sc-card">
        <h2>Result</h2>
        {tab === "desc" && dRes && (dRes.error ? <p className="sc-error">{dRes.error}</p> : (
          <>
            <div className="sc-grid">
              <Stat label="n" value={dRes.n} />
              <Stat label="Mean" value={fmt(dRes.mean)} />
              <Stat label="Median" value={fmt(dRes.median)} />
              <Stat label="Std dev (s)" value={fmt(dRes.sd)} />
              <Stat label="Variance (s²)" value={fmt(dRes.variance)} />
              <Stat label="Min" value={fmt(dRes.min)} />
              <Stat label="Max" value={fmt(dRes.max)} />
              <Stat label="IQR" value={fmt(dRes.iqr)} />
            </div>
            <Histogram data={A.values} />
            <Working lines={dRes.working} />
          </>
        ))}
        {tab === "t1" && t1 && (t1.error ? <p className="sc-error">{t1.error}</p> : (
          <>
            <div className="sc-grid">
              <Stat label="t" value={fmt(t1.t)} />
              <Stat label="df" value={t1.df} />
              <Stat label="p-value" value={fmt(t1.p)} />
              <Stat label={`${100 * (1 - a)}% CI`} value={`(${fmt(t1.ci[0], 3)}, ${fmt(t1.ci[1], 3)})`} />
            </div>
            <p className="sc-verdict">{t1.reject ? `Reject H₀ at α = ${alpha}.` : `Do not reject H₀ at α = ${alpha}.`}</p>
            <Working lines={t1.working} />
          </>
        ))}
        {tab === "t2" && t2 && (t2.error ? <p className="sc-error">{t2.error}</p> : (
          <>
            <div className="sc-grid">
              <Stat label="Mean difference" value={fmt(t2.diff)} />
              <Stat label="t" value={fmt(t2.t)} />
              <Stat label="df" value={fmt(t2.df, 2)} />
              <Stat label="p-value" value={fmt(t2.p)} />
            </div>
            <p className="sc-verdict">{t2.reject ? `Reject H₀ at α = ${alpha}.` : `Do not reject H₀ at α = ${alpha}.`}</p>
            <Working lines={t2.working} />
          </>
        ))}
        {tab === "reg" && reg && (reg.error ? <p className="sc-error">{reg.error}</p> : (
          <>
            <div className="sc-grid">
              <Stat label="Slope b₁" value={fmt(reg.b1)} />
              <Stat label="Intercept b₀" value={fmt(reg.b0)} />
              <Stat label="r" value={fmt(reg.r)} />
              <Stat label="R²" value={fmt(reg.r2)} />
            </div>
            {predictX !== "" && Number.isFinite(Number(predictX)) && (
              <p className="sc-verdict">ŷ at x = {predictX}: {fmt(reg.predict(Number(predictX)))}</p>
            )}
            <Scatter xs={PR.xs} ys={PR.ys} fit={reg} />
            <Working lines={reg.working} />
          </>
        ))}
      </section>
    </div>
  );
}
