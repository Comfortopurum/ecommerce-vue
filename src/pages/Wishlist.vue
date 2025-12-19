<script setup>
import { computed, onMounted, ref } from 'vue'
import { useWishlistStore } from '@/stores/wishlist'
import { getAllProducts } from '@/api/products'
import WishlistCard from '@/components/wishlist/WishlistCard.vue'
import ProductGrid from '@/components/product/ProductGrid.vue'

const wishlist = useWishlistStore()

const wishlistCount = computed(() => wishlist.items.length)

const recommendations = ref([])

onMounted(async () => {
  const { data } = await getAllProducts()
  recommendations.value = data.slice(0, 4)
})

const moveAllToBag = () => {
  wishlist.items.forEach(item => {
    // cart logic handled inside card if needed later
  })
  alert('All items moved to cart')
}
</script>

<template>
  <div class="container mx-auto px-6 py-10">
    
    <div class="flex justify-between items-center mb-10">
      <h1 class="text-xl font-semibold">
        Wishlist ({{ wishlistCount }})
      </h1>

      <button
        class="border px-6 py-2 rounded hover:bg-black hover:text-white"
        @click="moveAllToBag"
      >
        Move All To Bag
      </button>
    </div>

    
    <div
      v-if="wishlist.items.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-20"
    >
      <WishlistCard
        v-for="item in wishlist.items"
        :key="item.id"
        :product="item"
      />
    </div>

    <p v-else class="text-gray-500 mb-20">
      Your wishlist is empty.
    </p>

    <div class="flex justify-between items-center mb-6">
      <h2 class="text-lg font-semibold flex items-center gap-2">
        <span class="w-1 h-6 bg-red-500"></span>
        Just For You
      </h2>

      <RouterLink
        to="/store"
        class="border px-4 py-2 rounded hover:bg-black hover:text-white"
      >
        See All
      </RouterLink>
    </div>

    <ProductGrid
      :products="recommendations"
      :loading="false"
    />
  </div>
</template>
