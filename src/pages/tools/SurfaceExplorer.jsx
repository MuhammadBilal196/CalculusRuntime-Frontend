import { useEffect, useId, useMemo, useRef, useState } from "react";
import { compileSurface } from "../../utils/math/surfaceMath";
import { createSurfaceScene } from "./surfaceScene";
import "./SurfaceExplorer.css";

const PRESETS = [
  { id: 'hills', label: 'Hills & valleys', formula: 'a * sin(k*x) * sin(k*y) * cos(t)', a: 1.6, k: 1, range: 3.2 },
  { id: 'ripple', label: 'Ripple', formula: 'a * sin(k*sqrt(x^2 + y^2) - 2*t) * exp(-0.06*(x^2 + y^2))', a: 2, k: 1.6, range: 6 },
  { id: 'orbit', label: 'Orbiting hill', formula: '2*a * exp(-k*((x - 1.6*cos(t))^2 + (y - 1.6*sin(t))^2))', a: 1, k: 0.9, range: 3.5 },
  { id: 'eggcrate', label: 'Egg crate', formula: 'a * sin(k*x + t) * cos(k*y)', a: 1.2, k: 1, range: 6 },
  { id: 'saddle', label: 'Saddle', formula: 'a * (x^2 - y^2) / 4 * cos(t)', a: 1, k: 1, range: 3 },
  { id: 'bowl', label: 'Paraboloid', formula: 'a * (x^2 + y^2) / 4 - 1.5', a: 1, k: 1, range: 3 },
  { id: 'monkey', label: 'Monkey saddle', formula: 'a * (x^3 - 3*x*y^2) / 12', a: 1, k: 1, range: 2.4 },
  { id: 'dome', label: 'Hemisphere', formula: 'sqrt(9 - x^2 - y^2)', a: 1, k: 1, range: 3.2 },
  {
    id: 'peaks',
    label: 'Peaks',
    formula: 'a * (3*(1-x)^2*exp(-x^2-(y+1)^2) - 10*(x/5-x^3-y^5)*exp(-x^2-y^2) - exp(-(x+1)^2-y^2)/3) / 3',
    a: 1,
    k: 1,
    range: 3,
  },
];

const PALETTES = [
  { id: 'ocean', label: 'Ocean', stops: ['#163649', '#2b6179', '#4d8ca2', '#86bfc9', '#c6e8e8'] },
  { id: 'viridis', label: 'Viridis', stops: ['#440154', '#3b528b', '#21918c', '#5ec962', '#fde725'] },
  { id: 'sunset', label: 'Sunset', stops: ['#2c115f', '#721f81', '#b73779', '#f1605d', '#feb078'] },
  { id: 'spectral', label: 'Spectral', stops: ['#5e4fa2', '#3288bd', '#66c2a5', '#e6f598', '#fdae61', '#d53e4f'] },
];

const VIEW_BUTTONS = [
  { id: '+x', label: '+x', axis: 'x' },
  { id: '-x', label: '−x', axis: 'x' },
  { id: '+y', label: '+y', axis: 'y' },
  { id: '-y', label: '−y', axis: 'y' },
  { id: '+z', label: '+z', axis: 'z' },
  { id: '-z', label: '−z', axis: 'z' },
];

const TOGGLES = [
  { key: 'axes', label: 'Six axes' },
  { key: 'ticks', label: 'Tick numbers' },
  { key: 'xy', label: 'xy-plane', axis: 'z' },
  { key: 'yz', label: 'yz-plane', axis: 'x' },
  { key: 'xz', label: 'xz-plane', axis: 'y' },
  { key: 'mesh', label: 'Mesh lines' },
  { key: 'tangent', label: 'Tangent plane' },
];

const DEFAULT_SHOW = { axes: true, ticks: true, xy: true, yz: false, xz: false, mesh: false, tangent: true };
const READOUT_HINT = 'Drag to rotate · Scroll or pinch to zoom · Shift-drag to pan · Click the surface to pin a point';

const fmt = (value, digits = 2) => {
  if (!Number.isFinite(value)) return '—';
  const rounded = Math.abs(value) < 0.5 * 10 ** -digits ? 0 : value;
  return rounded.toFixed(digits).replace('-', '−');
};

// "+ 0.54(x − 1.00)" style term for the tangent-plane equation.
function planeTerm(coef, variable, at) {
  const sign = coef < 0 ? '−' : '+';
  const shift = Math.abs(at) < 0.005 ? variable : `(${variable} ${at < 0 ? '+' : '−'} ${fmt(Math.abs(at))})`;
  return `${sign} ${fmt(Math.abs(coef))}${shift}`;
}

function readThemeSignature() {
  const root = document.documentElement;
  return `${root.dataset.theme || ''}|${root.dataset.siteTheme || ''}`;
}

function useThemeSignature() {
  const [signature, setSignature] = useState(readThemeSignature);
  useEffect(() => {
    const observer = new MutationObserver(() => setSignature(readThemeSignature()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-site-theme'] });
    return () => observer.disconnect();
  }, []);
  return signature;
}

function readSceneTheme(element) {
  const isDark = document.documentElement.dataset.theme === 'dark';
  const css = getComputedStyle(element);
  const token = (name, fallback) => css.getPropertyValue(name).trim() || fallback;
  return {
    axis: {
      x: token('--se-x', isDark ? '#f87171' : '#dc2626'),
      y: token('--se-y', isDark ? '#4ade80' : '#16a34a'),
      z: token('--se-z', isDark ? '#60a5fa' : '#2563eb'),
    },
    ink: token('--ink', isDark ? '#f8fafc' : '#0f172a'),
    muted: token('--muted', isDark ? '#cbd5e1' : '#64748b'),
    grid: isDark ? '#64748b' : '#94a3b8',
    halo: isDark ? 'rgba(10, 18, 32, 0.9)' : 'rgba(255, 255, 255, 0.92)',
  };
}

function Slider({ label, value, min, max, step, onChange, format = (v) => fmt(v), disabled = false, hint }) {
  const id = useId();
  return (
    <div className={`se-slider${disabled ? ' is-disabled' : ''}`}>
      <div className="se-slider__head">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>{format(value)}</output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      {hint && <p className="se-slider__hint">{hint}</p>}
    </div>
  );
}

const SurfaceExplorer = () => {
  const initial = PRESETS[0];
  const [presetId, setPresetId] = useState(initial.id);
  const [formula, setFormula] = useState(initial.formula);
  const [a, setA] = useState(initial.a);
  const [k, setK] = useState(initial.k);
  const [range, setRange] = useState(initial.range);
  const [detail, setDetail] = useState(96);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(1);
  const [autoRotate, setAutoRotate] = useState(true);
  const [paletteId, setPaletteId] = useState('ocean');
  const [opacity, setOpacity] = useState(1);
  const [show, setShow] = useState(DEFAULT_SHOW);
  const [probe, setProbe] = useState(null);
  const [probeInfo, setProbeInfo] = useState(null);
  const [stats, setStats] = useState(null);
  const [glError, setGlError] = useState('');
  const [isFullscreen, setIsFullscreen] = useState(false);

  const stageRef = useRef(null);
  const viewportRef = useRef(null);
  const readoutRef = useRef(null);
  const sceneRef = useRef(null);
  const themeSignature = useThemeSignature();

  // Keep drawing the last formula that parsed while the user is mid-edit.
  const compiled = useMemo(() => compileSurface(formula), [formula]);
  const [surface, setSurface] = useState(compiled);
  useEffect(() => {
    if (!compiled.error) setSurface(compiled);
  }, [compiled]);

  const uses = (name) => surface.symbols?.has(name);
  const canAnimate = uses('t');
  const palette = PALETTES.find((p) => p.id === paletteId) || PALETTES[0];

  useEffect(() => {
    const showReadout = (info) => {
      const el = readoutRef.current;
      if (!el) return;
      el.textContent = info ? `x = ${fmt(info.x)}    y = ${fmt(info.y)}    z = ${fmt(info.z)}` : READOUT_HINT;
      el.classList.toggle('is-live', Boolean(info));
    };
    showReadout(null);

    let scene;
    try {
      scene = createSurfaceScene(viewportRef.current, {
        onStats: setStats,
        onProbeInfo: setProbeInfo,
        onPick: setProbe,
        onHover: showReadout,
        onUserOrbit: () => setAutoRotate(false),
      });
    } catch (err) {
      setGlError('This browser could not start WebGL, which the 3D view needs. Try turning on hardware acceleration or using another browser.');
      return undefined;
    }
    sceneRef.current = scene;
    return () => {
      scene.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => { sceneRef.current?.setDomain({ range, segments: detail }); }, [range, detail]);
  useEffect(() => { sceneRef.current?.setSurface(surface); }, [surface]);
  useEffect(() => { sceneRef.current?.setParams({ a, k }); }, [a, k]);
  useEffect(() => { sceneRef.current?.setPalette(palette.stops); }, [palette]);
  useEffect(() => { sceneRef.current?.setOpacity(opacity); }, [opacity]);
  useEffect(() => { sceneRef.current?.setShow(show); }, [show]);
  useEffect(() => { sceneRef.current?.setAnimation({ playing: playing && canAnimate, speed }); }, [playing, canAnimate, speed]);
  useEffect(() => { sceneRef.current?.setAutoRotate(autoRotate); }, [autoRotate]);
  useEffect(() => { sceneRef.current?.setProbe(probe); }, [probe]);
  useEffect(() => {
    if (sceneRef.current && stageRef.current) sceneRef.current.setTheme(readSceneTheme(stageRef.current));
  }, [themeSignature]);

  useEffect(() => {
    const onChange = () => setIsFullscreen(document.fullscreenElement === stageRef.current);
    document.addEventListener('fullscreenchange', onChange);
    return () => document.removeEventListener('fullscreenchange', onChange);
  }, []);

  const applyPreset = (preset) => {
    setPresetId(preset.id);
    setFormula(preset.formula);
    setA(preset.a);
    setK(preset.k);
    setRange(preset.range);
    setProbe(null);
    sceneRef.current?.setTime(0);
  };

  const onFormulaChange = (value) => {
    setFormula(value);
    setPresetId(PRESETS.find((p) => p.formula === value)?.id ?? null);
  };

  const viewFrom = (id) => {
    setAutoRotate(false);
    sceneRef.current?.viewFrom(id);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      stageRef.current?.requestFullscreen?.().catch(() => {});
    }
  };

  const toggleShow = (key) => setShow((prev) => ({ ...prev, [key]: !prev[key] }));
  const notInFormula = (name) => (uses(name) ? undefined : `Not in the formula. Add ${name} to use it.`);

  const gradientLength = probeInfo && Math.hypot(probeInfo.fx, probeInfo.fy);
  const undefinedShare = stats && stats.invalid / stats.total;

  return (
    <div className="se-page">
      <header className="se-header">
        <span className="se-eyebrow">Multivariable · Interactive 3D</span>
        <h1 className="se-title">3D Surface Explorer</h1>
        <p className="se-lead">
          Graph <em>z = f(x, y)</em> inside the full coordinate frame, with all six directions +x, −x, +y, −y, +z and −z.
          Drag to spin it, zoom in, set it moving, and click the surface to read off a point and its tangent plane.
        </p>
      </header>

      <div className="se-layout">
        <section className="se-stage" ref={stageRef} aria-label="3D surface viewer">
          <div className="se-viewport" ref={viewportRef} />
          {glError && <div className="se-gl-error" role="alert">{glError}</div>}

          <div className="se-overlay se-overlay--top">
            <div className="se-toolbar">
              <button
                type="button"
                className={`se-tool${playing && canAnimate ? ' is-on' : ''}`}
                onClick={() => setPlaying((p) => !p)}
                disabled={!canAnimate}
                title={canAnimate ? 'Animate the time variable t' : 'Add t to the formula to animate it'}
              >
                <span aria-hidden="true">{playing && canAnimate ? '❚❚' : '▶'}</span>
                <span className="se-tool__text">{playing && canAnimate ? 'Pause' : 'Play'}</span>
              </button>
              <button
                type="button"
                className={`se-tool${autoRotate ? ' is-on' : ''}`}
                onClick={() => setAutoRotate((r) => !r)}
                aria-pressed={autoRotate}
                title="Slowly spin the view"
              >
                <span aria-hidden="true">⟳</span>
                <span className="se-tool__text">Spin</span>
              </button>
              <button type="button" className="se-tool" onClick={() => viewFrom('iso')} title="Back to the 3D view (double-click the plot or press 0)">
                <span aria-hidden="true">⌂</span>
                <span className="se-tool__text">Reset</span>
              </button>
              <button type="button" className="se-tool" onClick={toggleFullscreen} title={isFullscreen ? 'Exit full screen' : 'Full screen'}>
                <span aria-hidden="true">{isFullscreen ? '⤡' : '⤢'}</span>
                <span className="se-tool__text">{isFullscreen ? 'Exit' : 'Full screen'}</span>
              </button>
            </div>

            <div className="se-views" role="group" aria-label="Look along an axis">
              <span className="se-views__label">Look from</span>
              {VIEW_BUTTONS.map((view) => (
                <button
                  key={view.id}
                  type="button"
                  className={`se-view se-view--${view.axis}`}
                  onClick={() => viewFrom(view.id)}
                  title={`Look at the origin from the ${view.label} side`}
                >
                  {view.label}
                </button>
              ))}
            </div>
          </div>

          <div className="se-overlay se-overlay--bottom">
            <div className="se-readout" ref={readoutRef} />
          </div>
        </section>

        <aside className="se-panel">
          <section className="se-card">
            <h2 className="se-card__title">Function</h2>
            <label className={`se-formula${compiled.error ? ' is-invalid' : ''}`}>
              <span className="se-formula__prefix">z =</span>
              <input
                type="text"
                value={formula}
                onChange={(event) => onFormulaChange(event.target.value)}
                spellCheck={false}
                autoComplete="off"
                aria-label="Surface formula z = f(x, y)"
                aria-invalid={Boolean(compiled.error)}
              />
            </label>
            {compiled.error ? (
              <p className="se-error" role="alert">{compiled.error} Still showing the last formula that worked.</p>
            ) : (
              <p className="se-note">
                Use <code>x</code> and <code>y</code>, plus <code>a</code>, <code>k</code> (sliders) and <code>t</code> (time).
                Functions like <code>sin</code>, <code>exp</code>, <code>sqrt</code>, <code>abs</code> and <code>log</code> work.
              </p>
            )}
            <div className="se-chips">
              {PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  className={`se-chip${presetId === preset.id ? ' is-on' : ''}`}
                  onClick={() => applyPreset(preset)}
                  aria-pressed={presetId === preset.id}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </section>

          <section className="se-card">
            <h2 className="se-card__title">Shape</h2>
            <Slider label="Amplitude a" value={a} min={0} max={3} step={0.05} onChange={setA} disabled={!uses('a')} hint={notInFormula('a')} />
            <Slider label="Frequency k" value={k} min={0.1} max={3} step={0.05} onChange={setK} disabled={!uses('k')} hint={notInFormula('k')} />
            <Slider label="Domain  x, y ∈ ±" value={range} min={1} max={8} step={0.1} onChange={setRange} format={(v) => fmt(v, 1)} />
            <Slider label="Detail" value={detail} min={24} max={160} step={8} onChange={setDetail} format={(v) => `${v} × ${v}`} />
            {stats && stats.zMin !== null && (
              <p className="se-note">
                Heights run from <strong>{fmt(stats.zMin)}</strong> to <strong>{fmt(stats.zMax)}</strong>.
              </p>
            )}
            {stats?.clipped > 0 && (
              <p className="se-warning">Some heights go past ±{fmt(stats.zClip, 1)} and are flattened there. Lower a or shrink the domain.</p>
            )}
            {undefinedShare > 0 && (
              <p className="se-note">
                {Math.round(undefinedShare * 100) || '<1'}% of the grid is outside the function’s domain and is left open.
              </p>
            )}
          </section>

          <section className="se-card">
            <h2 className="se-card__title">Motion</h2>
            <div className="se-row">
              <button
                type="button"
                className={`se-button${playing && canAnimate ? ' is-on' : ''}`}
                onClick={() => setPlaying((p) => !p)}
                disabled={!canAnimate}
              >
                {playing && canAnimate ? '❚❚ Pause' : '▶ Play'}
              </button>
              <button type="button" className="se-button se-button--quiet" onClick={() => sceneRef.current?.setTime(0)} disabled={!canAnimate}>
                Reset t
              </button>
              <span className="se-time">t = {fmt(stats?.t ?? 0)}</span>
            </div>
            <Slider label="Speed" value={speed} min={0.1} max={3} step={0.1} onChange={setSpeed} format={(v) => `${fmt(v, 1)}×`} disabled={!canAnimate} hint={notInFormula('t')} />
          </section>

          <section className="se-card">
            <h2 className="se-card__title">Show</h2>
            <div className="se-chips">
              {TOGGLES.map((toggle) => (
                <button
                  key={toggle.key}
                  type="button"
                  className={`se-chip se-chip--toggle${show[toggle.key] ? ' is-on' : ''}`}
                  onClick={() => toggleShow(toggle.key)}
                  aria-pressed={show[toggle.key]}
                >
                  {toggle.axis && <span className={`se-dot se-dot--${toggle.axis}`} aria-hidden="true" />}
                  {toggle.label}
                </button>
              ))}
            </div>
            <div className="se-palettes" role="group" aria-label="Colour scheme">
              {PALETTES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`se-palette${paletteId === p.id ? ' is-on' : ''}`}
                  onClick={() => setPaletteId(p.id)}
                  aria-pressed={paletteId === p.id}
                >
                  <span className="se-palette__swatch" style={{ background: `linear-gradient(90deg, ${p.stops.join(', ')})` }} />
                  {p.label}
                </button>
              ))}
            </div>
            <Slider label="Opacity" value={opacity} min={0.2} max={1} step={0.05} onChange={setOpacity} format={(v) => `${Math.round(v * 100)}%`} />
          </section>

          <section className="se-card">
            <h2 className="se-card__title">Point on the surface</h2>
            {probe && probeInfo && Number.isFinite(probeInfo.z) ? (
              <>
                <dl className="se-facts">
                  <div><dt>Point</dt><dd>({fmt(probeInfo.x)}, {fmt(probeInfo.y)}, {fmt(probeInfo.z)})</dd></div>
                  <div><dt>∂f/∂x</dt><dd>{fmt(probeInfo.fx, 3)}</dd></div>
                  <div><dt>∂f/∂y</dt><dd>{fmt(probeInfo.fy, 3)}</dd></div>
                  <div><dt>|∇f|</dt><dd>{fmt(gradientLength, 3)}</dd></div>
                </dl>
                <p className="se-plane">
                  Tangent plane: z = {fmt(probeInfo.z)} {planeTerm(probeInfo.fx, 'x', probeInfo.x)} {planeTerm(probeInfo.fy, 'y', probeInfo.y)}
                </p>
                <button type="button" className="se-button se-button--quiet" onClick={() => setProbe(null)}>Clear point</button>
              </>
            ) : probe ? (
              <>
                <p className="se-note">f is undefined at ({fmt(probe.x)}, {fmt(probe.y)}) right now.</p>
                <button type="button" className="se-button se-button--quiet" onClick={() => setProbe(null)}>Clear point</button>
              </>
            ) : (
              <p className="se-note">Click anywhere on the surface to pin a point. You’ll get its coordinates, both partial derivatives and the tangent plane there.</p>
            )}
          </section>

          <p className="se-keys">
            Keyboard (click the plot first): <kbd>←</kbd> <kbd>→</kbd> <kbd>↑</kbd> <kbd>↓</kbd> orbit · <kbd>+</kbd> <kbd>−</kbd> zoom · <kbd>0</kbd> reset
          </p>
        </aside>
      </div>
    </div>
  );
};

export default SurfaceExplorer;
