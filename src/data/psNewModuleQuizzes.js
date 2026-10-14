// New Probability & Statistics module quizzes (Dev 4). Answer letters rotate A/B/C.

export const PS_LG_INTRO_QUIZ = [
  {
    prompt: "The logit link is:",
    options: ["$\\ln\\frac{p}{1-p}$", "$\\ln p$", "$\\frac{p}{1-p}$"],
    answer: "A",
    explanation: "The logit is the log of the odds.",
  },
  {
    prompt: "If $\\beta_1=0.693$, the odds multiply per unit increase in $x$ by about:",
    options: ["0.5", "2", "0.693"],
    answer: "B",
    explanation: "$e^{0.693}\\approx2$.",
  },
  {
    prompt: "Why is OLS a poor choice for a 0/1 response?",
    options: ["It is too slow", "Binary data cannot be plotted", "It can predict outside $[0,1]$ and the variance is not constant"],
    answer: "C",
    explanation: "Probabilities must stay in $[0,1]$ and $\\mathrm{Var}(Y)=p(1-p)$ varies.",
  },
];

export const PS_LG_FIT_QUIZ = [
  {
    prompt: "Logistic coefficients are estimated by:",
    options: ["Maximum likelihood (iteratively)", "A closed-form least-squares formula", "The method of moments only"],
    answer: "A",
    explanation: "The likelihood has no closed-form maximizer.",
  },
  {
    prompt: "Log-likelihood contribution of an observation with $y=1$ and $p=0.8$:",
    options: ["$\\ln 0.2$", "$\\ln 0.8$", "0.8"],
    answer: "B",
    explanation: "For $y=1$ the term is $\\ln p$.",
  },
  {
    prompt: "Lower deviance (same data) means:",
    options: ["A worse fit", "Nothing", "A better fit"],
    answer: "C",
    explanation: "$D=-2\\ell$, so larger likelihood gives smaller deviance.",
  },
];

export const PS_LG_GLM_QUIZ = [
  {
    prompt: "The canonical link for Poisson regression is:",
    options: ["log", "logit", "identity"],
    answer: "A",
    explanation: "Poisson counts use $\\ln\\mu=\\eta$.",
  },
  {
    prompt: "A GLM consists of a random component, a linear predictor and:",
    options: ["A residual plot", "A link function", "A p-value"],
    answer: "B",
    explanation: "$g(\\mu)=\\eta$ connects them.",
  },
  {
    prompt: "With threshold $0.5$, logistic regression predicts class 1 when:",
    options: ["$\\beta_0+\\beta_1x<0$", "$x>0.5$", "$\\beta_0+\\beta_1x>0$"],
    answer: "C",
    explanation: "$p>0.5$ exactly when the log-odds are positive.",
  },
];

export const PS_TS_INTRO_QUIZ = [
  {
    prompt: "Weak stationarity requires:",
    options: ["Constant mean and autocovariance depending only on the lag", "A visible trend", "Increasing variance"],
    answer: "A",
    explanation: "This is the definition.",
  },
  {
    prompt: "The ACF at lag 0 equals:",
    options: ["0", "1", "The variance"],
    answer: "B",
    explanation: "$\\rho_0=\\gamma_0/\\gamma_0=1$.",
  },
  {
    prompt: "The random walk $X_t=X_{t-1}+\\varepsilon_t$ is:",
    options: ["Stationary", "White noise", "Non-stationary"],
    answer: "C",
    explanation: "Its variance grows with $t$.",
  },
];

export const PS_TS_ARMA_QUIZ = [
  {
    prompt: "For AR(1) with $\\phi=0.6$, $\\rho_2$ is:",
    options: ["0.36", "0.6", "1.2"],
    answer: "A",
    explanation: "$\\rho_k=\\phi^k$, so $0.6^2=0.36$.",
  },
  {
    prompt: "The ACF of an MA($q$) process cuts off after lag:",
    options: ["1", "$q$", "Never"],
    answer: "B",
    explanation: "MA($q$) has memory of exactly $q$ shocks.",
  },
  {
    prompt: "AR(1) is stationary when:",
    options: ["$\\phi>1$", "$\\phi=0$ only", "$|\\phi|<1$"],
    answer: "C",
    explanation: "Roots must lie outside the unit circle.",
  },
];

export const PS_TS_ARIMA_QUIZ = [
  {
    prompt: "In ARIMA(1,1,0), $d=1$ means:",
    options: ["The series is differenced once", "There is one MA term", "There is one AR term"],
    answer: "A",
    explanation: "$d$ counts differences.",
  },
  {
    prompt: "A PACF that cuts off after lag $p$ suggests:",
    options: ["MA($p$)", "AR($p$)", "White noise"],
    answer: "B",
    explanation: "PACF identifies the AR order.",
  },
  {
    prompt: "Residuals of a good fitted model should resemble:",
    options: ["A trend", "A seasonal wave", "White noise"],
    answer: "C",
    explanation: "No structure should remain.",
  },
];

export const PS_MC_INTRO_QUIZ = [
  {
    prompt: "Monte Carlo standard error shrinks like:",
    options: ["$1/\\sqrt n$", "$1/n$", "$1/n^2$"],
    answer: "A",
    explanation: "Error is $\\sigma/\\sqrt n$.",
  },
  {
    prompt: "To halve the standard error you need how many times more samples?",
    options: ["2", "4", "$\\sqrt2$"],
    answer: "B",
    explanation: "$\\sqrt{n}$ must double, so $n$ quadruples.",
  },
  {
    prompt: "The estimate of $\\pi$ from the quarter-circle method is:",
    options: ["The fraction inside", "$2\\times$ fraction inside", "$4\\times$ fraction inside"],
    answer: "C",
    explanation: "The fraction estimates $\\pi/4$.",
  },
];

export const PS_MC_SIM_QUIZ = [
  {
    prompt: "Averaging simulated values converges because of:",
    options: ["The law of large numbers", "Bayes' rule", "Markov's inequality"],
    answer: "A",
    explanation: "LLN gives $\\hat\\theta\\to\\theta$.",
  },
  {
    prompt: "A 95% Monte Carlo interval is:",
    options: ["$\\hat\\theta\\pm s$", "$\\hat\\theta\\pm1.96\\,s/\\sqrt n$", "$\\hat\\theta\\pm n$"],
    answer: "B",
    explanation: "Normal approximation to the mean.",
  },
  {
    prompt: "Antithetic variates aim to:",
    options: ["Increase variance", "Speed up the random number generator", "Reduce variance using negatively correlated pairs"],
    answer: "C",
    explanation: "Negative correlation cancels noise.",
  },
];

export const PS_MC_VARIATE_QUIZ = [
  {
    prompt: "If $U\\sim U(0,1)$, the variable $F^{-1}(U)$ has cdf:",
    options: ["$F$", "$U$", "$1-F$"],
    answer: "A",
    explanation: "This is the inverse transform theorem.",
  },
  {
    prompt: "Exponential($\\lambda$) via inverse transform:",
    options: ["$X=\\lambda\\ln U$", "$X=-\\ln(1-U)/\\lambda$", "$X=e^{-U}$"],
    answer: "B",
    explanation: "Solve $1-e^{-\\lambda x}=U$.",
  },
  {
    prompt: "With $f\\le c\\,g$, the acceptance probability is:",
    options: ["$c$", "$c^2$", "$1/c$"],
    answer: "C",
    explanation: "The envelope has total mass $c$.",
  },
];

export const PS_BOOT_INTRO_QUIZ = [
  {
    prompt: "Bootstrap resampling is done:",
    options: ["With replacement", "Without replacement", "Only once"],
    answer: "A",
    explanation: "This gives variability between resamples.",
  },
  {
    prompt: "Each bootstrap sample has size:",
    options: ["$n/2$", "$n$, same as the data", "$B$"],
    answer: "B",
    explanation: "The resample mimics the original sample.",
  },
  {
    prompt: "The bootstrap approximates the sampling distribution of $\\hat\\theta$ by:",
    options: ["A normal curve always", "A uniform law", "The distribution of the $\\hat\\theta^*_b$"],
    answer: "C",
    explanation: "Empirical distribution of replicates.",
  },
];

export const PS_BOOT_METHOD_QUIZ = [
  {
    prompt: "The bootstrap standard error is:",
    options: ["The standard deviation of the replicates", "The mean of the replicates", "The range of the replicates"],
    answer: "A",
    explanation: "It measures spread of $\\hat\\theta^*$.",
  },
  {
    prompt: "Bootstrap estimate of bias:",
    options: ["$\\hat\\theta-\\bar\\theta^*$", "$\\bar\\theta^*-\\hat\\theta$", "$\\bar\\theta^*$ alone"],
    answer: "B",
    explanation: "Bias is $E[\\hat\\theta]-\\theta$, estimated by the mean of replicates minus $\\hat\\theta$.",
  },
  {
    prompt: "The jackknife omits:",
    options: ["Half the data", "Nothing", "One observation at a time"],
    answer: "C",
    explanation: "Leave-one-out pseudo-samples.",
  },
];

export const PS_BOOT_CI_QUIZ = [
  {
    prompt: "A 95% percentile bootstrap interval uses:",
    options: ["The 2.5th and 97.5th percentiles of the replicates", "The mean plus or minus 1", "The minimum and maximum"],
    answer: "A",
    explanation: "Central 95% of replicates.",
  },
  {
    prompt: "The bootstrap works poorly for:",
    options: ["The sample mean", "The sample maximum", "The sample median"],
    answer: "B",
    explanation: "Extremes depend on the tail, which resampling cannot invent.",
  },
  {
    prompt: "Increasing $B$ mainly reduces:",
    options: ["The sampling error from finite $n$", "The bias of the data", "Simulation error of the bootstrap"],
    answer: "C",
    explanation: "Only $n$ controls sampling error.",
  },
];

export const PS_OS_INTRO_QUIZ = [
  {
    prompt: "For $n$ i.i.d. variables, $P(X_{(n)}\\le x)$ is:",
    options: ["$F(x)^n$", "$1-(1-F(x))^n$", "$nF(x)$"],
    answer: "A",
    explanation: "All $n$ values must be at most $x$.",
  },
  {
    prompt: "For $n$ i.i.d. $U(0,1)$, $P(X_{(1)}>0.5)$ is:",
    options: ["0.5", "$0.5^n$", "$1-0.5^n$"],
    answer: "B",
    explanation: "All $n$ values exceed $0.5$.",
  },
  {
    prompt: "$X_{(1)}$ denotes the:",
    options: ["Maximum", "Median", "Minimum"],
    answer: "C",
    explanation: "The smallest ordered value.",
  },
];

export const PS_OS_DIST_QUIZ = [
  {
    prompt: "For $U(0,1)$ data, $E[X_{(k)}]$ is:",
    options: ["$k/(n+1)$", "$k/n$", "$1/k$"],
    answer: "A",
    explanation: "Beta($k,n-k+1$) mean.",
  },
  {
    prompt: "The pdf of the maximum of $n$ i.i.d. $U(0,1)$ values is:",
    options: ["$nx$", "$nx^{n-1}$", "$x^n$"],
    answer: "B",
    explanation: "Differentiate $x^n$.",
  },
  {
    prompt: "For uniform data, $X_{(k)}$ is distributed:",
    options: ["Beta($n$, $k$)", "Normal", "Beta($k$, $n-k+1$)"],
    answer: "C",
    explanation: "Standard uniform order-statistic result.",
  },
];

export const PS_OS_EXTREME_QUIZ = [
  {
    prompt: "Limits of normalised block maxima belong to:",
    options: ["The GEV family", "The normal family only", "The Poisson family"],
    answer: "A",
    explanation: "Fisher-Tippett-Gnedenko.",
  },
  {
    prompt: "For Exponential(1) data, $X_{(n)}-\\ln n$ converges to:",
    options: ["Normal", "Gumbel", "Uniform"],
    answer: "B",
    explanation: "Limit cdf is $e^{-e^{-x}}$.",
  },
  {
    prompt: "A 100-year return level has annual exceedance probability:",
    options: ["0.1", "100", "0.01"],
    answer: "C",
    explanation: "$T=1/p$.",
  },
];

export const PS_Q_INTRO_QUIZ = [
  {
    prompt: "An M/M/1 queue is stable if and only if:",
    options: ["$\\lambda<\\mu$", "$\\lambda>\\mu$", "$\\lambda=2\\mu$"],
    answer: "A",
    explanation: "Arrivals must be slower than service.",
  },
  {
    prompt: "Little's law states:",
    options: ["$L=W/\\lambda$", "$L=\\lambda W$", "$W=\\lambda L$"],
    answer: "B",
    explanation: "Mean count = rate x mean time.",
  },
  {
    prompt: "In M/M/1, the first M means:",
    options: ["A single server", "First-in-first-out", "Poisson (Markovian) arrivals"],
    answer: "C",
    explanation: "Kendall notation: arrival process.",
  },
];

export const PS_Q_MM1_QUIZ = [
  {
    prompt: "M/M/1 with $\\lambda=2$, $\\mu=4$: the mean number in system $L$ is:",
    options: ["1", "0.5", "2"],
    answer: "A",
    explanation: "$\\rho=0.5$, $L=0.5/0.5=1$.",
  },
  {
    prompt: "For the same queue, the mean time in system $W$ is:",
    options: ["2", "0.5", "1"],
    answer: "B",
    explanation: "$1/(\\mu-\\lambda)=1/2$.",
  },
  {
    prompt: "In M/M/1, $P(N=0)$ equals:",
    options: ["$\\rho$", "$\\rho^2$", "$1-\\rho$"],
    answer: "C",
    explanation: "The server is idle with probability $1-\\rho$.",
  },
];

export const PS_Q_MMC_QUIZ = [
  {
    prompt: "The M/M/$c$ stability condition is:",
    options: ["$\\lambda<c\\mu$", "$\\lambda<\\mu$", "$c<1$"],
    answer: "A",
    explanation: "Total service capacity must exceed arrivals.",
  },
  {
    prompt: "With $\\lambda=6$, $\\mu=4$, $c=2$, the utilisation $\\rho$ is:",
    options: ["1.5", "0.75", "0.5"],
    answer: "B",
    explanation: "$6/(2\\cdot4)=0.75$.",
  },
  {
    prompt: "The Erlang C formula gives:",
    options: ["The mean service time", "The number of servers", "The probability an arrival must wait"],
    answer: "C",
    explanation: "$P_W$ is the waiting probability.",
  },
];
