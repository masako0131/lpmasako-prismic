import pkg from './package'

export default {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'prismic-nuxt', {
        endpoint: 'https://patissiermasako.cdn.prismic.io/api/v2',
        linkResolver: function (doc, ctx) {
          return '/'
        }
      },
    ], [
      'nuxt-i18n', {
        defaultLocale: 'zh',
        locales: [
          {
            code: 'ja',
            iso: 'ja-JP',
            file: 'ja-JP.js'
          },
          {
            code: 'zh',
            iso: 'zh-TW',
            file: 'zh-TW.js'
          }
        ],
        lazy: true,
        langDir: 'lang/',
        vueI18n: {
          fallbackLocale: 'zh',
        }
      }
    ]
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
