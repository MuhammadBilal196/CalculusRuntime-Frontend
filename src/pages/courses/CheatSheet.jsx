// src/pages/courses/CheatSheet.jsx
import { useState, useRef, useMemo } from "react";
import { Check, Copy, Download, Search } from "lucide-react";
import { useProgress } from "../../context/ProgressContext";
import formulaData from "../../data/formulaData.js";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import "./CheatSheet.css";

// ─── Topic key → section ids that mark the topic as studied ─────────────────
const two = (prefix) => [`${prefix}-1`, `${prefix}-2`];

const TOPIC_PROGRESS_KEYS = {
  // Calculus & Analytical Geometry
  "limits-continuity": two("limits"),
  differentiation: two("calc-diff"),
  integration: two("calc-int"),
  "sequences-series": two("calc-series"),
  "conic-sections": two("calc-conics"),
  "lines-geometry": two("lines"),
  "circles-tangents": two("circles"),
  "advanced-calculus": two("advcalc"),
  "differential-equations": two("ode"),
  "taylor-series": two("taylor"),
  "pointwise-uniform-convergence": two("pointwise-uniform-convergence"),
  "interchanging-limits": two("interchanging-limits"),
  "power-series-ode": two("power-series-ode"),
  "frobenius-method": two("frobenius-method"),
  "analytic-functions": two("analytic-functions"),
  "contour-integrals": two("contour-integrals"),
  "space-curves": two("space-curves"),
  "vector-motion": two("vector-motion"),
  "parametric-surfaces": two("parametric-surfaces"),
  "polar-calculus": two("polar-calculus"),
  "solids-revolution": two("solids-revolution"),
  "volume-cross-sections": two("volume-cross-sections"),
  "numerical-methods": two("numerical-methods"),
  "improper-integrals-advanced": two("improper-integrals"),
  "complex-numbers": two("complex-numbers"),
  "hyperbolic-functions": two("hyperbolic-functions"),
  "laplace-transforms": two("laplace-transforms"),
  "fourier-series": two("fourier-series"),
  "gamma-beta-functions": two("gamma-beta"),
  "leibniz-rule": two("leibniz-rule"),
  "fourier-transforms": two("fourier-transforms"),
  "z-transforms": two("z-transforms"),
  "intro-pdes": two("intro-pdes"),
  "orthogonal-polynomials": two("orthogonal-polynomials"),
  // Multivariable Calculus
  "partial-derivatives": two("partial"),
  extrema: ["extreme", "extrema"],
  "lagrange-multipliers": two("lagrange"),
  "multiple-integrals": two("integrals"),
  "vector-calculus": two("vector"),
  "divergence-curl": two("divergence"),
  "stokes-theorem": two("stokes"),
  "3d-geometry": two("geo3d"),
  "coordinate-transformations": two("coordinate-transformations"),
  "constrained-optimization": two("optimization"),
  "vector-fields-approximation": two("vector-fields-approximation"),
  "potential-theory": ["potential-theory"],
  "differential-forms": ["differential-forms"],
  "advanced-integration": ["advanced-integration"],
  "surface-geometry": ["surface-geometry"],
  "moving-domains": ["moving-domains"],
  "nonlinear-dynamics": ["nonlinear-dynamics"],
  // Linear Algebra
  "la-equations": two("la-lineq"),
  "la-subspaces": [...two("la-systems"), ...two("la-vectors")],
  "la-vectors": two("la-vectors"),
  "la-matrices": two("la-matrices"),
  "la-systems": two("la-systems"),
  "la-transformations": two("la-transform"),
  "la-orthogonality": two("la-ortho"),
  "la-eigen": two("la-eigen"),
  "la-svd": two("la-svd"),
  "la-lu-decomposition": two("la-a-lu"),
  "la-cholesky-decomposition": two("la-a-cholesky"),
  "la-jordan-normal-form": two("la-a-jordan"),
  "la-matrix-norms-conditioning": two("la-a-norms"),
  "la-complex-vector-spaces": two("la-complex"),
  "la-quadratic-forms-definiteness": two("la-quadratic"),
  "la-change-of-basis-similarity": two("la-change-basis"),
  "la-affine-homogeneous": two("la-affine"),
  "la-principal-component-analysis": two("la-pca"),
  "la-markov-chains-steady-states": two("la-markov"),
  "la-linear-programming-simplex": two("la-linear-programming"),
  // Probability & Statistics
  "prob-basics": two("ps-basics"),
  "prob-random-vars": two("ps-rv"),
  "prob-distributions": two("ps-rv"),
  "prob-descriptive": two("ps-desc"),
  "prob-hypothesis": [...two("ps-hyp"), ...two("ps-b-anova")],
  "prob-regression": two("ps-reg"),
  "prob-entropy-mutual-information": two("ps-it"),
  "prob-cross-entropy-kl": two("ps-it"),
  "prob-censoring-kaplan-meier": two("ps-sv"),
  "prob-hazard-survival-models": two("ps-sv"),
  "prob-sequential-probability-ratio": two("ps-sd"),
  "prob-multiple-testing": two("ps-sd"),
  "prob-bayesian-inference": two("ps-a-bayes"),
  "prob-maximum-likelihood": two("ps-a-mle"),
  "prob-confidence-intervals": two("ps-a-ci"),
  "prob-mgf": two("ps-a-mgf"),
  "prob-chi-square": two("ps-b-chisq"),
  "prob-nonparametric": two("ps-b-nonparam"),
  "prob-multiple-regression": two("ps-b-mlr"),
  "prob-joint-distributions": two("ps-c-joint"),
  "prob-multivariate-normal": two("ps-c-mvn"),
  "prob-stochastic-processes": two("ps-c-stoch"),
  "prob-clt": two("ps-c-clt"),
  "prob-logistic-regression": two("ps-logistic"),
  "prob-time-series": two("ps-timeseries"),
  "prob-monte-carlo": two("ps-montecarlo"),
  "prob-bootstrap": two("ps-bootstrap"),
  "prob-order-statistics": two("ps-orderstats"),
  "prob-queueing": two("ps-queueing"),
};

const CATEGORIES = [
  "All Subjects",
  "Calculus & Geometry",
  "Multivariable Calculus",
  "Linear Algebra",
  "Probability & Stats",
];

const ALL_KEYS = Object.keys(formulaData);

const nextFrame = () => new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

export default function CheatSheet() {
  const { progress } = useProgress();
  const completedSections = progress?.completedSections || {};
  const sheetRef = useRef(null);

  const [activeCategory, setActiveCategory] = useState("All Subjects");
  const [downloading, setDownloading] = useState(false);
  const [copiedId, setCopiedId] = useState(null);
  const [selectedTopics, setSelectedTopics] = useState(() => ALL_KEYS);
  const [searchTerm, setSearchTerm] = useState("");

  // ── Which topics has the student completed? ──────────────────────────────
  const isCompleted = (topicKey) => {
    const keys = TOPIC_PROGRESS_KEYS[topicKey] ?? [topicKey];
    return keys.some((k) => !!completedSections[k]);
  };

  const inCategory = (topic) => activeCategory === "All Subjects" || topic.category === activeCategory;

  const categoryCounts = useMemo(() => {
    const counts = { "All Subjects": ALL_KEYS.length };
    Object.values(formulaData).forEach((topic) => {
      counts[topic.category] = (counts[topic.category] || 0) + 1;
    });
    return counts;
  }, []);

  const visibleTopics = Object.entries(formulaData).filter(([, topic]) => inCategory(topic));
  const selectedInView = visibleTopics.filter(([key]) => selectedTopics.includes(key)).length;

  // ── Topic selection ──────────────────────────────────────────────────────
  const toggleTopic = (key) => {
    setSelectedTopics((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  const selectAll = () => setSelectedTopics(ALL_KEYS);
  const selectDone = () => setSelectedTopics(ALL_KEYS.filter(isCompleted));
  const clearAll = () => setSelectedTopics([]);

  const copyFormula = async (formulaText, id) => {
    try {
      await navigator.clipboard.writeText(formulaText);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      /* clipboard blocked (insecure context or permissions) */
    }
  };

  // ── Filtered formulas by search and category ──────────────────────────────
  const filteredData = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return Object.entries(formulaData)
      .filter(
        ([key, topic]) =>
          selectedTopics.includes(key) &&
          (activeCategory === "All Subjects" || topic.category === activeCategory),
      )
      .map(([key, topic]) => ({
        key,
        ...topic,
        formulas: topic.formulas.filter(
          (f) =>
            q === "" ||
            topic.title.toLowerCase().includes(q) ||
            f.name.toLowerCase().includes(q) ||
            f.formula.toLowerCase().includes(q) ||
            (f.note && f.note.toLowerCase().includes(q)),
        ),
      }))
      .filter((t) => t.formulas.length > 0);
  }, [selectedTopics, activeCategory, searchTerm]);

  const totalFormulasCount = useMemo(
    () => filteredData.reduce((acc, t) => acc + t.formulas.length, 0),
    [filteredData],
  );

  // ── PDF Download (always rendered on light paper) ──────────────────────────
  const downloadPDF = async () => {
    if (!sheetRef.current) return;
    setDownloading(true);
    try {
      await nextFrame(); // let the light "print" styling apply first
      const canvas = await html2canvas(sheetRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const imgW = pageW - 20;
      const imgH = imgW / (canvas.width / canvas.height);
      let heightLeft = imgH;
      let position = 10;

      pdf.addImage(imgData, "PNG", 10, position, imgW, imgH);
      heightLeft -= pageH - 20;

      while (heightLeft > 0) {
        position = heightLeft - imgH + 10;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 10, position, imgW, imgH);
        heightLeft -= pageH - 20;
      }
      pdf.save("CalcVoyager-Formula-CheatSheet.pdf");
    } catch (err) {
      console.error("PDF generation failed:", err);
    }
    setDownloading(false);
  };

  return (
    <main className="chs cvx">
      <section className="chs-hero">
        <div className="chs-wrap">
          <p className="chs-kicker">Formula reference &amp; study guide</p>
          <h1 className="chs-hero__title">Mathematical Formula Cheat Sheet</h1>
          <p className="chs-hero__desc">
            Definitions, identities, theorems and computational formulas across Calculus &amp; Analytical
            Geometry, Multivariable Calculus, Linear Algebra, and Probability &amp; Statistics.
          </p>
          <dl className="chs-hero__stats">
            <div>
              <dt>Topics</dt>
              <dd>{ALL_KEYS.length}</dd>
            </div>
            <div>
              <dt>Formulas</dt>
              <dd>{Object.values(formulaData).reduce((n, t) => n + t.formulas.length, 0)}</dd>
            </div>
            <div>
              <dt>Studied</dt>
              <dd>{ALL_KEYS.filter(isCompleted).length}</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="chs-wrap">
        {/* ── Subject selector + controls ── */}
        <div className="chs-panel">
          <div className="chs-tabs" role="tablist" aria-label="Filter by subject">
            {CATEGORIES.map((cat) => {
              const active = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`chs-tab${active ? " is-active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                  <span className="chs-tab__count">{categoryCounts[cat] || 0}</span>
                </button>
              );
            })}
          </div>

          <div className="chs-controls">
            <label className="chs-search">
              <Search size={16} aria-hidden="true" />
              <input
                type="search"
                placeholder="Search formulas, theorems or topics (e.g. Stokes, Bayes, Eigen, Laplace)"
                aria-label="Search formulas"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>

            <div className="chs-actions">
              <button type="button" onClick={selectAll} className="chs-btn">
                All topics
              </button>
              <button type="button" onClick={selectDone} className="chs-btn">
                <Check size={15} aria-hidden="true" /> Studied only
              </button>
              <button type="button" onClick={clearAll} className="chs-btn">
                Clear
              </button>
              <button
                type="button"
                onClick={downloadPDF}
                disabled={downloading || totalFormulasCount === 0}
                className="chs-btn chs-btn--primary"
              >
                <Download size={15} aria-hidden="true" />
                {downloading ? "Building PDF…" : `Export PDF (${totalFormulasCount})`}
              </button>
            </div>
          </div>

          <div className="chs-chips__head">
            <span>
              Topics in view: {selectedInView} of {visibleTopics.length} selected
            </span>
            <span className="chs-chips__legend">
              <Check size={13} aria-hidden="true" /> = studied
            </span>
          </div>
          <div className="chs-chips">
            {visibleTopics.map(([key, topic]) => {
              const active = selectedTopics.includes(key);
              const completed = isCompleted(key);
              return (
                <button
                  key={key}
                  type="button"
                  aria-pressed={active}
                  onClick={() => toggleTopic(key)}
                  className={`chs-chip${active ? " is-active" : ""}${completed ? " is-done" : ""}`}
                >
                  {completed && <Check size={13} aria-hidden="true" />}
                  {topic.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Formula sheet (rendered on page and exported to PDF) ── */}
        {filteredData.length === 0 ? (
          <div className="chs-empty">
            <h2>No matching formulas found</h2>
            <p>Try clearing your search or selecting different topics above.</p>
          </div>
        ) : (
          <div className={`chs-sheet${downloading ? " is-exporting" : ""}`} ref={sheetRef}>
            <header className="chs-sheet__head">
              <h2>CalcVoyager — Mathematical Reference Sheet</h2>
              <p>
                {filteredData.length} topic{filteredData.length === 1 ? "" : "s"} · {totalFormulasCount} formula
                {totalFormulasCount === 1 ? "" : "s"} · Generated{" "}
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </header>

            {filteredData.map((topic) => (
              <section key={topic.key} className="chs-topic" style={{ "--topic": topic.color || "#2b4cc9" }}>
                <div className="chs-topic__head">
                  <h3>{topic.title}</h3>
                  <span className="chs-badge">{topic.category}</span>
                  <span className="chs-topic__count">
                    {topic.formulas.length} formula{topic.formulas.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="chs-grid">
                  {topic.formulas.map((f, i) => {
                    const cardId = `${topic.key}-${i}`;
                    const copied = copiedId === cardId;
                    return (
                      <article key={cardId} className="chs-card">
                        <div className="chs-card__top">
                          <h4>{f.name}</h4>
                          <button
                            type="button"
                            className={`chs-copy${copied ? " is-copied" : ""}`}
                            onClick={() => copyFormula(f.formula, cardId)}
                            aria-label={copied ? `${f.name} copied` : `Copy ${f.name}`}
                          >
                            {copied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                            {copied ? "Copied" : "Copy"}
                          </button>
                        </div>
                        <div className="chs-card__formula">{f.formula}</div>
                        {f.note && <p className="chs-card__note">{f.note}</p>}
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
