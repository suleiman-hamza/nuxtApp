<script setup lang="ts">
const { as = 'div' } = defineProps<{
  as?: string
}>()
</script>

<template>
    <component :is="as" class="relative -mb-px -ml-px border border-default">
        <span class="cross absolute -bottom-px -left-px size-px"/>
        <span class="cross absolute -bottom-px -right-px size-px"/>
        <span class="cross absolute -left-px -top-px size-px"/>
        <span class="cross absolute -right-px -top-px size-px"/>
        <div class="relative z-10 flex flex-col justify-center p-2">
            <slot/>
        </div>
    </component>
</template>

<style lang="css" scoped>
/* @reference "tailwindcss"; */
</style>