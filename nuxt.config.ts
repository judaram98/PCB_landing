// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'node-server'
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["/assets/css/global.css"],
});
