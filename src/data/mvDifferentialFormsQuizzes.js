// src/data/mvDifferentialFormsQuizzes.js
// Differential Forms (Multivariable Calculus)
// Differential Forms & the Exterior Derivative — 20 MCQs
// Format used by GuideMcqSection: { id, prompt, options[4], answer: "A" | "B" | "C" | "D", explanation }

export const MV_DF_FORMS_QUIZ = [
  {
    id: "df-forms-1",
    prompt: "What is $dx\\wedge dx$?",
    options: ["$0$", "$1$", "$2\\,dx$", "$dx^2$"],
    answer: "A",
    explanation:
      "The wedge product is alternating: $\\alpha\\wedge\\beta=-\\beta\\wedge\\alpha$ for 1-forms. Setting $\\beta=\\alpha$ gives $\\alpha\\wedge\\alpha=-\\alpha\\wedge\\alpha$, so $dx\\wedge dx=0$.",
  },
  {
    id: "df-forms-2",
    prompt: "Which identity holds for the basic 1-forms $dx$ and $dy$?",
    options: [
      "$dy\\wedge dx=dx\\wedge dy$",
      "$dy\\wedge dx=-dx\\wedge dy$",
      "$dy\\wedge dx=0$",
      "$dy\\wedge dx=dx\\,dy$",
    ],
    answer: "B",
    explanation:
      "Swapping two 1-forms in a wedge product changes the sign. Geometrically, swapping the two edges of a parallelogram reverses its orientation.",
  },
  {
    id: "df-forms-3",
    prompt: "Simplify $(2\\,dx+dy)\\wedge(dx-3\\,dy)$.",
    options: ["$-5\\,dx\\wedge dy$", "$-6\\,dx\\wedge dy$", "$-7\\,dx\\wedge dy$", "$7\\,dx\\wedge dy$"],
    answer: "C",
    explanation:
      "Expand: $-6\\,dx\\wedge dy+dy\\wedge dx=-6\\,dx\\wedge dy-dx\\wedge dy=-7\\,dx\\wedge dy$. Check: $\\det\\begin{pmatrix}2&1\\\\1&-3\\end{pmatrix}=-7$.",
  },
  {
    id: "df-forms-4",
    prompt: "How many independent basic 2-forms are there on $\\mathbb R^3$?",
    options: ["$1$", "$2$", "$6$", "$3$"],
    answer: "D",
    explanation:
      "A basic 2-form uses 2 of the 3 coordinates in increasing order: $dy\\wedge dz$, $dz\\wedge dx$, $dx\\wedge dy$. In general there are $\\binom{n}{k}$ basic $k$-forms on $\\mathbb R^n$, here $\\binom32=3$.",
  },
  {
    id: "df-forms-5",
    prompt: "For $f(x,y,z)=x^2y+z^3$, the exterior derivative $df$ is:",
    options: [
      "$2xy\\,dx+x^2\\,dy+3z^2\\,dz$",
      "$2xy\\,dx\\wedge dy+3z^2\\,dz$",
      "$2x\\,dx+y\\,dy+3z^2\\,dz$",
      "$x^2y\\,dx+z^3\\,dz$",
    ],
    answer: "A",
    explanation: "$df=f_x\\,dx+f_y\\,dy+f_z\\,dz=2xy\\,dx+x^2\\,dy+3z^2\\,dz$: the 1-form version of $\\nabla f$.",
  },
  {
    id: "df-forms-6",
    prompt: "Evaluate the 2-form $dx\\wedge dy$ on the vectors $\\mathbf u=\\langle1,2,0\\rangle$ and $\\mathbf v=\\langle3,1,5\\rangle$.",
    options: ["$5$", "$-5$", "$7$", "$0$"],
    answer: "B",
    explanation:
      "$(dx\\wedge dy)(\\mathbf u,\\mathbf v)=\\det\\begin{pmatrix}u_1&v_1\\\\u_2&v_2\\end{pmatrix}=1\\cdot1-3\\cdot2=-5$: the signed area of the projection onto the $xy$-plane.",
  },
  {
    id: "df-forms-7",
    prompt: "Compute $d(-y\\,dx+x\\,dy)$.",
    options: ["$0$", "$dx\\wedge dy$", "$2\\,dx\\wedge dy$", "$-2\\,dx\\wedge dy$"],
    answer: "C",
    explanation:
      "$d(-y)\\wedge dx+d(x)\\wedge dy=-dy\\wedge dx+dx\\wedge dy=2\\,dx\\wedge dy$. This matches $\\operatorname{curl}\\langle-y,x,0\\rangle=\\langle0,0,2\\rangle$.",
  },
  {
    id: "df-forms-8",
    prompt: "Compute $d\\big(x\\,dy\\wedge dz+y\\,dz\\wedge dx+z\\,dx\\wedge dy\\big)$.",
    options: ["$0$", "$dx\\wedge dy\\wedge dz$", "$-3\\,dx\\wedge dy\\wedge dz$", "$3\\,dx\\wedge dy\\wedge dz$"],
    answer: "D",
    explanation:
      "Each term gives $dx\\wedge dy\\wedge dz$ (cyclic reorderings are even permutations), so the total is $3\\,dx\\wedge dy\\wedge dz$, matching $\\nabla\\cdot\\langle x,y,z\\rangle=3$.",
  },
  {
    id: "df-forms-9",
    prompt: "For any smooth $k$-form $\\omega$, $d(d\\omega)$ equals:",
    options: ["$0$", "$\\omega$", "$d\\omega\\wedge d\\omega$", "It depends on $k$"],
    answer: "A",
    explanation:
      "$d^2=0$ always. For functions this is Clairaut's theorem: the mixed partials in $d(df)$ cancel in pairs because $dx\\wedge dy=-dy\\wedge dx$.",
  },
  {
    id: "df-forms-10",
    prompt: "In vector calculus, $d(df)=0$ for a function $f$ on $\\mathbb R^3$ is the identity:",
    options: [
      "$\\nabla\\cdot(\\nabla f)=0$",
      "$\\nabla\\times(\\nabla f)=\\mathbf 0$",
      "$\\nabla\\cdot(\\nabla\\times\\mathbf F)=0$",
      "$\\nabla^2 f=0$",
    ],
    answer: "B",
    explanation:
      "$df$ corresponds to $\\nabla f$ and $d$ on 1-forms corresponds to curl, so $d(df)=0$ says $\\operatorname{curl}(\\nabla f)=\\mathbf 0$. Note $\\nabla\\cdot\\nabla f=\\nabla^2 f$ is not always zero.",
  },
  {
    id: "df-forms-11",
    prompt: "If $\\omega_{\\mathbf F}=P\\,dx+Q\\,dy+R\\,dz$ is the work 1-form of $\\mathbf F=\\langle P,Q,R\\rangle$, then $d\\omega_{\\mathbf F}$ encodes:",
    options: ["$\\nabla\\cdot\\mathbf F$", "$\\nabla(|\\mathbf F|)$", "$\\nabla\\times\\mathbf F$", "$\\nabla^2\\mathbf F$"],
    answer: "C",
    explanation:
      "$d\\omega_{\\mathbf F}=(R_y-Q_z)\\,dy\\wedge dz+(P_z-R_x)\\,dz\\wedge dx+(Q_x-P_y)\\,dx\\wedge dy$, whose coefficients are exactly the components of $\\operatorname{curl}\\mathbf F$.",
  },
  {
    id: "df-forms-12",
    prompt: "What is the exterior derivative of any 3-form on $\\mathbb R^3$?",
    options: [
      "A 2-form",
      "The divergence of the form",
      "$dx\\wedge dy\\wedge dz$",
      "Always $0$",
    ],
    answer: "D",
    explanation:
      "$d$ of a 3-form is a 4-form, and on $\\mathbb R^3$ every 4-form contains a repeated $dx_i$, so it vanishes.",
  },
  {
    id: "df-forms-13",
    prompt: "A differential form $\\omega$ is called closed when:",
    options: [
      "$d\\omega=0$",
      "$\\omega=d\\alpha$ for some form $\\alpha$",
      "$\\omega\\wedge\\omega=0$",
      "Its integral over every curve is zero",
    ],
    answer: "A",
    explanation:
      "Closed means $d\\omega=0$. Exact means $\\omega=d\\alpha$. Every exact form is closed because $d^2=0$; the converse needs a condition on the domain.",
  },
  {
    id: "df-forms-14",
    prompt: "The Poincaré lemma states that on a star-shaped open set:",
    options: [
      "Every exact form is zero",
      "Every closed form is exact",
      "Every form is closed",
      "$d$ is invertible on all forms",
    ],
    answer: "B",
    explanation:
      "On a star-shaped (for example convex) domain, $d\\omega=0$ implies $\\omega=d\\alpha$ for some $\\alpha$. For 1-forms this is the familiar test for conservative fields.",
  },
  {
    id: "df-forms-15",
    prompt: "On $\\mathbb R^2\\setminus\\{\\mathbf 0\\}$, the form $\\omega=\\dfrac{-y\\,dx+x\\,dy}{x^2+y^2}$ is:",
    options: [
      "Exact but not closed",
      "Neither closed nor exact",
      "Closed but not exact",
      "Both closed and exact",
    ],
    answer: "C",
    explanation:
      "$d\\omega=0$ (the mixed partials agree), but $\\oint\\omega=2\\pi$ around the unit circle. An exact form would integrate to $0$ around every closed curve, so $\\omega$ is not exact. The hole at the origin is responsible.",
  },
  {
    id: "df-forms-16",
    prompt: "Find $f$ with $df=(2xy+z)\\,dx+x^2\\,dy+x\\,dz$.",
    options: ["$x^2y+z$", "$2xy+xz$", "$xy^2+xz$", "$x^2y+xz$"],
    answer: "D",
    explanation:
      "Integrating $f_x=2xy+z$ gives $f=x^2y+xz+g(y,z)$. Then $f_y=x^2$ and $f_z=x$ force $g$ to be constant.",
  },
  {
    id: "df-forms-17",
    prompt: "Under polar coordinates $x=r\\cos\\theta$, $y=r\\sin\\theta$, the pullback of $dx\\wedge dy$ is:",
    options: ["$r\\,dr\\wedge d\\theta$", "$dr\\wedge d\\theta$", "$r^2\\,dr\\wedge d\\theta$", "$\\dfrac1r\\,dr\\wedge d\\theta$"],
    answer: "A",
    explanation:
      "$dx\\wedge dy=(\\cos\\theta\\,dr-r\\sin\\theta\\,d\\theta)\\wedge(\\sin\\theta\\,dr+r\\cos\\theta\\,d\\theta)=r(\\cos^2\\theta+\\sin^2\\theta)\\,dr\\wedge d\\theta$. The factor $r$ is the Jacobian.",
  },
  {
    id: "df-forms-18",
    prompt: "If $\\alpha$ is a 1-form and $\\beta$ is a 2-form, how are $\\alpha\\wedge\\beta$ and $\\beta\\wedge\\alpha$ related?",
    options: [
      "$\\alpha\\wedge\\beta=-\\beta\\wedge\\alpha$",
      "$\\alpha\\wedge\\beta=\\beta\\wedge\\alpha$",
      "$\\alpha\\wedge\\beta=0$",
      "There is no general relation",
    ],
    answer: "B",
    explanation:
      "Graded commutativity: $\\alpha\\wedge\\beta=(-1)^{kl}\\beta\\wedge\\alpha$. Here $kl=1\\cdot2=2$ is even, so they are equal.",
  },
  {
    id: "df-forms-19",
    prompt: "Evaluate $\\displaystyle\\oint_C(y\\,dx-x\\,dy)$ where $C$ is the unit circle traversed counterclockwise.",
    options: ["$0$", "$2\\pi$", "$-2\\pi$", "$\\pi$"],
    answer: "C",
    explanation:
      "With $x=\\cos t$, $y=\\sin t$: $y\\,dx-x\\,dy=(-\\sin^2t-\\cos^2t)\\,dt=-dt$, so the integral over $[0,2\\pi]$ is $-2\\pi$.",
  },
  {
    id: "df-forms-20",
    prompt: "For any 1-form $\\alpha$, the product $\\alpha\\wedge\\alpha$ equals:",
    options: ["$2\\alpha$", "$\\alpha^2$", "$d\\alpha$", "$0$"],
    answer: "D",
    explanation:
      "For odd-degree forms, $\\alpha\\wedge\\alpha=(-1)^{1}\\alpha\\wedge\\alpha$, which forces $\\alpha\\wedge\\alpha=0$.",
  },
];
