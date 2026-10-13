// src/data/mvAdvancedIntegrationQuizzes.js
// Advanced Integration & Variational Methods (Multivariable Calculus)
// Improper Multiple Integrals & the Gaussian Integral — 20 MCQs
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
