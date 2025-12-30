---
title: About Secure Data Sharing
linter-yaml-title-alias: About Secure Data Sharing
date created: 2025-08-31T08:38:14-06:00
date modified: 2025-09-08T09:27:56-06:00
aliases: About Secure Data Sharing
---
# About Secure Data Sharing

<div style="text-align: center;">
		<img src="https://readwise-assets.s3.amazonaws.com/static/images/article0.00998d930354.png" width="500px">
</div>

## Metadata

- Author: #people/authors/snowflakecom
- Full Title: About Secure Data Sharing
- Category: #articles
- Summary: Secure Data Sharing in Snowflake allows users to share database objects with other accounts without transferring actual data. Shared objects are read-only and do not take up storage in the consumer account, only incurring costs for compute resources used to query the data. Providers can create shares and control access, while consumers can access the shared data easily and quickly.
- URL: https://docs.snowflake.com/en/user-guide/data-sharing-intro

```dataview
task
where !completed and file.name = this.file.name
```

## Highlights

- [Secure Data Sharing](https://docs.snowflake.com/en/user-guide/data-sharing-intro)
	- [Create and configure shares](https://docs.snowflake.com/en/user-guide/data-sharing-provider)
	- [Share secure database objects](https://docs.snowflake.com/en/user-guide/data-sharing-gs)
	- [Share data from multiple databases](https://docs.snowflake.com/en/user-guide/data-sharing-multiple-db)
	- [Share data across regions and cloud platforms](https://docs.snowflake.com/en/user-guide/secure-data-sharing-across-regions-platforms)
	- [Share data in non-secured views](https://docs.snowflake.com/en/user-guide/data-sharing-views)
	- [Share data protected by a policy](https://docs.snowflake.com/en/user-guide/data-sharing-policy-protected-data)
	- [Use secure objects to control data access](https://docs.snowflake.com/en/user-guide/data-sharing-secure-views)
	- [Configure a reader account](https://docs.snowflake.com/en/user-guide/data-sharing-reader-config)
	- [Manage reader accounts](https://docs.snowflake.com/en/user-guide/data-sharing-reader-create)
	- [Enable non-ACCOUNTADMIN roles to perform data sharing tasks](https://docs.snowflake.com/en/user-guide/security-access-privileges-shares)
	- [Enable sharing from a Business Critical Account to a non-Business Critical Account](https://docs.snowflake.com/en/user-guide/override_share_restrictions)
	- [Grant privileges to other roles](https://docs.snowflake.com/en/user-guide/data-exchange-marketplace-privileges)
	- [Consume shared data](https://docs.snowflake.com/en/user-guide/data-share-consumers) ([View Highlight](https://read.readwise.io/read/01j4sseeryed49bcadgq551qw9))
- You can share the following Snowflake objects:
	- Databases
	- Tables
	- Dynamic tables
	- External tables
	- Iceberg tables
	- Secure views
	- Secure materialized views
	- Secure user-defined functions (UDFs) ([View Highlight](https://read.readwise.io/read/01j4sskpdpj95xttxcnzthqgby))
- ![Overview of provider accounts sharing data with consumer accounts](https://docs.snowflake.com/en/user-guide/data-sharing-intro/../_images/data-sharing-overview.png) ([View Highlight](https://read.readwise.io/read/01j4ssk0cz8n06bnd9cvjkh7p5))
- What is a share? ([View Highlight](https://read.readwise.io/read/01j4ssj61jczhrh1n68ydm4jqt))
- ![Relationship between databases, database objects, shares, and accounts](https://docs.snowflake.com/en/user-guide/data-sharing-intro/../_images/data-sharing-shares.png) ([View Highlight](https://read.readwise.io/read/01j4ssk62sdephf92wcbpnnq9h))
- Secure Data Sharing lets you share selected objects in a database in your account with other Snowflake accounts. ([View Highlight](https://read.readwise.io/read/01j4sr1drd71bm7z5rp249908h))
- You can share the following Snowflake objects:
	- Databases
	- Tables
	- Dynamic tables
	- External tables
	- Iceberg tables
	- Secure views
	- Secure materialized views
	- Secure user-defined functions (UDFs) ([View Highlight](https://read.readwise.io/read/01j4sr1jt6ygc5znqy1j1k2fs1))
- Snowflake enables the sharing of databases through *shares*, which are created by data providers and “imported” by data consumers. ([View Highlight](https://read.readwise.io/read/01j4sr1re5c7tn23wgr14ht794))
- All database objects shared between accounts are read-only (i.e. the objects cannot be modified or deleted, including adding or modifying table data). ([View Highlight](https://read.readwise.io/read/01j4sr21qpenekw4r95e97wsmd))
- How does Secure Data Sharing work? ([View Highlight](https://read.readwise.io/read/01j4sr254b2qbr5jetvm4j06nd))
- With Secure Data Sharing, no actual data is copied or transferred between accounts ([View Highlight](https://read.readwise.io/read/01j4sr291jw16bjhvxpm57dqg6))
- All sharing uses Snowflake’s services layer ([View Highlight](https://read.readwise.io/read/01j4sr2hg841rh6e68thhv1a8k))
- Shared data does not take up any storage in a consumer account and therefore does not contribute to the consumer’s monthly data storage charges. ([View Highlight](https://read.readwise.io/read/01j4sr2red0ptw46jswezetjqg))
- The only charges to consumers are for the compute resources (i.e. virtual warehouses) used to query the shared data. ([View Highlight](https://read.readwise.io/read/01j4sr3137kej3xn3eb7nza0ne))
- Because no data is copied or exchanged, Secure Data Sharing setup is quick and easy for providers and access to the shared data is near-instantaneous for consumers: ([View Highlight](https://read.readwise.io/read/01j4sr3ad8qs0gt1tjqjexqead))
- The provider creates a share of a database in their account and grants access to specific objects in the database. The provider can also share data from multiple databases, as long as these databases belong to the same account. One or more accounts are then added to the share, which can include your own accounts (if you have multiple Snowflake accounts).
	For more details, refer to [What is a share?](https://docs.snowflake.com/en/user-guide/data-sharing-intro#label-what-is-a-share) (in this topic). ([View Highlight](https://read.readwise.io/read/01j4sr4a99g6wkyzyqb1p6fqnj))
- On the consumer side, a read-only database is created from the share. Access to this database is configurable using the same, standard role-based access control that Snowflake provides for all objects in the system. ([View Highlight](https://read.readwise.io/read/01j4sr4etm51yqcgh9dgzw8qke))
- With this architecture, Snowflake enables a network of providers that can share data with multiple consumers (including within their own organization) and consumers that can access shared data from multiple providers:
	![](https://docs.snowflake.com/en/_images/data-sharing-overview.png) ([View Highlight](https://read.readwise.io/read/01j4sr4w9kffzxswq4jacm6akg))
- What is a share? ([View Highlight](https://read.readwise.io/read/01j4sr66mr6shxmvsd8ncwjv85))
- Shares are named Snowflake objects that encapsulate all of the information required to share a database. ([View Highlight](https://read.readwise.io/read/01j4sr6dh6k911sq7f03bznrxy))
- Data providers add Snowflake objects (databases, schemas, tables, secure views, etc.) to a share using either or both of the following options: ([View Highlight](https://read.readwise.io/read/01j4sr6rhrren58479gx1wdsbq))
- **Option 1:** Grant privileges on objects to a share via a database role. ([View Highlight](https://read.readwise.io/read/01j4sr6xhw46enmzee3r41b4ta))
- **Option 2:** Grant privileges on objects directly to a share. ([View Highlight](https://read.readwise.io/read/01j4sr72akw9ahrjqsxyxv54gg))
- For more information on these options, refer to [How to share database objects](https://docs.snowflake.com/en/user-guide/data-sharing-gs.html#label-data-sharing-share-options). ([View Highlight](https://read.readwise.io/read/01j4sr7s4g7pdmah8m5f0p7bxz))
- You choose which accounts can consume data from the share by adding the accounts to the share. ([View Highlight](https://read.readwise.io/read/01j4sr83nnhxda474zyd8hsp1q))
- After a database is created (in a consumer account) from a share, all the shared objects are accessible to users in the consumer account:
	![](https://docs.snowflake.com/en/_images/data-sharing-shares.png) ([View Highlight](https://read.readwise.io/read/01j4sr8d8grw6fhah965b8xe9m))
- Shares are secure, configurable, and controlled completely by the provider account: ([View Highlight](https://read.readwise.io/read/01j4sr8n1yj0b1mzgkj7aj16hm))
- New objects added to a share become immediately available to all consumers, providing real-time access to shared data. ([View Highlight](https://read.readwise.io/read/01j4srwtb6xb44wpmfn8wdapr1))
- Updates to existing objects in a share become immediately available to all consumers. ([View Highlight](https://read.readwise.io/read/01j4srx22s8q7nhy0n8mfstkpd))
- Access to a share (or any of the objects in a share) can be revoked at any time. ([View Highlight](https://read.readwise.io/read/01j4srx5nxxk0pnqbkrthd09pv))
- Options for sharing in Snowflake ([View Highlight](https://read.readwise.io/read/01j4srxh9cf4qvxt8tng33tyv2))
- You can share data in Snowflake using one of the following options: ([View Highlight](https://read.readwise.io/read/01j4srxjzgtc3w515jyrcvqky7))
- a Listing, in which you offer a share and additional metadata as a data product to one or more accounts, ([View Highlight](https://read.readwise.io/read/01j4sry0b0bybmjft9n2fb1c2m))
- a Direct Share, in which you directly share specific database objects (a share) to another account in your region, ([View Highlight](https://read.readwise.io/read/01j4sry39vjgc42e61ex47zbfr))
- a Data Exchange, in which you set up and manage a group of accounts and offer a share to that group. ([View Highlight](https://read.readwise.io/read/01j4sry8xcaqyfprhdqw5y3xty))
- You can also convert a direct share to a listing. For instructions, see [Convert a direct share to a listing](https://other-docs.snowflake.com/en/collaboration/provider-listings-creating-publishing#convert-a-direct-share-to-a-private-listing). ([View Highlight](https://read.readwise.io/read/01j4srymbgjvgeyhn5jyfrm1kj))
- Overview of data providers and consumers ([View Highlight](https://read.readwise.io/read/01j4srz3zq7qcbnhzcydrct3fw))
- When sharing in Snowflake, the account that shares data is called a provider, and the account that is a recipient of the data is called a consumer. ([View Highlight](https://read.readwise.io/read/01j4srzdd2vcatj7drwpk5mnj4))
- About providers ([View Highlight](https://read.readwise.io/read/01j4srzkw4gy8ydzazseahd8xr))
- A data provider is any Snowflake account that creates shares and makes them available to other Snowflake accounts to consume. As a data provider, you share a database with one or more Snowflake accounts. For each database you share, Snowflake supports using grants to provide granular access control to selected objects in the database (i.e., you grant access privileges for one or more specific objects in the database). ([View Highlight](https://read.readwise.io/read/01j4ss0atxqvdvwemybwpz181r))
- You can create as many shares as you want, ([View Highlight](https://read.readwise.io/read/01j4ss0p29fayn3d69zdmbcwhd))
- and add as many accounts to a share as you want. ([View Highlight](https://read.readwise.io/read/01j4ss11nq37vawtv0faqshz1z))
- For a guide to sharing data as a provider, refer to [Share secure database objects](https://docs.snowflake.com/en/user-guide/data-sharing-gs). For more detailed information, refer to [Create and configure shares](https://docs.snowflake.com/en/user-guide/data-sharing-provider). ([View Highlight](https://read.readwise.io/read/01j4ss1tzjg81411h50w2jmgzz))
- If you want to provide a share to many accounts, you might want to use a [listing](https://other-docs.snowflake.com/en/collaboration/collaboration-listings-about.html) or a [data exchange](https://docs.snowflake.com/en/user-guide/data-exchange). ([View Highlight](https://read.readwise.io/read/01j4ss21g4gzm2z25wh2wqdrkn))
- About consumers ([View Highlight](https://read.readwise.io/read/01j4ss1znb0hc8emr0gmkyxyev))
- A data consumer is any account that chooses to create a database from a share made available by a data provider. ([View Highlight](https://read.readwise.io/read/01j4ss2q8vxxmhsjstp18zxpyf))
- As a data consumer, after you add a shared database to your account, you can access and query the objects in the database as with any other database in your account. ([View Highlight](https://read.readwise.io/read/01j4ss2x010b5tg0pzf5sz76a3))
- You can consume as many shares as you want from data providers, but you can only create one database per share. ([View Highlight](https://read.readwise.io/read/01j4ss35mgpkn7d0zrg1v1dsm9))
- For more details, refer to [Consume shared data](https://docs.snowflake.com/en/user-guide/data-share-consumers). ([View Highlight](https://read.readwise.io/read/01j4ss395023zc90bahw1d0x9v))
