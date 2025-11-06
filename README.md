

---

# 🛍️ Vibe Commerce - Shopping Cart Application

A full-stack e-commerce shopping cart application built with **React**, **Express**, **MongoDB**, and **Tailwind CSS** for the **Vibe Commerce** screening assignment.

---

## 🚀 Features

* 🧾 **Product Catalog** — Browse curated products
* 🛒 **Shopping Cart** — Add, remove, and update quantities
* 💾 **Persistent Storage** — Cart data saved in MongoDB
* 💳 **Mock Checkout** — Complete purchase flow with form submission
* 🧾 **Order Confirmation** — Receipt modal with order details
* 📱 **Responsive Design** — Fully responsive UI with Tailwind CSS
* ⚡ **Real-time Updates** — Live cart count in navigation
* 🛠️ **Error Handling** — Comprehensive messages and loading states

---

## 🛠️ Tech Stack

### Frontend

* **React** 18.2.0 — UI library
* **React Router DOM** 6.20.0 — Client-side routing
* **Tailwind CSS** 3.4.1 — Utility-first CSS framework
* **Axios** 1.6.0 — HTTP client
* **PostCSS & Autoprefixer** — CSS post-processing

### Backend

* **Node.js** — Runtime environment
* **Express.js** — Web framework
* **MongoDB** — NoSQL database
* **Mongoose** — MongoDB ODM
* **CORS** — Cross-origin resource sharing
* **dotenv** — Environment configuration

---

## 📁 Project Structure

```
vibe-commerce-cart/
├── backend/
│   ├── config/
│   │   └── db.js              # Database connection
│   ├── models/
│   │   ├── Product.js         # Product schema
│   │   ├── Cart.js            # Cart schema
│   │   └── Order.js           # Order schema
│   ├── controllers/
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   └── checkoutController.js
│   ├── routes/
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   └── checkoutRoutes.js
│   ├── server.js              # Backend entry point
│   ├── .env                   # Environment variables
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductCard.js
│   │   │   ├── CartItem.js
│   │   │   ├── CheckoutModal.js
│   │   │   └── ReceiptModal.js
│   │   ├── pages/
│   │   │   ├── Products.js
│   │   │   └── Cart.js
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
└── README.md
```

---

## 📋 Prerequisites

Ensure you have the following installed:

* **Node.js** ≥ v14 — [Download](https://nodejs.org/)
* **MongoDB** ≥ v4.4 — [Download](https://www.mongodb.com/try/download/community)
* **npm** — Comes with Node.js
* **Git** — [Download](https://git-scm.com/)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <your-repo-url>
cd vibe-commerce-cart
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/vibecommerce
```

### 3️⃣ Frontend Setup

```bash
cd ../frontend
npm install
```

> Tailwind CSS is already configured.

---

## 🚀 Running the Application

### Start MongoDB

**Windows**

```bash
net start MongoDB
```

**macOS**

```bash
brew services start mongodb-community
```

**Linux**

```bash
sudo systemctl start mongodb
```

### Start Backend

```bash
cd backend
npm run dev
```

Backend runs on → `http://localhost:5000`

### Start Frontend

Open a new terminal:

```bash
cd frontend
npm start
```

Frontend runs on → `http://localhost:3000`

---

## 🔌 API Endpoints

### 🧩 Products

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| GET    | `/api/products`      | Fetch all products |
| POST   | `/api/products/seed` | Seed mock products |

### 🛒 Cart

| Method | Endpoint        | Description     |
| ------ | --------------- | --------------- |
| GET    | `/api/cart`     | Get cart items  |
| POST   | `/api/cart`     | Add item        |
| PUT    | `/api/cart/:id` | Update quantity |
| DELETE | `/api/cart/:id` | Remove item     |
| DELETE | `/api/cart`     | Clear cart      |

### 💳 Checkout

| Method | Endpoint        | Description                     |
| ------ | --------------- | ------------------------------- |
| POST   | `/api/checkout` | Process order and create record |

---

## 💾 Database Schemas

### Product Model

```js
{
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  stock: Number,
  timestamps: true
}
```

### Cart Model

```js
{
  userId: String,
  items: [
    { productId: ObjectId, name: String, price: Number, quantity: Number, image: String }
  ],
  totalPrice: Number,
  timestamps: true
}
```

### Order Model

```js
{
  customerName: String,
  customerEmail: String,
  items: Array,
  totalAmount: Number,
  orderStatus: String,
  orderDate: Date,
  timestamps: true
}
```

---

## 🎨 Architecture Overview

### Frontend

* **Component-based** — Modular and reusable
* **Tailwind CSS** — Utility-first styling
* **React Router** — SPA routing
* **Axios Layer** — Centralized API calls
* **Hooks** — `useState`, `useEffect` for logic
* **Responsive UI** — Tailwind breakpoints

### Backend

* **MVC Structure** — Models, Controllers, Routes
* **RESTful API** — Clear endpoints and status codes
* **Mongoose ODM** — Schema validation
* **Error Handling** — Robust responses
* **CORS Enabled** — Smooth frontend-backend comms

---

## 📸 Screenshots

| Page               | Preview                                 | Description                  |
| ------------------ | --------------------------------------- | ---------------------------- |
| **Products Page**  | ![Products](./screenshots/products.png) | Browse and add items to cart |
| **Shopping Cart**  | ![Cart](./screenshots/cart.png)         | Manage items and quantities  |
| **Checkout Modal** | ![Checkout](./screenshots/checkout.png) | Submit customer info         |
| **Order Receipt**  | ![Receipt](./screenshots/receipt.png)   | View order confirmation      |

---

## 🧪 Testing the App

1. View product grid on home page
2. Add product(s) to cart
3. Open cart to view items
4. Adjust quantities or remove items
5. Proceed to checkout and submit form
6. View order receipt modal

---

## 🐛 Troubleshooting

### Port Already in Use

```bash
npx kill-port 3000
set PORT=3001 && npm start
```

### MongoDB Connection Error

```bash
mongo --version
net start MongoDB
```

### Tailwind CSS Not Working

```bash
rm -rf node_modules/.cache
npm start
```

Then hard refresh browser (**Ctrl + Shift + R**)

### npm install Fails

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## 🔮 Future Enhancements

* [ ] JWT-based user authentication
* [ ] Multi-user cart support
* [ ] Stripe/PayPal integration
* [ ] Product filtering and search
* [ ] Category browsing
* [ ] Reviews and ratings
* [ ] Wishlist functionality
* [ ] Order history page
* [ ] Admin dashboard
* [ ] Email notifications
* [ ] Product image uploads
* [ ] Discount codes / coupons
* [ ] Inventory management

---

## 🤝 Contributing

This project was built as part of the **Vibe Commerce Screening Assignment**.
Feel free to use it for learning or extend it with new features.

---



---

## 👨‍💻 Author

**Vishwanath Nishad**

* GitHub: [@vishu1803](https://github.com/vishu1803)
* Email: [your.email@example.com](mailto:your.email@example.com)

---

## 🙏 Acknowledgments

* Vibe Commerce for the assignment
* React & Tailwind CSS communities
* MongoDB and Express.js docs

---

**Built with ❤️ by Vishwanath Nishad for the Vibe Commerce Screening Assignment**

---


