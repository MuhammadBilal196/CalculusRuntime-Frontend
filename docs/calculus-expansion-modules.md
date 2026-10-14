# Calculus & Analytical Geometry Expansion Specification

## 1. System Overview
This document provides comprehensive technical documentation for the advanced Calculus & Analytical Geometry curriculum extensions, interactive learning visualizers, daily streak retention systems, and 120-MCQ assessment engine integration.

## 2. Special Functions Module (Module A)
Module A introduces classical transcendental special functions and parametric integral calculus, establishing rigor in continuous probability distributions, asymptotic analysis, and mathematical physics.

### 2.1 Gamma & Beta Functions
Details the Euler integral of the second kind $\Gamma(z) = \int_0^\infty t^{z-1} e^{-t}\,dt$, analytic continuation, Legendre duplication formula $\Gamma(z)\Gamma(z+1/2) = 2^{1-2z}\sqrt{\pi}\Gamma(2z)$, Euler reflection $\Gamma(z)\Gamma(1-z) = \pi / \sin(\pi z)$, and the Beta-Gamma relationship $B(x, y) = \Gamma(x)\Gamma(y)/\Gamma(x+y)$.

### 2.2 Differentiation Under the Integral Sign (Leibniz Rule)
Formalizes the Leibniz integral rule for variable boundaries $\frac{d}{dt} \int_{a(t)}^{b(t)} f(x, t)\,dx = f(b(t), t)b'(t) - f(a(t), t)a'(t) + \int_{a(t)}^{b(t)} \frac{\partial f}{\partial t}\,dx$, detailing Feynman's integration trick on Gaussian, Dirichlet, and Fresnel integral families.

## 3. Transform Methods Module (Module B)
Module B bridges time/spatial domain representations into frequency and complex $z$-planes for continuous and discrete linear invariant systems.

### 3.1 Continuous Fourier Transform & Convolution
Covers forward $\mathcal{F}\{f(t)\} = \int_{-\infty}^\infty f(t) e^{-i\omega t}\,dt$ and inverse $\mathcal{F}^{-1}$ transforms, the time-convolution to spectral-multiplication theorem $(f * g)(t) \leftrightarrow F(\omega)G(\omega)$, and Parseval-Plancherel energy conservation $\|f\|_{L^2}^2 = \frac{1}{2\pi}\|F\|_{L^2}^2$.

### 3.2 Z-Transform & Difference Equations
Covers the discrete complex Laurent transform $X(z) = \sum_{n=-\infty}^\infty x[n]z^{-n}$, region of convergence (ROC) annular geometry, stability mapping via $z = e^{s T_s}$, and algebraic solution of $N$-th order linear difference equations using partial fractions.

## 4. Partial Differential Equations & Polynomial Families (Module C)
Module C formalizes boundary value problems in continuous media and orthogonal polynomial expansions under Sturm-Liouville inner product spaces.

### 4.1 Introduction to PDEs (Separation of Variables)
Specifies classification via $B^2 - 4AC$ discriminant into parabolic, hyperbolic, and elliptic regimes. Focuses explicitly on product solutions $u(x, t) = X(x)T(t)$ for the 1D Heat Equation ($u_t = \alpha^2 u_{xx}$) and 1D Wave Equation ($u_{tt} = c^2 u_{xx}$) under homogeneous Dirichlet and Neumann boundary conditions.

### 4.2 Orthogonal Polynomial Families
Analyzes Legendre polynomials $P_n(x)$ on $[-1, 1]$ ($w(x)=1$), Chebyshev polynomials $T_n(x)$ on $[-1, 1]$ ($w(x)=(1-x^2)^{-1/2}$), and Hermite polynomials $H_n(x)$ on $\mathbb{R}$ ($w(x)=e^{-x^2}$), detailing Rodrigues formulas, 3-term recurrence relations, and orthogonality norms.

## 5. Riemann Sum & Numerical Integral Visualizer
Interactive visualization workbench mounted at `/riemann-visualizer`. Employs dynamic SVG vector rendering for 5 partition rules (Left, Right, Midpoint, Trapezoid, Simpson), live parameter sliders ($n \in [1, 100]$), exact analytical comparisons, and theoretical asymptotic error order indicators ($\mathcal{O}(\Delta x)$, $\mathcal{O}(\Delta x^2)$, $\mathcal{O}(\Delta x^4)$).

## 6. Fourier Harmonic Synthesizer & Gibbs Visualizer
Mounted at `/fourier-visualizer`. Features real-time parameter synthesis over Square, Sawtooth, Triangle, and Rectified waveforms ($N \in [1, 50]$ harmonics), live frequency spectrum bar chart, Gibbs phenomenon overshoot metric ($pprox 8.949\%$), and interactive Web Audio API additive audio synthesis at 220Hz.

## 7. Daily Challenge & Streak Retention Engine
Mounted at `/daily-challenge`. Uses deterministic calendar date hashing (`YYYY-MM-DD`) to cycle curated questions with zero repeat bias. Connects directly to `progressUtils.js` for streak counting and 30-day active date tracking, surfaced via promotional cards on the Home and Dashboard views.

## 8. Certificate Quiz Bank 1:1 Parity Architecture
Extends certificate question coverage to 120 total questions (adding 30 Hard MCQs across the 6 new topics). Maintains exact 1:1 question order, option order, and correct answer parity between Frontend (`courseQuizzes.js`) and Backend Python service (`quiz_bank.py`).

## 9. Practice Arena Dataset & Topic Allocation
Introduces 150 practice questions (50 Easy, 50 Medium, 50 Hard; 25 per topic) in safe range `82300–82449`. Completely collision-free and registered in `calcAgPracticeBank.js` and `PractiseSection.jsx` under active course filtering.

## 10. Study Guide Navigation & Routing Architecture
Details top-level route definitions (`/gamma-beta-functions`, `/leibniz-rule`, `/fourier-transforms`, `/z-transforms`, `/intro-pdes`, `/orthogonal-polynomials`) paired with part segments `:partId` in `App.js` and canonical redirects.

## 11. Section Quiz Gate Thresholds & Verification
Implements strict 80% passing thresholds in `sectionQuizGates.js` across all 6 new topics. Gated check-in prevents premature progression until mastery is proven via 20-question checkpoint exams.

## 12. Verification & Automated Quality Assurance
Details full suite verification: ESLint zero-warning validation, Webpack production bundle generation, Jest automated test suites (`courseCompletion.test.js`, `GuideMcq.test.jsx`, `PractiseSection.test.jsx`, `App.test.js`), and Python AST compilation.

### Euler Integral Formulations & Analytic Continuation
The Gamma function $\Gamma(z)$ extends the discrete factorial operator to the complex half-plane $\text{Re}(z) > 0$. Using the fundamental recurrence $\Gamma(z+1) = z\Gamma(z)$, meromorphic continuation is achieved across the entire complex plane with simple poles at non-positive integers $z \in \{0, -1, -2, \dots\}$.

### Asymptotic Expansion of the Gamma Function (Stirling's Formula)
For large values of $|z|$ in $|\arg z| < \pi$, Stirling's asymptotic formula provides $\Gamma(z) \sim \sqrt{\frac{2\pi}{z}} \left(\frac{z}{e}\right)^z \left(1 + \frac{1}{12z} + \frac{1}{288z^2} - \dots\right)$, enabling high-precision computational estimation of factorial products.

### Weierstrass Infinite Product Representation of Gamma
The reciprocal Gamma function is an entire function expressible via Weierstrass product: $\frac{1}{\Gamma(z)} = z e^{\gamma z} \prod_{k=1}^\infty \left(1 + \frac{z}{k}\right) e^{-z/k}$, where $\gamma \approx 0.5772156649$ is the Euler-Mascheroni constant.

### Beta Function Symmetry & Trigonometric Integrals
The Beta function satisfies intrinsic reflection symmetry $B(x, y) = B(y, x)$. Substituting $t = \sin^2 \theta$ produces the fundamental trigonometric identity $B(x, y) = 2 \int_0^{\pi/2} \sin^{2x-1}(\theta) \cos^{2y-1}(\theta)\,d\theta$, solving Wallis-type integrals in closed algebraic forms.

### Dirichlet Multiple Integral Generalization
Dirichlet's integral extends Euler Beta integrals to $n$-dimensional simplices: $\int\dots\int x_1^{p_1-1}\dots x_n^{p_n-1}\,dx_1\dots dx_n = \frac{\Gamma(p_1)\dots\Gamma(p_n)}{\Gamma(1 + \sum p_k)}$, crucial for computing hypersphere volumes and multivariate statistical moments.

### Incomplete Gamma & Beta Functions in Statistical Applications
The lower incomplete Gamma $\gamma(s, x) = \int_0^x t^{s-1}e^{-t}\,dt$ and upper incomplete Gamma $\Gamma(s, x) = \int_x^\infty t^{s-1}e^{-t}\,dt$ govern cumulative chi-square, Poisson, and gamma distributions across numerical probability theory.

### Digamma & Polygamma Differential Properties
The logarithmic derivative of the Gamma function defines the Digamma function $\psi(z) = \frac{d}{dz}\ln\Gamma(z) = \frac{\Gamma'(z)}{\Gamma(z)}$. Higher derivatives $\psi^{(m)}(z)$ provide exact closed-form sum evaluations for harmonic-type reciprocal series.

### Uniform Convergence Criteria for Parametric Integrals
Differentiation under the integral requires $f(x, t)$ and $\frac{\partial f}{\partial t}$ to be continuous on $[a, b] \times [c, d]$. For infinite intervals, the Weierstrass $M$-test for integrals ensures uniform convergence: $|\frac{\partial f}{\partial t}(x, t)| \le M(x)$ with $\int M(x)\,dx < \infty$.

### Leibniz Rule Proof via Mean Value Theorem
The difference quotient $\frac{I(t+h) - I(t)}{h} = \int_a^b \frac{f(x, t+h) - f(x, t)}{h}\,dx$ admits an application of the Mean Value Theorem to yield $f_t(x, \xi_h)$. Uniform continuity allows passing the limit $h \to 0$ beneath the integral sign.

### Variable Limits Differentiation & Chain Rule Application
When integration bounds $a(t)$ and $b(t)$ are themselves differentiable functions of parameter $t$, Leibniz's complete rule combines the fundamental theorem of calculus with partial differentiation: $I'(t) = f(b(t), t)b'(t) - f(a(t), t)a'(t) + \int_{a(t)}^{b(t)} \frac{\partial f}{\partial t}\,dx$.

### Feynman Parametric Integration: The Frullani Integral
Frullani integrals of the archetype $\int_0^\infty \frac{f(ax) - f(bx)}{x}\,dx$ are resolved by expressing the integrand as a parametric derivative $\int_b^a f'(xy)\,dy$ and interchanging limits to yield $(f(\infty) - f(0))\ln(a/b)$.

### Feynman Technique for Gaussian Moments
Introducing parameter $\alpha$ into $I(\alpha) = \int_{-\infty}^\infty e^{-\alpha x^2}\,dx = \sqrt{\frac{\pi}{\alpha}}$ allows evaluating all even Gaussian moments $\int_{-\infty}^\infty x^{2k} e^{-x^2}\,dx$ by differentiating $k$ times with respect to $\alpha$.

### Dirichlet Discontinuous Factor Integral Evaluation
By introducing the damping parameter $\alpha > 0$ into $I(\alpha) = \int_0^\infty e^{-\alpha x} \frac{\sin x}{x}\,dx$, differentiating yields $I'(\alpha) = -\frac{1}{1 + \alpha^2}$. Integrating back and taking $\alpha \to 0^+$ rigorously establishes $\int_0^\infty \frac{\sin x}{x}\,dx = \frac{\pi}{2}$.

### Laplace Transform of Parameterized Integrals
Applying the Leibniz rule in conjunction with the Laplace transform enables solving integral equations of Volterra convolution type $y(t) = f(t) + \int_0^t K(t-\tau)y(\tau)\,d\tau$, converting convolution operations into algebraic division.
