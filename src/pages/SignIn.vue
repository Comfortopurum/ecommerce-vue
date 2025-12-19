<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import AuthLayout from '@/components/auth/AuthLayout.vue'
import AuthForm from '@/components/auth/AuthForm.vue'

const router = useRouter()
const auth = useAuthStore()
const error = ref('')

const form = reactive({
  email: '',
  password: '',
})

function handleLogin() {
  const success = auth.login(form.email, form.password)

  if (!success) {
    error.value = 'Invalid credentials'
    return
  }

  router.push('/')
}
</script>

<template>
  <AuthLayout>
    <h1 class="text-3xl font-semibold mb-2">
      Log in to Exclusive
    </h1>
    <p class="text-gray-500 mb-10">
      Enter your details below
    </p>

    <form @submit.prevent="handleLogin">
      <AuthForm
        :model="form"
        submit-text="Log In"
      />
    </form>

    <p v-if="error" class="text-red-500 text-sm mt-4">
      {{ error }}
    </p>

    <div class="flex justify-between items-center mt-6">
      <span></span>
      <a href="#" class="text-red-500 text-sm">
        Forget Password?
      </a>
    </div>
  </AuthLayout>
</template>
