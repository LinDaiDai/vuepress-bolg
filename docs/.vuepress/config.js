var config = require('./config/sidebar'); 
module.exports = {
  title: "LinDaiDai",
  description: "this is LinDaiDai blog'",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/vuepress-bolg/",// 设置站点根路径
  dest: "./dist",// 设置输出目录
  repo: 'https://github.com/LinDaiDai/vuepress-bolg', // 添加 github 链接
  themeConfig: {
    nav: require('./nav/zh'),
    sidebar: {
      '/guide/': genSidebarConfig('Guide'),
      '/webNotes/primary/': getSidebarPrimary(),
      '/webNotes/advanced/': getSidebarAdvanced('前端进阶')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'customize',
        'advanced',
      ]
    }
  ]
}
function getSidebarPrimary() {
  return [
      '',
      {
          title: 'HTML',
          children: [
              'HTML/',
              'HTML/tag.md',
              'HTML/form.md',
          ]
      },
      {
          title: 'CSS',
          children: [
              'CSS/',
              'CSS/baseCSS.md',
              'CSS/pseudo.md'
          ]
      },
      {
          title: 'JavaScript',
          children: [
              'JavaScript/baseJS.md',
              'JavaScript/ajax.md',
              'JavaScript/this.md',
              'JavaScript/prototype.md'
          ]
      }
  ]
}
function getSidebarAdvanced(title) {
  return [
    {
      title,
      children: [
        '',
        'interview/'
      ]
    }
  ]
}
