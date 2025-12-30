---
linter-yaml-title-alias: WHERE vs. HAVING
title: WHERE Vs. HAVING
date created: 2024-10-14T17:29:19-06:00
date modified: 2024-11-30T14:24:20-07:00
---
# WHERE Vs. HAVING

## Summary

## Changelog

## Resources

## Action Items

## FAQ

---
🙋
✨
[Source]()

---

## Content

This SQL question is part of every Data Engineering interview:

What's the difference between WHERE and HAVING?

If you're still relatively new to SQL, this can be a tough question. Both are used for filtering rows in the query results.

Here's the difference:

WHERE is used for filtering rows BEFORE any grouping or aggregation.

HAVING is used for filtering rows AFTER any grouping or aggregation.

If you have both a WHERE clause and a HAVING clause in your query, WHERE will execute first.

In order to use HAVING, you also need:
- A GROUP BY clause
- An aggregation in your SELECT section (SUM, MIN, MAX, etc.)

![[WHERE vs HAVING.png]]
