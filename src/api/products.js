import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com'


export const getAllProducts = () => {
  return axios.get(`${BASE_URL}/products`)
}


export const getCategories = () => {
  return axios.get(`${BASE_URL}/products/categories`)
}

/**
 * Get products by category
 * @param {string} category
 */
export const getProductsByCategory = (category) => {
  return axios.get(`${BASE_URL}/products/category/${category}`)
}

/**
 * Get single product by id
 * @param {number|string} id
 */
export const getProductById = (id) => {
  return axios.get(`${BASE_URL}/products/${id}`)
}
