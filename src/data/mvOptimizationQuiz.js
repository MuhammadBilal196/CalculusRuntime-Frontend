export const MV_HESSIAN_OPTIMIZATION_QUIZ = [
  {
    id: "hessian-01",
    prompt: "What does the Hessian matrix collect?",
    options: [
      "First-order partial derivatives",
      "Second-order partial derivatives",
      "Only function values",
      "Only directional derivatives",
    ],
    answer: "B",
    explanation:
      "The Hessian collects all second-order partial derivatives into a matrix.",
  },
  {
    id: "hessian-02",
    prompt:
      "For a function f(x,y), which matrix is its Hessian?",
    options: [
      "[[f_x, f_y],[f_xx, f_yy]]",
      "[[f_xx, f_xy],[f_yx, f_yy]]",
      "[[f_x, f_xy],[f_y, f_yy]]",
      "[[f_xy, f_x],[f_y, f_yx]]",
    ],
    answer: "B",
    explanation:
      "The Hessian is formed from the four second-order partial derivatives.",
  },
  {
    id: "hessian-03",
    prompt:
      "What condition defines a critical point of a differentiable function f(x,y)?",
    options: [
      "f(x,y)=0",
      "∇f(x,y)=0",
      "H_f(x,y)=0",
      "D=0",
    ],
    answer: "B",
    explanation:
      "A critical point occurs where both first partial derivatives vanish, equivalently ∇f=0.",
  },
  {
    id: "hessian-04",
    prompt:
      "Why is the Hessian useful in optimization?",
    options: [
      "It gives the function's domain",
      "It gives second-order curvature information",
      "It always finds the global minimum",
      "It replaces the gradient",
    ],
    answer: "B",
    explanation:
      "The Hessian describes local second-order curvature near a point.",
  },
  {
    id: "hessian-05",
    prompt:
      "For f(x,y), what is the standard two-variable Hessian determinant?",
    options: [
      "f_xx + f_yy",
      "f_xx f_yy - (f_xy)^2",
      "f_x f_y - f_xy",
      "f_xx / f_yy",
    ],
    answer: "B",
    explanation:
      "For a symmetric two-variable Hessian, D=f_xx f_yy-(f_xy)^2.",
  },
  {
    id: "hessian-06",
    prompt:
      "At a critical point, what does D>0 and f_xx>0 imply?",
    options: [
      "Local maximum",
      "Saddle point",
      "Local minimum",
      "No conclusion",
    ],
    answer: "C",
    explanation:
      "The standard Hessian test gives a local minimum when D>0 and f_xx>0.",
  },
  {
    id: "hessian-07",
    prompt:
      "At a critical point, what does D>0 and f_xx<0 imply?",
    options: [
      "Local maximum",
      "Local minimum",
      "Saddle point",
      "No conclusion",
    ],
    answer: "A",
    explanation:
      "When D>0 and f_xx<0, the Hessian is negative definite in the two-variable test, giving a local maximum.",
  },
  {
    id: "hessian-08",
    prompt:
      "What does D<0 imply at a critical point in the two-variable Hessian test?",
    options: [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Global minimum",
    ],
    answer: "C",
    explanation:
      "A negative Hessian determinant means the Hessian is indefinite, so the point is a saddle point.",
  },
  {
    id: "hessian-09",
    prompt:
      "What does D=0 mean in the standard two-variable Hessian test?",
    options: [
      "The point is definitely a minimum",
      "The point is definitely a maximum",
      "The point is definitely a saddle",
      "The test is inconclusive",
    ],
    answer: "D",
    explanation:
      "When D=0, the standard second-order test cannot classify the critical point.",
  },
  {
    id: "hessian-10",
    prompt:
      "A positive-definite Hessian at a critical point indicates what?",
    options: [
      "Strict local maximum",
      "Strict local minimum",
      "Saddle point",
      "No local behavior",
    ],
    answer: "B",
    explanation:
      "Positive definiteness makes the second-order quadratic form positive in every nonzero direction.",
  },
  {
    id: "hessian-11",
    prompt:
      "A negative-definite Hessian at a critical point indicates what?",
    options: [
      "Strict local maximum",
      "Strict local minimum",
      "Saddle point",
      "Inflection point only",
    ],
    answer: "A",
    explanation:
      "Negative definiteness makes the second-order quadratic form negative in every nonzero direction.",
  },
  {
    id: "hessian-12",
    prompt:
      "What does an indefinite Hessian mean geometrically?",
    options: [
      "Curvature has the same sign in every direction",
      "The function is constant",
      "Curvature has different signs in different directions",
      "The gradient is always zero",
    ],
    answer: "C",
    explanation:
      "An indefinite Hessian has directions of positive and negative second-order curvature.",
  },
  {
    id: "hessian-13",
    prompt:
      "For f(x,y)=x^2+y^2, what type of critical point occurs at (0,0)?",
    options: [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Degenerate maximum",
    ],
    answer: "A",
    explanation:
      "The Hessian is [[2,0],[0,2]], which is positive definite, so (0,0) is a local minimum.",
  },
  {
    id: "hessian-14",
    prompt:
      "For f(x,y)=4-x^2-y^2, what type of critical point occurs at (0,0)?",
    options: [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "No critical point",
    ],
    answer: "B",
    explanation:
      "The Hessian is negative definite, so (0,0) is a local maximum.",
  },
  {
    id: "hessian-15",
    prompt:
      "For f(x,y)=x^2-y^2, what type of critical point occurs at (0,0)?",
    options: [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Global maximum",
    ],
    answer: "C",
    explanation:
      "The Hessian has determinant -4, so it is indefinite and the origin is a saddle point.",
  },
  {
    id: "hessian-16",
    prompt:
      "For f(x,y)=x^4+y^4, what does the Hessian test say at (0,0)?",
    options: [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Inconclusive",
    ],
    answer: "D",
    explanation:
      "The Hessian is zero at the origin, so the standard second-order test is inconclusive.",
  },
  {
    id: "hessian-17",
    prompt:
      "For f(x,y)=x^4+y^4, what is the actual classification of (0,0)?",
    options: [
      "Strict global minimum",
      "Strict global maximum",
      "Saddle point",
      "No critical point",
    ],
    answer: "A",
    explanation:
      "Since x^4+y^4 is nonnegative and equals zero only at the origin, the origin is a strict global minimum.",
  },
  {
    id: "hessian-18",
    prompt:
      "In higher dimensions, what do all-positive Hessian eigenvalues indicate?",
    options: [
      "Negative definiteness",
      "Positive definiteness",
      "Indefiniteness",
      "Singularity",
    ],
    answer: "B",
    explanation:
      "For a symmetric Hessian, strictly positive eigenvalues imply positive definiteness.",
  },
  {
    id: "hessian-19",
    prompt:
      "In higher dimensions, what do mixed-sign Hessian eigenvalues indicate?",
    options: [
      "Positive definiteness",
      "Negative definiteness",
      "Indefiniteness",
      "Zero curvature everywhere",
    ],
    answer: "C",
    explanation:
      "Positive and negative eigenvalues together indicate an indefinite Hessian.",
  },
  {
    id: "hessian-20",
    prompt:
      "What is the safest workflow for an unconstrained Hessian optimization problem?",
    options: [
      "Compute the Hessian first and ignore the gradient",
      "Find critical points, compute the Hessian, evaluate it at each point, then classify",
      "Use only the function value",
      "Assume every critical point is a minimum",
    ],
    answer: "B",
    explanation:
      "The gradient finds candidate critical points; the Hessian then provides second-order classification information.",
  },
];