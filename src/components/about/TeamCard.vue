<template>
  <div>
    <img :src="image" class="mx-auto mb-4 rounded" />
    <h3 class="font-semibold">{{ name }}</h3>
    <p class="text-gray-500 text-sm">{{ role }}</p>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  image: String,
})
</script>
