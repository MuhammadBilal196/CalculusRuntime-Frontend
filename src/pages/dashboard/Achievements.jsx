import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useProgress } from "../../context/ProgressContext";
import { getStreak } from "../../utils/progressUtils";
import { fetchWithTimeout } from "../../utils/fetchWithTimeout";
import {
  BADGES, computeStats, isUnlocked, mergeUnlocked, parsePracticeCount,
} from "../../utils/achievements";
import "./AchievementsStyles.css";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8002";
const storeKey = (username) => `calcvoyager_badges_${username}`;

function loadUnlocked(username) {
  try {
    return JSON.parse(localStorage.getItem(storeKey(username)) || "{}") || {};
  } catch {
    return {};
  }
}

export default function Achievements() {
  const { user } = useAuth() || {};
  const ctx = useProgress() || {};
  const prog = ctx.progress || ctx;
  const completedSections = prog.completedSections;
  const quizScores = prog.quizScores;
  const username = user?.username;

  const [certificateCount, setCertificateCount] = useState(0);
  useEffect(() => {
    if (!user?.accessToken) return undefined;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetchWithTimeout(`${API_URL}/api/certificates/mine`, {
          headers: { Authorization: `Bearer ${user.accessToken}` },
        });
        if (!res.ok) return;
        const list = await res.json();
        if (!cancelled && Array.isArray(list)) setCertificateCount(list.length);
      } catch {
        /* offline or server down: leave the count at 0 */
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user?.accessToken]);

  const stats = useMemo(() => {
    let practiceCount = 0;
    try {
      practiceCount = parsePracticeCount(localStorage.getItem("arena_score_tracker"));
    } catch {
      /* storage unavailable */
    }
    return computeStats({ completedSections: completedSections || {}, quizScores: quizScores || {}, streak: getStreak(), practiceCount, certificateCount });
  }, [completedSections, quizScores, certificateCount]);

  const [unlocked, setUnlocked] = useState(() => (username ? loadUnlocked(username) : {}));
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (!username) return;
    const { unlocked: next, newly } = mergeUnlocked(loadUnlocked(username), stats, new Date().toISOString());
    setUnlocked(next);
    if (newly.length) {
      try {
        localStorage.setItem(storeKey(username), JSON.stringify(next));
      } catch {
        /* ignore */
      }
      setToasts(newly);
      const timer = setTimeout(() => setToasts([]), 5000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [username, stats]);

  const unlockedCount = BADGES.filter((b) => unlocked[b.id] || isUnlocked(b, stats)).length;

  return (
    <div className="ach-page">
      <header className="ach-hdr">
        <p className="ach-eye">Your progress</p>
        <h1>Badges &amp; Achievements</h1>
        <p className="ach-sub">Unlock badges as you finish modules, build a streak and practise.</p>
      </header>

      {!username ? (
        <div className="ach-login">
          <p>Log in to track your badges and see which ones you have unlocked.</p>
          <Link to="/">Back to home</Link>
        </div>
      ) : (
        <>
          <p className="ach-count">{unlockedCount} of {BADGES.length} unlocked</p>
          <div className="ach-grid">
            {BADGES.map((b) => {
              const [cur, target] = b.progress(stats);
              const on = Boolean(unlocked[b.id]) || cur >= target;
              return (
                <article key={b.id} className={`ach-card ${on ? "on" : "off"}`}>
                  <div className="ach-icon" aria-hidden="true">{b.icon}</div>
                  <h2>{b.title}</h2>
                  <p className="ach-desc">{b.description}</p>
                  <div className="ach-bar" role="progressbar" aria-valuemin={0} aria-valuemax={target} aria-valuenow={on ? target : cur}>
                    <span style={{ width: `${on ? 100 : (cur / target) * 100}%` }} />
                  </div>
                  <p className="ach-meta">
                    {on
                      ? `Unlocked${unlocked[b.id] ? ` · ${new Date(unlocked[b.id]).toLocaleDateString()}` : ""}`
                      : `Locked · ${cur} / ${target}`}
                  </p>
                </article>
              );
            })}
          </div>
        </>
      )}

      <div className="ach-toasts" aria-live="polite">
        {toasts.map((b) => (
          <div className="ach-toast" key={b.id} role="status">
            <b>{b.icon} Badge unlocked!</b>
            {b.title}
          </div>
        ))}
      </div>
    </div>
  );
}
