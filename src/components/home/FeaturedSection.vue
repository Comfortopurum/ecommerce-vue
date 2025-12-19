<script setup>
import FeaturedCard from './FeaturedCard.vue'
</script>

<template>
  <section class="mt-24">
    <!-- Header -->
    <div class="mb-10">
      <p class="text-red-500 font-semibold flex items-center gap-2">
        <span class="w-2 h-6 bg-red-500 rounded"></span>
        Featured
      </p>
      <h2 class="text-3xl font-bold mt-2">
        New Arrival
      </h2>
    </div>

   
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Left (Large) -->
      <FeaturedCard
        large
        title="PlayStation 5"
        description="Black and White version of the PS5 coming out on sale."
        image="/ps5.png"
        class="bg-black "
      />

      <!-- Right -->
      <div class="grid grid-cols-1 gap-6">
        <FeaturedCard
          title="Women’s Collections"
          description="Featured woman collections that give you another vibe."
          image="/women.png"
           class="bg-black "
        />

        <div class="grid grid-cols-2  gap-6">
          <FeaturedCard
            title="Speakers"
            image="/speaker-small.png"
             class="bg-black"
          />
          <FeaturedCard
            title="Perfume"
            image="/perfume.png"
             class="bg-black"
          />
        </div>
      </div>
    </div>
  </section>
</template>
