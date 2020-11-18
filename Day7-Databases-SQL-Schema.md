# Databases, SQL, and Schema - PostgreSQL
## Databases
A database persists information and is accessible via code. (i.e, a place where you store information)
  - Organized
  - Queryable
  - Manageable

Relational databases use tables.
  - Table/Relation
    - Column/Attribute/Field
    - Row/Tuple/Instance

  ```sql
  SELECT id, name
    FROM pokemon
    WHERE type = 'lightning'
    LIMIT 1
  ```
### ACID Guarantees
In order for a database to have an ACID guarantee, they must meet these categories:

#### **A**tomicity
- A set of database operations that must occur together
  - e.g., a debit to one bank account, and a credit to another.
- A transaction must either succeed or fail; it cannot partially complete
  - If an error occurs at any operation, we want to rollback the entire transaction.
- Every database query is represented by a transaction.

#### **C**onsistency
- *Organization*
- Specify rules that columns need to follow
  - e.g., Gender column can only contain M,F,or U or savings account must start with S or checking with C
- Column cannot be null

#### **I**solation
- *Concurrency*
- Multiple clients can make queries to read and update without the risk of deadlock.

#### **D**urability
- Files are also persistence (store information without power).

### Resource Management
- Processes can be readers and writers.
- File can have many readers.
- If a process has a writer, no other process can read from it, and no other process can write to it.
- Amount of clients reading and writing information
  - Memory, computer CPU cycles,harddrive space
- User management - manageing users on your postgreSQL install


### Proposed File Scheme
- Suppose that we have decided not to tuse a database and instead store out data in a series of files.
How might out setup fail to serve queries from multiple users?
  - Deadlock: One resource is dependent on another to the point where too many actions take place on the same datapoint.

### Before Relational Databases (ca. < 1970s)
- Data stored in custom "data files"
- Queries via application-specific code
- Advantages
  - Middle layer not needed
  - Solutions customized for each application
- Disadvantages
  - Hard to change system
  - Knowledge is not compounding
  - Data-transfer is difficults

### Database Management System (DBMS)
- One layer and language to store and access data
- Sold as a way for "non-technical people" to manage data

### Appreciating Databases
- Ubiquitous
- Standardized
- Complex/deep
- Powerful: database admins are
  - Feared by developers
  - ... but also taken for granted until things break
  - Befriended by business people
  - Contacted by the government for secret data (e.g. NSA)

### Progression of Databases
- Navigational (< 1970s)
  - More common during tape era; entries had references to next entries
- Relational (> 1970s)
  - Based on relational (table-based) login, see E.F. Codd
- NoSQL (> 2000s)
  - "Not Only SQL" - document storage, for example

### RDBMS vs NoSQL
- DBMS doesn't have to be relational
  - DBMS is just an application that intelligently stores data and can answer requersts to manage that data.
- Lately, many "NoSQL" or non-relational DBMS have been gaining popularit
  - Graph databases (e.g., Neo4J)
  - Document databases (e.g., MongoDB)
  - Hybrids (e.g. PostgreSQL)
- RDBMSs still remain the #1 DB option for now.

### Why PostgreSQL?
- Advanced, powerful, and populat
- Rapid open source development
- Highly extensible (stored procedures)
- Deep SQL standards compliance
- NoSQL, object support
- Excellent transactions / ACID reliability; focus on integrity
- Multi-user management / administration

### PostgreSQL from Lab
- database cluster: a collection of named databases
users are shared among the entire cluster

### Join
Inner Join
  - must exist in BOTH tables
Left Join
  - must exist either in BOTH tables or the "FROM" table
Right Join
  - must exist either in BOTH tables or the "JOINED" table
Outer Join
  - can exist in either or both tables

## Schema
### Schema Design
- Table Schema (i.e. relation schema)
  - What is a table called?
  - What columns does it have? What are their datatypes?
- Database Schema
  - What tables are in the database?
  - How are tables related?

### Designing a Schema
Analysis
  - What does my program need to output?
  - What data will I need to produce that output?
Conceptual Design
Logical Design
Physical Design

Example: A Journal

  #### Analysis
  Figure out your requirements
  - I want a program to keep my journal in.
  - I want to be able to enter the text of each journal entry.
  - I want to be able to see journal entries chronologically.

  Conceptual Design - Entity Relationship Diagram (ERD)
  - Box-circle design
  - boxes === entities, circles === properties

  Logical Design (ERD)
  - tabular form of conceptual design ERD
    | entries||
    |:------|:----|
    |id|int,primary key|
    |date_created|date|
    |text|text|
    |journal|int,foreign key|

    |tags||
    |:---|:--|
    |id|int,primary key|
    |name|string|

    |tagged_entries||
    |:--|:-----|
    |id|int,primary key|
    |entry_id|int,foreign key|
    |tag_id|int,foreign key|

    |journal||
    |:--|:--|
    |id|int,primary key|
    |title|text|

Many to many relationship - has an intermediary thru table.
Has vs. Belongs To
if tow in table A belongs to rows in table B, that means A contains a foreign key for B
if rows in table A "have" one or many rows in table B, that means table B is responsible for keeping track of the foreign key

Has One / Belongs To
- author has one journal
- journal belongs to one author
Has Many / Belongs To
- Entries belong to a journal
- A journal has many entries
Belongs to Many
- Tags and Journal Entries

#### Normalization
Organization that minimized data redundancy and improves data integrity
- Focus on optimal storage - often at odds with retrieval speed due to complex queries using complicated joins
- Works best when teh app is write-intensive and write-load is more than read-load
  - Table are usually smaller as data is divided vertically (fast reads on single tables)
  - Updates and Inserts are fast because there are no duplicates to update
  - Data is not duplicated so there is less of a need for process intensive group by or distinct queries

#### Denormalized
-Works best when the app is read intensive
  - the data is present in the same table (no need for joins)
  - single table with all required data allows for efficient index usage
-Data is duplicated which means that updates and inserts become complex and costly.
<!-- @nested-tags:sql,databases,databases/schema -->
