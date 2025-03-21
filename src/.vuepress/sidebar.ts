// 侧边栏设置
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // {
    //   text: "如何使用",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    // {
    //   text: "文章1",
    //   icon: "book",
    //   prefix: "posts/",
    //   children: "structure",
    // },
    // "intro",
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    // },
  ],

  "/tools/": [
    {
      text: "Docker",
      icon: "/assets/tools/Docker.svg",
      link: "docker/docker.html",
      // prefix: "docker/",
      // children: "structure",
      // collapsible: true,
    },
    {
      text: "Git",
      icon: "/assets/tools/git.svg",
      link: "git/git.html",
      // prefix: "git/",
      // children: "structure",
    },
    {
      text: "MyBatis",
      icon: "http://cdn.leemuzi.com/weblog/mybatis.svg",
      link: "mybatis/mybatis.html",
      // prefix: "mybatis/",
      // children: "structure",
      // collapsible: true,
    },
  ],

  "/notes/": [
    {
      text: "数据结构",
      icon: "/assets/notes/structure.svg",
      prefix: "structure/",
      link: "structure/intro.html",
      children: "structure",
      collapsible: true,
    },
    {
      text: "MySQL",
      icon: "http://cdn.leemuzi.com/weblog/MySQL.svg",
      prefix: "mysql/",
      link: "mysql/sql-intro.html",
      children: "structure",
      collapsible: true,
    },
  ],

  "/author/": [
    {
      text: "计划安排",
      icon: "/assets/author/plan.svg",
      prefix: "plan/",
      children: "structure",
    },
  ],


});
