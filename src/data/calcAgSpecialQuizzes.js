/**
 * Developer 3: Special Functions, Transform Methods & PDE Checkpoint Quizzes
 * 20 MCQs per topic with 80% passing threshold.
 */

export const CALC_A_GAMMA_BETA_QUIZ = [
  {
    "prompt": "How is the Euler Gamma function $\\Gamma(z)$ defined for $\\text{Re}(z) > 0$?",
    "options": [
      "$\\int_0^1 t^z (1-t)\\,dt$",
      "$\\int_{-\\infty}^\\infty e^{-t^2}\\,dt$",
      "$\\int_0^\\infty t^z e^{-t^2}\\,dt$",
      "$\\int_0^\\infty t^{z-1} e^{-t}\\,dt$"
    ],
    "answer": "D",
    "explanation": "By definition, Euler's integral of the second kind is $\\Gamma(z) = \\int_0^\\infty t^{z-1} e^{-t}\\,dt$ for all complex $z$ with $\\text{Re}(z) > 0$."
  },
  {
    "prompt": "What is the fundamental recurrence relation satisfied by the Gamma function for any $z$ with $\\text{Re}(z) > 0$?",
    "options": [
      "$\\Gamma(z+1) = (z+1) \\Gamma(z)$",
      "$\\Gamma(z+1) = \\Gamma(z) / z$",
      "$\\Gamma(z+1) = z \\Gamma(z)$",
      "$\\Gamma(z+1) = z^2 \\Gamma(z)$"
    ],
    "answer": "C",
    "explanation": "Integrating by parts with $u = t^z$ and $dv = e^{-t}\\,dt$ yields $\\Gamma(z+1) = z \\Gamma(z)$."
  },
  {
    "prompt": "For any positive integer $n$, how is $\\Gamma(n)$ related to the classical factorial?",
    "options": [
      "$\\Gamma(n) = n!$",
      "$\\Gamma(n) = (n-1)!$",
      "$\\Gamma(n) = (n+1)!$",
      "$\\Gamma(n) = 2^n n!$"
    ],
    "answer": "B",
    "explanation": "Using $\\Gamma(1) = 1$ and $\\Gamma(z+1) = z\\Gamma(z)$ recursively gives $\\Gamma(n) = (n-1)!$."
  },
  {
    "prompt": "What is the exact value of $\\Gamma(1/2)$?",
    "options": [
      "$\\sqrt{\\pi}$",
      "$\\pi$",
      "$\\pi / 2$",
      "$\\sqrt{\\pi} / 2$"
    ],
    "answer": "A",
    "explanation": "Substituting $t = u^2$ transforms the integral into $2\\int_0^\\infty e^{-u^2}\\,du = 2(\\sqrt{\\pi}/2) = \\sqrt{\\pi}$."
  },
  {
    "prompt": "Evaluate $\\Gamma(5/2)$ using the recurrence relation and $\\Gamma(1/2) = \\sqrt{\\pi}$:",
    "options": [
      "$\\frac{15\\sqrt{\\pi}}{8}$",
      "$\\frac{\\sqrt{\\pi}}{2}$",
      "$\\frac{5\\sqrt{\\pi}}{2}$",
      "$\\frac{3\\sqrt{\\pi}}{4}$"
    ],
    "answer": "D",
    "explanation": "$\\Gamma(5/2) = \\frac{3}{2}\\Gamma(3/2) = \\frac{3}{2} \\cdot \\frac{1}{2}\\Gamma(1/2) = \\frac{3}{4}\\sqrt{\\pi}$."
  },
  {
    "prompt": "Euler's reflection formula states that for non-integer $z$:",
    "options": [
      "$\\Gamma(z)\\Gamma(1-z) = \\frac{\\pi}{\\cos(\\pi z)}$",
      "$\\Gamma(z)\\Gamma(1-z) = \\pi \\sin(\\pi z)$",
      "$\\Gamma(z)\\Gamma(1-z) = \\frac{\\pi}{\\sin(\\pi z)}$",
      "$\\Gamma(z)\\Gamma(1-z) = 1$"
    ],
    "answer": "C",
    "explanation": "Euler's reflection formula connects the Gamma function values in opposite half-planes: $\\Gamma(z)\\Gamma(1-z) = \\frac{\\pi}{\\sin(\\pi z)}$."
  },
  {
    "prompt": "How is the Euler Beta function $B(p, q)$ defined for $\\text{Re}(p) > 0, \\text{Re}(q) > 0$?",
    "options": [
      "$\\int_0^\\infty x^p (1+x)^q\\,dx$",
      "$\\int_0^1 x^{p-1} (1-x)^{q-1}\\,dx$",
      "$\\int_{-1}^1 (1-x^2)^{p+q}\\,dx$",
      "$\\int_0^1 x^p (1-x)^q\\,dx$"
    ],
    "answer": "B",
    "explanation": "Euler's first integral defines the Beta function as $B(p, q) = \\int_0^1 x^{p-1}(1-x)^{q-1}\\,dx$."
  },
  {
    "prompt": "What is the identity relating the Beta function $B(p, q)$ to the Gamma function?",
    "options": [
      "$B(p, q) = \\frac{\\Gamma(p)\\Gamma(q)}{\\Gamma(p+q)}$",
      "$B(p, q) = \\frac{\\Gamma(p+q)}{\\Gamma(p)\\Gamma(q)}$",
      "$B(p, q) = \\Gamma(p)\\Gamma(q)$",
      "$B(p, q) = \\frac{\\Gamma(p)\\Gamma(q)}{\\Gamma(p)\\Gamma(q) + 1}$"
    ],
    "answer": "A",
    "explanation": "By expressing $\\Gamma(p)\\Gamma(q)$ as a double integral in polar coordinates, one derives $B(p, q) = \\frac{\\Gamma(p)\\Gamma(q)}{\\Gamma(p+q)}$."
  },
  {
    "prompt": "Which symmetry property is satisfied by the Beta function $B(p, q)$?",
    "options": [
      "$B(p, q) = -B(q, p)$",
      "$B(p, q) = 1 / B(q, p)$",
      "$B(p, q) = B(p+1, q-1)$",
      "$B(p, q) = B(q, p)$"
    ],
    "answer": "D",
    "explanation": "Substituting $u = 1 - x$ in the definition yields $\\int_0^1 (1-u)^{p-1} u^{q-1}\\,du = B(q, p)$, proving symmetry."
  },
  {
    "prompt": "What is the trigonometric representation of the Beta function $B(p, q)$?",
    "options": [
      "$\\int_0^{\\pi} \\sin^{p-1}(\\theta) \\cos^{q-1}(\\theta)\\,d\\theta$",
      "$\\frac{1}{2} \\int_0^{\\pi/2} \\sin^p(\\theta) \\cos^q(\\theta)\\,d\\theta$",
      "$2 \\int_0^{\\pi/2} \\sin^{2p-1}(\\theta) \\cos^{2q-1}(\\theta)\\,d\\theta$",
      "$\\int_0^{2\\pi} \\sin^{2p}(\\theta) \\cos^{2q}(\\theta)\\,d\\theta$"
    ],
    "answer": "C",
    "explanation": "Substituting $x = \\sin^2\\theta$ ($dx = 2\\sin\\theta\\cos\\theta\\,d\\theta$) converts $B(p, q)$ into $2\\int_0^{\\pi/2} \\sin^{2p-1}\\theta \\cos^{2q-1}\\theta\\,d\\theta$."
  },
  {
    "prompt": "Evaluate the integral $I = \\int_0^{\\pi/2} \\sin^5(\\theta) \\cos^3(\\theta)\\,d\\theta$ using the Beta function:",
    "options": [
      "$1 / 12$",
      "$1 / 24$",
      "$1 / 48$",
      "$5 / 96$"
    ],
    "answer": "B",
    "explanation": "$2p - 1 = 5 \\implies p = 3$ and $2q - 1 = 3 \\implies q = 2$. $I = \\frac{1}{2}B(3, 2) = \\frac{1}{2}\\frac{\\Gamma(3)\\Gamma(2)}{\\Gamma(5)} = \\frac{1}{2}\\frac{2! \\cdot 1!}{4!} = \\frac{1}{2}\\frac{2}{24} = \\frac{1}{24}$."
  },
  {
    "prompt": "By substituting $x = \\frac{y}{1+y}$ into $B(p, q)$, the integral transforms over $[0, \\infty)$ into:",
    "options": [
      "$\\int_0^\\infty \\frac{y^{p-1}}{(1+y)^{p+q}}\\,dy$",
      "$\\int_0^\\infty \\frac{y^p}{(1+y)^q}\\,dy$",
      "$\\int_0^\\infty \\frac{e^{-y}}{1+y}\\,dy$",
      "$\\int_0^\\infty y^{p-1} e^{-qy}\\,dy$"
    ],
    "answer": "A",
    "explanation": "The change of variable $x = \\frac{y}{1+y}$ ($dx = \\frac{dy}{(1+y)^2}$) produces $B(p, q) = \\int_0^\\infty \\frac{y^{p-1}}{(1+y)^{p+q}}\\,dy$."
  },
  {
    "prompt": "Evaluate the definite integral $\\int_0^\\infty \\frac{1}{1 + y^4}\\,dy$ using Beta/Gamma properties:",
    "options": [
      "$\\frac{\\pi}{4}$",
      "$\\frac{\\pi}{\\sqrt{2}}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi}{2\\sqrt{2}}$"
    ],
    "answer": "D",
    "explanation": "Let $u = y^4$, $dy = \\frac{1}{4}u^{-3/4}\\,du$. Integral is $\\frac{1}{4}\\int_0^\\infty \\frac{u^{-3/4}}{1+u}\\,du = \\frac{1}{4}B(1/4, 3/4) = \\frac{1}{4}\\frac{\\pi}{\\sin(\\pi/4)} = \\frac{\\pi}{4(1/\\sqrt{2})} = \\frac{\\pi}{2\\sqrt{2}}$."
  },
  {
    "prompt": "Legendre's duplication formula for the Gamma function states that $\\Gamma(z)\\Gamma(z + 1/2)$ equals:",
    "options": [
      "$2^{2z-1} \\sqrt{\\pi} \\Gamma(2z)$",
      "$\\sqrt{\\pi} \\Gamma(2z)$",
      "$2^{1-2z} \\sqrt{\\pi} \\Gamma(2z)$",
      "$2^{-z} \\Gamma(2z)$"
    ],
    "answer": "C",
    "explanation": "The duplication formula relates values at $z$ and $z+1/2$ to $2z$: $\\Gamma(z)\\Gamma(z+1/2) = 2^{1-2z}\\sqrt{\\pi}\\Gamma(2z)$."
  },
  {
    "prompt": "The logarithmic derivative of the Gamma function $\\psi(z) = \\frac{d}{dz}[\\ln \\Gamma(z)] = \\frac{\\Gamma'(z)}{\\Gamma(z)}$ is called the:",
    "options": [
      "Polygamma function of order 2",
      "Digamma function",
      "Beta derivative function",
      "Euler-Mascheroni constant"
    ],
    "answer": "B",
    "explanation": "$\\psi(z) = \\frac{\\Gamma'(z)}{\\Gamma(z)}$ is formally known as the Digamma function."
  },
  {
    "prompt": "What is the value of $\\psi(1) = \\Gamma'(1)$ in terms of the Euler-Mascheroni constant $\\gamma$?",
    "options": [
      "$-\\gamma$",
      "$\\gamma$",
      "$0$",
      "$1$"
    ],
    "answer": "A",
    "explanation": "By differentiating the Weierstrass product form of $\\Gamma(z)$ at $z = 1$, we find $\\Gamma'(1) = -\\gamma \\approx -0.577215$."
  },
  {
    "prompt": "Stirling's asymptotic approximation for $n! = \\Gamma(n+1)$ as $n \\to \\infty$ is:",
    "options": [
      "$\\sqrt{\\pi n} \\left(\\frac{n}{e}\\right)^n$",
      "$\\sqrt{2\\pi} n^n$",
      "$\\frac{n^n}{e^n}$",
      "$\\sqrt{2\\pi n} \\left(\\frac{n}{e}\\right)^n$"
    ],
    "answer": "D",
    "explanation": "Stirling's formula establishes $n! \\sim \\sqrt{2\\pi n}\\left(\\frac{n}{e}\\right)^n$ with relative error approaching zero."
  },
  {
    "prompt": "Evaluate $B(1/2, 1/2)$:",
    "options": [
      "$\\sqrt{\\pi}$",
      "$\\pi / 2$",
      "$\\pi$",
      "$2\\pi$"
    ],
    "answer": "C",
    "explanation": "$B(1/2, 1/2) = \\frac{\\Gamma(1/2)\\Gamma(1/2)}{\\Gamma(1)} = \\frac{\\sqrt{\\pi} \\cdot \\sqrt{\\pi}}{1} = \\pi$."
  },
  {
    "prompt": "The incomplete Gamma function $\\gamma(s, x)$ is defined by:",
    "options": [
      "$\\int_x^\\infty t^{s-1} e^{-t}\\,dt$",
      "$\\int_0^x t^{s-1} e^{-t}\\,dt$",
      "$\\int_0^x t^s e^{-t}\\,dt$",
      "$\\int_0^1 t^{s-1} (1-t)^x\\,dt$"
    ],
    "answer": "B",
    "explanation": "The lower incomplete Gamma function integrates from 0 to $x$: $\\gamma(s, x) = \\int_0^x t^{s-1} e^{-t}\\,dt$."
  },
  {
    "prompt": "The Mellin transform of $f(t) = e^{-t}$ evaluated at parameter $s$ is directly:",
    "options": [
      "$\\Gamma(s)$",
      "$B(s, s)$",
      "$1 / s$",
      "$e^{-s}$"
    ],
    "answer": "A",
    "explanation": "The Mellin transform $\\mathcal{M}\\{f\\}(s) = \\int_0^\\infty t^{s-1} f(t)\\,dt$ on $e^{-t}$ is exactly $\\int_0^\\infty t^{s-1} e^{-t}\\,dt = \\Gamma(s)$."
  }
];

export const CALC_A_LEIBNIZ_RULE_QUIZ = [
  {
    "prompt": "For constant limits $a$ and $b$, what is the Leibniz Integral Rule for $\\frac{d}{dx} \\int_a^b f(x, t)\\,dt$?",
    "options": [
      "$f(x, b) - f(x, a)$",
      "$\\int_a^b f(x, t)\\,dt + \\frac{\\partial f}{\\partial x}$",
      "$\\frac{\\partial}{\\partial t} \\int_a^b f(x, t)\\,dt$",
      "$\\int_a^b \\frac{\\partial f}{\\partial x}(x, t)\\,dt$"
    ],
    "answer": "D",
    "explanation": "When the limits are constant and $f, \\partial f/\\partial x$ are continuous, the derivative passes directly under the integral sign."
  },
  {
    "prompt": "What is the general Leibniz Rule when limits $a(x)$ and $b(x)$ are differentiable functions of $x$?",
    "options": [
      "$f(x, b(x)) - f(x, a(x)) + \\int_{a(x)}^{b(x)} \\frac{\\partial f}{\\partial x}\\,dt$",
      "$\\int_{a(x)}^{b(x)} \\frac{\\partial f}{\\partial x}\\,dt$",
      "$f(x, b(x))b'(x) - f(x, a(x))a'(x) + \\int_{a(x)}^{b(x)} \\frac{\\partial f}{\\partial x}\\,dt$",
      "$f(x, b(x))b'(x) + f(x, a(x))a'(x)$"
    ],
    "answer": "C",
    "explanation": "By the multivariable chain rule, differentiation with variable limits includes boundary rates of change: $f(x, b(x))b'(x) - f(x, a(x))a'(x) + \\int_{a(x)}^{b(x)} \\frac{\\partial f}{\\partial x}\\,dt$."
  },
  {
    "prompt": "Evaluate $\\frac{d}{dx} \\int_0^{x^2} \\cos(t)\\,dt$:",
    "options": [
      "$\\cos(x^2)$",
      "$2x \\cos(x^2)$",
      "$2x \\sin(x^2)$",
      "$-\\sin(x^2)$"
    ],
    "answer": "B",
    "explanation": "Here $f(t) = \\cos(t)$ has no $x$-dependence, so the derivative is simply $f(b(x))b'(x) = \\cos(x^2) \\cdot (2x) = 2x\\cos(x^2)$."
  },
  {
    "prompt": "Evaluate $\\frac{d}{dx} \\int_x^{2x} \\frac{1}{t}\\,dt$ for $x > 0$:",
    "options": [
      "$0$",
      "$1 / x$",
      "$\\ln(2)$",
      "$1 / (2x)$"
    ],
    "answer": "A",
    "explanation": "$\\int_x^{2x} (1/t)\\,dt = \\ln(2x) - \\ln(x) = \\ln(2) = \\text{const}$. Alternatively, $f(2x) \\cdot 2 - f(x) \\cdot 1 = \\frac{1}{2x}(2) - \\frac{1}{x}(1) = 0$."
  },
  {
    "prompt": "Compute $\\frac{d}{dx} \\int_0^x (x - t) g(t)\\,dt$:",
    "options": [
      "$x g(x)$",
      "$g(x)$",
      "$(x - t) g(x)$",
      "$\\int_0^x g(t)\\,dt$"
    ],
    "answer": "D",
    "explanation": "Boundary term is $(x - x)g(x)(1) = 0$. The partial derivative with respect to $x$ is $\\frac{\\partial}{\\partial x}[(x-t)g(t)] = g(t)$. Hence $\\int_0^x g(t)\\,dt$."
  },
  {
    "prompt": "Compute the second derivative $\\frac{d^2}{dx^2} \\int_0^x (x - t) g(t)\\,dt$:",
    "options": [
      "$g'(x)$",
      "$\\int_0^x g(t)\\,dt$",
      "$g(x)$",
      "$x g(x)$"
    ],
    "answer": "C",
    "explanation": "Since the first derivative is $\\int_0^x g(t)\\,dt$, the Fundamental Theorem of Calculus gives $\\frac{d}{dx}\\int_0^x g(t)\\,dt = g(x)$."
  },
  {
    "prompt": "What is the core idea of Feynman's Trick (differentiating under the integral sign)?",
    "options": [
      "Substitute $u = 1/x$ repeatedly",
      "Introduce an auxiliary parameter $\\alpha$, differentiate with respect to $\\alpha$, evaluate the simplified integral, and integrate back",
      "Expand the integrand into an infinite Laurent series",
      "Convert definite integrals into contour line integrals"
    ],
    "answer": "B",
    "explanation": "Feynman's technique introduces a parameter $\\alpha$ so that differentiating with respect to $\\alpha$ simplifies the integrand, yielding an ODE for $I(\\alpha)$ that can be solved and integrated back."
  },
  {
    "prompt": "To evaluate the Dirichlet integral $I = \\int_0^\\infty \\frac{\\sin x}{x}\\,dx$, which parametric family $I(\\alpha)$ is typically introduced?",
    "options": [
      "$I(\\alpha) = \\int_0^\\infty e^{-\\alpha x} \\frac{\\sin x}{x}\\,dx$ for $\\alpha \\ge 0$",
      "$I(\\alpha) = \\int_0^\\infty \\frac{\\sin(\\alpha x)}{x^2}\\,dx$",
      "$I(\\alpha) = \\int_0^\\infty e^{-\\alpha x^2} \\sin x\\,dx$",
      "$I(\\alpha) = \\int_0^\\infty \\frac{\\sin x}{x + \\alpha}\\,dx$"
    ],
    "answer": "A",
    "explanation": "The factor $e^{-\\alpha x}$ enforces absolute convergence and allows differentiation under the integral sign."
  },
  {
    "prompt": "For $I(\\alpha) = \\int_0^\\infty e^{-\\alpha x} \\frac{\\sin x}{x}\\,dx$, what is $I'(\\alpha) = \\frac{dI}{d\\alpha}$?",
    "options": [
      "$\\frac{1}{\\alpha^2 + 1}$",
      "$-\\frac{\\alpha}{\\alpha^2 + 1}$",
      "$-\\arctan(\\alpha)$",
      "$-\\frac{1}{\\alpha^2 + 1}$"
    ],
    "answer": "D",
    "explanation": "$I'(\\alpha) = \\int_0^\\infty (-x) e^{-\\alpha x} \\frac{\\sin x}{x}\\,dx = -\\int_0^\\infty e^{-\\alpha x}\\sin x\\,dx = -\\frac{1}{\\alpha^2 + 1}$."
  },
  {
    "prompt": "Integrating $I'(\\alpha) = -\\frac{1}{\\alpha^2 + 1}$ with boundary condition $\\lim_{\\alpha \\to \\infty} I(\\alpha) = 0$, what is $I(0) = \\int_0^\\infty \\frac{\\sin x}{x}\\,dx$?",
    "options": [
      "$\\pi$",
      "$1$",
      "$\\pi / 2$",
      "$\\sqrt{\\pi}$"
    ],
    "answer": "C",
    "explanation": "$I(\\alpha) = -\\arctan(\\alpha) + C$. Since $I(\\infty) = 0$, $-\\pi/2 + C = 0 \\implies C = \\pi/2$. Thus $I(0) = \\pi/2$."
  },
  {
    "prompt": "Evaluate the Frullani integral $I = \\int_0^\\infty \\frac{e^{-ax} - e^{-bx}}{x}\\,dx$ for $a, b > 0$:",
    "options": [
      "$\\ln(a / b)$",
      "$\\ln(b / a)$",
      "$b - a$",
      "$\\frac{1}{a} - \\frac{1}{b}$"
    ],
    "answer": "B",
    "explanation": "Write $\\frac{e^{-ax} - e^{-bx}}{x} = \\int_a^b e^{-yx}\\,dy$. Swapping integrals: $\\int_a^b \\left(\\int_0^\\infty e^{-yx}\\,dx\\right) dy = \\int_a^b \\frac{1}{y}\\,dy = \\ln(b/a)$."
  },
  {
    "prompt": "Differentiating the Gaussian integral $\\int_{-\\infty}^\\infty e^{-\\alpha x^2}\\,dx = \\sqrt{\\frac{\\pi}{\\alpha}}$ with respect to $\\alpha$ yields $\\int_{-\\infty}^\\infty x^2 e^{-\\alpha x^2}\\,dx$ equal to:",
    "options": [
      "$\\frac{1}{2\\alpha} \\sqrt{\\frac{\\pi}{\\alpha}}$",
      "$\\frac{\\sqrt{\\pi}}{\\alpha}$",
      "$\\frac{1}{\\alpha^2} \\sqrt{\\pi}$",
      "$\\frac{1}{4\\alpha} \\sqrt{\\frac{\\pi}{\\alpha}}$"
    ],
    "answer": "A",
    "explanation": "$\\frac{d}{d\\alpha}\\int e^{-\\alpha x^2}dx = -\\int x^2 e^{-\\alpha x^2}dx = \\frac{d}{d\\alpha}[\\pi^{1/2} \\alpha^{-1/2}] = -\\frac{1}{2}\\pi^{1/2}\\alpha^{-3/2}$. Negating gives $\\frac{1}{2\\alpha}\\sqrt{\\frac{\\pi}{\\alpha}}$."
  },
  {
    "prompt": "Evaluate $\\int_0^1 \\frac{x^a - 1}{\\ln x}\\,dx$ for $a > -1$ using differentiation under the integral sign:",
    "options": [
      "$\\frac{1}{a + 1}$",
      "$a \\ln(a + 1)$",
      "$\\ln(a)$",
      "$\\ln(a + 1)$"
    ],
    "answer": "D",
    "explanation": "Let $F(a) = \\int_0^1 \\frac{x^a - 1}{\\ln x}\\,dx$. $F'(a) = \\int_0^1 \\frac{x^a \\ln x}{\\ln x}\\,dx = \\int_0^1 x^a\\,dx = \\frac{1}{a+1}$. Integrating with $F(0) = 0$ gives $F(a) = \\ln(a+1)$."
  },
  {
    "prompt": "Evaluate $\\frac{d}{dx} \\int_0^x \\sin(x t)\\,dt$:",
    "options": [
      "$\\sin(x^2)$",
      "$x \\cos(x^2)$",
      "$\\sin(x^2) + \\frac{1}{x} - \\frac{\\cos(x^2)}{x}$",
      "$\\int_0^x t \\cos(xt)\\,dt$"
    ],
    "answer": "C",
    "explanation": "Boundary term is $\\sin(x \\cdot x)(1) = \\sin(x^2)$. Integral term is $\\int_0^x t\\cos(xt)\\,dt = [\\frac{t\\sin(xt)}{x}]_0^x - \\int_0^x \\frac{\\sin(xt)}{x}\\,dt = \\sin(x^2) + \\frac{\\cos(x^2)-1}{x^2}$... Using integration by parts directly gives $\\sin(x^2) + \\int_0^x t\\cos(xt)\\,dt$."
  },
  {
    "prompt": "What regularity conditions guarantee that $\\frac{d}{dx} \\int_a^b f(x, t)\\,dt = \\int_a^b \\frac{\\partial f}{\\partial x}(x, t)\\,dt$ on a compact domain $[a, b] \\times [c, d]$?",
    "options": [
      "$f(x, t)$ is merely integrable with respect to $t$",
      "$f(x, t)$ and $\\frac{\\partial f}{\\partial x}(x, t)$ are continuous on the domain",
      "$f(x, t)$ is analytic in both variables",
      "$\\int_a^b f(x, t)\\,dt$ is independent of $x$"
    ],
    "answer": "B",
    "explanation": "Standard calculus theorems require $f(x, t)$ to be integrable and the partial derivative $\\frac{\\partial f}{\\partial x}(x, t)$ to exist and be continuous on the domain."
  },
  {
    "prompt": "In fluid dynamics and continuum mechanics, the 3D generalization of the Leibniz Integral Rule for moving control volumes is known as:",
    "options": [
      "Reynolds Transport Theorem",
      "Navier-Stokes Theorem",
      "Bernoulli's Principle",
      "Helmholtz Decomposition"
    ],
    "answer": "A",
    "explanation": "The Reynolds Transport Theorem generalizes Leibniz's rule to time-varying 3D spatial control volumes $\\Omega(t)$."
  },
  {
    "prompt": "Evaluate $\\int_0^\\infty \\frac{1 - \\cos(ax)}{x^2}\\,dx$ using Feynman's parameter method with $I(a)$:",
    "options": [
      "$\\pi a$",
      "$\\frac{\\pi a^2}{4}$",
      "$\\frac{\\pi}{2}$",
      "$\\frac{\\pi a}{2}$"
    ],
    "answer": "D",
    "explanation": "$I'(a) = \\int_0^\\infty \\frac{\\sin(ax)}{x}\\,dx = \\frac{\\pi}{2}$. Integrating with $I(0) = 0$ yields $I(a) = \\frac{\\pi a}{2}$ (for $a > 0$)."
  },
  {
    "prompt": "If $\\phi(x) = x + \\int_0^x (t - x)\\phi(t)\\,dt$, differentiate twice using Leibniz's rule to obtain the differential equation for $\\phi(x)$:",
    "options": [
      "$\\phi''(x) - \\phi(x) = 0$",
      "$\\phi'(x) + \\phi(x) = 1$",
      "$\\phi''(x) + \\phi(x) = 0$",
      "$\\phi''(x) = x$"
    ],
    "answer": "C",
    "explanation": "$\\phi'(x) = 1 - \\int_0^x \\phi(t)\\,dt$, so $\\phi''(x) = -\\phi(x) \\implies \\phi''(x) + \\phi(x) = 0$ with $\\phi(0)=0, \\phi'(0)=1$ (giving $\\phi(x) = \\sin x$)."
  },
  {
    "prompt": "For an improper integral $\\int_0^\\infty f(x, t)\\,dt$, under what condition does the dominated convergence theorem justify differentiating under the integral sign?",
    "options": [
      "$f(x, t) > 0$ everywhere",
      "There exists an integrable function $g(t)$ such that $|\\frac{\\partial f}{\\partial x}(x, t)| \\le g(t)$ for all $x$",
      "$\\lim_{t \\to \\infty} f(x, t) = 0$",
      "The integral is evaluated only at integer values"
    ],
    "answer": "B",
    "explanation": "By Lebesgue's Dominated Convergence Theorem, an integrable majorant $g(t)$ bounding $|\\partial f/\\partial x|$ uniformly guarantees validity of differentiation under the integral."
  },
  {
    "prompt": "Evaluate $\\frac{d}{dx} \\int_{x}^{x^2} e^{-t^2}\\,dt$:",
    "options": [
      "$2x e^{-x^4} - e^{-x^2}$",
      "$e^{-x^4} - e^{-x^2}$",
      "$2x e^{-x^2} - e^{-x}$",
      "$\\int_x^{x^2} -2t e^{-t^2}\\,dt$"
    ],
    "answer": "A",
    "explanation": "Applying Leibniz rule with $f(t) = e^{-t^2}$: $f(b(x))b'(x) - f(a(x))a'(x) = e^{-(x^2)^2}(2x) - e^{-x^2}(1) = 2x e^{-x^4} - e^{-x^2}$."
  }
];
