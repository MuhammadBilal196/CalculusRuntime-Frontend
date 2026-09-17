import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { useTheme } from "../../context/ThemeContext";
import "./AnalyticVectorLab.css";

function MathBlock({ math }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(math, containerRef.current, {
          throwOnError: false,
          displayMode: true,
        });
      } catch (err) {
        if (containerRef.current) {
          containerRef.current.textContent = math;
        }
      }
    }
  }, [math]);
  return <div ref={containerRef} className="avl-math-display" />;
}

function InlineMath({ math }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      try {
        katex.render(math, containerRef.current, { throwOnError: false, displayMode: false });
      } catch (err) {
        if (containerRef.current) {
          containerRef.current.textContent = math;
        }
      }
    }
  }, [math]);
  return <span ref={containerRef} style={{ display: "inline-block", padding: "0 2px" }} />;
}

const CONIC_PRESETS = [
  { name: "Circle", A: 1, B: 0, C: 1, D: 0, E: 0, F: -16, desc: "x² + y² = 16" },
  { name: "Ellipse", A: 4, B: 0, C: 9, D: 0, E: 0, F: -36, desc: "4x² + 9y² = 36" },
  { name: "Rotated Ellipse", A: 5, B: -6, C: 5, D: 0, E: 0, F: -32, desc: "5x² - 6xy + 5y² = 32" },
  { name: "Hyperbola", A: 1, B: 0, C: -1, D: 0, E: 0, F: -9, desc: "x² - y² = 9" },
  { name: "Rotated Hyperbola", A: 0, B: 2, C: 0, D: 0, E: 0, F: -8, desc: "2xy = 8" },
  { name: "Parabola", A: 1, B: 0, C: 0, D: 0, E: -2, F: 0, desc: "x² - 2y = 0" },
  { name: "Rotated Parabola", A: 1, B: 2, C: 1, D: -4, E: 4, F: 0, desc: "(x+y)² - 4x + 4y = 0" },
];

const POLAR_PRESETS = [
  { name: "Circle (e=0)", e: 0.001, d: 3, func: "cos", sign: "+" },
  { name: "Ellipse (e=0.6)", e: 0.6, d: 2.5, func: "cos", sign: "+" },
  { name: "Parabola (e=1.0)", e: 1.0, d: 2.0, func: "cos", sign: "+" },
  { name: "Hyperbola (e=1.6)", e: 1.6, d: 1.8, func: "cos", sign: "+" },
  { name: "Vertical Directrix", e: 0.7, d: 3.0, func: "sin", sign: "-" },
];

export default function AnalyticVectorLab() {
  const { darkMode } = useTheme();
  const [activeTab, setActiveTab] = useState("conics2d");

  // ----------------------------------------------------
  // Tab 1: 2D Conics & Rotation of Axes & Polar Conics
  // ----------------------------------------------------
  const [coefA, setCoefA] = useState(1);
  const [coefB, setCoefB] = useState(2);
  const [coefC, setCoefC] = useState(1);
  const [coefD, setCoefD] = useState(-4);
  const [coefE, setCoefE] = useState(0);
  const [coefF, setCoefF] = useState(0);

  // 2D Conic Interactive Viewport & Feature Toggles
  const [zoom2D, setZoom2D] = useState(24);
  const [showRotatedAxes, setShowRotatedAxes] = useState(true);
  const [showCenterFoci, setShowCenterFoci] = useState(true);
  const [showAsymptotes, setShowAsymptotes] = useState(true);
  const [showTangentInspector, setShowTangentInspector] = useState(true);
  const [hover2D, setHover2D] = useState(null);

  // Polar Conic Parameters
  const [polarE, setPolarE] = useState(0.75); // Eccentricity
  const [polarD, setPolarD] = useState(2);    // Directrix distance
  const [polarFunc, setPolarFunc] = useState("cos"); // cos or sin
  const [polarSign, setPolarSign] = useState("+");

  // Polar Conic Interactive Viewport & Feature Toggles
  const [zoomPolar, setZoomPolar] = useState(26);
  const [showPolarRays, setShowPolarRays] = useState(true);
  const [showDirectrix, setShowDirectrix] = useState(true);
  const [showPolarFocus, setShowPolarFocus] = useState(true);
  const [hoverPolar, setHoverPolar] = useState(null);

  // ----------------------------------------------------
  // Tab 2: 3D Vector Geometry & Distance Calculator
  // ----------------------------------------------------
  // Vector U
  const [uX, setUX] = useState(2);
  const [uY, setUY] = useState(3);
  const [uZ, setUZ] = useState(1);

  // Vector V
  const [vX, setVX] = useState(-1);
  const [vY, setVY] = useState(4);
  const [vZ, setVZ] = useState(2);

  // Vector W (for scalar triple product)
  const [wX, setWX] = useState(0);
  const [wY, setWY] = useState(2);
  const [wZ, setWZ] = useState(4);

  // 3D Interactive Viewport State (Mouse Orbit, Hover & Zoom)
  const [rotPitch, setRotPitch] = useState(24); // vertical elevation angle (-85° to 85°)
  const [rotYaw, setRotYaw] = useState(45);     // horizontal azimuth angle (0° to 360°)
  const [zoom3D, setZoom3D] = useState(30);     // scale (pixels per unit, larger graph)
  const [autoRotate3D, setAutoRotate3D] = useState(false);
  const [rotSpeed, setRotSpeed] = useState(2.0); // 3D auto-orbit speed (degrees per frame)
  const [hoveredVector, setHoveredVector] = useState(null); // 'u' | 'v' | 'w' | null
  const [hoverInfo, setHoverInfo] = useState(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0, pitch: 24, yaw: 45 });
  const hoverOffsetRef = useRef({ pitch: 0, yaw: 0 });
  const projectedEndpointsRef = useRef({ u: [0, 0], v: [0, 0], w: [0, 0] });

  // 3D Skew Lines
  // L1: P1 + t * V1
  const [p1X, setP1X] = useState(1);
  const [p1Y, setP1Y] = useState(2);
  const [p1Z, setP1Z] = useState(-1);

  const [v1X, setV1X] = useState(2);
  const [v1Y, setV1Y] = useState(-1);
  const [v1Z, setV1Z] = useState(3);

  // L2: P2 + s * V2
  const [p2X, setP2X] = useState(4);
  const [p2Y, setP2Y] = useState(0);
  const [p2Z, setP2Z] = useState(2);

  const [v2X, setV2X] = useState(1);
  const [v2Y, setV2Y] = useState(3);
  const [v2Z, setV2Z] = useState(-2);

  // Point to Plane Distance
  const [ptX, setPtX] = useState(3);
  const [ptY, setPtY] = useState(-2);
  const [ptZ, setPtZ] = useState(4);

  const [planeA, setPlaneA] = useState(2);
  const [planeB, setPlaneB] = useState(-1);
  const [planeC, setPlaneC] = useState(2);
  const [planeD, setPlaneD] = useState(-6);

  // Canvas Refs
  const canvas2dRef = useRef(null);
  const polarCanvasRef = useRef(null);
  const vector3dCanvasRef = useRef(null);

  // ====================================================
  // Math Calculations: 2D Conics
  // ====================================================
  const A = parseFloat(coefA) || 0;
  const B = parseFloat(coefB) || 0;
  const C = parseFloat(coefC) || 0;
  const D = parseFloat(coefD) || 0;
  const E = parseFloat(coefE) || 0;
  const F = parseFloat(coefF) || 0;

  const disc = B * B - 4 * A * C;

  let conicType = "";
  let badgeColor = "#0056D2";
  if (disc < -1e-7) {
    conicType = A === C && B === 0 ? "Circle / Ellipse" : "Ellipse";
    badgeColor = "#0284c7";
  } else if (Math.abs(disc) <= 1e-7) {
    conicType = "Parabola";
    badgeColor = "#0056D2";
  } else {
    conicType = "Hyperbola";
    badgeColor = "#2563eb";
  }

  // Rotation angle theta
  let rotAngleRad = 0;
  if (B !== 0) {
    if (A === C) {
      rotAngleRad = Math.PI / 4;
    } else {
      rotAngleRad = 0.5 * Math.atan2(B, A - C);
    }
  }
  const rotAngleDeg = (rotAngleRad * 180) / Math.PI;

  // Transformed coefficients after rotation
  const cosT = Math.cos(rotAngleRad);
  const sinT = Math.sin(rotAngleRad);

  const A_prime = A * cosT * cosT + B * cosT * sinT + C * sinT * sinT;
  const C_prime = A * sinT * sinT - B * cosT * sinT + C * cosT * cosT;
  const D_prime = D * cosT + E * sinT;
  const E_prime = -D * sinT + E * cosT;
  const F_prime = F;

  // Central conic analytical metrics: Center, Foci, and Asymptotes
  const conicMetrics = useMemo(() => {
    const det = 4 * A * C - B * B;
    const hasCenter = Math.abs(det) > 1e-5;
    const xc = hasCenter ? (-2 * C * D + B * E) / det : 0;
    const yc = hasCenter ? (-2 * A * E + B * D) / det : 0;

    // Evaluate constant K = -F(xc, yc)
    const K = -(A * xc * xc + B * xc * yc + C * yc * yc + D * xc + E * yc + F);

    let foci = [];
    let vertices = [];
    let asymptoteSlopes = [];

    // If Ellipse (det > 0 and A' * C' > 0 and K / A' > 0)
    if (det > 0 && Math.abs(A_prime) > 1e-5 && Math.abs(C_prime) > 1e-5) {
      const a2 = K / A_prime;
      const b2 = K / C_prime;
      if (a2 > 0 && b2 > 0) {
        const a = Math.sqrt(a2);
        const b = Math.sqrt(b2);
        if (a >= b) {
          const c = Math.sqrt(a * a - b * b);
          foci = [
            [xc + c * cosT, yc + c * sinT],
            [xc - c * cosT, yc - c * sinT],
          ];
          vertices = [
            [xc + a * cosT, yc + a * sinT],
            [xc - a * cosT, yc - a * sinT],
          ];
        } else {
          const c = Math.sqrt(b * b - a * a);
          foci = [
            [xc - c * sinT, yc + c * cosT],
            [xc + c * sinT, yc - c * cosT],
          ];
          vertices = [
            [xc - b * sinT, yc + b * cosT],
            [xc + b * sinT, yc - b * cosT],
          ];
        }
      }
    } else if (det < 0 && Math.abs(C_prime) > 1e-5) {
      // Hyperbola (det < 0)
      const ratio = -A_prime / C_prime;
      if (ratio > 0) {
        const slopePrime = Math.sqrt(ratio);
        const dir1 = [cosT - slopePrime * sinT, sinT + slopePrime * cosT];
        const dir2 = [cosT + slopePrime * sinT, sinT - slopePrime * cosT];
        asymptoteSlopes = [dir1, dir2];
      }
    }

    return { hasCenter, xc, yc, foci, vertices, asymptoteSlopes, det };
  }, [A, B, C, D, E, F, A_prime, C_prime, cosT, sinT]);

  // Draw 2D Conic Canvas
  const draw2DConic = useCallback(() => {
    const canvas = canvas2dRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = darkMode ? "#0b1120" : "#ffffff";
    ctx.fillRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const scale = zoom2D; // pixels per unit

    // 1. Minor & Major Grid Lines
    // Minor Grid (every 1 unit)
    ctx.strokeStyle = darkMode ? "rgba(30, 41, 59, 0.45)" : "rgba(226, 232, 240, 0.65)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    const maxUnitsX = Math.ceil(width / (2 * scale)) + 1;
    const maxUnitsY = Math.ceil(height / (2 * scale)) + 1;

    for (let u = -maxUnitsX; u <= maxUnitsX; u++) {
      if (u % 2 !== 0) {
        const px = centerX + u * scale;
        ctx.moveTo(px, 0); ctx.lineTo(px, height);
      }
    }
    for (let u = -maxUnitsY; u <= maxUnitsY; u++) {
      if (u % 2 !== 0) {
        const py = centerY - u * scale;
        ctx.moveTo(0, py); ctx.lineTo(width, py);
      }
    }
    ctx.stroke();

    // Major Grid (every 2 units)
    ctx.strokeStyle = darkMode ? "rgba(51, 65, 85, 0.7)" : "rgba(203, 213, 225, 0.85)";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    for (let u = -maxUnitsX; u <= maxUnitsX; u += 2) {
      if (u !== 0) {
        const px = centerX + u * scale;
        ctx.moveTo(px, 0); ctx.lineTo(px, height);
      }
    }
    for (let u = -maxUnitsY; u <= maxUnitsY; u += 2) {
      if (u !== 0) {
        const py = centerY - u * scale;
        ctx.moveTo(0, py); ctx.lineTo(width, py);
      }
    }
    ctx.stroke();

    // 2. Numeric Coordinate Ticks along Main Axes
    ctx.font = "600 10px 'JetBrains Mono', monospace";
    ctx.fillStyle = darkMode ? "#94a3b8" : "#64748b";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    for (let u = -maxUnitsX; u <= maxUnitsX; u += 2) {
      if (u !== 0) {
        const px = centerX + u * scale;
        ctx.beginPath(); ctx.moveTo(px, centerY - 3); ctx.lineTo(px, centerY + 3); ctx.stroke();
        ctx.fillText(u.toString(), px, centerY + 5);
      }
    }
    ctx.textAlign = "right";
    ctx.textBaseline = "middle";
    for (let u = -maxUnitsY; u <= maxUnitsY; u += 2) {
      if (u !== 0) {
        const py = centerY - u * scale;
        ctx.beginPath(); ctx.moveTo(centerX - 3, py); ctx.lineTo(centerX + 3, py); ctx.stroke();
        ctx.fillText(u.toString(), centerX - 6, py);
      }
    }

    // Helper: 2D Arrow
    const drawArrow2D = (fromX, fromY, toX, toY, color) => {
      const dx = toX - fromX;
      const dy = toY - fromY;
      const len = Math.hypot(dx, dy);
      if (len < 1e-3) return;
      const ux = dx / len;
      const uy = dy / len;
      const perpX = -uy;
      const perpY = ux;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(toX - ux * 8 + perpX * 4, toY - uy * 8 + perpY * 4);
      ctx.lineTo(toX - ux * 8 - perpX * 4, toY - uy * 8 - perpY * 4);
      ctx.closePath();
      ctx.fill();
    };

    // 3. Original Axes (x, y) with Arrows & Origin Marker
    ctx.strokeStyle = darkMode ? "#94a3b8" : "#475569";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, centerY); ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0); ctx.lineTo(centerX, height);
    ctx.stroke();

    // Origin circle O(0,0)
    ctx.fillStyle = darkMode ? "#94a3b8" : "#475569";
    ctx.beginPath();
    ctx.arc(centerX, centerY, 3, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillText("O", centerX - 7, centerY + 12);

    drawArrow2D(width - 20, centerY, width - 2, centerY, darkMode ? "#94a3b8" : "#475569");
    drawArrow2D(centerX, 20, centerX, 2, darkMode ? "#94a3b8" : "#475569");

    ctx.font = "bold 13px Inter, sans-serif";
    ctx.fillStyle = darkMode ? "#f8fafc" : "#0f172a";
    ctx.fillText("+x", width - 16, centerY - 14);
    ctx.fillText("+y", centerX + 18, 14);

    // 4. Rotated Axes (x', y') with Angle Arc & Readout
    if (showRotatedAxes && B !== 0) {
      ctx.strokeStyle = darkMode ? "#38bdf8" : "#0284c7";
      ctx.lineWidth = 1.8;
      ctx.setLineDash([5, 4]);

      const dirX = Math.cos(rotAngleRad);
      const dirY = -Math.sin(rotAngleRad);
      ctx.beginPath();
      ctx.moveTo(centerX - dirX * width, centerY - dirY * width);
      ctx.lineTo(centerX + dirX * width, centerY + dirY * width);
      ctx.stroke();

      const dirY1X = Math.sin(rotAngleRad);
      const dirY1Y = Math.cos(rotAngleRad);
      ctx.beginPath();
      ctx.moveTo(centerX - dirY1X * height, centerY - dirY1Y * height);
      ctx.lineTo(centerX + dirY1X * height, centerY + dirY1Y * height);
      ctx.stroke();
      ctx.setLineDash([]);

      const rxTipX = centerX + dirX * (Math.min(width, height) * 0.44);
      const rxTipY = centerY + dirY * (Math.min(width, height) * 0.44);
      drawArrow2D(centerX, centerY, rxTipX, rxTipY, darkMode ? "#38bdf8" : "#0284c7");

      ctx.font = "bold 12px Inter, sans-serif";
      ctx.fillStyle = darkMode ? "#38bdf8" : "#0284c7";
      ctx.fillText(`x' (${rotAngleDeg.toFixed(1)}°)`, rxTipX + 8, rxTipY - 8);

      // Angle arc showing theta from +x to +x'
      ctx.strokeStyle = darkMode ? "#38bdf8" : "#0284c7";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const arcR = 38;
      ctx.arc(centerX, centerY, arcR, 0, -rotAngleRad, rotAngleRad > 0);
      ctx.stroke();
      ctx.font = "bold 10px Inter, sans-serif";
      ctx.fillText(
        `θ=${rotAngleDeg.toFixed(1)}°`,
        centerX + arcR * Math.cos(-rotAngleRad / 2) + 8,
        centerY + arcR * Math.sin(-rotAngleRad / 2)
      );
    }

    // 5. Asymptotes for Hyperbola
    if (showAsymptotes && conicMetrics.asymptoteSlopes.length > 0 && conicMetrics.hasCenter) {
      const { xc, yc, asymptoteSlopes } = conicMetrics;
      const cPx = centerX + xc * scale;
      const cPy = centerY - yc * scale;

      ctx.strokeStyle = darkMode ? "rgba(245, 158, 11, 0.8)" : "rgba(217, 119, 6, 0.85)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([6, 5]);

      asymptoteSlopes.forEach((dir) => {
        const len = width + height;
        const dx = dir[0] * len;
        const dy = -dir[1] * len;
        ctx.beginPath();
        ctx.moveTo(cPx - dx, cPy - dy);
        ctx.lineTo(cPx + dx, cPy + dy);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      ctx.font = "italic 11px Inter, sans-serif";
      ctx.fillStyle = darkMode ? "#f59e0b" : "#d97706";
      ctx.fillText("Asymptotes", cPx + 15, cPy - 15);
    }

    // 6. Vector-Smooth Marching Segments Conic Plotting
    ctx.strokeStyle = darkMode ? "#38bdf8" : "#0056D2";
    ctx.lineWidth = 2.4;
    ctx.lineCap = "round";
    ctx.beginPath();

    const cellSize = 3;
    const cols = Math.ceil(width / cellSize);
    const rows = Math.ceil(height / cellSize);

    let prevRowValues = new Float64Array(cols + 1);
    for (let c = 0; c <= cols; c++) {
      const mx = (c * cellSize - centerX) / scale;
      const my = (centerY - 0) / scale;
      prevRowValues[c] = A * mx * mx + B * mx * my + C * my * my + D * mx + E * my + F;
    }

    for (let r = 0; r < rows; r++) {
      const nextY = (r + 1) * cellSize;
      const nextMathY = (centerY - nextY) / scale;
      const currRowValues = new Float64Array(cols + 1);

      for (let c = 0; c <= cols; c++) {
        const mx = (c * cellSize - centerX) / scale;
        currRowValues[c] = A * mx * mx + B * mx * nextMathY + C * nextMathY * nextMathY + D * mx + E * nextMathY + F;
      }

      for (let c = 0; c < cols; c++) {
        const v0 = prevRowValues[c];
        const v1 = prevRowValues[c + 1];
        const v2 = currRowValues[c + 1];
        const v3 = currRowValues[c];

        const px = c * cellSize;
        const py = r * cellSize;

        const edgePts = [];
        if ((v0 <= 0 && v1 > 0) || (v0 > 0 && v1 <= 0)) {
          const t = -v0 / (v1 - v0);
          edgePts.push([px + t * cellSize, py]);
        }
        if ((v1 <= 0 && v2 > 0) || (v1 > 0 && v2 <= 0)) {
          const t = -v1 / (v2 - v1);
          edgePts.push([px + cellSize, py + t * cellSize]);
        }
        if ((v3 <= 0 && v2 > 0) || (v3 > 0 && v2 <= 0)) {
          const t = -v3 / (v2 - v3);
          edgePts.push([px + t * cellSize, py + cellSize]);
        }
        if ((v0 <= 0 && v3 > 0) || (v0 > 0 && v3 <= 0)) {
          const t = -v0 / (v3 - v0);
          edgePts.push([px, py + t * cellSize]);
        }

        if (edgePts.length >= 2) {
          ctx.moveTo(edgePts[0][0], edgePts[0][1]);
          ctx.lineTo(edgePts[1][0], edgePts[1][1]);
        }
      }
      prevRowValues = currRowValues;
    }
    ctx.stroke();

    // 7. Center & Foci / Vertices Markers
    if (showCenterFoci && conicMetrics.hasCenter) {
      const { xc, yc, foci, vertices } = conicMetrics;
      const cPx = centerX + xc * scale;
      const cPy = centerY - yc * scale;

      if (cPx >= -20 && cPx <= width + 20 && cPy >= -20 && cPy <= height + 20) {
        ctx.fillStyle = "#e11d48";
        ctx.beginPath();
        ctx.arc(cPx, cPy, 4.5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.font = "bold 11px Inter, sans-serif";
        ctx.fillText(`Center (${xc.toFixed(2)}, ${yc.toFixed(2)})`, cPx + 8, cPy - 6);
      }

      foci.forEach(([fx, fy], idx) => {
        const fPx = centerX + fx * scale;
        const fPy = centerY - fy * scale;
        if (fPx >= 0 && fPx <= width && fPy >= 0 && fPy <= height) {
          ctx.fillStyle = "#8b5cf6";
          ctx.beginPath();
          ctx.arc(fPx, fPy, 4, 0, 2 * Math.PI);
          ctx.fill();
          ctx.font = "bold 10px Inter, sans-serif";
          ctx.fillText(`F${idx + 1}(${fx.toFixed(1)}, ${fy.toFixed(1)})`, fPx + 7, fPy + 4);
        }
      });

      vertices.forEach(([vx, vy]) => {
        const vPx = centerX + vx * scale;
        const vPy = centerY - vy * scale;
        if (vPx >= 0 && vPx <= width && vPy >= 0 && vPy <= height) {
          ctx.fillStyle = "#059669";
          ctx.beginPath();
          ctx.arc(vPx, vPy, 3.5, 0, 2 * Math.PI);
          ctx.fill();
        }
      });
    }

    // 8. Interactive Tangent Line & Normal Vector Inspector
    if (showTangentInspector && hover2D && hover2D.onCurve) {
      const { ptX, ptY, tangentSlope, normalVec } = hover2D;
      const pPx = centerX + ptX * scale;
      const pPy = centerY - ptY * scale;

      // Tangent Line
      ctx.strokeStyle = "#a855f7";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      if (tangentSlope !== null) {
        const x1 = -maxUnitsX;
        const y1 = ptY + tangentSlope * (x1 - ptX);
        const x2 = maxUnitsX;
        const y2 = ptY + tangentSlope * (x2 - ptX);
        ctx.moveTo(centerX + x1 * scale, centerY - y1 * scale);
        ctx.lineTo(centerX + x2 * scale, centerY - y2 * scale);
      } else {
        ctx.moveTo(pPx, 0);
        ctx.lineTo(pPx, height);
      }
      ctx.stroke();

      // Normal Vector Arrow
      if (normalVec) {
        const normLen = Math.hypot(normalVec[0], normalVec[1]);
        if (normLen > 1e-4) {
          const arrowLen = 45;
          const nx = (normalVec[0] / normLen) * arrowLen;
          const ny = -(normalVec[1] / normLen) * arrowLen;
          ctx.strokeStyle = "#10b981";
          ctx.lineWidth = 2.5;
          ctx.beginPath();
          ctx.moveTo(pPx, pPy);
          ctx.lineTo(pPx + nx, pPy + ny);
          ctx.stroke();
          drawArrow2D(pPx, pPy, pPx + nx, pPy + ny, "#10b981");

          ctx.fillStyle = "#10b981";
          ctx.font = "bold 11px Inter, sans-serif";
          ctx.fillText("∇F (Normal)", pPx + nx + 6, pPy + ny);
        }
      }

      // Point on curve
      ctx.fillStyle = "#a855f7";
      ctx.beginPath();
      ctx.arc(pPx, pPy, 5.5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    // 9. Corner Live Coordinate Badge
    if (hover2D) {
      ctx.font = "600 11px 'JetBrains Mono', monospace";
      ctx.fillStyle = darkMode ? "#94a3b8" : "#475569";
      ctx.textAlign = "left";
      ctx.fillText(
        `Cursor: (${hover2D.x.toFixed(2)}, ${hover2D.y.toFixed(2)}) | F(x,y) = ${hover2D.F_val.toFixed(2)}`,
        12,
        height - 12
      );
    }
  }, [
    A, B, C, D, E, F,
    rotAngleRad, rotAngleDeg,
    zoom2D, showRotatedAxes, showCenterFoci, showAsymptotes, showTangentInspector,
    hover2D, conicMetrics, darkMode
  ]);

  // Handle 2D Canvas Mouse Interactions
  const handleMouseMove2D = useCallback((e) => {
    const canvas = canvas2dRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const cx = (e.clientX - rect.left) * scaleX;
    const cy = (e.clientY - rect.top) * scaleY;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const mathX = (cx - centerX) / zoom2D;
    const mathY = (centerY - cy) / zoom2D;

    const F_val = A * mathX * mathX + B * mathX * mathY + C * mathY * mathY + D * mathX + E * mathY + F;
    const F_x = 2 * A * mathX + B * mathY + D;
    const F_y = B * mathX + 2 * C * mathY + E;
    const gradNorm = Math.hypot(F_x, F_y);

    const distToCurve = gradNorm > 1e-4 ? F_val / gradNorm : 999;
    const isNearCurve = Math.abs(distToCurve) < 0.8;

    let ptX = mathX;
    let ptY = mathY;
    let tangentSlope = null;
    let normalVec = null;

    if (isNearCurve && gradNorm > 1e-4) {
      ptX = mathX - distToCurve * (F_x / gradNorm);
      ptY = mathY - distToCurve * (F_y / gradNorm);
      const exactFx = 2 * A * ptX + B * ptY + D;
      const exactFy = B * ptX + 2 * C * ptY + E;
      tangentSlope = Math.abs(exactFy) > 1e-4 ? -exactFx / exactFy : null;
      normalVec = [exactFx, exactFy];
    }

    setHover2D({
      x: mathX,
      y: mathY,
      canvasX: cx,
      canvasY: cy,
      onCurve: isNearCurve,
      ptX,
      ptY,
      tangentSlope,
      normalVec,
      F_val,
    });
  }, [A, B, C, D, E, F, zoom2D]);

  const handleMouseLeave2D = useCallback(() => {
    setHover2D(null);
  }, []);

  // Draw Polar Conic Canvas
  const drawPolarConic = useCallback(() => {
    const canvas = polarCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = darkMode ? "#0b1120" : "#ffffff";
    ctx.fillRect(0, 0, width, height);

    const centerX = width / 2;
    const centerY = height / 2;
    const scale = zoomPolar; // pixels per unit

    // 1. Concentric Polar Circles & Radii Labels
    ctx.strokeStyle = darkMode ? "rgba(30, 41, 59, 0.6)" : "rgba(226, 232, 240, 0.85)";
    ctx.lineWidth = 1;
    ctx.font = "600 10px 'JetBrains Mono', monospace";
    ctx.fillStyle = darkMode ? "#64748b" : "#94a3b8";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

    const maxR = Math.min(10, Math.floor(Math.min(width, height) / (2 * scale)));
    for (let r = 1; r <= maxR; r++) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, r * scale, 0, 2 * Math.PI);
      ctx.stroke();
      if (r % 2 === 0) {
        ctx.fillText(`r=${r}`, centerX + r * scale + 3, centerY - 6);
      }
    }

    // 2. 12 Radial Spokes with Radians / Degrees Labels
    if (showPolarRays) {
      ctx.strokeStyle = darkMode ? "rgba(51, 65, 85, 0.4)" : "rgba(203, 213, 225, 0.6)";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 4]);

      const angles = [
        { rad: 0, label: "0°" },
        { rad: Math.PI / 6, label: "30° (π/6)" },
        { rad: Math.PI / 4, label: "45° (π/4)" },
        { rad: Math.PI / 3, label: "60° (π/3)" },
        { rad: Math.PI / 2, label: "90° (π/2)" },
        { rad: (2 * Math.PI) / 3, label: "120°" },
        { rad: (3 * Math.PI) / 4, label: "135°" },
        { rad: (5 * Math.PI) / 6, label: "150°" },
        { rad: Math.PI, label: "180° (π)" },
        { rad: (7 * Math.PI) / 6, label: "210°" },
        { rad: (5 * Math.PI) / 4, label: "225°" },
        { rad: (4 * Math.PI) / 3, label: "240°" },
        { rad: (3 * Math.PI) / 2, label: "270° (3π/2)" },
        { rad: (5 * Math.PI) / 3, label: "300°" },
        { rad: (7 * Math.PI) / 4, label: "315°" },
        { rad: (11 * Math.PI) / 6, label: "330°" },
      ];

      const rayRadius = Math.min(width, height) * 0.46;
      angles.forEach(({ rad, label }) => {
        const rx = centerX + rayRadius * Math.cos(rad);
        const ry = centerY - rayRadius * Math.sin(rad);
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(rx, ry);
        ctx.stroke();

        ctx.font = "500 9px 'JetBrains Mono', monospace";
        ctx.fillStyle = darkMode ? "#94a3b8" : "#64748b";
        ctx.fillText(label, rx + 4 * Math.cos(rad), ry - 4 * Math.sin(rad));
      });
      ctx.setLineDash([]);
    }

    // 3. Axes
    ctx.strokeStyle = darkMode ? "#94a3b8" : "#64748b";
    ctx.lineWidth = 1.6;
    ctx.beginPath();
    ctx.moveTo(0, centerY); ctx.lineTo(width, centerY);
    ctx.moveTo(centerX, 0); ctx.lineTo(centerX, height);
    ctx.stroke();

    // 4. Directrix Line: x = ±d or y = ±d
    if (showDirectrix) {
      ctx.strokeStyle = "#f59e0b";
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 5]);

      const sgn = polarSign === "+" ? 1 : -1;
      const dirDist = sgn * polarD;

      if (polarFunc === "cos") {
        const dirPx = centerX + dirDist * scale;
        ctx.beginPath();
        ctx.moveTo(dirPx, 0);
        ctx.lineTo(dirPx, height);
        ctx.stroke();

        ctx.font = "bold 11px Inter, sans-serif";
        ctx.fillStyle = "#f59e0b";
        ctx.fillText(`Directrix: x = ${dirDist.toFixed(1)}`, dirPx + 6, 20);
      } else {
        const dirPy = centerY - dirDist * scale;
        ctx.beginPath();
        ctx.moveTo(0, dirPy);
        ctx.lineTo(width, dirPy);
        ctx.stroke();

        ctx.font = "bold 11px Inter, sans-serif";
        ctx.fillStyle = "#f59e0b";
        ctx.fillText(`Directrix: y = ${dirDist.toFixed(1)}`, 14, dirPy - 8);
      }
      ctx.setLineDash([]);
    }

    // 5. Polar Conic Trajectory: r = e*d / (1 ± e * [cos|sin] θ)
    ctx.strokeStyle = darkMode ? "#38bdf8" : "#0284c7";
    ctx.lineWidth = 2.6;
    ctx.beginPath();
    let started = false;

    const sgn = polarSign === "+" ? 1 : -1;
    for (let theta = 0; theta <= 2 * Math.PI + 0.02; theta += 0.005) {
      const denomTerm = polarFunc === "cos" ? Math.cos(theta) : Math.sin(theta);
      const denom = 1 + sgn * polarE * denomTerm;

      if (Math.abs(denom) > 0.03) {
        const r = (polarE * polarD) / denom;
        if (r > 0 && r < 35) {
          const x = r * Math.cos(theta);
          const y = r * Math.sin(theta);
          const px = centerX + x * scale;
          const py = centerY - y * scale;

          if (!started) {
            ctx.moveTo(px, py);
            started = true;
          } else {
            ctx.lineTo(px, py);
          }
        } else {
          started = false;
        }
      } else {
        started = false;
      }
    }
    ctx.stroke();

    // 6. Focus & Vertex Markers
    if (showPolarFocus) {
      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.arc(centerX, centerY, 5, 0, 2 * Math.PI);
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.font = "bold 11px Inter, sans-serif";
      ctx.fillStyle = darkMode ? "#38bdf8" : "#0284c7";
      ctx.fillText("Focus F₁(0,0)", centerX + 8, centerY + 14);

      const computeVertex = (th) => {
        const trm = polarFunc === "cos" ? Math.cos(th) : Math.sin(th);
        const dnm = 1 + sgn * polarE * trm;
        if (dnm > 0.01) {
          const vr = (polarE * polarD) / dnm;
          const vx = vr * Math.cos(th);
          const vy = vr * Math.sin(th);
          return [vx, vy];
        }
        return null;
      };

      const primaryTheta = polarFunc === "cos" ? 0 : Math.PI / 2;
      const oppositeTheta = polarFunc === "cos" ? Math.PI : (3 * Math.PI) / 2;

      const v1 = computeVertex(primaryTheta);
      const v2 = computeVertex(oppositeTheta);

      [v1, v2].forEach((vt, i) => {
        if (vt) {
          const vPx = centerX + vt[0] * scale;
          const vPy = centerY - vt[1] * scale;
          if (vPx >= 0 && vPx <= width && vPy >= 0 && vPy <= height) {
            ctx.fillStyle = "#10b981";
            ctx.beginPath();
            ctx.arc(vPx, vPy, 4.5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.font = "bold 10px Inter, sans-serif";
            ctx.fillText(`V${i + 1}(${vt[0].toFixed(1)}, ${vt[1].toFixed(1)})`, vPx + 6, vPy - 6);
          }
        }
      });
    }

    // 7. Polar Hover Cursor Readout
    if (hoverPolar) {
      ctx.font = "600 11px 'JetBrains Mono', monospace";
      ctx.fillStyle = darkMode ? "#94a3b8" : "#475569";
      ctx.textAlign = "left";
      ctx.fillText(
        `Polar: (r: ${hoverPolar.r.toFixed(2)}, θ: ${hoverPolar.thetaDeg.toFixed(1)}°) | Cartesian: (${hoverPolar.x.toFixed(2)}, ${hoverPolar.y.toFixed(2)})`,
        12,
        height - 12
      );
    }
  }, [
    polarE, polarD, polarFunc, polarSign,
    zoomPolar, showPolarRays, showDirectrix, showPolarFocus,
    hoverPolar, darkMode
  ]);

  // Handle Polar Canvas Mouse Interactions
  const handleMouseMovePolar = useCallback((e) => {
    const canvas = polarCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const cx = (e.clientX - rect.left) * scaleX;
    const cy = (e.clientY - rect.top) * scaleY;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const mathX = (cx - centerX) / zoomPolar;
    const mathY = (centerY - cy) / zoomPolar;

    const r = Math.hypot(mathX, mathY);
    let thetaRad = Math.atan2(mathY, mathX);
    if (thetaRad < 0) thetaRad += 2 * Math.PI;
    const thetaDeg = (thetaRad * 180) / Math.PI;

    setHoverPolar({
      x: mathX,
      y: mathY,
      r,
      thetaDeg,
      thetaRad,
      canvasX: cx,
      canvasY: cy,
    });
  }, [zoomPolar]);

  const handleMouseLeavePolar = useCallback(() => {
    setHoverPolar(null);
  }, []);

  // ====================================================
  // Math Calculations: 3D Vector Geometry
  // ====================================================
  const u = useMemo(() => [parseFloat(uX) || 0, parseFloat(uY) || 0, parseFloat(uZ) || 0], [uX, uY, uZ]);
  const v = useMemo(() => [parseFloat(vX) || 0, parseFloat(vY) || 0, parseFloat(vZ) || 0], [vX, vY, vZ]);
  const w = useMemo(() => [parseFloat(wX) || 0, parseFloat(wY) || 0, parseFloat(wZ) || 0], [wX, wY, wZ]);

  const dotUV = u[0] * v[0] + u[1] * v[1] + u[2] * v[2];
  const crossUV = [
    u[1] * v[2] - u[2] * v[1],
    u[2] * v[0] - u[0] * v[2],
    u[0] * v[1] - u[1] * v[0],
  ];
  const magU = Math.sqrt(u[0] * u[0] + u[1] * u[1] + u[2] * u[2]);
  const magV = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
  const magW = Math.sqrt(w[0] * w[0] + w[1] * w[1] + w[2] * w[2]);
  const magCross = Math.sqrt(crossUV[0] * crossUV[0] + crossUV[1] * crossUV[1] + crossUV[2] * crossUV[2]);

  let angleDeg = 0;
  if (magU > 0 && magV > 0) {
    const cosVal = Math.max(-1, Math.min(1, dotUV / (magU * magV)));
    angleDeg = (Math.acos(cosVal) * 180) / Math.PI;
  }

  // Scalar Triple Product u . (v x w) = det([u; v; w])
  const scalarTriple =
    u[0] * (v[1] * w[2] - v[2] * w[1]) -
    u[1] * (v[0] * w[2] - v[2] * w[0]) +
    u[2] * (v[0] * w[1] - v[1] * w[0]);
  const volumeParallelepiped = Math.abs(scalarTriple);

  // 3D Skew Lines Distance
  const P1 = [parseFloat(p1X) || 0, parseFloat(p1Y) || 0, parseFloat(p1Z) || 0];
  const V1 = [parseFloat(v1X) || 0, parseFloat(v1Y) || 0, parseFloat(v1Z) || 0];
  const P2 = [parseFloat(p2X) || 0, parseFloat(p2Y) || 0, parseFloat(p2Z) || 0];
  const V2 = [parseFloat(v2X) || 0, parseFloat(v2Y) || 0, parseFloat(v2Z) || 0];

  const P2_minus_P1 = [P2[0] - P1[0], P2[1] - P1[1], P2[2] - P1[2]];
  const V1_cross_V2 = [
    V1[1] * V2[2] - V1[2] * V2[1],
    V1[2] * V2[0] - V1[0] * V2[2],
    V1[0] * V2[1] - V1[1] * V2[0],
  ];
  const magCrossV1V2 = Math.sqrt(
    V1_cross_V2[0] * V1_cross_V2[0] +
    V1_cross_V2[1] * V1_cross_V2[1] +
    V1_cross_V2[2] * V1_cross_V2[2]
  );

  let skewDistance = 0;
  let isParallel = false;
  if (magCrossV1V2 < 1e-7) {
    isParallel = true;
    const pDiff_cross_V1 = [
      P2_minus_P1[1] * V1[2] - P2_minus_P1[2] * V1[1],
      P2_minus_P1[2] * V1[0] - P2_minus_P1[0] * V1[2],
      P2_minus_P1[0] * V1[1] - P2_minus_P1[1] * V1[0],
    ];
    const magV1 = Math.sqrt(V1[0] * V1[0] + V1[1] * V1[1] + V1[2] * V1[2]);
    const magDiffCross = Math.sqrt(
      pDiff_cross_V1[0] * pDiff_cross_V1[0] +
      pDiff_cross_V1[1] * pDiff_cross_V1[1] +
      pDiff_cross_V1[2] * pDiff_cross_V1[2]
    );
    skewDistance = magV1 > 0 ? magDiffCross / magV1 : 0;
  } else {
    const num = Math.abs(
      P2_minus_P1[0] * V1_cross_V2[0] +
      P2_minus_P1[1] * V1_cross_V2[1] +
      P2_minus_P1[2] * V1_cross_V2[2]
    );
    skewDistance = num / magCrossV1V2;
  }

  // Point to Plane Distance
  const Pt = [parseFloat(ptX) || 0, parseFloat(ptY) || 0, parseFloat(ptZ) || 0];
  const plA = parseFloat(planeA) || 0;
  const plB = parseFloat(planeB) || 0;
  const plC = parseFloat(planeC) || 0;
  const plD = parseFloat(planeD) || 0;

  const planeNormMag = Math.sqrt(plA * plA + plB * plB + plC * plC);
  const pointToPlaneDist =
    planeNormMag > 0
      ? Math.abs(plA * Pt[0] + plB * Pt[1] + plC * Pt[2] + plD) / planeNormMag
      : 0;

  // Draw 3D Vector Interactive Viewport
  const draw3DVectors = useCallback(() => {
    const canvas = vector3dCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    ctx.fillStyle = darkMode ? "#0b1120" : "#ffffff";
    ctx.fillRect(0, 0, width, height);

    const originX = width / 2;
    const originY = height / 2 + 20;

    // Spherical Euler projection angles (base + hover parallax offset)
    const effPitch = ((rotPitch + hoverOffsetRef.current.pitch) * Math.PI) / 180;
    const effYaw = ((rotYaw + hoverOffsetRef.current.yaw) * Math.PI) / 180;

    const cosYaw = Math.cos(effYaw);
    const sinYaw = Math.sin(effYaw);
    const cosPitch = Math.cos(effPitch);
    const sinPitch = Math.sin(effPitch);

    const project = (x, y, z) => {
      // 1. Rotate around Z axis (azimuth / yaw)
      const x1 = x * cosYaw - y * sinYaw;
      const y1 = x * sinYaw + y * cosYaw;
      const z1 = z;

      // 2. Rotate around X axis (elevation / pitch)
      const x2 = x1;
      const y2 = y1 * cosPitch - z1 * sinPitch;
      const z2 = y1 * sinPitch + z1 * cosPitch;

      // 3. Screen coordinates
      const px = originX + x2 * zoom3D;
      const py = originY - z2 * zoom3D;
      return [px, py, y2];
    };

    // Helper: Draw 3D Arrowhead
    const drawArrowHead = (fromP, toP, color, size = 11) => {
      const dx = toP[0] - fromP[0];
      const dy = toP[1] - fromP[1];
      const len = Math.hypot(dx, dy);
      if (len < 1e-3) return;
      const udx = dx / len;
      const udy = dy / len;
      const perpX = -udy;
      const perpY = udx;

      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(toP[0], toP[1]);
      ctx.lineTo(toP[0] - udx * size + perpX * (size * 0.42), toP[1] - udy * size + perpY * (size * 0.42));
      ctx.lineTo(toP[0] - udx * (size * 0.7), toP[1] - udy * (size * 0.7));
      ctx.lineTo(toP[0] - udx * size - perpX * (size * 0.42), toP[1] - udy * size - perpY * (size * 0.42));
      ctx.closePath();
      ctx.fill();
    };

    // 1. Draw 3D Ground Plane Grid (XY-Plane at z=0)
    ctx.strokeStyle = darkMode ? "rgba(51, 65, 85, 0.4)" : "rgba(226, 232, 240, 0.8)";
    ctx.lineWidth = 1;
    const gridSpan = 6;
    for (let i = -gridSpan; i <= gridSpan; i += 2) {
      const [g1x, g1y] = project(i, -gridSpan, 0);
      const [g2x, g2y] = project(i, gridSpan, 0);
      ctx.beginPath(); ctx.moveTo(g1x, g1y); ctx.lineTo(g2x, g2y); ctx.stroke();

      const [g3x, g3y] = project(-gridSpan, i, 0);
      const [g4x, g4y] = project(gridSpan, i, 0);
      ctx.beginPath(); ctx.moveTo(g3x, g3y); ctx.lineTo(g4x, g4y); ctx.stroke();
    }

    // 2. Draw Coordinate Axes (X Red, Y Green, Z Blue)
    const axisLen = 7;
    const [xAx, xAy] = project(axisLen, 0, 0);
    const [yAx, yAy] = project(0, axisLen, 0);
    const [zAx, zAy] = project(0, 0, axisLen);

    // Negative dashed axes
    ctx.setLineDash([2, 4]);
    ctx.strokeStyle = darkMode ? "#334155" : "#cbd5e1";
    ctx.lineWidth = 1;
    const [nxAx, nxAy] = project(-axisLen, 0, 0);
    const [nyAx, nyAy] = project(0, -axisLen, 0);
    const [nzAx, nzAy] = project(0, 0, -axisLen);
    ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(nxAx, nxAy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(nyAx, nyAy); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(nzAx, nzAy); ctx.stroke();
    ctx.setLineDash([]);

    // Positive Axes
    ctx.lineWidth = 1.6;
    // X Axis
    ctx.strokeStyle = "#ef4444";
    ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(xAx, xAy); ctx.stroke();
    drawArrowHead([originX, originY], [xAx, xAy], "#ef4444", 8);

    // Y Axis
    ctx.strokeStyle = "#10b981";
    ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(yAx, yAy); ctx.stroke();
    drawArrowHead([originX, originY], [yAx, yAy], "#10b981", 8);

    // Z Axis
    ctx.strokeStyle = "#0284c7";
    ctx.beginPath(); ctx.moveTo(originX, originY); ctx.lineTo(zAx, zAy); ctx.stroke();
    drawArrowHead([originX, originY], [zAx, zAy], "#0284c7", 8);

    // 3. Draw Parallelepiped 3D Solid Shading and Edges
    const corners = [
      project(0, 0, 0),
      project(u[0], u[1], u[2]),
      project(v[0], v[1], v[2]),
      project(u[0] + v[0], u[1] + v[1], u[2] + v[2]),
      project(w[0], w[1], w[2]),
      project(u[0] + w[0], u[1] + w[1], u[2] + w[2]),
      project(v[0] + w[0], v[1] + w[1], v[2] + w[2]),
      project(u[0] + v[0] + w[0], u[1] + v[1] + w[1], u[2] + v[2] + w[2]),
    ];

    const faces = [
      [0, 1, 3, 2],
      [4, 5, 7, 6],
      [0, 1, 5, 4],
      [2, 3, 7, 6],
      [0, 2, 6, 4],
      [1, 3, 7, 5],
    ];

    faces.forEach((f) => {
      ctx.fillStyle = darkMode ? "rgba(56, 189, 248, 0.05)" : "rgba(0, 86, 210, 0.04)";
      ctx.beginPath();
      ctx.moveTo(corners[f[0]][0], corners[f[0]][1]);
      for (let k = 1; k < f.length; k++) {
        ctx.lineTo(corners[f[k]][0], corners[f[k]][1]);
      }
      ctx.closePath();
      ctx.fill();
    });

    ctx.strokeStyle = darkMode ? "rgba(148, 163, 184, 0.35)" : "rgba(100, 116, 139, 0.35)";
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    const edges = [
      [0, 1], [0, 2], [1, 3], [2, 3],
      [4, 5], [4, 6], [5, 7], [6, 7],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];
    edges.forEach(([i, j]) => {
      ctx.beginPath();
      ctx.moveTo(corners[i][0], corners[i][1]);
      ctx.lineTo(corners[j][0], corners[j][1]);
      ctx.stroke();
    });
    ctx.setLineDash([]);

    // 4. Project and store Vector Endpoints
    const [uxP, uyP] = project(u[0], u[1], u[2]);
    const [vxP, vyP] = project(v[0], v[1], v[2]);
    const [wxP, wyP] = project(w[0], w[1], w[2]);
    projectedEndpointsRef.current = {
      u: [uxP, uyP],
      v: [vxP, vyP],
      w: [wxP, wyP],
    };

    // Helper: Draw interactive glowing vector
    const renderVector = (fromP, toP, baseColor, isHovered, label) => {
      ctx.save();
      if (isHovered) {
        ctx.shadowColor = baseColor;
        ctx.shadowBlur = 18;
        ctx.strokeStyle = baseColor;
        ctx.lineWidth = 5;
      } else {
        ctx.strokeStyle = baseColor;
        ctx.lineWidth = 3.2;
      }
      ctx.beginPath();
      ctx.moveTo(fromP[0], fromP[1]);
      ctx.lineTo(toP[0], toP[1]);
      ctx.stroke();

      drawArrowHead(fromP, toP, baseColor, isHovered ? 14 : 11);

      // Endpoint pulsing dot
      ctx.fillStyle = baseColor;
      ctx.beginPath();
      ctx.arc(toP[0], toP[1], isHovered ? 5.5 : 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Vector Label
      ctx.font = isHovered ? "bold 14px Inter, sans-serif" : "bold 12px Inter, sans-serif";
      ctx.fillStyle = baseColor;
      ctx.fillText(label, toP[0] + 8, toP[1] - 6);
      ctx.restore();
    };

    // Render Vector u (Royal Blue)
    renderVector([originX, originY], [uxP, uyP], darkMode ? "#60a5fa" : "#0056D2", hoveredVector === "u", "u");

    // Render Vector v (Emerald Green)
    renderVector([originX, originY], [vxP, vyP], darkMode ? "#34d399" : "#10b981", hoveredVector === "v", "v");

    // Render Vector w (Purple)
    renderVector([originX, originY], [wxP, wyP], darkMode ? "#c084fc" : "#7c3aed", hoveredVector === "w", "w");

    // Coordinate Axes Labels
    ctx.font = "bold 11px Inter, sans-serif";
    ctx.fillStyle = "#ef4444"; ctx.fillText("+X", xAx + 6, xAy + 4);
    ctx.fillStyle = "#10b981"; ctx.fillText("+Y", yAx + 6, yAy + 4);
    ctx.fillStyle = "#0284c7"; ctx.fillText("+Z", zAx - 4, zAy - 8);
  }, [u, v, w, rotPitch, rotYaw, zoom3D, darkMode, hoveredVector]);

  // Auto-rotation loop (fast and fluid 3D spin)
  useEffect(() => {
    if (!autoRotate3D || activeTab !== "vectors3d") return undefined;
    let animId;
    const loop = () => {
      setRotYaw((prev) => (prev + rotSpeed) % 360);
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [autoRotate3D, activeTab, rotSpeed]);

  const handlePointerDown3D = (e) => {
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX, y: e.clientY, pitch: rotPitch, yaw: rotYaw };
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerMove3D = (e) => {
    const canvas = vector3dCanvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    if (isDraggingRef.current) {
      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;
      setRotYaw((dragStartRef.current.yaw - dx * 1.25) % 360);
      setRotPitch(Math.max(-85, Math.min(85, dragStartRef.current.pitch + dy * 1.1)));
    } else {
      // Interactive mouse hover parallax tilt (dynamic ±24° horizontal, ±18° vertical angle shift)
      const normX = (mx - rect.width / 2) / (rect.width / 2);
      const normY = (my - rect.height / 2) / (rect.height / 2);
      hoverOffsetRef.current = { yaw: -normX * 24, pitch: normY * 18 };
      draw3DVectors();

      // Check distance to vector endpoints for hover tooltip & glow
      const endpoints = projectedEndpointsRef.current;
      if (endpoints) {
        const dU = Math.hypot(mx - endpoints.u[0], my - endpoints.u[1]);
        const dV = Math.hypot(mx - endpoints.v[0], my - endpoints.v[1]);
        const dW = Math.hypot(mx - endpoints.w[0], my - endpoints.w[1]);

        if (dU < 26) {
          setHoveredVector("u");
          setHoverInfo({ name: "u", color: "#0056D2", val: u, mag: magU, x: mx, y: my });
        } else if (dV < 26) {
          setHoveredVector("v");
          setHoverInfo({ name: "v", color: "#10b981", val: v, mag: magV, x: mx, y: my });
        } else if (dW < 26) {
          setHoveredVector("w");
          setHoverInfo({ name: "w", color: "#7c3aed", val: w, mag: magW, x: mx, y: my });
        } else {
          setHoveredVector(null);
          setHoverInfo(null);
        }
      }
    }
  };

  const handlePointerUp3D = (e) => {
    isDraggingRef.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  const handlePointerLeave3D = () => {
    isDraggingRef.current = false;
    hoverOffsetRef.current = { yaw: 0, pitch: 0 };
    setHoveredVector(null);
    setHoverInfo(null);
    draw3DVectors();
  };

  const handleWheel3D = (e) => {
    e.preventDefault();
    setZoom3D((prev) => Math.max(12, Math.min(42, prev - Math.sign(e.deltaY) * 2)));
  };

  // Redraw canvases on tab or theme change
  useEffect(() => {
    if (activeTab === "conics2d") {
      draw2DConic();
      drawPolarConic();
    } else {
      draw3DVectors();
    }
  }, [activeTab, draw2DConic, drawPolarConic, draw3DVectors]);

  return (
    <div className="avl-container">
      {/* Header Section */}
      <div className="avl-header">
        <div className="avl-badge">
          ✦ Analytic Geometry &amp; 3D Vector Geometry
        </div>

        <h1 className="avl-title">
          Analytic Geometry &amp; 3D Vector Laboratory
        </h1>
        <p className="avl-desc">
          Interactive computational suite for 2D general conic classification, rotation of axes, polar conics, 3D vector operations, scalar triple products, and minimum distances between skew lines.
        </p>

        {/* Tab Selection */}
        <div className="avl-tabs">
          <button
            type="button"
            onClick={() => setActiveTab("conics2d")}
            className={`avl-tab-btn ${activeTab === "conics2d" ? "active-tab" : ""}`}
          >
            <span>📐</span> 2D Geometry &amp; Conic Sections
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("vectors3d")}
            className={`avl-tab-btn ${activeTab === "vectors3d" ? "active-tab" : ""}`}
          >
            <span>🧊</span> 3D Vectors &amp; Skew Lines
          </button>
        </div>
      </div>

      {/* ==================================================== */}
      {/* TAB 1: 2D CONICS & ROTATION OF AXES                  */}
      {/* ==================================================== */}
      {activeTab === "conics2d" && (
        <div className="avl-grid-2col">
          {/* Card 1: Discriminant & Rotation */}
          <div className="avl-card">
            <div className="avl-card-header">
              <h2 className="avl-card-title">
                <span>⚡</span> General Conic &amp; Rotation Classifier
              </h2>
              <span
                className="avl-badge-pill"
                style={{
                  background: darkMode ? "rgba(56, 189, 248, 0.2)" : "rgba(0, 86, 210, 0.1)",
                  color: darkMode ? "#38bdf8" : "#0056D2",
                }}
              >
                {conicType}
              </span>
            </div>

            <MathBlock math="Ax^2 + Bxy + Cy^2 + Dx + Ey + F = 0" />

            {/* Quick Presets Bar */}
            <div className="avl-presets-wrapper">
              <span className="avl-presets-label">⚡ Presets:</span>
              {CONIC_PRESETS.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  className="avl-preset-btn"
                  onClick={() => {
                    setCoefA(p.A);
                    setCoefB(p.B);
                    setCoefC(p.C);
                    setCoefD(p.D);
                    setCoefE(p.E);
                    setCoefF(p.F);
                  }}
                  title={p.desc}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Inputs */}
            <div className="avl-inputs-row">
              <div className="avl-input-group">
                <label className="avl-input-label">A (x²)</label>
                <input
                  type="number"
                  value={coefA}
                  onChange={(e) => setCoefA(e.target.value)}
                  className="avl-input-field"
                />
              </div>
              <div className="avl-input-group">
                <label className="avl-input-label">B (xy)</label>
                <input
                  type="number"
                  value={coefB}
                  onChange={(e) => setCoefB(e.target.value)}
                  className="avl-input-field"
                />
              </div>
              <div className="avl-input-group">
                <label className="avl-input-label">C (y²)</label>
                <input
                  type="number"
                  value={coefC}
                  onChange={(e) => setCoefC(e.target.value)}
                  className="avl-input-field"
                />
              </div>
              <div className="avl-input-group">
                <label className="avl-input-label">D (x)</label>
                <input
                  type="number"
                  value={coefD}
                  onChange={(e) => setCoefD(e.target.value)}
                  className="avl-input-field"
                />
              </div>
              <div className="avl-input-group">
                <label className="avl-input-label">E (y)</label>
                <input
                  type="number"
                  value={coefE}
                  onChange={(e) => setCoefE(e.target.value)}
                  className="avl-input-field"
                />
              </div>
              <div className="avl-input-group">
                <label className="avl-input-label">F (c)</label>
                <input
                  type="number"
                  value={coefF}
                  onChange={(e) => setCoefF(e.target.value)}
                  className="avl-input-field"
                />
              </div>
            </div>

            {/* Result Box */}
            <div className="avl-result-box">
              <div className="avl-result-row">
                <span className="avl-result-label">Discriminant Test (Δ = B² - 4AC):</span>
                <span className="avl-result-val" style={{ color: badgeColor }}>
                  {disc.toFixed(2)}
                </span>
              </div>
              <div className="avl-result-row">
                <span className="avl-result-label">Identified Conic:</span>
                <span className="avl-result-val font-bold">{conicType}</span>
              </div>

              {B !== 0 && (
                <div style={{ marginTop: "0.5rem", paddingTop: "0.75rem", borderTop: "1px dashed rgba(2, 132, 199, 0.3)" }}>
                  <div className="avl-result-row">
                    <span className="avl-result-label">
                      Rotation Angle (<InlineMath math="\theta" />):
                    </span>
                    <span className="avl-result-val font-bold">
                      {rotAngleDeg.toFixed(2)}° ({rotAngleRad.toFixed(3)} rad)
                    </span>
                  </div>
                  <div style={{ fontSize: "0.85rem", marginTop: "0.5rem", opacity: 0.85 }}>
                    Eliminates cross-term via <InlineMath math="\cot(2\theta) = \frac{A - C}{B}" />:
                  </div>
                  <MathBlock
                    math={`${A_prime.toFixed(2)}(x')^2 + ${C_prime.toFixed(2)}(y')^2 + ${D_prime.toFixed(2)}x' + ${E_prime.toFixed(2)}y' + ${F_prime.toFixed(2)} = 0`}
                  />
                </div>
              )}
            </div>

            {/* Interactive 2D Canvas */}
            <div className="avl-canvas-wrapper">
              <div className="avl-canvas-header">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span>2D Conic &amp; Rotated Axes Viewport</span>
                  <span
                    className="avl-badge-pill"
                    style={{
                      background: darkMode ? "rgba(56, 189, 248, 0.15)" : "rgba(0, 86, 210, 0.1)",
                      color: darkMode ? "#38bdf8" : "#0056D2",
                      fontSize: "0.72rem",
                    }}
                  >
                    🎯 Interactive Tangent Inspector
                  </span>
                </div>

                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    className={`avl-canvas-ctrl-btn ${showRotatedAxes ? "active" : ""}`}
                    onClick={() => setShowRotatedAxes((prev) => !prev)}
                    title="Toggle Rotated Axes (x', y')"
                  >
                    📐 Rotated Axes
                  </button>
                  <button
                    type="button"
                    className={`avl-canvas-ctrl-btn ${showCenterFoci ? "active" : ""}`}
                    onClick={() => setShowCenterFoci((prev) => !prev)}
                    title="Toggle Center & Foci"
                  >
                    📍 Center/Foci
                  </button>
                  <button
                    type="button"
                    className={`avl-canvas-ctrl-btn ${showAsymptotes ? "active" : ""}`}
                    onClick={() => setShowAsymptotes((prev) => !prev)}
                    title="Toggle Hyperbolic Asymptotes"
                  >
                    〰️ Asymptotes
                  </button>
                  <button
                    type="button"
                    className={`avl-canvas-ctrl-btn ${showTangentInspector ? "active" : ""}`}
                    onClick={() => setShowTangentInspector((prev) => !prev)}
                    title="Toggle Tangent & Normal Vector Inspector on Hover"
                  >
                    🎯 Tangent Line
                  </button>
                  <button
                    type="button"
                    className="avl-canvas-ctrl-btn"
                    onClick={() => setZoom2D((z) => Math.min(48, z + 4))}
                    title="Zoom In"
                  >
                    🔍+
                  </button>
                  <button
                    type="button"
                    className="avl-canvas-ctrl-btn"
                    onClick={() => setZoom2D((z) => Math.max(12, z - 4))}
                    title="Zoom Out"
                  >
                    🔍-
                  </button>
                  <button
                    type="button"
                    className="avl-canvas-ctrl-btn"
                    onClick={() => setZoom2D(24)}
                    title="Reset Zoom"
                  >
                    ↺
                  </button>
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <canvas
                  ref={canvas2dRef}
                  width={720}
                  height={440}
                  className="avl-canvas avl-canvas-2d"
                  onMouseMove={handleMouseMove2D}
                  onMouseLeave={handleMouseLeave2D}
                />

                {/* Floating 2D Tangent & Normal Inspector Tooltip */}
                {showTangentInspector && hover2D && hover2D.onCurve && (
                  <div
                    className="avl-2d-tooltip"
                    style={{
                      left: Math.min(Math.max(hover2D.canvasX + 15, 10), 450),
                      top: Math.min(Math.max(hover2D.canvasY - 70, 10), 340),
                      borderColor: "#a855f7",
                    }}
                  >
                    <div style={{ color: "#c084fc", fontWeight: 800, marginBottom: "2px" }}>
                      🎯 Point on Curve: P({hover2D.ptX.toFixed(2)}, {hover2D.ptY.toFixed(2)})
                    </div>
                    <div>
                      <strong>Tangent Slope m:</strong>{" "}
                      {hover2D.tangentSlope !== null ? hover2D.tangentSlope.toFixed(3) : "Undefined (Vertical)"}
                    </div>
                    {hover2D.tangentSlope !== null && (
                      <div>
                        <strong>Tangent Eq:</strong> y - ({hover2D.ptY.toFixed(2)}) = {hover2D.tangentSlope.toFixed(2)}[x - ({hover2D.ptX.toFixed(2)})]
                      </div>
                    )}
                    {hover2D.normalVec && (
                      <div style={{ color: "#34d399", fontSize: "0.76rem", marginTop: "2px" }}>
                        <strong>Normal ∇F:</strong> ⟨{hover2D.normalVec[0].toFixed(2)}, {hover2D.normalVec[1].toFixed(2)}⟩
                      </div>
                    )}
                  </div>
                )}

                <div className="avl-3d-hint">
                  🖱️ Hover near curve to inspect Tangent &amp; Normal Vector · Use zoom buttons
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Polar Form Conics */}
          <div className="avl-card">
            <div className="avl-card-header">
              <h2 className="avl-card-title">
                <span>🌀</span> Conics in Polar Form
              </h2>
              <span
                className="avl-badge-pill"
                style={{
                  background: darkMode ? "rgba(56, 189, 248, 0.2)" : "rgba(0, 86, 210, 0.1)",
                  color: darkMode ? "#38bdf8" : "#0056D2",
                }}
              >
                Focus at Origin (0,0)
              </span>
            </div>

            <MathBlock math={`r = \\frac{e \\cdot d}{1 ${polarSign} e\\${polarFunc}(\\theta)}`} />

            {/* Quick Polar Presets Bar */}
            <div className="avl-presets-wrapper">
              <span className="avl-presets-label">⚡ Presets:</span>
              {POLAR_PRESETS.map((p) => (
                <button
                  key={p.name}
                  type="button"
                  className="avl-preset-btn"
                  onClick={() => {
                    setPolarE(p.e);
                    setPolarD(p.d);
                    setPolarFunc(p.func);
                    setPolarSign(p.sign);
                  }}
                >
                  {p.name}
                </button>
              ))}
            </div>

            {/* Sliders and Selects */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.15rem" }}>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "0.35rem" }}>
                  <span className="avl-input-label">Eccentricity (e): {polarE}</span>
                  <span style={{ fontWeight: 700, color: polarE < 1 ? "#0284c7" : polarE === 1 ? "#0056D2" : "#2563eb" }}>
                    {polarE < 1 ? "Ellipse (e < 1)" : polarE === 1 ? "Parabola (e = 1)" : "Hyperbola (e > 1)"}
                  </span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="2.5"
                  step="0.05"
                  value={polarE}
                  onChange={(e) => setPolarE(parseFloat(e.target.value))}
                  className="avl-slider"
                />
              </div>

              <div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", marginBottom: "0.35rem" }}>
                  <span className="avl-input-label">Directrix Distance (d): {polarD}</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="6"
                  step="0.1"
                  value={polarD}
                  onChange={(e) => setPolarD(parseFloat(e.target.value))}
                  className="avl-slider"
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <div>
                  <label className="avl-input-label">Orientation Axis</label>
                  <select
                    value={polarFunc}
                    onChange={(e) => setPolarFunc(e.target.value)}
                    className="avl-input-field"
                    style={{ textAlign: "left" }}
                  >
                    <option value="cos">cos(θ) · Horizontal Directrix</option>
                    <option value="sin">sin(θ) · Vertical Directrix</option>
                  </select>
                </div>
                <div>
                  <label className="avl-input-label">Directrix Direction</label>
                  <select
                    value={polarSign}
                    onChange={(e) => setPolarSign(e.target.value)}
                    className="avl-input-field"
                    style={{ textAlign: "left" }}
                  >
                    <option value="+">+ (Directrix right / above)</option>
                    <option value="-">- (Directrix left / below)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Polar Canvas */}
            <div className="avl-canvas-wrapper">
              <div className="avl-canvas-header">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                  <span>Polar Radar Plot (Focus at Origin)</span>
                  <span
                    className="avl-badge-pill"
                    style={{
                      background: darkMode ? "rgba(56, 189, 248, 0.15)" : "rgba(0, 86, 210, 0.1)",
                      color: darkMode ? "#38bdf8" : "#0056D2",
                      fontSize: "0.72rem",
                    }}
                  >
                    r = ed / (1 ± e·trig(θ))
                  </span>
                </div>

                <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    className={`avl-canvas-ctrl-btn ${showPolarRays ? "active" : ""}`}
                    onClick={() => setShowPolarRays((prev) => !prev)}
                    title="Toggle 12 Radial Angle Spokes"
                  >
                    📐 Radial Rays
                  </button>
                  <button
                    type="button"
                    className={`avl-canvas-ctrl-btn ${showDirectrix ? "active" : ""}`}
                    onClick={() => setShowDirectrix((prev) => !prev)}
                    title="Toggle Directrix Line"
                  >
                    📏 Directrix
                  </button>
                  <button
                    type="button"
                    className={`avl-canvas-ctrl-btn ${showPolarFocus ? "active" : ""}`}
                    onClick={() => setShowPolarFocus((prev) => !prev)}
                    title="Toggle Focus & Vertices"
                  >
                    🎯 Focus/Vertices
                  </button>
                  <button
                    type="button"
                    className="avl-canvas-ctrl-btn"
                    onClick={() => setZoomPolar((z) => Math.min(50, z + 4))}
                    title="Zoom In"
                  >
                    🔍+
                  </button>
                  <button
                    type="button"
                    className="avl-canvas-ctrl-btn"
                    onClick={() => setZoomPolar((z) => Math.max(12, z - 4))}
                    title="Zoom Out"
                  >
                    🔍-
                  </button>
                  <button
                    type="button"
                    className="avl-canvas-ctrl-btn"
                    onClick={() => setZoomPolar(26)}
                    title="Reset Zoom"
                  >
                    ↺
                  </button>
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <canvas
                  ref={polarCanvasRef}
                  width={720}
                  height={440}
                  className="avl-canvas avl-canvas-2d"
                  onMouseMove={handleMouseMovePolar}
                  onMouseLeave={handleMouseLeavePolar}
                />

                {hoverPolar && (
                  <div
                    className="avl-2d-tooltip"
                    style={{
                      left: Math.min(Math.max(hoverPolar.canvasX + 15, 10), 450),
                      top: Math.min(Math.max(hoverPolar.canvasY - 50, 10), 360),
                    }}
                  >
                    <div>
                      <strong style={{ color: "#38bdf8" }}>Polar Coordinates:</strong> (r = {hoverPolar.r.toFixed(2)}, θ = {hoverPolar.thetaDeg.toFixed(1)}°)
                    </div>
                    <div style={{ fontSize: "0.76rem", color: "#94a3b8" }}>
                      Cartesian: x = {hoverPolar.x.toFixed(2)}, y = {hoverPolar.y.toFixed(2)}
                    </div>
                  </div>
                )}

                <div className="avl-3d-hint">
                  🖱️ Move cursor over polar radar to inspect radius and angle in real time
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 2: 3D VECTORS, TRIPLE PRODUCT & SKEW LINES       */}
      {/* ==================================================== */}
      {activeTab === "vectors3d" && (
        <div className="avl-grid-2col">
          {/* Card 1: Vector Operations & Parallelepiped Volume */}
          <div className="avl-card">
            <div className="avl-card-header">
              <h2 className="avl-card-title">
                <span>🎯</span> 3D Vectors &amp; Scalar Triple Product
              </h2>
              <span
                className="avl-badge-pill"
                style={{
                  background: darkMode ? "rgba(56, 189, 248, 0.2)" : "rgba(0, 86, 210, 0.1)",
                  color: darkMode ? "#38bdf8" : "#0056D2",
                }}
              >
                Volume &amp; Cross
              </span>
            </div>

            {/* Vector Inputs */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              <div>
                <label className="avl-input-label" style={{ color: darkMode ? "#60a5fa" : "#0056D2" }}>
                  Vector <InlineMath math="\mathbf{u} = \langle u_1, u_2, u_3 \rangle" />
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
                  <input type="number" value={uX} onChange={(e) => setUX(e.target.value)} className="avl-input-field" placeholder="u₁" />
                  <input type="number" value={uY} onChange={(e) => setUY(e.target.value)} className="avl-input-field" placeholder="u₂" />
                  <input type="number" value={uZ} onChange={(e) => setUZ(e.target.value)} className="avl-input-field" placeholder="u₃" />
                </div>
              </div>

              <div>
                <label className="avl-input-label" style={{ color: darkMode ? "#34d399" : "#10b981" }}>
                  Vector <InlineMath math="\mathbf{v} = \langle v_1, v_2, v_3 \rangle" />
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
                  <input type="number" value={vX} onChange={(e) => setVX(e.target.value)} className="avl-input-field" placeholder="v₁" />
                  <input type="number" value={vY} onChange={(e) => setVY(e.target.value)} className="avl-input-field" placeholder="v₂" />
                  <input type="number" value={vZ} onChange={(e) => setVZ(e.target.value)} className="avl-input-field" placeholder="v₃" />
                </div>
              </div>

              <div>
                <label className="avl-input-label" style={{ color: darkMode ? "#c084fc" : "#7c3aed" }}>
                  Vector <InlineMath math="\mathbf{w} = \langle w_1, w_2, w_3 \rangle" /> (for 3D Volume)
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
                  <input type="number" value={wX} onChange={(e) => setWX(e.target.value)} className="avl-input-field" placeholder="w₁" />
                  <input type="number" value={wY} onChange={(e) => setWY(e.target.value)} className="avl-input-field" placeholder="w₂" />
                  <input type="number" value={wZ} onChange={(e) => setWZ(e.target.value)} className="avl-input-field" placeholder="w₃" />
                </div>
              </div>
            </div>

            {/* Calculations Result Box */}
            <div className="avl-result-box">
              <div className="avl-result-row">
                <span className="avl-result-label">
                  Dot Product (<InlineMath math="\mathbf{u} \cdot \mathbf{v}" />):
                </span>
                <span className="avl-result-val font-bold">{dotUV.toFixed(2)}</span>
              </div>
              <div className="avl-result-row">
                <span className="avl-result-label">
                  Angle Between (<InlineMath math="\theta" />):
                </span>
                <span className="avl-result-val font-bold">{angleDeg.toFixed(1)}°</span>
              </div>
              <div className="avl-result-row">
                <span className="avl-result-label">
                  Cross Product (<InlineMath math="\mathbf{u} \times \mathbf{v}" />):
                </span>
                <span className="avl-result-val font-bold">
                  ⟨{crossUV[0].toFixed(1)}, {crossUV[1].toFixed(1)}, {crossUV[2].toFixed(1)}⟩
                </span>
              </div>
              <div className="avl-result-row">
                <span className="avl-result-label">
                  Parallelogram Area (<InlineMath math="|\mathbf{u} \times \mathbf{v}|" />):
                </span>
                <span className="avl-result-val font-bold">{magCross.toFixed(2)}</span>
              </div>
              <div style={{ marginTop: "0.5rem", paddingTop: "0.75rem", borderTop: "1px dashed rgba(2, 132, 199, 0.3)" }}>
                <div className="avl-result-row">
                  <span className="avl-result-label font-extrabold">
                    Scalar Triple Product:
                  </span>
                  <span className="avl-result-val font-extrabold" style={{ color: darkMode ? "#38bdf8" : "#0056D2" }}>
                    {scalarTriple.toFixed(2)}
                  </span>
                </div>
                <div style={{ fontSize: "0.85rem", marginTop: "0.35rem" }}>
                  <strong>Volume of 3D Parallelepiped:</strong>
                </div>
                <MathBlock math={`V = |\\mathbf{u} \\cdot (\\mathbf{v} \\times \\mathbf{w})| = ${volumeParallelepiped.toFixed(2)}`} />
              </div>
            </div>

            {/* Interactive 3D Vector Viewport */}
            <div className="avl-canvas-wrapper">
              <div className="avl-canvas-header">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <span>Interactive 3D Vector Viewport</span>
                  <span
                    className="avl-badge-pill"
                    style={{
                      background: darkMode ? "rgba(56, 189, 248, 0.15)" : "rgba(0, 86, 210, 0.1)",
                      color: darkMode ? "#38bdf8" : "#0056D2",
                      fontSize: "0.72rem",
                    }}
                  >
                    🖱️ Hover &amp; Orbit Active
                  </span>
                </div>
                <div style={{ display: "flex", gap: "0.4rem" }}>
                  <button
                    type="button"
                    className="avl-canvas-ctrl-btn"
                    onClick={() => setAutoRotate3D((prev) => !prev)}
                    title="Toggle continuous 3D rotation"
                  >
                    {autoRotate3D ? "⏸ Pause" : "▶ Auto-Orbit"}
                  </button>
                  <button
                    type="button"
                    className="avl-canvas-ctrl-btn"
                    onClick={() => setRotSpeed((prev) => (prev === 2.0 ? 4.0 : prev === 4.0 ? 1.0 : 2.0))}
                    title="Toggle 3D rotation speed"
                  >
                    {rotSpeed >= 3.5 ? "⚡ Turbo" : rotSpeed >= 1.8 ? "⚡ Fast" : "🐢 Slow"}
                  </button>
                  <button
                    type="button"
                    className="avl-canvas-ctrl-btn"
                    onClick={() => setZoom3D((z) => Math.min(50, z + 4))}
                    title="Zoom In"
                  >
                    🔍+
                  </button>
                  <button
                    type="button"
                    className="avl-canvas-ctrl-btn"
                    onClick={() => setZoom3D((z) => Math.max(14, z - 4))}
                    title="Zoom Out"
                  >
                    🔍-
                  </button>
                  <button
                    type="button"
                    className="avl-canvas-ctrl-btn"
                    onClick={() => {
                      setRotPitch(24);
                      setRotYaw(45);
                      setZoom3D(30);
                      setRotSpeed(2.0);
                      hoverOffsetRef.current = { yaw: 0, pitch: 0 };
                    }}
                    title="Reset to default isometric angle"
                  >
                    ↺ Reset
                  </button>
                </div>
              </div>

              <div style={{ position: "relative" }}>
                <canvas
                  ref={vector3dCanvasRef}
                  width={800}
                  height={520}
                  className="avl-canvas avl-canvas-3d"
                  onPointerDown={handlePointerDown3D}
                  onPointerMove={handlePointerMove3D}
                  onPointerUp={handlePointerUp3D}
                  onPointerLeave={handlePointerLeave3D}
                  onWheel={handleWheel3D}
                />

                {/* Floating 3D Vector Hover Tooltip */}
                {hoverInfo && (
                  <div
                    className="avl-3d-tooltip"
                    style={{
                      left: Math.min(hoverInfo.x + 10, 320),
                      top: Math.max(hoverInfo.y - 45, 10),
                      borderColor: hoverInfo.color,
                    }}
                  >
                    <span style={{ fontWeight: 800, color: hoverInfo.color }}>
                      Vector {hoverInfo.name}:
                    </span>{" "}
                    ⟨{hoverInfo.val[0]}, {hoverInfo.val[1]}, {hoverInfo.val[2]}⟩ ·{" "}
                    <strong>|{hoverInfo.name}| = {hoverInfo.mag.toFixed(2)}</strong>
                  </div>
                )}

                {/* Subtitle helper badge */}
                <div className="avl-3d-hint">
                  🖱️ Move mouse to hover-tilt · Drag to 3D orbit · Scroll to zoom
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Skew Lines Distance & Point-to-Plane */}
          <div className="avl-card">
            <div className="avl-card-header">
              <h2 className="avl-card-title">
                <span>📏</span> 3D Distance Calculator &amp; Lines/Planes
              </h2>
              <span
                className="avl-badge-pill"
                style={{
                  background: darkMode ? "rgba(56, 189, 248, 0.2)" : "rgba(0, 86, 210, 0.1)",
                  color: darkMode ? "#38bdf8" : "#0056D2",
                }}
              >
                Skew Lines &amp; Planes
              </span>
            </div>

            {/* Distance Between Skew Lines */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div className="avl-canvas-header">
                <span>1. Distance Between Two Skew Lines in 3D Space</span>
              </div>

              <div className="avl-step-item">
                <div className="avl-step-num">1</div>
                <div style={{ width: "100%" }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.4rem" }}>
                    Line 1: <InlineMath math="\mathbf{r}_1(t) = \mathbf{P}_1 + t\mathbf{v}_1" />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "0.35rem" }}>
                    <input type="number" value={p1X} onChange={(e) => setP1X(e.target.value)} className="avl-input-field" placeholder="P₁x" />
                    <input type="number" value={p1Y} onChange={(e) => setP1Y(e.target.value)} className="avl-input-field" placeholder="P₁y" />
                    <input type="number" value={p1Z} onChange={(e) => setP1Z(e.target.value)} className="avl-input-field" placeholder="P₁z" />
                    <input type="number" value={v1X} onChange={(e) => setV1X(e.target.value)} className="avl-input-field" placeholder="v₁x" />
                    <input type="number" value={v1Y} onChange={(e) => setV1Y(e.target.value)} className="avl-input-field" placeholder="v₁y" />
                    <input type="number" value={v1Z} onChange={(e) => setV1Z(e.target.value)} className="avl-input-field" placeholder="v₁z" />
                  </div>
                </div>
              </div>

              <div className="avl-step-item">
                <div className="avl-step-num">2</div>
                <div style={{ width: "100%" }}>
                  <div style={{ fontWeight: 700, marginBottom: "0.4rem" }}>
                    Line 2: <InlineMath math="\mathbf{r}_2(s) = \mathbf{P}_2 + s\mathbf{v}_2" />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "0.35rem" }}>
                    <input type="number" value={p2X} onChange={(e) => setP2X(e.target.value)} className="avl-input-field" placeholder="P₂x" />
                    <input type="number" value={p2Y} onChange={(e) => setP2Y(e.target.value)} className="avl-input-field" placeholder="P₂y" />
                    <input type="number" value={p2Z} onChange={(e) => setP2Z(e.target.value)} className="avl-input-field" placeholder="P₂z" />
                    <input type="number" value={v2X} onChange={(e) => setV2X(e.target.value)} className="avl-input-field" placeholder="v₂x" />
                    <input type="number" value={v2Y} onChange={(e) => setV2Y(e.target.value)} className="avl-input-field" placeholder="v₂y" />
                    <input type="number" value={v2Z} onChange={(e) => setV2Z(e.target.value)} className="avl-input-field" placeholder="v₂z" />
                  </div>
                </div>
              </div>

              {/* Skew Line Result Box */}
              <div className="avl-result-box">
                <div className="avl-result-row">
                  <span className="avl-result-label font-bold">
                    {isParallel ? "Parallel Lines Distance:" : "Minimum Skew Line Distance:"}
                  </span>
                  <span className="avl-result-val font-extrabold" style={{ color: darkMode ? "#38bdf8" : "#0056D2" }}>
                    {skewDistance.toFixed(3)} units
                  </span>
                </div>
                <MathBlock
                  math={`D = \\frac{|(\\mathbf{P}_2 - \\mathbf{P}_1) \\cdot (\\mathbf{v}_1 \\times \\mathbf{v}_2)|}{|\\mathbf{v}_1 \\times \\mathbf{v}_2|} = ${skewDistance.toFixed(3)}`}
                />
              </div>
            </div>

            {/* Point to Plane Distance */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginTop: "1rem" }}>
              <div className="avl-canvas-header">
                <span>2. Distance from Point P to Plane Ax + By + Cz + D = 0</span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
                <div className="avl-input-group">
                  <label className="avl-input-label">Point Px</label>
                  <input type="number" value={ptX} onChange={(e) => setPtX(e.target.value)} className="avl-input-field" />
                </div>
                <div className="avl-input-group">
                  <label className="avl-input-label">Point Py</label>
                  <input type="number" value={ptY} onChange={(e) => setPtY(e.target.value)} className="avl-input-field" />
                </div>
                <div className="avl-input-group">
                  <label className="avl-input-label">Point Pz</label>
                  <input type="number" value={ptZ} onChange={(e) => setPtZ(e.target.value)} className="avl-input-field" />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "0.5rem" }}>
                <div className="avl-input-group">
                  <label className="avl-input-label">Plane A</label>
                  <input type="number" value={planeA} onChange={(e) => setPlaneA(e.target.value)} className="avl-input-field" />
                </div>
                <div className="avl-input-group">
                  <label className="avl-input-label">Plane B</label>
                  <input type="number" value={planeB} onChange={(e) => setPlaneB(e.target.value)} className="avl-input-field" />
                </div>
                <div className="avl-input-group">
                  <label className="avl-input-label">Plane C</label>
                  <input type="number" value={planeC} onChange={(e) => setPlaneC(e.target.value)} className="avl-input-field" />
                </div>
                <div className="avl-input-group">
                  <label className="avl-input-label">Plane D</label>
                  <input type="number" value={planeD} onChange={(e) => setPlaneD(e.target.value)} className="avl-input-field" />
                </div>
              </div>

              <div className="avl-result-box">
                <div className="avl-result-row">
                  <span className="avl-result-label font-bold">Point to Plane Distance:</span>
                  <span className="avl-result-val font-extrabold" style={{ color: darkMode ? "#38bdf8" : "#0056D2" }}>
                    {pointToPlaneDist.toFixed(3)} units
                  </span>
                </div>
                <MathBlock
                  math={`D = \\frac{|Ax_0 + By_0 + Cz_0 + D|}{\\sqrt{A^2 + B^2 + C^2}} = ${pointToPlaneDist.toFixed(3)}`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
