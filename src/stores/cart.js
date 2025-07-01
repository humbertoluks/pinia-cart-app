import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
    state: () => ({
        cartItems: [],
        products: [
            { id: 1, name: 'Iphone', price: 5000 },
            { id: 2, name: 'Macbook', price: 10000 },
            { id: 3, name: 'Apple Watch', price: 2000 },
            { id: 4, name: 'Ipad', price: 1000 },
        ],
    }),
    actions: {
        addToCart(product) {
            const existingProduct = this.cartItems.find(
                (item) => item.id === product.id
            );

            if (!existingProduct) {
                const itemToAdd = {
                    ...product,
                    uniqueId: Date.now() + Math.random(),
                };

                this.cartItems.push(itemToAdd);
            }

            // A Promise com setTimeout parece ser para simular uma operação assíncrona.
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 200); // Reduzi o tempo para testes mais rápidos
            });
        },
        removeFromCart(uniqueIdToRemove) {
            console.log('Removendo item com uniqueId:', uniqueIdToRemove);
            console.log('Itens no carrinho antes da remoção:', this.cartItems);

            const index = this.cartItems.findIndex(
                (item) => item.uniqueId === uniqueIdToRemove
            );
            if (index !== -1) {
                this.cartItems.splice(index, 1);
            }
        },
    },
    getters: {
        totalPrice: (state) => {
            return state.cartItems.reduce((total, product) => {
                return total + product.price;
            }, 0);
        },
    },
});
