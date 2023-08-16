import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: './src',
  lastUpdated: true,
  title: "微校WeSmile",
  description: "微校WeSmile——作吾科技",
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    logo: './images/qr_code.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '加入我们', link: '/team' },
    ],

    sidebar: [
      {
        text: '使用文档',
        items: [
          {
            text: '快速上手',
            link: '/document/start'
          },
          {
            text: '发贴',
            link: '/document/ugc'
          },
          {
            text: '树洞',
            link: '/document/tree-hole'
          },
          {
            text: '活动',
            link: '/document/activity'
          },
          {
            text: '用户',
            link: '/document/user'
          },
        ]
      },
      {
        text: '功能日志',
        items: [
          {
            text: '2023-08-12',
            link: '/changelog/2023-08-12.md'
          }
        ]
      },
      {
        text: '发展历程',
        link: '/develop'
      },
      {
        text: '加入我们',
        link: '/team'
      },
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    footer: {
      copyright: 'Copyright © 2023 作吾科技（杭州）有限责任公司',
      message: '<a href="https://beian.miit.gov.cn/">浙ICP备2021023207号</a>'
    }
  }
})
