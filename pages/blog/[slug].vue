<script setup lang="ts">
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})

useSeoMeta({
   title: page.value?.title,
   description: page.value?.description
})
</script>

<template>
  <div class="p-4 bg-black text-white">
    <ContentRenderer v-if="page" :value="page" class="prose max-w-none" />
    <div v-else>Page not found</div>
  </div>
</template>