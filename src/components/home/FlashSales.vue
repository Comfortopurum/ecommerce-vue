<script setup>
import { ref, onMounted } from "vue";
import { getAllProducts } from "@/api/products";
import CountdownTimer from "./CountdownTimer.vue";
import FlashProductCard from "./FlashProductCard.vue";

const products = ref([]);
const showAll = ref(false);
const loading = ref(true);

onMounted(async () => {
  try {
    const { data } = await getAllProducts();
    products.value = data.slice(0, 10).map((p) => ({
      ...p,
      oldPrice: p.price + 40,
      discount: 30,
    }));
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <section class="mt-20">
    <div class="flex justify-between items-center mb-8">
      <div>
        <p class="text-red-500 font-semibold">Today’s</p>
        <h2 class="text-3xl font-bold">Flash Sales</h2>
      </div>

      <CountdownTimer />
    </div>

    <div v-if="loading" class="flex gap-6">
      <div
        v-for="n in 4"
        :key="n"
        class="w-64 h-80 bg-gray-200 animate-pulse rounded"
      />
    </div>

    <div
      v-else
      class="flex gap-6 overflow-x-auto pb-6"
      :class="{ 'grid grid-cols-4': showAll }"
    >
      <FlashProductCard v-for="p in products" :key="p.id" :product="p" />
    </div>

    <div class="text-center mt-10">
      <button
        class="bg-red-500 text-white px-8 py-3 rounded cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"
        @click="showAll = true"
        :disabled="loading"
      >
        View All Products
      </button>
    </div>
  </section>
</template>
