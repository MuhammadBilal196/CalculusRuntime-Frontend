import { useState, useEffect, useRef } from "react";
import { NavLink, Link,  } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Sun, Moon, Menu, X, ChevronDown, Award, Trophy } from "lucide-react";

const courseLinks = [
  { to: "/courses/calculus-analytical-geometry", label: "Calc & Geometry" },
  { to: "/courses/multivariable-calculus", label: "Multivariable" },
  { to: "/courses/linear-algebra", label: "Linear Algebra" },
  { to: "/courses/probability-statistics", label: "Prob & Stats" },
];

const toolLinks = [
  { to: "/simple-concepts", label: "Concepts" },
  { to: "/ai-solver", label: "AI Solver" },
  { to: "/cheatsheet", label: "Cheat Sheet" },
  { to: "/practice", label: "Practice" },
  { to: "/saved", label: "Saved" },
];

function Header({ darkMode, onToggleDark }) {
  const { user, logout } = useAuth();
  
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    const handleKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const handleLogout = () => {
    try {
      logout();
    } catch (err) {
      console.error("Logout failed:", err);
    }
    setMenuOpen(false);
  };

  return (
    <header className="site-header" ref={headerRef}>
      {/* Brand */}
      <NavLink className="site-brand" to="/" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark" aria-hidden="true">∂</span>
        <span className="brand-text">
          <span>CalcVoyager</span>
          <small>Multivariable tools</small>
        </span>
      </NavLink>

      {/* Desktop nav - Centered */}
      <nav className="site-nav" aria-label="Primary navigation">
        <div className="nav-dropdown">
          <button className="dropdown-trigger">
            Courses <ChevronDown size={14} strokeWidth={2.5} />
          </button>
          <div className="dropdown-content">
            {courseLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "active" : "")}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="nav-dropdown">
          <button className="dropdown-trigger">
            Tools & Resources <ChevronDown size={14} strokeWidth={2.5} />
          </button>
          <div className="dropdown-content">
            {toolLinks.map(({ to, label }) => (
              <NavLink key={to} to={to} className={({ isActive }) => (isActive ? "active" : "")}>
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        <NavLink to="/leaderboard" className={({ isActive }) => (isActive ? "active" : "")}>
          <Trophy size={14} strokeWidth={2.5} /> Leaderboard
        </NavLink>
        
        <NavLink to="/certificates" className={({ isActive }) => (isActive ? "active" : "")}>
          <Award size={14} strokeWidth={2.5} /> Certificates
        </NavLink>
      </nav>

      {/* Controls: theme toggle + auth + hamburger */}
      <div className="header-controls">
        <button
          className="theme-toggle"
          onClick={onToggleDark}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {darkMode ? (
            <>
              <Sun size={16} strokeWidth={2} />
              <span> Light</span>
            </>
          ) : (
            <>
              <Moon size={16} strokeWidth={2} />
              <span> Dark</span>
            </>
          )}
        </button>

        {user ? (
          <div className="header-user">
            <Link to="/dashboard" className="header-auth-btn" title="Dashboard">
              Profile
            </Link>
          </div>
        ) : (
          <div className="header-auth">
            <Link to="/signup" className="header-auth-btn">
              Log in / Sign up
            </Link>
          </div>
        )}

        <button
          className={`hamburger${menuOpen ? " hamburger--open" : ""}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
        </button>
      </div>

      {/* Mobile nav */}
      <nav
        id="mobile-nav"
        className={`mobile-nav${menuOpen ? " mobile-nav--open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav-group-title">Courses</div>
        {courseLinks.map(({ to, label }) => (
          <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}>
            {label}
          </NavLink>
        ))}

        <div className="mobile-nav-divider" />
        <div className="mobile-nav-group-title">Tools & Resources</div>
        {toolLinks.map(({ to, label }) => (
          <NavLink key={to} to={to} onClick={() => setMenuOpen(false)}>
            {label}
          </NavLink>
        ))}

        <div className="mobile-nav-divider" />
        <NavLink to="/leaderboard" onClick={() => setMenuOpen(false)}>Leaderboard</NavLink>
        <NavLink to="/certificates" onClick={() => setMenuOpen(false)}>Certificates</NavLink>

        <div className="mobile-nav-divider" />
        {user ? (
          <>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            <button className="mobile-nav-logout" onClick={handleLogout}>Sign out</button>
          </>
        ) : (
          <>
            <Link to="/login" onClick={() => setMenuOpen(false)}>Sign in</Link>
            <Link to="/signup" onClick={() => setMenuOpen(false)}>Sign up</Link>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;