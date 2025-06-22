// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', 'motion-v/nuxt', '@nuxt/content'],
  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        }
      }
    }
  },
})