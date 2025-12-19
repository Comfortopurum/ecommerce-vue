<script setup>
import { ref, onMounted, watch } from 'vue'
import {
  getAllProducts,
  getProductsByCategory,
  getCategories,
} from '@/api/products'
import ProductGrid from '@/components/product/ProductGrid.vue'
import AppButton from '../components/common/AppButton.vue'

const products = ref([])
const categories = ref([])
const selectedCategory = ref('all')
const loading = ref(true)

onMounted(async () => {
  const [prodRes, catRes] = await Promise.all([
    getAllProducts(),
    getCategories(),
  ])
  products.value = prodRes.data
  categories.value = ['all', ...catRes.data]
  loading.value = false
})

watch(selectedCategory, async (cat) => {
  loading.value = true
  const res =
    cat === 'all'
      ? await getAllProducts()
      : await getProductsByCategory(cat)

  products.value = res.data
  loading.value = false
})
</script>

<template>
  <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold mb-6">Shop</h1>

    <div class="flex gap-3 mb-6 flex-wrap">
      <AppButton
        v-for="cat in categories"
        :key="cat"
        @click="selectedCategory = cat"
        class="px-4 py-2 border rounded capitalize"
        :class="selectedCategory === cat ? 'bg-black text-white' : ''"
      >
        {{ cat }}
      </AppButton>
    </div>

    <ProductGrid :products="products" :loading="loading" />
  </div>
</template>
