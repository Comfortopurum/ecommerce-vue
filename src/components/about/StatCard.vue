<template>
  <div
    class="border rounded-lg p-6 text-center"
    :class="highlight ? 'bg-red-500 text-white' : ''"
  >
    <h3 class="text-2xl font-bold mb-2">{{ title }}</h3>
    <p class="text-sm">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
  highlight: Boolean,
})
</script>
