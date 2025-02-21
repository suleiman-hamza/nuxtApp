<script lang="ts" setup>
import { ref, computed } from 'vue';

const name = ref('cb wg');
const formattedName = computed({
    get() {
        return name.value
    },
    set(value) {
        return name.value = value.toLowerCase().replace(/\b\w\g/, c => c.toUpperCase())
    }

})
</script>
<template>
    <p>About Pages</p>
    <section>
        <h2>Computed Getter & Setter</h2>
        <label>Full name</label>
        <input type="text" v-model="formattedName">
    </section>
    <p>{{ name }}</p>
</template>