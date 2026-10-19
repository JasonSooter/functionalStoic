// Vault notes start from a template with Summary / Changelog / Resources /
// Action Items / FAQ headings and a `> [!question] Title` / `> Contents`
// placeholder callout (or a "🙋 ✨" placeholder line). Until they're filled in they publish as empty headings
// that also crowd the table of contents. Drop them from the published page
// only; the note in Obsidian keeps its template.
//
// Runs at order 25: before obsidian-flavored-markdown (30) turns callouts into
// HTML, and before table-of-contents (50) collects headings.

// Match on the placeholder text alone: by this stage the `[!question]` marker
// may already be reshaped (reference link, callout transform).
const PLACEHOLDER = /^.{0,30}\bTitle\s*\n\s*Contents\s*$/s

// hard-line-breaks has already turned the callout's newline into a `break` node.
const text = (node) =>
  node.type === "text"
    ? node.value
    : node.type === "break"
      ? "\n"
      : (node.children ?? []).map(text).join("")

// The callout's title and body lines may arrive as one paragraph or two.
const isPlaceholderCallout = (node) =>
  node.type === "blockquote" &&
  (node.children ?? []).every((c) => c.type === "paragraph") &&
  PLACEHOLDER.test(node.children.map(text).join("\n").trim())

// The FAQ template's other placeholder: a paragraph of just "🙋 ✨" between rules.
const isPlaceholderEmoji = (node) =>
  node.type === "paragraph" && /^🙋\s*✨$/u.test(text(node).trim())

function dropEmptySections() {
  return (tree) => {
    tree.children = tree.children.filter(
      (node) => !isPlaceholderCallout(node) && !isPlaceholderEmoji(node),
    )

    // Walk backwards so a heading left empty by a removal after it is caught too.
    // A heading is empty when the next block is a heading of the same or higher
    // level, or the end of the note; `---` rules don't count as content.
    const kept = []
    let nextHeadingDepth = 0 // 0 = end of note
    for (let i = tree.children.length - 1; i >= 0; i--) {
      const node = tree.children[i]
      if (node.type === "heading") {
        const nothingBelow = nextHeadingDepth === 0 || nextHeadingDepth <= node.depth
        if (nothingBelow && node.depth > 1) continue
        nextHeadingDepth = node.depth
      } else if (node.type !== "thematicBreak") {
        nextHeadingDepth = Infinity // real content below
      }
      kept.unshift(node)
    }
    tree.children = kept
  }
}

export const EmptySections = () => ({
  name: "EmptySections",
  markdownPlugins() {
    return [dropEmptySections]
  },
})
