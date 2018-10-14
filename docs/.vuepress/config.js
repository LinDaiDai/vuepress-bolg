module.exports = {
    title: 'LinDaiDai',
    description: 'this is lindaidai blog',
    base: '/vuepress-bolg/', // 设置站点根路径
    repo: 'https://github.com/LinDaiDai/vuepress-bolg', // 添加 github 链接
    themeConfig: {
        //导航栏
        nav: [
            { text: "Home", link: "/" },
            { text: "Blog", link: "/blog/" },
            { text: "Projects", link: "/projects/" },
            { 
                text: 'Link',
                items: [
                    { text: 'GitHub', link: 'https://github.com/LinDaiDai' },
                    { text: 'HomePage', link: 'https://lindaidai.github.io/myHomePage/' },
                    { text: 'JianShu', link: 'https://www.jianshu.com/u/00d24750ae47' }
                ]
            }
        ],
        sidebar: {
            '/blog/': genSidebarConfig('Blog')
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
}
function genSidebarConfig(title) {
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