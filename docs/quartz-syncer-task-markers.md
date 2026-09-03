> [!note] Resolved upstream
> Filed as [saberzero1/quartz-syncer#137](https://github.com/saberzero1/quartz-syncer/issues/137)
> and fixed in commit `59161a7` (2026-08-30), which bumped
> `@quartz-community/remark-obsidian` to 0.2.4 — adopting the `listItem`
> toMarkdown handler proposed below. Shipped in quartz-syncer **2.0.5**;
> verified end-to-end on **2.0.10** (2026-09-03), with all 11 task-bearing notes
> republishing with their markers intact.
>
> The local patch and the CI guard that backed it have been retired. This file is
> kept as the record of the investigation.

# Task list markers (`- [ ]` / `- [x]`) are stripped from published notes

**Repo:** saberzero1/quartz-syncer
**Version:** 1.18.0 · Obsidian 1.13+ · Quartz v5.0.0

---

## Summary

Every task list item loses its checkbox marker on publish. `- [ ] foo` in the
vault is pushed to the Quartz repo as `- foo`, so no task ever renders as a
checkbox on the published site — regardless of Quartz-side configuration.

This also affects the output of Dataview `TASK` queries, which syncer otherwise
compiles correctly.

## Reproduction

1. In a note with `publish: true`, add:

   ```markdown
   - [ ] an unchecked task
   - [x] a checked task
   ```

2. Publish.
3. Inspect the pushed file in the content repo.

**Expected**

```markdown
- [ ] an unchecked task
- [x] a checked task
```

**Actual**

```markdown
- an unchecked task
- a checked task
```

Across my whole vault, 12 published notes contain task items and **zero** task
markers survive anywhere in `content/`:

```console
$ git grep -cE '^\s*- \[[ xX]\]' origin/main -- content
# (no output)
```

## Cause

`remark-obsidian` — bundled into `main.js` — registers toMarkdown extensions for
wikilinks, comments, tags, highlights and math, but none for task list items:

```js
// @quartz-community/remark-obsidian@0.1.0, dist/index.js
if (opts.wikilinks)  { …; data.toMarkdownExtensions.push(wikilinkToMarkdown()) }
if (opts.comments)   { …; data.toMarkdownExtensions.push(commentToMarkdown()) }
if (opts.tags)       { …; data.toMarkdownExtensions.push(tagToMarkdown()) }
if (opts.highlights) { …; data.toMarkdownExtensions.push(highlightToMarkdown()) }
if (opts.math)       { …; data.toMarkdownExtensions.push(mathToMarkdown()) }
// nothing for listItem
```

Its `applyCustomTaskChars` transform _does_ read the marker, but stashes it for
the HTML path:

```js
node.data.taskChar = c
node.data.hProperties.dataTaskChar = c // → data-task-char attribute
```

That is correct for Quartz, which renders mdast → hast → HTML and consumes
`hProperties`. But syncer's pipeline is markdown → **markdown**, and on that path
nothing consumes `taskChar`, while `listItem.checked` has no serialiser. The
marker is silently dropped.

So the underlying gap is in `remark-obsidian`, but it is only observable in
syncer, because syncer is the only consumer that stringifies back to markdown.
Notably `mdast-util-gfm-task-list-item` is absent from the bundle entirely —
GFM is applied on parse but not on serialise.

## Suggested fix

Register one more toMarkdown extension. `gfmTaskListItemToMarkdown()` from
`mdast-util-gfm-task-list-item` is enough for standard `[ ]` / `[x]`, but it
flattens custom markers (`[/]`, `[-]`, `[>]`) to `[x]` — which would regress the
`customTaskChars` feature. Reading `data.taskChar` first preserves them:

```js
import { defaultHandlers } from "mdast-util-to-markdown"

function taskCharToMarkdown() {
  return {
    unsafe: [{ atBreak: true, character: "-", after: "[:|-]" }],
    handlers: {
      listItem(node, parent, state, info) {
        const head = node.children[0]
        const c =
          node.data?.taskChar ??
          (typeof node.checked === "boolean" ? (node.checked ? "x" : " ") : null)
        const checkable = c !== null && head && head.type === "paragraph"
        const box = "[" + c + "] "
        const tracker = state.createTracker(info)
        if (checkable) tracker.move(box)
        let value = defaultHandlers.listItem(node, parent, state, {
          ...info,
          ...tracker.current(),
        })
        if (checkable) {
          value = value.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, ($0) => $0 + box)
        }
        return value
      },
    },
  }
}
```

Registered alongside the others:

```js
data.toMarkdownExtensions.push(taskCharToMarkdown())
```

This could equally land in `remark-obsidian` (gated on `customTaskChars`, which
is already an option there) rather than in syncer — that may be the better home,
since the transform that stashes `taskChar` lives there too.

## Verification

I patched the bundled copy locally and confirmed the fix at three levels:

- **Isolated harness** replicating the pipeline — round-trips `[ ]`, `[x]`,
  `[/]`, `[-]` and nested tasks. A naive alternative fix (re-injecting the marker
  as literal text in the mdast and clearing `checked`) does **not** work: the
  serialiser escapes it to `- \[ ] foo`.
- **End to end** — republished a real note; both a body task and a Dataview
  `TASK` query result came through with markers intact.
- **Rendering** — Quartz renders those markers as
  `<input type="checkbox" class="checkbox-toggle">` with no config change, so
  this is the only blocker.

Happy to open a PR against whichever package you think should own it.
