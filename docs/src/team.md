---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://upload.sunrise-luckyda.top/image/76b592c87157493aaf4471b1cd313328.jpeg',
    name: '华勤达',
    title: 'Creator & Developer & Designer',
    links: [
      { icon: 'github', link: 'https://github.com/alndaly' },
    ]
  },
  {
    avatar: 'https://upload.sunrise-luckyda.top/image/76b592c87157493aaf4471b1cd313328.jpeg',
    name: '许逸非',
    title: 'Creator & Designer',
    links: [
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      我们的团队
    </template>
    <template #lead>
      我们是一个小而美的团队哈哈哈。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    :members="members"
  />
</VPTeamPage>
