module.exports = {
    getSidebarPrimary() {
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
}