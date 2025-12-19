<script setup>
import ProductCard from '@/components/product/ProductCard.vue'

defineProps({
  products: Array,
})
</script>

<template>
  <section>
    <div class="mb-10">
      <p class="text-red-500 font-semibold flex items-center gap-2">
        <span class="w-2 h-6 bg-red-500 rounded"></span>
        Related Item
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>
