<template>
  <Loader v-if="loading" />

  <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
    <ProductCard
      v-for="item in products"
      :key="item.id"
      :product="item"
    />
  </div>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import Loader from '@/components/common/Loader.vue'

defineProps({
  products: Array,
  loading: Boolean,
})
</script>
