import { useState } from "react";
import { useNavigate, Link, useSearchParams } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { /* needsEmailVerification, */ safeNextPath } from "../../utils/courseAccess";
import AuthShell from "./AuthShell";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const next = safeNextPath(params.get("next"));
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handle = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.username.trim() || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    const result = await login(form.username.trim(), form.password);
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      // Email verification redirect commented out until backend deployment:
      // if (needsEmailVerification(result.user)) {
      //   navigate(`/verify-email?next=${encodeURIComponent(next)}`, { replace: true });
      //   return;
      // }
      navigate(next, { replace: true });
    }
  };

  return (
    <AuthShell
      title="Welcome back"
      subtitle="Sign in to continue your courses, quizzes and certificates."
      footer={
        <>
          New to CalcVoyager?{" "}
          <Link to={params.get("next") ? `/signup?next=${encodeURIComponent(next)}` : "/signup"}>
            Create an account
          </Link>
        </>
      }
    >
      <form className="auth-form" onSubmit={submit} noValidate>
        <label className="auth-label">
          Username
          <input
            className="auth-input"
            type="text"
            name="username"
            value={form.username}
            onChange={handle}
            autoComplete="username"
            autoFocus
          />
        </label>
        <label className="auth-label">
          Password
          <div className="auth-input-wrap">
            <input
              className="auth-input"
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handle}
              autoComplete="current-password"
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

        {error && (
          <p className="auth-error" role="alert">
            {error}
          </p>
        )}

        <button className="auth-btn" type="submit" disabled={loading}>
          {loading ? "Signing in…" : "Sign in"}
        </button>
      </form>
    </AuthShell>
  );
}

export default Login;
