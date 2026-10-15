import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Visualizers.css";

const PRESET_FUNCTIONS = [
  {
    id: "sin_plus_one",
    label: "f(x) = sin(x) + 1",
    latex: "\\sin(x) + 1",
    fn: (x) => Math.sin(x) + 1,
    antideriv: (x) => -Math.cos(x) + x,
    defaultA: 0,
    defaultB: Math.PI,
    displayB: "π",
  },
  {
    id: "x_squared",
    label: "f(x) = x²",
    latex: "x^2",
    fn: (x) => x * x,
    antideriv: (x) => (x * x * x) / 3,
    defaultA: 0,
    defaultB: 3,
    displayB: "3",
  },
  {
    id: "exp_neg",
    label: "f(x) = e⁻ˣ",
    latex: "e^{-x}",
    fn: (x) => Math.exp(-x),
    antideriv: (x) => -Math.exp(-x),
    defaultA: 0,
    defaultB: 2,
    displayB: "2",
  },
  {
    id: "sqrt_x",
    label: "f(x) = √x",
    latex: "\\sqrt{x}",
    fn: (x) => (x >= 0 ? Math.sqrt(x) : 0),
    antideriv: (x) => (2 / 3) * Math.pow(Math.max(0, x), 1.5),
    defaultA: 0,
    defaultB: 4,
    displayB: "4",
  },
  {
    id: "arctan_deriv",
    label: "f(x) = 1 / (1 + x²)",
    latex: "\\frac{1}{1 + x^2}",
    fn: (x) => 1 / (1 + x * x),
    antideriv: (x) => Math.atan(x),
    defaultA: 0,
    defaultB: 1,
    displayB: "1",
  },
  {
    id: "parabola_down",
    label: "f(x) = 4 − x²",
    latex: "4 - x^2",
    fn: (x) => 4 - x * x,
    antideriv: (x) => 4 * x - (x * x * x) / 3,
    defaultA: 0,
    defaultB: 2,
    displayB: "2",
  },
];

const RULES = [
  { id: "left", label: "Left Riemann Sum", order: "O(1/n)" },
  { id: "right", label: "Right Riemann Sum", order: "O(1/n)" },
  { id: "midpoint", label: "Midpoint Rule", order: "O(1/n²)" },
  { id: "trapezoid", label: "Trapezoidal Rule", order: "O(1/n²)" },
  { id: "simpson", label: "Simpson's 1/3 Rule", order: "O(1/n⁴)" },
];

export default function RiemannVisualizer() {
  const [selectedFuncId, setSelectedFuncId] = useState(PRESET_FUNCTIONS[0].id);
  const [rule, setRule] = useState("midpoint");
  const [partitions, setPartitions] = useState(12);
  const [hoveredStrip, setHoveredStrip] = useState(null);

  const currentFunc = useMemo(
    () => PRESET_FUNCTIONS.find((f) => f.id === selectedFuncId) || PRESET_FUNCTIONS[0],
    [selectedFuncId]
  );

  const a = currentFunc.defaultA;
  const b = currentFunc.defaultB;

  // Actual number of partitions (Simpson requires even n)
  const effectiveN = rule === "simpson" ? (partitions % 2 === 0 ? partitions : partitions + 1) : partitions;
  const deltaX = (b - a) / effectiveN;

  // Exact integral
  const exactVal = useMemo(() => {
    return currentFunc.antideriv(b) - currentFunc.antideriv(a);
  }, [currentFunc, a, b]);

  // Compute all 5 rules for comparison table and active approximation
  const evaluations = useMemo(() => {
    const f = currentFunc.fn;

    // Grid points
    const xs = [];
    for (let i = 0; i <= effectiveN; i++) {
      xs.push(a + i * deltaX);
    }

    // Left sum
    let leftSum = 0;
    for (let i = 0; i < effectiveN; i++) {
      leftSum += f(xs[i]) * deltaX;
    }

    // Right sum
    let rightSum = 0;
    for (let i = 1; i <= effectiveN; i++) {
      rightSum += f(xs[i]) * deltaX;
    }

    // Midpoint sum
    let midSum = 0;
    const midStrips = [];
    for (let i = 0; i < effectiveN; i++) {
      const midX = (xs[i] + xs[i + 1]) / 2;
      const height = f(midX);
      midSum += height * deltaX;
      midStrips.push({ x0: xs[i], x1: xs[i + 1], sampleX: midX, height, area: height * deltaX });
    }

    // Trapezoid sum
    let trapSum = (f(xs[0]) + f(xs[effectiveN])) / 2;
    for (let i = 1; i < effectiveN; i++) {
      trapSum += f(xs[i]);
    }
    trapSum *= deltaX;

    // Simpson's rule
    let simpSum = f(xs[0]) + f(xs[effectiveN]);
    for (let i = 1; i < effectiveN; i++) {
      simpSum += (i % 2 === 1 ? 4 : 2) * f(xs[i]);
    }
    simpSum *= deltaX / 3;

    return {
      left: leftSum,
      right: rightSum,
      midpoint: midSum,
      trapezoid: trapSum,
      simpson: simpSum,
      xs,
      midStrips,
    };
  }, [currentFunc, a, effectiveN, deltaX]);

  const approxVal = evaluations[rule] ?? evaluations.midpoint;
  const errorVal = approxVal - exactVal;
  const relErrorPct = exactVal !== 0 ? Math.abs(errorVal / exactVal) * 100 : 0;

  // SVG Geometry Settings
  const svgWidth = 840;
  const svgHeight = 400;
  const padLeft = 60;
  const padRight = 40;
  const padTop = 30;
  const padBottom = 50;
  const plotWidth = svgWidth - padLeft - padRight;
  const plotHeight = svgHeight - padTop - padBottom;

  // Sample y extremes over interval for nice auto-scaling
  const { minY, maxY } = useMemo(() => {
    let min = 0;
    let max = 0.5;
    for (let i = 0; i <= 100; i++) {
      const x = a + (i / 100) * (b - a);
      const y = currentFunc.fn(x);
      if (y < min) min = y;
      if (y > max) max = y;
    }
    return { minY: Math.min(0, min), maxY: max * 1.15 };
  }, [currentFunc, a, b]);

  const scaleX = useCallback(
    (x) => padLeft + ((x - a) / (b - a)) * plotWidth,
    [a, b, plotWidth]
  );
  const scaleY = useCallback(
    (y) => padTop + plotHeight - ((y - minY) / (maxY - minY)) * plotHeight,
    [minY, maxY, plotHeight]
  );
  const yZero = scaleY(0);

  // Generate smooth function curve path
  const curvePath = useMemo(() => {
    let d = "";
    const samples = 150;
    for (let i = 0; i <= samples; i++) {
      const x = a + (i / samples) * (b - a);
      const y = currentFunc.fn(x);
      const sx = scaleX(x);
      const sy = scaleY(y);
      d += i === 0 ? `M ${sx} ${sy}` : ` L ${sx} ${sy}`;
    }
    return d;
  }, [currentFunc, a, b, scaleX, scaleY]);

  // Strip rendering elements according to active rule
  const stripElements = useMemo(() => {
    const f = currentFunc.fn;
    const xs = evaluations.xs;
    const elements = [];

    for (let i = 0; i < effectiveN; i++) {
      const x0 = xs[i];
      const x1 = xs[i + 1];
      const sx0 = scaleX(x0);
      const sx1 = scaleX(x1);
      const width = sx1 - sx0;

      if (rule === "left") {
        const heightVal = f(x0);
        const sy = scaleY(heightVal);
        const rectY = Math.min(sy, yZero);
        const rectHeight = Math.abs(sy - yZero);
        elements.push(
          <rect
            key={i}
            x={sx0}
            y={rectY}
            width={width}
            height={rectHeight}
            fill="rgba(56, 189, 248, 0.28)"
            stroke="#0284c7"
            strokeWidth="1.2"
            onMouseEnter={() =>
              setHoveredStrip({
                index: i + 1,
                range: `[${x0.toFixed(2)}, ${x1.toFixed(2)}]`,
                height: heightVal.toFixed(4),
                area: (heightVal * deltaX).toFixed(4),
              })
            }
            onMouseLeave={() => setHoveredStrip(null)}
          />
        );
      } else if (rule === "right") {
        const heightVal = f(x1);
        const sy = scaleY(heightVal);
        const rectY = Math.min(sy, yZero);
        const rectHeight = Math.abs(sy - yZero);
        elements.push(
          <rect
            key={i}
            x={sx0}
            y={rectY}
            width={width}
            height={rectHeight}
            fill="rgba(14, 165, 233, 0.28)"
            stroke="#0369a1"
            strokeWidth="1.2"
            onMouseEnter={() =>
              setHoveredStrip({
                index: i + 1,
                range: `[${x0.toFixed(2)}, ${x1.toFixed(2)}]`,
                height: heightVal.toFixed(4),
                area: (heightVal * deltaX).toFixed(4),
              })
            }
            onMouseLeave={() => setHoveredStrip(null)}
          />
        );
      } else if (rule === "midpoint") {
        const midX = (x0 + x1) / 2;
        const heightVal = f(midX);
        const sy = scaleY(heightVal);
        const rectY = Math.min(sy, yZero);
        const rectHeight = Math.abs(sy - yZero);
        elements.push(
          <g key={i}>
            <rect
              x={sx0}
              y={rectY}
              width={width}
              height={rectHeight}
              fill="rgba(16, 185, 129, 0.28)"
              stroke="#059669"
              strokeWidth="1.2"
              onMouseEnter={() =>
                setHoveredStrip({
                  index: i + 1,
                  range: `[${x0.toFixed(2)}, ${x1.toFixed(2)}]`,
                  height: heightVal.toFixed(4),
                  area: (heightVal * deltaX).toFixed(4),
                })
              }
              onMouseLeave={() => setHoveredStrip(null)}
            />
            <circle cx={scaleX(midX)} cy={sy} r="3" fill="#10b981" />
          </g>
        );
      } else if (rule === "trapezoid") {
        const y0Val = f(x0);
        const y1Val = f(x1);
        const sy0 = scaleY(y0Val);
        const sy1 = scaleY(y1Val);
        const points = `${sx0},${yZero} ${sx0},${sy0} ${sx1},${sy1} ${sx1},${yZero}`;
        const area = ((y0Val + y1Val) / 2) * deltaX;
        elements.push(
          <polygon
            key={i}
            points={points}
            fill="rgba(168, 85, 247, 0.28)"
            stroke="#9333ea"
            strokeWidth="1.2"
            onMouseEnter={() =>
              setHoveredStrip({
                index: i + 1,
                range: `[${x0.toFixed(2)}, ${x1.toFixed(2)}]`,
                height: `y₀=${y0Val.toFixed(3)}, y₁=${y1Val.toFixed(3)}`,
                area: area.toFixed(4),
              })
            }
            onMouseLeave={() => setHoveredStrip(null)}
          />
        );
      } else if (rule === "simpson") {
        if (i % 2 === 0 && i + 1 < effectiveN) {
          const x2 = xs[i + 2];
          const sx2 = scaleX(x2);
          const y0Val = f(x0);
          const y1Val = f(xs[i + 1]);
          const y2Val = f(x2);
          const sy0 = scaleY(y0Val);
          const sy1 = scaleY(y1Val);
          const sy2 = scaleY(y2Val);
          const polyPath = `M ${sx0} ${yZero} L ${sx0} ${sy0} Q ${scaleX(xs[i + 1])} ${sy1} ${sx2} ${sy2} L ${sx2} ${yZero} Z`;
          elements.push(
            <path
              key={i}
              d={polyPath}
              fill="rgba(245, 158, 11, 0.25)"
              stroke="#d97706"
              strokeWidth="1.2"
              onMouseEnter={() =>
                setHoveredStrip({
                  index: `${i + 1}-${i + 2}`,
                  range: `[${x0.toFixed(2)}, ${x2.toFixed(2)}]`,
                  height: `Parabolic arc over 3 points`,
                  area: (((y0Val + 4 * y1Val + y2Val) * deltaX) / 3).toFixed(4),
                })
              }
              onMouseLeave={() => setHoveredStrip(null)}
            />
          );
        }
      }
    }
    return elements;
  }, [rule, effectiveN, deltaX, currentFunc, evaluations.xs, yZero, scaleX, scaleY]);

  return (
    <div className="viz-container">
      <header className="viz-header">
        <span className="viz-eyebrow">Interactive Calculus Lab</span>
        <h1 className="viz-title">Riemann Sum &amp; Integral Visualizer</h1>
        <p className="viz-subtitle">
          Explore numerical integration from discrete rectangular partitions to quadratic parabolic arcs.
          Visualize approximation convergence, error bounds, and exact Riemann slice geometries in real time.
        </p>
      </header>

      {/* Control Panel */}
      <div className="viz-panel">
        <div className="viz-tabs">
          {RULES.map((r) => (
            <button
              key={r.id}
              className={`viz-tab ${rule === r.id ? "active" : ""}`}
              onClick={() => setRule(r.id)}
            >
              {r.label} ({r.order})
            </button>
          ))}
        </div>

        <div className="viz-grid-controls">
          <div className="viz-control-group">
            <label className="viz-label" htmlFor="function-select">Function f(x)</label>
            <select
              id="function-select"
              className="viz-select"
              value={selectedFuncId}
              onChange={(e) => setSelectedFuncId(e.target.value)}
            >
              {PRESET_FUNCTIONS.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.label} on [{f.defaultA}, {f.displayB}]
                </option>
              ))}
            </select>
          </div>

          <div className="viz-control-group">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label className="viz-label" htmlFor="partitions-slider">Partitions n</label>
              <span className="viz-slider-val">{effectiveN}</span>
            </div>
            <input
              id="partitions-slider"
              type="range"
              className="viz-slider"
              min="2"
              max="100"
              step={rule === "simpson" ? "2" : "1"}
              value={effectiveN}
              onChange={(e) => setPartitions(parseInt(e.target.value, 10))}
            />
          </div>

          <div className="viz-control-group">
            <span className="viz-label">Interval Width Δx</span>
            <div className="viz-input" style={{ background: "rgba(15, 23, 42, 0.4)", cursor: "default" }}>
              Δx = {deltaX.toFixed(4)}
            </div>
          </div>
        </div>
      </div>

      {/* SVG Canvas Stage */}
      <div className="viz-stage">
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="xMidYMid meet">
          {/* Grid lines */}
          <line
            x1={padLeft}
            y1={yZero}
            x2={svgWidth - padRight}
            y2={yZero}
            stroke="rgba(148, 163, 184, 0.4)"
            strokeWidth="1.5"
          />
          <line
            x1={scaleX(a)}
            y1={padTop}
            x2={scaleX(a)}
            y2={padTop + plotHeight}
            stroke="rgba(148, 163, 184, 0.4)"
            strokeWidth="1.5"
          />

          {/* Shaded numerical strips */}
          {stripElements}

          {/* Exact function curve */}
          <path d={curvePath} fill="none" stroke="#f59e0b" strokeWidth="2.8" />

          {/* Axes labels & ticks */}
          <text x={scaleX(a)} y={svgHeight - 15} fill="#94a3b8" fontSize="12" textAnchor="middle">
            a = {a}
          </text>
          <text x={scaleX(b)} y={svgHeight - 15} fill="#94a3b8" fontSize="12" textAnchor="middle">
            b = {currentFunc.displayB}
          </text>
          <text x={padLeft - 10} y={scaleY(0) + 4} fill="#94a3b8" fontSize="12" textAnchor="end">
            0
          </text>
          <text x={padLeft - 10} y={scaleY(maxY * 0.9) + 4} fill="#94a3b8" fontSize="12" textAnchor="end">
            {(maxY * 0.9).toFixed(1)}
          </text>

          {/* Legend */}
          <g transform={`translate(${svgWidth - 220}, 20)`}>
            <rect width="200" height="60" fill="rgba(15, 23, 42, 0.85)" rx="6" stroke="rgba(148, 163, 184, 0.2)" />
            <line x1="15" y1="20" x2="45" y2="20" stroke="#f59e0b" strokeWidth="2.5" />
            <text x="55" y="24" fill="#cbd5e1" fontSize="12">f(x) exact curve</text>
            <rect x="15" y="35" width="30" height="12" fill="rgba(56, 189, 248, 0.4)" stroke="#38bdf8" strokeWidth="1" />
            <text x="55" y="45" fill="#cbd5e1" fontSize="12">{RULES.find((r) => r.id === rule)?.label}</text>
          </g>
        </svg>

        {hoveredStrip && (
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              left: "16px",
              background: "rgba(15, 23, 42, 0.95)",
              border: "1px solid #38bdf8",
              borderRadius: "8px",
              padding: "0.5rem 1rem",
              fontSize: "0.85rem",
              color: "#f8fafc",
              pointerEvents: "none",
            }}
          >
            <strong>Strip {hoveredStrip.index}:</strong> Interval {hoveredStrip.range} · Height: {hoveredStrip.height} · Area: {hoveredStrip.area}
          </div>
        )}
      </div>

      {/* Metrics Dashboard */}
      <div className="viz-metrics">
        <div className="viz-metric-card">
          <span className="viz-metric-title">Exact Value (∫ f dx)</span>
          <span className="viz-metric-num exact">{exactVal.toFixed(6)}</span>
          <span className="viz-metric-foot">Closed-form antiderivative</span>
        </div>

        <div className="viz-metric-card">
          <span className="viz-metric-title">Approximation ({RULES.find((r) => r.id === rule)?.label})</span>
          <span className="viz-metric-num approx">{approxVal.toFixed(6)}</span>
          <span className="viz-metric-foot">{effectiveN} subintervals</span>
        </div>

        <div className="viz-metric-card">
          <span className="viz-metric-title">Signed Error (Approx − Exact)</span>
          <span className="viz-metric-num error">
            {errorVal >= 0 ? "+" : ""}{errorVal.toFixed(6)}
          </span>
          <span className="viz-metric-foot">{errorVal >= 0 ? "Overestimate" : "Underestimate"}</span>
        </div>

        <div className="viz-metric-card">
          <span className="viz-metric-title">Relative Error</span>
          <span className="viz-metric-num" style={{ color: relErrorPct < 0.1 ? "#10b981" : "#f59e0b" }}>
            {relErrorPct.toFixed(4)}%
          </span>
          <span className="viz-metric-foot">|Error / Exact| × 100%</span>
        </div>
      </div>

      {/* Multi-Rule Comparison Table */}
      <div className="viz-panel" style={{ marginTop: "1rem" }}>
        <h3 style={{ margin: "0 0 1rem", fontSize: "1.1rem", color: "#f8fafc" }}>
          Comparative Accuracy Across All Rules (n = {effectiveN})
        </h3>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(148, 163, 184, 0.2)", textAlign: "left", color: "#94a3b8" }}>
                <th style={{ padding: "0.5rem" }}>Method</th>
                <th style={{ padding: "0.5rem" }}>Order</th>
                <th style={{ padding: "0.5rem" }}>Approximation</th>
                <th style={{ padding: "0.5rem" }}>Error</th>
                <th style={{ padding: "0.5rem" }}>Error %</th>
              </tr>
            </thead>
            <tbody>
              {RULES.map((r) => {
                const val = evaluations[r.id];
                const err = val - exactVal;
                const pct = exactVal !== 0 ? Math.abs(err / exactVal) * 100 : 0;
                const isSelected = r.id === rule;
                return (
                  <tr
                    key={r.id}
                    style={{
                      borderBottom: "1px solid rgba(148, 163, 184, 0.1)",
                      background: isSelected ? "rgba(56, 189, 248, 0.12)" : "transparent",
                    }}
                  >
                    <td style={{ padding: "0.6rem 0.5rem", fontWeight: isSelected ? 700 : 400, color: isSelected ? "#38bdf8" : "#f1f5f9" }}>
                      {r.label}
                    </td>
                    <td style={{ padding: "0.6rem 0.5rem", color: "#94a3b8" }}>{r.order}</td>
                    <td style={{ padding: "0.6rem 0.5rem", fontVariantNumeric: "tabular-nums" }}>{val.toFixed(6)}</td>
                    <td style={{ padding: "0.6rem 0.5rem", color: err >= 0 ? "#38bdf8" : "#f59e0b", fontVariantNumeric: "tabular-nums" }}>
                      {err >= 0 ? "+" : ""}{err.toFixed(6)}
                    </td>
                    <td style={{ padding: "0.6rem 0.5rem", fontVariantNumeric: "tabular-nums" }}>{pct.toFixed(4)}%</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Theoretical Callout */}
      <div className="viz-callout">
        <div className="viz-callout-hdr">
          <span>💡 Theoretical Error Bounds &amp; Order of Convergence</span>
        </div>
        <p>
          As partition count $n \to \infty$, the width $\Delta x = (b - a)/n \to 0$. The error bounds depend directly on the regularity of the integrand:
          <strong> Left &amp; Right sums</strong> are first-order $O(1/n)$, bounded by $\frac{(b-a)^2}{2n} M_1$;
          <strong> Midpoint &amp; Trapezoidal rules</strong> are second-order $O(1/n^2)$, bounded by $\frac{(b-a)^3}{24n^2} M_2$ and $\frac{(b-a)^3}{12n^2} M_2$;
          and <strong>Simpson's 1/3 Rule</strong> achieves fourth-order $O(1/n^4)$, bounded by $\frac{(b-a)^5}{180n^4} M_4$.
        </p>
        <Link
          to="/numerical-methods/1"
          style={{ color: "#38bdf8", fontWeight: 600, fontSize: "0.9rem", textDecoration: "underline", alignSelf: "flex-start", marginTop: "0.5rem" }}
        >
          Review Numerical Integration Guide (Newton-Raphson &amp; Simpson) →
        </Link>
      </div>
    </div>
  );
}
