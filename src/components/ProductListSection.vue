<script setup>
    import ItemCard from './ItemCard.vue';
    import { useCartStore } from '../stores/cart';

    const cartStore = useCartStore();
</script>

<template>
    <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4 text-gray-800">Lista de Produtos</h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <ItemCard
                v-for="(product, idx) in cartStore.products"
                :key="product.id"
                :product="product"
                type="product"
            />
        </div>
    </section>
</template>
