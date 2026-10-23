// Module A: Information Theory. Convention: log base 2 (bits) unless stated; 0 log 0 = 0.

export const PS_R2_ENTROPY_MI_QUIZ = [
    // ---------- Easy (6) ----------
    {
      prompt: "A fair coin has entropy (log base 2) equal to:",
      options: ["0.5 bits", "2 bits", "0 bits", "1 bit"],
      answer: "D",
      explanation: "H = -(1/2)log2(1/2) - (1/2)log2(1/2) = 1 bit.",
    },
    {
      prompt: "Using the natural logarithm in the entropy formula gives units of:",
      options: ["nats", "bits", "decibels", "joules"],
      answer: "A",
      explanation: "Base 2 gives bits, base e gives nats.",
    },
    {
      prompt: "In entropy calculations, the term 0 log 0 is taken to be:",
      options: ["1", "undefined (the formula fails)", "0", "minus infinity"],
      answer: "C",
      explanation: "Since p log p tends to 0 as p tends to 0, the convention 0 log 0 = 0 is consistent and continuous.",
    },
    {
      prompt: "The entropy of a random variable that takes one value with probability 1 is:",
      options: ["log2 n", "1 bit", "infinite", "0"],
      answer: "D",
      explanation: "No uncertainty remains: H = -1*log2(1) = 0.",
    },
    {
      prompt: "If X and Y are independent, then I(X;Y) equals:",
      options: ["0", "H(X)", "H(X) + H(Y)", "1"],
      answer: "A",
      explanation: "Independence means p(x,y) = p(x)p(y), so the log-ratio inside I(X;Y) is 0 everywhere.",
    },
    {
      prompt: "Among all distributions on n outcomes, entropy is maximized by:",
      options: [
        "a point mass",
        "the uniform distribution",
        "any symmetric distribution",
        "a geometric distribution",
      ],
      answer: "B",
      explanation: "The maximum value is log n, attained only by the uniform distribution.",
    },
  
    // ---------- Medium (8) ----------
    {
      prompt: "X has probabilities (1/2, 1/4, 1/4). Its entropy in bits is:",
      options: ["1", "1.5", "2", "1.75"],
      answer: "B",
      explanation: "H = 0.5*1 + 0.25*2 + 0.25*2 = 1.5 bits.",
    },
    {
      prompt: "X has probabilities (1/2, 1/4, 1/8, 1/8). Its entropy in bits is:",
      options: ["1.25", "1.5", "1.75", "2"],
      answer: "C",
      explanation: "H = 0.5*1 + 0.25*2 + 0.125*3 + 0.125*3 = 1.75 bits.",
    },
    {
      prompt: "The chain rule for joint entropy states that H(X,Y) equals:",
      options: ["H(X) - H(Y|X)", "H(X) + H(Y)", "H(X|Y) + H(Y|X)", "H(X) + H(Y|X)"],
      answer: "D",
      explanation: "H(X,Y) = H(X) + H(Y|X). It equals H(X) + H(Y) only under independence.",
    },
    {
      prompt: "Mutual information can be written as:",
      options: ["H(X) - H(X|Y)", "H(X) + H(X|Y)", "H(X|Y) - H(X)", "H(X) * H(Y)"],
      answer: "A",
      explanation: "I(X;Y) = H(X) - H(X|Y): the reduction in uncertainty about X after observing Y.",
    },
    {
      prompt: "If Y = X exactly, then I(X;Y) equals:",
      options: ["0", "H(X)", "2H(X)", "1 bit always"],
      answer: "B",
      explanation: "H(X|Y) = 0 because Y determines X, so I = H(X) - 0 = H(X).",
    },
    {
      prompt: "Which statement is always true for discrete X and Y?",
      options: ["H(X|Y) <= H(X)", "H(X|Y) >= H(X)", "H(X|Y) = H(X)", "H(X|Y) <= 0"],
      answer: "A",
      explanation: "Conditioning on average cannot increase entropy; this is equivalent to I(X;Y) >= 0.",
    },
    {
      prompt: "X is a fair bit and Y = X. What is H(X,Y) in bits?",
      options: ["0", "2", "1", "1/2"],
      answer: "C",
      explanation: "H(X,Y) = H(X) + H(Y|X) = 1 + 0 = 1 bit, not 2, because Y adds no new uncertainty.",
    },
    {
      prompt: "Which identity holds for mutual information?",
      options: [
        "I(X;Y) = -I(Y;X)",
        "I(X;Y) = H(X) - H(Y)",
        "I(X;Y) = I(Y;X) only if X = Y",
        "I(X;Y) = I(Y;X)",
      ],
      answer: "D",
      explanation: "I(X;Y) = H(X) + H(Y) - H(X,Y), which is symmetric in X and Y.",
    },
  
    // ---------- Hard (6) ----------
    {
      prompt: "A Bernoulli variable has P(1) = 0.25. Its entropy in bits is closest to:",
      options: ["0.500", "0.811", "0.919", "1.000"],
      answer: "B",
      explanation: "H = 0.25*2 + 0.75*log2(4/3) = 0.5 + 0.75*0.415 = 0.811 bits. (0.919 is H(1/3).)",
    },
    {
      prompt: "X is any bit, Z is a fair bit independent of X, and Y = X XOR Z. Then I(X;Y) equals:",
      options: ["H(X)", "1 bit", "0", "H(Z) - H(X)"],
      answer: "C",
      explanation: "Given X, Y is a fair bit whatever X is, so Y is independent of X and I(X;Y) = 0.",
    },
    {
      prompt: "If X -> Y -> Z is a Markov chain, the data-processing inequality says:",
      options: [
        "I(X;Z) >= I(X;Y)",
        "I(X;Z) <= I(X;Y)",
        "I(X;Z) = I(X;Y) + I(Y;Z)",
        "I(X;Z) = 0 always",
      ],
      answer: "B",
      explanation: "Processing Y into Z cannot create information about X.",
    },
    {
      prompt: "X is a fair bit sent through a channel that flips it with probability 0.25 to give Y. I(X;Y) in bits is about:",
      options: ["0.189", "0.811", "0.500", "0.250"],
      answer: "A",
      explanation: "Y is uniform, so H(Y) = 1 and H(Y|X) = H(0.25) = 0.811. I = 1 - 0.811 = 0.189 bits.",
    },
    {
      prompt: "A uniform distribution on 8 outcomes has entropy 3 bits. In nats this is about:",
      options: ["3.00", "1.44", "2.08", "4.33"],
      answer: "C",
      explanation: "ln 8 = 3 ln 2 = 2.079 nats. Converting bits to nats multiplies by ln 2.",
    },
    {
      prompt: "For discrete X and Y, I(X;Y) = 0 holds if and only if:",
      options: ["Cov(X,Y) = 0", "H(X) = H(Y)", "X = Y", "X and Y are independent"],
      answer: "D",
      explanation: "Zero mutual information is equivalent to independence. Zero covariance is weaker and can hold for dependent variables.",
    },
  ];

export const PS_R2_CROSS_ENTROPY_KL_QUIZ = [
    // ---------- Easy (6) ----------
    {
      prompt: "D_KL(P || Q) = 0 exactly when:",
      options: [
        "P and Q have the same mean",
        "P and Q have the same entropy",
        "P and Q are independent",
        "P = Q",
      ],
      answer: "D",
      explanation: "Gibbs' inequality: D_KL(P||Q) >= 0, with equality if and only if P and Q are the same distribution.",
    },
    {
      prompt: "For discrete distributions, D_KL(P || Q) is always:",
      options: [
        "negative when P != Q",
        "at most 1",
        "nonnegative",
        "symmetric in P and Q",
      ],
      answer: "C",
      explanation: "Nonnegativity follows from the concavity of the logarithm (Jensen's inequality).",
    },
    {
      prompt: "The cross-entropy of P relative to Q is:",
      options: [
        "sum of p log(p/q)",
        "minus the sum of p log q",
        "minus the sum of q log p",
        "sum of p log q",
      ],
      answer: "B",
      explanation: "H(P,Q) = -sum_x p(x) log q(x): the expected code length (or log loss) when truth is P but we use Q.",
    },
    {
      prompt: "In general, D_KL(P || Q) and D_KL(Q || P) are:",
      options: [
        "always equal",
        "always both zero",
        "not equal, because KL divergence is asymmetric",
        "negatives of each other",
      ],
      answer: "C",
      explanation: "KL divergence is not symmetric. The order of the arguments matters.",
    },
    {
      prompt: "The cross-entropy of P with itself, H(P,P), equals:",
      options: ["H(P)", "0", "1", "log n"],
      answer: "A",
      explanation: "H(P,P) = -sum p log p = H(P). Equivalently H(P,P) = H(P) + D_KL(P||P) = H(P) + 0.",
    },
    {
      prompt: "If q(x) = 0 for some x with p(x) > 0, then D_KL(P || Q) is:",
      options: ["0", "1 bit", "negative", "+infinity"],
      answer: "D",
      explanation: "The term p(x) log(p(x)/0) diverges. This is the support-mismatch case: Q must put mass wherever P does.",
    },
  
    // ---------- Medium (8) ----------
    {
      prompt: "P = (1/2, 1/2) and Q = (1/4, 3/4). D_KL(P || Q) in bits is about:",
      options: ["0.125", "0.208", "0.311", "0.500"],
      answer: "B",
      explanation: "0.5*log2(0.5/0.25) + 0.5*log2(0.5/0.75) = 0.5*1 + 0.5*(-0.585) = 0.208 bits.",
    },
    {
      prompt: "For the same P = (1/2, 1/2) and Q = (1/4, 3/4), the cross-entropy H(P,Q) in bits is about:",
      options: ["1.208", "1.000", "0.208", "1.500"],
      answer: "A",
      explanation: "H(P,Q) = -0.5*log2(0.25) - 0.5*log2(0.75) = 1 + 0.208 = 1.208 bits, which equals H(P) + D_KL(P||Q).",
    },
    {
      prompt: "Which identity relates cross-entropy, entropy and KL divergence?",
      options: [
        "H(P,Q) = H(P) - D_KL(P||Q)",
        "H(P,Q) = H(Q) + D_KL(P||Q)",
        "H(P,Q) = H(P) + D_KL(P||Q)",
        "H(P,Q) = H(P) * D_KL(P||Q)",
      ],
      answer: "C",
      explanation: "Expanding -sum p log q = -sum p log p + sum p log(p/q) gives H(P,Q) = H(P) + D_KL(P||Q).",
    },
    {
      prompt: "Q is uniform on n outcomes. Then D_KL(P || Q) equals:",
      options: ["H(P) - log n", "log n - H(P)", "log n + H(P)", "n * H(P)"],
      answer: "B",
      explanation: "sum p log(p * n) = log n + sum p log p = log n - H(P). It is zero only when P is also uniform.",
    },
    {
      prompt: "Labels are drawn from P and a model predicts Q. The expected log loss is minimized over Q when:",
      options: [
        "Q is uniform",
        "Q is a point mass on the most likely outcome",
        "Q = P, and the minimum value is H(P)",
        "Q = P, and the minimum value is 0",
      ],
      answer: "C",
      explanation: "Expected log loss is H(P,Q) = H(P) + D_KL(P||Q), which is smallest when the KL term is 0. The floor is H(P), not 0.",
    },
    {
      prompt: "The true label is one-hot P = (1, 0) and the model predicts Q = (0.8, 0.2). The cross-entropy in bits is about:",
      options: ["0.200", "0.322", "0.800", "2.322"],
      answer: "B",
      explanation: "Only the true class contributes: -log2(0.8) = 0.322 bits. (2.322 would be -log2(0.2), the loss if the label were class 2.)",
    },
    {
      prompt: "P = (1, 0) and Q = (1/2, 1/2). D_KL(P || Q) in bits is:",
      options: ["0", "infinity", "1", "0.5"],
      answer: "C",
      explanation: "1*log2(1/0.5) + 0*log(0/0.5) = 1 + 0 = 1 bit, using 0 log 0 = 0. (D_KL(Q||P) would be infinite.)",
    },
    {
      prompt: "KL divergence is not a metric because:",
      options: [
        "it can be negative",
        "it is zero for some P != Q",
        "it is undefined for discrete distributions",
        "it is not symmetric, and the triangle inequality can fail",
      ],
      answer: "D",
      explanation: "A metric must be symmetric and satisfy the triangle inequality. KL fails both in general, though it is nonnegative and vanishes only at P = Q.",
    },
  
    // ---------- Hard (6) ----------
    {
      prompt: "Minimizing the cross-entropy H(P_hat, Q_theta) between the empirical distribution P_hat and a model Q_theta over theta is equivalent to:",
      options: [
        "maximizing the entropy of Q_theta",
        "maximizing the likelihood of the data under Q_theta",
        "minimizing the variance of Q_theta",
        "matching the means of P_hat and Q_theta",
      ],
      answer: "B",
      explanation: "H(P_hat, Q_theta) is the negative average log-likelihood, so minimizing it is maximum likelihood estimation.",
    },
    {
      prompt: "P = (1/2, 1/2, 0) and Q is uniform on three outcomes. D_KL(P || Q) in bits is about:",
      options: ["1.585", "1.000", "0.585", "infinity"],
      answer: "C",
      explanation: "log2(3) - H(P) = 1.585 - 1 = 0.585 bits. The zero-probability outcome contributes 0 to the sum, and Q covers the support of P, so the value is finite.",
    },
    {
      prompt: "Mutual information I(X;Y) can be written as the KL divergence between:",
      options: [
        "p(x) and p(y)",
        "p(x,y) and p(x)p(y)",
        "p(x|y) and p(y|x)",
        "p(x,y) and the uniform distribution",
      ],
      answer: "B",
      explanation: "I(X;Y) = sum p(x,y) log[p(x,y) / (p(x)p(y))] = D_KL(p(x,y) || p(x)p(y)), the distance from independence.",
    },
    {
      prompt: "P = Bernoulli(0.5) and Q = Bernoulli(0.9). D_KL(P || Q) in bits is about:",
      options: ["0.531", "1.737", "0.400", "0.737"],
      answer: "D",
      explanation: "0.5*log2(0.5/0.9) + 0.5*log2(0.5/0.1) = 0.5*(-0.848) + 0.5*(2.322) = 0.737 bits. (0.531 is the reverse direction D_KL(Q||P).)",
    },
    {
      prompt: "A model's average log loss is 1.386 nats per symbol (= ln 4). In bits this is about:",
      options: ["0.693", "1.386", "2.000", "4.000"],
      answer: "C",
      explanation: "Divide by ln 2: 1.386 / 0.693 = 2.0 bits, the cross-entropy of a uniform prediction over 4 outcomes.",
    },
    {
      prompt: "P = (1/2, 1/2) and Q_eps = (eps, 1 - eps). As eps goes to 0, D_KL(P || Q_eps):",
      options: [
        "tends to +infinity",
        "tends to 0",
        "stays bounded by log 2",
        "tends to 1 bit",
      ],
      answer: "A",
      explanation: "The first term 0.5*log(0.5/eps) grows without bound, matching the infinite divergence when Q has zero mass where P does not.",
    },
  ];