// src/data/mvPotentialTheoryQuizzes.js
// Potential Theory (Multivariable Calculus)
// The Laplacian & Harmonic Functions — 20 MCQs
// Format used by GuideMcqSection: { id, prompt, options[4], answer: "A" | "B" | "C" | "D", explanation }

export const MV_PT_LAPLACIAN_QUIZ = [
  {
    id: "pt-laplacian-1",
    prompt: "Compute $\\nabla^2 f$ for $f(x,y,z)=x^2y+yz^2$.",
    options: [
      "$4y$",
      "$2y$",
      "$2x+2z$",
      "$0$",
    ],
    answer: "A",
    explanation:
      "$f_{xx}=2y$, $f_{yy}=0$, $f_{zz}=2y$. Adding the three pure second partials gives $\\nabla^2 f=4y$.",
  },
  {
    id: "pt-laplacian-2",
    prompt: "The Laplacian $\\nabla^2 f$ of a function equals which quantity built from its Hessian matrix $H_f$?",
    options: [
      "$\\det(H_f)$",
      "The largest eigenvalue of $H_f$",
      "$\\operatorname{tr}(H_f)$",
      "$\\|H_f\\|^2$",
    ],
    answer: "C",
    explanation:
      "The diagonal entries of $H_f$ are $f_{xx},f_{yy},f_{zz}$, so their sum, the trace, is exactly $\\nabla^2 f$. The determinant is what the second derivative test uses.",
  },
  {
    id: "pt-laplacian-3",
    prompt: "Which function is harmonic on all of $\\mathbb{R}^2$?",
    options: [
      "$x^2+y^2$",
      "$x^2-y^2$",
      "$x^3-y^3$",
      "$e^{x}e^{y}$",
    ],
    answer: "B",
    explanation:
      "For $x^2-y^2$: $u_{xx}+u_{yy}=2-2=0$. The others give $4$, $6x-6y$ and $2e^{x+y}$ respectively.",
  },
  {
    id: "pt-laplacian-4",
    prompt: "For which value of $a$ is $u(x,y)=x^3+axy^2$ harmonic?",
    options: [
      "$a=3$",
      "$a=1$",
      "$a=-1$",
      "$a=-3$",
    ],
    answer: "D",
    explanation:
      "$u_{xx}=6x$ and $u_{yy}=2ax$. Setting $6x+2ax=0$ for all $x$ gives $a=-3$.",
  },
  {
    id: "pt-laplacian-5",
    prompt: "$u(x,y)=e^{kx}\\cos(2y)$ is harmonic exactly when:",
    options: [
      "$k=\\pm 2$",
      "$k=\\pm 4$",
      "$k=2$ only",
      "$k=0$",
    ],
    answer: "A",
    explanation:
      "$u_{xx}=k^2u$ and $u_{yy}=-4u$, so $\\nabla^2u=(k^2-4)u=0$ requires $k=\\pm 2$.",
  },
  {
    id: "pt-laplacian-6",
    prompt: "Every radial harmonic function $f(\\rho)$ on $\\mathbb{R}^3\\setminus\\{\\mathbf{0}\\}$ has the form:",
    options: [
      "$A+B\\ln\\rho$",
      "$A+B\\rho^2$",
      "$A+\\dfrac{B}{\\rho}$",
      "$Ae^{\\rho}+Be^{-\\rho}$",
    ],
    answer: "C",
    explanation:
      "For radial $f$, $\\nabla^2 f=\\frac{1}{\\rho^2}(\\rho^2f')'=0$ gives $\\rho^2 f'=-B$, so $f=A+B/\\rho$. The logarithm is the 2D answer.",
  },
  {
    id: "pt-laplacian-7",
    prompt: "Every radial harmonic function $f(r)$ on $\\mathbb{R}^2\\setminus\\{\\mathbf{0}\\}$ has the form:",
    options: [
      "$A+B\\ln r$",
      "$A+\\dfrac{B}{r}$",
      "$A+Br$",
      "$A+Br^2$",
    ],
    answer: "A",
    explanation:
      "In 2D, $\\nabla^2 f=\\frac1r(rf')'=0$ gives $rf'=B$, so $f=A+B\\ln r$.",
  },
  {
    id: "pt-laplacian-8",
    prompt: "In polar coordinates the Laplacian of $u(r,\\theta)$ is:",
    options: [
      "$u_{rr}+u_{\\theta\\theta}$",
      "$u_{rr}+\\dfrac1r u_r+\\dfrac{1}{r^2}u_{\\theta\\theta}$",
      "$u_{rr}+\\dfrac{2}{r}u_r+\\dfrac{1}{r^2}u_{\\theta\\theta}$",
      "$\\dfrac1r u_{rr}+u_{\\theta\\theta}$",
    ],
    answer: "B",
    explanation:
      "$\\nabla^2u=\\frac1r\\partial_r(ru_r)+\\frac1{r^2}u_{\\theta\\theta}=u_{rr}+\\frac1ru_r+\\frac1{r^2}u_{\\theta\\theta}$. The factor $2/r$ belongs to the radial part in 3D spherical coordinates.",
  },
  {
    id: "pt-laplacian-9",
    prompt: "A harmonic conjugate of $u(x,y)=2xy$ is:",
    options: [
      "$x^2+y^2$",
      "$x^2-y^2$",
      "$y^2-x^2$",
      "$-2xy$",
    ],
    answer: "C",
    explanation:
      "Cauchy–Riemann: $v_y=u_x=2y\\Rightarrow v=y^2+g(x)$; $v_x=-u_y=-2x\\Rightarrow g'(x)=-2x$, so $v=y^2-x^2+C$. Indeed $-iz^2=2xy+i(y^2-x^2)$.",
  },
  {
    id: "pt-laplacian-10",
    prompt: "$u$ is harmonic on a region containing the closed disk of radius $0.5$ centred at $(2,1)$, and $u(2,1)=5$. The average value of $u$ on the circle of radius $0.5$ about $(2,1)$ is:",
    options: [
      "$0$",
      "$2.5$",
      "$5$",
      "It cannot be determined",
    ],
    answer: "C",
    explanation:
      "By the mean value property, the average of a harmonic function over any such circle equals its value at the centre: $5$.",
  },
  {
    id: "pt-laplacian-11",
    prompt: "$u$ is harmonic and non-constant on a bounded connected open set $\\Omega$ and continuous on $\\overline{\\Omega}$. Where does $u$ attain its maximum on $\\overline{\\Omega}$?",
    options: [
      "Only at interior critical points",
      "Only on the boundary $\\partial\\Omega$",
      "At the centroid of $\\Omega$",
      "Anywhere — there is no restriction",
    ],
    answer: "B",
    explanation:
      "The strong maximum principle: a non-constant harmonic function cannot attain an interior maximum (or minimum), so both extremes occur on the boundary.",
  },
  {
    id: "pt-laplacian-12",
    prompt: "If $u$ is harmonic, then $\\nabla^2(u^2)$ equals:",
    options: [
      "$0$",
      "$2u\\,\\nabla^2u$",
      "$2|\\nabla u|^2$",
      "$-2|\\nabla u|^2$",
    ],
    answer: "C",
    explanation:
      "Product rule: $\\nabla^2(u^2)=2u\\,\\nabla^2u+2|\\nabla u|^2=2|\\nabla u|^2\\ge 0$. So $u^2$ is subharmonic, and harmonic only if $u$ is constant.",
  },
  {
    id: "pt-laplacian-13",
    prompt: "$u$ is harmonic on a solid region $E$ with closed boundary surface $S$ and outward normal $\\mathbf{n}$. Then $\\displaystyle\\iint_S \\frac{\\partial u}{\\partial n}\\,dS$ equals:",
    options: [
      "$0$",
      "The volume of $E$",
      "$4\\pi$",
      "$u$ at the centre of $E$",
    ],
    answer: "A",
    explanation:
      "Divergence theorem with $\\mathbf{F}=\\nabla u$: $\\iint_S\\nabla u\\cdot\\mathbf{n}\\,dS=\\iiint_E\\nabla^2u\\,dV=0$.",
  },
  {
    id: "pt-laplacian-14",
    prompt: "The outward flux of $\\nabla(1/\\rho)$ through the sphere $\\rho=3$ is:",
    options: [
      "$0$",
      "$-\\dfrac{4\\pi}{3}$",
      "$-4\\pi$",
      "$-36\\pi$",
    ],
    answer: "C",
    explanation:
      "$\\nabla(1/\\rho)=-\\hat{\\mathbf{r}}/\\rho^2$, so the flux is $-\\frac{1}{9}\\cdot 4\\pi(9)=-4\\pi$. It is the same for every radius, which is why $\\nabla^2(1/\\rho)=-4\\pi\\delta$.",
  },
  {
    id: "pt-laplacian-15",
    prompt: "Liouville's theorem for harmonic functions states that a harmonic function on all of $\\mathbb{R}^n$ which is bounded must be:",
    options: [
      "Linear",
      "Constant",
      "A polynomial of degree 2",
      "Zero",
    ],
    answer: "B",
    explanation:
      "A harmonic function defined on the whole space and bounded (above or below) is constant.",
  },
  {
    id: "pt-laplacian-16",
    prompt: "Let $B$ be the solid unit ball. Evaluate $\\displaystyle\\iiint_B\\nabla^2(x^2+y^2+z^2)\\,dV$.",
    options: [
      "$4\\pi$",
      "$6\\pi$",
      "$8\\pi$",
      "$\\dfrac{4\\pi}{3}$",
    ],
    answer: "C",
    explanation:
      "$\\nabla^2(\\rho^2)=6$, so the integral is $6\\cdot\\frac{4\\pi}{3}=8\\pi$. Check via flux: $\\nabla(\\rho^2)\\cdot\\mathbf{n}=2$ on the unit sphere, times area $4\\pi$, also gives $8\\pi$.",
  },
  {
    id: "pt-laplacian-17",
    prompt: "If $u$ and $v$ are harmonic on the same open set, which statement is always true?",
    options: [
      "$uv$ is harmonic",
      "$u^2+v^2$ is harmonic",
      "$3u-2v$ is harmonic",
      "$u/v$ is harmonic wherever $v\\neq 0$",
    ],
    answer: "C",
    explanation:
      "The Laplacian is linear, so linear combinations of harmonic functions are harmonic. Products are generally not: $\\nabla^2(uv)=2\\nabla u\\cdot\\nabla v$.",
  },
  {
    id: "pt-laplacian-18",
    prompt: "$u_1$ and $u_2$ are both harmonic in a bounded region $\\Omega$ and equal the same function $g$ on $\\partial\\Omega$. What can be concluded?",
    options: [
      "$u_1-u_2$ is a non-zero constant",
      "$u_1=u_2$ throughout $\\Omega$",
      "$u_1=-u_2$",
      "Nothing — Dirichlet problems have many solutions",
    ],
    answer: "B",
    explanation:
      "$w=u_1-u_2$ is harmonic and zero on the boundary; by the maximum principle its max and min are both $0$, so $w\\equiv 0$. The Dirichlet problem has at most one solution.",
  },
  {
    id: "pt-laplacian-19",
    prompt: "For $f=x^2+y^2+z^2$, the average of $f$ over the sphere of radius $r$ centred at the origin, minus $f(\\mathbf{0})$, equals:",
    options: [
      "$0$",
      "$r^2$",
      "$\\dfrac{r^2}{3}$",
      "$6r^2$",
    ],
    answer: "B",
    explanation:
      "On the sphere $f=r^2$ exactly, and $f(\\mathbf 0)=0$. This matches $\\frac{r^2}{2n}\\nabla^2f=\\frac{r^2}{6}\\cdot 6=r^2$.",
  },
  {
    id: "pt-laplacian-20",
    prompt: "A fluid velocity field $\\mathbf{F}=\\nabla\\varphi$ is incompressible ($\\nabla\\cdot\\mathbf{F}=0$). Which equation must the potential $\\varphi$ satisfy?",
    options: [
      "$\\nabla\\varphi=\\mathbf{0}$",
      "$\\nabla^2\\varphi=0$",
      "$\\nabla\\times\\nabla\\varphi=\\mathbf F$",
      "$\\nabla^2\\varphi=1$",
    ],
    answer: "B",
    explanation:
      "$\\nabla\\cdot\\mathbf{F}=\\nabla\\cdot\\nabla\\varphi=\\nabla^2\\varphi=0$: the velocity potential of an ideal flow is harmonic.",
  },
];
