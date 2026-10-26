import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sun, Moon, BookOpen, LogOut, Check } from "lucide-react";
import { useAuth, getDisplayName, getInitials } from "../../context/AuthContext";
import { useProgress } from "../../context/ProgressContext";
import { useEnrollments } from "../../context/EnrollmentContext";
import { useTheme } from "../../context/ThemeContext";
import { getCourseProgress, COURSE_META } from "../../data/courseCatalog";
import { getCourseTitle } from "../../data/courseCompletion";
import CourseRegister from "../../components/study/CourseRegister";
import "./Settings.css";

const THEME_CARDS = [
  { id: "light", label: "Light", note: "Graph-paper notebook", Icon: Sun },
  { id: "dark", label: "Dark", note: "Easy on the eyes at night", Icon: Moon },
  { id: "sepia", label: "Sepia", note: "Warm paper for long reading", Icon: BookOpen },
];

function ProfileForm() {
  const { user, updateProfile } = useAuth();
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [status, setStatus] = useState({ kind: "", text: "" });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setFullName(user?.fullName || "");
    setEmail(user?.email || "");
  }, [user?.fullName, user?.email]);

  const dirty = fullName.trim() !== (user?.fullName || "") || email.trim() !== (user?.email || "");

  const save = async (event) => {
    event.preventDefault();
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setStatus({ kind: "error", text: "Enter a valid email address, or leave it empty." });
      return;
    }
    setSaving(true);
    setStatus({ kind: "", text: "" });
    const result = await updateProfile({ fullName, email });
    setSaving(false);
    if (result.error) setStatus({ kind: "error", text: result.error });
    else
      setStatus({
        kind: "ok",
        text: result.localOnly
          ? "Saved on this device. It will sync once the server supports profiles."
          : "Profile saved. Your certificates and leaderboard entry now use this name.",
      });
  };

  return (
    <form className="st-card" onSubmit={save} noValidate>
      <div className="st-card__head">
        <h2 className="st-card__title">Profile</h2>
        <p className="st-card__desc">Your full name is printed on certificates and shown on the leaderboard.</p>
      </div>
      <div className="st-fields">
        <label className="st-field">
          <span className="st-field__label">Full name</span>
          <input
            className="st-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            autoComplete="name"
            placeholder="e.g. Muhammad Bilal"
          />
        </label>
        <label className="st-field">
          <span className="st-field__label">Email</span>
          <input
            className="st-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            placeholder="you@example.com"
          />
        </label>
        <label className="st-field">
          <span className="st-field__label">Username</span>
          <input className="st-input" value={user?.username || ""} readOnly aria-readonly="true" />
          <span className="st-field__hint">Used to sign in. It can't be changed.</span>
        </label>
      </div>
      <div className="st-card__foot">
        {status.text ? (
          <p className={`st-status st-status--${status.kind}`} role={status.kind === "error" ? "alert" : "status"}>
            {status.text}
          </p>
        ) : (
          <span />
        )}
        <button type="submit" className="st-btn st-btn--primary" disabled={saving || !dirty}>
          {saving ? "Saving…" : "Save changes"}
        </button>
      </div>
    </form>
  );
}

export default function Settings() {
  const { user, logout } = useAuth();
  const { progress, setLeaderboardOptIn } = useProgress();
  const { courses, unregister } = useEnrollments();
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const [confirmLeave, setConfirmLeave] = useState("");

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  return (
    <main className="st-page cvx">
      <header className="st-hero">
        <span className="st-avatar" aria-hidden="true">
          {getInitials(user)}
        </span>
        <div>
          <h1 className="st-hero__title">Settings</h1>
          <p className="st-hero__sub">
            {getDisplayName(user)} · @{user.username}
          </p>
        </div>
        <Link to="/dashboard" className="st-btn st-hero__back">
          Back to profile
        </Link>
      </header>

      <ProfileForm />

      <section className="st-card">
        <div className="st-card__head">
          <h2 className="st-card__title">My courses</h2>
          <p className="st-card__desc">
            Only registered courses appear on your profile and certificates page. Leaving a course keeps your progress.
          </p>
        </div>
        {courses.length ? (
          <ul className="st-courses">
            {courses.map((id) => {
              const p = getCourseProgress(id, progress?.completedSections || {});
              return (
                <li key={id} className="st-course">
                  <span className={`st-course__icon st-tone--${COURSE_META[id].tone}`} aria-hidden="true">
                    {COURSE_META[id].icon}
                  </span>
                  <div className="st-course__body">
                    <Link to={`/courses/${id}`} className="st-course__name">
                      {getCourseTitle(id)}
                    </Link>
                    <span className="st-course__meta">
                      {p.done} of {p.total} parts done · core {p.corePct}%
                    </span>
                  </div>
                  {confirmLeave === id ? (
                    <span className="st-course__confirm">
                      <button
                        type="button"
                        className="st-btn st-btn--danger"
                        onClick={() => {
                          unregister(id);
                          setConfirmLeave("");
                        }}
                      >
                        Leave course
                      </button>
                      <button type="button" className="st-btn" onClick={() => setConfirmLeave("")}>
                        Cancel
                      </button>
                    </span>
                  ) : (
                    <button type="button" className="st-btn" onClick={() => setConfirmLeave(id)}>
                      Leave
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="st-empty">You haven't registered for a course yet.</p>
        )}
        <CourseRegister title="Add a course" compact />
      </section>

      <section className="st-card">
        <div className="st-card__head">
          <h2 className="st-card__title">Leaderboard</h2>
          <p className="st-card__desc">Show your full name, points and progress to other students.</p>
        </div>
        <label className="st-switch">
          <input
            type="checkbox"
            checked={Boolean(progress?.leaderboardOptIn)}
            onChange={(e) => setLeaderboardOptIn(e.target.checked)}
          />
          <span className="st-switch__track" aria-hidden="true">
            <span className="st-switch__thumb" />
          </span>
          <span>{progress?.leaderboardOptIn ? "You appear on the leaderboard" : "Hidden from the leaderboard"}</span>
        </label>
      </section>

      <section className="st-card">
        <div className="st-card__head">
          <h2 className="st-card__title">Appearance</h2>
          <p className="st-card__desc">Choose the theme used on every page.</p>
        </div>
        <div className="st-themes" role="radiogroup" aria-label="Theme">
          {THEME_CARDS.map(({ id, label, note, Icon }) => (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={theme === id}
              className={`st-theme st-theme--${id}${theme === id ? " is-active" : ""}`}
              onClick={() => setTheme(id)}
            >
              <span className="st-theme__swatch" aria-hidden="true">
                <Icon size={18} />
              </span>
              <span className="st-theme__label">{label}</span>
              <span className="st-theme__note">{note}</span>
              {theme === id ? <Check className="st-theme__check" size={16} strokeWidth={3} aria-hidden="true" /> : null}
            </button>
          ))}
        </div>
      </section>

      <section className="st-card st-card--row">
        <div className="st-card__head">
          <h2 className="st-card__title">Sign out</h2>
          <p className="st-card__desc">Your progress stays saved to your account.</p>
        </div>
        <button
          type="button"
          className="st-btn st-btn--danger"
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          <LogOut size={16} aria-hidden="true" /> Sign out
        </button>
      </section>
    </main>
  );
}
