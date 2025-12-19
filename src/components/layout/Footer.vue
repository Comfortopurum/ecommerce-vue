<template>
  <footer class="bg-black text-white mt-10">
    <div class="container mx-auto px-6 py-16">
      <!-- TOP GRID -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-10">
        <!-- BRAND / SUBSCRIBE -->
        <div class="space-y-6">
          <h3 class="text-xl font-semibold">Exclusive</h3>

          <div>
            <p class="font-medium mb-2">Subscribe</p>
            <p class="text-sm text-gray-300 mb-4">
              Get 10% off your first order
            </p>

            <div class="relative">
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full bg-black border border-gray-500 rounded px-4 py-3 pr-12 text-sm focus:outline-none"
              />
              <button
                class="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                aria-label="Subscribe"
              >
                ➤
              </button>
            </div>
          </div>
        </div>

        <!-- SUPPORT -->
        <div class="space-y-4">
          <h4 class="font-medium">Support</h4>
          <p class="text-sm text-gray-300 leading-relaxed">
            111 Bijoy sarani, Dhaka,<br />
            DH 1515, Bangladesh.
          </p>
          <p class="text-sm text-gray-300">exclusive@gmail.com</p>
          <p class="text-sm text-gray-300">+88015-88888-9999</p>
        </div>

        <!-- ACCOUNT -->
        <div class="space-y-4">
          <h4 class="font-medium">Account</h4>
          <ul class="space-y-2 text-sm text-gray-300">
            <li><RouterLink to="/account">My Account</RouterLink></li>
            <li><RouterLink to="/signin">Login / Register</RouterLink></li>
            <li><RouterLink to="/cart">Cart</RouterLink></li>
            <li><RouterLink to="/wishlist">Wishlist</RouterLink></li>
            <li><RouterLink to="/store">Shop</RouterLink></li>
          </ul>
        </div>

        <!-- QUICK LINK -->
        <div class="space-y-4">
          <h4 class="font-medium">Quick Link</h4>
          <ul class="space-y-2 text-sm text-gray-300">
            <li><RouterLink to="/privacy">Privacy Policy</RouterLink></li>
            <li><RouterLink to="/terms">Terms Of Use</RouterLink></li>
            <li><RouterLink to="/faq">FAQ</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>

        <!-- DOWNLOAD APP -->
        <div class="space-y-6">
          <h4 class="font-medium">Download App</h4>
          <p class="text-sm text-gray-300">
            Save $3 with App New User Only
          </p>

          <div class="flex gap-4">
            <!-- QR -->
            <img
              src="/qr-code.png"
              alt="QR Code"
              class="w-20 h-20 object-contain bg-white p-1"
            />

            <!-- STORES -->
            <div class="flex flex-col gap-3">
              <img
                src="/google-play.png"
                alt="Google Play"
                class="h-10"
              />
              <img
                src="/app-store.png"
                alt="App Store"
                class="h-10"
              />
            </div>
          </div>

          <!-- SOCIALS -->
          <div class="flex gap-5 text-lg">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
        </div>
      </div>

      <!-- DIVIDER -->
      
    </div>
    <div class="border-t border-gray-700  p-4  text-center text-sm text-gray-400">
        © Copyright Rimel 2022. All right reserved
      </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
