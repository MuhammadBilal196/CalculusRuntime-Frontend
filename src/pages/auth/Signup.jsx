import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import AuthShell from "./AuthShell";

function passwordStrength(password) {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
  if (/\d/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;
  if (!password) return { score: 0, label: "" };
  return { score, label: ["Weak", "Weak", "Fair", "Good", "Strong"][score] };
}

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const strength = passwordStrength(form.password);

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    const fullName = form.fullName.replace(/\s+/g, " ").trim();
    const username = form.username.trim();
    const email = form.email.trim();
    if (!fullName || !username || !form.password || !form.confirm) {
      setError("Please fill in your name, username and password.");
      return;
    }
    if (fullName.length < 2) {
      setError("Enter your full name as it should appear on certificates.");
      return;
    }
    if (username.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }
    if (/\s/.test(username)) {
      setError("Username can't contain spaces.");
      return;
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address, or leave it empty.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords don't match.");
      return;
    }
    setLoading(true);
    const result = await signup(username, form.password, { fullName, email });
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <AuthShell
      title="Create your account"
      subtitle="Free forever. Track your progress, earn points and claim certificates."
      footer={
        <>
          Already have an account? <Link to="/login">Sign in</Link>
        </>
      }
    >
      <form className="auth-form" onSubmit={submit} noValidate>
        <label className="auth-label">
          Full name
          <input
            className="auth-input"
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handle}
            autoComplete="name"
            placeholder="e.g. Muhammad Bilal"
            autoFocus
          />
          <span className="auth-hint">Printed on your certificates and shown on the leaderboard.</span>
        </label>

        <div className="auth-row">
          <label className="auth-label">
            Username
            <input
              className="auth-input"
              type="text"
              name="username"
              value={form.username}
              onChange={handle}
              autoComplete="username"
              placeholder="bilal196"
            />
          </label>
          <label className="auth-label">
            Email <span className="auth-optional">optional</span>
            <input
              className="auth-input"
              type="email"
              name="email"
              value={form.email}
              onChange={handle}
              autoComplete="email"
              placeholder="you@example.com"
            />
          </label>
        </div>

        <div className="auth-row">
          <label className="auth-label">
            Password
            <div className="auth-input-wrap">
              <input
                className="auth-input"
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handle}
                autoComplete="new-password"
              />
              <button
                type="button"
                className="auth-pw-toggle"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>
          <label className="auth-label">
            Confirm password
            <input
              className="auth-input"
              type={showPassword ? "text" : "password"}
              name="confirm"
              value={form.confirm}
              onChange={handle}
              autoComplete="new-password"
            />
          </label>
        </div>
        {strength.label ? (
          <div className="auth-strength" data-score={strength.score} aria-live="polite">
            <span className="auth-strength__bar" aria-hidden="true">
              {[1, 2, 3, 4].map((n) => (
                <i key={n} className={n <= strength.score ? "is-on" : ""} />
              ))}
            </span>
            Password strength: {strength.label}
          </div>
        ) : null}

        {error && (
          <p className="auth-error" role="alert">
            {error}
          </p>
        )}

        <button className="auth-btn" type="submit" disabled={loading}>
          {loading ? "Creating account…" : "Create account"}
        </button>
      </form>
    </AuthShell>
  );
}

export default Signup;
