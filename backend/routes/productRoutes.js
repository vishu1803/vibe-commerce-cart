const express = require('express');
const router = express.Router();
const { getProducts, seedProducts } = require('../controllers/productController');

router.get('/products', getProducts);
router.post('/products/seed', seedProducts);

module.exports = router;
