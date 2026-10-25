import { Link } from "react-router-dom";
import { getCourseById } from "../../data/courses";
import "../linearAlgebra/LinearAlgebraOverview.css";

/**
 * Core certificate modules, in the order students should learn them.
 * Every other guide is "Additional depth" (optional); tools are listed separately.
 * To promote or demote a module, add or remove its path here.
 */
const CORE_PATH_ORDER = [
  "/3d-geometry/1",
  "/partial-derivatives/1",
  "/multiple-integrals/1",
  "/coordinate-transformations/1",
  "/lagrange-multipliers/1",
  "/vector-calculus/1",
  "/divergence-curl/1",
  "/stokes-theorem/1",
];
const CORE_CERT_PATHS = new Set(CORE_PATH_ORDER);

const EXCLUDED_FROM_ROADMAP = new Set([
  "/multivariable-calculus/overview",
  "/courses/multivariable-calculus/overview",
  "/practice",
  "/quiz/multivariable-calculus",
]);

function isToolModule(mod) {
  const meta = mod.meta?.toLowerCase() || "";
  return meta.includes("tool") || meta.includes("interactive");
}

function RoadmapGroup({ id, title, lead, modules, tag, core = false }) {
  if (!modules.length) return null;
  return (
    <>
      <h3 id={id} style={{ margin: "2rem 0 0.4rem", fontSize: "1.15rem" }}>
        {title}
      </h3>
      {lead && <p className="la-overview-lead" style={{ marginTop: 0 }}>{lead}</p>}
      <ol className="la-roadmap">
        {modules.map((mod, i) => (
          <li key={mod.path}>
            <Link to={mod.path} className="la-roadmap-row">
              <span className="la-roadmap-num">{i + 1}</span>
              <span className="la-roadmap-copy">
                <span className="la-roadmap-title">
                  {mod.title}
                  <span className={`la-roadmap-tag${core ? " la-roadmap-tag--core" : ""}`}>{tag}</span>
                </span>
                <small>{mod.description}</small>
              </span>
              <span className="la-roadmap-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ol>
    </>
  );
}

function MultivariableOverview() {
  const course = getCourseById("multivariable-calculus");
  const roadmap = (course?.modules || []).filter((m) => !EXCLUDED_FROM_ROADMAP.has(m.path));

  const coreModules = CORE_PATH_ORDER.map((path) => roadmap.find((m) => m.path === path)).filter(Boolean);
  const toolModules = roadmap.filter((m) => !CORE_CERT_PATHS.has(m.path) && isToolModule(m));
  const extraModules = roadmap.filter((m) => !CORE_CERT_PATHS.has(m.path) && !isToolModule(m));

  const firstModule = coreModules[0] || roadmap[0];
  const firstTopicPath = firstModule?.path || "/partial-derivatives/1";

  return (
    <main className="home-page la-overview">
      <section className="home-hero" style={{ minHeight: "auto" }}>
        <div className="hero-copy">
          <p className="eyebrow">Start here · Course overview</p>
          <h1>Multivariable Calculus, from first principles</h1>
          <p>
            Multivariable Calculus extends single-variable analysis into multidimensional space and
            physical vector field theory. The core path covers 3D geometry, partial derivatives and
            gradients, double and triple integrals, Jacobians and change of variables, constrained
            optimization via Lagrange multipliers, and the crown jewel theorems of vector
            calculus—Green's, Stokes', and the Divergence Theorem. Optional additional-depth modules then
            take you through space curves, advanced optimization, approximation theory, potential theory,
            differential forms, the calculus of variations, the geometry of surfaces, integration on
            moving domains, and nonlinear dynamical systems.
          </p>
          <div className="hero-actions">
            <Link className="secondary-action" to="/courses/multivariable-calculus">
              ← All modules
            </Link>
            <Link className="primary-action" to={firstTopicPath}>
              Begin with {firstModule?.title || "Partial Derivatives"} →
            </Link>
          </div>
        </div>
        <div className="hero-image-container course-hero-image-container">
          <img
            src="/images/courses/multivariable-calc-hero.svg"
            alt="Multivariable Calculus 3D Surface and Gradient Field"
            className="hero-graph-img course-hero-img"
          />
        </div>
      </section>

      <section className="guide-section" aria-labelledby="why-heading">
        <div className="section-kicker">Why it matters</div>
        <h2 id="why-heading">What multivariable calculus actually gives you</h2>
        <p className="la-overview-lead">
          The real world has three spatial dimensions (and time as the fourth). Understanding gravity,
          electromagnetism, fluid flow, aerodynamics, neural network gradient descent, and thermodynamic
          heat transfer requires multivariable calculus.
        </p>
        <ul className="la-overview-bullets">
          <li>Optimize multidimensional functions and find extrema using partial derivatives and Hessians.</li>
          <li>Find constrained optima in economics and engineering with Lagrange Multipliers.</li>
          <li>Compute masses, moments, and volumes of 3D solids using Cartesian, cylindrical, and spherical triple integrals.</li>
          <li>Connect microscopic circulation and flux to macroscopic boundary integrals through Green's, Gauss's, and Stokes' Theorems.</li>
          <li>Model gravity and electrostatics with the Laplacian and harmonic functions, and read Maxwell's equations as conservation laws.</li>
          <li>Unify Green's, Stokes' and the Divergence Theorem into one statement with differential forms and the generalized Stokes' theorem.</li>
          <li>Evaluate the Gaussian integral behind the normal distribution, and find optimal curves and paths with the Euler–Lagrange equation.</li>
          <li>Measure true lengths, angles and areas on curved surfaces with the first fundamental form, then describe how they bend with curvature and geodesics.</li>
          <li>Slice regions along level sets with the coarea formula, and differentiate integrals over moving regions with the Reynolds transport theorem.</li>
          <li>Predict the long-term behaviour of nonlinear systems — pendulums, competing species, gradient descent — from phase portraits, Jacobians and Lyapunov functions.</li>
        </ul>
      </section>

      <section className="guide-section" aria-labelledby="roadmap-heading">
        <div className="section-kicker">Roadmap</div>
        <h2 id="roadmap-heading">What you'll learn, in order</h2>
        <RoadmapGroup
          id="roadmap-core"
          title="Core path · required for the certificate"
          lead="Work through these in order. Together they form the standard multivariable calculus syllabus."
          modules={coreModules}
          tag="Core · certificate"
          core
        />
        <RoadmapGroup
          id="roadmap-extra"
          title="Additional depth · optional"
          lead="Take any of these once the core path is done. They deepen the theory and connect it to physics, geometry and data science, but are not required for the certificate."
          modules={extraModules}
          tag="Additional Depth · optional"
        />
        <RoadmapGroup
          id="roadmap-tools"
          title="Interactive tools"
          lead="Use these alongside the guides to explore surfaces, extrema, volumes and vector fields."
          modules={toolModules}
          tag="Interactive Tool"
        />
      </section>

      <section className="guide-section" aria-labelledby="structure-heading">
        <div className="section-kicker">How this course works</div>
        <h2 id="structure-heading">Structure &amp; certificate</h2>
        <p className="la-overview-lead">
          Every topic guide is split into two sections with rigorous theoretical foundations, graphical
          intuition, worked examples, and interactive MCQ checkpoints with instant score tracking.
        </p>
        <p className="la-overview-lead">
          The core certificate track covers <strong>3D Analytical Geometry &amp; Quadric Surfaces</strong>,{" "}
          <strong>Partial Derivatives</strong>, <strong>Multiple Integrals</strong>,{" "}
          <strong>Coordinate Transformations &amp; Surfaces</strong>, <strong>Lagrange Multipliers</strong>,{" "}
          <strong>Vector Calculus</strong>, <strong>Divergence &amp; Curl</strong>, and{" "}
          <strong>Stokes' Theorem</strong>. Complete the core modules to unlock the 100-question final exam
          and earn your verifiable digital certificate.
        </p>
        <p className="la-overview-lead">
          Every other guide is optional additional depth. Newer modules such as{" "}
          <strong>Potential Theory</strong>, <strong>Differential Forms</strong>,{" "}
          <strong>Advanced Integration &amp; Variational Methods</strong>, <strong>Geometry of Surfaces</strong>,
          <strong>Integration on Moving Domains</strong>, and <strong>Nonlinear Dynamical Systems</strong> each pair two topics with a 20-question quiz per
          topic. Both topics are always open to read; the second topic's quiz unlocks once you pass the first.
        </p>
      </section>

      <section className="guide-section" aria-labelledby="prereq-heading">
        <div className="section-kicker">Before you start</div>
        <h2 id="prereq-heading">Prerequisites</h2>
        <p className="la-overview-lead">
          Comfort with single-variable differential and integral calculus (derivatives, product/chain rules,
          definite integrals) and basic vector algebra (dot and cross products in 3D) is recommended.
        </p>
      </section>
    </main>
  );
}

export default MultivariableOverview;
