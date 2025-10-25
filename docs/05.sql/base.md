---
# 这是文章的标题
title: SQL基础语法
category:
  - SQL
---
<br>

<img src="http://cdn.leemuzi.com/weblog/jiyu.png" style="zoom:10%;" />：

以下是 **SQL 语法**的核心内容整理，涵盖常用操作和示例。

所有的操作均是通过MySQL进行实现的，所以在不同的DBMS中操作可能略有差别。

<!-- more -->

示例：user_profile

| id   | device_id | gender | age  | university | province |
| ---- | --------- | ------ | ---- | ---------- | -------- |
| 1    | 2138      | male   | 21   | 北京大学   | Beijing  |
| 2    | 3214      | male   |      | 复旦大学   | Shanghai |
| 3    | 6543      | female | 20   | 北京大学   | Beijing  |
| 4    | 2315      | female | 23   | 浙江大学   | ZheJiang |
| 5    | 5432      | male   | 25   | 山东大学   | Shandong |

```sql
drop table if exists user_profile;
CREATE TABLE `user_profile` (
`id` int NOT NULL,
`device_id` int NOT NULL,
`gender` varchar(14) NOT NULL,
`age` int ,
`university` varchar(32) NOT NULL,
`province` varchar(32)  NOT NULL);
INSERT INTO user_profile VALUES(1,2138,'male',21,'北京大学','BeiJing');
INSERT INTO user_profile VALUES(2,3214,'male',null,'复旦大学','Shanghai');
INSERT INTO user_profile VALUES(3,6543,'female',20,'北京大学','BeiJing');
INSERT INTO user_profile VALUES(4,2315,'female',23,'浙江大学','ZheJiang');
INSERT INTO user_profile VALUES(5,5432,'male',25,'山东大学','Shandong');
```

## SQL基本语句

### SQL SELECT

SELECT语句用于从数据库中选取数据。

结果被存储在一个结果表中，称为结果集。

SELECT查询全部结果集的时候，可以选择列出每个列，也可以使用通配符`*`

**语法形式：**

```sql
SELECT column1, column2, ...
FROM table_name;
```

或

```sql
SELECT * 
FROM table_name;
```

**SELECT Column 实例：**

```sql
SELECT
	device_id,
	gender,
	age,
	university 
FROM
	user_profile;
```

**结果集展示：**

```sql
+-----------+--------+------+------------+
| device_id | gender | age  | university |
+-----------+--------+------+------------+
|      2138 | male   |   21 | 北京大学   |
|      3214 | male   | NULL | 复旦大学   |
|      6543 | female |   20 | 北京大学   |
|      2315 | female |   23 | 浙江大学   |
|      5432 | male   |   25 | 山东大学   |
+-----------+--------+------+------------+
```

**SELECT * 实例：**

```sql
SELECT
	* 
FROM
	user_profile;
```

**结果集展示：**

```sql
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |
|  2 |      3214 | male   | NULL | 复旦大学   | Shanghai |
|  3 |      6543 | female |   20 | 北京大学   | BeiJing  |
|  4 |      2315 | female |   23 | 浙江大学   | ZheJiang |
|  5 |      5432 | male   |   25 | 山东大学   | Shandong |
+----+-----------+--------+------+------------+----------+
```

<br>

---

<br>

### SQL SELECT DISTINCT

SELECT DISTINCT语句用于返回唯一不同的值。

在表中，一个列可能会存在多个重复的值，SELECT DISTINCT就是去除重复的值。

**语法形式：**

```sql
SELECT DISTINCT column1, column2, ...
FROM table_name;
```

**SELECT DISTINCT 实例：**

```sql
SELECT DISTINCT
	university 
FROM
	user_profile;
```

**结果集展示：**

```sql
+------------+
| university |
+------------+
| 北京大学   |
| 复旦大学   |
| 浙江大学   |
| 山东大学   |
+------------+
```

<br>

------

<br>

### SQL INSERT INTO

SQL INSERT INTO语句用于向数据表中添加新的行。

SQL INSERT INTO可以每次只添加一行，也可以添加多行。

**语法形式：**

```sql
INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...),
	   (value1, value2, value3, ...),
	   ...;
```

如果所有的列都要添加数据，可以省略`column`

```sql
INSERT INTO table_name
VALUES (value1, value2, value3, ...),
	   (value1, value2, value3, ...),
	   ...;
```

**INSERT INTO实例：**

```sql
INSERT INTO user_profile ( id, device_id, gender, age, university, province )
VALUES
	( 6, 0, 'male', 27, '郑州大学', 'HeNan' );
```

**结果集展示：**

```sql
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |
|  2 |      3214 | male   | NULL | 复旦大学   | Shanghai |
|  3 |      6543 | female |   20 | 北京大学   | BeiJing  |
|  4 |      2315 | female |   23 | 浙江大学   | ZheJiang |
|  5 |      5432 | male   |   25 | 山东大学   | Shandong |
|  6 |         0 | male   |   27 | 郑州大学   | HeNan    |
+----+-----------+--------+------+------------+----------+
```

<br>

------

<br>

### SQL INSERT INTO SELECT

INSERT INTO SELECT 语句从一个表复制数据并将其插入另一个表。

- INSERT INTO SELECT 要求源表和目标表中的数据类型匹配
- 目标表中的现有记录不受影响

**语法形式：**

```sql
INSERT INTO table2 (column1, column2, column3, ...)
SELECT column1, column2, column3, ...
FROM table1
WHERE condition;
```

**参数列表：**

`table2`：需要插入数据的新表

`(column1, column2, column3, ...)`：新表中需要插入的列

`column1, column2, column3, ...`：从旧表中找出对应的列进行插入

`table1`：旧表

**实例展示：**

```sql
insert into
    exam_record_before_2021 (uid, exam_id, start_time, submit_time, score)
select
    uid,
    exam_id,
    start_time,
    submit_time,
    score
from
    exam_record
where
    year(submit_time) < 2021
```

**实战训练：**

[SQL111 插入记录（二）](https://www.nowcoder.com/practice/9681abf28745468c8adacb3b029a18ce?tpId=240&tags=&title=&difficulty=0&judgeStatus=0&rp=0&sourceUrl=%2Fexam%2Foj%3FquestionJobId%3D10%26subTabName%3Donline_coding_page)

<br>

------

<br>

### SQL UPDATE

UPDATE语句用于修改表中的现有记录。

UPDATE语句一般会同WHERE子语句一起使用，如果省略，那么所有的记录的对应列都会被修改。

**语法形式：**

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;
```

**参数列表：**

`column`：需要更新的字段。

`value`：字段的新值。

`condition`：更新的条件

**注意事项：**

- 如果忽略where条件，将会导致表中的所有该字段的字均会被更新。

**实例演示：**

```sql
update
    examination_info
set
    tag = 'Python'
where
    tag = 'PYTHON';
-- 表中 tag = 'PYTHON' 的字段全部修改为 Python。
```

**实战训练：**

[更新记录（一）](https://www.nowcoder.com/practice/bfe8ad2bddc540fc911614aa648868b3?tpId=240&tags=&title=&difficulty=0&judgeStatus=0&rp=0&sourceUrl=%2Fexam%2Foj%3FquestionJobId%3D10%26subTabName%3Donline_coding_page)

<br>

------

<br>

### SQL DELETE

DELETE语句用于删除表中的记录。

与UPDATE一样，如果省略WHERE会对全部记录进行删除操作。

在正式环境中删除操作一般使用的是逻辑删除，而非物理删除。

如果真切的需要删除全部数据并保留表结构，可以不加WHERE子语句。

**语法形式：**

```sql
DELETE FROM table_name WHERE condition;
```

**SQL DELETE实例：**

```sql
mysql> DELETE FROM user_profile WHERE id = 6;
Query OK, 1 row affected (0.01 sec)

mysql> SELECT * FROM user_profile;
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |
|  2 |      3214 | male   | NULL | 复旦大学   | Shanghai |
|  3 |      6543 | female |   20 | 北京大学   | BeiJing  |
|  4 |      2315 | female |   23 | 浙江大学   | ZheJiang |
|  5 |      5432 | male   |   25 | 山东大学   | Shandong |
+----+-----------+--------+------+------------+----------+
```

<br>

------

<br>

### SQL WHERE

SQL WHERE子句用于提取满足条件的记录

值为NULL的值是不会出现在结果集中的。

获取或排除值为NULL的记录可以使用`where age is null`或`where age is not null `

**语法形式：**

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

**WHERE实例：**

```sql
mysql> SELECT * FROM user_profile WHERE age >= 21;
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |
|  4 |      2315 | female |   23 | 浙江大学   | ZheJiang |
|  5 |      5432 | male   |   25 | 山东大学   | Shandong |
+----+-----------+--------+------+------------+----------+

mysql> SELECT * FROM user_profile WHERE age IS NULL;
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  2 |      3214 | male   | NULL | 复旦大学   | Shanghai |
+----+-----------+--------+------+------------+----------+

mysql> SELECT * FROM user_profile WHERE age IS NOT NULL;
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |
|  3 |      6543 | female |   20 | 北京大学   | BeiJing  |
|  4 |      2315 | female |   23 | 浙江大学   | ZheJiang |
|  5 |      5432 | male   |   25 | 山东大学   | Shandong |
+----+-----------+--------+------+------------+----------+
```

<br>

------

<br>

### SQL GROUP BY

GROUP BY 语句将具有相同值的行分组为摘要行。

GROUP BY 语句通常与聚合函数（COUNT、MAX、MIN、SUM、AVG）一起使用，将结果集按一列或多列进行分组。

**语法形式：**

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s);
```

**GROUP BY 实例：**

```sql
mysql> SELECT Max(age),gender FROM user_profile GROUP BY gender;
+----------+--------+
| Max(age) | gender |
+----------+--------+
|       25 | male   |
|       23 | female |
+----------+--------+	
```

<br>

------

<br>

### SQL HAVING

在 SQL 中增加 HAVING 子句原因是，WHERE 关键字无法与聚合函数一起使用。

HAVING 子句可以让我们筛选分组后的各组数据。

**语法形式：**

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);
```

**SQL HAVING实例：**

```sql
mysql> SELECT COUNT(*) AS student_count FROM user_profile GROUP BY university HAVING student_count < 2;
+---------------+
| student_count |
+---------------+
|             1 |
|             1 |
|             1 |
+---------------+
```

<br>

------

<br>

### SQL CASE

CASE语句类似于if-else条件判断语句

当CASE遍历条件碰到第一个满足条件的时候，返回结果。

如果没有条件为true的情况下，会返回最后的ELSE子语句中的结果。

**语法形式：**

```sql
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    WHEN conditionN THEN resultN
    ELSE result
END;
```

**SQL CASE实例：**

```sql
mysql> SELECT device_id,gender,CASE WHEN age >= 25 THEN '25及以上' WHEN age < 20 THEN '20岁以下' ELSE '其他' END AS age, university, province FROM user_profile;
+-----------+--------+----------+------------+----------+
| device_id | gender | age      | university | province |
+-----------+--------+----------+------------+----------+
|      2138 | male   | 其他     | 北京大学   | BeiJing  |
|      3214 | male   | 其他     | 复旦大学   | Shanghai |
|      6543 | female | 其他     | 北京大学   | BeiJing  |
|      2315 | female | 其他     | 浙江大学   | ZheJiang |
|      5432 | male   | 25及以上 | 山东大学   | Shandong |
+-----------+--------+----------+------------+----------+
```

<br>

------

<br>

### MySQL REPLACE INTO

EPLACE INTO语句是一种用于插入新数据或更新已存在数据的操作。

它的作用类似于`select`和`update`的结合体。

可以在需要插入新记录时自动执行插入操作，在有冲突的时候更新已存在的记录。

**语法形式：**

```sql
REPLACE INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);
```

**参数列表：**

`table_name`：表明

`column1, column2, column3, ...`：需要新增或替换的字段

`value1, value2, value3, ...`：字段的新值

**注意事项：**

- `REPLACE INTO`语句只适用于具有主键或唯一索引的表；
- 自增主键不会在记录被更新时改变。

**实例演示：**

```sql
-- 初始行数据：(9003, 'SQL', 'medium', 60, '2020-01-02 10:00:00')
REPLACE INTO
    examination_info (exam_id, tag, difficulty, duration, release_time)
VALUES
    (9003, 'SQL', 'hard', 90, '2021-01-01 00:00:00')
-- 替换后数据：(9003, 'SQL', 'hard', 90, '2021-01-01 00:00:00')
```

**实战训练：**

[插入记录（三）](https://www.nowcoder.com/practice/978bcee6530a430fb0be716423d84082?tpId=240&tags=&title=&difficulty=0&judgeStatus=0&rp=0&sourceUrl=%2Fexam%2Foj%3FquestionJobId%3D10%26subTabName%3Donline_coding_page)

<br>

------

<br>

### MySQL OVER

SQL OVER子句是MySQL从8.0版本开始支持窗口函数和OVER子句。

SQL OVER中的参数均是可以省略不写的，具体结果展示可以自己尝试一些。

**语法形式：**

```sql
函数名() OVER (
  [PARTITION BY 列1, 列2, ...]
  [ORDER BY 列1 [ASC|DESC], 列2 [ASC|DESC], ...]
  [ROWS|RANGE 窗口范围]
)
```

- **PARTITION BY**：将数据划分为多个分区（类似于 `GROUP BY`），窗口函数在每个分区内独立计算。
- **ORDER BY**：定义分区内数据的排序顺序，常用于计算累积值或排名。
- **ROWS/RANGE**：定义窗口的物理行或逻辑值范围（例如“前3行到当前行”）。

**SQL OVER实例：**

```sql
SELECT
	*,
	SUM( age ) OVER ( PARTITION BY university ORDER BY age ROWS BETWEEN 1 PRECEDING AND CURRENT ROW ) AS overAge 
FROM
	user_profile;
```

**结果集展示：**

```sql
+----+-----------+--------+------+------------+----------+---------+
| id | device_id | gender | age  | university | province | overAge |
+----+-----------+--------+------+------------+----------+---------+
|  2 |      3214 | male   |   19 | 北京大学   | Shanghai |      19 |
|  3 |      6543 | female |   20 | 北京大学   | BeiJing  |      39 |
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |      41 |
|  5 |      5432 | male   |   25 | 山东大学   | Shandong |      25 |
|  4 |      2315 | female |   23 | 浙江大学   | ZheJiang |      23 |
+----+-----------+--------+------+------------+----------+---------+
```

接下来针对

`SUM(age) OVER ( PARTITION BY university ORDER BY age ROWS BETWEEN 1 PRECEDING AND CURRENT ROW )`做一个简单的介绍

`PARTITION BY university`：表示结果集将根据`university`划分为多个分区进行独立计算

`ORDER BY age`：每个分区是根据年龄排序进行计算的。

`ROWS BETWEEN 1 PRECEDING AND CURRENT ROW`：这个语句表示根据年龄排序后，age（id = 3） ➕ age（id = 1） 🟰overAge。当然这里也可以获取多行，只需将数字1改为其他数字即可，也可不写ROWS子句，那么就是默认从从第一个一直累加到最后一个。

## SQL运算符

### SQL AND, OR, NOT

WHERE子语句可以与 AND、 OR 和 NOT 运算符组合使用。

AND和OR根据多个条件筛选记录，比较好理解。

NOT作用等同于`!`

**语法形式：**

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 AND condition2 AND condition3 ...;
```

**语法形式：**

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition1 OR condition2 OR condition3 ...;
```

**语法形式：**

```sql
SELECT column1, column2, ...
FROM table_name
WHERE NOT condition;
```

**AND实例：**

```sql
mysql> SELECT * FROM user_profile WHERE age >= 20 AND age <= 23;
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |
|  3 |      6543 | female |   20 | 北京大学   | BeiJing  |
|  4 |      2315 | female |   23 | 浙江大学   | ZheJiang |
+----+-----------+--------+------+------------+----------+
```

**OR实例：**

```sql
mysql> SELECT * FROM user_profile WHERE university = '北京大学' OR university = '复旦大学';
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |
|  2 |      3214 | male   | NULL | 复旦大学   | Shanghai |
|  3 |      6543 | female |   20 | 北京大学   | BeiJing  |
+----+-----------+--------+------+------------+----------+
```

**NOT实例：**

```sql
mysql> SELECT * FROM user_profile WHERE NOT university = '北京大学';
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  2 |      3214 | male   | NULL | 复旦大学   | Shanghai |
|  4 |      2315 | female |   23 | 浙江大学   | ZheJiang |
|  5 |      5432 | male   |   25 | 山东大学   | Shandong |
+----+-----------+--------+------+------------+----------+
```

## SQL操作符

### SQL LIKE

LIKE操作符在WHERE子语句中用于模糊查询。

`%`：用于匹配零个或多个字符

`_`：用于匹配单个字符

**语法形式：**

```sql
SELECT column1, column2, ...
FROM table_name
WHERE columnN LIKE pattern;
```

**LIKE实例：**

```sql
mysql> SELECT * FROM user_profile WHERE province LIKE '%Ji%';
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |
|  3 |      6543 | female |   20 | 北京大学   | BeiJing  |
|  4 |      2315 | female |   23 | 浙江大学   | ZheJiang |
+----+-----------+--------+------+------------+----------+
```

<br>

------

<br>

### SQL IN

IN操作符允许我们在WHERE子句中规定多个值。

**语法形式：**

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
```

**IN 实例：**

```sql
mysql> SELECT * FROM user_profile WHERE id IN (1,3,5);
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |
|  3 |      6543 | female |   20 | 北京大学   | BeiJing  |
|  5 |      5432 | male   |   25 | 山东大学   | Shandong |
+----+-----------+--------+------+------------+----------+	
```

<br>

------

<br>

### SQL BETWEEN

BETWEEN操作符在WHERE子句中用于设定范围值。

BETWEEN操作符是包括开始值和结束值的。

**语法形式：**

```sql
SELECT column_name(s)
FROM table_name
WHERE column_name BETWEEN value1 AND value2;
```

**BETWEEN实例：**

```sql
mysql> SELECT * FROM user_profile WHERE age BETWEEN 21 AND 25;
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |
|  4 |      2315 | female |   23 | 浙江大学   | ZheJiang |
|  5 |      5432 | male   |   25 | 山东大学   | Shandong |
+----+-----------+--------+------+------------+----------+
```

<br>

------

<br>

### SQL UNION

UNION 操作符用于组合两个或多个SELECT语句的结果集。一般多用于从不同的表中获取相同的信息。

- UNION 中的每个 SELECT 语句必须具有相同的列数
- 列还必须具有类似的数据类型
- 每个 SELECT 语句中的列的顺序也必须相同

**语法形式：**

```sql
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
```

**SQL UNION实例：**

下方是从两张不同的表中获取的数据，因为两个表的结构是完全相同的，可以使用通配符`*`

如果两张表的结构不同，我们则需要输入具体的列。

```sql
mysql> SELECT * FROM user_profile UNION SELECT * FROM user_profile_copy;
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |
|  2 |      3214 | male   | NULL | 复旦大学   | Shanghai |
|  3 |      6543 | female |   20 | 北京大学   | BeiJing  |
|  4 |      2315 | female |   23 | 浙江大学   | ZheJiang |
|  5 |      5432 | male   |   25 | 山东大学   | Shandong |
|  1 |      6666 | male   |   21 | 郑州大学   | HeNan    |
+----+-----------+--------+------+------------+----------+
```

## SQL函数

### SQL MIN()、MAX()

MIN()返回列中的最小值。MAX()返回列中的最大值。

两者都不会计算值为NULL的。

**语法形式：**

```sql
SELECT MIN(column_name) FROM table_name WHERE condition;
```

**语法形式：**

```sql
SELECT MAX(column_name) FROM table_name WHERE condition;
```

**语法形式：**

```sql
mysql> SELECT MIN(age) FROM user_profile;
+----------+
| MAX(age) |
+----------+
|       20 |
+----------+
```

**MAX()实例：**

```sql
mysql> SELECT MAX(age) FROM user_profile;
+----------+
| MAX(age) |
+----------+
|       25 |
+----------+
```

<br>

------

<br>

### SQL COUNT()、AVG()、SUM()

COUNT() 函数返回结果集的行数。

AVG 函数返回数值列的平均值。NULL 值不包括在计算中。

SUM 函数返回指定列的总和。

**语法形式：**

```sql
SELECT COUNT(column_name) FROM table_name WHERE condition;
```

**语法形式：**

```sql
SELECT AVG(column_name) FROM table_name WHERE condition;
```

**语法形式：**

```sql
SELECT SUM(column_name) FROM table_name WHERE condition;
```

**COUNT实例：**

```sql
mysql> SELECT COUNT(age) FROM user_profile;
+------------+
| COUNT(age) |
+------------+
|          4 |
+------------+
```

**AVG实例：**

```sql
mysql> SELECT AVG(age) FROM user_profile;
+----------+
| AVG(age) |
+----------+
|  22.2500 |
+----------+
```

**SUM实例：**

```sql
mysql> SELECT SUM(age) FROM user_profile;
+----------+
| SUM(age) |
+----------+
|       89 |
+----------+
```

<br>

------

<br>

### SQL IFNULL()

SQL IFNULL()函数用于判断指定的列是否为空。在MySQL中`IFNULL()`和`COALESCE()`功能是一样的。

每个DBMS都有类似功能的函数，但是具体形式可能不同。

比如Oracle中是NVL()......等等

**语法形式：**

```sql
SELECT IFNULL(column_name, value)
FROM table_name;
```

**SQL IFNULL()实例**

```sql
mysql> SELECT device_id, gender, IFNULL(age, 18) AS age, university, province FROM user_profile;
+-----------+--------+-----+------------+----------+
| device_id | gender | age | university | province |
+-----------+--------+-----+------------+----------+
|      2138 | male   |  21 | 北京大学   | BeiJing  |
|      3214 | male   |  18 | 复旦大学   | Shanghai |
|      6543 | female |  20 | 北京大学   | BeiJing  |
|      2315 | female |  23 | 浙江大学   | ZheJiang |
|      5432 | male   |  25 | 山东大学   | Shandong |
+-----------+--------+-----+------------+----------+
```

<br>

------

<br>

### MySQL ABS()、CEILING()、FLOOR()

 ABS()用于返回指定列的绝对值

CEILING()、CEILING()函数作用是向上取整

FLOOR()则是向下取整

**语法形式：**

```sql
ABS(number);
CEILING(number);
FLOOR(number);
```

**MySQL ABS()、CEILING()、FLOOR()实例**

```sql
ABS(-3.14);  -- 3.14
CEILING(3.14); -- 4
FLOOR(3.14); -- 3
```

<br>

------

<br>

### MySQL ROUND()、TRUNCATE()

ROUND()：将数字四舍五入并保存指定的小数个数

TRUNCATE()：函数将数字截断到指定的小数位数，注意是截断不是四舍五入。

**语法形式：**

```sql
ROUND(number, decimals);
TRUNCATE(number, decimals);
```

**MySQL ROUND()实例：**

```sql
ROUND(3.1415926535, 3); -- 3.142
TRUNCATE(3.1415926535, 3) -- 3.141
```

<br>

------

<br>

### MySQL CONCAT()、CONCAT WS()

MySQL CONCAT()将多个列以字符串的形式进行拼接

如果任何列的值为 NULL，则返回 NULL。

MySQL CONCAT WS()将多个列进行拼接并使用分隔符分割。

CONCAT WS()会忽略列中的NULL值

分隔符在每个str之间添加。 如果 separator 为 NULL，则此函数返回 NULL

**语法形式：**

```sql
CONCAT(str1,str2,...)
```

**MySQL CONCAT WS()语法**

```
CONCAT_WS(separator,str1,str2,...)
```

**MySQL CONCAT()、CONCAT WS()实例**

```sql
 SELECT CONCAT(device_id, age) FROM user_profile;
 
 SELECT CONCAT_WS('-',device_id,age) FROM user_profile
```

**结果集展示**

```sql
+------------------------+
| CONCAT(device_id, age) |
+------------------------+
| 213821                 |
| NULL                   |
| 654320                 |
| 231523                 |
| 543225                 |
| 213128                 |
| 432128                 |
+------------------------+

+------------------------------+
| CONCAT_WS('-',device_id,age) |
+------------------------------+
| 2138-21                      |
| 3214                         |
| 6543-20                      |
| 2315-23                      |
| 5432-25                      |
| 2131-28                      |
| 4321-28                      |
+------------------------------+
```

<br>

------

<br>

### MySQL SUBSTR()、SUBSTRING()、MID()

MySQL SUBSTR()、SUBSTRING()、MID()三者功能都是一致的，语法上存在一定的差异

`SUBSTRING()`支持标准 SQL 语法，可使用 `FROM` 和 `FOR` 关键字增强可读性，适用于需要兼容不同数据库的场景

~~`SUBSTR `~~ 和 `MID` 仅支持传统参数形式，必须使用逗号分隔参数，无法使用 `FROM`/`FOR` 语法。

在使用Navicat发现`SUBSTR`也是可以使用FROM/FOR语法的

pos起始位置。 可以是正数或负数。 如果是正数，则此函数从字符串的开头提取。 如果是负数，此函数从字符串的末尾提取

**语法形式：**

```sql
SUBSTR(str FROM pos FOR len)
SUBSTRING(str FROM pos FOR len)
MID(str,pos,len)
```

**MySQL SUBSTR()、SUBSTRING()、MID()实例：**

```sql
SELECT
	SUBSTR(university FROM 1 FOR 2),
	SUBSTRING(university FROM 1 FOR 2),
	MID(university,1,2)
FROM
	user_profile
```

**结果集展示**

```sql
+---------------------------------+------------------------------------+---------------------+
| SUBSTR(university FROM 1 FOR 2) | SUBSTRING(university FROM 1 FOR 2) | MID(university,1,2) |
+---------------------------------+------------------------------------+---------------------+
| 北京                            | 北京                               | 北京                |
| 复旦                            | 复旦                               | 复旦                |
| 北京                            | 北京                               | 北京                |
| 浙江                            | 浙江                               | 浙江                |
| 山东                            | 山东                               | 山东                |
| 山东                            | 山东                               | 山东                |
| 复旦                            | 复旦                               | 复旦                |
+---------------------------------+------------------------------------+---------------------+
```

<br>

---

<br>

### MySQL SUBSTRING_INDEX()

SUBSTRING_INDEX() 函数返回一个字符串在出现指定数量的分隔符之前或之后的子字符串。

**语法形式：**

```sql
SUBSTRING_INDEX(str,delim,count)
```

**参数列表：**

`str`：要操作的字符串

`delim`：分隔符

`count`：`count`可以是正数也可以是负数，正负决定的是开始的位置和计算的方向，如果count是正数，`substring_index`截取的是从左向右第`count`个分隔符左边的子串；如果是负数，`substring_index`截取的是从右边向左第`count`个分隔符右边的子串

**实例演示：**

```sql
SELECT SUBSTRING_INDEX( 'a*b*c*d*e', '*', 2 );	-- a*b
SELECT SUBSTRING_INDEX( 'a*b*c*d*e', '*', -2 );	-- d*e
```

<br>

------

<br>

### MySQL UPPER()、LOWER()

UPPER()用于将文本全部转换为大写；LOWER()用于将文本全部转换为小写。

**语法形式：**

```sql
UPPER(str),
LOWER(str)
```

**MySQL UPPER()、LOWER()实例：**

```sql
SELECT
	UPPER(gender),
	LOWER(gender)
FROM
	user_profile
```

**MySQL UPPER()、LOWER()结果展示：**

```sql
+---------------+---------------+
| UPPER(gender) | LOWER(gender) |
+---------------+---------------+
| MALE          | male          |
| MALE          | male          |
| FEMALE        | female        |
| FEMALE        | female        |
| MALE          | male          |
| MALE          | male          |
| MALE          | male          |
+---------------+---------------+
```

<br>

------

<br>

### MySQL DATE_FORMAT()

DATE_FORMAT() 函数按指定格式化日期。

**语法形式：**

```sql
DATE_FORMAT(date,format)
```

**参数format：**

| 格式 | 描述                                                        |
| :--- | :---------------------------------------------------------- |
| %a   | 工作日的缩写名称（周日至周六）                              |
| %b   | 缩写月份名称（1 月至 12 月）                                |
| %c   | 数字月份名称（0 到 12）                                     |
| %D   | 以数字形式表示的月份中的日期，后跟后缀 (1st, 2nd, 3rd, ...) |
| %d   | 以数值表示的月份中的日期（01 到 31）                        |
| %e   | 以数字形式表示的月份中的日期（0 到 31）                     |
| %f   | 微秒（000000 到 999999）                                    |
| %H   | 小时（00 到 23）                                            |
| %h   | 小时（00 到 12）                                            |
| %I   | 小时（00 到 12）                                            |
| %i   | 分钟（00 到 59）                                            |
| %j   | 一年中的某一天（001 到 366）                                |
| %k   | 小时（0 到 23）                                             |
| %l   | 小时（1 到 12）                                             |
| %M   | 完整的月份名称（1 月至 12 月）                              |
| %m   | 数字形式的月份名称（00 到 12）                              |
| %p   | 上午或下午                                                  |
| %r   | 12 小时 AM 或 PM 格式的时间 (hh:mm:ss AM/PM)                |
| %S   | 秒（00 到 59）                                              |
| %s   | 秒（00 到 59）                                              |
| %T   | 24 小时制时间 (hh:mm:ss)                                    |
| %U   | 星期天是一周的第一天（00 到 53）                            |
| %u   | 星期一是一周的第一天的星期（00 到 53）                      |
| %V   | 星期天是一周的第一天（01 到 53）。与 %X 一起使用            |
| %v   | 星期一是一周的第一天的星期（01 到 53）。与 %X 一起使用      |
| %W   | 完整的工作日名称（周日至周六）                              |
| %w   | 星期天=0，星期六=6                                          |
| %X   | 星期天是一周的第一天的星期。与 %V 一起使用                  |
| %x   | 星期一是一周的第一天的一周的年份。与 %V 一起使用            |
| %Y   | 4 位数字形式的年份                                          |
| %y   | 2 位数字形式的年份                                          |

**MySQL DATE_FORMAT()实例：**

```sql
SELECT
	DATE_FORMAT(profit_date, '%Y/%m/%d %H/%i/%s'),
	DATE_FORMAT(profit_date, '%Y-%m-%d %H-%i-%s')
FROM
	daily_profits;
```

**结果集：**

```sql
+-----------------------------------------------+-----------------------------------------------+
| DATE_FORMAT(profit_date, '%Y/%m/%d %H/%i/%s') | DATE_FORMAT(profit_date, '%Y-%m-%d %H-%i-%s') |
+-----------------------------------------------+-----------------------------------------------+
| 2024/01/01 00/00/00                           | 2024-01-01 00-00-00                           |
| 2024/01/02 00/00/00                           | 2024-01-02 00-00-00                           |
| 2024/01/03 00/00/00                           | 2024-01-03 00-00-00                           |
| 2024/01/04 00/00/00                           | 2024-01-04 00-00-00                           |
| 2024/01/05 00/00/00                           | 2024-01-05 00-00-00                           |
+-----------------------------------------------+-----------------------------------------------+
```

<br>

------

<br>

### MySQL DATE()、TIME()

`DATE()`：从日期时间表达式中提取日期部分

`TIME()`：从日期时间表达式中提取时间部分

**语法形式：**

```sql
DATE(expr);
TIME(expr);
```

**参数列表：**

`expr`：日期时间表达式

**实例展示：**

```sql
SELECT TIME("1999-03-14 19:30:10"); -- 1999-03-14
SELECT TIME("1999-03-14 19:30:10"); -- 19:30:10
```

<br>

------

<br>

### MySQL YEAR()、MONTH()、DAY()

`YEAR()`：从指定的日期中获取年份
`MONTH()`：从指定的日期中获取月份
`DAY()`：从指定的日期中获取天

**语法形式：**

```sql
YEAR(date)
MONTH(date)
DAY(date)
```

**参数列表：**

`date`：日期

**实例演示：**

```sql
SELECT YEAR("1999-03-14"); -- 1999
SELECT MONTH("1999-03-14"); -- 3
SELECT DAY("1999-03-14"); -- 14
```

<br>

------

<br>

### MySQL HOUR()、MINUTE()、SECOND()

`HOUR()`：返回日期时间的小时部分

`MINUTE()`：返回日期时间的分钟部分

`SECOND()`：返回日期时间的秒部分

**语法形式：**

```sql
HOUR(time)
MINUTE(time)
SECOND(time)
```

**参数列表：**

`time`：日期时间表达式或时间表达式

**实例演示：**

```sql
SELECT HOUR("1999-03-14 19:30:10"); -- 19
SELECT MINUTE("1999-03-14 19:30:10"); -- 30
SELECT SECOND("1999-03-14 19:30:10"); -- 10
```

## SQL关键词

### SQL ORDER BY

ORDER BY关键词用于对结果集按照指定的列进行升序或者降序排序。

默认情况下ORDER BY是按照升序进行排列的，当然也可以显式的设置ASC（升序），DESC（降序）

**语法形式：**

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1, column2, ... ASC|DESC;
```

**ORDER BY实例：**

```sql
mysql> SELECT * FROM user_profile ORDER BY age DESC;
+----+-----------+--------+------+------------+----------+
| id | device_id | gender | age  | university | province |
+----+-----------+--------+------+------------+----------+
|  5 |      5432 | male   |   25 | 山东大学   | Shandong |
|  4 |      2315 | female |   23 | 浙江大学   | ZheJiang |
|  1 |      2138 | male   |   21 | 北京大学   | BeiJing  |
|  3 |      6543 | female |   20 | 北京大学   | BeiJing  |
|  2 |      3214 | male   | NULL | 复旦大学   | Shanghai |
+----+-----------+--------+------+------------+----------+
```

<br>

------

<br>

### SQL AS

SQL AS 用于为表或表中的列提供临时名称，也就是别名。

别名通常用于提高列名的可读性。

别名只会对结果集产生影响，并不会影响到原先的数据表。

**语法形式：**

```sql
SELECT column_name AS alias_name
FROM table_name;
```

**SQL AS实例：**

```sql
mysql> SELECT gender AS '性别' FROM user_profile;
+--------+
| 性别   |
+--------+
| male   |
| male   |
| female |
| female |
| male   |
+--------+
```

<br>

------

<br>

### SQL INNER JOIN

SQL INNER JOIN 关键字用于获取两个表之间根据指定条件产生的交集。

**语法形式：**

```sql
SELECT column_name(s)
FROM table1
INNER JOIN table2
ON table1.column_name = table2.column_name;
```

**SQL INNER JOIN实例：**

为了方便演示我将原先的`user_profile`拆分为两个表，通过`device_id `联接两个表

```sql
mysql> SELECT * FROM user_profile;
+----+-----------+--------+------+
| id | device_id | gender | age  |
+----+-----------+--------+------+
|  1 |      2138 | male   |   21 |
|  2 |      3214 | male   | NULL |
|  3 |      6543 | female |   20 |
|  4 |      2315 | female |   23 |
|  5 |      5432 | male   |   25 |
+----+-----------+--------+------+

mysql> SELECT * FROM user_profile_copy;
+-----------+------------+----------+
| device_id | university | province |
+-----------+------------+----------+
|      2138 | 北京大学   | BeiJing  |
|      3214 | 复旦大学   | Shanghai |
|      6543 | 北京大学   | BeiJing  |
|      2315 | 浙江大学   | ZheJiang |
+-----------+------------+----------+
```

结果展示：需要注意的是结果集中并不存在`device_id `为5432的学生，因为第二张表中没有这个学生的信息。

```sql
mysql> SELECT * FROM user_profile u1 INNER JOIN user_profile_copy u2 ON u1.device_id = u2.device_id;
+----+-----------+--------+------+-----------+------------+----------+
| id | device_id | gender | age  | device_id | university | province |
+----+-----------+--------+------+-----------+------------+----------+
|  1 |      2138 | male   |   21 |      2138 | 北京大学   | BeiJing  |
|  2 |      3214 | male   | NULL |      3214 | 复旦大学   | Shanghai |
|  3 |      6543 | female |   20 |      6543 | 北京大学   | BeiJing  |
|  4 |      2315 | female |   23 |      2315 | 浙江大学   | ZheJiang |
+----+-----------+--------+------+-----------+------------+----------+
```

<br>

------

<br>

### SQL LEFT JOIN

LEFT JOIN会返回左表（table1）的全部值，并以此进行基础表进行匹配。

而右表（table2）只会展示能够匹配成功的数据。

如果右表中没有左表的匹配项，结果集会用NULL进行填充。

**语法形式：**

```sql
SELECT column_name(s)
FROM table1
LEFT JOIN table2
ON table1.column_name = table2.column_name;
```

**SQL LEFT JOIN 实例：**

```sql
mysql> SELECT * FROM user_profile u1 LEFT JOIN user_profile_copy u2 ON u1.device_id = u2.device_id;
+----+-----------+--------+------+-----------+------------+----------+
| id | device_id | gender | age  | device_id | university | province |
+----+-----------+--------+------+-----------+------------+----------+
|  1 |      2138 | male   |   21 |      2138 | 北京大学   | BeiJing  |
|  2 |      3214 | male   | NULL |      3214 | 复旦大学   | Shanghai |
|  3 |      6543 | female |   20 |      6543 | 北京大学   | BeiJing  |
|  4 |      2315 | female |   23 |      2315 | 浙江大学   | ZheJiang |
|  5 |      5432 | male   |   25 |      NULL | NULL       | NULL     |
+----+-----------+--------+------+-----------+------------+----------+
```

<br>

------

<br>

### SQL RIGHT JOIN

RIGHT JOIN的作用与LEFT JOIN的作用是相对的。

**语法形式：**

```sql
SELECT column_name(s)
FROM table1
RIGHT JOIN table2
ON table1.column_name = table2.column_name;
```

**SQL RIGHT JOIN实例**

```sql
mysql> SELECT * FROM user_profile u1 RIGHT JOIN user_profile_copy u2 ON u1.device_id = u2.device_id;
+------+-----------+--------+------+-----------+------------+----------+
| id   | device_id | gender | age  | device_id | university | province |
+------+-----------+--------+------+-----------+------------+----------+
|    1 |      2138 | male   |   21 |      2138 | 北京大学   | BeiJing  |
|    2 |      3214 | male   | NULL |      3214 | 复旦大学   | Shanghai |
| NULL |      NULL | NULL   | NULL |      6543 | 北京大学   | BeiJing  |
|    4 |      2315 | female |   23 |      2315 | 浙江大学   | ZheJiang |
+------+-----------+--------+------+-----------+------------+----------+
```

