<script setup>
    import CartSection from './components/CartSection.vue';
    import ProductListSection from './components/ProductListSection.vue';
</script>

<template>
    <div
        class="container mx-auto px-4 py-8 max-w-3xl bg-white shadow-lg rounded-lg"
    >
        <header>
            <h1 class="text-4xl font-bold mb-6 text-gray-900">
                Curso de Pinia
            </h1>
        </header>

        <CartSection />

        <hr class="my-6 border-t border-gray-200" />

        <ProductListSection />
    </div>
</template>
