/**
 * Developer 3: Sequences of Functions, Series Solutions of ODEs & Complex Analysis Checkpoint Quizzes
 * 20 MCQs per topic with 80% passing threshold.
 */

export const CALC_A_UNIFORM_CONV_QUIZ = [
  {
    "prompt": "What is the formal definition of pointwise convergence for a sequence of functions $f_n: S \\to \\mathbb{R}$ to a limit function $f$?",
    "options": [
      "For every $\\epsilon > 0$, there exists $N$ such that $|f_n(x) - f(x)| < \\epsilon$ for all $n > N$ simultaneously for all $x \\in S$",
      "For each fixed $x \\in S$ and every $\\epsilon > 0$, there exists $N(\\epsilon, x)$ such that $|f_n(x) - f(x)| < \\epsilon$ for all $n > N$",
      "The integral $\\int_S |f_n(x) - f(x)|\\,dx \\to 0$ as $n \\to \\infty$",
      "The supremum norm $\\sup_{x \\in S} |f_n(x) - f(x)|$ is bounded for each $n$"
    ],
    "answer": "B",
    "explanation": "Pointwise convergence requires that at each specific point $x \\in S$, the numerical sequence $f_n(x)$ converges to $f(x)$. The index $N$ may depend on both $\\epsilon$ and the choice of $x$."
  },
  {
    "prompt": "How is uniform convergence of $f_n$ to $f$ on a set $S$ characterized using the supremum norm?",
    "options": [
      "$\\lim_{n \\to \\infty} \\|f_n - f\\|_\\infty = \\lim_{n \\to \\infty} \\sup_{x \\in S} |f_n(x) - f(x)| = 0$",
      "$\\lim_{n \\to \\infty} \\inf_{x \\in S} |f_n(x) - f(x)| = 0$",
      "$\\sup_{x \\in S} |f_n(x)| \\to \\sup_{x \\in S} |f(x)|$",
      "$\\int_S (f_n(x) - f(x))^2\\,dx = 0$"
    ],
    "answer": "A",
    "explanation": "Uniform convergence requires the worst-case deviation across the entire domain $S$ to vanish as $n \\to \\infty$, which is precisely $\\|f_n - f\\|_\\infty \\to 0$."
  },
  {
    "prompt": "Consider the sequence $f_n(x) = x^n$ on the closed interval $[0, 1]$. What is its pointwise limit function $f(x)$?",
    "options": [
      "$f(x) = 0$ for all $x \\in [0, 1]$",
      "$f(x) = 1$ for all $x \\in [0, 1]$",
      "$f(x) = 0$ for $x \\in [0, 1)$ and $f(1) = 1$",
      "$f(x) = x$ for all $x \\in [0, 1]$"
    ],
    "answer": "C",
    "explanation": "For $0 \\le x < 1$, $x^n \\to 0$ as $n \\to \\infty$. For $x = 1$, $1^n = 1$ for all $n$, so $f(1) = 1$. The pointwise limit has a jump discontinuity at $x = 1$."
  },
  {
    "prompt": "Does the sequence $f_n(x) = x^n$ converge uniformly on $[0, 1]$?",
    "options": [
      "Yes, because each $f_n(x)$ is continuous on $[0, 1]$",
      "No, because the pointwise limit function $f(x)$ is discontinuous on $[0, 1]$",
      "Yes, because the supremum norm is $1$ for all $n$",
      "No, because $x^n$ is not bounded on $[0, 1]$"
    ],
    "answer": "B",
    "explanation": "By the Uniform Limit Theorem, the uniform limit of continuous functions must be continuous. Since each $x^n$ is continuous but the limit is discontinuous at $x = 1$, convergence cannot be uniform."
  },
  {
    "prompt": "On which of the following subintervals does $f_n(x) = x^n$ converge uniformly to $0$?",
    "options": [
      "$[0, 1)$",
      "$(0, 1]$",
      "$[0, 0.99]$",
      "$(0.5, 1)$"
    ],
    "answer": "C",
    "explanation": "On $[0, c]$ with $0 < c < 1$, $\\sup_{x \\in [0, c]} |x^n - 0| = c^n \\to 0$ as $n \\to \\infty$. Thus $f_n \\to 0$ uniformly on any compact subinterval bounded strictly away from $1$."
  },
  {
    "prompt": "What does the Cauchy Criterion for uniform convergence state for a sequence $f_n: S \\to \\mathbb{R}$?",
    "options": [
      "$f_n \\to f$ uniformly iff for every $\\epsilon > 0$, $\\exists N$ such that $\\forall m, n > N$ and $\\forall x \\in S$, $|f_n(x) - f_m(x)| < \\epsilon$",
      "$f_n \\to f$ uniformly iff $\\sum_{n=1}^\\infty f_n(x)$ converges for all $x$",
      "$f_n \\to f$ uniformly iff $\\lim_{n \\to \\infty} f_n'(x) = 0$",
      "$f_n \\to f$ uniformly iff each $f_n$ is differentiable"
    ],
    "answer": "A",
    "explanation": "The Cauchy criterion allows testing for uniform convergence intrinsically without knowing the limit function in advance: $|f_n(x) - f_m(x)| < \\epsilon$ uniformly across all $x \\in S$ for sufficiently large $m, n$."
  },
  {
    "prompt": "Evaluate the supremum norm $\\|f_n - 0\\|_\\infty$ for $f_n(x) = \\frac{x}{1 + n x^2}$ on $\\mathbb{R}$:",
    "options": [
      "$1 / \\sqrt{n}$",
      "$1 / (2\\sqrt{n})$",
      "$1 / n$",
      "$\\sqrt{n}$"
    ],
    "answer": "B",
    "explanation": "Differentiating $f_n'(x) = \\frac{1 - nx^2}{(1 + nx^2)^2} = 0$ gives critical points at $x = \\pm 1/\\sqrt{n}$. The maximum value is $f_n(1/\\sqrt{n}) = \\frac{1/\\sqrt{n}}{1 + 1} = \\frac{1}{2\\sqrt{n}}$. Since this tends to $0$, $f_n \\to 0$ uniformly on $\\mathbb{R}$."
  },
  {
    "prompt": "Consider $f_n(x) = \\frac{nx}{1 + n^2 x^2}$ on $[0, 1]$. What is its pointwise limit, and does it converge uniformly?",
    "options": [
      "Pointwise limit is $0$; it converges uniformly because $\\|f_n\\|_\\infty \\to 0$",
      "Pointwise limit is $0$; it does NOT converge uniformly because $\\|f_n\\|_\\infty = 1/2$ for all $n$",
      "Pointwise limit is $1/x$; it does not converge uniformly",
      "Pointwise limit is $\\infty$; it does not converge pointwise"
    ],
    "answer": "B",
    "explanation": "For $x = 0$, $f_n(0) = 0$. For $x > 0$, $\\frac{nx}{1+n^2x^2} \\sim \\frac{1}{nx} \\to 0$. However, at $x = 1/n$, $f_n(1/n) = \\frac{1}{1 + 1} = 1/2$. Thus $\\|f_n - 0\\|_\\infty = 1/2 \\not\\to 0$, so convergence is not uniform."
  },
  {
    "prompt": "Dini's Theorem states that if $f_n$ is a monotone sequence of continuous functions on a compact set $K$ converging pointwise to a continuous function $f$, then:",
    "options": [
      "The convergence must be uniform on $K$",
      "The convergence is only pointwise",
      "The derivatives $f_n'$ must also converge uniformly",
      "$f$ must be a constant function"
    ],
    "answer": "A",
    "explanation": "Dini's theorem provides a powerful bridge: continuity of $f_n$ and $f$, compactness of the domain $K$, and monotonicity of $f_n(x)$ guarantee that pointwise convergence promotes to uniform convergence."
  },
  {
    "prompt": "How does uniform convergence of a sequence of functions differ from the convergence of a numerical series $\\sum a_n$?",
    "options": [
      "Numerical series test convergence of numbers, whereas uniform convergence measures the geometric bound of function differences across a continuum of inputs",
      "Numerical series always imply uniform convergence",
      "Uniform convergence applies only to finite sets",
      "There is no difference; both are governed exclusively by the Ratio Test"
    ],
    "answer": "A",
    "explanation": "Numerical series deal with single scalar sequences. Function sequence convergence involves simultaneous convergence across an entire domain set $S$, where the rate of convergence can vary widely across different points."
  },
  {
    "prompt": "For the series of functions $\\sum_{n=1}^\\infty u_n(x)$, the Weierstrass M-Test guarantees uniform convergence if:",
    "options": [
      "$|u_n(x)| \\ge M_n$ and $\\sum M_n$ diverges",
      "$|u_n(x)| \\le M_n$ for all $x \\in S$ and the numerical series $\\sum M_n$ converges",
      "$\\lim_{n \\to \\infty} u_n(x) = 0$ pointwise",
      "$u_n(x)$ is differentiable for all $n$"
    ],
    "answer": "B",
    "explanation": "The Weierstrass M-Test states that if each term $|u_n(x)|$ is bounded by a positive constant $M_n$ on $S$ and $\\sum M_n < \\infty$, then $\\sum u_n(x)$ converges uniformly and absolutely on $S$."
  },
  {
    "prompt": "What is the supremum norm $\\|f_n\\|_\\infty$ of $f_n(x) = x e^{-nx}$ on $[0, \\infty)$?",
    "options": [
      "$1 / (n e)$",
      "$1 / n^2$",
      "$e / n$",
      "$1$"
    ],
    "answer": "A",
    "explanation": "Setting $f_n'(x) = e^{-nx}(1 - nx) = 0$ gives $x = 1/n$. The maximum is $f_n(1/n) = \\frac{1}{n}e^{-1} = \\frac{1}{ne}$. Since $\\frac{1}{ne} \\to 0$ as $n \\to \\infty$, $f_n \\to 0$ uniformly on $[0, \\infty)$."
  },
  {
    "prompt": "If $f_n \\to f$ uniformly on $S$ and each $f_n$ is bounded on $S$, what can be deduced about the limit function $f$?",
    "options": [
      "$f$ is unbounded on $S$",
      "$f$ is bounded on $S$",
      "$f$ must be uniformly continuous on $S$",
      "$f$ must be differentiable on $S$"
    ],
    "answer": "B",
    "explanation": "Choose $N$ such that $\\|f_N - f\\|_\\infty < 1$. Then $|f(x)| \\le |f_N(x)| + 1 \\le M_N + 1$ for all $x \\in S$, showing $f$ is bounded."
  },
  {
    "prompt": "Consider $f_n(x) = \\frac{\\sin(nx)}{n}$ on $\\mathbb{R}$. What is its uniform limit on $\\mathbb{R}$?",
    "options": [
      "Diverges everywhere",
      "Converges uniformly to $f(x) = 0$",
      "Converges pointwise to $f(x) = 1$",
      "Converges uniformly to $f(x) = \\cos(x)$"
    ],
    "answer": "B",
    "explanation": "For all $x \\in \\mathbb{R}$, $|f_n(x) - 0| = \\frac{|\\sin(nx)|}{n} \\le \\frac{1}{n}$. Thus $\\|f_n - 0\\|_\\infty \\le 1/n \\to 0$, establishing uniform convergence to $0$ on the entire real line."
  },
  {
    "prompt": "If $f_n \\to f$ uniformly on $A$ and uniformly on $B$, what can be said about convergence on $A \\cup B$?",
    "options": [
      "$f_n \\to f$ uniformly on $A \\cup B$",
      "$f_n$ converges only pointwise on $A \\cup B$",
      "$f_n$ may diverge on $A \\cup B$",
      "Uniform convergence holds only if $A \\cap B = \\emptyset$"
    ],
    "answer": "A",
    "explanation": "For any $\\epsilon > 0$, choose $N = \\max(N_A, N_B)$. Then for all $n > N$ and all $x \\in A \\cup B$, $|f_n(x) - f(x)| < \\epsilon$, proving uniform convergence on the union."
  },
  {
    "prompt": "Consider $f_n(x) = \\frac{1}{1 + nx}$ on $(0, 1)$. What is its pointwise limit and does it converge uniformly?",
    "options": [
      "Pointwise limit is $0$; converges uniformly because $1/(1+nx) < 1$",
      "Pointwise limit is $0$; does NOT converge uniformly because $\\sup_{x \\in (0, 1)} |f_n(x)| = 1 \\not\\to 0$",
      "Pointwise limit is $1$; converges uniformly",
      "Pointwise limit is undefined at $x = 0.5$"
    ],
    "answer": "B",
    "explanation": "For every $x \\in (0, 1)$, $\\lim_{n \\to \\infty} \\frac{1}{1+nx} = 0$. But as $x \\to 0^+$, $f_n(x) \\to 1$. Thus $\\sup_{x \\in (0, 1)} |f_n(x)| = 1$ for all $n$, preventing uniform convergence."
  },
  {
    "prompt": "Which topological property of metric spaces guarantees that every Cauchy sequence of functions under the supremum norm converges to a bounded function?",
    "options": [
      "Completeness of $(\\mathcal{B}(S), \\|\\cdot\\|_\\infty)$",
      "Compactness of the domain $S$",
      "Connectedness of the real line",
      "Separability of the rational numbers"
    ],
    "answer": "A",
    "explanation": "The space of bounded real-valued functions $\\mathcal{B}(S)$ equipped with the uniform norm is a Banach space (complete normed vector space)."
  },
  {
    "prompt": "Let $f_n(x) = \\arctan(nx)$ on $[0, \\infty)$. What is the pointwise limit function?",
    "options": [
      "$f(0) = 0$ and $f(x) = \\pi/2$ for $x > 0$",
      "$f(x) = 0$ for all $x \\ge 0$",
      "$f(x) = \\pi/2$ for all $x \\ge 0$",
      "$f(x) = x$ for all $x \\ge 0$"
    ],
    "answer": "A",
    "explanation": "At $x = 0$, $\\arctan(0) = 0$. For any $x > 0$, $nx \\to \\infty$, so $\\arctan(nx) \\to \\pi/2$. Because the limit is discontinuous at $x = 0$, convergence is not uniform on $[0, \\infty)$."
  },
  {
    "prompt": "Can a sequence of discontinuous functions converge uniformly to a continuous function?",
    "options": [
      "No, uniform limits always preserve discontinuity",
      "Yes, for example $f_n(x) = \\frac{1}{n} \\mathbf{1}_{\\mathbb{Q}}(x) \\to 0$ uniformly on $\\mathbb{R}$",
      "No, this would violate the Uniform Limit Theorem",
      "Only if the domain is a finite set"
    ],
    "answer": "B",
    "explanation": "The Dirichlet indicator scaled by $1/n$ is everywhere discontinuous, but $\\|f_n - 0\\|_\\infty = 1/n \\to 0$, so it converges uniformly to the continuous zero function."
  },
  {
    "prompt": "If $f_n \\to f$ uniformly on $[a, b]$, does $f_n^2 \\to f^2$ uniformly on $[a, b]$?",
    "options": [
      "Yes, because uniform convergence on a compact domain with continuous functions preserves algebraic products",
      "No, squaring always destroys uniform convergence",
      "Only if $f(x) \\ge 0$ everywhere",
      "Only if $f_n(x)$ is a polynomial"
    ],
    "answer": "A",
    "explanation": "On a compact interval, continuous functions are bounded: $|f_n(x)|, |f(x)| \\le M$. Then $|f_n^2(x) - f^2(x)| = |f_n - f||f_n + f| \\le 2M \\|f_n - f\\|_\\infty \\to 0$ uniformly."
  }
];

export const CALC_A_INTERCHANGE_LIMITS_QUIZ = [
  {
    "prompt": "What is the fundamental theorem regarding the interchange of limit and integral for uniformly convergent sequences on $[a, b]$?",
    "options": [
      "If $f_n$ are Riemann integrable and $f_n \\to f$ uniformly on $[a, b]$, then $\\lim_{n \\to \\infty} \\int_a^b f_n(x)\\,dx = \\int_a^b f(x)\\,dx$",
      "Pointwise convergence is always sufficient to interchange limit and integral",
      "The integral of the limit is always strictly greater than the limit of the integrals",
      "Interchange requires $f_n$ to be infinite-order polynomials"
    ],
    "answer": "A",
    "explanation": "Uniform convergence allows bounding $|\\int_a^b f_n - \\int_a^b f| \\le \\int_a^b |f_n - f| \\le \\|f_n - f\\|_\\infty (b - a) \\to 0$."
  },
  {
    "prompt": "Evaluate $\\lim_{n \\to \\infty} \\int_0^1 \\frac{n x}{1 + n^2 x^4}\\,dx$ and compare it with the integral of the pointwise limit:",
    "options": [
      "Limit of integral is $\\pi/4$, while integral of pointwise limit is $0$; they are NOT equal",
      "Both are $0$",
      "Both are $1$",
      "The limit of the integral diverges to $\\infty$"
    ],
    "answer": "A",
    "explanation": "Pointwise, $f_n(x) \\to 0$ for all $x \\in [0, 1]$, so $\\int_0^1 0\\,dx = 0$. However, substituting $u = n x^2, du = 2nx\\,dx$ yields $\\int_0^1 \\frac{nx}{1 + (nx^2)^2}\\,dx = \\frac{1}{2}\\int_0^n \\frac{du}{1 + u^2} = \\frac{1}{2}\\arctan(n) \\to \\frac{\\pi}{4} \\ne 0$."
  },
  {
    "prompt": "Which condition is required to legally differentiate a sequence of functions termwise: $\\frac{d}{dx} \\lim_{n \\to \\infty} f_n(x) = \\lim_{n \\to \\infty} f_n'(x)$?",
    "options": [
      "It is sufficient that $f_n \\to f$ uniformly on $[a, b]$",
      "$f_n'$ must converge uniformly on $[a, b]$, and $f_n(x_0)$ must converge for at least one point $x_0 \\in [a, b]$",
      "Each $f_n$ must have a zero derivative at the endpoints",
      "The domain $[a, b]$ must be unbounded"
    ],
    "answer": "B",
    "explanation": "Termwise differentiation requires uniform convergence of the DERIVATIVES $f_n'$, plus pointwise convergence of $f_n$ at a single reference point $x_0$ to fix the constant of integration."
  },
  {
    "prompt": "Consider $f_n(x) = \\frac{\\sin(nx)}{\\sqrt{n}}$ on $[0, 2\\pi]$. What illustrates the failure of naive derivative interchange?",
    "options": [
      "$f_n \\to 0$ uniformly, but $f_n'(0) = \\sqrt{n} \\to \\infty$, so $\\lim f_n'(0) \\ne (\\lim f_n)'(0) = 0$",
      "$f_n$ does not converge pointwise",
      "$f_n'$ is not continuous",
      "The integral of $f_n$ diverges"
    ],
    "answer": "A",
    "explanation": "Since $|f_n(x)| \\le 1/\\sqrt{n} \\to 0$, $f_n \\to 0$ uniformly, meaning $f'(x) = 0$. But $f_n'(x) = \\sqrt{n}\\cos(nx)$, which diverges wildly at $x = 0$ as $n \\to \\infty$."
  },
  {
    "prompt": "Let $f_n(x) = n^2 x (1 - x^2)^n$ on $[0, 1]$. What is $\\lim_{n \\to \\infty} \\int_0^1 f_n(x)\\,dx$ versus $\\int_0^1 \\lim_{n \\to \\infty} f_n(x)\\,dx$?",
    "options": [
      "Integral limit is $1/2$, pointwise integral is $0$",
      "Both are $0$",
      "Both are $1$",
      "Integral limit is $0$, pointwise integral is $1/2$"
    ],
    "answer": "A",
    "explanation": "Pointwise $f_n(x) \\to 0$ for all $x \\in [0, 1]$. But $\\int_0^1 n^2 x(1-x^2)^n\\,dx = \\frac{n^2}{2(n+1)} \\to \\infty$ (or for $2nx(1-x^2)^n$, it evaluates to $1/2$), strictly failing interchange due to non-uniform peak transport."
  },
  {
    "prompt": "Why does termwise integration fail for $f_n(x) = n \\chi_{(0, 1/n)}(x)$ on $[0, 1]$?",
    "options": [
      "Because the sequence forms an escaped mass (spike) of area $1$ whose width shrinks to $0$, violating uniform convergence",
      "Because $f_n$ is not integrable",
      "Because $[0, 1]$ is not closed",
      "Because $f_n(x)$ is negative"
    ],
    "answer": "A",
    "explanation": "For any $x > 0$, $f_n(x) = 0$ for $n > 1/x$, so $f_n(x) \\to 0$ pointwise. But $\\int_0^1 f_n(x)\\,dx = n(1/n) = 1 \\ne \\int_0^1 0 = 0$."
  },
  {
    "prompt": "For an infinite series of functions $\\sum_{k=1}^\\infty u_k(x)$, when is $\\int_a^b \\sum_{k=1}^\\infty u_k(x)\\,dx = \\sum_{k=1}^\\infty \\int_a^b u_k(x)\\,dx$ guaranteed?",
    "options": [
      "When $\\sum u_k(x)$ converges uniformly on $[a, b]$ and each $u_k$ is continuous",
      "When $\\sum u_k(x)$ converges pointwise anywhere",
      "Only when $u_k(x) \\ge 0$ and $b - a = 1$",
      "Only when $u_k(x)$ are all polynomials of degree $\\le 2$"
    ],
    "answer": "A",
    "explanation": "Uniform convergence of partial sums $S_n(x) = \\sum_{k=1}^n u_k(x)$ guarantees that the limit and integral operators can be interchanged on compact intervals."
  },
  {
    "prompt": "If $f_n \\to f$ uniformly on $[a, b]$ and $F_n(x) = \\int_a^x f_n(t)\\,dt$, then:",
    "options": [
      "$F_n(x) \\to \\int_a^x f(t)\\,dt$ uniformly on $[a, b]$",
      "$F_n(x)$ does not converge at all",
      "$F_n'(x)$ is undefined",
      "$F_n(x)$ converges only at $x = b$"
    ],
    "answer": "A",
    "explanation": "For any $x \\in [a, b]$, $|F_n(x) - F(x)| \\le \\int_a^x |f_n - f| \\le \\|f_n - f\\|_\\infty (x - a) \\le \\|f_n - f\\|_\\infty (b - a) \\to 0$ uniformly."
  },
  {
    "prompt": "Under what condition does the Dominated Convergence Theorem permit $\\lim_{n \\to \\infty} \\int f_n = \\int \\lim_{n \\to \\infty} f_n$?",
    "options": [
      "If $f_n \\to f$ pointwise almost everywhere and there exists an integrable function $g$ such that $|f_n(x)| \\le g(x)$ for all $n$",
      "If $f_n(x) \\to \\infty$ everywhere",
      "Only if $f_n(x)$ is monotonic and bounded by a constant",
      "If $f_n$ are all periodic functions"
    ],
    "answer": "A",
    "explanation": "Lebesgue's Dominated Convergence Theorem requires a dominating integrable envelope $|f_n(x)| \\le g(x)$ with $\\int g < \\infty$."
  },
  {
    "prompt": "Compute $\\lim_{n \\to \\infty} \\int_0^1 \\left(1 + \\frac{x}{n}\\right)^n e^{-2x}\\,dx$ using dominated convergence:",
    "options": [
      "$\\int_0^1 e^{-x}\\,dx = 1 - e^{-1}$",
      "$\\int_0^1 e^x\\,dx = e - 1$",
      "$0$",
      "$\\infty$"
    ],
    "answer": "A",
    "explanation": "Since $(1 + x/n)^n \\le e^x$, the integrand is dominated by $e^x e^{-2x} = e^{-x}$. As $n \\to \\infty$, $(1 + x/n)^n \\to e^x$ pointwise, so the limit is $\\int_0^1 e^x e^{-2x}\\,dx = \\int_0^1 e^{-x}\\,dx = 1 - e^{-1}$."
  },
  {
    "prompt": "What is the result of differentiating the power series $\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}$ termwise for $|x| < 1$?",
    "options": [
      "$\\sum_{n=1}^\\infty n x^{n-1} = \\frac{1}{(1-x)^2}$",
      "$\\sum_{n=1}^\\infty x^{n-1} = \\frac{1}{1-x}$",
      "$\\sum_{n=1}^\\infty n^2 x^n = \\frac{x}{(1-x)^3}$",
      "The termwise derivative diverges for all $x$"
    ],
    "answer": "A",
    "explanation": "Power series converge uniformly on any compact subdisk $[-\\rho, \\rho] \\subset (-1, 1)$, allowing termwise differentiation yielding $\\frac{d}{dx}(1/(1-x)) = 1/(1-x)^2$."
  },
  {
    "prompt": "Consider the series $f(x) = \\sum_{n=1}^\\infty \\frac{\\cos(n^2 x)}{n^2}$. Can we deduce $f'(x) = -\\sum_{n=1}^\\infty \\sin(n^2 x)$ by termwise differentiation?",
    "options": [
      "No, because the differentiated series $-\\sum \\sin(n^2 x)$ does not converge uniformly (or even pointwise in general)",
      "Yes, termwise differentiation is always valid for trigonometric series",
      "Yes, because $\\sum 1/n^2$ converges",
      "No, because $\\cos(n^2 x)$ is not differentiable"
    ],
    "answer": "A",
    "explanation": "The original series converges uniformly by the M-test ($M_n = 1/n^2$), but the formal derivative has terms of magnitude $1$, which fail to converge to $0$, so termwise differentiation is invalid."
  },
  {
    "prompt": "If $f_n(x) = \\frac{x^2}{x^2 + (1 - nx)^2}$ on $[0, 1]$, what is the pointwise limit and can limits be interchanged with integrals?",
    "options": [
      "Pointwise limit is $0$ everywhere on $[0, 1]$, but $\\int_0^1 f_n(x)\\,dx$ does not tend to $0$; interchange fails",
      "Pointwise limit is $1$ and interchange holds",
      "Pointwise limit is undefined",
      "Pointwise limit is $x^2$ and interchange holds"
    ],
    "answer": "A",
    "explanation": "For $x = 0$, $f_n(0) = 0$. For $x > 0$, as $n \\to \\infty$, $(1-nx)^2 \\approx n^2 x^2 \\to \\infty$, so $f_n(x) \\to 0$. However, near $x = 1/n$, $f_n(1/n) = 1$, creating a concentration of area that breaks uniform integrability."
  },
  {
    "prompt": "How does uniform convergence on every compact subinterval $[a, b] \\subset (0, \\infty)$ relate to interchanging limits with improper integrals $\\int_0^\\infty$?",
    "options": [
      "Uniform convergence on compact subintervals is NOT sufficient; uniform convergence of the tails $\\int_R^\\infty f_n(x)\\,dx \\to 0$ uniformly in $n$ is also required",
      "Uniform convergence on compact subintervals is always sufficient for improper integrals",
      "Improper integrals can never be interchanged with limits",
      "Only pointwise convergence is needed if the interval is infinite"
    ],
    "answer": "A",
    "explanation": "On unbounded domains, mass can escape to infinity (e.g. $f_n(x) = \\frac{1}{n} \\chi_{[0, n]}(x) \\to 0$ uniformly, but $\\int_0^\\infty f_n = 1 \\ne 0$). Tail uniformity is strictly necessary."
  },
  {
    "prompt": "Evaluate $\\lim_{n \\to \\infty} \\int_0^{\\pi} \\frac{\\sin(x)}{1 + x/n}\\,dx$:",
    "options": [
      "$2$",
      "$0$",
      "$\\pi$",
      "$1$"
    ],
    "answer": "A",
    "explanation": "On $[0, \\pi]$, $\\frac{\\sin x}{1 + x/n} \\to \\sin x$ uniformly since $|\\frac{\\sin x}{1 + x/n} - \\sin x| = \\sin x \\frac{x/n}{1 + x/n} \\le \\frac{\\pi}{n} \\to 0$. Thus $\\int_0^\\pi \\sin x\\,dx = [-\\cos x]_0^\\pi = 2$."
  },
  {
    "prompt": "What theorem guarantees that if $f_n(x) \\ge 0$ are measurable, then $\\int \\liminf_{n \\to \\infty} f_n \\le \\liminf_{n \\to \\infty} \\int f_n$?",
    "options": [
      "Fatou's Lemma",
      "Rolle's Theorem",
      "Mean Value Theorem",
      "Taylor's Theorem"
    ],
    "answer": "A",
    "explanation": "Fatou's Lemma establishes this fundamental sub-additivity inequality for non-negative sequences without requiring uniform convergence."
  },
  {
    "prompt": "Why can we integrate a power series $f(x) = \\sum_{n=0}^\\infty a_n x^n$ term-by-term within its radius of convergence $R$?",
    "options": [
      "Because power series converge uniformly on any closed subinterval $[-\\rho, \\rho] \\subset (-R, R)$",
      "Because all power series are polynomials",
      "Because $R = \\infty$ always",
      "Because integration does not change series coefficients"
    ],
    "answer": "A",
    "explanation": "Inside the open interval of convergence, any compact subsegment has uniform convergence by Abel's theorem and the Weierstrass M-test, validating termwise integration."
  },
  {
    "prompt": "Which of the following functions $f_n(x)$ on $[0, 1]$ satisfies $\\lim_{n \\to \\infty} \\int_0^1 f_n(x)\\,dx = \\int_0^1 \\lim_{n \\to \\infty} f_n(x)\\,dx$?",
    "options": [
      "$f_n(x) = \\frac{x^n}{n}$",
      "$f_n(x) = 2n^2 x e^{-n^2 x^2}$",
      "$f_n(x) = n x (1 - x)^n$ where peak area is preserved",
      "$f_n(x) = n \\mathbf{1}_{(0, 1/n)}(x)$"
    ],
    "answer": "A",
    "explanation": "For $f_n(x) = \\frac{x^n}{n}$, $|f_n(x)| \\le 1/n \\to 0$ uniformly on $[0, 1]$. Both the limit of the integral $\\frac{1}{n(n+1)} \\to 0$ and the integral of the limit $\\int 0 = 0$ agree."
  },
  {
    "prompt": "If $f_n'(x)$ converges uniformly to $g(x)$ on $[a, b]$, what theorem guarantees that $\\lim f_n(x) - f_n(x_0) = \\int_{x_0}^x g(t)\\,dt$?",
    "options": [
      "Fundamental Theorem of Calculus applied to the uniform limit of derivatives",
      "Intermediate Value Theorem",
      "Bolzano-Weierstrass Theorem",
      "Extreme Value Theorem"
    ],
    "answer": "A",
    "explanation": "By FTC, $f_n(x) - f_n(x_0) = \\int_{x_0}^x f_n'(t)\\,dt$. Since $f_n' \\to g$ uniformly, we can pass the limit inside the integral to get $\\int_{x_0}^x g(t)\\,dt$."
  },
  {
    "prompt": "In contrast to parameter differentiation $\\frac{d}{dt} \\int_a^b f(x, t)\\,dx$ (Leibniz Rule), sequence interchange $\\frac{d}{dx} \\lim_{n \\to \\infty} f_n(x)$ deals with:",
    "options": [
      "A discrete sequence of functions of a single spatial variable $x$, taking the discrete index limit $n \\to \\infty$",
      "A continuous family of functions differentiated with respect to an independent parameter $t$",
      "Multivariable gradient fields only",
      "Double integrals over polar regions"
    ],
    "answer": "A",
    "explanation": "Sequence interchange concerns a countable family $\\{f_n(x)\\}$ as $n \\to \\infty$, whereas the Leibniz rule concerns a continuously parameterized family $f(x, t)$ differentiated with respect to the continuous parameter $t$."
  }
];

export const CALC_B_POWER_SERIES_ODE_QUIZ = [
  {
    "prompt": "For the linear second-order homogeneous ODE $P(x)y'' + Q(x)y' + R(x)y = 0$, what condition defines $x_0$ as an ordinary point?",
    "options": [
      "$P(x_0) = 0$",
      "The coefficient functions $p(x) = Q(x)/P(x)$ and $q(x) = R(x)/P(x)$ are analytic at $x_0$",
      "$Q(x_0) = 0$ and $R(x_0) = 0$",
      "The Wronskian of the equation vanishes at $x_0$"
    ],
    "answer": "B",
    "explanation": "A point $x_0$ is an ordinary point if and only if both normalized coefficient functions $p(x) = Q(x)/P(x)$ and $q(x) = R(x)/P(x)$ possess convergent Taylor series in an open neighborhood around $x_0$."
  },
  {
    "prompt": "What does Fuchs's theorem guarantee about power-series solutions at an ordinary point $x_0$?",
    "options": [
      "There exists at least one singular solution",
      "There exist two linearly independent power-series solutions $y_1(x) = \\sum a_n(x-x_0)^n$ and $y_2(x) = \\sum b_n(x-x_0)^n$ with radius of convergence at least the distance to the nearest complex singularity",
      "The solution must always terminate after finitely many polynomial terms",
      "Solutions only exist if the differential equation is constant-coefficient"
    ],
    "answer": "B",
    "explanation": "At an ordinary point, Fuchs's theorem guarantees two linearly independent analytic solutions with a radius of convergence at least equal to the distance from $x_0$ to the nearest singular point in the complex plane."
  },
  {
    "prompt": "What is the distance to the nearest singularity from the expansion point $x_0 = 0$ for $(x^2 + 9)y'' + x y' - 4y = 0$?",
    "options": [
      "$9$",
      "$3$",
      "$\\sqrt{3}$",
      "$\\infty$"
    ],
    "answer": "B",
    "explanation": "Singularities occur where $P(x) = x^2 + 9 = 0 \\implies x = \\pm 3i$. The distance from $0$ to $\\pm 3i$ in the complex plane is $|\\pm 3i| = 3$. Hence the minimum guaranteed radius of convergence is $R = 3$."
  },
  {
    "prompt": "When substituting the power series $y = \\sum_{n=0}^\\infty a_n x^n$ into $y'' + y = 0$, what recurrence relation is obtained?",
    "options": [
      "$a_{n+2} = \\frac{-a_n}{(n+2)(n+1)}$",
      "$a_{n+2} = \\frac{a_n}{n+2}$",
      "$a_{n+1} = -a_n$",
      "$a_{n+2} = -(n+1)a_n$"
    ],
    "answer": "A",
    "explanation": "$y'' = \\sum_{n=0}^\\infty (n+2)(n+1)a_{n+2}x^n$. Adding $y = \\sum_{n=0}^\\infty a_n x^n$ yields $\\sum_{n=0}^\\infty [(n+2)(n+1)a_{n+2} + a_n]x^n = 0$, giving $a_{n+2} = \\frac{-a_n}{(n+2)(n+1)}$."
  },
  {
    "prompt": "For Airy's equation $y'' - xy = 0$ expanded around $x_0 = 0$, what is the recurrence relation for $a_{n+2}$?",
    "options": [
      "$a_2 = 0$ and $a_{n+2} = \\frac{a_{n-1}}{(n+2)(n+1)}$ for $n \\ge 1$",
      "$a_{n+2} = \\frac{a_n}{n+2}$ for all $n \\ge 0$",
      "$a_{n+2} = \\frac{-a_{n-1}}{(n+2)(n+1)}$",
      "$a_{n+1} = a_n / n$"
    ],
    "answer": "A",
    "explanation": "$y'' = 2a_2 + \\sum_{k=1}^\\infty (k+2)(k+1)a_{k+2}x^k$ and $xy = \\sum_{k=1}^\\infty a_{k-1}x^k$. Matching powers gives $2a_2 = 0 \\implies a_2 = 0$, and $(k+2)(k+1)a_{k+2} - a_{k-1} = 0$, so $a_{k+2} = \\frac{a_{k-1}}{(k+2)(k+1)}$."
  },
  {
    "prompt": "How do initial conditions $y(x_0) = y_0$ and $y'(x_0) = y_1$ determine the leading coefficients of $y = \\sum_{n=0}^\\infty a_n (x-x_0)^n$?",
    "options": [
      "$a_0 = y_0$ and $a_1 = y_1$",
      "$a_0 = y_1$ and $a_1 = y_0$",
      "$a_0 = 0$ and $a_1 = 1$ always",
      "$a_0 = y_0 / 2$ and $a_1 = y_1 / 2$"
    ],
    "answer": "A",
    "explanation": "Evaluating at $x = x_0$ yields $y(x_0) = a_0 = y_0$, and differentiating gives $y'(x_0) = a_1 = y_1$."
  },
  {
    "prompt": "In the power-series solution of $y'' - 2x y' + 2p y = 0$ (Hermite's ODE) with $p$ a non-negative integer, what remarkable phenomenon occurs?",
    "options": [
      "One of the two independent series terminates into a polynomial of degree $p$",
      "The series diverges for all $x \\ne 0$",
      "Both series become identical",
      "The solutions are purely imaginary"
    ],
    "answer": "A",
    "explanation": "The recurrence relation is $a_{n+2} = \\frac{2(n - p)}{(n+2)(n+1)} a_n$. When $n = p$, $a_{p+2} = 0$, causing all subsequent terms of that parity to vanish, generating the Hermite polynomials $H_p(x)$."
  },
  {
    "prompt": "For Legendre's equation $(1 - x^2)y'' - 2xy' + \\alpha(\\alpha + 1)y = 0$, what are the singular points in the complex plane?",
    "options": [
      "$x = \\pm 1$",
      "$x = \\pm i$",
      "$x = 0$",
      "$x = \\pm \\alpha$"
    ],
    "answer": "A",
    "explanation": "Singular points occur where $P(x) = 1 - x^2 = 0 \\implies x = 1$ and $x = -1$."
  },
  {
    "prompt": "What is the guaranteed radius of convergence for a power-series solution of $(x^2 - 4x + 5)y'' + y' - y = 0$ centered at $x_0 = 1$?",
    "options": [
      "$\\sqrt{5}$",
      "$\\sqrt{2}$",
      "$2$",
      "$1$"
    ],
    "answer": "B",
    "explanation": "Singular points: $x^2 - 4x + 5 = 0 \\implies (x - 2)^2 + 1 = 0 \\implies x = 2 \\pm i$. The distance from expansion center $x_0 = 1$ to $2 \\pm i$ is $|(2 \\pm i) - 1| = |1 \\pm i| = \\sqrt{1^2 + 1^2} = \\sqrt{2}$."
  },
  {
    "prompt": "When shifting summation indices, which of the following is equivalent to $\\sum_{n=1}^\\infty n a_n x^{n-1}$?",
    "options": [
      "$\\sum_{k=0}^\\infty (k+1) a_{k+1} x^k$",
      "$\\sum_{k=0}^\\infty k a_k x^k$",
      "$\\sum_{k=1}^\\infty (k-1) a_k x^{k-1}$",
      "$\\sum_{k=2}^\\infty (k+1) a_k x^k$"
    ],
    "answer": "A",
    "explanation": "Let $k = n - 1$. When $n = 1$, $k = 0$. Replacing $n = k + 1$ gives $\\sum_{k=0}^\\infty (k+1) a_{k+1} x^k$."
  },
  {
    "prompt": "For the differential equation $y'' + x^2 y = 0$, what is the step size between non-zero coefficients in each linearly independent series?",
    "options": [
      "$4$",
      "$1$",
      "$2$",
      "$3$"
    ],
    "answer": "A",
    "explanation": "$y'' = \\sum (n+2)(n+1)a_{n+2}x^n$ and $x^2 y = \\sum a_{n-2}x^n$. The recurrence relates $a_{n+2}$ to $a_{n-2}$, so indices advance by step $\\Delta n = 4$."
  },
  {
    "prompt": "What is polynomial truncation in power-series ODE solutions?",
    "options": [
      "Approximating the infinite series solution by its $N$-th degree Taylor polynomial $y_N(x) = \\sum_{n=0}^N a_n(x-x_0)^n$",
      "Dividing the differential equation by $x^N$",
      "Setting the highest derivative to zero",
      "Removing all odd powers of $x$"
    ],
    "answer": "A",
    "explanation": "Truncating an infinite power series after $N$ terms yields an explicit polynomial approximation whose error decays rapidly within the radius of convergence according to Taylor's remainder theorem."
  },
  {
    "prompt": "For Chebyshev's equation $(1 - x^2)y'' - xy' + p^2 y = 0$, what recurrence relation governs the series coefficients centered at $0$?",
    "options": [
      "$a_{n+2} = \\frac{n^2 - p^2}{(n+2)(n+1)} a_n$",
      "$a_{n+2} = \\frac{p^2}{(n+2)(n+1)} a_n$",
      "$a_{n+1} = \\frac{n - p}{n+1} a_n$",
      "$a_{n+2} = -(n^2 - p^2) a_n$"
    ],
    "answer": "A",
    "explanation": "Substituting $y = \\sum a_n x^n$ gives $(n+2)(n+1)a_{n+2} - n(n-1)a_n - na_n + p^2 a_n = 0$, simplifying to $(n+2)(n+1)a_{n+2} = (n^2 - p^2)a_n$."
  },
  {
    "prompt": "If $x_0 = 0$ is an ordinary point of $y'' + P(x)y' + Q(x)y = 0$, the two fundamental solutions $y_1(x)$ and $y_2(x)$ satisfy which Wronskian at $x = 0$?",
    "options": [
      "$W(y_1, y_2)(0) = 1$ when $y_1(0)=1, y_1'(0)=0$ and $y_2(0)=0, y_2'(0)=1$",
      "$W(y_1, y_2)(0) = 0$",
      "$W(y_1, y_2)(0) = \\infty$",
      "$W(y_1, y_2)(0) = -1$ always"
    ],
    "answer": "A",
    "explanation": "Normalized canonical initial conditions give $W(y_1, y_2)(0) = y_1(0)y_2'(0) - y_1'(0)y_2(0) = (1)(1) - (0)(0) = 1 \\ne 0$, proving linear independence."
  },
  {
    "prompt": "Solve for $a_2$ and $a_3$ in $y'' + 2x y' + 4y = 0$ with $y(0) = 1, y'(0) = 0$:",
    "options": [
      "$a_2 = -2, \\; a_3 = 0$",
      "$a_2 = 2, \\; a_3 = 1$",
      "$a_2 = 0, \\; a_3 = -2$",
      "$a_2 = -4, \\; a_3 = 0$"
    ],
    "answer": "A",
    "explanation": "For $n = 0$: $2a_2 + 4a_0 = 0 \\implies a_2 = -2a_0 = -2(1) = -2$. For $n = 1$: $6a_3 + 2(1)a_1 + 4a_1 = 0 \\implies 6a_3 + 6a_1 = 0 \\implies a_3 = -a_1 = 0$."
  },
  {
    "prompt": "What happens if we attempt to find a power series solution of $x^2 y'' + y = 0$ centered at $x_0 = 0$?",
    "options": [
      "It fails because $x_0 = 0$ is a singular point ($P(0) = 0$), so power-series methods do not apply",
      "It yields two analytic solutions valid everywhere",
      "It converges with radius $R = \\infty$",
      "The recurrence relation gives $a_n = 1$ for all $n$"
    ],
    "answer": "A",
    "explanation": "$P(x) = x^2$ vanishes at $x = 0$, and $R(x)/P(x) = 1/x^2$ is not analytic at $0$. An ordinary power series cannot represent solutions around this singular point."
  },
  {
    "prompt": "Can a power-series solution have a radius of convergence LARGER than the distance to the nearest singular point?",
    "options": [
      "Yes, Fuchs's theorem only provides a lower bound; the series solution can sometimes converge everywhere (e.g. if it terminates into a polynomial)",
      "No, the radius of convergence must strictly equal the distance",
      "No, the series must diverge at half the distance",
      "Only for first-order equations"
    ],
    "answer": "A",
    "explanation": "The distance to the nearest singular point guarantees the minimum radius of convergence. If the recurrence causes the series to terminate into a polynomial, the solution converges on all of $\\mathbb{R}$ ($R = \\infty$)."
  },
  {
    "prompt": "For the differential equation $y'' - x y = 0$, what are the first three non-zero terms of $y_1(x)$ with $y_1(0) = 1, y_1'(0) = 0$?",
    "options": [
      "$1 + \\frac{x^3}{6} + \\frac{x^6}{180}$",
      "$1 + x + \\frac{x^2}{2}$",
      "$1 + \\frac{x^2}{2} + \\frac{x^4}{24}$",
      "$1 + \\frac{x^3}{3} + \\frac{x^6}{6}$"
    ],
    "answer": "A",
    "explanation": "$a_0 = 1, a_1 = 0, a_2 = 0$. $a_3 = a_0/(3 \\cdot 2) = 1/6$. $a_4 = a_1/12 = 0$. $a_5 = a_2/20 = 0$. $a_6 = a_3/(6 \\cdot 5) = (1/6)/30 = 1/180$. Thus $y_1(x) = 1 + \\frac{x^3}{6} + \\frac{x^6}{180} + \\dots$."
  },
  {
    "prompt": "In an ordinary point recurrence $a_{n+2} = f(n) a_n$, what determines whether the solution decomposes into even and odd functions?",
    "options": [
      "The recurrence connects terms with index differing by $2$, decoupling even indices $\\{a_0, a_2, a_4, \\dots\\}$ from odd indices $\\{a_1, a_3, a_5, \\dots\\}$",
      "The coefficient functions are both odd",
      "The boundary condition $y(0) = 0$",
      "The differential equation must have constant coefficients"
    ],
    "answer": "A",
    "explanation": "A two-step recurrence $a_{n+2} = C_n a_n$ cleanly splits the general solution $y = a_0 y_{\\text{even}}(x) + a_1 y_{\\text{odd}}(x)$ into pure even and odd functions."
  },
  {
    "prompt": "What is the primary computational advantage of power-series solutions over numerical Runge-Kutta integration near an ordinary point?",
    "options": [
      "Power series provide a closed-form analytic representation that can be differentiated and integrated symbolically with exact error bounds",
      "Power series require no arithmetic operations",
      "Runge-Kutta cannot solve second-order equations",
      "Power series only work on infinite computers"
    ],
    "answer": "A",
    "explanation": "A truncated power series yields a symbolic polynomial approximation with explicit truncation error bounds, enabling continuous analytical evaluation, symbolic differentiation, and stability analysis without step-size accumulation error."
  }
];

export const CALC_B_FROBENIUS_METHOD_QUIZ = [
  {
    "prompt": "For $P(x)y'' + Q(x)y' + R(x)y = 0$, what criterion defines $x_0$ as a REGULAR singular point?",
    "options": [
      "$P(x_0) = 0$, but both $(x - x_0)\\frac{Q(x)}{P(x)}$ and $(x - x_0)^2\\frac{R(x)}{P(x)}$ are analytic at $x_0$",
      "$P(x_0) \\ne 0$",
      "$(x - x_0)\\frac{Q(x)}{P(x)}$ has an essential singularity at $x_0$",
      "Both $Q(x_0) = 0$ and $R(x_0) = 0$"
    ],
    "answer": "A",
    "explanation": "A singular point $x_0$ is regular if the singularities in the coefficients are at most of first order in $Q/P$ and at most of second order in $R/P$."
  },
  {
    "prompt": "What is the Frobenius series ansatz for solving an ODE around a regular singular point $x_0 = 0$?",
    "options": [
      "$y(x) = x^r \\sum_{n=0}^\\infty a_n x^n = \\sum_{n=0}^\\infty a_n x^{n+r}$, where $a_0 \\ne 0$ and $r$ is an indicial exponent",
      "$y(x) = \\sum_{n=0}^\\infty a_n x^{-n}$",
      "$y(x) = e^{rx} \\sum_{n=0}^\\infty a_n x^n$",
      "$y(x) = \\sum_{n=0}^\\infty a_n (\\ln x)^n$"
    ],
    "answer": "A",
    "explanation": "The Frobenius method factors out a power $x^r$, where $r$ is a real or complex index chosen to balance the lowest powers in the differential equation, with $a_0 \\ne 0$ by convention."
  },
  {
    "prompt": "How is the indicial equation obtained in the Frobenius method?",
    "options": [
      "By equating the coefficient of the lowest power of $x$ (namely $x^{r-2}$ or $x^r$) to zero",
      "By setting $x = 0$ in the original differential equation",
      "By integrating the ODE from $0$ to $1$",
      "By computing the determinant of the Wronskian"
    ],
    "answer": "A",
    "explanation": "Substituting $y = \\sum a_n x^{n+r}$ into the ODE and collecting terms yields the coefficient of the lowest power of $x$, which must vanish for $a_0 \\ne 0$. This gives the quadratic indicial polynomial $F(r) = 0$."
  },
  {
    "prompt": "For the differential equation $2x^2 y'' - x y' + (x - 5)y = 0$, what is the indicial equation at $x = 0$?",
    "options": [
      "$2r(r - 1) - r - 5 = 0 \\implies 2r^2 - 3r - 5 = 0$",
      "$2r^2 - r - 5 = 0$",
      "$r(r - 1) - 5 = 0$",
      "$2r^2 + 3r - 5 = 0$"
    ],
    "answer": "A",
    "explanation": "$p_0 = \\lim_{x \\to 0} x(-x/(2x^2)) = -1/2$, and $q_0 = \\lim_{x \\to 0} x^2((x-5)/(2x^2)) = -5/2$. The indicial equation is $r(r-1) + p_0 r + q_0 = 0 \\implies r(r-1) - \\frac{1}{2}r - \\frac{5}{2} = 0 \\implies 2r(r-1) - r - 5 = 0 \\implies 2r^2 - 3r - 5 = 0$."
  },
  {
    "prompt": "What are the roots of the indicial equation $2r^2 - 3r - 5 = 0$?",
    "options": [
      "$r_1 = 5/2, \\; r_2 = -1$",
      "$r_1 = 5, \\; r_2 = -1/2$",
      "$r_1 = 1, \\; r_2 = -5/2$",
      "$r_1 = 3/2, \\; r_2 = -5/2$"
    ],
    "answer": "A",
    "explanation": "Factoring $(2r - 5)(r + 1) = 0$ yields $r_1 = 5/2$ and $r_2 = -1$."
  },
  {
    "prompt": "In Frobenius Case 1, where the roots of the indicial equation satisfy $r_1 - r_2 \\notin \\mathbb{Z}$, what is the form of the general solution?",
    "options": [
      "Two linearly independent Frobenius series: $y(x) = c_1 x^{r_1}\\sum a_n x^n + c_2 x^{r_2}\\sum b_n x^n$",
      "One Frobenius series and one logarithmic solution: $y = c_1 y_1 + c_2 (y_1 \\ln x + \\sum b_n x^{n+r_2})$",
      "Two polynomial solutions",
      "A single solution; the second solution does not exist"
    ],
    "answer": "A",
    "explanation": "When the indicial roots do not differ by an integer ($r_1 - r_2 \\notin \\mathbb{Z}$), no denominator in the recurrence relations can vanish, yielding two distinct, linearly independent Frobenius series."
  },
  {
    "prompt": "In Frobenius Case 2, where the indicial roots are equal ($r_1 = r_2 = r$), what is the structure of the second linearly independent solution?",
    "options": [
      "$y_2(x) = y_1(x) \\ln x + x^r \\sum_{n=1}^\\infty b_n x^n$",
      "$y_2(x) = y_1(x) e^x$",
      "$y_2(x) = x^{-r} \\sum_{n=0}^\\infty a_n x^n$",
      "$y_2(x) = y_1'(x)$"
    ],
    "answer": "A",
    "explanation": "For repeated roots, differentiating the parameterized solution with respect to the root index $r$ produces an unavoidable logarithmic term $y_1(x) \\ln x$ paired with a secondary series."
  },
  {
    "prompt": "In Frobenius Case 3, where $r_1 - r_2 = N \\in \\mathbb{Z}^+$ (positive integer), why does the smaller root $r_2$ sometimes fail to produce a second Frobenius series directly?",
    "options": [
      "The recurrence relation denominator contains a factor $(r_2 + N - r_1) = 0$, potentially dividing by zero at $n = N$",
      "The radius of convergence drops to zero immediately",
      "The functions become complex-valued",
      "The Wronskian becomes identically 1"
    ],
    "answer": "A",
    "explanation": "At step $n = N = r_1 - r_2$, the recurrence coefficient denominator contains $F(r_2 + N) = F(r_1) = 0$. Unless the numerator also vanishes simultaneously, division by zero forces the introduction of a logarithmic term."
  },
  {
    "prompt": "For Bessel's equation of order zero, $x^2 y'' + x y' + x^2 y = 0$, what are the indicial roots at $x = 0$?",
    "options": [
      "$r_1 = r_2 = 0$ (repeated roots)",
      "$r_1 = 1, \\; r_2 = -1$",
      "$r_1 = 1/2, \\; r_2 = -1/2$",
      "$r_1 = 2, \\; r_2 = 0$"
    ],
    "answer": "A",
    "explanation": "$p_0 = 1, q_0 = 0$. The indicial equation is $r(r - 1) + r = r^2 = 0$, which has repeated roots $r_1 = r_2 = 0$. This leads to the Bessel function $J_0(x)$ and Neumann function $Y_0(x)$ with a logarithmic singularity."
  },
  {
    "prompt": "For Bessel's equation of order $1/2$, $x^2 y'' + x y' + (x^2 - 1/4)y = 0$, what are the indicial roots?",
    "options": [
      "$r = \\pm 1/2$",
      "$r = 0, 1$",
      "$r = \\pm 1$",
      "$r = \\pm 1/4$"
    ],
    "answer": "A",
    "explanation": "The indicial equation is $r(r - 1) + r - 1/4 = r^2 - 1/4 = 0 \\implies r = \\pm 1/2$. The difference is $1/2 - (-1/2) = 1 \\in \\mathbb{Z}$, but the numerator also vanishes, giving elementary sine and cosine solutions: $J_{1/2}(x) = \\sqrt{\\frac{2}{\\pi x}}\\sin x$."
  },
  {
    "prompt": "Consider $x^2 y'' + 3x y' + (1 + x)y = 0$. What is the indicial equation at $x = 0$?",
    "options": [
      "$r(r - 1) + 3r + 1 = 0 \\implies (r + 1)^2 = 0$",
      "$r(r - 1) + r + 1 = 0$",
      "$r^2 + 3r + 1 = 0$",
      "$r(r - 1) + 3r = 0$"
    ],
    "answer": "A",
    "explanation": "$p_0 = \\lim x(3x/x^2) = 3$ and $q_0 = \\lim x^2((1+x)/x^2) = 1$. The indicial equation is $r(r - 1) + 3r + 1 = r^2 + 2r + 1 = (r + 1)^2 = 0$."
  },
  {
    "prompt": "What is an IRREGULAR singular point for $y'' + P(x)y' + Q(x)y = 0$?",
    "options": [
      "A singular point that fails the regular singular point test (i.e. $(x-x_0)P(x)$ or $(x-x_0)^2 Q(x)$ is not analytic)",
      "A point where all derivatives vanish",
      "An ordinary point with complex coordinates",
      "A point where solutions are polynomials"
    ],
    "answer": "A",
    "explanation": "If the singularity in $P(x)$ is worse than a simple pole, or the singularity in $Q(x)$ is worse than a double pole, the point is irregular (essential singularity in the ODE), and Frobenius series generally fail to converge."
  },
  {
    "prompt": "Classify the point $x = 0$ for the equation $x^3 y'' + y = 0$:",
    "options": [
      "Irregular singular point",
      "Regular singular point",
      "Ordinary point",
      "Removable point"
    ],
    "answer": "A",
    "explanation": "$R(x)/P(x) = 1/x^3$. Then $x^2(R/P) = 1/x$, which is not analytic at $x = 0$ (pole of order 3). Thus $x = 0$ is an irregular singular point."
  },
  {
    "prompt": "What is the guaranteed radius of convergence for a Frobenius series solution $y = x^r \\sum a_n x^n$ at $x_0 = 0$ for $(x^2 - 1)x^2 y'' + 2x y' + 3y = 0$?",
    "options": [
      "$R = 1$, the distance from $0$ to the nearest singular points at $x = \\pm 1$",
      "$R = \\infty$",
      "$R = 2$",
      "$R = 0$"
    ],
    "answer": "A",
    "explanation": "The coefficient $P(x) = x^2(x^2 - 1)$ has other roots at $x = \\pm 1$. The distance from $x_0 = 0$ to $\\pm 1$ is $1$, so the Frobenius series converges at least on $0 < |x| < 1$."
  },
  {
    "prompt": "When using reduction of order to find the second solution $y_2(x) = y_1(x) v(x)$ from a known Frobenius solution $y_1(x)$, what formula gives $v(x)$?",
    "options": [
      "$v(x) = \\int \\frac{e^{-\\int P(x)\\,dx}}{(y_1(x))^2}\\,dx$",
      "$v(x) = \\int y_1(x)\\,dx$",
      "$v(x) = \\frac{1}{y_1(x)}$",
      "$v(x) = \\int (y_1(x))^2\\,dx$"
    ],
    "answer": "A",
    "explanation": "Abel's formula for the Wronskian leads directly to the classical reduction-of-order integral $v(x) = \\int \\frac{W(x)}{(y_1(x))^2}\\,dx = \\int \\frac{e^{-\\int p(x)\\,dx}}{(y_1(x))^2}\\,dx$."
  },
  {
    "prompt": "For the Euler-Cauchy equation $x^2 y'' + a x y' + b y = 0$, how is it related to the Frobenius method?",
    "options": [
      "It is the exact prototype/limiting ODE whose characteristic equation is identical to the indicial equation of the general Frobenius problem",
      "It has only polynomial solutions",
      "It can only be solved by Laplace transforms",
      "It has no singular points"
    ],
    "answer": "A",
    "explanation": "The Euler-Cauchy equation represents the leading-order terms of any differential equation near a regular singular point; its solution $y = x^r$ produces the identical indicial equation $r(r - 1) + ar + b = 0$."
  },
  {
    "prompt": "Why is the Frobenius method typically formulated on the interval $x > 0$?",
    "options": [
      "Because non-integer powers $x^r$ and $\\ln x$ are multivalued in the complex plane and require a branch cut along the negative real axis",
      "Because differential equations cannot exist for negative numbers",
      "Because $a_0$ must be positive",
      "Because derivatives do not exist for $x < 0$"
    ],
    "answer": "A",
    "explanation": "For fractional or complex $r$, $x^r = e^{r \\ln x}$ requires choosing a branch of the logarithm, conventionally setting the branch cut on the negative real axis and evaluating solutions for real $x > 0$ (or replacing $x$ with $|x|$)."
  },
  {
    "prompt": "In the Frobenius solution for $x y'' + 2y' + x y = 0$, what are the indicial roots?",
    "options": [
      "$r_1 = 0, \\; r_2 = -1$",
      "$r_1 = 1, \\; r_2 = 0$",
      "$r_1 = 1/2, \\; r_2 = -1/2$",
      "$r_1 = 2, \\; r_2 = 1$"
    ],
    "answer": "A",
    "explanation": "Multiply by $x$: $x^2 y'' + 2x y' + x^2 y = 0$. Here $p_0 = 2, q_0 = 0$. The indicial equation is $r(r - 1) + 2r = r^2 + r = r(r + 1) = 0 \\implies r_1 = 0, r_2 = -1$."
  },
  {
    "prompt": "For $x y'' + 2y' + x y = 0$ with $r_1 = 0$, what familiar function is the first Frobenius solution $y_1(x)$?",
    "options": [
      "$y_1(x) = \\frac{\\sin x}{x}$",
      "$y_1(x) = \\cos x$",
      "$y_1(x) = e^x$",
      "$y_1(x) = \\ln x$"
    ],
    "answer": "A",
    "explanation": "Substituting $y = \\sum a_n x^n$ with $a_0 = 1$ produces $a_{2k} = \\frac{(-1)^k}{(2k+1)!}$, which is the Taylor series for $\\frac{\\sin x}{x} = \\sum_{k=0}^\\infty \\frac{(-1)^k x^{2k}}{(2k+1)!}$."
  },
  {
    "prompt": "What is the primary physical significance of the Frobenius method in engineering and physics?",
    "options": [
      "It provides the exact series representations for Bessel functions, Legendre functions, and Laguerre polynomials governing cylindrical/spherical wave potentials and quantum orbitals",
      "It is used exclusively to balance financial ledgers",
      "It replaces calculus with matrix multiplication",
      "It only applies to linear algebra problems"
    ],
    "answer": "A",
    "explanation": "Separation of variables in cylindrical and spherical coordinates for the Helmholtz, Laplace, and Schr\u00f6dinger equations inevitably leads to radial equations with regular singular points at the origin, solved via the Frobenius method."
  }
];

export const CALC_C_ANALYTIC_CR_QUIZ = [
  {
    "prompt": "What is the formal definition of complex differentiability for $f: U \\subseteq \\mathbb{C} \\to \\mathbb{C}$ at a point $z_0$?",
    "options": [
      "$f'(z_0) = \\lim_{\\Delta z \\to 0} \\frac{f(z_0 + \\Delta z) - f(z_0)}{\\Delta z}$ exists and is independent of the direction in which $\\Delta z \\to 0$",
      "The real and imaginary parts $u, v$ simply have continuous partial derivatives with no further conditions",
      "$\\lim_{z \\to z_0} |f(z)| = |f(z_0)|$",
      "$f(z_0) = 0$"
    ],
    "answer": "A",
    "explanation": "Complex differentiability requires the difference quotient limit to exist identically along EVERY possible 2D path in the complex plane as $\\Delta z = \\Delta x + i\\Delta y \\to 0$."
  },
  {
    "prompt": "What are the Cauchy-Riemann equations for $f(z) = u(x, y) + i v(x, y)$ in Cartesian coordinates?",
    "options": [
      "$\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}$",
      "$\\frac{\\partial u}{\\partial x} = -\\frac{\\partial v}{\\partial y}$ and $\\frac{\\partial u}{\\partial y} = \\frac{\\partial v}{\\partial x}$",
      "$\\frac{\\partial u}{\\partial x} = \\frac{\\partial u}{\\partial y}$ and $\\frac{\\partial v}{\\partial x} = \\frac{\\partial v}{\\partial y}$",
      "$\\frac{\\partial^2 u}{\\partial x^2} = \\frac{\\partial^2 v}{\\partial y^2}$"
    ],
    "answer": "A",
    "explanation": "Equating the limits along the real direction $\\Delta z = \\Delta x$ ($f' = u_x + iv_x$) and imaginary direction $\\Delta z = i\\Delta y$ ($f' = v_y - iu_y$) yields $u_x = v_y$ and $u_y = -v_x$."
  },
  {
    "prompt": "What are the sufficient conditions for $f(z) = u + iv$ to be complex differentiable at $z_0 = x_0 + i y_0$?",
    "options": [
      "The first partial derivatives $u_x, u_y, v_x, v_y$ exist and are continuous in a neighborhood of $(x_0, y_0)$, and satisfy the Cauchy-Riemann equations at $(x_0, y_0)$",
      "The function is bounded",
      "$u$ and $v$ are polynomials",
      "Only that $u_x = v_y$ holds at that single isolated point"
    ],
    "answer": "A",
    "explanation": "Continuity of the first partial derivatives ($\\,\\mathcal{C}^1$ regularity) together with the algebraic Cauchy-Riemann equations guarantees complex differentiability."
  },
  {
    "prompt": "Is the complex conjugate function $f(z) = \\bar{z} = x - iy$ analytic anywhere in $\\mathbb{C}$?",
    "options": [
      "No, because $u_x = 1 \\ne v_y = -1$, violating the Cauchy-Riemann equations everywhere",
      "Yes, it is analytic on the entire complex plane",
      "Only along the real axis $y = 0$",
      "Only at the origin $z = 0$"
    ],
    "answer": "A",
    "explanation": "Here $u(x, y) = x$ and $v(x, y) = -y$. Then $u_x = 1$ while $v_y = -1$. Because $1 \\ne -1$ everywhere, the Cauchy-Riemann equations fail at every point in $\\mathbb{C}$, so $\\bar{z}$ is nowhere differentiable."
  },
  {
    "prompt": "What are the Cauchy-Riemann equations in polar coordinates $(r, \\theta)$ where $z = r e^{i\\theta}$?",
    "options": [
      "$\\frac{\\partial u}{\\partial r} = \\frac{1}{r}\\frac{\\partial v}{\\partial \\theta}$ and $\\frac{\\partial v}{\\partial r} = -\\frac{1}{r}\\frac{\\partial u}{\\partial \\theta}$",
      "$\\frac{\\partial u}{\\partial r} = \\frac{\\partial v}{\\partial \\theta}$ and $\\frac{\\partial u}{\\partial \\theta} = -\\frac{\\partial v}{\\partial r}$",
      "$\\frac{\\partial u}{\\partial r} = r\\frac{\\partial v}{\\partial \\theta}$ and $\\frac{\\partial v}{\\partial r} = r\\frac{\\partial u}{\\partial \\theta}$",
      "$\\frac{\\partial^2 u}{\\partial r^2} + \\frac{\\partial^2 v}{\\partial \\theta^2} = 0$"
    ],
    "answer": "A",
    "explanation": "By applying the chain rule to $x = r\\cos\\theta$ and $y = r\\sin\\theta$, the Cauchy-Riemann conditions become $u_r = \\frac{1}{r}v_\\theta$ and $v_r = -\\frac{1}{r}u_\\theta$."
  },
  {
    "prompt": "What differential equation must the real part $u(x, y)$ of an analytic function $f(z) = u + iv$ satisfy?",
    "options": [
      "Laplace's equation: $\\nabla^2 u = \\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$ (harmonic function)",
      "The wave equation: $u_{xx} - u_{yy} = 0$",
      "The heat equation: $u_t = u_{xx}$",
      "Helmholtz's equation: $\\nabla^2 u + k^2 u = 0$"
    ],
    "answer": "A",
    "explanation": "Differentiating $u_x = v_y$ with respect to $x$ gives $u_{xx} = v_{yx}$. Differentiating $u_y = -v_x$ with respect to $y$ gives $u_{yy} = -v_{xy}$. Adding them gives $u_{xx} + u_{yy} = 0$ by Clairaut's theorem."
  },
  {
    "prompt": "Given the harmonic function $u(x, y) = x^2 - y^2 + 2x$, find its harmonic conjugate $v(x, y)$ such that $f(z) = u + iv$ is analytic with $v(0, 0) = 0$:",
    "options": [
      "$v(x, y) = 2xy + 2y$",
      "$v(x, y) = 2xy - 2y$",
      "$v(x, y) = x^2 + y^2$",
      "$v(x, y) = 2xy$"
    ],
    "answer": "A",
    "explanation": "$u_x = 2x + 2 = v_y \\implies v(x, y) = 2xy + 2y + g(x)$. Then $v_x = 2y + g'(x) = -u_y = -(-2y) = 2y \\implies g'(x) = 0 \\implies g(x) = C$. With $v(0, 0) = 0$, $C = 0$. Thus $v(x, y) = 2xy + 2y$."
  },
  {
    "prompt": "What geometric property does the mapping $w = f(z)$ possess at any point $z_0$ where $f$ is analytic and $f'(z_0) \\ne 0$?",
    "options": [
      "It is conformal (preserves both the magnitude and sense of angles between intersecting curves)",
      "It only preserves lengths (isometry)",
      "It reverses orientation",
      "It collapses 2D areas into lines"
    ],
    "answer": "A",
    "explanation": "If $f'(z_0) = R e^{i\\phi} \\ne 0$, the tangent vector to any curve passing through $z_0$ is scaled by $R$ and rotated by the constant angle $\\phi$. Hence angles and orientations are strictly preserved (conformal mapping)."
  },
  {
    "prompt": "What happens to conformality at a critical point where $f'(z_0) = 0$ with $f''(z_0) \\ne 0$?",
    "options": [
      "Angles between intersecting curves are doubled ($2\\theta$)",
      "Angles are preserved",
      "Angles are halved",
      "Conformality is unchanged"
    ],
    "answer": "A",
    "explanation": "If the first non-vanishing derivative at $z_0$ is of order $k \\ge 2$, the mapping locally behaves like $(z - z_0)^k$, multiplying angles between tangent vectors by $k$. For $k = 2$, angles are doubled."
  },
  {
    "prompt": "An ENTIRE function is defined as a complex function that:",
    "options": [
      "Is analytic on the entire complex plane $\\mathbb{C}$",
      "Has only real values",
      "Is bounded everywhere",
      "Has poles of infinite order"
    ],
    "answer": "A",
    "explanation": "Functions such as polynomials, $e^z$, $\\sin z$, and $\\cos z$ are analytic throughout all of $\\mathbb{C}$ and are termed entire (integral) functions."
  },
  {
    "prompt": "Liouville's Theorem states that any bounded entire function must be:",
    "options": [
      "Constant",
      "A polynomial of degree 1",
      "Zero everywhere",
      "Periodic"
    ],
    "answer": "A",
    "explanation": "If $f(z)$ is entire and $|f(z)| \\le M$ for all $z \\in \\mathbb{C}$, then by Cauchy's Estimate $|f'(z)| \\le M/R \\to 0$ as $R \\to \\infty$, forcing $f'(z) \\equiv 0$, so $f(z)$ is constant."
  },
  {
    "prompt": "How does the Fundamental Theorem of Algebra follow as a direct corollary of Liouville's Theorem?",
    "options": [
      "If a non-constant polynomial $P(z)$ had no roots, $f(z) = 1/P(z)$ would be a bounded entire function, hence constant, a contradiction",
      "By integrating $P(z)$ around a unit circle",
      "By differentiating $P(z)$ until it vanishes",
      "By applying the ratio test to the coefficients"
    ],
    "answer": "A",
    "explanation": "If $P(z)$ has degree $n \\ge 1$ and no roots, $1/P(z)$ has no poles and tends to $0$ as $|z| \\to \\infty$, making it a bounded entire function. By Liouville's theorem, $1/P(z)$ must be constant, which contradicts $\\deg P \\ge 1$."
  },
  {
    "prompt": "If $f(z) = u + iv$ is analytic on a connected domain $D$ and $|f(z)|$ is constant, what can be deduced about $f(z)$?",
    "options": [
      "$f(z)$ must be constant on $D$",
      "$f(z)$ can be any linear function",
      "$u$ and $v$ must be zero",
      "$f(z)$ is periodic"
    ],
    "answer": "A",
    "explanation": "If $u^2 + v^2 = C$, differentiating with respect to $x$ and $y$ and applying Cauchy-Riemann equations yields $(u^2 + v^2)(u_x^2 + u_y^2) = 0$. For $C > 0$, $u_x = u_y = v_x = v_y = 0$, so $f(z)$ is constant."
  },
  {
    "prompt": "What are the level curves of the real part $u(x, y) = c_1$ and imaginary part $v(x, y) = c_2$ of an analytic function with $f'(z) \\ne 0$?",
    "options": [
      "They form mutually orthogonal families of curves everywhere in the domain",
      "They are always concentric circles",
      "They are parallel lines",
      "They never intersect"
    ],
    "answer": "A",
    "explanation": "The gradient vectors are $\\nabla u = (u_x, u_y)$ and $\\nabla v = (v_x, v_y)$. By Cauchy-Riemann, $\\nabla u \\cdot \\nabla v = u_x v_x + u_y v_y = u_x(-u_y) + u_y(u_x) = 0$. The normal vectors are orthogonal, so the level curves intersect at right angles."
  },
  {
    "prompt": "For $f(z) = z^2 = (x^2 - y^2) + i(2xy)$, verify the Cauchy-Riemann equations:",
    "options": [
      "$u_x = 2x = v_y$ and $u_y = -2y = -v_x$",
      "$u_x = 2y$ and $u_y = 2x$",
      "$u_x = x$ and $v_y = y$",
      "$u_x = -2x$ and $v_y = 2x$"
    ],
    "answer": "A",
    "explanation": "$u = x^2 - y^2 \\implies u_x = 2x, u_y = -2y$. $v = 2xy \\implies v_x = 2y, v_y = 2x$. We see $u_x = v_y = 2x$ and $u_y = -v_x = -2y$. The equations hold everywhere, confirming $z^2$ is entire."
  },
  {
    "prompt": "What is the complex derivative of $f(z) = e^z = e^x \\cos y + i e^x \\sin y$?",
    "options": [
      "$f'(z) = e^z$",
      "$f'(z) = i e^z$",
      "$f'(z) = e^x$",
      "$f'(z) = \\cos y - i \\sin y$"
    ],
    "answer": "A",
    "explanation": "$f'(z) = u_x + i v_x = e^x \\cos y + i e^x \\sin y = e^z$. The exponential function is its own derivative in $\\mathbb{C}$."
  },
  {
    "prompt": "Consider $f(z) = |z|^2 = x^2 + y^2$. Where is $f$ complex differentiable?",
    "options": [
      "Only at the single point $z = 0$, and nowhere else",
      "Everywhere in $\\mathbb{C}$",
      "Along the unit circle $|z| = 1$",
      "Nowhere"
    ],
    "answer": "A",
    "explanation": "$u = x^2 + y^2, v = 0$. $u_x = 2x, u_y = 2y, v_x = 0, v_y = 0$. Cauchy-Riemann requires $2x = 0$ and $2y = 0 \\implies x = y = 0$. It is differentiable ONLY at $z = 0$ (and analytic nowhere, since analyticity requires an open neighborhood)."
  },
  {
    "prompt": "The Morera Theorem states that if $f$ is continuous on a simply connected domain $D$ and $\\oint_C f(z)\\,dz = 0$ for every closed contour $C \\subset D$, then:",
    "options": [
      "$f$ is analytic on $D$",
      "$f$ must be identically zero",
      "$f$ must be bounded",
      "$f$ has poles on the boundary"
    ],
    "answer": "A",
    "explanation": "Morera's theorem is the exact converse of Cauchy's integral theorem: path-independence of contour integrals for continuous functions implies analyticity."
  },
  {
    "prompt": "If $f(z) = u + iv$ is analytic and $u(x, y) = e^{-y}\\cos x$, what is $f'(z)$ expressed purely in terms of $z$?",
    "options": [
      "$f'(z) = -\\sin z$",
      "$f'(z) = \\cos z$",
      "$f'(z) = e^z$",
      "$f'(z) = i e^{-z}$"
    ],
    "answer": "A",
    "explanation": "By Milne-Thomson's method, setting $x = z, y = 0$: $u(z, 0) = \\cos z$. Since $f(z) = \\cos z$, the derivative is $f'(z) = -\\sin z$."
  },
  {
    "prompt": "What role do harmonic conjugates play in fluid dynamics and electrostatic potential theory?",
    "options": [
      "If $u(x, y)$ represents the velocity potential (or electrostatic potential), its harmonic conjugate $v(x, y)$ represents the stream function (or electric flux lines), forming orthogonal physical field lines",
      "They describe turbulent viscosity",
      "They only determine temperature at infinity",
      "They are used to normalize coordinate origins"
    ],
    "answer": "A",
    "explanation": "The complex potential $\\Omega(z) = \\Phi + i\\Psi$ unifies the scalar velocity potential $\\Phi$ and the stream function $\\Psi$. Orthogonality of their level curves guarantees that fluid streamlines never cross equipotential contours."
  }
];

export const CALC_C_CONTOUR_RESIDUES_QUIZ = [
  {
    "prompt": "What does Cauchy's Integral Theorem state for an analytic function $f(z)$ on and within a simple closed contour $\\gamma$ in a simply connected domain?",
    "options": [
      "$\\oint_\\gamma f(z)\\,dz = 0$",
      "$\\oint_\\gamma f(z)\\,dz = 2\\pi i$",
      "$\\oint_\\gamma f(z)\\,dz = f(0)$",
      "$\\oint_\\gamma f(z)\\,dz = \\text{Length}(\\gamma)$"
    ],
    "answer": "A",
    "explanation": "If $f(z)$ is holomorphic everywhere inside and on a closed contour $\\gamma$, Cauchy's integral theorem guarantees that the path integral vanishes identically."
  },
  {
    "prompt": "What is Cauchy's Integral Formula for $f(z_0)$ when $\\gamma$ is a positively oriented simple closed contour enclosing $z_0$?",
    "options": [
      "$f(z_0) = \\frac{1}{2\\pi i} \\oint_\\gamma \\frac{f(z)}{z - z_0}\\,dz$",
      "$f(z_0) = \\oint_\\gamma \\frac{f(z)}{z - z_0}\\,dz$",
      "$f(z_0) = \\frac{1}{2\\pi} \\oint_\\gamma f(z)\\,dz$",
      "$f(z_0) = 2\\pi i \\oint_\\gamma (z - z_0)f(z)\\,dz$"
    ],
    "answer": "A",
    "explanation": "Cauchy's integral formula states that values of an analytic function in the interior of a domain are completely determined by its boundary values: $f(z_0) = \\frac{1}{2\\pi i} \\oint_\\gamma \\frac{f(z)}{z - z_0}\\,dz$."
  },
  {
    "prompt": "Evaluate $\\oint_{|z|=2} \\frac{e^z}{z - 1}\\,dz$ where the circular contour is oriented counterclockwise:",
    "options": [
      "$2\\pi i e$",
      "$2\\pi i$",
      "$e$",
      "$0$"
    ],
    "answer": "A",
    "explanation": "Here $z_0 = 1$ lies inside the circle $|z| = 2$. By Cauchy's Integral Formula with $f(z) = e^z$: $\\oint \\frac{e^z}{z - 1}\\,dz = 2\\pi i f(1) = 2\\pi i e$."
  },
  {
    "prompt": "What is Cauchy's Differentiation Formula for the $n$-th derivative $f^{(n)}(z_0)$?",
    "options": [
      "$f^{(n)}(z_0) = \\frac{n!}{2\\pi i} \\oint_\\gamma \\frac{f(z)}{(z - z_0)^{n+1}}\\,dz$",
      "$f^{(n)}(z_0) = \\frac{1}{2\\pi i n!} \\oint_\\gamma \\frac{f(z)}{(z - z_0)^n}\\,dz$",
      "$f^{(n)}(z_0) = \\frac{n!}{2\\pi} \\oint_\\gamma f(z)\\,dz$",
      "$f^{(n)}(z_0) = 0$ always"
    ],
    "answer": "A",
    "explanation": "Differentiating under the integral sign $n$ times yields $f^{(n)}(z_0) = \\frac{n!}{2\\pi i} \\oint_\\gamma \\frac{f(z)}{(z - z_0)^{n+1}}\\,dz$."
  },
  {
    "prompt": "Evaluate $\\oint_{|z|=1} \\frac{\\sin z}{z^3}\\,dz$:",
    "options": [
      "$0$",
      "$\\pi i$",
      "$2\\pi i$",
      "$-\\pi i$"
    ],
    "answer": "A",
    "explanation": "By Cauchy's formula for $n = 2$: $\\oint \\frac{\\sin z}{z^3}\\,dz = \\frac{2\\pi i}{2!} \\left. \\frac{d^2}{dz^2}(\\sin z) \\right|_{z=0} = \\pi i (-\\sin 0) = 0$."
  },
  {
    "prompt": "In the Laurent series expansion $f(z) = \\sum_{n=-\\infty}^\\infty a_n (z - z_0)^n$, which coefficient is defined as the residue $\\text{Res}(f, z_0)$?",
    "options": [
      "The coefficient $a_{-1}$ of the $(z - z_0)^{-1}$ term",
      "The constant term $a_0$",
      "The leading coefficient $a_1$",
      "The coefficient $a_{-2}$"
    ],
    "answer": "A",
    "explanation": "Because $\\oint (z - z_0)^n\\,dz = 2\\pi i$ for $n = -1$ and vanishes for all other integers $n \\ne -1$, the coefficient $a_{-1}$ is precisely the residue."
  },
  {
    "prompt": "How is the residue of a SIMPLE pole (order 1) at $z_0$ computed?",
    "options": [
      "$\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0) f(z)$",
      "$\\text{Res}(f, z_0) = \\lim_{z \\to z_0} \\frac{f(z)}{z - z_0}$",
      "$\\text{Res}(f, z_0) = f(z_0)$",
      "$\\text{Res}(f, z_0) = \\lim_{z \\to z_0} (z - z_0)^2 f'(z)$"
    ],
    "answer": "A",
    "explanation": "Multiplying by $(z - z_0)$ clears the simple denominator, leaving $a_{-1} + a_0(z - z_0) + \\dots$, whose limit as $z \\to z_0$ is $a_{-1}$."
  },
  {
    "prompt": "For a pole of order $k$ at $z_0$, what is the general residue formula?",
    "options": [
      "$\\text{Res}(f, z_0) = \\frac{1}{(k-1)!} \\lim_{z \\to z_0} \\frac{d^{k-1}}{dz^{k-1}} \\left[ (z - z_0)^k f(z) \\right]$",
      "$\\text{Res}(f, z_0) = \\frac{1}{k!} \\lim_{z \\to z_0} (z - z_0)^k f(z)$",
      "$\\text{Res}(f, z_0) = \\lim_{z \\to z_0} \\frac{d^k}{dz^k} f(z)$",
      "$\\text{Res}(f, z_0) = (k-1)! f^{(k)}(z_0)$"
    ],
    "answer": "A",
    "explanation": "Multiplying by $(z - z_0)^k$ leaves $a_{-1}(z - z_0)^{k-1} + \\dots$. Differentiating $k-1$ times and dividing by $(k-1)!$ isolates $a_{-1}$."
  },
  {
    "prompt": "Find the residue of $f(z) = \\frac{1}{z^2 + 1}$ at the pole $z = i$:",
    "options": [
      "$-i/2$",
      "$i/2$",
      "$1$",
      "$-1$"
    ],
    "answer": "A",
    "explanation": "Factor denominator: $z^2 + 1 = (z - i)(z + i)$. At the simple pole $z = i$: $\\text{Res}(f, i) = \\lim_{z \\to i} (z - i) \\frac{1}{(z - i)(z + i)} = \\frac{1}{2i} = -\\frac{i}{2}$."
  },
  {
    "prompt": "What does Cauchy's Residue Theorem state for a positively oriented contour $\\gamma$ enclosing isolated singularities $z_1, z_2, \\dots, z_m$?",
    "options": [
      "$\\oint_\\gamma f(z)\\,dz = 2\\pi i \\sum_{k=1}^m \\text{Res}(f, z_k)$",
      "$\\oint_\\gamma f(z)\\,dz = \\sum_{k=1}^m \\text{Res}(f, z_k)$",
      "$\\oint_\\gamma f(z)\\,dz = 2\\pi \\prod_{k=1}^m \\text{Res}(f, z_k)$",
      "$\\oint_\\gamma f(z)\\,dz = 0$ always"
    ],
    "answer": "A",
    "explanation": "Cauchy's Residue Theorem generalizes Cauchy's integral theorem, stating that the contour integral equals $2\\pi i$ times the sum of the residues of all enclosed singularities."
  },
  {
    "prompt": "Evaluate the real improper integral $\\int_{-\\infty}^\\infty \\frac{1}{x^2 + 4}\\,dx$ using contour integration:",
    "options": [
      "$\\pi / 2$",
      "$\\pi$",
      "$2\\pi$",
      "$\\pi / 4$"
    ],
    "answer": "A",
    "explanation": "Close contour in upper half-plane. Poles at $z = \\pm 2i$; only $z = 2i$ is in the upper half-plane. $\\text{Res}(f, 2i) = \\frac{1}{2(2i)} = \\frac{1}{4i}$. By Residue Theorem: $\\int_{-\\infty}^\\infty = 2\\pi i (1/(4i)) = \\pi/2$."
  },
  {
    "prompt": "Classify the isolated singularity of $f(z) = \\frac{\\sin z}{z}$ at $z = 0$:",
    "options": [
      "Removable singularity",
      "Simple pole",
      "Pole of order 2",
      "Essential singularity"
    ],
    "answer": "A",
    "explanation": "$\\sin z / z = 1 - z^2/6 + z^4/120 - \\dots$. The Laurent series contains no negative powers of $z$, and $\\lim_{z \\to 0} f(z) = 1$, making $z = 0$ a removable singularity with residue $0$."
  },
  {
    "prompt": "Classify the isolated singularity of $f(z) = e^{1/z}$ at $z = 0$:",
    "options": [
      "Essential singularity",
      "Pole of order 1",
      "Pole of order $\\infty$",
      "Removable singularity"
    ],
    "answer": "A",
    "explanation": "The Laurent series $e^{1/z} = 1 + \\frac{1}{z} + \\frac{1}{2!z^2} + \\frac{1}{3!z^3} + \\dots$ has infinitely many negative powers of $z$, defining an essential singularity."
  },
  {
    "prompt": "What does the Casorati-Weierstrass Theorem state about the behavior of $f(z)$ near an essential singularity $z_0$?",
    "options": [
      "In every neighborhood of $z_0$, the image $f(U \\setminus \\{z_0\\})$ is dense in the entire complex plane $\\mathbb{C}$",
      "$f(z) \\to \\infty$ uniformly",
      "$f(z)$ is bounded",
      "$f(z) \\to 0$ along all rays"
    ],
    "answer": "A",
    "explanation": "Near an essential singularity, $f(z)$ comes arbitrarily close to any complex number $w \\in \\mathbb{C}$ in every punctured neighborhood."
  },
  {
    "prompt": "Evaluate $\\oint_{|z|=3} \\frac{z^2}{z^2 - 1}\\,dz$:",
    "options": [
      "$0$",
      "$2\\pi i$",
      "$\\pi i$",
      "$4\\pi i$"
    ],
    "answer": "A",
    "explanation": "Poles at $z = 1$ and $z = -1$, both inside $|z|=3$. $\\text{Res}(f, 1) = \\frac{1^2}{2(1)} = 1/2$. $\\text{Res}(f, -1) = \\frac{(-1)^2}{2(-1)} = -1/2$. Sum of residues $= 1/2 - 1/2 = 0$. Hence $\\oint = 2\\pi i (0) = 0$."
  },
  {
    "prompt": "What is the ML Inequality (Estimation Lemma) for a contour integral $\\int_\\gamma f(z)\\,dz$?",
    "options": [
      "$\\left| \\int_\\gamma f(z)\\,dz \\right| \\le M \\cdot L$, where $M = \\max_{z \\in \\gamma} |f(z)|$ and $L = \\text{Length}(\\gamma)$",
      "$\\left| \\int_\\gamma f(z)\\,dz \\right| \\le M / L$",
      "$\\left| \\int_\\gamma f(z)\\,dz \\right| = M \\cdot L$",
      "$\\left| \\int_\\gamma f(z)\\,dz \\right| \\ge M \\cdot L$"
    ],
    "answer": "A",
    "explanation": "The modulus of an integral is bounded by the supremum of the integrand times the arc length of the path: $|\\int_\\gamma f\\,dz| \\le \\int_a^b |f(z(t))||z'(t)|\\,dt \\le M \\int_a^b |z'(t)|\\,dt = ML$."
  },
  {
    "prompt": "Evaluate the residue of $f(z) = \\frac{1}{(z - 2)^2 (z + 1)}$ at the double pole $z = 2$:",
    "options": [
      "$-1/9$",
      "$1/9$",
      "$1/3$",
      "$-1/3$"
    ],
    "answer": "A",
    "explanation": "At the order 2 pole $z = 2$: $\\text{Res}(f, 2) = \\frac{1}{1!} \\left. \\frac{d}{dz} \\left( \\frac{1}{z + 1} \\right) \\right|_{z=2} = \\left. -\\frac{1}{(z + 1)^2} \\right|_{z=2} = -\\frac{1}{(2 + 1)^2} = -\\frac{1}{9}$."
  },
  {
    "prompt": "Jordan's Lemma is used in contour integration to prove that along a semicircle $C_R$ in the upper half-plane:",
    "options": [
      "$\\lim_{R \\to \\infty} \\int_{C_R} f(z) e^{i a z}\\,dz = 0$ for $a > 0$ when $\\max_{C_R} |f(z)| \\to 0$",
      "The integral is always equal to $2\\pi i$",
      "Trigonometric functions diverge",
      "The pole order increases with $R$"
    ],
    "answer": "A",
    "explanation": "Jordan's lemma exploits the exponential decay $e^{i a z} = e^{i a x} e^{-a y}$ on the upper half-plane ($y > 0$) to show that $\\int_{C_R} f(z) e^{iaz}\\,dz \\to 0$ even when $|f(z)|$ decays as slowly as $1/R$."
  },
  {
    "prompt": "Evaluate $\\oint_{|z|=1} z^3 e^{1/z}\\,dz$:",
    "options": [
      "$\\pi i / 12$",
      "$2\\pi i$",
      "$0$",
      "$\\pi i / 6$"
    ],
    "answer": "A",
    "explanation": "$z^3 e^{1/z} = z^3 (1 + 1/z + 1/(2z^2) + 1/(6z^3) + 1/(24z^4) + \\dots) = z^3 + z^2 + z/2 + 1/6 + \\frac{1}{24z} + \\dots$. The coefficient of $1/z$ is $a_{-1} = 1/24$. By Residue Theorem: $\\oint = 2\\pi i (1/24) = \\pi i / 12$."
  },
  {
    "prompt": "How is a real integral of the form $\\int_0^{2\\pi} R(\\cos\\theta, \\sin\\theta)\\,d\\theta$ evaluated via residue calculus?",
    "options": [
      "Substitute $z = e^{i\\theta}$, so $\\cos\\theta = \\frac{z + z^{-1}}{2}$, $\\sin\\theta = \\frac{z - z^{-1}}{2i}$, and $d\\theta = \\frac{dz}{i z}$, converting it to a contour integral around unit circle $|z| = 1$",
      "Substitute $\\theta = x^2$",
      "Integrate by parts twice",
      "Convert into a Laplace transform"
    ],
    "answer": "A",
    "explanation": "The Euler substitution $z = e^{i\\theta}$ maps the interval $[0, 2\\pi]$ directly to the counterclockwise unit circle $|z| = 1$, turning trigonometric integrals into rational residue problems."
  }
];

