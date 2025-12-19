<script setup>
import dollar from "../components/icons/dollar.vue";
import store from "../components/icons/store.vue";
import money from "../components/icons/money.vue";
import shopingbag from "../components/icons/shopingbag.vue";
import headphone from "../components/icons/headphone.vue";
import bus from "../components/icons/bus.vue";
import safe from "../components/icons/safe.vue";

const stats = [
  { value: "10.5k", label: "Sellers active our site", icon: store },
  { value: "33k", label: "Monthly Product Sale", icon: money, highlight: true },
  { value: "45.5k", label: "Customer active in our site", icon: shopingbag },
  { value: "25k", label: "Annual gross sale in our site", icon: dollar },
];

const team = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    image: "/team-1.png",
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    image: "/team-3.png",
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    image: "/team-2.png",
  },
];

const services = [
  {
    title: "FREE AND FAST DELIVERY",
    desc: "Free delivery for all orders over $140",
    icon: bus,
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    desc: "Friendly 24/7 customer support",
    icon: headphone,
  },
  {
    title: "MONEY BACK GUARANTEE",
    desc: "We return money within 30 days",
    icon: safe,
  },
];
</script>

<template>
  <div class="mx-auto py-16">
    <p class="px-26 text-sm text-gray-400 mb-12">
      Home / <span class="text-black">About</span>
    </p>

    <div class="grid md:grid-cols-2 gap-16 items-center mb-24">
      <div class="ml-26">
        <h1 class="text-4xl font-semibold mb-6">Our Story</h1>
        <p class="text-gray-600 leading-relaxed mb-4">
          Launched in 2015, Exclusive is South Asia’s premier online shopping
          marketplace with an active presence in Bangladesh. Supported by wide
          range of tailored marketing, data and service solutions, Exclusive has
          10,500 sellers and 300 brands and serves 3 million customers across
          the region.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Exclusive has more than 1 Million products to offer, growing at a very
          fast rate. Exclusive offers a diverse assortment in categories ranging
          from consumer.
        </p>
      </div>

      <div class="">
        <img
          src="/about-hero.jpg"
          alt="About"
          class="rounded-lg w-full object-cover"
        />
      </div>
    </div>
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-2 md:grid-cols-4 text-black gap-6 mb-24">
        <div
          v-for="stat in stats"
          :key="stat.label"
          :icon="stat.icon"
          class="border rounded-lg p-8 text-center hover:text-white hover:bg-red-500"
        >
          <div class="text-4xl flex justify-center items-center">
            <div
              class="bg-gray-300 text-white hover:bg-gray-100 rounded-full p-2"
            >
              <component
                :is="stat.icon"
                class="hover:bg-white hover:text-black p-2 bg-black m-1 rounded-full"
              />
            </div>
          </div>
          <h3 class="text-2xl font-semibold">{{ stat.value }}</h3>
          <p class="text-sm mt-2">
            {{ stat.label }}
          </p>
        </div>
      </div>

      <div class="mb-24">
        <div class="grid md:grid-cols-3 gap-10">
          <div v-for="member in team" :key="member.name" class="text-start">
            <img
              :src="member.image"
              class="w-full h-80 bg-[#F5F5F5] object-contain rounded-lg mb-6"
            />

            <h4 class="font-semibold text-lg">{{ member.name }}</h4>
            <p class="text-gray-500 text-sm mb-4">
              {{ member.role }}
            </p>
            <!--<div class="flex gap-4 text-gray-600">
              <span>🐦</span>
              <span>📷</span>
              <span>🔗</span>
            </div>-->
          </div>
        </div>

        <div class="flex justify-center gap-2 mt-8">
          <span class="w-2 h-2 rounded-full bg-gray-300"></span>
          <span class="w-2 h-2 rounded-full bg-red-500"></span>
          <span class="w-2 h-2 rounded-full bg-gray-300"></span>
          <span class="w-2 h-2 rounded-full bg-gray-300"></span>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-12 text-center">
        <div
          v-for="service in services"
          :key="service.title"
          :icon="service.icon"
        >
          <div class="text-4xl flex justify-center items center mb-4">
            <div
              class="bg-gray-300 text-white hover:bg-gray-100 rounded-full p-2"
            >
              <component
                :is="service.icon"
                class=" hover:bg-white hover:text-black p-2 bg-black  rounded-full"
              />
            </div>
          </div>
          <h5 class="font-semibold mb-2">{{ service.title }}</h5>
          <p class="text-gray-500 text-sm">
            {{ service.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
