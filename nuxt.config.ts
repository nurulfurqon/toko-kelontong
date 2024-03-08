// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title:
        'Discover Endless Treasures at Our Online Shop | Shop Fashion, Electronics & More - Kelontong',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Explore a vast array of products at our online shop, from trendy fashion pieces to cutting-edge electronics. Find everything you need in one convenient place. Start shopping today!',
        },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'og:image', property: 'og:image', content: '/images/meta.jpg' },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content:
            'Discover Endless Treasures at Our Online Shop | Shop Fashion, Electronics & More - Kelontong',
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
          content: 'https://toko-kelontong.fly.dev/',
        },
        {
          property: 'twitter:title',
          content:
            'Discover Endless Treasures at Our Online Shop | Shop Fashion, Electronics & More - Kelontong',
        },
        {
          property: 'twitter:description',
          content:
            'Discover Endless Treasures at Our Online Shop | Shop Fashion, Electronics & More - Kelontong',
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
          content: 'https://toko-kelontong.fly.dev/',
        },
        {
          property: 'og:title',
          content:
            'Discover Endless Treasures at Our Online Shop | Shop Fashion, Electronics & More - Kelontong',
        },
        {
          property: 'og:description',
          content:
            'Discover Endless Treasures at Our Online Shop | Shop Fashion, Electronics & More - Kelontong',
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
    '@pinia/nuxt',
    '@nuxtjs/eslint-module',
    '@nuxt/test-utils/module',
  ],
  css: ['~/assets/css/fonts.css'],
  runtimeConfig: {
    apiUrl: '',
  },
})
