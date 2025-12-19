<script setup>
import { ref } from 'vue'

const slides = ref([
  {
    title: 'iPhone 14 Series',
    headline: 'Up to 10% off Voucher',
    image: '/iphone.jpg',
  },
])

const active = ref(0)
</script>

<template>
  <div class="relative bg-black rounded-lg overflow-hidden flex-1">
    <div class="grid md:grid-cols-2 items-center p-10 text-white">
      <div>
        <p class="flex items-center gap-2 mb-4">
          <img src="/src/assets/img/apple.png"  alt="apple"  class="" /> {{ slides[active].title }}
        </p>
        <h2 class="text-6xl font-bold mb-6">
          {{ slides[active].headline }}
        </h2>

        <RouterLink
          to="/store"
          class="underline flex items-center gap-2"
        >
          Shop Now →
        </RouterLink>
      </div>

      <img
        :src="slides[active].image"
        class="ml-auto  max-h-full"
      />
    </div>

   
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      <span
        v-for="(_, i) in slides"
        :key="i"
        class="h-2 w-2 rounded-full"
        :class="i === active ? 'bg-red-500' : 'bg-gray-400'"
      />
    </div>
  </div>
</template>
