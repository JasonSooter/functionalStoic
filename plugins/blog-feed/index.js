import path from "node:path"
import fs from "node:fs/promises"
import { escapeHTML } from "@quartz-community/utils"

// The old Next.js site published its posts at /feed.xml. Quartz's own feed
// (/index.xml) covers every page, folder and tag page included, so existing
// subscribers would see notes churn instead of posts. This keeps /feed.xml as a
// posts-only feed: pages under blog/ tagged `blog`, newest first.

const defaultOptions = {
  title: "functionalStoic",
  description: "Blog posts by Jason Sooter",
  limit: 20,
}

const isPost = (data) =>
  data.slug?.startsWith("blog/") && (data.frontmatter?.tags ?? []).includes("blog")

function feed(cfg, opts, posts) {
  const base = `https://${cfg.baseUrl}`
  const items = posts
    .map((d) => {
      const url = `${base}/${d.slug}`
      const tags = (d.frontmatter.tags ?? []).filter((t) => t !== "blog")
      return `<item>
  <guid>${url}</guid>
  <title>${escapeHTML(d.frontmatter.title ?? d.slug)}</title>
  <link>${url}</link>
  <description>${escapeHTML(d.description ?? "")}</description>
  <pubDate>${new Date(d.dates.created).toUTCString()}</pubDate>
${tags.map((t) => `  <category>${escapeHTML(t)}</category>`).join("\n")}
</item>`
    })
    .join("\n")
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escapeHTML(opts.title)}</title>
  <link>${base}/blog</link>
  <description>${escapeHTML(opts.description)}</description>
  <language>${cfg.locale ?? "en-US"}</language>
  <atom:link href="${base}/feed.xml" rel="self" type="application/rss+xml"/>
${items}
</channel>
</rss>`
}

export const BlogFeed = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  const emitAll = async (ctx, content) => {
    const posts = content
      .map(([, file]) => file.data)
      .filter((d) => isPost(d) && d.dates?.created)
      .sort((a, b) => new Date(b.dates.created) - new Date(a.dates.created))
      .slice(0, opts.limit)
    const out = path.join(ctx.argv.output, "feed.xml")
    await fs.mkdir(path.dirname(out), { recursive: true })
    await fs.writeFile(out, feed(ctx.cfg.configuration, opts, posts))
    return [out]
  }
  return {
    name: "BlogFeed",
    emit: emitAll,
    partialEmit: emitAll,
  }
}
