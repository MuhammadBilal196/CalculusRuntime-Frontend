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

export function getLaModule(id) {
  return LA_MODULES.find((module) => module.id === id);
}

export function getLaModuleTopics(module, part) {
  return module.topics.slice((part - 1) * 2, part * 2);
}

export function getLaModulePath(module, part = 1) {
  return `/linear-algebra/${module.id}/${part}`;
}

export function getLaTopicPath(module, topic) {
  const part = module.topics.findIndex((item) => item.id === topic.id) < 2 ? 1 : 2;
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
