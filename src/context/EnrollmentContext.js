// Courses a student registered for. Saved on the server (/api/progress/courses)
// and on this device, so the profile and certificates page only show the
// courses the student is actually taking.

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useProgress } from "./ProgressContext";
import { CATALOG_COURSE_IDS, coursesWithProgress, findCourseForPath } from "../data/courseCatalog";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8002";
const EnrollmentContext = createContext(null);

function storageKey(username) {
  return `calcvoyager_courses_${String(username || "").toLowerCase()}`;
}

function loadLocal(username) {
  if (!username) return [];
  try {
    const list = JSON.parse(localStorage.getItem(storageKey(username)) || "[]");
    return Array.isArray(list) ? list.filter((id) => CATALOG_COURSE_IDS.includes(id)) : [];
  } catch {
    return [];
  }
}

function saveLocal(username, list) {
  if (!username) return;
  try {
    localStorage.setItem(storageKey(username), JSON.stringify(list));
  } catch {}
}

function ordered(list) {
  return CATALOG_COURSE_IDS.filter((id) => list.includes(id));
}

export function EnrollmentProvider({ children }) {
  const { user } = useAuth();
  const { progress } = useProgress();
  const [courses, setCourses] = useState(() => loadLocal(user?.username));
  const [serverSupported, setServerSupported] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const headers = useMemo(
    () =>
      user?.accessToken
        ? { "Content-Type": "application/json", Authorization: `Bearer ${user.accessToken}` }
        : null,
    [user?.accessToken],
  );

  // Load on sign-in: merge server + this device.
  useEffect(() => {
    const local = loadLocal(user?.username);
    setCourses(local);
    setLoaded(false);
    if (!headers) {
      setLoaded(true);
      return undefined;
    }
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`${API_URL}/api/progress/courses`, { headers });
        if (res.status === 404 || res.status === 405) {
          if (!cancelled) setServerSupported(false);
          return;
        }
        if (!res.ok) return;
        const data = await res.json();
        const server = (data.courses || []).map((c) => c.courseId || c.course_id).filter(Boolean);
        if (cancelled) return;
        setServerSupported(true);
        const merged = ordered([...new Set([...server, ...local])]);
        setCourses(merged);
        saveLocal(user?.username, merged);
        // Push courses only this device knew about.
        local
          .filter((id) => !server.includes(id))
          .forEach((id) =>
            fetch(`${API_URL}/api/progress/courses`, {
              method: "POST",
              headers,
              body: JSON.stringify({ course_id: id }),
            }).catch(() => {}),
          );
      } catch {
        // Offline: this device's list is used.
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [headers, user?.username]);

  const register = useCallback(
    async (courseId) => {
      if (!user || !CATALOG_COURSE_IDS.includes(courseId)) return;
      setCourses((prev) => {
        if (prev.includes(courseId)) return prev;
        const next = ordered([...prev, courseId]);
        saveLocal(user.username, next);
        return next;
      });
      if (headers && serverSupported) {
        try {
          await fetch(`${API_URL}/api/progress/courses`, {
            method: "POST",
            headers,
            body: JSON.stringify({ course_id: courseId }),
          });
        } catch {}
      }
    },
    [headers, serverSupported, user],
  );

  const unregister = useCallback(
    async (courseId) => {
      if (!user) return;
      setCourses((prev) => {
        const next = prev.filter((id) => id !== courseId);
        saveLocal(user.username, next);
        return next;
      });
      if (headers && serverSupported) {
        try {
          await fetch(`${API_URL}/api/progress/courses/${encodeURIComponent(courseId)}`, {
            method: "DELETE",
            headers,
          });
        } catch {}
      }
    },
    [headers, serverSupported, user],
  );

  // Students who studied before registration existed keep their courses.
  useEffect(() => {
    if (!user || !loaded) return;
    const started = coursesWithProgress(progress?.completedSections || {});
    started.filter((id) => !courses.includes(id)).forEach((id) => register(id));
  }, [loaded, progress?.completedSections]); // eslint-disable-line react-hooks/exhaustive-deps

  const value = useMemo(
    () => ({
      courses,
      loaded,
      isRegistered: (courseId) => courses.includes(courseId),
      register,
      unregister,
      serverSupported,
    }),
    [courses, loaded, register, unregister, serverSupported],
  );

  return <EnrollmentContext.Provider value={value}>{children}</EnrollmentContext.Provider>;
}

export function useEnrollments() {
  return (
    useContext(EnrollmentContext) || {
      courses: [],
      loaded: true,
      isRegistered: () => false,
      register: () => {},
      unregister: () => {},
      serverSupported: false,
    }
  );
}

/** Opening a study guide while signed in registers its course. */
export function CourseAutoEnroll() {
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { loaded, isRegistered, register } = useEnrollments();

  useEffect(() => {
    if (!user || !loaded) return;
    const courseId = findCourseForPath(pathname);
    if (courseId && !isRegistered(courseId)) register(courseId);
  }, [pathname, user, loaded]); // eslint-disable-line react-hooks/exhaustive-deps

  return null;
}
