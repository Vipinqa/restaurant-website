let cartCount = 0;
let total = 0;
let cartItems = [];

// Add to Cart
function addToCart(name, price) {
  cartCount++;
  total += price;

  // Add item to cart list
  let existing = cartItems.find(i => i.name === name);
  if(existing){
    existing.qty++;
  } else {
    cartItems.push({name, price, qty: 1});
  }

  // Update cart UI
  document.getElementById("cart-count").innerText = cartCount;
  document.getElementById("cart-total").innerText = total;
}

// Search Function
document.getElementById("search").addEventListener("keyup", function() {
  let value = this.value.toLowerCase();
  let items = document.querySelectorAll(".item");

  items.forEach(item => {
    let name = item.querySelector(".food-name").innerText.toLowerCase();
    item.style.display = name.includes(value) ? "flex" : "none";
  });
});

// Expand/Collapse Categories
document.querySelectorAll(".menu-title").forEach(title => {
  title.addEventListener("click", () => {
    let items = title.nextElementSibling;
    if(items.style.display === "none" || !items.style.display){
      items.style.display = "block";
    } else {
      items.style.display = "none";
    }
  });
});
