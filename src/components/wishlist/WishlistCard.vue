<template>
  <div class="border rounded-lg p-4 relative">
    
    <button
      @click="remove"
      class="absolute top-3 right-3 text-gray-400 hover:text-red-500 cursor-pointer transition-all duration-200 ease-in-out  hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"
    >
      <Bin/>
    </button>

    
    <span
      v-if="product.discount"
      class="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded"
    >
      -{{ product.discount }}%
    </span>

    
    <img
      :src="product.image"
      class="h-40 mx-auto object-contain mb-4"
    />

    
    <button
      @click="addToCart"
      class="w-full bg-black text-white py-2 rounded mb-3 cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"
    >
      Add To Cart
    </button>

   
    <h3 class="text-sm font-medium mb-1 line-clamp-1">
      {{ product.title }}
    </h3>

    <div class="flex items-center gap-2">
      <span class="text-red-500 font-semibold">
        ${{ product.price }}
      </span>
      <span
        v-if="product.oldPrice"
        class="text-gray-400 line-through text-sm"
      >
        ${{ product.oldPrice }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { useWishlistStore } from '@/stores/wishlist'
import Bin from '../icons/bin.vue'


const props = defineProps({
  product: Object,
})

const cart = useCartStore()
const wishlist = useWishlistStore()

const addToCart = () => {
  cart.addToCart(props.product)
}

const remove = () => {
  wishlist.toggle(props.product)
}
</script>
