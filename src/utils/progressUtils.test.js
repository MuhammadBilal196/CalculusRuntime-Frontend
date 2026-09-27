import {
  normalizeTimestamp,
  formatRelativeCompletion,
  formatCompletionDate,
  isOverdueForReview,
  recordActivityDay,
  getStreak,
} from "./progressUtils";

test("normalizeTimestamp returns null for null",()=>{expect(normalizeTimestamp(null)).toBeNull();});

