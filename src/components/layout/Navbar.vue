<script setup>
import { useAuthStore } from "@/stores/auth";
import { useCartStore } from "@/stores/cart";
import Search from "../icons/Search.vue";
import Heart from "../icons/heart.vue";
import Cart from "../icons/Cart.vue";
import Profile from "../icons/Profile.vue";
import { useWishlistStore } from "../../stores/wishlist";
import { ref } from "vue";
import Bag from "../icons/Bag.vue";
import Cancel from "../icons/cancel.vue";
import Star from "../icons/star.vue";
import LogoutIcon from "../icons/LogoutIcon.vue";
import { useRoute } from 'vue-router'
import { computed } from 'vue'


const showAccountMenu = ref(false);

const auth = useAuthStore();
const cart = useCartStore();
const wishlist = useWishlistStore();
const route = useRoute()

const hideCartAndWishlist = computed(() =>
  route.path === '/signin' || route.path === '/signup'
)



import { onMounted, onBeforeUnmount } from 'vue'

function handleClickOutside(e) {
  if (!e.target.closest('.relative')) {
    showAccountMenu.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

</script>

<template>
  <header class="border-b bg-white">
    <div class="container mx-auto mt-2 flex items-center justify-between p-2">
      <RouterLink to="/" class="text-2xl font-bold"> Exclusive </RouterLink>

      <nav class="hidden md:flex gap-8 text-sm font-medium">
        <RouterLink to="/" class="hover:underline">Home</RouterLink>
        <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
        <RouterLink to="/about" class="hover:underline">About</RouterLink>
        <RouterLink to="/signup" class="hover:underline"> Sign Up </RouterLink>
      </nav>

      <div class="flex items-center gap-5">
        <div class="relative hidden md:block">
          <input
            type="text"
            placeholder="What are you looking for?"
            class="bg-gray-100 rounded px-4 py-2 pr-10 text-sm focus:outline-none"
          />
          <span class="absolute right-3 top-2.5 text-gray-500">
            <Search class="" />
          </span>
        </div>

        <RouterLink v-if="!hideCartAndWishlist" to="/wishlist" class="relative  rounded-full text-xl cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-500 p-3 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm" title="Wishlist">
          <Heart class="" />
          <span
            v-if="wishlist.items.length"
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1"
          >
            {{ wishlist.items.length }}
          </span>
        </RouterLink>

        <RouterLink v-if="!hideCartAndWishlist" to="/cart" class="relative text-xl rounded-full  cursor-pointer transition-all duration-200 ease-in-out hover:bg-red-500 p-2 hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm" title="Cart">
          <Cart class="" />
          <span
            v-if="cart.items.length"
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1"
          >
            {{ cart.items.length }}
          </span>
        </RouterLink>

        
        <div v-if="auth.isAuthenticated" class="relative">
          <button
            @click="showAccountMenu = !showAccountMenu"
            class="text-xl rounded-full p-2 hover:bg-red-500 hover:text-white"
          >
            <Profile />
          </button>

          <div
            v-if="showAccountMenu"
            class="absolute right-0 mt-3 w-56 rounded-lg bg-linear-to-br from-gray-400 to-black  opacity-80 bg-blur-sm text-white shadow-lg z-30"
          >
            <ul class="py-2 z-50 text-sm">
              <li>
                <RouterLink
                  to="/account"
                  class="flex items-center gap-3 px-4 py-2 hover:bg-white/10"
                  @click="showAccountMenu = false"
                >
                  <Profile /> Manage My Account
                </RouterLink>
              </li>

              <li
                class="flex items-center   gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer"
              >
                <Bag class=" m-1"/> My Orders
              </li>

              <li
                class="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer"
              >
                <Cancel class=" m-1"/> My Cancellations
              </li>

              <li
                class="flex items-center gap-3 px-4 py-2 hover:bg-white/10 cursor-pointer"
              >
                <Star class=" m-1"/> My Reviews
              </li>

              <li>
                <button
                  class="w-full flex items-center gap-3 px-4 py-2 hover:bg-white/10"
                  @click="
                    auth.logout();
                    showAccountMenu = false;
                  "
                >
                  <LogoutIcon class=" m-1"/> Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
