// src/data/mvDifferentialFormsPracticeBank.js
// Practice Arena — Differential Forms (Multivariable Calculus)
// 150 MCQs: 50 Easy / 50 Medium / 50 Hard, 25 per difficulty per topic:
//   Differential Forms & the Exterior Derivative; Generalized Stokes' Theorem.
// Same format as mvPracticeBank.js (correctAnswer is the 0-based option index).

export const MV_DIFFERENTIAL_FORMS_PRACTICE_BANK = [
  {
    "id": "mv-df-001",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Simplify (2dx + dy) ∧ (dx − 3dy).",
    "options": [
      "5 dx∧dy",
      "7 dx∧dy",
      "−7 dx∧dy",
      "−5 dx∧dy"
    ],
    "correctAnswer": 2,
    "explanation": "Expand and use dx∧dx = dy∧dy = 0, dy∧dx = −dx∧dy. The coefficient is the determinant (2)(-3) − (1)(1) = -7."
  },
  {
    "id": "mv-df-002",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Simplify (dx + 2dy) ∧ (3dx + 4dy).",
    "options": [
      "10 dx∧dy",
      "2 dx∧dy",
      "−5 dx∧dy",
      "−2 dx∧dy"
    ],
    "correctAnswer": 3,
    "explanation": "Expand and use dx∧dx = dy∧dy = 0, dy∧dx = −dx∧dy. The coefficient is the determinant (1)(4) − (2)(3) = -2."
  },
  {
    "id": "mv-df-003",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Simplify (3dx) ∧ (dx + 2dy).",
    "options": [
      "6 dx∧dy",
      "3 dx∧dy",
      "−6 dx∧dy",
      "7 dx∧dy"
    ],
    "correctAnswer": 0,
    "explanation": "Expand and use dx∧dx = dy∧dy = 0, dy∧dx = −dx∧dy. The coefficient is the determinant (3)(2) − (0)(1) = 6."
  },
  {
    "id": "mv-df-004",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Simplify (dx − dy) ∧ (2dx + 5dy).",
    "options": [
      "8 dx∧dy",
      "3 dx∧dy",
      "−7 dx∧dy",
      "7 dx∧dy"
    ],
    "correctAnswer": 3,
    "explanation": "Expand and use dx∧dx = dy∧dy = 0, dy∧dx = −dx∧dy. The coefficient is the determinant (1)(5) − (-1)(2) = 7."
  },
  {
    "id": "mv-df-005",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Simplify (4dx + dy) ∧ (2dx + dy).",
    "options": [
      "7 dx∧dy",
      "6 dx∧dy",
      "−2 dx∧dy",
      "2 dx∧dy"
    ],
    "correctAnswer": 3,
    "explanation": "Expand and use dx∧dx = dy∧dy = 0, dy∧dx = −dx∧dy. The coefficient is the determinant (4)(1) − (1)(2) = 2."
  },
  {
    "id": "mv-df-006",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Simplify (−2dx + 3dy) ∧ (dx + dy).",
    "options": [
      "−4 dx∧dy",
      "−5 dx∧dy",
      "5 dx∧dy",
      "dx∧dy"
    ],
    "correctAnswer": 1,
    "explanation": "Expand and use dx∧dx = dy∧dy = 0, dy∧dx = −dx∧dy. The coefficient is the determinant (-2)(1) − (3)(1) = -5."
  },
  {
    "id": "mv-df-007",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Compute df for f(x, y, z) = x² + yz.",
    "options": [
      "x dx + z dy + y dz",
      "2x dx + y dy + z dz",
      "2x dx + z dy + y dz",
      "2x dx + yz dz"
    ],
    "correctAnswer": 2,
    "explanation": "df = f_x dx + f_y dy + f_z dz with f_x = 2x, f_y = 1z, f_z = 1y."
  },
  {
    "id": "mv-df-008",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Compute df for f(x, y, z) = 3x² + 2yz.",
    "options": [
      "3x dx + 2z dy + 2y dz",
      "6x dx + 2z dy + 2y dz",
      "6x dx + 2yz dz",
      "6x dx + 2y dy + 2z dz"
    ],
    "correctAnswer": 1,
    "explanation": "df = f_x dx + f_y dy + f_z dz with f_x = 6x, f_y = 2z, f_z = 2y."
  },
  {
    "id": "mv-df-009",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Compute df for f(x, y, z) = 2x² − yz.",
    "options": [
      "2x dx − z dy − y dz",
      "4x dx − z dy − y dz",
      "4x dx − y dy − z dz",
      "4x dx − yz dz"
    ],
    "correctAnswer": 1,
    "explanation": "df = f_x dx + f_y dy + f_z dz with f_x = 4x, f_y = -1z, f_z = -1y."
  },
  {
    "id": "mv-df-010",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Compute df for f(x, y, z) = 5x² + 4yz.",
    "options": [
      "10x dx + 4yz dz",
      "5x dx + 4z dy + 4y dz",
      "10x dx + 4z dy + 4y dz",
      "10x dx + 4y dy + 4z dz"
    ],
    "correctAnswer": 2,
    "explanation": "df = f_x dx + f_y dy + f_z dz with f_x = 10x, f_y = 4z, f_z = 4y."
  },
  {
    "id": "mv-df-011",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Compute df for f(x, y, z) = −x² + 3yz.",
    "options": [
      "−x dx + 3z dy + 3y dz",
      "−2x dx + 3y dy + 3z dz",
      "−2x dx + 3z dy + 3y dz",
      "−2x dx + 3yz dz"
    ],
    "correctAnswer": 2,
    "explanation": "df = f_x dx + f_y dy + f_z dz with f_x = -2x, f_y = 3z, f_z = 3y."
  },
  {
    "id": "mv-df-012",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Evaluate the 2-form dx∧dy on u = ⟨1, 2⟩ and v = ⟨3, 1⟩.",
    "options": [
      "−5",
      "5",
      "−2",
      "7"
    ],
    "correctAnswer": 0,
    "explanation": "(dx∧dy)(u, v) = u₁v₂ − u₂v₁ = (1)(1) − (2)(3) = -5: the signed area of the parallelogram."
  },
  {
    "id": "mv-df-013",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Evaluate the 2-form dx∧dy on u = ⟨2, 0⟩ and v = ⟨1, 4⟩.",
    "options": [
      "2",
      "11",
      "8",
      "−8"
    ],
    "correctAnswer": 2,
    "explanation": "(dx∧dy)(u, v) = u₁v₂ − u₂v₁ = (2)(4) − (0)(1) = 8: the signed area of the parallelogram."
  },
  {
    "id": "mv-df-014",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Evaluate the 2-form dx∧dy on u = ⟨−1, 3⟩ and v = ⟨2, 2⟩.",
    "options": [
      "4",
      "−8",
      "−5",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "(dx∧dy)(u, v) = u₁v₂ − u₂v₁ = (-1)(2) − (3)(2) = -8: the signed area of the parallelogram."
  },
  {
    "id": "mv-df-015",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Evaluate the 2-form dx∧dy on u = ⟨4, 1⟩ and v = ⟨1, 3⟩.",
    "options": [
      "7",
      "11",
      "−11",
      "13"
    ],
    "correctAnswer": 1,
    "explanation": "(dx∧dy)(u, v) = u₁v₂ − u₂v₁ = (4)(3) − (1)(1) = 11: the signed area of the parallelogram."
  },
  {
    "id": "mv-df-016",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "What is dx∧dx?",
    "options": [
      "2dx",
      "dx²",
      "0",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "The wedge product is alternating: α∧α = −α∧α for a 1-form, so dx∧dx = 0."
  },
  {
    "id": "mv-df-017",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Which identity is true?",
    "options": [
      "dy∧dx = 0",
      "dy∧dx = −dx∧dy",
      "dy∧dx = dx∧dy",
      "dy∧dx = dx·dy"
    ],
    "correctAnswer": 1,
    "explanation": "Swapping two 1-forms in a wedge product changes the sign."
  },
  {
    "id": "mv-df-018",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "How many independent basic 2-forms are there on ℝ³?",
    "options": [
      "1",
      "6",
      "3",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "dy∧dz, dz∧dx, dx∧dy: C(3, 2) = 3."
  },
  {
    "id": "mv-df-019",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "How many independent basic 2-forms are there on ℝ⁴?",
    "options": [
      "3",
      "4",
      "6",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "Choose 2 of the 4 coordinates: C(4, 2) = 6."
  },
  {
    "id": "mv-df-020",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "The exterior derivative d turns a k-form into:",
    "options": [
      "A k-form",
      "A (k − 1)-form",
      "A (k + 1)-form",
      "A function"
    ],
    "correctAnswer": 2,
    "explanation": "d raises the degree by one: functions → 1-forms → 2-forms → 3-forms."
  },
  {
    "id": "mv-df-021",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "For every smooth form ω, d(dω) equals:",
    "options": [
      "dω",
      "dω∧dω",
      "ω",
      "0"
    ],
    "correctAnswer": 3,
    "explanation": "d² = 0; for functions this is equality of mixed partials (Clairaut)."
  },
  {
    "id": "mv-df-022",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "A 0-form on ℝ³ is:",
    "options": [
      "A constant only",
      "A smooth function f(x, y, z)",
      "A curve",
      "A vector field"
    ],
    "correctAnswer": 1,
    "explanation": "0-forms are functions; they are 'integrated' over points by evaluating."
  },
  {
    "id": "mv-df-023",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "A 1-form is naturally integrated over:",
    "options": [
      "Points",
      "Surfaces",
      "Curves",
      "Solid regions"
    ],
    "correctAnswer": 2,
    "explanation": "A k-form is integrated over k-dimensional objects."
  },
  {
    "id": "mv-df-024",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "Which statement is always true?",
    "options": [
      "Every exact form is closed",
      "Every closed form is exact",
      "No form is both closed and exact",
      "Every form is closed"
    ],
    "correctAnswer": 0,
    "explanation": "If ω = dα then dω = d²α = 0. The converse needs a condition on the domain."
  },
  {
    "id": "mv-df-025",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Easy",
    "question": "A form ω is called closed when:",
    "options": [
      "ω∧ω = 0",
      "ω = dα for some α",
      "ω = 0",
      "dω = 0"
    ],
    "correctAnswer": 3,
    "explanation": "Closed means its exterior derivative vanishes; exact means it is the derivative of another form."
  },
  {
    "id": "mv-df-026",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "Let f = x²y + z. Evaluate ∫_C df along any smooth curve from (0, 0, 0) to (1, 2, 3).",
    "options": [
      "−5",
      "5",
      "0",
      "7"
    ],
    "correctAnswer": 1,
    "explanation": "∫_C df = f(end) − f(start) = 5 − 0 = 5, whatever the path."
  },
  {
    "id": "mv-df-027",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "Let f = xyz. Evaluate ∫_C df along any smooth curve from (1, 1, 1) to (2, 3, 1).",
    "options": [
      "−5",
      "7",
      "6",
      "5"
    ],
    "correctAnswer": 3,
    "explanation": "∫_C df = f(end) − f(start) = 6 − 1 = 5, whatever the path."
  },
  {
    "id": "mv-df-028",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "Let f = x + 2y − z. Evaluate ∫_C df along any smooth curve from (0, 1, 2) to (3, 0, 1).",
    "options": [
      "2",
      "0",
      "4",
      "−2"
    ],
    "correctAnswer": 0,
    "explanation": "∫_C df = f(end) − f(start) = 2 − 0 = 2, whatever the path."
  },
  {
    "id": "mv-df-029",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "Let f = x² + y² + z². Evaluate ∫_C df along any smooth curve from (1, 0, 0) to (1, 2, 2).",
    "options": [
      "8",
      "10",
      "9",
      "−8"
    ],
    "correctAnswer": 0,
    "explanation": "∫_C df = f(end) − f(start) = 9 − 1 = 8, whatever the path."
  },
  {
    "id": "mv-df-030",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "Let f = xy + yz. Evaluate ∫_C df along any smooth curve from (0, 0, 0) to (2, 1, 3).",
    "options": [
      "−5",
      "0",
      "7",
      "5"
    ],
    "correctAnswer": 3,
    "explanation": "∫_C df = f(end) − f(start) = 5 − 0 = 5, whatever the path."
  },
  {
    "id": "mv-df-031",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "Let f = 3x − y². Evaluate ∫_C df along any smooth curve from (1, 1, 0) to (2, 3, 5).",
    "options": [
      "0",
      "5",
      "−3",
      "−5"
    ],
    "correctAnswer": 3,
    "explanation": "∫_C df = f(end) − f(start) = -3 − 2 = -5, whatever the path."
  },
  {
    "id": "mv-df-032",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "By Green's Theorem, ∮ x dy around the circle of radius 1 (counterclockwise) equals:",
    "options": [
      "2π",
      "π/2",
      "0",
      "π"
    ],
    "correctAnswer": 3,
    "explanation": "d(x dy) = dx∧dy, so the integral is the enclosed area π·1² = π."
  },
  {
    "id": "mv-df-033",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "By Green's Theorem, ∮ x dy around the circle of radius 2 (counterclockwise) equals:",
    "options": [
      "8π",
      "4π",
      "2π",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "d(x dy) = dx∧dy, so the integral is the enclosed area π·2² = 4π."
  },
  {
    "id": "mv-df-034",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "By Green's Theorem, ∮ x dy around the circle of radius 3 (counterclockwise) equals:",
    "options": [
      "18π",
      "9π",
      "9π/2",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "d(x dy) = dx∧dy, so the integral is the enclosed area π·3² = 9π."
  },
  {
    "id": "mv-df-035",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "By Green's Theorem, ∮ x dy around the circle of radius 4 (counterclockwise) equals:",
    "options": [
      "16π",
      "8π",
      "32π",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "d(x dy) = dx∧dy, so the integral is the enclosed area π·4² = 16π."
  },
  {
    "id": "mv-df-036",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "What is the oriented boundary of the closed unit disk?",
    "options": [
      "The unit circle, traversed counterclockwise",
      "The two points {B} − {A}",
      "The six square faces, with outward normals",
      "The unit sphere, with outward normal"
    ],
    "correctAnswer": 0,
    "explanation": "The boundary has one dimension less, oriented by the outward-first rule."
  },
  {
    "id": "mv-df-037",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "What is the oriented boundary of the solid unit ball?",
    "options": [
      "The unit circle, traversed counterclockwise",
      "The six square faces, with outward normals",
      "Two circles: r = 2 counterclockwise and r = 1 clockwise",
      "The unit sphere, with outward normal"
    ],
    "correctAnswer": 3,
    "explanation": "The boundary has one dimension less, oriented by the outward-first rule."
  },
  {
    "id": "mv-df-038",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "What is the oriented boundary of the annulus 1 ≤ x² + y² ≤ 4?",
    "options": [
      "Two circles: r = 2 counterclockwise and r = 1 clockwise",
      "The unit sphere, with outward normal",
      "The unit circle, traversed counterclockwise",
      "The two points {B} − {A}"
    ],
    "correctAnswer": 0,
    "explanation": "The boundary has one dimension less, oriented by the outward-first rule."
  },
  {
    "id": "mv-df-039",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "What is the oriented boundary of the solid cube [0, 1]³?",
    "options": [
      "Two circles: r = 2 counterclockwise and r = 1 clockwise",
      "The two points {B} − {A}",
      "The six square faces, with outward normals",
      "The unit circle, traversed counterclockwise"
    ],
    "correctAnswer": 2,
    "explanation": "The boundary has one dimension less, oriented by the outward-first rule."
  },
  {
    "id": "mv-df-040",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "What is the oriented boundary of an oriented curve from A to B?",
    "options": [
      "The six square faces, with outward normals",
      "The two points {B} − {A}",
      "The unit circle, traversed counterclockwise",
      "The unit sphere, with outward normal"
    ],
    "correctAnswer": 1,
    "explanation": "The boundary has one dimension less, oriented by the outward-first rule."
  },
  {
    "id": "mv-df-041",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "The Generalized Stokes' Theorem states:",
    "options": [
      "∫_∂M ω = ∫_M ω∧ω",
      "∫_M dω = ∫_∂M ω",
      "∫_M dω = 0",
      "∫_M ω = ∫_∂M dω"
    ],
    "correctAnswer": 1,
    "explanation": "Integrating dω over M equals integrating ω over the boundary of M."
  },
  {
    "id": "mv-df-042",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "For any manifold with boundary M, ∂(∂M) is:",
    "options": [
      "Empty",
      "∂M",
      "A single point",
      "M"
    ],
    "correctAnswer": 0,
    "explanation": "A boundary has no boundary: the geometric twin of d² = 0."
  },
  {
    "id": "mv-df-043",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "When M is a curve and ω is a function f, Generalized Stokes becomes:",
    "options": [
      "The Fundamental Theorem for line integrals",
      "Green's Theorem",
      "Classical Stokes' Theorem",
      "The Divergence Theorem"
    ],
    "correctAnswer": 0,
    "explanation": "∫_C df = f(B) − f(A)."
  },
  {
    "id": "mv-df-044",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "Green's Theorem is the case where M is:",
    "options": [
      "A curve in ℝ³",
      "A closed surface",
      "A region in the plane",
      "A solid in ℝ³"
    ],
    "correctAnswer": 2,
    "explanation": "k = 2 in ℝ²: ∬_D (Q_x − P_y) dA = ∮ P dx + Q dy."
  },
  {
    "id": "mv-df-045",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "The Divergence Theorem is the case where M is:",
    "options": [
      "A solid region in ℝ³",
      "A surface with an edge",
      "A curve",
      "A plane region"
    ],
    "correctAnswer": 0,
    "explanation": "k = 3: ∭ ∇·F dV = ∯ F·n dS."
  },
  {
    "id": "mv-df-046",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "Classical Stokes' Theorem is the case where M is:",
    "options": [
      "A surface in ℝ³ with a boundary curve",
      "A closed sphere",
      "A solid ball",
      "A segment"
    ],
    "correctAnswer": 0,
    "explanation": "k = 2 in ℝ³: ∬ (∇×F)·n dS = ∮ F·dr."
  },
  {
    "id": "mv-df-047",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "If M has no boundary and ω = dα is exact, then ∫_M ω equals:",
    "options": [
      "0",
      "1",
      "∫_M α",
      "The volume of M"
    ],
    "correctAnswer": 0,
    "explanation": "∫_M dα = ∫_∂M α and ∂M is empty."
  },
  {
    "id": "mv-df-048",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "If M is a k-dimensional manifold, its boundary ∂M has dimension:",
    "options": [
      "0",
      "k",
      "k + 1",
      "k − 1"
    ],
    "correctAnswer": 3,
    "explanation": "Edges of surfaces are curves, faces of solids are surfaces."
  },
  {
    "id": "mv-df-049",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "A plane region's outer boundary is oriented so that:",
    "options": [
      "It runs clockwise",
      "It has no orientation",
      "The region is on the right",
      "The region is on the left as you walk along it"
    ],
    "correctAnswer": 3,
    "explanation": "The outer edge runs counterclockwise, keeping the region on the left."
  },
  {
    "id": "mv-df-050",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Easy",
    "question": "In Generalized Stokes for a k-manifold M, ω must be:",
    "options": [
      "A 0-form only",
      "A smooth (k − 1)-form",
      "A closed form",
      "A smooth k-form"
    ],
    "correctAnswer": 1,
    "explanation": "Then dω is a k-form and can be integrated over M."
  },
  {
    "id": "mv-df-051",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Compute dω for ω = −y dx + x dy.",
    "options": [
      "−2 dx∧dy",
      "2 dx∧dy",
      "3 dx∧dy",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "d(P dx + Q dy) = (Q_x − P_y) dx∧dy. Here P = −y, Q = x, so Q_x − P_y = 1 − (-1) = 2."
  },
  {
    "id": "mv-df-052",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Compute dω for ω = −2y dx + 3x dy.",
    "options": [
      "5 dx∧dy",
      "−5 dx∧dy",
      "dx∧dy",
      "6 dx∧dy"
    ],
    "correctAnswer": 0,
    "explanation": "d(P dx + Q dy) = (Q_x − P_y) dx∧dy. Here P = −2y, Q = 3x, so Q_x − P_y = 3 − (-2) = 5."
  },
  {
    "id": "mv-df-053",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Compute dω for ω = y dx + 2x dy.",
    "options": [
      "3 dx∧dy",
      "−dx∧dy",
      "dx∧dy",
      "4 dx∧dy"
    ],
    "correctAnswer": 2,
    "explanation": "d(P dx + Q dy) = (Q_x − P_y) dx∧dy. Here P = y, Q = 2x, so Q_x − P_y = 2 − (1) = 1."
  },
  {
    "id": "mv-df-054",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Compute dω for ω = −4y dx + x dy.",
    "options": [
      "5 dx∧dy",
      "−5 dx∧dy",
      "2 dx∧dy",
      "−3 dx∧dy"
    ],
    "correctAnswer": 0,
    "explanation": "d(P dx + Q dy) = (Q_x − P_y) dx∧dy. Here P = −4y, Q = x, so Q_x − P_y = 1 − (-4) = 5."
  },
  {
    "id": "mv-df-055",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Compute dω for ω = −3y dx − 2x dy.",
    "options": [
      "−5 dx∧dy",
      "−4 dx∧dy",
      "dx∧dy",
      "−dx∧dy"
    ],
    "correctAnswer": 2,
    "explanation": "d(P dx + Q dy) = (Q_x − P_y) dx∧dy. Here P = −3y, Q = −2x, so Q_x − P_y = -2 − (-3) = 1."
  },
  {
    "id": "mv-df-056",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Compute dη for η = x dy∧dz + y dz∧dx + z dx∧dy.",
    "options": [
      "−3 dx∧dy∧dz",
      "4 dx∧dy∧dz",
      "0",
      "3 dx∧dy∧dz"
    ],
    "correctAnswer": 3,
    "explanation": "Only the matching variable survives in each term, and cyclic reorderings of dx∧dy∧dz are even: dη = (1 + 1 + 1) dx∧dy∧dz. This is the divergence of ⟨1x, 1y, 1z⟩."
  },
  {
    "id": "mv-df-057",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Compute dη for η = 2x dy∧dz + y dz∧dx + 3z dx∧dy.",
    "options": [
      "−6 dx∧dy∧dz",
      "0",
      "6 dx∧dy∧dz",
      "7 dx∧dy∧dz"
    ],
    "correctAnswer": 2,
    "explanation": "Only the matching variable survives in each term, and cyclic reorderings of dx∧dy∧dz are even: dη = (2 + 1 + 3) dx∧dy∧dz. This is the divergence of ⟨2x, 1y, 3z⟩."
  },
  {
    "id": "mv-df-058",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Compute dη for η = x dy∧dz − 2y dz∧dx + 4z dx∧dy.",
    "options": [
      "−3 dx∧dy∧dz",
      "0",
      "3 dx∧dy∧dz",
      "4 dx∧dy∧dz"
    ],
    "correctAnswer": 2,
    "explanation": "Only the matching variable survives in each term, and cyclic reorderings of dx∧dy∧dz are even: dη = (1 + -2 + 4) dx∧dy∧dz. This is the divergence of ⟨1x, -2y, 4z⟩."
  },
  {
    "id": "mv-df-059",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Compute dη for η = 3x dy∧dz + 3y dz∧dx − z dx∧dy.",
    "options": [
      "5 dx∧dy∧dz",
      "−5 dx∧dy∧dz",
      "6 dx∧dy∧dz",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "Only the matching variable survives in each term, and cyclic reorderings of dx∧dy∧dz are even: dη = (3 + 3 + -1) dx∧dy∧dz. This is the divergence of ⟨3x, 3y, -1z⟩."
  },
  {
    "id": "mv-df-060",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Compute dη for η = 5x dy∧dz + 2z dx∧dy.",
    "options": [
      "8 dx∧dy∧dz",
      "−7 dx∧dy∧dz",
      "0",
      "7 dx∧dy∧dz"
    ],
    "correctAnswer": 3,
    "explanation": "Only the matching variable survives in each term, and cyclic reorderings of dx∧dy∧dz are even: dη = (5 + 0 + 2) dx∧dy∧dz. This is the divergence of ⟨5x, 0y, 2z⟩."
  },
  {
    "id": "mv-df-061",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Let ω = z dx + 2x dy + 3y dz. Writing dω = A dy∧dz + B dz∧dx + C dx∧dy, what is ⟨A, B, C⟩?",
    "options": [
      "⟨3, 1, 2⟩",
      "⟨2, 3, 1⟩",
      "⟨−3, −1, −2⟩",
      "⟨1, 2, 3⟩"
    ],
    "correctAnswer": 0,
    "explanation": "⟨A, B, C⟩ = ⟨R_y − Q_z, P_z − R_x, Q_x − P_y⟩ with P = 1z, Q = 2x, R = 3y, giving ⟨3, 1, 2⟩: the curl of ⟨P, Q, R⟩."
  },
  {
    "id": "mv-df-062",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Let ω = 2z dx + 5x dy + y dz. Writing dω = A dy∧dz + B dz∧dx + C dx∧dy, what is ⟨A, B, C⟩?",
    "options": [
      "⟨5, 1, 2⟩",
      "⟨1, 2, 5⟩",
      "⟨−1, −2, −5⟩",
      "⟨2, 5, 1⟩"
    ],
    "correctAnswer": 1,
    "explanation": "⟨A, B, C⟩ = ⟨R_y − Q_z, P_z − R_x, Q_x − P_y⟩ with P = 2z, Q = 5x, R = 1y, giving ⟨1, 2, 5⟩: the curl of ⟨P, Q, R⟩."
  },
  {
    "id": "mv-df-063",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Let ω = 4z dx + x dy + 3y dz. Writing dω = A dy∧dz + B dz∧dx + C dx∧dy, what is ⟨A, B, C⟩?",
    "options": [
      "⟨3, 4, 1⟩",
      "⟨1, 3, 4⟩",
      "⟨4, 1, 3⟩",
      "⟨−3, −4, −1⟩"
    ],
    "correctAnswer": 0,
    "explanation": "⟨A, B, C⟩ = ⟨R_y − Q_z, P_z − R_x, Q_x − P_y⟩ with P = 4z, Q = 1x, R = 3y, giving ⟨3, 4, 1⟩: the curl of ⟨P, Q, R⟩."
  },
  {
    "id": "mv-df-064",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Let ω = 3z dx + 2x dy + 5y dz. Writing dω = A dy∧dz + B dz∧dx + C dx∧dy, what is ⟨A, B, C⟩?",
    "options": [
      "⟨2, 5, 3⟩",
      "⟨−5, −3, −2⟩",
      "⟨3, 2, 5⟩",
      "⟨5, 3, 2⟩"
    ],
    "correctAnswer": 3,
    "explanation": "⟨A, B, C⟩ = ⟨R_y − Q_z, P_z − R_x, Q_x − P_y⟩ with P = 3z, Q = 2x, R = 5y, giving ⟨5, 3, 2⟩: the curl of ⟨P, Q, R⟩."
  },
  {
    "id": "mv-df-065",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Let ω = z dx + 4x dy + 2y dz. Writing dω = A dy∧dz + B dz∧dx + C dx∧dy, what is ⟨A, B, C⟩?",
    "options": [
      "⟨1, 4, 2⟩",
      "⟨2, 1, 4⟩",
      "⟨4, 2, 1⟩",
      "⟨−2, −1, −4⟩"
    ],
    "correctAnswer": 1,
    "explanation": "⟨A, B, C⟩ = ⟨R_y − Q_z, P_z − R_x, Q_x − P_y⟩ with P = 1z, Q = 4x, R = 2y, giving ⟨2, 1, 4⟩: the curl of ⟨P, Q, R⟩."
  },
  {
    "id": "mv-df-066",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Evaluate dy∧dz on u = ⟨1, 2, 0⟩ and v = ⟨3, 1, 5⟩.",
    "options": [
      "−10",
      "10",
      "11",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "(dy∧dz)(u, v) = u_yv_z − u_zv_y = 2·5 − 0·1 = 10: a component of u × v."
  },
  {
    "id": "mv-df-067",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Evaluate dx∧dy on u = ⟨2, 1, 3⟩ and v = ⟨0, 4, 1⟩.",
    "options": [
      "−8",
      "9",
      "8",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "(dx∧dy)(u, v) = u_xv_y − u_yv_x = 2·4 − 1·0 = 8: a component of u × v."
  },
  {
    "id": "mv-df-068",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Evaluate dz∧dx on u = ⟨1, 0, 2⟩ and v = ⟨3, 1, 1⟩.",
    "options": [
      "6",
      "5",
      "−5",
      "7"
    ],
    "correctAnswer": 1,
    "explanation": "(dz∧dx)(u, v) = u_zv_x − u_xv_z = 2·3 − 1·1 = 5: a component of u × v."
  },
  {
    "id": "mv-df-069",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Evaluate dy∧dz on u = ⟨2, 3, 1⟩ and v = ⟨1, 1, 4⟩.",
    "options": [
      "13",
      "11",
      "−11",
      "9"
    ],
    "correctAnswer": 1,
    "explanation": "(dy∧dz)(u, v) = u_yv_z − u_zv_y = 3·4 − 1·1 = 11: a component of u × v."
  },
  {
    "id": "mv-df-070",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "Evaluate dz∧dx on u = ⟨4, 1, 2⟩ and v = ⟨1, 2, 3⟩.",
    "options": [
      "12",
      "−10",
      "10",
      "14"
    ],
    "correctAnswer": 1,
    "explanation": "(dz∧dx)(u, v) = u_zv_x − u_xv_z = 2·1 − 4·3 = -10: a component of u × v."
  },
  {
    "id": "mv-df-071",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "If α is a 1-form and β is a 1-form, how are α∧β and β∧α related?",
    "options": [
      "α∧β = −β∧α",
      "α∧β = 0 always",
      "α∧β = β∧α",
      "There is no general relation"
    ],
    "correctAnswer": 0,
    "explanation": "Graded commutativity: α∧β = (−1)^(kl) β∧α, and kl = 1 is odd."
  },
  {
    "id": "mv-df-072",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "If α is a 1-form and β is a 2-form, how are α∧β and β∧α related?",
    "options": [
      "There is no general relation",
      "α∧β = β∧α",
      "α∧β = 0 always",
      "α∧β = −β∧α"
    ],
    "correctAnswer": 1,
    "explanation": "Graded commutativity: α∧β = (−1)^(kl) β∧α, and kl = 2 is even."
  },
  {
    "id": "mv-df-073",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "If α is a 2-form and β is a 2-form, how are α∧β and β∧α related?",
    "options": [
      "α∧β = −β∧α",
      "α∧β = 0 always",
      "α∧β = β∧α",
      "There is no general relation"
    ],
    "correctAnswer": 2,
    "explanation": "Graded commutativity: α∧β = (−1)^(kl) β∧α, and kl = 4 is even."
  },
  {
    "id": "mv-df-074",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "If α is a 1-form and β is a 3-form, how are α∧β and β∧α related?",
    "options": [
      "α∧β = β∧α",
      "α∧β = 0 always",
      "There is no general relation",
      "α∧β = −β∧α"
    ],
    "correctAnswer": 3,
    "explanation": "Graded commutativity: α∧β = (−1)^(kl) β∧α, and kl = 3 is odd."
  },
  {
    "id": "mv-df-075",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Medium",
    "question": "If α is a 3-form and β is a 3-form, how are α∧β and β∧α related?",
    "options": [
      "α∧β = β∧α",
      "α∧β = −β∧α",
      "α∧β = 0 always",
      "There is no general relation"
    ],
    "correctAnswer": 1,
    "explanation": "Graded commutativity: α∧β = (−1)^(kl) β∧α, and kl = 9 is odd."
  },
  {
    "id": "mv-df-076",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∮ (−y dx + x dy) around the circle of radius 1, counterclockwise.",
    "options": [
      "2π",
      "π",
      "4π",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "d(−1y dx + 1x dy) = (1 + 1) dx∧dy, so the integral is 2·π·1² = 2π."
  },
  {
    "id": "mv-df-077",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∮ (−y dx + x dy) around the circle of radius 2, counterclockwise.",
    "options": [
      "8π",
      "4π",
      "0",
      "16π"
    ],
    "correctAnswer": 0,
    "explanation": "d(−1y dx + 1x dy) = (1 + 1) dx∧dy, so the integral is 2·π·2² = 8π."
  },
  {
    "id": "mv-df-078",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∮ (−2y dx + 3x dy) around the circle of radius 1, counterclockwise.",
    "options": [
      "5π",
      "π",
      "0",
      "10π"
    ],
    "correctAnswer": 0,
    "explanation": "d(−2y dx + 3x dy) = (3 + 2) dx∧dy, so the integral is 5·π·1² = 5π."
  },
  {
    "id": "mv-df-079",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∮ (−y dx + 2x dy) around the circle of radius 3, counterclockwise.",
    "options": [
      "54π",
      "0",
      "9π",
      "27π"
    ],
    "correctAnswer": 3,
    "explanation": "d(−1y dx + 2x dy) = (2 + 1) dx∧dy, so the integral is 3·π·3² = 27π."
  },
  {
    "id": "mv-df-080",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∮ (−3y dx + x dy) around the circle of radius 2, counterclockwise.",
    "options": [
      "32π",
      "0",
      "16π",
      "8π"
    ],
    "correctAnswer": 2,
    "explanation": "d(−3y dx + 1x dy) = (1 + 3) dx∧dy, so the integral is 4·π·2² = 16π."
  },
  {
    "id": "mv-df-081",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Use A = ½∮(x dy − y dx) to find the area inside the ellipse x = 3cos t, y = 2sin t.",
    "options": [
      "3π",
      "6π",
      "5π",
      "12π"
    ],
    "correctAnswer": 1,
    "explanation": "x dy − y dx = (3·2cos²t + 3·2sin²t) dt = 6 dt, so A = ½·2π·6 = 6π."
  },
  {
    "id": "mv-df-082",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Use A = ½∮(x dy − y dx) to find the area inside the ellipse x = 5cos t, y = 1sin t.",
    "options": [
      "10π",
      "5π",
      "5π/2",
      "6π"
    ],
    "correctAnswer": 1,
    "explanation": "x dy − y dx = (5·1cos²t + 5·1sin²t) dt = 5 dt, so A = ½·2π·5 = 5π."
  },
  {
    "id": "mv-df-083",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Use A = ½∮(x dy − y dx) to find the area inside the ellipse x = 4cos t, y = 3sin t.",
    "options": [
      "6π",
      "7π",
      "24π",
      "12π"
    ],
    "correctAnswer": 3,
    "explanation": "x dy − y dx = (4·3cos²t + 4·3sin²t) dt = 12 dt, so A = ½·2π·12 = 12π."
  },
  {
    "id": "mv-df-084",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Use A = ½∮(x dy − y dx) to find the area inside the ellipse x = 2cos t, y = 5sin t.",
    "options": [
      "7π",
      "5π",
      "10π",
      "20π"
    ],
    "correctAnswer": 2,
    "explanation": "x dy − y dx = (2·5cos²t + 2·5sin²t) dt = 10 dt, so A = ½·2π·10 = 10π."
  },
  {
    "id": "mv-df-085",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Use A = ½∮(x dy − y dx) to find the area inside the ellipse x = 6cos t, y = 1sin t.",
    "options": [
      "6π",
      "3π",
      "7π",
      "12π"
    ],
    "correctAnswer": 0,
    "explanation": "x dy − y dx = (6·1cos²t + 6·1sin²t) dt = 6 dt, so A = ½·2π·6 = 6π."
  },
  {
    "id": "mv-df-086",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∯ η over the sphere of radius 1 (outward), where η = x dy∧dz + y dz∧dx + z dx∧dy.",
    "options": [
      "4π/3",
      "8π",
      "12π",
      "4π"
    ],
    "correctAnswer": 3,
    "explanation": "dη = 3 dx∧dy∧dz, so by the Divergence Theorem the integral is 3·(4/3)π·1³ = 4π."
  },
  {
    "id": "mv-df-087",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∯ η over the sphere of radius 2 (outward), where η = x dy∧dz + y dz∧dx + z dx∧dy.",
    "options": [
      "32π",
      "32π/3",
      "16π",
      "48π"
    ],
    "correctAnswer": 0,
    "explanation": "dη = 3 dx∧dy∧dz, so by the Divergence Theorem the integral is 3·(4/3)π·2³ = 32π."
  },
  {
    "id": "mv-df-088",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∯ η over the sphere of radius 1 (outward), where η = 2x dy∧dz + y dz∧dx.",
    "options": [
      "8π",
      "4π/3",
      "12π",
      "4π"
    ],
    "correctAnswer": 3,
    "explanation": "dη = 3 dx∧dy∧dz, so by the Divergence Theorem the integral is 3·(4/3)π·1³ = 4π."
  },
  {
    "id": "mv-df-089",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∯ η over the sphere of radius 1 (outward), where η = x dy∧dz + 2y dz∧dx + 3z dx∧dy.",
    "options": [
      "16π",
      "24π",
      "4π/3",
      "8π"
    ],
    "correctAnswer": 3,
    "explanation": "dη = 6 dx∧dy∧dz, so by the Divergence Theorem the integral is 6·(4/3)π·1³ = 8π."
  },
  {
    "id": "mv-df-090",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∯ η over the sphere of radius 3 (outward), where η = x dy∧dz.",
    "options": [
      "0",
      "36π",
      "72π",
      "12π"
    ],
    "correctAnswer": 1,
    "explanation": "dη = 1 dx∧dy∧dz, so by the Divergence Theorem the integral is 1·(4/3)π·3³ = 36π."
  },
  {
    "id": "mv-df-091",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∯ x² dy∧dz over the boundary of the cube [0, 1]³ with outward orientation.",
    "options": [
      "2",
      "0",
      "4",
      "1"
    ],
    "correctAnswer": 3,
    "explanation": "d(x² dy∧dz) = 2x dV, and ∭ 2x dV over [0, 1]³ = 1² · 1² = 1. Directly, only the face x = 1 contributes: 1² × area 1."
  },
  {
    "id": "mv-df-092",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∯ x² dy∧dz over the boundary of the cube [0, 2]³ with outward orientation.",
    "options": [
      "8",
      "0",
      "16",
      "32"
    ],
    "correctAnswer": 2,
    "explanation": "d(x² dy∧dz) = 2x dV, and ∭ 2x dV over [0, 2]³ = 2² · 2² = 16. Directly, only the face x = 2 contributes: 2² × area 4."
  },
  {
    "id": "mv-df-093",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∯ x³ dy∧dz over the boundary of the cube [0, 1]³ with outward orientation.",
    "options": [
      "2",
      "3",
      "1",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "d(x³ dy∧dz) = 3x² dV, and ∭ 3x² dV over [0, 1]³ = 1³ · 1² = 1. Directly, only the face x = 1 contributes: 1³ × area 1."
  },
  {
    "id": "mv-df-094",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∯ x³ dy∧dz over the boundary of the cube [0, 2]³ with outward orientation.",
    "options": [
      "32",
      "0",
      "96",
      "16"
    ],
    "correctAnswer": 0,
    "explanation": "d(x³ dy∧dz) = 3x² dV, and ∭ 3x² dV over [0, 2]³ = 2³ · 2² = 32. Directly, only the face x = 2 contributes: 2³ × area 4."
  },
  {
    "id": "mv-df-095",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "Evaluate ∯ x² dy∧dz over the boundary of the cube [0, 3]³ with outward orientation.",
    "options": [
      "81",
      "27",
      "0",
      "162"
    ],
    "correctAnswer": 0,
    "explanation": "d(x² dy∧dz) = 2x dV, and ∭ 2x dV over [0, 3]³ = 3² · 3² = 81. Directly, only the face x = 3 contributes: 3² × area 9."
  },
  {
    "id": "mv-df-096",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "For ω = xy dy on the unit square [0, 1]², evaluate ∬ dω.",
    "options": [
      "1/3",
      "0",
      "1",
      "1/2"
    ],
    "correctAnswer": 3,
    "explanation": "dω = y dx∧dy, and ∫₀¹∫₀¹ of it is 1·1/2. On the boundary only the edge x = 1 contributes ∫₀¹ y dy = 1/2."
  },
  {
    "id": "mv-df-097",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "For ω = x²y dy on the unit square [0, 1]², evaluate ∬ dω.",
    "options": [
      "1",
      "1/4",
      "1/2",
      "1/3"
    ],
    "correctAnswer": 2,
    "explanation": "dω = 2xy dx∧dy, and ∫₀¹∫₀¹ of it is 1·1/2. On the boundary only the edge x = 1 contributes ∫₀¹ y dy = 1/2."
  },
  {
    "id": "mv-df-098",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "For ω = xy² dy on the unit square [0, 1]², evaluate ∬ dω.",
    "options": [
      "0",
      "1",
      "1/3",
      "1/4"
    ],
    "correctAnswer": 2,
    "explanation": "dω = y² dx∧dy, and ∫₀¹∫₀¹ of it is 1·1/3. On the boundary only the edge x = 1 contributes ∫₀¹ y² dy = 1/3."
  },
  {
    "id": "mv-df-099",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "For ω = x³y² dy on the unit square [0, 1]², evaluate ∬ dω.",
    "options": [
      "1",
      "1/3",
      "1/5",
      "1/4"
    ],
    "correctAnswer": 1,
    "explanation": "dω = 3x²y² dx∧dy, and ∫₀¹∫₀¹ of it is 1·1/3. On the boundary only the edge x = 1 contributes ∫₀¹ y² dy = 1/3."
  },
  {
    "id": "mv-df-100",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Medium",
    "question": "For ω = x²y³ dy on the unit square [0, 1]², evaluate ∬ dω.",
    "options": [
      "1/6",
      "1/5",
      "1/2",
      "1/4"
    ],
    "correctAnswer": 3,
    "explanation": "dω = 2xy³ dx∧dy, and ∫₀¹∫₀¹ of it is 1·1/4. On the boundary only the edge x = 1 contributes ∫₀¹ y³ dy = 1/4."
  },
  {
    "id": "mv-df-101",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Find f with df = (2xy + z) dx + x² dy + x dz.",
    "options": [
      "f = x²y + z",
      "f = xy² + xz",
      "f = 2xy + xz",
      "f = x²y + xz"
    ],
    "correctAnswer": 3,
    "explanation": "Integrate f_x = 2xy + z to get x²y + xz + g(y, z); then f_y = 1x² and f_z = x force g to be constant."
  },
  {
    "id": "mv-df-102",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Find f with df = (4xy + z) dx + 2x² dy + x dz.",
    "options": [
      "f = 2x²y + xz",
      "f = 2x²y + z",
      "f = 4xy + xz",
      "f = 2xy² + xz"
    ],
    "correctAnswer": 0,
    "explanation": "Integrate f_x = 4xy + z to get 2x²y + xz + g(y, z); then f_y = 2x² and f_z = x force g to be constant."
  },
  {
    "id": "mv-df-103",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Find f with df = (6xy + z) dx + 3x² dy + x dz.",
    "options": [
      "f = 3xy² + xz",
      "f = 3x²y + z",
      "f = 6xy + xz",
      "f = 3x²y + xz"
    ],
    "correctAnswer": 3,
    "explanation": "Integrate f_x = 6xy + z to get 3x²y + xz + g(y, z); then f_y = 3x² and f_z = x force g to be constant."
  },
  {
    "id": "mv-df-104",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Find f with df = (−2xy + z) dx − x² dy + x dz.",
    "options": [
      "f = −x²y + z",
      "f = −xy² + xz",
      "f = −x²y + xz",
      "f = −2xy + xz"
    ],
    "correctAnswer": 2,
    "explanation": "Integrate f_x = -2xy + z to get −x²y + xz + g(y, z); then f_y = -1x² and f_z = x force g to be constant."
  },
  {
    "id": "mv-df-105",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Find f with df = (8xy + z) dx + 4x² dy + x dz.",
    "options": [
      "f = 4x²y + z",
      "f = 8xy + xz",
      "f = 4x²y + xz",
      "f = 4xy² + xz"
    ],
    "correctAnswer": 2,
    "explanation": "Integrate f_x = 8xy + z to get 4x²y + xz + g(y, z); then f_y = 4x² and f_z = x force g to be constant."
  },
  {
    "id": "mv-df-106",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Under x = u + 2v, y = 3u + 4v, the pullback of dx∧dy is:",
    "options": [
      "−2 du∧dv",
      "10 du∧dv",
      "2 du∧dv",
      "−5 du∧dv"
    ],
    "correctAnswer": 0,
    "explanation": "dx = 1du + 2dv and dy = 3du + 4dv, so dx∧dy = (1·4 − 2·3) du∧dv = -2 du∧dv: the Jacobian determinant."
  },
  {
    "id": "mv-df-107",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Under x = 2u + v, y = u + 3v, the pullback of dx∧dy is:",
    "options": [
      "7 du∧dv",
      "−5 du∧dv",
      "−du∧dv",
      "5 du∧dv"
    ],
    "correctAnswer": 3,
    "explanation": "dx = 2du + 1dv and dy = 1du + 3dv, so dx∧dy = (2·3 − 1·1) du∧dv = 5 du∧dv: the Jacobian determinant."
  },
  {
    "id": "mv-df-108",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Under x = 3u − v, y = 2u + v, the pullback of dx∧dy is:",
    "options": [
      "du∧dv",
      "7 du∧dv",
      "−5 du∧dv",
      "5 du∧dv"
    ],
    "correctAnswer": 3,
    "explanation": "dx = 3du + -1dv and dy = 2du + 1dv, so dx∧dy = (3·1 − -1·2) du∧dv = 5 du∧dv: the Jacobian determinant."
  },
  {
    "id": "mv-df-109",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Under x = u + v, y = −u + 2v, the pullback of dx∧dy is:",
    "options": [
      "6 du∧dv",
      "−3 du∧dv",
      "du∧dv",
      "3 du∧dv"
    ],
    "correctAnswer": 3,
    "explanation": "dx = 1du + 1dv and dy = -1du + 2dv, so dx∧dy = (1·2 − 1·-1) du∧dv = 3 du∧dv: the Jacobian determinant."
  },
  {
    "id": "mv-df-110",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Under x = 2u + 3v, y = u + 4v, the pullback of dx∧dy is:",
    "options": [
      "−10 du∧dv",
      "5 du∧dv",
      "11 du∧dv",
      "−5 du∧dv"
    ],
    "correctAnswer": 1,
    "explanation": "dx = 2du + 3dv and dy = 1du + 4dv, so dx∧dy = (2·4 − 3·1) du∧dv = 5 du∧dv: the Jacobian determinant."
  },
  {
    "id": "mv-df-111",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Evaluate ∮ (x dy − y dx) around the circle of radius 1 centred at the origin, counterclockwise.",
    "options": [
      "−2π",
      "0",
      "π",
      "2π"
    ],
    "correctAnswer": 3,
    "explanation": "With x = 1cos t, y = 1sin t the integrand is 1 dt, so the integral is 2π·1 = 2π."
  },
  {
    "id": "mv-df-112",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Evaluate ∮ (x dy − y dx) around the circle of radius 2 centred at the origin, counterclockwise.",
    "options": [
      "8π",
      "0",
      "−8π",
      "4π"
    ],
    "correctAnswer": 0,
    "explanation": "With x = 2cos t, y = 2sin t the integrand is 4 dt, so the integral is 2π·4 = 8π."
  },
  {
    "id": "mv-df-113",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Evaluate ∮ (x dy − y dx) around the circle of radius 3 centred at the origin, counterclockwise.",
    "options": [
      "18π",
      "−18π",
      "9π",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "With x = 3cos t, y = 3sin t the integrand is 9 dt, so the integral is 2π·9 = 18π."
  },
  {
    "id": "mv-df-114",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Evaluate ∮ (x dy − y dx) around the circle of radius 5 centred at the origin, counterclockwise.",
    "options": [
      "−50π",
      "0",
      "25π",
      "50π"
    ],
    "correctAnswer": 3,
    "explanation": "With x = 5cos t, y = 5sin t the integrand is 25 dt, so the integral is 2π·25 = 50π."
  },
  {
    "id": "mv-df-115",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Evaluate ∮ (x dy − y dx) around the circle of radius 0.5 centred at the origin, counterclockwise.",
    "options": [
      "π/2",
      "π/4",
      "0",
      "−π/2"
    ],
    "correctAnswer": 0,
    "explanation": "With x = 0.5cos t, y = 0.5sin t the integrand is 0.25 dt, so the integral is 2π·0.25 = π/2."
  },
  {
    "id": "mv-df-116",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Let f = x² and α = y dz. Compute d(fα).",
    "options": [
      "2xy dx∧dz + x² dy∧dz",
      "2xy dx∧dz",
      "2xy dx∧dz − x² dy∧dz",
      "x² dy∧dz"
    ],
    "correctAnswer": 0,
    "explanation": "Leibniz rule for a 0-form f: d(fα) = df∧α + f dα = 2x dx∧y dz + x² dy∧dz."
  },
  {
    "id": "mv-df-117",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Let f = x³ and α = y dz. Compute d(fα).",
    "options": [
      "3x²y dx∧dz + x³ dy∧dz",
      "3x²y dx∧dz",
      "x³ dy∧dz",
      "3x²y dx∧dz − x³ dy∧dz"
    ],
    "correctAnswer": 0,
    "explanation": "Leibniz rule for a 0-form f: d(fα) = df∧α + f dα = 3x² dx∧y dz + x³ dy∧dz."
  },
  {
    "id": "mv-df-118",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Let f = x⁴ and α = y dz. Compute d(fα).",
    "options": [
      "4x³y dx∧dz",
      "4x³y dx∧dz + x⁴ dy∧dz",
      "4x³y dx∧dz − x⁴ dy∧dz",
      "x⁴ dy∧dz"
    ],
    "correctAnswer": 1,
    "explanation": "Leibniz rule for a 0-form f: d(fα) = df∧α + f dα = 4x³ dx∧y dz + x⁴ dy∧dz."
  },
  {
    "id": "mv-df-119",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Let f = x⁵ and α = y dz. Compute d(fα).",
    "options": [
      "x⁵ dy∧dz",
      "5x⁴y dx∧dz − x⁵ dy∧dz",
      "5x⁴y dx∧dz + x⁵ dy∧dz",
      "5x⁴y dx∧dz"
    ],
    "correctAnswer": 2,
    "explanation": "Leibniz rule for a 0-form f: d(fα) = df∧α + f dα = 5x⁴ dx∧y dz + x⁵ dy∧dz."
  },
  {
    "id": "mv-df-120",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Let f = x⁶ and α = y dz. Compute d(fα).",
    "options": [
      "6x⁵y dx∧dz − x⁶ dy∧dz",
      "6x⁵y dx∧dz + x⁶ dy∧dz",
      "x⁶ dy∧dz",
      "6x⁵y dx∧dz"
    ],
    "correctAnswer": 1,
    "explanation": "Leibniz rule for a 0-form f: d(fα) = df∧α + f dα = 6x⁵ dx∧y dz + x⁶ dy∧dz."
  },
  {
    "id": "mv-df-121",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Evaluate ∬ z dx∧dy over the graph z = x² + y² above the unit square 0 ≤ x, y ≤ 1, oriented upward.",
    "options": [
      "2/3",
      "2",
      "1/3",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Parametrize by (x, y): the pullback of dx∧dy is dx∧dy, so the integral is ∫₀¹∫₀¹ (x² + y²) dx dy = 1/3 + 1/3 = 2/3."
  },
  {
    "id": "mv-df-122",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Evaluate ∬ z dx∧dy over the graph z = 2x² + y² above the unit square 0 ≤ x, y ≤ 1, oriented upward.",
    "options": [
      "3/2",
      "1",
      "3",
      "1/2"
    ],
    "correctAnswer": 1,
    "explanation": "Parametrize by (x, y): the pullback of dx∧dy is dx∧dy, so the integral is ∫₀¹∫₀¹ (2x² + y²) dx dy = 2/3 + 1/3 = 1."
  },
  {
    "id": "mv-df-123",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Evaluate ∬ z dx∧dy over the graph z = 3x² + 3y² above the unit square 0 ≤ x, y ≤ 1, oriented upward.",
    "options": [
      "6",
      "3",
      "2",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "Parametrize by (x, y): the pullback of dx∧dy is dx∧dy, so the integral is ∫₀¹∫₀¹ (3x² + 3y²) dx dy = 3/3 + 3/3 = 2."
  },
  {
    "id": "mv-df-124",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Evaluate ∬ z dx∧dy over the graph z = x² + 4y² above the unit square 0 ≤ x, y ≤ 1, oriented upward.",
    "options": [
      "5/6",
      "5",
      "5/3",
      "5/2"
    ],
    "correctAnswer": 2,
    "explanation": "Parametrize by (x, y): the pullback of dx∧dy is dx∧dy, so the integral is ∫₀¹∫₀¹ (x² + 4y²) dx dy = 1/3 + 4/3 = 5/3."
  },
  {
    "id": "mv-df-125",
    "module": "Differential Forms",
    "topic": "Differential Forms & the Exterior Derivative",
    "difficulty": "Hard",
    "question": "Evaluate ∬ z dx∧dy over the graph z = 2x² + 5y² above the unit square 0 ≤ x, y ≤ 1, oriented upward.",
    "options": [
      "7/6",
      "7/3",
      "7",
      "7/2"
    ],
    "correctAnswer": 1,
    "explanation": "Parametrize by (x, y): the pullback of dx∧dy is dx∧dy, so the integral is ∫₀¹∫₀¹ (2x² + 5y²) dx dy = 2/3 + 5/3 = 7/3."
  },
  {
    "id": "mv-df-126",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "On the annulus 1 ≤ r ≤ 2 with its induced boundary orientation, evaluate ∮_∂D (−y dx + x dy).",
    "options": [
      "0",
      "6π",
      "8π",
      "10π"
    ],
    "correctAnswer": 1,
    "explanation": "∬_D 2 dA = 2π(2² − 1²) = 6π. Directly: the outer circle gives 2π·4, the clockwise inner circle gives −2π·1."
  },
  {
    "id": "mv-df-127",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "On the annulus 1 ≤ r ≤ 3 with its induced boundary orientation, evaluate ∮_∂D (−y dx + x dy).",
    "options": [
      "0",
      "18π",
      "16π",
      "20π"
    ],
    "correctAnswer": 2,
    "explanation": "∬_D 2 dA = 2π(3² − 1²) = 16π. Directly: the outer circle gives 2π·9, the clockwise inner circle gives −2π·1."
  },
  {
    "id": "mv-df-128",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "On the annulus 2 ≤ r ≤ 3 with its induced boundary orientation, evaluate ∮_∂D (−y dx + x dy).",
    "options": [
      "26π",
      "18π",
      "10π",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "∬_D 2 dA = 2π(3² − 2²) = 10π. Directly: the outer circle gives 2π·9, the clockwise inner circle gives −2π·4."
  },
  {
    "id": "mv-df-129",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "On the annulus 1 ≤ r ≤ 4 with its induced boundary orientation, evaluate ∮_∂D (−y dx + x dy).",
    "options": [
      "32π",
      "30π",
      "34π",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "∬_D 2 dA = 2π(4² − 1²) = 30π. Directly: the outer circle gives 2π·16, the clockwise inner circle gives −2π·1."
  },
  {
    "id": "mv-df-130",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "On the annulus 2 ≤ r ≤ 5 with its induced boundary orientation, evaluate ∮_∂D (−y dx + x dy).",
    "options": [
      "42π",
      "50π",
      "0",
      "58π"
    ],
    "correctAnswer": 0,
    "explanation": "∬_D 2 dA = 2π(5² − 2²) = 42π. Directly: the outer circle gives 2π·25, the clockwise inner circle gives −2π·4."
  },
  {
    "id": "mv-df-131",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "Let S be the upper hemisphere of radius 1 with upward normal and ω = −y dx + x dy + z dz. Evaluate ∬_S dω.",
    "options": [
      "4π/3",
      "4π",
      "0",
      "2π"
    ],
    "correctAnswer": 3,
    "explanation": "By Stokes, ∬_S dω = ∮ over the counterclockwise circle of radius 1 in z = 0, where dz = 0: (1 + 1)·π·1² = 2π."
  },
  {
    "id": "mv-df-132",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "Let S be the upper hemisphere of radius 2 with upward normal and ω = −y dx + x dy + z dz. Evaluate ∬_S dω.",
    "options": [
      "0",
      "16π",
      "8π",
      "16π/3"
    ],
    "correctAnswer": 2,
    "explanation": "By Stokes, ∬_S dω = ∮ over the counterclockwise circle of radius 2 in z = 0, where dz = 0: (1 + 1)·π·2² = 8π."
  },
  {
    "id": "mv-df-133",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "Let S be the upper hemisphere of radius 1 with upward normal and ω = −2y dx + x dy + z dz. Evaluate ∬_S dω.",
    "options": [
      "6π",
      "3π",
      "0",
      "2π"
    ],
    "correctAnswer": 1,
    "explanation": "By Stokes, ∬_S dω = ∮ over the counterclockwise circle of radius 1 in z = 0, where dz = 0: (2 + 1)·π·1² = 3π."
  },
  {
    "id": "mv-df-134",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "Let S be the upper hemisphere of radius 2 with upward normal and ω = −y dx + 3x dy + z dz. Evaluate ∬_S dω.",
    "options": [
      "0",
      "16π",
      "32π",
      "32π/3"
    ],
    "correctAnswer": 1,
    "explanation": "By Stokes, ∬_S dω = ∮ over the counterclockwise circle of radius 2 in z = 0, where dz = 0: (1 + 3)·π·2² = 16π."
  },
  {
    "id": "mv-df-135",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "Let S be the upper hemisphere of radius 3 with upward normal and ω = −2y dx + 2x dy + z dz. Evaluate ∬_S dω.",
    "options": [
      "24π",
      "36π",
      "0",
      "72π"
    ],
    "correctAnswer": 1,
    "explanation": "By Stokes, ∬_S dω = ∮ over the counterclockwise circle of radius 3 in z = 0, where dz = 0: (2 + 2)·π·3² = 36π."
  },
  {
    "id": "mv-df-136",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "For the closed form ω = (−y dx + x dy)/(x² + y²) on ℝ² minus the origin, evaluate ∮ω along a curve going once counterclockwise around the origin.",
    "options": [
      "4π",
      "π",
      "2π",
      "−2π"
    ],
    "correctAnswer": 2,
    "explanation": "Each counterclockwise loop around the origin contributes 2π (the winding number times 2π). A loop not enclosing the origin bounds a disk in the domain, so the integral is 0."
  },
  {
    "id": "mv-df-137",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "For the closed form ω = (−y dx + x dy)/(x² + y²) on ℝ² minus the origin, evaluate ∮ω along a curve going twice counterclockwise around the origin.",
    "options": [
      "4π",
      "−4π",
      "2π",
      "6π"
    ],
    "correctAnswer": 0,
    "explanation": "Each counterclockwise loop around the origin contributes 2π (the winding number times 2π). A loop not enclosing the origin bounds a disk in the domain, so the integral is 0."
  },
  {
    "id": "mv-df-138",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "For the closed form ω = (−y dx + x dy)/(x² + y²) on ℝ² minus the origin, evaluate ∮ω along a curve going three times counterclockwise around the origin.",
    "options": [
      "6π",
      "8π",
      "−6π",
      "3π"
    ],
    "correctAnswer": 0,
    "explanation": "Each counterclockwise loop around the origin contributes 2π (the winding number times 2π). A loop not enclosing the origin bounds a disk in the domain, so the integral is 0."
  },
  {
    "id": "mv-df-139",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "For the closed form ω = (−y dx + x dy)/(x² + y²) on ℝ² minus the origin, evaluate ∮ω along a curve going once clockwise around the origin.",
    "options": [
      "2π",
      "−π",
      "0",
      "−2π"
    ],
    "correctAnswer": 3,
    "explanation": "Each counterclockwise loop around the origin contributes 2π (the winding number times 2π). A loop not enclosing the origin bounds a disk in the domain, so the integral is 0."
  },
  {
    "id": "mv-df-140",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "For the closed form ω = (−y dx + x dy)/(x² + y²) on ℝ² minus the origin, evaluate ∮ω along a curve going once counterclockwise around a circle centred at (5, 0) of radius 1 (not enclosing the origin).",
    "options": [
      "0",
      "4π",
      "π",
      "2π"
    ],
    "correctAnswer": 0,
    "explanation": "Each counterclockwise loop around the origin contributes 2π (the winding number times 2π). A loop not enclosing the origin bounds a disk in the domain, so the integral is 0."
  },
  {
    "id": "mv-df-141",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "Evaluate ∯ (x dy∧dz + y dz∧dx + z dx∧dy) over the boundary of the box [0, 1] × [0, 1] × [0, 1], oriented outward.",
    "options": [
      "1",
      "0",
      "3",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "d(x dy∧dz + y dz∧dx + z dx∧dy) = 3 dV, so the integral is 3 × volume = 3·1 = 3."
  },
  {
    "id": "mv-df-142",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "Evaluate ∯ (x dy∧dz + y dz∧dx + z dx∧dy) over the boundary of the box [0, 1] × [0, 2] × [0, 3], oriented outward.",
    "options": [
      "6",
      "22",
      "18",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "d(x dy∧dz + y dz∧dx + z dx∧dy) = 3 dV, so the integral is 3 × volume = 3·6 = 18."
  },
  {
    "id": "mv-df-143",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "Evaluate ∯ (x dy∧dz + y dz∧dx + z dx∧dy) over the boundary of the box [0, 2] × [0, 2] × [0, 1], oriented outward.",
    "options": [
      "4",
      "12",
      "0",
      "16"
    ],
    "correctAnswer": 1,
    "explanation": "d(x dy∧dz + y dz∧dx + z dx∧dy) = 3 dV, so the integral is 3 × volume = 3·4 = 12."
  },
  {
    "id": "mv-df-144",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "Evaluate ∯ (x dy∧dz + y dz∧dx + z dx∧dy) over the boundary of the box [0, 3] × [0, 1] × [0, 2], oriented outward.",
    "options": [
      "22",
      "18",
      "6",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "d(x dy∧dz + y dz∧dx + z dx∧dy) = 3 dV, so the integral is 3 × volume = 3·6 = 18."
  },
  {
    "id": "mv-df-145",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "Evaluate ∯ (x dy∧dz + y dz∧dx + z dx∧dy) over the boundary of the box [0, 2] × [0, 3] × [0, 4], oriented outward.",
    "options": [
      "52",
      "24",
      "72",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "d(x dy∧dz + y dz∧dx + z dx∧dy) = 3 dV, so the integral is 3 × volume = 3·24 = 72."
  },
  {
    "id": "mv-df-146",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "For F = ⟨−y, x, 0⟩, find the upward flux of ∇×F through the paraboloid z = 4 − x² − y², z ≥ 0.",
    "options": [
      "4π",
      "32π",
      "0",
      "8π"
    ],
    "correctAnswer": 3,
    "explanation": "The paraboloid and the disk x² + y² ≤ 4 share the same boundary circle, so use the disk: ∇×F = ⟨0, 0, 2⟩ and the disk has area π·4, giving 8π."
  },
  {
    "id": "mv-df-147",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "For F = ⟨−2y, 2x, 0⟩, find the upward flux of ∇×F through the paraboloid z = 1 − x² − y², z ≥ 0.",
    "options": [
      "4π",
      "0",
      "2π",
      "8π"
    ],
    "correctAnswer": 0,
    "explanation": "The paraboloid and the disk x² + y² ≤ 1 share the same boundary circle, so use the disk: ∇×F = ⟨0, 0, 4⟩ and the disk has area π·1, giving 4π."
  },
  {
    "id": "mv-df-148",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "For F = ⟨−y, x, 0⟩, find the upward flux of ∇×F through the paraboloid z = 9 − x² − y², z ≥ 0.",
    "options": [
      "162π",
      "9π",
      "0",
      "18π"
    ],
    "correctAnswer": 3,
    "explanation": "The paraboloid and the disk x² + y² ≤ 9 share the same boundary circle, so use the disk: ∇×F = ⟨0, 0, 2⟩ and the disk has area π·9, giving 18π."
  },
  {
    "id": "mv-df-149",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "For F = ⟨−3y, 3x, 0⟩, find the upward flux of ∇×F through the paraboloid z = 2 − x² − y², z ≥ 0.",
    "options": [
      "0",
      "24π",
      "6π",
      "12π"
    ],
    "correctAnswer": 3,
    "explanation": "The paraboloid and the disk x² + y² ≤ 2 share the same boundary circle, so use the disk: ∇×F = ⟨0, 0, 6⟩ and the disk has area π·2, giving 12π."
  },
  {
    "id": "mv-df-150",
    "module": "Differential Forms",
    "topic": "Generalized Stokes' Theorem",
    "difficulty": "Hard",
    "question": "For F = ⟨−2y, 2x, 0⟩, find the upward flux of ∇×F through the paraboloid z = 4 − x² − y², z ≥ 0.",
    "options": [
      "0",
      "16π",
      "8π",
      "64π"
    ],
    "correctAnswer": 1,
    "explanation": "The paraboloid and the disk x² + y² ≤ 4 share the same boundary circle, so use the disk: ∇×F = ⟨0, 0, 4⟩ and the disk has area π·4, giving 16π."
  },
];
