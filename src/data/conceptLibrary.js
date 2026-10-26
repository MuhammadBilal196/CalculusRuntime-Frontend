// Plain-language concept cards for every course on the Simple Concepts page.
// The original multivariable cards live in pages/courses/SimpleConcepts.jsx;
// this file adds the concepts each course was missing.
//
// Each item: { title, body, formula, examples: [{ label, math, note }], checks }
// formula / math are KaTeX strings (String.raw keeps the backslashes intact).

const t = String.raw;
const ex = (label, math, note) => ({ label, math, note });

export const CONCEPT_COURSES = [
  {
    id: "calculus-analytical-geometry",
    title: "Calculus and Analytical Geometry",
    short: "Calculus & Geometry",
    roadmapTitle: "Start with limits, then build derivatives, integrals and series",
    roadmap: ["Limits and continuity", "Derivatives and their rules", "Integrals and accumulation", "Series and analytic geometry"],
  },
  {
    id: "multivariable-calculus",
    title: "Multivariable Calculus",
    short: "Multivariable Calculus",
    roadmapTitle: "Start with change, then move to surfaces and accumulation",
    roadmap: ["Single-variable review", "Surfaces and dimensions", "Partial derivatives", "Integrals in 2D and 3D"],
  },
  {
    id: "linear-algebra",
    title: "Linear Algebra",
    short: "Linear Algebra",
    roadmapTitle: "Start with systems, then vectors, matrices and their structure",
    roadmap: ["Systems of equations", "Vectors and spaces", "Matrices and determinants", "Eigenvalues and orthogonality"],
  },
  {
    id: "probability-statistics",
    title: "Probability and Statistics",
    short: "Probability & Statistics",
    roadmapTitle: "Start with chance, then model it, then learn from data",
    roadmap: ["Events and probability", "Random variables", "Describing data", "Inference and models"],
  },
];

export const extraConceptGroups = [
  // ─── Calculus and Analytical Geometry ──────────────────────────────────────
  {
    course: "calculus-analytical-geometry",
    kicker: "Foundations of change",
    title: "Limits and derivatives",
    items: [
      {
        title: "Limits and one-sided limits",
        body: "A limit describes the value a function approaches as the input gets close to a point, whether or not the function is defined there. A two-sided limit exists only when the left-hand and right-hand limits agree.",
        formula: t`\lim_{x\to a}f(x)=L \iff \lim_{x\to a^-}f(x)=\lim_{x\to a^+}f(x)=L`,
        examples: [
          ex("Hole in the graph", t`\lim_{x\to 1}\frac{x^2-1}{x-1}=2`, "Factor and cancel: the function is undefined at 1, but the limit still exists."),
          ex("Jump", t`\lim_{x\to 0^-}\frac{|x|}{x}=-1,\ \lim_{x\to 0^+}\frac{|x|}{x}=1`, "The one-sided limits disagree, so the two-sided limit does not exist."),
          ex("Infinite limit", t`\lim_{x\to 0}\frac{1}{x^2}=\infty`, "The values grow without bound, which signals a vertical asymptote."),
        ],
        checks: ["Try direct substitution first.", "If you get 0/0, simplify (factor, rationalize, or use an identity).", "Compare the left and right limits when the function changes rule."],
      },
      {
        title: "The squeeze theorem",
        body: "If a function is trapped between two others that approach the same limit, it has no choice but to approach that limit as well. It is the standard tool for oscillating functions.",
        formula: t`g(x)\le f(x)\le h(x),\ \lim g=\lim h=L \Rightarrow \lim f=L`,
        examples: [
          ex("Oscillation", t`-x^2\le x^2\sin\tfrac1x\le x^2`, "Both bounds go to 0, so the middle function does too."),
          ex("Famous limit", t`\lim_{x\to 0}\frac{\sin x}{x}=1`, "Proved by squeezing between cos x and 1."),
          ex("Sequences", t`0\le \frac{\sin n}{n}\le\frac1n`, "The same idea works for sequences."),
        ],
        checks: ["Find a simple lower and upper bound.", "Check the bounds hold near the point.", "Confirm both bounds share the same limit."],
      },
      {
        title: "The derivative as a limit",
        body: "The derivative is the instantaneous rate of change: the slope of secant lines as the two points slide together. It turns average change into change at a single instant.",
        formula: t`f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}`,
        examples: [
          ex("From first principles", t`\frac{(x+h)^2-x^2}{h}=2x+h\to 2x`, "Expanding and cancelling h gives the derivative of x²."),
          ex("Velocity", t`v(t)=s'(t)`, "The derivative of position is velocity."),
          ex("Tangent slope", t`m=f'(a)`, "The derivative at a is the slope of the tangent line there."),
        ],
        checks: ["Write the difference quotient.", "Simplify until h cancels.", "Only then let h go to 0."],
      },
      {
        title: "Product, quotient and chain rules",
        body: "These three rules let you differentiate almost any formula built from simpler pieces. The chain rule is the one used most: differentiate the outside, keep the inside, then multiply by the inside's derivative.",
        formula: t`(fg)'=f'g+fg',\quad \left(\tfrac fg\right)'=\tfrac{f'g-fg'}{g^2},\quad (f\circ g)'=f'(g)\,g'`,
        examples: [
          ex("Product", t`(x^2\sin x)'=2x\sin x+x^2\cos x`, "Each factor takes a turn being differentiated."),
          ex("Quotient", t`\left(\tfrac{x}{x+1}\right)'=\tfrac{1}{(x+1)^2}`, "Low d-high minus high d-low, over low squared."),
          ex("Chain", t`\frac{d}{dx}e^{3x^2}=6x\,e^{3x^2}`, "Outer derivative e^u times inner derivative 6x."),
        ],
        checks: ["Identify the outermost operation.", "Pick the rule that matches it.", "Do not forget the inner derivative in the chain rule."],
      },
      {
        title: "Implicit differentiation",
        body: "When y is tied to x by an equation rather than a formula, differentiate both sides with respect to x and treat y as a function of x. Every y-term picks up a factor of dy/dx.",
        formula: t`\frac{d}{dx}\big[y^n\big]=n\,y^{n-1}\frac{dy}{dx}`,
        examples: [
          ex("Circle", t`x^2+y^2=25\Rightarrow \frac{dy}{dx}=-\frac{x}{y}`, "Differentiate both sides, then solve for dy/dx."),
          ex("Product inside", t`\frac{d}{dx}(xy)=y+x\frac{dy}{dx}`, "A product of x and y needs the product rule."),
          ex("Tangent", t`(3,4):\ \frac{dy}{dx}=-\tfrac34`, "Plug the point in to get the tangent slope."),
        ],
        checks: ["Differentiate every term on both sides.", "Attach dy/dx to each y-derivative.", "Collect dy/dx terms and solve."],
      },
      {
        title: "Mean Value Theorem",
        body: "If a function is smooth on an interval, at some point its instantaneous slope equals its average slope over the whole interval. If you average 60 km/h on a trip, at some moment the speedometer read exactly 60.",
        formula: t`f'(c)=\frac{f(b)-f(a)}{b-a}\quad\text{for some }c\in(a,b)`,
        examples: [
          ex("Find c", t`f(x)=x^2 \text{ on }[0,2]:\ 2c=2\Rightarrow c=1`, "The average slope is 2, matched at c = 1."),
          ex("Rolle's theorem", t`f(a)=f(b)\Rightarrow f'(c)=0`, "The special case where the average slope is zero."),
          ex("Bounds", t`|f'|\le M\Rightarrow |f(b)-f(a)|\le M(b-a)`, "A bound on the slope bounds the total change."),
        ],
        checks: ["Check continuity on [a, b].", "Check differentiability on (a, b).", "Solve f'(c) = average slope for c inside the interval."],
      },
      {
        title: "L'Hôpital's rule",
        body: "When a limit gives an indeterminate form like 0/0 or ∞/∞, you can replace the numerator and denominator by their derivatives. It compares how fast the top and bottom change.",
        formula: t`\lim_{x\to a}\frac{f(x)}{g(x)}=\lim_{x\to a}\frac{f'(x)}{g'(x)}\quad(0/0\text{ or }\infty/\infty)`,
        examples: [
          ex("0/0", t`\lim_{x\to 0}\frac{e^x-1}{x}=\lim_{x\to 0}\frac{e^x}{1}=1`, "Differentiate top and bottom separately."),
          ex("∞/∞", t`\lim_{x\to\infty}\frac{\ln x}{x}=\lim_{x\to\infty}\frac{1/x}{1}=0`, "Logs grow slower than any power."),
          ex("Rewrite first", t`x\ln x=\frac{\ln x}{1/x}`, "Products like 0·∞ must be turned into a quotient."),
        ],
        checks: ["Confirm the form really is 0/0 or ∞/∞.", "Differentiate numerator and denominator separately (not the quotient rule).", "Repeat only while the form stays indeterminate."],
      },
      {
        title: "Related rates",
        body: "When several quantities change together, an equation linking them also links their rates. Differentiate the equation with respect to time and plug in the known values at the moment of interest.",
        formula: t`\frac{d}{dt}F(x,y)=0\Rightarrow F_x\frac{dx}{dt}+F_y\frac{dy}{dt}=0`,
        examples: [
          ex("Balloon", t`V=\tfrac43\pi r^3\Rightarrow \frac{dV}{dt}=4\pi r^2\frac{dr}{dt}`, "Volume rate and radius rate are linked by the surface area."),
          ex("Ladder", t`x^2+y^2=L^2\Rightarrow x\dot x+y\dot y=0`, "As the bottom slides out, the top slides down."),
          ex("Plug in last", t`r=3,\ \dot V=36\pi \Rightarrow \dot r=1`, "Substitute numbers only after differentiating."),
        ],
        checks: ["Draw and label the changing quantities.", "Write an equation that holds at every moment.", "Differentiate with respect to t before plugging numbers in."],
      },
    ],
  },
  {
    course: "calculus-analytical-geometry",
    kicker: "Accumulation",
    title: "Integrals and their techniques",
    items: [
      {
        title: "Fundamental Theorem of Calculus",
        body: "Differentiation and integration undo each other. To find the total accumulated change of a function over an interval, find any antiderivative and subtract its values at the ends.",
        formula: t`\int_a^b f(x)\,dx=F(b)-F(a),\qquad \frac{d}{dx}\int_a^x f(t)\,dt=f(x)`,
        examples: [
          ex("Evaluate", t`\int_0^2 3x^2\,dx=\big[x^3\big]_0^2=8`, "Antiderivative, then top minus bottom."),
          ex("Part 1", t`\frac{d}{dx}\int_1^x \sqrt{t}\,dt=\sqrt{x}`, "Differentiating an accumulation function returns the integrand."),
          ex("Chain rule version", t`\frac{d}{dx}\int_0^{x^2}\cos t\,dt=2x\cos(x^2)`, "A variable upper limit brings in its derivative."),
        ],
        checks: ["Find an antiderivative.", "Evaluate at the upper limit minus the lower limit.", "For variable limits, multiply by the limit's derivative."],
      },
      {
        title: "Integration by substitution",
        body: "Substitution is the chain rule run backwards. When the integrand contains a function and its derivative, rename the inner function u and the integral becomes simpler.",
        formula: t`\int f(g(x))\,g'(x)\,dx=\int f(u)\,du,\quad u=g(x)`,
        examples: [
          ex("Basic", t`\int 2x\cos(x^2)\,dx=\sin(x^2)+C`, "Let u = x², so du = 2x dx."),
          ex("Log form", t`\int \frac{2x}{x^2+1}\,dx=\ln(x^2+1)+C`, "The numerator is the derivative of the denominator."),
          ex("Definite", t`\int_0^1 e^{2x}dx=\tfrac12\int_0^2 e^u du`, "Change the limits when you change the variable."),
        ],
        checks: ["Look for an inner function whose derivative also appears.", "Replace every x (including dx).", "Change the limits or substitute back at the end."],
      },
      {
        title: "Integration by parts",
        body: "Integration by parts is the product rule run backwards. It trades one integral for another that is hopefully easier, by differentiating one factor and integrating the other.",
        formula: t`\int u\,dv=uv-\int v\,du`,
        examples: [
          ex("Polynomial × exponential", t`\int xe^x dx=xe^x-e^x+C`, "Let u = x so it disappears after differentiating."),
          ex("Logarithm", t`\int \ln x\,dx=x\ln x-x+C`, "Use u = ln x and dv = dx."),
          ex("Cycling", t`\int e^x\sin x\,dx`, "Apply twice and solve for the original integral."),
        ],
        checks: ["Choose u using LIATE (logs, inverse trig, algebraic, trig, exponential).", "Make sure dv is easy to integrate.", "Check the new integral is simpler."],
      },
      {
        title: "Partial fractions",
        body: "A fraction of polynomials can be split into a sum of simple fractions, each of which integrates to a logarithm or an arctangent. Factor the denominator first.",
        formula: t`\frac{P(x)}{(x-a)(x-b)}=\frac{A}{x-a}+\frac{B}{x-b}`,
        examples: [
          ex("Split", t`\frac{1}{x^2-1}=\frac{1/2}{x-1}-\frac{1/2}{x+1}`, "Cover-up: set x = 1 and x = −1 to find A and B."),
          ex("Integrate", t`\int\frac{dx}{x^2-1}=\tfrac12\ln\left|\frac{x-1}{x+1}\right|+C`, "Each piece integrates to a log."),
          ex("Irreducible quadratic", t`\frac{Ax+B}{x^2+1}`, "Quadratic factors need a linear numerator."),
        ],
        checks: ["If the top degree ≥ bottom degree, divide first.", "Factor the denominator completely.", "Solve for the constants, then integrate each term."],
      },
      {
        title: "Improper integrals",
        body: "An improper integral has an infinite limit or an integrand that blows up. It is defined as a limit of ordinary integrals, and it converges only if that limit is finite.",
        formula: t`\int_1^\infty \frac{dx}{x^p}\ \text{converges}\iff p>1`,
        examples: [
          ex("Infinite interval", t`\int_1^\infty \frac{dx}{x^2}=\lim_{b\to\infty}\left(1-\tfrac1b\right)=1`, "Replace ∞ by b and take the limit."),
          ex("Diverges", t`\int_1^\infty \frac{dx}{x}=\lim_{b\to\infty}\ln b=\infty`, "The harmonic integral just barely diverges."),
          ex("Vertical asymptote", t`\int_0^1 \frac{dx}{\sqrt x}=2`, "The integrand blows up at 0 but the area is finite."),
        ],
        checks: ["Spot the infinite limit or the blow-up point.", "Rewrite as a limit of a proper integral.", "Use comparison with 1/x^p when you cannot integrate directly."],
      },
      {
        title: "Solids of revolution",
        body: "Spinning a region around an axis creates a solid. Its volume is found by slicing it into thin discs or washers, or into thin cylindrical shells, and adding them up.",
        formula: t`V=\pi\int_a^b \big(R(x)^2-r(x)^2\big)\,dx,\qquad V=2\pi\int_a^b x\,h(x)\,dx`,
        examples: [
          ex("Disc", t`y=\sqrt x,\ [0,4]:\ V=\pi\int_0^4 x\,dx=8\pi`, "Each slice is a disc of radius √x."),
          ex("Washer", t`\pi\int (R^2-r^2)\,dx`, "A hole in the middle subtracts the inner disc."),
          ex("Shell", t`2\pi\int x\,h(x)\,dx`, "Shells are easier when rotating about the y-axis with x-bounds."),
        ],
        checks: ["Sketch the region and the axis.", "Decide whether slices are perpendicular (discs) or parallel (shells) to the axis.", "Write radius and height in terms of the integration variable."],
      },
    ],
  },
  {
    course: "calculus-analytical-geometry",
    kicker: "Infinite processes",
    title: "Sequences and series",
    items: [
      {
        title: "Convergence of sequences",
        body: "A sequence converges when its terms settle down to one number as n grows. Many sequences can be studied by treating n as a continuous variable and using ordinary limits.",
        formula: t`a_n\to L \iff \forall\varepsilon>0\ \exists N:\ n>N\Rightarrow |a_n-L|<\varepsilon`,
        examples: [
          ex("Converges", t`\frac{n}{n+1}\to 1`, "Divide top and bottom by n."),
          ex("Diverges", t`(-1)^n`, "It keeps jumping between −1 and 1."),
          ex("Famous limit", t`\left(1+\tfrac1n\right)^n\to e`, "The definition of e as a limit."),
        ],
        checks: ["Look at the dominant terms for large n.", "Bounded and monotone sequences always converge.", "Oscillating signs usually prevent convergence."],
      },
      {
        title: "Geometric and p-series",
        body: "Two benchmark series decide many others by comparison. A geometric series converges when its ratio is smaller than 1 in size; a p-series converges when the power is larger than 1.",
        formula: t`\sum_{n=0}^\infty ar^n=\frac{a}{1-r}\ (|r|<1),\qquad \sum\frac1{n^p}<\infty\iff p>1`,
        examples: [
          ex("Geometric", t`\sum_{n=0}^\infty \left(\tfrac12\right)^n=2`, "First term 1, ratio ½."),
          ex("Harmonic", t`\sum\frac1n=\infty`, "p = 1 diverges, even though the terms go to 0."),
          ex("p = 2", t`\sum\frac1{n^2}=\frac{\pi^2}{6}`, "Converges because p > 1."),
        ],
        checks: ["Terms not going to 0 means the series diverges.", "Identify the ratio or the power.", "Compare unknown series with these benchmarks."],
      },
      {
        title: "Ratio and root tests",
        body: "These tests compare a series with a geometric series by measuring how fast the terms shrink. A limiting ratio below 1 means convergence, above 1 means divergence, and exactly 1 tells you nothing.",
        formula: t`L=\lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|\quad\text{or}\quad L=\lim_{n\to\infty}\sqrt[n]{|a_n|}`,
        examples: [
          ex("Factorials", t`\sum\frac{2^n}{n!}:\ \frac{a_{n+1}}{a_n}=\frac{2}{n+1}\to 0`, "Ratio test is ideal for factorials."),
          ex("nth powers", t`\sum\left(\frac{n}{2n+1}\right)^n:\ L=\tfrac12`, "Root test is ideal for nth powers."),
          ex("Inconclusive", t`\sum\frac1{n^2}:\ L=1`, "Use a different test when L = 1."),
        ],
        checks: ["Use ratio for factorials and exponentials.", "Use root for expressions raised to the nth power.", "Switch tests when L = 1."],
      },
      {
        title: "Power series and radius of convergence",
        body: "A power series is an infinite polynomial. It converges inside an interval centred at a and diverges outside; the endpoints must be tested separately.",
        formula: t`\sum_{n=0}^\infty c_n(x-a)^n,\qquad R=\lim_{n\to\infty}\left|\frac{c_n}{c_{n+1}}\right|`,
        examples: [
          ex("Geometric", t`\sum x^n=\frac1{1-x},\ |x|<1`, "R = 1."),
          ex("Exponential", t`\sum\frac{x^n}{n!}=e^x`, "R = ∞, so it converges everywhere."),
          ex("Endpoints", t`\sum\frac{x^n}{n}:\ x=-1\text{ converges},\ x=1\text{ diverges}`, "Endpoints can behave differently."),
        ],
        checks: ["Use the ratio test on the general term.", "Solve |x − a| < R.", "Test each endpoint on its own."],
      },
    ],
  },
  {
    course: "calculus-analytical-geometry",
    kicker: "Shapes in the plane",
    title: "Analytic geometry",
    items: [
      {
        title: "Equations of a straight line",
        body: "A line is fixed by a point and a slope, or by two points. Slope measures rise over run; parallel lines share a slope and perpendicular slopes multiply to −1.",
        formula: t`y-y_1=m(x-x_1),\qquad m=\frac{y_2-y_1}{x_2-x_1}`,
        examples: [
          ex("Two points", t`(1,2),(3,8):\ m=3,\ y=3x-1`, "Find the slope, then use point-slope form."),
          ex("Perpendicular", t`m_1m_2=-1`, "A line with slope 2 is perpendicular to one with slope −½."),
          ex("Distance to a line", t`d=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}`, "Shortest distance from a point to ax + by + c = 0."),
        ],
        checks: ["Find the slope first.", "Use any known point in point-slope form.", "Rearrange to the form the question asks for."],
      },
      {
        title: "Circles and their tangents",
        body: "A circle is every point at a fixed distance from a centre. The tangent at a point is perpendicular to the radius drawn to that point.",
        formula: t`(x-h)^2+(y-k)^2=r^2`,
        examples: [
          ex("Complete the square", t`x^2+y^2-4x+6y-3=0\Rightarrow (x-2)^2+(y+3)^2=16`, "Centre (2, −3), radius 4."),
          ex("Tangent at a point", t`x x_1+y y_1=r^2`, "Tangent to x² + y² = r² at (x₁, y₁)."),
          ex("Tangency test", t`d(\text{centre},\text{line})=r`, "A line touches the circle exactly when its distance from the centre is r."),
        ],
        checks: ["Complete the square to read off the centre and radius.", "Use the radius to get the tangent's slope.", "Compare distance with r to classify a line."],
      },
      {
        title: "Conic sections and eccentricity",
        body: "Parabolas, ellipses and hyperbolas are the curves you get by slicing a cone. Eccentricity measures how stretched the curve is: e = 0 is a circle, e < 1 an ellipse, e = 1 a parabola, e > 1 a hyperbola.",
        formula: t`\frac{x^2}{a^2}+\frac{y^2}{b^2}=1,\quad \frac{x^2}{a^2}-\frac{y^2}{b^2}=1,\quad y^2=4ax`,
        examples: [
          ex("Ellipse foci", t`c^2=a^2-b^2,\ e=\tfrac ca`, "Foci sit at (±c, 0)."),
          ex("Hyperbola", t`c^2=a^2+b^2,\ y=\pm\tfrac ba x`, "The asymptotes guide the sketch."),
          ex("Parabola", t`y^2=4ax:\ \text{focus }(a,0)`, "Directrix x = −a."),
        ],
        checks: ["Look at the signs of the squared terms.", "Put the equation in standard form.", "Compute c and e to locate the foci."],
      },
      {
        title: "Polar coordinates and polar area",
        body: "Polar coordinates describe a point by its distance r from the origin and its angle θ. Curves like circles, roses and spirals have very simple polar equations, and areas use thin sectors instead of rectangles.",
        formula: t`x=r\cos\theta,\ y=r\sin\theta,\qquad A=\tfrac12\int_\alpha^\beta r^2\,d\theta`,
        examples: [
          ex("Circle", t`r=2\cos\theta`, "A circle through the origin, centred at (1, 0)."),
          ex("Cardioid area", t`r=1+\cos\theta:\ A=\tfrac{3\pi}{2}`, "Integrate ½ r² from 0 to 2π."),
          ex("Convert", t`(1,1)\to(\sqrt2,\tfrac\pi4)`, "r = √(x² + y²), θ from the quadrant."),
        ],
        checks: ["Sketch the curve to find the angle limits.", "Square r before integrating.", "Watch for curves that retrace themselves."],
      },
      {
        title: "Parametric curves",
        body: "A parametric curve gives x and y separately as functions of a parameter t, like the position of a moving point at time t. Slopes and lengths come from the derivatives of x(t) and y(t).",
        formula: t`\frac{dy}{dx}=\frac{dy/dt}{dx/dt},\qquad L=\int_a^b\sqrt{\dot x^2+\dot y^2}\,dt`,
        examples: [
          ex("Circle", t`x=\cos t,\ y=\sin t`, "One full turn as t runs from 0 to 2π."),
          ex("Slope", t`x=t^2,\ y=t^3:\ \frac{dy}{dx}=\tfrac32 t`, "Divide the two rates."),
          ex("Arc length", t`L=\int_0^{2\pi}1\,dt=2\pi`, "The unit circle has speed 1."),
        ],
        checks: ["Differentiate x and y with respect to t.", "Divide for the slope; check dx/dt ≠ 0.", "Use the speed formula for length."],
      },
    ],
  },
  {
    course: "calculus-analytical-geometry",
    kicker: "Further topics",
    title: "Differential equations, transforms and special functions",
    items: [
      {
        title: "First-order differential equations",
        body: "A differential equation links a function with its derivatives. First-order equations that separate or are linear can be solved with an integral; the constant is fixed by an initial condition.",
        formula: t`y'+P(x)y=Q(x),\quad \mu(x)=e^{\int P\,dx},\quad (\mu y)'=\mu Q`,
        examples: [
          ex("Separable", t`y'=ky\Rightarrow y=Ce^{kx}`, "Growth and decay."),
          ex("Linear", t`y'+y=x\Rightarrow y=x-1+Ce^{-x}`, "Multiply by the integrating factor eˣ."),
          ex("Initial value", t`y(0)=2\Rightarrow C=2`, "Use the condition to find C."),
        ],
        checks: ["Try separating variables first.", "Otherwise put it in linear form and find μ.", "Apply the initial condition last."],
      },
      {
        title: "Laplace transform",
        body: "The Laplace transform turns derivatives into multiplication by s, so a differential equation becomes an algebra problem. Solve for the transform, then convert back with a table.",
        formula: t`\mathcal{L}\{f\}(s)=\int_0^\infty e^{-st}f(t)\,dt,\qquad \mathcal{L}\{f'\}=sF(s)-f(0)`,
        examples: [
          ex("Basic pairs", t`\mathcal{L}\{1\}=\tfrac1s,\ \mathcal{L}\{e^{at}\}=\tfrac1{s-a}`, "Memorise a small table."),
          ex("Solve an ODE", t`y'+y=0,\ y(0)=1\Rightarrow Y=\tfrac1{s+1}\Rightarrow y=e^{-t}`, "Transform, solve, invert."),
          ex("Shift", t`\mathcal{L}\{e^{at}f\}=F(s-a)`, "Exponentials shift the s-variable."),
        ],
        checks: ["Transform every term, including initial values.", "Solve for Y(s).", "Use partial fractions before inverting."],
      },
      {
        title: "Fourier series",
        body: "Any reasonable periodic function can be built from sines and cosines. The Fourier coefficients measure how much of each frequency the function contains.",
        formula: t`f(x)=\frac{a_0}{2}+\sum_{n=1}^\infty\big(a_n\cos nx+b_n\sin nx\big),\quad a_n=\frac1\pi\int_{-\pi}^{\pi}f\cos nx\,dx`,
        examples: [
          ex("Odd function", t`f(-x)=-f(x)\Rightarrow a_n=0`, "Only sine terms survive."),
          ex("Square wave", t`\frac4\pi\left(\sin x+\tfrac13\sin3x+\dots\right)`, "Only odd harmonics appear."),
          ex("Jump points", t`\tfrac12\big(f(x^-)+f(x^+)\big)`, "The series converges to the midpoint of a jump."),
        ],
        checks: ["Check whether f is even or odd to save work.", "Compute a₀, aₙ and bₙ over one period.", "Expect overshoot (Gibbs) near jumps."],
      },
      {
        title: "Complex numbers and De Moivre's theorem",
        body: "A complex number has a real and an imaginary part and can be drawn as a point in the plane. In polar form, multiplying complex numbers multiplies their lengths and adds their angles.",
        formula: t`z=re^{i\theta}=r(\cos\theta+i\sin\theta),\qquad z^n=r^n(\cos n\theta+i\sin n\theta)`,
        examples: [
          ex("Modulus", t`|3+4i|=5`, "Distance from the origin."),
          ex("Power", t`(1+i)^8=(\sqrt2)^8e^{2\pi i}=16`, "Convert to polar first."),
          ex("Roots of unity", t`z^n=1\Rightarrow z=e^{2\pi ik/n}`, "n roots equally spaced on the unit circle."),
        ],
        checks: ["Convert to polar form for powers and roots.", "Add angles when multiplying.", "There are exactly n distinct nth roots."],
      },
      {
        title: "Hyperbolic functions",
        body: "sinh and cosh are built from exponentials and behave like sine and cosine for a hyperbola instead of a circle. They show up in hanging cables, relativity and many integrals.",
        formula: t`\cosh x=\frac{e^x+e^{-x}}2,\quad \sinh x=\frac{e^x-e^{-x}}2,\quad \cosh^2x-\sinh^2x=1`,
        examples: [
          ex("Derivatives", t`(\sinh x)'=\cosh x,\ (\cosh x)'=\sinh x`, "No minus sign, unlike trig."),
          ex("Inverse", t`\sinh^{-1}x=\ln\big(x+\sqrt{x^2+1}\big)`, "Inverses are logarithms."),
          ex("Catenary", t`y=a\cosh(x/a)`, "The shape of a hanging chain."),
        ],
        checks: ["Rewrite in exponentials when stuck.", "Remember the + sign in the derivative of cosh.", "Use the identity cosh² − sinh² = 1."],
      },
      {
        title: "Newton's method",
        body: "Newton's method finds roots by repeatedly sliding down the tangent line to where it crosses the x-axis. Near a simple root, the number of correct digits roughly doubles each step.",
        formula: t`x_{n+1}=x_n-\frac{f(x_n)}{f'(x_n)}`,
        examples: [
          ex("Square root of 2", t`x_{n+1}=\tfrac12\left(x_n+\tfrac2{x_n}\right)`, "From f(x) = x² − 2."),
          ex("Fast", t`1\to1.5\to1.41667\to1.414216`, "Three steps give six correct digits."),
          ex("Failure", t`f'(x_n)=0`, "A flat tangent sends the next guess to infinity."),
        ],
        checks: ["Pick a starting guess close to the root.", "Stop when successive values agree.", "Watch out for f′ near zero."],
      },
      {
        title: "Gamma and Beta functions",
        body: "The Gamma function extends the factorial to non-integers, and the Beta function is a closely related integral. Together they evaluate many integrals that otherwise look impossible.",
        formula: t`\Gamma(n)=\int_0^\infty t^{n-1}e^{-t}dt,\quad \Gamma(n+1)=n!,\quad B(a,b)=\frac{\Gamma(a)\Gamma(b)}{\Gamma(a+b)}`,
        examples: [
          ex("Half", t`\Gamma\left(\tfrac12\right)=\sqrt\pi`, "Connected to the Gaussian integral."),
          ex("Recursion", t`\Gamma(x+1)=x\,\Gamma(x)`, "Lets you step between values."),
          ex("Beta integral", t`\int_0^1 x^2(1-x)^3dx=B(3,4)=\tfrac1{60}`, "Match the powers to a − 1 and b − 1."),
        ],
        checks: ["Match the integral to the Gamma or Beta form.", "Use Γ(n + 1) = n! for integers.", "Use the recursion to simplify."],
      },
    ],
  },

  // ─── Multivariable Calculus ────────────────────────────────────────────────
  {
    course: "multivariable-calculus",
    kicker: "Fields and flow",
    title: "Vector calculus",
    items: [
      {
        title: "Vector fields",
        body: "A vector field attaches an arrow to every point, like wind velocity on a map or the force of gravity in space. It describes direction and strength everywhere at once.",
        formula: t`\mathbf F(x,y,z)=\langle P,Q,R\rangle`,
        examples: [
          ex("Rotation", t`\mathbf F=\langle -y,x\rangle`, "Arrows circle around the origin."),
          ex("Gradient field", t`\mathbf F=\nabla f`, "Arrows point uphill on the graph of f."),
          ex("Radial", t`\mathbf F=\frac{\mathbf r}{|\mathbf r|^3}`, "Inverse-square fields like gravity."),
        ],
        checks: ["Plot a few arrows at sample points.", "Ask whether it spins or spreads.", "Check if it is the gradient of some function."],
      },
      {
        title: "Line integrals",
        body: "A line integral adds up a quantity along a curve. For a force field it measures work: how much the field pushes along the path you travel.",
        formula: t`\int_C\mathbf F\cdot d\mathbf r=\int_a^b\mathbf F(\mathbf r(t))\cdot\mathbf r'(t)\,dt`,
        examples: [
          ex("Work", t`\mathbf F=\langle y,x\rangle,\ \mathbf r=\langle t,t\rangle:\ \int_0^1 2t\,dt=1`, "Parametrize, dot, integrate."),
          ex("Scalar version", t`\int_C f\,ds`, "Mass of a wire with density f."),
          ex("Orientation", t`\int_{-C}=-\int_C`, "Reversing the path flips the sign."),
        ],
        checks: ["Parametrize the curve.", "Substitute into F and dot with r′(t).", "Integrate over the parameter interval."],
      },
      {
        title: "Conservative fields and potential functions",
        body: "A field is conservative when it is the gradient of a potential function. Then the work done depends only on the start and end points, not on the path, and work around any closed loop is zero.",
        formula: t`\mathbf F=\nabla f\Rightarrow\int_C\mathbf F\cdot d\mathbf r=f(B)-f(A)`,
        examples: [
          ex("Test in 2D", t`P_y=Q_x`, "On a simply connected region this means conservative."),
          ex("Find f", t`\mathbf F=\langle 2xy,x^2\rangle\Rightarrow f=x^2y`, "Integrate P in x, then match Q."),
          ex("Closed loop", t`\oint_C\nabla f\cdot d\mathbf r=0`, "No net work around a loop."),
        ],
        checks: ["Check the cross-partial (or curl = 0) condition.", "Integrate term by term to build f.", "Evaluate f at the endpoints."],
      },
      {
        title: "Green's theorem",
        body: "Green's theorem says circulation around a closed curve in the plane equals the total spinning inside it. It converts a line integral into a double integral, often an easier one.",
        formula: t`\oint_C P\,dx+Q\,dy=\iint_D\left(Q_x-P_y\right)dA`,
        examples: [
          ex("Area", t`A=\tfrac12\oint_C x\,dy-y\,dx`, "Choose P and Q so Qₓ − Pᵧ = 1."),
          ex("Swap", t`\oint_C (y^2dx+3xy\,dy)=\iint_D y\,dA`, "A double integral replaces four line integrals around a square."),
          ex("Orientation", t`\text{counterclockwise}`, "The region must be on your left."),
        ],
        checks: ["Confirm the curve is closed and positively oriented.", "Compute Qₓ − Pᵧ.", "Integrate over the enclosed region."],
      },
      {
        title: "Divergence and curl",
        body: "Divergence measures how much a field spreads out from a point, like a source or sink. Curl measures how much it spins around a point and in which direction the spin axis points.",
        formula: t`\nabla\cdot\mathbf F=P_x+Q_y+R_z,\qquad \nabla\times\mathbf F=\begin{vmatrix}\mathbf i&\mathbf j&\mathbf k\\\partial_x&\partial_y&\partial_z\\P&Q&R\end{vmatrix}`,
        examples: [
          ex("Source", t`\nabla\cdot\langle x,y,z\rangle=3`, "Spreads out equally everywhere."),
          ex("Rotation", t`\nabla\times\langle -y,x,0\rangle=\langle0,0,2\rangle`, "Spins about the z-axis."),
          ex("Identities", t`\nabla\times\nabla f=\mathbf 0,\ \nabla\cdot(\nabla\times\mathbf F)=0`, "Gradients never curl; curls never diverge."),
        ],
        checks: ["Divergence gives a scalar; curl gives a vector.", "Use the determinant layout for curl.", "Zero curl suggests a conservative field."],
      },
      {
        title: "Surface integrals and flux",
        body: "Flux measures how much of a field flows through a surface, like water through a net. Parametrize the surface, find its normal vector, and integrate the normal component of the field.",
        formula: t`\iint_S\mathbf F\cdot d\mathbf S=\iint_D\mathbf F(\mathbf r(u,v))\cdot(\mathbf r_u\times\mathbf r_v)\,du\,dv`,
        examples: [
          ex("Graph surface", t`z=g(x,y):\ d\mathbf S=\langle -g_x,-g_y,1\rangle dA`, "Upward normal for a graph."),
          ex("Sphere", t`\mathbf F=\mathbf r,\ |\mathbf r|=a:\ \text{flux}=4\pi a^3`, "Field is parallel to the normal."),
          ex("Surface area", t`\iint_D|\mathbf r_u\times\mathbf r_v|\,du\,dv`, "Integrating 1 gives area."),
        ],
        checks: ["Parametrize the surface.", "Compute r_u × r_v and check its direction.", "Dot with F and integrate."],
      },
      {
        title: "Stokes' theorem",
        body: "Stokes' theorem lifts Green's theorem into space: circulation around the edge of a surface equals the flux of the curl through the surface. Any surface with that edge gives the same answer.",
        formula: t`\oint_{\partial S}\mathbf F\cdot d\mathbf r=\iint_S(\nabla\times\mathbf F)\cdot d\mathbf S`,
        examples: [
          ex("Pick an easy surface", t`\text{flat disc instead of a dome}`, "Same boundary, same answer."),
          ex("Conservative", t`\nabla\times\mathbf F=\mathbf 0\Rightarrow\oint=0`, "No curl, no circulation."),
          ex("Orientation", t`\text{right-hand rule}`, "Fingers along the curve, thumb along the normal."),
        ],
        checks: ["Identify the boundary curve.", "Match orientation with the right-hand rule.", "Compute whichever side is easier."],
      },
      {
        title: "The divergence theorem",
        body: "The total flux out of a closed surface equals the total divergence inside the solid it encloses. What flows out must be produced inside.",
        formula: t`\oiint_{\partial E}\mathbf F\cdot d\mathbf S=\iiint_E\nabla\cdot\mathbf F\,dV`,
        examples: [
          ex("Constant divergence", t`\nabla\cdot\mathbf F=3\Rightarrow\text{flux}=3\,\text{Vol}(E)`, "Flux is just 3 times the volume."),
          ex("Box", t`\text{six faces}\to\text{one triple integral}`, "Saves computing six flux integrals."),
          ex("Gauss's law", t`\oiint\mathbf E\cdot d\mathbf S=\frac{Q}{\varepsilon_0}`, "Physics version of the same theorem."),
        ],
        checks: ["Make sure the surface is closed and outward oriented.", "Compute ∇·F.", "Integrate over the solid."],
      },
    ],
  },
  {
    course: "multivariable-calculus",
    kicker: "Finding the best point",
    title: "Optimization",
    items: [
      {
        title: "Second derivative test with the Hessian",
        body: "At a critical point, the Hessian matrix of second partial derivatives tells you the shape of the surface: a bowl (minimum), a dome (maximum) or a saddle.",
        formula: t`D=f_{xx}f_{yy}-f_{xy}^2`,
        examples: [
          ex("Minimum", t`D>0,\ f_{xx}>0`, "Curves up in every direction."),
          ex("Maximum", t`D>0,\ f_{xx}<0`, "Curves down in every direction."),
          ex("Saddle", t`D<0`, "Up one way, down another."),
        ],
        checks: ["Solve ∇f = 0 for critical points.", "Compute D at each one.", "D = 0 means the test is inconclusive."],
      },
      {
        title: "Lagrange multipliers",
        body: "To optimize a function along a constraint curve or surface, look for points where the gradient of the function is parallel to the gradient of the constraint. The multiplier λ is the scaling factor.",
        formula: t`\nabla f=\lambda\nabla g,\qquad g(x,y,z)=c`,
        examples: [
          ex("Box", t`\max xyz\ \text{s.t.}\ x+y+z=3\Rightarrow x=y=z=1`, "Symmetry gives the answer."),
          ex("Circle", t`\max x+y\ \text{on}\ x^2+y^2=1`, "Gives x = y = 1/√2."),
          ex("Meaning of λ", t`\lambda=\frac{df^*}{dc}`, "How fast the best value changes as the constraint relaxes."),
        ],
        checks: ["Write ∇f = λ∇g and the constraint.", "Solve the system (try dividing equations to remove λ).", "Compare f at all candidate points."],
      },
      {
        title: "KKT conditions",
        body: "The KKT conditions extend Lagrange multipliers to inequality constraints. A constraint that is not active at the optimum gets a zero multiplier; an active one pushes back with a non-negative multiplier.",
        formula: t`\nabla f+\sum\mu_i\nabla g_i=0,\quad g_i\le0,\quad \mu_i\ge0,\quad \mu_ig_i=0`,
        examples: [
          ex("Inactive", t`g_i<0\Rightarrow\mu_i=0`, "The constraint does not bind, so it has no effect."),
          ex("Active", t`g_i=0,\ \mu_i>0`, "The optimum sits on the boundary."),
          ex("Convex case", t`f,g_i\ \text{convex}`, "KKT points are then global minima."),
        ],
        checks: ["Write stationarity, feasibility, sign and complementary slackness.", "Try each pattern of active constraints.", "Keep only feasible points with μ ≥ 0."],
      },
      {
        title: "Gradient descent",
        body: "Gradient descent finds a minimum by repeatedly taking a small step downhill, opposite the gradient. The step size controls the trade-off between speed and stability.",
        formula: t`\mathbf x_{k+1}=\mathbf x_k-\alpha\nabla f(\mathbf x_k)`,
        examples: [
          ex("1D", t`f=x^2,\ \alpha=0.1:\ x_{k+1}=0.8x_k`, "Shrinks steadily to 0."),
          ex("Too big", t`\alpha=1.1:\ x_{k+1}=-1.2x_k`, "Overshoots and diverges."),
          ex("Stop rule", t`|\nabla f|<\varepsilon`, "Stop when the slope is nearly flat."),
        ],
        checks: ["Compute the gradient at the current point.", "Choose a step size that decreases f.", "Stop when the gradient is small."],
      },
    ],
  },
  {
    course: "multivariable-calculus",
    kicker: "Changing coordinates",
    title: "Coordinates and mappings",
    items: [
      {
        title: "Cylindrical and spherical coordinates",
        body: "Cylindrical coordinates add a height to polar coordinates; spherical coordinates use a distance and two angles. Pick the system that matches the symmetry of the region.",
        formula: t`dV=r\,dr\,d\theta\,dz,\qquad dV=\rho^2\sin\phi\,d\rho\,d\phi\,d\theta`,
        examples: [
          ex("Cylinder", t`x^2+y^2\le4\Rightarrow r\le2`, "Circular cross-sections suit cylindrical."),
          ex("Ball", t`\iiint_{\rho\le a}dV=\tfrac43\pi a^3`, "Spheres suit spherical."),
          ex("Cone", t`z=\sqrt{x^2+y^2}\Rightarrow\phi=\tfrac\pi4`, "A cone is a constant angle."),
        ],
        checks: ["Match coordinates to the symmetry.", "Rewrite the bounds and the integrand.", "Include the volume factor r or ρ² sin φ."],
      },
      {
        title: "Jacobian and change of variables",
        body: "Changing variables stretches and squeezes area. The Jacobian determinant measures that local scaling factor, so it must multiply the integrand in the new coordinates.",
        formula: t`\iint_R f\,dx\,dy=\iint_S f\,\left|\frac{\partial(x,y)}{\partial(u,v)}\right|du\,dv`,
        examples: [
          ex("Polar", t`\frac{\partial(x,y)}{\partial(r,\theta)}=r`, "Where the extra r comes from."),
          ex("Linear map", t`x=u+v,\ y=u-v:\ |J|=2`, "Area doubles."),
          ex("Parallelogram", t`u=x+y,\ v=x-y`, "Turns a slanted region into a rectangle."),
        ],
        checks: ["Pick u, v that simplify the region.", "Compute the Jacobian determinant.", "Use its absolute value."],
      },
      {
        title: "Implicit function theorem",
        body: "If an equation F(x, y) = 0 has a non-zero partial derivative in y at a point, then near that point y really is a smooth function of x, and you can find its slope without solving for y.",
        formula: t`F_y\ne0\Rightarrow\frac{dy}{dx}=-\frac{F_x}{F_y}`,
        examples: [
          ex("Circle", t`F=x^2+y^2-1:\ y'=-\tfrac xy`, "Fails only where y = 0."),
          ex("Three variables", t`\frac{\partial z}{\partial x}=-\frac{F_x}{F_z}`, "Surfaces defined by F(x,y,z) = 0."),
          ex("Failure", t`F_y=0`, "Vertical tangents or branching points."),
        ],
        checks: ["Check the relevant partial derivative is non-zero.", "Differentiate F, not the unknown solution.", "Evaluate at the given point."],
      },
      {
        title: "Curvature and torsion of space curves",
        body: "Curvature measures how sharply a curve bends; torsion measures how much it twists out of its plane. The Frenet frame (tangent, normal, binormal) moves along the curve and describes both.",
        formula: t`\kappa=\frac{|\mathbf r'\times\mathbf r''|}{|\mathbf r'|^3},\qquad \tau=\frac{(\mathbf r'\times\mathbf r'')\cdot\mathbf r'''}{|\mathbf r'\times\mathbf r''|^2}`,
        examples: [
          ex("Circle", t`\kappa=\tfrac1R,\ \tau=0`, "Bends uniformly and stays flat."),
          ex("Helix", t`\langle\cos t,\sin t,t\rangle:\ \kappa=\tau=\tfrac12`, "Constant bending and twisting."),
          ex("Line", t`\kappa=0`, "No bending at all."),
        ],
        checks: ["Compute r′, r″ (and r‴ for torsion).", "Use the cross-product formulas.", "Zero torsion means a planar curve."],
      },
    ],
  },
  {
    course: "multivariable-calculus",
    kicker: "Advanced topics",
    title: "Potentials, forms, surfaces and dynamics",
    items: [
      {
        title: "Laplace's equation and harmonic functions",
        body: "A harmonic function satisfies Laplace's equation: at every point its value equals the average of its neighbours. Steady temperatures, electrostatic potentials and ideal fluid flow are all harmonic.",
        formula: t`\nabla^2u=u_{xx}+u_{yy}+u_{zz}=0`,
        examples: [
          ex("Harmonic", t`u=x^2-y^2`, "uₓₓ + uᵧᵧ = 2 − 2 = 0."),
          ex("Point source", t`u=\frac1{|\mathbf r|}`, "Harmonic everywhere except the origin."),
          ex("Maximum principle", t`\max_D u=\max_{\partial D}u`, "No interior peaks."),
        ],
        checks: ["Compute all second partials and add them.", "Use boundary values to pin down the solution.", "Remember extremes occur on the boundary."],
      },
      {
        title: "Differential forms and the exterior derivative",
        body: "Differential forms are the objects you integrate: 1-forms along curves, 2-forms over surfaces, 3-forms over solids. The exterior derivative d unifies gradient, curl and divergence, and the general Stokes' theorem ties them together.",
        formula: t`\int_{\partial M}\omega=\int_M d\omega,\qquad d(d\omega)=0`,
        examples: [
          ex("1-form", t`\omega=P\,dx+Q\,dy`, "What you integrate along a curve."),
          ex("Exterior derivative", t`d\omega=(Q_x-P_y)\,dx\wedge dy`, "This is Green's theorem in disguise."),
          ex("Wedge", t`dx\wedge dy=-dy\wedge dx`, "Order matters; repeats vanish."),
        ],
        checks: ["Identify the degree of the form.", "Apply d term by term with the wedge rules.", "Match the dimension of the region to the form."],
      },
      {
        title: "Gaussian curvature of a surface",
        body: "At each point a surface bends by different amounts in different directions. Gaussian curvature multiplies the two extreme bendings: positive for domes, negative for saddles, zero for flat or rolled surfaces.",
        formula: t`K=\kappa_1\kappa_2=\frac{LN-M^2}{EG-F^2}`,
        examples: [
          ex("Sphere", t`K=\tfrac1{R^2}`, "Curves the same way in every direction."),
          ex("Saddle", t`K<0`, "Curves up one way and down the other."),
          ex("Cylinder", t`K=0`, "Flat in one direction, so it can be unrolled."),
        ],
        checks: ["Find the first fundamental form (E, F, G).", "Find the second fundamental form (L, M, N).", "Divide the determinants."],
      },
      {
        title: "Reynolds transport theorem",
        body: "When the region of integration itself moves or deforms, the rate of change of an integral has two parts: change of the integrand inside, plus what is carried across the moving boundary.",
        formula: t`\frac{d}{dt}\int_{V(t)}f\,dV=\int_{V(t)}\frac{\partial f}{\partial t}\,dV+\oint_{\partial V(t)}f\,(\mathbf v\cdot\mathbf n)\,dS`,
        examples: [
          ex("1D version", t`\frac{d}{dt}\int_{a(t)}^{b(t)}f\,dx=\int_a^b f_t\,dx+f(b)b'-f(a)a'`, "Leibniz's rule."),
          ex("Mass", t`f=\rho`, "Gives conservation of mass for a moving blob of fluid."),
          ex("Static region", t`\mathbf v=0`, "Only the first term remains."),
        ],
        checks: ["Separate the local change from the boundary flux.", "Use the boundary's velocity, not the fluid's, if they differ.", "Check the 1D Leibniz case as a sanity test."],
      },
      {
        title: "Equilibria and stability of nonlinear systems",
        body: "Equilibria are points where a system stops changing. Linearizing with the Jacobian matrix at an equilibrium tells you whether nearby paths settle in, spiral, or run away.",
        formula: t`\dot{\mathbf x}=\mathbf F(\mathbf x),\quad \mathbf F(\mathbf x^*)=0,\quad J=D\mathbf F(\mathbf x^*)`,
        examples: [
          ex("Stable", t`\operatorname{Re}\lambda<0`, "All eigenvalues pull paths in."),
          ex("Saddle", t`\lambda_1<0<\lambda_2`, "In one direction, out the other."),
          ex("Centre or spiral", t`\lambda=a\pm bi`, "Complex eigenvalues mean rotation."),
        ],
        checks: ["Solve F(x) = 0 for equilibria.", "Compute the Jacobian there.", "Classify by the eigenvalues."],
      },
    ],
  },

  // ─── Linear Algebra ────────────────────────────────────────────────────────
  {
    course: "linear-algebra",
    kicker: "Solving for unknowns",
    title: "Systems of equations and vectors",
    items: [
      {
        title: "Systems of linear equations",
        body: "A linear system asks for values that satisfy several straight-line (or flat) equations at once. It has exactly one solution, infinitely many, or none, and nothing in between.",
        formula: t`A\mathbf x=\mathbf b`,
        examples: [
          ex("Unique", t`x+y=3,\ x-y=1\Rightarrow(2,1)`, "Two lines crossing once."),
          ex("None", t`x+y=1,\ x+y=2`, "Parallel lines never meet."),
          ex("Infinite", t`x+y=1,\ 2x+2y=2`, "The same line twice."),
        ],
        checks: ["Write the augmented matrix.", "Row reduce.", "Look for a contradiction row or free variables."],
      },
      {
        title: "Gaussian elimination and row echelon form",
        body: "Gaussian elimination uses three safe row operations to turn a system into a staircase shape. From there you solve by back-substitution, and the pivots tell you the rank.",
        formula: t`R_i\leftrightarrow R_j,\quad R_i\to cR_i\ (c\ne0),\quad R_i\to R_i+cR_j`,
        examples: [
          ex("Eliminate", t`R_2\to R_2-2R_1`, "Create zeros below each pivot."),
          ex("Inconsistent", t`[0\ 0\ 0\mid 5]`, "0 = 5 means no solution."),
          ex("RREF", t`\begin{bmatrix}1&0&2\\0&1&-1\end{bmatrix}`, "Read the solution straight off."),
        ],
        checks: ["Get a pivot in each column from left to right.", "Zero out entries below (and above for RREF).", "Count pivots for the rank."],
      },
      {
        title: "Linear combinations and span",
        body: "A linear combination scales vectors and adds them. The span of a set is everything you can reach that way: a line, a plane, or the whole space.",
        formula: t`\operatorname{span}\{\mathbf v_1,\dots,\mathbf v_k\}=\{c_1\mathbf v_1+\dots+c_k\mathbf v_k\}`,
        examples: [
          ex("Plane", t`\operatorname{span}\{\mathbf e_1,\mathbf e_2\}=\text{the }xy\text{-plane}`, "Two independent vectors span a plane."),
          ex("Membership", t`\mathbf b\in\operatorname{span}\iff A\mathbf x=\mathbf b\text{ is consistent}`, "Turn it into a system."),
          ex("Redundant", t`\operatorname{span}\{\mathbf v,2\mathbf v\}=\operatorname{span}\{\mathbf v\}`, "A multiple adds nothing new."),
        ],
        checks: ["Put the vectors as columns of A.", "Ask whether Ax = b has a solution.", "Count pivots to find the span's dimension."],
      },
      {
        title: "Linear independence",
        body: "Vectors are linearly independent when none of them can be built from the others. The only way to combine them into the zero vector is to use all-zero coefficients.",
        formula: t`c_1\mathbf v_1+\dots+c_k\mathbf v_k=\mathbf 0\Rightarrow c_1=\dots=c_k=0`,
        examples: [
          ex("Independent", t`\langle1,0\rangle,\langle0,1\rangle`, "Neither is a multiple of the other."),
          ex("Dependent", t`\langle1,2\rangle,\langle2,4\rangle`, "The second is twice the first."),
          ex("Too many", t`k>n\Rightarrow\text{dependent}`, "Four vectors in ℝ³ must be dependent."),
        ],
        checks: ["Row reduce the matrix of column vectors.", "A pivot in every column means independent.", "For a square matrix, check det ≠ 0."],
      },
      {
        title: "Basis and dimension",
        body: "A basis is a set of independent vectors that spans the space: the smallest complete set of building blocks. Every basis of a space has the same number of vectors, called the dimension.",
        formula: t`\dim V=\#\text{basis vectors}`,
        examples: [
          ex("Standard basis", t`\{\mathbf e_1,\mathbf e_2,\mathbf e_3\}`, "ℝ³ has dimension 3."),
          ex("Polynomials", t`\{1,x,x^2\}`, "Polynomials of degree ≤ 2 have dimension 3."),
          ex("Coordinates", t`\mathbf v=c_1\mathbf b_1+c_2\mathbf b_2`, "Each vector has unique coordinates in a basis."),
        ],
        checks: ["Check the set spans.", "Check the set is independent.", "Count the vectors for the dimension."],
      },
    ],
  },
  {
    course: "linear-algebra",
    kicker: "Working with matrices",
    title: "Matrices, inverses and determinants",
    items: [
      {
        title: "Matrix multiplication",
        body: "Multiplying matrices composes their transformations. Each entry of AB is a row of A dotted with a column of B, and order matters: AB is usually not BA.",
        formula: t`(AB)_{ij}=\sum_k a_{ik}b_{kj}`,
        examples: [
          ex("Sizes", t`(m\times n)(n\times p)=m\times p`, "Inner sizes must match."),
          ex("Not commutative", t`AB\ne BA`, "Rotating then reflecting differs from the reverse."),
          ex("Identity", t`AI=IA=A`, "The do-nothing transformation."),
        ],
        checks: ["Check the inner dimensions match.", "Row of the first times column of the second.", "Never swap the order without reason."],
      },
      {
        title: "Inverse of a matrix",
        body: "The inverse undoes a matrix's transformation. It exists only for square matrices that do not squash space flat, which is exactly when the determinant is non-zero.",
        formula: t`AA^{-1}=I,\qquad \begin{bmatrix}a&b\\c&d\end{bmatrix}^{-1}=\frac1{ad-bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}`,
        examples: [
          ex("Solve", t`\mathbf x=A^{-1}\mathbf b`, "One clean solution when A is invertible."),
          ex("Gauss-Jordan", t`[A\mid I]\to[I\mid A^{-1}]`, "Row reduce to find the inverse."),
          ex("Product", t`(AB)^{-1}=B^{-1}A^{-1}`, "Reverse the order."),
        ],
        checks: ["Check det A ≠ 0.", "Use the 2×2 formula or row reduce [A | I].", "Multiply back to verify AA⁻¹ = I."],
      },
      {
        title: "Determinants",
        body: "The determinant measures how much a matrix scales area or volume, and whether it flips orientation. A zero determinant means space is squashed into a lower dimension.",
        formula: t`\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=ad-bc,\qquad \det(AB)=\det A\det B`,
        examples: [
          ex("Area", t`|\det A|=\text{area of the image of the unit square}`, "Geometric meaning."),
          ex("Triangular", t`\det=\text{product of the diagonal}`, "Row reduce to triangular form first."),
          ex("Row swap", t`\det\to-\det`, "Each swap flips the sign."),
        ],
        checks: ["Use cofactor expansion along a row with many zeros.", "Or reduce to triangular form, tracking swaps and scalings.", "det = 0 means not invertible."],
      },
      {
        title: "Rank and the rank-nullity theorem",
        body: "The rank counts the independent directions a matrix's output can reach. The nullity counts the input directions that get sent to zero. Together they always add up to the number of columns.",
        formula: t`\operatorname{rank}A+\operatorname{nullity}A=n`,
        examples: [
          ex("Full rank", t`3\times3,\ \operatorname{rank}=3\Rightarrow\operatorname{null}A=\{\mathbf 0\}`, "Invertible."),
          ex("Free variables", t`\operatorname{nullity}=\#\text{free variables}`, "Each free variable gives a null-space direction."),
          ex("Projection", t`\operatorname{rank}=2,\ n=3\Rightarrow\operatorname{nullity}=1`, "One direction collapses."),
        ],
        checks: ["Row reduce and count pivots for the rank.", "Count free variables for the nullity.", "Confirm they add up to n."],
      },
      {
        title: "LU decomposition",
        body: "LU decomposition stores Gaussian elimination as two triangular matrices. Once A = LU is known, each new right-hand side is solved quickly with a forward and a backward sweep.",
        formula: t`A=LU,\quad L\mathbf y=\mathbf b,\quad U\mathbf x=\mathbf y`,
        examples: [
          ex("Multipliers", t`\ell_{21}=\frac{a_{21}}{a_{11}}`, "L stores the elimination multipliers."),
          ex("Many systems", t`A\mathbf x=\mathbf b_1,\mathbf b_2,\dots`, "Factor once, reuse many times."),
          ex("Pivoting", t`PA=LU`, "Row swaps are recorded in P."),
        ],
        checks: ["Eliminate below each pivot, recording multipliers in L.", "Solve Ly = b forward.", "Solve Ux = y backward."],
      },
    ],
  },
  {
    course: "linear-algebra",
    kicker: "Structure of a matrix",
    title: "Transformations and eigenvalues",
    items: [
      {
        title: "Linear transformations as matrices",
        body: "A linear transformation keeps lines straight and the origin fixed. Every one can be written as a matrix whose columns are the images of the basis vectors.",
        formula: t`T(\mathbf x)=A\mathbf x,\qquad A=\big[\,T(\mathbf e_1)\ \cdots\ T(\mathbf e_n)\,\big]`,
        examples: [
          ex("Rotation", t`\begin{bmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{bmatrix}`, "Rotates by θ."),
          ex("Reflection", t`\begin{bmatrix}1&0\\0&-1\end{bmatrix}`, "Flips across the x-axis."),
          ex("Linearity", t`T(a\mathbf u+b\mathbf v)=aT(\mathbf u)+bT(\mathbf v)`, "The defining property."),
        ],
        checks: ["Find where each basis vector goes.", "Use those images as columns.", "Check T(0) = 0 to rule out non-linear maps."],
      },
      {
        title: "Change of basis",
        body: "The same vector or transformation looks different in different coordinate systems. A change-of-basis matrix converts coordinates, and similar matrices describe the same transformation in different bases.",
        formula: t`[\mathbf v]_{\mathcal E}=P[\mathbf v]_{\mathcal B},\qquad B=P^{-1}AP`,
        examples: [
          ex("Columns of P", t`P=[\mathbf b_1\ \mathbf b_2]`, "The new basis vectors in old coordinates."),
          ex("Similar", t`B=P^{-1}AP`, "Same eigenvalues, trace and determinant."),
          ex("Good basis", t`\text{eigenvectors}\Rightarrow B\ \text{diagonal}`, "The best basis makes the matrix simple."),
        ],
        checks: ["Build P from the new basis vectors.", "Use P⁻¹ to go back.", "Check invariants like trace and determinant."],
      },
      {
        title: "Eigenvalues and eigenvectors",
        body: "An eigenvector is a direction the matrix only stretches, never turns. The eigenvalue is the stretch factor. They reveal the natural axes of a transformation.",
        formula: t`A\mathbf v=\lambda\mathbf v,\qquad \det(A-\lambda I)=0`,
        examples: [
          ex("Diagonal", t`\begin{bmatrix}2&0\\0&3\end{bmatrix}:\ \lambda=2,3`, "The axes are eigenvectors."),
          ex("2×2 shortcut", t`\lambda^2-(\operatorname{tr}A)\lambda+\det A=0`, "Characteristic polynomial."),
          ex("Rotation", t`\lambda=e^{\pm i\theta}`, "No real eigenvectors: every direction turns."),
        ],
        checks: ["Solve det(A − λI) = 0.", "For each λ, solve (A − λI)v = 0.", "Check: sum of λ = trace, product = det."],
      },
      {
        title: "Diagonalization",
        body: "A matrix is diagonalizable when it has enough independent eigenvectors to form a basis. In that basis it just scales each axis, which makes powers and exponentials easy.",
        formula: t`A=PDP^{-1},\qquad A^k=PD^kP^{-1}`,
        examples: [
          ex("Powers", t`A^{100}=PD^{100}P^{-1}`, "Raise the diagonal entries only."),
          ex("Distinct eigenvalues", t`n\text{ distinct }\lambda\Rightarrow\text{diagonalizable}`, "A sufficient condition."),
          ex("Symmetric", t`A=QDQ^{\mathsf T}`, "Always diagonalizable with orthonormal eigenvectors."),
        ],
        checks: ["Find all eigenvalues and eigenvectors.", "Need n independent eigenvectors.", "P holds eigenvectors; D holds matching eigenvalues."],
      },
      {
        title: "Quadratic forms and definiteness",
        body: "A quadratic form is a polynomial with only squared and cross terms, written with a symmetric matrix. Its eigenvalues decide whether it is always positive, always negative, or both.",
        formula: t`Q(\mathbf x)=\mathbf x^{\mathsf T}A\mathbf x`,
        examples: [
          ex("Positive definite", t`x^2+y^2`, "All eigenvalues positive: a bowl."),
          ex("Indefinite", t`x^2-y^2`, "Mixed signs: a saddle."),
          ex("Cross term", t`x^2+4xy+y^2\to A=\begin{bmatrix}1&2\\2&1\end{bmatrix}`, "Split the cross coefficient in half."),
        ],
        checks: ["Write the symmetric matrix A.", "Find its eigenvalues (or leading minors).", "All positive means positive definite."],
      },
    ],
  },
  {
    course: "linear-algebra",
    kicker: "Geometry and data",
    title: "Orthogonality and applications",
    items: [
      {
        title: "Dot product and orthogonal projection",
        body: "The dot product measures how much two vectors point the same way. Projection finds the shadow of one vector on another, which is the closest point along that direction.",
        formula: t`\mathbf u\cdot\mathbf v=|\mathbf u||\mathbf v|\cos\theta,\qquad \operatorname{proj}_{\mathbf u}\mathbf v=\frac{\mathbf v\cdot\mathbf u}{\mathbf u\cdot\mathbf u}\mathbf u`,
        examples: [
          ex("Orthogonal", t`\mathbf u\cdot\mathbf v=0`, "Perpendicular vectors."),
          ex("Projection", t`\operatorname{proj}_{\langle1,0\rangle}\langle3,4\rangle=\langle3,0\rangle`, "The shadow on the x-axis."),
          ex("Error", t`\mathbf v-\operatorname{proj}\perp\mathbf u`, "The leftover is perpendicular."),
        ],
        checks: ["Compute the dot products.", "Scale u by (v·u)/(u·u).", "Check the remainder is perpendicular to u."],
      },
      {
        title: "Gram–Schmidt process",
        body: "Gram–Schmidt turns any basis into an orthonormal one by removing from each vector its projections onto the earlier ones, then normalizing.",
        formula: t`\mathbf u_k=\mathbf v_k-\sum_{j<k}\operatorname{proj}_{\mathbf u_j}\mathbf v_k,\qquad \mathbf q_k=\frac{\mathbf u_k}{|\mathbf u_k|}`,
        examples: [
          ex("Step 1", t`\mathbf u_1=\mathbf v_1`, "Keep the first vector."),
          ex("Step 2", t`\mathbf u_2=\mathbf v_2-\operatorname{proj}_{\mathbf u_1}\mathbf v_2`, "Remove the overlap."),
          ex("QR", t`A=QR`, "Gram–Schmidt on the columns gives the QR factorization."),
        ],
        checks: ["Subtract projections onto all previous vectors.", "Normalize at the end.", "Check all pairs have dot product 0."],
      },
      {
        title: "Least squares solutions",
        body: "When a system has no exact solution, least squares finds the x that makes Ax as close as possible to b. It is how a best-fit line is computed.",
        formula: t`A^{\mathsf T}A\hat{\mathbf x}=A^{\mathsf T}\mathbf b`,
        examples: [
          ex("Line fit", t`y=c_0+c_1x`, "Columns of A are 1 and x."),
          ex("Residual", t`\mathbf b-A\hat{\mathbf x}\perp\operatorname{col}A`, "The error is perpendicular to the column space."),
          ex("QR route", t`R\hat{\mathbf x}=Q^{\mathsf T}\mathbf b`, "More stable numerically."),
        ],
        checks: ["Form AᵀA and Aᵀb.", "Solve the normal equations.", "Check the residual is orthogonal to the columns."],
      },
      {
        title: "Singular value decomposition",
        body: "Every matrix, even a rectangular one, is a rotation, then a stretch along perpendicular axes, then another rotation. The stretch factors are the singular values.",
        formula: t`A=U\Sigma V^{\mathsf T},\qquad \sigma_i=\sqrt{\lambda_i(A^{\mathsf T}A)}`,
        examples: [
          ex("Rank", t`\operatorname{rank}A=\#\{\sigma_i>0\}`, "Count non-zero singular values."),
          ex("Compression", t`A_k=\sum_{i=1}^k\sigma_i\mathbf u_i\mathbf v_i^{\mathsf T}`, "Best rank-k approximation."),
          ex("Norm", t`\|A\|_2=\sigma_1`, "The largest stretch."),
        ],
        checks: ["Find eigenvalues of AᵀA.", "Take square roots for σ.", "Eigenvectors of AᵀA give V; uᵢ = Avᵢ / σᵢ."],
      },
      {
        title: "Principal component analysis",
        body: "PCA finds the directions along which data varies the most. Projecting onto the top few directions reduces dimensions while keeping most of the information.",
        formula: t`C=\frac1{n-1}X^{\mathsf T}X,\qquad C\mathbf w=\lambda\mathbf w`,
        examples: [
          ex("Centre first", t`X\leftarrow X-\bar X`, "Subtract the mean of each feature."),
          ex("Explained variance", t`\frac{\lambda_1}{\sum\lambda_i}`, "Share captured by the first component."),
          ex("Reduce", t`Z=XW_k`, "Keep the top k components."),
        ],
        checks: ["Centre (and often scale) the data.", "Find eigenvectors of the covariance matrix.", "Keep components until enough variance is explained."],
      },
      {
        title: "Markov chains and steady states",
        body: "A Markov chain moves between states with fixed probabilities. Repeatedly multiplying by the transition matrix leads, for well-behaved chains, to a steady state that no longer changes.",
        formula: t`\mathbf x_{k+1}=P\mathbf x_k,\qquad P\mathbf q=\mathbf q,\ \sum q_i=1`,
        examples: [
          ex("Columns", t`\text{each column of }P\text{ sums to }1`, "Probabilities of where you go next."),
          ex("Steady state", t`(P-I)\mathbf q=\mathbf 0`, "An eigenvector for λ = 1."),
          ex("Long run", t`P^k\mathbf x_0\to\mathbf q`, "Regular chains forget their start."),
        ],
        checks: ["Check columns (or rows) sum to 1.", "Solve (P − I)q = 0.", "Scale q so its entries sum to 1."],
      },
    ],
  },

  // ─── Probability and Statistics ────────────────────────────────────────────
  {
    course: "probability-statistics",
    kicker: "Measuring chance",
    title: "Probability foundations",
    items: [
      {
        title: "Sample spaces and events",
        body: "The sample space lists every possible outcome of an experiment. An event is any collection of outcomes, and its probability is a number from 0 to 1 that follows a few simple rules.",
        formula: t`P(A\cup B)=P(A)+P(B)-P(A\cap B),\qquad P(A^c)=1-P(A)`,
        examples: [
          ex("Die", t`S=\{1,\dots,6\},\ P(\text{even})=\tfrac12`, "Three of six equally likely outcomes."),
          ex("Complement", t`P(\text{at least one six in 4 rolls})=1-(5/6)^4`, "Often easier than counting directly."),
          ex("Overlap", t`P(A\cup B)`, "Subtract the overlap so it is not counted twice."),
        ],
        checks: ["List or describe the sample space.", "Check whether outcomes are equally likely.", "Use the complement for \"at least one\"."],
      },
      {
        title: "Counting: permutations and combinations",
        body: "Counting rules find the number of outcomes without listing them. Use permutations when order matters and combinations when it does not.",
        formula: t`{}_nP_r=\frac{n!}{(n-r)!},\qquad \binom nr=\frac{n!}{r!(n-r)!}`,
        examples: [
          ex("Order matters", t`{}_{10}P_3=720`, "Gold, silver and bronze from 10 runners."),
          ex("Order doesn't", t`\binom{10}{3}=120`, "Choosing a committee of 3."),
          ex("Card hand", t`P(\text{4 aces in 5 cards})=\frac{\binom44\binom{48}1}{\binom{52}5}`, "Favourable over total."),
        ],
        checks: ["Ask: does order matter?", "Multiply counts for independent stages.", "Divide favourable by total for probability."],
      },
      {
        title: "Conditional probability",
        body: "Conditional probability updates chances once you know something has happened. You shrink the sample space to the known event and see what fraction of it the other event occupies.",
        formula: t`P(A\mid B)=\frac{P(A\cap B)}{P(B)}`,
        examples: [
          ex("Cards", t`P(\text{king}\mid\text{face card})=\tfrac4{12}`, "Only face cards remain possible."),
          ex("Multiplication rule", t`P(A\cap B)=P(B)P(A\mid B)`, "Chain probabilities step by step."),
          ex("Tree", t`P(B)=\sum_i P(B\mid A_i)P(A_i)`, "Total probability over all branches."),
        ],
        checks: ["Identify which event is known.", "Divide the joint probability by the known event's probability.", "Do not confuse P(A | B) with P(B | A)."],
      },
      {
        title: "Bayes' theorem",
        body: "Bayes' theorem reverses a conditional probability: from how likely the evidence is under each cause, it finds how likely each cause is given the evidence. It explains why rare diseases give many false positives.",
        formula: t`P(A\mid B)=\frac{P(B\mid A)P(A)}{P(B)}`,
        examples: [
          ex("Medical test", t`P(D)=0.01,\ \text{sens}=0.99,\ \text{FP}=0.05\Rightarrow P(D\mid +)\approx0.17`, "Most positives are false when the disease is rare."),
          ex("Prior to posterior", t`\text{posterior}\propto\text{likelihood}\times\text{prior}`, "The core of Bayesian thinking."),
          ex("Denominator", t`P(B)=P(B\mid A)P(A)+P(B\mid A^c)P(A^c)`, "Use total probability."),
        ],
        checks: ["Write the prior P(A).", "Find the likelihoods for each case.", "Normalize with the total probability of the evidence."],
      },
      {
        title: "Independent events",
        body: "Two events are independent when knowing one happened tells you nothing about the other. Then the probability that both happen is the product of their probabilities.",
        formula: t`P(A\cap B)=P(A)P(B)\iff P(A\mid B)=P(A)`,
        examples: [
          ex("Coins", t`P(HH)=\tfrac14`, "Separate flips do not influence each other."),
          ex("Not independent", t`\text{drawing without replacement}`, "The second draw depends on the first."),
          ex("Disjoint ≠ independent", t`A\cap B=\varnothing\Rightarrow P(A\mid B)=0`, "Disjoint events with positive probability are dependent."),
        ],
        checks: ["Compute P(A)P(B) and compare with P(A ∩ B).", "Ask if one outcome changes the other.", "Never assume disjoint means independent."],
      },
    ],
  },
  {
    course: "probability-statistics",
    kicker: "Modelling uncertainty",
    title: "Random variables and distributions",
    items: [
      {
        title: "Random variables and distributions",
        body: "A random variable assigns a number to each outcome. Its distribution says how probability is spread over the possible values, through a probability mass function (discrete) or a density (continuous).",
        formula: t`\sum_x p(x)=1,\qquad \int_{-\infty}^\infty f(x)\,dx=1,\qquad F(x)=P(X\le x)`,
        examples: [
          ex("Discrete", t`X=\text{number of heads in 3 flips}`, "Values 0, 1, 2, 3."),
          ex("Continuous", t`P(a\le X\le b)=\int_a^b f(x)\,dx`, "Probability is area under the density."),
          ex("CDF", t`P(a<X\le b)=F(b)-F(a)`, "Works for both kinds."),
        ],
        checks: ["Decide discrete or continuous.", "Check the total probability is 1.", "Use the CDF for interval probabilities."],
      },
      {
        title: "Expected value and variance",
        body: "The expected value is the long-run average of a random variable. The variance measures how spread out its values are around that average; its square root is the standard deviation.",
        formula: t`E[X]=\sum x\,p(x),\qquad \operatorname{Var}(X)=E[X^2]-(E[X])^2`,
        examples: [
          ex("Die", t`E[X]=3.5`, "The average of 1 through 6."),
          ex("Linearity", t`E[aX+b]=aE[X]+b`, "Always true."),
          ex("Scaling variance", t`\operatorname{Var}(aX+b)=a^2\operatorname{Var}(X)`, "Shifting doesn't change spread."),
        ],
        checks: ["Weight each value by its probability.", "Compute E[X²] separately for the variance.", "Variance can never be negative."],
      },
      {
        title: "Binomial distribution",
        body: "The binomial distribution counts successes in a fixed number of independent trials, each with the same success probability.",
        formula: t`P(X=k)=\binom nk p^k(1-p)^{n-k},\quad E[X]=np,\quad \operatorname{Var}(X)=np(1-p)`,
        examples: [
          ex("Coin", t`n=10,\ p=\tfrac12:\ P(X=5)\approx0.246`, "Five heads in ten flips."),
          ex("Defects", t`n=20,\ p=0.05:\ P(X=0)\approx0.358`, "No defective parts."),
          ex("Mean", t`np=10\cdot0.3=3`, "Expected number of successes."),
        ],
        checks: ["Fixed n, two outcomes, constant p, independent trials.", "Use the formula for exact k.", "Add terms (or use complements) for ranges."],
      },
      {
        title: "Poisson distribution",
        body: "The Poisson distribution counts how many times a rare event happens in a fixed interval of time or space, when events occur independently at a steady average rate λ.",
        formula: t`P(X=k)=\frac{e^{-\lambda}\lambda^k}{k!},\qquad E[X]=\operatorname{Var}(X)=\lambda`,
        examples: [
          ex("Calls", t`\lambda=3:\ P(X=0)=e^{-3}\approx0.05`, "No calls in an hour."),
          ex("Rescale", t`\lambda\to2\lambda\ \text{for twice the time}`, "The rate scales with the interval."),
          ex("Approximation", t`\text{Bin}(n,p)\approx\text{Pois}(np)`, "Large n, small p."),
        ],
        checks: ["Find λ for the interval asked about.", "Plug into the formula.", "Mean equals variance is a quick sanity check."],
      },
      {
        title: "Normal distribution",
        body: "The normal distribution is the symmetric bell curve described by a mean and a standard deviation. Standardizing with a z-score turns any normal into the standard normal table.",
        formula: t`Z=\frac{X-\mu}{\sigma}\sim N(0,1)`,
        examples: [
          ex("68-95-99.7", t`P(|Z|<1)\approx0.68,\ P(|Z|<2)\approx0.95`, "The empirical rule."),
          ex("Heights", t`\mu=170,\ \sigma=10:\ P(X>190)=P(Z>2)\approx0.023`, "Standardize then look up."),
          ex("Sum", t`X+Y\sim N(\mu_1+\mu_2,\ \sigma_1^2+\sigma_2^2)`, "Independent normals add."),
        ],
        checks: ["Compute the z-score.", "Use the table or symmetry.", "Add variances, not standard deviations."],
      },
      {
        title: "Central Limit Theorem",
        body: "Averages of many independent observations are approximately normal, whatever the shape of the original distribution. This is why normal-based methods work so widely.",
        formula: t`\bar X\approx N\!\left(\mu,\ \frac{\sigma^2}{n}\right)\quad\text{for large }n`,
        examples: [
          ex("Standard error", t`\sigma_{\bar X}=\frac{\sigma}{\sqrt n}`, "Averages vary less than single values."),
          ex("Dice", t`\text{mean of 30 rolls}\approx N(3.5,\ 2.92/30)`, "Even a flat distribution averages to a bell."),
          ex("Rule of thumb", t`n\ge30`, "Usually enough unless the data is very skewed."),
        ],
        checks: ["Check independence and a reasonable n.", "Use σ/√n for the spread of the mean.", "Standardize with that standard error."],
      },
    ],
  },
  {
    course: "probability-statistics",
    kicker: "Learning from data",
    title: "Statistics and inference",
    items: [
      {
        title: "Mean, median and standard deviation",
        body: "The mean and median summarize the centre of data; the standard deviation and interquartile range summarize the spread. The median and IQR resist outliers, the mean and standard deviation do not.",
        formula: t`\bar x=\frac1n\sum x_i,\qquad s=\sqrt{\frac{1}{n-1}\sum(x_i-\bar x)^2}`,
        examples: [
          ex("Outlier", t`\{1,2,3,100\}:\ \bar x=26.5,\ \text{median}=2.5`, "The mean is pulled by the outlier."),
          ex("n − 1", t`s^2\ \text{divides by}\ n-1`, "Makes the sample variance unbiased."),
          ex("IQR rule", t`x>Q_3+1.5\,\text{IQR}`, "Flags possible outliers."),
        ],
        checks: ["Plot the data first.", "Use median and IQR for skewed data.", "Divide by n − 1 for a sample."],
      },
      {
        title: "Confidence intervals",
        body: "A confidence interval gives a range of plausible values for an unknown parameter. A 95% interval is built by a method that captures the true value in 95% of repeated samples.",
        formula: t`\bar x\pm z^*\frac{\sigma}{\sqrt n}\qquad\text{or}\qquad \bar x\pm t^*_{n-1}\frac{s}{\sqrt n}`,
        examples: [
          ex("95% z", t`z^*=1.96`, "Used when σ is known or n is large."),
          ex("Width", t`\text{width}\propto\frac1{\sqrt n}`, "Four times the data halves the width."),
          ex("Proportion", t`\hat p\pm1.96\sqrt{\frac{\hat p(1-\hat p)}n}`, "For a success rate."),
        ],
        checks: ["Pick z or t based on what you know.", "Compute the standard error.", "Interpret it as a statement about the method, not a probability for one interval."],
      },
      {
        title: "Hypothesis tests and p-values",
        body: "A hypothesis test asks whether the data are surprising if a default claim (the null hypothesis) were true. The p-value is the probability of results at least that extreme under the null.",
        formula: t`z=\frac{\bar x-\mu_0}{\sigma/\sqrt n},\qquad p=P(|Z|\ge|z|)`,
        examples: [
          ex("Decision", t`p<\alpha=0.05\Rightarrow\text{reject }H_0`, "Strong enough evidence against the null."),
          ex("Not proof", t`p>\alpha`, "Fail to reject; it does not prove H₀ true."),
          ex("One-sided", t`H_1:\mu>\mu_0`, "Only one tail counts."),
        ],
        checks: ["State H₀ and H₁ before looking at data.", "Compute the test statistic and p-value.", "Compare with α and state the conclusion in context."],
      },
      {
        title: "Type I and Type II errors",
        body: "A Type I error rejects a true null hypothesis (a false alarm). A Type II error fails to reject a false null (a missed effect). Power is the probability of correctly detecting a real effect.",
        formula: t`\alpha=P(\text{reject }H_0\mid H_0),\quad \beta=P(\text{keep }H_0\mid H_1),\quad \text{power}=1-\beta`,
        examples: [
          ex("Trade-off", t`\alpha\downarrow\Rightarrow\beta\uparrow`, "For a fixed sample size."),
          ex("More data", t`n\uparrow\Rightarrow\text{power}\uparrow`, "The usual way to reduce both errors."),
          ex("Courtroom", t`\text{convicting the innocent}=\text{Type I}`, "A memorable analogy."),
        ],
        checks: ["Name which error is worse in context.", "Set α accordingly.", "Plan n for the power you need."],
      },
      {
        title: "Correlation",
        body: "The correlation coefficient measures the strength and direction of a straight-line relationship between two variables, from −1 to 1. It does not measure curved relationships and does not prove causation.",
        formula: t`r=\frac{\sum(x_i-\bar x)(y_i-\bar y)}{\sqrt{\sum(x_i-\bar x)^2\sum(y_i-\bar y)^2}}`,
        examples: [
          ex("Perfect", t`r=\pm1`, "All points on a line."),
          ex("None", t`r\approx0`, "No linear pattern (but maybe a curve)."),
          ex("R squared", t`R^2=r^2`, "Share of variation explained by the line."),
        ],
        checks: ["Scatter-plot first.", "Check for outliers that drive r.", "Never read correlation as causation."],
      },
      {
        title: "Simple linear regression",
        body: "Linear regression fits the straight line that makes the squared vertical errors as small as possible. The slope estimates how much y changes for each unit increase in x.",
        formula: t`\hat y=b_0+b_1x,\quad b_1=r\frac{s_y}{s_x},\quad b_0=\bar y-b_1\bar x`,
        examples: [
          ex("Interpret", t`b_1=2.5`, "Each extra unit of x adds about 2.5 to y on average."),
          ex("Residual", t`e_i=y_i-\hat y_i`, "Should look like random noise."),
          ex("Extrapolation", t`x\ \text{far outside the data}`, "Predictions become unreliable."),
        ],
        checks: ["Compute the slope then the intercept.", "Check the residual plot for patterns.", "Only predict within the range of the data."],
      },
      {
        title: "Maximum likelihood estimation",
        body: "Maximum likelihood picks the parameter value that makes the observed data most probable. In practice you maximize the log-likelihood by setting its derivative to zero.",
        formula: t`\hat\theta=\arg\max_\theta\sum_i\log f(x_i\mid\theta)`,
        examples: [
          ex("Coin", t`\hat p=\frac{\#\text{heads}}{n}`, "The observed proportion."),
          ex("Normal mean", t`\hat\mu=\bar x`, "The sample mean."),
          ex("Exponential", t`\hat\lambda=\frac1{\bar x}`, "Rate is one over the average wait."),
        ],
        checks: ["Write the likelihood as a product.", "Take logs to make it a sum.", "Differentiate, set to zero, and check it is a maximum."],
      },
      {
        title: "Chi-square tests",
        body: "Chi-square tests compare observed counts with the counts expected under a hypothesis. Large gaps between observed and expected counts give a large statistic and a small p-value.",
        formula: t`\chi^2=\sum\frac{(O-E)^2}{E}`,
        examples: [
          ex("Goodness of fit", t`df=k-1`, "Is a die fair?"),
          ex("Independence", t`E_{ij}=\frac{(\text{row}_i)(\text{col}_j)}{n}`, "Are two categorical variables related?"),
          ex("Condition", t`E\ge5`, "Expected counts should not be too small."),
        ],
        checks: ["Compute expected counts.", "Sum (O − E)² / E.", "Compare with the χ² distribution with the right degrees of freedom."],
      },
    ],
  },
  {
    course: "probability-statistics",
    kicker: "Beyond the basics",
    title: "Information, survival and modern methods",
    items: [
      {
        title: "Entropy",
        body: "Entropy measures the average surprise, or uncertainty, of a random variable. A fair coin has 1 bit of entropy; a coin that always lands heads has none.",
        formula: t`H(X)=-\sum_x p(x)\log_2p(x)`,
        examples: [
          ex("Fair coin", t`H=1\ \text{bit}`, "Maximum uncertainty for two outcomes."),
          ex("Biased", t`p=0.9:\ H\approx0.47`, "Less surprise on average."),
          ex("Uniform", t`H=\log_2 n`, "The most uncertain distribution on n outcomes."),
        ],
        checks: ["Use base 2 for bits.", "Treat 0 log 0 as 0.", "Uniform distributions maximize entropy."],
      },
      {
        title: "KL divergence",
        body: "KL divergence measures how many extra bits you waste by using a model distribution Q when the truth is P. It is zero only when the two distributions match, and it is not symmetric.",
        formula: t`D_{KL}(P\|Q)=\sum_x p(x)\log\frac{p(x)}{q(x)}\ge0`,
        examples: [
          ex("Same", t`P=Q\Rightarrow D_{KL}=0`, "No wasted bits."),
          ex("Asymmetric", t`D_{KL}(P\|Q)\ne D_{KL}(Q\|P)`, "Not a true distance."),
          ex("Cross-entropy", t`H(P,Q)=H(P)+D_{KL}(P\|Q)`, "The loss used to train classifiers."),
        ],
        checks: ["Check Q > 0 wherever P > 0.", "Sum p log(p/q).", "Remember the order of the arguments matters."],
      },
      {
        title: "Kaplan–Meier survival curve",
        body: "The Kaplan–Meier estimator draws a survival curve from data where some subjects leave the study early (censoring). At each event time it multiplies by the fraction of those still at risk who survive.",
        formula: t`\hat S(t)=\prod_{t_i\le t}\left(1-\frac{d_i}{n_i}\right)`,
        examples: [
          ex("Step", t`n_i=10,\ d_i=2:\ \times0.8`, "Two of ten at risk fail."),
          ex("Censoring", t`\text{leaves the risk set, no drop}`, "Censored subjects lower n but not S."),
          ex("Median survival", t`\hat S(t)=0.5`, "Read off where the curve crosses one half."),
        ],
        checks: ["Sort event and censoring times.", "Update the number at risk at each time.", "Multiply survival fractions only at event times."],
      },
      {
        title: "Controlling false discoveries",
        body: "Running many tests at once makes some false positives almost certain. Corrections like Bonferroni control the chance of any false positive; Benjamini–Hochberg controls the expected fraction of false discoveries.",
        formula: t`\text{Bonferroni: }p_i\le\frac{\alpha}{m},\qquad \text{BH: largest }k\text{ with }p_{(k)}\le\frac{k}{m}\alpha`,
        examples: [
          ex("Problem", t`m=20,\ \alpha=0.05\Rightarrow E[\text{false positives}]=1`, "Even when nothing is real."),
          ex("Bonferroni", t`0.05/20=0.0025`, "Strict but simple."),
          ex("BH", t`\text{FDR}\le\alpha`, "More power when many effects are real."),
        ],
        checks: ["Count how many tests were run.", "Choose FWER or FDR control.", "Sort p-values before applying BH."],
      },
      {
        title: "Bootstrap and Monte Carlo methods",
        body: "Monte Carlo methods answer probability questions by simulating many random trials. The bootstrap resamples your own data with replacement to estimate how much a statistic would vary.",
        formula: t`\widehat{SE}=\sqrt{\frac1{B-1}\sum_{b=1}^B\left(\hat\theta^*_b-\bar\theta^*\right)^2}`,
        examples: [
          ex("Estimate π", t`\pi\approx4\cdot\frac{\#\text{inside circle}}{\#\text{points}}`, "Random points in a square."),
          ex("Bootstrap CI", t`[\hat\theta^*_{(2.5\%)},\ \hat\theta^*_{(97.5\%)}]`, "Percentile interval."),
          ex("Error", t`\propto\frac1{\sqrt B}`, "More simulations, smaller error."),
        ],
        checks: ["Resample with replacement, same size as the data.", "Recompute the statistic each time.", "Use enough replications (often 1,000+)."],
      },
    ],
  },
];
