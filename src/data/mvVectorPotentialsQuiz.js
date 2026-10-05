/**
 * Multivariable Calculus — Module C
 * Topic 1: Vector Potentials
 *
 * Exactly 20 questions.
 */

export const MV_VECTOR_POTENTIALS_QUIZ = [
  {
    prompt:
      "What is a vector potential for a vector field F?",
    options: [
      "A scalar function whose gradient equals F",
      "A vector field A such that curl(A) = F",
      "A vector field A such that div(A) = F",
      "A scalar constant equal to |F|"
    ],
    answer: "B",
    explanation:
      "A vector potential A for F is a vector field satisfying ∇×A = F."
  },

  {
    prompt:
      "Which differential operator is used to define the vector potential relation?",
    options: [
      "Gradient",
      "Divergence",
      "Curl",
      "Laplacian"
    ],
    answer: "C",
    explanation:
      "A vector potential A satisfies curl(A) = F, so the curl operator is central."
  },

  {
    prompt:
      "If F = ∇×A, what must div(F) be?",
    options: [
      "Always positive",
      "Always negative",
      "Identically zero",
      "Equal to 1"
    ],
    answer: "C",
    explanation:
      "The vector-calculus identity ∇·(∇×A)=0 implies every curl field is divergence-free."
  },

  {
    prompt:
      "Which condition is therefore necessary for a vector field F to have a vector potential A?",
    options: [
      "∇·F = 0",
      "∇×F = 0",
      "|F| = 1",
      "F must be constant"
    ],
    answer: "A",
    explanation:
      "Since F = curl(A), we must have div(F)=0."
  },

  {
    prompt:
      "Is a vector potential generally unique?",
    options: [
      "Yes, always",
      "No, because gauge freedom allows multiple potentials",
      "Yes, provided F is nonzero",
      "No, because vector potentials are always scalar fields"
    ],
    answer: "B",
    explanation:
      "If A is a potential for F, then A + ∇φ has the same curl for any sufficiently smooth scalar φ."
  },

  {
    prompt:
      "If A is a vector potential for F, what is curl(A + ∇φ)?",
    options: [
      "F + φ",
      "F + ∇φ",
      "F",
      "0"
    ],
    answer: "C",
    explanation:
      "curl(A + ∇φ) = curl(A) + curl(∇φ) = F + 0 = F."
  },

  {
    prompt:
      "What is the name commonly given to the transformation A → A + ∇φ?",
    options: [
      "Coordinate transformation",
      "Gauge transformation",
      "Fourier transformation",
      "Legendre transformation"
    ],
    answer: "B",
    explanation:
      "Changing a vector potential by the gradient of a scalar field is a gauge transformation."
  },

  {
    prompt:
      "Suppose F = ⟨0, 0, 2⟩. Which vector field is a valid vector potential?",
    options: [
      "A = ⟨−y, x, 0⟩",
      "A = ⟨y, x, 0⟩",
      "A = ⟨x, y, 0⟩",
      "A = ⟨0, 0, z⟩"
    ],
    answer: "A",
    explanation:
      "For A = ⟨−y,x,0⟩, curl(A)=⟨0,0,2⟩."
  },

  {
    prompt:
      "For A = ⟨P,Q,R⟩, what is curl(A)?",
    options: [
      "⟨P_x,Q_y,R_z⟩",
      "⟨R_y−Q_z, P_z−R_x, Q_x−P_y⟩",
      "⟨P+Q,Q+R,R+P⟩",
      "⟨P_y+Q_z,Q_z+R_x,R_x+P_y⟩"
    ],
    answer: "B",
    explanation:
      "The curl is ∇×A = ⟨R_y−Q_z, P_z−R_x, Q_x−P_y⟩."
  },

  {
    prompt:
      "For F = ⟨0, 0, c⟩ with constant c, what is one possible vector potential?",
    options: [
      "A = ⟨−cy/2, cx/2, 0⟩",
      "A = ⟨cy, cx, 0⟩",
      "A = ⟨0, 0, cz⟩",
      "A = ⟨cx, cy, cz⟩"
    ],
    answer: "A",
    explanation:
      "For A = ⟨−cy/2,cx/2,0⟩, the z-component of curl is c."
  },

  {
    prompt:
      "Why is the condition div(F)=0 closely connected to vector potentials?",
    options: [
      "Every curl is divergence-free",
      "Every divergence is a curl",
      "Gradient fields always have positive divergence",
      "It guarantees F is constant"
    ],
    answer: "A",
    explanation:
      "The identity div(curl A)=0 makes divergence-free behavior necessary for a curl representation."
  },

  {
    prompt:
      "Under suitable regularity and topological assumptions, which kind of domain is especially favorable for constructing a vector potential?",
    options: [
      "A domain with arbitrary holes",
      "A simply connected domain",
      "A domain containing only one point",
      "A disconnected collection of unrelated points"
    ],
    answer: "B",
    explanation:
      "Simply connected domains eliminate many topological obstructions and are a standard setting for existence results."
  },

  {
    prompt:
      "Which statement about divergence-free fields is most accurate?",
    options: [
      "Every divergence-free field on every domain automatically has one globally defined potential",
      "Divergence-free is necessary, but global existence can also depend on the domain's topology",
      "Divergence-free means the field must be a gradient",
      "Divergence-free means the field is zero"
    ],
    answer: "B",
    explanation:
      "The condition div(F)=0 is necessary, but holes or other topological features of the domain can obstruct a global potential."
  },

  {
    prompt:
      "Which operation gives a vector field automatically orthogonal to the gradient of a scalar in the curl identity framework?",
    options: [
      "Curl of a gradient",
      "Gradient of a constant",
      "Divergence of a gradient",
      "Magnitude of a gradient"
    ],
    answer: "A",
    explanation:
      "The important identity is curl(∇φ)=0, which is central to gauge freedom."
  },

    {
    prompt:
      "Suppose F = ⟨y, x, 0⟩. Is F divergence-free?",
    options: [
      "Yes, because div(F)=0",
      "No, because div(F)=2",
      "Yes, because curl(F)=0",
      "No, because F is not differentiable"
    ],
    answer: "A",
    explanation:
      "div(F) = ∂y/∂x + ∂x/∂y + ∂0/∂z = 0 + 0 + 0 = 0, so the field is divergence-free."
  },

  {
    prompt:
      "If F = ∇×A, what happens if A is replaced by A + ∇φ?",
    options: [
      "F changes by ∇φ",
      "F remains unchanged",
      "F becomes zero",
      "F changes sign"
    ],
    answer: "B",
    explanation:
      "Because curl(∇φ)=0, adding a gradient field to a vector potential does not change its curl."
  },

  {
    prompt:
      "Which of the following is the best general strategy for finding a vector potential?",
    options: [
      "Guess A and never differentiate it",
      "Set A = ⟨P,Q,R⟩, solve the curl equations, and use remaining freedom to simplify",
      "Integrate F componentwise without checking the curl",
      "Compute only div(F)"
    ],
    answer: "B",
    explanation:
      "A practical construction starts with an unknown vector field and solves the equations generated by curl(A)=F."
  },

  {
    prompt:
      "If F is already known to be curl-free, does that mean F automatically has a vector potential?",
    options: [
      "Yes",
      "No; curl-free is related to gradient fields, not vector potentials",
      "Yes, provided |F|=1",
      "Only when F is constant"
    ],
    answer: "B",
    explanation:
      "Curl-free fields are associated with scalar potentials under suitable topological assumptions. Vector potentials instead represent fields as curls."
  },

  {
    prompt:
      "What is the geometric interpretation of F = curl(A)?",
    options: [
      "F measures local rotational behavior associated with A",
      "F always points away from the origin",
      "F measures only the magnitude of A",
      "F is necessarily parallel to A"
    ],
    answer: "A",
    explanation:
      "Curl measures local rotational or circulation density, so representing F as curl(A) connects F to the rotational structure of A."
  },

  {
    prompt:
      "Why can vector potentials be useful in applications?",
    options: [
      "They can encode divergence-free fields through a curl representation",
      "They eliminate all differential equations",
      "They force every field to be conservative",
      "They guarantee a unique representation"
    ],
    answer: "A",
    explanation:
      "Vector potentials provide a compact representation for suitable divergence-free fields and appear throughout electromagnetism, fluid mechanics, and geometry."
  }
];