<script setup lang="ts">
const route = useRoute()
const { data: posts } = await useAsyncData("blog", () => queryCollection("blog").all())

// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description
// })
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