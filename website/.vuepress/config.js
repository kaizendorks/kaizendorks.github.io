module.exports = {
  title: 'Kaizen Dorks',
  description: 'Official site of Kaizen Dorks Dublin',
  // Since we have extended the @vuepress/theme-blog, we just let vuepress pick the theme from the /theme folder
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
        dirname: 'projects',
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
      {
        text: 'Tutorials',
        link: '/tutorials/',
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
    // We have added the sidebar from @vuepress/default-theme into the blog theme
    // See options for the sidebar: https://vuepress.vuejs.org/theme/default-theme-config.html#sidebar
    sidebar: {
      '/projects/': [
        {
          title: 'Projects by Kaizen Dorks',
          path: '/projects',
          collapsable: false,
          children: [
            ['/projects/vue-autowire', 'vue-autowire'],
            ['/projects/pymongo-inmemory', 'pymongo-inmemory'],
          ],
          // path: '/projects/vue-autowire'
        }
      ],
      '/tutorials/': [
        '',
        {
          title: 'Kubernetes',
          children: [
            ['kubernetes/', 'Welcome'],
            ['kubernetes/1-getting-started', 'Getting Started'],
            ['kubernetes/2-basic-kubernetes-objects', 'Basic Kubernetes Objects'],
            ['kubernetes/3-basic-networking', 'Basic Networking'],
          ],
        },
      ]
    },
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
