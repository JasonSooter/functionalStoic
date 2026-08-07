import { visit, SKIP } from "unist-util-visit"
import { pathToRoot, slugTag } from "@quartz-community/utils"

// Tags whose first character is an emoji never reach obsidian-flavored-markdown's
// tag handling: remark-obsidian's tokenizer tests each character with
// `/[\p{L}\p{M}\p{Emoji}]/u` via `String.fromCodePoint(code)`, but micromark feeds
// it UTF-16 code units. A non-BMP emoji like 📚 (U+1F4DA) arrives as two lone
// surrogates (0xD83D, 0xDCDA), neither of which matches any of those properties,
// so the tokenizer bails on the first character and the tag stays plain text.
//
// This plugin converts the tags it missed, emitting the same mdast shape so
// crawl-links resolves them identically, then repairs the link text crawl-links
// truncates (see restoreTagText below).

const TAG_CHAR = String.raw`[\p{L}\p{M}\p{Extended_Pictographic}\u{FE0F}\u{200D}0-9_-]`

// Mirrors the tokenizer's `allowedStart`: a tag may only follow whitespace,
// another `#`, or the start of a text node.
const EMOJI_TAG = new RegExp(
  String.raw`(?<![^\s#])#(\p{Extended_Pictographic}${TAG_CHAR}*(?:/${TAG_CHAR}+)*)`,
  "gu",
)

/** Turn `#📚/status/finished` text into the tag link obsidian-flavored-markdown would have made. */
function linkEmojiTags() {
  return (tree, file) => {
    const base = pathToRoot(file.data.slug)

    visit(tree, "text", (node, index, parent) => {
      // A tag inside a link label would produce an illegal nested link.
      if (parent == null || index == null || parent.type === "link") return
      if (!EMOJI_TAG.test(node.value)) return
      EMOJI_TAG.lastIndex = 0

      const replacement = []
      let cursor = 0

      for (const match of node.value.matchAll(EMOJI_TAG)) {
        if (match.index > cursor) {
          replacement.push({ type: "text", value: node.value.slice(cursor, match.index) })
        }

        const tag = slugTag(match[1])
        const frontmatter = file.data.frontmatter
        if (frontmatter) {
          frontmatter.tags = [...new Set([...(frontmatter.tags ?? []), tag])]
        }

        replacement.push({
          type: "link",
          url: `${base}/tags/${tag}`,
          data: { hProperties: { className: ["tag-link"] } },
          children: [{ type: "text", value: tag }],
        })
        cursor = match.index + match[0].length
      }

      if (cursor < node.value.length) {
        replacement.push({ type: "text", value: node.value.slice(cursor) })
      }

      parent.children.splice(index, 1, ...replacement)
      return [SKIP, index + replacement.length]
    })
  }
}

// crawl-links' `prettyLinks` truncates internal link text to its basename. It tries
// to exempt tags with a `!value.startsWith("#")` guard, but tag link text carries no
// "#" — that comes from `.tag-link::before` — so the guard never fires and every
// nested tag is flattened to its last segment (`#🗓️/2024/04/25` → `#25`). Put the
// full tag back, reading it from the slug crawl-links resolved.
function restoreTagText() {
  return (tree) => {
    visit(tree, "element", (node) => {
      if (node.tagName !== "a" || !node.properties) return

      const classes = node.properties.className
      if (!Array.isArray(classes) || !classes.includes("tag-link")) return

      const slug = node.properties["data-slug"]
      if (typeof slug !== "string" || !slug.startsWith("tags/")) return

      const [child] = node.children
      if (node.children.length === 1 && child?.type === "text") {
        child.value = slug.slice("tags/".length)
      }
    })
  }
}

export const EmojiTags = () => ({
  name: "EmojiTags",
  markdownPlugins() {
    return [linkEmojiTags]
  },
  htmlPlugins() {
    return [restoreTagText]
  },
})
