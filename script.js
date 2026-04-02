// script.js

let cartCount = 0;
let total = 0;

// Full menu array
const menuItems = [
  { name: "Clear Chicken Soup", category: "Soups", desc: "Light chicken broth", price: 229 },
  { name: "Cream Of Mushroom", category: "Soups", desc: "Rich creamy soup", price: 199 },
  { name: "Hot & Sour Veg", category: "Soups", desc: "Spicy tangy soup", price: 189 },
  { name: "Chicken 65", category: "Starters", desc: "", price: 359 },
  { name: "Paneer Tikka", category: "Starters", desc: "", price: 329 },
  { name: "Tandoori Fish", category: "Starters", desc: "", price: 489 },
  { name: "Chicken Fried Rice", category: "Rice", desc: "", price: 279 },
  { name: "Veg Fried Rice", category: "Rice", desc: "", price: 199 },
  { name: "Prawn Fried Rice", category: "Rice", desc: "", price: 289 },
  { name: "Chicken Noodles", category: "Noodles", desc: "", price: 289 },
  { name: "Veg Noodles", category: "Noodles", desc: "", price: 219 },
  { name: "Prawn Noodles", category: "Noodles", desc: "", price: 299 },
  { name: "Chicken Biryani", category: "Biryani", desc: "", price: 229 },
  { name: "Chicken 65 Biryani", category: "Biryani", desc: "", price: 269 },
  { name: "Egg Biryani", category: "Biryani", desc: "", price: 189 },
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
    titleDiv.innerText = `🍽️ ${cat}`;
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
          ₹${item.price} <br>
          <button onclick="addToCart('${item.name}',${item.price})">Add</button>
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
