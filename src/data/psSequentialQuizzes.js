// Module C: Sequential and Multiple Decisions. SPRT notation: A = (1-beta)/alpha, B = beta/(1-alpha).

export const PS_R2_SPRT_QUIZ = [
  // ---------- Easy ----------
  {
    prompt: "A sequential probability ratio test (SPRT) is called sequential because:",
    options: ["the data must be time-ordered", "it tests several hypotheses in a row", "the sample size is not fixed in advance: data are examined after each observation and sampling stops when the evidence is strong enough", "it always uses the same number of observations"],
    answer: "C",
    explanation: "After each observation the SPRT either stops with a decision or takes another observation.",
  },
  {
    prompt: "The statistic that an SPRT compares with its two boundaries is:",
    options: ["the sample mean", "the (log) likelihood ratio of the data so far", "the p-value", "the sample variance"],
    answer: "B",
    explanation: "Lambda_n = L(H1; x_1..x_n) / L(H0; x_1..x_n), usually tracked on the log scale.",
  },
  {
    prompt: "For H0: p = p0 against H1: p = p1 with p1 > p0, a single success changes the log likelihood ratio by:",
    options: ["ln(p1/p0)", "ln(p0/p1)", "ln((1-p1)/(1-p0))", "p1 - p0"],
    answer: "A",
    explanation: "A success has probability p1 under H1 and p0 under H0, so it adds ln(p1/p0) > 0.",
  },
  {
    prompt: "While the log likelihood ratio lies strictly between the two boundaries, the SPRT:",
    options: ["accepts H0", "accepts H1", "stops and reports a p-value", "takes another observation"],
    answer: "D",
    explanation: "Sampling continues until a boundary is reached.",
  },
  {
    prompt: "If the log likelihood ratio reaches or exceeds the upper boundary, the SPRT:",
    options: ["takes another observation", "stops and accepts H0", "stops and rejects H0 (accepts H1)", "restarts the test"],
    answer: "C",
    explanation: "A large likelihood ratio favours H1.",
  },
  {
    prompt: "The classical SPRT is designed for hypotheses that are:",
    options: ["composite versus composite", "simple versus simple", "one-sided composite only", "two-sided composite only"],
    answer: "B",
    explanation: "Wald's optimality properties are for H0: theta = theta0 against H1: theta = theta1.",
  },
  // ---------- Medium ----------
  {
    prompt: "With alpha = 0.05 and beta = 0.10, Wald's upper boundary A = (1 - beta)/alpha equals:",
    options: ["18", "19", "20", "0.105"],
    answer: "A",
    explanation: "A = 0.90 / 0.05 = 18.",
  },
  {
    prompt: "With alpha = 0.05 and beta = 0.10, Wald's lower boundary B = beta/(1 - alpha) is about:",
    options: ["0.111", "0.056", "9.5", "0.105"],
    answer: "D",
    explanation: "B = 0.10 / 0.95 = 0.105.",
  },
  {
    prompt: "For H0: p = 0.5 against H1: p = 0.7, a single failure changes the log likelihood ratio by:",
    options: ["ln(0.7/0.5) = 0.336", "ln(0.3) = -1.204", "ln(0.3/0.5) = -0.511", "ln(0.5/0.3) = 0.511"],
    answer: "C",
    explanation: "A failure has probability 0.3 under H1 and 0.5 under H0, so it adds ln(0.6) = -0.511.",
  },
  {
    prompt: "For H0: p = 0.5 against H1: p = 0.7, after 3 successes and 1 failure the log likelihood ratio is about:",
    options: ["0.336", "0.499", "0.847", "-0.511"],
    answer: "B",
    explanation: "3 ln 1.4 + ln 0.6 = 3(0.3365) - 0.5108 = 0.499.",
  },
  {
    prompt: "If A and B are Wald's boundaries for nominal alpha and beta, the actual error probabilities alpha' and beta' satisfy:",
    options: ["alpha' + beta' <= alpha + beta", "alpha' = alpha and beta' = beta exactly", "alpha' > alpha and beta' > beta always", "alpha' + beta' >= 2(alpha + beta)"],
    answer: "A",
    explanation: "Wald's inequality: the sum of the true error rates does not exceed the sum of the nominal ones.",
  },
  {
    prompt: "The main reason Wald's boundaries give only approximate error rates is that:",
    options: ["the data are not independent", "the boundaries are random", "the test never stops", "the likelihood ratio can overshoot a boundary instead of landing on it exactly"],
    answer: "D",
    explanation: "Overshoot (and discreteness) means the exact boundary relations hold only approximately.",
  },
  {
    prompt: "Compared with the fixed-sample test with the same alpha and beta, the SPRT's expected sample size under H0 and under H1 is typically:",
    options: ["larger", "exactly the same", "smaller", "unbounded"],
    answer: "C",
    explanation: "Wald and Wolfowitz showed the SPRT minimises expected sample size under both hypotheses among tests with the same error rates.",
  },
  {
    prompt: "For non-degenerate observations, the SPRT stops:",
    options: ["only if H0 is true", "with probability 1", "only if H1 is true", "never"],
    answer: "B",
    explanation: "The random walk of log likelihood ratios eventually exits the interval between the boundaries.",
  },
  // ---------- Hard ----------
  {
    prompt: "H0: p = 0.5 against H1: p = 0.7, alpha = 0.05, beta = 0.10. If the first observations are all successes, H0 is rejected after exactly:",
    options: ["9 observations", "8 observations", "10 observations", "12 observations"],
    answer: "A",
    explanation: "ln 18 = 2.890. Each success adds 0.3365, so 8 give 2.692 (< 2.890) and 9 give 3.028.",
  },
  {
    prompt: "Same test (p0 = 0.5, p1 = 0.7, alpha = 0.05, beta = 0.10). If the first observations are all failures, H0 is accepted after exactly:",
    options: ["3 observations", "4 observations", "6 observations", "5 observations"],
    answer: "D",
    explanation: "ln B = -2.251. Each failure adds -0.511: 4 give -2.043 (still inside), 5 give -2.554.",
  },
  {
    prompt: "Same test. Wald's approximation for the expected sample size under H1 is about:",
    options: ["23", "50", "29", "15"],
    answer: "C",
    explanation: "E1[N] ~ [(1-beta) ln A + beta ln B] / E1[z] = 2.376 / 0.0823 = 28.9.",
  },
  {
    prompt: "Under H1, the expected change of the log likelihood ratio per observation is:",
    options: ["zero", "positive and equal to the Kullback-Leibler divergence D(P1 || P0)", "negative", "positive and equal to D(P0 || P1)"],
    answer: "B",
    explanation: "E1[ln(f1/f0)] = D(P1 || P0) > 0, so the walk drifts upward under H1.",
  },
  {
    prompt: "Repeatedly applying a fixed-sample level-0.05 test after each new observation and stopping at the first rejection:",
    options: ["inflates the Type I error well above 0.05", "keeps the Type I error at exactly 0.05", "lowers the Type I error below 0.05", "is identical to an SPRT"],
    answer: "A",
    explanation: "Optional stopping with fixed-sample critical values gives many chances to reject a true null.",
  },
  {
    prompt: "A practical truncated SPRT stops at a maximum sample size N_max. This:",
    options: ["guarantees exactly the nominal error rates", "makes the test fixed-sample", "removes the need for boundaries", "means the nominal alpha and beta are no longer guaranteed and should be checked, for example by simulation"],
    answer: "D",
    explanation: "Truncation changes the stopping rule, so Wald's approximations no longer apply exactly.",
  },
];

export const PS_R2_MULTIPLE_TESTING_QUIZ = [
  // ---------- Easy ----------
  {
    prompt: "Twenty independent true null hypotheses are each tested at level 0.05. The probability of at least one false positive is about:",
    options: ["0.05", "0.50", "0.64", "1.00"],
    answer: "C",
    explanation: "1 - 0.95^20 = 0.642.",
  },
  {
    prompt: "The family-wise error rate (FWER) is:",
    options: ["the expected proportion of false rejections among rejections", "the probability of at least one false rejection, P(V >= 1)", "the probability that all nulls are rejected", "the power of the test"],
    answer: "B",
    explanation: "V is the number of false rejections.",
  },
  {
    prompt: "The false discovery rate (FDR) is:",
    options: ["the expected proportion of false rejections among all rejections, E[V / max(R, 1)]", "the probability of at least one false rejection", "the number of true nulls", "the Type II error rate"],
    answer: "A",
    explanation: "FDR = E[V/max(R,1)], where R is the number of rejections.",
  },
  {
    prompt: "Bonferroni's method at overall level alpha with m tests rejects H_i when:",
    options: ["p_i <= alpha", "p_i <= m alpha", "p_i >= alpha/m", "p_i <= alpha/m"],
    answer: "D",
    explanation: "Each test is run at the smaller level alpha/m.",
  },
  {
    prompt: "Which of these procedures controls the FDR (under independence)?",
    options: ["Bonferroni", "Holm", "Benjamini-Hochberg", "an unadjusted test at alpha"],
    answer: "C",
    explanation: "Bonferroni and Holm control the FWER; Benjamini-Hochberg controls the FDR.",
  },
  {
    prompt: "Compared with FWER control, FDR control typically gives:",
    options: ["fewer rejections", "more rejections (more power) but allows some false discoveries", "no false discoveries at all", "identical results"],
    answer: "B",
    explanation: "FDR control is less strict, so more true effects are found at the cost of some false ones.",
  },
  // ---------- Medium ----------
  {
    prompt: "With m = 10 tests and alpha = 0.05, the Bonferroni per-test threshold is:",
    options: ["0.005", "0.05", "0.0005", "0.5"],
    answer: "A",
    explanation: "0.05 / 10 = 0.005.",
  },
  {
    prompt: "In Holm's step-down procedure with sorted p-values p(1) <= ... <= p(m), the k-th smallest p-value is compared with:",
    options: ["alpha / m", "k alpha / m", "alpha k", "alpha / (m - k + 1)"],
    answer: "D",
    explanation: "Thresholds grow from alpha/m to alpha; stop at the first failure and reject all earlier hypotheses.",
  },
  {
    prompt: "In the Benjamini-Hochberg procedure, we find the largest k such that:",
    options: ["p(k) <= alpha / m", "p(k) <= alpha / (m - k + 1)", "p(k) <= k alpha / m, and reject all hypotheses with p <= p(k)", "p(k) >= k alpha / m"],
    answer: "C",
    explanation: "This is a step-up rule: a later p-value passing rescues the earlier ones.",
  },
  {
    prompt: "The Bonferroni-adjusted p-value for an unadjusted p = 0.012 among m = 6 tests is:",
    options: ["0.002", "0.072", "0.012", "0.5"],
    answer: "B",
    explanation: "min(1, m p) = 6 x 0.012 = 0.072.",
  },
  {
    prompt: "Compared with Bonferroni, Holm's procedure:",
    options: ["rejects at least as many hypotheses while still controlling the FWER under any dependence", "controls the FDR instead", "needs independence", "rejects fewer hypotheses"],
    answer: "A",
    explanation: "Holm is uniformly at least as powerful as Bonferroni.",
  },
  {
    prompt: "Bonferroni's FWER guarantee:",
    options: ["requires independent tests", "requires normal data", "requires all nulls to be true", "holds under any dependence between the tests"],
    answer: "D",
    explanation: "It follows from the union bound.",
  },
  {
    prompt: "Five tests have p-values 0.002, 0.010, 0.020, 0.045, 0.30. At alpha = 0.05, Benjamini-Hochberg rejects:",
    options: ["2 hypotheses", "4 hypotheses", "3 hypotheses", "5 hypotheses"],
    answer: "C",
    explanation: "Thresholds k(0.05)/5 = 0.01, 0.02, 0.03, 0.04, 0.05. The largest k with p(k) <= threshold is 3 (0.020 <= 0.03; 0.045 > 0.04).",
  },
  {
    prompt: "Same five p-values at alpha = 0.05. Bonferroni rejects:",
    options: ["1 hypothesis", "2 hypotheses", "3 hypotheses", "4 hypotheses"],
    answer: "B",
    explanation: "The threshold is 0.05/5 = 0.01, so 0.002 and 0.010 are rejected.",
  },
  // ---------- Hard ----------
  {
    prompt: "A study tests m = 1000 hypotheses, of which 900 are true nulls, each at unadjusted alpha = 0.05. The expected number of false positives is:",
    options: ["45", "5", "50", "900"],
    answer: "A",
    explanation: "900 x 0.05 = 45.",
  },
  {
    prompt: "Six p-values: 0.001, 0.008, 0.012, 0.030, 0.041, 0.20. At alpha = 0.05, Holm rejects:",
    options: ["2 hypotheses", "4 hypotheses", "5 hypotheses", "3 hypotheses"],
    answer: "D",
    explanation: "Thresholds 0.05/6, 0.05/5, 0.05/4, 0.05/3: 0.001, 0.008 and 0.012 pass; 0.030 > 0.0167 stops the procedure.",
  },
  {
    prompt: "The same six p-values at alpha = 0.05. Benjamini-Hochberg rejects:",
    options: ["3 hypotheses", "4 hypotheses", "5 hypotheses", "2 hypotheses"],
    answer: "C",
    explanation: "Thresholds k(0.05)/6: p(5) = 0.041 <= 0.0417 and p(6) = 0.20 > 0.05, so k = 5.",
  },
  {
    prompt: "For the same six p-values, the Benjamini-Hochberg adjusted p-value of 0.030 (the 4th smallest) is:",
    options: ["0.18", "0.045", "0.030", "0.2"],
    answer: "B",
    explanation: "min over j >= 4 of 6 p(j)/j: 0.045, 0.0492, 0.2, so 0.045.",
  },
  {
    prompt: "BH controls the FDR at 0.05 and rejects 20 hypotheses. The correct interpretation is:",
    options: ["on average over repeated experiments, about 5% or fewer of such rejections are expected to be false", "exactly one of the 20 is false", "each rejected hypothesis is true with 95% probability", "there is a 5% chance that at least one rejection is false"],
    answer: "A",
    explanation: "FDR is an expectation of the false discovery proportion, not a guarantee for a single experiment.",
  },
  {
    prompt: "If all m null hypotheses are true, controlling the FDR at alpha is equivalent to:",
    options: ["controlling power at alpha", "no control at all", "controlling the Type II error", "controlling the FWER at alpha"],
    answer: "D",
    explanation: "With all nulls true, V = R, so V/max(R,1) = 1{V >= 1} and FDR = P(V >= 1) = FWER.",
  },
];
