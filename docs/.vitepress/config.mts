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
    logo: '/images/qr_code.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '加入我们', link: '/join-us' },
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
          {
            text: '一周CP',
            link: '/document/cp'
          },
          {
            text: '选课评价',
            link: '/document/course'
          },
          {
            text: '私聊',
            link: '/document/chat'
          },
        ]
      },
      {
        text: '更新日志',
        items: [
          {
            text: '日志全览',
            link: '/changelog/index'
          },
          {
            text: '1.19.0',
            link: '/changelog/1.19.0'
          },
          {
            text: '1.20.0',
            link: '/changelog/1.20.0'
          },
          {
            text: '1.21.0',
            link: '/changelog/1.21.0'
          }
        ]
      },
      {
        text: '协议',
        items: [
          { text: '隐私协议', link: '/protocol/privacy' },
          { text: '社区公约', link: '/protocol/community' }
        ]
      },
      {
        text: '发展历程',
        link: '/develop'
      },
      {
        text: '团队',
        link: '/team'
      },
      {
        text: '加入我们',
        link: '/join-us'
      },
      {
        text: '新功能规划',
        link: '/todo'
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alndaly/docs_weixiao_zuowu_cc' },
      { icon: 'discord', link: 'https://discord.gg/4Ng8QAbb82' }
    ],

    footer: {
      copyright: 'Copyright © 2023 作吾科技（杭州）有限责任公司',
      message: '<a href="https://beian.miit.gov.cn/">浙ICP备2021023207号</a>'
    }
  }
})
