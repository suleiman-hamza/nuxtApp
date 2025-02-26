<script lang="ts" setup>
import { usePizzas } from "~/composables/usePizzas.vue";
import PizzaCard from "@/components/PizzaCard.vue";

const { pizzas } = usePizzas();
</script>

<template>
    <div class="pizzas-view--container">
        <h1>Pizzas</h1>
        <ul>
            <li v-for="pizza in pizzas" :key="pizza.id">
                <PizzaCard :pizza="pizza" />
            </li>
        </ul>
    </div>
</template>