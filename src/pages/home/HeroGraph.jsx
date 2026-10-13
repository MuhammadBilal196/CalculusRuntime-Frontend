import { Component, lazy, Suspense } from "react";
import "./HeroGraph.css";

// three.js is large, so the live graph loads in its own chunk after the page appears.
const HeroSurface = lazy(() => import("./HeroSurface"));

/*
 * The dotted axes of the live graph, traced over the picture so both show the same frame.
 * Everything is in the picture's own pixels (1024 × 577); `hidden` is the stretch of a
 * half-axis that runs behind the surface.
 */
const ORIGIN = [535, 295];
const DOT_GAP = 15;
const ARROW_LENGTH = 28;
const ARROW_HALF_WIDTH = 9;
const HALF_AXES = [
  { label: "+x", dir: [0.88, 0.475], length: 425 },
  { label: "−x", dir: [-0.88, -0.475], length: 425, hidden: [110, 330] },
  { label: "+y", dir: [0.869, -0.496], length: 410, hidden: [40, 352] },
  { label: "−y", dir: [-0.869, 0.496], length: 410 },
  { label: "+z", dir: [0, -1], length: 295 },
  { label: "−z", dir: [0, 1], length: 295, hidden: [0, 247] },
];

function PictureAxes() {
  return (
    <g className="hero-graph-axes" aria-hidden="true">
      {HALF_AXES.map(({ label, dir: [dx, dy], length, hidden = [0, 0] }) => {
        const at = (distance) => [ORIGIN[0] + dx * distance, ORIGIN[1] + dy * distance];
        const dots = [];
        for (let distance = DOT_GAP; distance <= length - ARROW_LENGTH; distance += DOT_GAP) dots.push(distance);
        const [tipX, tipY] = at(length);
        const [baseX, baseY] = at(length - ARROW_LENGTH);
        const [labelX, labelY] = at(length + 30);
        const arrow = [
          [tipX, tipY],
          [baseX - dy * ARROW_HALF_WIDTH, baseY + dx * ARROW_HALF_WIDTH],
          [baseX + dy * ARROW_HALF_WIDTH, baseY - dx * ARROW_HALF_WIDTH],
        ];
        return (
          <g key={label} className={`hero-graph-axis hero-graph-axis--${label[1]}`}>
            {dots.map((distance) => {
              const [cx, cy] = at(distance);
              const isHidden = distance > hidden[0] && distance < hidden[1];
              return <circle key={distance} cx={cx} cy={cy} r="3.6" className={isHidden ? "is-hidden" : undefined} />;
            })}
            <polygon points={arrow.map((point) => point.join(",")).join(" ")} />
            <text x={labelX} y={labelY}>{label}</text>
          </g>
        );
      })}
      <circle className="hero-graph-origin" cx={ORIGIN[0]} cy={ORIGIN[1]} r="6" />
    </g>
  );
}

// The view box is taller than the picture so the z-axis has room above and below it.
const heroImage = (
  <svg className="hero-graph-img" viewBox="0 -48 1024 684" role="img" aria-label="3D Wave Graph">
    <image href="/hero-graph.png" width="1024" height="577" />
    <PictureAxes />
  </svg>
);
const canUseWebGL = typeof window !== "undefined" && "WebGLRenderingContext" in window;

// If the 3D chunk fails to load, keep showing the picture instead of the site error page.
class PictureOnError extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? heroImage : this.props.children;
  }
}

/** Home-page hero graph: an interactive 3D surface, with the static picture as the fallback. */
export default function HeroGraph() {
  if (!canUseWebGL) return heroImage;
  return (
    <PictureOnError>
      <Suspense fallback={heroImage}>
        <HeroSurface fallback={heroImage} />
      </Suspense>
    </PictureOnError>
  );
}
