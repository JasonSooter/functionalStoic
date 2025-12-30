---
date created: 2023-08-31T10:43:43-06:00
date modified: 2025-04-06T07:36:50-06:00
linter-yaml-title-alias: SQL
title: SQL
---
# SQL

## Changelog

## Resources

- [The Complete SQL Dictionary](https://hightouch.com/sql-dictionary)

## Action Items

## FAQ

---
🙋
✨
[Source]()

---

## Content

## SQL Quick Reference

### SQL SELECT STATEMENTS

- **SELECT * FROM tbl**

	```sql
  SELECT * FROM tbl
  ```

	Select all rows and columns from table tbl

- **SELECT c1, c2 FROM tbl**

	```sql
  SELECT c1, c2 FROM tbl
  ```

	Select column c1, c2 and all rows from table tbl

- **SELECT c1, c2 FROM tbl WHERE conditions ORDER BY c1 ASC, c2 DESC**

	```sql
  SELECT c1, c2 FROM tbl 
  WHERE conditions 
  ORDER BY c1 ASC, c2 DESC
  ```

	Select columns c1, c2 with where conditions and from table tbl order result by column c1 in ascending order and c2 in descending order

- **SELECT DISTINCT c1, c2 FROM tbl**

	```sql
  SELECT DISTINCT c1, c2 FROM tbl
  ```

	Select distinct rows by columns c1 and c2 from table tbl

- **SELECT c1, aggregate(expr) FROM tbl GROUP BY c1**

	```sql
  SELECT c1, aggregate(expr) 
  FROM tbl 
  GROUP BY c1
  ```

	Select column c1 and use aggregate function on expression expr, group columns by column c1

- **SELECT c1, aggregate(expr) AS c2 FROM tbl GROUP BY c1 HAVING c2 > v**

	```sql
  SELECT c1, aggregate(expr) AS c2 
  FROM tbl 
  GROUP BY c1 
  HAVING c2 > v
  ```

	Select column c1 and c2 as column alias of the result of aggregate function on expr. Filter group of records with c2 greater than value v

---

### SQL UPDATE TABLE

- **INSERT INTO tbl(c1, c2, …) VALUES(v1, v2, …)**

	```sql
  INSERT INTO tbl(c1, c2, ...) 
  VALUES(v1, v2, ...)
  ```

	Insert data into table tbl

- **INSERT INTO tbl(c1, c2, …) SELECT c1, c2, … FROM tbl2 WHERE conditions**

	```sql
  INSERT INTO tbl(c1, c2, ...) 
  SELECT c1, c2, ... 
  FROM tbl2 
  WHERE conditions
  ```

	Insert data from tbl2 into tbl

- **UPDATE t SET c1 = v1, c2 = v2, … WHERE conditions**

	```sql
  UPDATE t 
  SET c1 = v1, c2 = v2, ... 
  WHERE conditions
  ```

	Update data in table tbl

- **DELETE FROM tbl WHERE conditions**

	```sql
  DELETE FROM tbl 
  WHERE conditions
  ```

	Delete records from table tbl based on WHERE conditions

- **TRUNCATE TABLE tbl**

	```sql
  TRUNCATE TABLE tbl
  ```

	Drop table tbl and re-create it, all data is lost

---

### SQL TABLE STATEMENTS

- **CREATE TABLE tbl( c1 datatype(length), c2 datatype(length), … PRIMARY KEY(c1) )**

	```sql
  CREATE TABLE tbl(
    c1 datatype(length),
    c2 datatype(length),
    ...
    PRIMARY KEY(c1)
  )
  ```

	Create table tbl with primary key is c1

- **DROP TABLE tbl**

	```sql
  DROP TABLE tbl
  ```

	Remove table tbl from database

- **ALTER TABLE tbl ADD COLUMN c1 datatype(length)**

	```sql
  ALTER TABLE tbl 
  ADD COLUMN c1 datatype(length)
  ```

	Add column c1 to table tbl

- **ALTER TABLE tbl DROP COLUMN c1**

	```sql
  ALTER TABLE tbl 
  DROP COLUMN c1
  ```

	Drop column c1 from table tbl

---

### SQL JOIN STATEMENTS

- **SELECT * FROM tbl1 INNER JOIN tbl2 ON join-conditions**

	```sql
  SELECT * 
  FROM tbl1 
  INNER JOIN tbl2 
  ON join-conditions
  ```

	Inner join table tbl1 with tbl2 based on join-conditions

- **SELECT * FROM tbl1 LEFT JOIN tbl2 ON join-conditions**

	```sql
  SELECT * 
  FROM tbl1 
  LEFT JOIN tbl2 
  ON join-conditions
  ```

	Left join table tbl1 with tbl2 based on join-conditions

- **SELECT * FROM tbl1 RIGHT JOIN tbl2 ON join-conditions**

	```sql
  SELECT * 
  FROM tbl1 
  RIGHT JOIN tbl2 
  ON join-conditions
  ```

	Right join table tbl1 with tbl2 based on join-conditions

- **SELECT * FROM tbl1 FULL JOIN tbl2 ON join-conditions**

	```sql
  SELECT * 
  FROM tbl1 
  FULL JOIN tbl2 
  ON join-conditions
  ```

	Full outer join table tbl1 with tbl2 based on join-conditions

## Learn SQL

> [!quote] You don't need a master's degree or an expensive course to learn SQL.

- [ ] Process this note into tasks that allow me to more formally learn SQL

- [Source](https://www.linkedin.com/posts/davidkfreitag_sql-dataengineering-activity-7210612580099203072-wdab)

You need:
1. An environment to run SQL queries
2. An intro tutorial to get you started
3. A roadmap for how to take it to the next level when you're ready

Here are all three!

1. Sign up for a free Google Cloud account here: <https://lnkd.in/eHEmf8Se>
	- Run your queries in Google BigQuery using their public datasets immediately - no setup required.
	- You get $300 of free cloud credits when you sign up. This is more than you'll need.
2. The best SQL tutorial on the internet, hands down, is the Mode Analytics SQL tutorial. Find it here: <https://lnkd.in/eD_gGkAB>
	- Work through the topics in the tutorial in order. Each topic builds on the last.
	- Run each query in BigQuery for free.
	- Save the queries you run to create your own reference guide. Trust me, you'll need it later!
3. Once you know the basics, you need to practice writing queries of your own design. You need to get beyond what tutorials can teach you. Here's a roadmap of challenges to tackle:
	- Write a query that joins two tables from unrelated datasets.
	- Write a query that utilizes multiple CTEs.
	- Write a query that will show you the distribution of values over time so you can spot patterns.
	- Write a query whose output format can be easily plotted into a visualization.
	- Write a query that builds a table with partitioning/clustering/bucketing.
	- Re-write one of your existing queries so it runs faster.
	- Re-write one of your existing queries so it queries less data from the data warehouse but produces the same result.

### Comments

#### Matt Martin

Use duck db and download some public datasets to your laptop…no credit card or acct required. Makes it a lot easier to test and learn SQL IMO

This is how easy it is to install and run duckdb (I’m on Mac terminal but windows is pretty easy as well):

1. brew install duckdb
2. duckdb
3. Create table test as select 42 as x;
4. Select * from test;

Just 4 steps. No credit card, no account, no project to manage, no gcs bucket to manage. Duckdb can be ran in its fully self-contained CLI or python as well as other languages like Rust and Go.

For a more involved example, I wrote this article a few weeks ago that shows how to create datasets in duckdb:

[https://performancede.substack.com/p/generating-test-data-is-hard](https://performancede.substack.com/p/generating-test-data-is-hard)

#### Pedro Gusmão

sql zoo is also very good to learn and follow until intermediate!

[https://www.sqlzoo.net/wiki/SQL_Tutorial](https://www.sqlzoo.net/wiki/SQL_Tutorial)

#### Aminat Lawal

I agree. Mode is the best. Its got the data, the IDE, the lessons are structured and comprehensive, a one stop shop for anyone looking to improve their SQL.

#### Cecilia Xavier

Mode Analytics' tutorial is a great resource, and your roadmap of challenges is perfect for advancing skills.

#### Abhishek Nakka

Lastly use leet code, Datalemur websites to solve actual challenges. It opens the door to SQL interview questions.

#### Tarun Chilkur

I use leetcode for sql, use GPT to generate spark code to create the tables used in the question, practice spark data frame API for the same question on my local.

#### Nicholas G. Piesco

[MotherDuck](https://www.linkedin.com/company/motherduck/) offers a pretty generous free tier cloud platform utilizing [DuckDB](https://www.linkedin.com/company/duckdb/) as the query engine. Great for learning and exploratory ad hoc data exploration. Since it intelligently utilizes local compute, it's super efficient.
