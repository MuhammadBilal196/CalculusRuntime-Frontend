// src/data/mvAdvancedIntegrationQuizzes.js
// Advanced Integration & Variational Methods (Multivariable Calculus)
// Improper Multiple Integrals & the Gaussian Integral — 20 MCQs
// Calculus of Variations (Euler–Lagrange Equation) — 20 MCQs
// Format used by GuideMcqSection: { id, prompt, options[4], answer: "A" | "B" | "C" | "D", explanation }

export const MV_AI_IMPROPER_QUIZ = [
  {
    id: "ai-improper-1",
    prompt: "What is the value of the Gaussian integral $\\displaystyle\\int_{-\\infty}^{\\infty}e^{-x^2}\\,dx$?",
    options: ["$\\sqrt{\\pi}$", "$\\pi$", "$\\sqrt{2\\pi}$", "$1$"],
    answer: "A",
    explanation:
      "Squaring gives $\\iint_{\\mathbb R^2}e^{-(x^2+y^2)}\\,dA=\\pi$ in polar coordinates, so the integral is $\\sqrt\\pi$.",
  },
  {
    id: "ai-improper-2",
    prompt: "Evaluate $\\displaystyle\\iint_{\\mathbb R^2}e^{-(x^2+y^2)}\\,dA$.",
    options: ["$2\\pi$", "$\\pi$", "$\\sqrt\\pi$", "$\\dfrac{\\pi}{2}$"],
    answer: "B",
    explanation:
      "In polar coordinates: $\\int_0^{2\\pi}\\!\\int_0^\\infty e^{-r^2}r\\,dr\\,d\\theta=2\\pi\\cdot\\tfrac12=\\pi$.",
  },
  {
    id: "ai-improper-3",
    prompt: "Evaluate $\\displaystyle\\int_{-\\infty}^{\\infty}e^{-4x^2}\\,dx$.",
    options: ["$\\dfrac{\\sqrt\\pi}{4}$", "$2\\sqrt\\pi$", "$\\dfrac{\\sqrt\\pi}{2}$", "$\\dfrac{\\pi}{2}$"],
    answer: "C",
    explanation: "$\\int e^{-ax^2}dx=\\sqrt{\\pi/a}$. With $a=4$: $\\sqrt{\\pi/4}=\\sqrt\\pi/2$.",
  },
  {
    id: "ai-improper-4",
    prompt: "Evaluate $\\displaystyle\\int_{0}^{\\infty}e^{-x^2}\\,dx$.",
    options: ["$\\sqrt\\pi$", "$\\dfrac{\\pi}{2}$", "$\\pi$", "$\\dfrac{\\sqrt\\pi}{2}$"],
    answer: "D",
    explanation: "The integrand is even, so the half-line integral is half of $\\sqrt\\pi$.",
  },
  {
    id: "ai-improper-5",
    prompt: "In the plane, $\\displaystyle\\iint_{r\\ge1}\\frac{dA}{r^{p}}$ (with $r=\\sqrt{x^2+y^2}$) converges exactly when:",
    options: ["$p>2$", "$p>1$", "$p<2$", "$p\\ge2$"],
    answer: "A",
    explanation:
      "Polar coordinates give $2\\pi\\int_1^\\infty r^{1-p}\\,dr$, which converges iff $1-p<-1$, i.e. $p>2$.",
  },
  {
    id: "ai-improper-6",
    prompt: "In the plane, $\\displaystyle\\iint_{0<r\\le1}\\frac{dA}{r^{p}}$ converges exactly when:",
    options: ["$p>2$", "$p<2$", "$p<1$", "For every $p$"],
    answer: "B",
    explanation:
      "$2\\pi\\int_0^1r^{1-p}\\,dr$ converges iff $1-p>-1$, i.e. $p<2$. The area factor $r$ softens the singularity by one power.",
  },
  {
    id: "ai-improper-7",
    prompt: "Let $B$ be the unit ball in $\\mathbb R^3$. Evaluate $\\displaystyle\\iiint_B\\frac{dV}{x^2+y^2+z^2}$.",
    options: ["It diverges", "$2\\pi$", "$4\\pi$", "$\\dfrac{4\\pi}{3}$"],
    answer: "C",
    explanation:
      "In spherical coordinates $dV=\\rho^2\\sin\\varphi\\,d\\rho\\,d\\varphi\\,d\\theta$, so the integral is $4\\pi\\int_0^1\\rho^{-2}\\rho^2\\,d\\rho=4\\pi$.",
  },
  {
    id: "ai-improper-8",
    prompt: "Evaluate $\\displaystyle\\iint_{[1,\\infty)\\times[1,\\infty)}\\frac{dA}{x^2y^2}$.",
    options: ["It diverges", "$\\dfrac12$", "$2$", "$1$"],
    answer: "D",
    explanation:
      "The integrand is positive and separates: $\\int_1^\\infty x^{-2}dx\\cdot\\int_1^\\infty y^{-2}dy=1\\cdot1=1$.",
  },
  {
    id: "ai-improper-9",
    prompt: "Evaluate $\\displaystyle\\iint_{\\mathbb R^2}\\frac{dA}{(1+x^2+y^2)^2}$.",
    options: ["$\\pi$", "$2\\pi$", "$\\dfrac{\\pi}{2}$", "It diverges"],
    answer: "A",
    explanation:
      "$2\\pi\\int_0^\\infty\\dfrac{r\\,dr}{(1+r^2)^2}=2\\pi\\Big[-\\dfrac{1}{2(1+r^2)}\\Big]_0^\\infty=2\\pi\\cdot\\dfrac12=\\pi$.",
  },
  {
    id: "ai-improper-10",
    prompt: "Tonelli's theorem says that for a measurable $f\\ge0$ on $\\mathbb R^2$:",
    options: [
      "The double integral is always finite",
      "Both iterated integrals equal the double integral, finite or $+\\infty$",
      "Only the $dx\\,dy$ order may be used",
      "$f$ must be continuous",
    ],
    answer: "B",
    explanation:
      "For non-negative integrands the order of integration never matters, even when the value is $+\\infty$. Sign-changing integrands need Fubini's absolute-convergence condition.",
  },
  {
    id: "ai-improper-11",
    prompt: "For $f=\\dfrac{x^2-y^2}{(x^2+y^2)^2}$ on $[0,1]^2$, the two iterated integrals equal $\\tfrac{\\pi}{4}$ and $-\\tfrac{\\pi}{4}$. Why is this not a contradiction?",
    options: [
      "One of the computations must be wrong",
      "$f$ is not continuous anywhere",
      "$\\iint|f|\\,dA=\\infty$, so Fubini's theorem does not apply",
      "The region is unbounded",
    ],
    answer: "C",
    explanation:
      "Fubini requires absolute integrability. Near the origin $|f|\\sim1/r^2$, which is not integrable in the plane, so the iterated integrals may disagree.",
  },
  {
    id: "ai-improper-12",
    prompt: "In the proof that $\\int e^{-x^2}dx=\\sqrt\\pi$, what makes the squared integral computable?",
    options: [
      "Integration by parts",
      "A power series for $e^{-x^2}$",
      "Differentiating under the integral sign",
      "The extra factor $r$ in $dA=r\\,dr\\,d\\theta$",
    ],
    answer: "D",
    explanation:
      "$e^{-x^2}$ has no elementary antiderivative, but $re^{-r^2}$ does: $-\\tfrac12e^{-r^2}$. The polar Jacobian $r$ supplies exactly that factor.",
  },
  {
    id: "ai-improper-13",
    prompt: "Evaluate $\\displaystyle\\int_{-\\infty}^{\\infty}e^{-x^2+2x}\\,dx$.",
    options: ["$e\\sqrt\\pi$", "$\\sqrt\\pi$", "$e^2\\sqrt\\pi$", "$\\dfrac{\\sqrt\\pi}{e}$"],
    answer: "A",
    explanation:
      "Complete the square: $-x^2+2x=-(x-1)^2+1$. Shifting $u=x-1$ gives $e\\int e^{-u^2}du=e\\sqrt\\pi$.",
  },
  {
    id: "ai-improper-14",
    prompt: "Evaluate $\\displaystyle\\int_{-\\infty}^{\\infty}x^2e^{-x^2}\\,dx$.",
    options: ["$\\sqrt\\pi$", "$\\dfrac{\\sqrt\\pi}{2}$", "$\\dfrac{\\pi}{2}$", "$0$"],
    answer: "B",
    explanation:
      "Integrate by parts with $u=x$, $dv=xe^{-x^2}dx$: the boundary term vanishes and the result is $\\tfrac12\\int e^{-x^2}dx=\\tfrac{\\sqrt\\pi}{2}$.",
  },
  {
    id: "ai-improper-15",
    prompt: "Why is the normal density $\\dfrac{1}{\\sigma\\sqrt{2\\pi}}e^{-(x-\\mu)^2/(2\\sigma^2)}$ correctly normalized?",
    options: [
      "Because $e^{-t}\\le1$",
      "Because $\\mu$ is the mean",
      "Because $\\int_{-\\infty}^{\\infty}e^{-(x-\\mu)^2/(2\\sigma^2)}dx=\\sigma\\sqrt{2\\pi}$",
      "Because $\\sigma>0$",
    ],
    answer: "C",
    explanation:
      "With $a=1/(2\\sigma^2)$, $\\int e^{-a(x-\\mu)^2}dx=\\sqrt{\\pi/a}=\\sigma\\sqrt{2\\pi}$, so the density integrates to $1$.",
  },
  {
    id: "ai-improper-16",
    prompt: "Evaluate $\\displaystyle\\iiint_{\\mathbb R^3}e^{-(x^2+y^2+z^2)}\\,dV$.",
    options: ["$\\pi$", "$4\\pi$", "$\\pi^{2}$", "$\\pi^{3/2}$"],
    answer: "D",
    explanation:
      "The integrand factors: $\\big(\\int e^{-x^2}dx\\big)^3=(\\sqrt\\pi)^3=\\pi^{3/2}$. In $\\mathbb R^n$ the answer is $\\pi^{n/2}$.",
  },
  {
    id: "ai-improper-17",
    prompt: "Using $\\Gamma(s)=\\int_0^\\infty t^{s-1}e^{-t}dt$ and the substitution $t=x^2$, the value of $\\Gamma\\!\\left(\\tfrac12\\right)$ is:",
    options: ["$\\sqrt\\pi$", "$\\dfrac{\\sqrt\\pi}{2}$", "$1$", "$\\pi$"],
    answer: "A",
    explanation:
      "$\\Gamma(\\tfrac12)=\\int_0^\\infty t^{-1/2}e^{-t}dt=2\\int_0^\\infty e^{-x^2}dx=2\\cdot\\tfrac{\\sqrt\\pi}{2}=\\sqrt\\pi$.",
  },
  {
    id: "ai-improper-18",
    prompt: "Let $D$ be the unit disk. Evaluate $\\displaystyle\\iint_D\\frac{dA}{\\sqrt{x^2+y^2}}$.",
    options: ["$\\pi$", "$2\\pi$", "It diverges", "$4\\pi$"],
    answer: "B",
    explanation: "$\\int_0^{2\\pi}\\!\\int_0^1\\dfrac1r\\,r\\,dr\\,d\\theta=2\\pi$. Here $p=1<2$, so the singularity is integrable.",
  },
  {
    id: "ai-improper-19",
    prompt: "Let $D$ be the unit disk. What can be said about $\\displaystyle\\iint_D\\frac{dA}{x^2+y^2}$?",
    options: ["It equals $\\pi$", "It equals $2\\pi$", "It diverges", "It equals $0$"],
    answer: "C",
    explanation: "$2\\pi\\int_0^1\\dfrac{r\\,dr}{r^2}=2\\pi\\int_0^1\\dfrac{dr}{r}$ diverges: this is the borderline case $p=2$.",
  },
  {
    id: "ai-improper-20",
    prompt: "Evaluate $\\displaystyle\\iint_{\\mathbb R^2}e^{-(x^2+4y^2)}\\,dA$.",
    options: ["$\\pi$", "$\\dfrac{\\pi}{4}$", "$2\\pi$", "$\\dfrac{\\pi}{2}$"],
    answer: "D",
    explanation:
      "It factors as $\\int e^{-x^2}dx\\cdot\\int e^{-4y^2}dy=\\sqrt\\pi\\cdot\\tfrac{\\sqrt\\pi}{2}=\\tfrac{\\pi}{2}$. Equivalently $\\pi/\\sqrt{\\det A}$ with $A=\\operatorname{diag}(1,4)$.",
  },
];

export const MV_AI_VARIATIONS_QUIZ = [
  {
    id: "ai-variations-1",
    prompt: "A smooth extremal of $J[y]=\\int_a^bF(x,y,y')\\,dx$ with fixed endpoints must satisfy:",
    options: [
      "$\\dfrac{\\partial F}{\\partial y}-\\dfrac{d}{dx}\\dfrac{\\partial F}{\\partial y'}=0$",
      "$\\dfrac{\\partial F}{\\partial y}+\\dfrac{\\partial F}{\\partial y'}=0$",
      "$\\dfrac{\\partial F}{\\partial y'}=0$",
      "$\\dfrac{d}{dx}F=0$",
    ],
    answer: "A",
    explanation:
      "Setting the first variation to zero and integrating by parts gives the Euler–Lagrange equation $F_y-\\frac{d}{dx}F_{y'}=0$.",
  },
  {
    id: "ai-variations-2",
    prompt: "When deriving the Euler–Lagrange equation with fixed endpoints, the variation $\\eta(x)$ must satisfy:",
    options: [
      "$\\eta'(a)=\\eta'(b)=0$",
      "$\\eta(a)=\\eta(b)=0$",
      "$\\eta\\equiv\\text{constant}$",
      "$\\int_a^b\\eta\\,dx=0$",
    ],
    answer: "B",
    explanation:
      "The perturbed curve $y+\\varepsilon\\eta$ must still satisfy the boundary conditions, so $\\eta$ vanishes at both endpoints. This also kills the boundary term from integration by parts.",
  },
  {
    id: "ai-variations-3",
    prompt: "The extremals of the arc-length functional $\\int_a^b\\sqrt{1+(y')^2}\\,dx$ are:",
    options: ["Parabolas", "Circles", "Straight lines", "Catenaries"],
    answer: "C",
    explanation:
      "$F$ does not involve $y$, so $F_{y'}=y'/\\sqrt{1+y'^2}$ is constant. That forces $y'$ to be constant: the shortest path is a straight line.",
  },
  {
    id: "ai-variations-4",
    prompt: "If $F=F(x,y')$ does not depend on $y$, the Euler–Lagrange equation reduces to:",
    options: ["$F=\\text{const}$", "$y'=0$", "$F-y'F_{y'}=\\text{const}$", "$F_{y'}=\\text{const}$"],
    answer: "D",
    explanation: "With $F_y=0$ the equation is $\\frac{d}{dx}F_{y'}=0$, so $F_{y'}$ is constant: a first integral.",
  },
  {
    id: "ai-variations-5",
    prompt: "If $F=F(y,y')$ has no explicit $x$, which quantity is constant along every extremal?",
    options: ["$F-y'F_{y'}$", "$F_y$", "$F+y'F_{y'}$", "$y\\,F_{y'}$"],
    answer: "A",
    explanation:
      "This is the Beltrami identity: $\\frac{d}{dx}(F-y'F_{y'})=F_x-y'\\big(F_y-\\frac{d}{dx}F_{y'}\\big)=0$ when $F_x=0$ and the Euler–Lagrange equation holds.",
  },
  {
    id: "ai-variations-6",
    prompt: "The extremal of $\\int_0^1(y'^2+y^2)\\,dx$ with $y(0)=0$, $y(1)=1$ is:",
    options: ["$y=x$", "$y=\\dfrac{\\sinh x}{\\sinh1}$", "$y=\\sin\\!\\big(\\tfrac{\\pi x}{2}\\big)$", "$y=x^2$"],
    answer: "B",
    explanation:
      "Euler–Lagrange: $2y-2y''=0$, so $y''=y$ and $y=A\\cosh x+B\\sinh x$. The boundary conditions give $A=0$, $B=1/\\sinh1$.",
  },
  {
    id: "ai-variations-7",
    prompt: "The extremal of $\\int_0^{\\pi/2}(y'^2-y^2)\\,dx$ with $y(0)=0$, $y(\\pi/2)=1$ is:",
    options: ["$y=\\dfrac{2x}{\\pi}$", "$y=\\cos x$", "$y=\\sin x$", "$y=\\dfrac{\\sinh x}{\\sinh(\\pi/2)}$"],
    answer: "C",
    explanation: "Euler–Lagrange: $-2y-2y''=0$, so $y''+y=0$ and $y=A\\cos x+B\\sin x$. Then $A=0$, $B=1$.",
  },
  {
    id: "ai-variations-8",
    prompt: "The curve of fastest descent under gravity between two points (the brachistochrone) is:",
    options: ["A straight line", "A parabola", "A circular arc", "A cycloid"],
    answer: "D",
    explanation:
      "The Beltrami identity applied to $\\sqrt{1+y'^2}/\\sqrt{y}$ gives $y(1+y'^2)=\\text{const}$, whose solutions are cycloids $x=r(\\theta-\\sin\\theta)$, $y=r(1-\\cos\\theta)$.",
  },
  {
    id: "ai-variations-9",
    prompt: "Minimizing the area of a surface of revolution $2\\pi\\int y\\sqrt{1+y'^2}\\,dx$ gives profile curves of the form:",
    options: [
      "$y=c\\cosh\\!\\Big(\\dfrac{x-x_0}{c}\\Big)$",
      "$y=c\\sin\\!\\Big(\\dfrac{x-x_0}{c}\\Big)$",
      "$y=ax^2+b$",
      "$y=ce^{x}$",
    ],
    answer: "A",
    explanation:
      "Beltrami gives $y/\\sqrt{1+y'^2}=c$, whose solutions are catenaries. Rotating a catenary gives the minimal surface called a catenoid.",
  },
  {
    id: "ai-variations-10",
    prompt: "For the Lagrangian $L=\\tfrac12m\\dot x^2-\\tfrac12kx^2$, the Euler–Lagrange equation is:",
    options: ["$m\\dot x=-kx$", "$m\\ddot x=-kx$", "$m\\ddot x=kx$", "$\\dot x^2=x^2$"],
    answer: "B",
    explanation:
      "$L_x=-kx$ and $\\frac{d}{dt}L_{\\dot x}=m\\ddot x$, so $-kx-m\\ddot x=0$: Newton's law for a spring (simple harmonic motion).",
  },
  {
    id: "ai-variations-11",
    prompt: "The Euler–Lagrange equation for the Dirichlet energy $J[u]=\\iint_D\\tfrac12|\\nabla u|^2\\,dA$ is:",
    options: ["$\\nabla u=\\mathbf 0$", "$u_x=u_y$", "$\\nabla^2u=0$", "$|\\nabla u|=1$"],
    answer: "C",
    explanation:
      "With $F=\\tfrac12(u_x^2+u_y^2)$: $F_u-\\partial_xF_{u_x}-\\partial_yF_{u_y}=-u_{xx}-u_{yy}=0$. Harmonic functions minimize the Dirichlet energy.",
  },
  {
    id: "ai-variations-12",
    prompt: "The fundamental lemma of the calculus of variations states that if $g$ is continuous and $\\int_a^bg\\,\\eta\\,dx=0$ for every smooth $\\eta$ with $\\eta(a)=\\eta(b)=0$, then:",
    options: ["$g$ is constant", "$\\int_a^bg\\,dx=0$", "$g$ is linear", "$g\\equiv0$ on $[a,b]$"],
    answer: "D",
    explanation:
      "If $g(x_0)\\neq0$, choose a bump $\\eta\\ge0$ supported near $x_0$ where $g$ keeps its sign; then $\\int g\\eta\\neq0$, a contradiction.",
  },
  {
    id: "ai-variations-13",
    prompt: "Minimize $\\int_0^1y'^2\\,dx$ subject to $\\int_0^1y\\,dx=1$ and $y(0)=y(1)=0$. The extremal is:",
    options: ["$y=6x(1-x)$", "$y=4x(1-x)$", "$y=\\sin(\\pi x)$", "$y=x(1-x)$"],
    answer: "A",
    explanation:
      "With $F^*=y'^2+\\lambda y$: $\\lambda-2y''=0$, so $y$ is a parabola vanishing at $0$ and $1$, $y=c\\,x(1-x)$. The constraint $c/6=1$ gives $c=6$.",
  },
  {
    id: "ai-variations-14",
    prompt: "The Legendre condition, necessary for an extremal to be a minimum, requires along the curve:",
    options: ["$F_{yy}\\ge0$", "$F_{y'y'}\\ge0$", "$F_{y'}=0$", "$F_y\\le0$"],
    answer: "B",
    explanation:
      "The second variation is dominated by $\\int F_{y'y'}\\eta'^2\\,dx$ for rapidly oscillating $\\eta$, so a minimum needs $F_{y'y'}\\ge0$.",
  },
  {
    id: "ai-variations-15",
    prompt: "If $y(a)$ is fixed but $y(b)$ is free, the extremal must satisfy which extra condition at $x=b$?",
    options: ["$y(b)=0$", "$y'(b)=0$", "$\\dfrac{\\partial F}{\\partial y'}\\Big|_{x=b}=0$", "$F\\big|_{x=b}=0$"],
    answer: "C",
    explanation:
      "With $\\eta(b)$ unrestricted, the boundary term $F_{y'}\\eta\\big|_{x=b}$ must vanish on its own: the natural boundary condition $F_{y'}(b)=0$.",
  },
  {
    id: "ai-variations-16",
    prompt: "The Euler–Lagrange equation for $F=y'^2+2xy$ is:",
    options: ["$y''=-x$", "$y''=2x$", "$y''=0$", "$y''=x$"],
    answer: "D",
    explanation: "$F_y=2x$ and $\\frac{d}{dx}F_{y'}=2y''$, so $2x-2y''=0$, i.e. $y''=x$.",
  },
  {
    id: "ai-variations-17",
    prompt: "For a projectile with $L=\\tfrac12m(\\dot x^2+\\dot y^2)-mgy$, the Euler–Lagrange equation in $y$ gives:",
    options: ["$\\ddot y=-g$", "$\\ddot y=g$", "$\\dot y=-g$", "$\\ddot y=0$"],
    answer: "A",
    explanation:
      "$L_y=-mg$ and $\\frac{d}{dt}L_{\\dot y}=m\\ddot y$, so $\\ddot y=-g$. The $x$-equation gives $\\ddot x=0$.",
  },
  {
    id: "ai-variations-18",
    prompt: "The first variation of $J$ at $y$ in the direction $\\eta$ is defined as:",
    options: [
      "$J[y+\\eta]-J[y]$",
      "$\\dfrac{d}{d\\varepsilon}J[y+\\varepsilon\\eta]\\Big|_{\\varepsilon=0}$",
      "$\\dfrac{d^2}{d\\varepsilon^2}J[y+\\varepsilon\\eta]\\Big|_{\\varepsilon=0}$",
      "$\\int_a^b\\eta\\,dx$",
    ],
    answer: "B",
    explanation:
      "Like a directional derivative: restrict $J$ to the one-parameter family $y+\\varepsilon\\eta$ and differentiate at $\\varepsilon=0$.",
  },
  {
    id: "ai-variations-19",
    prompt: "Maximizing the area $\\int y\\,dx$ under a curve of fixed length (the isoperimetric problem) gives extremals that are:",
    options: ["Straight lines", "Parabolas", "Circular arcs", "Cycloids"],
    answer: "C",
    explanation:
      "With a multiplier, $F^*=y+\\lambda\\sqrt{1+y'^2}$. Beltrami gives $(y-C)^2(1+y'^2)=\\lambda^2$, whose solutions are circles of radius $|\\lambda|$.",
  },
  {
    id: "ai-variations-20",
    prompt: "For the arc-length functional $J[y]=\\int_0^1\\sqrt{1+y'^2}\\,dx$, what is $J[y]$ for $y=x$?",
    options: ["$1$", "$2$", "$\\dfrac{\\sqrt5}{2}$", "$\\sqrt2$"],
    answer: "D",
    explanation: "$y'=1$, so $J=\\int_0^1\\sqrt2\\,dx=\\sqrt2$: the length of the segment from $(0,0)$ to $(1,1)$.",
  },
];
