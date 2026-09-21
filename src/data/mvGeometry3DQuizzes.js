/** Study-guide quiz banks for the Multivariable "3D Analytical Geometry & Quadric Surfaces" guide — 20 MCQs per section. */

export const MV_GEO_DIRCOS_QUIZ = [
  // Original 8 Questions[cite: 7]
  {
    prompt: "For the vector $\\mathbf{v}=(3,4,12)$, the direction cosine $n$ (with the $z$-axis) is:",
    options: ["$12/13$", "$12/19$", "$3/13$"],
    answer: "A",
    explanation: "$|\\mathbf{v}|=\\sqrt{9+16+144}=13$, so $n=z/|\\mathbf{v}|=12/13$.",
  },
  {
    prompt: "Which identity must every set of direction cosines $(l,m,n)$ satisfy?",
    options: ["$l+m+n=1$", "$l^2+m^2+n^2=1$", "$l^2+m^2+n^2=0$"],
    answer: "B",
    explanation: "Direction cosines are the components of a unit vector, so their squares sum to 1.",
  },
  {
    prompt: "Direction ratios of the line joining $(1,2,3)$ to $(4,6,3)$ are:",
    options: ["$(3,4,0)$", "$(5,8,6)$", "$(4,6,3)$"],
    answer: "A",
    explanation: "Subtract coordinates: $(4-1,\\,6-2,\\,3-3)=(3,4,0)$.",
  },
  {
    prompt: "Is $(l,m,n)=\\left(\\tfrac{1}{3},\\tfrac{2}{3},\\tfrac{2}{3}\\right)$ a valid set of direction cosines?",
    options: [
      "Yes — $l^2+m^2+n^2=1$",
      "No — the values must be integers",
      "No — $l^2+m^2+n^2\\neq 1$",
    ],
    answer: "A",
    explanation: "$\\tfrac19+\\tfrac49+\\tfrac49=\\tfrac99=1$, so it satisfies the required identity.",
  },
  {
    prompt: "A vector points along the positive $z$-axis. Its direction angle $\\gamma$ (with the $z$-axis) is:",
    options: ["$0^\\circ$", "$90^\\circ$", "$180^\\circ$"],
    answer: "A",
    explanation: "The vector is parallel to the axis it's measured against, so the angle between them is $0^\\circ$ and $\\cos\\gamma=1$.",
  },
  {
    prompt: "A vector has direction ratios $(2,-2,1)$. Its direction cosines are:",
    options: [
      "$\\left(\\tfrac23,-\\tfrac23,\\tfrac13\\right)$",
      "$(2,-2,1)$",
      "$\\left(\\tfrac12,-\\tfrac12,\\tfrac14\\right)$",
    ],
    answer: "A",
    explanation: "$|\\mathbf{v}|=\\sqrt{4+4+1}=3$; divide each ratio by 3.",
  },
  {
    prompt: "If a vector's direction cosines are $l=-1,\\,m=0,\\,n=0$, the vector points:",
    options: [
      "Along the negative $x$-axis",
      "Along the positive $x$-axis",
      "Along the negative $y$-axis",
    ],
    answer: "A",
    explanation: "$l=-1$ means the unit vector is $(-1,0,0)$, i.e. the negative $x$-direction.",
  },
  {
    prompt: "If $l=0,\\,m=0,\\,n=1$, the vector is parallel to:",
    options: ["The $z$-axis", "The $x$-axis", "The plane $z=0$"],
    answer: "A",
    explanation: "$(0,0,1)$ is the unit vector along the $z$-axis.",
  },
  // New 12 Questions
  {
    prompt: "If a vector makes angles $\\alpha = 60^\\circ$ and $\\beta = 60^\\circ$ with the $x$ and $y$ axes, what is a possible value for $\\gamma$?",
    options: ["$45^\\circ$", "$90^\\circ$", "$30^\\circ$"],
    answer: "A",
    explanation: "$\\cos^2(60^\\circ) + \\cos^2(60^\\circ) + \\cos^2\\gamma = 1 \\Rightarrow 1/4 + 1/4 + \\cos^2\\gamma = 1 \\Rightarrow \\cos\\gamma = \\pm 1/\\sqrt{2}$. Thus, $45^\\circ$ is possible.",
  },
  {
    prompt: "The direction cosines of the vector $\\mathbf{v}=(-1, 2, -2)$ are:",
    options: ["$\\left(-\\tfrac13, \\tfrac23, -\\tfrac23\\right)$", "$\\left(-1, 2, -2\\right)$", "$\\left(-\\tfrac{1}{9}, \\tfrac{2}{9}, -\\tfrac{2}{9}\\right)$"],
    answer: "A",
    explanation: "Magnitude is $\\sqrt{1+4+4} = 3$. Dividing each component by 3 yields the direction cosines.",
  },
  {
    prompt: "Which of the following triples can represent direction ratios for a line parallel to the $y$-axis?",
    options: ["$(0, 5, 0)$", "$(1, 1, 0)$", "$(0, 0, 1)$"],
    answer: "A",
    explanation: "A line parallel to the $y$-axis has direction vector $(0, y, 0)$ for any nonzero $y$.",
  },
  {
    prompt: "If the direction cosines of a line are $(l, m, n)$, then $(-l, -m, -n)$ represents:",
    options: ["The same line, pointing in the opposite direction", "A perpendicular line", "A line rotated by $90^\\circ$"],
    answer: "A",
    explanation: "Negating the direction cosines flips the vector $180^\\circ$ along the exact same line of action.",
  },
  {
    prompt: "What is the sum of the squares of the direction ratios $(a, b, c)$?",
    options: ["$a^2 + b^2 + c^2$", "$1$", "$0$"],
    answer: "A",
    explanation: "Unlike direction cosines, direction ratios are unnormalized, so their squares sum to the square of the vector's magnitude, not necessarily 1.",
  },
  {
    prompt: "For a line equally inclined to all three positive coordinate axes, the direction cosines are:",
    options: ["$\\left(\\tfrac{1}{\\sqrt3}, \\tfrac{1}{\\sqrt3}, \\tfrac{1}{\\sqrt3}\\right)$", "$\\left(1, 1, 1\\right)$", "$\\left(\\tfrac13, \\tfrac13, \\tfrac13\\right)$"],
    answer: "A",
    explanation: "If $\\alpha=\\beta=\\gamma$, then $3\\cos^2\\alpha = 1 \\Rightarrow \\cos\\alpha = 1/\\sqrt{3}$.",
  },
  {
    prompt: "If $l^2 + m^2 = 1$, what must $n$ be?",
    options: ["$0$", "$1$", "$-1$"],
    answer: "A",
    explanation: "Since $l^2 + m^2 + n^2 = 1$, if the first two sum to $1$, then $n^2 = 0$, so $n=0$.",
  },
  {
    prompt: "The direction ratios of the vector from $(5, -1, 4)$ to $(5, -1, 8)$ are:",
    options: ["$(0, 0, 4)$", "$(10, -2, 12)$", "$(0, 0, 12)$"],
    answer: "A",
    explanation: "Subtracting initial from final: $(5-5, -1-(-1), 8-4) = (0, 0, 4)$.",
  },
  {
    prompt: "Are $(2, 4, -6)$ and $(1, 2, -3)$ direction ratios for the same line?",
    options: ["Yes, they are proportional", "No, they have different magnitudes", "Yes, because they sum to 0"],
    answer: "A",
    explanation: "Any scalar multiple of a set of direction ratios describes the same parallel direction in 3D space.",
  },
  {
    prompt: "The vector $\\mathbf{v}=4\\mathbf{i} - 3\\mathbf{k}$ has direction cosines:",
    options: ["$\\left(\\tfrac45, 0, -\\tfrac35\\right)$", "$\\left(\\tfrac45, -\\tfrac35, 0\\right)$", "$\\left(4, 0, -3\\right)$"],
    answer: "A",
    explanation: "The vector is $(4, 0, -3)$. Magnitude is $\\sqrt{16+0+9} = 5$. Dividing by 5 yields the answer.",
  },
  {
    prompt: "If a line lies entirely within the $xy$-plane, its direction cosine $n$ is:",
    options: ["$0$", "$1$", "Undefined"],
    answer: "A",
    explanation: "A line in the $xy$-plane has no $z$-component, making its angle with the $z$-axis $90^\\circ$. Thus, $n = \\cos(90^\\circ) = 0$.",
  },
  {
    prompt: "Can a vector have direction angles $\\alpha=30^\\circ, \\beta=45^\\circ$?",
    options: ["No, $\\cos^2(30^\\circ) + \\cos^2(45^\\circ) > 1$", "Yes, if $\\gamma = 60^\\circ$", "Yes, if $\\gamma = 90^\\circ$"],
    answer: "A",
    explanation: "$\\cos^2(30^\\circ) = 3/4$ and $\\cos^2(45^\\circ) = 1/2$. Summing these gives $1.25$, which exceeds $1$. Thus, no such vector exists.",
  }
];

export const MV_GEO_ANGLE3D_QUIZ = [
  // Original 8 Questions[cite: 7]
  {
    prompt: "Lines with direction ratios $(1,1,1)$ and $(1,-1,0)$ meet at an angle $\\theta$ with:",
    options: ["$\\cos\\theta=0$ ($\\theta=90^\\circ$)", "$\\cos\\theta=1$", "$\\cos\\theta=1/\\sqrt6$"],
    answer: "A",
    explanation: "Dot product $=1(1)+1(-1)+1(0)=0$, so the lines are perpendicular.",
  },
  {
    prompt: "Direction ratios $(2,0,0)$ and $(0,3,0)$ describe two lines that are:",
    options: ["Perpendicular", "Parallel", "Skew"],
    answer: "A",
    explanation: "Their dot product is $0$, and both lie along coordinate axes, so they're perpendicular (and here they also intersect at the origin).",
  },
  {
    prompt: "For direction ratios $(1,2,2)$ and $(2,1,2)$, $\\cos\\theta$ equals:",
    options: ["$8/9$", "$5/9$", "$1$"],
    answer: "A",
    explanation: "Dot product $=2+2+4=8$; both vectors have magnitude 3, so $\\cos\\theta=8/(3\\cdot3)=8/9$.",
  },
  {
    prompt: "Lines with direction ratios $(2,4,6)$ and $(1,2,3)$ are:",
    options: ["Parallel ($\\theta=0^\\circ$)", "Perpendicular", "At $60^\\circ$"],
    answer: "A",
    explanation: "$(2,4,6)=2(1,2,3)$ — one is a scalar multiple of the other, so the directions coincide.",
  },
  {
    prompt: "Two lines with direction ratios $(a_1,b_1,c_1)$ and $(a_2,b_2,c_2)$ are perpendicular exactly when:",
    options: [
      "$a_1a_2+b_1b_2+c_1c_2=0$",
      "$a_1/a_2=b_1/b_2=c_1/c_2$",
      "$a_1a_2+b_1b_2+c_1c_2=1$",
    ],
    answer: "A",
    explanation: "Perpendicularity means the dot product of the direction vectors is zero.",
  },
  {
    prompt: "The angle between lines with direction ratios $(1,0,0)$ and $(1,1,0)$ is:",
    options: ["$45^\\circ$", "$90^\\circ$", "$30^\\circ$"],
    answer: "A",
    explanation: "$\\cos\\theta=\\dfrac{1}{1\\cdot\\sqrt2}=\\dfrac{1}{\\sqrt2}\\Rightarrow\\theta=45^\\circ$.",
  },
  {
    prompt: "If two lines are given directly by their direction cosines $(l_1,m_1,n_1)$ and $(l_2,m_2,n_2)$, the angle between them satisfies:",
    options: [
      "$\\cos\\theta=l_1l_2+m_1m_2+n_1n_2$",
      "$\\cos\\theta=\\dfrac{l_1l_2+m_1m_2+n_1n_2}{\\sqrt{l_1^2+m_1^2+n_1^2}}$",
      "$\\cos\\theta=l_1+l_2+m_1+m_2$",
    ],
    answer: "A",
    explanation: "Direction cosines already come from unit vectors, so no magnitude division is needed — the dot product alone gives $\\cos\\theta$.",
  },
  {
    prompt: "The angle a line makes with itself is:",
    options: ["$0^\\circ$, since $\\cos\\theta=1$", "$90^\\circ$", "Undefined"],
    answer: "A",
    explanation: "A vector dotted with itself over its own magnitude squared gives $\\cos\\theta=1$.",
  },
  // New 12 Questions
  {
    prompt: "If the dot product of two direction vectors is negative, the angle $\\theta$ between the lines is:",
    options: ["Obtuse ($>90^\\circ$)", "Acute ($<90^\\circ$)", "Exactly $180^\\circ$"],
    answer: "A",
    explanation: "A negative dot product means $\\cos\\theta < 0$, which occurs when the angle is obtuse.",
  },
  {
    prompt: "The angle between the $x$-axis and the line with direction ratios $(1, 1, \\sqrt{2})$ is:",
    options: ["$60^\\circ$", "$45^\\circ$", "$30^\\circ$"],
    answer: "A",
    explanation: "The $x$-axis has direction $(1,0,0)$. The dot product is $1$. The magnitude of the second vector is $\\sqrt{1+1+2} = 2$. $\\cos\\theta = 1/2 \\Rightarrow \\theta = 60^\\circ$.",
  },
  {
    prompt: "If two lines have direction ratios $(k, 2, 3)$ and $(1, -1, 2)$ and are perpendicular, what is $k$?",
    options: ["$-4$", "$4$", "$0$"],
    answer: "A",
    explanation: "The dot product must be $0$: $k(1) + 2(-1) + 3(2) = 0 \\Rightarrow k - 2 + 6 = 0 \\Rightarrow k = -4$.",
  },
  {
    prompt: "Lines with direction ratios $(1, -2, 1)$ and $(2, 4, 6)$ are:",
    options: ["Perpendicular", "Parallel", "Neither"],
    answer: "A",
    explanation: "Wait, $(2, 4, 6)$ is NOT a multiple. Let's check dot product: $2 - 8 + 6 = 0$. They are perpendicular. Option A is correct. (Setting Answer to A).",
   
  },
  {
    prompt: "What is the angle between the lines $\\mathbf{r}_1(t) = (t, -t, 0)$ and $\\mathbf{r}_2(s) = (0, s, s)$?",
    options: ["$120^\\circ$ or $60^\\circ$", "$90^\\circ$", "$45^\\circ$"],
    answer: "A",
    explanation: "Directions are $(1, -1, 0)$ and $(0, 1, 1)$. Dot product is $-1$. Magnitudes are $\\sqrt{2}$ and $\\sqrt{2}$. $\\cos\\theta = -1/2$, so $\\theta = 120^\\circ$ (or $60^\\circ$ for the intersecting lines).",
  },
  {
    prompt: "If the direction cosines of line 1 are $(l, m, n)$ and line 2 are $(m, n, l)$, and they are perpendicular, then:",
    options: ["$lm + mn + nl = 0$", "$l+m+n=0$", "$l^2+m^2+n^2=0$"],
    answer: "A",
    explanation: "The dot product of the direction cosines must be zero: $l(m) + m(n) + n(l) = 0$.",
  },
  {
    prompt: "The angle between the diagonals of a cube is:",
    options: ["$\\cos^{-1}(1/3)$", "$\\cos^{-1}(1/\\sqrt{3})$", "$90^\\circ$"],
    answer: "A",
    explanation: "Using vertices $(0,0,0)$ to $(1,1,1)$ and $(1,0,0)$ to $(0,1,1)$, directions are $(1,1,1)$ and $(-1,1,1)$. Dot product is $1$. Magnitudes are $\\sqrt{3}$. $\\cos\\theta = 1/3$.",
  },
  {
    prompt: "If two lines have proportional direction ratios, their cross product is:",
    options: ["The zero vector $\\mathbf{0}$", "A unit vector", "A scalar"],
    answer: "A",
    explanation: "Parallel vectors have a cross product of $\\mathbf{0}$.",
  },
  {
    prompt: "Two intersecting lines uniquely define:",
    options: ["A plane", "A sphere", "A skew surface"],
    answer: "A",
    explanation: "Any two intersecting lines define a single unique plane containing both.",
  },
  {
    prompt: "The maximum possible angle defined between two un-oriented 3D lines is:",
    options: ["$90^\\circ$", "$180^\\circ$", "$360^\\circ$"],
    answer: "A",
    explanation: "When considering lines (not oriented vectors), the angle between them is typically taken as the acute or right angle, capping at $90^\\circ$.",
  },
  {
    prompt: "Find the cosine of the angle between $(2, -1, 2)$ and $(4, 3, 0)$:",
    options: ["$1/3$", "$2/3$", "$0$"],
    answer: "A",
    explanation: "Dot product: $8 - 3 + 0 = 5$. Magnitudes: $\\sqrt{9}=3$ and $\\sqrt{25}=5$. $\\cos\\theta = 5 / (3 \\times 5) = 1/3$.",
  },
  {
    prompt: "If $\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = |\\mathbf{v}_1||\\mathbf{v}_2|$, the lines are:",
    options: ["Parallel", "Perpendicular", "Skew"],
    answer: "A",
    explanation: "This means $\\cos\\theta = 1$, so the angle is $0^\\circ$ and the lines are parallel.",
  }
];

export const MV_GEO_PLANE_QUIZ = [
  // Original 8 Questions[cite: 7]
  {
    prompt: "The point-normal equation of the plane through $(1,2,3)$ with normal $(1,1,1)$ is:",
    options: ["$x+y+z=6$", "$x+y+z=0$", "$x-y+z=2$"],
    answer: "A",
    explanation: "$1(x-1)+1(y-2)+1(z-3)=0\\Rightarrow x+y+z-6=0$.",
  },
  {
    prompt: "The normal vector to the plane $2x-3y+z=5$ is:",
    options: ["$(2,-3,1)$", "$(2,-3,5)$", "$(-2,3,-1)$ only"],
    answer: "A",
    explanation: "In $Ax+By+Cz=D$, the coefficients $(A,B,C)$ are exactly the components of a normal vector.",
  },
  {
    prompt: "The plane through the origin with normal $(1,0,0)$ is:",
    options: ["$x=0$ (the $yz$-plane)", "$y=0$", "$x+y+z=0$"],
    answer: "A",
    explanation: "$1(x-0)+0(y-0)+0(z-0)=0\\Rightarrow x=0$.",
  },
  {
    prompt: "Starting from the vector form $\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{r}_0)=0$, the constant $D$ in $\\mathbf{n}\\cdot\\mathbf{r}=D$ equals:",
    options: ["$\\mathbf{n}\\cdot\\mathbf{r}_0$", "$|\\mathbf{r}_0|$", "$0$ always"],
    answer: "A",
    explanation: "Expanding gives $\\mathbf{n}\\cdot\\mathbf{r}=\\mathbf{n}\\cdot\\mathbf{r}_0$, so the right-hand side is the fixed value $\\mathbf{n}\\cdot\\mathbf{r}_0$.",
  },
  {
    prompt: "Two planes are parallel exactly when:",
    options: [
      "Their normal vectors are scalar multiples of each other",
      "They share exactly one point",
      "Their normals are perpendicular",
    ],
    answer: "A",
    explanation: "Parallel planes tilt the same way in space, so their normals point in the same (or opposite) direction.",
  },
  {
    prompt: "The plane through $(0,0,0)$, $(1,0,0)$ and $(0,1,0)$ has equation:",
    options: ["$z=0$", "$x=0$", "$x+y+z=0$"],
    answer: "A",
    explanation: "The normal is $(1,0,0)\\times(0,1,0)=(0,0,1)$, giving $0(x)+0(y)+1(z)=0\\Rightarrow z=0$.",
  },
  {
    prompt: "The equations $3x+3y+3z=9$ and $x+y+z=3$ represent:",
    options: [
      "The same plane",
      "Two parallel but distinct planes",
      "Two perpendicular planes",
    ],
    answer: "A",
    explanation: "Dividing the first equation by 3 gives the second exactly — same plane, normals are scalar multiples.",
  },
  {
    prompt: "In the vector form $\\mathbf{n}\\cdot(\\mathbf{r}-\\mathbf{r}_0)=0$, what does $\\mathbf{r}_0$ represent?",
    options: [
      "One known point that lies on the plane",
      "The plane's normal vector",
      "The origin, always",
    ],
    answer: "A",
    explanation: "$\\mathbf{r}_0$ is the position vector of a fixed point already known to be on the plane.",
  },
  // New 12 Questions
  {
    prompt: "What is the $z$-intercept of the plane $2x + 3y + 4z = 12$?",
    options: ["$3$", "$4$", "$12$"],
    answer: "A",
    explanation: "Set $x=0$ and $y=0$. Then $4z = 12$, yielding $z=3$.",
  },
  {
    prompt: "A plane is horizontal. Its normal vector must be parallel to:",
    options: ["The $z$-axis", "The $x$-axis", "The $y$-axis"],
    answer: "A",
    explanation: "A horizontal plane (like $z=c$) has a normal pointing straight up or down, parallel to $(0,0,1)$.",
  },
  {
    prompt: "To find the normal to a plane containing points P, Q, and R, you can compute:",
    options: ["$\\vec{PQ} \\times \\vec{PR}$", "$\\vec{PQ} \\cdot \\vec{PR}$", "$\\vec{P} + \\vec{Q} + \\vec{R}$"],
    answer: "A",
    explanation: "The cross product of two vectors embedded in the plane yields a vector orthogonal to the plane.",
  },
  {
    prompt: "Are the planes $x-2y+z=4$ and $2x-4y+2z=7$ parallel?",
    options: ["Yes, their normals are proportional", "No, they intersect", "Yes, they are the exact same plane"],
    answer: "A",
    explanation: "The normals $(1,-2,1)$ and $(2,-4,2)$ are proportional, but $4 \\times 2 \\neq 7$, so they are distinct parallel planes.",
  },
  {
    prompt: "The equation of the $xz$-plane is:",
    options: ["$y=0$", "$x=0$", "$z=0$"],
    answer: "A",
    explanation: "Any point on the $xz$-plane has a $y$-coordinate of 0.",
  },
  {
    prompt: "The normal to a plane is $\\mathbf{n} = (0, 5, 0)$. This plane is parallel to:",
    options: ["The $xz$-plane", "The $yz$-plane", "The $xy$-plane"],
    answer: "A",
    explanation: "The normal is along the $y$-axis, so the plane must be perpendicular to the $y$-axis, making it parallel to the $xz$-plane.",
  },
  {
    prompt: "Find the equation of the plane passing through $(2, -1, 3)$ with normal $(0, 0, 1)$.",
    options: ["$z=3$", "$x=2$", "$y=-1$"],
    answer: "A",
    explanation: "Using the point-normal form: $0(x-2) + 0(y+1) + 1(z-3) = 0 \\Rightarrow z=3$.",
  },
  {
    prompt: "If a plane has equation $Ax + By = D$ (where $C=0$), it is:",
    options: ["Parallel to the $z$-axis", "Perpendicular to the $z$-axis", "Passing through the origin"],
    answer: "A",
    explanation: "The missing $z$-variable means the surface doesn't change as $z$ changes; it forms a vertical plane parallel to the $z$-axis.",
  },
  {
    prompt: "Two planes are orthogonal if:",
    options: ["The dot product of their normals is zero", "Their normals are cross-multiplied to zero", "They share two points"],
    answer: "A",
    explanation: "The angle between planes is the angle between their normals. If $\\mathbf{n}_1 \\cdot \\mathbf{n}_2 = 0$, they are orthogonal.",
  },
  {
    prompt: "What is the normal to the plane defined by $\\mathbf{r}(u,v) = \\mathbf{r}_0 + u\\mathbf{a} + v\\mathbf{b}$?",
    options: ["$\\mathbf{a} \\times \\mathbf{b}$", "$\\mathbf{a} \\cdot \\mathbf{b}$", "$\\mathbf{r}_0$"],
    answer: "A",
    explanation: "The vectors $\\mathbf{a}$ and $\\mathbf{b}$ lie in the plane, so their cross product provides the normal.",
  },
  {
    prompt: "The plane $x/a + y/b + z/c = 1$ intersects the axes at:",
    options: ["$(a,0,0), (0,b,0), (0,0,c)$", "$(1,1,1)$", "$(a,b,c)$"],
    answer: "A",
    explanation: "Setting any two variables to zero solves the remaining variable as the denominator, representing the axis intercepts.",
  },
  {
    prompt: "The plane $0x + 0y + 0z = 5$ represents:",
    options: ["The empty set (no points satisfy this)", "The entire 3D space", "The origin"],
    answer: "A",
    explanation: "There are no $(x,y,z)$ coordinates that can satisfy $0 = 5$.",
  }
];

export const MV_GEO_PTPLANE_QUIZ = [
  // Original 8 Questions[cite: 7]
  {
    prompt: "The distance from $(1,1,1)$ to the plane $x+y+z-6=0$ is:",
    options: ["$\\sqrt3$", "$3$", "$6/\\sqrt3$"],
    answer: "A",
    explanation: "$d=\\dfrac{|1+1+1-6|}{\\sqrt{1^2+1^2+1^2}}=\\dfrac{3}{\\sqrt3}=\\sqrt3$.",
  },
  {
    prompt: "The distance from the origin to the plane $2x+2y+z-6=0$ is:",
    options: ["$2$", "$6$", "$6/3$ only in special cases"],
    answer: "A",
    explanation: "$d=\\dfrac{|0+0+0-6|}{\\sqrt{4+4+1}}=\\dfrac{6}{3}=2$.",
  },
  {
    prompt: "The point $(2,2,2)$ and the plane $x+y+z-6=0$: the distance between them is:",
    options: ["$0$, since the point lies on the plane", "$\\sqrt3$", "$2$"],
    answer: "A",
    explanation: "$2+2+2-6=0$, so the numerator vanishes — the point is on the plane.",
  },
  {
    prompt: "The distance from the origin to a general plane $Ax+By+Cz+D=0$ is:",
    options: [
      "$|D|/\\sqrt{A^2+B^2+C^2}$",
      "$|D|$",
      "$D/\\sqrt{A^2+B^2+C^2}$ (no absolute value needed)",
    ],
    answer: "A",
    explanation: "Plug $(0,0,0)$ into the point-to-plane distance formula — only the $D$ term survives, and distance must be nonnegative.",
  },
  {
    prompt: "The distance between the parallel planes $x+y+z=1$ and $x+y+z=4$ is:",
    options: ["$\\sqrt3$", "$3$", "$3/\\sqrt2$"],
    answer: "A",
    explanation: "Rewrite as $x+y+z-4=0$ and measure from any point on the first plane, e.g. $(1,0,0)$: $d=\\dfrac{|1-4|}{\\sqrt3}=\\dfrac{3}{\\sqrt3}=\\sqrt3$.",
  },
  {
    prompt: "If the normal $(A,B,C)$ used in the distance formula is not a unit vector, do you still divide by $\\sqrt{A^2+B^2+C^2}$?",
    options: [
      "Yes — always, regardless of the normal's length",
      "No — only if $(A,B,C)$ happens to be a unit vector",
      "No — the formula only works for unit normals",
    ],
    answer: "A",
    explanation: "The denominator is exactly what rescales the raw plug-in value into a true perpendicular distance.",
  },
  {
    prompt: "The distance from $(3,0,0)$ to the plane $x=5$ is:",
    options: ["$2$", "$5$", "$3$"],
    answer: "A",
    explanation: "Write the plane as $x-5=0$: $d=\\dfrac{|3-5|}{\\sqrt{1}}=2$.",
  },
  {
    prompt: "Why does the point-to-plane distance formula use an absolute value in the numerator?",
    options: [
      "Because the raw plug-in value can be negative, but distance can't be",
      "Because $A,B,C$ can be negative",
      "It's purely a stylistic convention with no mathematical reason",
    ],
    answer: "A",
    explanation: "Plugging a point on one side of the plane gives a negative signed value; the absolute value converts it to an actual (nonnegative) distance.",
  },
  // New 12 Questions
  {
    prompt: "Distance from $(0, 2, 0)$ to the plane $3x + 4y + 12z = 0$ is:",
    options: ["$8/13$", "$2/13$", "$0$"],
    answer: "A",
    explanation: "Numerator: $|3(0) + 4(2) + 12(0)| = 8$. Denominator: $\\sqrt{9 + 16 + 144} = 13$. Distance is $8/13$.",
  },
  {
    prompt: "The formula $d = \\dfrac{|D_1 - D_2|}{\\sqrt{A^2+B^2+C^2}}$ calculates:",
    options: ["Distance between two parallel planes $Ax+By+Cz=D_1$ and $Ax+By+Cz=D_2$", "Distance from origin to a plane", "Distance between skew lines"],
    answer: "A",
    explanation: "Since the normals are identical, the difference in constants over the normal's magnitude yields the exact gap between the parallel planes.",
  },
  {
    prompt: "What is the distance from the point $(1, -1, 1)$ to the $xy$-plane?",
    options: ["$1$", "$-1$", "$0$"],
    answer: "A",
    explanation: "The equation of the $xy$-plane is $z=0$. The perpendicular distance is simply the absolute value of the $z$-coordinate: $|1| = 1$.",
  },
  {
    prompt: "If a point gives a positive value when plugged into $Ax+By+Cz+D$, and another point gives a negative value, this means:",
    options: ["They lie on opposite sides of the plane", "One of them is the origin", "They are equidistant from the plane"],
    answer: "A",
    explanation: "The plane equation $Ax+By+Cz+D=0$ splits space into a positive half-space and a negative half-space.",
  },
  {
    prompt: "Find the distance from $(2, 3, -1)$ to the plane $y = 7$.",
    options: ["$4$", "$7$", "$10$"],
    answer: "A",
    explanation: "The plane is $y-7=0$. Distance is $|3-7|/\\sqrt{1^2} = 4$.",
  },
  {
    prompt: "Distance between parallel planes $x-2y+2z=4$ and $2x-4y+4z=14$ is:",
    options: ["$1$", "$2$", "$5/3$"],
    answer: "A",
    explanation: "First, scale the first equation to match normals: $2x-4y+4z=8$. $d = |14 - 8| / \\sqrt{4+16+16} = 6/6 = 1$.",
  },
  {
    prompt: "To find the point on a plane closest to the origin, you should drop a perpendicular line from the origin. The direction of this line is:",
    options: ["The normal vector of the plane", "A vector parallel to the plane", "The $z$-axis"],
    answer: "A",
    explanation: "The shortest path from a point to a plane always follows the plane's normal vector.",
  },
  {
    prompt: "If the plane passes through the point you are measuring from, the distance formula evaluates to:",
    options: ["$0/\\sqrt{A^2+B^2+C^2}$", "Undefined", "$1$"],
    answer: "A",
    explanation: "The numerator represents evaluating the plane equation at that point. If it's on the plane, the result is zero.",
  },
  {
    prompt: "Distance from $(-1, -1, -1)$ to $x+y+z=3$ is:",
    options: ["$2\\sqrt{3}$", "$6/\\sqrt{3}$", "$\\sqrt{3}$"],
    answer: "A",
    explanation: "Plane is $x+y+z-3=0$. Numerator is $|-1-1-1-3| = |-6| = 6$. Denominator is $\\sqrt{3}$. Distance $= 6/\\sqrt{3} = 2\\sqrt{3}$.",
  },
  {
    prompt: "Is the distance from $(1,2,3)$ to $2x+y-2z=0$ zero?",
    options: ["No, it evaluates to $2/3$", "Yes", "No, it evaluates to $-2/3$"],
    answer: "A",
    explanation: "Numerator: $|2(1) + 2 - 2(3)| = |2+2-6| = |-2| = 2$. Denominator: $\\sqrt{4+1+4} = 3$. Distance is $2/3$.",
  },
  {
    prompt: "The sign of $D$ in $Ax+By+Cz+D=0$ dictates:",
    options: ["The signed distance from the origin scaled by the normal's magnitude", "Which quadrant the plane is in", "The slope of the plane"],
    answer: "A",
    explanation: "Since distance to origin is $|D|/|\\mathbf{n}|$, the value $D$ determines how far the plane is shifted from the origin along its normal.",
  },
  {
    prompt: "A point moves such that its distance to $x=0$ equals its distance to $y=0$. It traces:",
    options: ["Two intersecting planes $y=x$ and $y=-x$", "A cylinder", "A single line"],
    answer: "A",
    explanation: "$|x| = |y|$, which means $y = x$ or $y = -x$. These form two diagonal planes in 3D space.",
  }
];

export const MV_GEO_LINE3D_QUIZ = [
  // Original 8 Questions[cite: 7]
  {
    prompt: "The parametric equations of the line through $(1,0,-1)$ with direction $(2,3,-1)$ are:",
    options: [
      "$x=1+2t,\\;y=3t,\\;z=-1-t$",
      "$x=2+t,\\;y=3+t,\\;z=-1+t$",
      "$x=1+3t,\\;y=2t,\\;z=-1-t$",
    ],
    answer: "A",
    explanation: "Each coordinate is $\\text{start}+t\\cdot\\text{direction component}$: $x=1+2t,\\,y=0+3t,\\,z=-1+(-1)t$.",
  },
  {
    prompt: "The symmetric form $\\dfrac{x-x_0}{a}=\\dfrac{y-y_0}{b}=\\dfrac{z-z_0}{c}$ requires:",
    options: [
      "None of $a,b,c$ is zero",
      "$a=b=c$",
      "The line passes through the origin",
    ],
    answer: "A",
    explanation: "Dividing by $a$, $b$, or $c$ is only valid when each of them is nonzero.",
  },
  {
    prompt: "If a line has direction ratios $(a,0,c)$ with $b=0$, how is this handled?",
    options: [
      "Write $y=y_0$ separately, and $\\dfrac{x-x_0}{a}=\\dfrac{z-z_0}{c}$ for the rest",
      "The line cannot be written in any closed form",
      "Set $b=1$ instead of $0$ to avoid division issues",
    ],
    answer: "A",
    explanation: "A zero component means that coordinate never changes, so it's pinned to a constant while the other two follow the usual ratio.",
  },
  {
    prompt: "In $\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$, the point corresponding to $t=0$ is:",
    options: ["$\\mathbf{r}_0$ always", "The origin always", "Undefined without more information"],
    answer: "A",
    explanation: "Plugging $t=0$ removes the $t\\mathbf{v}$ term entirely, leaving just $\\mathbf{r}_0$.",
  },
  {
    prompt: "Two lines have direction vectors that are scalar multiples of each other. The lines are:",
    options: [
      "Parallel (possibly the same line)",
      "Necessarily identical",
      "Necessarily skew",
    ],
    answer: "A",
    explanation: "Proportional direction vectors mean the lines point the same way, but they could still be offset from each other.",
  },
  {
    prompt: "The direction ratios of the line through $(1,1,1)$ and $(2,3,4)$ are:",
    options: ["$(1,2,3)$", "$(3,4,5)$", "$(2,3,4)$"],
    answer: "A",
    explanation: "Subtract coordinates: $(2-1,\\,3-1,\\,4-1)=(1,2,3)$.",
  },
  {
    prompt: "Is the point $(3,5,7)$ on the line $x=1+2t,\\,y=1+4t,\\,z=1+6t$?",
    options: [
      "Yes — $t=1$ satisfies all three coordinates",
      "No — no single $t$ works for all three",
      "Cannot be determined",
    ],
    answer: "A",
    explanation: "From $x$: $3=1+2t\\Rightarrow t=1$. Check: $y=1+4(1)=5$ ✓, $z=1+6(1)=7$ ✓.",
  },
  {
    prompt: "As $t$ ranges over all real numbers, $\\mathbf{r}(t)=\\mathbf{r}_0+t\\mathbf{v}$ traces out:",
    options: [
      "A straight line through $\\mathbf{r}_0$ in the direction of $\\mathbf{v}$",
      "A plane containing $\\mathbf{r}_0$",
      "A circle centered at $\\mathbf{r}_0$",
    ],
    answer: "A",
    explanation: "This is exactly the vector (parametric) definition of a 3D line.",
  },
  // New 12 Questions
  {
    prompt: "The symmetric equations $\\dfrac{x-2}{3} = \\dfrac{y+1}{-2} = z-4$ describe a line through which point?",
    options: ["$(2, -1, 4)$", "$(-2, 1, -4)$", "$(3, -2, 1)$"],
    answer: "A",
    explanation: "Reading directly from $x-x_0, y-y_0, z-z_0$, the base point is $(2, -1, 4)$.",
  },
  {
    prompt: "What is the direction vector for the line $\\dfrac{x}{2} = y = \\dfrac{z-1}{4}$?",
    options: ["$(2, 1, 4)$", "$(0, 1, 1)$", "$(2, 0, 4)$"],
    answer: "A",
    explanation: "The denominators correspond to the direction components. $y$ can be written as $y/1$, giving $(2, 1, 4)$.",
  },
  {
    prompt: "Find a parametric equation for the line parallel to $z$-axis through $(1, 2, 3)$.",
    options: ["$x=1, y=2, z=3+t$", "$x=1+t, y=2+t, z=3$", "$x=t, y=2t, z=3t$"],
    answer: "A",
    explanation: "Parallel to the $z$-axis means direction $(0,0,1)$. Hence $x$ and $y$ are constant.",
  },
  {
    prompt: "Where does the line $x=1+t, y=2t, z=-1+t$ intersect the $xy$-plane?",
    options: ["$(2, 2, 0)$", "$(1, 0, -1)$", "$(0, -2, -2)$"],
    answer: "A",
    explanation: "Intersecting the $xy$-plane means $z=0$. $-1+t = 0 \\Rightarrow t=1$. Substituting $t=1$: $x=2, y=2$.",
  },
  {
    prompt: "Are the lines $\\mathbf{r}_1(t) = (1+t, 2-t, 3+2t)$ and $\\mathbf{r}_2(s) = (2s, -2s, 4s)$ parallel?",
    options: ["Yes, their direction vectors are proportional", "No, they intersect", "No, they are skew"],
    answer: "A",
    explanation: "Directions are $(1, -1, 2)$ and $(2, -2, 4)$. Since $(2, -2, 4) = 2(1, -1, 2)$, they are parallel.",
  },
  {
    prompt: "In vector form $\\mathbf{r}(t) = \\mathbf{r}_0 + t\\mathbf{v}$, the parameter $t$ dictates:",
    options: ["The signed distance along the line from $\\mathbf{r}_0$, scaled by $|\\mathbf{v}|$", "The angle of rotation", "The $z$-coordinate"],
    answer: "A",
    explanation: "The parameter $t$ controls how many \"steps\" of vector $\\mathbf{v}$ you take from the starting point.",
  },
  {
    prompt: "Find the intersection of $\\mathbf{r}_1(t)=(t, 1+t, 2-t)$ and $\\mathbf{r}_2(s)=(1, s, s)$.",
    options: ["$(1, 2, 1)$", "They do not intersect", "$(0, 1, 2)$"],
    answer: "B",
    explanation: "$x$: $t=1$. If $t=1$, $\\mathbf{r}_1(1) = (1, 2, 1)$. Check $\\mathbf{r}_2$: $s=2 \\Rightarrow (1, 2, 2) \\neq (1, 2, 1)$. Wait, $1+t = s \\Rightarrow 2 = s$. $2-t = s \\Rightarrow 1 = s$. Contradiction. They do not intersect. The correct answer is B.",
    // Fixing option map
    
  },
  {
    prompt: "If a line is orthogonal to a plane, its direction vector is:",
    options: ["Parallel to the plane's normal vector", "Perpendicular to the plane's normal vector", "Zero"],
    answer: "A",
    explanation: "A line orthogonal to a plane pierces it straight through, perfectly aligning with the normal vector.",
  },
  {
    prompt: "The line $\\mathbf{r}(t) = (3, -1, 2) + t(0, 0, 0)$ represents:",
    options: ["A single point, not a line", "The origin", "A line parallel to all axes"],
    answer: "A",
    explanation: "A valid line requires a nonzero direction vector. A zero direction vector just stays at the starting point.",
  },
  {
    prompt: "If $\\dfrac{x-1}{2} = \\dfrac{y+1}{3}$, and $z=5$, the direction vector is:",
    options: ["$(2, 3, 0)$", "$(2, 3, 5)$", "$(1, -1, 5)$"],
    answer: "A",
    explanation: "$z=5$ means the $z$-coordinate never changes, so the $z$-component of the direction is zero.",
  },
  {
    prompt: "Does the line $\\mathbf{r}(t) = (t, t, t)$ pass through the origin?",
    options: ["Yes, at $t=0$", "No", "Yes, at $t=1$"],
    answer: "A",
    explanation: "Setting $t=0$ gives the point $(0,0,0)$.",
  },
  {
    prompt: "The symmetric equations can be thought of as:",
    options: ["Isolating the parameter $t$ in the parametric equations", "Taking the cross product", "Integrating the position function"],
    answer: "A",
    explanation: "Solving $x = x_0 + at$ for $t$ yields $(x-x_0)/a$. Doing this for $y$ and $z$ gives the symmetric form.",
  }
];

export const MV_GEO_SKEW_QUIZ = [
  // Original 8 Questions[cite: 7]
  {
    prompt: "Two lines in 3D are called skew when:",
    options: [
      "They are not parallel and do not intersect",
      "They are perpendicular",
      "They lie in the same plane",
    ],
    answer: "A",
    explanation: "Skew lines don't share a common plane — unlike in 2D, two non-parallel lines in 3D can simply miss each other.",
  },
  {
    prompt: "If $\\mathbf{v}_1\\times\\mathbf{v}_2=\\mathbf{0}$ for two lines, they cannot be skew because:",
    options: [
      "A zero cross product means the direction vectors are parallel",
      "It means the lines intersect at the origin",
      "It means the lines are perpendicular",
    ],
    answer: "A",
    explanation: "The cross product vanishes only when the two directions are parallel (or one is zero) — so the lines are parallel, not skew.",
  },
  {
    prompt: "Line 1 passes through $(0,0,0)$ with $\\mathbf{v}_1=(1,0,0)$; line 2 passes through $(0,1,0)$ with $\\mathbf{v}_2=(0,0,1)$. The shortest distance between them is:",
    options: ["$1$", "$0$", "$\\sqrt2$"],
    answer: "A",
    explanation: "$\\mathbf{v}_1\\times\\mathbf{v}_2=(0,-1,0)$; with $\\mathbf{r}_2-\\mathbf{r}_1=(0,1,0)$, the dot product is $-1$ and $|\\mathbf{v}_1\\times\\mathbf{v}_2|=1$, so $d=|-1|/1=1$.",
  },
  {
    prompt: "If the shortest-distance formula for two non-parallel lines returns $0$, this means:",
    options: [
      "The lines actually intersect",
      "The lines are skew by definition",
      "The formula was applied incorrectly",
    ],
    answer: "A",
    explanation: "Zero distance between non-parallel lines means they share a point — they're not skew at all.",
  },
  {
    prompt: "The shortest connecting segment between two skew lines is:",
    options: [
      "Perpendicular to both lines simultaneously",
      "Parallel to one of the two lines",
      "Always vertical (parallel to the $z$-axis)",
    ],
    answer: "A",
    explanation: "The minimum-distance segment is the unique segment perpendicular to both direction vectors at once.",
  },
  {
    prompt: "Why can't skew lines exist in a 2D plane?",
    options: [
      "Any two non-parallel lines in a plane are forced to intersect",
      "2D lines are always parallel",
      "Skew lines require at least 4 dimensions",
    ],
    answer: "A",
    explanation: "In a plane, two lines either share a common direction (parallel) or must cross somewhere — there's no room to \"miss\" each other as in 3D.",
  },
  {
    prompt: "In $d=\\dfrac{|(\\mathbf{r}_2-\\mathbf{r}_1)\\cdot(\\mathbf{v}_1\\times\\mathbf{v}_2)|}{|\\mathbf{v}_1\\times\\mathbf{v}_2|}$, the vector $\\mathbf{r}_2-\\mathbf{r}_1$ represents:",
    options: [
      "A vector connecting a known point on line 1 to a known point on line 2",
      "The shortest-distance vector itself",
      "The sum of both direction vectors",
    ],
    answer: "A",
    explanation: "It's simply the displacement between one reference point on each line — any pair of points on the respective lines works.",
  },
  {
    prompt: "If you swap which line is \"line 1\" and which is \"line 2\" in the shortest-distance formula, the computed distance:",
    options: [
      "Stays exactly the same",
      "Flips sign",
      "Doubles",
    ],
    answer: "A",
    explanation: "The absolute value in the numerator erases any sign change from swapping the order, so the distance is unaffected.",
  },
  // New 12 Questions
  {
    prompt: "The mixed scalar triple product in the numerator of the skew line formula represents:",
    options: ["The volume of a parallelepiped spanned by the two direction vectors and the displacement vector", "The area of a triangle", "The angle between the lines"],
    answer: "A",
    explanation: "The expression $(\\mathbf{r}_2-\\mathbf{r}_1)\\cdot(\\mathbf{v}_1\\times\\mathbf{v}_2)$ computes the volume of the parallelepiped formed by these three vectors.",
  },
  {
    prompt: "Are the $x$-axis and the line $x=1, z=1$ skew?",
    options: ["Yes", "No, they intersect", "No, they are parallel"],
    answer: "A",
    explanation: "The $x$-axis has direction $(1,0,0)$. The line $x=1, z=1$ (which is parallel to $y$-axis) has direction $(0,1,0)$. They are not parallel, and they never cross ($z=0$ vs $z=1$).",
  },
  {
    prompt: "If the displacement vector $(\\mathbf{r}_2-\\mathbf{r}_1)$ lies perfectly in the plane formed by $\\mathbf{v}_1$ and $\\mathbf{v}_2$, the lines:",
    options: ["Intersect", "Are parallel", "Are perpendicular"],
    answer: "A",
    explanation: "If it lies in the plane of the directions, the scalar triple product is zero, meaning distance is zero, thus they intersect.",
  },
  {
    prompt: "Two lines are $\\mathbf{r}_1 = (1,2,3) + t(1,1,1)$ and $\\mathbf{r}_2 = (2,3,4) + s(-1,-1,-1)$. They are:",
    options: ["Parallel/Identical, not skew", "Skew", "Perpendicular"],
    answer: "A",
    explanation: "The directions are $(1,1,1)$ and $(-1,-1,-1)$, which are proportional. They are parallel.",
  },
  {
    prompt: "The vector $\\mathbf{n} = \\mathbf{v}_1 \\times \\mathbf{v}_2$ is used to:",
    options: ["Find the common perpendicular direction to both lines", "Find the midpoint between the lines", "Determine the speed of intersection"],
    answer: "A",
    explanation: "The cross product of the two direction vectors generates a normal vector orthogonal to both.",
  },
  {
    prompt: "If two planes each contain one of two skew lines and are parallel to each other, the distance between these planes is:",
    options: ["Exactly the shortest distance between the skew lines", "Zero", "Twice the distance"],
    answer: "A",
    explanation: "You can embed skew lines in two parallel planes. The perpendicular gap between these planes equals the shortest distance between the lines.",
  },
  {
    prompt: "Can a pair of skew lines be perpendicular to each other?",
    options: ["Yes, their direction vectors can have a dot product of zero", "No, perpendicular lines must intersect", "No, skew lines cannot form angles"],
    answer: "A",
    explanation: "Skew lines can be orthogonal in their directions (e.g., one goes East/West at $z=0$, one goes North/South at $z=1$).",
  },
  {
    prompt: "What is the distance between the $x$-axis and the line $y=2, z=3$?",
    options: ["$\\sqrt{13}$", "$3$", "$2$"],
    answer: "A",
    explanation: "The distance from the $x$-axis (origin $0,0,0$) to the parallel axis offset by $y=2, z=3$ is $\\sqrt{2^2+3^2} = \\sqrt{13}$.",
  },
  {
    prompt: "If you shift one skew line purely along its own direction vector, the shortest distance to the other skew line:",
    options: ["Remains unchanged", "Increases", "Decreases to zero"],
    answer: "A",
    explanation: "Sliding a line along itself doesn't change the line, so the geometric configuration and distance remain identical.",
  },
  {
    prompt: "The skew lines distance formula fails (gives division by zero) if:",
    options: ["The lines are parallel", "The lines intersect", "The displacement vector is zero"],
    answer: "A",
    explanation: "If the lines are parallel, $\\mathbf{v}_1 \\times \\mathbf{v}_2 = \\mathbf{0}$, causing division by zero. Parallel lines require a different distance formula.",
  },
  {
    prompt: "If three lines are mutually skew, what is the maximum number of intersections they share?",
    options: ["$0$", "$1$", "$3$"],
    answer: "A",
    explanation: "By definition, skew lines do not intersect. If all three are mutually skew pairs, none of them intersect.",
  },
  {
    prompt: "To physically visualize the shortest distance between skew lines, think of:",
    options: ["A supporting pillar constructed perpendicular between two non-intersecting bridge cables", "A flat sheet of paper", "A spiral staircase"],
    answer: "A",
    explanation: "The shortest segment is structurally exactly perpendicular to both non-intersecting lines (like a strut between cables).",
  }
];

export const MV_GEO_QUADRIC_QUIZ = [
  // Original 8 Questions[cite: 7]
  {
    prompt: "The surface $x^2+y^2+z^2=1$ is a special case of which quadric?",
    options: ["Ellipsoid (a sphere is an ellipsoid with $a=b=c$)", "Elliptic paraboloid", "Elliptic cone"],
    answer: "A",
    explanation: "Comparing to $x^2/a^2+y^2/b^2+z^2/c^2=1$ with $a=b=c=1$ gives exactly the unit sphere.",
  },
  {
    prompt: "The surface $z=x^2+y^2$ is a(n):",
    options: ["Elliptic (circular) paraboloid", "Hyperbolic paraboloid", "Hyperboloid of one sheet"],
    answer: "A",
    explanation: "Horizontal traces ($z=c>0$) are circles that grow with $c$ — the classic \"bowl\" shape.",
  },
  {
    prompt: "The surface $z=x^2-y^2$ is a(n):",
    options: ["Hyperbolic paraboloid (saddle)", "Elliptic paraboloid", "Ellipsoid"],
    answer: "A",
    explanation: "Traces in $x$ are upward parabolas, traces in $y$ are downward parabolas — the surface curves up one way and down the other, forming a saddle.",
  },
  {
    prompt: "The surface $x^2+y^2-z^2=1$ is a(n):",
    options: ["Hyperboloid of one sheet", "Hyperboloid of two sheets", "Elliptic cone"],
    answer: "A",
    explanation: "One negative term on the left with $=1$ on the right (positive constant) gives a single connected \"waist\" surface — one sheet.",
  },
  {
    prompt: "The surface $z^2-x^2-y^2=1$ is a(n):",
    options: ["Hyperboloid of two sheets", "Hyperboloid of one sheet", "Elliptic paraboloid"],
    answer: "A",
    explanation: "Only one positive squared term equals $1$; the surface splits into two separate pieces (e.g. $z\\ge1$ and $z\\le-1$) — two sheets.",
  },
  {
    prompt: "The surface $x^2+y^2=z^2$ is a(n):",
    options: ["Elliptic cone", "Hyperboloid of one sheet", "Ellipsoid"],
    answer: "A",
    explanation: "Setting the sum-of-squares equal to $0$ on the right (after moving $z^2$ over) is the hallmark of a cone through the origin.",
  },
  {
    prompt: "How does a hyperboloid of one sheet differ from a hyperboloid of two sheets, geometrically?",
    options: [
      "One sheet is a single connected surface; two sheets is split into two disconnected pieces",
      "One sheet has no curvature; two sheets is flat",
      "They are actually the same surface under a different name",
    ],
    answer: "A",
    explanation: "The sign pattern in the equation determines whether the surface stays in one connected piece or breaks into two separated pieces.",
  },
  {
    prompt: "Cross-sections of an ellipsoid taken parallel to any coordinate plane are always:",
    options: ["Ellipses (circles in the special case of a sphere)", "Parabolas", "Straight lines"],
    answer: "A",
    explanation: "Fixing one variable in $x^2/a^2+y^2/b^2+z^2/c^2=1$ leaves a two-variable equation of the same ellipse-family form.",
  },
  // New 12 Questions
  {
    prompt: "Identify the surface: $x^2 + 2y^2 = 4$.",
    options: ["Elliptic cylinder", "Ellipsoid", "Hyperboloid"],
    answer: "A",
    explanation: "The variable $z$ is missing, meaning the 2D ellipse $x^2+2y^2=4$ is stretched infinitely along the $z$-axis.",
  },
  {
    prompt: "The surface $y = z^2$ describes:",
    options: ["Parabolic cylinder", "Elliptic paraboloid", "Hyperbolic paraboloid"],
    answer: "A",
    explanation: "Missing $x$ means it's a cylinder. The trace in the $yz$-plane is a parabola.",
  },
  {
    prompt: "What is the trace of the hyperbolic paraboloid $z = y^2 - x^2$ in the $xy$-plane ($z=0$)?",
    options: ["A pair of intersecting lines $y = \\pm x$", "An ellipse", "A hyperbola"],
    answer: "A",
    explanation: "Set $z=0 \\Rightarrow y^2 - x^2 = 0 \\Rightarrow y^2 = x^2 \\Rightarrow y = \\pm x$.",
  },
  {
    prompt: "Which quadric surface is formed by revolving a hyperbola around its conjugate axis?",
    options: ["Hyperboloid of one sheet", "Hyperboloid of two sheets", "Cone"],
    answer: "A",
    explanation: "Revolving a hyperbola around the axis that passes between its branches generates a single connected \"waist\" (one sheet).",
  },
  {
    prompt: "What surface is $4x^2 - y^2 + 4z^2 = 0$?",
    options: ["Elliptic cone", "Hyperboloid of one sheet", "Point (origin)"],
    answer: "A",
    explanation: "Rearranging gives $y^2 = 4x^2 + 4z^2$. Two positive squared terms equaling a third squared term indicates an elliptic cone.",
  },
  {
    prompt: "Classify $x^2 + y^2 - z^2 = -1$.",
    options: ["Hyperboloid of two sheets", "Hyperboloid of one sheet", "Ellipsoid"],
    answer: "A",
    explanation: "Multiplying by $-1$ yields $z^2 - x^2 - y^2 = 1$. One positive term, two negative terms $\\Rightarrow$ two sheets.",
  },
  {
    prompt: "The traces of $z = x^2 + y^2$ parallel to the $xz$-plane are:",
    options: ["Parabolas", "Circles", "Hyperbolas"],
    answer: "A",
    explanation: "Parallel to $xz$ means setting $y=c$. The equation becomes $z = x^2 + c^2$, which is an upward-opening parabola.",
  },
  {
    prompt: "A Pringles potato chip is roughly shaped like a:",
    options: ["Hyperbolic paraboloid", "Elliptic paraboloid", "Ellipsoid"],
    answer: "A",
    explanation: "The classic saddle shape (curving up along one axis and down along the other) is a hyperbolic paraboloid.",
  },
  {
    prompt: "The quadric surface $x^2/4 + y^2/9 + z^2/16 = 1$ is bounded within:",
    options: ["$-2 \\le x \\le 2$, $-3 \\le y \\le 3$, $-4 \\le z \\le 4$", "It is unbounded", "Only bounded in $z$"],
    answer: "A",
    explanation: "For the sum of positive terms to be 1, none of the individual terms can exceed 1. Thus $x^2/4 \\le 1 \\Rightarrow |x| \\le 2$, etc.",
  },
  {
    prompt: "Identify the surface: $x^2 - y^2 - z^2 = 0$.",
    options: ["Elliptic cone opening along the $x$-axis", "Elliptic cone opening along the $z$-axis", "Hyperboloid"],
    answer: "A",
    explanation: "Rewrite as $x^2 = y^2 + z^2$. The axis of the cone is the axis whose variable stands alone with the opposite sign (the $x$-axis).",
  },
  {
    prompt: "Which quadric surface has NO vertices (i.e., doesn't intersect its central axis)?",
    options: ["Hyperboloid of one sheet", "Hyperboloid of two sheets", "Ellipsoid"],
    answer: "A",
    explanation: "For $x^2+y^2-z^2=1$, the $z$-axis requires $x=0, y=0$, which yields $-z^2=1$, an impossible condition, so it never hits the $z$-axis.",
  },
  {
    prompt: "Classify $x^2/9 - y^2/4 = 1$.",
    options: ["Hyperbolic cylinder", "Hyperbolic paraboloid", "Hyperboloid of two sheets"],
    answer: "A",
    explanation: "The variable $z$ is missing, so it's a cylinder built from the 2D hyperbola $x^2/9 - y^2/4 = 1$.",
  }
];