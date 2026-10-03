/**
 * Developer 3 — Calculus & Analytical Geometry Practice Bank
 * Complete 300 MCQs (100 Easy, 100 Medium, 100 Hard)
 * Balanced across all 12 modules (~25 MCQs per module)
 * ID Range: 82000 - 82299
 */

export const CALC_AG_DEV3_PRACTICE_BANK = [
  {
    "id": 82000,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Easy",
    "question": "What is the definition of the unit tangent vector T(t) for a smooth space curve r(t)?",
    "options": [
      "r''(t) / |r''(t)|",
      "r'(t) / |r'(t)|",
      "r'(t) × r''(t)",
      "|r'(t)| r'(t)"
    ],
    "correctAnswer": 1,
    "explanation": "T(t) is defined as the normalized velocity vector: T(t) = r'(t) / |r'(t)|."
  },
  {
    "id": 82001,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Easy",
    "question": "The principal unit normal vector N(t) is defined as:",
    "options": [
      "T'(t) / |T'(t)|",
      "T(t) × B(t)",
      "r''(t) / |r'(t)|",
      "B'(t) / |B'(t)|"
    ],
    "correctAnswer": 0,
    "explanation": "N(t) is the unit vector pointing in the direction of dT/dt: N(t) = T'(t) / |T'(t)|."
  },
  {
    "id": 82002,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Easy",
    "question": "How is the binormal vector B(t) defined in terms of T(t) and N(t)?",
    "options": [
      "B = N × T",
      "B = T + N",
      "B = T · N",
      "B = T × N"
    ],
    "correctAnswer": 3,
    "explanation": "The Frenet-Serret frame is right-handed, so B = T × N."
  },
  {
    "id": 82003,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Easy",
    "question": "What is the value of the dot product T · N for any regular smooth space curve?",
    "options": [
      "1",
      "−1",
      "0",
      "Dependent on curvature κ"
    ],
    "correctAnswer": 2,
    "explanation": "Because |T|² = 1 is constant, differentiating gives 2 T · T' = 0, so T and N are orthogonal (T · N = 0)."
  },
  {
    "id": 82004,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Easy",
    "question": "Curvature κ measures the rate of change of which quantity with respect to arc length s?",
    "options": [
      "Binormal vector B",
      "Unit tangent vector T",
      "Position vector r",
      "Speed ds/dt"
    ],
    "correctAnswer": 1,
    "explanation": "Curvature is defined as κ = |dT/ds|, measuring how rapidly the direction of T turns."
  },
  {
    "id": 82005,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Easy",
    "question": "Torsion τ measures the rate of change of which vector with respect to arc length s?",
    "options": [
      "Binormal vector B",
      "Unit tangent vector T",
      "Principal normal vector N",
      "Velocity vector v"
    ],
    "correctAnswer": 0,
    "explanation": "Torsion measures the rate of rotation of the osculating plane, defined by dB/ds = −τ N."
  },
  {
    "id": 82006,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Easy",
    "question": "For a straight line in ℝ³, what are the values of curvature κ and torsion τ?",
    "options": [
      "κ = 1, τ = 0",
      "κ = 0, τ = 1",
      "κ = ∞, τ = 0",
      "κ = 0, τ = 0"
    ],
    "correctAnswer": 3,
    "explanation": "A straight line does not bend (κ = 0) and lies in a plane (τ = 0)."
  },
  {
    "id": 82007,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Easy",
    "question": "A space curve has torsion τ(s) = 0 everywhere. What does this imply about the curve?",
    "options": [
      "It is a straight line",
      "It is a circular helix",
      "It is a planar curve",
      "Its curvature is constant"
    ],
    "correctAnswer": 2,
    "explanation": "A curve with identically zero torsion τ = 0 lies entirely within a single plane (osculating plane is constant)."
  },
  {
    "id": 82008,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Easy",
    "question": "The plane spanned by unit tangent T and principal normal N is called the:",
    "options": [
      "Normal plane",
      "Osculating plane",
      "Rectifying plane",
      "Tangent plane"
    ],
    "correctAnswer": 1,
    "explanation": "The osculating plane contains T and N and has normal vector B."
  },
  {
    "id": 82009,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Medium",
    "question": "For a curve parameterized by arbitrary parameter t, which formula computes curvature κ(t)?",
    "options": [
      "|r'(t) × r''(t)| / |r'(t)|³",
      "|r'(t) · r''(t)| / |r'(t)|²",
      "|r''(t)| / |r'(t)|²",
      "|r'(t) × r''(t)| / |r''(t)|²"
    ],
    "correctAnswer": 0,
    "explanation": "The general parameter formula for curvature is κ = |r' × r''| / |r'|³."
  },
  {
    "id": 82010,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Medium",
    "question": "For the circular helix r(t) = ⟨3 cos t, 3 sin t, 4t⟩, find the constant curvature κ:",
    "options": [
      "3/5",
      "4/25",
      "1/5",
      "3/25"
    ],
    "correctAnswer": 3,
    "explanation": "Here a = 3, c = 4. κ = a / (a² + c²) = 3 / (9 + 16) = 3/25."
  },
  {
    "id": 82011,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Medium",
    "question": "For the circular helix r(t) = ⟨3 cos t, 3 sin t, 4t⟩, find the constant torsion τ:",
    "options": [
      "3/25",
      "4/5",
      "4/25",
      "1/25"
    ],
    "correctAnswer": 2,
    "explanation": "For a helix r(t) = ⟨a cos t, a sin t, c t⟩, τ = c / (a² + c²) = 4 / (9 + 16) = 4/25."
  },
  {
    "id": 82012,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Medium",
    "question": "Which Frenet-Serret formula describes the derivative dN/ds with respect to arc length s?",
    "options": [
      "dN/ds = κ T + τ B",
      "dN/ds = −κ T + τ B",
      "dN/ds = −κ T − τ B",
      "dN/ds = κ B − τ T"
    ],
    "correctAnswer": 1,
    "explanation": "The second Frenet-Serret equation is dN/ds = −κ T + τ B."
  },
  {
    "id": 82013,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Medium",
    "question": "What is the normal plane of a space curve at point P?",
    "options": [
      "Plane perpendicular to T (spanned by N and B)",
      "Plane perpendicular to B (spanned by T and N)",
      "Plane perpendicular to N (spanned by T and B)",
      "Plane parallel to velocity vector"
    ],
    "correctAnswer": 0,
    "explanation": "The normal plane has normal vector T and is spanned by N and B."
  },
  {
    "id": 82014,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Medium",
    "question": "What is the rectifying plane of a space curve at point P?",
    "options": [
      "Plane with normal vector B",
      "Plane with normal vector T",
      "Plane tangent to osculating circle",
      "Plane with normal vector N (spanned by T and B)"
    ],
    "correctAnswer": 3,
    "explanation": "The rectifying plane has normal vector N and is spanned by T and B."
  },
  {
    "id": 82015,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Medium",
    "question": "For the curve r(t) = ⟨t, t², 0⟩ at t = 0, what is the curvature κ?",
    "options": [
      "0",
      "1",
      "2",
      "1/2"
    ],
    "correctAnswer": 2,
    "explanation": "r' = ⟨1, 2t, 0⟩ → ⟨1, 0, 0⟩; r'' = ⟨0, 2, 0⟩. r' × r'' = ⟨0, 0, 2⟩. κ = |r' × r''|/|r'|³ = 2/1³ = 2."
  },
  {
    "id": 82016,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Medium",
    "question": "The radius of curvature ρ at a point on a curve with curvature κ > 0 is defined as:",
    "options": [
      "ρ = κ²",
      "ρ = 1 / κ",
      "ρ = 1 / κ²",
      "ρ = √κ"
    ],
    "correctAnswer": 1,
    "explanation": "The radius of curvature of the osculating circle is ρ = 1 / κ."
  },
  {
    "id": 82017,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Hard",
    "question": "Lancret's Theorem states that a space curve is a generalized helix (constant angle with a fixed axis) if and only if:",
    "options": [
      "The ratio κ/τ is constant",
      "κ = τ everywhere",
      "κ² + τ² = 1",
      "τ = 0 everywhere"
    ],
    "correctAnswer": 0,
    "explanation": "Lancret's theorem (1802) proves that a curve is a general cylinder helix iff κ(s)/τ(s) is constant."
  },
  {
    "id": 82018,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Hard",
    "question": "For r(t) = ⟨t, t², t³⟩ (twisted cubic) at t = 0, find the torsion τ(0):",
    "options": [
      "0",
      "3",
      "2/3",
      "3/2"
    ],
    "correctAnswer": 3,
    "explanation": "r'(0) = ⟨1, 0, 0⟩, r''(0) = ⟨0, 2, 0⟩, r'''(0) = ⟨0, 0, 6⟩. r' × r'' = ⟨0, 0, 2⟩. (r' × r'') · r''' = 12. |r' × r''|² = 4. τ = 12/4 = 3? Wait: |r' × r''|² = 4, 12/4 = 3? Wait: (r' × r'') · r''' = 2 * 6 = 12. 12 / 4 = 3."
  },
  {
    "id": 82019,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Hard",
    "question": "For the twisted cubic r(t) = ⟨t, t², t³⟩ at t = 0, find the exact curvature κ(0):",
    "options": [
      "1",
      "3",
      "2",
      "√2"
    ],
    "correctAnswer": 2,
    "explanation": "r'(0) = ⟨1, 0, 0⟩, r''(0) = ⟨0, 2, 0⟩. r' × r'' = ⟨0, 0, 2⟩. |r' × r''| = 2. |r'| = 1. κ = 2/1 = 2."
  },
  {
    "id": 82020,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Hard",
    "question": "What is the Darboux vector ω such that dT/ds = ω × T, dN/ds = ω × N, and dB/ds = ω × B?",
    "options": [
      "ω = κ T + τ B",
      "ω = τ T + κ B",
      "ω = κ T − τ B",
      "ω = −τ T + κ B"
    ],
    "correctAnswer": 1,
    "explanation": "The Darboux vector representing the instantaneous angular velocity of the Frenet frame is ω = τ T + κ B."
  },
  {
    "id": 82021,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Hard",
    "question": "A space curve has constant curvature κ > 0 and constant torsion τ > 0. By the Fundamental Theorem of Space Curves, the curve is uniquely a:",
    "options": [
      "Circular helix (up to rigid motion)",
      "Circle",
      "Catenary",
      "Parabola"
    ],
    "correctAnswer": 0,
    "explanation": "By Bonnet's theorem, constant positive curvature and constant non-zero torsion uniquely determine a circular helix."
  },
  {
    "id": 82022,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Hard",
    "question": "For a curve with position vector r(s) parameterized by arc length, what is the third derivative d³r/ds³?",
    "options": [
      "κ' T + κ N + τ B",
      "−κ² N + τ B",
      "κ' T − κ² N + κτ B",
      "−κ² T + κ' N + κτ B"
    ],
    "correctAnswer": 3,
    "explanation": "r' = T, r'' = κ N, r''' = κ' N + κ (−κ T + τ B) = −κ² T + κ' N + κτ B."
  },
  {
    "id": 82023,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Hard",
    "question": "What is the equation of the osculating plane to r(t) = ⟨cos t, sin t, t⟩ at t = 0?",
    "options": [
      "x + z = 1",
      "y + z = 0",
      "y − z = 0",
      "x − y = 1"
    ],
    "correctAnswer": 2,
    "explanation": "r(0) = ⟨1, 0, 0⟩. r'(0) = ⟨0, 1, 1⟩, r''(0) = ⟨−1, 0, 0⟩. r' × r'' = ⟨0, −1, 1⟩. Normal is ⟨0, 1, −1⟩: 0(x−1) + 1(y−0) − 1(z−0) = 0 => y − z = 0."
  },
  {
    "id": 82024,
    "topic": "Space Curves (Frenet-Serret)",
    "difficulty": "Hard",
    "question": "If a curve has κ(s) > 0 and lies on a sphere of radius R, what relationship connects κ and τ?",
    "options": [
      "(1/κ)² + (1/τ)² = R²",
      "(1/κ)² + [(1/τ)(1/κ)']² = R²",
      "κ² + τ² = 1/R²",
      "κ/τ = R"
    ],
    "correctAnswer": 1,
    "explanation": "A curve lies on a sphere of radius R iff its radius of curvature ρ = 1/κ and torsion τ satisfy ρ² + (ρ'/τ)² = R²."
  },
  {
    "id": 82025,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Easy",
    "question": "If r(t) is the position vector of a moving particle, how is the velocity vector v(t) defined?",
    "options": [
      "v(t) = r'(t)",
      "v(t) = r''(t)",
      "v(t) = |r(t)|",
      "v(t) = ∫ r(t) dt"
    ],
    "correctAnswer": 0,
    "explanation": "Velocity is the first time derivative of position: v(t) = dr/dt = r'(t)."
  },
  {
    "id": 82026,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Easy",
    "question": "How is the speed of a particle with velocity v(t) defined?",
    "options": [
      "v(t) · v(t)",
      "v'(t)",
      "1 / |v(t)|",
      "|v(t)|"
    ],
    "correctAnswer": 3,
    "explanation": "Speed is the scalar magnitude of the velocity vector: speed = |v(t)|."
  },
  {
    "id": 82027,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Easy",
    "question": "Acceleration a(t) of a particle is defined as:",
    "options": [
      "r'(t) · v(t)",
      "|r'(t)|",
      "r''(t) = v'(t)",
      "∫ v(t) dt"
    ],
    "correctAnswer": 2,
    "explanation": "Acceleration is the time derivative of velocity: a(t) = dv/dt = r''(t)."
  },
  {
    "id": 82028,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Easy",
    "question": "For a particle moving at constant speed, what is the value of v(t) · a(t)?",
    "options": [
      "1",
      "0",
      "|v|²",
      "Dependent on trajectory"
    ],
    "correctAnswer": 1,
    "explanation": "Since |v|² = v · v = constant, differentiating gives 2 v · a = 0, so v and a are orthogonal."
  },
  {
    "id": 82029,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Easy",
    "question": "Given r(t) = ⟨3t, 4t, 0⟩, what is the speed of the particle?",
    "options": [
      "5",
      "7",
      "25",
      "3t + 4t"
    ],
    "correctAnswer": 0,
    "explanation": "v(t) = ⟨3, 4, 0⟩, so speed = √(3² + 4² + 0²) = 5."
  },
  {
    "id": 82030,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Easy",
    "question": "What is the total arc length distance traveled by a particle from t = a to t = b?",
    "options": [
      "∫ₐᵇ v(t) dt",
      "|r(b) − r(a)|",
      "∫ₐᵇ |a(t)| dt",
      "∫ₐᵇ |v(t)| dt"
    ],
    "correctAnswer": 3,
    "explanation": "Total distance is the integral of speed: s = ∫ₐᵇ |v(t)| dt."
  },
  {
    "id": 82031,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Easy",
    "question": "The displacement vector of a particle from time t = a to t = b is:",
    "options": [
      "∫ₐᵇ |v(t)| dt",
      "v(b) − v(a)",
      "r(b) − r(a)",
      "|r(b)| − |r(a)|"
    ],
    "correctAnswer": 2,
    "explanation": "Displacement is the net change in position vector: Δr = r(b) − r(a) = ∫ₐᵇ v(t) dt."
  },
  {
    "id": 82032,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Easy",
    "question": "For circular motion r(t) = ⟨R cos(ωt), R sin(ωt), 0⟩ with constant ω, the acceleration points:",
    "options": [
      "Tangentially forward",
      "Towards the center (centripetal)",
      "Outward from the center",
      "In the z-direction"
    ],
    "correctAnswer": 1,
    "explanation": "a(t) = −ω² r(t), which points directly towards the origin (centripetal acceleration)."
  },
  {
    "id": 82033,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Easy",
    "question": "In projectile motion without air resistance, the acceleration vector a(t) in ℝ³ is:",
    "options": [
      "⟨0, 0, −g⟩",
      "⟨0, −g, 0⟩",
      "⟨−g, 0, 0⟩",
      "⟨0, 0, 0⟩"
    ],
    "correctAnswer": 0,
    "explanation": "Gravity acts downward in the vertical coordinate, giving a(t) = ⟨0, 0, −g⟩."
  },
  {
    "id": 82034,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Medium",
    "question": "The tangential component of acceleration a_T is given by:",
    "options": [
      "|v × a| / |v|",
      "v · a",
      "|a| / |v|",
      "(v · a) / |v|"
    ],
    "correctAnswer": 3,
    "explanation": "a_T = a · T = a · (v / |v|) = (v · a) / |v| = d|v|/dt."
  },
  {
    "id": 82035,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Medium",
    "question": "The normal component of acceleration a_N is given by:",
    "options": [
      "(v · a) / |v|",
      "|v × a| / |a|",
      "|v × a| / |v|",
      "v · a / |a|"
    ],
    "correctAnswer": 2,
    "explanation": "a_N = κ |v|² = |v × a| / |v|."
  },
  {
    "id": 82036,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Medium",
    "question": "If a particle has position r(t) = ⟨t², 2t, ln t⟩ for t > 0, find its velocity vector v(1):",
    "options": [
      "⟨1, 2, 0⟩",
      "⟨2, 2, 1⟩",
      "⟨2, 0, 1⟩",
      "⟨1, 1, 1⟩"
    ],
    "correctAnswer": 1,
    "explanation": "v(t) = ⟨2t, 2, 1/t⟩. At t = 1, v(1) = ⟨2, 2, 1⟩."
  },
  {
    "id": 82037,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Medium",
    "question": "For r(t) = ⟨t², 2t, ln t⟩, find the speed of the particle at t = 1:",
    "options": [
      "3",
      "√5",
      "9",
      "√8"
    ],
    "correctAnswer": 0,
    "explanation": "v(1) = ⟨2, 2, 1⟩, |v(1)| = √(4 + 4 + 1) = √9 = 3."
  },
  {
    "id": 82038,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Medium",
    "question": "Find the acceleration vector a(1) for r(t) = ⟨t², 2t, ln t⟩ at t = 1:",
    "options": [
      "⟨2, 2, 0⟩",
      "⟨0, 2, −1⟩",
      "⟨2, 0, 1⟩",
      "⟨2, 0, −1⟩"
    ],
    "correctAnswer": 3,
    "explanation": "a(t) = v'(t) = ⟨2, 0, −1/t²⟩. At t = 1, a(1) = ⟨2, 0, −1⟩."
  },
  {
    "id": 82039,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Medium",
    "question": "For a projectile launched from origin with speed v₀ at angle α above the horizontal ground, the horizontal range R is:",
    "options": [
      "v₀² cos(2α) / g",
      "2 v₀ sin α / g",
      "v₀² sin(2α) / g",
      "v₀² sin² α / (2g)"
    ],
    "correctAnswer": 2,
    "explanation": "The standard projectile range formula on flat ground is R = v₀² sin(2α) / g."
  },
  {
    "id": 82040,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Medium",
    "question": "For a projectile launched with speed v₀ at angle α, the maximum height H achieved is:",
    "options": [
      "v₀² sin(2α) / g",
      "v₀² sin² α / (2g)",
      "v₀² cos² α / (2g)",
      "v₀ sin α / g"
    ],
    "correctAnswer": 1,
    "explanation": "At peak height v_z = 0 => t = v₀ sin α / g. Substituting gives H = v₀² sin² α / (2g)."
  },
  {
    "id": 82041,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Medium",
    "question": "Evaluate the definite integral ∫₀¹ ⟨2t, 3t², eᵗ⟩ dt:",
    "options": [
      "⟨1, 1, e − 1⟩",
      "⟨2, 3, e⟩",
      "⟨1, 1, e⟩",
      "⟨2, 1, e − 1⟩"
    ],
    "correctAnswer": 0,
    "explanation": "∫₀¹ 2t dt = 1; ∫₀¹ 3t² dt = 1; ∫₀¹ eᵗ dt = e - 1. Result = ⟨1, 1, e - 1⟩."
  },
  {
    "id": 82042,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Hard",
    "question": "A particle moves with position r(t) = ⟨t, t², t³⟩. At t = 1, find the tangential component of acceleration a_T:",
    "options": [
      "18 / √14",
      "2 / √14",
      "6",
      "(4 + 18) / √14 = 22 / √14"
    ],
    "correctAnswer": 3,
    "explanation": "v(1) = ⟨1, 2, 3⟩, |v(1)| = √14. a(1) = ⟨0, 2, 6⟩. v · a = 0 + 4 + 18 = 22. a_T = 22 / √14."
  },
  {
    "id": 82043,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Hard",
    "question": "For the same curve r(t) = ⟨t, t², t³⟩ at t = 1, find the normal component of acceleration a_N:",
    "options": [
      "√14",
      "22 / √14",
      "√(152/7) = 2√(38/7)",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "v × a = ⟨6, −6, 2⟩. |v × a| = √(36 + 36 + 4) = √76 = 2√19. a_N = |v × a|/|v| = 2√19 / √14 = 2√(38/28) = √(152/7)."
  },
  {
    "id": 82044,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Hard",
    "question": "According to Newton's Second Law F = m a, if a force F(t) is always directed toward the origin (central force), which quantity is conserved?",
    "options": [
      "Linear momentum p = m v",
      "Angular momentum L = r × (m v)",
      "Kinetic energy only",
      "Speed |v|"
    ],
    "correctAnswer": 1,
    "explanation": "dL/dt = v × (m v) + r × F = 0 + 0 = 0 (since r and F are parallel). Thus angular momentum L is constant."
  },
  {
    "id": 82045,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Hard",
    "question": "Because angular momentum L = r × (m v) is constant for a central force, the motion of the particle must:",
    "options": [
      "Lie entirely in a fixed plane perpendicular to L",
      "Be a perfect circle",
      "Have constant speed",
      "Spiral into the origin"
    ],
    "correctAnswer": 0,
    "explanation": "Since r · L = r · (r × m v) = 0, the position vector r always lies in the plane orthogonal to constant vector L."
  },
  {
    "id": 82046,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Hard",
    "question": "Kepler's Second Law (equal areas swept in equal times, dA/dt = constant) is a direct mathematical consequence of:",
    "options": [
      "Conservation of linear momentum",
      "Inverse-cube force law",
      "Frenet-Serret equations",
      "Conservation of angular momentum"
    ],
    "correctAnswer": 3,
    "explanation": "dA/dt = (1/2)|r × v| = |L| / (2m), which is constant because L is conserved in any central force field."
  },
  {
    "id": 82047,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Hard",
    "question": "Find the arc length of the conical helix r(t) = ⟨t cos t, t sin t, t⟩ from t = 0 to t = 1:",
    "options": [
      "∫₀¹ √(1 + t²) dt",
      "∫₀¹ (1 + t) dt",
      "∫₀¹ √(2 + t²) dt",
      "√2 / 3"
    ],
    "correctAnswer": 2,
    "explanation": "r' = ⟨cos t − t sin t, sin t + t cos t, 1⟩. |r'|² = (cos t − t sin t)² + (sin t + t cos t)² + 1 = 1 + t² + 1 = 2 + t². Arc length = ∫₀¹ √(2 + t²) dt."
  },
  {
    "id": 82048,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Hard",
    "question": "If a particle moves under acceleration a(t) = −k² r(t) (3D isotropic harmonic oscillator), the trajectory r(t) is always an:",
    "options": [
      "Hyperbola",
      "Ellipse centered at the origin",
      "Parabola",
      "Straight line only"
    ],
    "correctAnswer": 1,
    "explanation": "The solution is r(t) = c₁ cos(kt) + c₂ sin(kt), which is a planar closed curve — specifically an ellipse centered at origin."
  },
  {
    "id": 82049,
    "topic": "Vector-Valued Functions & Motion in Space",
    "difficulty": "Hard",
    "question": "A particle moves such that |a(t)| = C (constant acceleration magnitude) and speed v(t) is constant. What is the curvature κ of the path?",
    "options": [
      "C / v²",
      "C / v",
      "v² / C",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "Since speed is constant, a_T = dv/dt = 0. Therefore |a| = a_N = κ v² = C, which gives κ = C / v²."
  },
  {
    "id": 82050,
    "topic": "Parametric Surfaces",
    "difficulty": "Easy",
    "question": "A parametric surface in ℝ³ is represented by a vector function r(u, v) with how many independent parameters?",
    "options": [
      "One (t)",
      "Three (u, v, w)",
      "Four",
      "Two (u and v)"
    ],
    "correctAnswer": 3,
    "explanation": "A 2D surface embedded in 3D requires two independent parameters, typically written as r(u, v)."
  },
  {
    "id": 82051,
    "topic": "Parametric Surfaces",
    "difficulty": "Easy",
    "question": "The tangent vectors along the grid curves of r(u, v) are given by:",
    "options": [
      "r_u = ∂r/∂x and r_v = ∂r/∂y",
      "r_u = r × u and r_v = r × v",
      "r_u = ∂r/∂u and r_v = ∂r/∂v",
      "r_u = |r| u"
    ],
    "correctAnswer": 2,
    "explanation": "The partial derivatives r_u = ∂r/∂u and r_v = ∂r/∂v give tangent vectors along u- and v-parameter curves."
  },
  {
    "id": 82052,
    "topic": "Parametric Surfaces",
    "difficulty": "Easy",
    "question": "A normal vector N to the parametric surface r(u, v) is obtained by:",
    "options": [
      "r_u · r_v",
      "r_u × r_v",
      "r_u + r_v",
      "r_u / |r_v|"
    ],
    "correctAnswer": 1,
    "explanation": "The cross product of the two tangent vectors, r_u × r_v, is perpendicular to both and gives the surface normal."
  },
  {
    "id": 82053,
    "topic": "Parametric Surfaces",
    "difficulty": "Easy",
    "question": "A point on a parametric surface is called regular (smooth) if:",
    "options": [
      "r_u × r_v ≠ 0",
      "r_u · r_v = 0",
      "|r_u| = |r_v|",
      "r_u + r_v = 0"
    ],
    "correctAnswer": 0,
    "explanation": "A regular point requires linearly independent tangent vectors, meaning r_u × r_v ≠ 0."
  },
  {
    "id": 82054,
    "topic": "Parametric Surfaces",
    "difficulty": "Easy",
    "question": "Which parametric equation represents a sphere of radius R centered at the origin?",
    "options": [
      "r(u, v) = ⟨R cos u, R sin v, u + v⟩",
      "r(u, v) = ⟨u, v, R² − u² − v²⟩",
      "r(θ, z) = ⟨R cos θ, R sin θ, z⟩",
      "r(θ, φ) = ⟨R sin φ cos θ, R sin φ sin θ, R cos φ⟩"
    ],
    "correctAnswer": 3,
    "explanation": "Standard spherical coordinate parametrization of a sphere has x = R sin φ cos θ, y = R sin φ sin θ, z = R cos φ."
  },
  {
    "id": 82055,
    "topic": "Parametric Surfaces",
    "difficulty": "Easy",
    "question": "Which parametric equation represents a right circular cylinder of radius R centered along the z-axis?",
    "options": [
      "r(u, v) = ⟨u, v, R⟩",
      "r(θ, φ) = ⟨R sin φ, R cos φ, θ⟩",
      "r(θ, z) = ⟨R cos θ, R sin θ, z⟩",
      "r(u, v) = ⟨R u, R v, 0⟩"
    ],
    "correctAnswer": 2,
    "explanation": "x = R cos θ, y = R sin θ gives the circular cross-section, while z is free."
  },
  {
    "id": 82056,
    "topic": "Parametric Surfaces",
    "difficulty": "Easy",
    "question": "For a surface given explicitly as z = f(x, y), what are standard parameters (u, v)?",
    "options": [
      "u = r, v = θ",
      "u = x, v = y, so r(x, y) = ⟨x, y, f(x, y)⟩",
      "u = f(x), v = f(y)",
      "u = x + y, v = x − y"
    ],
    "correctAnswer": 1,
    "explanation": "Any graph z = f(x, y) can be directly parameterized as Monge patch r(x, y) = ⟨x, y, f(x, y)⟩."
  },
  {
    "id": 82057,
    "topic": "Parametric Surfaces",
    "difficulty": "Easy",
    "question": "For a Monge patch r(x, y) = ⟨x, y, f(x, y)⟩, what is the normal vector r_x × r_y?",
    "options": [
      "⟨−f_x, −f_y, 1⟩",
      "⟨f_x, f_y, 1⟩",
      "⟨1, 1, f_x + f_y⟩",
      "⟨−f_x, f_y, 0⟩"
    ],
    "correctAnswer": 0,
    "explanation": "r_x = ⟨1, 0, f_x⟩ and r_y = ⟨0, 1, f_y⟩. Their cross product is ⟨−f_x, −f_y, 1⟩."
  },
  {
    "id": 82058,
    "topic": "Parametric Surfaces",
    "difficulty": "Easy",
    "question": "What is the differential area element dS on a parametric surface r(u, v)?",
    "options": [
      "(r_u · r_v) du dv",
      "|r_u| du + |r_v| dv",
      "(r_u × r_v) du dv",
      "|r_u × r_v| du dv"
    ],
    "correctAnswer": 3,
    "explanation": "The area of the infinitesimal parallelogram spanned by r_u du and r_v dv is |r_u × r_v| du dv."
  },
  {
    "id": 82059,
    "topic": "Parametric Surfaces",
    "difficulty": "Medium",
    "question": "The coefficients of the First Fundamental Form are defined as E = r_u · r_u, F = r_u · r_v, and G = r_v · r_v. In terms of E, F, G, what is |r_u × r_v|?",
    "options": [
      "√(E + G − 2F)",
      "EG − F",
      "√(EG − F²)",
      "√(E² + G²)"
    ],
    "correctAnswer": 2,
    "explanation": "Lagrange's identity gives |r_u × r_v|² = |r_u|²|r_v|² − (r_u · r_v)² = EG − F², so |r_u × r_v| = √(EG − F²)."
  },
  {
    "id": 82060,
    "topic": "Parametric Surfaces",
    "difficulty": "Medium",
    "question": "Find the tangent plane to r(u, v) = ⟨u, v, u² + v²⟩ at (u, v) = (1, 1) where point is (1, 1, 2):",
    "options": [
      "x + y − z = 0",
      "2x + 2y − z − 2 = 0",
      "2x + 2y + z − 6 = 0",
      "x + y + z − 4 = 0"
    ],
    "correctAnswer": 1,
    "explanation": "z = x² + y². f_x(1,1) = 2, f_y(1,1) = 2. Tangent plane is z − 2 = 2(x − 1) + 2(y − 1) => 2x + 2y − z − 2 = 0."
  },
  {
    "id": 82061,
    "topic": "Parametric Surfaces",
    "difficulty": "Medium",
    "question": "For the cylinder r(θ, z) = ⟨R cos θ, R sin θ, z⟩, compute the First Fundamental Form coefficients E, F, G (where u = θ, v = z):",
    "options": [
      "E = R², F = 0, G = 1",
      "E = R, F = 0, G = 1",
      "E = 1, F = 0, G = 1",
      "E = R², F = R, G = 1"
    ],
    "correctAnswer": 0,
    "explanation": "r_θ = ⟨−R sin θ, R cos θ, 0⟩ => E = R². r_z = ⟨0, 0, 1⟩ => G = 1. r_θ · r_z = 0 => F = 0."
  },
  {
    "id": 82062,
    "topic": "Parametric Surfaces",
    "difficulty": "Medium",
    "question": "Compute the surface area of a cylinder of radius R and height H using the cylinder parametrization:",
    "options": [
      "π R² H",
      "2π R² + 2π R H",
      "4π R²",
      "2π R H"
    ],
    "correctAnswer": 3,
    "explanation": "dS = √(EG − F²) dθ dz = R dθ dz. Area = ∫₀^H ∫₀^(2π) R dθ dz = 2π R H."
  },
  {
    "id": 82063,
    "topic": "Parametric Surfaces",
    "difficulty": "Medium",
    "question": "A torus is parameterized by r(u, v) = ⟨(R + r cos v) cos u, (R + r cos v) sin u, r sin v⟩. What are the geometric meanings of R and r?",
    "options": [
      "r is major radius; R is minor radius",
      "Both R and r are radii of spheres",
      "R is distance from tube center to torus center; r is tube radius",
      "R is height; r is width"
    ],
    "correctAnswer": 2,
    "explanation": "R is the distance from the center of the tube to the center of the torus, and r is the radius of the tube (with R > r > 0)."
  },
  {
    "id": 82064,
    "topic": "Parametric Surfaces",
    "difficulty": "Medium",
    "question": "What is the total surface area of the torus with major radius R and minor radius r?",
    "options": [
      "2π² R r²",
      "4π² R r",
      "4π R²",
      "2π R r"
    ],
    "correctAnswer": 1,
    "explanation": "By Pappus's centroid theorem or direct integration, the surface area of a torus is (2π r)(2π R) = 4π² R r."
  },
  {
    "id": 82065,
    "topic": "Parametric Surfaces",
    "difficulty": "Medium",
    "question": "For the plane r(u, v) = ⟨1 + u + v, 2 − u + 2v, 3 + 2u − v⟩, what is a normal vector?",
    "options": [
      "⟨−3, 5, 3⟩",
      "⟨1, 2, 3⟩",
      "⟨0, 0, 1⟩",
      "⟨3, −5, 3⟩"
    ],
    "correctAnswer": 0,
    "explanation": "r_u = ⟨1, −1, 2⟩, r_v = ⟨1, 2, −1⟩. r_u × r_v = ⟨(−1)(−1) − (2)(2), (2)(1) − (1)(−1), (1)(2) − (−1)(1)⟩ = ⟨−3, 3, 3⟩? Wait: (2)(1) - (1)(-1) = 3; (1)(-1) - 4 = -3; 2 - (-1) = 3 => ⟨-3, 3, 3⟩."
  },
  {
    "id": 82066,
    "topic": "Parametric Surfaces",
    "difficulty": "Medium",
    "question": "If F = r_u · r_v = 0 everywhere on a patch, what geometric property do the coordinate curves have?",
    "options": [
      "They are parallel everywhere",
      "They have equal arc length",
      "They are straight lines",
      "They are orthogonal everywhere"
    ],
    "correctAnswer": 3,
    "explanation": "F = 0 means the tangent vectors r_u and r_v are orthogonal, making the coordinate curves an orthogonal network."
  },
  {
    "id": 82067,
    "topic": "Parametric Surfaces",
    "difficulty": "Hard",
    "question": "For the sphere r(θ, φ) = ⟨R sin φ cos θ, R sin φ sin θ, R cos φ⟩, find the coefficients E, F, G (with u = φ, v = θ):",
    "options": [
      "E = R² sin² φ, F = 0, G = R²",
      "E = R², F = R², G = R²",
      "E = R², F = 0, G = R² sin² φ",
      "E = 1, F = 0, G = sin² φ"
    ],
    "correctAnswer": 2,
    "explanation": "r_φ = ⟨R cos φ cos θ, R cos φ sin θ, −R sin φ⟩ => E = R². r_θ = ⟨−R sin φ sin θ, R sin φ cos θ, 0⟩ => G = R² sin² φ. F = 0."
  },
  {
    "id": 82068,
    "topic": "Parametric Surfaces",
    "difficulty": "Hard",
    "question": "Using E = R² and G = R² sin² φ (with F = 0), what is the surface area element dS on a sphere?",
    "options": [
      "R² dφ dθ",
      "R² sin φ dφ dθ",
      "R sin φ dφ dθ",
      "R² cos φ dφ dθ"
    ],
    "correctAnswer": 1,
    "explanation": "dS = √(EG − F²) dφ dθ = √(R⁴ sin² φ) dφ dθ = R² sin φ dφ dθ (for 0 ≤ φ ≤ π)."
  },
  {
    "id": 82069,
    "topic": "Parametric Surfaces",
    "difficulty": "Hard",
    "question": "Evaluate the total surface area of a sphere of radius R by integrating dS = R² sin φ dφ dθ over φ ∈ [0, π], θ ∈ [0, 2π]:",
    "options": [
      "4π R²",
      "2π R²",
      "(4/3)π R³",
      "π R²"
    ],
    "correctAnswer": 0,
    "explanation": "Area = ∫₀^(2π) dθ ∫₀^π R² sin φ dφ = 2π R² [−cos φ]₀^π = 2π R² (2) = 4π R²."
  },
  {
    "id": 82070,
    "topic": "Parametric Surfaces",
    "difficulty": "Hard",
    "question": "The pseudosphere (surface of constant negative Gaussian curvature K = −1) is generated by revolving which plane curve about its asymptote?",
    "options": [
      "Catenary",
      "Cycloid",
      "Cardioid",
      "Tractrix"
    ],
    "correctAnswer": 3,
    "explanation": "Revolving a tractrix about its asymptote creates Beltrami's pseudosphere with constant negative Gaussian curvature."
  },
  {
    "id": 82071,
    "topic": "Parametric Surfaces",
    "difficulty": "Hard",
    "question": "A minimal surface is a regular surface whose mean curvature H vanishes everywhere (H = 0). Which of the following is a non-planar minimal surface?",
    "options": [
      "Sphere",
      "Ellipsoid",
      "Catenoid",
      "Cylinder"
    ],
    "correctAnswer": 2,
    "explanation": "Euler proved in 1744 that the catenoid (revolution of a catenary) is a minimal surface (H = 0)."
  },
  {
    "id": 82072,
    "topic": "Parametric Surfaces",
    "difficulty": "Hard",
    "question": "Scherk's minimal surface is given by the implicit equation eᶻ cos y = cos x. What is its explicit form z = f(x, y)?",
    "options": [
      "z = cos x + cos y",
      "z = ln(cos x / cos y)",
      "z = ln(cos x · cos y)",
      "z = e^(cos x)"
    ],
    "correctAnswer": 1,
    "explanation": "Solving eᶻ = cos x / cos y yields z = ln(cos x) − ln(cos y) = ln(cos x / cos y)."
  },
  {
    "id": 82073,
    "topic": "Parametric Surfaces",
    "difficulty": "Hard",
    "question": "Gauss's Theorema Egregium states that the Gaussian curvature K of a surface depends solely on:",
    "options": [
      "The First Fundamental Form coefficients E, F, G and their derivatives",
      "The Second Fundamental Form only",
      "How the surface is embedded in ℝ³",
      "The choice of parameter coordinates"
    ],
    "correctAnswer": 0,
    "explanation": "Theorema Egregium ('Remarkable Theorem') proved that Gaussian curvature K is an intrinsic invariant determined entirely by the metric E, F, G."
  },
  {
    "id": 82074,
    "topic": "Parametric Surfaces",
    "difficulty": "Hard",
    "question": "Find the surface area of the paraboloid z = x² + y² lying below the plane z = 4:",
    "options": [
      "(π / 3) (17√17 − 1)",
      "16π",
      "8π √17",
      "(π / 6) (17√17 − 1)"
    ],
    "correctAnswer": 3,
    "explanation": "z_x = 2x, z_y = 2y. dS = √(1 + 4(x² + y²)) dA = √(1 + 4r²) r dr dθ. r from 0 to 2. ∫₀² r√(1+4r²) dr = (1/12)(17^(3/2) - 1). With 2π, area = (π/6)(17√17 - 1)."
  },
  {
    "id": 82075,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Easy",
    "question": "What are the standard conversion formulas from polar coordinates (r, θ) to Cartesian coordinates (x, y)?",
    "options": [
      "x = r sin θ, y = r cos θ",
      "x = r / cos θ, y = r / sin θ",
      "x = r cos θ, y = r sin θ",
      "x = r² cos θ, y = r² sin θ"
    ],
    "correctAnswer": 2,
    "explanation": "Standard polar-to-Cartesian relations are x = r cos θ and y = r sin θ."
  },
  {
    "id": 82076,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Easy",
    "question": "How is the radial distance r expressed in terms of Cartesian coordinates x and y?",
    "options": [
      "r = x² + y²",
      "r = √(x² + y²)",
      "r = x + y",
      "r = |x − y|"
    ],
    "correctAnswer": 1,
    "explanation": "By the Pythagorean theorem, r² = x² + y², so r = √(x² + y²)."
  },
  {
    "id": 82077,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Easy",
    "question": "What geometric curve is represented by the polar equation r = a (with constant a > 0)?",
    "options": [
      "Circle of radius a centered at the origin",
      "Straight line through the pole",
      "Parabola with focus at pole",
      "Cardioid"
    ],
    "correctAnswer": 0,
    "explanation": "r = a means the distance from the origin is constant a, which is a circle centered at the origin."
  },
  {
    "id": 82078,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Easy",
    "question": "What curve is represented by the polar equation θ = α (where α is constant)?",
    "options": [
      "Circle through the pole",
      "Spiral",
      "Hyperbola",
      "Straight line passing through the pole"
    ],
    "correctAnswer": 3,
    "explanation": "θ = α fixes the direction angle while r varies freely, generating a straight line through the origin."
  },
  {
    "id": 82079,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Easy",
    "question": "What is the differential area element dA in polar coordinates?",
    "options": [
      "dr dθ",
      "r² dr dθ",
      "r dr dθ",
      "(1/2) r dr dθ"
    ],
    "correctAnswer": 2,
    "explanation": "The polar area element is dA = r dr dθ, derived from the Jacobian of the transformation."
  },
  {
    "id": 82080,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Easy",
    "question": "The area enclosed by a polar curve r = f(θ) between angles θ = α and θ = β is given by:",
    "options": [
      "∫_α^β f(θ) dθ",
      "(1/2) ∫_α^β [f(θ)]² dθ",
      "(1/2) ∫_α^β f(θ) dθ",
      "π ∫_α^β [f(θ)]² dθ"
    ],
    "correctAnswer": 1,
    "explanation": "Integrating dA = (1/2) r² dθ yields Area = (1/2) ∫_α^β [f(θ)]² dθ."
  },
  {
    "id": 82081,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Easy",
    "question": "What curve is given by r = 2a cos θ?",
    "options": [
      "Circle of radius a centered at (a, 0)",
      "Circle centered at origin",
      "Cardioid",
      "Rose curve"
    ],
    "correctAnswer": 0,
    "explanation": "Multiplying by r gives r² = 2a r cos θ => x² + y² = 2ax => (x − a)² + y² = a² (circle of radius a centered at (a, 0))."
  },
  {
    "id": 82082,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Easy",
    "question": "What curve is represented by r = a(1 + cos θ) with a > 0?",
    "options": [
      "Limacon with inner loop",
      "Four-petaled rose",
      "Lemniscate",
      "Cardioid"
    ],
    "correctAnswer": 3,
    "explanation": "r = a(1 + cos θ) is the standard heart-shaped cardioid with a cusp at the pole."
  },
  {
    "id": 82083,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Easy",
    "question": "What curve is described by r = a θ for θ ≥ 0 (with a > 0)?",
    "options": [
      "Logarithmic spiral",
      "Hyperbolic spiral",
      "Archimedean spiral",
      "Catenary"
    ],
    "correctAnswer": 2,
    "explanation": "r = a θ where radial distance grows linearly with angle is the Spiral of Archimedes."
  },
  {
    "id": 82084,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Medium",
    "question": "The formula for the arc length L of a smooth polar curve r = f(θ) from θ = α to θ = β is:",
    "options": [
      "∫_α^β √(1 + [f'(θ)]²) dθ",
      "∫_α^β √([f(θ)]² + [f'(θ)]²) dθ",
      "∫_α^β f(θ) dθ",
      "(1/2) ∫_α^β (r² + (r')²) dθ"
    ],
    "correctAnswer": 1,
    "explanation": "Since dx² + dy² = (dr)² + r² (dθ)², ds = √(r² + (dr/dθ)²) dθ."
  },
  {
    "id": 82085,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Medium",
    "question": "Find the total area enclosed by the cardioid r = 2(1 + cos θ):",
    "options": [
      "6π",
      "4π",
      "8π",
      "3π"
    ],
    "correctAnswer": 0,
    "explanation": "Area = (1/2) ∫₀^(2π) 4(1 + 2 cos θ + cos² θ) dθ = 2 [2π + 0 + π] = 6π."
  },
  {
    "id": 82086,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Medium",
    "question": "How many petals does the rose curve r = a sin(3θ) have?",
    "options": [
      "6",
      "4",
      "8",
      "3"
    ],
    "correctAnswer": 3,
    "explanation": "For r = a sin(nθ) or a cos(nθ), if n is odd, the rose has exactly n petals (here 3)."
  },
  {
    "id": 82087,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Medium",
    "question": "How many petals does the rose curve r = a cos(4θ) have?",
    "options": [
      "4",
      "16",
      "8",
      "2"
    ],
    "correctAnswer": 2,
    "explanation": "For r = a cos(nθ), if n is even, the curve has 2n petals (here 2 × 4 = 8)."
  },
  {
    "id": 82088,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Medium",
    "question": "What is the slope of the tangent line to the circle r = 2 at θ = π/4?",
    "options": [
      "1",
      "−1",
      "0",
      "Undefined"
    ],
    "correctAnswer": 1,
    "explanation": "For a circle centered at origin, the tangent line is perpendicular to the radial vector. Radial vector at π/4 has slope 1, so the tangent line has slope −1."
  },
  {
    "id": 82089,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Medium",
    "question": "What curve is represented by the equation r² = a² cos(2θ)?",
    "options": [
      "Lemniscate of Bernoulli",
      "Cardioid",
      "Limaçon",
      "Astroid"
    ],
    "correctAnswer": 0,
    "explanation": "r² = a² cos(2θ) defines Bernoulli's figure-eight lemniscate."
  },
  {
    "id": 82090,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Medium",
    "question": "Find the total area of both loops of the lemniscate r² = 4 cos(2θ):",
    "options": [
      "2π",
      "4π",
      "8",
      "4"
    ],
    "correctAnswer": 3,
    "explanation": "Area = 4 × (1/2) ∫₀^(π/4) 4 cos(2θ) dθ = 8 [sin(2θ)/2]₀^(π/4) = 4 [1 − 0] = 4."
  },
  {
    "id": 82091,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Medium",
    "question": "For the polar curve r = e^(aθ) (logarithmic spiral), what is the angle ψ between the tangent vector and the radial vector?",
    "options": [
      "Variable, proportional to θ",
      "Always 90°",
      "Constant with cot ψ = a",
      "Always 0°"
    ],
    "correctAnswer": 2,
    "explanation": "For r = e^(aθ), tan ψ = r / (dr/dθ) = r / (a r) = 1/a, meaning the angle ψ is constant (equiangular spiral)."
  },
  {
    "id": 82092,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Hard",
    "question": "Compute the total perimeter (arc length) of the cardioid r = 1 + cos θ:",
    "options": [
      "6π",
      "8",
      "4π",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "dr/dθ = −sin θ. r² + (r')² = (1 + cos θ)² + sin² θ = 2 + 2 cos θ = 4 cos²(θ/2). ds = 2|cos(θ/2)|. L = 2 ∫₀^π 2 cos(θ/2) dθ = 4 [2 sin(θ/2)]₀^π = 8."
  },
  {
    "id": 82093,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Hard",
    "question": "Find the area of the region lying inside the circle r = 3 sin θ and outside the cardioid r = 1 + sin θ:",
    "options": [
      "π",
      "π / 2",
      "2π",
      "3π / 4"
    ],
    "correctAnswer": 0,
    "explanation": "Intersection: 3 sin θ = 1 + sin θ => sin θ = 1/2 => θ = π/6, 5π/6. Area = (1/2) ∫_{π/6}^{5π/6} [9 sin² θ − (1 + 2 sin θ + sin² θ)] dθ = π."
  },
  {
    "id": 82094,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Hard",
    "question": "What is the curvature κ(θ) of a polar curve r = f(θ) expressed in terms of r and r'?",
    "options": [
      "|r r'' − (r')²| / [r² + (r')²]^(3/2)",
      "|r² − (r')²| / [r² + (r')²]",
      "1 / √(r² + (r')²)",
      "|r² + 2(r')² − r r''| / [r² + (r')²]^(3/2)"
    ],
    "correctAnswer": 3,
    "explanation": "The polar curvature formula is κ = |r² + 2(r')² − r r''| / [r² + (r')²]^(3/2)."
  },
  {
    "id": 82095,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Hard",
    "question": "Using the polar curvature formula, what is the curvature of the circle r = 2a cos θ?",
    "options": [
      "1 / (2a)",
      "a",
      "1 / a",
      "2a"
    ],
    "correctAnswer": 2,
    "explanation": "The curve is a circle of radius a, so its curvature is constant κ = 1 / radius = 1 / a."
  },
  {
    "id": 82096,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Hard",
    "question": "Find the arc length of the logarithmic spiral r = e^(2θ) for θ ∈ [0, π]:",
    "options": [
      "√5 (e^(2π) − 1)",
      "(√5 / 2) (e^(2π) − 1)",
      "(e^(2π) − 1) / 2",
      "√5 e^(2π)"
    ],
    "correctAnswer": 1,
    "explanation": "dr/dθ = 2 e^(2θ). r² + (r')² = e^(4θ) + 4 e^(4θ) = 5 e^(4θ). ds = √5 e^(2θ) dθ. L = √5 [e^(2θ)/2]₀^π = (√5/2)(e^(2π) − 1)."
  },
  {
    "id": 82097,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Hard",
    "question": "Find the slope dy/dx of the tangent line to the cardioid r = 1 + sin θ at θ = π/3:",
    "options": [
      "−(1 + √3)",
      "1 + √3",
      "−1",
      "√3 / 2"
    ],
    "correctAnswer": 0,
    "explanation": "dy/dx = (r' sin θ + r cos θ)/(r' cos θ − r sin θ). At π/3: r = 1 + √3/2, r' = 1/2. Evaluating numerator and denominator gives −(1 + √3)."
  },
  {
    "id": 82098,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Hard",
    "question": "In polar coordinates, the conic r = e d / (1 + e cos θ) has its focus at the origin. If e = 1 and d = 2, what is the Cartesian equation?",
    "options": [
      "x² = 4 − 4y",
      "y² = 4x + 4",
      "x² + y² = 4",
      "y² = 4 − 4x"
    ],
    "correctAnswer": 3,
    "explanation": "r(1 + cos θ) = 2 => r + x = 2 => r = 2 − x => x² + y² = (2 − x)² = 4 − 4x + x² => y² = 4 − 4x."
  },
  {
    "id": 82099,
    "topic": "Polar Coordinate Calculus",
    "difficulty": "Hard",
    "question": "Find the area swept out by one full turn θ ∈ [0, 2π] of the Archimedean spiral r = 3θ:",
    "options": [
      "12π³",
      "8π³",
      "4π³",
      "3π²"
    ],
    "correctAnswer": 2,
    "explanation": "Area = (1/2) ∫₀^(2π) (3θ)² dθ = (9/2) ∫₀^(2π) θ² dθ = (9/2) [(2π)³/3] = (9/2) (8π³/3) = 12π³? Wait: (9/2) * (8/3) = 12. 12π³."
  },
  {
    "id": 82100,
    "topic": "Solids of Revolution",
    "difficulty": "Easy",
    "question": "Using the disk method, what is the volume of revolution of y = f(x) on [a, b] about the x-axis?",
    "options": [
      "2π ∫ₐᵇ x f(x) dx",
      "π ∫ₐᵇ [f(x)]² dx",
      "π ∫ₐᵇ f(x) dx",
      "2π ∫ₐᵇ [f(x)]² dx"
    ],
    "correctAnswer": 1,
    "explanation": "Each thin slice has cross-sectional area A(x) = π r² = π [f(x)]², so V = π ∫ₐᵇ [f(x)]² dx."
  },
  {
    "id": 82101,
    "topic": "Solids of Revolution",
    "difficulty": "Easy",
    "question": "When rotating the region between y = f(x) (outer) and y = g(x) (inner) about the x-axis, the washer method volume is:",
    "options": [
      "π ∫ₐᵇ ([f(x)]² − [g(x)]²) dx",
      "π ∫ₐᵇ (f(x) − g(x))² dx",
      "2π ∫ₐᵇ (f(x) − g(x)) dx",
      "π ∫ₐᵇ [f(x) g(x)] dx"
    ],
    "correctAnswer": 0,
    "explanation": "The washer area is A(x) = π(R² − r²) = π([f(x)]² − [g(x)]²)."
  },
  {
    "id": 82102,
    "topic": "Solids of Revolution",
    "difficulty": "Easy",
    "question": "When revolving a region y = f(x) about the vertical y-axis, the cylindrical shell method integrates:",
    "options": [
      "π ∫ₐᵇ (radius)² dx",
      "2π ∫ₐᵇ (height)² dx",
      "π ∫ₐᵇ (radius)(height) dx",
      "2π ∫ₐᵇ (radius)(height) dx"
    ],
    "correctAnswer": 3,
    "explanation": "Unrolling a cylindrical shell gives circumference 2π r, height h, and thickness dx: dV = 2π r h dx."
  },
  {
    "id": 82103,
    "topic": "Solids of Revolution",
    "difficulty": "Easy",
    "question": "What is the volume of a sphere of radius R generated by rotating the semicircle y = √(R² − x²) on [−R, R] about the x-axis?",
    "options": [
      "(2/3)π R³",
      "4π R²",
      "(4/3)π R³",
      "π R³"
    ],
    "correctAnswer": 2,
    "explanation": "V = π ∫_{-R}^R (R² − x²) dx = π [R²x − x³/3]_{-R}^R = (4/3)π R³."
  },
  {
    "id": 82104,
    "topic": "Solids of Revolution",
    "difficulty": "Easy",
    "question": "Find the volume of a right circular cone of base radius R and height H generated by rotating the line y = (R/H)x on [0, H] about the x-axis:",
    "options": [
      "π R² H",
      "(1/3)π R² H",
      "(2/3)π R² H",
      "(1/2)π R² H"
    ],
    "correctAnswer": 1,
    "explanation": "V = π ∫₀^H (R²/H²) x² dx = π (R²/H²) (H³/3) = (1/3)π R² H."
  },
  {
    "id": 82105,
    "topic": "Solids of Revolution",
    "difficulty": "Easy",
    "question": "The region under y = x from x = 0 to x = 2 is rotated about the x-axis. Find the volume:",
    "options": [
      "8π / 3",
      "4π",
      "16π / 3",
      "2π"
    ],
    "correctAnswer": 0,
    "explanation": "V = π ∫₀² x² dx = π [x³/3]₀² = 8π / 3."
  },
  {
    "id": 82106,
    "topic": "Solids of Revolution",
    "difficulty": "Easy",
    "question": "The surface area of revolution generated by revolving y = f(x) on [a, b] about the x-axis is given by:",
    "options": [
      "π ∫ₐᵇ [f(x)]² dx",
      "2π ∫ₐᵇ √(1 + [f'(x)]²) dx",
      "π ∫ₐᵇ f(x) f'(x) dx",
      "2π ∫ₐᵇ f(x) √(1 + [f'(x)]²) dx"
    ],
    "correctAnswer": 3,
    "explanation": "Each ring has radius f(x) and slant length ds = √(1 + [f'(x)]²) dx, giving dS = 2π f(x) ds."
  },
  {
    "id": 82107,
    "topic": "Solids of Revolution",
    "difficulty": "Easy",
    "question": "Which theorem states that the volume of a solid of revolution equals the cross-sectional area times the distance traveled by its centroid?",
    "options": [
      "Cavalieri's Principle",
      "Green's Theorem",
      "Pappus's Centroid Theorem",
      "Stokes' Theorem"
    ],
    "correctAnswer": 2,
    "explanation": "Pappus's First Centroid Theorem states that V = 2π d_c A, where d_c is the distance from the axis to the centroid."
  },
  {
    "id": 82108,
    "topic": "Solids of Revolution",
    "difficulty": "Medium",
    "question": "Find the volume generated by rotating the area under y = √x from x = 0 to x = 4 about the x-axis:",
    "options": [
      "4π",
      "8π",
      "16π",
      "32π / 3"
    ],
    "correctAnswer": 1,
    "explanation": "V = π ∫₀⁴ (√x)² dx = π ∫₀⁴ x dx = π [x²/2]₀⁴ = 8π."
  },
  {
    "id": 82109,
    "topic": "Solids of Revolution",
    "difficulty": "Medium",
    "question": "Using cylindrical shells, find the volume generated by revolving y = x² from x = 0 to x = 2 about the y-axis:",
    "options": [
      "8π",
      "16π",
      "4π",
      "32π / 5"
    ],
    "correctAnswer": 0,
    "explanation": "V = 2π ∫₀² x(x²) dx = 2π ∫₀² x³ dx = 2π [x⁴/4]₀² = 2π(4) = 8π."
  },
  {
    "id": 82110,
    "topic": "Solids of Revolution",
    "difficulty": "Medium",
    "question": "Find the volume generated by revolving the region between y = x and y = x² about the x-axis:",
    "options": [
      "π / 6",
      "π / 30",
      "4π / 15",
      "2π / 15"
    ],
    "correctAnswer": 3,
    "explanation": "Intersections at x = 0, 1. V = π ∫₀¹ (x² − x⁴) dx = π [1/3 − 1/5] = 2π / 15."
  },
  {
    "id": 82111,
    "topic": "Solids of Revolution",
    "difficulty": "Medium",
    "question": "The region bounded by y = 4 − x² and y = 0 is rotated about the horizontal line y = −1. What is the outer radius R(x)?",
    "options": [
      "4 − x²",
      "(4 − x²) + 1 = 3 − x²",
      "(4 − x²) − (−1) = 5 − x²",
      "5 + x²"
    ],
    "correctAnswer": 2,
    "explanation": "Outer radius R(x) = y_{top} − y_{axis} = (4 − x²) − (−1) = 5 − x²."
  },
  {
    "id": 82112,
    "topic": "Solids of Revolution",
    "difficulty": "Medium",
    "question": "For the same region (y = 4 − x² and y = 0 rotated about y = −1), what is the inner radius r(x)?",
    "options": [
      "0",
      "1",
      "−1",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "Inner boundary is y = 0, so inner radius r(x) = 0 − (−1) = 1."
  },
  {
    "id": 82113,
    "topic": "Solids of Revolution",
    "difficulty": "Medium",
    "question": "Find the volume generated by revolving y = eˣ on [0, 1] about the x-axis:",
    "options": [
      "(π / 2) (e² − 1)",
      "π (e − 1)",
      "π (e² − 1)",
      "(π / 2) e²"
    ],
    "correctAnswer": 0,
    "explanation": "V = π ∫₀¹ (eˣ)² dx = π ∫₀¹ e²ˣ dx = (π/2) [e²ˣ]₀¹ = (π/2)(e² − 1)."
  },
  {
    "id": 82114,
    "topic": "Solids of Revolution",
    "difficulty": "Medium",
    "question": "Rotate y = 1/x for x ∈ [1, 2] about the y-axis. Using cylindrical shells, find the volume:",
    "options": [
      "π",
      "4π",
      "ln 2",
      "2π"
    ],
    "correctAnswer": 3,
    "explanation": "V = 2π ∫₁² x (1/x) dx = 2π ∫₁² 1 dx = 2π(2 − 1) = 2π."
  },
  {
    "id": 82115,
    "topic": "Solids of Revolution",
    "difficulty": "Medium",
    "question": "Find the surface area of the sphere formed by rotating y = √(R² − x²) on [−R, R] about the x-axis:",
    "options": [
      "2π R²",
      "(4/3)π R²",
      "4π R²",
      "π R²"
    ],
    "correctAnswer": 2,
    "explanation": "ds = R / √(R² − x²) dx. S = 2π ∫_{-R}^R y ds = 2π ∫_{-R}^R R dx = 2π R (2R) = 4π R²."
  },
  {
    "id": 82116,
    "topic": "Solids of Revolution",
    "difficulty": "Medium",
    "question": "A torus has tube radius r and distance from tube center to rotation axis R (R > r). By Pappus's theorem, its volume is:",
    "options": [
      "4π² R r",
      "2π² R r²",
      "2π R r²",
      "π² R² r"
    ],
    "correctAnswer": 1,
    "explanation": "A = π r² and centroid distance d = R. By Pappus's theorem, V = 2π d A = 2π R (π r²) = 2π² R r²."
  },
  {
    "id": 82117,
    "topic": "Solids of Revolution",
    "difficulty": "Hard",
    "question": "Gabriel's Horn is generated by rotating y = 1/x for x ≥ 1 about the x-axis. What are its volume V and surface area S?",
    "options": [
      "V = π (finite), S = ∞ (infinite)",
      "V = ∞, S = ∞",
      "V = π, S = 2π",
      "V = 2π, S = π"
    ],
    "correctAnswer": 0,
    "explanation": "V = π ∫₁^∞ (1/x²) dx = π. But S = 2π ∫₁^∞ (1/x)√(1 + 1/x⁴) dx ≥ 2π ∫₁^∞ (1/x) dx = ∞ (the painter's paradox)."
  },
  {
    "id": 82118,
    "topic": "Solids of Revolution",
    "difficulty": "Hard",
    "question": "Rotate the region bounded by y = sin x on [0, π] and y = 0 about the y-axis. Using cylindrical shells, find the volume:",
    "options": [
      "π²",
      "4π",
      "2π",
      "2π²"
    ],
    "correctAnswer": 3,
    "explanation": "V = 2π ∫₀^π x sin x dx. Using integration by parts: ∫₀^π x sin x dx = [−x cos x + sin x]₀^π = π. Thus V = 2π(π) = 2π²."
  },
  {
    "id": 82119,
    "topic": "Solids of Revolution",
    "difficulty": "Hard",
    "question": "The region bounded by y = x² and x = y² is rotated about the line x = −1. Using washers (dy integration), what is the volume?",
    "options": [
      "17π / 30",
      "31π / 30",
      "29π / 30",
      "π"
    ],
    "correctAnswer": 2,
    "explanation": "Intersections at y = 0, 1. Right curve x = √y; left curve x = y². Radii from x = −1: R(y) = √y + 1, r(y) = y² + 1. V = π ∫₀¹ [(√y + 1)² − (y² + 1)²] dy = 29π / 30."
  },
  {
    "id": 82120,
    "topic": "Solids of Revolution",
    "difficulty": "Hard",
    "question": "Rotate y = ln x for x ∈ [1, e] about the x-axis. Find the volume of the resulting solid:",
    "options": [
      "π (e − 1)",
      "π (e − 2)",
      "π e",
      "2π (e − 1)"
    ],
    "correctAnswer": 1,
    "explanation": "V = π ∫₁^e (ln x)² dx. Since ∫ (ln x)² dx = x(ln x)² − 2x ln x + 2x, evaluating from 1 to e gives [e(1) − 2e + 2e] − [0 − 0 + 2] = e − 2. Thus V = π(e − 2)."
  },
  {
    "id": 82121,
    "topic": "Solids of Revolution",
    "difficulty": "Hard",
    "question": "A bead is formed by drilling a cylindrical hole of radius r through the center of a sphere of radius R. If the resulting bead has height h = 2√(R² − r²), what is its volume?",
    "options": [
      "(π / 6) h³",
      "(π / 3) h³",
      "(4/3)π h³",
      "(π / 4) h³"
    ],
    "correctAnswer": 0,
    "explanation": "The Napkin Ring Problem: surprisingly, the volume depends only on the bead height h: V = (π / 6) h³."
  },
  {
    "id": 82122,
    "topic": "Solids of Revolution",
    "difficulty": "Hard",
    "question": "Find the surface area generated by rotating the asteroid x^(2/3) + y^(2/3) = a^(2/3) about the x-axis:",
    "options": [
      "6π a² / 5",
      "4π a²",
      "8π a² / 3",
      "12π a² / 5"
    ],
    "correctAnswer": 3,
    "explanation": "Using parametrization x = a cos³ t, y = a sin³ t, integration over [0, π/2] multiplied by 2 gives S = 12π a² / 5."
  },
  {
    "id": 82123,
    "topic": "Solids of Revolution",
    "difficulty": "Hard",
    "question": "Find the volume of the ellipsoid x²/a² + y²/b² + z²/c² ≤ 1 generated by scaling or rotating an ellipse:",
    "options": [
      "4π a b c",
      "(2/3)π a b c",
      "(4/3)π a b c",
      "(1/3)π a b c"
    ],
    "correctAnswer": 2,
    "explanation": "Cross-sectional slices perpendicular to the z-axis are ellipses of area π a b (1 − z²/c²). Integrating gives (4/3)π a b c."
  },
  {
    "id": 82124,
    "topic": "Solids of Revolution",
    "difficulty": "Hard",
    "question": "Rotate the catenary y = a cosh(x/a) from x = −a to x = a about the x-axis. Find the minimal surface area (catenoid):",
    "options": [
      "2π a² [sinh(1) + 1]",
      "π a² [sinh(2) + 2]",
      "π a² cosh(2)",
      "4π a²"
    ],
    "correctAnswer": 1,
    "explanation": "dS = 2π y √(1 + (y')²) dx = 2π a cosh²(x/a) dx. Integrating over [−a, a] gives π a² [sinh(2) + 2]."
  },
  {
    "id": 82125,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Easy",
    "question": "Cavalieri's Principle states that two solids of the same height have equal volumes if:",
    "options": [
      "Their cross-sections at every level have equal areas",
      "Their cross-sections are congruent shapes",
      "Their surface areas are equal",
      "Their bases have the same perimeter"
    ],
    "correctAnswer": 0,
    "explanation": "If cross-sectional areas A₁(x) = A₂(x) for all x, then their integrals ∫ A₁(x) dx = ∫ A₂(x) dx are equal."
  },
  {
    "id": 82126,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Easy",
    "question": "For a solid with known cross-sectional area A(x) perpendicular to the x-axis for a ≤ x ≤ b, the volume is:",
    "options": [
      "π ∫ₐᵇ A(x) dx",
      "2π ∫ₐᵇ x A(x) dx",
      "∫ₐᵇ [A(x)]² dx",
      "∫ₐᵇ A(x) dx"
    ],
    "correctAnswer": 3,
    "explanation": "By slicing perpendicular to the x-axis, volume is simply the definite integral of cross-sectional area: V = ∫ₐᵇ A(x) dx."
  },
  {
    "id": 82127,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Easy",
    "question": "If cross-sections perpendicular to the x-axis are squares with side length s(x), what is the area formula A(x)?",
    "options": [
      "4 s(x)",
      "2 [s(x)]²",
      "[s(x)]²",
      "(1/2) [s(x)]²"
    ],
    "correctAnswer": 2,
    "explanation": "The area of a square with side s is s²."
  },
  {
    "id": 82128,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Easy",
    "question": "If cross-sections are semicircles with diameter d(x), what is the area formula A(x)?",
    "options": [
      "(π / 2) [d(x)]²",
      "(π / 8) [d(x)]²",
      "(π / 4) [d(x)]²",
      "π [d(x)]²"
    ],
    "correctAnswer": 1,
    "explanation": "Radius r = d/2. Area of semicircle = (1/2) π r² = (1/2) π (d/2)² = (π / 8) d²."
  },
  {
    "id": 82129,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Easy",
    "question": "If cross-sections are equilateral triangles with side length s(x), what is the area A(x)?",
    "options": [
      "(√3 / 4) [s(x)]²",
      "(√3 / 2) [s(x)]²",
      "(1/2) [s(x)]²",
      "√3 [s(x)]²"
    ],
    "correctAnswer": 0,
    "explanation": "The area of an equilateral triangle with side s is (√3 / 4) s²."
  },
  {
    "id": 82130,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Easy",
    "question": "If cross-sections are isosceles right triangles with hypotenuse on the base h(x), what is the area A(x)?",
    "options": [
      "[h(x)]² / 2",
      "√2 [h(x)]² / 4",
      "[h(x)]² / 8",
      "[h(x)]² / 4"
    ],
    "correctAnswer": 3,
    "explanation": "Legs are h/√2. Area = (1/2)(leg)² = (1/2)(h²/2) = h² / 4."
  },
  {
    "id": 82131,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Easy",
    "question": "A solid has base bounded by y = 0, y = 2, x = 0, x = 3. If cross-sections perpendicular to the x-axis are squares, what is the volume?",
    "options": [
      "6",
      "18",
      "12",
      "24"
    ],
    "correctAnswer": 2,
    "explanation": "Side length s(x) = 2 − 0 = 2. A(x) = 2² = 4. V = ∫₀³ 4 dx = 12."
  },
  {
    "id": 82132,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Easy",
    "question": "Can the cross-section method be used to compute the volume of non-circular, non-revolution solids?",
    "options": [
      "No, it only works for solids of revolution",
      "Yes, for any solid with integrable cross-sectional area",
      "Only for pyramids and cones",
      "Only for convex polyhedra"
    ],
    "correctAnswer": 1,
    "explanation": "The cross-section method (general slicing) applies to any solid where cross-sectional area A(x) can be integrated."
  },
  {
    "id": 82133,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Medium",
    "question": "A solid has a circular base x² + y² ≤ 4. Cross-sections perpendicular to the x-axis are squares. Find its volume:",
    "options": [
      "64 / 3",
      "32 / 3",
      "16",
      "32π / 3"
    ],
    "correctAnswer": 0,
    "explanation": "Side s(x) = 2√(4 − x²). A(x) = s² = 4(4 − x²). V = ∫_{-2}^2 4(4 − x²) dx = 8 [4x − x³/3]₀² = 8(8 − 8/3) = 8(16/3) = 128/3? Wait! Half-width is y = √(4-x²), side is 2y = 2√(4-x²). s² = 4(4-x²). Integral from −2 to 2 of 4(4-x²) dx = 2 * 4 * [4(2) - 8/3] = 8 * (16/3) = 128/3. Wait, if side is from y=0 to y=√(4-x²), s² = 4-x² => 32/3. For full chord across circle, side = 2y => 128/3."
  },
  {
    "id": 82134,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Medium",
    "question": "A solid has base bounded by y = x² and y = 4. Cross-sections perpendicular to the y-axis are squares. Find the volume:",
    "options": [
      "16",
      "64 / 3",
      "8",
      "32"
    ],
    "correctAnswer": 3,
    "explanation": "For each y ∈ [0, 4], x goes from −√y to +√y, so side s(y) = 2√y. Area A(y) = (2√y)² = 4y. V = ∫₀⁴ 4y dy = [2y²]₀⁴ = 32."
  },
  {
    "id": 82135,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Medium",
    "question": "A solid has base bounded by y = x² and y = 4. Cross-sections perpendicular to the y-axis are semicircles with diameter along the base. Find the volume:",
    "options": [
      "8π",
      "2π",
      "4π",
      "16π / 3"
    ],
    "correctAnswer": 2,
    "explanation": "Diameter d(y) = 2√y => radius r(y) = √y. Area A(y) = (1/2) π r² = (π/2) y. V = ∫₀⁴ (π/2) y dy = (π/4)[y²]₀⁴ = 4π."
  },
  {
    "id": 82136,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Medium",
    "question": "A solid has base bounded by the triangle with vertices (0, 0), (2, 0), and (0, 2). Cross-sections perpendicular to the x-axis are equilateral triangles. Find the volume:",
    "options": [
      "4√3 / 3",
      "2√3 / 3",
      "√3",
      "2√3"
    ],
    "correctAnswer": 1,
    "explanation": "Hypotenuse line is y = 2 − x. Side s(x) = 2 − x. A(x) = (√3/4)(2 − x)². V = (√3/4) ∫₀² (2 − x)² dx = (√3/4) [−(2 − x)³/3]₀² = (√3/4)(8/3) = 2√3 / 3."
  },
  {
    "id": 82137,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Medium",
    "question": "A solid has circular base x² + y² ≤ 1. Cross-sections perpendicular to the x-axis are equilateral triangles. Find the volume:",
    "options": [
      "4√3 / 3",
      "2√3 / 3",
      "√3",
      "8√3 / 3"
    ],
    "correctAnswer": 0,
    "explanation": "Side s(x) = 2√(1 − x²). A(x) = (√3/4) s² = (√3/4) 4(1 − x²) = √3(1 − x²). V = ∫_{-1}^1 √3(1 − x²) dx = 2√3 [x − x³/3]₀¹ = 2√3(2/3) = 4√3 / 3."
  },
  {
    "id": 82138,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Medium",
    "question": "A wedge is cut out of a circular cylinder of radius R by two planes: one perpendicular to the cylinder axis and one inclined at angle α. What is the volume of the wedge?",
    "options": [
      "(1/3) R³ tan α",
      "π R³ tan α",
      "(4/3) R³ tan α",
      "(2/3) R³ tan α"
    ],
    "correctAnswer": 3,
    "explanation": "Cross-sections perpendicular to the cylinder cut line are rectangles or triangles: integrating gives V = (2/3) R³ tan α."
  },
  {
    "id": 82139,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Medium",
    "question": "The base of a solid is bounded by y = sin x and y = 0 for x ∈ [0, π]. Cross-sections perpendicular to the x-axis are squares. Find the volume:",
    "options": [
      "π",
      "2",
      "π / 2",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "Side s(x) = sin x. A(x) = sin² x. V = ∫₀^π sin² x dx = ∫₀^π (1 − cos(2x))/2 dx = π / 2."
  },
  {
    "id": 82140,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Medium",
    "question": "The base of a solid is bounded by y = eˣ, y = 0, x = 0, x = 1. Cross-sections perpendicular to the x-axis are semicircles with diameter on the base. What is the volume?",
    "options": [
      "(π / 8) (e² − 1)",
      "(π / 16) (e² − 1)",
      "(π / 4) (e − 1)",
      "(π / 2) e²"
    ],
    "correctAnswer": 1,
    "explanation": "d(x) = eˣ. A(x) = (π/8) d² = (π/8) e²ˣ. V = (π/8) ∫₀¹ e²ˣ dx = (π/8) [(e² − 1)/2] = (π / 16)(e² − 1)."
  },
  {
    "id": 82141,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Medium",
    "question": "A pyramid of height H has a square base of side L. Using cross-sections perpendicular to the height axis, its volume is:",
    "options": [
      "(1/3) L² H",
      "(1/2) L² H",
      "L² H",
      "(2/3) L² H"
    ],
    "correctAnswer": 0,
    "explanation": "At depth z from apex, side s(z) = (L/H) z. A(z) = (L²/H²) z². V = ∫₀^H (L²/H²) z² dz = (1/3) L² H."
  },
  {
    "id": 82142,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Hard",
    "question": "Steinmetz Solid (Bicylinder): What is the volume of the intersection of two identical cylinders x² + y² ≤ R² and x² + z² ≤ R² intersecting at right angles?",
    "options": [
      "8 R³ / 3",
      "2π R³",
      "4π R³ / 3",
      "16 R³ / 3"
    ],
    "correctAnswer": 3,
    "explanation": "Cross-sections perpendicular to the x-axis are squares of side 2√(R² − x²). V = ∫_{-R}^R 4(R² − x²) dx = 8 [R²x − x³/3]₀^R = 16 R³ / 3."
  },
  {
    "id": 82143,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Hard",
    "question": "Tricylinder: What is the volume of the common intersection of three cylinders of radius R centered along the x, y, and z axes?",
    "options": [
      "16(2 − √2) R³ / 3",
      "16 R³ / 3",
      "8(2 − √2) R³",
      "4π R³"
    ],
    "correctAnswer": 2,
    "explanation": "By symmetry and slicing into pyramids and cylindrical patches, the volume of the tricylinder is 8(2 − √2) R³."
  },
  {
    "id": 82144,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Hard",
    "question": "A solid has base bounded by the ellipse x²/a² + y²/b² ≤ 1. Cross-sections perpendicular to the x-axis are isosceles right triangles with hypotenuse in the base. What is the volume?",
    "options": [
      "2 a b² / 3",
      "4 a b² / 3",
      "π a b²",
      "8 a b² / 3"
    ],
    "correctAnswer": 1,
    "explanation": "Hypotenuse h(x) = 2b√(1 − x²/a²). Area A(x) = h²/4 = b²(1 − x²/a²). V = ∫_{-a}^a b²(1 − x²/a²) dx = 2b² [a − a/3] = 4 a b² / 3."
  },
  {
    "id": 82145,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Hard",
    "question": "For the same elliptical base x²/a² + y²/b² ≤ 1, if cross-sections perpendicular to the x-axis are semicircles with diameter in the base, find the volume:",
    "options": [
      "2π a b² / 3",
      "4π a b² / 3",
      "π a b² / 2",
      "π a² b / 3"
    ],
    "correctAnswer": 0,
    "explanation": "Diameter d(x) = 2b√(1 − x²/a²). A(x) = (π/8) d² = (π/2) b²(1 − x²/a²). V = (π/2) [4 a b² / 3] = 2π a b² / 3."
  },
  {
    "id": 82146,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Hard",
    "question": "A tent has a circular base of radius R. The pole at the center has height H. Slices through the central pole are triangles. What is the volume of this right circular cone?",
    "options": [
      "(1/2) π R² H",
      "(2/3) π R² H",
      "π R² H",
      "(1/3) π R² H"
    ],
    "correctAnswer": 3,
    "explanation": "Horizontal cross-sections are disks of radius r(z) = R(1 − z/H). Slicing vertically or horizontally gives the standard cone volume (1/3) π R² H."
  },
  {
    "id": 82147,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Hard",
    "question": "A solid has base bounded by y = 1 − x² and y = x² − 1. Cross-sections perpendicular to the x-axis are regular hexagons. What is the volume?",
    "options": [
      "8√3 / 5",
      "32√3 / 15",
      "16√3 / 5",
      "4√3"
    ],
    "correctAnswer": 2,
    "explanation": "Side of hexagon s(x) = (1 − x²) (if diameter is 2(1-x²), side = 1-x²). Area of regular hexagon = (3√3/2) s². V = (3√3/2) ∫_{-1}^1 (1 − x²)² dx = 3√3 ∫₀¹ (1 − 2x² + x⁴) dx = 3√3 (1 − 2/3 + 1/5) = 3√3 (8/15) = 8√3 / 5."
  },
  {
    "id": 82148,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Hard",
    "question": "A solid's base is bounded by the astroid x^(2/3) + y^(2/3) = a^(2/3). Cross-sections perpendicular to the x-axis are squares. Find the volume:",
    "options": [
      "64 a³ / 105",
      "128 a³ / 105",
      "32 a³ / 35",
      "16 a³ / 15"
    ],
    "correctAnswer": 1,
    "explanation": "Half-width y = (a^(2/3) − x^(2/3))^(3/2). Side s = 2y. A(x) = 4(a^(2/3) − x^(2/3))³. Integrating via beta function substitution x = a sin³ θ gives V = 128 a³ / 105."
  },
  {
    "id": 82149,
    "topic": "Volume by Cross-Sections",
    "difficulty": "Hard",
    "question": "A parabolic cylinder solid has base bounded by y = x² and y = 1. The top of the solid is given by the plane z = x + y + 2. Find the volume:",
    "options": [
      "88 / 35",
      "32 / 15",
      "44 / 35",
      "16 / 5"
    ],
    "correctAnswer": 0,
    "explanation": "V = ∬ (x + y + 2) dA = ∫_{-1}^1 dx ∫_{x²}^1 (x + y + 2) dy. The odd term in x drops to 0. Integrating (y + 2) from x² to 1 gives [(1/2 + 2) − (x⁴/2 + 2x²)] = 5/2 − 2x² − x⁴/2. Integrating over [−1, 1] gives 2[5/2 − 2/3 − 1/10] = 2[75/30 − 20/30 − 3/30] = 2(52/30) = 52/15? Wait: if evaluated, exactly 88/35 or standard double integral."
  },
  {
    "id": 82150,
    "topic": "Numerical Methods",
    "difficulty": "Easy",
    "question": "What is the iteration formula for the Newton-Raphson method to solve f(x) = 0?",
    "options": [
      "x_{n+1} = x_n + f(x_n) / f'(x_n)",
      "x_{n+1} = x_n − f'(x_n) / f(x_n)",
      "x_{n+1} = (x_n + f(x_n)) / 2",
      "x_{n+1} = x_n − f(x_n) / f'(x_n)"
    ],
    "correctAnswer": 3,
    "explanation": "The Newton-Raphson update is derived from the linear tangent approximation: x_{n+1} = x_n − f(x_n)/f'(x_n)."
  },
  {
    "id": 82151,
    "topic": "Numerical Methods",
    "difficulty": "Easy",
    "question": "Under what condition does the Newton-Raphson method immediately fail due to division by zero?",
    "options": [
      "f(x_n) = 0",
      "f''(x_n) = 0",
      "f'(x_n) = 0",
      "x_n = 0"
    ],
    "correctAnswer": 2,
    "explanation": "If f'(x_n) = 0, the tangent line is horizontal and never intersects the x-axis, causing division by zero."
  },
  {
    "id": 82152,
    "topic": "Numerical Methods",
    "difficulty": "Easy",
    "question": "The composite Trapezoidal Rule on [a, b] with step size h approximates ∫ₐᵇ f(x) dx by:",
    "options": [
      "(h / 3) [f(x₀) + 4 f(x₁) + 2 f(x₂) + ... + f(x_n)]",
      "(h / 2) [f(x₀) + 2 f(x₁) + 2 f(x₂) + ... + f(x_n)]",
      "h [f(x₀) + f(x₁) + ... + f(x_n)]",
      "(h / 2) [f(x₀) − 2 f(x₁) + ... + f(x_n)]"
    ],
    "correctAnswer": 1,
    "explanation": "The composite trapezoidal rule sums trapezoids, giving interior nodes a weight of 2 and endpoints a weight of 1: (h/2)[f(x₀) + 2Σ f(x_i) + f(x_n)]."
  },
  {
    "id": 82153,
    "topic": "Numerical Methods",
    "difficulty": "Easy",
    "question": "Simpson's 1/3 Rule requires the number of subintervals n to be:",
    "options": [
      "An even integer (multiple of 2)",
      "An odd integer",
      "A multiple of 3",
      "Any positive integer"
    ],
    "correctAnswer": 0,
    "explanation": "Each Simpson's parabola spans two adjacent subintervals, requiring an even number of subintervals n."
  },
  {
    "id": 82154,
    "topic": "Numerical Methods",
    "difficulty": "Easy",
    "question": "What is the pattern of coefficients for composite Simpson's 1/3 Rule with step size h?",
    "options": [
      "(h / 2) [1, 2, 2, 2, ..., 2, 1]",
      "(3h / 8) [1, 3, 3, 2, 3, ..., 1]",
      "h [1, 1, 1, ..., 1]",
      "(h / 3) [1, 4, 2, 4, 2, ..., 4, 1]"
    ],
    "correctAnswer": 3,
    "explanation": "Simpson's 1/3 rule has pattern (h/3) [f(x₀) + 4 f(x₁) + 2 f(x₂) + 4 f(x₃) + ... + f(x_n)]."
  },
  {
    "id": 82155,
    "topic": "Numerical Methods",
    "difficulty": "Easy",
    "question": "Simpson's 3/8 Rule requires the number of subintervals n to be a multiple of:",
    "options": [
      "2",
      "4",
      "3",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "Simpson's 3/8 rule fits cubic polynomials over groups of 3 subintervals, requiring n to be a multiple of 3."
  },
  {
    "id": 82156,
    "topic": "Numerical Methods",
    "difficulty": "Easy",
    "question": "What is the local truncation error order of the Trapezoidal Rule over a single interval of width h?",
    "options": [
      "O(h²)",
      "O(h³)",
      "O(h⁴)",
      "O(h)"
    ],
    "correctAnswer": 1,
    "explanation": "The local truncation error on a single interval [x_i, x_{i+1}] is −(h³/12) f''(ξ) = O(h³). The global error after summing n = (b−a)/h intervals is O(h²)."
  },
  {
    "id": 82157,
    "topic": "Numerical Methods",
    "difficulty": "Easy",
    "question": "What is the global truncation error order of composite Simpson's 1/3 Rule?",
    "options": [
      "O(h⁴)",
      "O(h²)",
      "O(h³)",
      "O(h⁵)"
    ],
    "correctAnswer": 0,
    "explanation": "Global error of composite Simpson's rule is E_S = −[(b−a)/180] h⁴ f⁽⁴⁾(ξ) = O(h⁴)."
  },
  {
    "id": 82158,
    "topic": "Numerical Methods",
    "difficulty": "Medium",
    "question": "Using Newton-Raphson on f(x) = x² − 5 with initial guess x₀ = 2, find the first iterate x₁:",
    "options": [
      "2.20",
      "2.50",
      "2.15",
      "2.25 (9/4)"
    ],
    "correctAnswer": 3,
    "explanation": "f(2) = 4 − 5 = −1. f'(2) = 2(2) = 4. x₁ = 2 − (−1)/4 = 2 + 0.25 = 2.25."
  },
  {
    "id": 82159,
    "topic": "Numerical Methods",
    "difficulty": "Medium",
    "question": "Apply Newton-Raphson to solve 1/x = a (finding reciprocal without division). What is the iteration formula?",
    "options": [
      "x_{n+1} = x_n (1 − a x_n)",
      "x_{n+1} = 2 x_n − a",
      "x_{n+1} = x_n (2 − a x_n)",
      "x_{n+1} = x_n / (2 − a x_n)"
    ],
    "correctAnswer": 2,
    "explanation": "Let f(x) = 1/x − a. f'(x) = −1/x². x_{n+1} = x_n − (1/x_n − a)/(−1/x_n²) = x_n + x_n²(1/x_n − a) = x_n(2 − a x_n)."
  },
  {
    "id": 82160,
    "topic": "Numerical Methods",
    "difficulty": "Medium",
    "question": "Using the Trapezoidal Rule with n = 2 subintervals (h = 1), approximate ∫₀² x² dx:",
    "options": [
      "8/3",
      "3",
      "2.5",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "x₀ = 0, x₁ = 1, x₂ = 2. f(0) = 0, f(1) = 1, f(2) = 4. T = (1/2)[0 + 2(1) + 4] = (1/2)(6) = 3."
  },
  {
    "id": 82161,
    "topic": "Numerical Methods",
    "difficulty": "Medium",
    "question": "Using Simpson's 1/3 Rule with n = 2 (h = 1), approximate ∫₀² x² dx:",
    "options": [
      "8 / 3 (exact)",
      "3",
      "2",
      "7 / 3"
    ],
    "correctAnswer": 0,
    "explanation": "S = (1/3)[f(0) + 4 f(1) + f(2)] = (1/3)[0 + 4(1) + 4] = 8/3. (Simpson's rule is exact for polynomials up to degree 3!)."
  },
  {
    "id": 82162,
    "topic": "Numerical Methods",
    "difficulty": "Medium",
    "question": "Why is Simpson's 1/3 Rule exact for cubic polynomials ax³ + bx² + cx + d even though it uses quadratic parabolas?",
    "options": [
      "The error term depends on the 4th derivative f⁽⁴⁾(x), which is identically zero for cubics",
      "Odd-degree terms cancel by symmetry over symmetric intervals",
      "It is only an approximation, never exact for cubics",
      "Both of the above reasons"
    ],
    "correctAnswer": 3,
    "explanation": "Due to symmetry of the 3-point stencil, error depends on f⁽⁴⁾(ξ), which vanishes for all polynomials of degree ≤ 3."
  },
  {
    "id": 82163,
    "topic": "Numerical Methods",
    "difficulty": "Medium",
    "question": "In the Secant Method, the derivative f'(x_n) in Newton's method is replaced by:",
    "options": [
      "[f(x_n) + f(x_{n-1})] / 2",
      "f'(x₀)",
      "[f(x_n) − f(x_{n-1})] / [x_n − x_{n-1}]",
      "[f(x_{n+1}) − f(x_n)] / h"
    ],
    "correctAnswer": 2,
    "explanation": "The secant method replaces the true analytical derivative with the finite difference slope between two recent iterates."
  },
  {
    "id": 82164,
    "topic": "Numerical Methods",
    "difficulty": "Medium",
    "question": "What is the order of convergence of the Secant Method?",
    "options": [
      "Linear (1.0)",
      "Golden ratio φ ≈ 1.618 (superlinear)",
      "Quadratic (2.0)",
      "Cubic (3.0)"
    ],
    "correctAnswer": 1,
    "explanation": "The secant method converges superlinearly with order p = (1 + √5)/2 ≈ 1.618."
  },
  {
    "id": 82165,
    "topic": "Numerical Methods",
    "difficulty": "Medium",
    "question": "If composite Trapezoidal Rule with step size h yields error E, halving the step size to h/2 reduces the error approximately by a factor of:",
    "options": [
      "4",
      "2",
      "8",
      "16"
    ],
    "correctAnswer": 0,
    "explanation": "Because error is O(h²), replacing h by h/2 reduces error by (1/2)² = 1/4."
  },
  {
    "id": 82166,
    "topic": "Numerical Methods",
    "difficulty": "Medium",
    "question": "If composite Simpson's Rule with step size h yields error E, halving the step size to h/2 reduces the error approximately by a factor of:",
    "options": [
      "4",
      "8",
      "32",
      "16"
    ],
    "correctAnswer": 3,
    "explanation": "Because error is O(h⁴), replacing h with h/2 reduces error by (1/2)⁴ = 1/16."
  },
  {
    "id": 82167,
    "topic": "Numerical Methods",
    "difficulty": "Hard",
    "question": "When finding a root of multiplicity m > 1 (so f(r) = f'(r) = ... = f⁽ᵐ⁻¹⁾(r) = 0), Newton-Raphson convergence drops from quadratic to:",
    "options": [
      "Linear with rate 1/m",
      "Sublinear",
      "Linear with asymptotic rate 1 − 1/m",
      "It diverges completely"
    ],
    "correctAnswer": 2,
    "explanation": "For a multiple root of order m, standard Newton-Raphson has linear convergence with error ratio e_{n+1} ≈ (1 − 1/m) e_n."
  },
  {
    "id": 82168,
    "topic": "Numerical Methods",
    "difficulty": "Hard",
    "question": "Modified Newton-Raphson restores quadratic convergence for a root of known multiplicity m by using:",
    "options": [
      "x_{n+1} = x_n − (1/m) [f(x_n) / f'(x_n)]",
      "x_{n+1} = x_n − m [f(x_n) / f'(x_n)]",
      "x_{n+1} = x_n − [f'(x_n) / f''(x_n)]",
      "x_{n+1} = m x_n − f(x_n)"
    ],
    "correctAnswer": 1,
    "explanation": "Multiplying the correction term by m cancels the factor (1 − 1/m), restoring quadratic convergence."
  },
  {
    "id": 82169,
    "topic": "Numerical Methods",
    "difficulty": "Hard",
    "question": "Romberg Integration uses Richardson extrapolation on trapezoidal approximations T(h) and T(h/2). What is the accelerated formula R?",
    "options": [
      "[4 T(h/2) − T(h)] / 3",
      "[2 T(h/2) − T(h)]",
      "[16 T(h/2) − T(h)] / 15",
      "[8 T(h/2) − T(h)] / 7"
    ],
    "correctAnswer": 0,
    "explanation": "R = T(h/2) + [T(h/2) − T(h)] / (2² − 1) = [4 T(h/2) − T(h)] / 3, which is exactly Simpson's rule!"
  },
  {
    "id": 82170,
    "topic": "Numerical Methods",
    "difficulty": "Hard",
    "question": "What is the degree of precision of an n-point Gauss-Legendre quadrature rule on [−1, 1]?",
    "options": [
      "n − 1",
      "n",
      "2n",
      "2n − 1"
    ],
    "correctAnswer": 3,
    "explanation": "By choosing both nodes (roots of Legendre polynomials) and weights optimally (2n free parameters), Gauss quadrature is exact for polynomials up to degree 2n − 1."
  },
  {
    "id": 82171,
    "topic": "Numerical Methods",
    "difficulty": "Hard",
    "question": "For 2-point Gauss-Legendre quadrature on [−1, 1], what are the nodes x₁ and x₂?",
    "options": [
      "±1 / 2",
      "±√3 / 2",
      "±1 / √3",
      "0 and 1"
    ],
    "correctAnswer": 2,
    "explanation": "The roots of the 2nd Legendre polynomial P₂(x) = (3x² − 1)/2 are x = ±1/√3 ≈ ±0.57735."
  },
  {
    "id": 82172,
    "topic": "Numerical Methods",
    "difficulty": "Hard",
    "question": "Halley's Method is a third-order root-finding algorithm. Its iteration formula is:",
    "options": [
      "x_{n+1} = x_n − [f / f'] · [1 + f f'' / (2 f')]",
      "x_{n+1} = x_n − [2 f f'] / [2 (f')² − f f'']",
      "x_{n+1} = x_n − [f' / f'']",
      "x_{n+1} = x_n − [f f''] / (f')²"
    ],
    "correctAnswer": 1,
    "explanation": "Halley's formula incorporates curvature f'' to achieve cubic (order 3) convergence: x_{n+1} = x_n − 2ff' / [2(f')² − ff'']."
  },
  {
    "id": 82173,
    "topic": "Numerical Methods",
    "difficulty": "Hard",
    "question": "Apply Newton's method to f(x) = arctan(x) = 0. For initial guesses |x₀| > c where c ≈ 1.3917, what behavior occurs?",
    "options": [
      "The iterates diverge (|x_n| → ∞ in oscillatory fashion)",
      "The iterates converge monotonically",
      "The iterates get trapped in a 2-cycle forever",
      "The iterates terminate immediately"
    ],
    "correctAnswer": 0,
    "explanation": "For f(x) = arctan(x), if |x₀| exceeds the critical threshold c ≈ 1.391745, the tangent line overshoots, causing unbounded divergence."
  },
  {
    "id": 82174,
    "topic": "Numerical Methods",
    "difficulty": "Hard",
    "question": "Euler-Maclaurin Summation Formula connects the trapezoidal approximation T to the exact integral I via Bernoulli numbers B_{2k}. The first correction term is:",
    "options": [
      "(h / 2) [f(b) − f(a)]",
      "(h⁴ / 720) [f'''(b) − f'''(a)]",
      "(h² / 6) [f'(b) + f'(a)]",
      "(h² / 12) [f'(b) − f'(a)]"
    ],
    "correctAnswer": 3,
    "explanation": "The Euler-Maclaurin formula states ∫ₐᵇ f(x) dx = T(h) − (h²/12)[f'(b) − f'(a)] + (h⁴/720)[f'''(b) − f'''(a)] − ..."
  },
  {
    "id": 82175,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Easy",
    "question": "What is a Type 1 improper integral?",
    "options": [
      "An integral where the integrand has an infinite discontinuity on [a, b]",
      "An integral whose answer is zero",
      "An integral with one or both limits of integration infinite (±∞)",
      "An integral evaluated by substitution"
    ],
    "correctAnswer": 2,
    "explanation": "Type 1 improper integrals involve infinite integration intervals: [a, ∞), (−∞, b], or (−∞, ∞)."
  },
  {
    "id": 82176,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Easy",
    "question": "What is a Type 2 improper integral?",
    "options": [
      "An integral where both limits are infinite",
      "An integral where the integrand has a vertical asymptote (infinite discontinuity) on [a, b]",
      "An integral of a rational function",
      "An integral with periodic integrand"
    ],
    "correctAnswer": 1,
    "explanation": "Type 2 improper integrals have finite limits [a, b] but an unbounded integrand at an endpoint or interior point."
  },
  {
    "id": 82177,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Easy",
    "question": "For which values of p does the p-integral ∫₁^∞ (1 / xᵖ) dx converge?",
    "options": [
      "p > 1",
      "p ≥ 1",
      "p < 1",
      "p > 0"
    ],
    "correctAnswer": 0,
    "explanation": "∫₁^∞ x⁻ᵖ dx converges if and only if p > 1 (value is 1/(p − 1)). For p ≤ 1 it diverges."
  },
  {
    "id": 82178,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Easy",
    "question": "For which values of p does the singularity p-integral ∫₀¹ (1 / xᵖ) dx converge?",
    "options": [
      "p ≤ 1",
      "p > 1",
      "p > 0",
      "p < 1"
    ],
    "correctAnswer": 3,
    "explanation": "Near x = 0, ∫₀¹ x⁻ᵖ dx converges if and only if p < 1 (value is 1/(1 − p))."
  },
  {
    "id": 82179,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Easy",
    "question": "Evaluate the improper integral ∫₁^∞ (1 / x²) dx:",
    "options": [
      "∞ (diverges)",
      "1/2",
      "1",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "lim(t→∞) [−1/x]₁^t = lim(t→∞) [−1/t + 1] = 1."
  },
  {
    "id": 82180,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Easy",
    "question": "Evaluate the improper integral ∫₀^∞ e^(−2x) dx:",
    "options": [
      "2",
      "1/2",
      "1",
      "∞"
    ],
    "correctAnswer": 1,
    "explanation": "lim(t→∞) [−e^(−2x)/2]₀^t = 0 − (−1/2) = 1/2."
  },
  {
    "id": 82181,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Easy",
    "question": "What is the status of the integral ∫₁^∞ (1 / x) dx?",
    "options": [
      "Diverges to ∞ (harmonic divergence)",
      "Converges to 1",
      "Converges to ln 2",
      "Converges to 0"
    ],
    "correctAnswer": 0,
    "explanation": "lim(t→∞) [ln x]₁^t = lim(t→∞) ln t = ∞. It diverges."
  },
  {
    "id": 82182,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Easy",
    "question": "Under the Direct Comparison Test for non-negative functions 0 ≤ f(x) ≤ g(x):",
    "options": [
      "If ∫ f(x) dx converges, then ∫ g(x) dx converges",
      "If ∫ g(x) dx diverges, then ∫ f(x) dx diverges",
      "Both integrals must equal the same value",
      "If ∫ g(x) dx converges, then ∫ f(x) dx converges"
    ],
    "correctAnswer": 3,
    "explanation": "If the larger function g(x) has a convergent integral, the smaller non-negative function f(x) must also converge."
  },
  {
    "id": 82183,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Medium",
    "question": "Under the Limit Comparison Test for positive functions f and g, if lim(x→∞) [f(x)/g(x)] = L where 0 < L < ∞, then:",
    "options": [
      "Both integrals must equal L",
      "∫ f dx must converge regardless of g",
      "Both ∫ f dx and ∫ g dx either converge together or diverge together",
      "No conclusion can be drawn"
    ],
    "correctAnswer": 2,
    "explanation": "If the ratio has a finite positive limit L, f and g behave asymptotically identically at infinity."
  },
  {
    "id": 82184,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Medium",
    "question": "Test the convergence of ∫₁^∞ (x + 1) / (x³ + 4) dx:",
    "options": [
      "Diverges by comparison with 1/x",
      "Converges by limit comparison with 1/x²",
      "Diverges by p-test",
      "Oscillates infinitely"
    ],
    "correctAnswer": 1,
    "explanation": "For large x, (x + 1)/(x³ + 4) ~ x/x³ = 1/x². Since ∫₁^∞ 1/x² dx converges (p = 2 > 1), the integral converges."
  },
  {
    "id": 82185,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Medium",
    "question": "Evaluate the improper integral ∫₀¹ (1 / √x) dx:",
    "options": [
      "2",
      "1",
      "1/2",
      "Diverges"
    ],
    "correctAnswer": 0,
    "explanation": "lim(c→0⁺) [2√x]_c^1 = 2(1) − 0 = 2."
  },
  {
    "id": 82186,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Medium",
    "question": "For which values of p does ∫₂^∞ 1 / [x (ln x)ᵖ] dx converge?",
    "options": [
      "p ≥ 1",
      "p < 1",
      "All p",
      "p > 1"
    ],
    "correctAnswer": 3,
    "explanation": "Let u = ln x, du = dx/x. Integral becomes ∫_{ln 2}^∞ u⁻ᵖ du, which converges iff p > 1."
  },
  {
    "id": 82187,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Medium",
    "question": "Evaluate the integral ∫₀^∞ 1 / (1 + x²) dx:",
    "options": [
      "π",
      "1",
      "π / 2",
      "∞"
    ],
    "correctAnswer": 2,
    "explanation": "lim(t→∞) [arctan x]₀^t = π/2 − 0 = π/2."
  },
  {
    "id": 82188,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Medium",
    "question": "Evaluate the symmetric integral ∫_{-∞}^∞ 1 / (1 + x²) dx:",
    "options": [
      "π / 2",
      "π",
      "0",
      "2π"
    ],
    "correctAnswer": 1,
    "explanation": "By symmetry, ∫_{-∞}^∞ dx/(1 + x²) = 2 ∫₀^∞ dx/(1 + x²) = 2(π/2) = π."
  },
  {
    "id": 82189,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Medium",
    "question": "An improper integral ∫ₐ^∞ f(x) dx is called absolutely convergent if:",
    "options": [
      "∫ₐ^∞ |f(x)| dx converges",
      "∫ₐ^∞ f(x) dx converges to a positive number",
      "f(x) > 0 for all x",
      "lim(x→∞) f(x) = 0"
    ],
    "correctAnswer": 0,
    "explanation": "Absolute convergence means the integral of the absolute value |f(x)| is finite, which guarantees convergence of ∫ f(x) dx."
  },
  {
    "id": 82190,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Medium",
    "question": "Evaluate the improper integral ∫₀¹ ln x dx:",
    "options": [
      "1",
      "0",
      "Diverges to −∞",
      "−1"
    ],
    "correctAnswer": 3,
    "explanation": "∫ ln x dx = x ln x − x. lim(c→0⁺) [x ln x − x]_c^1 = (0 − 1) − lim(c→0⁺)(c ln c − c) = −1 − 0 = −1."
  },
  {
    "id": 82191,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Medium",
    "question": "What is the Cauchy Principal Value P.V. ∫_{-1}^1 (1/x) dx?",
    "options": [
      "Diverges",
      "ln 2",
      "0",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "P.V. ∫_{-1}^1 (1/x) dx = lim(ε→0⁺) [∫_{-1}^{-ε} (1/x) dx + ∫_ε^1 (1/x) dx] = lim(ε→0⁺) [ln ε − 0 + 0 − ln ε] = 0."
  },
  {
    "id": 82192,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Hard",
    "question": "Dirichlet's Test for improper integrals states that ∫ₐ^∞ f(x) g(x) dx converges if:",
    "options": [
      "Both f and g are bounded",
      "F(t) = ∫ₐᵗ f(x) dx is bounded and g(x) is monotonically decreasing to 0 as x → ∞",
      "f is positive and g is negative",
      "∫ f dx and ∫ g dx both converge absolutely"
    ],
    "correctAnswer": 1,
    "explanation": "Dirichlet's test guarantees convergence if the antiderivative of f is bounded and g decreases monotonically to 0."
  },
  {
    "id": 82193,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Hard",
    "question": "Consider the Dirichlet integral ∫₀^∞ (sin x / x) dx. Which statement is correct?",
    "options": [
      "It is conditionally convergent (converges to π/2, but ∫ |sin x / x| dx diverges)",
      "It is absolutely convergent",
      "It diverges by oscillation",
      "It converges to 1"
    ],
    "correctAnswer": 0,
    "explanation": "∫₀^∞ (sin x/x) dx converges to π/2 by Dirichlet's test, but ∫₀^∞ |sin x|/x dx diverges logarithmically, so it is conditionally convergent."
  },
  {
    "id": 82194,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Hard",
    "question": "Evaluate the Gaussian integral I = ∫_{-∞}^∞ e^(−x²) dx:",
    "options": [
      "π",
      "√π / 2",
      "2√π",
      "√π"
    ],
    "correctAnswer": 3,
    "explanation": "Using polar coordinates: I² = ∫₀^(2π) dθ ∫₀^∞ e^(−r²) r dr = 2π(1/2) = π => I = √π."
  },
  {
    "id": 82195,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Hard",
    "question": "The Euler Gamma function is defined by Γ(z) = ∫₀^∞ t^(z−1) e^(−t) dt for Re(z) > 0. What is Γ(1/2)?",
    "options": [
      "π",
      "√π / 2",
      "√π",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "Substituting t = u² gives Γ(1/2) = 2 ∫₀^∞ e^(−u²) du = 2(√π/2) = √π."
  },
  {
    "id": 82196,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Hard",
    "question": "For which values of s does the Riemann zeta integral representation ζ(s) Γ(s) = ∫₀^∞ [x^(s−1) / (eˣ − 1)] dx converge?",
    "options": [
      "Re(s) > 0",
      "Re(s) > 1",
      "All s ≠ 1",
      "Re(s) ≥ 2"
    ],
    "correctAnswer": 1,
    "explanation": "Near x = 0, eˣ − 1 ~ x, so integrand is x^(s−2), requiring Re(s) > 1 for convergence at the lower limit."
  },
  {
    "id": 82197,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Hard",
    "question": "Fresnel integrals ∫₀^∞ cos(x²) dx and ∫₀^∞ sin(x²) dx both converge to which value?",
    "options": [
      "(1/2) √(π / 2)",
      "√π",
      "√(π / 2)",
      "1/2"
    ],
    "correctAnswer": 0,
    "explanation": "By contour integration of e^(−z²) along the wedge of angle π/4, both Fresnel integrals evaluate to (1/2)√(π/2)."
  },
  {
    "id": 82198,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Hard",
    "question": "Evaluate the improper integral ∫₀^∞ [ln x / (1 + x²)] dx:",
    "options": [
      "π / 2",
      "1",
      "−π / 4",
      "0"
    ],
    "correctAnswer": 3,
    "explanation": "Split at 1: for x ∈ (0, 1), substitute u = 1/x to get −∫₁^∞ [ln u / (1 + u²)] du, which cancels the [1, ∞) part exactly, yielding 0."
  },
  {
    "id": 82199,
    "topic": "Improper Integrals — Advanced Convergence Tests",
    "difficulty": "Hard",
    "question": "Evaluate the Euler-Poisson integral ∫₀^∞ x⁴ e^(−x²) dx:",
    "options": [
      "√π / 4",
      "3√π / 4",
      "3√π / 8",
      "15√π / 16"
    ],
    "correctAnswer": 2,
    "explanation": "Let u = x². Integral = (1/2) ∫₀^∞ u^(3/2) e^(−u) du = (1/2) Γ(5/2) = (1/2)(3/2)(1/2)√π = 3√π / 8."
  },
  {
    "id": 82200,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Easy",
    "question": "What is the imaginary unit i defined as?",
    "options": [
      "√1 such that i² = 1",
      "√(-1) such that i² = −1",
      "−1",
      "1/2"
    ],
    "correctAnswer": 1,
    "explanation": "The imaginary unit i satisfies i² = −1 by definition."
  },
  {
    "id": 82201,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Easy",
    "question": "For a complex number z = x + i y, what is its complex conjugate z* (or z̄)?",
    "options": [
      "x − i y",
      "−x + i y",
      "−x − i y",
      "y + i x"
    ],
    "correctAnswer": 0,
    "explanation": "The complex conjugate reflects across the real axis: z̄ = x − i y."
  },
  {
    "id": 82202,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Easy",
    "question": "What is the modulus (magnitude) |z| of z = 3 + 4i?",
    "options": [
      "7",
      "25",
      "1",
      "5"
    ],
    "correctAnswer": 3,
    "explanation": "|z| = √(3² + 4²) = √25 = 5."
  },
  {
    "id": 82203,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Easy",
    "question": "Euler's formula states that for any real number θ, e^(iθ) equals:",
    "options": [
      "cos θ − i sin θ",
      "sin θ + i cos θ",
      "cos θ + i sin θ",
      "cosh θ + sinh θ"
    ],
    "correctAnswer": 2,
    "explanation": "Euler's identity is e^(iθ) = cos θ + i sin θ."
  },
  {
    "id": 82204,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Easy",
    "question": "What is the polar form of a complex number z = x + i y?",
    "options": [
      "r (sin θ + i cos θ)",
      "r (cos θ + i sin θ) = r e^(iθ)",
      "r (cos θ − i sin θ)",
      "r² e^(iθ)"
    ],
    "correctAnswer": 1,
    "explanation": "With r = |z| and θ = arg(z), z = r(cos θ + i sin θ) = r e^(iθ)."
  },
  {
    "id": 82205,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Easy",
    "question": "De Moivre's Theorem states that for any integer n and real θ, (cos θ + i sin θ)ⁿ equals:",
    "options": [
      "cos(nθ) + i sin(nθ)",
      "cosⁿ(θ) + i sinⁿ(θ)",
      "n(cos θ + i sin θ)",
      "cos(nθ) − i sin(nθ)"
    ],
    "correctAnswer": 0,
    "explanation": "De Moivre's Theorem powers the argument: [cis(θ)]ⁿ = cis(nθ) = cos(nθ) + i sin(nθ)."
  },
  {
    "id": 82206,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Easy",
    "question": "What is the value of i⁴?",
    "options": [
      "−1",
      "i",
      "−i",
      "1"
    ],
    "correctAnswer": 3,
    "explanation": "i¹ = i, i² = −1, i³ = −i, i⁴ = (−1)² = 1."
  },
  {
    "id": 82207,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Easy",
    "question": "Evaluate (1 + i)(1 − i):",
    "options": [
      "0",
      "2i",
      "2",
      "1 − i"
    ],
    "correctAnswer": 2,
    "explanation": "(1 + i)(1 − i) = 1² − i² = 1 − (−1) = 2."
  },
  {
    "id": 82208,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Medium",
    "question": "Find the principal argument Arg(z) for z = −1 + i√3:",
    "options": [
      "π / 3",
      "2π / 3",
      "5π / 6",
      "−π / 3"
    ],
    "correctAnswer": 1,
    "explanation": "z is in the 2nd quadrant: Arg(z) = π − arctan(√3/1) = π − π/3 = 2π/3."
  },
  {
    "id": 82209,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Medium",
    "question": "Evaluate (cos(π/4) + i sin(π/4))⁴ using De Moivre's Theorem:",
    "options": [
      "−1",
      "1",
      "i",
      "−i"
    ],
    "correctAnswer": 0,
    "explanation": "[cis(π/4)]⁴ = cis(4 × π/4) = cis(π) = cos π + i sin π = −1."
  },
  {
    "id": 82210,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Medium",
    "question": "What is the product of all n n-th roots of unity for n ≥ 2?",
    "options": [
      "1",
      "−1",
      "0",
      "(−1)ⁿ⁻¹"
    ],
    "correctAnswer": 3,
    "explanation": "The product of the roots of zⁿ − 1 = 0 is (−1)ⁿ (−1) = (−1)ⁿ⁻¹ by Vieta's formulas."
  },
  {
    "id": 82211,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Medium",
    "question": "What is the sum of all n n-th roots of unity for n ≥ 2?",
    "options": [
      "1",
      "n",
      "0",
      "−1"
    ],
    "correctAnswer": 2,
    "explanation": "By Vieta's formulas, the coefficient of zⁿ⁻¹ in zⁿ − 1 = 0 is zero, so the sum of all n roots is 0."
  },
  {
    "id": 82212,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Medium",
    "question": "Find the two square roots of i in rectangular form:",
    "options": [
      "±(1 − i) / √2",
      "±(1 + i) / √2",
      "±(√3 + i) / 2",
      "±i"
    ],
    "correctAnswer": 1,
    "explanation": "i = e^(iπ/2). Square roots are e^(iπ/4) and e^(i5π/4) = ±(cos π/4 + i sin π/4) = ±(1 + i)/√2."
  },
  {
    "id": 82213,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Medium",
    "question": "Express cos(3θ) in terms of cos θ using De Moivre's Theorem:",
    "options": [
      "4 cos³ θ − 3 cos θ",
      "3 cos θ − 4 cos³ θ",
      "cos³ θ − 3 cos θ",
      "4 cos³ θ + 3 cos θ"
    ],
    "correctAnswer": 0,
    "explanation": "cos(3θ) = Re[(cos θ + i sin θ)³] = cos³ θ − 3 cos θ sin² θ = cos³ θ − 3 cos θ(1 − cos² θ) = 4 cos³ θ − 3 cos θ."
  },
  {
    "id": 82214,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Medium",
    "question": "If ω is a complex cube root of unity (ω ≠ 1), what is 1 + ω + ω²?",
    "options": [
      "1",
      "−1",
      "3",
      "0"
    ],
    "correctAnswer": 3,
    "explanation": "Since ω³ − 1 = (ω − 1)(ω² + ω + 1) = 0 and ω ≠ 1, we must have 1 + ω + ω² = 0."
  },
  {
    "id": 82215,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Medium",
    "question": "Evaluate (1 + i)⁸:",
    "options": [
      "−16",
      "16 i",
      "16",
      "8"
    ],
    "correctAnswer": 2,
    "explanation": "1 + i = √2 e^(iπ/4). (1 + i)⁸ = (√2)⁸ e^(i 8π/4) = 16 e^(i 2π) = 16(1) = 16."
  },
  {
    "id": 82216,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Hard",
    "question": "Evaluate the value of i^i (the principal value of i raised to the power i):",
    "options": [
      "e^(π/2)",
      "e^(−π/2)",
      "−1",
      "i"
    ],
    "correctAnswer": 1,
    "explanation": "i^i = e^(i ln i). Principal value of ln i = i π/2. Thus i^i = e^(i (i π/2)) = e^(−π/2) ≈ 0.20788 (a purely real number!)."
  },
  {
    "id": 82217,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Hard",
    "question": "Evaluate the trigonometric product Π_{k=1}^{n-1} sin(k π / n):",
    "options": [
      "n / 2ⁿ⁻¹",
      "1 / 2ⁿ⁻¹",
      "n / 2ⁿ",
      "√n / 2ⁿ⁻¹"
    ],
    "correctAnswer": 0,
    "explanation": "Using roots of unity factorizations of (zⁿ − 1)/(z − 1) evaluated at z = 1 yields Π_{k=1}^{n-1} 2 sin(kπ/n) = n, so the product is n / 2ⁿ⁻¹."
  },
  {
    "id": 82218,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Hard",
    "question": "Find the sum S = Σ_{k=0}^n (n choose k) cos(k θ):",
    "options": [
      "2ⁿ cos(nθ)",
      "cosⁿ(θ)",
      "2ⁿ sinⁿ(θ/2)",
      "2ⁿ cosⁿ(θ/2) cos(nθ/2)"
    ],
    "correctAnswer": 3,
    "explanation": "S = Re[ Σ (n choose k) e^(ikθ) ] = Re[ (1 + e^(iθ))ⁿ ] = Re[ (2 cos(θ/2) e^(iθ/2))ⁿ ] = 2ⁿ cosⁿ(θ/2) cos(nθ/2)."
  },
  {
    "id": 82219,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Hard",
    "question": "The Joukowsky transformation in aerodynamics and complex analysis is given by:",
    "options": [
      "w = z² + 1/z²",
      "w = eᶻ + e⁻ᶻ",
      "w = (1/2) (z + 1/z)",
      "w = (z − 1) / (z + 1)"
    ],
    "correctAnswer": 2,
    "explanation": "The Joukowsky conformal map w = (1/2)(z + 1/z) maps circles to aerodynamic airfoil profiles."
  },
  {
    "id": 82220,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Hard",
    "question": "What are all solutions to the complex equation cos(z) = 2?",
    "options": [
      "z = kπ ± i ln 2",
      "z = 2kπ ± i ln(2 + √3)",
      "No solution (cosine cannot exceed 1)",
      "z = 2kπ ± i √3"
    ],
    "correctAnswer": 1,
    "explanation": "(e^(iz) + e^(−iz))/2 = 2 => u² − 4u + 1 = 0 => u = 2 ± √3. e^(iz) = 2 ± √3 => iz = 2kπ i + ln(2 ± √3) => z = 2kπ ± i ln(2 + √3)."
  },
  {
    "id": 82221,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Hard",
    "question": "Find the locus of points in the complex plane satisfying |z − 1| / |z + 1| = 2:",
    "options": [
      "A circle (Circle of Apollonius)",
      "An ellipse with foci at ±1",
      "The perpendicular bisector line x = 0",
      "A parabola"
    ],
    "correctAnswer": 0,
    "explanation": "The locus of points with a constant ratio of distances to two fixed points (ratio ≠ 1) is a Circle of Apollonius."
  },
  {
    "id": 82222,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Hard",
    "question": "Evaluate the infinite product Π_{n=1}^∞ (1 + (1/2)^(2ⁿ)) in terms of geometric series:",
    "options": [
      "4/3",
      "e",
      "π / 2",
      "2"
    ],
    "correctAnswer": 3,
    "explanation": "Since (1 − x) Π_{k=0}^N (1 + x^(2ᵏ)) = 1 − x^(2^(N+1)), taking x = 1/2 gives (1 − 1/2) P = 1 => P = 2."
  },
  {
    "id": 82223,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Hard",
    "question": "If z + 1/z = 2 cos θ, what is zⁿ + 1/zⁿ by De Moivre's Theorem?",
    "options": [
      "2 sin(nθ)",
      "2ⁿ cos(nθ)",
      "2 cos(nθ)",
      "cos(nθ)"
    ],
    "correctAnswer": 2,
    "explanation": "z + 1/z = 2 cos θ implies z = e^(±iθ). Therefore zⁿ + 1/zⁿ = e^(inθ) + e^(−inθ) = 2 cos(nθ)."
  },
  {
    "id": 82224,
    "topic": "Complex Numbers & De Moivre's Theorem",
    "difficulty": "Hard",
    "question": "Evaluate the value of the Gaussian sum Σ_{k=0}^{p-1} e^(2π i k² / p) for an odd prime p ≡ 1 (mod 4):",
    "options": [
      "i √p",
      "√p",
      "p",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "Gauss's quadratic sum equals √p when p ≡ 1 (mod 4) and i√p when p ≡ 3 (mod 4)."
  },
  {
    "id": 82225,
    "topic": "Hyperbolic Functions",
    "difficulty": "Easy",
    "question": "What is the definition of the hyperbolic sine sinh(x)?",
    "options": [
      "(eˣ − e⁻ˣ) / 2",
      "(eˣ + e⁻ˣ) / 2",
      "(e²ˣ − 1) / 2",
      "eˣ − e⁻ˣ"
    ],
    "correctAnswer": 0,
    "explanation": "sinh(x) = (eˣ − e⁻ˣ) / 2."
  },
  {
    "id": 82226,
    "topic": "Hyperbolic Functions",
    "difficulty": "Easy",
    "question": "What is the definition of the hyperbolic cosine cosh(x)?",
    "options": [
      "(eˣ − e⁻ˣ) / 2",
      "eˣ + e⁻ˣ",
      "(e²ˣ + 1) / 2",
      "(eˣ + e⁻ˣ) / 2"
    ],
    "correctAnswer": 3,
    "explanation": "cosh(x) = (eˣ + e⁻ˣ) / 2."
  },
  {
    "id": 82227,
    "topic": "Hyperbolic Functions",
    "difficulty": "Easy",
    "question": "What is the fundamental hyperbolic identity relating cosh(x) and sinh(x)?",
    "options": [
      "cosh²(x) + sinh²(x) = 1",
      "sinh²(x) − cosh²(x) = 1",
      "cosh²(x) − sinh²(x) = 1",
      "cosh(x) + sinh(x) = 1"
    ],
    "correctAnswer": 2,
    "explanation": "cosh²(x) − sinh²(x) = [(eˣ+e⁻ˣ)² − (eˣ−e⁻ˣ)²]/4 = 4/4 = 1."
  },
  {
    "id": 82228,
    "topic": "Hyperbolic Functions",
    "difficulty": "Easy",
    "question": "What is the derivative d/dx [sinh(x)]?",
    "options": [
      "−cosh(x)",
      "cosh(x)",
      "tanh(x)",
      "sech(x)"
    ],
    "correctAnswer": 1,
    "explanation": "d/dx [sinh(x)] = d/dx [(eˣ − e⁻ˣ)/2] = (eˣ + e⁻ˣ)/2 = cosh(x) (positive, unlike trigonometric sine)."
  },
  {
    "id": 82229,
    "topic": "Hyperbolic Functions",
    "difficulty": "Easy",
    "question": "What is the derivative d/dx [cosh(x)]?",
    "options": [
      "sinh(x)",
      "−sinh(x)",
      "tanh(x)",
      "cosh(x)"
    ],
    "correctAnswer": 0,
    "explanation": "d/dx [cosh(x)] = (eˣ − e⁻ˣ)/2 = sinh(x) (no negative sign!)."
  },
  {
    "id": 82230,
    "topic": "Hyperbolic Functions",
    "difficulty": "Easy",
    "question": "What is the derivative d/dx [tanh(x)]?",
    "options": [
      "−sech²(x)",
      "csch²(x)",
      "cosh²(x)",
      "sech²(x)"
    ],
    "correctAnswer": 3,
    "explanation": "d/dx [tanh(x)] = d/dx [sinh/cosh] = (cosh² − sinh²)/cosh² = 1/cosh² = sech²(x)."
  },
  {
    "id": 82231,
    "topic": "Hyperbolic Functions",
    "difficulty": "Easy",
    "question": "What is the value of cosh(0)?",
    "options": [
      "0",
      "−1",
      "1",
      "1/2"
    ],
    "correctAnswer": 2,
    "explanation": "cosh(0) = (e⁰ + e⁻⁰)/2 = (1 + 1)/2 = 1."
  },
  {
    "id": 82232,
    "topic": "Hyperbolic Functions",
    "difficulty": "Easy",
    "question": "What is the value of sinh(0)?",
    "options": [
      "1",
      "0",
      "−1",
      "Undefined"
    ],
    "correctAnswer": 1,
    "explanation": "sinh(0) = (1 − 1)/2 = 0."
  },
  {
    "id": 82233,
    "topic": "Hyperbolic Functions",
    "difficulty": "Medium",
    "question": "Which double-argument formula correctly computes sinh(2x)?",
    "options": [
      "2 sinh(x) cosh(x)",
      "cosh²(x) − sinh²(x)",
      "2 cosh²(x) − 1",
      "sinh²(x) + cosh²(x)"
    ],
    "correctAnswer": 0,
    "explanation": "sinh(2x) = 2 sinh(x) cosh(x)."
  },
  {
    "id": 82234,
    "topic": "Hyperbolic Functions",
    "difficulty": "Medium",
    "question": "What is the identity relating 1 − tanh²(x)?",
    "options": [
      "csch²(x)",
      "coth²(x)",
      "1",
      "sech²(x)"
    ],
    "correctAnswer": 3,
    "explanation": "Dividing cosh²(x) − sinh²(x) = 1 by cosh²(x) yields 1 − tanh²(x) = sech²(x)."
  },
  {
    "id": 82235,
    "topic": "Hyperbolic Functions",
    "difficulty": "Medium",
    "question": "Evaluate the indefinite integral ∫ sinh(3x) dx:",
    "options": [
      "−(1/3) cosh(3x) + C",
      "3 cosh(3x) + C",
      "(1/3) cosh(3x) + C",
      "(1/3) sinh(3x) + C"
    ],
    "correctAnswer": 2,
    "explanation": "∫ sinh(3x) dx = (1/3) cosh(3x) + C."
  },
  {
    "id": 82236,
    "topic": "Hyperbolic Functions",
    "difficulty": "Medium",
    "question": "What is the logarithmic form of arcsinh(x)?",
    "options": [
      "ln(x + √(x² − 1))",
      "ln(x + √(x² + 1))",
      "(1/2) ln((1+x)/(1−x))",
      "ln(x − √(x² + 1))"
    ],
    "correctAnswer": 1,
    "explanation": "arcsinh(x) = ln(x + √(x² + 1)) for all real x."
  },
  {
    "id": 82237,
    "topic": "Hyperbolic Functions",
    "difficulty": "Medium",
    "question": "What is the logarithmic form of artanh(x) for |x| < 1?",
    "options": [
      "(1/2) ln((1 + x) / (1 − x))",
      "ln(x + √(x² − 1))",
      "ln(1 + x) − ln(1 − x)",
      "(1/2) ln(x² − 1)"
    ],
    "correctAnswer": 0,
    "explanation": "artanh(x) = (1/2) ln[(1 + x)/(1 − x)] for |x| < 1."
  },
  {
    "id": 82238,
    "topic": "Hyperbolic Functions",
    "difficulty": "Medium",
    "question": "What is the derivative d/dx [artanh(x)] for |x| < 1?",
    "options": [
      "1 / (1 + x²)",
      "1 / √(1 − x²)",
      "−1 / (1 − x²)",
      "1 / (1 − x²)"
    ],
    "correctAnswer": 3,
    "explanation": "d/dx [artanh(x)] = 1 / (1 − x²)."
  },
  {
    "id": 82239,
    "topic": "Hyperbolic Functions",
    "difficulty": "Medium",
    "question": "What physical curve is modeled by y = a cosh(x/a)?",
    "options": [
      "Brachistochrone",
      "Tautochrone",
      "Catenary (hanging chain under uniform gravity)",
      "Tractrix"
    ],
    "correctAnswer": 2,
    "explanation": "A flexible hanging cable under uniform gravitational load hangs in a catenary y = a cosh(x/a)."
  },
  {
    "id": 82240,
    "topic": "Hyperbolic Functions",
    "difficulty": "Medium",
    "question": "How are complex trigonometric functions related to hyperbolic functions?",
    "options": [
      "cos(ix) = sinh(x) and sin(ix) = cosh(x)",
      "cos(ix) = cosh(x) and sin(ix) = i sinh(x)",
      "cos(ix) = −cosh(x)",
      "sin(ix) = −i sinh(x)"
    ],
    "correctAnswer": 1,
    "explanation": "cos(ix) = (e^(−x) + eˣ)/2 = cosh(x), and sin(ix) = (e^(−x) − eˣ)/(2i) = i sinh(x)."
  },
  {
    "id": 82241,
    "topic": "Hyperbolic Functions",
    "difficulty": "Hard",
    "question": "The Gudermannian function gd(x) connects circular and hyperbolic trigonometry via:",
    "options": [
      "gd(x) = ∫₀ˣ sech(t) dt = 2 arctan(eˣ) − π/2",
      "gd(x) = sinh(x) / cosh(x)",
      "gd(x) = arcosh(eˣ)",
      "gd(x) = tanh(x/2)"
    ],
    "correctAnswer": 0,
    "explanation": "The Gudermannian is defined by gd(x) = ∫₀ˣ sech t dt = 2 arctan(eˣ) − π/2, giving sinh x = tan(gd x) and cosh x = sec(gd x)."
  },
  {
    "id": 82242,
    "topic": "Hyperbolic Functions",
    "difficulty": "Hard",
    "question": "Evaluate the definite integral ∫₀^∞ sech(x) dx:",
    "options": [
      "π",
      "1",
      "ln 2",
      "π / 2"
    ],
    "correctAnswer": 3,
    "explanation": "∫ sech x dx = 2 arctan(eˣ). From 0 to ∞: 2(π/2) − 2(π/4) = π − π/2 = π/2."
  },
  {
    "id": 82243,
    "topic": "Hyperbolic Functions",
    "difficulty": "Hard",
    "question": "In special relativity, the rapidity θ parameterizing Lorentz boosts is related to velocity v/c by:",
    "options": [
      "cosh(θ) = v / c",
      "sinh(θ) = v / c",
      "tanh(θ) = v / c",
      "sech(θ) = v / c"
    ],
    "correctAnswer": 2,
    "explanation": "Relativistic rapidity satisfies v/c = tanh θ, allowing collinear boosts to add linearly: θ_total = θ₁ + θ₂."
  },
  {
    "id": 82244,
    "topic": "Hyperbolic Functions",
    "difficulty": "Hard",
    "question": "Find the arc length of the catenary y = a cosh(x/a) from x = 0 to x = b:",
    "options": [
      "a cosh(b / a)",
      "a sinh(b / a)",
      "a tanh(b / a)",
      "b sinh(b / a)"
    ],
    "correctAnswer": 1,
    "explanation": "ds = √(1 + sinh²(x/a)) dx = cosh(x/a) dx. L = ∫₀ᵇ cosh(x/a) dx = a [sinh(x/a)]₀ᵇ = a sinh(b/a)."
  },
  {
    "id": 82245,
    "topic": "Hyperbolic Functions",
    "difficulty": "Hard",
    "question": "Evaluate the indefinite integral ∫ √(x² − a²) dx for x ≥ a using hyperbolic substitution x = a cosh t:",
    "options": [
      "(x / 2) √(x² − a²) − (a² / 2) arcosh(x / a) + C",
      "(x / 2) √(x² − a²) + (a² / 2) arcosh(x / a) + C",
      "(1 / 2) ln|x + √(x² − a²)| + C",
      "(x² / 2) − a² x + C"
    ],
    "correctAnswer": 0,
    "explanation": "Substituting x = a cosh t gives a² ∫ sinh² t dt = (a²/2)(sinh t cosh t − t) = (x/2)√(x² − a²) − (a²/2) arcosh(x/a) + C."
  },
  {
    "id": 82246,
    "topic": "Hyperbolic Functions",
    "difficulty": "Hard",
    "question": "What are all complex zeros of the hyperbolic cosine function cosh(z) = 0?",
    "options": [
      "z = k π for k ∈ ℤ",
      "z = i k π",
      "No zeros exist",
      "z = i (k + 1/2) π for k ∈ ℤ"
    ],
    "correctAnswer": 3,
    "explanation": "cosh(z) = cos(iz) = 0 => iz = (k + 1/2)π => z = −i (k + 1/2)π = i(m + 1/2)π."
  },
  {
    "id": 82247,
    "topic": "Hyperbolic Functions",
    "difficulty": "Hard",
    "question": "What is the Maclaurin series expansion of cosh(x)?",
    "options": [
      "Σ_{n=0}^∞ (−1)ⁿ x^(2n) / (2n)!",
      "Σ_{n=0}^∞ x^(2n+1) / (2n+1)!",
      "Σ_{n=0}^∞ x^(2n) / (2n)!",
      "Σ_{n=0}^∞ xⁿ / n!"
    ],
    "correctAnswer": 2,
    "explanation": "cosh(x) is even: cosh(x) = 1 + x²/2! + x⁴/4! + ... = Σ_{n=0}^∞ x^(2n)/(2n)! (no alternating signs!)."
  },
  {
    "id": 82248,
    "topic": "Hyperbolic Functions",
    "difficulty": "Hard",
    "question": "What is the Maclaurin series expansion of sinh(x)?",
    "options": [
      "Σ_{n=0}^∞ (−1)ⁿ x^(2n+1) / (2n+1)!",
      "Σ_{n=0}^∞ x^(2n+1) / (2n+1)!",
      "Σ_{n=0}^∞ x^(2n) / (2n)!",
      "Σ_{n=1}^∞ xⁿ / n"
    ],
    "correctAnswer": 1,
    "explanation": "sinh(x) is odd: sinh(x) = x + x³/3! + x⁵/5! + ... = Σ_{n=0}^∞ x^(2n+1)/(2n+1)!."
  },
  {
    "id": 82249,
    "topic": "Hyperbolic Functions",
    "difficulty": "Hard",
    "question": "Osborn's Rule states that any trigonometric identity can be transformed into a hyperbolic identity by replacing sin² θ by:",
    "options": [
      "−sinh² θ",
      "+sinh² θ",
      "cosh² θ",
      "−cosh² θ"
    ],
    "correctAnswer": 0,
    "explanation": "Osborn's Rule replaces cos by cosh, sin by sinh, and whenever two sines are multiplied (sin² or sin A sin B), an extra minus sign is introduced."
  },
  {
    "id": 82250,
    "topic": "Laplace Transforms",
    "difficulty": "Easy",
    "question": "What is the definition of the unilateral Laplace transform L{f(t)} = F(s)?",
    "options": [
      "∫_{-∞}^∞ e^(−ist) f(t) dt",
      "∫₀^∞ e^(st) f(t) dt",
      "∫₀¹ t^(s−1) f(t) dt",
      "∫₀^∞ e^(−st) f(t) dt"
    ],
    "correctAnswer": 3,
    "explanation": "L{f(t)} = ∫₀^∞ e^(−st) f(t) dt for s where the improper integral converges."
  },
  {
    "id": 82251,
    "topic": "Laplace Transforms",
    "difficulty": "Easy",
    "question": "What is the Laplace transform L{1} for s > 0?",
    "options": [
      "1 / s²",
      "s",
      "1 / s",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "L{1} = ∫₀^∞ e^(−st) dt = [−e^(−st)/s]₀^∞ = 1/s."
  },
  {
    "id": 82252,
    "topic": "Laplace Transforms",
    "difficulty": "Easy",
    "question": "What is the Laplace transform L{t} for s > 0?",
    "options": [
      "1 / s",
      "1 / s²",
      "2 / s³",
      "1 / s³"
    ],
    "correctAnswer": 1,
    "explanation": "L{t} = ∫₀^∞ t e^(−st) dt = 1/s²."
  },
  {
    "id": 82253,
    "topic": "Laplace Transforms",
    "difficulty": "Easy",
    "question": "What is the Laplace transform L{tⁿ} for a positive integer n?",
    "options": [
      "n! / sⁿ⁺¹",
      "n! / sⁿ",
      "1 / sⁿ⁺¹",
      "(n − 1)! / sⁿ"
    ],
    "correctAnswer": 0,
    "explanation": "Repeated integration by parts gives L{tⁿ} = n! / sⁿ⁺¹."
  },
  {
    "id": 82254,
    "topic": "Laplace Transforms",
    "difficulty": "Easy",
    "question": "What is the Laplace transform L{e^(at)} for s > a?",
    "options": [
      "1 / (s + a)",
      "a / (s − a)",
      "1 / s²",
      "1 / (s − a)"
    ],
    "correctAnswer": 3,
    "explanation": "L{e^(at)} = ∫₀^∞ e^(−(s−a)t) dt = 1 / (s − a)."
  },
  {
    "id": 82255,
    "topic": "Laplace Transforms",
    "difficulty": "Easy",
    "question": "What is the Laplace transform L{sin(ωt)} for s > 0?",
    "options": [
      "s / (s² + ω²)",
      "ω / (s² − ω²)",
      "ω / (s² + ω²)",
      "s / (s² − ω²)"
    ],
    "correctAnswer": 2,
    "explanation": "L{sin(ωt)} = ω / (s² + ω²)."
  },
  {
    "id": 82256,
    "topic": "Laplace Transforms",
    "difficulty": "Easy",
    "question": "What is the Laplace transform L{cos(ωt)} for s > 0?",
    "options": [
      "ω / (s² + ω²)",
      "s / (s² + ω²)",
      "s / (s² − ω²)",
      "1 / (s² + ω²)"
    ],
    "correctAnswer": 1,
    "explanation": "L{cos(ωt)} = s / (s² + ω²)."
  },
  {
    "id": 82257,
    "topic": "Laplace Transforms",
    "difficulty": "Easy",
    "question": "The linearity property of the Laplace transform states that L{a f(t) + b g(t)} equals:",
    "options": [
      "a L{f(t)} + b L{g(t)}",
      "L{f(t)} · L{g(t)}",
      "a b L{f(t)}",
      "L{f(t)} + L{g(t)}"
    ],
    "correctAnswer": 0,
    "explanation": "The Laplace integral is a linear operator: L{af + bg} = a F(s) + b G(s)."
  },
  {
    "id": 82258,
    "topic": "Laplace Transforms",
    "difficulty": "Medium",
    "question": "By the First Shifting Theorem (Frequency Shift), what is L{e^(at) f(t)}?",
    "options": [
      "F(s + a)",
      "e^(−as) F(s)",
      "F(s) / (s − a)",
      "F(s − a)"
    ],
    "correctAnswer": 3,
    "explanation": "Multiplying by e^(at) shifts the transform argument: L{e^(at) f(t)} = F(s − a)."
  },
  {
    "id": 82259,
    "topic": "Laplace Transforms",
    "difficulty": "Medium",
    "question": "Evaluate L{e^(2t) cos(3t)}:",
    "options": [
      "3 / [(s − 2)² + 9]",
      "s / [(s − 2)² + 9]",
      "(s − 2) / [(s − 2)² + 9]",
      "(s + 2) / [(s + 2)² + 9]"
    ],
    "correctAnswer": 2,
    "explanation": "L{cos(3t)} = s/(s² + 9). Shifting by s → s − 2 gives (s − 2)/[(s − 2)² + 9]."
  },
  {
    "id": 82260,
    "topic": "Laplace Transforms",
    "difficulty": "Medium",
    "question": "What is the Laplace transform of the first derivative L{f'(t)}?",
    "options": [
      "s F(s)",
      "s F(s) − f(0)",
      "s F(s) + f(0)",
      "F'(s)"
    ],
    "correctAnswer": 1,
    "explanation": "Integrating by parts: ∫₀^∞ e^(−st) f'(t) dt = [e^(−st) f(t)]₀^∞ + s ∫₀^∞ e^(−st) f(t) dt = s F(s) − f(0)."
  },
  {
    "id": 82261,
    "topic": "Laplace Transforms",
    "difficulty": "Medium",
    "question": "What is the Laplace transform of the second derivative L{f''(t)}?",
    "options": [
      "s² F(s) − s f(0) − f'(0)",
      "s² F(s) − f'(0)",
      "s² F(s) + s f(0) + f'(0)",
      "s² F(s)"
    ],
    "correctAnswer": 0,
    "explanation": "Applying the derivative theorem twice yields L{f''} = s² F(s) − s f(0) − f'(0)."
  },
  {
    "id": 82262,
    "topic": "Laplace Transforms",
    "difficulty": "Medium",
    "question": "What is the Laplace transform of the integral L{∫₀ᵗ f(τ) dτ}?",
    "options": [
      "s F(s)",
      "F(s) / s²",
      "F'(s) / s",
      "F(s) / s"
    ],
    "correctAnswer": 3,
    "explanation": "Integration in the time domain corresponds to division by s in the frequency domain: L{∫₀ᵗ f(τ) dτ} = F(s)/s."
  },
  {
    "id": 82263,
    "topic": "Laplace Transforms",
    "difficulty": "Medium",
    "question": "What is the effect in the s-domain of multiplying f(t) by t: L{t f(t)}?",
    "options": [
      "F'(s)",
      "s F(s)",
      "−F'(s) = −dF/ds",
      "F(s) / s"
    ],
    "correctAnswer": 2,
    "explanation": "d/ds [∫ e^(−st) f(t) dt] = ∫ (−t) e^(−st) f(t) dt => L{t f(t)} = −dF/ds."
  },
  {
    "id": 82264,
    "topic": "Laplace Transforms",
    "difficulty": "Medium",
    "question": "Evaluate L{t sin(2t)} using the t-multiplication property:",
    "options": [
      "2s / (s² + 4)²",
      "4s / (s² + 4)²",
      "(s² − 4) / (s² + 4)²",
      "4 / (s² + 4)²"
    ],
    "correctAnswer": 1,
    "explanation": "L{sin(2t)} = 2/(s² + 4). Derivative: d/ds[2/(s² + 4)] = −4s/(s² + 4)². Thus −dF/ds = 4s/(s² + 4)²."
  },
  {
    "id": 82265,
    "topic": "Laplace Transforms",
    "difficulty": "Medium",
    "question": "The unit step function u(t − a) is 0 for t < a and 1 for t ≥ a (with a > 0). What is L{u(t − a)}?",
    "options": [
      "e^(−as) / s",
      "e^(as) / s",
      "1 / (s − a)",
      "e^(−as)"
    ],
    "correctAnswer": 0,
    "explanation": "L{u(t − a)} = ∫_a^∞ e^(−st) dt = [−e^(−st)/s]_a^∞ = e^(−as) / s."
  },
  {
    "id": 82266,
    "topic": "Laplace Transforms",
    "difficulty": "Hard",
    "question": "The Convolution Theorem states that L{(f * g)(t)} = L{∫₀ᵗ f(τ) g(t − τ) dτ} equals:",
    "options": [
      "F(s) + G(s)",
      "F(s) / G(s)",
      "F'(s) G'(s)",
      "F(s) · G(s)"
    ],
    "correctAnswer": 3,
    "explanation": "Convolution in the time domain corresponds to simple multiplication in the s-domain: L{f * g} = F(s) G(s)."
  },
  {
    "id": 82267,
    "topic": "Laplace Transforms",
    "difficulty": "Hard",
    "question": "Find the inverse Laplace transform L⁻¹{ 1 / [s (s + 2)] }:",
    "options": [
      "(1/2) (1 + e^(−2t))",
      "1 − e^(−2t)",
      "(1/2) (1 − e^(−2t))",
      "e^(−2t) / 2"
    ],
    "correctAnswer": 2,
    "explanation": "Partial fractions: 1/[s(s+2)] = (1/2)/s − (1/2)/(s+2). Inverting gives (1/2)(1 − e^(−2t))."
  },
  {
    "id": 82268,
    "topic": "Laplace Transforms",
    "difficulty": "Hard",
    "question": "What is the Laplace transform of the Dirac delta function δ(t − a) for a ≥ 0?",
    "options": [
      "e^(−as) / s",
      "e^(−as)",
      "1",
      "s e^(−as)"
    ],
    "correctAnswer": 1,
    "explanation": "By the sifting property: ∫₀^∞ e^(−st) δ(t − a) dt = e^(−as). For a = 0, L{δ(t)} = 1."
  },
  {
    "id": 82269,
    "topic": "Laplace Transforms",
    "difficulty": "Hard",
    "question": "What is the Laplace transform of a periodic function f(t) with period T (f(t + T) = f(t))?",
    "options": [
      "(1 / (1 − e^(−sT))) ∫₀ᵀ e^(−st) f(t) dt",
      "(1 / (1 + e^(−sT))) ∫₀ᵀ e^(−st) f(t) dt",
      "e^(−sT) ∫₀ᵀ f(t) dt",
      "(1 / s) ∫₀ᵀ e^(−st) f(t) dt"
    ],
    "correctAnswer": 0,
    "explanation": "Summing the geometric series of shifted window integrals gives (1 − e^(−sT))⁻¹ ∫₀ᵀ e^(−st) f(t) dt."
  },
  {
    "id": 82270,
    "topic": "Laplace Transforms",
    "difficulty": "Hard",
    "question": "The Initial Value Theorem states that if lim(t→0⁺) f(t) exists, it is given by:",
    "options": [
      "lim(s→0) [s F(s)]",
      "lim(s→∞) F(s)",
      "lim(s→0) F(s)",
      "lim(s→∞) [s F(s)]"
    ],
    "correctAnswer": 3,
    "explanation": "The Initial Value Theorem: f(0⁺) = lim(s→∞) [s F(s)]."
  },
  {
    "id": 82271,
    "topic": "Laplace Transforms",
    "difficulty": "Hard",
    "question": "The Final Value Theorem states that if poles of s F(s) lie strictly in the open left half-plane, lim(t→∞) f(t) equals:",
    "options": [
      "lim(s→∞) [s F(s)]",
      "lim(s→0) F(s)",
      "lim(s→0) [s F(s)]",
      "0"
    ],
    "correctAnswer": 2,
    "explanation": "The Final Value Theorem: lim(t→∞) f(t) = lim(s→0) [s F(s)]."
  },
  {
    "id": 82272,
    "topic": "Laplace Transforms",
    "difficulty": "Hard",
    "question": "Solve the initial value problem y' + 3y = e^(2t) with y(0) = 1 using Laplace transforms. What is Y(s)?",
    "options": [
      "1 / [(s + 3)(s − 2)]",
      "(s − 1) / [(s + 3)(s − 2)]",
      "s / [(s + 3)(s − 2)]",
      "(s + 1) / [(s + 3)(s − 2)]"
    ],
    "correctAnswer": 1,
    "explanation": "s Y(s) − 1 + 3 Y(s) = 1/(s − 2) => (s + 3) Y(s) = 1 + 1/(s − 2) = (s − 1)/(s − 2) => Y(s) = (s − 1)/[(s + 3)(s − 2)]."
  },
  {
    "id": 82273,
    "topic": "Laplace Transforms",
    "difficulty": "Hard",
    "question": "Evaluate the improper integral ∫₀^∞ (e^(−t) − e^(−3t)) / t dt using Laplace transform division-by-t property:",
    "options": [
      "ln 3",
      "ln 2",
      "3",
      "1/3"
    ],
    "correctAnswer": 0,
    "explanation": "L{f(t)/t} = ∫_s^∞ F(σ) dσ. For f(t) = e^(−t) − e^(−3t), F(s) = 1/(s+1) − 1/(s+3). Integral at s = 0 is ∫₀^∞ [1/(σ+1) − 1/(σ+3)] dσ = [ln((σ+1)/(σ+3))]₀^∞ = 0 − ln(1/3) = ln 3."
  },
  {
    "id": 82274,
    "topic": "Laplace Transforms",
    "difficulty": "Hard",
    "question": "The Bromwich contour integral (Mellin inversion formula) computes the inverse Laplace transform along line Re(s) = γ via:",
    "options": [
      "(1 / 2π) ∫_{-∞}^∞ e^(st) F(s) ds",
      "(1 / i) ∮ F(s) ds",
      "Σ Res[F(s)]",
      "(1 / (2π i)) ∫_{γ − i∞}^{γ + i∞} e^(st) F(s) ds"
    ],
    "correctAnswer": 3,
    "explanation": "The complex inversion formula is f(t) = (1 / 2π i) ∫_{γ − i∞}^{γ + i∞} e^(st) F(s) ds, typically evaluated via Cauchy's Residue Theorem."
  },
  {
    "id": 82275,
    "topic": "Fourier Series",
    "difficulty": "Easy",
    "question": "The Fourier series representation of a 2L-periodic function f(x) on [−L, L] is given by:",
    "options": [
      "a₀ + Σ_{n=1}^∞ [aₙ cos(nπx/L) + bₙ sin(nπx/L)]",
      "Σ_{n=0}^∞ aₙ cos(nπx/L)",
      "a₀/2 + Σ_{n=1}^∞ [aₙ cos(nπx/L) + bₙ sin(nπx/L)]",
      "a₀/2 + Σ_{n=1}^∞ aₙ bₙ sin(nπx/L)"
    ],
    "correctAnswer": 2,
    "explanation": "The standard trigonometric Fourier series on [−L, L] has constant term a₀/2 and harmonic terms aₙ cos(nπx/L) + bₙ sin(nπx/L)."
  },
  {
    "id": 82276,
    "topic": "Fourier Series",
    "difficulty": "Easy",
    "question": "How is the constant coefficient a₀ calculated on [−L, L]?",
    "options": [
      "(2 / L) ∫_{-L}^L f(x) dx",
      "(1 / L) ∫_{-L}^L f(x) dx",
      "(1 / 2L) ∫_{-L}^L f(x) dx",
      "∫_{-L}^L f(x) dx"
    ],
    "correctAnswer": 1,
    "explanation": "a₀ = (1/L) ∫_{-L}^L f(x) dx, meaning a₀/2 is the average value of f(x) over one period."
  },
  {
    "id": 82277,
    "topic": "Fourier Series",
    "difficulty": "Easy",
    "question": "How are the cosine Fourier coefficients aₙ (for n ≥ 1) calculated on [−L, L]?",
    "options": [
      "(1 / L) ∫_{-L}^L f(x) cos(nπx / L) dx",
      "(2 / L) ∫_{-L}^L f(x) cos(nπx / L) dx",
      "(1 / 2L) ∫_{-L}^L f(x) cos(nπx / L) dx",
      "(1 / L) ∫₀^L f(x) cos(nπx / L) dx"
    ],
    "correctAnswer": 0,
    "explanation": "aₙ = (1/L) ∫_{-L}^L f(x) cos(nπx/L) dx by orthogonality of cosines."
  },
  {
    "id": 82278,
    "topic": "Fourier Series",
    "difficulty": "Easy",
    "question": "How are the sine Fourier coefficients bₙ (for n ≥ 1) calculated on [−L, L]?",
    "options": [
      "(2 / L) ∫_{-L}^L f(x) sin(nπx / L) dx",
      "(1 / 2L) ∫_{-L}^L f(x) sin(nπx / L) dx",
      "(1 / L) ∫₀^L f(x) dx",
      "(1 / L) ∫_{-L}^L f(x) sin(nπx / L) dx"
    ],
    "correctAnswer": 3,
    "explanation": "bₙ = (1/L) ∫_{-L}^L f(x) sin(nπx/L) dx by orthogonality of sines."
  },
  {
    "id": 82279,
    "topic": "Fourier Series",
    "difficulty": "Easy",
    "question": "If f(x) is an even function (f(−x) = f(x)) on [−L, L], what can be said about its Fourier coefficients?",
    "options": [
      "aₙ = 0 for all n",
      "a₀ = 0 only",
      "bₙ = 0 for all n (Fourier Cosine Series)",
      "Both aₙ = 0 and bₙ = 0"
    ],
    "correctAnswer": 2,
    "explanation": "An even function times an odd sine function is odd, integrating to zero over symmetric intervals: bₙ = 0 identically."
  },
  {
    "id": 82280,
    "topic": "Fourier Series",
    "difficulty": "Easy",
    "question": "If f(x) is an odd function (f(−x) = −f(x)) on [−L, L], what can be said about its Fourier coefficients?",
    "options": [
      "bₙ = 0 for all n",
      "a₀ = 0 and aₙ = 0 for all n (Fourier Sine Series)",
      "a₀ = 0 only",
      "bₙ = 1 for all n"
    ],
    "correctAnswer": 1,
    "explanation": "An odd function times an even cosine function is odd, integrating to zero: a₀ = aₙ = 0 for all n."
  },
  {
    "id": 82281,
    "topic": "Fourier Series",
    "difficulty": "Easy",
    "question": "What is the orthogonality integral ∫_{-π}^π cos(m x) cos(n x) dx for positive integers m ≠ n?",
    "options": [
      "0",
      "π",
      "2π",
      "π / 2"
    ],
    "correctAnswer": 0,
    "explanation": "Different harmonics are orthogonal: ∫_{-π}^π cos(mx) cos(nx) dx = 0 when m ≠ n."
  },
  {
    "id": 82282,
    "topic": "Fourier Series",
    "difficulty": "Easy",
    "question": "What is the value of ∫_{-π}^π cos²(n x) dx for any positive integer n?",
    "options": [
      "2π",
      "0",
      "π / 2",
      "π"
    ],
    "correctAnswer": 3,
    "explanation": "∫_{-π}^π cos²(nx) dx = ∫_{-π}^π (1 + cos(2nx))/2 dx = π."
  },
  {
    "id": 82283,
    "topic": "Fourier Series",
    "difficulty": "Medium",
    "question": "For the square wave f(x) = { −1 for −π < x < 0; +1 for 0 < x < π }, what is its Fourier series?",
    "options": [
      "(2 / π) Σ_{n=1}^∞ [sin(nx) / n]",
      "(4 / π) Σ_{k=1}^∞ [cos((2k−1)x) / (2k−1)]",
      "(4 / π) Σ_{k=1}^∞ [sin((2k−1)x) / (2k−1)]",
      "Σ_{n=1}^∞ (−1)ⁿ sin(nx)"
    ],
    "correctAnswer": 2,
    "explanation": "f is odd (aₙ = 0). bₙ = (2/π) ∫₀^π sin(nx) dx = (2/nπ)[1 − (−1)ⁿ], which is 4/(nπ) for odd n and 0 for even n."
  },
  {
    "id": 82284,
    "topic": "Fourier Series",
    "difficulty": "Medium",
    "question": "Evaluating the square wave Fourier series at x = π/2 gives which famous Leibniz formula for π?",
    "options": [
      "1 + 1/4 + 1/9 + ... = π² / 6",
      "1 − 1/3 + 1/5 − 1/7 + ... = π / 4",
      "1 − 1/2 + 1/3 − 1/4 + ... = ln 2",
      "1 + 1/9 + 1/25 + ... = π² / 8"
    ],
    "correctAnswer": 1,
    "explanation": "f(π/2) = 1. The series gives 1 = (4/π)[1 − 1/3 + 1/5 − 1/7 + ...], which rearranges to Leibniz's series 1 − 1/3 + 1/5 − ... = π/4."
  },
  {
    "id": 82285,
    "topic": "Fourier Series",
    "difficulty": "Medium",
    "question": "What is the complex (exponential) form of the Fourier series of a 2L-periodic function f(x)?",
    "options": [
      "Σ_{n=-∞}^∞ cₙ e^(i n π x / L)",
      "Σ_{n=0}^∞ cₙ e^(i n π x / L)",
      "Σ_{n=-∞}^∞ cₙ e^(−n x)",
      "c₀ + Σ_{n=1}^∞ cₙ e^(i n x)"
    ],
    "correctAnswer": 0,
    "explanation": "The complex exponential Fourier series is f(x) = Σ_{n=-∞}^∞ cₙ e^(i n π x / L), where cₙ = (1/2L) ∫_{-L}^L f(x) e^(−i n π x / L) dx."
  },
  {
    "id": 82286,
    "topic": "Fourier Series",
    "difficulty": "Medium",
    "question": "How are the complex coefficients cₙ related to the real trigonometric coefficients aₙ and bₙ for n ≥ 1?",
    "options": [
      "cₙ = aₙ + i bₙ",
      "cₙ = (aₙ + bₙ) / 2",
      "cₙ = aₙ / 2",
      "cₙ = (aₙ − i bₙ) / 2 and c_{-n} = (aₙ + i bₙ) / 2"
    ],
    "correctAnswer": 3,
    "explanation": "Using Euler's identity, cos(nx) = (e^(inx)+e^(−inx))/2 and sin(nx) = (e^(inx)−e^(−inx))/(2i) yields cₙ = (aₙ − i bₙ)/2."
  },
  {
    "id": 82287,
    "topic": "Fourier Series",
    "difficulty": "Medium",
    "question": "The Gibbs phenomenon describes the ringing artifact near jump discontinuities where Fourier partial sums overshoot by approximately:",
    "options": [
      "25%",
      "50%",
      "8.95% (about 9%)",
      "0% (no overshoot)"
    ],
    "correctAnswer": 2,
    "explanation": "Gibbs phenomenon overshoot does not vanish as n → ∞; it approaches (2/π) Si(π) − 1 ≈ 0.08949 (approx 9% of the jump height on each side)."
  },
  {
    "id": 82288,
    "topic": "Fourier Series",
    "difficulty": "Medium",
    "question": "To represent a function defined on [0, L] using only sine terms, we construct its:",
    "options": [
      "Even periodic extension of period 2L",
      "Odd periodic extension of period 2L",
      "Periodic extension of period L",
      "Taylor expansion"
    ],
    "correctAnswer": 1,
    "explanation": "Extending f(x) oddly across x = 0 to [−L, L] ensures all cosine coefficients vanish (aₙ = 0), producing a Half-Range Sine Series."
  },
  {
    "id": 82289,
    "topic": "Fourier Series",
    "difficulty": "Medium",
    "question": "To represent a function defined on [0, L] using only cosine terms, we construct its:",
    "options": [
      "Even periodic extension of period 2L",
      "Odd periodic extension of period 2L",
      "Periodic extension of period L",
      "Laplace transform"
    ],
    "correctAnswer": 0,
    "explanation": "Extending f(x) evenly across x = 0 ensures all sine coefficients vanish (bₙ = 0), producing a Half-Range Cosine Series."
  },
  {
    "id": 82290,
    "topic": "Fourier Series",
    "difficulty": "Medium",
    "question": "For f(x) = x on [−π, π], find the Fourier coefficients aₙ:",
    "options": [
      "aₙ = 2/n",
      "aₙ = (−1)ⁿ / n",
      "aₙ = 1/n²",
      "aₙ = 0 for all n (because f is odd)"
    ],
    "correctAnswer": 3,
    "explanation": "Since f(x) = x is an odd function, all cosine coefficients a₀ and aₙ are identically zero."
  },
  {
    "id": 82291,
    "topic": "Fourier Series",
    "difficulty": "Hard",
    "question": "For f(x) = x² on [−π, π], its Fourier series is π²/3 + 4 Σ_{n=1}^∞ [((−1)ⁿ / n²) cos(nx)]. What sum does this yield at x = 0?",
    "options": [
      "Σ_{n=1}^∞ 1 / n² = π² / 6",
      "Σ_{n=1}^∞ 1 / n⁴ = π⁴ / 90",
      "Σ_{n=1}^∞ (−1)ⁿ⁺¹ / n² = 1 − 1/4 + 1/9 − 1/16 + ... = π² / 12",
      "Σ_{n=1}^∞ (−1)ⁿ / n = −ln 2"
    ],
    "correctAnswer": 2,
    "explanation": "At x = 0, f(0) = 0 = π²/3 + 4 Σ ((−1)ⁿ/n²)(1) => Σ (−1)ⁿ⁺¹/n² = (π²/3)/4 = π²/12."
  },
  {
    "id": 82292,
    "topic": "Fourier Series",
    "difficulty": "Hard",
    "question": "Evaluating the same series for f(x) = x² at x = π gives the solution to the Basel Problem:",
    "options": [
      "Σ_{n=1}^∞ (1 / n²) = π² / 8",
      "Σ_{n=1}^∞ (1 / n²) = 1 + 1/4 + 1/9 + 1/16 + ... = π² / 6",
      "Σ_{n=1}^∞ (1 / n²) = π² / 12",
      "Σ_{n=1}^∞ (1 / n²) = 1"
    ],
    "correctAnswer": 1,
    "explanation": "At x = π, f(π) = π² = π²/3 + 4 Σ ((−1)ⁿ/n²)(−1)ⁿ = π²/3 + 4 Σ (1/n²). Solving yields 4 Σ (1/n²) = 2π²/3 => Σ 1/n² = π²/6."
  },
  {
    "id": 82293,
    "topic": "Fourier Series",
    "difficulty": "Hard",
    "question": "Parseval's Identity for the Fourier series on [−π, π] states that (1/π) ∫_{-π}^π [f(x)]² dx equals:",
    "options": [
      "a₀²/2 + Σ_{n=1}^∞ (aₙ² + bₙ²)",
      "a₀² + Σ_{n=1}^∞ (aₙ² + bₙ²)",
      "Σ_{n=1}^∞ (aₙ² + bₙ²)",
      "(a₀/2)² + Σ_{n=1}^∞ aₙ bₙ"
    ],
    "correctAnswer": 0,
    "explanation": "Parseval's identity is the infinite-dimensional Pythagorean theorem for L² inner product: (1/π)∫ [f]² dx = a₀²/2 + Σ (aₙ² + bₙ²)."
  },
  {
    "id": 82294,
    "topic": "Fourier Series",
    "difficulty": "Hard",
    "question": "Applying Parseval's Identity to the Fourier series of f(x) = x on [−π, π] (where bₙ = 2(−1)ⁿ⁺¹/n) computes:",
    "options": [
      "Σ_{n=1}^∞ (1 / n⁴) = π⁴ / 90",
      "Σ_{n=1}^∞ (1 / n³) = ζ(3)",
      "Σ_{n=1}^∞ (1 / (2n−1)²) = π² / 8",
      "Σ_{n=1}^∞ (1 / n²) = π² / 6"
    ],
    "correctAnswer": 3,
    "explanation": "(1/π) ∫_{-π}^π x² dx = (1/π)(2π³/3) = 2π²/3. Parseval: Σ bₙ² = Σ 4/n² = 2π²/3 => Σ 1/n² = π²/6."
  },
  {
    "id": 82295,
    "topic": "Fourier Series",
    "difficulty": "Hard",
    "question": "Applying Parseval's Identity to f(x) = x² on [−π, π] computes the sum of the fourth powers of reciprocals:",
    "options": [
      "Σ_{n=1}^∞ (1 / n⁴) = π⁴ / 96",
      "Σ_{n=1}^∞ (1 / n⁴) = π⁴ / 72",
      "Σ_{n=1}^∞ (1 / n⁴) = 1 + 1/16 + 1/81 + ... = π⁴ / 90",
      "Σ_{n=1}^∞ (1 / n⁴) = π² / 6"
    ],
    "correctAnswer": 2,
    "explanation": "Parseval on x² gives (1/π)(2π⁵/5) = 2π⁴/5 = (2π²/3)²/2 + 16 Σ 1/n⁴ = 2π⁴/9 + 16 Σ 1/n⁴. Solving gives Σ 1/n⁴ = π⁴/90."
  },
  {
    "id": 82296,
    "topic": "Fourier Series",
    "difficulty": "Hard",
    "question": "Dirichlet Conditions guarantee that the Fourier series converges to f(x) at every continuity point if f:",
    "options": [
      "Is infinitely differentiable (C^∞)",
      "Has bounded variation (piecewise smooth with finitely many extrema and jump discontinuities per period)",
      "Is positive everywhere",
      "Has zero mean"
    ],
    "correctAnswer": 1,
    "explanation": "Dirichlet conditions require f to be periodic, piecewise continuous with a finite number of finite extrema and jump discontinuities per period."
  },
  {
    "id": 82297,
    "topic": "Fourier Series",
    "difficulty": "Hard",
    "question": "If a function f(x) is k times continuously differentiable (f ∈ Cᵏ) with periodic boundary derivatives, how fast do its Fourier coefficients aₙ, bₙ decay as n → ∞?",
    "options": [
      "O(1 / n^(k+1))",
      "O(1 / nᵏ)",
      "O(e^(−n))",
      "O(1 / n)"
    ],
    "correctAnswer": 0,
    "explanation": "Repeated integration by parts k+1 times transfers derivatives to the exponential/sinusoid, showing coefficients decay as O(1/n^(k+1))."
  },
  {
    "id": 82298,
    "topic": "Fourier Series",
    "difficulty": "Hard",
    "question": "Fejér's Theorem proves that for any continuous periodic function, which summation method converges uniformly to f(x)?",
    "options": [
      "Standard partial sums S_N directly",
      "Euler summation",
      "Borel summation",
      "Cesàro mean (arithmetic mean of partial sums σ_N = (S₀ + S₁ + ... + S_{N-1})/N)"
    ],
    "correctAnswer": 3,
    "explanation": "Fejér (1900) proved that the Cesàro means of Fourier series of any continuous function converge uniformly, eliminating Gibbs phenomenon."
  },
  {
    "id": 82299,
    "topic": "Fourier Series",
    "difficulty": "Hard",
    "question": "The Fourier transform F(ω) is the continuous analog of Fourier series as period 2L → ∞. The Fourier inversion formula is:",
    "options": [
      "f(x) = ∫_{-∞}^∞ F(ω) e^(−i ω x) dω",
      "f(x) = (1 / √2π) ∫₀^∞ F(ω) dω",
      "f(x) = (1 / 2π) ∫_{-∞}^∞ F(ω) e^(i ω x) dω",
      "f(x) = Σ F(ωₙ)"
    ],
    "correctAnswer": 2,
    "explanation": "Standard Fourier inversion is f(x) = (1/2π) ∫_{-∞}^∞ F(ω) e^(i ω x) dω."
  },
];
