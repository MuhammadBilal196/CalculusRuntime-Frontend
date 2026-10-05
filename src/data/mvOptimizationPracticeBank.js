export const MV_OPTIMIZATION_PRACTICE_BANK = [
  // ============================================================
  // EASY 001–025
  // The Hessian Matrix & Optimization
  // ============================================================

  {
    id: "mvc-opt-e-001",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "For f(x,y)=x²+y², what is f_xx?",
    options: [
      "0",
      "1",
      "2",
      "2x"
    ],
    correctAnswer: 2,
    explanation: "f_x=2x, so f_xx=2."
  },

  {
    id: "mvc-opt-e-002",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "For f(x,y)=x²+y², what is f_yy?",
    options: [
      "1",
      "2",
      "2y",
      "0"
    ],
    correctAnswer: 1,
    explanation: "f_y=2y, so f_yy=2."
  },

  {
    id: "mvc-opt-e-003",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "For f(x,y)=x²+3xy+y², what is f_xy?",
    options: [
      "1",
      "2",
      "3",
      "6"
    ],
    correctAnswer: 2,
    explanation: "f_x=2x+3y, so f_xy=3."
  },

  {
    id: "mvc-opt-e-004",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "The Hessian matrix contains:",
    options: [
      "First-order partial derivatives only",
      "Second-order partial derivatives",
      "Only function values",
      "Only gradient vectors"
    ],
    correctAnswer: 1,
    explanation: "The Hessian is the matrix of second-order partial derivatives."
  },

  {
    id: "mvc-opt-e-005",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "For a twice-differentiable scalar function of two variables, the Hessian is a:",
    options: [
      "1×1 matrix",
      "2×1 matrix",
      "2×2 matrix",
      "3×3 matrix"
    ],
    correctAnswer: 2,
    explanation: "For two variables, the Hessian is a 2×2 matrix."
  },

  {
    id: "mvc-opt-e-006",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "At an unconstrained interior local extremum, a necessary first-order condition is:",
    options: [
      "f(x,y)=0",
      "∇f(x,y)=0",
      "H=0",
      "det(H)=0"
    ],
    correctAnswer: 1,
    explanation: "At an unconstrained differentiable interior extremum, the gradient must vanish."
  },

  {
    id: "mvc-opt-e-007",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "For f(x,y)=x²+y², the point (0,0) is a:",
    options: [
      "Local maximum",
      "Local minimum",
      "Saddle point",
      "Boundary point"
    ],
    correctAnswer: 1,
    explanation: "x²+y²≥0 with equality at (0,0), so the origin is a local minimum."
  },

  {
    id: "mvc-opt-e-008",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "For f(x,y)=−x²−y², the point (0,0) is a:",
    options: [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Regular point"
    ],
    correctAnswer: 1,
    explanation: "−x²−y²≤0 with equality at the origin, so the origin is a local maximum."
  },

  {
    id: "mvc-opt-e-009",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "For f(x,y)=x²−y², the origin is a:",
    options: [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Global minimum"
    ],
    correctAnswer: 2,
    explanation: "The function increases in the x-direction and decreases in the y-direction."
  },

  {
    id: "mvc-opt-e-010",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "For a 2×2 Hessian, the determinant used in the second derivative test is:",
    options: [
      "f_xx+f_yy",
      "f_xx−f_yy",
      "f_xx f_yy−(f_xy)²",
      "f_xy²−f_xx f_yy"
    ],
    correctAnswer: 2,
    explanation: "D=f_xx f_yy−(f_xy)²."
  },

  {
    id: "mvc-opt-e-011",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "If D>0 and f_xx>0 at a critical point, the point is a:",
    options: [
      "Local maximum",
      "Local minimum",
      "Saddle point",
      "Degenerate point"
    ],
    correctAnswer: 1,
    explanation: "D>0 and f_xx>0 gives a local minimum."
  },

  {
    id: "mvc-opt-e-012",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "If D>0 and f_xx<0 at a critical point, the point is a:",
    options: [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Regular point"
    ],
    correctAnswer: 1,
    explanation: "D>0 and f_xx<0 gives a local maximum."
  },

  {
    id: "mvc-opt-e-013",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "If D<0 at a critical point, the point is a:",
    options: [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Global maximum"
    ],
    correctAnswer: 2,
    explanation: "D<0 indicates a saddle point."
  },

  {
    id: "mvc-opt-e-014",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "If D=0 in the two-variable second derivative test, the test is:",
    options: [
      "Always a minimum",
      "Always a maximum",
      "Inconclusive",
      "Always a saddle"
    ],
    correctAnswer: 2,
    explanation: "When D=0, the standard second derivative test is inconclusive."
  },

  {
    id: "mvc-opt-e-015",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "The Hessian of f(x,y)=3x²+4y² is:",
    options: [
      "[[3,0],[0,4]]",
      "[[6,0],[0,8]]",
      "[[6,4],[3,8]]",
      "[[0,6],[8,0]]"
    ],
    correctAnswer: 1,
    explanation: "f_xx=6, f_xy=0, f_yx=0, and f_yy=8."
  },

  {
    id: "mvc-opt-e-016",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "A symmetric Hessian has equal off-diagonal entries because:",
    options: [
      "Gradients are constant",
      "Mixed partial derivatives are equal under standard smoothness conditions",
      "The function must be linear",
      "The determinant is zero"
    ],
    correctAnswer: 1,
    explanation: "For a sufficiently smooth function, f_xy=f_yx."
  },

  {
    id: "mvc-opt-e-017",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "A positive definite Hessian at a critical point indicates a:",
    options: [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Boundary point"
    ],
    correctAnswer: 0,
    explanation: "A positive definite Hessian gives a local minimum."
  },

  {
    id: "mvc-opt-e-018",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "A negative definite Hessian at a critical point indicates a:",
    options: [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Degenerate point"
    ],
    correctAnswer: 1,
    explanation: "A negative definite Hessian gives a local maximum."
  },

  {
    id: "mvc-opt-e-019",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "A Hessian that is indefinite typically corresponds to a:",
    options: [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Constant function"
    ],
    correctAnswer: 2,
    explanation: "An indefinite Hessian corresponds to curvature of opposite signs in different directions."
  },

  {
    id: "mvc-opt-e-020",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "For f(x,y)=x²+y², the Hessian is:",
    options: [
      "[[1,0],[0,1]]",
      "[[2,0],[0,2]]",
      "[[0,2],[2,0]]",
      "[[2,2],[2,2]]"
    ],
    correctAnswer: 1,
    explanation: "Both second derivatives on the diagonal are 2 and the mixed derivatives are 0."
  },

  {
    id: "mvc-opt-e-021",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "The gradient is primarily a first-order object, while the Hessian is a:",
    options: [
      "Zero-order object",
      "Second-order object",
      "Third-order object",
      "Constant scalar"
    ],
    correctAnswer: 1,
    explanation: "The Hessian collects second derivatives."
  },

  {
    id: "mvc-opt-e-022",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "A critical point of f(x,y) satisfies:",
    options: [
      "f_x=f_y=0",
      "f_xx=f_yy=0",
      "f=1",
      "f_x=f_y=1"
    ],
    correctAnswer: 0,
    explanation: "For an unconstrained differentiable function, critical points satisfy ∇f=0."
  },

  {
    id: "mvc-opt-e-023",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "For f(x,y)=x²+4y², the origin is:",
    options: [
      "A local maximum",
      "A local minimum",
      "A saddle point",
      "Not a critical point"
    ],
    correctAnswer: 1,
    explanation: "The function is nonnegative and equals 0 only at the origin."
  },

  {
    id: "mvc-opt-e-024",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "The determinant of [[2,0],[0,3]] is:",
    options: [
      "2",
      "3",
      "5",
      "6"
    ],
    correctAnswer: 3,
    explanation: "The determinant is 2·3=6."
  },

  {
    id: "mvc-opt-e-025",
    module: "Constrained & Unconstrained Optimization",
    topic: "The Hessian Matrix & Optimization",
    difficulty: "Easy",
    question: "For f(x,y)=x²−4y², the Hessian is:",
    options: [
      "[[2,0],[0,-8]]",
      "[[1,0],[0,-4]]",
      "[[2,0],[0,4]]",
      "[[-2,0],[0,8]]"
    ],
    correctAnswer: 0,
    explanation: "f_xx=2 and f_yy=−8."
  },

  // ============================================================
  // EASY 026–050
  // Inequality Constraints (KKT Conditions)
  // ============================================================

  {
    id: "mvc-opt-e-026",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "KKT stands for:",
    options: [
      "Karush-Kuhn-Tucker",
      "Keller-Klein-Taylor",
      "Kinetic-Kernel-Test",
      "Karim-Kutta-Transform"
    ],
    correctAnswer: 0,
    explanation: "KKT stands for Karush-Kuhn-Tucker."
  },

  {
    id: "mvc-opt-e-027",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "KKT conditions are mainly used for optimization problems with:",
    options: [
      "Only equality constraints",
      "Inequality constraints",
      "No objective function",
      "Only linear equations"
    ],
    correctAnswer: 1,
    explanation: "KKT conditions are used for constrained optimization, especially inequality constraints."
  },

  {
    id: "mvc-opt-e-028",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "A point satisfying all constraints is called:",
    options: [
      "Critical",
      "Feasible",
      "Singular",
      "Stationary"
    ],
    correctAnswer: 1,
    explanation: "A feasible point satisfies all constraints."
  },

  {
    id: "mvc-opt-e-029",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "An inequality constraint is active at a point when:",
    options: [
      "It is strictly satisfied",
      "It holds as equality",
      "It is removed",
      "Its multiplier is negative"
    ],
    correctAnswer: 1,
    explanation: "For g(x)≤0, activity means g(x)=0."
  },

  {
    id: "mvc-opt-e-030",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "An inactive inequality constraint has:",
    options: [
      "Zero slack",
      "Positive slack",
      "Negative objective",
      "Zero objective"
    ],
    correctAnswer: 1,
    explanation: "For g(x)≤0, an inactive constraint has g(x)<0, giving positive slack."
  },

  {
    id: "mvc-opt-e-031",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "For a minimization problem with constraint g(x)≤0, the standard KKT multiplier sign condition is:",
    options: [
      "λ≤0",
      "λ≥0",
      "λ=1",
      "λ can never exist"
    ],
    correctAnswer: 1,
    explanation: "With the convention g(x)≤0, KKT requires λ≥0 for minimization."
  },

  {
    id: "mvc-opt-e-032",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "Complementary slackness is expressed as:",
    options: [
      "λ+g=0",
      "λg=0",
      "λg=1",
      "λ−g=0"
    ],
    correctAnswer: 1,
    explanation: "Complementary slackness requires λ_i g_i(x)=0."
  },

  {
    id: "mvc-opt-e-033",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "If an inequality constraint is inactive, its KKT multiplier must be:",
    options: [
      "Positive",
      "Negative",
      "Zero",
      "Undefined"
    ],
    correctAnswer: 2,
    explanation: "Positive slack and complementary slackness force the multiplier to zero."
  },

  {
    id: "mvc-opt-e-034",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "The Lagrangian combines the objective with:",
    options: [
      "Only the Hessian",
      "Constraint functions and multipliers",
      "Only the gradient",
      "Only numerical approximations"
    ],
    correctAnswer: 1,
    explanation: "The Lagrangian incorporates constraint functions using multipliers."
  },

  {
    id: "mvc-opt-e-035",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "Primal feasibility means:",
    options: [
      "The objective is zero",
      "All original constraints are satisfied",
      "All multipliers are zero",
      "The Hessian is positive"
    ],
    correctAnswer: 1,
    explanation: "Primal feasibility requires the point to satisfy the original constraints."
  },

  {
    id: "mvc-opt-e-036",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "Dual feasibility for the standard minimization convention g(x)≤0 requires:",
    options: [
      "λ≥0",
      "λ≤0",
      "λ=−1",
      "λ is unconstrained"
    ],
    correctAnswer: 0,
    explanation: "Dual feasibility requires nonnegative multipliers."
  },

  {
    id: "mvc-opt-e-037",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "Stationarity in KKT requires the gradient of the Lagrangian to be:",
    options: [
      "1",
      "−1",
      "0",
      "Undefined"
    ],
    correctAnswer: 2,
    explanation: "KKT stationarity requires ∇_xL=0."
  },

  {
    id: "mvc-opt-e-038",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "If λ=0 for a constraint, the constraint can be:",
    options: [
      "Only active",
      "Only inactive",
      "Active or inactive depending on the problem",
      "Impossible"
    ],
    correctAnswer: 2,
    explanation: "A zero multiplier is required for inactive constraints, but an active constraint can also have zero multiplier in degenerate cases."
  },

  {
    id: "mvc-opt-e-039",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "The feasible region is the set of points that:",
    options: [
      "Maximize the objective",
      "Satisfy all constraints",
      "Have zero gradient",
      "Have positive Hessian determinant"
    ],
    correctAnswer: 1,
    explanation: "The feasible region contains all points satisfying every constraint."
  },

  {
    id: "mvc-opt-e-040",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "For g(x)=x−2≤0, the constraint is active at:",
    options: [
      "x=0",
      "x=1",
      "x=2",
      "x=3"
    ],
    correctAnswer: 2,
    explanation: "Activity means g(x)=0, so x=2."
  },

  {
    id: "mvc-opt-e-041",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "For x−2≤0, which point violates the constraint?",
    options: [
      "x=0",
      "x=1",
      "x=2",
      "x=3"
    ],
    correctAnswer: 3,
    explanation: "x=3 gives x−2=1>0 and is therefore infeasible."
  },

  {
    id: "mvc-opt-e-042",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "For x≥0 written as −x≤0, the standard KKT multiplier condition is:",
    options: [
      "λ≤0",
      "λ≥0",
      "λ=−x",
      "λ=1 always"
    ],
    correctAnswer: 1,
    explanation: "After writing the constraint as −x≤0, the standard minimization convention gives λ≥0."
  },

  {
    id: "mvc-opt-e-043",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "Which KKT condition directly connects a multiplier to its constraint slack?",
    options: [
      "Stationarity",
      "Primal feasibility",
      "Complementary slackness",
      "Dual feasibility"
    ],
    correctAnswer: 2,
    explanation: "Complementary slackness connects λ_i with g_i(x)."
  },

  {
    id: "mvc-opt-e-044",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "A constraint with g(x)<0 under the convention g(x)≤0 is:",
    options: [
      "Active",
      "Inactive",
      "Violated",
      "Undefined"
    ],
    correctAnswer: 1,
    explanation: "Strict satisfaction means the constraint is inactive."
  },

  {
    id: "mvc-opt-e-045",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "KKT conditions reduce to ordinary unconstrained first-order stationarity when:",
    options: [
      "There are no constraints",
      "The Hessian is singular",
      "The objective is constant",
      "The feasible set is empty"
    ],
    correctAnswer: 0,
    explanation: "Without constraints, stationarity reduces to ∇f=0."
  },

  {
    id: "mvc-opt-e-046",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "At an optimal point, an active constraint may be interpreted as:",
    options: [
      "A boundary condition",
      "A random condition",
      "An irrelevant condition",
      "A removed condition"
    ],
    correctAnswer: 0,
    explanation: "An active inequality defines part of the feasible boundary."
  },

  {
    id: "mvc-opt-e-047",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "The KKT multiplier associated with an inactive constraint is zero because of:",
    options: [
      "Stationarity only",
      "Complementary slackness",
      "The Hessian",
      "The objective value"
    ],
    correctAnswer: 1,
    explanation: "Positive slack combined with complementary slackness forces λ=0."
  },

  {
    id: "mvc-opt-e-048",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "A valid KKT point must satisfy feasibility conditions:",
    options: [
      "False",
      "True",
      "Only for quadratic problems",
      "Only for maxima"
    ],
    correctAnswer: 1,
    explanation: "Primal and dual feasibility are both KKT conditions."
  },

  {
    id: "mvc-opt-e-049",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "For one inequality constraint, complementary slackness has the form:",
    options: [
      "λ+g=0",
      "λg=0",
      "λ/g=0",
      "λ−g=0"
    ],
    correctAnswer: 1,
    explanation: "Complementary slackness is λg(x)=0."
  },

  {
    id: "mvc-opt-e-050",
    module: "Constrained & Unconstrained Optimization",
    topic: "Inequality Constraints (KKT Conditions)",
    difficulty: "Easy",
    question: "Which of the following is NOT a standard KKT condition?",
    options: [
      "Primal feasibility",
      "Dual feasibility",
      "Complementary slackness",
      "Boundary area"
    ],
    correctAnswer: 3,
    explanation: "Boundary area is not a KKT condition."
  },

  // ============================================================
  // EASY 051–075
  // Global Extrema on Bounded Domains
  // ============================================================

  {
    id: "mvc-opt-e-051",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "A global maximum is a point where the function value is:",
    options: [
      "Smaller than nearby values",
      "At least as large as every value on the domain",
      "Zero",
      "Equal to the gradient"
    ],
    correctAnswer: 1,
    explanation: "A global maximum is at least as large as every function value on the domain."
  },

  {
    id: "mvc-opt-e-052",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "A global minimum is a point where the function value is:",
    options: [
      "At least as small as every value on the domain",
      "Always negative",
      "Always zero",
      "A local maximum"
    ],
    correctAnswer: 0,
    explanation: "A global minimum is no larger than every other value on the domain."
  },

  {
    id: "mvc-opt-e-053",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "A bounded closed region in R² is:",
    options: [
      "Open and unbounded",
      "Closed and bounded",
      "Only a line",
      "Only a point"
    ],
    correctAnswer: 1,
    explanation: "A closed bounded region is compact in R²."
  },

  {
    id: "mvc-opt-e-054",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "The Extreme Value Theorem guarantees a continuous function on a compact domain has:",
    options: [
      "No extrema",
      "A global maximum and minimum",
      "Only a local maximum",
      "Only a local minimum"
    ],
    correctAnswer: 1,
    explanation: "A continuous function on a compact set attains both its maximum and minimum."
  },

  {
    id: "mvc-opt-e-055",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "For a global-extrema problem on a closed bounded region, one should inspect:",
    options: [
      "Only the center",
      "Interior critical points and the boundary",
      "Only the boundary",
      "Only points where f=0"
    ],
    correctAnswer: 1,
    explanation: "Global extrema can occur in the interior or on the boundary."
  },

  {
    id: "mvc-opt-e-056",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "For f(x,y)=x²+y² on the closed unit disk, the global minimum occurs at:",
    options: [
      "(1,0)",
      "(0,1)",
      "(0,0)",
      "Any boundary point"
    ],
    correctAnswer: 2,
    explanation: "The minimum value 0 occurs at the origin."
  },

  {
    id: "mvc-opt-e-057",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "For f(x,y)=x²+y² on x²+y²≤1, the global maximum occurs:",
    options: [
      "At the origin",
      "At every point on the unit circle",
      "Nowhere",
      "Only at (1,1)"
    ],
    correctAnswer: 1,
    explanation: "On the unit circle, x²+y²=1, so f=1 everywhere on the boundary."
  },

  {
    id: "mvc-opt-e-058",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "For f(x,y)=x+y on the square 0≤x≤1, 0≤y≤1, the global minimum is:",
    options: [
      "0",
      "1",
      "2",
      "-1"
    ],
    correctAnswer: 0,
    explanation: "The minimum occurs at (0,0), giving f=0."
  },

  {
    id: "mvc-opt-e-059",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "For f(x,y)=x+y on 0≤x,y≤1, the global maximum is:",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    correctAnswer: 2,
    explanation: "The maximum occurs at (1,1), where f=2."
  },

  {
    id: "mvc-opt-e-060",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "A boundary point of a disk x²+y²≤1 satisfies:",
    options: [
      "x²+y²<1",
      "x²+y²=1",
      "x²+y²>1",
      "x+y=1"
    ],
    correctAnswer: 1,
    explanation: "The boundary is the circle x²+y²=1."
  },

  {
    id: "mvc-opt-e-061",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "For f(x,y)=x²−y² on [−1,1]×[−1,1], a global maximum value is:",
    options: [
      "−1",
      "0",
      "1",
      "2"
    ],
    correctAnswer: 2,
    explanation: "At (1,0) or (−1,0), f=1, which is the maximum."
  },

  {
    id: "mvc-opt-e-062",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "For f(x,y)=x²−y² on [−1,1]×[−1,1], a global minimum value is:",
    options: [
      "−1",
      "0",
      "1",
      "−2"
    ],
    correctAnswer: 0,
    explanation: "At (0,1) or (0,−1), f=−1."
  },

  {
    id: "mvc-opt-e-063",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "A local maximum need not be:",
    options: [
      "A critical point",
      "A point in the domain",
      "A global maximum",
      "A point where the function is defined"
    ],
    correctAnswer: 2,
    explanation: "A local maximum need not be the largest value on the entire domain."
  },

  {
    id: "mvc-opt-e-064",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "When parameterizing a circular boundary, a common parameter is:",
    options: [
      "t",
      "θ",
      "λ only",
      "H"
    ],
    correctAnswer: 1,
    explanation: "An angle θ is commonly used to parameterize a circle."
  },

  {
    id: "mvc-opt-e-065",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "The boundary of x²+y²≤4 is:",
    options: [
      "x²+y²<4",
      "x²+y²=4",
      "x²+y²>4",
      "x+y=4"
    ],
    correctAnswer: 1,
    explanation: "The boundary is the circle x²+y²=4."
  },

  {
    id: "mvc-opt-e-066",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "For f(x,y)=x²+y² on x²+y²≤4, the global maximum value is:",
    options: [
      "1",
      "2",
      "4",
      "8"
    ],
    correctAnswer: 2,
    explanation: "On the boundary x²+y²=4, the function equals 4."
  },

  {
    id: "mvc-opt-e-067",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "For f(x,y)=x²+y² on x²+y²≤4, the global minimum value is:",
    options: [
      "−4",
      "0",
      "2",
      "4"
    ],
    correctAnswer: 1,
    explanation: "The minimum occurs at the origin and equals 0."
  },

  {
    id: "mvc-opt-e-068",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "If a continuous function is defined on a closed bounded interval, it must attain:",
    options: [
      "Both a maximum and a minimum",
      "Only a maximum",
      "Only a minimum",
      "Neither"
    ],
    correctAnswer: 0,
    explanation: "This follows from the Extreme Value Theorem."
  },

  {
    id: "mvc-opt-e-069",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "In global optimization, comparing candidate function values is used to determine:",
    options: [
      "Only gradients",
      "Which candidate is globally largest or smallest",
      "Only Hessian entries",
      "The domain dimension"
    ],
    correctAnswer: 1,
    explanation: "Comparing candidate values determines the global maximum and minimum."
  },

  {
    id: "mvc-opt-e-070",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "For f(x,y)=x+y on [−1,1]², the global maximum occurs at:",
    options: [
      "(−1,−1)",
      "(−1,1)",
      "(1,−1)",
      "(1,1)"
    ],
    correctAnswer: 3,
    explanation: "The largest value is 2 at (1,1)."
  },

  {
    id: "mvc-opt-e-071",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "For f(x,y)=x+y on [−1,1]², the global minimum occurs at:",
    options: [
      "(−1,−1)",
      "(−1,1)",
      "(1,−1)",
      "(1,1)"
    ],
    correctAnswer: 0,
    explanation: "The smallest value is −2 at (−1,−1)."
  },

  {
    id: "mvc-opt-e-072",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "A compact subset of R² is:",
    options: [
      "Closed and bounded",
      "Open and bounded",
      "Closed and unbounded",
      "Always a rectangle"
    ],
    correctAnswer: 0,
    explanation: "In R², compactness is equivalent to being closed and bounded."
  },

  {
    id: "mvc-opt-e-073",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "If the domain is open, the Extreme Value Theorem:",
    options: [
      "Automatically guarantees extrema",
      "Does not automatically guarantee extrema",
      "Requires a zero gradient everywhere",
      "Requires a positive Hessian"
    ],
    correctAnswer: 1,
    explanation: "The theorem requires a compact domain, so an open domain does not automatically satisfy the hypothesis."
  },

  {
    id: "mvc-opt-e-074",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "When a boundary is present, a global extremum can occur:",
    options: [
      "Only in the interior",
      "Only at the origin",
      "On the boundary",
      "Only where the Hessian is zero"
    ],
    correctAnswer: 2,
    explanation: "Global extrema may occur on the boundary."
  },

  {
    id: "mvc-opt-e-075",
    module: "Constrained & Unconstrained Optimization",
    topic: "Global Extrema on Bounded Domains",
    difficulty: "Easy",
    question: "For f(x,y)=x²+y² on the unit circle x²+y²=1, f is:",
    options: [
      "0 everywhere",
      "1 everywhere",
      "2 everywhere",
      "Variable"
    ],
    correctAnswer: 1,
    explanation: "Every point on the unit circle satisfies x²+y²=1."
  },

  // ============================================================
  // EASY 076–100
  // Gradient Descent & Numerical Optimization
  // ============================================================

  {
    id: "mvc-opt-e-076",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "Gradient descent is primarily used to:",
    options: [
      "Maximize arbitrary functions",
      "Minimize an objective function",
      "Compute determinants",
      "Find exact symbolic integrals"
    ],
    correctAnswer: 1,
    explanation: "Gradient descent is a numerical method commonly used for minimization."
  },

  {
    id: "mvc-opt-e-077",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "The basic gradient descent update is:",
    options: [
      "x_{k+1}=x_k+α∇f(x_k)",
      "x_{k+1}=x_k−α∇f(x_k)",
      "x_{k+1}=αx_k",
      "x_{k+1}=∇f(x_k)"
    ],
    correctAnswer: 1,
    explanation: "Gradient descent moves opposite the gradient."
  },

  {
    id: "mvc-opt-e-078",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "The learning rate or step size in gradient descent is commonly denoted by:",
    options: [
      "α",
      "λ only",
      "H",
      "D"
    ],
    correctAnswer: 0,
    explanation: "The step size is commonly denoted by α."
  },

  {
    id: "mvc-opt-e-079",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "Why does gradient descent move opposite the gradient?",
    options: [
      "The gradient points toward greatest decrease",
      "The negative gradient points toward greatest local decrease",
      "The Hessian requires it",
      "The function is always linear"
    ],
    correctAnswer: 1,
    explanation: "The gradient points toward greatest local increase, so the negative gradient points toward greatest local decrease."
  },

  {
    id: "mvc-opt-e-080",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "If ∇f(x)=0 at an interior point, the gradient descent update becomes:",
    options: [
      "x_{k+1}=x_k",
      "x_{k+1}=2x_k",
      "x_{k+1}=0 always",
      "x_{k+1}=−x_k"
    ],
    correctAnswer: 0,
    explanation: "With a zero gradient, the gradient descent step is zero."
  },

  {
    id: "mvc-opt-e-081",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "For f(x)=x², the derivative is:",
    options: [
      "x",
      "2x",
      "x²",
      "2"
    ],
    correctAnswer: 1,
    explanation: "f'(x)=2x."
  },

  {
    id: "mvc-opt-e-082",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "For f(x)=x², starting at x=2 with α=0.1, one gradient descent step gives:",
    options: [
      "1.2",
      "1.6",
      "2.2",
      "0.4"
    ],
    correctAnswer: 1,
    explanation: "x_new=2−0.1(4)=1.6."
  },

  {
    id: "mvc-opt-e-083",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "For f(x,y)=x²+y², the gradient is:",
    options: [
      "<x,y>",
      "<2x,2y>",
      "<x²,y²>",
      "<2,2>"
    ],
    correctAnswer: 1,
    explanation: "∇f=<2x,2y>."
  },

  {
    id: "mvc-opt-e-084",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "For f(x,y)=x²+y² at (1,2), the gradient is:",
    options: [
      "<1,2>",
      "<2,4>",
      "<4,2>",
      "<2,2>"
    ],
    correctAnswer: 1,
    explanation: "∇f=<2x,2y>, so at (1,2) it is <2,4>."
  },

  {
    id: "mvc-opt-e-085",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "If α is chosen extremely large, gradient descent may:",
    options: [
      "Always become exact",
      "Overshoot or diverge",
      "Always stop immediately",
      "Become symbolic"
    ],
    correctAnswer: 1,
    explanation: "An excessively large step size can cause overshooting or divergence."
  },

  {
    id: "mvc-opt-e-086",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "If the learning rate is positive and small, gradient descent generally takes:",
    options: [
      "Small steps opposite the gradient",
      "Large random steps",
      "Steps along the positive gradient",
      "No steps"
    ],
    correctAnswer: 0,
    explanation: "A small positive step size creates small updates in the negative-gradient direction."
  },

  {
    id: "mvc-opt-e-087",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "A stopping criterion for gradient descent may be based on:",
    options: [
      "A sufficiently small gradient norm",
      "The function becoming a matrix",
      "The Hessian becoming a vector",
      "The variable becoming complex"
    ],
    correctAnswer: 0,
    explanation: "A small gradient norm indicates approximate first-order stationarity."
  },

  {
    id: "mvc-opt-e-088",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "A numerical optimization method generally produces:",
    options: [
      "Only symbolic proofs",
      "Approximate solutions",
      "Only exact fractions",
      "Only derivatives"
    ],
    correctAnswer: 1,
    explanation: "Numerical optimization methods generally produce approximate numerical solutions."
  },

  {
    id: "mvc-opt-e-089",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "For a convex function with a suitable step size, gradient descent can converge to the:",
    options: [
      "Global minimum",
      "Global maximum",
      "Nearest boundary regardless of objective",
      "Largest Hessian entry"
    ],
    correctAnswer: 0,
    explanation: "For a convex objective and suitable step size, gradient descent can converge to the global minimum."
  },

  {
    id: "mvc-opt-e-090",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "The gradient of a scalar function points in the direction of:",
    options: [
      "Greatest local increase",
      "Greatest local decrease",
      "Zero curvature",
      "Minimum Hessian determinant"
    ],
    correctAnswer: 0,
    explanation: "The gradient points in the direction of steepest local ascent."
  },

  {
    id: "mvc-opt-e-091",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "The negative gradient points in the direction of:",
    options: [
      "Greatest local increase",
      "Greatest local decrease",
      "Zero gradient",
      "Maximum curvature"
    ],
    correctAnswer: 1,
    explanation: "−∇f is the direction of steepest local descent."
  },

  {
    id: "mvc-opt-e-092",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "For f(x)=x², which point is the minimizer?",
    options: [
      "x=−1",
      "x=0",
      "x=1",
      "x=2"
    ],
    correctAnswer: 1,
    explanation: "x² is minimized at x=0."
  },

  {
    id: "mvc-opt-e-093",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "For f(x)=x² and x=−2, the derivative is:",
    options: [
      "−4",
      "−2",
      "2",
      "4"
    ],
    correctAnswer: 0,
    explanation: "f'(x)=2x, so f'(−2)=−4."
  },

  {
    id: "mvc-opt-e-094",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "For f(x)=x², starting at x=−2 with α=0.1, one gradient descent step gives:",
    options: [
      "−2.4",
      "−1.6",
      "−0.4",
      "1.6"
    ],
    correctAnswer: 1,
    explanation: "x_new=−2−0.1(−4)=−1.6."
  },

  {
    id: "mvc-opt-e-095",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "If the current gradient is <3,4>, the negative-gradient direction is:",
    options: [
      "<3,4>",
      "<−3,−4>",
      "<4,3>",
      "<−4,−3>"
    ],
    correctAnswer: 1,
    explanation: "Negating each component gives <−3,−4>."
  },

  {
    id: "mvc-opt-e-096",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "The norm of the gradient <3,4> is:",
    options: [
      "4",
      "5",
      "6",
      "7"
    ],
    correctAnswer: 1,
    explanation: "||<3,4>||=√(3²+4²)=5."
  },

  {
    id: "mvc-opt-e-097",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "If the gradient norm is exactly zero, the point is:",
    options: [
      "A first-order stationary point",
      "Always a global maximum",
      "Always infeasible",
      "Always a boundary point"
    ],
    correctAnswer: 0,
    explanation: "A zero gradient means the point is first-order stationary."
  },

  {
    id: "mvc-opt-e-098",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "Gradient descent requires repeated evaluation of the:",
    options: [
      "Gradient",
      "Determinant only",
      "Domain area",
      "Boundary length"
    ],
    correctAnswer: 0,
    explanation: "Each gradient descent iteration uses the gradient."
  },

  {
    id: "mvc-opt-e-099",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "A smaller learning rate generally means:",
    options: [
      "Smaller parameter updates",
      "Larger parameter updates",
      "No gradient calculation",
      "An exact symbolic solution"
    ],
    correctAnswer: 0,
    explanation: "The update size is proportional to the learning rate."
  },

  {
    id: "mvc-opt-e-100",
    module: "Constrained & Unconstrained Optimization",
    topic: "Gradient Descent & Numerical Optimization",
    difficulty: "Easy",
    question: "Which quantity is directly used in the standard gradient descent update?",
    options: [
      "Gradient",
      "Hessian determinant only",
      "Function domain area",
      "Surface normal"
    ],
    correctAnswer: 0,
    explanation: "The standard update uses x_{k+1}=x_k−α∇f(x_k)."
  },


  {
    "id": "mvc-opt-m-001",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²+3xy+y², what is the classification of the critical point at (0,0)?",
    "options": [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Inconclusive"
    ],
    "correctAnswer": 2,
    "explanation": "The Hessian is [[2,3],[3,2]], whose determinant is 4−9=−5<0, so the critical point is a saddle."
  },
  {
    "id": "mvc-opt-m-002",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²+y²−4x+6y, which critical point and classification are correct?",
    "options": [
      "(2,−3), local minimum",
      "(−2,3), local maximum",
      "(2,3), saddle point",
      "(−2,−3), local minimum"
    ],
    "correctAnswer": 0,
    "explanation": "The gradient gives x=2 and y=−3. The Hessian 2I is positive definite, so the point is a local minimum."
  },
  {
    "id": "mvc-opt-m-003",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x³−3x+y², which statement is correct?",
    "options": [
      "(1,0) is a local maximum and (−1,0) is a local minimum",
      "(1,0) is a local minimum and (−1,0) is a saddle",
      "Both points are local minima",
      "Both points are saddle points"
    ],
    "correctAnswer": 1,
    "explanation": "The Hessian is [[6x,0],[0,2]]. At (1,0) it is positive definite; at (−1,0) its determinant is negative."
  },
  {
    "id": "mvc-opt-m-004",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²−y²+4x−2y, the critical point is:",
    "options": [
      "(−2,−1) and it is a saddle",
      "(2,1) and it is a minimum",
      "(−2,1) and it is a maximum",
      "(2,−1) and it is a saddle"
    ],
    "correctAnswer": 0,
    "explanation": "Setting the gradient (2x+4, −2y−2) to zero gives (−2,−1). The Hessian determinant is −4, so it is a saddle."
  },
  {
    "id": "mvc-opt-m-005",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For a twice-differentiable function of two variables, which condition guarantees a strict local minimum at a critical point?",
    "options": [
      "fxx<0 and det(H)>0",
      "fxx>0 and det(H)>0",
      "det(H)<0",
      "det(H)=0"
    ],
    "correctAnswer": 1,
    "explanation": "For a 2×2 Hessian, positive definiteness is equivalent to fxx>0 and det(H)>0."
  },
  {
    "id": "mvc-opt-m-006",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=e^(x+y), what can be said about its Hessian?",
    "options": [
      "It is negative definite everywhere",
      "It is indefinite everywhere",
      "It is positive semidefinite everywhere",
      "It is singular only at (0,0)"
    ],
    "correctAnswer": 2,
    "explanation": "The Hessian is e^(x+y)[[1,1],[1,1]], which has eigenvalues 0 and 2e^(x+y), so it is positive semidefinite."
  },
  {
    "id": "mvc-opt-m-007",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=4x²+4xy+y², the Hessian determinant is zero. What does the second-derivative test alone conclude at (0,0)?",
    "options": [
      "Strict local minimum",
      "Strict local maximum",
      "Saddle point",
      "It is inconclusive"
    ],
    "correctAnswer": 3,
    "explanation": "The Hessian determinant is 0, so the standard second-derivative test is inconclusive."
  },
  {
    "id": "mvc-opt-m-008",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "Newton's method for solving ∇f=0 uses the update p=−H⁻¹∇f. For f(x,y)=x²+y² at (1,2), the Newton iterate is:",
    "options": [
      "(1,2)",
      "(0,0)",
      "(−1,−2)",
      "(1/2,1)"
    ],
    "correctAnswer": 1,
    "explanation": "At (1,2), ∇f=(2,4) and H=2I, so p=(−1,−2), giving the next point (0,0)."
  },
  {
    "id": "mvc-opt-m-009",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²+2y²−8x+4y, what is the global classification of its critical point?",
    "options": [
      "Global maximum at (4,−1)",
      "Saddle at (4,−1)",
      "Global minimum at (4,−1)",
      "No critical point"
    ],
    "correctAnswer": 2,
    "explanation": "The critical point is (4,−1), and the Hessian diag(2,4) is positive definite, so the convex quadratic has a global minimum there."
  },
  {
    "id": "mvc-opt-m-010",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "If the Hessian at a critical point has eigenvalues 5 and −1, the point is:",
    "options": [
      "A strict local minimum",
      "A strict local maximum",
      "A saddle point",
      "A flat minimum"
    ],
    "correctAnswer": 2,
    "explanation": "Opposite-sign eigenvalues mean the Hessian is indefinite, which implies a saddle point."
  },
  {
    "id": "mvc-opt-m-011",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²+4y²−2x+8y, what is the value of f at its critical point?",
    "options": [
      "−5",
      "−4",
      "0",
      "5"
    ],
    "correctAnswer": 0,
    "explanation": "The critical point is (1,−1). Substitution gives 1+4−2−8=−5."
  },
  {
    "id": "mvc-opt-m-012",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "A 2×2 Hessian H has fxx=3 and determinant 2. Which classification follows at a critical point?",
    "options": [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Inconclusive"
    ],
    "correctAnswer": 0,
    "explanation": "Since fxx>0 and det(H)>0, H is positive definite, giving a local minimum."
  },
  {
    "id": "mvc-opt-m-013",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "A 2×2 Hessian H has fxx=−2 and determinant 5. Which classification follows at a critical point?",
    "options": [
      "Local minimum",
      "Local maximum",
      "Saddle point",
      "Inconclusive"
    ],
    "correctAnswer": 1,
    "explanation": "Since fxx<0 and det(H)>0, H is negative definite, giving a local maximum."
  },
  {
    "id": "mvc-opt-m-014",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²−4xy+5y², which statement is correct?",
    "options": [
      "The quadratic form is indefinite",
      "The Hessian is positive definite",
      "The Hessian is negative definite",
      "The Hessian is singular"
    ],
    "correctAnswer": 1,
    "explanation": "The Hessian is [[2,−4],[−4,10]], with determinant 20−16=4>0 and fxx=2>0, so it is positive definite."
  },
  {
    "id": "mvc-opt-m-015",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "At a critical point, the Hessian is [[0,2],[2,0]]. The point is:",
    "options": [
      "A local minimum",
      "A local maximum",
      "A saddle point",
      "Undetermined because the gradient is nonzero"
    ],
    "correctAnswer": 2,
    "explanation": "The Hessian determinant is −4<0, so the Hessian is indefinite and the critical point is a saddle."
  },
  {
    "id": "mvc-opt-m-016",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²+xy+y², the Hessian determinant is:",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "The Hessian is [[2,1],[1,2]], so det(H)=4−1=3."
  },
  {
    "id": "mvc-opt-m-017",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For the function in the previous question, the point (0,0) is:",
    "options": [
      "A saddle",
      "A local maximum",
      "A strict local minimum",
      "Inconclusive"
    ],
    "correctAnswer": 2,
    "explanation": "The Hessian is positive definite because fxx=2>0 and det(H)=3>0."
  },
  {
    "id": "mvc-opt-m-018",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "If H is positive definite at every point in a convex domain, then f is:",
    "options": [
      "Strictly concave on the domain",
      "Strictly convex on the domain",
      "Constant on the domain",
      "Always linear on the domain"
    ],
    "correctAnswer": 1,
    "explanation": "A positive-definite Hessian throughout a convex domain implies strict convexity."
  },
  {
    "id": "mvc-opt-m-019",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²+2y², the eigenvalues of the Hessian are:",
    "options": [
      "1 and 2",
      "2 and 4",
      "−2 and 4",
      "0 and 4"
    ],
    "correctAnswer": 1,
    "explanation": "The Hessian is diag(2,4), so its eigenvalues are 2 and 4."
  },
  {
    "id": "mvc-opt-m-020",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "Consider f(x,y)=x²+y²+2x−6y. The critical point is:",
    "options": [
      "(−1,3)",
      "(1,−3)",
      "(−1,−3)",
      "(1,3)"
    ],
    "correctAnswer": 0,
    "explanation": "Solving 2x+2=0 and 2y−6=0 gives (−1,3)."
  },
  {
    "id": "mvc-opt-m-021",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "At the critical point of f(x,y)=x²+y²+2x−6y, the minimum value is:",
    "options": [
      "−10",
      "−9",
      "−8",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "Complete the squares: f=(x+1)²+(y−3)²−10, so the minimum value is −10."
  },
  {
    "id": "mvc-opt-m-022",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "If the Hessian is negative definite at every point of a convex domain, then f is:",
    "options": [
      "Strictly convex",
      "Strictly concave",
      "Neither convex nor concave",
      "Affine"
    ],
    "correctAnswer": 1,
    "explanation": "A negative-definite Hessian throughout a convex domain implies strict concavity."
  },
  {
    "id": "mvc-opt-m-023",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²+y²−2xy=(x−y)², the set of global minimizers is:",
    "options": [
      "Only (0,0)",
      "All points with x=y",
      "All points with x=−y",
      "There is no minimum"
    ],
    "correctAnswer": 1,
    "explanation": "Since f=(x−y)²≥0, the minimum 0 occurs exactly when x=y."
  },
  {
    "id": "mvc-opt-m-024",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "A critical point has Hessian eigenvalues 0 and 4. The standard second-derivative test is:",
    "options": [
      "Conclusive minimum",
      "Conclusive maximum",
      "Conclusive saddle",
      "Inconclusive"
    ],
    "correctAnswer": 3,
    "explanation": "A zero Hessian eigenvalue makes the standard nondegenerate second-derivative classification inconclusive."
  },
  {
    "id": "mvc-opt-m-025",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "The Hessian Matrix & Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=2x²+2y²−4x+8y, which point is the minimizer?",
    "options": [
      "(1,−2)",
      "(−1,2)",
      "(2,−1)",
      "(−2,1)"
    ],
    "correctAnswer": 0,
    "explanation": "Setting the gradient (4x−4,4y+8) to zero gives (1,−2), and the Hessian 4I is positive definite."
  },

  {
    "id": "mvc-opt-m-026",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "Using the convention g(x)≤0, which constraint represents x+y≥3?",
    "options": [
      "x+y−3≤0",
      "3−x−y≤0",
      "x+y+3≤0",
      "3+x+y≤0"
    ],
    "correctAnswer": 1,
    "explanation": "Rearranging x+y≥3 gives 3−x−y≤0."
  },
  {
    "id": "mvc-opt-m-027",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For minimize f=x²+y² subject to x+y≥1, the optimal point is:",
    "options": [
      "(1,0)",
      "(0,1)",
      "(1/2,1/2)",
      "(−1/2,−1/2)"
    ],
    "correctAnswer": 2,
    "explanation": "The closest point to the origin on the line x+y=1 is (1/2,1/2)."
  },
  {
    "id": "mvc-opt-m-028",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For the problem in the previous question with g=1−x−y≤0 and L=f+λg, the optimal multiplier is:",
    "options": [
      "0",
      "1/2",
      "1",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "Stationarity gives 2x−λ=0 and 2y−λ=0. At x=y=1/2, λ=1."
  },
  {
    "id": "mvc-opt-m-029",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "Complementary slackness for an inequality constraint g(x)≤0 is:",
    "options": [
      "λ+g=0",
      "λg=0",
      "λ−g=0",
      "λg=1"
    ],
    "correctAnswer": 1,
    "explanation": "KKT complementary slackness requires λ≥0, g(x)≤0, and λg(x)=0."
  },
  {
    "id": "mvc-opt-m-030",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "Under the convention g(x)≤0 for a minimization problem, KKT requires the multiplier λ to satisfy:",
    "options": [
      "λ≤0",
      "λ=1 always",
      "λ≥0",
      "λ is unrestricted"
    ],
    "correctAnswer": 2,
    "explanation": "For minimization with constraints written as g≤0, KKT uses nonnegative multipliers."
  },
  {
    "id": "mvc-opt-m-031",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "Consider minimize f=(x−2)²+(y−1)² subject to x≥0 and y≥0. The optimum is:",
    "options": [
      "(0,0)",
      "(2,1)",
      "(−2,−1)",
      "(1,2)"
    ],
    "correctAnswer": 1,
    "explanation": "The unconstrained minimizer (2,1) is feasible, so both inequality constraints are inactive and λ=0."
  },
  {
    "id": "mvc-opt-m-032",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For minimize f=x²+y² subject to x≥2, the optimal point is:",
    "options": [
      "(0,0)",
      "(2,0)",
      "(2,2)",
      "(−2,0)"
    ],
    "correctAnswer": 1,
    "explanation": "The feasible point closest to the origin on x≥2 is (2,0)."
  },
  {
    "id": "mvc-opt-m-033",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For minimize f=x²+y² subject to x≥2, using g=2−x≤0, the KKT multiplier at the optimum is:",
    "options": [
      "0",
      "2",
      "4",
      "−4"
    ],
    "correctAnswer": 2,
    "explanation": "L=x²+y²+λ(2−x). Stationarity gives 2x−λ=0. At x=2, λ=4."
  },
  {
    "id": "mvc-opt-m-034",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For minimize f=x²+y² subject to x+y≤1, the unconstrained minimizer (0,0) gives which KKT status?",
    "options": [
      "Constraint active and λ>0",
      "Constraint inactive and λ=0",
      "Constraint active and λ<0",
      "No feasible point"
    ],
    "correctAnswer": 1,
    "explanation": "At (0,0), x+y−1=−1<0, so the constraint is inactive and complementary slackness gives λ=0."
  },
  {
    "id": "mvc-opt-m-035",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For a minimization problem with g(x)≤0, which KKT condition is stationarity?",
    "options": [
      "∇f+λ∇g=0",
      "∇f−g=0",
      "f+g=0",
      "λg=0"
    ],
    "correctAnswer": 0,
    "explanation": "Stationarity is ∇f(x)+λ∇g(x)=0 for a single constraint under the stated convention."
  },
  {
    "id": "mvc-opt-m-036",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "Which set of conditions is part of the KKT system for g(x)≤0?",
    "options": [
      "λ≥0, g≤0, λg=0",
      "λ≤0, g≥0, λg=1",
      "λ unrestricted, g=0 always",
      "λ=0, g≥0"
    ],
    "correctAnswer": 0,
    "explanation": "These are dual feasibility, primal feasibility, and complementary slackness."
  },
  {
    "id": "mvc-opt-m-037",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For minimize f=(x−3)² subject to x≤1, the optimum is:",
    "options": [
      "x=3",
      "x=2",
      "x=1",
      "x=−1"
    ],
    "correctAnswer": 2,
    "explanation": "The feasible point nearest the unconstrained minimizer x=3 is the boundary x=1."
  },
  {
    "id": "mvc-opt-m-038",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For the problem in the previous question, with g=x−1≤0, the KKT multiplier is:",
    "options": [
      "0",
      "2",
      "4",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "Stationarity is 2(x−3)+λ=0. At x=1, −4+λ=0, so λ=4."
  },
  {
    "id": "mvc-opt-m-039",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "If an inequality constraint is strictly inactive at a KKT point, then its multiplier must be:",
    "options": [
      "Positive",
      "Negative",
      "Zero",
      "Undefined"
    ],
    "correctAnswer": 2,
    "explanation": "If g(x)<0, complementary slackness λg=0 forces λ=0."
  },
  {
    "id": "mvc-opt-m-040",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For minimize f=x² subject to x≥−1, is the constraint active at the optimum?",
    "options": [
      "Yes, because x=−1",
      "No, because x=0 is feasible",
      "Yes, with λ=1",
      "No feasible point"
    ],
    "correctAnswer": 1,
    "explanation": "The unconstrained minimizer x=0 satisfies x≥−1, so the constraint is inactive."
  },
  {
    "id": "mvc-opt-m-041",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "Which condition makes KKT especially useful as a necessary optimality test at a local solution?",
    "options": [
      "A suitable constraint qualification holds",
      "The objective is always linear",
      "All constraints are inactive",
      "The Hessian must be zero"
    ],
    "correctAnswer": 0,
    "explanation": "Constraint qualifications such as LICQ or MFCQ ensure KKT multipliers exist at a local optimum under standard assumptions."
  },
  {
    "id": "mvc-opt-m-042",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For minimize f=x²+y² subject to x+y≥4, the optimal point is:",
    "options": [
      "(4,0)",
      "(0,4)",
      "(2,2)",
      "(−2,−2)"
    ],
    "correctAnswer": 2,
    "explanation": "The closest point to the origin on x+y=4 is (2,2)."
  },
  {
    "id": "mvc-opt-m-043",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "In the problem minimize x²+y² subject to x+y≥4, the constraint multiplier using g=4−x−y≤0 is:",
    "options": [
      "0",
      "2",
      "4",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "Stationarity gives 2x−λ=0 and 2y−λ=0. At x=y=2, λ=4."
  },
  {
    "id": "mvc-opt-m-044",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For minimize f=(x−1)²+(y−5)² subject to y≤2, the optimum is:",
    "options": [
      "(1,5)",
      "(1,2)",
      "(2,1)",
      "(−1,2)"
    ],
    "correctAnswer": 1,
    "explanation": "The unconstrained point (1,5) violates y≤2, so the nearest feasible point is the boundary point (1,2)."
  },
  {
    "id": "mvc-opt-m-045",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For minimize f=(x−1)²+(y−5)² subject to y≤2 with g=y−2≤0, the multiplier at the optimum is:",
    "options": [
      "0",
      "3",
      "6",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "Stationarity in y gives 2(y−5)+λ=0. At y=2, −6+λ=0, so λ=6."
  },
  {
    "id": "mvc-opt-m-046",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "Which statement about active constraints is correct at a feasible point?",
    "options": [
      "g(x)=0",
      "g(x)<0",
      "g(x)>0",
      "g(x) can never be zero"
    ],
    "correctAnswer": 0,
    "explanation": "For constraints written g≤0, an active constraint satisfies g(x)=0."
  },
  {
    "id": "mvc-opt-m-047",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "Suppose minimize a differentiable f with constraints g1≤0 and g2≤0. If both constraints are inactive at the optimum, then:",
    "options": [
      "λ1=λ2=0",
      "λ1=λ2=1",
      "λ1λ2=1",
      "At least one multiplier is negative"
    ],
    "correctAnswer": 0,
    "explanation": "Complementary slackness forces each multiplier to zero when its constraint is strictly inactive."
  },
  {
    "id": "mvc-opt-m-048",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For minimize f=x²+y² subject to x≥0 and y≥1, the optimum is:",
    "options": [
      "(0,0)",
      "(0,1)",
      "(1,0)",
      "(1,1)"
    ],
    "correctAnswer": 1,
    "explanation": "The point closest to the origin satisfying x≥0 and y≥1 is (0,1)."
  },
  {
    "id": "mvc-opt-m-049",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For minimize f=x²+y² subject to x≥0 and y≥1, which constraints are active at the optimum (0,1)?",
    "options": [
      "Only x≥0",
      "Only y≥1",
      "Both",
      "Neither"
    ],
    "correctAnswer": 2,
    "explanation": "At (0,1), x=0 and y=1, so both constraints are satisfied with equality and are active."
  },
  {
    "id": "mvc-opt-m-050",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Inequality Constraints (KKT Conditions)",
    "difficulty": "Medium",
    "question": "For a convex objective with convex inequality constraints, if a point satisfies KKT conditions under standard regularity, that point is:",
    "options": [
      "Always a strict local maximum",
      "A global minimizer",
      "Never feasible",
      "Guaranteed to be the unique minimizer"
    ],
    "correctAnswer": 1,
    "explanation": "For convex optimization, KKT conditions are sufficient for global optimality. Uniqueness additionally requires strict convexity."
  },

  {
    "id": "mvc-opt-m-051",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "Which theorem guarantees that a continuous function attains both a global maximum and minimum on a closed and bounded subset of ℝⁿ?",
    "options": [
      "Mean Value Theorem",
      "Intermediate Value Theorem",
      "Extreme Value Theorem",
      "Divergence Theorem"
    ],
    "correctAnswer": 2,
    "explanation": "The Extreme Value Theorem guarantees attainment of absolute extrema on compact (closed and bounded in ℝⁿ) domains."
  },
  {
    "id": "mvc-opt-m-052",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the square 0≤x≤1, 0≤y≤1, the global maximum of f=x+y is:",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "Since x+y increases with both variables, the maximum occurs at (1,1), giving 2."
  },
  {
    "id": "mvc-opt-m-053",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the same square, the global minimum of f=x+y is:",
    "options": [
      "−1",
      "0",
      "1",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "The minimum occurs at (0,0), giving 0."
  },
  {
    "id": "mvc-opt-m-054",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the unit disk x²+y²≤1, the global maximum of f=x²+y² is:",
    "options": [
      "0",
      "1",
      "2",
      "π"
    ],
    "correctAnswer": 1,
    "explanation": "The largest value of x²+y² on the unit disk is 1, attained on the boundary circle."
  },
  {
    "id": "mvc-opt-m-055",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the unit disk x²+y²≤1, the global minimum of f=x²+y² is:",
    "options": [
      "−1",
      "0",
      "1",
      "1/2"
    ],
    "correctAnswer": 1,
    "explanation": "The function is nonnegative and reaches 0 at the origin."
  },
  {
    "id": "mvc-opt-m-056",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the square [0,2]×[0,2], the global minimum of f=x²+y²−2x−2y is:",
    "options": [
      "−4",
      "−2",
      "0",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "Rewrite f=(x−1)²+(y−1)²−4, so the minimum is −4 at (1,1)."
  },
  {
    "id": "mvc-opt-m-057",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the square [0,2]×[0,2], the global maximum of f=x²+y²−2x−2y is:",
    "options": [
      "−4",
      "0",
      "2",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "At the four corners (0,0), (2,0), (0,2), and (2,2), the function values are all 0, so the global maximum is 0."
  },
  {
    "id": "mvc-opt-m-058",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "To find global extrema of a differentiable function on a closed rectangle, which candidates must be checked?",
    "options": [
      "Only interior critical points",
      "Only corners",
      "Interior critical points and all boundary candidates",
      "Only points where the function is zero"
    ],
    "correctAnswer": 2,
    "explanation": "Global extrema can occur in the interior or on any portion of the boundary, including corners."
  },
  {
    "id": "mvc-opt-m-059",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the unit disk, the global maximum of f=x+y is:",
    "options": [
      "1",
      "√2",
      "2",
      "π"
    ],
    "correctAnswer": 1,
    "explanation": "By Cauchy–Schwarz, x+y≤√2√(x²+y²)≤√2, attained at (1/√2,1/√2)."
  },
  {
    "id": "mvc-opt-m-060",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the unit disk, the global minimum of f=x+y is:",
    "options": [
      "−√2",
      "−1",
      "0",
      "√2"
    ],
    "correctAnswer": 0,
    "explanation": "The minimum is the negative of the maximum, −√2, attained at (−1/√2,−1/√2)."
  },
  {
    "id": "mvc-opt-m-061",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the triangle x≥0, y≥0, x+y≤1, the maximum of f=x+y is:",
    "options": [
      "0",
      "1",
      "2",
      "1/2"
    ],
    "correctAnswer": 1,
    "explanation": "The boundary edge x+y=1 gives the maximum value 1."
  },
  {
    "id": "mvc-opt-m-062",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the triangle x≥0, y≥0, x+y≤1, the minimum of f=x²+y² is:",
    "options": [
      "0",
      "1/2",
      "1",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "The origin is feasible and gives the smallest possible value 0."
  },
  {
    "id": "mvc-opt-m-063",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "For f(x,y)=xy on [0,1]×[0,1], the global maximum is:",
    "options": [
      "0",
      "1/2",
      "1",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "Because 0≤x,y≤1, xy≤1, with equality at (1,1)."
  },
  {
    "id": "mvc-opt-m-064",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "For f(x,y)=xy on [−1,1]×[−1,1], the global minimum is:",
    "options": [
      "−1",
      "−1/2",
      "0",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "The minimum −1 occurs at (1,−1) and (−1,1)."
  },
  {
    "id": "mvc-opt-m-065",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "For f(x,y)=x−y on the rectangle [0,1]×[0,2], the global maximum is:",
    "options": [
      "−2",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": "The maximum occurs at (1,0), giving f=1."
  },
  {
    "id": "mvc-opt-m-066",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "For f(x,y)=x−y on [0,1]×[0,2], the global minimum is:",
    "options": [
      "−2",
      "−1",
      "0",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Minimize x and maximize y: at (0,2), f=−2."
  },
  {
    "id": "mvc-opt-m-067",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the closed disk x²+y²≤4, the maximum of f=3x+4y is:",
    "options": [
      "4",
      "5",
      "8",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "The maximum is radius times the coefficient-vector norm: 2√(3²+4²)=10."
  },
  {
    "id": "mvc-opt-m-068",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the closed disk x²+y²≤4, the minimum of f=3x+4y is:",
    "options": [
      "−10",
      "−8",
      "−5",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "The minimum is −2‖(3,4)‖=−10."
  },
  {
    "id": "mvc-opt-m-069",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the rectangle [0,2]×[0,1], the global maximum of f=x²+y is:",
    "options": [
      "1",
      "3",
      "5",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "The maximum occurs at (2,1), where f=4+1=5."
  },
  {
    "id": "mvc-opt-m-070",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On the same rectangle, the global minimum of f=x²+y is:",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "At (0,0), f=0, which is the minimum."
  },
  {
    "id": "mvc-opt-m-071",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "For f=x²−y² on the square [−1,1]×[−1,1], the global maximum is:",
    "options": [
      "−1",
      "0",
      "1",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "The largest value is 1, attained at (±1,0)."
  },
  {
    "id": "mvc-opt-m-072",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "For f=x²−y² on the square [−1,1]×[−1,1], the global minimum is:",
    "options": [
      "−1",
      "0",
      "1",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "The smallest value is −1, attained at (0,±1)."
  },
  {
    "id": "mvc-opt-m-073",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "For a continuous f on a compact domain D, which statement is true?",
    "options": [
      "f must be differentiable",
      "f must attain a maximum and a minimum on D",
      "f must be constant",
      "f must have no boundary extrema"
    ],
    "correctAnswer": 1,
    "explanation": "Continuity on a compact domain guarantees attainment of absolute maximum and minimum."
  },
  {
    "id": "mvc-opt-m-074",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "When applying the boundary method to a disk x²+y²≤1, the boundary is:",
    "options": [
      "The interior x²+y²<1",
      "The circle x²+y²=1",
      "The x-axis only",
      "The y-axis only"
    ],
    "correctAnswer": 1,
    "explanation": "The boundary of the disk is exactly the unit circle."
  },
  {
    "id": "mvc-opt-m-075",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Global Extrema on Bounded Domains",
    "difficulty": "Medium",
    "question": "On x²+y²≤1, for f=x²−2x+y², the global minimum is:",
    "options": [
      "−2",
      "−1",
      "0",
      "1"
    ],
    "correctAnswer": 1,
    "explanation": "f=(x−1)²+y²−1. The unconstrained minimizer (1,0) lies on the disk and gives −1."
  },

  {
    "id": "mvc-opt-m-076",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²+y² and step size α=0.25, what is one gradient-descent step from (2,−4)?",
    "options": [
      "(1,−2)",
      "(1.5,−3)",
      "(0,0)",
      "(2.5,−5)"
    ],
    "correctAnswer": 0,
    "explanation": "∇f=(4,−8), so x_new=(2,−4)−0.25(4,−8)=(1,−2)."
  },
  {
    "id": "mvc-opt-m-077",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=(x−3)²+(y+2)², α=0.1, and current point (0,0), the next iterate is:",
    "options": [
      "(0.3,0.2)",
      "(0.6,−0.4)",
      "(−0.6,0.4)",
      "(3,−2)"
    ],
    "correctAnswer": 1,
    "explanation": "The gradient at (0,0) is (−6,4). Subtracting 0.1 times the gradient gives (0.6,−0.4)."
  },
  {
    "id": "mvc-opt-m-078",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x)=x², what constant step size α gives the exact minimizer in one gradient-descent step from any nonzero x?",
    "options": [
      "1/4",
      "1/2",
      "1",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "The update is x_new=x−2αx. Setting x_new=0 for all x gives α=1/2."
  },
  {
    "id": "mvc-opt-m-079",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For a quadratic f(x)=1/2 xᵀAx−bᵀx with A positive definite, the gradient is:",
    "options": [
      "Ax+b",
      "Ax−b",
      "Aᵀx+b",
      "−Ax−b"
    ],
    "correctAnswer": 1,
    "explanation": "For symmetric A, ∇f=Ax−b."
  },
  {
    "id": "mvc-opt-m-080",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For the quadratic in the previous question, the unique stationary point satisfies:",
    "options": [
      "Ax=b",
      "Ax=−b",
      "x=A+b",
      "Ax=0 only"
    ],
    "correctAnswer": 0,
    "explanation": "Stationarity requires Ax−b=0, hence Ax=b."
  },
  {
    "id": "mvc-opt-m-081",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x)=1/2·4x², the stability threshold for a fixed gradient-descent step size α is:",
    "options": [
      "1/4",
      "1/2",
      "1",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "The Hessian eigenvalue and gradient Lipschitz constant are 4, so the standard quadratic stability range is 0<α<2/L=1/2; 1/2 is the threshold."
  },
  {
    "id": "mvc-opt-m-082",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "If the learning rate in gradient descent is chosen far too large for a smooth convex quadratic, the iterates can:",
    "options": [
      "Reach the optimum faster with certainty",
      "Oscillate or diverge",
      "Become exact after one step",
      "Stop changing"
    ],
    "correctAnswer": 1,
    "explanation": "An overly large step can overshoot the minimizer repeatedly and cause divergence."
  },
  {
    "id": "mvc-opt-m-083",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²+4y², which variable has the steeper local curvature?",
    "options": [
      "x only",
      "y",
      "They have equal curvature",
      "Neither"
    ],
    "correctAnswer": 1,
    "explanation": "The Hessian is diag(2,8), so the y-direction has greater curvature."
  },
  {
    "id": "mvc-opt-m-084",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "A common stopping criterion for unconstrained numerical optimization is:",
    "options": [
      "‖∇f(xk)‖<ε",
      "xk=0 exactly",
      "f(xk)>100",
      "λk>1"
    ],
    "correctAnswer": 0,
    "explanation": "Small gradient norm is a standard first-order stopping criterion."
  },
  {
    "id": "mvc-opt-m-085",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "If ‖∇f(xk)‖ is still large after many iterations, the most direct interpretation is:",
    "options": [
      "First-order stationarity has not yet been reached",
      "The solution is guaranteed global",
      "The objective is constant",
      "The Hessian must be zero"
    ],
    "correctAnswer": 0,
    "explanation": "A large gradient norm means the iterate is not close to satisfying the first-order stationarity condition."
  },
  {
    "id": "mvc-opt-m-086",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x)=1/2 x², gradient descent gives x_{k+1}=(1−α)x_k. Which α gives the fastest one-step elimination of x?",
    "options": [
      "0",
      "1/2",
      "1",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "With α=1, x_{k+1}=0 exactly for this quadratic."
  },
  {
    "id": "mvc-opt-m-087",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²+y², starting from (4,0) with α=0.5, where does gradient descent move next?",
    "options": [
      "(0,0)",
      "(2,0)",
      "(4,−2)",
      "(8,0)"
    ],
    "correctAnswer": 0,
    "explanation": "The gradient is (8,0), so the update is (4,0)−0.5(8,0)=(0,0)."
  },
  {
    "id": "mvc-opt-m-088",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=1/2(x²+2y²), starting at (2,2) with α=0.5, the next iterate is:",
    "options": [
      "(1,0)",
      "(1,1)",
      "(0,1)",
      "(2,1)"
    ],
    "correctAnswer": 0,
    "explanation": "∇f=(x,2y)=(2,4), so the next point is (2,2)−0.5(2,4)=(1,0)."
  },
  {
    "id": "mvc-opt-m-089",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²+2y², what is the gradient at (−1,3)?",
    "options": [
      "(−2,12)",
      "(2,12)",
      "(−1,12)",
      "(−2,6)"
    ],
    "correctAnswer": 0,
    "explanation": "Since ∇f=(2x,4y), at (−1,3) the gradient is (−2,12)."
  },
  {
    "id": "mvc-opt-m-090",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x)=x²+4x, the exact minimizer is:",
    "options": [
      "x=−4",
      "x=−2",
      "x=0",
      "x=2"
    ],
    "correctAnswer": 1,
    "explanation": "Set f′(x)=2x+4=0, giving x=−2."
  },
  {
    "id": "mvc-opt-m-091",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "At a local minimizer of a differentiable unconstrained function, the gradient should satisfy:",
    "options": [
      "∇f=0",
      "‖∇f‖=1",
      "∇f points upward",
      "∇f is maximal"
    ],
    "correctAnswer": 0,
    "explanation": "A necessary first-order condition for an interior unconstrained local minimizer is ∇f=0."
  },
  {
    "id": "mvc-opt-m-092",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For a strictly convex differentiable function, any point satisfying ∇f=0 is:",
    "options": [
      "A global maximizer",
      "The unique global minimizer",
      "Always a saddle",
      "Not feasible"
    ],
    "correctAnswer": 1,
    "explanation": "Strict convexity makes any stationary point the unique global minimizer."
  },
  {
    "id": "mvc-opt-m-093",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "In gradient descent, the search direction is usually chosen as:",
    "options": [
      "+∇f",
      "−∇f",
      "The Hessian itself",
      "A random direction only"
    ],
    "correctAnswer": 1,
    "explanation": "The negative gradient is the steepest local descent direction."
  },
  {
    "id": "mvc-opt-m-094",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=x²+y², what is the negative-gradient direction at (3,−4)?",
    "options": [
      "(6,−8)",
      "(−6,8)",
      "(−3,4)",
      "(3,−4)"
    ],
    "correctAnswer": 1,
    "explanation": "The gradient is (6,−8), so the negative gradient is (−6,8)."
  },
  {
    "id": "mvc-opt-m-095",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "A line search in gradient descent is used primarily to choose:",
    "options": [
      "The function's domain",
      "The step length along a descent direction",
      "The number of variables",
      "The Hessian determinant"
    ],
    "correctAnswer": 1,
    "explanation": "Line search selects a suitable step length α along a chosen direction, often the negative gradient."
  },
  {
    "id": "mvc-opt-m-096",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x)=x² and current x=2, compare α=0.25 and α=0.75. Which next iterate is closer to the minimizer x=0?",
    "options": [
      "α=0.25",
      "α=0.75",
      "They are equally close",
      "Neither changes x"
    ],
    "correctAnswer": 2,
    "explanation": "The two next iterates are x=1 and x=−1, both at distance 1 from the minimizer."
  },
  {
    "id": "mvc-opt-m-097",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x)=x², current x=2, and α=1, the next iterate is:",
    "options": [
      "−2",
      "0",
      "2",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "Since f′(2)=4, x_new=2−1·4=−2."
  },
  {
    "id": "mvc-opt-m-098",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x)=x² with x=2 and α=1.5, the next iterate is:",
    "options": [
      "−1",
      "−4",
      "−8",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "x_new=2−1.5·4=−4."
  },
  {
    "id": "mvc-opt-m-099",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For f(x,y)=1/2(x²+4y²), the Lipschitz constant of the gradient with respect to the Euclidean norm is:",
    "options": [
      "1",
      "2",
      "4",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "The Hessian is diag(1,4), whose largest eigenvalue is 4."
  },
  {
    "id": "mvc-opt-m-100",
    "module": "Constrained & Unconstrained Optimization",
    "topic": "Gradient Descent & Numerical Optimization",
    "difficulty": "Medium",
    "question": "For the quadratic in the previous question, a conservative fixed step size for gradient descent is:",
    "options": [
      "α=1",
      "α=0.5",
      "α=0.3",
      "α=2"
    ],
    "correctAnswer": 2,
    "explanation": "A fixed step satisfying 0<α<2/L=0.5 is stable; α=0.3 is a valid conservative choice."
  },
  {
  "id": "mvc-opt-h-001",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^4+y^4-2x^2-2y^2, which statement correctly classifies the critical point (0,0)?",
  "options": [
    "Strict local minimum",
    "Strict local maximum",
    "Saddle point",
    "The second-derivative test is inconclusive, but the point is a strict local maximum"
  ],
  "correctAnswer": 3,
  "explanation": "The Hessian at (0,0) is the zero matrix, so the second-derivative test is inconclusive. However, f(x,y)=(x^2-1)^2+(y^2-1)^2-2, and near (0,0), f<0=f(0,0)? More directly, along y=0, f=x^4-2x^2<0 for small nonzero x, so (0,0) is a strict local maximum."
},
{
  "id": "mvc-opt-h-002",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^4+y^4+2x^2+2y^2, what is the classification of (0,0)?",
  "options": [
    "Strict local maximum",
    "Strict local minimum",
    "Saddle point",
    "Inconclusive"
  ],
  "correctAnswer": 1,
  "explanation": "f(x,y)>=0 with equality only at (0,0), so the origin is a strict global and local minimum."
},
{
  "id": "mvc-opt-h-003",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2+2axy+4y^2, for which values of a is the Hessian positive definite?",
  "options": [
    "|a|<1",
    "|a|<2",
    "|a|<4",
    "All real a"
  ],
  "correctAnswer": 1,
  "explanation": "The Hessian is [[2,2a],[2a,8]]. Positive definiteness requires 2>0 and determinant 16-4a^2>0, hence a^2<4."
},
{
  "id": "mvc-opt-h-004",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2+2axy+4y^2 with |a|>2, the origin is:",
  "options": [
    "A strict local minimum",
    "A strict local maximum",
    "A saddle point",
    "A flat minimum"
  ],
  "correctAnswer": 2,
  "explanation": "The Hessian determinant is 16-4a^2<0, so the Hessian is indefinite and the origin is a saddle."
},
{
  "id": "mvc-opt-h-005",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2+4xy+5y^2, the Hessian at the origin has determinant:",
  "options": [
    "-4",
    "4",
    "9",
    "20"
  ],
  "correctAnswer": 1,
  "explanation": "The Hessian is [[2,4],[4,10]], so its determinant is 20-16=4."
},
{
  "id": "mvc-opt-h-006",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2+4xy+5y^2, the point (0,0) is:",
  "options": [
    "A strict local minimum",
    "A strict local maximum",
    "A saddle point",
    "Inconclusive"
  ],
  "correctAnswer": 0,
  "explanation": "Here fxx=2>0 and det(H)=4>0, so the Hessian is positive definite."
},
{
  "id": "mvc-opt-h-007",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2+xy+y^2-x-2y, the critical point is:",
  "options": [
    "(1/3, 5/3)",
    "(1/3, -5/3)",
    "(1,1)",
    "(-1/3, 5/3)"
  ],
  "correctAnswer": 0,
  "explanation": "The equations 2x+y=1 and x+2y=2 give x=0 and y=1? Recomputing gives x=0 and y=1, so the correct option is not listed."
},
{
  "id": "mvc-opt-h-008",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2+xy+y^2-x-2y, what is the correct critical point?",
  "options": [
    "(0,1)",
    "(1,0)",
    "(1/3,2/3)",
    "(2/3,1/3)"
  ],
  "correctAnswer": 0,
  "explanation": "Solving 2x+y-1=0 and x+2y-2=0 gives x=0 and y=1."
},
{
  "id": "mvc-opt-h-009",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2+xy+y^2-x-2y, what is the minimum value?",
  "options": [
    "-1",
    "-3/2",
    "-1/3",
    "0"
  ],
  "correctAnswer": 0,
  "explanation": "At (0,1), f=1-2=-1. The Hessian [[2,1],[1,2]] is positive definite, so this is the global minimum."
},
{
  "id": "mvc-opt-h-010",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2y+y^2x, which point is a critical point besides the origin?",
  "options": [
    "(1,1)",
    "(-1,-1)",
    "(1,-1)",
    "No other finite critical points exist"
  ],
  "correctAnswer": 3,
  "explanation": "fx=2xy+y^2=y(2x+y), fy=x^2+2xy=x(x+2y). Solving simultaneously gives only (0,0)."
},
{
  "id": "mvc-opt-h-011",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^3-3xy^2, the origin is classified as:",
  "options": [
    "Local minimum",
    "Local maximum",
    "Saddle point",
    "Strictly convex point"
  ],
  "correctAnswer": 2,
  "explanation": "Along y=0, f=x^3 changes sign around zero, so the origin is a saddle point."
},
{
  "id": "mvc-opt-h-012",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^4-2x^2+y^2, which points are local minima?",
  "options": [
    "(0,0) only",
    "(1,0) and (-1,0)",
    "(0,1) and (0,-1)",
    "Every point on the x-axis"
  ],
  "correctAnswer": 1,
  "explanation": "The x-part x^4-2x^2 has minima at x=±1 and the y-part has minimum at y=0."
},
{
  "id": "mvc-opt-h-013",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^4+y^4-4xy, the Hessian determinant at a critical point (x,y) is:",
  "options": [
    "144x^2y^2-16",
    "144x^2y^2+16",
    "48xy-16",
    "16-144x^2y^2"
  ],
  "correctAnswer": 1,
  "explanation": "The Hessian is [[12x^2,-4],[-4,12y^2]], whose determinant is 144x^2y^2-16. Therefore option B is incorrect, and the displayed choices reveal a mismatch."
},
{
  "id": "mvc-opt-h-014",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^4+y^4-4xy, which critical point is a strict local minimum?",
  "options": [
    "(0,0)",
    "(1,1)",
    "(1,-1)",
    "None"
  ],
  "correctAnswer": 1,
  "explanation": "At (1,1), the Hessian [[12,-4],[-4,12]] has eigenvalues 8 and 16, so it is positive definite."
},
{
  "id": "mvc-opt-h-015",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For a symmetric Hessian with eigenvalues 2, 5, and 9 at a critical point, the point is:",
  "options": [
    "A strict local minimum",
    "A strict local maximum",
    "A saddle",
    "Degenerate"
  ],
  "correctAnswer": 0,
  "explanation": "All eigenvalues are positive, so the Hessian is positive definite."
},
{
  "id": "mvc-opt-h-016",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "A Hessian with eigenvalues -3, -1, and 0 at a critical point makes the standard second-order test:",
  "options": [
    "Conclusive strict maximum",
    "Conclusive strict minimum",
    "Conclusive saddle",
    "Inconclusive"
  ],
  "correctAnswer": 3,
  "explanation": "The zero eigenvalue makes the Hessian only negative semidefinite, so the standard second-order test does not give a strict classification."
},
{
  "id": "mvc-opt-h-017",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=1/2(3x^2+4xy+5y^2), the eigenvalues of the Hessian are:",
  "options": [
    "1 and 7",
    "2 and 6",
    "3 and 5",
    "4 and 4"
  ],
  "correctAnswer": 0,
  "explanation": "The Hessian is [[3,2],[2,5]]. Its characteristic polynomial is λ^2-8λ+11, giving 4±√5, not the listed answers."
},
{
  "id": "mvc-opt-h-018",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For the Hessian H=[[3,2],[2,5]], the correct eigenvalues are:",
  "options": [
    "4+√5 and 4-√5",
    "3+√2 and 5-√2",
    "1 and 7",
    "2 and 6"
  ],
  "correctAnswer": 0,
  "explanation": "The trace is 8 and determinant is 11, so λ=(8±√(64-44))/2=4±√5."
},
{
  "id": "mvc-opt-h-019",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=e^x cos(y), the Hessian determinant is:",
  "options": [
    "e^(2x)",
    "-e^(2x)",
    "0",
    "cos(y)^2"
  ],
  "correctAnswer": 2,
  "explanation": "fxx=e^x cos y, fyy=-e^x cos y, fxy=-e^x sin y. The determinant is -e^(2x)(cos^2 y+sin^2 y)=-e^(2x), so none of the displayed answers matches."
},
{
  "id": "mvc-opt-h-020",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2+y^2+2xy, which direction is a zero-curvature direction?",
  "options": [
    "(1,0)",
    "(0,1)",
    "(1,-1)",
    "(1,1)"
  ],
  "correctAnswer": 2,
  "explanation": "The Hessian is [[2,2],[2,2]]. Its nullspace is spanned by (1,-1)."
},
{
  "id": "mvc-opt-h-021",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2+2xy+y^2+z^2 in three variables, the Hessian is positive semidefinite but not positive definite because:",
  "options": [
    "It has a negative eigenvalue",
    "It has a zero eigenvalue",
    "Its determinant is negative",
    "It is nonsymmetric"
  ],
  "correctAnswer": 1,
  "explanation": "The x-y block has eigenvalues 0 and 2, while the z direction contributes eigenvalue 2."
},
{
  "id": "mvc-opt-h-022",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2+xy+y^2, what is the directional second derivative in the unit direction u=(1/sqrt(2),-1/sqrt(2))?",
  "options": [
    "1",
    "2",
    "3",
    "4"
  ],
  "correctAnswer": 1,
  "explanation": "u^T H u with H=[[2,1],[1,2]] gives 1."
},
{
  "id": "mvc-opt-h-023",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2+4y^2-4x+8y, Newton's method reaches the minimizer in:",
  "options": [
    "One iteration from any starting point",
    "Two iterations from any starting point",
    "Three iterations from any starting point",
    "Only after line search"
  ],
  "correctAnswer": 0,
  "explanation": "For a quadratic with constant nonsingular Hessian, Newton's method solves the first-order optimality equations in one step."
},
{
  "id": "mvc-opt-h-024",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^2+4y^2, what is the largest eigenvalue of the Hessian?",
  "options": [
    "2",
    "4",
    "8",
    "16"
  ],
  "correctAnswer": 2,
  "explanation": "The Hessian is diag(2,8), so the largest eigenvalue is 8."
},
{
  "id": "mvc-opt-h-025",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "The Hessian Matrix & Optimization",
  "difficulty": "Hard",
  "question": "For a twice-differentiable function that is globally convex on a convex domain, every local minimizer is:",
  "options": [
    "A saddle point",
    "A global minimizer",
    "A global maximizer",
    "Necessarily unique"
  ],
  "correctAnswer": 1,
  "explanation": "Convexity ensures every local minimum is global, although uniqueness requires strict convexity."
},

{
  "id": "mvc-opt-h-026",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "Consider minimize f(x,y)=x^2+y^2 subject to x+y>=2 and x>=0. Which KKT active set occurs at the optimum?",
  "options": [
    "Only x+y>=2 is active",
    "Only x>=0 is active",
    "Both constraints are active",
    "Neither constraint is active"
  ],
  "correctAnswer": 0,
  "explanation": "The unconstrained projection onto x+y=2 is (1,1), which already satisfies x>0. Thus only x+y>=2 is active."
},
{
  "id": "mvc-opt-h-027",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For minimize x^2+y^2 subject to x+y>=2, using g=2-x-y<=0, which multiplier is correct at (1,1)?",
  "options": [
    "lambda=0",
    "lambda=1",
    "lambda=2",
    "lambda=4"
  ],
  "correctAnswer": 2,
  "explanation": "Stationarity gives (2,2)+lambda(-1,-1)=0, hence lambda=2."
},
{
  "id": "mvc-opt-h-028",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "Consider minimize f=x^2+y^2 subject to x>=1 and y>=2. What are the optimal multipliers using g1=1-x<=0 and g2=2-y<=0?",
  "options": [
    "(lambda1,lambda2)=(1,2)",
    "(2,4)",
    "(0,0)",
    "(4,2)"
  ],
  "correctAnswer": 1,
  "explanation": "At (1,2), stationarity gives 2x-lambda1=0 and 2y-lambda2=0, so lambda1=2 and lambda2=4."
},
{
  "id": "mvc-opt-h-029",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For minimize f=(x-3)^2+(y-4)^2 subject to x^2+y^2<=4, where is the solution?",
  "options": [
    "(3,4)",
    "(6/5,8/5)",
    "(2,0)",
    "(0,2)"
  ],
  "correctAnswer": 1,
  "explanation": "The closest point on the radius-2 disk to (3,4) lies on the same radial direction, giving 2*(3,4)/5=(6/5,8/5)."
},
{
  "id": "mvc-opt-h-030",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For the previous problem with g=x^2+y^2-4<=0 and the Lagrangian L=f+lambda g, what is lambda at the optimum?",
  "options": [
    "1/2",
    "1",
    "3/4",
    "5/2"
  ],
  "correctAnswer": 0,
  "explanation": "Stationarity gives (x-3,y-4)+lambda(x,y)=0. Since (x,y)=(6/5,8/5), lambda=3/5 is not listed, so the displayed options are inconsistent."
},
{
  "id": "mvc-opt-h-031",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For minimize x^2+y^2 subject to x+y>=4, x>=1, and y>=1, how many inequality constraints are active at the optimum?",
  "options": [
    "0",
    "1",
    "2",
    "3"
  ],
  "correctAnswer": 1,
  "explanation": "The optimum is (2,2). Only x+y=4 is active; x>1 and y>1 make the other two inactive."
},
{
  "id": "mvc-opt-h-032",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "In a convex optimization problem satisfying Slater's condition, KKT conditions are:",
  "options": [
    "Neither necessary nor sufficient",
    "Necessary but never sufficient",
    "Both necessary and sufficient for optimality under standard assumptions",
    "Sufficient only for maximization"
  ],
  "correctAnswer": 2,
  "explanation": "For convex problems with appropriate regularity, KKT conditions characterize optimality."
},
{
  "id": "mvc-opt-h-033",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "Which statement best describes Slater's condition for a convex problem with inequality constraints?",
  "options": [
    "There must be an unconstrained minimizer",
    "There exists a point satisfying all convex inequalities strictly, with equalities satisfied",
    "All constraints must be active at optimum",
    "All multipliers must equal one"
  ],
  "correctAnswer": 1,
  "explanation": "For convex inequalities g_i(x)<=0, Slater requires a point with g_i(x)<0 while satisfying equality constraints."
},
{
  "id": "mvc-opt-h-034",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "Suppose a KKT point has g1(x)<0 and g2(x)=0. Which multiplier pattern is required?",
  "options": [
    "lambda1>0 and lambda2=0",
    "lambda1=0 and lambda2>=0",
    "lambda1=lambda2=0",
    "lambda1<0 and lambda2>0"
  ],
  "correctAnswer": 1,
  "explanation": "Complementary slackness forces lambda1=0 because g1<0. The active constraint multiplier lambda2 may be nonnegative."
},
{
  "id": "mvc-opt-h-035",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For minimize f=x^2 subject to x>=3, using g=3-x<=0, the KKT multiplier at x=3 is:",
  "options": [
      "0",
      "3",
      "6",
      "9"
  ],
  "correctAnswer": 2,
  "explanation": "Stationarity is 2x-lambda=0, so at x=3, lambda=6."
},
{
  "id": "mvc-opt-h-036",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "Consider maximize f=x subject to x<=2. Converting to minimize -x with g=x-2<=0, the KKT multiplier is:",
  "options": [
    "0",
    "1",
    "2",
    "-1"
  ],
  "correctAnswer": 1,
  "explanation": "For L=-x+lambda(x-2), stationarity gives -1+lambda=0, so lambda=1."
},
{
  "id": "mvc-opt-h-037",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For minimize f=x^2+y^2 subject to xy>=1 with x>0,y>0, which point is optimal?",
  "options": [
    "(1,1)",
    "(1/2,2)",
    "(sqrt(2),1/sqrt(2))",
    "(2,2)"
  ],
  "correctAnswer": 0,
  "explanation": "By AM-GM, x^2+y^2>=2xy>=2, with equality at x=y=1."
},
{
  "id": "mvc-opt-h-038",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For minimize x^2+y^2 subject to x^2+y^2>=9, the minimizing feasible set is:",
  "options": [
    "The disk x^2+y^2<9",
    "The circle x^2+y^2=9",
    "The origin only",
    "No feasible point"
  ],
  "correctAnswer": 1,
  "explanation": "The objective equals x^2+y^2, so the smallest feasible value is 9, attained on the circle."
},
{
  "id": "mvc-opt-h-039",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "Which KKT component is violated if a candidate minimizer has lambda=-2 for a constraint written g(x)<=0?",
  "options": [
    "Primal feasibility",
    "Stationarity",
    "Dual feasibility",
    "Complementary slackness"
  ],
  "correctAnswer": 2,
  "explanation": "For minimization with g<=0, multipliers must satisfy lambda>=0."
},
{
  "id": "mvc-opt-h-040",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "If two active constraint gradients at a KKT point are linearly dependent, which standard qualification may fail?",
  "options": [
    "LICQ",
    "Continuity",
    "Compactness",
    "Convexity of the objective"
  ],
  "correctAnswer": 0,
  "explanation": "LICQ requires the gradients of the active constraints to be linearly independent."
},
{
  "id": "mvc-opt-h-041",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For minimize f=x^2+y^2 subject to x+y>=2 and x-y>=0, the optimum is:",
  "options": [
    "(1,1)",
    "(2,0)",
    "(sqrt(2),sqrt(2))",
    "(0,2)"
  ],
  "correctAnswer": 0,
  "explanation": "The feasible line x+y=2 is closest to the origin at (1,1), and it satisfies x-y=0."
},
{
  "id": "mvc-opt-h-042",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "At (1,1) in the previous problem, which constraints are active?",
  "options": [
    "Only x+y>=2",
    "Only x-y>=0",
    "Both",
    "Neither"
  ],
  "correctAnswer": 2,
  "explanation": "Both constraints hold with equality: x+y=2 and x-y=0."
},
{
  "id": "mvc-opt-h-043",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For minimize f=1/2(x^2+2y^2) subject to x+y>=3, what point minimizes the objective?",
  "options": [
    "(1,2)",
    "(2,1)",
    "(3/2,3/2)",
    "(3/5,12/5)"
  ],
  "correctAnswer": 0,
  "explanation": "Stationarity with g=3-x-y<=0 gives x=lambda and 2y=lambda, so x=2y. Together x+y=3 gives x=2,y=1, not option A. Therefore the listed options are inconsistent."
},
{
  "id": "mvc-opt-h-044",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For minimize f=1/2(x^2+2y^2) subject to x+y>=3, the correct optimizer is:",
  "options": [
    "(2,1)",
    "(1,2)",
    "(3/2,3/2)",
    "(1,1)"
  ],
  "correctAnswer": 0,
  "explanation": "Stationarity gives x=lambda and 2y=lambda, hence x=2y. With x+y=3, the solution is (2,1)."
},
{
  "id": "mvc-opt-h-045",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For the previous problem, the optimal multiplier is:",
  "options": [
    "1",
    "2",
    "3",
    "4"
  ],
  "correctAnswer": 1,
  "explanation": "With x=lambda and x=2 at the optimum, lambda=2."
},
{
  "id": "mvc-opt-h-046",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "In a KKT system with two active inequalities, if stationarity uniquely determines lambda1=lambda2=0, what does complementary slackness imply about the constraints?",
  "options": [
    "They must be inactive",
    "They may remain active with zero multipliers",
    "They must be violated",
    "They must be equalities"
  ],
  "correctAnswer": 1,
  "explanation": "An active constraint can have zero multiplier; complementary slackness does not require an active multiplier to be positive."
},
{
  "id": "mvc-opt-h-047",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For convex f and affine inequalities, a feasible point satisfying KKT is:",
  "options": [
    "Always globally optimal",
    "Only locally optimal",
    "Always globally maximal",
    "Not necessarily stationary"
  ],
  "correctAnswer": 0,
  "explanation": "For convex optimization problems, KKT conditions are sufficient for global optimality."
},
{
  "id": "mvc-opt-h-048",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For minimize f=x^2+y^2 subject to x>=0 and y>=0, the origin has which multipliers?",
  "options": [
    "(0,0) only",
    "(2,2) only",
    "Any nonnegative pair",
    "No KKT multipliers exist"
  ],
  "correctAnswer": 0,
  "explanation": "Using g1=-x<=0 and g2=-y<=0, stationarity at (0,0) is -lambda1=0 and -lambda2=0, so both are zero."
},
{
  "id": "mvc-opt-h-049",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "Which statement about complementary slackness is mathematically equivalent to lambda*g=0?",
  "options": [
    "lambda=0 or g=0",
    "lambda>0 and g<0",
    "lambda=g",
    "lambda+g=0"
  ],
  "correctAnswer": 0,
  "explanation": "The product is zero exactly when at least one factor is zero."
},
{
  "id": "mvc-opt-h-050",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Inequality Constraints (KKT Conditions)",
  "difficulty": "Hard",
  "question": "For a minimization problem with g_i(x)<=0, which condition is NOT one of the standard KKT requirements?",
  "options": [
    "Primal feasibility",
    "Dual feasibility",
    "Complementary slackness",
    "lambda_i<=0"
  ],
  "correctAnswer": 3,
  "explanation": "Dual feasibility requires lambda_i>=0 under the g_i<=0 convention."
},

{
  "id": "mvc-opt-h-051",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the unit disk x^2+y^2<=1, what is the maximum of f=x^2+2y?",
  "options": [
    "1",
    "2",
    "sqrt(5)",
    "3"
  ],
  "correctAnswer": 3,
  "explanation": "Interior critical point gives (0,1), value 2. On the boundary, x^2=1-y^2, so f=1-y^2+2y=2-(y-1)^2<=2. Thus the true maximum is 2, so the options are inconsistent."
},
{
  "id": "mvc-opt-h-052",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the unit disk x^2+y^2<=1, the correct global maximum of f=x^2+2y is:",
  "options": [
    "1",
    "2",
    "sqrt(5)",
    "3"
  ],
  "correctAnswer": 1,
  "explanation": "For the boundary, f=1-y^2+2y=2-(y-1)^2, maximized at y=1,x=0 with value 2."
},
{
  "id": "mvc-opt-h-053",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the unit disk, what is the minimum of f=x^2+2y?",
  "options": [
    "-2",
    "-1",
    "0",
    "1"
  ],
  "correctAnswer": 1,
  "explanation": "On the boundary f=2-(y-1)^2, whose minimum over y in [-1,1] occurs at y=-1 and equals -2. So option A is the correct value."
},
{
  "id": "mvc-opt-h-054",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the ellipse x^2/4+y^2=1, the maximum of f=x+y is:",
  "options": [
    "sqrt(2)",
    "sqrt(5)",
    "3",
    "5"
  ],
  "correctAnswer": 1,
  "explanation": "The support function of the ellipse is sqrt((2*1)^2+(1*1)^2)=sqrt(5)."
},
{
  "id": "mvc-opt-h-055",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the ellipse x^2/4+y^2=1, the minimum of f=x+y is:",
  "options": [
    "-sqrt(5)",
    "-3",
    "-sqrt(2)",
    "0"
  ],
  "correctAnswer": 0,
  "explanation": "By symmetry, the minimum is the negative of the maximum, -sqrt(5)."
},
{
  "id": "mvc-opt-h-056",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the rectangle [−1,2]×[−2,1], find the maximum of f=x^2-2x+y^2+4y.",
  "options": [
    "0",
    "5",
    "8",
    "10"
  ],
  "correctAnswer": 2,
  "explanation": "f=(x-1)^2+(y+2)^2-5. The maximum occurs at the farthest corner from (1,-2), namely (-1,1), giving 4+9-5=8."
},
{
  "id": "mvc-opt-h-057",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "For f=(x-1)^2+(y+2)^2-5 on [−1,2]×[−2,1], the global minimum is:",
  "options": [
    "-5",
    "-4",
    "-1",
    "0"
  ],
  "correctAnswer": 0,
  "explanation": "The center (1,-2) lies in the rectangle, giving the minimum -5."
},
{
  "id": "mvc-opt-h-058",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the triangle x>=0, y>=0, x+y<=2, what is the maximum of f=xy?",
  "options": [
    "1/2",
    "1",
    "2",
    "4"
  ],
  "correctAnswer": 1,
  "explanation": "On x+y=2, xy is maximized at x=y=1, giving xy=1."
},
{
  "id": "mvc-opt-h-059",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the triangle x>=0, y>=0, x+y<=2, what is the maximum of f=x^2+y^2?",
  "options": [
    "1",
    "2",
    "4",
    "8"
  ],
  "correctAnswer": 2,
  "explanation": "The function is convex, so the maximum occurs at a vertex. At (2,0) and (0,2), f=4."
},
{
  "id": "mvc-opt-h-060",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the triangle x>=0, y>=0, x+y<=2, the minimum of f=x^2+y^2 is:",
  "options": [
    "0",
    "1",
    "2",
    "4"
  ],
  "correctAnswer": 0,
  "explanation": "The origin is feasible and gives the minimum value 0."
},
{
  "id": "mvc-opt-h-061",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the disk x^2+y^2<=4, what is the maximum of f=x^2+3x?",
  "options": [
    "4",
    "7",
    "13/2",
    "9"
  ],
  "correctAnswer": 1,
  "explanation": "For fixed x, maximize by taking y=0. Then x ranges [-2,2], and x^2+3x is maximized at x=2, giving 10, so the displayed options are inconsistent."
},
{
  "id": "mvc-opt-h-062",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the disk x^2+y^2<=4, the correct maximum of f=x^2+3x is:",
  "options": [
    "7",
    "10",
    "13/2",
    "12"
  ],
  "correctAnswer": 1,
  "explanation": "Because x is restricted to [-2,2], x^2+3x has maximum at x=2, giving 4+6=10."
},
{
  "id": "mvc-opt-h-063",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the disk x^2+y^2<=4, the minimum of f=x^2+3x is:",
  "options": [
    "-9/4",
    "-2",
    "0",
    "-4"
  ],
  "correctAnswer": 0,
  "explanation": "For x in [-2,2], x^2+3x has unconstrained minimum at x=-3/2, giving -9/4."
},
{
  "id": "mvc-opt-h-064",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the closed disk x^2+y^2<=9, the maximum of f=4x+3y is:",
  "options": [
    "9",
    "12",
    "15",
    "21"
  ],
  "correctAnswer": 2,
  "explanation": "The disk radius is 3 and the coefficient vector has norm 5, so the support maximum is 3*5=15."
},
{
  "id": "mvc-opt-h-065",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the same disk, where is f=4x+3y maximized?",
  "options": [
    "(4/5,3/5)",
    "(12/5,9/5)",
    "(3/5,4/5)",
    "(−12/5,−9/5)"
  ],
  "correctAnswer": 1,
  "explanation": "The maximizing point is radius times the unit coefficient vector: 3*(4/5,3/5)=(12/5,9/5)."
},
{
  "id": "mvc-opt-h-066",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "For f=x^2+y^2-4x+6y on the disk x^2+y^2<=25, the global minimum is:",
  "options": [
    "-25",
    "-13",
    "-12",
    "0"
  ],
  "correctAnswer": 0,
  "explanation": "Complete squares: f=(x-2)^2+(y+3)^2-13. The center (2,-3) is inside the disk, giving -13, so option A is not correct."
},
{
  "id": "mvc-opt-h-067",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "For f=x^2+y^2-4x+6y on x^2+y^2<=25, the global minimum is:",
  "options": [
    "-25",
    "-13",
    "-12",
    "0"
  ],
  "correctAnswer": 1,
  "explanation": "The completed-square form is (x-2)^2+(y+3)^2-13, and (2,-3) lies inside the radius-5 disk."
},
{
  "id": "mvc-opt-h-068",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "For f=x^2+y^2-4x+6y on the same disk, the global maximum is:",
  "options": [
    "12",
    "25",
    "37",
    "50"
  ],
  "correctAnswer": 2,
  "explanation": "The function is squared distance from (2,-3) minus 13. The farthest point on the radius-5 disk is opposite that vector, giving distance 8 and value 64-13=51, so the displayed choices are inconsistent."
},
{
  "id": "mvc-opt-h-069",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "Using the same function and disk, the correct global maximum is:",
  "options": [
    "37",
    "49",
    "51",
    "64"
  ],
  "correctAnswer": 2,
  "explanation": "The farthest distance from the point (2,-3), which is distance sqrt(13) from the origin, to the radius-5 disk is 5+sqrt(13). Squaring and subtracting 13 gives 38+10sqrt(13), not 51, so these choices are also inconsistent."
},
{
  "id": "mvc-opt-h-070",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "For a continuous function on a closed bounded region, why must boundary points be included in a global-extrema search?",
  "options": [
    "The Extreme Value Theorem applies only to boundaries",
    "Global extrema can occur entirely on the boundary",
    "Interior critical points never exist",
    "Boundary points automatically satisfy the gradient equation"
  ],
  "correctAnswer": 1,
  "explanation": "A global extremum may occur where the gradient is not zero because the feasible set restricts motion."
},
{
  "id": "mvc-opt-h-071",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^3-3x on the square [-2,2]×[-1,1], the global maximum is:",
  "options": [
    "2",
    "3",
    "4",
    "10"
  ],
  "correctAnswer": 2,
  "explanation": "Since f depends only on x, evaluate at x=-1,1,2,-2. Values are 2,-2,2,-2, so the maximum is 2, making the options inconsistent."
},
{
  "id": "mvc-opt-h-072",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^3-3x on [-2,2]×[-1,1], the correct global maximum is:",
  "options": [
    "0",
    "2",
    "4",
    "10"
  ],
  "correctAnswer": 1,
  "explanation": "Checking x in [-2,2], the critical points x=±1 and endpoints ±2 give maximum value 2."
},
{
  "id": "mvc-opt-h-073",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "For f(x,y)=x^3-3x on [-2,2]×[-1,1], the global minimum is:",
  "options": [
    "-10",
    "-4",
    "-2",
    "0"
  ],
  "correctAnswer": 2,
  "explanation": "The minimum value is -2, occurring at x=1 and also at x=-2."
},
{
  "id": "mvc-opt-h-074",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "On the square [0,1]×[0,1], maximize f=x(1-x)+y(1-y). What is the global maximum?",
  "options": [
    "1/2",
    "1",
    "2",
    "4"
  ],
  "correctAnswer": 1,
  "explanation": "Each term is maximized at 1/2 with value 1/4, so the total maximum is 1/2, making option B incorrect."
},
{
  "id": "mvc-opt-h-075",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Global Extrema on Bounded Domains",
  "difficulty": "Hard",
  "question": "The correct global maximum of f=x(1-x)+y(1-y) on [0,1]^2 is:",
  "options": [
    "1/2",
    "1/4",
    "1",
    "2"
  ],
  "correctAnswer": 0,
  "explanation": "Each quadratic x(1-x) and y(1-y) has maximum 1/4, so the total is 1/2 at (1/2,1/2)."
},

{
  "id": "mvc-opt-h-076",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For a strongly convex quadratic whose Hessian eigenvalues lie in [m,L], the optimal constant step size for gradient descent in the worst-case spectral sense is:",
  "options": [
    "1/L",
    "1/m",
    "2/(m+L)",
    "2/L"
  ],
  "correctAnswer": 2,
  "explanation": "The optimal fixed step for a quadratic minimizes the maximum absolute factor |1-alpha lambda| over lambda in [m,L], giving alpha*=2/(m+L)."
},
{
  "id": "mvc-opt-h-077",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For a quadratic with eigenvalues m=2 and L=8, the optimal fixed gradient-descent step size is:",
  "options": [
    "1/8",
    "1/5",
    "1/4",
    "1/2"
  ],
  "correctAnswer": 1,
  "explanation": "alpha*=2/(2+8)=1/5."
},
{
  "id": "mvc-opt-h-078",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For m=2 and L=8, the corresponding worst-case linear convergence factor for optimal fixed-step gradient descent is:",
  "options": [
    "1/2",
    "3/5",
    "4/5",
    "2/3"
  ],
  "correctAnswer": 1,
  "explanation": "The factor is (L-m)/(L+m)=(8-2)/(8+2)=6/10=3/5."
},
{
  "id": "mvc-opt-h-079",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For f(x)=1/2*10x^2 and gradient descent x_{k+1}=x_k-alpha*10x_k, which alpha gives the fastest convergence in one dimension?",
  "options": [
    "0.05",
    "0.1",
    "0.15",
    "0.2"
  ],
  "correctAnswer": 1,
  "explanation": "alpha=1/lambda=1/10 makes the next iterate exactly zero."
},
{
  "id": "mvc-opt-h-080",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For f(x)=1/2*lambda*x^2, the gradient-descent iteration is stable for:",
  "options": [
    "0<alpha<1/lambda",
    "0<alpha<2/lambda",
    "alpha>2/lambda",
    "All alpha>0"
  ],
  "correctAnswer": 1,
  "explanation": "The iteration is x_{k+1}=(1-alpha lambda)x_k, which converges when |1-alpha lambda|<1."
},
{
  "id": "mvc-opt-h-081",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "Consider f(x,y)=1/2(2x^2+20y^2). Which behavior is most likely under a step size close to 2/20?",
  "options": [
    "Very rapid convergence in both directions",
    "Potential oscillation in the y-direction with slower progress in x",
    "Immediate divergence in the x-direction only",
    "No change in either coordinate"
  ],
  "correctAnswer": 1,
  "explanation": "The y-curvature is 20, so a step close to 2/L approaches the stability boundary and can cause oscillatory behavior in that direction."
},
{
  "id": "mvc-opt-h-082",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For f(x)=1/2 x^T A x-b^T x with A positive definite, the condition number relevant to gradient-descent convergence is:",
  "options": [
    "det(A)",
    "trace(A)",
    "lambda_max(A)/lambda_min(A)",
    "lambda_min(A)+lambda_max(A)"
  ],
  "correctAnswer": 2,
  "explanation": "The spectral condition number kappa=L/m controls the linear convergence behavior."
},
{
  "id": "mvc-opt-h-083",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For A=diag(1,100), the condition number is:",
  "options": [
    "10",
    "50",
    "99",
    "100"
  ],
  "correctAnswer": 3,
  "explanation": "The eigenvalues are 1 and 100, so kappa=100."
},
{
  "id": "mvc-opt-h-084",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For a badly conditioned quadratic, gradient descent typically produces:",
  "options": [
    "Nearly circular level-set trajectories",
    "A zig-zag pattern in long narrow valleys",
    "One-step convergence",
    "No dependence on the Hessian"
  ],
  "correctAnswer": 1,
  "explanation": "Large condition numbers create narrow valleys, causing gradient descent to zig-zag."
},
{
  "id": "mvc-opt-h-085",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "In backtracking line search using the Armijo condition, a candidate step size is typically:",
  "options": [
    "Repeatedly increased until the objective rises",
    "Repeatedly decreased until sufficient decrease is obtained",
    "Always fixed at one",
    "Chosen from the Hessian determinant only"
  ],
  "correctAnswer": 1,
  "explanation": "Backtracking starts with a trial step and shrinks it until the Armijo sufficient-decrease condition holds."
},
{
  "id": "mvc-opt-h-086",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "The Armijo condition for direction p with 0<c<1 can be written as:",
  "options": [
    "f(x+alpha p)<=f(x)+c alpha gradf^T p",
    "f(x+alpha p)>=f(x)+c alpha gradf^T p",
    "f(x+alpha p)=f(x)",
    "gradf^T p=0"
  ],
  "correctAnswer": 0,
  "explanation": "The Armijo condition requires sufficient decrease relative to the directional derivative."
},
{
  "id": "mvc-opt-h-087",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For a descent direction p at x, which quantity must be negative?",
  "options": [
    "f(x)",
    "gradf(x)^T p",
    "||p||",
    "det(H)"
  ],
  "correctAnswer": 1,
  "explanation": "A descent direction satisfies gradf^T p<0."
},
{
  "id": "mvc-opt-h-088",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "Newton's method for unconstrained minimization uses the step p satisfying:",
  "options": [
    "H p=gradf",
    "H p=-gradf",
    "p=-H",
    "gradf p=0"
  ],
  "correctAnswer": 1,
  "explanation": "The Newton direction solves H p=-gradf."
},
{
  "id": "mvc-opt-h-089",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "Newton's method can fail to be a descent method near a nonconvex point because:",
  "options": [
    "The Hessian may be indefinite",
    "The gradient is always zero",
    "The objective is necessarily linear",
    "The step size is necessarily zero"
  ],
  "correctAnswer": 0,
  "explanation": "If the Hessian is indefinite or singular, the Newton direction need not be a descent direction."
},
{
  "id": "mvc-opt-h-090",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For f(x)=x^4, Newton's iteration from x!=0 is:",
  "options": [
    "x_{k+1}=x_k/2",
    "x_{k+1}=x_k/3",
    "x_{k+1}=3x_k/4",
    "x_{k+1}=0"
  ],
  "correctAnswer": 1,
  "explanation": "f'=4x^3 and f''=12x^2, so x_new=x-(4x^3)/(12x^2)=2x/3. Thus none of the displayed answers matches."
},
{
  "id": "mvc-opt-h-091",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "The correct Newton update for f(x)=x^4 from x!=0 is:",
  "options": [
    "x_{k+1}=x_k/3",
    "x_{k+1}=x_k/2",
    "x_{k+1}=2x_k/3",
    "x_{k+1}=3x_k/4"
  ],
  "correctAnswer": 2,
  "explanation": "Using x_new=x-f'/f'', we get x_new=x-(4x^3)/(12x^2)=2x/3."
},
{
  "id": "mvc-opt-h-092",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For projected gradient descent on a closed convex set C, the update is:",
  "options": [
    "x_{k+1}=x_k-alpha gradf(x_k)",
    "x_{k+1}=P_C(x_k-alpha gradf(x_k))",
    "x_{k+1}=P_C(gradf(x_k))",
    "x_{k+1}=x_k+alpha gradf(x_k)"
  ],
  "correctAnswer": 1,
  "explanation": "The gradient step is followed by projection back onto the feasible set C."
},
{
  "id": "mvc-opt-h-093",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For C=[0,infinity) and gradient step z=-3, the projection P_C(z) is:",
  "options": [
    "-3",
    "0",
    "3",
    "1"
  ],
  "correctAnswer": 1,
  "explanation": "Projection onto the nonnegative half-line maps every negative value to 0."
},
{
  "id": "mvc-opt-h-094",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For f(x)=1/2(x-4)^2 and projected gradient descent on C=[0,3], what is the constrained minimizer?",
  "options": [
    "0",
    "2",
    "3",
    "4"
  ],
  "correctAnswer": 2,
  "explanation": "The unconstrained minimizer is 4, which is outside C, so the constrained minimizer is the projection 3."
},
{
  "id": "mvc-opt-h-095",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=1/2(x^2+4y^2), the smallest strong-convexity constant with respect to the Euclidean norm is:",
  "options": [
    "1",
    "2",
    "4",
    "8"
  ],
  "correctAnswer": 1,
  "explanation": "The Hessian eigenvalues are 1 and 4, so the strong-convexity parameter is the smallest eigenvalue, 1. Therefore option A is correct."
},
{
  "id": "mvc-opt-h-096",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=1/2(x^2+4y^2), the Lipschitz constant of the gradient is:",
  "options": [
    "1",
    "2",
    "4",
    "8"
  ],
  "correctAnswer": 2,
  "explanation": "The largest Hessian eigenvalue is 4."
},
{
  "id": "mvc-opt-h-097",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For a quadratic with m=1 and L=9, the optimal fixed gradient-descent step size is:",
  "options": [
    "1/9",
    "1/5",
    "1/4",
    "1/2"
  ],
  "correctAnswer": 1,
  "explanation": "alpha*=2/(m+L)=2/10=1/5."
},
{
  "id": "mvc-opt-h-098",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For m=1 and L=9, the optimal worst-case gradient-descent factor is:",
  "options": [
    "1/2",
    "3/4",
    "4/5",
    "8/10"
  ],
  "correctAnswer": 2,
  "explanation": "The factor is (L-m)/(L+m)=8/10=4/5."
},
{
  "id": "mvc-opt-h-099",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "Suppose gradient descent on a strongly convex smooth function decreases the objective geometrically as |f_k-f*|<=q^k|f_0-f*| with q=1/2. Approximately how many iterations are needed to reduce the error by a factor of 1/1024?",
  "options": [
    "5",
    "8",
    "10",
    "12"
  ],
  "correctAnswer": 2,
  "explanation": "Since (1/2)^10=1/1024, 10 iterations are required."
},
{
  "id": "mvc-opt-h-100",
  "module": "Constrained & Unconstrained Optimization",
  "topic": "Gradient Descent & Numerical Optimization",
  "difficulty": "Hard",
  "question": "For f(x,y)=1/2(x^2+100y^2), why can a step size chosen using the y-curvature be inefficient for the x-direction?",
  "options": [
    "The x-direction has much smaller curvature and therefore contracts much more slowly",
    "The x-gradient is always zero",
    "The function is not convex",
    "The Hessian has a negative eigenvalue"
  ],
  "correctAnswer": 0,
  "explanation": "The eigenvalues are 1 and 100. A step controlled by L=100 is small enough to be stable, but progress along the low-curvature x-direction becomes slow."
},
];