import { h } from "preact"
import { resolveRelative } from "@quartz-community/utils"

// What the old Next.js site had around its posts, rebuilt for Quartz:
// - on the home page: the latest posts (app/Main.tsx) and recently updated notes
// - after each blog post: Giscus comments
// A blog post is a page under blog/ tagged `blog`; Uses and Questions live there
// too but are plain pages, so they get no comments.

const defaultOptions = {
  postLimit: 5,
  noteLimit: 5,
  giscus: null,
}

const isPost = (page) =>
  page.slug?.startsWith("blog/") && (page.frontmatter?.tags ?? []).includes("blog")

// Site pages that aren't notes, so they stay out of "Recently updated notes".
const SITE_PAGES = new Set(["index", "about", "projects", "notes"])
const isNote = (page) =>
  page.slug &&
  !page.slug.startsWith("blog/") &&
  !page.slug.startsWith("tags/") &&
  !page.slug.endsWith("/index") &&
  !SITE_PAGES.has(page.slug) &&
  page.unlisted !== true

const dateOf = (page, type) => {
  const d = page.dates?.[type]
  return d ? new Date(d) : undefined
}

const byDate = (type) => (a, b) =>
  (dateOf(b, type)?.getTime() ?? 0) - (dateOf(a, type)?.getTime() ?? 0)

const formatDate = (d, locale) =>
  d?.toLocaleDateString(locale, { year: "numeric", month: "long", day: "numeric" })

function PostItem({ page, from, locale }) {
  const href = resolveRelative(from, page.slug)
  const tags = (page.frontmatter?.tags ?? []).filter((t) => t !== "blog")
  return h(
    "li",
    { class: "post-item" },
    h("time", { class: "post-date" }, formatDate(dateOf(page, "created"), locale)),
    h(
      "div",
      { class: "post-body" },
      h("h3", null, h("a", { href, class: "internal" }, page.frontmatter?.title)),
      tags.length > 0 &&
        h(
          "ul",
          { class: "post-tags" },
          tags.map((t) =>
            h(
              "li",
              null,
              h("a", { href: resolveRelative(from, `tags/${t}`), class: "internal tag" }, t),
            ),
          ),
        ),
      page.description && h("p", { class: "post-summary" }, page.description),
      h(
        "a",
        {
          href,
          class: "internal read-more",
          "aria-label": `Read more: "${page.frontmatter?.title}"`,
        },
        "Read more →",
      ),
    ),
  )
}

function Comments({ giscus }) {
  if (!giscus?.repo || !giscus?.repoId || !giscus?.categoryId) return null
  return h("div", {
    class: "giscus-mount",
    "data-repo": giscus.repo,
    "data-repo-id": giscus.repoId,
    "data-category": giscus.category,
    "data-category-id": giscus.categoryId,
  })
}

const style = `
.blog-extras { margin-top: 2rem; }
.blog-extras a.internal { background-color: transparent; padding: 0; }
.blog-extras h2 { font-size: 1.5rem; margin: 2.5rem 0 1rem; }
.blog-extras ul.post-list { list-style: none; padding: 0; margin: 0; }
.blog-extras .post-item {
  display: grid;
  grid-template-columns: 10rem 1fr;
  gap: 1rem;
  padding: 2rem 0;
  border-bottom: 1px solid var(--lightgray);
}
.blog-extras .post-date { color: var(--gray); font-weight: 500; }
.blog-extras .post-body h3 { margin: 0; font-size: 1.5rem; }
.blog-extras .post-body h3 a { color: var(--dark); background: none; padding: 0; }
.blog-extras .post-tags { display: flex; flex-wrap: wrap; gap: 0.75rem; list-style: none; padding: 0; margin: 0.5rem 0 0; }
.blog-extras .post-tags a.tag { text-transform: uppercase; font-size: 0.85rem; font-weight: 500; background: none; padding: 0; }
.blog-extras .post-summary { color: var(--darkgray); margin: 0.75rem 0; }
.blog-extras .read-more { font-weight: 500; background: none; padding: 0; }
.blog-extras .all-posts { display: block; text-align: right; font-weight: 500; margin-top: 1rem; }
.blog-extras .recent-notes-list { padding-left: 1.25rem; }
.blog-extras .recent-notes-list time { color: var(--gray); font-size: 0.9rem; margin-left: 0.5rem; }
.blog-extras .giscus-mount { margin-top: 2rem; }
@media (max-width: 800px) {
  .blog-extras .post-item { grid-template-columns: 1fr; gap: 0.25rem; }
}
`

// Giscus is loaded per page (SPA navigation swaps the mount), themed to match the
// current Quartz theme, and re-themed when the dark-mode toggle flips.
const giscusScript = `
const giscusTheme = () =>
  document.documentElement.getAttribute("saved-theme") === "dark" ? "transparent_dark" : "light"

document.addEventListener("nav", () => {
  const mount = document.querySelector(".giscus-mount")
  if (!mount || mount.dataset.loaded) return
  mount.dataset.loaded = "true"
  const s = document.createElement("script")
  s.src = "https://giscus.app/client.js"
  s.async = true
  s.crossOrigin = "anonymous"
  const attrs = {
    repo: mount.dataset.repo,
    "repo-id": mount.dataset.repoId,
    category: mount.dataset.category,
    "category-id": mount.dataset.categoryId,
    mapping: "pathname",
    strict: "0",
    "reactions-enabled": "1",
    "emit-metadata": "0",
    "input-position": "bottom",
    theme: giscusTheme(),
    lang: "en",
    loading: "lazy",
  }
  for (const [k, v] of Object.entries(attrs)) s.setAttribute("data-" + k, v)
  mount.appendChild(s)
})

document.addEventListener("themechange", () => {
  const frame = document.querySelector("iframe.giscus-frame")
  frame?.contentWindow?.postMessage({ giscus: { setConfig: { theme: giscusTheme() } } }, "https://giscus.app")
})
`

export const BlogExtras = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  const Component = ({ fileData, allFiles, cfg }) => {
    const slug = fileData.slug
    const locale = cfg?.locale ?? "en-US"

    if (slug === "index") {
      const posts = allFiles.filter(isPost).sort(byDate("created"))
      const notes = allFiles.filter(isNote).sort(byDate("modified")).slice(0, opts.noteLimit)
      return h(
        "div",
        { class: "blog-extras home" },
        h("h2", null, "Latest posts"),
        h(
          "ul",
          { class: "post-list" },
          posts.slice(0, opts.postLimit).map((page) => h(PostItem, { page, from: slug, locale })),
        ),
        posts.length > opts.postLimit &&
          h(
            "a",
            { class: "internal all-posts", href: resolveRelative(slug, "blog/index") },
            "All posts →",
          ),
        notes.length > 0 && h("h2", null, "Recently updated notes"),
        notes.length > 0 &&
          h(
            "ul",
            { class: "recent-notes-list" },
            notes.map((page) =>
              h(
                "li",
                null,
                h(
                  "a",
                  { class: "internal", href: resolveRelative(slug, page.slug) },
                  page.frontmatter?.title,
                ),
                h("time", null, formatDate(dateOf(page, "modified"), locale)),
              ),
            ),
          ),
      )
    }

    if (isPost(fileData)) {
      return h("div", { class: "blog-extras post" }, h(Comments, { giscus: opts.giscus }))
    }

    return null
  }

  Component.displayName = "BlogExtras"
  Component.css = style
  Component.afterDOMLoaded = giscusScript
  return Component
}
