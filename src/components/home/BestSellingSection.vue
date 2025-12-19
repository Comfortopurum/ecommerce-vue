<script setup>
import { onMounted, ref } from 'vue'
import { getAllProducts } from '@/api/products'
import ProductCard from './ProductCard.vue'

const products = ref([])

onMounted(async () => {
  const { data } = await getAllProducts()
  products.value = data.slice(0, 4).map(p => ({
    ...p,
    oldPrice: p.price + 100,
  }))
})
</script>

<template>
  <section class="mt-24">
    <div class="mb-10">
      <p class="text-red-500 font-semibold flex items-center gap-2">
        <span class="w-2 h-6 bg-red-500 rounded"></span>
        Categories
      </p>
      <h2 class="text-3xl font-bold mt-2">
        Browse By Category
      </h2>
    </div>

    <div class="grid grid-cols-6 gap-4">
      <CategoryCard
        v-for="cat in categories"
        :key="cat.name"
        :title="cat.name"
        :active="cat.name === activeCategory"
        @click="activeCategory = cat.name"
      >
        <!-- ✅ RENDER SVG ICON PROPERLY -->
        <component
          :is="cat.icon"
          class="w-8 h-8"
        />
      </CategoryCard>
    </div>
  </section>
</template>
