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