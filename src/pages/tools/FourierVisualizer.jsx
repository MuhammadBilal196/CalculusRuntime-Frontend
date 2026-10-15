import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Visualizers.css";

const WAVE_PRESETS = [
  {
    id: "square",
    label: "Square Wave",
    desc: "Odd harmonics with 1/n decay: 4/π ∑ sin((2k-1)t)/(2k-1)",
    hasGibbs: true,
    symmetries: {
      odd: true,
      even: false,
      halfWave: true,
      explanation: "f(-t) = -f(t) ⇒ aₙ = 0; f(t + π) = -f(t) ⇒ only odd harmonics (n=1,3,5,...)",
    },
    exactFn: (t) => (Math.sin(t) >= 0 ? 1 : -1),
    getCoeffs: (maxN) => {
      const coeffs = [];
      for (let n = 1; n <= maxN; n++) {
        if (n % 2 === 1) {
          const bn = 4 / (Math.PI * n);
          coeffs.push({ n, an: 0, bn, mag: Math.abs(bn) });
        } else {
          coeffs.push({ n, an: 0, bn: 0, mag: 0 });
        }
      }
      return { a0: 0, coeffs };
    },
  },
  {
    id: "sawtooth",
    label: "Sawtooth Wave",
    desc: "All harmonics with 1/n alternating decay: 2/π ∑ (-1)ⁿ⁺¹ sin(nt)/n",
    hasGibbs: true,
    symmetries: {
      odd: true,
      even: false,
      halfWave: false,
      explanation: "f(-t) = -f(t) ⇒ aₙ = 0; lacks half-wave symmetry ⇒ all integer harmonics active",
    },
    exactFn: (t) => {
      const wrapped = ((t + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
      return wrapped / Math.PI;
    },
    getCoeffs: (maxN) => {
      const coeffs = [];
      for (let n = 1; n <= maxN; n++) {
        const sign = n % 2 === 1 ? 1 : -1;
        const bn = (2 * sign) / (Math.PI * n);
        coeffs.push({ n, an: 0, bn, mag: Math.abs(bn) });
      }
      return { a0: 0, coeffs };
    },
  },
  {
    id: "triangle",
    label: "Triangle Wave",
    desc: "Odd harmonics with fast 1/n² decay: 8/π² ∑ (-1)^{(k-1)/2} sin(kt)/k²",
    hasGibbs: false,
    symmetries: {
      odd: true,
      even: false,
      halfWave: true,
      explanation: "f(-t) = -f(t) ⇒ aₙ = 0; f(t + π) = -f(t) ⇒ only odd harmonics; C⁰ continuous ⇒ no Gibbs overshoot",
    },
    exactFn: (t) => {
      const wrapped = ((t + Math.PI / 2) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
      return 1 - (2 / Math.PI) * Math.abs(wrapped);
    },
    getCoeffs: (maxN) => {
      const coeffs = [];
      for (let n = 1; n <= maxN; n++) {
        if (n % 2 === 1) {
          const k = (n - 1) / 2;
          const sign = k % 2 === 0 ? 1 : -1;
          const bn = (8 * sign) / (Math.PI * Math.PI * n * n);
          coeffs.push({ n, an: 0, bn, mag: Math.abs(bn) });
        } else {
          coeffs.push({ n, an: 0, bn: 0, mag: 0 });
        }
      }
      return { a0: 0, coeffs };
    },
  },
  {
    id: "rectified",
    label: "Full-Wave Rectified",
    desc: "Even cosine harmonics: 2/π - 4/π ∑ cos(2nt)/(4n² - 1)",
    hasGibbs: false,
    symmetries: {
      odd: false,
      even: true,
      halfWave: false,
      explanation: "f(-t) = f(t) ⇒ bₙ = 0; DC offset a₀/2 = 2/π; only even cosine harmonics cos(2kt)",
    },
    exactFn: (t) => Math.abs(Math.sin(t)),
    getCoeffs: (maxN) => {
      const coeffs = [];
      for (let n = 1; n <= maxN; n++) {
        if (n % 2 === 0) {
          const m = n / 2;
          const an = -4 / (Math.PI * (4 * m * m - 1));
          coeffs.push({ n, an, bn: 0, mag: Math.abs(an) });
        } else {
          coeffs.push({ n, an: 0, bn: 0, mag: 0 });
        }
      }
      return { a0: 4 / Math.PI, coeffs };
    },
  },
  {
    id: "parabolic_pulse",
    label: "Periodic Parabola",
    desc: "Even symmetry with 1/n² decay: π²/3 + 4 ∑ (-1)ⁿ cos(nt)/n²",
    hasGibbs: false,
    symmetries: {
      odd: false,
      even: true,
      halfWave: false,
      explanation: "f(-t) = f(t) on [-π, π] ⇒ pure cosine series bₙ = 0; quadratic curvature in time domain",
    },
    exactFn: (t) => {
      const wrapped = ((t + Math.PI) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI) - Math.PI;
      return (wrapped * wrapped) / (Math.PI * Math.PI);
    },
    getCoeffs: (maxN) => {
      const coeffs = [];
      for (let n = 1; n <= maxN; n++) {
        const sign = n % 2 === 0 ? 1 : -1;
        const an = (4 * sign) / (Math.PI * Math.PI * n * n);
        coeffs.push({ n, an, bn: 0, mag: Math.abs(an) });
      }
      return { a0: 2 / 3, coeffs };
    },
  },
];

export default function FourierVisualizer() {
  const [selectedWaveId, setSelectedWaveId] = useState("square");
  const [harmonics, setHarmonics] = useState(15);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const audioCtxRef = useRef(null);
  const oscRef = useRef(null);

  const currentWave = useMemo(
    () => WAVE_PRESETS.find((w) => w.id === selectedWaveId) || WAVE_PRESETS[0],
    [selectedWaveId]
  );

  const { a0, coeffs } = useMemo(
    () => currentWave.getCoeffs(harmonics),
    [currentWave, harmonics]
  );

  // Time domain synthesis function
  const synthFn = useCallback(
    (t) => {
      let sum = a0 / 2;
      for (let i = 0; i < coeffs.length; i++) {
        const { n, an, bn } = coeffs[i];
        if (an !== 0) sum += an * Math.cos(n * t);
        if (bn !== 0) sum += bn * Math.sin(n * t);
      }
      return sum;
    },
    [a0, coeffs]
  );

  // Live Gibbs overshoot metric
  const gibbsMetrics = useMemo(() => {
    if (!currentWave.hasGibbs) return null;
    let maxVal = 0;
    // Scan near t = 0+
    const testSamples = 600;
    for (let i = 1; i <= testSamples; i++) {
      const t = (i / testSamples) * (Math.PI / 2);
      const val = synthFn(t);
      if (val > maxVal) maxVal = val;
    }
    const overshootPct = ((maxVal - 1.0) / 1.0) * 100;
    const totalJumpOvershoot = overshootPct * 2; // Full jump from -1 to +1
    return {
      peak: maxVal,
      overshootPct: Math.max(0, overshootPct),
      totalJumpOvershoot,
      theoreticalPct: 8.949,
    };
  }, [currentWave, synthFn]);

  // Audio tone generation via Web Audio API
  const toggleAudio = () => {
    if (isPlayingAudio) {
      if (oscRef.current) {
        oscRef.current.stop();
        oscRef.current.disconnect();
        oscRef.current = null;
      }
      setIsPlayingAudio(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const real = new Float32Array(coeffs.length + 1);
      const imag = new Float32Array(coeffs.length + 1);
      real[0] = 0;
      imag[0] = 0;

      for (let i = 0; i < coeffs.length; i++) {
        real[i + 1] = coeffs[i].an;
        imag[i + 1] = coeffs[i].bn;
      }

      const wave = ctx.createPeriodicWave(real, imag, { disableNormalization: false });
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.setPeriodicWave(wave);
      osc.frequency.setValueAtTime(220, ctx.currentTime);
      gain.gain.setValueAtTime(0.15, ctx.currentTime);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      oscRef.current = osc;
      setIsPlayingAudio(true);
    } catch {
      setIsPlayingAudio(false);
    }
  };

  useEffect(() => {
    return () => {
      if (oscRef.current) {
        try {
          oscRef.current.stop();
          oscRef.current.disconnect();
        } catch {}
      }
    };
  }, []);

  // Time Domain SVG Plot Geometry
  const svgWidth = 840;
  const svgHeight = 360;
  const padLeft = 60;
  const padRight = 40;
  const padTop = 30;
  const padBottom = 40;
  const plotW = svgWidth - padLeft - padRight;
  const plotH = svgHeight - padTop - padBottom;

  const tMin = -Math.PI;
  const tMax = Math.PI;
  const yMin = -1.5;
  const yMax = 1.5;

  const scaleT = useCallback(
    (t) => padLeft + ((t - tMin) / (tMax - tMin)) * plotW,
    [plotW, tMin, tMax]
  );
  const scaleY = useCallback(
    (y) => padTop + plotH - ((y - yMin) / (yMax - yMin)) * plotH,
    [plotH, yMin, yMax]
  );
  const yMid = scaleY(0);

  // Exact target waveform path
  const exactPath = useMemo(() => {
    let d = "";
    const pts = 250;
    for (let i = 0; i <= pts; i++) {
      const t = tMin + (i / pts) * (tMax - tMin);
      const y = currentWave.exactFn(t);
      const sx = scaleT(t);
      const sy = scaleY(y);
      d += i === 0 ? `M ${sx} ${sy}` : ` L ${sx} ${sy}`;
    }
    return d;
  }, [currentWave, tMin, tMax, scaleT, scaleY]);

  // High-performance synthesized Fourier Series curve (60fps optimized)
  const synthPath = useMemo(() => {
    let d = "";
    const pts = 320;
    for (let i = 0; i <= pts; i++) {
      const t = tMin + (i / pts) * (tMax - tMin);
      const y = synthFn(t);
      const sx = scaleT(t);
      const sy = scaleY(y);
      d += i === 0 ? `M ${sx} ${sy}` : ` L ${sx} ${sy}`;
    }
    return d;
  }, [synthFn, tMin, tMax, scaleT, scaleY]);

  // Max magnitude for frequency spectrum scaling
  const maxMag = useMemo(() => {
    let max = 0.01;
    for (const c of coeffs) {
      if (c.mag > max) max = c.mag;
    }
    return max;
  }, [coeffs]);

  const { symmetries } = currentWave;

  return (
    <div className="viz-container">
      <header className="viz-header">
        <span className="viz-eyebrow">Harmonic Analysis &amp; Dual-Domain Lab</span>
        <h1 className="viz-title">Fourier Series &amp; Synthesis Visualizer</h1>
        <p className="viz-subtitle">
          Construct periodic signals from orthogonal sinusoidal bases. Inspect live harmonic spectra,
          verify odd/even/half-wave symmetries, observe the live Gibbs phenomenon overshoot, and synthesize acoustic timbre up to N = 50.
        </p>
      </header>

      {/* Live Symmetry Badges */}
      <div
        style={{
          display: "flex",
          gap: "0.75rem",
          alignItems: "center",
          flexWrap: "wrap",
          marginBottom: "1rem",
        }}
      >
        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#94a3b8" }}>Signal Symmetries:</span>
        <span
          style={{
            padding: "0.3rem 0.75rem",
            borderRadius: "999px",
            fontSize: "0.8rem",
            fontWeight: 600,
            background: symmetries.odd ? "rgba(56, 189, 248, 0.15)" : "rgba(100, 116, 139, 0.2)",
            border: `1px solid ${symmetries.odd ? "rgba(56, 189, 248, 0.4)" : "rgba(100, 116, 139, 0.3)"}`,
            color: symmetries.odd ? "#38bdf8" : "#64748b",
          }}
        >
          {symmetries.odd ? "✓ Odd Symmetry (aₙ = 0)" : "✗ Not Odd"}
        </span>
        <span
          style={{
            padding: "0.3rem 0.75rem",
            borderRadius: "999px",
            fontSize: "0.8rem",
            fontWeight: 600,
            background: symmetries.even ? "rgba(16, 185, 129, 0.15)" : "rgba(100, 116, 139, 0.2)",
            border: `1px solid ${symmetries.even ? "rgba(16, 185, 129, 0.4)" : "rgba(100, 116, 139, 0.3)"}`,
            color: symmetries.even ? "#10b981" : "#64748b",
          }}
        >
          {symmetries.even ? "✓ Even Symmetry (bₙ = 0)" : "✗ Not Even"}
        </span>
        <span
          style={{
            padding: "0.3rem 0.75rem",
            borderRadius: "999px",
            fontSize: "0.8rem",
            fontWeight: 600,
            background: symmetries.halfWave ? "rgba(245, 158, 11, 0.15)" : "rgba(100, 116, 139, 0.2)",
            border: `1px solid ${symmetries.halfWave ? "rgba(245, 158, 11, 0.4)" : "rgba(100, 116, 139, 0.3)"}`,
            color: symmetries.halfWave ? "#f59e0b" : "#64748b",
          }}
        >
          {symmetries.halfWave ? "✓ Half-Wave Symmetry (Odd Harmonics Only)" : "✗ No Half-Wave"}
        </span>
        <span style={{ fontSize: "0.8rem", color: "#94a3b8", fontStyle: "italic" }}>
          ({symmetries.explanation})
        </span>
      </div>

      {/* Wave Selector & Harmonics Slider */}
      <div className="viz-panel">
        <div className="viz-tabs">
          {WAVE_PRESETS.map((w) => (
            <button
              key={w.id}
              className={`viz-tab ${selectedWaveId === w.id ? "active" : ""}`}
              onClick={() => {
                setSelectedWaveId(w.id);
                if (isPlayingAudio) toggleAudio();
              }}
            >
              {w.label}
            </button>
          ))}
        </div>

        <div className="viz-grid-controls">
          <div className="viz-control-group" style={{ gridColumn: "span 2" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span className="viz-label">Harmonics Count N (1 to 50, 60fps Active)</span>
              <span className="viz-slider-val">{harmonics} Harmonics</span>
            </div>
            <input
              type="range"
              className="viz-slider"
              min="1"
              max="50"
              value={harmonics}
              onChange={(e) => setHarmonics(parseInt(e.target.value, 10))}
            />
          </div>

          <div className="viz-control-group">
            <span className="viz-label">Acoustic Audio Demo (220 Hz)</span>
            <button className="viz-audio-btn" onClick={toggleAudio}>
              <span>{isPlayingAudio ? "⏹ Stop Sound" : "▶ Play Tone"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Time-Domain Plot */}
      <div className="viz-stage">
        <div style={{ position: "absolute", top: "16px", left: "20px", fontSize: "0.9rem", fontWeight: 700, color: "#38bdf8" }}>
          Time Domain: Target Waveform vs S_{harmonics}(t) Partial Sum
        </div>
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} preserveAspectRatio="xMidYMid meet">
          {/* Axis and grid */}
          <line x1={padLeft} y1={yMid} x2={svgWidth - padRight} y2={yMid} stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1.5" />
          <line x1={scaleT(0)} y1={padTop} x2={scaleT(0)} y2={padTop + plotH} stroke="rgba(148, 163, 184, 0.3)" strokeWidth="1.5" />

          {/* Target wave (dashed white/gray) */}
          <path d={exactPath} fill="none" stroke="rgba(255, 255, 255, 0.45)" strokeWidth="2" strokeDasharray="5,5" />

          {/* Synthesized Fourier curve (neon cyan) */}
          <path d={synthPath} fill="none" stroke="#38bdf8" strokeWidth="2.8" />

          {/* Ticks and labels */}
          <text x={scaleT(-Math.PI)} y={svgHeight - 12} fill="#94a3b8" fontSize="12" textAnchor="middle">-π</text>
          <text x={scaleT(0)} y={svgHeight - 12} fill="#94a3b8" fontSize="12" textAnchor="middle">0</text>
          <text x={scaleT(Math.PI)} y={svgHeight - 12} fill="#94a3b8" fontSize="12" textAnchor="middle">+π</text>
          <text x={padLeft - 10} y={scaleY(1) + 4} fill="#94a3b8" fontSize="12" textAnchor="end">+1.0</text>
          <text x={padLeft - 10} y={scaleY(-1) + 4} fill="#94a3b8" fontSize="12" textAnchor="end">-1.0</text>

          {/* Legend */}
          <g transform={`translate(${svgWidth - 230}, 20)`}>
            <rect width="210" height="56" fill="rgba(15, 23, 42, 0.85)" rx="6" stroke="rgba(148, 163, 184, 0.2)" />
            <line x1="15" y1="18" x2="45" y2="18" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="2" strokeDasharray="4,4" />
            <text x="55" y="22" fill="#cbd5e1" fontSize="12">Target f(t)</text>
            <line x1="15" y1="38" x2="45" y2="38" stroke="#38bdf8" strokeWidth="2.5" />
            <text x="55" y="42" fill="#38bdf8" fontSize="12">Fourier S_{harmonics}(t)</text>
          </g>
        </svg>
      </div>

      {/* Frequency Domain Spectrum Bar Chart */}
      <div className="viz-panel">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
          <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#f8fafc" }}>
            Frequency Domain Spectrum (|cₙ| = √(aₙ² + bₙ²))
          </h3>
          <span style={{ fontSize: "0.82rem", color: "#94a3b8" }}>Harmonics 1 to {harmonics}</span>
        </div>

        <div className="viz-harmonics-chart">
          {coeffs.map((c) => {
            const heightPct = maxMag > 0 ? (c.mag / maxMag) * 100 : 0;
            return (
              <div
                key={c.n}
                className="viz-bar"
                style={{ height: `${Math.max(2, heightPct)}%` }}
                title={`Harmonic n=${c.n}: Amplitude = ${c.mag.toFixed(4)}`}
              />
            );
          })}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#64748b" }}>
          <span>Fundamental (n=1)</span>
          <span>Mid Harmonics (n={Math.round(harmonics / 2)})</span>
          <span>Nyquist Cutoff (n={harmonics})</span>
        </div>
      </div>

      {/* Gibbs Phenomenon Analyzer */}
      {gibbsMetrics ? (
        <div className="viz-metrics">
          <div className="viz-metric-card">
            <span className="viz-metric-title">Observed Peak Amplitude</span>
            <span className="viz-metric-num" style={{ color: "#38bdf8" }}>
              {gibbsMetrics.peak.toFixed(4)}
            </span>
            <span className="viz-metric-foot">Target flat-top amplitude = 1.0000</span>
          </div>

          <div className="viz-metric-card">
            <span className="viz-metric-title">Numerical Overshoot (Live)</span>
            <span className="viz-metric-num" style={{ color: "#f59e0b" }}>
              +{gibbsMetrics.overshootPct.toFixed(2)}%
            </span>
            <span className="viz-metric-foot">Measured at first ripple crest</span>
          </div>

          <div className="viz-metric-card">
            <span className="viz-metric-title">Theoretical Wilbraham Limit</span>
            <span className="viz-metric-num exact">+8.95%</span>
            <span className="viz-metric-foot">2/π Si(π) − 1 ≈ 0.08949</span>
          </div>

          <div className="viz-metric-card">
            <span className="viz-metric-title">Harmonic Truncation Error</span>
            <span className="viz-metric-num" style={{ color: "#10b981" }}>
              {Math.abs(gibbsMetrics.overshootPct - 8.949).toFixed(3)}%
            </span>
            <span className="viz-metric-foot">Deviation from continuum limit</span>
          </div>
        </div>
      ) : (
        <div className="viz-metrics">
          <div className="viz-metric-card">
            <span className="viz-metric-title">Continuity Status</span>
            <span className="viz-metric-num" style={{ color: "#10b981" }}>Continuous</span>
            <span className="viz-metric-foot">No isolated jump discontinuities</span>
          </div>
          <div className="viz-metric-card">
            <span className="viz-metric-title">Gibbs Overshoot</span>
            <span className="viz-metric-num" style={{ color: "#38bdf8" }}>0.00%</span>
            <span className="viz-metric-foot">Uniform convergence holds</span>
          </div>
          <div className="viz-metric-card">
            <span className="viz-metric-title">Spectral Decay Rate</span>
            <span className="viz-metric-num" style={{ color: "#a855f7" }}>O(1/n²)</span>
            <span className="viz-metric-foot">Fast geometric Fourier roll-off</span>
          </div>
          <div className="viz-metric-card">
            <span className="viz-metric-title">Active Harmonics</span>
            <span className="viz-metric-num exact">{harmonics}</span>
            <span className="viz-metric-foot">Partial sum S_{harmonics}(t)</span>
          </div>
        </div>
      )}

      {/* Educational Callout */}
      <div className="viz-callout">
        <div className="viz-callout-hdr">
          <span>🔍 Harmonic Symmetries &amp; The Gibbs Phenomenon</span>
        </div>
        <p>
          Waveform symmetry drastically simplifies Fourier synthesis: <strong>Odd functions</strong> eliminate all cosine terms ($a_n = 0$),
          <strong> Even functions</strong> eliminate all sine terms ($b_n = 0$), and <strong>Half-wave symmetry</strong> wipes out all even harmonics.
          Whenever an isolated jump discontinuity is present, Fourier partial sums exhibit an asymptotic overshoot of exactly <strong>8.949%</strong> (the Wilbraham-Gibbs constant),
          which persists as $N \to \infty$ and compresses toward the jump point.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
          <Link
            to="/fourier-series/1"
            style={{ color: "#38bdf8", fontWeight: 600, fontSize: "0.9rem", textDecoration: "underline" }}
          >
            Review Fourier Series Guide →
          </Link>
          <Link
            to="/fourier-transforms/1"
            style={{ color: "#818cf8", fontWeight: 600, fontSize: "0.9rem", textDecoration: "underline" }}
          >
            Advance to Continuous Fourier Transform →
          </Link>
        </div>
      </div>
    </div>
  );
}
