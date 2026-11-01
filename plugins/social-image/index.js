import { h } from "preact"
import { visit, EXIT } from "unist-util-visit"
import { isAbsoluteURL, slugifyFilePath } from "@quartz-community/utils"

// og-image resolves a relative `socialImage` to `https://<baseUrl>/static/<path>`,
// but vault attachments are published at their slugified path instead
// (`Attachments/Alfred Hero.jpg` -> `/attachments/alfred-hero.jpg`). Quartz
// Syncer also copies a note's `image:` into `socialImage` on publish. Rewrite
// either one to the absolute published URL so link previews use the real image.
//
// Link previews (Facebook, LinkedIn, X) do not accept SVG. When the page image
// is an SVG and the publisher (obsidian-mcp's publish_site) has put a rendered
// 1200x630 PNG beside it (`Attachments/Places/Vauban.png`), og:image uses the
// PNG and gets explicit 1200x630 dimensions; otherwise the original image.
//
// Notes rarely set `image:`, so the first image embedded in the page is used as
// a fallback. It's recorded as `file.data.coverImage` (a site-root path, e.g.
// `attachments/x.jpg`) for components such as the home page's note cards.
// `file.data.heroImage` is set only from frontmatter (image/banner/cover): the
// hero banner shows a deliberately chosen image, never a guessed one.

const PAGE_IMAGE_KEYS = ["image", "cover", "banner", "socialImage"]
const HERO_KEYS = ["image", "banner", "cover"]
const PREVIEW_SIZE = { width: 1200, height: 630 }

const firstString = (fm, keys) => {
  for (const key of keys) {
    if (typeof fm?.[key] === "string" && fm[key].trim()) return fm[key].trim()
  }
  return undefined
}

// Accept Obsidian-style values: `Attachments/x.jpg`, a bare `x.jpg` (attachments
// live in Attachments/), or `[[x.jpg]]` / `![[x.jpg]]`. Returns the vault path.
const vaultPath = (value) => {
  const path = value
    .replace(/^!?\[\[|\]\]$/g, "")
    .replace(/\|.*$/, "")
    .replace(/^\//, "")
  return path.includes("/") ? path : `Attachments/${path}`
}

// Whether the page body already shows `target`: an absolute URL, or a site-root
// path (embeds are relative to the page, `../attachments/x.jpg`).
const embeds = (tree, file, target) => {
  const wanted = target.toLowerCase()
  let found = false
  visit(tree, "element", (node) => {
    const src = node.tagName === "img" ? node.properties?.src : undefined
    if (typeof src !== "string") return
    const path = isAbsoluteURL(src)
      ? src
      : decodeURIComponent(new URL(src, `https://x/${file.data.slug}`).pathname.slice(1))
    if (path.toLowerCase() === wanted) {
      found = true
      return EXIT
    }
  })
  return found
}

// Place hero SVGs carry both themes: dark by default, light when loaded as
// `…/x.svg#light` (CSS :target on an element with id="light"). An <img> can't
// see the page's CSS, so the theme has to travel in the URL fragment. This
// runs in <head>, right after the darkmode plugin has set `saved-theme` on
// <html>, and rewrites every matching <img> as the parser inserts it -- a
// MutationObserver callback runs before the first paint, so there is no flash
// of the wrong theme. The same observer follows the theme toggle (the
// attribute changes), SPA navigation, hover popovers and anything else that
// adds images later. Only `attachments/places/*.svg` is touched; the PNG link
// previews stay dark.
const THEMED_HERO_SCRIPT = `(() => {
  const PLACE_SVG = /\\/attachments\\/places\\/[^/?#]+\\.svg$/i
  const isLight = () => document.documentElement.getAttribute("saved-theme") === "light"
  const theme = (img) => {
    const raw = img.getAttribute("src")
    if (!raw) return
    let url
    try { url = new URL(raw, document.baseURI) } catch { return }
    if (!PLACE_SVG.test(url.pathname)) return
    const fragment = isLight() ? "#light" : ""
    if (url.hash === fragment) return
    img.setAttribute("src", raw.split("#")[0] + fragment)
  }
  const sweep = (root) => {
    if (root.tagName === "IMG") theme(root)
    if (root.querySelectorAll) root.querySelectorAll("img").forEach(theme)
  }
  new MutationObserver((mutations) => {
    for (const m of mutations) {
      if (m.type === "attributes") sweep(document)
      else m.addedNodes.forEach((n) => n.nodeType === 1 && sweep(n))
    }
  }).observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["saved-theme"],
  })
  document.addEventListener("themechange", () => sweep(document))
  document.addEventListener("nav", () => sweep(document))
})()`

export const SocialImage = () => ({
  name: "SocialImage",
  htmlPlugins(ctx) {
    const baseUrl = ctx.cfg.configuration.baseUrl
    // Slugs of every content file, so a PNG beside an SVG is found the same
    // case-insensitive way Quartz serves it.
    let slugs
    const exists = (path) => {
      slugs ??= new Set((ctx.allFiles ?? []).map((fp) => slugifyFilePath(fp)))
      return slugs.has(slugifyFilePath(path))
    }

    return [
      () => (tree, file) => {
        const fm = file.data.frontmatter
        let cover = firstString(fm, PAGE_IMAGE_KEYS)
        if (cover && isAbsoluteURL(cover)) {
          file.data.coverImage = cover
          if (firstString(fm, HERO_KEYS) === cover && !embeds(tree, file, cover)) {
            file.data.heroImage = cover
          }
          if (fm) fm.socialImage = cover
          return
        }

        let preview
        if (cover) {
          const path = vaultPath(cover)
          cover = slugifyFilePath(path)
          // No banner when the body already shows the same image (some notes
          // embed their `image:` under the title); it would appear twice.
          if (firstString(fm, HERO_KEYS) && !embeds(tree, file, cover)) file.data.heroImage = cover
          const png = path.replace(/\.svg$/i, ".png")
          if (png !== path && exists(png)) {
            preview = slugifyFilePath(png)
            file.data.socialImageSize = PREVIEW_SIZE
          }
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
        // Cards and the hero keep the SVG: sharper and smaller on the page.
        file.data.coverImage = cover
        if (fm) fm.socialImage = `https://${baseUrl}/${preview ?? cover}`
      },
    ]
  },
  // og-image writes og:image and twitter:image from `socialImage`, but omits
  // the dimensions for a user-supplied image. The rendered PNG's are known.
  externalResources() {
    return {
      js: [{ loadTime: "beforeDOMReady", contentType: "inline", script: THEMED_HERO_SCRIPT }],
      additionalHead: [
        (fileData) =>
          fileData.socialImageSize
            ? [
                h("meta", {
                  property: "og:image:width",
                  content: String(fileData.socialImageSize.width),
                }),
                h("meta", {
                  property: "og:image:height",
                  content: String(fileData.socialImageSize.height),
                }),
              ]
            : null,
      ],
    }
  },
})
