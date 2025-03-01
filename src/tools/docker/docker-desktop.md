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

在这个章节主要是对Docker进行安装和一些常见的操作命令的总结，在日常的开发中，一般使用的是Linux系统作为环境，所以我将会通过VMware安装Ubuntu系统作为一个基础环境来安装Docker。当然也可以使用Windows安装Docker Desktop，它是一个可视化界面的Docker，会更清楚的展现出一些镜像和容器信息，安装方式也十分简单。关于Ubuntu如何安装网上也有很多教程<a href="https://yeasy.gitbook.io/docker_practice/install/ubuntu">（Ubuntu安装Docker）</a>

## Docker命令
了解过Docker历史的应该都知道，Docker最开始是没有可视化界面段的，主要是依赖于命令行工具（CLI）进行管理的`docker --help`命令可以查看Docker所有命令。如下图所示：
<img src="/assets/tools/docker-desktop/Snipaste_2025-02-24_22-42-31.png" style="zoom:80%" title="部分命令展示">

## Docker镜像相关命令
`docker search [OPTIONS] TERM`：用于在Docker Hub中搜索Docker镜像。
- `TERM`关键字或者镜像名称
- `OPTIONS`可选参数，用于定制搜索行为，可通过`docker search --help`查看参数详细信息

`docker pull [OPTIONS] NAME[:TAG|@DIGEST]`：用于从镜像仓库中拉取镜像到本地。
- `NAME`：镜像的名称，如：nginx、mysql。
- `TAG`：镜像的标签，如：latest或1.23.1，默认拉取的是镜像仓库中的latest。
- `DIGEST`：镜像的摘要（唯一标识符），用于拉取特定版本的镜像。

`docker images [OPTIONS] [REPOSITORY[:TAG]]`和`docker image ls [OPTIONS] [REPOSITORY[:TAG]]`两者都是列出本地Docker镜像的命令，它们的功能完全相同，根据习惯自行选择。
- `REPOSITORY`：指定镜像的仓库名称
- `TAG`：指定镜像的标签

`docker rmi [OPTIONS] IMAGE [IMAGE...]`和`docker image rm [OPTIONS] IMAGE [IMAGE...]`这两个命令都是删除本地镜像
- `IMAGE`：要删除的镜像，可以通过镜像 ID、仓库名称（REPOSITORY）或标签（TAG）指定。

## Docker容器相关命令
`docker run [OPTIONS] IMAGE [COMMAND] [ARG...]`用于从镜像创建并启动一个新的容器，它结合了`docker create`和`docker start`的功能
- `IMAGE`：要运行的镜像名称或 ID。
- `COMMAND`：容器启动后执行的命令
- `ARG`：传递给命令的参数

`docker ps [OPTIONS]`是Docker CLI中用于列出正在运行的容器的命令。它可以帮助查看当前运行的容器状态、端口映射、容器名称等信息。如果需要查看所有容器（包括已停止的容器），可以使用`docker ps -a`。

`docker exec [OPTIONS] CONTAINER COMMAND [ARG...]`用于在正在运行的容器中执行命令，允许你在不进入容器的情况下，直接在容器内运行命令。这对于调试、管理容器或执行一次性任务非常有用。`docker exec -it`命令可以分配一个伪终端，类似于Linux，可以完善配置。
- `CONTAINER`：目标容器的名称或 ID。
- `COMMAND`：要在容器内执行的命令。
- `ARG`：传递给命令的参数。

`docker stop [OPTIONS] CONTAINER [CONTAINER...]`和`docker kill [OPTIONS] CONTAINER [CONTAINER...]`都可用于停止容器。
- `CONTAINER`：目标容器的名称或 ID。

`docker restart [OPTIONS] CONTAINER [CONTAINER...]`它会停止容器并重新启动
- `CONTAINER`：目标容器的名称或 ID。

`docker rm [OPTIONS] CONTAINER [CONTAINER...]`用于删除一个或多个已停止的容器。
- `CONTAINER`：目标容器的名称或 ID。

## Docker安装MySQL

### 拉取镜像`docker pull mysql:latest`
<img src="/assets/tools/docker-desktop/Snipaste_2025-03-01_21-36-11.png" style="zoom:100%">
### 运行MySQL容器
使用以下命令能够启动一个MySQL容器
```bash
docker run -d \
  --name mysql_container \
  -e MYSQL_ROOT_PASSWORD=your_password \
  -p 3306:3306 \
  mysql
```
参数说明
- `-d`：以后台模式运行容器。

- `--name mysql_container`：为容器指定一个名称（例如 mysql_container）。

- `-e MYSQL_ROOT_PASSWORD=your_password`：设置 MySQL 的 root 用户密码（将 your_password 替换为你的密码）。

- `-p 3306:3306`：将容器的 3306 端口映射到主机的 3306 端口。

- `mysql`：使用的镜像名称。
运行结果
<img src="/assets/tools/docker-desktop/Snipaste_2025-03-01_21-59-12.png" style="zoom:100%">
运行完成后可以通过`docker ps -a`或`docker container ls -a`查询所有容器
<img src="/assets/tools/docker-desktop/Snipaste_2025-03-01_22-00-49.png" style="zoom:100%">
### 连接MySQL
容器创建成功之后就可以使用数据库工具连接，需要注意的是主机应该输入的应该是虚拟机的。
<img src="/assets/tools/docker-desktop/Snipaste_2025-03-01_22-05-06.png" style="zoom:100%">
### 管理MySQL的配置文件
如果你需要自定义 MySQL 的配置文件（如 my.cnf），可以将配置文件挂载到容器中。
```bash
docker run -d \
  --name mysql_container \
  -e MYSQL_ROOT_PASSWORD=your_password \
  -p 3306:3306 \
  -v /path/to/my.cnf:/etc/mysql/my.cnf \
  mysql
```

