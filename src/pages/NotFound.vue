<template>
  <div class="h-screen flex items-center justify-center text-center">
    <div>
      <h1 class="text-7xl font-bold">404 Not Found </h1>
      <p class="mb-10">Page not found</p>
      <div class="w-1/2 mx-auto">
      <AppButton> <RouterLink to="/" class="text-white mt-6 p-10">Go Back to Home</RouterLink></AppButton> 
      </div>
    </div>
  </div>
</template>

<script setup>
import AppButton from '../components/common/AppButton.vue';
</script>