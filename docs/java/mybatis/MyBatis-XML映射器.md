---
# 这是文章的标题
title: MyBatis-XML映射器
tag:
  - XML映射器
  - MyBatis
sticky: 997

---

# MyBatis-XML映射器

::: tip ：

MyBatis 的 XML 映射器是 MyBatis 框架中用于定义 SQL 语句和结果映射的核心配置文件，它将 Java 方法与 SQL 语句进行绑定。

:::

## Select

在 MyBatis 中，`<select>` 标签用于定义查询操作的 SQL 语句，是 Mapper XML 文件中最常用的标签之一。它支持多种查询方式，包括单表查询、关联查询、动态 SQL 等。

```xml
<select
  id="selectPerson" # 命名空间的唯一标识符
  parameterType="int" # 定义传入SQL语句的参数类型
  resultType="hashmap" # 定义 SQL 查询结果的返回类型。
  resultMap="personResultMap" # 定义结果集的映射关系。与 resultType 二选一使用。
  flushCache="false" # 是否清空本地缓存和二级缓存。
  useCache="true" # 是否将查询结果存入二级缓存。
  timeout="10" # 设置 SQL 语句的执行超时时间（单位：秒）。
  fetchSize="256" # 设置每次从数据库获取的记录数。
  statementType="PREPARED" # 定义 SQL 语句的执行类型。STATEMENT：普通语句。PREPARED（默认）：预处理语句。CALLABLE：调用存储过程。
  resultSetType="FORWARD_ONLY"> # 设置结果集的类型。
```

### **示例1：查询单条记录（返回 Java Bean）**

```xml
<select id="getUserById" resultType="com.example.User">
    SELECT * FROM user WHERE id = #{id}
</select>
```

- 对应mapper接口方法

  ```java
  User getUserById(int id);
  ```

### **示例2：查询多条记录（返回 List）**

```xml
<select id="getAllUsers" resultType="com.example.User">
    SELECT * FROM user
</select>
```

- 对应mapper接口方法

  ```java
  List<User> getAllUsers();
  ```

### **示例3：多个参数（使用 `@Param` 注解）**

```xml
<select id="getUsersByNameAndAge" resultType="User">
    SELECT * FROM user 
    WHERE name = #{name} AND age = #{age}
</select>
```

- 对应mapper接口方法

  ```java
  List<User> getUsersByNameAndAge(
      @Param("name") String name,
      @Param("age") int age
  );
  ```

### **示例4：使用 Map 传递参数**

```xml
<select id="getUsersByMap" resultType="User">
    SELECT * FROM user 
    WHERE name = #{name} AND age = #{age}
</select>
```

- 对应mapper接口方法

  ```java
  List<User> getUsersByMap(Map<String, Object> params);
  ```

### **示例5：动态 SQL**

```xml
<select id="getUsersByCondition" resultType="User">
    SELECT * FROM user
    <where>
        <if test="name != null">
            AND name = #{name}
        </if>
        <if test="age != null">
            AND age = #{age}
        </if>
    </where>
</select>
```

- 对应mapper接口方法

  ```java
  List<User> selectUsersByCondition(Map<String, Object> params);
  ```

### **示例6：分页查询（结合 LIMIT 或 PageHelper）**

```xml
<select id="selectUsersByPage" parameterType="map" resultType="User">
    SELECT id, name, age FROM user
    LIMIT #{offset}, #{pageSize}
</select>
```

- 对应mapper接口方法

  ```java
  List<User> selectUsersByPage(@Param("offset") int offset, @Param("pageSize") int pageSize);
  ```

### ⭐**示例7：关联查询（一对多、多对一）**

假设用户(User)和订单(Order)两个实体，目的是获取用户信息和用户的所有订单信息

```java
// User.java
public class User {
    private Integer id;
    private String name;
    private List<Order> orders; // 一对多关系
    
    // getters and setters
}

// Order.java
public class Order {
    private Integer id;
    private String orderNo;
    private Integer userId;
    
    // getters and setters
}
```

- **方法1：`JOIN` + `resultMap`**

  ```xml
  <resultMap id="userWithOrdersMap" type="User">
      <!-- 映射User的基本属性 -->
      <id property="id" column="user_id"/>
      <result property="name" column="user_name"/>
      <!-- 映射orders集合 -->
      <collection property="orders" ofType="Order">
          <id property="id" column="order_id"/>
          <result property="orderNo" column="order_no"/>
          <result property="userId" column="user_id"/>
      </collection>
  </resultMap>
  
  <select id="selectUserWithOrders" resultMap="userWithOrdersMap">
      SELECT 
          u.id as user_id,
          u.name as user_name,
          o.id as order_id,
          o.order_no as order_no,
          o.user_id as user_id
      FROM 
          user u
      LEFT JOIN 
          orders o ON u.id = o.user_id
      WHERE 
          u.id = #{userId}
  </select>
  ```

  - 对应mapper接口方法

    ```java
    public interface UserMapper {
        User selectUserWithOrders(Integer userId);
    }
    ```

- **方法2：嵌套查询（`<association>` 和 `<collection>`）**

  ```xml
  <resultMap id="userWithOrdersMap" type="User">
      <id property="id" column="id" />
      <result property="name" column="name" />
      <collection property="orders" select="selectOrdersByUserId" column="id" />
  </resultMap>
  
  <select id="selectUserWithOrders" resultMap="userWithOrdersMap">
      SELECT id, name FROM user WHERE id = #{userId}
  </select>
  
  <select id="selectOrdersByUserId" resultType="Order">
      SELECT id, name FROM orders WHERE user_id = #{userId}
  </select>
  ```

  - 对应mapper接口方法

    ```xml
    User selectUserWithOrders(int userId);
    List<Order> selectOrdersByUserId(int userId);
    ```

- **多对一关联**

  - 实体类

    ```java
    // Order.java
    public class Order {
        private Integer id;
        private String orderNo;
        private User user;  // 多对一关联
        
        // getters and setters
    }
    
    // User.java
    public class User {
        private Integer id;
        private String name;
        
        // getters and setters
    }
    ```

  - Mapper XML 配置

    ```xml
    <resultMap id="orderWithUserMap" type="Order">
        <!-- 映射Order的基本属性 -->
        <id property="id" column="id"/>
        <result property="orderNo" column="order_no"/>  
        <!-- 多对一关联映射 -->
        <association property="user" javaType="User">
            <id property="id" column="user_id"/>
            <result property="name" column="user_name"/>
        </association>
    </resultMap>
    
    <select id="selectOrderWithUser" resultMap="orderWithUserMap">
        SELECT 
            o.id,
            o.order_no,
            o.user_id,
            u.id as user_id,
            u.name as user_name
        FROM 
            orders o
        LEFT JOIN 
            user u ON o.user_id = u.id
        WHERE 
            o.id = #{orderId}
    </select>
    ```

  -  Mapper 接口

    ```java
    public interface OrderMapper {
        Order selectOrderWithUser(Integer orderId);
    }
    ```

## Insert

在 MyBatis 中，`<insert>` 标签用于定义插入操作的 SQL 语句。它是 MyBatis 映射文件（Mapper XML）中的核心标签之一，用于将数据插入到数据库中。

```xml
<insert
  id="insertAuthor"
  parameterType="domain.blog.Author"
  flushCache="true" 
  statementType="PREPARED"
  keyProperty="" # 将生成的主键值赋值给参数的哪个属性
  keyColumn="" # 数据库表中主键的列名（可选，默认根据表结构自动推断）。
  useGeneratedKeys="" # 是否使用数据库生成的主键（如自增 ID），默认为 false。
  timeout="20">
```

### **示例1：插入基本类型参数**

```xml
<insert id="insertUser" parameterType="String">
    INSERT INTO user (name) VALUES (#{name})
</insert>
```

- 对应mapper接口方法

  ```java
  void insertUser(String name);
  ```

### **示例2：插入对象参数**

```xml
<insert id="insertUser" parameterType="User">
    INSERT INTO user (name, age, email)
    VALUES (#{name}, #{age}, #{email})
</insert>
```

- 对应mapper接口方法

  ```java
  void insertUser(User user);
  ```

### **示例3：使用自增主键**

如果数据库表的主键是自增的，可以通过 `useGeneratedKeys` 和 `keyProperty` 获取生成的主键值并赋值给对象的属性。

```xml
<insert id="insertUser" parameterType="User" useGeneratedKeys="true" keyProperty="id">
    INSERT INTO user (name, age, email)
    VALUES (#{name}, #{age}, #{email})
</insert>
```

- 执行插入操作后，生成的主键值会自动赋值给 `User` 对象的 `id` 属性。

- 对应 Mapper 接口方法：

  ```java
  void insertUser(User user);
  ```

### **示例4：插入 Map 参数**

```xml
<insert id="insertUser" parameterType="map">
    INSERT INTO user (name, age, email)
    VALUES (#{name}, #{age}, #{email})
</insert>
```

- 对应 Mapper 接口方法：

  ```java
  void insertUser(Map<String, Object> map);
  ```

### **示例5：批量插入**

MyBatis 支持通过 `foreach` 标签实现批量插入。

```xml
<insert id="insertUsers" parameterType="list">
    INSERT INTO user (name, age, email) VALUES
    <foreach collection="list" item="user" separator=",">
        (#{user.name}, #{user.age}, #{user.email})
    </foreach>
</insert>
```

- 对应 Mapper 接口方法：

  ```java
  void insertUsers(List<User> users);
  ```

## Update

`<update>` 标签是 MyBatis 中用于定义更新操作的 XML 元素，它允许你执行数据库记录的修改操作。

```xml
<update
  id="updateAuthor"
  parameterType="domain.blog.Author" # 传入参数的类型（可选）
  flushCache="true" # 是否清空缓存，默认为 true
  statementType="PREPARED" # 指定语句类型，可选 STATEMENT、PREPARED（默认）或 CALLABLE
  timeout="20"> # 设置 SQL 执行的超时时间（单位：秒）
```

### **示例1：基本更新操作**

```xml
<update id="updateUserName" parameterType="map">
    UPDATE users
    SET name = #{newName}
    WHERE id = #{userId}
</update>
```

- 对应 Mapper 接口：

  ```java
  int updateUserName(@Param("userId") int userId, @Param("newName") String newName);
  ```

### **示例2：使用对象参数**

```xml
<update id="updateUser" parameterType="User">
    UPDATE users
    SET name = #{name}, age = #{age}, email = #{email}
    WHERE id = #{id}
</update>
```

- 对应 Mapper 接口：

  ```java
  int updateUser(User user);
  ```

### **示例3：动态更新（使用 `<if>` 和 `<set>`）**

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

### **示例4：批量更新**

```xml
<update id="batchUpdateUsers">
    UPDATE users
    SET status = #{status}
    WHERE id IN
    <foreach collection="userIds" item="id" open="(" separator="," close=")">
        #{id}
    </foreach>
</update>
```

- 对应 Mapper 接口：

  ```java
  int batchUpdateUsers(@Param("userIds") List<Integer> userIds, @Param("status") int status);
  ```

## Delete

`<delete>` 标签是 MyBatis 中用于定义删除操作的 XML 元素，它允许你执行数据库记录的删除操作。

```xml
<delete
  id="deleteAuthor"
  parameterType="domain.blog.Author"
  flushCache="true"
  statementType="PREPARED"
  timeout="20">
```

### **示例1：基本删除**

```xml
<delete id="deleteUserById" parameterType="int">
    DELETE FROM users
    WHERE id = #{userId}
</delete>
```

- 对应 Mapper 接口：

  ```java
  int deleteUserById(int userId);
  ```

### 示例2：多条件删除

```xml
<delete id="deleteUsersByCondition" parameterType="map">
    DELETE FROM users
    WHERE status = #{status}
    AND create_time &lt; #{expireDate}
</delete>
```

- 对应 Mapper 接口：

  ```java
  int deleteUsersByCondition(@Param("status") int status, 
                            @Param("expireDate") Date expireDate);
  ```

### **示例3：批量删除**

```xml
<delete id="batchDeleteUsers">
    DELETE FROM users
    WHERE id IN
    <foreach collection="userIds" item="id" open="(" separator="," close=")">
        #{id}
    </foreach>
</delete>
```

- 对应 Mapper 接口：

  ```java
  int batchDeleteUsers(@Param("userIds") List<Integer> userIds);
  ```

### **示例4：动态条件删除**

```xml
<delete id="deleteByDynamicCondition" parameterType="map">
    DELETE FROM users
    <where>
        <if test="ids != null and ids.size() > 0">
            id IN
            <foreach collection="ids" item="id" open="(" separator="," close=")">
                #{id}
            </foreach>
        </if>
        <if test="status != null">
            AND status = #{status}
        </if>
        <if test="minAge != null">
            AND age &gt;= #{minAge}
        </if>
    </where>
</delete>
```

### **示例5：逻辑删除代替物理删除**

实际项目中，推荐使用逻辑删除而非物理删除：

```xml
<update id="logicalDeleteUser">
    UPDATE users
    SET is_deleted = 1,
        delete_time = NOW()
    WHERE id = #{userId}
</update>
```

## Sql

`<sql>` 标签是 MyBatis 中用于定义可重用 SQL 片段的 XML 元素，它可以显著提高 SQL 语句的可维护性和复用性。

### **示例1：基本列定义复用**

```xml
<!-- 定义列名片段 -->
<sql id="userColumns">
    id, username, email, create_time
</sql>

<!-- 在查询中引用 -->
<select id="selectAllUsers" resultType="User">
    SELECT 
    <include refid="userColumns"/>
    FROM users
</select>

<select id="selectUserById" resultType="User">
    SELECT 
    <include refid="userColumns"/>
    FROM users
    WHERE id = #{id}
</select>
```

### 示例2： 带条件的 SQL 片段

```xml
<sql id="userWhereClause">
    <where>
        <if test="username != null">
            AND username = #{username}
        </if>
        <if test="email != null">
            AND email = #{email}
        </if>
        <if test="status != null">
            AND status = #{status}
        </if>
    </where>
</sql>

<select id="selectUsersByCondition" parameterType="map" resultType="User">
    SELECT * FROM users
    <include refid="userWhereClause"/>
</select>
```

### 示例3：多片段组合

```xml
<sql id="userBaseColumns">
    id, username
</sql>

<sql id="userDetailColumns">
    email, phone, address
</sql>

<select id="selectUserDetails" resultType="User">
    SELECT
    <include refid="userBaseColumns"/>,
    <include refid="userDetailColumns"/>
    FROM users
</select>
```

### 示例4：带参数的 SQL 片段

```xml
<sql id="orderByClause">
    ORDER BY 
    <choose>
        <when test="orderBy != null">
            ${orderBy}
        </when>
        <otherwise>
            create_time DESC
        </otherwise>
    </choose>
</sql>

<select id="selectUsers" parameterType="map" resultType="User">
    SELECT * FROM users
    <include refid="orderByClause">
        <property name="orderBy" value="${orderBy}"/>
    </include>
</select>
```

