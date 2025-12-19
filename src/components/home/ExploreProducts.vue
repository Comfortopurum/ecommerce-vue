<script setup>
import { onMounted, ref } from 'vue'
import { getAllProducts } from '@/api/products'
import ExploreProductCard from './ExploreProductCard.vue'

const products = ref([])

onMounted(async () => {
  const { data } = await getAllProducts()

  products.value = data.slice(0, 8).map((p, i) => ({
    ...p,
    rating: Math.floor(Math.random() * 300),
    isNew: i % 3 === 0,
  }))
})
</script>

<template>
  <section class="mt-24">
   
    <div class="flex justify-between items-center mb-10">
      <div>
        <p class="text-red-500 font-semibold flex items-center gap-2">
          <span class="w-2 h-6 bg-red-500 rounded"></span>
          Our Products
        </p>
        <h2 class="text-3xl font-bold mt-2">
          Explore Our Products
        </h2>
      </div>

      <div class="flex gap-2">
        <button class="h-10 w-10 rounded-full border">←</button>
        <button class="h-10 w-10 rounded-full border">→</button>
      </div>
    </div>

   
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <ExploreProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>

  
    <div class="text-center mt-12">
      <RouterLink
        to="/store"
        class="bg-red-500 text-white px-10 py-4 rounded cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"
      >
        View All Products
      </RouterLink>
    </div>
  </section>
</template>
