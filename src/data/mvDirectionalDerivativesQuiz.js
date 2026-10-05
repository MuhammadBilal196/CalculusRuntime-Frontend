export const MV_DIRECTIONAL_DERIVATIVES_QUIZ = [
  {
    id: "ddn-01",
    prompt:
      "What does the directional derivative measure?",
    options: [
      "The rate of change of a scalar field in a specified direction",
      "The total volume of a region",
      "The determinant of the Hessian",
      "The magnitude of the gradient only"
    ],
    answer: "A",
    explanation:
      "A directional derivative measures how rapidly a scalar-valued function changes when moving in a specified direction."
  },
  {
    id: "ddn-02",
    prompt:
      "For f: R^n → R, what is the standard formula for the directional derivative in a unit direction u?",
    options: [
      "D_u f = ∇f · u",
      "D_u f = ∇f + u",
      "D_u f = ||∇f|| + ||u||",
      "D_u f = ∇f × u"
    ],
    answer: "A",
    explanation:
      "The directional derivative in unit direction u is the dot product ∇f · u."
  },
  {
    id: "ddn-03",
    prompt:
      "Why should the direction vector usually be normalized before computing a directional derivative?",
    options: [
      "Because the standard formula uses a unit direction vector",
      "Because gradients only exist for unit vectors",
      "Because normalization makes the function linear",
      "Because every vector must have length zero"
    ],
    answer: "A",
    explanation:
      "The directional derivative measures change per unit distance, so the direction vector should be converted to unit length."
  },
  {
    id: "ddn-04",
    prompt:
      "What is the gradient of f(x,y,z)=x²+y²+z²?",
    options: [
      "⟨x,y,z⟩",
      "⟨2x,2y,2z⟩",
      "⟨2,2,2⟩",
      "x²+y²+z²"
    ],
    answer: "B",
    explanation:
      "The gradient is the vector of first partial derivatives: ⟨2x,2y,2z⟩."
  },
  {
    id: "ddn-05",
    prompt:
      "For f(x,y)=x²+y² at (1,2), what is ∇f?",
    options: [
      "⟨1,2⟩",
      "⟨2,4⟩",
      "⟨2,2⟩",
      "⟨4,2⟩"
    ],
    answer: "B",
    explanation:
      "∇f=⟨2x,2y⟩, so at (1,2) it equals ⟨2,4⟩."
  },
  {
    id: "ddn-06",
    prompt:
      "For f(x,y)=x²+y² at (1,2), find the directional derivative in the direction v=⟨3,4⟩.",
    options: [
      "2",
      "5",
      "22/5",
      "10"
    ],
    answer: "C",
    explanation:
      "Normalize v: u=⟨3/5,4/5⟩. Then D_u f=⟨2,4⟩·⟨3/5,4/5⟩=22/5."
  },
  {
    id: "ddn-07",
    prompt:
      "In what direction does a differentiable function increase most rapidly at a point?",
    options: [
      "Opposite to the gradient",
      "Along the gradient",
      "Along any coordinate axis",
      "Perpendicular to the gradient"
    ],
    answer: "B",
    explanation:
      "The gradient points in the direction of maximum instantaneous increase."
  },
  {
    id: "ddn-08",
    prompt:
      "What is the maximum possible directional derivative at a point?",
    options: [
      "0",
      "1",
      "||∇f||",
      "det(∇f)"
    ],
    answer: "C",
    explanation:
      "By the Cauchy-Schwarz inequality, ∇f·u is maximized when u points along ∇f, giving ||∇f||."
  },
  {
    id: "ddn-09",
    prompt:
      "In what direction does a differentiable function decrease most rapidly?",
    options: [
      "Along ∇f",
      "Along -∇f",
      "Along every unit vector",
      "Along the zero vector"
    ],
    answer: "B",
    explanation:
      "The direction of maximum decrease is the negative gradient direction."
  },
  {
    id: "ddn-10",
    prompt:
      "What is the directional derivative in a direction perpendicular to the gradient?",
    options: [
      "||∇f||",
      "1",
      "0",
      "Always negative"
    ],
    answer: "C",
    explanation:
      "If u is perpendicular to ∇f, then ∇f·u=0."
  },
  {
    id: "ddn-11",
    prompt:
      "For f: R^n → R, how many components does ∇f have?",
    options: [
      "1",
      "2",
      "n",
      "n²"
    ],
    answer: "C",
    explanation:
      "The gradient contains one first partial derivative for each of the n variables."
  },
  {
    id: "ddn-12",
    prompt:
      "If f(x1,...,xn) is differentiable, what is the gradient in n dimensions?",
    options: [
      "⟨∂f/∂x1,...,∂f/∂xn⟩",
      "⟨x1,...,xn⟩",
      "The Hessian only",
      "The Laplacian only"
    ],
    answer: "A",
    explanation:
      "The n-dimensional gradient is the vector of all first partial derivatives."
  },
  {
    id: "ddn-13",
    prompt:
      "Which vector should be used in D_v f = ∇f·v when v is not initially a unit vector?",
    options: [
      "v itself",
      "v/||v||",
      "||v||v",
      "v²"
    ],
    answer: "B",
    explanation:
      "For the standard directional derivative, use the normalized direction u=v/||v||."
  },
  {
    id: "ddn-14",
    prompt:
      "For f(x,y,z)=x+y+z, what is the directional derivative in the unit direction ⟨1,1,1⟩/√3?",
    options: [
      "1",
      "√3",
      "3",
      "1/√3"
    ],
    answer: "B",
    explanation:
      "∇f=⟨1,1,1⟩, so ∇f·u=(1+1+1)/√3=√3."
  },
  {
    id: "ddn-15",
    prompt:
      "What geometric object is described by the set of directions with zero directional derivative at a point?",
    options: [
      "Directions perpendicular to the gradient",
      "Directions parallel to the gradient only",
      "All directions",
      "No directions"
    ],
    answer: "A",
    explanation:
      "The condition ∇f·u=0 means u is perpendicular to the gradient."
  },
  {
    id: "ddn-16",
    prompt:
      "What is the differential relation associated with a small displacement h?",
    options: [
      "df ≈ ∇f·h",
      "df ≈ ||∇f||²",
      "df ≈ det(h)",
      "df ≈ ∇f+h"
    ],
    answer: "A",
    explanation:
      "The first-order change in f is approximately the gradient dotted with the displacement vector."
  },
  {
    id: "ddn-17",
    prompt:
      "Which statement correctly connects directional derivatives with the tangent plane?",
    options: [
      "Directional derivatives describe first-order change within tangent directions",
      "Directional derivatives are unrelated to local linearization",
      "The tangent plane always has zero slope",
      "Directional derivatives require the Hessian only"
    ],
    answer: "A",
    explanation:
      "Directional derivatives are first-order rates of change and are encoded by the gradient appearing in the tangent-plane approximation."
  },
  {
    id: "ddn-18",
    prompt:
      "What does a directional derivative equal along a unit vector u when ∇f=0?",
    options: [
      "1",
      "||u||",
      "0",
      "It is undefined"
    ],
    answer: "C",
    explanation:
      "If ∇f=0, then D_u f=∇f·u=0 for every direction u."
  },
  {
    id: "ddn-19",
    prompt:
      "For f(x,y,z)=xyz, what is ∇f?",
    options: [
      "⟨yz,xz,xy⟩",
      "⟨x,y,z⟩",
      "⟨xyz,xyz,xyz⟩",
      "⟨y+z,x+z,x+y⟩"
    ],
    answer: "A",
    explanation:
      "The first partial derivatives are f_x=yz, f_y=xz, and f_z=xy."
  },
  {
    id: "ddn-20",
    prompt:
      "What is the correct workflow for an n-dimensional directional derivative problem?",
    options: [
      "Compute the gradient, identify the direction, normalize it, then take the dot product",
      "Compute only the Hessian",
      "Normalize the gradient instead of the direction vector",
      "Differentiate only with respect to the first variable"
    ],
    answer: "A",
    explanation:
      "The standard method is ∇f, choose v, form u=v/||v||, then compute D_u f=∇f·u."
  }
];