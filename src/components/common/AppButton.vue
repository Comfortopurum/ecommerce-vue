<template>
  <button
    :type="type"
    :disabled="loading"
    class="bg-red-500 text-white w-full py-4 cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-600 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"
  >
    <span v-if="!loading">
      <slot />
    </span>
    <span v-else>Loading...</span>
  </button>
</template>

<script setup>
defineProps({
  type: { type: String, default: 'button' },
  loading: Boolean,
})
</script>
