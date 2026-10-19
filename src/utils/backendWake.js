/**
 * The production backend runs on SnapDeploy, which puts the container to sleep
 * after inactivity. While asleep every request gets a 503 HTML "Waking up your
 * container..." page (usually without CORS headers, so fetch just throws), and
 * the container only wakes when the wake API is called — which that HTML page
 * does via its own JS, so API calls from this site never wake it.
 *
 * installBackendWake() wraps window.fetch: when a call to the backend fails
 * because the container is asleep, it sends the wake signal once, waits for
 * /health, shows a small "starting up" notice, then retries the request.
 */

const API_URL = (process.env.REACT_APP_API_URL || "").replace(/\/$/, "");
const SNAPDEPLOY_HOST = /^([a-z0-9-]+)\.containers\.snapdeploy\.app$/i;
const WAKE_API = "https://snapdeploy.dev/api/public/wake";
const POLL_INTERVAL_MS = 3000;
const MAX_WAIT_MS = 3 * 60 * 1000;
const NOTICE_ID = "backend-wake-notice";

let wakePromise = null;

function getSubdomain() {
  try {
    const match = new URL(API_URL).hostname.match(SNAPDEPLOY_HOST);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

function isBackendRequest(input) {
  const url = typeof input === "string" ? input : input?.url || String(input);
  return url.startsWith(API_URL);
}

function looksAsleep(response) {
  if (response.status !== 503) return false;
  const type = response.headers.get("content-type") || "";
  return type.includes("text/html");
}

function showNotice() {
  if (document.getElementById(NOTICE_ID)) return;
  const el = document.createElement("div");
  el.id = NOTICE_ID;
  el.setAttribute("role", "status");
  el.textContent = "Starting the server — this takes about a minute…";
  Object.assign(el.style, {
    position: "fixed",
    top: "12px",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: "100000",
    padding: "8px 16px",
    borderRadius: "999px",
    background: "#1f2937",
    color: "#fff",
    font: "500 14px/1.4 system-ui, sans-serif",
    boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
    maxWidth: "calc(100vw - 32px)",
    textAlign: "center",
  });
  document.body.appendChild(el);
}

function hideNotice() {
  document.getElementById(NOTICE_ID)?.remove();
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function isHealthy(realFetch) {
  try {
    const res = await realFetch(`${API_URL}/health`, { cache: "no-store" });
    return res.ok;
  } catch {
    return false;
  }
}

function wakeBackend(realFetch, subdomain) {
  if (wakePromise) return wakePromise;
  wakePromise = (async () => {
    showNotice();
    try {
      await realFetch(`${WAKE_API}/${subdomain}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
    } catch {
      // Still poll: the container may already be starting.
    }
    const deadline = Date.now() + MAX_WAIT_MS;
    while (Date.now() < deadline) {
      if (await isHealthy(realFetch)) return true;
      await sleep(POLL_INTERVAL_MS);
    }
    return false;
  })().finally(() => {
    hideNotice();
    wakePromise = null;
  });
  return wakePromise;
}

export function installBackendWake() {
  const subdomain = getSubdomain();
  if (!subdomain || typeof window === "undefined" || window.__backendWakeInstalled) {
    return;
  }
  window.__backendWakeInstalled = true;
  const realFetch = window.fetch.bind(window);

  window.fetch = async (input, init) => {
    if (!isBackendRequest(input)) return realFetch(input, init);
    // Request bodies can only be read once; clone Request objects for the retry.
    const retryInput = input instanceof Request ? input.clone() : input;
    if (wakePromise) await wakePromise;

    let response;
    try {
      response = await realFetch(input, init);
      if (!looksAsleep(response)) return response;
    } catch (err) {
      if (await isHealthy(realFetch)) throw err; // a real error, not sleep
    }

    const awake = await wakeBackend(realFetch, subdomain);
    if (!awake && response) return response;
    return realFetch(retryInput, init);
  };

  // Start waking as soon as the site opens, before the user clicks anything.
  isHealthy(realFetch).then((ok) => {
    if (!ok) wakeBackend(realFetch, subdomain);
  });
}
