let cartCount = 0;
let total = 0;

function addToCart(name, price) {
  cartCount++;
  total += price;

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
