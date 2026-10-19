import { visit, SKIP } from "unist-util-visit"
import { simplifySlug } from "@quartz-community/utils"

// The vault links freely to notes that aren't published (book notes, people,
// private logs). With `disableBrokenWikilinks`, crawl-links marks those <a>
// elements `broken`; left alone they 404. This runs after crawl-links (60),
// emoji-tags (61) and quartz-folder-note-links (65, which un-breaks the folder
// notes it repairs), and:
// - turns each remaining broken link into plain text, dropping a list item
//   that held nothing but that link (a dataview list entry for an unpublished note);
// - leaves tag links alone: tag pages are virtual, never in ctx.allSlugs, so
//   crawl-links marks every one broken;
// - on a folder note, tags the list Quartz Syncer generates from its dataview
//   query (every item a single link) as `folder-index`, for custom.scss to lay out.

const isWhitespace = (n) => n.type === "text" && !n.value.trim()
const onlyChild = (node) => {
  const kids = (node.children ?? []).filter((n) => !isWhitespace(n))
  return kids.length === 1 ? kids[0] : undefined
}
// The link an <li> consists of, directly or inside a lone <p> (loose lists).
const soleLink = (li) => {
  let child = onlyChild(li)
  if (child?.tagName === "p") child = onlyChild(child)
  return child?.type === "element" && child.tagName === "a" ? child : undefined
}

function unlinkUnpublished() {
  return (tree, file) => {
    const dropped = new Set()
    const isBroken = (a) => {
      const classes = a.properties?.className
      return Array.isArray(classes) && classes.includes("broken") && !classes.includes("tag-link")
    }

    // List items that only link to an unpublished note go entirely.
    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "li" || parent == null || index == null) return
      const link = soleLink(node)
      if (!link || !isBroken(link)) return
      const slug = link.properties["data-slug"]
      if (typeof slug === "string") dropped.add(simplifySlug(slug))
      parent.children.splice(index, 1)
      return [SKIP, index]
    })

    visit(tree, "element", (node, index, parent) => {
      if (node.tagName !== "a" || parent == null || index == null) return
      const classes = node.properties?.className
      if (!Array.isArray(classes) || !classes.includes("broken")) return

      if (classes.includes("tag-link")) {
        node.properties.className = classes.filter((c) => c !== "broken")
        return
      }

      const slug = node.properties["data-slug"]
      if (typeof slug === "string") dropped.add(simplifySlug(slug))
      parent.children[index] = {
        type: "element",
        tagName: "span",
        properties: { className: ["unpublished-link"] },
        children: node.children,
      }
    })

    // Keep the graph and backlinks from showing nodes for pages that don't exist.
    const links = file.data.links
    if (dropped.size > 0 && Array.isArray(links)) {
      file.data.links = links.filter((link) => !dropped.has(link))
    }

    if (!file.data.slug?.endsWith("/index")) return
    visit(tree, "element", (node) => {
      if (node.tagName !== "ul") return
      const items = (node.children ?? []).filter((n) => n.type === "element")
      if (items.length === 0 || !items.every((li) => li.tagName === "li" && soleLink(li))) return
      node.properties.className = [...(node.properties.className ?? []), "folder-index"]
      return SKIP
    })
  }
}

export const LinkCleanup = () => ({
  name: "LinkCleanup",
  htmlPlugins() {
    return [unlinkUnpublished]
  },
})
