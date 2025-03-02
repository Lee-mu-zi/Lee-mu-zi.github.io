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
      prefix: "docker/",
      children: "structure",
    },
    {
      text: "Git",
      icon: "/assets/tools/git.svg",
      prefix: "git/",
      children: "structure",
    },
  ],

  "/notes/": [
    {
      text: "数据结构",
      icon: "/assets/notes/structure.svg",
      prefix: "structure/",
      link: "structure/",
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
