module.exports = {
    title: 'LinDaiDai',
    description: 'this is lindaidai blog',
    dest: './dist',    // 设置输出目录
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
                    { text: 'GitHub', link: 'https://github.com/LinDaiDai'},
                    { text: 'HomePage', link: 'https://lindaidai.github.io/myHomePage/'}
                ]
            }
        ],
        sidebar: {
            '/blog/': genSidebarConfig('Blog'),
            '/projects/': genSidebarProjectConfig('Projects')
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
            collapsable: false,//当前分组是否展开
            children: [
                '',
                'getting-started',
                'customize',
                'advanced',
            ]
        }
    ]
}
function genSidebarProjectConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'projects1'
            ]
        }
    ]
}