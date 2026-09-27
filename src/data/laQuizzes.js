/** Module A topic checkpoints: 20 questions per topic; answers use GuideMcqSection letters. */

export const LA_A_LU_QUIZ = [
  {
    "prompt": "In a Doolittle factorization $A=LU$, what normalization is imposed on $L$?",
    "options": [
      "Its diagonal entries are one",
      "Its diagonal entries are zero",
      "It is upper triangular",
      "It equals $U^T$"
    ],
    "answer": "A",
    "explanation": "Unit diagonal entries in the lower-triangular factor remove the diagonal scaling ambiguity."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}2&3\\\\4&7\\end{pmatrix}$, which multiplier eliminates $a_{21}$?",
    "options": [
      "$1/2$",
      "$2$",
      "$3$",
      "$4$"
    ],
    "answer": "B",
    "explanation": "The multiplier is $m_{21}=a_{21}/a_{11}=4/2=2$; use $R_2\\leftarrow R_2-2R_1$."
  },
  {
    "prompt": "After eliminating $a_{21}$ in $A=\\begin{pmatrix}2&3\\\\4&7\\end{pmatrix}$, what is $u_{22}$?",
    "options": [
      "$7$",
      "$13$",
      "$1$",
      "$-1$"
    ],
    "answer": "C",
    "explanation": "Subtract twice the first row: $7-2(3)=1$."
  },
  {
    "prompt": "If $PA=LU$, which pair of triangular systems solves $Ax=b$?",
    "options": [
      "$Ly=b$, then $Ux=Pb$",
      "$Uy=Pb$, then $Lx=y$",
      "$Lx=P^{-1}b$, then $Uy=x$",
      "$Ly=Pb$, then $Ux=y$"
    ],
    "answer": "D",
    "explanation": "Multiply the original system by $P$ to get $LUx=Pb$."
  },
  {
    "prompt": "Why can an invertible matrix require a row swap before unpivoted elimination?",
    "options": [
      "Its current diagonal pivot can be zero",
      "Its determinant must then be zero",
      "Every entry in the pivot column must be zero",
      "Its inverse cannot exist"
    ],
    "answer": "A",
    "explanation": "Invertibility does not require every leading pivot in the original row order to be nonzero."
  },
  {
    "prompt": "For $L=\\begin{pmatrix}1&0\\\\3&1\\end{pmatrix}$ and $b=(2,9)^T$, solve $Ly=b$.",
    "options": [
      "$(2,9)^T$",
      "$(2,3)^T$",
      "$(3,2)^T$",
      "$(2,15)^T$"
    ],
    "answer": "B",
    "explanation": "Forward substitution gives $y_1=2$ and $y_2=9-3(2)=3$."
  },
  {
    "prompt": "For $U=\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}$ and $y=(5,9)^T$, solve $Ux=y$.",
    "options": [
      "$(3,1)^T$",
      "$(5,3)^T$",
      "$(1,3)^T$",
      "$(2,1)^T$"
    ],
    "answer": "C",
    "explanation": "Back substitution gives $x_2=3$ and $x_1=(5-3)/2=1$."
  },
  {
    "prompt": "What is the usual dense arithmetic cost of factorizing an $n\\times n$ matrix by Gaussian elimination?",
    "options": [
      "$O(n)$",
      "$O(\\log n)$",
      "$O(1)$",
      "$O(n^3)$"
    ],
    "answer": "D",
    "explanation": "Elimination updates successively smaller trailing submatrices, giving cubic leading cost."
  },
  {
    "prompt": "Once $L,U,P$ are known, what is the usual cost of solving for one new right-hand side?",
    "options": [
      "$O(n^2)$",
      "$O(n^3)$",
      "$O(2^n)$",
      "$O(n^4)$"
    ],
    "answer": "A",
    "explanation": "Two triangular solves each require a quadratic number of scalar operations."
  },
  {
    "prompt": "If $A=LU$ with unit-diagonal $L$ and $U$ diagonal entries $2,-3,4$, what is $\\det A$?",
    "options": [
      "$24$",
      "$-24$",
      "$3$",
      "$-5$"
    ],
    "answer": "B",
    "explanation": "$\\det L=1$, so $\\det A=\\det U=2(-3)4=-24$."
  },
  {
    "prompt": "If $PA=LU$, $P$ is one row swap, and $\\det U=-6$ with unit-diagonal $L$, find $\\det A$.",
    "options": [
      "$-6$",
      "$1/6$",
      "$6$",
      "$0$"
    ],
    "answer": "C",
    "explanation": "$\\det(P)\\det(A)=\\det(U)$ and $\\det P=-1$, so $\\det A=6$."
  },
  {
    "prompt": "Partial pivoting normally chooses which row for the next pivot?",
    "options": [
      "The row with the smallest absolute pivot-column entry",
      "The row with the largest row sum regardless of column",
      "The first row of the original matrix at every step",
      "A remaining row with maximal absolute entry in the current column"
    ],
    "answer": "D",
    "explanation": "A large available pivot limits the magnitude of elimination multipliers in that column."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}0&1\\\\2&3\\end{pmatrix}$, after swapping its rows, which $U$ is valid with $L=I$?",
    "options": [
      "$\\begin{pmatrix}2&3\\\\0&1\\end{pmatrix}$",
      "$\\begin{pmatrix}0&1\\\\2&3\\end{pmatrix}$",
      "$\\begin{pmatrix}1&0\\\\3&2\\end{pmatrix}$",
      "$\\begin{pmatrix}2&0\\\\3&1\\end{pmatrix}$"
    ],
    "answer": "A",
    "explanation": "The swapped matrix $PA$ is already upper triangular."
  },
  {
    "prompt": "When swapping rows during a later pivoting step, what must happen to previously stored multipliers?",
    "options": [
      "The entire $L$ must be discarded",
      "The same rows of the completed columns of $L$ must be swapped",
      "Only the diagonal of $U$ must be swapped",
      "All multipliers must be negated"
    ],
    "answer": "B",
    "explanation": "Earlier elimination history must follow the new row permutation; only already completed columns of $L$ are exchanged."
  },
  {
    "prompt": "Which condition guarantees ordinary nonsingular LU without pivoting for a square matrix?",
    "options": [
      "The trace is positive",
      "Every entry is positive",
      "Every leading principal minor is nonzero",
      "The matrix has repeated eigenvalues"
    ],
    "answer": "C",
    "explanation": "Nonzero leading principal minors ensure each successive pivot can be formed without a row interchange."
  },
  {
    "prompt": "For nonsingular $A$, why is the factorization with unit-diagonal $L$ unique whenever it exists?",
    "options": [
      "All triangular matrices commute",
      "$L$ must be the identity",
      "Every matrix has orthogonal rows",
      "A matrix that is both unit lower triangular and upper triangular must be $I$"
    ],
    "answer": "D",
    "explanation": "Comparing two factorizations gives $L_2^{-1}L_1=U_2U_1^{-1}$; triangular structure and the unit diagonal force identity."
  },
  {
    "prompt": "What is the lower-triangular entry $l_{21}$ for $A=\\begin{pmatrix}4&3\\\\6&3\\end{pmatrix}$?",
    "options": [
      "$3/2$",
      "$-3/2$",
      "$2/3$",
      "$6$"
    ],
    "answer": "A",
    "explanation": "The stored multiplier is $6/4=3/2$, not its negative; the row operation subtracts this multiple."
  },
  {
    "prompt": "With $A=\\begin{pmatrix}4&3\\\\6&3\\end{pmatrix}$ and $b=(10,12)^T$, what is $x$?",
    "options": [
      "$(2,1)^T$",
      "$(1,2)^T$",
      "$(1,-2)^T$",
      "$(0,4)^T$"
    ],
    "answer": "B",
    "explanation": "Substitution verifies $4+6=10$ and $6+6=12$; triangular solves give the same result."
  },
  {
    "prompt": "Does successful partial pivoting make every linear system well-conditioned?",
    "options": [
      "Yes; it forces the condition number to one",
      "Yes; it makes the matrix orthogonal",
      "No; conditioning is a property of the problem, separate from the algorithm",
      "No; it always makes the matrix singular"
    ],
    "answer": "C",
    "explanation": "Pivoting addresses numerical stability of elimination; it cannot remove intrinsic sensitivity of $Ax=b$."
  },
  {
    "prompt": "Given a computed $L,U,P$, which residual checks the factorization itself?",
    "options": [
      "$A-L-U$",
      "$P-LU$",
      "$L^TU-I$",
      "$PA-LU$"
    ],
    "answer": "D",
    "explanation": "A correct exact factorization has $PA-LU=0$; a small relative residual is a useful floating-point check."
  }
];

export const LA_A_CHOLESKY_QUIZ = [
  {
    "prompt": "Which class of real matrices admits a Cholesky factorization with positive diagonal entries?",
    "options": [
      "Symmetric positive-definite matrices",
      "All invertible matrices",
      "All symmetric matrices",
      "All matrices with positive trace"
    ],
    "answer": "A",
    "explanation": "Standard Cholesky requires symmetry and $x^TAx>0$ for every nonzero real $x$."
  },
  {
    "prompt": "What is the standard real lower-triangular Cholesky form?",
    "options": [
      "$A=L+L^T$",
      "$A=LL^T$",
      "$A=L^2$ for every lower-triangular $L$",
      "$A=L^TL^{-1}$"
    ],
    "answer": "B",
    "explanation": "The transpose of the lower-triangular factor completes the symmetric product."
  },
  {
    "prompt": "For complex Hermitian positive-definite $A$, which form is correct?",
    "options": [
      "$A=LL^T$ without conjugation",
      "$A=L-L^*$",
      "$A=LL^*$",
      "$A=L^{-1}L^*$"
    ],
    "answer": "C",
    "explanation": "The adjoint $L^*$ is the conjugate transpose; ordinary transpose does not generally suffice."
  },
  {
    "prompt": "If $a_{11}=9$, what is the first positive Cholesky pivot $l_{11}$?",
    "options": [
      "$9$",
      "$81$",
      "$-3$",
      "$3$"
    ],
    "answer": "D",
    "explanation": "$l_{11}=\\sqrt{a_{11}}=3$ under the positive-diagonal convention."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}4&2\\\\2&3\\end{pmatrix}$, what is $l_{21}$?",
    "options": [
      "$1$",
      "$2$",
      "$1/2$",
      "$4$"
    ],
    "answer": "A",
    "explanation": "$l_{11}=2$ and $l_{21}=a_{21}/l_{11}=2/2=1$."
  },
  {
    "prompt": "For the same $A=\\begin{pmatrix}4&2\\\\2&3\\end{pmatrix}$, what is $l_{22}$?",
    "options": [
      "$2$",
      "$\\sqrt2$",
      "$\\sqrt3$",
      "$1$"
    ],
    "answer": "B",
    "explanation": "$l_{22}=\\sqrt{a_{22}-l_{21}^2}=\\sqrt{3-1}=\\sqrt2$."
  },
  {
    "prompt": "Which factor satisfies $A=LL^T$ for $A=\\begin{pmatrix}9&3\\\\3&5\\end{pmatrix}$?",
    "options": [
      "$\\begin{pmatrix}3&0\\\\3&2\\end{pmatrix}$",
      "$\\begin{pmatrix}9&0\\\\1&5\\end{pmatrix}$",
      "$\\begin{pmatrix}3&0\\\\1&2\\end{pmatrix}$",
      "$\\begin{pmatrix}3&1\\\\0&2\\end{pmatrix}$"
    ],
    "answer": "C",
    "explanation": "Multiplication gives diagonal entries $9,1+4=5$ and off-diagonal entries $3$."
  },
  {
    "prompt": "Which matrix is symmetric but fails positive definiteness?",
    "options": [
      "$\\begin{pmatrix}2&0\\\\0&3\\end{pmatrix}$",
      "$\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$",
      "$\\begin{pmatrix}4&2\\\\2&3\\end{pmatrix}$",
      "$\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$"
    ],
    "answer": "D",
    "explanation": "Its eigenvalues are $3,-1$, so one direction has negative quadratic form."
  },
  {
    "prompt": "For a real symmetric $2\\times2$ matrix, which test ensures positive definiteness?",
    "options": [
      "$a_{11}>0$ and $\\det A>0$",
      "$\\operatorname{tr}A>0$ alone",
      "$\\det A<0$",
      "Both off-diagonal entries are positive"
    ],
    "answer": "A",
    "explanation": "This is the two-dimensional case of Sylvester’s criterion."
  },
  {
    "prompt": "If $A=LL^T$, which solve order is correct for $Ax=b$?",
    "options": [
      "Solve $L^Ty=b$, then $Lx=y$",
      "Solve $Ly=b$, then $L^Tx=y$",
      "Set $x=Lb$",
      "Set $x=L^Tb$"
    ],
    "answer": "B",
    "explanation": "Substitute $y=L^Tx$ into $LL^Tx=b$."
  },
  {
    "prompt": "For Cholesky diagonal entries $2,3,4$, what is $\\det A$?",
    "options": [
      "$24$",
      "$48$",
      "$576$",
      "$9$"
    ],
    "answer": "C",
    "explanation": "$\\det A=(\\det L)^2=(2\\cdot3\\cdot4)^2=576$."
  },
  {
    "prompt": "What does a negative radicand mean in exact-arithmetic standard Cholesky?",
    "options": [
      "The matrix is automatically orthogonal",
      "The square root should be replaced by its absolute value",
      "The negative sign can always be ignored",
      "The matrix does not satisfy the positive-definite assumptions at that step"
    ],
    "answer": "D",
    "explanation": "Positive definiteness guarantees positive Schur-complement pivots; a negative one signals failure of the assumptions."
  },
  {
    "prompt": "Why is Cholesky preferable to general LU for an SPD dense matrix?",
    "options": [
      "It exploits symmetry and needs roughly half the factorization work",
      "It removes all rounding error",
      "It changes the eigenvalues to one",
      "It works only for diagonal matrices"
    ],
    "answer": "A",
    "explanation": "Cholesky costs about $n^3/3$ operations versus about $2n^3/3$ for general LU."
  },
  {
    "prompt": "If $A$ is SPD and $c>0$, how is the Cholesky factor of $cA$ obtained from $L$?",
    "options": [
      "$cL$",
      "$\\sqrt c\\,L$",
      "$L/c$",
      "$L+cI$"
    ],
    "answer": "B",
    "explanation": "$(\\sqrt cL)(\\sqrt cL)^T=cLL^T=cA$."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}1&1\\\\1&1\\end{pmatrix}$, which statement is correct?",
    "options": [
      "It is positive definite",
      "It is nonsymmetric",
      "It is positive semidefinite, so the strictly positive-diagonal algorithm reaches a zero pivot",
      "Its determinant is negative"
    ],
    "answer": "C",
    "explanation": "The rank is one; after $l_{11}=l_{21}=1$, the second radicand is zero."
  },
  {
    "prompt": "What distinguishes $LDL^T$ from Cholesky $LL^T$?",
    "options": [
      "It requires $L$ to be upper triangular",
      "It always requires complex arithmetic",
      "It gives $D=I$ for every matrix",
      "It separates a diagonal factor and can avoid square roots"
    ],
    "answer": "D",
    "explanation": "$L$ is often unit lower triangular and $D$ stores pivots; indefinite cases require suitable pivoting or block variants."
  },
  {
    "prompt": "If $A$ is SPD, which property must every principal submatrix have?",
    "options": [
      "It is also SPD",
      "It is always the identity",
      "It has determinant zero",
      "It is necessarily diagonal"
    ],
    "answer": "A",
    "explanation": "Extend any nonzero subvector by zeros to apply the positive quadratic-form condition for $A$."
  },
  {
    "prompt": "How can $\\log\\det A$ be computed from a positive-diagonal Cholesky factor?",
    "options": [
      "$\\sum_i l_{ii}$",
      "$2\\sum_i\\log l_{ii}$",
      "$\\log\\sum_i l_{ii}$",
      "$\\sum_i\\log a_{ii}$ in every case"
    ],
    "answer": "B",
    "explanation": "Since $\\det A=\\prod_i l_{ii}^2$, taking logarithms gives the stated sum."
  },
  {
    "prompt": "What extra numerical concern arises when Cholesky is applied to $A^TA$ for a full-column-rank matrix $A$?",
    "options": [
      "It makes every pivot zero",
      "It guarantees exact least-squares coefficients",
      "Forming normal equations squares the 2-norm condition number",
      "It makes $A^TA$ nonsymmetric"
    ],
    "answer": "C",
    "explanation": "$\\kappa_2(A^TA)=\\kappa_2(A)^2$; QR or SVD may be safer for ill-conditioned least squares."
  },
  {
    "prompt": "For $L=\\begin{pmatrix}2&0\\\\1&1\\end{pmatrix}$ and $b=(6,4)^T$, solve $LL^Tx=b$.",
    "options": [
      "$(2,1)^T$",
      "$(1,2)^T$",
      "$(3,1)^T$",
      "$(1,1)^T$"
    ],
    "answer": "D",
    "explanation": "Solve $Ly=b$ to get $y=(3,1)^T$, then $L^Tx=y$ to get $x=(1,1)^T$."
  }
];

export const LA_A_JORDAN_QUIZ = [
  {
    "prompt": "Over which field does every square matrix have a Jordan normal form?",
    "options": [
      "$\\mathbb C$",
      "$\\mathbb R$ without any restriction on eigenvalues",
      "Only the integers",
      "Only the positive real numbers"
    ],
    "answer": "A",
    "explanation": "The characteristic polynomial splits over the complex numbers; over another field splitting is required."
  },
  {
    "prompt": "What entries appear directly above the diagonal in a standard Jordan block?",
    "options": [
      "The eigenvalue repeated",
      "Ones",
      "Zeros for every block",
      "Arbitrary negative integers"
    ],
    "answer": "B",
    "explanation": "A block has $\\lambda$ on the diagonal, ones on the first superdiagonal, and zeros elsewhere."
  },
  {
    "prompt": "For $J=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$, what is the geometric multiplicity of eigenvalue $2$?",
    "options": [
      "$2$",
      "$0$",
      "$1$",
      "$4$"
    ],
    "answer": "C",
    "explanation": "$J-2I$ has a one-dimensional nullspace spanned by $(1,0)^T$."
  },
  {
    "prompt": "For a chain $v_1,v_2$ at eigenvalue $\\lambda$, which relations hold?",
    "options": [
      "$(A-\\lambda I)v_1=v_2$ and $(A-\\lambda I)v_2=v_2$",
      "$Av_1=0$ and $Av_2=0$ for every $\\lambda$",
      "$v_1=v_2$",
      "$(A-\\lambda I)v_1=0$ and $(A-\\lambda I)v_2=v_1$"
    ],
    "answer": "D",
    "explanation": "The first vector is an eigenvector and each later vector maps to the preceding one under $A-\\lambda I$."
  },
  {
    "prompt": "How should a length-three chain be ordered in the columns of $P$ for superdiagonal-one Jordan blocks?",
    "options": [
      "$v_1,v_2,v_3$, with $(A-\\lambda I)v_{j+1}=v_j$",
      "$v_3,v_2,v_1$ with the same chain convention",
      "Any order gives exactly the same block",
      "Repeat $v_1$ three times"
    ],
    "answer": "A",
    "explanation": "This order makes $AP=PJ$ with ones above the diagonal."
  },
  {
    "prompt": "Which equality is a convenient direct verification of a proposed Jordan basis?",
    "options": [
      "$A+P=J$",
      "$AP=PJ$ with $P$ invertible",
      "$P^TP=0$",
      "$AP=JP$ for every choice of $P$"
    ],
    "answer": "B",
    "explanation": "The relation is equivalent to $A=PJP^{-1}$ when $P$ is invertible."
  },
  {
    "prompt": "What is $J^2$ for $J=\\begin{pmatrix}3&1\\\\0&3\\end{pmatrix}$?",
    "options": [
      "$\\begin{pmatrix}9&1\\\\0&9\\end{pmatrix}$",
      "$\\begin{pmatrix}6&2\\\\0&6\\end{pmatrix}$",
      "$\\begin{pmatrix}9&6\\\\0&9\\end{pmatrix}$",
      "$\\begin{pmatrix}9&3\\\\0&9\\end{pmatrix}$"
    ],
    "answer": "C",
    "explanation": "Write $J=3I+N$ with $N^2=0$; then $J^2=9I+6N$."
  },
  {
    "prompt": "For a block $J_m(\\lambda)=\\lambda I+N$, which property of $N$ is correct?",
    "options": [
      "$N=I$",
      "$N^m=I$",
      "$N$ is invertible",
      "$N^m=0$"
    ],
    "answer": "D",
    "explanation": "The shift matrix becomes zero after $m$ powers and is nilpotent of index $m$."
  },
  {
    "prompt": "How many Jordan blocks correspond to an eigenvalue $\\lambda$?",
    "options": [
      "$\\dim\\ker(A-\\lambda I)$",
      "$\\operatorname{tr}A$",
      "$\\det A$",
      "Always exactly one"
    ],
    "answer": "A",
    "explanation": "Each block contributes exactly one independent eigenvector for that eigenvalue."
  },
  {
    "prompt": "What does the sum of block sizes for $\\lambda$ equal?",
    "options": [
      "Its geometric multiplicity in every case",
      "Its algebraic multiplicity",
      "The number of distinct eigenvalues",
      "The rank of $A$"
    ],
    "answer": "B",
    "explanation": "Each block contributes its size to the exponent of $(t-\\lambda)$ in the characteristic polynomial."
  },
  {
    "prompt": "When is a complex square matrix diagonalizable in terms of its Jordan blocks?",
    "options": [
      "Every block has the same eigenvalue",
      "At least one block has size two",
      "Every block has size one",
      "Every eigenvalue is nonzero"
    ],
    "answer": "C",
    "explanation": "Blocks of size one form a diagonal matrix, and larger blocks represent missing eigenvectors."
  },
  {
    "prompt": "The characteristic polynomial is $(t-4)^5$ and there are two Jordan blocks. Which sizes are possible?",
    "options": [
      "$2,2$",
      "$5$ alone",
      "$1,1,1,1,1$",
      "$3,2$"
    ],
    "answer": "D",
    "explanation": "The sizes must sum to five and there must be exactly two blocks; $3+2$ meets both conditions."
  },
  {
    "prompt": "If a nilpotent $5\\times5$ matrix has nullities $2,4,5$ for $N,N^2,N^3$, what are its block sizes?",
    "options": [
      "$3,2$",
      "$4,1$",
      "$5$",
      "$2,2,1$"
    ],
    "answer": "A",
    "explanation": "Nullity increments $2,2,1$ count blocks of sizes at least $1,2,3$, giving one block of size three and one of size two."
  },
  {
    "prompt": "For blocks $J_3(2)$ and $J_2(2)$, what is the minimal polynomial?",
    "options": [
      "$(t-2)^5$",
      "$(t-2)^3$",
      "$(t-2)^2$",
      "$t-2$"
    ],
    "answer": "B",
    "explanation": "The exponent in the minimal polynomial is the largest block size for that eigenvalue."
  },
  {
    "prompt": "What is the geometric multiplicity of $2$ for $A=\\operatorname{diag}(J_2(2),J_1(2))$?",
    "options": [
      "$3$",
      "$1$",
      "$2$",
      "$0$"
    ],
    "answer": "C",
    "explanation": "There are two blocks, hence two independent eigenvectors for eigenvalue two."
  },
  {
    "prompt": "For $J=\\begin{pmatrix}2&1\\\\0&2\\end{pmatrix}$, what is entry $(1,2)$ of $J^4$?",
    "options": [
      "$16$",
      "$8$",
      "$4$",
      "$32$"
    ],
    "answer": "D",
    "explanation": "The binomial expansion gives $J^k=2^kI+k2^{k-1}N$, so the entry is $4\\cdot2^3=32$."
  },
  {
    "prompt": "For $N=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$, what is $e^{tN}$?",
    "options": [
      "$I+tN$",
      "$tI+N$",
      "$e^tI$",
      "$I+tN+t^2I$"
    ],
    "answer": "A",
    "explanation": "The exponential series terminates because $N^2=0$."
  },
  {
    "prompt": "Can a real $90^\\circ$ rotation matrix have a real Jordan form made only of real scalar-eigenvalue Jordan blocks?",
    "options": [
      "Yes; its eigenvalue is zero",
      "No; its eigenvalues are $i$ and $-i$",
      "Yes; it is the identity",
      "No; it is singular"
    ],
    "answer": "B",
    "explanation": "Its polynomial $t^2+1$ does not split over the real field; complex Jordan form or real canonical blocks are needed."
  },
  {
    "prompt": "Why is exact Jordan structure a poor default tool for noisy numerical data?",
    "options": [
      "It always has fewer entries than a diagonal matrix",
      "It requires every matrix entry to be positive",
      "Tiny perturbations can change block sizes or split repeated eigenvalues",
      "It cannot describe exact matrices"
    ],
    "answer": "C",
    "explanation": "Jordan block structure is sensitive to perturbations; Schur decompositions are generally preferred numerically."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}2&3\\\\0&2\\end{pmatrix}$ and $v_1=(1,0)^T$, which vector can be $v_2$ in a chain?",
    "options": [
      "$(0,3)^T$",
      "$(1,0)^T$",
      "$(0,1)^T$",
      "$(0,1/3)^T$"
    ],
    "answer": "D",
    "explanation": "$(A-2I)(0,1/3)^T=(1,0)^T=v_1$."
  }
];

export const LA_A_NORMS_QUIZ = [
  {
    "prompt": "Which property distinguishes a norm from a function that vanishes at some nonzero vector?",
    "options": [
      "$\\|x\\|=0$ if and only if $x=0$",
      "$\\|x\\|=1$ for every $x$",
      "$\\|x+y\\|=\\|x\\|+\\|y\\|$ always",
      "$\\|-x\\|=-\\|x\\|$"
    ],
    "answer": "A",
    "explanation": "Positive definiteness of a norm requires only the zero vector to have zero norm."
  },
  {
    "prompt": "For $x=(3,-4)^T$, what is $\\|x\\|_1$?",
    "options": [
      "$5$",
      "$7$",
      "$4$",
      "$-1$"
    ],
    "answer": "B",
    "explanation": "Add absolute entries: $3+4=7$."
  },
  {
    "prompt": "For $x=(3,-4)^T$, what is $\\|x\\|_2$?",
    "options": [
      "$7$",
      "$25$",
      "$5$",
      "$4$"
    ],
    "answer": "C",
    "explanation": "Euclidean length is $\\sqrt{3^2+(-4)^2}=5$."
  },
  {
    "prompt": "For $x=(2,-5,1)^T$, what is $\\|x\\|_\\infty$?",
    "options": [
      "$8$",
      "$\\sqrt{30}$",
      "$-5$",
      "$5$"
    ],
    "answer": "D",
    "explanation": "The infinity norm is the largest absolute component."
  },
  {
    "prompt": "What is the induced matrix norm associated with a chosen vector norm?",
    "options": [
      "$\\max_{x\\ne0}\\|Ax\\|/\\|x\\|$",
      "$\\sum_i a_{ii}$",
      "$\\det A$",
      "The smallest entry of $A$"
    ],
    "answer": "A",
    "explanation": "It measures maximum relative vector stretch in that norm."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}1&-2\\\\3&4\\end{pmatrix}$, what is $\\|A\\|_1$?",
    "options": [
      "$7$",
      "$6$",
      "$10$",
      "$4$"
    ],
    "answer": "B",
    "explanation": "Absolute column sums are $4$ and $6$; take their maximum."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}1&-2\\\\3&4\\end{pmatrix}$, what is $\\|A\\|_\\infty$?",
    "options": [
      "$6$",
      "$4$",
      "$7$",
      "$10$"
    ],
    "answer": "C",
    "explanation": "Absolute row sums are $3$ and $7$; take their maximum."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}1&-2\\\\3&4\\end{pmatrix}$, what is $\\|A\\|_F$?",
    "options": [
      "$30$",
      "$10$",
      "$\\sqrt{10}$",
      "$\\sqrt{30}$"
    ],
    "answer": "D",
    "explanation": "The squared Frobenius norm is $1+4+9+16=30$."
  },
  {
    "prompt": "Which singular value equals the induced matrix 2-norm?",
    "options": [
      "The largest singular value",
      "The smallest singular value",
      "The sum of singular values",
      "The product of singular values"
    ],
    "answer": "A",
    "explanation": "The spectral norm measures maximum Euclidean stretch."
  },
  {
    "prompt": "For invertible $A$, which formula defines $\\kappa_2(A)$?",
    "options": [
      "$\\|A\\|_2+\\|A^{-1}\\|_2$",
      "$\\|A\\|_2\\|A^{-1}\\|_2$",
      "$\\det A$",
      "$\\operatorname{tr}A$"
    ],
    "answer": "B",
    "explanation": "The product equals $\\sigma_{\\max}/\\sigma_{\\min}$."
  },
  {
    "prompt": "Find $\\kappa_2(\\operatorname{diag}(8,2))$.",
    "options": [
      "$16$",
      "$10$",
      "$4$",
      "$1/4$"
    ],
    "answer": "C",
    "explanation": "The largest and smallest singular values are eight and two."
  },
  {
    "prompt": "If $c\\ne0$, how does $\\kappa_2(cA)$ compare with $\\kappa_2(A)$?",
    "options": [
      "It is multiplied by $c^2$",
      "It is divided by $c$",
      "It becomes one",
      "They are equal"
    ],
    "answer": "D",
    "explanation": "Scaling multiplies singular values by $|c|$, leaving their ratio unchanged."
  },
  {
    "prompt": "What is the 2-norm condition number of a square orthogonal matrix?",
    "options": [
      "$1$",
      "$0$",
      "Its dimension",
      "Its determinant"
    ],
    "answer": "A",
    "explanation": "All singular values of an orthogonal matrix equal one."
  },
  {
    "prompt": "A nonsingular matrix has a tiny determinant. What can be concluded from that fact alone about conditioning?",
    "options": [
      "It must be ill-conditioned",
      "A large condition number does not follow without further information",
      "It must be singular",
      "Its condition number is negative"
    ],
    "answer": "B",
    "explanation": "A small scalar multiple of identity has tiny determinant but condition number one."
  },
  {
    "prompt": "For fixed nonsingular $A$ and nonzero $b$, what bound holds when only $b$ is perturbed?",
    "options": [
      "Relative solution error always equals relative data error",
      "$\\delta x=0$ for every perturbation",
      "$\\|\\delta x\\|/\\|x\\|\\le\\kappa(A)\\|\\delta b\\|/\\|b\\|$",
      "Relative error is always exactly $\\kappa(A)$"
    ],
    "answer": "C",
    "explanation": "Combine $\\delta x=A^{-1}\\delta b$ with $\\|b\\|=\\|Ax\\|\\le\\|A\\|\\|x\\|$ in the compatible induced norm."
  },
  {
    "prompt": "Why does a small relative residual not always imply a small relative solution error?",
    "options": [
      "Residual and error always have identical values",
      "The residual ignores $A$ entirely",
      "A small residual proves the matrix is orthogonal",
      "An ill-conditioned matrix can amplify the residual into a large error"
    ],
    "answer": "D",
    "explanation": "$x-\\hat x=A^{-1}(b-A\\hat x)$; a condition-number bound is needed for relative errors."
  },
  {
    "prompt": "Which inequality is submultiplicativity of an induced matrix norm?",
    "options": [
      "$\\|AB\\|\\le\\|A\\|\\|B\\|$",
      "$\\|AB\\|\\ge\\|A\\|+\\|B\\|$",
      "$\\|AB\\|=\\|A\\|+\\|B\\|$ always",
      "$\\|AB\\|=0$ always"
    ],
    "answer": "A",
    "explanation": "Apply the maximum-stretch bounds successively to $B$ and $A$."
  },
  {
    "prompt": "For rank-$r$ nonzero $A$, which relationship holds?",
    "options": [
      "$\\|A\\|_F\\le\\|A\\|_2/\\sqrt r$",
      "$\\|A\\|_2\\le\\|A\\|_F\\le\\sqrt r\\,\\|A\\|_2$",
      "$\\|A\\|_2=\\|A\\|_F$ for every rank",
      "$\\|A\\|_F=r\\|A\\|_2$ always"
    ],
    "answer": "B",
    "explanation": "Frobenius norm is the root sum of squared singular values; at most $r$ are nonzero."
  },
  {
    "prompt": "If full-column-rank $A$ has $\\kappa_2(A)=10$, what is $\\kappa_2(A^TA)$?",
    "options": [
      "$10$",
      "$20$",
      "$100$",
      "$\\sqrt{10}$"
    ],
    "answer": "C",
    "explanation": "Eigenvalues of $A^TA$ are squared singular values, so the condition number is squared."
  },
  {
    "prompt": "For $A=\\operatorname{diag}(1,10^{-4})$, $b=(1,0)^T$, and $\\delta b=(0,10^{-4})^T$, find $\\delta x$.",
    "options": [
      "$(0,10^{-4})^T$",
      "$(1,0)^T$",
      "$(0,10^{-8})^T$",
      "$(0,1)^T$"
    ],
    "answer": "D",
    "explanation": "Multiplication by $A^{-1}=\\operatorname{diag}(1,10^4)$ amplifies the second component to one."
  }
];

// Complex vector spaces, Hermitian matrices and unitary matrices.
export const LA_COMPLEX_VECTOR_SPACES_QUIZ = [
  {
    "prompt": "Which statement correctly describes $\\mathbb C^n$ as a vector space over $\\mathbb C$?",
    "options": [
      "Its vectors have complex entries and its scalars may be complex",
      "Its scalars must be real",
      "Every vector must have a nonzero imaginary part",
      "Its dimension is always 2"
    ],
    "answer": "A",
    "explanation": "Coordinates and scalar coefficients may be complex; real vectors are included as a special case."
  },
  {
    "prompt": "What is the complex conjugate of $3-4i$?",
    "options": [
      "$-3-4i$",
      "$3+4i$",
      "$-3+4i$",
      "$4-3i$"
    ],
    "answer": "B",
    "explanation": "Conjugation changes the sign of the imaginary part."
  },
  {
    "prompt": "What is $|3-4i|^2$?",
    "options": [
      "$5$",
      "$-7$",
      "$25$",
      "$7$"
    ],
    "answer": "C",
    "explanation": "$|z|^2=z\\overline z=3^2+4^2=25$."
  },
  {
    "prompt": "What is the dimension of $\\mathbb C^2$ when regarded as a vector space over $\\mathbb R$?",
    "options": [
      "$2$",
      "$1$",
      "$8$",
      "$4$"
    ],
    "answer": "D",
    "explanation": "Each complex coordinate supplies two independent real coordinates."
  },
  {
    "prompt": "In the vector space $\\mathbb C$ over $\\mathbb C$, how are the vectors $1$ and $i$ related?",
    "options": [
      "They are linearly dependent because $i=i\\cdot1$",
      "They are linearly independent",
      "They form a basis of dimension 2",
      "Neither belongs to the space"
    ],
    "answer": "A",
    "explanation": "The coefficient i is an allowed complex scalar. Over the real field the answer would differ."
  },
  {
    "prompt": "Why is the set $\\mathbb R^2\\subset\\mathbb C^2$ not a complex subspace?",
    "options": [
      "It does not contain zero",
      "It is not closed under multiplication by $i$",
      "It is not closed under vector addition",
      "It contains no basis over $\\mathbb R$"
    ],
    "answer": "B",
    "explanation": "$i(1,0)=(i,0)$ has a nonreal coordinate."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}1&i\\\\2-i&3\\end{pmatrix}$, what is $A^*$?",
    "options": [
      "$\\begin{pmatrix}1&2-i\\\\i&3\\end{pmatrix}$",
      "$\\begin{pmatrix}1&-i\\\\2+i&3\\end{pmatrix}$",
      "$\\begin{pmatrix}1&2+i\\\\-i&3\\end{pmatrix}$",
      "$\\begin{pmatrix}1&i\\\\2-i&3\\end{pmatrix}$"
    ],
    "answer": "C",
    "explanation": "Transpose and conjugate every entry."
  },
  {
    "prompt": "Which identity holds for compatible complex matrices?",
    "options": [
      "$(AB)^*=A^*B^*$",
      "$(AB)^*=B^TA$",
      "$(AB)^*=AB$",
      "$(AB)^*=B^*A^*$"
    ],
    "answer": "D",
    "explanation": "Taking an adjoint reverses product order, just as transpose does."
  },
  {
    "prompt": "Using $\\langle x,y\\rangle=x^*y$, what is $\\langle (1,i)^T,(i,1)^T\\rangle$?",
    "options": [
      "$0$",
      "$2i$",
      "$2$",
      "$-2i$"
    ],
    "answer": "A",
    "explanation": "Conjugating the first vector gives $(1,-i)$, so $i-i=0$."
  },
  {
    "prompt": "What is $\\|(1+i,2i)^T\\|_2$?",
    "options": [
      "$\\sqrt2$",
      "$\\sqrt6$",
      "$6$",
      "$2$"
    ],
    "answer": "B",
    "explanation": "The squared norm is $|1+i|^2+|2i|^2=2+4=6$."
  },
  {
    "prompt": "Under $\\langle x,y\\rangle=x^*y$, how does a scalar in the first slot behave?",
    "options": [
      "$\\langle\\alpha x,y\\rangle=\\alpha\\langle x,y\\rangle$",
      "$\\langle\\alpha x,y\\rangle=\\langle x,y\\rangle$",
      "$\\langle\\alpha x,y\\rangle=\\overline\\alpha\\langle x,y\\rangle$",
      "$\\langle\\alpha x,y\\rangle=|\\alpha|\\langle x,y\\rangle$"
    ],
    "answer": "C",
    "explanation": "The first slot is conjugate-linear; the second is linear."
  },
  {
    "prompt": "For $q=(1,i)^T/\\sqrt2$ and $v=(1,0)^T$, what is the orthogonal projection of $v$ onto $\\operatorname{span}_{\\mathbb C}\\{q\\}$?",
    "options": [
      "$(1/2,-i/2)^T$",
      "$(1,0)^T$",
      "$(0,1)^T$",
      "$(1/2,i/2)^T$"
    ],
    "answer": "D",
    "explanation": "$q^*v=1/\\sqrt2$, hence $q(q^*v)=(1/2,i/2)^T$."
  },
  {
    "prompt": "Which matrix is Hermitian?",
    "options": [
      "$\\begin{pmatrix}2&i\\\\-i&3\\end{pmatrix}$",
      "$\\begin{pmatrix}2&i\\\\i&3\\end{pmatrix}$",
      "$\\begin{pmatrix}i&0\\\\0&1\\end{pmatrix}$",
      "$\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$"
    ],
    "answer": "A",
    "explanation": "The diagonal is real and the off-diagonal entries are conjugate pairs."
  },
  {
    "prompt": "What must be true of every eigenvalue of a Hermitian matrix?",
    "options": [
      "It is positive",
      "It is real",
      "It has modulus one",
      "It is nonzero"
    ],
    "answer": "B",
    "explanation": "Hermitian eigenvalues are real, but may be negative or zero."
  },
  {
    "prompt": "Which statement is guaranteed for every complex matrix $A$?",
    "options": [
      "$A^*A$ is always invertible",
      "$A^*A$ is always unitary",
      "$A^*A$ is Hermitian positive semidefinite",
      "$A^*A$ has only negative eigenvalues"
    ],
    "answer": "C",
    "explanation": "$x^*A^*Ax=\\|Ax\\|_2^2\\ge0$. Positive definiteness additionally requires independent columns."
  },
  {
    "prompt": "For a square complex matrix $U$, which condition defines unitarity?",
    "options": [
      "$U^TU=I$ for every complex $U$",
      "$U=U^*$",
      "$U^2=0$",
      "$U^*U=I$"
    ],
    "answer": "D",
    "explanation": "Its conjugate transpose is its inverse; ordinary transpose alone is insufficient."
  },
  {
    "prompt": "If $U$ is unitary, what is $\\|Ux\\|_2$?",
    "options": [
      "$\\|x\\|_2$",
      "$\\|x\\|_2^2$",
      "$2\\|x\\|_2$",
      "$0$"
    ],
    "answer": "A",
    "explanation": "$\\|Ux\\|_2^2=x^*U^*Ux=x^*x$."
  },
  {
    "prompt": "If $Uv=\\lambda v$ with $v\\ne0$ and $U$ unitary, what follows?",
    "options": [
      "$\\lambda=1$",
      "$|\\lambda|=1$",
      "$\\lambda\\in\\mathbb R$",
      "$\\lambda=0$"
    ],
    "answer": "B",
    "explanation": "Norm preservation implies that the eigenvalue has unit modulus, not necessarily that it equals one."
  },
  {
    "prompt": "If $H=Q\\Lambda Q^*$ is a Hermitian spectral decomposition, what are the coordinates of a vector $x$ in the orthonormal eigenvector basis $Q$?",
    "options": [
      "$Qx$",
      "$Hx$",
      "$Q^*x$",
      "$Q^Tx$ in all complex cases"
    ],
    "answer": "C",
    "explanation": "Unitary $Q$ has inverse $Q^*$, so $x=Qc$ gives $c=Q^*x$."
  },
  {
    "prompt": "If a matrix is both Hermitian and unitary, what values can its eigenvalues take?",
    "options": [
      "Any positive real number",
      "Any complex number",
      "$0$ or $i$",
      "$+1$ or $-1$"
    ],
    "answer": "D",
    "explanation": "Hermitian eigenvalues are real and unitary eigenvalues have modulus one; their intersection is +1 and -1."
  }
];

// Quadratic Forms & Definiteness checkpoint (20 questions).
export const LA_QUADRATIC_FORMS_QUIZ = [
  {
    "prompt": "Which matrix represents the real quadratic form $q(x)=x^TAx$ without changing its value?",
    "options": [
      "The symmetric part $(A+A^T)/2$",
      "The skew-symmetric part $(A-A^T)/2$",
      "Any triangular matrix with the same trace",
      "The inverse of $A$"
    ],
    "answer": "A",
    "explanation": "The skew-symmetric contribution vanishes because $x^TKx=0$ for every real skew-symmetric $K$."
  },
  {
    "prompt": "For $q(x,y)=3x^2+4xy+2y^2$, which symmetric matrix $A$ satisfies $q=[x\\ y]A[x\\ y]^T$?",
    "options": [
      "$\\begin{pmatrix}3&4\\\\4&2\\end{pmatrix}$",
      "$\\begin{pmatrix}3&2\\\\2&2\\end{pmatrix}$",
      "$\\begin{pmatrix}6&2\\\\2&4\\end{pmatrix}$",
      "$\\begin{pmatrix}3&0\\\\4&2\\end{pmatrix}$"
    ],
    "answer": "B",
    "explanation": "The mixed term is $2a_{12}xy$, so each off-diagonal entry is 2."
  },
  {
    "prompt": "What is the symmetric matrix of $q(x)=5x_1^2-6x_1x_2+4x_2^2$?",
    "options": [
      "$\\begin{pmatrix}5&-6\\\\-6&4\\end{pmatrix}$",
      "$\\begin{pmatrix}5&3\\\\3&4\\end{pmatrix}$",
      "$\\begin{pmatrix}5&-3\\\\-3&4\\end{pmatrix}$",
      "$\\begin{pmatrix}5&-6\\\\0&4\\end{pmatrix}$"
    ],
    "answer": "C",
    "explanation": "The cross coefficient is twice the symmetric off-diagonal entry."
  },
  {
    "prompt": "When is a real symmetric matrix positive definite?",
    "options": [
      "Every eigenvalue is nonnegative",
      "Its determinant is positive",
      "Its trace is positive",
      "Every eigenvalue is strictly positive"
    ],
    "answer": "D",
    "explanation": "Strict positivity of all eigenvalues is equivalent to $x^TAx>0$ for all nonzero real $x$."
  },
  {
    "prompt": "Classify $A=\\operatorname{diag}(2,5)$.",
    "options": [
      "Positive definite",
      "Positive semidefinite but not definite",
      "Indefinite",
      "Negative definite"
    ],
    "answer": "A",
    "explanation": "Both eigenvalues are strictly positive."
  },
  {
    "prompt": "Classify $A=\\operatorname{diag}(0,3)$.",
    "options": [
      "Positive definite",
      "Positive semidefinite but not positive definite",
      "Indefinite",
      "Negative semidefinite"
    ],
    "answer": "B",
    "explanation": "The eigenvalues are nonnegative and one is zero, so the form can vanish on a nonzero vector."
  },
  {
    "prompt": "Classify $A=\\operatorname{diag}(2,-1)$.",
    "options": [
      "Positive definite",
      "Positive semidefinite",
      "Indefinite",
      "Negative definite"
    ],
    "answer": "C",
    "explanation": "The form takes positive and negative values on coordinate vectors."
  },
  {
    "prompt": "What does a zero eigenvalue imply for a positive-semidefinite symmetric matrix?",
    "options": [
      "The form is automatically indefinite",
      "The matrix is positive definite",
      "The trace must be zero",
      "The form vanishes along a nonzero eigenvector direction"
    ],
    "answer": "D",
    "explanation": "A zero eigenvalue gives a nonzero vector with $q(x)=0$, ruling out positive definiteness."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}a&b\\\\b&c\\end{pmatrix}$, which conditions characterize positive definiteness?",
    "options": [
      "$a>0$ and $ac-b^2>0$",
      "$a\\ge0$ and $c\\ge0$",
      "$ac-b^2>0$ alone",
      "$a+c>0$ and $b=0$"
    ],
    "answer": "A",
    "explanation": "The leading principal minors must be positive: $a>0$ and determinant $ac-b^2>0$."
  },
  {
    "prompt": "For a real symmetric matrix, Sylvester’s criterion for positive definiteness requires:",
    "options": [
      "All eigenvalues to be nonnegative",
      "All leading principal minors to be positive",
      "Only the determinant to be positive",
      "All entries to be positive"
    ],
    "answer": "B",
    "explanation": "Strict positivity of the leading principal minors is equivalent to positive definiteness."
  },
  {
    "prompt": "Which test correctly guarantees positive semidefiniteness for a real symmetric matrix?",
    "options": [
      "Only the leading principal minors are nonnegative",
      "The trace is positive",
      "All eigenvalues are nonnegative",
      "The determinant is nonzero"
    ],
    "answer": "C",
    "explanation": "Nonnegative eigenvalues are equivalent. Checking all principal minors is another equivalent test; leading minors alone do not suffice in the semidefinite case."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$, what are the eigenvalues?",
    "options": [
      "2 and 2",
      "4 and 0",
      "1 and -1",
      "3 and 1"
    ],
    "answer": "D",
    "explanation": "The characteristic polynomial is $(2-\\lambda)^2-1$, with roots 3 and 1."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$, what is its definiteness?",
    "options": [
      "Indefinite",
      "Positive definite",
      "Positive semidefinite",
      "Negative definite"
    ],
    "answer": "A",
    "explanation": "Its eigenvalues are 3 and -1, so the form has both signs."
  },
  {
    "prompt": "Under an orthogonal change of variables $x=Qy$, with $Q^TQ=I$, how does $A$ transform in $x^TAx$?",
    "options": [
      "$A$ becomes $Q^TA$",
      "$A$ becomes $Q^TAQ$",
      "$A$ becomes $QAQ^T$ only",
      "$A$ remains $A$ for every $Q$"
    ],
    "answer": "B",
    "explanation": "Substitution gives $x^TAx=y^TQ^TAQy$."
  },
  {
    "prompt": "For a general invertible real matrix $P$ and substitution $x=Py$, which transformation gives the matrix of the quadratic form in $y$?",
    "options": [
      "Similarity $P^{-1}AP$",
      "Left multiplication $PA$ alone",
      "Congruence $P^TAP$",
      "Adding a multiple of the identity"
    ],
    "answer": "C",
    "explanation": "Quadratic forms transform by congruence. Under orthogonal diagonalization congruence and similarity happen to share the same expression."
  },
  {
    "prompt": "What does Sylvester’s law of inertia state?",
    "options": [
      "Every quadratic form can be made positive definite",
      "A congruence preserves every eigenvalue",
      "The determinant is always unchanged by congruence",
      "An invertible change of variables preserves the counts of positive, negative and zero squares"
    ],
    "answer": "D",
    "explanation": "Congruence preserves inertia, although eigenvalues themselves need not remain fixed under a general invertible change."
  },
  {
    "prompt": "Complete the square: $q(x,y)=x^2+4xy+5y^2$.",
    "options": [
      "$(x+2y)^2+y^2$",
      "$(x+4y)^2-11y^2$",
      "$(x+2y)^2- y^2$",
      "$x^2+(y+2x)^2$"
    ],
    "answer": "A",
    "explanation": "Expanding $(x+2y)^2+y^2$ gives $x^2+4xy+5y^2$."
  },
  {
    "prompt": "How can a positive-definite Hessian at a stationary point classify a twice-differentiable function locally?",
    "options": [
      "It gives a strict local maximum",
      "It gives a strict local minimum",
      "It proves the point is a saddle",
      "It gives no second-order information"
    ],
    "answer": "B",
    "explanation": "A positive-definite Hessian makes the second-order change positive in every nonzero direction."
  },
  {
    "prompt": "What does a singular positive-semidefinite Hessian at a stationary point alone imply?",
    "options": [
      "It always proves a strict local minimum",
      "It always proves a local maximum",
      "The second-derivative test is inconclusive",
      "It proves the point is a saddle"
    ],
    "answer": "C",
    "explanation": "A semidefinite Hessian may have zero-curvature directions; higher-order terms can determine the behavior."
  },
  {
    "prompt": "For a Hermitian matrix $H$, which condition defines positive definiteness over complex vectors?",
    "options": [
      "$z^THz>0$ for every complex $z$",
      "Every entry of $H$ is positive",
      "$\\det(H)=0$",
      "$z^*Hz>0$ for every nonzero $z\\in\\mathbb C^n$"
    ],
    "answer": "D",
    "explanation": "Hermitian quadratic values are real; strict positivity for all nonzero complex vectors defines positive definiteness."
  }
];


// Change of Basis & Similarity Transformations checkpoint (20 questions).
export const LA_CHANGE_BASIS_SIMILARITY_QUIZ = [
  {
    "prompt": "Let the columns of $P_B$ be the basis vectors of $B$ in standard coordinates. How do you obtain $[x]_B$?",
    "options": [
      "$P_B^{-1}x$",
      "$P_Bx$",
      "$P_B^Tx$",
      "$xP_B^{-1}$"
    ],
    "answer": "A",
    "explanation": "The basis matrix synthesizes the vector: $x=P_B[x]_B$. Solving gives $[x]_B=P_B^{-1}x$."
  },
  {
    "prompt": "If $P_B$ and $P_C$ contain the basis vectors in standard coordinates, what converts $[x]_B$ into $[x]_C$?",
    "options": [
      "$P_B^{-1}P_C$",
      "$P_C^{-1}P_B$",
      "$P_CP_B^{-1}$",
      "$P_BP_C^{-1}$"
    ],
    "answer": "B",
    "explanation": "Since $x=P_B[x]_B=P_C[x]_C$, we obtain $[x]_C=P_C^{-1}P_B[x]_B$."
  },
  {
    "prompt": "A map has standard matrix $A$, domain basis $B$, and codomain basis $C$. What is its coordinate matrix?",
    "options": [
      "$P_B^{-1}AP_C$",
      "$P_CAP_B^{-1}$",
      "$P_C^{-1}AP_B$",
      "$P_C^{-1}P_BA$"
    ],
    "answer": "C",
    "explanation": "Convert the input from $B$ to standard with $P_B$, apply $A$, then convert the output to $C$ with $P_C^{-1}$."
  },
  {
    "prompt": "For one operator with standard matrix $A$, what is its matrix in a new basis with basis matrix $P$?",
    "options": [
      "$PAP^{-1}$",
      "$P^TAP$",
      "$P^{-1}A$",
      "$P^{-1}AP$"
    ],
    "answer": "D",
    "explanation": "The input changes by $P$ and the output is converted back by $P^{-1}$, giving $P^{-1}AP$."
  },
  {
    "prompt": "Which quantity is guaranteed to be the same for similar matrices?",
    "options": [
      "Their characteristic polynomials, including eigenvalue multiplicities",
      "Their entries in every position",
      "Their eigenvectors as coordinate columns",
      "Their row-reduced forms"
    ],
    "answer": "A",
    "explanation": "Similarity preserves the characteristic polynomial, so eigenvalues with algebraic multiplicities agree; coordinate eigenvectors can change."
  },
  {
    "prompt": "Why is a transition matrix between two bases invertible?",
    "options": [
      "Every transition matrix is symmetric",
      "Each basis uniquely represents every vector",
      "Its determinant must equal one",
      "The bases must contain identical vectors"
    ],
    "answer": "B",
    "explanation": "Each coordinate system gives a unique representation, so the coordinate conversion is bijective and its matrix is invertible."
  },
  {
    "prompt": "Let $B=((1,1),(1,-1))$ and $x=(5,1)$. What is $[x]_B$?",
    "options": [
      "$(5,1)^T$",
      "$(2,3)^T$",
      "$(3,2)^T$",
      "$(1,5)^T$"
    ],
    "answer": "C",
    "explanation": "Solve $c_1+c_2=5$ and $c_1-c_2=1$. This gives $c_1=3,c_2=2$."
  },
  {
    "prompt": "Let $B=((1,0),(1,1))$ and $C=((1,1),(0,1))$. Find $P_{C\\leftarrow B}$.",
    "options": [
      "$\\begin{pmatrix}1&1\\\\1&0\\end{pmatrix}$",
      "$\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}$",
      "$\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}$",
      "$\\begin{pmatrix}1&1\\\\-1&0\\end{pmatrix}$"
    ],
    "answer": "D",
    "explanation": "$P_C^{-1}P_B=\\begin{pmatrix}1&1\\\\-1&0\\end{pmatrix}$ for the displayed basis matrices."
  },
  {
    "prompt": "If $P_{C\\leftarrow B}$ converts $B$-coordinates to $C$-coordinates, what converts back?",
    "options": [
      "$(P_{C\\leftarrow B})^{-1}$",
      "$P_{C\\leftarrow B}^T$ in every case",
      "$-P_{C\\leftarrow B}$",
      "$P_{C\\leftarrow B}^2$"
    ],
    "answer": "A",
    "explanation": "Reverse a bijective coordinate conversion with its inverse. A transpose works only in special cases such as orthogonal matrices."
  },
  {
    "prompt": "For bases $B,C,D$, which composition rule is correct?",
    "options": [
      "$P_{D\\leftarrow C}P_{C\\leftarrow B}=P_{B\\leftarrow D}$",
      "$P_{D\\leftarrow C}P_{C\\leftarrow B}=P_{D\\leftarrow B}$",
      "$P_{C\\leftarrow B}P_{D\\leftarrow C}=P_{D\\leftarrow B}$",
      "$P_{D\\leftarrow C}+P_{C\\leftarrow B}=P_{D\\leftarrow B}$"
    ],
    "answer": "B",
    "explanation": "The rightmost matrix acts first: convert from $B$ to $C$, then $C$ to $D$."
  },
  {
    "prompt": "Let $A=\\operatorname{diag}(2,3)$. In the swapped basis $(e_2,e_1)$, what is $[A]_B$?",
    "options": [
      "$\\operatorname{diag}(2,3)$",
      "$\\begin{pmatrix}2&1\\\\0&3\\end{pmatrix}$",
      "$\\operatorname{diag}(3,2)$",
      "$A^{-1}$"
    ],
    "answer": "C",
    "explanation": "The basis matrix swaps the standard coordinates, so $P^{-1}AP=\\operatorname{diag}(3,2)$."
  },
  {
    "prompt": "In $A=PDP^{-1}$, what do the columns of $P$ represent?",
    "options": [
      "Rows of $A$ in echelon form",
      "An orthonormal basis in every case",
      "Coordinates of the eigenvalues",
      "A basis of eigenvectors ordered to match $D$"
    ],
    "answer": "D",
    "explanation": "Each column of $P$ is an eigenvector paired with the corresponding diagonal entry of $D$."
  },
  {
    "prompt": "An $n\\times n$ matrix has $n$ distinct eigenvalues over its field. What follows?",
    "options": [
      "It is diagonalizable over that field",
      "It is orthogonal",
      "It is symmetric",
      "Its determinant is zero"
    ],
    "answer": "A",
    "explanation": "Eigenvectors belonging to distinct eigenvalues are independent, so the $n$ eigenvectors form a basis."
  },
  {
    "prompt": "Why do equal eigenvalues alone not prove that two matrices are similar?",
    "options": [
      "Similarity never preserves eigenvalues",
      "Matrices with equal eigenvalues always have different determinants",
      "Their eigenspace dimensions or Jordan structure can differ",
      "Similar matrices must have different traces"
    ],
    "answer": "C",
    "explanation": "Similarity preserves eigenspace dimensions and Jordan structure as well as eigenvalues. Equal eigenvalues alone are insufficient."
  },
  {
    "prompt": "Which property is preserved by similarity?",
    "options": [
      "Individual entries",
      "Rank",
      "The chosen coordinate basis",
      "Every eigenvector coordinate column"
    ],
    "answer": "B",
    "explanation": "If $B=P^{-1}AP$ with invertible $P$, multiplication by invertible matrices preserves rank."
  },
  {
    "prompt": "For $T:V\\to W$ with input basis $B$ and output basis $C$, what is column $j$ of $[T]_{C\\leftarrow B}$?",
    "options": [
      "The $B$-coordinates of all vectors in $V$",
      "The eigenvalues of $T$",
      "The standard coordinates of the basis vectors of $W$",
      "$[T(b_j)]_C$"
    ],
    "answer": "D",
    "explanation": "The $j$th column records the output $T(b_j)$ in the chosen codomain basis $C$."
  },
  {
    "prompt": "When coordinates change from $B$ to $C$, what remains fixed?",
    "options": [
      "The geometric vector itself",
      "Its coordinate column",
      "The basis matrix",
      "All entries of operator matrices"
    ],
    "answer": "A",
    "explanation": "The vector is independent of coordinates; its coordinate column changes with the basis."
  },
  {
    "prompt": "If $[x]_B=P[x]_{B'}$ and $[y]_C=Q[y]_{C'}$, how does the map matrix change?",
    "options": [
      "$Q^{-1}[T]_{C\\leftarrow B}P^{-1}$",
      "$Q[T]_{C\\leftarrow B}P$",
      "$Q^{-1}[T]_{C\\leftarrow B}P$",
      "$P^{-1}[T]_{C\\leftarrow B}Q$"
    ],
    "answer": "C",
    "explanation": "Substitute the new input coordinates and convert output coordinates: $[T]_{C'\\leftarrow B'}=Q^{-1}[T]_{C\\leftarrow B}P$."
  },
  {
    "prompt": "If $P_{C\\leftarrow B}=\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$, what is $P_{B\\leftarrow C}$?",
    "options": [
      "$\\begin{pmatrix}1&1\\\\0&1\\end{pmatrix}$",
      "$\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}$",
      "$\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$",
      "$\\begin{pmatrix}1&0\\\\1&1\\end{pmatrix}$"
    ],
    "answer": "B",
    "explanation": "Invert the triangular transition matrix to get $\\begin{pmatrix}1&-1\\\\0&1\\end{pmatrix}$."
  },
  {
    "prompt": "If $P_{C\\leftarrow B}$ converts coordinates from $B$ to $C$, how are matrices of the same operator related?",
    "options": [
      "$[T]_C=P_{C\\leftarrow B}[T]_B$",
      "$[T]_C=[T]_B+P_{C\\leftarrow B}$",
      "$[T]_C=P_{B\\leftarrow C}[T]_B P_{C\\leftarrow B}$",
      "$[T]_C=P_{C\\leftarrow B}[T]_B P_{B\\leftarrow C}$"
    ],
    "answer": "D",
    "explanation": "Convert input coordinates from $C$ to $B$, apply $[T]_B$, then convert the result from $B$ to $C$. Thus $[T]_C=P_{C\\leftarrow B}[T]_B P_{B\\leftarrow C}$."
  }
];


// Affine Transformations & Homogeneous Coordinates checkpoint (20 questions).
export const LA_AFFINE_HOMOGENEOUS_QUIZ = [
  {
    "prompt": "What is the standard form of an affine map from R^n to R^m?",
    "options": [
      "$F(x)=Ax+b$ for a matrix A and fixed vector b",
      "$F(x)=A+x+b$",
      "$F(x)=Ax$ only",
      "$F(x)=b$ only"
    ],
    "answer": "A",
    "explanation": "An affine map combines a linear map with a fixed translation; linear maps are the special case b=0."
  },
  {
    "prompt": "What is the size of a homogeneous matrix representing an affine map in two dimensions?",
    "options": [
      "2 by 2",
      "3 by 3",
      "2 by 3",
      "4 by 4"
    ],
    "answer": "B",
    "explanation": "The affine matrix has one extra row and column, so a 2D map uses a 3 by 3 matrix."
  },
  {
    "prompt": "How is a finite affine point (x,y) represented in homogeneous coordinates?",
    "options": [
      "(x,y,0)^T",
      "(1,x,y)^T",
      "(x,y,1)^T",
      "(x,y)^T"
    ],
    "answer": "C",
    "explanation": "Append a final coordinate 1 to a point so the translation column contributes."
  },
  {
    "prompt": "What homogeneous final coordinate represents a displacement vector?",
    "options": [
      "1",
      "Any nonzero number",
      "-1 only",
      "0"
    ],
    "answer": "D",
    "explanation": "Direction vectors use final coordinate 0, so translations do not affect them."
  },
  {
    "prompt": "Under translation by (3,-2), where does point (1,4) go?",
    "options": [
      "(4,2)",
      "(4,6)",
      "(-2,2)",
      "(3,-2)"
    ],
    "answer": "A",
    "explanation": "Add the translation componentwise: (1+3,4-2)=(4,2)."
  },
  {
    "prompt": "What is the last row of a 2D affine homogeneous matrix?",
    "options": [
      "(b_1,b_2,1)",
      "(0,0,1)",
      "(1,0,0)",
      "(0,1,0)"
    ],
    "answer": "B",
    "explanation": "The standard affine homogeneous form is [[A,b],[0,0,1]] in two dimensions."
  },
  {
    "prompt": "If F and G are affine maps, which matrix represents F composed with G?",
    "options": [
      "H_G H_F",
      "H_F+H_G",
      "H_F H_G",
      "H_G^{-1}H_F"
    ],
    "answer": "C",
    "explanation": "Composition F∘G applies G first, so its homogeneous matrix is H_F H_G."
  },
  {
    "prompt": "For invertible A, what is the inverse of F(x)=Ax+b?",
    "options": [
      "A^{-1}x+b",
      "A(x-b)",
      "A^{-1}x-b",
      "A^{-1}(x-b)"
    ],
    "answer": "D",
    "explanation": "Solve y=Ax+b for x to get x=A^{-1}(y-b)."
  },
  {
    "prompt": "When is F(x)=Ax+b globally invertible?",
    "options": [
      "When det(A) is nonzero",
      "Whenever b is nonzero",
      "When A is symmetric",
      "When A has a zero column"
    ],
    "answer": "A",
    "explanation": "The affine map is bijective exactly when its linear part A is invertible."
  },
  {
    "prompt": "What does a 90-degree counterclockwise rotation about the origin do to (1,0)?",
    "options": [
      "(1,0)",
      "(0,1)",
      "(0,-1)",
      "(-1,0)"
    ],
    "answer": "B",
    "explanation": "The standard counterclockwise rotation sends the positive x-axis unit vector to the positive y-axis."
  },
  {
    "prompt": "Rotate (2,1) by 90 degrees counterclockwise about center (1,1). What is the result?",
    "options": [
      "(2,2)",
      "(0,2)",
      "(1,2)",
      "(1,0)"
    ],
    "answer": "C",
    "explanation": "Relative to the center the point is (1,0), which rotates to (0,1); adding the center gives (1,2)."
  },
  {
    "prompt": "What does the 2D linear part diag(2,3) do to point (4,1), with no translation?",
    "options": [
      "(6,4)",
      "(8,1)",
      "(4,3)",
      "(8,3)"
    ],
    "answer": "D",
    "explanation": "Scale x by 2 and y by 3 to obtain (8,3)."
  },
  {
    "prompt": "Which feature is preserved by every affine map with invertible linear part?",
    "options": [
      "Collinearity and parallelism",
      "All distances",
      "All angles",
      "Area exactly"
    ],
    "answer": "A",
    "explanation": "Invertible affine maps preserve lines, collinearity, and parallelism; they may change metric quantities."
  },
  {
    "prompt": "Does a general affine transformation preserve distances?",
    "options": [
      "Yes, always",
      "No; only special linear parts such as orthogonal matrices preserve distances",
      "Only if the translation is zero",
      "Only in 3D"
    ],
    "answer": "B",
    "explanation": "A general linear part can stretch or shear. Orthogonal A preserves distances, and translation does not change them."
  },
  {
    "prompt": "Why does an affine map preserve affine combinations?",
    "options": [
      "Because det(A)=1",
      "Because b must be zero",
      "The coefficients sum to 1, so the translated terms combine to b once",
      "Because every affine map is symmetric"
    ],
    "answer": "C",
    "explanation": "For coefficients summing to one, applying Ax+b produces the same weighted combination of transformed points."
  },
  {
    "prompt": "Which matrix represents the shear (x,y) maps to (x+2y,y) in homogeneous coordinates?",
    "options": [
      "[[1,0,0],[2,1,0],[0,0,1]]",
      "[[2,0,0],[0,1,0],[0,0,1]]",
      "[[1,2,1],[0,1,0],[0,0,1]]",
      "[[1,2,0],[0,1,0],[0,0,1]]"
    ],
    "answer": "D",
    "explanation": "The linear part is [[1,2],[0,1]] and the translation is zero."
  },
  {
    "prompt": "What is the size of a homogeneous matrix for a 3D affine transformation?",
    "options": [
      "4 by 4",
      "3 by 3",
      "3 by 4",
      "5 by 5"
    ],
    "answer": "A",
    "explanation": "Adding one homogeneous coordinate to 3D points gives four-component columns and a 4 by 4 matrix."
  },
  {
    "prompt": "By what factor does a 2D affine map change area?",
    "options": [
      "det(A) squared",
      "The absolute value of det(A)",
      "The trace of A",
      "The determinant of the homogeneous matrix only"
    ],
    "answer": "B",
    "explanation": "The area scaling factor is |det(A)|; the sign records orientation reversal."
  },
  {
    "prompt": "If A is singular, what can happen to the affine image?",
    "options": [
      "It must be a translation only",
      "It preserves all dimensions",
      "It can collapse a plane to a line or point and has no global inverse",
      "It becomes a rotation"
    ],
    "answer": "C",
    "explanation": "A singular linear part loses at least one dimension, so the map is not invertible."
  },
  {
    "prompt": "In the usual finite affine homogeneous convention, how should a point with last coordinate w≠0 be normalized?",
    "options": [
      "Multiply its first coordinates by w",
      "Set all coordinates to zero",
      "Discard w without dividing",
      "Divide all coordinates by w so the last coordinate becomes 1"
    ],
    "answer": "D",
    "explanation": "An affine point is represented with final coordinate 1; a nonzero w can be normalized by division."
  }
];
