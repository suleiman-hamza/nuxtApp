<script setup lang="ts">
const route = useRoute()
const { data: home } = await useAsyncData("blog", () => queryCollection("collection").all())

// useSeoMeta({
//   title: home.value?.title,
//   description: home.value?.description
// })
</script>

<template>
    <img src="/images/vue-ambient-logo.png" alt="Vue Ambient Logo Png" width="200px">
     <p>This is the Home page for pizza store</p>

    <ContentRenderer v-if="home" :value="home" class="p-4 border"/>
    <div v-else>Home not found</div>
</template>