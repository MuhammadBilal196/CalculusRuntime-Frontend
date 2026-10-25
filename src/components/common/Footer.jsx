import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const COURSE_LINKS = [
  { to: "/courses/calculus-analytical-geometry", label: "Calculus & Analytical Geometry" },
  { to: "/courses/multivariable-calculus", label: "Multivariable Calculus" },
  { to: "/courses/linear-algebra", label: "Linear Algebra" },
  { to: "/courses/probability-statistics", label: "Probability & Statistics" },
];

const PRACTICE_LINKS = [
  { to: "/practice", label: "Practice" },
  { to: "/daily-challenge", label: "Daily challenge" },
  { to: "/flashcards", label: "Flashcards" },
  { to: "/mistakes", label: "Mistake notebook" },
  { to: "/cheatsheet", label: "Formula cheat sheet" },
];

const TOOL_LINKS = [
  { to: "/ai-solver", label: "AI Solver" },
  { to: "/grapher", label: "Function grapher" },
  { to: "/surface-explorer", label: "3D surface explorer" },
  { to: "/distribution-explorer", label: "Distribution explorer" },
  { to: "/linear-algebra/matrix-sandbox", label: "Matrix sandbox" },
];

function FooterColumn({ title, links }) {
  return (
    <div className="cvf-col">
      <h2 className="cvf-col__title">{title}</h2>
      <ul className="cvf-col__list">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="cvf-link">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const { user } = useAuth();
  const location = useLocation();
  const [hasSidebar, setHasSidebar] = useState(false);

  useEffect(() => {
    const checkSidebar = () => {
      setHasSidebar(Boolean(document.querySelector(".sidebar")));
    };

    checkSidebar();
    const t1 = setTimeout(checkSidebar, 50);
    const t2 = setTimeout(checkSidebar, 200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.pathname]);

  const accountLinks = user
    ? [
        { to: "/dashboard", label: "Dashboard" },
        { to: "/analytics", label: "Topic analytics" },
        { to: "/my-certificates", label: "My certificates" },
        { to: "/leaderboard", label: "Leaderboard" },
        { to: "/verify", label: "Verify a certificate" },
      ]
    : [
        { to: "/signup", label: "Create a free account" },
        { to: "/login", label: "Log in" },
        { to: "/leaderboard", label: "Leaderboard" },
        { to: "/verify", label: "Verify a certificate" },
      ];

  const scrollToTop = () => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <footer
      className={`site-footer cv-footer${hasSidebar ? " site-footer--with-sidebar" : ""}`}
    >
      <div className="cvf-inner">
        <div className="cvf-brand">
          <Link to="/" className="cvf-brand__name" aria-label="CalcVoyager home">
            <span className="cvf-brand__logo" aria-hidden="true">
              ∂
            </span>
            CalcVoyager
          </Link>
          <p className="cvf-brand__text">
            Study guides, worked examples, quizzes and interactive tools for
            university maths.
          </p>
          {!user ? (
            <Link to="/signup" className="cvf-cta">
              Start learning free
            </Link>
          ) : (
            <Link to="/dashboard" className="cvf-cta">
              Continue studying
            </Link>
          )}
        </div>

        <nav className="cvf-cols" aria-label="Footer navigation">
          <FooterColumn title="Courses" links={COURSE_LINKS} />
          <FooterColumn title="Study" links={PRACTICE_LINKS} />
          <FooterColumn title="Tools" links={TOOL_LINKS} />
          <FooterColumn title="Account" links={accountLinks} />
        </nav>
      </div>

      <div className="cvf-bottom">
        <p className="cvf-copy">© {year} CalcVoyager. Built for students.</p>
        <Link to="/" className="cvf-link cvf-home">
          Home
        </Link>
        <button type="button" className="cvf-top" onClick={scrollToTop}>
          <span aria-hidden="true">↑</span> Back to top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
