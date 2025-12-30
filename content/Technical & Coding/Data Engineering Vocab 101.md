---
title: Data Engineering Vocab 101
date created: 2023-02-22T14:55:39-07:00
date modified: 2025-09-08T09:33:29-06:00
---
# Data Engineering Vocab 101

![[Pasted image 20230216095900.png]]

                                         Data Engineering Vocab 101

                                   A star schema is a multi-dimensional data model used to organize

     Star Schema                  data in a database in a way that is geared towards analytics.

                                  It's called a star schema because there is usually a central fact

                                        table with several dimension tables that surround it.

                                    A DAG or Directed Acyclic Graph in the data engineering worlds

                                   refers to a conceptual representation of tasks. Many are first

            DAG,                 introduced to this idea via Airflow. There can be simple DAGs such

                                     as A->B->C or more complex such as A->B, A->C, C->D, B->D.

                                    Another common concept is ETL/ELTs which letters stand for Extract,                      Extract       Transform, Load. These patterns can often be built into DAGs but       ETL/ELT    Transform     represent a process of pulling data from source systems and then at

                       Load. 1         some point running business logic over it prior to loading into

                                                           a data warehouse

                                    In the past many data engineers had to write/rewrite the same

 Data Connectors                 code over and over again to pull data from databases, APIs and

                    APIother sources. Now there are several solutions that exist that just

                                   act as a layer to connect to hundreds of possible data sources.

                                         The term 'data lake' was coined around 2010. Data lakes

                                     became popular because they offer a solution to the rapidly increasing

    Data Lake                            size and complexity of data. As defined by TechTarget:

                                       "A data lake is a storage repository that holds a vast amount

                                   of raw data in its native format until it is needed for analytics applications

                                   A data warehouse is a central repository of information that can

Data Warehouse                be analyzed to make more informed decisions. Or as put by Bill Inmon

                                      it's a "subject-oriented, nonvolatile, integrated, time-variant

                                       collection of data in support of management's decisions."

  MPP(massively                    MPP is a processing paradigm which as the name suggests, takes the idea of

                                  parallel processing to the extreme. It uses hundreds or thousands of processingparallel processing)                 nodes to work on parts of a computational task in parallel. These nodes each

                                             have their own I/0 and 05 and don't share memory.
