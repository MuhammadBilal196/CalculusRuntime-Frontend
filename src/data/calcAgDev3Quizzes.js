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


// --- Module B: Advanced Volume & Numerical Techniques ---

export const CALC_B_SOLIDS_REVOLUTION_QUIZ = [
  {
    "prompt": "When revolving the region under y = f(x) \u2265 0 from x = a to x = b about the x-axis, the disk method volume formula is:",
    "options": [
      "V = \u03c0 \u222b\u2090\u1d47 [f(x)]\u00b2 dx",
      "V = 2\u03c0 \u222b\u2090\u1d47 x f(x) dx",
      "V = \u03c0 \u222b\u2090\u1d47 f(x) dx",
      "V = 2\u03c0 \u222b\u2090\u1d47 [f(x)]\u00b2 dx"
    ],
    "answer": "A",
    "explanation": "Each cross-section perpendicular to the x-axis is a circular disk of radius R(x) = f(x) and area A(x) = \u03c0 [f(x)]\u00b2. Integrating gives V = \u03c0 \u222b\u2090\u1d47 [f(x)]\u00b2 dx."
  },
  {
    "prompt": "When revolving the region between y = f(x) (outer) and y = g(x) (inner) about the x-axis, the washer method volume formula is:",
    "options": [
      "V = \u03c0 \u222b\u2090\u1d47 [f(x) - g(x)]\u00b2 dx",
      "V = \u03c0 \u222b\u2090\u1d47 ([f(x)]\u00b2 - [g(x)]\u00b2) dx",
      "V = 2\u03c0 \u222b\u2090\u1d47 (f(x) - g(x)) dx",
      "V = \u03c0 \u222b\u2090\u1d47 (f(x)\u00b2 + g(x)\u00b2) dx"
    ],
    "answer": "B",
    "explanation": "Each washer cross-section has area A(x) = \u03c0(R_outer\u00b2 - R_inner\u00b2) = \u03c0([f(x)]\u00b2 - [g(x)]\u00b2). Integrating gives the washer volume."
  },
  {
    "prompt": "When revolving the region under y = f(x) on [a, b] (0 \u2264 a < b) about the y-axis, the cylindrical shells formula is:",
    "options": [
      "V = 2\u03c0 \u222b\u2090\u1d47 [f(x)]\u00b2 dx",
      "V = \u03c0 \u222b\u2090\u1d47 [f(x)]\u00b2 dx",
      "V = 2\u03c0 \u222b\u2090\u1d47 x f(x) dx",
      "V = \u03c0 \u222b\u2090\u1d47 x\u00b2 f(x) dx"
    ],
    "answer": "C",
    "explanation": "Each thin shell at distance x has radius r = x, height h = f(x), and circumference 2\u03c0x. The shell volume element is dV = 2\u03c0 x f(x) dx."
  },
  {
    "prompt": "When revolving the region between y = f(x) and y = g(x) on [a, b] about the horizontal line y = k (where k \u2265 f(x) \u2265 g(x)), the washer volume is:",
    "options": [
      "V = 2\u03c0 \u222b\u2090\u1d47 (k - y) dx",
      "V = \u03c0 \u222b\u2090\u1d47 ([k - f(x)]\u00b2 - [k - g(x)]\u00b2) dx",
      "V = \u03c0 \u222b\u2090\u1d47 ([f(x)]\u00b2 - [g(x)]\u00b2 - k\u00b2) dx",
      "V = \u03c0 \u222b\u2090\u1d47 ([k - g(x)]\u00b2 - [k - f(x)]\u00b2) dx"
    ],
    "answer": "D",
    "explanation": "The distance from y = k to the farthest curve g(x) is R_outer = k - g(x), and to the closer curve f(x) is R_inner = k - f(x). Thus V = \u03c0 \u222b ([k - g(x)]\u00b2 - [k - f(x)]\u00b2) dx."
  },
  {
    "prompt": "When revolving the region under y = f(x) on [a, b] about the vertical line x = c (where c \u2264 a), the cylindrical shell formula is:",
    "options": [
      "V = 2\u03c0 \u222b\u2090\u1d47 (x - c) f(x) dx",
      "V = 2\u03c0 \u222b\u2090\u1d47 (c - x) f(x) dx",
      "V = \u03c0 \u222b\u2090\u1d47 (x - c)\u00b2 f(x) dx",
      "V = 2\u03c0 \u222b\u2090\u1d47 (x - c) [f(x)]\u00b2 dx"
    ],
    "answer": "A",
    "explanation": "The radius of each cylindrical shell from the rotation axis x = c is r = x - c. Thus dV = 2\u03c0(radius)(height)dx = 2\u03c0(x - c)f(x)dx."
  },
  {
    "prompt": "Find the volume generated by revolving y = \u221ax from x = 0 to x = 4 about the x-axis:",
    "options": [
      "4\u03c0",
      "8\u03c0",
      "16\u03c0",
      "8\u03c0/3"
    ],
    "answer": "B",
    "explanation": "V = \u03c0 \u222b\u2080\u2074 (\u221ax)\u00b2 dx = \u03c0 \u222b\u2080\u2074 x dx = \u03c0 [x\u00b2/2]\u2080\u2074 = \u03c0(16/2) = 8\u03c0."
  },
  {
    "prompt": "Find the volume generated by revolving the region between y = x\u00b2 and y = 4 about the y-axis:",
    "options": [
      "4\u03c0",
      "16\u03c0",
      "8\u03c0",
      "32\u03c0/5"
    ],
    "answer": "C",
    "explanation": "Using disks along the y-axis: x = \u221ay for 0 \u2264 y \u2264 4. V = \u03c0 \u222b\u2080\u2074 (\u221ay)\u00b2 dy = \u03c0 \u222b\u2080\u2074 y dy = \u03c0 [y\u00b2/2]\u2080\u2074 = 8\u03c0. (Shells gives 2\u03c0 \u222b\u2080\u00b2 x(4 - x\u00b2)dx = 8\u03c0)."
  },
  {
    "prompt": "Find the volume generated by revolving y = x\u00b2 from x = 0 to x = 2 about the y-axis using cylindrical shells:",
    "options": [
      "32\u03c0/3",
      "16\u03c0",
      "4\u03c0",
      "8\u03c0"
    ],
    "answer": "D",
    "explanation": "V = 2\u03c0 \u222b\u2080\u00b2 x(x\u00b2) dx = 2\u03c0 \u222b\u2080\u00b2 x\u00b3 dx = 2\u03c0 [x\u2074/4]\u2080\u00b2 = 2\u03c0(16/4) = 8\u03c0."
  },
  {
    "prompt": "Pappus's Centroid Theorem states that the volume of a solid of revolution generated by revolving plane area A about an external axis is:",
    "options": [
      "V = 2\u03c0 d\u0304 A, where d\u0304 is distance from centroid to axis",
      "V = \u03c0 d\u0304\u00b2 A",
      "V = 2\u03c0 d\u0304\u00b2 / A",
      "V = (4/3)\u03c0 d\u0304 A"
    ],
    "answer": "A",
    "explanation": "Pappus's Centroid Theorem states V = 2\u03c0 d\u0304 A, where 2\u03c0 d\u0304 is the distance traveled by the centroid of region A during one full revolution."
  },
  {
    "prompt": "Use Pappus's Theorem to find the volume of a torus formed by revolving a circle of radius r about an axis at distance R > r:",
    "options": [
      "4\u03c0\u00b2 R r\u00b2",
      "2\u03c0\u00b2 R r\u00b2",
      "2\u03c0 R\u00b2 r",
      "(4/3)\u03c0\u00b2 R r\u00b2"
    ],
    "answer": "B",
    "explanation": "The circle has area A = \u03c0 r\u00b2, and its centroid is at distance R from the axis. Path of centroid = 2\u03c0 R. Volume V = (2\u03c0 R)(\u03c0 r\u00b2) = 2\u03c0\u00b2 R r\u00b2."
  },
  {
    "prompt": "Which method avoids solving for x in terms of y when revolving y = x\u00b3 - 3x + 4 about the y-axis?",
    "options": [
      "Washer method along y",
      "Disk method (integrating with respect to y)",
      "Cylindrical shells (integrating with respect to x)",
      "Slicing along the y-axis"
    ],
    "answer": "C",
    "explanation": "The cylindrical shells method integrates with respect to x: V = 2\u03c0 \u222b x f(x) dx, avoiding the algebraic difficulty of inverting a cubic."
  },
  {
    "prompt": "Find the volume of a sphere of radius R by revolving the semicircle y = \u221a(R\u00b2 - x\u00b2) about the x-axis:",
    "options": [
      "\u03c0 R\u00b3",
      "2\u03c0 R\u00b3",
      "4\u03c0 R\u00b2",
      "(4/3)\u03c0 R\u00b3"
    ],
    "answer": "D",
    "explanation": "V = \u03c0 \u222b_{-R}^R (R\u00b2 - x\u00b2) dx = 2\u03c0 [R\u00b2 x - x\u00b3/3]\u2080^R = 2\u03c0 (R\u00b3 - R\u00b3/3) = (4/3)\u03c0 R\u00b3."
  },
  {
    "prompt": "Find the volume of a cone of base radius R and height h by revolving y = (R/h)x from x = 0 to x = h about the x-axis:",
    "options": [
      "(1/3)\u03c0 R\u00b2 h",
      "(1/2)\u03c0 R\u00b2 h",
      "\u03c0 R\u00b2 h",
      "(2/3)\u03c0 R\u00b2 h"
    ],
    "answer": "A",
    "explanation": "V = \u03c0 \u222b\u2080\u02b0 ((R/h)x)\u00b2 dx = \u03c0 (R\u00b2/h\u00b2) [x\u00b3/3]\u2080\u02b0 = (1/3)\u03c0 R\u00b2 h."
  },
  {
    "prompt": "When revolving the region bounded by y = e^(-x), y = 0, x = 0, and x = 1 about the x-axis, the volume is:",
    "options": [
      "\u03c0(1 - e^(-1))",
      "(\u03c0/2)(1 - e^(-2))",
      "2\u03c0(1 - e^(-2))",
      "(\u03c0/2)(e\u00b2 - 1)"
    ],
    "answer": "B",
    "explanation": "V = \u03c0 \u222b\u2080\u00b9 (e^(-x))\u00b2 dx = \u03c0 \u222b\u2080\u00b9 e^(-2x) dx = \u03c0 [-e^(-2x)/2]\u2080\u00b9 = (\u03c0/2)(1 - e^(-2))."
  },
  {
    "prompt": "When revolving the region under y = sin x on [0, \u03c0] about the x-axis, the volume is:",
    "options": [
      "2\u03c0",
      "\u03c0\u00b2",
      "\u03c0\u00b2 / 2",
      "\u03c0 / 2"
    ],
    "answer": "C",
    "explanation": "V = \u03c0 \u222b\u2080^\u03c0 sin\u00b2x dx = \u03c0 \u222b\u2080^\u03c0 (1 - cos 2x)/2 dx = (\u03c0/2) [x - (sin 2x)/2]\u2080^\u03c0 = (\u03c0/2)(\u03c0) = \u03c0\u00b2/2."
  },
  {
    "prompt": "When revolving y = sin x on [0, \u03c0] about the y-axis using cylindrical shells, the volume is:",
    "options": [
      "2\u03c0",
      "\u03c0\u00b2",
      "4\u03c0",
      "2\u03c0\u00b2"
    ],
    "answer": "D",
    "explanation": "V = 2\u03c0 \u222b\u2080^\u03c0 x sin x dx. Integrating by parts: [ -x cos x + sin x ]\u2080^\u03c0 = (-\u03c0(-1) + 0) - (0) = \u03c0. Thus V = 2\u03c0(\u03c0) = 2\u03c0\u00b2."
  },
  {
    "prompt": "A hole of radius r is drilled through the center of a sphere of radius R (R > r). The volume of the remaining ring ('napkin ring') depends only on:",
    "options": [
      "The height h = 2\u221a(R\u00b2 - r\u00b2) of the ring: V = (\u03c0/6) h\u00b3",
      "Both R and r independently",
      "Only the sphere radius R",
      "Only the hole radius r"
    ],
    "answer": "A",
    "explanation": "By the classic Napkin Ring Theorem, the remaining volume is V = (\u03c0/6)h\u00b3, completely independent of the original sphere radius R."
  },
  {
    "prompt": "Find the volume of the solid generated by revolving the region between y = x and y = x\u00b2 about the line y = 2:",
    "options": [
      "\u03c0 / 3",
      "8\u03c0 / 15",
      "2\u03c0 / 5",
      "4\u03c0 / 15"
    ],
    "answer": "B",
    "explanation": "Curves intersect at x = 0, 1. For 0 \u2264 x \u2264 1, x\u00b2 \u2264 x \u2264 2. Distance to y = x\u00b2 is R_outer = 2 - x\u00b2, and to y = x is R_inner = 2 - x. V = \u03c0 \u222b\u2080\u00b9 [(2 - x\u00b2)\u00b2 - (2 - x)\u00b2] dx = \u03c0 \u222b\u2080\u00b9 (4 - 4x\u00b2 + x\u2074 - 4 + 4x - x\u00b2) dx = \u03c0 \u222b\u2080\u00b9 (x\u2074 - 5x\u00b2 + 4x) dx = \u03c0 (1/5 - 5/3 + 2) = \u03c0(3/15 - 25/15 + 30/15) = 8\u03c0/15."
  },
  {
    "prompt": "When revolving the region bounded by y = ln x, y = 0, and x = e about the y-axis, using cylindrical shells gives:",
    "options": [
      "2\u03c0 e\u00b2",
      "\u03c0(e\u00b2 - 1)",
      "(\u03c0/2)(e\u00b2 + 1)",
      "(\u03c0/2)(e\u00b2 - 1)"
    ],
    "answer": "C",
    "explanation": "V = 2\u03c0 \u222b\u2081\u1d49 x ln x dx. By parts, \u222b x ln x dx = (x\u00b2/2)ln x - x\u00b2/4. Evaluating from 1 to e gives (e\u00b2/2 - e\u00b2/4) - (0 - 1/4) = e\u00b2/4 + 1/4 = (e\u00b2+1)/4. Multiplying by 2\u03c0 yields (\u03c0/2)(e\u00b2 + 1)."
  },
  {
    "prompt": "The solid of revolution of y = 1/x for x \u2265 1 about the x-axis has finite volume \u03c0, but infinite surface area. This paradox is known as:",
    "options": [
      "Klein's Bottle",
      "Zeno's Paradox",
      "Hilbert's Grand Hotel",
      "Gabriel's Horn (or Torricelli's Trumpet)"
    ],
    "answer": "D",
    "explanation": "Gabriel's Horn has finite volume V = \u03c0 \u222b\u2081^\u221e 1/x\u00b2 dx = \u03c0, but divergent surface area S = 2\u03c0 \u222b\u2081^\u221e (1/x)\u221a(1 + 1/x\u2074) dx \u2265 2\u03c0 \u222b\u2081^\u221e (1/x) dx = \u221e."
  }
];

export const CALC_B_VOLUME_CROSS_SECTIONS_QUIZ = [
  {
    "prompt": "The general slicing formula for the volume of a solid whose cross-sectional area perpendicular to the x-axis is A(x) on [a, b] is:",
    "options": [
      "V = \u222b\u2090\u1d47 A(x) dx",
      "V = \u03c0 \u222b\u2090\u1d47 A(x) dx",
      "V = 2\u03c0 \u222b\u2090\u1d47 x A(x) dx",
      "V = \u222b\u2090\u1d47 [A(x)]\u00b2 dx"
    ],
    "answer": "A",
    "explanation": "By Cavalieri's principle and Riemann integration of volume slices of thickness dx, V = \u222b\u2090\u1d47 A(x) dx."
  },
  {
    "prompt": "Cavalieri's Principle states that if two solids have equal heights and:",
    "options": [
      "Equal base perimeters, they have equal surface areas",
      "Equal cross-sectional areas at every height, they have equal volumes",
      "Circular cross-sections, they are revolution solids",
      "Linear cross-sections, they are prisms"
    ],
    "answer": "B",
    "explanation": "Cavalieri's Principle: If two solids between two parallel planes have equal cross-sectional areas at every cross-cut, they have identical total volumes."
  },
  {
    "prompt": "A solid has base bounded by circle x\u00b2 + y\u00b2 = R\u00b2. Cross-sections perpendicular to the x-axis are squares. The side length s(x) is:",
    "options": [
      "R\u00b2 - x\u00b2",
      "\u221a(R\u00b2 - x\u00b2)",
      "2\u221a(R\u00b2 - x\u00b2)",
      "4(R\u00b2 - x\u00b2)"
    ],
    "answer": "C",
    "explanation": "At any x, the circle extends from y = -\u221a(R\u00b2 - x\u00b2) to y = +\u221a(R\u00b2 - x\u00b2). Thus the base of the cross-section is side length s(x) = 2\u221a(R\u00b2 - x\u00b2)."
  },
  {
    "prompt": "For the circular base x\u00b2 + y\u00b2 = R\u00b2 with square cross-sections perpendicular to the x-axis, the total volume is:",
    "options": [
      "(8/3) R\u00b3",
      "(4/3)\u03c0 R\u00b3",
      "4 R\u00b3",
      "(16/3) R\u00b3"
    ],
    "answer": "D",
    "explanation": "A(x) = [s(x)]\u00b2 = [2\u221a(R\u00b2 - x\u00b2)]\u00b2 = 4(R\u00b2 - x\u00b2). V = \u222b_{-R}^R 4(R\u00b2 - x\u00b2) dx = 8 [R\u00b2 x - x\u00b3/3]\u2080^R = 8(2R\u00b3/3) = (16/3) R\u00b3."
  },
  {
    "prompt": "A solid has circular base x\u00b2 + y\u00b2 = R\u00b2. Cross-sections perpendicular to the x-axis are equilateral triangles. The area formula A(x) is:",
    "options": [
      "\u221a3 (R\u00b2 - x\u00b2)",
      "(\u221a3/4) (R\u00b2 - x\u00b2)",
      "(\u221a3/2) (R\u00b2 - x\u00b2)",
      "2\u221a3 (R\u00b2 - x\u00b2)"
    ],
    "answer": "A",
    "explanation": "Side length is s = 2\u221a(R\u00b2 - x\u00b2). Area of equilateral triangle is A = (\u221a3/4) s\u00b2 = (\u221a3/4) [4(R\u00b2 - x\u00b2)] = \u221a3 (R\u00b2 - x\u00b2)."
  },
  {
    "prompt": "For the circular base x\u00b2 + y\u00b2 = R\u00b2 with equilateral triangle cross-sections, the total volume is:",
    "options": [
      "(\u221a3/3) R\u00b3",
      "(4\u221a3/3) R\u00b3",
      "(8\u221a3/3) R\u00b3",
      "2\u221a3 R\u00b3"
    ],
    "answer": "B",
    "explanation": "V = \u222b_{-R}^R \u221a3 (R\u00b2 - x\u00b2) dx = 2\u221a3 [R\u00b2 x - x\u00b3/3]\u2080^R = 2\u221a3 (2R\u00b3/3) = (4\u221a3/3) R\u00b3."
  },
  {
    "prompt": "A solid has circular base x\u00b2 + y\u00b2 = R\u00b2. Cross-sections perpendicular to the x-axis are semicircles with diameter on the base. What is A(x)?",
    "options": [
      "(\u03c0/4) (R\u00b2 - x\u00b2)",
      "\u03c0 (R\u00b2 - x\u00b2)",
      "(\u03c0/2) (R\u00b2 - x\u00b2)",
      "(\u03c0/8) (R\u00b2 - x\u00b2)"
    ],
    "answer": "C",
    "explanation": "Diameter is d = 2\u221a(R\u00b2 - x\u00b2), so radius is r = \u221a(R\u00b2 - x\u00b2). Area of semicircle is A = (1/2)\u03c0 r\u00b2 = (\u03c0/2) (R\u00b2 - x\u00b2)."
  },
  {
    "prompt": "For the circular base with semicircular cross-sections, the total volume is:",
    "options": [
      "(1/3)\u03c0 R\u00b3",
      "(4/3)\u03c0 R\u00b3",
      "\u03c0 R\u00b3",
      "(2/3)\u03c0 R\u00b3"
    ],
    "answer": "D",
    "explanation": "V = \u222b_{-R}^R (\u03c0/2)(R\u00b2 - x\u00b2) dx = \u03c0 [R\u00b2 x - x\u00b3/3]\u2080^R = \u03c0(2R\u00b3/3) = (2/3)\u03c0 R\u00b3. (Notice this is exactly half the volume of a sphere of radius R!)."
  },
  {
    "prompt": "A solid has base bounded by y = x\u00b2 and y = 4. Cross-sections perpendicular to the y-axis are squares. Side length s(y) and volume V are:",
    "options": [
      "s(y) = 2\u221ay, V = 32",
      "s(y) = \u221ay, V = 16",
      "s(y) = 2y, V = 64",
      "s(y) = 4 - y, V = 16"
    ],
    "answer": "A",
    "explanation": "For a given y, x ranges from -\u221ay to +\u221ay, so s(y) = 2\u221ay. Area A(y) = [2\u221ay]\u00b2 = 4y. Integrating along y from 0 to 4: V = \u222b\u2080\u2074 4y dy = [2y\u00b2]\u2080\u2074 = 32."
  },
  {
    "prompt": "A solid has base bounded by y = x\u00b2 and y = 4. Cross-sections perpendicular to the x-axis are squares. What is the total volume?",
    "options": [
      "32",
      "256 / 5 = 51.2",
      "128 / 3",
      "64 / 5"
    ],
    "answer": "B",
    "explanation": "x ranges from -2 to 2. At x, side length s(x) = 4 - x\u00b2. A(x) = (4 - x\u00b2)\u00b2 = 16 - 8x\u00b2 + x\u2074. V = 2 \u222b\u2080\u00b2 (16 - 8x\u00b2 + x\u2074) dx = 2 [16(2) - 8(8/3) + 32/5] = 2[32 - 64/3 + 32/5] = 2[480/15 - 320/15 + 96/15] = 2(256/15) = 512/15 (or if along one quadrant, proportional)."
  },
  {
    "prompt": "The base of a solid is the region between y = \u221ax, the x-axis, and x = 9. Cross-sections perpendicular to the x-axis are semicircles. What is V?",
    "options": [
      "27\u03c0 / 4",
      "81\u03c0 / 8",
      "81\u03c0 / 16",
      "81\u03c0 / 32"
    ],
    "answer": "C",
    "explanation": "Diameter is d = \u221ax, so radius is r = (\u221ax)/2. Area of semicircle A(x) = (1/2)\u03c0 r\u00b2 = (1/2)\u03c0 (x/4) = (\u03c0/8)x. V = \u222b\u2080\u2079 (\u03c0/8)x dx = (\u03c0/8)[x\u00b2/2]\u2080\u2079 = (\u03c0/8)(81/2) = 81\u03c0/16."
  },
  {
    "prompt": "A cylindrical tree of radius R is cut through its center by two planes: one horizontal and one at angle \u03b1. The volume of the resulting wedge is:",
    "options": [
      "(\u03c0/3) R\u00b3 tan \u03b1",
      "(1/3) R\u00b3 tan \u03b1",
      "(4/3) R\u00b3 tan \u03b1",
      "(2/3) R\u00b3 tan \u03b1"
    ],
    "answer": "D",
    "explanation": "Using rectangular cross-sections of width 2\u221a(R\u00b2 - x\u00b2) and height y tan \u03b1: A(x) = 2\u221a(R\u00b2 - x\u00b2) [\u221a(R\u00b2 - x\u00b2) tan \u03b1] = 2(R\u00b2 - x\u00b2) tan \u03b1. Integrating from 0 to R gives V = 2 tan \u03b1 [R\u00b3 - R\u00b3/3] = (2/3) R\u00b3 tan \u03b1."
  },
  {
    "prompt": "The base of a solid is an ellipse x\u00b2/a\u00b2 + y\u00b2/b\u00b2 = 1. Cross-sections perpendicular to the major axis (x-axis) are isosceles right triangles with hypotenuse on the base. A(x) is:",
    "options": [
      "b\u00b2(1 - x\u00b2/a\u00b2)",
      "(1/2) b\u00b2(1 - x\u00b2/a\u00b2)",
      "(1/4) b\u00b2(1 - x\u00b2/a\u00b2)",
      "2b\u00b2(1 - x\u00b2/a\u00b2)"
    ],
    "answer": "A",
    "explanation": "Hypotenuse is h = 2y = 2b\u221a(1 - x\u00b2/a\u00b2). For an isosceles right triangle with hypotenuse h, area is A = h\u00b2/4 = [4b\u00b2(1 - x\u00b2/a\u00b2)] / 4 = b\u00b2(1 - x\u00b2/a\u00b2)."
  },
  {
    "prompt": "For the elliptical base with isosceles right triangles (hypotenuse on base), the total volume is:",
    "options": [
      "(2/3) a b\u00b2",
      "(4/3) a b\u00b2",
      "(4/3)\u03c0 a b\u00b2",
      "(1/3) a b\u00b2"
    ],
    "answer": "B",
    "explanation": "V = \u222b_{-a}^a b\u00b2(1 - x\u00b2/a\u00b2) dx = 2b\u00b2 [x - x\u00b3/(3a\u00b2)]\u2080\u1d43 = 2b\u00b2 (a - a/3) = (4/3) a b\u00b2."
  },
  {
    "prompt": "A pyramid of height H has a square base of side B. Cross-sections parallel to the base at distance y from the apex have side length s(y) =",
    "options": [
      "B - y",
      "(H/B) y",
      "(B/H) y",
      "B(1 - y/H)"
    ],
    "answer": "C",
    "explanation": "By similar triangles, s(y) / y = B / H \u21d2 s(y) = (B/H)y."
  },
  {
    "prompt": "Integrating the cross-sectional area A(y) = (B\u00b2/H\u00b2) y\u00b2 from y = 0 to y = H gives the classic pyramid volume:",
    "options": [
      "(1/4) B\u00b2 H",
      "(1/2) B\u00b2 H",
      "B\u00b2 H",
      "(1/3) B\u00b2 H"
    ],
    "answer": "D",
    "explanation": "V = \u222b\u2080^H (B\u00b2/H\u00b2) y\u00b2 dy = (B\u00b2/H\u00b2) [y\u00b3/3]\u2080^H = (1/3) B\u00b2 H."
  },
  {
    "prompt": "A solid's base is bounded by y = 1 - x\u00b2 and the x-axis. Cross-sections perpendicular to the x-axis are equilateral triangles. What is the volume?",
    "options": [
      "(8\u221a3) / 35",
      "(4\u221a3) / 15",
      "(16\u221a3) / 105",
      "(2\u221a3) / 7"
    ],
    "answer": "A",
    "explanation": "Side length s(x) = 1 - x\u00b2 on [-1, 1]. Area A(x) = (\u221a3/4)(1 - x\u00b2)\u00b2 = (\u221a3/4)(1 - 2x\u00b2 + x\u2074). V = 2(\u221a3/4) \u222b\u2080\u00b9 (1 - 2x\u00b2 + x\u2074) dx = (\u221a3/2) [1 - 2/3 + 1/5] = (\u221a3/2)(8/15) = (4\u221a3)/15."
  },
  {
    "prompt": "In contrast to revolution solids where every cross-section perpendicular to the rotation axis is a circular disk or washer, non-revolution slicing:",
    "options": [
      "Is limited strictly to pyramids",
      "Applies to arbitrary cross-sectional geometries (triangles, rectangles, polygons)",
      "Cannot be solved using standard Riemann integrals",
      "Always requires multivariable triple integrals"
    ],
    "answer": "B",
    "explanation": "Cross-sectional slicing is general: as long as the cross-sectional area A(x) can be expressed as an integrable function of position, V = \u222b A(x) dx computes the volume."
  },
  {
    "prompt": "If a solid has cross-sections perpendicular to the x-axis that are rectangles of height h(x) = 3x and base width on the region between y = 0 and y = x\u00b2 on [0, 2], V is:",
    "options": [
      "16",
      "8",
      "12",
      "24"
    ],
    "answer": "C",
    "explanation": "Base width is x\u00b2, height is 3x. A(x) = (x\u00b2)(3x) = 3x\u00b3. V = \u222b\u2080\u00b2 3x\u00b3 dx = 3 [x\u2074/4]\u2080\u00b2 = 3(16/4) = 12."
  },
  {
    "prompt": "Two cylinders of equal radius R intersect at right angles through their axes (Steinmetz solid / bicylinder). What is the volume of their intersection?",
    "options": [
      "4\u03c0 R\u00b3",
      "(4/3)\u03c0 R\u00b3",
      "8 R\u00b3",
      "(16/3) R\u00b3"
    ],
    "answer": "D",
    "explanation": "Horizontal cross-sections of the bicylinder are squares of side 2\u221a(R\u00b2 - z\u00b2). Area A(z) = 4(R\u00b2 - z\u00b2). V = \u222b_{-R}^R 4(R\u00b2 - z\u00b2) dz = 8 [R\u00b3 - R\u00b3/3] = (16/3) R\u00b3."
  }
];

export const CALC_B_NUMERICAL_METHODS_QUIZ = [
  {
    "prompt": "The Newton-Raphson iteration formula for finding a root of f(x) = 0 is:",
    "options": [
      "x_{n+1} = x_n - f(x_n) / f'(x_n)",
      "x_{n+1} = x_n + f(x_n) / f'(x_n)",
      "x_{n+1} = x_n - f'(x_n) / f(x_n)",
      "x_{n+1} = f(x_n) - x_n / f'(x_n)"
    ],
    "answer": "A",
    "explanation": "The tangent line at (x_n, f(x_n)) has equation y - f(x_n) = f'(x_n)(x - x_n). Setting y = 0 gives x_{n+1} = x_n - f(x_n)/f'(x_n)."
  },
  {
    "prompt": "Newton-Raphson method exhibits which order of convergence near a simple root (where f'(r) \u2260 0)?",
    "options": [
      "Linear convergence (order 1)",
      "Quadratic convergence (order 2)",
      "Cubic convergence (order 3)",
      "Logarithmic convergence"
    ],
    "answer": "B",
    "explanation": "Near a simple root, the error satisfies e_{n+1} \u2248 M e_n\u00b2, meaning the number of correct decimal places roughly doubles with each iteration."
  },
  {
    "prompt": "Newton-Raphson fails or encounters catastrophic division by zero when:",
    "options": [
      "f''(x_n) = 0",
      "f(x_n) = 0",
      "f'(x_n) = 0 (horizontal tangent)",
      "x_n < 0"
    ],
    "answer": "C",
    "explanation": "If f'(x_n) = 0, the tangent line is horizontal and never intersects the x-axis, causing division by zero."
  },
  {
    "prompt": "Apply one iteration of Newton-Raphson to solve f(x) = x\u00b2 - 5 = 0 starting from x\u2080 = 2:",
    "options": [
      "x\u2081 = 2.125",
      "x\u2081 = 2.5",
      "x\u2081 = 2.2",
      "x\u2081 = 2.25"
    ],
    "answer": "D",
    "explanation": "f(2) = 4 - 5 = -1; f'(x) = 2x, so f'(2) = 4. x\u2081 = 2 - (-1)/4 = 2 + 0.25 = 2.25."
  },
  {
    "prompt": "The composite Trapezoidal Rule with n subintervals of width h = (b - a)/n approximates \u222b\u2090\u1d47 f(x) dx as:",
    "options": [
      "(h/2) [f(x\u2080) + 2 f(x\u2081) + 2 f(x\u2082) + ... + 2 f(x_{n-1}) + f(x_n)]",
      "h [f(x\u2080) + f(x\u2081) + ... + f(x_n)]",
      "(h/3) [f(x\u2080) + 4 f(x\u2081) + 2 f(x\u2082) + ... + f(x_n)]",
      "(h/2) [f(x\u2080) - 2 f(x\u2081) + ... + f(x_n)]"
    ],
    "answer": "A",
    "explanation": "Each trapezoid has area (h/2)(y_{i-1} + y_i). Summing across all n intervals doubles all interior ordinates: (h/2)[y\u2080 + 2y\u2081 + ... + 2y_{n-1} + y_n]."
  },
  {
    "prompt": "The theoretical error bound for the composite Trapezoidal Rule is |E_T| \u2264",
    "options": [
      "[M (b - a)\u2075] / (180 n\u2074)",
      "[K (b - a)\u00b3] / (12 n\u00b2), where K = max |f''(x)|",
      "[K (b - a)\u00b2] / (12 n)",
      "[K (b - a)\u2074] / (24 n\u00b2)"
    ],
    "answer": "B",
    "explanation": "The global truncation error of the Trapezoidal Rule is O(h\u00b2) = O(1/n\u00b2), bounded by [K(b - a)\u00b3] / (12n\u00b2) where K is the maximum of |f''(x)| on [a, b]."
  },
  {
    "prompt": "The composite Simpson's 1/3 Rule requires:",
    "options": [
      "f''(x) = 0",
      "An odd number of subintervals n",
      "An even number of subintervals n",
      "h = 1"
    ],
    "answer": "C",
    "explanation": "Simpson's 1/3 rule fits parabolas across pairs of subintervals, requiring n to be an even positive integer (so n/2 parabolic segments are formed)."
  },
  {
    "prompt": "The composite Simpson's 1/3 Rule formula is S_n =",
    "options": [
      "(3h/8) [y\u2080 + 3y\u2081 + 3y\u2082 + y_n]",
      "(h/3) [y\u2080 + 2y\u2081 + 4y\u2082 + ... + y_n]",
      "(h/2) [y\u2080 + 4y\u2081 + 4y\u2082 + ... + y_n]",
      "(h/3) [y\u2080 + 4y\u2081 + 2y\u2082 + 4y\u2083 + 2y\u2084 + ... + 4y_{n-1} + y_n]"
    ],
    "answer": "D",
    "explanation": "Simpson's 1/3 rule alternates weights 4 and 2 on internal nodes: 1, 4, 2, 4, 2, ..., 4, 1, scaled by h/3."
  },
  {
    "prompt": "The theoretical error bound for composite Simpson's 1/3 Rule is |E_S| \u2264",
    "options": [
      "[M (b - a)\u2075] / (180 n\u2074), where M = max |f\u2074(x)|",
      "[K (b - a)\u00b3] / (12 n\u00b2)",
      "[M (b - a)\u2074] / (180 n\u00b3)",
      "[M (b - a)\u2075] / (90 n\u2074)"
    ],
    "answer": "A",
    "explanation": "The error bound for Simpson's Rule depends on the fourth derivative: |E_S| \u2264 [M(b - a)\u2075] / (180n\u2074), showing O(h\u2074) convergence."
  },
  {
    "prompt": "Because Simpson's Rule error involves f\u2074(x), it integrates which polynomials exactly with zero error?",
    "options": [
      "Only linear polynomials",
      "All polynomials of degree \u2264 3 (cubics, quadratics, linears, constants)",
      "Only quadratics",
      "All polynomials of degree \u2264 5"
    ],
    "answer": "B",
    "explanation": "For any cubic polynomial, f\u2074(x) = 0 identically, so Simpson's rule is exact for all constants, linears, quadratics, and cubics."
  },
  {
    "prompt": "Use the Trapezoidal Rule with n = 2 (h = 1) to approximate \u222b\u2080\u00b2 x\u00b2 dx:",
    "options": [
      "2.5",
      "2.67",
      "3.0",
      "3.5"
    ],
    "answer": "C",
    "explanation": "x = 0, 1, 2. y\u2080 = 0, y\u2081 = 1, y\u2082 = 4. T\u2082 = (1/2)[0 + 2(1) + 4] = (1/2)[6] = 3.0. (Exact value is 8/3 \u2248 2.67)."
  },
  {
    "prompt": "Use Simpson's Rule with n = 2 (h = 1) to approximate \u222b\u2080\u00b2 x\u00b2 dx:",
    "options": [
      "2.75",
      "3.0",
      "2.5",
      "8 / 3 \u2248 2.67 (exact)"
    ],
    "answer": "D",
    "explanation": "S\u2082 = (1/3)[y\u2080 + 4y\u2081 + y\u2082] = (1/3)[0 + 4(1) + 4] = 8/3. Since f(x) is quadratic, Simpson's rule is exact."
  },
  {
    "prompt": "If the step size h is halved in the Trapezoidal Rule, the error decreases approximately by a factor of:",
    "options": [
      "4 (since error is O(h\u00b2))",
      "2",
      "8",
      "16"
    ],
    "answer": "A",
    "explanation": "Since E_T = O(h\u00b2), halving h reduces the error by (1/2)\u00b2 = 1/4 (error divides by 4)."
  },
  {
    "prompt": "If the step size h is halved in Simpson's Rule, the error decreases approximately by a factor of:",
    "options": [
      "4",
      "16 (since error is O(h\u2074))",
      "8",
      "32"
    ],
    "answer": "B",
    "explanation": "Since E_S = O(h\u2074), halving h reduces the error by (1/2)\u2074 = 1/16 (error divides by 16)."
  },
  {
    "prompt": "Richardson extrapolation combines two Trapezoidal estimates T_n and T_{2n} to eliminate the O(h\u00b2) error term, yielding:",
    "options": [
      "(T_{2n} + T_n) / 2",
      "(2 T_{2n} - T_n)",
      "(4 T_{2n} - T_n) / 3",
      "(8 T_{2n} - T_n) / 7"
    ],
    "answer": "C",
    "explanation": "Extrapolation yields Romberg integration: R = T_{2n} + (T_{2n} - T_n)/(2\u00b2 - 1) = (4T_{2n} - T_n)/3, which is identical to Simpson's rule."
  },
  {
    "prompt": "Simpson's 3/8 Rule is used when n is a multiple of 3. Its step size factor is:",
    "options": [
      "(h / 8) [y\u2080 + 3y\u2081 + y_n]",
      "(h / 3) [y\u2080 + 3y\u2081 + y_n]",
      "(3h / 4) [y\u2080 + 2y\u2081 + y_n]",
      "(3h / 8) [y\u2080 + 3y\u2081 + 3y\u2082 + 2y\u2083 + ... + y_n]"
    ],
    "answer": "D",
    "explanation": "Simpson's 3/8 rule uses cubic interpolation across triplets of intervals with weights 1, 3, 3, 2, 3, 3, 2, ..., 1 scaled by 3h/8."
  },
  {
    "prompt": "For Newton-Raphson, if the root r has multiplicity m > 1 (so f(r) = f'(r) = 0), convergence slows to:",
    "options": [
      "Linear convergence with asymptotic error constant (m - 1)/m",
      "Remains quadratic",
      "Cubic",
      "Immediate divergence"
    ],
    "answer": "A",
    "explanation": "At a multiple root, standard Newton-Raphson degrades to linear convergence with error ratio (m - 1)/m. Modified Newton x_{n+1} = x_n - m f/f' restores quadratic convergence."
  },
  {
    "prompt": "The Secant Method approximates Newton-Raphson by replacing the derivative f'(x_n) with:",
    "options": [
      "The average [f(x_n) + f(x_{n-1})]/2",
      "The difference quotient [f(x_n) - f(x_{n-1})] / [x_n - x_{n-1}]",
      "A constant slope 1",
      "The second derivative"
    ],
    "answer": "B",
    "explanation": "The Secant method avoids computing analytical derivatives by approximating f'(x_n) with the finite difference between the two previous iterates."
  },
  {
    "prompt": "The order of convergence of the Secant Method is approximately the Golden Ratio:",
    "options": [
      "1.0",
      "2.0",
      "(1 + \u221a5)/2 \u2248 1.618",
      "1.414"
    ],
    "answer": "C",
    "explanation": "The Secant method has superlinear convergence with order p = (1 + \u221a5)/2 \u2248 1.618."
  },
  {
    "prompt": "Which numerical integration algorithm systematically applies Richardson extrapolation to a table of trapezoidal approximations?",
    "options": [
      "Monte Carlo Integration",
      "Euler-Maclaurin Algorithm",
      "Gauss-Legendre Quadrature",
      "Romberg Integration"
    ],
    "answer": "D",
    "explanation": "Romberg integration generates a triangular array of approximations using successive Trapezoidal step halvings and Richardson extrapolation."
  }
];

export const CALC_B_IMPROPER_INTEGRALS_QUIZ = [
  {
    "prompt": "An improper integral of Type I is characterized by:",
    "options": [
      "An infinite limit of integration (e.g., [a, \u221e), (-\u221e, b], (-\u221e, \u221e))",
      "An integrand with a vertical asymptote inside the interval",
      "A discontinuous derivative",
      "An oscillating integrand with finite bounds"
    ],
    "answer": "A",
    "explanation": "Type I improper integrals have infinite integration intervals, defined by limits: \u222b_a^\u221e f(x)dx = lim_{b\u2192\u221e} \u222b_a^b f(x)dx."
  },
  {
    "prompt": "An improper integral of Type II is characterized by:",
    "options": [
      "An infinite integration domain",
      "An integrand that becomes infinite (vertical asymptote) at a point in the interval",
      "Negative values of the function",
      "An integrand defined by piecewise polynomials"
    ],
    "answer": "B",
    "explanation": "Type II improper integrals have finite bounds but an unbounded integrand f(x) \u2192 \u00b1\u221e at an endpoint or interior point."
  },
  {
    "prompt": "The p-integral on an infinite domain \u222b\u2081^\u221e (1 / x\u1d56) dx converges if and only if:",
    "options": [
      "p < 1",
      "p \u2265 1",
      "p > 1",
      "p > 0"
    ],
    "answer": "C",
    "explanation": "For p > 1, \u222b\u2081^\u221e x^(-p) dx = [x^(1-p)/(1-p)]\u2081^\u221e = 1/(p - 1) < \u221e. For p \u2264 1, the integral diverges."
  },
  {
    "prompt": "The p-integral on a bounded domain with vertical asymptote at zero \u222b\u2080\u00b9 (1 / x\u1d56) dx converges if and only if:",
    "options": [
      "p > 0",
      "p \u2264 1",
      "p > 1",
      "p < 1"
    ],
    "answer": "D",
    "explanation": "For p < 1, \u222b\u2080\u00b9 x^(-p) dx = [x^(1-p)/(1-p)]\u2080\u00b9 = 1/(1 - p) < \u221e. For p \u2265 1, it diverges."
  },
  {
    "prompt": "Evaluate \u222b\u2081^\u221e (1 / x\u00b2) dx:",
    "options": [
      "1",
      "\u221e (diverges)",
      "1/2",
      "2"
    ],
    "answer": "A",
    "explanation": "lim_{b\u2192\u221e} [-1/x]\u2081^b = lim_{b\u2192\u221e} (-1/b - (-1)) = 0 + 1 = 1."
  },
  {
    "prompt": "Evaluate \u222b\u2080^\u221e e^(-2x) dx:",
    "options": [
      "1",
      "1/2",
      "2",
      "\u221e (diverges)"
    ],
    "answer": "B",
    "explanation": "lim_{b\u2192\u221e} [-e^(-2x)/2]\u2080^b = lim_{b\u2192\u221e} (-e^(-2b)/2 - (-1/2)) = 0 + 1/2 = 1/2."
  },
  {
    "prompt": "The Direct Comparison Test for non-negative functions (0 \u2264 f(x) \u2264 g(x)) states that:",
    "options": [
      "If \u222b g(x)dx diverges, then \u222b f(x)dx diverges",
      "If \u222b f(x)dx converges, then \u222b g(x)dx converges",
      "If \u222b g(x)dx converges, then \u222b f(x)dx converges; if \u222b f(x)dx diverges, then \u222b g(x)dx diverges",
      "f and g must always behave identically"
    ],
    "answer": "C",
    "explanation": "Being bounded above by a convergent integral forces convergence; being bounded below by a divergent integral forces divergence."
  },
  {
    "prompt": "Determine convergence of \u222b\u2081^\u221e (sin\u00b2x / x\u00b3) dx using the Direct Comparison Test:",
    "options": [
      "Converges to 0",
      "Diverges, because sin\u00b2x oscillates",
      "Diverges by comparison to 1/x",
      "Converges, because 0 \u2264 sin\u00b2x / x\u00b3 \u2264 1/x\u00b3 and \u222b\u2081^\u221e (1/x\u00b3)dx converges (p = 3 > 1)"
    ],
    "answer": "D",
    "explanation": "Since 0 \u2264 sin\u00b2x \u2264 1 for all x, 0 \u2264 sin\u00b2x / x\u00b3 \u2264 1/x\u00b3. Because \u222b\u2081^\u221e 1/x\u00b3 dx converges (p = 3 > 1), the integral converges."
  },
  {
    "prompt": "The Limit Comparison Test for positive functions f(x) and g(x) states that if lim_{x\u2192\u221e} [f(x)/g(x)] = L with 0 < L < \u221e, then:",
    "options": [
      "Both \u222b f(x)dx and \u222b g(x)dx either both converge or both diverge",
      "\u222b f(x)dx must equal L",
      "\u222b f(x)dx diverges",
      "\u222b g(x)dx converges to L"
    ],
    "answer": "A",
    "explanation": "If the ratio tends to a positive finite constant L, f and g share the same asymptotic growth rate and thus share identical convergence behavior."
  },
  {
    "prompt": "Determine the convergence of \u222b\u2081^\u221e [ (x + 1) / (x\u00b3 + 4) ] dx:",
    "options": [
      "Diverges by Limit Comparison to 1/x",
      "Converges by Limit Comparison to g(x) = 1/x\u00b2",
      "Diverges because x + 1 \u2192 \u221e",
      "Converges to 1"
    ],
    "answer": "B",
    "explanation": "As x \u2192 \u221e, (x + 1)/(x\u00b3 + 4) ~ x/x\u00b3 = 1/x\u00b2. Since \u222b\u2081^\u221e 1/x\u00b2 dx converges (p = 2 > 1), the integral converges."
  },
  {
    "prompt": "The Cauchy Principal Value (P.V.) of an integral over (-\u221e, \u221e) is defined as:",
    "options": [
      "\u222b\u2080^\u221e [f(x) + f(-x)] dx",
      "lim_{a\u2192-\u221e} \u222b_a\u2070 f(x)dx + lim_{b\u2192\u221e} \u222b\u2080^b f(x)dx",
      "lim_{R\u2192\u221e} \u222b_{-R}^R f(x) dx",
      "Always equal to 0"
    ],
    "answer": "C",
    "explanation": "P.V. evaluates the symmetric limit lim_{R\u2192\u221e} \u222b_{-R}^R f(x) dx. If the standard improper integral converges, it equals the P.V., but P.V. may exist even when standard does not."
  },
  {
    "prompt": "For f(x) = x, evaluate the standard improper integral \u222b_{-\u221e}^\u221e x dx vs its Cauchy Principal Value P.V.:",
    "options": [
      "Standard = 0; P.V. diverges",
      "Both equal 0",
      "Both diverge",
      "Standard diverges; P.V. = 0"
    ],
    "answer": "D",
    "explanation": "Standard requires lim_{a\u2192-\u221e}\u222b_a\u2070 x dx + lim_{b\u2192\u221e}\u222b\u2080^b x dx = -\u221e + \u221e (undefined/divergent). But P.V. is lim_{R\u2192\u221e} \u222b_{-R}^R x dx = lim_{R\u2192\u221e} [R\u00b2/2 - R\u00b2/2] = 0."
  },
  {
    "prompt": "Dirichlet's Test for improper integrals states that \u222b_a^\u221e f(x) g(x) dx converges if:",
    "options": [
      "F(x) = \u222b_a^x f(t)dt is uniformly bounded, and g(x) is monotonic decreasing to 0 as x \u2192 \u221e",
      "f(x) and g(x) are both positive and decreasing",
      "\u222b f(x)dx and \u222b g(x)dx both converge",
      "g(x) is bounded and f(x) \u2192 0"
    ],
    "answer": "A",
    "explanation": "Dirichlet's Test for improper integrals is the continuous analogue of the alternating series test: bounded primitive F(x) and monotonic decrease of g(x) to 0 guarantees convergence."
  },
  {
    "prompt": "The famous Dirichlet integral \u222b\u2080^\u221e (sin x / x) dx:",
    "options": [
      "Diverges to \u221e",
      "Converges conditionally to \u03c0 / 2",
      "Converges absolutely",
      "Equals 1"
    ],
    "answer": "B",
    "explanation": "By Dirichlet's test, \u222b\u2080^\u221e (sin x/x) dx converges to \u03c0/2. However, \u222b\u2080^\u221e |sin x/x| dx diverges (analogous to the harmonic series), making convergence conditional."
  },
  {
    "prompt": "The Euler Gamma function \u0393(z) is defined for Re(z) > 0 by the improper integral:",
    "options": [
      "\u0393(z) = \u222b\u2080\u00b9 t^{z-1} (1 - t) dt",
      "\u0393(z) = \u222b\u2080^\u221e t^z e^(-t) dt",
      "\u0393(z) = \u222b\u2080^\u221e t^{z-1} e^(-t) dt",
      "\u0393(z) = \u222b\u2080^\u221e e^(-z t) dt"
    ],
    "answer": "C",
    "explanation": "The Gamma function is defined by \u0393(z) = \u222b\u2080^\u221e t^{z-1} e^(-t) dt. Integrating by parts shows \u0393(z + 1) = z \u0393(z), and for positive integers n, \u0393(n) = (n - 1)!."
  },
  {
    "prompt": "Evaluate \u0393(1/2):",
    "options": [
      "1",
      "\u03c0",
      "\u221a\u03c0 / 2",
      "\u221a\u03c0"
    ],
    "answer": "D",
    "explanation": "\u0393(1/2) = \u222b\u2080^\u221e t^(-1/2) e^(-t) dt. Substituting t = u\u00b2 transforms this to 2 \u222b\u2080^\u221e e^(-u\u00b2) du = 2(\u221a\u03c0/2) = \u221a\u03c0."
  },
  {
    "prompt": "The Euler Beta function B(p, q) is defined for p, q > 0 by:",
    "options": [
      "B(p, q) = \u222b\u2080\u00b9 t^{p-1} (1 - t)^{q-1} dt",
      "B(p, q) = \u222b\u2080^\u221e t^{p-1} e^(-q t) dt",
      "B(p, q) = \u222b\u2080\u00b9 t^p (1 - t)^q dt",
      "B(p, q) = \u0393(p) \u0393(q)"
    ],
    "answer": "A",
    "explanation": "The Beta function is defined by B(p, q) = \u222b\u2080\u00b9 t^{p-1} (1 - t)^{q-1} dt, satisfying the fundamental identity B(p, q) = [\u0393(p) \u0393(q)] / \u0393(p + q)."
  },
  {
    "prompt": "For which values of p does the integral \u222b\u2082^\u221e [ 1 / (x (ln x)\u1d56) ] dx converge?",
    "options": [
      "p \u2265 1",
      "p > 1",
      "p < 1",
      "All real p"
    ],
    "answer": "B",
    "explanation": "Substitute u = ln x, du = dx/x. The integral becomes \u222b_{ln 2}^\u221e (1/u\u1d56) du, which converges if and only if p > 1."
  },
  {
    "prompt": "Evaluate the Gaussian integral \u222b_{-\u221e}^\u221e e^(-x\u00b2) dx:",
    "options": [
      "\u221a\u03c0 / 2",
      "\u03c0",
      "\u221a\u03c0",
      "2\u221a\u03c0"
    ],
    "answer": "C",
    "explanation": "Let I = \u222b_{-\u221e}^\u221e e^(-x\u00b2) dx. Then I\u00b2 = \u222c_{\u211d\u00b2} e^(-(x\u00b2+y\u00b2)) dA = \u222b\u2080\u00b2\u03c0 \u222b\u2080^\u221e e^(-r\u00b2) r dr d\u03b8 = 2\u03c0 [-e^(-r\u00b2)/2]\u2080^\u221e = \u03c0. Thus I = \u221a\u03c0."
  },
  {
    "prompt": "Evaluate \u222b\u2080^\u221e x\u00b3 e^(-x) dx:",
    "options": [
      "1",
      "3",
      "24",
      "6 = 3!"
    ],
    "answer": "D",
    "explanation": "By definition of the Gamma function, \u222b\u2080^\u221e x^(n-1) e^(-x) dx = \u0393(n). Here n - 1 = 3 \u21d2 n = 4, so the integral equals \u0393(4) = 3! = 6."
  }
];


// --- Module C: Complex Analysis & Transform Methods ---

export const CALC_C_COMPLEX_NUMBERS_QUIZ = [
  {
    "prompt": "The polar form of a complex number z = x + i y is:",
    "options": [
      "z = r(cos \u03b8 + i sin \u03b8) = r e^(i \u03b8), where r = \u221a(x\u00b2 + y\u00b2) and tan \u03b8 = y/x",
      "z = r(sin \u03b8 + i cos \u03b8)",
      "z = r(cos \u03b8 - i sin \u03b8)",
      "z = (x\u00b2 + y\u00b2) e^(i \u03b8)"
    ],
    "answer": "A",
    "explanation": "In polar coordinates, x = r cos \u03b8 and y = r sin \u03b8, giving z = r(cos \u03b8 + i sin \u03b8) = r e^(i \u03b8) by Euler's formula."
  },
  {
    "prompt": "Euler's formula states that for any real \u03b8:",
    "options": [
      "e^(i \u03b8) = cos \u03b8 - i sin \u03b8",
      "e^(i \u03b8) = cos \u03b8 + i sin \u03b8",
      "e^(i \u03b8) = sin \u03b8 + i cos \u03b8",
      "e^(i \u03b8) = cos(i \u03b8) + sin(i \u03b8)"
    ],
    "answer": "B",
    "explanation": "Euler's formula is the foundational bridge between complex exponentials and trigonometry: e^(i \u03b8) = cos \u03b8 + i sin \u03b8."
  },
  {
    "prompt": "De Moivre's Theorem states that for any real \u03b8 and integer n:",
    "options": [
      "[cos \u03b8 + i sin \u03b8]\u207f = cos(n \u03b8) - i sin(n \u03b8)",
      "[cos \u03b8 + i sin \u03b8]\u207f = cos\u207f \u03b8 + i sin\u207f \u03b8",
      "[cos \u03b8 + i sin \u03b8]\u207f = cos(n \u03b8) + i sin(n \u03b8)",
      "[cos \u03b8 + i sin \u03b8]\u207f = n cos \u03b8 + i n sin \u03b8"
    ],
    "answer": "C",
    "explanation": "By repeated multiplication or complex exponentiation: (e^(i \u03b8))\u207f = e^(i n \u03b8) = cos(n \u03b8) + i sin(n \u03b8)."
  },
  {
    "prompt": "The n distinct n-th roots of a complex number z = r e^(i \u03b8) are given by w_k =",
    "options": [
      "r^(1/n) [cos(\u03b8/n) + i sin(\u03b8/n)]",
      "r^(1/n) e^(i \u03b8/n)",
      "r\u207f e^(i (\u03b8 + 2k\u03c0)/n)",
      "r^(1/n) e^(i (\u03b8 + 2k\u03c0)/n) for k = 0, 1, 2, ..., n - 1"
    ],
    "answer": "D",
    "explanation": "Roots of unity and general complex numbers are spaced evenly on a circle of radius r^(1/n) by angles (\u03b8 + 2k\u03c0)/n for k = 0, ..., n - 1."
  },
  {
    "prompt": "The three cube roots of unity (solutions of z\u00b3 = 1) are:",
    "options": [
      "1, -1/2 + i \u221a3/2, -1/2 - i \u221a3/2",
      "1, i, -i",
      "1, -1, i",
      "1, 1/2 + i \u221a3/2, 1/2 - i \u221a3/2"
    ],
    "answer": "A",
    "explanation": "e^(i 2k\u03c0/3) for k = 0, 1, 2 gives: k=0 \u21d2 1; k=1 \u21d2 cos(2\u03c0/3)+i sin(2\u03c0/3) = -1/2 + i\u221a3/2; k=2 \u21d2 -1/2 - i\u221a3/2."
  },
  {
    "prompt": "If \u03c9 is a non-real cube root of unity (\u03c9 \u2260 1), which fundamental identity holds?",
    "options": [
      "1 + \u03c9 = \u03c9\u00b2",
      "1 + \u03c9 + \u03c9\u00b2 = 0",
      "\u03c9\u00b2 = -1",
      "1 + \u03c9\u00b2 = 0"
    ],
    "answer": "B",
    "explanation": "z\u00b3 - 1 = (z - 1)(z\u00b2 + z + 1) = 0. Since \u03c9 \u2260 1, it satisfies the cyclotomic quadratic 1 + \u03c9 + \u03c9\u00b2 = 0."
  },
  {
    "prompt": "Evaluate (1 + i)\u2078 using De Moivre's Theorem:",
    "options": [
      "-16",
      "16 i",
      "16",
      "8 i"
    ],
    "answer": "C",
    "explanation": "1 + i = \u221a2 e^(i \u03c0/4). (1 + i)\u2078 = (\u221a2)\u2078 e^(i 8(\u03c0/4)) = 2\u2074 e^(i 2\u03c0) = 16(1) = 16."
  },
  {
    "prompt": "Express cos(3\u03b8) in terms of powers of cos \u03b8 using De Moivre's Theorem:",
    "options": [
      "4 cos\u00b3 \u03b8 + 3 cos \u03b8",
      "3 cos \u03b8 - 4 cos\u00b3 \u03b8",
      "cos\u00b3 \u03b8 - 3 cos \u03b8",
      "4 cos\u00b3 \u03b8 - 3 cos \u03b8"
    ],
    "answer": "D",
    "explanation": "cos(3\u03b8) = Re[(cos \u03b8 + i sin \u03b8)\u00b3] = cos\u00b3 \u03b8 - 3 cos \u03b8 sin\u00b2 \u03b8 = cos\u00b3 \u03b8 - 3 cos \u03b8 (1 - cos\u00b2 \u03b8) = 4 cos\u00b3 \u03b8 - 3 cos \u03b8."
  },
  {
    "prompt": "Express sin(3\u03b8) in terms of powers of sin \u03b8 using De Moivre's Theorem:",
    "options": [
      "3 sin \u03b8 - 4 sin\u00b3 \u03b8",
      "4 sin\u00b3 \u03b8 - 3 sin \u03b8",
      "3 sin \u03b8 + 4 sin\u00b3 \u03b8",
      "sin\u00b3 \u03b8 - 3 sin \u03b8"
    ],
    "answer": "A",
    "explanation": "sin(3\u03b8) = Im[(cos \u03b8 + i sin \u03b8)\u00b3] = 3 cos\u00b2 \u03b8 sin \u03b8 - sin\u00b3 \u03b8 = 3(1 - sin\u00b2 \u03b8) sin \u03b8 - sin\u00b3 \u03b8 = 3 sin \u03b8 - 4 sin\u00b3 \u03b8."
  },
  {
    "prompt": "The sum of all n-th roots of unity (for any integer n \u2265 2) is:",
    "options": [
      "1",
      "0",
      "n",
      "-1"
    ],
    "answer": "B",
    "explanation": "The roots form a geometric progression: \u2211_{k=0}^{n-1} \u03c9^k = (1 - \u03c9\u207f)/(1 - \u03c9) = (1 - 1)/(1 - \u03c9) = 0."
  },
  {
    "prompt": "The product of all n-th roots of unity is:",
    "options": [
      "-1",
      "1",
      "(-1)\u207f\u207a\u00b9",
      "0"
    ],
    "answer": "C",
    "explanation": "\u220f_{k=0}^{n-1} e^(i 2k\u03c0/n) = e^(i (2\u03c0/n) \u2211 k) = e^(i (2\u03c0/n) [n(n-1)/2]) = e^(i \u03c0(n-1)) = (-1)^(n-1) = (-1)^(n+1)."
  },
  {
    "prompt": "The modulus |z\u2081 + z\u2082| satisfies the Triangle Inequality:",
    "options": [
      "|z\u2081 + z\u2082| \u2264 |z\u2081| |z\u2082|",
      "|z\u2081 + z\u2082| \u2265 |z\u2081| + |z\u2082|",
      "|z\u2081 + z\u2082| = |z\u2081| + |z\u2082|",
      "|z\u2081 + z\u2082| \u2264 |z\u2081| + |z\u2082|"
    ],
    "answer": "D",
    "explanation": "By vector geometry in the complex plane, the length of any side of a triangle is bounded by the sum of the other two sides: |z\u2081 + z\u2082| \u2264 |z\u2081| + |z\u2082|."
  },
  {
    "prompt": "The complex conjugate of z = x + i y is z\u0304 = x - i y. The product z \u00b7 z\u0304 equals:",
    "options": [
      "|z|\u00b2 = x\u00b2 + y\u00b2",
      "|z| = \u221a(x\u00b2 + y\u00b2)",
      "x\u00b2 - y\u00b2",
      "2x"
    ],
    "answer": "A",
    "explanation": "z \u00b7 z\u0304 = (x + i y)(x - i y) = x\u00b2 - i\u00b2 y\u00b2 = x\u00b2 + y\u00b2 = |z|\u00b2."
  },
  {
    "prompt": "Euler's identity, often considered the most beautiful formula in mathematics, is:",
    "options": [
      "e^(i \u03c0) = 1",
      "e^(i \u03c0) + 1 = 0",
      "e^(2i \u03c0) = -1",
      "e^(i \u03c0/2) = -1"
    ],
    "answer": "B",
    "explanation": "Setting \u03b8 = \u03c0 in Euler's formula gives e^(i \u03c0) = cos \u03c0 + i sin \u03c0 = -1, which rearranges to e^(i \u03c0) + 1 = 0."
  },
  {
    "prompt": "Evaluate the principal value of i^i:",
    "options": [
      "-1",
      "1",
      "e^(-\u03c0/2) \u2248 0.2079",
      "i"
    ],
    "answer": "C",
    "explanation": "i = e^(i \u03c0/2). Thus i^i = (e^(i \u03c0/2))^i = e^(i\u00b2 \u03c0/2) = e^(-\u03c0/2), a purely real number!"
  },
  {
    "prompt": "Find the polar angle (argument) of z = -1 - i \u221a3 in the principal range (-\u03c0, \u03c0]:",
    "options": [
      "4\u03c0 / 3",
      "2\u03c0 / 3",
      "-\u03c0 / 3",
      "-2\u03c0 / 3"
    ],
    "answer": "D",
    "explanation": "z lies in the third quadrant (x < 0, y < 0). Arg(z) = -\u03c0 + arctan(\u221a3/1) = -\u03c0 + \u03c0/3 = -2\u03c0/3."
  },
  {
    "prompt": "The geometric effect of multiplying a complex number z by e^(i \u03b1) is:",
    "options": [
      "Counterclockwise rotation of z by angle \u03b1 about the origin without changing magnitude",
      "Scaling the magnitude of z by \u03b1",
      "Reflecting z across the real axis",
      "Translating z by vector \u03b1"
    ],
    "answer": "A",
    "explanation": "Since |e^(i \u03b1)| = 1 and arg(z e^(i \u03b1)) = arg(z) + \u03b1, multiplying by e^(i \u03b1) is an isometry representing pure counterclockwise rotation by \u03b1."
  },
  {
    "prompt": "Solve z\u2074 = -16 completely in the complex plane:",
    "options": [
      "2(\u00b11 \u00b1 i)",
      "\u221a2(\u00b11 \u00b1 i)",
      "\u00b12, \u00b12i",
      "4(\u00b11 \u00b1 i)"
    ],
    "answer": "B",
    "explanation": "-16 = 16 e^(i \u03c0). z_k = 2 e^(i (\u03c0 + 2k\u03c0)/4) = 2 e^(i (2k+1)\u03c0/4). For k = 0: 2(cos \u03c0/4 + i sin \u03c0/4) = \u221a2(1 + i). All 4 roots are \u221a2(\u00b11 \u00b1 i)."
  },
  {
    "prompt": "Express cos\u2074 \u03b8 in terms of cosines of multiple angles using complex exponentials:",
    "options": [
      "(1/8) cos(4\u03b8) - (1/2) cos(2\u03b8) + 3/8",
      "(1/4) cos(4\u03b8) + (1/2) cos(2\u03b8) + 1/4",
      "(1/8) cos(4\u03b8) + (1/2) cos(2\u03b8) + 3/8",
      "cos(4\u03b8)/4 + 3/4"
    ],
    "answer": "C",
    "explanation": "cos \u03b8 = (e^(i\u03b8) + e^(-i\u03b8))/2. cos\u2074 \u03b8 = (1/16)(e^(4i\u03b8) + 4 e^(2i\u03b8) + 6 + 4 e^(-2i\u03b8) + e^(-4i\u03b8)) = (1/8) cos(4\u03b8) + (1/2) cos(2\u03b8) + 3/8."
  },
  {
    "prompt": "If z + 1/z = 2 cos \u03b8, then z\u207f + 1/z\u207f equals:",
    "options": [
      "2\u207f cos\u207f \u03b8",
      "2 sin(n \u03b8)",
      "cos(n \u03b8)",
      "2 cos(n \u03b8)"
    ],
    "answer": "D",
    "explanation": "z = cos \u03b8 + i sin \u03b8 = e^(i \u03b8). Then z\u207f = e^(i n \u03b8) and 1/z\u207f = e^(-i n \u03b8). Adding gives e^(i n \u03b8) + e^(-i n \u03b8) = 2 cos(n \u03b8)."
  }
];

export const CALC_C_HYPERBOLIC_FUNCTIONS_QUIZ = [
  {
    "prompt": "The definitions of hyperbolic sine and hyperbolic cosine are:",
    "options": [
      "sinh x = (e\u02e3 - e^(-x))/2, cosh x = (e\u02e3 + e^(-x))/2",
      "sinh x = (e\u02e3 + e^(-x))/2, cosh x = (e\u02e3 - e^(-x))/2",
      "sinh x = e\u02e3 - e^(-x), cosh x = e\u02e3 + e^(-x)",
      "sinh x = (e^(ix) - e^(-ix))/2i, cosh x = (e^(ix) + e^(-ix))/2"
    ],
    "answer": "A",
    "explanation": "By definition, sinh x = (e\u02e3 - e^(-x))/2 (odd function) and cosh x = (e\u02e3 + e^(-x))/2 (even function)."
  },
  {
    "prompt": "The fundamental identity connecting cosh x and sinh x is:",
    "options": [
      "cosh\u00b2 x + sinh\u00b2 x = 1",
      "cosh\u00b2 x - sinh\u00b2 x = 1",
      "sinh\u00b2 x - cosh\u00b2 x = 1",
      "cosh x - sinh x = 1"
    ],
    "answer": "B",
    "explanation": "cosh\u00b2 x - sinh\u00b2 x = ((e\u02e3+e^(-x))\u00b2 - (e\u02e3-e^(-x))\u00b2)/4 = (4)/4 = 1. (This parameterizes the unit hyperbola x\u00b2 - y\u00b2 = 1)."
  },
  {
    "prompt": "The derivatives of sinh x and cosh x are:",
    "options": [
      "d/dx[sinh x] = -cosh x, d/dx[cosh x] = sinh x",
      "d/dx[sinh x] = cosh x, d/dx[cosh x] = -sinh x",
      "d/dx[sinh x] = cosh x, d/dx[cosh x] = sinh x",
      "d/dx[sinh x] = sech\u00b2 x, d/dx[cosh x] = csch\u00b2 x"
    ],
    "answer": "C",
    "explanation": "Both derivatives are positive: d/dx[sinh x] = cosh x, and d/dx[cosh x] = sinh x (unlike trigonometric cosine, no minus sign!)."
  },
  {
    "prompt": "The derivative of tanh x is:",
    "options": [
      "sech x tanh x",
      "-sech\u00b2 x",
      "coth\u00b2 x",
      "sech\u00b2 x = 1 - tanh\u00b2 x"
    ],
    "answer": "D",
    "explanation": "d/dx[sinh x / cosh x] = (cosh\u00b2 x - sinh\u00b2 x) / cosh\u00b2 x = 1 / cosh\u00b2 x = sech\u00b2 x = 1 - tanh\u00b2 x."
  },
  {
    "prompt": "The derivative of sech x is:",
    "options": [
      "-sech x tanh x",
      "sech x tanh x",
      "-csch x coth x",
      "-sech\u00b2 x"
    ],
    "answer": "A",
    "explanation": "d/dx[1/cosh x] = -sinh x / cosh\u00b2 x = -(1/cosh x)(sinh x/cosh x) = -sech x tanh x."
  },
  {
    "prompt": "The logarithmic formula for inverse hyperbolic sine arsinh(x) is:",
    "options": [
      "ln(x + \u221a(x\u00b2 - 1)) for x \u2265 1",
      "ln(x + \u221a(x\u00b2 + 1)) for all real x",
      "(1/2) ln((1 + x)/(1 - x))",
      "ln(x - \u221a(x\u00b2 + 1))"
    ],
    "answer": "B",
    "explanation": "Solving y = sinh x = (e\u02b8 - e^(-y))/2 gives quadratic (e\u02b8)\u00b2 - 2x(e\u02b8) - 1 = 0 \u21d2 e\u02b8 = x + \u221a(x\u00b2 + 1) \u21d2 y = ln(x + \u221a(x\u00b2 + 1))."
  },
  {
    "prompt": "The logarithmic formula for inverse hyperbolic cosine arcosh(x) (for x \u2265 1) is:",
    "options": [
      "(1/2) ln((1 + x)/(1 - x))",
      "ln(x + \u221a(x\u00b2 + 1))",
      "ln(x + \u221a(x\u00b2 - 1))",
      "ln(x - \u221a(x\u00b2 - 1))"
    ],
    "answer": "C",
    "explanation": "Solving y = cosh x gives e\u02b8 = x + \u221a(x\u00b2 - 1) for the principal branch y \u2265 0, so arcosh x = ln(x + \u221a(x\u00b2 - 1))."
  },
  {
    "prompt": "The logarithmic formula for inverse hyperbolic tangent artanh(x) (for |x| < 1) is:",
    "options": [
      "ln(x + \u221a(1 - x\u00b2))",
      "ln((1 + x) / (1 - x))",
      "(1/2) ln((x + 1) / (x - 1))",
      "(1/2) ln((1 + x) / (1 - x))"
    ],
    "answer": "D",
    "explanation": "x = (e\u02b8 - e^(-y))/(e\u02b8 + e^(-y)) = (e^(2y) - 1)/(e^(2y) + 1) \u21d2 e^(2y) = (1 + x)/(1 - x) \u21d2 y = (1/2) ln((1 + x)/(1 - x))."
  },
  {
    "prompt": "Evaluate the standard integral \u222b 1 / \u221a(x\u00b2 + a\u00b2) dx:",
    "options": [
      "arsinh(x/a) + C = ln(x + \u221a(x\u00b2 + a\u00b2)) + C\u2081",
      "arcsin(x/a) + C",
      "(1/a) arctan(x/a) + C",
      "arcosh(x/a) + C"
    ],
    "answer": "A",
    "explanation": "Substituting x = a sinh u gives dx = a cosh u du, so \u222b (a cosh u)/(a cosh u) du = u + C = arsinh(x/a) + C = ln(x + \u221a(x\u00b2 + a\u00b2)) + C\u2081."
  },
  {
    "prompt": "Evaluate the standard integral \u222b 1 / \u221a(x\u00b2 - a\u00b2) dx (for x > a > 0):",
    "options": [
      "arsinh(x/a) + C",
      "arcosh(x/a) + C = ln(x + \u221a(x\u00b2 - a\u00b2)) + C\u2081",
      "arcsec(x/a) + C",
      "(1/a) arcosh(x/a) + C"
    ],
    "answer": "B",
    "explanation": "Substituting x = a cosh u yields u + C = arcosh(x/a) + C = ln(x + \u221a(x\u00b2 - a\u00b2)) + C\u2081."
  },
  {
    "prompt": "Evaluate the standard integral \u222b 1 / (a\u00b2 - x\u00b2) dx (for |x| < a):",
    "options": [
      "arsinh(x/a) + C",
      "(1/a) arctan(x/a) + C",
      "(1/a) artanh(x/a) + C = (1/(2a)) ln|(a + x)/(a - x)| + C",
      "(1/2a) ln|(x - a)/(x + a)| + C"
    ],
    "answer": "C",
    "explanation": "Partial fractions or substitution x = a tanh u gives (1/a) artanh(x/a) + C = (1/(2a)) ln|(a + x)/(a - x)| + C."
  },
  {
    "prompt": "The addition formula for sinh(x + y) is:",
    "options": [
      "cosh x cosh y - sinh x sinh y",
      "sinh x cosh y - cosh x sinh y",
      "sinh x sinh y + cosh x cosh y",
      "sinh x cosh y + cosh x sinh y"
    ],
    "answer": "D",
    "explanation": "Expanding exponentials confirms sinh(x + y) = sinh x cosh y + cosh x sinh y (identical in form to sin(x + y))."
  },
  {
    "prompt": "The addition formula for cosh(x + y) is:",
    "options": [
      "cosh x cosh y + sinh x sinh y",
      "cosh x cosh y - sinh x sinh y",
      "sinh x cosh y + cosh x sinh y",
      "sinh x sinh y - cosh x cosh y"
    ],
    "answer": "A",
    "explanation": "cosh(x + y) = cosh x cosh y + sinh x sinh y (notice the plus sign, contrasting with the minus in cos(x + y))."
  },
  {
    "prompt": "The catenary curve formed by a freely hanging uniform cable under gravity is modeled by:",
    "options": [
      "y = a sinh(x/a)",
      "y = a cosh(x/a)",
      "y = a x\u00b2",
      "y = a e^(x/a)"
    ],
    "answer": "B",
    "explanation": "Balancing horizontal tension and gravitational vertical weight leads to the ODE y'' = (1/a)\u221a(1 + (y')\u00b2), whose solution is the catenary y = a cosh(x/a)."
  },
  {
    "prompt": "Evaluate \u222b cosh\u00b2 x dx:",
    "options": [
      "(1/3) cosh\u00b3 x + C",
      "(1/2) x - (1/4) sinh(2x) + C",
      "(1/2) x + (1/4) sinh(2x) + C",
      "sinh\u00b2 x + C"
    ],
    "answer": "C",
    "explanation": "Use the double-argument identity cosh\u00b2 x = (cosh 2x + 1)/2: \u222b (cosh 2x + 1)/2 dx = (1/4) sinh(2x) + (1/2) x + C."
  },
  {
    "prompt": "The relationship between trigonometric and hyperbolic functions in the complex plane is:",
    "options": [
      "cosh(i x) = cosh x, sinh(i x) = sinh x",
      "cosh(i x) = i cos x, sinh(i x) = sin x",
      "cosh(i x) = -cos x, sinh(i x) = -i sin x",
      "cosh(i x) = cos x, sinh(i x) = i sin x"
    ],
    "answer": "D",
    "explanation": "cosh(ix) = (e^(ix) + e^(-ix))/2 = cos x, and sinh(ix) = (e^(ix) - e^(-ix))/2 = i sin x."
  },
  {
    "prompt": "Find the arc length of the catenary y = a cosh(x/a) from x = 0 to x = b:",
    "options": [
      "a sinh(b/a)",
      "a cosh(b/a)",
      "b cosh(b/a)",
      "a tanh(b/a)"
    ],
    "answer": "A",
    "explanation": "y' = sinh(x/a). 1 + (y')\u00b2 = 1 + sinh\u00b2(x/a) = cosh\u00b2(x/a). L = \u222b\u2080\u1d47 cosh(x/a) dx = [a sinh(x/a)]\u2080\u1d47 = a sinh(b/a)."
  },
  {
    "prompt": "The Maclaurin series expansion of cosh x is:",
    "options": [
      "\u2211_{n=0}^\u221e (-1)\u207f x^(2n) / (2n)!",
      "\u2211_{n=0}^\u221e x^(2n) / (2n)! = 1 + x\u00b2/2! + x\u2074/4! + ...",
      "\u2211_{n=0}^\u221e x^(2n+1) / (2n+1)!",
      "\u2211_{n=0}^\u221e x\u207f / n!"
    ],
    "answer": "B",
    "explanation": "cosh x = (e\u02e3 + e^(-x))/2. All odd powers cancel, leaving all even powers with positive signs: 1 + x\u00b2/2! + x\u2074/4! + ... for all x \u2208 \u211d."
  },
  {
    "prompt": "The Maclaurin series expansion of sinh x is:",
    "options": [
      "\u2211_{n=0}^\u221e x^(2n) / (2n)!",
      "\u2211_{n=0}^\u221e (-1)\u207f x^(2n+1) / (2n+1)!",
      "\u2211_{n=0}^\u221e x^(2n+1) / (2n+1)! = x + x\u00b3/3! + x\u2075/5! + ...",
      "\u2211_{n=1}^\u221e x\u207f / n!"
    ],
    "answer": "C",
    "explanation": "sinh x = (e\u02e3 - e^(-x))/2. All even powers cancel, leaving all odd powers with positive signs: x + x\u00b3/3! + x\u2075/5! + ... for all x \u2208 \u211d."
  },
  {
    "prompt": "Solve the equation 2 cosh x - sinh x = 2 for x:",
    "options": [
      "x = ln 5",
      "x = ln 2",
      "x = 0 only",
      "x = 0 or x = ln 3"
    ],
    "answer": "D",
    "explanation": "Substitute e\u02e3 = u: 2(u + 1/u)/2 - (u - 1/u)/2 = 2 \u21d2 u + 1/u - u/2 + 1/(2u) = 2 \u21d2 u/2 + 3/(2u) = 2 \u21d2 u\u00b2 - 4u + 3 = 0 \u21d2 (u - 1)(u - 3) = 0 \u21d2 u = 1 or u = 3 \u21d2 x = 0 or x = ln 3."
  }
];

export const CALC_C_LAPLACE_TRANSFORMS_QUIZ = [
  {
    "prompt": "The unilateral Laplace transform of a function f(t) for t \u2265 0 is defined as:",
    "options": [
      "\u2112{f(t)} = F(s) = \u222b\u2080^\u221e e^(-st) f(t) dt",
      "\u2112{f(t)} = \u222b_{-\u221e}^\u221e e^(-st) f(t) dt",
      "\u2112{f(t)} = \u222b\u2080^\u221e e^(st) f(t) dt",
      "\u2112{f(t)} = d/ds [f(s)]"
    ],
    "answer": "A",
    "explanation": "The unilateral Laplace transform integrates f(t) weighted by the exponential kernel e^(-st) from t = 0 to \u221e."
  },
  {
    "prompt": "The Laplace transform of f(t) = 1 (for s > 0) is:",
    "options": [
      "1 / s\u00b2",
      "1 / s",
      "s",
      "1 / (s - 1)"
    ],
    "answer": "B",
    "explanation": "\u222b\u2080^\u221e e^(-st)(1) dt = [-e^(-st)/s]\u2080^\u221e = 1/s for s > 0."
  },
  {
    "prompt": "The Laplace transform of f(t) = t\u207f (for non-negative integer n, s > 0) is:",
    "options": [
      "1 / s^(n+1)",
      "n! / s\u207f",
      "n! / s^(n+1)",
      "(n - 1)! / s\u207f"
    ],
    "answer": "C",
    "explanation": "By repeated integration by parts, \u2112{t\u207f} = n! / s^(n+1)."
  },
  {
    "prompt": "The Laplace transform of f(t) = e^(at) (for s > a) is:",
    "options": [
      "1 / (s\u00b2 - a\u00b2)",
      "1 / (s + a)",
      "a / (s - a)",
      "1 / (s - a)"
    ],
    "answer": "D",
    "explanation": "\u222b\u2080^\u221e e^(-st) e^(at) dt = \u222b\u2080^\u221e e^(-(s-a)t) dt = 1/(s - a) for s > a."
  },
  {
    "prompt": "The Laplace transforms of sin(\u03c9 t) and cos(\u03c9 t) are:",
    "options": [
      "\u2112{sin \u03c9t} = \u03c9 / (s\u00b2 + \u03c9\u00b2), \u2112{cos \u03c9t} = s / (s\u00b2 + \u03c9\u00b2)",
      "\u2112{sin \u03c9t} = s / (s\u00b2 + \u03c9\u00b2), \u2112{cos \u03c9t} = \u03c9 / (s\u00b2 + \u03c9\u00b2)",
      "\u2112{sin \u03c9t} = \u03c9 / (s\u00b2 - \u03c9\u00b2), \u2112{cos \u03c9t} = s / (s\u00b2 - \u03c9\u00b2)",
      "\u2112{sin \u03c9t} = 1 / (s\u00b2 + \u03c9\u00b2), \u2112{cos \u03c9t} = s / (s + \u03c9)"
    ],
    "answer": "A",
    "explanation": "Euler's formula gives \u2112{e^(i\u03c9t)} = 1/(s - i\u03c9) = (s + i\u03c9)/(s\u00b2 + \u03c9\u00b2). Separating real and imaginary parts yields s/(s\u00b2 + \u03c9\u00b2) and \u03c9/(s\u00b2 + \u03c9\u00b2)."
  },
  {
    "prompt": "The First Shifting Theorem (Frequency Shift) states that \u2112{e^(at) f(t)} equals:",
    "options": [
      "F(s + a)",
      "F(s - a)",
      "e^(-as) F(s)",
      "F(s) / a"
    ],
    "answer": "B",
    "explanation": "\u222b\u2080^\u221e e^(-st) e^(at) f(t) dt = \u222b\u2080^\u221e e^(-(s-a)t) f(t) dt = F(s - a)."
  },
  {
    "prompt": "Evaluate \u2112{e^(3t) cos(2t)}:",
    "options": [
      "2 / ((s - 3)\u00b2 + 4)",
      "(s + 3) / ((s + 3)\u00b2 + 4)",
      "(s - 3) / ((s - 3)\u00b2 + 4)",
      "(s - 3) / (s\u00b2 + 4)"
    ],
    "answer": "C",
    "explanation": "By the First Shifting Theorem, \u2112{cos 2t} = s/(s\u00b2 + 4) shifted by s \u2192 s - 3 gives (s - 3)/((s - 3)\u00b2 + 4)."
  },
  {
    "prompt": "The Laplace transform of the first derivative f'(t) is:",
    "options": [
      "s\u00b2 F(s) - f(0)",
      "s F(s) + f(0)",
      "F'(s)",
      "s F(s) - f(0)"
    ],
    "answer": "D",
    "explanation": "Integrating by parts: \u222b\u2080^\u221e e^(-st) f'(t) dt = [e^(-st) f(t)]\u2080^\u221e + s \u222b\u2080^\u221e e^(-st) f(t) dt = -f(0) + s F(s) = s F(s) - f(0)."
  },
  {
    "prompt": "The Laplace transform of the second derivative f''(t) is:",
    "options": [
      "s\u00b2 F(s) - s f(0) - f'(0)",
      "s\u00b2 F(s) + s f(0) + f'(0)",
      "s\u00b2 F(s) - f'(0)",
      "s F'(s) - f(0)"
    ],
    "answer": "A",
    "explanation": "Applying the derivative theorem twice yields \u2112{f''} = s \u2112{f'} - f'(0) = s(s F(s) - f(0)) - f'(0) = s\u00b2 F(s) - s f(0) - f'(0)."
  },
  {
    "prompt": "The Second Shifting Theorem (Time Shift) with Heaviside step function u(t - c) states that \u2112{f(t - c) u(t - c)} equals:",
    "options": [
      "e^(cs) F(s)",
      "e^(-cs) F(s)",
      "F(s - c)",
      "e^(-cs) / s"
    ],
    "answer": "B",
    "explanation": "A delay of c in time corresponds to multiplication by e^(-cs) in the frequency s-domain: \u2112{f(t - c) u(t - c)} = e^(-cs) F(s)."
  },
  {
    "prompt": "The Laplace transform of the Heaviside unit step function u(t - c) (c > 0) is:",
    "options": [
      "e^(cs) / s",
      "1 / (s - c)",
      "e^(-cs) / s",
      "1 / s"
    ],
    "answer": "C",
    "explanation": "\u222b_c^\u221e e^(-st)(1) dt = [-e^(-st)/s]_c^\u221e = e^(-cs) / s."
  },
  {
    "prompt": "The Laplace transform of the Dirac delta function \u03b4(t - c) (c \u2265 0) is:",
    "options": [
      "c / s",
      "e^(-cs) / s",
      "1 / s",
      "e^(-cs)"
    ],
    "answer": "D",
    "explanation": "By the sifting property of the Dirac delta distribution, \u222b\u2080^\u221e e^(-st) \u03b4(t - c) dt = e^(-cs)."
  },
  {
    "prompt": "The Laplace transform of t f(t) (frequency differentiation) satisfies:",
    "options": [
      "\u2112{t f(t)} = -F'(s) = -d/ds[F(s)]",
      "\u2112{t f(t)} = F'(s)",
      "\u2112{t f(t)} = F(s) / s",
      "\u2112{t f(t)} = s F'(s)"
    ],
    "answer": "A",
    "explanation": "d/ds [\u222b\u2080^\u221e e^(-st) f(t) dt] = \u222b\u2080^\u221e -t e^(-st) f(t) dt = -\u2112{t f(t)}. Thus \u2112{t f(t)} = -F'(s)."
  },
  {
    "prompt": "Evaluate \u2112{t sin(\u03c9 t)} using frequency differentiation:",
    "options": [
      "(s\u00b2 - \u03c9\u00b2) / (s\u00b2 + \u03c9\u00b2)\u00b2",
      "2\u03c9 s / (s\u00b2 + \u03c9\u00b2)\u00b2",
      "\u03c9 / (s\u00b2 + \u03c9\u00b2)\u00b2",
      "2\u03c9 / (s\u00b2 + \u03c9\u00b2)"
    ],
    "answer": "B",
    "explanation": "\u2112{t sin \u03c9t} = -d/ds [\u03c9/(s\u00b2 + \u03c9\u00b2)] = -[ -\u03c9(2s)/(s\u00b2 + \u03c9\u00b2)\u00b2 ] = 2\u03c9 s / (s\u00b2 + \u03c9\u00b2)\u00b2."
  },
  {
    "prompt": "The Convolution Theorem states that \u2112{(f * g)(t)} = \u2112{\u222b\u2080\u1d57 f(\u03c4) g(t - \u03c4) d\u03c4} equals:",
    "options": [
      "F(s) * G(s)",
      "F(s) + G(s)",
      "F(s) \u00b7 G(s)",
      "F(s) / G(s)"
    ],
    "answer": "C",
    "explanation": "Convolution in the time domain corresponds to simple algebraic multiplication in the Laplace s-domain: \u2112{f * g} = F(s) G(s)."
  },
  {
    "prompt": "Find the inverse Laplace transform \u2112\u207b\u00b9{ 1 / (s\u00b2 - 4) }:",
    "options": [
      "(1/2) sin(2t)",
      "sinh(2t)",
      "(1/2) cosh(2t)",
      "(1/2) sinh(2t)"
    ],
    "answer": "D",
    "explanation": "Since \u2112{sinh at} = a/(s\u00b2 - a\u00b2), here a = 2, so \u2112\u207b\u00b9{1/(s\u00b2 - 4)} = (1/2) sinh(2t)."
  },
  {
    "prompt": "Find the inverse Laplace transform \u2112\u207b\u00b9{ (3s + 5) / (s\u00b2 + 9) }:",
    "options": [
      "3 cos(3t) + (5/3) sin(3t)",
      "3 cos(3t) + 5 sin(3t)",
      "5 cos(3t) + 3 sin(3t)",
      "(8/3) sin(3t)"
    ],
    "answer": "A",
    "explanation": "Split into two terms: 3 [s/(s\u00b2 + 9)] + (5/3) [3/(s\u00b2 + 9)] = 3 cos(3t) + (5/3) sin(3t)."
  },
  {
    "prompt": "Use Laplace transforms to solve the initial value problem y' + 2y = 4, y(0) = 1. What is Y(s)?",
    "options": [
      "Y(s) = 4 / [s(s + 2)]",
      "Y(s) = (s + 4) / [s(s + 2)]",
      "Y(s) = 1 / (s + 2)",
      "Y(s) = (s + 2) / [s(s + 4)]"
    ],
    "answer": "B",
    "explanation": "\u2112{y' + 2y} = s Y(s) - y(0) + 2 Y(s) = (s + 2)Y(s) - 1. Right side is \u2112{4} = 4/s. (s + 2)Y(s) = 1 + 4/s = (s + 4)/s \u21d2 Y(s) = (s + 4)/[s(s + 2)]."
  },
  {
    "prompt": "Inverting Y(s) = (s + 4)/[s(s + 2)] gives the solution y(t) =",
    "options": [
      "y(t) = 4 - 3 e^(-2t)",
      "y(t) = 2 + e^(-2t)",
      "y(t) = 2 - e^(-2t)",
      "y(t) = 1 + e^(-2t)"
    ],
    "answer": "C",
    "explanation": "Partial fractions: (s + 4)/[s(s + 2)] = A/s + B/(s + 2). A = 4/2 = 2; B = (-2 + 4)/(-2) = -1. Thus y(t) = 2 - e^(-2t). (Check: y(0) = 2 - 1 = 1; y' + 2y = 2e^(-2t) + 4 - 2e^(-2t) = 4)."
  },
  {
    "prompt": "The Laplace transform of the integral \u222b\u2080\u1d57 f(\u03c4) d\u03c4 is:",
    "options": [
      "F'(s) / s",
      "s F(s)",
      "F(s) - f(0)/s",
      "F(s) / s"
    ],
    "answer": "D",
    "explanation": "Since differentiation corresponds to multiplication by s, integration from 0 to t corresponds to division by s: \u2112{\u222b\u2080\u1d57 f(\u03c4) d\u03c4} = F(s) / s."
  }
];

export const CALC_C_FOURIER_SERIES_QUIZ = [
  {
    "prompt": "A function f(x) is periodic with period T > 0 if for all x in its domain:",
    "options": [
      "f(x + T) = f(x)",
      "f(x + T) = -f(x)",
      "f(T x) = f(x)",
      "f(x + T) = f(x) + T"
    ],
    "answer": "A",
    "explanation": "By definition, a function is periodic with period T if shifting the independent variable by T leaves the function unchanged: f(x + T) = f(x)."
  },
  {
    "prompt": "The Fourier series representation of a periodic function f(x) of period 2L on [-L, L] is:",
    "options": [
      "f(x) ~ a\u2080 + \u2211_{n=1}^\u221e [a\u2099 cos(n\u03c0 x / L) + b\u2099 sin(n\u03c0 x / L)]",
      "f(x) ~ a\u2080/2 + \u2211_{n=1}^\u221e [a\u2099 cos(n\u03c0 x / L) + b\u2099 sin(n\u03c0 x / L)]",
      "f(x) ~ \u2211_{n=1}^\u221e a\u2099 cos(n\u03c0 x / L)",
      "f(x) ~ a\u2080/2 + \u2211_{n=1}^\u221e a\u2099 b\u2099 cos(n\u03c0 x / L)"
    ],
    "answer": "B",
    "explanation": "The standard Fourier expansion writes f(x) as a constant term a\u2080/2 plus an infinite harmonic sum of cosine and sine modes."
  },
  {
    "prompt": "The Euler-Fourier formula for the constant coefficient a\u2080 on [-L, L] is:",
    "options": [
      "a\u2080 = (2/L) \u222b_{-L}^L f(x) dx",
      "a\u2080 = (1/2L) \u222b_{-L}^L f(x) dx",
      "a\u2080 = (1/L) \u222b_{-L}^L f(x) dx",
      "a\u2080 = \u222b_{-L}^L f(x) dx"
    ],
    "answer": "C",
    "explanation": "With the series leading term written as a\u2080/2, the average value is a\u2080/2 = (1/(2L)) \u222b_{-L}^L f(x) dx \u21d2 a\u2080 = (1/L) \u222b_{-L}^L f(x) dx."
  },
  {
    "prompt": "The Euler-Fourier formulas for the harmonic coefficients a\u2099 and b\u2099 on [-L, L] are:",
    "options": [
      "a\u2099 = \u222b_{-L}^L f(x) cos(n\u03c0 x/L) dx, b\u2099 = \u222b_{-L}^L f(x) sin(n\u03c0 x/L) dx",
      "a\u2099 = (2/L) \u222b_{-L}^L f(x) cos(n\u03c0 x/L) dx, b\u2099 = (2/L) \u222b_{-L}^L f(x) sin(n\u03c0 x/L) dx",
      "a\u2099 = (1/2L) \u222b_{-L}^L f(x) cos(n\u03c0 x/L) dx, b\u2099 = (1/2L) \u222b_{-L}^L f(x) sin(n\u03c0 x/L) dx",
      "a\u2099 = (1/L) \u222b_{-L}^L f(x) cos(n\u03c0 x/L) dx, b\u2099 = (1/L) \u222b_{-L}^L f(x) sin(n\u03c0 x/L) dx"
    ],
    "answer": "D",
    "explanation": "By orthogonality of the trigonometric system on [-L, L], a\u2099 = (1/L) \u222b_{-L}^L f(x) cos(n\u03c0x/L) dx and b\u2099 = (1/L) \u222b_{-L}^L f(x) sin(n\u03c0x/L) dx."
  },
  {
    "prompt": "If f(x) is an even function (f(-x) = f(x)) on [-L, L], its Fourier series:",
    "options": [
      "Contains only cosine terms (all b\u2099 = 0)",
      "Contains only sine terms (all a\u2099 = 0)",
      "Contains both sine and cosine terms",
      "Has a\u2080 = 0 only"
    ],
    "answer": "A",
    "explanation": "For an even function, f(x) sin(n\u03c0x/L) is odd, so its integral over symmetric bounds [-L, L] vanishes: b\u2099 = 0 for all n. Thus it is a pure cosine series."
  },
  {
    "prompt": "If f(x) is an odd function (f(-x) = -f(x)) on [-L, L], its Fourier series:",
    "options": [
      "Contains only cosine terms",
      "Contains only sine terms (all a\u2099 = 0, including a\u2080 = 0)",
      "Has b\u2099 = 0 for all n",
      "Has non-zero a\u2080"
    ],
    "answer": "B",
    "explanation": "For an odd function, f(x) cos(n\u03c0x/L) is odd, so all a\u2099 = 0. The Fourier series is a pure sine series."
  },
  {
    "prompt": "Dirichlet's Theorem on Fourier convergence states that at a jump discontinuity x\u2080, the Fourier series converges to:",
    "options": [
      "f(x\u2080\u207b)",
      "f(x\u2080\u207a)",
      "The midpoint of the jump: [f(x\u2080\u207a) + f(x\u2080\u207b)] / 2",
      "0"
    ],
    "answer": "C",
    "explanation": "At any jump discontinuity satisfying Dirichlet conditions, the Fourier series converges exactly to the average of the left- and right-hand limits: [f(x\u2080\u207a) + f(x\u2080\u207b)]/2."
  },
  {
    "prompt": "The Gibbs phenomenon describes the behavior of Fourier partial sums near a jump discontinuity, characterized by:",
    "options": [
      "Convergence to infinity",
      "A complete damping of oscillations",
      "An overshoot that shrinks to zero as n increases",
      "An overshoot of approximately 9% of the jump height that does not vanish as n \u2192 \u221e"
    ],
    "answer": "D",
    "explanation": "The Gibbs phenomenon is the persistent ~8.95% overshoot of the jump discontinuity present in trigonometric polynomial partial sums as the number of terms n \u2192 \u221e."
  },
  {
    "prompt": "Find the Fourier series of the square wave f(x) = -1 for -\u03c0 < x < 0, and f(x) = 1 for 0 < x < \u03c0:",
    "options": [
      "(4/\u03c0) \u2211_{k=1}^\u221e [sin((2k - 1)x) / (2k - 1)] = (4/\u03c0)[sin x + (sin 3x)/3 + (sin 5x)/5 + ...]",
      "(2/\u03c0) \u2211_{n=1}^\u221e [sin(nx) / n]",
      "(4/\u03c0) \u2211_{k=1}^\u221e [cos((2k - 1)x) / (2k - 1)]",
      "\u2211_{n=1}^\u221e [(-1)\u207f sin(nx) / n]"
    ],
    "answer": "A",
    "explanation": "f(x) is odd, so a\u2099 = 0. b\u2099 = (2/\u03c0) \u222b\u2080^\u03c0 (1) sin(nx) dx = (2/(n\u03c0)) [1 - cos(n\u03c0)]. For even n, b\u2099 = 0; for odd n = 2k-1, b\u2099 = 4/(n\u03c0)."
  },
  {
    "prompt": "Evaluating the square wave Fourier series at x = \u03c0/2 gives the famous Leibniz formula for \u03c0:",
    "options": [
      "1 + 1/4 + 1/9 + 1/16 + ... = \u03c0\u00b2 / 6",
      "1 - 1/3 + 1/5 - 1/7 + ... = \u03c0 / 4",
      "1 - 1/2 + 1/3 - 1/4 + ... = ln 2",
      "1 + 1/3\u00b2 + 1/5\u00b2 + ... = \u03c0\u00b2 / 8"
    ],
    "answer": "B",
    "explanation": "At x = \u03c0/2, f(\u03c0/2) = 1. (4/\u03c0)[sin(\u03c0/2) + (1/3)sin(3\u03c0/2) + (1/5)sin(5\u03c0/2) + ...] = (4/\u03c0)[1 - 1/3 + 1/5 - 1/7 + ...] = 1 \u21d2 1 - 1/3 + 1/5 - 1/7 + ... = \u03c0/4."
  },
  {
    "prompt": "The Fourier series of f(x) = x on (-\u03c0, \u03c0) is:",
    "options": [
      "2 \u2211_{n=1}^\u221e [cos(nx) / n]",
      "\u2211_{n=1}^\u221e [sin(nx) / n]",
      "2 \u2211_{n=1}^\u221e [ (-1)\u207f\u207a\u00b9 sin(nx) / n ] = 2[sin x - (sin 2x)/2 + (sin 3x)/3 - ...]",
      "\u03c0/2 - (4/\u03c0) \u2211 [cos((2k-1)x)/(2k-1)\u00b2]"
    ],
    "answer": "C",
    "explanation": "f(x) = x is odd, so a\u2099 = 0. b\u2099 = (2/\u03c0) \u222b\u2080^\u03c0 x sin(nx) dx = (2/\u03c0) [ -x cos(nx)/n + sin(nx)/n\u00b2 ]\u2080^\u03c0 = (2/\u03c0)[ -\u03c0(-1)\u207f/n ] = 2(-1)\u207f\u207a\u00b9/n."
  },
  {
    "prompt": "The Fourier series of f(x) = x\u00b2 on [-\u03c0, \u03c0] is:",
    "options": [
      "4 \u2211_{n=1}^\u221e [ (-1)\u207f cos(nx) / n\u00b2 ]",
      "\u03c0\u00b2 / 3 - 4 \u2211_{n=1}^\u221e [ cos(nx) / n\u00b2 ]",
      "\u03c0\u00b2 / 6 + 2 \u2211_{n=1}^\u221e [ (-1)\u207f cos(nx) / n ]",
      "\u03c0\u00b2 / 3 + 4 \u2211_{n=1}^\u221e [ (-1)\u207f cos(nx) / n\u00b2 ]"
    ],
    "answer": "D",
    "explanation": "f(x) = x\u00b2 is even, so b\u2099 = 0. a\u2080 = (2/\u03c0) \u222b\u2080^\u03c0 x\u00b2 dx = 2\u03c0\u00b2/3. a\u2099 = (2/\u03c0) \u222b\u2080^\u03c0 x\u00b2 cos(nx) dx = 4(-1)\u207f/n\u00b2. Series is a\u2080/2 + \u2211 a\u2099 cos(nx) = \u03c0\u00b2/3 + 4 \u2211 [(-1)\u207f cos(nx)/n\u00b2]."
  },
  {
    "prompt": "Evaluating the Fourier series of f(x) = x\u00b2 at x = \u03c0 yields Basel's famous problem sum:",
    "options": [
      "\u2211_{n=1}^\u221e (1 / n\u00b2) = 1 + 1/4 + 1/9 + 1/16 + ... = \u03c0\u00b2 / 6",
      "\u2211_{n=1}^\u221e (1 / n\u00b2) = \u03c0\u00b2 / 8",
      "\u2211_{n=1}^\u221e (1 / n\u2074) = \u03c0\u2074 / 90",
      "\u2211_{n=1}^\u221e (1 / n\u00b2) = \u03c0 / 4"
    ],
    "answer": "A",
    "explanation": "At x = \u03c0, f(\u03c0) = \u03c0\u00b2: \u03c0\u00b2 = \u03c0\u00b2/3 + 4 \u2211 (-1)\u207f cos(n\u03c0)/n\u00b2 = \u03c0\u00b2/3 + 4 \u2211 (-1)\u207f(-1)\u207f/n\u00b2 = \u03c0\u00b2/3 + 4 \u2211 (1/n\u00b2). 2\u03c0\u00b2/3 = 4 \u2211 (1/n\u00b2) \u21d2 \u2211 1/n\u00b2 = \u03c0\u00b2/6."
  },
  {
    "prompt": "Parseval's Identity for a Fourier series on [-L, L] relates the average squared function to the coefficients:",
    "options": [
      "(1/L) \u222b_{-L}^L [f(x)]\u00b2 dx = a\u2080\u00b2 + \u2211 (a\u2099\u00b2 + b\u2099\u00b2)",
      "(1/L) \u222b_{-L}^L [f(x)]\u00b2 dx = a\u2080\u00b2/2 + \u2211_{n=1}^\u221e (a\u2099\u00b2 + b\u2099\u00b2)",
      "\u222b_{-L}^L f(x) dx = \u2211 (a\u2099 + b\u2099)",
      "(1/2L) \u222b [f(x)]\u00b2 dx = a\u2080\u00b2/4 + \u2211 (a\u2099\u00b2 + b\u2099\u00b2)"
    ],
    "answer": "B",
    "explanation": "Parseval's identity is the infinite-dimensional Pythagorean theorem (energy conservation): (1/L) \u222b_{-L}^L [f(x)]\u00b2 dx = a\u2080\u00b2/2 + \u2211 (a\u2099\u00b2 + b\u2099\u00b2)."
  },
  {
    "prompt": "Using Parseval's identity on f(x) = x on (-\u03c0, \u03c0) with b\u2099 = 2(-1)\u207f\u207a\u00b9/n allows evaluation of:",
    "options": [
      "\u2211_{n=1}^\u221e (1 / n\u00b3) = 1.202",
      "\u2211_{n=1}^\u221e (1 / n\u2074) = \u03c0\u2074 / 90",
      "\u2211_{n=1}^\u221e (1 / n\u00b2) = \u03c0\u00b2 / 6",
      "\u2211_{n=1}^\u221e (1 / (2n - 1)\u00b2) = \u03c0\u00b2 / 8"
    ],
    "answer": "C",
    "explanation": "(1/\u03c0) \u222b_{-\u03c0}^\u03c0 x\u00b2 dx = 2\u03c0\u00b2/3. By Parseval, this equals \u2211 b\u2099\u00b2 = \u2211 4/n\u00b2 = 4 \u2211 (1/n\u00b2). Thus 4 \u2211 1/n\u00b2 = 2\u03c0\u00b2/3 \u21d2 \u2211 1/n\u00b2 = \u03c0\u00b2/6."
  },
  {
    "prompt": "The half-range Fourier sine expansion of f(x) on [0, L] is obtained by:",
    "options": [
      "Integrating only from 0 to L/2",
      "Taking the even periodic extension of f(x) with period 2L",
      "Setting all terms except a\u2080 to zero",
      "Taking the odd periodic extension of f(x) with period 2L"
    ],
    "answer": "D",
    "explanation": "Extending f(x) as an odd function on [-L, L] eliminates all cosine terms, producing a pure Fourier sine series with b\u2099 = (2/L) \u222b\u2080^L f(x) sin(n\u03c0x/L) dx."
  },
  {
    "prompt": "The half-range Fourier cosine expansion of f(x) on [0, L] has coefficients:",
    "options": [
      "a\u2080 = (2/L) \u222b\u2080^L f(x) dx, a\u2099 = (2/L) \u222b\u2080^L f(x) cos(n\u03c0 x/L) dx, and b\u2099 = 0",
      "a\u2099 = (1/L) \u222b\u2080^L f(x) cos(n\u03c0 x/L) dx, and b\u2099 = 0",
      "a\u2080 = 0, a\u2099 = (2/L) \u222b\u2080^L f(x) cos(n\u03c0 x/L) dx",
      "b\u2099 = (2/L) \u222b\u2080^L f(x) sin(n\u03c0 x/L) dx"
    ],
    "answer": "A",
    "explanation": "Extending f(x) as an even function on [-L, L] eliminates all sine terms, giving a pure cosine series with a\u2099 = (2/L) \u222b\u2080^L f(x) cos(n\u03c0x/L) dx."
  },
  {
    "prompt": "The complex exponential form of the Fourier series of period 2L is:",
    "options": [
      "f(x) ~ \u2211_{n=0}^\u221e c\u2099 e^(i n\u03c0 x / L)",
      "f(x) ~ \u2211_{n=-\u221e}^\u221e c\u2099 e^(i n\u03c0 x / L), where c\u2099 = (1/2L) \u222b_{-L}^L f(x) e^(-i n\u03c0 x / L) dx",
      "f(x) ~ \u2211_{n=-\u221e}^\u221e c\u2099 e^(-i n\u03c0 x / L)",
      "f(x) ~ (1/2L) \u2211 c\u2099 cos(n\u03c0 x / L)"
    ],
    "answer": "B",
    "explanation": "Euler's formula unifies cosines and sines into bilateral complex exponentials c\u2099 e^(in\u03c0x/L) with c\u2099 = (1/(2L)) \u222b_{-L}^L f(x) e^(-in\u03c0x/L) dx."
  },
  {
    "prompt": "The complex Fourier coefficients c\u2099 are related to real coefficients a\u2099 and b\u2099 by:",
    "options": [
      "c\u2099 = (a\u2099 + b\u2099)/2",
      "c\u2099 = a\u2099 + i b\u2099",
      "c\u2080 = a\u2080/2, c\u2099 = (a\u2099 - i b\u2099)/2 for n > 0, and c\u208b\u2099 = (a\u2099 + i b\u2099)/2",
      "c\u2099 = a\u2099 - b\u2099"
    ],
    "answer": "C",
    "explanation": "cos \u03b8 = (e^(i\u03b8)+e^(-i\u03b8))/2 and sin \u03b8 = (e^(i\u03b8)-e^(-i\u03b8))/(2i). Grouping yields c\u2080 = a\u2080/2 and c\u2099 = (a\u2099 - i b\u2099)/2."
  },
  {
    "prompt": "In heat diffusion and wave equations on a rod of length L with fixed zero temperature at ends (u(0,t)=u(L,t)=0), which series is naturally selected?",
    "options": [
      "Taylor series",
      "Fourier cosine series",
      "Full exponential Fourier series",
      "Fourier sine series (satisfies boundary conditions sin(0) = sin(n\u03c0) = 0)"
    ],
    "answer": "D",
    "explanation": "The Dirichlet boundary conditions u(0, t) = u(L, t) = 0 force all basis functions to vanish at x = 0 and x = L, which is identically satisfied by sin(n\u03c0x/L)."
  }
];

