import pkg from "./package";
import Prismic from "prismic-javascript";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      "prismic-nuxt",
      {
        endpoint: "https://patissiermasako.cdn.prismic.io/api/v2",
        linkResolver: function(doc, ctx) {
          return "/";
        }
      }
    ],
    [
      "nuxt-i18n",
      {
        defaultLocale: "zh",
        locales: [
          {
            code: "ja",
            iso: "ja-JP",
            file: "ja-JP.js"
          },
          {
            code: "zh",
            iso: "zh-TW",
            file: "zh-TW.js"
          }
        ],
        lazy: true,
        langDir: "lang/",
        vueI18n: {
          fallbackLocale: "zh"
        }
      }
    ]
  ],

  generate: {
    routes: function() {
      return Prismic.getApi("https://patissiermasako.cdn.prismic.io/api/v2")
        .then(api =>
          api.query(Prismic.Predicates.at("document.type", "product"), {
            pageSize: 100,
            orderings: "[my.layout.uid]"
          })
        )
        .then(res => {
          if (res.total_pages > 1) {
            console.warn("we have more than 100 pages, fix it");
            process.exit(1);
          }
          const paths = res.results.map(page => `/products/${page.uid}`);
          const paths_ja = res.results.map(page => `/ja/products/${page.uid}`);
          return [...paths, ...paths_ja];
        });
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
