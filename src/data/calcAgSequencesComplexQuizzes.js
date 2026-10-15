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

