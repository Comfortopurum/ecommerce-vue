<script setup>
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'
import Eye from '../icons/eye.vue'
import Heart from '../icons/heart.vue'

const cart = useCartStore()
const wishlist = useWishlistStore()

defineProps({
  product: Object,
})
</script>

<template>
  <div class="bg-gray-50 rounded-lg p-4 relative">
   
    <span
      v-if="product.isNew"
      class="absolute top-3 left-3 bg-green-400 text-xs px-2 py-1 rounded"
    >
      NEW
    </span>

    <div class="absolute top-3 right-3 flex flex-col gap-2">
      <button @click="wishlist.toggle(product)"><Heart class="cursor-pointer transition-all duration-200 ease-in-out  hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"/></button>
      <RouterLink :to="`/products/${product.id}`"><Eye class="cursor-pointer transition-all duration-200 ease-in-out  hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"/></RouterLink>
    </div>

    
    <img
      :src="product.image"
      class="h-40 mx-auto object-contain mb-4"
    />

   
    <button
      class="w-full bg-black text-white py-2 mb-3 cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"
      @click="cart.addToCart(product)"
    >
      Add To Cart
    </button>

   
    <p class="text-sm font-medium mb-1">
      {{ product.title }}
    </p>

    <div class="flex gap-2 items-center mb-1">
      <span class="text-red-500 font-semibold">
        ${{ product.price }}
      </span>
    </div>

    <div class="flex items-center gap-1 text-sm">
      <span class="text-yellow-400">★★★★★</span>
      <span class="text-gray-500">({{ product.rating }})</span>
    </div>
  </div>
</template>
