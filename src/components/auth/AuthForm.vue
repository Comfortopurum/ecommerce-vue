<script setup>
import AppInput from '@/components/common/AppInput.vue'

defineProps({
  model: Object,
  submitText: String,
  showName: Boolean,
})
</script>

<template>
  <div class="space-y-6">
    <AppInput
      v-if="showName"
      v-model="model.name"
      placeholder="Name"
    />

    <AppInput
      v-model="model.email"
      placeholder="Email or Phone Number"
    />

    <AppInput
      v-model="model.password"
      type="password"
      placeholder="Password"
    />

    <button
      type="submit"
      class="w-full bg-red-500 text-white py-3 rounded"
    >
      {{ submitText }}
    </button>
  </div>
</template>
