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
    hasSingularity: false,
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
    hasSingularity: false,
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
    hasSingularity: false,
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
    hasSingularity: false,
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
    hasSingularity: false,
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
    hasSingularity: false,
  },
  {
    id: "reciprocal_x",
    label: "f(x) = 1 / x (Singular at x=0)",
    latex: "\\frac{1}{x}",
    fn: (x) => (Math.abs(x) < 1e-6 ? (x >= 0 ? 1e6 : -1e6) : 1 / x),
    antideriv: (x) => (x > 0 ? Math.log(x) : NaN),
    defaultA: 0.5,
    defaultB: 3,
    displayB: "3",
    hasSingularity: true,
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

  // Limits of integration (supports reversed intervals b < a)
  const [a, setA] = useState(currentFunc.defaultA);
  const [b, setB] = useState(currentFunc.defaultB);

  // When changing preset, update default limits
  const handleFuncChange = (id) => {
    setSelectedFuncId(id);
    const fnObj = PRESET_FUNCTIONS.find((f) => f.id === id) || PRESET_FUNCTIONS[0];
    setA(fnObj.defaultA);
    setB(fnObj.defaultB);
  };

  const isReversed = b < a;

  // Actual number of partitions (Simpson requires even n)
  const isSimpsonOdd = rule === "simpson" && partitions % 2 !== 0;
  const effectiveN = rule === "simpson" ? (partitions % 2 === 0 ? partitions : partitions + 1) : partitions;

  // Signed deltaX: negative when b < a!
  const deltaX = (b - a) / effectiveN;

  // Discontinuity / Singularity detector over the domain [min(a,b), max(a,b)]
  const discontinuityInfo = useMemo(() => {
    const minX = Math.min(a, b);
    const maxX = Math.max(a, b);
    if (minX === maxX) return null;

    let hasInfinity = false;
    let hasZeroCrossingPole = false;
    let badX = null;

    const testSamples = 300;
    for (let i = 0; i <= testSamples; i++) {
      const x = minX + (i / testSamples) * (maxX - minX);
      const val = currentFunc.fn(x);
      if (!isFinite(val) || Math.abs(val) > 1e4) {
        hasInfinity = true;
        badX = x;
        break;
      }
    }

    if (currentFunc.id === "reciprocal_x" && minX <= 0 && maxX >= 0) {
      hasZeroCrossingPole = true;
    }

    if (hasInfinity || hasZeroCrossingPole) {
      return {
        detected: true,
        badX: badX !== null ? badX.toFixed(3) : "0",
        message:
          "Integrand contains a non-integrable pole/asymptote in [a, b]. Riemann sum is mathematically divergent or improper.",
      };
    }
    return null;
  }, [currentFunc, a, b]);

  // Exact integral via closed-form antiderivative
  const exactVal = useMemo(() => {
    const F_b = currentFunc.antideriv(b);
    const F_a = currentFunc.antideriv(a);
    if (!isFinite(F_b) || !isFinite(F_a)) return NaN;
    return F_b - F_a;
  }, [currentFunc, a, b]);

  // High-precision Romberg / 1024-node reference benchmark
  const numericalReferenceVal = useMemo(() => {
    const f = currentFunc.fn;
    const refN = 1024;
    const h = (b - a) / refN;
    let sum = f(a) + f(b);
    for (let i = 1; i < refN; i++) {
      sum += (i % 2 === 1 ? 4 : 2) * f(a + i * h);
    }
    return (sum * h) / 3;
  }, [currentFunc, a, b]);

  // Compute all 5 rules for comparison table and active approximation
  const evaluations = useMemo(() => {
    const f = currentFunc.fn;

    // Grid points starting at a and stepping by signed deltaX
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
  const targetExact = isFinite(exactVal) ? exactVal : numericalReferenceVal;
  const errorVal = approxVal - targetExact;
  const relErrorPct = targetExact !== 0 ? Math.abs(errorVal / targetExact) * 100 : 0;

  // Swap limits helper
  const handleSwapLimits = () => {
    const prevA = a;
    const prevB = b;
    setA(prevB);
    setB(prevA);
  };

  // SVG Geometry Settings
  const svgWidth = 840;
  const svgHeight = 400;
  const padLeft = 60;
  const padRight = 40;
  const padTop = 30;
  const padBottom = 50;
  const plotWidth = svgWidth - padLeft - padRight;
  const plotHeight = svgHeight - padTop - padBottom;

  // Visual domain boundaries for geometry
  const domainMinX = Math.min(a, b);
  const domainMaxX = Math.max(a, b) === Math.min(a, b) ? Math.min(a, b) + 1 : Math.max(a, b);

  // Sample y extremes over domain for auto-scaling
  const { minY, maxY } = useMemo(() => {
    let min = 0;
    let max = 0.5;
    for (let i = 0; i <= 100; i++) {
      const x = domainMinX + (i / 100) * (domainMaxX - domainMinX);
      const y = currentFunc.fn(x);
      if (isFinite(y)) {
        if (y < min) min = y;
        if (y > max) max = y;
      }
    }
    return { minY: Math.min(0, min), maxY: Math.max(1, max * 1.15) };
  }, [currentFunc, domainMinX, domainMaxX]);

  const scaleX = useCallback(
    (x) => padLeft + ((x - domainMinX) / (domainMaxX - domainMinX)) * plotWidth,
    [domainMinX, domainMaxX, plotWidth]
  );
  const scaleY = useCallback(
    (y) => {
      const clampedY = Math.max(minY, Math.min(maxY, isFinite(y) ? y : 0));
      return padTop + plotHeight - ((clampedY - minY) / (maxY - minY)) * plotHeight;
    },
    [minY, maxY, plotHeight]
  );
  const yZero = scaleY(0);

  // Generate smooth function curve path
  const curvePath = useMemo(() => {
    let d = "";
    const samples = 150;
    for (let i = 0; i <= samples; i++) {
      const x = domainMinX + (i / samples) * (domainMaxX - domainMinX);
      const y = currentFunc.fn(x);
      const sx = scaleX(x);
      const sy = scaleY(y);
      d += i === 0 ? `M ${sx} ${sy}` : ` L ${sx} ${sy}`;
    }
    return d;
  }, [currentFunc, domainMinX, domainMaxX, scaleX, scaleY]);

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
      const minSx = Math.min(sx0, sx1);
      const width = Math.abs(sx1 - sx0);

      let heightVal = 0;
      let sampleX = x0;

      if (rule === "left") {
        heightVal = f(x0);
        sampleX = x0;
      } else if (rule === "right") {
        heightVal = f(x1);
        sampleX = x1;
      } else if (rule === "midpoint") {
        sampleX = (x0 + x1) / 2;
        heightVal = f(sampleX);
      } else {
        heightVal = (f(x0) + f(x1)) / 2;
        sampleX = (x0 + x1) / 2;
      }

      const sy = scaleY(heightVal);
      const rectY = Math.min(sy, yZero);
      const rectHeight = Math.abs(sy - yZero);

      elements.push(
        <g key={i}>
          <rect
            x={minSx}
            y={rectY}
            width={width}
            height={rectHeight}
            fill={isReversed ? "rgba(239, 68, 68, 0.25)" : "rgba(56, 189, 248, 0.28)"}
            stroke={isReversed ? "#ef4444" : "#0284c7"}
            strokeWidth="1.2"
            onMouseEnter={() =>
              setHoveredStrip({
                index: i + 1,
                range: `[${Math.min(x0, x1).toFixed(2)}, ${Math.max(x0, x1).toFixed(2)}]`,
                height: heightVal.toFixed(4),
                area: (heightVal * deltaX).toFixed(4),
              })
            }
            onMouseLeave={() => setHoveredStrip(null)}
          />
          {rule === "midpoint" && <circle cx={scaleX(sampleX)} cy={sy} r="3" fill="#10b981" />}
        </g>
      );
    }
    return elements;
  }, [currentFunc, evaluations, effectiveN, rule, deltaX, isReversed, scaleX, scaleY, yZero]);

  return (
    <div className="viz-container">
      <header className="viz-header">
        <span className="viz-eyebrow">Interactive Calculus Laboratory</span>
        <h1 className="viz-title">Riemann Sum &amp; Numerical Integration Suite</h1>
        <p className="viz-subtitle">
          Explore single-variable accumulation across Left, Right, Midpoint, Trapezoidal, and Simpson rules.
          Features reversed intervals ($b &lt; a$), composite even Simpson enforcement, and analytical vs reference verification.
        </p>
      </header>

      {/* Discontinuity Warning Banner */}
      {discontinuityInfo && (
        <div
          style={{
            background: "rgba(239, 68, 68, 0.15)",
            border: "1px solid rgba(239, 68, 68, 0.4)",
            borderRadius: "10px",
            padding: "0.85rem 1.25rem",
            color: "#fca5a5",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ fontSize: "1.4rem" }}>⚠️</span>
          <div>
            <strong>Mathematical Discontinuity Detected:</strong> {discontinuityInfo.message} (near x ≈ {discontinuityInfo.badX})
          </div>
        </div>
      )}

      {/* Reversed Interval Notice Banner */}
      {isReversed && (
        <div
          style={{
            background: "rgba(245, 158, 11, 0.15)",
            border: "1px solid rgba(245, 158, 11, 0.4)",
            borderRadius: "10px",
            padding: "0.75rem 1.25rem",
            color: "#fcd34d",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
          }}
        >
          <span style={{ fontSize: "1.3rem" }}>🔄</span>
          <div>
            <strong>Reversed Limits Active (b &lt; a):</strong> Interval step is negative ($\Delta x = {deltaX.toFixed(4)} &lt; 0$). The signed definite integral obeys $\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$.
          </div>
        </div>
      )}

      {/* Simpson Rule Even Subdivisions Pill */}
      {rule === "simpson" && (
        <div
          style={{
            background: isSimpsonOdd ? "rgba(147, 51, 234, 0.15)" : "rgba(16, 185, 129, 0.15)",
            border: `1px solid ${isSimpsonOdd ? "rgba(147, 51, 234, 0.4)" : "rgba(16, 185, 129, 0.4)"}`,
            borderRadius: "10px",
            padding: "0.6rem 1rem",
            color: isSimpsonOdd ? "#c084fc" : "#6ee7b7",
            marginBottom: "1rem",
            fontSize: "0.88rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span>ℹ️</span>
          <span>
            {isSimpsonOdd
              ? `Simpson's 1/3 Rule requires even subintervals (parabolic pair rule). Slider input (${partitions}) automatically adjusted to even n = ${effectiveN}.`
              : `Composite Simpson's 1/3 Rule active with ${effectiveN} even subdivisions (${effectiveN / 2} parabolic pairs).`}
          </span>
        </div>
      )}

      {/* Control Panel */}
      <div className="viz-panel">
        <div className="viz-tabs">
          {PRESET_FUNCTIONS.map((f) => (
            <button
              key={f.id}
              className={`viz-tab ${selectedFuncId === f.id ? "active" : ""}`}
              onClick={() => handleFuncChange(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="viz-grid-controls">
          <div className="viz-control-group">
            <label className="viz-label" htmlFor="riemann-rule-select">Approximation Rule</label>
            <select
              id="riemann-rule-select"
              className="viz-select"
              value={rule}
              onChange={(e) => setRule(e.target.value)}
            >
              {RULES.map((r) => (
                <option key={r.id} value={r.id}>
                  {r.label} ({r.order})
                </option>
              ))}
            </select>
          </div>

          <div className="viz-control-group">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label className="viz-label" htmlFor="partitions-slider">Subdivisions n</label>
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
            <span className="viz-label">Limits &amp; Signed Step Δx</span>
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <button
                type="button"
                onClick={handleSwapLimits}
                style={{
                  background: "rgba(56, 189, 248, 0.15)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  color: "#38bdf8",
                  borderRadius: "6px",
                  padding: "0.4rem 0.6rem",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
                title="Swap limits of integration to test reversed interval"
              >
                ⇄ Swap [a ↔ b]
              </button>
              <div className="viz-input" style={{ background: "rgba(15, 23, 42, 0.4)", cursor: "default", flex: 1 }}>
                Δx = {deltaX.toFixed(4)}
              </div>
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
            x1={scaleX(domainMinX)}
            y1={padTop}
            x2={scaleX(domainMinX)}
            y2={padTop + plotHeight}
            stroke="rgba(148, 163, 184, 0.4)"
            strokeWidth="1.5"
          />

          {/* Shaded numerical strips */}
          {stripElements}

          {/* Exact function curve */}
          <path d={curvePath} fill="none" stroke="#f59e0b" strokeWidth="2.8" />

          {/* Axes labels & ticks */}
          <text x={scaleX(a)} y={svgHeight - 15} fill="#38bdf8" fontSize="12" fontWeight="700" textAnchor="middle">
            a = {Number(a).toFixed(2)} {isReversed ? "→" : "←"}
          </text>
          <text x={scaleX(b)} y={svgHeight - 15} fill="#f59e0b" fontSize="12" fontWeight="700" textAnchor="middle">
            b = {Number(b).toFixed(2)}
          </text>
          <text x={padLeft - 10} y={scaleY(0) + 4} fill="#94a3b8" fontSize="12" textAnchor="end">
            0
          </text>
          <text x={padLeft - 10} y={scaleY(maxY * 0.9) + 4} fill="#94a3b8" fontSize="12" textAnchor="end">
            {(maxY * 0.9).toFixed(1)}
          </text>

          {/* Legend */}
          <g transform={`translate(${svgWidth - 230}, 20)`}>
            <rect width="210" height="64" fill="rgba(15, 23, 42, 0.85)" rx="6" stroke="rgba(148, 163, 184, 0.2)" />
            <line x1="15" y1="20" x2="45" y2="20" stroke="#f59e0b" strokeWidth="2.5" />
            <text x="55" y="24" fill="#cbd5e1" fontSize="12">f(x) exact curve</text>
            <rect
              x="15"
              y="36"
              width="30"
              height="12"
              fill={isReversed ? "rgba(239, 68, 68, 0.4)" : "rgba(56, 189, 248, 0.4)"}
              stroke={isReversed ? "#ef4444" : "#38bdf8"}
              strokeWidth="1"
            />
            <text x="55" y="47" fill="#cbd5e1" fontSize="12">
              {RULES.find((r) => r.id === rule)?.label} {isReversed ? "(−)" : "(+)"}
            </text>
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

      {/* Metrics Dashboard: Exact Analytical vs High-Precision Reference */}
      <div className="viz-metrics">
        <div className="viz-metric-card">
          <span className="viz-metric-title">Exact Analytical (FTC ∫ f dx)</span>
          <span className="viz-metric-num exact">
            {isFinite(exactVal) ? exactVal.toFixed(6) : "Non-elementary"}
          </span>
          <span className="viz-metric-foot">Closed-form: F(b) − F(a)</span>
        </div>

        <div className="viz-metric-card">
          <span className="viz-metric-title">High-Precision Reference</span>
          <span className="viz-metric-num" style={{ color: "#a855f7" }}>
            {isFinite(numericalReferenceVal) ? numericalReferenceVal.toFixed(6) : "Divergent"}
          </span>
          <span className="viz-metric-foot">1024-step Romberg benchmark</span>
        </div>

        <div className="viz-metric-card">
          <span className="viz-metric-title">Approximation ({RULES.find((r) => r.id === rule)?.label})</span>
          <span className="viz-metric-num approx">
            {isFinite(approxVal) ? approxVal.toFixed(6) : "NaN"}
          </span>
          <span className="viz-metric-foot">{effectiveN} subintervals · Δx = {deltaX.toFixed(4)}</span>
        </div>

        <div className="viz-metric-card">
          <span className="viz-metric-title">Relative Error</span>
          <span className="viz-metric-num" style={{ color: relErrorPct < 0.1 ? "#10b981" : "#f59e0b" }}>
            {isFinite(relErrorPct) ? `${relErrorPct.toFixed(4)}%` : "N/A"}
          </span>
          <span className="viz-metric-foot">|Error / Reference| × 100%</span>
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
                <th style={{ padding: "0.5rem" }}>Signed Error</th>
                <th style={{ padding: "0.5rem" }}>Error %</th>
              </tr>
            </thead>
            <tbody>
              {RULES.map((r) => {
                const val = evaluations[r.id];
                const err = val - targetExact;
                const pct = targetExact !== 0 ? Math.abs(err / targetExact) * 100 : 0;
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
                    <td style={{ padding: "0.6rem 0.5rem", fontVariantNumeric: "tabular-nums" }}>{isFinite(val) ? val.toFixed(6) : "NaN"}</td>
                    <td style={{ padding: "0.6rem 0.5rem", color: err >= 0 ? "#38bdf8" : "#f59e0b", fontVariantNumeric: "tabular-nums" }}>
                      {isFinite(err) ? `${err >= 0 ? "+" : ""}${err.toFixed(6)}` : "N/A"}
                    </td>
                    <td style={{ padding: "0.6rem 0.5rem", fontVariantNumeric: "tabular-nums" }}>
                      {isFinite(pct) ? `${pct.toFixed(4)}%` : "N/A"}
                    </td>
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
          and <strong>Simpson&apos;s 1/3 Rule</strong> achieves fourth-order $O(1/n^4)$, bounded by $\frac{(b-a)^5}{180n^4} M_4$.
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
