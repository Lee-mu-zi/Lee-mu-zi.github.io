---
title: MyBatis-动态SQL
tags: 
 - SSM
 - MyBatis 
sticky: 999
---

# MyBatis-动态SQL

::: tip ：

动态 SQL 是 MyBatis 最强大的特性之一，它允许你根据条件动态构建 SQL 语句，避免了在 Java 代码中拼接 SQL 的繁琐和安全隐患。在 MyBatis 之前的版本中，需要花时间了解大量的元素。借助功能强大的基于 OGNL 的表达式，MyBatis 3 替换了之前的大部分元素，大大精简了元素种类，现在要学习的元素种类比原来的一半还要少。

- if
- choose (when, otherwise)
- trim (where, set)
- foreach

:::



## if

`<if>` 是 MyBatis 动态 SQL 中最基础也是最常用的元素，它允许你根据条件动态包含 SQL 片段。

**核心特性：**

- **条件判断**：基于参数值决定是否包含 SQL 片段
- **无缝拼接**：自动处理前后空格，避免 SQL 语法错误
- **灵活组合**：可与其他动态标签（如 where、set 等）配合使用

### **示例1：基础条件查询**

```xml
<select id="findUsers" parameterType="map" resultType="User">
  SELECT * FROM users
  WHERE 1=1
  <if test="name != null">
    AND name = #{name}
  </if>
  <if test="age != null">
    AND age = #{age}
  </if>
</select>
```

### **示例2：多条件组合**

```xml
<select id="searchProducts" parameterType="map" resultType="Product">
  SELECT * FROM products
  WHERE status = 'ACTIVE'
  <if test="category != null">
    AND category = #{category}
  </if>
  <if test="minPrice != null">
    AND price >= #{minPrice}
  </if>
  <if test="maxPrice != null">
    AND price &lt;= #{maxPrice}  <!-- 注意小于号的转义 -->
  </if>
</select>
```

### **示例3：更新语句中的条件更新**

```xml
<update id="updateUserSelective" parameterType="User">
  UPDATE users
  <set>
    <if test="name != null">name = #{name},</if>
    <if test="age != null">age = #{age},</if>
    <if test="email != null">email = #{email},</if>
  </set>
  WHERE id = #{id}
</update>
```

### **示例4：复杂条件判断**

```xml
<select id="findSpecialUsers" parameterType="map" resultType="User">
  SELECT * FROM users
  WHERE
  <if test="type == 'VIP'">
    vip_level > 3 AND
  </if>
  <if test="type == 'NEW'">
    create_date > #{beginDate} AND
  </if>
  status = 'ACTIVE'
</select>
```

### **示例5：嵌套条件判断**

```xml
<if test="condition1">
  SQL片段1
  <if test="condition2">
    AND 子条件SQL
  </if>
</if>
```

### **示例6：集合/数组判断**

```xml
<if test="ids != null and ids.size() > 0">
  AND id IN
  <foreach collection="ids" item="id" open="(" separator="," close=")">
    #{id}
  </foreach>
</if>
```

### **示例7：单个参数多条件判断**

```xml
<if test="name != null and name != ''">
  AND name = #{name}
</if>
```

## choose、when、otherwise

MyBatis 的 `<choose>` 元素相当于 Java 中的 `switch-case` 语句，提供了一种多条件分支选择的动态 SQL 构建方式。

### 核心元素说明

| 元素          | 说明           | 必须 | 出现次数 |
| :------------ | :------------- | :--- | :------- |
| `<choose>`    | 多条件选择容器 | 是   | 1        |
| `<when>`      | 条件分支       | 否   | 1+       |
| `<otherwise>` | 默认分支       | 否   | 0或1     |

### 示例1：单条件多值判断

```xml
<select id="findByStatus" parameterType="string" resultType="User">
    SELECT * FROM users
    WHERE
    <choose>
        <when test="status == 'active'">
            <!--查询未逻辑删除的元素中status值为active的数据-->
            status = 1 AND deleted = 0
        </when>
        <when test="status == 'inactive'">
            <!--查询未逻辑删除的元素中status值为inactive的数据-->
            status = 0 AND deleted = 0
        </when>
        <when test="status == 'deleted'">
            <!--查询已经删除的元素，该数据在数据库中属于逻辑删除，所以能够查到-->
            deleted = 1
        </when>
        <otherwise>
            status IS NOT NULL
        </otherwise>
    </choose>
</select>
```

### 示例2：多字段排序控制

```xml
<select id="findAllUsers" parameterType="map" resultType="User">
    SELECT * FROM users
    ORDER BY
    <choose>
        <when test="orderBy == 'name'">
            name ${direction}
        </when>
        <when test="orderBy == 'email'">
            email ${direction}
        </when>
        <when test="orderBy == 'createTime'">
            create_time ${direction}
        </when>
        <otherwise>
            id DESC
        </otherwise>
    </choose>
</select>
```

### 示例3： 复杂条件组合

```xml
<select id="searchProducts" parameterType="map" resultType="Product">
    SELECT * FROM products
    <where>
        <choose>
            <when test="type == 'electronic'">
                category = 'ELECTRONIC'
                <if test="priceMin != null">
                    AND price >= #{priceMin}
                </if>
            </when>
            <when test="type == 'clothing'">
                category = 'CLOTHING'
                <if test="size != null">
                    AND size = #{size}
                </if>
            </when>
            <otherwise>
                stock > 0
            </otherwise>
        </choose>
    </where>
</select>
```

## trim、where、set

这三个标签都是 MyBatis 提供的智能 SQL 片段处理工具，用于解决动态 SQL 构建中的常见问题。

### where 标签

`<where>` 是 MyBatis 动态 SQL 中用于智能构建 WHERE 子句的核心标签，它能自动处理条件语句的前缀和连接词问题。

#### 核心功能

- **智能插入WHERE关键字：** 只有当包含的条件至少有一个成立的时候，才会插入WHERE关键字
- **自动去除多余的AND/OR：** 会智能的去除条件块开头不必要的AND或OR连接词
- **条件组合：** 可以嵌套`<if>`, `<choose>` 等其他动态标签

#### 示例

```xml
<select id="findUsers" parameterType="map" resultType="User">
  SELECT * FROM users
  <where>
    <if test="name != null">
      name = #{name}
    </if>
    <if test="age != null">
      AND age = #{age}
    </if>
  </where>
</select>
```

```sql
-- 所有条件都满足生成的SQL
SELECT * FROM users WHERE name = ? AND age = ?

-- 当只有name参数满足时
SELECT * FROM users WHERE name = ?

-- 当只有age参数满足时
SELECT * FROM users WHERE age = ?

-- 当没有参数满足时
SELECT * FROM users
```

#### 注意事项

- **连接词位置**：条件语句中的 AND/OR 应该写在行首（MyBatis 处理时更容易识别）

- **空条件处理**：当所有条件都不满足时，WHERE 关键字不会出现

- **性能考虑**：复杂的动态 WHERE 条件可能影响 SQL 执行计划

- **与 `<if>` 配合**：通常需要与 `<if>` 标签一起使用才有意义

- **不要使用`WHERE+ <if>`**：

  ```xml
  <select id="findUsers" parameterType="map" resultType="User">
    SELECT * FROM users
    WHERE
      <if test="name != null">
        name = #{name}
      </if>
      <if test="age != null">
        AND age = #{age}
      </if>
  </select>
  ```

  如果上面的name匹配失败就会出现以下错误的SQL语句

  ```sql
  SELECT * FROM users WHERE AND age = ?
  ```

### set标签

`<set>` 是 MyBatis 动态 SQL 中专门用于处理 UPDATE 语句中 SET 子句的智能标签，它能够自动处理字段更新时的逗号和关键字问题。

#### 核心功能

- **智能插入 SET 关键字**：只有至少一个字段需要更新时才会添加 SET
- **自动去除多余逗号**：自动删除最后一个字段后的多余逗号
- **条件更新支持**：配合 `<if>` 实现按需更新字段

#### 示例

```xml
<update id="updateUser" parameterType="User">
  UPDATE users
  <set>
    <if test="name != null">name = #{name},</if>
    <if test="age != null">age = #{age},</if>
    <if test="email != null">email = #{email},</if>
  </set>
  WHERE id = #{id}
</update>
```

```sql
-- 当name、age、email都有值时
UPDATE users SET name = ?, age = ?, email = ? WHERE id = ?

-- 当只有name和email有值时
UPDATE users SET name = ?, email = ? WHERE id = ?

-- 当所有条件都不满足时 注意：这种会导致语法错误，实践中应避免
-- 至少保证一个字段更新：确保至少有一个 <if> 条件成立
-- 必填字段放外面：把必须更新的字段放在 <set> 外
UPDATE users WHERE id = ?
```

#### 注意事项

- **空更新防护**：确保至少有一个字段会被更新，否则会导致 SQL 语法错误
- **逗号位置**：每个字段赋值语句末尾需要加逗号，`<set>` 会智能去除最后一个
- **性能考虑**：频繁更新的字段可以放在 `<set>` 外作为必更新字段
- **事务控制**：更新操作通常需要在事务中执行

### trim标签

`<trim>` 是 MyBatis 动态 SQL 中最灵活的标签之一，它允许你完全自定义 SQL 片段的修饰方式，可以替代 `<where>` 和 `<set>` 标签，实现更复杂的 SQL 片段处理需求。

#### 核心功能

1. **自定义前缀/后缀**：可自由添加或去除 SQL 片段前后的内容
2. **智能修剪**：自动去除指定的前缀或后缀字符串
3. **多功能组合**：可以同时处理前缀和后缀的修剪需求
4. **替代其他标签**：能完全替代 `<where>` 和 `<set>` 的功能

#### 基础语法

```xml
<trim prefix="前缀" 
      suffix="后缀"
      prefixOverrides="需去除的前缀"
      suffixOverrides="需去除的后缀">
  SQL片段内容
</trim>
```

#### 核心说明

| 属性              | 说明                                     | 示例                         |
| :---------------- | :--------------------------------------- | :--------------------------- |
| `prefix`          | 在内容前添加的前缀                       | `prefix="WHERE"`             |
| `suffix`          | 在内容后添加的后缀                       | `suffix=")"`                 |
| `prefixOverrides` | 需要去除的前缀内容（可多个，用竖线分隔） | `prefixOverrides="AND | OR"` |
| `suffixOverrides` | 需要去除的后缀内容（可多个，用竖线分隔） | `suffixOverrides=","`        |

#### 示例1：替代` <where> `标签

```xml
<where>
  <if test="name != null">AND name = #{name}</if>
</where>

<!-- 等价于 -->
<trim prefix="WHERE" prefixOverrides="AND |OR ">
  <if test="name != null">AND name = #{name}</if>
</trim>
```

#### 示例2：替代` <set> `标签

```xml
<set>
  <if test="name != null">name = #{name},</if>
</set>

<!-- 等价于 -->
<trim prefix="SET" suffixOverrides=",">
  <if test="name != null">name = #{name},</if>
</trim>
```

#### 示例3： 复杂条件组合

```xml
<select id="findUsers" resultType="User">
  SELECT * FROM users
  <trim prefix="WHERE" prefixOverrides="AND |OR |NOT ">
    <if test="name != null">AND name = #{name}</if>
    <if test="age != null">OR age = #{age}</if>
    <if test="notAdmin">NOT is_admin = 1</if>
  </trim>
</select>
```

#### 示例4： 动态列选择

```xml
<select id="selectColumns" resultType="map">
  SELECT
  <trim suffixOverrides=",">
    <if test="selectId">id,</if>
    <if test="selectName">name,</if>
    <if test="selectEmail">email,</if>
    create_time
  </trim>
  FROM users
</select>
```

####  示例5：多重嵌套修剪

```xml
<update id="updateComplex">
  UPDATE table
  <trim prefix="SET" suffixOverrides=",">
    <if test="field1 != null">field1 = #{field1},</if>
    <trim prefix="(" suffix=")" suffixOverrides=",">
      <if test="subField1 != null">sub_field1 = #{subField1},</if>
      <if test="subField2 != null">sub_field2 = #{subField2},</if>
    </trim>
  </trim>
  WHERE id = #{id}
</update>
```

####  示例6：动态 IN 子句

```xml
<select id="findInList" resultType="User">
  SELECT * FROM users
  WHERE id IN
  <trim prefix="(" suffix=")" suffixOverrides=",">
    <foreach collection="ids" item="id">
      #{id},
    </foreach>
  </trim>
</select>
```

### foreach标签

#### 基础语法

```xml
<foreach item="item" index="index" collection="list" open="(" separator="," close=")">
  #{item}
</foreach>
```

#### 核心属性

| 属性         | 说明                 | 是否必填 | 默认值  |
| :----------- | :------------------- | :------- | :------ |
| `collection` | 要遍历的集合         | 是       | 无      |
| `item`       | 当前遍历的元素变量名 | 否       | "item"  |
| `index`      | 当前遍历的索引变量名 | 否       | "index" |
| `open`       | 循环开始时的字符串   | 否       | 空      |
| `close`      | 循环结束时的字符串   | 否       | 空      |
| `separator`  | 元素间的分隔符       | 否       | 空      |

#### 示例1：IN 条件查询

```xml
<select id="selectUsersByIds" resultType="User">
  SELECT * FROM users
  WHERE id IN
  <foreach item="id" collection="ids" open="(" separator="," close=")">
    #{id}
  </foreach>
</select>
```

对应java调用

```java
List<User> selectUsersByIds(@Param("ids") List<Integer> ids);
```

生成的 SQL

```sql
SELECT * FROM users WHERE id IN (1, 2, 3)
```

#### 示例2：批量插入

```xml
<insert id="batchInsertUsers">
  INSERT INTO users (name, age) VALUES
  <foreach item="user" collection="list" separator=",">
    (#{user.name}, #{user.age})
  </foreach>
</insert>
```

生成的SQL

```sql
INSERT INTO users (name, age) VALUES 
('张三', 25), ('李四', 30), ('王五', 28)
```

### script标签

`<script>`是 MyBatis 3.5+ 版本引入的标签，主要用于注解方式的 SQL 编写，提供更好的格式化支持和动态 SQL 能力。

#### 示例在注解中使用多行 SQL

```java
@Update({
    "<script>",
    "UPDATE users",
    "  <set>",
    "    <if test='name != null'>name=#{name},</if>",
    "    <if test='age != null'>age=#{age},</if>",
    "  </set>",
    "WHERE id=#{id}",
    "</script>"
})
void updateUser(User user);
```

### bind标签

`<bind>` 是 MyBatis 提供的一个强大标签，用于在动态 SQL 中创建和绑定变量，可以显著简化复杂表达式和提高 SQL 可读性。

```xml
<select id="selectBlogsLike" resultType="Blog">
  <bind name="pattern" value="'%' + _parameter.getTitle() + '%'" />
  SELECT * FROM BLOG
  WHERE title LIKE #{pattern}
</select>
```

