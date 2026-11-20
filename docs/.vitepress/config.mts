import { defineConfig } from 'vitepress'

// 注意：base 路径
// - 部署到个人主页仓库（<用户名>.github.io）→ 保持 '/'
// - 部署到项目仓库（<用户名>.github.io/<仓库名>/）→ 改成 '/<仓库名>/'
// 例如仓库叫 zhuogong-2601，就写 base: '/zhuogong-2601/'
export default defineConfig({
  lang: 'zh-CN',
  title: '卓工2601班',
  description: '浙江大学卓越工程师班 2601 班共享信息文档：课程资料 · 通知 · FAQ 一站汇聚',
  base: '/',
  lastUpdated: true,
  cleanUrls: true,

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#0ea5e9' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'zh_CN' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '卓工2601班',

    nav: [
      { text: '首页', link: '/' },
      { text: '资料共享', link: '/resources' },
      { text: '常见问题', link: '/faq' },
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '首页', link: '/' },
        ],
      },
      {
        text: '班级信息',
        items: [
          { text: '资料共享', link: '/resources' },
          { text: '常见问题 FAQ', link: '/faq' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    docFooter: {
      prev: '上一篇',
      next: '下一篇',
    },

    outline: {
      label: '本页目录',
      level: [2, 3],
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },

    footer: {
      message: '浙江大学 · 卓越工程师班 2601',
      copyright: 'Copyright © 2025 卓工2601班',
    },

    editLink: {
      pattern: 'https://github.com/delicious-pear/delicious-pear.github.io/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页',
    },
  },
})
