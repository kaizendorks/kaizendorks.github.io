module.exports = {
  title: 'Kaizen Dorks',
  description: 'Official site of Kaizen Dorks Dublin',
  dest: 'wwwroot',
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
        text: 'Tutorials',
        link: '/tutorials/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
      {
        text: 'Members',
        link: '/members',
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
          text: 'CC BY 4.0 License',
          link: 'https://creativecommons.org/licenses/by/4.0/',
        },
        {
          text: 'Copyright © 2020-present Kaizen Dorks',
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
            ['/projects/dexa', 'dexa'],
            ['/projects/nexus-operator', 'nexus-operator'],
            ['/projects/pymongo-inmemory', 'pymongo-inmemory'],
            ['/projects/sinon-mongo', 'sinon-mongo'],
            ['/projects/vuecli-in-docker', 'vuecli-in-docker'],
            ['/projects/vue-autowire', 'vue-autowire'],
            ['/projects/vue-cli-plugin-auth0', 'vue-cli-plugin-auth0'],
            ['/projects/vue-cli-plugin-jest-puppeteer', 'vue-cli-plugin-jest-puppeteer'],
            ['/projects/vue-cli-plugin-vuedock', 'vue-cli-plugin-vuedock'],
          ],
        }
      ],
      '/tutorials/': [
        '',
        {
          title: 'Kubernetes for Developers',
          children: [
            ['kubernetes/', 'Welcome'],
            ['kubernetes/1-clusters-nodes', '1. Clusters and Nodes'],
            ['kubernetes/2-basic-kubernetes-objects', '2. Basic Kubernetes Objects'],
            ['kubernetes/3-basic-networking', '3. Basic Networking'],
          ],
        },
      ]
    },
  },
  // Configure extra tags for the <head> element, like favicons and others necessary for PWA
  // icons were generated with: https://www.favicon-generator.org/
  // See https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#usage
  head: [
    ['link', { rel: 'icon', sizes: '16x16', href: '/icons/favicon-16x16.png' }],
    ['link', { rel: 'icon', sizes: '32x32', href: '/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', sizes: '96x96', href: '/icons/favicon-96x96.png' }],
    ['link', { rel: 'icon', sizes: '192x192', href: '/icons/favicon-192x192.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/icons/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/icons/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/icons/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/icons/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/icons/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/icons/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
  plugins: [
    // Add the official PWA plugin. See https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#usage
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    // Add the official image-zoom plugin. See https://vuepress.github.io/en/plugins/medium-zoom/#installation
    [
      '@vuepress/plugin-medium-zoom',
      {
        selector: '.theme-container .page img',
        delay: 500,
        options: {
          margin: 24,
          // background: '#BADA55',
          // scrollOffset: 0,
        },
      },
    ],
    // Add back the tip/warning/danger containers of the vuepress-plugin-container
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': '',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'warning',
        defaultTitle: {
          '/': '',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'danger',
        defaultTitle: {
          '/': '',
        },
      },
    ],
    // Social share plugin. See https://sns.goyfe.com/guide/#install
    [
      'social-share',
      {
        networks: ['twitter', 'reddit', 'facebook', 'whatsapp', 'telegram'],
        twitterUser: 'DorksKaizen',
        fallbackImage: '/logo_navbar.png',
        isPlain: true,
        noGlobalSocialShare: true
      },
    ],
    // Check for broken links in markdown files. See https://github.com/ulivz/vuepress-plugin-check-md
    // Run from the command line using vuepress check-md website
    [
      'check-md',
      {
        exitLevel: 'none'
      }
    ]
  ],
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // doesnt seem to be necessary once the inline script for github profile badges was moved to a Vue component rather than the markdown files
      // config.externals = [/cdn.jsdelivr.net/i]
    }
  }
}
