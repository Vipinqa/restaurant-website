// script.js

let cartCount = 0;
let total = 0;

// Menu items with correct image links
const menuItems = [
  { 
    name: "Chicken Shawarma", 
    category: "Popular Dishes", 
    desc: "Delicious Middle Eastern chicken wrap", 
    price: 120,
    img: "https://raw.githubusercontent.com/Vipinqa/restaurant-website/main/smoky-curve-images/Chicken_Shawarma.webp"
  },
  { 
    name: "Fried Rice", 
    category: "Popular Dishes", 
    desc: "Tasty fried rice with vegetables and chicken", 
    price: 150,
    img: "https://raw.githubusercontent.com/Vipinqa/restaurant-website/main/smoky-curve-images/Fried%20Rice.webp"
  },
  { 
    name: "Tandoori Chicken", 
    category: "Popular Dishes", 
    desc: "Spicy marinated chicken grilled to perfection", 
    price: 220,
    img: "https://raw.githubusercontent.com/Vipinqa/restaurant-website/main/smoky-curve-images/Tandoori%20Chicken.webp"
  }
];

// Add to cart function
function addToCart(name, price) {
  cartCount++;
  total += price;

  document.getElementById("cart-count").innerText = cartCount;
  document.getElementById("cart-total").innerText = total;
}

// Function to render menu dynamically
function renderMenu(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  menuItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.setAttribute("data-aos", "fade-up");

    card.innerHTML = `
      <img src="${item.img}" alt="${item.name}">
      <div class="card-content">
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <p class="price">₹${item.price}</p>
        <button onclick="addToCart('${item.name}', ${item.price})">Add to Cart</button>
      </div>
    `;

    container.appendChild(card);
  });
}

// Initialize menu on page load
document.addEventListener("DOMContentLoaded", () => {
  renderMenu("menu-container");
});
