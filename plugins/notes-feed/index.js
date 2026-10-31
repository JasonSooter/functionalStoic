import path from "node:path"
import fs from "node:fs/promises"
import { escapeHTML } from "@quartz-community/utils"
import { getDate } from "@quartz-community/utils/sort"

// Replaces content-index's RSS output (enableRSS is off there). content-index
// puts every page in /index.xml, generated tag pages included. Tag pages have
// no date of their own, so each build stamps them "now" and they crowd out real
// notes at the top of the feed. This emits the same feed at the same URL, minus
// any slug under an excluded prefix.

const defaultOptions = {
  limit: 10,
  excludePrefixes: ["tags/"],
}

const simplify = (slug) => {
  const s = slug.endsWith("/index") ? slug.slice(0, -"index".length) : slug
  return s === "index" ? "" : s
}

function feed(cfg, items) {
  const base = cfg.baseUrl ?? ""
  const pageTitle = escapeHTML(cfg.pageTitle ?? "")
  const entries = items
    .map(({ slug, title, description, date }) => {
      const url = `https://${base}/${encodeURI(simplify(slug))}`
      return `<item>
    <title>${escapeHTML(title)}</title>
    <link>${url}</link>
    <guid>${url}</guid>
    <description><![CDATA[ ${description} ]]></description>
    <pubDate>${date.toUTCString()}</pubDate>
  </item>`
    })
    .join("")
  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
      <title>${pageTitle}</title>
      <link>https://${base}</link>
      <description>Last ${items.length} notes on ${pageTitle}</description>
      <generator>Quartz -- quartz.jzhao.xyz</generator>
      ${entries}
    </channel>
  </rss>`
}

export const NotesFeed = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  const excluded = (slug) => opts.excludePrefixes.some((p) => slug.startsWith(p))
  const emitAll = async (ctx, content) => {
    const items = content
      .map(([, file]) => file.data ?? {})
      // Same inclusion rules as content-index: listed pages with body text.
      .filter((d) => d.slug && d.unlisted !== true && d.text && !excluded(d.slug))
      .map((d) => ({
        slug: d.slug,
        title: d.frontmatter?.title ?? "",
        description: d.description ?? "",
        date: getDate(d) ?? new Date(),
      }))
      .sort((a, b) => b.date - a.date || a.title.localeCompare(b.title))
      .slice(0, opts.limit)
    const out = path.join(ctx.argv.output, "index.xml")
    await fs.mkdir(path.dirname(out), { recursive: true })
    await fs.writeFile(out, feed(ctx.cfg.configuration, items))
    return [out]
  }
  return {
    name: "NotesFeed",
    emit: emitAll,
    partialEmit: emitAll,
  }
}
