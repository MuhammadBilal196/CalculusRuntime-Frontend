import { Component, lazy, Suspense } from "react";

// three.js is large, so the live graph loads in its own chunk after the page appears.
const HeroSurface = lazy(() => import("./HeroSurface"));

const heroImage = <img src="/hero-graph.png" alt="3D Wave Graph" className="hero-graph-img" />;
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
