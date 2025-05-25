<template>
    <nav class="flex justify-between items-center border p-4">
        <h1 class="text-blue-600 text-xl">Playground</h1>
        <ul class="flex gap-4 text-[#dedede]">
            <nuxt-link to="/" class="hover:text-[#202020]">Home</nuxt-link>
            <nuxt-link to="/pizzas" class="hover:text-[#202020]">Pizzas</nuxt-link>
            <nuxt-link to="/about" class="hover:text-[#202020]">Converter</nuxt-link>
            <nuxt-link to="/portfolio" class="hover:text-[#202020]">Motion-v</nuxt-link>
        </ul>
    </nav>
</template>

<style lang="css" scoped>
.navi {
    display: flex;
    justify-content: space-between;
    border: 1px solid red;
    padding: 1rem;

    h2 {
        margin: 0;
    }
}
section {
    border: 1px solid red;
    padding: 1rem;
}
</style>