<script setup>
defineProps({
  title: String,
  subtitle: String,
  description: String,
  image: String,
  large: Boolean,
})
</script>

<template>
  <div
    class="relative overflow-hidden rounded-lg text-white"
    :class="large ? 'h-full' : 'h-48'"
  >
   
    <img
      :src="image"
      class="absolute inset-0 w-full h-full object-contain"
    />

    

    
    <div class="relative z-10 p-6 flex flex-col justify-end h-full">
      <h3 class="text-xl font-semibold mb-1">
        {{ title }}
      </h3>

      <p v-if="description" class="text-sm mb-2">
        {{ description }}
      </p>

      <RouterLink
        to="/store"
        class="underline text-sm font-medium"
      >
        Shop Now
      </RouterLink>
    </div>
  </div>
</template>
