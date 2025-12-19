<template>
  <div class="min-h-screen flex flex-col">
    <PromoBar />
    <Navbar />

    <main class="flex-1">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import PromoBar from '@/components/layout/PromoBar.vue'
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>
