export const MV_VECTOR_P1_QUIZ = [
  {
    prompt:
      "If $\\mathbf{r}(t) = \\langle 3\\cos t, 3\\sin t, 4t \\rangle$, what is the speed $|\\mathbf{r}'(t)|$?",
    options: ["$5$", "$3$", "$4$"],
    answer: "A",
    explanation:
      "Velocity is $\\langle -3\\sin t, 3\\cos t, 4 \\rangle$. Speed is $\\sqrt{9\\sin^2 t + 9\\cos^2 t + 16} = \\sqrt{9+16} = 5$.",
  },
  {
    prompt: "The unit tangent vector $\\mathbf{T}(t)$ is defined as:",
    options: [
      "$\\mathbf{r}'(t) / |\\mathbf{r}'(t)|$",
      "$\\mathbf{r}''(t)$",
      "$\\mathbf{r}(t) \\times \\mathbf{r}'(t)$",
    ],
    answer: "A",
    explanation:
      "The unit tangent vector isolates the direction of motion by dividing the velocity vector by its magnitude (speed).",
  },
  {
    prompt: "What does the curvature $\\kappa$ measure?",
    options: [
      "How quickly the curve changes direction",
      "The speed of the particle",
      "The twist out of the 2D plane",
    ],
    answer: "A",
    explanation:
      "Curvature measures the rate of change of the unit tangent vector with respect to arc length.",
  },
  {
    prompt:
      "If a particle moves with constant speed, its velocity and acceleration vectors are:",
    options: [
      "Always perpendicular (orthogonal)",
      "Always parallel",
      "Always zero",
    ],
    answer: "A",
    explanation:
      "If $\\mathbf{r}'(t) \\cdot \\mathbf{r}'(t) = c^2$, differentiating both sides gives $2\\mathbf{r}'(t) \\cdot \\mathbf{r}''(t) = 0$.",
  },
  {
    prompt: "The binormal vector $\\mathbf{B}(t)$ is computed as:",
    options: [
      "$\\mathbf{T}(t) \\times \\mathbf{N}(t)$",
      "$\\mathbf{N}(t) \\times \\mathbf{T}(t)$",
      "$\\mathbf{r}'(t) \\times \\mathbf{r}''(t)$",
    ],
    answer: "A",
    explanation:
      "The TNB frame forms a right-handed orthogonal system where $\\mathbf{B} = \\mathbf{T} \\times \\mathbf{N}$.",
  },
  {
    prompt: "Torsion $\\tau$ measures:",
    options: [
      "How sharply a curve twists out of the osculating plane",
      "The radius of the osculating circle",
      "The magnitude of acceleration",
    ],
    answer: "A",
    explanation:
      "Torsion quantifies the deviation of a space curve from being strictly planar. A flat 2D curve has $\\tau = 0$.",
  },
  {
    prompt:
      "Evaluate the line integral of $f(x,y)=1$ along a curve $C$. The result represents:",
    options: [
      "The arc length of $C$",
      "The area under $C$",
      "The work done along $C$",
    ],
    answer: "A",
    explanation:
      "$\\int_C 1 \\, ds$ sums up the tiny arc length segments $ds$, yielding the total length of the curve.",
  },
  {
    prompt:
      "The work done by a vector field $\\mathbf{F}$ along a curve is given by:",
    options: [
      "$\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$",
      "$\\int_C \\mathbf{F} \\times d\\mathbf{r}$",
      "$\\int_C |\\mathbf{F}| \\, ds$",
    ],
    answer: "A",
    explanation:
      "Work is the line integral of the tangential component of the force: $\\mathbf{F} \\cdot d\\mathbf{r} = \\mathbf{F} \\cdot \\mathbf{T} \\, ds$.",
  },
  {
    prompt:
      "The principal unit normal vector $\\mathbf{N}(t)$ is calculated as:",
    options: [
      "$\\mathbf{T}'(t) / |\\mathbf{T}'(t)|$",
      "$\\mathbf{r}''(t) / |\\mathbf{r}''(t)|$",
      "$\\mathbf{T}(t) \\times \\mathbf{B}(t)$",
    ],
    answer: "A",
    explanation:
      "$\\mathbf{N}$ points in the direction the curve is turning, derived from the derivative of the unit tangent vector.",
  },
  {
    prompt:
      "Arc length $s(t)$ from $t=a$ to $t=b$ is calculated by integrating:",
    options: ["$|\\mathbf{r}'(t)|$", "$\\mathbf{r}'(t)$", "$\\mathbf{r}''(t)$"],
    answer: "A",
    explanation: "Arc length is the integral of speed over time.",
  },
  {
    prompt: "The osculating plane contains which two vectors?",
    options: [
      "$\\mathbf{T}$ and $\\mathbf{N}$",
      "$\\mathbf{N}$ and $\\mathbf{B}$",
      "$\\mathbf{T}$ and $\\mathbf{B}$",
    ],
    answer: "A",
    explanation:
      "The osculating plane is the plane that best fits the curve locally, spanned by Tangent and Normal.",
  },
  {
    prompt: "If curvature $\\kappa = 0$ everywhere, the curve is a:",
    options: ["Straight line", "Circle", "Helix"],
    answer: "A",
    explanation:
      "Zero curvature means the unit tangent vector never changes direction.",
  },
  {
    prompt: "The tangential component of acceleration $a_T$ is:",
    options: [
      "The derivative of speed $d|v|/dt$",
      "The magnitude of acceleration",
      "The curvature $\\kappa$",
    ],
    answer: "A",
    explanation:
      "It represents how fast the object is speeding up or slowing down along the path.",
  },
  {
    prompt: "The normal component of acceleration $a_N$ is given by:",
    options: [
      "$\\kappa |\\mathbf{v}|^2$",
      "$d|v|/dt$",
      "$\\tau |\\mathbf{v}|$",
    ],
    answer: "A",
    explanation:
      "Centripetal acceleration is $v^2/R$, which equals $\\kappa v^2$ since $\\kappa = 1/R$.",
  },
  {
    prompt:
      "A parameterized curve $\\mathbf{r}(s)$ using arc length $s$ as the parameter has the property that:",
    options: [
      "$|\\mathbf{r}'(s)| = 1$",
      "$\\mathbf{r}''(s) = 0$",
      "$\\kappa = 0$",
    ],
    answer: "A",
    explanation:
      "Traversing by arc length means you always move at unit speed.",
  },
  {
    prompt:
      "The binormal vector $\\mathbf{B}$ has constant direction if and only if:",
    options: [
      "Torsion $\\tau = 0$",
      "Curvature $\\kappa = 0$",
      "Speed is constant",
    ],
    answer: "A",
    explanation:
      "Torsion measures the rate of change of $\\mathbf{B}$. If $\\tau=0$, $\\mathbf{B}$ is constant and the curve is strictly planar.",
  },
  {
    prompt: "For a circle of radius $R$, the curvature $\\kappa$ is:",
    options: ["$1/R$", "$R$", "$R^2$"],
    answer: "A",
    explanation:
      "Curvature is inversely proportional to the radius of the osculating circle.",
  },
  {
    prompt:
      "The line integral $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ reverses sign if:",
    options: [
      "The direction of curve $C$ is reversed",
      "The vector field is reversed",
      "Both are reversed",
    ],
    answer: "A",
    explanation:
      "Traversing $C$ backward negates $d\\mathbf{r}$, negating the total work.",
  },
  {
    prompt: "The cross product formula for curvature is $\\kappa = $:",
    options: [
      "$|\\mathbf{r}' \\times \\mathbf{r}''| / |\\mathbf{r}'|^3$",
      "$|\\mathbf{r}' \\times \\mathbf{r}''| / |\\mathbf{r}''|^3$",
      "$|\\mathbf{T}'| / |\\mathbf{r}'|$",
    ],
    answer: "A",
    explanation:
      "This is the most computationally efficient formula for $\\kappa$ in 3D.",
  },
  {
    prompt:
      "If a force field $\\mathbf{F}$ is always orthogonal to the path $\\mathbf{r}(t)$, the work done is:",
    options: ["Zero", "Maximized", "Negative"],
    answer: "A",
    explanation:
      "$\\mathbf{F} \\cdot d\\mathbf{r} = 0$ when vectors are perpendicular.",
  },
];

export const MV_VECTOR_P2_QUIZ = [
  {
    prompt: "A vector field $\\mathbf{F}$ is conservative if:",
    options: [
      "$\\mathbf{F} = \\nabla f$ for some scalar function $f$",
      "$\\nabla \\cdot \\mathbf{F} = 0$",
      "It has constant magnitude",
    ],
    answer: "A",
    explanation:
      "Conservative fields are gradient fields. The scalar function $f$ is called the potential function.",
  },
  {
    prompt:
      "For a conservative field $\\mathbf{F} = \\nabla f$, the line integral $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ from A to B is:",
    options: ["$f(B) - f(A)$", "$f(A) - f(B)$", "Always $0$"],
    answer: "A",
    explanation:
      "By the Fundamental Theorem for Line Integrals, the integral only depends on the endpoints.",
  },
  {
    prompt:
      "In 2D, the cross-partial test for a conservative field $\\mathbf{F} = \\langle M, N \\rangle$ requires:",
    options: [
      "$\\partial M/\\partial y = \\partial N/\\partial x$",
      "$\\partial M/\\partial x = \\partial N/\\partial y$",
      "$M_x + N_y = 0$",
    ],
    answer: "A",
    explanation:
      "Since $M = f_x$ and $N = f_y$, Clairaut's theorem implies $f_{xy} = f_{yx}$, meaning $M_y = N_x$.",
  },
  {
    prompt:
      "Green's Theorem equates a line integral around a closed boundary to:",
    options: [
      "A double integral over the enclosed region",
      "A surface integral over a sphere",
      "A triple integral of volume",
    ],
    answer: "A",
    explanation: "$\\oint_C M\\,dx + N\\,dy = \\iint_R (N_x - M_y)\\,dA$.",
  },
  {
    prompt: "Green's Theorem requires the boundary curve $C$ to be oriented:",
    options: ["Counterclockwise (positive orientation)", "Clockwise", "Inward"],
    answer: "A",
    explanation:
      "The region $R$ must remain on your left as you traverse the boundary, which means counterclockwise for the outer boundary.",
  },
  {
    prompt:
      "The expression $\\partial N/\\partial x - \\partial M/\\partial y$ in Green's Theorem represents:",
    options: [
      "The 2D curl (local spin)",
      "The divergence (expansion)",
      "The gradient magnitude",
    ],
    answer: "A",
    explanation:
      "It measures the microscopic rotation of the vector field at a point in the plane.",
  },
  {
    prompt:
      "The surface area of a parametric surface $\\mathbf{r}(u,v)$ over domain $D$ is:",
    options: [
      "$\\iint_D |\\mathbf{r}_u \\times \\mathbf{r}_v| \\, dA$",
      "$\\iint_D (\\mathbf{r}_u \\cdot \\mathbf{r}_v) \\, dA$",
      "$\\iint_D |\\mathbf{r}_u| |\\mathbf{r}_v| \\, dA$",
    ],
    answer: "A",
    explanation:
      "The magnitude of the cross product gives the area of the differential parallelogram patch on the surface.",
  },
  {
    prompt:
      "If a surface is given by $z = g(x,y)$, the surface area element $dS$ simplifies to:",
    options: [
      "$\\sqrt{1 + g_x^2 + g_y^2} \\, dA$",
      "$\\sqrt{g_x^2 + g_y^2} \\, dA$",
      "$(1 + g_x + g_y) \\, dA$",
    ],
    answer: "A",
    explanation:
      "This is the 'tilt correction factor' accounting for the steepness of the surface relative to the xy-plane.",
  },
  {
    prompt:
      "If $\\mathbf{F} = \\nabla f$, then $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ over any closed loop $C$ is:",
    options: ["$0$", "$1$", "Equal to the area enclosed"],
    answer: "A",
    explanation: "Conservative fields do zero net work over closed loops.",
  },
  {
    prompt:
      "The curl of a 3D gradient field $\\nabla \\times (\\nabla f)$ is always:",
    options: ["$\\mathbf{0}$", "$1$", "$\\nabla^2 f$"],
    answer: "A",
    explanation: "A fundamental vector calculus identity.",
  },
  {
    prompt:
      "To find a potential function $f$ for $\\mathbf{F}=\\langle P, Q \\rangle$, you:",
    options: [
      "Integrate $P$ with respect to $x$ and $Q$ with respect to $y$",
      "Differentiate $P$ and $Q$",
      "Cross multiply $P$ and $Q$",
    ],
    answer: "A",
    explanation: "Since $f_x=P$ and $f_y=Q$, partial integration rebuilds $f$.",
  },
  {
    prompt: "Green's Theorem applies to:",
    options: [
      "2D vector fields over planar regions",
      "3D vector fields over surfaces",
      "1D scalar lines",
    ],
    answer: "A",
    explanation:
      "It connects a line integral around a 2D curve to a double integral over the 2D interior.",
  },
  {
    prompt:
      "In Green's Theorem, the area of region $R$ can be found using the line integral:",
    options: [
      "$\\frac{1}{2} \\oint_C x dy - y dx$",
      "$\\oint_C x dx + y dy$",
      "$\\oint_C y dx - x dy$",
    ],
    answer: "A",
    explanation:
      "Choosing $M=-y/2, N=x/2$ gives $N_x - M_y = 1/2 - (-1/2) = 1$, integrating to Area.",
  },
  {
    prompt: "A region is simply connected if:",
    options: ["It has no holes", "It is a perfect circle", "It is bounded"],
    answer: "A",
    explanation: "Any closed loop can be continuously shrunk to a point.",
  },
  {
    prompt:
      "If $\\partial Q/\\partial x = \\partial P/\\partial y$ on a region with a hole, the field:",
    options: [
      "Might not be conservative globally",
      "Is still conservative globally",
      "Must be zero",
    ],
    answer: "A",
    explanation:
      "The cross-partial test guarantees a conservative field only on simply connected domains.",
  },
  {
    prompt:
      "The parametric equations $x = \\sin\\phi\\cos\\theta, y = \\sin\\phi\\sin\\theta, z = \\cos\\phi$ describe:",
    options: ["A sphere of radius 1", "A cylinder", "A cone"],
    answer: "A",
    explanation:
      "These are the standard spherical coordinates for the unit sphere.",
  },
  {
    prompt:
      "If $\\mathbf{r}(u,v) = \\langle u, v, f(u,v) \\rangle$, then $\\mathbf{r}_u \\times \\mathbf{r}_v$ is:",
    options: [
      "$\\langle -f_u, -f_v, 1 \\rangle$",
      "$\\langle f_u, f_v, -1 \\rangle$",
      "$\\langle 1, 1, f_{uv} \\rangle$",
    ],
    answer: "A",
    explanation:
      "Standard normal vector for a surface defined by a function $z=f(x,y)$.",
  },
  {
    prompt:
      "The surface integral of a scalar function $G(x,y,z)$ is written as:",
    options: [
      "$\\iint_S G \\, dS$",
      "$\\iint_S G \\cdot d\\mathbf{S}$",
      "$\\iint_S \\nabla G \\, dA$",
    ],
    answer: "A",
    explanation:
      "Integrates the scalar $G$ against the surface area element $dS$.",
  },
  {
    prompt:
      "If $\\mathbf{F} = \\langle 0, x, 0 \\rangle$, the circulation $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ around the unit circle gives:",
    options: ["The area of the circle ($\\pi$)", "$0$", "$2\\pi$"],
    answer: "A",
    explanation:
      "By Green's Theorem, $\\iint_D (1 - 0) dA = \\text{Area} = \\pi$.",
  },
  {
    prompt: "The flux of $\\mathbf{F}$ across a curve $C$ in 2D is given by:",
    options: [
      "$\\oint_C \\mathbf{F} \\cdot \\mathbf{n} \\, ds$",
      "$\\oint_C \\mathbf{F} \\cdot \\mathbf{T} \\, ds$",
      "$\\oint_C \\mathbf{F} \\times \\mathbf{n} \\, ds$",
    ],
    answer: "A",
    explanation:
      "Flux measures how much of the field pushes perpendicularly across the boundary.",
  },
];
