import { isAbsoluteURL, slugifyFilePath } from "@quartz-community/utils"

// og-image resolves a relative `socialImage` to `https://<baseUrl>/static/<path>`,
// but vault attachments are published at their slugified path instead
// (`Attachments/Alfred Hero.jpg` -> `/attachments/alfred-hero.jpg`). Quartz
// Syncer also copies a note's `image:` into `socialImage` on publish. Rewrite
// either one to the absolute published URL so link previews use the real image.
export const SocialImage = () => ({
  name: "SocialImage",
  htmlPlugins(ctx) {
    const baseUrl = ctx.cfg.configuration.baseUrl
    return [
      () => (_tree, file) => {
        const fm = file.data.frontmatter
        const img = fm?.socialImage ?? fm?.image
        if (typeof img !== "string" || !img || isAbsoluteURL(img)) return
        fm.socialImage = `https://${baseUrl}/${slugifyFilePath(img.replace(/^\//, ""))}`
      },
    ]
  },
})
