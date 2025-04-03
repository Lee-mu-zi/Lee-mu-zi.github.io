import { hopeTheme } from "vuepress-theme-hope";

import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://github.com/Lee-mu-zi/Lee-mu-zi.github.io",

  // author: {
  //   name: "李木子",
  //   url: "http://leemuzi.com/",
  // },

  iconAssets: "fontawesome-with-brands",

  // logo: "/logo.png",

  // repo: "https://github.com/Lee-mu-zi/Lee-mu-zi.github.io",

  docsDir: "src",

  // 页面元数据：贡献者，最后修改时间，编辑链接
  // contributors: true,
  // lastUpdated: true,
  editLink: false,

  // 导航栏
  navbar,
  breadcrumb: false,

  // 侧边栏
  sidebar,

  // 页脚
  footer: '<a href="https://beian.miit.gov.cn/#/Integrated/index">备案：豫ICP备2024079032号-1 | </a> <a href="https://vuepress-theme-hope.github.io/v2/zh/">博客主题：VuePress Theme Hope</a> ',

  

  pageInfo: ["Author", "Category", "Tag", "Original", "Word", "ReadingTime"],

  displayFooter: true,

  // 博客相关
  blog: {
    description: "一个正在努力的后端开发",
    intro: "/author/intro.html",
    avatar: "/logo.png",
    medias: {
      Email: "mailto:li15237845367@163.com",
      GitHub: "https://github.com/Lee-mu-zi",
      LeetCode: {
        icon: "<svg t=\"1735092518913\" class=\"icon\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"1521\" width=\"200\" height=\"200\"><path d=\"M1023.522548 511.96634c0 163.697987 0 327.395973 0.477452 491.093959 0 17.051874-3.887827 20.939701-20.939701 20.871494q-491.09396-0.81849-982.187919 0c-17.051874 0-20.939701-3.81962-20.871493-20.871494q0.81849-491.09396 0-982.187919C-0.067321 3.820506 3.820506-0.067321 20.87238 0.000887q491.09396 0.81849 982.187919 0c17.051874 0 21.007908 3.81962 20.939701 20.871493-0.477452 163.697987-0.477452 327.395973-0.477452 491.09396z\" fill=\"#FEFEFE\" p-id=\"1522\"></path><path d=\"M454.876667 321.735638c-61.386745 61.386745-124.819715 121.068303-184.774103 184.160235-44.403079 46.722134-40.924497 113.906516 5.593015 161.924591 55.179863 56.680428 111.996706 111.723876 168.063266 167.449399 21.212531 21.962813 20.939701 47.063171 5.388392 70.390134-14.391781 21.485361-35.058652 34.649407-63.091932 22.576681a132.663577 132.663577 0 0 1-35.67252-25.577811c-51.769488-52.315148-104.766711-103.470769-155.990539-156.399784-89.897478-92.8304-90.92059-232.451141-0.477453-324.667673C320.985355 291.72434 449.965727 163.903496 578.400439 35.536991c28.30611-28.30611 63.842215-30.147713 87.032763-6.002259s21.007908 55.657315-6.411504 84.509085q-43.175344 45.426191-86.691726 90.443138c-30.693372 47.608831-71.822492 84.645501-117.453305 117.248683z\" fill=\"#070706\" p-id=\"1523\"></path><path d=\"M677.028476 641.014919H493.413901c-40.924497 0-70.185512-24.75932-69.503437-58.112785 0.613867-32.262145 27.965073-55.998353 68.207495-56.134768q187.02495-0.886697 374.049899 0c39.833177 0 62.34165 22.031021 62.682687 56.475805 0 35.740727-23.054133 57.294295-64.933534 57.70354-62.137027 0.54566-124.546885 0.068207-186.888535 0.068208z\" fill=\"#B4B2B1\" p-id=\"1524\"></path><path d=\"M386.055305 928.100263c60.568255-7.366409 79.052486-37.241292 57.70354-92.966815 63.842215 33.48988 110.837178 26.055263 162.470252-25.57781 26.464508-26.464508 52.519771-53.338261 79.598146-79.188901s57.43071-26.464508 81.439748-2.7283 23.531586 54.565996-1.978017 81.439748c-34.103747 35.195067-67.457212 70.594757-103.470769 103.266147-76.938054 69.776267-199.916166 75.914941-275.7629 15.755931z\" fill=\"#EAA240\" p-id=\"1525\"></path><path d=\"M454.876667 321.735638a1295.942393 1295.942393 0 0 1 117.453305-117.248683c89.692855 27.828658 142.349041 101.151714 202.371636 164.925721 19.575551 20.871493 11.663482 53.747506-10.776784 72.777397a53.338261 53.338261 0 0 1-73.868717-2.18264 821.627477 821.627477 0 0 1-74.414376-74.277961c-44.130249-52.315148-96.854642-66.502307-160.765064-43.993834z\" fill=\"#EAA340\" p-id=\"1526\"></path></svg>",
        link: "https://leetcode.cn/u/epic-crayzty/",
      },
    },
    articlePerPage: 6,
  },

  darkmode: "disable",

  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"],
  },

  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // 多语言配置
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  // 如果想要实时查看任何改变，启用它。注: 这对更新性能有很大负面影响
  // hotReload: true,

  // 此处开启了很多功能用于演示，你应仅保留用到的功能。
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,

    // 取消注释它们如果你需要 TeX 支持
    // markdownMath: {
    //   // 启用前安装 katex
    //   type: "katex",
    //   // 或者安装 mathjax-full
    //   type: "mathjax",
    // },

    // 如果你需要幻灯片，安装 @vuepress/plugin-revealjs 并取消下方注释
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },

    // 在启用之前安装 chart.js
    // chartjs: true,

    // insert component easily

    // 在启用之前安装 echarts
    // echarts: true,

    // 在启用之前安装 flowchart.ts
    // flowchart: true,

    // 在启用之前安装 mermaid
    // mermaid: true,

    // playground: {
    //   presets: ["ts", "vue"],
    // },

    // 在启用之前安装 @vue/repl
    // vuePlayground: true,

    // 在启用之前安装 sandpack-vue3
    // sandpack: true,
  },

  // 在这里配置主题提供的插件
  plugins: {
    blog: {
      excerptLength: 1
    },

    // 启用之前需安装 @waline/client
    // 警告: 这是一个仅供演示的测试服务，在生产环境中请自行部署并使用自己的服务！
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },、

    components: {
      components: ["Badge", "VPCard"],
    },

    // 如果你需要 PWA。安装 @vuepress/plugin-pwa 并取消下方注释
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
