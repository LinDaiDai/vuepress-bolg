var config = require('./config/sidebar'); 
console.log(config);
module.exports = {
  title: "Harry Potter",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./dist",

  themeConfig: {
    nav: require('./nav/zh'),
    sidebar: {
      '/guide/': genSidebarConfig('Guide1'),
      '/webNotes/primary/': config.getSidebarPrimary(),
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
          title: 'HTML3',
          children: [
              'HTML/',
              // 'HTML/tag.md',
              // 'HTML/form.md',
          ]
      },
      {
          title: 'CSS',
          children: [
              'CSS/'
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
function getSidebarWebNotes(primaryTitle, advancedTitle) {
  return [
      {
        title: primaryTitle,
        children: [
            // 'primary/HTML/tag.md',
            'primary/JavaScript/ajax.md',
            'primary/JavaScript/this.md',
            'primary/JavaScript/prototype.md'
        ]
      },
      // {
      //   title: advancedTitle,
      //   children: [
      //       'advanced',
      //       'advanced/Interview/interview1.md'
      //   ]
      // }
  ]
}
