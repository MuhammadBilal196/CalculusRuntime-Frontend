/**
 * Practice bank — Nonlinear Dynamical Systems (Multivariable Calculus).
 * 150 MCQs: 50 Easy / 50 Medium / 50 Hard, split evenly across the module's two topics
 * (Phase Planes and Local Stability; Lyapunov Stability Methods).
 * Each item: unique string id, topic, module, difficulty, four distinct options, one correct
 * answer (index), and an explanation. Answers are computed by the generator, not typed.
 */
export const MV_NONLINEAR_DYNAMICS_PRACTICE_BANK = [
  {
    "id": "mv-nd-p-e-001",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Find the equilibrium of x' = x - 2, y' = y - 3.",
    "options": [
      "(3, 2)",
      "(2, 3)",
      "(0, 0)",
      "(-2, -3)"
    ],
    "correctAnswer": 1,
    "explanation": "Set both right-hand sides to zero: x = 2 and y = 3."
  },
  {
    "id": "mv-nd-p-e-002",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Find the equilibrium of x' = x + 1, y' = y - 4.",
    "options": [
      "(4, -1)",
      "(-1, 4)",
      "(1, -4)",
      "(0, 0)"
    ],
    "correctAnswer": 1,
    "explanation": "Set both right-hand sides to zero: x = -1 and y = 4."
  },
  {
    "id": "mv-nd-p-e-003",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Find the equilibrium of x' = x - 5, y' = y + 2.",
    "options": [
      "(5, -2)",
      "(-2, 5)",
      "(-5, 2)",
      "(0, 0)"
    ],
    "correctAnswer": 0,
    "explanation": "Set both right-hand sides to zero: x = 5 and y = -2."
  },
  {
    "id": "mv-nd-p-e-004",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Find the equilibrium of x' = x - 3, y' = y - 3.",
    "options": [
      "(3, 0)",
      "(-3, -3)",
      "(0, 0)",
      "(3, 3)"
    ],
    "correctAnswer": 3,
    "explanation": "Set both right-hand sides to zero: x = 3 and y = 3."
  },
  {
    "id": "mv-nd-p-e-005",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "The Jacobian at an equilibrium is J = [[1, 2], [3, 4]]. Find det J.",
    "options": [
      "-10",
      "10",
      "-2",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "det J = (1)(4) - (2)(3) = 4 - 6 = -2."
  },
  {
    "id": "mv-nd-p-e-006",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "The Jacobian at an equilibrium has eigenvalues -1 and -3. What type of equilibrium is it?",
    "options": [
      "Unstable node",
      "Centre",
      "Stable node",
      "Unstable spiral"
    ],
    "correctAnswer": 2,
    "explanation": "Both eigenvalues are real and negative."
  },
  {
    "id": "mv-nd-p-e-007",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "At an equilibrium, tr J = -3 and det J = 2. Classify it (assume it is hyperbolic).",
    "options": [
      "Centre",
      "Unstable spiral",
      "Stable node",
      "Stable spiral"
    ],
    "correctAnswer": 2,
    "explanation": "det J = 2 > 0 and tr² - 4det = 1 ≥ 0 gives a node; tr J = -3 < 0 makes it stable."
  },
  {
    "id": "mv-nd-p-e-008",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "At an equilibrium, tr J = 4 and det J = 3. Classify it (assume it is hyperbolic).",
    "options": [
      "Unstable spiral",
      "Centre",
      "Stable spiral",
      "Unstable node"
    ],
    "correctAnswer": 3,
    "explanation": "det J = 3 > 0 and tr² - 4det = 4 ≥ 0 gives a node; tr J = 4 > 0 makes it unstable."
  },
  {
    "id": "mv-nd-p-e-009",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "At an equilibrium, tr J = 1 and det J = -2. Classify it (assume it is hyperbolic).",
    "options": [
      "Stable node",
      "Unstable spiral",
      "Saddle",
      "Centre"
    ],
    "correctAnswer": 2,
    "explanation": "det J = -2 < 0 gives a saddle."
  },
  {
    "id": "mv-nd-p-e-010",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "At an equilibrium, tr J = -2 and det J = 5. Classify it (assume it is hyperbolic).",
    "options": [
      "Stable node",
      "Unstable spiral",
      "Centre",
      "Stable spiral"
    ],
    "correctAnswer": 3,
    "explanation": "det J = 5 > 0 and tr² - 4det = -16 < 0 gives a spiral; tr J = -2 < 0 makes it stable."
  },
  {
    "id": "mv-nd-p-e-011",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "At an equilibrium, tr J = 2 and det J = 10. Classify it (assume it is hyperbolic).",
    "options": [
      "Unstable node",
      "Centre",
      "Unstable spiral",
      "Saddle"
    ],
    "correctAnswer": 2,
    "explanation": "det J = 10 > 0 and tr² - 4det = -36 < 0 gives a spiral; tr J = 2 > 0 makes it unstable."
  },
  {
    "id": "mv-nd-p-e-012",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "At an equilibrium, tr J = 0 and det J = -1. Classify it (assume it is hyperbolic).",
    "options": [
      "Unstable spiral",
      "Stable spiral",
      "Unstable node",
      "Saddle"
    ],
    "correctAnswer": 3,
    "explanation": "det J = -1 < 0 gives a saddle."
  },
  {
    "id": "mv-nd-p-e-013",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For the system x' = y - x², y' = g(x, y), what is the x-nullcline?",
    "options": [
      "The whole plane",
      "y = 0",
      "y = x²",
      "x = 0"
    ],
    "correctAnswer": 2,
    "explanation": "The x-nullcline is where x' = 0, i.e. y - x² = 0, which is y = x². On it the flow is vertical."
  },
  {
    "id": "mv-nd-p-e-014",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For the system x' = x - 2y, y' = g(x, y), what is the x-nullcline?",
    "options": [
      "x = 2y",
      "The whole plane",
      "y = 0",
      "x = 0"
    ],
    "correctAnswer": 0,
    "explanation": "The x-nullcline is where x' = 0, i.e. x - 2y = 0, which is x = 2y. On it the flow is vertical."
  },
  {
    "id": "mv-nd-p-e-015",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For the system x' = x(1 - y), y' = g(x, y), what is the x-nullcline?",
    "options": [
      "The whole plane",
      "x = 0 or y = 1",
      "y = 0",
      "y = 0 or x = 1"
    ],
    "correctAnswer": 1,
    "explanation": "The x-nullcline is where x' = 0, i.e. x(1 - y) = 0, which is x = 0 or y = 1. On it the flow is vertical."
  },
  {
    "id": "mv-nd-p-e-016",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For the system x' = y + x³, y' = g(x, y), what is the x-nullcline?",
    "options": [
      "y = 0",
      "y = -x³",
      "The whole plane",
      "x = 0"
    ],
    "correctAnswer": 1,
    "explanation": "The x-nullcline is where x' = 0, i.e. y + x³ = 0, which is y = -x³. On it the flow is vertical."
  },
  {
    "id": "mv-nd-p-e-017",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = f(x, y) = x²y + 3y, find the Jacobian entry f_x at (1, 2).",
    "options": [
      "-4",
      "4",
      "5",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "Differentiate x²y + 3y with respect to x and evaluate at (1, 2): the result is 4."
  },
  {
    "id": "mv-nd-p-e-018",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = f(x, y) = xy - y², find the Jacobian entry f_y at (3, 1).",
    "options": [
      "-1",
      "0",
      "1",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "Differentiate xy - y² with respect to y and evaluate at (3, 1): the result is 1."
  },
  {
    "id": "mv-nd-p-e-019",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = f(x, y) = sin x + y, find the Jacobian entry f_x at (0, 5).",
    "options": [
      "1",
      "-1",
      "0",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "Differentiate sin x + y with respect to x and evaluate at (0, 5): the result is 1."
  },
  {
    "id": "mv-nd-p-e-020",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = f(x, y) = x³ - 2xy, find the Jacobian entry f_x at (1, 1).",
    "options": [
      "1",
      "2",
      "0",
      "-1"
    ],
    "correctAnswer": 0,
    "explanation": "Differentiate x³ - 2xy with respect to x and evaluate at (1, 1): the result is 1."
  },
  {
    "id": "mv-nd-p-e-021",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "An equilibrium is hyperbolic when:",
    "options": [
      "The eigenvalues are complex",
      "No eigenvalue of the Jacobian has zero real part",
      "tr J = 0",
      "det J < 0"
    ],
    "correctAnswer": 1,
    "explanation": "Then the Hartman–Grobman theorem says the linearization predicts the local behaviour."
  },
  {
    "id": "mv-nd-p-e-022",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Two different trajectories of a smooth autonomous system:",
    "options": [
      "Can never cross",
      "Cross whenever nullclines meet",
      "Always cross at equilibria",
      "Cross at saddle points"
    ],
    "correctAnswer": 0,
    "explanation": "Uniqueness of solutions: through each point passes exactly one trajectory."
  },
  {
    "id": "mv-nd-p-e-023",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Equilibria of a planar system are exactly:",
    "options": [
      "The intersection points of the x- and y-nullclines",
      "Points on the x-axis",
      "The points where f_x = 0",
      "The zeros of the Jacobian determinant"
    ],
    "correctAnswer": 0,
    "explanation": "An equilibrium needs x' = 0 and y' = 0 at the same point."
  },
  {
    "id": "mv-nd-p-e-024",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "On the y-nullcline (where y' = 0), the vector field points:",
    "options": [
      "Vertically",
      "Towards the origin",
      "Horizontally (or is zero)",
      "Along the nullcline"
    ],
    "correctAnswer": 2,
    "explanation": "The velocity there is (f, 0)."
  },
  {
    "id": "mv-nd-p-e-025",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "A saddle point is:",
    "options": [
      "Always unstable",
      "Always stable",
      "Stable if tr J < 0",
      "Asymptotically stable"
    ],
    "correctAnswer": 0,
    "explanation": "One eigenvalue is positive, so nearby trajectories along that direction move away."
  },
  {
    "id": "mv-nd-p-m-001",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "Classify the origin of x' = -2x + y, y' = x - 2y.",
    "options": [
      "Stable node",
      "Centre",
      "Saddle",
      "Stable spiral"
    ],
    "correctAnswer": 0,
    "explanation": "J = [[-2, 1], [1, -2]]: tr = -4, det = 3, tr² - 4det = 4. So the origin is a stable node."
  },
  {
    "id": "mv-nd-p-m-002",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "Classify the origin of x' = x - y, y' = x + y.",
    "options": [
      "Stable spiral",
      "Unstable spiral",
      "Stable node",
      "Centre"
    ],
    "correctAnswer": 1,
    "explanation": "J = [[1, -1], [1, 1]]: tr = 2, det = 2, tr² - 4det = -4. So the origin is an unstable spiral."
  },
  {
    "id": "mv-nd-p-m-003",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "Classify the origin of x' = 2x + y, y' = x + 2y.",
    "options": [
      "Unstable node",
      "Unstable spiral",
      "Saddle",
      "Stable node"
    ],
    "correctAnswer": 0,
    "explanation": "J = [[2, 1], [1, 2]]: tr = 4, det = 3, tr² - 4det = 4. So the origin is an unstable node."
  },
  {
    "id": "mv-nd-p-m-004",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "Classify the origin of x' = y, y' = -4x - y.",
    "options": [
      "Stable spiral",
      "Stable node",
      "Unstable node",
      "Unstable spiral"
    ],
    "correctAnswer": 0,
    "explanation": "J = [[0, 1], [-4, -1]]: tr = -1, det = 4, tr² - 4det = -15. So the origin is a stable spiral."
  },
  {
    "id": "mv-nd-p-m-005",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "Classify the origin of x' = x + 3y, y' = 3x + y.",
    "options": [
      "Stable spiral",
      "Centre",
      "Unstable spiral",
      "Saddle"
    ],
    "correctAnswer": 3,
    "explanation": "J = [[1, 3], [3, 1]]: tr = 2, det = -8, tr² - 4det = 36. So the origin is a saddle."
  },
  {
    "id": "mv-nd-p-m-006",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "Classify the origin of x' = -x - 5y, y' = x - y.",
    "options": [
      "Unstable node",
      "Stable node",
      "Unstable spiral",
      "Stable spiral"
    ],
    "correctAnswer": 3,
    "explanation": "J = [[-1, -5], [1, -1]]: tr = -2, det = 6, tr² - 4det = -20. So the origin is a stable spiral."
  },
  {
    "id": "mv-nd-p-m-007",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "Classify the origin of x' = 3x, y' = y.",
    "options": [
      "Unstable node",
      "Saddle",
      "Stable node",
      "Stable spiral"
    ],
    "correctAnswer": 0,
    "explanation": "J = [[3, 0], [0, 1]]: tr = 4, det = 3, tr² - 4det = 4. So the origin is an unstable node."
  },
  {
    "id": "mv-nd-p-m-008",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -sin x - y, classify the equilibrium (0, 0).",
    "options": [
      "Stable node",
      "Centre",
      "Stable spiral",
      "Unstable node"
    ],
    "correctAnswer": 2,
    "explanation": "J = [[0, 1], [-1, -1]]: tr = -1, det = 1, tr² - 4det = -3. A spiral: the pendulum swings with decaying amplitude."
  },
  {
    "id": "mv-nd-p-m-009",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -sin x - 3y, classify the equilibrium (0, 0).",
    "options": [
      "Centre",
      "Stable node",
      "Unstable node",
      "Unstable spiral"
    ],
    "correctAnswer": 1,
    "explanation": "J = [[0, 1], [-1, -3]]: tr = -3, det = 1, tr² - 4det = 5. A node: the motion is overdamped."
  },
  {
    "id": "mv-nd-p-m-010",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -4 sin x - 4y, classify the equilibrium (0, 0).",
    "options": [
      "Stable spiral",
      "Saddle",
      "Stable node",
      "Unstable node"
    ],
    "correctAnswer": 2,
    "explanation": "J = [[0, 1], [-4, -4]]: tr = -4, det = 4, tr² - 4det = 0. A node with a repeated eigenvalue: the motion is critically damped."
  },
  {
    "id": "mv-nd-p-m-011",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -9 sin x - 2y, classify the equilibrium (0, 0).",
    "options": [
      "Centre",
      "Unstable node",
      "Unstable spiral",
      "Stable spiral"
    ],
    "correctAnswer": 3,
    "explanation": "J = [[0, 1], [-9, -2]]: tr = -2, det = 9, tr² - 4det = -32. A spiral: the pendulum swings with decaying amplitude."
  },
  {
    "id": "mv-nd-p-m-012",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "Find the interior equilibrium of x' = x(2 - y), y' = y(-3 + x).",
    "options": [
      "(3, 2)",
      "(1/3, 1/2)",
      "(0, 0)",
      "(2, 3)"
    ],
    "correctAnswer": 0,
    "explanation": "x ≠ 0 needs 2 - y = 0, so y = 2; y ≠ 0 needs -3 + x = 0, so x = 3. (Its linearization is a centre: tr J = 0.)"
  },
  {
    "id": "mv-nd-p-m-013",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -x + y, classify the origin.",
    "options": [
      "Centre",
      "Stable node",
      "Stable spiral",
      "Unstable spiral"
    ],
    "correctAnswer": 3,
    "explanation": "tr J = 1, det J = 1, tr² - 4 = -3. So the origin is an unstable spiral."
  },
  {
    "id": "mv-nd-p-m-014",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -x + 3y, classify the origin.",
    "options": [
      "Unstable node",
      "Unstable spiral",
      "Stable node",
      "Stable spiral"
    ],
    "correctAnswer": 0,
    "explanation": "tr J = 3, det J = 1, tr² - 4 = 5. So the origin is an unstable node."
  },
  {
    "id": "mv-nd-p-m-015",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -x - y, classify the origin.",
    "options": [
      "Stable node",
      "Unstable node",
      "Unstable spiral",
      "Stable spiral"
    ],
    "correctAnswer": 3,
    "explanation": "tr J = -1, det J = 1, tr² - 4 = -3. So the origin is a stable spiral."
  },
  {
    "id": "mv-nd-p-m-016",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -x + (1/2)y, classify the origin.",
    "options": [
      "Stable node",
      "Unstable spiral",
      "Saddle",
      "Unstable node"
    ],
    "correctAnswer": 1,
    "explanation": "tr J = 1/2, det J = 1, tr² - 4 = -15/4. So the origin is an unstable spiral."
  },
  {
    "id": "mv-nd-p-m-017",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -x - 3y, classify the origin.",
    "options": [
      "Unstable node",
      "Stable spiral",
      "Stable node",
      "Saddle"
    ],
    "correctAnswer": 2,
    "explanation": "tr J = -3, det J = 1, tr² - 4 = 5. So the origin is a stable node."
  },
  {
    "id": "mv-nd-p-m-018",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "The competition model x' = x(2 - x - y), y' = y(3 - 2x - y) has coexistence equilibrium (1, 1). Classify it.",
    "options": [
      "Saddle",
      "Stable spiral",
      "Unstable node",
      "Unstable spiral"
    ],
    "correctAnswer": 0,
    "explanation": "At (1, 1), J = [[-1, -1], [-2, -1]]: tr = -2, det = 1 - 2 = -1. det < 0: a saddle, so one species wins."
  },
  {
    "id": "mv-nd-p-m-019",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "The competition model x' = x(3/2 - x - (1/2)y), y' = y(3/2 - (1/2)x - y) has coexistence equilibrium (1, 1). Classify it.",
    "options": [
      "Unstable node",
      "Unstable spiral",
      "Stable node",
      "Saddle"
    ],
    "correctAnswer": 2,
    "explanation": "At (1, 1), J = [[-1, -1/2], [-1/2, -1]]: tr = -2, det = 1 - 1/4 = 3/4. det > 0 and tr² - 4det = 1 ≥ 0: a stable node, so the species coexist."
  },
  {
    "id": "mv-nd-p-m-020",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "The competition model x' = x(3 - x - 2y), y' = y(2 - x - y) has coexistence equilibrium (1, 1). Classify it.",
    "options": [
      "Unstable node",
      "Stable node",
      "Unstable spiral",
      "Saddle"
    ],
    "correctAnswer": 3,
    "explanation": "At (1, 1), J = [[-1, -2], [-1, -1]]: tr = -2, det = 1 - 2 = -1. det < 0: a saddle, so one species wins."
  },
  {
    "id": "mv-nd-p-m-021",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "The competition model x' = x(4/3 - x - (1/3)y), y' = y(3/2 - (1/2)x - y) has coexistence equilibrium (1, 1). Classify it.",
    "options": [
      "Stable node",
      "Unstable spiral",
      "Stable spiral",
      "Unstable node"
    ],
    "correctAnswer": 0,
    "explanation": "At (1, 1), J = [[-1, -1/3], [-1/2, -1]]: tr = -2, det = 1 - 1/6 = 5/6. det > 0 and tr² - 4det = 2/3 ≥ 0: a stable node, so the species coexist."
  },
  {
    "id": "mv-nd-p-m-022",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "Find the eigenvalues of the Jacobian J = [[-2, 5], [0, -3]] and classify the equilibrium.",
    "options": [
      "5 and -3: saddle",
      "-2 and -3: stable node",
      "-5 and 6: unstable node",
      "-2 and 5: saddle"
    ],
    "correctAnswer": 1,
    "explanation": "For a triangular matrix the eigenvalues are the diagonal entries -2 and -3."
  },
  {
    "id": "mv-nd-p-m-023",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "A stable node has eigenvalues -1 (eigenvector v₁) and -4 (eigenvector v₂). Typical trajectories approach the equilibrium tangent to:",
    "options": [
      "The x-axis",
      "v₁, the slow direction",
      "v₂, the fast direction",
      "They spiral in"
    ],
    "correctAnswer": 1,
    "explanation": "The e^(-4t) component dies out first, leaving the e^(-t) component along v₁."
  },
  {
    "id": "mv-nd-p-m-024",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "Linearizing a nonlinear system at an equilibrium gives a centre (eigenvalues ±ωi). The nonlinear equilibrium is:",
    "options": [
      "Undetermined by linearization: it may be a centre or a stable or unstable spiral",
      "Certainly a saddle",
      "Certainly a centre",
      "Certainly unstable"
    ],
    "correctAnswer": 0,
    "explanation": "Purely imaginary eigenvalues are non-hyperbolic; the cubic and higher terms decide."
  },
  {
    "id": "mv-nd-p-m-025",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "In a predator–prey model x' = x(a - by), y' = y(-c + dx), the linearization at the interior equilibrium has:",
    "options": [
      "tr J < 0",
      "A zero eigenvalue",
      "det J < 0",
      "tr J = 0 and det J = ac > 0"
    ],
    "correctAnswer": 3,
    "explanation": "J = [[0, -bc/d], [ad/b, 0]], a linear centre; the conserved quantity shows the orbits are closed."
  },
  {
    "id": "mv-nd-p-h-001",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "In polar form r' = r(4 - r²), θ' = 1. Where do trajectories starting near (but not at) the origin end up?",
    "options": [
      "On the limit cycle r = 2",
      "At the origin",
      "At infinity",
      "On the circle r = 4"
    ],
    "correctAnswer": 0,
    "explanation": "r' > 0 for 0 < r < 2 and r' < 0 for r > 2, so r = 2 is a stable limit cycle and the origin is an unstable spiral."
  },
  {
    "id": "mv-nd-p-h-002",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "In polar form r' = r(9 - r²), θ' = 1. Where do trajectories starting near (but not at) the origin end up?",
    "options": [
      "On the circle r = 9",
      "At the origin",
      "On the limit cycle r = 3",
      "At infinity"
    ],
    "correctAnswer": 2,
    "explanation": "r' > 0 for 0 < r < 3 and r' < 0 for r > 3, so r = 3 is a stable limit cycle and the origin is an unstable spiral."
  },
  {
    "id": "mv-nd-p-h-003",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "In polar form r' = r(2 - r²), θ' = 1. Where do trajectories starting near (but not at) the origin end up?",
    "options": [
      "At the origin",
      "On the limit cycle r = √2",
      "On the circle r = 2",
      "At infinity"
    ],
    "correctAnswer": 1,
    "explanation": "r' > 0 for 0 < r < √2 and r' < 0 for r > √2, so r = √2 is a stable limit cycle and the origin is an unstable spiral."
  },
  {
    "id": "mv-nd-p-h-004",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "In polar form r' = r(1/4 - r²), θ' = 1. Where do trajectories starting near (but not at) the origin end up?",
    "options": [
      "On the limit cycle r = 1/2",
      "On the circle r = 1/4",
      "At the origin",
      "At infinity"
    ],
    "correctAnswer": 0,
    "explanation": "r' > 0 for 0 < r < 1/2 and r' < 0 for r > 1/2, so r = 1/2 is a stable limit cycle and the origin is an unstable spiral."
  },
  {
    "id": "mv-nd-p-h-005",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "The origin of x' = x², y' = -y has a zero eigenvalue, so linearization is inconclusive. What is it actually?",
    "options": [
      "Asymptotically stable",
      "Unstable",
      "Stable but not asymptotically stable",
      "A centre"
    ],
    "correctAnswer": 1,
    "explanation": "For x > 0, x' = x² > 0 pushes points away."
  },
  {
    "id": "mv-nd-p-h-006",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "The origin of x' = -x³, y' = -y has a zero eigenvalue, so linearization is inconclusive. What is it actually?",
    "options": [
      "A centre",
      "Unstable",
      "Asymptotically stable",
      "Stable but not asymptotically stable"
    ],
    "correctAnswer": 2,
    "explanation": "x' = -x³ pulls every x to 0, and y decays."
  },
  {
    "id": "mv-nd-p-h-007",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "The origin of x' = x³, y' = -y has a zero eigenvalue, so linearization is inconclusive. What is it actually?",
    "options": [
      "Asymptotically stable",
      "A centre",
      "Unstable",
      "Stable but not asymptotically stable"
    ],
    "correctAnswer": 2,
    "explanation": "For x ≠ 0, x' = x³ has the sign of x, so |x| grows."
  },
  {
    "id": "mv-nd-p-h-008",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "The origin of x' = -x⁵, y' = -2y has a zero eigenvalue, so linearization is inconclusive. What is it actually?",
    "options": [
      "Asymptotically stable",
      "Unstable",
      "A centre",
      "Stable but not asymptotically stable"
    ],
    "correctAnswer": 0,
    "explanation": "x' = -x⁵ pulls x to 0, and y decays."
  },
  {
    "id": "mv-nd-p-h-009",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = y, y' = -4x + μy, the origin is an unstable spiral exactly when:",
    "options": [
      "-4 < μ < 0",
      "μ > 4",
      "0 < μ < 4",
      "μ > 0"
    ],
    "correctAnswer": 2,
    "explanation": "tr J = μ, det J = 4. A spiral needs μ² < 4·4, i.e. |μ| < 4; instability needs μ > 0."
  },
  {
    "id": "mv-nd-p-h-010",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = y, y' = -9x + μy, the origin is an unstable spiral exactly when:",
    "options": [
      "μ > 6",
      "-6 < μ < 0",
      "0 < μ < 9",
      "0 < μ < 6"
    ],
    "correctAnswer": 3,
    "explanation": "tr J = μ, det J = 9. A spiral needs μ² < 4·9, i.e. |μ| < 6; instability needs μ > 0."
  },
  {
    "id": "mv-nd-p-h-011",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = y, y' = -(1/4)x + μy, the origin is an unstable spiral exactly when:",
    "options": [
      "0 < μ < 1",
      "μ > 1",
      "-1 < μ < 0",
      "0 < μ < 1/4"
    ],
    "correctAnswer": 0,
    "explanation": "tr J = μ, det J = 1/4. A spiral needs μ² < 4·1/4, i.e. |μ| < 1; instability needs μ > 0."
  },
  {
    "id": "mv-nd-p-h-012",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = y, y' = -16x + μy, the origin is an unstable spiral exactly when:",
    "options": [
      "0 < μ < 8",
      "-8 < μ < 0",
      "0 < μ < 16",
      "μ > 8"
    ],
    "correctAnswer": 0,
    "explanation": "tr J = μ, det J = 16. A spiral needs μ² < 4·16, i.e. |μ| < 8; instability needs μ > 0."
  },
  {
    "id": "mv-nd-p-h-013",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = y, y' = 4x - x³, classify the equilibria.",
    "options": [
      "All three are saddles",
      "(0, 0) is a saddle; (±2, 0) are linear centres (true centres, since energy is conserved)",
      "(0, 0) is a stable spiral; (±2, 0) are unstable nodes",
      "(0, 0) is a centre; (±2, 0) are saddles"
    ],
    "correctAnswer": 1,
    "explanation": "J = [[0, 1], [4 - 3x², 0]]. At 0, det = -4 < 0. At ±2, det = -(4 - 12) = 8 > 0 and tr = 0. E = y²/2 - 2x² + x⁴/4 is conserved, so those are true centres."
  },
  {
    "id": "mv-nd-p-h-014",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = y, y' = x - x³, classify the equilibria.",
    "options": [
      "(0, 0) is a stable spiral; (±1, 0) are unstable nodes",
      "(0, 0) is a saddle; (±1, 0) are linear centres (true centres, since energy is conserved)",
      "(0, 0) is a centre; (±1, 0) are saddles",
      "All three are saddles"
    ],
    "correctAnswer": 1,
    "explanation": "J = [[0, 1], [1 - 3x², 0]]. At 0, det = -1 < 0. At ±1, det = -(1 - 3) = 2 > 0 and tr = 0. E = y²/2 - x²/2 + x⁴/4 is conserved, so those are true centres."
  },
  {
    "id": "mv-nd-p-h-015",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = y, y' = 9x - x³, classify the equilibria.",
    "options": [
      "(0, 0) is a stable spiral; (±3, 0) are unstable nodes",
      "(0, 0) is a centre; (±3, 0) are saddles",
      "All three are saddles",
      "(0, 0) is a saddle; (±3, 0) are linear centres (true centres, since energy is conserved)"
    ],
    "correctAnswer": 3,
    "explanation": "J = [[0, 1], [9 - 3x², 0]]. At 0, det = -9 < 0. At ±3, det = -(9 - 27) = 18 > 0 and tr = 0. E = y²/2 - (9/2)x² + x⁴/4 is conserved, so those are true centres."
  },
  {
    "id": "mv-nd-p-h-016",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "At an equilibrium tr J = -2 and det J = 5. Find the eigenvalues of J.",
    "options": [
      "1 ± 2i",
      "-2 ± 5i",
      "-1 ± 4i",
      "-1 ± 2i"
    ],
    "correctAnswer": 3,
    "explanation": "λ = (tr ± √(tr² - 4det))/2 = (-2 ± √(-16))/2 = (-2 ± 4i)/2 = -1 ± 2i."
  },
  {
    "id": "mv-nd-p-h-017",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "At an equilibrium tr J = 2 and det J = 10. Find the eigenvalues of J.",
    "options": [
      "2 ± 10i",
      "-1 ± 3i",
      "1 ± 9i",
      "1 ± 3i"
    ],
    "correctAnswer": 3,
    "explanation": "λ = (tr ± √(tr² - 4det))/2 = (2 ± √(-36))/2 = (2 ± 6i)/2 = 1 ± 3i."
  },
  {
    "id": "mv-nd-p-h-018",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "At an equilibrium tr J = -4 and det J = 8. Find the eigenvalues of J.",
    "options": [
      "-2 ± 4i",
      "-2 ± 2i",
      "-4 ± 8i",
      "2 ± 2i"
    ],
    "correctAnswer": 1,
    "explanation": "λ = (tr ± √(tr² - 4det))/2 = (-4 ± √(-16))/2 = (-4 ± 4i)/2 = -2 ± 2i."
  },
  {
    "id": "mv-nd-p-h-019",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "At an equilibrium tr J = 0 and det J = 9. Find the eigenvalues of J.",
    "options": [
      "±6i",
      "±9i",
      "±3i",
      "3 and -3"
    ],
    "correctAnswer": 2,
    "explanation": "λ = (tr ± √(tr² - 4det))/2 = (0 ± √(-36))/2 = (0 ± 6i)/2 = ±3i."
  },
  {
    "id": "mv-nd-p-h-020",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "At an equilibrium tr J = 6 and det J = 25. Find the eigenvalues of J.",
    "options": [
      "-3 ± 4i",
      "3 ± 16i",
      "6 ± 25i",
      "3 ± 4i"
    ],
    "correctAnswer": 3,
    "explanation": "λ = (tr ± √(tr² - 4det))/2 = (6 ± √(-64))/2 = (6 ± 8i)/2 = 3 ± 4i."
  },
  {
    "id": "mv-nd-p-h-021",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = y, y' = -x³, which quantity is conserved along trajectories?",
    "options": [
      "xy",
      "y²/2 + x⁴/4",
      "y - x",
      "x² + y²"
    ],
    "correctAnswer": 1,
    "explanation": "With E = y²/2 + x⁴/4: E' = y·y' + (dV/dx)·x' = y·(-V'(x)) + V'(x)·y = 0. Conserved quantities turn linear centres into true centres."
  },
  {
    "id": "mv-nd-p-h-022",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = y, y' = -sin x, which quantity is conserved along trajectories?",
    "options": [
      "x² + y²",
      "y - x",
      "xy",
      "y²/2 - cos x"
    ],
    "correctAnswer": 3,
    "explanation": "With E = y²/2 - cos x: E' = y·y' + (dV/dx)·x' = y·(-V'(x)) + V'(x)·y = 0. Conserved quantities turn linear centres into true centres."
  },
  {
    "id": "mv-nd-p-h-023",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = y, y' = -2x, which quantity is conserved along trajectories?",
    "options": [
      "y²/2 + x²",
      "x² + y²",
      "y - x",
      "xy"
    ],
    "correctAnswer": 0,
    "explanation": "With E = y²/2 + x²: E' = y·y' + (dV/dx)·x' = y·(-V'(x)) + V'(x)·y = 0. Conserved quantities turn linear centres into true centres."
  },
  {
    "id": "mv-nd-p-h-024",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = y, y' = x - x³, which quantity is conserved along trajectories?",
    "options": [
      "y - x",
      "xy",
      "x² + y²",
      "y²/2 - x²/2 + x⁴/4"
    ],
    "correctAnswer": 3,
    "explanation": "With E = y²/2 - x²/2 + x⁴/4: E' = y·y' + (dV/dx)·x' = y·(-V'(x)) + V'(x)·y = 0. Conserved quantities turn linear centres into true centres."
  },
  {
    "id": "mv-nd-p-h-025",
    "topic": "Phase Planes and Local Stability",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "How many equilibria does x' = 4 - x², y' = -y have, and what are they?",
    "options": [
      "Two: (2, 0) a stable node and (-2, 0) a saddle",
      "None",
      "One stable spiral",
      "Two saddles"
    ],
    "correctAnswer": 0,
    "explanation": "x = ±2. J = [[-2x, 0], [0, -1]]: at x = 2 both eigenvalues are negative; at x = -2 they have opposite signs."
  },
  {
    "id": "mv-nd-l-e-001",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Which of (x - y)², x², x² + 3y² and x² - y² is positive definite near the origin of ℝ²?",
    "options": [
      "(x - y)²",
      "x²",
      "x² + 3y²",
      "x² - y²"
    ],
    "correctAnswer": 2,
    "explanation": "x² + 3y² vanishes only at (0, 0) and is positive elsewhere. The others take negative values or vanish along a line."
  },
  {
    "id": "mv-nd-l-e-002",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Which of (x + 2y)², 2x² + y⁴, x² - y⁴ and y² is positive definite near the origin of ℝ²?",
    "options": [
      "(x + 2y)²",
      "y²",
      "2x² + y⁴",
      "x² - y⁴"
    ],
    "correctAnswer": 2,
    "explanation": "2x² + y⁴ vanishes only at (0, 0) and is positive elsewhere. The others take negative values or vanish along a line."
  },
  {
    "id": "mv-nd-l-e-003",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Which of xy, x⁴, x⁴ + y² and x⁴ - y² is positive definite near the origin of ℝ²?",
    "options": [
      "xy",
      "x⁴",
      "x⁴ - y²",
      "x⁴ + y²"
    ],
    "correctAnswer": 3,
    "explanation": "x⁴ + y² vanishes only at (0, 0) and is positive elsewhere. The others take negative values or vanish along a line."
  },
  {
    "id": "mv-nd-l-e-004",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Which of -x² - y², x² + 3xy + y², x² + xy + y² and x² - 2xy + y² is positive definite near the origin of ℝ²?",
    "options": [
      "x² + xy + y²",
      "x² - 2xy + y²",
      "x² + 3xy + y²",
      "-x² - y²"
    ],
    "correctAnswer": 0,
    "explanation": "x² + xy + y² vanishes only at (0, 0) and is positive elsewhere. The others take negative values or vanish along a line."
  },
  {
    "id": "mv-nd-l-e-005",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = -x, y' = -2y and V = x² + y², compute V̇ = ∇V·F.",
    "options": [
      "-x² - 2y²",
      "-2x² - 4y²",
      "-2x - 4y",
      "2x² + 4y²"
    ],
    "correctAnswer": 1,
    "explanation": "V̇ = 2x·(-x) + 2y·(-2y) = -2x² - 4y², which is negative definite: asymptotically stable."
  },
  {
    "id": "mv-nd-l-e-006",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = -3x, y' = -y and V = x² + y², compute V̇ = ∇V·F.",
    "options": [
      "-6x - 2y",
      "6x² + 2y²",
      "-3x² - y²",
      "-6x² - 2y²"
    ],
    "correctAnswer": 3,
    "explanation": "V̇ = 2x·(-3x) + 2y·(-y) = -6x² - 2y², which is negative definite: asymptotically stable."
  },
  {
    "id": "mv-nd-l-e-007",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = -2x, y' = -5y and V = x² + y², compute V̇ = ∇V·F.",
    "options": [
      "4x² + 10y²",
      "-2x² - 5y²",
      "-4x - 10y",
      "-4x² - 10y²"
    ],
    "correctAnswer": 3,
    "explanation": "V̇ = 2x·(-2x) + 2y·(-5y) = -4x² - 10y², which is negative definite: asymptotically stable."
  },
  {
    "id": "mv-nd-l-e-008",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = -(1/2)x, y' = -4y and V = x² + y², compute V̇ = ∇V·F.",
    "options": [
      "-x - 8y",
      "x² + 8y²",
      "-x² - 8y²",
      "-(1/2)x² - 4y²"
    ],
    "correctAnswer": 2,
    "explanation": "V̇ = 2x·(-(1/2)x) + 2y·(-4y) = -x² - 8y², which is negative definite: asymptotically stable."
  },
  {
    "id": "mv-nd-l-e-009",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = -x, y' = -y and V = x² + 3y², compute V̇.",
    "options": [
      "-2x² - 2y²",
      "-2x² - 6y²",
      "-x² - 3y²",
      "2x² + 6y²"
    ],
    "correctAnswer": 1,
    "explanation": "V̇ = 2x·(-x) + 6y·(-y) = -2x² - 6y²: negative definite."
  },
  {
    "id": "mv-nd-l-e-010",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = -2x, y' = -2y and V = 2x² + y², compute V̇.",
    "options": [
      "-4x² - 4y²",
      "-4x² - 2y²",
      "-8x² - 4y²",
      "8x² + 4y²"
    ],
    "correctAnswer": 2,
    "explanation": "V̇ = 4x·(-2x) + 2y·(-2y) = -8x² - 4y²: negative definite."
  },
  {
    "id": "mv-nd-l-e-011",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = -x, y' = -y and V = 3x² + 2y², compute V̇.",
    "options": [
      "-6x² - 4y²",
      "-2x² - 2y²",
      "-3x² - 2y²",
      "6x² + 4y²"
    ],
    "correctAnswer": 0,
    "explanation": "V̇ = 6x·(-x) + 4y·(-y) = -6x² - 4y²: negative definite."
  },
  {
    "id": "mv-nd-l-e-012",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = -3x, y' = -3y and V = x² + 4y², compute V̇.",
    "options": [
      "-3x² - 12y²",
      "-6x² - 24y²",
      "-6x² - 6y²",
      "6x² + 24y²"
    ],
    "correctAnswer": 1,
    "explanation": "V̇ = 2x·(-3x) + 8y·(-3y) = -6x² - 24y²: negative definite."
  },
  {
    "id": "mv-nd-l-e-013",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Is V = 2x² + 2xy + y² positive definite?",
    "options": [
      "No: the matrix [[2, 1], [1, 1]] has p₁₁ = 2 and det = 1",
      "No: any cross term makes V indefinite",
      "Yes: the matrix [[2, 1], [1, 1]] has p₁₁ = 2 and det = 1",
      "No: det P would have to be negative"
    ],
    "correctAnswer": 2,
    "explanation": "V = xᵀPx with P = [[2, 1], [1, 1]] is positive definite iff p₁₁ > 0 and det P > 0. Here det P = 1 > 0."
  },
  {
    "id": "mv-nd-l-e-014",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Is V = x² + 4xy + y² positive definite?",
    "options": [
      "Yes: the matrix [[1, 2], [2, 1]] has p₁₁ = 1 and det = -3",
      "Yes: all coefficients are positive",
      "Yes: p₁₁ > 0 is enough",
      "No: the matrix [[1, 2], [2, 1]] has p₁₁ = 1 and det = -3"
    ],
    "correctAnswer": 3,
    "explanation": "V = xᵀPx with P = [[1, 2], [2, 1]] is positive definite iff p₁₁ > 0 and det P > 0. Here det P = -3 ≤ 0."
  },
  {
    "id": "mv-nd-l-e-015",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Is V = 3x² + 2xy + 2y² positive definite?",
    "options": [
      "Yes: the matrix [[3, 1], [1, 2]] has p₁₁ = 3 and det = 5",
      "No: the matrix [[3, 1], [1, 2]] has p₁₁ = 3 and det = 5",
      "No: det P would have to be negative",
      "No: any cross term makes V indefinite"
    ],
    "correctAnswer": 0,
    "explanation": "V = xᵀPx with P = [[3, 1], [1, 2]] is positive definite iff p₁₁ > 0 and det P > 0. Here det P = 5 > 0."
  },
  {
    "id": "mv-nd-l-e-016",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Is V = x² + 2xy + y² positive definite?",
    "options": [
      "Yes: the matrix [[1, 1], [1, 1]] has p₁₁ = 1 and det = 0",
      "Yes: all coefficients are positive",
      "No: the matrix [[1, 1], [1, 1]] has p₁₁ = 1 and det = 0",
      "Yes: p₁₁ > 0 is enough"
    ],
    "correctAnswer": 2,
    "explanation": "V = xᵀPx with P = [[1, 1], [1, 1]] is positive definite iff p₁₁ > 0 and det P > 0. Here det P = 0 ≤ 0."
  },
  {
    "id": "mv-nd-l-e-017",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Is V = 4x² + 6xy + 2y² positive definite?",
    "options": [
      "Yes: p₁₁ > 0 is enough",
      "Yes: the matrix [[4, 3], [3, 2]] has p₁₁ = 4 and det = -1",
      "No: the matrix [[4, 3], [3, 2]] has p₁₁ = 4 and det = -1",
      "Yes: all coefficients are positive"
    ],
    "correctAnswer": 2,
    "explanation": "V = xᵀPx with P = [[4, 3], [3, 2]] is positive definite iff p₁₁ > 0 and det P > 0. Here det P = -1 ≤ 0."
  },
  {
    "id": "mv-nd-l-e-018",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = F(x), the orbital derivative of V is:",
    "options": [
      "V̇ = ∇V · F",
      "∂V/∂t",
      "∇ · F",
      "|∇V|²"
    ],
    "correctAnswer": 0,
    "explanation": "Chain rule along a solution: d/dt V(x(t)) = ∇V(x)·x'(t)."
  },
  {
    "id": "mv-nd-l-e-019",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "If V is positive definite and V̇ is negative definite near 0, the origin is:",
    "options": [
      "Locally asymptotically stable",
      "Globally stable automatically",
      "Unstable",
      "Stable but not attracting"
    ],
    "correctAnswer": 0,
    "explanation": "This is Lyapunov's direct method."
  },
  {
    "id": "mv-nd-l-e-020",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "If V is positive definite and V̇ ≤ 0 near 0, Lyapunov's theorem guarantees:",
    "options": [
      "Nothing",
      "Instability",
      "Stability, but not necessarily convergence",
      "Asymptotic stability"
    ],
    "correctAnswer": 2,
    "explanation": "V cannot increase, so trajectories stay in small sublevel sets; a centre is the standard example."
  },
  {
    "id": "mv-nd-l-e-021",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Failing to find a Lyapunov function for an equilibrium shows that it is:",
    "options": [
      "Unstable",
      "Nothing can be concluded",
      "A saddle",
      "A centre"
    ],
    "correctAnswer": 1,
    "explanation": "Lyapunov's conditions are sufficient; a failed search is not evidence either way."
  },
  {
    "id": "mv-nd-l-e-022",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For global asymptotic stability we additionally need V to be:",
    "options": [
      "Quadratic",
      "Linear",
      "Radially unbounded (V → ∞ as |x| → ∞)",
      "Bounded"
    ],
    "correctAnswer": 2,
    "explanation": "That makes every sublevel set bounded, so trajectories cannot escape to infinity."
  },
  {
    "id": "mv-nd-l-e-023",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "For x' = y, y' = -x, the function V = x² + y² gives V̇ = 0. The origin is:",
    "options": [
      "Unstable",
      "Asymptotically stable",
      "A saddle",
      "Stable but not asymptotically stable"
    ],
    "correctAnswer": 3,
    "explanation": "Trajectories stay on circles x² + y² = constant: a centre."
  },
  {
    "id": "mv-nd-l-e-024",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Geometrically, V̇ < 0 means the vector field:",
    "options": [
      "Is tangent to the level sets of V",
      "Crosses each level set of V towards smaller values",
      "Points away from the origin",
      "Is zero"
    ],
    "correctAnswer": 1,
    "explanation": "∇V points outward from the level set; ∇V·F < 0 means F points inward."
  },
  {
    "id": "mv-nd-l-e-025",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Easy",
    "question": "Why must a Lyapunov function be positive definite rather than just non-negative?",
    "options": [
      "So that V is differentiable",
      "So that V̇ is negative",
      "It need not be",
      "So that small sublevel sets are small neighbourhoods of the equilibrium"
    ],
    "correctAnswer": 3,
    "explanation": "If V vanishes on a line, its sublevel sets are strips that do not confine trajectories near 0."
  },
  {
    "id": "mv-nd-l-m-001",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -x + y, y' = -x - y and V = x² + y², compute V̇.",
    "options": [
      "0",
      "-2x² - 2y² + 4xy",
      "-2x² + 2y²",
      "-2x² - 2y²"
    ],
    "correctAnswer": 3,
    "explanation": "2x(-x + y) + 2y(-x - y) = -2x² - 2y²: the cross terms cancel."
  },
  {
    "id": "mv-nd-l-m-002",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -x³ + y, y' = -x - y³ and V = x² + y², compute V̇.",
    "options": [
      "-2x² - 2y²",
      "-2x⁴ - 2y⁴",
      "0",
      "-2x⁴ + 2y⁴"
    ],
    "correctAnswer": 1,
    "explanation": "2x(-x³ + y) + 2y(-x - y³) = -2x⁴ - 2y⁴."
  },
  {
    "id": "mv-nd-l-m-003",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -x - y and V = x² + y², compute V̇.",
    "options": [
      "-2x² - 2y²",
      "-2y²",
      "-2x²",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "2x·y + 2y(-x - y) = -2y²: only semi-definite."
  },
  {
    "id": "mv-nd-l-m-004",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -2x + y³, y' = -xy² and V = x² + y², compute V̇.",
    "options": [
      "-4x² - 2y²",
      "0",
      "-4x²",
      "-4x² + 4xy³"
    ],
    "correctAnswer": 2,
    "explanation": "2x(-2x + y³) + 2y(-xy²) = -4x² + 2xy³ - 2xy³ = -4x²."
  },
  {
    "id": "mv-nd-l-m-005",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y - x³, y' = -x and V = x² + y², compute V̇.",
    "options": [
      "-2x⁴",
      "-2y²",
      "-2x⁴ - 2y²",
      "2x⁴"
    ],
    "correctAnswer": 0,
    "explanation": "2x(y - x³) + 2y(-x) = -2x⁴."
  },
  {
    "id": "mv-nd-l-m-006",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -x + 4y, y' = -x - y, choose a so that V = x² + a·y² has no xy term in V̇.",
    "options": [
      "a = 5",
      "a = 4",
      "a = 1/4",
      "a = 1"
    ],
    "correctAnswer": 1,
    "explanation": "V̇ = 2x(-x + 4y) + 2a·y(-x - y) = -2x² + (2·4 - 2a·1)xy - 2a y². The xy term vanishes when a = 4, leaving a negative definite V̇."
  },
  {
    "id": "mv-nd-l-m-007",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -x + 2y, y' = -x - y, choose a so that V = x² + a·y² has no xy term in V̇.",
    "options": [
      "a = 1/2",
      "a = 1",
      "a = 3",
      "a = 2"
    ],
    "correctAnswer": 3,
    "explanation": "V̇ = 2x(-x + 2y) + 2a·y(-x - y) = -2x² + (2·2 - 2a·1)xy - 2a y². The xy term vanishes when a = 2, leaving a negative definite V̇."
  },
  {
    "id": "mv-nd-l-m-008",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -x + 6y, y' = -2x - y, choose a so that V = x² + a·y² has no xy term in V̇.",
    "options": [
      "a = 3",
      "a = 12",
      "a = 1/3",
      "a = 1"
    ],
    "correctAnswer": 0,
    "explanation": "V̇ = 2x(-x + 6y) + 2a·y(-2x - y) = -2x² + (2·6 - 2a·2)xy - 2a y². The xy term vanishes when a = 6/2 = 3, leaving a negative definite V̇."
  },
  {
    "id": "mv-nd-l-m-009",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -x + y, y' = -2x - y, choose a so that V = x² + a·y² has no xy term in V̇.",
    "options": [
      "a = 1",
      "a = 2",
      "a = 3/2",
      "a = 1/2"
    ],
    "correctAnswer": 3,
    "explanation": "V̇ = 2x(-x + y) + 2a·y(-2x - y) = -2x² + (2·1 - 2a·2)xy - 2a y². The xy term vanishes when a = 1/2, leaving a negative definite V̇."
  },
  {
    "id": "mv-nd-l-m-010",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -x + 9y, y' = -3x - y, choose a so that V = x² + a·y² has no xy term in V̇.",
    "options": [
      "a = 1/3",
      "a = 3",
      "a = 27",
      "a = 1"
    ],
    "correctAnswer": 1,
    "explanation": "V̇ = 2x(-x + 9y) + 2a·y(-3x - y) = -2x² + (2·9 - 2a·3)xy - 2a y². The xy term vanishes when a = 9/3 = 3, leaving a negative definite V̇."
  },
  {
    "id": "mv-nd-l-m-011",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -x(1 - x²/4) with V = x²/2, V̇ = -x²(1 - x²/4). Which interval does this V certify as part of the region of attraction?",
    "options": [
      "(-4, 4)",
      "(-2, 2)",
      "(0, 2)",
      "All of ℝ"
    ],
    "correctAnswer": 1,
    "explanation": "V̇ < 0 for 0 < |x| < 2, and x = ±2 are equilibria, so the basin is exactly (-2, 2)."
  },
  {
    "id": "mv-nd-l-m-012",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -x(1 - x²/9) with V = x²/2, V̇ = -x²(1 - x²/9). Which interval does this V certify as part of the region of attraction?",
    "options": [
      "(-3, 3)",
      "All of ℝ",
      "(0, 3)",
      "(-9, 9)"
    ],
    "correctAnswer": 0,
    "explanation": "V̇ < 0 for 0 < |x| < 3, and x = ±3 are equilibria, so the basin is exactly (-3, 3)."
  },
  {
    "id": "mv-nd-l-m-013",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -x(1 - 4x²) with V = x²/2, V̇ = -x²(1 - 4x²). Which interval does this V certify as part of the region of attraction?",
    "options": [
      "All of ℝ",
      "(-1/2, 1/2)",
      "(-1/4, 1/4)",
      "(0, 1/2)"
    ],
    "correctAnswer": 1,
    "explanation": "V̇ < 0 for 0 < |x| < 1/2, and x = ±1/2 are equilibria, so the basin is exactly (-1/2, 1/2)."
  },
  {
    "id": "mv-nd-l-m-014",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -x(1 - x²/25) with V = x²/2, V̇ = -x²(1 - x²/25). Which interval does this V certify as part of the region of attraction?",
    "options": [
      "(0, 5)",
      "(-5, 5)",
      "All of ℝ",
      "(-25, 25)"
    ],
    "correctAnswer": 1,
    "explanation": "V̇ < 0 for 0 < |x| < 5, and x = ±5 are equilibria, so the basin is exactly (-5, 5)."
  },
  {
    "id": "mv-nd-l-m-015",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -x - y, take V = (x² + y²)/2. Compute V̇ and the largest invariant set in {V̇ = 0}.",
    "options": [
      "V̇ = -y²; the invariant set is {(0, 0)}",
      "V̇ = -(x² + y²); the invariant set is {(0, 0)}",
      "V̇ = -y²; the invariant set is the x-axis",
      "V̇ = 0; every circle is invariant"
    ],
    "correctAnswer": 0,
    "explanation": "V̇ = x·y + y(-x - y) = -y². On y = 0 a trajectory needs y' = -x = 0, so x = 0. LaSalle: everything converges to the origin."
  },
  {
    "id": "mv-nd-l-m-016",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -4x - 2y, take V = (4x² + y²)/2. Compute V̇ and the largest invariant set in {V̇ = 0}.",
    "options": [
      "V̇ = -2y²; the invariant set is {(0, 0)}",
      "V̇ = -2(x² + y²); the invariant set is {(0, 0)}",
      "V̇ = 0; every circle is invariant",
      "V̇ = -2y²; the invariant set is the x-axis"
    ],
    "correctAnswer": 0,
    "explanation": "V̇ = 4x·y + y(-4x - 2y) = -2y². On y = 0 a trajectory needs y' = -4x = 0, so x = 0. LaSalle: everything converges to the origin."
  },
  {
    "id": "mv-nd-l-m-017",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -2x - 3y, take V = (2x² + y²)/2. Compute V̇ and the largest invariant set in {V̇ = 0}.",
    "options": [
      "V̇ = 0; every circle is invariant",
      "V̇ = -3y²; the invariant set is the x-axis",
      "V̇ = -3y²; the invariant set is {(0, 0)}",
      "V̇ = -3(x² + y²); the invariant set is {(0, 0)}"
    ],
    "correctAnswer": 2,
    "explanation": "V̇ = 2x·y + y(-2x - 3y) = -3y². On y = 0 a trajectory needs y' = -2x = 0, so x = 0. LaSalle: everything converges to the origin."
  },
  {
    "id": "mv-nd-l-m-018",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = y, y' = -9x - y, take V = (9x² + y²)/2. Compute V̇ and the largest invariant set in {V̇ = 0}.",
    "options": [
      "V̇ = -y²; the invariant set is the x-axis",
      "V̇ = -(x² + y²); the invariant set is {(0, 0)}",
      "V̇ = -y²; the invariant set is {(0, 0)}",
      "V̇ = 0; every circle is invariant"
    ],
    "correctAnswer": 2,
    "explanation": "V̇ = 9x·y + y(-9x - y) = -y². On y = 0 a trajectory needs y' = -9x = 0, so x = 0. LaSalle: everything converges to the origin."
  },
  {
    "id": "mv-nd-l-m-019",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For the gradient flow x' = -∇h with h = x² + 2y² and V = h - min h, find V̇ at (1, 1).",
    "options": [
      "-36",
      "20",
      "-6",
      "-20"
    ],
    "correctAnswer": 3,
    "explanation": "V̇ = -|∇h|². At (1, 1), ∇h = (2, 4), so V̇ = -(4 + 16) = -20."
  },
  {
    "id": "mv-nd-l-m-020",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For the damped pendulum x' = y, y' = -sin x - cy (c > 0), the energy V = y²/2 + 1 - cos x gives:",
    "options": [
      "V̇ = 0",
      "V̇ = -c(x² + y²)",
      "V̇ = cy²",
      "V̇ = -cy², so the energy never increases"
    ],
    "correctAnswer": 3,
    "explanation": "y(-sin x - cy) + sin x · y = -cy²; LaSalle then gives convergence to the hanging position."
  },
  {
    "id": "mv-nd-l-m-021",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "V = x² + y² gives V̇ > 0 at some points for a system whose linearization has tr J = -2 and det J = 5. The origin is:",
    "options": [
      "A saddle",
      "Unstable",
      "Asymptotically stable; this V is simply a bad choice",
      "A centre"
    ],
    "correctAnswer": 2,
    "explanation": "Hyperbolic with eigenvalues of negative real part; a weighted quadratic V will work."
  },
  {
    "id": "mv-nd-l-m-022",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For x' = -x³, y' = -y³ the Jacobian at the origin is the zero matrix. Using V = x² + y²:",
    "options": [
      "The origin is unstable",
      "V̇ = 0, so it is a centre",
      "Nothing can be concluded",
      "V̇ = -2x⁴ - 2y⁴, so the origin is globally asymptotically stable"
    ],
    "correctAnswer": 3,
    "explanation": "Lyapunov's method settles a case where linearization says nothing."
  },
  {
    "id": "mv-nd-l-m-023",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "A sublevel set {V ≤ c} is positively invariant when V̇ ≤ 0 on it because:",
    "options": [
      "V cannot increase along trajectories, so they cannot cross the level V = c outward",
      "V is quadratic",
      "V̇ is constant",
      "The set is convex"
    ],
    "correctAnswer": 0,
    "explanation": "Leaving the set would require V to exceed c, i.e. to increase."
  },
  {
    "id": "mv-nd-l-m-024",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For the gradient flow x' = -∇h with h = 3x² + y² and V = h - min h, find V̇ at (1, 2).",
    "options": [
      "-52",
      "52",
      "-10",
      "-100"
    ],
    "correctAnswer": 0,
    "explanation": "V̇ = -|∇h|². At (1, 2), ∇h = (6, 4), so V̇ = -(36 + 16) = -52."
  },
  {
    "id": "mv-nd-l-m-025",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Medium",
    "question": "For the gradient flow x' = -∇h with h = (x - 1)² + y² and V = h - min h, find V̇ at (2, 1).",
    "options": [
      "-8",
      "-4",
      "-16",
      "8"
    ],
    "correctAnswer": 0,
    "explanation": "V̇ = -|∇h|². At (2, 1), ∇h = (2, 2), so V̇ = -(4 + 4) = -8."
  },
  {
    "id": "mv-nd-l-h-001",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -y - 2x(x² + y²), y' = x - 2y(x² + y²), use V = x² + y² to determine the stability of the origin.",
    "options": [
      "Unstable",
      "Stable but not asymptotically stable",
      "A saddle",
      "Globally asymptotically stable"
    ],
    "correctAnswer": 3,
    "explanation": "The rotation terms cancel and V̇ = -4(x² + y²)². Negative definite and V radially unbounded."
  },
  {
    "id": "mv-nd-l-h-002",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -y + 3x(x² + y²), y' = x + 3y(x² + y²), use V = x² + y² to determine the stability of the origin.",
    "options": [
      "Stable but not asymptotically stable",
      "A saddle",
      "Unstable",
      "Globally asymptotically stable"
    ],
    "correctAnswer": 2,
    "explanation": "The rotation terms cancel and V̇ = 6(x² + y²)². Positive definite: unstable by the instability theorem."
  },
  {
    "id": "mv-nd-l-h-003",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -y, y' = x, use V = x² + y² to determine the stability of the origin.",
    "options": [
      "Stable but not asymptotically stable",
      "Unstable",
      "A saddle",
      "Globally asymptotically stable"
    ],
    "correctAnswer": 0,
    "explanation": "V̇ = 2x(-y) + 2y(x) = 0. V̇ ≡ 0: trajectories stay on circles."
  },
  {
    "id": "mv-nd-l-h-004",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -y - (1/2)x(x² + y²), y' = x - (1/2)y(x² + y²), use V = x² + y² to determine the stability of the origin.",
    "options": [
      "Globally asymptotically stable",
      "Unstable",
      "Stable but not asymptotically stable",
      "A saddle"
    ],
    "correctAnswer": 0,
    "explanation": "The rotation terms cancel and V̇ = -(x² + y²)². Negative definite and V radially unbounded."
  },
  {
    "id": "mv-nd-l-h-005",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -y + (1/4)x(x² + y²), y' = x + (1/4)y(x² + y²), use V = x² + y² to determine the stability of the origin.",
    "options": [
      "Globally asymptotically stable",
      "Stable but not asymptotically stable",
      "Unstable",
      "A saddle"
    ],
    "correctAnswer": 2,
    "explanation": "The rotation terms cancel and V̇ = (1/2)(x² + y²)². Positive definite: unstable by the instability theorem."
  },
  {
    "id": "mv-nd-l-h-006",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For the saddle x' = x, y' = -y, take V = x² - y². What does V show?",
    "options": [
      "The origin is stable",
      "The origin is asymptotically stable",
      "The origin is unstable: V > 0 near 0 (along the x-axis) and V̇ is positive definite",
      "Nothing, because V is not positive definite"
    ],
    "correctAnswer": 2,
    "explanation": "V̇ = 2x·x - 2y·(-y) = 2x² + 2y² > 0 away from 0, and V takes positive values arbitrarily close to 0. The instability theorem applies."
  },
  {
    "id": "mv-nd-l-h-007",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For the saddle x' = 2x, y' = -3y, take V = x² - y². What does V show?",
    "options": [
      "Nothing, because V is not positive definite",
      "The origin is unstable: V > 0 near 0 (along the x-axis) and V̇ is positive definite",
      "The origin is asymptotically stable",
      "The origin is stable"
    ],
    "correctAnswer": 1,
    "explanation": "V̇ = 2x·2x - 2y·(-3y) = 4x² + 6y² > 0 away from 0, and V takes positive values arbitrarily close to 0. The instability theorem applies."
  },
  {
    "id": "mv-nd-l-h-008",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For the saddle x' = x, y' = -4y, take V = x² - y². What does V show?",
    "options": [
      "The origin is unstable: V > 0 near 0 (along the x-axis) and V̇ is positive definite",
      "The origin is stable",
      "The origin is asymptotically stable",
      "Nothing, because V is not positive definite"
    ],
    "correctAnswer": 0,
    "explanation": "V̇ = 2x·x - 2y·(-4y) = 2x² + 8y² > 0 away from 0, and V takes positive values arbitrarily close to 0. The instability theorem applies."
  },
  {
    "id": "mv-nd-l-h-009",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -x (i.e. A = -I in ℝ²), which P solves AᵀP + PA = -2I?",
    "options": [
      "P = (1/2)I",
      "P = 2I",
      "P = I",
      "P = -I"
    ],
    "correctAnswer": 2,
    "explanation": "AᵀP + PA = -2P, so -2P = -2I gives P = I, i.e. V = x² + y²."
  },
  {
    "id": "mv-nd-l-h-010",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -2x (i.e. A = -2I in ℝ²), which P solves AᵀP + PA = -2I?",
    "options": [
      "P = 3I",
      "P = -I",
      "P = (1/2)I",
      "P = 2I"
    ],
    "correctAnswer": 2,
    "explanation": "AᵀP + PA = -4P, so -4P = -2I gives P = (1/2)I, i.e. V = (1/2)(x² + y²)."
  },
  {
    "id": "mv-nd-l-h-011",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -4x (i.e. A = -4I in ℝ²), which P solves AᵀP + PA = -2I?",
    "options": [
      "P = 4I",
      "P = -I",
      "P = (1/2)I",
      "P = (1/4)I"
    ],
    "correctAnswer": 3,
    "explanation": "AᵀP + PA = -8P, so -8P = -2I gives P = (1/4)I, i.e. V = (1/4)(x² + y²)."
  },
  {
    "id": "mv-nd-l-h-012",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -(1/2)x (i.e. A = -(1/2)I in ℝ²), which P solves AᵀP + PA = -2I?",
    "options": [
      "P = -I",
      "P = (1/2)I",
      "P = 4I",
      "P = 2I"
    ],
    "correctAnswer": 3,
    "explanation": "AᵀP + PA = -P, so -P = -2I gives P = 2I, i.e. V = 2(x² + y²)."
  },
  {
    "id": "mv-nd-l-h-013",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For A = diag(-1, -2) and Q = I, solve AᵀP + PA = -Q for the diagonal P.",
    "options": [
      "P = diag(1, 1/2)",
      "P = diag(1, 2)",
      "P = diag(2, 4)",
      "P = diag(1/2, 1/4)"
    ],
    "correctAnswer": 3,
    "explanation": "For diagonal A and P the equation reads -2a·p₁ = -1 and -2b·p₂ = -1, so p₁ = 1/2, p₂ = 1/4."
  },
  {
    "id": "mv-nd-l-h-014",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For A = diag(-2, -3) and Q = I, solve AᵀP + PA = -Q for the diagonal P.",
    "options": [
      "P = diag(1/2, 1/3)",
      "P = diag(2, 3)",
      "P = diag(1/4, 1/6)",
      "P = diag(4, 6)"
    ],
    "correctAnswer": 2,
    "explanation": "For diagonal A and P the equation reads -2a·p₁ = -1 and -2b·p₂ = -1, so p₁ = 1/4, p₂ = 1/6."
  },
  {
    "id": "mv-nd-l-h-015",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -x + x³/4, y' = -y with V = x² + y², V̇ = -2x²(1 - x²/4) - 2y². What is the largest r such that the disk x² + y² < r² is certified to lie in the region of attraction?",
    "options": [
      "r = 2",
      "Every r (global)",
      "r = 1",
      "r = 4"
    ],
    "correctAnswer": 0,
    "explanation": "V̇ < 0 whenever |x| < 2 and (x, y) ≠ 0. The disk of radius 2 fits inside that strip, but a larger one contains (±2, 0), which are equilibria."
  },
  {
    "id": "mv-nd-l-h-016",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -x + x³/9, y' = -y with V = x² + y², V̇ = -2x²(1 - x²/9) - 2y². What is the largest r such that the disk x² + y² < r² is certified to lie in the region of attraction?",
    "options": [
      "r = 3/2",
      "Every r (global)",
      "r = 9",
      "r = 3"
    ],
    "correctAnswer": 3,
    "explanation": "V̇ < 0 whenever |x| < 3 and (x, y) ≠ 0. The disk of radius 3 fits inside that strip, but a larger one contains (±3, 0), which are equilibria."
  },
  {
    "id": "mv-nd-l-h-017",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -x + x³, y' = -y with V = x² + y², V̇ = -2x²(1 - x²) - 2y². What is the largest r such that the disk x² + y² < r² is certified to lie in the region of attraction?",
    "options": [
      "r = 2",
      "Every r (global)",
      "r = 1",
      "r = 1/2"
    ],
    "correctAnswer": 2,
    "explanation": "V̇ < 0 whenever |x| < 1 and (x, y) ≠ 0. The disk of radius 1 fits inside that strip, but a larger one contains (±1, 0), which are equilibria."
  },
  {
    "id": "mv-nd-l-h-018",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For x' = -x + 4x³, y' = -y with V = x² + y², V̇ = -2x²(1 - 4x²) - 2y². What is the largest r such that the disk x² + y² < r² is certified to lie in the region of attraction?",
    "options": [
      "r = 1/2",
      "r = 1/4",
      "r = 1",
      "Every r (global)"
    ],
    "correctAnswer": 0,
    "explanation": "V̇ < 0 whenever |x| < 1/2 and (x, y) ≠ 0. The disk of radius 1/2 fits inside that strip, but a larger one contains (±1/2, 0), which are equilibria."
  },
  {
    "id": "mv-nd-l-h-019",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "What can be concluded about the origin of x' = -x³ - y, y' = x - y³ using a polynomial Lyapunov function (x² + y² or x⁴ + y⁴)?",
    "options": [
      "Globally asymptotically stable",
      "Unstable",
      "Stable but not asymptotically stable",
      "Locally asymptotically stable (this V gives no global conclusion)"
    ],
    "correctAnswer": 0,
    "explanation": "V̇ = 2x(-x³ - y) + 2y(x - y³) = -2x⁴ - 2y⁴ < 0 away from 0, and V is radially unbounded."
  },
  {
    "id": "mv-nd-l-h-020",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "Why does V = x²/(1 + x²) + y² fail to prove global stability even if V̇ < 0 everywhere except 0?",
    "options": [
      "It is not radially unbounded: {V < 1} contains the whole x-axis, so trajectories could escape",
      "It is not differentiable",
      "It is not positive definite",
      "V̇ cannot be negative"
    ],
    "correctAnswer": 0,
    "explanation": "Without bounded sublevel sets, decreasing V does not prevent drifting off to infinity."
  },
  {
    "id": "mv-nd-l-h-021",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "For the damped pendulum with energy V = y²/2 + 1 - cos x, which sublevel set is safe to use with LaSalle near the hanging position?",
    "options": [
      "{V < 2π}",
      "All of ℝ²",
      "{V < c} with c < 2, the component around the origin",
      "{V < 3}"
    ],
    "correctAnswer": 2,
    "explanation": "The upright saddles (±π, 0) have V = 2; staying below that level keeps the set a compact loop around the origin."
  },
  {
    "id": "mv-nd-l-h-022",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "V = (x + y)² is used for a planar system with equilibrium at the origin. What is wrong?",
    "options": [
      "V̇ is always positive",
      "V is not differentiable",
      "V is only semi-definite: it vanishes on the line y = -x",
      "Nothing"
    ],
    "correctAnswer": 2,
    "explanation": "Its small sublevel sets are strips around y = -x, not neighbourhoods of the origin."
  },
  {
    "id": "mv-nd-l-h-023",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "LaSalle's principle applies to a compact positively invariant set K with V̇ ≤ 0. Trajectories in K converge to:",
    "options": [
      "The largest invariant set contained in {V̇ = 0}",
      "The minimum of V",
      "The set {V̇ = 0} itself",
      "The boundary of K"
    ],
    "correctAnswer": 0,
    "explanation": "Only the part of {V̇ = 0} that trajectories can stay in forever matters."
  },
  {
    "id": "mv-nd-l-h-024",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "Why can the Lyapunov equation AᵀP + PA = -Q prove the linearized stability theorem for nonlinear systems?",
    "options": [
      "It cannot",
      "Because P is always I",
      "The same V = xᵀPx has V̇ = -xᵀQx + (higher-order terms), which is negative near 0",
      "Because nonlinear terms vanish"
    ],
    "correctAnswer": 2,
    "explanation": "Near the origin the quadratic term dominates the cubic and higher remainder."
  },
  {
    "id": "mv-nd-l-h-025",
    "topic": "Lyapunov Stability Methods",
    "module": "Nonlinear Dynamical Systems",
    "difficulty": "Hard",
    "question": "What can be concluded about the origin of x' = -x - y³, y' = x³ - y using a polynomial Lyapunov function (x² + y² or x⁴ + y⁴)?",
    "options": [
      "Stable but not asymptotically stable",
      "Locally asymptotically stable (this V gives no global conclusion)",
      "Globally asymptotically stable",
      "Unstable"
    ],
    "correctAnswer": 2,
    "explanation": "With V = x⁴ + y⁴: V̇ = 4x³(-x - y³) + 4y³(x³ - y) = -4x⁴ - 4y⁴."
  }
];
