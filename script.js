// script.js

let cartCount = 0;
let total = 0;

// Menu items with images
const menuItems = [
  {
    name: "Chicken Shawarma",
    category: "Popular Dishes",
    desc: "Juicy grilled chicken wrapped in flatbread",
    price: 120,
    img: "https://raw.githubusercontent.com/Vipinqa/restaurant-website/main/smoky-curve-images/Chicken_Shawarma.webp"
  },
  {
    name: "Fried Rice",
    category: "Popular Dishes",
    desc: "Delicious fried rice with vegetables and spices",
    price: 150,
    img: "https://raw.githubusercontent.com/Vipinqa/restaurant-website/main/smoky-curve-images/Fried%20Rice.webp"
  },
  {
    name: "Tandoori Chicken",
    category: "Popular Dishes",
    desc: "Spicy and flavorful tandoori chicken",
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

  // Group items by category
  const categories = [...new Set(menuItems.map(item => item.category))];

  categories.forEach(cat => {
    const catDiv = document.createElement("div");
    catDiv.className = "menu-category";

    const titleDiv = document.createElement("div");
    titleDiv.className = "menu-title";
    titleDiv.innerText = `🔥 ${cat}`;
    catDiv.appendChild(titleDiv);

    const itemsDiv = document.createElement("div");
    itemsDiv.className = "menu-items";

    menuItems.filter(item => item.category === cat).forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item";

      itemDiv.innerHTML = `
        <div>
          <h4 class="food-name">${item.name}</h4>
          <p>${item.desc}</p>
        </div>
        <div>
          <img src="${item.img}" alt="${item.name}" style="width:100px;height:70px;object-fit:cover;border-radius:8px;"><br>
          ₹${item.price} <br>
          <button onclick="addToCart('${item.name}',${item.price})">Add to Cart</button>
        </div>
      `;
      itemsDiv.appendChild(itemDiv);
    });

    catDiv.appendChild(itemsDiv);
    container.appendChild(catDiv);
  });
}

// Search function
function initSearch(searchId, containerId) {
  const searchInput = document.getElementById(searchId);
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();
    const items = document.querySelectorAll(`#${containerId} .item`);

    items.forEach(item => {
      const name = item.querySelector(".food-name").innerText.toLowerCase();
      item.style.display = name.includes(value) ? "flex" : "none";
    });
  });
}

// Initialize menu and search when page loads
document.addEventListener("DOMContentLoaded", () => {
  renderMenu("menu-container");
  initSearch("search", "menu-container");
});
