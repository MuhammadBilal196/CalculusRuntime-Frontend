/**
 * Multivariable Calculus — Module A — Topic 1
 * Jacobians & Change of Variables
 *
 * 20-question topic checkpoint.
 * Data shape matches GuideMcqSection: prompt, options[], answer, explanation.
 */

export const MV_JACOBIANS_QUIZ = [
  {
    prompt: "For a transformation x = x(u,v), y = y(u,v), what does the Jacobian determinant primarily measure?",
    options: [
      "The slope of the original curve",
      "The local signed area-scaling factor",
      "The maximum value of the integrand",
      "The number of boundary curves"
    ],
    answer: "B",
    explanation: "The determinant of the derivative matrix gives the local signed area scaling. The absolute value gives the physical area-scaling factor."
  },
  {
    prompt: "If J = â(x,y)/â(u,v) = -7, what factor multiplies du dv in a double-integral change of variables?",
    options: [
      "-7",
      "0",
      "7",
      "1/7"
    ],
    answer: "C",
    explanation: "Area is nonnegative, so the change-of-variables formula uses |J|. Thus |â7| = 7."
  },
  {
    prompt: "For x = 2u and y = 3v, what is â(x,y)/â(u,v)?",
    options: [
      "5",
      "6",
      "1/6",
      "-6"
    ],
    answer: "B",
    explanation: "The Jacobian matrix is [[2,0],[0,3]], whose determinant is 2Â·3 = 6."
  },
  {
    prompt: "Which expression correctly represents the two-dimensional Jacobian?",
    options: [
      "x_u y_u â x_v y_v",
      "x_u y_v â x_v y_u",
      "x_v y_u â x_u y_v",
      "x_u + y_v"
    ],
    answer: "B",
    explanation: "For a 2Ã2 derivative matrix, the determinant is x_u y_v â x_v y_u."
  },
  {
    prompt: "In a change of variables, which items must be transformed?",
    options: [
      "Only the integrand",
      "Only the region",
      "Only the differential",
      "The integrand, region, and area/volume element"
    ],
    answer: "D",
    explanation: "A complete transformation rewrites the region, integrand, and differential element, including the Jacobian factor."
  },
  {
    prompt: "For polar coordinates x = r cos Î¸ and y = r sin Î¸, the Jacobian magnitude is:",
    options: [
      "1",
      "rÂ²",
      "r",
      "sin Î¸"
    ],
    answer: "C",
    explanation: "The determinant is r(cosÂ²Î¸ + sinÂ²Î¸) = r, so dA = r dr dÎ¸."
  },
  {
    prompt: "Why is the absolute value of the Jacobian used in area integrals?",
    options: [
      "Because determinants are always negative",
      "Because area cannot be negative",
      "Because trigonometric functions require it",
      "Because the integrand must be positive"
    ],
    answer: "B",
    explanation: "The determinant records orientation as well as scale. Physical area uses the nonnegative scale |J|."
  },
  {
    prompt: "For u = x + y and v = x â y, which inverse formulas are correct?",
    options: [
      "x = u + v, y = u â v",
      "x = (u+v)/2, y = (uâv)/2",
      "x = (uâv)/2, y = (u+v)/2",
      "x = 2u, y = 2v"
    ],
    answer: "B",
    explanation: "Adding u and v gives 2x, while subtracting v from u gives 2y."
  },
  {
    prompt: "For x = (u+v)/2 and y = (uâv)/2, what is the absolute Jacobian?",
    options: [
      "1/2",
      "1",
      "2",
      "4"
    ],
    answer: "A",
    explanation: "The determinant is (1/2)(â1/2) â (1/2)(1/2) = â1/2, so its magnitude is 1/2."
  },
  {
    prompt: "A nonzero Jacobian at a point is associated with which local property?",
    options: [
      "The integrand is constant",
      "The transformation has nondegenerate first-order behavior",
      "The region must be circular",
      "The integral is automatically zero"
    ],
    answer: "B",
    explanation: "A nonzero determinant means the derivative matrix is invertible, giving locally noncollapsed first-order behavior."
  },
  {
    prompt: "What happens to a small area element under a transformation with |J| = 4?",
    options: [
      "It is locally scaled by 4",
      "It is locally scaled by 1/4",
      "It becomes zero",
      "Its orientation must remain unchanged"
    ],
    answer: "A",
    explanation: "The magnitude of the Jacobian is the local area-scaling factor."
  },
  {
    prompt: "Which transformed region corresponds to the ellipse xÂ²/4 + yÂ²/9 â¤ 1 under x = 2u, y = 3v?",
    options: [
      "uÂ² + vÂ² â¤ 1",
      "4uÂ² + 9vÂ² â¤ 1",
      "u + v â¤ 1",
      "uÂ² â vÂ² â¤ 1"
    ],
    answer: "A",
    explanation: "Substitution gives xÂ²/4 + yÂ²/9 = uÂ² + vÂ², so the ellipse maps to the unit disk."
  },
  {
    prompt: "For cylindrical coordinates, which volume element is correct?",
    options: [
      "dV = dr dÎ¸ dz",
      "dV = r dr dÎ¸ dz",
      "dV = rÂ² dr dÎ¸ dz",
      "dV = sin Î¸ dr dÎ¸ dz"
    ],
    answer: "B",
    explanation: "The cylindrical Jacobian magnitude is r, so dV = r dr dÎ¸ dz."
  },
  {
    prompt: "For spherical coordinates using Ï, Ï, Î¸, the Jacobian magnitude is:",
    options: [
      "Ï sin Ï",
      "ÏÂ²",
      "ÏÂ² sin Ï",
      "ÏÂ³ sin Ï"
    ],
    answer: "C",
    explanation: "The standard spherical volume element is ÏÂ² sin Ï dÏ dÏ dÎ¸."
  },
  {
    prompt: "What is the area of the image of the rectangle 0â¤uâ¤1, 0â¤vâ¤2 under x=u+v, y=uâv?",
    options: [
      "1",
      "2",
      "4",
      "8"
    ],
    answer: "C",
    explanation: "The rectangle has area 2 and |J| = 2, so the image area is 2Â·2 = 4."
  },
  {
    prompt: "If the Jacobian determinant is zero throughout a region, what can happen to the transformation?",
    options: [
      "It necessarily preserves area",
      "It can collapse the region locally",
      "It always doubles area",
      "It becomes polar coordinates"
    ],
    answer: "B",
    explanation: "A zero determinant means the derivative matrix is singular, so local area can collapse and ordinary inverse-Jacobian reasoning may fail."
  },
  {
    prompt: "Which order of operations is most appropriate for a change-of-variables problem?",
    options: [
      "Integrate first, then find the Jacobian",
      "Choose transformation, compute Jacobian, map region, transform integrand, integrate",
      "Find limits only and ignore the Jacobian",
      "Convert only the boundaries"
    ],
    answer: "B",
    explanation: "A reliable workflow keeps the transformation, Jacobian, region, integrand, and differential consistent."
  },
  {
    prompt: "Evaluate â¬_D (xÂ²+yÂ²) dA over the unit disk using polar coordinates. What is the value?",
    options: [
      "Ï/2",
      "Ï",
      "2Ï",
      "4Ï"
    ],
    answer: "A",
    explanation: "The integral becomes â«âÂ²Ïâ«âÂ¹ rÂ²Â·r dr dÎ¸ = 2ÏÂ·(1/4) = Ï/2."
  },
  {
    prompt: "For x = 2u+v and y = uâ3v, what is the area-scaling factor?",
    options: [
      "â7",
      "â5",
      "5",
      "7"
    ],
    answer: "D",
    explanation: "J = (2)(â3) â (1)(1) = â7, so the area-scaling factor is |J| = 7."
  },
  {
    prompt: "What is the main purpose of choosing a good coordinate transformation?",
    options: [
      "To make the mathematics longer",
      "To replace every integral with a derivative",
      "To simplify geometry or algebra while preserving the integral through the Jacobian",
      "To avoid changing the differential element"
    ],
    answer: "C",
    explanation: "A useful transformation simplifies the region, integrand, or both, while the Jacobian preserves the correct area or volume scaling."
  }
];
