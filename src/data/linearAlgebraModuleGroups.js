export const LINEAR_ALGEBRA_MODULE_GROUPS = [
  {
    id: "module-a",
    title: "Matrix Decompositions & Factorizations",
    description:
      "LU, Cholesky, Jordan normal form, and vector/matrix norms with conditioning.",
    meta: "4 topics · 2 parts",
    icon: "A",
    logo: "A = LU",
    parts: [
      {
        id: "module-a-1",
        title: "Part 1",
        description: "LU Decomposition and Cholesky Decomposition",
        topics: [
          {
            id: "lu-decomposition",
            title: "LU Decomposition",
            description:
              "Elimination as a reusable factorization, pivoting, triangular solves, and verification.",
            path: "/linear-algebra/lu-decomposition/1",
          },
          {
            id: "cholesky-decomposition",
            title: "Cholesky Decomposition",
            description:
              "Positive-definite matrices, square-root factors, efficient solves, and structural checks.",
            path: "/linear-algebra/cholesky-decomposition/1",
          },
        ],
      },
      {
        id: "module-a-2",
        title: "Part 2",
        description: "Jordan Normal Form and Vector & Matrix Norms",
        topics: [
          {
            id: "jordan-normal-form",
            title: "Jordan Normal Form",
            description:
              "Generalized eigenvectors, Jordan chains, block structure, matrix powers, and canonical form.",
            path: "/linear-algebra/jordan-normal-form/1",
          },
          {
            id: "matrix-norms-conditioning",
            title: "Vector & Matrix Norms, Condition Number",
            description:
              "Norms, induced matrix norms, conditioning, residuals, sensitivity, and error bounds.",
            path: "/linear-algebra/matrix-norms-conditioning/1",
          },
        ],
      },
    ],
  },
  {
    id: "module-b",
    title: "Advanced Vector & Matrix Structure",
    description:
      "Complex vector spaces, quadratic forms, basis changes, and affine coordinates.",
    meta: "4 topics · 2 parts",
    icon: "B",
    logo: "ℂ · P⁻¹AP",
    parts: [
      {
        id: "module-b-1",
        title: "Part 1",
        description: "Complex Vector Spaces and Quadratic Forms & Definiteness",
        topics: [
          {
            id: "complex-vector-spaces",
            title: "Complex Vector Spaces",
            description:
              "Complex scalars, inner products, Hermitian and unitary matrices, and related structure.",
            path: "/linear-algebra/complex-vector-spaces/1",
          },
          {
            id: "quadratic-forms-definiteness",
            title: "Quadratic Forms & Definiteness",
            description:
              "Quadratic forms, definiteness tests, congruence, inertia, and Hessian classification.",
            path: "/linear-algebra/quadratic-forms-definiteness/1",
          },
        ],
      },
      {
        id: "module-b-2",
        title: "Part 2",
        description: "Change of Basis & Similarity and Affine Transformations",
        topics: [
          {
            id: "change-of-basis-similarity",
            title: "Change of Basis & Similarity Transformations",
            description:
              "Coordinate vectors, transition matrices, similarity invariants, and operator representations.",
            path: "/linear-algebra/change-of-basis-similarity/1",
          },
          {
            id: "affine-homogeneous",
            title: "Affine Transformations & Homogeneous Coordinates",
            description:
              "Affine maps, homogeneous matrices, compositions, inverses, and transformations about arbitrary points.",
            path: "/linear-algebra/affine-homogeneous/1",
          },
        ],
      },
    ],
  },
  {
    id: "module-c",
    title: "Data, Orthogonality & Singular Structure",
    description:
      "Orthogonality, SVD, PCA, and Markov chains for applications and data-driven linear algebra.",
    meta: "4 topics · 2 parts",
    icon: "C",
    logo: "UΣVᵀ",
    parts: [
      {
        id: "module-c-1",
        title: "Part 1",
        description: "Orthogonality & Least Squares and Singular Value Decomposition",
        topics: [
          {
            id: "orthogonality-least-squares",
            title: "Orthogonality & Least Squares",
            description:
              "Inner products, Gram–Schmidt, QR, projections, and least-squares solutions.",
            path: "/linear-algebra/orthogonality/1",
          },
          {
            id: "singular-value-decomposition",
            title: "Singular Value Decomposition",
            description:
              "Full and compact SVD, singular values, fundamental subspaces, low-rank approximation, and the pseudoinverse.",
            path: "/linear-algebra/svd/1",
          },
        ],
      },
      {
        id: "module-c-2",
        title: "Part 2",
        description: "Principal Component Analysis and Markov Chains & Steady States",
        topics: [
          {
            id: "principal-component-analysis",
            title: "Principal Component Analysis (PCA)",
            description:
              "Center data and transform it into orthogonal directions ranked by variance.",
            path: "/linear-algebra/principal-component-analysis/1",
          },
          {
            id: "markov-chains-steady-states",
            title: "Markov Chains & Steady States",
            description:
              "Stochastic transition matrices, stationary distributions, and convergence behavior.",
            path: "/linear-algebra/markov-chains-steady-states/1",
          },
        ],
      },
    ],
  },
];

export function getLinearAlgebraModuleGroup(id) {
  return LINEAR_ALGEBRA_MODULE_GROUPS.find((module) => module.id === id) || null;
}

export function getLinearAlgebraModulePart(id) {
  for (const module of LINEAR_ALGEBRA_MODULE_GROUPS) {
    const part = module.parts.find((item) => item.id === id);
    if (part) return { module, part };
  }
  return null;
}
