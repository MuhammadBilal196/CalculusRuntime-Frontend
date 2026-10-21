/**
 * Practice bank — Integration on Moving Domains (Multivariable Calculus).
 * 150 MCQs: 50 Easy / 50 Medium / 50 Hard, split evenly across the module's two topics
 * (Coarea Formula and Level-Set Integration; Reynolds Transport Theorem).
 * Each item: unique string id, topic, module, difficulty, four distinct options, one correct
 * answer (index), and an explanation. Answers are computed by the generator, not typed.
 */
export const MV_MOVING_DOMAINS_PRACTICE_BANK = [
  {
    "id": "mv-md-c-e-001",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = 3x + 4y, find |∇u|.",
    "options": [
      "7",
      "25",
      "5",
      "√7"
    ],
    "correctAnswer": 2,
    "explanation": "∇u = (3, 4), so |∇u| = √(9 + 16) = 5. It is the same at every point."
  },
  {
    "id": "mv-md-c-e-002",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = 5x + 12y, find |∇u|.",
    "options": [
      "169",
      "13",
      "√17",
      "17"
    ],
    "correctAnswer": 1,
    "explanation": "∇u = (5, 12), so |∇u| = √(25 + 144) = 13. It is the same at every point."
  },
  {
    "id": "mv-md-c-e-003",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = x + y, find |∇u|.",
    "options": [
      "√2",
      "0",
      "1",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "∇u = (1, 1), so |∇u| = √(1 + 1) = √2. It is the same at every point."
  },
  {
    "id": "mv-md-c-e-004",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = 2x + y, find |∇u|.",
    "options": [
      "√5",
      "5",
      "3",
      "√3"
    ],
    "correctAnswer": 0,
    "explanation": "∇u = (2, 1), so |∇u| = √(4 + 1) = √5. It is the same at every point."
  },
  {
    "id": "mv-md-c-e-005",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = 6x + 8y, find |∇u|.",
    "options": [
      "100",
      "√14",
      "10",
      "14"
    ],
    "correctAnswer": 2,
    "explanation": "∇u = (6, 8), so |∇u| = √(36 + 64) = 10. It is the same at every point."
  },
  {
    "id": "mv-md-c-e-006",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = x + 3y, find |∇u|.",
    "options": [
      "10",
      "√10",
      "4",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "∇u = (1, 3), so |∇u| = √(1 + 9) = √10. It is the same at every point."
  },
  {
    "id": "mv-md-c-e-007",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = 3x + 4y, how far apart (perpendicular distance) are the level lines u = 0 and u = 1?",
    "options": [
      "5",
      "1/5",
      "1/25",
      "1"
    ],
    "correctAnswer": 1,
    "explanation": "Level lines are spaced dt/|∇u| apart. Here |∇u| = 5, so the distance is 1/5."
  },
  {
    "id": "mv-md-c-e-008",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = 5x + 12y, how far apart (perpendicular distance) are the level lines u = 0 and u = 2?",
    "options": [
      "2/13",
      "2",
      "26",
      "2/169"
    ],
    "correctAnswer": 0,
    "explanation": "Level lines are spaced dt/|∇u| apart. Here |∇u| = 13, so the distance is 2/13."
  },
  {
    "id": "mv-md-c-e-009",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = 6x + 8y, how far apart (perpendicular distance) are the level lines u = 0 and u = 5?",
    "options": [
      "50",
      "5",
      "1/2",
      "1/20"
    ],
    "correctAnswer": 2,
    "explanation": "Level lines are spaced dt/|∇u| apart. Here |∇u| = 10, so the distance is 5/10."
  },
  {
    "id": "mv-md-c-e-010",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = x + y, how far apart (perpendicular distance) are the level lines u = 0 and u = 1?",
    "options": [
      "1/2",
      "√2",
      "1",
      "√2/2"
    ],
    "correctAnswer": 3,
    "explanation": "Level lines are spaced dt/|∇u| apart. Here |∇u| = √2, so the distance is 1/√2."
  },
  {
    "id": "mv-md-c-e-011",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = x² + y², find |∇u| at a point at distance r = 2 from the origin.",
    "options": [
      "8",
      "4",
      "3",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "∇u = 2(x, y), so |∇u| = 2r = 4."
  },
  {
    "id": "mv-md-c-e-012",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = 3(x² + y²), find |∇u| at a point at distance r = 1 from the origin.",
    "options": [
      "6",
      "12",
      "2",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "∇u = 6(x, y), so |∇u| = 6r = 6."
  },
  {
    "id": "mv-md-c-e-013",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = 2(x² + y²), find |∇u| at a point at distance r = 3 from the origin.",
    "options": [
      "18",
      "36",
      "12",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "∇u = 4(x, y), so |∇u| = 4r = 12."
  },
  {
    "id": "mv-md-c-e-014",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = (1/2)(x² + y²), find |∇u| at a point at distance r = 4 from the origin.",
    "options": [
      "8",
      "16",
      "2",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "∇u = (x, y), so |∇u| = r = 4."
  },
  {
    "id": "mv-md-c-e-015",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = x² + y², what is the level set {u = 9}?",
    "options": [
      "The circle of radius 3",
      "The circle of radius 9",
      "The circle of radius 9/2",
      "The disk of radius 3"
    ],
    "correctAnswer": 0,
    "explanation": "x² + y² = 9 is the circle centred at the origin with radius √9 = 3."
  },
  {
    "id": "mv-md-c-e-016",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "What is the length of the level set {x + y = 1/2} inside the unit square [0, 1]²?",
    "options": [
      "1",
      "√2/2",
      "√2",
      "1/2"
    ],
    "correctAnswer": 1,
    "explanation": "For 0 ≤ t ≤ 1 the segment has length √2·t = √2·1/2 = √2/2."
  },
  {
    "id": "mv-md-c-e-017",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = 3x + 4y, what is the unit normal to the level lines, pointing towards larger u?",
    "options": [
      "(-3/5, -4/5)",
      "(3, 4)",
      "(-4/5, 3/5)",
      "(3/5, 4/5)"
    ],
    "correctAnswer": 3,
    "explanation": "n = ∇u/|∇u| = (3, 4)/5. The vector (-4/5, 3/5) is tangent to the level lines instead."
  },
  {
    "id": "mv-md-c-e-018",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = 5x + 12y, what is the unit normal to the level lines, pointing towards larger u?",
    "options": [
      "(5/13, 12/13)",
      "(-5/13, -12/13)",
      "(-12/13, 5/13)",
      "(5, 12)"
    ],
    "correctAnswer": 0,
    "explanation": "n = ∇u/|∇u| = (5, 12)/13. The vector (-12/13, 5/13) is tangent to the level lines instead."
  },
  {
    "id": "mv-md-c-e-019",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For u(x, y) = 8x + 6y, what is the unit normal to the level lines, pointing towards larger u?",
    "options": [
      "(-3/5, 4/5)",
      "(4/5, 3/5)",
      "(-4/5, -3/5)",
      "(8, 6)"
    ],
    "correctAnswer": 1,
    "explanation": "n = ∇u/|∇u| = (8, 6)/10. The vector (-3/5, 4/5) is tangent to the level lines instead."
  },
  {
    "id": "mv-md-c-e-020",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Taking u(x, y) = x in the coarea formula gives which familiar result?",
    "options": [
      "Fubini's theorem (slicing by vertical lines)",
      "Green's theorem",
      "The divergence theorem",
      "Polar coordinates"
    ],
    "correctAnswer": 0,
    "explanation": "|∇x| = 1 and the level sets x = t are vertical lines, so the formula is iterated integration."
  },
  {
    "id": "mv-md-c-e-021",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Taking u = √(x² + y²) in the coarea formula gives which familiar result?",
    "options": [
      "Polar coordinates",
      "Fubini's theorem",
      "Spherical coordinates",
      "Stokes' theorem"
    ],
    "correctAnswer": 0,
    "explanation": "|∇r| = 1 and the level sets are circles of radius t with ds = t dθ, giving dA = r dr dθ."
  },
  {
    "id": "mv-md-c-e-022",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "In the weighted coarea formula ∬ f|∇u| dA = ∫(∫_{u=t} f ds) dt, the factor |∇u| appears on:",
    "options": [
      "Both sides",
      "Neither side",
      "The area-integral side",
      "The level-set side"
    ],
    "correctAnswer": 2,
    "explanation": "The weight converts area into (arc length) × dt. Dividing by |∇u| moves it to the level-set side."
  },
  {
    "id": "mv-md-c-e-023",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "At a regular point, the gradient ∇u is ___ to the level curve through that point.",
    "options": [
      "Perpendicular",
      "Parallel",
      "Tangent",
      "Unrelated"
    ],
    "correctAnswer": 0,
    "explanation": "Differentiating u(γ(s)) = t gives ∇u · γ'(s) = 0."
  },
  {
    "id": "mv-md-c-e-024",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Where |∇u| is large, the level curves {u = t} for equally spaced t are:",
    "options": [
      "Always circles",
      "Spread far apart",
      "Not defined",
      "Packed closely together"
    ],
    "correctAnswer": 3,
    "explanation": "The spacing is dt/|∇u|, so a large gradient means small spacing, like contour lines on a steep hillside."
  },
  {
    "id": "mv-md-c-e-025",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Which hypothesis is needed for ∬ g dA = ∫(∫_{u=t} g/|∇u| ds) dt?",
    "options": [
      "u is linear",
      "g is constant",
      "The region is a disk",
      "∇u ≠ 0 (except possibly at finitely many points)"
    ],
    "correctAnswer": 3,
    "explanation": "Dividing by |∇u| needs it to be nonzero; where ∇u = 0 on a region, that region is missed."
  },
  {
    "id": "mv-md-c-m-001",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "For u = x²/4 + y²/9, find the area of the sublevel set {u < 1}.",
    "options": [
      "5π",
      "36π",
      "6π",
      "12π"
    ],
    "correctAnswer": 2,
    "explanation": "{u < t} is an ellipse with semi-axes 2√t and 3√t, so its area is πab·t = π·6·1 = 6π. Equivalently V'(t) = ∫ ds/|∇u| = πab = 6π."
  },
  {
    "id": "mv-md-c-m-002",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "For u = x² + y²/16, find the area of the sublevel set {u < 2}.",
    "options": [
      "4π",
      "10π",
      "8π",
      "32π"
    ],
    "correctAnswer": 2,
    "explanation": "{u < t} is an ellipse with semi-axes √t and 4√t, so its area is πab·t = π·4·2 = 8π. Equivalently V'(t) = ∫ ds/|∇u| = πab = 4π."
  },
  {
    "id": "mv-md-c-m-003",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "For u = x²/9 + y²/25, find the area of the sublevel set {u < 1/3}.",
    "options": [
      "15π",
      "5π",
      "8π/3",
      "75π"
    ],
    "correctAnswer": 1,
    "explanation": "{u < t} is an ellipse with semi-axes 3√t and 5√t, so its area is πab·t = π·15·1/3 = 5π. Equivalently V'(t) = ∫ ds/|∇u| = πab = 15π."
  },
  {
    "id": "mv-md-c-m-004",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "For u = x²/4 + y²/4, find the area of the sublevel set {u < 4}.",
    "options": [
      "64π",
      "32π",
      "4π",
      "16π"
    ],
    "correctAnswer": 3,
    "explanation": "{u < t} is an ellipse with semi-axes 2√t and 2√t, so its area is πab·t = π·4·4 = 16π. Equivalently V'(t) = ∫ ds/|∇u| = πab = 4π."
  },
  {
    "id": "mv-md-c-m-005",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Using level sets of u = x² + y², evaluate ∬_ℝ² e^(-2(x² + y²)) dA.",
    "options": [
      "2π",
      "π",
      "π/4",
      "π/2"
    ],
    "correctAnswer": 3,
    "explanation": "∫_{u=t} ds/|∇u| = π for every t, so the integral is ∫₀^∞ e^(-2t)·π dt = π/2."
  },
  {
    "id": "mv-md-c-m-006",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "For u = x² + y² on the disk of radius 1, evaluate ∬ |∇u| dA.",
    "options": [
      "2π/3",
      "2π",
      "π",
      "4π/3"
    ],
    "correctAnswer": 3,
    "explanation": "By coarea it is ∫₀^{R²} (length of {u = t}) dt = ∫₀^{1} 2π√t dt = (4π/3)R³ = 4π/3. Directly: ∫∫ 2r·r dr dθ gives the same."
  },
  {
    "id": "mv-md-c-m-007",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "For u = x² + y² on the disk of radius 2, evaluate ∬ |∇u| dA.",
    "options": [
      "8π",
      "32π/3",
      "16π/3",
      "4π"
    ],
    "correctAnswer": 1,
    "explanation": "By coarea it is ∫₀^{R²} (length of {u = t}) dt = ∫₀^{4} 2π√t dt = (4π/3)R³ = 32π/3. Directly: ∫∫ 2r·r dr dθ gives the same."
  },
  {
    "id": "mv-md-c-m-008",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "For u = x² + y² on the disk of radius 3, evaluate ∬ |∇u| dA.",
    "options": [
      "36π",
      "108π",
      "18π",
      "9π"
    ],
    "correctAnswer": 0,
    "explanation": "By coarea it is ∫₀^{R²} (length of {u = t}) dt = ∫₀^{9} 2π√t dt = (4π/3)R³ = 36π. Directly: ∫∫ 2r·r dr dθ gives the same."
  },
  {
    "id": "mv-md-c-m-009",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "For u = x² + y² on the disk of radius 1/2, evaluate ∬ |∇u| dA.",
    "options": [
      "π/12",
      "π/2",
      "π/6",
      "π/4"
    ],
    "correctAnswer": 2,
    "explanation": "By coarea it is ∫₀^{R²} (length of {u = t}) dt = ∫₀^{1/4} 2π√t dt = (4π/3)R³ = π/6. Directly: ∫∫ 2r·r dr dθ gives the same."
  },
  {
    "id": "mv-md-c-m-010",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "(X, Y) is uniform on the unit square. Using level sets of u = x + y, find the density of U = X + Y at t = 1/3.",
    "options": [
      "2/3",
      "1/6",
      "√2/3",
      "1/3"
    ],
    "correctAnswer": 3,
    "explanation": "p_U(t) = ∫_{u=t} ds/|∇u|. The segment has length √2·1/3 and |∇u| = √2, so p_U(1/3) = 1/3."
  },
  {
    "id": "mv-md-c-m-011",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Slicing a region Ω along the lines x + 2y = t, the integral ∬_Ω g dA equals C·∫(∫_{u=t} g ds) dt with C =",
    "options": [
      "1/√5",
      "√5",
      "1",
      "1/5"
    ],
    "correctAnswer": 0,
    "explanation": "|∇u| = √(1 + 4) = √5 is constant, so 1/|∇u| = 1/√5 comes out of the inner integral."
  },
  {
    "id": "mv-md-c-m-012",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Slicing a region Ω along the lines 3x + 4y = t, the integral ∬_Ω g dA equals C·∫(∫_{u=t} g ds) dt with C =",
    "options": [
      "1/25",
      "1/(5)",
      "5",
      "1"
    ],
    "correctAnswer": 1,
    "explanation": "|∇u| = √(9 + 16) = 5 is constant, so 1/|∇u| = 1/(5) comes out of the inner integral."
  },
  {
    "id": "mv-md-c-m-013",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Slicing a region Ω along the lines 2x + 2y = t, the integral ∬_Ω g dA equals C·∫(∫_{u=t} g ds) dt with C =",
    "options": [
      "1",
      "1/(2√2)",
      "1/8",
      "2√2"
    ],
    "correctAnswer": 1,
    "explanation": "|∇u| = √(4 + 4) = 2√2 is constant, so 1/|∇u| = 1/(2√2) comes out of the inner integral."
  },
  {
    "id": "mv-md-c-m-014",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Slicing a region Ω along the lines x + 3y = t, the integral ∬_Ω g dA equals C·∫(∫_{u=t} g ds) dt with C =",
    "options": [
      "1/√10",
      "1",
      "√10",
      "1/10"
    ],
    "correctAnswer": 0,
    "explanation": "|∇u| = √(1 + 9) = √10 is constant, so 1/|∇u| = 1/√10 comes out of the inner integral."
  },
  {
    "id": "mv-md-c-m-015",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A ball of radius 1 in ℝ³ has radial density ρ = r. Using spherical shells (coarea with u = |x|), find its mass.",
    "options": [
      "2π",
      "π",
      "4π",
      "4π/3"
    ],
    "correctAnswer": 1,
    "explanation": "M = ∫₀^R 4πr²·ρ(r) dr = πR⁴ = π."
  },
  {
    "id": "mv-md-c-m-016",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A ball of radius 2 in ℝ³ has radial density ρ = 1/r. Using spherical shells (coarea with u = |x|), find its mass.",
    "options": [
      "32π",
      "16π",
      "32π/3",
      "8π"
    ],
    "correctAnswer": 3,
    "explanation": "M = ∫₀^R 4πr²·ρ(r) dr = 2πR² = 8π."
  },
  {
    "id": "mv-md-c-m-017",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A ball of radius 3 in ℝ³ has radial density ρ = r². Using spherical shells (coarea with u = |x|), find its mass.",
    "options": [
      "162π",
      "36π",
      "27π",
      "972π/5"
    ],
    "correctAnswer": 3,
    "explanation": "M = ∫₀^R 4πr²·ρ(r) dr = 4πR⁵/5 = 972π/5."
  },
  {
    "id": "mv-md-c-m-018",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "With u = x² + y², find d/dt ∬_{u<t} (x² + y²) dA at t = 2.",
    "options": [
      "π",
      "8π",
      "2π",
      "4π"
    ],
    "correctAnswer": 2,
    "explanation": "d/dt ∬_{u<t} g dA = ∫_{u=t} g/|∇u| ds = t·π, which is 2π at t = 2."
  },
  {
    "id": "mv-md-c-m-019",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "For which choice of u does ∫_{u=t} ds/|∇u| give the rate of change of the area of the disk {x² + y² < t}?",
    "options": [
      "u = x",
      "u = x² + y²",
      "u = x + y",
      "u = xy"
    ],
    "correctAnswer": 1,
    "explanation": "The sublevel sets of x² + y² are exactly those disks, and V'(t) = ∫_{u=t} ds/|∇u| = π."
  },
  {
    "id": "mv-md-c-m-020",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A point is uniform in a region Ω of area |Ω|. The density of U = u(X, Y) at t is:",
    "options": [
      "(1/|Ω|) ∫_{u=t} ds/|∇u|",
      "(1/|Ω|) × length of {u = t}",
      "|Ω| ∫_{u=t} ds",
      "∫_{u=t} |∇u| ds"
    ],
    "correctAnswer": 0,
    "explanation": "P(U ≤ t) = (1/|Ω|) × area of {u ≤ t}; differentiating gives the weighted length."
  },
  {
    "id": "mv-md-c-m-021",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "V(t) is the area of {u < t}. Which is generally NOT equal to V'(t)?",
    "options": [
      "The weighted length of {u = t}",
      "The length of the level curve {u = t}",
      "∫_{u=t} ds/|∇u|",
      "lim (V(t + h) - V(t))/h"
    ],
    "correctAnswer": 1,
    "explanation": "Plain length ignores how far apart the levels are; it equals V'(t) only when |∇u| = 1 on the curve."
  },
  {
    "id": "mv-md-c-m-022",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Using level sets of u = x² + y², evaluate ∬_ℝ² e^(-3(x² + y²)) dA.",
    "options": [
      "π/3",
      "2π/3",
      "π/6",
      "3π"
    ],
    "correctAnswer": 0,
    "explanation": "∫_{u=t} ds/|∇u| = π for every t, so the integral is ∫₀^∞ e^(-3t)·π dt = π/3."
  },
  {
    "id": "mv-md-c-m-023",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "(X, Y) is uniform on the unit square. Using level sets of u = x + y, find the density of U = X + Y at t = 3/4.",
    "options": [
      "3/8",
      "3√2/4",
      "3/4",
      "1/4"
    ],
    "correctAnswer": 2,
    "explanation": "p_U(t) = ∫_{u=t} ds/|∇u|. The segment has length √2·3/4 and |∇u| = √2, so p_U(3/4) = 3/4."
  },
  {
    "id": "mv-md-c-m-024",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A ball of radius 1 in ℝ³ has radial density ρ = 1/r. Using spherical shells (coarea with u = |x|), find its mass.",
    "options": [
      "4π",
      "π",
      "4π/3",
      "2π"
    ],
    "correctAnswer": 3,
    "explanation": "M = ∫₀^R 4πr²·ρ(r) dr = 2πR² = 2π."
  },
  {
    "id": "mv-md-c-m-025",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A ball of radius 2 in ℝ³ has radial density ρ = r. Using spherical shells (coarea with u = |x|), find its mass.",
    "options": [
      "16π",
      "32π/3",
      "32π",
      "8π"
    ],
    "correctAnswer": 0,
    "explanation": "M = ∫₀^R 4πr²·ρ(r) dr = πR⁴ = 16π."
  },
  {
    "id": "mv-md-c-h-001",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "On the unit disk, u = 0 for r ≤ 1/3 and u = (r - 1/3)² for 1/3 < r < 1. What does ∫_{t>0} (∫_{u=t} ds/|∇u|) dt equal?",
    "options": [
      "π/9",
      "2π/3",
      "π",
      "8π/9"
    ],
    "correctAnswer": 3,
    "explanation": "Level curves for t > 0 only sweep the annulus 1/3 < r < 1, of area π(1 - 1/9) = 8π/9. The plateau r ≤ 1/3 (where ∇u = 0) is missed."
  },
  {
    "id": "mv-md-c-h-002",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "On the unit disk, u = 0 for r ≤ 2/3 and u = (r - 2/3)² for 2/3 < r < 1. What does ∫_{t>0} (∫_{u=t} ds/|∇u|) dt equal?",
    "options": [
      "4π/9",
      "π/3",
      "5π/9",
      "π"
    ],
    "correctAnswer": 2,
    "explanation": "Level curves for t > 0 only sweep the annulus 2/3 < r < 1, of area π(1 - 4/9) = 5π/9. The plateau r ≤ 2/3 (where ∇u = 0) is missed."
  },
  {
    "id": "mv-md-c-h-003",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "On the unit disk, u = 0 for r ≤ 1/4 and u = (r - 1/4)² for 1/4 < r < 1. What does ∫_{t>0} (∫_{u=t} ds/|∇u|) dt equal?",
    "options": [
      "3π/4",
      "π/16",
      "15π/16",
      "π"
    ],
    "correctAnswer": 2,
    "explanation": "Level curves for t > 0 only sweep the annulus 1/4 < r < 1, of area π(1 - 1/16) = 15π/16. The plateau r ≤ 1/4 (where ∇u = 0) is missed."
  },
  {
    "id": "mv-md-c-h-004",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "On the unit disk, u = 0 for r ≤ 3/4 and u = (r - 3/4)² for 3/4 < r < 1. What does ∫_{t>0} (∫_{u=t} ds/|∇u|) dt equal?",
    "options": [
      "π/4",
      "9π/16",
      "7π/16",
      "π"
    ],
    "correctAnswer": 2,
    "explanation": "Level curves for t > 0 only sweep the annulus 3/4 < r < 1, of area π(1 - 9/16) = 7π/16. The plateau r ≤ 3/4 (where ∇u = 0) is missed."
  },
  {
    "id": "mv-md-c-h-005",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "(X, Y) is uniform on [0, 1]². Integrating the level-set density of U = X + Y, find P(U ≤ 1/3).",
    "options": [
      "1/9",
      "17/18",
      "1/18",
      "1/6"
    ],
    "correctAnswer": 2,
    "explanation": "p_U(t) = t on [0, 1] and 2 - t on [1, 2]. So P(U ≤ 1/3) = ∫ from 0 to 1/3 of t dt = 1/18."
  },
  {
    "id": "mv-md-c-h-006",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Using level sets of |x| (spheres or circles), evaluate ∭_ℝ³ e^(-|x|) dV.",
    "options": [
      "2π",
      "4π",
      "8π",
      "π²"
    ],
    "correctAnswer": 2,
    "explanation": "With u = |x|: ∫₀^∞ 4πr² e^(-r) dr = 4π·2! = 8π."
  },
  {
    "id": "mv-md-c-h-007",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "For u = x²/4 + y²/9, evaluate ∬_{u<1} u dA.",
    "options": [
      "6π",
      "3π/2",
      "2π",
      "3π"
    ],
    "correctAnswer": 3,
    "explanation": "∫_{u=t} ds/|∇u| = πab for every t, so ∬_{u<1} u dA = ∫₀¹ t·π·6 dt = 3π."
  },
  {
    "id": "mv-md-c-h-008",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "For u = x² + y²/25, evaluate ∬_{u<1} u dA.",
    "options": [
      "5π/4",
      "5π",
      "5π/2",
      "5π/3"
    ],
    "correctAnswer": 2,
    "explanation": "∫_{u=t} ds/|∇u| = πab for every t, so ∬_{u<1} u dA = ∫₀¹ t·π·5 dt = 5π/2."
  },
  {
    "id": "mv-md-c-h-009",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "For u = x²/9 + y²/16, evaluate ∬_{u<1} u dA.",
    "options": [
      "4π",
      "12π",
      "6π",
      "3π"
    ],
    "correctAnswer": 2,
    "explanation": "∫_{u=t} ds/|∇u| = πab for every t, so ∬_{u<1} u dA = ∫₀¹ t·π·12 dt = 6π."
  },
  {
    "id": "mv-md-c-h-010",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Near a point where |∇u| = 2, use level-set coordinates (t, s) with u(x(t, s)) = t and s arc length along {u = t}. What is |det ∂(x, y)/∂(t, s)|?",
    "options": [
      "1",
      "2",
      "1/2",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "x_t·∇u = 1 gives x_t·n = 1/|∇u|, and x_s is a unit tangent, so the Jacobian is 1/|∇u| = 1/2."
  },
  {
    "id": "mv-md-c-h-011",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Near a point where |∇u| = 5, use level-set coordinates (t, s) with u(x(t, s)) = t and s arc length along {u = t}. What is |det ∂(x, y)/∂(t, s)|?",
    "options": [
      "1",
      "25",
      "5",
      "1/5"
    ],
    "correctAnswer": 3,
    "explanation": "x_t·∇u = 1 gives x_t·n = 1/|∇u|, and x_s is a unit tangent, so the Jacobian is 1/|∇u| = 1/5."
  },
  {
    "id": "mv-md-c-h-012",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Near a point where |∇u| = 1/2, use level-set coordinates (t, s) with u(x(t, s)) = t and s arc length along {u = t}. What is |det ∂(x, y)/∂(t, s)|?",
    "options": [
      "1",
      "1/4",
      "2",
      "1/2"
    ],
    "correctAnswer": 2,
    "explanation": "x_t·∇u = 1 gives x_t·n = 1/|∇u|, and x_s is a unit tangent, so the Jacobian is 1/|∇u| = 2."
  },
  {
    "id": "mv-md-c-h-013",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Near a point where |∇u| = 4, use level-set coordinates (t, s) with u(x(t, s)) = t and s arc length along {u = t}. What is |det ∂(x, y)/∂(t, s)|?",
    "options": [
      "1",
      "16",
      "1/4",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "x_t·∇u = 1 gives x_t·n = 1/|∇u|, and x_s is a unit tangent, so the Jacobian is 1/|∇u| = 1/4."
  },
  {
    "id": "mv-md-c-h-014",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "A point is uniform in the unit disk and R is its distance from the centre. Using level sets of u = r, find P(R ≤ 1/2).",
    "options": [
      "3/4",
      "1",
      "1/2",
      "1/4"
    ],
    "correctAnswer": 3,
    "explanation": "p_R(r) = (1/π)·2πr/|∇r| = 2r, so P(R ≤ 1/2) = ∫ from 0 to 1/2 of 2r dr = 1/4."
  },
  {
    "id": "mv-md-c-h-015",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "The spherical shell 1 ≤ |x| ≤ 2 in ℝ³ has density ρ = 1/|x|. Using shells, find its mass.",
    "options": [
      "6π",
      "4π",
      "3π",
      "28π/3"
    ],
    "correctAnswer": 0,
    "explanation": "M = ∫_1^2 4πr²·(1/r) dr = 2π(r²)|_1^2 = 2π(4 - 1) = 6π."
  },
  {
    "id": "mv-md-c-h-016",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "The spherical shell 1 ≤ |x| ≤ 3 in ℝ³ has density ρ = 1/|x|. Using shells, find its mass.",
    "options": [
      "8π",
      "16π",
      "32π",
      "104π/3"
    ],
    "correctAnswer": 1,
    "explanation": "M = ∫_1^3 4πr²·(1/r) dr = 2π(r²)|_1^3 = 2π(9 - 1) = 16π."
  },
  {
    "id": "mv-md-c-h-017",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "The spherical shell 2 ≤ |x| ≤ 3 in ℝ³ has density ρ = 1/|x|. Using shells, find its mass.",
    "options": [
      "76π/3",
      "4π",
      "5π",
      "10π"
    ],
    "correctAnswer": 3,
    "explanation": "M = ∫_2^3 4πr²·(1/r) dr = 2π(r²)|_2^3 = 2π(9 - 4) = 10π."
  },
  {
    "id": "mv-md-c-h-018",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Why does the weighted form ∬ f|∇u| dA = ∫(∫_{u=t} f ds) dt survive a plateau where ∇u = 0, while the unweighted form fails?",
    "options": [
      "Because the level set over the plateau is a curve",
      "Because plateaus have zero area",
      "On the plateau |∇u| = 0, so it contributes nothing to the weighted area integral either",
      "It does not survive"
    ],
    "correctAnswer": 2,
    "explanation": "Both sides of the weighted form ignore the plateau; the unweighted form needs its area but no level curve carries it."
  },
  {
    "id": "mv-md-c-h-019",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "At a saddle point of u, the level set through the saddle:",
    "options": [
      "Crosses itself, so level-set coordinates break down there",
      "Has |∇u| = 1",
      "Is empty",
      "Is a smooth circle"
    ],
    "correctAnswer": 0,
    "explanation": "∇u = 0 at the saddle; the Implicit Function Theorem does not apply, and the level set looks like an ×."
  },
  {
    "id": "mv-md-c-h-020",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "(X, Y) is uniform on [0, 1]². Integrating the level-set density of U = X + Y, find P(U ≤ 3/2).",
    "options": [
      "1/8",
      "7/8",
      "9/4",
      "3/4"
    ],
    "correctAnswer": 1,
    "explanation": "p_U(t) = t on [0, 1] and 2 - t on [1, 2]. So P(U ≤ 3/2) = 1 - ∫ from 3/2 to 2 of (2 - t) dt = 1 - 1/8 = 7/8."
  },
  {
    "id": "mv-md-c-h-021",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Using level sets of |x| (spheres or circles), evaluate ∬_ℝ² e^(-√(x² + y²)) dA.",
    "options": [
      "π",
      "√π",
      "4π",
      "2π"
    ],
    "correctAnswer": 3,
    "explanation": "With u = r: ∫₀^∞ 2πr e^(-r) dr = 2π·1! = 2π."
  },
  {
    "id": "mv-md-c-h-022",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "A point is uniform in the unit disk and R is its distance from the centre. Using level sets of u = r, find P(R ≤ 1/3).",
    "options": [
      "8/9",
      "1/3",
      "1/9",
      "2/3"
    ],
    "correctAnswer": 2,
    "explanation": "p_R(r) = (1/π)·2πr/|∇r| = 2r, so P(R ≤ 1/3) = ∫ from 0 to 1/3 of 2r dr = 1/9."
  },
  {
    "id": "mv-md-c-h-023",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "(X, Y) is uniform on [0, 1]². Integrating the level-set density of U = X + Y, find P(U ≤ 4/5).",
    "options": [
      "2/5",
      "17/25",
      "8/25",
      "16/25"
    ],
    "correctAnswer": 2,
    "explanation": "p_U(t) = t on [0, 1] and 2 - t on [1, 2]. So P(U ≤ 4/5) = ∫ from 0 to 4/5 of t dt = 8/25."
  },
  {
    "id": "mv-md-c-h-024",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Using level sets of |x| (spheres or circles), evaluate ∬_ℝ² (1 + x² + y²)^(-2) dA.",
    "options": [
      "π",
      "π/2",
      "π²",
      "2π"
    ],
    "correctAnswer": 0,
    "explanation": "∫₀^∞ 2πr(1 + r²)^(-2) dr = π[-(1 + r²)^(-1)]₀^∞ = π."
  },
  {
    "id": "mv-md-c-h-025",
    "topic": "Coarea Formula and Level-Set Integration",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "A point is uniform in the unit disk and R is its distance from the centre. Using level sets of u = r, find P(R ≤ 3/4).",
    "options": [
      "3/2",
      "9/16",
      "7/16",
      "3/4"
    ],
    "correctAnswer": 1,
    "explanation": "p_R(r) = (1/π)·2πr/|∇r| = 2r, so P(R ≤ 3/4) = ∫ from 0 to 3/4 of 2r dr = 9/16."
  },
  {
    "id": "mv-md-r-e-001",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Find d/dt ∫ from 0 to t² of x² dx at t = 1.",
    "options": [
      "1",
      "3",
      "2",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "The integrand has no t, so only the moving endpoint counts: f(b(t))·b'(t) = 1·2 = 2."
  },
  {
    "id": "mv-md-r-e-002",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Find d/dt ∫ from 0 to 3t of x dx at t = 1.",
    "options": [
      "0",
      "10",
      "9",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "The integrand has no t, so only the moving endpoint counts: f(b(t))·b'(t) = 3·3 = 9."
  },
  {
    "id": "mv-md-r-e-003",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Find d/dt ∫ from 0 to t³ of 2x dx at t = 1.",
    "options": [
      "7",
      "2",
      "6",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "The integrand has no t, so only the moving endpoint counts: f(b(t))·b'(t) = 2·3 = 6."
  },
  {
    "id": "mv-md-r-e-004",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Find d/dt ∫ from 0 to 2t of x² dx at t = 1.",
    "options": [
      "8",
      "4",
      "9",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "The integrand has no t, so only the moving endpoint counts: f(b(t))·b'(t) = 4·2 = 8."
  },
  {
    "id": "mv-md-r-e-005",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Find d/dt ∫ from t to 5 of x dx at t = 1.",
    "options": [
      "5",
      "-1",
      "0",
      "1"
    ],
    "correctAnswer": 1,
    "explanation": "Only the lower endpoint moves: d/dt = -f(a(t))·a'(t) = -1·1 = -1. The minus sign is the outward normal (-1) at the left end."
  },
  {
    "id": "mv-md-r-e-006",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Find d/dt ∫ from 2t to 10 of x² dx at t = 1.",
    "options": [
      "8",
      "4",
      "-8",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "Only the lower endpoint moves: d/dt = -f(a(t))·a'(t) = -4·2 = -8. The minus sign is the outward normal (-1) at the left end."
  },
  {
    "id": "mv-md-r-e-007",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Find d/dt ∫ from t² to 8 of 3 dx at t = 1.",
    "options": [
      "0",
      "6",
      "-6",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "Only the lower endpoint moves: d/dt = -f(a(t))·a'(t) = -3·2 = -6. The minus sign is the outward normal (-1) at the left end."
  },
  {
    "id": "mv-md-r-e-008",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "A disk has radius R(t). At the instant when R = 3 and R' = 2, use V' = ∮ v·n ds to find the rate of change of its area.",
    "options": [
      "12π",
      "6π",
      "18π",
      "9π"
    ],
    "correctAnswer": 0,
    "explanation": "v·n = R' on the whole circle of length 2πR, so A' = 2πR·R' = 2π·3·2 = 12π."
  },
  {
    "id": "mv-md-r-e-009",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "A ball has radius R(t). When R = 1 and R' = 2, how fast is its volume changing?",
    "options": [
      "8π",
      "16π",
      "4π",
      "8π/3"
    ],
    "correctAnswer": 0,
    "explanation": "V' = ∯ v·n dS = R'·4πR² = 2·4π·1 = 8π."
  },
  {
    "id": "mv-md-r-e-010",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "A ball has radius R(t). When R = 2 and R' = 1, how fast is its volume changing?",
    "options": [
      "32π",
      "16π",
      "4π",
      "32π/3"
    ],
    "correctAnswer": 1,
    "explanation": "V' = ∯ v·n dS = R'·4πR² = 1·4π·4 = 16π."
  },
  {
    "id": "mv-md-r-e-011",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "A ball has radius R(t). When R = 3 and R' = 1/3, how fast is its volume changing?",
    "options": [
      "2π",
      "12π",
      "8π",
      "36π"
    ],
    "correctAnswer": 1,
    "explanation": "V' = ∯ v·n dS = R'·4πR² = 1/3·4π·9 = 12π."
  },
  {
    "id": "mv-md-r-e-012",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "The interval [a(t), b(t)] has a'(t) = 1 and b'(t) = 3. Find d/dt ∫_a^b 5 dx.",
    "options": [
      "10",
      "20",
      "15",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "Leibniz: f(b)b' - f(a)a' = 5·3 - 5·(1) = 10."
  },
  {
    "id": "mv-md-r-e-013",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "The interval [a(t), b(t)] has a'(t) = -1 and b'(t) = 2. Find d/dt ∫_a^b 2 dx.",
    "options": [
      "6",
      "3",
      "2",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "Leibniz: f(b)b' - f(a)a' = 2·2 - 2·(-1) = 6."
  },
  {
    "id": "mv-md-r-e-014",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "The interval [a(t), b(t)] has a'(t) = 2 and b'(t) = 2. Find d/dt ∫_a^b 3 dx.",
    "options": [
      "12",
      "3",
      "6",
      "0"
    ],
    "correctAnswer": 3,
    "explanation": "Leibniz: f(b)b' - f(a)a' = 3·2 - 3·(2) = 0."
  },
  {
    "id": "mv-md-r-e-015",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "The interval [a(t), b(t)] has a'(t) = 0 and b'(t) = 1/2. Find d/dt ∫_a^b 4 dx.",
    "options": [
      "4",
      "1/2",
      "2",
      "-2"
    ],
    "correctAnswer": 2,
    "explanation": "Leibniz: f(b)b' - f(a)a' = 4·1/2 - 4·(0) = 2."
  },
  {
    "id": "mv-md-r-e-016",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "In Reynolds' theorem, which part of the boundary velocity v enters the boundary term?",
    "options": [
      "The full speed |v|",
      "Only the tangential component",
      "Only the normal component v·n",
      "None of it"
    ],
    "correctAnswer": 2,
    "explanation": "Sliding along the boundary does not change the region; only normal motion sweeps volume in or out."
  },
  {
    "id": "mv-md-r-e-017",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "For a region that does not move, d/dt ∭_Ω f dV equals:",
    "options": [
      "0",
      "∭_Ω ∇·f dV",
      "∭_Ω ∂f/∂t dV",
      "∯ f dS"
    ],
    "correctAnswer": 2,
    "explanation": "With v·n = 0 the boundary term vanishes."
  },
  {
    "id": "mv-md-r-e-018",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "A material volume is a region that:",
    "options": [
      "Is always spherical",
      "Always has constant volume",
      "Moves with the fluid and always contains the same particles",
      "Is fixed in space"
    ],
    "correctAnswer": 2,
    "explanation": "Its boundary moves with the fluid velocity, so no fluid crosses it."
  },
  {
    "id": "mv-md-r-e-019",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Every material volume keeps its volume exactly when the velocity field satisfies:",
    "options": [
      "∇·u = 0",
      "|u| = 1",
      "∇ × u = 0",
      "u = 0"
    ],
    "correctAnswer": 0,
    "explanation": "V' = ∯ u·n dS = ∭ ∇·u dV for every region."
  },
  {
    "id": "mv-md-r-e-020",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "A region translates rigidly with constant velocity. Its volume:",
    "options": [
      "Stays constant",
      "Shrinks",
      "Depends on the speed",
      "Grows linearly"
    ],
    "correctAnswer": 0,
    "explanation": "∯ c·n dS = ∭ ∇·c dV = 0 for a constant vector c."
  },
  {
    "id": "mv-md-r-e-021",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "In Reynolds' theorem, the normal n on the boundary of Ω_t points:",
    "options": [
      "Inward",
      "Outward",
      "Along the velocity",
      "Upward"
    ],
    "correctAnswer": 1,
    "explanation": "With the outward normal, a growing region has v·n > 0 and the boundary term adds material."
  },
  {
    "id": "mv-md-r-e-022",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "A control volume is fixed in space while fluid flows through it. The flux term uses:",
    "options": [
      "The fluid velocity u",
      "The vorticity",
      "The acceleration",
      "The boundary velocity, which is zero"
    ],
    "correctAnswer": 0,
    "explanation": "Mass changes by fluid crossing the fixed boundary: d/dt ∭ ρ = -∯ ρ u·n dS."
  },
  {
    "id": "mv-md-r-e-023",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "The one-dimensional version of Reynolds' theorem is:",
    "options": [
      "Taylor's theorem",
      "The chain rule",
      "The Leibniz rule for integrals with variable limits",
      "Green's theorem"
    ],
    "correctAnswer": 2,
    "explanation": "d/dt ∫_a^b f = ∫ f_t + f(b)b' - f(a)a', the boundary terms being 'f × normal velocity'."
  },
  {
    "id": "mv-md-r-e-024",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "Euler's expansion formula ∂J/∂t = (∇·v) J says that ∇·v measures:",
    "options": [
      "The relative rate at which small volumes grow",
      "The rotation rate",
      "The speed of the flow",
      "The curvature of trajectories"
    ],
    "correctAnswer": 0,
    "explanation": "J is the volume scaling factor of the flow map."
  },
  {
    "id": "mv-md-r-e-025",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Easy",
    "question": "The continuity equation ∂ρ/∂t + ∇·(ρu) = 0 expresses:",
    "options": [
      "Incompressibility",
      "Conservation of energy",
      "Conservation of mass",
      "Zero vorticity"
    ],
    "correctAnswer": 2,
    "explanation": "It is Reynolds' theorem for mass in every material volume, localised."
  },
  {
    "id": "mv-md-r-m-001",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Find d/dt ∫ from 0 to t of t²x dx at t = 1.",
    "options": [
      "1",
      "2",
      "3",
      "4/3"
    ],
    "correctAnswer": 1,
    "explanation": "Leibniz: ∫₀¹ ∂_t(t²x) dx + f(b(1), 1)·b'(1) = 1 + 1 = 2. Check: the integral equals t⁴/2."
  },
  {
    "id": "mv-md-r-m-002",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Find d/dt ∫ from 0 to t of tx² dx at t = 1.",
    "options": [
      "7/3",
      "1/3",
      "1",
      "4/3"
    ],
    "correctAnswer": 3,
    "explanation": "Leibniz: ∫₀¹ ∂_t(tx²) dx + f(b(1), 1)·b'(1) = 1/3 + 1 = 4/3. Check: the integral equals t⁴/3."
  },
  {
    "id": "mv-md-r-m-003",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Find d/dt ∫ from 0 to t³ of t dx at t = 1.",
    "options": [
      "4",
      "5",
      "1",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "Leibniz: ∫₀¹ ∂_t(t) dx + f(b(1), 1)·b'(1) = 1 + 3 = 4. Check: the integral equals t⁴."
  },
  {
    "id": "mv-md-r-m-004",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Find d/dt ∫ from 0 to t² of t²x² dx at t = 1.",
    "options": [
      "2",
      "8/3",
      "11/3",
      "2/3"
    ],
    "correctAnswer": 1,
    "explanation": "Leibniz: ∫₀¹ ∂_t(t²x²) dx + f(b(1), 1)·b'(1) = 2/3 + 2 = 8/3. Check: the integral equals t⁸/3."
  },
  {
    "id": "mv-md-r-m-005",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Find d/dt ∫ from 0 to t of t³x dx at t = 1.",
    "options": [
      "5/2",
      "1",
      "3/2",
      "7/2"
    ],
    "correctAnswer": 0,
    "explanation": "Leibniz: ∫₀¹ ∂_t(t³x) dx + f(b(1), 1)·b'(1) = 3/2 + 1 = 5/2. Check: the integral equals t⁵/2."
  },
  {
    "id": "mv-md-r-m-006",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A disk of radius R(t) centred at the origin carries f = x² + y². When R = 2 and R' = 2, find d/dt ∬ f dA.",
    "options": [
      "64π",
      "16π",
      "32π",
      "8π"
    ],
    "correctAnswer": 2,
    "explanation": "∂f/∂t = 0; on r = R, f = R² and v·n = R', so the rate is R²·R'·2πR = 2πR³R' = 32π."
  },
  {
    "id": "mv-md-r-m-007",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A ball of radius R(t) has uniform density ρ(t). When R = 1, R' = 1, ρ = 2, ρ' = -1, find dM/dt.",
    "options": [
      "8π",
      "20π/3",
      "4π/3",
      "-4π/3"
    ],
    "correctAnswer": 1,
    "explanation": "Volume term (4/3)πR³ρ' = -4π/3; boundary term ρR'·4πR² = 8π. Sum: 20π/3."
  },
  {
    "id": "mv-md-r-m-008",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Fluid with velocity u = (x, 2y) flows through the fixed square [0, 1]². What is the net volume outflow rate ∮ u·n ds?",
    "options": [
      "6",
      "3",
      "-1",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "By the divergence theorem the net outflow is ∬ ∇·u dA = (1 + 2)·1 = 3: the flow is expanding (∇·u > 0), so more volume leaves than enters."
  },
  {
    "id": "mv-md-r-m-009",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Fluid with velocity u = (3x, -y) flows through the fixed square [0, 2]². What is the net volume outflow rate ∮ u·n ds?",
    "options": [
      "8",
      "0",
      "16",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "By the divergence theorem the net outflow is ∬ ∇·u dA = (3 - 1)·4 = 8: the flow is expanding (∇·u > 0), so more volume leaves than enters."
  },
  {
    "id": "mv-md-r-m-010",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Fluid with velocity u = (2x, 2y) flows through the fixed square [0, 1]². What is the net volume outflow rate ∮ u·n ds?",
    "options": [
      "0",
      "8",
      "4",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "By the divergence theorem the net outflow is ∬ ∇·u dA = (2 + 2)·1 = 4: the flow is expanding (∇·u > 0), so more volume leaves than enters."
  },
  {
    "id": "mv-md-r-m-011",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Fluid with velocity u = (x, -y) flows through the fixed square [0, 3]². What is the net volume outflow rate ∮ u·n ds?",
    "options": [
      "9",
      "0",
      "1",
      "18"
    ],
    "correctAnswer": 1,
    "explanation": "By the divergence theorem the net outflow is ∬ ∇·u dA = (1 - 1)·9 = 0: the flow is incompressible, so what flows in flows out."
  },
  {
    "id": "mv-md-r-m-012",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A tank of cross-section 2 m² has inflow 0.05 m³/s and outflow 0.03 m³/s. Using a control volume bounded by the free surface, how fast does the water level change?",
    "options": [
      "0.04 m/s",
      "0.02 m/s",
      "0.01 m/s",
      "-0.01 m/s"
    ],
    "correctAnswer": 2,
    "explanation": "d/dt(ρAh) = ρ(Q_in - Q_out), so h' = (0.05 - 0.03)/2 = 0.01 m/s."
  },
  {
    "id": "mv-md-r-m-013",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A tank of cross-section 4 m² has inflow 0.1 m³/s and outflow 0.02 m³/s. Using a control volume bounded by the free surface, how fast does the water level change?",
    "options": [
      "0.02 m/s",
      "-0.02 m/s",
      "0.03 m/s",
      "0.08 m/s"
    ],
    "correctAnswer": 0,
    "explanation": "d/dt(ρAh) = ρ(Q_in - Q_out), so h' = (0.1 - 0.02)/4 = 0.02 m/s."
  },
  {
    "id": "mv-md-r-m-014",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A tank of cross-section 1 m² has inflow 0.02 m³/s and outflow 0.05 m³/s. Using a control volume bounded by the free surface, how fast does the water level change?",
    "options": [
      "0.03 m/s",
      "0.07 m/s",
      "0.02 m/s",
      "-0.03 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "d/dt(ρAh) = ρ(Q_in - Q_out), so h' = (0.02 - 0.05)/1 = -0.03 m/s — the level is falling."
  },
  {
    "id": "mv-md-r-m-015",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A tank of cross-section 5 m² has inflow 0.5 m³/s and outflow 0.25 m³/s. Using a control volume bounded by the free surface, how fast does the water level change?",
    "options": [
      "-0.05 m/s",
      "0.15 m/s",
      "0.25 m/s",
      "0.05 m/s"
    ],
    "correctAnswer": 3,
    "explanation": "d/dt(ρAh) = ρ(Q_in - Q_out), so h' = (0.5 - 0.25)/5 = 0.05 m/s."
  },
  {
    "id": "mv-md-r-m-016",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "The unit disk translates with velocity c = (1, 0), and f = x does not depend on t. Find d/dt ∬_{D_t} f dA.",
    "options": [
      "0",
      "2π",
      "1",
      "π"
    ],
    "correctAnswer": 3,
    "explanation": "For a rigid translation the rate is ∬ c·∇f dA = (1·1 + 0·0)·π = π."
  },
  {
    "id": "mv-md-r-m-017",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Find d/dt ∬_{[0,1]²} txy dA at t = 1 (the square is fixed).",
    "options": [
      "1/2",
      "1/4",
      "3/4",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "The region is fixed, so differentiate under the integral: ∬ xy dA at t = 1 equals 1·(1/2)·(1/2) = 1/4."
  },
  {
    "id": "mv-md-r-m-018",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Find d/dt ∬_{[0,1]²} t^2xy dA at t = 1 (the square is fixed).",
    "options": [
      "1",
      "1/2",
      "1/4",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "The region is fixed, so differentiate under the integral: ∬ 2txy dA at t = 1 equals 2·(1/2)·(1/2) = 1/2."
  },
  {
    "id": "mv-md-r-m-019",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "Find d/dt ∬_{[0,1]²} tx^2y dA at t = 1 (the square is fixed).",
    "options": [
      "0",
      "1/6",
      "1/3",
      "1/2"
    ],
    "correctAnswer": 1,
    "explanation": "The region is fixed, so differentiate under the integral: ∬ x^2y dA at t = 1 equals 1·(1/3)·(1/2) = 1/6."
  },
  {
    "id": "mv-md-r-m-020",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A control volume moves with boundary velocity w through fluid with velocity u. Mass inside changes at the rate:",
    "options": [
      "-∯ ρ(u - w)·n dS",
      "-∯ ρ u·n dS",
      "0",
      "∯ ρ w·n dS"
    ],
    "correctAnswer": 0,
    "explanation": "Reynolds with v = w plus the continuity equation: only fluid crossing the boundary relative to it counts."
  },
  {
    "id": "mv-md-r-m-021",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "If every material volume conserves mass, which pointwise equation follows?",
    "options": [
      "∂ρ/∂t + ∇·(ρu) = 0",
      "∂ρ/∂t = 0",
      "∇ × (ρu) = 0",
      "∇·u = 0"
    ],
    "correctAnswer": 0,
    "explanation": "0 = ∭(ρ_t + ∇·(ρu)) dV for every region forces the integrand to vanish."
  },
  {
    "id": "mv-md-r-m-022",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A disk of radius R(t) centred at the origin carries f = x² + y². When R = 1 and R' = 3, find d/dt ∬ f dA.",
    "options": [
      "π/2",
      "6π",
      "2π",
      "3π"
    ],
    "correctAnswer": 1,
    "explanation": "∂f/∂t = 0; on r = R, f = R² and v·n = R', so the rate is R²·R'·2πR = 2πR³R' = 6π."
  },
  {
    "id": "mv-md-r-m-023",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A ball of radius R(t) has uniform density ρ(t). When R = 2, R' = 1, ρ = 1, ρ' = 1/2, find dM/dt.",
    "options": [
      "16π/3",
      "-64π/3",
      "16π",
      "64π/3"
    ],
    "correctAnswer": 3,
    "explanation": "Volume term (4/3)πR³ρ' = 16π/3; boundary term ρR'·4πR² = 16π. Sum: 64π/3."
  },
  {
    "id": "mv-md-r-m-024",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "The unit disk translates with velocity c = (2, 1), and f = x + 3y does not depend on t. Find d/dt ∬_{D_t} f dA.",
    "options": [
      "0",
      "5π",
      "5",
      "10π"
    ],
    "correctAnswer": 1,
    "explanation": "For a rigid translation the rate is ∬ c·∇f dA = (2·1 + 1·3)·π = 5π."
  },
  {
    "id": "mv-md-r-m-025",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Medium",
    "question": "A disk of radius R(t) centred at the origin carries f = x² + y². When R = 3 and R' = 1, find d/dt ∬ f dA.",
    "options": [
      "81π/2",
      "54π",
      "6π",
      "27π"
    ],
    "correctAnswer": 1,
    "explanation": "∂f/∂t = 0; on r = R, f = R² and v·n = R', so the rate is R²·R'·2πR = 2πR³R' = 54π."
  },
  {
    "id": "mv-md-r-h-001",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "A ball has radius R(t) = 1 + t and uniform density ρ(t) = (1 + t)^(-2). Find dM/dt at t = 0.",
    "options": [
      "-8π/3",
      "4π",
      "4π/3",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "Volume term (4/3)π·ρ'(0) = -8π/3; boundary term ρ(0)·R'·4π = 4π. Sum: 4π/3. (Equivalently M = (4/3)π(1 + t).)"
  },
  {
    "id": "mv-md-r-h-002",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "A ball has radius R(t) = 1 + t and constant density ρ = 1. Find dM/dt at t = 0.",
    "options": [
      "4π",
      "16π/3",
      "0",
      "4π/3"
    ],
    "correctAnswer": 0,
    "explanation": "Volume term (4/3)π·ρ'(0) = 0; boundary term ρ(0)·R'·4π = 4π. Sum: 4π. (Equivalently M = (4/3)π(1 + t)³.)"
  },
  {
    "id": "mv-md-r-h-003",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Temperature f = e^(-t)(x² + y²) fills a disk of radius R(t) = 1 + t. Find d/dt ∬ f dA at t = 0.",
    "options": [
      "2π",
      "-π/2",
      "3π/2",
      "3π"
    ],
    "correctAnswer": 2,
    "explanation": "Volume term: -e^(-t)·πR⁴/2; boundary term: e^(-t)·R²·R'·2πR. At t = 0, R = 1, R' = 1: (2π - π/2) = 3π/2."
  },
  {
    "id": "mv-md-r-h-004",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "The flow v(x) = x in ℝ³ (pure expansion) starts with J = 1. Using ∂J/∂t = (∇·v)J, find J(t).",
    "options": [
      "1 + 3t",
      "e^(3t)",
      "e^(2t)",
      "e^t"
    ],
    "correctAnswer": 1,
    "explanation": "∇·v = 3·1 = 3 is constant, so J' = 3J and J = e^(3t). Volumes grow by this factor."
  },
  {
    "id": "mv-md-r-h-005",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "The flow v(x) = 2x in ℝ² (pure expansion) starts with J = 1. Using ∂J/∂t = (∇·v)J, find J(t).",
    "options": [
      "e^(8t)",
      "e^(4t)",
      "1 + 4t",
      "e^(2t)"
    ],
    "correctAnswer": 1,
    "explanation": "∇·v = 2·2 = 4 is constant, so J' = 4J and J = e^(4t). Volumes grow by this factor."
  },
  {
    "id": "mv-md-r-h-006",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "The flow v(x) = (1/2)x in ℝ³ (pure expansion) starts with J = 1. Using ∂J/∂t = (∇·v)J, find J(t).",
    "options": [
      "e^(1t/2)",
      "1 + (3/2)t",
      "e^(3t/2)",
      "e^(3t/4)"
    ],
    "correctAnswer": 2,
    "explanation": "∇·v = 3·1/2 = 3/2 is constant, so J' = (3/2)J and J = e^(3t/2). Volumes grow by this factor."
  },
  {
    "id": "mv-md-r-h-007",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "The flow v(x) = 3x in ℝ (pure expansion) starts with J = 1. Using ∂J/∂t = (∇·v)J, find J(t).",
    "options": [
      "e^(3t)",
      "e^(9t)",
      "e^(4t)",
      "1 + 3t"
    ],
    "correctAnswer": 0,
    "explanation": "∇·v = 1·3 = 3 is constant, so J' = 3J and J = e^(3t). Volumes grow by this factor."
  },
  {
    "id": "mv-md-r-h-008",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "In 1D, u = x and ρ(x, 0) = 1 satisfy ρ_t + (ρu)_x = 0. Along a material interval, what happens to its length L and to the density?",
    "options": [
      "Both grow, so the mass increases",
      "L is constant and ρ = e^(-t)",
      "L grows like e^t and ρ stays 1",
      "L grows like e^t and ρ = e^(-t), so the mass is constant"
    ],
    "correctAnswer": 3,
    "explanation": "Endpoints obey a' = a, b' = b, so L = L₀e^t; ρ_t + ρ = 0 gives ρ = e^(-t). Reynolds: M' = ∫(ρ_t + (ρu)_x) dx = 0."
  },
  {
    "id": "mv-md-r-h-009",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "In 1D, u = 2x and ρ(x, 0) = 1 satisfy ρ_t + (ρu)_x = 0. Along a material interval, what happens to its length L and to the density?",
    "options": [
      "L is constant and ρ = e^(-2t)",
      "L grows like e^(2t) and ρ = e^(-2t), so the mass is constant",
      "Both grow, so the mass increases",
      "L grows like e^(2t) and ρ stays 1"
    ],
    "correctAnswer": 1,
    "explanation": "Endpoints obey a' = 2a, b' = 2b, so L = L₀e^(2t); ρ_t + 2ρ = 0 gives ρ = e^(-2t). Reynolds: M' = ∫(ρ_t + (ρu)_x) dx = 0."
  },
  {
    "id": "mv-md-r-h-010",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "In 1D, u = 3x and ρ(x, 0) = 1 satisfy ρ_t + (ρu)_x = 0. Along a material interval, what happens to its length L and to the density?",
    "options": [
      "L grows like e^(3t) and ρ stays 1",
      "L is constant and ρ = e^(-3t)",
      "Both grow, so the mass increases",
      "L grows like e^(3t) and ρ = e^(-3t), so the mass is constant"
    ],
    "correctAnswer": 3,
    "explanation": "Endpoints obey a' = 3a, b' = 3b, so L = L₀e^(3t); ρ_t + 3ρ = 0 gives ρ = e^(-3t). Reynolds: M' = ∫(ρ_t + (ρu)_x) dx = 0."
  },
  {
    "id": "mv-md-r-h-011",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "The sublevel sets Ω_t = {x² + y² < t} grow with t. What is the normal speed of the boundary at t = 4?",
    "options": [
      "1/2",
      "4",
      "1",
      "1/4"
    ],
    "correctAnswer": 3,
    "explanation": "v·n = 1/|∇u| = 1/(2r) on r = √t = 2, giving 1/4. Check: r = √t has dr/dt = 1/(2√t)."
  },
  {
    "id": "mv-md-r-h-012",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "A ball of radius R(t) in ℝ³ carries f = |x| (independent of t). When R = 2 and R' = 1, find d/dt ∭ f dV.",
    "options": [
      "32π",
      "64π/3",
      "64π",
      "16π"
    ],
    "correctAnswer": 0,
    "explanation": "Only the boundary term: f(R)·R'·4πR² = 2·1·4π·4 = 32π."
  },
  {
    "id": "mv-md-r-h-013",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Find d/dt ∫_t^(2t) x dx.",
    "options": [
      "t",
      "4t",
      "3t",
      "2t"
    ],
    "correctAnswer": 2,
    "explanation": "Leibniz: f(2t)·2 - f(t)·1 = 4t - t = 3t. Check: the integral is 3t²/2."
  },
  {
    "id": "mv-md-r-h-014",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Find d/dt ∫_t^(2t) (1/x) dx for t > 0.",
    "options": [
      "1/t",
      "0",
      "-1/t",
      "ln 2"
    ],
    "correctAnswer": 1,
    "explanation": "f(2t)·2 - f(t)·1 = 2/(2t) - 1/t = 0. Indeed the integral is ln 2 for every t."
  },
  {
    "id": "mv-md-r-h-015",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Find d/dt ∫_t^(3t) x² dx.",
    "options": [
      "8t²",
      "27t²",
      "9t²",
      "26t²"
    ],
    "correctAnswer": 3,
    "explanation": "f(3t)·3 - f(t)·1 = 27t² - t² = 26t². Check: (27 - 1)t³/3 has derivative 26t²."
  },
  {
    "id": "mv-md-r-h-016",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Find d/dt ∫_(-t)^(t) e^(x²) dx at t = 1.",
    "options": [
      "e",
      "2e",
      "0",
      "e²"
    ],
    "correctAnswer": 1,
    "explanation": "f(t)·1 - f(-t)·(-1) = e^(t²) + e^(t²) = 2e at t = 1."
  },
  {
    "id": "mv-md-r-h-017",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "A unit square rotates rigidly about its centre. What is the rate of change of its area?",
    "options": [
      "Negative",
      "Positive, because corners move outward",
      "It depends on the angular speed",
      "0"
    ],
    "correctAnswer": 3,
    "explanation": "v·n is not zero pointwise, but ∮ v·n ds = ∬ ∇·v dA = 0 for a rotation."
  },
  {
    "id": "mv-md-r-h-018",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "A control volume moves with the uniform stream: u = w = (2, 0), ρ = 1. What is the rate of change of mass inside?",
    "options": [
      "4",
      "0",
      "-2",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "u - w = 0 on the boundary, so no fluid crosses it."
  },
  {
    "id": "mv-md-r-h-019",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Which situation is outside the scope of Reynolds' theorem as stated with a smooth invertible flow?",
    "options": [
      "A rigidly translating region",
      "A fixed region with time-dependent f",
      "A drop pinching off into two drops",
      "A balloon inflating smoothly"
    ],
    "correctAnswer": 2,
    "explanation": "Topology changes break the smooth invertible flow map the proof relies on."
  },
  {
    "id": "mv-md-r-h-020",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "In the proof of Reynolds' theorem, why can we differentiate under the integral sign after pulling back to Ω₀?",
    "options": [
      "Because Ω₀ does not move",
      "Because J = 1",
      "Because f is constant",
      "Because v is divergence-free"
    ],
    "correctAnswer": 0,
    "explanation": "On a fixed domain the derivative passes inside; the moving boundary has been absorbed into the Jacobian J."
  },
  {
    "id": "mv-md-r-h-021",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Gas expands so that ∇·u > 0 everywhere, while every material volume keeps its mass. The density along a particle path must:",
    "options": [
      "Increase",
      "Oscillate",
      "Decrease",
      "Stay the same"
    ],
    "correctAnswer": 2,
    "explanation": "Continuity: Dρ/Dt = -ρ∇·u < 0."
  },
  {
    "id": "mv-md-r-h-022",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "A ball has radius R(t) = 1 + t and uniform density ρ(t) = (1 + t)^(-1). Find dM/dt at t = 0.",
    "options": [
      "4π",
      "-4π/3",
      "8π/3",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "Volume term (4/3)π·ρ'(0) = -4π/3; boundary term ρ(0)·R'·4π = 4π. Sum: 8π/3. (Equivalently M = (4/3)π(1 + t)².)"
  },
  {
    "id": "mv-md-r-h-023",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "Temperature f = e^(-t)(x² + y²) fills a disk of radius R(t) = 2t. Find d/dt ∬ f dA at t = 1.",
    "options": [
      "-8π/e",
      "48π/e",
      "32π/e",
      "24π/e"
    ],
    "correctAnswer": 3,
    "explanation": "Volume term: -e^(-t)·πR⁴/2; boundary term: e^(-t)·R²·R'·2πR. At t = 1, R = 2, R' = 2: e^(-1)·(32π - 8π) = 24π/e."
  },
  {
    "id": "mv-md-r-h-024",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "The sublevel sets Ω_t = {x² + y² < t} grow with t. What is the normal speed of the boundary at t = 9?",
    "options": [
      "1/3",
      "1",
      "6",
      "1/6"
    ],
    "correctAnswer": 3,
    "explanation": "v·n = 1/|∇u| = 1/(2r) on r = √t = 3, giving 1/6. Check: r = √t has dr/dt = 1/(2√t)."
  },
  {
    "id": "mv-md-r-h-025",
    "topic": "Reynolds Transport Theorem",
    "module": "Integration on Moving Domains",
    "difficulty": "Hard",
    "question": "A ball of radius R(t) in ℝ³ carries f = |x|² (independent of t). When R = 1 and R' = 3, find d/dt ∭ f dV.",
    "options": [
      "24π",
      "6π",
      "4π",
      "12π"
    ],
    "correctAnswer": 3,
    "explanation": "Only the boundary term: f(R)·R'·4πR² = 1·3·4π·1 = 12π."
  }
];
