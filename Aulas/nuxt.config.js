export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-finance",
    htmlAttrs: {
      lang: "pt-BR",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Página do nuxt" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  privateRuntimeConfig: {
    facebook_app_id: process.env.FACEBOOK_KEY,
  },
  publicRuntimeConfig: {
    youtube_api_key: process.env.YOUTUBE_KEY,
  },

  router: {
    middleware: ["auth"],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/my-plugin.js",
    "@/plugins/day.js",
    "@/plugins/vtooltip.js",
    "@/plugins/axios.js",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  axios: {
    baseURL: "https://jsonplaceholder.typicode.com/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
