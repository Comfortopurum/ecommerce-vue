import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com'

/**
 * Login user (FakeStore API)
 * @param {Object} credentials
 * @param {string} credentials.username
 * @param {string} credentials.password
 */
export const loginUser = (credentials) => {
  return axios.post(`${BASE_URL}/auth/login`, credentials)
}
