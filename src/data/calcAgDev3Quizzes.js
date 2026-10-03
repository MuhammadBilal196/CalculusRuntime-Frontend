/**\n * Developer 3: Calculus & Analytical Geometry Topic Checkpoint Quizzes\n * 20 MCQs per topic with 80% passing threshold.\n */\n\nexport const CALC_A_SPACE_CURVES_QUIZ = [
  {
    "prompt": "For a smooth curve r(t), the unit tangent vector T(t) is defined as:",
    "options": [
      "r'(t) / ||r'(t)||",
      "r''(t) / ||r''(t)||",
      "r'(t) \u00d7 r''(t)",
      "||r'(t)|| r'(t)"
    ],
    "answer": "A",
    "explanation": "The unit tangent vector T(t) is the normalized velocity vector: T(t) = r'(t) / ||r'(t)||."
  },
  {
    "prompt": "If a curve is parameterized by arc length s, what is ||T(s)|| and what is T(s) \u00b7 T'(s)?",
    "options": [
      "||T(s)|| = s and T(s) \u00b7 T'(s) = 1",
      "||T(s)|| = 1 and T(s) \u00b7 T'(s) = 0",
      "||T(s)|| = 1 and T(s) \u00b7 T'(s) = 1",
      "||T(s)|| = 0 and T(s) \u00b7 T'(s) = 0"
    ],
    "answer": "B",
    "explanation": "Since T(s) is a unit vector, ||T(s)||\u00b2 = 1. Differentiating with respect to s gives 2 T(s) \u00b7 T'(s) = 0, so T and T' are orthogonal."
  },
  {
    "prompt": "The curvature \u03ba of a smooth space curve r(t) is defined fundamentally as:",
    "options": [
      "||dr/ds||",
      "||dT/dt||",
      "||dT/ds||",
      "dT/ds \u00b7 N"
    ],
    "answer": "C",
    "explanation": "Curvature \u03ba measures the rate of change of direction with respect to arc length: \u03ba = ||dT/ds||."
  },
  {
    "prompt": "In arbitrary parameterization t, the formula for curvature \u03ba(t) is:",
    "options": [
      "||r'(t) \u00d7 r''(t)|| / ||r'(t)||\u00b2",
      "||r'(t) \u00b7 r''(t)|| / ||r'(t)||\u00b3",
      "||r''(t)|| / ||r'(t)||\u00b2",
      "||r'(t) \u00d7 r''(t)|| / ||r'(t)||\u00b3"
    ],
    "answer": "D",
    "explanation": "For any parameter t, \u03ba(t) = ||r'(t) \u00d7 r''(t)|| / ||r'(t)||\u00b3."
  },
  {
    "prompt": "Find the curvature \u03ba of the circular helix r(t) = \u27e8a cos t, a sin t, c t\u27e9 with a > 0:",
    "options": [
      "a / (a\u00b2 + c\u00b2)",
      "a\u00b2 / (a\u00b2 + c\u00b2)",
      "c / (a\u00b2 + c\u00b2)",
      "1 / \u221a(a\u00b2 + c\u00b2)"
    ],
    "answer": "A",
    "explanation": "r'(t) = \u27e8-a sin t, a cos t, c\u27e9, ||r'|| = \u221a(a\u00b2+c\u00b2). r''(t) = \u27e8-a cos t, -a sin t, 0\u27e9. ||r' \u00d7 r''|| = a\u221a(a\u00b2+c\u00b2). Thus \u03ba = a\u221a(a\u00b2+c\u00b2) / (a\u00b2+c\u00b2)^(3/2) = a / (a\u00b2 + c\u00b2)."
  },
  {
    "prompt": "The principal unit normal vector N(t) is defined by:",
    "options": [
      "r''(t) / ||r''(t)||",
      "T'(t) / ||T'(t)||",
      "T(t) \u00d7 B(t)",
      "B'(t) / ||B'(t)||"
    ],
    "answer": "B",
    "explanation": "The principal unit normal vector points in the direction of dT/dt: N(t) = T'(t) / ||T'(t)||."
  },
  {
    "prompt": "The unit binormal vector B(t) is defined as:",
    "options": [
      "r'(t) \u00d7 r''(t)",
      "N(t) \u00d7 T(t)",
      "T(t) \u00d7 N(t)",
      "T(t) \u00b7 N(t)"
    ],
    "answer": "C",
    "explanation": "B(t) forms a right-handed orthonormal triad {T, N, B}, defined by B(t) = T(t) \u00d7 N(t)."
  },
  {
    "prompt": "The torsion \u03c4(s) of a space curve measures:",
    "options": [
      "The radius of the osculating circle",
      "The rate of turning of the tangent vector",
      "The arc length per unit time",
      "The rate at which the curve twists out of the osculating plane"
    ],
    "answer": "D",
    "explanation": "Torsion measures the rate of change of the binormal vector dB/ds = -\u03c4 N, quantifying how rapidly the curve twists out of its osculating plane."
  },
  {
    "prompt": "According to the Frenet-Serret formulas, dB/ds equals:",
    "options": [
      "-\u03c4 N",
      "\u03c4 N",
      "\u03ba N",
      "-\u03ba T + \u03c4 B"
    ],
    "answer": "A",
    "explanation": "The third Frenet-Serret formula is dB/ds = -\u03c4 N."
  },
  {
    "prompt": "According to the Frenet-Serret formulas, dN/ds equals:",
    "options": [
      "\u03ba T - \u03c4 B",
      "-\u03ba T + \u03c4 B",
      "-\u03ba T - \u03c4 B",
      "\u03ba B - \u03c4 T"
    ],
    "answer": "B",
    "explanation": "The second Frenet-Serret formula is dN/ds = -\u03ba T + \u03c4 B."
  },
  {
    "prompt": "The plane spanned by T and N (with normal B) at a point on a space curve is called the:",
    "options": [
      "Rectifying plane",
      "Normal plane",
      "Osculating plane",
      "Tangential plane"
    ],
    "answer": "C",
    "explanation": "The osculating plane contains T and N, perpendicular to the binormal B. It is the plane that best fits the curve locally."
  },
  {
    "prompt": "The normal plane to a space curve at a point is spanned by which vectors and has which normal?",
    "options": [
      "Spanned by r' and r'', with normal vector r'''",
      "Spanned by T and B, with normal vector N",
      "Spanned by T and N, with normal vector B",
      "Spanned by N and B, with normal vector T"
    ],
    "answer": "D",
    "explanation": "The normal plane is orthogonal to the tangent vector T, spanned by the normal N and binormal B."
  },
  {
    "prompt": "The rectifying plane to a space curve at a point has normal vector:",
    "options": [
      "N",
      "T",
      "B",
      "T \u00d7 B"
    ],
    "answer": "A",
    "explanation": "The rectifying plane is spanned by T and B, and its normal vector is the principal normal N."
  },
  {
    "prompt": "A space curve has torsion \u03c4(s) = 0 for all s if and only if:",
    "options": [
      "The curve is a straight line",
      "The curve is planar (lies entirely in a single plane)",
      "The curve is a circular helix",
      "The curvature is constant"
    ],
    "answer": "B",
    "explanation": "If \u03c4 = 0, B is constant, meaning the curve never twists out of the plane perpendicular to B; hence it is a planar curve."
  },
  {
    "prompt": "A space curve has both constant curvature \u03ba > 0 and constant torsion \u03c4 \u2260 0 if and only if it is a:",
    "options": [
      "Circle",
      "Straight line",
      "Circular helix",
      "Parabola"
    ],
    "answer": "C",
    "explanation": "By the fundamental theorem of space curves (Lancret's Theorem), a curve with constant non-zero curvature and constant non-zero torsion is a circular helix."
  },
  {
    "prompt": "For the circular helix r(t) = \u27e8a cos t, a sin t, c t\u27e9, what is its torsion \u03c4?",
    "options": [
      "1 / (a\u00b2 + c\u00b2)",
      "a / (a\u00b2 + c\u00b2)",
      "c\u00b2 / (a\u00b2 + c\u00b2)",
      "c / (a\u00b2 + c\u00b2)"
    ],
    "answer": "D",
    "explanation": "For the helix, (r' \u00d7 r'') \u00b7 r''' = a\u00b2c. ||r' \u00d7 r''||\u00b2 = a\u00b2(a\u00b2+c\u00b2). Thus \u03c4 = (r' \u00d7 r'') \u00b7 r''' / ||r' \u00d7 r''||\u00b2 = a\u00b2c / [a\u00b2(a\u00b2+c\u00b2)] = c / (a\u00b2 + c\u00b2)."
  },
  {
    "prompt": "The radius of curvature \u03c1 at a point on a curve is related to curvature \u03ba by:",
    "options": [
      "\u03c1 = 1 / \u03ba",
      "\u03c1 = \u03ba\u00b2",
      "\u03c1 = \u221a\u03ba",
      "\u03c1 = 2\u03c0 / \u03ba"
    ],
    "answer": "A",
    "explanation": "The radius of curvature is the radius of the osculating circle, given by the reciprocal of curvature: \u03c1 = 1 / \u03ba."
  },
  {
    "prompt": "The center of curvature C of a curve at a point r with curvature \u03ba and principal normal N is given by:",
    "options": [
      "r - (1/\u03ba) N",
      "r + (1/\u03ba) N",
      "r + \u03ba N",
      "r + (1/\u03ba) T"
    ],
    "answer": "B",
    "explanation": "The osculating circle lies in the osculating plane, centered at distance \u03c1 = 1/\u03ba along the normal vector N: C = r + (1/\u03ba) N."
  },
  {
    "prompt": "The formula for torsion in terms of an arbitrary parameter t is \u03c4(t) =",
    "options": [
      "||r'(t) \u00d7 r'''(t)|| / ||r'(t) \u00d7 r''(t)||",
      "(r'(t) \u00b7 r''(t)) \u00d7 r'''(t) / ||r'(t)||\u00b3",
      "(r'(t) \u00d7 r''(t)) \u00b7 r'''(t) / ||r'(t) \u00d7 r''(t)||\u00b2",
      "(r'(t) \u00d7 r''(t)) \u00b7 r'''(t) / ||r'(t)||\u2076"
    ],
    "answer": "C",
    "explanation": "In general parameterization t, \u03c4 = [r', r'', r'''] / ||r' \u00d7 r''||\u00b2 = (r' \u00d7 r'') \u00b7 r''' / ||r' \u00d7 r''||\u00b2."
  },
  {
    "prompt": "If a curve has curvature \u03ba(s) = 0 for all s, the curve must be a:",
    "options": [
      "Point",
      "Circle",
      "Helix",
      "Straight line"
    ],
    "answer": "D",
    "explanation": "\u03ba = ||dT/ds|| = 0 implies T(s) is a constant vector T\u2080. Integrating gives r(s) = s T\u2080 + r\u2080, which is the equation of a straight line."
  }
];

export const CALC_A_VECTOR_MOTION_QUIZ = [
  {
    "prompt": "Given position r(t) = \u27e8x(t), y(t), z(t)\u27e9, velocity v(t) and acceleration a(t) are defined as:",
    "options": [
      "v(t) = r'(t), a(t) = r''(t)",
      "v(t) = ||r'(t)||, a(t) = ||r''(t)||",
      "v(t) = \u222b r(t)dt, a(t) = r'(t)",
      "v(t) = r'(t) / t, a(t) = r''(t) / t\u00b2"
    ],
    "answer": "A",
    "explanation": "Velocity is the first derivative of position with respect to time v(t) = r'(t), and acceleration is the second derivative a(t) = r''(t)."
  },
  {
    "prompt": "The speed of a particle with velocity vector v(t) = \u27e8v_x, v_y, v_z\u27e9 is:",
    "options": [
      "v_x + v_y + v_z",
      "||v(t)|| = \u221a(v_x\u00b2 + v_y\u00b2 + v_z\u00b2)",
      "v'(t)",
      "(v_x\u00b2 + v_y\u00b2 + v_z\u00b2)/3"
    ],
    "answer": "B",
    "explanation": "Speed is the scalar magnitude of the velocity vector: ||v(t)|| = \u221a(v_x\u00b2 + v_y\u00b2 + v_z\u00b2)."
  },
  {
    "prompt": "The total distance traveled by a particle from t = a to t = b along r(t) is given by:",
    "options": [
      "\u222b\u2090\u1d47 r'(t) dt",
      "||r(b) - r(a)||",
      "\u222b\u2090\u1d47 ||r'(t)|| dt",
      "\u222b\u2090\u1d47 ||r''(t)|| dt"
    ],
    "answer": "C",
    "explanation": "Distance is the integral of speed over time: s = \u222b\u2090\u1d47 ||v(t)|| dt = \u222b\u2090\u1d47 ||r'(t)|| dt."
  },
  {
    "prompt": "The decomposition of acceleration into tangential and normal components is a =",
    "options": [
      "a_T N + a_N T",
      "a_T T + a_B B",
      "a_N N + a_B B",
      "a_T T + a_N N"
    ],
    "answer": "D",
    "explanation": "Acceleration always lies in the osculating plane spanned by T and N: a = a_T T + a_N N."
  },
  {
    "prompt": "The tangential component of acceleration a_T is given by:",
    "options": [
      "d/dt(||v||) = (v \u00b7 a) / ||v||",
      "(v \u00d7 a) / ||v||",
      "||a|| cos \u03b8 where \u03b8 = 0",
      "\u03ba ||v||\u00b2"
    ],
    "answer": "A",
    "explanation": "a_T is the scalar rate of change of speed: a_T = d(v)/dt = (v \u00b7 a) / ||v||."
  },
  {
    "prompt": "The normal component of acceleration a_N is given by:",
    "options": [
      "(v \u00b7 a) / ||v||",
      "\u03ba ||v||\u00b2 = ||v \u00d7 a|| / ||v||",
      "d/dt(||v||)",
      "||a|| - a_T"
    ],
    "answer": "B",
    "explanation": "a_N = \u03ba v\u00b2 = ||v \u00d7 a|| / v, representing centripetal acceleration perpendicular to velocity."
  },
  {
    "prompt": "If a particle moves with constant speed along a curved path, which statement is true?",
    "options": [
      "a_N = 0, so acceleration is purely tangential",
      "The acceleration is zero",
      "a_T = 0, so acceleration is purely normal (a = a_N N)",
      "The curvature must be zero"
    ],
    "answer": "C",
    "explanation": "Constant speed means d(v)/dt = 0, so a_T = 0. Therefore, all acceleration is normal (centripetal): a = a_N N."
  },
  {
    "prompt": "A particle moves along r(t) = \u27e83 cos(2t), 3 sin(2t), 4t\u27e9. Find its speed ||v(t)||:",
    "options": [
      "10",
      "5",
      "6",
      "2\u221a13"
    ],
    "answer": "D",
    "explanation": "r'(t) = \u27e8-6 sin(2t), 6 cos(2t), 4\u27e9. ||r'(t)|| = \u221a((-6 sin 2t)\u00b2 + (6 cos 2t)\u00b2 + 4\u00b2) = \u221a(36 + 16) = \u221a52 = 2\u221a13."
  },
  {
    "prompt": "For r(t) = \u27e8t, t\u00b2, t\u00b3\u27e9 at t = 1, find the velocity vector v(1):",
    "options": [
      "\u27e81, 2, 3\u27e9",
      "\u27e81, 1, 1\u27e9",
      "\u27e80, 2, 6\u27e9",
      "\u27e81, 4, 9\u27e9"
    ],
    "answer": "A",
    "explanation": "r'(t) = \u27e81, 2t, 3t\u00b2\u27e9. At t = 1, v(1) = \u27e81, 2, 3\u27e9."
  },
  {
    "prompt": "For r(t) = \u27e8t, t\u00b2, t\u00b3\u27e9 at t = 1, find the acceleration vector a(1):",
    "options": [
      "\u27e81, 2, 3\u27e9",
      "\u27e80, 2, 6\u27e9",
      "\u27e80, 0, 6\u27e9",
      "\u27e81, 2, 6\u27e9"
    ],
    "answer": "B",
    "explanation": "r''(t) = \u27e80, 2, 6t\u27e9. At t = 1, a(1) = \u27e80, 2, 6\u27e9."
  },
  {
    "prompt": "For v = \u27e81, 2, 3\u27e9 and a = \u27e80, 2, 6\u27e9, find the tangential component of acceleration a_T:",
    "options": [
      "4 / \u221a14",
      "11 / \u221a14",
      "22 / \u221a14",
      "\u221a14"
    ],
    "answer": "C",
    "explanation": "v \u00b7 a = 1(0) + 2(2) + 3(6) = 0 + 4 + 18 = 22. ||v|| = \u221a(1 + 4 + 9) = \u221a14. Thus a_T = (v \u00b7 a) / ||v|| = 22 / \u221a14."
  },
  {
    "prompt": "If a particle moves with constant velocity v(t) = v\u2080, what is its trajectory?",
    "options": [
      "An ellipse",
      "A circle",
      "A parabola",
      "A straight line r(t) = r\u2080 + t v\u2080"
    ],
    "answer": "D",
    "explanation": "Integrating constant velocity v\u2080 gives r(t) = r\u2080 + t v\u2080, which is a straight line."
  },
  {
    "prompt": "In uniform circular motion with radius R and angular speed \u03c9, what are the magnitude of velocity and acceleration?",
    "options": [
      "||v|| = \u03c9 R, ||a|| = \u03c9\u00b2 R",
      "||v|| = \u03c9\u00b2 R, ||a|| = \u03c9 R",
      "||v|| = \u03c9 R, ||a|| = 0",
      "||v|| = 2\u03c0 \u03c9 R, ||a|| = \u03c9\u00b2 R\u00b2"
    ],
    "answer": "A",
    "explanation": "Position is r(t) = \u27e8R cos \u03c9t, R sin \u03c9t\u27e9. Speed is ||v|| = \u03c9R, and centripetal acceleration is ||a|| = \u03c9\u00b2R directed toward the center."
  },
  {
    "prompt": "A projectile is fired in \u211d\u00b3 with initial velocity v\u2080 = \u27e8u, v, w\u27e9 from the origin under constant gravity g in the -z direction. Its position r(t) is:",
    "options": [
      "\u27e8u t - (1/2)g t\u00b2, v t, w t\u27e9",
      "\u27e8u t, v t, w t - (1/2)g t\u00b2\u27e9",
      "\u27e8u t, v t - g t, w t - (1/2)g t\u00b2\u27e9",
      "\u27e8u, v, w - g t\u27e9"
    ],
    "answer": "B",
    "explanation": "Acceleration is a = \u27e80, 0, -g\u27e9. Integrating twice gives v(t) = \u27e8u, v, w - gt\u27e9 and r(t) = \u27e8ut, vt, wt - (1/2)gt\u00b2\u27e9."
  },
  {
    "prompt": "The relationship between total acceleration magnitude ||a||, tangential component a_T, and normal component a_N is:",
    "options": [
      "||a||\u00b2 = a_T\u00b2 - a_N\u00b2",
      "||a|| = a_T + a_N",
      "||a||\u00b2 = a_T\u00b2 + a_N\u00b2",
      "||a|| = a_T \u00b7 a_N"
    ],
    "answer": "C",
    "explanation": "Since T and N are orthogonal unit vectors, the Pythagorean theorem guarantees ||a||\u00b2 = a_T\u00b2 + a_N\u00b2."
  },
  {
    "prompt": "Newton's second law for a particle of mass m in space is F(t) = m a(t). If force F is always perpendicular to velocity v, then:",
    "options": [
      "Curvature is zero",
      "Speed increases linearly",
      "The particle must move in a straight line",
      "Kinetic energy is conserved (speed is constant)"
    ],
    "answer": "D",
    "explanation": "d/dt(Kinetic Energy) = d/dt(1/2 m ||v||\u00b2) = m v \u00b7 a = F \u00b7 v = 0. Thus speed and kinetic energy are strictly constant."
  },
  {
    "prompt": "A central force field is directed toward the origin: F(r) = f(r) r. What conserved quantity guarantees motion lies in a fixed plane?",
    "options": [
      "Angular momentum L = m (r \u00d7 v)",
      "Linear momentum p = m v",
      "Total energy E = (1/2)m v\u00b2",
      "Scalar speed ||v||"
    ],
    "answer": "A",
    "explanation": "dL/dt = m(v \u00d7 v + r \u00d7 a) = r \u00d7 F = r \u00d7 (f(r)r) = 0. Since L is constant, r \u00b7 L = r \u00b7 (m r \u00d7 v) = 0, so r lies in the plane perpendicular to L."
  },
  {
    "prompt": "Kepler's Second Law states that the radius vector sweeps out equal areas in equal times: dA/dt = constant. This is a direct consequence of:",
    "options": [
      "Conservation of total linear momentum",
      "Conservation of angular momentum ||r \u00d7 v|| = constant",
      "The inverse-square law of gravity",
      "Zero acceleration"
    ],
    "answer": "B",
    "explanation": "The area element is dA = (1/2) ||r \u00d7 dr|| = (1/2) ||r \u00d7 v|| dt. Constant angular momentum ||r \u00d7 v|| implies dA/dt = (1/2)||r \u00d7 v|| is constant."
  },
  {
    "prompt": "If r(t) has constant magnitude ||r(t)|| = c, what must be true about r(t) and r'(t)?",
    "options": [
      "r'(t) has constant magnitude",
      "r(t) \u00d7 r'(t) = 0",
      "r(t) \u00b7 r'(t) = 0 (position and velocity are perpendicular)",
      "r''(t) = 0"
    ],
    "answer": "C",
    "explanation": "||r(t)||\u00b2 = r(t) \u00b7 r(t) = c\u00b2. Differentiating with respect to t gives 2 r(t) \u00b7 r'(t) = 0, so r(t) \u22a5 r'(t)."
  },
  {
    "prompt": "Evaluate \u222b\u2080\u00b9 (t i + e\u1d57 j + t\u00b2 k) dt:",
    "options": [
      "i + (e - 1) j + (1/2) k",
      "i + e j + k",
      "(1/2) i + e j + (1/3) k",
      "(1/2) i + (e - 1) j + (1/3) k"
    ],
    "answer": "D",
    "explanation": "Integrate component-wise: \u222b\u2080\u00b9 t dt = 1/2; \u222b\u2080\u00b9 e\u1d57 dt = e - 1; \u222b\u2080\u00b9 t\u00b2 dt = 1/3. Result is (1/2) i + (e - 1) j + (1/3) k."
  }
];

export const CALC_A_PARAMETRIC_SURFACES_QUIZ = [
  {
    "prompt": "A parametric surface in \u211d\u00b3 is given by r(u, v) = \u27e8x(u,v), y(u,v), z(u,v)\u27e9. The grid curves on the surface are obtained by:",
    "options": [
      "Holding one parameter constant and varying the other",
      "Setting both parameters equal",
      "Taking u = v = t",
      "Setting the normal vector to zero"
    ],
    "answer": "A",
    "explanation": "Grid curves are the coordinate curves on the surface formed by holding u constant (v-curves) or holding v constant (u-curves)."
  },
  {
    "prompt": "The tangent vectors to the parametric surface r(u, v) along the coordinate grid lines are:",
    "options": [
      "r_u = r \u00b7 u and r_v = r \u00b7 v",
      "r_u = \u2202r/\u2202u and r_v = \u2202r/\u2202v",
      "r_u = r \u00d7 u and r_v = r \u00d7 v",
      "r_u = \u2202\u00b2r/\u2202u\u00b2 and r_v = \u2202\u00b2r/\u2202v\u00b2"
    ],
    "answer": "B",
    "explanation": "The partial derivatives r_u = \u2202r/\u2202u and r_v = \u2202r/\u2202v are tangent vectors to the coordinate curves lying on the surface."
  },
  {
    "prompt": "A normal vector n to the parametric surface at r(u\u2080, v\u2080) is computed as:",
    "options": [
      "n = r_u + r_v",
      "n = r_u \u00b7 r_v",
      "n = r_u \u00d7 r_v",
      "n = r_uu \u00d7 r_vv"
    ],
    "answer": "C",
    "explanation": "Since r_u and r_v span the tangent plane, their cross product r_u \u00d7 r_v is perpendicular to both, giving the surface normal vector."
  },
  {
    "prompt": "A parametric surface r(u, v) is defined as 'smooth' at a point (u\u2080, v\u2080) if:",
    "options": [
      "The surface has zero curvature",
      "r_u \u00b7 r_v = 0",
      "r(u, v) is linear",
      "r_u and r_v are continuous and r_u \u00d7 r_v \u2260 0"
    ],
    "answer": "D",
    "explanation": "Smoothness requires continuous partial derivatives and a non-zero normal vector (r_u \u00d7 r_v \u2260 0), ensuring a well-defined tangent plane."
  },
  {
    "prompt": "The equation of the tangent plane to r(u, v) at (u\u2080, v\u2080) with normal n = \u27e8a, b, c\u27e9 and point r(u\u2080, v\u2080) = (x\u2080, y\u2080, z\u2080) is:",
    "options": [
      "a(x - x\u2080) + b(y - y\u2080) + c(z - z\u2080) = 0",
      "a(x + x\u2080) + b(y + y\u2080) + c(z + z\u2080) = 0",
      "(x - x\u2080)/a + (y - y\u2080)/b + (z - z\u2080)/c = 0",
      "a x + b y + c z = 0"
    ],
    "answer": "A",
    "explanation": "The scalar equation of a plane through (x\u2080, y\u2080, z\u2080) with normal vector \u27e8a, b, c\u27e9 is a(x - x\u2080) + b(y - y\u2080) + c(z - z\u2080) = 0."
  },
  {
    "prompt": "The differential surface area element dS for a parametric surface r(u, v) is:",
    "options": [
      "dS = (r_u \u00b7 r_v) du dv",
      "dS = ||r_u \u00d7 r_v|| du dv",
      "dS = ||r_u|| ||r_v|| du dv",
      "dS = ||r_u + r_v|| du dv"
    ],
    "answer": "B",
    "explanation": "The parallelogram spanned by r_u du and r_v dv has area ||r_u du \u00d7 r_v dv|| = ||r_u \u00d7 r_v|| du dv."
  },
  {
    "prompt": "The total surface area of a smooth parametric surface over domain D is:",
    "options": [
      "A(S) = \u222c_D ||r_u|| dA",
      "A(S) = \u222c_D (r_u \u00b7 r_v) dA",
      "A(S) = \u222c_D ||r_u \u00d7 r_v|| dA",
      "A(S) = \u222c_D ||r_v|| dA"
    ],
    "answer": "C",
    "explanation": "Integrating the area element dS over the parameter domain D gives the total surface area: A(S) = \u222c_D ||r_u \u00d7 r_v|| dudv."
  },
  {
    "prompt": "For an explicit surface z = f(x, y), parameterized by r(x, y) = \u27e8x, y, f(x, y)\u27e9, the normal vector r_x \u00d7 r_y is:",
    "options": [
      "\u27e81, 1, f_x + f_y\u27e9",
      "\u27e8f_x, f_y, 1\u27e9",
      "\u27e8-f_x, -f_y, -1\u27e9",
      "\u27e8-f_x, -f_y, 1\u27e9"
    ],
    "answer": "D",
    "explanation": "r_x = \u27e81, 0, f_x\u27e9, r_y = \u27e80, 1, f_y\u27e9. Their cross product is r_x \u00d7 r_y = \u27e8-f_x, -f_y, 1\u27e9."
  },
  {
    "prompt": "For z = f(x, y), what is the surface area element dS?",
    "options": [
      "\u221a(1 + (f_x)\u00b2 + (f_y)\u00b2) dx dy",
      "\u221a(1 + f_x + f_y) dx dy",
      "(1 + f_x\u00b2 + f_y\u00b2) dx dy",
      "\u221a(f_x\u00b2 + f_y\u00b2) dx dy"
    ],
    "answer": "A",
    "explanation": "||r_x \u00d7 r_y|| = ||\u27e8-f_x, -f_y, 1\u27e9|| = \u221a(1 + f_x\u00b2 + f_y\u00b2), so dS = \u221a(1 + f_x\u00b2 + f_y\u00b2) dx dy."
  },
  {
    "prompt": "Parametric equations for a sphere of radius R centered at the origin are r(u, v) =",
    "options": [
      "\u27e8R cos u, R sin u, v\u27e9 with 0 \u2264 u \u2264 2\u03c0, 0 \u2264 v \u2264 R",
      "\u27e8R sin u cos v, R sin u sin v, R cos u\u27e9 with 0 \u2264 u \u2264 \u03c0, 0 \u2264 v \u2264 2\u03c0",
      "\u27e8u cos v, u sin v, u\u27e9 with 0 \u2264 u \u2264 R, 0 \u2264 v \u2264 2\u03c0",
      "\u27e8R cos u cos v, R sin u sin v, R tan u\u27e9"
    ],
    "answer": "B",
    "explanation": "Using spherical coordinates with polar angle u (0 to \u03c0) and azimuthal angle v (0 to 2\u03c0), r(u, v) = \u27e8R sin u cos v, R sin u sin v, R cos u\u27e9."
  },
  {
    "prompt": "For the sphere r(u, v) = \u27e8R sin u cos v, R sin u sin v, R cos u\u27e9, ||r_u \u00d7 r_v|| simplifies to:",
    "options": [
      "R sin u",
      "R\u00b2 cos u",
      "R\u00b2 sin u",
      "R\u00b2"
    ],
    "answer": "C",
    "explanation": "Computing r_u \u00d7 r_v gives R\u00b2 sin u \u27e8sin u cos v, sin u sin v, cos u\u27e9. The unit vector has norm 1, so ||r_u \u00d7 r_v|| = R\u00b2 sin u (since sin u \u2265 0 for 0 \u2264 u \u2264 \u03c0)."
  },
  {
    "prompt": "Using parametric integration, the surface area of a sphere of radius R is \u222c ||r_u \u00d7 r_v|| du dv =",
    "options": [
      "\u03c0 R\u00b2",
      "2\u03c0 R\u00b2",
      "(4/3)\u03c0 R\u00b3",
      "4\u03c0 R\u00b2"
    ],
    "answer": "D",
    "explanation": "\u222b\u2080\u00b2\u03c0 \u222b\u2080^\u03c0 R\u00b2 sin u du dv = R\u00b2 (2\u03c0) [-cos u]\u2080^\u03c0 = R\u00b2 (2\u03c0)(2) = 4\u03c0R\u00b2."
  },
  {
    "prompt": "Parametric equations for a circular cylinder of radius a along the z-axis are r(u, v) =",
    "options": [
      "\u27e8a cos u, a sin u, v\u27e9",
      "\u27e8u cos v, u sin v, a\u27e9",
      "\u27e8a u, a v, u\u00b2 + v\u00b2\u27e9",
      "\u27e8a cos u, a sin v, u + v\u27e9"
    ],
    "answer": "A",
    "explanation": "Using cylindrical coordinates where u is angle (0 to 2\u03c0) and v is height z, r(u, v) = \u27e8a cos u, a sin u, v\u27e9."
  },
  {
    "prompt": "For the cylinder r(u, v) = \u27e8a cos u, a sin u, v\u27e9 with 0 \u2264 u \u2264 2\u03c0 and 0 \u2264 v \u2264 h, ||r_u \u00d7 r_v|| is:",
    "options": [
      "a\u00b2",
      "a",
      "\u221a(a\u00b2 + h\u00b2)",
      "1"
    ],
    "answer": "B",
    "explanation": "r_u = \u27e8-a sin u, a cos u, 0\u27e9, r_v = \u27e80, 0, 1\u27e9. r_u \u00d7 r_v = \u27e8a cos u, a sin u, 0\u27e9. ||r_u \u00d7 r_v|| = \u221a(a\u00b2cos\u00b2u + a\u00b2sin\u00b2u) = a."
  },
  {
    "prompt": "A surface of revolution formed by revolving y = f(x) (f(x) \u2265 0, a \u2264 x \u2264 b) about the x-axis can be parameterized as:",
    "options": [
      "r(x, \u03b8) = \u27e8x cos \u03b8, x sin \u03b8, f(x)\u27e9",
      "r(x, \u03b8) = \u27e8f(x), x cos \u03b8, x sin \u03b8\u27e9",
      "r(x, \u03b8) = \u27e8x, f(x) cos \u03b8, f(x) sin \u03b8\u27e9",
      "r(x, \u03b8) = \u27e8x, f(x), \u03b8\u27e9"
    ],
    "answer": "C",
    "explanation": "The x-coordinate remains x, while in the yz-plane circles of radius f(x) are swept: y = f(x) cos \u03b8, z = f(x) sin \u03b8."
  },
  {
    "prompt": "A torus with major radius R and minor radius r (R > r) is parameterized by:",
    "options": [
      "\u27e8r cos u cos v, r sin u cos v, R sin v\u27e9",
      "\u27e8R cos u, R sin u, r cos v\u27e9",
      "\u27e8(R + r) cos u, (R - r) sin u, v\u27e9",
      "\u27e8(R + r cos v) cos u, (R + r cos v) sin u, r sin v\u27e9"
    ],
    "answer": "D",
    "explanation": "A circle of radius r in a vertical plane centered at distance R from the z-axis rotated by u gives \u27e8(R + r cos v) cos u, (R + r cos v) sin u, r sin v\u27e9."
  },
  {
    "prompt": "Find the tangent plane to r(u, v) = \u27e8u\u00b2, v\u00b2, u + 2v\u27e9 at (u, v) = (1, 1):",
    "options": [
      "2(x - 1) + 2(y - 1) - 4(z - 3) = 0",
      "x + y + z = 5",
      "2x + 2y + z = 7",
      "4x - 2y + z = 5"
    ],
    "answer": "A",
    "explanation": "r_u = \u27e82u, 0, 1\u27e9 = \u27e82, 0, 1\u27e9; r_v = \u27e80, 2v, 2\u27e9 = \u27e80, 2, 2\u27e9. r_u \u00d7 r_v = \u27e8-2, -4, 4\u27e9 or scalar multiple \u27e81, 2, -2\u27e9. Point is r(1,1) = \u27e81, 1, 3\u27e9. Tangent plane is 1(x - 1) + 2(y - 1) - 2(z - 3) = 0."
  },
  {
    "prompt": "A ruled surface is a surface that:",
    "options": [
      "Has constant mean curvature",
      "Can be swept out by a moving straight line",
      "Has zero Gaussian curvature everywhere",
      "Can only be a cylinder"
    ],
    "answer": "B",
    "explanation": "A ruled surface has the property that through every point there is at least one straight line lying entirely on the surface (e.g. cylinder, cone, helicoid, hyperboloid of one sheet)."
  },
  {
    "prompt": "A helicoid is parameterized by r(u, v) = \u27e8u cos v, u sin v, c v\u27e9. What type of surface is it?",
    "options": [
      "A closed torus",
      "A sphere",
      "A minimal ruled surface (soap film)",
      "A surface of revolution"
    ],
    "answer": "C",
    "explanation": "The helicoid is a classical minimal surface (mean curvature H = 0) and is also a ruled surface generated by lines intersecting the z-axis."
  },
  {
    "prompt": "The First Fundamental Form of a surface r(u, v) is defined by coefficients E, F, G where:",
    "options": [
      "E = r_u \u00d7 r_u, F = r_u \u00d7 r_v, G = r_v \u00d7 r_v",
      "E = ||r_u||, F = ||r_v||, G = ||r_u \u00d7 r_v||",
      "E = r_uu \u00b7 n, F = r_uv \u00b7 n, G = r_vv \u00b7 n",
      "E = r_u \u00b7 r_u, F = r_u \u00b7 r_v, G = r_v \u00b7 r_v"
    ],
    "answer": "D",
    "explanation": "The First Fundamental Form I = E du\u00b2 + 2F dudv + G dv\u00b2 has coefficients E = r_u \u00b7 r_u, F = r_u \u00b7 r_v, G = r_v \u00b7 r_v, with ||r_u \u00d7 r_v|| = \u221a(EG - F\u00b2)."
  }
];

export const CALC_A_POLAR_CALCULUS_QUIZ = [
  {
    "prompt": "The Cartesian coordinates (x, y) are related to polar coordinates (r, \u03b8) by:",
    "options": [
      "x = r cos \u03b8, y = r sin \u03b8",
      "x = r sin \u03b8, y = r cos \u03b8",
      "x = r / cos \u03b8, y = r / sin \u03b8",
      "x = r\u00b2 cos \u03b8, y = r\u00b2 sin \u03b8"
    ],
    "answer": "A",
    "explanation": "By definition on the unit circle scaled by r, x = r cos \u03b8 and y = r sin \u03b8."
  },
  {
    "prompt": "For a polar curve r = f(\u03b8), the slope of the tangent line dy/dx is:",
    "options": [
      "(r' cos \u03b8 - r sin \u03b8) / (r' sin \u03b8 + r cos \u03b8)",
      "(r' sin \u03b8 + r cos \u03b8) / (r' cos \u03b8 - r sin \u03b8)",
      "f'(\u03b8)",
      "r / (r' tan \u03b8)"
    ],
    "answer": "B",
    "explanation": "dy/dx = (dy/d\u03b8) / (dx/d\u03b8). With y = r sin \u03b8, dy/d\u03b8 = r' sin \u03b8 + r cos \u03b8. With x = r cos \u03b8, dx/d\u03b8 = r' cos \u03b8 - r sin \u03b8."
  },
  {
    "prompt": "A horizontal tangent to a polar curve occurs when:",
    "options": [
      "dr/d\u03b8 = 0",
      "dx/d\u03b8 = 0 (and dy/d\u03b8 \u2260 0)",
      "dy/d\u03b8 = 0 (and dx/d\u03b8 \u2260 0)",
      "r = 0"
    ],
    "answer": "C",
    "explanation": "Horizontal tangents correspond to zero slope, dy/dx = 0, which occurs when the numerator dy/d\u03b8 = 0 while dx/d\u03b8 \u2260 0."
  },
  {
    "prompt": "A vertical tangent to a polar curve occurs when:",
    "options": [
      "r = 1",
      "dy/d\u03b8 = 0 (and dx/d\u03b8 \u2260 0)",
      "dr/d\u03b8 = 0",
      "dx/d\u03b8 = 0 (and dy/d\u03b8 \u2260 0)"
    ],
    "answer": "D",
    "explanation": "Vertical tangents correspond to infinite slope, which occurs when the denominator dx/d\u03b8 = 0 while dy/d\u03b8 \u2260 0."
  },
  {
    "prompt": "The tangent lines at the pole (origin, where r = 0) of the curve r = f(\u03b8) are the lines \u03b8 = \u03b1 where:",
    "options": [
      "f(\u03b1) = 0 (and f'(\u03b1) \u2260 0)",
      "f'(\u03b1) = 0",
      "f''(\u03b1) = 0",
      "\u03b1 = 0"
    ],
    "answer": "A",
    "explanation": "When r = 0, dy/dx simplifies to (r' sin \u03b1) / (r' cos \u03b1) = tan \u03b1. Thus the tangent line at the pole is simply the ray \u03b8 = \u03b1 where f(\u03b1) = 0."
  },
  {
    "prompt": "The area bounded by a polar curve r = f(\u03b8) between \u03b8 = \u03b1 and \u03b8 = \u03b2 is given by:",
    "options": [
      "\u222b_\u03b1^\u03b2 f(\u03b8) d\u03b8",
      "(1/2) \u222b_\u03b1^\u03b2 [f(\u03b8)]\u00b2 d\u03b8",
      "\u03c0 \u222b_\u03b1^\u03b2 [f(\u03b8)]\u00b2 d\u03b8",
      "(1/2) \u222b_\u03b1^\u03b2 f'(\u03b8) d\u03b8"
    ],
    "answer": "B",
    "explanation": "The differential sector area is dA = (1/2) r\u00b2 d\u03b8. Integrating gives A = (1/2) \u222b_\u03b1^\u03b2 r\u00b2 d\u03b8."
  },
  {
    "prompt": "Find the total area enclosed by the cardioid r = 1 + cos \u03b8:",
    "options": [
      "2\u03c0",
      "\u03c0",
      "3\u03c0 / 2",
      "3\u03c0"
    ],
    "answer": "C",
    "explanation": "A = (1/2) \u222b\u2080\u00b2\u03c0 (1 + cos \u03b8)\u00b2 d\u03b8 = (1/2) \u222b\u2080\u00b2\u03c0 (1 + 2 cos \u03b8 + cos\u00b2 \u03b8) d\u03b8 = (1/2)[2\u03c0 + 0 + \u03c0] = (1/2)(3\u03c0) = 3\u03c0/2."
  },
  {
    "prompt": "Find the area of one petal of the four-leaved rose r = cos(2\u03b8):",
    "options": [
      "\u03c0 / 16",
      "\u03c0 / 4",
      "\u03c0 / 2",
      "\u03c0 / 8"
    ],
    "answer": "D",
    "explanation": "One petal is bounded between \u03b8 = -\u03c0/4 and \u03b8 = \u03c0/4: A = (1/2) \u222b_{-\u03c0/4}^{\u03c0/4} cos\u00b2(2\u03b8) d\u03b8 = (1/2) [\u03b8/2 + sin(4\u03b8)/8]_{-\u03c0/4}^{\u03c0/4} = (1/2)(\u03c0/4) = \u03c0/8."
  },
  {
    "prompt": "The arc length L of a smooth polar curve r = f(\u03b8) from \u03b8 = \u03b1 to \u03b8 = \u03b2 is:",
    "options": [
      "\u222b_\u03b1^\u03b2 \u221a(r\u00b2 + (dr/d\u03b8)\u00b2) d\u03b8",
      "\u222b_\u03b1^\u03b2 \u221a(1 + (dr/d\u03b8)\u00b2) d\u03b8",
      "\u222b_\u03b1^\u03b2 r d\u03b8",
      "\u222b_\u03b1^\u03b2 \u221a(r\u00b2 - (dr/d\u03b8)\u00b2) d\u03b8"
    ],
    "answer": "A",
    "explanation": "ds = \u221a(dx\u00b2 + dy\u00b2). With x = r cos \u03b8, y = r sin \u03b8, dx\u00b2 + dy\u00b2 = (r\u00b2 + (r')\u00b2) d\u03b8\u00b2. Thus L = \u222b \u221a(r\u00b2 + (r')\u00b2) d\u03b8."
  },
  {
    "prompt": "Find the total perimeter (arc length) of the cardioid r = a(1 - cos \u03b8) with a > 0:",
    "options": [
      "4a",
      "8a",
      "6a",
      "2\u03c0 a"
    ],
    "answer": "B",
    "explanation": "r\u00b2 + (r')\u00b2 = a\u00b2(1 - 2cos \u03b8 + cos\u00b2\u03b8 + sin\u00b2\u03b8) = 2a\u00b2(1 - cos \u03b8) = 4a\u00b2 sin\u00b2(\u03b8/2). Integrating 2a sin(\u03b8/2) from 0 to 2\u03c0 gives 2a [-2 cos(\u03b8/2)]\u2080\u00b2\u03c0 = 2a(2 + 2) = 8a."
  },
  {
    "prompt": "The area between two polar curves r_outer(\u03b8) and r_inner(\u03b8) from \u03b1 to \u03b2 is:",
    "options": [
      "\u222b_\u03b1^\u03b2 [r_outer - r_inner] d\u03b8",
      "(1/2) \u222b_\u03b1^\u03b2 [r_outer - r_inner]\u00b2 d\u03b8",
      "(1/2) \u222b_\u03b1^\u03b2 [r_outer\u00b2 - r_inner\u00b2] d\u03b8",
      "(1/2) [\u222b r_outer d\u03b8 - \u222b r_inner d\u03b8]\u00b2"
    ],
    "answer": "C",
    "explanation": "Area is additive: A = (1/2) \u222b r_outer\u00b2 d\u03b8 - (1/2) \u222b r_inner\u00b2 d\u03b8 = (1/2) \u222b (r_outer\u00b2 - r_inner\u00b2) d\u03b8."
  },
  {
    "prompt": "The surface area generated by rotating the polar curve r = f(\u03b8) (\u03b1 \u2264 \u03b8 \u2264 \u03b2) about the polar axis (x-axis) is:",
    "options": [
      "2\u03c0 \u222b_\u03b1^\u03b2 r \u221a(r\u00b2 + (r')\u00b2) d\u03b8",
      "2\u03c0 \u222b_\u03b1^\u03b2 r cos \u03b8 \u221a(r\u00b2 + (r')\u00b2) d\u03b8",
      "\u03c0 \u222b_\u03b1^\u03b2 r\u00b2 sin \u03b8 d\u03b8",
      "2\u03c0 \u222b_\u03b1^\u03b2 r sin \u03b8 \u221a(r\u00b2 + (r')\u00b2) d\u03b8"
    ],
    "answer": "D",
    "explanation": "Surface area of revolution about x-axis is S = 2\u03c0 \u222b y ds. In polar coordinates, y = r sin \u03b8 and ds = \u221a(r\u00b2 + (r')\u00b2) d\u03b8."
  },
  {
    "prompt": "The surface area generated by rotating the polar curve r = f(\u03b8) about the line \u03b8 = \u03c0/2 (y-axis) is:",
    "options": [
      "2\u03c0 \u222b_\u03b1^\u03b2 r cos \u03b8 \u221a(r\u00b2 + (r')\u00b2) d\u03b8",
      "2\u03c0 \u222b_\u03b1^\u03b2 r sin \u03b8 \u221a(r\u00b2 + (r')\u00b2) d\u03b8",
      "2\u03c0 \u222b_\u03b1^\u03b2 r\u00b2 d\u03b8",
      "\u03c0 \u222b_\u03b1^\u03b2 r\u00b2 cos \u03b8 d\u03b8"
    ],
    "answer": "A",
    "explanation": "Rotating about y-axis uses distance x = r cos \u03b8: S = 2\u03c0 \u222b x ds = 2\u03c0 \u222b r cos \u03b8 \u221a(r\u00b2 + (r')\u00b2) d\u03b8."
  },
  {
    "prompt": "The polar curve r = a cos \u03b8 represents which geometric figure?",
    "options": [
      "A circle of radius a centered at the origin",
      "A circle of diameter a centered at (a/2, 0)",
      "A cardioid",
      "A parabola"
    ],
    "answer": "B",
    "explanation": "Multiply by r: r\u00b2 = a r cos \u03b8 \u21d2 x\u00b2 + y\u00b2 = ax \u21d2 (x - a/2)\u00b2 + y\u00b2 = (a/2)\u00b2, which is a circle of radius a/2 centered at (a/2, 0)."
  },
  {
    "prompt": "For the circle r = 2a sin \u03b8, what is the area enclosed?",
    "options": [
      "4\u03c0 a\u00b2",
      "2\u03c0 a\u00b2",
      "\u03c0 a\u00b2",
      "\u03c0 a\u00b2/2"
    ],
    "answer": "C",
    "explanation": "r = 2a sin \u03b8 is a circle of radius a (centered at (0, a)). Its area is \u03c0 a\u00b2."
  },
  {
    "prompt": "At what angles \u03b8 \u2208 [0, 2\u03c0) does the rose curve r = sin(3\u03b8) have its petal tips (maximum |r| = 1)?",
    "options": [
      "\u03c0/2, 7\u03c0/6, 11\u03c0/6",
      "0, 2\u03c0/3, 4\u03c0/3",
      "\u03c0/3, \u03c0, 5\u03c0/3",
      "\u03c0/6, 5\u03c0/6, 3\u03c0/2"
    ],
    "answer": "D",
    "explanation": "Max |r| occurs when |sin(3\u03b8)| = 1 \u21d2 3\u03b8 = \u03c0/2, 3\u03c0/2, 5\u03c0/2, 7\u03c0/2, 9\u03c0/2... In [0, 2\u03c0), \u03b8 = \u03c0/6, \u03c0/2 (tip r=-1), 5\u03c0/6, 7\u03c0/6 (tip r=-1), 3\u03c0/2, 11\u03c0/6."
  },
  {
    "prompt": "What is the angle \u03c8 between the position vector r and the tangent line to a polar curve r = f(\u03b8)?",
    "options": [
      "tan \u03c8 = r / (dr/d\u03b8)",
      "tan \u03c8 = (dr/d\u03b8) / r",
      "cos \u03c8 = r / (dr/d\u03b8)",
      "tan \u03c8 = r \u00b7 (dr/d\u03b8)"
    ],
    "answer": "A",
    "explanation": "The classical relation for the angle \u03c8 between the radial line and tangent vector is tan \u03c8 = r / (dr/d\u03b8) = r / r'."
  },
  {
    "prompt": "A logarithmic spiral r = a e^(b \u03b8) has tan \u03c8 = r / r' equal to:",
    "options": [
      "b",
      "1 / b (constant angle of intersection)",
      "e^(b \u03b8)",
      "a b"
    ],
    "answer": "B",
    "explanation": "dr/d\u03b8 = a b e^(b\u03b8) = b r. Thus tan \u03c8 = r / (b r) = 1/b, meaning the curve cuts all radial vectors at a constant angle (equiangular spiral)."
  },
  {
    "prompt": "The curvature \u03ba of a polar curve r = f(\u03b8) in terms of r and its derivatives is:",
    "options": [
      "|r r' - r''| / (r\u00b2 + (r')\u00b2)",
      "|r\u00b2 - 2(r')\u00b2 + r r''| / (r\u00b2 + (r')\u00b2)^(3/2)",
      "|r\u00b2 + 2(r')\u00b2 - r r''| / (r\u00b2 + (r')\u00b2)^(3/2)",
      "|r\u00b2 + (r')\u00b2| / r\u00b3"
    ],
    "answer": "C",
    "explanation": "Converting curvature \u03ba = |x'y'' - y'x''| / (x'\u00b2 + y'\u00b2)^(3/2) to polar coordinates yields \u03ba = |r\u00b2 + 2(r')\u00b2 - r r''| / (r\u00b2 + (r')\u00b2)^(3/2)."
  },
  {
    "prompt": "Find the area of the region enclosed by the inner loop of the limacon r = 1 + 2 cos \u03b8:",
    "options": [
      "3\u03c0/2 - \u221a3",
      "2\u03c0 - 3\u221a3",
      "\u03c0/2 - \u221a3/4",
      "\u03c0 - (3\u221a3)/2"
    ],
    "answer": "D",
    "explanation": "The inner loop occurs when r \u2264 0, i.e. 2 cos \u03b8 \u2264 -1 \u21d2 2\u03c0/3 \u2264 \u03b8 \u2264 4\u03c0/3. A = (1/2) \u222b_{2\u03c0/3}^{4\u03c0/3} (1 + 2 cos \u03b8)\u00b2 d\u03b8 = \u03c0 - (3\u221a3)/2."
  }
];

