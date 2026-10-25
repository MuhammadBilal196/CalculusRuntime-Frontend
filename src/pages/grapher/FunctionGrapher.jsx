import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  SUPPORTED_FUNCTIONS,
  derivative,
  findKeyPoints,
  fitYRange,
  formatNumber,
  niceTicks,
  parseExpression,
  sampleCurve,
} from "../../utils/grapherMath";
import "./FunctionGrapher.css";

/**
 * Function Grapher — /grapher
 * Plot up to five functions y = f(x). Drag to pan, scroll / pinch / buttons to zoom,
 * hover (or use the arrow keys) to trace values. Optional derivative curves,
 * tangent line at the cursor, key points (roots, max/min, y-intercept) and a
 * slider parameter "a". No external libraries; expressions are parsed safely (no eval).
 */

const COLORS = ["#2563eb", "#dc2626", "#16a34a", "#9333ea", "#ea580c"];
const MAX_FUNCTIONS = 5;
const DEFAULT_VIEW = { xMin: -10, xMax: 10, yMin: -7, yMax: 7 };
const STORAGE_KEY = "calcvoyager:grapher:v1";
const PRESETS = [
  { label: "sin x", expr: "sin(x)" },
  { label: "x³ − 3x", expr: "x^3 - 3x" },
  { label: "1/x", expr: "1/x" },
  { label: "e^(−x²)", expr: "e^(-x^2)" },
  { label: "ln x", expr: "ln(x)" },
  { label: "tan x", expr: "tan(x)" },
  { label: "|x|", expr: "|x|" },
  { label: "a·sin(x)", expr: "a*sin(x)" },
];

let nextId = 1;
const newFn = (expr = "", colorIndex = 0) => ({
  id: nextId++,
  expr,
  color: COLORS[colorIndex % COLORS.length],
  visible: true,
  showDerivative: false,
});

function loadSaved() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "null");
    if (saved && Array.isArray(saved.functions) && saved.functions.length) {
      return {
        functions: saved.functions.slice(0, MAX_FUNCTIONS).map((f, i) => ({
          ...newFn(String(f.expr || ""), i),
          visible: f.visible !== false,
          showDerivative: !!f.showDerivative,
        })),
        a: Number.isFinite(saved.a) ? saved.a : 1,
      };
    }
  } catch {
    /* storage unavailable or damaged — start fresh */
  }
  return { functions: [newFn("sin(x)", 0), newFn("x^2/4 - 2", 1)], a: 1 };
}

function readThemeColors(el) {
  const css = el ? getComputedStyle(el) : null;
  const v = (name, fallback) => (css && css.getPropertyValue(name).trim()) || fallback;
  return {
    bg: v("--fg-canvas", "#ffffff"),
    grid: v("--fg-grid", "#eef2f7"),
    gridMajor: v("--fg-grid-major", "#dbe3ee"),
    axis: v("--fg-axis", "#475569"),
    text: v("--fg-muted", "#64748b"),
    cursor: v("--fg-cursor", "rgba(100,116,139,0.6)"),
  };
}

function FunctionGrapher() {
  const initial = useMemo(loadSaved, []);
  const [functions, setFunctions] = useState(initial.functions);
  const [activeId, setActiveId] = useState(initial.functions[0]?.id);
  const [a, setA] = useState(initial.a);
  const [view, setView] = useState(DEFAULT_VIEW);
  const [showKeyPoints, setShowKeyPoints] = useState(true);
  const [showTangent, setShowTangent] = useState(false);
  const [cursorX, setCursorX] = useState(null);
  const [size, setSize] = useState({ width: 800, height: 520 });
  const [themeTick, setThemeTick] = useState(0);

  const wrapRef = useRef(null);
  const canvasRef = useRef(null);
  const dragRef = useRef(null);
  const pointersRef = useRef(new Map());

  /* ── Parse every expression (cheap; only when text changes) ── */
  const parsed = useMemo(
    () => functions.map((f) => ({ ...f, result: parseExpression(f.expr) })),
    [functions],
  );
  const drawable = parsed.filter((f) => f.visible && f.result.ok);
  const usesA = parsed.some((f) => f.result.ok && f.result.usesA);
  const active = parsed.find((f) => f.id === activeId) || parsed[0];

  /* ── Save expressions for next visit ── */
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        functions: functions.map(({ expr, visible, showDerivative }) => ({ expr, visible, showDerivative })),
        a,
      }));
    } catch {
      /* ignore — saving is a convenience only */
    }
  }, [functions, a]);

  /* ── Canvas size follows the container ── */
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;
    const measure = () => {
      const width = Math.max(280, Math.floor(el.clientWidth));
      const height = Math.round(Math.min(560, Math.max(300, width * 0.62)));
      setSize((s) => (s.width === width && s.height === height ? s : { width, height }));
    };
    measure();
    if (typeof ResizeObserver !== "undefined") {
      const ro = new ResizeObserver(measure);
      ro.observe(el);
      return () => ro.disconnect();
    }
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  /* ── Redraw when the site theme changes ── */
  useEffect(() => {
    if (typeof MutationObserver === "undefined") return undefined;
    const mo = new MutationObserver(() => setThemeTick((t) => t + 1));
    [document.documentElement, document.body].forEach((node) =>
      mo.observe(node, { attributes: true, attributeFilter: ["data-theme", "class"] }));
    return () => mo.disconnect();
  }, []);

  /* ── Coordinate transforms ── */
  const toPx = useCallback((x, y) => ({
    px: ((x - view.xMin) / (view.xMax - view.xMin)) * size.width,
    py: ((view.yMax - y) / (view.yMax - view.yMin)) * size.height,
  }), [view, size]);
  const toX = useCallback((px) => view.xMin + (px / size.width) * (view.xMax - view.xMin), [view, size]);
  const toY = useCallback((py) => view.yMax - (py / size.height) * (view.yMax - view.yMin), [view, size]);

  /* ── Key points for the active function ── */
  const keyPoints = useMemo(() => {
    if (!active || !active.result.ok || !active.visible) return null;
    return findKeyPoints(active.result.fn, { xMin: view.xMin, xMax: view.xMax, a });
  }, [active, view.xMin, view.xMax, a]);

  /* ── Draw ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = Math.round(size.width * dpr);
    canvas.height = Math.round(size.height * dpr);
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const c = readThemeColors(wrapRef.current);
    const { width, height } = size;

    ctx.fillStyle = c.bg;
    ctx.fillRect(0, 0, width, height);

    // Grid
    const xt = niceTicks(view.xMin, view.xMax, Math.max(4, Math.round(width / 90)));
    const yt = niceTicks(view.yMin, view.yMax, Math.max(4, Math.round(height / 70)));
    ctx.lineWidth = 1;
    const minor = (ticks, step, vertical) => {
      ctx.strokeStyle = c.grid;
      ctx.beginPath();
      const sub = step / 5;
      const start = vertical ? view.xMin : view.yMin;
      const end = vertical ? view.xMax : view.yMax;
      for (let v = Math.ceil(start / sub) * sub; v <= end; v += sub) {
        if (vertical) { const { px } = toPx(v, 0); ctx.moveTo(Math.round(px) + 0.5, 0); ctx.lineTo(Math.round(px) + 0.5, height); }
        else { const { py } = toPx(0, v); ctx.moveTo(0, Math.round(py) + 0.5); ctx.lineTo(width, Math.round(py) + 0.5); }
      }
      ctx.stroke();
      ctx.strokeStyle = c.gridMajor;
      ctx.beginPath();
      ticks.forEach((v) => {
        if (vertical) { const { px } = toPx(v, 0); ctx.moveTo(Math.round(px) + 0.5, 0); ctx.lineTo(Math.round(px) + 0.5, height); }
        else { const { py } = toPx(0, v); ctx.moveTo(0, Math.round(py) + 0.5); ctx.lineTo(width, Math.round(py) + 0.5); }
      });
      ctx.stroke();
    };
    minor(xt.ticks, xt.step, true);
    minor(yt.ticks, yt.step, false);

    // Axes (pinned to the edge when the origin is off-screen, so labels stay visible)
    const origin = toPx(0, 0);
    const axisX = Math.min(height - 1, Math.max(0, origin.py));
    const axisY = Math.min(width - 1, Math.max(0, origin.px));
    ctx.strokeStyle = c.axis;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    if (origin.py >= 0 && origin.py <= height) { ctx.moveTo(0, origin.py); ctx.lineTo(width, origin.py); }
    if (origin.px >= 0 && origin.px <= width) { ctx.moveTo(origin.px, 0); ctx.lineTo(origin.px, height); }
    ctx.stroke();

    // Tick labels
    ctx.fillStyle = c.text;
    ctx.font = "11px Inter, system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    const labelY = Math.min(height - 14, axisX + 4);
    xt.ticks.forEach((v) => {
      if (v === 0) return;
      const { px } = toPx(v, 0);
      if (px < 12 || px > width - 12) return;
      ctx.fillText(formatNumber(v, xt.step), px, labelY);
    });
    ctx.textAlign = axisY > width - 40 ? "right" : "left";
    ctx.textBaseline = "middle";
    const labelX = axisY > width - 40 ? axisY - 4 : axisY + 4;
    yt.ticks.forEach((v) => {
      if (v === 0) return;
      const { py } = toPx(0, v);
      if (py < 10 || py > height - 10) return;
      ctx.fillText(formatNumber(v, yt.step), labelX, py);
    });
    if (origin.px >= 0 && origin.px <= width && origin.py >= 0 && origin.py <= height) {
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.fillText("0", origin.px + 4, origin.py + 4);
    }

    // Curves
    const samples = Math.min(2000, Math.max(400, Math.round(width * 1.5)));
    const plot = (fn, color, dashed) => {
      const segments = sampleCurve(fn, { ...view, samples, a });
      ctx.strokeStyle = color;
      ctx.lineWidth = dashed ? 1.75 : 2.5;
      ctx.setLineDash(dashed ? [6, 5] : []);
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      segments.forEach((seg) => {
        ctx.beginPath();
        seg.forEach((p, i) => {
          const { px, py } = toPx(p.x, p.y);
          if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        });
        ctx.stroke();
      });
      ctx.setLineDash([]);
    };
    drawable.forEach((f) => {
      plot(f.result.fn, f.color, false);
      if (f.showDerivative) plot((x, p) => derivative(f.result.fn, x, p), f.color, true);
    });

    // Key points of the active function
    if (showKeyPoints && keyPoints && active?.visible) {
      const dot = (x, y, fill) => {
        const { px, py } = toPx(x, y);
        if (px < -5 || px > width + 5 || py < -5 || py > height + 5) return;
        ctx.beginPath();
        ctx.arc(px, py, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = fill;
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = c.bg;
        ctx.stroke();
      };
      keyPoints.roots.forEach((x) => dot(x, 0, active.color));
      keyPoints.maxima.forEach((p) => dot(p.x, p.y, active.color));
      keyPoints.minima.forEach((p) => dot(p.x, p.y, active.color));
      if (keyPoints.yIntercept !== null) dot(0, keyPoints.yIntercept, active.color);
    }

    // Trace line, tangent and value dots at the cursor
    if (cursorX !== null && cursorX >= view.xMin && cursorX <= view.xMax) {
      const { px } = toPx(cursorX, 0);
      ctx.strokeStyle = c.cursor;
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 4]);
      ctx.beginPath();
      ctx.moveTo(px, 0);
      ctx.lineTo(px, height);
      ctx.stroke();
      ctx.setLineDash([]);

      if (showTangent && active?.visible && active.result.ok) {
        const y0 = active.result.fn(cursorX, a);
        const m = derivative(active.result.fn, cursorX, a);
        if (Number.isFinite(y0) && Number.isFinite(m)) {
          const p1 = toPx(view.xMin, y0 + m * (view.xMin - cursorX));
          const p2 = toPx(view.xMax, y0 + m * (view.xMax - cursorX));
          ctx.strokeStyle = active.color;
          ctx.globalAlpha = 0.55;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }

      drawable.forEach((f) => {
        const y = f.result.fn(cursorX, a);
        if (!Number.isFinite(y)) return;
        const p = toPx(cursorX, y);
        if (p.py < -5 || p.py > height + 5) return;
        ctx.beginPath();
        ctx.arc(p.px, p.py, 5, 0, Math.PI * 2);
        ctx.fillStyle = c.bg;
        ctx.fill();
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = f.color;
        ctx.stroke();
      });
    }
    // themeTick is read so the effect re-runs after a theme switch
  }, [size, view, drawable, a, cursorX, showTangent, showKeyPoints, keyPoints, active, toPx, themeTick]);

  /* ── View helpers ── */
  const zoomAt = useCallback((factor, cx, cy) => {
    setView((v) => {
      const fx = cx ?? (v.xMin + v.xMax) / 2;
      const fy = cy ?? (v.yMin + v.yMax) / 2;
      const nx = (v.xMax - v.xMin) * factor;
      const ny = (v.yMax - v.yMin) * factor;
      if (nx < 1e-6 || nx > 1e6 || ny < 1e-6 || ny > 1e6) return v;
      return {
        xMin: fx - (fx - v.xMin) * factor,
        xMax: fx + (v.xMax - fx) * factor,
        yMin: fy - (fy - v.yMin) * factor,
        yMax: fy + (v.yMax - fy) * factor,
      };
    });
  }, []);

  const panBy = useCallback((dxUnits, dyUnits) => {
    setView((v) => ({ xMin: v.xMin + dxUnits, xMax: v.xMax + dxUnits, yMin: v.yMin + dyUnits, yMax: v.yMax + dyUnits }));
  }, []);

  const fitY = () => {
    const range = fitYRange(drawable.map((f) => f.result.fn), { xMin: view.xMin, xMax: view.xMax, a });
    if (range) setView((v) => ({ ...v, ...range }));
  };

  /* ── Mouse wheel zoom (needs a non-passive listener to stop page scroll) ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const onWheel = (e) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const factor = Math.exp(Math.max(-0.5, Math.min(0.5, e.deltaY * 0.0015)));
      zoomAt(factor, toX(e.clientX - rect.left), toY(e.clientY - rect.top));
    };
    canvas.addEventListener("wheel", onWheel, { passive: false });
    return () => canvas.removeEventListener("wheel", onWheel);
  }, [zoomAt, toX, toY]);

  /* ── Pointer: drag to pan, pinch to zoom, hover to trace ── */
  const localPoint = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return { px: e.clientX - rect.left, py: e.clientY - rect.top };
  };

  const onPointerDown = (e) => {
    canvasRef.current.setPointerCapture?.(e.pointerId);
    pointersRef.current.set(e.pointerId, localPoint(e));
    if (pointersRef.current.size === 1) {
      dragRef.current = { ...localPoint(e), view };
    } else {
      dragRef.current = null; // second finger: switch to pinch
    }
  };

  const onPointerMove = (e) => {
    const pt = localPoint(e);
    const pointers = pointersRef.current;
    if (pointers.has(e.pointerId)) {
      const before = [...pointers.values()];
      pointers.set(e.pointerId, pt);
      if (pointers.size === 2) {
        const after = [...pointers.values()];
        const dist = (p) => Math.hypot(p[0].px - p[1].px, p[0].py - p[1].py);
        const d0 = dist(before);
        const d1 = dist(after);
        if (d0 > 0 && d1 > 0) {
          const mid = { px: (after[0].px + after[1].px) / 2, py: (after[0].py + after[1].py) / 2 };
          zoomAt(d0 / d1, toX(mid.px), toY(mid.py));
        }
        return;
      }
      const drag = dragRef.current;
      if (drag) {
        const v = drag.view;
        const ux = ((pt.px - drag.px) / size.width) * (v.xMax - v.xMin);
        const uy = ((pt.py - drag.py) / size.height) * (v.yMax - v.yMin);
        setView({ xMin: v.xMin - ux, xMax: v.xMax - ux, yMin: v.yMin + uy, yMax: v.yMax + uy });
        setCursorX(null);
        return;
      }
    }
    if (e.pointerType === "mouse" || pointers.size === 0) setCursorX(toX(pt.px));
  };

  const onPointerUp = (e) => {
    pointersRef.current.delete(e.pointerId);
    const drag = dragRef.current;
    // A tap without movement on touch screens sets the trace point
    if (drag && e.pointerType !== "mouse") {
      const pt = localPoint(e);
      if (Math.hypot(pt.px - drag.px, pt.py - drag.py) < 6) setCursorX(toX(pt.px));
    }
    dragRef.current = pointersRef.current.size === 1
      ? { ...[...pointersRef.current.values()][0], view }
      : null;
  };

  /* ── Keyboard on the canvas ── */
  const onKeyDown = (e) => {
    const w = view.xMax - view.xMin;
    const h = view.yMax - view.yMin;
    const handled = {
      ArrowLeft: () => (e.shiftKey ? panBy(-w * 0.1, 0) : setCursorX((x) => (x ?? (view.xMin + view.xMax) / 2) - w / 100)),
      ArrowRight: () => (e.shiftKey ? panBy(w * 0.1, 0) : setCursorX((x) => (x ?? (view.xMin + view.xMax) / 2) + w / 100)),
      ArrowUp: () => panBy(0, h * 0.1),
      ArrowDown: () => panBy(0, -h * 0.1),
      "+": () => zoomAt(0.8),
      "=": () => zoomAt(0.8),
      "-": () => zoomAt(1.25),
      0: () => setView(DEFAULT_VIEW),
      Escape: () => setCursorX(null),
    }[e.key];
    if (handled) {
      e.preventDefault();
      handled();
    }
  };

  /* ── Function list editing ── */
  const update = (id, patch) => setFunctions((list) => list.map((f) => (f.id === id ? { ...f, ...patch } : f)));
  const addFunction = (expr = "") => {
    if (functions.length >= MAX_FUNCTIONS) return;
    const used = new Set(functions.map((f) => f.color));
    const colorIndex = Math.max(0, COLORS.findIndex((col) => !used.has(col)));
    const f = newFn(expr, colorIndex);
    setFunctions((list) => [...list, f]);
    setActiveId(f.id);
  };
  const removeFunction = (id) => {
    const next = functions.filter((f) => f.id !== id);
    if (!next.length) {
      const blank = newFn("", 0);
      setFunctions([blank]);
      setActiveId(blank.id);
      return;
    }
    setFunctions(next);
    if (id === activeId) setActiveId(next[0].id);
  };
  const applyPreset = (expr) => {
    if (active && !active.expr.trim()) update(active.id, { expr, visible: true });
    else if (functions.length < MAX_FUNCTIONS) addFunction(expr);
    else if (active) update(active.id, { expr, visible: true });
  };

  /* ── Values at the trace point ── */
  const traceRows = cursorX === null ? [] : drawable.map((f) => {
    const y = f.result.fn(cursorX, a);
    const slope = derivative(f.result.fn, cursorX, a);
    return { id: f.id, color: f.color, expr: f.expr, y, slope };
  });

  const fmt = (v) => (Number.isFinite(v) ? formatNumber(Number(v.toPrecision(5))) : "undefined");

  return (
    <main className="fg-page">
      <header className="fg-head">
        <p className="fg-eyebrow">Interactive tool</p>
        <h1 className="fg-title">Function Grapher</h1>
        <p className="fg-muted">
          Type a function of <strong>x</strong> to plot it. Drag to move, scroll or pinch to zoom,
          and hover to read values.
        </p>
      </header>

      <div className="fg-layout">
        {/* ── Left: functions & options ── */}
        <aside className="fg-side">
          <section className="fg-panel" aria-label="Functions">
            <h2 className="fg-h2">Functions</h2>
            <ul className="fg-fn-list">
              {parsed.map((f, i) => {
                const inputId = `fg-fn-${f.id}`;
                const invalid = !f.result.ok && !f.result.empty;
                return (
                  <li
                    key={f.id}
                    className={`fg-fn ${f.id === active?.id ? "fg-fn--active" : ""}`}
                    style={{ "--fg-fn-color": f.color }}
                  >
                    <div className="fg-fn-row">
                      <button
                        type="button"
                        className={`fg-swatch ${f.visible ? "" : "fg-swatch--off"}`}
                        aria-pressed={f.visible}
                        aria-label={`${f.visible ? "Hide" : "Show"} function ${i + 1}`}
                        title={f.visible ? "Hide" : "Show"}
                        onClick={() => update(f.id, { visible: !f.visible })}
                      />
                      <label htmlFor={inputId} className="fg-fn-label">y{i + 1} =</label>
                      <input
                        id={inputId}
                        className={`fg-input ${invalid ? "fg-input--error" : ""}`}
                        value={f.expr}
                        placeholder="e.g. x^2 - 3x + 1"
                        spellCheck={false}
                        autoComplete="off"
                        aria-invalid={invalid || undefined}
                        aria-describedby={invalid ? `${inputId}-err` : undefined}
                        onFocus={() => setActiveId(f.id)}
                        onChange={(e) => update(f.id, { expr: e.target.value })}
                      />
                      <button
                        type="button"
                        className="fg-icon-btn"
                        aria-label={`Remove function ${i + 1}`}
                        title="Remove"
                        onClick={() => removeFunction(f.id)}
                      >
                        ×
                      </button>
                    </div>
                    {invalid && <p id={`${inputId}-err`} className="fg-error" role="alert">{f.result.error}</p>}
                    <label className="fg-check">
                      <input
                        type="checkbox"
                        checked={f.showDerivative}
                        onChange={(e) => update(f.id, { showDerivative: e.target.checked })}
                      />
                      Show derivative y{i + 1}′ (dashed)
                    </label>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              className="fg-btn fg-btn--ghost"
              onClick={() => addFunction("")}
              disabled={functions.length >= MAX_FUNCTIONS}
            >
              + Add function {functions.length >= MAX_FUNCTIONS ? `(max ${MAX_FUNCTIONS})` : ""}
            </button>
          </section>

          {usesA && (
            <section className="fg-panel" aria-label="Parameter a">
              <label className="fg-h2" htmlFor="fg-param-a">Parameter a = {formatNumber(a, 0.1)}</label>
              <input
                id="fg-param-a"
                type="range"
                min="-10"
                max="10"
                step="0.1"
                value={a}
                onChange={(e) => setA(Number(e.target.value))}
                className="fg-range"
              />
              <p className="fg-muted fg-small">Drag to see how a changes every function that uses it.</p>
            </section>
          )}

          <section className="fg-panel" aria-label="Examples">
            <h2 className="fg-h2">Examples</h2>
            <div className="fg-chips">
              {PRESETS.map((p) => (
                <button key={p.expr} type="button" className="fg-chip" onClick={() => applyPreset(p.expr)}>
                  {p.label}
                </button>
              ))}
            </div>
          </section>

          <details className="fg-panel fg-help">
            <summary>How to type functions</summary>
            <ul>
              <li><code>x^2</code> power, <code>2x</code> and <code>3sin(x)</code> multiply automatically</li>
              <li><code>sqrt(x)</code>, <code>|x|</code> or <code>abs(x)</code>, <code>e^x</code>, <code>ln(x)</code>, <code>log(x)</code> (base 10)</li>
              <li>Constants: <code>pi</code>, <code>e</code>. Slider parameter: <code>a</code></li>
              <li>Also: {SUPPORTED_FUNCTIONS.join(", ")}</li>
            </ul>
          </details>
        </aside>

        {/* ── Right: graph ── */}
        <section className="fg-main" aria-label="Graph">
          <div className="fg-toolbar">
            <div className="fg-toolbar-group" role="group" aria-label="Zoom">
              <button type="button" className="fg-btn" onClick={() => zoomAt(0.8)} aria-label="Zoom in">+</button>
              <button type="button" className="fg-btn" onClick={() => zoomAt(1.25)} aria-label="Zoom out">−</button>
              <button type="button" className="fg-btn" onClick={() => setView(DEFAULT_VIEW)}>Reset</button>
              <button type="button" className="fg-btn" onClick={fitY} disabled={!drawable.length}>Fit y</button>
            </div>
            <div className="fg-toolbar-group">
              <label className="fg-check">
                <input type="checkbox" checked={showKeyPoints} onChange={(e) => setShowKeyPoints(e.target.checked)} />
                Key points
              </label>
              <label className="fg-check">
                <input type="checkbox" checked={showTangent} onChange={(e) => setShowTangent(e.target.checked)} />
                Tangent at cursor
              </label>
            </div>
          </div>

          <div className="fg-canvas-wrap" ref={wrapRef}>
            <canvas
              ref={canvasRef}
              className="fg-canvas"
              style={{ width: size.width, height: size.height }}
              tabIndex={0}
              role="img"
              aria-label={`Graph of ${drawable.map((f) => `y = ${f.expr}`).join(", ") || "no functions"}, x from ${formatNumber(view.xMin, 0.1)} to ${formatNumber(view.xMax, 0.1)}. Use left and right arrows to trace, shift+arrows or up/down to move, plus and minus to zoom.`}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onPointerLeave={(e) => { if (e.pointerType === "mouse" && !dragRef.current) setCursorX(null); }}
              onKeyDown={onKeyDown}
            />
          </div>

          {/* Trace readout */}
          <div className="fg-readout" aria-live="polite">
            {cursorX === null ? (
              <span className="fg-muted">Hover over the graph (or tap it) to read values.</span>
            ) : (
              <>
                <span className="fg-readout-x">x = {fmt(cursorX)}</span>
                {traceRows.map((r, i) => (
                  <span key={r.id} className="fg-readout-item" style={{ "--fg-fn-color": r.color }}>
                    <span className="fg-dot" aria-hidden="true" />
                    y{parsed.findIndex((f) => f.id === r.id) + 1 || i + 1} = {fmt(r.y)}
                    <span className="fg-muted"> · slope {fmt(r.slope)}</span>
                  </span>
                ))}
              </>
            )}
          </div>

        </section>

        {/* ── Below the graph: key points ── */}
        <div className="fg-below">
          {/* Key points list for the active function */}
          {active && active.result.ok && active.visible && keyPoints && (
            <section className="fg-panel fg-keys" aria-label="Key points">
              <h2 className="fg-h2">
                Key points of <span style={{ color: active.color }}>y{parsed.indexOf(active) + 1} = {active.expr}</span>
                <span className="fg-muted fg-small"> (in the current view, approximate)</span>
              </h2>
              <div className="fg-keys-grid">
                <div>
                  <h3>Roots (y = 0)</h3>
                  <p>{keyPoints.roots.length ? keyPoints.roots.map((r) => `x ≈ ${fmt(r)}`).join(", ") : "None in view"}</p>
                </div>
                <div>
                  <h3>Local maximum</h3>
                  <p>{keyPoints.maxima.length ? keyPoints.maxima.map((p) => `(${fmt(p.x)}, ${fmt(p.y)})`).join(", ") : "None in view"}</p>
                </div>
                <div>
                  <h3>Local minimum</h3>
                  <p>{keyPoints.minima.length ? keyPoints.minima.map((p) => `(${fmt(p.x)}, ${fmt(p.y)})`).join(", ") : "None in view"}</p>
                </div>
                <div>
                  <h3>y-intercept</h3>
                  <p>{keyPoints.yIntercept !== null ? `(0, ${fmt(keyPoints.yIntercept)})` : "Not defined / not in view"}</p>
                </div>
              </div>
              <p className="fg-muted fg-small">Click inside another function's box to see its key points.</p>
            </section>
          )}

          <p className="fg-muted fg-small fg-foot">
            Want to practise? Try the <Link to="/practice">Practice Arena</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}

export default FunctionGrapher;
