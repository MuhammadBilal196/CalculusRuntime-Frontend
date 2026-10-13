import { useEffect, useState } from "react";

// Shared by the Surface Explorer page and the 3D hero on the home page.

export const PRESETS = [
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

export const PALETTES = [
  { id: 'ocean', label: 'Ocean', stops: ['#163649', '#2b6179', '#4d8ca2', '#86bfc9', '#c6e8e8'] },
  { id: 'viridis', label: 'Viridis', stops: ['#440154', '#3b528b', '#21918c', '#5ec962', '#fde725'] },
  { id: 'sunset', label: 'Sunset', stops: ['#2c115f', '#721f81', '#b73779', '#f1605d', '#feb078'] },
  { id: 'spectral', label: 'Spectral', stops: ['#5e4fa2', '#3288bd', '#66c2a5', '#e6f598', '#fdae61', '#d53e4f'] },
];

function readThemeSignature() {
  const root = document.documentElement;
  return `${root.dataset.theme || ''}|${root.dataset.siteTheme || ''}`;
}

export function useThemeSignature() {
  const [signature, setSignature] = useState(readThemeSignature);
  useEffect(() => {
    const observer = new MutationObserver(() => setSignature(readThemeSignature()));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'data-site-theme'] });
    return () => observer.disconnect();
  }, []);
  return signature;
}

export function readSceneTheme(element) {
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
