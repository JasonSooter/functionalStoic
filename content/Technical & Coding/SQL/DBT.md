---
date created: 2023-02-22T14:55:39-07:00
date modified: 2024-09-11T21:52:31-06:00
aliases:
  - Data Build Tool
title: DBT
---
# DBT

## Changelog

## Resources

- [Introduction to dbt (data build tool)](https://www.youtube.com/watch?v=M8oi7nSaWps&t=171s)

## Action Items

## FAQ

---
🙋 What issues does DBT set out to solve?
✨ Old methods of data modeling ruin the dream of democratized data access
- Datasets are slow to build, inaccessible, opaque, and fragile
- Consumers don't have the data they need and don't trust what they have
- BI adoption is low across the board, except in teams that have made huge investments in BI teams & Infrastructure
[Source]()

---

## Video Introduction to DBT

- [Introduction to dbt (data build tool)](https://www.youtube.com/watch?v=M8oi7nSaWps&t=171s)

### Two Core Principles

1. Anyone who knows SQL can author their own data pipelines
2. Their tools enable them to work like Sofware Engineers
	- Version Control
	- Tests
	- Documentation
	- Re-usability

### Why Should I Transform My Data?

- Cleaning
- Deduplication
- Restructuring
- Filtering
- Aggregation
- Joining

### What is DBT

> dbt is an open source transform tool that allows anyone comfortable with SQL to author their own data pipelines

- An orchestration layer that sits on top of your Data Warehouse
![[2022-11-17_13-23-47.png]]

### DBT is Open Core!

- dbt Core:
	- Open Source Data Transformation
	- Apache 2.0
	- Includes core SQL compilation logic, Jinja templating, database adapters
- dbt Cloud:
	- Pricing: free → Enterprise
	- A fully-managed dbt experience
	- Manages SaaS
	- Full IDE to develop and test your dbt code
	- Orchestrate your jobs
	- Logging and Alerting
	- Integrated documentation
	- User auth / SSO

### Core Concepts

1. Express transforms with SQL Select
2. Automatically build the DAG with ref(s)
3. Test ensure model accuracy
4. Documentation is accessible and easily updated
5. Use macros to write reusable SQL

#### Core 1: Express Transforms with SQL Select

- Everything is a SELECT Statement
	- Express business logic in SQL
		- No need to write boilerplate code
	- Idempotence → repeatable builds
	- Materialize modes with different configuration
	- Transform code is very accessible
- dbt generated the DDL at run time
	- dbt model

```sql
	  {{ config(materialized=table) }}
	  
	  select *
	  from public.orders
	  where is_deleted = false
	  ```

- What runs in the database

```sql
	  create table analytics.orders as (
	      select *
	      from public.orders
	      where is_deleted = false
	  )
	  ```

- dbt supports several materialization strategies
	1. Table

```sql
	   create table analytics.orders as (...)
	   ```

2. View

```sql
	   create view analytics.orders as (...)
	   ```

3. Ephemeral
		- Model 1 Interpolated into Model 2
	4. Incremental (Advanced)
	5. Build your own

#### Core 2: Express Relationships with `{{ ref() }}` Statement

- The `{{ ref(…) }}` statement automatically handles dependencies in dbt models
	- Interpolates the name of your schema
	- Builds an edge in the DAG between two models
		- helps dbt understand dependencies
	- Use it like you would any table

```sql
	  selet * from {{ ref('MODEL_NAME') }}
	  ```

![[2022-11-17_14-16-54.png]]

[[2022-11-17_14-16-54.png]]

#### Core 3: Easily Build Tests to Ensure Model Accuracy

- dbt has a framework for testing your models and datasets
	- A core part of a mature dbt project
	- Test assumptions we make about our data
	- Assumptions are written in a `.yml` file
	- These assumptions get compiled to SQL that returns failing records
	- Out of the box, dbt can test if a column:
		- is unique
		- doesn't contain nulls
		- Only contains certain values
		- Is a foreign key to another table
	- You can test anything that can be written as a query
- ![[2022-11-17_14-36-57.png]]

#### Core 4: Documentation is Accessible and Easily Updated

- When dbt generates documentation, it takes many aspects into account
	- Everthing it knows about your project
		- Descriptions (from the `.yml` file)
		- Model dependencies
		- Model SQL
		- Sources
		- Tests
	- Additional things about your warehouse (from information schema)\
		- Column names and types
		- Table Stats
	- @
