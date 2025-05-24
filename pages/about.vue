<script lang="ts" setup>
import { ref, computed, watch } from 'vue';

const ngnAmount = ref('');
const usdAmount = ref('');

const setNgnAmount = ref(0);
const setUsdAmount = ref(0);

const fakerate = ref(1500);
const fakeinverse = ref(0.00067);
const ngnRef = ref<null>(null)

function clearInput() {
    usdAmount.value = '0';
    ngnAmount.value = '0';
}

// function isZeroValue(value: number) {
//     return value.length === 2 && value[0] === '0' && value[1] !== '.'
// }


// when naira changes
function convertLocalizedCurrencyfromNgn(value: string) {
    console.log(`NGN-AMOUNT BEFORE CONVRT FUNC RUNS == ${ngnAmount.value}`)
    setUsdAmount.value = parseFloat(value) / fakerate.value
    console.log(setUsdAmount.value)
   return setUsdAmount.value.toFixed(2)
}

// when dollar changes
function convertNgnfromLocalizedCurrency(value: string) {
    console.log(`USD-AMOUNT BEFORE CONVRT FUNC RUNS == ${usdAmount.value}`)
    setNgnAmount.value = parseFloat(value) / fakeinverse.value
    console.log(setNgnAmount.value)
    return setNgnAmount.value.toFixed(2)
}

// watch(usdAmount, (newValue) => {
//     ngnAmount.value = convertNgnfromLocalizedCurrency(newValue)
// })

// ngnval 
const ngnval = computed({
    get() {
        return  usdAmount.value 
    },
    set(value) {
        ngnAmount.value = convertNgnfromLocalizedCurrency(value)
    }
})

const usdval = computed({
    get() {
        return  ngnAmount.value 
    },
    set(value) {
        usdAmount.value = convertLocalizedCurrencyfromNgn(value)
    }
})
//watch(ngnAmount, (newValue) => {
//    usdAmount.value = convertLocalizedCurrencyfromNgn(newValue)
//})

</script>

<template>
    <p>About Pages</p>
    <section>
        <h2>Computed Getter & Setter</h2>
        <section class="converter">
            <div class="input">
                <label>NGN</label>
                <input type="text" v-model="ngnAmount" ref="ngnRef" autofocus>
            </div>
            <div class="input">
                <label>USD</label>
                <input type="text" v-model="usdAmount" ref="usdRef">
            </div>
        </section>
        <button @click="clearInput">Clear</button>
        <p>Ngn: {{ ngnval }}</p>
        <p>Usd: {{ usdval }}</p>
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