import axios from 'axios'

export const createCart = (cart) =>
  axios.post('https://fakestoreapi.com/carts', cart)
