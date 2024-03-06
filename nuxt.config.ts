// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'One More Friend Thousands More Fun! - Monito',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og:image', property: 'og:image', content: '/images/meta.jpg' },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: 'One More Friend Thousands More Fun! - Monito',
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/images/meta.jpg',
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          property: 'twitter:url',
          content: 'https://monito.fly.dev/',
        },
        {
          property: 'twitter:title',
          content: 'One More Friend Thousands More Fun! - Monito',
        },
        {
          property: 'twitter:description',
          content: 'One More Friend Thousands More Fun! - Monito',
        },
        {
          property: 'twitter:image',
          content: '/images/meta.jpg',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://monito.fly.dev/',
        },
        {
          property: 'og:title',
          content: 'One More Friend Thousands More Fun! - Monito',
        },
        {
          property: 'og:description',
          content: 'One More Friend Thousands More Fun! - Monito',
        },
        {
          property: 'og:image',
          content: '/images/meta.jpg',
        },
      ],
    },
  },
  devtools: { enabled: true },
  modules: [
    // UI & Style
    '@nuxtjs/tailwindcss',
    // Chore
    '@vueuse/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxt/test-utils/module',
  ],
  css: ['~/assets/css/fonts.css'],
})
