---
tags:
  - tools/diagramming
date created: 2023-02-22T14:55:39-07:00
date modified: 2025-09-08T09:33:24-06:00
title: Diagramming
linter-yaml-title-alias: Diagramming
aliases:
  - Diagram Tools
  - Mermaid JS
  - Mermaid.js
  - Lucidchart
---
# Diagramming

- [[#Lucidchart]]
- [[#dbdiagram.io]]
- [[#Mermaid.js]]
- [[#Web Sequence Diagrams]]

## Lucidchart

### Changelog

### Resources

- [Lucidchart 101](https://training.lucid.co/path/lucidchart-101)
- [Lucidchart](https://wiki.hq.twilio.com/display/SALESENG/Lucidchart?src=contextnavpagetreemode)
	- [Getting Started with Lucidchart](https://wiki.hq.twilio.com/display/SALESENG/Getting+Started+with+Lucidchart?src=contextnavpagetreemode)
	- [Lucidchart for Admins / IT Team](https://wiki.hq.twilio.com/pages/viewpage.action?pageId=270853245&src=contextnavpagetreemode)
	- [Lucidchart for SE Majors](https://wiki.hq.twilio.com/display/SALESENG/Lucidchart+for+SE+Majors?src=contextnavpagetreemode)
	- [Lucidchart Sample Diagrams](https://wiki.hq.twilio.com/display/SALESENG/Lucidchart+Sample+Diagrams?src=contextnavpagetreemode)
	- [Lucidchart Shapes](https://wiki.hq.twilio.com/display/SALESENG/Lucidchart+Shapes?src=contextnavpagetreemode)

### Action Items

### FAQ

---
🙋
✨
[Source]()

---

## dbdiagram.io

- [dbdiagram.io](https://dbdiagram.io)
- a free tool that helps you design a database easily
- Shared by Sean for JPMC Wheatley File Ingestion

### Changelog

### Resources

- DBML - Database Markup Language
	- [DBML - Database Markup Language | DBML](https://www.dbml.org/home/)
	- [dbdiagram.io - Database Relationship Diagrams Design Tool](https://dbdiagram.io/home?utm_source=dbml)
	- [dbdocs.io - Database Documentation and Catalog Tool](https://dbdocs.io/?utm_source=dbml)

### Action Items

### FAQ

---
🙋
✨

[Source]()

---

Here are a few tips to help you get started.

### How To Use Dbdiagram

The tool is simple: you write code, it renders the ER diagram. You can then export to PDF, PNG or generate SQL code with it!.

![Dbdiagram demo](https://ci6.googleusercontent.com/proxy/jggFhrFZ5N8edOKBLvskfYTvkUEeOQbwJRJk5l4bq_xs0NGx7a06v8AToIDuw2K9m_vJj7hv87_FThn2zTY=s0-d-e1-ft#https://cdn.holistics.io/dbdiagram-demo.gif)

_(turn on image to see an automated screenshot of dbdiagram)_

### About Our Markup Language Syntax (DBML)

We use [DBML (database markup language)](https://urldefense.com/v3/__http://email.ops.mg.holistics.io/c/eJwdjLtuxCAQRb_GNJEQzDBeKCi2SZE2H7DCPGwi2FkZov39WJFucXSkc7PX6wq3lW6kRfLFGhuLqB4UgHLKAQKgkqTQYbSIqA2YUBaj-DVk3-XBrY5Z45CVxeGzy2sMCSIRFad1JmtJJ7OhybEoEs0fc77GgvcFPq-lrTfJ536hOP3PYJ75vO7nu7bKMnIX06ct1bCfoT_euV0qi_Lb2uMZevZfYfDz4_u_-wN1Kz_g__;!!NCc8flgU!cWRqDJHtCTSD_sTdzMnqJgDODJpswTPZx9yZBUK7TnBtt2ICheVDOiwYAPI2gzC3dvBv9COv2yCiK3F4hF_kqw$), a markup language to define and document database schemas.

See below for an example code that defines an ecommerce site, go ahead and copy and paste this into the editor to see the final diagram

```
Table orders {
  id int [pk]
  user_id int [not null, unique]
  status varchar
  created_at varchar [note: "When order created"]
}

Table order_items {
  order_id int [ref: > orders.id]
  product_id int
  quantity int
}

// You can define relationship inline or separate
Ref: order_items.product_id > products.id

Table products {
  id int [pk]
  name varchar
  merchant_id int [not null]
  price int
  status varchar
  created_at varchar
}

Table users {
  id int [primary key]
  full_name varchar
  email varchar [unique]
  gender varchar
  date_of_birth varchar
  created_at varchar
  country_code int [ref: > countries.code]
}

Table merchants {
  id int [primary key]
  merchant_name varchar
  country_code int [ref: > countries.code]
  created_at varchar
  admin_id int
}

Table countries {
  code int [primary key]
  name varchar
  continent_name varchar
}

Ref: products.merchant_id > merchants.id
Ref: merchants.admin_id > users.id
```

For a full documentation on the syntax, please see the our [DBML project page](https://urldefense.com/v3/__http://email.ops.mg.holistics.io/c/eJw9TTFuxCAQfI1pIiG8i20oKNKkSJsHnNaw2ERwnAyn-35Iikgjzc5oZofdvK6wrcu2zCK4aLTxUSQHCkBZZQEBUMlFoUVvEHHWoClOWtVHk-WQZ82p9eSbTFWcjhEDja7eKRq_MSnLs6XABnmBEEV2Z--PNuH7BB8DR-rnc5e-liH-n4077CUPEpf7brV2vsZmf6Wc6m9YdBf2kOi4qNxenIfFIj5zvt2psPukVu9vX3-9HzHgR-g__;!!NCc8flgU!cWRqDJHtCTSD_sTdzMnqJgDODJpswTPZx9yZBUK7TnBtt2ICheVDOiwYAPI2gzC3dvBv9COv2yCiK3EQ3ioavw$).

## Mermaid JS

![[Obsidian]]

### Changelog

### Resources

### Action Items

## Web Sequence Diagrams

### Changelog

### Resources

- <https://www.websequencediagrams.com/>
- [Examples](https://www.websequencediagrams.com/examples.html)
	- [Simple signals](https://www.websequencediagrams.com/examples.html#simple-signals)
	- [Changing the order of participants](https://www.websequencediagrams.com/examples.html#changing-order)
	- [Actors](https://www.websequencediagrams.com/examples.html#actors)
	- [Signal to self](https://www.websequencediagrams.com/examples.html#signal-to-self)
	- [Expressing loops and conditionals](https://www.websequencediagrams.com/examples.html#grouping)
	- [Notes in the diagram](https://www.websequencediagrams.com/examples.html#notes)
	- [States](https://www.websequencediagrams.com/examples.html#states)
	- [Lifeline activation and destruction](https://www.websequencediagrams.com/examples.html#activation)
	- [Including saved diagrams in other diagrams](https://www.websequencediagrams.com/examples.html#include)
	- [Referencing other sequences](https://www.websequencediagrams.com/examples.html#reference)
	- [Parallel sequences](https://www.websequencediagrams.com/examples.html#parallel)
	- [Automatic numbering](https://www.websequencediagrams.com/examples.html#autonumbering)
	- [Changing the bottom of participants](https://www.websequencediagrams.com/examples.html#footer)
