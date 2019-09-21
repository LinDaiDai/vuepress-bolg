module.exports = {
    title: "LinDaiDai",
    description: "this is LinDaiDai blog'",
    head: [
        ["link", { rel: "icon", href: `/logo.png` }]
    ],
    base: "/docs/", // 设置站点根路径
    dest: "./dist", // 设置输出目录
    repo: 'https://github.com/LinDaiDai/docs', // 添加 github 链接
    themeConfig: {
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        nav: require('./nav/zh'),
        sidebar: {
            '/webNotes/primary/': primary(),
            '/webNotes/advanced/': advanced(),
            '/dataStructure/': dataStructure(),
        },
    },
    markdown: {
        // options for markdown-it-anchor
        anchor: { permalink: false },
        config: md => {
            md.use(require("markdown-it-katex"));
        }
    }
};

function primary() {
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

function advanced() {
    return [{
        title: '前端进阶',
        children: [
            'interview/interview1.md'
        ]
    }]
}

function dataStructure() {
    return [
        '/dataStructure/',
        {
            title: '二叉树',
            children: [
                '/dataStructure/二叉树/二叉树概述',
                '/dataStructure/二叉树/二叉树的遍历',
                '/dataStructure/二叉树/前序遍历',
                '/dataStructure/二叉树/中序遍历',
                '/dataStructure/二叉树/后序遍历',
                '/dataStructure/二叉树/重建二叉树',
                '/dataStructure/二叉树/根据前序、中序求后序',
                '/dataStructure/二叉树/判断是否子树',
                '/dataStructure/二叉树/二叉树的镜像',
                '/dataStructure/二叉树/二叉搜索树的后序遍历序列'
            ]
        }
    ]
}