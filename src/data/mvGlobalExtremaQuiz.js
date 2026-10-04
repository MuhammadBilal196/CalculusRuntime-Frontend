/**
 * Multivariable Calculus — 
 * Global Extrema on Bounded Domains
 * Exactly 20 questions.
 */

export const MV_GLOBAL_EXTREMA_QUIZ = [
  {
    prompt:
      "What theorem guarantees absolute maximum and minimum values for a continuous function on a compact domain?",
    options: [
      "Mean Value Theorem",
      "Extreme Value Theorem",
      "Chain Rule",
      "Green's Theorem",
    ],
    answer: "B",
    explanation:
      "The Extreme Value Theorem states that a continuous function on a compact set attains both an absolute maximum and an absolute minimum.",
  },

  {
    prompt: "In R^n, what properties characterize a compact set?",
    options: [
      "Open and bounded",
      "Closed and unbounded",
      "Closed and bounded",
      "Open and finite",
    ],
    answer: "C",
    explanation:
      "In Euclidean space, compactness is equivalent to being closed and bounded.",
  },

  {
    prompt:
      "What equation identifies an interior critical point of a differentiable function?",
    options: [
      "f = 0",
      "∇f = 0",
      "det(H) = 1",
      "g(x) = 1",
    ],
    answer: "B",
    explanation:
      "At a differentiable interior extremum, the gradient must vanish.",
  },

  {
    prompt:
      "Why are boundary points essential in global-extrema problems?",
    options: [
      "Global extrema can never occur there",
      "The Hessian is always undefined there",
      "A global maximum or minimum may occur entirely on the boundary",
      "Boundary points are always stationary",
    ],
    answer: "C",
    explanation:
      "A global extremum can occur on the boundary even when there are no relevant interior critical points.",
  },

  {
    prompt:
      "For a smooth boundary g(x,y)=0, which equation is used with Lagrange multipliers?",
    options: [
      "∇f = 0 only",
      "∇f = λ∇g together with g = 0",
      "f = g",
      "Hf = λI only",
    ],
    answer: "B",
    explanation:
      "Lagrange multipliers solve ∇f = λ∇g subject to the boundary constraint g = 0.",
  },

  {
    prompt:
      "Which points must be checked on a rectangular domain?",
    options: [
      "Only the center",
      "Only interior critical points",
      "Interior critical points, edge candidates, and all four corners",
      "Only the corners",
    ],
    answer: "C",
    explanation:
      "A complete search includes interior candidates, every boundary segment, and all corners.",
  },

  {
    prompt:
      "What happens when a smooth boundary is parameterized as r(t)?",
    options: [
      "The problem becomes a one-variable function F(t)=f(r(t))",
      "The problem becomes three-dimensional",
      "The function becomes constant",
      "The gradient automatically vanishes",
    ],
    answer: "A",
    explanation:
      "Substituting the boundary parameterization into f reduces the boundary search to one-variable optimization.",
  },

  {
    prompt:
      "If a function is continuous on a compact domain, what does the Extreme Value Theorem guarantee?",
    options: [
      "Only local extrema exist",
      "An absolute maximum and absolute minimum exist",
      "Every point is critical",
      "The Hessian is positive definite",
    ],
    answer: "B",
    explanation:
      "Continuity plus compactness guarantees that both absolute extrema are attained.",
  },

  {
    prompt:
      "What should be included if the objective is not differentiable at a point inside the domain?",
    options: [
      "Ignore it",
      "Include it as a candidate",
      "It cannot be an extremum",
      "Replace it with a boundary point",
    ],
    answer: "B",
    explanation:
      "Nondifferentiable points can be extrema even though they do not satisfy ∇f = 0.",
  },

  {
    prompt:
      "After generating all global-extrema candidates, what is the decisive final step?",
    options: [
      "Choose the first point found",
      "Compare the original function values at all candidates",
      "Discard the boundary points",
      "Compute only the Hessian determinant",
    ],
    answer: "B",
    explanation:
      "Absolute extrema are determined by comparing objective values across the complete candidate set.",
  },

  {
    prompt:
      "Which of the following domains is compact in R^2?",
    options: [
      "x²+y² < 1",
      "R²",
      "0 ≤ x ≤ 1 and 0 ≤ y ≤ 2",
      "x > 0",
    ],
    answer: "C",
    explanation:
      "The closed rectangle is closed and bounded, hence compact.",
  },

  {
    prompt:
      "Why is the open disk x²+y²<1 not compact?",
    options: [
      "It is not bounded",
      "It is not closed",
      "It has no points",
      "It is not a subset of R²",
    ],
    answer: "B",
    explanation:
      "The open disk is bounded but does not contain its boundary, so it is not closed and therefore not compact.",
  },

  {
    prompt:
      "For the closed disk x²+y²≤R², what common parameterization describes the boundary?",
    options: [
      "x=R cos t, y=R sin t",
      "x=Rt, y=Rt",
      "x=t², y=t²",
      "x=R+t, y=R−t",
    ],
    answer: "A",
    explanation:
      "The circle boundary is parameterized by x=R cos t and y=R sin t.",
  },

  {
    prompt:
      "What is the correct relationship between a global minimum and a local minimum?",
    options: [
      "Every local minimum is global",
      "Every global minimum is local",
      "They are unrelated",
      "A global minimum cannot lie on the boundary",
    ],
    answer: "B",
    explanation:
      "A global minimum is at least a local minimum, although a local minimum need not be global.",
  },

  {
    prompt:
      "What additional candidates must be checked for a triangular domain?",
    options: [
      "Only its centroid",
      "Only interior critical points",
      "Each edge plus all three vertices",
      "Only the longest edge",
    ],
    answer: "C",
    explanation:
      "Every boundary edge and every vertex belongs to the complete candidate search.",
  },

  {
    prompt:
      "How does strict convexity affect a convex minimization problem?",
    options: [
      "It prevents a minimum from existing",
      "It guarantees uniqueness of the minimizer when one exists",
      "It forces every boundary multiplier to be positive",
      "It creates multiple global minima",
    ],
    answer: "B",
    explanation:
      "A strictly convex objective has at most one global minimizer on a convex feasible set.",
  },

  {
    prompt:
      "Which statement about KKT and global extrema is most accurate?",
    options: [
      "KKT automatically proves global optimality for every problem",
      "KKT can generate constrained candidates, but global comparison or convexity may still be required",
      "KKT replaces the need to check feasibility",
      "KKT applies only to unconstrained problems",
    ],
    answer: "B",
    explanation:
      "KKT gives constrained first-order candidates; global conclusions require suitable convexity or complete candidate comparison.",
  },

  {
    prompt:
      "Why must corners of a polygon be checked separately?",
    options: [
      "They are always stationary",
      "They are not generally represented by one smooth boundary tangent condition",
      "They are never extrema",
      "They are outside the domain",
    ],
    answer: "B",
    explanation:
      "Corners are nonsmooth boundary points, so they must be included explicitly in the candidate set.",
  },

  {
    prompt:
      "What does boundedness prevent in a global optimization problem?",
    options: [
      "Interior critical points",
      "The optimizer from escaping indefinitely in search of better values",
      "Boundary points",
      "Differentiability",
    ],
    answer: "B",
    explanation:
      "Boundedness limits the feasible search region and is part of the compactness condition used by the Extreme Value Theorem.",
  },

  {
    prompt:
      "Which workflow is most complete for a continuous function on a closed bounded planar domain?",
    options: [
      "Find only ∇f=0",
      "Check only the boundary",
      "Find interior critical points, analyze every boundary piece, check corners/nonsmooth points, then compare values",
      "Use the Hessian once and stop",
    ],
    answer: "C",
    explanation:
      "Global extrema require a complete candidate search followed by comparison of objective values.",
  },
];