let cartCount = 0;
let total = 0;
let cartItems = [];

function addToCart(name, price) {
  cartCount++;
  total += price;

  let existing = cartItems.find(i => i.name === name);
  if(existing){
    existing.qty++;
  } else {
    cartItems.push({name, price, qty: 1});
  }

  document.getElementById("cart-count").innerText = cartCount;
  document.getElementById("cart-total").innerText = total;
}

document.getElementById("search").addEventListener("keyup", function() {
  let value = this.value.toLowerCase();
  let items = document.querySelectorAll(".item");

  items.forEach(item => {
    let name = item.querySelector(".food-name").innerText.toLowerCase();
    item.style.display = name.includes(value) ? "flex" : "none";
  });
});

document.querySelectorAll(".menu-title").forEach(title => {
  title.addEventListener("click", () => {
    let items = title.nextElementSibling;
    items.style.display = (items.style.display === "none" || !items.style.display) ? "block" : "none";
  });
});
