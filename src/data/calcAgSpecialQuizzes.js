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

export const CALC_B_FOURIER_TRANSFORM_QUIZ = [
  {
    "prompt": "How is the continuous Fourier Transform $\\mathcal{F}\\{f(t)\\} = F(\\omega)$ standardly defined for an integrable signal $f(t)$?",
    "options": [
      "$\\int_0^\\infty f(t) e^{-\\omega t}\\,dt$",
      "$\\frac{1}{2\\pi} \\int_{-\\infty}^\\infty f(t) e^{i\\omega t}\\,dt$",
      "$\\int_{-\\infty}^\\infty f(t) \\cos(\\omega t)\\,dt$",
      "$\\int_{-\\infty}^\\infty f(t) e^{-i\\omega t}\\,dt$"
    ],
    "answer": "D",
    "explanation": "The standard continuous-time forward Fourier transform is $F(\\omega) = \\int_{-\\infty}^\\infty f(t) e^{-i\\omega t}\\,dt$."
  },
  {
    "prompt": "What is the corresponding Inverse Fourier Transform formula to reconstruct $f(t)$ from $F(\\omega)$?",
    "options": [
      "$\\int_{-\\infty}^\\infty F(\\omega) e^{-i\\omega t}\\,d\\omega$",
      "$\\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty F(\\omega) e^{-i\\omega t}\\,d\\omega$",
      "$\\frac{1}{2\\pi} \\int_{-\\infty}^\\infty F(\\omega) e^{i\\omega t}\\,d\\omega$",
      "$\\frac{1}{2\\pi} \\int_0^\\infty F(\\omega) \\cos(\\omega t)\\,d\\omega$"
    ],
    "answer": "C",
    "explanation": "The inverse continuous Fourier transform is $f(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty F(\\omega) e^{i\\omega t}\\,d\\omega$."
  },
  {
    "prompt": "How does the continuous Fourier Transform fundamentally relate to the bilateral Laplace Transform $\\mathcal{L}_b\\{f(t)\\} = \\int_{-\\infty}^\\infty f(t) e^{-st}\\,dt$?",
    "options": [
      "It is the real part of the Laplace transform",
      "It corresponds to evaluating the Laplace transform along the imaginary axis $s = i\\omega$",
      "It is the derivative of the Laplace transform with respect to $s$",
      "They are completely unrelated operators"
    ],
    "answer": "B",
    "explanation": "Substituting $s = \\sigma + i\\omega$ into the bilateral Laplace transform yields the Fourier transform when $\\sigma = 0$, i.e., $s = i\\omega$, whenever the region of convergence includes the imaginary axis."
  },
  {
    "prompt": "What is the Fourier Transform of the rectangular pulse function $\\Pi(t) = 1$ for $|t| < T/2$ and $0$ otherwise?",
    "options": [
      "$T \\, \\text{sinc}\\left(\\frac{\\omega T}{2\\pi}\\right) = \\frac{2\\sin(\\omega T / 2)}{\\omega}$",
      "$\\frac{\\cos(\\omega T)}{\\omega}$",
      "$T e^{-\\omega^2 T^2}$",
      "$\\frac{1}{\\omega^2 + 1}$"
    ],
    "answer": "A",
    "explanation": "$\\int_{-T/2}^{T/2} e^{-i\\omega t}\\,dt = \\left[ \\frac{e^{-i\\omega t}}{-i\\omega} \\right]_{-T/2}^{T/2} = \\frac{e^{i\\omega T/2} - e^{-i\\omega T/2}}{i\\omega} = \\frac{2\\sin(\\omega T / 2)}{\\omega}$."
  },
  {
    "prompt": "What is the Fourier Transform of the Dirac delta function $\\delta(t - t_0)$?",
    "options": [
      "$e^{i\\omega t_0}$",
      "$1 / (i\\omega)$",
      "$2\\pi \\delta(\\omega)$",
      "$e^{-i\\omega t_0}$"
    ],
    "answer": "D",
    "explanation": "By the sifting property of the Dirac delta: $\\int_{-\\infty}^\\infty \\delta(t - t_0) e^{-i\\omega t}\\,dt = e^{-i\\omega t_0}$."
  },
  {
    "prompt": "According to the Time Differentiation Property, if $\\mathcal{F}\\{f(t)\\} = F(\\omega)$, what is $\\mathcal{F}\\{f'(t)\\}$?",
    "options": [
      "$-i\\omega F(\\omega)$",
      "$\\frac{F(\\omega)}{i\\omega}$",
      "$i\\omega F(\\omega)$",
      "$\\omega^2 F(\\omega)$"
    ],
    "answer": "C",
    "explanation": "Integration by parts gives $\\int f'(t)e^{-i\\omega t}\\,dt = 0 - \\int f(t)(-i\\omega e^{-i\\omega t})\\,dt = i\\omega F(\\omega)$."
  },
  {
    "prompt": "According to the Frequency Shifting Property (Modulation), what is $\\mathcal{F}\\{e^{i\\omega_0 t} f(t)\\}$?",
    "options": [
      "$F(\\omega + \\omega_0)$",
      "$F(\\omega - \\omega_0)$",
      "$e^{-i\\omega_0 t} F(\\omega)$",
      "$F(\\omega) / \\omega_0$"
    ],
    "answer": "B",
    "explanation": "$\\int [e^{i\\omega_0 t} f(t)] e^{-i\\omega t}\\,dt = \\int f(t) e^{-i(\\omega - \\omega_0)t}\\,dt = F(\\omega - \\omega_0)$."
  },
  {
    "prompt": "The Convolution Theorem for continuous Fourier transforms states that $\\mathcal{F}\\{(f * g)(t)\\}$ equals:",
    "options": [
      "$F(\\omega) \\cdot G(\\omega)$",
      "$\\frac{1}{2\\pi} F(\\omega) G(\\omega)$",
      "$F(\\omega) + G(\\omega)$",
      "$F(\\omega) * G(\\omega)$"
    ],
    "answer": "A",
    "explanation": "Convolution in the time domain corresponds directly to pointwise algebraic multiplication in the frequency domain: $\\mathcal{F}\\{f * g\\} = F(\\omega)G(\\omega)$."
  },
  {
    "prompt": "Plancherel's (Parseval's) Theorem for the continuous Fourier Transform states that:",
    "options": [
      "$\\int_{-\\infty}^\\infty |f(t)|^2\\,dt = \\int_{-\\infty}^\\infty |F(\\omega)|^2\\,d\\omega$",
      "$\\int_{-\\infty}^\\infty |f(t)|^2\\,dt = 2\\pi \\int_{-\\infty}^\\infty |F(\\omega)|^2\\,d\\omega$",
      "$\\int_{-\\infty}^\\infty f(t)\\,dt = \\int_{-\\infty}^\\infty F(\\omega)\\,d\\omega$",
      "$\\int_{-\\infty}^\\infty |f(t)|^2\\,dt = \\frac{1}{2\\pi} \\int_{-\\infty}^\\infty |F(\\omega)|^2\\,d\\omega$"
    ],
    "answer": "D",
    "explanation": "Parseval's energy theorem preserves $L^2$ norms with normalization factor $1/(2\\pi)$."
  },
  {
    "prompt": "What is the Fourier Transform of the Gaussian function $f(t) = e^{-a t^2}$ for $a > 0$?",
    "options": [
      "$\\frac{1}{\\sqrt{a}} e^{-a \\omega^2}$",
      "$\\sqrt{\\pi a} e^{-\\frac{\\omega^2}{2a}}$",
      "$\\sqrt{\\frac{\\pi}{a}} e^{-\\frac{\\omega^2}{4a}}$",
      "$\\frac{\\pi}{a} e^{-\\frac{\\omega^2}{4}}$"
    ],
    "answer": "C",
    "explanation": "Completing the square in the exponent gives $\\int_{-\\infty}^\\infty e^{-a(t + i\\omega/(2a))^2} e^{-\\omega^2/(4a)}\\,dt = \\sqrt{\\frac{\\pi}{a}} e^{-\\omega^2/(4a)}$ (a Gaussian transforms into another Gaussian)."
  },
  {
    "prompt": "What is the Fourier Transform of $f(t) = e^{-a|t|}$ for $a > 0$ (two-sided exponential)?",
    "options": [
      "$\\frac{a}{a^2 + \\omega^2}$",
      "$\\frac{2a}{a^2 + \\omega^2}$",
      "$\\frac{2i\\omega}{a^2 + \\omega^2}$",
      "$\\frac{1}{a + i\\omega}$"
    ],
    "answer": "B",
    "explanation": "$\\int_{-\\infty}^0 e^{at}e^{-i\\omega t}dt + \\int_0^\\infty e^{-at}e^{-i\\omega t}dt = \\frac{1}{a - i\\omega} + \\frac{1}{a + i\\omega} = \\frac{2a}{a^2 + \\omega^2}$."
  },
  {
    "prompt": "By Duality, since $\\mathcal{F}\\{e^{-a|t|}\\} = \\frac{2a}{a^2 + \\omega^2}$, what is the Fourier Transform of the Lorentzian $g(t) = \\frac{1}{t^2 + a^2}$?",
    "options": [
      "$\\frac{\\pi}{a} e^{-a|\\omega|}$",
      "$\\frac{2\\pi}{a} e^{-a|\\omega|}$",
      "$\\pi e^{-a \\omega^2}$",
      "$\\frac{1}{a} e^{-a|\\omega|}$"
    ],
    "answer": "A",
    "explanation": "The Duality property $\\mathcal{F}\\{F(t)\\} = 2\\pi f(-\\omega)$ yields $\\mathcal{F}\\left\\{\\frac{1}{t^2 + a^2}\\right\\} = \\frac{\\pi}{a} e^{-a|\\omega|}$."
  },
  {
    "prompt": "What is the Time Scaling Property of the Fourier Transform: $\\mathcal{F}\\{f(at)\\}$ for real $a \\neq 0$?",
    "options": [
      "$\\frac{1}{a} F(a\\omega)$",
      "$|a| F\\left(\\frac{\\omega}{a}\\right)$",
      "$F\\left(\\frac{\\omega}{|a|}\\right)$",
      "$\\frac{1}{|a|} F\\left(\\frac{\\omega}{a}\\right)$"
    ],
    "answer": "D",
    "explanation": "Substituting $u = at$ gives $\\int f(at)e^{-i\\omega t}dt = \\frac{1}{|a|}F(\\omega/a)$ (compression in time causes dilation in frequency)."
  },
  {
    "prompt": "The Fourier Transform of the constant function $f(t) = 1$ in the sense of distributions is:",
    "options": [
      "$\\delta(\\omega)$",
      "$0$",
      "$2\\pi \\delta(\\omega)$",
      "$\\frac{1}{i\\omega}$"
    ],
    "answer": "C",
    "explanation": "Since $\\mathcal{F}\\{\\delta(t)\\} = 1$, the duality property implies $\\mathcal{F}\\{1\\} = 2\\pi \\delta(-\\omega) = 2\\pi \\delta(\\omega)$."
  },
  {
    "prompt": "What is the Fourier Transform of the Heaviside step function $u(t)$ in the sense of tempered distributions?",
    "options": [
      "$\\frac{1}{i\\omega}$",
      "$\\pi \\delta(\\omega) + \\frac{1}{i\\omega}$",
      "$\\pi \\delta(\\omega)$",
      "$\\frac{1}{s}$"
    ],
    "answer": "B",
    "explanation": "Writing $u(t) = \\frac{1}{2} + \\frac{1}{2}\\text{sgn}(t)$, its Fourier transform is $\\pi\\delta(\\omega) + \\frac{1}{i\\omega}$."
  },
  {
    "prompt": "What is the Fourier Transform of the cosine wave $f(t) = \\cos(\\omega_0 t)$?",
    "options": [
      "$\\pi [\\delta(\\omega - \\omega_0) + \\delta(\\omega + \\omega_0)]$",
      "$2\\pi [\\delta(\\omega - \\omega_0) - \\delta(\\omega + \\omega_0)]$",
      "$\\frac{\\omega}{\\omega^2 - \\omega_0^2}$",
      "$\\frac{1}{2} [\\delta(\\omega - \\omega_0) + \\delta(\\omega + \\omega_0)]$"
    ],
    "answer": "A",
    "explanation": "Using Euler's identity $\\cos(\\omega_0 t) = \\frac{e^{i\\omega_0 t} + e^{-i\\omega_0 t}}{2}$ and $\\mathcal{F}\\{e^{i\\omega_0 t}\\} = 2\\pi \\delta(\\omega - \\omega_0)$ gives $\\pi[\\delta(\\omega - \\omega_0) + \\delta(\\omega + \\omega_0)]$."
  },
  {
    "prompt": "In linear time-invariant (LTI) systems with impulse response $h(t)$, how is the frequency response $H(\\omega)$ defined?",
    "options": [
      "$H(\\omega) = h(\\omega) * x(\\omega)$",
      "$H(\\omega) = \\int_0^t h(\\tau)\\,d\\tau$",
      "$H(\\omega) = X(\\omega) / Y(\\omega)$",
      "$H(\\omega) = \\mathcal{F}\\{h(t)\\} = \\frac{Y(\\omega)}{X(\\omega)}$"
    ],
    "answer": "D",
    "explanation": "Because $y(t) = (x * h)(t)$, $Y(\\omega) = X(\\omega)H(\\omega) \\implies H(\\omega) = \\frac{Y(\\omega)}{X(\\omega)} = \\mathcal{F}\\{h(t)\\}$."
  },
  {
    "prompt": "The Heisenberg Uncertainty Principle for signals relates the time duration variance $\\Delta t$ and bandwidth variance $\\Delta \\omega$ by:",
    "options": [
      "$\\Delta t \\cdot \\Delta \\omega \\ge 1$",
      "$\\Delta t \\cdot \\Delta \\omega \\le \\frac{1}{2}$",
      "$\\Delta t \\cdot \\Delta \\omega \\ge \\frac{1}{2}$",
      "$\\Delta t / \\Delta \\omega = \\text{const}$"
    ],
    "answer": "C",
    "explanation": "The mathematical bandwidth-duration product theorem proves that $\\Delta t \\cdot \\Delta \\omega \\ge 1/2$, with equality achieved exclusively by Gaussian wave packets."
  },
  {
    "prompt": "The Hilbert Transform $\\mathcal{H}\\{f(t)\\} = \\frac{1}{\\pi} \\text{P.V.} \\int_{-\\infty}^\\infty \\frac{f(\\tau)}{t - \\tau}\\,d\\tau$ corresponds in the Fourier domain to multiplication by:",
    "options": [
      "$i \\, \\text{sgn}(\\omega)$",
      "$-i \\, \\text{sgn}(\\omega)$",
      "$1 / (i\\omega)$",
      "$e^{-i\\omega}$"
    ],
    "answer": "B",
    "explanation": "Since $\\mathcal{F}\\{1/(\\pi t)\\} = -i\\,\\text{sgn}(\\omega)$, convolution with $1/(\\pi t)$ acts as a $-90^\\circ$ phase shifter for positive frequencies: $-i\\,\\text{sgn}(\\omega)$."
  },
  {
    "prompt": "The Poisson Summation Formula equates samples of a function to samples of its Fourier transform via:",
    "options": [
      "$\\sum_{n=-\\infty}^\\infty f(n T) = \\frac{1}{T} \\sum_{k=-\\infty}^\\infty F\\left(\\frac{2\\pi k}{T}\\right)$",
      "$\\sum_{n=-\\infty}^\\infty f(n) = \\sum_{k=-\\infty}^\\infty F(k)$",
      "$\\sum_{n=0}^\\infty f(n) = \\int_0^\\infty F(\\omega)\\,d\\omega$",
      "$\\sum_{n=-\\infty}^\\infty f(n T) = T \\sum_{k=-\\infty}^\\infty F(k T)$"
    ],
    "answer": "A",
    "explanation": "Poisson summation states $\\sum_{n=-\\infty}^\\infty f(nT) = \\frac{1}{T}\\sum_{k=-\\infty}^\\infty F(2\\pi k / T)$, linking sampling to periodic spectral replication."
  }
];

export const CALC_B_Z_TRANSFORM_QUIZ = [
  {
    "prompt": "What is the definition of the unilateral Z-Transform of a discrete sequence $x[n]$ for $n \\ge 0$?",
    "options": [
      "$\\sum_{n=-\\infty}^\\infty x[n] z^n$",
      "$\\sum_{n=0}^\\infty x[n] z^n$",
      "$\\int_0^\\infty x(t) z^{-t}\\,dt$",
      "$\\sum_{n=0}^\\infty x[n] z^{-n}$"
    ],
    "answer": "D",
    "explanation": "The unilateral Z-transform is defined as $\\mathcal{Z}\\{x[n]\\} = X(z) = \\sum_{n=0}^\\infty x[n] z^{-n}$."
  },
  {
    "prompt": "What is the Region of Convergence (ROC) of the causal geometric sequence $x[n] = a^n u[n]$?",
    "options": [
      "$|z| < |a|$",
      "$|z| = |a|$",
      "$|z| > |a|$",
      "The entire complex plane"
    ],
    "answer": "C",
    "explanation": "The geometric series $\\sum_{n=0}^\\infty (a z^{-1})^n$ converges if and only if $|a z^{-1}| < 1 \\iff |z| > |a|$."
  },
  {
    "prompt": "What is the Z-Transform of the causal geometric sequence $x[n] = a^n u[n]$?",
    "options": [
      "$\\frac{1}{1 - z^{-1}}$",
      "$\\frac{1}{1 - a z^{-1}} = \\frac{z}{z - a}$",
      "$\\frac{z}{z + a}$",
      "$\\frac{a}{z - a}$"
    ],
    "answer": "B",
    "explanation": "Summing the geometric series yields $\\sum_{n=0}^\\infty (a/z)^n = \\frac{1}{1 - a/z} = \\frac{z}{z - a}$ for $|z| > |a|$."
  },
  {
    "prompt": "What is the Z-Transform of the unit impulse sequence $\\delta[n]$?",
    "options": [
      "$1$ for all $z$",
      "$1 / z$",
      "$z / (z - 1)$",
      "$0$"
    ],
    "answer": "A",
    "explanation": "Since $\\delta[0] = 1$ and $\\delta[n] = 0$ for $n \\neq 0$, $X(z) = \\delta[0] z^0 = 1$ for all complex $z$."
  },
  {
    "prompt": "What is the Z-Transform of the discrete unit step sequence $u[n]$?",
    "options": [
      "$\\frac{1}{z - 1}$",
      "$\\frac{z}{z + 1}$",
      "$\\frac{1}{z}$",
      "$\\frac{z}{z - 1}$ with $|z| > 1$"
    ],
    "answer": "D",
    "explanation": "Setting $a = 1$ in the geometric formula produces $\\mathcal{Z}\\{u[n]\\} = \\frac{z}{z - 1}$ with ROC $|z| > 1$."
  },
  {
    "prompt": "How is the Discrete-Time Fourier Transform (DTFT) related to the Z-Transform?",
    "options": [
      "DTFT is the derivative of the Z-Transform",
      "DTFT is the Z-Transform evaluated at $z = 0$",
      "DTFT is the Z-Transform evaluated on the unit circle $z = e^{i\\omega}$",
      "They only coincide for finite-length sequences"
    ],
    "answer": "C",
    "explanation": "Evaluating $X(z)$ on the unit circle $z = e^{i\\omega}$ directly produces the DTFT: $X(e^{i\\omega}) = \\sum_{n=-\\infty}^\\infty x[n]e^{-i\\omega n}$."
  },
  {
    "prompt": "For a causal sequence $x[n]$ with $x[n] = 0$ for $n < 0$, what is the unilateral Time Shifting Property for $x[n - 1]$?",
    "options": [
      "$z X(z) - x[0]$",
      "$z^{-1} X(z)$",
      "$z^{-1} X(z) + x[0]$",
      "$z^{-1} X(z) - x[-1]$"
    ],
    "answer": "B",
    "explanation": "For a sequence that is strictly zero for $n < 0$, delaying by 1 sample corresponds to multiplication by $z^{-1}$."
  },
  {
    "prompt": "What is the unilateral advance property for $x[n+1]$?",
    "options": [
      "$z X(z) - z x[0]$",
      "$z X(z)$",
      "$z X(z) + x[0]$",
      "$z^{-1} X(z) - x[0]$"
    ],
    "answer": "A",
    "explanation": "$\\sum_{n=0}^\\infty x[n+1]z^{-n} = z\\sum_{m=1}^\\infty x[m]z^{-m} = z[X(z) - x[0]] = z X(z) - z x[0]$."
  },
  {
    "prompt": "What is the unilateral advance property for $x[n+2]$?",
    "options": [
      "$z^2 X(z) - z x[0] - x[1]$",
      "$z^2 X(z) - x[0] - x[1]$",
      "$z^2 X(z)$",
      "$z^2 X(z) - z^2 x[0] - z x[1]$"
    ],
    "answer": "D",
    "explanation": "Applying the single advance rule twice yields $\\mathcal{Z}\\{x[n+2]\\} = z^2 X(z) - z^2 x[0] - z x[1]$."
  },
  {
    "prompt": "What is the Initial Value Theorem for the unilateral Z-Transform?",
    "options": [
      "$x[0] = \\lim_{z \\to 0} X(z)$",
      "$x[0] = \\lim_{z \\to 1} (z - 1) X(z)$",
      "$x[0] = \\lim_{z \\to \\infty} X(z)$",
      "$x[0] = X(1)$"
    ],
    "answer": "C",
    "explanation": "Since $X(z) = x[0] + x[1]z^{-1} + x[2]z^{-2} + \\dots$, taking $z \\to \\infty$ eliminates all $z^{-k}$ terms ($k \\ge 1$), leaving $x[0] = \\lim_{z \\to \\infty} X(z)$."
  },
  {
    "prompt": "The Final Value Theorem states that if $(z - 1)X(z)$ is analytic on and outside the unit circle, $\\lim_{n \\to \\infty} x[n]$ equals:",
    "options": [
      "$\\lim_{z \\to 0} (z - 1) X(z)$",
      "$\\lim_{z \\to 1} (z - 1) X(z)$",
      "$\\lim_{z \\to \\infty} X(z)$",
      "$X(1)$"
    ],
    "answer": "B",
    "explanation": "The Final Value Theorem proves that $\\lim_{n \\to \\infty} x[n] = \\lim_{z \\to 1} (z - 1) X(z)$, provided the poles of $(z-1)X(z)$ lie strictly inside the open unit circle."
  },
  {
    "prompt": "What is the Z-Transform of the ramp sequence $x[n] = n u[n]$?",
    "options": [
      "$\\frac{z}{(z - 1)^2}$",
      "$\\frac{1}{(z - 1)^2}$",
      "$\\frac{z^2}{(z - 1)^2}$",
      "$\\frac{z}{z - 1}$"
    ],
    "answer": "A",
    "explanation": "Using the differentiation property $\\mathcal{Z}\\{n x[n]\\} = -z \\frac{dX}{dz}$ on $X(z) = \\frac{z}{z-1}$ gives $-z \\frac{(z-1) - z}{(z-1)^2} = \\frac{z}{(z - 1)^2}$."
  },
  {
    "prompt": "The Convolution Property states that $\\mathcal{Z}\\{x[n] * h[n]\\} = \\mathcal{Z}\\left\\{\\sum_{k=-\\infty}^\\infty x[k] h[n - k]\\right\\}$ equals:",
    "options": [
      "$X(z) + H(z)$",
      "$\\frac{1}{2\\pi i} \\oint X(v) H(z/v)\\,dv$",
      "$X(z) * H(z)$",
      "$X(z) \\cdot H(z)$"
    ],
    "answer": "D",
    "explanation": "Discrete convolution in the time domain corresponds directly to polynomial/rational multiplication in the z-domain: $Y(z) = X(z)H(z)$."
  },
  {
    "prompt": "Solve the first-order difference equation $y[n+1] - 2y[n] = 0$ with initial condition $y[0] = 3$:",
    "options": [
      "$y[n] = 2 \\cdot 3^n$",
      "$y[n] = 3 + 2n$",
      "$y[n] = 3 \\cdot 2^n$",
      "$y[n] = 2^n$"
    ],
    "answer": "C",
    "explanation": "$z Y(z) - z y[0] - 2 Y(z) = 0 \\implies (z - 2) Y(z) = 3z \\implies Y(z) = \\frac{3z}{z - 2} \\implies y[n] = 3 \\cdot 2^n$."
  },
  {
    "prompt": "Solve the Fibonacci recurrence $F[n+2] = F[n+1] + F[n]$ with $F[0] = 0, F[1] = 1$. The transfer function $F(z)$ is:",
    "options": [
      "$\\frac{z^2}{z^2 - z - 1}$",
      "$\\frac{z}{z^2 - z - 1}$",
      "$\\frac{1}{z^2 - z - 1}$",
      "$\\frac{z - 1}{z^2 - z - 1}$"
    ],
    "answer": "B",
    "explanation": "$z^2 F(z) - z^2(0) - z(1) = z F(z) - z(0) + F(z) \\implies (z^2 - z - 1) F(z) = z \\implies F(z) = \\frac{z}{z^2 - z - 1}$."
  },
  {
    "prompt": "A discrete-time linear time-invariant (LTI) system with transfer function $H(z)$ is bounded-input bounded-output (BIBO) stable if and only if:",
    "options": [
      "All poles of $H(z)$ lie strictly inside the unit circle ($|p_k| < 1$)",
      "All poles lie outside the unit circle",
      "All zeros lie inside the unit circle",
      "$H(1) = 0$"
    ],
    "answer": "A",
    "explanation": "For a causal system, BIBO stability requires the impulse response to be absolutely summable $\\sum |h[n]| < \\infty$, which occurs iff the ROC includes the unit circle, meaning all poles have magnitude $|p| < 1$."
  },
  {
    "prompt": "What is the inverse Z-transform of $X(z) = \\frac{z}{z - 0.5}$ for $|z| > 0.5$?",
    "options": [
      "$-(0.5)^n u[-n-1]$",
      "$(0.5)^n$",
      "$2^n u[n]$",
      "$(0.5)^n u[n]$"
    ],
    "answer": "D",
    "explanation": "The standard causal transform pair is $\\mathcal{Z}^{-1}\\left\\{\\frac{z}{z - a}\\right\\} = a^n u[n]$, so here $x[n] = (0.5)^n u[n]$."
  },
  {
    "prompt": "What is the Frequency Scaling (Multiplication by $a^n$) property in the z-domain: $\\mathcal{Z}\\{a^n x[n]\\}$?",
    "options": [
      "$X(a z)$",
      "$a X(z)$",
      "$X(z / a)$",
      "$X(z - a)$"
    ],
    "answer": "C",
    "explanation": "$\\sum_{n=0}^\\infty (a^n x[n]) z^{-n} = \\sum_{n=0}^\\infty x[n] (z/a)^{-n} = X(z / a)$."
  },
  {
    "prompt": "The inversion integral (Cauchy Residue formula) for the Z-Transform is given by:",
    "options": [
      "$x[n] = \\frac{1}{2\\pi} \\int_0^{2\\pi} X(z)\\,dz$",
      "$x[n] = \\frac{1}{2\\pi i} \\oint_C X(z) z^{n-1}\\,dz$",
      "$x[n] = \\frac{1}{2\\pi i} \\oint_C X(z) z^{-n-1}\\,dz$",
      "$x[n] = \\sum \\text{Res}[X(z)]$"
    ],
    "answer": "B",
    "explanation": "By Cauchy's integral formula, $x[n] = \\frac{1}{2\\pi i} \\oint_C X(z) z^{n-1}\\,dz$ integrated counterclockwise along a closed contour in the ROC."
  },
  {
    "prompt": "Find the steady-state output $y_{ss}[n]$ of a stable system $H(z)$ driven by constant input $x[n] = 1$ for $n \\ge 0$:",
    "options": [
      "$H(1)$",
      "$H(0)$",
      "$\\infty$",
      "$0$"
    ],
    "answer": "A",
    "explanation": "By the Final Value Theorem, $y_{ss} = \\lim_{z \\to 1} (z - 1) Y(z) = \\lim_{z \\to 1} (z - 1) H(z) \\frac{z}{z - 1} = H(1)$ (DC gain)."
  }
];

export const CALC_C_INTRO_PDES_QUIZ = [
  {
    "prompt": "What is the standard 1D homogeneous Heat Conduction Equation for thermal diffusivity $\\alpha^2 > 0$?",
    "options": [
      "$\\frac{\\partial^2 u}{\\partial t^2} = \\alpha^2 \\frac{\\partial^2 u}{\\partial x^2}$",
      "$\\frac{\\partial u}{\\partial t} + \\alpha \\frac{\\partial u}{\\partial x} = 0$",
      "$\\frac{\\partial^2 u}{\\partial x^2} + \\frac{\\partial^2 u}{\\partial y^2} = 0$",
      "$\\frac{\\partial u}{\\partial t} = \\alpha^2 \\frac{\\partial^2 u}{\\partial x^2}$"
    ],
    "answer": "D",
    "explanation": "The standard one-dimensional parabolic heat equation relating the time rate of change of temperature to spatial curvature is $u_t = \\alpha^2 u_{xx}$."
  },
  {
    "prompt": "What is the standard 1D homogeneous Wave Equation for wave propagation speed $c > 0$?",
    "options": [
      "$\\frac{\\partial u}{\\partial t} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$",
      "$\\frac{\\partial^2 u}{\\partial t^2} + c^2 \\frac{\\partial^2 u}{\\partial x^2} = 0$",
      "$\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\frac{\\partial^2 u}{\\partial x^2}$",
      "$\\frac{\\partial u}{\\partial t} = c \\frac{\\partial u}{\\partial x}$"
    ],
    "answer": "C",
    "explanation": "The standard hyperbolic wave equation governing vibrating strings and acoustic waves is $u_{tt} = c^2 u_{xx}$."
  },
  {
    "prompt": "When applying the method of separation of variables $u(x, t) = X(x)T(t)$ to the heat equation $u_t = \\alpha^2 u_{xx}$, what coupled ODEs result with separation constant $-\\lambda$?",
    "options": [
      "$X''(x) - \\lambda X(x) = 0$ and $T''(t) + \\lambda \\alpha^2 T(t) = 0$",
      "$X''(x) + \\lambda X(x) = 0$ and $T'(t) + \\lambda \\alpha^2 T(t) = 0$",
      "$X'(x) + \\lambda X(x) = 0$ and $T'(t) - \\lambda \\alpha^2 T(t) = 0$",
      "$X''(x) + \\lambda^2 X(x) = 0$ and $T'(t) + \\lambda T(t) = 0$"
    ],
    "answer": "B",
    "explanation": "Substituting $u = XT$ gives $X T' = \\alpha^2 X'' T \\implies \\frac{T'}{\\alpha^2 T} = \\frac{X''}{X} = -\\lambda$, giving $X'' + \\lambda X = 0$ and $T' + \\lambda \\alpha^2 T = 0$."
  },
  {
    "prompt": "For a heat equation on $0 \\le x \\le L$ with homogeneous Dirichlet boundary conditions $u(0, t) = 0$ and $u(L, t) = 0$, what are the spatial eigenvalues $\\lambda_n$?",
    "options": [
      "$\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2, \\quad n = 1, 2, 3, \\dots$",
      "$\\lambda_n = \\frac{n\\pi}{L}, \\quad n = 1, 2, 3, \\dots$",
      "$\\lambda_n = \\left(\\frac{(2n-1)\\pi}{2L}\\right)^2, \\quad n = 1, 2, 3, \\dots$",
      "$\\lambda_n = n^2 \\pi^2 L^2, \\quad n = 1, 2, 3, \\dots$"
    ],
    "answer": "A",
    "explanation": "The boundary value problem $X'' + \\lambda X = 0$ with $X(0) = X(L) = 0$ yields non-trivial sinusoidal eigenfunctions $X_n(x) = \\sin(n\\pi x / L)$ with eigenvalues $\\lambda_n = (n\\pi / L)^2$."
  },
  {
    "prompt": "What is the general time-decay factor $T_n(t)$ for the $n$-th mode of the heat equation $u_t = \\alpha^2 u_{xx}$ on $[0, L]$?",
    "options": [
      "$e^{-\\alpha (n\\pi / L) t}$",
      "$\\cos\\left(\\alpha \\frac{n\\pi}{L} t\\right)$",
      "$e^{+\\alpha^2 (n\\pi / L)^2 t}$",
      "$e^{-\\alpha^2 (n\\pi / L)^2 t}$"
    ],
    "answer": "D",
    "explanation": "Solving $T' + \\lambda_n \\alpha^2 T = 0$ with $\\lambda_n = (n\\pi/L)^2$ gives exponential thermal dissipation $T_n(t) = C_n e^{-\\alpha^2 (n\\pi/L)^2 t}$."
  },
  {
    "prompt": "When applying separation of variables $u(x, t) = X(x)T(t)$ to the wave equation $u_{tt} = c^2 u_{xx}$, what ODE governs the temporal component $T(t)$?",
    "options": [
      "$T'(t) + c^2 \\lambda T(t) = 0$",
      "$T''(t) - c \\lambda T(t) = 0$",
      "$T''(t) + c^2 \\lambda T(t) = 0$",
      "$T'(t) + c \\lambda^2 T(t) = 0$"
    ],
    "answer": "C",
    "explanation": "Separating variables gives $\\frac{T''}{c^2 T} = \\frac{X''}{X} = -\\lambda$, which produces the harmonic oscillator ODE $T'' + c^2 \\lambda T = 0$."
  },
  {
    "prompt": "What are the temporal modal solutions $T_n(t)$ for the vibrating string with fixed ends ($u(0, t) = u(L, t) = 0$)?",
    "options": [
      "$A_n e^{-(n\\pi c / L) t} + B_n e^{(n\\pi c / L) t}$",
      "$A_n \\cos\\left(\\frac{n\\pi c}{L} t\\right) + B_n \\sin\\left(\\frac{n\\pi c}{L} t\\right)$",
      "$A_n \\cos\\left(\\frac{n^2 \\pi^2 c^2}{L^2} t\\right)$",
      "$A_n \\cosh\\left(\\frac{n\\pi c}{L} t\\right) + B_n \\sinh\\left(\\frac{n\\pi c}{L} t\\right)$"
    ],
    "answer": "B",
    "explanation": "With $\\lambda_n = (n\\pi/L)^2$ and $\\omega_n = n\\pi c / L$, the general solution to $T'' + \\omega_n^2 T = 0$ is $A_n \\cos(\\omega_n t) + B_n \\sin(\\omega_n t)$."
  },
  {
    "prompt": "What is the physical interpretation of the separation constant $\\lambda$ being strictly positive ($\\lambda > 0$) for fixed-end strings and bars?",
    "options": [
      "It guarantees bounded oscillatory spatial modes (sines and cosines) that can satisfy zero boundary conditions",
      "It guarantees unlimited exponential heating",
      "It implies the wave propagates faster than light",
      "It indicates that time flows in reverse"
    ],
    "answer": "A",
    "explanation": "If $\\lambda \\le 0$, the spatial solutions are hyperbolic or linear, which cannot satisfy $X(0) = X(L) = 0$ non-trivially. Only $\\lambda > 0$ yields oscillatory trigonometric modes."
  },
  {
    "prompt": "For insulated Neumann boundary conditions on a heat rod: $u_x(0, t) = 0$ and $u_x(L, t) = 0$, what are the spatial eigenfunctions?",
    "options": [
      "$X_n(x) = \\sin\\left(\\frac{n\\pi x}{L}\\right), \\quad n = 1, 2, 3, \\dots$",
      "$X_n(x) = \\tan\\left(\\frac{n\\pi x}{L}\\right), \\quad n = 1, 2, 3, \\dots$",
      "$X_n(x) = \\exp\\left(-\\frac{n\\pi x}{L}\\right), \\quad n = 0, 1, 2, \\dots$",
      "$X_n(x) = \\cos\\left(\\frac{n\\pi x}{L}\\right), \\quad n = 0, 1, 2, \\dots$"
    ],
    "answer": "D",
    "explanation": "Zero derivative boundary conditions select the cosine family $X_n(x) = \\cos(n\\pi x / L)$ including the constant zero mode $n = 0$."
  },
  {
    "prompt": "What is the long-term steady-state temperature distribution $\\lim_{t \\to \\infty} u(x, t)$ for an insulated rod ($u_x(0, t) = u_x(L, t) = 0$) with initial temperature $f(x)$?",
    "options": [
      "Zero everywhere: $u(x, \\infty) = 0$",
      "Infinite temperature due to heat trapping",
      "The spatial average temperature: $\\frac{1}{L} \\int_0^L f(x)\\,dx$",
      "A sinusoidal standing wave"
    ],
    "answer": "C",
    "explanation": "All decay factors $e^{-\\alpha^2 (n\\pi/L)^2 t}$ for $n \\ge 1$ vanish as $t \\to \\infty$, leaving only the preserved $n = 0$ average temperature $\\frac{a_0}{2} = \\frac{1}{L}\\int_0^L f(x)\\,dx$."
  },
  {
    "prompt": "In d'Alembert's traveling wave formulation of the 1D wave equation on an infinite line, the general solution takes what form?",
    "options": [
      "$u(x, t) = F(x) \\cos(ct) + G(x) \\sin(ct)$",
      "$u(x, t) = F(x - ct) + G(x + ct)$",
      "$u(x, t) = e^{-ct} [F(x) + G(x)]$",
      "$u(x, t) = F(x^2 - c^2 t^2)$"
    ],
    "answer": "B",
    "explanation": "Factoring the wave operator $(\\partial_t^2 - c^2 \\partial_x^2) = (\\partial_t - c\\partial_x)(\\partial_t + c\\partial_x)$ yields the superposition of right-traveling $F(x-ct)$ and left-traveling $G(x+ct)$ waves."
  },
  {
    "prompt": "How are the Fourier coefficients $c_n$ determined from the initial temperature profile $u(x, 0) = f(x)$ for Dirichlet boundary conditions?",
    "options": [
      "$c_n = \\frac{2}{L} \\int_0^L f(x) \\sin\\left(\\frac{n\\pi x}{L}\\right)\\,dx$",
      "$c_n = \\frac{1}{L} \\int_0^L f(x) \\cos\\left(\\frac{n\\pi x}{L}\\right)\\,dx$",
      "$c_n = \\int_0^L f(x)\\,dx$",
      "$c_n = \\frac{2}{\\pi} \\int_0^\\pi f(x) e^{-n x}\\,dx$"
    ],
    "answer": "A",
    "explanation": "By orthogonality of the sine basis over $[0, L]$, the Fourier half-range sine coefficients are given by $c_n = \\frac{2}{L} \\int_0^L f(x) \\sin(n\\pi x / L)\\,dx$."
  },
  {
    "prompt": "If a plucked string of length $L$ is released from rest with initial position $u(x, 0) = f(x)$ and zero initial velocity $u_t(x, 0) = 0$, what happens to the sine terms $B_n$ in $T_n(t)$?",
    "options": [
      "All $A_n = 0$, so only $B_n \\sin$ terms remain",
      "Both $A_n = 0$ and $B_n = 0$",
      "The wave does not propagate",
      "All $B_n = 0$, so $u(x, t) = \\sum_{n=1}^\\infty A_n \\sin\\left(\\frac{n\\pi x}{L}\\right) \\cos\\left(\\frac{n\\pi c}{L} t\\right)$"
    ],
    "answer": "D",
    "explanation": "Evaluating the velocity condition: $u_t(x, 0) = \\sum \\omega_n B_n \\sin(n\\pi x / L) = 0 \\implies B_n = 0$ for all $n$."
  },
  {
    "prompt": "What is the classification of the 1D Heat Equation according to the discriminant $B^2 - 4AC$ of second-order linear PDEs?",
    "options": [
      "Hyperbolic ($B^2 - 4AC > 0$)",
      "Elliptic ($B^2 - 4AC < 0$)",
      "Parabolic ($B^2 - 4AC = 0$)",
      "Ultra-hyperbolic"
    ],
    "answer": "C",
    "explanation": "For $u_t - \\alpha^2 u_{xx} = 0$, coefficients with respect to $x$ and $t$ are $A = -\\alpha^2, B = 0, C = 0$, giving $B^2 - 4AC = 0$, which is parabolic."
  },
  {
    "prompt": "What is the classification of the 1D Wave Equation $u_{tt} - c^2 u_{xx} = 0$ according to the PDE discriminant?",
    "options": [
      "Parabolic ($B^2 - 4AC = 0$)",
      "Hyperbolic ($B^2 - 4AC = 4c^2 > 0$)",
      "Elliptic ($B^2 - 4AC < 0$)",
      "Circular"
    ],
    "answer": "B",
    "explanation": "For $u_{tt} - c^2 u_{xx} = 0$, $A = -c^2, B = 0, C = 1$, giving $B^2 - 4AC = 0 - 4(-c^2)(1) = 4c^2 > 0$, which is hyperbolic."
  },
  {
    "prompt": "What fundamental physical principle ensures that the solution to the heat equation $u(x, t)$ on a bounded domain achieves its extremes only at the initial time or boundaries?",
    "options": [
      "The Maximum/Minimum Principle",
      "The Uncertainty Principle",
      "The Principle of Least Action",
      "Bernoulli's Principle"
    ],
    "answer": "A",
    "explanation": "The Maximum Principle for parabolic PDEs states that the maximum and minimum values of temperature occur on the parabolic boundary (initial time $t=0$ or lateral spatial boundaries $x=0, L$)."
  },
  {
    "prompt": "Why can the separation of variables method NOT be applied directly to a PDE with non-homogeneous boundary conditions such as $u(0, t) = T_1 \\ne 0$?",
    "options": [
      "Because non-homogeneous boundaries make the diffusivity imaginary",
      "Because trigonometric functions cannot exist at non-zero values",
      "Because the speed of sound becomes variable",
      "Because non-homogeneous boundary conditions violate the linear vector space structure required for linear superposition"
    ],
    "answer": "D",
    "explanation": "Superposition requires a linear subspace with zero boundary conditions. Non-homogeneous conditions must first be shifted by subtracting a steady-state solution $v(x)$."
  },
  {
    "prompt": "What fundamental frequency $\\nu_1$ (in Hertz) does a string of length $L$ with wave speed $c$ produce in its first harmonic?",
    "options": [
      "$\\nu_1 = \\frac{c}{L}$",
      "$\\nu_1 = \\frac{2\\pi c}{L}$",
      "$\\nu_1 = \\frac{c}{2L}$",
      "$\\nu_1 = \\frac{c}{4L}$"
    ],
    "answer": "C",
    "explanation": "The fundamental angular frequency is $\\omega_1 = \\frac{\\pi c}{L}$. Since $\\omega = 2\\pi \\nu$, the frequency is $\\nu_1 = \\frac{\\omega_1}{2\\pi} = \\frac{\\pi c / L}{2\\pi} = \\frac{c}{2L}$."
  },
  {
    "prompt": "For the wave equation on a finite string $0 \\le x \\le L$ with $u(0, t) = u(L, t) = 0$, the total mechanical energy $E(t) = \\frac{1}{2} \\int_0^L \\left( u_t^2 + c^2 u_x^2 \\right) dx$ is:",
    "options": [
      "Decaying exponentially with rate $e^{-2ct}$",
      "Strictly conserved for all $t \\ge 0$ ($dE/dt = 0$)",
      "Increasing linearly with time",
      "Zero at all times"
    ],
    "answer": "B",
    "explanation": "Differentiating under the integral and integrating by parts with fixed boundary conditions shows $dE/dt = 0$, proving exact energy conservation for the wave equation."
  },
  {
    "prompt": "What distinguishes the qualitative behavior of solutions to the Heat Equation versus the Wave Equation as $t \\to \\infty$?",
    "options": [
      "Heat solutions smooth out and dissipate energy irreversibly, whereas wave solutions maintain their oscillatory energy indefinitely",
      "Heat solutions oscillate forever while wave solutions instantly vanish",
      "Both equations have identical oscillatory behavior",
      "Heat solutions produce shock waves while wave solutions smooth out"
    ],
    "answer": "A",
    "explanation": "The heat equation is dissipative and mathematically irreversible with infinite propagation speed, whereas the wave equation preserves modal energy with finite propagation speed $c$."
  }
];

export const CALC_C_ORTHOGONAL_POLY_QUIZ = [
  {
    "prompt": "What is the defining orthogonality condition for a family of polynomials $\\{p_n(x)\\}$ on an interval $[a, b]$ with weight function $w(x) > 0$?",
    "options": [
      "$\\int_a^b p_n(x) p_m(x)\\,dx = 1 \\quad \\text{for all } n, m$",
      "$\\frac{d}{dx}[p_n(x) p_m(x)] = 0$",
      "$\\sum_{k=0}^n p_k(x) = p_{n+1}(x)$",
      "$\\int_a^b p_n(x) p_m(x) w(x)\\,dx = 0 \\quad \\text{for all } n \\ne m$"
    ],
    "answer": "D",
    "explanation": "Polynomials are orthogonal with respect to weight $w(x)$ on $[a, b]$ if their weighted inner product $\\langle p_n, p_m \\rangle_w = \\int_a^b p_n(x) p_m(x) w(x)\\,dx$ vanishes whenever $n \\ne m$."
  },
  {
    "prompt": "What is the interval of orthogonality and weight function $w(x)$ for the classical Legendre polynomials $P_n(x)$?",
    "options": [
      "Interval $[0, 1]$ with weight $w(x) = x$",
      "Interval $[-\\infty, \\infty]$ with weight $w(x) = e^{-x^2}$",
      "Interval $[-1, 1]$ with weight $w(x) = 1$",
      "Interval $[-1, 1]$ with weight $w(x) = (1 - x^2)^{-1/2}$"
    ],
    "answer": "C",
    "explanation": "Legendre polynomials are orthogonal on $[-1, 1]$ with uniform unit weight $w(x) = 1$."
  },
  {
    "prompt": "What is Rodrigues' formula for the Legendre polynomials $P_n(x)$?",
    "options": [
      "$P_n(x) = \\frac{1}{n!} \\frac{d^n}{dx^n} \\left(x^2 + 1\\right)^n$",
      "$P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n} \\left(x^2 - 1\\right)^n$",
      "$P_n(x) = (-1)^n e^{x^2} \\frac{d^n}{dx^n} e^{-x^2}$",
      "$P_n(x) = \\frac{1}{2^n} \\left(x^2 - 1\\right)^n$"
    ],
    "answer": "B",
    "explanation": "Rodrigues' generating formula generates $P_n(x)$ via $P_n(x) = \\frac{1}{2^n n!} \\frac{d^n}{dx^n} (x^2 - 1)^n$."
  },
  {
    "prompt": "What are the first three Legendre polynomials $P_0(x), P_1(x), P_2(x)$?",
    "options": [
      "$P_0(x) = 1, \\quad P_1(x) = x, \\quad P_2(x) = \\frac{1}{2}(3x^2 - 1)$",
      "$P_0(x) = 1, \\quad P_1(x) = 2x, \\quad P_2(x) = 4x^2 - 2$",
      "$P_0(x) = 0, \\quad P_1(x) = x, \\quad P_2(x) = x^2$",
      "$P_0(x) = 1, \\quad P_1(x) = x, \\quad P_2(x) = 2x^2 - 1$"
    ],
    "answer": "A",
    "explanation": "From Rodrigues' formula or recurrence: $P_0(x) = 1$, $P_1(x) = x$, and $P_2(x) = \\frac{1}{2}(3x^2 - 1)$."
  },
  {
    "prompt": "What is the value of the norm squared $\\int_{-1}^1 [P_n(x)]^2\\,dx$ for the Legendre polynomials?",
    "options": [
      "$\\frac{1}{n + 1}$",
      "$\\frac{2}{n!}$",
      "$1$",
      "$\\frac{2}{2n + 1}$"
    ],
    "answer": "D",
    "explanation": "The normalization integral for Legendre polynomials is $\\int_{-1}^1 [P_n(x)]^2\\,dx = \\frac{2}{2n + 1}$."
  },
  {
    "prompt": "What is the fundamental 3-term recurrence relation for Legendre polynomials?",
    "options": [
      "$P_{n+1}(x) = 2x P_n(x) - P_{n-1}(x)$",
      "$P_{n+1}(x) = x P_n(x) - n P_{n-1}(x)$",
      "$(n + 1) P_{n+1}(x) = (2n + 1) x P_n(x) - n P_{n-1}(x)$",
      "$(2n + 1) P_{n+1}(x) = n x P_n(x) - (n + 1) P_{n-1}(x)$"
    ],
    "answer": "C",
    "explanation": "Bonnet's recurrence formula connects three consecutive Legendre polynomials: $(n+1)P_{n+1}(x) = (2n+1)xP_n(x) - nP_{n-1}(x)$."
  },
  {
    "prompt": "What is the interval of orthogonality and weight function $w(x)$ for Chebyshev polynomials of the first kind $T_n(x)$?",
    "options": [
      "Interval $[-1, 1]$ with weight $w(x) = \\sqrt{1 - x^2}$",
      "Interval $[-1, 1]$ with weight $w(x) = \\frac{1}{\\sqrt{1 - x^2}}$",
      "Interval $[0, \\infty]$ with weight $w(x) = e^{-x}$",
      "Interval $[-\\infty, \\infty]$ with weight $w(x) = e^{-x^2}$"
    ],
    "answer": "B",
    "explanation": "Chebyshev polynomials of the first kind $T_n(x)$ are orthogonal on $[-1, 1]$ with singular weight $w(x) = (1 - x^2)^{-1/2}$."
  },
  {
    "prompt": "What is the trigonometric definition of Chebyshev polynomials of the first kind $T_n(x)$ for $x = \\cos\\theta$?",
    "options": [
      "$T_n(x) = \\cos(n \\arccos x) = \\cos(n\\theta)$",
      "$T_n(x) = \\sin(n \\arccos x) = \\sin(n\\theta)$",
      "$T_n(x) = \\tan(n\\theta)$",
      "$T_n(x) = \\frac{\\sin((n+1)\\theta)}{\\sin\\theta}$"
    ],
    "answer": "A",
    "explanation": "Setting $x = \\cos\\theta$, the Chebyshev polynomial is defined as $T_n(x) = \\cos(n\\theta) = \\cos(n \\arccos x)$."
  },
  {
    "prompt": "What is the 3-term recurrence relation for Chebyshev polynomials of the first kind $T_n(x)$?",
    "options": [
      "$T_{n+1}(x) = x T_n(x) - 2 T_{n-1}(x)$",
      "$T_{n+1}(x) = (2n + 1) x T_n(x) - n T_{n-1}(x)$",
      "$T_{n+1}(x) = 2x T_n(x) + T_{n-1}(x)$",
      "$T_{n+1}(x) = 2x T_n(x) - T_{n-1}(x)$"
    ],
    "answer": "D",
    "explanation": "From the trigonometric identity $\\cos((n+1)\\theta) + \\cos((n-1)\\theta) = 2\\cos\\theta\\cos(n\\theta)$, we have $T_{n+1}(x) = 2xT_n(x) - T_{n-1}(x)$."
  },
  {
    "prompt": "What are the first four Chebyshev polynomials $T_0(x), T_1(x), T_2(x), T_3(x)$?",
    "options": [
      "$T_0 = 1, \\quad T_1 = 2x, \\quad T_2 = 4x^2 - 1, \\quad T_3 = 8x^3 - 4x$",
      "$T_0 = 0, \\quad T_1 = x, \\quad T_2 = x^2, \\quad T_3 = x^3$",
      "$T_0 = 1, \\quad T_1 = x, \\quad T_2 = 2x^2 - 1, \\quad T_3 = 4x^3 - 3x$",
      "$T_0 = 1, \\quad T_1 = x, \\quad T_2 = 3x^2 - 1, \\quad T_3 = 5x^3 - 3x$"
    ],
    "answer": "C",
    "explanation": "Using $T_0=1, T_1=x$ and recurrence $T_{n+1} = 2xT_n - T_{n-1}$: $T_2 = 2x(x) - 1 = 2x^2 - 1$, and $T_3 = 2x(2x^2 - 1) - x = 4x^3 - 3x$."
  },
  {
    "prompt": "Where do the $n$ real roots of $T_n(x)$ lie in the interval $[-1, 1]$ (the Chebyshev nodes)?",
    "options": [
      "$x_k = \\frac{2k - 1 - n}{n}, \\quad k = 1, 2, \\dots, n$",
      "$x_k = \\cos\\left(\\frac{2k - 1}{2n}\\pi\\right), \\quad k = 1, 2, \\dots, n$",
      "$x_k = \\sin\\left(\\frac{k\\pi}{n}\\right), \\quad k = 1, 2, \\dots, n$",
      "$x_k = \\pm \\frac{k}{n}, \\quad k = 1, 2, \\dots, n$"
    ],
    "answer": "B",
    "explanation": "Solving $T_n(x) = \\cos(n\\theta) = 0$ gives $n\\theta = \\frac{2k-1}{2}\\pi \\implies x_k = \\cos\\left(\\frac{2k-1}{2n}\\pi\\right)$, which minimizes Runge's interpolation phenomenon."
  },
  {
    "prompt": "What is the interval of orthogonality and weight function $w(x)$ for the Hermite polynomials $H_n(x)$ (physicist's convention)?",
    "options": [
      "Interval $(-\\infty, \\infty)$ with weight $w(x) = e^{-x^2}$",
      "Interval $[0, \\infty)$ with weight $w(x) = e^{-x}$",
      "Interval $[-1, 1]$ with weight $w(x) = 1$",
      "Interval $(-\\infty, \\infty)$ with weight $w(x) = \\frac{1}{1 + x^2}$"
    ],
    "answer": "A",
    "explanation": "Physicist's Hermite polynomials are orthogonal on $(-\\infty, \\infty)$ with Gaussian weight $w(x) = e^{-x^2}$."
  },
  {
    "prompt": "What is Rodrigues' formula for the Hermite polynomials $H_n(x)$?",
    "options": [
      "$H_n(x) = e^{-x^2} \\frac{d^n}{dx^n} \\left(e^{x^2}\\right)$",
      "$H_n(x) = \\frac{1}{n!} \\frac{d^n}{dx^n} \\left(e^{-x^2}\\right)$",
      "$H_n(x) = (-1)^n \\frac{d^n}{dx^n} \\left(1 - x^2\\right)^n$",
      "$H_n(x) = (-1)^n e^{x^2} \\frac{d^n}{dx^n} \\left(e^{-x^2}\\right)$"
    ],
    "answer": "D",
    "explanation": "The Rodrigues formula generating Hermite polynomials is $H_n(x) = (-1)^n e^{x^2} \\frac{d^n}{dx^n} (e^{-x^2})$."
  },
  {
    "prompt": "What are the first three Hermite polynomials $H_0(x), H_1(x), H_2(x)$?",
    "options": [
      "$H_0(x) = 1, \\quad H_1(x) = x, \\quad H_2(x) = x^2 - 1$",
      "$H_0(x) = 1, \\quad H_1(x) = 2x, \\quad H_2(x) = 2x^2 - 1$",
      "$H_0(x) = 1, \\quad H_1(x) = 2x, \\quad H_2(x) = 4x^2 - 2$",
      "$H_0(x) = 0, \\quad H_1(x) = 2x, \\quad H_2(x) = 4x^2$"
    ],
    "answer": "C",
    "explanation": "Differentiating: $H_0 = 1$, $H_1 = -e^{x^2} \\frac{d}{dx}(e^{-x^2}) = 2x$, and $H_2 = e^{x^2} \\frac{d^2}{dx^2}(e^{-x^2}) = 4x^2 - 2$."
  },
  {
    "prompt": "What is the 3-term recurrence relation for Hermite polynomials?",
    "options": [
      "$H_{n+1}(x) = x H_n(x) - n H_{n-1}(x)$",
      "$H_{n+1}(x) = 2x H_n(x) - 2n H_{n-1}(x)$",
      "$H_{n+1}(x) = 2x H_n(x) - H_{n-1}(x)$",
      "$H_{n+1}(x) = (2n + 1)x H_n(x) - 2 H_{n-1}(x)$"
    ],
    "answer": "B",
    "explanation": "The recurrence relation for Hermite polynomials is $H_{n+1}(x) = 2x H_n(x) - 2n H_{n-1}(x)$."
  },
  {
    "prompt": "What is the value of the orthogonality integral $\\int_{-\\infty}^\\infty [H_n(x)]^2 e^{-x^2}\\,dx$?",
    "options": [
      "$\\sqrt{\\pi} \\, 2^n n!$",
      "$\\sqrt{\\pi} \\, n!$",
      "$2^n n!$",
      "$\\frac{\\sqrt{\\pi}}{2n + 1}$"
    ],
    "answer": "A",
    "explanation": "The normalization of Hermite polynomials gives $\\int_{-\\infty}^\\infty H_n(x) H_m(x) e^{-x^2}\\,dx = \\sqrt{\\pi} 2^n n! \\, \\delta_{nm}$."
  },
  {
    "prompt": "In quantum mechanics, Hermite polynomials form the spatial wavefunctions of which fundamental physical system?",
    "options": [
      "The Hydrogen Atom",
      "The Free Particle",
      "The Finite Potential Well",
      "The Quantum Harmonic Oscillator"
    ],
    "answer": "D",
    "explanation": "The stationary energy eigenfunctions of the 1D quantum harmonic oscillator are $\\psi_n(x) = \\frac{1}{\\sqrt{2^n n! \\sqrt{\\pi}}} e^{-x^2/2} H_n(x)$."
  },
  {
    "prompt": "What linear second-order differential equation is satisfied by the Legendre polynomials $P_n(x)$?",
    "options": [
      "$(1 - x^2) y'' - x y' + n^2 y = 0$",
      "$y'' - 2x y' + 2n y = 0$",
      "$(1 - x^2) y'' - 2x y' + n(n + 1) y = 0$",
      "$x y'' + (1 - x) y' + n y = 0$"
    ],
    "answer": "C",
    "explanation": "Legendre's differential equation is $(1-x^2)y'' - 2xy' + n(n+1)y = 0$, having regular singular points at $x = \\pm 1$."
  },
  {
    "prompt": "What linear second-order differential equation is satisfied by Chebyshev polynomials of the first kind $T_n(x)$?",
    "options": [
      "$(1 - x^2) y'' - 2x y' + n(n + 1) y = 0$",
      "$(1 - x^2) y'' - x y' + n^2 y = 0$",
      "$y'' - 2x y' + 2n y = 0$",
      "$(1 - x^2) y'' + x y' - n^2 y = 0$"
    ],
    "answer": "B",
    "explanation": "Chebyshev's differential equation is $(1-x^2)y'' - xy' + n^2 y = 0$."
  },
  {
    "prompt": "What linear second-order differential equation is satisfied by Hermite polynomials $H_n(x)$?",
    "options": [
      "$y'' - 2x y' + 2n y = 0$",
      "$y'' + 2x y' + 2n y = 0$",
      "$(1 - x^2) y'' - 2x y' + n(n + 1) y = 0$",
      "$x y'' + (1 - x) y' + n y = 0$"
    ],
    "answer": "A",
    "explanation": "Hermite's differential equation is $y'' - 2x y' + 2n y = 0$."
  }
];
