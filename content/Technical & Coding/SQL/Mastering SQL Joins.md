---
title: Mastering SQL Joins
date created: 2024-12-26T11:52:22-07:00
date modified: 2025-01-26T19:23:35-07:00
---
# Mastering SQL Joins

## Metadata

- Author: #people/authors/dane-wade
- Full Title: Mastering [[SQL]] Joins: A Quick Handbook on Mastering SQL Joins With Practical Exercises
- Category: #books
- Summary: The text is a guide about SQL joins, focusing on the most common types: CROSS JOIN, INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL JOIN. It explains how to implement each join using practical examples and datasets. The author aims to help readers master these concepts through exercises and clear explanations.

## Highlights

- a SQL JOIN is based on the basis relational algebra concept– Cartesian Product. ([View Highlight](https://read.readwise.io/read/01jg242sspra4t2khk9a67eb60))
- In relational algebra, a cartesian product or cross product is actually a combination of every
	record present in the first table with every record present in the second table. ([View Highlight](https://read.readwise.io/read/01jg24300zmvyhqxw0jzf3bqgf))
- Let me explain this with an example :
	Suppose we have 2 tables, table 1: **Students** and table 2: **Subjects**. ([View Highlight](https://read.readwise.io/read/01jg243sv772pssy9sbvjw67yb))
- ![](https://readwise-assets.s3.amazonaws.com/media/reader/parsed_document_assets/252958435/_GNCs279phZYSNp7jMgx1B2svE0JyisbTD2gaCMaZPk-id15_MncEEbf.jpg) ([View Highlight](https://read.readwise.io/read/01jg243w1g3gxzrwf7vnntyfcz))
- ![](https://readwise-assets.s3.amazonaws.com/media/reader/parsed_document_assets/252958435/YlTY3HgjR8TvHUsH1WwbXHeVLrg3hXdQwT_MHpefMQE-id22_6efcmJA.jpg) ([View Highlight](https://read.readwise.io/read/01jg243ycvbjxzv3dm28cvtm34))
- Now the cartesian product of these two tables/datasets can also be represented as (Students X Subjects), and the output of the cartesian or cross product will look something like this: ([View Highlight](https://read.readwise.io/read/01jg2448yyw8jpvcs4mwwjhh7z))
- ![](https://readwise-assets.s3.amazonaws.com/media/reader/parsed_document_assets/252958435/Ch92Oe7FVG3xXVIqwKjFxkGtGg_-4FVHlc2DPfKM0wc-id38_9tCBit3.jpg) ([View Highlight](https://read.readwise.io/read/01jg244deg3m6qj9ye0whntcyg))
- If you look closely, you will observe that each record that is present in Table 1 ( **Students** ) is
	combined with each record present in Table 2 ( **Subjects**). ([View Highlight](https://read.readwise.io/read/01jg245jx3gygepz43r9ebgs80))
- This is the core concept that is working behind the scenes when we are combing datasets. ([View Highlight](https://read.readwise.io/read/01jg245fq9j8qyzrephsrvewh2))
- the most common ones in
	this short guide. These JOINS are: ([View Highlight](https://read.readwise.io/read/01jg246141g9dd2gz9n5e55d6k))
- 1) CROSS JOIN
	1. INNER JOIN
	2. LEFT JOIN
	3. RIGHT JOIN
	4. FULL JOIN ([View Highlight](https://read.readwise.io/read/01jg246cte710w8z7640k2wye0))
- CROSS JOIN ([View Highlight](https://read.readwise.io/read/01jg2472b82y9nye7mdkq35azg))
- CROSS JOIN is a type of SQL JOIN that simply does a CROSS PRODUCT of records from Table 1 and Table 2 ([View Highlight](https://read.readwise.io/read/01jg248grt3gk52mq1trexxvk0))
- So, If there are 3 records present in Table 1 and there are 4 records present in table 2.
	Then the final dataset after implementing the CROSS JOIN will have 3 X 4 records, i.e., 12 total combinations of records.
	This is because each record present in Table 1 will create a combination with each record present in Table 2. ([View Highlight](https://read.readwise.io/read/01jg248vvw27r7te3vrvq8ybh9))
- The Key Idea or purpose of this CROSS JOIN is to present ALL POSSIBLE COMBINATIONS of datasets on which the JOIN is implemented. ([View Highlight](https://read.readwise.io/read/01jg249kqw3qjw9e0230axk7cg))

## New Highlights Added December 26, 2024 at 1:51 PM

- Although on the surface, it seems that the practical implementation of the CROSS JOIN concept might not be much useful. And I agree developers use other JOIN types much more than this one, but still, this CROSS JOIN concept is sometimes used to analyze data. ([View Highlight](https://read.readwise.io/read/01jg2a638mryb1mwnqszp7aej7))

## INNER JOIN

- INNER JOIN is used to select records that have matching records present in both the tables ([View Highlight](https://read.readwise.io/read/01jg2cd1wv7dsncw9dry0mtdac))
- suppose we have two different tables/datasets, and we want to extract records that are present in both datasets.
	In such cases, INNER JOIN *helps to extract only the matching records.* ([View Highlight](https://read.readwise.io/read/01jg2cdygka14x460reaw432m3))
- INNER JOIN requires a specific condition—Both the tables used in INNER JOIN should have a common column. ([View Highlight](https://read.readwise.io/read/01jg2ce5wyz2r5p0m6yhd7y0sn))
- This
	common column ( *present in both tables* ) should have matching data types and similar values. ([View Highlight](https://read.readwise.io/read/01jg2cehp9qarnpr4wmjp313eq))
- The syntax of INNER JOIN looks something like this: ([View Highlight](https://read.readwise.io/read/01jg2ch64g8c4r7h393sa862eg))

```sql
	SELECT ColumnNames
	FROM Table1
	INNER JOIN Table2
	ON Table1.ColumnA = Table2.ColumnA;
```

- ![](https://readwise-assets.s3.amazonaws.com/media/reader/parsed_document_assets/252958435/rZjGYBOwr85PC3-NSkLUUoiwocksY1MjzfvBPkoSH5s-id44_6FmzPVR.jpg) ([View Highlight](https://read.readwise.io/read/01jg2chrwf0pehj328gqp5mzrw))
- ***Figure*** ***5.1** Table 1 INNER JOIN Table 2* ([View Highlight](https://read.readwise.io/read/01jg2chz44nzc9jaemm3fv7cqp))
- As you can see in this illustration that in, the final OUTCOME is marked in **“Black”** here. That is the dataset that is COMMON and MATCHING in both of these tables.
	Hence, the INNER JOIN should return only this dataset. ([View Highlight](https://read.readwise.io/read/01jg2cjfn3arsp2cmv5wv53qm5))

### Green Shows the INNER JOIN Filtering of the CROSS JOIN Results

![[Inner Join Filtering of a Cross Join.png]]

## OUTER JOIN ([View Highlight](https://read.readwise.io/read/01jg2e86fp0x4evas3kvcyvy9x))

- JOINS are not only used to combine datasets to extract only the matching records. ([View Highlight](https://read.readwise.io/read/01jg2e8ea8hw7a7knjxcp3t6j8))
- INNER JOIN in SQL is used to display the records that match / present in both the tables on which the INNER JOIN is implemented ([View Highlight](https://read.readwise.io/read/01jg2e8pqzwrvfz24nv8z3qq55))
- type of JOIN where the final output can have UNMATCHED records. These types of JOINS are called OUTER JOINS. ([View Highlight](https://read.readwise.io/read/01jg2e9906v8pvg1tkp4t5djra))

## New Highlights Added December 26, 2024 at 3:51 PM

- There are 3 different types of OUTER JOINS in SQL, but the main concept of all 3 of them is the same ([View Highlight](https://read.readwise.io/read/01jg2fa3meyeyhf4vh6fqs7vcr))
- The result of OUTER JOIN will have unmatched records. ([View Highlight](https://read.readwise.io/read/01jg2faf07a49qhrgans0fz47k))
- These 3 different types of OUTER JOINS are: ([View Highlight](https://read.readwise.io/read/01jg2faheyd7map2c70kp29bs2))
- 1) LEFT OUTER JOIN or LEFT JOIN ([View Highlight](https://read.readwise.io/read/01jg2fakf9y1n3hn6efa257p80))
- 2) RIGHT OUTER JOIN or RIGHT JOIN ([View Highlight](https://read.readwise.io/read/01jg2famwwgs18cbsejg4f08d7))
- 3) FULL OUTER JOIN or FULL JOIN ([View Highlight](https://read.readwise.io/read/01jg2fap4eq1qjkynm25zzqgns))
- LEFT OUTER JOIN ([View Highlight](https://read.readwise.io/read/01jg2fasttrg90h8367z1f5rm8))
- LEFT OUTER JOIN displays ALL the records present in the LEFT table and ONLY the MATCHING records present in the RIGHT Table. ([View Highlight](https://read.readwise.io/read/01jg2fb6n794q47zqzdxm51g7d))
- The syntax of LEFT JOIN looks something like this: ([View Highlight](https://read.readwise.io/read/01jg2fcg8wnbne3jj8q5v762kh))
- **SELECT** ColumnNames
	**FROM** [Table1]
	**LEFT JOIN** [Table2]
	**ON** Table1.ColumnA=Table2.ColumnA; ([View Highlight](https://read.readwise.io/read/01jg2fcndptdc9gns1b8hy1aen))
- Below is a figure that clearly illustrates the concept of LEFT JOIN: ([View Highlight](https://read.readwise.io/read/01jg2fg2bgvatqarez33fcvsq2))
- ![](https://readwise-assets.s3.amazonaws.com/media/reader/parsed_document_assets/252958435/XCAcbJiupApB4bLrKqh_6dDF2emoVFrXoxcgZsNySTE-id32_QdGx9Ur.jpg) ([View Highlight](https://read.readwise.io/read/01jg2ffzbr6c1ec83cfgh4ctq2))
- **Figure 6.1** LEFT JOIN on Table 1 and Table 2 ([View Highlight](https://read.readwise.io/read/01jg2fgdsfsvgvqhss6yevcvg9))
- rules of LEFT JOIN, We should SELECT all records that are present in the LEFT table and ONLY the matching records present in the RIGHT table. ([View Highlight](https://read.readwise.io/read/01jg2ftahsyz7gs8mtkjbs4mfv))
- RIGHT OUTER JOIN OR RIGHT JOIN ([View Highlight](https://read.readwise.io/read/01jg2g6ymeb6q2w4jpj2tfjv44))
- The RIGHT OUTER JOIN selects ALL the records that are in the RIGHT table and then ONLY the matching records present in the LEFT table. ([View Highlight](https://read.readwise.io/read/01jg2ga8g9b0ys8sm901q2ttd6))
- The syntax of RIGHT JOIN looks something like this:
	**SELECT** ColumnNames
	**FROM** [Table1]
	**RIGHT JOIN** [Table2]
	**ON** Table1.ColumnA=Table2.ColumnA; ([View Highlight](https://read.readwise.io/read/01jg2gaf4c2bsnkaep6q1583yv))
- Below is a figure that clearly illustrates the concept of RIGHT JOIN: ([View Highlight](https://read.readwise.io/read/01jg2gake4h966eajj2md56afn))
- ![](https://readwise-assets.s3.amazonaws.com/media/reader/parsed_document_assets/252958435/lwnpXQJGa4Pma9efqnChGFney5w3nIV6jKnpwveo5Bo-id68_yLJ9q0I.jpg) ([View Highlight](https://read.readwise.io/read/01jg2ga0r2yez6gawac7fpmv4j))
- **Figure 6.6** Illustration for RIGHT JOIN ([View Highlight](https://read.readwise.io/read/01jg2gape3cjkthvmbv2f8bhdm))
- values that are only present in the RIGHT table and are not in the LEFT table will be populating NULL values in the final dataset against such records. ([View Highlight](https://read.readwise.io/read/01jg2gk9yhy6ze5e72vmj381ws))
- the record with NULL student_Id value is not matching with any value in the LEFT table. But as per the RIGHT JOIN concept, that record will appear in the final result even if it doesn’t have a matching value in the LEFT table. ([View Highlight](https://read.readwise.io/read/01jg2gm14tfekdh121fhdgbhmm))
- FULL OUTER JOIN or FULL JOIN is a type of JOIN that displays ALL the records present in both tables irrespective of the fact whether the records are MATCHING or NOT-MATCHING based on the common column present in both tables. ([View Highlight](https://read.readwise.io/read/01jg2h0vk23cvp2ws20ma5qbz8))
- FULL OUTER JOIN reflects the data that is present in both LEFT and RIGHT join. ([View Highlight](https://read.readwise.io/read/01jg2h106as6s1abwmw06he577))
- The syntax of FULL OUTER JOIN looks something like this: ([View Highlight](https://read.readwise.io/read/01jg2h17adn6xcwqeksxbs8kmj))
- **SELECT** ColumnNames
	**FROM** [Table1]
	**FULL OUTER JOIN** [Table2]
	**ON** Table1.ColumnA=Table2.ColumnA; ([View Highlight](https://read.readwise.io/read/01jg2h19683jw1nbtfp40cq0em))
- Below is a figure that clearly illustrates the concept ofFULL OUTER JOIN ([View Highlight](https://read.readwise.io/read/01jg2h1pkecaygrana3akt4qq1))
- ![](https://readwise-assets.s3.amazonaws.com/media/reader/parsed_document_assets/252958435/5V5UPbxqo7rvAaNNk1VBLLKPc-VoVuI3xSwl7BkHPTo-id28_uEhRjPG.jpg) ([View Highlight](https://read.readwise.io/read/01jg2h1g1zg6v736xj4ss6y430))
- **Figure 6.11** Table1 FULL OUTER JOIN Table2 ([View Highlight](https://read.readwise.io/read/01jg2h1s1askvf2n5fxpkf6pxn))
- display the employee rating with the final comments along with their name. However, the name should be a Combination of First Name and Last Name Separated by a blank and Should appear as Employee_Name in the final dataset. ([View Highlight](https://read.readwise.io/read/01jg2hm7dv96g8vr45rmcve7qs))

## New Highlights Added December 26, 2024 at 4:51 PM

- **1) Mathematical Functions**: Mathematical functions allow to create expressions to carry out
	mathematical operations. Some of these operations are –addition, subtraction, division, multiplication, etc. ([View Highlight](https://read.readwise.io/read/01jg2ks6wgn7187a71j98y2qwd))
- **For Example:** If I want to display the First_Name, Last_Name, and the salary of an employee incremented by 20%, who has a final rating of 4. ([View Highlight](https://read.readwise.io/read/01jg2ksd0q8t950xmwhcdry5h5))
- **2) String Functions:** String functions helps in carrying out the transformation and manipulation of text data. Some of these operations are changing cases of string values, trimming extra characters, matching patterns, and concatenation of string values. ([View Highlight](https://read.readwise.io/read/01jg2ks2pe2cr0je4pnfb1j9n7))
- **For Example:** Display the names of employees in the upper case along with their Final
	Performance review comments. ([View Highlight](https://read.readwise.io/read/01jg2ksjsvvnf53a8tgd29x8s8))
- **3) Date And Time Functions:** In SQL, Date And Time functions allow to perform operations and manipulations on the date and time column values. Some of these date and time functions are – DATEPART, DATEDIFF, DATEDIFF, etc. ([View Highlight](https://read.readwise.io/read/01jg2krtk2zcybe1axnp3g68ph))
- **For example:** Write a SQL query to retrieve the first name of the employees along with the
	extracted month from the review date. The extracted month should be displayed as a month name instead of a numeric value. That means 1 represents January, 2 represents February, and so on. ([View Highlight](https://read.readwise.io/read/01jg2ksqp2mgdm95azn7nn2pgz))
- 4) **Conditional Statements:** Conditional Statements in SQL helps in performing different operations and actions based on the different custom conditions. These custom conditions are created on the basis of desired output or requirements. ([View Highlight](https://read.readwise.io/read/01jg2krcr99vgjk28f9n4yv1bz))
- The most common conditional function that is used in SELECT is CASE Statements. ([View Highlight](https://read.readwise.io/read/01jg2kr84hkw5x80qek72crm12))
- **CASE statements:** CASE statements in SQL helps in performing conditional logic within the
	SELECT part of the query. CASE statements allow to have multiple conditions, and when a value satisfies any particular condition, then the result related to it is displayed. ([View Highlight](https://read.readwise.io/read/01jg2kr4qf8s6b47jxe11e7921))
- **For Example:**
	Display the first name, last name, final ratings, and rating status of all the employees. To
	calculate the rating status based on the final rating value, use below logic: ([View Highlight](https://read.readwise.io/read/01jg2ksxxhyawbtg4hmztc7xwc))
- When the final rating is 4 or above, the rating status should be "Top Rating". 2. When the final rating is between 2 and 4 , the rating status is "Average Rating". 3. When the final rating is 2 or below, the rating status is "Low Rating". 4. When there is no rating provided, the rating status is "No Rating Provided". ([View Highlight](https://read.readwise.io/read/01jg2kwb28h1p33mn5kzapc9tq))
- 5) SQL Conversion Functions ([View Highlight](https://read.readwise.io/read/01jg2m75b67w5q2mygmcv3yenz))
- In SQL, Conversion functions help in converting one datatype to another datatype. This helps in data cleaning and transformation requirements. Some common conversion functions are – CAST, CONVERT, TRY_CAST, TRY_CONVERT, etc. ([View Highlight](https://read.readwise.io/read/01jg2m7a74c6dctmtbr2zbd3b4))
- **For Example:** Display the first_name, Final Rating, and Review date in the output. The review
	date should be in datetime format instead of date format. ([View Highlight](https://read.readwise.io/read/01jg2m7g2bvdmrdk7qqfa50qzv))
- **For Example:** Display the average rating of employees for each department along with
	department_Id ([View Highlight](https://read.readwise.io/read/01jg2mdc489n14rm4cdcj46fc1))
- Calculated columns in SQL queries play an essential role in data transformation and cleaning. This plays an important role in data analysis, extracting meaningful insights, data management, and much more. ([View Highlight](https://read.readwise.io/read/01jg2mmq0d29p8r6jez505d1sf))
