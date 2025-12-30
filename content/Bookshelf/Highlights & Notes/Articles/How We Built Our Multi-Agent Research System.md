---
title: How We Built Our Multi-Agent Research System
linter-yaml-title-alias: How We Built Our Multi-Agent Research System
date created: 2025-06-26T16:01:44-06:00
date modified: 2025-09-08T09:27:54-06:00
aliases: How We Built Our Multi-Agent Research System
---
# How We Built Our Multi-Agent Research System

<div style="text-align: center;">
		<img src="https://cdn.sanity.io/images/4zrzovbb/website/5cf046fff69b847bfa78c12723dd466b285c0218-2400x1260.png" width="500px">
</div>

## Metadata

- Author: #people/authors/anthropiccom
- Full Title: How We Built Our Multi-Agent Research System
- Category: #articles
- Document Tags: #technology
- Summary: Anthropic built a multi-agent research system where a lead agent creates subagents to work on different tasks in parallel. This approach helps solve complex problems faster by dividing work and using many tools at once. Careful prompt design and coordination are key to making the system reliable and effective.
- URL: https://www.anthropic.com/engineering/built-multi-agent-research-system

```dataview
task
where !completed and file.name = this.file.name
```

## Highlights

- orchestrator-worker pattern ([View Highlight](https://read.readwise.io/read/01jygyvedekknntsz3nhqssaxn))

> Orchestrator-worker pattern: A design pattern in multi-agent or distributed systems where a central coordinator (the orchestrator) manages and directs multiple specialized agents or workers. The orchestrator delegates tasks to workers, which operate in parallel to perform subtasks, enabling efficient task division and coordination within complex processes.
