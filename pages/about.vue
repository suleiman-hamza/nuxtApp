<script lang="ts" setup>
import { ref, computed, watch, shallowRef } from 'vue';

const name = ref('cb wg');
const formattedName = computed({
    get() {
        return name.value
    },
    set(value) {
        return name.value = value.toLowerCase()
    }

})

const ngnAmount: Ref<number> = shallowRef(0);
const usdAmount: Ref<number> = shallowRef(0);

const fakerate = ref(1500);
const fakeinverse = ref(0.00067);

function clearInput() {
    ngnAmount.value = 0;
    usdAmount.value = 0;
}

const nairaToUSD = computed(()=> {
    return ngnAmount.value * fakeinverse.value
})

const usdToNaira = computed(()=> {
    return usdAmount.value / fakeinverse.value
    // return (usdAmount.value / fakeinverse.value).toFixed(2)
})

watch(ngnAmount, (newValue)=> {
    if(!isNaN(newValue)) {
        usdAmount.value = nairaToUSD.value
    } else {
        usdAmount.value = 0;
    }
})

watch(usdAmount, (newValue) => {
    if(!isNaN(newValue)) {
    // if(newValue !== '' && !isNaN(newValue)) { replace later
        ngnAmount.value = usdToNaira.value
    } else {
        ngnAmount.value = 0;
    }
})



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

// watchEffect(() => {
//     ngnAmount.value = usdAmount.value * fakerate.value
//     console.log(ngnAmount.value);
// })

// watchEffect(() => {
//     usdAmount.value = ngnAmount.value * fakeinverse.value
//     console.log(usdAmount.value);
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
                <input type="text" v-model.number="ngnAmount">
            </div>
            <div class="input">
                <label>USD</label>
                <input type="text" v-model.number="usdAmount">
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
</style>