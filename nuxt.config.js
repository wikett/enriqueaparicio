const pkg = require('./package')
const path = require('path')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Enrique Aparicio Castellanos | Ingeniero en Informatica y Maestro de Primaria',
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
  loading: { color: '#fa923f', height: '4px' },

  /*
  ** Global CSS
  */
  css: [
    '~assets/css/tailwind.css',
    '~assets/css/main.css'
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
    'nuxt-purgecss',
    '@nuxtjs/axios'
  ],

  axios: {
    // proxyHeaders: false
    baseUrl: process.env.BASE_URL || 'https://enriqueaparicio-1d2ff.firebaseio.com'
  },
  
  /*
  ** Build configuration
  */
  build: {
    extractCSS: true,
    postcss: {
      plugins: {
        tailwindcss: path.resolve(__dirname, './tailwind.config.js')
      }
    },
    extend(config, ctx) {
      //config.devtool = 'source-map';
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'https://enrique-cv-cf052.firebaseio.com/',
    fbAPIKey: 'AIzaSyDIr2b3khZVF-lmK9VscVZ4YFsaBhZ6_Ps'
  },
  router: {
    middleware: 'paginas'
  }
}
