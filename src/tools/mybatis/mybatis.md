---
# 这是文章的标题
title: MyBatis 与 Spring 整合实战
# 你可以自定义封面图片
# cover: /assets/images/cover1.jpg
# 这是页面的图标
# icon: http://cdn.leemuzi.com/weblog/linear-list.svg
# 这是侧边栏的顺序
# order: 3
# 设置作者
author: 李木子
# 设置写作时间
# date: 2020-01-01
# 一个页面可以有多个分类
category:
  - MyBatis
# 一个页面可以有多个标签
# tag:
#   - 树
#   - 二叉树
# 此页面会在文章列表置顶
# sticky: true
# 此页面会出现在星标文章中
# star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

<br>

<img src="http://cdn.leemuzi.com/weblog/jiyu.png" style="zoom:10%;" />作者寄语：

MyBatis 是一款优秀的持久层框架，它通过 XML 或注解的方式将 Java 对象与 SQL 语句进行映射，避免了传统 JDBC 的繁琐操作。与全自动 ORM 框架（如 Hibernate）不同，MyBatis 强调 SQL 的灵活控制，特别适合需要复杂 SQL 优化的场景。

## MyBatis环境搭建

### 创建Maven项目

demo项目的JDK版本是17，这里提一下JDK版本的原因是建议不要使用特别新的JDK版本，因为最新的版本可能会出现不稳定或者功能不兼容的情况。
<div align=center>
<img src="http://cdn.leemuzi.com/weblog/image-20250322170039761.png" style="zoom: 45%;" />
</div>

创建之后项目结构大概就是这样，MyBatisDemo中的src文件是不会写任何业务代码的，可以选择删除

![](http://cdn.leemuzi.com/weblog/image-20250322171722587.png)

### 连接数据库

创建MySQL数据库连接，我这里使用的本地虚拟机中的MySQL，如果使用的是本地的数据库Host需要修改为本地的地址`localhost`或`127.0.0.1`

![](http://cdn.leemuzi.com/weblog/image-20250322172502571.png)

连接成功数据库之后就可以编写业务代码，我会使用多模块编写业务代码。

### 创建多模块

创建一个子模块`mybatis`，整体的项目结构如下。

<img src="http://cdn.leemuzi.com/weblog/image-20250322173425880.png" style="zoom:50%;" />

### 导入相关依赖

父模块依赖

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.0.0</version>
    </parent>
    <packaging>pom</packaging>
    <groupId>com.leemuzi</groupId>
    <artifactId>MyBatisDemo</artifactId>
    <version>1.0-SNAPSHOT</version>
    <name>train</name>
    <description>train</description>
    <modules>
        <module>mybatis</module>
    </modules>
    <properties>
        <maven.compiler.source>17</maven.compiler.source>
        <maven.compiler.target>17</maven.compiler.target>
        <spring-cloud.version>2022.0.0</spring-cloud.version>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <lombok.version>1.18.30</lombok.version>
        <mybatis.version>3.0.0</mybatis.version>
        <mysql.version>8.0.22</mysql.version>
    </properties>

    <dependencyManagement>
        <dependencies>
            <!--lombok依赖-->
            <dependency>
                <groupId>org.projectlombok</groupId>
                <artifactId>lombok</artifactId>
                <version>${lombok.version}</version>
            </dependency>
            <!--MySQL依赖-->
            <dependency>
                <groupId>mysql</groupId>
                <artifactId>mysql-connector-java</artifactId>
                <version>${mysql.version}</version>
            </dependency>
            <!--mybatis依赖-->
            <dependency>
                <groupId>org.mybatis.spring.boot</groupId>
                <artifactId>mybatis-spring-boot-starter</artifactId>
                <version>${mybatis.version}</version>
            </dependency>
        </dependencies>
    </dependencyManagement>

</project>
```

子模块依赖

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.leemuzi</groupId>
        <artifactId>MyBatisDemo</artifactId>
        <version>1.0-SNAPSHOT</version>
    </parent>
    <packaging>jar</packaging>
    <artifactId>mybatis</artifactId>
    <name>mybatis</name>
    <description>mybatis</description>

    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
        </dependency>
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
        </dependency>
        <dependency>
            <groupId>org.mybatis.spring.boot</groupId>
            <artifactId>mybatis-spring-boot-starter</artifactId>
        </dependency>
    </dependencies>

</project>

```

关于MyBatis的依赖需要进行解释一下

```xml
<!-- 这个依赖是官方文档中提供的 配置相对比较复杂-->
<dependency>
  <groupId>org.mybatis</groupId>
  <artifactId>mybatis</artifactId>
  <version>x.x.x</version>
</dependency>

<!-- MyBatis 官方为 Spring Boot 提供的集成依赖 可以简化配置 项目中也是使用的这个依赖-->
<dependency>
	<groupId>org.mybatis.spring.boot</groupId>
	<artifactId>mybatis-spring-boot-starter</artifactId>
</dependency>
```

### 配置`application.properties`

```yaml
# 配置服务器端口，端口这里可能会出现的问题是端口被占用，可以选择换一个端口。
server.port=8081

# 数据库的一些必要配置
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://192.168.0.198:3306/mybatis_demo?characterEncoding=UTF8&autoReconnect=true&serverTimezone=Asia/Shanghai
spring.datasource.username=root
spring.datasource.password=root

# 这里的配置十分重要，这就是mybatis依赖提供的遍历，路径是mapper文件内的所有xml文件
mybatis.mapper-locations=classpath:/mapper/**/*.xml
```

## 业务代码

### 控制层

```java
@RestController
public class MybatisController {

    @Autowired
    private MybatisService mybatisService;

    @GetMapping("/count")
    public int count() {
        return mybatisService.count();
    }
}
```

### 服务层

```java
public interface MybatisService {

    int count();
    
}
```

```java
public class MybatisServiceImpl implements MybatisService {

    @Autowired
    private MybatisMapper mapper;

    @Override
    public int count() {
        return mapper.count();
    }
}

```

### 持久层

```java
@Mapper
public interface MybatisMapper {
    
    int count();
    
}
```

### 创建映射文件

映射文件在该项目中存储位置是`src/main/resources/mapper/MybatisMapper.xml`，`application.properties`要确保路径是正确的

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "https://mybatis.org/dtd/mybatis-3-mapper.dtd">
<!--namespace 是MybatisMapper的位置-->
<mapper namespace="com.leemuzi.mybatis.mapper.MybatisMapper">
    <!--id是方法的名字-->
    <select id="count" resultType="int">
        select count(1) from mybatis_user
    </select>
</mapper>
```

### 测试结果

结果查询到我的数据库中只有一条数据，测试成功。

![](http://cdn.leemuzi.com/weblog/image-20250322182236382.png)

## 来点错误

（1）`mybatis.mapper-locations`配置错误或没配置

![](http://cdn.leemuzi.com/weblog/image-20250322182707252.png)

（2）动态SQL中的id或返回类型不匹配

![](http://cdn.leemuzi.com/weblog/image-20250322183037227.png)

![](http://cdn.leemuzi.com/weblog/image-20250322183125783.png)

（3）但是使用包装类型是不会出现错误的

![](http://cdn.leemuzi.com/weblog/image-20250322183216486.png)

## XML映射器的核心

### Select

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

**示例1：查询单条记录（返回 Java Bean）**

```xml
<select id="getUserById" resultType="com.example.User">
    SELECT * FROM user WHERE id = #{id}
</select>
```

- 对应mapper接口方法

  ```java
  User getUserById(int id);
  ```

**示例2：查询多条记录（返回 List）**

```xml
<select id="getAllUsers" resultType="com.example.User">
    SELECT * FROM user
</select>
```

- 对应mapper接口方法

  ```java
  List<User> getAllUsers();
  ```

**示例3：多个参数（使用 `@Param` 注解）**

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

**示例4：使用 Map 传递参数**

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

**示例5：动态 SQL**

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

**示例6：分页查询（结合 LIMIT 或 PageHelper）**

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







### Insert

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

**示例1：插入基本类型参数**

```xml
<insert id="insertUser" parameterType="String">
    INSERT INTO user (name) VALUES (#{name})
</insert>
```

- 对应mapper接口方法

  ```java
  void insertUser(String name);
  ```

**示例2：插入对象参数**

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

**示例3：使用自增主键**

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

**示例4：插入 Map 参数**

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

**示例5：批量插入**

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







