export const QUIZ_CH13 = [
  {
    prompt: "What does the derivative $\\mathbf{r}'(t)$ of a position function represent?",
    options: [
      "The velocity vector",
      "The acceleration vector",
      "The speed scalar"
    ],
    answer: "A",
    explanation: "The derivative of position with respect to time gives the velocity vector, which indicates both the direction of motion and the speed."
  },
  {
    prompt: "How is the speed of an object calculated from its position function $\\mathbf{r}(t)$?",
    options: [
      "By taking the magnitude of the velocity vector, $|\\mathbf{r}'(t)|$",
      "By taking the derivative of the acceleration vector",
      "By calculating the dot product $\\mathbf{r}(t) \\cdot \\mathbf{r}'(t)$"
    ],
    answer: "A",
    explanation: "Speed is a scalar quantity representing how fast an object is moving, calculated as the length (magnitude) of the velocity vector."
  },
  {
    prompt: "The unit tangent vector $\\mathbf{T}(t)$ is defined as:",
    options: [
      "$\\mathbf{r}'(t) / |\\mathbf{r}'(t)|$",
      "$\\mathbf{r}''(t) / |\\mathbf{r}''(t)|$",
      "$\\mathbf{r}(t) \\times \\mathbf{r}'(t)$"
    ],
    answer: "A",
    explanation: "The unit tangent vector strips away speed and leaves only pure direction by dividing the velocity vector by its own magnitude[cite: 4]."
  },
  {
    prompt: "If a vector function $\\mathbf{r}(t)$ has a constant length (moves on a sphere), what must be true?",
    options: [
      "The position vector and velocity vector are always orthogonal ($\\mathbf{r}(t) \\cdot \\mathbf{r}'(t) = 0$)",
      "The acceleration is always zero",
      "The speed is always zero"
    ],
    answer: "A",
    explanation: "If $|athbf{r}(t)|$ is constant, differentiating $\\mathbf{r}(t) \\cdot \\mathbf{r}(t) = c^2$ gives $2\\mathbf{r}(t) \\cdot \\mathbf{r}'(t) = 0$."
  },
  {
    prompt: "What does the second derivative of the position function, $\\mathbf{r}''(t)$, represent?",
    options: [
      "The acceleration vector",
      "The curvature of the path",
      "The unit normal vector"
    ],
    answer: "A",
    explanation: "Acceleration is the rate of change of velocity, which is the second derivative of position with respect to time."
  },
  {
    prompt: "If $\\mathbf{r}(t) = \\langle 3t, 4t, 0 \\rangle$, what is the object's speed?",
    options: [
      "$5$",
      "$7$",
      "$\\sqrt{7}$"
    ],
    answer: "A",
    explanation: "Velocity is $\\langle 3, 4, 0 \\rangle$. Speed is $\\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$."
  },
  {
    prompt: "Arc length $s(t)$ from $t=a$ to $t=b$ is calculated by integrating:",
    options: [
      "The speed: $\\int_a^b |\\mathbf{r}'(t)| \\, dt$",
      "The velocity: $\\int_a^b \\mathbf{r}'(t) \\, dt$",
      "The acceleration: $\\int_a^b \\mathbf{r}''(t) \\, dt$"
    ],
    answer: "A",
    explanation: "Arc length is the total distance traveled along the curve, found by integrating the speed (a scalar) over time[cite: 4]."
  },
  {
    prompt: "If an object moves with a constant speed, what is true about its velocity and acceleration vectors?",
    options: [
      "They are always orthogonal ($\\mathbf{r}'(t) \\cdot \\mathbf{r}''(t) = 0$)",
      "They are always parallel",
      "The acceleration vector is always zero"
    ],
    answer: "A",
    explanation: "Just as constant distance implies position is orthogonal to velocity, constant speed implies velocity is orthogonal to acceleration[cite: 4]."
  },
  {
    prompt: "Which of the following is the derivative of the dot product $\\mathbf{u}(t) \\cdot \\mathbf{v}(t)$?",
    options: [
      "$\\mathbf{u}'(t) \\cdot \\mathbf{v}(t) + \\mathbf{u}(t) \\cdot \\mathbf{v}'(t)$",
      "$\\mathbf{u}'(t) \\cdot \\mathbf{v}'(t)$",
      "$(\\mathbf{u}(t) \\cdot \\mathbf{v}(t))'$"
    ],
    answer: "A",
    explanation: "The product rule applies to the dot product of vector functions exactly as it does to standard scalar functions."
  },
  {
    prompt: "When integrating a vector function $\\int \\mathbf{r}(t) \\, dt$, the constant of integration $\\mathbf{C}$ is:",
    options: [
      "A constant vector",
      "A constant scalar",
      "Always zero"
    ],
    answer: "A",
    explanation: "Because you integrate each component separately, the resulting constants of integration $(C_1, C_2, C_3)$ form a constant vector $\\mathbf{C}$."
  },
  {
    prompt: "To find the equation of a tangent line to a space curve at a point, you need:",
    options: [
      "The point on the curve and the velocity vector at that point",
      "The point on the curve and the acceleration vector",
      "The arc length and the unit normal vector"
    ],
    answer: "A",
    explanation: "A line requires a starting point and a direction. For a tangent line, the direction is given by the derivative (velocity) at that point."
  },
  {
    prompt: "If $\\mathbf{r}(t) = \\langle \\cos t, \\sin t, t \\rangle$, what is the velocity vector at $t=0$?",
    options: [
      "$\\langle 0, 1, 1 \\rangle$",
      "$\\langle 1, 0, 1 \\rangle$",
      "$\\langle -1, 1, 0 \\rangle$"
    ],
    answer: "A",
    explanation: "$\\mathbf{r}'(t) = \\langle -\\sin t, \\cos t, 1 \\rangle$. Plugging in $t=0$ yields $\\langle 0, 1, 1 \\rangle$."
  },
  {
    prompt: "A curve is called 'smooth' on an interval if:",
    options: [
      "$\\mathbf{r}'(t)$ is continuous and $\\mathbf{r}'(t) \\neq \\mathbf{0}$",
      "$\\mathbf{r}''(t) = \\mathbf{0}$",
      "The speed is constant"
    ],
    answer: "A",
    explanation: "A smooth curve has no sharp corners or cusps, meaning the velocity vector never abruptly drops to zero or becomes undefined."
  },
  {
    prompt: "What is the result of taking the limit of a vector function $\\lim_{t \\to a} \\mathbf{r}(t)$?",
    options: [
      "A vector containing the limits of each individual component",
      "A scalar representing the length of the vector",
      "The derivative of the vector function"
    ],
    answer: "A",
    explanation: "Limits of vector functions are computed component-wise. You simply take the limit of the x, y, and z functions separately."
  },
  {
    prompt: "Which rule is applied to differentiate a vector function composed with a scalar function, $\\mathbf{r}(f(t))$?",
    options: [
      "The chain rule: $f'(t)\\mathbf{r}'(f(t))$",
      "The product rule",
      "The quotient rule"
    ],
    answer: "A",
    explanation: "The chain rule for vector functions multiplies the scalar derivative of the inner function by the vector derivative of the outer function."
  },
  {
    prompt: "If a curve is parameterized by arc length $s$, meaning $\\mathbf{r}(s)$, what is always true about its tangent vector?",
    options: [
      "It has a constant magnitude of 1 ($|\\mathbf{r}'(s)| = 1$)",
      "It is always orthogonal to the acceleration",
      "It is constant in direction"
    ],
    answer: "A",
    explanation: "Parameterizing by arc length means you are tracing the curve at exactly 1 unit of distance per 1 unit of 'time', so the speed is always 1[cite: 4]."
  },
  {
    prompt: "What is the derivative of the cross product $\\mathbf{u}(t) \\times \\mathbf{v}(t)$?",
    options: [
      "$\\mathbf{u}'(t) \\times \\mathbf{v}(t) + \\mathbf{u}(t) \\times \\mathbf{v}'(t)$",
      "$\\mathbf{v}'(t) \\times \\mathbf{u}(t) + \\mathbf{u}'(t) \\times \\mathbf{v}(t)$",
      "$\\mathbf{u}'(t) \\times \\mathbf{v}'(t)$"
    ],
    answer: "A",
    explanation: "The product rule applies, but because the cross product is not commutative, the exact original order of the vectors must be maintained."
  },
  {
    prompt: "Which of the following functions traces a standard circular helix?",
    options: [
      "$\\mathbf{r}(t) = \\langle \\cos t, \\sin t, t \\rangle$",
      "$\\mathbf{r}(t) = \\langle t, t^2, t^3 \\rangle$",
      "$\\mathbf{r}(t) = \\langle \\cos t, 0, \\sin t \\rangle$"
    ],
    answer: "A",
    explanation: "The $x$ and $y$ components trace a circle, while the $z$ component increases linearly, stretching the circle into a 3D spiral (helix)."
  },
  {
    prompt: "If the velocity of a particle is constant, its path must be:",
    options: [
      "A straight line",
      "A circle",
      "A parabola"
    ],
    answer: "A",
    explanation: "Constant velocity implies constant speed and constant direction. The only path that never changes direction is a straight line."
  },
  {
    prompt: "If $\\mathbf{r}(t) = \\langle 5, -2, 8 \\rangle$ for all $t$, what is the particle's velocity?",
    options: [
      "$\\langle 0, 0, 0 \\rangle$",
      "$\\langle 5, -2, 8 \\rangle$",
      "$\\langle 1, 1, 1 \\rangle$"
    ],
    answer: "A",
    explanation: "The position is a constant vector, meaning the particle is stationary. The derivative of a constant is the zero vector."
  }
];
export const QUIZ_TNB = [
  {
    prompt: "What is the primary purpose of the TNB frame (Frenet-Serret frame)?",
    options: [
      "To provide a moving 3D coordinate system that travels with a particle along a space curve",
      "To calculate the total volume bounded by a parametric surface",
      "To measure the constant speed of an object in a straight line"
    ],
    answer: "A",
    explanation: "The TNB frame defines a set of three mutually orthogonal unit vectors that describe the local orientation of a curve at any given point."
  },
  {
    prompt: "How is the principal unit normal vector $\\mathbf{N}(t)$ calculated?",
    options: [
      "$\\mathbf{T}'(t) / |\\mathbf{T}'(t)|$",
      "$\\mathbf{r}''(t) / |\\mathbf{r}''(t)|$",
      "$\\mathbf{T}(t) \\times \\mathbf{B}(t)$"
    ],
    answer: "A",
    explanation: "The unit normal vector is found by differentiating the unit tangent vector $\\mathbf{T}(t)$ and dividing by its magnitude to ensure its length is 1."
  },
  {
    prompt: "What defines the binormal vector $\\mathbf{B}(t)$?",
    options: [
      "$\\mathbf{T}(t) \\times \\mathbf{N}(t)$",
      "$\\mathbf{N}(t) \\times \\mathbf{T}(t)$",
      "$\\mathbf{r}'(t) \\times \\mathbf{r}''(t)$"
    ],
    answer: "A",
    explanation: "The TNB vectors form a right-handed system, so the binormal vector is the cross product of the tangent and normal vectors in that exact order."
  },
  {
    prompt: "What geometric property does curvature $\\kappa$ measure?",
    options: [
      "How sharply a curve bends or changes direction at a point",
      "How far the curve twists out of a flat 2D plane",
      "The total arc length of the space curve"
    ],
    answer: "A",
    explanation: "Curvature evaluates the rate of change of the unit tangent vector with respect to arc length. High curvature means a sharp, tight turn."
  },
  {
    prompt: "What is the curvature $\\kappa$ of a straight line?",
    options: [
      "$0$",
      "$1$",
      "Infinity"
    ],
    answer: "A",
    explanation: "A straight line never changes direction, so the unit tangent vector is constant. Its derivative is zero, yielding a curvature of 0."
  },
  {
    prompt: "For a circle of radius $R$, what is its curvature $\\kappa$ at any point?",
    options: [
      "$1/R$",
      "$R$",
      "$\\pi R^2$"
    ],
    answer: "A",
    explanation: "Curvature is inversely proportional to the radius. A smaller circle bends more sharply (higher curvature), while a larger circle is flatter."
  },
  {
    prompt: "What does torsion $\\tau$ measure for a space curve?",
    options: [
      "How sharply the curve twists out of its osculating plane",
      "The rate of change of the curve's speed",
      "The radius of the curve's best-fitting circle"
    ],
    answer: "A",
    explanation: "While curvature measures bending in 2D space, torsion measures how much the curve behaves like a 3D spring, twisting out of a flat plane."
  },
  {
    prompt: "If a curve lies entirely within a flat 2D plane, what is its torsion $\\tau$?",
    options: [
      "$0$",
      "$1$",
      "It depends on the curvature"
    ],
    answer: "A",
    explanation: "A planar curve never twists into the third dimension, meaning its binormal vector is constant. Thus, its torsion is exactly zero everywhere."
  },
  {
    prompt: "Which two vectors span the osculating plane?",
    options: [
      "$\\mathbf{T}$ and $\\mathbf{N}$",
      "$\\mathbf{N}$ and $\\mathbf{B}$",
      "$\\mathbf{T}$ and $\\mathbf{B}$"
    ],
    answer: "A",
    explanation: "The osculating (or 'kissing') plane is the plane that most closely fits the curve locally, formed by the direction of motion ($\\mathbf{T}$) and the direction of turning ($\\mathbf{N}$)."
  },
  {
    prompt: "Which two vectors span the normal plane to a curve?",
    options: [
      "$\\mathbf{N}$ and $\\mathbf{B}$",
      "$\\mathbf{T}$ and $\\mathbf{N}$",
      "$\\mathbf{T}$ and $\\mathbf{B}$"
    ],
    answer: "A",
    explanation: "The normal plane is completely perpendicular to the curve's tangent vector, so it is formed by the two normal vectors: $\\mathbf{N}$ and $\\mathbf{B}$."
  },
  {
    prompt: "What is the general 3D cross-product formula for curvature $\\kappa$ parameterized by $t$?",
    options: [
      "$|\\mathbf{r}'(t) \\times \\mathbf{r}''(t)| / |\\mathbf{r}'(t)|^3$",
      "$|\\mathbf{r}'(t) \\cdot \\mathbf{r}''(t)| / |\\mathbf{r}'(t)|^2$",
      "$|\\mathbf{T}'(t) \\times \\mathbf{N}'(t)| / |\\mathbf{B}(t)|$"
    ],
    answer: "A",
    explanation: "This formula allows you to calculate curvature directly from the position function's first and second derivatives without having to find arc length $s$ first."
  },
  {
    prompt: "What is the magnitude (length) of the binormal vector $\\mathbf{B}(t)$?",
    options: [
      "$1$",
      "It is equal to the curvature $\\kappa$",
      "It varies depending on the speed"
    ],
    answer: "A",
    explanation: "Because $\\mathbf{B}$ is the cross product of two orthogonal unit vectors ($\\mathbf{T}$ and $\\mathbf{N}$), its magnitude is strictly $1$."
  },
  {
    prompt: "The acceleration vector $\\mathbf{a}(t)$ of a particle can always be decomposed into which two components?",
    options: [
      "Tangential and Normal components",
      "Normal and Binormal components",
      "Tangential and Binormal components"
    ],
    answer: "A",
    explanation: "Acceleration entirely resides in the osculating plane. It has a tangential component (changing speed) and a normal component (changing direction)."
  },
  {
    prompt: "The tangential component of acceleration, $a_T$, represents:",
    options: [
      "The rate of change of the particle's speed",
      "The centripetal force pulling the particle inward",
      "The rate at which the particle twists out of the plane"
    ],
    answer: "A",
    explanation: "The tangential scalar component of acceleration is simply the derivative of speed with respect to time ($d|v|/dt$)."
  },
  {
    prompt: "The normal component of acceleration, $a_N$, is calculated as:",
    options: [
      "$\\kappa |\\mathbf{v}|^2$",
      "$\\tau |\\mathbf{v}|^2$",
      "$d|\\mathbf{v}|/dt$"
    ],
    answer: "A",
    explanation: "The normal acceleration depends on how fast the object is going (speed squared) and how sharply it is turning (curvature), analogous to centripetal acceleration."
  },
  {
    prompt: "In the Frenet-Serret formulas, the derivative of the binormal vector, $d\\mathbf{B}/ds$, is proportional to:",
    options: [
      "$-\\tau\\mathbf{N}$",
      "$\\kappa\\mathbf{T}$",
      "$\\tau\\mathbf{T}$"
    ],
    answer: "A",
    explanation: "The torsion $\\tau$ dictates how the binormal vector changes. By definition, $d\\mathbf{B}/ds = -\\tau\\mathbf{N}$."
  },
  {
    prompt: "Which of the following is equivalent to the normal vector $\\mathbf{N}$ using cross products?",
    options: [
      "$\\mathbf{B} \\times \\mathbf{T}$",
      "$\\mathbf{T} \\times \\mathbf{B}$",
      "$\\mathbf{r}' \\times \\mathbf{r}''$"
    ],
    answer: "A",
    explanation: "In a right-handed orthogonal system defined by $\\mathbf{T}$, $\\mathbf{N}$, and $\\mathbf{B}$, the cross product cycle dictates that $\\mathbf{B} \\times \\mathbf{T} = \\mathbf{N}$."
  },
  {
    prompt: "The 'osculating circle' (circle of curvature) at a point on a curve shares which properties with the curve?",
    options: [
      "The same tangent line, normal line, and curvature",
      "The same binormal vector and torsion",
      "The same arc length and speed"
    ],
    answer: "A",
    explanation: "The osculating circle is the circle that perfectly 'kisses' the curve, matching its exact position, direction, and tightness of turn at that specific moment."
  },
  {
    prompt: "If a curve has constant zero curvature ($\\kappa = 0$) and zero torsion ($\\tau = 0$), what shape is it?",
    options: [
      "A straight line",
      "A perfect circle",
      "A helical spiral"
    ],
    answer: "A",
    explanation: "Zero curvature means it never bends. A space curve that never bends is a straight line, which automatically has no torsion either."
  },
  {
    prompt: "For a circular helix $\\mathbf{r}(t) = \\langle a\\cos t, a\\sin t, bt \\rangle$, the curvature $\\kappa$ and torsion $\\tau$ are:",
    options: [
      "Both constant",
      "Both equal to zero",
      "Continuously increasing with $t$"
    ],
    answer: "A",
    explanation: "A circular helix twists and turns at a perfectly steady rate, meaning its curvature and torsion are constant non-zero values everywhere along the path."
  }
];
export const QUIZ_CH16_1 = [
  {
    prompt: "What does the line integral of a scalar function $f(x,y,z)$ geometrically represent if $f \\ge 0$?",
    options: [
      "The area of a vertical 'curtain' or 'fence' built along the curve",
      "The volume of a solid formed by the curve",
      "The work done by a force field"
    ],
    answer: "A",
    explanation: "Integrating a scalar function along a curve computes the 2D area of the curved surface extending from the path up to the graph of the function."
  },
  {
    prompt: "Which of the following is the correct formula to evaluate the scalar line integral $\\int_C f \\, ds$?",
    options: [
      "$\\int_a^b f(\\mathbf{r}(t)) |\\mathbf{r}'(t)| \\, dt$",
      "$\\int_a^b f(\\mathbf{r}(t)) \\cdot \\mathbf{r}'(t) \\, dt$",
      "$\\int_a^b f(\\mathbf{r}(t)) \\times \\mathbf{r}'(t) \\, dt$"
    ],
    answer: "A",
    explanation: "The differential arc length $ds$ translates to the speed $|\\mathbf{r}'(t)|$ multiplied by the time differential $dt$."
  },
  {
    prompt: "How is a vector field mathematically defined?",
    options: [
      "A function that assigns a vector to every point in space",
      "A single vector that points in the same direction everywhere",
      "A scalar value assigned to every point on a curve"
    ],
    answer: "A",
    explanation: "A vector field, like a wind map or gravity map, gives a magnitude and direction (a vector) at every physical coordinate $(x,y,z)$."
  },
  {
    prompt: "Which integral correctly calculates the work done by a vector field $\\mathbf{F}$ along a curve $C$?",
    options: [
      "$\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$",
      "$\\int_C \\mathbf{F} \\times d\\mathbf{r}$",
      "$\\int_C |\\mathbf{F}| \\, ds$"
    ],
    answer: "A",
    explanation: "Work is the line integral of the dot product of the force field and the differential displacement vector $d\\mathbf{r}$."
  },
  {
    prompt: "When computing work, what does the vector $d\\mathbf{r}$ mathematically represent?",
    options: [
      "$\\mathbf{T} \\, ds$ (the unit tangent vector times the arc length differential)",
      "$\\mathbf{N} \\, ds$ (the normal vector times arc length)",
      "The total length of the entire curve"
    ],
    answer: "A",
    explanation: "$d\\mathbf{r}$ is the differential displacement vector, which always points exactly in the instantaneous tangential direction of motion along the path."
  },
  {
    prompt: "If a force field $\\mathbf{F}$ everywhere points in the exact opposite direction of motion along a path, the total work done is:",
    options: [
      "Negative",
      "Zero",
      "Positive"
    ],
    answer: "A",
    explanation: "The dot product of vectors pointing in opposite directions is negative, meaning the field is fighting the motion and doing negative work."
  },
  {
    prompt: "Under what specific condition will a force field do exactly zero work on a moving object?",
    options: [
      "When the force vector is everywhere perpendicular (orthogonal) to the direction of motion",
      "When the object travels in a perfectly straight line",
      "When the force field has a constant, non-zero magnitude"
    ],
    answer: "A",
    explanation: "If the force is orthogonal to the tangent velocity vector, their dot product is zero at every point, resulting in strictly zero work."
  },
  {
    prompt: "What does 'circulation' measure in the context of vector fields?",
    options: [
      "The line integral of a vector field along a closed loop",
      "The total amount of fluid passing through a planar surface",
      "The total speed of an object along a straight path"
    ],
    answer: "A",
    explanation: "Circulation is specifically the work line integral $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r}$ evaluated around a continuous path that starts and ends at the exact same point."
  },
  {
    prompt: "What does the special integral symbol $\\oint$ indicate?",
    options: [
      "The line integral is being evaluated around a closed boundary or loop",
      "The integral is strictly independent of path",
      "The integral computes a 2D surface area instead of 1D length"
    ],
    answer: "A",
    explanation: "The circle on the integral sign conventionally signifies that the path $C$ is a closed curve, forming a complete loop back to its origin."
  },
  {
    prompt: "What does flux measure across a 2D curve?",
    options: [
      "How much of the vector field flows perpendicularly through (across) the curve",
      "How much of the vector field pushes tangentially along the curve",
      "The total physical length of the boundary curve"
    ],
    answer: "A",
    explanation: "While circulation measures flow along the curve (tangential), flux measures flow crossing through the curve (normal/perpendicular direction)."
  },
  {
    prompt: "Which formula computes the 2D flux of a vector field $\\mathbf{F} = \\langle M, N \\rangle$ outward across a curve $C$?",
    options: [
      "$\\oint_C M\\, dy - N\\, dx$",
      "$\\oint_C M\\, dx + N\\, dy$",
      "$\\oint_C M\\, dx - N\\, dy$"
    ],
    answer: "A",
    explanation: "Flux utilizes the outward unit normal vector, which in 2D parametric form yields the differential expression $M\\, dy - N\\, dx$."
  },
  {
    prompt: "The expanded differential form of the work integral $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ for $\\mathbf{F} = \\langle M, N \\rangle$ is:",
    options: [
      "$\\int_C M\\, dx + N\\, dy$",
      "$\\int_C M\\, dy - N\\, dx$",
      "$\\int_C M\\, dx - N\\, dy$"
    ],
    answer: "A",
    explanation: "Since $d\\mathbf{r} = \\langle dx, dy \\rangle$, the dot product $\\langle M, N \\rangle \\cdot \\langle dx, dy \\rangle$ directly evaluates to $M\\,dx + N\\,dy$."
  },
  {
    prompt: "If you reverse the direction you travel along a curve $C$ (denoted as $-C$), what happens to the vector line integral $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$?",
    options: [
      "It flips its sign (is multiplied by $-1$)",
      "It remains exactly the same",
      "It mathematically becomes zero"
    ],
    answer: "A",
    explanation: "Reversing direction flips the differential tangent vector $d\\mathbf{r}$, which negates the dot product at every point, flipping the sign of the total work."
  },
  {
    prompt: "If you reverse the direction you travel along a curve $C$, what happens to the scalar line integral $\\int_C f(x,y) \\, ds$?",
    options: [
      "It remains exactly the same",
      "It flips its sign (is multiplied by $-1$)",
      "It evaluates to zero"
    ],
    answer: "A",
    explanation: "Scalar line integrals depend strictly on differential arc length $ds$, which is always positive regardless of the direction you traverse the physical curve."
  },
  {
    prompt: "To evaluate a line integral along a curve composed of several distinct smooth pieces (a piecewise smooth curve), you should:",
    options: [
      "Evaluate the integral on each smooth piece separately and add the discrete results",
      "Find a single complex function to approximate the whole curve",
      "Take the cross product of the endpoints"
    ],
    answer: "A",
    explanation: "Line integrals hold the additive property over paths: $\\int_{C_1 + C_2} = \\int_{C_1} + \\int_{C_2}$."
  },
  {
    prompt: "What does evaluating the integral $\\int_C d\\mathbf{r}$ (without any vector field attached) geometrically yield?",
    options: [
      "A net displacement vector pointing from the start of the curve to the end of the curve",
      "The total scalar arc length of the curve",
      "The area bounded by the curve in the 2D plane"
    ],
    answer: "A",
    explanation: "Integrating the displacement vector $d\\mathbf{r}$ purely yields $\\mathbf{r}(b) - \\mathbf{r}(a)$, evaluating the net change in position regardless of how much the path twisted."
  },
  {
    prompt: "In a radial vector field (like gravity pointing toward a planet), what is the total work done if an object moves in a perfect circle around the center?",
    options: [
      "Zero",
      "A positive value",
      "A negative value"
    ],
    answer: "A",
    explanation: "In a circular orbit, the displacement is purely tangential while the gravitational field is purely radial (normal). They are orthogonal everywhere, meaning work is zero."
  },
  {
    prompt: "How does the parameterization choice (e.g., fast vs slow variable) of a curve affect the final value of a line integral?",
    options: [
      "It does not affect the value, as long as the physical curve is traversed in the identical direction",
      "Different speed parameterizations will yield completely different integral values",
      "Faster parameterizations increase the integral's value proportionally"
    ],
    answer: "A",
    explanation: "Line integrals are invariant under reparameterization. Whether you travel the path fast or slow, the total physical work or geometric area accumulated is identical."
  },
  {
    prompt: "For a 2D velocity vector field of a moving fluid, calculating the flux across a closed boundary tells you:",
    options: [
      "The net rate at which fluid is leaving or entering the enclosed region",
      "The average speed of the fluid tangentially along the boundary",
      "The total frictional work done by the fluid on an object"
    ],
    answer: "A",
    explanation: "Flux measures flow *through* the boundary. Over a closed loop, positive flux signifies a net outflow (divergence) from the region, while negative signifies inflow."
  },
  {
    prompt: "In the context of the explicit flux formula $\\int_C \\mathbf{F} \\cdot \\mathbf{n} \\, ds$, what does $\\mathbf{n}$ represent?",
    options: [
      "The outward-pointing unit normal vector to the curve",
      "The principal unit normal vector pointing toward the center of curvature",
      "The unit tangent vector"
    ],
    answer: "A",
    explanation: "For 2D flux across a closed curve, $\\mathbf{n}$ is conventionally chosen as the unit normal vector pointing directly outward and away from the enclosed interior region."
  }
];
export const QUIZ_CH16_3 = [
  {
    prompt: "What does it mean for a line integral $\\int_C \\mathbf{F} \\cdot d\\mathbf{r}$ to be 'path-independent'?",
    options: [
      "Its value depends only on the starting and ending points, regardless of the route taken",
      "Its value is always zero regardless of the endpoints",
      "Its value depends only on the total distance traveled, not the direction"
    ],
    answer: "A",
    explanation: "Path independence means the specific geometric curve $C$ doesn't matter; any path connecting point A to point B will yield the exact same integral value."
  },
  {
    prompt: "A vector field $\\mathbf{F}$ is called 'conservative' if:",
    options: [
      "It is the gradient of some scalar function ($\\mathbf{F} = \\nabla f$)",
      "It does constant work along any path",
      "Its magnitude is conserved throughout space"
    ],
    answer: "A",
    explanation: "A conservative vector field is a gradient field. Every vector in the field points 'uphill' along some invisible scalar landscape $f$."
  },
  {
    prompt: "In the context of a conservative field $\\mathbf{F} = \\nabla f$, what is the scalar function $f$ called?",
    options: [
      "The potential function",
      "The work function",
      "The circulation scalar"
    ],
    answer: "A",
    explanation: "The function $f$ acts as a 'potential' landscape. In physics, this directly relates to potential energy (e.g., gravitational potential)."
  },
  {
    prompt: "According to the Fundamental Theorem for Line Integrals, how do you evaluate $\\int_C \\nabla f \\cdot d\\mathbf{r}$ from point A to point B?",
    options: [
      "$f(B) - f(A)$",
      "$\\nabla f(B) - \\nabla f(A)$",
      "$f(A) - f(B)$"
    ],
    answer: "A",
    explanation: "This theorem is the 3D equivalent of the Fundamental Theorem of Calculus. You simply evaluate the potential function at the endpoints and subtract."
  },
  {
    prompt: "How much total work does a conservative field do on a particle that travels around a closed loop and returns to its starting point?",
    options: [
      "Exactly $0$",
      "It depends on the area of the loop",
      "It equals the maximum value of the potential function"
    ],
    answer: "A",
    explanation: "Since the start and end points are the same ($A = B$), the Fundamental Theorem states the work is $f(A) - f(A) = 0$."
  },
  {
    prompt: "What is the 2D cross-partial test used to check if a field $\\mathbf{F} = \\langle M, N \\rangle$ is conservative?",
    options: [
      "$\\partial M/\\partial y = \\partial N/\\partial x$",
      "$\\partial M/\\partial x = \\partial N/\\partial y$",
      "$\\partial M/\\partial x + \\partial N/\\partial y = 0$"
    ],
    answer: "A",
    explanation: "Because $M = f_x$ and $N = f_y$, setting their mixed second derivatives equal ($f_{xy} = f_{yx}$) yields $M_y = N_x$."
  },
  {
    prompt: "If a vector field is conservative, what must its 2D curl ($\\partial N/\\partial x - \\partial M/\\partial y$) be?",
    options: [
      "Constant zero everywhere",
      "A positive constant",
      "Equal to the area of the region"
    ],
    answer: "A",
    explanation: "Because $M_y = N_x$ in a conservative field, their difference is zero. The field has no microscopic rotation or 'spin'."
  },
  {
    prompt: "Which of the following is a classic real-world example of a conservative vector field?",
    options: [
      "Gravitational field",
      "Friction on a rough surface",
      "Magnetic field around a current-carrying wire"
    ],
    answer: "A",
    explanation: "Gravity is conservative; the work done only depends on the change in altitude (endpoints), not how you climbed the mountain."
  },
  {
    prompt: "Why is the force of kinetic friction NOT a conservative field?",
    options: [
      "The work done by friction depends heavily on the length of the path taken",
      "Friction does not have a defined direction",
      "Friction always does positive work"
    ],
    answer: "A",
    explanation: "If you take a longer, winding path, friction does more negative work against you. Because it is path-dependent, it cannot be conservative."
  },
  {
    prompt: "If $\\mathbf{F} = \\langle y, x \\rangle$, is this field conservative?",
    options: [
      "Yes, because $M_y = 1$ and $N_x = 1$",
      "No, because the components are swapped",
      "Yes, because it is a linear field"
    ],
    answer: "A",
    explanation: "Testing the cross-partials: the derivative of $y$ with respect to $y$ is $1$, and the derivative of $x$ with respect to $x$ is $1$. They are equal."
  },
  {
    prompt: "If $\\mathbf{F} = \\langle -y, x \\rangle$, is this field conservative?",
    options: [
      "No, because $M_y = -1$ while $N_x = 1$",
      "Yes, because the derivatives evaluate to constants",
      "No, because it contains a negative sign"
    ],
    answer: "A",
    explanation: "The cross-partials are not equal ($-1 \\neq 1$). This specific field represents pure rotation, which inherently has non-zero curl."
  },
  {
    prompt: "When finding the potential function $f(x,y)$ by integrating $M(x,y)$ with respect to $x$, the constant of integration is written as:",
    options: [
      "A function of $y$, such as $g(y)$",
      "A pure numerical constant $C$",
      "A function of $x$, such as $h(x)$"
    ],
    answer: "A",
    explanation: "Because it was a partial derivative with respect to $x$, any function entirely dependent on $y$ would have vanished, so we must recover it as $g(y)$."
  },
  {
    prompt: "Which of the following statements is NOT equivalent to the others for a defined field on an open, simply connected region?",
    options: [
      "The field always does positive work",
      "The field is conservative ($\\mathbf{F} = \\nabla f$)",
      "$\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = 0$ for every closed loop"
    ],
    answer: "A",
    explanation: "Whether a field does positive or negative work depends on the path direction relative to the field. The other options are strict mathematical equivalents of conservativity."
  },
  {
    prompt: "If $f(x,y) = x^2y^3$, what is its corresponding gradient vector field $\\nabla f$?",
    options: [
      "$\\langle 2xy^3, 3x^2y^2 \\rangle$",
      "$\\langle 3x^2y^2, 2xy^3 \\rangle$",
      "$\\langle 2x, 3y^2 \\rangle$"
    ],
    answer: "A",
    explanation: "Take the partial derivative with respect to $x$ for the first component ($2xy^3$), and with respect to $y$ for the second component ($3x^2y^2$)."
  },
  {
    prompt: "If you know a field is conservative, what is the fastest way to evaluate a line integral between point A and point B?",
    options: [
      "Find the potential function $f$ and calculate $f(B) - f(A)$",
      "Parameterize the straight line connecting A and B and integrate",
      "Use Green's Theorem on the boundary"
    ],
    answer: "A",
    explanation: "The Fundamental Theorem allows you to skip parameterizing the curve entirely. You only need the algebraic potential function and the two endpoints."
  },
  {
    prompt: "If two different curves, $C_1$ and $C_2$, both start at point $P$ and end at point $Q$ in a conservative field $\\mathbf{F}$, what must be true?",
    options: [
      "$\\int_{C_1} \\mathbf{F} \\cdot d\\mathbf{r} = \\int_{C_2} \\mathbf{F} \\cdot d\\mathbf{r}$",
      "$\\int_{C_1} \\mathbf{F} \\cdot d\\mathbf{r} = -\\int_{C_2} \\mathbf{F} \\cdot d\\mathbf{r}$",
      "The sum of their integrals is zero"
    ],
    answer: "A",
    explanation: "This is the definition of path independence. Any path connecting the same two points will accumulate the exact same total line integral value."
  },
  {
    prompt: "A region in 2D space is considered 'simply connected' if:",
    options: [
      "It contains no holes; any closed loop can be shrunk to a single point",
      "It consists of a single unbroken piece, even if it has holes",
      "It is completely bounded by a single circle"
    ],
    answer: "A",
    explanation: "The cross-partial test perfectly guarantees a field is conservative only if the domain is simply connected—meaning there are no 'holes' where the field is undefined."
  },
  {
    prompt: "If $\\mathbf{F}$ is conservative, the line integral along a complex, twisting figure-eight loop that ends where it started is:",
    options: [
      "$0$",
      "Dependent on the number of intersections in the loop",
      "Impossible to determine without parameterization"
    ],
    answer: "A",
    explanation: "A closed loop is a closed loop. No matter how many times it crosses itself, if the start and end points are identical, the net work is $0$."
  },
  {
    prompt: "In a physical system governed by a conservative force field (like gravity), the sum of kinetic and potential energy is:",
    options: [
      "Conserved (constant) throughout the motion",
      "Continuously decreasing due to the field",
      "Always equal to zero"
    ],
    answer: "A",
    explanation: "This is the physical origin of the term 'conservative.' Because the field does zero net work on closed loops, mechanical energy is perfectly conserved."
  },
  {
    prompt: "If the potential function is $f(x,y,z) = xyz$, what is the work done by $\\mathbf{F} = \\nabla f$ in moving an object from $(0,0,0)$ to $(1,2,3)$?",
    options: [
      "$6$",
      "$0$",
      "$5$"
    ],
    answer: "A",
    explanation: "Evaluate $f$ at the endpoint: $f(1,2,3) = (1)(2)(3) = 6$. Evaluate at the start: $f(0,0,0) = 0$. The difference $f(B) - f(A) = 6 - 0 = 6$."
  }
];
export const QUIZ_CH16_4 = [
  {
    prompt: "Green's Theorem establishes a fundamental relationship between which two types of integrals?",
    options: [
      "A line integral around a boundary and a double integral over the enclosed 2D region",
      "A surface integral and a triple volume integral",
      "A definite integral and an indefinite integral"
    ],
    answer: "A",
    explanation: "Green's Theorem allows you to swap a potentially difficult 1D boundary line integral for a 2D area double integral (or vice versa)."
  },
  {
    prompt: "What is the mandatory orientation for traversing the boundary curve $C$ when applying standard Green's Theorem?",
    options: [
      "Counterclockwise (positive orientation)",
      "Clockwise (negative orientation)",
      "Orthogonal to the radius"
    ],
    answer: "A",
    explanation: "Positive orientation means the enclosed region $R$ must always remain on your left as you walk along the boundary path."
  },
  {
    prompt: "What is the integrand of the double integral in the circulation form of Green's Theorem?",
    options: [
      "$\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}$",
      "$\\frac{\\partial M}{\\partial x} + \\frac{\\partial N}{\\partial y}$",
      "$\\frac{\\partial M}{\\partial y} - \\frac{\\partial N}{\\partial x}$"
    ],
    answer: "A",
    explanation: "This expression represents the 2D curl of the field. Green's Theorem sums up this microscopic 'spin' across the entire area."
  },
  {
    prompt: "What happens if you apply Green's Theorem but accidentally traverse the boundary curve clockwise instead of counterclockwise?",
    options: [
      "Your final answer will have the opposite sign (multiplied by $-1$)",
      "The theorem completely fails and yields zero",
      "The answer remains the exact same"
    ],
    answer: "A",
    explanation: "Reversing the direction of a line integral negates its value. To fix a clockwise path using Green's Theorem, you must slap a negative sign in front of the double integral."
  },
  {
    prompt: "The flux-divergence form of Green's Theorem evaluates the double integral of which quantity?",
    options: [
      "$\\frac{\\partial M}{\\partial x} + \\frac{\\partial N}{\\partial y}$",
      "$\\frac{\\partial N}{\\partial x} - \\frac{\\partial M}{\\partial y}$",
      "$M\\, dy - N\\, dx$"
    ],
    answer: "A",
    explanation: "This expression is the 2D divergence of the vector field, which measures the local 'expansion' or 'compression' of the field at a point."
  },
  {
    prompt: "If the 2D curl ($\\partial N/\\partial x - \\partial M/\\partial y$) evaluates to exactly $0$ everywhere inside a simply connected region, what is the line integral around the boundary?",
    options: [
      "$0$",
      "Equal to the area of the region",
      "Undefined"
    ],
    answer: "A",
    explanation: "If the curl is zero everywhere, the double integral of $0$ is $0$. This confirms the field is conservative, meaning closed-loop work is always zero."
  },
  {
    prompt: "Which of the following is a valid formula to calculate the Area of a region using Green's Theorem?",
    options: [
      "$\\frac{1}{2} \\oint_C (x\\, dy - y\\, dx)$",
      "$\\oint_C (x\\, dx + y\\, dy)$",
      "$\\oint_C (x^2\\, dy - y^2\\, dx)$"
    ],
    answer: "A",
    explanation: "By setting $M = -y$ and $N = x$, the curl $\\partial N/\\partial x - \\partial M/\\partial y$ becomes $1 - (-1) = 2$. Dividing by $2$ leaves a double integral of $1$, which yields the area."
  },
  {
    prompt: "If you evaluate $\\oint_C x\\, dy$ using Green's Theorem, what does the result represent?",
    options: [
      "The exact area of the enclosed region $R$",
      "The perimeter of the boundary curve $C$",
      "Zero"
    ],
    answer: "A",
    explanation: "Here $M = 0$ and $N = x$. The curl is $\\partial(x)/\\partial x - \\partial(0)/\\partial y = 1 - 0 = 1$. The double integral of $1$ is just the area."
  },
  {
    prompt: "If evaluating $\\oint_C (x^2 - y)\\, dx + (x + y^2)\\, dy$, what is the value of the 2D curl?",
    options: [
      "$2$",
      "$0$",
      "$2x - 2y$"
    ],
    answer: "A",
    explanation: "Here $M = x^2 - y$ and $N = x + y^2$. $\\partial N/\\partial x = 1$ and $\\partial M/\\partial y = -1$. The curl is $1 - (-1) = 2$."
  },
  {
    prompt: "If the curl of a field is a constant value of $5$, and the boundary curve encloses a circle of area $10$, what is the circulation around the boundary?",
    options: [
      "$50$",
      "$2$",
      "$0$"
    ],
    answer: "A",
    explanation: "Green's theorem says $\\oint_C = \\iint_R 5\\, dA$. You pull the constant out: $5 \\times \\iint_R 1\\, dA$. So, $5 \\times \\text{Area} = 5 \\times 10 = 50$."
  },
  {
    prompt: "Green's Theorem requires the boundary curve $C$ to be 'simple'. What does this mean?",
    options: [
      "The curve does not cross or intersect itself",
      "The curve can be parameterized by polynomials",
      "The curve contains no sharp corners"
    ],
    answer: "A",
    explanation: "A simple curve doesn't loop over itself (like a figure-eight). If it crosses itself, the region must be split into multiple simpler pieces to apply the theorem properly."
  },
  {
    prompt: "Green's Theorem requires the boundary curve $C$ to be 'closed'. What does this mean?",
    options: [
      "The curve's starting point is exactly the same as its ending point",
      "The curve encloses a solid 3D volume",
      "The curve has a constant radius"
    ],
    answer: "A",
    explanation: "A closed curve forms a complete boundary. You cannot use Green's Theorem directly on a line segment or an open semicircle."
  },
  {
    prompt: "Can Green's Theorem be used if the region $R$ has a 'hole' in it (a multiply connected region)?",
    options: [
      "Yes, but you must subtract the line integral of the inner boundary oriented clockwise",
      "No, Green's Theorem strictly fails on regions with holes",
      "Yes, and the hole has no mathematical effect on the boundary integral"
    ],
    answer: "A",
    explanation: "For a region with a hole, the 'boundary' consists of the outer edge (counterclockwise) and the inner edge (clockwise, keeping the region on your left)."
  },
  {
    prompt: "Green's Theorem is actually a special, flattened 2D case of which broader 3D theorem?",
    options: [
      "Stokes' Theorem",
      "The Divergence Theorem",
      "The Fundamental Theorem of Calculus"
    ],
    answer: "A",
    explanation: "Stokes' Theorem relates a boundary line integral to a surface integral in 3D. If that surface is perfectly flat on the xy-plane, it simplifies perfectly into Green's Theorem."
  },
  {
    prompt: "If $\\mathbf{F} = \\langle 5, -3 \\rangle$ is a constant vector field, what is the circulation around any closed loop?",
    options: [
      "$0$",
      "$15$",
      "It depends on the loop's perimeter"
    ],
    answer: "A",
    explanation: "The partial derivatives of constants are zero. Therefore, the curl is $0 - 0 = 0$. The double integral of zero is zero."
  },
  {
    prompt: "In the context of fluid dynamics, what does the double integral of the 2D divergence $(\\partial M/\\partial x + \\partial N/\\partial y)$ represent physically?",
    options: [
      "The net rate at which fluid is expanding out of or compressing into the entire region",
      "The net rotation (vorticity) of the fluid inside the region",
      "The total mass of the fluid in the region"
    ],
    answer: "A",
    explanation: "Divergence measures expansion. Integrating it over the whole area sums up all the tiny expansions, equaling the total outward flux crossing the boundary."
  },
  {
    prompt: "What geometrical shape does the parametric curve $x = a\\cos t, y = b\\sin t$ describe when determining area using Green's Theorem?",
    options: [
      "An ellipse with width $2a$ and height $2b$",
      "A circle of radius $ab$",
      "A parabola"
    ],
    answer: "A",
    explanation: "This is the standard parameterization of an ellipse. Plugging these into the Green's Theorem area formula neatly derives the ellipse area formula $\\pi ab$."
  },
  {
    prompt: "If you need to evaluate a line integral along a curve consisting of a straight line, a semicircle, and another straight line forming a closed shape, how does Green's theorem help?",
    options: [
      "It lets you compute one area integral instead of three separate messy line integrals",
      "It guarantees the answer is zero",
      "It allows you to ignore the straight lines"
    ],
    answer: "A",
    explanation: "Instead of parameterizing three different piecewise boundaries and calculating three line integrals, you can often just evaluate one simple double integral over the shape they form."
  },
  {
    prompt: "What condition must $M(x,y)$ and $N(x,y)$ meet for Green's Theorem to be strictly valid?",
    options: [
      "They must have continuous first partial derivatives throughout the entire region $R$",
      "They must be linear functions",
      "They must evaluate to zero at the origin"
    ],
    answer: "A",
    explanation: "If the functions have undefined points (like dividing by zero) or discontinuous derivatives inside the region, you cannot integrate the curl across the area."
  },
  {
    prompt: "The expression $M\\, dx + N\\, dy$ in the line integral of Green's theorem is mathematically equivalent to:",
    options: [
      "$\\mathbf{F} \\cdot d\\mathbf{r}$",
      "$\\mathbf{F} \\cdot \\mathbf{n}\\, ds$",
      "$\\nabla \\times \\mathbf{F}$"
    ],
    answer: "A",
    explanation: "$\\mathbf{F} = \\langle M, N \\rangle$ and $d\\mathbf{r} = \\langle dx, dy \\rangle$. Their dot product results exactly in $M\\, dx + N\\, dy$, which calculates work/circulation."
  }
];
export const QUIZ_CH16_5 = [
  {
    prompt: "How many parameters are required to parameterize a 2D surface floating in 3D space?",
    options: [
      "Two (typically $u$ and $v$)",
      "One (typically $t$)",
      "Three (typically $x, y, z$)"
    ],
    answer: "A",
    explanation: "Just as a 1D curve requires one parameter (like time $t$) to trace a path, a 2D surface requires two parameters to map out a sheet-like domain."
  },
  {
    prompt: "In a parametric surface $\\mathbf{r}(u,v)$, what do the partial derivative vectors $\\mathbf{r}_u$ and $\\mathbf{r}_v$ represent geometrically?",
    options: [
      "They are vectors tangent to the surface at that point",
      "They are normal vectors pointing directly away from the surface",
      "They represent the curvature of the surface"
    ],
    answer: "A",
    explanation: "Taking the partial derivative with respect to one parameter creates a vector that lies perfectly flat against (tangent to) the surface in that specific parameter's direction."
  },
  {
    prompt: "How do you find a vector that is perfectly perpendicular (normal) to a parametric surface at a specific point?",
    options: [
      "By calculating the cross product $\\mathbf{r}_u \\times \\mathbf{r}_v$",
      "By calculating the dot product $\\mathbf{r}_u \\cdot \\mathbf{r}_v$",
      "By adding the two tangent vectors together"
    ],
    answer: "A",
    explanation: "The cross product of two tangent vectors yields a third vector that is orthogonal to both of them, pointing straight out of the surface."
  },
  {
    prompt: "What does the magnitude $|\\mathbf{r}_u \\times \\mathbf{r}_v|$ physically represent?",
    options: [
      "The area of a tiny differential parallelogram patch on the surface",
      "The length of the normal vector",
      "The total surface area of the entire shape"
    ],
    answer: "A",
    explanation: "In vector geometry, the magnitude of a cross product equals the area of the parallelogram formed by those two vectors. This forms the foundational 'patch' for surface integration."
  },
  {
    prompt: "What is the general double integral formula for computing the surface area of a parametric surface over a parameter domain $D$?",
    options: [
      "$\\iint_D |\\mathbf{r}_u \\times \\mathbf{r}_v| \\, dA$",
      "$\\iint_D (\\mathbf{r}_u \\cdot \\mathbf{r}_v) \\, dA$",
      "$\\iint_D \\sqrt{\\mathbf{r}_u^2 + \\mathbf{r}_v^2} \\, dA$"
    ],
    answer: "A",
    explanation: "To find total surface area, you calculate the area of the tiny parallelogram patch $|\\mathbf{r}_u \\times \\mathbf{r}_v|$ and sum (integrate) it over the entire 2D parameter space $D$."
  },
  {
    prompt: "For a surface defined explicitly as a height function $z = g(x,y)$, what does the expression $\\sqrt{1 + (g_x)^2 + (g_y)^2}$ represent?",
    options: [
      "The 'tilt correction factor' that scales the flat shadow area up to the actual curved surface area",
      "The normal vector to the surface",
      "The curvature of the height function"
    ],
    answer: "A",
    explanation: "This square root accounts for the steepness of the surface. A tilted surface requires more physical area to cover the same horizontal footprint as a flat one."
  },
  {
    prompt: "If a surface $z = g(x,y)$ is perfectly flat and parallel to the xy-plane, what is its tilt correction factor?",
    options: [
      "Exactly $1$",
      "$0$",
      "Infinity"
    ],
    answer: "A",
    explanation: "If the surface is completely flat, the slopes $g_x$ and $g_y$ are both $0$. The square root becomes $\\sqrt{1 + 0 + 0} = 1$, meaning surface area exactly equals the flat shadow area."
  },
  {
    prompt: "What is the correct integral setup to find the surface area of a function $z = g(x,y)$ over a shadow region $R$ in the xy-plane?",
    options: [
      "$\\iint_R \\sqrt{1 + \\left(\\frac{\\partial g}{\\partial x}\\right)^2 + \\left(\\frac{\\partial g}{\\partial y}\\right)^2} \\, dA$",
      "$\\iint_R \\left(1 + \\frac{\\partial g}{\\partial x} + \\frac{\\partial g}{\\partial y}\\right) \\, dA$",
      "$\\iint_R \\left(\\frac{\\partial^2 g}{\\partial x^2} + \\frac{\\partial^2 g}{\\partial y^2}\\right) \\, dA$"
    ],
    answer: "A",
    explanation: "This explicit formula is derived from the parametric formula by setting parameters $u = x$ and $v = y$, which simplifies the cross product magnitude."
  },
  {
    prompt: "The vector surface element $d\\mathbf{S}$ (bold 'S') is mathematically equivalent to:",
    options: [
      "$(\\mathbf{r}_u \\times \\mathbf{r}_v) \\, dA$",
      "$|\\mathbf{r}_u \\times \\mathbf{r}_v| \\, dA$",
      "$(\\mathbf{r}_u \\cdot \\mathbf{r}_v) \\, dA$"
    ],
    answer: "A",
    explanation: "The scalar surface element is $dS = |\\mathbf{r}_u \\times \\mathbf{r}_v| dA$. The vector version $d\\mathbf{S}$ keeps the direction, forming the normal vector scaled by the differential area."
  },
  {
    prompt: "How is the unit normal vector $\\mathbf{n}$ properly defined for a parametric surface?",
    options: [
      "$\\frac{\\mathbf{r}_u \\times \\mathbf{r}_v}{|\\mathbf{r}_u \\times \\mathbf{r}_v|}$",
      "$\\frac{\\mathbf{r}_u + \\mathbf{r}_v}{2}$",
      "$\\mathbf{r}_u \\times \\mathbf{r}_v$"
    ],
    answer: "A",
    explanation: "To get a pure direction (unit vector), you take the normal vector generated by the cross product and divide it by its own magnitude to scale its length to exactly 1."
  },
  {
    prompt: "If you want to find the surface area of a paraboloid bowl $z = x^2 + y^2$ restricted to a circular domain $x^2 + y^2 \\le 4$, which coordinate system is usually best to evaluate the double integral?",
    options: [
      "Polar coordinates ($r, \\theta$)",
      "Cartesian coordinates ($x, y$)",
      "Spherical coordinates ($\\rho, \\phi, \\theta$)"
    ],
    answer: "A",
    explanation: "Because both the function ($x^2+y^2 = r^2$) and the domain boundary (a circle) possess rotational symmetry, polar coordinates make the integration vastly simpler."
  },
  {
    prompt: "What is the exact surface area of a complete sphere of radius $a$?",
    options: [
      "$4\\pi a^2$",
      "$\\frac{4}{3}\\pi a^3$",
      "$2\\pi a$"
    ],
    answer: "A",
    explanation: "This classic formula can be explicitly proven using the surface area double integral by integrating the upper hemisphere $z = \\sqrt{a^2-x^2-y^2}$ and doubling the result."
  },
  {
    prompt: "If the cross product $\\mathbf{r}_u \\times \\mathbf{r}_v$ evaluates to the zero vector $\\mathbf{0}$ at a specific point on the surface, what does this imply?",
    options: [
      "The surface is not 'smooth' at that point (e.g., a sharp peak, cone tip, or bad parameterization)",
      "The surface is perfectly flat at that point",
      "The surface has reached its maximum height"
    ],
    answer: "A",
    explanation: "A smooth parametric surface requires a well-defined normal vector everywhere. If the cross product is zero, the tangent vectors are parallel or undefined, signaling a singularity."
  },
  {
    prompt: "For the standard explicit parameterization $\\mathbf{r}(x,y) = \\langle x, y, g(x,y) \\rangle$, what is the exact algebraic evaluation of the normal vector $\\mathbf{r}_x \\times \\mathbf{r}_y$?",
    options: [
      "$\\langle -g_x, -g_y, 1 \\rangle$",
      "$\\langle g_x, g_y, -1 \\rangle$",
      "$\\langle 1, 1, g_{xy} \\rangle$"
    ],
    answer: "A",
    explanation: "Evaluating the determinant of the cross product for $\\langle 1, 0, g_x \\rangle \\times \\langle 0, 1, g_y \\rangle$ algebraically yields $\\langle -g_x, -g_y, 1 \\rangle$."
  },
  {
    prompt: "When you compute the area of a surface, what exactly does the region $D$ in the integral $\\iint_D |\\mathbf{r}_u \\times \\mathbf{r}_v| \\, dA$ represent?",
    options: [
      "The flat 2D domain in the mathematical parameter space $(u,v)$",
      "The actual physical curved surface floating in 3D",
      "The volume enclosed underneath the surface"
    ],
    answer: "A",
    explanation: "You are summing up the differential patches over the flat 'blueprint' domain $D$ that generates the surface, just as you integrate over a time interval $[a,b]$ for a 1D curve."
  },
  {
    prompt: "The surface area formula $\\iint_D |\\mathbf{r}_u \\times \\mathbf{r}_v| \\, dA$ is a direct 2D expansion of which 1D calculus concept?",
    options: [
      "The arc length integral $\\int_a^b |\\mathbf{r}'(t)| \\, dt$",
      "The Fundamental Theorem of Calculus",
      "The curvature formula"
    ],
    answer: "A",
    explanation: "Just as integrating the 1D speed $|\\mathbf{r}'(t)|$ yields length, integrating the 2D 'area speed' $|\\mathbf{r}_u \\times \\mathbf{r}_v|$ yields surface area."
  },
  {
    prompt: "Which pair of parameters is most natural for generating the surface of a cylinder oriented along the z-axis?",
    options: [
      "Angle $\\theta$ and height $z$",
      "Radius $r$ and angle $\\theta$",
      "Radius $r$ and height $z$"
    ],
    answer: "A",
    explanation: "A standard cylinder has a fixed radius, so the only variables that change are how far around the circle you are ($\\theta$) and how high up you are ($z$)."
  },
  {
    prompt: "If an engineer needs to determine how much fabric is required to build a complex, curved tent roof, which mathematical tool should they use?",
    options: [
      "The surface area integral",
      "Green's Theorem",
      "The volume integral"
    ],
    answer: "A",
    explanation: "The surface area integral directly calculates the total amount of 2D material needed to cover a curved 3D shape."
  },
  {
    prompt: "In the surface area formula for $z=g(x,y)$, what do $g_x$ and $g_y$ physically represent?",
    options: [
      "The slopes (steepness) of the surface in the $x$ and $y$ directions",
      "The 2D curl of the surface",
      "The divergence of the field across the surface"
    ],
    answer: "A",
    explanation: "These partial derivatives measure how drastically the height $z$ changes as you move horizontally, which dictates the severity of the 'tilt'."
  },
  {
    prompt: "If a surface has the parametrization $\\mathbf{r}(u,v) = \\langle u\\cos v, u\\sin v, u \\rangle$, this traces out a:",
    options: [
      "Cone",
      "Sphere",
      "Plane"
    ],
    answer: "A",
    explanation: "Notice that $x^2 + y^2 = (u\\cos v)^2 + (u\\sin v)^2 = u^2$. Since $z = u$, we have $x^2 + y^2 = z^2$, which is the standard equation for a cone."
  }
];