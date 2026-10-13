// src/data/mvPotentialTheoryPracticeBank.js
// Practice Arena — Potential Theory (Multivariable Calculus)
// 150 MCQs: 50 Easy / 50 Medium / 50 Hard, 25 per difficulty per topic:
//   The Laplacian & Harmonic Functions; Maxwell's Equations & the Continuity Equation.
// Same format as mvPracticeBank.js (correctAnswer is the 0-based option index).

export const MV_POTENTIAL_THEORY_PRACTICE_BANK = [
  {
    "id": "mv-pt-001",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "Compute ∇²f for f(x, y, z) = x² + 2y² + 3z².",
    "options": [
      "7",
      "14",
      "12",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "Each pure second partial of a·x² is 2a, so ∇²f = 2(1) + 2(2) + 2(3) = 12."
  },
  {
    "id": "mv-pt-002",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "Compute ∇²f for f(x, y, z) = 3x² − y² + 2z².",
    "options": [
      "4",
      "8",
      "5",
      "10"
    ],
    "correctAnswer": 1,
    "explanation": "Each pure second partial of a·x² is 2a, so ∇²f = 2(3) + 2(-1) + 2(2) = 8."
  },
  {
    "id": "mv-pt-003",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "Compute ∇²f for f(x, y, z) = 5x² + y² − 2z².",
    "options": [
      "8",
      "12",
      "16",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "Each pure second partial of a·x² is 2a, so ∇²f = 2(5) + 2(1) + 2(-2) = 8."
  },
  {
    "id": "mv-pt-004",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "Compute ∇²f for f(x, y, z) = −x² + 4y² + z².",
    "options": [
      "6",
      "4",
      "8",
      "16"
    ],
    "correctAnswer": 2,
    "explanation": "Each pure second partial of a·x² is 2a, so ∇²f = 2(-1) + 2(4) + 2(1) = 8."
  },
  {
    "id": "mv-pt-005",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "Compute ∇²f for f(x, y, z) = 2x² − 3y² + 6z².",
    "options": [
      "5",
      "−2",
      "20",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "Each pure second partial of a·x² is 2a, so ∇²f = 2(2) + 2(-3) + 2(6) = 10."
  },
  {
    "id": "mv-pt-006",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "Compute ∇²f for f(x, y, z) = 4x² + 4y² − z².",
    "options": [
      "14",
      "16",
      "7",
      "28"
    ],
    "correctAnswer": 0,
    "explanation": "Each pure second partial of a·x² is 2a, so ∇²f = 2(4) + 2(4) + 2(-1) = 14."
  },
  {
    "id": "mv-pt-007",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "For f(x, y) = x³ + y³, evaluate ∇²f at (1, 2).",
    "options": [
      "9",
      "18",
      "12",
      "−6"
    ],
    "correctAnswer": 1,
    "explanation": "∇²f = 6(1)x + 6(1)y; at (1, 2) this is 6 + 12 = 18."
  },
  {
    "id": "mv-pt-008",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "For f(x, y) = 2x³ − y³, evaluate ∇²f at (1, 1).",
    "options": [
      "12",
      "6",
      "−6",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": "∇²f = 6(2)x + 6(-1)y; at (1, 1) this is 12 + -6 = 6."
  },
  {
    "id": "mv-pt-009",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "For f(x, y) = x³ + 3y³, evaluate ∇²f at (-1, 2).",
    "options": [
      "30",
      "24",
      "15",
      "−42"
    ],
    "correctAnswer": 0,
    "explanation": "∇²f = 6(1)x + 6(3)y; at (-1, 2) this is -6 + 36 = 30."
  },
  {
    "id": "mv-pt-010",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "For f(x, y) = 3x³ + 2y³, evaluate ∇²f at (2, -1).",
    "options": [
      "30",
      "24",
      "12",
      "48"
    ],
    "correctAnswer": 1,
    "explanation": "∇²f = 6(3)x + 6(2)y; at (2, -1) this is 36 + -12 = 24."
  },
  {
    "id": "mv-pt-011",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "For f(x, y) = −2x³ + y³, evaluate ∇²f at (1, 3).",
    "options": [
      "6",
      "−6",
      "3",
      "−30"
    ],
    "correctAnswer": 0,
    "explanation": "∇²f = 6(-2)x + 6(1)y; at (1, 3) this is -12 + 18 = 6."
  },
  {
    "id": "mv-pt-012",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "u is harmonic on a region containing the disk of radius 2 centred at (1, 3), and u(1, 3) = 7. What is the average of u over the circle of radius 2 about (1, 3)?",
    "options": [
      "7/2",
      "0",
      "14",
      "7"
    ],
    "correctAnswer": 3,
    "explanation": "Mean value property: a harmonic function equals its average over any circle centred at the point."
  },
  {
    "id": "mv-pt-013",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "u is harmonic on a region containing the disk of radius 3 centred at (0, 2), and u(0, 2) = −4. What is the average of u over the circle of radius 3 about (0, 2)?",
    "options": [
      "−12",
      "−4/3",
      "0",
      "−4"
    ],
    "correctAnswer": 3,
    "explanation": "Mean value property: a harmonic function equals its average over any circle centred at the point."
  },
  {
    "id": "mv-pt-014",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "u is harmonic on a region containing the disk of radius 0.5 centred at (2, −1), and u(2, −1) = 12. What is the average of u over the circle of radius 0.5 about (2, −1)?",
    "options": [
      "0",
      "12",
      "24",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "Mean value property: a harmonic function equals its average over any circle centred at the point."
  },
  {
    "id": "mv-pt-015",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "u is harmonic on a region containing the disk of radius 4 centred at (−3, 1), and u(−3, 1) = 5. What is the average of u over the circle of radius 4 about (−3, 1)?",
    "options": [
      "5",
      "5/4",
      "20",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "Mean value property: a harmonic function equals its average over any circle centred at the point."
  },
  {
    "id": "mv-pt-016",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "The Laplacian ∇²f is defined as:",
    "options": [
      "∇(∇·f), the gradient of the divergence",
      "∇·(∇f), the divergence of the gradient",
      "|∇f|², the squared length of the gradient",
      "∇×(∇f), the curl of the gradient"
    ],
    "correctAnswer": 1,
    "explanation": "∇²f = ∇·∇f = f_xx + f_yy + f_zz."
  },
  {
    "id": "mv-pt-017",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "∇²f equals which quantity built from the Hessian matrix H of f?",
    "options": [
      "The rank of H",
      "The largest entry of H",
      "The determinant of H",
      "The trace of H"
    ],
    "correctAnswer": 3,
    "explanation": "The diagonal of H is f_xx, f_yy, f_zz, whose sum is ∇²f."
  },
  {
    "id": "mv-pt-018",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "A function u is called harmonic when:",
    "options": [
      "∇²u = 1",
      "∇u = 0",
      "∇²u = 0",
      "u_xx = u_yy"
    ],
    "correctAnswer": 2,
    "explanation": "Harmonic means u satisfies Laplace's equation ∇²u = 0."
  },
  {
    "id": "mv-pt-019",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "Which function is harmonic on all of ℝ²?",
    "options": [
      "x² + y²",
      "x³ + y³",
      "x² − y²",
      "e^(x + y)"
    ],
    "correctAnswer": 2,
    "explanation": "(x² − y²): 2 − 2 = 0. The others give 4, 6x + 6y and 2e^(x+y)."
  },
  {
    "id": "mv-pt-020",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "Which function is NOT harmonic on ℝ²?",
    "options": [
      "eˣ cos y",
      "x² + y²",
      "3x − 5y + 2",
      "xy"
    ],
    "correctAnswer": 1,
    "explanation": "∇²(x² + y²) = 2 + 2 = 4 ≠ 0; the others have zero Laplacian."
  },
  {
    "id": "mv-pt-021",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "For constants a and b, ∇²(a f + b g) equals:",
    "options": [
      "a∇²f · b∇²g",
      "ab ∇²(fg)",
      "(a + b)∇²(f + g)",
      "a∇²f + b∇²g"
    ],
    "correctAnswer": 3,
    "explanation": "The Laplacian is a linear operator."
  },
  {
    "id": "mv-pt-022",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "A non-constant harmonic function on a bounded region attains its maximum:",
    "options": [
      "At the centre of the region",
      "Only on the boundary of the region",
      "Only at an interior critical point",
      "Nowhere"
    ],
    "correctAnswer": 1,
    "explanation": "Maximum principle: no interior maximum unless u is constant."
  },
  {
    "id": "mv-pt-023",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "The Laplacian takes a scalar field and returns:",
    "options": [
      "A scalar field",
      "A vector field",
      "A matrix field",
      "A single number"
    ],
    "correctAnswer": 0,
    "explanation": "∇²f is a sum of second partials: a scalar function."
  },
  {
    "id": "mv-pt-024",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "What is ∇² of any linear function ax + by + cz + d?",
    "options": [
      "d",
      "1",
      "0",
      "a + b + c"
    ],
    "correctAnswer": 2,
    "explanation": "All second partial derivatives of a linear function are zero."
  },
  {
    "id": "mv-pt-025",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Easy",
    "question": "Laplace's equation ∇²u = 0 typically describes:",
    "options": [
      "An equilibrium (steady) state with no sources",
      "A function with no critical points",
      "Exponential growth",
      "A wave travelling at speed c"
    ],
    "correctAnswer": 0,
    "explanation": "Steady temperature, potentials in charge-free space and ideal flow potentials all satisfy ∇²u = 0."
  },
  {
    "id": "mv-pt-026",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "A current density is J = ⟨x, y, z⟩ A/m². What is ∂ρ/∂t?",
    "options": [
      "−6",
      "−1",
      "3",
      "−3"
    ],
    "correctAnswer": 3,
    "explanation": "Continuity: ∂ρ/∂t = −∇·J = −(1 + 1 + 1) = -3."
  },
  {
    "id": "mv-pt-027",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "A current density is J = ⟨2x, 3y, −z⟩ A/m². What is ∂ρ/∂t?",
    "options": [
      "4",
      "−2",
      "−8",
      "−4"
    ],
    "correctAnswer": 3,
    "explanation": "Continuity: ∂ρ/∂t = −∇·J = −(2 + 3 + -1) = -4."
  },
  {
    "id": "mv-pt-028",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "A current density is J = ⟨4x, −2y, z⟩ A/m². What is ∂ρ/∂t?",
    "options": [
      "3",
      "−3",
      "−6",
      "−1"
    ],
    "correctAnswer": 1,
    "explanation": "Continuity: ∂ρ/∂t = −∇·J = −(4 + -2 + 1) = -3."
  },
  {
    "id": "mv-pt-029",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "A current density is J = ⟨x, 5y, 2z⟩ A/m². What is ∂ρ/∂t?",
    "options": [
      "−8",
      "8",
      "−16",
      "−6"
    ],
    "correctAnswer": 0,
    "explanation": "Continuity: ∂ρ/∂t = −∇·J = −(1 + 5 + 2) = -8."
  },
  {
    "id": "mv-pt-030",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "A current density is J = ⟨−3x, y, z⟩ A/m². What is ∂ρ/∂t?",
    "options": [
      "2",
      "−1",
      "3",
      "1"
    ],
    "correctAnswer": 3,
    "explanation": "Continuity: ∂ρ/∂t = −∇·J = −(-3 + 1 + 1) = 1."
  },
  {
    "id": "mv-pt-031",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "A current density is J = ⟨2x, 2y, 2z⟩ A/m². What is ∂ρ/∂t?",
    "options": [
      "6",
      "−4",
      "−12",
      "−6"
    ],
    "correctAnswer": 3,
    "explanation": "Continuity: ∂ρ/∂t = −∇·J = −(2 + 2 + 2) = -6."
  },
  {
    "id": "mv-pt-032",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "A closed surface encloses point charges q and 2q. The net outward flux of E is:",
    "options": [
      "2q/ε₀",
      "q/ε₀",
      "3q/ε₀",
      "3qε₀"
    ],
    "correctAnswer": 2,
    "explanation": "Gauss's law: flux = Q_enc/ε₀ with Q_enc = q + (2q)."
  },
  {
    "id": "mv-pt-033",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "A closed surface encloses point charges 3q and −q. The net outward flux of E is:",
    "options": [
      "2qε₀",
      "3q/ε₀",
      "2q/ε₀",
      "4q/ε₀"
    ],
    "correctAnswer": 2,
    "explanation": "Gauss's law: flux = Q_enc/ε₀ with Q_enc = 3q + (−q)."
  },
  {
    "id": "mv-pt-034",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "A closed surface encloses point charges q and −q. The net outward flux of E is:",
    "options": [
      "2q/ε₀",
      "−q/ε₀",
      "0",
      "q/ε₀"
    ],
    "correctAnswer": 2,
    "explanation": "Gauss's law: flux = Q_enc/ε₀ with Q_enc = q + (−q)."
  },
  {
    "id": "mv-pt-035",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "A closed surface encloses point charges 5q and q. The net outward flux of E is:",
    "options": [
      "5q/ε₀",
      "6q/ε₀",
      "4q/ε₀",
      "6qε₀"
    ],
    "correctAnswer": 1,
    "explanation": "Gauss's law: flux = Q_enc/ε₀ with Q_enc = 5q + (q)."
  },
  {
    "id": "mv-pt-036",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "Which of these could be a magnetic field B?",
    "options": [
      "⟨yz, xz, xy⟩",
      "⟨x², 0, 0⟩",
      "⟨x, y, z⟩",
      "⟨x, y, 0⟩"
    ],
    "correctAnswer": 0,
    "explanation": "A magnetic field must satisfy ∇·B = 0. Only ⟨yz, xz, xy⟩ has zero divergence."
  },
  {
    "id": "mv-pt-037",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "Which vector field satisfies ∇·B = 0 and so could be a magnetic field?",
    "options": [
      "⟨x, 0, 0⟩",
      "⟨y², x, z⟩",
      "⟨0, y, z⟩",
      "⟨−y, x, 0⟩"
    ],
    "correctAnswer": 3,
    "explanation": "A magnetic field must satisfy ∇·B = 0. Only ⟨−y, x, 0⟩ has zero divergence."
  },
  {
    "id": "mv-pt-038",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "Which field is consistent with 'no magnetic monopoles'?",
    "options": [
      "⟨x, 0, z⟩",
      "⟨z, y, 0⟩",
      "⟨x², y², z²⟩",
      "⟨y, z, x⟩"
    ],
    "correctAnswer": 3,
    "explanation": "A magnetic field must satisfy ∇·B = 0. Only ⟨y, z, x⟩ has zero divergence."
  },
  {
    "id": "mv-pt-039",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "Only one of these is a possible magnetic field. Which?",
    "options": [
      "⟨2x, y, 0⟩",
      "⟨0, y², 0⟩",
      "⟨x, −2y, z⟩",
      "⟨x, y, z⟩"
    ],
    "correctAnswer": 2,
    "explanation": "A magnetic field must satisfy ∇·B = 0. Only ⟨x, −2y, z⟩ has zero divergence."
  },
  {
    "id": "mv-pt-040",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "Which of these fields has no sources, as a magnetic field must?",
    "options": [
      "⟨x², −2xy, 0⟩",
      "⟨x², y², 0⟩",
      "⟨xy, xy, 0⟩",
      "⟨y, x, z⟩"
    ],
    "correctAnswer": 0,
    "explanation": "A magnetic field must satisfy ∇·B = 0. Only ⟨x², −2xy, 0⟩ has zero divergence."
  },
  {
    "id": "mv-pt-041",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "Gauss's law for the electric field in differential form is:",
    "options": [
      "∇·E = 0",
      "∇·E = ρ/ε₀",
      "∇·E = ε₀ρ",
      "∇×E = ρ/ε₀"
    ],
    "correctAnswer": 1,
    "explanation": "The Divergence Theorem turns ∯E·dS = Q/ε₀ into ∇·E = ρ/ε₀."
  },
  {
    "id": "mv-pt-042",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "∇·B = 0 means physically that:",
    "options": [
      "Magnetic fields do no work",
      "B is conservative",
      "There are no magnetic monopoles",
      "Magnetic fields are uniform"
    ],
    "correctAnswer": 2,
    "explanation": "Zero divergence: no sources or sinks, so field lines close on themselves."
  },
  {
    "id": "mv-pt-043",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "Faraday's law in differential form is:",
    "options": [
      "∇×E = ∂B/∂t",
      "∇·E = −∂B/∂t",
      "∇×E = −∂B/∂t",
      "∇×B = −∂E/∂t"
    ],
    "correctAnswer": 2,
    "explanation": "A changing B produces a circulating E; the minus sign is Lenz's law."
  },
  {
    "id": "mv-pt-044",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "Which theorem turns the integral form of Faraday's law into its differential form?",
    "options": [
      "Green's first identity",
      "The Divergence Theorem",
      "Stokes' Theorem",
      "The Mean Value Theorem"
    ],
    "correctAnswer": 2,
    "explanation": "Stokes rewrites the circulation ∮E·dr as a surface integral of ∇×E."
  },
  {
    "id": "mv-pt-045",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "Which theorem turns the integral form of Gauss's law into ∇·E = ρ/ε₀?",
    "options": [
      "The Divergence Theorem",
      "Stokes' Theorem",
      "The Fundamental Theorem of Calculus only",
      "Faraday's law"
    ],
    "correctAnswer": 0,
    "explanation": "The flux through a closed surface equals the volume integral of the divergence."
  },
  {
    "id": "mv-pt-046",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "For a steady current (∂ρ/∂t = 0), the continuity equation says:",
    "options": [
      "J = 0",
      "∇·J = 0",
      "ρ = 0",
      "∇×J = 0"
    ],
    "correctAnswer": 1,
    "explanation": "Whatever flows into a region flows out: Kirchhoff's current law."
  },
  {
    "id": "mv-pt-047",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "Maxwell's correction to Ampère's law adds the term:",
    "options": [
      "μ₀ε₀ ∂E/∂t",
      "−∂B/∂t",
      "μ₀ρE",
      "ε₀∇·E"
    ],
    "correctAnswer": 0,
    "explanation": "The displacement current makes the law consistent with charge conservation."
  },
  {
    "id": "mv-pt-048",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "In electrostatics (∂B/∂t = 0), the electric field can be written as:",
    "options": [
      "E = −∇φ",
      "E = 0",
      "E = φ∇φ",
      "E = ∇×A"
    ],
    "correctAnswer": 0,
    "explanation": "∇×E = 0, so E is conservative and has a potential."
  },
  {
    "id": "mv-pt-049",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "In vacuum, electromagnetic waves travel at speed:",
    "options": [
      "μ₀ε₀",
      "1/√(μ₀ε₀)",
      "μ₀/ε₀",
      "√(μ₀ε₀)"
    ],
    "correctAnswer": 1,
    "explanation": "Maxwell's equations give ∇²E = μ₀ε₀ ∂²E/∂t², a wave equation with c = 1/√(μ₀ε₀)."
  },
  {
    "id": "mv-pt-050",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Easy",
    "question": "The continuity equation ∂ρ/∂t + ∇·J = 0 expresses conservation of:",
    "options": [
      "Momentum",
      "Energy",
      "Magnetic flux",
      "Electric charge"
    ],
    "correctAnswer": 3,
    "explanation": "Charge leaving a region equals the current flowing out through its boundary."
  },
  {
    "id": "mv-pt-051",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "For which value of b is u(x, y) = x³ + b·xy² harmonic?",
    "options": [
      "b = −6",
      "b = −3",
      "b = −1",
      "b = 3"
    ],
    "correctAnswer": 1,
    "explanation": "u_xx = 6x and u_yy = 2b·x, so 6 + 2b = 0 and b = -3."
  },
  {
    "id": "mv-pt-052",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "For which value of b is u(x, y) = 2x³ + b·xy² harmonic?",
    "options": [
      "b = 6",
      "b = −12",
      "b = −2",
      "b = −6"
    ],
    "correctAnswer": 3,
    "explanation": "u_xx = 12x and u_yy = 2b·x, so 12 + 2b = 0 and b = -6."
  },
  {
    "id": "mv-pt-053",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "For which value of b is u(x, y) = −x³ + b·xy² harmonic?",
    "options": [
      "b = 6",
      "b = −3",
      "b = 3",
      "b = 1"
    ],
    "correctAnswer": 2,
    "explanation": "u_xx = -6x and u_yy = 2b·x, so -6 + 2b = 0 and b = 3."
  },
  {
    "id": "mv-pt-054",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "For which value of b is u(x, y) = 4x³ + b·xy² harmonic?",
    "options": [
      "b = −24",
      "b = 12",
      "b = −4",
      "b = −12"
    ],
    "correctAnswer": 3,
    "explanation": "u_xx = 24x and u_yy = 2b·x, so 24 + 2b = 0 and b = -12."
  },
  {
    "id": "mv-pt-055",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "For which value of b is u(x, y) = 5x³ + b·xy² harmonic?",
    "options": [
      "b = −5",
      "b = −15",
      "b = 15",
      "b = −30"
    ],
    "correctAnswer": 1,
    "explanation": "u_xx = 30x and u_yy = 2b·x, so 30 + 2b = 0 and b = -15."
  },
  {
    "id": "mv-pt-056",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "u(x, y) = e^(kx) sin(2y) is harmonic exactly when:",
    "options": [
      "k = 2 only",
      "k = ±4",
      "k = ±3",
      "k = ±2"
    ],
    "correctAnswer": 3,
    "explanation": "u_xx = k²u and u_yy = −4u, so (k² − 4)u = 0 and k = ±2."
  },
  {
    "id": "mv-pt-057",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "u(x, y) = e^(kx) sin(3y) is harmonic exactly when:",
    "options": [
      "k = ±3",
      "k = ±9",
      "k = 3 only",
      "k = ±4"
    ],
    "correctAnswer": 0,
    "explanation": "u_xx = k²u and u_yy = −9u, so (k² − 9)u = 0 and k = ±3."
  },
  {
    "id": "mv-pt-058",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "u(x, y) = e^(kx) sin(4y) is harmonic exactly when:",
    "options": [
      "k = ±16",
      "k = 4 only",
      "k = ±5",
      "k = ±4"
    ],
    "correctAnswer": 3,
    "explanation": "u_xx = k²u and u_yy = −16u, so (k² − 16)u = 0 and k = ±4."
  },
  {
    "id": "mv-pt-059",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "u(x, y) = e^(kx) sin(5y) is harmonic exactly when:",
    "options": [
      "k = ±6",
      "k = 5 only",
      "k = ±5",
      "k = ±25"
    ],
    "correctAnswer": 2,
    "explanation": "u_xx = k²u and u_yy = −25u, so (k² − 25)u = 0 and k = ±5."
  },
  {
    "id": "mv-pt-060",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "u(x, y) = e^(kx) sin(6y) is harmonic exactly when:",
    "options": [
      "k = ±6",
      "k = ±7",
      "k = 6 only",
      "k = ±36"
    ],
    "correctAnswer": 0,
    "explanation": "u_xx = k²u and u_yy = −36u, so (k² − 36)u = 0 and k = ±6."
  },
  {
    "id": "mv-pt-061",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "Find a harmonic conjugate v of u(x, y) = x² − y² + 2x.",
    "options": [
      "v = −2xy + 2x",
      "v = 2xy − 2y",
      "v = x² + y²",
      "v = 2xy + 2y"
    ],
    "correctAnswer": 3,
    "explanation": "Cauchy–Riemann: v_y = u_x = 2x + 2 gives v = 2xy + 2y + g(x); v_x = −u_y = 2y forces g constant."
  },
  {
    "id": "mv-pt-062",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "Find a harmonic conjugate v of u(x, y) = 2x² − 2y² − x.",
    "options": [
      "v = 2x² + 2y²",
      "v = −4xy − x",
      "v = 4xy + y",
      "v = 4xy − y"
    ],
    "correctAnswer": 3,
    "explanation": "Cauchy–Riemann: v_y = u_x = 4x + -1 gives v = 4xy + -1y + g(x); v_x = −u_y = 4y forces g constant."
  },
  {
    "id": "mv-pt-063",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "Find a harmonic conjugate v of u(x, y) = 3x² − 3y² + x.",
    "options": [
      "v = 6xy − y",
      "v = 6xy + y",
      "v = 3x² + 3y²",
      "v = −6xy + x"
    ],
    "correctAnswer": 1,
    "explanation": "Cauchy–Riemann: v_y = u_x = 6x + 1 gives v = 6xy + 1y + g(x); v_x = −u_y = 6y forces g constant."
  },
  {
    "id": "mv-pt-064",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "Find a harmonic conjugate v of u(x, y) = −x² + y² + 4x.",
    "options": [
      "v = 2xy + 4x",
      "v = −2xy − 4y",
      "v = −2xy + 4y",
      "v = −x² − y²"
    ],
    "correctAnswer": 2,
    "explanation": "Cauchy–Riemann: v_y = u_x = -2x + 4 gives v = -2xy + 4y + g(x); v_x = −u_y = -2y forces g constant."
  },
  {
    "id": "mv-pt-065",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "Find a harmonic conjugate v of u(x, y) = 2x² − 2y² + 3x.",
    "options": [
      "v = 4xy − 3y",
      "v = 4xy + 3y",
      "v = 2x² + 2y²",
      "v = −4xy + 3x"
    ],
    "correctAnswer": 1,
    "explanation": "Cauchy–Riemann: v_y = u_x = 4x + 3 gives v = 4xy + 3y + g(x); v_x = −u_y = 4y forces g constant."
  },
  {
    "id": "mv-pt-066",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "In the plane, compute ∇²(r³), where r = √(x² + y²).",
    "options": [
      "9r",
      "6r",
      "0",
      "12r"
    ],
    "correctAnswer": 0,
    "explanation": "∇²f = f_rr + f_r/r = 6r + 3r = 9r."
  },
  {
    "id": "mv-pt-067",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "In the plane, compute ∇²(r⁴), where r = √(x² + y²).",
    "options": [
      "20r²",
      "0",
      "12r²",
      "16r²"
    ],
    "correctAnswer": 3,
    "explanation": "∇²f = f_rr + f_r/r = 12r² + 4r² = 16r²."
  },
  {
    "id": "mv-pt-068",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "In the plane, compute ∇²(r⁵), where r = √(x² + y²).",
    "options": [
      "30r³",
      "0",
      "20r³",
      "25r³"
    ],
    "correctAnswer": 3,
    "explanation": "∇²f = f_rr + f_r/r = 20r³ + 5r³ = 25r³."
  },
  {
    "id": "mv-pt-069",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "In ℝ³, compute ∇²(ρ²) where ρ = √(x² + y² + z²).",
    "options": [
      "6",
      "2",
      "4",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "For radial f, ∇²f = f″ + (2/ρ)f′ = 2 + 4 = 6."
  },
  {
    "id": "mv-pt-070",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "In ℝ³, compute ∇²(ρ³) where ρ = √(x² + y² + z²).",
    "options": [
      "6ρ",
      "0",
      "12ρ",
      "9ρ"
    ],
    "correctAnswer": 2,
    "explanation": "For radial f, ∇²f = f″ + (2/ρ)f′ = 6ρ + 6ρ = 12ρ."
  },
  {
    "id": "mv-pt-071",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "Evaluate ∭ ∇²(x² + y² + z²) dV over the ball of radius 1.",
    "options": [
      "8π",
      "16π",
      "4π",
      "6π"
    ],
    "correctAnswer": 0,
    "explanation": "∇²(ρ²) = 6 and the ball's volume is (4/3)π·1³, so the integral is 6·(4/3)π·1 = 8π."
  },
  {
    "id": "mv-pt-072",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "Evaluate ∭ ∇²(x² + y² + z²) dV over the ball of radius 2.",
    "options": [
      "64π",
      "32π",
      "48π",
      "128π"
    ],
    "correctAnswer": 0,
    "explanation": "∇²(ρ²) = 6 and the ball's volume is (4/3)π·2³, so the integral is 6·(4/3)π·8 = 64π."
  },
  {
    "id": "mv-pt-073",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "Evaluate ∭ ∇²(x² + y² + z²) dV over the ball of radius 3.",
    "options": [
      "162π",
      "432π",
      "108π",
      "216π"
    ],
    "correctAnswer": 3,
    "explanation": "∇²(ρ²) = 6 and the ball's volume is (4/3)π·3³, so the integral is 6·(4/3)π·27 = 216π."
  },
  {
    "id": "mv-pt-074",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "If u is harmonic, then ∇²(u²) equals:",
    "options": [
      "0",
      "2u∇²u",
      "2|∇u|²",
      "−2|∇u|²"
    ],
    "correctAnswer": 2,
    "explanation": "Product rule: ∇²(u²) = 2u∇²u + 2|∇u|² = 2|∇u|² ≥ 0, so u² is subharmonic."
  },
  {
    "id": "mv-pt-075",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Medium",
    "question": "Every radial harmonic function f(ρ) on ℝ³ minus the origin has the form:",
    "options": [
      "A·e^ρ + B·e^(−ρ)",
      "A + B ln ρ",
      "A + B/ρ",
      "A + Bρ²"
    ],
    "correctAnswer": 2,
    "explanation": "(1/ρ²)(ρ²f′)′ = 0 gives ρ²f′ = −B, so f = A + B/ρ. The logarithm is the 2D answer."
  },
  {
    "id": "mv-pt-076",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "In a region E = k⟨x, y, z⟩ with k constant. What charge density ρ produces it?",
    "options": [
      "ρ = 3k/ε₀",
      "ρ = 0",
      "ρ = 3kε₀",
      "ρ = 4kε₀"
    ],
    "correctAnswer": 2,
    "explanation": "∇·E = k(1 + 1 + 1) = 3k, and Gauss's law gives ρ = ε₀∇·E."
  },
  {
    "id": "mv-pt-077",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "In a region E = k⟨2x, y, 3z⟩ with k constant. What charge density ρ produces it?",
    "options": [
      "ρ = 6k/ε₀",
      "ρ = 6kε₀",
      "ρ = 7kε₀",
      "ρ = 0"
    ],
    "correctAnswer": 1,
    "explanation": "∇·E = k(2 + 1 + 3) = 6k, and Gauss's law gives ρ = ε₀∇·E."
  },
  {
    "id": "mv-pt-078",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "In a region E = k⟨4x, −y, 0⟩ with k constant. What charge density ρ produces it?",
    "options": [
      "ρ = 4kε₀",
      "ρ = 3kε₀",
      "ρ = 3k/ε₀",
      "ρ = 0"
    ],
    "correctAnswer": 1,
    "explanation": "∇·E = k(4 + -1 + 0) = 3k, and Gauss's law gives ρ = ε₀∇·E."
  },
  {
    "id": "mv-pt-079",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "In a region E = k⟨5x, 2y, −2z⟩ with k constant. What charge density ρ produces it?",
    "options": [
      "ρ = 6kε₀",
      "ρ = 5kε₀",
      "ρ = 5k/ε₀",
      "ρ = 0"
    ],
    "correctAnswer": 1,
    "explanation": "∇·E = k(5 + 2 + -2) = 5k, and Gauss's law gives ρ = ε₀∇·E."
  },
  {
    "id": "mv-pt-080",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "In a region E = k⟨3x, 3y, 3z⟩ with k constant. What charge density ρ produces it?",
    "options": [
      "ρ = 9kε₀",
      "ρ = 9k/ε₀",
      "ρ = 10kε₀",
      "ρ = 0"
    ],
    "correctAnswer": 0,
    "explanation": "∇·E = k(3 + 3 + 3) = 9k, and Gauss's law gives ρ = ε₀∇·E."
  },
  {
    "id": "mv-pt-081",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A circular loop of radius 0.1 m lies perpendicular to a uniform field B = 0.5 sin(100t) T. The maximum induced emf is about:",
    "options": [
      "0.0157 V",
      "3.14 V",
      "1.57 V",
      "0.500 V"
    ],
    "correctAnswer": 2,
    "explanation": "Φ_B = π(0.1)²·0.5 sin(100t), so |emf| = |dΦ/dt| ≤ π·0.01·0.5·100 ≈ 1.57 V."
  },
  {
    "id": "mv-pt-082",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A circular loop of radius 0.2 m lies perpendicular to a uniform field B = 0.1 sin(50t) T. The maximum induced emf is about:",
    "options": [
      "0.628 V",
      "0.200 V",
      "1.26 V",
      "0.0126 V"
    ],
    "correctAnswer": 0,
    "explanation": "Φ_B = π(0.2)²·0.1 sin(50t), so |emf| = |dΦ/dt| ≤ π·0.04·0.1·50 ≈ 0.628 V."
  },
  {
    "id": "mv-pt-083",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A circular loop of radius 0.05 m lies perpendicular to a uniform field B = 2 sin(120t) T. The maximum induced emf is about:",
    "options": [
      "3.77 V",
      "0.600 V",
      "1.88 V",
      "0.0157 V"
    ],
    "correctAnswer": 2,
    "explanation": "Φ_B = π(0.05)²·2 sin(120t), so |emf| = |dΦ/dt| ≤ π·0.0025·2·120 ≈ 1.88 V."
  },
  {
    "id": "mv-pt-084",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A circular loop of radius 0.3 m lies perpendicular to a uniform field B = 0.2 sin(10t) T. The maximum induced emf is about:",
    "options": [
      "0.565 V",
      "0.0565 V",
      "1.13 V",
      "0.180 V"
    ],
    "correctAnswer": 0,
    "explanation": "Φ_B = π(0.3)²·0.2 sin(10t), so |emf| = |dΦ/dt| ≤ π·0.09·0.2·10 ≈ 0.565 V."
  },
  {
    "id": "mv-pt-085",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A circular loop of radius 0.15 m lies perpendicular to a uniform field B = 0.4 sin(60t) T. The maximum induced emf is about:",
    "options": [
      "0.0283 V",
      "1.70 V",
      "0.540 V",
      "3.39 V"
    ],
    "correctAnswer": 1,
    "explanation": "Φ_B = π(0.15)²·0.4 sin(60t), so |emf| = |dΦ/dt| ≤ π·0.0225·0.4·60 ≈ 1.70 V."
  },
  {
    "id": "mv-pt-086",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A long straight wire carries I = 10 A. Using μ₀ = 4π × 10⁻⁷ T·m/A, the field strength 5 cm from the wire is:",
    "options": [
      "1.26 × 10⁻⁴ T",
      "4.00 × 10⁻⁴ T",
      "2.00 × 10⁻⁵ T",
      "4.00 × 10⁻⁵ T"
    ],
    "correctAnswer": 3,
    "explanation": "Ampère's law on a circle: B(2πr) = μ₀I, so B = μ₀I/(2πr) = (2 × 10⁻⁷)(10)/0.05 ≈ 4.00 × 10⁻⁵ T."
  },
  {
    "id": "mv-pt-087",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A long straight wire carries I = 5 A. Using μ₀ = 4π × 10⁻⁷ T·m/A, the field strength 10 cm from the wire is:",
    "options": [
      "3.14 × 10⁻⁵ T",
      "1.00 × 10⁻⁵ T",
      "5.00 × 10⁻⁶ T",
      "1.00 × 10⁻⁴ T"
    ],
    "correctAnswer": 1,
    "explanation": "Ampère's law on a circle: B(2πr) = μ₀I, so B = μ₀I/(2πr) = (2 × 10⁻⁷)(5)/0.1 ≈ 1.00 × 10⁻⁵ T."
  },
  {
    "id": "mv-pt-088",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A long straight wire carries I = 20 A. Using μ₀ = 4π × 10⁻⁷ T·m/A, the field strength 2 cm from the wire is:",
    "options": [
      "2.00 × 10⁻⁴ T",
      "2.00 × 10⁻³ T",
      "6.28 × 10⁻⁴ T",
      "1.00 × 10⁻⁴ T"
    ],
    "correctAnswer": 0,
    "explanation": "Ampère's law on a circle: B(2πr) = μ₀I, so B = μ₀I/(2πr) = (2 × 10⁻⁷)(20)/0.02 ≈ 2.00 × 10⁻⁴ T."
  },
  {
    "id": "mv-pt-089",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A long straight wire carries I = 2 A. Using μ₀ = 4π × 10⁻⁷ T·m/A, the field strength 1 cm from the wire is:",
    "options": [
      "1.26 × 10⁻⁴ T",
      "4.00 × 10⁻⁵ T",
      "4.00 × 10⁻⁴ T",
      "2.00 × 10⁻⁵ T"
    ],
    "correctAnswer": 1,
    "explanation": "Ampère's law on a circle: B(2πr) = μ₀I, so B = μ₀I/(2πr) = (2 × 10⁻⁷)(2)/0.01 ≈ 4.00 × 10⁻⁵ T."
  },
  {
    "id": "mv-pt-090",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A long straight wire carries I = 15 A. Using μ₀ = 4π × 10⁻⁷ T·m/A, the field strength 30 cm from the wire is:",
    "options": [
      "1.00 × 10⁻⁵ T",
      "1.00 × 10⁻⁴ T",
      "5.00 × 10⁻⁶ T",
      "3.14 × 10⁻⁵ T"
    ],
    "correctAnswer": 0,
    "explanation": "Ampère's law on a circle: B(2πr) = μ₀I, so B = μ₀I/(2πr) = (2 × 10⁻⁷)(15)/0.3 ≈ 1.00 × 10⁻⁵ T."
  },
  {
    "id": "mv-pt-091",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A uniform field B = ⟨0, 0, 1t⟩. What is ∇×E?",
    "options": [
      "⟨−1, 0, 0⟩",
      "⟨0, 0, 1⟩",
      "⟨0, 0, 0⟩",
      "⟨0, 0, −1⟩"
    ],
    "correctAnswer": 3,
    "explanation": "Faraday's law: ∇×E = −∂B/∂t = ⟨0, 0, -1⟩."
  },
  {
    "id": "mv-pt-092",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A uniform field B = ⟨0, 0, 2t⟩. What is ∇×E?",
    "options": [
      "⟨0, 0, 2⟩",
      "⟨−2, 0, 0⟩",
      "⟨0, 0, 0⟩",
      "⟨0, 0, −2⟩"
    ],
    "correctAnswer": 3,
    "explanation": "Faraday's law: ∇×E = −∂B/∂t = ⟨0, 0, -2⟩."
  },
  {
    "id": "mv-pt-093",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A uniform field B = ⟨0, 0, 3t⟩. What is ∇×E?",
    "options": [
      "⟨0, 0, 0⟩",
      "⟨0, 0, 3⟩",
      "⟨0, 0, −3⟩",
      "⟨−3, 0, 0⟩"
    ],
    "correctAnswer": 2,
    "explanation": "Faraday's law: ∇×E = −∂B/∂t = ⟨0, 0, -3⟩."
  },
  {
    "id": "mv-pt-094",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A uniform field B = ⟨0, 0, 5t⟩. What is ∇×E?",
    "options": [
      "⟨−5, 0, 0⟩",
      "⟨0, 0, −5⟩",
      "⟨0, 0, 5⟩",
      "⟨0, 0, 0⟩"
    ],
    "correctAnswer": 1,
    "explanation": "Faraday's law: ∇×E = −∂B/∂t = ⟨0, 0, -5⟩."
  },
  {
    "id": "mv-pt-095",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A uniform field B = ⟨0, 0, −4t⟩. What is ∇×E?",
    "options": [
      "⟨0, 0, 4⟩",
      "⟨0, 0, −4⟩",
      "⟨0, 0, 0⟩",
      "⟨4, 0, 0⟩"
    ],
    "correctAnswer": 0,
    "explanation": "Faraday's law: ∇×E = −∂B/∂t = ⟨0, 0, 4⟩."
  },
  {
    "id": "mv-pt-096",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A point charge of 1 nC sits inside a sphere. Using ε₀ = 8.854 × 10⁻¹² F/m, the outward flux of E through the sphere is about:",
    "options": [
      "8.99 N·m²/C",
      "113 N·m²/C",
      "11.3 N·m²/C",
      "1419 N·m²/C"
    ],
    "correctAnswer": 1,
    "explanation": "Gauss's law: Φ = q/ε₀ = 1 × 10⁻⁹ / 8.854 × 10⁻¹² ≈ 113 N·m²/C, whatever the sphere's radius."
  },
  {
    "id": "mv-pt-097",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A point charge of 2 nC sits inside a sphere. Using ε₀ = 8.854 × 10⁻¹² F/m, the outward flux of E through the sphere is about:",
    "options": [
      "22.6 N·m²/C",
      "2839 N·m²/C",
      "226 N·m²/C",
      "18.0 N·m²/C"
    ],
    "correctAnswer": 2,
    "explanation": "Gauss's law: Φ = q/ε₀ = 2 × 10⁻⁹ / 8.854 × 10⁻¹² ≈ 226 N·m²/C, whatever the sphere's radius."
  },
  {
    "id": "mv-pt-098",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A point charge of 5 nC sits inside a sphere. Using ε₀ = 8.854 × 10⁻¹² F/m, the outward flux of E through the sphere is about:",
    "options": [
      "44.9 N·m²/C",
      "565 N·m²/C",
      "7096 N·m²/C",
      "56.5 N·m²/C"
    ],
    "correctAnswer": 1,
    "explanation": "Gauss's law: Φ = q/ε₀ = 5 × 10⁻⁹ / 8.854 × 10⁻¹² ≈ 565 N·m²/C, whatever the sphere's radius."
  },
  {
    "id": "mv-pt-099",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A point charge of 10 nC sits inside a sphere. Using ε₀ = 8.854 × 10⁻¹² F/m, the outward flux of E through the sphere is about:",
    "options": [
      "1129 N·m²/C",
      "89.9 N·m²/C",
      "14193 N·m²/C",
      "113 N·m²/C"
    ],
    "correctAnswer": 0,
    "explanation": "Gauss's law: Φ = q/ε₀ = 10 × 10⁻⁹ / 8.854 × 10⁻¹² ≈ 1129 N·m²/C, whatever the sphere's radius."
  },
  {
    "id": "mv-pt-100",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Medium",
    "question": "A point charge of 4 nC sits inside a sphere. Using ε₀ = 8.854 × 10⁻¹² F/m, the outward flux of E through the sphere is about:",
    "options": [
      "5677 N·m²/C",
      "45.2 N·m²/C",
      "452 N·m²/C",
      "36.0 N·m²/C"
    ],
    "correctAnswer": 2,
    "explanation": "Gauss's law: Φ = q/ε₀ = 4 × 10⁻⁹ / 8.854 × 10⁻¹² ≈ 452 N·m²/C, whatever the sphere's radius."
  },
  {
    "id": "mv-pt-101",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Let f = x + y and g = xy (both harmonic). Use the product rule to evaluate ∇²(fg) at (2, 3).",
    "options": [
      "14",
      "10",
      "5",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "∇²(fg) = f∇²g + g∇²f + 2∇f·∇g = 0 + 0 + 2⟨1, 1⟩·⟨y, x⟩ = 2(1y + 1x) = 10 at (2, 3)."
  },
  {
    "id": "mv-pt-102",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Let f = 2x + y and g = xy (both harmonic). Use the product rule to evaluate ∇²(fg) at (1, -1).",
    "options": [
      "2",
      "−2",
      "−1",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "∇²(fg) = f∇²g + g∇²f + 2∇f·∇g = 0 + 0 + 2⟨2, 1⟩·⟨y, x⟩ = 2(2y + 1x) = -2 at (1, -1)."
  },
  {
    "id": "mv-pt-103",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Let f = x − 2y and g = xy (both harmonic). Use the product rule to evaluate ∇²(fg) at (3, 1).",
    "options": [
      "2",
      "0",
      "−10",
      "−5"
    ],
    "correctAnswer": 2,
    "explanation": "∇²(fg) = f∇²g + g∇²f + 2∇f·∇g = 0 + 0 + 2⟨1, -2⟩·⟨y, x⟩ = 2(1y + -2x) = -10 at (3, 1)."
  },
  {
    "id": "mv-pt-104",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Let f = 3x + 2y and g = xy (both harmonic). Use the product rule to evaluate ∇²(fg) at (-1, 2).",
    "options": [
      "8",
      "0",
      "2",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "∇²(fg) = f∇²g + g∇²f + 2∇f·∇g = 0 + 0 + 2⟨3, 2⟩·⟨y, x⟩ = 2(3y + 2x) = 8 at (-1, 2)."
  },
  {
    "id": "mv-pt-105",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Let f = −x + 4y and g = xy (both harmonic). Use the product rule to evaluate ∇²(fg) at (2, 2).",
    "options": [
      "6",
      "0",
      "16",
      "12"
    ],
    "correctAnswer": 3,
    "explanation": "∇²(fg) = f∇²g + g∇²f + 2∇f·∇g = 0 + 0 + 2⟨-1, 4⟩·⟨y, x⟩ = 2(-1y + 4x) = 12 at (2, 2)."
  },
  {
    "id": "mv-pt-106",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Let f = x² + y² + 2z² and S the sphere of radius 1 (outward normal). Evaluate the flux ∯ ∂f/∂n dS.",
    "options": [
      "8π",
      "128π/3",
      "16π",
      "32π/3"
    ],
    "correctAnswer": 3,
    "explanation": "Gauss's formula: ∯ ∂f/∂n dS = ∭ ∇²f dV = 8·(4/3)π·1 = 32π/3."
  },
  {
    "id": "mv-pt-107",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Let f = 2x² + y² and S the sphere of radius 1 (outward normal). Evaluate the flux ∯ ∂f/∂n dS.",
    "options": [
      "6π",
      "8π",
      "32π",
      "12π"
    ],
    "correctAnswer": 1,
    "explanation": "Gauss's formula: ∯ ∂f/∂n dS = ∭ ∇²f dV = 6·(4/3)π·1 = 8π."
  },
  {
    "id": "mv-pt-108",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Let f = x² + 2y² + 3z² and S the sphere of radius 1 (outward normal). Evaluate the flux ∯ ∂f/∂n dS.",
    "options": [
      "24π",
      "16π",
      "12π",
      "64π"
    ],
    "correctAnswer": 1,
    "explanation": "Gauss's formula: ∯ ∂f/∂n dS = ∭ ∇²f dV = 12·(4/3)π·1 = 16π."
  },
  {
    "id": "mv-pt-109",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Let f = x² + z² and S the sphere of radius 2 (outward normal). Evaluate the flux ∯ ∂f/∂n dS.",
    "options": [
      "512π/3",
      "32π",
      "4π",
      "128π/3"
    ],
    "correctAnswer": 3,
    "explanation": "Gauss's formula: ∯ ∂f/∂n dS = ∭ ∇²f dV = 4·(4/3)π·8 = 128π/3."
  },
  {
    "id": "mv-pt-110",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Let f = 3x² − y² + z² and S the sphere of radius 1 (outward normal). Evaluate the flux ∯ ∂f/∂n dS.",
    "options": [
      "8π",
      "6π",
      "32π",
      "12π"
    ],
    "correctAnswer": 0,
    "explanation": "Gauss's formula: ∯ ∂f/∂n dS = ∭ ∇²f dV = 6·(4/3)π·1 = 8π."
  },
  {
    "id": "mv-pt-111",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "For f = x², what is the average of f over the sphere of radius r centred at the origin?",
    "options": [
      "r²/3",
      "r²",
      "2r²/3",
      "r²/6"
    ],
    "correctAnswer": 0,
    "explanation": "By symmetry each of x², y², z² averages to r²/3 on the sphere, so the average is (1)r²/3. This matches (r²/2n)∇²f = (r²/6)(2)."
  },
  {
    "id": "mv-pt-112",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "For f = x² + y² + z², what is the average of f over the sphere of radius r centred at the origin?",
    "options": [
      "r²",
      "3r²",
      "2r²",
      "r²/2"
    ],
    "correctAnswer": 0,
    "explanation": "By symmetry each of x², y², z² averages to r²/3 on the sphere, so the average is (3)r²/3. This matches (r²/2n)∇²f = (r²/6)(6)."
  },
  {
    "id": "mv-pt-113",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "For f = 4x² + y², what is the average of f over the sphere of radius r centred at the origin?",
    "options": [
      "5r²",
      "10r²/3",
      "5r²/6",
      "5r²/3"
    ],
    "correctAnswer": 3,
    "explanation": "By symmetry each of x², y², z² averages to r²/3 on the sphere, so the average is (5)r²/3. This matches (r²/2n)∇²f = (r²/6)(10)."
  },
  {
    "id": "mv-pt-114",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "For f = 2x² + 2y² + 2z², what is the average of f over the sphere of radius r centred at the origin?",
    "options": [
      "4r²",
      "2r²",
      "6r²",
      "r²"
    ],
    "correctAnswer": 1,
    "explanation": "By symmetry each of x², y², z² averages to r²/3 on the sphere, so the average is (6)r²/3. This matches (r²/2n)∇²f = (r²/6)(12)."
  },
  {
    "id": "mv-pt-115",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "For f = 2x² + 5z², what is the average of f over the sphere of radius r centred at the origin?",
    "options": [
      "7r²/3",
      "7r²",
      "7r²/6",
      "14r²/3"
    ],
    "correctAnswer": 0,
    "explanation": "By symmetry each of x², y², z² averages to r²/3 on the sphere, so the average is (7)r²/3. This matches (r²/2n)∇²f = (r²/6)(14)."
  },
  {
    "id": "mv-pt-116",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Find the maximum of u = 1(x² − y²) on the closed disk x² + y² ≤ 4.",
    "options": [
      "2",
      "0",
      "4",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "u is harmonic, so its maximum is on the boundary. With x = 2cos t, y = 2sin t: u = 4cos 2t, maximized at 4. The only interior critical point (0, 0) is a saddle."
  },
  {
    "id": "mv-pt-117",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Find the maximum of u = 2(x² − y²) on the closed disk x² + y² ≤ 1.",
    "options": [
      "0",
      "4",
      "1",
      "2"
    ],
    "correctAnswer": 3,
    "explanation": "u is harmonic, so its maximum is on the boundary. With x = 1cos t, y = 1sin t: u = 2cos 2t, maximized at 2. The only interior critical point (0, 0) is a saddle."
  },
  {
    "id": "mv-pt-118",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Find the maximum of u = 3(x² − y²) on the closed disk x² + y² ≤ 4.",
    "options": [
      "0",
      "12",
      "24",
      "6"
    ],
    "correctAnswer": 1,
    "explanation": "u is harmonic, so its maximum is on the boundary. With x = 2cos t, y = 2sin t: u = 12cos 2t, maximized at 12. The only interior critical point (0, 0) is a saddle."
  },
  {
    "id": "mv-pt-119",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Find the maximum of u = 0.5(x² − y²) on the closed disk x² + y² ≤ 16.",
    "options": [
      "0",
      "4",
      "8",
      "16"
    ],
    "correctAnswer": 2,
    "explanation": "u is harmonic, so its maximum is on the boundary. With x = 4cos t, y = 4sin t: u = 8cos 2t, maximized at 8. The only interior critical point (0, 0) is a saddle."
  },
  {
    "id": "mv-pt-120",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Find the maximum of u = 5(x² − y²) on the closed disk x² + y² ≤ 1.",
    "options": [
      "0",
      "10",
      "5",
      "2.5"
    ],
    "correctAnswer": 2,
    "explanation": "u is harmonic, so its maximum is on the boundary. With x = 1cos t, y = 1sin t: u = 5cos 2t, maximized at 5. The only interior critical point (0, 0) is a saddle."
  },
  {
    "id": "mv-pt-121",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Compute the outward flux of ∇(1/ρ) through the sphere ρ = 2.",
    "options": [
      "−8π",
      "−4π",
      "0",
      "4π"
    ],
    "correctAnswer": 1,
    "explanation": "∇(1/ρ) = −r̂/ρ², so the flux is 1·(−1/2²)·4π·2² = -4π, independent of the radius: a point source at the origin."
  },
  {
    "id": "mv-pt-122",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Compute the outward flux of ∇(2/ρ) through the sphere ρ = 5.",
    "options": [
      "−8π",
      "−40π",
      "0",
      "8π"
    ],
    "correctAnswer": 0,
    "explanation": "∇(1/ρ) = −r̂/ρ², so the flux is 2·(−1/5²)·4π·5² = -8π, independent of the radius: a point source at the origin."
  },
  {
    "id": "mv-pt-123",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Compute the outward flux of ∇(3/ρ) through the sphere ρ = 2.",
    "options": [
      "−24π",
      "12π",
      "0",
      "−12π"
    ],
    "correctAnswer": 3,
    "explanation": "∇(1/ρ) = −r̂/ρ², so the flux is 3·(−1/2²)·4π·2² = -12π, independent of the radius: a point source at the origin."
  },
  {
    "id": "mv-pt-124",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Compute the outward flux of ∇(−1/ρ) through the sphere ρ = 3.",
    "options": [
      "0",
      "4π",
      "12π",
      "−4π"
    ],
    "correctAnswer": 1,
    "explanation": "∇(1/ρ) = −r̂/ρ², so the flux is −1·(−1/3²)·4π·3² = 4π, independent of the radius: a point source at the origin."
  },
  {
    "id": "mv-pt-125",
    "module": "Potential Theory",
    "topic": "The Laplacian & Harmonic Functions",
    "difficulty": "Hard",
    "question": "Compute the outward flux of ∇(5/ρ) through the sphere ρ = 4.",
    "options": [
      "−20π",
      "0",
      "20π",
      "−80π"
    ],
    "correctAnswer": 0,
    "explanation": "∇(1/ρ) = −r̂/ρ², so the flux is 5·(−1/4²)·4π·4² = -20π, independent of the radius: a point source at the origin."
  },
  {
    "id": "mv-pt-126",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A ball of radius R has uniform charge density. What is the ratio |E(r)|/|E(R)| at r = R/2?",
    "options": [
      "2",
      "1/4",
      "1/2",
      "4"
    ],
    "correctAnswer": 2,
    "explanation": "Gauss's law gives E ∝ r inside the ball and E ∝ 1/r² outside, with the two matching at r = R."
  },
  {
    "id": "mv-pt-127",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A ball of radius R has uniform charge density. What is the ratio |E(r)|/|E(R)| at r = R/4?",
    "options": [
      "4",
      "16",
      "1/4",
      "1/16"
    ],
    "correctAnswer": 2,
    "explanation": "Gauss's law gives E ∝ r inside the ball and E ∝ 1/r² outside, with the two matching at r = R."
  },
  {
    "id": "mv-pt-128",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A ball of radius R has uniform charge density. What is the ratio |E(r)|/|E(R)| at r = 2R?",
    "options": [
      "1/8",
      "1/4",
      "2",
      "1/2"
    ],
    "correctAnswer": 1,
    "explanation": "Gauss's law gives E ∝ r inside the ball and E ∝ 1/r² outside, with the two matching at r = R."
  },
  {
    "id": "mv-pt-129",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A ball of radius R has uniform charge density. What is the ratio |E(r)|/|E(R)| at r = 3R?",
    "options": [
      "1/3",
      "1/27",
      "1/9",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "Gauss's law gives E ∝ r inside the ball and E ∝ 1/r² outside, with the two matching at r = R."
  },
  {
    "id": "mv-pt-130",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A ball of radius R has uniform charge density. What is the ratio |E(r)|/|E(R)| at r = 3R/4?",
    "options": [
      "16/9",
      "3/4",
      "9/16",
      "4/3"
    ],
    "correctAnswer": 1,
    "explanation": "Gauss's law gives E ∝ r inside the ball and E ∝ 1/r² outside, with the two matching at r = R."
  },
  {
    "id": "mv-pt-131",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "In an ohmic conductor (J = σE), what fraction of an initial interior charge density remains after time t = 1·ε₀/σ?",
    "options": [
      "e^(−2) ≈ 0.135",
      "e^(−0.5) ≈ 0.607",
      "e^(−1) ≈ 0.368",
      "0.500"
    ],
    "correctAnswer": 2,
    "explanation": "∂ρ/∂t = −σρ/ε₀, so ρ = ρ₀e^(−σt/ε₀). With t = 1ε₀/σ the factor is e^(−1) ≈ 0.368."
  },
  {
    "id": "mv-pt-132",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "In an ohmic conductor (J = σE), what fraction of an initial interior charge density remains after time t = 2·ε₀/σ?",
    "options": [
      "0.333",
      "e^(−4) ≈ 0.018",
      "e^(−2) ≈ 0.135",
      "e^(−1) ≈ 0.368"
    ],
    "correctAnswer": 2,
    "explanation": "∂ρ/∂t = −σρ/ε₀, so ρ = ρ₀e^(−σt/ε₀). With t = 2ε₀/σ the factor is e^(−2) ≈ 0.135."
  },
  {
    "id": "mv-pt-133",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "In an ohmic conductor (J = σE), what fraction of an initial interior charge density remains after time t = 3·ε₀/σ?",
    "options": [
      "e^(−6) ≈ 0.002",
      "e^(−3) ≈ 0.050",
      "0.250",
      "e^(−1.5) ≈ 0.223"
    ],
    "correctAnswer": 1,
    "explanation": "∂ρ/∂t = −σρ/ε₀, so ρ = ρ₀e^(−σt/ε₀). With t = 3ε₀/σ the factor is e^(−3) ≈ 0.050."
  },
  {
    "id": "mv-pt-134",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "In an ohmic conductor (J = σE), what fraction of an initial interior charge density remains after time t = 5·ε₀/σ?",
    "options": [
      "e^(−5) ≈ 0.007",
      "e^(−2.5) ≈ 0.082",
      "0.167",
      "e^(−10) ≈ 0.000"
    ],
    "correctAnswer": 0,
    "explanation": "∂ρ/∂t = −σρ/ε₀, so ρ = ρ₀e^(−σt/ε₀). With t = 5ε₀/σ the factor is e^(−5) ≈ 0.007."
  },
  {
    "id": "mv-pt-135",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "In an ohmic conductor (J = σE), what fraction of an initial interior charge density remains after time t = 0.5·ε₀/σ?",
    "options": [
      "e^(−0.25) ≈ 0.779",
      "0.667",
      "e^(−1) ≈ 0.368",
      "e^(−0.5) ≈ 0.607"
    ],
    "correctAnswer": 3,
    "explanation": "∂ρ/∂t = −σρ/ε₀, so ρ = ρ₀e^(−σt/ε₀). With t = 0.5ε₀/σ the factor is e^(−0.5) ≈ 0.607."
  },
  {
    "id": "mv-pt-136",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A capacitor with circular plates of radius 0.1 m is charged by a current I = 2 A. What is B in the gap at distance 0.05 m from the axis?",
    "options": [
      "4.00 × 10⁻⁶ T",
      "8.00 × 10⁻⁶ T",
      "0 T",
      "2.00 × 10⁻⁶ T"
    ],
    "correctAnswer": 3,
    "explanation": "Only displacement current crosses a disk of radius r: B(2πr) = μ₀I r²/R², so B = μ₀I r/(2πR²) ≈ 2.00 × 10⁻⁶ T."
  },
  {
    "id": "mv-pt-137",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A capacitor with circular plates of radius 0.05 m is charged by a current I = 1 A. What is B in the gap at distance 0.02 m from the axis?",
    "options": [
      "3.20 × 10⁻⁶ T",
      "1.60 × 10⁻⁶ T",
      "0 T",
      "1.00 × 10⁻⁵ T"
    ],
    "correctAnswer": 1,
    "explanation": "Only displacement current crosses a disk of radius r: B(2πr) = μ₀I r²/R², so B = μ₀I r/(2πR²) ≈ 1.60 × 10⁻⁶ T."
  },
  {
    "id": "mv-pt-138",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A capacitor with circular plates of radius 0.2 m is charged by a current I = 5 A. What is B in the gap at distance 0.1 m from the axis?",
    "options": [
      "1.00 × 10⁻⁵ T",
      "0 T",
      "5.00 × 10⁻⁶ T",
      "2.50 × 10⁻⁶ T"
    ],
    "correctAnswer": 3,
    "explanation": "Only displacement current crosses a disk of radius r: B(2πr) = μ₀I r²/R², so B = μ₀I r/(2πR²) ≈ 2.50 × 10⁻⁶ T."
  },
  {
    "id": "mv-pt-139",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A capacitor with circular plates of radius 0.1 m is charged by a current I = 3 A. What is B in the gap at distance 0.06 m from the axis?",
    "options": [
      "7.20 × 10⁻⁶ T",
      "1.00 × 10⁻⁵ T",
      "0 T",
      "3.60 × 10⁻⁶ T"
    ],
    "correctAnswer": 3,
    "explanation": "Only displacement current crosses a disk of radius r: B(2πr) = μ₀I r²/R², so B = μ₀I r/(2πR²) ≈ 3.60 × 10⁻⁶ T."
  },
  {
    "id": "mv-pt-140",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A capacitor with circular plates of radius 0.08 m is charged by a current I = 4 A. What is B in the gap at distance 0.02 m from the axis?",
    "options": [
      "5.00 × 10⁻⁶ T",
      "0 T",
      "2.50 × 10⁻⁶ T",
      "4.00 × 10⁻⁵ T"
    ],
    "correctAnswer": 2,
    "explanation": "Only displacement current crosses a disk of radius r: B(2πr) = μ₀I r²/R², so B = μ₀I r/(2πR²) ≈ 2.50 × 10⁻⁶ T."
  },
  {
    "id": "mv-pt-141",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "In empty space E = ⟨0, 0, x⟩. Which B(t) (with B = 0 at t = 0) satisfies Faraday's law?",
    "options": [
      "⟨0, 0, t⟩",
      "⟨0, −t, 0⟩",
      "⟨t, 0, 0⟩",
      "⟨0, t, 0⟩"
    ],
    "correctAnswer": 3,
    "explanation": "∇×E = ⟨0, −∂E_z/∂x, 0⟩ = ⟨0, −1, 0⟩. Faraday's law ∇×E = −∂B/∂t gives ∂B/∂t = ⟨0, 1, 0⟩, so B = ⟨0, 1t, 0⟩."
  },
  {
    "id": "mv-pt-142",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "In empty space E = ⟨0, 0, 2x⟩. Which B(t) (with B = 0 at t = 0) satisfies Faraday's law?",
    "options": [
      "⟨0, 2t, 0⟩",
      "⟨0, −2t, 0⟩",
      "⟨2t, 0, 0⟩",
      "⟨0, 0, 2t⟩"
    ],
    "correctAnswer": 0,
    "explanation": "∇×E = ⟨0, −∂E_z/∂x, 0⟩ = ⟨0, −2, 0⟩. Faraday's law ∇×E = −∂B/∂t gives ∂B/∂t = ⟨0, 2, 0⟩, so B = ⟨0, 2t, 0⟩."
  },
  {
    "id": "mv-pt-143",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "In empty space E = ⟨0, 0, 3x⟩. Which B(t) (with B = 0 at t = 0) satisfies Faraday's law?",
    "options": [
      "⟨0, 3t, 0⟩",
      "⟨3t, 0, 0⟩",
      "⟨0, −3t, 0⟩",
      "⟨0, 0, 3t⟩"
    ],
    "correctAnswer": 0,
    "explanation": "∇×E = ⟨0, −∂E_z/∂x, 0⟩ = ⟨0, −3, 0⟩. Faraday's law ∇×E = −∂B/∂t gives ∂B/∂t = ⟨0, 3, 0⟩, so B = ⟨0, 3t, 0⟩."
  },
  {
    "id": "mv-pt-144",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "In empty space E = ⟨0, 0, −2x⟩. Which B(t) (with B = 0 at t = 0) satisfies Faraday's law?",
    "options": [
      "⟨−2t, 0, 0⟩",
      "⟨0, 2t, 0⟩",
      "⟨0, −2t, 0⟩",
      "⟨0, 0, −2t⟩"
    ],
    "correctAnswer": 2,
    "explanation": "∇×E = ⟨0, −∂E_z/∂x, 0⟩ = ⟨0, 2, 0⟩. Faraday's law ∇×E = −∂B/∂t gives ∂B/∂t = ⟨0, −2, 0⟩, so B = ⟨0, −2t, 0⟩."
  },
  {
    "id": "mv-pt-145",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "In empty space E = ⟨0, 0, 5x⟩. Which B(t) (with B = 0 at t = 0) satisfies Faraday's law?",
    "options": [
      "⟨5t, 0, 0⟩",
      "⟨0, 0, 5t⟩",
      "⟨0, −5t, 0⟩",
      "⟨0, 5t, 0⟩"
    ],
    "correctAnswer": 3,
    "explanation": "∇×E = ⟨0, −∂E_z/∂x, 0⟩ = ⟨0, −5, 0⟩. Faraday's law ∇×E = −∂B/∂t gives ∂B/∂t = ⟨0, 5, 0⟩, so B = ⟨0, 5t, 0⟩."
  },
  {
    "id": "mv-pt-146",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A plane electromagnetic wave in vacuum has electric amplitude E₀ = 300 V/m. What is its magnetic amplitude B₀?",
    "options": [
      "1.00 × 10⁻⁶ T",
      "1.00 × 10⁻³ T",
      "3.77 × 10⁻⁴ T",
      "8.99 × 10¹⁰ T"
    ],
    "correctAnswer": 0,
    "explanation": "Faraday's law for a plane wave gives ω = ck and B₀ = E₀/c = 300/(3.00 × 10⁸) ≈ 1.00 × 10⁻⁶ T."
  },
  {
    "id": "mv-pt-147",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A plane electromagnetic wave in vacuum has electric amplitude E₀ = 30 V/m. What is its magnetic amplitude B₀?",
    "options": [
      "8.99 × 10⁹ T",
      "3.77 × 10⁻⁵ T",
      "1.00 × 10⁻⁷ T",
      "1.00 × 10⁻⁴ T"
    ],
    "correctAnswer": 2,
    "explanation": "Faraday's law for a plane wave gives ω = ck and B₀ = E₀/c = 30/(3.00 × 10⁸) ≈ 1.00 × 10⁻⁷ T."
  },
  {
    "id": "mv-pt-148",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A plane electromagnetic wave in vacuum has electric amplitude E₀ = 900 V/m. What is its magnetic amplitude B₀?",
    "options": [
      "2.70 × 10¹¹ T",
      "3.00 × 10⁻⁶ T",
      "1.13 × 10⁻³ T",
      "3.00 × 10⁻³ T"
    ],
    "correctAnswer": 1,
    "explanation": "Faraday's law for a plane wave gives ω = ck and B₀ = E₀/c = 900/(3.00 × 10⁸) ≈ 3.00 × 10⁻⁶ T."
  },
  {
    "id": "mv-pt-149",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A plane electromagnetic wave in vacuum has electric amplitude E₀ = 60 V/m. What is its magnetic amplitude B₀?",
    "options": [
      "2.00 × 10⁻⁷ T",
      "7.54 × 10⁻⁵ T",
      "1.80 × 10¹⁰ T",
      "2.00 × 10⁻⁴ T"
    ],
    "correctAnswer": 0,
    "explanation": "Faraday's law for a plane wave gives ω = ck and B₀ = E₀/c = 60/(3.00 × 10⁸) ≈ 2.00 × 10⁻⁷ T."
  },
  {
    "id": "mv-pt-150",
    "module": "Potential Theory",
    "topic": "Maxwell's Equations & the Continuity Equation",
    "difficulty": "Hard",
    "question": "A plane electromagnetic wave in vacuum has electric amplitude E₀ = 1500 V/m. What is its magnetic amplitude B₀?",
    "options": [
      "5.00 × 10⁻⁶ T",
      "5.00 × 10⁻³ T",
      "1.88 × 10⁻³ T",
      "4.50 × 10¹¹ T"
    ],
    "correctAnswer": 0,
    "explanation": "Faraday's law for a plane wave gives ω = ck and B₀ = E₀/c = 1500/(3.00 × 10⁸) ≈ 5.00 × 10⁻⁶ T."
  },
];
