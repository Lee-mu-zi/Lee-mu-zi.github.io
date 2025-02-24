---
# 这是文章的标题
title: Docker实战
# 你可以自定义封面图片
cover: /assets/tools/Docker.svg
# 这是页面的图标
# icon: file
# 这是侧边栏的顺序
order: 2
# 设置作者
author: 李木子
# 设置写作时间
# date: 2020-01-01
# 一个页面可以有多个分类
category:
  - Docker
# 一个页面可以有多个标签
# tag:
#   - tag1
#   - tag2
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在星标文章中
# star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
# copyright: 无版权
---

<br>


<img src="/assets/author/jiyu.png" style="zoom:10%;" />作者寄语：

在这个章节主要是对Docker进行安装和一些常见的作命令的总结，本来时打算在Linux环境下进行操作的，可惜的是使用VMware安装的Ubuntu Server版本没有办法进行粘贴命令行，搞了好久也没明白问题出现在哪里，先把别人的安装教程贴上来吧<a href="https://developer.aliyun.com/article/1323800">(Ubuntu安装Docker)</a>。不过还好，Windows也能够使用命令行使用Docker，并不会有什么影响，而且Windows的是有可视化界面的，更加直白一些。

## Docker命令
了解过Docker历史的应该都知道，Docker最开始是没有可视化界面段的，主要是依赖于命令行工具（CLI）进行管理的`docker --help`命令可以查看Docker所有命令。如下图所示：
<img src="/assets/tools/docker-desktop/Snipaste_2025-02-24_22-42-31.png" style="zoom:100%" title="部分命令展示">

## Docker镜像
