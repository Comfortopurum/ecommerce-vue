<script setup lang="ts">
import Bus from "../icons/bus.vue";
import Earpiece from "../icons/earpiece.vue";
import Safe from "../icons/safe.vue";
</script>

<template>
  <section class="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    <div>
      <div
        class="mx-auto mb-4 h-16 w-16 rounded-full flex items-center justify-center group"
      >
        <div
          class="flex items-center justify-center h-16 w-16 bg-gray-300 rounded-full p-2 transition-colors duration-300 group-hover:bg-gray-100"
        >
          <Bus
            class="p-2 bg-black text-white rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-black"
          />
        </div>
      </div>
      <h4 class="font-semibold">FREE AND FAST DELIVERY</h4>
      <p class="text-sm text-gray-500">
        Free delivery for all orders over $140
      </p>
    </div>

    <div>
      <div
        class="mx-auto mb-4 h-16 w-16 rounded-full flex items-center justify-center group"
      >
        <div
          class="flex items-center justify-center h-16 w-16 bg-gray-300 rounded-full p-2 transition-colors duration-300 group-hover:bg-gray-100"
        >
          <Earpiece
            class="p-2 bg-black text-white rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-black"
          />
        </div>
      </div>
      <h4 class="font-semibold">24/7 CUSTOMER SERVICE</h4>
      <p class="text-sm text-gray-500">Friendly 24/7 customer support</p>
    </div>

    <div>
      <div
        class="mx-auto mb-4 h-16 w-16 rounded-full flex items-center justify-center group"
      >
        <div
          class="flex items-center justify-center h-16 w-16 bg-gray-300 rounded-full p-2 transition-colors duration-300 group-hover:bg-gray-100"
        >
          <Safe
            class="p-2 bg-black text-white rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-black"
          />
        </div>
      </div>

      <h4 class="font-semibold">MONEY BACK GUARANTEE</h4>
      <p class="text-sm text-gray-500">We return money within 30 days</p>
    </div>
  </section>
</template>
