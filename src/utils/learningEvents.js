import { fetchWithTimeout } from "./fetchWithTimeout";
const API = process.env.REACT_APP_API_URL || "http://127.0.0.1:8002";
const running = new Map();
const keyFor = (user) => user?.username && user?.accessToken ? `calcvoyager_learning_v1:${encodeURIComponent(user.username)}` : null;
export function validLearningEvent(event) {
  const d = event?.data;
  if (typeof event?.eventId !== "string" || !event.eventId || !d || !Number.isFinite(Date.parse(d.occurredAt))) return false;
  if (event.kind === "question") return typeof d.prompt === "string" && Array.isArray(d.options)
    && d.options.length >= 2 && d.options.every((v) => typeof v === "string")
    && Number.isInteger(d.correctIndex) && d.correctIndex >= 0 && d.correctIndex < d.options.length
    && (d.selectedIndex === null || (Number.isInteger(d.selectedIndex) && d.selectedIndex >= 0 && d.selectedIndex < d.options.length))
    && typeof d.correct === "boolean" && d.correct === (d.selectedIndex === d.correctIndex);
  if (event.kind === "flashcard") return typeof d.cardId === "string" && !!d.cardId && ["Again", "Good", "Easy"].includes(d.rating);
  if (event.kind === "note") return typeof d.noteId === "string" && typeof d.sectionId === "string"
    && typeof d.text === "string" && typeof d.quote === "string" && typeof d.deleted === "boolean"
    && typeof d.path === "string" && d.path.startsWith("/") && !d.path.startsWith("//");
  return false;
}
const empty = () => ({ events: [], pending: [], cursor: 0, error: null });
export function readLearningState(user) {
  const key = keyFor(user);
  if (!key) return empty();
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return empty();
    const data = JSON.parse(raw);
    if (!Array.isArray(data.events) || !Array.isArray(data.pending) || !Number.isInteger(data.cursor) || data.cursor < 0 || !data.events.every(validLearningEvent) || !data.pending.every((id) => typeof id === "string" && data.events.some((e) => e.eventId === id))) throw new Error();
    return data;
  } catch { return { ...empty(), error: "Stored study history could not be read. Export or repair the cache before retrying." }; }
}
function save(user, state) {
  const key = keyFor(user);
  if (!key) return false;
  localStorage.setItem(key, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent("learning-history-change", { detail: user.username }));
  return true;
}
export function queueLearningEvents(user, events) {
  if (!keyFor(user) || !events.every(validLearningEvent)) return false;
  try {
    const state = readLearningState(user);
    if (state.error?.startsWith("Stored study")) return false;
    const known = new Set(state.events.map((event) => event.eventId));
    for (const event of events) if (!known.has(event.eventId)) {
      state.events.push(event); state.pending.push(event.eventId); known.add(event.eventId);
    }
    save(user, state);
    void syncLearningEvents(user);
    return true;
  } catch { return false; }
}
export function syncLearningEvents(user) {
  const key = keyFor(user);
  if (!key) return Promise.resolve(false);
  if (running.has(key)) return running.get(key);
  const task = (async () => {
    try {
      let state = readLearningState(user);
      if (state.error?.startsWith("Stored study")) return false;
      const headers = { Authorization: `Bearer ${user.accessToken}`, "Content-Type": "application/json" };
      let after = state.cursor;
      while (true) {
        const response = await fetchWithTimeout(`${API}/api/progress/learning-events?after=${after}`, { headers }, 15000);
        if (!response.ok) throw new Error(`History sync failed (${response.status}). Retry when connected and signed in.`);
        const page = await response.json();
        if (!Array.isArray(page.items)) throw new Error("Invalid history response.");
        state = readLearningState(user);
        const records = new Map(state.events.map((event) => [event.eventId, event]));
        for (const row of page.items) {
          if (!Number.isInteger(row.id) || !validLearningEvent(row.event)) throw new Error("Invalid history record.");
          records.set(row.event.eventId, row.event);
          state.cursor = Math.max(state.cursor, row.id);
        }
        state.events = [...records.values()]; state.error = null; save(user, state);
        if (page.next_cursor == null) break;
        if (!Number.isInteger(page.next_cursor) || page.next_cursor <= after) throw new Error("Invalid history cursor.");
        after = page.next_cursor;
      }
      while (true) {
        state = readLearningState(user);
        const id = state.pending[0];
        if (!id) break;
        const event = state.events.find((item) => item.eventId === id);
        if (!event) throw new Error("A pending record is missing from the local cache.");
        const response = await fetchWithTimeout(`${API}/api/progress/learning-events`, {
          method: "POST", headers, body: JSON.stringify(event),
        }, 15000);
        if (!response.ok) throw new Error(`History upload failed (${response.status}). Your answers remain saved on this device.`);
        state = readLearningState(user);
        state.pending = state.pending.filter((value) => value !== id); state.error = null; save(user, state);
      }
      return true;
    } catch (error) {
      try { const state = readLearningState(user); if (!state.error?.startsWith("Stored study")) { state.error = error.message; save(user, state); } } catch { /* Preserve quiz flow when storage is unavailable. */ }
      return false;
    }
  })().finally(() => running.delete(key));
  running.set(key, task);
  return task;
}
