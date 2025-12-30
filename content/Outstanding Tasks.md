---
title: Outstanding Tasks
date created: 2024-10-04T19:59:51-06:00
date modified: 2025-11-14T18:51:51-07:00
publish: "false"
linter-yaml-title-alias: Outstanding Tasks
---
# Outstanding Tasks

```dataview
TASK
FROM ""
WHERE !completed
  AND !contains(file.path, "Bookshelf")
  AND !contains(file.path, "Templates")
GROUP BY file.path
```
