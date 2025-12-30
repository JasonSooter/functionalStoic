---
title: Technical & Coding
date created: 2023-09-07T13:27:08-06:00
date modified: 2025-08-15T19:15:25-06:00
---
# Technical & Coding

%% DATAVIEW_PUBLISHER: start

```
LIST
WHERE (file.folder = this.file.folder OR contains(file.path, this.file.folder + "/"))
AND file.path != this.file.path
AND !contains(split(this.file.folder, "/"), file.name)
SORT file.name ASC
```

%%

- [[Technical & Coding/23 Factor App Principles.md|23 Factor App Principles]]
- [[Technical & Coding/JavaScript & TypeScript/async Functions - Deciphering await, return, and return await.md|async Functions - Deciphering await, return, and return await]]
- [[Technical & Coding/Base64 Command Line.md|Base64 Command Line]]
- [[Technical & Coding/JavaScript & TypeScript/Boolean() or !! ( Double Bang, Double Negation).md|Boolean() or !! ( Double Bang, Double Negation)]]
- [[Technical & Coding/Code Review Skills.md|Code Review Skills]]
- [[Technical & Coding/Data Engineering Vocab 101.md|Data Engineering Vocab 101]]
- [[Technical & Coding/SQL/DBT.md|DBT]]
- [[Technical & Coding/JavaScript & TypeScript/Destination Function Template.md|Destination Function Template]]
- [[Technical & Coding/DEV Environment.md|DEV Environment]]
- [[Technical & Coding/Docker for Developers.md|Docker for Developers]]
- [[Technical & Coding/Domain-Driven Design.md|Domain-Driven Design]]
- [[Technical & Coding/JavaScript & TypeScript/Fetch.md|Fetch]]
- [[Technical & Coding/Generic Algorithm Patterns.md|Generic Algorithm Patterns]]
- [[Technical & Coding/GitHub Actions.md|GitHub Actions]]
- [[Technical & Coding/GitHub Copilot.md|GitHub Copilot]]
- [[Technical & Coding/How to Decrypt PGP File.md|How to Decrypt PGP File]]
- [[Technical & Coding/How To Use GPG on the Command Line.md|How To Use GPG on the Command Line]]
- [[Technical & Coding/JavaScript & TypeScript/JavaScript Tips.md|JavaScript Tips]]
- [[Technical & Coding/Journey to Software Engineer.md|Journey to Software Engineer]]
- [[Technical & Coding/Load Balancer.md|Load Balancer]]
- [[Technical & Coding/Maintaining Software is my goal.md|Maintaining Software is my goal]]
- [[Technical & Coding/SQL/Mastering SQL Joins.md|Mastering SQL Joins]]
- [[Technical & Coding/MCP.md|MCP]]
- [[Technical & Coding/Monitoring As Code.md|Monitoring As Code]]
- [[Technical & Coding/My Thoughts on Code Bootcamps.md|My Thoughts on Code Bootcamps]]
- [[Technical & Coding/Postgres Tips.md|Postgres Tips]]
- [[Technical & Coding/Prepare for GitHub Software Engineer II.md|Prepare for GitHub Software Engineer II]]
- [[Technical & Coding/Prompt Engineering for Everyone.md|Prompt Engineering for Everyone]]
- [[Technical & Coding/Relational Databases Essential Training.md|Relational Databases Essential Training]]
- [[Technical & Coding/Snowflake Terraform 101.md|Snowflake Terraform 101]]
- [[Technical & Coding/SQL.md|SQL]]
- [[Technical & Coding/SQL Essential Training/SQL Overview.md|SQL Overview]]
- [[Technical & Coding/SQL/SQL Query Order of Execution.md|SQL Query Order of Execution]]
- [[Technical & Coding/System Design.md|System Design]]
- [[Technical & Coding/JavaScript & TypeScript/Testing with NodeJS 18.md|Testing with NodeJS 18]]
- [[Technical & Coding/TypeScript/TypeScript.md|TypeScript]]
- [[Technical & Coding/JavaScript & TypeScript/Understanding Subtype & Supertype Relationships in TypeScript.md|Understanding Subtype & Supertype Relationships in TypeScript]]
- [[Technical & Coding/Vercel.md|Vercel]]
- [[Technical & Coding/WHERE vs. HAVING.md|WHERE vs. HAVING]]

%% DATAVIEW_PUBLISHER: end %%

## Changelog

## Resources

## Action Items

## FAQ

---

🙋 ✨ [source]()

---

- [[Maintaining Software is my goal]]
	- I really liked this post because it describes what I enjoy most about any project. Ownership for the long haul
	- Sticking around long enough to see it work (or not). And then improving & iterating on it over time.
	- It describes [[Concepts#Heroic Consistency]]
