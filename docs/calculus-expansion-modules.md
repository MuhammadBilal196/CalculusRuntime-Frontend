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

