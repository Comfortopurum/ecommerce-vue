import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        
        {
          path: '',
          name: 'Home',
          component: () => import('@/pages/Home.vue'),
        },

        
        {
          path: 'store',
          name: 'Store',
          component: () => import('@/pages/Store.vue'),
        },

        
        {
          path: 'products/:id',
          name: 'ProductDetails',
          component: () => import('@/pages/ProductDetails.vue'),
        },

        
        {
          path: 'signin',
          name: 'SignIn',
          component: () => import('@/pages/SignIn.vue'),
        },
        {
          path: 'signup',
          name: 'SignUp',
          component: () => import('@/pages/SignUp.vue'),
        },

        
        {
          path: 'wishlist',
          component: () => import('@/pages/Wishlist.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'checkout',
          component: () => import('@/pages/Checkout.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'cart',
          component: () => import('@/pages/Cart.vue'),
        },
        {
          path: 'account',
          component: () => import('@/pages/Account.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: 'about',
          component: () => import('@/pages/About.vue'),
        },
        {
          path: 'contact',
          component: () => import('@/pages/Contact.vue'),
        },
      ],
    },

   
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/NotFound.vue'),
    },
  ],
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    return '/signin'
  }
})

export default router
