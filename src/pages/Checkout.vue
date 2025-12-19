<script setup>
import { reactive, computed } from 'vue'
import { useCartStore } from '@/stores/cart'
import { useRouter } from 'vue-router'
import Visa from '../components/icons/visa.vue'
import AppButton from '../components/common/AppButton.vue'

const cart = useCartStore()
const router = useRouter()

const billing = reactive({
  firstName: '',
  company: '',
  address: '',
  apartment: '',
  city: '',
  phone: '',
  email: '',
  saveInfo: false,
  paymentMethod: 'cod',
})

const subtotal = computed(() => cart.subtotal)
const total = computed(() => cart.subtotal)

function placeOrder() {
  if (!billing.firstName || !billing.address || !billing.phone || !billing.email) {
    alert('Please fill in required fields')
    return
  }

  
  cart.clearCart()
  alert('Order placed successfully!')
  router.push('/')
}
</script>

<template>
  <div class="container mx-auto px-6 py-16">
   
    <p class="text-sm text-gray-400 mb-10">
      Account / My Account / Product / View Cart / <span class="text-black">Checkout</span>
    </p>

    <div class="grid md:grid-cols-2 gap-16">
      
      <div>
        <h1 class="text-3xl font-semibold mb-10">Billing Details</h1>

        <div class="space-y-6">
          <input v-model="billing.firstName" placeholder="First Name*" class="checkout-input" />
          <input v-model="billing.company" placeholder="Company Name" class="checkout-input" />
          <input v-model="billing.address" placeholder="Street Address*" class="checkout-input" />
          <input v-model="billing.apartment" placeholder="Apartment, floor, etc. (optional)" class="checkout-input" />
          <input v-model="billing.city" placeholder="Town/City*" class="checkout-input" />
          <input v-model="billing.phone" placeholder="Phone Number*" class="checkout-input" />
          <input v-model="billing.email" placeholder="Email Address*" class="checkout-input" />

          <label class="flex items-center gap-3 text-sm">
            <input type="checkbox" v-model="billing.saveInfo" />
            Save this information for faster check-out next time
          </label>
        </div>
      </div>

      
      <div>
        
        <div class="space-y-6 mb-8">
          <div
            v-for="item in cart.items"
            :key="item.id"
            class="flex justify-between items-center"
          >
            <div class="flex items-center gap-4">
              <img :src="item.image" class="w-12 h-12 object-contain" />
              <span>{{ item.title }}</span>
            </div>
            <span>${{ item.price * item.quantity }}</span>
          </div>
        </div>

        
        <div class="space-y-4 border-t pt-6 mb-6">
          <div class="flex justify-between">
            <span>Subtotal:</span>
            <span>${{ subtotal }}</span>
          </div>
          <div class="flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div class="flex justify-between font-semibold">
            <span>Total:</span>
            <span>${{ total }}</span>
          </div>
        </div>

       
        <div class="space-y-4 mb-8">
          <label class="flex items-center gap-3">
            <input
              type="radio"
              value="bank"
              v-model="billing.paymentMethod"
            />
            Bank
            <span class="flex gap-2 ml-auto">
              <Visa class=""/>
            </span>
          </label>

          <label class="flex items-center gap-3">
            <input
              type="radio"
              value="cod"
              v-model="billing.paymentMethod"
            />
            Cash on delivery
          </label>
        </div>

        
        <div class="flex gap-4 mb-6">
          <input
            placeholder="Coupon Code"
            class="checkout-input flex-1"
          />
          <div class=" w-1/3">
          <AppButton class="bg-red-500 text-white px-6">
            Apply Coupon
          </AppButton>
          </div>
        </div>
        <div class=" w-1/2">
        <AppButton
          class="bg-red-500 text-white px-10 py-4"
          @click="placeOrder"
        >
          Place Order
        </AppButton>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.checkout-input {
  width: 100%;
  padding: 14px;
  background: #f5f5f5;
  border: none;
  outline: none;
}
</style>
