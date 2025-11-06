const express = require('express');
const router = express.Router();
const { 
  getCart, 
  addToCart, 
  removeFromCart, 
  updateCartItem,
  clearCart 
} = require('../controllers/cartController');

router.get('/cart', getCart);
router.post('/cart', addToCart);
router.delete('/cart/:id', removeFromCart);
router.put('/cart/:id', updateCartItem);
router.delete('/cart', clearCart);

module.exports = router;
