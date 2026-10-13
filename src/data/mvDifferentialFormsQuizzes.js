// src/data/mvDifferentialFormsQuizzes.js
// Differential Forms (Multivariable Calculus)
// Differential Forms & the Exterior Derivative — 20 MCQs
// Generalized Stokes' Theorem — 20 MCQs
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

export const MV_DF_STOKES_QUIZ = [
  {
    id: "df-stokes-1",
    prompt: "The Generalized Stokes' Theorem for a compact oriented $k$-manifold $M$ with boundary and a smooth $(k-1)$-form $\\omega$ states:",
    options: [
      "$\\displaystyle\\int_M d\\omega=\\int_{\\partial M}\\omega$",
      "$\\displaystyle\\int_M \\omega=\\int_{\\partial M}d\\omega$",
      "$\\displaystyle\\int_M d\\omega=0$",
      "$\\displaystyle\\int_{\\partial M}\\omega=\\int_M\\omega\\wedge\\omega$",
    ],
    answer: "A",
    explanation:
      "Integrating the derivative $d\\omega$ over $M$ equals integrating $\\omega$ itself over the boundary $\\partial M$, with the induced orientation.",
  },
  {
    id: "df-stokes-2",
    prompt: "For any manifold with boundary $M$, the boundary of its boundary, $\\partial(\\partial M)$, is:",
    options: ["$M$", "$\\varnothing$", "$\\partial M$", "$-M$"],
    answer: "B",
    explanation:
      "A boundary has no boundary: a circle has no endpoints, a sphere has no edge. This is the geometric twin of $d^2=0$.",
  },
  {
    id: "df-stokes-3",
    prompt: "When $M$ is an oriented curve from $A$ to $B$ and $\\omega=f$ is a 0-form, the Generalized Stokes' Theorem becomes:",
    options: [
      "Green's Theorem",
      "The Divergence Theorem",
      "The Fundamental Theorem for line integrals",
      "Classical Stokes' Theorem",
    ],
    answer: "C",
    explanation:
      "$\\partial C=\\{B\\}-\\{A\\}$, so $\\int_C df=f(B)-f(A)$: the Fundamental Theorem for line integrals.",
  },
  {
    id: "df-stokes-4",
    prompt: "Green's Theorem is the Generalized Stokes' Theorem with $M$ equal to:",
    options: [
      "A curve in $\\mathbb R^3$",
      "A solid region in $\\mathbb R^3$",
      "A surface in $\\mathbb R^3$",
      "A region in the plane $\\mathbb R^2$",
    ],
    answer: "D",
    explanation:
      "For a plane region $D$ and $\\omega=P\\,dx+Q\\,dy$: $\\iint_D(Q_x-P_y)\\,dx\\wedge dy=\\oint_{\\partial D}P\\,dx+Q\\,dy$.",
  },
  {
    id: "df-stokes-5",
    prompt: "For a smooth function $f$ and a curve $C$ from $A$ to $B$, $\\displaystyle\\int_C df$ equals:",
    options: ["$f(B)-f(A)$", "$f(A)-f(B)$", "$0$", "$\\nabla f(B)-\\nabla f(A)$"],
    answer: "A",
    explanation: "The boundary of an oriented curve is its end point minus its start point, so $\\int_C df=f(B)-f(A)$, independent of the path.",
  },
  {
    id: "df-stokes-6",
    prompt: "Let $f=x^2y+z$. Evaluate $\\int_C df$ along any smooth curve from $(0,0,0)$ to $(1,2,3)$.",
    options: ["$3$", "$5$", "$6$", "$0$"],
    answer: "B",
    explanation: "$f(1,2,3)-f(0,0,0)=(1\\cdot2+3)-0=5$, whatever path is taken.",
  },
  {
    id: "df-stokes-7",
    prompt: "Using $A=\\tfrac12\\oint_{\\partial D}(x\\,dy-y\\,dx)$, the area enclosed by the ellipse $x=3\\cos t$, $y=2\\sin t$ is:",
    options: ["$3\\pi$", "$12\\pi$", "$6\\pi$", "$5\\pi$"],
    answer: "C",
    explanation:
      "$x\\,dy-y\\,dx=(6\\cos^2t+6\\sin^2t)\\,dt=6\\,dt$, so $A=\\tfrac12\\int_0^{2\\pi}6\\,dt=6\\pi=\\pi ab$.",
  },
  {
    id: "df-stokes-8",
    prompt: "Evaluate $\\displaystyle\\oint_C(-y\\,dx+x\\,dy)$ where $C$ is the circle of radius $2$ traversed counterclockwise.",
    options: ["$4\\pi$", "$2\\pi$", "$0$", "$8\\pi$"],
    answer: "D",
    explanation:
      "$d(-y\\,dx+x\\,dy)=2\\,dx\\wedge dy$, so the integral is $2\\times\\text{area}=2\\cdot4\\pi=8\\pi$.",
  },
  {
    id: "df-stokes-9",
    prompt: "The Divergence Theorem is the Generalized Stokes' Theorem in which case?",
    options: [
      "$M$ a solid region in $\\mathbb R^3$, $\\omega$ a 2-form",
      "$M$ a surface in $\\mathbb R^3$, $\\omega$ a 1-form",
      "$M$ a curve, $\\omega$ a 0-form",
      "$M$ a plane region, $\\omega$ a 1-form",
    ],
    answer: "A",
    explanation:
      "With $\\omega=\\Phi_{\\mathbf F}$ (the flux 2-form), $d\\omega=(\\nabla\\cdot\\mathbf F)\\,dV$, and the theorem reads $\\iiint_E\\nabla\\cdot\\mathbf F\\,dV=\\iint_{\\partial E}\\mathbf F\\cdot\\mathbf n\\,dS$.",
  },
  {
    id: "df-stokes-10",
    prompt: "If $M$ is a compact oriented manifold with no boundary and $\\omega=d\\alpha$ is exact, then $\\int_M\\omega$ equals:",
    options: ["$\\int_M\\alpha$", "$0$", "The volume of $M$", "It depends on $\\alpha$"],
    answer: "B",
    explanation: "$\\int_M d\\alpha=\\int_{\\partial M}\\alpha=\\int_{\\varnothing}\\alpha=0$.",
  },
  {
    id: "df-stokes-11",
    prompt: "For a smooth field $\\mathbf F$ on $\\mathbb R^3$ and any closed surface $S$ (a sphere, say), the flux $\\iint_S(\\nabla\\times\\mathbf F)\\cdot\\mathbf n\\,dS$ is:",
    options: ["$4\\pi$", "The volume inside $S$", "$0$", "$\\iint_S\\mathbf F\\cdot\\mathbf n\\,dS$"],
    answer: "C",
    explanation:
      "The flux form of $\\nabla\\times\\mathbf F$ is $d\\omega_{\\mathbf F}$, an exact 2-form, and $S$ has no boundary, so the integral is $0$. Equivalently, $\\nabla\\cdot(\\nabla\\times\\mathbf F)=0$.",
  },
  {
    id: "df-stokes-12",
    prompt: "The upper hemisphere $x^2+y^2+z^2=1$, $z\\ge0$, is oriented by the upward normal. The induced orientation on its boundary circle is:",
    options: [
      "Clockwise viewed from above",
      "Either direction",
      "No orientation is induced",
      "Counterclockwise viewed from above",
    ],
    answer: "D",
    explanation:
      "Right-hand rule: with the normal pointing up and the surface on your left as you walk the edge, you go counterclockwise when viewed from above.",
  },
  {
    id: "df-stokes-13",
    prompt: "With the standard orientation, the boundary of the interval $[a,b]$ is:",
    options: ["$\\{b\\}-\\{a\\}$", "$\\{a\\}-\\{b\\}$", "$\\{a\\}+\\{b\\}$", "$\\varnothing$"],
    answer: "A",
    explanation:
      "The end point counts positively and the start point negatively, so $\\int_{[a,b]}df=f(b)-f(a)$ is the ordinary Fundamental Theorem of Calculus.",
  },
  {
    id: "df-stokes-14",
    prompt: "For the unit square $[0,1]^2$ and $\\omega=xy\\,dy$, what is $\\displaystyle\\iint_{[0,1]^2}d\\omega$?",
    options: ["$1$", "$\\tfrac12$", "$\\tfrac14$", "$0$"],
    answer: "B",
    explanation:
      "$d\\omega=y\\,dx\\wedge dy$, so the integral is $\\int_0^1\\!\\int_0^1y\\,dx\\,dy=\\tfrac12$. The boundary gives the same: only the edge $x=1$ contributes $\\int_0^1y\\,dy=\\tfrac12$.",
  },
  {
    id: "df-stokes-15",
    prompt: "Let $\\eta=x\\,dy\\wedge dz+y\\,dz\\wedge dx+z\\,dx\\wedge dy$. What is $\\iint_S\\eta$ over the sphere of radius $2$, oriented outward?",
    options: ["$8\\pi$", "$16\\pi$", "$32\\pi$", "$4\\pi$"],
    answer: "C",
    explanation:
      "$d\\eta=3\\,dx\\wedge dy\\wedge dz$, so the integral equals $3\\times\\tfrac43\\pi(2)^3=32\\pi$.",
  },
  {
    id: "df-stokes-16",
    prompt: "On $\\mathbb R^2\\setminus\\{\\mathbf 0\\}$ let $\\omega=\\dfrac{-y\\,dx+x\\,dy}{x^2+y^2}$. What is $\\oint\\omega$ around the unit circle traversed counterclockwise twice?",
    options: ["$0$", "$2\\pi$", "$\\pi$", "$4\\pi$"],
    answer: "D",
    explanation:
      "Each counterclockwise loop contributes $2\\pi$, so two loops give $4\\pi$. Dividing by $2\\pi$ gives the winding number $2$.",
  },
  {
    id: "df-stokes-17",
    prompt: "Let $E=[0,1]^3$ with outward orientation. What is $\\displaystyle\\iint_{\\partial E}x^2\\,dy\\wedge dz$?",
    options: ["$1$", "$0$", "$2$", "$\\tfrac13$"],
    answer: "A",
    explanation:
      "$d(x^2\\,dy\\wedge dz)=2x\\,dx\\wedge dy\\wedge dz$, and $\\iiint_E2x\\,dV=1$. Directly: only the face $x=1$ contributes, giving $1\\cdot\\text{area}=1$.",
  },
  {
    id: "df-stokes-18",
    prompt: "Why is $\\iint_S d\\omega$ the same for every oriented surface $S$ with the same boundary curve $C$?",
    options: [
      "Because $d\\omega$ is always zero",
      "Because each integral equals $\\oint_C\\omega$",
      "Because all such surfaces have equal area",
      "It is not true in general",
    ],
    answer: "B",
    explanation:
      "Generalized Stokes gives $\\iint_S d\\omega=\\oint_{\\partial S}\\omega=\\oint_C\\omega$, which depends only on the boundary.",
  },
  {
    id: "df-stokes-19",
    prompt: "Which hypotheses does the Generalized Stokes' Theorem need?",
    options: [
      "Only that $\\omega$ is continuous",
      "$M$ must be a subset of $\\mathbb R^2$",
      "$M$ compact and oriented with boundary, and $\\omega$ a smooth $(k-1)$-form",
      "$\\omega$ must be closed",
    ],
    answer: "C",
    explanation:
      "Compactness (or compact support) makes the integrals finite, orientation makes them well defined, and $\\omega$ must be a smooth $(k-1)$-form on a $k$-manifold so that $d\\omega$ is a $k$-form.",
  },
  {
    id: "df-stokes-20",
    prompt: "For the upper hemisphere of radius $R$ (upward normal) and $\\omega=-y\\,dx+x\\,dy$, what is $\\iint_S d\\omega$?",
    options: ["$\\pi R^2$", "$0$", "$4\\pi R^2$", "$2\\pi R^2$"],
    answer: "D",
    explanation:
      "By Stokes it equals $\\oint_{\\partial S}(-y\\,dx+x\\,dy)$ over the counterclockwise circle of radius $R$, which is $R^2\\int_0^{2\\pi}dt=2\\pi R^2$.",
  },
];
