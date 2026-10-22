/** Hard MCQs for the PS certificate bank (Dev4, Module A: Information Theory): 3 per topic. Mirror into the backend bank. */
export const PS_INFO_THEORY_CERT_HARD = [
  {"prompt": "X is uniform on {1, 2, 3, 4} and Y = X mod 2. The mutual information I(X;Y) in bits is:", "options": ["0", "2", "1", "0.5"], "answer": "C", "explanation": "Y is a function of X, so H(Y|X) = 0 and I = H(Y) = 1 bit (Y is a fair bit).", "topic": "Entropy and Mutual Information", "difficulty": "Hard"},
  {"prompt": "X and Y are bits with joint pmf p(0,0) = p(1,1) = 0.45 and p(0,1) = p(1,0) = 0.05. I(X;Y) in bits is about:", "options": ["0.469", "0.531", "1", "0.9"], "answer": "B", "explanation": "H(X) = 1 and H(X|Y) = H(0.9, 0.1) = 0.469, so I = 1 - 0.469 = 0.531.", "topic": "Entropy and Mutual Information", "difficulty": "Hard"},
  {"prompt": "X -> Y -> Z is a Markov chain and I(X;Y) = 0.8 bits. Which value of I(X;Z) is possible?", "options": ["0.5 bits", "1.1 bits", "1.6 bits", "2.0 bits"], "answer": "A", "explanation": "By the data-processing inequality I(X;Z) <= I(X;Y) = 0.8.", "topic": "Entropy and Mutual Information", "difficulty": "Hard"},
  {"prompt": "P = (1/2, 1/2) and Q = (1/4, 3/4). The divergence D(P||Q) in bits is about:", "options": ["0.189", "0.5", "0", "0.208"], "answer": "D", "explanation": "D = 0.5 log2(2) + 0.5 log2(2/3) = 0.5 - 0.2925 = 0.2075. Note D(Q||P) = 0.189 differs, so KL is asymmetric.", "topic": "Cross-Entropy and KL Divergence", "difficulty": "Hard"},
  {"prompt": "For P = (1/2, 1/2) and Q = (1/4, 3/4), the cross-entropy H(P,Q) in bits is about:", "options": ["1.000", "0.208", "1.208", "1.415"], "answer": "C", "explanation": "H(P,Q) = H(P) + D(P||Q) = 1 + 0.208 = 1.208.", "topic": "Cross-Entropy and KL Divergence", "difficulty": "Hard"},
  {"prompt": "If Q(x) = 0 for some x with P(x) > 0, then D(P||Q) is:", "options": ["zero", "infinite", "negative", "finite but large"], "answer": "B", "explanation": "The term P(x) log(P(x)/0) diverges. D(Q||P) can still be finite, which shows the asymmetry.", "topic": "Cross-Entropy and KL Divergence", "difficulty": "Hard"},
];

export default PS_INFO_THEORY_CERT_HARD;
