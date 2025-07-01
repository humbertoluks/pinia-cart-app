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
                this.cartItems.push({ ...product, quantity: 1 });
            }

            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 2000);
            });
        },
        removeFromCart(product) {
            const index = this.cartItems.findIndex(
                (item) => item.id === product.id
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
