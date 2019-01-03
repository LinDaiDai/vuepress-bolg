var config = require('./config/sidebar'); 
console.log(config);
module.exports = {
  title: "LinDaiDai",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

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
