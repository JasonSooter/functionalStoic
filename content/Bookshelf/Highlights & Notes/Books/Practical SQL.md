---
title: Practical SQL
linter-yaml-title-alias: Practical SQL
date created: 2025-04-26T16:14:25-06:00
date modified: 2025-09-08T09:33:38-06:00
aliases: Practical SQL
---
# Practical SQL

<div style="text-align: center;">
		<img src="https://m.media-amazon.com/images/I/71lEEZOaLxL.jpg" width="500px">
</div>

## Metadata

- Author: #people/authors/anthony-debarros
- Full Title: Practical SQL
- Category: #books
- Document Tags: #shortlist
- Summary: "Practical SQL, 2nd Edition" by Anthony DeBarros teaches how to use SQL with PostgreSQL to manage and query data in tables. It explains the importance of understanding table structures and data types for effective data analysis. The book provides examples and practical tips for retrieving and manipulating data efficiently.

and file.name = this.file.name

```





tion

- What Is SQL?
	- SQL is a widely used programming language for managing data and database systems. ([View Highlight](https://read.readwise.io/read/01jfty7a15sdxnc782xhvkne1j))
	- you’ll benefit from using SQL to collect, modify, explore, and summarize data. ([View Highlight](https://read.readwise.io/read/01jfty7pmkg7zrx4kdwkz77cbt))
- Why SQL?
	- Using a robust SQL database system allows you to work with terabytes of data, multiple related tables, and thousands of columns. It gives you fine-grained control over the structure of your data, leading to efficiency, speed, and—most important—accuracy. ([View Highlight](https://read.readwise.io/read/01jftyf9s044f1njg6mx0wa4fy))
	- SQL is also an excellent adjunct to programming languages used in the data sciences, such as R and Python. ([View Highlight](https://read.readwise.io/read/01jftyfjy4ze4r2zk3fas5jatn))
- Who Is This Book For?
	- *Practical SQL* is for people who encounter data in their everyday lives and want to learn how to analyze, manage, and transform it. ([View Highlight](https://read.readwise.io/read/01jftygmk676tn2rv2q0f1w8vy))

### 1 - Setting Up Your Coding Environment

### 2 - Creating Your First Database and Table

- SQL is more than just a means for extracting knowledge from data. It’s also a language for *defining* the structures that hold data so we can organize *relationships* in the data. Chief among those structures is the table. ([View Highlight](https://read.readwise.io/read/01jftytn8m85kvwwctmjm7c92z))
- A table is a grid of rows and columns that store data ([View Highlight](https://read.readwise.io/read/01jfv0r151pfwef455pcnd9qym))
- Each row holds a collection of columns, and each column contains data of a specified type ([View Highlight](https://read.readwise.io/read/01jfv0r7h6ssepwf15c11k2d1x))
- We use SQL to define the structure of a table and how each table might relate to other tables in the database ([View Highlight](https://read.readwise.io/read/01jfv0rkdzg4d14sk1nrj5m102))
- We also use SQL to extract, or *query*, data from tables. ([View Highlight](https://read.readwise.io/read/01jfv0rnyxdk92xtah8s554byj))
- Whenever I start working with a fresh database, the first thing I do is look at the tables within ([View Highlight](https://read.readwise.io/read/01jfv0tjrw798pzj49dncq859g))

> A few good tips to create a path toward understanding the database schema

- I look for clues in the table names and their column structure. Do the tables contain text, numbers, or both? How many rows are in each table? ([View Highlight](https://read.readwise.io/read/01jfv0tqz4pp23gx2gehq72s8f))
- Next, I look at how many tables are in the database. ([View Highlight](https://read.readwise.io/read/01jfv0vye7d2a76waw56kxqmsg))
- The number of tables tells me not only how much data I’ll need to analyze, but also hints that I should explore relationships among the data in each table. ([View Highlight](https://read.readwise.io/read/01jfv0wazbgnkr184nammvg8tp))

### 3 - Beginning Data Exploration with SELECT

- In SQL, interviewing data starts with the `SELECT` keyword, which retrieves rows and columns from one or more of the tables in a database ([View Highlight](https://read.readwise.io/read/01jg0164eqfjtrsbqbx59k74c8))
- A `SELECT` statement can be simple, retrieving everything in a single table, or it can be complex enough to link dozens of tables while handling multiple calculations and filtering by exact criteria. ([View Highlight](https://read.readwise.io/read/01jg016thefv5he2cxect522gt))
- Comparison and Matching Operators ([View Highlight](https://read.readwise.io/read/01jg04exzzh87jvpmyw78xe7f6))
- `=` Equal to `WHERE school = 'Baker Middle'` ([View Highlight](https://read.readwise.io/read/01jg04ek7acjh508vnvzpd4aw7))
- `<>` or `!=` Not equal to* `WHERE school <> 'Baker Middle'` ([View Highlight](https://read.readwise.io/read/01jg04epc37qgnm9v2ap8z7pxv))
- `>` Greater than `WHERE salary > 20000` ([View Highlight](https://read.readwise.io/read/01jg04erbm9atka601h7s2f307))
- `<` Less than `WHERE salary < 60500` ([View Highlight](https://read.readwise.io/read/01jg04f192zw3jzfn9jfkqae79))
- `>=` Greater than or equal to `WHERE salary >= 20000` ([View Highlight](https://read.readwise.io/read/01jg04f3xshyjy3rg4ak3xb4hj))
- `<=` Less than or equal to `WHERE salary <= 60500` ([View Highlight](https://read.readwise.io/read/01jg04f74kmfmqxjzv3fadj851))
- `BETWEEN` Within a range `WHERE salary BETWEEN 20000 AND 40000` ([View Highlight](https://read.readwise.io/read/01jg04f9wc0x9f8s157e15k8ee))
- `N` Match one of a set of values `WHERE last_name IN ('Bush', 'Roush')` ([View Highlight](https://read.readwise.io/read/01jg04fcq0db3qgpjg9rrrrgqq))
- `LIKE` Match a pattern (case sensitive) `WHERE first_name LIKE 'Sam%'` ([View Highlight](https://read.readwise.io/read/01jg04ffzxsc2bj79tmdeaa046))
- `ILIKE` Match a pattern (case insensitive) `WHERE first_name ILIKE 'sam%'` ([View Highlight](https://read.readwise.io/read/01jg04fkr8tme534221w76fdjt))
- `NOT` Negates a condition `WHERE first_name NOT ILIKE 'sam%'` ([View Highlight](https://read.readwise.io/read/01jg04fqrrxz6eve7vxpwj7mfg))
- Note that `BETWEEN` is *inclusive*, meaning the result will include values matching the start and end ranges specified. ([View Highlight](https://read.readwise.io/read/01jg04gk57cmmbkmf1xk82dymm))
- Using LIKE and ILIKE with WHERE ([View Highlight](https://read.readwise.io/read/01jg04j82p1maffmm6rxzma1cb))
- Comparison operators are fairly straightforward, but the matching operators `LIKE` and `ILIKE` deserve additional explanation. ([View Highlight](https://read.readwise.io/read/01jg04j4ydq51jj01ct2e8pxg3))
- To use `LIKE` and `ILIKE`, you specify a pattern to match using one or both of these symbols: ([View Highlight](https://read.readwise.io/read/01jg04jshfdaxme3f4aqba0n6b))
- Percent sign (%) A wildcard matching one or more characters ([View Highlight](https://read.readwise.io/read/01jg04jvp1vjm73kgd5mt4x9xt))
- Underscore (_) A wildcard matching just one character ([View Highlight](https://read.readwise.io/read/01jg04jz50d5nyz7f7ad4j6ppe))
- For example, if you’re trying to find the word `baker`, the following `LIKE` patterns will match it: ([View Highlight](https://read.readwise.io/read/01jg04kayz2ygx5zr18web6q2n))
- LIKE 'b%' LIKE '%ak%' LIKE '_aker' LIKE 'ba_er' ([View Highlight](https://read.readwise.io/read/01jg04kczmsvwydy474ay30emw))
- The difference? The `LIKE` operator, which is part of the ANSI SQL standard, is case sensitive. ([View Highlight](https://read.readwise.io/read/01jg04km4cw630n7jsnrz5g269))
- The `ILIKE` operator, which is a PostgreSQL-only implementation, is case insensitive ([View Highlight](https://read.readwise.io/read/01jg04kvwkwhhtp7x4maxx1wcx))

> Snowflake has it. So maybe not completely limited to Postgres

- e case-insensitive `ILIKE` 2, will return `Samuel` and `Samantha` from the tabl ([View Highlight](https://read.readwise.io/read/01jg04n0mbshpyw5qask6jjt3e))
- Over the years, I’ve gravitated toward using `ILIKE` and wildcard operators to make sure I’m not inadvertently excluding results from searches, particularly when vetting data. I don’t assume that whoever typed the names of people, places, products, or other proper nouns always remembered to capitalize them. And if one of the goals of interviewing data is to understand its quality, using a case-insensitive search will help you find variations. ([View Highlight](https://read.readwise.io/read/01jg04s75d1a3szwvsfhvq1hc1))

> This is likely a wise strategy, since extra results being returned is a better problem to have then desired results not being returned

- Comparison operators become even more useful when we combine them. To do this, we connect them using the logical operators `AND` and `OR` along with, if needed, parentheses. ([View Highlight](https://read.readwise.io/read/01jg04vvfaczfs4shwdk9zc42e))
- If we use both `AND` with `OR` in a clause but don’t use any parentheses, the database will evaluate the `AND` condition first and then the `OR` condition ([View Highlight](https://read.readwise.io/read/01jg056zkwv3f15s5bfpqj0ar1))

### 4 - Understanding Data Types

- It’s important to understand data types because storing data in the appropriate format is fundamental to building usable databases and performing accurate analysis ([View Highlight](https://read.readwise.io/read/01jst2e22bhzdka8bs5m169j9k))
- Whenever I dig into a new database, I check the *data type* specified for each column in each table. If I’m lucky, I can get my hands on a *data dictionary*: a document that lists each column; specifies whether it’s a number, character, or other type; and explains the column values ([View Highlight](https://read.readwise.io/read/01jst2f1bbexyetmhbq6d7bvtx))
