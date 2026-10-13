export const MV_IMPLICIT_FUNCTION_THEOREM_QUIZ = [
  {
    id: "ift-01",
    prompt:
      "What is the main purpose of the Implicit Function Theorem?",
    options: [
      "To determine when an equation can locally define one variable as a function of others",
      "To solve every nonlinear equation globally",
      "To eliminate all partial derivatives",
      "To convert every implicit equation into a polynomial"
    ],
    answer: "A",
    explanation:
      "The Implicit Function Theorem gives conditions under which an equation F(x,y)=0 can locally be solved for one variable as a differentiable function of the other."
  },
  {
    id: "ift-02",
    prompt:
      "For F(x,y)=0, which partial derivative is important when solving locally for y as a function of x?",
    options: [
      "F_x",
      "F_y",
      "F_x + F_y",
      "F_xF_y"
    ],
    answer: "B",
    explanation:
      "To solve locally for y=g(x), the standard condition is F_y(a,b) ≠ 0."
  },
  {
    id: "ift-03",
    prompt:
      "If F_y(a,b) ≠ 0 and F(a,b)=0, what can usually be concluded?",
    options: [
      "There is a local differentiable function y=g(x) with F(x,g(x))=0",
      "The entire solution set is a straight line",
      "F must be linear",
      "There is no solution nearby"
    ],
    answer: "A",
    explanation:
      "The theorem guarantees a unique local differentiable function y=g(x) through the point under the required smoothness and nonzero-partial conditions."
  },
  {
    id: "ift-04",
    prompt:
      "If y=g(x) is defined implicitly by F(x,y)=0, what equation gives g'(x)?",
    options: [
      "g'(x)=F_x/F_y",
      "g'(x)=-F_x/F_y",
      "g'(x)=F_y/F_x",
      "g'(x)=F_xF_y"
    ],
    answer: "B",
    explanation:
      "Differentiating F(x,g(x))=0 gives F_x + F_y g'(x)=0, so g'(x)=-F_x/F_y."
  },
  {
    id: "ift-05",
    prompt:
      "For x²+y²=1 near (0,1), can y be written locally as a function of x?",
    options: [
      "Yes, because F_y(0,1)=2 ≠ 0",
      "No, because F_x(0,1)=0",
      "No, because the circle has no tangent",
      "Yes, only if x=0"
    ],
    answer: "A",
    explanation:
      "With F=x²+y²-1, we have F_y=2y, so F_y(0,1)=2. Therefore y can locally be expressed as a differentiable function of x."
  },
  {
    id: "ift-06",
    prompt:
      "At a point where F_y=0, what does the standard implicit-function condition for solving y=g(x) say?",
    options: [
      "The theorem's usual hypothesis fails",
      "A global function must exist",
      "The function becomes linear",
      "The equation has no solutions"
    ],
    answer: "A",
    explanation:
      "The standard theorem requires F_y ≠ 0 when solving locally for y as a function of x."
  },
  {
    id: "ift-07",
    prompt:
      "For F(x,y)=x+y-3, what is dy/dx along F=0?",
    options: ["-1", "0", "1", "3"],
    answer: "A",
    explanation:
      "F_x=1 and F_y=1, so dy/dx=-F_x/F_y=-1."
  },
  {
    id: "ift-08",
    prompt:
      "For F(x,y)=x²+y²-4, what is dy/dx at (0,2)?",
    options: [
      "0",
      "1",
      "-1",
      "Undefined"
    ],
    answer: "A",
    explanation:
      "F_x=2x=0 and F_y=2y=4 at (0,2), giving dy/dx=0."
  },
  {
    id: "ift-09",
    prompt:
      "What geometric object does a regular level set F(x,y)=0 represent locally in the plane?",
    options: [
      "A smooth curve",
      "A volume",
      "A scalar",
      "A matrix"
    ],
    answer: "A",
    explanation:
      "When the gradient is nonzero, the level set is locally a smooth one-dimensional curve."
  },
  {
    id: "ift-10",
    prompt:
      "What is the geometric significance of ∇F on the level curve F(x,y)=c?",
    options: [
      "It is tangent to the curve",
      "It is normal to the curve",
      "It is always zero",
      "It gives the curvature directly"
    ],
    answer: "B",
    explanation:
      "The gradient is perpendicular to level sets, so ∇F provides a normal vector to the implicit curve."
  },
  {
    id: "ift-11",
    prompt:
      "For F(x,y,z)=0, what nonzero partial derivative allows one to solve locally for z as a function of x and y?",
    options: [
      "F_x",
      "F_y",
      "F_z",
      "F_x+F_y"
    ],
    answer: "C",
    explanation:
      "To obtain z=g(x,y), the standard condition is F_z(a,b,c) ≠ 0."
  },
  {
    id: "ift-12",
    prompt:
      "If z=g(x,y) satisfies F(x,y,g(x,y))=0, what is g_x?",
    options: [
      "F_x/F_z",
      "-F_x/F_z",
      "F_z/F_x",
      "F_xF_z"
    ],
    answer: "B",
    explanation:
      "Differentiating with respect to x gives F_x + F_z g_x=0, hence g_x=-F_x/F_z."
  },
  {
    id: "ift-13",
    prompt:
      "If z=g(x,y) satisfies F(x,y,z)=0, what is g_y?",
    options: [
      "-F_y/F_z",
      "F_y/F_z",
      "-F_z/F_y",
      "F_yF_z"
    ],
    answer: "A",
    explanation:
      "Differentiating with respect to y gives F_y + F_z g_y=0, so g_y=-F_y/F_z."
  },
  {
    id: "ift-14",
    prompt:
      "For F(x,y,z)=x²+y²+z²-9, can the sphere be solved locally for z near (0,0,3)?",
    options: [
      "Yes, because F_z(0,0,3)=6 ≠ 0",
      "No, because the sphere is closed",
      "No, because F_x=0",
      "Only globally"
    ],
    answer: "A",
    explanation:
      "Since F_z=2z and F_z(0,0,3)=6, the theorem gives a local differentiable function z=g(x,y)."
  },
  {
    id: "ift-15",
    prompt:
      "What happens geometrically at a point where ∇F=0 on a level set?",
    options: [
      "The usual regular-level-set conclusion may fail",
      "The level set must be a plane",
      "The point is automatically a maximum",
      "The equation has no nearby points"
    ],
    answer: "A",
    explanation:
      "If the gradient vanishes, regularity can fail and the level set may have a singular point or another nonstandard local structure."
  },
  {
    id: "ift-16",
    prompt:
      "Which condition is most important when checking whether y can be solved as y=g(x)?",
    options: [
      "F_y(a,b) ≠ 0",
      "F_x(a,b) = 0",
      "F(a,b) > 0",
      "F_x(a,b) = F_y(a,b)"
    ],
    answer: "A",
    explanation:
      "The standard hypothesis for solving for y is that the partial derivative with respect to y is nonzero."
  },
  {
    id: "ift-17",
    prompt:
      "For F(x,y)=x²+xy+y²-7, what are F_x and F_y?",
    options: [
      "F_x=2x+y, F_y=x+2y",
      "F_x=x+y, F_y=2x+y",
      "F_x=2x, F_y=2y",
      "F_x=y, F_y=x"
    ],
    answer: "A",
    explanation:
      "Differentiate term by term: F_x=2x+y and F_y=x+2y."
  },
  {
    id: "ift-18",
    prompt:
      "At a point where F_y ≠ 0, which formula gives the tangent slope of the implicit curve F(x,y)=0?",
    options: [
      "dy/dx=-F_x/F_y",
      "dy/dx=F_x/F_y",
      "dy/dx=F_x+F_y",
      "dy/dx=F_y/F_x"
    ],
    answer: "A",
    explanation:
      "Implicit differentiation of F(x,y)=0 gives F_x+F_y(dy/dx)=0."
  },
  {
    id: "ift-19",
    prompt:
      "What does the Implicit Function Theorem guarantee locally rather than globally?",
    options: [
      "A differentiable representation and local uniqueness",
      "A formula valid for the entire domain",
      "A polynomial representation",
      "A constant solution"
    ],
    answer: "A",
    explanation:
      "The theorem is a local result: it guarantees a nearby differentiable function and local uniqueness under its hypotheses."
  },
  {
    id: "ift-20",
    prompt:
      "What is the best workflow for an Implicit Function Theorem problem?",
    options: [
      "Verify the point lies on the level set, identify the variable to solve for, check the corresponding partial derivative is nonzero, then use implicit differentiation",
      "Differentiate first without checking the point",
      "Assume every variable can always be solved globally",
      "Only calculate the function value"
    ],
    answer: "A",
    explanation:
      "A reliable approach is to verify F(a,b)=0, choose the dependent variable, check the relevant partial derivative is nonzero, then construct derivatives or a local representation."
  }
];