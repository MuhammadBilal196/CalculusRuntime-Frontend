/**
 * Multivariable Calculus 
 * Coordinate Transformations & Surfaces
 *
 * Module quiz data:
 * - Topic 1: Jacobians & Change of Variables
 * - Topic 2: Curvilinear Coordinate Systems
 *
 * Each topic contains exactly 20 MCQs.
 */

// Reuse the existing 20-question Jacobian quiz.
// This keeps the original Jacobian questions unchanged.
export { MV_JACOBIANS_QUIZ } from "./mvJacobiansQuiz";

// ------------------------------------------------------------
// Topic 2 — Curvilinear Coordinate Systems
// ------------------------------------------------------------

export const MV_CURVILINEAR_QUIZ = [
  {
    id: "curvilinear-01",
    prompt:
      "What is the main purpose of introducing a curvilinear coordinate system?",
    options: [
      "To replace all vector quantities with scalars",
      "To describe points using coordinates adapted to the geometry of a problem",
      "To eliminate the need for derivatives",
      "To make every coordinate system Cartesian",
    ],
    answer: "B",
    explanation:
      "Curvilinear coordinates describe points using coordinate curves or surfaces that can better match the geometry of a physical or mathematical problem.",
  },

  {
    id: "curvilinear-02",
    prompt:
      "Which transformation gives Cartesian coordinates in terms of polar coordinates?",
    options: [
      "x = r sin(theta), y = r cos(theta)",
      "x = r cos(theta), y = r sin(theta)",
      "x = r + theta, y = r - theta",
      "x = r theta, y = r/theta",
    ],
    answer: "B",
    explanation:
      "The standard polar transformation is x = r cos(theta) and y = r sin(theta).",
  },

  {
    id: "curvilinear-03",
    prompt:
      "In two-dimensional polar coordinates, what does r represent?",
    options: [
      "The angle measured from the positive x-axis",
      "The distance from the origin",
      "The y-coordinate",
      "The slope of the curve",
    ],
    answer: "B",
    explanation:
      "The polar coordinate r represents the distance from the origin to the point.",
  },

  {
    id: "curvilinear-04",
    prompt:
      "What is the scale factor associated with the angular coordinate theta in polar coordinates?",
    options: [
      "1",
      "r",
      "1/r",
      "r^2",
    ],
    answer: "B",
    explanation:
      "In polar coordinates, the scale factors are h_r = 1 and h_theta = r.",
  },

  {
    id: "curvilinear-05",
    prompt:
      "What is the differential area element in polar coordinates?",
    options: [
      "dA = dr dtheta",
      "dA = r dr dtheta",
      "dA = r^2 dr dtheta",
      "dA = (1/r) dr dtheta",
    ],
    answer: "B",
    explanation:
      "The polar area element is dA = r dr dtheta. The factor r comes from the angular scale factor.",
  },

  {
    id: "curvilinear-06",
    prompt:
      "Which expression correctly converts cylindrical coordinates to Cartesian coordinates?",
    options: [
      "x = rho cos(phi), y = rho sin(phi), z = z",
      "x = r cos(theta), y = r sin(theta), z = z",
      "x = r sin(theta), y = r cos(theta), z = theta",
      "x = r + theta, y = r - theta, z = r",
    ],
    answer: "B",
    explanation:
      "Cylindrical coordinates use r, theta, and z, with x = r cos(theta), y = r sin(theta), and z unchanged.",
  },

  {
    id: "curvilinear-07",
    prompt:
      "What is the cylindrical-coordinate volume element?",
    options: [
      "dV = dr dtheta dz",
      "dV = r dr dtheta dz",
      "dV = r^2 dr dtheta dz",
      "dV = (1/r) dr dtheta dz",
    ],
    answer: "B",
    explanation:
      "The cylindrical volume element is dV = r dr dtheta dz.",
  },

  {
    id: "curvilinear-08",
    prompt:
      "In cylindrical coordinates, what geometric surface is described by r = constant?",
    options: [
      "A sphere",
      "A vertical cylinder",
      "A horizontal plane",
      "A cone",
    ],
    answer: "B",
    explanation:
      "Holding r constant fixes the distance from the z-axis, producing a vertical cylinder.",
  },

  {
    id: "curvilinear-09",
    prompt:
      "Which set of coordinates is commonly used for spherical coordinates?",
    options: [
      "x, y, z",
      "r, theta, z",
      "rho, phi, theta",
      "u, v, w only",
    ],
    answer: "C",
    explanation:
      "A common spherical convention uses rho for radial distance, phi for the polar angle, and theta for the azimuthal angle.",
  },

  {
    id: "curvilinear-10",
    prompt:
      "Using the convention rho for radial distance, phi for the angle from the positive z-axis, and theta for the azimuthal angle, which is correct?",
    options: [
      "x = rho sin(phi) cos(theta)",
      "x = rho cos(phi) cos(theta)",
      "x = rho sin(theta) cos(phi)",
      "x = rho cos(theta) cos(phi) + z",
    ],
    answer: "A",
    explanation:
      "With phi measured from the positive z-axis, x = rho sin(phi) cos(theta).",
  },

  {
    id: "curvilinear-11",
    prompt:
      "What is the spherical-coordinate volume element under the standard convention?",
    options: [
      "dV = d rho d phi d theta",
      "dV = rho d rho d phi d theta",
      "dV = rho^2 sin(phi) d rho d phi d theta",
      "dV = rho^2 cos(phi) d rho d phi d theta",
    ],
    answer: "C",
    explanation:
      "The standard spherical volume element is dV = rho^2 sin(phi) d rho d phi d theta.",
  },

  {
    id: "curvilinear-12",
    prompt:
      "In spherical coordinates, what surface is described by rho = constant?",
    options: [
      "A plane",
      "A sphere centered at the origin",
      "A cylinder around the z-axis",
      "A paraboloid",
    ],
    answer: "B",
    explanation:
      "A fixed radial distance rho gives a sphere centered at the origin.",
  },

  {
    id: "curvilinear-13",
    prompt:
      "In spherical coordinates, what geometric surface is described by phi = constant?",
    options: [
      "A sphere",
      "A cone with vertex at the origin",
      "A vertical cylinder",
      "A horizontal plane only",
    ],
    answer: "B",
    explanation:
      "A constant polar angle phi forms a cone whose vertex is at the origin.",
  },

  {
    id: "curvilinear-14",
    prompt:
      "In spherical coordinates, what surface is described by theta = constant?",
    options: [
      "A half-plane containing the z-axis",
      "A sphere",
      "A horizontal cylinder",
      "A cone only",
    ],
    answer: "A",
    explanation:
      "Fixing the azimuthal angle theta gives a vertical half-plane through the z-axis.",
  },

  {
    id: "curvilinear-15",
    prompt:
      "What do scale factors in a curvilinear coordinate system measure?",
    options: [
      "Only the magnitude of the position vector",
      "How physical distance changes with changes in the coordinates",
      "The number of coordinate variables",
      "The determinant of every matrix in the problem",
    ],
    answer: "B",
    explanation:
      "Scale factors relate coordinate changes to physical distances along the corresponding coordinate directions.",
  },

  {
    id: "curvilinear-16",
    prompt:
      "For orthogonal curvilinear coordinates q1, q2, q3 with scale factors h1, h2, h3, what is the volume element?",
    options: [
      "dV = dq1 dq2 dq3",
      "dV = (h1 + h2 + h3) dq1 dq2 dq3",
      "dV = h1 h2 h3 dq1 dq2 dq3",
      "dV = (h1 h2)/h3 dq1 dq2 dq3",
    ],
    answer: "C",
    explanation:
      "For orthogonal curvilinear coordinates, dV = h1 h2 h3 dq1 dq2 dq3.",
  },

  {
    id: "curvilinear-17",
    prompt:
      "Which pair gives the scale factors for ordinary polar coordinates?",
    options: [
      "h_r = r, h_theta = 1",
      "h_r = 1, h_theta = r",
      "h_r = r^2, h_theta = r",
      "h_r = 1/r, h_theta = 1",
    ],
    answer: "B",
    explanation:
      "For polar coordinates, a radial change dr corresponds directly to distance, while an angular change dtheta corresponds to arc length r dtheta.",
  },

  {
    id: "curvilinear-18",
    prompt:
      "Why are cylindrical coordinates often useful for problems involving a circular cylinder?",
    options: [
      "Because cylindrical coordinates remove the z-coordinate",
      "Because one coordinate can directly represent distance from the cylinder axis",
      "Because cylindrical coordinates only work in two dimensions",
      "Because all derivatives become zero",
    ],
    answer: "B",
    explanation:
      "The radial cylindrical coordinate directly measures distance from the z-axis, matching the geometry of circular cylinders.",
  },

  {
    id: "curvilinear-19",
    prompt:
      "Which coordinate system is usually natural for a problem with full spherical symmetry about the origin?",
    options: [
      "Cartesian coordinates",
      "Polar coordinates only",
      "Cylindrical coordinates",
      "Spherical coordinates",
    ],
    answer: "D",
    explanation:
      "Spherical coordinates are naturally adapted to geometry and fields that depend on distance from a single central point.",
  },

  {
    id: "curvilinear-20",
    prompt:
      "What is the safest way to verify a curvilinear-coordinate transformation?",
    options: [
      "Ignore the coordinate ranges",
      "Check the transformation, inverse relations, scale factors/Jacobian, and geometric interpretation",
      "Assume every Jacobian is 1",
      "Only check one coordinate equation",
    ],
    answer: "B",
    explanation:
      "A reliable verification checks the forward transformation, inverse relations where appropriate, Jacobian or scale factors, coordinate ranges, and the geometry represented by constant-coordinate surfaces.",
  },
];
// ------------------------------------------------------------
// Topic 3 — Parametrized Surface Area
// ------------------------------------------------------------

export const MV_PARAMETRIZED_SURFACE_AREA_QUIZ = [
  {
    id: "surface-area-01",
    prompt: "How is a parametrized surface commonly represented?",
    options: [
      "r(u,v) = <x(u,v), y(u,v), z(u,v)>",
      "r(t) = <x(t), y(t)>",
      "f(x) = ax + b",
      "r = <x,y>",
    ],
    answer: "A",
    explanation:
      "A surface in three-dimensional space is commonly parametrized using two parameters: r(u,v) = <x(u,v), y(u,v), z(u,v)>.",
  },

  {
    id: "surface-area-02",
    prompt:
      "How many independent parameters are generally required to parametrize a surface?",
    options: ["One", "Two", "Three", "Four"],
    answer: "B",
    explanation:
      "A two-dimensional surface generally requires two independent parameters.",
  },

  {
    id: "surface-area-03",
    prompt:
      "For r(u,v), which vectors are tangent to the parameter curves on the surface?",
    options: [
      "r_u and r_v",
      "r and r_u + r_v only",
      "r_u · r_v and r",
      "Only r",
    ],
    answer: "A",
    explanation:
      "The partial derivatives r_u and r_v are tangent vectors corresponding to changes in u and v.",
  },

  {
    id: "surface-area-04",
    prompt:
      "Which expression gives a normal vector to a parametrized surface?",
    options: [
      "r_u + r_v",
      "r_u · r_v",
      "r_u × r_v",
      "r_u / r_v",
    ],
    answer: "C",
    explanation:
      "The cross product r_u × r_v is perpendicular to both tangent vectors and therefore gives a normal vector.",
  },

  {
    id: "surface-area-05",
    prompt:
      "What is the differential surface-area element for r(u,v)?",
    options: [
      "dS = du dv",
      "dS = |r_u × r_v| du dv",
      "dS = r_u · r_v du dv",
      "dS = |r_u + r_v| du dv",
    ],
    answer: "B",
    explanation:
      "The local surface-area element is dS = |r_u × r_v| du dv.",
  },

  {
    id: "surface-area-06",
    prompt:
      "What is the total area of a parametrized surface over parameter domain D?",
    options: [
      "∫D |r_u + r_v| du dv",
      "∫D |r_u × r_v| du dv",
      "∫D r_u · r_v du dv",
      "∫D du + dv",
    ],
    answer: "B",
    explanation:
      "Surface area is obtained by integrating the magnitude of the cross product of the tangent vectors over the parameter domain.",
  },

  {
    id: "surface-area-07",
    prompt:
      "If r_u × r_v = <3,4,0>, what is the corresponding surface-area scaling factor?",
    options: ["3", "4", "5", "7"],
    answer: "C",
    explanation:
      "The magnitude is sqrt(3^2 + 4^2) = 5.",
  },

  {
    id: "surface-area-08",
    prompt:
      "If r_v × r_u is used instead of r_u × r_v, what changes?",
    options: [
      "The surface itself disappears",
      "The normal direction reverses",
      "The surface area doubles",
      "The parameter domain changes",
    ],
    answer: "B",
    explanation:
      "r_v × r_u = -(r_u × r_v), so the normal direction reverses. Its magnitude remains unchanged.",
  },

  {
    id: "surface-area-09",
    prompt:
      "For a graph z = f(x,y), which parametrization is natural?",
    options: [
      "r(x,y) = <x,y,f(x,y)>",
      "r(x,y) = <f(x,y),f(x,y),f(x,y)>",
      "r(t) = <x(t),y(t)>",
      "r(x,y) = <x,y,0>",
    ],
    answer: "A",
    explanation:
      "A graph z=f(x,y) can naturally be parametrized as r(x,y)=<x,y,f(x,y)>.",
  },

  {
    id: "surface-area-10",
    prompt:
      "For z=f(x,y), what is the surface-area element?",
    options: [
      "dS = dA",
      "dS = sqrt(1 + f_x^2 + f_y^2) dA",
      "dS = (f_x + f_y)dA",
      "dS = f_x f_y dA",
    ],
    answer: "B",
    explanation:
      "For a graph z=f(x,y), dS = sqrt(1+f_x^2+f_y^2) dA.",
  },

  {
    id: "surface-area-11",
    prompt:
      "A parametrization is regular at a point when:",
    options: [
      "r_u × r_v = 0",
      "r_u × r_v ≠ 0",
      "r_u = r_v",
      "u = v",
    ],
    answer: "B",
    explanation:
      "Regularity requires the tangent vectors to be linearly independent, which is equivalent to r_u × r_v ≠ 0.",
  },

  {
    id: "surface-area-12",
    prompt:
      "Why does the cross product appear in the surface-area formula?",
    options: [
      "Its magnitude gives the area of the parallelogram spanned by the tangent vectors",
      "It always equals one",
      "It gives the parameter domain directly",
      "It removes the need for integration",
    ],
    answer: "A",
    explanation:
      "The tangent vectors span a small parallelogram approximating a surface patch, and the cross-product magnitude gives its area.",
  },

  {
    id: "surface-area-13",
    prompt:
      "Consider r(u,v)=<u,v,u+v>. What is r_u?",
    options: [
      "<1,1,0>",
      "<1,0,1>",
      "<0,1,1>",
      "<u,v,1>",
    ],
    answer: "B",
    explanation:
      "Differentiating with respect to u gives r_u=<1,0,1>.",
  },

  {
    id: "surface-area-14",
    prompt:
      "For r(u,v)=<u,v,u+v>, what is r_v?",
    options: [
      "<1,0,1>",
      "<0,1,1>",
      "<u,1,v>",
      "<1,1,1>",
    ],
    answer: "B",
    explanation:
      "Differentiating with respect to v gives r_v=<0,1,1>.",
  },

  {
    id: "surface-area-15",
    prompt:
      "For the cylinder r(theta,z)=<a cos(theta), a sin(theta), z>, what does theta represent?",
    options: [
      "Height along the z-axis",
      "Angular position around the cylinder",
      "Distance from the origin in the z-direction",
      "Surface area",
    ],
    answer: "B",
    explanation:
      "Theta describes angular position around the cylindrical axis.",
  },

  {
    id: "surface-area-16",
    prompt:
      "For the cylindrical parametrization r(theta,z)=<a cos(theta),a sin(theta),z>, what is |r_theta × r_z|?",
    options: ["1", "a", "a^2", "2a"],
    answer: "B",
    explanation:
      "The cross-product magnitude is a, giving dS = a dtheta dz.",
  },

  {
    id: "surface-area-17",
    prompt:
      "What should be checked carefully when setting up a surface-area integral?",
    options: [
      "Only the final numerical answer",
      "The parametrization, parameter domain, tangent vectors, cross product, and limits",
      "Only the name of the surface",
      "Only whether the surface is closed",
    ],
    answer: "B",
    explanation:
      "A correct surface-area setup depends on all of these components.",
  },

  {
    id: "surface-area-18",
    prompt:
      "Which coordinate system is often useful when a surface has circular symmetry?",
    options: [
      "Polar or cylindrical coordinates",
      "Only Cartesian coordinates",
      "Only one-dimensional coordinates",
      "No coordinate system is useful",
    ],
    answer: "A",
    explanation:
      "Polar and cylindrical coordinates often simplify surfaces and regions with circular symmetry.",
  },

  {
    id: "surface-area-19",
    prompt:
      "Does the orientation of the normal affect ordinary surface area?",
    options: [
      "Yes, it changes the area sign",
      "Yes, it doubles the area",
      "No, because the magnitude is used",
      "Only when the surface is planar",
    ],
    answer: "C",
    explanation:
      "Ordinary surface area uses |r_u × r_v|, so reversing orientation does not change the positive area.",
  },

  {
    id: "surface-area-20",
    prompt:
      "What is the main geometric interpretation of |r_u × r_v|?",
    options: [
      "It measures the local stretching of parameter area into surface area",
      "It gives the parameter u directly",
      "It gives the height of the surface",
      "It is always equal to the Jacobian of a volume transformation",
    ],
    answer: "A",
    explanation:
      "The magnitude of the cross product measures how a small area du dv in parameter space is stretched into an area on the surface.",
  },
];