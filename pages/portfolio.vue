<script setup >
import { motion } from "motion-v"
definePageMeta({
    layout: "folio"
})
</script>

<template>
    <section class="portfolio border-2 border-blue-500 p-4">
        <p class="text-[#dedede] mb-8">The portfolio center</p>
        <motion.div
            class="box"
            :animate="{ rotate: 360 }"
            :transition="{ duration: 1 }"
        />
    </section>
</template>

<style lang="css" scoped>
.box {
    width: 100px;
    height: 100px;
    background-color: #0cdcf7;
    border-radius: 5px;
}
</style>