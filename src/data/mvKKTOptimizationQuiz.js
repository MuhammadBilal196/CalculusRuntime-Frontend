/**
 * Multivariable Calculus — Module B, Topic 2
 * Inequality Constraints (KKT Conditions)
 * Exactly 20 questions.
 */

export const MV_KKT_CONDITIONS_QUIZ = [
  {
    prompt:
      "In the standard KKT minimization convention, how are inequality constraints written?",
    options: [
      "g_i(x) = 0",
      "g_i(x) ≥ 0",
      "g_i(x) ≤ 0",
      "g_i(x) = 1",
    ],
    answer: "C",
    explanation:
      "The standard minimization convention used in this guide is g_i(x) ≤ 0.",
  },

  {
    prompt: "Which condition expresses primal feasibility?",
    options: [
      "∇f + Σλ_i∇g_i = 0",
      "g_i(x*) ≤ 0",
      "λ_i ≥ 0",
      "λ_i g_i(x*) = 1",
    ],
    answer: "B",
    explanation:
      "Primal feasibility requires every inequality to be satisfied at the candidate point.",
  },

  {
    prompt:
      "What does dual feasibility require for a minimization problem with g_i(x) ≤ 0?",
    options: [
      "λ_i ≤ 0",
      "λ_i = 0 for every i",
      "λ_i ≥ 0",
      "λ_i > 1",
    ],
    answer: "C",
    explanation:
      "For the g_i ≤ 0 convention, KKT requires nonnegative multipliers.",
  },

  {
    prompt: "Which equation represents complementary slackness?",
    options: [
      "λ_i + g_i = 0",
      "λ_i g_i(x*) = 0",
      "λ_i g_i(x*) = 1",
      "g_i(x*) = λ_i^2",
    ],
    answer: "B",
    explanation:
      "Complementary slackness is λ_i g_i(x*) = 0 for each inequality constraint.",
  },

  {
    prompt:
      "If a constraint is inactive at a KKT point, what must its multiplier be?",
    options: ["Positive", "Negative", "Zero", "Undefined"],
    answer: "C",
    explanation:
      "Inactive means g_i(x*) < 0, so complementary slackness forces λ_i = 0.",
  },

  {
    prompt:
      "If λ_i > 0 at a KKT point, what follows from complementary slackness?",
    options: [
      "g_i(x*) < 0",
      "g_i(x*) = 0",
      "g_i(x*) > 0",
      "The problem is infeasible",
    ],
    answer: "B",
    explanation:
      "A positive multiplier can occur only when the corresponding constraint is active: g_i(x*) = 0.",
  },

  {
    prompt:
      "For g(x,y) = 1 − x − y ≤ 0, what original inequality does this represent?",
    options: [
      "x + y ≤ 1",
      "x + y ≥ 1",
      "x − y ≥ 1",
      "x + y = 1",
    ],
    answer: "B",
    explanation:
      "1 − x − y ≤ 0 is equivalent to x + y ≥ 1.",
  },

  {
    prompt:
      "For the minimization problem min f subject to g_i ≤ 0, what is the Lagrangian?",
    options: [
      "L = f − Σλ_i g_i",
      "L = f + Σλ_i g_i",
      "L = f + Σg_i only",
      "L = Σλ_i only",
    ],
    answer: "B",
    explanation:
      "With the standard g_i ≤ 0 convention, L = f + Σλ_i g_i.",
  },

  {
    prompt:
      "At an interior feasible optimum, where every inequality is strict, what happens to the KKT multipliers?",
    options: [
      "All become positive",
      "All become zero",
      "All become one",
      "They are unconstrained",
    ],
    answer: "B",
    explanation:
      "Strict inequalities are inactive, so complementary slackness forces every multiplier to zero.",
  },

  {
    prompt: "Which KKT equation is called stationarity?",
    options: [
      "g_i(x*) ≤ 0",
      "λ_i ≥ 0",
      "∇f(x*) + Σλ_i∇g_i(x*) = 0",
      "λ_i g_i(x*) = 1",
    ],
    answer: "C",
    explanation:
      "Stationarity sets the gradient of the Lagrangian with respect to the decision variables equal to zero.",
  },

  {
    prompt:
      "For min x² + y² subject to x + y ≥ 1, which point is the KKT minimizer?",
    options: [
      "(0,0)",
      "(1,0)",
      "(1/2, 1/2)",
      "(−1/2, −1/2)",
    ],
    answer: "C",
    explanation:
      "The closest point on the line x + y = 1 to the origin is (1/2, 1/2).",
  },

  {
    prompt:
      "For min x² + y² subject to x + y ≥ 1, what is the minimum objective value?",
    options: ["0", "1/4", "1/2", "1"],
    answer: "C",
    explanation:
      "At (1/2,1/2), x²+y² = 1/4+1/4 = 1/2.",
  },

  {
    prompt:
      "For min −x − y subject to x² + y² ≤ 1, where does the minimum occur?",
    options: [
      "At (0,0)",
      "At (1/2,1/2)",
      "At (1/√2, 1/√2)",
      "At (−1/√2, −1/√2)",
    ],
    answer: "C",
    explanation:
      "To minimize −x−y, maximize x+y on the unit disk, which occurs in the direction (1,1).",
  },

  {
    prompt: "Why is KKT especially powerful for convex optimization?",
    options: [
      "KKT is never needed in convex problems",
      "KKT points can certify global optimality under suitable assumptions",
      "Convexity makes all multipliers zero",
      "Convexity removes feasibility checks",
    ],
    answer: "B",
    explanation:
      "For convex problems with appropriate regularity, KKT conditions are sufficient for global minimization.",
  },

  {
    prompt:
      "Which statement is generally true for a nonconvex optimization problem?",
    options: [
      "Every KKT point is a global minimum",
      "KKT conditions have no meaning",
      "A KKT point may be only a local or stationary candidate",
      "Every multiplier must be negative",
    ],
    answer: "C",
    explanation:
      "In nonconvex problems, KKT conditions generally identify candidates; they do not by themselves certify global optimality.",
  },

  {
    prompt:
      "What should you do before applying KKT to an inequality such as x + y ≥ 1?",
    options: [
      "Differentiate only the objective",
      "Rewrite it in the chosen sign convention",
      "Set the inequality equal to one everywhere",
      "Delete the constraint",
    ],
    answer: "B",
    explanation:
      "Converting all inequalities to a consistent convention prevents multiplier-sign errors.",
  },

  {
    prompt:
      "Suppose a candidate KKT point has λ_1 = −2 under the g_1 ≤ 0 minimization convention. What is wrong?",
    options: [
      "Nothing; negative multipliers are required",
      "The point violates dual feasibility",
      "The point must be interior",
      "The Hessian is automatically positive definite",
    ],
    answer: "B",
    explanation:
      "Dual feasibility requires λ_i ≥ 0, so λ_1 = −2 invalidates the KKT candidate.",
  },

  {
    prompt: "What is the main role of an active-set strategy?",
    options: [
      "To ignore all constraints",
      "To determine which inequalities bind at the optimum",
      "To force every multiplier to be positive",
      "To replace stationarity with a Hessian test",
    ],
    answer: "B",
    explanation:
      "Active-set methods identify the constraints that are binding and use them as equalities in the candidate system.",
  },

  {
    prompt:
      "Which final check is essential after solving the KKT equations?",
    options: [
      "Only check stationarity",
      "Check feasibility, multiplier signs, and complementary slackness",
      "Assume the first solution is the global minimum",
      "Ignore inactive constraints",
    ],
    answer: "B",
    explanation:
      "A KKT candidate must satisfy all KKT conditions, not stationarity alone.",
  },
  {
  prompt:
    "Which final check is essential after solving the KKT equations?",
  options: [
    "Only check stationarity",
    "Check feasibility, multiplier signs, and complementary slackness",
    "Assume the first solution is the global minimum",
    "Ignore inactive constraints",
  ],
  answer: "B",
  explanation:
    "A KKT candidate must satisfy all KKT conditions, not stationarity alone.",
},
];