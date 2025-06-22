import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  }
})
// This configuration sets up the content module for Nuxt.js, defining a collection named 'content'
// that includes all Markdown files in the project. The 'type' is set to 'page', indicating that these files