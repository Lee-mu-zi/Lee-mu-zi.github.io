//导航工具条设置

import { navbar } from "vuepress-theme-hope";

export default navbar([

  {
    text: '💻 编程语言',
    children: [
      {
        text: 'Java生态',
        children: [
          { text: 'MyBatis', icon: 'http://cdn.leemuzi.com/weblog/mybatis.svg',  link: '/programming/java/mybatis/mapper'},
        ]
      },
      {
        text: '⏳ 待更新...',
        children: [
          { text: '', icon: '',  link: ''},
        ]
      },
    ]
  },

  {
    text: '🧮 算法攻坚',
    children: [
      {
        text: '算法基础',
        children: [
          { text: '数据结构', icon: '/assets/structure.svg',  link: '/algorithm/base/intro'},
        ]
      },
      {
        text: '⏳ 待更新...',
        children: [
          { text: '', icon: '',  link: ''},
        ]
      },
    ]
  },

  {
    text: '🧱系统架构',
    children: [
      {
        text: '数据库与存储',
        children: [
          { text: 'SQL与优化器', icon: 'http://cdn.leemuzi.com/SQL.png',  link: '/system-architecture/sql/sql'},
          { text: '关系型数据库', icon: '/assets/mysqlico.svg',  link: '/system-architecture/database/base'},
        ]
      },
      // {
      //   text: 'NoSQL',
      //   children: [
      //     { text: 'MySQL', icon: '/assets/structure.svg',  link: '/algorithm/base/intro'},
      //   ]
      // },
      {
        text: '⏳ 待更新...',
        children: [
          { text: '', icon: '',  link: ''},
        ]
      },
    ]
  },

  {
    text: '⚙️ 开发效能',
    children: [
      {
        text: 'DevOps流水线',
        children: [
          { text: 'Docker', icon: '/assets/Docker.svg',  link: '/efficiency/devops/docker/docker'},
        ]
      },
      {
        text: '效能工具',
        children: [
          { text: '版本控制工具Git', icon: '/assets/git.svg',  link: '/efficiency/tools/git/git'},
          { text: '正则表达式regex', icon: 'http://cdn.leemuzi.com/regex.png',  link: '/efficiency/tools/regex/regex'},
        ]
      },
      {
        text: '⏳ 待更新...',
        children: [
          { text: '', icon: '',  link: ''},
        ]
      },
    ]
  },

]);
