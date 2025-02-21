<script lang="ts" setup>
import { ref, computed } from 'vue';

const name = ref('cb wg');
const formattedName = computed({
    get() {
        return name.value
    },
    set(value) {
        return name.value = value.toLowerCase()
    }

})

// const count = ref(0);

// const computedDataProp = computed({
//     get() {
//         return count.value; 
//     },
//     set(value) {
//         count.value = value -2
//     }
// })

</script>
<template>
    <p>About Pages</p>
    <section>
        <!-- <p>{{ count }}</p>
        <p>{{ computedDataProp }}</p>
        <input v-model="count">
        <button @click="count++">Compute</button> -->

        <h2>Computed Getter & Setter</h2>
        <label>Full name</label>
        <input type="text" v-model="formattedName">
    </section>
</template>