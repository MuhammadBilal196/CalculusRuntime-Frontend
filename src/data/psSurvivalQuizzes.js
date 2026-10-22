// Module B: Survival and Reliability. Time unit stated in each question; + marks a right-censored time.


export const PS_R2_KAPLAN_MEIER_QUIZ = [
  // ---------- Easy ----------
  {
    prompt: "A subject is still alive and under observation when the study ends at 24 months. Their recorded time is:",
    options: ["an event time of 24 months", "a right-censored time of 24 months", "a missing value that should be deleted", "an observation with survival probability 0"],
    answer: "B",
    explanation: "We only know the true survival time exceeds 24 months, so the observation is right-censored, not an event.",
  },
  {
    prompt: "Right censoring means that:",
    options: ["we only know the event time is larger than the last observed time", "the event happened before observation began", "the event time is known exactly", "the subject was removed because the event occurred"],
    answer: "A",
    explanation: "A right-censored subject is event-free when last seen; the true event time lies to the right of that time.",
  },
  {
    prompt: "The Kaplan-Meier estimator is an estimator of:",
    options: ["the hazard rate only", "the cdf of the censoring time", "the mean of T directly", "the survival function S(t) = P(T > t)"],
    answer: "D",
    explanation: "Kaplan-Meier is a nonparametric estimator of S(t) that uses both events and censored observations.",
  },
  {
    prompt: "At time t, the risk set contains the subjects who:",
    options: ["have already had the event", "were censored before t", "are still event-free and under observation just before t", "will be censored after t only"],
    answer: "C",
    explanation: "The risk set R(t) = {i : Y_i >= t}: subjects who could still have an event at t.",
  },
  {
    prompt: "The Kaplan-Meier curve is:",
    options: ["a continuous increasing curve", "a right-continuous, non-increasing step function that drops only at event times", "linear between event times", "a curve that always reaches 0"],
    answer: "B",
    explanation: "The estimate is constant between event times, jumps down at events, and need not reach 0 if the largest time is censored.",
  },
  {
    prompt: "Ten subjects are at risk and 2 of them have the event at time t. The Kaplan-Meier factor at t is:",
    options: ["0.8", "0.2", "0.5", "1.2"],
    answer: "A",
    explanation: "The factor is 1 - d/n = 1 - 2/10 = 0.8.",
  },
  // ---------- Medium ----------
  {
    prompt: "Observed times (+ = censored): 2, 3+, 5, 8. The Kaplan-Meier estimate S(5) equals:",
    options: ["0.25", "0.5", "0.5625", "0.375"],
    answer: "D",
    explanation: "At 2: n=4, d=1 gives 3/4. The censored 3+ leaves the risk set. At 5: n=2, d=1 gives 1/2. So S(5) = 0.75 x 0.5 = 0.375.",
  },
  {
    prompt: "The Kaplan-Meier median survival time is defined as:",
    options: ["the median of all observed times, censored or not", "the average of the event times", "the smallest t with S_hat(t) <= 0.5", "the time at which S_hat(t) = 1"],
    answer: "C",
    explanation: "Median survival is read from the estimated survival curve, not from the raw observed times.",
  },
  {
    prompt: "If the sickest patients tend to drop out (be censored) early, Kaplan-Meier survival estimates tend to be:",
    options: ["too low (biased downward)", "too high (biased upward)", "unbiased", "undefined"],
    answer: "B",
    explanation: "Removing high-risk subjects leaves healthier subjects at risk, which makes survival look better than it is. This is informative censoring.",
  },
  {
    prompt: "Compared with treating every censored time as an event, the Kaplan-Meier estimate generally gives:",
    options: ["higher survival estimates", "lower survival estimates", "identical estimates", "estimates that are not defined"],
    answer: "A",
    explanation: "Counting a censored subject as a failure understates survival. Kaplan-Meier keeps them at risk until they are censored.",
  },
  {
    prompt: "When an event and a censoring occur at the same time, the standard convention treats the censored subject as:",
    options: ["removed before the event", "an event", "a duplicate to be dropped", "still in the risk set at that time"],
    answer: "D",
    explanation: "Censored subjects at time t are assumed to have survived at least to t, so they count in n_j.",
  },
  {
    prompt: "Observed times (+ = censored): 3, 6+, 6, 9. The risk set size n_j at t = 6 is:",
    options: ["2", "4", "3", "1"],
    answer: "C",
    explanation: "Subjects with observed time >= 6 are 6+, 6 and 9, so n = 3. The censored 6+ is still at risk at 6.",
  },
  {
    prompt: "Which assumption is essential for the Kaplan-Meier estimator to be valid?",
    options: ["event times are normally distributed", "censoring is non-informative (independent of the event time)", "there are no tied times", "the hazard is constant over time"],
    answer: "B",
    explanation: "Kaplan-Meier is nonparametric but still requires that censoring carries no information about the event time.",
  },
  {
    prompt: "For t smaller than the first event time, the Kaplan-Meier estimate S_hat(t) equals:",
    options: ["1", "0", "0.5", "the number at risk"],
    answer: "A",
    explanation: "The empty product over event times up to t equals 1.",
  },
  // ---------- Hard ----------
  {
    prompt: "Observed times (+ = censored): 2, 2, 4+, 5, 5, 7+. The Kaplan-Meier estimate S(5) equals:",
    options: ["1/9 (about 0.111)", "1/3 (about 0.333)", "4/9 (about 0.444)", "2/9 (about 0.222)"],
    answer: "D",
    explanation: "At 2: n=6, d=2 gives 4/6 = 2/3. The censored 4+ leaves. At 5: n=3 (5, 5, 7+), d=2 gives 1/3. So S(5) = 2/3 x 1/3 = 2/9.",
  },
  {
    prompt: "The largest observed time in a sample is censored. Then the Kaplan-Meier curve:",
    options: ["drops to 0 at that time", "is undefined after the last event", "stays at its last positive value, so the mean survival time cannot be estimated without restricting the time range", "rises back toward 1"],
    answer: "C",
    explanation: "Without a final event the curve plateaus above 0, so the area under it (the mean) is not determined beyond the last observation.",
  },
  {
    prompt: "Observed times (+ = censored): 3, 5+, 8+, 10+. The Kaplan-Meier median survival time is:",
    options: ["3", "not reached, because S_hat never falls to 0.5", "5", "10"],
    answer: "B",
    explanation: "S(3) = 3/4 and there are no further events, so the curve stays at 0.75 and never crosses 0.5.",
  },
  {
    prompt: "Greenwood's formula for the variance of the Kaplan-Meier estimator is:",
    options: ["S_hat(t)^2 times the sum of d_j / (n_j (n_j - d_j))", "S_hat(t) times the sum of d_j / n_j", "the sum of d_j / n_j^2", "S_hat(t)(1 - S_hat(t)) / n"],
    answer: "A",
    explanation: "Greenwood: Var(S_hat(t)) = S_hat(t)^2 x sum over t_j <= t of d_j / (n_j (n_j - d_j)).",
  },
  {
    prompt: "With no censoring at all, the Kaplan-Meier estimator reduces to:",
    options: ["the Nelson-Aalen cumulative hazard", "a constant hazard estimate", "the sample mean of T", "the empirical survival proportion (number with T > t) / n"],
    answer: "D",
    explanation: "Without censoring the product telescopes to (n - number of events up to t) / n.",
  },
  {
    prompt: "A subject is censored at time 8. In the Kaplan-Meier calculation this subject:",
    options: ["counts as an event at time 8", "is removed from every risk set", "is in the risk set for event times up to 8 and is never counted as an event", "stays in the risk set at all later times"],
    answer: "C",
    explanation: "A censored subject contributes information while under observation, then leaves the risk set without causing a drop.",
  },
];


export const PS_R2_HAZARD_SURVIVAL_QUIZ = [
  // ---------- Easy ----------
  {
    prompt: "The survival function of a lifetime T is S(t) =",
    options: ["P(T <= t)", "P(T > t)", "f(t) / h(t) evaluated at 0", "P(T = t)"],
    answer: "B",
    explanation: "S(t) = P(T > t) = 1 - F(t) is the probability of surviving beyond time t.",
  },
  {
    prompt: "The hazard function h(t) is best described as:",
    options: ["the instantaneous failure rate at t among units that have survived to t", "the probability of failing exactly at t", "the cumulative probability of failure up to t", "the mean time to failure"],
    answer: "A",
    explanation: "h(t) = lim P(t <= T < t + dt | T >= t) / dt is a conditional rate, not an unconditional probability.",
  },
  {
    prompt: "An exponential lifetime has a hazard function that is:",
    options: ["increasing linearly", "decreasing over time", "equal to zero", "constant, equal to lambda"],
    answer: "D",
    explanation: "For the exponential distribution f/S = lambda e^(-lambda t) / e^(-lambda t) = lambda.",
  },
  {
    prompt: "An exponential lifetime with rate 0.5 per year has mean:",
    options: ["0.5 years", "1 year", "2 years", "0.25 years"],
    answer: "C",
    explanation: "The mean of an exponential distribution is 1/lambda = 1/0.5 = 2.",
  },
  {
    prompt: "A Weibull distribution with shape k = 1 reduces to:",
    options: ["the normal distribution", "the exponential distribution", "the uniform distribution", "the Poisson distribution"],
    answer: "B",
    explanation: "With k = 1 the Weibull hazard (k/eta)(t/eta)^(k-1) is the constant 1/eta.",
  },
  {
    prompt: "For a Weibull distribution, a shape k > 1 means the hazard is:",
    options: ["increasing over time (wear-out)", "decreasing over time", "constant", "undefined"],
    answer: "A",
    explanation: "The hazard is proportional to t^(k-1), which grows when k > 1.",
  },
  // ---------- Medium ----------
  {
    prompt: "The survival function can be written S(t) = exp(-H(t)), where H(t) is:",
    options: ["the density f(t)", "the mean residual life", "the median", "the cumulative hazard, the integral of h(u) from 0 to t"],
    answer: "D",
    explanation: "H(t) = integral of h(u) du = -ln S(t), so S(t) = exp(-H(t)).",
  },
  {
    prompt: "The density, survival function and hazard are related by:",
    options: ["f(t) = h(t) / S(t)", "f(t) = S(t) / h(t)", "f(t) = h(t) S(t)", "f(t) = h(t) + S(t)"],
    answer: "C",
    explanation: "By definition h = f/S, so f = h S.",
  },
  {
    prompt: "An exponential lifetime has rate 0.1 per day. The probability of surviving beyond 10 days is about:",
    options: ["0.905", "0.368", "0.100", "0.632"],
    answer: "B",
    explanation: "S(10) = exp(-0.1 x 10) = exp(-1) = 0.368.",
  },
  {
    prompt: "An exponential lifetime has rate 0.1 per day. Its median is about:",
    options: ["6.93 days", "10 days", "5 days", "14.4 days"],
    answer: "A",
    explanation: "Median = ln 2 / lambda = 0.693 / 0.1 = 6.93 days. The mean is 10 days.",
  },
  {
    prompt: "For an exponential lifetime, the memoryless property says P(T > s + t | T > s) equals:",
    options: ["P(T > s)", "1 - P(T > t)", "P(T > s + t)", "P(T > t)"],
    answer: "D",
    explanation: "Given survival to s, the remaining lifetime has the same distribution as a new unit.",
  },
  {
    prompt: "A Weibull lifetime has scale eta = 100 and shape k = 2. The survival probability S(100) is about:",
    options: ["0.5", "0.135", "0.368", "0.632"],
    answer: "C",
    explanation: "S(t) = exp(-(t/eta)^k) = exp(-1) = 0.368.",
  },
  {
    prompt: "A system of independent components in series has reliability equal to:",
    options: ["1 minus the product of the component failure probabilities", "the product of the component reliabilities", "the sum of the component reliabilities", "the smallest component reliability"],
    answer: "B",
    explanation: "A series system works only if every component works: R = R_1 R_2 ... R_m for independent components.",
  },
  {
    prompt: "A bathtub-shaped hazard cannot be described by a single Weibull distribution because:",
    options: ["for fixed shape the Weibull hazard is monotone (decreasing, constant or increasing)", "the Weibull hazard is always constant", "the Weibull distribution has no survival function", "the Weibull hazard is always above 1"],
    answer: "A",
    explanation: "A bathtub hazard falls, flattens and then rises, which needs more than one phase.",
  },
  // ---------- Hard ----------
  {
    prompt: "A Weibull lifetime has scale eta = 1000 hours and shape k = 2. The hazard at t = 500 hours is:",
    options: ["0.002 per hour", "0.0005 per hour", "0.25 per hour", "0.001 per hour"],
    answer: "D",
    explanation: "h(t) = (k/eta)(t/eta)^(k-1) = (2/1000)(0.5) = 0.001.",
  },
  {
    prompt: "A lifetime has hazard h(t) = 0.2 t for t >= 0. Its survival function is:",
    options: ["S(t) = exp(-0.2 t)", "S(t) = 1 - 0.1 t^2", "S(t) = exp(-0.1 t^2)", "S(t) = 0.2 exp(-t)"],
    answer: "C",
    explanation: "H(t) = integral of 0.2 u du = 0.1 t^2, so S(t) = exp(-0.1 t^2).",
  },
  {
    prompt: "Two independent exponential components with rates 0.002 and 0.003 per hour are in series. The system mean time to failure is:",
    options: ["500 hours", "200 hours", "333 hours", "833 hours"],
    answer: "B",
    explanation: "Hazards add in series: 0.005 per hour, so the system is exponential with mean 1/0.005 = 200.",
  },
  {
    prompt: "Two independent exponential components, each with rate 0.01 per hour, are in parallel (the system works if at least one works). The system reliability at 100 hours is about:",
    options: ["0.600", "0.368", "0.135", "0.865"],
    answer: "A",
    explanation: "R = 1 - (1 - e^-1)^2 = 1 - 0.632^2 = 0.600.",
  },
  {
    prompt: "A Weibull model with shape 0.5 has hazard above 1 at very small t. This means:",
    options: ["the model is invalid because probabilities exceed 1", "the survival function exceeds 1", "the shape must be changed to at least 1", "nothing is wrong: the hazard is a rate per unit time, not a probability"],
    answer: "D",
    explanation: "h(t) is a conditional rate and can exceed 1 depending on the time unit. Only S(t) and F(t) are probabilities.",
  },
  {
    prompt: "An exponential component with rate 0.01 per hour has already survived 100 hours. Its expected remaining life is:",
    options: ["0 hours", "50 hours", "100 hours", "depends on its age and is smaller than 100 hours"],
    answer: "C",
    explanation: "Memorylessness: expected remaining life is 1/lambda = 100 hours at every age.",
  },
];
