module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'node-express-nuxt-mongodb-boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css: [
    'element-ui/lib/theme-default/index.css'
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: ['axios', 'element-ui'],
    analyze: false,
    babel: {
      plugins: [
        ['component',
          [
            {
              'libraryName': 'element-ui',
              'styleLibraryName': 'theme-default'
            }
          ]
        ]]
    },
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) { //* Run ESLint on save
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  plugins: ['~plugins/element-ui'],
  /** Add server middleware
  ** Nuxt.js uses `connect` module as server
  ** So most of express middleware works with nuxt.js server middleware
  */
  serverMiddleware: [
    '~server/api'
  ]
}
