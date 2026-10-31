import { h } from "preact"
import { isAbsoluteURL, resolveRelative } from "@quartz-community/utils"

// A note's frontmatter `image:` (or `banner:` / `cover:`) as a full-width banner
// at the top of the page, before the article body. plugins/social-image
// resolves it to `file.data.heroImage` (a site-root path such as
// `attachments/places/vauban.svg`, or an absolute URL); nothing is set for a
// note without one, so nothing renders.
//
// The page shows the original image -- for place notes an SVG, sharper and
// smaller than the PNG that social-image hands to link previews.
//
// Listing pages (folders, tags) are excluded in quartz.config.yaml's
// layout.byPageType; the slug checks below are a second guard so a folder
// note's own `image:` never turns a listing into a banner page.
//
// Blog pages are skipped too: plugins/post-layout gives them their own header
// and turns the page into a two-column grid, where a banner would land as a
// full-width row after the author column and push the post below it. A post's
// `image:` stays what it was before: its card image and link preview.

const isListing = (slug) =>
  !slug || slug === "index" || slug.endsWith("/index") || slug.startsWith("tags/")
const isBlogPage = (slug) => slug?.startsWith("blog/")

export const HeroImage = () => {
  const Component = ({ fileData }) => {
    const src = fileData.heroImage
    if (!src || isListing(fileData.slug) || isBlogPage(fileData.slug)) return null
    return h(
      "figure",
      { class: "hero-image" },
      h("img", {
        src: isAbsoluteURL(src) ? src : resolveRelative(fileData.slug, src),
        alt: fileData.frontmatter?.title ?? "",
        width: 1200,
        height: 630,
        loading: "eager",
        decoding: "async",
      }),
    )
  }

  Component.displayName = "HeroImage"
  Component.css = `
.hero-image {
  margin: 0 0 1.5rem;
  padding: 0;
}
.hero-image img {
  display: block;
  width: 100%;
  height: auto;
  aspect-ratio: 1200 / 630;
  object-fit: cover;
  border-radius: 0.5rem;
  margin: 0;
}
`
  return Component
}
