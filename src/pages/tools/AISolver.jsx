import { useEffect, useMemo, useState } from "react";
import katex from "katex";
import "katex/dist/katex.min.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useProgress } from "../../context/ProgressContext";
import { TOPICS, findOperation } from "./solverEngine";
import "./AISolver.css";

const STREAMLIT_URL =
  process.env.REACT_APP_STREAMLIT_URL ||
  "https://dapeaqzot5jtellyuyxjrf.streamlit.app/";

function Tex({ tex, block = false, className = "" }) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, { throwOnError: false, displayMode: block, strict: "ignore" });
    } catch {
      return null;
    }
  }, [tex, block]);
  if (html == null) return <code className={className}>{tex}</code>;
  // KaTeX output is generated from our own TeX strings, not from user HTML.
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

function defaultsFor(op) {
  return Object.fromEntries(op.fields.map((f) => [f.name, f.default ?? ""]));
}

function AISolver() {
  const { user } = useAuth();
  const { addSolverHistory, recordVisit } = useProgress();

  const [topicId, setTopicId] = useState(TOPICS[0].id);
  const [opId, setOpId] = useState(TOPICS[0].ops[0].id);
  const [values, setValues] = useState(() => defaultsFor(TOPICS[0].ops[0]));
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState(null);

  const topic = TOPICS.find((t) => t.id === topicId) || TOPICS[0];
  const op = (findOperation(opId) || { op: topic.ops[0] }).op;

  useEffect(() => {
    recordVisit("ai-solver");
  }, [recordVisit]);

  const selectOperation = (nextOp) => {
    setOpId(nextOp.id);
    setValues(defaultsFor(nextOp));
    setError("");
    setResult(null);
  };

  const selectTopic = (nextTopic) => {
    setTopicId(nextTopic.id);
    selectOperation(nextTopic.ops[0]);
  };

  const setField = (name, value) => setValues((prev) => ({ ...prev, [name]: value }));

  const handleOpenSolver = () => {
    if (user) addSolverHistory({ page: "ai-solver", url: STREAMLIT_URL });
  };

  const handleSolve = () => {
    setBusy(true);
    setError("");
    setResult(null);
    // Let the "Solving…" state paint before heavier numeric work starts.
    window.setTimeout(() => {
      try {
        const out = op.run(values);
        setResult(out);
        if (user) {
          addSolverHistory({ page: "ai-solver", op: op.id, expression: values.expr, result: out.result.text });
        }
      } catch (err) {
        setError(err.message || String(err));
      } finally {
        setBusy(false);
      }
    }, 20);
  };

  const loadExample = (expr) => {
    setValues((prev) => ({ ...prev, expr }));
    setError("");
    setResult(null);
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey && e.target.tagName !== "TEXTAREA") {
      e.preventDefault();
      handleSolve();
    }
  };

  const mainFields = op.fields.filter((f) => !f.short);
  const shortFields = op.fields.filter((f) => f.short);

  const renderField = (f) => (
    <label key={f.name} className={`ai-field${f.short ? " ai-field--short" : ""}`}>
      <span>{f.label}</span>
      {f.type === "select" ? (
        <select value={values[f.name] ?? ""} onChange={(e) => setField(f.name, e.target.value)}>
          {f.options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : f.multiline ? (
        <textarea
          rows={3}
          value={values[f.name] ?? ""}
          placeholder={f.placeholder || ""}
          onChange={(e) => setField(f.name, e.target.value)}
          spellCheck={false}
        />
      ) : (
        <input
          value={values[f.name] ?? ""}
          placeholder={f.placeholder || ""}
          onChange={(e) => setField(f.name, e.target.value)}
          onKeyDown={onKeyDown}
          spellCheck={false}
          autoComplete="off"
        />
      )}
    </label>
  );

  return (
    <main className="ai-solver-page">
      <div className="ai-solver-header">
        <div className="ai-solver-title-row">
          <span className="ai-solver-icon" aria-hidden="true">
            ∂
          </span>
          <div>
            <h1 className="ai-solver-title">AI Calculus Solver</h1>
            <p className="ai-solver-sub">
              Derivatives, partial derivatives, gradients, integrals (single, double and triple), limits, Taylor
              series, optimisation and Lagrange multipliers, solved step by step right in your browser.
            </p>
          </div>
        </div>

        <div className="ai-topic-tabs" role="tablist" aria-label="Topic">
          {TOPICS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={t.id === topic.id}
              className={`ai-topic-tab${t.id === topic.id ? " ai-topic-tab--active" : ""}`}
              onClick={() => selectTopic(t)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {!user && (
          <div className="ai-solver-notice">
            <span aria-hidden="true">💡</span>
            <span>
              <Link to="/signup">Create a free account</Link> to save your solver history and track usage.
            </span>
          </div>
        )}
      </div>

      <div className="ai-solver-grid">
        <section className="ai-solver-card" aria-labelledby="ai-solver-heading">
          <div className="ai-solver-launch-kicker">{topic.label}</div>
          <h2 id="ai-solver-heading">Solve a problem</h2>

          {topic.ops.length > 1 && (
            <div className="ai-op-row" role="tablist" aria-label="Operation">
              {topic.ops.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={op.id === item.id}
                  className={`ai-op-btn${op.id === item.id ? " ai-op-btn--active" : ""}`}
                  onClick={() => selectOperation(item)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          <form
            className="ai-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSolve();
            }}
          >
            {mainFields.map(renderField)}
            {shortFields.length > 0 && <div className="ai-field-row">{shortFields.map(renderField)}</div>}

            <div className="ai-form-actions">
              <button type="submit" className="ai-solver-open-btn" disabled={busy}>
                {busy ? "Solving…" : "Solve"}
              </button>
              <span className="ai-input-hint">
                Use <code>^</code> for powers, <code>sqrt()</code>, <code>ln()</code>, <code>e^x</code>, <code>pi</code>,{" "}
                <code>inf</code>
              </span>
            </div>
          </form>

          {error && (
            <div className="ai-solver-error" role="alert">
              {error}
            </div>
          )}

          {result && (
            <div className="ai-solver-result" aria-live="polite">
              <div className="ai-solver-result-label">
                {result.title}
                {result.verified && <span className="ai-verified">✓ Verified</span>}
              </div>
              <div className="ai-solver-result-value">
                <Tex tex={result.result.tex} block />
              </div>

              {result.details && result.details.length > 0 && (
                <dl className="ai-result-details">
                  {result.details.map((d, i) => (
                    <div key={i}>
                      <dt>{d.label}</dt>
                      <dd>
                        <Tex tex={d.tex} />
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {result.table && result.table.rows.length > 0 && (
                <div className="ai-result-table-wrap">
                  <table className="ai-result-table">
                    <thead>
                      <tr>
                        {result.table.columns.map((c, i) => (
                          <th key={i}>{c}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {result.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j}>{j === row.length - 1 && !/\\/.test(cell) && /[a-z]/i.test(cell) ? cell : <Tex tex={cell} />}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {result.steps && result.steps.length > 0 && (
                <ol className="ai-steps">
                  {result.steps.map((s, i) => (
                    <li key={i}>
                      <span>{s.text}</span>
                      {s.tex && <Tex tex={s.tex} block className="ai-step-tex" />}
                    </li>
                  ))}
                </ol>
              )}
            </div>
          )}

          {op.examples && op.examples.length > 0 && (
            <div className="ai-examples">
              <div className="ai-examples-label">Try an example</div>
              <div className="ai-examples-list">
                {op.examples.map((ex) => (
                  <button
                    key={ex}
                    type="button"
                    className="ai-example-btn"
                    onClick={() => loadExample(ex)}
                    aria-label={`Use example ${ex}`}
                  >
                    <strong aria-hidden="true">ƒ</strong>
                    <span>{ex}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        <aside className="ai-solver-side">
          <section className="ai-solver-card ai-solver-card--host">
            <div className="ai-solver-launch-kicker">Hosted neural solver</div>
            <h2>Open CalculusSolver</h2>
            <p className="ai-solver-card-lead">
              The research neural solver runs on Streamlit and can't be embedded here. It opens in a new tab and may
              take ~30 seconds to wake up.
            </p>
            <a
              href={STREAMLIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ai-solver-open-btn ai-solver-open-btn--secondary"
              onClick={handleOpenSolver}
            >
              Open hosted solver →
            </a>
          </section>

          <section className="ai-solver-card ai-solver-card--tips">
            <div className="ai-solver-launch-kicker">How answers are checked</div>
            <ul className="ai-tips">
              <li>
                <strong>Exact first.</strong> Derivatives, antiderivatives and series are computed symbolically.
              </li>
              <li>
                <strong>Verified.</strong> Every antiderivative is differentiated back and compared with your integrand.
              </li>
              <li>
                <strong>Exact numbers.</strong> Numeric answers are shown as fractions, √n, π or e when they match.
              </li>
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}

export default AISolver;
