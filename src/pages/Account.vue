<script setup>
import { reactive, computed } from 'vue'
import { useAuthStore } from '@/stores/auth'
import AppButton from '../components/common/AppButton.vue'

const auth = useAuthStore()

const user = computed(() => auth.user || {})

const form = reactive({
  firstName: user.value?.firstName || '',
  lastName: user.value?.lastName || '',
  email: user.value?.email || '',
  address: user.value?.address || '',
  currentPassword: '',
  newPassword: '',
  confirmPassword: '',
})

function saveChanges() {
  if (form.newPassword && form.newPassword !== form.confirmPassword) {
    alert('Passwords do not match')
    return
  }

  auth.updateProfile({
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    address: form.address,
  })

  alert('Profile updated successfully')
}

function cancelChanges() {
  form.firstName = user.value?.firstName || ''
  form.lastName = user.value?.lastName || ''
  form.email = user.value?.email || ''
  form.address = user.value?.address || ''
  form.currentPassword = ''
  form.newPassword = ''
  form.confirmPassword = ''
}
</script>

<template>
  <div class="container mx-auto px-6 py-16">
    <!-- BREADCRUMB + WELCOME -->
    <div class="flex justify-between items-center mb-12">
      <p class="text-sm text-gray-400">
        Home / <span class="text-black">My Account</span>
      </p>
      <p class="text-sm">
        Welcome!
        <span class="text-red-500">
          {{ user.firstName }} {{ user.lastName }}
        </span>
      </p>
    </div>

    <div class="grid md:grid-cols-4 gap-12">
      <!-- SIDEBAR -->
      <aside class="space-y-8">
        <div>
          <h3 class="font-semibold mb-4">Manage My Account</h3>
          <ul class="space-y-2 text-sm">
            <li class="text-red-500 cursor-pointer">My Profile</li>
            <li class="text-gray-400 cursor-pointer">Address Book</li>
            <li class="text-gray-400 cursor-pointer">My Payment Options</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold mb-4">My Orders</h3>
          <ul class="space-y-2 text-sm">
            <li class="text-gray-400 cursor-pointer">My Returns</li>
            <li class="text-gray-400 cursor-pointer">My Cancellations</li>
          </ul>
        </div>

        <div>
          <h3 class="font-semibold text-sm cursor-pointer">
            My WishList
          </h3>
        </div>
      </aside>

      <!-- MAIN CONTENT -->
      <div class="md:col-span-3 bg-white shadow-sm p-10">
        <h2 class="text-xl font-semibold text-red-500 mb-8">
          Edit Your Profile
        </h2>

        <!-- PROFILE INFO -->
        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <label class="text-sm">First Name</label>
            <input v-model="form.firstName" class="account-input" />
          </div>
          <div>
            <label class="text-sm">Last Name</label>
            <input v-model="form.lastName" class="account-input" />
          </div>
          <div>
            <label class="text-sm">Email</label>
            <input v-model="form.email" class="account-input" />
          </div>
          <div>
            <label class="text-sm">Address</label>
            <input v-model="form.address" class="account-input" />
          </div>
        </div>

        <!-- PASSWORD -->
        <div class="space-y-4 mb-10">
          <label class="text-sm block">Password Changes</label>
          <input
            v-model="form.currentPassword"
            type="password"
            placeholder="Current Password"
            class="account-input"
          />
          <input
            v-model="form.newPassword"
            type="password"
            placeholder="New Password"
            class="account-input"
          />
          <input
            v-model="form.confirmPassword"
            type="password"
            placeholder="Confirm New Password"
            class="account-input"
          />
        </div>

        
        <div class="flex justify-end gap-6">
          <button
            class="text-sm"
            @click="cancelChanges"
          >
            Cancel
          </button>
          <div class="w-1/4">
          <AppButton
            class="bg-red-500 text-white px-8 py-3"
            @click="saveChanges"
          >
            Save Changes
          </AppButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.account-input {
  width: 100%;
  padding: 14px;
  background: #f5f5f5;
  border: none;
  outline: none;
}
</style>
