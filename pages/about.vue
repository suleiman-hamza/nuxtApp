<script lang="ts" setup>
import { ref, computed, watch } from 'vue';

const ngnAmount = ref(0);
const usdAmount = ref(0);

const setNgnAmount = ref(0);
const setUsdAmount = ref(0);

const fakerate = ref(1500);
const fakeinverse = ref(0.00067);

function clearInput() {
    usdAmount.value = 0;
    ngnAmount.value = 0;
}

// function isZeroValue(value: number) {
//     return value.length === 2 && value[0] === '0' && value[1] !== '.'
// }


// when naira changes
function convertLocalizedCurrencyfromNgn(value: number) {
    console.log(`NGN-AMOUNT BEFORE CONVRT FUNC RUNS == ${ngnAmount.value}`)
    setUsdAmount.value = value / fakerate.value
    console.log(`USD VAKUE OF CONVERSION WITH RATE == ${setUsdAmount.value}`)
    console.log(`Current value is ${setUsdAmount.value} = value - ${value} * rate - ${fakeinverse.value}`)
    return setUsdAmount.value.toFixed(2)
}

// when dollar changes
function convertNgnfromLocalizedCurrency(value: number) {
    console.log(`USD-AMOUNT BEFORE CONVRT FUNC RUNS == ${usdAmount.value}`)
    setNgnAmount.value = value / fakeinverse.value
    console.log(`NGN VAlUE OF CONVERSION WITH RATE == ${setNgnAmount.value}`)
    console.log(`Current value is ${setNgnAmount.value} = value - ${value} * rate - ${fakeinverse.value}`)
    console.log(`USD-AMOUNT After CONVeRT FUNC RUNS == ${usdAmount.value}`)
    return setNgnAmount.value.toFixed(2)
}

watch(usdAmount, (newValue) => {
    ngnAmount.value = parseFloat(convertNgnfromLocalizedCurrency(newValue))
})

watch(ngnAmount, (newValue) => {
    usdAmount.value = parseFloat(convertLocalizedCurrencyfromNgn(newValue))
})

</script>

<template>
    <p>About Pages</p>
    <section>
        <h2>Computed Getter & Setter</h2>
        <section class="converter">
            <div class="input">
                <label>NGN</label>
                <input type="number" v-model="ngnAmount" ref="ngnRef" autofocus>
            </div>
            <div class="input">
                <label>USD</label>
                <input type="number" v-model="usdAmount" ref="usdRef">
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