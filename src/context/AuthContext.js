import { createContext, useContext, useState, useCallback, useEffect } from "react";

const AuthContext = createContext(null);

const STORAGE_KEY = "calcvoyager_user";
const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8002";

function loadUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const user = JSON.parse(raw);
    return user?.accessToken ? user : null;
  } catch {
    return null;
  }
}

function saveUser(user) {
  try {
    if (user) localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    else localStorage.removeItem(STORAGE_KEY);
  } catch {}
}

// Profile fields kept per username, so a name saved while the backend had no
// profile support survives signing out and back in.
function profileKey(username) {
  return `calcvoyager_profile_${String(username || "").toLowerCase()}`;
}

function loadLocalProfile(username) {
  try {
    return JSON.parse(localStorage.getItem(profileKey(username)) || "{}") || {};
  } catch {
    return {};
  }
}

function saveLocalProfile(username, patch) {
  if (!username) return;
  try {
    localStorage.setItem(profileKey(username), JSON.stringify({ ...loadLocalProfile(username), ...patch }));
  } catch {}
}

function withLocalProfile(user) {
  if (!user?.username) return user;
  const local = loadLocalProfile(user.username);
  return {
    ...user,
    fullName: user.fullName || local.fullName || null,
    email: user.email || local.email || null,
  };
}

async function requestAuth(path, body) {
  let response;
  try {
    response = await fetch(`${API_URL}/api/auth/${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    return {
      error: `Could not reach the server at ${API_URL}. If the server was idle, it may take ~30 seconds to wake up.`,
    };
  }

  let data = {};
  try {
    data = await response.json();
  } catch {}

  if (!response.ok) {
    return { error: data.detail || "Authentication failed." };
  }

  const session = {
    ...data.user,
    accessToken: data.access_token,
    tokenType: data.token_type,
  };
  return { ok: true, user: session };
}

/** Full name if set, otherwise the username. */
export function getDisplayName(user) {
  const full = String(user?.fullName || "").trim();
  return full || user?.username || "Student";
}

export function getInitials(user) {
  const name = getDisplayName(user);
  const parts = name.split(/\s+/).filter(Boolean);
  const letters = parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : name.slice(0, 2);
  return letters.toUpperCase();
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(loadUser);
  // loadUser() reads localStorage synchronously, so hydration is already
  // done by the time this first renders — this just needs to exist and be
  // true. Previously it was never defined/exported at all, so every
  // `!isHydrated` check elsewhere (MyCertificates, CourseQuiz, etc.) read
  // `undefined` and was permanently truthy — those pages got stuck showing
  // a loading state forever, regardless of backend status.
  const [isHydrated] = useState(true);

  // Drop stale tokens whose user no longer exists in the backend DB.
  useEffect(() => {
    if (!user?.accessToken) return undefined;
    let cancelled = false;

    (async () => {
      try {
        const response = await fetch(`${API_URL}/api/auth/me`, {
          headers: { Authorization: `Bearer ${user.accessToken}` },
        });
        if (cancelled) return;
        if (response.status === 401 || response.status === 404) {
          setUser(null);
          saveUser(null);
          return;
        }
        if (response.ok) {
          // Keep the saved session in step with the profile on the server.
          const me = await response.json().catch(() => null);
          if (cancelled || !me) return;
          const serverName = me.fullName ?? me.full_name;
          setUser((prev) => {
            if (!prev) return prev;
            const next = {
              ...prev,
              email: me.email ?? prev.email ?? null,
              createdAt: me.created_at ?? prev.createdAt,
              // An older backend has no full_name column: keep the name saved here.
              fullName: serverName === undefined ? prev.fullName : serverName || prev.fullName || null,
            };
            saveUser(next);
            return next;
          });
        }
      } catch {
        // Backend unreachable — keep local session for offline UX.
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [user?.accessToken]);

  const signup = useCallback(async (username, password, extras = {}) => {
    const fullName = String(extras.fullName || "").trim();
    const email = String(extras.email || "").trim();
    const body = { username, password };
    if (fullName) body.full_name = fullName;
    if (email) body.email = email;
    const result = await requestAuth("signup", body);
    if (result.ok) {
      const session = { ...result.user, fullName: result.user.fullName || fullName || null };
      saveLocalProfile(session.username, { fullName: session.fullName, email: session.email || email || null });
      setUser(session);
      saveUser(session);
      return { ...result, user: session };
    }
    return result;
  }, []);

  const login = useCallback(async (username, password) => {
    const result = await requestAuth("login", { username, password });
    if (result.ok) {
      const session = withLocalProfile(result.user);
      setUser(session);
      saveUser(session);
      return { ...result, user: session };
    }
    return result;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    saveUser(null);
  }, []);

  /**
   * Edit the profile ({ fullName, email }). Saved on the server when it
   * supports profiles; otherwise kept on this device so certificates and the
   * leaderboard still show the name.
   */
  const updateProfile = useCallback(
    async (changes = {}) => {
      if (!user) return { error: "Sign in first." };
      const fullName = changes.fullName !== undefined ? String(changes.fullName).replace(/\s+/g, " ").trim() : undefined;
      const email = changes.email !== undefined ? String(changes.email).trim().toLowerCase() : undefined;
      if (fullName !== undefined && fullName.length < 2) {
        return { error: "Full name must be at least 2 characters." };
      }
      const body = {};
      if (fullName !== undefined) body.full_name = fullName;
      if (email !== undefined) body.email = email;

      const applyLocal = (patch) => {
        saveLocalProfile(user.username, patch);
        setUser((prev) => {
          if (!prev) return prev;
          const next = { ...prev, ...patch };
          saveUser(next);
          return next;
        });
      };

      let response;
      try {
        response = await fetch(`${API_URL}/api/auth/me`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
          body: JSON.stringify(body),
        });
      } catch {
        applyLocal({ ...(fullName !== undefined && { fullName }), ...(email !== undefined && { email }) });
        return { ok: true, localOnly: true };
      }

      const data = await response.json().catch(() => ({}));
      if (response.status === 404 || response.status === 405) {
        // Backend without profile editing yet.
        applyLocal({ ...(fullName !== undefined && { fullName }), ...(email !== undefined && { email }) });
        return { ok: true, localOnly: true };
      }
      if (!response.ok) return { error: data.detail || "Could not save your profile." };
      applyLocal({
        fullName: data.user?.fullName ?? fullName ?? user.fullName,
        email: data.user?.email ?? email ?? user.email,
      });
      return { ok: true };
    },
    [user],
  );

  return (
    <AuthContext.Provider value={{ user, isHydrated, signup, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}