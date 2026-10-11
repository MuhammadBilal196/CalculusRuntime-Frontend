import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { COURSES } from "../data/courses";

// StudyGuideShell owns lesson titles; these titles cover the surrounding pages.
const PAGE_TITLES = {
    "/": "Calculus, Linear Algebra & Statistics",
    "/practice": "Practice Arena",
    "/notes": "Notes & Highlights",
    "/flashcards": "Flashcards",
    "/mistakes": "Mistake Notebook",
    "/dashboard": "Dashboard",
    "/saved": "Saved Examples",
    "/login": "Sign in",
    "/signup": "Create an account",
    "/leaderboard": "Leaderboard",
    "/certificates": "My Certificates",
    "/ai-solver": "AI Calculus Solver",
    "/cheatsheet": "Formula Cheat Sheet",
    "/study-plan": "Personalized Study Plan",
    "/simple-concepts": "Simple Concepts",
    "/test": "Continuity Finder",
    "/extreme": "Extreme Value Finder",
    "/volumecalculator": "Volume Calculator",
    "/surface-explorer": "3D Surface Explorer",
    "/vectorfield": "Vector Field Visualizer",
    "/analytic-vector-lab": "Analytic Vector Lab",
    "/derivative-visualizer": "Derivative Visualizer",
    "/taylorx": "Derivative Visualizer",
    "/linear-algebra/overview": "Linear Algebra Overview",
    "/calculus/overview": "Calculus & Analytical Geometry Overview",
    "/multivariable-calculus/overview": "Multivariable Calculus Overview",
    "/probability-statistics/overview": "Probability & Statistics Overview",
};

export function shortAnchorName(value) {
  let words = value.toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  if (/\bdefinition\b/.test(words) && /\blimit\b/.test(words)) return 'limit-definition';
  words = words.replace(/principal component analysis/g, 'pca')
    .replace(/singular value decomposition/g, 'svd')
    .replace(/ordinary differential equations/g, 'odes')
    .replace(/partial differential equations/g, 'pdes')
    .replace(/frequently asked questions/g, 'faq')
    .replace(/worked examples?/g, 'examples')
    .replace(/real (world|life)( applications?)?/g, 'applications')
    .replace(/checkpoint/g, 'quiz');
  const ignored = new Set('the a an and or of to in for with as is are how why what this that using basic introduction overview formal'.split(' '));
  const parts = [...new Set(words.split(/\s+/).filter(word => word && !ignored.has(word)))];
  while (/^\d+$/.test(parts[0])) parts.shift();
  return parts.slice(0, 3).join('-').slice(0, 30).replace(/-$/, '') || 'section';
}

// Public fragments are separate from persisted quiz, note and example IDs.
export const guideAnchors = new WeakMap();

export function setupReadableAnchors(root, onNavigate) {
  const byName = new Map();
  const byTarget = new Map();
  const targets = Array.from(root.querySelectorAll(".section[id], .mcq-section[id], .la-module-topic[id]"));
  const ids = new Map(Array.from(root.querySelectorAll("[id]"), (node) => [node.id, node]));
  root.querySelectorAll('.sb-link[href^="#"], .sidebar-link[href^="#"], .toc-a[href^="#"], .toc-item-link[href^="#"]').forEach((link) => {
    const target = ids.get(link.getAttribute("href").slice(1));
    if (target && !targets.includes(target)) targets.push(target);
  });
  const used = new Set(ids.keys());
  const legacyNames = new Map();
  const slug = (value) => value.toLowerCase().replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  for (const target of targets) {
    const old = target.id;
    const quiz = target.matches(".mcq-section") || /^(quiz-|mcq)/.test(old);
    let base;
    if (/^(quiz-)?(la|ps)-[a-z]{1,2}-/.test(old)) {
      base = old.replace(/^quiz-/, "").replace(/^(la|ps)-[a-z]{1,2}-/, "$1-")
        .replace(/-checkpoint$/, "");
    } else {
      const heading = target.querySelector("h2, h3, .sec-title, .section-title");
      base = slug(heading?.textContent || old.replace(/^(quiz-|mcq-?)/, ""));
    }
    base = base.replace(/-quiz$/, "") || "section";
    if (quiz) base += "-quiz";
    let name = base;
    let suffix = 2;
    while (used.has(name) && name !== old) name = `${base}-${suffix++}`;
    used.add(name);
    legacyNames.set(target, name);
    byName.set(name, target);
    byName.set(old, target);
    byTarget.set(target, name);
  }
  // Keep old heading-based aliases, then cover remaining public anchor targets.
  root.querySelectorAll('section[id], h1[id], h2[id], h3[id], h4[id]').forEach((target) => {
    if (!targets.includes(target)) targets.push(target);
  });
  root.querySelectorAll('a[href^="#"]').forEach((link) => {
    const target = ids.get(link.getAttribute("href").slice(1));
    if (target && !targets.includes(target)) targets.push(target);
  });
  for (const target of targets) {
    const old = target.id;
    const heading = target.matches('h1,h2,h3,h4') ? target : target.querySelector('h2,h3,.sec-title,.section-title,h1');
    const quiz = target.matches('.mcq-section') || /^(quiz-|mcq)/.test(old);
    const legacy = legacyNames.get(target);
    let base = /^(quiz-)?(la|ps)-[a-z]{1,2}-/.test(old)
      ? old.replace(/^quiz-/, '').replace(/^(la|ps)-[a-z]{1,2}-/, '$1-').replace(/-checkpoint$/, '')
      : shortAnchorName(heading?.textContent || old.replace(/^(quiz-|mcq-?)/, ''));
    base = base.replace(/-quiz$/, '') || 'section';
    if (quiz) base += '-quiz';
    let name = base;
    let suffix = 2;
    while (used.has(name) && name !== old && name !== legacy) name = `${base}-${suffix++}`;
    used.add(name);
    byName.set(old, target);
    byName.set(name, target);
    byTarget.set(target, name);
  }
  guideAnchors.set(root, { byName, byTarget });
  const changed = [];
  root.querySelectorAll('a[href^="#"]').forEach((link) => {
    const original = link.getAttribute("href");
    const target = byName.get(original.slice(1));
    if (!target) return;
    const replacement = `#${byTarget.get(target)}`;
    changed.push([link, original, replacement]);
    link.setAttribute("href", replacement);
  });
  // Resolve ordinary in-content links, Back/Forward and old bookmarks.
  const click = (event) => {
    const link = event.target.closest?.('a[href^="#"]');
    if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = byName.get(link.getAttribute("href").slice(1));
    if (!target) return;
    event.preventDefault();
    window.history.pushState(window.history.state, "", `#${byTarget.get(target)}`);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const navigate = () => {
    if (onNavigate) { onNavigate(); return; }
    let hash;
    try { hash = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    const target = byName.get(hash);
    if (!target) return;
    const name = byTarget.get(target);
    if (name !== hash) window.history.replaceState(window.history.state, "", `${window.location.pathname}${window.location.search}#${name}`);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  root.addEventListener("click", click);
  window.addEventListener("hashchange", navigate);
  window.addEventListener("popstate", navigate);
  navigate();
  return () => {
    root.removeEventListener("click", click);
    window.removeEventListener("hashchange", navigate);
    window.removeEventListener("popstate", navigate);
    changed.forEach(([link, original, replacement]) => {
      if (link.getAttribute("href") === replacement) link.setAttribute("href", original);
    });
    guideAnchors.delete(root);
  };
}

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        const path = pathname.replace(/\/$/, "") || "/";
        const course = COURSES.find((item) => item.path === path);
        const title = PAGE_TITLES[path] || course?.title;
        if (title) document.title = `${title} · CalcVoyager`;
    }, [pathname]);

    useEffect(() => {
        let stop = () => {};
        let frame;
        const refresh = () => {
            stop();
            stop = () => {};
            const root = document.querySelector('main');
            if (root && !root.matches('.study-guide-page') && !root.querySelector('.study-guide-page')) {
                stop = setupReadableAnchors(root);
            }
        };
        const observer = new MutationObserver(() => {
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(refresh);
        });
        observer.observe(document.body, { childList: true, subtree: true });
        refresh();
        return () => { observer.disconnect(); cancelAnimationFrame(frame); stop(); };
    }, [pathname]);

    return null;
};

export default ScrollToTop;
