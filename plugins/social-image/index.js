import { visit, EXIT } from "unist-util-visit"
import { isAbsoluteURL, slugifyFilePath } from "@quartz-community/utils"

// og-image resolves a relative `socialImage` to `https://<baseUrl>/static/<path>`,
// but vault attachments are published at their slugified path instead
// (`Attachments/Alfred Hero.jpg` -> `/attachments/alfred-hero.jpg`). Quartz
// Syncer also copies a note's `image:` into `socialImage` on publish. Rewrite
// either one to the absolute published URL so link previews use the real image.
//
// Notes rarely set `image:`, so the first image embedded in the page is used as
// a fallback. It's recorded as `file.data.coverImage` (a site-root path, e.g.
// `attachments/x.jpg`) for components such as the home page's note cards.
export const SocialImage = () => ({
  name: "SocialImage",
  htmlPlugins(ctx) {
    const baseUrl = ctx.cfg.configuration.baseUrl
    return [
      () => (tree, file) => {
        const fm = file.data.frontmatter
        let cover = fm?.image ?? fm?.socialImage
        if (typeof cover === "string" && cover && !isAbsoluteURL(cover)) {
          // Accept Obsidian-style values: `Attachments/x.jpg`, a bare `x.jpg`
          // (attachments live in Attachments/), or `[[x.jpg]]` / `![[x.jpg]]`.
          const path = cover.replace(/^!?\[\[|\]\]$/g, "").replace(/^\//, "")
          cover = slugifyFilePath(path.includes("/") ? path : `Attachments/${path}`)
        } else {
          cover = undefined
          visit(tree, "element", (node) => {
            const src = node.tagName === "img" ? node.properties?.src : undefined
            if (typeof src !== "string" || isAbsoluteURL(src)) return
            // Embeds are already relative to the page (`../attachments/x.jpg`).
            cover = new URL(src, `https://x/${file.data.slug}`).pathname.slice(1)
            return EXIT
          })
        }
        if (!cover) return
        file.data.coverImage = cover
        if (fm) fm.socialImage = `https://${baseUrl}/${cover}`
      },
    ]
  },
})
