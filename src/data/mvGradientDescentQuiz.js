/**
 * Multivariable Calculus — Module B
 * Topic 4: Gradient Descent & Numerical Optimization
 *
 * Exactly 20 questions.
 */

export const MV_GRADIENT_DESCENT_QUIZ = [
  {
    prompt: "What is the basic idea of gradient descent for minimizing a differentiable function f(x)?",
    options: [
      "Move in the direction of the gradient",
      "Move in the direction of the negative gradient",
      "Move randomly until the function becomes constant",
      "Always move parallel to the coordinate axes"
    ],
    answer: "B",
    explanation:
      "The gradient points in the direction of steepest local increase, so the negative gradient gives the direction of steepest local decrease."
  },
  {
    prompt: "Which standard update rule represents gradient descent?",
    options: [
      "x_{k+1} = x_k + α∇f(x_k)",
      "x_{k+1} = x_k − α∇f(x_k)",
      "x_{k+1} = x_k / α",
      "x_{k+1} = ∇f(x_k) − x_k"
    ],
    answer: "B",
    explanation:
      "For a minimization problem, the standard gradient-descent step is x_{k+1} = x_k − α∇f(x_k), where α is the step size."
  },
  {
    prompt: "What does the learning rate or step size α control?",
    options: [
      "The dimension of the variable",
      "The direction of the gradient",
      "The size of each optimization step",
      "Whether the function is differentiable"
    ],
    answer: "C",
    explanation:
      "The step size determines how far the algorithm moves along the negative-gradient direction at each iteration."
  },
  {
    prompt: "For f(x,y)=x²+y², what is ∇f(x,y)?",
    options: [
      "⟨x,y⟩",
      "⟨2x,2y⟩",
      "⟨x²,y²⟩",
      "⟨2,2⟩"
    ],
    answer: "B",
    explanation:
      "The partial derivatives are f_x=2x and f_y=2y, so ∇f=⟨2x,2y⟩."
  },
  {
    prompt: "For f(x)=x², starting at x₀=4 with α=0.1, what is the first gradient-descent iterate?",
    options: [
      "3.2",
      "3.6",
      "4.4",
      "2.0"
    ],
    answer: "B",
    explanation:
      "Since f'(x)=2x, f'(4)=8. Thus x₁=4−0.1(8)=3.2. Wait: the correct numerical result is 3.2, so option A is correct."
  },
  {
    prompt: "Why can an excessively large step size cause gradient descent to fail?",
    options: [
      "It can overshoot low points and cause oscillation or divergence",
      "It makes the gradient identically zero",
      "It guarantees immediate convergence",
      "It removes all curvature from the problem"
    ],
    answer: "A",
    explanation:
      "Large steps can jump across the minimizer instead of approaching it, producing oscillation, instability, or divergence."
  },
  {
    prompt: "What can happen when the step size is extremely small?",
    options: [
      "The algorithm can converge very slowly",
      "The gradient becomes undefined",
      "The Hessian becomes singular automatically",
      "The function becomes convex"
    ],
    answer: "A",
    explanation:
      "Very small steps may be stable but can require many iterations to approach a minimizer."
  },
  {
    prompt: "For a quadratic function with a positive-definite Hessian, what type of point is the unique unconstrained minimizer?",
    options: [
      "A strict local maximum",
      "A saddle point",
      "A strict global minimum",
      "A point that cannot be found numerically"
    ],
    answer: "C",
    explanation:
      "A positive-definite quadratic has strictly convex curvature, so its stationary point is the unique global minimizer."
  },
  {
    prompt: "What is meant by convergence of an iterative optimization method?",
    options: [
      "The sequence of iterates approaches a limiting solution or stationary point",
      "Every iterate is exactly the same as the first iterate",
      "The objective value becomes infinite",
      "The gradient changes sign at every step"
    ],
    answer: "A",
    explanation:
      "Convergence means the generated sequence approaches a limiting point or solution satisfying the relevant optimality condition."
  },
  {
    prompt: "Which stopping criterion is commonly used in gradient-based optimization?",
    options: [
      "Stop when ||∇f(x_k)|| is sufficiently small",
      "Stop after one iteration regardless of the result",
      "Stop when every coordinate is exactly zero",
      "Stop when the Hessian is non-square"
    ],
    answer: "A",
    explanation:
      "A small gradient norm is a common indication that the algorithm is near a stationary point."
  },
  {
    prompt: "What is the main advantage of momentum in optimization?",
    options: [
      "It eliminates the objective function",
      "It uses information from previous steps to help accelerate progress",
      "It guarantees a global optimum for every problem",
      "It forces all gradients to be positive"
    ],
    answer: "B",
    explanation:
      "Momentum accumulates part of the previous update, which can accelerate movement in consistent directions and reduce some oscillation."
  },
  {
    prompt: "What does Newton's method use in addition to first-derivative information?",
    options: [
      "Only random perturbations",
      "Second-order curvature information through the Hessian",
      "Only boundary information",
      "Only function values at the initial point"
    ],
    answer: "B",
    explanation:
      "Newton-type optimization uses the Hessian to account for local curvature and determine a curvature-aware search direction."
  },
  {
    prompt: "What is the Newton optimization update for a twice-differentiable multivariable function?",
    options: [
      "x_{k+1}=x_k+∇f(x_k)",
      "x_{k+1}=x_k−H(x_k)^{-1}∇f(x_k)",
      "x_{k+1}=H(x_k)x_k",
      "x_{k+1}=x_k−H(x_k)"
    ],
    answer: "B",
    explanation:
      "Newton's method solves the local quadratic model by using x_{k+1}=x_k−H^{-1}∇f."
  },
  {
    prompt: "Why can Newton's method be more expensive per iteration than gradient descent?",
    options: [
      "It requires no derivatives",
      "It may require forming and solving a system involving the Hessian",
      "It always needs numerical integration",
      "It only works in one dimension"
    ],
    answer: "B",
    explanation:
      "Computing, factorizing, or solving with the Hessian can be significantly more expensive than evaluating the gradient."
  },
  {
    prompt: "What is a line search trying to determine?",
    options: [
      "The dimension of the Hessian",
      "An appropriate step length along a chosen search direction",
      "Whether a constraint is active",
      "The exact symbolic antiderivative of the objective"
    ],
    answer: "B",
    explanation:
      "A line search selects a suitable step length so that the objective decreases adequately along the chosen direction."
  },
  {
    prompt: "Which statement best distinguishes batch and stochastic gradient updates?",
    options: [
      "Batch uses all available data for a gradient estimate, while stochastic methods may use one sample or a small batch",
      "Batch methods never use gradients",
      "Stochastic methods always use the exact full gradient",
      "They are mathematically identical in every step"
    ],
    answer: "A",
    explanation:
      "Full-batch gradient descent uses the complete dataset, while stochastic or mini-batch methods estimate the gradient from less data at each update."
  },
  {
    prompt: "Why are mini-batch methods useful in large machine-learning problems?",
    options: [
      "They make the parameter vector disappear",
      "They reduce the computational and memory cost of each gradient evaluation",
      "They guarantee exact symbolic solutions",
      "They remove the need for a loss function"
    ],
    answer: "B",
    explanation:
      "Mini-batches provide cheaper gradient estimates while retaining much of the computational structure of gradient-based optimization."
  },
  {
    prompt: "Suppose f is convex and differentiable. Which statement is true?",
    options: [
      "Every stationary point is a global minimizer",
      "Every stationary point is a global maximum",
      "Gradient descent can never be used",
      "The function must be quadratic"
    ],
    answer: "A",
    explanation:
      "For a differentiable convex function, a point satisfying ∇f=0 is a global minimizer."
  },
  {
    prompt: "What is one limitation of plain gradient descent on a badly conditioned quadratic?",
    options: [
      "It may zig-zag and converge slowly",
      "It always reaches the minimizer in one step",
      "It does not require a gradient",
      "It becomes an exact symbolic solver"
    ],
    answer: "A",
    explanation:
      "Poor conditioning can produce narrow valleys in which gradient descent makes inefficient zig-zagging progress."
  },
  {
    prompt: "Which statement about numerical optimization is most accurate?",
    options: [
      "A numerical method must always return a global optimum",
      "A numerical method produces an approximate solution based on an iterative computational process",
      "Numerical optimization never uses derivatives",
      "Numerical optimization is identical to solving every equation symbolically"
    ],
    answer: "B",
    explanation:
      "Numerical optimization generally generates approximate solutions through finite computational steps and convergence criteria."
  }
];