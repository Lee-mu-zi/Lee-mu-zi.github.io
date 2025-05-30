import { defineConfig } from 'vitepress'
import { pagefindPlugin } from 'vitepress-plugin-pagefind'
// 导入主题的配置
import { blogTheme } from './blog-theme'

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  // base,
  lang: 'zh-cn',
  title: 'Muzi',
  description: '粥里有勺糖的博客主题，基于 vitepress 实现',
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    logo: '/favicon.ico',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: [
      // { text: '首页', link: '/' },
      { text: 'Java', link: '/Java/' },
      { text: 'Spring全家桶', link: '/Spring/' },
      { text: 'MySQL', link: '/MySQL/' },
      { text: '容器化技术', link: '/Container/' },
      { text: '版本控制', link: '/Revision-control/' },
      { text: '算法', link: '/Algorithm/' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Lee-mu-zi'
      }
    ],

    sidebar: {
      "/Spring/": [
        {
          text: 'MyBatis',
          collapsed: false,
          items: [

            { text: 'MyBatis-动态SQL', link: '/Spring/MyBatis-动态SQL' },
            { text: 'MyBatis-XML映射器', link: '/Spring/MyBatis-XML映射器' },
            { text: 'MyBatis-Spring整合', link: '/Spring/MyBatis-Spring整合' },

          ]
        },
      ],

      "/MySQL/": [
        {
          text: 'MySQL',
          collapsed: false,
          items: [

            { text: 'SQL-基础语法', link: '/MySQL/SQL-基础语法' },

          ]
        },
      ],

      "/Container/": [
        {
          text: 'Docker',
          collapsed: false,
          items: [

            { text: 'Docker 基础', link: '/Container/Docker基础' },

          ]
        },
      ],

      "/Revision-control/": [
        {
          text: 'Git',
          collapsed: false,
          items: [

            { text: 'Git 基础', link: '/Revision-control/Git' },

          ]
        },
      ],

      "/Algorithm/": [
        {
          text: '数据结构',
          collapsed: false,
          items: [

            { text: '初识数据结构', link: '/Algorithm/初识数据结构' },
            { text: '线性表', link: '/Algorithm/线性表' },
            { text: '树和二叉树', link: '/Algorithm/树和二叉树' },

          ]
        },
      ]

    },

  },

  // vite: {
  //   plugins: [pagefindPlugin()],
  // },


})
