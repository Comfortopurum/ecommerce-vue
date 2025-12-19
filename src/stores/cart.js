import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cart')) || [],
  }),

  getters: {
    subtotal: (state) =>
      state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
  },

  actions: {
    save() {
      localStorage.setItem('cart', JSON.stringify(this.items))
    },

    addToCart(product, qty = 1) {
      const existing = this.items.find(i => i.id === product.id)

      if (existing) {
        existing.quantity += qty
      } else {
        this.items.push({ ...product, quantity: qty })
      }

      this.save()
    },

    updateQuantity(id, qty) {
      const item = this.items.find(i => i.id === id)
      if (item && qty > 0) {
        item.quantity = qty
        this.save()
      }
    },

    removeItem(id) {
      this.items = this.items.filter(i => i.id !== id)
      this.save()
    },

    clearCart() {
      this.items = []
      this.save()
    },
  },
})
