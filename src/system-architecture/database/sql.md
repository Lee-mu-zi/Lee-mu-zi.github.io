---
# 这是文章的标题
title: SQL语法入门
order: 2
author: 李木子
category:
  - SQL
---
<br>

<img src="http://cdn.leemuzi.com/weblog/jiyu.png" style="zoom:10%;" />作者寄语：

SQL（Structured Query Language）结构化查询语言，是操作关系型数据库的标准语言，涵盖数据查询、操作、定义和控制功能。SQL 是一种专门用来与数据库沟通的语言。

<!-- more -->

## SQL基础语法

### 数据查询：`SELECT`

作用：从表中读取数据。

基本语法：

```sql
SELECT 列名1, 列名2, ...
FROM 表名
[WHERE 条件]
[ORDER BY 列名 [ASC|DESC]];
```

示例

1. 查询所有字段

   ```sql
   SELECT * FROM Users;  -- 获取Users表所有数据
   ```

2. 查询特定字段

   ```sql
   SELECT Username, Email FROM Users;  -- 仅获取用户名和邮箱
   ```

3. 条件过滤（WHERE）

   ```sql
   SELECT * FROM Orders 
   WHERE TotalAmount > 100;  -- 查询金额大于100的订单
   ```

4. 结果排序（`ORDER BY`）

   ```sql
   SELECT * FROM Products 
   ORDER BY Price DESC;  -- 按价格降序排列商品 默认排序规则是ASC
   ```

### 插入数据：`INSERT`

作用：向表中添加新数据

语法：

```sql
INSERT INTO 表名 (列1, 列2, ...)
VALUES (值1, 值2, ...),
	   (值1, 值2, ...);
```

示例

1. 插入一条数据

   ```sql
   -- 插入一条用户记录
   INSERT INTO Users (UserID, Username, Email)
   VALUES (1, 'Alice', 'alice@example.com');
   ```

2. 批量插入数据

   ```sql
   -- 插入多条用户记录
   INSERT INTO Users (UserID, Username, Email)
   VALUES (1, 'Alice', 'alice@example.com'),
   	   (2, 'Alana', 'alana@example.com');
   ```

### 更新数据：`UPDATE`

作用：修改表中已有记录

语法：

```sql
UPDATE 表名
SET 列1 = 新值1, 列2 = 新值2
[WHERE 条件];  -- 若省略WHERE，会更新所有记录！
```

示例

```sql
-- 将用户Alice的邮箱更新
UPDATE Users 
SET Email = 'alice_new@example.com'
WHERE Username = 'Alice';
```

### 删除数据：`DELETE`

作用：删除表中的记录。

语法：

```sql
DELETE FROM 表名
[WHERE 条件];  -- 若省略WHERE，会清空整个表！
```

### 注意事项

**大小写不敏感**：SQL关键字（如`SELECT`、`FROM`）不区分大小写，但建议统一风格（例如全大写）以提高可读性。

**字符串使用单引号**：文本值需用单引号包裹（如`'Alice'`），双引号可能在某些数据库（如PostgreSQL）中用于字段名。

**分号结尾**：多条SQL语句需用分号分隔，部分数据库允许省略，但建议始终添加。

**WHERE子句的重要性**：在`UPDATE`和`DELETE`中，忘记`WHERE`会导致全表数据被修改或删除！！！生产环境需谨慎操作。

## 数据过滤与聚合

在SQL中，数据过滤与聚合是处理和分析数据的核心操作。通过条件筛选缩小数据范围，利用聚合函数和分组机制进行统计分析。

### 条件筛选

通过`WHERE`子语句结合操作符，可以过滤出满足特定条件的数据。

1. **模糊匹配：`LIKE`**

   - **作用**：匹配文本模式，支持通配符。

     - `%`：匹配任意长度的字符（包括空字符）
     - `_`：匹配单个字符

   - **示例**：

     ```sql
     -- 查询名字以"A"开头的用户
     SELECT * FROM Users 
     WHERE Username LIKE 'A%';
     
     -- 查询邮箱包含"example"的用户
     SELECT * FROM Users 
     WHERE Email LIKE '%example%';
     
     -- 查询用户名为4个字符的用户（如"John"）
     SELECT * FROM Users 
     WHERE Username LIKE '____';
     ```

2. **多条件匹配：`IN`**

   - **作用**：筛选字段值在指定的列表中的数据。

   - **示例**

     ```sql
     -- 查询用户ID为1、3、5的用户
     SELECT * FROM Users 
     WHERE UserID IN (1, 3, 5);
     
     -- 查询城市为"北京"或"上海"的订单
     SELECT * FROM Orders 
     WHERE City IN ('北京', '上海');
     ```

3. **范围匹配：`BETWEEN`**

   - **作用**：筛选字段值在某个区间内的数据（闭区间，包含边界数据）。

   - **示例**

     ```sql
     -- 查询价格在50到100元之间的商品
     SELECT * FROM Products 
     WHERE Price BETWEEN 50 AND 100;
     
     -- 查询2023年1月的订单
     SELECT * FROM Orders 
     WHERE OrderDate BETWEEN '2023-01-01' AND '2023-01-31';
     ```

### 聚合函数

聚合函数对一组值执行计算并返回单个值，常与`GROUP BY`配合使用。

| **函数**  | **作用**           | **示例**                           |
| :-------- | :----------------- | :--------------------------------- |
| `COUNT()` | 统计行数           | `COUNT(*)`（统计所有行，包括NULL） |
| `SUM()`   | 计算数值列的总和   | `SUM(Price)`（计算商品总销售额）   |
| `AVG()`   | 计算数值列的平均值 | `AVG(Age)`（计算用户平均年龄）     |
| `MAX()`   | 获取最大值         | `MAX(Salary)`（查询最高工资）      |
| `MIN()`   | 获取最小值         | `MIN(Temperature)`（查询最低温度） |

示例：

```sql
-- 统计用户总数
SELECT COUNT(*) AS TotalUsers FROM Users;

-- 计算订单总金额
SELECT SUM(TotalAmount) AS TotalRevenue FROM Orders;

-- 查询商品最高价格
SELECT MAX(Price) AS MaxPrice FROM Products;
```

### 分组与过滤：`GROUP BY`与`HAVING`

1. **`GROUP BY`**

   - **作用**：按指定列分组，对每组数据应用聚合函数。

   - **示例**：

     ```sql
     -- 统计每个城市的用户数量
     SELECT City, COUNT(*) AS UserCount 
     FROM Users 
     GROUP BY City;
     
     -- 计算每个商品类别的平均价格
     SELECT Category, AVG(Price) AS AvgPrice 
     FROM Products 
     GROUP BY Category;
     ```

2. ##### **`HAVING`**

   - **作用**：对分组后的结果进行过滤（类似`WHERE`，但用于聚合值）。

   - **与`WHERE`的区别**：

     - `WHERE`在分组前过滤行。
     - `HAVING`在分组后过滤组。

   - **示例**：

     ```sql
     -- 筛选用户数超过100的城市
     SELECT City, COUNT(*) AS UserCount 
     FROM Users 
     GROUP BY City 
     HAVING COUNT(*) > 100;
     
     -- 筛选平均价格低于50的商品类别
     SELECT Category, AVG(Price) AS AvgPrice 
     FROM Products 
     GROUP BY Category 
     HAVING AVG(Price) < 50;
     ```

## 多表关联查询

实际应用中，数据通常分散在多个表中，通过关联查询（Join）可以将多个表的数据组合起来，满足复杂业务需求。

### 关联查询简介

1. **为什么需要关联查询**
   - **数据分散存储**：例如，用户信息存在`Users`表，订单信息存在`Orders`表，需通过用户ID关联查询用户及其订单。
   - **避免数据冗余**：通过外键关联代替重复存储相同数据。
2. **关联条件**
   - 通过 **主键（Primary Key）**和**外键（Foreign Key）** 建立表间关联。
   - 使用`ON`子句指定关联条件（如`Users.UserID = Orders.UserID`）。

### 关联查询类型与语法

1. **内连接（INNER JOIN）**

   - **作用**：仅返回两表中**匹配成功**的记录

   - **语法**：

     ```sql
     SELECT 列名
     FROM 表1
     INNER JOIN 表2 ON 关联条件
     [WHERE 过滤条件];
     ```

   - **示例**：查询所有下单用户的信息及其订单

     ```sql
     SELECT Users.Username, Orders.OrderID, Orders.TotalAmount
     FROM Users
     INNER JOIN Orders ON Users.UserID = Orders.UserID;
     ```

2. **左连接（LEFT JOIN）**

   - **作用**：返回左表全部记录 + 右表匹配记录（不匹配的右表字段为`NULL`）。

   - **示例**：统计所有用户（包括未下单的用户）及其订单。

     ```sql
     SELECT Users.Username, Orders.OrderID
     FROM Users
     LEFT JOIN Orders ON Users.UserID = Orders.UserID;
     ```

3. **右连接（RIGHT JOIN）**

   - **作用**：返回右表全部记录 + 左表匹配记录（不匹配的左表字段为`NULL`）。

   - **示例**：查询所有订单及其用户（包括未关联用户的订单，如匿名订单）。

     ```sql
     SELECT Users.Username, Orders.OrderID
     FROM Users
     RIGHT JOIN Orders ON Users.UserID = Orders.UserID;
     ```

4. **交叉连接（CROSS JOIN）**

   - **作用**：返回两表的笛卡尔积（所有可能的组合），慎用！

   - **示例**

     ```sql
     -- 生成所有用户与商品的组合（如用于推荐系统）
     SELECT Username, ProductName
     FROM Users
     CROSS JOIN Products;
     ```

### 子查询与联合查询

1. **子查询（Subquery）**

   - **作用**：将一个查询的结果作为另一个查询的条件或数据源。

   - **示例**：查询价格高于平均价的商品：

     ```sql
     SELECT ProductName, Price
     FROM Products
     WHERE Price > (SELECT AVG(Price) FROM Products);
     ```

2. **联合查询（UNION）**

   - **作用**：合并多个`SELECT`的结果集（字段数需相同）。

   - **示例**：合并用户表和员工表的姓名：

     ```sql
     SELECT Username AS Name FROM Users
     UNION
     SELECT EmployeeName AS Name FROM Employees;
     ```

