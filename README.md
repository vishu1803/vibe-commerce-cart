
# Vibe Commerce - Shopping Cart Application

A full-stack e-commerce shopping cart application built with React, Express, MongoDB, and Tailwind CSS for the Vibe Commerce screening assignment.

## 🚀 Features

- **Product Catalog**: Browse through a curated collection of products
- **Shopping Cart**: Add, remove, and update item quantities
- **Persistent Storage**: Cart data saved in MongoDB
- **Mock Checkout**: Complete purchase flow with customer information
- **Order Confirmation**: Receipt modal with order details
- **Responsive Design**: Fully responsive UI using Tailwind CSS
- **Real-time Updates**: Live cart count in navigation
- **Error Handling**: Comprehensive error messages and loading states

## 🛠️ Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **React Router DOM** 6.20.0 - Client-side routing
- **Tailwind CSS** 3.4.0 - Utility-first CSS framework
- **Axios** 1.6.0 - HTTP client
- **PostCSS & Autoprefixer** - CSS processing

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📁 Project Structure

vibe-commerce-cart/
├── backend/
│ ├── config/
│ │ └── db.js # Database connection
│ ├── models/
│ │ ├── Product.js # Product schema
│ │ ├── Cart.js # Cart schema
│ │ └── Order.js # Order schema
│ ├── controllers/
│ │ ├── productController.js # Product business logic
│ │ ├── cartController.js # Cart business logic
│ │ └── checkoutController.js # Checkout logic
│ ├── routes/
│ │ ├── productRoutes.js # Product API routes
│ │ ├── cartRoutes.js # Cart API routes
│ │ └── checkoutRoutes.js # Checkout API routes
│ ├── server.js # Entry point
│ ├── .env # Environment variables
│ └── package.json
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ │ ├── ProductCard.js # Product display component
│ │ │ ├── CartItem.js # Cart item component
│ │ │ ├── CheckoutModal.js # Checkout form modal
│ │ │ └── ReceiptModal.js # Order confirmation modal
│ │ ├── pages/
│ │ │ ├── Products.js # Products listing page
│ │ │ └── Cart.js # Shopping cart page
│ │ ├── services/
│ │ │ └── api.js # API service layer
│ │ ├── App.js # Main app component
│ │ ├── index.js # Entry point
│ │ └── index.css # Tailwind directives
│ ├── tailwind.config.js # Tailwind configuration
│ ├── postcss.config.js # PostCSS configuration
│ └── package.json
└── README.md

text

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)

## ⚙️ Installation & Setup

### 1. Clone the Repository

git clone <your-repo-url>
cd vibe-commerce-cart

text

### 2. Backend Setup

Navigate to backend directory
cd backend

Install dependencies
npm install

Create .env file
cat > .env << 'EOL'
PORT=5000
MONGO_URI=mongodb://localhost:27017/vibecommerce
EOL

text

### 3. Frontend Setup

Navigate to frontend directory
cd ../frontend

Install dependencies
npm install

Tailwind CSS is already configured in the project
text

## 🚀 Running the Application

### Start MongoDB

**Windows:**
- MongoDB runs automatically as a service after installation

**Mac:**
brew services start mongodb-community

text

**Linux:**
sudo systemctl start mongodb

text

### Start Backend Server

cd backend
npm run dev

text

Backend will run on: `http://localhost:5000`

### Start Frontend Development Server

Open a new terminal:

cd frontend
npm start

text

Frontend will run on: `http://localhost:3000`

The browser will automatically open to the application.

## 🔌 API Endpoints

### Products
- `GET /api/products` - Retrieve all products
- `POST /api/products/seed` - Seed database with mock products

### Cart
- `GET /api/cart` - Get current cart
- `POST /api/cart` - Add item to cart
{
"productId": "string",
"quantity": number
}

text
- `PUT /api/cart/:id` - Update cart item quantity
{
"quantity": number
}

text
- `DELETE /api/cart/:id` - Remove specific item from cart
- `DELETE /api/cart` - Clear entire cart

### Checkout
- `POST /api/checkout` - Process checkout and create order
{
"customerName": "string",
"customerEmail": "string",
"cartItems": []
}

text

## 💾 Database Schema

### Product Model
{
name: String,
price: Number,
description: String,
image: String,
category: String,
stock: Number,
timestamps: true
}

text

### Cart Model
{
userId: String (default: 'guest-user'),
items: [{
productId: ObjectId,
name: String,
price: Number,
quantity: Number,
image: String
}],
totalPrice: Number,
timestamps: true
}

text

### Order Model
{
customerName: String,
customerEmail: String,
items: Array,
totalAmount: Number,
orderStatus: String,
orderDate: Date,
timestamps: true
}

text

## 🎨 Key Features Explained

### Frontend Architecture
- **Component-based**: Reusable React components with props
- **Tailwind CSS**: Utility-first styling with custom theme
- **React Router**: Client-side routing for SPA experience
- **Axios Service Layer**: Centralized API calls
- **State Management**: React hooks (useState, useEffect)
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

### Backend Architecture
- **MVC Pattern**: Separate routes, controllers, and models
- **RESTful API**: Standard HTTP methods and status codes
- **Mongoose ODM**: Schema validation and type casting
- **Error Handling**: Try-catch blocks with user-friendly messages
- **CORS Enabled**: Frontend-backend communication

## 📸 Screenshots

### Products Page
![Products Page](./screenshots/products.png)
*Browse available products with add to cart functionality*

### Shopping Cart
![Shopping Cart](./screenshots/cart.png)
*View and manage cart items with quantity controls*

### Checkout Modal
![Checkout Modal](./screenshots/checkout.png)
*Enter customer information for order processing*

### Order Receipt
![Order Receipt](./screenshots/receipt.png)
*Order confirmation with receipt details*

## 🧪 Testing

### Test the Application

1. **View Products**: Navigate to home page to see product grid
2. **Add to Cart**: Click "Add to Cart" on any product
3. **View Cart**: Click cart icon in navigation
4. **Update Quantity**: Use +/- buttons to adjust quantities
5. **Remove Items**: Click X button to remove items
6. **Checkout**: Click "Proceed to Checkout"
7. **Complete Order**: Fill form and submit
8. **View Receipt**: See order confirmation modal

## 🐛 Troubleshooting

### Port Already in Use
Kill process on port 3000
npx kill-port 3000

Or use different port
set PORT=3001 && npm start

text

### MongoDB Connection Error
Check if MongoDB is running
mongo --version

Start MongoDB service
Windows: Check Services app
Mac: brew services start mongodb-community
Linux: sudo systemctl start mongodb
text

### Tailwind CSS Not Working
Clear cache and restart
rm -rf node_modules/.cache
npm start

Hard refresh browser: Ctrl + Shift + R
text

### npm install Fails
Clear npm cache
npm cache clean --force

Delete and reinstall
rm -rf node_modules package-lock.json
npm install

text

## 🔮 Future Enhancements

- [ ] User authentication (JWT tokens)
- [ ] Multiple user cart support
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Product search and filtering
- [ ] Category-based browsing
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Order history page
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Image upload for products
- [ ] Inventory management
- [ ] Discount codes/coupons
- [ ] Shipping calculator

## 🤝 Contributing

This is a screening assignment project. For educational purposes only.

## 📝 License

MIT License - feel free to use this project for learning purposes.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Vibe Commerce for the assignment opportunity
- React and Tailwind CSS communities
- MongoDB documentation
- Express.js framework

---

**Built with ❤️ for Vibe Commerce Screening Assignment