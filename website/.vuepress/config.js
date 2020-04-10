module.exports = {
  title: 'Kaizen Dorks',
  description: 'Official site of Kaizen Dorks Dublin',
  // theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  themeConfig: {
    // See https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    // See https://vuepress-theme-blog.ulivz.com/config/#directories
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/blog/',
      },
      {
        id: 'projects',
        dirname: '_projects',
        path: '/projects/',
      }
    ],
    // See https://vuepress-theme-blog.ulivz.com/#nav
    nav: [
      {
        text: 'Blog',
        link: '/blog/',
      },
      {
        text: 'Projects',
        link: '/projects/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    // See https://vuepress-theme-blog.ulivz.com/#footer
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/kaizendorks',
        },
        {
          type: 'codepen',
          link: 'https://www.npmjs.com/~kaizendorks',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2020-present Kaizen Dorks',
          link: '',
        },
      ],
    },
    // See https://vuepress-theme-blog.ulivz.com/config/#sitemap
    sitemap: {
      hostname: 'https://kaizendorks.github.io',
    },
    // See https://vuepress-theme-blog.ulivz.com/config/#feed
    feed: {
      canonical_base:'https://kaizendorks.github.io',
    },
    comment: {
      service: "disqus",
      shortname: "kaizen-dorks",
    },
    // See https://vuepress-theme-blog.ulivz.com/config/#paginationcomponent
    paginationComponent: 'SimplePagination',
  },
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'warning',
        defaultTitle: {
          '/': 'WARNING',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'danger',
        defaultTitle: {
          '/': 'DANGER',
        },
      },
    ],
  ]
}
