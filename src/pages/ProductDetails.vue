<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { getProductById, getAllProducts } from '@/api/products'
import RelatedProducts from '@/components/product/RelatedProducts.vue'
import AppButton from '../components/common/AppButton.vue'
import Bus from '../components/icons/bus.vue'
import Cycle from '../components/icons/Cycle.vue'

const route = useRoute()
const product = ref(null)
const related = ref([])
const quantity = ref(1)
const selectedSize = ref('M')

onMounted(async () => {
  const { data } = await getProductById(route.params.id)
  product.value = data

  // simple related products
  const all = await getAllProducts()
  related.value = all.data
    .filter(p => p.category === data.category && p.id !== data.id)
    .slice(0, 4)
})
</script>

<template>
  <div v-if="product" class="container mx-auto px-6 py-16">
   
    <p class="text-sm text-gray-400 mb-8">
      Account / {{ product.category }} / {{ product.title }}
    </p>

   
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
      
      <div class="flex gap-6">
        <div class="flex flex-col gap-4">
          <img
            v-for="n in 4"
            :key="n"
            :src="product.image"
            class="w-20 h-20 object-contain bg-gray-100 p-2 cursor-pointer"
          />
        </div>

        <div class="flex-1 bg-gray-100 p-10 flex items-center justify-center">
          <img
            :src="product.image"
            class="max-h-80 object-contain"
          />
        </div>
      </div>

      
      <div>
        <h1 class="text-2xl font-semibold mb-2">
          {{ product.title }}
        </h1>

        
        <div class="flex items-center gap-2 mb-4">
          <span class="text-yellow-400">★★★★★</span>
          <span class="text-sm text-gray-500">(150 Reviews)</span>
          <span class="text-green-500 text-sm">In Stock</span>
        </div>

        <p class="text-2xl font-semibold mb-6">
          ${{ product.price }}
        </p>

        <p class="text-gray-600 mb-8">
          {{ product.description }}
        </p>

       
        <div class="flex items-center gap-3 mb-6">
          <span class="font-medium">Colours:</span>
          <span class="h-5 w-5 rounded-full bg-black border"></span>
          <span class="h-5 w-5 rounded-full bg-red-500 border"></span>
        </div>

      
        <div class="flex items-center gap-3 mb-6">
          <span class="font-medium">Size:</span>
          <button
            v-for="s in ['XS','S','M','L','XL']"
            :key="s"
            @click="selectedSize = s"
            class="px-3 py-1 border"
            :class="selectedSize === s ? 'bg-red-500 text-white' : ''"
          >
            {{ s }}
          </button>
        </div>

        
        <div class="flex items-center gap-4 mb-8">
          <div class="flex items-center border">
            <button class="px-4" @click="quantity--" :disabled="quantity <= 1">-</button>
            <span class="px-4">{{ quantity }}</span>
            <button class="px-4" @click="quantity++">+</button>
            </div>

            <div class="w-1/3">
          <AppButton class="bg-red-500 text-white px-8 py-3 rounded">
            Buy Now
          </AppButton>
          </div>
          <button class="border p-3 rounded">♡</button>
        </div>

        <!-- DELIVERY INFO -->
        <div class="border rounded divide-y">
          <div class="p-4 flex gap-3">
            <Bus/>
            <div>
              <p class="font-medium">Free Delivery</p>
              <p class="text-sm text-gray-500">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>

          <div class="p-4 flex gap-3">
            <Cycle/>
            <div>
              <p class="font-medium">Return Delivery</p>
              <p class="text-sm text-gray-500">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SECTION 2: RELATED ITEMS -->
    <RelatedProducts :products="related" />
  </div>
</template>
