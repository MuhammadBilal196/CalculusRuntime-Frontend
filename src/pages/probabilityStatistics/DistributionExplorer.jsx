import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { DISTRIBUTIONS, defaultParams, probBetween, fmt } from "../../utils/distributions";
import "./DistributionExplorer.css";

const W = 640;
const H = 240;
const PAD = { l: 46, r: 12, t: 12, b: 30 };

function defaultRange(key, params) {
  const d = DISTRIBUTIONS[key];
  const [x0, x1] = d.domain(params);
  const a = x0 + 0.35 * (x1 - x0);
  const b = x0 + 0.65 * (x1 - x0);
  return d.kind === "discrete" ? [Math.round(a), Math.round(b)] : [a, b];
}

function Plot({ distKey, params, a, b, mode }) {
  const d = DISTRIBUTIONS[distKey];
  const [x0, x1] = d.domain(params);
  const span = x1 - x0 || 1;
  const sx = (x) => PAD.l + ((x - x0) / span) * (W - PAD.l - PAD.r);
  const f = mode === "pdf" ? (x) => d.pdf(x, params) : (x) => d.cdf(x, params);
  const discrete = d.kind === "discrete";

  const xs = [];
  if (discrete) for (let k = Math.ceil(x0); k <= x1; k += 1) xs.push(k);
  else for (let i = 0; i <= 200; i += 1) xs.push(x0 + (i / 200) * span + (x0 === 0 && i === 0 ? 1e-6 : 0));
  const ys = xs.map(f);
  const finite = ys.filter((v) => Number.isFinite(v));
  const ymax = mode === "cdf" ? 1 : (Math.max(...finite, 0) * 1.1 || 1);
  const sy = (y) => PAD.t + (1 - Math.min(y, ymax) / ymax) * (H - PAD.t - PAD.b);
  const base = sy(0);

  let body;
  if (discrete) {
    const bw = Math.max(2, ((W - PAD.l - PAD.r) / xs.length) * 0.7);
    body = xs.map((k, i) => (
      <rect
        key={k}
        className={k >= a && k <= b ? "de-bar-on" : "de-bar"}
        x={sx(k) - bw / 2}
        y={sy(ys[i])}
        width={bw}
        height={Math.max(0, base - sy(ys[i]))}
      />
    ));
  } else {
    const line = xs.map((x, i) => `${i === 0 ? "M" : "L"}${sx(x).toFixed(1)},${sy(ys[i]).toFixed(1)}`).join(" ");
    const inR = xs.map((x, i) => [x, ys[i]]).filter(([x]) => x >= a && x <= b);
    const shade =
      mode === "pdf" && inR.length > 1
        ? `M${sx(inR[0][0]).toFixed(1)},${base} ` +
          inR.map(([x, y]) => `L${sx(x).toFixed(1)},${sy(y).toFixed(1)}`).join(" ") +
          ` L${sx(inR[inR.length - 1][0]).toFixed(1)},${base} Z`
        : null;
    body = (
      <>
        {shade && <path className="de-shade" d={shade} />}
        <path className="de-curve" d={line} />
      </>
    );
  }

  const ticks = [0, 1, 2, 3, 4].map((i) => x0 + (i / 4) * span);
  return (
    <svg className="de-svg" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={mode === "pdf" ? "Density plot" : "Cumulative plot"}>
      <line className="de-axis" x1={PAD.l} y1={base} x2={W - PAD.r} y2={base} />
      <line className="de-axis" x1={PAD.l} y1={PAD.t} x2={PAD.l} y2={base} />
      {body}
      {ticks.map((t) => (
        <text key={t} className="de-tick" x={sx(t)} y={H - 10} textAnchor="middle">
          {fmt(t, 2)}
        </text>
      ))}
      <text className="de-tick" x={PAD.l - 6} y={PAD.t + 8} textAnchor="end">{fmt(ymax, 3)}</text>
      <text className="de-tick" x={PAD.l - 6} y={base} textAnchor="end">0</text>
    </svg>
  );
}

export default function DistributionExplorer() {
  const [distKey, setDistKey] = useState("normal");
  const [params, setParams] = useState(defaultParams("normal"));
  const [range, setRange] = useState(() => defaultRange("normal", defaultParams("normal")));

  const d = DISTRIBUTIONS[distKey];
  const [x0, x1] = d.domain(params);
  const discrete = d.kind === "discrete";
  const step = discrete ? 1 : (x1 - x0) / 200;
  const a = Math.min(Math.max(Math.min(range[0], range[1]), x0), x1);
  const b = Math.min(Math.max(Math.max(range[0], range[1]), x0), x1);

  const prob = useMemo(() => probBetween(distKey, params, a, b), [distKey, params, a, b]);
  const mean = d.mean(params);
  const variance = d.variance(params);

  const changeDist = (key) => {
    const p = defaultParams(key);
    setDistKey(key);
    setParams(p);
    setRange(defaultRange(key, p));
  };

  return (
    <div className="de-page">
      <header className="de-hdr">
        <p className="de-eye">Probability &amp; Statistics · Interactive tool</p>
        <h1>Distribution Explorer</h1>
        <p className="de-sub">Change the parameters, then shade P(a &lt; X &lt; b) and read the mean and variance.</p>
        <Link className="de-back" to="/courses/probability-statistics">← Back to Probability &amp; Statistics</Link>
      </header>

      <div className="de-grid">
        <section className="de-card">
          <h2>Controls</h2>
          <select className="de-select" value={distKey} onChange={(e) => changeDist(e.target.value)} aria-label="Distribution">
            {Object.entries(DISTRIBUTIONS).map(([k, v]) => (
              <option key={k} value={k}>{v.label}</option>
            ))}
          </select>
          {d.params.map((q) => (
            <label className="de-field" key={q.key}>
              <span><b>{q.label}</b><em>{fmt(params[q.key], 2)}</em></span>
              <input
                type="range"
                min={q.min}
                max={q.max}
                step={q.step}
                value={params[q.key]}
                onChange={(e) => setParams({ ...params, [q.key]: Number(e.target.value) })}
              />
            </label>
          ))}
          <label className="de-field">
            <span><b>a</b><em>{fmt(a, 2)}</em></span>
            <input type="range" min={x0} max={x1} step={step} value={a} onChange={(e) => setRange([Number(e.target.value), b])} />
          </label>
          <label className="de-field">
            <span><b>b</b><em>{fmt(b, 2)}</em></span>
            <input type="range" min={x0} max={x1} step={step} value={b} onChange={(e) => setRange([a, Number(e.target.value)])} />
          </label>
        </section>

        <div>
          <div className="de-stats">
            <div className="de-stat">
              <small>{discrete ? "P(a ≤ X ≤ b)" : "P(a < X < b)"}</small>
              <strong>{fmt(prob, 4)}</strong>
            </div>
            <div className="de-stat"><small>Mean</small><strong>{fmt(mean, 4)}</strong></div>
            <div className="de-stat"><small>Variance</small><strong>{fmt(variance, 4)}</strong></div>
          </div>
          <section className="de-card" style={{ marginBottom: 16 }}>
            <p className="de-plot-title">{discrete ? "Probability mass function" : "Density curve"} (shaded: between a and b)</p>
            <Plot distKey={distKey} params={params} a={a} b={b} mode="pdf" />
          </section>
          <section className="de-card">
            <p className="de-plot-title">Cumulative distribution function</p>
            <Plot distKey={distKey} params={params} a={a} b={b} mode="cdf" />
            <p className="de-note">
              {discrete ? "Discrete laws include both endpoints a and b." : "For continuous laws P(a < X < b) = F(b) − F(a)."}
              {distKey === "t" && params.nu <= 2 ? " The t distribution has an undefined or infinite variance for ν ≤ 2." : ""}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
