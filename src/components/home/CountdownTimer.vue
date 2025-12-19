<script setup>
defineProps({
  variant: {
    type: String,
    default: 'default',
  },
})

const time = {
  Days: 23,
  Hours: 5,
  Minutes: 59,
  Seconds: 35,
}
</script>

<template>
  <div class="flex gap-4">
    <div
      v-for="(v, k) in time"
      :key="k"
      class="flex flex-col items-center"
      :class="variant === 'pill'
        ? 'bg-white text-black rounded-full h-16 w-16 justify-center'
        : ''"
    >
      <p class="text-lg font-bold">{{ v }}</p>
      <p class="text-xs">{{ k }}</p>
    </div>
  </div>
</template>
