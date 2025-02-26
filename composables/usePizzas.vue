<script lang="ts">
import type { Pizza } from "~/types/Pizza"; // import pizza typed in types folder
import type { Ref } from "vue"; // type-Ref coz our composable returns an obj that's a ref
import { ref } from "vue";

//This is what this composable function returns
// {
//     pizzas: {
//         id: number,
//         title: string,
//         price: string,
//         desc: string,
//         img: string,
//         quantity: number
//     }
// }

export function usePizzas() : { pizzas: Ref<Pizza[]> } {
    return {
        pizzas: ref([
                {
                    id: "1",
                    title: "Pina Colada Pizza",
                    price: "10.00",
                    description:
                    "A delicious combination of pineapple, coconut, and coconut milk.",
                    image:
                    "https://res.cloudinary.com/mayashavin/image/upload/Demo/pina_colada_pizza.jpg",
                    quantity: 3,
                },
                {
                    id: "2",
                    title: "Pepperoni Pizza",
                    price: "12.00",
                    description:
                    "A delicious combination of pepperoni, cheese, and pineapple.",
                    image:
                    "https://res.cloudinary.com/mayashavin/image/upload/Demo/pepperoni_pizza.jpg",
                    quantity: 2,
                },
                {
                    id: "3",
                    title: "Veggie Pizza",
                    price: "9.00",
                    description:
                    "A delicious combination of mushrooms, onions, and peppers.",
                    image:
                    "https://res.cloudinary.com/mayashavin/image/upload/Demo/veggie_pizza.jpg",
                    quantity: 1,
                },
        ]),
    };
}
</script>
<template>
    
</template>