<script setup>
    import ItemCard from './ItemCard.vue';
    import { useCartStore } from '../stores/cart';

    const cartStore = useCartStore();
</script>
<template>
    <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">
            Carrinho de Compras
            <span class="text-base text-gray-600 ml-2">
                R$ {{ cartStore.totalPrice.toFixed(2) }}
            </span>
        </h2>

        <div
            v-if="cartStore.cartItems.length === 0"
            class="text-gray-600 italic"
        >
            Seu carrinho está vazio.
        </div>
        <div v-else class="flex flex-wrap gap-4">
            <ItemCard
                v-for="item in cartStore.cartItems"
                :key="item.uniqueId"
                :product="item"
                type="cart-item"
            />
        </div>
    </section>
</template>
