import { DISTRIBUTIONS, defaultParams, probBetween, fmt } from "./distributions";

describe("distributions", () => {
  test("normal cdf at 1.96 is about 0.975", () => {
    expect(DISTRIBUTIONS.normal.cdf(1.96, { mu: 0, sigma: 1 })).toBeCloseTo(0.975, 3);
  });
  test("t cdf at 2.228 with 10 df is about 0.975", () => {
    expect(DISTRIBUTIONS.t.cdf(2.228, { nu: 10 })).toBeCloseTo(0.975, 3);
  });
  test("chi-square cdf at 3.841 with 1 df is about 0.95", () => {
    expect(DISTRIBUTIONS.chisq.cdf(3.841, { k: 1 })).toBeCloseTo(0.95, 3);
  });
  test("binomial pmf n=4 p=0.5 k=2 is 0.375", () => {
    expect(DISTRIBUTIONS.binomial.pdf(2, { n: 4, p: 0.5 })).toBeCloseTo(0.375, 6);
  });
  test("poisson cdf(2) with lambda=1 is about 0.9197", () => {
    expect(DISTRIBUTIONS.poisson.cdf(2, { lambda: 1 })).toBeCloseTo(0.9197, 4);
  });
  test("exponential cdf(1) with lambda=1", () => {
    expect(DISTRIBUTIONS.exponential.cdf(1, { lambda: 1 })).toBeCloseTo(1 - Math.exp(-1), 8);
  });
  test("probBetween normal (-1.96, 1.96) is about 0.95", () => {
    expect(probBetween("normal", defaultParams("normal"), -1.96, 1.96)).toBeCloseTo(0.95, 3);
  });
  test("discrete probBetween includes both ends", () => {
    expect(probBetween("binomial", { n: 4, p: 0.5 }, 1, 2)).toBeCloseTo(0.25 + 0.375, 6);
  });
  test("mean and variance", () => {
    expect(DISTRIBUTIONS.binomial.mean({ n: 10, p: 0.3 })).toBeCloseTo(3, 8);
    expect(DISTRIBUTIONS.binomial.variance({ n: 10, p: 0.3 })).toBeCloseTo(2.1, 8);
    expect(DISTRIBUTIONS.chisq.variance({ k: 4 })).toBe(8);
    expect(DISTRIBUTIONS.t.variance({ nu: 5 })).toBeCloseTo(5 / 3, 8);
  });
  test("fmt handles undefined and infinity", () => {
    expect(fmt(NaN)).toBe("undefined");
    expect(fmt(Infinity)).toBe("∞");
    expect(fmt(0.123456)).toBe("0.1235");
  });
});
