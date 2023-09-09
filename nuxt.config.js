// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: false },
  // components: true,

  css: ["@/assets/normalize.css"],

  // webpack: {
  //   loaders: {
  //     vue: {
  //       hotReload: true,
  //     },
  //   },
  // },
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
});
