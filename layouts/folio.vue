<script lang="ts" setup>
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>
<template>
    <Header/>
        <slot />
    <Footer/>
</template>