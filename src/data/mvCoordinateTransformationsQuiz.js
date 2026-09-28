/**
 * Multivariable Calculus
 * Coordinate Transformations & Surfaces
 *
 * Topic quiz data:
 * - Jacobians & Change of Variables -> MV_JACOBIANS_QUIZ
 * - Curvilinear Coordinate Systems -> MV_CURVILINEAR_QUIZ
 * - Parametrized Surface Area -> MV_PARAMETRIZED_SURFACE_AREA_QUIZ
 * - Flux Integrals over General Parameterized Surfaces -> MV_FLUX_INTEGRALS_GENERAL_SURFACES_QUIZ
 *
 * Each topic has exactly 20 questions.
 */
export { MV_JACOBIANS_QUIZ } from "./mvJacobiansQuiz";

export const MV_CURVILINEAR_QUIZ = [
  {
    prompt: "What is the main idea of a curvilinear coordinate system?",
    options: [
      "Every coordinate surface must be a plane",
      "Coordinates are chosen so that coordinate surfaces can follow the geometry of a problem",
      "Only Cartesian coordinates may be used for integration",
      "The Jacobian is always equal to 1",
    ],
    answer: "B",
    explanation:
      "Curvilinear coordinates use coordinates adapted to geometry; their coordinate curves or surfaces need not be straight lines or planes.",
  },
  {
    prompt: "In polar coordinates (r, θ), what do r and θ represent?",
    options: [
      "Height and width",
      "Distance from the origin and polar angle",
      "Arc length and curvature",
      "Area and perimeter",
    ],
    answer: "B",
    explanation:
      "r is the distance from the origin and θ specifies the direction of the position vector.",
  },
  {
    prompt:
      "Which Cartesian equations define the polar coordinate transformation?",
    options: [
      "x = r sin θ, y = r cos θ",
      "x = r cos θ, y = r sin θ",
      "x = r + θ, y = r − θ",
      "x = r² cos θ, y = r² sin θ",
    ],
    answer: "B",
    explanation:
      "The standard polar relations are x = r cos θ and y = r sin θ.",
  },
  {
    prompt:
      "What is the polar scale factor associated with the angular coordinate θ?",
    options: ["1/r", "r", "r²", "sin θ"],
    answer: "B",
    explanation:
      "A change dθ at radius r corresponds to an arc length approximately r dθ, so the angular scale factor is r.",
  },
  {
    prompt: "For polar coordinates, what are the coordinate basis directions?",
    options: [
      "The x- and y-axis directions everywhere",
      "The radial direction e_r and angular direction e_θ",
      "Only the z direction",
      "The tangent and normal directions of a sphere",
    ],
    answer: "B",
    explanation:
      "Polar coordinates have a radial direction e_r and a perpendicular angular direction e_θ, both depending on θ.",
  },
  {
    prompt: "What happens to the polar unit vectors when θ changes?",
    options: [
      "They remain fixed in Cartesian directions",
      "They rotate with θ",
      "They disappear at every point",
      "They become parallel",
    ],
    answer: "B",
    explanation:
      "The polar basis is position-dependent; e_r and e_θ rotate as the angle θ changes.",
  },
  {
    prompt: "Which differential area element is correct in polar coordinates?",
    options: [
      "dA = dr dθ",
      "dA = r dr dθ",
      "dA = r² dr dθ",
      "dA = sin θ dr dθ",
    ],
    answer: "B",
    explanation:
      "The radial side has length dr and the angular side has length approximately r dθ, giving dA = r dr dθ.",
  },
  {
    prompt:
      "Which coordinate system is naturally suited to problems with circular symmetry around the z-axis?",
    options: ["Cartesian", "Cylindrical", "Spherical only", "Parabolic only"],
    answer: "B",
    explanation:
      "Cylindrical coordinates extend polar coordinates with z and are natural for cylinders and rotational symmetry about the z-axis.",
  },
  {
    prompt: "Which cylindrical coordinate transformation is standard?",
    options: [
      "x = r cos θ, y = r sin θ, z = z",
      "x = ρ sin φ, y = ρ cos φ, z = θ",
      "x = r + z, y = θ, z = r",
      "x = r cos z, y = r sin z, z = θ",
    ],
    answer: "A",
    explanation:
      "Cylindrical coordinates use the polar transformation in the xy-plane while leaving z unchanged.",
  },
  {
    prompt: "What is the cylindrical volume element?",
    options: [
      "dV = dr dθ dz",
      "dV = r dr dθ dz",
      "dV = r² dr dθ dz",
      "dV = ρ² sin φ dρ dφ dθ",
    ],
    answer: "B",
    explanation:
      "The cylindrical scale factors are 1, r, and 1, so the volume element is r dr dθ dz.",
  },
  {
    prompt:
      "In cylindrical coordinates, a surface r = constant represents what shape?",
    options: [
      "A vertical circular cylinder",
      "A horizontal plane",
      "A sphere centered at the origin",
      "A cone",
    ],
    answer: "A",
    explanation:
      "Fixing r fixes the distance from the z-axis, producing a vertical circular cylinder.",
  },
  {
    prompt: "Using the common spherical convention, what does ρ represent?",
    options: [
      "The distance from the origin",
      "The azimuthal angle",
      "The height above the xy-plane",
      "The distance from the z-axis only",
    ],
    answer: "A",
    explanation:
      "In the standard convention used here, ρ is the radial distance from the origin.",
  },
  {
    prompt: "Using the common spherical convention, what does φ represent?",
    options: [
      "The angle measured in the xy-plane from the positive x-axis",
      "The angle measured down from the positive z-axis",
      "The distance from the origin",
      "The cylindrical height",
    ],
    answer: "B",
    explanation:
      "Here φ is the polar angle measured from the positive z-axis, while θ is the azimuthal angle.",
  },
  {
    prompt:
      "Which spherical-coordinate transformation matches the convention ρ, φ, θ used in the guide?",
    options: [
      "x = ρ cos φ cos θ, y = ρ cos φ sin θ, z = ρ sin φ",
      "x = ρ sin φ cos θ, y = ρ sin φ sin θ, z = ρ cos φ",
      "x = ρ cos θ, y = ρ sin θ, z = φ",
      "x = ρ + φ, y = ρ + θ, z = φ + θ",
    ],
    answer: "B",
    explanation:
      "With φ measured from +z, the standard formulas are x = ρ sin φ cos θ, y = ρ sin φ sin θ, z = ρ cos φ.",
  },
  {
    prompt: "What is the spherical volume element under this convention?",
    options: [
      "dV = ρ dρ dφ dθ",
      "dV = ρ² dρ dφ dθ",
      "dV = ρ² sin φ dρ dφ dθ",
      "dV = ρ sin θ dρ dφ dθ",
    ],
    answer: "C",
    explanation:
      "The product of the spherical scale factors gives ρ² sin φ, so dV = ρ² sin φ dρ dφ dθ.",
  },
  {
    prompt: "What does a spherical surface ρ = constant represent?",
    options: [
      "A circular cylinder",
      "A plane through the origin",
      "A sphere centered at the origin",
      "A cone with vertex at the origin",
    ],
    answer: "C",
    explanation:
      "Fixing the distance from the origin produces a sphere centered at the origin.",
  },
  {
    prompt:
      "What does a spherical surface φ = constant represent under the standard convention?",
    options: [
      "A sphere",
      "A cone with vertex at the origin",
      "A vertical cylinder",
      "A horizontal plane",
    ],
    answer: "B",
    explanation:
      "Fixing the polar angle from the z-axis gives a cone whose vertex is the origin.",
  },
  {
    prompt: "What is the metric-factor idea behind a coordinate system?",
    options: [
      "It tells how coordinate changes correspond to physical distance",
      "It guarantees every coordinate is dimensionless",
      "It replaces all derivatives with determinants",
      "It forces the Jacobian to be zero",
    ],
    answer: "A",
    explanation:
      "Scale or metric factors convert infinitesimal coordinate changes into physical lengths in the corresponding coordinate directions.",
  },
  {
    prompt:
      "For an orthogonal curvilinear coordinate system with scale factors h1, h2, h3, what is the volume element?",
    options: [
      "dV = h1 + h2 + h3",
      "dV = h1 h2 h3 du1 du2 du3",
      "dV = du1 du2 du3 / (h1 h2 h3)",
      "dV = h1² + h2² + h3²",
    ],
    answer: "B",
    explanation:
      "For orthogonal coordinates, the infinitesimal edge lengths are h1 du1, h2 du2, and h3 du3, so their product gives the volume element.",
  },
];

export const MV_PARAMETRIZED_SURFACE_AREA_QUIZ = [
  {
    id: "psa-01",
    prompt: "What does a parameterization of a surface provide?",
    options: [
      "A mapping from a parameter domain into points on the surface",
      "Only the area of the surface",
      "Only a normal direction",
      "A scalar field defined everywhere in space",
    ],
    answer: "A",
    explanation:
      "A parameterization r(u,v) maps points in a 2D parameter domain into points on a surface in 3D space.",
  },
  {
    id: "psa-02",
    prompt: "If r(u,v)=⟨x(u,v),y(u,v),z(u,v)⟩, what are r_u and r_v?",
    options: [
      "The surface's tangent vectors",
      "The surface's curvature values",
      "The divergence and curl",
      "The Jacobian determinant only",
    ],
    answer: "A",
    explanation:
      "Differentiating the parameterization with respect to u and v gives tangent vectors to the surface.",
  },
  {
    id: "psa-03",
    prompt: "Which expression gives the local surface-area scaling factor?",
    options: ["|r_u × r_v|", "r_u · r_v", "|r_u + r_v|", "r_u × r_u"],
    answer: "A",
    explanation:
      "The magnitude of r_u × r_v gives the area of the infinitesimal parallelogram spanned by the tangent vectors.",
  },
  {
    id: "psa-04",
    prompt:
      "What is the standard formula for surface area of a parameterized surface?",
    options: [
      "∫∫D |r_u × r_v| du dv",
      "∫∫D r_u · r_v du dv",
      "∫∫D |r(u,v)| du dv",
      "∫∫D du + dv",
    ],
    answer: "A",
    explanation:
      "Surface area is obtained by integrating the local area-scaling factor |r_u × r_v| over the parameter domain.",
  },
  {
    id: "psa-05",
    prompt: "What does r_u × r_v represent geometrically?",
    options: [
      "A vector normal to the surface with magnitude equal to local area scaling",
      "A vector tangent to the surface",
      "The curvature vector",
      "The position vector",
    ],
    answer: "A",
    explanation:
      "The cross product is perpendicular to both tangent directions, and its magnitude gives the infinitesimal area scale.",
  },
  {
    id: "psa-06",
    prompt: "What happens to r_u × r_v when the parameter order is reversed?",
    options: [
      "It remains exactly the same",
      "It changes sign",
      "Its magnitude becomes zero",
      "It becomes a scalar",
    ],
    answer: "B",
    explanation:
      "Swapping the cross-product order gives r_v × r_u = −(r_u × r_v), reversing orientation.",
  },
  {
    id: "psa-07",
    prompt: "Why does reversing orientation not change ordinary surface area?",
    options: [
      "The cross product becomes zero",
      "The cross product changes sign but its magnitude stays the same",
      "The parameter domain becomes empty",
      "The surface is replaced by a curve",
    ],
    answer: "B",
    explanation:
      "Area uses |r_u × r_v|, so changing the sign of the cross product does not affect the magnitude.",
  },
  {
    id: "psa-08",
    prompt: "For r(u,v)=⟨u,v,u+v⟩, what are r_u and r_v?",
    options: [
      "r_u=⟨1,0,1⟩ and r_v=⟨0,1,1⟩",
      "r_u=⟨u,v,u+v⟩ and r_v=⟨1,1,1⟩",
      "r_u=⟨1,1,0⟩ and r_v=⟨0,0,1⟩",
      "r_u=⟨u,0,1⟩ and r_v=⟨0,v,1⟩",
    ],
    answer: "A",
    explanation: "Differentiate each component with respect to u and v.",
  },
  {
    id: "psa-09",
    prompt: "For r(u,v)=⟨u,v,u+v⟩, what is r_u × r_v?",
    options: ["⟨1,1,1⟩", "⟨−1,−1,1⟩", "⟨1,−1,0⟩", "⟨0,1,−1⟩"],
    answer: "B",
    explanation: "The cross product of ⟨1,0,1⟩ and ⟨0,1,1⟩ is ⟨−1,−1,1⟩.",
  },
  {
    id: "psa-10",
    prompt: "For the same plane parameterization, what is |r_u × r_v|?",
    options: ["1", "√2", "√3", "3"],
    answer: "C",
    explanation: "The norm of ⟨−1,−1,1⟩ is √(1+1+1)=√3.",
  },
  {
    id: "psa-11",
    prompt: "For a graph z=f(x,y), which parameterization is natural?",
    options: [
      "r(x,y)=⟨x,y,f(x,y)⟩",
      "r(x,y)=⟨f(x,y),x,y⟩ only",
      "r(u,v)=⟨u,v,0⟩ for every surface",
      "r(x,y)=⟨x,y,x+y⟩ for every f",
    ],
    answer: "A",
    explanation:
      "A graph surface is directly parameterized by taking x and y as parameters and using z=f(x,y).",
  },
  {
    id: "psa-12",
    prompt: "For z=f(x,y), what is the upward-oriented normal-area vector?",
    options: [
      "⟨f_x,f_y,−1⟩ dA",
      "⟨−f_x,−f_y,1⟩ dA",
      "⟨1,0,0⟩ dA",
      "⟨0,1,0⟩ dA",
    ],
    answer: "B",
    explanation:
      "For r(x,y)=⟨x,y,f(x,y)⟩, r_x × r_y=⟨−f_x,−f_y,1⟩, whose z-component is positive.",
  },
  {
    id: "psa-13",
    prompt: "What condition should hold for a regular parameterized surface?",
    options: [
      "r_u × r_v ≠ 0 on the relevant region",
      "r_u = r_v everywhere",
      "r_u · r_v = 0 always",
      "The parameter domain must be circular",
    ],
    answer: "A",
    explanation:
      "The tangent vectors must remain linearly independent, which is expressed by r_u × r_v being nonzero.",
  },
  {
    id: "psa-14",
    prompt: "For the cylinder r(θ,z)=⟨a cosθ,a sinθ,z⟩, what is |r_θ × r_z|?",
    options: ["1", "a", "a²", "2a"],
    answer: "B",
    explanation:
      "The tangent-vector cross product has magnitude a, giving dS=a dθ dz for the lateral cylinder.",
  },
  {
    id: "psa-15",
    prompt:
      "Which surface-area integral computes the area of a parameterized surface?",
    options: [
      "∫∫D |r_u×r_v| du dv",
      "∫∫D r_u·r_v du dv",
      "∫∫D |r_u+r_v| du dv",
      "∫∫D du+dv",
    ],
    answer: "A",
    explanation:
      "The standard parameterized surface-area formula is the double integral of the cross-product magnitude.",
  },
  {
    id: "psa-16",
    prompt:
      "For a graph z=f(x,y), which normal corresponds to upward orientation?",
    options: ["⟨f_x,f_y,−1⟩", "⟨−f_x,−f_y,1⟩", "⟨1,0,0⟩", "⟨0,1,0⟩"],
    answer: "B",
    explanation:
      "The z-component is positive, so the normal points upward: ⟨−f_x,−f_y,1⟩.",
  },
  {
    id: "psa-17",
    prompt:
      "Why does reversing parameter order not change ordinary surface area?",
    options: [
      "The cross product becomes zero",
      "The cross product changes sign but its magnitude stays the same",
      "The parameter domain changes",
      "The surface disappears",
    ],
    answer: "B",
    explanation:
      "Reversing the cross product changes its direction, but |−v|=|v|, so the positive area is unchanged.",
  },
  {
    id: "psa-18",
    prompt:
      "What should be checked first when a parameterization seems to describe too much of a surface?",
    options: [
      "The parameter domain",
      "The color of the graph",
      "The final numerical answer",
      "Only the cross product sign",
    ],
    answer: "A",
    explanation:
      "The parameter domain determines which portion of the surface is covered and whether it is covered once.",
  },
  {
    id: "psa-19",
    prompt:
      "For a plane parameterization with a constant nonzero r_u×r_v, what happens to the area integral?",
    options: [
      "The integrand is constant on the parameter domain",
      "The integrand becomes zero",
      "The surface becomes curved",
      "A divergence term must be added",
    ],
    answer: "A",
    explanation:
      "A plane has constant tangent vectors, so the cross-product magnitude is constant.",
  },
  {
    id: "psa-20",
    prompt:
      "What is the most reliable workflow for a parametrized surface-area problem?",
    options: [
      "Integrate first and choose a parameterization afterward",
      "Choose parameters, find the domain, compute tangent vectors, form the cross product, take its magnitude, then integrate",
      "Find only a normal direction and ignore the domain",
      "Use a Jacobian formula without computing tangent vectors",
    ],
    answer: "B",
    explanation:
      "The workflow keeps the geometry, area scaling, and integration bounds consistent from start to finish.",
  },
];

export const MV_FLUX_INTEGRALS_GENERAL_SURFACES_QUIZ = [
  {
    id: "flux-01",
    prompt: "What does a flux integral measure?",
    options: [
      "The total length of a surface",
      "The net amount of a vector field passing through an oriented surface",
      "The curvature of a surface",
      "The volume enclosed by a curve",
    ],
    answer: "B",
    explanation:
      "Flux measures the component of a vector field crossing an oriented surface.",
  },
  {
    id: "flux-02",
    prompt:
      "For a parameterized surface r(u,v), which formula gives flux through the oriented surface?",
    options: [
      "∫∫D F(r(u,v))·(r_u×r_v) du dv",
      "∫∫D |F(r(u,v))| du dv",
      "∫∫D F(r(u,v))×(r_u×r_v) du dv",
      "∫D F(r(u,v))·r_u dv",
    ],
    answer: "A",
    explanation:
      "The oriented normal-area vector is (r_u×r_v) du dv, so the dot product with the field gives the flux density.",
  },
  {
    id: "flux-03",
    prompt:
      "Why is the cross product r_u×r_v used in a general parameterized flux integral?",
    options: [
      "It gives both a normal direction and area scaling",
      "It removes the need for a parameter domain",
      "It always has unit length",
      "It computes divergence directly",
    ],
    answer: "A",
    explanation:
      "The cross product is perpendicular to the surface and its magnitude is the local area-stretching factor.",
  },
  {
    id: "flux-04",
    prompt: "What happens to flux when the surface orientation is reversed?",
    options: [
      "It stays the same",
      "It becomes zero",
      "Its sign reverses",
      "It doubles",
    ],
    answer: "C",
    explanation:
      "Replacing n with −n changes F·n to −F·n, so the flux changes sign.",
  },
  {
    id: "flux-05",
    prompt:
      "For a graph z=f(x,y), which normal-area vector corresponds to upward orientation?",
    options: [
      "⟨f_x,f_y,−1⟩ dA",
      "⟨−f_x,−f_y,1⟩ dA",
      "⟨1,0,0⟩ dA",
      "⟨0,1,0⟩ dA",
    ],
    answer: "B",
    explanation:
      "For r(x,y)=⟨x,y,f(x,y)⟩, r_x×r_y=⟨−f_x,−f_y,1⟩, whose z-component is positive.",
  },
  {
    id: "flux-06",
    prompt:
      "Why must F(x,y,z) be replaced by F(r(u,v)) in a parameterized flux calculation?",
    options: [
      "The vector field must be expressed on the surface being integrated",
      "It makes the field zero",
      "It removes the orientation",
      "It changes a vector field into a scalar",
    ],
    answer: "A",
    explanation:
      "The flux integral is over points on the surface, so the field must be evaluated at the parameterized surface point.",
  },
  {
    id: "flux-07",
    prompt: "For r(u,v)=⟨u,v,u+v⟩ and F=⟨0,0,z⟩, what is F(r(u,v))?",
    options: ["⟨0,0,u⟩", "⟨0,0,v⟩", "⟨0,0,u+v⟩", "⟨u,v,u+v⟩"],
    answer: "C",
    explanation: "Substitute x=u, y=v, z=u+v into F=⟨0,0,z⟩.",
  },
  {
    id: "flux-08",
    prompt:
      "For r(u,v)=⟨u,v,u+v⟩ on 0≤u,v≤1 and F=⟨0,0,z⟩, what is the upward-style parameterized flux using r_u×r_v?",
    options: ["0", "1", "2", "√3"],
    answer: "B",
    explanation:
      "r_u×r_v=⟨−1,−1,1⟩, so the dot product is u+v. Integrating over the unit square gives 1.",
  },
  {
    id: "flux-09",
    prompt:
      "For r(u,v)=⟨u,v,u+v⟩ and F=⟨x,y,z⟩, what is the flux density F(r)·(r_u×r_v)?",
    options: ["u+v", "−u−v", "0", "u²+v²"],
    answer: "C",
    explanation: "F(r)=⟨u,v,u+v⟩ and dotting with ⟨−1,−1,1⟩ gives −u−v+u+v=0.",
  },
  {
    id: "flux-10",
    prompt: "For the cylinder r(θ,z)=⟨a cosθ,a sinθ,z⟩, what is r_θ×r_z?",
    options: ["⟨−a sinθ,a cosθ,0⟩", "⟨a cosθ,a sinθ,0⟩", "⟨0,0,a⟩", "⟨0,0,1⟩"],
    answer: "B",
    explanation:
      "The cross product gives the outward radial vector ⟨a cosθ,a sinθ,0⟩.",
  },
  {
    id: "flux-11",
    prompt: "For the same cylinder and F=⟨x,y,0⟩, what is the flux density?",
    options: ["0", "a", "a²", "2πa²"],
    answer: "C",
    explanation:
      "F(r)=⟨a cosθ,a sinθ,0⟩, and its dot product with the outward cross product is a².",
  },
  {
    id: "flux-12",
    prompt:
      "For the lateral cylinder in the previous question with height h, what is the total outward flux?",
    options: ["2πah", "2πa²h", "πa²h", "4πa²h"],
    answer: "B",
    explanation:
      "Integrating the constant flux density a² over 0≤θ≤2π and 0≤z≤h gives 2πa²h.",
  },
  {
    id: "flux-13",
    prompt:
      "For a closed surface, which orientation is normally used unless stated otherwise?",
    options: ["Inward", "Tangential", "Outward", "Random"],
    answer: "C",
    explanation:
      "The standard orientation of a closed boundary surface is outward.",
  },
  {
    id: "flux-14",
    prompt:
      "If a surface is split into patches S1,…,Sm with consistent orientations, what is the total flux?",
    options: [
      "The maximum patch flux",
      "The sum of the patch fluxes",
      "The product of the patch fluxes",
      "Always zero",
    ],
    answer: "B",
    explanation:
      "Flux is additive over non-overlapping surface patches when orientations are consistent.",
  },
  {
    id: "flux-15",
    prompt: "What does r_u×r_v=0 at a point indicate?",
    options: [
      "The point is always outside the surface",
      "The parameterization is singular there",
      "The vector field is zero there",
      "The surface has infinite area there",
    ],
    answer: "B",
    explanation:
      "A zero cross product means the tangent directions collapse and the parameterization is not regular at that point.",
  },
  {
    id: "flux-16",
    prompt:
      "For the sphere of radius a and F=⟨x,y,z⟩, what is the outward flux?",
    options: ["2πa²", "4πa²", "4πa³", "(4/3)πa³"],
    answer: "C",
    explanation:
      "On the sphere F=a r-hat and the direct spherical flux integral gives 4πa³. Equivalently, div F=3 and the enclosed volume is 4πa³/3.",
  },
  {
    id: "flux-17",
    prompt:
      "What theorem converts flux through a closed outward surface into a volume integral?",
    options: [
      "Green's theorem",
      "Fundamental Theorem of Calculus",
      "Divergence theorem",
      "Mean Value Theorem",
    ],
    answer: "C",
    explanation:
      "The divergence theorem states that surface flux equals the volume integral of the divergence.",
  },
  {
    id: "flux-18",
    prompt:
      "Which situation naturally calls for the direct parameterized-surface flux formula rather than the divergence theorem?",
    options: [
      "A closed surface with a very simple divergence",
      "An open parameterized surface",
      "A volume with no boundary",
      "A constant sequence",
    ],
    answer: "B",
    explanation:
      "The divergence theorem requires a closed surface bounding a volume, so an open surface is handled directly by parameterization.",
  },
  {
    id: "flux-19",
    prompt: "Which quantity is the flux density in parameter space?",
    options: ["|F|", "F(r(u,v))·(r_u×r_v)", "|r_u×r_v|", "F·F"],
    answer: "B",
    explanation:
      "The dot product of the field evaluated on the surface with the oriented normal-area vector is the local flux density.",
  },
  {
    id: "flux-20",
    prompt:
      "What is the safest workflow for a general parameterized flux problem?",
    options: [
      "Integrate first and decide the orientation afterward",
      "Choose the surface parameters, determine the domain, compute the oriented cross product, evaluate the field, take the dot product, then integrate",
      "Compute only the magnitude of the normal and ignore its sign",
      "Use the divergence theorem on every problem",
    ],
    answer: "B",
    explanation:
      "This workflow keeps the geometry, field evaluation, orientation, and integration limits synchronized.",
  },
];
