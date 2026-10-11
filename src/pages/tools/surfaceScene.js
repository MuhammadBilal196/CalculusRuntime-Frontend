import * as THREE from "three";
import { axisLength, niceStep } from "../../utils/math/surfaceMath";

/*
 * Three.js scene for the Surface Explorer.
 *
 * Math coordinates (x, y, z) with z pointing up are mapped to three.js as (x, z, −y),
 * which keeps the frame right-handed while three.js keeps its y-up convention.
 * The React page drives everything through the small API returned by createSurfaceScene.
 */

const PHI_EPS = 1e-3;
const UP = new THREE.Vector3(0, 1, 0);

export const CAMERA_VIEWS = {
  iso: { theta: (3 * Math.PI) / 4, phi: 1.02 },
  '+x': { theta: Math.PI / 2, phi: Math.PI / 2 },
  '-x': { theta: -Math.PI / 2, phi: Math.PI / 2 },
  '+y': { theta: Math.PI, phi: Math.PI / 2 },
  '-y': { theta: 0, phi: Math.PI / 2 },
  '+z': { theta: 0, phi: PHI_EPS },
  '-z': { theta: 0, phi: Math.PI - PHI_EPS },
};

const AXES = [
  { key: 'x', dir: [1, 0, 0] },
  { key: 'y', dir: [0, 1, 0] },
  { key: 'z', dir: [0, 0, 1] },
];

// Axis neighbours first, then diagonals, when snapping undefined vertices to the domain rim.
const RIM_NEIGHBOURS = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, -1], [1, -1], [-1, 1]];

const toScene = (x, y, z, out = new THREE.Vector3()) => out.set(x, z, -y);
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const easeInOutCubic = (p) => (p < 0.5 ? 4 * p * p * p : 1 - (-2 * p + 2) ** 3 / 2);
const formatTick = (value) => String(Number(value.toFixed(2))).replace('-', '−');

function disposeObject(root) {
  root.traverse((child) => {
    child.geometry?.dispose();
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.forEach((material) => {
      material?.map?.dispose();
      material?.dispose();
    });
  });
}

function buildColorLut(stops, size = 256) {
  const rgb = stops.map((hex) => {
    const c = new THREE.Color();
    c.setStyle(hex, THREE.SRGBColorSpace);
    return c.getRGB(new THREE.Color(), THREE.SRGBColorSpace);
  });
  const lut = new Float32Array(size * 3);
  const color = new THREE.Color();
  for (let i = 0; i < size; i++) {
    const p = (i / (size - 1)) * (rgb.length - 1);
    const lo = Math.floor(p);
    const hi = Math.min(rgb.length - 1, lo + 1);
    const f = p - lo;
    color.setRGB(
      rgb[lo].r + (rgb[hi].r - rgb[lo].r) * f,
      rgb[lo].g + (rgb[hi].g - rgb[lo].g) * f,
      rgb[lo].b + (rgb[hi].b - rgb[lo].b) * f,
      THREE.SRGBColorSpace,
    );
    lut[i * 3] = color.r;
    lut[i * 3 + 1] = color.g;
    lut[i * 3 + 2] = color.b;
  }
  return lut;
}

function makeLabel(text, { color, halo, height, weight = 700, onTop = true }) {
  const fontPx = 96;
  const font = `${weight} ${fontPx}px Inter, ui-sans-serif, system-ui, "Segoe UI", sans-serif`;
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  ctx.font = font;
  canvas.width = Math.ceil(ctx.measureText(text).width + fontPx * 0.6);
  canvas.height = Math.ceil(fontPx * 1.35);
  ctx.font = font;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.lineJoin = 'round';
  ctx.lineWidth = fontPx * 0.2;
  ctx.strokeStyle = halo;
  ctx.strokeText(text, canvas.width / 2, canvas.height / 2);
  ctx.fillStyle = color;
  ctx.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  const sprite = new THREE.Sprite(
    new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: !onTop, depthWrite: false }),
  );
  sprite.scale.set((height * canvas.width) / canvas.height, height, 1);
  sprite.renderOrder = onTop ? 10 : 2;
  return sprite;
}

function buildAxes({ len, step, theme, zScale = 1 }) {
  const group = new THREE.Group();
  const ticks = new THREE.Group();
  group.add(ticks);

  const r = len * 0.0065;
  const coneHeight = r * 11;
  const dotGap = len / 28;
  const dotGeometry = new THREE.SphereGeometry(r * 1.5, 10, 8);
  const coneGeometry = new THREE.ConeGeometry(r * 3.1, coneHeight, 24);
  const tickGeometry = new THREE.SphereGeometry(r * 2.6, 12, 8);

  AXES.forEach(({ key, dir }) => {
    const d = toScene(...dir).normalize();
    const axisLen = key === 'z' ? len * zScale : len;
    const dotsPerHalf = Math.floor((axisLen - coneHeight) / dotGap);
    const tickValues = [];
    for (let v = step; v <= axisLen - step * 0.35 + 1e-9; v += step) {
      tickValues.push(v, -v);
    }
    const material = new THREE.MeshStandardMaterial({ color: theme.axis[key], roughness: 0.35, metalness: 0.1 });

    // A dotted line through the origin, running out to both ends of the axis.
    const dots = new THREE.InstancedMesh(dotGeometry, material, dotsPerHalf * 2);
    const matrix = new THREE.Matrix4();
    for (let i = 0; i < dotsPerHalf; i++) {
      const at = (i + 1) * dotGap;
      dots.setMatrixAt(2 * i, matrix.makeTranslation(d.x * at, d.y * at, d.z * at));
      dots.setMatrixAt(2 * i + 1, matrix.makeTranslation(-d.x * at, -d.y * at, -d.z * at));
    }
    group.add(dots);

    // An arrowhead and a label on every one of the six half-axes.
    [1, -1].forEach((sign) => {
      const outward = d.clone().multiplyScalar(sign);
      const cone = new THREE.Mesh(coneGeometry, material);
      cone.quaternion.setFromUnitVectors(UP, outward);
      cone.position.copy(outward).multiplyScalar(axisLen - coneHeight / 2);
      group.add(cone);

      const label = makeLabel(`${sign > 0 ? '+' : '−'}${key}`, {
        color: theme.axis[key],
        halo: theme.halo,
        height: len * 0.1,
        weight: 800,
      });
      label.position.copy(outward).multiplyScalar(axisLen + len * 0.1);
      group.add(label);
    });

    // Tick marks with numbers.
    const tickMesh = new THREE.InstancedMesh(tickGeometry, material, Math.max(1, tickValues.length));
    tickMesh.count = tickValues.length;
    const offset = key === 'z' ? toScene(0.06 * len, -0.06 * len, 0) : toScene(0, 0, -0.055 * len);
    tickValues.forEach((value, i) => {
      matrix.makeTranslation(d.x * value, d.y * value, d.z * value);
      tickMesh.setMatrixAt(i, matrix);
      const label = makeLabel(formatTick(value), {
        color: theme.muted,
        halo: theme.halo,
        height: len * 0.06,
        weight: 600,
        onTop: false,
      });
      label.position.copy(d).multiplyScalar(value).add(offset);
      ticks.add(label);
    });
    ticks.add(tickMesh);
  });

  const origin = new THREE.Mesh(
    new THREE.SphereGeometry(r * 2.6, 16, 12),
    new THREE.MeshStandardMaterial({ color: theme.ink, roughness: 0.4 }),
  );
  group.add(origin);
  const originLabel = makeLabel('O', { color: theme.muted, halo: theme.halo, height: len * 0.05, weight: 700, onTop: false });
  originLabel.position.copy(toScene(-0.05 * len, 0.05 * len, -0.05 * len));
  ticks.add(originLabel);

  return { group, ticks };
}

// A square mesh in the three.js XZ plane: strong lines at every tick, fainter lines between them.
function buildGridMesh(size, major, minor, color) {
  const half = size / 2;
  const count = Math.round(size / minor);
  const majorPoints = [];
  const minorPoints = [];
  for (let i = 0; i <= count; i++) {
    const v = -half + i * minor;
    const isMajor = Math.abs(v / major - Math.round(v / major)) < 1e-6;
    (isMajor ? majorPoints : minorPoints).push(v, 0, -half, v, 0, half, -half, 0, v, half, 0, v);
  }
  const lines = (points, opacity) => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(points, 3));
    return new THREE.LineSegments(
      geometry,
      new THREE.LineBasicMaterial({ color, transparent: true, opacity, depthWrite: false }),
    );
  };
  const mesh = new THREE.Group();
  mesh.add(lines(minorPoints, 0.3), lines(majorPoints, 0.65));
  return mesh;
}

function buildPlanes({ len, step, theme, domain = null }) {
  const leadingDigit = Math.round(step / 10 ** Math.floor(Math.log10(step)));
  const minor = step / (leadingDigit === 5 ? 5 : 4);
  // Out to the last whole tick inside the axes, or just past the plotted domain when one is given.
  const half = domain ? Math.ceil(domain / minor - 1e-9) * minor : Math.max(1, Math.floor(len / step + 1e-9)) * step;
  const size = half * 2;
  const make = (tint, orient) => {
    const group = new THREE.Group();
    const grid = buildGridMesh(size, step, minor, theme.grid);
    const fill = new THREE.Mesh(
      new THREE.PlaneGeometry(size, size),
      new THREE.MeshBasicMaterial({ color: tint, transparent: true, opacity: 0.05, side: THREE.DoubleSide, depthWrite: false }),
    );
    orient(grid, fill);
    group.add(fill, grid);
    return group;
  };
  // Each plane is tinted with the colour of the axis it is perpendicular to.
  return {
    xy: make(theme.axis.z, (grid, fill) => { fill.rotation.x = -Math.PI / 2; }),
    xz: make(theme.axis.y, (grid) => { grid.rotation.x = Math.PI / 2; }),
    yz: make(theme.axis.x, (grid, fill) => { grid.rotation.z = Math.PI / 2; fill.rotation.y = Math.PI / 2; }),
  };
}

/**
 * options.wheelZoom   – zoom on mouse wheel (off for embeds, so the page still scrolls)
 * options.probe       – hover readout and click-to-pin a point
 * options.spinSpeed   – auto-rotate speed in radians per second
 * options.home        – { theta, phi } the view that Reset / double-click returns to
 * options.distance    – camera distance as a multiple of the axis length
 * options.zAxis       – length of the z-axis relative to the x- and y-axes
 * options.gridToDomain – size the coordinate-plane meshes to the plotted domain instead of the axes
 */
export function createSurfaceScene(container, handlers = {}, options = {}) {
  const { wheelZoom = true, probe: probeEnabled = true, spinSpeed = 0.3, home = CAMERA_VIEWS.iso, distance = 4.1, zAxis = 1, gridToDomain = false } = options;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.className = 'se-canvas';
  canvas.tabIndex = 0;
  canvas.setAttribute('role', 'img');
  canvas.setAttribute('aria-label', '3D surface plot. Drag to rotate, scroll to zoom, arrow keys to orbit, plus and minus to zoom.');
  container.appendChild(canvas);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.05, 1000);
  scene.add(camera);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x2c3e4c, 1.35));
  const keyLight = new THREE.DirectionalLight(0xffffff, 1.1);
  keyLight.position.set(5, 12, 7);
  scene.add(keyLight);
  // A headlight that travels with the camera keeps the surface readable from every side, even from −z.
  const headLight = new THREE.DirectionalLight(0xffffff, 0.7);
  headLight.position.set(0, 0, 1);
  camera.add(headLight);

  const state = {
    surface: null,
    a: 1,
    k: 1,
    t: 0,
    range: 3,
    len: 0,
    step: 1,
    zClip: 5,
    segments: 0,
    playing: false,
    speed: 1,
    autoRotate: false,
    lut: null,
    colorLo: Infinity,
    colorHi: -Infinity,
    show: { axes: true, ticks: true, xy: true, yz: false, xz: false, mesh: false, tangent: true },
    theme: null,
    probe: null,
    needsEval: true,
    needsAxes: true,
    dirty: true,
    lastEmit: 0,
    lastProbeEmit: 0,
  };

  // Called whenever the formula or domain changes, so the colour range is recomputed from scratch.
  const refresh = () => {
    state.colorLo = Infinity;
    state.colorHi = -Infinity;
    state.needsEval = true;
  };
  const orbit = {
    theta: home.theta,
    phi: home.phi,
    radius: 14,
    target: new THREE.Vector3(),
    vTheta: 0,
    vPhi: 0,
    tween: null,
  };

  // ── Surface ────────────────────────────────────────────────────────────────
  const surfaceMaterial = new THREE.MeshStandardMaterial({
    vertexColors: true,
    side: THREE.DoubleSide,
    roughness: 0.68,
    metalness: 0.05,
    // Pushes the surface back a hair so grid lines lying on it (e.g. at z = 0) stay visible.
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
  });
  const meshLineMaterial = new THREE.LineBasicMaterial({ color: 0x0f172a, transparent: true, opacity: 0.22 });
  let surfaceMesh = null;
  let meshLines = null;
  let valid = null;
  let defined = null;
  let lineEvery = 1;

  function allocateSurface(segments) {
    if (surfaceMesh) {
      scene.remove(surfaceMesh, meshLines);
      surfaceMesh.geometry.dispose();
      meshLines.geometry.dispose();
    }
    const n = segments + 1;
    const geometry = new THREE.BufferGeometry();
    const position = new THREE.BufferAttribute(new Float32Array(n * n * 3), 3).setUsage(THREE.DynamicDrawUsage);
    geometry.setAttribute('position', position);
    geometry.setAttribute('color', new THREE.BufferAttribute(new Float32Array(n * n * 3), 3).setUsage(THREE.DynamicDrawUsage));
    geometry.setIndex(new THREE.BufferAttribute(new Uint32Array(segments * segments * 6), 1).setUsage(THREE.DynamicDrawUsage));
    surfaceMesh = new THREE.Mesh(geometry, surfaceMaterial);

    lineEvery = Math.max(1, Math.round(segments / 24));
    const rows = Math.floor(segments / lineEvery) + 2;
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', position);
    lineGeometry.setIndex(new THREE.BufferAttribute(new Uint32Array(rows * segments * 4), 1).setUsage(THREE.DynamicDrawUsage));
    meshLines = new THREE.LineSegments(lineGeometry, meshLineMaterial);
    meshLines.frustumCulled = false;
    meshLines.renderOrder = 1;
    meshLines.visible = state.show.mesh;

    scene.add(surfaceMesh, meshLines);
    valid = new Uint8Array(n * n);
    defined = new Uint8Array(n * n);
    state.segments = segments;
  }

  const sample = (x, y) => (state.surface ? state.surface.evaluate(x, y, state.t, state.a, state.k) : NaN);

  function evaluate() {
    if (!surfaceMesh) return;
    const { segments: segs, range, zClip } = state;
    const n = segs + 1;
    const geometry = surfaceMesh.geometry;
    const pos = geometry.attributes.position.array;
    const col = geometry.attributes.color.array;
    let zMin = Infinity;
    let zMax = -Infinity;
    let clipped = 0;
    let invalid = 0;

    for (let j = 0; j < n; j++) {
      const y = -range + (2 * range * j) / segs;
      for (let i = 0; i < n; i++) {
        const x = -range + (2 * range * i) / segs;
        const idx = j * n + i;
        let z = sample(x, y);
        if (Number.isFinite(z)) {
          if (z > zClip) { z = zClip; clipped++; } else if (z < -zClip) { z = -zClip; clipped++; }
          valid[idx] = 1;
          if (z < zMin) zMin = z;
          if (z > zMax) zMax = z;
        } else {
          valid[idx] = 0;
          invalid++;
          z = 0;
        }
        pos[idx * 3] = x;
        pos[idx * 3 + 1] = z;
        pos[idx * 3 + 2] = -y;
      }
    }

    // Where the domain ends (e.g. sqrt(9 − x² − y²)), pull each undefined vertex next to a defined one
    // onto the domain boundary by bisection. Otherwise the rim is a jagged staircase.
    if (invalid > 0) {
      defined.set(valid);
      // Grid coordinates recomputed in full precision; the Float32 position buffer can round a
      // point that sits exactly on the boundary to just outside it.
      const gridCoord = (index) => -range + (2 * range * index) / segs;
      for (let idx = 0; idx < n * n; idx++) {
        if (defined[idx]) continue;
        const i = idx % n;
        const j = (idx - i) / n;
        for (const [di, dj] of RIM_NEIGHBOURS) {
          const ni = i + di;
          const nj = j + dj;
          if (ni < 0 || nj < 0 || ni > segs || nj > segs || !defined[nj * n + ni]) continue;
          let inX = gridCoord(ni);
          let inY = gridCoord(nj);
          let outX = gridCoord(i);
          let outY = gridCoord(j);
          for (let step = 0; step < 10; step++) {
            const mx = (inX + outX) / 2;
            const my = (inY + outY) / 2;
            if (Number.isFinite(sample(mx, my))) { inX = mx; inY = my; } else { outX = mx; outY = my; }
          }
          const z = clamp(sample(inX, inY), -zClip, zClip);
          pos[idx * 3] = inX;
          pos[idx * 3 + 1] = z;
          pos[idx * 3 + 2] = -inY;
          valid[idx] = 1;
          break;
        }
      }
    }

    // Triangles only where all four corners are defined, so domains like sqrt(1 − x² − y²) get clean edges.
    const tri = geometry.index.array;
    let p = 0;
    for (let j = 0; j < segs; j++) {
      for (let i = 0; i < segs; i++) {
        const a = j * n + i;
        const b = a + 1;
        const c = a + n;
        const d = c + 1;
        if (valid[a] && valid[b] && valid[c] && valid[d]) {
          tri[p++] = a; tri[p++] = b; tri[p++] = c;
          tri[p++] = b; tri[p++] = d; tri[p++] = c;
        }
      }
    }
    tri.fill(0, p);
    geometry.setDrawRange(0, p);
    geometry.index.needsUpdate = true;

    const lines = meshLines.geometry.index.array;
    let q = 0;
    const isRow = (j) => j % lineEvery === 0 || j === segs;
    for (let j = 0; j <= segs; j++) {
      if (!isRow(j)) continue;
      for (let i = 0; i < segs; i++) {
        const a = j * n + i;
        if (valid[a] && valid[a + 1]) { lines[q++] = a; lines[q++] = a + 1; }
      }
    }
    for (let i = 0; i <= segs; i++) {
      if (!isRow(i)) continue;
      for (let j = 0; j < segs; j++) {
        const a = j * n + i;
        if (valid[a] && valid[a + n]) { lines[q++] = a; lines[q++] = a + n; }
      }
    }
    meshLines.geometry.setDrawRange(0, q);
    meshLines.geometry.index.needsUpdate = true;

    // Colour by height. While t animates, the colour range only grows so colours don't pulse.
    if (!(state.playing && state.surface?.usesT)) {
      state.colorLo = Infinity;
      state.colorHi = -Infinity;
    }
    state.colorLo = Math.min(state.colorLo, zMin);
    state.colorHi = Math.max(state.colorHi, zMax);
    const lo = state.colorLo;
    const span = state.colorHi - lo;
    const lut = state.lut;
    for (let idx = 0; idx < n * n; idx++) {
      const f = span > 1e-9 ? (pos[idx * 3 + 1] - lo) / span : 0.5;
      const li = clamp(Math.round(f * 255), 0, 255) * 3;
      col[idx * 3] = lut[li];
      col[idx * 3 + 1] = lut[li + 1];
      col[idx * 3 + 2] = lut[li + 2];
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.color.needsUpdate = true;
    geometry.computeVertexNormals();
    geometry.computeBoundingSphere();

    const now = performance.now();
    if (!state.playing || now - state.lastEmit > 250) {
      state.lastEmit = now;
      handlers.onStats?.({
        zMin: Number.isFinite(zMin) ? zMin : null,
        zMax: Number.isFinite(zMax) ? zMax : null,
        clipped,
        invalid,
        total: n * n,
        zClip,
        t: state.t,
      });
    }
    updateProbe();
    state.dirty = true;
  }

  // ── Axes and coordinate planes ─────────────────────────────────────────────
  let axes = null;
  let planes = null;

  function rebuildAxes() {
    if (axes) { scene.remove(axes.group); disposeObject(axes.group); }
    if (planes) { Object.values(planes).forEach((plane) => { scene.remove(plane); disposeObject(plane); }); }
    axes = buildAxes({ len: state.len, step: state.step, theme: state.theme, zScale: zAxis });
    planes = buildPlanes({ len: state.len, step: state.step, theme: state.theme, domain: gridToDomain ? state.range : null });
    scene.add(axes.group, planes.xy, planes.xz, planes.yz);
    applyVisibility();
    sizeMarkers();
  }

  function applyVisibility() {
    if (axes) {
      axes.group.visible = state.show.axes;
      axes.ticks.visible = state.show.ticks;
    }
    if (planes) {
      planes.xy.visible = state.show.xy;
      planes.xz.visible = state.show.xz;
      planes.yz.visible = state.show.yz;
    }
    if (meshLines) meshLines.visible = state.show.mesh;
    updateProbe();
    state.dirty = true;
  }

  // ── Probe point, guide lines and tangent plane ─────────────────────────────
  const accent = new THREE.Color('#f59e0b');
  const markerGeometry = new THREE.SphereGeometry(1, 20, 14);
  const probeGroup = new THREE.Group();
  const probeDot = new THREE.Mesh(markerGeometry, new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 0.35 }));
  const footDot = new THREE.Mesh(markerGeometry, new THREE.MeshStandardMaterial({ color: accent, transparent: true, opacity: 0.7 }));
  const guideMaterial = new THREE.LineDashedMaterial({ color: 0x0f172a, dashSize: 0.12, gapSize: 0.08, transparent: true, opacity: 0.75 });
  const guides = new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(new Float32Array(18), 3)), guideMaterial);
  const tangentGeometry = new THREE.BufferGeometry();
  tangentGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(12), 3));
  tangentGeometry.setIndex([0, 1, 2, 0, 2, 3]);
  const tangentPlane = new THREE.Mesh(
    tangentGeometry,
    new THREE.MeshStandardMaterial({ color: accent, transparent: true, opacity: 0.38, side: THREE.DoubleSide, depthWrite: false }),
  );
  // The outline shares the corner positions but not the triangle index, so it traces only the four edges.
  const tangentEdge = new THREE.LineLoop(
    new THREE.BufferGeometry().setAttribute('position', tangentGeometry.attributes.position),
    new THREE.LineBasicMaterial({ color: accent }),
  );
  guides.frustumCulled = false;
  tangentPlane.frustumCulled = false;
  tangentEdge.frustumCulled = false;
  probeGroup.add(probeDot, footDot, guides, tangentPlane, tangentEdge);
  probeGroup.visible = false;
  scene.add(probeGroup);

  const hoverDot = new THREE.Mesh(markerGeometry, new THREE.MeshBasicMaterial({ color: 0x0f172a }));
  hoverDot.visible = false;
  scene.add(hoverDot);

  function sizeMarkers() {
    probeDot.scale.setScalar(state.len * 0.022);
    footDot.scale.setScalar(state.len * 0.012);
    hoverDot.scale.setScalar(state.len * 0.012);
    guideMaterial.dashSize = state.len * 0.03;
    guideMaterial.gapSize = state.len * 0.02;
  }

  function emitProbeInfo(info) {
    const now = performance.now();
    if (!info || !state.playing || now - state.lastProbeEmit > 120) {
      state.lastProbeEmit = now;
      handlers.onProbeInfo?.(info);
    }
  }

  function updateProbe() {
    const probe = state.probe;
    const z0 = probe ? sample(probe.x, probe.y) : NaN;
    if (!probe || !Number.isFinite(z0)) {
      probeGroup.visible = false;
      emitProbeInfo(probe ? { ...probe, z: null } : null);
      state.dirty = true;
      return;
    }
    const { x, y } = probe;
    const h = 1e-4 * Math.max(1, state.range);
    const fx = (sample(x + h, y) - sample(x - h, y)) / (2 * h);
    const fy = (sample(x, y + h) - sample(x, y - h)) / (2 * h);
    const zShown = clamp(z0, -state.zClip, state.zClip);

    probeGroup.visible = true;
    toScene(x, y, zShown, probeDot.position);
    toScene(x, y, 0, footDot.position);

    const g = guides.geometry.attributes.position;
    const points = [[x, y, zShown], [x, y, 0], [x, y, 0], [x, 0, 0], [x, y, 0], [0, y, 0]];
    const v = new THREE.Vector3();
    points.forEach((pt, i) => { toScene(...pt, v); g.setXYZ(i, v.x, v.y, v.z); });
    g.needsUpdate = true;
    guides.computeLineDistances();

    const gradientOk = Number.isFinite(fx) && Number.isFinite(fy);
    tangentPlane.visible = state.show.tangent && gradientOk;
    tangentEdge.visible = tangentPlane.visible;
    if (gradientOk) {
      // Shrink the patch on steep slopes so it doesn't shoot off the screen.
      const half = Math.min(state.range * 0.3, (state.len * 0.45) / Math.max(Math.abs(fx) + Math.abs(fy), 1e-6));
      const tp = tangentGeometry.attributes.position;
      [[-1, -1], [1, -1], [1, 1], [-1, 1]].forEach(([sx, sy], i) => {
        const dx = sx * half;
        const dy = sy * half;
        toScene(x + dx, y + dy, zShown + fx * dx + fy * dy, v);
        tp.setXYZ(i, v.x, v.y, v.z);
      });
      tp.needsUpdate = true;
      tangentGeometry.computeVertexNormals();
    }

    emitProbeInfo({ x, y, z: z0, fx, fy });
    state.dirty = true;
  }

  // ── Camera and pointer controls ────────────────────────────────────────────
  const raycaster = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  const pointers = new Map();
  let drag = null;
  let pinchDistance = 0;
  let pendingHover = null;

  const minRadius = () => state.len * 0.8;
  const maxRadius = () => state.len * 14;
  const defaultRadius = () => state.len * distance;

  function updateCamera() {
    const aspect = camera.aspect || 1;
    camera.position.setFromSphericalCoords(orbit.radius, orbit.phi, orbit.theta).add(orbit.target);
    camera.lookAt(orbit.target);
    // Keep the whole axis frame in view on tall, narrow screens.
    const fov = aspect < 1 ? 36 / Math.max(aspect, 0.55) : 36;
    if (Math.abs(camera.fov - fov) > 0.01) {
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
  }

  function flyTo(view) {
    const to = {
      theta: view.theta,
      phi: view.phi,
      radius: view.radius ?? defaultRadius(),
      target: new THREE.Vector3(),
    };
    const twoPi = Math.PI * 2;
    const dTheta = ((((to.theta - orbit.theta) % twoPi) + twoPi * 1.5) % twoPi) - Math.PI;
    orbit.tween = {
      from: { theta: orbit.theta, phi: orbit.phi, radius: orbit.radius, target: orbit.target.clone() },
      to,
      dTheta,
      start: performance.now(),
      duration: 750,
    };
    orbit.vTheta = 0;
    orbit.vPhi = 0;
    state.dirty = true;
  }

  function zoom(factor) {
    orbit.radius = clamp(orbit.radius * factor, minRadius(), maxRadius());
    state.dirty = true;
  }

  function pan(dx, dy) {
    const visibleHeight = 2 * orbit.radius * Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2);
    const scale = visibleHeight / (canvas.clientHeight || 1);
    const right = new THREE.Vector3().setFromMatrixColumn(camera.matrix, 0);
    const up = new THREE.Vector3().setFromMatrixColumn(camera.matrix, 1);
    orbit.target.addScaledVector(right, -dx * scale).addScaledVector(up, dy * scale);
    orbit.target.clampLength(0, state.len * 2);
    state.dirty = true;
  }

  function pick(clientX, clientY) {
    if (!surfaceMesh) return null;
    const rect = canvas.getBoundingClientRect();
    ndc.set(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    raycaster.setFromCamera(ndc, camera);
    const hit = raycaster.intersectObject(surfaceMesh, false)[0];
    return hit ? { x: hit.point.x, y: -hit.point.z } : null;
  }

  function hover(point) {
    const hit = point && pick(point.x, point.y);
    const z = hit ? sample(hit.x, hit.y) : NaN;
    if (hit && Number.isFinite(z)) {
      toScene(hit.x, hit.y, clamp(z, -state.zClip, state.zClip), hoverDot.position);
      hoverDot.visible = true;
      handlers.onHover?.({ x: hit.x, y: hit.y, z });
    } else {
      hoverDot.visible = false;
      handlers.onHover?.(null);
    }
    state.dirty = true;
  }

  const pinchGap = () => {
    const [a, b] = [...pointers.values()];
    return Math.hypot(a.x - b.x, a.y - b.y);
  };

  function onPointerDown(event) {
    canvas.setPointerCapture(event.pointerId);
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    orbit.tween = null;
    if (pointers.size === 1) {
      const panMode = event.button === 2 || event.shiftKey || event.ctrlKey || event.metaKey;
      drag = { mode: panMode ? 'pan' : 'rotate', x: event.clientX, y: event.clientY, startX: event.clientX, startY: event.clientY, moved: false, time: performance.now() };
      orbit.vTheta = 0;
      orbit.vPhi = 0;
    } else if (pointers.size === 2) {
      pinchDistance = pinchGap();
      if (drag) drag.moved = true;
    }
  }

  function onPointerMove(event) {
    if (!pointers.has(event.pointerId)) {
      if (probeEnabled) pendingHover = { x: event.clientX, y: event.clientY };
      return;
    }
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    if (pointers.size >= 2) {
      const gap = pinchGap();
      if (pinchDistance > 0 && gap > 0) zoom(pinchDistance / gap);
      pinchDistance = gap;
      return;
    }
    if (!drag) return;
    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;
    drag.x = event.clientX;
    drag.y = event.clientY;
    if (!drag.moved && Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) > 4) {
      drag.moved = true;
      hoverDot.visible = false;
      handlers.onHover?.(null);
      handlers.onUserOrbit?.();
    }
    if (!drag.moved) return;
    drag.time = performance.now();
    if (drag.mode === 'rotate') {
      const speed = (1.6 * Math.PI) / (canvas.clientHeight || 500);
      orbit.vTheta = -dx * speed;
      orbit.vPhi = -dy * speed;
      orbit.theta += orbit.vTheta;
      orbit.phi = clamp(orbit.phi + orbit.vPhi, PHI_EPS, Math.PI - PHI_EPS);
    } else {
      pan(dx, dy);
    }
    state.dirty = true;
  }

  function onPointerUp(event) {
    if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    pointers.delete(event.pointerId);
    if (pointers.size < 2) pinchDistance = 0;
    if (pointers.size > 0) return;
    if (drag && !drag.moved && event.button === 0) {
      const hit = pick(event.clientX, event.clientY);
      if (hit && probeEnabled) handlers.onPick?.(hit);
    }
    // No fling if the pointer rested before release.
    if (drag && performance.now() - drag.time > 90) {
      orbit.vTheta = 0;
      orbit.vPhi = 0;
    }
    drag = null;
  }

  function onPointerLeave() {
    if (pointers.size === 0) {
      pendingHover = null;
      hoverDot.visible = false;
      handlers.onHover?.(null);
      state.dirty = true;
    }
  }

  function onWheel(event) {
    event.preventDefault();
    orbit.tween = null;
    const delta = event.deltaMode === 1 ? event.deltaY * 16 : event.deltaY;
    zoom(Math.exp(clamp(delta, -200, 200) * 0.0012));
  }

  const KEY_ACTIONS = {
    ArrowLeft: () => { orbit.theta += 0.09; },
    ArrowRight: () => { orbit.theta -= 0.09; },
    ArrowUp: () => { orbit.phi = clamp(orbit.phi - 0.09, PHI_EPS, Math.PI - PHI_EPS); },
    ArrowDown: () => { orbit.phi = clamp(orbit.phi + 0.09, PHI_EPS, Math.PI - PHI_EPS); },
    '+': () => zoom(0.88),
    '=': () => zoom(0.88),
    '-': () => zoom(1 / 0.88),
    _: () => zoom(1 / 0.88),
  };

  function onKeyDown(event) {
    if (event.key === '0') {
      event.preventDefault();
      flyTo(home);
      return;
    }
    const action = KEY_ACTIONS[event.key];
    if (!action) return;
    event.preventDefault();
    orbit.tween = null;
    action();
    handlers.onUserOrbit?.();
    state.dirty = true;
  }

  const onDoubleClick = () => flyTo(home);
  const onContextMenu = (event) => event.preventDefault();

  canvas.addEventListener('pointerdown', onPointerDown);
  canvas.addEventListener('pointermove', onPointerMove);
  canvas.addEventListener('pointerup', onPointerUp);
  canvas.addEventListener('pointercancel', onPointerUp);
  canvas.addEventListener('pointerleave', onPointerLeave);
  if (wheelZoom) canvas.addEventListener('wheel', onWheel, { passive: false });
  canvas.addEventListener('keydown', onKeyDown);
  canvas.addEventListener('dblclick', onDoubleClick);
  canvas.addEventListener('contextmenu', onContextMenu);

  const resizeObserver = new ResizeObserver(() => {
    const width = container.clientWidth;
    const height = container.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    state.dirty = true;
  });
  resizeObserver.observe(container);

  // ── Frame loop (renders only when something changed) ───────────────────────
  let frame = 0;
  let last = performance.now();
  function tick(now) {
    frame = requestAnimationFrame(tick);
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;

    if (state.needsAxes && state.theme) {
      state.needsAxes = false;
      rebuildAxes();
    }

    if (orbit.tween) {
      const { from, to, dTheta, start, duration } = orbit.tween;
      const e = easeInOutCubic(clamp((now - start) / duration, 0, 1));
      orbit.theta = from.theta + dTheta * e;
      orbit.phi = from.phi + (to.phi - from.phi) * e;
      orbit.radius = from.radius + (to.radius - from.radius) * e;
      orbit.target.lerpVectors(from.target, to.target, e);
      if (e >= 1) orbit.tween = null;
      state.dirty = true;
    } else if (!drag || !drag.moved) {
      if (Math.abs(orbit.vTheta) > 1e-5 || Math.abs(orbit.vPhi) > 1e-5) {
        orbit.theta += orbit.vTheta;
        orbit.phi = clamp(orbit.phi + orbit.vPhi, PHI_EPS, Math.PI - PHI_EPS);
        const decay = 0.9 ** (dt * 60);
        orbit.vTheta *= decay;
        orbit.vPhi *= decay;
        state.dirty = true;
      }
      if (state.autoRotate && !drag) {
        orbit.theta -= dt * spinSpeed;
        state.dirty = true;
      }
    }

    const animating = state.playing && state.surface?.usesT;
    if (animating) state.t += dt * state.speed;
    if ((state.needsEval || animating) && state.lut) {
      state.needsEval = false;
      evaluate();
    }

    if (pendingHover) {
      hover(pendingHover);
      pendingHover = null;
    }

    if (state.dirty) {
      state.dirty = false;
      updateCamera();
      renderer.render(scene, camera);
    }
  }
  frame = requestAnimationFrame(tick);

  // ── Public API ─────────────────────────────────────────────────────────────
  return {
    setSurface(surface) {
      state.surface = surface && !surface.error ? surface : null;
      refresh();
    },
    setParams({ a, k }) {
      state.a = a;
      state.k = k;
      refresh();
    },
    setDomain({ range, segments }) {
      const len = axisLength(range);
      if (state.len && len !== state.len) {
        orbit.radius = clamp((orbit.radius * len) / state.len, len * 0.8, len * 14);
        orbit.target.multiplyScalar(len / state.len);
      } else if (!state.len) {
        orbit.radius = len * distance;
      }
      if (len !== state.len || (gridToDomain && range !== state.range)) state.needsAxes = true;
      state.range = range;
      state.len = len;
      state.step = niceStep(len / 4);
      state.zClip = len * 1.25;
      if (segments !== state.segments) allocateSurface(segments);
      refresh();
    },
    setPalette(stops) {
      state.lut = buildColorLut(stops);
      state.needsEval = true;
    },
    setOpacity(opacity) {
      const transparent = opacity < 0.999;
      surfaceMaterial.opacity = opacity;
      if (surfaceMaterial.transparent !== transparent) {
        surfaceMaterial.transparent = transparent;
        surfaceMaterial.depthWrite = !transparent;
        surfaceMaterial.needsUpdate = true;
      }
      state.dirty = true;
    },
    setShow(show) {
      state.show = { ...state.show, ...show };
      applyVisibility();
    },
    setTheme(theme) {
      state.theme = theme;
      meshLineMaterial.color.set(theme.ink);
      guideMaterial.color.set(theme.ink);
      hoverDot.material.color.set(theme.ink);
      state.needsAxes = true;
      state.dirty = true;
    },
    setAnimation({ playing, speed }) {
      state.playing = playing;
      state.speed = speed;
      state.needsEval = true;
    },
    setAutoRotate(on) {
      state.autoRotate = on;
      state.dirty = true;
    },
    setTime(t) {
      state.t = t;
      refresh();
    },
    setProbe(probe) {
      state.probe = probe;
      updateProbe();
    },
    viewFrom(id) {
      flyTo(CAMERA_VIEWS[id] || home);
    },
    zoomBy(factor) {
      orbit.tween = null;
      zoom(factor);
    },
    dispose() {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerUp);
      canvas.removeEventListener('pointerleave', onPointerLeave);
      canvas.removeEventListener('wheel', onWheel);
      canvas.removeEventListener('keydown', onKeyDown);
      canvas.removeEventListener('dblclick', onDoubleClick);
      canvas.removeEventListener('contextmenu', onContextMenu);
      disposeObject(scene);
      renderer.dispose();
      renderer.forceContextLoss();
      canvas.remove();
    },
  };
}
