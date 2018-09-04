const summary = require('./summary.js');

module.exports = {
    title: '事象改変魔法 Git x Magit',
    description: 'ギット・マ・ギット。世界を変える禁術。',
    locales: {
        '/': {
            lang: 'ja'
        }
    },
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/img/favicon.png' }]
    ],
    base: '/git-magit/',
    dest: 'docs',
    themeConfig: {
        nav: [
            { text: 'ホーム', link: '/' },
            { text: '作品一覧', link: 'https://jamcha-aa.github.io/About/' },
            { text: 'GitHub', link: 'https://github.com/jamcha-aa/git-magit/' }
        ],
        search: false,
        sidebar: {
            '/article/': summary.genSidebarConfig()
        }
    }
}
