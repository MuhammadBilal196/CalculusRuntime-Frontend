import { inferGuideCourse } from "./mistakeNotebook";
export function latestNotes(events) {
  const notes = new Map();
  events.filter((e) => e.kind === "note").slice()
    .sort((a,b) => Date.parse(a.data.occurredAt)-Date.parse(b.data.occurredAt) || a.eventId.localeCompare(b.eventId, "en", { numeric: true }))
    .forEach((e) => notes.set(e.data.noteId, e.data));
  return [...notes.values()].filter((n) => !n.deleted).sort((a,b) => Date.parse(b.occurredAt)-Date.parse(a.occurredAt));
}
export function validSectionPath(path) {
  return typeof path === "string" && path.startsWith("/") && !path.startsWith("//") && !path.includes("\\") && ![...path].some((char) => char.charCodeAt(0) < 32);
}
export function sectionMetadata(pathname, section) {
  const title = section.querySelector("h1,h2,h3")?.textContent?.trim() || section.id || "Guide section";
  const anchor = section.id;
  return {sectionId: `${pathname}#${anchor}`, path: `${pathname}#${encodeURIComponent(anchor)}`,
    title: title.slice(0,500), courseId: inferGuideCourse("", pathname) || "other-guides"};
}
export function selectedQuote(section, selection = window.getSelection()) {
  if (!selection?.rangeCount || !section.contains(selection.anchorNode) || !section.contains(selection.focusNode)) return "";
  const node = selection.anchorNode?.parentElement;
  if (node?.closest(".notes-panel")) return "";
  return selection.toString().trim().slice(0,2000);
}

// CSS Custom Highlights paint ranges without changing React-owned DOM nodes.
const ignoredHighlightContent = '.notes-panel, .guide-notes-host, .la-quiz-container, button, input, textarea, select, script, style, .katex-mathml';
export function highlightRanges(section, quote) {
  const needle = String(quote || '').replace(/\s+/g, ' ').trim();
  if (!needle) return [];
  const points = [];
  let text = '', previousBlock = null;
  const walker = document.createTreeWalker(section, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return node.parentElement?.closest(ignoredHighlightContent)
        ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
    },
  });
  const append = (char, node, offset) => {
    if (/\s/.test(char)) char = ' ';
    if (char === ' ' && text.endsWith(' ')) return;
    text += char;
    points.push({ node, offset });
  };
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const block = node.parentElement?.closest('p, li, h1, h2, h3, h4, blockquote, td, th, div, section');
    if (text && previousBlock && block !== previousBlock) append(' ', node, 0);
    for (let i = 0; i < node.textContent.length; i += 1) append(node.textContent[i], node, i);
    previousBlock = block;
  }
  const ranges = [];
  let start = text.indexOf(needle);
  while (start !== -1) {
    const first = points[start], last = points[start + needle.length - 1];
    const range = document.createRange();
    range.setStart(first.node, first.offset);
    range.setEnd(last.node, last.offset + 1);
    ranges.push(range);
    start = text.indexOf(needle, start + needle.length);
  }
  return ranges;
}
