<script setup>
import { useWishlistStore } from '@/stores/wishlist'
import { useCartStore } from '@/stores/cart'
import Eye from '../icons/eye.vue'
import Heart from '../icons/heart.vue'

const wishlist = useWishlistStore()
const cart = useCartStore()

defineProps({
  product: Object,
})
</script>

<template>
  <div class="bg-gray-50 rounded-lg p-4 relative">
   
    <div class="absolute top-3 right-3 flex flex-col gap-2">
      <button @click="wishlist.toggle(product)"><Heart class="cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"/></button>
      <RouterLink :to="`/products/${product.id}`"><Eye class="cursor-pointer transition-all duration-200 ease-in-out  hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"/></RouterLink>
    </div>

    <img
      :src="product.image"
      class="h-40 mx-auto object-contain mb-4"
    />

   
    <p class="text-sm font-medium mb-1">
      {{ product.title }}
    </p>

   
    <div class="flex gap-2 items-center mb-2">
      <span class="text-red-500 font-semibold">
        ${{ product.price }}
      </span>
      <span class="line-through text-gray-400 text-sm">
        ${{ product.oldPrice }}
      </span>
    </div>

  
    <div class="flex items-center gap-1 text-sm">
      <span class="text-yellow-400">★★★★★</span>
      <span class="text-gray-500">(65)</span>
    </div>
  </div>
</template>
