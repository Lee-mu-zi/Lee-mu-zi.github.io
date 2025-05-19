---
# 这是文章的标题
title: SQL简介
order: 1
author: 李木子
category:
  - SQL
---
<br>

<img src="http://cdn.leemuzi.com/weblog/jiyu.png" style="zoom:10%;" />作者寄语：

**SQL**（Structured Query Language，结构化查询语言）是用于**管理和操作关系型数据库**的标准编程语言。它允许用户定义数据库结构、存储数据、查询信息、控制访问权限以及维护数据一致性。无论是开发应用、数据分析还是运维管理，SQL都是数据处理领域的核心工具。

<!-- more -->



## SQL的特点

- SQL 不是某个特定数据库厂商专有的语言。绝大多数重要的DBMS支持 SQL。 
- SQL 简单易学。它的语句全都是由有很强描述性的英语单词组成，而且这些单词的数目不多。
- SQL 虽然看上去很简单，但实际上是一种强有力的语言，灵活使用其语言元素，可以进行非常复杂和高级的数据库操作。

## SQL的核心组成

SQL按功能分为五大类，常简称为 **DDL、DML、DQL、DCL、TCL**：

### **数据定义语言（DDL）**

- **作用**：定义和修改数据库结构（如表、索引）。

- **常用语句**：

  ```sql
  CREATE TABLE students (id INT, name VARCHAR(50));  -- 创建表
  ALTER TABLE students ADD age INT;                  -- 修改表结构
  DROP TABLE students;                               -- 删除表
  ```

### **数据操作语言（DML）**

- **作用**：对表中的数据进行增删改。

- **常用语句**：

  ```sql
  INSERT INTO students (id, name) VALUES (1, 'Alice');  -- 插入数据
  UPDATE students SET name = 'Bob' WHERE id = 1;        -- 更新数据
  DELETE FROM students WHERE id = 1;                    -- 删除数据
  ```

### **数据查询语言（DQL）**

- **作用**：从表中检索数据。

- **核心语句**：`SELECT`

  ```sql
  SELECT name, age FROM students WHERE age > 18;  -- 查询符合条件的记录
  ```

### **数据控制语言（DCL）**

- **作用**：管理数据库权限。

- **常用语句**：

  ```sql
  GRANT SELECT ON students TO user1;  -- 授予查询权限
  REVOKE DELETE ON students FROM user1; -- 撤销删除权限
  ```

### **事务控制语言（TCL）**

- **作用**：管理数据库事务（保证数据一致性）。

- **常用语句**：

  ```sql
  BEGIN TRANSACTION;   -- 开始事务
  COMMIT;              -- 提交事务
  ROLLBACK;            -- 回滚事务
  ```
## 注意事项

**大小写不敏感**：SQL关键字（如`SELECT`、`FROM`）不区分大小写，但建议统一风格（例如全大写）以提高可读性。

**字符串使用单引号**：文本值需用单引号包裹（如`'Alice'`），双引号可能在某些数据库（如PostgreSQL）中用于字段名。

**分号结尾**：多条SQL语句需用分号分隔，部分数据库允许省略，但建议始终添加。

**WHERE子句的重要性**：在`UPDATE`和`DELETE`中，忘记`WHERE`会导致全表数据被修改或删除！！！生产环境需谨慎操作。

## **资源推荐**

- **在线教程**：[W3Schools SQL](https://www.w3schools.com/sql/) | [SQLZoo](https://sqlzoo.net/)
- **练习平台**：[LeetCode数据库题库](https://leetcode.cn/problemset/database/) | [SQL Fiddle](http://sqlfiddle.com/)
