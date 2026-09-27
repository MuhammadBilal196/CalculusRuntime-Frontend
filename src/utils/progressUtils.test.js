import {
  normalizeTimestamp,
  formatRelativeCompletion,
  formatCompletionDate,
  isOverdueForReview,
  recordActivityDay,
  getStreak,
} from "./progressUtils";

test("normalizeTimestamp returns null for null",()=>{expect(normalizeTimestamp(null)).toBeNull();});


test("formatCompletionDate formats a known date",()=>{const value=new Date("2024-01-15T00:00:00.000Z").getTime();expect(formatCompletionDate(value)).toMatch(/Jan|15|2024/);});
