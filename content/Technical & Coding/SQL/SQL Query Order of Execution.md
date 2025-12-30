---
date created: 2023-06-02T15:09:39-06:00
date modified: 2025-09-08T09:33:28-06:00
title: SQL Query Order of Execution
---
# SQL Query Order of Execution

What is the 𝗦𝗤𝗟 𝗤𝘂𝗲𝗿𝘆 𝗼𝗿𝗱𝗲𝗿 𝗼𝗳 𝗘𝘅𝗲𝗰𝘂𝘁𝗶𝗼𝗻?

There are many steps involved in optimising your SQL Queries. It is helpful to understand the order of SQL Query Execution as we might have constructed a different picture mentally.

The actual order is as follows:

𝟭. 𝗙𝗥𝗢𝗠 𝗮𝗻𝗱 𝗝𝗢𝗜𝗡: determine the base data of interest.
𝟮. 𝗪𝗛𝗘𝗥𝗘: filter base data of interest to retain only the data that meets the where clause.
𝟯. 𝗚𝗥𝗢𝗨𝗣 𝗕𝗬: group the filtered data by a specific column or multiple columns. Groups are used to calculate aggregates for selected columns.
𝟰. 𝗛𝗔𝗩𝗜𝗡𝗚: filter data again by defining constraints on the columns that we grouped by.
𝟱. 𝗦𝗘𝗟𝗘𝗖𝗧: select a subset of columns from the filtered grouped result. This is also where 𝗪𝗜𝗡𝗗𝗢𝗪 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗮𝗴𝗴𝗿𝗲𝗴𝗮𝘁𝗶𝗼𝗻𝘀 happen.
𝟲. 𝗢𝗥𝗗𝗘𝗥 𝗕𝗬: order the result by one or multiple columns.
𝟳. 𝗟𝗜𝗠𝗜𝗧: only retain the top n rows from the ordered result.

Below is a nice way to visualise it.

![[SQL Query Order of Execution.jpeg]]
