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

// Principal Component Analysis checkpoint (20 questions).
export const LA_PCA_QUIZ = [
  {
    "prompt": "Why are feature means subtracted before covariance-based PCA?",
    "options": [
      "To measure variation around the feature means rather than around the origin",
      "To make every covariance equal to one",
      "To force every principal component to have a positive score",
      "To remove the need to choose a number of components"
    ],
    "answer": "A",
    "explanation": "Centering makes PCA describe variation about the data's mean. Scaling to unit variance is a separate choice."
  },
  {
    "prompt": "If rows are observations and columns are features, what is the shape of a data matrix with n observations and p features?",
    "options": [
      "p by n",
      "n by p",
      "n by n regardless of p",
      "p by p regardless of n"
    ],
    "answer": "B",
    "explanation": "Each of the n observations contributes one row, and each of the p features contributes one column."
  },
  {
    "prompt": "For n centered observations stored as rows of X_c, what is their sample covariance matrix?",
    "options": [
      "$X_cX_c^T/(n-1)$",
      "$X_c^TX_c/n$",
      "$X_c^TX_c/(n-1)$",
      "$X_c/(n-1)$"
    ],
    "answer": "C",
    "explanation": "The p by p sample covariance of column features is $X_c^TX_c/(n-1)$."
  },
  {
    "prompt": "Which optimization problem defines the first principal direction for covariance matrix S?",
    "options": [
      "Minimize $u^TSu$ subject to $u=0$",
      "Maximize $\\det(S)$ over all vectors u",
      "Minimize $\\|Su\\|$ subject to $\\|u\\|=1$",
      "Maximize $u^TSu$ subject to $\\|u\\|=1$"
    ],
    "answer": "D",
    "explanation": "The unit vector with greatest projected sample variance maximizes the Rayleigh quotient $u^TSu$."
  },
  {
    "prompt": "Which eigenvector of S gives the first principal direction?",
    "options": [
      "A unit eigenvector paired with the largest eigenvalue",
      "An eigenvector paired with the smallest eigenvalue",
      "Any vector parallel to the feature-mean vector",
      "A vector whose entries sum to one"
    ],
    "answer": "A",
    "explanation": "The largest covariance eigenvalue is the greatest variance attainable along a unit direction."
  },
  {
    "prompt": "What does an eigenvalue $\\lambda_j$ of the sample covariance represent for its unit eigenvector $v_j$?",
    "options": [
      "The number of observations",
      "The sample variance of the data projected onto $v_j$",
      "The mean of the original feature columns",
      "The reconstruction error for every observation"
    ],
    "answer": "B",
    "explanation": "Projection onto a covariance eigenvector has sample variance equal to its eigenvalue."
  },
  {
    "prompt": "How are the scores on the first k principal directions computed from centered rows X_c and loading matrix V_k?",
    "options": [
      "$V_k^TX_c$",
      "$X_c+V_k$",
      "$X_cV_k$",
      "$X_cV_k^{-1}$"
    ],
    "answer": "C",
    "explanation": "Each centered observation row is projected onto the loading columns by the matrix product $X_cV_k$."
  },
  {
    "prompt": "If the ordered covariance eigenvalues are $\\lambda_1,\\ldots,\\lambda_p$, what fraction of total variance is explained by the first component?",
    "options": [
      "$\\lambda_1-\\sum_j\\lambda_j$",
      "$\\sum_j\\lambda_j/\\lambda_1$",
      "$\\lambda_1^2/\\sum_j\\lambda_j$",
      "$\\lambda_1/\\sum_j\\lambda_j$"
    ],
    "answer": "D",
    "explanation": "Divide the first component's variance by total variance, the sum of all covariance eigenvalues."
  },
  {
    "prompt": "How are distinct principal directions selected in standard covariance PCA?",
    "options": [
      "As an orthonormal set of covariance eigenvectors",
      "As parallel vectors so each score has the same sign",
      "As the original feature axes in every data set",
      "As eigenvectors of the feature-mean vector"
    ],
    "answer": "A",
    "explanation": "The covariance matrix is symmetric, so its eigenvectors can be chosen orthonormal."
  },
  {
    "prompt": "When is standardizing features to unit variance often appropriate before PCA?",
    "options": [
      "Whenever the covariance matrix is already diagonal",
      "When feature units or scales differ and comparable influence is intended",
      "Only when every feature has zero variance",
      "Whenever the observations have already been centered"
    ],
    "answer": "B",
    "explanation": "Standardization prevents measurement units alone from dominating, but it should match the analysis goal."
  },
  {
    "prompt": "If a covariance matrix has a repeated eigenvalue, what is true about its principal directions in that eigenspace?",
    "options": [
      "They must equal the standard coordinate axes",
      "They are uniquely fixed including their signs",
      "An orthonormal basis can be chosen, but individual directions in the tied eigenspace are not unique",
      "The repeated eigenvalue must be zero"
    ],
    "answer": "C",
    "explanation": "Any orthonormal basis of a repeated-eigenvalue eigenspace spans the same PCA subspace."
  },
  {
    "prompt": "For an SVD $X_c=U\\Sigma V^T$, which vectors give the principal directions?",
    "options": [
      "Columns of U only",
      "Rows of U",
      "Columns of $\\Sigma$",
      "Columns of V"
    ],
    "answer": "D",
    "explanation": "The right singular vectors in V are eigenvectors of $X_c^TX_c$ and therefore are feature-space principal directions."
  },
  {
    "prompt": "After centering n observations, what is an upper bound on the number of nonzero principal components?",
    "options": [
      "$\\min(n-1,p)$",
      "$n+p$",
      "$np$",
      "Exactly n, even if p is smaller"
    ],
    "answer": "A",
    "explanation": "The centered matrix has rank at most $\\min(n-1,p)$, so its covariance has no more nonzero eigenvalues."
  },
  {
    "prompt": "For centered row data X_c and loading matrix V_k, what is the rank-k reconstruction before restoring the feature means?",
    "options": [
      "$V_kX_cV_k^T$",
      "$X_cV_kV_k^T$",
      "$X_c+V_kV_k^T$",
      "$V_k^TX_cV_k$"
    ],
    "answer": "B",
    "explanation": "First compute the scores $X_cV_k$, then map them back to feature space by multiplying by $V_k^T$."
  },
  {
    "prompt": "To avoid data leakage when evaluating a predictive model that uses PCA, what should be done?",
    "options": [
      "Fit PCA once using training and test rows together",
      "Recompute a different PCA basis for every test row",
      "Fit means, scales, and loadings on training data, then reuse them on held-out data",
      "Use outcome labels to center each test feature"
    ],
    "answer": "C",
    "explanation": "All preprocessing and PCA parameters must be learned from training data only and then applied unchanged to held-out observations."
  },
  {
    "prompt": "Does ordinary PCA require outcome labels?",
    "options": [
      "Yes, it needs one class label for every component",
      "Only when the covariance matrix is symmetric",
      "Yes, labels determine the feature means",
      "No; ordinary PCA is an unsupervised transformation of the feature data"
    ],
    "answer": "D",
    "explanation": "Ordinary PCA uses the feature matrix and its variance structure, not response labels."
  },
  {
    "prompt": "What can be concluded from PCA scores having zero sample covariance?",
    "options": [
      "The scores are uncorrelated, but they need not be statistically independent",
      "The scores are always statistically independent",
      "Every score has unit variance",
      "The original features were independent"
    ],
    "answer": "A",
    "explanation": "Orthogonal covariance directions give uncorrelated scores; independence requires additional assumptions, such as a suitable joint Gaussian model."
  },
  {
    "prompt": "A centered data set has ordered covariance eigenvalues 7, 2, and 1. How many components reach at least 90% cumulative explained variance?",
    "options": [
      "One, because the largest eigenvalue is 7",
      "Two, because $(7+2)/(7+2+1)=90\\%$",
      "Three, because cumulative variance cannot be computed from eigenvalues",
      "Zero, because PCA requires equal eigenvalues"
    ],
    "answer": "B",
    "explanation": "The total is 10; the first two eigenvalues sum to 9, giving exactly 90%."
  },
  {
    "prompt": "Which objective does ordinary PCA optimize directly?",
    "options": [
      "Classification accuracy",
      "The number of available labels",
      "Variance retained in the projected feature data",
      "The number of original features"
    ],
    "answer": "C",
    "explanation": "PCA preserves directions of large input variance; high variance does not guarantee usefulness for a prediction target."
  },
  {
    "prompt": "Why can a few extreme observations substantially change PCA directions?",
    "options": [
      "PCA discards the covariance matrix when outliers appear",
      "Every eigenvector must contain a zero",
      "Extreme observations always have zero centered scores",
      "They can strongly shift the mean and covariance used to find the directions"
    ],
    "answer": "D",
    "explanation": "The mean and covariance are sensitive to extreme values, which can rotate the leading eigendirections."
  }
];

export const LA_MARKOV_QUIZ = [
  {
    "prompt": "With column probability vectors and the update $p_{n+1}=Pp_n$, what condition makes $P$ column-stochastic?",
    "options": [
      "Each column has nonnegative entries summing to one",
      "Each row has nonnegative entries summing to zero",
      "The matrix is symmetric",
      "Every diagonal entry equals one"
    ],
    "answer": "A",
    "explanation": "Column $j$ gives the probabilities of leaving state $j$ for each destination, so it must be nonnegative and sum to one."
  },
  {
    "prompt": "For $P=\\begin{pmatrix}0.8&0.3\\\\0.2&0.7\\end{pmatrix}$ and $p_0=(1,0)^T$, what is $p_1=Pp_0$?",
    "options": [
      "$(0.2,0.8)^T$",
      "$(0.8,0.2)^T$",
      "$(0.3,0.7)^T$",
      "$(1,1)^T$"
    ],
    "answer": "B",
    "explanation": "Multiplication by $p_0=e_1$ selects the first column of $P$, giving $(0.8,0.2)^T$."
  },
  {
    "prompt": "Under the column-vector convention, which equation defines a stationary distribution $\\pi$?",
    "options": [
      "$P\\pi=0$",
      "$P^T\\pi=-\\pi$",
      "$P\\pi=\\pi$",
      "$\\pi^T\\pi=1$"
    ],
    "answer": "C",
    "explanation": "A stationary distribution is unchanged by one transition, so it is a fixed vector of $P$."
  },
  {
    "prompt": "Which eigenvalue is associated with a nonzero stationary vector of a stochastic matrix?",
    "options": [
      "$0$",
      "$-1$",
      "$\\det(P)$",
      "$1$"
    ],
    "answer": "D",
    "explanation": "The equation $P\\pi=\\pi$ is the eigenvector equation with eigenvalue $1$."
  },
  {
    "prompt": "For $P=\\begin{pmatrix}0.8&0.3\\\\0.2&0.7\\end{pmatrix}$, what is its stationary distribution?",
    "options": [
      "$(0.6,0.4)^T$",
      "$(0.5,0.5)^T$",
      "$(0.4,0.6)^T$",
      "$(0.8,0.2)^T$"
    ],
    "answer": "A",
    "explanation": "Solving $0.2x=0.3y$ with $x+y=1$ gives $x=0.6$ and $y=0.4$."
  },
  {
    "prompt": "For a row-stochastic matrix $Q$ and row probability vector $r_n^T$, how is the next distribution written?",
    "options": [
      "$r_{n+1}^T=Qr_n^T$",
      "$r_{n+1}^T=r_n^TQ$",
      "$r_{n+1}^T=Q^Tr_n^TQ$",
      "$r_{n+1}^T=r_n^T+Q$"
    ],
    "answer": "B",
    "explanation": "The row-vector convention multiplies the row distribution on the right by the row-stochastic transition matrix."
  },
  {
    "prompt": "Besides satisfying $P\\pi=\\pi$, what makes $\\pi$ a probability distribution?",
    "options": [
      "Its entries are all distinct",
      "It is an eigenvector of $P^T$ for eigenvalue $0$",
      "Its entries are nonnegative and sum to one",
      "Its Euclidean norm must exceed one"
    ],
    "answer": "C",
    "explanation": "A stationary probability vector must be nonnegative and normalized to total probability one."
  },
  {
    "prompt": "Why does a column-stochastic matrix preserve the total sum of a column distribution?",
    "options": [
      "Because $P$ is always invertible",
      "Because $P$ has trace one",
      "Because every row of $P$ is identical",
      "Because $\\mathbf{1}^TP=\\mathbf{1}^T$"
    ],
    "answer": "D",
    "explanation": "Then $\\mathbf{1}^TPp=\\mathbf{1}^Tp$, so the entries of the distribution keep the same total."
  },
  {
    "prompt": "What does $P^np_0$ represent in the column-vector model?",
    "options": [
      "The state distribution after $n$ transitions",
      "The eigenvalues of the initial distribution",
      "The transition matrix after deleting transient states",
      "The stationary distribution for every possible chain"
    ],
    "answer": "A",
    "explanation": "Applying the same one-step transition $n$ times gives $p_n=P^np_0$."
  },
  {
    "prompt": "For a finite irreducible Markov chain, which statement is guaranteed?",
    "options": [
      "Every state is absorbing",
      "There is a unique stationary distribution",
      "Every eigenvalue is positive",
      "The transition matrix is symmetric"
    ],
    "answer": "B",
    "explanation": "Irreducibility guarantees a unique stationary distribution for a finite chain, though convergence also needs aperiodicity."
  },
  {
    "prompt": "For a finite irreducible and aperiodic chain, what happens to $P^np_0$?",
    "options": [
      "It becomes the zero vector",
      "It is unchanged for every $p_0$",
      "It converges to the unique stationary distribution",
      "It must alternate between two states"
    ],
    "answer": "C",
    "explanation": "Irreducibility and aperiodicity together imply convergence to the unique stationary distribution from any initial distribution."
  },
  {
    "prompt": "For $P=\\begin{pmatrix}0&1\\\\1&0\\end{pmatrix}$ and $p_0=(1,0)^T$, which statement is correct?",
    "options": [
      "No stationary distribution exists",
      "The unique stationary distribution is $(1,0)^T$",
      "$P^np_0$ converges to $(1/2,1/2)^T$ at every step",
      "$(1/2,1/2)^T$ is stationary, but the iterates alternate"
    ],
    "answer": "D",
    "explanation": "The equal mixture is fixed, but starting from the first state the distributions switch between $(1,0)^T$ and $(0,1)^T$."
  },
  {
    "prompt": "If $P=I_2$, which vectors are stationary probability distributions?",
    "options": [
      "Every vector $(t,1-t)^T$ with $0\\le t\\le1$",
      "Only $(1/2,1/2)^T$",
      "Only $(1,0)^T$",
      "No probability vector"
    ],
    "answer": "A",
    "explanation": "Since $I_2\\pi=\\pi$, every probability vector is fixed; the stationary distribution is not unique."
  },
  {
    "prompt": "A numerical method returns a nonzero vector $v$ satisfying $Pv=v$. What must be done before treating it as a stationary distribution?",
    "options": [
      "Set its largest entry to zero",
      "Normalize it to sum to one and verify nonnegativity",
      "Square every entry",
      "Subtract the mean of its entries"
    ],
    "answer": "B",
    "explanation": "An eigenvector can be scaled arbitrarily; a stationary probability vector must be normalized and nonnegative."
  },
  {
    "prompt": "For $P=\\begin{pmatrix}0.6&0.2\\\\0.4&0.8\\end{pmatrix}$, find the stationary distribution.",
    "options": [
      "$(0.2,0.8)^T$",
      "$(0.5,0.5)^T$",
      "$(1/3,2/3)^T$",
      "$(2/3,1/3)^T$"
    ],
    "answer": "C",
    "explanation": "The first stationary equation gives $0.4x=0.2y$, so $y=2x$; normalization gives $(x,y)=(1/3,2/3)$."
  },
  {
    "prompt": "What is true about every eigenvalue $\\lambda$ of a finite stochastic matrix?",
    "options": [
      "$\\lambda$ must equal one",
      "$\\lambda$ must be an integer",
      "$\\lambda$ must be negative",
      "$|\\lambda|\\le1$"
    ],
    "answer": "D",
    "explanation": "A stochastic matrix is nonexpansive in the appropriate probability norm, so its eigenvalues lie in the closed unit disk."
  },
  {
    "prompt": "When solving $(P-I)\\pi=0$ with $\\mathbf{1}^T\\pi=1$, why can one equation from $(P-I)\\pi=0$ be replaced?",
    "options": [
      "The stationary equations are linearly dependent",
      "The normalization equation is always redundant",
      "$P-I$ is always the identity matrix",
      "The stationary vector must have a zero entry"
    ],
    "answer": "A",
    "explanation": "Because $1$ is an eigenvalue, $P-I$ is singular; its stationary equations contain a dependency, while normalization fixes the scale."
  },
  {
    "prompt": "If $p_0=\\pi$ is stationary, what is the distribution after any number $n$ of transitions?",
    "options": [
      "$P^n\\pi=0$",
      "$P^n\\pi=\\pi$",
      "$P^n\\pi=n\\pi$",
      "$P^n\\pi=P$"
    ],
    "answer": "B",
    "explanation": "Since $P\\pi=\\pi$, repeated multiplication leaves the same vector unchanged."
  },
  {
    "prompt": "If $P$ is column-stochastic and $Q=P^T$, which row-vector equation corresponds to $P\\pi=\\pi$?",
    "options": [
      "$\\pi^TQ=0$",
      "$Q\\pi^T=\\pi^T$",
      "$\\pi^TQ=\\pi^T$",
      "$Q^T\\pi^T=0$"
    ],
    "answer": "C",
    "explanation": "Transposing $P\\pi=\\pi$ gives $\\pi^TP^T=\\pi^T$, and $Q=P^T$."
  },
  {
    "prompt": "Which condition is sufficient to guarantee a unique stationary distribution and convergence for a finite chain?",
    "options": [
      "The matrix has at least one zero entry",
      "The matrix is diagonal",
      "The matrix has determinant one",
      "Every entry of the transition matrix is strictly positive"
    ],
    "answer": "D",
    "explanation": "A strictly positive finite stochastic matrix is irreducible and aperiodic, so it has a unique stationary distribution and its iterates converge to it."
  }
];

export const LA_LINEAR_PROGRAMMING_QUIZ = [
  {
    "prompt": "In a linear-programming model, what should a decision variable represent?",
    "options": [
      "The quantity of an activity the model chooses",
      "A constraint that must always be zero",
      "The final objective value before optimization",
      "A label for a tableau row"
    ],
    "answer": "A",
    "explanation": "Decision variables encode controllable quantities; the objective and constraints are written in terms of them."
  },
  {
    "prompt": "For $x_1+2x_2\\leq8$, which equation uses a slack variable for unused capacity?",
    "options": [
      "$x_1+2x_2-s=8$, $s\\geq0$",
      "$x_1+2x_2+s=8$, $s\\geq0$",
      "$x_1+2x_2=8+s$, $s\\geq0$",
      "$x_1+2x_2+s\\leq8$, $s=0$"
    ],
    "answer": "B",
    "explanation": "Add a nonnegative slack variable to a ≤ constraint to make an equality."
  },
  {
    "prompt": "A point is feasible for a linear program when it:",
    "options": [
      "maximizes the objective, even if a constraint fails",
      "satisfies only the tightest constraint",
      "satisfies every constraint and variable bound",
      "makes every inequality strict"
    ],
    "answer": "C",
    "explanation": "Feasibility means all constraints and bounds hold at once; it does not require optimality."
  },
  {
    "prompt": "For $\\max z=3x+2y$ with $x+y\\leq4$, $x\\leq2$, $y\\leq3$, $x,y\\geq0$, what is $z$ at $(2,2)$?",
    "options": [
      "$5$",
      "$8$",
      "$9$",
      "$10$"
    ],
    "answer": "D",
    "explanation": "Substitution gives $3(2)+2(2)=10$, and the point satisfies all constraints."
  },
  {
    "prompt": "For a nonempty bounded feasible polyhedron, which statement is true?",
    "options": [
      "At least one optimum occurs at an extreme point (vertex)",
      "Every feasible point has the same objective value",
      "The optimum must lie strictly inside the region",
      "An optimum exists only if simplex is run"
    ],
    "answer": "A",
    "explanation": "A linear objective on a nonempty bounded polyhedron attains an optimum at an extreme point."
  },
  {
    "prompt": "How do you convert $2x_1+x_2\\leq9$ to equality for simplex?",
    "options": [
      "Subtract a nonnegative slack variable",
      "Add $s\\geq0$: $2x_1+x_2+s=9$",
      "Add an unrestricted variable to the RHS",
      "Replace it with $2x_1+x_2=0$"
    ],
    "answer": "B",
    "explanation": "Adding $s\\geq0$ gives equality and records unused capacity."
  },
  {
    "prompt": "For $x_1+x_2\\geq5$, what is the usual surplus conversion?",
    "options": [
      "Add $s\\geq0$ to the left",
      "Add $s\\leq0$ to the right",
      "Subtract $s\\geq0$ from the left",
      "Replace with $x_1+x_2+s=0$"
    ],
    "answer": "C",
    "explanation": "A ≥ constraint becomes $x_1+x_2-s=5$ with $s\\geq0$."
  },
  {
    "prompt": "Under tableau convention $z-c^Tx=0$ for maximization, which nonbasic variable is a common entering choice?",
    "options": [
      "One with a positive objective-row coefficient",
      "The variable with the largest RHS",
      "A variable whose column is already basic",
      "One with a negative objective-row reduced-cost coefficient"
    ],
    "answer": "D",
    "explanation": "Under this convention, a negative coefficient gives an improving direction."
  },
  {
    "prompt": "In the minimum-ratio test, which rows are eligible?",
    "options": [
      "Rows with positive entering-column entries; compare RHS divided by entry",
      "Rows with negative entries; compare entry divided by RHS",
      "Every row, including zero entries",
      "Only the row with the largest RHS"
    ],
    "answer": "A",
    "explanation": "Positive pivot-column entries limit the increase; choose the smallest nonnegative RHS-to-entry ratio."
  },
  {
    "prompt": "An improving entering column has no positive entries in the constraint rows. What does this indicate?",
    "options": [
      "The current point is necessarily infeasible",
      "The objective can increase without bound along that direction",
      "The problem has a unique finite optimum",
      "An artificial variable must be removed"
    ],
    "answer": "B",
    "explanation": "No positive entries means the ratio test cannot limit the improving variable, so the objective is unbounded."
  },
  {
    "prompt": "What characterizes a basic-variable column in a canonical tableau?",
    "options": [
      "It contains only negative entries",
      "Its entries sum to the RHS",
      "It is a unit column: one 1 and otherwise 0",
      "It contains zeros in every constraint row"
    ],
    "answer": "C",
    "explanation": "A basic variable has a unit vector column in canonical form."
  },
  {
    "prompt": "A basic feasible solution is degenerate when:",
    "options": [
      "There are multiple optimal vertices",
      "The feasible region is unbounded",
      "All decision variables are positive",
      "At least one basic variable is zero"
    ],
    "answer": "D",
    "explanation": "A zero-valued basic variable is degeneracy; a pivot may keep the same vertex."
  },
  {
    "prompt": "Which description defines the feasible set?",
    "options": [
      "The intersection of constraint regions and variable bounds",
      "Only points with the largest objective value",
      "The collection of basic variables",
      "Constraints that have zero slack"
    ],
    "answer": "A",
    "explanation": "Intersect all half-spaces and hyperplanes with the variable bounds."
  },
  {
    "prompt": "Why might simplex need an artificial variable for a $\\geq$ row?",
    "options": [
      "To make the objective linear",
      "A surplus column alone may not provide an initial basic unit column",
      "To turn maximization into minimization",
      "To force the constraint to be redundant"
    ],
    "answer": "B",
    "explanation": "Subtracting a surplus variable produces a negative column entry, not a basic unit column."
  },
  {
    "prompt": "In two-phase simplex, a positive optimal Phase I objective (minimum artificial-variable sum) proves:",
    "options": [
      "The original objective is unbounded",
      "The original problem has infinitely many optima",
      "The original constraints are infeasible",
      "The original objective value is zero"
    ],
    "answer": "C",
    "explanation": "If the minimum artificial-variable sum stays positive, no point satisfies all original constraints."
  },
  {
    "prompt": "With $z-c^Tx=0$ in a maximization tableau, when is a feasible tableau optimal for its nonbasic variables?",
    "options": [
      "When every RHS is negative",
      "When every objective coefficient is negative",
      "When at least one objective coefficient is negative",
      "When no nonbasic objective-row coefficient is negative"
    ],
    "answer": "D",
    "explanation": "A negative reduced cost offers an improving pivot under this convention; none remaining certifies optimality."
  },
  {
    "prompt": "At an optimal tableau, a zero reduced cost for a nonbasic variable can mean:",
    "options": [
      "There may be another optimum on an adjacent feasible edge",
      "The current solution is infeasible",
      "The objective is unbounded",
      "The constraints are inconsistent"
    ],
    "answer": "A",
    "explanation": "A feasible pivot with zero reduced cost can produce another solution with the same objective."
  },
  {
    "prompt": "What is Bland's rule designed to do?",
    "options": [
      "Choose the largest objective coefficient as the leaving variable",
      "Break ties by a fixed variable order to prevent cycling",
      "Make every LP bounded",
      "Avoid all slack variables"
    ],
    "answer": "B",
    "explanation": "A consistent index ordering for eligible pivots prevents cycling, including in degenerate cases."
  },
  {
    "prompt": "A shadow price commonly measures:",
    "options": [
      "The number of pivots needed",
      "Slack at every feasible point",
      "Local change in optimum per unit change of a constraint RHS",
      "The entering variable's objective coefficient"
    ],
    "answer": "C",
    "explanation": "While the current basis remains optimal, the dual value estimates marginal objective change per RHS unit."
  },
  {
    "prompt": "What is the central geometric idea behind simplex?",
    "options": [
      "Search every feasible point simultaneously",
      "Replace inequalities with equalities and stop",
      "Move randomly through the interior",
      "Move between adjacent basic feasible solutions while improving the objective"
    ],
    "answer": "D",
    "explanation": "Simplex traverses neighboring vertices, pivoting until no improving move remains."
  }
];


export const LA_VECTOR_APPLICATIONS_QUIZ = [
  {
    "prompt": "A mesh stores $n$ vertices as columns of $V\\in\\mathbb R^{3\\times n}$. Which product applies a $3\\times3$ linear map $A$ to every vertex?",
    "options": [
      "$AV$",
      "$VA$",
      "$V^TA$",
      "$A+V$"
    ],
    "answer": "A",
    "explanation": "Left multiplication transforms each column of $V$ and preserves the $3\\times n$ storage shape."
  },
  {
    "prompt": "Which homogeneous coordinate convention distinguishes a finite point from a direction in affine 3D geometry?",
    "options": [
      "Point: $0$; direction: $1$",
      "Point: last coordinate $1$; direction: last coordinate $0$",
      "Both must end in $1$",
      "Both must end in $0$"
    ],
    "answer": "B",
    "explanation": "The translation column is multiplied by the last coordinate, so it affects points but not directions."
  },
  {
    "prompt": "With column vectors, first applying $H_1$ and then $H_2$ is represented by which matrix?",
    "options": [
      "$H_1H_2$",
      "$H_1+H_2$",
      "$H_2H_1$",
      "$H_1-H_2$"
    ],
    "answer": "C",
    "explanation": "The rightmost matrix acts first: $H_2(H_1x)=(H_2H_1)x$."
  },
  {
    "prompt": "For an invertible linear transformation $A$, which expression correctly transforms a surface normal before renormalization?",
    "options": [
      "$An$ for every invertible $A$",
      "$A^Tn$ for every invertible $A$",
      "$n+A(1,1,1)^T$",
      "$A^{-T}n$"
    ],
    "answer": "D",
    "explanation": "For a tangent $v$, $(A^{-T}n)^TAv=n^Tv=0$, preserving perpendicularity."
  },
  {
    "prompt": "An ideal pinhole camera has $f=2$ and views $(X,Y,Z)=(3,1,2)$ with identity pose. What are its image coordinates?",
    "options": [
      "$(3,1)$",
      "$(6,2)$",
      "$(3/2,1/2)$",
      "$(6,4)$"
    ],
    "answer": "A",
    "explanation": "Use $(u,v)=(fX/Z,fY/Z)=(3,1)$."
  },
  {
    "prompt": "Which condition on barycentric weights makes $p=\\alpha a+\\beta b+\\gamma c$ an affine combination?",
    "options": [
      "$\\alpha+\\beta+\\gamma=0$",
      "$\\alpha+\\beta+\\gamma=1$",
      "$\\alpha\\beta\\gamma=1$",
      "$\\alpha^2+\\beta^2+\\gamma^2=1$"
    ],
    "answer": "B",
    "explanation": "The sum-to-one condition makes the combination transform consistently when the origin is translated."
  },
  {
    "prompt": "If $Q$ has orthonormal columns, which matrix is the orthogonal projection onto its column space?",
    "options": [
      "$Q^TQ$ as a map on the ambient space in every dimension",
      "$Q+Q^T$ in every dimension",
      "$QQ^T$",
      "$2QQ^T$"
    ],
    "answer": "C",
    "explanation": "The projection is $QQ^T$; $Q^TQ$ is the identity on the smaller coordinate space."
  },
  {
    "prompt": "A matrix has singular values $4,3,1$. What is the Frobenius error norm of its best rank-one approximation?",
    "options": [
      "$1$",
      "$3$",
      "$10$",
      "$\\sqrt{10}$"
    ],
    "answer": "D",
    "explanation": "Discarded singular values give squared error $3^2+1^2=10$, so the error norm is $\\sqrt{10}$."
  },
  {
    "prompt": "How many numbers are stored in $U_k$, the $k$ singular values, and $V_k$ for an $8\\times6$ matrix with $k=2$?",
    "options": [
      "$30$",
      "$16$",
      "$28$",
      "$48$"
    ],
    "answer": "A",
    "explanation": "The storage count is $k(m+n+1)=2(8+6+1)=30$."
  },
  {
    "prompt": "For $X\\in\\mathbb R^{20\\times3}$ and weights $w\\in\\mathbb R^3$, what is the dimension of the prediction vector $Xw$?",
    "options": [
      "$3$",
      "$20$",
      "$60$",
      "$23$"
    ],
    "answer": "B",
    "explanation": "Each of the twenty observations produces one prediction."
  },
  {
    "prompt": "Least squares fits $y\\approx a+bt$ to $(0,1),(1,2),(2,2)$. Which coefficients solve the normal equations?",
    "options": [
      "$a=1,\\ b=1$",
      "$a=5/3,\\ b=0$",
      "$a=7/6,\\ b=1/2$",
      "$a=1/2,\\ b=7/6$"
    ],
    "answer": "C",
    "explanation": "The equations are $3a+3b=5$ and $3a+5b=6$; subtraction gives $b=1/2$ and then $a=7/6$."
  },
  {
    "prompt": "If nonzero $z\\in\\ker X$, what can be concluded about weights $w$ and $w+z$?",
    "options": [
      "They must be equal",
      "Their predictions differ by $z$",
      "Only $w+z$ can minimize squared error",
      "They give identical predictions under $X$"
    ],
    "answer": "D",
    "explanation": "Because $Xz=0$, $X(w+z)=Xw$."
  },
  {
    "prompt": "When all weights are penalized, why does ridge regression with $\\lambda>0$ have unique weights even for rank-deficient $X$?",
    "options": [
      "$X^TX+\\lambda I$ is positive definite",
      "$X$ automatically becomes square",
      "Every residual becomes zero",
      "The penalty removes all data dependence"
    ],
    "answer": "A",
    "explanation": "For nonzero $v$, $v^T(X^TX+\\lambda I)v=\\|Xv\\|^2+\\lambda\\|v\\|^2>0$."
  },
  {
    "prompt": "Two dense layers have biases but no nonlinear activations. What kind of map is their composition?",
    "options": [
      "An arbitrary nonlinear map",
      "A single affine map",
      "Always an orthogonal map",
      "Always a constant map"
    ],
    "answer": "B",
    "explanation": "$W_2(W_1x+b_1)+b_2=(W_2W_1)x+(W_2b_1+b_2)$."
  },
  {
    "prompt": "For $W=\\begin{pmatrix}1&-1\\\\2&1\\end{pmatrix}$, $x=(1,2)^T$, and $b=(0,-1)^T$, what is $\\operatorname{ReLU}(Wx+b)$?",
    "options": [
      "$(-1,3)^T$",
      "$(0,4)^T$",
      "$(0,3)^T",
      "$(1,3)^T$"
    ],
    "answer": "C",
    "explanation": "$Wx+b=(-1,3)^T$, and ReLU replaces each negative component by zero."
  },
  {
    "prompt": "What is the cosine similarity of $x=(1,0)^T$ and $y=(2,2)^T$?",
    "options": [
      "$0$",
      "$1$",
      "$\\sqrt2$",
      "$1/\\sqrt2$"
    ],
    "answer": "D",
    "explanation": "The dot product is $2$, while the product of norms is $2\\sqrt2$."
  },
  {
    "prompt": "Which square change of coordinates preserves Euclidean dot products of all vector pairs?",
    "options": [
      "An orthogonal matrix $Q$ with $Q^TQ=I$",
      "Every invertible matrix",
      "Every diagonal matrix",
      "Every symmetric matrix"
    ],
    "answer": "A",
    "explanation": "$(Qx)^T(Qy)=x^TQ^TQy=x^Ty$."
  },
  {
    "prompt": "Project $(3,4)^T$ orthogonally onto the horizontal axis. What is the residual norm?",
    "options": [
      "$3$",
      "$4$",
      "$5$",
      "$7$"
    ],
    "answer": "B",
    "explanation": "The projection is $(3,0)^T$, leaving residual $(0,4)^T$."
  },
  {
    "prompt": "A linear network maps $\\mathbb R^3$ to $\\mathbb R^2$ and then to $\\mathbb R^4$. What upper bound follows for the rank of its composite matrix?",
    "options": [
      "$3$",
      "$4$",
      "$2$",
      "$6$"
    ],
    "answer": "C",
    "explanation": "The intermediate two-dimensional space bounds the rank of the product by two."
  },
  {
    "prompt": "When using centered features in a train/test evaluation, which procedure avoids using test information to fit preprocessing?",
    "options": [
      "Fit the mean on all training and test observations",
      "Choose the mean that minimizes test prediction error",
      "Refit the training mean after reading test labels",
      "Fit the mean on training data and reuse it for test data"
    ],
    "answer": "D",
    "explanation": "Preprocessing is fitted using the training set; the same fitted transformation is then applied to held-out observations."
  }
];


/** Numerical Linear Algebra: Iterative Solvers checkpoint (20 questions). */
export const LA_ITERATIVE_SOLVERS_QUIZ = [
  {
    "prompt": "What distinguishes a stationary iterative solver from a direct factorization?",
    "options": [
      "It repeatedly applies a fixed update rule to improve an approximate solution",
      "It always returns the exact solution in one step",
      "It must explicitly form the inverse matrix",
      "It can only solve diagonal systems"
    ],
    "answer": "A",
    "explanation": "A stationary method repeats the same iteration matrix and constant vector; accuracy is assessed using a stopping rule."
  },
  {
    "prompt": "In Jacobi iteration, which values are used for off-diagonal terms during a sweep?",
    "options": [
      "Only values updated earlier in the current sweep",
      "Only values from the previous iterate",
      "Exact solution values",
      "Only diagonal entries"
    ],
    "answer": "B",
    "explanation": "Jacobi reads every off-diagonal component from the previous iterate; writing updates into the same input array would change the method."
  },
  {
    "prompt": "In Gauss–Seidel iteration with rows processed from top to bottom, how is component i updated?",
    "options": [
      "All components come from the previous iterate",
      "All components come from the next iterate before it is computed",
      "Use new components j<i and old components j>i",
      "Set every off-diagonal term to zero"
    ],
    "answer": "C",
    "explanation": "Gauss–Seidel immediately reuses components already computed during the current sweep."
  },
  {
    "prompt": "Which condition is sufficient for both Jacobi and Gauss–Seidel convergence?",
    "options": [
      "Every diagonal entry is positive",
      "The determinant is nonzero",
      "The matrix is symmetric",
      "Strict row diagonal dominance"
    ],
    "answer": "D",
    "explanation": "Strict row diagonal dominance means |a_ii| exceeds the sum of the off-diagonal absolute values in each row. It is sufficient, not necessary."
  },
  {
    "prompt": "For x^(k+1)=Bx^(k)+c with a unique fixed point, convergence from every initial vector is equivalent to:",
    "options": [
      "The spectral radius rho(B) being less than 1",
      "The trace of B being positive",
      "Every entry of B being less than 1",
      "The determinant of B being nonzero"
    ],
    "answer": "A",
    "explanation": "The error evolves by e^(k+1)=Be^(k); B^k tends to zero exactly when every eigenvalue lies strictly inside the unit circle."
  },
  {
    "prompt": "Which claim about a real symmetric positive-definite matrix is correct?",
    "options": [
      "Both methods always terminate after n sweeps",
      "Gauss–Seidel converges, but Jacobi is not guaranteed to converge",
      "Jacobi always converges, but Gauss–Seidel cannot",
      "Neither method can converge"
    ],
    "answer": "B",
    "explanation": "Positive definiteness guarantees Gauss–Seidel convergence. For Jacobi, a separate convergence check is needed."
  },
  {
    "prompt": "Which SOR parameter gives exactly Gauss–Seidel?",
    "options": [
      "omega=0",
      "omega=2",
      "omega=1",
      "omega=-1"
    ],
    "answer": "C",
    "explanation": "At omega=1 the old-value weight vanishes and each SOR update equals the Gauss–Seidel update."
  },
  {
    "prompt": "For a real symmetric positive-definite matrix, which interval guarantees SOR convergence?",
    "options": [
      "omega>2",
      "omega<0",
      "Every real omega",
      "0<omega<2"
    ],
    "answer": "D",
    "explanation": "SOR converges for SPD matrices when 0<omega<2; this interval is not a sufficient guarantee for an arbitrary matrix."
  },
  {
    "prompt": "For 4x+y=1 and x+3y=2, Jacobi starting at (0,0) produces which first iterate?",
    "options": [
      "(1/4, 2/3)",
      "(1/4, 7/12)",
      "(1, 2)",
      "(1/11, 7/11)"
    ],
    "answer": "A",
    "explanation": "Jacobi uses x=0 and y=0 on the right of both update equations: x_new=1/4 and y_new=2/3."
  },
  {
    "prompt": "For the same system and initial vector, Gauss–Seidel updating x before y produces:",
    "options": [
      "(1/4, 2/3)",
      "(1/4, 7/12)",
      "(1/12, 7/12)",
      "(1/11, 7/11)"
    ],
    "answer": "B",
    "explanation": "First x_new=1/4; then y_new=(2-1/4)/3=7/12 using the new x value."
  },
  {
    "prompt": "For 4x+y=1 and x+3y=2, the second Jacobi iterate from (0,0) is:",
    "options": [
      "(1/4, 7/12)",
      "(5/48, 91/144)",
      "(1/12, 7/12)",
      "(1/4, 2/3)"
    ],
    "answer": "C",
    "explanation": "Apply the update to (1/4,2/3): x_new=(1-2/3)/4=1/12 and y_new=(2-1/4)/3=7/12."
  },
  {
    "prompt": "For that system, SOR with omega=6/5 from (0,0), updating x before y, gives:",
    "options": [
      "(1/4, 7/12)",
      "(3/10, 4/5)",
      "(1/5, 3/5)",
      "(3/10, 17/25)"
    ],
    "answer": "D",
    "explanation": "x_new=(6/5)(1/4)=3/10. Then y_new=(6/5)(2-3/10)/3=17/25."
  },
  {
    "prompt": "For A=[[4,1],[1,3]], b=(1,2), and x_hat=(1/4,2/3), what is b-A*x_hat?",
    "options": [
      "(-2/3, -1/4)",
      "(2/3, 1/4)",
      "(0, 0)",
      "(1/4, 2/3)"
    ],
    "answer": "A",
    "explanation": "A*x_hat=(5/3,9/4), so subtraction from b gives (-2/3,-1/4). The residual is not the iterate itself."
  },
  {
    "prompt": "Why is a small residual alone insufficient to guarantee a small solution error?",
    "options": [
      "Residuals cannot be computed for sparse matrices",
      "An ill-conditioned A can amplify residual error through its inverse",
      "A residual is always exactly zero",
      "The right-hand side must be positive"
    ],
    "answer": "B",
    "explanation": "If e=x_star-x_hat and r=b-A*x_hat, then Ae=r. A large inverse norm can amplify a small residual."
  },
  {
    "prompt": "For the positive-off-diagonal splitting A=D+L+U, the Jacobi iteration matrix is:",
    "options": [
      "D^(-1)(L+U)",
      "-(D+L)^(-1)U",
      "-D^(-1)(L+U)",
      "D+L+U"
    ],
    "answer": "C",
    "explanation": "Rearrange D*x_new=b-(L+U)*x_old. The minus sign follows from this explicitly chosen splitting convention."
  },
  {
    "prompt": "For A=D+L+U, the Gauss–Seidel iteration matrix is:",
    "options": [
      "-D^(-1)(L+U)",
      "D^(-1)L",
      "(D+U)^(-1)L",
      "-(D+L)^(-1)U"
    ],
    "answer": "D",
    "explanation": "Gauss–Seidel solves (D+L)*x_new=b-U*x_old; the matrix formula describes a triangular solve, not a recommendation to form an inverse."
  },
  {
    "prompt": "A matrix has a zero diagonal entry. What should happen before applying the usual component formulas?",
    "options": [
      "Reorder equations if possible and recheck convergence; otherwise use another method",
      "Divide by zero and continue",
      "Replace the zero by an arbitrary tiny number",
      "Assume the matrix is singular"
    ],
    "answer": "A",
    "explanation": "The formulas divide by a_ii. A zero diagonal does not itself prove singularity; a legitimate reordering must also reorder b and requires a fresh convergence check."
  },
  {
    "prompt": "What happens for Jacobi on A=[[1,2],[2,1]] from a general initial error?",
    "options": [
      "Convergence is guaranteed by invertibility",
      "Convergence from every initial error fails because rho(B)=2",
      "Convergence is guaranteed by positive entries",
      "It becomes the identity iteration matrix"
    ],
    "answer": "B",
    "explanation": "The Jacobi matrix [[0,-2],[-2,0]] has eigenvalues 2 and -2. Nonsingularity alone is not a convergence guarantee."
  },
  {
    "prompt": "Which implementation correctly preserves Jacobi semantics?",
    "options": [
      "Overwrite x_i immediately and reuse it in later rows",
      "Compute only the first row repeatedly",
      "Read from an old vector and write into a separate new vector",
      "Ignore all off-diagonal coefficients"
    ],
    "answer": "C",
    "explanation": "Two buffers keep every component update based on the same old iterate. Swap buffers after completing the sweep."
  },
  {
    "prompt": "Which stopping policy is most reliable for a practical iteration?",
    "options": [
      "Stop after exactly one sweep",
      "Stop only when consecutive vectors are bit-for-bit equal",
      "Use only an unscaled update difference for every problem",
      "Check a scaled residual with absolute tolerance, an iteration cap, and non-finite detection"
    ],
    "answer": "D",
    "explanation": "A residual criterion addresses the original equations; absolute tolerance handles zero or tiny b, and caps/non-finite checks prevent endless or invalid iterations."
  }
];


/** Numerical Linear Algebra: Eigenvalue Algorithms checkpoint (20 questions). */
export const LA_EIGENVALUE_ALGORITHMS_QUIZ = [
  {
    "prompt": "Under the standard diagonalizable-matrix assumptions, which eigenvalue does power iteration target?",
    "options": [
      "The eigenvalue of largest absolute value",
      "The smallest positive eigenvalue",
      "The eigenvalue closest to zero",
      "The sum of all eigenvalues"
    ],
    "answer": "A",
    "explanation": "A unique dominant magnitude controls repeated multiplication when the starting vector has a nonzero component in its eigenvector direction."
  },
  {
    "prompt": "Why normalize the vector after each power iteration?",
    "options": [
      "To change the eigenvalues",
      "To control scale while preserving the vector direction",
      "To force the eigenvalue to be positive",
      "To make every matrix symmetric"
    ],
    "answer": "B",
    "explanation": "Normalization controls growth or decay of the iterate without changing its direction; it does not create a missing spectral gap."
  },
  {
    "prompt": "For $A=\\operatorname{diag}(5,2)$ and starting vector $(1,1)^T$, what is the first unit-length power iterate?",
    "options": [
      "$ (1,1)^T/\\sqrt{2}$",
      "$ (2,5)^T/\\sqrt{29}$",
      "$ (5,2)^T/\\sqrt{29}$",
      "$ (5,2)^T/7$"
    ],
    "answer": "C",
    "explanation": "Multiplication gives (5,2). Its Euclidean norm is the square root of 25+4, so divide by sqrt(29)."
  },
  {
    "prompt": "For $A=\\operatorname{diag}(5,2)$ and $x=(5,2)^T$, what is the Rayleigh quotient?",
    "options": [
      "$7$",
      "$29/133$",
      "$5$",
      "$133/29$"
    ],
    "answer": "D",
    "explanation": "The numerator x^T A x is 5·25+2·4=133 and x^T x=29. The quotient is unchanged if x is normalized."
  },
  {
    "prompt": "With a unique dominant eigenvalue, the asymptotic directional convergence factor of basic power iteration is typically governed by which ratio?",
    "options": [
      "$|\\lambda_2/\\lambda_1|$",
      "$|\\lambda_1/\\lambda_2|$",
      "$|\\lambda_1+\\lambda_2|$",
      "$|\\det A|$"
    ],
    "answer": "A",
    "explanation": "For a diagonalizable matrix ordered by decreasing eigenvalue magnitude, subdominant eigenvector coefficients shrink relative to the dominant coefficient by powers of this ratio."
  },
  {
    "prompt": "For $A=\\operatorname{diag}(5,2)$, what happens in exact arithmetic if the starting vector is $(0,1)^T$?",
    "options": [
      "It immediately becomes (1,0)",
      "It remains in the eigenvalue-2 direction",
      "It returns the dominant eigenvalue 5 after two steps",
      "It becomes a zero vector"
    ],
    "answer": "B",
    "explanation": "The starting vector has zero component in the dominant direction; multiplication and normalization cannot create that component in exact arithmetic."
  },
  {
    "prompt": "What can happen to normalized power iterates when the unique dominant eigenvalue is negative?",
    "options": [
      "Their norms must diverge",
      "The eigenvalue becomes positive",
      "Their signs can alternate while the eigenvector line converges",
      "The matrix becomes singular"
    ],
    "answer": "C",
    "explanation": "A negative dominant eigenvalue reverses orientation each multiplication. The limiting line and the Rayleigh quotient can converge despite sign alternation."
  },
  {
    "prompt": "Which quantity directly checks a proposed eigenpair $(\\mu,x)$?",
    "options": [
      "$\\|x\\|$ alone",
      "$\\operatorname{tr}(A)$ alone",
      "$\\|A\\|$ alone",
      "$\\|Ax-\\mu x\\|$"
    ],
    "answer": "D",
    "explanation": "The eigenpair residual measures the defect in the defining equation. Its magnitude must be interpreted relative to the vector and matrix scale."
  },
  {
    "prompt": "For $A=\\operatorname{diag}(3,-3)$ and $x_0=(1,1)^T$, why can basic power iteration fail to settle to one eigenvector line?",
    "options": [
      "The two eigenvalues have equal dominant magnitude",
      "The matrix has no eigenvectors",
      "The determinant is zero",
      "The starting vector has zero norm"
    ],
    "answer": "A",
    "explanation": "The two components retain equal magnitude and their relative sign alternates, so the usual unique-dominant-magnitude condition fails."
  },
  {
    "prompt": "If $Ax_k=0$ during power iteration, what is the correct next action?",
    "options": [
      "Divide by its norm anyway",
      "Handle the zero product explicitly before normalization",
      "Replace the eigenvalue with infinity",
      "Report convergence to the largest eigenvalue"
    ],
    "answer": "B",
    "explanation": "Normalizing a zero vector is undefined. A nonzero x_k in the nullspace identifies a zero eigenpair, but not necessarily a dominant one; restart or report that limitation."
  },
  {
    "prompt": "If $A_k=Q_kR_k$ is an unshifted QR factorization, which update is correct?",
    "options": [
      "$A_{k+1}=Q_kR_k$",
      "$A_{k+1}=R_kQ_k^T$",
      "$A_{k+1}=R_kQ_k$",
      "$A_{k+1}=Q_k+R_k$"
    ],
    "answer": "C",
    "explanation": "Reversing the factors yields RQ=Q^T A_k Q for real orthogonal Q, a similarity transformation."
  },
  {
    "prompt": "Why does a QR step preserve the eigenvalues in exact arithmetic?",
    "options": [
      "It preserves every matrix entry",
      "R has the same diagonal as A",
      "Q is always the identity",
      "The new iterate is orthogonally similar to the old one"
    ],
    "answer": "D",
    "explanation": "The relation A_{k+1}=Q_k^T A_k Q_k is a similarity, so the characteristic polynomial and eigenvalues are unchanged."
  },
  {
    "prompt": "For $A=\\begin{pmatrix}2&1\\\\1&2\\end{pmatrix}$ and a QR factorization with positive diagonal entries of R, what is the first unshifted QR iterate?",
    "options": [
      "$\\begin{pmatrix}14/5&3/5\\\\3/5&6/5\\end{pmatrix}$",
      "$\\begin{pmatrix}3&0\\\\0&1\\end{pmatrix}$",
      "$\\begin{pmatrix}2&-1\\\\-1&2\\end{pmatrix}$",
      "$\\begin{pmatrix}1&2\\\\2&1\\end{pmatrix}$"
    ],
    "answer": "A",
    "explanation": "Using Q=[2,-1;1,2]/sqrt(5) and R=[sqrt(5),4/sqrt(5);0,3/sqrt(5)], multiplication RQ gives the stated matrix."
  },
  {
    "prompt": "For that first QR iterate, which trace and determinant provide a consistency check?",
    "options": [
      "Trace 3 and determinant 4",
      "Trace 4 and determinant 3",
      "Trace 4 and determinant 4",
      "Trace 3 and determinant 3"
    ],
    "answer": "B",
    "explanation": "Similarity preserves trace and determinant: 14/5+6/5=4, and (84-9)/25=3."
  },
  {
    "prompt": "In shifted QR, after factoring $A_k-\\mu_kI=Q_kR_k$, which update restores the original eigenvalue scale?",
    "options": [
      "$A_{k+1}=R_kQ_k-\\mu_kI$",
      "$A_{k+1}=Q_kR_k+2\\mu_kI$",
      "$A_{k+1}=R_kQ_k+\\mu_kI$",
      "$A_{k+1}=R_k+Q_k$"
    ],
    "answer": "C",
    "explanation": "Adding the shift back gives Q_k^T A_k Q_k. Omitting it shifts the spectrum of the iterate."
  },
  {
    "prompt": "What does numerical deflation mean in a symmetric tridiagonal QR computation?",
    "options": [
      "Deleting the largest diagonal entry immediately",
      "Setting every off-diagonal entry to zero at the start",
      "Subtracting the trace from all entries",
      "Treating a sufficiently small subdiagonal coupling as zero and splitting the problem"
    ],
    "answer": "D",
    "explanation": "Once the coupling is negligible relative to the local scale and tolerance, the matrix separates into smaller independent blocks up to the accepted perturbation."
  },
  {
    "prompt": "What form can a real nonsymmetric matrix reach in a real Schur computation?",
    "options": [
      "Upper quasi-triangular form with 1-by-1 and 2-by-2 diagonal blocks",
      "A diagonal matrix with only real entries in every case",
      "A lower triangular matrix with zero diagonal in every case",
      "The identity matrix in every case"
    ],
    "answer": "A",
    "explanation": "Real 2-by-2 blocks can represent complex conjugate eigenvalue pairs; full real diagonalization is not generally possible."
  },
  {
    "prompt": "For a general real nonsymmetric matrix, what are the columns of the accumulated orthogonal Q in a Schur decomposition?",
    "options": [
      "Always all individual eigenvectors",
      "Schur vectors, not necessarily individual eigenvectors",
      "The rows of the inverse matrix",
      "All zero vectors"
    ],
    "answer": "B",
    "explanation": "A=QTQ^T defines Schur vectors. Eigenvectors generally require solving the triangular or block-triangular problem and transforming back."
  },
  {
    "prompt": "Which approach is normally appropriate when only one dominant eigenpair of a very large sparse matrix is needed?",
    "options": [
      "Form the dense inverse first",
      "Expand the characteristic polynomial explicitly",
      "Use matrix-vector iterations and check residual convergence",
      "Perform dense QR factorizations without considering sparsity"
    ],
    "answer": "C",
    "explanation": "Power iteration uses sparse matrix-vector products and limited vector storage when its convergence assumptions hold. More advanced Krylov methods are alternatives when needed."
  },
  {
    "prompt": "For real symmetric A and nonzero x, what does the residual guarantee about the Rayleigh estimate $\\mu$?",
    "options": [
      "Every eigenvector is close to x",
      "The largest eigenvalue is exactly mu",
      "The matrix condition number is one",
      "Some eigenvalue lies within $\\|Ax-\\mu x\\|_2/\\|x\\|_2$ of mu"
    ],
    "answer": "D",
    "explanation": "Expand x in an orthonormal eigenbasis to bound the distance to the nearest eigenvalue. Closeness to a specific eigenvector additionally depends on spectral separation."
  }
];


/** LA_DUAL_SPACES_QUIZ: 20 topic checkpoint questions. */
export const LA_DUAL_SPACES_QUIZ = [{"prompt": "What is a linear functional on V over $\\mathbb F$?", "options": ["A linear map $V\\to\\mathbb F$", "Any map $V\\to V$", "A basis vector only", "A constant nonzero map"], "answer": "A", "explanation": "A functional is a scalar-valued linear map; both the domain and codomain matter."},
  {"prompt": "Which function on $\\mathbb R^2$ is linear?", "options": ["$2x-3y+1$", "$2x-3y$", "$xy$", "$x^2+y^2$"], "answer": "B", "explanation": "A homogeneous weighted sum preserves addition and scalar multiplication; the other rules do not."},
  {"prompt": "If $\\dim V=5$, what is $\\dim V^*$?", "options": ["$1$", "$10$", "$5$", "$25$"], "answer": "C", "explanation": "The dual basis has exactly one coordinate functional per original basis vector."},
  {"prompt": "What defines the dual basis relation?", "options": ["$\\varepsilon^i(v_j)=1$ for every i,j", "$\\varepsilon^i(v_j)=0$ for every i,j", "$\\varepsilon^i=v_i$ without additional choices", "$\\varepsilon^i(v_j)=\\delta_{ij}$"], "answer": "D", "explanation": "The Kronecker delta is one for matching indices and zero otherwise."},
  {"prompt": "For $v=3v_1-2v_2$, what is $\\varepsilon^2(v)$?", "options": ["$-2$", "$3$", "$2$", "$1$"], "answer": "A", "explanation": "A dual basis functional extracts its corresponding coordinate, including its sign."},
  {"prompt": "If S contains basis vectors as columns, where are the dual basis row functionals?", "options": ["The columns of S", "The rows of $S^{-1}$", "The rows of $S^T S$", "The diagonal entries of S"], "answer": "B", "explanation": "Their matrix D must satisfy DS=I, so D is the inverse matrix."},
  {"prompt": "For the basis $(1,1),(1,-1)$, what is the first dual functional?", "options": ["$x+y$", "$(x-y)/2$", "$(x+y)/2$", "$y-x$"], "answer": "C", "explanation": "It evaluates to one on (1,1) and zero on (1,-1)."},
  {"prompt": "For that basis, what are the coordinates of $(5,1)$?", "options": ["$(5,1)$", "$(2,3)$", "$(6,4)$", "$(3,2)$"], "answer": "D", "explanation": "Applying (x+y)/2 and (x-y)/2 gives 3 and 2; reconstruction verifies the result."},
  {"prompt": "What is the dimension of the kernel of a nonzero functional on $\\mathbb R^4$?", "options": ["$3$", "$0$", "$1$", "$4$"], "answer": "A", "explanation": "A nonzero scalar-valued map has rank one, so rank-nullity gives 4-1=3."},
  {"prompt": "Which statement about testing linearity is correct?", "options": ["$\\varphi(0)=0$ always proves linearity", "$\\varphi(0)=0$ is necessary but not sufficient", "Every scalar-valued function is linear", "Every polynomial function is linear"], "answer": "B", "explanation": "The function x squared vanishes at zero but fails additivity, providing a counterexample."},
  {"prompt": "For $T:V\\to W$, which direction does the dual map have?", "options": ["$T^*:V\\to W$", "$T^*:V^*\\to W^*$", "$T^*:W^*\\to V^*$", "$T^*:W\\to V$"], "answer": "C", "explanation": "A functional on W is pulled back by composing with T to give a functional on V."},
  {"prompt": "If A represents T, which matrix represents its algebraic dual in dual bases?", "options": ["$A^{-1}$ in every case", "$A^2$", "$A^T A$", "$A^T$"], "answer": "D", "explanation": "The row evaluation beta^T A x equals (A^T beta)^T x; no inverse is needed."},
  {"prompt": "If $T(x,y)=(x+2y,3y)$ and $\\psi(s,t)=s-t$, what is $T^*\\psi$?", "options": ["$x-y$", "$x+5y$", "$3x-y$", "$x+2y$"], "answer": "A", "explanation": "Composition gives (x+2y)-3y=x-y."},
  {"prompt": "What is $U^\\circ$?", "options": ["The vectors with norm one in U", "The functionals vanishing on every vector of U", "The image of U under every map", "The union of all bases of U"], "answer": "B", "explanation": "An annihilator is a subspace of the dual, defined by homogeneous evaluation constraints."},
  {"prompt": "If $\\dim V=7$ and $\\dim U=3$, what is $\\dim U^\\circ$?", "options": ["$3$", "$7$", "$4$", "$21$"], "answer": "C", "explanation": "In finite dimensions the annihilator dimension is dim V minus dim U."},
  {"prompt": "Which functional annihilates both $(1,1,0)$ and $(0,1,1)$?", "options": ["$x+y+z$", "$x-y-z$", "$x+y-z$", "$x-y+z$"], "answer": "D", "explanation": "Both evaluations are zero: 1-1+0=0 and 0-1+1=0."},
  {"prompt": "For $p(t)=a+bt+ct^2$, which functional extracts c?", "options": ["$p\\prime\\prime(0)/2$", "$p(0)$", "$p\\prime(0)$", "$p\\prime\\prime(0)$"], "answer": "A", "explanation": "The second derivative is 2c; division by two is required for the dual pairing."},
  {"prompt": "If the new basis matrix is SC and functional coordinates are columns, how do they change?", "options": ["$a_{new}=C^{-1}a_{old}$", "$a_{new}=C^Ta_{old}$", "$a_{new}=Ca_{old}$ in every case", "$a_{new}=a_{old}$ in every case"], "answer": "B", "explanation": "The pairing remains invariant because vector coordinates change by C inverse and functional coordinates by C transpose."},
  {"prompt": "What is the canonical map $J:V\\to V^{**}$?", "options": ["$J(v)=0$ for every v", "$J(v)(\\varphi)=\\|v\\|$ regardless of phi", "$J(v)(\\varphi)=\\varphi(v)$", "$J(v)=v^T$ without a basis"], "answer": "C", "explanation": "A vector acts on functionals by evaluation; this definition does not require a chosen basis."},
  {"prompt": "Which statement correctly distinguishes the algebraic dual over complex scalars?", "options": ["Every algebraic functional must conjugate its input", "The algebraic dual is always the zero space", "The algebraic dual map always has matrix A inverse", "Its coordinate pairing is bilinear and uses transpose without conjugation"], "answer": "D", "explanation": "Complex-linear functionals preserve complex scalar multiplication; Hermitian inner-product representations involve a separate conjugation convention."}];


/** LA_TENSOR_PRODUCTS_QUIZ: 20 topic checkpoint questions. */
export const LA_TENSOR_PRODUCTS_QUIZ = [{"prompt": "If $\\dim V=2$ and $\\dim W=3$, what is $\\dim(V\\otimes W)$?", "options": ["$6$", "$5$", "$2$", "$9$"], "answer": "A", "explanation": "The product basis has one element for each ordered pair of basis indices, so dimensions multiply."},
  {"prompt": "What does bilinear mean?", "options": ["Linear in neither argument", "Linear in each argument separately when the other is fixed", "Constant in the second argument", "Linear in the pair only if both change together"], "answer": "B", "explanation": "Separate linearity gives the defining distributive and scalar relations of the tensor product."},
  {"prompt": "Which expansion is valid?", "options": ["$(u+v)\\otimes w=u\\otimes v+w$", "$(u+v)\\otimes w=u\\otimes w$", "$(u+v)\\otimes w=u\\otimes w+v\\otimes w$", "$(u+v)\\otimes w=0$ in every case"], "answer": "C", "explanation": "Tensor multiplication is additive in each argument, so both terms must remain."},
  {"prompt": "What is $(2u)\\otimes(3v)$?", "options": ["$5(u\\otimes v)$", "$2(u\\otimes v)$", "$3(u\\otimes v)$", "$6(u\\otimes v)$"], "answer": "D", "explanation": "Scalar factors in the two arguments multiply by bilinearity."},
  {"prompt": "What does the universal property provide for a bilinear map b?", "options": ["A unique linear map on the tensor product agreeing with b on pure tensors", "An inverse matrix for every b", "A unique inner product on V", "A rule making every tensor pure"], "answer": "A", "explanation": "The tensor product linearizes a bilinear map while respecting all bilinear relations."},
  {"prompt": "Which statement about general tensors in a two-factor product is correct?", "options": ["Every tensor is pure", "They are sums of pure tensors, but need not be pure", "Only the zero tensor is pure", "Pure tensors cannot be added"], "answer": "B", "explanation": "A coefficient matrix of rank two supplies a tensor that cannot be one rank-one outer product."},
  {"prompt": "What is $(1,2)^T\\otimes(3,-1)^T$ with the second factor index varying fastest?", "options": ["$(3,6,-1,-2)^T", "$(4,1)^T", "$(3,-1,6,-2)^T", "$(3,-2)^T"], "answer": "C", "explanation": "Multiply each entry of the first vector by the complete second vector in order."},
  {"prompt": "If A is $2\\times3$ and B is $4\\times2$, what size is $A\\otimes B$?", "options": ["$6\\times8$", "$2\\times2$", "$4\\times5$", "$8\\times6$"], "answer": "D", "explanation": "The number of rows and columns multiply separately: 2·4 rows and 3·2 columns."},
  {"prompt": "What is block (i,j) of $A\\otimes B$?", "options": ["$a_{ij}B$", "$AB$ in every block", "$b_{ij}A$ in every block", "$a_{ij}+B$"], "answer": "A", "explanation": "The Kronecker construction replaces each scalar entry of A with a scaled copy of B."},
  {"prompt": "For compatible dimensions, what is $(A\\otimes B)(C\\otimes D)$?", "options": ["$(AB)\\otimes(CD)$", "$(AC)\\otimes(BD)$", "$(CA)\\otimes(DB)$ in every case", "$(A+C)\\otimes(B+D)$"], "answer": "B", "explanation": "The two factors act independently on the respective tensor coordinates."},
  {"prompt": "Which transpose identity is correct?", "options": ["$(A\\otimes B)^T=B^T\\otimes A^T$ in every case", "$(A\\otimes B)^T=A\\otimes B$ in every case", "$(A\\otimes B)^T=A^T\\otimes B^T$", "$(A\\otimes B)^T=A^T+B^T$"], "answer": "C", "explanation": "Transpose preserves the order of the Kronecker factors while transposing each one."},
  {"prompt": "For square invertible A and B, what is $(A\\otimes B)^{-1}$?", "options": ["$A\\otimes B$", "$B^{-1}\\otimes A^{-1}$ in every case", "$A^{-1}+B^{-1}$", "$A^{-1}\\otimes B^{-1}$"], "answer": "D", "explanation": "The mixed-product identity verifies that multiplication by the stated matrix gives I tensor I."},
  {"prompt": "If A has rank 2 and B has rank 3, what is the rank of $A\\otimes B$?", "options": ["$6$", "$5$", "$3$", "$1$"], "answer": "A", "explanation": "Kronecker ranks multiply, including when rectangular factors are used."},
  {"prompt": "For two-by-two A and three-by-three B, what is $\\det(A\\otimes B)$?", "options": ["$\\det(A)^2\\det(B)^3$", "$\\det(A)^3\\det(B)^2$", "$\\det(A)+\\det(B)$", "$\\det(A)\\det(B)$ in every case"], "answer": "B", "explanation": "Each determinant is raised to the size of the other square factor."},
  {"prompt": "If $Av=2v$ and $Bw=-3w$ with nonzero v,w, what eigenvalue belongs to $v\\otimes w$?", "options": ["$-1$", "$6$", "$-6$", "$5$"], "answer": "C", "explanation": "Applying the tensor product map multiplies the two eigenvalue scalars."},
  {"prompt": "Under column stacking, which vectorization identity is correct?", "options": ["$\\operatorname{vec}(AXB)=(B\\otimes A)\\operatorname{vec}(X)$ in every case", "$\\operatorname{vec}(AXB)=(A\\otimes B)\\operatorname{vec}(X)$ in every case", "$\\operatorname{vec}(AXB)=\\operatorname{vec}(X)$ in every case", "$\\operatorname{vec}(AXB)=(B^T\\otimes A)\\operatorname{vec}(X)$"], "answer": "D", "explanation": "The columns mix according to B, producing B transpose in the vectorized operator."},
  {"prompt": "What is the column-stacked vector of $X=\\begin{pmatrix}1&3\\\\2&4\\end{pmatrix}$?", "options": ["$(1,2,3,4)^T", "$(1,3,2,4)^T", "$(4,3,2,1)^T", "$(1,4,2,3)^T"], "answer": "A", "explanation": "Read the first column completely, then the second column."},
  {"prompt": "For column vectors u and v, what is $\\operatorname{vec}(uv^T)$?", "options": ["$u\\otimes v$ in every case", "$v\\otimes u$", "$u+v$", "$u^Tv$"], "answer": "B", "explanation": "Each column of the outer product is u scaled by the corresponding entry of v, fixing the order."},
  {"prompt": "Why is $e_1\\otimes f_1+e_2\\otimes f_2$ not pure in the standard two-dimensional bases?", "options": ["Its coefficient matrix has rank one", "It has no coefficient matrix", "Its coefficient matrix has rank two", "It is the zero tensor"], "answer": "C", "explanation": "A nonzero pure tensor has an outer-product coefficient matrix of rank one, unlike the identity matrix."},
  {"prompt": "If the factors have eigenvalues $\\lambda$ and $\\mu$ on v and w, what eigenvalue does $A\\otimes I+I\\otimes B$ have on $v\\otimes w$?", "options": ["$\\lambda\\mu$", "$\\lambda-\\mu$", "$0$ in every case", "$\\lambda+\\mu$"], "answer": "D", "explanation": "The two summands contribute lambda and mu times the same tensor vector, so the scalars add."}];


/** Spectral Graph Theory: 20 checkpoint questions. */
export const LA_SPECTRAL_GRAPH_QUIZ = [{"prompt": "For an undirected weighted graph, what is the combinatorial Laplacian?", "options": ["$D-A$", "$D+A$", "$A-D$", "$DA$"], "answer": "A", "explanation": "The diagonal is weighted degree and off-diagonal entries are negative edge weights."},
  {"prompt": "What is the sum of any row of L?", "options": ["$1$", "$0$", "$n$", "$-1$"], "answer": "B", "explanation": "The diagonal degree cancels the sum of the adjacent weights."},
  {"prompt": "Which vector is always in the kernel of the combinatorial Laplacian?", "options": ["Every coordinate vector", "Every vector orthogonal to $\\mathbf1$", "$\\mathbf1$", "The degree vector in every graph"], "answer": "C", "explanation": "Multiplying by the all-ones vector computes row sums, which are zero."},
  {"prompt": "Which energy formula counts each undirected edge once?", "options": ["$\\sum_{i<j}w_{ij}(x_i+x_j)^2$", "$\\sum_{i<j}w_{ij}x_i x_j$", "$2\\sum_{i<j}w_{ij}(x_i-x_j)^2$", "$\\sum_{i<j}w_{ij}(x_i-x_j)^2$"], "answer": "D", "explanation": "The expansion equals x transpose L x; summing over i less than j counts each edge once."},
  {"prompt": "Why is L positive semidefinite for nonnegative undirected weights?", "options": ["Its quadratic form is a sum of nonnegative weighted squares", "Its determinant is always positive", "All of its entries are nonnegative", "It is always invertible"], "answer": "A", "explanation": "The edge-energy representation proves nonnegativity for every real vector."},
  {"prompt": "A graph has four connected components. What is the multiplicity of eigenvalue zero of L?", "options": ["$1$", "$4$", "$0$", "$8$"], "answer": "B", "explanation": "Kernel vectors are constant independently on each component, giving one degree of freedom per component."},
  {"prompt": "A graph has 9 vertices and 3 components. What is rank(L)?", "options": ["$3$", "$9$", "$6$", "$12$"], "answer": "C", "explanation": "The kernel dimension is three, so rank-nullity gives nine minus three."},
  {"prompt": "For a graph with at least two vertices, which condition characterizes connectedness?", "options": ["$\\lambda_1(L)>0$", "$\\operatorname{tr}(L)=0$", "$L=I$", "$\\lambda_2(L)>0$"], "answer": "D", "explanation": "There is exactly one zero eigenvalue when the undirected graph is connected."},
  {"prompt": "What is a Fiedler vector?", "options": ["An eigenvector of L for its second-smallest eigenvalue", "An eigenvector for the trace", "Every constant vector", "A vector of all edge weights"], "answer": "A", "explanation": "It realizes the relaxed nonconstant minimum-energy direction."},
  {"prompt": "Which constraint removes the constant direction in the Rayleigh characterization of lambda2?", "options": ["$x=\\mathbf1$", "$x^T\\mathbf1=0$", "$x^Tx=0$", "$L=0$"], "answer": "B", "explanation": "Orthogonality excludes the always-zero-energy constant signal while retaining nonzero candidates."},
  {"prompt": "For the unit-weight three-vertex path, what is the Laplacian spectrum?", "options": ["$1,2,3$", "$0,0,2$", "$0,1,3$", "$0,3,3$"], "answer": "C", "explanation": "The constant, antisymmetric and alternating vectors give eigenvalues zero, one and three."},
  {"prompt": "For a single edge plus an isolated vertex, what is the Laplacian spectrum?", "options": ["$0,1,3$", "$1,1,1$", "$0,2,2$", "$0,0,2$"], "answer": "D", "explanation": "The edge block has eigenvalues zero and two; the isolated vertex supplies another zero."},
  {"prompt": "For two vertices joined by an edge of weight 3, what is lambda2?", "options": ["$6$", "$3$", "$0$", "$9$"], "answer": "A", "explanation": "The matrix [3,-3;-3,3] has eigenvalues zero and six."},
  {"prompt": "For that weighted edge and signal (2,-1), what is the energy?", "options": ["$9$", "$27$", "$54$", "$3$"], "answer": "B", "explanation": "The weighted squared difference is 3 times 3 squared."},
  {"prompt": "Adding a nonnegative undirected edge can have what effect on combinatorial algebraic connectivity?", "options": ["It must always double it", "It must decrease it", "It cannot decrease it", "It always leaves it unchanged"], "answer": "C", "explanation": "The new edge adds a positive semidefinite quadratic form to the Rayleigh minimization."},
  {"prompt": "What does the energy of a zero-one cut indicator equal?", "options": ["The total degree of every vertex", "The number of all vertex pairs", "The square of the graph diameter", "The total weight of edges crossing the cut"], "answer": "D", "explanation": "Only edges whose endpoints have different indicator values contribute one times their weight."},
  {"prompt": "On a connected graph with positive degrees, which vector is a normalized-Laplacian null vector?", "options": ["$D^{1/2}\\mathbf1$", "$D^{-1}\\mathbf1$ in every case", "$\\mathbf1$ in every case", "$D\\mathbf1$ in every case"], "answer": "A", "explanation": "Multiplying D inverse square root L D inverse square root by D square root times one reduces to L one."},
  {"prompt": "Under the zero-inverse-degree convention, what normalized-Laplacian row belongs to an isolated vertex?", "options": ["A row with diagonal one", "A zero row", "A row of negative ones", "An undefined row that must be divided by zero"], "answer": "B", "explanation": "Using zero in D inverse square root preserves a zero isolated row; the I-minus formula needs care there."},
  {"prompt": "What is the normalized spectrum of the three-vertex path?", "options": ["$0,1,3$", "$0,0,2$", "$0,1,2$", "$1,2,3$"], "answer": "C", "explanation": "Normalization gives zero, one and two, within the normalized spectral interval."},
  {"prompt": "What limitation should be stated when thresholding a Fiedler vector?", "options": ["It always gives every exact minimum cut", "Its coordinates are always nonzero", "Its eigenvalue is always simple", "It is a relaxed partition heuristic and ties need handling"], "answer": "D", "explanation": "Repeated eigenvalues and zero or tied coordinates prevent a unique universal partition rule."}];


/** Matrix Calculus: 20 checkpoint questions. */
export const LA_MATRIX_CALCULUS_QUIZ = [{"prompt": "Under the column-gradient convention, what is the shape of the gradient of a scalar function on R^n?", "options": ["$n\\times1$", "$1\\times n$", "$n\\times n$", "$1\\times1$"], "answer": "A", "explanation": "The differential is gradient transpose times the input perturbation."},
  {"prompt": "For g:R^n to R^m, what shape is the output-by-input Jacobian?", "options": ["$n\\times m$", "$m\\times n$", "$n\\times n$", "$m\\times m$"], "answer": "B", "explanation": "Rows index outputs and columns index inputs."},
  {"prompt": "What is the gradient of $a^Tx$?", "options": ["$x$", "$2a$", "$a$", "$a^Tx$"], "answer": "C", "explanation": "The differential is a transpose times dx, so the column gradient is a."},
  {"prompt": "For constant A, what is the gradient of $x^TAx$?", "options": ["$Ax$ in every case", "$2Ax$ in every case", "$A^TAx$", "$(A+A^T)x$"], "answer": "D", "explanation": "Both occurrences of x contribute; symmetry is required for the simplification to 2Ax."},
  {"prompt": "If A is symmetric, what is the gradient of $\\frac12x^TAx$?", "options": ["$Ax$", "$2Ax$", "$A^Tx/2$", "$x^TAx$"], "answer": "A", "explanation": "The one-half cancels the factor two from differentiating the symmetric quadratic."},
  {"prompt": "What is the gradient with respect to x of $x^TAy$ when y is independent of x?", "options": ["$A^Tx$", "$Ay$", "$Ax$", "$A^Ty$ in every case"], "answer": "B", "explanation": "With y held fixed, the scalar is linear in x with coefficient Ay."},
  {"prompt": "What is the gradient of $\\frac12\\|Ax-b\\|_2^2$?", "options": ["$Ax-b$ in every case", "$A(Ax-b)$ in every case", "$A^T(Ax-b)$", "$A^Tb$"], "answer": "C", "explanation": "The chain rule pulls the residual back through the transpose of A."},
  {"prompt": "When is the least-squares Hessian A transpose A positive definite?", "options": ["Whenever A has more than one row", "Only when A is square", "Whenever b is nonzero", "When A has full column rank"], "answer": "D", "explanation": "Its quadratic form is the squared norm of Ax, positive for all nonzero x exactly when the kernel is zero."},
  {"prompt": "What does adding $\\frac\\lambda2\\|x\\|^2$ add to the gradient?", "options": ["$\\lambda x$", "$\\lambda I$", "$2\\lambda x$", "$\\lambda$"], "answer": "A", "explanation": "The Hessian receives lambda I, but the gradient receives the vector lambda x."},
  {"prompt": "For scalar f and vector g, which chain rule matches column gradients?", "options": ["$\\nabla(f\\circ g)=J_g\\nabla f$ in every case", "$\\nabla(f\\circ g)=J_g^T\\nabla f$", "$\\nabla(f\\circ g)=\\nabla f+J_g$", "$\\nabla(f\\circ g)=J_g^{-1}\\nabla f$ in every case"], "answer": "B", "explanation": "The transpose has the dimensions needed to map an output gradient into the input space."},
  {"prompt": "Which differential defines the Frobenius matrix gradient G?", "options": ["$df=\\operatorname{tr}(G+dX)$", "$df=G^{-1}dX$", "$df=\\operatorname{tr}(G^TdX)$", "$df=\\det(GdX)$"], "answer": "C", "explanation": "The Frobenius inner product between G and the perturbation is trace G transpose dX."},
  {"prompt": "What is the matrix gradient of $\\operatorname{tr}(A^TX)$?", "options": ["$A^T$ in every case", "$X$", "$AX$", "$A$"], "answer": "D", "explanation": "Matching the differential to trace G transpose dX identifies G as A."},
  {"prompt": "What is the matrix gradient of $\\frac12\\|X\\|_F^2$?", "options": ["$X$", "$2X$", "$X^T$ in every case", "$I$"], "answer": "A", "explanation": "This is the sum of one-half times each independent entry squared."},
  {"prompt": "What is the gradient of $\\frac12\\|AX-B\\|_F^2$ with respect to X?", "options": ["$(AX-B)A^T$ in every case", "$A^T(AX-B)$", "$AX-B$ in every case", "$A^TB$"], "answer": "B", "explanation": "The trace differential yields the transpose of A multiplying the residual on the left."},
  {"prompt": "What is the differential of the inverse at invertible X?", "options": ["$X^{-1}(dX)X^{-1}$", "$-(dX)^{-1}$", "$-X^{-1}(dX)X^{-1}$", "$-X^{-2}dX$ in every case"], "answer": "C", "explanation": "Differentiate X times X inverse equals I and preserve multiplication order."},
  {"prompt": "For symmetric positive-definite X, what is the gradient of $\\log\\det X$?", "options": ["$X$", "$\\det(X)I$", "$-X^{-1}$", "$X^{-1}$"], "answer": "D", "explanation": "The differential is trace X inverse dX, and inverse transpose equals inverse on the symmetric domain."},
  {"prompt": "For $f(x,y)=3x^2+2xy+4y^2$, what is the gradient at (1,-1)?", "options": ["$(4,-6)^T", "$(6,-8)^T", "$(8,-10)^T", "$(4,6)^T"], "answer": "A", "explanation": "Substitution into (6x+2y,2x+8y) gives (4,-6)."},
  {"prompt": "For $g(x,y)=(x^2y,x+3y)$, what is the Jacobian at (1,2)?", "options": ["$\\begin{pmatrix}2&1\\\\3&1\\end{pmatrix}$", "$\\begin{pmatrix}4&1\\\\1&3\\end{pmatrix}$", "$\\begin{pmatrix}1&4\\\\3&1\\end{pmatrix}$", "$\\begin{pmatrix}4&2\\\\0&3\\end{pmatrix}$"], "answer": "B", "explanation": "Differentiate each output with respect to x and y in column order."},
  {"prompt": "At $X=\\operatorname{diag}(2,3)$, what is the directional derivative of log det in direction diag(1,-1)?", "options": ["$5/6$", "$-1/6$", "$1/6$", "$6$"], "answer": "C", "explanation": "The trace pairing is 1/2 minus 1/3."},
  {"prompt": "What is a useful numerical gradient check?", "options": ["Compare the gradient with the objective value only", "Set the perturbation to a singular inverse", "Ignore the domain and use any step size", "Compare a central directional difference with the gradient inner product"], "answer": "D", "explanation": "Directional finite differences test the differential convention; too small a step can amplify roundoff."}];
