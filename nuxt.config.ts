// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({

  css: ['~/assets/css/tailwind.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    // Nuxt Icons
    'nuxt-icon',
    [
      // Nuxt Robots
      '@nuxtjs/robots',
      {
        UserAgent: "*",
        Disallow: "",
      }
    ],
  ],

  app: {
    head: {
        htmlAttrs: {
            lang: 'en'
        },
        bodyAttrs: {
            class: 'demo'
        },
        charset: 'utf-8',
        titleTemplate: '%s | IT Genius Engineering',
        meta: [
            {
                name: 'author',
                content: 'IT Genius Engineering Ltd., Thailand'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1, maximum-scale=5'
            }
        ]
    }
  },
  runtimeConfig: {
    wpUri: process.env.VITE_WP_URI,
  },
  devtools: { enabled: true }
})
