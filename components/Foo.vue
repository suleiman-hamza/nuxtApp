<template>
    <h4>Quote of the Day!</h4>
    <div>
        <!-- <p v-if="quote">{{ quote }}</p> -->
        <!-- <p v-if="quote">— {{ quote }}</p> -->
        <p v-if="error">Error fetching quote: {{ error }}</p>
        <p v-else>Loading...</p>
        <button @click="fetchQuote">Get New Quote</button>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
onMounted(() => {
    fetchQuote();
});

interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

const quote = ref<User[] | null>(null);
const error = ref<string | null>(null);

const fetchQuote = async () => {
    quote.value = null;
    error.value = null;

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data:User[] = await response.json();
        quote.value = data;
        console.log(quote.value);
    } catch(err: any) {
        error.value = err.message;
        console.error("Error fetching quote:", err); // Log the error for debugging
    }
};
</script>