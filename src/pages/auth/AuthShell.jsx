import { Link } from "react-router-dom";
import "./Auth.css";

const POINTS = [
  "Step-by-step study guides for four university maths courses",
  "Topic quizzes, timed mock exams and a points leaderboard",
  "Certificates printed with your full name",
];

/** Two-panel layout shared by the sign-in and sign-up pages. */
export default function AuthShell({ title, subtitle, children, footer }) {
  return (
    <main className="auth-page cvx">
      <div className="auth-shell">
        <aside className="auth-aside" aria-hidden="true">
          <Link to="/" className="auth-brand" tabIndex={-1}>
            <span className="auth-brand__mark">∂</span>
            CalcVoyager
          </Link>
          <div className="auth-aside__body">
            <p className="auth-aside__formula">∮ F · dr = ∬ (∇ × F) · dS</p>
            <h2 className="auth-aside__title">Your study space for university maths</h2>
            <ul className="auth-aside__list">
              {POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <p className="auth-aside__foot">Calculus · Multivariable · Linear Algebra · Statistics</p>
        </aside>

        <section className="auth-card">
          <Link to="/" className="auth-brand auth-brand--mobile">
            <span className="auth-brand__mark">∂</span>
            CalcVoyager
          </Link>
          <h1 className="auth-title">{title}</h1>
          {subtitle ? <p className="auth-sub">{subtitle}</p> : null}
          {children}
          {footer ? <p className="auth-switch">{footer}</p> : null}
        </section>
      </div>
    </main>
  );
}
