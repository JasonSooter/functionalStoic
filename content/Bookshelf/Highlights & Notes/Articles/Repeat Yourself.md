---
title: Repeat Yourself
linter-yaml-title-alias: Repeat Yourself
date created: 2025-07-06T19:07:41-06:00
date modified: 2025-09-08T09:27:52-06:00
aliases: Repeat Yourself
---
# Repeat Yourself

<div style="text-align: center;">
		<img src="https://endler.dev/favicon.ico" width="500px">
</div>

## Metadata

- Author: #people/authors/matthias@endlerdev-(matthias-endler)
- Full Title: Repeat Yourself
- Category: #articles
- Document Tags: #technology
- Summary: The author argues that repeating code can help maintain momentum and lead to better abstractions later. Prematurely avoiding repetition often causes complex, hard-to-change code that doesn't fit the problem well. It's better to copy code first, then refactor when you understand the problem clearly.
- URL: https://endler.dev/2025/repeat-yourself/

```dataview
task
where !completed and file.name = this.file.name
```

## Highlights

- I would argue that “writing mode” and “refactoring mode” are two different modes of programming. During writing mode, you want to focus on getting the idea down and stop your inner critic, which keeps telling you that your code sucks. During refactoring mode, you take the opposite role: that of the critic. You look for ways to improve the code by finding the right abstractions, removing duplication, and improving readability.
	Keep these two modes separate. Don’t try to do both at the same time. ([View Highlight](https://read.readwise.io/read/01jz89n6r2b66dpg8tezs19269))

> This applies to writing more generally and experiments as well

- Duplication is far cheaper than the wrong abstraction
	– [Sandi Metz](https://sandimetz.com/blog/2016/1/20/the-wrong-abstraction) ([View Highlight](https://read.readwise.io/read/01jz89zyn5phbd5827ne3d3xrd))
