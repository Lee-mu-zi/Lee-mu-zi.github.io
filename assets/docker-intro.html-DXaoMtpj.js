import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,b as o,o as i}from"./app-CjjinxKv.js";const s="/assets/author/jiyu.png",a="/assets/tools/docker-intro/registry-reposotory.png",c={};function n(l,e){return i(),r("div",null,e[0]||(e[0]=[o('<br><p><img src="'+s+'" style="zoom:10%;">作者寄语：</p><p>概念是一个老生常谈的话题，每次学一个新的技术，总是避免不开前面繁琐复杂的概念环节，虽然概念这些东西比较乏味，但是不得不说，概念有时候对我们还真的会出现很大的帮助。不过关于Docker的概念性的东西并不多，大多还是需要去手动实践的。</p><br><h2 id="docker是什么" tabindex="-1"><a class="header-anchor" href="#docker是什么"><span>Docker是什么</span></a></h2><p>Docker是一种开源的<strong>容器化平台</strong>，用于开发、部署和运行应用程序。通过将应用程序与其依赖项（如库、配置文件等）打包到一个轻量级的、独立的运行环境中，也就是容器。实现了应用程序的快速部署和跨环境的一致性。</p><h2 id="容器-container" tabindex="-1"><a class="header-anchor" href="#容器-container"><span>容器（Container）</span></a></h2><p>容器是每个应用程序组件的独立进程。每个组件（前端 React 应用程序、Python API 引擎和数据库）都在自己的隔离环境中运行，与计算机上的其他所有组件完全隔离。越来越多的人喜欢用Docker的主要原因还是因为它的</p><ul><li>每个容器都拥有其运行所需要的一切，不依赖于主机上预安装的任何依赖项。</li><li>容器是独立运行的，它们对主机和其他容器的影响最小，提高了应用程序的安全性。</li><li>每个容器都是独立管理的，删除一个容器并不会影响到其他的容器。</li><li>容器可以在任何地方运行。</li></ul><h3 id="docker容器的特点" tabindex="-1"><a class="header-anchor" href="#docker容器的特点"><span>Docker容器的特点</span></a></h3><p>容器的目的和虚拟机是一样的，都是为了创建一个隔离环境。</p><ul><li>轻量化：一台主机上运行的多个Docker容器可以共享主机操作系统内核；启动迅速，只需占用很少的计算和内存资源。</li><li>标准开放：Docker容器基于开放式标准，能够在多有主流Linux版本、Windows以及VM、裸机服务器和云在内的任何基础设施上运行。</li><li>安全可靠：Docker赋予应用的隔离性不仅限于彼此隔离，还独立于底层的基础设施。Docker默认提供最强的隔离，因此应用出现问题，也是单个容器的问题，而不会涉及到整台主机。</li></ul><h2 id="镜像-image" tabindex="-1"><a class="header-anchor" href="#镜像-image"><span>镜像（Image）</span></a></h2><p>是一个轻量级、独立、可执行的软件包，包含了运行应用程序所需的所有内容，如代码、运行时环境、库、环境变量和配置文件。它是 Docker 容器的基础，容器则是镜像的运行实例。<br> 镜像有两个重要的原则：</p><ul><li>镜像是不可变的，镜像一旦被创建就无法修改。只能添加新的镜像或则在其基础上修改。</li><li>镜像由多层组成，每层代表一个指令（如安装软件、添加文件），这些层只读且可共享，提升了存储和传输效率。</li></ul><h2 id="注册表-registry" tabindex="-1"><a class="header-anchor" href="#注册表-registry"><span>注册表（Registry）</span></a></h2><p>Docker Registry 是一个用于存储、管理和分发 Docker 镜像的服务。它是 Docker 生态系统的核心组件之一，允许用户上传（push）和下载（pull）镜像。Docker Registry 可以是公共的（如 Docker Hub）或私有的（自建或云服务提供的 Registry）。</p><h3 id="仓库-repository" tabindex="-1"><a class="header-anchor" href="#仓库-repository"><span>仓库（Repository）</span></a></h3><p>Registry是存储和管理容器镜像的集中位置，是 Docker Registry 中的一个逻辑单元，用于存储和管理同一项目的不同版本的镜像。每个仓库包含一组相关的镜像，这些镜像通过标签（Tag）来区分。每个Repository包含一个或多个容器镜像。两者的关系如下图所示<br><img src="'+a+'" style="zoom:100%;"></p>',19)]))}const h=t(c,[["render",n],["__file","docker-intro.html.vue"]]),d=JSON.parse('{"path":"/tools/docker/docker-intro.html","title":"Docker概念","lang":"zh-CN","frontmatter":{"title":"Docker概念","cover":"/assets/tools/Docker.svg","order":1,"description":"作者寄语： 概念是一个老生常谈的话题，每次学一个新的技术，总是避免不开前面繁琐复杂的概念环节，虽然概念这些东西比较乏味，但是不得不说，概念有时候对我们还真的会出现很大的帮助。不过关于Docker的概念性的东西并不多，大多还是需要去手动实践的。 Docker是什么 Docker是一种开源的容器化平台，用于开发、部署和运行应用程序。通过将应用程序与其依赖项...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/tools/docker/docker-intro.html"}],["meta",{"property":"og:site_name","content":"李木子"}],["meta",{"property":"og:title","content":"Docker概念"}],["meta",{"property":"og:description","content":"作者寄语： 概念是一个老生常谈的话题，每次学一个新的技术，总是避免不开前面繁琐复杂的概念环节，虽然概念这些东西比较乏味，但是不得不说，概念有时候对我们还真的会出现很大的帮助。不过关于Docker的概念性的东西并不多，大多还是需要去手动实践的。 Docker是什么 Docker是一种开源的容器化平台，用于开发、部署和运行应用程序。通过将应用程序与其依赖项..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/assets/tools/Docker.svg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-20T14:58:14.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://mister-hope.github.io/assets/tools/Docker.svg"}],["meta",{"name":"twitter:image:alt","content":"Docker概念"}],["meta",{"property":"article:modified_time","content":"2025-02-20T14:58:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker概念\\",\\"image\\":[\\"https://mister-hope.github.io/assets/tools/Docker.svg\\"],\\"dateModified\\":\\"2025-02-20T14:58:14.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李木子\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"Docker是什么","slug":"docker是什么","link":"#docker是什么","children":[]},{"level":2,"title":"容器（Container）","slug":"容器-container","link":"#容器-container","children":[{"level":3,"title":"Docker容器的特点","slug":"docker容器的特点","link":"#docker容器的特点","children":[]}]},{"level":2,"title":"镜像（Image）","slug":"镜像-image","link":"#镜像-image","children":[]},{"level":2,"title":"注册表（Registry）","slug":"注册表-registry","link":"#注册表-registry","children":[{"level":3,"title":"仓库（Repository）","slug":"仓库-repository","link":"#仓库-repository","children":[]}]}],"git":{"createdTime":1740063494000,"updatedTime":1740063494000,"contributors":[{"name":"lee","username":"lee","email":"li15237845367@163.com","commits":1,"url":"https://github.com/lee"}]},"readingTime":{"minutes":3.14,"words":943},"filePathRelative":"tools/docker/docker-intro.md","localizedDate":"2025年2月20日","excerpt":"<br>\\n<p><img src=\\"/assets/author/jiyu.png\\" style=\\"zoom:10%;\\">作者寄语：</p>\\n<p>概念是一个老生常谈的话题，每次学一个新的技术，总是避免不开前面繁琐复杂的概念环节，虽然概念这些东西比较乏味，但是不得不说，概念有时候对我们还真的会出现很大的帮助。不过关于Docker的概念性的东西并不多，大多还是需要去手动实践的。</p>\\n<br>\\n<h2>Docker是什么</h2>\\n<p>Docker是一种开源的<strong>容器化平台</strong>，用于开发、部署和运行应用程序。通过将应用程序与其依赖项（如库、配置文件等）打包到一个轻量级的、独立的运行环境中，也就是容器。实现了应用程序的快速部署和跨环境的一致性。</p>","autoDesc":true}');export{h as comp,d as data};
