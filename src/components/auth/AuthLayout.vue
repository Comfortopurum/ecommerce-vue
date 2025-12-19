<script setup lang="ts">


</script>

<template>
    
  <div class="min-h-screen grid md:grid-cols-2">
  
    <div class=" flex items-center justify-start">
      <img
        src="/auth-image.png"
        alt="Auth"
        class="max-w-full "
      />
    </div>

    
    <div class="flex items-center justify-center px-8">
      <div class="w-full max-w-md">
        <slot />
      </div>
    </div>
    
    
  </div>
  
</template>
