


<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const categories = [
  { label: "Women’s Fashion", value: "women's clothing" },
  { label: "Men’s Fashion", value: "men's clothing" },
  { label: "Electronics", value: "electronics" },
  { label: "Jewelery", value: "jewelery" },
  { label: "Sports & Outdoors", value: "jewelery" },
  { label: "Babies & toys", value: "jewelery" },
  { label: "Health & Beauty", value: "jewelery" },
  { label: "Groceries", value: "jewelery" },
  
]

function goToCategory(category) {
  router.push({
    path: '/store',
    query: { category },
  })
}
</script>

<template>
  <aside class="w-64 border-r pr-6 hidden md:block">
    <ul class="space-y-4 text-sm">
      <li
        v-for="cat in categories"
        :key="cat.value"
        class="flex justify-between items-center cursor-pointer text-lg hover:text-red-500"
        @click="goToCategory(cat.value)"
      >
        {{ cat.label }}
        <span>›</span>
      </li>
    </ul>
  </aside>
</template>

