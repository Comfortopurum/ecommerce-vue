<script setup>
import { ref, onMounted } from 'vue'
import { getAllProducts } from '@/api/products'
import CategorySidebar from '@/components/home/CategorySidebar.vue'
import HeroCarousel from '@/components/home/HeroCarousel.vue'
import FlashSales from '@/components/home/FlashSales.vue'
import CategorySection from '../components/home/CategorySection.vue'
import BestSellingSection from '../components/home/BestSellingSection.vue'
import PromoBanner from '../components/home/PromoBanner.vue'
import ExploreProducts from '../components/home/ExploreProducts.vue'
import FeaturedSection from '../components/home/FeaturedSection.vue'
import ServiceHighlights from '../components/home/ServiceHighlights.vue'


const products = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const { data } = await getAllProducts()
    products.value = data.slice(0, 8)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="container mx-auto p-6">
  
    <section class="flex gap-10 mt-10">
      <CategorySidebar />
      <HeroCarousel />
    </section>

   
    <FlashSales />

    <CategorySection  />

  
    <BestSellingSection />
    <PromoBanner/>
    <ExploreProducts/>
    <FeaturedSection/>
    <ServiceHighlights/>
  </div>
</template>
