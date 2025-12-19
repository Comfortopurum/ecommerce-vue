<script setup>
import { reactive } from 'vue'
import AppButton from '../components/common/AppButton.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: '',
})

function submitForm() {
  if (!form.name || !form.email || !form.phone) {
    alert('Please fill all required fields')
    return
  }

  
  alert('Message sent successfully!')

  form.name = ''
  form.email = ''
  form.phone = ''
  form.message = ''
}
</script>

<template>
  <div class="container mx-auto px-6 py-16">
    
    <p class="text-sm text-gray-400 mb-12">
      Home / <span class="text-black">Contact</span>
    </p>

    <div class="grid md:grid-cols-3 gap-12">
     
      <div class="bg-white shadow-sm p-8 space-y-10">
       
        <div>
          <div class="flex items-center gap-4 mb-4">
            <span class="bg-red-500 text-white p-3 rounded-full">📞</span>
            <h3 class="font-semibold">Call To Us</h3>
          </div>
          <p class="text-sm text-gray-600 mb-2">
            We are available 24/7, 7 days a week.
          </p>
          <p class="text-sm font-medium">
            Phone: +8801611112222
          </p>
        </div>

        <hr />

      
        <div>
          <div class="flex items-center gap-4 mb-4">
            <span class="bg-red-500 text-white p-3 rounded-full">✉️</span>
            <h3 class="font-semibold">Write To Us</h3>
          </div>
          <p class="text-sm text-gray-600 mb-2">
            Fill out our form and we will contact you within 24 hours.
          </p>
          <p class="text-sm font-medium">
            Emails: customer@exclusive.com
          </p>
          <p class="text-sm font-medium">
            Emails: support@exclusive.com
          </p>
        </div>
      </div>

     
      <div class="md:col-span-2 bg-white shadow-sm p-10">
        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid md:grid-cols-3 gap-6">
            <input
              v-model="form.name"
              placeholder="Your Name *"
              class="contact-input"
            />
            <input
              v-model="form.email"
              placeholder="Your Email *"
              class="contact-input"
            />
            <input
              v-model="form.phone"
              placeholder="Your Phone *"
              class="contact-input"
            />
          </div>

          <textarea
            v-model="form.message"
            placeholder="Your Message"
            rows="8"
            class="contact-input"
          ></textarea>

          <div class=" w-1/3 flex justify-end">
            <AppButton
              type="submit"
              class="bg-red-500 text-white px-10 py-4"
            >
              Send Message
            </AppButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact-input {
  width: 100%;
  padding: 14px;
  background: #f5f5f5;
  border: none;
  outline: none;
  resize: none;
}
</style>
