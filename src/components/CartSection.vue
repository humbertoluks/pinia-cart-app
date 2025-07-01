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
                R$ {{ cartStore.totalPrice }}
            </span>
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ItemCard
                v-for="(item, idx) in cartStore.cartItems"
                :key="item.id"
                :product="item"
                type="cart-item"
            />
        </div>
    </section>
</template>
