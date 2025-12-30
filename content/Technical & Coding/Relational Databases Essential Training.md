---
date created: 2024-08-14T18:44:51-06:00
date modified: 2024-08-21T17:39:15-06:00
linter-yaml-title-alias: Relational Databases Essential Training
title: Relational Databases Essential Training
---
# Relational Databases Essential Training

## Summary

## Learning Objectives

- The basics of data storage
- Choosing an entity-relationship design tool
- Using primary keys to identify records
- What to consider when naming objects
- Creating a unique constraint
- Establishing table indexes
- Relating tables with foreign keys
- One-to-many and one-to-one relationships
- Normalization
- Writing SELECT queries in SQL

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

### The Relational Model

- Developed by Data Scientist E.F. Codd
	- "A Relational Model of Data for Large Shared Data Banks" published in 1970
- Separated the retrieval of information from its storage
- Defined rules to organize data across multiple related tables
![[The Pictures Database.png]]

### CRUD

Create
Read
Update
Delete

### SQL

SQL: Structured Query Language

### Database Terms

#### Database Components

- Relations === Tables
	- Main storage device having
		- Columns: also known as Fields or Attributes
		- Records: also known as Rows
- Domains === Columns
	-
- Tuples === Records

### Building a Relational Database

1. Identify the facts it needs to store
2. Think about what you want to get out of the databse
3. Identify the analyses or reports that would be beneficial to have at the end of the process

#### Designing Tables

- Group facts into themed table groups
- Consider tables as "nouns" that will collect information about people, places, things, or events
- Columns within the table will store "adjectives" or descriptive details about each topic

#### Organize Facts

- Use sticky notes or index cards for each column
- Place into piles to represent tables
- Evaluate the groupings and rearrange as needed

### Entity Relationship Diagram

- ERD
![[Entity Relationship Diagram Example.png]]

UML: Unified Modeling Language Notation
- [ ] Decide on the UML type I want to use

### ER Design Tools

- DBDiagrams.io
	- <https://dbdiagrams.io>
	- My favorite option
- Lucidchart
	- Includes ERD diagram options, but it is GUI only
- SQL Database Modeler
	- <https://sqldbm.com>
- Quick Database Diagrams
	- <https://quickdatabasediagrams.com>
	- Only 1 diagram included with free account

### Primary Keys

- Guaranteed unique, forever
- Look for unique identifiers naturally present in your data (ISBN, etc)
- May be a concatenation or composite key using multiple columns
- Surrogate keys: use if no ID exists

### Object Naming

- Be consistent with capitalization
- Avoid Spaces
- Avoid Reserved Words
	- internal function & command
- Plural vs. Singular
	- Be consistent
- Avoid Acronyms
	- Use full, legible words
	- Clearly describe the table & schemas
- #1 Rule — BE CONSISTENT

### Data Constraints

- Unique Values
	- Each value in a column will only appear once
- Constraints are often based on Business Rules (implicit or explicit)
