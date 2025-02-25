<script setup lang="ts">
// import '~/assets/layout.css'
</script>

<template>
    <nav class="nav-bar">
        <ul class="navigation-container">
            <li>BasketBall</li>
            <li>Biking</li>
            <li>Table Tennis</li>
            <li>F1 motorsport</li>
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