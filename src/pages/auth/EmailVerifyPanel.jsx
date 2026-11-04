import { useEffect, useRef, useState } from "react";
import { MailCheck, Pencil, RotateCw } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import "./Auth.css";
import "./EmailVerify.css";

const CODE_LENGTH = 6;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Six single-digit boxes; typing, backspace and pasting a whole code all work. */
function CodeInput({ value, onChange, onComplete, disabled }) {
  const refs = useRef([]);
  const digits = Array.from({ length: CODE_LENGTH }, (_, i) => value[i] || "");

  const setAt = (index, digit) => {
    const next = digits.slice();
    next[index] = digit;
    const code = next.join("").slice(0, CODE_LENGTH);
    onChange(code);
    if (code.length === CODE_LENGTH && !next.includes("")) onComplete?.(code);
  };

  const fill = (text, start = 0) => {
    const clean = String(text).replace(/\D/g, "").slice(0, CODE_LENGTH - start);
    if (!clean) return;
    const next = digits.slice();
    clean.split("").forEach((d, i) => {
      next[start + i] = d;
    });
    const code = next.join("");
    onChange(code);
    refs.current[Math.min(start + clean.length, CODE_LENGTH - 1)]?.focus();
    if (code.length === CODE_LENGTH && !next.includes("")) onComplete?.(code);
  };

  return (
    <div className="ev-code" role="group" aria-label="6-digit verification code">
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            refs.current[index] = el;
          }}
          className="ev-code__box"
          type="text"
          inputMode="numeric"
          autoComplete={index === 0 ? "one-time-code" : "off"}
          maxLength={CODE_LENGTH}
          value={digit}
          disabled={disabled}
          aria-label={`Digit ${index + 1}`}
          onChange={(e) => {
            const typed = e.target.value.replace(/\D/g, "");
            if (typed.length > 1) {
              fill(typed, index); // pasted or autofilled
              return;
            }
            setAt(index, typed);
            if (typed && index < CODE_LENGTH - 1) refs.current[index + 1]?.focus();
          }}
          onKeyDown={(e) => {
            if (e.key === "Backspace" && !digit && index > 0) {
              refs.current[index - 1]?.focus();
              setAt(index - 1, "");
              e.preventDefault();
            } else if (e.key === "ArrowLeft" && index > 0) {
              refs.current[index - 1]?.focus();
            } else if (e.key === "ArrowRight" && index < CODE_LENGTH - 1) {
              refs.current[index + 1]?.focus();
            }
          }}
          onPaste={(e) => {
            e.preventDefault();
            fill(e.clipboardData.getData("text"), index);
          }}
          onFocus={(e) => e.target.select()}
        />
      ))}
    </div>
  );
}

/**
 * Send a code to the account's email and confirm it. Used on the sign-up
 * verification step and on the profile page.
 *
 * initialResult: the `verification` object returned by sign-up, when a code
 * was already sent.
 */
export default function EmailVerifyPanel({ initialResult = null, onVerified, compact = false }) {
  const { user, sendVerificationEmail, confirmEmailCode } = useAuth();
  const [email, setEmail] = useState(user?.email || "");
  const [editing, setEditing] = useState(!user?.email);
  const [sentTo, setSentTo] = useState(initialResult?.sent ? initialResult.email || user?.email : "");
  const [devCode, setDevCode] = useState(initialResult?.devCode || "");
  const [code, setCode] = useState("");
  const [cooldown, setCooldown] = useState(initialResult?.sent ? initialResult.retryAfter ?? 60 : 0);
  const [busy, setBusy] = useState("");
  const [error, setError] = useState(initialResult && !initialResult.sent ? initialResult.error || "" : "");
  const [notice, setNotice] = useState("");
  const codeRef = useRef(null);

  useEffect(() => {
    if (cooldown <= 0) return undefined;
    const timer = setTimeout(() => setCooldown((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [cooldown]);

  useEffect(() => {
    if (!editing && user?.email) setEmail(user.email);
  }, [user?.email, editing]);

  const send = async () => {
    setError("");
    setNotice("");
    const target = email.trim().toLowerCase();
    if (!EMAIL_RE.test(target)) {
      setError("Enter a valid email address.");
      return;
    }
    setBusy("send");
    const changed = target !== String(user?.email || "").toLowerCase();
    const result = await sendVerificationEmail(changed ? target : undefined);
    setBusy("");
    if (result.alreadyVerified) {
      onVerified?.();
      return;
    }
    if (result.retryAfter) setCooldown(result.retryAfter);
    if (result.error) {
      setError(result.error);
      if (result.sent === false && result.retryAfter && result.email) setSentTo(result.email);
      return;
    }
    setSentTo(result.email || target);
    setDevCode(result.devCode || "");
    setEditing(false);
    setCode("");
    setNotice(`A new code is on its way to ${result.email || target}.`);
    setTimeout(() => codeRef.current?.querySelector("input")?.focus(), 50);
  };

  const confirm = async (value = code) => {
    if (busy) return;
    setError("");
    setNotice("");
    if (String(value).length !== CODE_LENGTH) {
      setError("Enter all 6 digits from the email.");
      return;
    }
    setBusy("confirm");
    const result = await confirmEmailCode(value);
    setBusy("");
    if (result.error) {
      setError(result.error);
      setCode("");
      return;
    }
    onVerified?.();
  };

  const showCodeStep = Boolean(sentTo) && !editing;

  return (
    <div className={`ev-panel${compact ? " ev-panel--compact" : ""}`}>
      {!compact ? (
        <span className="ev-panel__icon" aria-hidden="true">
          <MailCheck size={26} strokeWidth={2} />
        </span>
      ) : null}

      {showCodeStep ? (
        <>
          <p className="ev-panel__lead">
            We sent a 6-digit code to <strong>{sentTo}</strong>. Enter it below, or tap the
            “Verify my email” button in that email.
          </p>
          {devCode ? (
            <p className="ev-dev">
              Developer mode: no email was sent. Your code is <strong>{devCode}</strong>.
            </p>
          ) : null}
          <form
            className="ev-form"
            onSubmit={(e) => {
              e.preventDefault();
              confirm();
            }}
          >
            <div ref={codeRef}>
              <CodeInput value={code} onChange={setCode} onComplete={confirm} disabled={busy === "confirm"} />
            </div>
            {error ? (
              <p className="auth-error" role="alert">
                {error}
              </p>
            ) : null}
            {notice && !error ? (
              <p className="ev-notice" role="status">
                {notice}
              </p>
            ) : null}
            <button className="auth-btn" type="submit" disabled={busy !== "" || code.length !== CODE_LENGTH}>
              {busy === "confirm" ? "Verifying…" : "Verify email"}
            </button>
          </form>
          <div className="ev-actions">
            <button type="button" className="ev-link" onClick={send} disabled={busy !== "" || cooldown > 0}>
              <RotateCw size={14} aria-hidden="true" />
              {busy === "send" ? "Sending…" : cooldown > 0 ? `Resend code in ${cooldown}s` : "Resend code"}
            </button>
            <button
              type="button"
              className="ev-link"
              onClick={() => {
                setEditing(true);
                setError("");
                setNotice("");
              }}
              disabled={busy !== ""}
            >
              <Pencil size={14} aria-hidden="true" /> Change email
            </button>
          </div>
          <p className="ev-help">Can’t find it? Check your spam or promotions folder.</p>
        </>
      ) : (
        <form
          className="ev-form"
          onSubmit={(e) => {
            e.preventDefault();
            send();
          }}
        >
          <p className="ev-panel__lead">
            {editing && user?.email
              ? "Enter the address you want to use. We’ll send a code there."
              : "We’ll email you a 6-digit code and a one-click link."}
          </p>
          <label className="auth-label">
            Email
            <input
              className="auth-input"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              placeholder="you@example.com"
              readOnly={!editing}
            />
          </label>
          {error ? (
            <p className="auth-error" role="alert">
              {error}
            </p>
          ) : null}
          <div className="ev-row">
            <button className="auth-btn" type="submit" disabled={busy !== "" || cooldown > 0}>
              {busy === "send" ? "Sending…" : cooldown > 0 ? `Send again in ${cooldown}s` : "Send code"}
            </button>
            {!editing ? (
              <button type="button" className="ev-link" onClick={() => setEditing(true)}>
                <Pencil size={14} aria-hidden="true" /> Use a different email
              </button>
            ) : sentTo ? (
              <button
                type="button"
                className="ev-link"
                onClick={() => {
                  setEditing(false);
                  setEmail(user?.email || sentTo);
                  setError("");
                }}
              >
                Cancel
              </button>
            ) : null}
          </div>
        </form>
      )}
    </div>
  );
}
