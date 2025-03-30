//导航工具条设置

import { navbar } from "vuepress-theme-hope";

export default navbar([

  {
    text: '💻 编程语言',
    children: [
      {
        text: 'Java生态',
        children: [
          { text: 'MyBatis', icon: 'http://cdn.leemuzi.com/weblog/mybatis.svg',  link: '/programming/java/mybatis/mybatis'},
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
    text: '📊 数据库',
    children: [
      {
        text: '基础',
        children: [
          { text: '数据库基础', icon: '/assets/mysqlico.svg',  link: '/database/base/base'},
        ]
      },
      {
        text: 'SQL',
        children: [
          { text: 'MySQL', icon: 'http://cdn.leemuzi.com/weblog/MySQL.svg',  link: '/database/mysql/sql-intro'},
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
          { text: 'Git', icon: '/assets/git.svg',  link: '/efficiency/tools/git/git'},
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
