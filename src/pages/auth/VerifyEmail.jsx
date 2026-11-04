import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { CircleAlert, RotateCw } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { needsEmailVerification, safeNextPath } from "../../utils/courseAccess";
import AuthShell from "./AuthShell";
import EmailVerifyPanel from "./EmailVerifyPanel";
import "./EmailVerify.css";

function Steps({ done = false }) {
  return (
    <ol className="auth-steps" aria-label="Sign-up progress">
      <li className="is-done">
        <span className="auth-steps__num">✓</span> Account
      </li>
      <li className={done ? "is-done" : "is-active"} aria-current={done ? undefined : "step"}>
        <span className="auth-steps__num">{done ? "✓" : "2"}</span> Verify email
      </li>
    </ol>
  );
}

/** Opened from the link in the email: /verify-email?token=… */
function LinkVerification({ token, next }) {
  const { user, verifyEmailLink } = useAuth();
  const navigate = useNavigate();
  const [state, setState] = useState({ status: "working", error: "" });
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return; // React StrictMode runs effects twice in development
    started.current = true;
    verifyEmailLink(token).then((result) => {
      setState(result.error ? { status: "failed", error: result.error } : { status: "done", error: "" });
    });
  }, [token, verifyEmailLink]);

  if (state.status === "working") {
    return (
      <AuthShell title="Verifying your email…" subtitle="This only takes a moment.">
        <div className="auth-result">
          <span className="ev-panel__icon ev-spin" aria-hidden="true">
            <RotateCw size={24} />
          </span>
        </div>
      </AuthShell>
    );
  }

  if (state.status === "done") {
    return (
      <AuthShell
        title="Email verified"
        subtitle={user ? "Your account is ready. Happy studying!" : "Your email is confirmed. Sign in to start studying."}
      >
        <Steps done />
        <div className="auth-result">
          {user ? (
            <button type="button" className="auth-btn" onClick={() => navigate(next, { replace: true })}>
              Continue
            </button>
          ) : (
            <Link className="auth-btn" to={`/login?next=${encodeURIComponent(next)}`}>
              Sign in
            </Link>
          )}
        </div>
      </AuthShell>
    );
  }

  return (
    <AuthShell title="This link didn’t work" subtitle={state.error}>
      <div className="auth-result">
        <span className="ev-panel__icon" aria-hidden="true" style={{ "--tc": "var(--c-danger)" }}>
          <CircleAlert size={26} />
        </span>
        {user && !user.emailVerified ? (
          <EmailVerifyPanel compact onVerified={() => navigate(next, { replace: true })} />
        ) : user ? (
          <Link className="auth-btn" to={next}>
            Continue
          </Link>
        ) : (
          <Link className="auth-btn" to={`/login?next=${encodeURIComponent(next)}`}>
            Sign in to get a new code
          </Link>
        )}
      </div>
    </AuthShell>
  );
}

/** Step 2 of sign-up, and where unverified accounts are sent before courses. */
export default function VerifyEmail() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [params] = useSearchParams();
  const token = params.get("token");
  const next = safeNextPath(params.get("next"));

  if (token) return <LinkVerification token={token} next={next} />;

  if (!user) {
    // Login sends unverified accounts back here on its own.
    return <Navigate to={`/login?next=${encodeURIComponent(next)}`} replace />;
  }
  if (user.emailVerified) {
    return <Navigate to={next} replace />;
  }

  const fromSignup = Boolean(location.state?.verification);

  return (
    <AuthShell
      title="Verify your email"
      subtitle={
        needsEmailVerification(user)
          ? "One last step: confirm your email to finish creating your account and open the courses."
          : "Confirm your email so we can reach you about your account and certificates."
      }
      footer={
        <>
          Wrong account?{" "}
          <Link
            to="/login"
            onClick={() => {
              logout();
            }}
          >
            Sign in as someone else
          </Link>
        </>
      }
    >
      {needsEmailVerification(user) || fromSignup ? <Steps /> : null}
      <EmailVerifyPanel
        initialResult={
          location.state?.verification ||
          // Coming back later: a code was sent at sign-up, so start on the code step.
          (needsEmailVerification(user) && user.email ? { sent: true, email: user.email, retryAfter: 0 } : null)
        }
        onVerified={() => navigate(next, { replace: true })}
      />
      <p className="auth-switch" style={{ marginTop: "1rem" }}>
        <Link className="auth-secondary-link" to="/">
          Back to the home page
        </Link>
      </p>
    </AuthShell>
  );
}
