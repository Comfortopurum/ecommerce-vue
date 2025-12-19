<script setup>
defineProps({
  title: String,
  icon: Object,
 
})
</script>

<template>
  <div
    class="border rounded-lg p-6 flex flex-col items-center hover:bg-red-500 hover:text-white justify-center cursor-pointer"

  >
    <component
      :is="icon"
      class=""
    />
    <p class="text-sm">{{ title }}</p>
  </div>
</template>



