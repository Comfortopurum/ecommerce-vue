import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    signup(userData) {
      localStorage.setItem('user', JSON.stringify(userData))
      this.user = userData
    },

    login(email, password) {
      const savedUser = JSON.parse(localStorage.getItem('user'))

      if (
        savedUser &&
        savedUser.email === email &&
        savedUser.password === password
      ) {
        this.user = savedUser
        return true
      }

      return false
    },

    logout() {
      localStorage.removeItem('user')
      this.user = null
    },

   
    updateProfile(updatedData) {
      if (!this.user) return

      this.user = {
        ...this.user,
        ...updatedData,
      }

      localStorage.setItem('user', JSON.stringify(this.user))
    },
  },
})
