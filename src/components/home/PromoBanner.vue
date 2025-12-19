<script setup>
import CountdownTimer from './CountdownTimer.vue'
</script>

<template>
  <section class="mt-24">
    <div
      class="bg-black rounded-lg text-white p-12 gap-8 md:gap-0 grid grid-cols-1 md:grid-cols-2 items-center"
    >
      <!-- Left -->
      <div >
        <p class="text-green-400 font-semibold mb-3">
          Categories
        </p>

        <h2 class="text-4xl font-bold mb-6 leading-tight">
          Enhance Your<br />Music Experience
        </h2>

        <div class="mb-8">
          <CountdownTimer variant="pill" />
        </div>

        <RouterLink
          to="/store"
          class="inline-block bg-green-400 text-black px-8 py-3 rounded font-semibold"
        >
          Buy Now!
        </RouterLink>
      </div>

     
      <img
        src="/src/assets/img/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"
        alt="Speaker"
        class=" ml-auto max-h-80  "
      />
    </div>
  </section>
</template>
