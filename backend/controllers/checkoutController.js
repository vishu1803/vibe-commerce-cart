const Order = require('../models/Order');
const Cart = require('../models/Cart');

exports.checkout = async (req, res) => {
  try {
    const { customerName, customerEmail, cartItems } = req.body;
    
    if (!customerName || !customerEmail) {
      return res.status(400).json({
        success: false,
        message: 'Customer name and email are required'
      });
    }
    
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty'
      });
    }
    
    const totalAmount = cartItems.reduce(
      (total, item) => total + (item.price * item.quantity),
      0
    );
    
    const order = await Order.create({
      customerName,
      customerEmail,
      items: cartItems,
      totalAmount,
      orderStatus: 'confirmed',
      orderDate: new Date()
    });
    
    await Cart.findOneAndUpdate(
      { userId: 'guest-user' },
      { items: [], totalPrice: 0 }
    );
    
    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      data: {
        orderId: order._id,
        customerName: order.customerName,
        customerEmail: order.customerEmail,
        items: order.items,
        totalAmount: order.totalAmount,
        orderDate: order.orderDate,
        orderStatus: order.orderStatus
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error processing checkout',
      error: error.message
    });
  }
};
