/**
 * Study-guide quiz banks for
 * Space Curves & Advanced Multivariable Mappings.
 *
 * Topic 1 — Vector Position Functions
 * 20 MCQs
 */

export const MV_SC_201_QUIZ = [
  {
    prompt: "A space curve is commonly represented by which vector-valued function?",
    options: [
      "$\\\\mathbf{r}(t)=\\\\langle x(t),y(t),z(t)\\\\rangle$",
      "$\\\\mathbf{r}(t)=x+y+z$",
      "$\\\\mathbf{r}(t)=\\\\langle x+y,y+z,z+x\\\\rangle$",
      "$\\\\mathbf{r}(t)=xyz$"
    ],
    answer: "A",
    explanation:
      "A space curve is represented by a vector-valued position function r(t)=<x(t),y(t),z(t), where t is the parameter."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle t,t^2,t^3\\\\rangle$, what is the point on the curve when $t=2$?",
    options: [
      "$\\\\langle 2,4,8\\\\rangle$",
      "$\\\\langle 2,2,2\\\\rangle$",
      "$\\\\langle 4,2,8\\\\rangle$",
      "$\\\\langle 2,8,4\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "Substituting t=2 gives r(2)=<2,2²,2³>=<2,4,8>."
  },

  {
    prompt: "If $\\\\mathbf{r}(t)=\\\\langle 3t,2t-1,5\\\\rangle$, what is the position vector at $t=0$?",
    options: [
      "$\\\\langle 0,-1,5\\\\rangle$",
      "$\\\\langle 3,-1,5\\\\rangle$",
      "$\\\\langle 0,1,5\\\\rangle$",
      "$\\\\langle 3,0,5\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "At t=0, r(0)=<3(0),2(0)-1,5>=<0,-1,5>."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle \\\\cos t,\\\\sin t,t\\\\rangle$, which curve is traced?",
    options: [
      "A circular helix around the z-axis",
      "A straight line",
      "A parabola in the xy-plane",
      "A circle in the xy-plane"
    ],
    answer: "A",
    explanation:
      "The x and y components trace the unit circle while z=t increases linearly, producing a circular helix."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle \\\\cos t,\\\\sin t,0\\\\rangle$, what is the equation satisfied by x and y?",
    options: [
      "$x^2+y^2=1$",
      "$x+y=1$",
      "$x^2-y^2=1$",
      "$x^2+y^2=0$"
    ],
    answer: "A",
    explanation:
      "Since x=cos t and y=sin t, x²+y²=cos²t+sin²t=1."
  },

  {
    prompt: "Which component of $\\\\mathbf{r}(t)=\\\\langle x(t),y(t),z(t)\\\\rangle$ gives the z-coordinate of the curve?",
    options: [
      "$x(t)$",
      "$y(t)$",
      "$z(t)$",
      "$t$"
    ],
    answer: "C",
    explanation:
      "The third component z(t) gives the z-coordinate of the position vector."
  },

  {
    prompt: "If $\\\\mathbf{r}(t)=\\\\langle 2t+1,3-t,4t^2\\\\rangle$, what is the point corresponding to $t=1$?",
    options: [
      "$\\\\langle 3,2,4\\\\rangle$",
      "$\\\\langle 2,3,4\\\\rangle$",
      "$\\\\langle 3,4,2\\\\rangle$",
      "$\\\\langle 1,2,4\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "At t=1, the components are 2(1)+1=3, 3-1=2, and 4(1)²=4."
  },

  {
    prompt: "What does the parameter $t$ represent in a vector-valued position function?",
    options: [
      "A parameter that determines the point on the curve",
      "Always the x-coordinate",
      "Always the y-coordinate",
      "The length of the curve"
    ],
    answer: "A",
    explanation:
      "The parameter t determines the position along the curve by specifying the values of its component functions."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle t^2,2t,3t\\\\rangle$, which point corresponds to $t=-1$?",
    options: [
      "$\\\\langle 1,-2,-3\\\\rangle$",
      "$\\\\langle -1,-2,-3\\\\rangle$",
      "$\\\\langle 1,2,3\\\\rangle$",
      "$\\\\langle -1,2,-3\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "At t=-1, t²=1, 2t=-2, and 3t=-3, giving <1,-2,-3>."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle 2\\\\cos t,2\\\\sin t,0\\\\rangle$, what is the radius of the curve?",
    options: [
      "$1$",
      "$2$",
      "$4$",
      "$\\\\sqrt{2}$"
    ],
    answer: "B",
    explanation:
      "The xy-components satisfy x²+y²=4, so the radius is √4=2."
  },

  {
    prompt: "Which equation describes the projection of $\\\\mathbf{r}(t)=\\\\langle \\\\cos t,\\\\sin t,2t\\\\rangle$ onto the xy-plane?",
    options: [
      "$x^2+y^2=1$",
      "$x^2+y^2=4$",
      "$x+y=1$",
      "$z=2$"
    ],
    answer: "A",
    explanation:
      "The projection uses x=cos t and y=sin t, so x²+y²=1."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle t,t,t\\\\rangle$, what geometric object does the curve represent?",
    options: [
      "A straight line through the origin",
      "A circle",
      "A parabola",
      "A helix"
    ],
    answer: "A",
    explanation:
      "Since x=y=z=t, the curve lies on the line x=y=z and passes through the origin."
  },

  {
    prompt: "If $\\\\mathbf{r}(t)=\\\\langle t+1,2t,3t-2\\\\rangle$, at what value of $t$ does the curve pass through $(1,0,-2)$?",
    options: [
      "$t=0$",
      "$t=1$",
      "$t=-1$",
      "$t=2$"
    ],
    answer: "A",
    explanation:
      "From x=t+1=1, we get t=0. Then y=0 and z=-2, so the point is reached at t=0."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle 4\\\\cos t,4\\\\sin t,t\\\\rangle$, what is the radius of the cylindrical projection onto the xy-plane?",
    options: [
      "$1$",
      "$2$",
      "$4$",
      "$16$"
    ],
    answer: "C",
    explanation:
      "The projection satisfies x²+y²=16, so its radius is √16=4."
  },

  {
    prompt: "Which statement about a position vector $\\\\mathbf{r}(t)$ is correct?",
    options: [
      "It gives the location of a point on the curve for each parameter value",
      "It always gives the velocity of the curve",
      "It always has magnitude 1",
      "It contains only two coordinates"
    ],
    answer: "A",
    explanation:
      "The position vector identifies the location of the moving point on the curve for each value of t."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle t^2-1,t+2,2t\\\\rangle$, what is $\\\\mathbf{r}(1)$?",
    options: [
      "$\\\\langle 0,3,2\\\\rangle$",
      "$\\\\langle 1,3,2\\\\rangle$",
      "$\\\\langle 0,2,1\\\\rangle$",
      "$\\\\langle 2,3,1\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "At t=1, t²-1=0, t+2=3, and 2t=2, giving <0,3,2>."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle \\\\cos t,\\\\sin t,3\\\\rangle$, what is the z-coordinate of every point on the curve?",
    options: [
      "$0$",
      "$1$",
      "$3$",
      "$t$"
    ],
    answer: "C",
    explanation:
      "The third component is z(t)=3, so every point has z-coordinate 3."
  },

  {
    prompt: "If $\\\\mathbf{r}(t)=\\\\langle t^2,4t,1-t\\\\rangle$, which point corresponds to $t=2$?",
    options: [
      "$\\\\langle 4,8,-1\\\\rangle$",
      "$\\\\langle 2,8,-1\\\\rangle$",
      "$\\\\langle 4,6,-1\\\\rangle$",
      "$\\\\langle 4,8,1\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "At t=2, t²=4, 4t=8, and 1-t=-1."
  },

  {
    prompt: "A vector-valued function $\\\\mathbf{r}(t)=\\\\langle x(t),y(t),z(t)\\\\rangle$ represents a space curve because:",
    options: [
      "Its three components can determine x-, y-, and z-coordinates",
      "It must always have constant magnitude",
      "It contains only trigonometric functions",
      "Its parameter must equal the arc length"
    ],
    answer: "A",
    explanation:
      "Three component functions provide the three spatial coordinates of the moving point."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle 3t,4t,12t\\\\rangle$, what is $\\\\mathbf{r}(0)$?",
    options: [
      "$\\\\langle 0,0,0\\\\rangle$",
      "$\\\\langle 3,4,12\\\\rangle$",
      "$\\\\langle 1,1,1\\\\rangle$",
      "$\\\\langle 12,4,3\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "Substituting t=0 into every component gives <0,0,0>."
  },

  
];
export const MV_SC_202_QUIZ = [
  {
    prompt: "For the position function $\\\\mathbf{r}(t)=\\\\langle t^2,3t,4\\\\rangle$, what is the velocity vector?",
    options: [
      "$\\\\langle 2t,3,0\\\\rangle$",
      "$\\\\langle t,3,4\\\\rangle$",
      "$\\\\langle 2,3,0\\\\rangle$",
      "$\\\\langle t^2,3,0\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "Velocity is the derivative of position: r'(t)=<2t,3,0>."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle t^2,2t,t^3\\\\rangle$, what is the acceleration vector?",
    options: [
      "$\\\\langle 2,0,6t\\\\rangle$",
      "$\\\\langle 2,2,3t^2\\\\rangle$",
      "$\\\\langle t,2,t^2\\\\rangle$",
      "$\\\\langle 2t,2,3t^2\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "First differentiate to get v=<2t,2,3t²>. Differentiating again gives a=<2,0,6t>."
  },

  {
    prompt: "If $\\\\mathbf{r}(t)=\\\\langle 3t,4t,0\\\\rangle$, what is the speed?",
    options: [
      "$3$",
      "$4$",
      "$5$",
      "$7$"
    ],
    answer: "C",
    explanation:
      "The velocity is <3,4,0>, so the speed is |v|=√(3²+4²)=5."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle t^2,t^2,t\\\\rangle$, what is the velocity at $t=1$?",
    options: [
      "$\\\\langle 1,1,1\\\\rangle$",
      "$\\\\langle 2,2,1\\\\rangle$",
      "$\\\\langle 2,1,2\\\\rangle$",
      "$\\\\langle 1,2,1\\\\rangle$"
    ],
    answer: "B",
    explanation:
      "v(t)=r'(t)=<2t,2t,1>. At t=1, v=<2,2,1>."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle t,t^2,t^3\\\\rangle$, what is the acceleration at $t=1$?",
    options: [
      "$\\\\langle 1,2,3\\\\rangle$",
      "$\\\\langle 0,2,6\\\\rangle$",
      "$\\\\langle 1,2,6\\\\rangle$",
      "$\\\\langle 0,1,6\\\\rangle$"
    ],
    answer: "B",
    explanation:
      "v(t)=<1,2t,3t²>, so a(t)=<0,2,6t>. At t=1, a=<0,2,6>."
  },

  {
    prompt: "What is the relationship between position, velocity, and acceleration?",
    options: [
      "$\\\\mathbf{v}=\\\\mathbf{r}'$ and $\\\\mathbf{a}=\\\\mathbf{r}''$",
      "$\\\\mathbf{v}=\\\\mathbf{r}''$ and $\\\\mathbf{a}=\\\\mathbf{r}'$",
      "$\\\\mathbf{v}=|\\\\mathbf{r}|$ and $\\\\mathbf{a}=|\\\\mathbf{v}|$",
      "$\\\\mathbf{v}=\\\\mathbf{r}$ and $\\\\mathbf{a}=\\\\mathbf{v}$"
    ],
    answer: "A",
    explanation:
      "Velocity is the first derivative of position, while acceleration is the second derivative."
  },

  {
  prompt: "For $\\\\mathbf{r}(t)=\\\\langle 2t,t^2,3t^2\\\\rangle$, what is the speed at $t=1$?",
  options: [
    "$2\\\\sqrt{11}$",
    "$2\\\\sqrt{6}$",
    "$\\\\sqrt{14}$",
    "$6$"
  ],
  answer: "A",
  explanation:
    "v(t)=<2,2t,6t>. At t=1, v=<2,2,6>, so speed=√(4+4+36)=√44=2√11."
},

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle t^2,2t,3\\\\rangle$, what is the speed at $t=2$?",
    options: [
      "$4$",
      "$2$",
      "$\\\\sqrt{20}$",
      "$6$"
    ],
    answer: "C",
    explanation:
      "v(t)=<2t,2,0>. At t=2, v=<4,2,0>, so speed=√(16+4)=√20."
  },

  {
    prompt: "If the velocity vector is $\\\\mathbf{v}(t)=\\\\langle 3,4,0\\\\rangle$, what is the speed?",
    options: [
      "$3$",
      "$4$",
      "$5$",
      "$7$"
    ],
    answer: "C",
    explanation:
      "Speed is the magnitude of velocity: √(3²+4²+0²)=5."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle \\\\cos t,\\\\sin t,t\\\\rangle$, what is the velocity vector?",
    options: [
      "$\\\\langle -\\\\sin t,\\\\cos t,1\\\\rangle$",
      "$\\\\langle \\\\sin t,-\\\\cos t,1\\\\rangle$",
      "$\\\\langle -\\\\cos t,\\\\sin t,1\\\\rangle$",
      "$\\\\langle \\\\cos t,\\\\sin t,1\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "Differentiate each component: d(cos t)/dt=-sin t, d(sin t)/dt=cos t, and d(t)/dt=1."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle \\\\cos t,\\\\sin t,t\\\\rangle$, what is the speed?",
    options: [
      "$1$",
      "$\\\\sqrt{2}$",
      "$2$",
      "$\\\\sqrt{3}$"
    ],
    answer: "B",
    explanation:
      "v=<−sin t,cos t,1>. Its magnitude is √(sin²t+cos²t+1)=√2."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle t^3,t^2,t\\\\rangle$, what is the velocity at $t=2$?",
    options: [
      "$\\\\langle 12,4,1\\\\rangle$",
      "$\\\\langle 8,4,2\\\\rangle$",
      "$\\\\langle 6,4,1\\\\rangle$",
      "$\\\\langle 12,2,1\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "v(t)=<3t²,2t,1>. At t=2, v=<12,4,1>."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle t^3,t^2,t\\\\rangle$, what is the acceleration at $t=2$?",
    options: [
      "$\\\\langle 12,2,0\\\\rangle$",
      "$\\\\langle 6,2,0\\\\rangle$",
      "$\\\\langle 12,4,1\\\\rangle$",
      "$\\\\langle 6,4,0\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "a(t)=<6t,2,0>. At t=2, a=<12,2,0>."
  },

  {
    prompt: "If $\\\\mathbf{r}(t)=\\\\langle 5t,12t,0\\\\rangle$, what is the speed?",
    options: [
      "$13$",
      "$17$",
      "$60$",
      "$\\\\sqrt{169}$"
    ],
    answer: "A",
    explanation:
      "v=<5,12,0>, so speed=√(25+144)=√169=13."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle t,t^2,t^3\\\\rangle$, at what value of $t$ is the velocity vector $\\\\langle 1,2,3\\\\rangle$?",
    options: [
      "$t=0$",
      "$t=1$",
      "$t=2$",
      "$t=3$"
    ],
    answer: "B",
    explanation:
      "v(t)=<1,2t,3t²>. Setting 2t=2 gives t=1, and then 3t²=3 is also satisfied."
  },

  {
    prompt: "If the speed of a particle is zero at a particular time, what can be concluded about its velocity at that time?",
    options: [
      "The velocity vector is zero",
      "The acceleration must be zero",
      "The position vector is zero",
      "The particle must remain at rest forever"
    ],
    answer: "A",
    explanation:
      "Speed is the magnitude of velocity. A zero magnitude means the velocity vector itself is zero."
  },

  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle 2t,t^2,4t^3\\\\rangle$, what is the acceleration vector?",
    options: [
      "$\\\\langle 0,2,24t\\\\rangle$",
      "$\\\\langle 2,2t,12t^2\\\\rangle$",
      "$\\\\langle 0,2,12t\\\\rangle$",
      "$\\\\langle 2,2,24t\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "v=<2,2t,12t²>, and differentiating again gives a=<0,2,24t>."
  },

  {
  prompt: "For $\\\\mathbf{r}(t)=\\\\langle t,2t,t^2\\\\rangle$, what is the speed at $t=3$?",
  options: [
    "$\\\\sqrt{41}$",
    "$\\\\sqrt{22}$",
    "$\\\\sqrt{14}$",
    "$10$"
  ],
  answer: "A",
  explanation:
    "v(t)=<1,2,2t>. At t=3, v=<1,2,6>, so speed=√(1+4+36)=√41."
},
  {
    prompt: "For $\\\\mathbf{r}(t)=\\\\langle 4t,3t,t^2\\\\rangle$, what is the velocity at $t=2$?",
    options: [
      "$\\\\langle 4,3,4\\\\rangle$",
      "$\\\\langle 8,6,4\\\\rangle$",
      "$\\\\langle 4,3,2\\\\rangle$",
      "$\\\\langle 4,6,4\\\\rangle$"
    ],
    answer: "A",
    explanation:
      "v(t)=<4,3,2t>. At t=2, v=<4,3,4>."
  },

  {
    prompt: "For a particle with position $\\\\mathbf{r}(t)$, what does the acceleration vector describe?",
    options: [
      "The rate of change of velocity",
      "The magnitude of position",
      "The distance from the origin",
      "The rate of change of time"
    ],
    answer: "A",
    explanation:
      "Acceleration is the derivative of velocity, so it measures how the velocity vector changes with time."
  }
];
export const MV_SC_203_QUIZ = [
  {
    prompt: "For a regular curve r(t), which formula defines the unit tangent vector T?",
    options: [
      "T = r'(t) / |r'(t)|",
      "T = r''(t) / |r''(t)|",
      "T = r(t) / |r(t)|",
      "T = |r'(t)|r'(t)"
    ],
    answer: "A",
    explanation:
      "The unit tangent vector is obtained by normalizing the velocity vector: T = r'(t) / |r'(t)|."
  },

  {
    prompt: "If r'(t) = <3,4,0>, what is the unit tangent vector?",
    options: [
      "<3/5,4/5,0>",
      "<3/4,4/3,0>",
      "<3,4,0>",
      "<4/5,3/5,0>"
    ],
    answer: "A",
    explanation:
      "|r'(t)| = sqrt(3^2+4^2) = 5. Therefore T = <3/5,4/5,0>."
  },

  {
    prompt: "For r(t) = <cos t, sin t, t>, what is T(t)?",
    options: [
      "<-sin t, cos t, 1>/sqrt(2)",
      "<cos t, sin t, t>/sqrt(2)",
      "<-cos t, sin t, 1>/sqrt(2)",
      "<-sin t, cos t, 0>"
    ],
    answer: "A",
    explanation:
      "r'(t) = <-sin t, cos t, 1> and |r'(t)| = sqrt(2). Hence T = <-sin t, cos t, 1>/sqrt(2)."
  },

  {
    prompt: "Which formula defines the principal unit normal vector N when T'(t) is nonzero?",
    options: [
      "N = T'(t) / |T'(t)|",
      "N = T(t) / |T(t)|",
      "N = r(t) / |r(t)|",
      "N = r'(t) / |r'(t)|"
    ],
    answer: "A",
    explanation:
      "The principal normal vector is the normalized derivative of the unit tangent: N = T'/|T'|."
  },

  {
    prompt: "If T(t) = <cos t, sin t, 0>, what is N(t)?",
    options: [
      "<-sin t, cos t, 0>",
      "<cos t, sin t, 0>",
      "<sin t, -cos t, 0>",
      "<0,0,1>"
    ],
    answer: "A",
    explanation:
      "T'(t) = <-sin t, cos t, 0>, whose magnitude is 1. Therefore N(t) = <-sin t, cos t, 0>."
  },

  {
    prompt: "Using the standard convention, how is the binormal vector B defined?",
    options: [
      "B = T × N",
      "B = N × T",
      "B = T + N",
      "B = T - N"
    ],
    answer: "A",
    explanation:
      "The standard Frenet-frame convention is B = T × N."
  },

  {
    prompt: "If T = <1,0,0> and N = <0,1,0>, what is B?",
    options: [
      "<0,0,1>",
      "<0,0,-1>",
      "<1,1,0>",
      "<0,1,1>"
    ],
    answer: "A",
    explanation:
      "T × N = <1,0,0> × <0,1,0> = <0,0,1>."
  },

  {
    prompt: "For r(t) = <t,t^2,0> at t = 0, what is the unit tangent vector?",
    options: [
      "<1,0,0>",
      "<0,1,0>",
      "<1,1,0>",
      "<0,0,1>"
    ],
    answer: "A",
    explanation:
      "r'(t) = <1,2t,0>. At t = 0, r'(0) = <1,0,0>, whose magnitude is 1."
  },

  {
    prompt: "For r(t) = <t,t^2,0> at t = 0, what is the principal normal vector?",
    options: [
      "<0,1,0>",
      "<1,0,0>",
      "<0,-1,0>",
      "<0,0,1>"
    ],
    answer: "A",
    explanation:
      "T(t) = <1,2t,0>/sqrt(1+4t^2). At t = 0, the derivative T'(0) points in the positive y-direction, so N = <0,1,0>."
  },

  {
    prompt: "For r(t) = <t,t^2,0> at t = 0, what is the binormal vector B?",
    options: [
      "<0,0,1>",
      "<0,0,-1>",
      "<1,0,0>",
      "<0,1,0>"
    ],
    answer: "A",
    explanation:
      "At t = 0, T = <1,0,0> and N = <0,1,0>. Thus B = T × N = <0,0,1>."
  },

  {
    prompt: "Which statement about T, N, and B is correct for a well-defined Frenet frame?",
    options: [
      "They form an orthonormal frame",
      "They are all parallel",
      "Only T has unit length",
      "They must all lie in the xy-plane"
    ],
    answer: "A",
    explanation:
      "T, N, and B are mutually perpendicular unit vectors, so they form an orthonormal frame."
  },

  {
    prompt: "If T and N are perpendicular unit vectors, what is |T × N|?",
    options: [
      "1",
      "0",
      "sqrt(2)",
      "2"
    ],
    answer: "A",
    explanation:
      "|T × N| = |T||N|sin(90°) = 1·1·1 = 1."
  },

  {
    prompt: "For the circle r(t) = <cos t, sin t, 0>, what is the binormal vector using B = T × N?",
    options: [
      "<0,0,1>",
      "<0,0,-1>",
      "<cos t,sin t,0>",
      "<-sin t,cos t,0>"
    ],
    answer: "A",
    explanation:
      "For this counterclockwise parametrization, T = <-sin t,cos t,0> and N = <-cos t,-sin t,0>. Their cross product is <0,0,1>."
  },

  {
    prompt: "Which Frenet-frame vector is always perpendicular to both T and N?",
    options: [
      "B",
      "T",
      "N",
      "r"
    ],
    answer: "A",
    explanation:
      "The binormal B = T × N is perpendicular to both T and N."
  },

  {
    prompt: "For a regular curve, what is the relationship between velocity v and the unit tangent T?",
    options: [
      "v = |v|T",
      "v = T/|v|",
      "v = |T|v",
      "v is perpendicular to T"
    ],
    answer: "A",
    explanation:
      "Since T = v/|v|, multiplying by |v| gives v = |v|T."
  },

  {
    prompt: "For the straight-line curve r(t) = <2t,0,0>, why is the principal normal vector not defined?",
    options: [
      "T'(t) = 0",
      "r'(t) = 0",
      "r(t) = 0 for every t",
      "The velocity has infinite magnitude"
    ],
    answer: "A",
    explanation:
      "The unit tangent is constant for a straight line, so T'(t) = 0. Therefore T'/|T'| cannot be used to define N."
  },

  {
    prompt: "If T(t) = <cos t, sin t, 0>, what is |T'(t)|?",
    options: [
      "1",
      "0",
      "sqrt(2)",
      "2"
    ],
    answer: "A",
    explanation:
      "T'(t) = <-sin t, cos t, 0>, so |T'| = sqrt(sin^2 t + cos^2 t) = 1."
  },

  {
    prompt: "Suppose T = <0,1,0> and N = <-1,0,0>. What is B = T × N?",
    options: [
      "<0,0,1>",
      "<0,0,-1>",
      "<1,0,0>",
      "<0,1,0>"
    ],
    answer: "A",
    explanation:
      "Using the cross product, <0,1,0> × <-1,0,0> = <0,0,1>."
  },

  {
    prompt: "Which Frenet–Serret equation describes the derivative of the unit tangent with respect to t?",
    options: [
      "T' = κ|r'|N",
      "T' = -τ|r'|B",
      "T' = τ|r'|N",
      "T' = κ|r'|B"
    ],
    answer: "A",
    explanation:
      "The Frenet–Serret formula for the tangent is T' = κ|r'|N."
  },

  {
    prompt: "Which Frenet–Serret equation gives the derivative of the binormal vector?",
    options: [
      "B' = -τ|r'|N",
      "B' = κ|r'|N",
      "B' = τ|r'|T",
      "B' = -κ|r'|T"
    ],
    answer: "A",
    explanation:
      "The standard Frenet–Serret relation is B' = -τ|r'|N."
  }
];
export const MV_SC_204_QUIZ = [
  {
    prompt: "Which formula gives the curvature of a regular space curve r(t)?",
    options: [
      "κ = |r'(t) × r''(t)| / |r'(t)|^3",
      "κ = |r'(t)| / |r''(t)|",
      "κ = |r''(t)| / |r'(t)|",
      "κ = r'(t) · r''(t)"
    ],
    answer: "A",
    explanation:
      "The curvature of a regular space curve is κ = |r' × r''| / |r'|^3."
  },

  {
    prompt: "What does curvature measure geometrically?",
    options: [
      "How rapidly the tangent direction changes",
      "The distance from the origin",
      "The total length of the curve",
      "The speed of the particle"
    ],
    answer: "A",
    explanation:
      "Curvature measures how rapidly the direction of the unit tangent vector changes along the curve."
  },

  {
    prompt: "If a curve is a straight line, what is its curvature?",
    options: [
      "0",
      "1",
      "Undefined",
      "Infinite"
    ],
    answer: "A",
    explanation:
      "A straight line has a constant tangent direction, so its curvature is zero."
  },

  {
    prompt: "For r(t) = <t, t^2, 0>, what are r'(t) and r''(t)?",
    options: [
      "r' = <1, 2t, 0> and r'' = <0, 2, 0>",
      "r' = <t, 2t, 0> and r'' = <1, 2, 0>",
      "r' = <1, t, 0> and r'' = <0, 1, 0>",
      "r' = <2t, t^2, 0> and r'' = <2, 2t, 0>"
    ],
    answer: "A",
    explanation:
      "Differentiate each component once and then twice."
  },

  {
    prompt: "For r(t) = <t, t^2, 0>, what is r'(t) × r''(t)?",
    options: [
      "<0, 0, 2>",
      "<0, 0, -2>",
      "<2, 0, 0>",
      "<0, 2, 0>"
    ],
    answer: "A",
    explanation:
      "r' = <1,2t,0> and r'' = <0,2,0>. Their cross product is <0,0,2>."
  },

  {
    prompt: "For r(t) = <t, t^2, 0>, what is the curvature at t = 0?",
    options: [
      "2",
      "1",
      "1/2",
      "4"
    ],
    answer: "A",
    explanation:
      "At t=0, |r'|=1 and |r' × r''|=2. Therefore κ=2/1^3=2."
  },

  {
    prompt: "What is the relationship between curvature κ and the radius of curvature ρ?",
    options: [
      "ρ = 1/κ",
      "ρ = κ",
      "ρ = κ^2",
      "ρ = 1/κ^2"
    ],
    answer: "A",
    explanation:
      "The radius of curvature is the reciprocal of curvature: ρ = 1/κ."
  },

  {
    prompt: "Which expression is used to calculate torsion τ for a space curve?",
    options: [
      "τ = ((r' × r'') · r''') / |r' × r''|^2",
      "τ = |r' × r''| / |r'|^3",
      "τ = |r''| / |r'|",
      "τ = r' · r''"
    ],
    answer: "A",
    explanation:
      "The torsion formula is τ = ((r' × r'') · r''') / |r' × r''|^2."
  },

  {
    prompt: "What geometric property does torsion measure?",
    options: [
      "Twisting of a space curve out of its osculating plane",
      "The speed of the particle",
      "The distance from the origin",
      "The total length of the curve"
    ],
    answer: "A",
    explanation:
      "Torsion measures how strongly a space curve twists away from its osculating plane."
  },

  {
    prompt: "If (r' × r'') · r''' = 0 and r' × r'' is nonzero, what is the torsion?",
    options: [
      "0",
      "1",
      "Undefined",
      "Infinite"
    ],
    answer: "A",
    explanation:
      "The numerator of the torsion formula is zero while the denominator is nonzero, so τ = 0."
  },

  {
    prompt: "What condition is required for the standard torsion formula to be defined?",
    options: [
      "r' × r'' must be nonzero",
      "r' must be zero",
      "r'' must be zero",
      "r''' must be zero"
    ],
    answer: "A",
    explanation:
      "The denominator contains |r' × r''|^2, so r' × r'' must be nonzero."
  },

  {
    prompt: "What is the torsion of a planar curve when its Frenet frame is well-defined?",
    options: [
      "0",
      "1",
      "κ",
      "Infinite"
    ],
    answer: "A",
    explanation:
      "A planar curve does not twist out of its plane, so its torsion is zero wherever the Frenet frame is defined."
  },

  {
    prompt: "For a circle of radius R, what is its curvature?",
    options: [
      "1/R",
      "R",
      "R^2",
      "1/R^2"
    ],
    answer: "A",
    explanation:
      "The curvature of a circle is the reciprocal of its radius."
  },

  {
    prompt: "What is the curvature of the unit circle r(t) = <cos t, sin t, 0>?",
    options: [
      "1",
      "0",
      "2",
      "1/2"
    ],
    answer: "A",
    explanation:
      "The unit circle has radius 1, so its curvature is 1."
  },

  {
    prompt: "For a regular curve, if r'(t) and r''(t) are parallel, what happens to the curvature?",
    options: [
      "The curvature is 0",
      "The curvature is 1",
      "The curvature becomes infinite",
      "The curvature equals the speed"
    ],
    answer: "A",
    explanation:
      "If r' and r'' are parallel, their cross product is zero. Therefore the curvature formula gives κ=0."
  },

  {
    prompt: "If |r'(t)| = 2 and |r'(t) × r''(t)| = 8, what is the curvature?",
    options: [
      "1",
      "2",
      "4",
      "8"
    ],
    answer: "A",
    explanation:
      "κ = 8 / 2^3 = 8/8 = 1."
  },

  {
    prompt: "If |r'(t)| = 3 and |r'(t) × r''(t)| = 27, what is the curvature?",
    options: [
      "1",
      "3",
      "9",
      "27"
    ],
    answer: "A",
    explanation:
      "κ = 27 / 3^3 = 27/27 = 1."
  },

  {
    prompt: "If the curvature of a curve is 1/5, what is its radius of curvature?",
    options: [
      "5",
      "1/5",
      "25",
      "10"
    ],
    answer: "A",
    explanation:
      "Since ρ = 1/κ, we have ρ = 1/(1/5) = 5."
  },

  {
    prompt: "Which statement about torsion is correct?",
    options: [
      "Torsion measures the twisting of a space curve",
      "Torsion always equals curvature",
      "Torsion measures only the speed",
      "Torsion is defined only for straight lines"
    ],
    answer: "A",
    explanation:
      "Curvature measures bending, while torsion measures twisting of a space curve."
  },

  {
    prompt: "If a curve has constant curvature and zero torsion, what type of curve can it represent?",
    options: [
      "A planar circle when the curvature is positive and constant",
      "A general helix with nonzero torsion",
      "A curve with infinite twisting",
      "A curve with undefined velocity"
    ],
    answer: "A",
    explanation:
      "A planar curve with positive constant curvature is a circle. Zero torsion indicates no twisting out of the plane."
  }
];
export const MV_SC_205_QUIZ = [
  {
    prompt: "What does the Jacobian measure in a change of variables?",
    options: [
      "The local scaling of area or volume under the transformation",
      "The total distance traveled by a particle",
      "The curvature of a space curve",
      "The slope of a single-variable function"
    ],
    answer: "A",
    explanation:
      "The absolute value of the Jacobian describes how the transformation locally scales area in 2D or volume in 3D."
  },

  {
    prompt: "For x = x(u,v) and y = y(u,v), which expression gives the 2D Jacobian?",
    options: [
      "J = x_u y_v - x_v y_u",
      "J = x_u y_u + x_v y_v",
      "J = x_v y_u - x_u y_v",
      "J = x_u + y_v"
    ],
    answer: "A",
    explanation:
      "The Jacobian determinant is J = x_u y_v - x_v y_u."
  },

  {
    prompt: "For the transformation x = u + v and y = u - v, what is the Jacobian J?",
    options: [
      "-2",
      "0",
      "1",
      "2"
    ],
    answer: "A",
    explanation:
      "x_u=1, x_v=1, y_u=1, and y_v=-1. Therefore J=(1)(-1)-(1)(1)=-2."
  },

  {
    prompt: "For the transformation x = 2u and y = 3v, what is the Jacobian?",
    options: [
      "6",
      "5",
      "1",
      "12"
    ],
    answer: "A",
    explanation:
      "J = x_u y_v - x_v y_u = (2)(3) - (0)(0) = 6."
  },

  {
    prompt: "If J = -4, what factor relates the area elements dA and du dv?",
    options: [
      "dA = 4 du dv",
      "dA = -4 du dv",
      "dA = du dv / 4",
      "dA = 16 du dv"
    ],
    answer: "A",
    explanation:
      "For area transformations, dA = |J| du dv. Since |−4|=4, dA=4 du dv."
  },

  {
    prompt: "What is the standard polar-coordinate transformation?",
    options: [
      "x = r cos(theta), y = r sin(theta)",
      "x = r sin(theta), y = r cos(theta)",
      "x = r + cos(theta), y = r + sin(theta)",
      "x = r theta, y = r"
    ],
    answer: "A",
    explanation:
      "Polar coordinates are defined by x=r cos(theta) and y=r sin(theta)."
  },

  {
    prompt: "What is the Jacobian for the polar-coordinate transformation?",
    options: [
      "r",
      "1",
      "r squared",
      "1/r"
    ],
    answer: "A",
    explanation:
      "The polar Jacobian is |partial(x,y)/partial(r,theta)| = r."
  },

  {
    prompt: "In polar coordinates, how is the area element dA written?",
    options: [
      "dA = r dr dtheta",
      "dA = dr dtheta",
      "dA = r squared dr dtheta",
      "dA = dr / (r dtheta)"
    ],
    answer: "A",
    explanation:
      "The Jacobian contributes a factor of r, so dA = r dr dtheta."
  },

  {
    prompt: "What is the Jacobian matrix for x = u^2 and y = v^2?",
    options: [
      "[[2u, 0], [0, 2v]]",
      "[[u, v], [u, v]]",
      "[[2u, 2v], [0, 0]]",
      "[[u^2, 0], [0, v^2]]"
    ],
    answer: "A",
    explanation:
      "The partial derivatives are x_u=2u, x_v=0, y_u=0, and y_v=2v."
  },

  {
    prompt: "For x = u^2 and y = v^2, what is the Jacobian determinant?",
    options: [
      "4uv",
      "2u + 2v",
      "u^2 v^2",
      "4u + 4v"
    ],
    answer: "A",
    explanation:
      "J=(2u)(2v)-(0)(0)=4uv."
  },

  {
    prompt: "Why is the absolute value of the Jacobian commonly used in double integrals?",
    options: [
      "Area must be represented as a nonnegative quantity",
      "The Jacobian is always negative",
      "It removes all derivatives from the integral",
      "It makes every transformation one-to-one"
    ],
    answer: "A",
    explanation:
      "The signed Jacobian records orientation, while area scaling uses its absolute value."
  },

  {
    prompt: "Under the polar transformation, what region corresponds to 0 <= r <= 2 and 0 <= theta <= pi?",
    options: [
      "The upper semicircle of radius 2",
      "The full circle of radius 2",
      "The right semicircle of radius 2",
      "A square of side length 2"
    ],
    answer: "A",
    explanation:
      "r ranges from 0 to 2 and theta ranges from 0 to pi, covering the upper half of the disk."
  },

  {
    prompt: "Using polar coordinates, what is the correct form of the integral for the area of a disk of radius a?",
    options: [
      "Integral from 0 to 2pi and 0 to a of r dr dtheta",
      "Integral from 0 to a and 0 to a of r dr dtheta",
      "Integral from 0 to pi and 0 to a of dr dtheta",
      "Integral from 0 to 2pi and 0 to a of r squared dr dtheta"
    ],
    answer: "A",
    explanation:
      "A full disk uses 0<=theta<=2pi and 0<=r<=a, with dA=r dr dtheta."
  },

  {
    prompt: "Evaluate the Jacobian magnitude for x = 3u + v and y = 2u - v.",
    options: [
      "5",
      "-5",
      "1",
      "6"
    ],
    answer: "A",
    explanation:
      "J=(3)(-1)-(1)(2)=-5, so |J|=5."
  },

  {
    prompt: "If a transformation has Jacobian determinant J = 0 at a point, what does this indicate locally?",
    options: [
      "The transformation is locally singular or loses area scaling there",
      "The transformation doubles area there",
      "The transformation must be a rotation",
      "The transformation has constant positive scaling"
    ],
    answer: "A",
    explanation:
      "A zero Jacobian determinant means the transformation is singular at that point and locally collapses area."
  },

  {
    prompt: "For x = r cos(theta) and y = r sin(theta), what is the absolute value of the Jacobian?",
    options: [
      "r",
      "1",
      "r squared",
      "cos(theta) + sin(theta)"
    ],
    answer: "A",
    explanation:
      "The determinant of the polar Jacobian matrix has magnitude r."
  },

  {
    prompt: "Which expression correctly converts a double integral from xy-coordinates to uv-coordinates?",
    options: [
      "Double integral over R of f(x(u,v), y(u,v)) times |J| du dv",
      "Double integral over R of f(x,y) du dv without a Jacobian",
      "Double integral over R of f(u,v) / |J| dx dy",
      "Double integral over R of f(x,y) J dx dy"
    ],
    answer: "A",
    explanation:
      "The change-of-variables formula includes the transformed function and the absolute Jacobian factor."
  },

  {
    prompt: "For x = u + 2v and y = 3u + 4v, what is the Jacobian determinant?",
    options: [
      "-2",
      "2",
      "10",
      "14"
    ],
    answer: "A",
    explanation:
      "J=(1)(4)-(2)(3)=4-6=-2."
  },

  {
    prompt: "For the transformation x = u and y = 2v, what happens to area?",
    options: [
      "Area is multiplied by 2",
      "Area is multiplied by 1/2",
      "Area is unchanged",
      "Area is multiplied by 4"
    ],
    answer: "A",
    explanation:
      "The Jacobian is J=(1)(2)=2, so dA=2 du dv."
  },

  {
    prompt: "Which condition is important when applying the standard change-of-variables formula on a region?",
    options: [
      "The transformation should be sufficiently smooth and one-to-one on the relevant region",
      "The Jacobian must always equal 1",
      "The transformation must always be linear",
      "The original region must always be a circle"
    ],
    answer: "A",
    explanation:
      "The standard formula requires appropriate smoothness and, on the region being transformed, suitable one-to-one behavior so the change of variables is valid."
  }
];
export const MV_SC_206_QUIZ = [
  

  {
    prompt: "What does the cross product r_u × r_v represent geometrically?",
    options: [
      "A vector normal to the surface",
      "A vector tangent to both parameter curves",
      "The position vector of the surface",
      "The curvature of the surface"
    ],
    answer: "A",
    explanation:
      "Both r_u and r_v are tangent vectors, so their cross product is perpendicular to the surface."
  },

  {
    prompt: "For a scalar function f defined on a surface S, which expression represents its surface integral?",
    options: [
      "Double integral over S of f dS",
      "Double integral over S of f dx",
      "Triple integral over S of f dV",
      "Line integral over S of f dt"
    ],
    answer: "A",
    explanation:
      "A scalar surface integral is written as ∬_S f dS."
  },

  {
    prompt: "For r(u,v) parametrizing a surface, which formula correctly converts a scalar surface integral to the parameter domain?",
    options: [
      "Double integral over R of f(r(u,v)) |r_u × r_v| du dv",
      "Double integral over R of f(r(u,v)) du dv",
      "Double integral over R of f(r(u,v)) |r_u · r_v| du dv",
      "Double integral over R of f(r(u,v)) |r_u + r_v| du dv"
    ],
    answer: "A",
    explanation:
      "The surface-area scaling factor is |r_u × r_v|."
  },

  {
    prompt: "If r(u,v) = <u,v,0>, what is |r_u × r_v|?",
    options: [
      "1",
      "0",
      "2",
      "sqrt(2)"
    ],
    answer: "A",
    explanation:
      "r_u=<1,0,0> and r_v=<0,1,0>. Their cross product is <0,0,1>, whose magnitude is 1."
  },

  {
    prompt: "For r(u,v) = <u,v,u+v>, what is r_u?",
    options: [
      "<1,0,1>",
      "<0,1,1>",
      "<u,v,1>",
      "<1,1,0>"
    ],
    answer: "A",
    explanation:
      "Differentiate r with respect to u while holding v constant."
  },

  {
    prompt: "For r(u,v) = <u,v,u+v>, what is r_v?",
    options: [
      "<0,1,1>",
      "<1,0,1>",
      "<u,v,1>",
      "<1,1,0>"
    ],
    answer: "A",
    explanation:
      "Differentiating with respect to v gives r_v=<0,1,1>."
  },

  {
    prompt: "For r(u,v) = <u,v,u+v>, what is r_u × r_v?",
    options: [
      "<-1,-1,1>",
      "<1,1,-1>",
      "<1,-1,1>",
      "<-1,1,1>"
    ],
    answer: "A",
    explanation:
      "r_u=<1,0,1> and r_v=<0,1,1>. Their cross product is <-1,-1,1>."
  },

  {
    prompt: "What is the magnitude of <-1,-1,1>?",
    options: [
      "sqrt(3)",
      "3",
      "1",
      "sqrt(2)"
    ],
    answer: "A",
    explanation:
      "The magnitude is sqrt((-1)^2+(-1)^2+1^2)=sqrt(3)."
  },

  {
    prompt: "What does the orientation of r_u × r_v determine in a flux integral?",
    options: [
      "The direction of the chosen surface normal",
      "The area of the parameter domain only",
      "The curvature of the surface",
      "The speed of a particle"
    ],
    answer: "A",
    explanation:
      "The order of the cross product determines the orientation of the normal vector."
  },

  {
    prompt: "Which expression represents the flux of a vector field F through an oriented surface S?",
    options: [
      "Double integral over S of F dot n dS",
      "Double integral over S of F dS",
      "Triple integral over S of F dV",
      "Line integral over S of F dt"
    ],
    answer: "A",
    explanation:
      "Flux measures the component of the vector field normal to the surface: ∬_S F · n dS."
  },

  {
    prompt: "For a parametrized surface, which formula can be used directly for an oriented flux integral?",
    options: [
      "Double integral over R of F(r(u,v)) dot (r_u × r_v) du dv",
      "Double integral over R of F(r(u,v)) |r_u × r_v| du dv",
      "Double integral over R of F(r(u,v)) dot (r_u + r_v) du dv",
      "Double integral over R of F(r(u,v)) du dv"
    ],
    answer: "A",
    explanation:
      "The vector r_u × r_v contains both the surface-area factor and the chosen orientation."
  },

  {
    prompt: "If the orientation of a surface is reversed, what happens to the flux integral?",
    options: [
      "Its sign changes",
      "It always becomes zero",
      "Its magnitude doubles",
      "It remains unchanged"
    ],
    answer: "A",
    explanation:
      "Reversing orientation changes n to -n, so F · n changes sign."
  },

  {
    prompt: "If F = <1,0,0> and the unit normal is n = <1,0,0>, what is F · n?",
    options: [
      "1",
      "0",
      "-1",
      "2"
    ],
    answer: "A",
    explanation:
      "The dot product is (1)(1)+(0)(0)+(0)(0)=1."
  },

  {
    prompt: "If F = <1,0,0> and n = <0,1,0>, what is F · n?",
    options: [
      "0",
      "1",
      "-1",
      "sqrt(2)"
    ],
    answer: "A",
    explanation:
      "The vectors are perpendicular, so their dot product is zero."
  },

  {
    prompt: "For the plane z = 0 with upward orientation, which unit normal vector should be used?",
    options: [
      "<0,0,1>",
      "<0,0,-1>",
      "<1,0,0>",
      "<0,1,0>"
    ],
    answer: "A",
    explanation:
      "The upward direction on the xy-plane corresponds to the positive z-direction."
  },

  {
    prompt: "What is the surface area of the parametrized plane r(u,v) = <u,v,0> over 0 <= u <= 2 and 0 <= v <= 3?",
    options: [
      "6",
      "5",
      "12",
      "3"
    ],
    answer: "A",
    explanation:
      "The surface factor is 1, so the area equals the parameter-domain area 2 times 3 = 6."
  },

  {
    prompt: "For a graph z = g(x,y), what is one common upward-oriented surface-area element?",
    options: [
      "dS = sqrt(1 + g_x^2 + g_y^2) dx dy",
      "dS = (g_x + g_y) dx dy",
      "dS = sqrt(g_x^2 + g_y^2) dx dy",
      "dS = dx dy / sqrt(1 + g_x^2 + g_y^2)"
    ],
    answer: "A",
    explanation:
      "For z=g(x,y), the surface-area element is sqrt(1+g_x^2+g_y^2) dx dy."
  },

  {
    prompt: "For the plane z = 2x + 3y, what is the magnitude of the upward-oriented non-unit normal vector obtained from r(x,y) = <x,y,2x+3y>?",
    options: [
      "sqrt(14)",
      "5",
      "sqrt(5)",
      "14"
    ],
    answer: "A",
    explanation:
      "r_x=<1,0,2> and r_y=<0,1,3>. Their cross product is <-2,-3,1>, whose magnitude is sqrt(4+9+1)=sqrt(14)."
  },

  {
    prompt: "If a vector field is tangent to a surface at every point, what is its flux through that surface?",
    options: [
      "0",
      "1",
      "The surface area",
      "It must be infinite"
    ],
    answer: "A",
    explanation:
      "A tangent vector field has zero normal component, so F · n = 0 and the flux is zero."
  },

  {
    prompt: "Which quantity determines the local area scaling when parametrizing a surface?",
    options: [
      "|r_u × r_v|",
      "|r_u + r_v|",
      "|r_u · r_v|",
      "|r_u - r_v|"
    ],
    answer: "A",
    explanation:
      "The magnitude of the cross product of the two tangent vectors gives the local surface-area scaling."
  }
];
export const MV_SC_207_QUIZ = [
  {
    prompt: "What does the Extreme Value Theorem guarantee for a continuous function on a closed and bounded domain?",
    options: [
      "The function attains both a global maximum and a global minimum",
      "The function has no critical points",
      "The function must be constant",
      "The function has only a local maximum"
    ],
    answer: "A",
    explanation:
      "A continuous function on a closed and bounded domain attains both its global maximum and global minimum."
  },

  {
    prompt: "When finding global extrema on a bounded region, which points must be considered?",
    options: [
      "Interior critical points and boundary candidates",
      "Only interior critical points",
      "Only boundary points",
      "Only points where the function equals zero"
    ],
    answer: "A",
    explanation:
      "Global extrema can occur at interior critical points or somewhere on the boundary."
  },

  {
    prompt: "For an interior critical point of f(x,y), which condition is typically required?",
    options: [
      "f_x = 0 and f_y = 0",
      "f_x = 1 and f_y = 1",
      "f_x = f_y",
      "f_x + f_y = 1"
    ],
    answer: "A",
    explanation:
      "For a differentiable function, an interior critical point satisfies both first partial derivatives equal to zero."
  },

  {
    prompt: "Which of the following is a possible location for a global maximum on a closed bounded region?",
    options: [
      "An interior critical point or a boundary point",
      "Only the origin",
      "Only an interior point",
      "Only a point where both coordinates are zero"
    ],
    answer: "A",
    explanation:
      "A global maximum may occur either in the interior or on the boundary."
  },

  {
    prompt: "Why must the boundary be examined when finding global extrema on a closed region?",
    options: [
      "An absolute maximum or minimum can occur on the boundary",
      "The boundary is always where the function is zero",
      "The gradient is always undefined on the boundary",
      "Interior critical points cannot exist"
    ],
    answer: "A",
    explanation:
      "Checking only interior critical points can miss extrema that occur on the boundary."
  },

  {
    prompt: "For f(x,y) = x^2 + y^2 on the disk x^2 + y^2 <= 4, where is the global minimum?",
    options: [
      "(0,0)",
      "(2,0)",
      "(0,2)",
      "Every point on the boundary"
    ],
    answer: "A",
    explanation:
      "f(x,y) is nonnegative and equals zero only at (0,0), so the global minimum is 0 at the origin."
  },

  {
    prompt: "For f(x,y) = x^2 + y^2 on the disk x^2 + y^2 <= 4, what is the global maximum value?",
    options: [
      "4",
      "2",
      "8",
      "0"
    ],
    answer: "A",
    explanation:
      "On the boundary x^2+y^2=4, the function equals 4, which is the largest possible value."
  },

  {
    prompt: "What is the first step when searching for interior critical points of a differentiable function f(x,y)?",
    options: [
      "Solve f_x = 0 and f_y = 0",
      "Set f = 0",
      "Set x = y",
      "Differentiate only with respect to x"
    ],
    answer: "A",
    explanation:
      "Interior critical points are found by solving the simultaneous equations f_x=0 and f_y=0."
  },

  {
    prompt: "Suppose f(x,y) has an interior critical point at (a,b). What should be done next when finding global extrema on a closed bounded domain?",
    options: [
      "Evaluate f at the critical point and also analyze the boundary",
      "Ignore the boundary",
      "Assume the point is automatically the global maximum",
      "Assume the point is automatically the global minimum"
    ],
    answer: "A",
    explanation:
      "A critical point is only a candidate. Boundary candidates must also be found and compared."
  },

  {
    prompt: "For f(x,y) = x + y on the rectangle 0 <= x <= 2 and 0 <= y <= 3, what is the global maximum value?",
    options: [
      "5",
      "3",
      "2",
      "6"
    ],
    answer: "A",
    explanation:
      "Both coefficients are positive, so the maximum occurs at (2,3): f(2,3)=5."
  },

  {
    prompt: "For f(x,y) = x + y on the rectangle 0 <= x <= 2 and 0 <= y <= 3, what is the global minimum value?",
    options: [
      "0",
      "2",
      "3",
      "5"
    ],
    answer: "A",
    explanation:
      "The minimum occurs at (0,0), where f(0,0)=0."
  },

  {
    prompt: "Which method is commonly used to find extrema of f(x,y) subject to a smooth constraint g(x,y)=c?",
    options: [
      "Lagrange multipliers",
      "Integration by parts",
      "The quotient rule",
      "The chain rule only"
    ],
    answer: "A",
    explanation:
      "Lagrange multipliers provide a systematic method for finding constrained extrema."
  },

  {
    prompt: "In the Lagrange multiplier method, which equation represents the main gradient condition?",
    options: [
      "∇f = λ∇g",
      "∇f = ∇g",
      "∇f = λg",
      "f = λ∇g"
    ],
    answer: "A",
    explanation:
      "At a constrained extremum, the gradients satisfy ∇f=λ∇g."
  },

  {
    prompt: "For the constraint g(x,y)=c, what additional equation must be included with ∇f = λ∇g?",
    options: [
      "g(x,y) = c",
      "f(x,y) = 0",
      "λ = 0",
      "x = y"
    ],
    answer: "A",
    explanation:
      "The constraint itself must be satisfied, so g(x,y)=c is included."
  },

  {
    prompt: "For f(x,y)=x^2+y^2 subject to x^2+y^2=9, what is the constrained value of f?",
    options: [
      "9",
      "3",
      "18",
      "0"
    ],
    answer: "A",
    explanation:
      "The constraint directly gives x^2+y^2=9, so f=9 everywhere on the constraint."
  },

  {
    prompt: "If a function is continuous on a closed and bounded region, why is comparing candidate values sufficient to identify global extrema?",
    options: [
      "The Extreme Value Theorem guarantees that global extrema exist",
      "Every candidate is automatically a maximum",
      "The boundary can be ignored",
      "The function must be linear"
    ],
    answer: "A",
    explanation:
      "Because global extrema exist, evaluating all relevant candidates and comparing their values identifies the largest and smallest values."
  },

  {
    prompt: "For f(x,y)=x^2+y^2 on the circle x^2+y^2=9, which statement is correct?",
    options: [
      "Every point on the circle gives the same function value",
      "Only (3,0) gives the maximum",
      "Only (0,3) gives the minimum",
      "The function has no extrema"
    ],
    answer: "A",
    explanation:
      "The constraint forces x^2+y^2=9, so f=9 at every point on the circle."
  },

  {
    prompt: "When analyzing a boundary given by x^2+y^2=R^2, which substitution can simplify the problem?",
    options: [
      "Parameterize the boundary using x=R cos(t), y=R sin(t)",
      "Set x=R and y=R",
      "Set x=y=0",
      "Replace both variables with R^2"
    ],
    answer: "A",
    explanation:
      "The standard trigonometric parametrization traces the circle exactly once as t varies over a full period."
  },

  {
    prompt: "Suppose all candidate points have been found for a global-extrema problem. What should be done?",
    options: [
      "Evaluate the original function at every candidate and compare the values",
      "Choose the first candidate",
      "Choose the candidate with the largest x-coordinate",
      "Choose the candidate closest to the origin"
    ],
    answer: "A",
    explanation:
      "The global maximum is the largest candidate value and the global minimum is the smallest candidate value."
  },

  {
    prompt: "Which statement best summarizes the global-extrema procedure on a closed bounded domain?",
    options: [
      "Find interior critical points, analyze the boundary, evaluate all candidates, and compare",
      "Find only the zeros of the function",
      "Analyze only the gradient at the origin",
      "Check only the four corners for every region"
    ],
    answer: "A",
    explanation:
      "The complete method considers both interior and boundary candidates before comparing their function values."
  }
];