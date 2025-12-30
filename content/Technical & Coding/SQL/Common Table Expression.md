---
title: Common Table Expression
date created: 2024-03-28T12:55:34-06:00
date modified: 2025-11-14T19:31:33-07:00
aliases:
  - CTE
  - Common Table Expressions
linter-yaml-title-alias: Common Table Expression
---
# Common Table Expression

## Summary

Common Table Expressions (CTEs) are a feature in SQL that provide a way to define temporary result sets that can be referenced within a SELECT, INSERT, UPDATE, or DELETE statement. CTEs can simplify complex queries and improve readability by breaking them into manageable pieces. Here are the key points about CTEs:

1. **Syntax**: A CTE is created using the `WITH` keyword, followed by the CTE name and the `AS` keyword, and then the query that defines the CTE enclosed in parentheses. For example:

	 ```sql
   WITH cte_name AS (
       SELECT column1, column2
       FROM table_name
       WHERE condition
   )
   SELECT *
   FROM cte_name;
   ```

2. **Readability**: CTEs make SQL queries easier to read and maintain by allowing you to separate complex logic into individual, reusable components.
3. **Recursiveness**: CTEs can be recursive, meaning a CTE can refer to itself. This is particularly useful for hierarchical data, such as organizational structures or file system paths.
4. **Scope**: A CTE is scoped to the statement it is part of and cannot be used outside of that statement. They do not persist beyond the execution of the statement.
5. **Performance**: While CTEs can simplify SQL writing, they do not inherently improve the performance of a query. The SQL engine treats them as inline views, and their performance depends on the query execution plan.
6. **Multiple CTEs**: You can define multiple CTEs in a single statement, and later CTEs can reference earlier ones. They are separated by commas:

	 ```sql
   WITH cte1 AS (
       SELECT ...
   ),
   cte2 AS (
       SELECT ...
       FROM cte1
   )
   SELECT *
   FROM cte2;
   ```

Overall, CTEs are a powerful tool for writing complex SQL queries in a more modular and understandable way. They are supported by most major database systems, including SQL Server, PostgreSQL, MySQL, and Oracle.

## Changelog

## Resources

## Action Items

## FAQ

> [!question] Title
> Contents
> [Source]()

## Content

## Learning to Use CTEs

- Author: #people/authors/david-freitag
- URL: https://www.linkedin.com/posts/davidkfreitag_sql-dataengineering-activity-7171493677788311553-uvAl/

The number one SQL concept that leveled-up my skills:

Learning to use CTE's!

CTE's are a fundamental SQL concept every good Data Engineer needs to know.

What exactly is a CTE?

A CTE (Common Table Expression) is like a cross between a subquery and a temp table. Like a subquery, the CTE disappears at the end of the query. Like a temp table, you can reference the CTE by name as if it were actually a table.

One way to make your code more readable is to write multiple CTE's. Then, join all the CTE's together to get your final query result.

Two reasons you should use CTE's instead of subqueries:

1. Your code becomes much more readable if you replace subqueries with CTE's.
2. You can debug each CTE individually instead of debugging the whole query at once.

Some important nuances related to CTE syntax:

1. Your first CTE must begin with the keyword WITH (line 1 below).
2. CTE's must be separated by commas (line 8 below).
3. You need to define all your CTE's up front before calling them (lines 1-13 below).

CTE's are foundational to nearly all the queries I write as a Data Engineer. Without CTE's, my queries would be significantly messier and buggier!

See an example of a CTE in action below
- ![No alternative text description for this image](https://media.licdn.com/dms/image/D4E10AQG8LtwtgYV6wQ/image-shrink_1280/0/1709817307229?e=2147483647&v=beta&t=Vk8k1qT2EIBUqg5SUO2UeRZYNLViRq-J6P-t7hOTiVk) ([View Highlight](https://read.readwise.io/read/01ht36kmvpqg3h2n9crdx14jk9))
