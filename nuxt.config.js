export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)

  ssr: true,
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Termii | Developers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.css" }
    ],
    script: [
      {src: '/js/intercom.js'},
      {src: '/js/feedback.js'},
      {src: "https://cdn.jsdelivr.net/npm/docsearch.js@2/dist/cdn/docsearch.min.js", body: true},
      {src: '/js/docsearch.js', body: true},

    ],
  },



  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/font/karla/css/karla.css',
    '@assets/css/main.css',
    '@assets/icons/entypo/css/entypo.css',
    '@assets/icons/fontawesome/styles.min.css',
    '@assets/icons/icomoon/styles.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vue-scrollactive',
    '@/plugins/vue-js-modal',
    '@/plugins/services.plugin.js',

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],
  loading:{
    color: '#1991bd',
    height: '2px',
    throttle: 0
  },
  generate: {
    fallback: true, // if you want to use '404.html' instead of the default '200.html'
  },
  axios: {
    // proxyHeaders: false
    baseURL: process.env.API_BASE_URL,

  },
  toast: {
    position: 'bottom-center',
    duration: 3000
  },

  loadingIndicator: {
    name: '~/termii_bird_loader.html',
    background: 'white'
  },

  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxt/content'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
