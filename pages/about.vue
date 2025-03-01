<script lang="ts" setup>
import { ref, computed, watch } from 'vue';

const ngnAmount = ref('0');
const usdAmount = ref('0');

const setNgnAmount = ref('0');
const setUsdAmount = ref('0');

const fakerate = ref(1500);
const fakeinverse = ref(0.00067);

function clearInput() {
    usdAmount.value = '0';
    ngnAmount.value = '0';
    console.log('do something please')
}

// remove @input event listener for v-model later

function isZeroValue(value: string) {
    return value.length === 2 && value[0] === '0' && value[1] !== '.'
}

function convertLocalizedCurrencyfromNgn(value: string) {
    if(isZeroValue(value)) {
        setNgnAmount.value = value[1]
    } else {
        setNgnAmount.value = value
    }

    const parsedNgn = parseFloat(value);
    const nggn = parsedNgn * fakeinverse.value

    if(nggn === 0) {
        setUsdAmount.value = 0; 
    } else {
        setUsdAmount.value = nggn.toFixed(2)
    }
    console.log(nggn)
    console.log(setUsdAmount.value)
}

function convertNgnfromLocalizedCurrency(value: string) {
    if(isZeroValue(value)) {
        setUsdAmount.value = value[1]
    } else {
        setUsdAmount.value = value
    }

    const parsedUsd = parseFloat(value);
    const ussd = parsedUsd / fakeinverse.value

    if(ussd === 0) {
        setNgnAmount.value = 0; 
    } else {
        setNgnAmount.value = ussd.toFixed(2)
    }
    console.log(ussd)
    console.log(ngnAmount.value)
}

// watch(usdAmount, (newValue: string) => {
//     convertNgnfromLocalizedCurrency(newValue); 
// })

// watch(ngnAmount, (newValue: string) => {
//     convertLocalizedCurrencyfromNgn(newValue);
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
        <section class="converter">
            <div class="input">
                <label>NGN</label>
                <input type="text" @input="(e)=> {
                    const value = e.target.value;
                    convertLocalizedCurrencyfromNgn(value)
                }" ref="ngnRef" autofocus>
            </div>
            <div class="input">
                <label>USD</label>
                <input type="text" @input="(e) => {
                    const value = e.target.value;
                    convertNgnfromLocalizedCurrency(value)
                }" ref="usdRef">
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