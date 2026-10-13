// src/data/mvAdvancedIntegrationPracticeBank.js
// Practice Arena — Advanced Integration & Variational Methods (Multivariable Calculus)
// 150 MCQs: 50 Easy / 50 Medium / 50 Hard, 25 per difficulty per topic:
//   Improper Multiple Integrals & the Gaussian Integral; Calculus of Variations (Euler–Lagrange Equation).
// Same format as mvPracticeBank.js (correctAnswer is the 0-based option index).

export const MV_ADVANCED_INTEGRATION_PRACTICE_BANK = [
  {
    "id": "mv-ai-001",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∫ e^(−x²) dx over the whole real line.",
    "options": [
      "√π",
      "2√π",
      "π",
      "√π/2"
    ],
    "correctAnswer": 0,
    "explanation": "∫ e^(−ax²) dx = √(π/a). With a = 1: √π/√1 = √π."
  },
  {
    "id": "mv-ai-002",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∫ e^(−4x²) dx over the whole real line.",
    "options": [
      "√π/2",
      "√π/4",
      "2√π",
      "π/4"
    ],
    "correctAnswer": 0,
    "explanation": "∫ e^(−ax²) dx = √(π/a). With a = 4: √π/√4 = √π/2."
  },
  {
    "id": "mv-ai-003",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∫ e^(−9x²) dx over the whole real line.",
    "options": [
      "√π/3",
      "√π/6",
      "3√π",
      "π/9"
    ],
    "correctAnswer": 0,
    "explanation": "∫ e^(−ax²) dx = √(π/a). With a = 9: √π/√9 = √π/3."
  },
  {
    "id": "mv-ai-004",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∫ e^(−16x²) dx over the whole real line.",
    "options": [
      "4√π",
      "π/16",
      "√π/4",
      "√π/8"
    ],
    "correctAnswer": 2,
    "explanation": "∫ e^(−ax²) dx = √(π/a). With a = 16: √π/√16 = √π/4."
  },
  {
    "id": "mv-ai-005",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∫ e^(−25x²) dx over the whole real line.",
    "options": [
      "π/25",
      "5√π",
      "√π/5",
      "√π/10"
    ],
    "correctAnswer": 2,
    "explanation": "∫ e^(−ax²) dx = √(π/a). With a = 25: √π/√25 = √π/5."
  },
  {
    "id": "mv-ai-006",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∫ e^(−x²/4) dx over the whole real line.",
    "options": [
      "2√π",
      "√π",
      "√π/2",
      "4π"
    ],
    "correctAnswer": 0,
    "explanation": "∫ e^(−ax²) dx = √(π/a). With a = 1/4: √π/√1/4 = 2√π."
  },
  {
    "id": "mv-ai-007",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∫₀^∞ e^(−x²) dx.",
    "options": [
      "√π/4",
      "√π",
      "π/2",
      "√π/2"
    ],
    "correctAnswer": 3,
    "explanation": "The integrand is even, so this is half of √(π/1) = √π, i.e. √π/2."
  },
  {
    "id": "mv-ai-008",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∫₀^∞ e^(−4x²) dx.",
    "options": [
      "π/8",
      "√π/8",
      "√π/2",
      "√π/4"
    ],
    "correctAnswer": 3,
    "explanation": "The integrand is even, so this is half of √(π/4) = √π/2, i.e. √π/4."
  },
  {
    "id": "mv-ai-009",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∫₀^∞ e^(−9x²) dx.",
    "options": [
      "√π/12",
      "π/18",
      "√π/6",
      "√π/3"
    ],
    "correctAnswer": 2,
    "explanation": "The integrand is even, so this is half of √(π/9) = √π/3, i.e. √π/6."
  },
  {
    "id": "mv-ai-010",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∬ dA/(x² y²) over the region x ≥ 1, y ≥ 1.",
    "options": [
      "1",
      "1/4",
      "It diverges",
      "1/2"
    ],
    "correctAnswer": 0,
    "explanation": "The integrand is positive and separates: ∫₁^∞ x^(−2) dx · ∫₁^∞ y^(−2) dy = (1/1)(1/1) = 1."
  },
  {
    "id": "mv-ai-011",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∬ dA/(x² y³) over the region x ≥ 1, y ≥ 1.",
    "options": [
      "It diverges",
      "1/2",
      "1/3",
      "1/6"
    ],
    "correctAnswer": 1,
    "explanation": "The integrand is positive and separates: ∫₁^∞ x^(−2) dx · ∫₁^∞ y^(−3) dy = (1/1)(1/2) = 1/2."
  },
  {
    "id": "mv-ai-012",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∬ dA/(x³ y³) over the region x ≥ 1, y ≥ 1.",
    "options": [
      "1/9",
      "1/4",
      "It diverges",
      "1/2"
    ],
    "correctAnswer": 1,
    "explanation": "The integrand is positive and separates: ∫₁^∞ x^(−3) dx · ∫₁^∞ y^(−3) dy = (1/2)(1/2) = 1/4."
  },
  {
    "id": "mv-ai-013",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∬ dA/(x² y⁴) over the region x ≥ 1, y ≥ 1.",
    "options": [
      "It diverges",
      "1/8",
      "1/3",
      "1/4"
    ],
    "correctAnswer": 2,
    "explanation": "The integrand is positive and separates: ∫₁^∞ x^(−2) dx · ∫₁^∞ y^(−4) dy = (1/1)(1/3) = 1/3."
  },
  {
    "id": "mv-ai-014",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∬ dA/(x³ y⁴) over the region x ≥ 1, y ≥ 1.",
    "options": [
      "It diverges",
      "1/6",
      "1/12",
      "1/5"
    ],
    "correctAnswer": 1,
    "explanation": "The integrand is positive and separates: ∫₁^∞ x^(−3) dx · ∫₁^∞ y^(−4) dy = (1/2)(1/3) = 1/6."
  },
  {
    "id": "mv-ai-015",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∬ e^(−(x + y)) dA over the first quadrant x ≥ 0, y ≥ 0.",
    "options": [
      "It diverges",
      "2",
      "1",
      "1/2"
    ],
    "correctAnswer": 2,
    "explanation": "It factors: ∫₀^∞ e^(−x) dx · ∫₀^∞ e^(−y) dy = (1/1)(1/1) = 1."
  },
  {
    "id": "mv-ai-016",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∬ e^(−(2x + 3y)) dA over the first quadrant x ≥ 0, y ≥ 0.",
    "options": [
      "6",
      "1/6",
      "1/3",
      "1/5"
    ],
    "correctAnswer": 1,
    "explanation": "It factors: ∫₀^∞ e^(−2x) dx · ∫₀^∞ e^(−3y) dy = (1/2)(1/3) = 1/6."
  },
  {
    "id": "mv-ai-017",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∬ e^(−(x + 4y)) dA over the first quadrant x ≥ 0, y ≥ 0.",
    "options": [
      "1/4",
      "1/5",
      "1/2",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "It factors: ∫₀^∞ e^(−x) dx · ∫₀^∞ e^(−4y) dy = (1/1)(1/4) = 1/4."
  },
  {
    "id": "mv-ai-018",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∬ e^(−(2x + 2y)) dA over the first quadrant x ≥ 0, y ≥ 0.",
    "options": [
      "4",
      "1/2",
      "1/4",
      "It diverges"
    ],
    "correctAnswer": 2,
    "explanation": "It factors: ∫₀^∞ e^(−2x) dx · ∫₀^∞ e^(−2y) dy = (1/2)(1/2) = 1/4."
  },
  {
    "id": "mv-ai-019",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Evaluate ∬ e^(−(3x + 5y)) dA over the first quadrant x ≥ 0, y ≥ 0.",
    "options": [
      "2/15",
      "1/8",
      "1/15",
      "15"
    ],
    "correctAnswer": 2,
    "explanation": "It factors: ∫₀^∞ e^(−3x) dx · ∫₀^∞ e^(−5y) dy = (1/3)(1/5) = 1/15."
  },
  {
    "id": "mv-ai-020",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "A double integral over an unbounded region is defined as:",
    "options": [
      "Always infinite",
      "A limit of integrals over bounded regions that fill it up",
      "The integral over the largest disk that fits",
      "The average of the two iterated integrals"
    ],
    "correctAnswer": 1,
    "explanation": "Exhaust the region by bounded pieces D₁ ⊂ D₂ ⊂ … and take the limit."
  },
  {
    "id": "mv-ai-021",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "In ℝ², ∬_{r ≥ 1} r^(−p) dA converges exactly when:",
    "options": [
      "p ≥ 2",
      "p > 2",
      "p > 1",
      "p < 2"
    ],
    "correctAnswer": 1,
    "explanation": "Polar coordinates give 2π∫₁^∞ r^(1−p) dr, finite iff p > 2."
  },
  {
    "id": "mv-ai-022",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "In ℝ², ∬_{0 < r ≤ 1} r^(−p) dA converges exactly when:",
    "options": [
      "p > 2",
      "p < 2",
      "p < 1",
      "For all p"
    ],
    "correctAnswer": 1,
    "explanation": "2π∫₀¹ r^(1−p) dr is finite iff p < 2: the area factor r softens the singularity."
  },
  {
    "id": "mv-ai-023",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "In ℝ³, ∭_{ρ ≥ 1} ρ^(−p) dV converges exactly when:",
    "options": [
      "p < 3",
      "p > 2",
      "p > 1",
      "p > 3"
    ],
    "correctAnswer": 3,
    "explanation": "Spherical coordinates give 4π∫₁^∞ ρ^(2−p) dρ, finite iff p > 3."
  },
  {
    "id": "mv-ai-024",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Tonelli's theorem says that for f ≥ 0:",
    "options": [
      "The double integral is always finite",
      "f must be bounded",
      "Only one order of integration is allowed",
      "Both iterated integrals equal the double integral (finite or +∞)"
    ],
    "correctAnswer": 3,
    "explanation": "For non-negative integrands the order of integration never matters."
  },
  {
    "id": "mv-ai-025",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Easy",
    "question": "Fubini's theorem lets you swap the order for a sign-changing f provided:",
    "options": [
      "f is bounded",
      "f is continuous",
      "The region is bounded",
      "∬|f| dA is finite"
    ],
    "correctAnswer": 3,
    "explanation": "Absolute integrability is the key hypothesis; without it the iterated integrals can disagree."
  },
  {
    "id": "mv-ai-026",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Write the Euler–Lagrange equation for F = y′² + y².",
    "options": [
      "y′ = y",
      "y″ = y",
      "y″ = 1",
      "y″ = −y"
    ],
    "correctAnswer": 1,
    "explanation": "F_y = 2y and d/dx F_y′ = 2y″, so 2y″ = 2y, i.e. y″ = y."
  },
  {
    "id": "mv-ai-027",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Write the Euler–Lagrange equation for F = y′² + 4y².",
    "options": [
      "y″ = −4y",
      "y″ = 4",
      "y″ = 4y",
      "y′ = 4y"
    ],
    "correctAnswer": 2,
    "explanation": "F_y = 8y and d/dx F_y′ = 2y″, so 2y″ = 8y, i.e. y″ = 4y."
  },
  {
    "id": "mv-ai-028",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Write the Euler–Lagrange equation for F = y′² + 9y².",
    "options": [
      "y″ = 9y",
      "y″ = 9",
      "y″ = −9y",
      "y′ = 9y"
    ],
    "correctAnswer": 0,
    "explanation": "F_y = 18y and d/dx F_y′ = 2y″, so 2y″ = 18y, i.e. y″ = 9y."
  },
  {
    "id": "mv-ai-029",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Write the Euler–Lagrange equation for F = y′² − y².",
    "options": [
      "y″ = −y",
      "y′ = −y",
      "y″ = −1",
      "y″ = y"
    ],
    "correctAnswer": 0,
    "explanation": "F_y = −2y and d/dx F_y′ = 2y″, so 2y″ = −2y, i.e. y″ = −y."
  },
  {
    "id": "mv-ai-030",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Write the Euler–Lagrange equation for F = y′² − 4y².",
    "options": [
      "y′ = −4y",
      "y″ = −4y",
      "y″ = 4y",
      "y″ = −4"
    ],
    "correctAnswer": 1,
    "explanation": "F_y = −8y and d/dx F_y′ = 2y″, so 2y″ = −8y, i.e. y″ = −4y."
  },
  {
    "id": "mv-ai-031",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Write the Euler–Lagrange equation for F = y′² + 2(x)·y.",
    "options": [
      "y′ = x",
      "y″ = −x",
      "y″ = 2x",
      "y″ = x"
    ],
    "correctAnswer": 3,
    "explanation": "F_y = 2(x) and d/dx F_y′ = 2y″, so 2(x) − 2y″ = 0 and y″ = x."
  },
  {
    "id": "mv-ai-032",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Write the Euler–Lagrange equation for F = y′² + 2(x²)·y.",
    "options": [
      "y′ = x²",
      "y″ = 2x²",
      "y″ = −x²",
      "y″ = x²"
    ],
    "correctAnswer": 3,
    "explanation": "F_y = 2(x²) and d/dx F_y′ = 2y″, so 2(x²) − 2y″ = 0 and y″ = x²."
  },
  {
    "id": "mv-ai-033",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Write the Euler–Lagrange equation for F = y′² + 2(sin x)·y.",
    "options": [
      "y″ = −sin x",
      "y″ = 2sin x",
      "y′ = sin x",
      "y″ = sin x"
    ],
    "correctAnswer": 3,
    "explanation": "F_y = 2(sin x) and d/dx F_y′ = 2y″, so 2(sin x) − 2y″ = 0 and y″ = sin x."
  },
  {
    "id": "mv-ai-034",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Write the Euler–Lagrange equation for F = y′² + 2(eˣ)·y.",
    "options": [
      "y″ = 2eˣ",
      "y″ = −eˣ",
      "y′ = eˣ",
      "y″ = eˣ"
    ],
    "correctAnswer": 3,
    "explanation": "F_y = 2(eˣ) and d/dx F_y′ = 2y″, so 2(eˣ) − 2y″ = 0 and y″ = eˣ."
  },
  {
    "id": "mv-ai-035",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Write the Euler–Lagrange equation for F = y′² + 2(3)·y.",
    "options": [
      "y′ = 3",
      "y″ = 6",
      "y″ = −3",
      "y″ = 3"
    ],
    "correctAnswer": 3,
    "explanation": "F_y = 2(3) and d/dx F_y′ = 2y″, so 2(3) − 2y″ = 0 and y″ = 3."
  },
  {
    "id": "mv-ai-036",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Among all curves y(x) joining (0, 0) and (3, 4), the minimum value of ∫√(1 + y′²) dx is:",
    "options": [
      "7",
      "25",
      "5",
      "14"
    ],
    "correctAnswer": 2,
    "explanation": "The extremals of arc length are straight lines, so the minimum is the distance √(3² + 4²) = 5."
  },
  {
    "id": "mv-ai-037",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Among all curves y(x) joining (0, 0) and (1, 1), the minimum value of ∫√(1 + y′²) dx is:",
    "options": [
      "4",
      "2",
      "√2",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "The extremals of arc length are straight lines, so the minimum is the distance √(1² + 1²) = √2."
  },
  {
    "id": "mv-ai-038",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Among all curves y(x) joining (1, 2) and (4, 6), the minimum value of ∫√(1 + y′²) dx is:",
    "options": [
      "5",
      "7",
      "25",
      "14"
    ],
    "correctAnswer": 0,
    "explanation": "The extremals of arc length are straight lines, so the minimum is the distance √(3² + 4²) = 5."
  },
  {
    "id": "mv-ai-039",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Among all curves y(x) joining (0, 0) and (5, 12), the minimum value of ∫√(1 + y′²) dx is:",
    "options": [
      "17",
      "13",
      "169",
      "34"
    ],
    "correctAnswer": 1,
    "explanation": "The extremals of arc length are straight lines, so the minimum is the distance √(5² + 12²) = 13."
  },
  {
    "id": "mv-ai-040",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Among all curves y(x) joining (2, 1) and (8, 9), the minimum value of ∫√(1 + y′²) dx is:",
    "options": [
      "14",
      "28",
      "100",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "The extremals of arc length are straight lines, so the minimum is the distance √(6² + 8²) = 10."
  },
  {
    "id": "mv-ai-041",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "The Euler–Lagrange equation for J[y] = ∫ F(x, y, y′) dx is:",
    "options": [
      "F_y + F_y′ = 0",
      "F_y − d/dx(F_y′) = 0",
      "F_y′ = 0",
      "dF/dx = 0"
    ],
    "correctAnswer": 1,
    "explanation": "Set the first variation to zero, integrate by parts, and apply the fundamental lemma."
  },
  {
    "id": "mv-ai-042",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "With fixed endpoints, the admissible variations η(x) must satisfy:",
    "options": [
      "η(a) = η(b) = 0",
      "η is constant",
      "∫ η dx = 0",
      "η′(a) = η′(b) = 0"
    ],
    "correctAnswer": 0,
    "explanation": "The varied curve y + εη must keep the same endpoint values."
  },
  {
    "id": "mv-ai-043",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "The extremals of ∫√(1 + y′²) dx are:",
    "options": [
      "Parabolas",
      "Circles",
      "Catenaries",
      "Straight lines"
    ],
    "correctAnswer": 3,
    "explanation": "F has no y, so F_y′ = y′/√(1 + y′²) is constant, which forces y′ to be constant."
  },
  {
    "id": "mv-ai-044",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "The curve of fastest frictionless descent between two points is:",
    "options": [
      "A straight line",
      "A cycloid",
      "A circular arc",
      "A parabola"
    ],
    "correctAnswer": 1,
    "explanation": "The brachistochrone: Beltrami gives y(1 + y′²) = constant, solved by cycloids."
  },
  {
    "id": "mv-ai-045",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Minimizing the area of a surface of revolution gives profile curves that are:",
    "options": [
      "Straight lines",
      "Sine curves",
      "Catenaries y = c·cosh((x − x₀)/c)",
      "Parabolas"
    ],
    "correctAnswer": 2,
    "explanation": "Beltrami gives y/√(1 + y′²) = c, solved by catenaries."
  },
  {
    "id": "mv-ai-046",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "If F = F(y, y′) has no explicit x, every extremal satisfies:",
    "options": [
      "F − y′F_y′ = constant",
      "F + y′F_y′ = 0",
      "y′ = constant",
      "F_y = constant"
    ],
    "correctAnswer": 0,
    "explanation": "This is the Beltrami identity."
  },
  {
    "id": "mv-ai-047",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "If F = F(x, y′) does not contain y, the Euler–Lagrange equation reduces to:",
    "options": [
      "y′ = 0",
      "F = constant",
      "F_y′ = constant",
      "F_y = 0 only"
    ],
    "correctAnswer": 2,
    "explanation": "With F_y = 0 we get d/dx F_y′ = 0."
  },
  {
    "id": "mv-ai-048",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "Maximizing the area under a curve of fixed length gives extremals that are:",
    "options": [
      "Circular arcs",
      "Cycloids",
      "Straight lines",
      "Parabolas"
    ],
    "correctAnswer": 0,
    "explanation": "Dido's isoperimetric problem: Beltrami with a multiplier gives circles."
  },
  {
    "id": "mv-ai-049",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "In mechanics, the Lagrangian of a particle is usually:",
    "options": [
      "L = T − V (kinetic minus potential energy)",
      "L = V − T",
      "L = T·V",
      "L = T + V"
    ],
    "correctAnswer": 0,
    "explanation": "Lagrange's equations come from making ∫ (T − V) dt stationary."
  },
  {
    "id": "mv-ai-050",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Easy",
    "question": "The first variation of J at y in the direction η is:",
    "options": [
      "The second derivative of J[y + εη] at ε = 0",
      "d/dε J[y + εη] at ε = 0",
      "J[y + η] − J[y]",
      "∫ η dx"
    ],
    "correctAnswer": 1,
    "explanation": "It is the functional analogue of a directional derivative."
  },
  {
    "id": "mv-ai-051",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Evaluate ∬ dA/(1 + x² + y²)² over all of ℝ².",
    "options": [
      "π",
      "π/2",
      "It diverges",
      "2π"
    ],
    "correctAnswer": 0,
    "explanation": "2π∫₀^∞ r(1 + r²)^(−2) dr = 2π · 1/(2(2 − 1)) = π."
  },
  {
    "id": "mv-ai-052",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Evaluate ∬ dA/(1 + x² + y²)³ over all of ℝ².",
    "options": [
      "π/4",
      "π/2",
      "π/3",
      "π"
    ],
    "correctAnswer": 1,
    "explanation": "2π∫₀^∞ r(1 + r²)^(−3) dr = 2π · 1/(2(3 − 1)) = π/2."
  },
  {
    "id": "mv-ai-053",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Evaluate ∬ dA/(1 + x² + y²)⁴ over all of ℝ².",
    "options": [
      "π/4",
      "2π/3",
      "π/3",
      "π/6"
    ],
    "correctAnswer": 2,
    "explanation": "2π∫₀^∞ r(1 + r²)^(−4) dr = 2π · 1/(2(4 − 1)) = π/3."
  },
  {
    "id": "mv-ai-054",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Evaluate ∬ dA/(1 + x² + y²)⁵ over all of ℝ².",
    "options": [
      "π/5",
      "π/4",
      "π/8",
      "π/2"
    ],
    "correctAnswer": 1,
    "explanation": "2π∫₀^∞ r(1 + r²)^(−5) dr = 2π · 1/(2(5 − 1)) = π/4."
  },
  {
    "id": "mv-ai-055",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Evaluate ∬ dA/(1 + x² + y²)^(3/2) over all of ℝ².",
    "options": [
      "2π/3",
      "π",
      "2π",
      "4π"
    ],
    "correctAnswer": 2,
    "explanation": "2π∫₀^∞ r(1 + r²)^(−3/2) dr = 2π · 1/(2(3/2 − 1)) = 2π."
  },
  {
    "id": "mv-ai-056",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Over the unit disk, evaluate ∬ dA / r where r = √(x² + y²).",
    "options": [
      "4π",
      "2π",
      "π",
      "It diverges"
    ],
    "correctAnswer": 1,
    "explanation": "2π∫₀¹ r^(1 − 1) dr = 2π/(2 − 1) = 2π, finite since 1 < 2."
  },
  {
    "id": "mv-ai-057",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Over the unit disk, evaluate ∬ dA / r^(1/2) where r = √(x² + y²).",
    "options": [
      "It diverges",
      "4π",
      "2π/3",
      "4π/3"
    ],
    "correctAnswer": 3,
    "explanation": "2π∫₀¹ r^(1 − 1/2) dr = 2π/(2 − 1/2) = 4π/3, finite since 1/2 < 2."
  },
  {
    "id": "mv-ai-058",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Over the unit disk, evaluate ∬ dA / r^(3/2) where r = √(x² + y²).",
    "options": [
      "It diverges",
      "2π",
      "−4π",
      "4π"
    ],
    "correctAnswer": 3,
    "explanation": "2π∫₀¹ r^(1 − 3/2) dr = 2π/(2 − 3/2) = 4π, finite since 3/2 < 2."
  },
  {
    "id": "mv-ai-059",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Over the unit disk, evaluate ∬ dA / r^(1/3) where r = √(x² + y²).",
    "options": [
      "6π/5",
      "It diverges",
      "3π/5",
      "3π"
    ],
    "correctAnswer": 0,
    "explanation": "2π∫₀¹ r^(1 − 1/3) dr = 2π/(2 − 1/3) = 6π/5, finite since 1/3 < 2."
  },
  {
    "id": "mv-ai-060",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Over the unit disk, evaluate ∬ dA / r^(5/4) where r = √(x² + y²).",
    "options": [
      "4π/3",
      "−8π",
      "It diverges",
      "8π/3"
    ],
    "correctAnswer": 3,
    "explanation": "2π∫₀¹ r^(1 − 5/4) dr = 2π/(2 − 5/4) = 8π/3, finite since 5/4 < 2."
  },
  {
    "id": "mv-ai-061",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Over the unit ball, evaluate ∭ dV / ρ where ρ = √(x² + y² + z²).",
    "options": [
      "4π/3",
      "2π",
      "2π/3",
      "It diverges"
    ],
    "correctAnswer": 1,
    "explanation": "4π∫₀¹ ρ^(2 − 1) dρ = 4π/(3 − 1) = 2π, finite since 1 < 3."
  },
  {
    "id": "mv-ai-062",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Over the unit ball, evaluate ∭ dV / ρ² where ρ = √(x² + y² + z²).",
    "options": [
      "4π",
      "It diverges",
      "3π",
      "4π/3"
    ],
    "correctAnswer": 0,
    "explanation": "4π∫₀¹ ρ^(2 − 2) dρ = 4π/(3 − 2) = 4π, finite since 2 < 3."
  },
  {
    "id": "mv-ai-063",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Over the unit ball, evaluate ∭ dV / ρ^(1/2) where ρ = √(x² + y² + z²).",
    "options": [
      "It diverges",
      "8π/15",
      "4π/3",
      "8π/5"
    ],
    "correctAnswer": 3,
    "explanation": "4π∫₀¹ ρ^(2 − 1/2) dρ = 4π/(3 − 1/2) = 8π/5, finite since 1/2 < 3."
  },
  {
    "id": "mv-ai-064",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Over the unit ball, evaluate ∭ dV / ρ^(5/2) where ρ = √(x² + y² + z²).",
    "options": [
      "8π",
      "−4π",
      "It diverges",
      "8π/3"
    ],
    "correctAnswer": 0,
    "explanation": "4π∫₀¹ ρ^(2 − 5/2) dρ = 4π/(3 − 5/2) = 8π, finite since 5/2 < 3."
  },
  {
    "id": "mv-ai-065",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Over the unit ball, evaluate ∭ dV / ρ^(3/2) where ρ = √(x² + y² + z²).",
    "options": [
      "It diverges",
      "8π/3",
      "8π/9",
      "4π"
    ],
    "correctAnswer": 1,
    "explanation": "4π∫₀¹ ρ^(2 − 3/2) dρ = 4π/(3 − 3/2) = 8π/3, finite since 3/2 < 3."
  },
  {
    "id": "mv-ai-066",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Does the improper integral ∬ over r ≥ 1 of dA / r³ in the plane converge?",
    "options": [
      "Converges",
      "Diverges",
      "It equals 0 by symmetry",
      "It depends on the order of integration"
    ],
    "correctAnswer": 0,
    "explanation": "Use the p-test: p = 3 > 2."
  },
  {
    "id": "mv-ai-067",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Does the improper integral ∬ over r ≥ 1 of dA / r² in the plane converge?",
    "options": [
      "Diverges",
      "It equals 0 by symmetry",
      "Converges",
      "It depends on the order of integration"
    ],
    "correctAnswer": 0,
    "explanation": "Use the p-test: p = 2 is the borderline case: 2π∫₁^∞ dr/r diverges."
  },
  {
    "id": "mv-ai-068",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Does the improper integral ∬ over 0 < r ≤ 1 of dA / r^(5/2) in the plane converge?",
    "options": [
      "Converges",
      "It equals 0 by symmetry",
      "It depends on the order of integration",
      "Diverges"
    ],
    "correctAnswer": 3,
    "explanation": "Use the p-test: Near the origin we need p < 2, but p = 5/2."
  },
  {
    "id": "mv-ai-069",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Does the improper integral ∭ over ρ ≥ 1 of dV / ρ⁴ in space converge?",
    "options": [
      "Converges",
      "Diverges",
      "It depends on the order of integration",
      "It equals 0 by symmetry"
    ],
    "correctAnswer": 0,
    "explanation": "Use the p-test: In ℝ³ the far-field test needs p > 3, and p = 4."
  },
  {
    "id": "mv-ai-070",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Does the improper integral ∭ over 0 < ρ ≤ 1 of dV / ρ³ in space converge?",
    "options": [
      "It equals 0 by symmetry",
      "Converges",
      "It depends on the order of integration",
      "Diverges"
    ],
    "correctAnswer": 3,
    "explanation": "Use the p-test: Near the origin in ℝ³ we need p < 3; p = 3 diverges logarithmically."
  },
  {
    "id": "mv-ai-071",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Evaluate ∬ e^(−(x² + 4y²)) dA over all of ℝ².",
    "options": [
      "π/2",
      "π/4",
      "π",
      "√π/2"
    ],
    "correctAnswer": 0,
    "explanation": "It factors into √(π/1) · √(π/4) = π/√4 = π/2."
  },
  {
    "id": "mv-ai-072",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Evaluate ∬ e^(−(x² + 9y²)) dA over all of ℝ².",
    "options": [
      "2π/3",
      "π/9",
      "π/3",
      "√π/3"
    ],
    "correctAnswer": 2,
    "explanation": "It factors into √(π/1) · √(π/9) = π/√9 = π/3."
  },
  {
    "id": "mv-ai-073",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Evaluate ∬ e^(−(4x² + 9y²)) dA over all of ℝ².",
    "options": [
      "√π/6",
      "π/3",
      "π/6",
      "π/36"
    ],
    "correctAnswer": 2,
    "explanation": "It factors into √(π/4) · √(π/9) = π/√36 = π/6."
  },
  {
    "id": "mv-ai-074",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Evaluate ∬ e^(−(x² + y²)) dA over all of ℝ².",
    "options": [
      "√π",
      "π/2",
      "π",
      "2π"
    ],
    "correctAnswer": 2,
    "explanation": "It factors into √(π/1) · √(π/1) = π/√1 = π."
  },
  {
    "id": "mv-ai-075",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Medium",
    "question": "Evaluate ∬ e^(−(4x² + 4y²)) dA over all of ℝ².",
    "options": [
      "√π/4",
      "π/2",
      "π/4",
      "π/16"
    ],
    "correctAnswer": 2,
    "explanation": "It factors into √(π/4) · √(π/4) = π/√16 = π/4."
  },
  {
    "id": "mv-ai-076",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Find the extremal of ∫₀¹ (y′² + y²) dx with y(0) = 0, y(1) = 1.",
    "options": [
      "y = x",
      "y = cosh x/cosh 1",
      "y = sin x/sin 1",
      "y = sinh x/sinh 1"
    ],
    "correctAnswer": 3,
    "explanation": "Euler–Lagrange: y″ = y, so y = A cosh(x) + B sinh(x). y(0) = 0 gives A = 0 and y(1) = 1 fixes B."
  },
  {
    "id": "mv-ai-077",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Find the extremal of ∫₀¹ (y′² + 4y²) dx with y(0) = 0, y(1) = 1.",
    "options": [
      "y = sinh(2x)/sinh(2)",
      "y = cosh(2x)/cosh(2)",
      "y = sin(2x)/sin(2)",
      "y = x"
    ],
    "correctAnswer": 0,
    "explanation": "Euler–Lagrange: y″ = 4y, so y = A cosh(2x) + B sinh(2x). y(0) = 0 gives A = 0 and y(1) = 1 fixes B."
  },
  {
    "id": "mv-ai-078",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Find the extremal of ∫₀¹ (y′² + 9y²) dx with y(0) = 0, y(1) = 1.",
    "options": [
      "y = sinh(3x)/sinh(3)",
      "y = x",
      "y = sin(3x)/sin(3)",
      "y = cosh(3x)/cosh(3)"
    ],
    "correctAnswer": 0,
    "explanation": "Euler–Lagrange: y″ = 9y, so y = A cosh(3x) + B sinh(3x). y(0) = 0 gives A = 0 and y(1) = 1 fixes B."
  },
  {
    "id": "mv-ai-079",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Find the extremal of ∫ (y′² − y²) dx on [0, π/2] with y(0) = 0, y(π/2) = 1.",
    "options": [
      "y = sinh(x)/sinh(π/2)",
      "y = cos x",
      "y = sin x",
      "y = x/(π/2)"
    ],
    "correctAnswer": 2,
    "explanation": "Euler–Lagrange: y″ + y = 0, so y = A cos(x) + B sin(x). Then A = 0 and B = 1."
  },
  {
    "id": "mv-ai-080",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Find the extremal of ∫ (y′² − 4y²) dx on [0, π/4] with y(0) = 0, y(π/4) = 1.",
    "options": [
      "y = sinh(2x)/sinh(π/4)",
      "y = cos(2x)",
      "y = sin(2x)",
      "y = x/(π/4)"
    ],
    "correctAnswer": 2,
    "explanation": "Euler–Lagrange: y″ + 4y = 0, so y = A cos(2x) + B sin(2x). Then A = 0 and B = 1."
  },
  {
    "id": "mv-ai-081",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Find the extremal of ∫₀¹ (y′² + 2xy) dx with y(0) = 0, y(1) = 1.",
    "options": [
      "y = x³/6",
      "y = x³/6 + 5x/6",
      "y = −x³/6 + 7x/6",
      "y = x²/2 + x/2"
    ],
    "correctAnswer": 1,
    "explanation": "Euler–Lagrange: y″ = 1x, so y = 1/6x³ + Cx + D. y(0) = 0 gives D = 0 and y(1) = 1 gives C = 5/6."
  },
  {
    "id": "mv-ai-082",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Find the extremal of ∫₀¹ (y′² + 12xy) dx with y(0) = 0, y(1) = 1.",
    "options": [
      "y = x³ + x",
      "y = x³",
      "y = 3x² − 2x",
      "y = 6x³"
    ],
    "correctAnswer": 1,
    "explanation": "Euler–Lagrange: y″ = 6x, so y = 1x³ + Cx + D. y(0) = 0 gives D = 0 and y(1) = 1 gives C = 0."
  },
  {
    "id": "mv-ai-083",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Find the extremal of ∫₀¹ (y′² + 6xy) dx with y(0) = 0, y(1) = 1.",
    "options": [
      "y = 3x³ − 2x",
      "y = x³/2 + x/2",
      "y = x²",
      "y = x³/2"
    ],
    "correctAnswer": 1,
    "explanation": "Euler–Lagrange: y″ = 3x, so y = 1/2x³ + Cx + D. y(0) = 0 gives D = 0 and y(1) = 1 gives C = 1/2."
  },
  {
    "id": "mv-ai-084",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Find the extremal of ∫₀¹ (y′² + 24xy) dx with y(0) = 0, y(1) = 1.",
    "options": [
      "y = 6x² − 5x",
      "y = 2x³",
      "y = 2x³ − x",
      "y = 12x³ − 11x"
    ],
    "correctAnswer": 2,
    "explanation": "Euler–Lagrange: y″ = 12x, so y = 2x³ + Cx + D. y(0) = 0 gives D = 0 and y(1) = 1 gives C = −1."
  },
  {
    "id": "mv-ai-085",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Find the extremal of ∫₀¹ (y′² − 12xy) dx with y(0) = 0, y(1) = 1.",
    "options": [
      "y = −x³ + 2x",
      "y = −3x² + 4x",
      "y = −x³",
      "y = x³"
    ],
    "correctAnswer": 0,
    "explanation": "Euler–Lagrange: y″ = −6x, so y = −1x³ + Cx + D. y(0) = 0 gives D = 0 and y(1) = 1 gives C = 2."
  },
  {
    "id": "mv-ai-086",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "F = y′² − y² has no explicit x. What does the Beltrami identity F − y′F_y′ = C give?",
    "options": [
      "y′² − y² = constant",
      "−y′² − y² = constant",
      "y′² + y² = constant",
      "2y′ = constant"
    ],
    "correctAnswer": 1,
    "explanation": "F − y′F_y′ = y′² − y² − 2y′² = −y′² − y²."
  },
  {
    "id": "mv-ai-087",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "F = y√(1 + y′²) has no explicit x. What does the Beltrami identity F − y′F_y′ = C give?",
    "options": [
      "y·y′ = constant",
      "y√(1 + y′²) = constant",
      "y′/√(1 + y′²) = constant",
      "y/√(1 + y′²) = constant"
    ],
    "correctAnswer": 3,
    "explanation": "F − y′F_y′ = y√(1 + y′²) − y·y′²/√(1 + y′²) = y/√(1 + y′²)."
  },
  {
    "id": "mv-ai-088",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "F = √(1 + y′²)/√y has no explicit x. What does the Beltrami identity F − y′F_y′ = C give?",
    "options": [
      "y(1 − y′²) = constant",
      "1/(√y·√(1 + y′²)) = constant",
      "√(1 + y′²)/√y = constant",
      "y′/√y = constant"
    ],
    "correctAnswer": 1,
    "explanation": "F − y′F_y′ = (1 + y′² − y′²)/(√y√(1 + y′²)) = 1/(√y√(1 + y′²))."
  },
  {
    "id": "mv-ai-089",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "F = y′²/2 + y⁴ has no explicit x. What does the Beltrami identity F − y′F_y′ = C give?",
    "options": [
      "y′ = constant",
      "y⁴ + y′²/2 = constant",
      "y⁴ − y′²/2 = constant",
      "4y³ = constant"
    ],
    "correctAnswer": 2,
    "explanation": "F − y′F_y′ = y′²/2 + y⁴ − y′² = y⁴ − y′²/2."
  },
  {
    "id": "mv-ai-090",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "F = y·y′² has no explicit x. What does the Beltrami identity F − y′F_y′ = C give?",
    "options": [
      "−y·y′² = constant",
      "y·y′² = constant",
      "2y·y′ = constant",
      "y′² = constant"
    ],
    "correctAnswer": 0,
    "explanation": "F − y′F_y′ = y·y′² − y′·2y·y′ = −y·y′²."
  },
  {
    "id": "mv-ai-091",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Derive the equation of motion from the Lagrangian L = ½mẋ² − ½kx².",
    "options": [
      "mẍ = kx",
      "ẍ = 0",
      "mẋ = −kx",
      "mẍ = −kx"
    ],
    "correctAnswer": 3,
    "explanation": "Lagrange's equation L_x − d/dt L_ẋ = 0: L_x = −kx and d/dt L_ẋ = mẍ."
  },
  {
    "id": "mv-ai-092",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Derive the equation of motion from the Lagrangian L = ½mẋ² − mgx.",
    "options": [
      "ẍ = −g",
      "ẋ = −g",
      "ẍ = −gx",
      "ẍ = g"
    ],
    "correctAnswer": 0,
    "explanation": "Lagrange's equation L_x − d/dt L_ẋ = 0: L_x = −mg and d/dt L_ẋ = mẍ."
  },
  {
    "id": "mv-ai-093",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Derive the equation of motion from the Lagrangian L = ½mẋ² − ax⁴.",
    "options": [
      "mẍ = −4ax",
      "mẍ = 4ax³",
      "mẍ = −ax⁴",
      "mẍ = −4ax³"
    ],
    "correctAnswer": 3,
    "explanation": "Lagrange's equation L_x − d/dt L_ẋ = 0: L_x = −4ax³ and d/dt L_ẋ = mẍ."
  },
  {
    "id": "mv-ai-094",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Derive the equation of motion from the Lagrangian L = ½ẋ² + cos x.",
    "options": [
      "ẍ = cos x",
      "ẍ = sin x",
      "ẍ = −sin x",
      "ẍ = −cos x"
    ],
    "correctAnswer": 2,
    "explanation": "Lagrange's equation L_x − d/dt L_ẋ = 0: L_x = −sin x and d/dt L_ẋ = ẍ: the pendulum equation."
  },
  {
    "id": "mv-ai-095",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Derive the equation of motion from the Lagrangian L = ½ẋ² − ½x² − x.",
    "options": [
      "ẍ = −x",
      "ẍ = x + 1",
      "ẍ = −x − 1",
      "ẍ = −x + 1"
    ],
    "correctAnswer": 2,
    "explanation": "Lagrange's equation L_x − d/dt L_ẋ = 0: L_x = −x − 1 and d/dt L_ẋ = ẍ."
  },
  {
    "id": "mv-ai-096",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Minimize ∫₀¹ (y′² + 2y) dx with y(0) = 0 and y(1) free.",
    "options": [
      "y = x²/2",
      "y = x²/2 + x",
      "y = x² − 2x",
      "y = x²/2 − x"
    ],
    "correctAnswer": 3,
    "explanation": "Euler–Lagrange: y″ = 1, so y = 1/2x² + Cx. The natural condition F_y′ = 2y′ = 0 at x = 1 gives C = −1."
  },
  {
    "id": "mv-ai-097",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Minimize ∫₀¹ (y′² + 4y) dx with y(0) = 0 and y(1) free.",
    "options": [
      "y = x² + 2x",
      "y = x² − 2x",
      "y = x²",
      "y = 2x² − 4x"
    ],
    "correctAnswer": 1,
    "explanation": "Euler–Lagrange: y″ = 2, so y = 1x² + Cx. The natural condition F_y′ = 2y′ = 0 at x = 1 gives C = −2."
  },
  {
    "id": "mv-ai-098",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Minimize ∫₀¹ (y′² + 6y) dx with y(0) = 0 and y(1) free.",
    "options": [
      "y = 3x²/2 + 3x",
      "y = 3x²/2",
      "y = 3x² − 6x",
      "y = 3x²/2 − 3x"
    ],
    "correctAnswer": 3,
    "explanation": "Euler–Lagrange: y″ = 3, so y = 3/2x² + Cx. The natural condition F_y′ = 2y′ = 0 at x = 1 gives C = −3."
  },
  {
    "id": "mv-ai-099",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Minimize ∫₀¹ (y′² − 2y) dx with y(0) = 0 and y(1) free.",
    "options": [
      "y = −x² + 2x",
      "y = −x²/2 + x",
      "y = −x²/2 − x",
      "y = −x²/2"
    ],
    "correctAnswer": 1,
    "explanation": "Euler–Lagrange: y″ = −1, so y = −1/2x² + Cx. The natural condition F_y′ = 2y′ = 0 at x = 1 gives C = 1."
  },
  {
    "id": "mv-ai-100",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Medium",
    "question": "Minimize ∫₀¹ (y′² + 8y) dx with y(0) = 0 and y(1) free.",
    "options": [
      "y = 2x²",
      "y = 2x² − 4x",
      "y = 2x² + 4x",
      "y = 4x² − 8x"
    ],
    "correctAnswer": 1,
    "explanation": "Euler–Lagrange: y″ = 4, so y = 2x² + Cx. The natural condition F_y′ = 2y′ = 0 at x = 1 gives C = −4."
  },
  {
    "id": "mv-ai-101",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ e^(−x² + 2x) dx over the whole real line.",
    "options": [
      "√π·e",
      "√π",
      "√π·e²",
      "√π·e⁻¹"
    ],
    "correctAnswer": 0,
    "explanation": "Complete the square: −x² + 2x = −(x − 1)² + 1, so the integral is e·√π."
  },
  {
    "id": "mv-ai-102",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ e^(−x² + 4x) dx over the whole real line.",
    "options": [
      "√π·e⁴",
      "√π·e⁻⁴",
      "√π·e⁸",
      "√π"
    ],
    "correctAnswer": 0,
    "explanation": "Complete the square: −x² + 4x = −(x − 2)² + 4, so the integral is e⁴·√π."
  },
  {
    "id": "mv-ai-103",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ e^(−x² + 6x) dx over the whole real line.",
    "options": [
      "√π·e⁻⁹",
      "√π·e⁹",
      "√π·e¹⁸",
      "√π"
    ],
    "correctAnswer": 1,
    "explanation": "Complete the square: −x² + 6x = −(x − 3)² + 9, so the integral is e⁹·√π."
  },
  {
    "id": "mv-ai-104",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ e^(−x² − 4x) dx over the whole real line.",
    "options": [
      "√π",
      "√π·e⁴",
      "√π·e⁸",
      "√π·e⁻⁴"
    ],
    "correctAnswer": 1,
    "explanation": "Complete the square: −x² − 4x = −(x + 2)² + 4, so the integral is e⁴·√π."
  },
  {
    "id": "mv-ai-105",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ e^(−x² + x) dx over the whole real line.",
    "options": [
      "√π·e^(−1/4)",
      "√π·e^(1/4)",
      "√π",
      "√π·e^(1/2)"
    ],
    "correctAnswer": 1,
    "explanation": "Complete the square: −x² + x = −(x − 1/2)² + 1/4, so the integral is e^(1/4)·√π."
  },
  {
    "id": "mv-ai-106",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ x² e^(−x²) dx over the whole real line.",
    "options": [
      "√π/2",
      "0",
      "√π",
      "√π/4"
    ],
    "correctAnswer": 0,
    "explanation": "∫ x² e^(−ax²) dx = (1/(2a))√(π/a). With a = 1: (1/2)·√π = √π/2."
  },
  {
    "id": "mv-ai-107",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ x² e^(−4x²) dx over the whole real line.",
    "options": [
      "√π/2",
      "√π/16",
      "√π/8",
      "√π/32"
    ],
    "correctAnswer": 1,
    "explanation": "∫ x² e^(−ax²) dx = (1/(2a))√(π/a). With a = 4: (1/8)·√π/2 = √π/16."
  },
  {
    "id": "mv-ai-108",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ x² e^(−9x²) dx over the whole real line.",
    "options": [
      "√π/27",
      "√π/3",
      "√π/54",
      "√π/108"
    ],
    "correctAnswer": 2,
    "explanation": "∫ x² e^(−ax²) dx = (1/(2a))√(π/a). With a = 9: (1/18)·√π/3 = √π/54."
  },
  {
    "id": "mv-ai-109",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ x² e^(−16x²) dx over the whole real line.",
    "options": [
      "√π/256",
      "√π/64",
      "√π/128",
      "√π/4"
    ],
    "correctAnswer": 2,
    "explanation": "∫ x² e^(−ax²) dx = (1/(2a))√(π/a). With a = 16: (1/32)·√π/4 = √π/128."
  },
  {
    "id": "mv-ai-110",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ x² e^(−x²/4) dx over the whole real line.",
    "options": [
      "0",
      "2√π",
      "4√π",
      "8√π"
    ],
    "correctAnswer": 2,
    "explanation": "∫ x² e^(−ax²) dx = (1/(2a))√(π/a). With a = 1/4: (1/1/2)·2√π = 4√π."
  },
  {
    "id": "mv-ai-111",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∬ e^(−(2x² + 2xy + 2y²)) dA over all of ℝ².",
    "options": [
      "π/2",
      "π/3",
      "√π/√3",
      "π/√3"
    ],
    "correctAnswer": 3,
    "explanation": "Write the exponent as xᵀAx with A = [[2, 1], [1, 2]], det A = 3 > 0. Then ∬ e^(−xᵀAx) dA = π/√det A = π/√3."
  },
  {
    "id": "mv-ai-112",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∬ e^(−(2x² + 2xy + y²)) dA over all of ℝ².",
    "options": [
      "π/√2",
      "√π",
      "π",
      "2π"
    ],
    "correctAnswer": 2,
    "explanation": "Write the exponent as xᵀAx with A = [[2, 1], [1, 1]], det A = 1 > 0. Then ∬ e^(−xᵀAx) dA = π/√det A = π."
  },
  {
    "id": "mv-ai-113",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∬ e^(−(3x² + 2xy + 3y²)) dA over all of ℝ².",
    "options": [
      "π/(2√2)",
      "π/8",
      "π/3",
      "√π/(2√2)"
    ],
    "correctAnswer": 0,
    "explanation": "Write the exponent as xᵀAx with A = [[3, 1], [1, 3]], det A = 8 > 0. Then ∬ e^(−xᵀAx) dA = π/√det A = π/(2√2)."
  },
  {
    "id": "mv-ai-114",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∬ e^(−(2x² + 2xy + 5y²)) dA over all of ℝ².",
    "options": [
      "π/9",
      "√π/3",
      "π/√10",
      "π/3"
    ],
    "correctAnswer": 3,
    "explanation": "Write the exponent as xᵀAx with A = [[2, 1], [1, 5]], det A = 9 > 0. Then ∬ e^(−xᵀAx) dA = π/√det A = π/3."
  },
  {
    "id": "mv-ai-115",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∬ e^(−(3x² + 4xy + 3y²)) dA over all of ℝ².",
    "options": [
      "√π/√5",
      "π/√5",
      "π/3",
      "π/5"
    ],
    "correctAnswer": 1,
    "explanation": "Write the exponent as xᵀAx with A = [[3, 2], [2, 3]], det A = 5 > 0. Then ∬ e^(−xᵀAx) dA = π/√det A = π/√5."
  },
  {
    "id": "mv-ai-116",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ e^(−|x|²) dV over all of ℝ².",
    "options": [
      "2π",
      "π²",
      "π^(3/2)",
      "π"
    ],
    "correctAnswer": 3,
    "explanation": "The integrand factors into 2 one-dimensional Gaussians, each equal to √π, so the result is (√π)² = π."
  },
  {
    "id": "mv-ai-117",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ e^(−|x|²) dV over all of ℝ³.",
    "options": [
      "π^(3/2)",
      "π²",
      "3π",
      "π³"
    ],
    "correctAnswer": 0,
    "explanation": "The integrand factors into 3 one-dimensional Gaussians, each equal to √π, so the result is (√π)³ = π^(3/2)."
  },
  {
    "id": "mv-ai-118",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ e^(−|x|²) dV over all of ℝ⁴.",
    "options": [
      "π²",
      "π^(5/2)",
      "4π",
      "π⁴"
    ],
    "correctAnswer": 0,
    "explanation": "The integrand factors into 4 one-dimensional Gaussians, each equal to √π, so the result is (√π)⁴ = π²."
  },
  {
    "id": "mv-ai-119",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ e^(−|x|²) dV over all of ℝ⁵.",
    "options": [
      "π³",
      "π^(5/2)",
      "π⁵",
      "5π"
    ],
    "correctAnswer": 1,
    "explanation": "The integrand factors into 5 one-dimensional Gaussians, each equal to √π, so the result is (√π)⁵ = π^(5/2)."
  },
  {
    "id": "mv-ai-120",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Evaluate ∫ e^(−|x|²) dV over all of ℝ⁶.",
    "options": [
      "π³",
      "π^(7/2)",
      "π⁶",
      "6π"
    ],
    "correctAnswer": 0,
    "explanation": "The integrand factors into 6 one-dimensional Gaussians, each equal to √π, so the result is (√π)⁶ = π³."
  },
  {
    "id": "mv-ai-121",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Find the constant c that makes c·e^(−(x − 3)²/2) a probability density on ℝ.",
    "options": [
      "1/(2π)",
      "1/(2√π)",
      "1/√(2π)",
      "1/√π"
    ],
    "correctAnswer": 2,
    "explanation": "The exponent is −(x − 3)²/(2σ²) with σ = 1. With a = 1/(2σ²): ∫ e^(−a(x − 3)²) dx = √(π/a) = σ√(2π), so c = 1/(σ√(2π)). The shift by 3 does not matter."
  },
  {
    "id": "mv-ai-122",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Find the constant c that makes c·e^(−(x − 3)²/8) a probability density on ℝ.",
    "options": [
      "1/√π",
      "1/(4π)",
      "1/(4√π)",
      "1/(2√(2π))"
    ],
    "correctAnswer": 3,
    "explanation": "The exponent is −(x − 3)²/(2σ²) with σ = 2. With a = 1/(2σ²): ∫ e^(−a(x − 3)²) dx = √(π/a) = σ√(2π), so c = 1/(σ√(2π)). The shift by 3 does not matter."
  },
  {
    "id": "mv-ai-123",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Find the constant c that makes c·e^(−(x − 3)²/18) a probability density on ℝ.",
    "options": [
      "1/(6π)",
      "1/(3√(2π))",
      "1/(6√π)",
      "1/√π"
    ],
    "correctAnswer": 1,
    "explanation": "The exponent is −(x − 3)²/(2σ²) with σ = 3. With a = 1/(2σ²): ∫ e^(−a(x − 3)²) dx = √(π/a) = σ√(2π), so c = 1/(σ√(2π)). The shift by 3 does not matter."
  },
  {
    "id": "mv-ai-124",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Find the constant c that makes c·e^(−(x − 3)²/32) a probability density on ℝ.",
    "options": [
      "1/(8√π)",
      "1/(8π)",
      "1/√π",
      "1/(4√(2π))"
    ],
    "correctAnswer": 3,
    "explanation": "The exponent is −(x − 3)²/(2σ²) with σ = 4. With a = 1/(2σ²): ∫ e^(−a(x − 3)²) dx = √(π/a) = σ√(2π), so c = 1/(σ√(2π)). The shift by 3 does not matter."
  },
  {
    "id": "mv-ai-125",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Improper Multiple Integrals & the Gaussian Integral",
    "difficulty": "Hard",
    "question": "Find the constant c that makes c·e^(−(x − 3)²/50) a probability density on ℝ.",
    "options": [
      "1/√π",
      "1/(10√π)",
      "1/(10π)",
      "1/(5√(2π))"
    ],
    "correctAnswer": 3,
    "explanation": "The exponent is −(x − 3)²/(2σ²) with σ = 5. With a = 1/(2σ²): ∫ e^(−a(x − 3)²) dx = √(π/a) = σ√(2π), so c = 1/(σ√(2π)). The shift by 3 does not matter."
  },
  {
    "id": "mv-ai-126",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "Minimize ∫₀¹ y′² dx subject to ∫₀¹ y dx = 1 and y(0) = y(1) = 0.",
    "options": [
      "y = 4x(1 − x)",
      "y = 6x(1 − x)",
      "y = sin(πx)",
      "y = x(1 − x)"
    ],
    "correctAnswer": 1,
    "explanation": "With F* = y′² + λy, y″ = λ/2, so y = c·x(1 − x). The constraint gives c/6 = 1, so c = 6."
  },
  {
    "id": "mv-ai-127",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "Minimize ∫₀¹ y′² dx subject to ∫₀¹ y dx = 2 and y(0) = y(1) = 0.",
    "options": [
      "y = 12x(1 − x)",
      "y = 2x(1 − x)",
      "y = 8x(1 − x)",
      "y = 2sin(πx)"
    ],
    "correctAnswer": 0,
    "explanation": "With F* = y′² + λy, y″ = λ/2, so y = c·x(1 − x). The constraint gives c/6 = 2, so c = 12."
  },
  {
    "id": "mv-ai-128",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "Minimize ∫₀¹ y′² dx subject to ∫₀¹ y dx = 1/2 and y(0) = y(1) = 0.",
    "options": [
      "y = x(1 − x)/2",
      "y = (1/2)sin(πx)",
      "y = 3x(1 − x)",
      "y = 2x(1 − x)"
    ],
    "correctAnswer": 2,
    "explanation": "With F* = y′² + λy, y″ = λ/2, so y = c·x(1 − x). The constraint gives c/6 = 1/2, so c = 3."
  },
  {
    "id": "mv-ai-129",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "Minimize ∫₀¹ y′² dx subject to ∫₀¹ y dx = 1/3 and y(0) = y(1) = 0.",
    "options": [
      "y = x(1 − x)/3",
      "y = 4x(1 − x)/3",
      "y = 2x(1 − x)",
      "y = (1/3)sin(πx)"
    ],
    "correctAnswer": 2,
    "explanation": "With F* = y′² + λy, y″ = λ/2, so y = c·x(1 − x). The constraint gives c/6 = 1/3, so c = 2."
  },
  {
    "id": "mv-ai-130",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "Minimize ∫₀¹ y′² dx subject to ∫₀¹ y dx = 3 and y(0) = y(1) = 0.",
    "options": [
      "y = 18x(1 − x)",
      "y = 3x(1 − x)",
      "y = 3sin(πx)",
      "y = 12x(1 − x)"
    ],
    "correctAnswer": 0,
    "explanation": "With F* = y′² + λy, y″ = λ/2, so y = c·x(1 − x). The constraint gives c/6 = 3, so c = 18."
  },
  {
    "id": "mv-ai-131",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "For F = y′², compute F_y′y′ (the quantity in Legendre's condition).",
    "options": [
      "2",
      "2y′",
      "0",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "Differentiate twice in y′: 2y′, then 2."
  },
  {
    "id": "mv-ai-132",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "For F = √(1 + y′²), compute F_y′y′ (the quantity in Legendre's condition).",
    "options": [
      "(1 + y′²)^(−1/2)",
      "0",
      "(1 + y′²)^(−3/2)",
      "y′/√(1 + y′²)"
    ],
    "correctAnswer": 2,
    "explanation": "F_y′ = y′(1 + y′²)^(−1/2); differentiating again gives (1 + y′²)^(−3/2) > 0."
  },
  {
    "id": "mv-ai-133",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "For F = y′⁴, compute F_y′y′ (the quantity in Legendre's condition).",
    "options": [
      "24y′",
      "4y′³",
      "12y′²",
      "12y′"
    ],
    "correctAnswer": 2,
    "explanation": "F_y′ = 4y′³ and F_y′y′ = 12y′² ≥ 0."
  },
  {
    "id": "mv-ai-134",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "For F = e^(y′), compute F_y′y′ (the quantity in Legendre's condition).",
    "options": [
      "0",
      "e^(y′)",
      "1",
      "y′e^(y′)"
    ],
    "correctAnswer": 1,
    "explanation": "Every derivative of e^(y′) in y′ is e^(y′) > 0."
  },
  {
    "id": "mv-ai-135",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "For F = y² − y′², compute F_y′y′ (the quantity in Legendre's condition).",
    "options": [
      "2",
      "−2y′",
      "2y",
      "−2"
    ],
    "correctAnswer": 3,
    "explanation": "F_y′ = −2y′ and F_y′y′ = −2 < 0, so Legendre's condition for a minimum fails."
  },
  {
    "id": "mv-ai-136",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "Find the Euler–Lagrange equation for J[u] = ∬ ½(u_x² + u_y²) dA.",
    "options": [
      "u_xx − u_yy = 0",
      "u_xx + u_yy = 1",
      "u_xx + u_yy = 0",
      "u_x + u_y = 0"
    ],
    "correctAnswer": 2,
    "explanation": "Use F_u − ∂/∂x F_u_x − ∂/∂y F_u_y = 0: F_u = 0, F_u_x = u_x, F_u_y = u_y."
  },
  {
    "id": "mv-ai-137",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "Find the Euler–Lagrange equation for J[u] = ∬ ½(u_x² + u_y²) + f(x, y)·u dA.",
    "options": [
      "u_xx + u_yy = −f",
      "u_x + u_y = f",
      "u_xx + u_yy = 0",
      "u_xx + u_yy = f"
    ],
    "correctAnswer": 3,
    "explanation": "Use F_u − ∂/∂x F_u_x − ∂/∂y F_u_y = 0: F_u = f, so f − u_xx − u_yy = 0: Poisson's equation."
  },
  {
    "id": "mv-ai-138",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "Find the Euler–Lagrange equation for J[u] = ∬ ½(u_x² + u_y²) − ½λu² dA.",
    "options": [
      "u_xx + u_yy = λ",
      "u_xx + u_yy − λu = 0",
      "λu = 0",
      "u_xx + u_yy + λu = 0"
    ],
    "correctAnswer": 3,
    "explanation": "Use F_u − ∂/∂x F_u_x − ∂/∂y F_u_y = 0: F_u = −λu, so −λu − u_xx − u_yy = 0."
  },
  {
    "id": "mv-ai-139",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "Find the Euler–Lagrange equation for J[u] = ∬ ½(3u_x² + 5u_y²) dA.",
    "options": [
      "u_xx + u_yy = 0",
      "3u_xx + 5u_yy = 0",
      "5u_xx + 3u_yy = 0",
      "3u_x + 5u_y = 0"
    ],
    "correctAnswer": 1,
    "explanation": "Use F_u − ∂/∂x F_u_x − ∂/∂y F_u_y = 0: F_u_x = 3u_x and F_u_y = 5u_y."
  },
  {
    "id": "mv-ai-140",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "Find the Euler–Lagrange equation for J[u] = ∬ ½(u_x² + u_y²) + u dA.",
    "options": [
      "u_xx + u_yy = 0",
      "u = 1",
      "u_xx + u_yy = 1",
      "u_xx + u_yy = −1"
    ],
    "correctAnswer": 2,
    "explanation": "Use F_u − ∂/∂x F_u_x − ∂/∂y F_u_y = 0: F_u = 1, so 1 − u_xx − u_yy = 0."
  },
  {
    "id": "mv-ai-141",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "For the catenary y = 2·cosh(x/2), what is the Beltrami constant y/√(1 + y′²)?",
    "options": [
      "2",
      "1/2",
      "1",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "y′ = sinh(x/2) and √(1 + y′²) = cosh(x/2), so y/√(1 + y′²) = 2: also the lowest height of the curve."
  },
  {
    "id": "mv-ai-142",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "For the catenary y = 3·cosh(x/3), what is the Beltrami constant y/√(1 + y′²)?",
    "options": [
      "6",
      "3",
      "9",
      "1/3"
    ],
    "correctAnswer": 1,
    "explanation": "y′ = sinh(x/3) and √(1 + y′²) = cosh(x/3), so y/√(1 + y′²) = 3: also the lowest height of the curve."
  },
  {
    "id": "mv-ai-143",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "For the catenary y = 6·cosh(x/6), what is the Beltrami constant y/√(1 + y′²)?",
    "options": [
      "12",
      "6",
      "1/6",
      "36"
    ],
    "correctAnswer": 1,
    "explanation": "y′ = sinh(x/6) and √(1 + y′²) = cosh(x/6), so y/√(1 + y′²) = 6: also the lowest height of the curve."
  },
  {
    "id": "mv-ai-144",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "For the catenary y = 5·cosh(x/5), what is the Beltrami constant y/√(1 + y′²)?",
    "options": [
      "1/5",
      "5",
      "10",
      "25"
    ],
    "correctAnswer": 1,
    "explanation": "y′ = sinh(x/5) and √(1 + y′²) = cosh(x/5), so y/√(1 + y′²) = 5: also the lowest height of the curve."
  },
  {
    "id": "mv-ai-145",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "For the catenary y = 4·cosh(x/4), what is the Beltrami constant y/√(1 + y′²)?",
    "options": [
      "4",
      "8",
      "16",
      "1/4"
    ],
    "correctAnswer": 0,
    "explanation": "y′ = sinh(x/4) and √(1 + y′²) = cosh(x/4), so y/√(1 + y′²) = 4: also the lowest height of the curve."
  },
  {
    "id": "mv-ai-146",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "The cycloid x = (θ − sin θ), y = (1 − cos θ) solves the brachistochrone. What is the constant k in y(1 + y′²) = k?",
    "options": [
      "1",
      "4",
      "1/2",
      "2"
    ],
    "correctAnswer": 3,
    "explanation": "y′ = sin θ/(1 − cos θ) gives 1 + y′² = 2/(1 − cos θ), so y(1 + y′²) = 1(1 − cos θ)·2/(1 − cos θ) = 2."
  },
  {
    "id": "mv-ai-147",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "The cycloid x = 2(θ − sin θ), y = 2(1 − cos θ) solves the brachistochrone. What is the constant k in y(1 + y′²) = k?",
    "options": [
      "8",
      "2",
      "1",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "y′ = sin θ/(1 − cos θ) gives 1 + y′² = 2/(1 − cos θ), so y(1 + y′²) = 2(1 − cos θ)·2/(1 − cos θ) = 4."
  },
  {
    "id": "mv-ai-148",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "The cycloid x = 3(θ − sin θ), y = 3(1 − cos θ) solves the brachistochrone. What is the constant k in y(1 + y′²) = k?",
    "options": [
      "3",
      "9",
      "6",
      "12"
    ],
    "correctAnswer": 2,
    "explanation": "y′ = sin θ/(1 − cos θ) gives 1 + y′² = 2/(1 − cos θ), so y(1 + y′²) = 3(1 − cos θ)·2/(1 − cos θ) = 6."
  },
  {
    "id": "mv-ai-149",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "The cycloid x = (1/2)(θ − sin θ), y = (1/2)(1 − cos θ) solves the brachistochrone. What is the constant k in y(1 + y′²) = k?",
    "options": [
      "1",
      "1/2",
      "1/4",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "y′ = sin θ/(1 − cos θ) gives 1 + y′² = 2/(1 − cos θ), so y(1 + y′²) = 1/2(1 − cos θ)·2/(1 − cos θ) = 1."
  },
  {
    "id": "mv-ai-150",
    "module": "Advanced Integration & Variational Methods",
    "topic": "Calculus of Variations (Euler–Lagrange Equation)",
    "difficulty": "Hard",
    "question": "The cycloid x = 5(θ − sin θ), y = 5(1 − cos θ) solves the brachistochrone. What is the constant k in y(1 + y′²) = k?",
    "options": [
      "25",
      "5",
      "20",
      "10"
    ],
    "correctAnswer": 3,
    "explanation": "y′ = sin θ/(1 − cos θ) gives 1 + y′² = 2/(1 − cos θ), so y(1 + y′²) = 5(1 − cos θ)·2/(1 − cos θ) = 10."
  },
];
