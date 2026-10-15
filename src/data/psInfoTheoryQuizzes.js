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