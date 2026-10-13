export const MV_MULTIVARIABLE_TAYLOR_QUIZ = [
  {
    id: "mvt-01",
    prompt:
      "What is the main purpose of a multivariable Taylor approximation?",
    options: [
      "To replace a function locally by a polynomial",
      "To make every function globally polynomial",
      "To eliminate all partial derivatives",
      "To convert a surface into a line"
    ],
    answer: "A",
    explanation:
      "A Taylor approximation replaces a sufficiently smooth function near a chosen point by a polynomial built from its derivatives at that point."
  },
  {
    id: "mvt-02",
    prompt:
      "What information determines the first-order Taylor approximation of f(x,y) near (a,b)?",
    options: [
      "Only f(a,b)",
      "f(a,b) and the gradient at (a,b)",
      "Only the Hessian matrix",
      "Only second derivatives"
    ],
    answer: "B",
    explanation:
      "The linear approximation uses the function value and the first derivatives, collected in the gradient."
  },
  {
    id: "mvt-03",
    prompt:
      "Which expression is the first-order approximation of f(x,y) near (a,b)?",
    options: [
      "f(a,b) + ∇f(a,b)·h",
      "f(a,b) + h^T H(a,b) h",
      "f(a,b) + 1/2 ∇f(a,b)",
      "H(a,b)h"
    ],
    answer: "A",
    explanation:
      "With h = ⟨x-a, y-b⟩, the first-order Taylor approximation is f(a,b) + ∇f(a,b)·h."
  },
  {
    id: "mvt-04",
    prompt:
      "What matrix contains the second partial derivatives of f?",
    options: [
      "Jacobian matrix",
      "Hessian matrix",
      "Identity matrix",
      "Rotation matrix"
    ],
    answer: "B",
    explanation:
      "The Hessian matrix contains the second-order partial derivatives."
  },
  {
    id: "mvt-05",
    prompt:
      "For h = ⟨x-a, y-b⟩, what quadratic term appears in the second-order Taylor approximation?",
    options: [
      "1/2 h^T H(a,b) h",
      "h^T ∇f(a,b)",
      "H(a,b)h",
      "1/2 ∇f(a,b)"
    ],
    answer: "A",
    explanation:
      "The second-order contribution is one half of the quadratic form h^T H h."
  },
  {
    id: "mvt-06",
    prompt:
      "What is the Taylor approximation of f(x,y)=x²+y² about (1,1) through second order?",
    options: [
      "2 + 2(x-1) + 2(y-1) + (x-1)² + (y-1)²",
      "2 + (x-1) + (y-1)",
      "x²+y²",
      "2 + 2xy"
    ],
    answer: "A",
    explanation:
      "At (1,1), f=2, ∇f=⟨2,2⟩, and the Hessian is diag(2,2). The quadratic term becomes (x-1)²+(y-1)²."
  },
  {
    id: "mvt-07",
    prompt:
      "If the Hessian is zero at a point, what happens to the second-order Taylor term there?",
    options: [
      "It vanishes",
      "It becomes the gradient",
      "It becomes the function value",
      "It becomes infinite"
    ],
    answer: "A",
    explanation:
      "If H(a,b) is the zero matrix, then h^T H(a,b) h = 0."
  },
  {
    id: "mvt-08",
    prompt:
      "Which statement about the first-order approximation is correct?",
    options: [
      "It uses only second derivatives",
      "It gives the tangent plane in two variables",
      "It is always exact",
      "It is valid only at the origin"
    ],
    answer: "B",
    explanation:
      "For a function of two variables, the first-order Taylor approximation is the tangent-plane approximation."
  },
  {
    id: "mvt-09",
    prompt:
      "Let f(x,y)=e^{x+y}. At (0,0), what is the first-order Taylor approximation?",
    options: [
      "1 + x + y",
      "x + y",
      "1 + xy",
      "e^{xy}"
    ],
    answer: "A",
    explanation:
      "f(0,0)=1 and ∇f(0,0)=⟨1,1⟩, so the linear approximation is 1+x+y."
  },
  {
    id: "mvt-10",
    prompt:
      "For f(x,y)=x²+3xy+y², what is f_xy?",
    options: [
      "0",
      "1",
      "3",
      "6"
    ],
    answer: "C",
    explanation:
      "Differentiating first with respect to x gives 2x+3y, then with respect to y gives 3."
  },
  {
    id: "mvt-11",
    prompt:
      "For a smooth scalar field, which equality usually holds?",
    options: [
      "f_xy = -f_yx",
      "f_xy = f_yx",
      "f_xy = 0",
      "f_xy = 1"
    ],
    answer: "B",
    explanation:
      "Under the usual smoothness conditions, Clairaut's theorem gives equality of the mixed partial derivatives."
  },
  {
    id: "mvt-12",
    prompt:
      "For f(x,y)=sin(x)cos(y), what is the first-order approximation near (0,0)?",
    options: [
      "x",
      "y",
      "x+y",
      "1+x"
    ],
    answer: "A",
    explanation:
      "f(0,0)=0, f_x(0,0)=1, and f_y(0,0)=0, so the first-order approximation is x."
  },
  {
    id: "mvt-13",
    prompt:
      "Why can a second-order approximation be more accurate than a first-order approximation?",
    options: [
      "It includes curvature information through second derivatives",
      "It ignores the gradient",
      "It removes all nonlinear behavior",
      "It is always exact"
    ],
    answer: "A",
    explanation:
      "The Hessian captures local curvature, allowing the quadratic approximation to model nonlinear behavior better."
  },
  {
    id: "mvt-14",
    prompt:
      "What geometric object does a first-order Taylor approximation define for f(x,y)?",
    options: [
      "A tangent plane",
      "A tangent circle",
      "A sphere",
      "A normal line"
    ],
    answer: "A",
    explanation:
      "The first-order approximation is the equation of the tangent plane to the graph z=f(x,y)."
  },
  {
    id: "mvt-15",
    prompt:
      "Which quantity measures the size of the displacement from the expansion point?",
    options: [
      "||h||",
      "det(H)",
      "tr(H)",
      "f(a,b)"
    ],
    answer: "A",
    explanation:
      "The norm ||h|| measures how far the evaluation point is from the Taylor expansion point."
  },
  {
    id: "mvt-16",
    prompt:
      "What is the typical remainder-order statement for a second-order approximation?",
    options: [
      "The error is generally of order ||h||³ near the expansion point",
      "The error is always zero",
      "The error is of order ||h||",
      "The error is independent of h"
    ],
    answer: "A",
    explanation:
      "For a sufficiently smooth function, omitting third and higher terms gives a local remainder that is typically O(||h||³)."
  },
  {
    id: "mvt-17",
    prompt:
      "For f(x,y)=x²+y² near (0,0), what is the second-order Taylor polynomial?",
    options: [
      "0",
      "x+y",
      "x²+y²",
      "1+x²+y²"
    ],
    answer: "C",
    explanation:
      "The function is already a quadratic polynomial, so its Taylor polynomial through second order is exactly x²+y²."
  },
  {
    id: "mvt-18",
    prompt:
      "How does the Hessian enter the multivariable Taylor formula?",
    options: [
      "Through the quadratic form h^T H h",
      "Through det(h)",
      "Through ||∇f|| only",
      "It does not enter"
    ],
    answer: "A",
    explanation:
      "The Hessian enters the second-order approximation through the quadratic form h^T H h, multiplied by 1/2."
  },
  {
    id: "mvt-19",
    prompt:
      "For f(x,y)=ln(1+x+y), what is the first-order approximation at (0,0)?",
    options: [
      "x+y",
      "1+x+y",
      "ln(x+y)",
      "xy"
    ],
    answer: "A",
    explanation:
      "f(0,0)=0 and both first derivatives equal 1 at the origin, so the linear approximation is x+y."
  },
  {
    id: "mvt-20",
    prompt:
      "Which workflow is best for constructing a second-order Taylor approximation?",
    options: [
      "Find f, the gradient, the Hessian, then substitute the displacement vector",
      "Find only f and integrate",
      "Find only the Hessian and ignore f",
      "Choose a polynomial without derivatives"
    ],
    answer: "A",
    explanation:
      "A reliable procedure is to compute the function value, gradient, Hessian, and then assemble the Taylor formula using h."
  }
];