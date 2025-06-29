---
title: "Installing Nuxt"
description: "The fisrt articke in my blog"
slug: "Hello world getting started"
---

# Let's Install Nuxt

some random article paragraph

another random paragraph, but this one should be longer thsn the first.
```vue
<script setup>
const name = 'Suleiman'
</script>

<template>
    <img src="/images/vue-ambient-logo.png" alt="Vue Ambient Logo Png" width="200px">
     <p>This is the Home page for pizza store</p>

    <div class="p-2 border">
    <h1 class="underline text-2xl text-pink-600 mb-4">Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
```