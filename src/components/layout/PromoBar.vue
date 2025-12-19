<template>
  <div class="bg-black text-white text-sm">
    <div
      class="container mx-auto flex justify-between items-center py-2 px-4"
    >
      <p class="text-center w-full  md:w-auto">
        Summer Sale For All Swim Suits And Free Express Delivery – OFF 50%!
        <RouterLink to="/store" class="underline ml-1">
          ShopNow
        </RouterLink>
      </p>

      <div class="hidden md:flex  items-center justify-end gap-1">
        <span>English</span>
        <span>⌄</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
