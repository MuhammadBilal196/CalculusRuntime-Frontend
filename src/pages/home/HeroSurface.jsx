import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { compileSurface } from "../../utils/math/surfaceMath";
import { PALETTES, PRESETS, readSceneTheme, useThemeSignature } from "../tools/surfaceConfig";
import { createSurfaceScene } from "../tools/surfaceScene";
import "./HeroSurface.css";

const HILLS = PRESETS[0];
// Roughly the angle of the old hero picture: the two peaks sit left and right.
const HOME_VIEW = { theta: Math.PI / 4, phi: 1.08 };

const prefersReducedMotion = () => Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches);

export default function HeroSurface({ fallback }) {
  const stageRef = useRef(null);
  const viewportRef = useRef(null);
  const sceneRef = useRef(null);
  const [failed, setFailed] = useState(false);
  const [spinning, setSpinning] = useState(() => !prefersReducedMotion());
  const [onScreen, setOnScreen] = useState(true);
  const themeSignature = useThemeSignature();

  useEffect(() => {
    let scene;
    try {
      scene = createSurfaceScene(
        viewportRef.current,
        { onUserOrbit: () => setSpinning(false) },
        // No wheel zoom or point probe here, so scrolling the home page is never hijacked.
        // The z-axis is trimmed to the surface's height so the graph can fill the hero.
        { wheelZoom: false, probe: false, spinSpeed: 0.22, home: HOME_VIEW, distance: 2.8, zAxis: 0.62, gridToDomain: true },
      );
    } catch {
      setFailed(true);
      return undefined;
    }
    scene.setDomain({ range: HILLS.range, segments: 88 });
    scene.setSurface(compileSurface(HILLS.formula));
    scene.setParams({ a: HILLS.a, k: HILLS.k });
    scene.setPalette(PALETTES[0].stops);
    scene.setShow({ axes: true, ticks: false, xy: true, yz: false, xz: false, mesh: false, tangent: false });
    sceneRef.current = scene;
    return () => {
      scene.dispose();
      sceneRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (sceneRef.current && stageRef.current) sceneRef.current.setTheme(readSceneTheme(stageRef.current));
  }, [themeSignature]);

  // Only spin while the hero is on screen.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting));
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    sceneRef.current?.setAutoRotate(spinning && onScreen);
  }, [spinning, onScreen]);

  if (failed) return fallback;

  return (
    <div className="hero-surface">
      <div className="hero-surface__stage" ref={stageRef}>
        <div className="hero-surface__viewport" ref={viewportRef} />
      </div>
      <div className="hero-surface__bar">
        <span>Drag to rotate</span>
        <Link to="/surface-explorer">Open the 3D explorer →</Link>
      </div>
    </div>
  );
}
