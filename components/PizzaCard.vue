<script setup lang="ts">
import type { Pizza } from "~/types/Pizza"; // pizza type from types folder
import type { PropType } from "vue"; // from vue
    const props = defineProps({ // define props from vue
        pizza: {
            type: Object as PropType<Pizza>,
            required: true,
        },
    });
</script>

<template>
    <article class="pizza--details-wrapper">
        <img :src="pizza.image" :alt="pizza.title" height="200" width="300" />
        <p>{{ pizza.description }}</p>
        <div class="pizza--inventory">
            <div class="pizza--inventory-stock">Stock: {{ pizza.quantity || 0 }}</div>
            <div class="pizza--inventory-price">$ {{ pizza.price }}</div>
        </div>
    </article>
</template>