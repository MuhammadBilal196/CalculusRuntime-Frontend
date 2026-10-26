import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  X,
  User,
  Settings,
  Award,
  Trophy,
  ChartColumn,
  Bookmark,
  NotebookPen,
  Layers,
  CircleAlert,
  Flame,
  Target,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";
import { useAuth, getDisplayName, getInitials } from "../../context/AuthContext";
import { useProgress } from "../../context/ProgressContext";
import { computePoints, getLevel } from "../../utils/points";
import "./AccountDrawer.css";

const ACCOUNT_LINKS = [
  { to: "/dashboard", label: "My profile", Icon: User },
  { to: "/certificates", label: "My certificates", Icon: Award },
  { to: "/leaderboard", label: "Leaderboard", Icon: Trophy },
  { to: "/analytics", label: "Topic analytics", Icon: ChartColumn },
  { to: "/saved", label: "Saved examples", Icon: Bookmark },
  { to: "/settings", label: "Settings", Icon: Settings },
];

const STUDY_LINKS = [
  { to: "/notes", label: "Notes & highlights", Icon: NotebookPen },
  { to: "/flashcards", label: "Flashcards", Icon: Layers },
  { to: "/mistakes", label: "Mistake notebook", Icon: CircleAlert },
  { to: "/daily-challenge", label: "Daily challenge", Icon: Flame },
  { to: "/practice", label: "Practice arena", Icon: Target },
];

function DrawerLink({ to, label, Icon, onNavigate }) {
  return (
    <NavLink to={to} className="acd-link" onClick={onNavigate}>
      {Icon ? <Icon size={17} strokeWidth={2} aria-hidden="true" /> : null}
      <span>{label}</span>
    </NavLink>
  );
}

/**
 * Right-hand drawer: account summary, profile links, study tools, the
 * course/tool menus on small screens, theme choice and sign out.
 */
export default function AccountDrawer({
  open,
  onClose,
  courseLinks = [],
  toolLinks = [],
  themePicker = null,
  onLogout,
}) {
  const { user } = useAuth();
  const { progress } = useProgress() || {};
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  // Escape closes, focus moves into the drawer, page behind doesn't scroll.
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.activeElement;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && panelRef.current) {
        const items = panelRef.current.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.classList.add("acd-lock");
    window.requestAnimationFrame(() => closeRef.current?.focus());
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.classList.remove("acd-lock");
      if (previous && typeof previous.focus === "function") previous.focus();
    };
  }, [open, onClose]);

  const points = user ? computePoints(progress || {}).points : 0;
  const level = getLevel(points);

  return (
    <div className={`acd${open ? " acd--open" : ""}`} aria-hidden={!open}>
      <button
        type="button"
        className="acd-backdrop"
        tabIndex={-1}
        aria-label="Close menu"
        onClick={onClose}
      />
      <aside
        ref={panelRef}
        className="acd-panel cvx"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!open}
      >
        <div className="acd-head">
          {user ? (
            <Link to="/dashboard" className="acd-user" onClick={onClose}>
              <span className="acd-avatar" aria-hidden="true">
                {getInitials(user)}
              </span>
              <span className="acd-user__text">
                <span className="acd-user__name">{getDisplayName(user)}</span>
                <span className="acd-user__meta">
                  @{user.username} · {level.name} · {points} pts
                </span>
              </span>
            </Link>
          ) : (
            <div className="acd-guest">
              <span className="acd-user__name">Welcome to CalcVoyager</span>
              <span className="acd-user__meta">Sign in to save progress and earn points.</span>
            </div>
          )}
          <button
            ref={closeRef}
            type="button"
            className="acd-close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav id="mobile-nav" className="acd-body" aria-label="Mobile navigation">
          {user ? (
            <div className="acd-group">
              <div className="acd-group__title">Account</div>
              {ACCOUNT_LINKS.map((link) => (
                <DrawerLink key={link.to} {...link} onNavigate={onClose} />
              ))}
            </div>
          ) : (
            <div className="acd-auth">
              <Link to="/login" className="acd-btn" onClick={onClose}>
                <LogIn size={16} aria-hidden="true" /> Sign in
              </Link>
              <Link to="/signup" className="acd-btn acd-btn--primary" onClick={onClose}>
                <UserPlus size={16} aria-hidden="true" /> Sign up
              </Link>
            </div>
          )}

          <div className="acd-group">
            <div className="acd-group__title">Study tools</div>
            {STUDY_LINKS.map((link) => (
              <DrawerLink key={link.to} {...link} onNavigate={onClose} />
            ))}
          </div>

          <div className="acd-group acd-group--small">
            <div className="acd-group__title">Courses</div>
            {courseLinks.map(({ to, label }) => (
              <DrawerLink key={to} to={to} label={label} onNavigate={onClose} />
            ))}
          </div>

          <div className="acd-group acd-group--small">
            <div className="acd-group__title">Tools &amp; resources</div>
            {toolLinks.map(({ to, label }) => (
              <DrawerLink key={to} to={to} label={label} onNavigate={onClose} />
            ))}
            <DrawerLink to="/leaderboard" label="Leaderboard" onNavigate={onClose} />
            <DrawerLink to="/certificates" label="Certificates" onNavigate={onClose} />
          </div>

          {themePicker ? (
            <div className="acd-group">
              <div className="acd-group__title">Theme</div>
              <div className="acd-theme">{themePicker}</div>
            </div>
          ) : null}

          {user ? (
            <div className="acd-foot">
              <button type="button" className="acd-signout" onClick={onLogout}>
                <LogOut size={17} aria-hidden="true" /> Sign out
              </button>
            </div>
          ) : null}
        </nav>
      </aside>
    </div>
  );
}
