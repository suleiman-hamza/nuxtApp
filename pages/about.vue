<script lang="ts" setup>
import { ref, computed, watch } from 'vue';

const ngnAmount = ref(0);
const usdAmount = ref(0);

// const setNgnAmount = ref(0);
// const setUsdAmount = ref(0);

const fakerate = ref(1500);
const fakeinverse = ref(0.00067);

function clearInput() {
    usdAmount.value = 0;
    ngnAmount.value = 0;
}

// function isZeroValue(value: number) {
//     return value.length === 2 && value[0] === '0' && value[1] !== '.'
// }

function convertLocalizedCurrencyfromNgn(value: number) {
    return usdAmount.value = value * fakeinverse.value
}

function convertNgnfromLocalizedCurrency(value: number) {
    return ngnAmount.value = value / fakeinverse.value
}

watch(usdAmount, (newValue) => {
    convertNgnfromLocalizedCurrency(newValue)
})

watch(ngnAmount, (newValue) => {
    convertLocalizedCurrencyfromNgn(newValue)
})

</script>

<template>
    <p>About Pages</p>
    <section>
        <h2>Computed Getter & Setter</h2>
        <section class="converter">
            <div class="input">
                <label>NGN</label>
                <input type="text" v-model.number="ngnAmount" ref="ngnRef" autofocus>
            </div>
            <div class="input">
                <label>USD</label>
                <input type="text" v-model.number="usdAmount" ref="usdRef">
            </div>
        </section>
        <button @click="clearInput">Clear</button>
        <div class="rates">
            <p>Inverse Rate: {{ fakeinverse }}</p>
            <p>Rate: {{ fakerate }}</p>
        </div>
        <div class="nav-bar">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil reiciendis, eum qui necessitatibus sed excepturi ut quam! Cum facilis sint voluptatibus. Dignissimos repellendus consequuntur rem ut aperiam aut ex nihil?</p>
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
.input input {
    padding: 1rem;
    width: 100px;
    font-size: 1.2rem;
}
</style>