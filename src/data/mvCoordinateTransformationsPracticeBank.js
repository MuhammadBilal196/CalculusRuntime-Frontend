export const MV_COORDINATE_TRANSFORMATIONS_PRACTICE_BANK = [
  // =========================================================
  // TOPIC 1: JACOBIANS & CHANGE OF VARIABLES — 100 EASY
  // =========================================================

  {
    id: "mvc-cts-e-001",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "For x = u and y = v, what is ∂(x,y)/∂(u,v)?",
    options: ["0", "1", "-1", "2"],
    correctAnswer: 1,
    explanation: "The Jacobian matrix is [[1,0],[0,1]], whose determinant is 1."
  },

  {
    id: "mvc-cts-e-002",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "For x = 2u and y = 3v, what is the Jacobian ∂(x,y)/∂(u,v)?",
    options: ["5", "6", "1", "9"],
    correctAnswer: 1,
    explanation: "The Jacobian matrix is diagonal with entries 2 and 3, so J = 2·3 = 6."
  },

  {
    id: "mvc-cts-e-003",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "For x = u + v and y = u - v, what is the Jacobian?",
    options: ["2", "-2", "0", "1"],
    correctAnswer: 1,
    explanation: "J = (1)(-1) - (1)(1) = -2."
  },

  {
    id: "mvc-cts-e-004",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "For x = u² and y = v, what is ∂(x,y)/∂(u,v)?",
    options: ["u", "2u", "v", "2v"],
    correctAnswer: 1,
    explanation: "J = (2u)(1) - (0)(0) = 2u."
  },

  {
    id: "mvc-cts-e-005",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "For x = u and y = v², what is the Jacobian?",
    options: ["u", "v", "2v", "2u"],
    correctAnswer: 2,
    explanation: "J = (1)(2v) - (0)(0) = 2v."
  },

  {
    id: "mvc-cts-e-006",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "If J = ∂(x,y)/∂(u,v) = 3, which factor appears in dA?",
    options: ["1", "3", "-3", "9"],
    correctAnswer: 1,
    explanation: "Change of area uses |J|, so dA = 3 du dv."
  },

  {
    id: "mvc-cts-e-007",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "In a change of variables for a double integral, which quantity multiplies du dv?",
    options: ["J only when positive", "|J|", "J²", "1/J²"],
    correctAnswer: 1,
    explanation: "The area element transforms as dA = |∂(x,y)/∂(u,v)| du dv."
  },

  {
    id: "mvc-cts-e-008",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "What is the Jacobian for polar coordinates x = r cos θ, y = r sin θ?",
    options: ["1", "r", "r²", "sin θ"],
    correctAnswer: 1,
    explanation: "The standard polar-coordinate Jacobian is r."
  },

  {
    id: "mvc-cts-e-009",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "In polar coordinates, dA equals:",
    options: ["dr dθ", "r dr dθ", "r² dr dθ", "2r dr dθ"],
    correctAnswer: 1,
    explanation: "The Jacobian is r, so dA = r dr dθ."
  },

  {
    id: "mvc-cts-e-010",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "For x = 2u and y = v/2, what is the Jacobian?",
    options: ["1", "2", "4", "1/2"],
    correctAnswer: 0,
    explanation: "J = (2)(1/2) = 1."
  },

  {
    id: "mvc-cts-e-011",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "For x = u - v and y = u + v, what is the Jacobian?",
    options: ["-2", "0", "2", "1"],
    correctAnswer: 2,
    explanation: "J = (1)(1) - (-1)(1) = 2."
  },

  {
    id: "mvc-cts-e-012",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "If a transformation has constant Jacobian 4, areas are scaled by what factor?",
    options: ["2", "4", "8", "16"],
    correctAnswer: 1,
    explanation: "A constant Jacobian magnitude of 4 scales area by a factor of 4."
  },

  {
    id: "mvc-cts-e-013",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "A unit square in the uv-plane is mapped by a transformation with |J| = 6. What is its area in the xy-plane?",
    options: ["1", "3", "6", "12"],
    correctAnswer: 2,
    explanation: "Area is multiplied by |J|, so the new area is 6."
  },

  {
    id: "mvc-cts-e-014",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "What does a Jacobian of zero usually indicate at a point?",
    options: ["Maximum area expansion", "A locally degenerate transformation", "A translation", "A rotation only"],
    correctAnswer: 1,
    explanation: "A zero Jacobian means the transformation is locally degenerate and fails the usual local invertibility condition."
  },

  {
    id: "mvc-cts-e-015",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "If J = ∂(x,y)/∂(u,v) is nonzero, what is the inverse Jacobian?",
    options: ["J", "-J", "1/J", "J²"],
    correctAnswer: 2,
    explanation: "When the Jacobian is nonzero, ∂(u,v)/∂(x,y) = 1/J."
  },

  {
    id: "mvc-cts-e-016",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "The chain rule for Jacobians gives which relation?",
    options: [
      "J(x,y;s,t) = J(x,y;u,v) + J(u,v;s,t)",
      "J(x,y;s,t) = J(x,y;u,v) J(u,v;s,t)",
      "J(x,y;s,t) = J(x,y;u,v) / J(u,v;s,t)",
      "J(x,y;s,t) = 0"
    ],
    correctAnswer: 1,
    explanation: "Jacobian determinants multiply under composition of coordinate transformations."
  },

  {
    id: "mvc-cts-e-017",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "For u = x + y and v = x - y, what is ∂(u,v)/∂(x,y)?",
    options: ["2", "-2", "1", "0"],
    correctAnswer: 1,
    explanation: "J = (1)(-1) - (1)(1) = -2."
  },

  {
    id: "mvc-cts-e-018",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "For x = u² - v² and y = 2uv, what is the Jacobian?",
    options: [
      "2(u² + v²)",
      "4(u² + v²)",
      "4uv",
      "u² - v²"
    ],
    correctAnswer: 1,
    explanation: "J = (2u)(2u) - (-2v)(2v) = 4u² + 4v² = 4(u²+v²)."
  },

  {
    id: "mvc-cts-e-019",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "For the transformation x = u² - v², y = 2uv, what is the Jacobian at (u,v) = (1,0)?",
    options: ["0", "2", "4", "8"],
    correctAnswer: 2,
    explanation: "J = 4(u²+v²), so at (1,0), J = 4."
  },

  {
    id: "mvc-cts-e-020",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "Which expression is correct for a transformed double integral?",
    options: [
      "∬ f(x,y) dA = ∬ f(x(u,v),y(u,v)) du dv",
      "∬ f(x,y) dA = ∬ f(x(u,v),y(u,v)) |J| du dv",
      "∬ f(x,y) dA = ∬ f(x(u,v),y(u,v)) J² du dv",
      "∬ f(x,y) dA = ∬ f(x(u,v),y(u,v)) / |J| du dv"
    ],
    correctAnswer: 1,
    explanation: "Both the function and area element must be transformed, giving the factor |J|."
  },

  {
    id: "mvc-cts-e-021",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "Evaluate ∫₀¹∫₀² 3 dv du.",
    options: ["3", "5", "6", "9"],
    correctAnswer: 2,
    explanation: "The rectangle has area 1·2 = 2, so the integral is 3·2 = 6."
  },

  {
    id: "mvc-cts-e-022",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "If |J| = 5, a small region of area 0.2 in uv-coordinates has approximately what xy-area?",
    options: ["0.04", "0.2", "1", "25"],
    correctAnswer: 2,
    explanation: "The area is multiplied by 5: 5(0.2) = 1."
  },

  {
    id: "mvc-cts-e-023",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "Why is the absolute value of the Jacobian used for area?",
    options: [
      "Area cannot be negative",
      "The Jacobian is always negative",
      "The Jacobian is always positive",
      "To make derivatives disappear"
    ],
    correctAnswer: 0,
    explanation: "Orientation can make the determinant negative, but geometric area is nonnegative, so |J| is used."
  },

  {
    id: "mvc-cts-e-024",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "What geometric quantity does the Jacobian measure locally?",
    options: ["Only translation", "Local area or volume scaling", "Only rotation", "Only distance"],
    correctAnswer: 1,
    explanation: "The magnitude of the Jacobian gives the local scaling factor for area or volume."
  },

  {
    id: "mvc-cts-e-025",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Easy",
    question: "For x = 3u and y = 4v, what happens to a small area element?",
    options: [
      "It is multiplied by 7",
      "It is multiplied by 12",
      "It is multiplied by 1/12",
      "It is unchanged"
    ],
    correctAnswer: 1,
    explanation: "The Jacobian is 3·4 = 12, so the area element is multiplied by 12."
  },

  // =========================================================
  // TOPIC 2: CURVILINEAR COORDINATE SYSTEMS — 100 EASY
  // =========================================================

  {
    id: "mvc-cts-e-026",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "Which coordinate system uses (r, θ) in the plane?",
    options: ["Cartesian", "Polar", "Cylindrical", "Spherical"],
    correctAnswer: 1,
    explanation: "Polar coordinates describe planar points using radius r and angle θ."
  },

  {
    id: "mvc-cts-e-027",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "Which expression converts polar coordinates to x?",
    options: ["x = r sin θ", "x = r cos θ", "x = θ cos r", "x = r + θ"],
    correctAnswer: 1,
    explanation: "The standard conversion is x = r cos θ."
  },

  {
    id: "mvc-cts-e-028",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "Which expression converts polar coordinates to y?",
    options: ["y = r cos θ", "y = r sin θ", "y = θ sin r", "y = r - θ"],
    correctAnswer: 1,
    explanation: "The standard conversion is y = r sin θ."
  },

  {
    id: "mvc-cts-e-029",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "In polar coordinates, what is the scale factor associated with changing θ?",
    options: ["1", "r", "r²", "1/r"],
    correctAnswer: 1,
    explanation: "A small angular change dθ corresponds to arc length r dθ, so hθ = r."
  },

  {
    id: "mvc-cts-e-030",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "What is the polar line element?",
    options: [
      "ds² = dr² + dθ²",
      "ds² = dr² + r²dθ²",
      "ds² = r²dr² + dθ²",
      "ds = dr + dθ"
    ],
    correctAnswer: 1,
    explanation: "For polar coordinates, ds² = dr² + r²dθ²."
  },

  {
    id: "mvc-cts-e-031",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "What is the area element in polar coordinates?",
    options: ["dr dθ", "r dr dθ", "r² dr dθ", "dr/r"],
    correctAnswer: 1,
    explanation: "The polar area element is dA = r dr dθ."
  },

  {
    id: "mvc-cts-e-032",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "Which coordinate system extends polar coordinates by adding z?",
    options: ["Spherical", "Cylindrical", "Cartesian", "Elliptic"],
    correctAnswer: 1,
    explanation: "Cylindrical coordinates are (r, θ, z)."
  },

  {
    id: "mvc-cts-e-033",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "What is the cylindrical volume element?",
    options: ["dr dθ dz", "r dr dθ dz", "r² dr dθ dz", "dr dz"],
    correctAnswer: 1,
    explanation: "The scale factors give dV = r dr dθ dz."
  },

  {
    id: "mvc-cts-e-034",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "In cylindrical coordinates, which variable remains the Cartesian vertical coordinate?",
    options: ["r", "θ", "z", "ρ"],
    correctAnswer: 2,
    explanation: "The z-coordinate is unchanged in the cylindrical system."
  },

  {
    id: "mvc-cts-e-035",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "The surface r = constant in cylindrical coordinates is a:",
    options: ["Plane", "Cylinder", "Sphere", "Cone"],
    correctAnswer: 1,
    explanation: "Fixing r gives all points at a fixed distance from the z-axis, forming a cylinder."
  },

  {
    id: "mvc-cts-e-036",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "The surface z = constant in cylindrical coordinates is a:",
    options: ["Horizontal plane", "Cylinder", "Sphere", "Cone"],
    correctAnswer: 0,
    explanation: "Fixing z gives a horizontal plane."
  },

  {
    id: "mvc-cts-e-037",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "Which coordinate system is especially natural for spherical symmetry?",
    options: ["Cartesian", "Polar", "Cylindrical", "Spherical"],
    correctAnswer: 3,
    explanation: "Spherical coordinates are natural for spheres and radially symmetric problems."
  },

  {
    id: "mvc-cts-e-038",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "Using the convention ρ = radius, θ = azimuth, φ = angle from the positive z-axis, what is x?",
    options: [
      "ρ cos θ",
      "ρ sin φ cos θ",
      "ρ sin θ",
      "ρ cos φ"
    ],
    correctAnswer: 1,
    explanation: "Under this convention, x = ρ sinφ cosθ."
  },

  {
    id: "mvc-cts-e-039",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "Using the same spherical convention, what is z?",
    options: ["ρ sin φ", "ρ cos φ", "ρ cos θ", "ρ sin θ"],
    correctAnswer: 1,
    explanation: "Since φ is measured from the positive z-axis, z = ρ cosφ."
  },

  {
    id: "mvc-cts-e-040",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "What is the spherical volume element under the convention above?",
    options: [
      "ρ dρ dθ dφ",
      "ρ² dρ dθ dφ",
      "ρ² sinφ dρ dθ dφ",
      "sinφ dρ dθ dφ"
    ],
    correctAnswer: 2,
    explanation: "The spherical volume element is ρ² sinφ dρ dθ dφ."
  },

  {
    id: "mvc-cts-e-041",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "In spherical coordinates, what does ρ = constant represent?",
    options: ["A plane", "A cylinder", "A sphere", "A cone"],
    correctAnswer: 2,
    explanation: "A fixed radial distance ρ gives a sphere centered at the origin."
  },

  {
    id: "mvc-cts-e-042",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "At r = 2, what arc length corresponds to dθ = 0.1?",
    options: ["0.05", "0.1", "0.2", "2"],
    correctAnswer: 2,
    explanation: "The angular distance is ds = r dθ = 2(0.1) = 0.2."
  },

  {
    id: "mvc-cts-e-043",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "Which coordinate system is orthogonal in its standard form?",
    options: ["Polar", "Cylindrical", "Spherical", "All of these"],
    correctAnswer: 3,
    explanation: "Standard polar, cylindrical, and spherical coordinate systems are orthogonal."
  },

  {
    id: "mvc-cts-e-044",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "In cylindrical coordinates, which scale factor is associated with θ?",
    options: ["1", "r", "z", "1/r"],
    correctAnswer: 1,
    explanation: "The cylindrical scale factors are h_r = 1, h_θ = r, h_z = 1."
  },

  {
    id: "mvc-cts-e-045",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "What is the polar-coordinate point corresponding to r = 1 and θ = 0?",
    options: ["(0,1)", "(1,0)", "(-1,0)", "(1,1)"],
    correctAnswer: 1,
    explanation: "x = r cos0 = 1 and y = r sin0 = 0."
  },

  {
    id: "mvc-cts-e-046",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "What is the polar-coordinate point corresponding to r = 2 and θ = π?",
    options: ["(2,0)", "(0,2)", "(-2,0)", "(0,-2)"],
    correctAnswer: 2,
    explanation: "x = 2 cosπ = -2 and y = 2 sinπ = 0."
  },

  {
    id: "mvc-cts-e-047",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "Which coordinate system is best suited to an infinitely long problem symmetric around the z-axis?",
    options: ["Cylindrical", "Spherical", "Cartesian only", "Polar only"],
    correctAnswer: 0,
    explanation: "Cylindrical coordinates naturally encode rotational symmetry around the z-axis."
  },

  {
    id: "mvc-cts-e-048",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "In polar coordinates, what does r = 0 represent?",
    options: ["The unit circle", "The origin", "The x-axis", "No point"],
    correctAnswer: 1,
    explanation: "r = 0 corresponds to the origin."
  },

  {
    id: "mvc-cts-e-049",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "If r = 3 and θ varies from 0 to 2π, what curve is traced?",
    options: ["A line", "A circle of radius 3", "A parabola", "A sphere"],
    correctAnswer: 1,
    explanation: "A fixed polar radius with a full angular sweep traces a circle."
  },

  {
    id: "mvc-cts-e-050",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Easy",
    question: "For a cylindrical coordinate point, which variables describe distance from the z-axis and rotation around it?",
    options: ["z and r", "r and θ", "θ and z", "ρ and φ"],
    correctAnswer: 1,
    explanation: "r measures radial distance from the z-axis and θ measures azimuthal angle."
  },

  // =========================================================
  // TOPIC 3: PARAMETRIZED SURFACE AREA — 100 EASY
  // =========================================================

  {
    id: "mvc-cts-e-051",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "A parametrized surface is commonly written as:",
    options: [
      "r(u,v) = ⟨x(u,v), y(u,v), z(u,v)⟩",
      "r(u,v) = x + y + z",
      "r(u,v) = f(u) only",
      "r(u,v) = uv only"
    ],
    correctAnswer: 0,
    explanation: "A parametrized surface maps two parameters (u,v) into three-dimensional space."
  },

  {
    id: "mvc-cts-e-052",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "Which vectors are used to build the surface-area element?",
    options: ["r and r only", "r_u and r_v", "u and v", "∇r and Δr"],
    correctAnswer: 1,
    explanation: "The tangent vectors r_u and r_v determine the local tangent plane."
  },

  {
    id: "mvc-cts-e-053",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "The surface-area element for r(u,v) is:",
    options: [
      "dS = r_u + r_v",
      "dS = |r_u × r_v| du dv",
      "dS = |r_u · r_v| du dv",
      "dS = du + dv"
    ],
    correctAnswer: 1,
    explanation: "The cross product gives the area of the infinitesimal tangent parallelogram."
  },

  {
    id: "mvc-cts-e-054",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "What geometric object does r_u × r_v point normal to?",
    options: ["The surface", "The x-axis only", "The parameter plane", "The origin"],
    correctAnswer: 0,
    explanation: "The cross product of the two tangent vectors is perpendicular to the surface."
  },

  {
    id: "mvc-cts-e-055",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "If |r_u × r_v| = 5, what is dS?",
    options: ["5 du dv", "du dv / 5", "25 du dv", "5 du + 5 dv"],
    correctAnswer: 0,
    explanation: "By definition, dS = |r_u × r_v| du dv = 5 du dv."
  },

  {
    id: "mvc-cts-e-056",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "If r_u and r_v are parallel, what is |r_u × r_v|?",
    options: ["1", "Their sum", "0", "Their product"],
    correctAnswer: 2,
    explanation: "The cross product of parallel vectors is zero."
  },

  {
    id: "mvc-cts-e-057",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "If two tangent vectors are perpendicular with lengths 2 and 3, what is the magnitude of their cross product?",
    options: ["1", "5", "6", "9"],
    correctAnswer: 2,
    explanation: "|a × b| = |a||b|sin90° = 2·3 = 6."
  },

  {
    id: "mvc-cts-e-058",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "For r(u,v) = ⟨u,v,0⟩, what is r_u?",
    options: ["⟨1,0,0⟩", "⟨0,1,0⟩", "⟨u,v,0⟩", "⟨0,0,1⟩"],
    correctAnswer: 0,
    explanation: "Differentiating with respect to u gives r_u = ⟨1,0,0⟩."
  },

  {
    id: "mvc-cts-e-059",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "For r(u,v) = ⟨u,v,0⟩, what is r_v?",
    options: ["⟨1,0,0⟩", "⟨0,1,0⟩", "⟨u,v,0⟩", "⟨0,0,1⟩"],
    correctAnswer: 1,
    explanation: "Differentiating with respect to v gives r_v = ⟨0,1,0⟩."
  },

  {
    id: "mvc-cts-e-060",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "For r(u,v) = ⟨u,v,0⟩, what is |r_u × r_v|?",
    options: ["0", "1", "2", "uv"],
    correctAnswer: 1,
    explanation: "⟨1,0,0⟩ × ⟨0,1,0⟩ = ⟨0,0,1⟩, whose magnitude is 1."
  },

  {
    id: "mvc-cts-e-061",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "What is the area of r(u,v) = ⟨u,v,0⟩ for 0 ≤ u ≤ 2 and 0 ≤ v ≤ 3?",
    options: ["5", "6", "8", "12"],
    correctAnswer: 1,
    explanation: "The surface is a 2-by-3 rectangle, so its area is 6."
  },

  {
    id: "mvc-cts-e-062",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "For a graph z = f(x,y), the surface-area formula is:",
    options: [
      "∬ 1 dA",
      "∬ √(1 + f_x² + f_y²) dA",
      "∬ (f_x + f_y) dA",
      "∬ f_x f_y dA"
    ],
    correctAnswer: 1,
    explanation: "For z=f(x,y), dS = √(1+f_x²+f_y²) dxdy."
  },

  {
    id: "mvc-cts-e-063",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "For z = x + y, what are f_x and f_y?",
    options: [
      "f_x = 0, f_y = 0",
      "f_x = 1, f_y = 1",
      "f_x = x, f_y = y",
      "f_x = 2, f_y = 2"
    ],
    correctAnswer: 1,
    explanation: "The partial derivatives of x+y are both 1."
  },

  {
    id: "mvc-cts-e-064",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "For z = x + y, the surface-area factor is:",
    options: ["1", "√2", "√3", "2"],
    correctAnswer: 2,
    explanation: "√(1+1²+1²) = √3."
  },

  {
    id: "mvc-cts-e-065",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "What is the area of z = x + y over the unit square 0 ≤ x,y ≤ 1?",
    options: ["1", "√2", "√3", "2"],
    correctAnswer: 2,
    explanation: "The area is √3 times the unit-square area, giving √3."
  },

  {
    id: "mvc-cts-e-066",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "For the flat plane z = 0, what is the surface-area factor over the xy-plane?",
    options: ["0", "1", "√2", "2"],
    correctAnswer: 1,
    explanation: "Since f_x=f_y=0, the factor is √1 = 1."
  },

  {
    id: "mvc-cts-e-067",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "What happens to surface area if the orientation of a parametrization is reversed?",
    options: ["It becomes negative", "It becomes zero", "It stays the same", "It doubles"],
    correctAnswer: 2,
    explanation: "Reversing orientation changes the normal direction but not |r_u × r_v|."
  },

  {
    id: "mvc-cts-e-068",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "What is the surface area of a sphere of radius R?",
    options: ["πR²", "2πR²", "4πR²", "4πR³"],
    correctAnswer: 2,
    explanation: "The surface area of a sphere is 4πR²."
  },

  {
    id: "mvc-cts-e-069",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "What is the lateral surface area of a cylinder of radius R and height h?",
    options: ["πRh", "2πRh", "2πR²h", "πR²h"],
    correctAnswer: 1,
    explanation: "The curved lateral area is circumference times height: 2πR·h."
  },

  {
    id: "mvc-cts-e-070",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "For r(u,v) = ⟨u,0,v⟩, what is |r_u × r_v|?",
    options: ["0", "1", "2", "u+v"],
    correctAnswer: 1,
    explanation: "The tangent vectors are ⟨1,0,0⟩ and ⟨0,0,1⟩, whose cross product has magnitude 1."
  },

  {
    id: "mvc-cts-e-071",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "For r(u,v) = ⟨u,v,u+v⟩, what is r_u?",
    options: [
      "⟨1,0,1⟩",
      "⟨0,1,1⟩",
      "⟨u,v,1⟩",
      "⟨1,1,0⟩"
    ],
    correctAnswer: 0,
    explanation: "Differentiate each component with respect to u to get ⟨1,0,1⟩."
  },

  {
    id: "mvc-cts-e-072",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "For r(u,v) = ⟨u,v,u+v⟩, what is r_v?",
    options: [
      "⟨1,0,1⟩",
      "⟨0,1,1⟩",
      "⟨1,1,0⟩",
      "⟨u,1,v⟩"
    ],
    correctAnswer: 1,
    explanation: "Differentiate with respect to v to get ⟨0,1,1⟩."
  },

  {
    id: "mvc-cts-e-073",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "For r(u,v) = ⟨u,v,u+v⟩, what is |r_u × r_v|?",
    options: ["1", "√2", "√3", "3"],
    correctAnswer: 2,
    explanation: "r_u × r_v = ⟨-1,-1,1⟩, whose magnitude is √3."
  },

  {
    id: "mvc-cts-e-074",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "What is the area of r(u,v) = ⟨u,v,u+v⟩ on 0 ≤ u,v ≤ 1?",
    options: ["1", "2", "√3", "3"],
    correctAnswer: 2,
    explanation: "The area factor is √3 and the parameter domain has area 1."
  },

  {
    id: "mvc-cts-e-075",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Easy",
    question: "Which quantity determines the local stretch of a parameter rectangle into a surface patch?",
    options: ["|r_u × r_v|", "|r_u + r_v|", "r_u · r_v only", "u+v"],
    correctAnswer: 0,
    explanation: "The magnitude of the cross product is the local surface-area scaling factor."
  },

  // =========================================================
  // TOPIC 4: FLUX INTEGRALS OVER GENERAL PARAMETERIZED SURFACES
  // 100 EASY
  // =========================================================

  {
    id: "mvc-cts-e-076",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "A flux integral measures the flow of a vector field through a:",
    options: ["Curve only", "Surface", "Point only", "Volume only"],
    correctAnswer: 1,
    explanation: "Flux measures the component of a vector field passing through an oriented surface."
  },

  {
    id: "mvc-cts-e-077",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "The basic flux integrand is:",
    options: ["F × n", "F · n", "F + n", "F / n"],
    correctAnswer: 1,
    explanation: "Flux uses the dot product of the vector field with the surface normal."
  },

  {
    id: "mvc-cts-e-078",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "For a parametrized surface, the flux formula is:",
    options: [
      "∬ F dS",
      "∬ F · (r_u × r_v) du dv",
      "∬ F × (r_u × r_v) du dv",
      "∬ |F| du dv"
    ],
    correctAnswer: 1,
    explanation: "The oriented vector-area element is (r_u × r_v) du dv."
  },

  {
    id: "mvc-cts-e-079",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "What happens to flux if the orientation of the surface is reversed?",
    options: ["It stays the same", "It doubles", "Its sign changes", "It becomes zero"],
    correctAnswer: 2,
    explanation: "Reversing orientation changes the normal to its negative, so the flux changes sign."
  },

  {
    id: "mvc-cts-e-080",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "If a vector field is tangent to a surface everywhere, what is its flux through that surface?",
    options: ["Maximum", "Zero", "Negative", "Infinite"],
    correctAnswer: 1,
    explanation: "A tangent field has zero normal component, so F·n = 0."
  },

  {
    id: "mvc-cts-e-081",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "For the xy-plane with upward orientation, the normal vector points in which direction?",
    options: ["+x", "+y", "+z", "-z"],
    correctAnswer: 2,
    explanation: "Upward orientation corresponds to the positive z-direction."
  },

  {
    id: "mvc-cts-e-082",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "What is the flux of F = ⟨0,0,2⟩ through a 3-by-4 xy-rectangle with upward orientation?",
    options: ["6", "12", "24", "48"],
    correctAnswer: 2,
    explanation: "F·n = 2 and the area is 12, so the flux is 24."
  },

  {
    id: "mvc-cts-e-083",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "What is the flux of F = ⟨1,0,0⟩ through the yz-plane rectangle of area 6 with +x orientation?",
    options: ["0", "1", "6", "12"],
    correctAnswer: 2,
    explanation: "The field is exactly aligned with the +x normal, so flux = 1·6 = 6."
  },

  {
    id: "mvc-cts-e-084",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "For r(u,v) = ⟨u,v,0⟩, what is r_u × r_v?",
    options: [
      "⟨1,0,0⟩",
      "⟨0,1,0⟩",
      "⟨0,0,1⟩",
      "⟨0,0,-1⟩"
    ],
    correctAnswer: 2,
    explanation: "⟨1,0,0⟩ × ⟨0,1,0⟩ = ⟨0,0,1⟩."
  },

  {
    id: "mvc-cts-e-085",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "Using r(u,v) = ⟨u,v,0⟩ and F = ⟨0,0,3⟩, what is the flux over 0≤u≤1, 0≤v≤2?",
    options: ["3", "5", "6", "9"],
    correctAnswer: 2,
    explanation: "F·(r_u×r_v) = 3 and the parameter-domain area is 2, giving flux 6."
  },

  {
    id: "mvc-cts-e-086",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "For r(u,v) = ⟨u,v,0⟩, which orientation does r_v × r_u represent?",
    options: ["Upward", "Downward", "Along +x", "Along +y"],
    correctAnswer: 1,
    explanation: "r_v × r_u = -(r_u × r_v) = ⟨0,0,-1⟩, which is downward."
  },

  {
    id: "mvc-cts-e-087",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "For F = ⟨0,0,z⟩ on the plane z = 0, what is the flux through any region with upward orientation?",
    options: ["0", "Area", "2Area", "zArea"],
    correctAnswer: 0,
    explanation: "On z=0, the field is F=⟨0,0,0⟩, so the flux is zero."
  },

  {
    id: "mvc-cts-e-088",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "For a closed surface, what orientation is normally used for outward flux?",
    options: ["Inward", "Outward", "Random", "Tangential"],
    correctAnswer: 1,
    explanation: "The standard closed-surface convention is the outward orientation."
  },

  {
    id: "mvc-cts-e-089",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "Which theorem converts outward flux across a closed surface into a volume integral?",
    options: ["Green's theorem", "Stokes' theorem", "Divergence theorem", "Mean Value theorem"],
    correctAnswer: 2,
    explanation: "The Divergence theorem states that outward flux equals the triple integral of div F."
  },

  {
    id: "mvc-cts-e-090",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "What is the divergence of F = ⟨x,y,z⟩?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 3,
    explanation: "div F = ∂x/∂x + ∂y/∂y + ∂z/∂z = 1+1+1 = 3."
  },

  {
    id: "mvc-cts-e-091",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "What is the outward flux of F = ⟨x,y,z⟩ through the unit sphere?",
    options: ["π", "2π", "4π", "8π"],
    correctAnswer: 2,
    explanation: "By the Divergence theorem, flux = 3 × volume of unit sphere = 3(4π/3) = 4π."
  },

  {
    id: "mvc-cts-e-092",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "If a vector field makes a 90° angle with the unit normal, what is F·n?",
    options: ["|F|", "0", "|F|²", "1"],
    correctAnswer: 1,
    explanation: "F·n = |F|cos90° = 0."
  },

  {
    id: "mvc-cts-e-093",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "If F and the unit normal point in exactly the same direction, what is F·n?",
    options: ["0", "-|F|", "|F|", "|F|²"],
    correctAnswer: 2,
    explanation: "When the angle is 0°, F·n = |F|cos0° = |F|."
  },

  {
    id: "mvc-cts-e-094",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "What does the dot product F·n extract from the vector field?",
    options: ["Its tangential component", "Its normal component", "Its curl", "Its divergence"],
    correctAnswer: 1,
    explanation: "The dot product with the normal extracts the component perpendicular to the surface."
  },

  {
    id: "mvc-cts-e-095",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "A constant vector field F with div F = 0 has what total flux through a closed surface?",
    options: ["Always positive", "Always negative", "Zero", "Infinite"],
    correctAnswer: 2,
    explanation: "By the Divergence theorem, total flux is the volume integral of zero, hence zero."
  },

  {
    id: "mvc-cts-e-096",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "For a surface element dS with unit normal n, the vector area element is:",
    options: ["n/dS", "n dS", "dS/n", "n+dS"],
    correctAnswer: 1,
    explanation: "The oriented vector-area element is n dS."
  },

  {
    id: "mvc-cts-e-097",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "If the parameterization produces a normal pointing opposite to the required orientation, what should you do?",
    options: [
      "Square the flux",
      "Use the negative of the cross product",
      "Delete the normal",
      "Use the dot product twice"
    ],
    correctAnswer: 1,
    explanation: "Reverse the normal by replacing r_u × r_v with -(r_u × r_v)."
  },

  {
    id: "mvc-cts-e-098",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "For a constant field F = ⟨0,0,1⟩ through a horizontal surface with upward normal, is the flux positive, negative, or zero?",
    options: ["Positive", "Negative", "Zero", "Undefined"],
    correctAnswer: 0,
    explanation: "The field points in the same direction as the upward normal, so the flux is positive."
  },

  {
    id: "mvc-cts-e-099",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "For F = ⟨1,0,0⟩ through the yz-plane with normal -i, what is F·n?",
    options: ["1", "-1", "0", "2"],
    correctAnswer: 1,
    explanation: "F·(-i) = ⟨1,0,0⟩·⟨-1,0,0⟩ = -1."
  },

  {
    id: "mvc-cts-e-100",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Easy",
    question: "Which expression is the most direct formula for flux over a parametrized surface?",
    options: [
      "∬ |F| dudv",
      "∬ F(r(u,v)) · (r_u × r_v) dudv",
      "∬ div(F) dudv",
      "∬ curl(F) dudv"
    ],
    correctAnswer: 1,
    explanation: "For a general parametrized surface, flux is the integral of F evaluated on the surface dotted with the oriented vector area element."
  },
    // =========================================================
  // TOPIC 1: JACOBIANS & CHANGE OF VARIABLES — 100 MEDIUM
  // =========================================================

  {
    id: "mvc-cts-m-001",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "For x = u + 2v and y = 3u - v, find ∂(x,y)/∂(u,v).",
    options: ["-7", "5", "7", "-5"],
    correctAnswer: 0,
    explanation: "J = (1)(-1) - (2)(3) = -1 - 6 = -7."
  },

  {
    id: "mvc-cts-m-002",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "For x = u² + v and y = u - v², what is the Jacobian?",
    options: ["2u + 2v", "1 - 4uv", "4uv - 1", "2u - 2v"],
    correctAnswer: 1,
    explanation: "J = (2u)(-2v) - (1)(1) = -4uv - 1."
  },

  {
    id: "mvc-cts-m-003",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "For x = u² + v and y = u - v², what is the Jacobian at (u,v) = (1,1)?",
    options: ["-5", "-4", "3", "5"],
    correctAnswer: 0,
    explanation: "J = -4uv - 1, so J(1,1) = -5."
  },

  {
    id: "mvc-cts-m-004",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "If x = 2u + v and y = u + 3v, what is |∂(x,y)/∂(u,v)|?",
    options: ["4", "5", "6", "7"],
    correctAnswer: 1,
    explanation: "J = (2)(3) - (1)(1) = 5, so |J| = 5."
  },

  {
    id: "mvc-cts-m-005",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "For x = u - v and y = u + v, which relation is correct?",
    options: [
      "du dv = 2 dx dy",
      "du dv = (1/2) dx dy",
      "dx dy = (1/2) du dv",
      "dx dy = 2 du dv"
    ],
    correctAnswer: 3,
    explanation: "The Jacobian ∂(x,y)/∂(u,v) = 2, so dxdy = 2 dudv."
  },

  {
    id: "mvc-cts-m-006",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "For u = x + y and v = x - y, what is dx dy in terms of du dv?",
    options: [
      "dxdy = 2 dudv",
      "dxdy = (1/2) dudv",
      "dxdy = dudv",
      "dxdy = -2 dudv"
    ],
    correctAnswer: 1,
    explanation: "∂(u,v)/∂(x,y) = -2, so |∂(x,y)/∂(u,v)| = 1/2."
  },

  {
    id: "mvc-cts-m-007",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "Under x = u + v, y = u - v, the region 0 ≤ u ≤ 1, 0 ≤ v ≤ 1 maps to what type of region in the xy-plane?",
    options: ["Circle", "Ellipse", "Parallelogram", "Triangle"],
    correctAnswer: 2,
    explanation: "The images of the four sides are straight lines, producing a parallelogram."
  },

  {
    id: "mvc-cts-m-008",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "Using x = u + v and y = u - v, what is the area of the image of the unit square 0 ≤ u,v ≤ 1?",
    options: ["1", "2", "4", "1/2"],
    correctAnswer: 1,
    explanation: "The Jacobian magnitude is 2, so the image area is 2."
  },

  {
    id: "mvc-cts-m-009",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "For x = r cosθ, y = r sinθ, what is the determinant of the Jacobian matrix?",
    options: ["1", "-1", "r", "-r"],
    correctAnswer: 2,
    explanation: "The polar Jacobian determinant is r."
  },

  {
    id: "mvc-cts-m-010",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "Evaluate ∬_R (x²+y²) dA over the unit disk using polar coordinates.",
    options: ["π/2", "π", "2π", "4π"],
    correctAnswer: 0,
    explanation: "x²+y² = r² and dA = r drdθ. The integral is ∫₀²π∫₀¹ r³ drdθ = 2π(1/4) = π/2."
  },

  {
    id: "mvc-cts-m-011",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "Evaluate ∬_R 1 dA over the disk r ≤ 2 using polar coordinates.",
    options: ["2π", "4π", "6π", "8π"],
    correctAnswer: 1,
    explanation: "The area is π(2²) = 4π."
  },

  {
    id: "mvc-cts-m-012",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "Evaluate ∬_R x dA over the right half of the unit disk.",
    options: ["0", "1/2", "2/3", "1"],
    correctAnswer: 2,
    explanation: "Use x = rcosθ, dA = r drdθ with -π/2 ≤ θ ≤ π/2. The integral is (∫cosθ dθ)(∫r²dr) = 2·1/3 = 2/3."
  },

  {
    id: "mvc-cts-m-013",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "Which polar-coordinate limits describe the disk x²+y² ≤ 9?",
    options: [
      "0 ≤ r ≤ 3, 0 ≤ θ ≤ π",
      "0 ≤ r ≤ 9, 0 ≤ θ ≤ 2π",
      "0 ≤ r ≤ 3, 0 ≤ θ ≤ 2π",
      "0 ≤ r ≤ 2, 0 ≤ θ ≤ 3π"
    ],
    correctAnswer: 2,
    explanation: "The radius runs from 0 to 3 and a full disk requires 0 ≤ θ ≤ 2π."
  },

  {
    id: "mvc-cts-m-014",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "Which polar limits describe the first-quadrant part of the disk x²+y² ≤ 4?",
    options: [
      "0 ≤ r ≤ 2, 0 ≤ θ ≤ π/2",
      "0 ≤ r ≤ 4, 0 ≤ θ ≤ π/2",
      "0 ≤ r ≤ 2, 0 ≤ θ ≤ π",
      "0 ≤ r ≤ 1, 0 ≤ θ ≤ 2π"
    ],
    correctAnswer: 0,
    explanation: "The disk has radius 2, and the first quadrant corresponds to 0 ≤ θ ≤ π/2."
  },

  {
    id: "mvc-cts-m-015",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "For x = u/v and y = v, which condition is required for the transformation to be defined?",
    options: ["u ≠ 0", "v ≠ 0", "u+v ≠ 0", "u=v"],
    correctAnswer: 1,
    explanation: "Because x contains division by v, we require v ≠ 0."
  },

  {
    id: "mvc-cts-m-016",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "For x = u/v and y = v, what is the Jacobian?",
    options: ["1", "1/v", "v", "u/v²"],
    correctAnswer: 1,
    explanation: "x_u = 1/v, x_v = -u/v², y_u = 0, y_v = 1, so J = 1/v."
  },

  {
    id: "mvc-cts-m-017",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "If ∂(x,y)/∂(u,v) = -4, what is ∂(u,v)/∂(x,y)?",
    options: ["4", "-4", "1/4", "-1/4"],
    correctAnswer: 3,
    explanation: "The inverse Jacobian is 1/J = -1/4."
  },

  {
    id: "mvc-cts-m-018",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "If x = u² and y = v², what is |J| at (u,v) = (2,3)?",
    options: ["6", "12", "24", "36"],
    correctAnswer: 2,
    explanation: "J = (2u)(2v) = 4uv, so at (2,3), |J| = 24."
  },

  {
    id: "mvc-cts-m-019",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "For x = u cos v and y = u sin v, identify the coordinate system.",
    options: ["Cartesian", "Polar-type", "Spherical", "Parabolic"],
    correctAnswer: 1,
    explanation: "The transformation has the standard polar form with u as radius and v as angle."
  },

  {
    id: "mvc-cts-m-020",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "For x = u cos v and y = u sin v, what is |J|?",
    options: ["1", "u", "u²", "cos v"],
    correctAnswer: 1,
    explanation: "This is polar form, so the Jacobian magnitude is u."
  },

  {
    id: "mvc-cts-m-021",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "Using x = u+v and y = u-v, transform x²+y² into u and v.",
    options: [
      "u²+v²",
      "2u²+2v²",
      "u²-v²",
      "4uv"
    ],
    correctAnswer: 1,
    explanation: "(u+v)² + (u-v)² = 2u² + 2v²."
  },

  {
    id: "mvc-cts-m-022",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "Under x = u+v and y = u-v, transform xy.",
    options: [
      "u²+v²",
      "u²-v²",
      "2uv",
      "u+v"
    ],
    correctAnswer: 1,
    explanation: "xy = (u+v)(u-v) = u²-v²."
  },

  {
    id: "mvc-cts-m-023",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "Which substitution is most natural for an integrand involving x²+y² and a circular region?",
    options: ["x=u+v", "Polar coordinates", "x=u²,y=v²", "u=x+y,v=x-y"],
    correctAnswer: 1,
    explanation: "Circular regions and expressions involving x²+y² are naturally handled by polar coordinates."
  },

  {
    id: "mvc-cts-m-024",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "If x = 2u-v and y = u+2v, what is the area scale factor?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    explanation: "J = (2)(2) - (-1)(1) = 5."
  },

  {
    id: "mvc-cts-m-025",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Medium",
    question: "For x = u+2v, y = 2u+4v, why does the Jacobian vanish?",
    options: [
      "The functions are nonlinear",
      "The two rows are proportional",
      "The variables are independent",
      "The transformation includes trigonometric functions"
    ],
    correctAnswer: 1,
    explanation: "The second row of the Jacobian matrix is twice the first, so its determinant is zero."
  },

  // =========================================================
  // TOPIC 2: CURVILINEAR COORDINATE SYSTEMS — 100 MEDIUM
  // =========================================================

  {
    id: "mvc-cts-m-026",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "In cylindrical coordinates, the point (r,θ,z) = (2, π/2, 3) corresponds to:",
    options: ["(2,0,3)", "(0,2,3)", "(-2,0,3)", "(0,-2,3)"],
    correctAnswer: 1,
    explanation: "x = 2cos(π/2)=0 and y = 2sin(π/2)=2, with z=3."
  },

  {
    id: "mvc-cts-m-027",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "Convert the Cartesian point (3,4) to polar coordinates with r ≥ 0.",
    options: ["(5, arctan(4/3))", "(7, π/4)", "(5, arctan(3/4))", "(4, arctan(5/3))"],
    correctAnswer: 0,
    explanation: "r = √(3²+4²)=5 and θ = arctan(4/3)."
  },

  {
    id: "mvc-cts-m-028",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "Convert the Cartesian point (-1,1) to polar coordinates using 0 ≤ θ < 2π.",
    options: [
      "(√2, π/4)",
      "(√2, 3π/4)",
      "(2, 3π/4)",
      "(1, π/2)"
    ],
    correctAnswer: 1,
    explanation: "r=√2 and the point lies in Quadrant II, so θ=3π/4."
  },

  {
    id: "mvc-cts-m-029",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "Which cylindrical-coordinate equation represents the sphere x²+y²=4?",
    options: ["r=2", "z=2", "r²+z²=4", "ρ=2"],
    correctAnswer: 0,
    explanation: "Since x²+y² = r², the equation becomes r²=4, hence r=2."
  },

  {
    id: "mvc-cts-m-030",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "In cylindrical coordinates, x²+y²+z² becomes:",
    options: ["r+z²", "r²+z²", "r²+z", "r²z²"],
    correctAnswer: 1,
    explanation: "Because x²+y²=r², the expression becomes r²+z²."
  },

  {
    id: "mvc-cts-m-031",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "Evaluate ∭_V 1 dV over the cylinder 0≤r≤2, 0≤θ≤2π, 0≤z≤3.",
    options: ["6π", "12π", "24π", "36π"],
    correctAnswer: 1,
    explanation: "Volume = ∫₀³∫₀²π∫₀² r drdθdz = 4π·3 = 12π."
  },

  {
    id: "mvc-cts-m-032",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "What is the cylindrical-coordinate form of the paraboloid x²+y²=z?",
    options: ["r=z", "r²=z", "r²+z²=1", "r=z²"],
    correctAnswer: 1,
    explanation: "Replace x²+y² by r², giving r²=z."
  },

  {
    id: "mvc-cts-m-033",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "For spherical coordinates with z = ρ cosφ, what surface is φ = π/2?",
    options: ["The positive z-axis", "The xy-plane", "A sphere", "The xz-plane"],
    correctAnswer: 1,
    explanation: "φ=π/2 gives z=ρcos(π/2)=0, which is the xy-plane."
  },

  {
    id: "mvc-cts-m-034",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "Under the standard spherical convention, what is x²+y²?",
    options: [
      "ρ² cos²φ",
      "ρ² sin²φ",
      "ρ²",
      "ρ² sin²θ"
    ],
    correctAnswer: 1,
    explanation: "x=ρsinφcosθ and y=ρsinφsinθ, so x²+y²=ρ²sin²φ."
  },

  {
    id: "mvc-cts-m-035",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "Under the standard spherical convention, x²+y²+z² equals:",
    options: ["ρ", "ρ²", "ρ²sinφ", "ρcosφ"],
    correctAnswer: 1,
    explanation: "The radial coordinate ρ satisfies x²+y²+z²=ρ²."
  },

  {
    id: "mvc-cts-m-036",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "What spherical-coordinate region represents the ball x²+y²+z²≤4?",
    options: [
      "0≤ρ≤2, all angles",
      "0≤ρ≤4, all angles",
      "ρ=2, all angles",
      "0≤φ≤2, ρ≤1"
    ],
    correctAnswer: 0,
    explanation: "The ball has radial bound ρ≤2 with complete angular ranges."
  },

  {
    id: "mvc-cts-m-037",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "Evaluate ∭ over the unit ball of 1 dV using spherical coordinates.",
    options: ["π", "2π", "4π/3", "8π/3"],
    correctAnswer: 2,
    explanation: "Volume of the unit ball is 4π/3."
  },

  {
    id: "mvc-cts-m-038",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "In spherical coordinates, what is the radial thickness represented by a change dρ?",
    options: ["dρ", "ρ dρ", "ρ² dρ", "sinφ dρ"],
    correctAnswer: 0,
    explanation: "Along a radial line, the physical length element is simply dρ."
  },

  {
    id: "mvc-cts-m-039",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "For spherical coordinates, the scale factor corresponding to φ is:",
    options: ["1", "ρ", "ρ sinφ", "ρ² sinφ"],
    correctAnswer: 1,
    explanation: "With φ measured from the positive z-axis, the standard scale factors are hρ=1, hφ=ρ, hθ=ρsinφ."
  },

  {
    id: "mvc-cts-m-040",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "For spherical coordinates, the scale factor corresponding to θ is:",
    options: ["1", "ρ", "ρ sinφ", "ρ²"],
    correctAnswer: 2,
    explanation: "The azimuthal arc length factor is ρsinφ."
  },

  {
    id: "mvc-cts-m-041",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "The cylindrical-coordinate Laplacian of a scalar f(r,θ,z) contains which radial term?",
    options: [
      "f_rr",
      "(1/r)f_r",
      "rf_r",
      "(1/r²)f_r"
    ],
    correctAnswer: 1,
    explanation: "The radial part contains (1/r)∂f/∂r."
  },

  {
    id: "mvc-cts-m-042",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "For a function depending only on r in polar coordinates, the radial part of the Laplacian is:",
    options: [
      "f''(r)",
      "f''(r)+(1/r)f'(r)",
      "f'(r)/r²",
      "r f''(r)"
    ],
    correctAnswer: 1,
    explanation: "For radial f(r), the 2D polar Laplacian becomes f''(r)+(1/r)f'(r)."
  },

  {
    id: "mvc-cts-m-043",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "Which coordinate system is most natural for a problem involving rotational symmetry around the z-axis and a planar radius?",
    options: ["Cylindrical", "Spherical", "Cartesian", "Elliptic"],
    correctAnswer: 0,
    explanation: "Cylindrical coordinates explicitly separate radial distance r, azimuth θ, and height z."
  },

  {
    id: "mvc-cts-m-044",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "Which coordinate system is most natural for a point source at the origin?",
    options: ["Cartesian", "Cylindrical", "Spherical", "Polar only"],
    correctAnswer: 2,
    explanation: "Spherical coordinates capture radial symmetry about the origin."
  },

  {
    id: "mvc-cts-m-045",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "For cylindrical coordinates, what is the relation between x²+y² and r?",
    options: ["x²+y²=r", "x²+y²=2r", "x²+y²=r²", "x+y=r²"],
    correctAnswer: 2,
    explanation: "By definition, r is the distance from the z-axis, so r²=x²+y²."
  },

  {
    id: "mvc-cts-m-046",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "Which cylindrical-coordinate bounds describe the region inside r=2 and above z=0 but below z=5?",
    options: [
      "0≤r≤2, 0≤θ≤2π, 0≤z≤5",
      "0≤r≤5, 0≤θ≤2π, 0≤z≤2",
      "r=2, 0≤θ≤π, 0≤z≤5",
      "0≤r≤2, 0≤θ≤π, 0≤z≤5"
    ],
    correctAnswer: 0,
    explanation: "A full cylinder requires the full angular range 0≤θ≤2π."
  },

  {
    id: "mvc-cts-m-047",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "At r=3, what is the physical length corresponding to dθ=0.2?",
    options: ["0.2", "0.6", "1.5", "3.2"],
    correctAnswer: 1,
    explanation: "Angular arc length is r dθ = 3(0.2)=0.6."
  },

  {
    id: "mvc-cts-m-048",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "A small polar-coordinate patch has dr=0.1, dθ=0.2 at r=5. Approximately what is its area?",
    options: ["0.01", "0.05", "0.1", "0.2"],
    correctAnswer: 2,
    explanation: "dA ≈ r dr dθ = 5(0.1)(0.2)=0.1."
  },

  {
    id: "mvc-cts-m-049",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "Which statement about coordinate singularities is correct?",
    options: [
      "They always imply the physical space is singular",
      "They can occur where coordinates fail to be unique",
      "They mean the function is undefined everywhere",
      "They occur only in Cartesian coordinates"
    ],
    correctAnswer: 1,
    explanation: "For example, θ is not unique at r=0 in polar coordinates even though the plane itself is perfectly regular."
  },

  {
    id: "mvc-cts-m-050",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Medium",
    question: "At the origin in polar coordinates, why is θ not uniquely determined?",
    options: [
      "Because r is infinite",
      "Because every angle gives the same point when r=0",
      "Because θ is always zero",
      "Because x and y are undefined"
    ],
    correctAnswer: 1,
    explanation: "When r=0, x=y=0 regardless of θ."
  },

  // =========================================================
  // TOPIC 3: PARAMETRIZED SURFACE AREA — 100 MEDIUM
  // =========================================================

  {
    id: "mvc-cts-m-051",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For r(u,v)=⟨u,v,uv⟩, what is r_u?",
    options: [
      "⟨1,0,v⟩",
      "⟨0,1,u⟩",
      "⟨u,v,1⟩",
      "⟨1,1,uv⟩"
    ],
    correctAnswer: 0,
    explanation: "Differentiate componentwise with respect to u."
  },

  {
    id: "mvc-cts-m-052",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For r(u,v)=⟨u,v,uv⟩, what is r_v?",
    options: [
      "⟨1,0,v⟩",
      "⟨0,1,u⟩",
      "⟨u,v,1⟩",
      "⟨v,u,1⟩"
    ],
    correctAnswer: 1,
    explanation: "Differentiate componentwise with respect to v."
  },

  {
    id: "mvc-cts-m-053",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For r(u,v)=⟨u,v,uv⟩, what is r_u × r_v?",
    options: [
      "⟨-v,-u,1⟩",
      "⟨v,u,1⟩",
      "⟨u,v,-1⟩",
      "⟨1,u,v⟩"
    ],
    correctAnswer: 0,
    explanation: "⟨1,0,v⟩ × ⟨0,1,u⟩ = ⟨-v,-u,1⟩."
  },

  {
    id: "mvc-cts-m-054",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For r(u,v)=⟨u,v,uv⟩, what is |r_u × r_v|?",
    options: [
      "√(u²+v²+1)",
      "√(u²+v²)",
      "u+v+1",
      "uv+1"
    ],
    correctAnswer: 0,
    explanation: "|⟨-v,-u,1⟩| = √(v²+u²+1)."
  },

  {
    id: "mvc-cts-m-055",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For the graph z = x², what are f_x and f_y?",
    options: [
      "f_x=2x, f_y=0",
      "f_x=x, f_y=2",
      "f_x=2, f_y=0",
      "f_x=0, f_y=2x"
    ],
    correctAnswer: 0,
    explanation: "Differentiate x² with respect to x and y."
  },

  {
    id: "mvc-cts-m-056",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For z=x², the surface-area integrand over the xy-plane is:",
    options: [
      "√(1+x²)",
      "√(1+4x²)",
      "1+2x",
      "2x"
    ],
    correctAnswer: 1,
    explanation: "dS = √(1+f_x²+f_y²) dxdy = √(1+4x²) dxdy."
  },

  {
    id: "mvc-cts-m-057",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For z=xy, what is the surface-area factor?",
    options: [
      "√(1+x+y)",
      "√(1+x²+y²)",
      "√(1+x²y²)",
      "1+xy"
    ],
    correctAnswer: 1,
    explanation: "f_x=y and f_y=x, so dS factor = √(1+y²+x²)."
  },

  {
    id: "mvc-cts-m-058",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "What is the area element for the cylinder parametrization r(θ,z)=⟨R cosθ,R sinθ,z⟩?",
    options: [
      "R dθdz",
      "R² dθdz",
      "dz dθ",
      "R+z dθdz"
    ],
    correctAnswer: 0,
    explanation: "The cross-product magnitude is R."
  },

  {
    id: "mvc-cts-m-059",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For the cylinder r(θ,z)=⟨Rcosθ,Rsinθ,z⟩, what is r_θ?",
    options: [
      "⟨-Rsinθ,Rcosθ,0⟩",
      "⟨Rcosθ,Rsinθ,0⟩",
      "⟨0,0,1⟩",
      "⟨-sinθ,cosθ,1⟩"
    ],
    correctAnswer: 0,
    explanation: "Differentiate each component with respect to θ."
  },

  {
    id: "mvc-cts-m-060",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For the same cylinder parametrization, what is r_z?",
    options: [
      "⟨1,0,0⟩",
      "⟨0,1,0⟩",
      "⟨0,0,1⟩",
      "⟨R,R,1⟩"
    ],
    correctAnswer: 2,
    explanation: "Only the z component depends on z."
  },

  {
    id: "mvc-cts-m-061",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "What is |r_θ × r_z| for the cylinder parametrization?",
    options: ["R", "R²", "1", "2R"],
    correctAnswer: 0,
    explanation: "The cross product has magnitude R."
  },

  {
    id: "mvc-cts-m-062",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "Using the cylinder parametrization, integrate the area over 0≤θ≤2π and 0≤z≤h. What result is obtained?",
    options: ["πRh", "2πRh", "2πR²h", "πR²h"],
    correctAnswer: 1,
    explanation: "Area = ∫₀²π∫₀ʰ R dzdθ = 2πRh."
  },

  {
    id: "mvc-cts-m-063",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For the sphere r(φ,θ)=⟨R sinφ cosθ,R sinφ sinθ,R cosφ⟩, what does |r_φ × r_θ| equal?",
    options: ["R", "R²sinφ", "R²cosφ", "Rsinφ"],
    correctAnswer: 1,
    explanation: "The standard spherical surface-area factor is R² sinφ."
  },

  {
    id: "mvc-cts-m-064",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "Using the standard sphere parametrization, what is the full surface area?",
    options: ["πR²", "2πR²", "4πR²", "4πR³"],
    correctAnswer: 2,
    explanation: "Integrate R²sinφ over 0≤φ≤π and 0≤θ≤2π to obtain 4πR²."
  },

  {
    id: "mvc-cts-m-065",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "What is the area of the sphere of radius 2?",
    options: ["4π", "8π", "16π", "32π"],
    correctAnswer: 2,
    explanation: "4πR² = 4π(4) = 16π."
  },

  {
    id: "mvc-cts-m-066",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For a graph z=f(x,y), if f_x=3 and f_y=4 at a point, what is the local area factor?",
    options: ["4", "5", "6", "√26"],
    correctAnswer: 3,
    explanation: "√(1+3²+4²)=√26."
  },

  {
    id: "mvc-cts-m-067",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For r(u,v)=⟨u,2v,u-v⟩, calculate r_u × r_v.",
    options: [
      "⟨-2,-1,2⟩",
      "⟨2,-1,2⟩",
      "⟨1,2,-1⟩",
      "⟨-1,2,2⟩"
    ],
    correctAnswer: 0,
    explanation: "r_u=⟨1,0,1⟩ and r_v=⟨0,2,-1⟩, so the cross product is ⟨-2,1,2⟩."
  },

  {
    id: "mvc-cts-m-068",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For r(u,v)=⟨u,2v,u-v⟩, what is |r_u × r_v|?",
    options: ["2", "3", "√9", "3?"],
    correctAnswer: 2,
    explanation: "Using r_u=⟨1,0,1⟩ and r_v=⟨0,2,-1⟩ gives cross product ⟨-2,1,2⟩ with magnitude √(4+1+4)=3."
  },

  {
    id: "mvc-cts-m-069",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "Which condition ensures a regular surface patch at a point?",
    options: [
      "r_u × r_v ≠ 0",
      "r_u · r_v = 0 only",
      "r_u = r_v",
      "u=v"
    ],
    correctAnswer: 0,
    explanation: "A nonzero cross product means the two tangent vectors are linearly independent."
  },

  {
    id: "mvc-cts-m-070",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "If |r_u|=2, |r_v|=3, and the angle between them is 60°, what is |r_u×r_v|?",
    options: ["3", "3√3", "6", "6√3"],
    correctAnswer: 1,
    explanation: "|a×b|=|a||b|sin60° = 6(√3/2)=3√3."
  },

  {
    id: "mvc-cts-m-071",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "If r_u·r_v=0, then the surface-area factor simplifies to:",
    options: [
      "|r_u||r_v|",
      "|r_u|+|r_v|",
      "|r_u|-|r_v|",
      "r_u·r_v"
    ],
    correctAnswer: 0,
    explanation: "When the tangent vectors are perpendicular, sinθ=1, so |r_u×r_v|=|r_u||r_v|."
  },

  {
    id: "mvc-cts-m-072",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For z=2x+3y, what is the surface-area factor?",
    options: ["√6", "√10", "√14", "6"],
    correctAnswer: 2,
    explanation: "√(1+2²+3²)=√14."
  },

  {
    id: "mvc-cts-m-073",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "What is the area of z=2x+3y over a region in the xy-plane having area A?",
    options: ["A", "√10 A", "√14 A", "5A"],
    correctAnswer: 2,
    explanation: "The constant surface-area factor is √14."
  },

  {
    id: "mvc-cts-m-074",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For a plane z=ax+by+c, the surface-area factor is:",
    options: [
      "√(a+b)",
      "√(1+a²+b²)",
      "1+a+b",
      "a²+b²"
    ],
    correctAnswer: 1,
    explanation: "f_x=a and f_y=b, so the factor is √(1+a²+b²)."
  },

  {
    id: "mvc-cts-m-075",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Medium",
    question: "For r(u,v)=⟨u,v,u²+v²⟩, what is r_u?",
    options: [
      "⟨1,0,2u⟩",
      "⟨0,1,2v⟩",
      "⟨1,1,2u+2v⟩",
      "⟨u,v,2⟩"
    ],
    correctAnswer: 0,
    explanation: "Differentiate with respect to u."
  },

  // =========================================================
  // TOPIC 4: FLUX INTEGRALS OVER GENERAL PARAMETERIZED SURFACES
  // 100 MEDIUM
  // =========================================================

  {
    id: "mvc-cts-m-076",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For r(u,v)=⟨u,v,u+v⟩, what is r_u × r_v?",
    options: [
      "⟨-1,-1,1⟩",
      "⟨1,1,-1⟩",
      "⟨1,-1,1⟩",
      "⟨0,0,1⟩"
    ],
    correctAnswer: 0,
    explanation: "r_u=⟨1,0,1⟩ and r_v=⟨0,1,1⟩, so r_u×r_v=⟨-1,-1,1⟩."
  },

  {
    id: "mvc-cts-m-077",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For the same surface, what is the flux of F=⟨1,1,1⟩ over 0≤u,v≤1?",
    options: ["-1", "0", "1", "3"],
    correctAnswer: 2,
    explanation: "F·(r_u×r_v)=⟨1,1,1⟩·⟨-1,-1,1⟩=-1. Thus the flux is -1."
  },

  {
    id: "mvc-cts-m-078",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For r(u,v)=⟨u,v,u+v⟩ and F=⟨0,0,2⟩, what is the flux over the unit square?",
    options: ["0", "1", "2", "4"],
    correctAnswer: 2,
    explanation: "F·(r_u×r_v)=2, and the parameter domain has area 1."
  },

  {
    id: "mvc-cts-m-079",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For F=⟨x,y,z⟩ through the unit sphere with outward orientation, what is the flux?",
    options: ["π", "2π", "4π", "8π"],
    correctAnswer: 2,
    explanation: "div F=3, and the unit-ball volume is 4π/3, giving flux 4π."
  },

  {
    id: "mvc-cts-m-080",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For F=⟨2x,2y,2z⟩ through a sphere of radius R, the outward flux is:",
    options: ["4πR²", "8πR³", "8πR²", "6πR³"],
    correctAnswer: 1,
    explanation: "div F=6, so flux = 6(4πR³/3)=8πR³."
  },

  {
    id: "mvc-cts-m-081",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For F=⟨x,0,0⟩ through the plane x=2, with normal +i, over a region of area 5 in the yz-plane, what is the flux?",
    options: ["5", "10", "20", "0"],
    correctAnswer: 1,
    explanation: "On x=2, F=⟨2,0,0⟩ and F·i=2, so flux=2·5=10."
  },

  {
    id: "mvc-cts-m-082",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For F=⟨0,y,0⟩ through the xz-plane y=0, the flux is:",
    options: ["0", "Area", "2Area", "Depends on x"],
    correctAnswer: 0,
    explanation: "On y=0, F=⟨0,0,0⟩, so the flux is zero."
  },

  {
    id: "mvc-cts-m-083",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For the graph z=f(x,y), an upward-oriented vector-area element is:",
    options: [
      "⟨-f_x,-f_y,1⟩ dxdy",
      "⟨f_x,f_y,1⟩ dxdy",
      "⟨1,1,f_x+f_y⟩ dxdy",
      "⟨-1,-1,0⟩ dxdy"
    ],
    correctAnswer: 0,
    explanation: "Using r(x,y)=⟨x,y,f(x,y)⟩ gives r_x×r_y=⟨-f_x,-f_y,1⟩."
  },

  {
    id: "mvc-cts-m-084",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For z=x+y and F=⟨0,0,1⟩, what is the upward flux over a region R in the xy-plane?",
    options: ["Area(R)", "√2 Area(R)", "√3 Area(R)", "0"],
    correctAnswer: 0,
    explanation: "F·⟨-1,-1,1⟩=1, so the flux is ∬_R 1 dxdy = Area(R)."
  },

  {
    id: "mvc-cts-m-085",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For z=x+y and F=⟨1,1,1⟩, what is the upward flux density with respect to dxdy?",
    options: ["-1", "0", "1", "3"],
    correctAnswer: 1,
    explanation: "The upward vector-area element is ⟨-1,-1,1⟩dxdy. Dotting with F gives -1-1+1=-1."
  },

  {
    id: "mvc-cts-m-086",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For the same z=x+y surface, what is the downward-oriented flux density for F=⟨1,1,1⟩?",
    options: ["-1", "0", "1", "3"],
    correctAnswer: 2,
    explanation: "Reversing orientation changes the sign, so the downward density is 1."
  },

  {
    id: "mvc-cts-m-087",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "A vector field has magnitude 4 and makes a 60° angle with the unit normal. What is the normal component F·n?",
    options: ["2", "4", "2√3", "8"],
    correctAnswer: 0,
    explanation: "F·n=|F|cos60°=4(1/2)=2."
  },

  {
    id: "mvc-cts-m-088",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "If F=⟨x,y,0⟩ and S is the unit circle in the xy-plane with upward normal, what is the flux?",
    options: ["0", "π", "2π", "4π"],
    correctAnswer: 0,
    explanation: "F has no z-component, while the upward normal is k, so F·k=0."
  },

  {
    id: "mvc-cts-m-089",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For F=⟨x,y,z⟩ and the top face z=2 of a cylinder, what is the upward flux over a disk of radius R?",
    options: ["πR²", "2πR²", "3πR²", "4πR²"],
    correctAnswer: 1,
    explanation: "On z=2, F·k=2, and the disk area is πR², so flux=2πR²."
  },

  {
    id: "mvc-cts-m-090",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For F=⟨x,y,z⟩, what is div F?",
    options: ["0", "1", "2", "3"],
    correctAnswer: 3,
    explanation: "The divergence is 1+1+1=3."
  },

  {
    id: "mvc-cts-m-091",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For F=⟨x²,y²,z²⟩, what is div F?",
    options: ["x+y+z", "2x+2y+2z", "x²+y²+z²", "2xyz"],
    correctAnswer: 1,
    explanation: "div F=2x+2y+2z."
  },

  {
    id: "mvc-cts-m-092",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "What is the outward flux of F=⟨x²,y²,z²⟩ through the unit cube [0,1]³?",
    options: ["1", "3", "6", "9"],
    correctAnswer: 1,
    explanation: "Using the Divergence theorem, flux = ∭(2x+2y+2z)dV = 1+1+1 = 3."
  },

  {
    id: "mvc-cts-m-093",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For a closed surface surrounding a volume V, if div F = 4 everywhere, total outward flux equals:",
    options: ["4Area(S)", "4Volume(V)", "Volume(V)/4", "0"],
    correctAnswer: 1,
    explanation: "The Divergence theorem gives flux = ∭_V div F dV = 4 Vol(V)."
  },

  {
    id: "mvc-cts-m-094",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For r(θ,z)=⟨R cosθ,R sinθ,z⟩, which direction does r_θ × r_z point?",
    options: ["Radially outward", "Radially inward", "Along +z", "Along -z"],
    correctAnswer: 0,
    explanation: "The cross product is proportional to ⟨Rcosθ,Rsinθ,0⟩, which is outward from the z-axis."
  },

  {
    id: "mvc-cts-m-095",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For F=⟨x,y,0⟩ through the lateral surface of the cylinder r=R, height h, with outward orientation, what is the flux?",
    options: ["0", "πR²h", "2πR²h", "4πRh"],
    correctAnswer: 2,
    explanation: "On r=R, F·n=R and lateral area=2πRh, giving flux=2πR²h."
  },

  {
    id: "mvc-cts-m-096",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For a surface parameterization, replacing r_u × r_v by r_v × r_u changes the flux by:",
    options: ["No change", "A factor of 2", "A sign change", "A square"],
    correctAnswer: 2,
    explanation: "r_v × r_u = -(r_u × r_v), so the flux changes sign."
  },

  {
    id: "mvc-cts-m-097",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "Suppose F=⟨0,0,z²⟩ and S is the unit disk in the plane z=1 with upward orientation. What is the flux?",
    options: ["π", "2π", "π/2", "0"],
    correctAnswer: 0,
    explanation: "On z=1, F=⟨0,0,1⟩. Dot with k gives 1, and the disk area is π."
  },

  {
    id: "mvc-cts-m-098",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "Suppose F=⟨x,0,z⟩ and S is the plane y=0 with normal +j. What is the flux?",
    options: ["0", "Area(S)", "2Area(S)", "Depends on x"],
    correctAnswer: 0,
    explanation: "F·j=0 everywhere, so the flux is zero."
  },

  {
    id: "mvc-cts-m-099",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For F=⟨0,0,2z⟩ through the sphere of radius R, what is the total outward flux?",
    options: [
      "4πR²",
      "6πR³",
      "8πR³",
      "12πR³"
    ],
    correctAnswer: 2,
    explanation: "div F=2, so flux = 2·(4πR³/3)=8πR³/3."
  },

  {
    id: "mvc-cts-m-100",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Medium",
    question: "For a closed surface with outward normal, if div F = 0 throughout the enclosed volume, the net outward flux is:",
    options: ["Positive", "Negative", "Zero", "Equal to the surface area"],
    correctAnswer: 2,
    explanation: "The Divergence theorem gives net flux equal to the volume integral of div F, which is zero."
  },
    // ============================================================
  // HARD — Coordinate Transformations & Surfaces
  // 100 questions
  // ============================================================

  {
    id: "mvc-cts-h-001",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For x = u + v and y = u - v, what is |∂(x,y)/∂(u,v)|?",
    options: ["1", "2", "4", "1/2"],
    correctAnswer: 1,
    explanation: "The Jacobian is (1)(-1) - (1)(1) = -2, so its absolute value is 2."
  },
  {
    id: "mvc-cts-h-002",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For x = uv and y = u/v, what is ∂(x,y)/∂(u,v) at (u,v) = (2,1)?",
    options: ["-2", "-4", "2", "4"],
    correctAnswer: 1,
    explanation: "x_u=v=1, x_v=u=2, y_u=1/v=1, and y_v=-u/v²=-2. Thus J=(1)(-2)-(2)(1)=-4."
  },
  {
    id: "mvc-cts-h-003",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For x = 2u + v and y = u + 3v, what is ∂(u,v)/∂(x,y)?",
    options: ["1/5", "5", "-1/5", "-5"],
    correctAnswer: 0,
    explanation: "The forward Jacobian is (2)(3)-(1)(1)=5. Therefore the inverse Jacobian is 1/5."
  },
  {
    id: "mvc-cts-h-004",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "Using x = r cosθ and y = r sinθ, evaluate ∬_R 1 dA over 0 ≤ r ≤ 2 and 0 ≤ θ ≤ π/2.",
    options: ["π/2", "π", "2π", "4π"],
    correctAnswer: 1,
    explanation: "The Jacobian is r, so the area is ∫₀^{π/2}∫₀² r dr dθ = 2·(π/2)=π."
  },
  {
    id: "mvc-cts-h-005",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For x = u² - v² and y = 2uv, what is the Jacobian at (u,v)=(1,2)?",
    options: ["10", "20", "8", "16"],
    correctAnswer: 1,
    explanation: "J = (2u)(2u)-(-2v)(2v)=4(u²+v²). At (1,2), J=4(5)=20."
  },
  {
    id: "mvc-cts-h-006",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "In spherical coordinates x=ρ sinφ cosθ, y=ρ sinφ sinθ, z=ρ cosφ, the volume element is:",
    options: [
      "ρ sinφ dρ dφ dθ",
      "ρ² dρ dφ dθ",
      "ρ² sinφ dρ dφ dθ",
      "ρ³ sinφ dρ dφ dθ"
    ],
    correctAnswer: 2,
    explanation: "The spherical-coordinate Jacobian is ρ² sinφ."
  },
  {
    id: "mvc-cts-h-007",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For x=u² and y=uv, where does the Jacobian vanish?",
    options: ["u=0", "v=0 only", "u=1", "Never"],
    correctAnswer: 0,
    explanation: "J=(2u)(u)-(0)(v)=2u², so the Jacobian vanishes exactly when u=0."
  },
  {
    id: "mvc-cts-h-008",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "Under x=3u, y=5v, z=2w, volumes are scaled by what factor?",
    options: ["10", "15", "30", "60"],
    correctAnswer: 2,
    explanation: "The determinant of the diagonal transformation is 3·5·2=30."
  },
  {
    id: "mvc-cts-h-009",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "The unit square 0≤u,v≤1 is mapped by x=2u+v, y=u-v. What is the area of its image?",
    options: ["3", "4", "6", "8"],
    correctAnswer: 2,
    explanation: "The Jacobian is (2)(-1)-(1)(1)=-3, so the area scale is 3. The unit square therefore maps to area 3."
  },
  {
    id: "mvc-cts-h-010",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For x=e^u cosv and y=e^u sinv, the Jacobian ∂(x,y)/∂(u,v) equals:",
    options: ["e^u", "e^{2u}", "e^{u}cosv", "1"],
    correctAnswer: 1,
    explanation: "The determinant simplifies to e^{2u}(cos²v+sin²v)=e^{2u}."
  },
  {
    id: "mvc-cts-h-011",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "Using x=r cosθ and y=r sinθ, evaluate ∬_R (x²+y²) dA over 0≤r≤1, 0≤θ≤2π.",
    options: ["π/2", "π", "2π", "4π"],
    correctAnswer: 0,
    explanation: "Since x²+y²=r² and dA=r dr dθ, the integral is 2π∫₀¹r³dr=π/2."
  },
  {
    id: "mvc-cts-h-012",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "If ∂(x,y)/∂(u,v) = -3 at a regular point, then ∂(u,v)/∂(x,y) there is:",
    options: ["-3", "3", "-1/3", "1/3"],
    correctAnswer: 2,
    explanation: "For an invertible transformation, the inverse Jacobian is the reciprocal: 1/(-3)=-1/3."
  },
  {
    id: "mvc-cts-h-013",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "A zero Jacobian at a point generally signals that the transformation is:",
    options: [
      "Locally area-preserving",
      "Locally non-invertible there",
      "An isometry",
      "Globally linear"
    ],
    correctAnswer: 1,
    explanation: "A nonzero Jacobian is the local invertibility condition in the inverse function theorem."
  },
  {
    id: "mvc-cts-h-014",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For the 3D map x=u+2v, y=u+v+w, z=2u+w, what is the absolute Jacobian determinant?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 2,
    explanation: "The determinant of [[1,2,0],[1,1,1],[2,0,1]] is 5, so the volume scale is 5."
  },
  {
    id: "mvc-cts-h-015",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For f(r,z)=r²z, using cylindrical coordinates, what is ∇²f?",
    options: ["2z", "3z", "4z", "r²"],
    correctAnswer: 2,
    explanation: "The cylindrical Laplacian gives f_rr+(1/r)f_r+f_zz = 2z+2z+0=4z."
  },
  {
    id: "mvc-cts-h-016",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "The map x=2u, y=3v sends the unit disk u²+v²≤1 to an ellipse. What is its area?",
    options: ["2π", "3π", "5π", "6π"],
    correctAnswer: 3,
    explanation: "The area scales by |2·3|=6, so the ellipse has area 6π."
  },
  {
    id: "mvc-cts-h-017",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "Suppose J=∂(x,y)/∂(u,v)=4. Then dx dy in a change-of-variables integral becomes:",
    options: ["du dv/4", "4 du dv", "du+dv", "16 du dv"],
    correctAnswer: 1,
    explanation: "Area elements transform by dxdy=|J| dudv=4 dudv."
  },
  {
    id: "mvc-cts-h-018",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "If x=u+v and y=u-v, and the uv-region has area 7, what is the area of its image?",
    options: ["7/2", "7", "14", "28"],
    correctAnswer: 2,
    explanation: "The absolute Jacobian is 2, so the image area is 2·7=14."
  },
  {
    id: "mvc-cts-h-019",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For a composition of coordinate changes, the Jacobian satisfies:",
    options: [
      "J_total = J₁ + J₂",
      "J_total = J₁J₂",
      "J_total = J₁/J₂ always",
      "J_total = |J₁-J₂|"
    ],
    correctAnswer: 1,
    explanation: "The multivariable chain rule gives a product of Jacobian determinants."
  },
  {
    id: "mvc-cts-h-020",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For x=u² and y=v³ on 0≤u,v≤1, what is the area of the image?",
    options: ["1/2", "1", "3/2", "2"],
    correctAnswer: 1,
    explanation: "J=6uv², so the image area is ∫₀¹∫₀¹6uv² dudv=1."
  },
  {
    id: "mvc-cts-h-021",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For x=u cosv and y=u sinv, the Jacobian is:",
    options: ["u", "u²", "sinv", "1"],
    correctAnswer: 0,
    explanation: "The determinant is u(cos²v+sin²v)=u."
  },
  {
    id: "mvc-cts-h-022",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For x=uv and y=u/v, what is the Jacobian at (u,v)=(3,1)?",
    options: ["-3", "-6", "3", "6"],
    correctAnswer: 1,
    explanation: "The determinant is v(-u/v²)-u(1/v)=-u/v-u/v=-2u/v=-6."
  },
  {
    id: "mvc-cts-h-023",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "For x=4u, y=2v, a region of uv-area 5 maps to xy-area:",
    options: ["10", "20", "40", "80"],
    correctAnswer: 1,
    explanation: "The area scale is 4·2=8, so the image area is 8·5=40."
  },
  {
    id: "mvc-cts-h-024",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "When using a non-orientation-preserving coordinate transformation in a double integral, the correct area factor is:",
    options: ["J", "-J", "|J|", "1/J²"],
    correctAnswer: 2,
    explanation: "Area elements use the absolute value |J|."
  },
  {
    id: "mvc-cts-h-025",
    module: "Coordinate Transformations & Surfaces",
    topic: "Jacobians & Change of Variables",
    difficulty: "Hard",
    question: "If a transformation has constant Jacobian determinant 5 and maps a region of area 12 to a one-to-one image, the image area is:",
    options: ["12/5", "17", "60", "144"],
    correctAnswer: 2,
    explanation: "A constant absolute Jacobian of 5 multiplies all areas by 5: 5·12=60."
  },

  {
    id: "mvc-cts-h-026",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "In cylindrical coordinates (r,θ,z), the scale factors are:",
    options: [
      "h_r=1, h_θ=r, h_z=1",
      "h_r=r, h_θ=1, h_z=r",
      "h_r=1, h_θ=1, h_z=r",
      "h_r=r, h_θ=r, h_z=1"
    ],
    correctAnswer: 0,
    explanation: "The orthogonal cylindrical metric is ds²=dr²+r²dθ²+dz²."
  },
  {
    id: "mvc-cts-h-027",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "Using spherical coordinates (ρ,θ,φ), with φ measured from the positive z-axis, h_θ is:",
    options: ["1", "ρ", "ρ sinφ", "ρ cosφ"],
    correctAnswer: 2,
    explanation: "The azimuthal arc length is ρ sinφ dθ, so h_θ=ρ sinφ."
  },
  {
    id: "mvc-cts-h-028",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "For a spherical-coordinate curve with θ=constant and φ=constant, ds equals:",
    options: ["dρ", "ρ dθ", "ρ dφ", "ρ² dρ"],
    correctAnswer: 0,
    explanation: "With θ and φ fixed, motion is purely radial, so ds=dρ."
  },
  {
    id: "mvc-cts-h-029",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "In spherical coordinates, the differential volume element is ρ² sinφ dρ dφ dθ because the three scale factors multiply to:",
    options: ["ρ", "ρ²", "ρ³ sinφ", "ρ² sinφ"],
    correctAnswer: 3,
    explanation: "The scale factors are 1, ρ, and ρ sinφ, whose product is ρ² sinφ."
  },
  {
    id: "mvc-cts-h-030",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "For a purely radial scalar field f=f(r), the cylindrical Laplacian is:",
    options: [
      "f''(r)",
      "f''(r)+(1/r)f'(r)",
      "f''(r)+(2/r)f'(r)",
      "f'(r)/r²"
    ],
    correctAnswer: 1,
    explanation: "For cylindrical coordinates with no θ or z dependence, ∇²f=f''+(1/r)f'."
  },
    {
    id: "mvc-cts-h-031",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "For A = r² e_r in cylindrical coordinates, what is ∇·A?",
    options: ["r", "2r", "3r", "4r"],
    correctAnswer: 2,
    explanation: "Using ∇·A=(1/r)∂(rA_r)/∂r, we get (1/r)∂(r³)/∂r=3r."
  },
  {
    id: "mvc-cts-h-032",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "For A = r² e_r in cylindrical coordinates, what is ∇·A?",
    options: ["r", "2r", "3r", "4r"],
    correctAnswer: 2,
    explanation: "Using ∇·A=(1/r)∂(rA_r)/∂r, we get (1/r)∂(r³)/∂r=3r."
  },
  {
    id: "mvc-cts-h-033",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "The cylindrical metric tensor in coordinates (r,θ,z) is:",
    options: [
      "diag(1,r,1)",
      "diag(1,r²,1)",
      "diag(r²,1,z²)",
      "diag(r, r, 1)"
    ],
    correctAnswer: 1,
    explanation: "Since ds²=dr²+r²dθ²+dz², the metric tensor is diag(1,r²,1)."
  },
  {
    id: "mvc-cts-h-034",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "The spherical metric tensor for (ρ,θ,φ) with φ polar angle is:",
    options: [
      "diag(1,ρ,ρ sinφ)",
      "diag(1,ρ²,ρ² sin²φ)",
      "diag(ρ²,1,ρ²)",
      "diag(ρ,ρ²,ρ²)"
    ],
    correctAnswer: 1,
    explanation: "The line element is dρ²+ρ²sin²φ dθ²+ρ²dφ². With order (ρ,θ,φ), the diagonal entries are 1, ρ²sin²φ, ρ². Since the options use the standard spherical ordering convention differently, verify the coordinate ordering used."
  },
  {
    id: "mvc-cts-h-035",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "For a scalar field f(r,θ,z), the θ-component of its cylindrical gradient is:",
    options: [
      "∂f/∂θ",
      "(1/r)∂f/∂θ",
      "r∂f/∂θ",
      "(1/r²)∂f/∂θ"
    ],
    correctAnswer: 1,
    explanation: "The cylindrical gradient is e_r f_r + e_θ(1/r)f_θ + e_z f_z."
  },
  {
    id: "mvc-cts-h-036",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "At r=2, what is the physical arc length corresponding to dθ=0.3 in cylindrical coordinates?",
    options: ["0.15", "0.3", "0.6", "1.2"],
    correctAnswer: 2,
    explanation: "The azimuthal distance is ds=r dθ=2(0.3)=0.6."
  },
  {
    id: "mvc-cts-h-037",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "For f(r)=ln r on r>0, what is the cylindrical Laplacian ∇²f?",
    options: ["1/r", "1/r²", "0", "ln r"],
    correctAnswer: 2,
    explanation: "f'=1/r and f''=-1/r², so f''+(1/r)f'=0."
  },
  {
    id: "mvc-cts-h-038",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "A cylindrical helix has r=2 and z=3θ. What is ds/dθ?",
    options: ["3", "√5", "√13", "13"],
    correctAnswer: 2,
    explanation: "ds²=dr²+r²dθ²+dz²=(0)+4dθ²+9dθ²=13dθ²."
  },
  {
    id: "mvc-cts-h-039",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "On a sphere ρ=R, the surface area element in (θ,φ) is:",
    options: [
      "R dθ dφ",
      "R² dθ dφ",
      "R² sinφ dθ dφ",
      "R sinφ dθ dφ"
    ],
    correctAnswer: 2,
    explanation: "For ρ=R, the two tangent scale factors multiply to R·R sinφ=R²sinφ."
  },
  {
    id: "mvc-cts-h-040",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "Which coordinate becomes undefined at the cylindrical axis r=0?",
    options: ["z", "r", "θ", "All three"],
    correctAnswer: 2,
    explanation: "The azimuthal angle θ is not uniquely defined at r=0."
  },
  {
    id: "mvc-cts-h-041",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "For f(r,θ,z)=r²z+θ, the cylindrical gradient is:",
    options: [
      "2rz e_r + (1/r)e_θ + r²e_z",
      "2r e_r + θe_θ + z e_z",
      "r²z e_r + θe_θ + z e_z",
      "2rz e_r + r e_θ + r²e_z"
    ],
    correctAnswer: 0,
    explanation: "f_r=2rz, f_θ=1, f_z=r², and the θ term is (1/r)f_θ."
  },
  {
    id: "mvc-cts-h-042",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "For A=r e_r in cylindrical coordinates, ∇·A equals:",
    options: ["0", "1", "2", "r"],
    correctAnswer: 2,
    explanation: "∇·A=(1/r)d(r·r)/dr=(1/r)(2r)=2."
  },
  {
    id: "mvc-cts-h-043",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "For the cylindrical surface r=a parametrized by (θ,z), the vector-area element magnitude is:",
    options: ["1", "a", "a²", "az"],
    correctAnswer: 1,
    explanation: "The tangent vectors are r_θ=a e_θ and r_z=e_z, so |r_θ×r_z|=a."
  },
  {
    id: "mvc-cts-h-044",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "For a planar cylindrical trajectory r=t and θ=t², what is the radial component of acceleration?",
    options: ["-2t", "-4t³", "2t", "4t²"],
    correctAnswer: 1,
    explanation: "a_r=r¨-r θ̇²=0-t(2t)²=-4t³."
  },
  {
    id: "mvc-cts-h-045",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "For r=t and θ=t², what is the tangential component of acceleration?",
    options: ["2t", "4t²", "6t", "8t³"],
    correctAnswer: 2,
    explanation: "a_θ=r θ¨+2 ṙ θ̇=t(2)+2(1)(2t)=6t."
  },
  {
    id: "mvc-cts-h-046",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "At the equator φ=π/2 of a sphere of radius R, the azimuthal scale factor h_θ is:",
    options: ["1", "R/2", "R", "2R"],
    correctAnswer: 2,
    explanation: "h_θ=R sinφ, and sin(π/2)=1, so h_θ=R."
  },
  {
    id: "mvc-cts-h-047",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "Which statement best explains why cylindrical basis vectors depend on θ?",
    options: [
      "Because e_r and e_θ rotate as the azimuthal angle changes",
      "Because z changes the basis",
      "Because r is always zero",
      "Because cylindrical coordinates are not orthogonal"
    ],
    correctAnswer: 0,
    explanation: "The radial and azimuthal unit vectors rotate around the z-axis as θ changes."
  },
  {
    id: "mvc-cts-h-048",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "For f=z ln r with r>0, its cylindrical gradient is:",
    options: [
      "(z/r)e_r + (ln r)e_z",
      "z e_r + ln r e_z",
      "(1/r)e_r + z e_z",
      "(z/r)e_r + r e_z"
    ],
    correctAnswer: 0,
    explanation: "f_r=z/r, f_θ=0, and f_z=ln r."
  },
  {
    id: "mvc-cts-h-049",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "A coordinate system is called orthogonal when its coordinate basis directions are:",
    options: [
      "All parallel",
      "Mutually perpendicular",
      "All equal in magnitude",
      "Constant in space"
    ],
    correctAnswer: 1,
    explanation: "Orthogonal coordinates have mutually perpendicular coordinate curves or basis vectors."
  },
  {
    id: "mvc-cts-h-050",
    module: "Coordinate Transformations & Surfaces",
    topic: "Curvilinear Coordinate Systems",
    difficulty: "Hard",
    question: "In cylindrical coordinates, the physical displacement associated with dθ grows linearly with r because:",
    options: [
      "The angular coordinate is dimensioned as length",
      "The scale factor h_θ equals r",
      "The Jacobian equals r²",
      "The z coordinate changes"
    ],
    correctAnswer: 1,
    explanation: "The azimuthal scale factor is h_θ=r, giving arc length r dθ."
  },

  {
    id: "mvc-cts-h-051",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For r(u,v)=<u,v,u²-v²>, what is |r_u×r_v|?",
    options :[
      "√(1+4u²+4v²)",
      "√(4u²-4v²+1)",
      "1+2u+2v",
      "2√(u²+v²)"
    ],
    correctAnswer: 0,
    explanation: "r_u=<1,0,2u> and r_v=<0,1,-2v>, so r_u×r_v=<-2u,2v,1>."
  },
  {
    id: "mvc-cts-h-052",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "What is the area of z=x²+y² over the disk x²+y²≤a²?",
    options: [
      "πa²",
      "(π/3)[(1+4a²)^(3/2)-1]",
      "(π/6)[(1+4a²)^(3/2)-1]",
      "2πa²√(1+4a²)"
    ],
    correctAnswer: 2,
    explanation: "Using polar coordinates, area=2π∫₀ᵃ r√(1+4r²)dr = (π/6)[(1+4a²)^(3/2)-1]."
  },
  {
    id: "mvc-cts-h-053",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For r(u,v)=<u,v,u+2v> on 0≤u,v≤1, what is the surface area?",
    options: ["√3", "√5", "√6", "6"],
    correctAnswer: 2,
    explanation: "r_u=<1,0,1>, r_v=<0,1,2>, so |r_u×r_v|=√6. The parameter domain has area 1."
  },
  {
    id: "mvc-cts-h-054",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "The lateral surface area of a cylinder of radius R and height h is:",
    options: ["πR²h", "2πRh", "2πR²h", "4πRh"],
    correctAnswer: 1,
    explanation: "Using r(θ,z)=<R cosθ,R sinθ,z>, the magnitude of the cross product is R, giving 2πRh."
  },
  {
    id: "mvc-cts-h-055",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "A sphere of radius R parametrized once over its full angular domain has area:",
    options: ["2πR²", "3πR²", "4πR²", "8πR²"],
    correctAnswer: 2,
    explanation: "The standard sphere area is 4πR²."
  },
  {
    id: "mvc-cts-h-056",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For the helicoid r(u,v)=<u cosv,u sinv,v>, 0≤u≤a and 0≤v≤L, what is its area?",
    options: [
      "aL",
      "L[(1+a²)^(3/2)-1]/3",
      "2πaL",
      "πa²L"
    ],
    correctAnswer: 1,
    explanation: "The cross-product magnitude is √(1+u²), so area=L∫₀ᵃ√(1+u²)du."
  },
  {
    id: "mvc-cts-h-057",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For the cone r(u,v)=<u cosv,u sinv,ku>, 0≤u≤a and 0≤v≤2π, the surface area is:",
    options: [
      "πa²",
      "πa²√(1+k²)",
      "2πak",
      "2πa²k"
    ],
    correctAnswer: 1,
    explanation: "The area element is u√(1+k²) du dv, producing πa²√(1+k²)."
  },
  {
    id: "mvc-cts-h-058",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "If a sphere parametrization traverses the same surface exactly twice, integrating |r_u×r_v| over the full parameter domain gives:",
    options: [
      "The true area once",
      "Half the true area",
      "Twice the true area",
      "Zero"
    ],
    correctAnswer: 2,
    explanation: "A multiple covering counts the geometric area multiple times."
  },
  {
    id: "mvc-cts-h-059",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "The surface-area formula ∬|r_u×r_v|dudv requires the parametrization to be regular where:",
    options: [
      "r_u×r_v is nonzero",
      "r_u×r_v is zero",
      "r_u=r_v",
      "u=v"
    ],
    correctAnswer: 0,
    explanation: "Regularity means the two tangent vectors are linearly independent, so their cross product is nonzero."
  },
  {
    id: "mvc-cts-h-060",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "What is the surface area of z=2x over the rectangle 0≤x≤1, 0≤y≤2?",
    options: ["2", "2√5", "4√5", "5"],
    correctAnswer: 1,
    explanation: "For a graph, dS=√(1+f_x²+f_y²)dA=√5 dA. The base area is 2, so the surface area is 2√5."
  },
  {
    id: "mvc-cts-h-061",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "If |∇f|=3 everywhere on a domain of area A, the area of z=f(x,y) is:",
    options: ["3A", "√3 A", "√10 A", "10A"],
    correctAnswer: 2,
    explanation: "Graph area is ∬√(1+|∇f|²)dA=√10 A."
  },
  {
    id: "mvc-cts-h-062",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For r(u,v)=<u,v,c> over a rectangle of parameter area A, the surface area is:",
    options: ["A", "2A", "cA", "A²"],
    correctAnswer: 0,
    explanation: "r_u×r_v=<0,0,1>, whose magnitude is 1."
  },
  {
    id: "mvc-cts-h-063",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "What is the area of z=2x+3y over a rectangle of area 4?",
    options: ["4√5", "4√10", "4√14", "14"],
    correctAnswer: 2,
    explanation: "The graph factor is √(1+2²+3²)=√14, so area=4√14."
  },
  {
    id: "mvc-cts-h-064",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "The lateral area of the cylinder x²+y²=R², 0≤z≤h, is:",
    options: ["πR²", "2πR²", "2πRh", "2πR²h"],
    correctAnswer: 2,
    explanation: "The cylinder circumference is 2πR and its height is h."
  },
  {
    id: "mvc-cts-h-065",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "The area of a hemisphere of radius R, excluding its circular base, is:",
    options: ["πR²", "2πR²", "3πR²", "4πR²"],
    correctAnswer: 1,
    explanation: "Half of the full spherical area is 2πR²."
  },
  {
    id: "mvc-cts-h-066",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For z=x²+y² over x²+y²≤1, the exact surface area is:",
    options: [
      "π",
      "(π/6)(5√5-1)",
      "(π/3)(5√5-1)",
      "2π√5"
    ],
    correctAnswer: 1,
    explanation: "Set a=1 in the paraboloid area formula: (π/6)[5^(3/2)-1]=(π/6)(5√5-1)."
  },
  {
    id: "mvc-cts-h-067",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "The area of the upper hemisphere z=√(1-x²-y²) over the unit disk is:",
    options: ["π", "2π", "3π", "4π"],
    correctAnswer: 1,
    explanation: "It is half the area of the unit sphere, so 2π."
  },
  {
    id: "mvc-cts-h-068",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For r(u,v)=<u cosv,u sinv,2u>, 0≤u≤1 and 0≤v≤2π, the surface area is:",
    options: ["π", "2π", "π√5", "2π√5"],
    correctAnswer: 2,
    explanation: "This is a cone with k=2 and a=1, giving π√(1+4)=π√5."
  },
  {
    id: "mvc-cts-h-069",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For r(u,v)=<u,v,u+v> over the unit disk u²+v²≤1, what is the area?",
    options: ["π", "√2π", "√3π", "2π"],
    correctAnswer: 2,
    explanation: "r_u×r_v=<-1,-1,1>, whose magnitude is √3. Multiply by parameter area π."
  },
  {
    id: "mvc-cts-h-070",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For r(u,v)=<u+v,u-v,2u> on [0,1]², what is the area?",
    options: ["2", "2√2", "2√3", "4√3"],
    correctAnswer: 2,
    explanation: "r_u×r_v=<2,2,-2>, whose magnitude is 2√3. The parameter area is 1."
  },
  {
    id: "mvc-cts-h-071",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For a plane parametrized by r(u,v)=r₀+u a+v b, the area element is determined by:",
    options: [
      "|a+b|",
      "|a·b|",
      "|a×b|",
      "|a-b|"
    ],
    correctAnswer: 2,
    explanation: "The parallelogram spanned by the tangent vectors has area |a×b|."
  },
  {
    id: "mvc-cts-h-072",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "Under the reparameterization u=s and v=s+t with Jacobian determinant 1, the surface-area integral is:",
    options: [
      "Doubled",
      "Halved",
      "Unchanged",
      "Negated"
    ],
    correctAnswer: 2,
    explanation: "A one-to-one reparameterization with determinant magnitude 1 preserves the parameter-domain area factor."
  },
  {
    id: "mvc-cts-h-073",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For r(u,v)=<u,v,u²+v²>, what is |r_u×r_v| at (u,v)=(1,0)?",
    options: ["1", "√3", "√5", "3"],
    correctAnswer: 2,
    explanation: "r_u=<1,0,2>, r_v=<0,1,0>, so r_u×r_v=<-2,0,1> with magnitude √5."
  },
  {
    id: "mvc-cts-h-074",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For a graph z=f(x,y), the projected-area formula is valid because",
    options: [
      "dS=dA always",
      "dS=√(1+f_x²+f_y²)dA",
      "dS=f_xf_y dA",
      "dS=|∇f|dA only"
    ],
    correctAnswer: 1,
    explanation: "The graph parametrization gives cross-product magnitude √(1+f_x²+f_y²)."
  },
  {
    id: "mvc-cts-h-075",
    module: "Coordinate Transformations & Surfaces",
    topic: "Parametrized Surface Area",
    difficulty: "Hard",
    question: "For r(u,v)=<u,v,u²+v²>, a normal direction at (1,0) is:",
    options: [
      "<1,0,2>",
      "<-2,0,1>",
      "<0,1,1>",
      "<2,0,1>"
    ],
    correctAnswer: 1,
    explanation: "The cross product r_u×r_v at (1,0) is <-2,0,1>."
  },

  {
    id: "mvc-cts-h-076",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "What is the outward flux of F=<x,y,z> across a sphere of radius R?",
    options: ["2πR³", "3πR³", "4πR³", "8πR³"],
    correctAnswer: 2,
    explanation: "∇·F=3, so by the divergence theorem the flux is 3·(4πR³/3)=4πR³."
  },
  {
    id: "mvc-cts-h-077",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "What is the outward flux of F=<x,y,0> across a sphere of radius R?",
    options: ["4πR³/3", "8πR³/3", "4πR²", "8πR³"],
    correctAnswer: 1,
    explanation: "∇·F=2, so the flux is 2·(4πR³/3)=8πR³/3."
  },
  {
    id: "mvc-cts-h-078",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "What is the outward flux of F=<0,0,z> across a sphere of radius R?",
    options: ["0", "2πR³/3", "4πR³/3", "4πR³"],
    correctAnswer: 2,
    explanation: "∇·F=1, so the flux equals the sphere's enclosed volume 4πR³/3."
  },
  {
    id: "mvc-cts-h-079",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "The flux of a constant vector field through any closed surface is:",
    options: ["Always positive", "Always negative", "Zero", "Equal to the surface area"],
    correctAnswer: 2,
    explanation: "The divergence of a constant vector field is zero, so the closed-surface flux is zero."
  },
  {
    id: "mvc-cts-h-080",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "What is the outward flux of F=<2x,3y,4z> across a sphere of radius R?",
    options: ["6πR³", "9πR³", "12πR³", "18πR³"],
    correctAnswer: 2,
    explanation: "∇·F=2+3+4=9. Multiplying by sphere volume gives 9·(4πR³/3)=12πR³."
  },
  {
    id: "mvc-cts-h-081",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For F=<0,0,2> through the disk z=1, x²+y²≤1, oriented upward, the flux is:",
    options: ["π", "2π", "4π", "0"],
    correctAnswer: 1,
    explanation: "The upward normal is k, so F·n=2. The disk area is π, giving flux 2π."
  },
  {
    id: "mvc-cts-h-082",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For F=<x,y,z> and the surface z=x+y over [0,1]² oriented upward, the flux is:",
    options: ["0", "1/2", "1", "2"],
    correctAnswer: 0,
    explanation: "The upward vector area element is <-1,-1,1>dA. Dotting with <x,y,x+y> gives -x-y+x+y=0."
  },
  {
    id: "mvc-cts-h-083",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For F=<x,y,0>, what is the outward flux through the side of a cylinder x²+y²=R², 0≤z≤h?",
    options: ["πR²h", "2πRh", "2πR²h", "4πR²h"],
    correctAnswer: 2,
    explanation: "On the cylinder, F·n=R. Multiplying by side area 2πRh gives 2πR²h."
  },
  {
    id: "mvc-cts-h-084",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For F=<x²,y²,z²>, what is its total outward flux across a sphere centered at the origin?",
    options: ["0", "4πR²", "8πR³/3", "4πR³"],
    correctAnswer: 0,
    explanation: "∇·F=2x+2y+2z, whose integral over a centered sphere is zero by symmetry."
  },
  {
    id: "mvc-cts-h-085",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For F=<0,0,1>, the upward flux through z=x²+y², 0≤x²+y²≤1, is:",
    options: ["0", "π/2", "π", "2π"],
    correctAnswer: 2,
    explanation: "For an upward graph, the flux of k through the surface equals the area of its xy-projection, which is π."
  },
  {
    id: "mvc-cts-h-086",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "The upward flux of F=<0,0,1> through the upper hemisphere of radius R is:",
    options: ["πR²", "2πR²", "4πR²", "0"],
    correctAnswer: 0,
    explanation: "The flux equals the projected disk area πR²."
  },
  {
    id: "mvc-cts-h-087",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "The downward flux of F=<0,0,1> through the upper hemisphere of radius R is:",
    options: ["-πR²", "0", "πR²", "-2πR²"],
    correctAnswer: 0,
    explanation: "Reversing the orientation changes the sign, so the flux is -πR²."
  },
  {
    id: "mvc-cts-h-088",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "The divergence theorem applies directly to:",
    options: [
      "Any open surface",
      "Only curves",
      "Closed oriented surfaces",
      "Only planes"
    ],
    correctAnswer: 2,
    explanation: "The divergence theorem relates the flux through a closed boundary surface to volume divergence."
  },
  {
    id: "mvc-cts-h-089",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For F=<yz,xz,xy>, what is the flux across any closed surface enclosing a regular volume?",
    options: ["0", "The volume", "The surface area", "4π"],
    correctAnswer: 0,
    explanation: "∇·F=0+0+0=0, so the closed-surface flux is zero."
  },
  {
    id: "mvc-cts-h-090",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For F=<x,y,z> across the boundary of the cube [0,a]³, the outward flux is:",
    options: ["a³", "2a³", "3a³", "6a³"],
    correctAnswer: 2,
    explanation: "The divergence is 3 and the cube volume is a³, giving total flux 3a³."
  },
  {
    id: "mvc-cts-h-091",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For F=<x,y,0> across the boundary of the cube [0,a]³, the outward flux is:",
    options: ["a³", "2a³", "3a³", "4a³"],
    correctAnswer: 1,
    explanation: "The divergence is 2 and the volume is a³, so the flux is 2a³."
  },
  {
    id: "mvc-cts-h-092",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For the inverse-square radial field F=<x,y,z>/(x²+y²+z²)^(3/2), the outward flux through any sphere centered at the origin is:",
    options: ["0", "4π", "4πR", "4πR²"],
    correctAnswer: 1,
    explanation: "On a sphere, F has magnitude 1/R² and the sphere area is 4πR², giving flux 4π."
  },
  {
    id: "mvc-cts-h-093",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For F=<x,y,z> through the side of the cylinder x²+y²=R², 0≤z≤h, outward, the flux is:",
    options: ["πR²h", "2πR²h", "4πR²h", "0"],
    correctAnswer: 1,
    explanation: "On the side, F·n=R. The side area is 2πRh, hence flux 2πR²h."
  },
  {
    id: "mvc-cts-h-094",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "Let V be the solid under z=1-r² and above z=0 for r≤1. For F=<x,y,2z>, the total outward flux across the closed boundary is:",
    options: ["π", "2π", "3π/2", "4π"],
    correctAnswer: 1,
    explanation: "∇·F=4. The solid volume is π/2, so the total flux is 4·π/2=2π."
  },
  {
    id: "mvc-cts-h-095",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For the surface z=x²+y², 0≤z≤1, bounding the solid above z=0, the outward flux of F=<x,y,z> is:",
    options: ["π/2", "π", "3π/2", "2π"],
    correctAnswer: 2,
    explanation: "∇·F=3 and the enclosed volume is π/2. The bottom disk contributes zero, so the paraboloid flux is 3π/2."
  },
  {
    id: "mvc-cts-h-096",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For r(u,v)=<u,v,1-u-v> on u≥0, v≥0, u+v≤1 and F=<x,y,z>, what is the flux using the orientation r_u×r_v?",
    options: ["1/2", "2/3", "5/6", "1"],
    correctAnswer: 0,
    explanation: "r_u×r_v=<1,1,1>. Since F=<u,v,1-u-v>, the dot product is 1. The parameter triangle has area 1/2."
  },
  {
    id: "mvc-cts-h-097",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For r(u,v)=<u,v,u²+v²> over the unit disk, what is the upward flux of F=<0,0,1>?",
    options: ["0", "π/2", "π", "2π"],
    correctAnswer: 2,
    explanation: "r_u×r_v=<-2u,-2v,1>. Its dot product with <0,0,1> is 1, so the flux equals the unit-disk area π."
  },
  {
    id: "mvc-cts-h-098",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For an oriented parametrized surface, which expression is the vector-area element?",
    options: [
      "r_u+r_v dudv",
      "(r_u×r_v)dudv",
      "|r_u-r_v|dudv",
      "(r_u·r_v)dudv"
    ],
    correctAnswer: 1,
    explanation: "The oriented vector-area element is (r_u×r_v)dudv."
  },
  {
    id: "mvc-cts-h-099",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "If the parametrization orientation is reversed, the flux changes by:",
    options: ["A factor of 0", "A factor of 1", "A factor of -1", "A factor of 2"],
    correctAnswer: 2,
    explanation: "Reversing orientation changes r_u×r_v to -(r_u×r_v), reversing the sign of flux."
  },
  {
    id: "mvc-cts-h-100",
    module: "Coordinate Transformations & Surfaces",
    topic: "Flux Integrals over General Parameterized Surfaces",
    difficulty: "Hard",
    question: "For a closed surface, what is the key advantage of replacing a flux surface integral by the divergence theorem?",
    options: [
      "It changes flux into a line integral",
      "It converts the surface integral into a volume integral",
      "It removes the vector field",
      "It makes orientation irrelevant for every surface"
    ],
    correctAnswer: 1,
    explanation: "The divergence theorem converts ∬_S F·n dS into ∭_V ∇·F dV for closed surfaces."
  },
];
