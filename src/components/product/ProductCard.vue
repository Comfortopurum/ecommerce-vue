<template>
  <div class="border rounded-lg p-4 hover:shadow">
    <img :src="product.image" class="h-40 mx-auto object-contain" />
    <h3 class="mt-3 font-medium text-sm line-clamp-2">
      {{ product.title }}
    </h3>
    <p class="text-red-500 font-bold mt-1">${{ product.price }}</p>

    <div class="flex gap-2 mt-3">
      <AppButton @click="cart.addToCart(product)">
        Add to Cart
      </AppButton>
      <button @click="wishlist.toggle(product)">♡</button>
    </div>
  </div>
</template>

<script setup>
import AppButton from '@/components/common/AppButton.vue'
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'

defineProps({ product: Object })

const cart = useCartStore()
const wishlist = useWishlistStore()
</script>
