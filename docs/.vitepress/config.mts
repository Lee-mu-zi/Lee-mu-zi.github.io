import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Lee",
    description: "A VitePress Site",
    lastUpdated: true,
    // 如果项目名已经为 name.github.io 域名，则不需要修改！
    base: process.env.NODE_ENV === 'production' ? '/Lee-mu-zi.github.io/' : '/',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Java', link: '/java/'},
            {text: 'Database', link: '/database/'},
            {text: '开发工具', link: '/tools/'},
            {text: '算法', link: '/algorithm/'},
            {text: '浮生若梦', link: '/life/'},
        ],

        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/Lee-mu-zi'
            },
            {
                icon: 'leetcode',
                link: 'https://leetcode.cn/u/epic-crayzty/'
            }
        ],

        sidebar: {

            "/java/": [
                {
                    text: '集合',
                    collapsed: false,
                    items: [

                        {text: 'PriorityQueue', link: '/java/collection/priority-queue'},

                    ]
                },
                {
                    text: 'Spring',
                    collapsed: false,
                    items: [
                        // { text: 'index', link: '/java/spring-boot/index' },
                    ]
                },
                {
                    text: 'Spring Boot',
                    collapsed: false,
                    items: [
                        {text: '简介', link: '/java/spring-boot/index'},
                        // {
                        //   text: '第三方组件',
                        //   link: '/java/spring/index',
                        //   items: [
                        //     {text: 'index', link: '/java/spring-boot/index'},
                        //   ]
                        //  },
                    ]
                },
                {
                    text: 'MyBatis',
                    collapsed: false,
                    items: [
                        {text: 'MyBatis-动态SQL', link: '/java/mybatis/MyBatis-动态SQL'},
                        {text: 'MyBatis-XML映射器', link: '/java/mybatis/MyBatis-XML映射器'},
                        {text: 'MyBatis-Spring整合', link: '/java/mybatis/MyBatis-Spring整合'},
                        {text: 'MyBatis-练习题', link: '/java/mybatis/Mybatis-Practice'},
                    ]
                },

            ],


            "/database/": [
                {
                    text: 'SQL',
                    collapsed: false,
                    items: [

                        {text: 'SQL-基础语法', link: '/database/base'},

                    ]
                },
            ],

            "/tools": [
                {
                    text: 'Idea',
                    collapsed: false,
                    items: [

                        {text: 'Idea Http Client', link: '/tools/idea/http-client'},

                    ]
                },
                {
                    text: 'Docker',
                    collapsed: false,
                    items: [

                        {text: 'Docker 基础', link: '/tools/container/docker'},

                    ]
                },
                {
                    text: 'Git',
                    collapsed: false,
                    items: [

                        {text: 'Git 基础', link: '/tools/revision-control/git'},

                    ]
                },
            ],

            "/algorithm/": [
                {
                    text: '零、数据结构',
                    collapsed: false,
                    items: [

                        {text: '初识数据结构', link: '/algorithm/base/base'},
                        {text: '线性表', link: '/algorithm/base/linear-list'},
                        {text: '树和二叉树', link: '/algorithm/base/tree-binary-tree'},

                    ]
                },

                {
                    text: '一、滑动窗口与双指针',
                    collapsed: false,
                    items: [

                        {text: '不定长滑动窗口', link: '/algorithm/sliding-window-double-pointers/variable-length'},

                    ]
                },

                {
                    text: '二、二分算法',
                    collapsed: false,
                    items: [

                        {text: '二分查找', link: '/algorithm/binary-algorithm/binary-search'},

                    ]
                },

                {
                    text: '七、动态规划',
                    collapsed: false,
                    items: [

                        {text: '前后缀分解', link: '/algorithm/dynamic-programing/prefixes-suffixes-decomposition'},

                    ]
                },

                {
                    text: '八、常用数据结构',
                    collapsed: false,
                    items: [

                        {text: '0、常用枚举技巧', link: '/algorithm/data-structure/enum-techniques'},
                        {text: '1、前缀和', link: '/algorithm/data-structure/prefix-sum'},
                        {text: '3、栈', link: '/algorithm/data-structure/stack'},

                    ]
                },

            ],

            "/life/": [
                {text: 'test', link: '/life/test'}
            ],

        },


        footer: {
            message: '<p ><a href="https://vitepress.dev/zh/">主题：vitepress</a></p>   <a href="https://beian.miit.gov.cn/#/Integrated/index">备案：豫ICP备2024079032号-1</a>',
            copyright: 'Copyright © 2025'
        },

        // 开启搜索功能
        search: {
            provider: 'local'
        },

        // 开启最后更新时间
        lastUpdated: {
            text: 'Updated at',
            formatOptions: {
                dateStyle: 'full',
                timeStyle: 'medium'
            }
        },

    }
})
