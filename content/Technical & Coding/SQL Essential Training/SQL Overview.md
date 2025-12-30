---
date created: 2023-02-22T14:55:39-07:00
date modified: 2025-09-08T09:33:28-06:00
title: SQL Overview
---
# SQL Overview

## About SQL

### SQL Statement

```sql
SELECT * FROM Countries WHERE Continent = 'Europe'
```

- The statement is the unit of execution in SQL
- Statements are made up of:
	- clauses
		- FROM
		- WHERE
			- requires an expression
	- terminated with a `;`

### 4 Fundamental Functions of a Database

- CRUD
	- Create
		- Insert Statement
	- Read
		- Select Statement
	- Update
		- Update Statement
	- Delete
		- Delete Statement

## Database Organization

- 2 Dimensional
	- Columns
	- Rows
- Each Row has a Unique Key
- Often called the Primary Key
- Tables are related by keys
- A column that references a particular row in another table is called a foreign key

## The Select Statement

The Where Clause
- Which rows to return
