module.exports = {
  title: "Harry Potter",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    nav: require('./nav/zh'),
    sidebar: {
      '/guide/': genSidebarConfig('Guide'),
      '/webNotes/': getSidebarWebNotes('新手入门', '前端进阶')
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
function getSidebarWebNotes(primaryTitle, advancedTitle) {
  return [
      {
        title: primaryTitle,
        children: [
            'primary.md',
            'primary/HTML/tag.md',
            'primary/JavaScript/ajax.md',
            'primary/JavaScript/this.md',
            'primary/JavaScript/prototype.md'
        ]
      },
      {
        title: advancedTitle,
        children: [
            'advanced.md',
            'advanced/Interview/interview1.md'
        ]
      }
  ]
}
