module.exports = {
    getSidebarPrimary() {
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
}