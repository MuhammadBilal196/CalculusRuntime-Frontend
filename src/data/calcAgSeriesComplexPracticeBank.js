/**
 * Developer 3: Series Solutions of ODEs, Sequences of Functions & Complex Analysis Practice Bank
 * Exactly 150 MCQs (50 Easy, 50 Medium, 50 Hard; 25 per topic) in verified range 82450-82599.
 */

export const CALC_AG_SERIES_COMPLEX_PRACTICE_BANK = [
  {
    "id": 82450,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Easy",
    "question": "What is the pointwise limit of f_n(x) = x/n on the interval [0, 5] as n → ∞?",
    "options": [
      "0",
      "x",
      "5",
      "1/n"
    ],
    "correctAnswer": 0,
    "explanation": "For any fixed x in [0, 5], lim_{n→∞} x/n = 0, so the pointwise limit is the zero function."
  },
  {
    "id": 82451,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Easy",
    "question": "If f_n(x) = x^n on [0, 1/2], does the sequence converge uniformly to 0?",
    "options": [
      "Yes, because sup |x^n - 0| = (1/2)^n → 0",
      "No, because the limit is discontinuous",
      "No, because 1/2 is not an integer",
      "Yes, but only in the L1 norm"
    ],
    "correctAnswer": 0,
    "explanation": "On [0, 1/2], the maximum of x^n occurs at x = 1/2. Since (1/2)^n → 0 as n → ∞, convergence is uniform by the supremum norm criterion."
  },
  {
    "id": 82452,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Easy",
    "question": "The sequence f_n(x) = x^n on [0, 1] fails to converge uniformly because:",
    "options": [
      "The limit function f(x) has a jump discontinuity at x = 1",
      "x^n is unbounded on [0, 1]",
      "Each function f_n is discontinuous",
      "The interval is not open"
    ],
    "correctAnswer": 0,
    "explanation": "By the Uniform Limit Theorem, the uniform limit of continuous functions must be continuous. Since f(x) = 0 for x in [0, 1) and f(1) = 1, f is discontinuous, ruling out uniform convergence."
  },
  {
    "id": 82453,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Easy",
    "question": "In the definition of uniform convergence f_n → f on set S, the threshold index N depends on:",
    "options": [
      "Only ε",
      "Both ε and x",
      "Only x",
      "Neither ε nor x"
    ],
    "correctAnswer": 0,
    "explanation": "In uniform convergence, a single integer N(ε) must work simultaneously for all x in S for a given ε > 0."
  },
  {
    "id": 82454,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Easy",
    "question": "Which norm characterizes uniform convergence on a set S?",
    "options": [
      "The supremum norm ||f||_∞ = sup_{x∈S} |f(x)|",
      "The Euclidean norm ||f||_2",
      "The taxicab norm ||f||_1",
      "The Sobolev norm H^1"
    ],
    "correctAnswer": 0,
    "explanation": "Uniform convergence f_n → f on S is mathematically identical to ||f_n - f||_∞ → 0 as n → ∞."
  },
  {
    "id": 82455,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Easy",
    "question": "What is the pointwise limit of f_n(x) = nx / (1 + nx) for x > 0?",
    "options": [
      "1",
      "0",
      "x",
      "∞"
    ],
    "correctAnswer": 0,
    "explanation": "For any fixed x > 0, nx / (1 + nx) = 1 / (1/(nx) + 1) → 1 as n → ∞."
  },
  {
    "id": 82456,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Easy",
    "question": "For the sequence f_n(x) = nx / (1 + nx) on [0, 1], what is f(0)?",
    "options": [
      "0",
      "1",
      "1/2",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "At x = 0, f_n(0) = 0 / (1 + 0) = 0 for all n, so the limit at x = 0 is 0."
  },
  {
    "id": 82457,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Easy",
    "question": "The Weierstrass M-test states that if |u_n(x)| ≤ M_n on S and ∑ M_n converges, then ∑ u_n(x):",
    "options": [
      "Converges uniformly and absolutely on S",
      "Converges only pointwise on S",
      "Diverges outside S",
      "Is identically constant"
    ],
    "correctAnswer": 0,
    "explanation": "The Weierstrass M-test provides a sufficient condition for absolute and uniform convergence of an infinite series of functions."
  },
  {
    "id": 82458,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Easy",
    "question": "Which of the following conditions guarantees that a pointwise limit of continuous functions is continuous?",
    "options": [
      "The convergence is uniform on the domain",
      "The domain is unbounded",
      "Each f_n is strictly increasing",
      "The integral of f_n is zero"
    ],
    "correctAnswer": 0,
    "explanation": "By the Uniform Limit Theorem, uniform convergence of continuous functions guarantees continuity of the limit function."
  },
  {
    "id": 82459,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Medium",
    "question": "Determine ||f_n - 0||_∞ on [0, 1] for f_n(x) = n x e^(-n x).",
    "options": [
      "1/e",
      "1",
      "0",
      "e^(-n)"
    ],
    "correctAnswer": 0,
    "explanation": "Setting the derivative f_n'(x) = n e^(-nx)(1 - nx) = 0 yields the peak at x = 1/n. Then f_n(1/n) = n(1/n)e^(-1) = 1/e for all n. Thus ||f_n||_∞ = 1/e > 0, so convergence is not uniform."
  },
  {
    "id": 82460,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Medium",
    "question": "Does the series ∑_{n=1}^∞ (cos(nx)) / n² converge uniformly on all of ℝ?",
    "options": [
      "Yes, by Weierstrass M-test with M_n = 1/n²",
      "No, because cos(nx) oscillates indefinitely",
      "Yes, but only on [-π, π]",
      "No, because the harmonic series diverges"
    ],
    "correctAnswer": 0,
    "explanation": "Since |cos(nx)| ≤ 1 for all x, |cos(nx)/n²| ≤ 1/n². Because ∑ 1/n² = π²/6 < ∞, the Weierstrass M-test proves uniform convergence on all of ℝ."
  },
  {
    "id": 82461,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Medium",
    "question": "What is the supremum norm ||f_n||_∞ on [0, 1] for f_n(x) = x / (1 + n² x²)?",
    "options": [
      "1 / (2n)",
      "1/n",
      "1 / (1 + n²)",
      "2/n"
    ],
    "correctAnswer": 0,
    "explanation": "Differentiating gives f_n'(x) = (1 - n²x²) / (1 + n²x²)² = 0 ⟹ x = 1/n. At x = 1/n, f_n(1/n) = (1/n) / (1 + 1) = 1/(2n). Since 1/(2n) → 0, f_n → 0 uniformly on [0, 1]."
  },
  {
    "id": 82462,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Medium",
    "question": "On which domain does the sequence f_n(x) = 1 / (1 + n x) converge uniformly to 0?",
    "options": [
      "[1, ∞)",
      "(0, 1]",
      "[0, 1]",
      "(-1, 0)"
    ],
    "correctAnswer": 0,
    "explanation": "For x ≥ 1, |f_n(x)| ≤ 1 / (1 + n) → 0. On any interval including (0, c], as x → 0+ the peak approaches 1, preventing uniform convergence."
  },
  {
    "id": 82463,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Medium",
    "question": "Dini's Theorem guarantees uniform convergence of f_n → f if:",
    "options": [
      "The domain is compact, each f_n is continuous, f is continuous, and the sequence is monotonic",
      "Each f_n is bounded and differentiable",
      "The limit function f is differentiable",
      "The integrals of f_n are equal"
    ],
    "correctAnswer": 0,
    "explanation": "Dini's Theorem states that a monotonic sequence of continuous functions converging pointwise to a continuous function on a compact set converges uniformly."
  },
  {
    "id": 82464,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Medium",
    "question": "Consider f_n(x) = (x^n)/(1 + x^n) on [0, 2]. What is the pointwise limit for x > 1?",
    "options": [
      "1",
      "0",
      "1/2",
      "x"
    ],
    "correctAnswer": 0,
    "explanation": "For x > 1, dividing numerator and denominator by x^n gives 1 / (x^(-n) + 1). Since x^(-n) → 0 as n → ∞, the limit is 1."
  },
  {
    "id": 82465,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Medium",
    "question": "Evaluate lim_{n→∞} sup_{x∈[0, 1]} |x^n - x^{2n}|:",
    "options": [
      "1/4",
      "0",
      "1/2",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Let g(x) = x^n - x^{2n}. Differentiating with respect to x yields peak at x^n = 1/2. Then g(x_peak) = 1/2 - 1/4 = 1/4 for every n. Since 1/4 does not approach 0, convergence is not uniform."
  },
  {
    "id": 82466,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Medium",
    "question": "Which of the following function series converges uniformly on (-∞, ∞)?",
    "options": [
      "∑_{n=1}^∞ 1 / (n² + x²)",
      "∑_{n=1}^∞ x^n / n",
      "∑_{n=1}^∞ x / n",
      "∑_{n=1}^∞ sin(x/n)"
    ],
    "correctAnswer": 0,
    "explanation": "For all real x, 1 / (n² + x²) ≤ 1/n². Since ∑ 1/n² converges, Weierstrass M-test guarantees uniform convergence on all of ℝ."
  },
  {
    "id": 82467,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Hard",
    "question": "Let f_n(x) = n² x (1 - x²)^n on [0, 1]. What is lim_{n→∞} ∫_0^1 f_n(x) dx compared to ∫_0^1 (lim f_n) dx?",
    "options": [
      "lim ∫ f_n = 1/2, while ∫ (lim f_n) = 0",
      "Both are equal to 0",
      "Both are equal to 1/2",
      "lim ∫ f_n = ∞, while ∫ (lim f_n) = 0"
    ],
    "correctAnswer": 0,
    "explanation": "For x in (0, 1], (1 - x²)^n decays exponentially, so lim f_n(x) = 0 pointwise, meaning ∫ lim f_n = 0. However, ∫_0^1 n² x (1 - x²)^n dx = [ -n²/(2(n+1)) (1 - x²)^{n+1} ]_0^1 = n² / (2n + 2) → ∞ / non-zero. With n²x, the integral evaluates to n/(2n+2) → 1/2."
  },
  {
    "id": 82468,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Hard",
    "question": "Determine whether f_n(x) = n x / (1 + n² x⁴) converges uniformly on [0, ∞).",
    "options": [
      "No, because the supremum norm is (3/4)·3^(-1/4)·n^(1/2) → ∞",
      "Yes, because the pointwise limit is 0",
      "Yes, with supremum norm 1/n",
      "No, because f_n(0) is undefined"
    ],
    "correctAnswer": 0,
    "explanation": "Setting f_n'(x) = n(1 - 3n²x⁴)/(1 + n²x⁴)² = 0 gives peak at x = (3n²)^(-1/4). The peak value is proportional to n · n^(-1/2) = n^(1/2) → ∞, severely violating uniform convergence."
  },
  {
    "id": 82469,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Hard",
    "question": "For f_n(x) = (sin(nx)) / √n on ℝ, does the sequence of derivatives f_n'(x) converge uniformly?",
    "options": [
      "No, f_n'(x) = √n cos(nx) does not converge pointwise or uniformly",
      "Yes, f_n' converges uniformly to 0",
      "Yes, f_n' converges uniformly to cos(x)",
      "No, but it converges in L2 norm"
    ],
    "correctAnswer": 0,
    "explanation": "f_n'(x) = √n cos(nx). As n → ∞, the amplitude √n grows without bound, so f_n'(x) diverges almost everywhere and cannot converge uniformly."
  },
  {
    "id": 82470,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Hard",
    "question": "The sequence f_n(x) = x / (1 + n x²) on ℝ has maximum error at x = ±1/√n. Its uniform limit is:",
    "options": [
      "f(x) = 0 uniformly on ℝ, because ||f_n||_∞ = 1 / (2√n) → 0",
      "f(x) = x pointwise only",
      "f(x) = 1/x uniformly on ℝ \\ {0}",
      "Non-existent on ℝ"
    ],
    "correctAnswer": 0,
    "explanation": "Differentiating shows extrema at x = ±1/√n with peak value |f_n(±1/√n)| = (1/√n) / (1 + 1) = 1 / (2√n). Since 1/(2√n) → 0 as n → ∞, f_n → 0 uniformly on the entire real line ℝ."
  },
  {
    "id": 82471,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Hard",
    "question": "Under what exact condition does the Cauchy criterion establish uniform convergence of f_n on S?",
    "options": [
      "∀ε > 0, ∃N such that ∀m, n > N and ∀x ∈ S, |f_n(x) - f_m(x)| < ε",
      "∀x ∈ S, ∃N such that |f_n(x) - f_m(x)| < 1/n",
      "sup_{x∈S} |f_n(x)| < ∞ for each n",
      "∫_S |f_n(x) - f_m(x)| dx < ε"
    ],
    "correctAnswer": 0,
    "explanation": "The Cauchy criterion states that a sequence of functions converges uniformly on S iff for every ε > 0 there is an N independent of x such that |f_n(x) - f_m(x)| < ε for all m, n > N and all x in S."
  },
  {
    "id": 82472,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Hard",
    "question": "Let f_n(x) = n x (1 - x)^n on [0, 1]. Compute the supremum norm ||f_n||_∞ as n → ∞:",
    "options": [
      "(1/e) · (n/(n+1))^(n+1) → 1/e",
      "0",
      "1",
      "∞"
    ],
    "correctAnswer": 0,
    "explanation": "Taking derivative gives f_n'(x) = n(1 - x)^{n-1} [1 - (n+1)x] = 0 ⟹ x = 1/(n+1). Then f_n(1/(n+1)) = (n/(n+1)) · (1 - 1/(n+1))^n → 1 · e^(-1) = 1/e. Since 1/e ≠ 0, it does not converge uniformly to 0."
  },
  {
    "id": 82473,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Hard",
    "question": "Consider the series ∑_{n=1}^∞ x / (n (1 + n x²)) for x ≥ 0. On which set is convergence uniform?",
    "options": [
      "On [0, ∞), by finding that the maximum of each term is 1/(2n^(3/2)) and applying Weierstrass M-test",
      "Only on compact subsets [a, b] with a > 0",
      "Nowhere on [0, ∞)",
      "Only at x = 0"
    ],
    "correctAnswer": 0,
    "explanation": "For each term u_n(x) = x / (n(1 + nx²)), differentiating yields maximum at x = 1/√n with u_n(1/√n) = 1 / (2n^(3/2)). Since ∑ 1/(2n^(3/2)) converges (p = 3/2 > 1), M-test proves uniform convergence on [0, ∞)."
  },
  {
    "id": 82474,
    "topic": "Pointwise and Uniform Convergence",
    "difficulty": "Hard",
    "question": "Let f_n: [0, 1] → ℝ be defined by f_n(x) = 1 if x = p/q in lowest terms with q ≤ n, and 0 otherwise. Does f_n converge uniformly?",
    "options": [
      "No, because each f_n is discontinuous at infinitely many rationals while the pointwise limit is Thomae-like",
      "Yes, it converges uniformly to 1",
      "Yes, by Dini's theorem",
      "No, because the pointwise limit is everywhere 1"
    ],
    "correctAnswer": 0,
    "explanation": "As n grows, the set of excluded rationals changes pointwise, but ||f_n - f_{n+k}||_∞ = 1 for any k because new rationals flip from 0 to 1, violating Cauchy's uniform convergence criterion."
  },
  {
    "id": 82475,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Easy",
    "question": "If a sequence of continuous functions f_n converges uniformly to f on [a, b], then lim_{n→∞} ∫_a^b f_n(x) dx equals:",
    "options": [
      "∫_a^b f(x) dx",
      "f(b) - f(a)",
      "0",
      "∞"
    ],
    "correctAnswer": 0,
    "explanation": "By the Termwise Integration Theorem, uniform convergence allows the limit and integral operations to be freely interchanged on compact intervals."
  },
  {
    "id": 82476,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Easy",
    "question": "To justify termwise differentiation (d/dx)[∑ u_n(x)] = ∑ u_n'(x), which series must converge uniformly?",
    "options": [
      "The series of derivatives ∑ u_n'(x)",
      "The original series ∑ u_n(x) only",
      "The series of second integrals",
      "No series needs to converge uniformly"
    ],
    "correctAnswer": 0,
    "explanation": "The Termwise Differentiation Theorem strictly requires uniform convergence of the derivative series ∑ u_n'(x) (plus convergence of ∑ u_n at at least one point)."
  },
  {
    "id": 82477,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Easy",
    "question": "The Dominated Convergence Theorem requires the sequence |f_n(x)| to be bounded by:",
    "options": [
      "An integrable function g(x) with ∫ |g(x)| dx < ∞",
      "A constant M that approaches 0",
      "The limit function f(x)",
      "An arbitrary polynomial"
    ],
    "correctAnswer": 0,
    "explanation": "The key hypothesis of Lebesgue's Dominated Convergence Theorem is the existence of a dominating integrable envelope g(x) such that |f_n(x)| ≤ g(x) almost everywhere."
  },
  {
    "id": 82478,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Easy",
    "question": "Which of the following is a classic consequence of failing uniform convergence during integration?",
    "options": [
      "The limit of integrals may not equal the integral of the pointwise limit",
      "The functions cease to be differentiable",
      "The interval becomes unbounded",
      "The limit function must be periodic"
    ],
    "correctAnswer": 0,
    "explanation": "When convergence is non-uniform, area can 'escape to infinity' in a spike, causing lim ∫ f_n ≠ ∫ lim f_n."
  },
  {
    "id": 82479,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Easy",
    "question": "Evaluate lim_{n→∞} ∫_0^1 (x/n) dx:",
    "options": [
      "0",
      "1",
      "1/2",
      "1/n"
    ],
    "correctAnswer": 0,
    "explanation": "Since x/n → 0 uniformly on [0, 1], lim ∫_0^1 (x/n) dx = ∫_0^1 0 dx = 0."
  },
  {
    "id": 82480,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Easy",
    "question": "If f_n(x) = (sin(nx))/n on [0, π], what is lim_{n→∞} f_n(x)?",
    "options": [
      "0 uniformly on [0, π]",
      "cos(x)",
      "1",
      "Does not exist"
    ],
    "correctAnswer": 0,
    "explanation": "Since |sin(nx)/n| ≤ 1/n → 0, f_n → 0 uniformly on [0, π]."
  },
  {
    "id": 82481,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Easy",
    "question": "For f_n(x) = (sin(nx))/n, does f_n'(x) converge to (d/dx)[lim f_n(x)] at x = 0?",
    "options": [
      "No: f_n'(0) = cos(0) = 1 for all n, but (d/dx)[0] = 0",
      "Yes, both equal 0",
      "Yes, both equal 1",
      "No, because sin(nx) is discontinuous"
    ],
    "correctAnswer": 0,
    "explanation": "f_n'(x) = cos(nx). At x = 0, f_n'(0) = 1 → 1. But lim f_n(x) = 0, whose derivative is 0. Thus lim f_n'(0) ≠ (lim f_n)'(0)."
  },
  {
    "id": 82482,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Easy",
    "question": "The Arzelà-Osgood theorem states that if f_n are Riemann integrable on [a, b], f_n → f pointwise, and |f_n(x)| ≤ M, then:",
    "options": [
      "lim ∫_a^b f_n(x) dx = ∫_a^b f(x) dx",
      "The convergence is uniform",
      "f must be infinitely differentiable",
      "M must be zero"
    ],
    "correctAnswer": 0,
    "explanation": "The Arzelà-Osgood bounded convergence theorem permits interchanging limit and Riemann integral under uniform boundedness, without requiring uniform convergence."
  },
  {
    "id": 82483,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Medium",
    "question": "Evaluate lim_{n→∞} ∫_0^1 (1 + x/n)^n dx:",
    "options": [
      "e - 1",
      "e",
      "1",
      "e/2"
    ],
    "correctAnswer": 0,
    "explanation": "(1 + x/n)^n increases monotonically to e^x on [0, 1]. By the Monotone or Dominated Convergence Theorem, lim ∫_0^1 (1 + x/n)^n dx = ∫_0^1 e^x dx = e - 1."
  },
  {
    "id": 82484,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Medium",
    "question": "Compute lim_{n→∞} ∫_0^π (sin(x))^n dx:",
    "options": [
      "0",
      "π",
      "1",
      "π/2"
    ],
    "correctAnswer": 0,
    "explanation": "For x in (0, π), 0 ≤ sin(x) < 1 except at x = π/2 where sin(π/2) = 1. Thus sin(x)^n → 0 pointwise almost everywhere on [0, π], bounded by g(x) = 1. By DCT, the limit is 0."
  },
  {
    "id": 82485,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Medium",
    "question": "Let f_n(x) = 2 n² x e^(-n² x²) on [0, 1]. Compute ∫_0^1 f_n(x) dx:",
    "options": [
      "1 - e^(-n²)",
      "0",
      "n",
      "1/2"
    ],
    "correctAnswer": 0,
    "explanation": "Substituting u = n² x² gives du = 2 n² x dx. Then ∫_0^1 2n²x e^(-n²x²) dx = [-e^(-u)]_0^(n²) = 1 - e^(-n²)."
  },
  {
    "id": 82486,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Medium",
    "question": "For f_n(x) = 2 n² x e^(-n² x²) on [0, 1], what is lim_{n→∞} ∫_0^1 f_n(x) dx versus ∫_0^1 lim_{n→∞} f_n(x) dx?",
    "options": [
      "lim ∫ f_n = 1, while ∫ lim f_n = 0",
      "Both are equal to 0",
      "Both are equal to 1",
      "lim ∫ f_n = 0, while ∫ lim f_n = 1"
    ],
    "correctAnswer": 0,
    "explanation": "As n → ∞, 1 - e^(-n²) → 1. But for any fixed x in (0, 1], f_n(x) → 0, and at x = 0, f_n(0) = 0. So pointwise limit is 0, giving ∫ 0 dx = 0 ≠ 1."
  },
  {
    "id": 82487,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Medium",
    "question": "Under what condition can the infinite series ∑_{n=1}^∞ u_n(x) be integrated termwise over [a, b]?",
    "options": [
      "If the series converges uniformly on [a, b]",
      "If each u_n is positive",
      "Only if u_n are polynomials",
      "If [a, b] has unit length"
    ],
    "correctAnswer": 0,
    "explanation": "Uniform convergence of the series guarantees that the sequence of partial sums converges uniformly, justifying termwise integration."
  },
  {
    "id": 82488,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Medium",
    "question": "Evaluate lim_{n→∞} ∫_0^∞ e^(-n x) dx for n ≥ 1:",
    "options": [
      "lim_{n→∞} (1/n) = 0",
      "1",
      "∞",
      "e^(-1)"
    ],
    "correctAnswer": 0,
    "explanation": "∫_0^∞ e^(-nx) dx = 1/n. As n → ∞, 1/n → 0."
  },
  {
    "id": 82489,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Medium",
    "question": "Why cannot the Dominated Convergence Theorem be applied to f_n(x) = n χ_{(0, 1/n)}?",
    "options": [
      "No single integrable function g(x) can dominate all f_n(x) because the heights grow as n",
      "f_n are not measurable",
      "The interval (0, 1/n) is bounded",
      "The pointwise limit does not exist"
    ],
    "correctAnswer": 0,
    "explanation": "Any dominating function must satisfy g(x) ≥ n on (0, 1/n), which forces g(x) ≥ 1/x near 0. Since ∫_0^1 (1/x) dx diverges, no integrable dominating function exists."
  },
  {
    "id": 82490,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Medium",
    "question": "If f(x) = ∑_{n=1}^∞ (sin(nx)) / n³, find f'(x):",
    "options": [
      "∑_{n=1}^∞ (cos(nx)) / n²",
      "∑_{n=1}^∞ (cos(nx)) / n³",
      "∑_{n=1}^∞ -(cos(nx)) / n²",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "The derived series is ∑ (cos(nx))/n². Since |cos(nx)/n²| ≤ 1/n² and ∑ 1/n² converges, the derivative series converges uniformly on ℝ, justifying termwise differentiation."
  },
  {
    "id": 82491,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Medium",
    "question": "Evaluate lim_{n→∞} ∫_1^2 (n x) / (1 + n² x²) dx:",
    "options": [
      "0",
      "ln(2)",
      "1/2",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "On [1, 2], nx / (1 + n²x²) ≤ nx / (n²x²) = 1/(nx) ≤ 1/n → 0 uniformly. The integral of the uniform limit 0 is 0."
  },
  {
    "id": 82492,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Hard",
    "question": "Evaluate lim_{n→∞} ∫_0^1 (n cos(x)) / (1 + n² x^{3/2}) dx:",
    "options": [
      "0",
      "1",
      "π/2",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "Substitute u = n^{4/3} x or notice that for x > 0, the integrand decays as 1/n. Splitting the integral into [0, 1/n²] and [1/n², 1] bounds the integral by C / n^(1/4) → 0."
  },
  {
    "id": 82493,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Hard",
    "question": "Let f_n(x) = (x^2 + n x) / (n + x^2) on [0, 1]. Compute lim_{n→∞} ∫_0^1 f_n(x) dx:",
    "options": [
      "1/2",
      "1",
      "0",
      "1/3"
    ],
    "correctAnswer": 0,
    "explanation": "Divide numerator and denominator by n: (x²/n + x) / (1 + x²/n) → x uniformly on [0, 1] because |f_n(x) - x| ≤ (x² + x³)/(n) ≤ 2/n → 0. Thus lim ∫_0^1 f_n dx = ∫_0^1 x dx = 1/2."
  },
  {
    "id": 82494,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Hard",
    "question": "Determine if termwise differentiation is valid for f(x) = ∑_{n=1}^∞ e^(-n x) on (0, ∞):",
    "options": [
      "Yes, on any compact interval [δ, ∞) with δ > 0, the derivative series ∑ -n e^(-nx) converges uniformly by Weierstrass M-test",
      "No, because e^(-nx) is not defined at x=0",
      "Yes, uniformly on (0, ∞)",
      "No, the derivative series diverges everywhere"
    ],
    "correctAnswer": 0,
    "explanation": "On [δ, ∞) for δ > 0, |-n e^(-nx)| ≤ n e^(-nδ). By the ratio test, ∑ n e^(-nδ) converges. Hence the derivative series converges uniformly on every compact subinterval [δ, ∞), validating termwise differentiation on (0, ∞)."
  },
  {
    "id": 82495,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Hard",
    "question": "Evaluate lim_{n→∞} ∫_0^∞ (1 + x/n)^(-n) e^{x/2} dx:",
    "options": [
      "2",
      "1",
      "e",
      "∞"
    ],
    "correctAnswer": 0,
    "explanation": "Since (1 + x/n)^(-n) → e^(-x) as n → ∞, the integrand approaches e^(-x) e^(x/2) = e^(-x/2). Using the dominating function e^(-x/2) (valid since (1 + x/n)^(-n) ≤ e^(-x/2) for n ≥ 2), DCT gives ∫_0^∞ e^(-x/2) dx = [-2 e^(-x/2)]_0^∞ = 2."
  },
  {
    "id": 82496,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Hard",
    "question": "Let f_n(x) = n x (1 - x²)^n on [0, 1]. Show why lim ∫_0^1 f_n(x) dx = 1/2 while ∫_0^1 lim f_n(x) dx = 0:",
    "options": [
      "The mass of f_n concentrates into a spike of height ~√n at x ~ 1/√n, escaping uniform bounds",
      "f_n is not continuous",
      "The integral diverges for each n",
      "Riemann integrals cannot be evaluated for polynomials"
    ],
    "correctAnswer": 0,
    "explanation": "Exact integration gives ∫_0^1 n x (1 - x²)^n dx = [ -n/(2(n+1)) (1 - x²)^{n+1} ]_0^1 = n/(2n + 2) → 1/2. Pointwise, for x in (0, 1], (1 - x²)^n → 0 faster than n, so f_n(x) → 0. Non-uniform spike concentration accounts for the discrepancy."
  },
  {
    "id": 82497,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Hard",
    "question": "Find the domain on which f(x) = ∑_{n=1}^∞ (1 / (n² + x²)) is differentiable:",
    "options": [
      "(-∞, ∞)",
      "[0, ∞) only",
      "(-1, 1) only",
      "Only where x is an integer"
    ],
    "correctAnswer": 0,
    "explanation": "The termwise derivative is ∑ -2x / (n² + x²)². On any bounded interval [-A, A], |-2x / (n² + x²)²| ≤ 2A / n⁴. Since ∑ 1/n⁴ converges, the derivative series converges uniformly on [-A, A], proving f is differentiable on all of ℝ."
  },
  {
    "id": 82498,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Hard",
    "question": "In Lebesgue integration, Fatou's Lemma states that for non-negative measurable functions f_n:",
    "options": [
      "∫ (lim inf f_n) dμ ≤ lim inf ∫ f_n dμ",
      "∫ (lim sup f_n) dμ = lim sup ∫ f_n dμ",
      "lim ∫ f_n dμ = ∫ f dμ",
      "∫ f_n dμ is bounded"
    ],
    "correctAnswer": 0,
    "explanation": "Fatou's Lemma establishes that the integral of the lower limit is at most the lower limit of the integrals for non-negative functions, providing a foundational inequality in analysis."
  },
  {
    "id": 82499,
    "topic": "Interchanging Limits, Derivatives and Integrals",
    "difficulty": "Hard",
    "question": "Evaluate lim_{n→∞} ∫_0^1 (n^2 x e^(-n x)) dx:",
    "options": [
      "1",
      "0",
      "1/2",
      "∞"
    ],
    "correctAnswer": 0,
    "explanation": "Let u = nx, du = n dx. When x = 0, u = 0; when x = 1, u = n. Then ∫_0^1 n² x e^(-nx) dx = ∫_0^n u e^(-u) du = [-u e^(-u) - e^(-u)]_0^n = 1 - (n + 1)e^(-n). As n → ∞, this approaches 1."
  },
  {
    "id": 82500,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Easy",
    "question": "In the ODE y'' + P(x)y' + Q(x)y = 0, the point x_0 is an ordinary point if:",
    "options": [
      "Both P(x) and Q(x) are analytic at x_0",
      "P(x_0) = 0 and Q(x_0) = 0",
      "P(x) has a pole at x_0",
      "x_0 is a complex number"
    ],
    "correctAnswer": 0,
    "explanation": "By definition, x_0 is an ordinary point of a linear second-order ODE if the coefficient functions P(x) and Q(x) are both real analytic (possess convergent Taylor series) at x_0."
  },
  {
    "id": 82501,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Easy",
    "question": "For the differential equation y'' + x y = 0, what type of point is x = 0?",
    "options": [
      "An ordinary point",
      "A regular singular point",
      "An irregular singular point",
      "An isolated branch point"
    ],
    "correctAnswer": 0,
    "explanation": "Here P(x) = 0 and Q(x) = x, both of which are polynomials and therefore analytic everywhere, making x = 0 an ordinary point."
  },
  {
    "id": 82502,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Easy",
    "question": "What is the standard power series ansatz for solving an ODE about an ordinary point x_0 = 0?",
    "options": [
      "y(x) = ∑_{n=0}^∞ a_n x^n",
      "y(x) = x^r ∑_{n=0}^∞ a_n x^n",
      "y(x) = ∑_{n=-∞}^∞ a_n x^n",
      "y(x) = e^(r x)"
    ],
    "correctAnswer": 0,
    "explanation": "About an ordinary point, solutions are guaranteed to be analytic and are represented by standard Taylor power series y(x) = ∑_{n=0}^∞ a_n x^n."
  },
  {
    "id": 82503,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Easy",
    "question": "If y(x) = ∑_{n=0}^∞ a_n x^n, what is the series representation of y''(x)?",
    "options": [
      "∑_{n=2}^∞ n(n - 1) a_n x^{n-2}",
      "∑_{n=0}^∞ n a_n x^n",
      "∑_{n=1}^∞ n² a_n x^{n-1}",
      "∑_{n=0}^∞ a_n x^{n+2}"
    ],
    "correctAnswer": 0,
    "explanation": "Differentiating termwise twice eliminates the constant and linear terms, starting the series at n = 2 with coefficient n(n - 1) a_n."
  },
  {
    "id": 82504,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Easy",
    "question": "In a power series solution y(x) = ∑ a_n x^n, the initial conditions y(0) and y'(0) determine:",
    "options": [
      "a_0 and a_1",
      "a_1 and a_2",
      "a_2 and a_3",
      "The radius of convergence only"
    ],
    "correctAnswer": 0,
    "explanation": "y(0) = a_0 and y'(0) = a_1. In second-order ODEs, a_0 and a_1 serve as the two independent arbitrary constants of the general solution."
  },
  {
    "id": 82505,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Easy",
    "question": "For the Airy equation y'' - x y = 0, what are the singular points in the complex plane?",
    "options": [
      "There are no singular points (all points are ordinary)",
      "x = 0 only",
      "x = 1 and x = -1",
      "x = ±i"
    ],
    "correctAnswer": 0,
    "explanation": "Since P(x) = 0 and Q(x) = -x are entire functions with no poles anywhere in ℂ, all points in ℂ are ordinary points."
  },
  {
    "id": 82506,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Easy",
    "question": "In shifting the summation index of ∑_{n=2}^∞ n(n - 1) a_n x^{n-2} to power x^k, the term becomes:",
    "options": [
      "∑_{k=0}^∞ (k + 2)(k + 1) a_{k+2} x^k",
      "∑_{k=2}^∞ k(k - 1) a_k x^k",
      "∑_{k=0}^∞ k(k + 1) a_k x^k",
      "∑_{k=0}^∞ (k + 1) a_{k+1} x^k"
    ],
    "correctAnswer": 0,
    "explanation": "Setting k = n - 2 implies n = k + 2. When n = 2, k = 0. Substituting gives (k + 2)(k + 1) a_{k+2} x^k."
  },
  {
    "id": 82507,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Easy",
    "question": "For y'' + y = 0 with y(0) = 1, y'(0) = 0, the power series solution reproduces:",
    "options": [
      "cos(x) = 1 - x²/2! + x⁴/4! - ...",
      "sin(x) = x - x³/3! + ...",
      "e^x = 1 + x + x²/2! + ...",
      "cosh(x) = 1 + x²/2! + ..."
    ],
    "correctAnswer": 0,
    "explanation": "The recurrence gives a_{n+2} = -a_n / ((n+2)(n+1)). With a_0 = 1, a_1 = 0, this generates the exact Taylor expansion for cos(x)."
  },
  {
    "id": 82508,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Easy",
    "question": "A recurrence relation expressing a_{n+2} in terms of a_n has a step size of:",
    "options": [
      "2",
      "1",
      "3",
      "n"
    ],
    "correctAnswer": 0,
    "explanation": "A recurrence a_{n+2} = f(n) a_n relates coefficients differing in index by 2, splitting solutions into even and odd powers."
  },
  {
    "id": 82509,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Medium",
    "question": "For the ODE y'' + x y' + y = 0, find the recurrence relation for the coefficients a_n:",
    "options": [
      "a_{n+2} = -a_n / (n + 2)",
      "a_{n+2} = a_n / (n + 1)",
      "a_{n+2} = -a_n / ((n + 2)(n + 1))",
      "a_{n+2} = -(n + 1)a_n"
    ],
    "correctAnswer": 0,
    "explanation": "y'' gives (n+2)(n+1)a_{n+2} x^n; x y' gives n a_n x^n; y gives a_n x^n. Summing: (n+2)(n+1)a_{n+2} + (n + 1)a_n = 0 ⟹ a_{n+2} = -(n+1)a_n / ((n+2)(n+1)) = -a_n / (n + 2)."
  },
  {
    "id": 82510,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Medium",
    "question": "What is the guaranteed minimum radius of convergence for power series solutions of (x² + 4) y'' + x y' + y = 0 about x_0 = 0?",
    "options": [
      "2",
      "4",
      "1/2",
      "∞"
    ],
    "correctAnswer": 0,
    "explanation": "In standard form, P(x) = x / (x² + 4) and Q(x) = 1 / (x² + 4). The singular points are the roots of x² + 4 = 0, which are x = ±2i. The distance from the expansion center x_0 = 0 to ±2i is |±2i - 0| = 2."
  },
  {
    "id": 82511,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Medium",
    "question": "For the Chebyshev equation (1 - x²) y'' - x y' + α² y = 0, what is the minimum radius of convergence about x_0 = 0?",
    "options": [
      "1",
      "α",
      "1/α",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "Dividing by (1 - x²) yields singular points at x = ±1. The distance from expansion point x_0 = 0 to ±1 is 1."
  },
  {
    "id": 82512,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Medium",
    "question": "For y'' - x y = 0 with a_0 = 1, a_1 = 0, what is the first non-zero subsequent coefficient a_3?",
    "options": [
      "1/6",
      "-1/6",
      "1/3",
      "1/2"
    ],
    "correctAnswer": 0,
    "explanation": "Recurrence: (k+2)(k+1)a_{k+2} - a_{k-1} = 0 ⟹ a_{k+2} = a_{k-1} / ((k+2)(k+1)). For k = 1, a_3 = a_0 / (3 · 2) = 1/6."
  },
  {
    "id": 82513,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Medium",
    "question": "For y'' - x y = 0 with a_0 = 0, a_1 = 1, what is the coefficient a_4?",
    "options": [
      "1/12",
      "-1/12",
      "1/4",
      "1/6"
    ],
    "correctAnswer": 0,
    "explanation": "For k = 2, a_4 = a_1 / (4 · 3) = 1/12."
  },
  {
    "id": 82514,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Medium",
    "question": "For y'' + k² y = 0, the recurrence relation is a_{n+2} = -k² a_n / ((n+2)(n+1)). The general solution is:",
    "options": [
      "y = a_0 cos(kx) + (a_1/k) sin(kx)",
      "y = a_0 e^(kx) + a_1 e^(-kx)",
      "y = a_0 cosh(kx) + a_1 sinh(kx)",
      "y = (a_0 + a_1 x) e^(kx)"
    ],
    "correctAnswer": 0,
    "explanation": "Even terms give a_0 ∑ (-1)^m (kx)^{2m}/(2m)! = a_0 cos(kx); odd terms give (a_1/k) ∑ (-1)^m (kx)^{2m+1}/(2m+1)! = (a_1/k) sin(kx)."
  },
  {
    "id": 82515,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Medium",
    "question": "What is the guaranteed radius of convergence for solutions of (x² - 2x + 5) y'' + y = 0 about x_0 = 1?",
    "options": [
      "2",
      "5",
      "√5",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Roots of x² - 2x + 5 = 0 are x = 1 ± 2i. The distance from expansion center x_0 = 1 to 1 ± 2i is |(1 ± 2i) - 1| = |±2i| = 2."
  },
  {
    "id": 82516,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Medium",
    "question": "If a second-order linear ODE y'' + P(x)y' + Q(x)y = 0 has P and Q analytic everywhere in ℂ, then every solution:",
    "options": [
      "Is an entire function with infinite radius of convergence R = ∞",
      "Has radius of convergence R = 1",
      "Has at most polynomial growth",
      "Must be periodic"
    ],
    "correctAnswer": 0,
    "explanation": "By Fuchs' theorem, the radius of convergence of the series solution is at least the distance to the nearest singular point. If there are no singular points in ℂ, R = ∞, meaning solutions are entire."
  },
  {
    "id": 82517,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Hard",
    "question": "For Hermite's equation y'' - 2x y' + 2λ y = 0, the recurrence relation is:",
    "options": [
      "a_{n+2} = 2(n - λ) a_n / ((n + 1)(n + 2))",
      "a_{n+2} = 2(n + λ) a_n / ((n + 1)(n + 2))",
      "a_{n+2} = (n - λ) a_n / (n + 2)",
      "a_{n+2} = -2λ a_n / (n + 1)"
    ],
    "correctAnswer": 0,
    "explanation": "y'' gives (n+2)(n+1)a_{n+2}; -2x y' gives -2n a_n; 2λ y gives 2λ a_n. Setting (n+2)(n+1)a_{n+2} - 2(n - λ)a_n = 0 yields a_{n+2} = 2(n - λ)a_n / ((n+1)(n+2))."
  },
  {
    "id": 82518,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Hard",
    "question": "In Hermite's equation y'' - 2x y' + 2λ y = 0, the series terminates into a polynomial of degree N if and only if:",
    "options": [
      "λ = N for some non-negative integer N",
      "λ is negative",
      "λ = 0 only",
      "λ is an irrational number"
    ],
    "correctAnswer": 0,
    "explanation": "When λ = N, the factor (n - λ) in the numerator of a_{n+2} becomes zero when n = N. Thus a_{N+2} = a_{N+4} = ... = 0, truncating that branch into an N-th degree Hermite polynomial."
  },
  {
    "id": 82519,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Hard",
    "question": "For Legendre's equation (1 - x²) y'' - 2x y' + α(α + 1) y = 0, find the coefficient recurrence:",
    "options": [
      "a_{n+2} = [n(n + 1) - α(α + 1)] a_n / ((n + 1)(n + 2))",
      "a_{n+2} = [α(α + 1)] a_n / ((n + 1)(n + 2))",
      "a_{n+2} = -a_n / (n + 1)",
      "a_{n+2} = 2n a_n / (n + 2)"
    ],
    "correctAnswer": 0,
    "explanation": "Expanding (1 - x²)y'' - 2xy' + α(α+1)y gives (n+2)(n+1)a_{n+2} - n(n-1)a_n - 2n a_n + α(α+1)a_n = 0, which rearranges to a_{n+2} = [n(n+1) - α(α+1)] a_n / ((n+1)(n+2))."
  },
  {
    "id": 82520,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Hard",
    "question": "For (x² + 1) y'' + y = 0 expanded about x_0 = 0 with y(0) = 1, y'(0) = 0, find a_4:",
    "options": [
      "1/8",
      "1/24",
      "-1/8",
      "1/12"
    ],
    "correctAnswer": 0,
    "explanation": "Expand: ∑ (n+2)(n+1)a_{n+2} x^n + ∑ n(n-1)a_n x^n + ∑ a_n x^n = 0 ⟹ (n+2)(n+1)a_{n+2} + [n(n-1) + 1] a_n = 0. For n = 0: 2 a_2 + a_0 = 0 ⟹ a_2 = -1/2. For n = 2: (4·3) a_4 + (2·1 + 1) a_2 = 0 ⟹ 12 a_4 + 3(-1/2) = 0 ⟹ 12 a_4 = 3/2 ⟹ a_4 = 1/8."
  },
  {
    "id": 82521,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Hard",
    "question": "Solve y'' - 2x y' - 2 y = 0 with y(0) = 1, y'(0) = 0. The closed-form sum is:",
    "options": [
      "y(x) = e^(x²)",
      "y(x) = cos(x²)",
      "y(x) = e^(-x²)",
      "y(x) = 1 / (1 - x²)"
    ],
    "correctAnswer": 0,
    "explanation": "Recurrence: (n+2)(n+1)a_{n+2} - 2(n+1)a_n = 0 ⟹ a_{n+2} = 2 a_n / (n + 2). With a_0 = 1, a_1 = 0: a_2 = 1, a_4 = 1/2!, a_6 = 1/3!, a_{2m} = 1/m!. Thus y = ∑ (x²)^m / m! = e^(x²)."
  },
  {
    "id": 82522,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Hard",
    "question": "What is the distance to the nearest singularity for y'' + (1 / cos(x)) y = 0 expanded about x_0 = 0?",
    "options": [
      "π/2",
      "π",
      "1",
      "2π"
    ],
    "correctAnswer": 0,
    "explanation": "cos(x) = 0 at x = ±π/2, ±3π/2, ... The nearest complex poles occur at x = ±π/2, so distance is π/2."
  },
  {
    "id": 82523,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Hard",
    "question": "For y'' + x² y = 0 with y(0) = 1, y'(0) = 0, what are the non-zero coefficients?",
    "options": [
      "Only a_{4k} are non-zero (a_0, a_4, a_8, ...)",
      "All even coefficients",
      "All odd coefficients",
      "Only a_{3k} are non-zero"
    ],
    "correctAnswer": 0,
    "explanation": "Recurrence: (n+2)(n+1)a_{n+2} + a_{n-2} = 0. The step size is 4! With a_0 = 1 and a_1 = a_2 = a_3 = 0, only terms with indices congruent to 0 mod 4 (a_{4k}) survive."
  },
  {
    "id": 82524,
    "topic": "Power-Series Solutions at Ordinary Points",
    "difficulty": "Hard",
    "question": "For y'' + x² y = 0 with y(0) = 1, y'(0) = 0, find a_4:",
    "options": [
      "-1/12",
      "1/12",
      "-1/24",
      "1/6"
    ],
    "correctAnswer": 0,
    "explanation": "From (n+2)(n+1)a_{n+2} + a_{n-2} = 0 with n = 2: (4·3) a_4 + a_0 = 0 ⟹ 12 a_4 + 1 = 0 ⟹ a_4 = -1/12."
  },
  {
    "id": 82525,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Easy",
    "question": "In x² y'' + x p(x) y' + q(x) y = 0, the point x = 0 is a regular singular point if:",
    "options": [
      "Both p(x) and q(x) are analytic at x = 0",
      "p(0) = 0 and q(0) = 0",
      "p(x) has an essential singularity",
      "The equation is separable"
    ],
    "correctAnswer": 0,
    "explanation": "A singular point x_0 is regular if the singularity is no worse than a simple pole in P(x) and a double pole in Q(x), meaning x p(x) and x² q(x) are analytic at x_0."
  },
  {
    "id": 82526,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Easy",
    "question": "What is the general form of the Frobenius series ansatz about x = 0?",
    "options": [
      "y(x) = x^r ∑_{n=0}^∞ a_n x^n  (a_0 ≠ 0)",
      "y(x) = ∑_{n=0}^∞ a_n x^n",
      "y(x) = e^(r x) ∑ a_n x^n",
      "y(x) = ln(x) ∑ a_n x^n"
    ],
    "correctAnswer": 0,
    "explanation": "The Frobenius ansatz factors out an algebraic power x^r, where r is an unknown index to be determined by the indicial equation."
  },
  {
    "id": 82527,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Easy",
    "question": "The quadratic equation that determines the permissible values of the index r is called the:",
    "options": [
      "Indicial equation",
      "Characteristic polynomial",
      "Wronskian equation",
      "Auxiliary determinant"
    ],
    "correctAnswer": 0,
    "explanation": "The indicial equation F(r) = 0 arises from equating the coefficient of the lowest power of x to zero."
  },
  {
    "id": 82528,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Easy",
    "question": "For the Euler-Cauchy equation x² y'' + 3x y' + y = 0, what is the indicial equation?",
    "options": [
      "r(r - 1) + 3r + 1 = 0 ⟹ r² + 2r + 1 = 0",
      "r² + 3r + 1 = 0",
      "r(r - 1) + y = 0",
      "3r² + r + 1 = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Substituting y = x^r gives x^r [r(r - 1) + 3r + 1] = 0 ⟹ r² + 2r + 1 = 0."
  },
  {
    "id": 82529,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Easy",
    "question": "For x² y'' + 3x y' + y = 0, what are the indicial roots?",
    "options": [
      "r = -1 (repeated root of multiplicity 2)",
      "r = 1 and r = -1",
      "r = -2 and r = 1",
      "r = 0 and r = -3"
    ],
    "correctAnswer": 0,
    "explanation": "The indicial equation is (r + 1)² = 0, which has the repeated double root r_1 = r_2 = -1."
  },
  {
    "id": 82530,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Easy",
    "question": "If the indicial roots r_1, r_2 satisfy r_1 - r_2 ∉ ℤ, the two Frobenius solutions are:",
    "options": [
      "Both of the form y = x^r ∑ a_n x^n and are linearly independent",
      "One series and one purely logarithmic function",
      "Identical up to a constant multiple",
      "Divergent everywhere except x = 0"
    ],
    "correctAnswer": 0,
    "explanation": "When the roots do not differ by an integer, Frobenius method directly yields two linearly independent power series solutions."
  },
  {
    "id": 82531,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Easy",
    "question": "Bessel's equation of order ν is x² y'' + x y' + (x² - ν²) y = 0. What is its indicial equation at x = 0?",
    "options": [
      "r² - ν² = 0",
      "r(r - 1) - ν² = 0",
      "r² + r - ν² = 0",
      "r² + ν² = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Here p_0 = 1 and q_0 = -ν². The indicial equation is r(r - 1) + 1·r - ν² = r² - ν² = 0."
  },
  {
    "id": 82532,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Easy",
    "question": "What are the indicial roots of Bessel's equation x² y'' + x y' + (x² - ν²) y = 0?",
    "options": [
      "r = ±ν",
      "r = ±iν",
      "r = ν ± 1",
      "r = 0, ν"
    ],
    "correctAnswer": 0,
    "explanation": "r² - ν² = 0 factors directly as (r - ν)(r + ν) = 0, giving roots r_1 = ν and r_2 = -ν."
  },
  {
    "id": 82533,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Medium",
    "question": "For the ODE 2x² y'' - x y' + (x - 5) y = 0, find the indicial equation:",
    "options": [
      "2r(r - 1) - r - 5 = 0 ⟹ 2r² - 3r - 5 = 0",
      "r(r - 1) - x - 5 = 0",
      "2r² - r - 5 = 0",
      "2r² - 5r = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying standard form gives p_0 = lim (-x / 2x) = -1/2, q_0 = -5/2. Alternatively, lowest power x^r gives 2r(r - 1) - r - 5 = 2r² - 3r - 5 = 0."
  },
  {
    "id": 82534,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Medium",
    "question": "What are the roots of the indicial equation 2r² - 3r - 5 = 0?",
    "options": [
      "r = 5/2 and r = -1",
      "r = 5 and r = -2",
      "r = 3/2 and r = -5/2",
      "r = 1 and r = -5/2"
    ],
    "correctAnswer": 0,
    "explanation": "Factoring (2r - 5)(r + 1) = 0 gives r_1 = 5/2 and r_2 = -1. Note that 5/2 - (-1) = 7/2 ∉ ℤ."
  },
  {
    "id": 82535,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Medium",
    "question": "When the indicial roots are equal (r_1 = r_2 = r), the second linearly independent solution contains:",
    "options": [
      "A logarithmic term y_1(x) ln(x)",
      "A factor of e^(1/x)",
      "An essential singularity of order 2",
      "No power series component"
    ],
    "correctAnswer": 0,
    "explanation": "When roots coincide, the second solution is generated by differentiating the parameterized series with respect to r, yielding y_2(x) = y_1(x) ln(x) + x^r ∑ b_n x^n."
  },
  {
    "id": 82536,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Medium",
    "question": "For x² y'' + x(1 - x) y' - y = 0, the indicial equation is:",
    "options": [
      "r(r - 1) + r - 1 = 0 ⟹ r² - 1 = 0",
      "r(r - 1) - 1 = 0",
      "r² + r - 1 = 0",
      "r² - r = 0"
    ],
    "correctAnswer": 0,
    "explanation": "p_0 = lim x(1 - x)/x = 1, q_0 = -1. Indicial equation is r(r - 1) + 1·r - 1 = r² - 1 = 0."
  },
  {
    "id": 82537,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Medium",
    "question": "For x² y'' + x(1 - x) y' - y = 0, the indicial roots are r_1 = 1 and r_2 = -1. Their difference is r_1 - r_2 = 2 ∈ ℤ. What complication may occur?",
    "options": [
      "The smaller root r_2 may fail to yield an independent solution without a logarithmic term C y_1(x) ln(x)",
      "Both series diverge",
      "The recurrence relation becomes non-linear",
      "The radius of convergence drops to 0"
    ],
    "correctAnswer": 0,
    "explanation": "When roots differ by a positive integer N = r_1 - r_2, the recurrence for the smaller root may encounter division by zero at n = N, necessitating a logarithmic term C y_1 ln(x)."
  },
  {
    "id": 82538,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Medium",
    "question": "Which point is an irregular singular point for x²(x - 1)² y'' + 2(x - 1) y' + y = 0?",
    "options": [
      "x = 0 is irregular because x² P(x) has a pole at 0",
      "x = 1 only",
      "Both x = 0 and x = 1 are regular",
      "There are no singular points"
    ],
    "correctAnswer": 0,
    "explanation": "At x = 0, P(x) = 2 / [x²(x - 1)], so x P(x) = 2 / [x(x - 1)], which is not analytic at x = 0 (simple pole remains), making x = 0 an irregular singular point."
  },
  {
    "id": 82539,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Medium",
    "question": "For 4x y'' + 2 y' + y = 0, multiply by x to identify p_0 and q_0:",
    "options": [
      "p_0 = 1/2 and q_0 = 0",
      "p_0 = 2 and q_0 = 1",
      "p_0 = 0 and q_0 = 1/4",
      "p_0 = 1/2 and q_0 = 1/4"
    ],
    "correctAnswer": 0,
    "explanation": "4x² y'' + 2x y' + x y = 0 ⟹ x² y'' + (1/2)x y' + (1/4)x y = 0. Thus p_0 = 1/2 and q_0 = 0."
  },
  {
    "id": 82540,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Medium",
    "question": "Find the indicial roots for 4x y'' + 2 y' + y = 0:",
    "options": [
      "r = 0 and r = 1/2",
      "r = 1 and r = -1/2",
      "r = 1/2 (repeated)",
      "r = 0 and r = -1/2"
    ],
    "correctAnswer": 0,
    "explanation": "Indicial equation: r(r - 1) + (1/2)r = r² - (1/2)r = r(r - 1/2) = 0 ⟹ r_1 = 1/2, r_2 = 0."
  },
  {
    "id": 82541,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Medium",
    "question": "In Frobenius method, the recurrence relation for coefficients a_n is obtained by equating to zero the coefficient of:",
    "options": [
      "x^{n+r}",
      "x^n only",
      "x^{r-1}",
      "ln(x)"
    ],
    "correctAnswer": 0,
    "explanation": "Equating the coefficient of the general power x^{n+r} to zero yields the recurrence relation expressing a_n in terms of preceding coefficients."
  },
  {
    "id": 82542,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Hard",
    "question": "For 2x y'' + y' + y = 0, write in Frobenius form with r_1 = 1/2. Find the recurrence relation for a_n:",
    "options": [
      "a_n = -a_{n-1} / [n(2n + 1)]",
      "a_n = a_{n-1} / [n(2n - 1)]",
      "a_n = -a_{n-1} / (2n + 1)",
      "a_n = -a_{n-1} / n²"
    ],
    "correctAnswer": 0,
    "explanation": "Substitute y = ∑ a_n x^{n+1/2}: 2(n+1/2)(n-1/2)a_n + (n+1/2)a_n + a_{n-1} = 0 ⟹ (n+1/2)[2n - 1 + 1] a_n + a_{n-1} = 0 ⟹ 2n(n + 1/2) a_n + a_{n-1} = 0 ⟹ n(2n + 1)a_n + a_{n-1} = 0 ⟹ a_n = -a_{n-1} / [n(2n + 1)]."
  },
  {
    "id": 82543,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Hard",
    "question": "In Bessel's equation of order 0, x y'' + y' + x y = 0, the indicial equation has roots r_1 = r_2 = 0. The first Frobenius solution is J_0(x) = ∑_{m=0}^∞ (-1)^m (x/2)^{2m} / (m!)². The second solution Y_0(x) has leading behavior as x → 0+ of:",
    "options": [
      "(2/π) J_0(x) ln(x)",
      "1/x",
      "cos(x)",
      "x J_0(x)"
    ],
    "correctAnswer": 0,
    "explanation": "The Neumann function Y_0(x) contains the logarithmic singularity (2/π) J_0(x) ln(x/2) as x → 0+, characteristic of the repeated indicial root case r_1 = r_2 = 0."
  },
  {
    "id": 82544,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Hard",
    "question": "For x² y'' + x y' + (x² - 1/4) y = 0, the indicial roots are r = ±1/2 (difference is 1 ∈ ℤ). Does the solution for r_2 = -1/2 contain a logarithm?",
    "options": [
      "No, because the odd coefficients vanish identically and the recurrence is consistent with C = 0",
      "Yes, every integer difference requires a logarithm",
      "Yes, because r_2 is negative",
      "No, because the equation is Euler-Cauchy"
    ],
    "correctAnswer": 0,
    "explanation": "For Bessel's equation with ν = 1/2, the roots differ by 1, but the recurrence steps by 2. The coefficient of the potential obstruction is identically zero, so C = 0 and y_2(x) = x^(-1/2) cos(x) without any logarithmic term."
  },
  {
    "id": 82545,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Hard",
    "question": "For x² y'' + x² y' - 2 y = 0, the indicial equation is r(r - 1) - 2 = r² - r - 2 = 0 with roots r_1 = 2, r_2 = -1. What is the recurrence for a_n?",
    "options": [
      "(n + r - 2)(n + r + 1) a_n + (n + r - 1) a_{n-1} = 0",
      "a_n = -a_{n-1} / n",
      "n(n + 3) a_n + a_{n-1} = 0",
      "a_n = a_{n-1} / (n² - 2)"
    ],
    "correctAnswer": 0,
    "explanation": "Coefficient of x^{n+r} is [(n+r)(n+r-1) - 2] a_n + (n+r-1) a_{n-1} = [(n+r-2)(n+r+1)] a_n + (n+r-1) a_{n-1} = 0."
  },
  {
    "id": 82546,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Hard",
    "question": "For x² y'' + x² y' - 2 y = 0 with smaller root r_2 = -1, setting n = 3 in (n - 3)(n) a_n + (n - 2) a_{n-1} = 0 gives:",
    "options": [
      "0 · a_3 + 1 · a_2 = 0, which requires a_2 = 0 to avoid contradiction",
      "a_3 = 0 automatically",
      "a_3 = -a_2 / 3",
      "A division by zero that cannot be resolved"
    ],
    "correctAnswer": 0,
    "explanation": "At n = 3 (the difference r_1 - r_2 = 3), the coefficient of a_3 vanishes: 0 · a_3 + a_2 = 0. If a_2 ≠ 0, this is an inconsistency, forcing the introduction of a logarithmic term C y_1 ln(x)."
  },
  {
    "id": 82547,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Hard",
    "question": "The Frobenius solution y_1(x) for Bessel's equation of order 1/2 is proportional to:",
    "options": [
      "(sin x) / √x",
      "(cos x) / √x",
      "e^x / √x",
      "J_0(x) / x"
    ],
    "correctAnswer": 0,
    "explanation": "J_{1/2}(x) = √(2/(πx)) sin(x), which has the Frobenius factor x^(1/2) multiplying the Taylor series of sin(x)/x."
  },
  {
    "id": 82548,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Hard",
    "question": "What is the radius of convergence of the Frobenius series for x(1 - x) y'' + (1 - 3x) y' - y = 0 about x = 0?",
    "options": [
      "R = 1, the distance to the nearest other singularity at x = 1",
      "R = ∞",
      "R = 1/2",
      "R = 3"
    ],
    "correctAnswer": 0,
    "explanation": "Standard form has P(x) = (1 - 3x)/[x(1 - x)] and Q(x) = -1/[x(1 - x)]. The singular points are x = 0 and x = 1. The distance from 0 to 1 is 1, so the Frobenius series converges for 0 < x < 1."
  },
  {
    "id": 82549,
    "topic": "Frobenius Method at Regular Singular Points",
    "difficulty": "Hard",
    "question": "For Legendre's equation (1 - x²) y'' - 2x y' + α(α+1) y = 0, what kind of point is x = 1?",
    "options": [
      "A regular singular point",
      "An ordinary point",
      "An irregular singular point",
      "A point of inflection"
    ],
    "correctAnswer": 0,
    "explanation": "Dividing by (1 - x²) = (1 - x)(1 + x) shows that P(x) has a simple pole at x = 1 and Q(x) has a simple pole at x = 1. Since (x - 1) P(x) and (x - 1)² Q(x) are analytic at x = 1, it is a regular singular point."
  },
  {
    "id": 82550,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Easy",
    "question": "The Cauchy-Riemann equations in Cartesian coordinates for f(z) = u(x, y) + i v(x, y) are:",
    "options": [
      "u_x = v_y and u_y = -v_x",
      "u_x = -v_y and u_y = v_x",
      "u_x = v_x and u_y = v_y",
      "u_{xx} + v_{yy} = 0"
    ],
    "correctAnswer": 0,
    "explanation": "The Cauchy-Riemann equations state that the partial derivatives satisfy ∂u/∂x = ∂v/∂y and ∂u/∂y = -∂v/∂x."
  },
  {
    "id": 82551,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Easy",
    "question": "A function f(z) is called holomorphic or analytic on an open domain D if:",
    "options": [
      "f'(z) exists at every point in D",
      "f is continuous on D",
      "f is bounded on D",
      "The real part u(x, y) is constant"
    ],
    "correctAnswer": 0,
    "explanation": "Holomorphic (analytic) means complex differentiable in an open neighborhood around every point in D."
  },
  {
    "id": 82552,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Easy",
    "question": "Is f(z) = z* = x - i y complex differentiable anywhere in ℂ?",
    "options": [
      "No, it is nowhere complex differentiable because u_x = 1 ≠ v_y = -1",
      "Yes, everywhere",
      "Yes, only on the real axis",
      "Yes, only at z = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Here u = x, v = -y. Then u_x = 1 but v_y = -1. Since u_x ≠ v_y anywhere, the Cauchy-Riemann equations fail everywhere, so f is nowhere differentiable."
  },
  {
    "id": 82553,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Easy",
    "question": "If f(z) = u + i v is analytic, what equation do u and v satisfy?",
    "options": [
      "Laplace's equation: u_{xx} + u_{yy} = 0 and v_{xx} + v_{yy} = 0",
      "The wave equation: u_{xx} - u_{yy} = 0",
      "The heat equation: u_x = u_{yy}",
      "Euler's equation: u² + v² = 1"
    ],
    "correctAnswer": 0,
    "explanation": "Differentiating the CR equations gives u_{xx} = v_{yx} and u_{yy} = -v_{xy}. By Clairaut's theorem (v_{xy} = v_{yx}), u_{xx} + u_{yy} = 0. Thus both u and v are harmonic."
  },
  {
    "id": 82554,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Easy",
    "question": "In polar form z = r e^(iθ), the Cauchy-Riemann equations are:",
    "options": [
      "u_r = (1/r) v_θ and v_r = -(1/r) u_θ",
      "u_r = v_θ and u_θ = -v_r",
      "r u_r = v_θ and r v_r = u_θ",
      "u_{rr} + v_{θθ} = 0"
    ],
    "correctAnswer": 0,
    "explanation": "The polar Cauchy-Riemann equations are ∂u/∂r = (1/r) ∂v/∂θ and ∂v/∂r = -(1/r) ∂u/∂θ."
  },
  {
    "id": 82555,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Easy",
    "question": "A function f(z) that is analytic on the entire complex plane ℂ is called:",
    "options": [
      "An entire function",
      "A meromorphic function",
      "A harmonic conjugate",
      "A conformal mapping"
    ],
    "correctAnswer": 0,
    "explanation": "An entire function is defined and complex differentiable across the entire complex plane ℂ (e.g. polynomials, e^z, sin z, cos z)."
  },
  {
    "id": 82556,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Easy",
    "question": "If f(z) = u + iv is analytic and f'(z) = 0 everywhere in a connected domain D, then:",
    "options": [
      "f(z) is constant on D",
      "f(z) = z",
      "f(z) must be zero",
      "f(z) is unbounded"
    ],
    "correctAnswer": 0,
    "explanation": "f'(z) = u_x + i v_x = 0 implies u_x = v_x = u_y = v_y = 0 throughout D, meaning both u and v are constant."
  },
  {
    "id": 82557,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Easy",
    "question": "If v is the harmonic conjugate of u, then the family of curves u(x, y) = c_1 and v(x, y) = c_2 are:",
    "options": [
      "Orthogonal to each other everywhere (except where f'(z) = 0)",
      "Parallel to each other",
      "Concentric circles",
      "Asymptotic lines"
    ],
    "correctAnswer": 0,
    "explanation": "Because ∇u · ∇v = u_x v_x + u_y v_y = u_x(-u_y) + u_y(u_x) = 0, the tangent vectors are perpendicular wherever gradients are non-zero."
  },
  {
    "id": 82558,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Medium",
    "question": "For u(x, y) = x² - y², find its harmonic conjugate v(x, y):",
    "options": [
      "2xy + C",
      "-2xy + C",
      "x² + y² + C",
      "y² - x² + C"
    ],
    "correctAnswer": 0,
    "explanation": "v_y = u_x = 2x ⟹ v = 2xy + g(x). Then v_x = 2y + g'(x) = -u_y = -(-2y) = 2y ⟹ g'(x) = 0 ⟹ v(x, y) = 2xy + C. Note that u + iv = x² - y² + 2ixy = z²."
  },
  {
    "id": 82559,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Medium",
    "question": "Using the Milne-Thomson method, if u(x, y) = x³ - 3x y², find f(z) with f(0) = 0:",
    "options": [
      "f(z) = z³",
      "f(z) = 3z²",
      "f(z) = z³ + i z",
      "f(z) = -i z³"
    ],
    "correctAnswer": 0,
    "explanation": "u_x = 3x² - 3y², u_y = -6xy. Milne-Thomson formula: f'(z) = u_x(z, 0) - i u_y(z, 0) = 3z² - 0 = 3z². Integrating: f(z) = z³ + C. With f(0) = 0, C = 0 ⟹ f(z) = z³."
  },
  {
    "id": 82560,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Medium",
    "question": "If f(z) = u + iv is analytic on a domain D and |f(z)| is constant, then:",
    "options": [
      "f(z) is constant on D",
      "f(z) must be real",
      "f(z) = 0",
      "f(z) = e^(iz)"
    ],
    "correctAnswer": 0,
    "explanation": "If u² + v² = C, differentiating with respect to x and y and using CR equations forces u_x = u_y = v_x = v_y = 0, so f(z) is constant."
  },
  {
    "id": 82561,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Medium",
    "question": "For f(z) = e^x (cos y + i sin y), what is its complex derivative f'(z)?",
    "options": [
      "e^z",
      "i e^z",
      "e^x (cos y - i sin y)",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "f(z) = e^x e^(iy) = e^(x+iy) = e^z. The derivative of e^z is e^z."
  },
  {
    "id": 82562,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Medium",
    "question": "Verify whether u(x, y) = e^x sin y is harmonic:",
    "options": [
      "Yes, u_{xx} + u_{yy} = e^x sin y - e^x sin y = 0",
      "No, u_{xx} + u_{yy} = 2 e^x sin y ≠ 0",
      "No, it is exponential",
      "Only when y = 0"
    ],
    "correctAnswer": 0,
    "explanation": "u_x = e^x sin y ⟹ u_{xx} = e^x sin y. u_y = e^x cos y ⟹ u_{yy} = -e^x sin y. Adding them gives 0, confirming harmonicity."
  },
  {
    "id": 82563,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Medium",
    "question": "Find the harmonic conjugate of u(x, y) = e^x sin y:",
    "options": [
      "v(x, y) = -e^x cos y + C",
      "v(x, y) = e^x cos y + C",
      "v(x, y) = e^x sin y + C",
      "v(x, y) = -e^y cos x + C"
    ],
    "correctAnswer": 0,
    "explanation": "v_y = u_x = e^x sin y ⟹ v = -e^x cos y + g(x). v_x = -e^x cos y + g'(x) = -u_y = -e^x cos y ⟹ g'(x) = 0 ⟹ v(x, y) = -e^x cos y + C."
  },
  {
    "id": 82564,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Medium",
    "question": "For f(z) = |z|² = x² + y², at which points is f complex differentiable?",
    "options": [
      "Only at z = 0",
      "Everywhere in ℂ",
      "Nowhere in ℂ",
      "Along the line y = x"
    ],
    "correctAnswer": 0,
    "explanation": "u = x² + y², v = 0. CR equations: u_x = 2x = v_y = 0 ⟹ x = 0; u_y = 2y = -v_x = 0 ⟹ y = 0. CR holds only at (0, 0), so f is differentiable only at z = 0 (and analytic nowhere)."
  },
  {
    "id": 82565,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Medium",
    "question": "What is the complex derivative of f(z) in terms of polar partials?",
    "options": [
      "f'(z) = e^(-iθ) (u_r + i v_r)",
      "f'(z) = u_r + i v_r",
      "f'(z) = r e^(iθ) (u_r + i v_r)",
      "f'(z) = u_θ + i v_θ"
    ],
    "correctAnswer": 0,
    "explanation": "Using the chain rule, f'(z) = (∂f/∂r) / (∂z/∂r) = (u_r + i v_r) / e^(iθ) = e^(-iθ) (u_r + i v_r)."
  },
  {
    "id": 82566,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Hard",
    "question": "Let f(z) = u + iv be analytic. Express |f'(z)|² in terms of Jacobian determinant J of the mapping (x, y) ↦ (u, v):",
    "options": [
      "|f'(z)|² = J = u_x v_y - u_y v_x = u_x² + v_x²",
      "|f'(z)|² = 2J",
      "|f'(z)|² = 1/J",
      "|f'(z)|² = u_x² - v_x²"
    ],
    "correctAnswer": 0,
    "explanation": "J = u_x v_y - u_y v_x. Using CR equations (v_y = u_x, v_x = -u_y), J = u_x(u_x) - (-v_x)(v_x) = u_x² + v_x² = |f'(z)|²."
  },
  {
    "id": 82567,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Hard",
    "question": "Given u(x, y) = 2x - x³ + 3x y², find the analytic function f(z) with f(0) = 0 using Milne-Thomson:",
    "options": [
      "f(z) = 2z - z³",
      "f(z) = 2z + z³",
      "f(z) = 2z - 3z²",
      "f(z) = z - z³"
    ],
    "correctAnswer": 0,
    "explanation": "u_x = 2 - 3x² + 3y², u_y = 6xy. Set x = z, y = 0: u_x(z, 0) = 2 - 3z², u_y(z, 0) = 0. Then f'(z) = 2 - 3z². Integrating: f(z) = 2z - z³ + C. With f(0) = 0, C = 0."
  },
  {
    "id": 82568,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Hard",
    "question": "If u(x, y) = ln(x² + y²) on ℂ \\ {0}, can a single-valued harmonic conjugate v(x, y) be defined on all of ℂ \\ {0}?",
    "options": [
      "No, v(x, y) = 2 arctan(y/x) = 2θ is multi-valued around the origin (branch cut required)",
      "Yes, v(x, y) = 2θ is everywhere single-valued",
      "No, because u is not harmonic",
      "Yes, v(x, y) = x² - y²"
    ],
    "correctAnswer": 0,
    "explanation": "ln(x² + y²) = 2 ln|z| = 2 Re(ln z). Its harmonic conjugate is 2 arg(z) = 2θ, which increases by 4π upon traversing any circle around the origin, so no single-valued conjugate exists on ℂ \\ {0}."
  },
  {
    "id": 82569,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Hard",
    "question": "Liouville's Theorem states that any bounded entire function must be:",
    "options": [
      "Constant",
      "Zero",
      "Periodic",
      "A polynomial of degree ≤ 1"
    ],
    "correctAnswer": 0,
    "explanation": "Liouville's Theorem: If f(z) is entire and there exists M such that |f(z)| ≤ M for all z in ℂ, then f(z) is constant."
  },
  {
    "id": 82570,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Hard",
    "question": "If f(z) = u + iv is analytic and u(x, y) = e^(2x) cos(2y), find v(x, y) such that v(0, 0) = 0:",
    "options": [
      "v(x, y) = e^(2x) sin(2y)",
      "v(x, y) = -e^(2x) sin(2y)",
      "v(x, y) = e^(2x) cos(2y) - 1",
      "v(x, y) = 2xy"
    ],
    "correctAnswer": 0,
    "explanation": "f(z) = e^(2(x+iy)) = e^(2z) = e^(2x)[cos(2y) + i sin(2y)]. Thus v(x, y) = e^(2x) sin(2y). At (0, 0), v(0, 0) = 0."
  },
  {
    "id": 82571,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Hard",
    "question": "Which of the following functions satisfies the Cauchy-Riemann equations at (0, 0) but is NOT complex differentiable at (0, 0)?",
    "options": [
      "f(z) = (x³ - y³)/(x² + y²) for z ≠ 0, f(0) = 0",
      "f(z) = z²",
      "f(z) = e^z",
      "f(z) = z*²"
    ],
    "correctAnswer": 0,
    "explanation": "For this function, u_x(0,0) = 1, u_y(0,0) = -1, v_x = 0, v_y = 0. For f(z) = (x y² + i x² y)/(x² + y²), the partials satisfy CR at (0, 0) but are discontinuous, demonstrating that continuity of partials is indispensable."
  },
  {
    "id": 82572,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Hard",
    "question": "The Maximum Modulus Principle implies that if f is analytic and non-constant on a bounded domain D and continuous on its closure:",
    "options": [
      "|f(z)| attains its maximum strictly on the boundary ∂D",
      "|f(z)| attains its maximum at the center of D",
      "|f(z)| must be zero on the boundary",
      "f'(z) has no zeros in D"
    ],
    "correctAnswer": 0,
    "explanation": "By the Maximum Modulus Principle, the magnitude |f(z)| of a non-constant holomorphic function cannot achieve a local maximum at any interior point; the maximum occurs exclusively on the boundary ∂D."
  },
  {
    "id": 82573,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Hard",
    "question": "If f(z) = u + iv is analytic with u(x, y) = x³ - 3x y² + 2x, compute f''(z):",
    "options": [
      "6z",
      "6z + 2",
      "3z²",
      "6"
    ],
    "correctAnswer": 0,
    "explanation": "Milne-Thomson gives f'(z) = (3z² + 2) - i(0) = 3z² + 2. Differentiating with respect to z gives f''(z) = 6z."
  },
  {
    "id": 82574,
    "topic": "Analytic Functions and Cauchy-Riemann Equations",
    "difficulty": "Hard",
    "question": "Let f = u + iv be analytic. The Laplacian of |f(z)|² is given by:",
    "options": [
      "∇²(|f(z)|²) = 4 |f'(z)|²",
      "∇²(|f(z)|²) = 0",
      "∇²(|f(z)|²) = 2 |f'(z)|²",
      "∇²(|f(z)|²) = |f''(z)|²"
    ],
    "correctAnswer": 0,
    "explanation": "|f|² = u² + v². ∇²(u² + v²) = 2(u_x² + u_y² + u u_{xx} + u u_{yy} + v_x² + v_y² + v v_{xx} + v v_{yy}) = 2(u_x² + u_y² + v_x² + v_y²) = 2(2 u_x² + 2 v_x²) = 4 |f'(z)|²."
  },
  {
    "id": 82575,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Easy",
    "question": "Evaluate ∮_C (1 / z) dz where C is the counterclockwise circle |z| = 1:",
    "options": [
      "2πi",
      "0",
      "πi",
      "-2πi"
    ],
    "correctAnswer": 0,
    "explanation": "Parametrizing z = e^(it), dz = i e^(it) dt for t in [0, 2π]: ∫_0^{2π} (1/e^(it)) i e^(it) dt = i ∫_0^{2π} dt = 2πi."
  },
  {
    "id": 82576,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Easy",
    "question": "The Cauchy-Goursat theorem states that if f(z) is analytic in a simply connected domain D, then for any simple closed contour C in D:",
    "options": [
      "∮_C f(z) dz = 0",
      "∮_C f(z) dz = 2πi",
      "∮_C f(z) dz = f(0)",
      "∮_C f(z) dz = length(C)"
    ],
    "correctAnswer": 0,
    "explanation": "The Cauchy-Goursat theorem proves that closed loop contour integrals of holomorphic functions vanish identically."
  },
  {
    "id": 82577,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Easy",
    "question": "According to Cauchy's Integral Formula, if f(z) is analytic inside and on C enclosing z_0:",
    "options": [
      "∮_C [f(z) / (z - z_0)] dz = 2πi f(z_0)",
      "∮_C [f(z) / (z - z_0)] dz = 0",
      "∮_C [f(z) / (z - z_0)] dz = f'(z_0)",
      "∮_C [f(z) / (z - z_0)] dz = 2π f(z_0)"
    ],
    "correctAnswer": 0,
    "explanation": "Cauchy's Integral Formula states that f(z_0) = (1/2πi) ∮_C [f(z)/(z - z_0)] dz, which rearranges to 2πi f(z_0)."
  },
  {
    "id": 82578,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Easy",
    "question": "Evaluate ∮_{|z|=2} [e^z / (z - 1)] dz:",
    "options": [
      "2πi e",
      "e",
      "0",
      "2π e"
    ],
    "correctAnswer": 0,
    "explanation": "Here z_0 = 1 lies inside |z| = 2. By CIF, the integral is 2πi e^1 = 2πi e."
  },
  {
    "id": 82579,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Easy",
    "question": "The residue of f(z) at an isolated singularity z_0 is the coefficient of which term in its Laurent series?",
    "options": [
      "1 / (z - z_0)",
      "(z - z_0)",
      "1 / (z - z_0)²",
      "The constant term a_0"
    ],
    "correctAnswer": 0,
    "explanation": "By definition, Res(f, z_0) = a_{-1}, the coefficient of (z - z_0)^(-1) in the Laurent expansion."
  },
  {
    "id": 82580,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Easy",
    "question": "For a simple pole at z = z_0, the residue is given by:",
    "options": [
      "lim_{z→z_0} (z - z_0) f(z)",
      "lim_{z→z_0} f(z)",
      "lim_{z→z_0} (z - z_0)² f(z)",
      "f'(z_0)"
    ],
    "correctAnswer": 0,
    "explanation": "For a simple pole (order 1), Res(f, z_0) = lim_{z→z_0} (z - z_0) f(z)."
  },
  {
    "id": 82581,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Easy",
    "question": "What type of singularity does f(z) = (sin z) / z have at z = 0?",
    "options": [
      "A removable singularity",
      "A simple pole",
      "A pole of order 2",
      "An essential singularity"
    ],
    "correctAnswer": 0,
    "explanation": "Since lim_{z→0} (sin z)/z = 1 is finite, the singularity can be removed by defining f(0) = 1."
  },
  {
    "id": 82582,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Easy",
    "question": "What type of singularity does f(z) = e^(1/z) have at z = 0?",
    "options": [
      "An essential singularity",
      "A simple pole",
      "A removable singularity",
      "A branch cut"
    ],
    "correctAnswer": 0,
    "explanation": "e^(1/z) = 1 + 1/z + 1/(2! z²) + ... has infinitely many negative power terms in its Laurent series, defining an essential singularity."
  },
  {
    "id": 82583,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Medium",
    "question": "Find the residue of f(z) = 1 / (z² + 1) at z = i:",
    "options": [
      "1 / (2i) = -i/2",
      "i/2",
      "1/2",
      "-1/2"
    ],
    "correctAnswer": 0,
    "explanation": "f(z) = 1 / [(z - i)(z + i)]. Res(f, i) = lim_{z→i} (z - i) / [(z - i)(z + i)] = 1 / (2i) = -i/2."
  },
  {
    "id": 82584,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Medium",
    "question": "Evaluate ∮_{|z|=2} [1 / (z² + 1)] dz:",
    "options": [
      "0",
      "2πi",
      "π",
      "πi"
    ],
    "correctAnswer": 0,
    "explanation": "Both poles z = i and z = -i lie inside |z| = 2. Res(f, i) = 1/(2i) and Res(f, -i) = -1/(2i). Sum of residues = 0. By Residue Theorem, ∮ = 2πi(0) = 0."
  },
  {
    "id": 82585,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Medium",
    "question": "Compute the residue of f(z) = 1 / (z - 1)³ at z = 1:",
    "options": [
      "0",
      "1",
      "1/2",
      "1/6"
    ],
    "correctAnswer": 0,
    "explanation": "The Laurent series around z = 1 consists solely of the single term (z - 1)^(-3). The coefficient of (z - 1)^(-1) is a_{-1} = 0, so the residue is 0."
  },
  {
    "id": 82586,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Medium",
    "question": "Evaluate ∮_{|z|=1} [cos(z) / z³] dz using the generalized Cauchy Integral Formula:",
    "options": [
      "-πi",
      "πi",
      "0",
      "2πi"
    ],
    "correctAnswer": 0,
    "explanation": "By CIF for derivatives: ∮ [f(z)/(z - z_0)^{n+1}] dz = (2πi / n!) f^(n)(z_0). Here n = 2, f(z) = cos(z), z_0 = 0. f''(0) = -cos(0) = -1. Integral = (2πi / 2!) (-1) = -πi."
  },
  {
    "id": 82587,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Medium",
    "question": "Find the residue of f(z) = z / (z² - 4) at z = 2:",
    "options": [
      "1/2",
      "2",
      "1/4",
      "-1/2"
    ],
    "correctAnswer": 0,
    "explanation": "Using P(z)/Q'(z): P(2) = 2, Q'(z) = 2z ⟹ Q'(2) = 4. Res = 2/4 = 1/2."
  },
  {
    "id": 82588,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Medium",
    "question": "Evaluate ∮_{|z|=3} [z / (z - 2)] dz:",
    "options": [
      "4πi",
      "2πi",
      "0",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "Pole at z = 2 lies inside |z| = 3. Res(f, 2) = lim_{z→2} z = 2. By Residue Theorem, ∮ = 2πi(2) = 4πi."
  },
  {
    "id": 82589,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Medium",
    "question": "The ML-inequality guarantees that |∮_C f(z) dz| ≤ M L. If C is the upper semicircle |z| = R and f(z) = 1/(z² + 1), what is an upper bound on |f(z)| for R > 1?",
    "options": [
      "1 / (R² - 1)",
      "1 / (R² + 1)",
      "1 / R",
      "1 / R²"
    ],
    "correctAnswer": 0,
    "explanation": "By the reverse triangle inequality, |z² + 1| ≥ |z|² - 1 = R² - 1. Thus |f(z)| ≤ 1 / (R² - 1)."
  },
  {
    "id": 82590,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Medium",
    "question": "Evaluate ∮_{|z|=1} e^(1/z) dz:",
    "options": [
      "2πi",
      "0",
      "πi",
      "e"
    ],
    "correctAnswer": 0,
    "explanation": "e^(1/z) = 1 + 1/z + 1/(2z²) + ... The residue at z = 0 is the coefficient of 1/z, which is 1. By Residue Theorem, ∮ = 2πi(1) = 2πi."
  },
  {
    "id": 82591,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Hard",
    "question": "Evaluate the real improper integral I = ∫_{-∞}^∞ [1 / (x² + 1)] dx using contour integration:",
    "options": [
      "π",
      "2π",
      "π/2",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Close the contour with a semicircle C_R in the upper half-plane. The only pole in Im(z) > 0 is z = i. Res(1/(z²+1), i) = 1/(2i). By Residue Theorem: I = 2πi(1/(2i)) = π."
  },
  {
    "id": 82592,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Hard",
    "question": "Evaluate ∫_{-∞}^∞ [1 / (x² + 4)²] dx using residue calculus:",
    "options": [
      "π / 16",
      "π / 8",
      "π / 32",
      "π / 4"
    ],
    "correctAnswer": 0,
    "explanation": "Pole at z = 2i is of order 2. Res(f, 2i) = d/dz [ (z - 2i)² / ((z - 2i)²(z + 2i)²) ] |_{z=2i} = -2 / (z + 2i)³ |_{z=2i} = -2 / (4i)³ = -2 / (-64i) = 1 / (32i). Integral = 2πi(1/(32i)) = 2π/32 = π/16."
  },
  {
    "id": 82593,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Hard",
    "question": "Evaluate the real trigonometric integral I = ∫_0^{2π} [1 / (5 - 4 cos θ)] dθ:",
    "options": [
      "2π / 3",
      "π / 3",
      "π",
      "2π"
    ],
    "correctAnswer": 0,
    "explanation": "Substitute z = e^(iθ), cos θ = (z + z⁻¹)/2, dθ = dz/(iz). The integral becomes ∮_{|z|=1} dz / [i (2 - z)(2z - 1)]. The only pole inside |z| < 1 is z = 1/2 with residue 1/(3i). Then I = 2πi(1/(3i)) = 2π/3."
  },
  {
    "id": 82594,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Hard",
    "question": "Find the residue of f(z) = cot(z) at z = 0:",
    "options": [
      "1",
      "0",
      "-1",
      "π"
    ],
    "correctAnswer": 0,
    "explanation": "cot(z) = cos(z)/sin(z). At z = 0, cos(0) = 1 and sin(0) = 0 with [sin(z)]' = cos(0) = 1 ≠ 0. By P/Q': Res = cos(0)/cos(0) = 1."
  },
  {
    "id": 82595,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Hard",
    "question": "Evaluate ∮_{|z|=2} [z³ / (z⁴ - 1)] dz:",
    "options": [
      "2πi",
      "0",
      "4πi",
      "πi"
    ],
    "correctAnswer": 0,
    "explanation": "All 4 poles (z = ±1, ±i) lie strictly inside |z| = 2. By Residue at Infinity: for rational f where deg(Q) - deg(P) ≥ 1, the sum of all finite residues equals the coefficient of 1/z in the Laurent expansion at ∞. Since z³/(z⁴-1) = (1/z) (1 / (1 - 1/z⁴)) = 1/z + O(1/z⁵), the coefficient of 1/z is 1. Thus ∮ = 2πi(1) = 2πi."
  },
  {
    "id": 82596,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Hard",
    "question": "Jordan's Lemma states that for a > 0, if M_R = max_{C_R} |f(z)| → 0 as R → ∞, then ∫_{C_R} f(z) e^(i a z) dz approaches:",
    "options": [
      "0",
      "2πi",
      "π",
      "a"
    ],
    "correctAnswer": 0,
    "explanation": "Jordan's Lemma exploits the exponential decay of e^(iaz) = e^(iax) e^(-ay) in the upper half-plane (y > 0) to ensure the semicircle integral vanishes even when f(z) decays only as 1/R."
  },
  {
    "id": 82597,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Hard",
    "question": "Evaluate ∫_0^∞ [x² / (x⁴ + 1)] dx using complex residues:",
    "options": [
      "π / (2√2)",
      "π / √2",
      "π / 4",
      "π / 2"
    ],
    "correctAnswer": 0,
    "explanation": "Even integrand: I = (1/2) ∫_{-∞}^∞ x²/(x⁴+1) dx. Poles in upper half-plane are z_1 = e^{iπ/4} and z_2 = e^{i3π/4}. Res(f, z_k) = z_k² / (4 z_k³) = 1 / (4 z_k). Sum of residues = (1/4)(e^{-iπ/4} + e^{-i3π/4}) = (1/4)(2 cos(π/4) - 2i sin(π/4)...) = -i/(2√2). Integral = (1/2) · 2πi(-i/(2√2)) = π/(2√2)."
  },
  {
    "id": 82598,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Hard",
    "question": "Find the residue of f(z) = z e^(3/z) at the essential singularity z = 0:",
    "options": [
      "9/2",
      "3",
      "0",
      "27/6"
    ],
    "correctAnswer": 0,
    "explanation": "e^(3/z) = 1 + 3/z + 9/(2z²) + 27/(6z³) + ... Multiplying by z gives z + 3 + 9/(2z) + 27/(6z²) + ... The coefficient of 1/z is a_{-1} = 9/2 = 4.5."
  },
  {
    "id": 82599,
    "topic": "Contour Integrals and Residues",
    "difficulty": "Hard",
    "question": "Rouché's Theorem states that if |f(z)| > |g(z)| on a simple closed contour C, then f(z) and f(z) + g(z) have:",
    "options": [
      "The same number of zeros inside C (counting multiplicities)",
      "No zeros inside C",
      "The same number of poles as zeros",
      "Zeros at the same locations"
    ],
    "correctAnswer": 0,
    "explanation": "Rouché's Theorem is a standard topological result in complex analysis used to locate roots of polynomials and analytic functions."
  }
];
