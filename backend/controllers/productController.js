const Product = require('../models/Product');

// Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching products',
      error: error.message
    });
  }
};

// Seed mock products (for development)
exports.seedProducts = async (req, res) => {
  try {
    await Product.deleteMany();
    
    const mockProducts = [
      {
        name: 'Wireless Headphones',
        price: 79.99,
        description: 'Premium noise-canceling headphones',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        category: 'Electronics'
      },
      {
        name: 'Smart Watch',
        price: 199.99,
        description: 'Fitness tracking smartwatch',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
        category: 'Electronics'
      },
      {
        name: 'Laptop Backpack',
        price: 49.99,
        description: 'Durable laptop backpack with USB port',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
        category: 'Accessories'
      },
      {
        name: 'Coffee Maker',
        price: 89.99,
        description: 'Programmable coffee maker',
        image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6',
        category: 'Home'
      },
      {
        name: 'Running Shoes',
        price: 119.99,
        description: 'Lightweight running shoes',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
        category: 'Sports'
      }
    ];
    
    const products = await Product.insertMany(mockProducts);
    
    res.status(201).json({
      success: true,
      message: 'Products seeded successfully',
      data: products
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error seeding products',
      error: error.message
    });
  }
};
