module.exports = {
  title: 'QMD | Blog',
  base: '/',
  description: 'Gameplays - Notícias - Streaming - Reviews',
  logo: './assets/img/logo.png',
  theme: require.resolve('../../'),
  themeConfig: {
  authors: [
      {
      name: 'Disjuntores | QDM',
      avatar: '/assets/img/disjuntores.jpg',
      link: 'https://twitter.com/disjuntoress',
      linktext: 'Seguir',
      },
      {
        name: 'John Doe',
        avatar: '/assets/img/avatar.png',
        link: 'https://bootstrapstarter.com/',
        linktext: 'Follow',
      },
    ],
    footer: {
      contact: [
        {
          type: 'twitter',
          link: 'https://twitter.com',
        },
        {
          type: 'facebook',
          link: '#',
        },
        {
          type: 'instagram',
          link: '#',
        },
        {
          type: 'youtube',
          link: '#',
        },
        {
          type: 'twitch',
          link: '#',
        }
      ],
      copyright: [
        {
          text: 'QDM | Quer drop, Mateus?',
          link: '/',
        },
        {
          text: 'Made with Mediumish - free Vuepress theme',
          link: 'https://bootstrapstarter.com/bootstrap-templates/vuepress-theme-mediumish/',
        },
      ],
    },

    sitemap: {
      hostname: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/'
    },
    comment: {
      service: 'disqus',
      shortname: 'querdrop',
      language: 'pt-BR'
    },
    newsletter: {
      endpoint: 'https://wowthemes.us11.list-manage.com/subscribe/post?u=8aeb20a530e124561927d3bd8&id=8c3d2d214b'
    },
    feed: {
      canonical_base: 'https://github.com/wowthemesnet/vuepress-theme-mediumish/',
    },
    smoothScroll: true
  },
}
