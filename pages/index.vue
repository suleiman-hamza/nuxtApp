<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
  title: home.value?.title,
  description: home.value?.description
})
</script>

<template>
    <img src="/images/vue-ambient-logo.png" alt="Vue Ambient Logo Png" width="200px">
     <p>This is the Home page for pizza store</p>

    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
</template>