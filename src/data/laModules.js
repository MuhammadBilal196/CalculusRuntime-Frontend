// Each curriculum module has two parts, two complete topics per part.
export const LA_MODULES = [
  {
    id: "matrix-decompositions",
    overviewAnchor: "module-a",
    title: "Matrix Decompositions & Factorizations",
    description: "LU, Cholesky, Jordan normal form, and vector/matrix norms with conditioning. Detailed theory, worked examples, and 20 MCQs per topic.",
    logo: "A = LU",
    topics: [
      { id: "lu-decomposition", title: "LU Decomposition", quizKey: "la-a-lu-checkpoint" },
      { id: "cholesky-decomposition", title: "Cholesky Decomposition", quizKey: "la-a-cholesky-checkpoint" },
      { id: "jordan-normal-form", title: "Jordan Normal Form", quizKey: "la-a-jordan-checkpoint" },
      { id: "matrix-norms-conditioning", title: "Vector & Matrix Norms, Condition Number", quizKey: "la-a-norms-checkpoint" },
    ],
  },
  {
    id: "advanced-vector-space-theory",
    overviewAnchor: "module-b",
    title: "Advanced Vector Space Theory",
    description: "Complex vector spaces, quadratic forms, change of basis, and affine transformations. Four complete topics with worked examples and individual checkpoints.",
    logo: "U*U = I",
    topics: [
      { id: "complex-vector-spaces", title: "Complex Vector Spaces (Hermitian & Unitary Matrices)", quizKey: "la-complex-checkpoint" },
      { id: "quadratic-forms-definiteness", title: "Quadratic Forms & Definiteness", quizKey: "la-quadratic-checkpoint" },
      { id: "change-of-basis-similarity", title: "Change of Basis & Similarity Transformations", quizKey: "la-change-basis-checkpoint" },
      { id: "affine-homogeneous", title: "Affine Transformations & Homogeneous Coordinates", quizKey: "la-affine-checkpoint" },
    ],
  },
  {
    id: "applied-linear-algebra",
    overviewAnchor: "module-c",
    title: "Applied Linear Algebra",
    description: "PCA, Markov chains, linear programming with the Simplex method, and vector-space applications in graphics and machine learning.",
    logo: "XᵀX",
    topics: [
      { id: "principal-component-analysis", title: "Principal Component Analysis (PCA)", quizKey: "la-pca-checkpoint" },
      { id: "markov-chains-steady-states", title: "Markov Chains & Steady States", quizKey: "la-markov-checkpoint" },
      { id: "linear-programming-simplex", title: "Linear Programming (Simplex Method)", quizKey: "la-linear-programming-checkpoint" },
      { id: "vector-space-applications", title: "Vector Space Applications in Graphics & ML", quizKey: "la-vector-applications-checkpoint" },
    ],
  },
];

// Published expansion topics are separate until certificate/practice integration.
export const LA_EXPANSION_MODULES = [{
  id: "numerical-linear-algebra",
  overviewAnchor: "numerical-linear-algebra",
  title: "Numerical Linear Algebra",
  description: "Iterative linear solvers and numerical eigenvalue algorithms: Jacobi, Gauss–Seidel, SOR, power iteration, and QR, with worked examples and independent checkpoints.",
  logo: "Ax ≈ b",
  topicsPerPart: 1,
  plannedTopicCount: 2,
  topics: [{ id: "iterative-solvers", title: "Iterative Solvers (Jacobi, Gauss–Seidel, SOR)", quizKey: "la-iterative-solvers-checkpoint", singlePage: true },
    { id: "eigenvalue-algorithms", title: "Eigenvalue Algorithms (Power Iteration & QR)", quizKey: "la-eigenvalue-algorithms-checkpoint", singlePage: true }],
}, {
  id: "abstract-linear-algebra",
  overviewAnchor: "abstract-linear-algebra",
  title: "Abstract Linear Algebra",
  description: "Dual spaces and linear functionals, tensor products and Kronecker products, with coordinate conventions, worked examples and independent checkpoints.",
  logo: "V*",
  topicsPerPart: 1,
  plannedTopicCount: 2,
  topics: [{ id: "dual-spaces", title: "Dual Spaces & Linear Functionals", quizKey: "la-dual-spaces-checkpoint", singlePage: true },
    { id: "tensor-products", title: "Tensor Products & Kronecker Products", quizKey: "la-tensor-products-checkpoint", singlePage: true }],
}, {
  id: "modern-applications",
  overviewAnchor: "modern-applications",
  title: "Modern Applications",
  description: "Spectral graph theory and matrix calculus, with graph Laplacians, vector and matrix derivatives, worked examples and independent checkpoints.",
  logo: "L = D − A",
  topicsPerPart: 1,
  plannedTopicCount: 2,
  topics: [{ id: "spectral-graph", title: "Spectral Graph Theory", quizKey: "la-spectral-graph-checkpoint", singlePage: true },
    { id: "matrix-calculus", title: "Matrix Calculus", quizKey: "la-matrix-calculus-checkpoint", singlePage: true }],
}];

export function getLaModuleParts(module) {
  return Array.from({ length: Math.ceil(module.topics.length / (module.topicsPerPart || 2)) }, (_, i) => i + 1);
}

export function getLaModule(id) {
  return [...LA_MODULES, ...LA_EXPANSION_MODULES].find((module) => module.id === id);
}

export function getLaModuleTopics(module, part) {
  const size = module.topicsPerPart || 2;
  return module.topics.slice((part - 1) * size, part * size);
}

export function getLaModulePath(module, part = 1) {
  return `/linear-algebra/${module.id}/${part}`;
}

export function getLaTopicPath(module, topic) {
  const part = Math.floor(module.topics.findIndex((item) => item.id === topic.id) / (module.topicsPerPart || 2)) + 1;
  return `${getLaModulePath(module, part)}#${topic.id}`;
}

// Preserve incoming links and bookmarks from the earlier topic-by-topic pages.
export const LA_TOPIC_REDIRECTS = LA_MODULES.flatMap((module) =>
  module.topics.flatMap((topic) =>
    ["", "/1", "/2"].map((suffix) => ({
      from: `/linear-algebra/${topic.id}${suffix}`,
      to: getLaTopicPath(module, topic),
    })),
  ),
);

// Preserve the grouped URLs introduced by PR #1.
export const LA_MODULE_REDIRECTS = LA_MODULES.flatMap((module) =>
  ["", "/1", "/2"].map((suffix) => ({
    from: `/linear-algebra/${module.overviewAnchor}${suffix}`,
    to: getLaModulePath(module, suffix === "/2" ? 2 : 1),
  })),
);
