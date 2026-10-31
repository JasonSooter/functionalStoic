import path from "node:path"
import fs from "node:fs/promises"
import { escapeHTML } from "@quartz-community/utils"

// Replaces content-index's RSS output (enableRSS is off there). content-index
// puts every page in /index.xml, generated tag pages included, and stamps
// undated pages with the build time so they crowd the top of the feed on every
// build. This emits the same feed at the same URL, minus any slug under an
// excluded prefix and any page without a date. Real notes always have one:
// created-modified-date falls back to git, then filesystem time.
//
// Items are dated by `dateType` (default "created"), not the site-wide
// defaultDateType ("modified"), so editing an old page doesn't bring it back to
// the top of the feed as if it were new.

const defaultOptions = {
  limit: 10,
  excludePrefixes: ["tags/"],
  dateType: "created",
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
        date: d.dates?.[opts.dateType],
      }))
      .filter((item) => item.date)
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
