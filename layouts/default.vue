<script setup lang="ts">
// import '~/assets/layout.css'
</script>

<template>
    <nav class="nav-bar">
        <ul class="navigation-container">
            <nuxt-link to="/">Home</nuxt-link>
            <nuxt-link to="/pizzas">Pizzas</nuxt-link>
        </ul>
    </nav>
    <slot />
    <footer>
        <p>The Footer</p>
    </footer>
</template>

<style scoped>
@import url('~/assets/layout.css');
</style>