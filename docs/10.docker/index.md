---
title: Docker 基础

order: 1

---

<br>


：

Docker是一种开源的**容器化平台**，用于开发、部署和运行应用程序。通过将应用程序与其依赖项（如库、配置文件等）打包到一个轻量级的、独立的运行环境中，也就是容器。实现了应用程序的快速部署和跨环境的一致性。

<!-- more -->



## 镜像（Image）
是一个轻量级、独立、可执行的软件包，包含了运行应用程序所需的所有内容，如代码、运行时环境、库、环境变量和配置文件。它是 Docker 容器的基础，容器则是镜像的运行实例。
镜像有两个重要的原则：
* 镜像是不可变的，镜像一旦被创建就无法修改。只能添加新的镜像或则在其基础上修改。
* 镜像由多层组成，每层代表一个指令（如安装软件、添加文件），这些层只读且可共享，提升了存储和传输效率。

## 容器（Container）
容器是每个应用程序组件的独立进程。每个组件（前端 React 应用程序、Python API 引擎和数据库）都在自己的隔离环境中运行，与计算机上的其他所有组件完全隔离。越来越多的人喜欢用Docker的主要原因还是因为它的
* 每个容器都拥有其运行所需要的一切，不依赖于主机上预安装的任何依赖项。
* 容器是独立运行的，它们对主机和其他容器的影响最小，提高了应用程序的安全性。
* 每个容器都是独立管理的，删除一个容器并不会影响到其他的容器。
* 容器可以在任何地方运行。
### Docker容器的特点
容器的目的和虚拟机是一样的，都是为了创建一个隔离环境。
* 轻量化：一台主机上运行的多个Docker容器可以共享主机操作系统内核；启动迅速，只需占用很少的计算和内存资源。
* 标准开放：Docker容器基于开放式标准，能够在多有主流Linux版本、Windows以及VM、裸机服务器和云在内的任何基础设施上运行。
* 安全可靠：Docker赋予应用的隔离性不仅限于彼此隔离，还独立于底层的基础设施。Docker默认提供最强的隔离，因此应用出现问题，也是单个容器的问题，而不会涉及到整台主机。

## 注册表（Registry）
Docker Registry 是一个用于存储、管理和分发 Docker 镜像的服务。它是 Docker 生态系统的核心组件之一，允许用户上传（push）和下载（pull）镜像。Docker Registry 可以是公共的（如 Docker Hub）或私有的（自建或云服务提供的 Registry）。

### 仓库（Repository）
Registry是存储和管理容器镜像的集中位置，是 Docker Registry 中的一个逻辑单元，用于存储和管理同一项目的不同版本的镜像。每个仓库包含一组相关的镜像，这些镜像通过标签（Tag）来区分。每个Repository包含一个或多个容器镜像。两者的关系如下图所示
<!-- <img src="/assets/tools/docker-intro/registry-reposotory.png" style="zoom:100%;" /> -->

## Docker命令
了解过Docker历史的应该都知道，Docker最开始是没有可视化界面段的，主要是依赖于命令行工具（CLI）进行管理的`docker --help`命令可以查看Docker所有命令。如下图所示：
<!-- <img src="/assets/tools/docker-desktop/Snipaste_2025-02-24_22-42-31.png" style="zoom:80%" title="部分命令展示"> -->

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
<!-- <img src="/assets/tools/docker-desktop/Snipaste_2025-03-01_21-36-11.png" style="zoom:100%"> -->
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
<!-- <img src="/assets/tools/docker-desktop/Snipaste_2025-03-01_21-59-12.png" style="zoom:100%"> -->
运行完成后可以通过`docker ps -a`或`docker container ls -a`查询所有容器
<!-- <img src="/assets/tools/docker-desktop/Snipaste_2025-03-01_22-00-49.png" style="zoom:100%"> -->
### 连接MySQL
容器创建成功之后就可以使用数据库工具连接，需要注意的是主机应该输入的应该是虚拟机的。
<!-- <img src="/assets/tools/docker-desktop/Snipaste_2025-03-01_22-05-06.png" style="zoom:100%"> -->
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

