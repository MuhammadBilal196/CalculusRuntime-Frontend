import { useCallback, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { newAttemptId, recordQuizAttempt } from "../utils/quizAttempts";

export default function useQuizAttempts() {
  const user = useAuth()?.user;
  const state = useRef({ user, owner: user?.username, attemptId: newAttemptId() });
  if (state.current.owner !== user?.username) {
    state.current = { user, owner: user?.username, attemptId: newAttemptId() };
  }
  state.current.user = user;
  const restart = useCallback(() => { state.current.attemptId = newAttemptId(); }, []);
  const session = state.current;
  const record = useCallback((input) => recordQuizAttempt(session.user, {
    ...input, attemptId: session.attemptId,
  }), [session]);
  return { record, restart };
}
