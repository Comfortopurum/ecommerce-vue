<template>
  <div>
    <div class="mx-auto mb-4 h-12 w-12 rounded-full border flex items-center justify-center">
      ✔
    </div>
    <h4 class="font-semibold mb-2">{{ title }}</h4>
    <p class="text-gray-500 text-sm">{{ subtitle }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
})
</script>
