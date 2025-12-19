<script setup>
import { ref } from 'vue'
import CategoryCard from './CategoryCard.vue'
import phone from '../icons/phone.vue'
import computer from '../icons/computer.vue'
import watch from '../icons/watch.vue'
import camera from '../icons/camera.vue'
import headphone from '../icons/headphone.vue'
import game from '../icons/game.vue'



const categories = [
  { name: 'Phones', icon: phone },
  { name: 'Computers', icon: computer },
  { name: 'SmartWatch', icon: watch },
  { name: 'Camera', icon: camera},
  { name: 'HeadPhones', icon: headphone},
  { name: 'Gaming', icon: game },
]
</script>

<template>
  <section class="mt-24 ">
    
    <div class="mb-10">
      <p class="text-red-500 font-semibold flex items-center gap-2">
        <span class="w-2 h-6 bg-red-500 rounded"></span>
        Categories
      </p>
      <h2 class="text-3xl font-bold mt-2">
        Browse By Category
      </h2>
    </div>

    
    <div class="grid grid-cols-6 gap-4 ">
      <CategoryCard
        v-for="cat in categories"
        :key="cat.name"
        :title="cat.name"
        :icon="cat.icon"
        
        @click="activeCategory = cat.name"
      />
       
      
    </div>
  </section>
</template>
