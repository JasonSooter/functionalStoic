import { h } from "preact"
import { resolveRelative } from "@quartz-community/utils"

// What the old Next.js site had around its posts, rebuilt for Quartz:
// - on the home page: the latest posts (app/Main.tsx) and recently updated notes
// - on /blog: post cards with a preview image (frontmatter `image:`, a vault path
//   like `Attachments/x.jpg`; a typographic placeholder otherwise)
// - after each blog post: Giscus comments
// A blog post is a page under blog/ tagged `blog`; Uses and Questions live there
// too but are plain pages, so they get no comments.

const defaultOptions = {
  postLimit: 4,
  noteLimit: 6,
  // [label, slug] quick links under the home intro.
  jumps: [
    ["Blog", "blog/index"],
    ["Bookshelf", "bookshelf/index"],
    ["Travel", "travel/index"],
    ["Cycling", "hobbies/cycling/index"],
    ["Urban Planning", "urban-planning/index"],
    ["Infrastructure", "infrastructure/index"],
  ],
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

// plugins/social-image records each page's card image as `coverImage`:
// frontmatter `image:` if set, else the first embedded image. Callers fall back
// to a typographic placeholder.
const coverOf = (page) => page.coverImage

function previewSrc(page, from) {
  return resolveRelative(from, coverOf(page))
}

// "travel/europe/portugal/lisbon" -> "Travel · Europe · Portugal"
const folderLabel = (slug) =>
  slug
    .split("/")
    .slice(0, -1)
    .filter((s) => s !== "index")
    .map((s) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
    .join(" · ")

function NoteCard({ page, from, locale }) {
  const href = resolveRelative(from, page.slug)
  const where = folderLabel(page.slug)
  return h(
    "li",
    { class: "note-card" },
    h(
      "a",
      { href, class: "internal note-card-link" },
      h(
        "span",
        { class: "note-card-image" },
        coverOf(page)
          ? h("img", { src: previewSrc(page, from), alt: "", loading: "lazy" })
          : h("span", { class: "post-card-placeholder note-placeholder" }, where || "Notes"),
      ),
      h(
        "span",
        { class: "note-card-body" },
        where && h("span", { class: "note-card-where" }, where),
        h("span", { class: "note-card-title" }, page.frontmatter?.title),
        h("time", null, formatDate(dateOf(page, "modified"), locale)),
      ),
    ),
  )
}

function PostCard({ page, from, locale }) {
  const href = resolveRelative(from, page.slug)
  const tags = (page.frontmatter?.tags ?? []).filter((t) => t !== "blog")
  return h(
    "li",
    { class: "post-card" },
    h(
      "a",
      { href, class: "internal post-card-image", tabindex: "-1", "aria-hidden": "true" },
      coverOf(page)
        ? h("img", { src: previewSrc(page, from), alt: "", loading: "lazy" })
        : h("span", { class: "post-card-placeholder" }, page.frontmatter?.title),
    ),
    h(
      "div",
      { class: "post-card-body" },
      h("time", { class: "post-date" }, formatDate(dateOf(page, "created"), locale)),
      h("h2", null, h("a", { href, class: "internal" }, page.frontmatter?.title)),
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
.blog-extras .post-date { color: var(--gray); font-weight: 500; }
.blog-extras .post-tags { display: flex; flex-wrap: wrap; gap: 0.75rem; list-style: none; padding: 0; margin: 0.5rem 0 0; }
.blog-extras .post-tags a.tag { text-transform: uppercase; font-size: 0.85rem; font-weight: 500; background: none; padding: 0; color: var(--tag); }
.blog-extras .post-summary { color: var(--darkgray); margin: 0.75rem 0; }
.blog-extras .giscus-mount { margin-top: 2rem; }
.blog-extras ul.post-cards {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: 2.5rem 2rem;
}
.blog-extras .post-card { margin: 0; display: flex; flex-direction: column; }
.blog-extras .post-card-image {
  display: block;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 0.5rem;
  border: 1px solid var(--lightgray);
  margin-bottom: 1rem;
}
.blog-extras .post-card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  transition: transform 0.3s ease;
}
.blog-extras .post-card-placeholder {
  display: flex;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 1.25rem;
  font-family: var(--headerFont);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.15;
  color: var(--dark);
  background:
    radial-gradient(circle at 85% 15%, color-mix(in srgb, var(--secondary) 35%, transparent), transparent 60%),
    linear-gradient(135deg, var(--lightgray), var(--light));
}
.blog-extras .home-jumps { display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.5rem 0 1rem; }
.blog-extras .home-jumps a {
  padding: 0.35rem 0.9rem;
  border: 1px solid var(--lightgray);
  border-radius: 999px;
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--darkgray);
}
.blog-extras .home-jumps a:hover { border-color: var(--secondary); color: var(--secondary); }
.blog-extras .home-section-head { display: flex; align-items: baseline; justify-content: space-between; margin: 3rem 0 1.25rem; }
.blog-extras .home-section-head h2 { margin: 0; }
.blog-extras .home-section-head a { font-weight: 500; }
.blog-extras ul.note-cards {
  list-style: none; padding: 0; margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 14rem), 1fr));
  gap: 1.25rem;
}
.blog-extras .note-card { margin: 0; }
.blog-extras .note-card-link { display: flex; flex-direction: column; height: 100%; border: 1px solid var(--lightgray); border-radius: 0.5rem; overflow: hidden; color: var(--dark); transition: border-color 0.2s ease; }
.blog-extras .note-card-link:hover { border-color: var(--secondary); }
.blog-extras .note-card-image { display: block; aspect-ratio: 16 / 10; overflow: hidden; }
.blog-extras .note-card-image img { width: 100%; height: 100%; object-fit: cover; margin: 0; transition: transform 0.3s ease; }
.blog-extras .note-card-link:hover .note-card-image img { transform: scale(1.04); }
.blog-extras .note-placeholder { font-size: 1.1rem; }
.blog-extras .note-card-body { display: flex; flex-direction: column; gap: 0.2rem; padding: 0.75rem 0.9rem 0.9rem; }
.blog-extras .note-card-where { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--tag); font-weight: 600; }
.blog-extras .note-card-title { font-weight: 600; line-height: 1.3; }
.blog-extras .note-card-body time { font-size: 0.85rem; color: var(--gray); }
.blog-extras .post-card:hover .post-card-image img { transform: scale(1.03); }
.blog-extras .post-card-body h2 { font-size: 1.4rem; margin: 0.25rem 0 0; line-height: 1.25; }
.blog-extras .post-card-body h2 a { color: var(--dark); }
.blog-extras .post-card-body h2 a:hover { color: var(--secondary); }
.blog-extras.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 4rem 0;
}
.blog-extras .not-found-code {
  margin: 0;
  padding-right: 2rem;
  border-right: 2px solid var(--lightgray);
  font-family: var(--headerFont);
  font-size: 6rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--dark);
}
.blog-extras .not-found-body { max-width: 28rem; }
.blog-extras .not-found-body h1 { margin: 0 0 0.75rem; font-size: 1.6rem; }
.blog-extras .not-found-body p { color: var(--gray); margin: 0 0 1.5rem; }
.blog-extras .not-found-home {
  display: inline-block;
  padding: 0.5rem 1.1rem;
  border-radius: 0.5rem;
  background: var(--secondary);
  color: var(--light) !important;
  font-weight: 600;
}
.blog-extras .not-found-home:hover { background: var(--tertiary); }
.blog-extras .not-found-body ul { list-style: none; display: flex; flex-wrap: wrap; gap: 0.5rem 1.25rem; padding: 0; margin: 1.5rem 0 0; }
.blog-extras .not-found-body li { margin: 0; }
.blog-extras .not-found-body li a { font-weight: 500; background: none; padding: 0; }
@media (max-width: 800px) {
  .blog-extras.not-found { flex-direction: column; align-items: flex-start; gap: 1rem; margin: 2rem 0; }
  .blog-extras .not-found-code { border-right: 0; padding-right: 0; font-size: 4.5rem; }
}
`

// Giscus is loaded per page (SPA navigation swaps the mount), themed to match the
// current Quartz theme, and re-themed when the dark-mode toggle flips.
// Wrapped and semicolon-terminated: Quartz concatenates component scripts.
const giscusScript = `
;(() => {
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
})();
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
        h(
          "nav",
          { class: "home-jumps", "aria-label": "Jump to" },
          opts.jumps.map(([text, target]) =>
            h("a", { class: "internal", href: resolveRelative(slug, target) }, text),
          ),
        ),
        h(
          "div",
          { class: "home-section-head" },
          h("h2", null, "Latest posts"),
          h("a", { class: "internal", href: resolveRelative(slug, "blog/index") }, "All posts →"),
        ),
        h(
          "ul",
          { class: "post-cards" },
          posts.slice(0, opts.postLimit).map((page) => h(PostCard, { page, from: slug, locale })),
        ),
        notes.length > 0 &&
          h(
            "div",
            { class: "home-section-head" },
            h("h2", null, "Recently updated notes"),
            h("a", { class: "internal", href: resolveRelative(slug, "notes") }, "All notes →"),
          ),
        notes.length > 0 &&
          h(
            "ul",
            { class: "note-cards" },
            notes.map((page) => h(NoteCard, { page, from: slug, locale })),
          ),
      )
    }

    // Served at any missing URL, so links are root-absolute, not relative.
    if (slug === "404") {
      const links = [
        ["/blog", "Blog"],
        ["/notes", "Notes"],
        ["/bookshelf", "Bookshelf"],
        ["/tags", "Tags"],
        ["/about", "About"],
      ]
      return h(
        "div",
        { class: "blog-extras not-found" },
        h("p", { class: "not-found-code" }, "404"),
        h(
          "div",
          { class: "not-found-body" },
          h("h1", null, "Sorry, I couldn’t find this page."),
          h(
            "p",
            null,
            "It may have moved, or the link may be out of date. Search (top right) or try one of these:",
          ),
          h("a", { class: "not-found-home", href: "/" }, "Back to the homepage"),
          h(
            "ul",
            null,
            links.map(([href, text]) => h("li", null, h("a", { href }, text))),
          ),
        ),
      )
    }

    if (slug === "blog/index") {
      const posts = allFiles.filter(isPost).sort(byDate("created"))
      return h(
        "div",
        { class: "blog-extras blog-index" },
        h(
          "ul",
          { class: "post-cards" },
          posts.map((page) => h(PostCard, { page, from: slug, locale })),
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
