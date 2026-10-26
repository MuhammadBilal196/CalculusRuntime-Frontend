import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Search } from "lucide-react";
import "./SimpleConcepts.css";
import { InlineMath } from "../../components/Math";
import { CONCEPT_COURSES, extraConceptGroups } from "../../data/conceptLibrary";

const M = ({ latex }) => <InlineMath latex={latex} />;

export const getConceptSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const conceptGroups = [
  {
    course: "multivariable-calculus",
    kicker: "Before multivariable calculus",
    title: "Functions, dimensions, continuity, and derivatives",
    items: [
      {
        title: "Dimension theory of real-valued functions",
        body: (
          <>
            A real-valued function gives one real number as its answer. The number of inputs tells you the dimension of the input space: <M latex="f(x)" /> uses a line,{" "}
            <M latex="f(x,y)" /> uses a plane, and <M latex="f(x,y,z)" /> uses space. The output is still one number, so you can think of the function as assigning a height, temperature, cost, or density to every allowed input point.
          </>
        ),
      },
      {
        title: "Continuity using the epsilon-delta idea",
        body: (
          <>
            Continuity means small changes in the input create small changes in the output. In <M latex="\\epsilon" />-<M latex="\\delta" /> language, <M latex="\\epsilon" /> is the output error you are willing to allow, and <M latex="\\delta" /> is the input distance you must stay within to keep the output error below <M latex="\\epsilon" />.
          </>
        ),
      },
      {
        title: "Differentiability in one variable",
        body:
          "A differentiable function has a reliable local slope. Near a point, its curve can be closely replaced by a tangent line. If a graph has a sharp corner, jump, cusp, or vertical tangent, differentiability may fail there.",
      },
      {
        title: "Tangent lines and extreme values",
        body: (
          <>
            A tangent line is the best straight-line picture of a curve near one point. Extreme values are highs and lows. In one variable, candidates often occur where <M latex="f'(x)=0" />, where <M latex="f'(x)" /> does not exist, or at endpoints of the interval.
          </>
        ),
        selfStudy: true,
      },
    ],
  },
  {
    course: "multivariable-calculus",
    kicker: "Geometry in space",
    title: "Quadric surfaces",
    items: [
      {
        title: "What a quadric surface is",
        body: (
          <>
            A quadric surface is a 3D shape described by an equation with squared terms such as <M latex="x^2" />,{" "}
            <M latex="y^2" />, and <M latex="z^2" />. The signs and missing variables in the equation tell you the surface type.
          </>
        ),
      },
      {
        title: "Ellipsoids",
        body: (
          <>
            An ellipsoid is like a stretched sphere. A typical form is <M latex="\\frac{x^2}{a^2}+\\frac{y^2}{b^2}+\\frac{z^2}{c^2}=1" />. All squared terms are positive, so the surface is closed and bounded.
          </>
        ),
      },
      {
        title: "Hyperboloids",
        body:
          "A hyperboloid opens outward. If two squared terms are positive and one is negative, you usually get one connected sheet. If one term is positive and two are negative, you usually get two separate sheets.",
      },
      {
        title: "Cylinders",
        body: (
          <>
            A cylinder appears when one variable is missing. For example, <M latex="x^2+y^2=9" /> says nothing about <M latex="z" />, so the circle is extended upward and downward forever.
          </>
        ),
      },
      {
        title: "Paraboloids",
        body: (
          <>
            A paraboloid uses squared terms in some variables and a first-power term in another. <M latex="z=x^2+y^2" /> is a bowl. <M latex="z=x^2-y^2" /> is a saddle-shaped hyperbolic paraboloid.
          </>
        ),
      },
    ],
  },
  {
    course: "multivariable-calculus",
    kicker: "Core multivariable ideas",
    title: "Functions, limits, derivatives, and approximation",
    items: [
      {
        title: "Functions of several variables",
        body: (
          <>
            These functions depend on more than one input. For example, <M latex="f(x,y)" /> might describe the height of land at a map location, while <M latex="f(x,y,z)" /> might describe temperature at a point in a room.
          </>
        ),
      },
      {
        title: "Limits in higher dimensions",
        body:
          "A multivariable limit exists only if the function approaches the same value from every path. Checking one path is not enough; different paths can reach the same point with different answers.",
      },
      {
        title: "Continuity in higher dimensions",
        body:
          "A function is continuous at a point when its value there matches the value it approaches nearby. Informally, the surface has no hole, jump, or tear at that point.",
      },
      {
        title: "Linearization and differentials",
        body: (
          <>
            Linearization replaces a complicated function near a point with a simple linear formula. Differentials estimate small changes: if <M latex="x" /> and <M latex="y" /> change a little, the differential estimates how much <M latex="f" /> changes.
          </>
        ),
        selfStudy: true,
      },
      {
        title: "Taylor series in one and two variables",
        body:
          "A Taylor series builds a function from its value, slopes, curvatures, and higher derivative information near a point. In two variables, it uses partial derivatives to create a local polynomial model of a surface.",
        selfStudy: true,
      },
    ],
  },
  {
    course: "multivariable-calculus",
    kicker: "How surfaces change",
    title: "Partial derivatives, chain rule, gradients, and planes",
    items: [
      {
        title: "Partial derivatives",
        body: (
          <>
            A partial derivative measures change in one direction while temporarily holding the other variables fixed. For <M latex="f(x,y)" />, <M latex="f_x" /> looks left-right and <M latex="f_y" /> looks front-back.
          </>
        ),
      },
      {
        title: "Chain rule",
        body:
          "The chain rule tracks how a function changes when its inputs also depend on something else. It is bookkeeping for connected rates of change.",
      },
      {
        title: "Directional derivative",
        body:
          "A directional derivative tells how fast the function changes if you move from a point in a chosen direction, not just parallel to the x-axis or y-axis.",
      },
      {
        title: "Gradient vector",
        body:
          "The gradient collects all first partial derivatives into one vector. It points in the direction of fastest increase, and its length tells how strong that increase is.",
      },
      {
        title: "Tangent planes and differentials",
        body:
          "A tangent plane is the best flat approximation to a surface near a point. Differentials use that plane to estimate small changes in the function value.",
      },
      {
        title: "Extreme values and saddle points",
        body: (
          <>
            For <M latex="f(x,y)" />, local maxima and minima are high and low spots on a surface. A saddle point rises in one direction and falls in another, so it is not a true maximum or minimum.
          </>
        ),
      },
    ],
  },
  {
    course: "multivariable-calculus",
    kicker: "Accumulation and volume",
    title: "Double and triple integrals",
    items: [
      {
        title: "Riemann sums",
        body:
          "A Riemann sum breaks a region into many small pieces, samples the function on each piece, and adds the results. Integrals are what these sums approach as the pieces become tiny.",
        selfStudy: true,
      },
      {
        title: "Double integrals over rectangles",
        body: (
          <>
            A double integral over a rectangle adds up values across a flat rectangular region. If <M latex="f(x,y)" /> is height, the integral gives volume under the surface above that rectangle.
          </>
        ),
      },
      {
        title: "Iterated integrals",
        body:
          "An iterated integral computes a double integral one variable at a time. You integrate with respect to one variable first, then the other.",
      },
      {
        title: "Double integrals over general regions",
        body: (
          <>
            General regions are not always rectangles, so the bounds may depend on <M latex="x" /> or <M latex="y" />. The main skill is describing the region correctly before integrating.
          </>
        ),
      },
      {
        title: "Area by double integration",
        body: (
          <>
            If you integrate <M latex="1" /> over a region, every tiny piece contributes only its area. Adding all those pieces gives the total area of the region.
          </>
        ),
      },
      {
        title: "Double integrals in polar form",
        body: (
          <>
            Polar coordinates use radius <M latex="r" /> and angle <M latex="\\theta" />. They are useful for circles and circular sectors. The area piece becomes <M latex="r\\,dr\\,d\\theta" />, so the extra <M latex="r" /> must be included.
          </>
        ),
      },
      {
        title: "Triple integrals in rectangular coordinates",
        body: (
          <>
            A triple integral adds values throughout a 3D solid using <M latex="x" />, <M latex="y" />, and <M latex="z" />. If the function is density, the triple integral can give total mass; if the function is <M latex="1" />, it gives volume.
          </>
        ),
      },
    ],
  },
];

const selfReadingTopics = [
  "Quadric surfaces and their classification, Thomas Calculus article 12.6.",
  "Linearization and differentials, Thomas Calculus pages 167-169.",
  "Taylor series expansion in one and two variables, Thomas Calculus page 871.",
  "Tangent lines and extreme values of single-variable functions.",
  "Riemann sums from the previous course.",
];

/** Every concept group of every course, in reading order. */
export const allConceptGroups = [
  ...extraConceptGroups.filter((g) => g.course === "calculus-analytical-geometry"),
  ...conceptGroups,
  ...extraConceptGroups.filter((g) => g.course !== "calculus-analytical-geometry"),
];

/** Flat list of concepts with their course, group and slug. */
export function getAllConcepts() {
  return allConceptGroups.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      course: group.course,
      groupKicker: group.kicker,
      groupTitle: group.title,
      slug: getConceptSlug(item.title),
    })),
  );
}

const COURSE_KEY = "calcvoyager_concepts_course";

function readSavedCourse() {
  try {
    return window.localStorage.getItem(COURSE_KEY);
  } catch {
    return null;
  }
}

function saveCourse(id) {
  try {
    window.localStorage.setItem(COURSE_KEY, id);
  } catch {
    /* storage unavailable: the URL still remembers the course */
  }
}

const isCourse = (id) => CONCEPT_COURSES.some((c) => c.id === id);

/** Plain text of a card body (string or JSX) for searching. */
function textOf(node) {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join(" ");
  if (node.props) return node.props.latex || textOf(node.props.children);
  return "";
}

function SimpleConcepts() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");

  const fromUrl = params.get("course");
  const saved = readSavedCourse();
  const courseId = isCourse(fromUrl) ? fromUrl : isCourse(saved) ? saved : CONCEPT_COURSES[0].id;
  const course = CONCEPT_COURSES.find((c) => c.id === courseId);

  const counts = useMemo(() => {
    const map = {};
    allConceptGroups.forEach((g) => {
      map[g.course] = (map[g.course] || 0) + g.items.length;
    });
    return map;
  }, []);

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allConceptGroups
      .filter((g) => g.course === courseId)
      .map((g) => ({
        ...g,
        items: q
          ? g.items.filter((item) => `${item.title} ${textOf(item.body)}`.toLowerCase().includes(q))
          : g.items,
      }))
      .filter((g) => g.items.length > 0);
  }, [courseId, query]);

  const shown = groups.reduce((n, g) => n + g.items.length, 0);

  const pickCourse = (id) => {
    saveCourse(id);
    setQuery("");
    setParams({ course: id }, { replace: true });
  };

  const onTabKey = (event, index) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    event.preventDefault();
    const next = CONCEPT_COURSES[(index + step + CONCEPT_COURSES.length) % CONCEPT_COURSES.length];
    pickCourse(next.id);
    document.getElementById(`scp-tab-${next.id}`)?.focus();
  };

  return (
    <main className="scp cvx">
      <section className="scp-hero">
        <div className="scp-wrap">
          <p className="scp-kicker">Simple terms guide</p>
          <h1>{course.title} concepts, explained plainly.</h1>
          <p className="scp-hero__lead">
            What each idea means, why it matters, and how to recognise it before
            working through formal exercises. Pick a course, read the card, then
            open it for worked patterns and a self-check.
          </p>
        </div>
      </section>

      <div className="scp-wrap">
        <div className="scp-bar">
          <div className="scp-tabs" role="tablist" aria-label="Choose a course">
            {CONCEPT_COURSES.map((c, index) => {
              const active = c.id === courseId;
              return (
                <button
                  key={c.id}
                  id={`scp-tab-${c.id}`}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls="scp-panel"
                  tabIndex={active ? 0 : -1}
                  className={`scp-tab${active ? " is-active" : ""}`}
                  onClick={() => pickCourse(c.id)}
                  onKeyDown={(e) => onTabKey(e, index)}
                >
                  <span className="scp-tab__name">{c.short}</span>
                  <span className="scp-tab__count">{counts[c.id] || 0}</span>
                </button>
              );
            })}
          </div>
          <label className="scp-search">
            <Search size={16} aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={`Search ${course.short} concepts`}
              aria-label={`Search ${course.short} concepts`}
            />
          </label>
        </div>

        <div id="scp-panel" role="tabpanel" aria-labelledby={`scp-tab-${courseId}`}>
          {!query && (
            <section className="scp-map" aria-labelledby="scp-map-title">
              <div>
                <p className="scp-kicker">Reading order</p>
                <h2 id="scp-map-title">{course.roadmapTitle}</h2>
              </div>
              <ol className="scp-map__steps">
                {course.roadmap.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
            </section>
          )}

          {query && (
            <p className="scp-results" aria-live="polite">
              {shown} concept{shown === 1 ? "" : "s"} match “{query.trim()}”
            </p>
          )}

          {groups.length === 0 && (
            <div className="scp-empty">
              <h2>No concepts match that search</h2>
              <p>Try a shorter word, or clear the search to see every {course.short} concept.</p>
              <button type="button" onClick={() => setQuery("")}>Clear search</button>
            </div>
          )}

          {groups.map((group) => (
            <section className="scp-section" key={group.title}>
              <header className="scp-section__head">
                <p className="scp-kicker">{group.kicker}</p>
                <h2>{group.title}</h2>
                <span className="scp-section__count">
                  {group.items.length} concept{group.items.length === 1 ? "" : "s"}
                </span>
              </header>
              <div className="scp-grid">
                {group.items.map((item) => (
                  <article
                    className={`scp-card${item.selfStudy ? " scp-card--self" : ""}`}
                    key={item.title}
                  >
                    {item.selfStudy && <span className="scp-tag">Self-reading</span>}
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <Link className="scp-card__link" to={`/simple-concepts/${getConceptSlug(item.title)}`}>
                      Explore more <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}

          {courseId === "multivariable-calculus" && !query && (
            <section className="scp-reading" aria-labelledby="scp-reading-title">
              <div>
                <p className="scp-kicker">Homework and self-reading</p>
                <h2 id="scp-reading-title">Topics best revised independently</h2>
              </div>
              <ul>
                {selfReadingTopics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </main>
  );
}

export default SimpleConcepts;
