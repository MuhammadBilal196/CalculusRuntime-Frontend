import { useCallback, useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { readQuizAttempts } from "../utils/quizAttempts";
import { queueLearningEvents, readLearningState, syncLearningEvents } from "../utils/learningEvents";

export default function useLearningHistory() {
  const user = useAuth()?.user;
  const [snapshot, setSnapshot] = useState(() => ({ owner: user?.username, ...readLearningState(user) }));
  const username = user?.username, token = user?.accessToken;
  useEffect(() => {
    const account = username && token ? { username, accessToken: token } : null;
    const refresh = () => setSnapshot({ owner: username, ...readLearningState(account) });
    const changed = (event) => { if (!event.detail || event.detail === username) refresh(); };
    const sync = () => { if (account) void syncLearningEvents(account); };
    refresh();
    window.addEventListener("learning-history-change", changed);
    if (account) queueLearningEvents(account, readQuizAttempts(account).map((record) => ({
      eventId: `${record.attemptId}:${record.responseId}`, kind: "question", data: record,
    })));
    window.addEventListener("storage", refresh);
    window.addEventListener("online", sync);
    window.addEventListener("focus", sync);
    return () => {
      window.removeEventListener("learning-history-change", changed);
      window.removeEventListener("storage", refresh);
      window.removeEventListener("online", sync);
      window.removeEventListener("focus", sync);
    };
  }, [username, token]);
  const append = useCallback((event) => queueLearningEvents(user, [event]), [user]);
  const retry = useCallback(() => syncLearningEvents(user), [user]);
  const state = snapshot.owner === username ? snapshot : readLearningState(user);
  return { ...state, user, append, retry };
}
