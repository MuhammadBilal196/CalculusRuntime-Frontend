import { InlineMath } from "../components/Math";
import { LA_MODULES, getLaModulePath } from "./laModules";

/** Module-card formula, typeset by KaTeX from a LaTeX string. */
const mathLogo = (latex) => <InlineMath className="math-logo" latex={latex} />;

/** Top-level subject paths shown on Home ("Choose a path"). */
export const COURSES = [
  {
    id: "calculus-analytical-geometry",
    title: "Calculus and Analytical Geometry",
    logo: (
      <span className="math-logo-card">
        <span className="math-sym-big">∫</span> f(x) dx
      </span>
    ),
    description:
      "Single-variable foundations: limits, differentiation, integration, sequences & series, conics, and Taylor series — certificate-ready theory and examples.",
    path: "/courses/calculus-analytical-geometry",
    meta: "6 guides · Tools + practice",
    icon: "∫",
    color: "gold",
    heroImage: "/images/courses/calc-geometry-hero.svg",
    heroImageAlt: "Calculus and Analytical Geometry Curves and Tangents Visual",
    overview: {
      longDescription: [
        "Calculus and Analytical Geometry forms the mathematical bedrock for modern science, engineering, and computational modeling. This rigorous curriculum establishes first principles of limits and continuity via epsilon-delta formulations, the Squeeze Theorem, and intermediate value properties. We develop differential calculus from difference quotients through product, quotient, and chain rules, analyzing curve optimization, related rates, and Mean Value Theorems. Integral calculus bridges accumulation via Riemann sums to the Fundamental Theorem of Calculus, improper integrals, and geometric volume applications. The course advances through infinite series convergence tests, Taylor and Maclaurin expansions, and concludes with Cartesian coordinate geometry and complete conic section classifications.",
      ],
      highlights: [
        "Limits, epsilon-delta proofs & squeeze theorem",
        "Differentiation rules, extrema, MVT & L'Hôpital",
        "FTC, area, integration techniques & improper integrals",
        "Convergence tests, power series & Taylor expansions",
        "Parabolas, ellipses, hyperbolas & analytic geometry",
        "TaylorX interactive derivative visualizer",
        "Certificate quiz — 60 MCQs, 80% to pass",
      ],
      prerequisites: "Algebra, basic trigonometry, and function notation.",
    },
    modules: [
      {
        title: "Overview",
        description:
          "What you'll learn, the order to learn it in, and how the course and certificate are structured.",
        path: "/calculus/overview",
        meta: "Start here",
        icon: "★",
        logo: mathLogo(String.raw`\int f(x)\,dx \;\; \text{Roadmap}`),
        start: true,
      },
      {
        title: "Limits & Continuity",
        description:
          "Limits, path tests, continuity — with certificate-depth theory and worked examples.",
        path: "/limits-continuity/1",
        meta: "2 parts · 6+ examples each",
        icon: "lim",
        logo: mathLogo(String.raw`\lim\limits_{x \to a} f(x)`),
      },
      {
        title: "Differentiation",
        description:
          "Definition, rules, related rates, extrema, MVT, L'Hôpital — certificate track.",
        path: "/differentiation/1",
        meta: "2 parts · 6 examples each",
        icon: "d/dx",
        logo: mathLogo(String.raw`f'(x) = \frac{df}{dx}`),
      },
      {
        title: "Integration",
        description:
          "Antiderivatives, FTC, area, techniques, improper integrals — certificate track.",
        path: "/integration/1",
        meta: "2 parts · 6 examples each",
        icon: "∫",
        logo: mathLogo(String.raw`\int f(x)\,dx`),
      },
      {
        title: "Sequences & Infinite Series",
        description:
          "Convergence tests, power series, and radius of convergence — certificate track.",
        path: "/sequences-series/1",
        meta: "2 parts · 8 examples each",
        icon: "Σ",
        logo: mathLogo(String.raw`\sum\limits_{n=1}^{\infty} a_n`),
      },
      {
        title: "Conic Sections",
        description:
          "Parabolas, ellipses, hyperbolas, and analytic geometry — certificate track.",
        path: "/conic-sections/1",
        meta: "2 parts · 8 examples each",
        icon: "◯",
        logo: mathLogo(String.raw`\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1`),
      },
      {
        title: "Straight Lines & Systems of Lines",
        description:
          "Slope, intercepts, normal form, angle between lines, concurrency, and homogeneous pairs of lines (F.Sc Ch. 4 + Math-101).",
        path: "/lines-geometry/1",
        meta: "2 parts · 16 lengthy examples · 30 MCQs",
        icon: "📏",
        logo: mathLogo(
          String.raw`Ax + By + C = 0 \;\&\; ax^2 + 2hxy + by^2 = 0`,
        ),
      },
      {
        title: "Circle & Conic Tangents/Normals",
        description:
          "Standard/general circles, 3-point circles, parametric forms, T = 0 operator, tangency conditions, and director circles (F.Sc Ch. 6 + Math-101).",
        path: "/circles-tangents/1",
        meta: "2 parts · 16 lengthy examples · 30 MCQs",
        icon: "⭕",
        logo: mathLogo(String.raw`x^2 + y^2 + 2gx + 2fy + c = 0 \;\&\; T = 0`),
      },
      {
        title: "Advanced Single-Variable Calculus",
        description:
          "Epsilon-delta limit proofs, discontinuity classification, IVT/EVT/MVT, logarithmic/parametric differentiation, hyperbolics, and curvature (F.Sc Ch. 1-3 + Math-101).",
        path: "/advanced-calculus/1",
        meta: "2 parts · 16 lengthy examples · 30 MCQs",
        icon: "∂",
        logo: mathLogo(
          String.raw`(\varepsilon, \delta) \;\&\; \kappa = \frac{|y''|}{(1 + y'^2)^{3/2}}`,
        ),
      },
      {
        title: "Ordinary Differential Equations",
        description:
          "Separable, homogeneous, integrating factor, exact, Bernoulli, and 2nd-order constant coefficient ODEs (F.Sc Ch. 3 + Math-201).",
        path: "/differential-equations/1",
        meta: "2 parts · 16 lengthy examples · 30 MCQs",
        icon: "⚡",
        logo: mathLogo(
          String.raw`y' + P(x)\,y = Q(x) \;\&\; ay'' + by' + cy = 0`,
        ),
      },
      {
        title: "Space Curves (Frenet-Serret)",
        description:
          "Arc length parameterization, TNB moving trihedron, curvature, torsion, and osculating geometry.",
        path: "/space-curves/1",
        meta: "2 parts · 20 MCQs",
        icon: "🌀",
        logo: mathLogo(
          String.raw`\mathbf{T}, \mathbf{N}, \mathbf{B} \;\&\; \kappa, \tau`,
        ),
      },
      {
        title: "Vector-Valued Functions & Motion",
        description:
          "Kinematics in ℝ³, velocity, speed, tangential/normal acceleration components, and central orbital forces.",
        path: "/vector-motion/1",
        meta: "2 parts · 20 MCQs",
        icon: "🚀",
        logo: mathLogo(
          String.raw`\mathbf{r}'(t),\; a_T\mathbf{T} + a_N\mathbf{N}`,
        ),
      },
      {
        title: "Parametric Surfaces",
        description:
          "Surface coordinate grids, tangent planes, normal fields, differential surface area, and ruled minimal manifolds.",
        path: "/parametric-surfaces/1",
        meta: "2 parts · 20 MCQs",
        icon: "🌐",
        logo: mathLogo(String.raw`\mathbf{r}_u \times \mathbf{r}_v \;\&\; dS`),
      },
      {
        title: "Polar Coordinate Calculus",
        description:
          "Polar tangents, area bounded by cardioids and rose petals, polar arc length, and curvature.",
        path: "/polar-calculus/1",
        meta: "2 parts · 20 MCQs",
        icon: "🎯",
        logo: mathLogo(
          String.raw`r = f(\theta) \;\&\; \frac{1}{2}\int r^2\,d\theta`,
        ),
      },
      {
        title: "Solids of Revolution",
        description:
          "Disk, washer, and cylindrical shells methods, rotations about arbitrary axes, and Pappus's Centroid Theorem.",
        path: "/solids-revolution/1",
        meta: "2 parts · 20 MCQs",
        icon: "🏺",
        logo: mathLogo(String.raw`\pi\int R^2\,dx \;\&\; 2\pi\int r\,h\,dx`),
      },
      {
        title: "Volume by Cross-Sections",
        description:
          "Non-revolution volume slicing with square, triangular, and semicircular profiles, wedges, and bicylinders.",
        path: "/volume-cross-sections/1",
        meta: "2 parts · 20 MCQs",
        icon: "📦",
        logo: mathLogo(String.raw`V = \int A(x)\,dx`),
      },
      {
        title: "Numerical Methods",
        description:
          "Newton-Raphson quadratic root convergence, Trapezoidal Rule, Simpson's 1/3 Rule, and Romberg extrapolation.",
        path: "/numerical-methods/1",
        meta: "2 parts · 20 MCQs",
        icon: "🧮",
        logo: mathLogo(String.raw`x_{n+1} = x_n - \frac{f}{f'} \;\&\; S_n`),
      },
      {
        title: "Improper Integrals — Advanced Tests",
        description:
          "Infinite horizons, singular asymptotes, Direct/Limit comparison, Cauchy Principal Value, and Gamma/Beta functions.",
        path: "/improper-integrals-advanced/1",
        meta: "2 parts · 20 MCQs",
        icon: "♾️",
        logo: mathLogo(
          String.raw`\mathrm{P.V.}\int \;\&\; \Gamma(z),\; B(p,q)`,
        ),
      },
      {
        title: "Complex Numbers & De Moivre",
        description:
          "Polar Euler representation, De Moivre's theorem, n-th roots of unity, and multiple-angle trigonometric expansions.",
        path: "/complex-numbers/1",
        meta: "2 parts · 20 MCQs",
        icon: "ℂ",
        logo: mathLogo(
          String.raw`e^{i\theta} \;\&\; (\cos\theta + i\sin\theta)^n`,
        ),
      },
      {
        title: "Hyperbolic Functions & Inverses",
        description:
          "Hyperbolic identities, logarithmic inverse expressions, standard radical integrals, and catenary cable geometry.",
        path: "/hyperbolic-functions/1",
        meta: "2 parts · 20 MCQs",
        icon: "〰️",
        logo: mathLogo(String.raw`\cosh^2 x - \sinh^2 x = 1`),
      },
      {
        title: "Laplace Transforms",
        description:
          "Exponential kernel mappings, frequency/time shifting, derivative transforms, convolutions, and ODE solutions.",
        path: "/laplace-transforms/1",
        meta: "2 parts · 20 MCQs",
        icon: "ℒ",
        logo: mathLogo(String.raw`\mathcal{L}\{f(t)\} = \int e^{-st} f(t)\,dt`),
      },
      {
        title: "Fourier Series",
        description:
          "Periodic function decomposition, Euler-Fourier coefficients, half-range cosine/sine series, and Parseval's identity.",
        path: "/fourier-series/1",
        meta: "2 parts · 20 MCQs",
        icon: "📈",
        logo: mathLogo(
          String.raw`\frac{1}{2}a_0 + \sum (a_n\cos nx + b_n\sin nx)`,
        ),
      },
      {
        title: "Analytic & 3D Vector Lab",
        description:
          "Interactive laboratory for 2D conic rotation of axes, polar conics, scalar triple product, and skew line distance.",
        path: "/analytic-vector-lab",
        meta: "Interactive Suite",
        icon: "📐",
        logo: mathLogo(
          String.raw`B^2 - 4AC \;\&\; \mathbf{u}\cdot(\mathbf{v}\times\mathbf{w})`,
        ),
      },

      {
        title: "Continuity Finder",
        description:
          "Interactive tool for checking continuity conditions at a point or over an interval.",
        path: "/test",
        meta: "Interactive tool",
        icon: "lim",
        logo: mathLogo(String.raw`\lim\limits_{x \to c} f(x) = f(c)`),
      },
      {
        title: "Taylor Series",
        description:
          "Local approximations, Maclaurin catalogs, convergence and error — certificate depth.",
        path: "/taylor-series/1",
        meta: "2 parts · 6+ examples each",
        icon: "Σ",
        logo: mathLogo(String.raw`\sum \frac{f^{(n)}(a)}{n!}(x-a)^n`),
      },
      {
        title: "TaylorX (Derivative Visualizer)",
        description:
          "Interactive derivative visualizer that pairs with the Taylor Series guide.",
        path: "/taylorx",
        meta: "Interactive tool",
        icon: "Σ",
        logo: mathLogo(String.raw`T_n(x) \approx f(x)`),
      },
      {
        title: "Certification Quiz",
        description:
          "90 MCQs covering the full course. Score 80%+ to unlock your certificate.",
        path: "/quiz/calculus-analytical-geometry",
        meta: "90 questions · 80% to pass",
        icon: "✓",
        logo: mathLogo(String.raw`\checkmark\;\text{90 MCQs} \cdot 80\%`),
      },
    ],
  },
  {
    id: "multivariable-calculus",
    title: "Multivariable Calculus",
    logo: (
      <span className="math-logo-card">
        <span className="math-sym-big">∭</span> curl{" "}
        <span className="math-bold">F</span>
      </span>
    ),
    description:
      "Partial derivatives, vector calculus, multiple integrals, Lagrange multipliers, divergence & curl, and Stokes.",
    path: "/courses/multivariable-calculus",
    meta: "Full study path · Guides + tools",
    icon: "∇",
    color: "teal",
    heroImage: "/images/courses/multivariable-calc-hero.svg",
    heroImageAlt: "Multivariable Calculus 3D Surface and Gradient Field",
    overview: {
      longDescription: [
        "Multivariable Calculus extends single-variable analysis to multidimensional coordinate spaces and physical vector field theory. The curriculum begins with functions of several variables, level surfaces, and partial derivatives, formalizing tangent planes, total differentials, gradient vectors, and directional derivatives. We analyze unconstrained multivariable optimization alongside Lagrange Multipliers for constrained systems. The course develops multiple integration across Cartesian, polar, cylindrical, and spherical coordinates using Fubini's Theorem and Jacobian transformations. Finally, vector calculus formalizes line and surface integrals, conservative work fields, and the cornerstone integral theorems—Green's, Gauss's Divergence, and Stokes' Theorems—connecting differential field divergence and curl to macro-scale boundary fluxes across science.",
      ],
      highlights: [
        "Partial derivatives, gradients & tangent planes",
        "Double & triple integrals in multiple coordinate systems",
        "Lagrange multipliers & constrained optimization",
        "Line integrals, conservative fields & Green's theorem",
        "Divergence, curl & the Divergence Theorem",
        "Stokes' Theorem & surface integrals",
        "Extreme-value finder, volume calculator & vector-field visualizer",
      ],
      prerequisites:
        "Single-variable calculus (limits, derivatives, integrals) and basic linear algebra.",
    },
    modules: [
      {
        title: "Overview",
        description:
          "What you'll learn, the order to learn it in, and how the course and certificate are structured.",
        path: "/multivariable-calculus/overview",
        meta: "Start here",
        icon: "★",
        logo: mathLogo(String.raw`\nabla \;\&\; \iiint \;\; \text{Roadmap}`),
        start: true,
      },
      {
        title: "Partial Derivatives",
        description:
          "Limits, gradients, tangent planes, differentials, and optimization.",
        path: "/partial-derivatives/1",
        meta: "2 parts · MCQ practice",
        icon: "∂",
        logo: mathLogo(
          String.raw`\frac{\partial f}{\partial x},\; \frac{\partial f}{\partial y}`,
        ),
      },
      {
        title: "3D Surface Explorer",
        description:
          "Rotate, animate and probe surfaces z = f(x, y) with tangent planes.",
        path: "/surface-explorer",
        meta: "Interactive tool",
        icon: "⛰",
        logo: mathLogo("z = f(x, y)"),
      },
      {
        title: "Extreme Value Finder",
        description: "Find maxima and minima using the second derivative test.",
        path: "/extreme",
        meta: "Interactive tool",
        icon: "⬆",
        logo: mathLogo("D = f_{xx}f_{yy} - f_{xy}^2"),
      },
      {
        title: "Vector Calculus",
        description:
          "Line integrals, conservative fields, Green's theorem, and surfaces.",
        path: "/vector-calculus/1",
        meta: "2 parts · Worked examples",
        icon: "∇",
        logo: mathLogo(String.raw`\oint_C \mathbf{F}\cdot d\mathbf{r}`),
      },
      {
        title: "Vector Field Visualizer",
        description: "Plot and explore vector fields interactively.",
        path: "/vectorfield",
        meta: "Interactive tool",
        icon: "∇",
        logo: mathLogo(String.raw`\mathbf{F}(x,y) = \langle P, Q \rangle`),
      },
      {
        title: "Multiple Integrals",
        description:
          "Double and triple integrals, Fubini, polar and cylindrical coordinates.",
        path: "/multiple-integrals/1",
        meta: "2 parts · Worked integrals",
        icon: "∬",
        logo: mathLogo(String.raw`\iint_R f(x,y)\,dA`),
      },
      {
        title: "Volume Calculator",
        description: "Evaluate double integrals with full step-by-step output.",
        path: "/volumecalculator",
        meta: "Interactive tool",
        icon: "∬",
        logo: mathLogo(String.raw`V = \iint (z_2 - z_1)\,dA`),
      },
      {
        title: "Lagrange Multipliers",
        description: "Constrained optimization via gradient alignment.",
        path: "/lagrange-multipliers/1",
        meta: "2 parts · Applications",
        icon: "λ",
        logo: mathLogo(String.raw`\nabla f = \lambda\nabla g`),
      },
      {
        title: "Divergence & Curl",
        description:
          "Vector field operators, identities, divergence theorem, and Stokes connections.",
        path: "/divergence-curl/1",
        meta: "2 parts · Theorems",
        icon: "∇·",
        logo: mathLogo(
          String.raw`\operatorname{div}\mathbf{F},\; \operatorname{curl}\mathbf{F}`,
        ),
      },
      {
        title: "Stokes' Theorem",
        description: "Circulation, oriented surfaces, and Stokes applications.",
        path: "/stokes-theorem/1",
        meta: "2 parts · Theorem applications",
        icon: "∮",
        logo: mathLogo(
          String.raw`\oint_{\partial S} \mathbf{F}\cdot d\mathbf{r} = \iint_S (\nabla\times\mathbf{F})\cdot d\mathbf{S}`,
        ),
      },
      {
        title: "3D Analytical Geometry & Quadric Surfaces",
        description:
          "Direction cosines, planes and lines in 3D, skew lines, and the six standard quadric surfaces.",
        path: "/3d-geometry/1",
        meta: "2 parts · MCQ practice",
        icon: "⬡",
        logo: mathLogo(
          String.raw`\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{z^2}{c^2} = 1`,
        ),
      },
      {
        title: "Space Curves & Advanced Multivariable Mappings",
        description:
          "Vector-valued functions, velocity and acceleration, Frenet–Serret frames, curvature, torsion, Jacobians, surface and flux integrals, and global extrema.",
        path: "/space-curves/1",
        meta: "2 parts · 140 MCQ practice",
        icon: "∿",
        logo: mathLogo(String.raw`\nabla f \cdot d\mathbf{S}`),
      },
      {
        title: "Coordinate Transformations & Surfaces",
        description:
          "Jacobians & Change of Variables, Curvilinear Coordinate Systems, Parametrized Surface Area, and Flux Integrals over General Parameterized Surfaces.",
        path: "/jacobians-change-of-variables/1",
        meta: "4 topics · 20-question checkpoint per topic",
        icon: "J",
        logo: mathLogo(String.raw`\frac{\partial(x,y)}{\partial(u,v)}`),
      },
      {
        title: "Constrained & Unconstrained Optimization",
        description:
          "The Hessian Matrix & Optimization, Inequality Constraints (KKT Conditions), Global Extrema on Bounded Domains, and Gradient Descent & Numerical Optimization.",
        path: "/constrained-unconstrained-optimization/1",
        meta: "4 topics · 20-question checkpoint per topic",
        icon: "H",
        logo: mathLogo(String.raw`H = \nabla^2 f`),
      },
      {
        title: "Vector Fields & Approximation Theory",
        description:
          "Vector Potentials, Multivariable Taylor Series & Second-Order Approximation, Implicit Function Theorem, and Directional Derivatives in n Dimensions.",
        path: "/vector-fields-approximation/1",
        meta: "4 topics · 20-question checkpoint per topic",
        icon: "∇",
        logo: mathLogo(String.raw`\nabla\times\mathbf{A} = \mathbf{F}`),
      },

      {
        title: "Certification Quiz",
        description:
          "30 MCQs covering the full course. Score 80%+ to unlock your certificate.",
        path: "/quiz/multivariable-calculus",
        meta: "30 questions · 80% to pass",
        icon: "✓",
        logo: mathLogo(String.raw`\checkmark\;\text{30 MCQs} \cdot 80\%`),
      },
    ],
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    logo: (
      <span className="math-logo-card">
        <span className="math-sym-big">A</span>x = b
      </span>
    ),
    description:
      "Vectors, matrices, linear systems, eigenvalues, and the algebraic toolkit used across calculus and data science.",
    path: "/courses/linear-algebra",
    meta: "11 modules · Guides + tools",
    icon: "A",
    color: "blue",
    heroImage: "/images/courses/linear-algebra-hero.svg",
    heroImageAlt: "Linear Algebra Vectors and Matrix Transformation Visual",
    overview: {
      longDescription: [
        "Linear Algebra provides the universal mathematical framework for modern computation, machine learning, data science, and quantum physics. We establish vector space algebra in n-dimensional Euclidean space, investigating linear combinations, span, basis sets, dimensions, and fundamental subspaces. Matrix operations, Gaussian elimination, row reduction, rank-nullity invariants, and determinant volumes characterize linear system solvability and matrix invertibility. The curriculum explores linear transformations, spectral eigenvalue decompositions, and the Spectral Theorem for symmetric operators. Advanced modules formalize inner product orthogonality, Gram-Schmidt QR factorizations, and least-squares normal equations, culminating in the Singular Value Decomposition (SVD) and Principal Component Analysis for optimal high-dimensional data reduction and modeling.",
      ],
      highlights: [
        "Vectors, span, basis & linear independence",
        "Matrix operations, inverses & determinants",
        "Row reduction, rank & solution-set geometry",
        "Eigenvalues, eigenvectors & diagonalization",
        "Linear transformations, kernel & image",
        "Gram–Schmidt, QR & least-squares fitting",
        "SVD, low-rank approximation & the pseudoinverse",
        "Interactive Matrix Sandbox",
      ],
      prerequisites:
        "Comfortable with algebra and systems of equations; no prior linear algebra needed.",
    },
    modules: [
      {
        title: "Overview",
        description:
          "What you'll learn, the order to learn it in, and how the course and certificate are structured.",
        path: "/linear-algebra/overview",
        meta: "Start here",
        icon: "★",
        logo: mathLogo(String.raw`\mathbb{R}^n \;\; \text{Toolkit}`),
        start: true,
      },
      {
        title: "Linear Equations",
        description:
          "General form in 2, 3, and n variables, graphing with intercepts, systems, and solving techniques.",
        path: "/linear-algebra/linear-equations/1",
        meta: "2 parts · MCQ practice",
        icon: "=",
        logo: mathLogo(String.raw`a_1x_1 + \cdots + a_nx_n = b`),
      },
      {
        title: "Vectors & Vector Spaces",
        description: "Vectors, span, basis, and linear independence.",
        path: "/linear-algebra/vectors/1",
        meta: "2 parts · MCQ practice",
        icon: "v",
        logo: mathLogo(
          String.raw`\operatorname{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}`,
        ),
      },
      {
        title: "Matrices & Determinants",
        description: "Matrix operations, inverses, and determinants.",
        path: "/linear-algebra/matrices/1",
        meta: "2 parts · MCQ practice",
        icon: "M",
        logo: mathLogo(String.raw`\det(A) \neq 0`),
      },
      {
        title: "Systems of Linear Equations",
        description: "Row reduction, rank, and consistency of linear systems.",
        path: "/linear-algebra/systems/1",
        meta: "2 parts · MCQ practice",
        icon: "Σ",
        logo: mathLogo(String.raw`[A \mid \mathbf{b}] \to [I \mid \mathbf{x}]`),
      },
      {
        title: "Eigenvalues & Eigenvectors",
        description:
          "Characteristic polynomials, eigenspaces, algebraic vs geometric multiplicity, diagonalization, matrix powers, and the Spectral Theorem.",
        path: "/linear-algebra/eigen/1",
        meta: "2 parts · MCQ practice",
        icon: "λ",
        logo: mathLogo(String.raw`A\mathbf{v} = \lambda\mathbf{v}`),
      },
      {
        title: "Linear Transformations",
        description:
          "Standard matrices, kernel & image, composition, and invertibility.",
        path: "/linear-algebra/transformations/1",
        meta: "2 parts · MCQ practice",
        icon: "T",
        logo: mathLogo(
          String.raw`T(\mathbf{u} + \mathbf{v}) = T\mathbf{u} + T\mathbf{v}`,
        ),
      },
      {
        title: "Orthogonality & Least Squares",
        description:
          "Inner products, norms, orthogonal matrices, Gram–Schmidt, QR, projections, and least-squares solutions.",
        path: "/linear-algebra/orthogonality/1",
        meta: "2 parts · MCQ practice",
        icon: "⊥",
        logo: mathLogo("Q^T Q = I"),
      },
      {
        title: "Singular Value Decomposition",
        description:
          "Full and compact SVD, singular values, fundamental subspaces, conditioning, low-rank approximation, and the pseudoinverse.",
        path: "/linear-algebra/svd/1",
        meta: "2 parts · MCQ practice",
        icon: "Σ",
        logo: mathLogo(String.raw`A = U\Sigma V^T`),
      },
      ...LA_MODULES.map((module) => ({
        title: module.title,
        description: module.description,
        path: getLaModulePath(module),
        meta: "2 parts · 4 topics · 80 checkpoint MCQs",
        icon: module.logo,
        logo: mathLogo(module.logoLatex),
      })),
      {
        title: "Practice Arena",
        description:
          "MCQ drills for Linear Algebra topics with leaderboard submit.",
        path: "/practice",
        meta: "Interactive · Difficulty tiers",
        icon: "✎",
        logo: (
          <span className="math-logo">
            ✎ <InlineMath latex={String.raw`\text{Drill Arena}`} />
          </span>
        ),
      },
      {
        title: "Certification Quiz",
        description:
          "66 MCQs covering the full course. Score 80%+ to unlock your certificate.",
        path: "/quiz/linear-algebra",
        meta: "66 questions · 80% to pass",
        icon: "✓",
        logo: mathLogo(String.raw`\checkmark\;\text{66 MCQs} \cdot 80\%`),
      },
    ],
  },
  {
    id: "probability-statistics",
    title: "Probability and Statistics",
    logo: (
      <span className="math-logo-card">
        <span className="math-sym-big">P</span>(A|B)
      </span>
    ),
    description:
      "Probability foundations, Bayes theorem, random variables, distributions, descriptive statistics, hypothesis testing, and regression analysis.",
    path: "/courses/probability-statistics",
    meta: "6 modules · Guides + tools",
    icon: "P",
    color: "purple",
    heroImage: "/images/courses/prob-stats-hero.svg",
    heroImageAlt:
      "Probability and Statistics Gaussian Bell Curve and Regression Visual",
    overview: {
      longDescription: [
        "Probability and Statistics bridges mathematical theory and real-world empirical inference. Master sample spaces, probability axioms, conditional probability, and Bayes' Theorem. Explore discrete and continuous random variables, probability mass and density functions, expected values, variance, and fundamental distributions (Binomial, Poisson, Normal, Exponential). Learn descriptive statistics, central limit theorem, hypothesis testing (z-tests, t-tests, p-values), and linear regression with residual analysis.",
      ],
      highlights: [
        "Sample spaces, axioms & conditional probability",
        "Bayes' Theorem & interactive Bayes screening lab",
        "Discrete & continuous random variables (PMF, PDF, CDF)",
        "Mean, variance, z-scores & central limit theorem",
        "Hypothesis testing, significance levels & p-values",
        "Linear regression, correlation coefficient & residuals",
        "Certificate quiz — 30 MCQs, 80% to pass",
      ],
      prerequisites: "Basic algebra and single-variable calculus.",
    },
    modules: [
      {
        title: "Overview",
        description:
          "What you'll learn, the order to learn it in, and how the course and certificate are structured.",
        path: "/probability-statistics/overview",
        meta: "Start here",
        icon: "★",
        logo: mathLogo(
          String.raw`P(A \mid B) \;\&\; N(\mu, \sigma^2) \;\; \text{Roadmap}`,
        ),
        start: true,
      },
      {
        title: "Probability Basics",
        description:
          "Sample spaces, axioms, conditional probability, and Bayes' Theorem.",
        path: "/probability-statistics/probability-basics/1",
        meta: "2 parts · Worked examples",
        icon: "P",
        logo: mathLogo(String.raw`P(A \mid B) = \frac{P(A \cap B)}{P(B)}`),
      },
      {
        title: "Bayes Lab",
        description:
          "Interactive Bayesian screening and posterior probability calculator.",
        path: "/probability-statistics/bayes-lab",
        meta: "Interactive tool",
        icon: "⚖",
        logo: mathLogo(
          String.raw`P(B \mid A) = \frac{P(A \mid B)\,P(B)}{P(A)}`,
        ),
      },
      {
        title: "Random Variables & Distributions",
        description:
          "Discrete and continuous random variables, PMFs, PDFs, expectation, and variance.",
        path: "/probability-statistics/random-variables/1",
        meta: "2 parts · Worked examples",
        icon: "X",
        logo: mathLogo(String.raw`E[X] = \mu,\; \mathrm{Var}(X) = \sigma^2`),
      },
      {
        title: "Descriptive Statistics",
        description:
          "Mean, median, mode, variance, standard deviation, and data visualization.",
        path: "/probability-statistics/descriptive-statistics/1",
        meta: "2 parts · Worked examples",
        icon: "σ",
        logo: mathLogo(
          String.raw`\bar{x},\; s^2 = \frac{1}{n-1}\sum (x - \bar{x})^2`,
        ),
      },
      {
        title: "Hypothesis Testing",
        description:
          "Null and alternative hypotheses, z-tests, t-tests, and p-value inference.",
        path: "/probability-statistics/hypothesis-testing/1",
        meta: "2 parts · Worked examples",
        icon: "H",
        logo: mathLogo(String.raw`z = \frac{\bar{x} - \mu_0}{\sigma/\sqrt{n}}`),
      },
      {
        title: "Regression & Correlation",
        description:
          "Linear association, least squares regression, and residual analysis.",
        path: "/probability-statistics/regression-correlation/1",
        meta: "2 parts · MCQ practice",
        icon: "ρ",
        logo: mathLogo(String.raw`\hat{y} = \beta_0 + \beta_1 x`),
      },
      {
        title: "Practice Arena",
        description:
          "MCQ drills for Probability & Statistics with leaderboard submit.",
        path: "/practice",
        meta: "Interactive · Difficulty tiers",
        icon: "✎",
        logo: (
          <span className="math-logo">
            ✎ <InlineMath latex={String.raw`\text{Drill Arena}`} />
          </span>
        ),
      },
      {
        title: "Certification Quiz",
        description:
          "30 MCQs covering the full course. Score 80%+ to unlock your certificate.",
        path: "/quiz/probability-statistics",
        meta: "30 questions · 80% to pass",
        icon: "✓",
        logo: mathLogo(String.raw`\checkmark\;\text{30 MCQs} \cdot 80\%`),
      },
    ],
  },
];

export function getCourseById(id) {
  return COURSES.find((c) => c.id === id) || null;
}
