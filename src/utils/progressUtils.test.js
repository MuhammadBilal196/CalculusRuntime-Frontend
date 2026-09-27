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

test("isOverdueForReview returns false for null",()=>{expect(isOverdueForReview(null)).toBe(false);});

test("normalizeTimestamp accepts numeric strings",()=>{expect(normalizeTimestamp("1700000000")).toBe(1700000000000);});

test("normalizeTimestamp accepts numeric millisecond strings",()=>{expect(normalizeTimestamp("1700000000000")).toBe(1700000000000);});

test("normalizeTimestamp accepts Date parseable strings",()=>{expect(normalizeTimestamp("2024-02-01")).toBe(Date.parse("2024-02-01"));});

test("formatRelativeCompletion handles null",()=>{expect(formatRelativeCompletion(null)).toBe("Completed recently");});

test("formatCompletionDate handles null",()=>{expect(formatCompletionDate(null)).toBe("Unknown completion date");});
