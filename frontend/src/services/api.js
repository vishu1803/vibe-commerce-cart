import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const productAPI = {
  getProducts: () => api.get('/products'),
  seedProducts: () => api.post('/products/seed')
};

export const cartAPI = {
  getCart: () => api.get('/cart'),
  addToCart: (productId, quantity) => api.post('/cart', { productId, quantity }),
  removeFromCart: (itemId) => api.delete(`/cart/${itemId}`),
  updateCartItem: (itemId, quantity) => api.put(`/cart/${itemId}`, { quantity }),
  clearCart: () => api.delete('/cart')
};

export const checkoutAPI = {
  checkout: (data) => api.post('/checkout', data)
};

export default api;
