<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()

defineProps({
  product: Object,
})
</script>

<template>
  <div class="min-w-62.5 bg-white  rounded p-4">
    <span class="bg-red-500 text-white text-xs px-2 py-1 rounded">
      -{{ product.discount }}%
    </span>

    <img
      :src="product.image"
      class="h-40 mx-auto my-4 object-contain"
    />

    <button
      class="w-full bg-black text-white py-2 mb-3 cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"
      @click="cart.addToCart(product)"
    >
      Add To Cart
    </button>

    <p class="text-sm font-medium">{{ product.title }}</p>

    <div class="flex gap-2 items-center">
      <span class="text-red-500">${{ product.price }}</span>
      <span class="line-through text-gray-400 text-sm">
        ${{ product.oldPrice }}
      </span>
    </div>
  </div>
</template>
