// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: false },
  buildModules: ["@nuxt/components"],
  components: true,
  css: ["@/assets/normalize.css"],

  // plugins: [
  //   './plugins/vue3-click-away.js',
  // ],
  devServer: {
    port: 3052,
  },
  devtools: { enabled: false },
  modules: ["@pinia/nuxt"],
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  imports: {
    dirs: ["./stores"],
  },

  ssr: true,

  router: {
    middleware: ["authorized", "not-authorized"],
  },
});
