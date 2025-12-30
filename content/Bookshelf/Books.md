---
title: Books 📚
date created: 2025-08-16T16:35:00-06:00
date modified: 2025-09-08T09:27:56-06:00
aliases:
  - Reading List
  - Book Tracker
  - Library
tags:
  - note-type/table-of-contents
  - books/index
---
# Books 📚

Welcome to your comprehensive book tracking system! This Obsidian vault contains Dan's extensive reading list of **3,595 books** spanning from Pre-1966 to present day.

## Quick Navigation

### 📊 **Reading Dashboard**

- [[Reading Goals]] - Annual reading targets and progress
- [[Reading Stats]] - Statistics and insights from your reading
- [[Currently Reading]] - Books you're actively reading
- [[Recently Finished]] - Your most recent completions

### 📖 **Book Organization**

- [What Dan Read Complete Book List](https://airtable.com/appFzlLnKGAzJuo6d/tblhXhHiQ7seyda9D/viwvIuGfOYtRxg9Cw) - Full master list (3,595 books) in Airtable

### 👨‍💼 **Authors & Categories**

- [[Authors]] - Author profiles and their works
- [[Genres]] - Books organized by genre/category
- [[Publishers]] - Publishers and publishing insights

### 🔍 **Discovery & Planning**

- [[To Read List]] - Future reading queue
- [[Book Recommendations]] - Suggestions and their sources
- [[Reading Challenges]] - Book challenges and themed reading
- [[Book Club]] - Group reading activities

### 📝 **Notes & Reviews**

- [[Highlights & Notes]] - Key passages and insights
- [[Book Reviews]] - Personal reviews and ratings
- [[Reading Journal]] - Thoughts and reflections

---

## Recent Activity

```dataview
TABLE WITHOUT ID
  file.link as "Book",
  author as "Author", 
  status as "Status",
  date-finished as "Date"
FROM "Bookshelf/Individual Books"
WHERE status = "finished" OR status = "reading"
SORT date-modified DESC
LIMIT 10
```

---

## Statistics Overview

```dataview
TABLE WITHOUT ID
  length(rows.file) as "Count"
FROM "Bookshelf/Individual Books"
WHERE status
GROUP BY status as "Status"
```

---

## Tools & Templates

### Templates

- [[Book Note Template]] - Standard template for individual book notes
- [[Author Template]] - Template for author pages
- [[Reading Goal Template]] - Template for yearly reading goals

### Utilities

- [[Book Import Tools]] - Scripts and tools for importing book data
- [[Reading Analytics]] - Advanced analytics and visualizations

---

## Getting Started

1. **Set Your Reading Goals**: Visit [[Reading Goals]] to set up your annual targets
2. **Import Your Books**: Use [[Book Import Tools]] to add books to your system
3. **Start Tracking**: Create individual book notes using [[Book Note Template]]
4. **Explore**: Browse by [[Authors]], [[Genres]], or [[Reading Challenges]]