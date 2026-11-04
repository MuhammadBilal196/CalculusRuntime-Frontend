import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { beginTask, markPageChange, subscribe } from "../../utils/networkActivity";
import "./PageLoader.css";

const BAR_DELAY_MS = 250; // fast responses never flash anything
const OVERLAY_DELAY_MS = 500;
const MIN_VISIBLE_MS = 400;
const SLOW_AFTER_MS = 8000;

/** Shows `active` only after `delay`, and keeps it up for at least MIN_VISIBLE_MS. */
function useDelayedFlag(active, delay) {
  const [visible, setVisible] = useState(false);
  const shownAt = useRef(0);

  useEffect(() => {
    let timer;
    if (active && !visible) {
      timer = setTimeout(() => {
        shownAt.current = Date.now();
        setVisible(true);
      }, delay);
    } else if (!active && visible) {
      const left = Math.max(0, MIN_VISIBLE_MS - (Date.now() - shownAt.current));
      timer = setTimeout(() => setVisible(false), left);
    }
    return () => clearTimeout(timer);
  }, [active, visible, delay]);

  return visible;
}

/**
 * Loading feedback for slow connections, styled like the boot screen in
 * public/index.html:
 *   - a thin progress bar at the top whenever a page or action is waiting
 *   - the full loading card when an action (sign in, save, submit) or a page
 *     download takes more than half a second
 */
export default function PageLoader() {
  const { pathname } = useLocation();
  const [work, setWork] = useState({ action: 0, page: 0, task: 0 });
  const [slow, setSlow] = useState(false);

  useEffect(() => subscribe(setWork), []);
  useEffect(() => {
    markPageChange();
  }, [pathname]);

  const blocking = work.action + work.task > 0;
  const busy = blocking || work.page > 0;
  const showBar = useDelayedFlag(busy, BAR_DELAY_MS);
  const showCard = useDelayedFlag(blocking, OVERLAY_DELAY_MS);

  useEffect(() => {
    if (!showCard) {
      setSlow(false);
      return undefined;
    }
    const timer = setTimeout(() => setSlow(true), SLOW_AFTER_MS);
    return () => clearTimeout(timer);
  }, [showCard]);

  return (
    <>
      <div className={`cv-progress${showBar ? " is-on" : ""}`} aria-hidden="true">
        <span />
      </div>
      {showCard ? (
        <div className="cv-loader" role="status" aria-live="polite">
          <div className="cv-loader__card">
            <svg className="cv-loader__plot" viewBox="0 0 240 110" aria-hidden="true">
              <line className="cv-loader__axis" x1="10" y1="55" x2="230" y2="55" />
              <line className="cv-loader__axis" x1="20" y1="8" x2="20" y2="102" />
              <path className="cv-loader__curve" d="M20 55 C 45 5, 70 5, 95 55 S 145 105, 170 55 S 210 15, 220 30" />
            </svg>
            <div className="cv-loader__brand">
              <span className="cv-loader__logo">∂</span>CalcVoyager
            </div>
            <p className="cv-loader__text">
              {slow ? (
                <>
                  Still working — your connection or the server is <mark>slow</mark> right now…
                </>
              ) : (
                <>
                  <mark>Loading</mark>, one moment…
                </>
              )}
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Suspense fallback for code-split pages: shows the loading card while the page downloads. */
export function RouteLoader() {
  useEffect(() => beginTask(), []);
  return <div className="cv-route-placeholder" aria-hidden="true" />;
}
