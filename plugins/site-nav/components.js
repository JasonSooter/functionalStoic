import { h } from "preact"
import { pathToRoot } from "@quartz-community/utils"

// Top bar carried over from the old Next.js site (components/Header.tsx): the site
// title on the left, section links on the right, collapsing to a <details> menu on
// narrow screens so it works without JS and survives SPA navigation.

const defaultOptions = {
  title: "functionalStoic",
  links: {},
  googleAnalyticsId: "",
}

/** True when `slug` is the link target or a page inside it (`blog` matches `blog/x`). */
function isActive(slug, href) {
  const target = href.replace(/^\//, "").replace(/\/$/, "")
  if (!target) return slug === "index"
  return slug === target || slug === `${target}/index` || slug.startsWith(`${target}/`)
}

const style = `
.site-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex: 1 1 auto;
  min-width: 0;
}

.site-nav .site-title {
  font-family: var(--headerFont);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--dark);
  white-space: nowrap;
  background: none;
  padding: 0;
}

.site-nav .site-title:hover {
  color: var(--secondary);
}

.site-nav ul {
  display: flex;
  gap: 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.site-nav li a {
  font-weight: 500;
  color: var(--darkgray);
  background: none;
  padding: 0;
}

.site-nav li a:hover,
.site-nav li a.active {
  color: var(--secondary);
}

.site-nav details {
  display: none;
  position: relative;
}

.site-nav summary {
  list-style: none;
  cursor: pointer;
  color: var(--dark);
  display: flex;
}

.site-nav summary::-webkit-details-marker {
  display: none;
}

.site-nav details[open] ul {
  position: absolute;
  right: 0;
  top: 2.25rem;
  z-index: 100;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  min-width: 10rem;
  background: var(--light);
  border: 1px solid var(--lightgray);
  border-radius: 0.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

@media (max-width: 800px) {
  .site-nav > ul {
    display: none;
  }
  .site-nav details {
    display: block;
  }
}
`

// Close the mobile menu after an SPA navigation; it would otherwise stay open on
// the new page because micromorph keeps the <details> element.
const navScript = `
document.addEventListener("nav", () => {
  for (const menu of document.querySelectorAll(".site-nav details[open]")) {
    menu.removeAttribute("open")
  }
})
`

// gtag with page views sent per SPA navigation. Quartz fires "nav" on first load
// and after every client-side navigation, so the automatic page view is disabled
// to avoid counting the first page twice.
const analyticsScript = (id) => `
(() => {
  const s = document.createElement("script")
  s.async = true
  s.src = "https://www.googletagmanager.com/gtag/js?id=${id}"
  document.head.appendChild(s)
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  gtag("js", new Date())
  gtag("config", "${id}", { send_page_view: false })
  document.addEventListener("nav", () => {
    gtag("event", "page_view", {
      page_location: window.location.href,
      page_title: document.title,
    })
  })
})()
`

function NavLinks({ links, slug, base }) {
  return h(
    "ul",
    null,
    Object.entries(links).map(([text, href]) => {
      const external = /^https?:\/\//.test(href)
      const url = external ? href : base + href
      return h(
        "li",
        null,
        h(
          "a",
          { href: url, class: !external && isActive(slug, href) ? "active" : undefined },
          text,
        ),
      )
    }),
  )
}

export const SiteNav = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }

  const Component = ({ fileData, displayClass }) => {
    const slug = fileData.slug ?? ""
    const base = pathToRoot(slug)
    return h(
      "nav",
      { class: ["site-nav", displayClass].filter(Boolean).join(" "), "aria-label": "Main" },
      h("a", { class: "site-title", href: base + "/" }, opts.title),
      h(NavLinks, { links: opts.links, slug, base }),
      h(
        "details",
        null,
        h(
          "summary",
          { "aria-label": "Toggle menu" },
          h(
            "svg",
            {
              width: 24,
              height: 24,
              viewBox: "0 0 20 20",
              fill: "currentColor",
              "aria-hidden": "true",
            },
            h("path", {
              "fill-rule": "evenodd",
              d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
              "clip-rule": "evenodd",
            }),
          ),
        ),
        h(NavLinks, { links: opts.links, slug, base }),
      ),
    )
  }

  Component.displayName = "SiteNav"
  Component.css = style
  Component.afterDOMLoaded =
    navScript + (opts.googleAnalyticsId ? analyticsScript(opts.googleAnalyticsId) : "")
  return Component
}
