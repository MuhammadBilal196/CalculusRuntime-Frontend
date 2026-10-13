// src/data/mvPotentialTheoryQuizzes.js
// Potential Theory (Multivariable Calculus)
// The Laplacian & Harmonic Functions — 20 MCQs
// Maxwell's Equations & the Continuity Equation — 20 MCQs
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

export const MV_PT_MAXWELL_QUIZ = [
  {
    id: "pt-maxwell-1",
    prompt: "Which equation expresses local conservation of electric charge?",
    options: [
      "$\\dfrac{\\partial \\rho}{\\partial t}+\\nabla\\cdot\\mathbf{J}=0$",
      "$\\dfrac{\\partial \\rho}{\\partial t}=\\nabla\\times\\mathbf{J}$",
      "$\\nabla\\cdot\\mathbf{J}=\\rho$",
      "$\\dfrac{\\partial \\mathbf{J}}{\\partial t}+\\nabla\\rho=\\mathbf{0}$",
    ],
    answer: "A",
    explanation:
      "Charge lost from a region equals the net current out of it: $\\frac{d}{dt}\\iiint_E\\rho\\,dV=-\\iint_S\\mathbf J\\cdot\\mathbf n\\,dS$. The Divergence Theorem turns this into $\\partial_t\\rho+\\nabla\\cdot\\mathbf J=0$.",
  },
  {
    id: "pt-maxwell-2",
    prompt: "A current density is $\\mathbf{J}=\\langle x^2,\\,y^2,\\,z^2\\rangle$. What is $\\partial\\rho/\\partial t$ at $(1,1,1)$?",
    options: ["$6$", "$-6$", "$3$", "$0$"],
    answer: "B",
    explanation:
      "$\\nabla\\cdot\\mathbf J=2x+2y+2z=6$ at $(1,1,1)$. The continuity equation gives $\\partial_t\\rho=-\\nabla\\cdot\\mathbf J=-6$: charge density is decreasing there.",
  },
  {
    id: "pt-maxwell-3",
    prompt: "For a steady current (charge density not changing in time), the continuity equation reduces to:",
    options: [
      "$\\nabla\\times\\mathbf J=\\mathbf 0$",
      "$\\mathbf J=\\mathbf 0$",
      "$\\nabla\\cdot\\mathbf J=0$",
      "$\\nabla^2\\mathbf J=\\mathbf 0$",
    ],
    answer: "C",
    explanation:
      "With $\\partial_t\\rho=0$, $\\nabla\\cdot\\mathbf J=0$: steady current is divergence-free, so whatever flows into a region flows out.",
  },
  {
    id: "pt-maxwell-4",
    prompt: "Gauss's law for the electric field in differential form is:",
    options: [
      "$\\nabla\\times\\mathbf E=\\rho/\\varepsilon_0$",
      "$\\nabla\\cdot\\mathbf E=0$",
      "$\\nabla\\cdot\\mathbf E=\\varepsilon_0\\rho$",
      "$\\nabla\\cdot\\mathbf E=\\rho/\\varepsilon_0$",
    ],
    answer: "D",
    explanation:
      "Applying the Divergence Theorem to $\\iint_S\\mathbf E\\cdot d\\mathbf S=Q_{\\text{enc}}/\\varepsilon_0$ for every small region gives $\\nabla\\cdot\\mathbf E=\\rho/\\varepsilon_0$.",
  },
  {
    id: "pt-maxwell-5",
    prompt: "In some region $\\mathbf E=k\\langle x,y,z\\rangle$ for a constant $k$. What charge density produces it?",
    options: ["$\\rho=3k\\varepsilon_0$", "$\\rho=k\\varepsilon_0$", "$\\rho=3k/\\varepsilon_0$", "$\\rho=0$"],
    answer: "A",
    explanation:
      "$\\nabla\\cdot\\mathbf E=k+k+k=3k$, and Gauss's law gives $\\rho=\\varepsilon_0\\nabla\\cdot\\mathbf E=3k\\varepsilon_0$. This is the field inside a uniformly charged ball.",
  },
  {
    id: "pt-maxwell-6",
    prompt: "A point charge $q$ sits inside a closed surface $S$ of arbitrary shape. The outward flux of $\\mathbf E$ through $S$ is:",
    options: [
      "$\\dfrac{q}{4\\pi\\varepsilon_0}$",
      "$\\dfrac{q}{\\varepsilon_0}$",
      "$0$",
      "It depends on the shape of $S$",
    ],
    answer: "B",
    explanation:
      "Gauss's law: the flux depends only on the enclosed charge, $\\iint_S\\mathbf E\\cdot d\\mathbf S=q/\\varepsilon_0$, whatever the shape.",
  },
  {
    id: "pt-maxwell-7",
    prompt: "What does $\\nabla\\cdot\\mathbf B=0$ say physically?",
    options: [
      "Magnetic fields are always uniform",
      "Magnetic fields do no work",
      "There are no magnetic monopoles: field lines have no sources or sinks",
      "Magnetic fields are conservative",
    ],
    answer: "C",
    explanation:
      "Zero divergence means zero net flux out of every closed surface, so there is no isolated magnetic charge. Field lines close on themselves.",
  },
  {
    id: "pt-maxwell-8",
    prompt: "Which of these could be a magnetic field $\\mathbf B$?",
    options: [
      "$\\langle x,\\,y,\\,z\\rangle$",
      "$\\langle x^2,\\,y,\\,-2xz\\rangle$",
      "$\\langle x,\\,0,\\,0\\rangle$",
      "$\\langle yz,\\,xz,\\,xy\\rangle$",
    ],
    answer: "D",
    explanation:
      "A magnetic field must have $\\nabla\\cdot\\mathbf B=0$. The divergences are $3$, $2x+1-2x=1$, $1$ and $0$; only $\\langle yz,xz,xy\\rangle$ qualifies.",
  },
  {
    id: "pt-maxwell-9",
    prompt: "Faraday's law in differential form is:",
    options: [
      "$\\nabla\\times\\mathbf E=-\\dfrac{\\partial\\mathbf B}{\\partial t}$",
      "$\\nabla\\times\\mathbf B=-\\dfrac{\\partial\\mathbf E}{\\partial t}$",
      "$\\nabla\\cdot\\mathbf E=-\\dfrac{\\partial\\mathbf B}{\\partial t}$",
      "$\\nabla\\times\\mathbf E=\\dfrac{\\partial\\mathbf B}{\\partial t}$",
    ],
    answer: "A",
    explanation:
      "A changing magnetic field produces a circulating electric field: $\\nabla\\times\\mathbf E=-\\partial_t\\mathbf B$. The minus sign is Lenz's law.",
  },
  {
    id: "pt-maxwell-10",
    prompt: "Which theorem converts the integral form $\\oint_C\\mathbf E\\cdot d\\mathbf r=-\\frac{d}{dt}\\iint_S\\mathbf B\\cdot d\\mathbf S$ into the differential form?",
    options: ["The Divergence Theorem", "Stokes' Theorem", "Green's first identity", "The Fundamental Theorem for line integrals"],
    answer: "B",
    explanation:
      "Stokes' Theorem rewrites the circulation as $\\iint_S(\\nabla\\times\\mathbf E)\\cdot d\\mathbf S$. Since this holds for every surface, $\\nabla\\times\\mathbf E=-\\partial_t\\mathbf B$.",
  },
  {
    id: "pt-maxwell-11",
    prompt: "A circular loop of radius $0.1$ m lies in a uniform field $\\mathbf B=0.5\\sin(100t)\\,\\mathbf k$ T perpendicular to it. The maximum induced emf is about:",
    options: ["$0.157$ V", "$0.5$ V", "$1.57$ V", "$15.7$ V"],
    answer: "C",
    explanation:
      "$\\Phi_B=\\pi(0.1)^2(0.5\\sin100t)=0.005\\pi\\sin100t$, so $|\\mathcal E|=|d\\Phi_B/dt|=0.5\\pi|\\cos100t|\\le 0.5\\pi\\approx1.57$ V.",
  },
  {
    id: "pt-maxwell-12",
    prompt: "In electrostatics ($\\partial\\mathbf B/\\partial t=\\mathbf 0$), Faraday's law implies:",
    options: [
      "$\\mathbf E=\\mathbf 0$ everywhere",
      "$\\nabla\\cdot\\mathbf E=0$",
      "$\\mathbf E=\\nabla\\times\\mathbf A$ for some $\\mathbf A$",
      "$\\mathbf E=-\\nabla\\phi$ for some potential $\\phi$",
    ],
    answer: "D",
    explanation:
      "$\\nabla\\times\\mathbf E=\\mathbf 0$ means $\\mathbf E$ is conservative (on a simply connected region), so $\\mathbf E=-\\nabla\\phi$ for an electric potential $\\phi$.",
  },
  {
    id: "pt-maxwell-13",
    prompt: "Maxwell added which term to Ampère's law $\\nabla\\times\\mathbf B=\\mu_0\\mathbf J$?",
    options: [
      "$\\mu_0\\varepsilon_0\\dfrac{\\partial\\mathbf E}{\\partial t}$",
      "$-\\dfrac{\\partial\\mathbf B}{\\partial t}$",
      "$\\mu_0\\rho\\,\\mathbf E$",
      "$\\varepsilon_0\\nabla\\cdot\\mathbf E$",
    ],
    answer: "A",
    explanation:
      "The displacement-current term $\\mu_0\\varepsilon_0\\,\\partial_t\\mathbf E$ gives $\\nabla\\times\\mathbf B=\\mu_0\\mathbf J+\\mu_0\\varepsilon_0\\,\\partial_t\\mathbf E$.",
  },
  {
    id: "pt-maxwell-14",
    prompt: "Taking the divergence of both sides of the Ampère–Maxwell law and using Gauss's law gives:",
    options: [
      "Faraday's law",
      "The continuity equation $\\partial_t\\rho+\\nabla\\cdot\\mathbf J=0$",
      "$\\nabla\\cdot\\mathbf B=0$",
      "Laplace's equation for $\\phi$",
    ],
    answer: "B",
    explanation:
      "$0=\\nabla\\cdot(\\nabla\\times\\mathbf B)=\\mu_0\\nabla\\cdot\\mathbf J+\\mu_0\\varepsilon_0\\partial_t(\\nabla\\cdot\\mathbf E)=\\mu_0(\\nabla\\cdot\\mathbf J+\\partial_t\\rho)$. Without Maxwell's term this would force $\\nabla\\cdot\\mathbf J=0$ always.",
  },
  {
    id: "pt-maxwell-15",
    prompt: "A long straight wire carries $I=10$ A. Using $\\mu_0=4\\pi\\times10^{-7}$ T·m/A, the field strength $5$ cm from the wire is:",
    options: ["$4\\times10^{-6}$ T", "$2\\times10^{-5}$ T", "$4\\times10^{-5}$ T", "$4\\times10^{-4}$ T"],
    answer: "C",
    explanation:
      "Ampère's law on a circle of radius $r$: $B(2\\pi r)=\\mu_0I$, so $B=\\dfrac{\\mu_0I}{2\\pi r}=\\dfrac{4\\pi\\times10^{-7}\\cdot10}{2\\pi\\cdot0.05}=4\\times10^{-5}$ T.",
  },
  {
    id: "pt-maxwell-16",
    prompt: "Between the plates of a charging capacitor, the displacement current $\\varepsilon_0\\,d\\Phi_E/dt$ equals:",
    options: [
      "Zero, since no charge crosses the gap",
      "Half the current in the wires",
      "The charge on the plates",
      "The conduction current $I$ in the connecting wires",
    ],
    answer: "D",
    explanation:
      "With $E=Q/(\\varepsilon_0A)$, $\\Phi_E=Q/\\varepsilon_0$, so $\\varepsilon_0\\,d\\Phi_E/dt=dQ/dt=I$. This keeps $\\nabla\\times\\mathbf B$ continuous across the gap.",
  },
  {
    id: "pt-maxwell-17",
    prompt: "Combining $\\mathbf E=-\\nabla\\phi$ with Gauss's law $\\nabla\\cdot\\mathbf E=\\rho/\\varepsilon_0$ gives:",
    options: [
      "$\\nabla^2\\phi=-\\rho/\\varepsilon_0$",
      "$\\nabla^2\\phi=\\rho/\\varepsilon_0$",
      "$\\nabla\\phi=\\rho\\,\\mathbf E$",
      "$\\nabla^2\\phi=0$ always",
    ],
    answer: "A",
    explanation:
      "$\\nabla\\cdot(-\\nabla\\phi)=-\\nabla^2\\phi=\\rho/\\varepsilon_0$: Poisson's equation, which reduces to Laplace's equation where $\\rho=0$.",
  },
  {
    id: "pt-maxwell-18",
    prompt: "In vacuum, Maxwell's equations imply each component of $\\mathbf E$ satisfies a wave equation with speed:",
    options: ["$\\mu_0\\varepsilon_0$", "$\\dfrac{1}{\\sqrt{\\mu_0\\varepsilon_0}}$", "$\\sqrt{\\mu_0\\varepsilon_0}$", "$\\dfrac{\\mu_0}{\\varepsilon_0}$"],
    answer: "B",
    explanation:
      "Taking the curl of Faraday's law gives $\\nabla^2\\mathbf E=\\mu_0\\varepsilon_0\\,\\partial_t^2\\mathbf E$, a wave equation with $c=1/\\sqrt{\\mu_0\\varepsilon_0}\\approx3.00\\times10^8$ m/s.",
  },
  {
    id: "pt-maxwell-19",
    prompt: "Inside an ohmic conductor ($\\mathbf J=\\sigma\\mathbf E$), an initial charge density $\\rho_0$ evolves as:",
    options: [
      "$\\rho=\\rho_0$ (constant)",
      "$\\rho=\\rho_0\\,e^{\\sigma t/\\varepsilon_0}$",
      "$\\rho=\\rho_0\\,e^{-\\sigma t/\\varepsilon_0}$",
      "$\\rho=\\rho_0\\cos(\\sigma t/\\varepsilon_0)$",
    ],
    answer: "C",
    explanation:
      "$\\partial_t\\rho=-\\nabla\\cdot(\\sigma\\mathbf E)=-\\sigma\\rho/\\varepsilon_0$, so $\\rho=\\rho_0e^{-\\sigma t/\\varepsilon_0}$: free charge decays and moves to the surface.",
  },
  {
    id: "pt-maxwell-20",
    prompt: "A uniform field $\\mathbf B=B_0\\mathbf k$. What is its upward flux through the upper hemisphere $x^2+y^2+z^2=R^2$, $z\\ge0$?",
    options: ["$0$", "$2\\pi R^2B_0$", "$4\\pi R^2B_0$", "$\\pi R^2B_0$"],
    answer: "D",
    explanation:
      "Since $\\nabla\\cdot\\mathbf B=0$, the flux through the hemisphere equals the flux through the flat disk with the same boundary: $\\pi R^2B_0$.",
  },
];
