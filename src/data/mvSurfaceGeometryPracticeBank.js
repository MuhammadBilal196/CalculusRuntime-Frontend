/**
 * Practice bank — Geometry of Surfaces (Multivariable Calculus).
 * 150 MCQs: 50 Easy / 50 Medium / 50 Hard, split evenly across the module's two topics
 * (Surface Metrics and the First Fundamental Form; Surface Curvature and Geodesics).
 * Each item: unique string id, topic, module, difficulty, four distinct options, one correct
 * answer (index), and an explanation. Answers are computed by the generator, not typed.
 */
export const MV_SURFACE_GEOMETRY_PRACTICE_BANK = [
  {
    "id": "mv-sg-m-e-001",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "At a point of a parametrized surface, r_u = (1, 2, 0) and r_v = (0, 1, 3). Find the coefficient E of the first fundamental form.",
    "options": [
      "5",
      "2",
      "10",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "E = r_u · r_u. Here E = 5, F = 2, G = 10, so E = 5."
  },
  {
    "id": "mv-sg-m-e-002",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "At a point, the first fundamental form has E = 4, F = 2, G = 5. Compute EG - F².",
    "options": [
      "18",
      "16",
      "5",
      "20"
    ],
    "correctAnswer": 1,
    "explanation": "EG - F² = 4·5 - (2)² = 20 - 4 = 16. It is positive, so the point is regular and |r_u × r_v| = √16."
  },
  {
    "id": "mv-sg-m-e-003",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the graph surface z = x² + 2y², parametrized as (x, y, f(x, y)), find E at (x, y) = (1, 0).",
    "options": [
      "1",
      "4",
      "3",
      "5"
    ],
    "correctAnswer": 3,
    "explanation": "For a graph, E = 1 + f_x². Here f_x = 2x = 2 at x = 1, so E = 1 + 4 = 5."
  },
  {
    "id": "mv-sg-m-e-004",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the graph surface z = 2x² + y², parametrized as (x, y, f(x, y)), find E at (x, y) = (1, 3).",
    "options": [
      "16",
      "17",
      "37",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "For a graph, E = 1 + f_x². Here f_x = 4x = 4 at x = 1, so E = 1 + 16 = 17."
  },
  {
    "id": "mv-sg-m-e-005",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the graph surface z = 3x² - y², parametrized as (x, y, f(x, y)), find E at (x, y) = (-1, 2).",
    "options": [
      "37",
      "-5",
      "36",
      "17"
    ],
    "correctAnswer": 0,
    "explanation": "For a graph, E = 1 + f_x². Here f_x = 6x = -6 at x = -1, so E = 1 + 36 = 37."
  },
  {
    "id": "mv-sg-m-e-006",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the graph surface z = x² + y², parametrized as (x, y, f(x, y)), find E at (x, y) = (2, 1).",
    "options": [
      "5",
      "17",
      "8",
      "16"
    ],
    "correctAnswer": 1,
    "explanation": "For a graph, E = 1 + f_x². Here f_x = 2x = 4 at x = 2, so E = 1 + 16 = 17."
  },
  {
    "id": "mv-sg-m-e-007",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the graph surface z = -2x² + 3y², parametrized as (x, y, f(x, y)), find E at (x, y) = (1, -1).",
    "options": [
      "16",
      "17",
      "-3",
      "37"
    ],
    "correctAnswer": 1,
    "explanation": "For a graph, E = 1 + f_x². Here f_x = -4x = -4 at x = 1, so E = 1 + 16 = 17."
  },
  {
    "id": "mv-sg-m-e-008",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the cylinder r(u, v) = (2 cos u, 2 sin u, v), what is the coefficient E?",
    "options": [
      "4",
      "2",
      "0",
      "1"
    ],
    "correctAnswer": 0,
    "explanation": "r_u = (-2 sin u, 2 cos u, 0) and r_v = (0, 0, 1), so E = 4, F = 0 and G = 1."
  },
  {
    "id": "mv-sg-m-e-009",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the cylinder r(u, v) = (3 cos u, 3 sin u, v), what is the coefficient G?",
    "options": [
      "6",
      "1",
      "9",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": "r_u = (-3 sin u, 3 cos u, 0) and r_v = (0, 0, 1), so E = 9, F = 0 and G = 1."
  },
  {
    "id": "mv-sg-m-e-010",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the cylinder r(u, v) = (5 cos u, 5 sin u, v), what is the coefficient E?",
    "options": [
      "5",
      "1",
      "25",
      "10"
    ],
    "correctAnswer": 2,
    "explanation": "r_u = (-5 sin u, 5 cos u, 0) and r_v = (0, 0, 1), so E = 25, F = 0 and G = 1."
  },
  {
    "id": "mv-sg-m-e-011",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the cylinder r(u, v) = (4 cos u, 4 sin u, v), what is the coefficient F?",
    "options": [
      "0",
      "8",
      "4",
      "16"
    ],
    "correctAnswer": 0,
    "explanation": "r_u = (-4 sin u, 4 cos u, 0) and r_v = (0, 0, 1), so E = 16, F = 0 and G = 1."
  },
  {
    "id": "mv-sg-m-e-012",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the plane r(u, v) = (2u, 3v, 0), find the area element factor √(EG - F²).",
    "options": [
      "36",
      "5",
      "6",
      "13"
    ],
    "correctAnswer": 2,
    "explanation": "E = 4, F = 0, G = 9, so √(EG - F²) = √36 = 6: each parameter square is stretched by 2 and 3."
  },
  {
    "id": "mv-sg-m-e-013",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the plane r(u, v) = (3u, 5v, 0), find the area element factor √(EG - F²).",
    "options": [
      "15",
      "34",
      "8",
      "225"
    ],
    "correctAnswer": 0,
    "explanation": "E = 9, F = 0, G = 25, so √(EG - F²) = √225 = 15: each parameter square is stretched by 3 and 5."
  },
  {
    "id": "mv-sg-m-e-014",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the plane r(u, v) = (4u, v, 0), find the area element factor √(EG - F²).",
    "options": [
      "5",
      "16",
      "4",
      "17"
    ],
    "correctAnswer": 2,
    "explanation": "E = 16, F = 0, G = 1, so √(EG - F²) = √16 = 4: each parameter square is stretched by 4 and 1."
  },
  {
    "id": "mv-sg-m-e-015",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the plane r(u, v) = (6u, 2v, 0), find the area element factor √(EG - F²).",
    "options": [
      "8",
      "12",
      "144",
      "40"
    ],
    "correctAnswer": 1,
    "explanation": "E = 36, F = 0, G = 4, so √(EG - F²) = √144 = 12: each parameter square is stretched by 6 and 2."
  },
  {
    "id": "mv-sg-m-e-016",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "On the sphere of radius 2, r(φ, θ) = (2 sin φ cos θ, 2 sin φ sin θ, 2 cos φ), find G = r_θ · r_θ at φ = π/6.",
    "options": [
      "3",
      "1/2",
      "4",
      "1"
    ],
    "correctAnswer": 3,
    "explanation": "G = R² sin²φ = 4 · 1/4 = 1. (E = R² = 4 and F = 0.)"
  },
  {
    "id": "mv-sg-m-e-017",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "On the sphere of radius 3, r(φ, θ) = (3 sin φ cos θ, 3 sin φ sin θ, 3 cos φ), find G = r_θ · r_θ at φ = π/3.",
    "options": [
      "3",
      "9/4",
      "27/4",
      "9"
    ],
    "correctAnswer": 2,
    "explanation": "G = R² sin²φ = 9 · 3/4 = 27/4. (E = R² = 9 and F = 0.)"
  },
  {
    "id": "mv-sg-m-e-018",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "On the sphere of radius 4, r(φ, θ) = (4 sin φ cos θ, 4 sin φ sin θ, 4 cos φ), find G = r_θ · r_θ at φ = π/6.",
    "options": [
      "1",
      "12",
      "4",
      "16"
    ],
    "correctAnswer": 2,
    "explanation": "G = R² sin²φ = 16 · 1/4 = 4. (E = R² = 16 and F = 0.)"
  },
  {
    "id": "mv-sg-m-e-019",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "The u- and v-coordinate curves of a parametrized surface meet at right angles at every point exactly when:",
    "options": [
      "F = 0 everywhere",
      "E = G everywhere",
      "EG - F² = 1 everywhere",
      "E = 0 everywhere"
    ],
    "correctAnswer": 0,
    "explanation": "The angle ω between coordinate curves satisfies cos ω = F/√(EG), so ω = 90° iff F = 0."
  },
  {
    "id": "mv-sg-m-e-020",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "A parametrization r(u, v) is regular at a point exactly when:",
    "options": [
      "r_u and r_v are unit vectors",
      "r_u × r_v ≠ 0 there",
      "E = G there",
      "r_u · r_v = 0 there"
    ],
    "correctAnswer": 1,
    "explanation": "Regular means r_u and r_v are linearly independent, i.e. their cross product is nonzero."
  },
  {
    "id": "mv-sg-m-e-021",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "The surface area element of a parametrized surface, written with the first fundamental form, is:",
    "options": [
      "(EG - F²) du dv",
      "√(EG - F²) du dv",
      "√(E + G) du dv",
      "(E + G) du dv"
    ],
    "correctAnswer": 1,
    "explanation": "dA = |r_u × r_v| du dv, and Lagrange's identity gives |r_u × r_v|² = EG - F²."
  },
  {
    "id": "mv-sg-m-e-022",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the Cartesian plane r(u, v) = (u, v, 0), the line element ds² equals:",
    "options": [
      "du² + dv²",
      "du² + 2 du dv + dv²",
      "u² du² + dv²",
      "2 du dv"
    ],
    "correctAnswer": 0,
    "explanation": "r_u = (1, 0, 0), r_v = (0, 1, 0), so E = G = 1 and F = 0."
  },
  {
    "id": "mv-sg-m-e-023",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "Geometrically, the coefficient E = r_u · r_u is:",
    "options": [
      "The angle between the coordinate curves",
      "The curvature of the surface",
      "The squared speed along the u-coordinate curves",
      "The area of the parameter domain"
    ],
    "correctAnswer": 2,
    "explanation": "E = |r_u|², and r_u is the velocity of the curve v = constant."
  },
  {
    "id": "mv-sg-m-e-024",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For a surface of revolution r(u, v) = (f(v) cos u, f(v) sin u, g(v)) with f > 0, the coefficient F is:",
    "options": [
      "f(v)²",
      "f'(v)² + g'(v)²",
      "0",
      "f(v) f'(v)"
    ],
    "correctAnswer": 2,
    "explanation": "r_u · r_v = -f f' sin u cos u + f f' sin u cos u = 0: parallels and meridians are always perpendicular."
  },
  {
    "id": "mv-sg-m-e-025",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "The first fundamental form at a point is best described as:",
    "options": [
      "A vector normal to the surface",
      "A number that measures bending",
      "A positive-definite quadratic form on the tangent plane",
      "A linear function on the tangent plane"
    ],
    "correctAnswer": 2,
    "explanation": "I(a r_u + b r_v) = E a² + 2F ab + G b², which is positive for every nonzero tangent vector at a regular point."
  },
  {
    "id": "mv-sg-m-m-001",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "On the cylinder r(u, v) = (3 cos u, 3 sin u, v), find the length of the curve u = t, v = 4t for 0 ≤ t ≤ 2π.",
    "options": [
      "10π",
      "6π",
      "2π√17",
      "14π"
    ],
    "correctAnswer": 0,
    "explanation": "E = 9, F = 0, G = 1 and (u', v') = (1, 4), so the speed is √(9 + 16) = 5 and L = 2π·5."
  },
  {
    "id": "mv-sg-m-m-002",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "On the cylinder r(u, v) = (5 cos u, 5 sin u, v), find the length of the curve u = t, v = 12t for 0 ≤ t ≤ 2π.",
    "options": [
      "2π√145",
      "26π",
      "34π",
      "10π"
    ],
    "correctAnswer": 1,
    "explanation": "E = 25, F = 0, G = 1 and (u', v') = (1, 12), so the speed is √(25 + 144) = 13 and L = 2π·13."
  },
  {
    "id": "mv-sg-m-m-003",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "On the cylinder r(u, v) = (2 cos u, 2 sin u, v), find the length of the curve u = t, v = 3t for 0 ≤ t ≤ 2π.",
    "options": [
      "2π√13",
      "2π√10",
      "10π",
      "4π"
    ],
    "correctAnswer": 0,
    "explanation": "E = 4, F = 0, G = 1 and (u', v') = (1, 3), so the speed is √(4 + 9) = √13 and L = 2π·√13."
  },
  {
    "id": "mv-sg-m-m-004",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "On the cylinder r(u, v) = (6 cos u, 6 sin u, v), find the length of the curve u = t, v = 8t for 0 ≤ t ≤ 2π.",
    "options": [
      "28π",
      "2π√65",
      "20π",
      "12π"
    ],
    "correctAnswer": 2,
    "explanation": "E = 36, F = 0, G = 1 and (u', v') = (1, 8), so the speed is √(36 + 64) = 10 and L = 2π·10."
  },
  {
    "id": "mv-sg-m-m-005",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "On the sphere of radius 3 with coordinates (φ, θ), find the length of the latitude circle φ = π/6, 0 ≤ θ ≤ 2π.",
    "options": [
      "6π",
      "3π√3",
      "3π",
      "3π/2"
    ],
    "correctAnswer": 2,
    "explanation": "Along the latitude, φ' = 0 and θ' = 1, so L = ∫ √G dθ = 2π · R sin φ = 2π · 3 sin(π/6) = 3π."
  },
  {
    "id": "mv-sg-m-m-006",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "On the sphere of radius 2 with coordinates (φ, θ), find the length of the latitude circle φ = π/3, 0 ≤ θ ≤ 2π.",
    "options": [
      "2π√3",
      "π√3",
      "4π",
      "2π"
    ],
    "correctAnswer": 0,
    "explanation": "Along the latitude, φ' = 0 and θ' = 1, so L = ∫ √G dθ = 2π · R sin φ = 2π · 2 sin(π/3) = 2π√3."
  },
  {
    "id": "mv-sg-m-m-007",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "On the sphere of radius 4 with coordinates (φ, θ), find the length of the latitude circle φ = π/4, 0 ≤ θ ≤ 2π.",
    "options": [
      "4π",
      "8π",
      "2π√2",
      "4π√2"
    ],
    "correctAnswer": 3,
    "explanation": "Along the latitude, φ' = 0 and θ' = 1, so L = ∫ √G dθ = 2π · R sin φ = 2π · 4 sin(π/4) = 4π√2."
  },
  {
    "id": "mv-sg-m-m-008",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "On the sphere of radius 6 with coordinates (φ, θ), find the length of the latitude circle φ = π/6, 0 ≤ θ ≤ 2π.",
    "options": [
      "3π",
      "6π√3",
      "6π",
      "12π"
    ],
    "correctAnswer": 2,
    "explanation": "Along the latitude, φ' = 0 and θ' = 1, so L = ∫ √G dθ = 2π · R sin φ = 2π · 6 sin(π/6) = 6π."
  },
  {
    "id": "mv-sg-m-m-009",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 4, F = 2, G = 9. Find the cosine of the angle between the u- and v-coordinate curves.",
    "options": [
      "1/3",
      "1/18",
      "2/13",
      "-1/3"
    ],
    "correctAnswer": 0,
    "explanation": "cos ω = F/√(EG) = 2/√36 = 1/3."
  },
  {
    "id": "mv-sg-m-m-010",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 1, F = 1, G = 4. Find the cosine of the angle between the u- and v-coordinate curves.",
    "options": [
      "1/2",
      "1/5",
      "-1/2",
      "1/4"
    ],
    "correctAnswer": 0,
    "explanation": "cos ω = F/√(EG) = 1/√4 = 1/2."
  },
  {
    "id": "mv-sg-m-m-011",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 9, F = 2, G = 1. Find the cosine of the angle between the u- and v-coordinate curves.",
    "options": [
      "2/9",
      "2/3",
      "-2/3",
      "1/5"
    ],
    "correctAnswer": 1,
    "explanation": "cos ω = F/√(EG) = 2/√9 = 2/3."
  },
  {
    "id": "mv-sg-m-m-012",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 4, F = -3, G = 9. Find the cosine of the angle between the u- and v-coordinate curves.",
    "options": [
      "-1/12",
      "-1/2",
      "1/2",
      "-3/13"
    ],
    "correctAnswer": 1,
    "explanation": "cos ω = F/√(EG) = -3/√36 = -1/2."
  },
  {
    "id": "mv-sg-m-m-013",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 16, F = 4, G = 4. Find the cosine of the angle between the u- and v-coordinate curves.",
    "options": [
      "1/2",
      "1/16",
      "1/5",
      "-1/2"
    ],
    "correctAnswer": 0,
    "explanation": "cos ω = F/√(EG) = 4/√64 = 1/2."
  },
  {
    "id": "mv-sg-m-m-014",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 25, F = 6, G = 4. Find the cosine of the angle between the u- and v-coordinate curves.",
    "options": [
      "6/29",
      "3/50",
      "-3/5",
      "3/5"
    ],
    "correctAnswer": 3,
    "explanation": "cos ω = F/√(EG) = 6/√100 = 3/5."
  },
  {
    "id": "mv-sg-m-m-015",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point with E = 2, F = 1, G = 3, find the length of the tangent vector w = r_u + r_v.",
    "options": [
      "√7",
      "7",
      "√6",
      "√5"
    ],
    "correctAnswer": 0,
    "explanation": "|w|² = E a² + 2F ab + G b² = 2·1 + 2·1·1 + 3·1 = 7, so |w| = √7."
  },
  {
    "id": "mv-sg-m-m-016",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point with E = 1, F = 1, G = 3, find the length of the tangent vector w = 2r_u - r_v.",
    "options": [
      "√5",
      "√7",
      "3",
      "√3"
    ],
    "correctAnswer": 3,
    "explanation": "|w|² = E a² + 2F ab + G b² = 1·4 + 2·1·(-2) + 3·1 = 3, so |w| = √3."
  },
  {
    "id": "mv-sg-m-m-017",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point with E = 3, F = -1, G = 2, find the length of the tangent vector w = r_u + 2r_v.",
    "options": [
      "√11",
      "√7",
      "7",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": "|w|² = E a² + 2F ab + G b² = 3·1 + 2·(-1)·2 + 2·4 = 7, so |w| = √7."
  },
  {
    "id": "mv-sg-m-m-018",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "Find the area of the piece of the cylinder r(u, v) = (2 cos u, 2 sin u, v) with 0 ≤ u ≤ π/2 and 0 ≤ v ≤ 3.",
    "options": [
      "3π/2",
      "6π",
      "π",
      "3π"
    ],
    "correctAnswer": 3,
    "explanation": "√(EG - F²) = √(4·1) = 2, so A = ∫∫ 2 du dv = 2 · π/2 · 3 = 3π."
  },
  {
    "id": "mv-sg-m-m-019",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "Using dA = R² sin φ dφ dθ, find the area of the spherical cap 0 ≤ φ ≤ π/3 on the sphere of radius 2.",
    "options": [
      "2π",
      "12π",
      "16π",
      "4π"
    ],
    "correctAnswer": 3,
    "explanation": "A = ∫₀^{2π} ∫₀^α R² sin φ dφ dθ = 2πR²(1 - cos α) = 2π·4·(1 - 1/2) = 4π."
  },
  {
    "id": "mv-sg-m-m-020",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "Find the area of the part of the plane z = 2x + 2y lying over the rectangle 0 ≤ x ≤ 1, 0 ≤ y ≤ 1.",
    "options": [
      "3",
      "9",
      "1",
      "2√2"
    ],
    "correctAnswer": 0,
    "explanation": "As a graph E = 1 + 4, F = 4, G = 1 + 4, so EG - F² = 1 + p² + q² = 9 and A = 1·3 = 3."
  },
  {
    "id": "mv-sg-m-m-021",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "For the graph z = x² + y², find F at (x, y) = (1, 2).",
    "options": [
      "8",
      "9",
      "4",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "f_x = 2x and f_y = 2y, so F = f_x f_y = 2·4 = 8. The coordinate curves are not perpendicular there."
  },
  {
    "id": "mv-sg-m-m-022",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "For the graph z = 2(x² + y²), find F at (x, y) = (1, 1).",
    "options": [
      "8",
      "16",
      "17",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "f_x = 4x and f_y = 4y, so F = f_x f_y = 4·4 = 16. The coordinate curves are not perpendicular there."
  },
  {
    "id": "mv-sg-m-m-023",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "For the graph z = 3(x² + y²), find F at (x, y) = (1, -1).",
    "options": [
      "-12",
      "-6",
      "-35",
      "-36"
    ],
    "correctAnswer": 3,
    "explanation": "f_x = 6x and f_y = 6y, so F = f_x f_y = 6·(-6) = -36. The coordinate curves are not perpendicular there."
  },
  {
    "id": "mv-sg-m-m-024",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "For the paraboloid r(u, v) = (v cos u, v sin u, v²), find G = r_v · r_v at v = 2.",
    "options": [
      "4",
      "16",
      "17",
      "21"
    ],
    "correctAnswer": 2,
    "explanation": "Here f(v) = v and G = f'(v)² + g'(v)² = 1 + 4v²; at v = 2 this is 17. Also E = v² and F = 0."
  },
  {
    "id": "mv-sg-m-m-025",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "For the cone r(u, v) = (v cos u, v sin u, 3v), find G = r_v · r_v at v = 5.",
    "options": [
      "9",
      "10",
      "25",
      "35"
    ],
    "correctAnswer": 1,
    "explanation": "Here f(v) = v and G = f'(v)² + g'(v)² = 1 + 9 = 10; at v = 5 this is 10. Also E = v² and F = 0."
  },
  {
    "id": "mv-sg-m-h-001",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Let r̃(s, t) = r(3s, t). In terms of the coefficients E, F, G of r (evaluated at the corresponding point), (Ẽ, F̃, G̃) equals:",
    "options": [
      "(9E, F, G)",
      "(9E, 9F, G)",
      "(9E, 3F, G)",
      "(3E, 3F, G)"
    ],
    "correctAnswer": 2,
    "explanation": "By the chain rule r̃_s = 3r_u and r̃_t = r_v, so Ẽ = 9E, F̃ = 3F, G̃ = G — that is, g̃ = JᵀgJ with J = diag(3, 1)."
  },
  {
    "id": "mv-sg-m-h-002",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Let r̃(s, t) = r(s, 2t). In terms of the coefficients E, F, G of r (evaluated at the corresponding point), (Ẽ, F̃, G̃) equals:",
    "options": [
      "(E, F, 4G)",
      "(E, 4F, 4G)",
      "(E, 2F, 4G)",
      "(E, 2F, 2G)"
    ],
    "correctAnswer": 2,
    "explanation": "By the chain rule r̃_s = r_u and r̃_t = 2r_v, so Ẽ = E, F̃ = 2F, G̃ = 4G — that is, g̃ = JᵀgJ with J = diag(1, 2)."
  },
  {
    "id": "mv-sg-m-h-003",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Let r̃(s, t) = r(2s, 3t). In terms of the coefficients E, F, G of r (evaluated at the corresponding point), (Ẽ, F̃, G̃) equals:",
    "options": [
      "(4E, F, 9G)",
      "(2E, 6F, 3G)",
      "(4E, 6F, 9G)",
      "(4E, 36F, 9G)"
    ],
    "correctAnswer": 2,
    "explanation": "By the chain rule r̃_s = 2r_u and r̃_t = 3r_v, so Ẽ = 4E, F̃ = 6F, G̃ = 9G — that is, g̃ = JᵀgJ with J = diag(2, 3)."
  },
  {
    "id": "mv-sg-m-h-004",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Let r̃(s, t) = r(3s, 2t). In terms of the coefficients E, F, G of r (evaluated at the corresponding point), (Ẽ, F̃, G̃) equals:",
    "options": [
      "(9E, 36F, 4G)",
      "(9E, F, 4G)",
      "(3E, 6F, 2G)",
      "(9E, 6F, 4G)"
    ],
    "correctAnswer": 3,
    "explanation": "By the chain rule r̃_s = 3r_u and r̃_t = 2r_v, so Ẽ = 9E, F̃ = 6F, G̃ = 4G — that is, g̃ = JᵀgJ with J = diag(3, 2)."
  },
  {
    "id": "mv-sg-m-h-005",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Let r̃(s, t) = r(s, 4t). In terms of the coefficients E, F, G of r (evaluated at the corresponding point), (Ẽ, F̃, G̃) equals:",
    "options": [
      "(E, 16F, 16G)",
      "(E, 4F, 4G)",
      "(E, F, 16G)",
      "(E, 4F, 16G)"
    ],
    "correctAnswer": 3,
    "explanation": "By the chain rule r̃_s = r_u and r̃_t = 4r_v, so Ẽ = E, F̃ = 4F, G̃ = 16G — that is, g̃ = JᵀgJ with J = diag(1, 4)."
  },
  {
    "id": "mv-sg-m-h-006",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Which triple (E, F, G) cannot be the first fundamental form coefficients of a regular parametrization at a point?",
    "options": [
      "(1, 0, 1)",
      "(5, 4, 5)",
      "(2, 1, 1)",
      "(1, 2, 3)"
    ],
    "correctAnswer": 3,
    "explanation": "At a regular point the matrix [[E, F], [F, G]] is positive definite: E > 0 and EG - F² > 0. For (1, 2, 3), EG - F² = -1 ≤ 0."
  },
  {
    "id": "mv-sg-m-h-007",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Using E = (a + b cos v)², F = 0, G = b², find the area of the torus with centre-circle radius a = 3 and tube radius b = 1.",
    "options": [
      "12π",
      "6π²",
      "12π²",
      "16π²"
    ],
    "correctAnswer": 2,
    "explanation": "√(EG - F²) = b(a + b cos v), and ∫₀^{2π}∫₀^{2π} b(a + b cos v) dv du = 4π²ab = 4π²·3 = 12π². This agrees with Pappus: (2πb)·(2πa)."
  },
  {
    "id": "mv-sg-m-h-008",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For the cone r(u, v) = (v cos u, v sin u, (3/4)v), 0 ≤ u ≤ 2π, 0 ≤ v ≤ 4, find the surface area.",
    "options": [
      "16π",
      "20π",
      "25π",
      "40π"
    ],
    "correctAnswer": 1,
    "explanation": "E = v², F = 0, G = 1 + 9/16 = 25/16, so dA = 5/4 · v du dv and A = 2π · 8 · 5/4 = 20π."
  },
  {
    "id": "mv-sg-m-h-009",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "A curve on the cylinder of radius 3 winds once around it while rising a height 8π. Using the cylinder metric, find its length.",
    "options": [
      "14π",
      "6π",
      "10π",
      "8π"
    ],
    "correctAnswer": 2,
    "explanation": "With u = t, v = 4t (0 ≤ t ≤ 2π), the speed is √(9 + 16), so L = 2π√(9 + 16) = π√(100) = 10π."
  },
  {
    "id": "mv-sg-m-h-010",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "A curve on the cylinder of radius 5 winds once around it while rising a height 24π. Using the cylinder metric, find its length.",
    "options": [
      "34π",
      "26π",
      "10π",
      "24π"
    ],
    "correctAnswer": 1,
    "explanation": "With u = t, v = 12t (0 ≤ t ≤ 2π), the speed is √(25 + 144), so L = 2π√(25 + 144) = π√(676) = 26π."
  },
  {
    "id": "mv-sg-m-h-011",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "A curve on the cylinder of radius 4 winds once around it while rising a height 6π. Using the cylinder metric, find its length.",
    "options": [
      "10π",
      "6π",
      "8π",
      "14π"
    ],
    "correctAnswer": 0,
    "explanation": "With u = t, v = 3t (0 ≤ t ≤ 2π), the speed is √(16 + 9), so L = 2π√(16 + 9) = π√(100) = 10π."
  },
  {
    "id": "mv-sg-m-h-012",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "A curve on the cylinder of radius 1 winds once around it while rising a height 2π. Using the cylinder metric, find its length.",
    "options": [
      "2π√2",
      "4π",
      "2π",
      "4π√2"
    ],
    "correctAnswer": 0,
    "explanation": "With u = t, v = 1t (0 ≤ t ≤ 2π), the speed is √(1 + 1), so L = 2π√(1 + 1) = π√(8) = 2π√2."
  },
  {
    "id": "mv-sg-m-h-013",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Find the area of the paraboloid z = x² + y² over the disk x² + y² ≤ 2 (radius √2).",
    "options": [
      "9π/2",
      "13π/2",
      "2π",
      "13π/3"
    ],
    "correctAnswer": 3,
    "explanation": "EG - F² = 1 + 4r², so A = ∫₀^{2π}∫₀^ρ √(1 + 4r²) r dr dθ = (π/6)[(1 + 4ρ²)^{3/2} - 1] = (π/6)(27 - 1) = 13π/3."
  },
  {
    "id": "mv-sg-m-h-014",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "At a point E = 1, F = 1, G = 4. What is the angle between the u- and v-coordinate curves?",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctAnswer": 2,
    "explanation": "cos ω = F/√(EG) = 1/√4 = 0.5000…, so ω = 60°."
  },
  {
    "id": "mv-sg-m-h-015",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "At a point E = 2, F = 1, G = 1. What is the angle between the u- and v-coordinate curves?",
    "options": [
      "60°",
      "90°",
      "30°",
      "45°"
    ],
    "correctAnswer": 3,
    "explanation": "cos ω = F/√(EG) = 1/√2 = 0.7071…, so ω = 45°."
  },
  {
    "id": "mv-sg-m-h-016",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "At a point E = 4, F = 6, G = 12. What is the angle between the u- and v-coordinate curves?",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctAnswer": 0,
    "explanation": "cos ω = F/√(EG) = 6/√48 = 0.8660…, so ω = 30°."
  },
  {
    "id": "mv-sg-m-h-017",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "At a point E = 3, F = 3, G = 4. What is the angle between the u- and v-coordinate curves?",
    "options": [
      "60°",
      "90°",
      "45°",
      "30°"
    ],
    "correctAnswer": 3,
    "explanation": "cos ω = F/√(EG) = 3/√12 = 0.8660…, so ω = 30°."
  },
  {
    "id": "mv-sg-m-h-018",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "At a point E = 4, F = 2, G = 4. What is the angle between the u- and v-coordinate curves?",
    "options": [
      "60°",
      "90°",
      "45°",
      "30°"
    ],
    "correctAnswer": 0,
    "explanation": "cos ω = F/√(EG) = 2/√16 = 0.5000…, so ω = 60°."
  },
  {
    "id": "mv-sg-m-h-019",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Find the area of the part of the plane z = 2x + 2y lying above the disk x² + y² ≤ 1.",
    "options": [
      "2π√2",
      "3π",
      "9π",
      "π"
    ],
    "correctAnswer": 1,
    "explanation": "√(EG - F²) = √(1 + a² + b²) = 3 is constant, so the area is 3 times the disk area π."
  },
  {
    "id": "mv-sg-m-h-020",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Using E = (a + b cos v)², F = 0, G = b², find the area of the torus with centre-circle radius a = 5 and tube radius b = 2.",
    "options": [
      "40π",
      "40π²",
      "28π²",
      "20π²"
    ],
    "correctAnswer": 1,
    "explanation": "√(EG - F²) = b(a + b cos v), and ∫₀^{2π}∫₀^{2π} b(a + b cos v) dv du = 4π²ab = 4π²·10 = 40π². This agrees with Pappus: (2πb)·(2πa)."
  },
  {
    "id": "mv-sg-m-h-021",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For the cone r(u, v) = (v cos u, v sin u, (4/3)v), 0 ≤ u ≤ 2π, 0 ≤ v ≤ 3, find the surface area.",
    "options": [
      "9π",
      "25π",
      "30π",
      "15π"
    ],
    "correctAnswer": 3,
    "explanation": "E = v², F = 0, G = 1 + 16/9 = 25/9, so dA = 5/3 · v du dv and A = 2π · 9/2 · 5/3 = 15π."
  },
  {
    "id": "mv-sg-m-h-022",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Find the area of the paraboloid z = x² + y² over the disk x² + y² ≤ 6 (radius √6).",
    "options": [
      "125π/6",
      "31π",
      "6π",
      "62π/3"
    ],
    "correctAnswer": 3,
    "explanation": "EG - F² = 1 + 4r², so A = ∫₀^{2π}∫₀^ρ √(1 + 4r²) r dr dθ = (π/6)[(1 + 4ρ²)^{3/2} - 1] = (π/6)(125 - 1) = 62π/3."
  },
  {
    "id": "mv-sg-m-h-023",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Find the area of the part of the plane z = 4x + 8y lying above the disk x² + y² ≤ 4.",
    "options": [
      "4π",
      "36π",
      "16π√5",
      "18π"
    ],
    "correctAnswer": 1,
    "explanation": "√(EG - F²) = √(1 + a² + b²) = 9 is constant, so the area is 9 times the disk area 4π."
  },
  {
    "id": "mv-sg-m-h-024",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Using E = (a + b cos v)², F = 0, G = b², find the area of the torus with centre-circle radius a = 4 and tube radius b = 1.",
    "options": [
      "20π²",
      "16π²",
      "8π²",
      "16π"
    ],
    "correctAnswer": 1,
    "explanation": "√(EG - F²) = b(a + b cos v), and ∫₀^{2π}∫₀^{2π} b(a + b cos v) dv du = 4π²ab = 4π²·4 = 16π². This agrees with Pappus: (2πb)·(2πa)."
  },
  {
    "id": "mv-sg-m-h-025",
    "topic": "Surface Metrics and the First Fundamental Form",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For the cone r(u, v) = (v cos u, v sin u, v), 0 ≤ u ≤ 2π, 0 ≤ v ≤ 1, find the surface area.",
    "options": [
      "2π√2",
      "2π",
      "π√2",
      "π"
    ],
    "correctAnswer": 2,
    "explanation": "E = v², F = 0, G = 1 + 1 = 2, so dA = √2 · v du dv and A = 2π · 1/2 · √2 = π√2."
  },
  {
    "id": "mv-sg-c-e-001",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "At a point of a surface the principal curvatures are k₁ = 2 and k₂ = 3. Find the Gaussian curvature K.",
    "options": [
      "5",
      "5/2",
      "-1",
      "6"
    ],
    "correctAnswer": 3,
    "explanation": "K = k₁k₂ = 2·3 = 6."
  },
  {
    "id": "mv-sg-c-e-002",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "What is the Gaussian curvature of a sphere of radius 2?",
    "options": [
      "1/4",
      "4",
      "0",
      "1/2"
    ],
    "correctAnswer": 0,
    "explanation": "Every normal section is a great circle of radius 2, so k₁ = k₂ = ±1/2 and K = 1/R² = 1/4."
  },
  {
    "id": "mv-sg-c-e-003",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For a circular cylinder of radius 2, what are the principal curvatures (up to the sign set by the normal)?",
    "options": [
      "1/4 and 0",
      "1/2 and 0",
      "1/2 and 1/2",
      "2 and 0"
    ],
    "correctAnswer": 1,
    "explanation": "Around the cylinder the normal section is a circle of radius 2 (curvature 1/2); along a ruling it is a straight line (curvature 0). Hence K = 0."
  },
  {
    "id": "mv-sg-c-e-004",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For a circular cylinder of radius 3, what are the principal curvatures (up to the sign set by the normal)?",
    "options": [
      "1/3 and 1/3",
      "1/3 and 0",
      "3 and 0",
      "1/9 and 0"
    ],
    "correctAnswer": 1,
    "explanation": "Around the cylinder the normal section is a circle of radius 3 (curvature 1/3); along a ruling it is a straight line (curvature 0). Hence K = 0."
  },
  {
    "id": "mv-sg-c-e-005",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For a circular cylinder of radius 4, what are the principal curvatures (up to the sign set by the normal)?",
    "options": [
      "4 and 0",
      "1/16 and 0",
      "1/4 and 1/4",
      "1/4 and 0"
    ],
    "correctAnswer": 3,
    "explanation": "Around the cylinder the normal section is a circle of radius 4 (curvature 1/4); along a ruling it is a straight line (curvature 0). Hence K = 0."
  },
  {
    "id": "mv-sg-c-e-006",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "A point has principal curvatures k₁ = 3 and k₂ = 2. What type of point is it?",
    "options": [
      "Parabolic",
      "Planar",
      "Elliptic",
      "Hyperbolic (saddle)"
    ],
    "correctAnswer": 2,
    "explanation": "K = k₁k₂ = 6. K > 0 is elliptic, K < 0 hyperbolic, K = 0 with H ≠ 0 parabolic, k₁ = k₂ = 0 planar."
  },
  {
    "id": "mv-sg-c-e-007",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "A point has principal curvatures k₁ = 2 and k₂ = -1. What type of point is it?",
    "options": [
      "Hyperbolic (saddle)",
      "Elliptic",
      "Parabolic",
      "Planar"
    ],
    "correctAnswer": 0,
    "explanation": "K = k₁k₂ = -2. K > 0 is elliptic, K < 0 hyperbolic, K = 0 with H ≠ 0 parabolic, k₁ = k₂ = 0 planar."
  },
  {
    "id": "mv-sg-c-e-008",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "A point has principal curvatures k₁ = 4 and k₂ = 0. What type of point is it?",
    "options": [
      "Hyperbolic (saddle)",
      "Planar",
      "Parabolic",
      "Elliptic"
    ],
    "correctAnswer": 2,
    "explanation": "K = k₁k₂ = 0. K > 0 is elliptic, K < 0 hyperbolic, K = 0 with H ≠ 0 parabolic, k₁ = k₂ = 0 planar."
  },
  {
    "id": "mv-sg-c-e-009",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "A point has principal curvatures k₁ = -1 and k₂ = -5. What type of point is it?",
    "options": [
      "Planar",
      "Parabolic",
      "Elliptic",
      "Hyperbolic (saddle)"
    ],
    "correctAnswer": 2,
    "explanation": "K = k₁k₂ = 5. K > 0 is elliptic, K < 0 hyperbolic, K = 0 with H ≠ 0 parabolic, k₁ = k₂ = 0 planar."
  },
  {
    "id": "mv-sg-c-e-010",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "A point has principal curvatures k₁ = 1 and k₂ = -6. What type of point is it?",
    "options": [
      "Elliptic",
      "Hyperbolic (saddle)",
      "Planar",
      "Parabolic"
    ],
    "correctAnswer": 1,
    "explanation": "K = k₁k₂ = -6. K > 0 is elliptic, K < 0 hyperbolic, K = 0 with H ≠ 0 parabolic, k₁ = k₂ = 0 planar."
  },
  {
    "id": "mv-sg-c-e-011",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the surface z = x² + 2y², find the Gaussian curvature at the origin.",
    "options": [
      "8",
      "6",
      "3",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "At the origin f_x = f_y = 0, so K = f_xx f_yy - f_xy² = 2·4 - 0² = 8."
  },
  {
    "id": "mv-sg-c-e-012",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the surface z = x² + 2xy + y², find the Gaussian curvature at the origin.",
    "options": [
      "0",
      "4",
      "-3",
      "8"
    ],
    "correctAnswer": 0,
    "explanation": "At the origin f_x = f_y = 0, so K = f_xx f_yy - f_xy² = 2·2 - 2² = 0."
  },
  {
    "id": "mv-sg-c-e-013",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the surface z = 2x² + xy - y², find the Gaussian curvature at the origin.",
    "options": [
      "2",
      "-3",
      "-9",
      "-7"
    ],
    "correctAnswer": 2,
    "explanation": "At the origin f_x = f_y = 0, so K = f_xx f_yy - f_xy² = 4·(-2) - 1² = -9."
  },
  {
    "id": "mv-sg-c-e-014",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the surface z = 3x² + 3y², find the Gaussian curvature at the origin.",
    "options": [
      "36",
      "12",
      "6",
      "9"
    ],
    "correctAnswer": 0,
    "explanation": "At the origin f_x = f_y = 0, so K = f_xx f_yy - f_xy² = 6·6 - 0² = 36."
  },
  {
    "id": "mv-sg-c-e-015",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "For the surface z = x² + 4xy + y², find the Gaussian curvature at the origin.",
    "options": [
      "20",
      "4",
      "-12",
      "-15"
    ],
    "correctAnswer": 2,
    "explanation": "At the origin f_x = f_y = 0, so K = f_xx f_yy - f_xy² = 2·2 - 4² = -12."
  },
  {
    "id": "mv-sg-c-e-016",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "The geodesics of a sphere are:",
    "options": [
      "All circles of latitude",
      "Helices",
      "Arcs of great circles",
      "Straight lines"
    ],
    "correctAnswer": 2,
    "explanation": "A great circle has acceleration pointing to the centre, i.e. along the normal, so its tangential acceleration is zero."
  },
  {
    "id": "mv-sg-c-e-017",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "The geodesics of a plane are:",
    "options": [
      "Spirals",
      "Straight lines",
      "Circles",
      "Parabolas"
    ],
    "correctAnswer": 1,
    "explanation": "In a plane the acceleration lies in the plane, so being normal to it forces zero acceleration."
  },
  {
    "id": "mv-sg-c-e-018",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "A point where the two principal curvatures are equal is called:",
    "options": [
      "A geodesic",
      "A parabolic point",
      "An umbilic",
      "A saddle"
    ],
    "correctAnswer": 2,
    "explanation": "At an umbilic every direction is principal; every point of a sphere is an umbilic."
  },
  {
    "id": "mv-sg-c-e-019",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "Gauss's Theorema Egregium says that the Gaussian curvature K:",
    "options": [
      "Equals the mean curvature",
      "Can be computed from E, F, G and their derivatives alone",
      "Is always zero for closed surfaces",
      "Depends on the choice of unit normal"
    ],
    "correctAnswer": 1,
    "explanation": "K is intrinsic: it does not change under bending that preserves lengths."
  },
  {
    "id": "mv-sg-c-e-020",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "The coefficients L, M, N of the second fundamental form are:",
    "options": [
      "The dot products r_u·r_u, r_u·r_v, r_v·r_v",
      "The normal components r_uu·n, r_uv·n, r_vv·n",
      "The lengths of r_u, r_v and r_u × r_v",
      "The partial derivatives of E, F, G"
    ],
    "correctAnswer": 1,
    "explanation": "They measure how the surface curves away from its tangent plane in the direction of n."
  },
  {
    "id": "mv-sg-c-e-021",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "A geodesic on a surface is a curve whose acceleration is:",
    "options": [
      "Always zero in space",
      "Everywhere tangent to the surface",
      "Everywhere normal to the surface",
      "Parallel to the z-axis"
    ],
    "correctAnswer": 2,
    "explanation": "Zero tangential acceleration means the curve does not turn within the surface."
  },
  {
    "id": "mv-sg-c-e-022",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "A sheet of paper can be rolled into a cylinder without stretching. Which quantity must therefore agree for the flat sheet and the cylinder?",
    "options": [
      "The mean curvature H",
      "The unit normal",
      "The largest principal curvature",
      "The Gaussian curvature K"
    ],
    "correctAnswer": 3,
    "explanation": "Rolling is an isometry, and K is intrinsic: both have K = 0, while H differs."
  },
  {
    "id": "mv-sg-c-e-023",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "At a point of a surface the principal curvatures are k₁ = -1 and k₂ = 4. Find the mean curvature H.",
    "options": [
      "-4",
      "3",
      "3/2",
      "-5"
    ],
    "correctAnswer": 2,
    "explanation": "H = (k₁ + k₂)/2 = (-1 + 4)/2 = 3/2."
  },
  {
    "id": "mv-sg-c-e-024",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "What is the Gaussian curvature of a sphere of radius 3?",
    "options": [
      "9",
      "1/3",
      "0",
      "1/9"
    ],
    "correctAnswer": 3,
    "explanation": "Every normal section is a great circle of radius 3, so k₁ = k₂ = ±1/3 and K = 1/R² = 1/9."
  },
  {
    "id": "mv-sg-c-e-025",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Easy",
    "question": "At a point of a surface the principal curvatures are k₁ = 1/2 and k₂ = 6. Find the Gaussian curvature K.",
    "options": [
      "3",
      "13/2",
      "-11/2",
      "13/4"
    ],
    "correctAnswer": 0,
    "explanation": "K = k₁k₂ = 1/2·6 = 3."
  },
  {
    "id": "mv-sg-c-m-001",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 1, F = 0, G = 4 and L = 2, M = 1, N = 3. Find the Gaussian curvature K.",
    "options": [
      "-5/4",
      "5/4",
      "3/2",
      "5"
    ],
    "correctAnswer": 1,
    "explanation": "K = (LN - M²)/(EG - F²) = (6 - 1)/(4 - 0) = 5/4."
  },
  {
    "id": "mv-sg-c-m-002",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 2, F = 1, G = 2 and L = 3, M = 0, N = 1. Find the Gaussian curvature K.",
    "options": [
      "3/4",
      "3",
      "1",
      "3/5"
    ],
    "correctAnswer": 2,
    "explanation": "K = (LN - M²)/(EG - F²) = (3 - 0)/(4 - 1) = 1."
  },
  {
    "id": "mv-sg-c-m-003",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 4, F = 0, G = 1 and L = -2, M = 1, N = 3. Find the Gaussian curvature K.",
    "options": [
      "7/4",
      "-7/4",
      "-3/2",
      "-7"
    ],
    "correctAnswer": 1,
    "explanation": "K = (LN - M²)/(EG - F²) = (-6 - 1)/(4 - 0) = -7/4."
  },
  {
    "id": "mv-sg-c-m-004",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 3, F = 1, G = 1 and L = 2, M = 2, N = 5. Find the Gaussian curvature K.",
    "options": [
      "6",
      "3/2",
      "10/3",
      "3"
    ],
    "correctAnswer": 3,
    "explanation": "K = (LN - M²)/(EG - F²) = (10 - 4)/(3 - 1) = 3."
  },
  {
    "id": "mv-sg-c-m-005",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 1, F = 1, G = 2 and L = 3, M = 1, N = 2. Find the mean curvature H.",
    "options": [
      "5/2",
      "5",
      "3",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "H = (EN - 2FM + GL)/(2(EG - F²)) = (2 - 2 + 6)/(2·1) = 3."
  },
  {
    "id": "mv-sg-c-m-006",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point with principal curvatures k₁ = 3 and k₂ = -1, find the normal curvature in the direction making angle θ = π/3 with the first principal direction.",
    "options": [
      "-3/4",
      "2",
      "0",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "Euler's formula: κₙ = k₁cos²θ + k₂sin²θ = 3·1/4 + (-1)·3/4 = 0."
  },
  {
    "id": "mv-sg-c-m-007",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point the mean curvature is H = 3 and the Gaussian curvature is K = 5. Find the principal curvatures.",
    "options": [
      "5 and 1",
      "6 and 0",
      "6 and 5/2",
      "3 and 5"
    ],
    "correctAnswer": 0,
    "explanation": "k = H ± √(H² - K) = 3 ± √4 = 5, 1. Check: sum 6 = 2H, product 5 = K."
  },
  {
    "id": "mv-sg-c-m-008",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point the mean curvature is H = 1 and the Gaussian curvature is K = -3. Find the principal curvatures.",
    "options": [
      "2 and -3/2",
      "1 and -3",
      "4 and -2",
      "3 and -1"
    ],
    "correctAnswer": 3,
    "explanation": "k = H ± √(H² - K) = 1 ± √4 = 3, -1. Check: sum 2 = 2H, product -3 = K."
  },
  {
    "id": "mv-sg-c-m-009",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point the mean curvature is H = 5/2 and the Gaussian curvature is K = 4. Find the principal curvatures.",
    "options": [
      "5 and 0",
      "4 and 1",
      "5 and 2",
      "5/2 and 4"
    ],
    "correctAnswer": 1,
    "explanation": "k = H ± √(H² - K) = 5/2 ± √9/4 = 4, 1. Check: sum 5 = 2H, product 4 = K."
  },
  {
    "id": "mv-sg-c-m-010",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point the mean curvature is H = 0 and the Gaussian curvature is K = -4. Find the principal curvatures.",
    "options": [
      "2 and -2",
      "0 and -4",
      "0 and -2",
      "3 and -3"
    ],
    "correctAnswer": 0,
    "explanation": "k = H ± √(H² - K) = 0 ± √4 = 2, -2. Check: sum 0 = 2H, product -4 = K."
  },
  {
    "id": "mv-sg-c-m-011",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point the mean curvature is H = 2 and the Gaussian curvature is K = 3. Find the principal curvatures.",
    "options": [
      "2 and 3",
      "4 and 3/2",
      "4 and 0",
      "3 and 1"
    ],
    "correctAnswer": 3,
    "explanation": "k = H ± √(H² - K) = 2 ± √1 = 3, 1. Check: sum 4 = 2H, product 3 = K."
  },
  {
    "id": "mv-sg-c-m-012",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "For z = x² + 3y² with upward normal, find the mean curvature H at the origin.",
    "options": [
      "4",
      "8",
      "12",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "At the origin E = G = 1, F = 0, L = f_xx = 2, M = 0, N = f_yy = 6. So k₁ = 2, k₂ = 6 and H = (k₁ + k₂)/2 = 4."
  },
  {
    "id": "mv-sg-c-m-013",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "For z = 2x² - y² with upward normal, find the mean curvature H at the origin.",
    "options": [
      "-8",
      "1/2",
      "1",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "At the origin E = G = 1, F = 0, L = f_xx = 4, M = 0, N = f_yy = -2. So k₁ = 4, k₂ = -2 and H = (k₁ + k₂)/2 = 1."
  },
  {
    "id": "mv-sg-c-m-014",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "For z = 1/2x² + 1/2y² with upward normal, find the mean curvature H at the origin.",
    "options": [
      "1",
      "1/4",
      "1/2",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "At the origin E = G = 1, F = 0, L = f_xx = 1, M = 0, N = f_yy = 1. So k₁ = 1, k₂ = 1 and H = (k₁ + k₂)/2 = 1."
  },
  {
    "id": "mv-sg-c-m-015",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "For z = 3x² + y² with upward normal, find the mean curvature H at the origin.",
    "options": [
      "12",
      "2",
      "8",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "At the origin E = G = 1, F = 0, L = f_xx = 6, M = 0, N = f_yy = 2. So k₁ = 6, k₂ = 2 and H = (k₁ + k₂)/2 = 4."
  },
  {
    "id": "mv-sg-c-m-016",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "On a sphere of radius 6, two points lie on the equator whose longitudes differ by 60°. What is the geodesic (great-circle) distance between them?",
    "options": [
      "4π",
      "2π",
      "π",
      "6π"
    ],
    "correctAnswer": 1,
    "explanation": "Both points lie on one great circle, so the distance is R times the central angle in radians: 6 × π/3 = 2π."
  },
  {
    "id": "mv-sg-c-m-017",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 1, F = 0, G = 4 and L = 3, M = 0, N = 4. Find the normal curvature in the direction w = r_u + r_v.",
    "options": [
      "7/25",
      "-7/5",
      "7",
      "7/5"
    ],
    "correctAnswer": 3,
    "explanation": "κₙ = II(w)/I(w) = (3·1 + 2·0·1 + 4·1)/(1·1 + 2·0·1 + 4·1) = 7/5."
  },
  {
    "id": "mv-sg-c-m-018",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 2, F = 0, G = 1 and L = 4, M = 1, N = 1. Find the normal curvature in the direction w = r_u + r_v.",
    "options": [
      "7",
      "2",
      "7/9",
      "7/3"
    ],
    "correctAnswer": 3,
    "explanation": "κₙ = II(w)/I(w) = (4·1 + 2·1·1 + 1·1)/(2·1 + 2·0·1 + 1·1) = 7/3."
  },
  {
    "id": "mv-sg-c-m-019",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 1, F = 0, G = 1 and L = 1, M = 2, N = 1. Find the normal curvature in the direction w = r_u - r_v.",
    "options": [
      "-1/2",
      "-1",
      "-2",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "κₙ = II(w)/I(w) = (1·1 + 2·2·(-1) + 1·1)/(1·1 + 2·0·(-1) + 1·1) = -2/2 = -1."
  },
  {
    "id": "mv-sg-c-m-020",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "On a sphere, which circle of latitude is a geodesic?",
    "options": [
      "None of them",
      "Every circle of latitude",
      "Only circles near the poles",
      "Only the equator"
    ],
    "correctAnswer": 3,
    "explanation": "A latitude φ₀ has tangential acceleration proportional to sin φ₀ cos φ₀, which vanishes only at φ₀ = π/2."
  },
  {
    "id": "mv-sg-c-m-021",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "Why is a helix on a circular cylinder a geodesic even though it curves in space?",
    "options": [
      "Its acceleration points along the cylinder's normal, so it does not turn within the surface",
      "Because its curvature is zero",
      "Because the cylinder has K > 0",
      "Because it lies in a plane"
    ],
    "correctAnswer": 0,
    "explanation": "Unrolling the cylinder maps the helix to a straight line; geodesics only need zero tangential acceleration."
  },
  {
    "id": "mv-sg-c-m-022",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "If the unit normal n is replaced by -n, what happens to K and H?",
    "options": [
      "K changes sign and H is unchanged",
      "Both change sign",
      "K is unchanged and H changes sign",
      "Neither changes"
    ],
    "correctAnswer": 2,
    "explanation": "L, M, N all flip sign; K = (LN - M²)/(EG - F²) is quadratic in them, H is linear."
  },
  {
    "id": "mv-sg-c-m-023",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "Which pair of surfaces is locally isometric?",
    "options": [
      "A sphere and a saddle z = xy",
      "A plane and a cylinder",
      "A sphere and a cylinder",
      "A plane and a sphere"
    ],
    "correctAnswer": 1,
    "explanation": "Plane and cylinder both have K = 0 and can be given the metric du² + dv²; the sphere has K > 0."
  },
  {
    "id": "mv-sg-c-m-024",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point E = 1, F = 0, G = 4 and L = 2, M = 1, N = 3. Find the mean curvature H.",
    "options": [
      "11/8",
      "11/4",
      "5/2",
      "5/4"
    ],
    "correctAnswer": 0,
    "explanation": "H = (EN - 2FM + GL)/(2(EG - F²)) = (3 - 0 + 8)/(2·4) = 11/8."
  },
  {
    "id": "mv-sg-c-m-025",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Medium",
    "question": "At a point with principal curvatures k₁ = 4 and k₂ = 2, find the normal curvature in the direction making angle θ = π/6 with the first principal direction.",
    "options": [
      "3",
      "6",
      "5/2",
      "7/2"
    ],
    "correctAnswer": 3,
    "explanation": "Euler's formula: κₙ = k₁cos²θ + k₂sin²θ = 4·3/4 + (2)·1/4 = 7/2."
  },
  {
    "id": "mv-sg-c-h-001",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For the torus with a = 3, b = 1, K = cos v / (b(a + b cos v)). Find K at v = 0.",
    "options": [
      "1/2",
      "1/4",
      "-1/4",
      "1"
    ],
    "correctAnswer": 1,
    "explanation": "cos v = 1, so K = (1)/(1·(3 + 1·(1))) = 1/4. This is on the outer, bowl-shaped side (K > 0)."
  },
  {
    "id": "mv-sg-c-h-002",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For the torus with a = 4, b = 2, K = cos v / (b(a + b cos v)). Find K at v = π/3.",
    "options": [
      "1/20",
      "1/8",
      "1/10",
      "-1/20"
    ],
    "correctAnswer": 0,
    "explanation": "cos v = 1/2, so K = (1/2)/(2·(4 + 2·(1/2))) = 1/20. This is on the outer, bowl-shaped side (K > 0)."
  },
  {
    "id": "mv-sg-c-h-003",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For z = x² + y², the Gaussian curvature is K = 4/(1 + 4x² + 4y²)². Find K at (1, 0).",
    "options": [
      "4/25",
      "4/5",
      "4",
      "2/25"
    ],
    "correctAnswer": 0,
    "explanation": "x² + y² = 1, so 1 + 4(x² + y²) = 5 and K = 4/25. The bowl flattens away from the vertex."
  },
  {
    "id": "mv-sg-c-h-004",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For the saddle z = 2xy, find the Gaussian and mean curvature at the origin.",
    "options": [
      "K = -4, H = 0",
      "K = -4, H = 2",
      "K = 4, H = 0",
      "K = -2, H = 0"
    ],
    "correctAnswer": 0,
    "explanation": "At the origin L = N = 0 and M = f_xy = 2, with E = G = 1, F = 0. So K = -M² = -4 and H = (L + N)/2 = 0: a minimal-surface-like saddle with principal curvatures ±2."
  },
  {
    "id": "mv-sg-c-h-005",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For the saddle z = 3xy, find the Gaussian and mean curvature at the origin.",
    "options": [
      "K = -9, H = 0",
      "K = -3, H = 0",
      "K = -9, H = 3",
      "K = 9, H = 0"
    ],
    "correctAnswer": 0,
    "explanation": "At the origin L = N = 0 and M = f_xy = 3, with E = G = 1, F = 0. So K = -M² = -9 and H = (L + N)/2 = 0: a minimal-surface-like saddle with principal curvatures ±3."
  },
  {
    "id": "mv-sg-c-h-006",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For the saddle z = 1/2xy, find the Gaussian and mean curvature at the origin.",
    "options": [
      "K = -1/4, H = 0",
      "K = -1/2, H = 0",
      "K = -1/4, H = 1/2",
      "K = 1/4, H = 0"
    ],
    "correctAnswer": 0,
    "explanation": "At the origin L = N = 0 and M = f_xy = 1/2, with E = G = 1, F = 0. So K = -M² = -1/4 and H = (L + N)/2 = 0: a minimal-surface-like saddle with principal curvatures ±1/2."
  },
  {
    "id": "mv-sg-c-h-007",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "What is ∬ K dA over the whole sphere of radius 7?",
    "options": [
      "4π·49",
      "4π",
      "0",
      "4π/49"
    ],
    "correctAnswer": 1,
    "explanation": "K = 1/49 and the area is 4π·49, so the integral is 4π for every radius (Gauss–Bonnet)."
  },
  {
    "id": "mv-sg-c-h-008",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "What is ∬ K dA over a whole torus?",
    "options": [
      "4π²ab",
      "4π",
      "2π",
      "0"
    ],
    "correctAnswer": 3,
    "explanation": "Positive curvature on the outside exactly cancels negative curvature on the inside (Gauss–Bonnet, genus 1)."
  },
  {
    "id": "mv-sg-c-h-009",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "A smooth closed surface is a slightly dented sphere. What is ∬ K dA over it?",
    "options": [
      "8π",
      "4π",
      "0",
      "It depends on the dent"
    ],
    "correctAnswer": 1,
    "explanation": "By Gauss–Bonnet the total curvature depends only on the topology: 4π for any surface shaped like a sphere."
  },
  {
    "id": "mv-sg-c-h-010",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "On a sphere of radius 4, two points both lie at latitude 30°N with longitudes 180° apart. What is the geodesic distance between them?",
    "options": [
      "4π",
      "8π/3",
      "16π/3",
      "4π/3"
    ],
    "correctAnswer": 1,
    "explanation": "The great circle through them passes over the North Pole: (60° + 60°) = 120° of arc, so the distance is 4·2π/3 = 8π/3."
  },
  {
    "id": "mv-sg-c-h-011",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "At a saddle point with k₁ = 1 and k₂ = -1, find the angle θ (from the first principal direction, 0 < θ < 90°) at which the normal curvature is zero.",
    "options": [
      "30°",
      "60°",
      "45°",
      "90°"
    ],
    "correctAnswer": 2,
    "explanation": "Euler: 1cos²θ + (-1)sin²θ = 0 gives tan²θ = 1, so θ = 45°. These are the asymptotic directions."
  },
  {
    "id": "mv-sg-c-h-012",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "At a saddle point with k₁ = 3 and k₂ = -1, find the angle θ (from the first principal direction, 0 < θ < 90°) at which the normal curvature is zero.",
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correctAnswer": 2,
    "explanation": "Euler: 3cos²θ + (-1)sin²θ = 0 gives tan²θ = 3, so θ = 60°. These are the asymptotic directions."
  },
  {
    "id": "mv-sg-c-h-013",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "At a point H = 2 and K = 4. Is the point an umbilic?",
    "options": [
      "No, because H² ≠ K",
      "No, because H ≠ 0",
      "Yes, because H² = K",
      "Yes, because K > 0"
    ],
    "correctAnswer": 2,
    "explanation": "k₁,₂ = H ± √(H² - K) and H² - K = 0. The principal curvatures are equal iff H² = K."
  },
  {
    "id": "mv-sg-c-h-014",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "At a point H = 3 and K = 5. Is the point an umbilic?",
    "options": [
      "No, because H ≠ 0",
      "Yes, because H² = K",
      "Yes, because K > 0",
      "No, because H² ≠ K"
    ],
    "correctAnswer": 3,
    "explanation": "k₁,₂ = H ± √(H² - K) and H² - K = 4. The principal curvatures are equal iff H² = K."
  },
  {
    "id": "mv-sg-c-h-015",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "At a point H = 1/2 and K = 1/4. Is the point an umbilic?",
    "options": [
      "Yes, because K > 0",
      "Yes, because H² = K",
      "No, because H ≠ 0",
      "No, because H² ≠ K"
    ],
    "correctAnswer": 1,
    "explanation": "k₁,₂ = H ± √(H² - K) and H² - K = 0. The principal curvatures are equal iff H² = K."
  },
  {
    "id": "mv-sg-c-h-016",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "At a point H = -1 and K = 1. Is the point an umbilic?",
    "options": [
      "Yes, because K > 0",
      "No, because H² ≠ K",
      "Yes, because H² = K",
      "No, because H ≠ 0"
    ],
    "correctAnswer": 2,
    "explanation": "k₁,₂ = H ± √(H² - K) and H² - K = 0. The principal curvatures are equal iff H² = K."
  },
  {
    "id": "mv-sg-c-h-017",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "On the unit sphere, consider the longer great-circle arc joining two points that are π/2 apart. This arc is:",
    "options": [
      "A geodesic, but not the shortest path",
      "The shortest path",
      "Not a geodesic",
      "Not on the sphere"
    ],
    "correctAnswer": 0,
    "explanation": "Every arc of a great circle has normal acceleration; geodesics are only locally length-minimising."
  },
  {
    "id": "mv-sg-c-h-018",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "Why can no flat map preserve all distances on a region of the Earth?",
    "options": [
      "Because the Earth is not smooth",
      "Because the sphere has H = 0",
      "Because K = 1/R² on the sphere but 0 on the plane, and K is preserved by isometries",
      "Because F ≠ 0 on the sphere"
    ],
    "correctAnswer": 2,
    "explanation": "An isometry preserves E, F, G and hence the intrinsic curvature K."
  },
  {
    "id": "mv-sg-c-h-019",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For the torus with a = 3, b = 1, K = cos v / (b(a + b cos v)). Find K at v = π.",
    "options": [
      "-1/2",
      "-1",
      "-1/4",
      "1/2"
    ],
    "correctAnswer": 0,
    "explanation": "cos v = -1, so K = (-1)/(1·(3 + 1·(-1))) = -1/2. This is on the inner, saddle-shaped side."
  },
  {
    "id": "mv-sg-c-h-020",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For the torus with a = 4, b = 2, K = cos v / (b(a + b cos v)). Find K at v = 2π/3.",
    "options": [
      "-1/8",
      "-1/6",
      "1/12",
      "-1/12"
    ],
    "correctAnswer": 3,
    "explanation": "cos v = -1/2, so K = (-1/2)/(2·(4 + 2·(-1/2))) = -1/12. This is on the inner, saddle-shaped side."
  },
  {
    "id": "mv-sg-c-h-021",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For z = x² + y², the Gaussian curvature is K = 4/(1 + 4x² + 4y²)². Find K at (1, 1).",
    "options": [
      "4/81",
      "2/81",
      "4",
      "4/9"
    ],
    "correctAnswer": 0,
    "explanation": "x² + y² = 2, so 1 + 4(x² + y²) = 9 and K = 4/81. The bowl flattens away from the vertex."
  },
  {
    "id": "mv-sg-c-h-022",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "On a sphere of radius 4, two points both lie at latitude 75°N with longitudes 180° apart. What is the geodesic distance between them?",
    "options": [
      "2π/3",
      "4π/3",
      "4π",
      "10π/3"
    ],
    "correctAnswer": 0,
    "explanation": "The great circle through them passes over the North Pole: (15° + 15°) = 30° of arc, so the distance is 4·π/6 = 2π/3."
  },
  {
    "id": "mv-sg-c-h-023",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "At a saddle point with k₁ = 1 and k₂ = -3, find the angle θ (from the first principal direction, 0 < θ < 90°) at which the normal curvature is zero.",
    "options": [
      "45°",
      "90°",
      "60°",
      "30°"
    ],
    "correctAnswer": 3,
    "explanation": "Euler: 1cos²θ + (-3)sin²θ = 0 gives tan²θ = 1/3, so θ = 30°. These are the asymptotic directions."
  },
  {
    "id": "mv-sg-c-h-024",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "For z = x² + y², the Gaussian curvature is K = 4/(1 + 4x² + 4y²)². Find K at (0, 1/2).",
    "options": [
      "1",
      "1/2",
      "2",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "x² + y² = 1/4, so 1 + 4(x² + y²) = 2 and K = 4/4 = 1. The bowl flattens away from the vertex."
  },
  {
    "id": "mv-sg-c-h-025",
    "topic": "Surface Curvature and Geodesics",
    "module": "Geometry of Surfaces",
    "difficulty": "Hard",
    "question": "On a sphere of radius 4, two points both lie at latitude 15°N with longitudes 180° apart. What is the geodesic distance between them?",
    "options": [
      "4π",
      "10π/3",
      "20π/3",
      "2π/3"
    ],
    "correctAnswer": 1,
    "explanation": "The great circle through them passes over the North Pole: (75° + 75°) = 150° of arc, so the distance is 4·5π/6 = 10π/3."
  }
];
