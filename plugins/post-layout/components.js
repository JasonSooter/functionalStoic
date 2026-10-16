import { h } from "preact"
import { resolveRelative } from "@quartz-community/utils"

// The old jasonsooter.com post page (layouts/PostLayout.tsx): a centered date and
// large title over a rule, then a side column (author, tags, previous/next
// article, back link) beside the post. Pages under blog/ that aren't posts (Uses,
// Questions) get the centered title only, like the old PageSimple layout.
//
// Rendered in beforeBody; custom.scss turns the page into the two-column grid
// when a .post-hero is present.

const defaultOptions = {
  author: "",
  avatar: "",
  authorHref: "/about",
}

const isBlogPage = (page) => page.slug?.startsWith("blog/") && page.slug !== "blog/index"
const isPost = (page) => isBlogPage(page) && (page.frontmatter?.tags ?? []).includes("blog")
// Prefer the frontmatter `date` (a bare YYYY-MM-DD parses as UTC midnight, and is
// formatted in UTC below) so the day doesn't shift with the build machine's zone.
const created = (page) => {
  const d = page.frontmatter?.date ?? page.dates?.created
  return d ? new Date(d) : undefined
}

function NavLink({ label, page, from }) {
  if (!page) return null
  return h(
    "div",
    { class: "post-aside-section" },
    h("h2", null, label),
    h("a", { class: "internal", href: resolveRelative(from, page.slug) }, page.frontmatter?.title),
  )
}

export const PostLayout = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  const Component = ({ fileData, allFiles, cfg }) => {
    if (!isBlogPage(fileData)) return null
    const slug = fileData.slug
    const date = created(fileData)
    const hero = h(
      "header",
      { class: "post-hero" },
      isPost(fileData) &&
        date &&
        h(
          "time",
          { datetime: date.toISOString() },
          date.toLocaleDateString(cfg?.locale ?? "en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          }),
        ),
      h("h1", null, fileData.frontmatter?.title),
    )
    if (!isPost(fileData)) return hero

    // Newest first, as the blog lists them: "next" is the newer post.
    const posts = allFiles.filter(isPost).sort((a, b) => (created(b) ?? 0) - (created(a) ?? 0))
    const i = posts.findIndex((p) => p.slug === slug)
    const newer = i > 0 ? posts[i - 1] : undefined
    const older = i >= 0 ? posts[i + 1] : undefined
    const tags = (fileData.frontmatter?.tags ?? []).filter((t) => t !== "blog")

    return h(
      "div",
      { class: "post-layout" },
      hero,
      h(
        "aside",
        { class: "post-aside" },
        opts.author &&
          h(
            "a",
            {
              class: "internal post-author",
              href: resolveRelative(slug, opts.authorHref.replace(/^\//, "")),
            },
            opts.avatar &&
              h("img", {
                src: resolveRelative(slug, opts.avatar.replace(/^\//, "")),
                alt: "",
                width: 48,
                height: 48,
              }),
            h("span", null, opts.author),
          ),
        tags.length > 0 &&
          h(
            "div",
            { class: "post-aside-section" },
            h("h2", null, "Tags"),
            h(
              "ul",
              { class: "post-aside-tags" },
              tags.map((t) =>
                h(
                  "li",
                  null,
                  h(
                    "a",
                    { class: "internal tag-link", href: resolveRelative(slug, `tags/${t}`) },
                    t,
                  ),
                ),
              ),
            ),
          ),
        h(NavLink, { label: "Previous article", page: older, from: slug }),
        h(NavLink, { label: "Next article", page: newer, from: slug }),
        h(
          "a",
          { class: "internal post-back", href: resolveRelative(slug, "blog/index") },
          "← Back to the blog",
        ),
      ),
    )
  }

  Component.displayName = "PostLayout"
  Component.css = `
.post-hero {
  text-align: center;
  padding: 1.5rem 0 2.5rem;
  border-bottom: 1px solid var(--lightgray);
  margin-bottom: 2.5rem;
}
.post-hero time {
  display: block;
  color: var(--gray);
  font-weight: 500;
  font-size: 1.05rem;
  margin-bottom: 0.75rem;
}
.post-hero h1 {
  margin: 0;
  font-size: clamp(2.25rem, 5vw, 3.75rem);
  line-height: 1.1;
  letter-spacing: -0.025em;
  font-weight: 700;
}
.post-aside {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.post-aside a.internal {
  background: none;
  padding: 0;
  font-weight: 500;
}
.post-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--lightgray);
  color: var(--dark) !important;
}
.post-author img {
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  margin: 0;
}
.post-aside-section h2 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--gray);
  font-weight: 500;
  margin: 0 0 0.35rem;
}
.post-aside-tags {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 0.75rem;
}
.post-aside-tags li { margin: 0; }
.post-back { margin-top: 1rem; }
`
  return Component
}
