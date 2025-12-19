<script setup>
import { useCartStore } from "@/stores/cart";
import { computed } from "vue";
import { useRouter } from "vue-router";
import AppButton from "../components/common/AppButton.vue";

const cart = useCartStore();
const router = useRouter();

const total = computed(() => cart.subtotal);
</script>

<template>
  <div class="container mx-auto px-6 py-16">
    <p class="text-sm text-gray-400 mb-10">Home / Cart</p>

    <div class="overflow-x-auto mb-12">
      <table class="w-full border-separate border-spacing-y-4">
        <thead class="bg-white shadow-sm">
          <tr class="text-left">
            <th class="p-4">Product</th>
            <th class="p-4">Price</th>
            <th class="p-4">Quantity</th>
            <th class="p-4 text-right">Subtotal</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="item in cart.items"
            :key="item.id"
            class="bg-white shadow-sm"
          >
            <td class="p-4 flex items-center gap-4">
              <button class="text-red-500" @click="cart.removeItem(item.id)">
                ✕
              </button>

              <img :src="item.image" class="w-16 h-16 object-contain" />

              <span>{{ item.title }}</span>
            </td>

            <td class="p-4">${{ item.price }}</td>

            <td class="p-4">
              <input
                type="number"
                min="1"
                :value="item.quantity"
                @input="cart.updateQuantity(item.id, +$event.target.value)"
                class="w-20 border px-2 py-1"
              />
            </td>

            <td class="p-4 text-right">${{ item.price * item.quantity }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="flex justify-between mb-16">
      <RouterLink to="/store" class="border px-6 py-3">
        Return To Shop
      </RouterLink>

      <button class="border px-6 py-3">Update Cart</button>
    </div>

    <div class="grid md:grid-cols-2 gap-12">
      <div class="flex gap-4 h-fit">
        <input placeholder="Coupon Code" class="border px-4 py-3 flex-1" />
        <AppButton class="w-10 text-white ">Apply Coupon</AppButton>
      </div>

      <div class="border p-8">
        <h3 class="text-xl font-semibold mb-6">Cart Total</h3>

        <div class="flex justify-between mb-4">
          <span>Subtotal:</span>
          <span>${{ total }}</span>
        </div>

        <div class="flex justify-between mb-4">
          <span>Shipping:</span>
          <span>Free</span>
        </div>

        <hr class="mb-4" />

        <div class="flex justify-between font-semibold mb-6">
          <span>Total:</span>
          <span>${{ total }}</span>
        </div>

        <AppButton
          
          @click="router.push('/checkout')"
        >
          Proceed to checkout
        </AppButton>
      </div>
    </div>
  </div>
</template>
