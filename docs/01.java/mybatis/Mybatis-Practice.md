---
# 这是文章的标题
title: MyBatis 练习题
tag:
  - MyBatis
  - Spring

---

# MyBatis 练习题

## 项目基础配置

### 项目依赖

```xml
<dependencies>
    <!--lombok依赖-->
    <dependency>
        <groupId>org.projectlombok</groupId>
        <artifactId>lombok</artifactId>
        <version>1.18.30</version>
    </dependency>
    <!--MySQL依赖-->
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>8.0.22</version>
    </dependency>
    <!--mybatis依赖-->
    <dependency>
        <groupId>org.mybatis.spring.boot</groupId>
        <artifactId>mybatis-spring-boot-starter</artifactId>
        <version>3.0.0</version>
    </dependency>
</dependencies>
```

### 配置文件

```properties
# 数据库的一些必要配置
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver
spring.datasource.url=jdbc:mysql://localhost:3306/mybatis_demo?characterEncoding=UTF8&autoReconnect=true&serverTimezone=Asia/Shanghai
spring.datasource.username=******
spring.datasource.password=******

# 这里的配置十分重要，路径是mapper文件内的所有xml文件
mybatis.mapper-locations=classpath:/mapper/**/*.xml

# 开启mapper日志
logging.level.com.leemuzi.mybatis.mapper=trace
```

### 数据库

```sql
DROP TABLE IF EXISTS `course`;
CREATE TABLE `course`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `credit` int NULL DEFAULT NULL COMMENT '学分',
  `hours` int NULL DEFAULT NULL COMMENT '课时',
  `teacher_id` int NULL DEFAULT NULL COMMENT '授课教师ID',
  `description` text CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `teacher_id`(`teacher_id` ASC) USING BTREE,
  CONSTRAINT `course_ibfk_1` FOREIGN KEY (`teacher_id`) REFERENCES `teacher` (`t_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 36 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO `course` VALUES (1, 'Java程序设计', 4, 64, 1, 'Java语言基础与面向对象编程');
INSERT INTO `course` VALUES (2, '数据库原理', 3, 48, 2, '关系数据库理论与应用');
INSERT INTO `course` VALUES (3, 'Web开发技术', 3, 48, 3, '前端与后端Web开发技术');
INSERT INTO `course` VALUES (4, '数据结构', 4, 64, 4, '线性表、树、图等数据结构的基本原理与应用');
INSERT INTO `course` VALUES (5, '算法设计与分析', 3, 48, 5, '常用算法设计与复杂度分析');
INSERT INTO `course` VALUES (6, '操作系统', 4, 64, 6, '操作系统原理与设计');
INSERT INTO `course` VALUES (7, '计算机组成原理', 4, 64, 7, '计算机硬件组成与工作原理');
INSERT INTO `course` VALUES (8, '编译原理', 3, 48, 8, '程序设计语言编译技术');
INSERT INTO `course` VALUES (9, '计算机网络', 3, 48, 9, '网络协议与网络编程');
INSERT INTO `course` VALUES (10, '软件工程', 3, 48, 10, '软件开发流程与方法论');
INSERT INTO `course` VALUES (11, '人工智能基础', 3, 48, 11, '人工智能基本概念与算法');
INSERT INTO `course` VALUES (12, '计算机图形学', 3, 48, 12, '图形生成与处理技术');
INSERT INTO `course` VALUES (13, '嵌入式系统', 3, 48, 13, '嵌入式系统设计与开发');
INSERT INTO `course` VALUES (14, '面向对象程序设计', 4, 64, 16, '面向对象编程思想与实践');
INSERT INTO `course` VALUES (15, '软件测试', 3, 48, 17, '软件测试方法与工具');
INSERT INTO `course` VALUES (16, '软件项目管理', 3, 48, 18, '软件项目规划与管理');
INSERT INTO `course` VALUES (17, '移动应用开发', 3, 48, 19, '移动平台应用开发技术');
INSERT INTO `course` VALUES (18, '人机交互', 3, 48, 20, '用户体验与界面设计');
INSERT INTO `course` VALUES (19, '软件架构', 3, 48, 21, '软件系统架构设计');
INSERT INTO `course` VALUES (20, '敏捷开发', 2, 32, 22, '敏捷开发方法与实践');
INSERT INTO `course` VALUES (21, 'DevOps实践', 3, 48, 23, '开发运维一体化');
INSERT INTO `course` VALUES (22, '网络协议分析', 3, 48, 26, 'TCP/IP协议栈分析');
INSERT INTO `course` VALUES (23, '网络安全', 3, 48, 27, '网络安全技术与防护');
INSERT INTO `course` VALUES (24, '无线网络', 3, 48, 28, '无线通信与网络技术');
INSERT INTO `course` VALUES (25, '网络管理', 3, 48, 29, '网络系统管理与维护');
INSERT INTO `course` VALUES (26, '云计算', 3, 48, 30, '云计算原理与应用');
INSERT INTO `course` VALUES (27, '机器学习', 4, 64, 31, '机器学习算法与应用');
INSERT INTO `course` VALUES (28, '深度学习', 4, 64, 32, '深度学习理论与实战');
INSERT INTO `course` VALUES (29, '自然语言处理', 3, 48, 33, '文本处理与语言理解');
INSERT INTO `course` VALUES (30, '计算机视觉', 3, 48, 34, '图像识别与处理');
INSERT INTO `course` VALUES (31, '强化学习', 3, 48, 35, '强化学习算法与应用');
INSERT INTO `course` VALUES (32, '知识图谱', 3, 48, 36, '知识表示与图谱构建');
INSERT INTO `course` VALUES (33, '数据挖掘', 3, 48, 41, '数据挖掘技术与应用');
INSERT INTO `course` VALUES (34, '大数据技术', 4, 64, 42, '大数据处理框架');
INSERT INTO `course` VALUES (35, '数据可视化', 3, 48, 43, '数据可视化方法与工具');
INSERT INTO `course` VALUES (36, '统计学习', 3, 48, 44, '统计学习方法与应用');

-- ----------------------------
-- Table structure for department
-- ----------------------------
DROP TABLE IF EXISTS `department`;
CREATE TABLE `department`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `dean_id` int NULL DEFAULT NULL COMMENT '系主任ID',
  `location` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `establish_date` date NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `dean_id`(`dean_id` ASC) USING BTREE,
  CONSTRAINT `department_ibfk_1` FOREIGN KEY (`dean_id`) REFERENCES `teacher` (`t_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of department
-- ----------------------------
INSERT INTO `department` VALUES (1, '计算机科学与技术', 1, '教学楼A座3层', '2000-09-01');
INSERT INTO `department` VALUES (2, '软件工程', 16, '教学楼B座2层', '2005-03-15');
INSERT INTO `department` VALUES (3, '网络工程', 26, '教学楼C座4层', '2008-06-20');
INSERT INTO `department` VALUES (4, '人工智能', 31, '科研楼5层', '2015-09-01');
INSERT INTO `department` VALUES (5, '数据科学', 41, '科研楼3层', '2018-03-10');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student`  (
  `s_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `gender` tinyint NULL DEFAULT NULL COMMENT '0:女, 1:男',
  `age` int NULL DEFAULT NULL,
  `class_name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '班级名称',
  `enrollment_date` date NULL DEFAULT NULL COMMENT '入学日期',
  `email` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `address` varchar(200) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`s_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES (1, '张三', 1, 20, '计算机2020级1班', '2020-09-01', 'zhangsan@stu.com', '13900139001', '北京市海淀区');
INSERT INTO `student` VALUES (2, '李四', 0, 19, '计算机2020级1班', '2020-09-01', 'lisi@stu.com', '13900139002', '北京市朝阳区');
INSERT INTO `student` VALUES (3, '王五', 1, 21, '软件工程2020级2班', '2020-09-01', 'wangwu@stu.com', '13900139003', '北京市西城区');
INSERT INTO `student` VALUES (4, '麻子', 0, 18, '计算机2020级2班', '2020-09-01', 'mazi@stu.com', '13900139004', '北京市东城区');
INSERT INTO `student` VALUES (5, '赵一', 1, 20, '计算机2020级1班', '2020-09-01', 'zhaoyi@stu.com', '13900139004', '北京市海淀区');
INSERT INTO `student` VALUES (6, '钱二', 0, 19, '计算机2020级1班', '2020-09-01', 'qianer@stu.com', '13900139005', '北京市朝阳区');
INSERT INTO `student` VALUES (7, '孙三', 1, 21, '计算机2020级2班', '2020-09-01', 'sunsan@stu.com', '13900139006', '北京市西城区');
INSERT INTO `student` VALUES (8, '李四', 0, 20, '计算机2020级2班', '2020-09-01', 'lisi2@stu.com', '13900139007', '北京市东城区');
INSERT INTO `student` VALUES (9, '周五', 1, 22, '计算机2019级1班', '2019-09-01', 'zhouwu@stu.com', '13900139008', '北京市丰台区');
INSERT INTO `student` VALUES (10, '吴六', 0, 21, '计算机2019级1班', '2019-09-01', 'wuliu@stu.com', '13900139009', '北京市石景山区');
INSERT INTO `student` VALUES (11, '郑七', 1, 20, '计算机2019级2班', '2019-09-01', 'zhengqi@stu.com', '13900139010', '北京市通州区');
INSERT INTO `student` VALUES (12, '王八', 0, 19, '计算机2019级2班', '2019-09-01', 'wangba@stu.com', '13900139011', '北京市昌平区');
INSERT INTO `student` VALUES (13, '冯九', 1, 20, '软件工程2020级1班', '2020-09-01', 'fengjiu@stu.com', '13900139012', '北京市大兴区');
INSERT INTO `student` VALUES (14, '陈十', 0, 19, '软件工程2020级1班', '2020-09-01', 'chenshi@stu.com', '13900139013', '北京市顺义区');
INSERT INTO `student` VALUES (15, '褚十一', 1, 21, '软件工程2020级2班', '2020-09-01', 'chushiyi@stu.com', '13900139014', '北京市房山区');
INSERT INTO `student` VALUES (16, '卫十二', 0, 20, '软件工程2020级2班', '2020-09-01', 'weishier@stu.com', '13900139015', '北京市门头沟区');
INSERT INTO `student` VALUES (17, '蒋十三', 1, 22, '软件工程2019级1班', '2019-09-01', 'jiangshisan@stu.com', '13900139016', '北京市怀柔区');
INSERT INTO `student` VALUES (18, '沈十四', 0, 21, '软件工程2019级1班', '2019-09-01', 'shenshisi@stu.com', '13900139017', '北京市平谷区');
INSERT INTO `student` VALUES (19, '韩十五', 1, 20, '软件工程2019级2班', '2019-09-01', 'hanshiwu@stu.com', '13900139018', '北京市密云区');
INSERT INTO `student` VALUES (20, '杨十六', 0, 19, '软件工程2019级2班', '2019-09-01', 'yangshiliu@stu.com', '13900139019', '北京市延庆区');
INSERT INTO `student` VALUES (21, '朱十七', 1, 20, '网络工程2020级1班', '2020-09-01', 'zhushiqi@stu.com', '13900139020', '天津市和平区');
INSERT INTO `student` VALUES (22, '秦十八', 0, 19, '网络工程2020级1班', '2020-09-01', 'qinshiba@stu.com', '13900139021', '天津市河东区');
INSERT INTO `student` VALUES (23, '尤十九', 1, 21, '网络工程2020级2班', '2020-09-01', 'youshijiu@stu.com', '13900139022', '天津市河西区');
INSERT INTO `student` VALUES (24, '许二十', 0, 20, '网络工程2020级2班', '2020-09-01', 'xuershi@stu.com', '13900139023', '天津市南开区');
INSERT INTO `student` VALUES (25, '何二十一', 1, 22, '网络工程2019级1班', '2019-09-01', 'heershiyi@stu.com', '13900139024', '天津市河北区');
INSERT INTO `student` VALUES (26, '吕二十二', 0, 21, '网络工程2019级1班', '2019-09-01', 'lvershiers@stu.com', '13900139025', '天津市红桥区');
INSERT INTO `student` VALUES (27, '施二十三', 1, 20, '人工智能2020级1班', '2020-09-01', 'shiershisan@stu.com', '13900139026', '上海市黄浦区');
INSERT INTO `student` VALUES (28, '张二十四', 0, 19, '人工智能2020级1班', '2020-09-01', 'zhangershisi@stu.com', '13900139027', '上海市徐汇区');
INSERT INTO `student` VALUES (29, '孔二十五', 1, 21, '人工智能2020级2班', '2020-09-01', 'kongershiwu@stu.com', '13900139028', '上海市长宁区');
INSERT INTO `student` VALUES (30, '曹二十六', 0, 20, '人工智能2020级2班', '2020-09-01', 'caoershilu@stu.com', '13900139029', '上海市静安区');
INSERT INTO `student` VALUES (31, '严二十七', 1, 20, '数据科学2020级1班', '2020-09-01', 'yanershiqi@stu.com', '13900139030', '广州市天河区');
INSERT INTO `student` VALUES (32, '华二十八', 0, 19, '数据科学2020级1班', '2020-09-01', 'huaershiba@stu.com', '13900139031', '广州市越秀区');
INSERT INTO `student` VALUES (33, '金二十九', 1, 21, '数据科学2020级2班', '2020-09-01', 'jinershijiu@stu.com', '13900139032', '广州市海珠区');
INSERT INTO `student` VALUES (34, '魏三十', 0, 20, '数据科学2020级2班', '2020-09-01', 'weisanshi@stu.com', '13900139033', '广州市荔湾区');

-- ----------------------------
-- Table structure for student_course
-- ----------------------------
DROP TABLE IF EXISTS `student_course`;
CREATE TABLE `student_course`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `student_id` int NOT NULL,
  `course_id` int NOT NULL,
  `score` decimal(4, 1) NULL DEFAULT NULL COMMENT '成绩',
  `semester` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '学期',
  `academic_year` varchar(10) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '学年',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `unique_enrollment`(`student_id` ASC, `course_id` ASC, `semester` ASC, `academic_year` ASC) USING BTREE,
  INDEX `course_id`(`course_id` ASC) USING BTREE,
  CONSTRAINT `student_course_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `student` (`s_id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `student_course_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of student_course
-- ----------------------------
INSERT INTO `student_course` VALUES (1, 1, 1, 92.5, '2020-2021-2', '2020-2021');
INSERT INTO `student_course` VALUES (2, 1, 2, 88.0, '2020-2021-2', '2020-2021');
INSERT INTO `student_course` VALUES (3, 2, 1, 95.0, '2020-2021-2', '2020-2021');
INSERT INTO `student_course` VALUES (4, 2, 3, 90.5, '2020-2021-2', '2020-2021');
INSERT INTO `student_course` VALUES (5, 3, 2, 85.5, '2020-2021-2', '2020-2021');
INSERT INTO `student_course` VALUES (6, 3, 3, 91.0, '2020-2021-2', '2020-2021');

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS `teacher`;
CREATE TABLE `teacher`  (
  `t_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `gender` tinyint NULL DEFAULT NULL COMMENT '0:女, 1:男',
  `age` int NULL DEFAULT NULL,
  `title` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '职称',
  `department` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT '所属院系',
  `email` varchar(100) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL,
  `hire_date` date NULL DEFAULT NULL,
  PRIMARY KEY (`t_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 54 CHARACTER SET = utf8mb3 COLLATE = utf8mb3_general_ci ROW_FORMAT = DYNAMIC;

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO `teacher` VALUES (1, '张教授', 1, 45, '教授', '计算机科学与技术', 'zhang@edu.com', '13800138001', '2010-08-15');
INSERT INTO `teacher` VALUES (2, '李副教授', 0, 38, '副教授', '计算机科学与技术', 'li@edu.com', '13800138002', '2012-03-20');
INSERT INTO `teacher` VALUES (3, '王讲师', 1, 32, '讲师', '软件工程', 'wang@edu.com', '13800138003', '2015-07-01');
INSERT INTO `teacher` VALUES (4, '麻教授', 0, 42, '教授', '软件工程', 'ma@edu.com', '13800138004', '2015-07-01');
INSERT INTO `teacher` VALUES (5, '陈教授', 1, 48, '教授', '计算机科学与技术', 'chen@edu.com', '13800138004', '2008-06-20');
INSERT INTO `teacher` VALUES (6, '刘副教授', 0, 42, '副教授', '计算机科学与技术', 'liu@edu.com', '13800138005', '2011-09-10');
INSERT INTO `teacher` VALUES (7, '赵讲师', 1, 35, '讲师', '计算机科学与技术', 'zhao@edu.com', '13800138006', '2016-03-15');
INSERT INTO `teacher` VALUES (8, '钱教授', 1, 52, '教授', '计算机科学与技术', 'qian@edu.com', '13800138007', '2005-11-30');
INSERT INTO `teacher` VALUES (9, '孙副教授', 0, 39, '副教授', '计算机科学与技术', 'sun@edu.com', '13800138008', '2013-07-22');
INSERT INTO `teacher` VALUES (10, '周讲师', 1, 31, '讲师', '计算机科学与技术', 'zhou@edu.com', '13800138009', '2018-08-14');
INSERT INTO `teacher` VALUES (11, '吴教授', 1, 47, '教授', '计算机科学与技术', 'wu@edu.com', '13800138010', '2009-04-18');
INSERT INTO `teacher` VALUES (12, '郑副教授', 0, 41, '副教授', '计算机科学与技术', 'zheng@edu.com', '13800138011', '2012-12-05');
INSERT INTO `teacher` VALUES (13, '王助教', 0, 28, '助教', '计算机科学与技术', 'wang2@edu.com', '13800138012', '2020-02-28');
INSERT INTO `teacher` VALUES (14, '冯讲师', 1, 33, '讲师', '计算机科学与技术', 'feng@edu.com', '13800138013', '2017-11-08');
INSERT INTO `teacher` VALUES (15, '陈副教授', 0, 38, '副教授', '计算机科学与技术', 'chen2@edu.com', '13800138014', '2014-05-19');
INSERT INTO `teacher` VALUES (16, '褚教授', 1, 55, '教授', '计算机科学与技术', 'chu@edu.com', '13800138015', '2003-09-12');
INSERT INTO `teacher` VALUES (17, '卫讲师', 0, 30, '讲师', '计算机科学与技术', 'wei@edu.com', '13800138016', '2019-06-25');
INSERT INTO `teacher` VALUES (18, '蒋副教授', 1, 44, '副教授', '计算机科学与技术', 'jiang@edu.com', '13800138017', '2010-10-30');
INSERT INTO `teacher` VALUES (19, '沈助教', 0, 26, '助教', '计算机科学与技术', 'shen@edu.com', '13800138018', '2021-03-15');
INSERT INTO `teacher` VALUES (20, '韩教授', 1, 49, '教授', '软件工程', 'han@edu.com', '13800138019', '2007-08-22');
INSERT INTO `teacher` VALUES (21, '杨副教授', 0, 40, '副教授', '软件工程', 'yang@edu.com', '13800138020', '2012-04-17');
INSERT INTO `teacher` VALUES (22, '朱讲师', 1, 34, '讲师', '软件工程', 'zhu@edu.com', '13800138021', '2016-09-03');
INSERT INTO `teacher` VALUES (23, '秦教授', 1, 51, '教授', '软件工程', 'qin@edu.com', '13800138022', '2006-01-28');
INSERT INTO `teacher` VALUES (24, '尤副教授', 0, 37, '副教授', '软件工程', 'you@edu.com', '13800138023', '2015-07-11');
INSERT INTO `teacher` VALUES (25, '许讲师', 1, 32, '讲师', '软件工程', 'xu@edu.com', '13800138024', '2018-12-20');
INSERT INTO `teacher` VALUES (26, '何教授', 1, 46, '教授', '软件工程', 'he@edu.com', '13800138025', '2008-11-05');
INSERT INTO `teacher` VALUES (27, '吕副教授', 0, 43, '副教授', '软件工程', 'lv@edu.com', '13800138026', '2011-02-14');
INSERT INTO `teacher` VALUES (28, '施讲师', 1, 29, '讲师', '软件工程', 'shi@edu.com', '13800138027', '2020-05-08');
INSERT INTO `teacher` VALUES (29, '张助教', 0, 27, '助教', '软件工程', 'zhang2@edu.com', '13800138028', '2021-08-30');
INSERT INTO `teacher` VALUES (30, '孔副教授', 1, 45, '副教授', '软件工程', 'kong@edu.com', '13800138029', '2009-12-18');
INSERT INTO `teacher` VALUES (31, '曹讲师', 0, 31, '讲师', '软件工程', 'cao@edu.com', '13800138030', '2019-04-22');
INSERT INTO `teacher` VALUES (32, '严教授', 1, 50, '教授', '网络工程', 'yan@edu.com', '13800138031', '2006-07-25');
INSERT INTO `teacher` VALUES (33, '华副教授', 0, 42, '副教授', '网络工程', 'hua@edu.com', '13800138032', '2011-11-08');
INSERT INTO `teacher` VALUES (34, '金讲师', 1, 36, '讲师', '网络工程', 'jin@edu.com', '13800138033', '2015-03-12');
INSERT INTO `teacher` VALUES (35, '魏教授', 1, 53, '教授', '网络工程', 'wei2@edu.com', '13800138034', '2004-09-15');
INSERT INTO `teacher` VALUES (36, '陶副教授', 0, 39, '副教授', '网络工程', 'tao@edu.com', '13800138035', '2013-06-28');
INSERT INTO `teacher` VALUES (37, '姜讲师', 1, 33, '讲师', '网络工程', 'jiang2@edu.com', '13800138036', '2017-10-05');
INSERT INTO `teacher` VALUES (38, '戚教授', 1, 48, '教授', '网络工程', 'qi@edu.com', '13800138037', '2008-04-19');
INSERT INTO `teacher` VALUES (39, '谢副教授', 0, 41, '副教授', '网络工程', 'xie@edu.com', '13800138038', '2012-08-26');
INSERT INTO `teacher` VALUES (40, '邹教授', 1, 47, '教授', '人工智能', 'zou@edu.com', '13800138039', '2009-02-14');
INSERT INTO `teacher` VALUES (41, '喻副教授', 0, 38, '副教授', '人工智能', 'yu@edu.com', '13800138040', '2014-07-30');
INSERT INTO `teacher` VALUES (42, '柏讲师', 1, 32, '讲师', '人工智能', 'bai@edu.com', '13800138041', '2018-11-12');
INSERT INTO `teacher` VALUES (43, '水教授', 1, 54, '教授', '人工智能', 'shui@edu.com', '13800138042', '2003-05-20');
INSERT INTO `teacher` VALUES (44, '窦副教授', 0, 40, '副教授', '人工智能', 'dou@edu.com', '13800138043', '2012-01-08');
INSERT INTO `teacher` VALUES (45, '章讲师', 1, 34, '讲师', '人工智能', 'zhang3@edu.com', '13800138044', '2016-09-25');
INSERT INTO `teacher` VALUES (46, '云教授', 1, 49, '教授', '人工智能', 'yun@edu.com', '13800138045', '2007-12-03');
INSERT INTO `teacher` VALUES (47, '苏副教授', 0, 43, '副教授', '人工智能', 'su@edu.com', '13800138046', '2010-06-18');
INSERT INTO `teacher` VALUES (48, '潘讲师', 1, 30, '讲师', '人工智能', 'pan@edu.com', '13800138047', '2019-03-07');
INSERT INTO `teacher` VALUES (49, '葛助教', 0, 25, '助教', '人工智能', 'ge@edu.com', '13800138048', '2022-01-15');
INSERT INTO `teacher` VALUES (50, '奚教授', 1, 46, '教授', '数据科学', 'xi@edu.com', '13800138049', '2008-10-22');
INSERT INTO `teacher` VALUES (51, '范副教授', 0, 39, '副教授', '数据科学', 'fan@edu.com', '13800138050', '2013-04-11');
INSERT INTO `teacher` VALUES (52, '彭讲师', 1, 35, '讲师', '数据科学', 'peng@edu.com', '13800138051', '2017-08-29');
INSERT INTO `teacher` VALUES (53, '郎教授', 1, 52, '教授', '数据科学', 'lang@edu.com', '13800138052', '2005-03-16');
INSERT INTO `teacher` VALUES (54, '鲁副教授', 0, 42, '副教授', '数据科学', 'lu@edu.com', '13800138053', '2011-07-09');

SET FOREIGN_KEY_CHECKS = 1;
```

## 基础CRUD练习

1. 实现教师信息的增删改查
2. 根据职称查询教师列表
3. 分页查询教师信息
4. 统计每个职称的教师人数
5. 根据年龄范围查询教师信息
6. （一对一）查询课程信息及其授课教师详情
7. （一对多）查询院系及其所有教师
8. 查询学生及其选修的所有课程（包含成绩）

## 动态SQL练习

### **多条件查询**

- 动态查询学生信息（可根据姓名、性别、班级等条件组合查询）
- 动态查询课程信息（可根据课程名、学分、教师等条件组合查询）

### **批量操作**

- 批量插入学生选课记录
- 批量更新学生成绩

### **条件更新**

- 根据条件动态更新教师信息
- 根据条件动态更新课程信息

## 高级功能练习

### **结果映射**

- 使用`<resultMap>`实现复杂对象映射
- 处理继承关系映射（如不同类型的用户）

### **关联的嵌套查询**

- 使用`<association>`和`<collection>`实现嵌套查询
- 对比嵌套查询与联接查询的性能差异

### **分页查询**

- 使用RowBounds实现分页
- 使用PageHelper插件实现分页

### **缓存应用**

- 配置并使用MyBatis一级缓存
- 配置并使用MyBatis二级缓存

## 综合练习

### **复杂业务查询**

- 查询每位学生的平均成绩并按平均分排序
- 查询每门课程的选修人数和平均成绩
- 查询成绩优秀（90分以上）的学生及其课程信息
- 查询没有选修任何课程的学生

### **事务处理**

- 实现学生选课的事务处理（减少课程容量，增加选课记录）
- 实现教师信息更新的事务处理

### **存储过程调用**

- 创建并调用计算学生GPA的存储过程
- 创建并调用统计教师授课数量的存储过程
