/**
 * Tracks requests the visitor is waiting on, so PageLoader can show the
 * loading screen on a slow connection.
 *
 * window.fetch is wrapped (on top of backendWake's wrapper) and a request is
 * counted when it starts shortly after the visitor did something:
 *   - "action": a button press or form submit (sign in, save, submit quiz…)
 *   - "page":   a link click or route change (data the new page loads)
 * Background traffic (chat streaming, health checks, polling) is ignored.
 *
 * Code-split pages call beginTask()/endTask() while their chunk downloads.
 */

const ACTION_WINDOW_MS = 1500;
const PAGE_WINDOW_MS = 2000;
const IGNORE = [/\/api\/chat\b/, /\/health\b/, /\/healthz\b/, /\/qc-api\//, /snapdeploy\.dev/, /sockjs-node/, /hot-update/];

const pending = { action: 0, page: 0, task: 0 };
const listeners = new Set();
let lastAction = 0;
let lastPage = 0;

function emit() {
  const snapshot = { ...pending };
  listeners.forEach((fn) => fn(snapshot));
}

export function subscribe(fn) {
  listeners.add(fn);
  fn({ ...pending });
  return () => listeners.delete(fn);
}

export function markPageChange() {
  lastPage = Date.now();
}

/** For work that isn't a fetch, e.g. a lazy page chunk. Returns the matching end(). */
export function beginTask() {
  pending.task += 1;
  emit();
  let ended = false;
  return () => {
    if (ended) return;
    ended = true;
    pending.task = Math.max(0, pending.task - 1);
    emit();
  };
}

function urlOf(input) {
  if (typeof input === "string") return input;
  if (input && typeof input.url === "string") return input.url;
  return String(input || "");
}

function kindFor(url) {
  if (IGNORE.some((re) => re.test(url))) return null;
  const now = Date.now();
  if (now - lastAction <= ACTION_WINDOW_MS) return "action";
  if (now - lastPage <= PAGE_WINDOW_MS) return "page";
  return null;
}

export function installNetworkActivity() {
  if (typeof window === "undefined" || window.__cvNetworkActivity) return;
  window.__cvNetworkActivity = true;

  // What the visitor just did decides how a request that follows is shown.
  document.addEventListener(
    "click",
    (event) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target) return;
      if (target.closest("a[href]")) lastPage = Date.now();
      else if (target.closest('button, [role="button"], input[type="submit"], input[type="button"]')) {
        lastAction = Date.now();
      }
    },
    true,
  );
  document.addEventListener(
    "submit",
    () => {
      lastAction = Date.now();
    },
    true,
  );

  const innerFetch = window.fetch.bind(window);
  window.fetch = (input, init) => {
    const kind = kindFor(urlOf(input));
    if (!kind) return innerFetch(input, init);
    pending[kind] += 1;
    emit();
    const done = () => {
      pending[kind] = Math.max(0, pending[kind] - 1);
      emit();
    };
    let request;
    try {
      request = innerFetch(input, init);
    } catch (error) {
      done();
      throw error;
    }
    return Promise.resolve(request).finally(done);
  };
}
