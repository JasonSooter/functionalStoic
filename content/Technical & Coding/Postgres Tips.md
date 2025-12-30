---
date created: 2023-02-22T14:55:39-07:00
date modified: 2025-09-08T09:33:28-06:00
linter-yaml-title-alias: Postgres Tips
title: Postgres Tips
---
# Postgres Tips

## Changelog

## Resources

## Action Items

## FAQ

---
🙋 How can you duplicate a table in Postgres?

✨

```sql
CREATE TABLE dupe_users AS (SELECT * FROM users);

-- The `with no data` here means structure only, no actual rows
create table dupe_users as (select * from users) with no data;
```

---
🙋 If an `INSERT` query is made that conflicts with an existing row, an error is returned (`duplicate key violation`). How can you UPSERT instead of just INSERT? ([source](https://twilio.slack.com/archives/C05P5SEPFQB/p1698733783848569))

✨Since PostgreSQL 9.5, [UPSERT](http://www.postgresql.org/docs/devel/static/sql-insert.html) syntax can be accomplished with **[ON CONFLICT](http://www.postgresql.org/docs/current/static/sql-insert.html#SQL-ON-CONFLICT) clause.** Here is an example with the following syntax (similar to MySQL)

```sql
INSERT INTO the_table (id, column_1, column_2) 
VALUES (1, 'A', 'X'), (2, 'B', 'Y'), (3, 'C', 'Z')
ON CONFLICT (id) DO UPDATE 
  SET column_1 = excluded.column_1, 
      column_2 = excluded.column_2;
```

[Source](https://stackoverflow.com/a/1109198/13306134)

---
