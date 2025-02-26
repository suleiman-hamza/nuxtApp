<template>
    <section v-if="pizza" class="pizza--container">
        <img :src="pizza.image" :alt="pizza.title" width="500" />
        <div class="pizza--details">
            <h1>{{ pizza.title }}</h1>
            <div>
                <p>{{ pizza.description }}</p>
                <div class="pizza-stock--section">
                    <span>Stock: {{ pizza.quantity || 0 }}</span>
                    <span>Price: ${{ pizza.price }}</span>
                </div>
            </div>
        </div>
    </section>
    <p v-else>No pizza found</p>
</template>
<script setup lang="ts">
import { usePizzas } from '~/composables/usePizzas.vue'
const route = useRoute();
const { pizzas } = usePizzas();

const pizza = pizzas.value.find((pizza) => pizza.id === route.params.id);
</script>