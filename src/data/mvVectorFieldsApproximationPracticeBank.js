export const MV_VECTOR_FIELDS_APPROXIMATION_PRACTICE_BANK = [
  {
    "id": "mvc-vfa-e-001",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "A vector potential A for a vector field F satisfies which equation?",
    "options": [
      "div A = F",
      "curl A = F",
      "grad A = F",
      "laplacian A = F"
    ],
    "correctAnswer": 1,
    "explanation": "By definition, curl A = F."
  },
  {
    "id": "mvc-vfa-e-002",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "If F = curl A, what is div F?",
    "options": [
      "1",
      "-1",
      "0",
      "It depends on A"
    ],
    "correctAnswer": 2,
    "explanation": "The divergence of a curl is zero."
  },
  {
    "id": "mvc-vfa-e-003",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "For a smooth scalar field phi, curl(grad phi) is:",
    "options": [
      "grad phi",
      "1",
      "0",
      "phi"
    ],
    "correctAnswer": 2,
    "explanation": "The curl of a gradient is zero."
  },
  {
    "id": "mvc-vfa-e-004",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "For A = <0,0,xy>, what is curl A?",
    "options": [
      "<x,-y,0>",
      "<y,-x,0>",
      "<0,x,y>",
      "<x,y,0>"
    ],
    "correctAnswer": 0,
    "explanation": "curl A = <d(xy)/dy,-d(xy)/dx,0> = <x,-y,0>."
  },
  {
    "id": "mvc-vfa-e-005",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "For A = <0,0,x>, what is curl A?",
    "options": [
      "<0,1,0>",
      "<0,-1,0>",
      "<1,0,0>",
      "<0,0,1>"
    ],
    "correctAnswer": 1,
    "explanation": "The second curl component is -d(x)/dx = -1."
  },
  {
    "id": "mvc-vfa-e-006",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "For A = <0,0,y>, what is curl A?",
    "options": [
      "<1,0,0>",
      "<-1,0,0>",
      "<0,1,0>",
      "<0,0,1>"
    ],
    "correctAnswer": 0,
    "explanation": "The first curl component is d(y)/dy = 1."
  },
  {
    "id": "mvc-vfa-e-007",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "What is the curl of a constant vector field?",
    "options": [
      "The zero vector",
      "The constant vector",
      "The unit vector",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "All spatial derivatives are zero."
  },
  {
    "id": "mvc-vfa-e-008",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "If A = grad phi, then curl A equals:",
    "options": [
      "A",
      "phi",
      "0",
      "1"
    ],
    "correctAnswer": 2,
    "explanation": "curl(grad phi)=0."
  },
  {
    "id": "mvc-vfa-e-009",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "If a smooth vector field F has nonzero divergence at a point, can F equal curl A near that point?",
    "options": [
      "Yes",
      "Only if A is constant",
      "No",
      "Only in two dimensions"
    ],
    "correctAnswer": 2,
    "explanation": "Every curl has zero divergence."
  },
  {
    "id": "mvc-vfa-e-010",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "If A is a vector potential for F and psi is smooth, which is also a vector potential?",
    "options": [
      "A + grad psi",
      "A + psi",
      "A + F",
      "psi A"
    ],
    "correctAnswer": 0,
    "explanation": "curl(A+grad psi)=curl A because curl(grad psi)=0."
  },
  {
    "id": "mvc-vfa-e-011",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "Why is a vector potential generally not unique?",
    "options": [
      "Adding a gradient leaves the curl unchanged",
      "Every potential is constant",
      "Every field has one unique potential",
      "Curl has no algebraic properties"
    ],
    "correctAnswer": 0,
    "explanation": "Different potentials can have the same curl."
  },
  {
    "id": "mvc-vfa-e-012",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "A vector potential for F = <0,0,1> is:",
    "options": [
      "<0,x,0>",
      "<x,0,0>",
      "<0,0,x>",
      "<y,0,0>"
    ],
    "correctAnswer": 0,
    "explanation": "curl<0,x,0>=<0,0,1>."
  },
  {
    "id": "mvc-vfa-e-013",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "A vector potential for F = <1,0,0> is:",
    "options": [
      "<0,0,y>",
      "<0,y,0>",
      "<y,0,0>",
      "<0,0,-y>"
    ],
    "correctAnswer": 0,
    "explanation": "curl<0,0,y>=<1,0,0>."
  },
  {
    "id": "mvc-vfa-e-014",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "A vector potential for F = <0,1,0> is:",
    "options": [
      "<0,0,-x>",
      "<0,0,x>",
      "<x,0,0>",
      "<0,x,0>"
    ],
    "correctAnswer": 0,
    "explanation": "curl<0,0,-x>=<0,1,0>."
  },
  {
    "id": "mvc-vfa-e-015",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "For A = <y,z,x>, what is curl A?",
    "options": [
      "<1,1,1>",
      "<-1,-1,-1>",
      "<0,0,0>",
      "<y,z,x>"
    ],
    "correctAnswer": 0,
    "explanation": "Each curl component equals 1."
  },
  {
    "id": "mvc-vfa-e-016",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "For A = <z,x,y>, what is curl A?",
    "options": [
      "<1,1,1>",
      "<-1,-1,-1>",
      "<0,0,0>",
      "<z,x,y>"
    ],
    "correctAnswer": 0,
    "explanation": "Each curl component equals 1."
  },
  {
    "id": "mvc-vfa-e-017",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "Which field cannot be a curl because its divergence is nonzero?",
    "options": [
      "<y,-x,0>",
      "<x,y,z>",
      "<0,0,1>",
      "<1,0,0>"
    ],
    "correctAnswer": 1,
    "explanation": "div<x,y,z>=3, but every curl has divergence zero."
  },
  {
    "id": "mvc-vfa-e-018",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "If two vector potentials differ by grad psi, their curls are:",
    "options": [
      "Different",
      "Equal",
      "Opposite",
      "Undefined"
    ],
    "correctAnswer": 1,
    "explanation": "The curl of the difference is zero."
  },
  {
    "id": "mvc-vfa-e-019",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "In three dimensions, curl describes local:",
    "options": [
      "Rotation",
      "Temperature",
      "Volume only",
      "Density"
    ],
    "correctAnswer": 0,
    "explanation": "Curl measures local rotational tendency."
  },
  {
    "id": "mvc-vfa-e-020",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "For a smooth vector field A, div(curl A) is:",
    "options": [
      "1",
      "A",
      "0",
      "Undefined"
    ],
    "correctAnswer": 2,
    "explanation": "The divergence of a curl is identically zero."
  },
  {
    "id": "mvc-vfa-e-021",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "For A = <x,y,z>, curl A is:",
    "options": [
      "<1,1,1>",
      "<x,y,z>",
      "<0,0,0>",
      "<-1,-1,-1>"
    ],
    "correctAnswer": 2,
    "explanation": "All relevant cross-derivatives vanish."
  },
  {
    "id": "mvc-vfa-e-022",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "Which field has zero divergence?",
    "options": [
      "<x,y,z>",
      "<x,-y,0>",
      "<x,y,1>",
      "<2x,3y,4z>"
    ],
    "correctAnswer": 1,
    "explanation": "1-1+0=0."
  },
  {
    "id": "mvc-vfa-e-023",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "For F = <y,-x,0>, a vector potential is:",
    "options": [
      "<0,0,(x^2+y^2)/2>",
      "<0,0,-(x^2+y^2)/2>",
      "<x,y,0>",
      "<0,x,0>"
    ],
    "correctAnswer": 0,
    "explanation": "Its curl is <y,-x,0>."
  },
  {
    "id": "mvc-vfa-e-024",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "If F = curl A, which statement must hold?",
    "options": [
      "div F = 0",
      "curl F = 0",
      "grad F = 0",
      "F must be constant"
    ],
    "correctAnswer": 0,
    "explanation": "The divergence of a curl is zero."
  },
  {
    "id": "mvc-vfa-e-025",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Vector Potentials",
    "difficulty": "Easy",
    "question": "If A1 and A2 have the same curl, then A1-A2 can be a:",
    "options": [
      "Gradient field",
      "Constant scalar only",
      "Divergence field",
      "Hessian"
    ],
    "correctAnswer": 0,
    "explanation": "Their difference has zero curl and, on a suitable simply connected region, can be represented as a gradient field."
  },

  {
    "id": "mvc-vfa-e-026",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "The first-order Taylor approximation of f near a is:",
    "options": [
      "f(a)+grad f(a) dot (x-a)",
      "f(a)+(x-a)^2",
      "grad f(a) only",
      "The Hessian only"
    ],
    "correctAnswer": 0,
    "explanation": "This is the multivariable linearization formula."
  },
  {
    "id": "mvc-vfa-e-027",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "What additional derivative information is needed for a second-order Taylor approximation?",
    "options": [
      "Only first derivatives",
      "The Hessian matrix",
      "Only the function value",
      "Only the domain"
    ],
    "correctAnswer": 1,
    "explanation": "Second-order terms use second partial derivatives in the Hessian."
  },
  {
    "id": "mvc-vfa-e-028",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=x^2+y^2 at (0,0), the second-order Taylor polynomial is:",
    "options": [
      "0",
      "x+y",
      "x^2+y^2",
      "1+x+y"
    ],
    "correctAnswer": 2,
    "explanation": "The function is already quadratic."
  },
  {
    "id": "mvc-vfa-e-029",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=e^(x+y) at (0,0), the first-order Taylor approximation is:",
    "options": [
      "1",
      "x+y",
      "1+x+y",
      "x^2+y^2"
    ],
    "correctAnswer": 2,
    "explanation": "f(0,0)=1 and the gradient is <1,1>."
  },
  {
    "id": "mvc-vfa-e-030",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=e^(x+y) at (0,0), the second-order Taylor approximation is:",
    "options": [
      "1+x+y+(x+y)^2/2",
      "1+x+y",
      "x+y+(x+y)^2",
      "1+(x^2+y^2)/2"
    ],
    "correctAnswer": 0,
    "explanation": "Use e^t≈1+t+t^2/2 with t=x+y."
  },
  {
    "id": "mvc-vfa-e-031",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=cos(x+y) near (0,0), the second-order approximation is:",
    "options": [
      "1+x+y",
      "1-(x+y)^2/2",
      "x+y",
      "1+(x+y)^2/2"
    ],
    "correctAnswer": 1,
    "explanation": "cos t≈1-t^2/2."
  },
  {
    "id": "mvc-vfa-e-032",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=sin(x+y) near (0,0), the second-order approximation is:",
    "options": [
      "1+x+y",
      "x+y",
      "x^2+y^2",
      "1-(x+y)^2/2"
    ],
    "correctAnswer": 1,
    "explanation": "sin t≈t and its quadratic term at 0 is zero."
  },
  {
    "id": "mvc-vfa-e-033",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "The Hessian matrix contains:",
    "options": [
      "Second partial derivatives",
      "Only first partial derivatives",
      "Only function values",
      "Only third derivatives"
    ],
    "correctAnswer": 0,
    "explanation": "The Hessian is the matrix of second derivatives."
  },
  {
    "id": "mvc-vfa-e-034",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=x^2+3xy+y^2, the Hessian is:",
    "options": [
      "[[2,3],[3,2]]",
      "[[1,3],[3,1]]",
      "[[2,0],[0,2]]",
      "[[0,3],[3,0]]"
    ],
    "correctAnswer": 0,
    "explanation": "fxx=2, fxy=3, and fyy=2."
  },
  {
    "id": "mvc-vfa-e-035",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For a quadratic function, the second-order Taylor polynomial is:",
    "options": [
      "Exactly the function",
      "Always zero",
      "Only a rough approximation",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "All derivatives of order three and higher vanish."
  },
  {
    "id": "mvc-vfa-e-036",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "The first-order approximation is also called the:",
    "options": [
      "Tangent-plane approximation",
      "Hessian approximation",
      "Curl approximation",
      "Divergence approximation"
    ],
    "correctAnswer": 0,
    "explanation": "It defines the tangent plane at the point."
  },
  {
    "id": "mvc-vfa-e-037",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=x^2+y at (1,2), grad f is:",
    "options": [
      "<2,1>",
      "<1,2>",
      "<2,2>",
      "<1,1>"
    ],
    "correctAnswer": 0,
    "explanation": "fx=2x and fy=1."
  },
  {
    "id": "mvc-vfa-e-038",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=x^2+y at (1,2), the first-order approximation is:",
    "options": [
      "3+2(x-1)+(y-2)",
      "3+(x-1)^2+(y-2)",
      "2x+y",
      "x^2+y"
    ],
    "correctAnswer": 0,
    "explanation": "f(1,2)=3 and grad f(1,2)=<2,1>."
  },
  {
    "id": "mvc-vfa-e-039",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=x^2+y^2 at (1,2), the first-order approximation is:",
    "options": [
      "5+2(x-1)+4(y-2)",
      "5+(x-1)^2+(y-2)^2",
      "2x+4y",
      "1+x+y"
    ],
    "correctAnswer": 0,
    "explanation": "f=5 and grad=<2,4>."
  },
  {
    "id": "mvc-vfa-e-040",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=x^2+y^2 at (1,2), the Hessian is:",
    "options": [
      "[[2,0],[0,2]]",
      "[[1,0],[0,1]]",
      "[[2,2],[2,2]]",
      "[[0,2],[2,0]]"
    ],
    "correctAnswer": 0,
    "explanation": "The pure second derivatives are 2 and the mixed partials are zero."
  },
  {
    "id": "mvc-vfa-e-041",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "The second-order Taylor term has the form:",
    "options": [
      "1/2 h^T H h",
      "grad f only",
      "f(a)^2",
      "h^T h only"
    ],
    "correctAnswer": 0,
    "explanation": "The quadratic term is one half of the Hessian quadratic form."
  },
  {
    "id": "mvc-vfa-e-042",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=x^2+xy+y^2 at (0,0), the first-order approximation is:",
    "options": [
      "0",
      "x+y",
      "x^2+xy+y^2",
      "1+x+y"
    ],
    "correctAnswer": 0,
    "explanation": "The gradient at the origin is zero."
  },
  {
    "id": "mvc-vfa-e-043",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=x^2+xy+y^2 at (0,0), the second-order Taylor polynomial is:",
    "options": [
      "0",
      "x+y",
      "x^2+xy+y^2",
      "1+x+y"
    ],
    "correctAnswer": 2,
    "explanation": "The function itself is quadratic."
  },
  {
    "id": "mvc-vfa-e-044",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "In Taylor notation, h usually represents:",
    "options": [
      "x-a",
      "x+a",
      "a+x",
      "0"
    ],
    "correctAnswer": 0,
    "explanation": "The displacement from the expansion point is h=x-a."
  },
  {
    "id": "mvc-vfa-e-045",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=ln(1+x+y), the first-order approximation at (0,0) is:",
    "options": [
      "1+x+y",
      "x+y",
      "1-(x+y)",
      "1+x^2+y^2"
    ],
    "correctAnswer": 1,
    "explanation": "ln(1+t)≈t near t=0."
  },
  {
    "id": "mvc-vfa-e-046",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=ln(1+x+y), the second-order approximation at (0,0) is:",
    "options": [
      "x+y",
      "x+y-(x+y)^2/2",
      "1+x+y",
      "x^2+y^2"
    ],
    "correctAnswer": 1,
    "explanation": "Use ln(1+t)≈t-t^2/2."
  },
  {
    "id": "mvc-vfa-e-047",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=1/(1-x-y), the first-order approximation at (0,0) is:",
    "options": [
      "1-x-y",
      "1+x+y",
      "x+y",
      "1+(x+y)^2"
    ],
    "correctAnswer": 1,
    "explanation": "1/(1-t)≈1+t."
  },
  {
    "id": "mvc-vfa-e-048",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "For f(x,y)=1/(1-x-y), the second-order approximation at (0,0) is:",
    "options": [
      "1+x+y+(x+y)^2",
      "1+x+y",
      "1-(x+y)^2",
      "(x+y)^2"
    ],
    "correctAnswer": 0,
    "explanation": "The geometric series gives 1+t+t^2+..."
  },
  {
    "id": "mvc-vfa-e-049",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "If grad f(a)=0, the linear Taylor term is:",
    "options": [
      "Zero",
      "One",
      "Quadratic",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "The linear term is grad f(a) dot h."
  },
  {
    "id": "mvc-vfa-e-050",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Multivariable Taylor Series & Second-Order Approximation",
    "difficulty": "Easy",
    "question": "Mixed partial derivatives appear in the:",
    "options": [
      "Off-diagonal Hessian entries",
      "Constant term",
      "Function value only",
      "Domain"
    ],
    "correctAnswer": 0,
    "explanation": "fxy and fyx occupy the off-diagonal Hessian positions."
  },

  {
    "id": "mvc-vfa-e-051",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "The Implicit Function Theorem is used to determine when F(x,y)=0 can locally be solved for:",
    "options": [
      "One variable as a function of the other",
      "A global maximum",
      "An integral",
      "A divergence"
    ],
    "correctAnswer": 0,
    "explanation": "It gives a local function representation under a nonzero derivative condition."
  },
  {
    "id": "mvc-vfa-e-052",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "If F_y(a,b) != 0, the IFT allows us to solve locally for:",
    "options": [
      "y as a function of x",
      "x as a function of y",
      "F as a constant",
      "Neither variable"
    ],
    "correctAnswer": 0,
    "explanation": "A nonzero y-partial allows y=g(x) locally."
  },
  {
    "id": "mvc-vfa-e-053",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "If F_x(a,b) != 0, the IFT allows us to solve locally for:",
    "options": [
      "y as a function of x",
      "x as a function of y",
      "Only globally",
      "Neither"
    ],
    "correctAnswer": 1,
    "explanation": "A nonzero x-partial allows x=h(y) locally."
  },
  {
    "id": "mvc-vfa-e-054",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For F=x^2+y^2-1 at (0,1), F_y equals:",
    "options": [
      "0",
      "1",
      "2",
      "-2"
    ],
    "correctAnswer": 2,
    "explanation": "F_y=2y=2."
  },
  {
    "id": "mvc-vfa-e-055",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For F=x^2+y^2-1 at (0,1), which variable can be solved locally as a function of the other?",
    "options": [
      "y as a function of x",
      "x as a function of y only",
      "Neither",
      "Both globally"
    ],
    "correctAnswer": 0,
    "explanation": "F_y is nonzero."
  },
  {
    "id": "mvc-vfa-e-056",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For F=x^2+y^2-1 at (1,0), which partial derivative is nonzero?",
    "options": [
      "F_x",
      "F_y",
      "Both are zero",
      "Neither"
    ],
    "correctAnswer": 0,
    "explanation": "F_x=2 and F_y=0."
  },
  {
    "id": "mvc-vfa-e-057",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "At (1,0) on x^2+y^2=1, the IFT permits x to be expressed locally as:",
    "options": [
      "A function of y",
      "A function of x",
      "A constant",
      "A function of z"
    ],
    "correctAnswer": 0,
    "explanation": "F_x is nonzero, so x can locally be solved as a function of y."
  },
  {
    "id": "mvc-vfa-e-058",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "If y=g(x) is defined by F(x,g(x))=0, then g'(x) is:",
    "options": [
      "F_x/F_y",
      "-F_x/F_y",
      "F_y/F_x",
      "F"
    ],
    "correctAnswer": 1,
    "explanation": "Implicit differentiation gives F_x+F_y g'=0."
  },
  {
    "id": "mvc-vfa-e-059",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For x^2+y^2=1 at (0,1), dy/dx is:",
    "options": [
      "0",
      "1",
      "-1",
      "Undefined"
    ],
    "correctAnswer": 0,
    "explanation": "dy/dx=-F_x/F_y=0."
  },
  {
    "id": "mvc-vfa-e-060",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For x+y^2=3 at (2,1), dy/dx is:",
    "options": [
      "-1/2",
      "1/2",
      "-2",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "dy/dx=-1/(2y)=-1/2 at y=1."
  },
  {
    "id": "mvc-vfa-e-061",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For F=x^2+y^2-5 at (1,2), F_y equals:",
    "options": [
      "1",
      "2",
      "4",
      "5"
    ],
    "correctAnswer": 2,
    "explanation": "F_y=2y=4."
  },
  {
    "id": "mvc-vfa-e-062",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For F=x^2+y^2-5 at (1,2), dy/dx equals:",
    "options": [
      "-1/4",
      "-1/2",
      "1/2",
      "2"
    ],
    "correctAnswer": 1,
    "explanation": "dy/dx=-F_x/F_y=-2/4=-1/2."
  },
  {
    "id": "mvc-vfa-e-063",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For F=x+y-4=0, can y be solved locally as a function of x?",
    "options": [
      "Yes",
      "No because F_y=0",
      "Only at x=0",
      "Only globally"
    ],
    "correctAnswer": 0,
    "explanation": "F_y=1 is nonzero."
  },
  {
    "id": "mvc-vfa-e-064",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For F=x+y-4=0, dy/dx is:",
    "options": [
      "-1",
      "0",
      "1",
      "4"
    ],
    "correctAnswer": 0,
    "explanation": "Differentiating gives 1+y'=0."
  },
  {
    "id": "mvc-vfa-e-065",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "If F_y(a,b)=0, the standard IFT condition for solving y as a function of x:",
    "options": [
      "Is satisfied",
      "Fails at that point",
      "Becomes stronger",
      "Requires only F_x=0"
    ],
    "correctAnswer": 1,
    "explanation": "The standard theorem requires F_y(a,b) to be nonzero."
  },
  {
    "id": "mvc-vfa-e-066",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For F(x,y)=xy-1 at (1,1), F_y equals:",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "F_y=x, so at (1,1) it equals 1."
  },
  {
    "id": "mvc-vfa-e-067",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For xy=1 near (1,1), dy/dx is:",
    "options": [
      "-1",
      "0",
      "1",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "y'=-F_x/F_y=-y/x=-1 at (1,1)."
  },
  {
    "id": "mvc-vfa-e-068",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For F(x,y)=x^2+y-3, at (1,2), F_y is:",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "correctAnswer": 1,
    "explanation": "F_y=1."
  },
  {
    "id": "mvc-vfa-e-069",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For x^2+y-3=0 near (1,2), dy/dx is:",
    "options": [
      "-2",
      "-1",
      "1",
      "2"
    ],
    "correctAnswer": 0,
    "explanation": "y'=-2x=-2 at x=1."
  },
  {
    "id": "mvc-vfa-e-070",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For F=x^2+y^2-4 at (2,0), which variable can the IFT solve locally?",
    "options": [
      "x as a function of y",
      "y as a function of x",
      "Neither",
      "Both globally"
    ],
    "correctAnswer": 0,
    "explanation": "F_x=4 is nonzero, while F_y=0."
  },
  {
    "id": "mvc-vfa-e-071",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For F=x^2+y^2-4 at (0,2), which variable can be solved locally?",
    "options": [
      "x as a function of y",
      "y as a function of x",
      "Neither",
      "Both globally"
    ],
    "correctAnswer": 1,
    "explanation": "F_y=4 is nonzero."
  },
  {
    "id": "mvc-vfa-e-072",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For two equations F1(x,y)=0 and F2(x,y)=0, the standard IFT condition uses the:",
    "options": [
      "Jacobian determinant with respect to x,y",
      "Gradient magnitude only",
      "Laplacian",
      "Divergence"
    ],
    "correctAnswer": 0,
    "explanation": "A nonzero Jacobian determinant of the solved variables gives local solvability."
  },
  {
    "id": "mvc-vfa-e-073",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "If the relevant Jacobian determinant is nonzero at a point, the IFT typically gives a solution that is:",
    "options": [
      "Local",
      "Always global",
      "Always linear",
      "Constant"
    ],
    "correctAnswer": 0,
    "explanation": "The theorem guarantees a local representation."
  },
  {
    "id": "mvc-vfa-e-074",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For F(x,y,z)=x+y+z-6=0, solving for z gives:",
    "options": [
      "z=6-x-y",
      "z=x+y-6",
      "z=6+x+y",
      "z=xy-6"
    ],
    "correctAnswer": 0,
    "explanation": "Rearrange the equation directly."
  },
  {
    "id": "mvc-vfa-e-075",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Implicit Function Theorem",
    "difficulty": "Easy",
    "question": "For z=6-x-y, partial derivative z_x is:",
    "options": [
      "-1",
      "0",
      "1",
      "6"
    ],
    "correctAnswer": 0,
    "explanation": "Differentiate z=6-x-y with respect to x."
  },

  {
    "id": "mvc-vfa-e-076",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For a differentiable scalar function f, the directional derivative in a unit direction u is:",
    "options": [
      "grad f dot u",
      "grad f + u",
      "f u",
      "div u"
    ],
    "correctAnswer": 0,
    "explanation": "D_u f=∇f·u."
  },
  {
    "id": "mvc-vfa-e-077",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "What must be true about u when using D_u f=grad f dot u?",
    "options": [
      "u must be a unit vector",
      "u must be zero",
      "u must be parallel to the gradient",
      "u must have positive entries"
    ],
    "correctAnswer": 0,
    "explanation": "The direction vector is normalized to unit length."
  },
  {
    "id": "mvc-vfa-e-078",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y)=x^2+y^2, grad f at (1,2) is:",
    "options": [
      "<1,2>",
      "<2,4>",
      "<2,2>",
      "<4,2>"
    ],
    "correctAnswer": 1,
    "explanation": "grad f=<2x,2y>=<2,4>."
  },
  {
    "id": "mvc-vfa-e-079",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y)=x^2+y^2 at (1,2), the directional derivative toward (4,6) is:",
    "options": [
      "4",
      "22/5",
      "6",
      "10"
    ],
    "correctAnswer": 1,
    "explanation": "The direction is <3,4>/5, so <2,4> dot <3/5,4/5>=22/5."
  },
  {
    "id": "mvc-vfa-e-080",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y,z)=x+y+z, the gradient is:",
    "options": [
      "<1,1,1>",
      "<x,y,z>",
      "<0,0,0>",
      "<1,0,0>"
    ],
    "correctAnswer": 0,
    "explanation": "Each partial derivative is 1."
  },
  {
    "id": "mvc-vfa-e-081",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y,z)=x+y+z, the maximum directional derivative at any point is:",
    "options": [
      "0",
      "1",
      "sqrt(3)",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "The maximum directional derivative equals ||grad f||=sqrt(3)."
  },
  {
    "id": "mvc-vfa-e-082",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "The direction of greatest increase of f at a point is:",
    "options": [
      "-grad f",
      "grad f",
      "Any perpendicular direction",
      "The zero vector"
    ],
    "correctAnswer": 1,
    "explanation": "The gradient points in the direction of greatest increase."
  },
  {
    "id": "mvc-vfa-e-083",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "The maximum directional derivative of f at a point equals:",
    "options": [
      "f",
      "||grad f||",
      "div f",
      "det H"
    ],
    "correctAnswer": 1,
    "explanation": "max over unit directions of grad f dot u equals ||grad f||."
  },
  {
    "id": "mvc-vfa-e-084",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "If grad f(a)=0, every directional derivative at a is:",
    "options": [
      "1",
      "-1",
      "0",
      "Undefined"
    ],
    "correctAnswer": 2,
    "explanation": "The dot product of the zero gradient with any unit direction is zero."
  },
  {
    "id": "mvc-vfa-e-085",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y)=3x-4y, the gradient is:",
    "options": [
      "<3,-4>",
      "<-4,3>",
      "<3,4>",
      "<-3,-4>"
    ],
    "correctAnswer": 0,
    "explanation": "The partial derivatives are 3 and -4."
  },
  {
    "id": "mvc-vfa-e-086",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y)=3x-4y, the maximum directional derivative is:",
    "options": [
      "1",
      "4",
      "5",
      "7"
    ],
    "correctAnswer": 2,
    "explanation": "The gradient norm is sqrt(3^2+(-4)^2)=5."
  },
  {
    "id": "mvc-vfa-e-087",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y)=x^2+y^2 at (3,4), in the unit direction <4/5,-3/5>, the directional derivative is:",
    "options": [
      "0",
      "1",
      "5",
      "10"
    ],
    "correctAnswer": 0,
    "explanation": "The gradient is <6,8> and the direction is perpendicular to it, so the dot product is 0."
  },
  {
    "id": "mvc-vfa-e-088",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y)=x^2+y^2 at (3,4), in the unit direction <3/5,4/5>, the directional derivative is:",
    "options": [
      "5",
      "10",
      "20",
      "25"
    ],
    "correctAnswer": 1,
    "explanation": "The gradient is <6,8>, so the dot product is 6(3/5)+8(4/5)=10."
  },
  {
    "id": "mvc-vfa-e-089",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f=x^2+y^2+z^2 at (1,-1,2), grad f is:",
    "options": [
      "<1,-1,2>",
      "<2,-2,4>",
      "<2,2,4>",
      "<1,1,2>"
    ],
    "correctAnswer": 1,
    "explanation": "grad f=<2x,2y,2z>."
  },
  {
    "id": "mvc-vfa-e-090",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "The unit vector in the direction of <2,1,2> is:",
    "options": [
      "<2,1,2>",
      "<2/3,1/3,2/3>",
      "<1/2,1/2,1/2>",
      "<1,0,1>"
    ],
    "correctAnswer": 1,
    "explanation": "The norm of <2,1,2> is 3."
  },
  {
    "id": "mvc-vfa-e-091",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f=x+y+z, the directional derivative in unit direction <1/sqrt(3),1/sqrt(3),1/sqrt(3)> is:",
    "options": [
      "1",
      "sqrt(3)",
      "3",
      "0"
    ],
    "correctAnswer": 1,
    "explanation": "Dot <1,1,1> with the unit direction gives sqrt(3)."
  },
  {
    "id": "mvc-vfa-e-092",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "The directional derivative in a direction perpendicular to the gradient is:",
    "options": [
      "Maximum",
      "Minimum",
      "Zero",
      "Undefined"
    ],
    "correctAnswer": 2,
    "explanation": "The dot product of perpendicular vectors is zero."
  },
  {
    "id": "mvc-vfa-e-093",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y)=xy at (1,2), grad f is:",
    "options": [
      "<2,1>",
      "<1,2>",
      "<2,2>",
      "<1,1>"
    ],
    "correctAnswer": 0,
    "explanation": "fx=y=2 and fy=x=1."
  },
  {
    "id": "mvc-vfa-e-094",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y)=xy at (1,2), in unit direction <0,1>, the directional derivative is:",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 1,
    "explanation": "The gradient is <2,1>, so its dot product with <0,1> is 1."
  },
  {
    "id": "mvc-vfa-e-095",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y)=xy at (1,2), in unit direction <1,0>, the directional derivative is:",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctAnswer": 2,
    "explanation": "The x-component of the gradient is 2."
  },
  {
    "id": "mvc-vfa-e-096",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "To compute the directional derivative along the displacement from a to b, first form:",
    "options": [
      "b-a",
      "a+b",
      "a-b only",
      "ab"
    ],
    "correctAnswer": 0,
    "explanation": "The direction from a to b is b-a, which is then normalized."
  },
  {
    "id": "mvc-vfa-e-097",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y)=x+y at (0,0), the directional derivative toward (3,4) is:",
    "options": [
      "1",
      "7/5",
      "5",
      "4/3"
    ],
    "correctAnswer": 1,
    "explanation": "The unit direction is <3/5,4/5> and the gradient is <1,1>, giving 7/5."
  },
  {
    "id": "mvc-vfa-e-098",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y,z)=2x-y+3z, the gradient norm is:",
    "options": [
      "2",
      "3",
      "sqrt(14)",
      "6"
    ],
    "correctAnswer": 2,
    "explanation": "||<2,-1,3>||=sqrt(4+1+9)=sqrt(14)."
  },
  {
    "id": "mvc-vfa-e-099",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "For f(x,y,z)=2x-y+3z, the maximum directional derivative is:",
    "options": [
      "sqrt(14)",
      "14",
      "6",
      "3"
    ],
    "correctAnswer": 0,
    "explanation": "The maximum directional derivative equals the gradient norm."
  },
  {
    "id": "mvc-vfa-e-100",
    "module": "Vector Fields & Approximation Theory",
    "topic": "Directional Derivatives in n Dimensions",
    "difficulty": "Easy",
    "question": "In n dimensions, the gradient vector contains:",
    "options": [
      "All first partial derivatives",
      "All second partial derivatives",
      "Only one derivative",
      "Only the function value"
    ],
    "correctAnswer": 0,
    "explanation": "grad f=(partial f/partial x1,...,partial f/partial xn)."
  },
    {
    id: "mvc-vfa-m-001",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "For A = <0, 0, x^2*y>, what is curl A?",
    options: [
      "<x^2, -2*x*y, 0>",
      "<2*x*y, -x^2, 0>",
      "<0, 0, x^2*y>",
      "<-x^2, 2*x*y, 0>"
    ],
    correctAnswer: 0,
    explanation: "curl A = <dAz/dy, -dAz/dx, 0> = <x^2, -2*x*y, 0>."
  },
  {
    id: "mvc-vfa-m-002",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "Let A = <y*z, x*z, x*y>. What is curl A?",
    options: [
      "<x, y, z>",
      "<0, 0, 0>",
      "<y, x, z>",
      "<-x, -y, -z>"
    ],
    correctAnswer: 1,
    explanation: "A = grad(x*y*z), and the curl of a gradient is zero."
  },
  {
    id: "mvc-vfa-m-003",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "For A = <-y/2, x/2, 0>, calculate curl A.",
    options: [
      "<0, 0, 0>",
      "<0, 0, 1>",
      "<0, 0, -1>",
      "<1, -1, 0>"
    ],
    correctAnswer: 1,
    explanation: "The z-component is dAy/dx - dAx/dy = 1/2 - (-1/2) = 1."
  },
  {
    id: "mvc-vfa-m-004",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "Which vector potential produces F = <0, 0, 3>?",
    options: [
      "<0, 3*x, 0>",
      "<3*y, 0, 0>",
      "<0, 0, 3*x>",
      "<x, y, 3>"
    ],
    correctAnswer: 0,
    explanation: "curl<0,3*x,0> = <0,0,3>."
  },
  {
    id: "mvc-vfa-m-005",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "For A = <x*y, 0, 0>, what is curl A?",
    options: [
      "<0, y, x>",
      "<0, 0, -x>",
      "<y, 0, 0>",
      "<0, 0, x>"
    ],
    correctAnswer: 1,
    explanation: "The z-component is dAy/dx - dAx/dy = 0 - x = -x."
  },
  {
    id: "mvc-vfa-m-006",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "If A = <0, x*z, 0>, then curl A is:",
    options: [
      "<-x, 0, z>",
      "<x, 0, -z>",
      "<0, z, x>",
      "<0, 0, z>"
    ],
    correctAnswer: 0,
    explanation: "The curl components are -d(xz)/dz = -x, 0, and d(xz)/dx = z."
  },
  {
    id: "mvc-vfa-m-007",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "Which condition is necessary for a smooth vector field F to be expressible as curl A?",
    options: [
      "grad F = 0",
      "div F = 0",
      "curl F = 0",
      "F must be constant"
    ],
    correctAnswer: 1,
    explanation: "Since div(curl A) = 0, a smooth field that is a curl must have zero divergence."
  },
  {
    id: "mvc-vfa-m-008",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "Which field cannot be a curl on an open region containing the point because its divergence is nonzero?",
    options: [
      "<y, -x, 0>",
      "<x, y, z>",
      "<0, 0, 2>",
      "<1, 0, 0>"
    ],
    correctAnswer: 1,
    explanation: "The divergence of <x,y,z> is 1+1+1=3, whereas every curl has zero divergence."
  },
  {
    id: "mvc-vfa-m-009",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "For A = <0, 0, x^2 + y^2>, calculate curl A.",
    options: [
      "<2*y, -2*x, 0>",
      "<-2*y, 2*x, 0>",
      "<0, 0, 2*x + 2*y>",
      "<2*x, 2*y, 0>"
    ],
    correctAnswer: 0,
    explanation: "curl A = <dAz/dy, -dAz/dx, 0> = <2*y, -2*x, 0>."
  },
  {
    id: "mvc-vfa-m-010",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "For A = <y*z, 0, 0>, the curl is:",
    options: [
      "<0, y, -z>",
      "<0, -y, z>",
      "<y, z, 0>",
      "<0, z, -y>"
    ],
    correctAnswer: 0,
    explanation: "The y-component is d(yz)/dz = y and the z-component is -d(yz)/dy = -z."
  },
  {
    id: "mvc-vfa-m-011",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "For A = <0, x^2, 0>, find curl A.",
    options: [
      "<0, 0, x^2>",
      "<0, 0, 2*x>",
      "<2*x, 0, 0>",
      "<0, -2*x, 0>"
    ],
    correctAnswer: 1,
    explanation: "The z-component of curl A is d(x^2)/dx = 2*x."
  },
  {
    id: "mvc-vfa-m-012",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "For A = <x*z, y*z, 0>, calculate curl A.",
    options: [
      "<-y, x, 0>",
      "<y, -x, 0>",
      "<-z, z, 0>",
      "<0, 0, x+y>"
    ],
    correctAnswer: 0,
    explanation: "The curl is <-d(yz)/dz, d(xz)/dz, 0> = <-y, x, 0>."
  },
  {
    id: "mvc-vfa-m-013",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "Which potential produces F = <y, -x, 0>?",
    options: [
      "<0, 0, (x^2+y^2)/2>",
      "<0, 0, -(x^2+y^2)/2>",
      "<x, y, 0>",
      "<0, x, 0>"
    ],
    correctAnswer: 0,
    explanation: "The curl of <0,0,(x^2+y^2)/2> is <y,-x,0>."
  },
  {
    id: "mvc-vfa-m-014",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "If A is a vector potential for F and phi is a smooth scalar function, which field is another potential for F?",
    options: [
      "A + grad(phi)",
      "A + F",
      "A + phi",
      "phi*A"
    ],
    correctAnswer: 0,
    explanation: "curl(A + grad(phi)) = curl A because curl(grad(phi)) = 0."
  },
  {
    id: "mvc-vfa-m-015",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "If F = curl A and the fields are smooth throughout a volume V, what is the flux of F through the closed boundary of V?",
    options: [
      "The volume of V",
      "Always 1",
      "Zero",
      "The maximum value of |F|"
    ],
    correctAnswer: 2,
    explanation: "By the divergence theorem, the flux is the integral of div F over V, and div(curl A) = 0."
  },
  {
    id: "mvc-vfa-m-016",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "Stokes' theorem relates the circulation of A around a positively oriented closed curve C to:",
    options: [
      "The volume integral of div A",
      "The surface integral of curl A over a surface bounded by C",
      "The gradient of A at one point",
      "The length of C alone"
    ],
    correctAnswer: 1,
    explanation: "Stokes' theorem gives integral_C A·dr = integral_S (curl A)·n dS."
  },
  {
    id: "mvc-vfa-m-017",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "For A = <y^2, z^2, x^2>, find curl A.",
    options: [
      "<-2*z, -2*x, -2*y>",
      "<2*z, 2*x, 2*y>",
      "<-2*y, -2*z, -2*x>",
      "<0, 0, 0>"
    ],
    correctAnswer: 0,
    explanation: "The curl components are 0-2z, 0-2x, and 0-2y."
  },
  {
    id: "mvc-vfa-m-018",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "Let F = <2*x, -y, -z>. Which statement is true about the necessary divergence condition for a vector potential?",
    options: [
      "It fails because div F = 2",
      "It holds because div F = 0",
      "It fails because curl F = 0",
      "It holds only at the origin"
    ],
    correctAnswer: 1,
    explanation: "div F = 2 - 1 - 1 = 0. This satisfies the necessary condition, though zero divergence alone does not guarantee a potential on every domain."
  },
  {
    id: "mvc-vfa-m-019",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "For A = <0, 0, x*y + z^2>, find curl A.",
    options: [
      "<x, -y, 0>",
      "<y, -x, 2*z>",
      "<-x, y, 0>",
      "<0, 0, x+y>"
    ],
    correctAnswer: 0,
    explanation: "The first component is dAz/dy = x, the second is -dAz/dx = -y, and the third is zero."
  },
  {
    id: "mvc-vfa-m-020",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "If curl A = F, what is curl(A + C) when C is a constant vector?",
    options: [
      "F + C",
      "F - C",
      "F",
      "Zero"
    ],
    correctAnswer: 2,
    explanation: "The derivatives of a constant vector vanish, so curl(A+C) = curl A = F."
  },
  {
    id: "mvc-vfa-m-021",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "For A = <z, x, y>, calculate curl A.",
    options: [
      "<1, -1, 1>",
      "<-1, 1, -1>",
      "<0, 0, 0>",
      "<1, 1, 1>"
    ],
    correctAnswer: 0,
    explanation: "The components are d(y)/dy - d(x)/dz = 1, d(z)/dz - d(y)/dx? Using the curl formula gives <1,-1,1>."
  },
  {
    id: "mvc-vfa-m-022",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "Suppose F = curl A. Which integral identity holds for every smooth closed surface S bounding a volume where A is smooth?",
    options: [
      "Integral_S F·n dS = 0",
      "Integral_S F·n dS = area(S)",
      "Integral_S F·n dS = volume(V)",
      "Integral_S F·n dS = 1"
    ],
    correctAnswer: 0,
    explanation: "The divergence of F is zero, so the net flux through a closed surface is zero."
  },
  {
    id: "mvc-vfa-m-023",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "For A = <x*y, y*z, z*x>, what is curl A?",
    options: [
      "<-y, -z, -x>",
      "<y, z, x>",
      "<x, y, z>",
      "<0, 0, 0>"
    ],
    correctAnswer: 0,
    explanation: "The curl components are 0-y, 0-z, and 0-x."
  },
  {
    id: "mvc-vfa-m-024",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "If curl A = 0 on a simply connected open region, which conclusion is generally available for a sufficiently smooth A?",
    options: [
      "A can be represented as a gradient of a scalar potential",
      "A must be the zero vector everywhere",
      "div A must be nonzero",
      "A must be constant"
    ],
    correctAnswer: 0,
    explanation: "On a simply connected region, a smooth curl-free vector field is conservative and has a scalar potential."
  },
  {
    id: "mvc-vfa-m-025",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Medium",
    question: "Which statement about a vector potential is correct?",
    options: [
      "Every divergence-free field has a potential on every possible domain",
      "A potential, when it exists, is generally not unique",
      "The curl of any potential must be zero",
      "Adding a gradient always changes the curl"
    ],
    correctAnswer: 1,
    explanation: "Adding the gradient of a smooth scalar function leaves the curl unchanged. Existence can also depend on the domain."
  },

  {
    id: "mvc-vfa-m-026",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "What is the second-order Taylor polynomial for f(x,y)=e^(2*x-y) at (0,0)?",
    options: [
      "1 + 2*x - y + (2*x-y)^2/2",
      "1 + 2*x - y",
      "2*x - y + (2*x-y)^2",
      "1 + x^2 + y^2"
    ],
    correctAnswer: 0,
    explanation: "Use e^t approximately equal to 1+t+t^2/2 with t=2*x-y."
  },
  {
    id: "mvc-vfa-m-027",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "The second-order Taylor polynomial for f(x,y)=ln(1+x+2*y) at (0,0) is:",
    options: [
      "(x+2*y) - (x+2*y)^2/2",
      "1 + x + 2*y",
      "(x+2*y)^2/2",
      "1 - x - 2*y"
    ],
    correctAnswer: 0,
    explanation: "The expansion ln(1+t) is t - t^2/2 plus higher-order terms."
  },
  {
    id: "mvc-vfa-m-028",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=sqrt(1+2*x-y), the second-order Taylor polynomial at (0,0) is:",
    options: [
      "1 + (2*x-y)/2 - (2*x-y)^2/8",
      "1 + 2*x - y",
      "1 - (2*x-y)/2",
      "1 + (2*x-y)^2/8"
    ],
    correctAnswer: 0,
    explanation: "Using sqrt(1+t) approximately equal to 1+t/2-t^2/8 gives the result."
  },
  {
    id: "mvc-vfa-m-029",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=sin(2*x+y), what is its second-order Taylor polynomial at (0,0)?",
    options: [
      "1 + 2*x + y",
      "2*x + y",
      "1 - (2*x+y)^2/2",
      "(2*x+y)^2/2"
    ],
    correctAnswer: 1,
    explanation: "The quadratic Taylor term of sin(t) at zero vanishes, so the second-order polynomial is t=2*x+y."
  },
  {
    id: "mvc-vfa-m-030",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=cos(x-y), its second-order Taylor polynomial at (0,0) is:",
    options: [
      "1 + x - y",
      "1 - (x-y)^2/2",
      "(x-y) - (x-y)^2/2",
      "1 + (x-y)^2/2"
    ],
    correctAnswer: 1,
    explanation: "cos(t) approximately equals 1-t^2/2 near t=0."
  },
  {
    id: "mvc-vfa-m-031",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "The second-order Taylor polynomial of f(x)=1/(1+x) at x=0 is:",
    options: [
      "1 + x + x^2",
      "1 - x + x^2",
      "1 - x - x^2",
      "x - x^2"
    ],
    correctAnswer: 1,
    explanation: "The series begins 1-x+x^2, with higher-order terms omitted."
  },
  {
    id: "mvc-vfa-m-032",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=x^2*y expanded about (1,2), let h=x-1 and k=y-2. What is the second-order Taylor polynomial?",
    options: [
      "2 + 4*h + k + 2*h^2 + 2*h*k",
      "2 + 2*h + k + h^2",
      "2 + 4*h + 2*k + h^2 + h*k",
      "2 + h + 4*k + 2*h^2"
    ],
    correctAnswer: 0,
    explanation: "At (1,2), f=2, grad f=<4,1>, and Hessian entries are fxx=4, fxy=2, fyy=0."
  },
  {
    id: "mvc-vfa-m-033",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=x^3+y^2 around (1,1), with h=x-1 and k=y-1, the second-order Taylor polynomial is:",
    options: [
      "2 + 3*h + 2*k + 3*h^2 + k^2",
      "2 + h + 2*k + 3*h^2",
      "2 + 3*h + k + h^2 + k^2",
      "1 + 3*h + 2*k + 3*h^2 + 2*k^2"
    ],
    correctAnswer: 0,
    explanation: "The value is 2, the gradient is <3,2>, and the Hessian is diagonal with entries 6 and 2."
  },
  {
    id: "mvc-vfa-m-034",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=x^2+xy+y^2 at (1,-1), which second-order Taylor polynomial is correct using h=x-1 and k=y+1?",
    options: [
      "1 + h - k + h^2 + h*k + k^2",
      "1 + 2*h - 2*k + h^2 + k^2",
      "1 - h + k + h^2 - h*k + k^2",
      "1 + h + k + h^2 + k^2"
    ],
    correctAnswer: 0,
    explanation: "The value is 1, the gradient is <1,-1>, and the Hessian is [[2,1],[1,2]]."
  },
  {
    id: "mvc-vfa-m-035",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=e^x*cos(y) at (0,0), its second-order Taylor polynomial is:",
    options: [
      "1 + x + (x^2-y^2)/2",
      "1 + x + y + (x^2+y^2)/2",
      "1 + x - y",
      "x + (x^2-y^2)/2"
    ],
    correctAnswer: 0,
    explanation: "The value is 1, the gradient is <1,0>, and the second derivatives are fxx=1, fxy=0, fyy=-1."
  },
  {
    id: "mvc-vfa-m-036",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "Suppose f(a)=5, grad f(a)=<2,-3>, and H(a)=[[4,2],[2,6]]. What is the second-order Taylor polynomial using h=x-a1 and k=y-a2?",
    options: [
      "5 + 2*h - 3*k + 2*h^2 + 2*h*k + 3*k^2",
      "5 + 2*h - 3*k + 4*h^2 + 2*h*k + 6*k^2",
      "5 + 2*h + 3*k + 2*h^2 + 2*h*k + 3*k^2",
      "5 + h - 3*k + 2*h^2 + 3*k^2"
    ],
    correctAnswer: 0,
    explanation: "The quadratic contribution is one half of h-vector transposed times H times h-vector."
  },
  {
    id: "mvc-vfa-m-037",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "In a second-order Taylor polynomial in two variables, if fxy(a)=5, what coefficient multiplies the term h*k?",
    options: [
      "5",
      "10",
      "5/2",
      "1/2"
    ],
    correctAnswer: 0,
    explanation: "The mixed terms in h-transpose H h occur twice; the factor 1/2 cancels that factor of two."
  },
  {
    id: "mvc-vfa-m-038",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=x^2+4*x*y+y^2 at the origin, what is its second-order Taylor polynomial?",
    options: [
      "x^2+4*x*y+y^2",
      "x+y",
      "x^2+y^2",
      "4*x*y"
    ],
    correctAnswer: 0,
    explanation: "The function is already a quadratic polynomial, so its second-order Taylor polynomial reproduces it exactly."
  },
  {
    id: "mvc-vfa-m-039",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=1/(1+x+y), the second-order Taylor polynomial at (0,0) is:",
    options: [
      "1-(x+y)+(x+y)^2",
      "1+(x+y)+(x+y)^2",
      "1-(x+y)^2",
      "x+y-(x+y)^2"
    ],
    correctAnswer: 0,
    explanation: "The expansion of 1/(1+t) is 1-t+t^2 plus higher-order terms."
  },
  {
    id: "mvc-vfa-m-040",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=ln(x^2+y^2) expanded at (1,1), with h=x-1 and k=y-1, the second-order Taylor polynomial is:",
    options: [
      "ln(2)+h+k-h*k",
      "ln(2)+h+k+(h^2+k^2)/2",
      "ln(2)+2*h+2*k",
      "ln(2)-h-k-h*k"
    ],
    correctAnswer: 0,
    explanation: "At (1,1), the gradient is <1,1>, the pure second derivatives are zero, and fxy=-1."
  },
  {
    id: "mvc-vfa-m-041",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=e^(x*y) expanded around (1,0), let h=x-1 and k=y. What is the second-order Taylor polynomial?",
    options: [
      "1 + k + h*k + k^2/2",
      "1 + h + k + h^2/2",
      "1 + k + h^2 + k^2",
      "1 + h*k"
    ],
    correctAnswer: 0,
    explanation: "At (1,0), f=1, grad f=<0,1>, and the nonzero second derivatives are fxy=1 and fyy=1."
  },
  {
    id: "mvc-vfa-m-042",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=x^2+2*y^2 expanded around (1,-1), which second-order Taylor polynomial is correct?",
    options: [
      "3 + 2*h - 4*k + h^2 + 2*k^2",
      "3 + h - 2*k + h^2 + k^2",
      "3 + 2*h + 4*k + h^2 + 2*k^2",
      "3 + 2*h - 4*k + 2*h^2 + k^2"
    ],
    correctAnswer: 0,
    explanation: "The function is quadratic, with value 3, gradient <2,-4>, and quadratic terms h^2+2*k^2."
  },
  {
    id: "mvc-vfa-m-043",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=ln(x)+ln(y) at (1,1), what is the second-order Taylor polynomial using h=x-1 and k=y-1?",
    options: [
      "h+k-(h^2+k^2)/2",
      "h+k+(h^2+k^2)/2",
      "1+h+k",
      "h+k-h*k"
    ],
    correctAnswer: 0,
    explanation: "Each logarithm has first derivative 1 and second derivative -1 at 1."
  },
  {
    id: "mvc-vfa-m-044",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=sqrt(4+x+2*y) at (0,0), the second-order Taylor polynomial is:",
    options: [
      "2 + (x+2*y)/4 - (x+2*y)^2/64",
      "2 + (x+2*y)/2",
      "2 - (x+2*y)/4",
      "2 + (x+2*y)^2/64"
    ],
    correctAnswer: 0,
    explanation: "Writing sqrt(4+t)=2*sqrt(1+t/4) gives 2+t/4-t^2/64 to second order."
  },
  {
    id: "mvc-vfa-m-045",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=cos(x)*e^y at (0,0), the second-order Taylor polynomial is:",
    options: [
      "1+y+(y^2-x^2)/2",
      "1+x+y+(x^2+y^2)/2",
      "1+y+(x^2+y^2)/2",
      "1-x+y"
    ],
    correctAnswer: 0,
    explanation: "Multiplying the expansions for cos(x) and e^y gives 1+y+y^2/2-x^2/2."
  },
  {
    id: "mvc-vfa-m-046",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For f(x,y)=x^2*y+x at (1,2), with h=x-1 and k=y-2, what is its second-order Taylor polynomial?",
    options: [
      "3 + 5*h + k + 2*h^2 + 2*h*k",
      "3 + 4*h + 2*k + h^2",
      "3 + 5*h + 2*k + 4*h^2",
      "3 + h + k + 2*h^2"
    ],
    correctAnswer: 0,
    explanation: "The value is 3, the gradient is <5,1>, and the Hessian entries are fxx=4, fxy=2, fyy=0."
  },
  {
    id: "mvc-vfa-m-047",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "If grad f(a)=0, how does the second-order Taylor polynomial simplify?",
    options: [
      "It becomes f(a) + one half of h-transpose H(a) h",
      "It must be identically zero",
      "It becomes f(a) + grad f(a)",
      "It has no quadratic term"
    ],
    correctAnswer: 0,
    explanation: "The linear term vanishes, but the constant and quadratic terms remain."
  },
  {
    id: "mvc-vfa-m-048",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "For a twice continuously differentiable scalar function, the Hessian matrix is:",
    options: [
      "Symmetric",
      "Always diagonal",
      "Always the identity matrix",
      "Always singular"
    ],
    correctAnswer: 0,
    explanation: "Equality of continuous mixed partial derivatives makes the Hessian symmetric."
  },
  {
    id: "mvc-vfa-m-049",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "In n variables, the quadratic term of the second-order Taylor polynomial is:",
    options: [
      "One half of h-transpose H(a) h",
      "grad f(a) dot h",
      "f(a)^2",
      "The determinant of H(a)"
    ],
    correctAnswer: 0,
    explanation: "The Hessian quadratic form supplies the second-order contribution."
  },
  {
    id: "mvc-vfa-m-050",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Medium",
    question: "A second-order Taylor approximation usually becomes more accurate near its expansion point because the neglected terms are:",
    options: [
      "Of order higher than two in the displacement, under sufficient smoothness",
      "Always exactly zero",
      "Always linear",
      "Independent of the displacement"
    ],
    correctAnswer: 0,
    explanation: "For a sufficiently smooth function, the Taylor remainder is higher order than the retained quadratic terms."
  },

  {
    id: "mvc-vfa-m-051",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x^2+y^2=25, what is dy/dx at (3,4)?",
    options: [
      "-3/4",
      "-4/3",
      "3/4",
      "4/3"
    ],
    correctAnswer: 0,
    explanation: "Implicit differentiation gives 2*x+2*y*y'=0, so y'=-x/y=-3/4."
  },
  {
    id: "mvc-vfa-m-052",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x^2+x*y+y^2=7, find dy/dx at (1,2).",
    options: [
      "-4/5",
      "-5/4",
      "4/5",
      "5/4"
    ],
    correctAnswer: 0,
    explanation: "The derivative is -(2*x+y)/(x+2*y), which equals -4/5 at (1,2)."
  },
  {
    id: "mvc-vfa-m-053",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x^2+y^2+z^2=14 at (1,2,3), regard z as a function of x and y. What is dz/dx?",
    options: [
      "-1/3",
      "-2/3",
      "1/3",
      "1/2"
    ],
    correctAnswer: 0,
    explanation: "Implicit differentiation gives 2*x+2*z*z_x=0, so z_x=-x/z=-1/3."
  },
  {
    id: "mvc-vfa-m-054",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x^2+y^2+z^2=14 at (1,2,3), what is dz/dy when z is treated as a function of x and y?",
    options: [
      "-2/3",
      "-1/3",
      "2/3",
      "1/3"
    ],
    correctAnswer: 0,
    explanation: "Differentiating with respect to y gives 2*y+2*z*z_y=0, so z_y=-y/z=-2/3."
  },
  {
    id: "mvc-vfa-m-055",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "The equation x*e^y+y-1=0 defines y locally as a function of x near (1,0). What is dy/dx there?",
    options: [
      "-1/2",
      "1/2",
      "-1",
      "1"
    ],
    correctAnswer: 0,
    explanation: "F_x=e^y=1 and F_y=x*e^y+1=2, so y'=-F_x/F_y=-1/2."
  },
  {
    id: "mvc-vfa-m-056",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "The equation y^3+y-x=0 defines y locally as a function of x near (0,0). What is y'(0)?",
    options: [
      "0",
      "1",
      "-1",
      "3"
    ],
    correctAnswer: 1,
    explanation: "Differentiating gives (3*y^2+1)y'=1. At y=0, y'=1."
  },
  {
    id: "mvc-vfa-m-057",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x^2+x*y+y^2=7, find dy/dx at (2,1).",
    options: [
      "-5/4",
      "-4/5",
      "5/4",
      "4/5"
    ],
    correctAnswer: 0,
    explanation: "The derivative is -(2*x+y)/(x+2*y) = -5/4."
  },
  {
    id: "mvc-vfa-m-058",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x^2+y^2=25 at (4,3), calculate dy/dx.",
    options: [
      "-4/3",
      "-3/4",
      "4/3",
      "3/4"
    ],
    correctAnswer: 0,
    explanation: "The slope is -x/y, so it equals -4/3."
  },
  {
    id: "mvc-vfa-m-059",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x^2+x*y+y^2=3, calculate dy/dx at (1,1).",
    options: [
      "-1",
      "1",
      "-2",
      "2"
    ],
    correctAnswer: 0,
    explanation: "The derivative is -(2*x+y)/(x+2*y)=-3/3=-1."
  },
  {
    id: "mvc-vfa-m-060",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x^2+y-5=0 near (2,1), find dy/dx.",
    options: [
      "-4",
      "-2",
      "2",
      "4"
    ],
    correctAnswer: 0,
    explanation: "Differentiating gives 2*x+y'=0, so y'=-2*x=-4 at x=2."
  },
  {
    id: "mvc-vfa-m-061",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x^3+y^3=9 at (1,2), what is dy/dx?",
    options: [
      "-1/4",
      "-4",
      "1/4",
      "4"
    ],
    correctAnswer: 0,
    explanation: "Differentiating gives 3*x^2+3*y^2*y'=0, so y'=-x^2/y^2=-1/4."
  },
  {
    id: "mvc-vfa-m-062",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x*y+y^2-8=0 at (2,2), find dy/dx.",
    options: [
      "-1/3",
      "-3",
      "1/3",
      "3"
    ],
    correctAnswer: 0,
    explanation: "F_x=y=2 and F_y=x+2*y=6, so y'=-F_x/F_y=-1/3."
  },
  {
    id: "mvc-vfa-m-063",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x^2+y^2=4 at (0,2), what does the Implicit Function Theorem guarantee locally?",
    options: [
      "y can be expressed as a function of x",
      "x can be expressed as a function of y by the standard condition F_x != 0",
      "Neither variable can be represented locally",
      "The circle can be represented by one global function y(x)"
    ],
    correctAnswer: 0,
    explanation: "F_y=2*y=4 is nonzero, so y can locally be solved as a function of x."
  },
  {
    id: "mvc-vfa-m-064",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "At (2,0) on x^2+y^2=4, which variable can the standard Implicit Function Theorem solve locally as a function of the other?",
    options: [
      "x as a function of y",
      "y as a function of x",
      "Neither variable",
      "Both variables globally"
    ],
    correctAnswer: 0,
    explanation: "F_x=2*x=4 is nonzero, so x can locally be represented as a function of y."
  },
  {
    id: "mvc-vfa-m-065",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For F(x,y)=x*y+x+y-5=0 at (1,2), calculate dy/dx.",
    options: [
      "-3/2",
      "-2/3",
      "3/2",
      "2/3"
    ],
    correctAnswer: 0,
    explanation: "F_x=y+1=3 and F_y=x+1=2, so y'=-3/2."
  },
  {
    id: "mvc-vfa-m-066",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For F(x,y)=e^x+y^2-2=0 at (0,1), find dy/dx.",
    options: [
      "-1/2",
      "-2",
      "1/2",
      "2"
    ],
    correctAnswer: 0,
    explanation: "F_x=e^x=1 and F_y=2*y=2, so y'=-F_x/F_y=-1/2."
  },
  {
    id: "mvc-vfa-m-067",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x*y=1 at (2,1/2), what is dy/dx?",
    options: [
      "-1/4",
      "-4",
      "1/4",
      "4"
    ],
    correctAnswer: 0,
    explanation: "Differentiating gives x*y'+y=0, so y'=-y/x=-1/4."
  },
  {
    id: "mvc-vfa-m-068",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For F(x,y)=x^2+y^2-1, when can the standard IFT solve y locally as a function of x at a point on the unit circle?",
    options: [
      "Whenever F_y=2*y is nonzero",
      "Only when x=0",
      "Only when y=0",
      "At every point without conditions"
    ],
    correctAnswer: 0,
    explanation: "The relevant partial derivative must be nonzero; here F_y=2*y."
  },
  {
    id: "mvc-vfa-m-069",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x^2+y^2+z^2=9 at (2,1,2), treating z as a function of x and y, what is dz/dx?",
    options: [
      "-1",
      "-1/2",
      "1",
      "1/2"
    ],
    correctAnswer: 0,
    explanation: "Differentiating with respect to x gives 2*x+2*z*z_x=0, so z_x=-x/z=-1."
  },
  {
    id: "mvc-vfa-m-070",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For x^2+y^2+z^2=9 at (2,1,2), treating z as a function of x and y, what is dz/dy?",
    options: [
      "-1/2",
      "-1",
      "1/2",
      "1"
    ],
    correctAnswer: 0,
    explanation: "Differentiating with respect to y gives z_y=-y/z=-1/2."
  },
  {
    id: "mvc-vfa-m-071",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For the system F1=u+v-x=0 and F2=u-v-y=0, what is the determinant of the Jacobian with respect to (u,v)?",
    options: [
      "-2",
      "-1",
      "0",
      "2"
    ],
    correctAnswer: 0,
    explanation: "The Jacobian is [[1,1],[1,-1]], whose determinant is -1-1=-2."
  },
  {
    id: "mvc-vfa-m-072",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For the system u+v-x=0 and u-v-y=0, what do the nonzero Jacobian determinant with respect to (u,v) and the Implicit Function Theorem imply?",
    options: [
      "u and v can locally be expressed as functions of x and y",
      "The system has no solutions",
      "u and v must be constant",
      "The equations are necessarily nonlinear"
    ],
    correctAnswer: 0,
    explanation: "The determinant is nonzero, so the system can be solved locally for u and v in terms of x and y."
  },
  {
    id: "mvc-vfa-m-073",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "For F1=u^2+v-x=0 and F2=u+v^2-y=0 at (u,v,x,y)=(1,0,1,1), what is the Jacobian determinant with respect to (u,v)?",
    options: [
      "-1",
      "0",
      "1",
      "2"
    ],
    correctAnswer: 0,
    explanation: "The Jacobian is [[2,1],[1,0]], with determinant 2*0-1*1=-1."
  },
  {
    id: "mvc-vfa-m-074",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "If F_y(a,b)=0 but F_x(a,b) is nonzero, what does the standard Implicit Function Theorem directly support near (a,b)?",
    options: [
      "Solving x as a function of y",
      "Solving y as a function of x",
      "Solving neither variable under any circumstances",
      "A global representation of the entire curve"
    ],
    correctAnswer: 0,
    explanation: "A nonzero F_x supports solving for x locally as a function of y."
  },
  {
    id: "mvc-vfa-m-075",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Medium",
    question: "Which statement about the Implicit Function Theorem is correct?",
    options: [
      "It guarantees a local representation under a suitable nonzero derivative or Jacobian condition",
      "It always guarantees a global representation",
      "It requires every partial derivative to be zero",
      "It applies only to linear equations"
    ],
    correctAnswer: 0,
    explanation: "The theorem provides local solvability when its hypotheses, including the relevant nonzero derivative or Jacobian condition, hold."
  },

  {
    id: "mvc-vfa-m-076",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "Let f(x,y,z)=x^2+2*y^2+3*z^2. Find the directional derivative at (1,-1,2) in the unit direction <2/3,1/3,2/3>.",
    options: [
      "8",
      "4",
      "16/3",
      "20/3"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <2,-4,12>. Its dot product with the given unit vector is 4/3-4/3+8=8."
  },
  {
    id: "mvc-vfa-m-077",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y)=ln(x^2+y^2), find the directional derivative at (1,1) in the unit direction <1/sqrt(2),1/sqrt(2)>.",
    options: [
      "sqrt(2)",
      "1",
      "2",
      "1/sqrt(2)"
    ],
    correctAnswer: 0,
    explanation: "The gradient at (1,1) is <1,1>, whose dot product with the given direction is sqrt(2)."
  },
  {
    id: "mvc-vfa-m-078",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y)=x*e^y at (0,0), calculate the directional derivative in the unit direction <3/5,4/5>.",
    options: [
      "3/5",
      "4/5",
      "1",
      "7/5"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <e^y,x*e^y>, which equals <1,0> at the origin. The dot product is 3/5."
  },
  {
    id: "mvc-vfa-m-079",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y,z)=e^(x+y+z) at the origin, find the directional derivative in the unit direction <1/3,2/3,2/3>.",
    options: [
      "5/3",
      "1",
      "sqrt(3)",
      "2/3"
    ],
    correctAnswer: 0,
    explanation: "The gradient at the origin is <1,1,1>. Its dot product with the unit direction is 1/3+2/3+2/3=5/3."
  },
  {
    id: "mvc-vfa-m-080",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y,z)=x^2+y^2+z^2 at (1,2,2), what is the maximum directional derivative?",
    options: [
      "3",
      "6",
      "9",
      "12"
    ],
    correctAnswer: 1,
    explanation: "The maximum directional derivative equals the gradient norm. Here grad f=<2,4,4>, whose norm is 6."
  },
  {
    id: "mvc-vfa-m-081",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "Which direction gives the greatest local decrease of a differentiable function at a point where its gradient is nonzero?",
    options: [
      "The gradient direction",
      "The negative-gradient direction",
      "Any direction perpendicular to the gradient",
      "The zero vector"
    ],
    correctAnswer: 1,
    explanation: "The negative gradient is the direction of steepest descent."
  },
  {
    id: "mvc-vfa-m-082",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "If the gradient of f at a point is nonzero, what is the directional derivative in the unit direction opposite the gradient?",
    options: [
      "The gradient norm",
      "Zero",
      "The negative of the gradient norm",
      "Always one"
    ],
    correctAnswer: 2,
    explanation: "The direction is -grad f/||grad f||, so the dot product equals -||grad f||."
  },
  {
    id: "mvc-vfa-m-083",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "Let f(x,y,z)=x*y+y*z+z*x. Find its directional derivative at (1,2,3) in the unit direction <0,3/5,4/5>.",
    options: [
      "24/5",
      "12/5",
      "4",
      "5"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <y+z,x+z,x+y>=<5,4,3>. The dot product is 4*(3/5)+3*(4/5)=24/5."
  },
  {
    id: "mvc-vfa-m-084",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "What is the unit vector in the direction of v=<2,-2,1>?",
    options: [
      "<2/3,-2/3,1/3>",
      "<2,-2,1>",
      "<1/3,-1/3,1/3>",
      "<2/5,-2/5,1/5>"
    ],
    correctAnswer: 0,
    explanation: "The norm of v is sqrt(4+4+1)=3, so divide each component by 3."
  },
  {
    id: "mvc-vfa-m-085",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y,z)=x^2*y+z at (2,1,3), find the directional derivative along the unit vector <1/3,2/3,2/3>.",
    options: [
      "14/3",
      "8/3",
      "5",
      "6"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <2*x*y,x^2,1>=<4,4,1>. The dot product is 4/3+8/3+2/3=14/3."
  },
  {
    id: "mvc-vfa-m-086",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y)=x^2+y^2 at (1,2), find the directional derivative in the unit direction <2/sqrt(5),-1/sqrt(5)>.",
    options: [
      "0",
      "2/sqrt(5)",
      "4/sqrt(5)",
      "6/sqrt(5)"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <2,4>; its dot product with the direction is 4/sqrt(5)-4/sqrt(5)=0."
  },
  {
    id: "mvc-vfa-m-087",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y,z)=3*x-4*y+12*z, what is the maximum directional derivative?",
    options: [
      "12",
      "13",
      "19",
      "5"
    ],
    correctAnswer: 1,
    explanation: "The gradient is constant, <3,-4,12>, whose norm is sqrt(9+16+144)=13."
  },
  {
    id: "mvc-vfa-m-088",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "At a point where ||grad f||=10, a unit direction makes an angle whose cosine with the gradient direction is 3/5. What is the directional derivative?",
    options: [
      "6",
      "10",
      "3",
      "50"
    ],
    correctAnswer: 0,
    explanation: "D_u f=||grad f||*cos(theta)=10*(3/5)=6."
  },
  {
    id: "mvc-vfa-m-089",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y)=x^2+y^2 at (1,2), what is the directional derivative in the unit direction <1/sqrt(5),2/sqrt(5)>?",
    options: [
      "2*sqrt(5)",
      "sqrt(5)",
      "4/sqrt(5)",
      "8/sqrt(5)"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <2,4>. Its dot product with the direction is 2/sqrt(5)+8/sqrt(5)=10/sqrt(5)=2*sqrt(5)."
  },
  {
    id: "mvc-vfa-m-090",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y,z)=x+y+z, what is the maximum directional derivative?",
    options: [
      "1",
      "sqrt(2)",
      "sqrt(3)",
      "3"
    ],
    correctAnswer: 2,
    explanation: "The gradient is <1,1,1>, with norm sqrt(3)."
  },
  {
    id: "mvc-vfa-m-091",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y,z)=x^2+y^2+z^2 at (1,0,0), what is the directional derivative in direction <0,1,0>?",
    options: [
      "0",
      "1",
      "2",
      "4"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <2,0,0>, perpendicular to the given direction."
  },
  {
    id: "mvc-vfa-m-092",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y,z)=x*y*z at (1,2,3), find the directional derivative along the unit direction <1/3,2/3,2/3>.",
    options: [
      "16/3",
      "20/3",
      "4",
      "6"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <6,3,2>; the dot product is 6/3+3*(2/3)+2*(2/3)=16/3."
  },
  {
    id: "mvc-vfa-m-093",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y)=x^2+y^2 at (3,4), calculate the directional derivative in the unit direction <3/5,4/5>.",
    options: [
      "5",
      "10",
      "25",
      "50"
    ],
    correctAnswer: 1,
    explanation: "The gradient is <6,8>, so D_u f=6*(3/5)+8*(4/5)=10."
  },
  {
    id: "mvc-vfa-m-094",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y)=3*x+4*y, what is the directional derivative in the unit direction opposite its gradient?",
    options: [
      "-5",
      "5",
      "-7",
      "0"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <3,4> with norm 5, so the opposite unit direction gives directional derivative -5."
  },
  {
    id: "mvc-vfa-m-095",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y)=x*y, find the directional derivative at (1,2) in direction <3,4>. Use a unit direction.",
    options: [
      "11/5",
      "14/5",
      "2",
      "3"
    ],
    correctAnswer: 2,
    explanation: "The gradient is <2,1>. Normalize <3,4> to <3/5,4/5>; the dot product is 6/5+4/5=2. Therefore option C is correct."
  },
  {
    id: "mvc-vfa-m-096",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For a linear function f(x)=a dot x in n dimensions, what is the maximum directional derivative over all unit directions?",
    options: [
      "||a||",
      "a dot a squared",
      "0",
      "The number of coordinates in x"
    ],
    correctAnswer: 0,
    explanation: "The gradient is a, so the maximum of a dot u over unit u equals ||a||."
  },
  {
    id: "mvc-vfa-m-097",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x)=x1^2+...+xn^2, what is the directional derivative at x in a unit direction u?",
    options: [
      "2*x dot u",
      "x dot u",
      "||x||^2",
      "2*||u||^2"
    ],
    correctAnswer: 0,
    explanation: "The gradient is 2*x, so D_u f=2*x dot u."
  },
  {
    id: "mvc-vfa-m-098",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y,z)=e^(2*x-y) at (0,0,0), find the directional derivative in the unit direction <1/sqrt(2),1/sqrt(2),0>.",
    options: [
      "1/sqrt(2)",
      "3/sqrt(2)",
      "sqrt(2)",
      "0"
    ],
    correctAnswer: 0,
    explanation: "The gradient at the origin is <2,-1,0>; its dot product with the direction is (2-1)/sqrt(2)=1/sqrt(2)."
  },
  {
    id: "mvc-vfa-m-099",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y,z)=ln(x^2+y^2+z^2) at (1,2,2), find the directional derivative along the outward unit radial direction.",
    options: [
      "2/3",
      "1/3",
      "1",
      "2"
    ],
    correctAnswer: 0,
    explanation: "The gradient is 2*(x,y,z)/(x^2+y^2+z^2). The radial unit vector is (1,2,2)/3, and the dot product is 2/3."
  },
  {
    id: "mvc-vfa-m-100",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Medium",
    question: "For f(x,y,z)=x+y+z, find the directional derivative in the unit direction <2/3,-1/3,2/3>.",
    options: [
      "1",
      "0",
      "sqrt(3)",
      "5/3"
    ],
    correctAnswer: 0,
    explanation: "The direction has unit length, and the gradient is <1,1,1>. Their dot product is 2/3-1/3+2/3=1."
  },
    // =========================================================
  // HARD: VECTOR POTENTIALS (25 QUESTIONS)
  // =========================================================
  {
    id: "mvc-vfa-h-001",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "For A = <x*y^2, y*z^2, z*x^2>, calculate curl A.",
    options: [
      "<-2*y*z, -2*x*z, -2*x*y>",
      "<2*y*z, 2*x*z, 2*x*y>",
      "<-2*x*y, -2*y*z, -2*x*z>",
      "<0, 0, 0>"
    ],
    correctAnswer: 0,
    explanation: "Using curl A = <R_y-Q_z, P_z-R_x, Q_x-P_y> gives <-2*y*z,-2*x*z,-2*x*y>."
  },
  {
    id: "mvc-vfa-h-002",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "For A = <x*z, x*y, y*z>, what is curl A?",
    options: [
      "<z, x, y>",
      "<-z, -x, -y>",
      "<x, y, z>",
      "<0, 0, 0>"
    ],
    correctAnswer: 0,
    explanation: "The components are R_y-Q_z=z, P_z-R_x=x, and Q_x-P_y=y."
  },
  {
    id: "mvc-vfa-h-003",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "Let A = <0, 0, (x^2+y^2)^2/4>. What is curl A?",
    options: [
      "<y*(x^2+y^2), -x*(x^2+y^2), 0>",
      "<x*(x^2+y^2), y*(x^2+y^2), 0>",
      "<-y*(x^2+y^2), x*(x^2+y^2), 0>",
      "<0, 0, x^2+y^2>"
    ],
    correctAnswer: 0,
    explanation: "Differentiate the third component with respect to y for the first component and take the negative x derivative for the second."
  },
  {
    id: "mvc-vfa-h-004",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "Which vector potential produces F = <0, 0, 2*x>?",
    options: [
      "<0, x^2, 0>",
      "<x^2, 0, 0>",
      "<0, 0, x^2>",
      "<0, 2*x, 0>"
    ],
    correctAnswer: 0,
    explanation: "curl<0,x^2,0> = <0,0,2*x>."
  },
  {
    id: "mvc-vfa-h-005",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "For A = <-y*z, x*z, 0>, calculate curl A.",
    options: [
      "<-x, -y, 2*z>",
      "<x, y, -2*z>",
      "<-x, y, 2*z>",
      "<0, 0, 2*z>"
    ],
    correctAnswer: 0,
    explanation: "The curl components are -x, -y, and z-(-z)=2*z."
  },
  {
    id: "mvc-vfa-h-006",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "If F = curl A and A is twice continuously differentiable, which identity must hold?",
    options: [
      "div F = 0",
      "curl F = 0",
      "grad F = 0",
      "F = 0"
    ],
    correctAnswer: 0,
    explanation: "The vector-calculus identity div(curl A)=0 holds for sufficiently smooth A."
  },
  {
    id: "mvc-vfa-h-007",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "A smooth vector field has divergence 4 throughout an open region. Can it be the curl of a smooth vector potential there?",
    options: [
      "Yes, for every region",
      "No, because every curl has zero divergence",
      "Yes, if the field is constant",
      "Only if its magnitude is 4"
    ],
    correctAnswer: 1,
    explanation: "A nonzero divergence contradicts the necessary identity div(curl A)=0."
  },
  {
    id: "mvc-vfa-h-008",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "Let A = <-y/2, x/2, 0>. By Stokes' theorem, what is the counterclockwise circulation around the unit circle in the xy-plane?",
    options: [
      "0",
      "pi",
      "2*pi",
      "4*pi"
    ],
    correctAnswer: 1,
    explanation: "curl A=<0,0,1>. Its flux through the unit disk is the disk's area, pi."
  },
  {
    id: "mvc-vfa-h-009",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "Let A = <-y, x, 0>. What is the counterclockwise circulation around the unit circle in the xy-plane?",
    options: [
      "pi",
      "2*pi",
      "4*pi",
      "0"
    ],
    correctAnswer: 2,
    explanation: "curl A=<0,0,2>. By Stokes' theorem, the circulation is 2 times the unit disk's area, or 2*pi."
  },
  {
    id: "mvc-vfa-h-010",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "If A is a vector potential for F and psi is smooth, which field is also a potential for F?",
    options: [
      "A + grad(psi)",
      "A + F",
      "A + psi*F",
      "curl(A + psi)"
    ],
    correctAnswer: 0,
    explanation: "curl(A+grad(psi))=curl A because curl(grad(psi))=0."
  },
  {
    id: "mvc-vfa-h-011",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "For A = <x*y, y*z, z*x>, calculate curl A.",
    options: [
      "<-y, -z, -x>",
      "<y, z, x>",
      "<0, 0, 0>",
      "<x, y, z>"
    ],
    correctAnswer: 0,
    explanation: "The components are 0-y, 0-z, and 0-x."
  },
  {
    id: "mvc-vfa-h-012",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "Which statement about a vector potential is correct?",
    options: [
      "It is always unique",
      "Adding a gradient field does not change its curl",
      "Its divergence must equal the target field",
      "Its curl must be zero"
    ],
    correctAnswer: 1,
    explanation: "The curl of a gradient is zero, so adding a gradient leaves the potential's curl unchanged."
  },
  {
    id: "mvc-vfa-h-013",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "For F = <2*x, 2*y, -4*z>, which statement is correct regarding the necessary divergence condition for F = curl A?",
    options: [
      "It fails because div F = 8",
      "It holds because div F = 0",
      "It fails because curl F must be zero",
      "It holds only at the origin"
    ],
    correctAnswer: 1,
    explanation: "div F = 2+2-4=0. This satisfies the necessary condition but does not alone settle global existence on every domain."
  },
  {
    id: "mvc-vfa-h-014",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "Which potential produces F = <0, 0, x+y>?",
    options: [
      "<0, x^2/2+x*y, 0>",
      "<0, 0, x*y>",
      "<x+y, 0, 0>",
      "<0, x+y, 0>"
    ],
    correctAnswer: 0,
    explanation: "The z-component of curl A is the x derivative of the second component, which equals x+y."
  },
  {
    id: "mvc-vfa-h-015",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "If a surface orientation is reversed, how does its flux integral of curl A change?",
    options: [
      "It doubles",
      "It is unchanged",
      "Its sign reverses",
      "It becomes zero in every case"
    ],
    correctAnswer: 2,
    explanation: "Reversing orientation reverses the chosen normal vector, so the oriented flux changes sign."
  },
  {
    id: "mvc-vfa-h-016",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "For A = <sin(y), sin(z), sin(x)>, calculate curl A.",
    options: [
      "<-cos(z), -cos(x), -cos(y)>",
      "<cos(z), cos(x), cos(y)>",
      "<0, 0, 0>",
      "<-cos(y), -cos(z), -cos(x)>"
    ],
    correctAnswer: 0,
    explanation: "Apply the curl formula and differentiate each component with respect to the appropriate variable."
  },
  {
    id: "mvc-vfa-h-017",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "Which field cannot be the curl of a smooth vector potential on a region containing the point?",
    options: [
      "<y, -x, 0>",
      "<x, y, z>",
      "<0, 0, 3>",
      "<1, 0, 0>"
    ],
    correctAnswer: 1,
    explanation: "The divergence of <x,y,z> is 3, whereas the divergence of every curl is zero."
  },
  {
    id: "mvc-vfa-h-018",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "If F = curl A throughout a volume V where A is sufficiently smooth, what is the flux of F through the entire closed boundary of V?",
    options: [
      "The volume of V",
      "The area of the boundary",
      "Zero",
      "The maximum value of F"
    ],
    correctAnswer: 2,
    explanation: "The divergence theorem gives the closed-boundary flux as the volume integral of div F, which is zero."
  },
  {
    id: "mvc-vfa-h-019",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "Which potential produces F = <0, 0, 3*x^2+2*y>?",
    options: [
      "<0, x^3+2*x*y, 0>",
      "<0, 0, x^3+2*x*y>",
      "<x^3+2*x*y, 0, 0>",
      "<0, 3*x^2+2*y, 0>"
    ],
    correctAnswer: 0,
    explanation: "The z-component of curl A is d(x^3+2*x*y)/dx=3*x^2+2*y."
  },
  {
    id: "mvc-vfa-h-020",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "A proposed field F has nonzero divergence, but a calculation also claims F = curl A for a smooth A. What follows?",
    options: [
      "Both claims can always hold",
      "At least one claim or calculation must be wrong",
      "A must be constant",
      "Only the magnitude of F is wrong"
    ],
    correctAnswer: 1,
    explanation: "The identity div(curl A)=0 makes the two claims incompatible."
  },
  {
    id: "mvc-vfa-h-021",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "Stokes' theorem identifies the circulation around a closed curve with which integral?",
    options: [
      "The surface integral of curl A over a spanning surface",
      "The volume integral of div A",
      "The integral of A's magnitude over the volume",
      "The gradient of A at one point"
    ],
    correctAnswer: 0,
    explanation: "The theorem states that the circulation of A around the boundary equals the flux of curl A through the oriented surface."
  },
  {
    id: "mvc-vfa-h-022",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "If curl A1 = curl A2 on a region, what can be said about A1-A2?",
    options: [
      "Its curl is zero",
      "Its divergence is necessarily zero",
      "It must be the zero field",
      "It must equal A1+A2"
    ],
    correctAnswer: 0,
    explanation: "By linearity, curl(A1-A2)=curl A1-curl A2=0."
  },
  {
    id: "mvc-vfa-h-023",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "For A = <z^2, x^2, y^2>, calculate curl A.",
    options: [
      "<2*y, 2*z, 2*x>",
      "<-2*y, -2*z, -2*x>",
      "<2*z, 2*x, 2*y>",
      "<0, 0, 0>"
    ],
    correctAnswer: 0,
    explanation: "The curl components are 2*y, 2*z, and 2*x."
  },
  {
    id: "mvc-vfa-h-024",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "On a simply connected open region, a sufficiently smooth vector field with zero curl is generally:",
    options: [
      "A gradient field",
      "A field with nonzero divergence everywhere",
      "A vector potential for every possible field",
      "Necessarily constant"
    ],
    correctAnswer: 0,
    explanation: "On a simply connected domain, a smooth curl-free field is conservative and can be represented as the gradient of a scalar potential."
  },
  {
    id: "mvc-vfa-h-025",
    module: "Vector Fields & Approximation Theory",
    topic: "Vector Potentials",
    difficulty: "Hard",
    question: "Why does zero divergence alone not establish a vector potential on every possible domain?",
    options: [
      "The divergence is unrelated to derivatives",
      "Global existence can depend on the domain's topology",
      "All divergence-free fields are constant",
      "Curl is defined only for constant fields"
    ],
    correctAnswer: 1,
    explanation: "Zero divergence is a necessary local condition, but global potential existence may depend on domain topology and regularity."
  },

  // =========================================================
  // HARD: MULTIVARIABLE TAYLOR SERIES (25 QUESTIONS)
  // =========================================================
  {
    id: "mvc-vfa-h-026",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "Find the second-order Taylor polynomial of f(x,y)=e^(2*x-y) at (0,0).",
    options: [
      "1+2*x-y+(2*x-y)^2/2",
      "1+2*x-y",
      "1+(2*x-y)^2",
      "2*x-y+(2*x-y)^2/2"
    ],
    correctAnswer: 0,
    explanation: "Use e^t = 1+t+t^2/2 plus higher-order terms, where t=2*x-y."
  },
  {
    id: "mvc-vfa-h-027",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "What is the second-order Taylor polynomial of f(x,y)=ln(1+x+2*y) at the origin?",
    options: [
      "(x+2*y)-(x+2*y)^2/2",
      "1+x+2*y",
      "(x+2*y)^2/2",
      "x+2*y+(x+2*y)^2/2"
    ],
    correctAnswer: 0,
    explanation: "Use ln(1+t)=t-t^2/2 plus higher-order terms."
  },
  {
    id: "mvc-vfa-h-028",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "Find the second-order Taylor polynomial of f(x,y)=sqrt(1+2*x-y) at (0,0).",
    options: [
      "1+(2*x-y)/2-(2*x-y)^2/8",
      "1+2*x-y",
      "1-(2*x-y)/2",
      "1+(2*x-y)^2/8"
    ],
    correctAnswer: 0,
    explanation: "Use sqrt(1+t)=1+t/2-t^2/8 plus higher-order terms."
  },
  {
    id: "mvc-vfa-h-029",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For f(x,y)=x^2*y at (1,2), let h=x-1 and k=y-2. Find the second-order Taylor polynomial.",
    options: [
      "2+4*h+k+2*h^2+2*h*k",
      "2+2*h+k+h^2",
      "2+4*h+2*k+h^2",
      "2+h+4*k+2*h^2"
    ],
    correctAnswer: 0,
    explanation: "At (1,2), f=2, grad f=<4,1>, and the Hessian entries are fxx=4, fxy=2, fyy=0."
  },
  {
    id: "mvc-vfa-h-030",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For f(x,y)=x^2+3*x*y+2*y^2 at (1,-1), let h=x-1 and k=y+1. What is the second-order Taylor polynomial?",
    options: [
      "-h-k+h^2+3*h*k+2*k^2",
      "h+k+h^2+3*h*k+2*k^2",
      "-h-k+2*h^2+3*h*k+k^2",
      "h-k+h^2+2*k^2"
    ],
    correctAnswer: 0,
    explanation: "The value is 0, the gradient is <-1,-1>, and the Hessian is [[2,3],[3,4]]."
  },
  {
    id: "mvc-vfa-h-031",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For f(x,y)=ln(x)+y^2 at (1,1), using h=x-1 and k=y-1, the second-order Taylor polynomial is:",
    options: [
      "1+h+2*k-h^2/2+k^2",
      "1+h+2*k+h^2/2+k^2",
      "1-h+2*k-h^2/2+k^2",
      "1+h+k-h^2+k^2"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <1,2> and the Hessian is diag(-1,2)."
  },
  {
    id: "mvc-vfa-h-032",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "Find the second-order Taylor polynomial of f(x,y)=e^x*cos(y) at (0,0).",
    options: [
      "1+x+(x^2-y^2)/2",
      "1+x+y+(x^2+y^2)/2",
      "1+x-y",
      "1+(x^2+y^2)/2"
    ],
    correctAnswer: 0,
    explanation: "Multiplying the expansions e^x and cos(y) and retaining terms through total degree two gives 1+x+x^2/2-y^2/2."
  },
  {
    id: "mvc-vfa-h-033",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For f(x,y)=ln(x+y) at (1,1), using h=x-1 and k=y-1, the second-order Taylor polynomial is:",
    options: [
      "ln(2)+(h+k)/2-(h^2+2*h*k+k^2)/8",
      "ln(2)+h+k",
      "ln(2)+(h+k)/2+(h^2+k^2)/8",
      "ln(2)-h-k"
    ],
    correctAnswer: 0,
    explanation: "Both first derivatives are 1/2; all entries of the Hessian are -1/4 at (1,1)."
  },
  {
    id: "mvc-vfa-h-034",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For f(x,y)=1/(x+y) at (1,1), using h=x-1 and k=y-1, what is the second-order Taylor polynomial?",
    options: [
      "1/2-(h+k)/4+(h+k)^2/8",
      "1/2+(h+k)/4+(h+k)^2/8",
      "1-(h+k)+(h+k)^2",
      "1/2-(h+k)/2"
    ],
    correctAnswer: 0,
    explanation: "Expand 1/(2+h+k) around h+k=0."
  },
  {
    id: "mvc-vfa-h-035",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For f(x,y)=x^2*y^2 at (1,2), use h=x-1 and k=y-2. What is the second-order Taylor polynomial?",
    options: [
      "4+8*h+4*k+4*h^2+8*h*k+k^2",
      "4+4*h+8*k+h^2+k^2",
      "4+8*h+4*k+8*h^2+4*h*k+k^2",
      "4+8*h+4*k+4*h^2+4*h*k+2*k^2"
    ],
    correctAnswer: 0,
    explanation: "The value is 4, the gradient is <8,4>, and the second derivatives are fxx=8, fxy=8, fyy=2."
  },
  {
    id: "mvc-vfa-h-036",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "Suppose f(a)=5, grad f(a)=<2,-3>, and H(a)=[[4,2],[2,6]]. Using h=x-a1 and k=y-a2, the second-order Taylor polynomial is:",
    options: [
      "5+2*h-3*k+2*h^2+2*h*k+3*k^2",
      "5+2*h-3*k+4*h^2+2*h*k+6*k^2",
      "5+2*h+3*k+2*h^2+2*h*k+3*k^2",
      "5+h-3*k+2*h^2+3*k^2"
    ],
    correctAnswer: 0,
    explanation: "The quadratic term is one half of the Hessian quadratic form."
  },
  {
    id: "mvc-vfa-h-037",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "If fxy(a)=5, what coefficient multiplies h*k in the second-order Taylor polynomial when the Hessian is symmetric?",
    options: [
      "5",
      "10",
      "5/2",
      "1/2"
    ],
    correctAnswer: 0,
    explanation: "The mixed terms appear twice in h-transpose H h, and the overall factor 1/2 cancels that doubling."
  },
  {
    id: "mvc-vfa-h-038",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For f(x,y)=e^(x+y) at (1,0), let h=x-1 and k=y. What is the second-order Taylor polynomial?",
    options: [
      "e*(1+h+k+(h+k)^2/2)",
      "1+h+k+(h+k)^2/2",
      "e*(1+h+k)",
      "e*(1+h^2+k^2)"
    ],
    correctAnswer: 0,
    explanation: "The value, both first derivatives, and all second derivatives at (1,0) equal e."
  },
  {
    id: "mvc-vfa-h-039",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "What is the second-order Taylor polynomial of f(x,y)=ln(1+x^2+y^2) at the origin?",
    options: [
      "x^2+y^2",
      "1+x^2+y^2",
      "x+y",
      "x^2+y^2-(x^2+y^2)^2/2"
    ],
    correctAnswer: 0,
    explanation: "The constant and linear terms are zero; the quadratic contribution is x^2+y^2."
  },
  {
    id: "mvc-vfa-h-040",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For f(x,y)=atan(x+y) at the origin, what is the second-order Taylor polynomial?",
    options: [
      "x+y",
      "x+y-(x+y)^2/2",
      "1+x+y",
      "(x+y)^2"
    ],
    correctAnswer: 0,
    explanation: "The expansion atan(t)=t-t^3/3+... has no quadratic term."
  },
  {
    id: "mvc-vfa-h-041",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For f(x,y)=x^2*y+e^y at (0,0), what is the second-order Taylor polynomial?",
    options: [
      "1+y+y^2/2",
      "1+x^2*y+y",
      "1+y+x^2",
      "1+y^2"
    ],
    correctAnswer: 0,
    explanation: "The term x^2*y has total degree three, so it does not appear in a second-order polynomial."
  },
  {
    id: "mvc-vfa-h-042",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For f(x,y)=x^2-x*y+2*y^2 at (1,1), let h=x-1 and k=y-1. Its second-order Taylor polynomial is:",
    options: [
      "2+h+3*k+h^2-h*k+2*k^2",
      "2+h-3*k+h^2+h*k+2*k^2",
      "2+3*h+k+2*h^2-h*k+k^2",
      "2+h+3*k+2*h^2-h*k+k^2"
    ],
    correctAnswer: 0,
    explanation: "At (1,1), the value is 2, the gradient is <1,3>, and the Hessian is [[2,-1],[-1,4]]."
  },
  {
    id: "mvc-vfa-h-043",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For f(x,y)=e^x*sin(y) at (0,0), what is the second-order Taylor polynomial?",
    options: [
      "y+x*y",
      "1+x+y",
      "y+(x^2+y^2)/2",
      "x*y"
    ],
    correctAnswer: 0,
    explanation: "Multiplying e^x by sin(y) gives y+x*y plus terms of total degree three and higher."
  },
  {
    id: "mvc-vfa-h-044",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "If grad f(a)=0, which expression gives the second-order Taylor polynomial?",
    options: [
      "f(a)+1/2*h^T*H(a)*h",
      "grad f(a) dot h",
      "f(a)+h^T*H(a)*h",
      "f(a)+grad f(a)"
    ],
    correctAnswer: 0,
    explanation: "The linear contribution vanishes at a point where the gradient is zero."
  },
  {
    id: "mvc-vfa-h-045",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For a twice continuously differentiable scalar function, which property does its Hessian satisfy?",
    options: [
      "It is symmetric",
      "It is always diagonal",
      "Its determinant is always zero",
      "All its entries are positive"
    ],
    correctAnswer: 0,
    explanation: "Equality of continuous mixed partial derivatives makes the Hessian symmetric."
  },
  {
    id: "mvc-vfa-h-046",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "Suppose f(a)=0, grad f(a)=0, and the Hessian is positive definite at a. Under the standard second-derivative test, what follows?",
    options: [
      "a is a strict local minimum",
      "a is a strict local maximum",
      "a is a saddle point",
      "The classification is always inconclusive"
    ],
    correctAnswer: 0,
    explanation: "A positive-definite Hessian at a critical point guarantees a strict local minimum."
  },
  {
    id: "mvc-vfa-h-047",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "If the gradient and Hessian at a point are both zero, which statement is correct about the second-order Taylor polynomial?",
    options: [
      "It is the constant f(a)",
      "It is necessarily zero",
      "It always proves a local minimum",
      "It always proves a saddle point"
    ],
    correctAnswer: 0,
    explanation: "With zero gradient and Hessian, the constant term remains, but higher-order terms may affect local behavior."
  },
  {
    id: "mvc-vfa-h-048",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For f(x,y)=x^3+y^3 at the origin, what is the second-order Taylor polynomial?",
    options: [
      "0",
      "x^3+y^3",
      "x^2+y^2",
      "x+y"
    ],
    correctAnswer: 0,
    explanation: "The function and its first and second derivatives vanish at the origin, so the second-order polynomial is zero."
  },
  {
    id: "mvc-vfa-h-049",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "In n variables, what is the quadratic term in the second-order Taylor polynomial?",
    options: [
      "1/2*h^T*H(a)*h",
      "grad f(a) dot h",
      "det(H(a))*h",
      "f(a)^2"
    ],
    correctAnswer: 0,
    explanation: "The Hessian quadratic form supplies the second-order term."
  },
  {
    id: "mvc-vfa-h-050",
    module: "Vector Fields & Approximation Theory",
    topic: "Multivariable Taylor Series & Second-Order Approximation",
    difficulty: "Hard",
    question: "For a sufficiently smooth function, the remainder after a second-order Taylor approximation is generally of what asymptotic order near the expansion point?",
    options: [
      "o(||h||^2)",
      "Always exactly zero",
      "O(||h||)",
      "A nonzero constant"
    ],
    correctAnswer: 0,
    explanation: "With continuous second derivatives, the remainder after the quadratic Taylor polynomial is little-o of the squared displacement norm."
  },

  // =========================================================
  // HARD: IMPLICIT FUNCTION THEOREM (25 QUESTIONS)
  // =========================================================
  {
    id: "mvc-vfa-h-051",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "On x^2+y^2=25, find dy/dx at (3,4).",
    options: [
      "-3/4",
      "-4/3",
      "3/4",
      "4/3"
    ],
    correctAnswer: 0,
    explanation: "Implicit differentiation yields dy/dx=-x/y=-3/4."
  },
  {
    id: "mvc-vfa-h-052",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For x^2+y^2=25, calculate d^2y/dx^2 at (3,4).",
    options: [
      "-25/64",
      "-3/4",
      "25/64",
      "-1/4"
    ],
    correctAnswer: 0,
    explanation: "Differentiating twice gives y''=-(x^2+y^2)/y^3=-25/64."
  },
  {
    id: "mvc-vfa-h-053",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For x^2+x*y+y^2=7 at (1,2), what is dy/dx?",
    options: [
      "-4/5",
      "-5/4",
      "4/5",
      "5/4"
    ],
    correctAnswer: 0,
    explanation: "The derivative is -(2*x+y)/(x+2*y)=-4/5."
  },
  {
    id: "mvc-vfa-h-054",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For x^2+x*y+y^2=7, calculate d^2y/dx^2 at (1,2).",
    options: [
      "-42/125",
      "-4/5",
      "42/125",
      "-2/5"
    ],
    correctAnswer: 0,
    explanation: "Use y''=-(Fxx+2*Fxy*y'+Fyy*(y')^2)/Fy, with y'=-4/5 and Fy=5."
  },
  {
    id: "mvc-vfa-h-055",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "The equation x^2+y^3=9 defines y locally as a function of x near (2,1). Find dy/dx.",
    options: [
      "-4/3",
      "-3/4",
      "4/3",
      "3/4"
    ],
    correctAnswer: 0,
    explanation: "Differentiation gives 2*x+3*y^2*y'=0, yielding y'=-4/3."
  },
  {
    id: "mvc-vfa-h-056",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For x^2+y^3=9 at (2,1), calculate d^2y/dx^2.",
    options: [
      "-38/9",
      "-4/3",
      "38/9",
      "-14/3"
    ],
    correctAnswer: 0,
    explanation: "Differentiating twice gives 2+6*y*(y')^2+3*y^2*y''=0. Substituting y=-? At (2,1), y'=-4/3, so y''=-38/9."
  },
  {
    id: "mvc-vfa-h-057",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "The equation e^y+x*y-1=0 defines y locally near (0,0). What is y'(0)?",
    options: [
      "0",
      "1",
      "-1",
      "Undefined because Fy=0"
    ],
    correctAnswer: 0,
    explanation: "Fy=e^y+x=1 and Fx=y=0 at the origin, so y'=-Fx/Fy=0."
  },
  {
    id: "mvc-vfa-h-058",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For x^2+y^2=1, find d^2y/dx^2 at the upper point (0,1).",
    options: [
      "-1",
      "0",
      "1",
      "Undefined"
    ],
    correctAnswer: 0,
    explanation: "From y''=-(x^2+y^2)/y^3, the value at (0,1) is -1."
  },
  {
    id: "mvc-vfa-h-059",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For x^2+xy+y^2=3 at (1,1), calculate d^2y/dx^2.",
    options: [
      "-2/3",
      "-1",
      "2/3",
      "1"
    ],
    correctAnswer: 0,
    explanation: "Here y'=-1, Fxx=2, Fxy=1, Fyy=2, and Fy=3. Therefore y''=-(2-2+2)/3=-2/3."
  },
  {
    id: "mvc-vfa-h-060",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For F(x,y,z)=x+2*y+3*z-12=0, with z treated as a function of x and y, what is dz/dy?",
    options: [
      "-2/3",
      "-1/3",
      "2/3",
      "3/2"
    ],
    correctAnswer: 0,
    explanation: "Differentiating with respect to y gives 2+3*z_y=0."
  },
  {
    id: "mvc-vfa-h-061",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For F(x,y,z)=x+2*y+3*z-12=0, with z=z(x,y), what is dz/dx?",
    options: [
      "-1/3",
      "-2/3",
      "1/3",
      "3"
    ],
    correctAnswer: 0,
    explanation: "Differentiating with respect to x gives 1+3*z_x=0."
  },
  {
    id: "mvc-vfa-h-062",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "The equation x*y+z-3=0 defines z as a function of x and y. At (x,y)=(2,1), what is dz/dx?",
    options: [
      "-1",
      "-2",
      "1",
      "2"
    ],
    correctAnswer: 0,
    explanation: "Solving gives z=3-xy, so z_x=-y=-1."
  },
  {
    id: "mvc-vfa-h-063",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "The equation e^(x+y)+z-2=0 defines z=z(x,y). At (0,0), what is dz/dx?",
    options: [
      "-1",
      "0",
      "1",
      "2"
    ],
    correctAnswer: 0,
    explanation: "Solving gives z=2-e^(x+y), so z_x=-e^(x+y)=-1 at the origin."
  },
  {
    id: "mvc-vfa-h-064",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For x^2+y^2+z^2=9 at (2,1,2), treating z=z(x,y), what is dz/dx?",
    options: [
      "-1",
      "-1/2",
      "1",
      "1/2"
    ],
    correctAnswer: 0,
    explanation: "Implicit differentiation gives z_x=-x/z=-2/2=-1."
  },
  {
    id: "mvc-vfa-h-065",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For x^2+y^2+z^2=9 at (2,1,2), treating z=z(x,y), what is dz/dy?",
    options: [
      "-1/2",
      "-1",
      "1/2",
      "1"
    ],
    correctAnswer: 0,
    explanation: "Implicit differentiation gives z_y=-y/z=-1/2."
  },
  {
    id: "mvc-vfa-h-066",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For F1=u+v-x=0 and F2=u-v-y=0, what is the Jacobian determinant with respect to (u,v)?",
    options: [
      "-2",
      "-1",
      "0",
      "2"
    ],
    correctAnswer: 0,
    explanation: "The Jacobian is [[1,1],[1,-1]], whose determinant is -2."
  },
  {
    id: "mvc-vfa-h-067",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For u+v-x=0 and u-v-y=0, what are u and v as functions of x and y?",
    options: [
      "u=(x+y)/2, v=(x-y)/2",
      "u=x+y, v=x-y",
      "u=(x-y)/2, v=(x+y)/2",
      "u=x/2, v=y/2"
    ],
    correctAnswer: 0,
    explanation: "Adding the equations gives 2*u=x+y; subtracting gives 2*v=x-y."
  },
  {
    id: "mvc-vfa-h-068",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For the system u+v-x=0 and u-v-y=0, what is du/dx?",
    options: [
      "1/2",
      "-1/2",
      "1",
      "0"
    ],
    correctAnswer: 0,
    explanation: "From u=(x+y)/2, the partial derivative with respect to x is 1/2."
  },
  {
    id: "mvc-vfa-h-069",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For x^2+y^2=4 at (2,0), what does the standard Implicit Function Theorem permit locally?",
    options: [
      "x as a function of y",
      "y as a function of x",
      "Neither variable under the standard condition",
      "Both variables as global functions"
    ],
    correctAnswer: 0,
    explanation: "F_x=2*x=4 is nonzero, whereas F_y=2*y=0."
  },
  {
    id: "mvc-vfa-h-070",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For x^2+y^2=4 at (0,2), which local representation is guaranteed by the standard Implicit Function Theorem?",
    options: [
      "y as a function of x",
      "x as a function of y",
      "Neither",
      "Both global representations"
    ],
    correctAnswer: 0,
    explanation: "F_y=2*y=4 is nonzero, so y can locally be expressed as a function of x."
  },
  {
    id: "mvc-vfa-h-071",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For x^3+y^3=9 at (1,2), find dy/dx.",
    options: [
      "-1/4",
      "-4",
      "1/4",
      "4"
    ],
    correctAnswer: 0,
    explanation: "Differentiation gives 3*x^2+3*y^2*y'=0, so y'=-x^2/y^2=-1/4."
  },
  {
    id: "mvc-vfa-h-072",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For x*y+y^2-8=0 at (2,2), find dy/dx.",
    options: [
      "-1/3",
      "-3",
      "1/3",
      "3"
    ],
    correctAnswer: 0,
    explanation: "F_x=y=2 and F_y=x+2*y=6, so y'=-F_x/F_y=-1/3."
  },
  {
    id: "mvc-vfa-h-073",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For F1=u+v-x=0 and F2=u^2+v^2-y=0, evaluate the Jacobian determinant with respect to (u,v) at (u,v)=(1,1).",
    options: [
      "0",
      "2",
      "-2",
      "4"
    ],
    correctAnswer: 0,
    explanation: "The Jacobian is [[1,1],[2,2]], whose determinant is zero, so the standard nonsingular-Jacobian condition fails at this point."
  },
  {
    id: "mvc-vfa-h-074",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "The equation x*y+y*z+z*x-11=0 defines z as a function of x and y near (1,2,3). What is dz/dx?",
    options: [
      "-5/3",
      "-3/5",
      "5/3",
      "3/5"
    ],
    correctAnswer: 0,
    explanation: "F_x=y+z=5 and F_z=x+y=3, hence z_x=-F_x/F_z=-5/3."
  },
  {
    id: "mvc-vfa-h-075",
    module: "Vector Fields & Approximation Theory",
    topic: "Implicit Function Theorem",
    difficulty: "Hard",
    question: "For the equation in the previous question, what is dz/dy at (1,2,3)?",
    options: [
      "-4/3",
      "-3/4",
      "4/3",
      "3/4"
    ],
    correctAnswer: 0,
    explanation: "F_y=x+z=4 and F_z=x+y=3, so z_y=-F_y/F_z=-4/3."
  },

  // =========================================================
  // HARD: DIRECTIONAL DERIVATIVES IN N DIMENSIONS (25 QUESTIONS)
  // =========================================================
  {
    id: "mvc-vfa-h-076",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y,z)=x^2*y+y*z^2 at (1,2,1), find the directional derivative in unit direction <2/3,1/3,2/3>.",
    options: [
      "6",
      "4",
      "8/3",
      "10/3"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <4,2,4>; its dot product with the direction is 8/3+2/3+8/3=6."
  },
  {
    id: "mvc-vfa-h-077",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y,z)=ln(x^2+y^2+z^2) at (1,2,2), find the directional derivative in the outward unit radial direction.",
    options: [
      "2/3",
      "1/3",
      "1",
      "2"
    ],
    correctAnswer: 0,
    explanation: "The gradient is 2*(x,y,z)/(x^2+y^2+z^2). Its dot product with the radial unit vector (1,2,2)/3 is 2/3."
  },
  {
    id: "mvc-vfa-h-078",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y,z)=x*y+y*z+z*x at (1,2,3), find the directional derivative in the unit direction <1/3,2/3,2/3>.",
    options: [
      "19/3",
      "5",
      "16/3",
      "6"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <5,4,3>. Dotting with the direction gives (5+8+6)/3=19/3."
  },
  {
    id: "mvc-vfa-h-079",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y,z)=e^(x+y+z) at the origin, find the directional derivative in direction <1/3,2/3,2/3>.",
    options: [
      "5/3",
      "1",
      "sqrt(3)",
      "2/3"
    ],
    correctAnswer: 0,
    explanation: "The gradient at the origin is <1,1,1>. The given direction has unit length, and the dot product is 5/3."
  },
  {
    id: "mvc-vfa-h-080",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y,z)=x^2+y^2+z^2 at (2,-1,2), what is the maximum directional derivative?",
    options: [
      "6",
      "12",
      "4",
      "9"
    ],
    correctAnswer: 0,
    explanation: "The maximum directional derivative is the gradient norm. The gradient is <4,-2,4>, with norm 6."
  },
  {
    id: "mvc-vfa-h-081",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "If the gradient of f is nonzero at a point, what is the minimum directional derivative over all unit directions?",
    options: [
      "-||grad f||",
      "0",
      "||grad f||",
      "-1"
    ],
    correctAnswer: 0,
    explanation: "The minimum is achieved in the direction opposite the gradient."
  },
  {
    id: "mvc-vfa-h-082",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "If ||grad f||=10 and a unit direction makes an angle with the gradient whose cosine is 3/5, what is the directional derivative?",
    options: [
      "6",
      "10",
      "3",
      "50"
    ],
    correctAnswer: 0,
    explanation: "The directional derivative is ||grad f||*cos(theta)=10*(3/5)=6."
  },
  {
    id: "mvc-vfa-h-083",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "What is the unit vector in the direction of <2,-2,1>?",
    options: [
      "<2/3,-2/3,1/3>",
      "<2,-2,1>",
      "<1/3,-1/3,1/3>",
      "<2/5,-2/5,1/5>"
    ],
    correctAnswer: 0,
    explanation: "The vector norm is 3, so each component is divided by 3."
  },
  {
    id: "mvc-vfa-h-084",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y,z)=x^2*y+z at (1,2,3), find the directional derivative along <1/3,2/3,2/3>.",
    options: [
      "8/3",
      "4",
      "6",
      "10/3"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <4,1,1>. Its dot product with the direction is 4/3+2/3+2/3=8/3."
  },
  {
    id: "mvc-vfa-h-085",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y)=x^2+y^2 at (2,-1), find the directional derivative in unit direction <1/sqrt(2),1/sqrt(2)>.",
    options: [
      "sqrt(2)",
      "2*sqrt(2)",
      "0",
      "3"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <4,-2>; the dot product is (4-2)/sqrt(2)=sqrt(2)."
  },
  {
    id: "mvc-vfa-h-086",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y,z)=3*x-4*y+12*z, what is the maximum directional derivative?",
    options: [
      "13",
      "19",
      "12",
      "5"
    ],
    correctAnswer: 0,
    explanation: "The gradient norm is sqrt(3^2+(-4)^2+12^2)=13."
  },
  {
    id: "mvc-vfa-h-087",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y,z)=x*y*z at (1,2,3), what is the maximum directional derivative?",
    options: [
      "7",
      "6",
      "sqrt(41)",
      "9"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <6,3,2>, whose norm is sqrt(36+9+4)=7."
  },
  {
    id: "mvc-vfa-h-088",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y,z)=x^2+y^2+z^2 at (1,2,2), find the directional derivative along unit vector <2/3,1/3,2/3>.",
    options: [
      "16/3",
      "4",
      "6",
      "8"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <2,4,4>. Its dot product with the direction is 4/3+4/3+8/3=16/3."
  },
  {
    id: "mvc-vfa-h-089",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y)=x/y at (2,1), find the directional derivative in the unit direction <3/5,4/5>.",
    options: [
      "-1",
      "1",
      "-3/5",
      "2"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <1,-2>. The dot product with the unit direction is 3/5-8/5=-1."
  },
  {
    id: "mvc-vfa-h-090",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y)=x^2*e^y at (1,0), find the directional derivative in unit direction <1/sqrt(5),2/sqrt(5)>.",
    options: [
      "4/sqrt(5)",
      "2/sqrt(5)",
      "1",
      "sqrt(5)"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <2,1>; its dot product with the given direction is (2+2)/sqrt(5)."
  },
  {
    id: "mvc-vfa-h-091",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y,z)=x^2+y^2+z^2, at which point does the maximum directional derivative equal 10?",
    options: [
      "Any point with ||x||=5",
      "Any point with ||x||=10",
      "Only the origin",
      "Any point with ||x||=1"
    ],
    correctAnswer: 0,
    explanation: "The gradient is 2*x, so its norm is 2*||x||. Setting it equal to 10 gives ||x||=5."
  },
  {
    id: "mvc-vfa-h-092",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "Let f(x,y,z)=x*y*z. At (1,2,3), find the directional derivative along <1,1,1>/sqrt(3).",
    options: [
      "11/sqrt(3)",
      "7",
      "11/3",
      "sqrt(3)"
    ],
    correctAnswer: 0,
    explanation: "The gradient is <6,3,2>. The dot product with <1,1,1>/sqrt(3) is 11/sqrt(3)."
  },
  {
    id: "mvc-vfa-h-093",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y,z)=ln(x^2+y^2+z^2) at (1,2,2), what is the directional derivative along the unit vector opposite the outward radial direction?",
    options: [
      "-2/3",
      "2/3",
      "-1/3",
      "1/3"
    ],
    correctAnswer: 0,
    explanation: "The outward radial derivative is 2/3, so reversing the direction gives -2/3."
  },
  {
    id: "mvc-vfa-h-094",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x,y)=3*x+4*y, what is the directional derivative in the unit direction opposite its gradient?",
    options: [
      "-5",
      "5",
      "-7",
      "0"
    ],
    correctAnswer: 0,
    explanation: "The gradient has norm 5, so the opposite unit direction produces the derivative -5."
  },
  {
    id: "mvc-vfa-h-095",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For a differentiable function f:R^n->R and a differentiable curve r(t), which formula gives d/dt f(r(t))?",
    options: [
      "grad f(r(t)) dot r'(t)",
      "f(r(t))*r'(t)",
      "div(grad f)",
      "The determinant of the Hessian"
    ],
    correctAnswer: 0,
    explanation: "The multivariable chain rule expresses the derivative along a curve as the gradient dotted with the curve's velocity."
  },
  {
    id: "mvc-vfa-h-096",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "Let f(x)=x^T*A*x, where A is symmetric. What is grad f(x)?",
    options: [
      "2*A*x",
      "A*x",
      "A^T*A*x",
      "x^T*A"
    ],
    correctAnswer: 0,
    explanation: "For symmetric A, differentiating the quadratic form gives gradient 2*A*x."
  },
  {
    id: "mvc-vfa-h-097",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x)=x^T*A*x with symmetric A, what is the directional derivative along a unit vector u?",
    options: [
      "2*(A*x) dot u",
      "(A*x) dot u",
      "x^T*A*x",
      "2*||u||"
    ],
    correctAnswer: 0,
    explanation: "The gradient is 2*A*x, so the directional derivative is its dot product with u."
  },
  {
    id: "mvc-vfa-h-098",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x)=a dot x in n dimensions, what is the minimum directional derivative over all unit vectors?",
    options: [
      "-||a||",
      "||a||",
      "0",
      "-||a||^2"
    ],
    correctAnswer: 0,
    explanation: "The gradient is a, and its minimum dot product with a unit vector is -||a||."
  },
  {
    id: "mvc-vfa-h-099",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "If grad f(a) is perpendicular to a unit direction u, what is D_u f(a)?",
    options: [
      "0",
      "||grad f(a)||",
      "-||grad f(a)||",
      "1"
    ],
    correctAnswer: 0,
    explanation: "The directional derivative is the dot product of two perpendicular vectors, so it is zero."
  },
  {
    id: "mvc-vfa-h-100",
    module: "Vector Fields & Approximation Theory",
    topic: "Directional Derivatives in n Dimensions",
    difficulty: "Hard",
    question: "For f(x)=||x||^2 in n dimensions, find D_u f(x) for any unit vector u.",
    options: [
      "2*x dot u",
      "x dot u",
      "||x||^2",
      "2"
    ],
    correctAnswer: 0,
    explanation: "The gradient of ||x||^2 is 2*x, and the directional derivative is 2*x dot u."
  },
];