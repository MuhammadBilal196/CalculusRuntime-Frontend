import { parseNumbers, parsePairs, describe as desc, histogram, oneSampleT, twoSampleT, linearRegression, tQuantile } from "./statsCalc";

describe("statsCalc", () => {
  test("parseNumbers splits on spaces, commas and lines, and counts invalid tokens", () => {
    const r = parseNumbers("1, 2 3\n4;x");
    expect(r.values).toEqual([1, 2, 3, 4]);
    expect(r.invalid).toBe(1);
  });
  test("parsePairs reads x y per line", () => {
    const r = parsePairs("1 2\n3,4\nbad");
    expect(r.xs).toEqual([1, 3]);
    expect(r.ys).toEqual([2, 4]);
    expect(r.invalid).toBe(1);
  });
  test("describe computes mean, sd, quartiles", () => {
    const r = desc([2, 4, 4, 4, 5, 5, 7, 9]);
    expect(r.mean).toBeCloseTo(5, 8);
    expect(r.sd).toBeCloseTo(2.13809, 4);
    expect(r.median).toBe(4.5);
    expect(r.working.length).toBeGreaterThan(5);
  });
  test("histogram counts add up", () => {
    const h = histogram([1, 2, 2, 3, 9], 4);
    expect(h.reduce((s, b) => s + b.count, 0)).toBe(5);
  });
  test("tQuantile(0.975, 10) is about 2.228", () => {
    expect(tQuantile(0.975, 10)).toBeCloseTo(2.228, 3);
  });
  test("one-sample t-test", () => {
    const r = oneSampleT([5, 6, 7, 8, 9], 5);
    expect(r.t).toBeCloseTo(2.8284, 3);
    expect(r.df).toBe(4);
    expect(r.p).toBeCloseTo(0.0474, 3);
    expect(r.reject).toBe(true);
  });
  test("two-sample pooled t-test", () => {
    const r = twoSampleT([1, 2, 3, 4, 5], [2, 3, 4, 5, 6], true);
    expect(r.t).toBeCloseTo(-1, 6);
    expect(r.df).toBe(8);
    expect(r.p).toBeCloseTo(0.3466, 3);
  });
  test("Welch df equals 8 for equal-variance equal-n samples", () => {
    expect(twoSampleT([1, 2, 3, 4, 5], [2, 3, 4, 5, 6], false).df).toBeCloseTo(8, 6);
  });
  test("linear regression", () => {
    const r = linearRegression([1, 2, 3, 4, 5], [2, 4, 5, 4, 5]);
    expect(r.b1).toBeCloseTo(0.6, 8);
    expect(r.b0).toBeCloseTo(2.2, 8);
    expect(r.r).toBeCloseTo(0.7746, 3);
    expect(r.predict(6)).toBeCloseTo(5.8, 8);
  });
  test("errors for degenerate input", () => {
    expect(oneSampleT([3, 3, 3], 3).error).toBeTruthy();
    expect(linearRegression([1, 1, 1], [1, 2, 3]).error).toBeTruthy();
  });
});
