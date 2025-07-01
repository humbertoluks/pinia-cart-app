<script setup>
    import { computed, defineProps, defineEmits } from 'vue';
    import { useCartStore } from '../stores/cart';

    const cartStore = useCartStore();

    const props = defineProps({
        product: {
            type: Object,
            required: true,
            default: () => ({
                name: '',
                price: 0.0,
            }),
        },
        type: {
            type: String,
            required: true,
            validator: (value) => ['product', 'cart-item'].includes(value),
        },
    });

    const buttonText = computed(() =>
        props.type === 'product' ? 'Adicionar' : 'Remover'
    );

    const buttonClass = computed(() =>
        props.type === 'product'
            ? 'bg-blue-600 hover:bg-blue-700'
            : 'bg-red-600 hover:bg-red-700'
    );

    function handleCartAction() {
        if (props.type === 'product') {
            cartStore.addToCart(props.product);
        } else {
            cartStore.removeFromCart(props.product);
        }
    }

    cartStore.$onAction(({ name, after }) => {
        after(() => {
            console.log('Ação concluída:', name);
        });
    });
</script>

<template>
    <div
        class="p-4 border border-gray-300 rounded-md bg-gray-50 text-center shadow-sm"
    >
        <span class="block font-semibold text-lg mb-1 text-gray-800">
            {{ product.name }}
        </span>
        <span class="block text-base text-gray-600 mb-3">
            R$ {{ product.price }}
        </span>

        <!-- Nenhum conteúdo extra necessário aqui, apenas o botão já existente -->
        <button
            :class="buttonClass"
            class="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            @click="handleCartAction"
        >
            {{ buttonText }}
        </button>
    </div>
</template>
