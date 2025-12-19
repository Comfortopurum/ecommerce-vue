import { defineStore } from 'pinia'

export const useWishlistStore = defineStore('wishlist', {
  state: () => ({
    items: [],
  }),

  actions: {
    toggle(product) {
      const exists = this.items.find(p => p.id === product.id)
      if (exists) {
        this.items = this.items.filter(p => p.id !== product.id)
      } else {
        this.items.push({
  ...product,
  oldPrice: product.price + 200,
  discount: 35,
})
      }
    },
  },
})
