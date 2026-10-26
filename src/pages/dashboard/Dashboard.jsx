// The profile page lives in pages/profile/Profile.jsx. This file keeps the
// CURRICULUM list (section ids and labels per module) used across the app.

export const CURRICULUM = [
  // ── Calculus and Analytical Geometry ──────────────────────────────────
  {
    id: "limits",
    title: "Limits & Continuity",
    icon: "lim",
    color: "purple",
    subject: "Calculus and Analytical Geometry",
    courseId: "calculus-analytical-geometry",
    parts: [
      {
        id: "limits-1",
        label: "Part 1 — Limits & Path Tests",
        path: "/limits-continuity/1",
      },
      {
        id: "limits-2",
        label: "Part 2 — Continuity & Epsilon-Delta",
        path: "/limits-continuity/2",
      },
    ],
  },
  {
    id: "diff",
    title: "Differentiation",
    icon: "d/dx",
    color: "gold",
    subject: "Calculus and Analytical Geometry",
    courseId: "calculus-analytical-geometry",
    parts: [
      {
        id: "calc-diff-1",
        label: "Part 1 — Rules, Rates & Extrema",
        path: "/differentiation/1",
      },
      {
        id: "calc-diff-2",
        label: "Part 2 — MVT & L'Hôpital",
        path: "/differentiation/2",
      },
    ],
  },
  {
    id: "int",
    title: "Integration",
    icon: "∫",
    color: "gold",
    subject: "Calculus and Analytical Geometry",
    courseId: "calculus-analytical-geometry",
    parts: [
      {
        id: "calc-int-1",
        label: "Part 1 — FTC & Accumulation",
        path: "/integration/1",
      },
      {
        id: "calc-int-2",
        label: "Part 2 — Techniques & Improper Integrals",
        path: "/integration/2",
      },
    ],
  },
  {
    id: "sequences-series",
    title: "Sequences & Infinite Series",
    icon: "Σ",
    color: "gold",
    subject: "Calculus and Analytical Geometry",
    courseId: "calculus-analytical-geometry",
    parts: [
      {
        id: "calc-series-1",
        label: "Part 1 — Convergence Tests",
        path: "/sequences-series/1",
      },
      {
        id: "calc-series-2",
        label: "Part 2 — Power Series & Radius",
        path: "/sequences-series/2",
      },
    ],
  },
  {
    id: "conic-sections",
    title: "Conic Sections",
    icon: "◯",
    color: "gold",
    subject: "Calculus and Analytical Geometry",
    courseId: "calculus-analytical-geometry",
    parts: [
      {
        id: "calc-conics-1",
        label: "Part 1 — Parabolas & Ellipses",
        path: "/conic-sections/1",
      },
      {
        id: "calc-conics-2",
        label: "Part 2 — Hyperbolas & Analytic Geometry",
        path: "/conic-sections/2",
      },
    ],
  },
  {
    id: "taylor",
    title: "Taylor Series",
    icon: "Σ",
    color: "gold",
    subject: "Calculus and Analytical Geometry",
    courseId: "calculus-analytical-geometry",
    parts: [
      {
        id: "taylor-1",
        label: "Part 1 — Foundations & Maclaurin",
        path: "/taylor-series/1",
      },
      {
        id: "taylor-2",
        label: "Part 2 — Convergence & Error Bounds",
        path: "/taylor-series/2",
      },
    ],
  },

  // ── Multivariable Calculus ─────────────────────────────────────────────
  {
    id: "partial",
    title: "Partial Derivatives",
    icon: "∂",
    color: "teal",
    subject: "Multivariable Calculus",
    courseId: "multivariable-calculus",
    parts: [
      {
        id: "partial-1",
        label: "Part 1 — Functions, Limits & Tangent Planes",
        path: "/partial-derivatives/1",
      },
      {
        id: "partial-2",
        label: "Part 2 — Gradients, Chain Rule & Extrema",
        path: "/partial-derivatives/2",
      },
    ],
  },
  {
    id: "vector",
    title: "Vector Calculus",
    icon: "∇",
    color: "blue",
    subject: "Multivariable Calculus",
    courseId: "multivariable-calculus",
    parts: [
      {
        id: "vector-1",
        label: "Part 1 — Vector Fields & Line Integrals",
        path: "/vector-calculus/1",
      },
      {
        id: "vector-2",
        label: "Part 2 — Green's Theorem & Work Integrals",
        path: "/vector-calculus/2",
      },
    ],
  },
  {
    id: "integrals",
    title: "Multiple Integrals",
    icon: "∬",
    color: "teal",
    subject: "Multivariable Calculus",
    courseId: "multivariable-calculus",
    parts: [
      {
        id: "integrals-1",
        label: "Part 1 — Double Integrals & Fubini's Theorem",
        path: "/multiple-integrals/1",
      },
      {
        id: "integrals-2",
        label: "Part 2 — Triple Integrals & Cylindrical/Spherical",
        path: "/multiple-integrals/2",
      },
    ],
  },
  {
    id: "lagrange",
    title: "Lagrange Multipliers",
    icon: "λ",
    color: "purple",
    subject: "Multivariable Calculus",
    courseId: "multivariable-calculus",
    parts: [
      {
        id: "lagrange-1",
        label: "Part 1 — Geometric Alignment & Single Constraints",
        path: "/lagrange-multipliers/1",
      },
      {
        id: "lagrange-2",
        label: "Part 2 — Multi-Constraints & Global Optima",
        path: "/lagrange-multipliers/2",
      },
    ],
  },
  {
    id: "divergence",
    title: "Divergence & Curl",
    icon: "∇·",
    color: "blue",
    subject: "Multivariable Calculus",
    courseId: "multivariable-calculus",
    parts: [
      {
        id: "divergence-1",
        label: "Part 1 — Divergence & Curl Operators",
        path: "/divergence-curl/1",
      },
      {
        id: "divergence-2",
        label: "Part 2 — Gauss Divergence Theorem",
        path: "/divergence-curl/2",
      },
    ],
  },
  {
    id: "stokes",
    title: "Stokes' Theorem",
    icon: "∮",
    color: "teal",
    subject: "Multivariable Calculus",
    courseId: "multivariable-calculus",
    parts: [
      {
        id: "stokes-1",
        label: "Part 1 — Boundary Curves & Circulation",
        path: "/stokes-theorem/1",
      },
      {
        id: "stokes-2",
        label: "Part 2 — Surface Integrals & Stokes Applications",
        path: "/stokes-theorem/2",
      },
    ],
  },
  // ── Additional Multivariable Calculus Modules ────────────────────────
  {
    id: "geo3d",
    title: "3D Analytical Geometry & Quadric Surfaces",
    icon: "⬡",
    color: "teal",
    subject: "Multivariable Calculus",
    courseId: "multivariable-calculus",
    parts: [
      {
        id: "geo3d-1",
        label: "Part 1 — Direction Cosines, Planes & Distances",
        path: "/3d-geometry/1",
      },
      {
        id: "geo3d-2",
        label: "Part 2 — Lines, Skew Lines & Quadric Surfaces",
        path: "/3d-geometry/2",
      },
    ],
  },
  {
    id: "space-curves",
    title: "Space Curves & Advanced Multivariable Mappings",
    icon: "∿",
    color: "blue",
    subject: "Multivariable Calculus",
    courseId: "multivariable-calculus",
    parts: [
      {
        id: "space-curves-1",
        label: "Part 1 — Vector-Valued Curves, Velocity & Acceleration",
        path: "/space-curves/1",
      },
      {
        id: "space-curves-2",
        label: "Part 2 — Curvature, Torsion & Advanced Mappings",
        path: "/space-curves/2",
      },
    ],
  },
  {
    id: "coordinate-transformations",
    title: "Coordinate Transformations & Surfaces",
    icon: "J",
    color: "teal",
    subject: "Multivariable Calculus",
    courseId: "multivariable-calculus",
    parts: [
      {
        id: "coordinate-transformations-1",
        label: "Part 1 — Jacobians & Curvilinear Coordinates",
        path: "/coordinate-transformations/1",
      },
      {
        id: "coordinate-transformations-2",
        label: "Part 2 — Surface Area & Flux Integrals",
        path: "/coordinate-transformations/2",
      },
    ],
  },
  {
    id: "optimization",
    title: "Constrained & Unconstrained Optimization",
    icon: "H",
    color: "purple",
    subject: "Multivariable Calculus",
    courseId: "multivariable-calculus",
    parts: [
      {
        id: "optimization-1",
        label: "Part 1 — Hessian Matrix & KKT Conditions",
        path: "/constrained-unconstrained-optimization/1",
      },
      {
        id: "optimization-2",
        label: "Part 2 — Global Extrema & Gradient Descent",
        path: "/constrained-unconstrained-optimization/2",
      },
    ],
  },
  {
    id: "vector-fields-approximation",
    title: "Vector Fields & Approximation Theory",
    icon: "∇",
    color: "blue",
    subject: "Multivariable Calculus",
    courseId: "multivariable-calculus",
    parts: [
      {
        id: "vector-fields-approximation-1",
        label: "Part 1 — Vector Potentials & Taylor Approximation",
        path: "/vector-fields-approximation/1",
      },
      {
        id: "vector-fields-approximation-2",
        label: "Part 2 — Implicit Function Theorem & Directional Derivatives",
        path: "/vector-fields-approximation/2",
      },
    ],
  },

  // ── Linear Algebra ──────────────────────────────────────────────────────
  {
    id: "linear-equations",
    title: "Linear Equations",
    icon: "=",
    color: "blue",
    subject: "Linear Algebra",
    courseId: "linear-algebra",
    parts: [
      {
        id: "la-linear-equations-1",
        label: "Part 1 — Equations & Intercepts",
        path: "/linear-algebra/linear-equations/1",
      },
      {
        id: "la-linear-equations-2",
        label: "Part 2 — Systems & Geometry",
        path: "/linear-algebra/linear-equations/2",
      },
    ],
  },
  {
    id: "vectors",
    title: "Vectors & Vector Spaces",
    icon: "v",
    color: "blue",
    subject: "Linear Algebra",
    courseId: "linear-algebra",
    parts: [
      {
        id: "la-vectors-1",
        label: "Part 1 — Vectors, Dot Product & Norms",
        path: "/linear-algebra/vectors/1",
      },
      {
        id: "la-vectors-2",
        label: "Part 2 — Span, Basis & Independence",
        path: "/linear-algebra/vectors/2",
      },
    ],
  },
  {
    id: "matrices",
    title: "Matrices & Determinants",
    icon: "M",
    color: "blue",
    subject: "Linear Algebra",
    courseId: "linear-algebra",
    parts: [
      {
        id: "la-matrices-1",
        label: "Part 1 — Matrix Arithmetic & Multiplication",
        path: "/linear-algebra/matrices/1",
      },
      {
        id: "la-matrices-2",
        label: "Part 2 — Inverses & Determinants",
        path: "/linear-algebra/matrices/2",
      },
    ],
  },
  {
    id: "systems",
    title: "Systems of Linear Equations",
    icon: "Σ",
    color: "blue",
    subject: "Linear Algebra",
    courseId: "linear-algebra",
    parts: [
      {
        id: "la-systems-1",
        label: "Part 1 — Gaussian Row Reduction",
        path: "/linear-algebra/systems/1",
      },
      {
        id: "la-systems-2",
        label: "Part 2 — Rank & Consistency",
        path: "/linear-algebra/systems/2",
      },
    ],
  },
  {
    id: "eigen",
    title: "Eigenvalues & Eigenvectors",
    icon: "λ",
    color: "blue",
    subject: "Linear Algebra",
    courseId: "linear-algebra",
    parts: [
      {
        id: "la-eigen-1",
        label: "Part 1 — Characteristic Polynomials",
        path: "/linear-algebra/eigen/1",
      },
      {
        id: "la-eigen-2",
        label: "Part 2 — Eigenspaces & Diagonalization",
        path: "/linear-algebra/eigen/2",
      },
    ],
  },
  {
    id: "transformations",
    title: "Linear Transformations",
    icon: "T",
    color: "blue",
    subject: "Linear Algebra",
    courseId: "linear-algebra",
    parts: [
      {
        id: "la-transform-1",
        label: "Part 1 — Standard Matrices, Kernel & Image",
        path: "/linear-algebra/transformations/1",
      },
      {
        id: "la-transform-2",
        label: "Part 2 — Composition & Invertibility",
        path: "/linear-algebra/transformations/2",
      },
    ],
  },
  {
    id: "orthogonality",
    title: "Orthogonality & Least Squares",
    icon: "⊥",
    color: "blue",
    subject: "Linear Algebra",
    courseId: "linear-algebra",
    parts: [
      {
        id: "la-ortho-1",
        label: "Part 1 — Orthogonal Subspaces & Gram–Schmidt",
        path: "/linear-algebra/orthogonality/1",
      },
      {
        id: "la-ortho-2",
        label: "Part 2 — QR Factorization & Least Squares",
        path: "/linear-algebra/orthogonality/2",
      },
    ],
  },
  {
    id: "svd",
    title: "Singular Value Decomposition",
    icon: "Σ",
    color: "blue",
    subject: "Linear Algebra",
    courseId: "linear-algebra",
    parts: [
      {
        id: "la-svd-1",
        label: "Part 1 — SVD Geometry & Singular Values",
        path: "/linear-algebra/svd/1",
      },
      {
        id: "la-svd-2",
        label: "Part 2 — Low-Rank Approximation & Pseudoinverse",
        path: "/linear-algebra/svd/2",
      },
    ],
  },

  // ── Probability & Statistics ───────────────────────────────────────────
  {
    id: "prob",
    title: "Probability Basics",
    icon: "P",
    color: "purple",
    subject: "Probability and Statistics",
    courseId: "probability-statistics",
    parts: [
      {
        id: "ps-basics-1",
        label: "Part 1 — Sample Spaces & Axioms",
        path: "/probability-statistics/probability-basics/1",
      },
      {
        id: "ps-basics-2",
        label: "Part 2 — Conditionals & Bayes' Rule",
        path: "/probability-statistics/probability-basics/2",
      },
    ],
  },
  {
    id: "rv",
    title: "Random Variables & Distributions",
    icon: "X",
    color: "purple",
    subject: "Probability and Statistics",
    courseId: "probability-statistics",
    parts: [
      {
        id: "ps-rv-1",
        label: "Part 1 — Discrete RVs & Named PMFs",
        path: "/probability-statistics/random-variables/1",
      },
      {
        id: "ps-rv-2",
        label: "Part 2 — Continuous RVs & Normal Density",
        path: "/probability-statistics/random-variables/2",
      },
    ],
  },
  {
    id: "desc",
    title: "Descriptive Statistics",
    icon: "μ",
    color: "purple",
    subject: "Probability and Statistics",
    courseId: "probability-statistics",
    parts: [
      {
        id: "ps-desc-1",
        label: "Part 1 — Mean, Median & Spread",
        path: "/probability-statistics/descriptive-statistics/1",
      },
      {
        id: "ps-desc-2",
        label: "Part 2 — Z-Scores & Data Visualization",
        path: "/probability-statistics/descriptive-statistics/2",
      },
    ],
  },
  {
    id: "hyp",
    title: "Hypothesis Testing",
    icon: "H",
    color: "purple",
    subject: "Probability and Statistics",
    courseId: "probability-statistics",
    parts: [
      {
        id: "ps-hyp-1",
        label: "Part 1 — Null Hypotheses, Z-tests & P-Values",
        path: "/probability-statistics/hypothesis-testing/1",
      },
      {
        id: "ps-hyp-2",
        label: "Part 2 — Type I/II Errors & Statistical Power",
        path: "/probability-statistics/hypothesis-testing/2",
      },
    ],
  },
  {
    id: "reg",
    title: "Regression & Correlation",
    icon: "ρ",
    color: "purple",
    subject: "Probability and Statistics",
    courseId: "probability-statistics",
    parts: [
      {
        id: "ps-reg-1",
        label: "Part 1 — Linear Association & Pearson r",
        path: "/probability-statistics/regression-correlation/1",
      },
      {
        id: "ps-reg-2",
        label: "Part 2 — OLS Least Squares & Residuals",
        path: "/probability-statistics/regression-correlation/2",
      },
    ],
  },
];

export { default } from "../profile/Profile";
