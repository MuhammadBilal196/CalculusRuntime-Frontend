import { Link } from "react-router-dom";
import { getCourseById } from "../../data/courses";
import "../linearAlgebra/LinearAlgebraOverview.css";

const CORE_PATH_ORDER = [
  "/limits-continuity/1",
  "/differentiation/1",
  "/integration/1",
  "/sequences-series/1",
  "/taylor-series/1",
  "/conic-sections/1",
  "/lines-geometry/1",
  "/circles-tangents/1",
  "/advanced-calculus/1",
  "/differential-equations/1",
  "/space-curves/1",
  "/vector-motion/1",
  "/polar-calculus/1",
  "/solids-revolution/1",
  "/volume-cross-sections/1",
  "/numerical-methods/1",
  "/improper-integrals-advanced/1",
  "/complex-numbers/1",
  "/hyperbolic-functions/1",
  "/laplace-transforms/1",
  "/fourier-series/1",
];
const CORE_CERT_PATHS = new Set(CORE_PATH_ORDER);

const EXCLUDED_FROM_ROADMAP = new Set([
  "/calculus/overview",
  "/courses/calculus-analytical-geometry/overview",
  "/practice",
  "/quiz/calculus-analytical-geometry",
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

function CalculusOverview() {
  const course = getCourseById("calculus-analytical-geometry");
  const roadmap = (course?.modules || []).filter((m) => !EXCLUDED_FROM_ROADMAP.has(m.path));

  const coreModules = CORE_PATH_ORDER.map((path) => roadmap.find((m) => m.path === path)).filter(Boolean);
  const toolModules = roadmap.filter((m) => !CORE_CERT_PATHS.has(m.path) && isToolModule(m));
  const extraModules = roadmap.filter((m) => !CORE_CERT_PATHS.has(m.path) && !isToolModule(m));

  const firstModule = coreModules[0] || roadmap[0];
  const firstTopicPath = firstModule?.path || "/limits-continuity/1";

  return (
    <main className="home-page la-overview">
      <section className="home-hero" style={{ minHeight: "auto" }}>
        <div className="hero-copy">
          <p className="eyebrow">Start here · Course overview</p>
          <h1>Calculus &amp; Analytical Geometry, from first principles</h1>
          <p>
            Calculus and Analytical Geometry forms the mathematical bedrock for modern science,
            engineering, and computational physics. From rigorous epsilon-delta limit definitions and
            rates of change to accumulation via Riemann integrals, infinite series, coordinate geometry,
            and differential equations, this course takes you from foundational principles to university
            mastery aligned with F.Sc (FBISE/Punjab) and Pakistani university syllabi (NUST, FAST, GIKI, UET).
          </p>
          <div className="hero-actions">
            <Link className="secondary-action" to="/courses/calculus-analytical-geometry">
              ← All modules
            </Link>
            <Link className="primary-action" to={firstTopicPath}>
              Begin with {roadmap[0]?.title || "Limits & Continuity"} →
            </Link>
          </div>
        </div>
        <div className="hero-image-container course-hero-image-container">
          <img
            src="/images/courses/calc-geometry-hero.svg"
            alt="Calculus and Analytical Geometry Curves and Tangents Visual"
            className="hero-graph-img course-hero-img"
          />
        </div>
      </section>

      <section className="guide-section" aria-labelledby="why-heading">
        <div className="section-kicker">Why it matters</div>
        <h2 id="why-heading">What calculus &amp; geometry actually gives you</h2>
        <p className="la-overview-lead">
          Every discipline that models physical change, optimization, geometry, or rates depends on
          calculus. Analytical geometry bridges algebra with spatial reasoning, allowing lines, curves,
          and conic sections to be analyzed through equations.
        </p>
        <ul className="la-overview-bullets">
          <li>Model rates of change, velocity, acceleration, and sensitivity with differential calculus.</li>
          <li>Calculate accumulated quantities, areas, volumes, work, and center of mass using integration.</li>
          <li>Classify trajectories and orbits using analytical conic equations and tangent properties.</li>
          <li>Solve physical rate equations and dynamic systems using ordinary differential equations (ODEs).</li>
        </ul>
      </section>

      <section className="guide-section" aria-labelledby="roadmap-heading">
        <div className="section-kicker">Roadmap</div>
        <h2 id="roadmap-heading">What you'll learn, in order</h2>
        <RoadmapGroup
          id="roadmap-core"
          title="Core path · required for the certificate"
          lead="Work through these core modules in order. Every topic touching core single-variable calculus, analytical geometry, space curves, volumes, ODEs, and transforms is included here and required for the course certificate."
          modules={coreModules}
          tag="Core · certificate"
          core
        />
        <RoadmapGroup
          id="roadmap-extra"
          title="Additional depth · optional"
          lead="Take any of these specialized analysis, transform, and differential equation modules once the core path is done. They provide advanced mathematical depth and are optional for the certificate."
          modules={extraModules}
          tag="Additional Depth · optional"
        />
        <RoadmapGroup
          id="roadmap-tools"
          title="Interactive tools"
          lead="Use these interactive visualizers alongside the guides to explore curves, derivatives, and integrals."
          modules={toolModules}
          tag="Interactive Tool"
        />
      </section>

      <section className="guide-section" aria-labelledby="structure-heading">
        <div className="section-kicker">How this course works</div>
        <h2 id="structure-heading">Structure &amp; certificate</h2>
        <p className="la-overview-lead">
          Every topic module contains two detailed sections of in-depth theory, step-by-step certificate
          worked examples, and interactive MCQ checkpoints with instant feedback and step-by-step reasoning.
          Scoring 80%+ on each topic's quizzes unlocks section completion.
        </p>
        <p className="la-overview-lead">
          Complete the core tracks spanning foundational single-variable calculus, analytical geometry,
          space curves &amp; motion, advanced volume &amp; numerical techniques, and complex analysis &amp; transforms
          to master the curriculum and earn your verifiable digital certificate.
        </p>
      </section>

      <section className="guide-section" aria-labelledby="prereq-heading">
        <div className="section-kicker">Before you start</div>
        <h2 id="prereq-heading">Prerequisites</h2>
        <p className="la-overview-lead">
          A solid grounding in high school algebra, basic trigonometry (unit circle, identities), and
          standard function notation is all you need. The course starts from intuitive limits and builds
          steadily through every concept from first principles.
        </p>
      </section>
    </main>
  );
}

export default CalculusOverview;
