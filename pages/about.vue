<script lang="ts" setup>
import { ref, computed, watch } from 'vue';

const name = ref('cb wg');
const formattedName = computed({
    get() {
        return name.value
    },
    set(value) {
        return name.value = value.toLowerCase()
    }

})

const ngnAmount = ref();
const usdAmount = ref();

const fakerate = ref(1500);
const fakeinverse = ref(0.00067);

/*const roundusd = computed({
    get() {
        return usdAmount.value
    }, 
    set(value) {
    const multiplier = Math.pow(10, 2 - Math.floor(Math.log10(Math.abs(value))) - 1);
    Math.round(value * multiplier) / multiplier;
    }
}) */

// const count = ref(0);

// const computedDataProp = computed({
//     get() {
//         return count.value; 
//     },
//     set(value) {
//         count.value = value -2
//     }
// })

watch(ngnAmount, (newVal) => {
    usdAmount.value = newVal * fakeinverse.value
    console.log('naira value changed')
})

watch(usdAmount, (newVall) => {
    ngnAmount.value = newVall * fakerate.value
    console.log('usd value changed')
})

</script>
<template>
    <p>About Pages</p>
    <section>
        <!-- <p>{{ count }}</p>
        <p>{{ computedDataProp }}</p>
        <input v-model="count">
        <button @click="count++">Compute</button> -->

        <h2>Computed Getter & Setter</h2>
        <section class="converter">
            <div class="input">
                <label>NGN</label>
                <input type="text" v-model="ngnAmount">
            </div>
            <div class="input">
                <label>USD</label>
                <input type="text" v-model="usdAmount">
            </div>
        </section>
        <div class="rates">
            <p>Inverse Rate: {{ fakeinverse }}</p>
            <p>Rate: {{ fakerate }}</p>
        </div>
    </section>
</template>

<style scoped>
.converter {
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid grey;
    padding: 1.2rem;
}
</style>