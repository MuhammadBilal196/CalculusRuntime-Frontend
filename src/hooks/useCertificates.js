import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { fetchWithTimeout } from "../utils/fetchWithTimeout";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8002";

/**
 * Certificates the signed-in student has earned, keyed by course id.
 * { earned: null while loading | {courseId: record}, error, reload }
 */
export default function useCertificates() {
  const { user, isHydrated } = useAuth();
  const [earned, setEarned] = useState(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!isHydrated || !user?.accessToken) {
      setEarned({});
      return undefined;
    }
    let cancelled = false;
    setError(false);
    (async () => {
      try {
        const res = await fetchWithTimeout(`${API_URL}/api/certificates/mine`, {
          headers: { Authorization: `Bearer ${user.accessToken}` },
        });
        if (!res.ok) throw new Error(String(res.status));
        const list = await res.json();
        if (cancelled) return;
        const byCourse = {};
        (Array.isArray(list) ? list : []).forEach((c) => {
          byCourse[c.course_id] = c;
        });
        setEarned(byCourse);
      } catch {
        if (!cancelled) {
          setError(true);
          setEarned((prev) => prev || {});
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [isHydrated, user?.accessToken, attempt]);

  return { earned, error, reload: () => setAttempt((n) => n + 1) };
}
