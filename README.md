# 🛍️ Mini Shopping Cart System

A simple yet functional **Shopping Cart Application** built using **HTML, CSS, and Vanilla JavaScript**.  
It allows users to **browse products, add/remove items from the cart, and calculate totals with discounts** — all dynamically handled using DOM manipulation and JavaScript functions.

---

## 🚀 Features

✅ **Product Listing**  
Displays all available products (with image, name, and price).

✅ **Add to Cart**  
Easily add any product to your shopping cart with a single click.

✅ **Quantity Control**  
Increase or decrease product quantities directly using the `+` and `–` buttons.

✅ **Dynamic Cart Rendering**  
Automatically updates the cart display as items are added or removed.

✅ **Discount Calculation**  
Applies a configurable discount (default: 20%) on the total bill.

✅ **Real-Time Price Updates**  
Shows both gross total and net total after discount dynamically.

✅ **Error Handling**  
Gracefully handles missing products or incorrect IDs.

---
## 🧠 Key Learnings

- DOM Manipulation using Vanilla JS  
- Dynamic rendering without page reload  
- Array handling and object manipulation  
- Real-time cart updates  
- Basic discount logic implementation  

---
## 🧩 Tech Stack

| Technology | Description |
|-------------|-------------|
| **HTML5** | Structure of the app |
| **CSS3** | Basic layout and styling |
| **JavaScript (ES6)** | Core logic, dynamic updates, and DOM handling |

---

## 📂 Folder Structure

```
┣ 📂 images
┃ ┣ Product1.jpg
┃ ┣ Product2.webp
┃ ┣ Product3.jpeg
┃ ┣ Product4.webp
┃ ┗ Product5.jpeg
┣ 📜 index.html
┣ 📜 style.css
┗ 📜 script.js
```
---

## ⚙️ How It Works

1. **Product List (`products` array):**  
   All product details (id, name, price, image) are stored in a JavaScript array.

2. **Cart (`cart` array):**  
   Maintains items added by the user along with their quantity.

3. **Functions:**
   - `addCart(id)` → Adds a product to the cart (or increases its quantity).  
   - `removeCart(id)` → Removes a product or decreases its quantity.  
   - `calculate(discount)` → Calculates total bill with discount.  
   - `renderProducts()` → Dynamically displays all products in the UI.  
   - `renderCart()` → Dynamically updates the cart section.

4. **Discount Handling:**  
   The discount is set using a variable `discount = 20` and automatically reflected in totals.

---

## 🖥️ Demo Preview (Sample UI Flow)

```
Tshirt Rs.1200 [Add to Cart] [+] [-]
Jeans Rs.1600 [Add to Cart] [+] [-]
Shoes Rs.1200 [Add to Cart] [+] [-]


**Cart Section**
Tshirt Rs.1200 × 2 = Rs.2400
Jeans Rs.1600 × 1 = Rs.1600

Total: Rs.4000
After 20% off: Rs.3200
```
---
## 🛠️ Setup & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/shopping-cart-js.git
   ```
2. Open the project
```bash
  cd shopping-cart-js
  ```
3.Run locally
- Just open index.html in your browser — no server setup needed!

---
## 🧑‍💻 Author

Vishwesh Jain
💼 Frontend Developer |






