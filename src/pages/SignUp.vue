

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import AuthLayout from '@/components/auth/AuthLayout.vue'
import AuthForm from '@/components/auth/AuthForm.vue'
import Google from '../components/icons/google.vue'

const router = useRouter()
const auth = useAuthStore()

const form = reactive({
  name: '',
  email: '',
  password: '',
})

function handleSignup() {
  auth.signup(form)
  router.push('/')
}
</script>

<template>
  <AuthLayout>
    <h1 class="text-3xl font-semibold mb-2">
      Create an account
    </h1>
    <p class="text-gray-500 mb-10">
      Enter your details below
    </p>

    <form @submit.prevent="handleSignup">
      <AuthForm
        :model="form"
        submit-text="Create Account"
        show-name
      />
    </form>

   
    <button
      class="w-full border py-3 mt-6 flex items-center justify-center gap-3"
    >
      <Google/>
      Sign up with Google
    </button>

    <p class="text-sm mt-6 text-center">
      Already have account?
      <RouterLink to="/signin" class="underline">
        Log in
      </RouterLink>
    </p>
  </AuthLayout>
</template>
